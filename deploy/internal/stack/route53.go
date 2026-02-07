package stack

import (
	"cdn-deploy-cdk/internal/config"

	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudfront"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsroute53"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsroute53targets"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
)

// Looks up the Route53 hosted zone by attributes.
func lookupHostedZone(scope constructs.Construct, cfg *config.Config) awsroute53.IHostedZone {
	return awsroute53.HostedZone_FromHostedZoneAttributes(scope, jsii.String("HostedZone"), &awsroute53.HostedZoneAttributes{
		HostedZoneId: jsii.String(cfg.HostedZoneID),
		ZoneName:     jsii.String(cfg.ZoneName),
	})
}

// Creates alias records for the destination hostname.
// This is necessary for CloudFront to serve the site over HTTPS.
func newAliasRecords(scope constructs.Construct, zone awsroute53.IHostedZone, destHost string, dist awscloudfront.Distribution) {
	target := awsroute53.RecordTarget_FromAlias(awsroute53targets.NewCloudFrontTarget(dist))

	awsroute53.NewARecord(scope, jsii.String("AliasA"), &awsroute53.ARecordProps{
		Zone:       zone,
		RecordName: jsii.String(destHost),
		Target:     target,
	})

	awsroute53.NewAaaaRecord(scope, jsii.String("AliasAAAA"), &awsroute53.AaaaRecordProps{
		Zone:       zone,
		RecordName: jsii.String(destHost),
		Target:     target,
	})
}
