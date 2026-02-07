# CloudFront + S3

Serves the Fasten Connect portal through CloudFront with a private S3 origin while layering required security headers.

## Why

We need to host the SPA directly in AWS so we can control access, headers, and deployment lifecycle without relying on GitHub Pages.

## What it creates

- **S3 bucket** - private, versioned bucket that stores the portal build artifacts (bucket name is printed as a CloudFormation output)
- **CloudFront distribution** - serves content from that S3 origin
- **Security headers** - HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- **Route53 records** - A/AAAA alias pointing your domain to CloudFront
- **HTTPS** - redirects HTTP to HTTPS, uses your ACM cert

---

## Dependencies

| Tool        | Version                | Install                     |
| ----------- | ---------------------- | --------------------------- |
| Go          | 1.23+                  | https://go.dev/dl/          |
| AWS CDK CLI | 2.x                    | `npm install -g aws-cdk`    |
| AWS CLI     | 2.x                    | https://aws.amazon.com/cli/ |
| Docker      | (for LocalStack tests) | https://docker.com          |

### Go modules (in `infra/go.mod`)

| Module                                        | Version  |
| --------------------------------------------- | -------- |
| `github.com/aws/aws-cdk-go/awscdk/v2`         | v2.235.1 |
| `github.com/aws/constructs-go/constructs/v10` | v10.4.5  |
| `github.com/aws/jsii-runtime-go`              | v1.125.0 |

---

## Parameters

| Flag          | Required | Description                                | Example                                     |
| ------------- |----------| ------------------------------------------ | ------------------------------------------- |
| `-dest-host`  | Yes      | Public hostname users visit                | `cdn-dev.workspace.fastenhealth.com`        |
| `-git-repo`   | No       | Git Repo Name                              | `cdn`                                       |
| `-account-id` | Yes      | AWS Account ID                             | `123456789012`                              |
| `-cert-arn`   | Yes      | ACM certificate ARN (must be in us-east-1) | `arn:aws:acm:us-east-1:123:certificate/abc` |
| `-env`        | No       | Environment name                           | `dev` (default), `prod`                     |

After deploy the stack outputs `SiteBucketName` so you know where to upload the portal build artifacts (for example with `aws s3 sync dist/ s3://BUCKET-NAME/`) and `GitHubDeployRoleArn` for the GitHub Actions OIDC role.

---

## Step-by-step deploy

### 1. Install dependencies

```bash
# Install Go (macOS)
brew install go

# Install AWS CDK CLI
npm install -g aws-cdk

# Verify
go version        # should be 1.23+
cdk --version     # should be 2.x
aws --version     # should be 2.x
```

### 2. Configure AWS credentials

```bash
# Prefer AWS profiles/SSO so you don't paste credentials into your shell history.
# Example (SSO):
aws sso login --profile your-profile
export AWS_PROFILE=your-profile

# Verify
aws sts get-caller-identity
```

> Do **not** commit AWS credentials or put real access keys into README/scripts. Use `AWS_PROFILE` (recommended) or your normal credential chain.

### 3. Get your parameters

You need these from AWS Console:

1. **zone-id**: Route53 → Hosted zones → copy the Zone ID
2. **zone-name**: The domain name (e.g. `workspace.fastenhealth.com`)
3. **cert-arn**: ACM → Certificates → copy ARN of an `Issued` cert in `us-east-1`

### 4. Bootstrap CDK (first time only)

```bash
cd infra
cdk bootstrap aws://YOUR_ACCOUNT_ID/us-east-1
```

### 5. Deploy

```bash
cd deploy
cdk deploy --app "go run . \
  -dest-host=cdn-dev.fastenhealth.com \
  -account-id=123456789012 \
  -cert-arn=arn:aws:acm:us-east-1:410145376638:certificate/37ca85c0-3666-47e4-b519-f7c2b5203821 \
  -env=dev"
```

```bash
cd deploy
cdk deploy --app "go run . \
  -dest-host=cdn.fastenhealth.com \
  -account-id=410145376638 \
  -cert-arn=arn:aws:acm:us-east-1:410145376638:certificate/16343cad-7d3f-4434-930e-2c9445123d38 \
  -env=prod"
```


`cdk deploy` prints an `Outputs:` section; copy the `SiteBucketName` value and publish your build (e.g. `aws s3 sync dist/ s3://BUCKET/`).





### 6. Verify

```bash
curl -I https://cdn-dev.workspace.fastenhealth.com
```

Expected headers:

```
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
referrer-policy: strict-origin-when-cross-origin
```

---

## Dev vs prod deployments

This CDK app supports **dev/prod-style** deployments by:

- Using `-env=dev` or `-env=prod` (changes the stack name)
- Passing different values for `dest-host`, `zone-id`, `zone-name`, and `cert-arn`

Example:

```bash
# DEV
cd infra
cdk deploy --app "go run . \
  -env=dev \
  -dest-host=cdn-dev.workspace.fastenhealth.com \
  -zone-id=Z0506726U7MA5EL64JZ0 \
  -zone-name=workspace.fastenhealth.com \
  -git-repo=cdn \
  -account-id=123456789012 \
  -cert-arn=arn:aws:acm:us-east-1:DEV_ACCOUNT:certificate/DEV_CERT"


# PROD
cdk deploy --app "go run . \
  -env=prod \
  -dest-host=cdn-dev.workspace.fastenhealth.com \
  -zone-id=Z_PROD \
  -zone-name=workspace.fastenhealth.com \
  -git-repo=cdn \
  -account-id=123456789012 \
  -cert-arn=arn:aws:acm:us-east-1:PROD_ACCOUNT:certificate/PROD_CERT"
```

### Recommended (when you copy this into the portal repo)

Add two tiny scripts so nobody has to remember flags:

- `deploy.dev.sh`
- `deploy.prod.sh`

Have them read non-secret parameters from env vars (`DEST_HOST`, `ZONE_ID`, `ZONE_NAME`, `CERT_ARN`) and run `cdk deploy`.

---

## Running tests

### Unit tests (no AWS needed)

```bash
cd infra
go test -v ./...
```

### LocalStack integration tests

```bash
# Start LocalStack
docker compose up -d

# Run integration tests
cd infra
go test -v ./... -run LocalStack
```

---

## Destroy stack

```bash
cd infra
cdk destroy --app "go run . \
  -dest-host=cdn-dev.workspace.fastenhealth.com \
  -zone-id=Z0506726U7MA5EL64JZ0 \
  -zone-name=workspace.fastenhealth.com \
  -cert-arn=arn:aws:acm:us-east-1:123456789012:certificate/3a7e9635-c6ac-42fa-9b3b-339d850c9e2c \
  -env=dev"
```

---

## Files

```
infra/
├── main.go                      # CLI entrypoint
├── go.mod                       # Go dependencies
├── internal/config/config.go    # Flag parsing + validation
└── internal/stack/
    ├── stack.go                 # Main stack orchestration
    ├── bucket.go                # S3 origin bucket + CloudFormation output
    ├── iam.go                   # GitHub Actions deploy role + provider
    ├── cloudfront.go            # CloudFront distribution + headers policy
    ├── acm.go                   # Certificate import
    ├── route53.go               # DNS A/AAAA records
    └── stack_test.go            # Unit + LocalStack integration tests
docker-compose.yml               # LocalStack for local testing
```

---

## Troubleshooting

| Error                                                                | Fix                                                           |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| `SSM parameter /cdk-bootstrap/... not found`                         | Run `cdk bootstrap` first                                     |
| `Need to perform AWS calls for account X, but credentials are for Y` | Wrong AWS profile, run `aws sts get-caller-identity` to check |
| `iam:GetRole AccessDenied`                                           | Your role lacks IAM permissions, need admin to bootstrap      |
| `Certificate stuck pending`                                          | DNS validation CNAME not added, check Route53                 |
| `NoSuchHostedZone`                                                   | Zone ID doesn't exist in this account                         |
