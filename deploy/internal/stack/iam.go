package stack

import (
	"fmt"

	"cdn-deploy-cdk/internal/config"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/aws-cdk-go/awscdk/v2/awss3"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
)

const (
	githubOidcProviderUrl = "https://token.actions.githubusercontent.com"
	githubOidcThumbprint  = "6938fd4d98bab03faadb97b34396831e3780aea1"
	githubActionsAudience = "sts.amazonaws.com"
	githubCdnRepository   = "fastenhealth/cdn"
	githubRoleOutputName  = "GitHubDeployRoleArn"
)

// newGitHubDeployRole provisions an IAM role for GitHub Actions deployments.
func newGitHubDeployRole(scope constructs.Construct, cfg *config.Config, bucket awss3.IBucket) awsiam.Role {
	roleName := fmt.Sprintf("cdn-gh-s3-%s-deploy-role", cfg.Environment)
	conditions := map[string]any{
		"StringLike": map[string]any{
			"token.actions.githubusercontent.com:sub": fmt.Sprintf("repo:%s:*", githubCdnRepository),
		},
		"StringEquals": map[string]any{
			"token.actions.githubusercontent.com:aud": githubActionsAudience,
		},
	}

	role := awsiam.NewRole(scope, jsii.String("GitHubDeployRole"), &awsiam.RoleProps{
		RoleName:    jsii.String(roleName),
		Description: jsii.String("Allows GitHub Actions to sync the Fasten Connect Cdn assets to S3"),
		AssumedBy: awsiam.NewFederatedPrincipal(
			jsii.String("arn:aws:iam::410145376638:oidc-provider/token.actions.githubusercontent.com"),
			&conditions,
			jsii.String("sts:AssumeRoleWithWebIdentity"),
		),
	})

	bucket.GrantReadWrite(role, nil)

	awscdk.NewCfnOutput(scope, jsii.String(githubRoleOutputName), &awscdk.CfnOutputProps{
		Value: role.RoleArn(),
	})

	return role
}
