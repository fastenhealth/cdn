package common

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
)

// ApplyTags attaches a flat tag map to the provided construct and its children.
func ApplyTags(scope constructs.Construct, tags map[string]string) {
	for k, v := range tags {
		awscdk.Tags_Of(scope).Add(jsii.String(k), jsii.String(v), nil)
	}
}
