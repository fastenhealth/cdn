package config

import (
	"errors"
	"flag"
	"fmt"
	"os/exec"
	"strings"
)

// Config holds deployment parameters for the CloudFront stack.
type Config struct {
	// Required:
	DestHost   string // public hostname (e.g. docs.example.com)
	CertArn    string // existing ACM certificate ARN (must be in us-east-1)
	GithubRepo string // Github repo to deploy to

	// Optional:
	Environment string // dev, staging, or prod (default: dev)

	cdkRepoSha string
}

// ParseFlags reads CLI flags and validates the configuration.
func ParseFlags() (*Config, error) {
	cfg := &Config{}

	flag.StringVar(&cfg.DestHost, "dest-host", "", "Destination hostname (public) (e.g. docs.example.com)")
	flag.StringVar(&cfg.Environment, "env", "dev", "Deployment environment (dev|staging|prod) (default: dev)")
	flag.StringVar(&cfg.CertArn, "cert-arn", "", "Existing ACM certificate ARN (required; must be in us-east-1)")
	flag.StringVar(&cfg.GithubRepo, "git-repo", "cdn", "Github Repo Name")

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

	if c.CertArn == "" {
		errs = append(errs, "cert-arn is required")
	}
	if c.GithubRepo == "" {
		errs = append(errs, "git-repo is required")
	}

	if len(errs) > 0 {
		return errors.New(strings.Join(errs, "; "))
	}

	return nil
}

// StackName returns a consistent stack name based on environment.
func (c *Config) StackName() string {
	return fmt.Sprintf("fasten-connect-%s-%s", c.GithubRepo, c.Environment)
}

func isValidEnvironment(env string) bool {
	switch env {
	case "dev", "prod":
		return true
	}
	return false
}

// Tags replicates the standard Terraform tags map.
func (c *Config) Tags() map[string]string {
	if c.cdkRepoSha == "" {
		c.cdkRepoSha = "unknown"

		cmd := exec.Command("git", "rev-parse", "--short", "HEAD")
		output, err := cmd.Output()
		if err == nil {
			c.cdkRepoSha = strings.TrimSpace(string(output))
		}
	}

	return map[string]string{
		"app_name":     "fasten-connect-api",
		"comp_name":    "cdn",
		"env_name":     c.Environment,
		"cdk":          "true",
		"cdk_repo":     "https://github.com/fastenhealth/cdn",
		"cdk_repo_sha": c.cdkRepoSha,
	}
}
