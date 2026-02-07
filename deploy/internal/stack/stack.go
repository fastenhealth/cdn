package stack

import (
	"cdn-deploy-cdk/internal/config"
	"fmt"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
)

// CloudFront requires ACM certificates in us-east-1; this is an AWS constraint.
const cloudFrontRegion = "us-east-1"

// NewStaticSite creates the complete static site infrastructure stack.
func NewStaticSite(app constructs.Construct, cfg *config.Config) awscdk.Stack {
	stackName := cfg.StackName()

	stack := awscdk.NewStack(app, &stackName, &awscdk.StackProps{
		Description: jsii.String(fmt.Sprintf("CDK Deploy - CDN %s hosted on CloudFront (backed by S3 Bucket)", cfg.Environment)),
		Env: &awscdk.Environment{
			Region: jsii.String(cloudFrontRegion),
		},
	})

	// 1. Route53 hosted zone (for DNS alias records)
	zone := lookupHostedZone(stack, cfg)

	// 2. Import existing ACM certificate (must be pre-provisioned in us-east-1)
	cert := importCertificate(stack, cfg)

	// 3. S3 origin bucket where the cdn assets will live
	bucket := newContentBucket(stack, cfg)

	// 4. IAM role for GitHub Actions deployments with access to the S3 bucket
	newGitHubDeployRole(stack, cfg, bucket)

	// 5. CloudFront distribution (S3 origin + dest-host alias + headers)
	dist := newCloudFrontDistribution(stack, cfg, cert, bucket)

	// 6. DNS: dest-host -> CloudFront
	newAliasRecords(stack, zone, cfg.DestHost, dist)

	return stack
}
