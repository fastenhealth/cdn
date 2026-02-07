package config

import (
	"errors"
	"flag"
	"fmt"
	"strings"
)

// Config holds deployment parameters for the CloudFront stack.
type Config struct {
	// Required:
	DestHost     string // public hostname (e.g. docs.example.com)
	HostedZoneID string // Route53 hosted zone ID (e.g. Z123...)
	ZoneName     string // Route53 zone name (e.g. example.com). Required because CDK cant derive it from zone-id at synth time.
	CertArn      string // existing ACM certificate ARN (must be in us-east-1)
	GithubRepo   string // Github repo to deploy to
	AccountID    string // Account Id

	// Optional:
	Environment string // dev, staging, or prod (default: dev)
}

// ParseFlags reads CLI flags and validates the configuration.
func ParseFlags() (*Config, error) {
	cfg := &Config{}

	flag.StringVar(&cfg.DestHost, "dest-host", "", "Destination hostname (public) (e.g. docs.example.com)")
	flag.StringVar(&cfg.HostedZoneID, "zone-id", "", "Route53 hosted zone ID")
	flag.StringVar(&cfg.ZoneName, "zone-name", "", "Route53 zone name (e.g. example.com)")
	flag.StringVar(&cfg.Environment, "env", "dev", "Deployment environment (dev|staging|prod) (default: dev)")
	flag.StringVar(&cfg.CertArn, "cert-arn", "", "Existing ACM certificate ARN (required; must be in us-east-1)")
	flag.StringVar(&cfg.GithubRepo, "git-repo", "", "Github Repo Name")
	flag.StringVar(&cfg.AccountID, "account-id", "", "Aws Account ID")

	flag.Parse()

	if err := cfg.Validate(); err != nil {
		flag.Usage()
		return nil, err
	}

	return cfg, nil
}

// Validate ensures all required fields are present and valid.
func (c *Config) Validate() error {
	var errs []string

	if c.Environment == "" {
		errs = append(errs, "environment is required")
	} else if !isValidEnvironment(c.Environment) {
		errs = append(errs, fmt.Sprintf("invalid environment %q: must be dev, staging, or prod", c.Environment))
	}

	if c.DestHost == "" {
		errs = append(errs, "dest-host is required")
	}

	if c.HostedZoneID == "" {
		errs = append(errs, "zone-id is required")
	}

	if c.ZoneName == "" {
		errs = append(errs, "zone-name is required")
	}

	if c.CertArn == "" {
		errs = append(errs, "cert-arn is required")
	}
	if c.GithubRepo == "" {
		errs = append(errs, "git-repo is required")
	}

	if c.AccountID == "" {
		errs = append(errs, "account-id is required")
	}

	if len(errs) > 0 {
		return errors.New(strings.Join(errs, "; "))
	}

	return nil
}

// StackName returns a consistent stack name based on environment.
func (c *Config) StackName() string {
	return fmt.Sprintf("%s-%s", c.GithubRepo, c.Environment)
}

func isValidEnvironment(env string) bool {
	switch env {
	case "dev", "prod":
		return true
	}
	return false
}
