package stack

import (
	"cdn-deploy-cdk/internal/common"
	"cdn-deploy-cdk/internal/config"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awscertificatemanager"
	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudfront"
	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudfrontorigins"
	"github.com/aws/aws-cdk-go/awscdk/v2/awss3"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
)

// newCloudFrontDistribution creates a CloudFront distribution
// with security headers in front of the S3 origin bucket.
func newCloudFrontDistribution(scope constructs.Construct, cfg *config.Config, cert awscertificatemanager.ICertificate, bucket awss3.IBucket) awscloudfront.Distribution {
	policy := newSecurityHeadersPolicy(scope)
	origin := awscloudfrontorigins.NewS3Origin(bucket, &awscloudfrontorigins.S3OriginProps{
		OriginAccessIdentity: awscloudfront.NewOriginAccessIdentity(scope, jsii.String("OriginAccessIdentity"), nil),
	})

	// Custom cache policy with 1-week TTL
	// cachePolicy := awscloudfront.NewCachePolicy(scope, jsii.String("OneWeekCachePolicy"), &awscloudfront.CachePolicyProps{
	// 	CachePolicyName: jsii.String("OneWeekStaticAssets"),

	// 	DefaultTtl: awscdk.Duration_Days(jsii.Number(7)),
	// 	MaxTtl:     awscdk.Duration_Days(jsii.Number(30)),
	// 	MinTtl:     awscdk.Duration_Seconds(jsii.Number(0)),

	// 	EnableAcceptEncodingGzip:   jsii.Bool(true),
	// 	EnableAcceptEncodingBrotli: jsii.Bool(true),

	// 	HeaderBehavior:      awscloudfront.CacheHeaderBehavior_None(),
	// 	CookieBehavior:      awscloudfront.CacheCookieBehavior_None(),
	// 	QueryStringBehavior: awscloudfront.CacheQueryStringBehavior_None(),
	// })

	distribution := awscloudfront.NewDistribution(scope, jsii.String("Distribution"), &awscloudfront.DistributionProps{
		DomainNames: &[]*string{
			jsii.String(cfg.DestHost),
		},
		Certificate: cert,

		//Helps SPA by serving index.html for 403 and 404 errors
		DefaultRootObject: jsii.String("index.html"),
		ErrorResponses: &[]*awscloudfront.ErrorResponse{
			{
				HttpStatus:         jsii.Number(403),
				ResponseHttpStatus: jsii.Number(200),
				ResponsePagePath:   jsii.String("/index.html"),
			},
			{
				HttpStatus:         jsii.Number(404),
				ResponseHttpStatus: jsii.Number(200),
				ResponsePagePath:   jsii.String("/index.html"),
			},
		},

		DefaultBehavior: &awscloudfront.BehaviorOptions{
			Origin:                origin,
			ResponseHeadersPolicy: policy,
			ViewerProtocolPolicy:  awscloudfront.ViewerProtocolPolicy_REDIRECT_TO_HTTPS,
			CachePolicy:           awscloudfront.CachePolicy_CACHING_OPTIMIZED(), // use CloudFront default caching
			OriginRequestPolicy:   awscloudfront.OriginRequestPolicy_CORS_S3_ORIGIN(),
		},
	})
	common.ApplyTags(distribution, cfg.Tags())
	return distribution
}

// newSecurityHeadersPolicy creates a response headers policy enforcing
// HSTS, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy.
// Allows all origins for CORS requests, including preflight requests, and adds security headers
func newSecurityHeadersPolicy(scope constructs.Construct) awscloudfront.ResponseHeadersPolicy {
	return awscloudfront.NewResponseHeadersPolicy(scope, jsii.String("SecurityHeaders"), &awscloudfront.ResponseHeadersPolicyProps{
		Comment: jsii.String("Allows all origins for CORS requests, including preflight requests, and adds custom security headers"),
		CorsBehavior: &awscloudfront.ResponseHeadersCorsBehavior{
			AccessControlAllowCredentials: jsii.Bool(false),
			AccessControlAllowHeaders: &[]*string{
				jsii.String("*"),
			},
			AccessControlAllowMethods: &[]*string{
				jsii.String("GET"),
				jsii.String("HEAD"),
				jsii.String("PUT"),
				jsii.String("POST"),
				jsii.String("PATCH"),
				jsii.String("OPTIONS"),
			},
			AccessControlAllowOrigins: &[]*string{
				jsii.String("*"),
			},
			AccessControlExposeHeaders: &[]*string{
				jsii.String("*"),
			},
			AccessControlMaxAge: awscdk.Duration_Seconds(jsii.Number(600)),
			OriginOverride:      jsii.Bool(true),
		},
		SecurityHeadersBehavior: &awscloudfront.ResponseSecurityHeadersBehavior{
			StrictTransportSecurity: &awscloudfront.ResponseHeadersStrictTransportSecurity{
				AccessControlMaxAge: awscdk.Duration_Days(jsii.Number(365)),
				IncludeSubdomains:   jsii.Bool(true),
				Preload:             jsii.Bool(true),
				Override:            jsii.Bool(true),
			},
			ContentTypeOptions: &awscloudfront.ResponseHeadersContentTypeOptions{
				Override: jsii.Bool(true),
			},
			// X-Frame-Options is intentionally left out to allow embedding the CDN in an iframe (e.g. for Fasten Connect integration)
			//FrameOptions: &awscloudfront.ResponseHeadersFrameOptions{
			//	FrameOption: awscloudfront.HeaderFrame,
			//	Override:    jsii.Bool(true),
			//},
			ReferrerPolicy: &awscloudfront.ResponseHeadersReferrerPolicy{
				ReferrerPolicy: awscloudfront.HeadersReferrerPolicy_NO_REFERRER,
				Override:       jsii.Bool(true),
			},
		},
	})
}
