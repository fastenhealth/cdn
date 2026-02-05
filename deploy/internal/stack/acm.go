package stack

import (
	"fasten-connect-portal-deploy-cdk/internal/config"

	"github.com/aws/aws-cdk-go/awscdk/v2/awscertificatemanager"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
)

// importCertificate imports an existing ACM certificate by ARN.
// This stack does not create certificates; they must be pre-provisioned
// (typically as a wildcard cert like *.connect-dev.fastenhealth.com).
func importCertificate(scope constructs.Construct, cfg *config.Config) awscertificatemanager.ICertificate {
	return awscertificatemanager.Certificate_FromCertificateArn(
		scope,
		jsii.String("Certificate"),
		jsii.String(cfg.CertArn),
	)
}
