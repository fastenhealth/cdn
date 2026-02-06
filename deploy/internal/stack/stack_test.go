package stack_test

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"testing"

	"cdn-deploy-cdk/internal/config"
	"cdn-deploy-cdk/internal/stack"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/jsii-runtime-go"
)

// resource types we expect in the synthesized cloudformation template
const (
	typeCloudFrontDist       = "AWS::CloudFront::Distribution"
	typeResponseHeaders      = "AWS::CloudFront::ResponseHeadersPolicy"
	typeRoute53RecordSet     = "AWS::Route53::RecordSet"
	typeS3Bucket             = "AWS::S3::Bucket"
	typeIamRole              = "AWS::IAM::Role"
	typeIamOidcProvider      = "Custom::AWSCDKOpenIdConnectProvider"
	cachingOptimizedPolicy   = "658327ea-f89d-4fab-a63d-7e88639e58f6"
	hstsMaxAgeSec            = 31536000.0
	testCertArn              = "arn:aws:acm:us-east-1:123456789012:certificate/test-cert-id"
	githubRepoConditionValue = "repo:fastenhealth/cdn:*"
	githubAudience           = "sts.amazonaws.com"
)

// test fixture - consistent config for all tests
func testConfig() *config.Config {
	return &config.Config{
		DestHost:     "portal-test.connect-dev.fastenhealth.com",
		HostedZoneID: "ZTESTZONEID",
		ZoneName:     "connect-dev.fastenhealth.com",
		Environment:  "dev",
		CertArn:      testCertArn,
	}
}

// synthTemplate runs cdk synth and returns the cloudformation resources map
func synthTemplate(t *testing.T, cfg *config.Config) map[string]any {
	t.Helper()
	tmp := t.TempDir()

	app := awscdk.NewApp(&awscdk.AppProps{Outdir: jsii.String(tmp)})
	stack.NewStaticSite(app, cfg)
	app.Synth(nil)

	matches, _ := filepath.Glob(filepath.Join(tmp, "*.template.json"))
	if len(matches) == 0 {
		t.Fatalf("no synthesized template found in %s", tmp)
	}

	data, err := os.ReadFile(matches[0])
	if err != nil {
		t.Fatalf("failed to read template: %v", err)
	}

	var tpl map[string]any
	if err := json.Unmarshal(data, &tpl); err != nil {
		t.Fatalf("failed to parse template json: %v", err)
	}

	resources, ok := tpl["Resources"].(map[string]any)
	if !ok {
		t.Fatal("template missing Resources section")
	}
	return resources
}

// findResource grabs the first resource matching the given type
func findResource(t *testing.T, resources map[string]any, resourceType string) map[string]any {
	t.Helper()
	for _, r := range resources {
		res := r.(map[string]any)
		if res["Type"] == resourceType {
			return res
		}
	}
	t.Fatalf("could not find resource type %s in template", resourceType)
	return nil
}

// getProp walks nested maps to get a value - returns nil if path doesn't exist
func getProp(m map[string]any, keys ...string) any {
	var current any = m
	for _, k := range keys {
		cm, ok := current.(map[string]any)
		if !ok {
			return nil
		}
		current = cm[k]
	}
	return current
}

// cloudfront should reference the imported cert ARN
func TestCloudFrontDistribution_WithValidConfig_ShouldUseImportedCertArn(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	dist := findResource(t, resources, typeCloudFrontDist)
	viewerCert := getProp(dist, "Properties", "DistributionConfig", "ViewerCertificate").(map[string]any)

	//test & assert - cloudfront uses the provided cert ARN
	if viewerCert["AcmCertificateArn"] != cfg.CertArn {
		t.Errorf("AcmCertificateArn = %v, want %s", viewerCert["AcmCertificateArn"], cfg.CertArn)
	}
}

// response headers policy should enforce HSTS and X-Content-Type-Options per security requirements
func TestResponseHeadersPolicy_WithValidConfig_ShouldEnableSecurityHeaders(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	policy := findResource(t, resources, typeResponseHeaders)
	secHeaders := getProp(policy, "Properties", "ResponseHeadersPolicyConfig", "SecurityHeadersConfig").(map[string]any)

	//test & assert - HSTS is configured with 1 year max-age and subdomains
	hsts := secHeaders["StrictTransportSecurity"].(map[string]any)
	if hsts["AccessControlMaxAgeSec"] != hstsMaxAgeSec {
		t.Errorf("HSTS max-age = %v, want %v", hsts["AccessControlMaxAgeSec"], hstsMaxAgeSec)
	}
	if hsts["IncludeSubdomains"] != true {
		t.Error("HSTS should include subdomains")
	}

	//test & assert - nosniff header is enabled
	cto := secHeaders["ContentTypeOptions"].(map[string]any)
	if cto["Override"] != true {
		t.Error("X-Content-Type-Options should be enabled")
	}
}

// cloudfront should serve our public hostname from the S3 origin
func TestCloudFrontDistribution_WithValidConfig_ShouldHaveCorrectAliasAndOrigin(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	dist := findResource(t, resources, typeCloudFrontDist)
	distCfg := getProp(dist, "Properties", "DistributionConfig").(map[string]any)

	//test & assert - alias includes our public hostname
	aliases := distCfg["Aliases"].([]any)
	found := false
	for _, a := range aliases {
		if a == cfg.DestHost {
			found = true
		}
	}
	if !found {
		t.Errorf("aliases %v missing %s", aliases, cfg.DestHost)
	}

	//test & assert - origin points to S3 bucket via S3OriginConfig
	origins := distCfg["Origins"].([]any)
	if len(origins) == 0 {
		t.Fatal("no origins configured")
	}
	origin := origins[0].(map[string]any)
	if origin["S3OriginConfig"] == nil {
		t.Fatalf("origin missing S3OriginConfig: %v", origin)
	}
	if origin["DomainName"] == nil {
		t.Fatalf("origin missing DomainName")
	}
}

// s3 bucket stores portal assets and must be private + versioned for rollbacks
func TestS3Bucket_WithValidConfig_ShouldBePrivateAndVersioned(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	bucket := findResource(t, resources, typeS3Bucket)
	props := bucket["Properties"].(map[string]any)

	//assert - versioning enabled
	versioning, ok := props["VersioningConfiguration"].(map[string]any)
	if !ok {
		t.Fatalf("versioning configuration missing: %+v", props)
	}
	if versioning["Status"] != "Enabled" {
		t.Errorf("versioning status = %v, want Enabled", versioning["Status"])
	}

	//assert - block public access on all fronts
	pabVal, ok := props["PublicAccessBlockConfiguration"].(map[string]any)
	if !ok {
		t.Fatalf("public access block configuration missing: %+v", props)
	}
	for _, key := range []string{"BlockPublicAcls", "IgnorePublicAcls", "BlockPublicPolicy", "RestrictPublicBuckets"} {
		if pabVal[key] != true {
			t.Errorf("public access setting %s should be true", key)
		}
	}
}

// iam role lets github actions assume via OIDC restricted to this repo
func TestIamRole_WithValidConfig_ShouldRestrictGitHubOidc(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	expectedName := fmt.Sprintf("cdn-gh-s3-%s-deploy-role", cfg.Environment)
	var props map[string]any
	for _, r := range resources {
		res := r.(map[string]any)
		if res["Type"] != typeIamRole {
			continue
		}
		p := res["Properties"].(map[string]any)
		if p["RoleName"] == expectedName {
			props = p
			break
		}
	}
	if props == nil {
		t.Fatalf("could not find IAM role named %s", expectedName)
	}

	assume := props["AssumeRolePolicyDocument"].(map[string]any)
	stmts := assume["Statement"].([]any)
	found := false
	for _, raw := range stmts {
		stmt := raw.(map[string]any)
		principal := stmt["Principal"].(map[string]any)
		if principal["Federated"] == nil {
			continue
		}
		cond := stmt["Condition"].(map[string]any)
		like := cond["StringLike"].(map[string]any)
		sub := like["token.actions.githubusercontent.com:sub"]
		if sub != githubRepoConditionValue {
			continue
		}
		eq := cond["StringEquals"].(map[string]any)
		if eq["token.actions.githubusercontent.com:aud"] != githubAudience {
			t.Fatalf("unexpected audience %+v", eq)
		}
		found = true
	}
	if !found {
		t.Fatal("did not find GitHub federated principal statement")
	}
}

// oidc provider should point to github tokens domain
func TestIamOidcProvider_WithValidConfig_ShouldPointToGitHub(t *testing.T) {
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	provider := findResource(t, resources, typeIamOidcProvider)
	props := provider["Properties"].(map[string]any)
	if props["Url"] != "https://token.actions.githubusercontent.com" {
		t.Fatalf("oidc provider url = %v", props["Url"])
	}
}

// cloudfront should redirect http to https - we don't want insecure connections
func TestCloudFrontDistribution_WithValidConfig_ShouldRedirectToHTTPS(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	dist := findResource(t, resources, typeCloudFrontDist)
	behavior := getProp(dist, "Properties", "DistributionConfig", "DefaultCacheBehavior").(map[string]any)

	//test & assert
	if behavior["ViewerProtocolPolicy"] != "redirect-to-https" {
		t.Errorf("protocol policy = %v, want redirect-to-https", behavior["ViewerProtocolPolicy"])
	}
}

// caching should use CloudFront's optimized policy for better performance
func TestCloudFrontDistribution_WithValidConfig_ShouldUseCachingOptimized(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	dist := findResource(t, resources, typeCloudFrontDist)
	behavior := getProp(dist, "Properties", "DistributionConfig", "DefaultCacheBehavior").(map[string]any)

	//test & assert - using AWS managed "CachingOptimized" policy
	if behavior["CachePolicyId"] != cachingOptimizedPolicy {
		t.Errorf("cache policy = %v, want %s (CachingOptimized)", behavior["CachePolicyId"], cachingOptimizedPolicy)
	}
}

// SPA needs 403/404 to serve index.html so deep links work
func TestCloudFrontDistribution_WithValidConfig_ShouldHaveSPAFallback(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	dist := findResource(t, resources, typeCloudFrontDist)
	distCfg := getProp(dist, "Properties", "DistributionConfig").(map[string]any)

	//test & assert - 403 and 404 both return /index.html with 200
	errs := distCfg["CustomErrorResponses"].([]any)
	expected := map[float64]bool{403: false, 404: false}

	for _, e := range errs {
		em := e.(map[string]any)
		code := em["ErrorCode"].(float64)
		if _, exists := expected[code]; exists {
			if em["ResponseCode"].(float64) == 200 && em["ResponsePagePath"] == "/index.html" {
				expected[code] = true
			}
		}
	}

	for code, found := range expected {
		if !found {
			t.Errorf("missing SPA fallback for %.0f error", code)
		}
	}
}

// minimum TLS should be 1.2 for security compliance
func TestCloudFrontDistribution_WithValidConfig_ShouldRequireTLS12(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	dist := findResource(t, resources, typeCloudFrontDist)
	viewerCert := getProp(dist, "Properties", "DistributionConfig", "ViewerCertificate").(map[string]any)

	//test & assert
	if viewerCert["MinimumProtocolVersion"] != "TLSv1.2_2021" {
		t.Errorf("TLS version = %v, want TLSv1.2_2021", viewerCert["MinimumProtocolVersion"])
	}
}

// root url should serve index.html for the SPA
func TestCloudFrontDistribution_WithValidConfig_ShouldServeIndexAtRoot(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	dist := findResource(t, resources, typeCloudFrontDist)
	distCfg := getProp(dist, "Properties", "DistributionConfig").(map[string]any)

	//test & assert
	if distCfg["DefaultRootObject"] != "index.html" {
		t.Errorf("root object = %v, want index.html", distCfg["DefaultRootObject"])
	}
}

// route53 should have A and AAAA records pointing to cloudfront
func TestRoute53Records_WithValidConfig_ShouldCreateAliasRecords(t *testing.T) {
	//setup
	cfg := testConfig()
	resources := synthTemplate(t, cfg)
	expectedName := cfg.DestHost + "."

	//test - find A and AAAA records
	var hasA, hasAAAA bool
	for _, r := range resources {
		res := r.(map[string]any)
		if res["Type"] != typeRoute53RecordSet {
			continue
		}
		props := res["Properties"].(map[string]any)
		if props["Name"] != expectedName {
			continue
		}

		switch props["Type"] {
		case "A":
			hasA = true
		case "AAAA":
			hasAAAA = true
		}

		//each record should be an alias to cloudfront
		if props["AliasTarget"] == nil {
			t.Errorf("route53 %s record missing alias target", props["Type"])
		}
	}

	//assert
	if !hasA {
		t.Errorf("missing A record for %s", cfg.DestHost)
	}
	if !hasAAAA {
		t.Errorf("missing AAAA record for %s", cfg.DestHost)
	}
}

// LocalStack Integration Tests - Make sure localstack is running

// creates a hosted zone in localstack and verifies it exists
func TestLocalStack_Route53_CreateHostedZone(t *testing.T) {
	if !isLocalStackRunning() {
		t.Skip("localstack not running - start with: docker compose up -d")
	}

	out, err := awsCLI("route53", "create-hosted-zone", "--name", "test.example.com", "--caller-reference", "test-123")
	if err != nil {
		t.Fatalf("create hosted zone failed: %v\n%s", err, out)
	}

	// extract zone id from output
	var resp map[string]any
	json.Unmarshal(out, &resp)
	zoneID := resp["HostedZone"].(map[string]any)["Id"].(string)

	// verify it exists
	out, err = awsCLI("route53", "get-hosted-zone", "--id", zoneID)
	if err != nil {
		t.Fatalf("get hosted zone failed: %v", err)
	}

	// cleanup
	awsCLI("route53", "delete-hosted-zone", "--id", zoneID)
	t.Logf("created and verified zone: %s", zoneID)
}

// requests a cert in localstack and verifies it shows up in list
func TestLocalStack_ACM_RequestCertificate(t *testing.T) {
	if !isLocalStackRunning() {
		t.Skip("localstack not running - start with: docker compose up -d")
	}

	out, err := awsCLI("acm", "request-certificate", "--domain-name", "test.example.com", "--validation-method", "DNS")
	if err != nil {
		t.Fatalf("request certificate failed: %v\n%s", err, out)
	}

	var resp map[string]any
	json.Unmarshal(out, &resp)
	certArn := resp["CertificateArn"].(string)

	// verify it shows in list
	out, err = awsCLI("acm", "list-certificates")
	if err != nil {
		t.Fatalf("list certificates failed: %v", err)
	}

	if !strings.Contains(string(out), certArn) {
		t.Errorf("cert %s not found in list", certArn)
	}

	// cleanup
	awsCLI("acm", "delete-certificate", "--certificate-arn", certArn)
	t.Logf("created and verified cert: %s", certArn)
}

// helper - check if localstack is up
func isLocalStackRunning() bool {
	resp, err := http.Get("http://localhost:4566/_localstack/health")
	if err != nil {
		return false
	}
	resp.Body.Close()
	return resp.StatusCode == 200
}

// helper - run aws cli against localstack
func awsCLI(args ...string) ([]byte, error) {
	allArgs := append([]string{"--endpoint-url=http://localhost:4566", "--region=us-east-1"}, args...)
	cmd := exec.Command("aws", allArgs...)
	cmd.Env = append(os.Environ(), "AWS_ACCESS_KEY_ID=test", "AWS_SECRET_ACCESS_KEY=test")
	return cmd.CombinedOutput()
}
