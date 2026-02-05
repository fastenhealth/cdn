package main

import (
	"fmt"
	"os"

	"fasten-connect-portal-deploy-cdk/internal/config"
	"fasten-connect-portal-deploy-cdk/internal/stack"

	"github.com/aws/aws-cdk-go/awscdk/v2"
)

// Usage: go run . -dest-host=docs.example.com -zone-id=Z123456 -zone-name=example.com
// cdk synth --app "go run . -dest-host=docs.example.com -zone-id=Z123456 -zone-name=example.com"
// cdk deploy --app "go run . -dest-host=portal-test.connect.fastenhealth.com -zone-id=ZXXXXX -zone-name=connect.fastenhealth.com"
func main() {
	cfg, err := config.ParseFlags()
	if err != nil {
		fmt.Fprintf(os.Stderr, "error: %v\n", err)
		os.Exit(1)
	}

	app := awscdk.NewApp(nil)
	stack.NewStaticSite(app, cfg)
	app.Synth(nil)
}
