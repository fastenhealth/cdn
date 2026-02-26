package stack

import (
	"cdn-deploy-cdk/internal/common"
	"cdn-deploy-cdk/internal/config"
	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awss3"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
)

// newContentBucket provisions a private bucket that stores the SPA assets.
func newContentBucket(scope constructs.Construct, cfg *config.Config) awss3.Bucket {
	bucket := awss3.NewBucket(scope, jsii.String(cfg.StackName()), &awss3.BucketProps{
		BlockPublicAccess: awss3.BlockPublicAccess_BLOCK_ALL(),
		Encryption:        awss3.BucketEncryption_S3_MANAGED,
		Versioned:         jsii.Bool(false),
		RemovalPolicy:     awscdk.RemovalPolicy_RETAIN, // don't delete customer data on stack destroy
	})

	// Expose the bucket name so deployments know where to upload the portal build.
	awscdk.NewCfnOutput(scope, jsii.String("SiteBucketName"), &awscdk.CfnOutputProps{
		Value: bucket.BucketName(),
	})

	common.ApplyTags(bucket, cfg.Tags())
	return bucket
}
