# Day 20C: Agile & DevOps Testing Practices
## Comprehensive Study Guide

**Part of Week 3 - Day 20 Series**

---

## Agile & DevOps Best Practices

### 5.1 Agile Testing Best Practices

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGILE TESTING BEST PRACTICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AGILE TESTING PRINCIPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHOLE TEAM APPROACH:
   Testing is everyone's responsibility
   
   Traditional Model:
   Developer writes code → Throws over wall → QA tests
   Problem: Late defect discovery, finger-pointing
   
   Agile Model:
   Whole team owns quality
   - Developers write unit tests
   - QA guides testing strategy
   - Product Owner defines acceptance criteria
   - Everyone participates in testing
   
   Benefits:
   ✓ Earlier defect detection
   ✓ Shared quality ownership
   ✓ Better collaboration
   ✓ Faster feedback loops

2. EARLY AND CONTINUOUS TESTING:
   Test from Day 1, not at the end
   
   Sprint Timeline:
   Day 1: Testing involvement in planning
   Day 2-5: Testing in parallel with development
   Day 6-8: Exploratory testing, edge cases
   Day 9-10: Regression, UAT
   
   Not: Development (Days 1-8) → Testing (Days 9-10)

3. SHIFT LEFT TESTING:
   Move testing activities earlier in SDLC
   
   Traditional:
   Requirements → Design → Code → Test (late)
   
   Shift Left:
   Requirements (+ Test Scenarios) → Design (+ Test Cases) → 
   Code (+ Unit Tests) → Test (+ Integration/System Tests)
   
   Activities:
   ✓ Review requirements for testability
   ✓ Create test scenarios during planning
   ✓ Design test cases before coding starts
   ✓ Automate tests as code is developed
   ✓ Continuous integration and testing

4. TEST AUTOMATION:
   Automate repetitive tests for fast feedback
   
   Test Pyramid:
              /\
             /UI\        10% - E2E/UI tests (slow, brittle)
            /────\
           /  API \      30% - API/Integration tests
          /────────\
         /   Unit   \    60% - Unit tests (fast, stable)
        /────────────\
   
   Focus: More unit tests, fewer UI tests
   Why: Unit tests are fast, stable, easy to maintain

5. CONTINUOUS FEEDBACK:
   Provide rapid feedback to team
   
   Feedback Loops:
   - Unit tests: Seconds (developer feedback)
   - API tests: Minutes (integration feedback)
   - UI tests: Hours (end-to-end feedback)
   - Manual exploratory: Daily (usability feedback)
   
   CI/CD Pipeline:
   Code Commit → Build → Unit Tests → Integration Tests → 
   Deploy to Test Env → Smoke Tests → Full Regression → 
   Deploy to Staging → UAT → Production
   
   Fast failure = Fast fix

AGILE TESTING QUADRANTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Framework by Lisa Crispin & Janet Gregory

              Supporting the Team  |  Critique Product
                                  |
                     Q2           |        Q3
              ┌─────────────────────────────────────┐
              │                   |                  │
              │ Functional Tests  | Exploratory     │
              │ Story Tests       | Scenario Testing│
Business-     │ Prototypes        | UAT             │
Facing        │ Simulations       | Usability       │
              │                   |                  │
              ├─────────────────────────────────────┤
              │                   |                  │
Technology-   │ Unit Tests        | Performance     │
Facing        │ Component Tests   | Load/Stress     │
              │ API Tests         | Security        │
              │ (Automated)       | (Tools)         │
              │                   |                  │
              └─────────────────────────────────────┘
                     Q1           |        Q4
                                  |
              Automated          |  Manual + Tools

QUADRANT 1 (Q1): Technology-Facing, Supporting Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Guide development, prevent defects
When: During development (TDD approach)

Tests:
- Unit Tests (developers)
- Component Tests (developers + QA)
- API Tests (QA + developers)

Example (Unit Test - Python):
```python
def test_calculate_discount():
    # Test VIP customer with order > $100
    result = calculate_discount(customer_type="VIP", order_total=150)
    assert result == 30.0  # 20% discount = $30
    
    # Test regular customer
    result = calculate_discount(customer_type="Regular", order_total=150)
    assert result == 7.5   # 5% discount = $7.50
```

Automation: 100% automated
Tools: pytest, JUnit, NUnit, Jest
Who: Primarily developers, with QA guidance

QUADRANT 2 (Q2): Business-Facing, Supporting Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Validate functional behavior, acceptance criteria
When: During and after development

Tests:
- Functional Tests
- Story/Feature Tests
- BDD Scenarios
- Example-based tests

Example (BDD - Gherkin):
```gherkin
Feature: Shopping Cart Checkout

Scenario: Successful checkout with valid payment
  Given user has items in shopping cart
  And user is on checkout page
  When user enters valid credit card details
  And clicks "Place Order"
  Then order should be created successfully
  And user should see order confirmation
  And confirmation email should be sent
```

Automation: 70-80% automated
Tools: Cucumber, SpecFlow, Robot Framework, Selenium
Who: QA + Developers + Product Owner (write scenarios)

QUADRANT 3 (Q3): Business-Facing, Critique Product
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Evaluate product quality, user experience
When: After development, before release

Tests:
- Exploratory Testing
- Usability Testing
- User Acceptance Testing (UAT)
- Beta Testing

Example Session Charter:
```
EXPLORATORY TESTING SESSION

Mission: Test checkout flow for edge cases
Time: 90 minutes
Areas: Payment, Order confirmation, Email notifications

Personas:
- International user
- User with slow internet
- Mobile user
- First-time buyer

Findings:
✓ Payment timeout for slow connections (BUG-567)
✓ Confusing error message for declined cards (UX-123)
✓ Success, but email delayed 5 minutes (BUG-568)
```

Automation: 10-20% (can't fully automate creativity)
Tools: Session-based test management, mind maps
Who: QA (primarily), some developers

QUADRANT 4 (Q4): Technology-Facing, Critique Product
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Validate non-functional requirements
When: After development, continuous monitoring

Tests:
- Performance Testing
- Load/Stress Testing
- Security Testing
- Scalability Testing
- Compatibility Testing

Example (JMeter Load Test):
```
Test Plan: Checkout Load Test

Configuration:
- Users: 1000 concurrent
- Ramp-up: 60 seconds
- Duration: 10 minutes

Scenarios:
1. Browse products (40%)
2. Add to cart (30%)
3. Checkout (20%)
4. Search (10%)

Success Criteria:
✓ Response time < 2 seconds (95th percentile)
✓ Error rate < 1%
✓ Throughput > 100 requests/second
```

Automation: 90% automated (tools-based)
Tools: JMeter, LoadRunner, OWASP ZAP, Burp Suite
Who: Performance/Security specialists + QA

AGILE TEST STRATEGY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sprint Testing Approach:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DAY 0 (Sprint Planning):
- QA reviews user stories
- Identifies testability issues
- Creates test scenarios
- Estimates testing effort
- Defines acceptance criteria (with PO)

Output: Test plan for sprint, DoD agreed

DAY 1-2 (Early Sprint):
- Developers write unit tests (TDD)
- QA creates detailed test cases
- QA prepares test data
- QA sets up test environment
- Automation framework ready

Output: Test cases ready, environment ready

DAY 3-7 (Mid Sprint):
- Developers complete features
- QA tests completed features immediately
- Regression tests run continuously (CI/CD)
- Bugs logged and fixed quickly
- Pair testing (QA + Dev)

Output: Features tested, bugs fixed

DAY 8-9 (Late Sprint):
- Exploratory testing
- Edge case testing
- UAT with Product Owner
- Final regression
- Performance smoke tests

Output: Sprint tested, ready for demo

DAY 10 (Sprint End):
- Sprint demo
- Retrospective (what to improve)
- Update test documentation
- Archive test results

Output: Sprint deliverable, lessons learned

DEFINITION OF DONE (DoD):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A user story is "Done" when:

Code Complete:
✓ Code written and peer-reviewed
✓ Unit tests written (>80% coverage)
✓ Code merged to main branch
✓ No compiler warnings

Testing Complete:
✓ All acceptance criteria tested
✓ Functional tests passed
✓ Regression tests passed
✓ No critical/high bugs open
✓ Exploratory testing completed

Documentation Complete:
✓ Code documented (inline comments)
✓ API documentation updated
✓ User documentation updated (if needed)
✓ Test cases documented

Deployment Ready:
✓ Deployed to test environment
✓ Smoke tests passed
✓ Product Owner acceptance obtained

Example Checklist:
```
USER STORY: US-234 - Add "Forgot Password" feature

✅ Code written and reviewed
✅ Unit tests: 15 tests, 85% coverage
✅ Functional tests: 8 test cases (all passed)
✅ Regression: 500 tests (498 passed, 2 unrelated failures)
✅ Exploratory testing: 2 hours (no critical issues)
✅ Security testing: Password reset token secure
✅ Email template reviewed and approved
✅ Zero critical bugs, 1 minor bug (deferred)
✅ PO acceptance: Approved by Jane (2024-01-10)
✅ Deployed to staging, smoke tests passed

Status: DONE ✅
```

AGILE TESTING CHALLENGES & SOLUTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Challenge 1: Short Iterations, Not Enough Time
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: 2-week sprint, feature complete Day 8, only 2 days to test

Solutions:
✓ Test in parallel with development (not after)
✓ Automate regression tests (run continuously)
✓ Focus on risk-based testing (test critical first)
✓ Involve QA in planning (testability input)
✓ Test early builds (don't wait for "done")

Challenge 2: Changing Requirements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: Requirements change mid-sprint, tests become obsolete

Solutions:
✓ Embrace change (it's agile)
✓ Keep test cases modular (easy to update)
✓ Focus on acceptance criteria (not implementation)
✓ Use BDD (Given-When-Then stays stable)
✓ Regular grooming sessions

Challenge 3: Technical Debt in Test Automation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: Automation flaky, maintenance burden

Solutions:
✓ Allocate time for test maintenance (20% of sprint)
✓ Review test code (same standards as product code)
✓ Remove obsolete tests
✓ Refactor duplicated test code
✓ Use page object model (maintainable structure)

Challenge 4: Limited QA Resources
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: 1 QA for 5 developers

Solutions:
✓ Whole team testing (developers test too)
✓ Automate repetitive tests
✓ Pair testing (QA + Dev)
✓ Developers write unit tests (mandatory)
✓ Focus QA on exploratory, usability, edge cases

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 5.2 DevOps and CI/CD Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVOPS & CI/CD TESTING BEST PRACTICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DEVOPS CULTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DevOps = Development + Operations (+ QA)

Traditional Model (Silos):
┌──────────┐    ┌──────────┐    ┌──────────┐
│   Dev    │ →  │    QA    │ →  │   Ops    │
│ (builds) │    │ (tests)  │    │ (deploys)│
└──────────┘    └──────────┘    └──────────┘
Problems: Handoffs, delays, blame culture

DevOps Model (Collaboration):
┌────────────────────────────────────────────┐
│      Dev + QA + Ops (One Team)            │
│   Build → Test → Deploy (Automated)       │
│   Shared Responsibility & Ownership       │
└────────────────────────────────────────────┘
Benefits: Fast feedback, automation, collaboration

Key Principles:
1. Automation (CI/CD pipelines)
2. Continuous Testing
3. Shift Left on Security
4. Infrastructure as Code
5. Monitoring and Feedback

CONTINUOUS INTEGRATION (CI):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Automatically build and test code every commit

CI Pipeline:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Code Commit (Developer pushes to Git)
   ↓
2. CI Server Triggered (Jenkins, GitHub Actions, GitLab CI)
   ↓
3. Build Application
   - Compile code
   - Resolve dependencies
   - Create artifacts
   ↓
4. Run Unit Tests
   - Execute all unit tests
   - Code coverage check (>80%)
   - Fail build if tests fail
   ↓
5. Static Code Analysis
   - SonarQube: Code quality, bugs, vulnerabilities
   - ESLint/Pylint: Code standards
   - Security scanning
   ↓
6. Build Docker Image (if applicable)
   ↓
7. Publish Artifacts
   - Store in artifact repository
   - Version tagging
   ↓
8. Notify Team
   - Success: Green build ✅
   - Failure: Alert developers 🚨

Example CI Configuration (GitHub Actions):
```yaml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v2
    
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run linter
      run: npm run lint
    
    - name: Run unit tests
      run: npm test
    
    - name: Check code coverage
      run: npm run coverage
      # Fail if coverage < 80%
    
    - name: Build application
      run: npm run build
    
    - name: Run integration tests
      run: npm run test:integration
    
    - name: Upload artifacts
      uses: actions/upload-artifact@v2
      with:
        name: build
        path: dist/
    
    - name: Notify team
      if: failure()
      uses: slack-notify@v1
      with:
        webhook: ${{ secrets.SLACK_WEBHOOK }}
        message: "Build failed on ${{ github.ref }}"
```

Benefits of CI:
✓ Early bug detection (within minutes of commit)
✓ Reduced integration issues
✓ Faster feedback loop
✓ Always in releasable state
✓ Improved code quality

CONTINUOUS TESTING IN CI/CD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Test Pyramid in CI/CD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Layer 1: Unit Tests (Run Every Commit)
- Speed: Seconds
- Frequency: Every commit
- Coverage: 60% of tests
- Tool: Jest, pytest, JUnit
- Example: 2000 unit tests in 30 seconds

Layer 2: Integration Tests (Run Every Commit)
- Speed: Minutes
- Frequency: Every commit
- Coverage: 30% of tests
- Tool: TestNG, REST Assured, Postman
- Example: 300 API tests in 5 minutes

Layer 3: UI Tests (Run on Merge to Main)
- Speed: 30-60 minutes
- Frequency: Main branch merges, nightly
- Coverage: 10% of tests
- Tool: Selenium, Cypress, Playwright
- Example: 100 UI tests in 45 minutes

Test Strategy by Stage:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 1: Commit Stage (Every Commit)
Tests: Unit tests, static analysis
Time: < 10 minutes
Goal: Fast feedback on code quality

STAGE 2: Acceptance Stage (After Commit Stage)
Tests: Integration tests, API tests, smoke tests
Time: 20-30 minutes
Goal: Validate functional behavior

STAGE 3: UAT Stage (After Acceptance)
Tests: Full regression, E2E tests, UI tests
Time: 1-2 hours
Goal: Comprehensive validation

STAGE 4: Production Stage (After UAT)
Tests: Smoke tests, monitoring
Time: 5-10 minutes
Goal: Verify production deployment

CONTINUOUS DEPLOYMENT (CD):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Automatically deploy to production after passing tests

CD Pipeline:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Code Commit
   ↓
2. CI Pipeline (Build + Test)
   ↓
3. Deploy to Dev Environment
   - Automated deployment
   - Smoke tests
   ↓
4. Deploy to QA Environment
   - Automated deployment
   - Full regression suite
   - Performance tests
   ↓
5. Deploy to Staging (Pre-Production)
   - Automated deployment
   - UAT
   - Security scans
   ↓
6. Deploy to Production
   - Automated deployment (with approval gate)
   - Blue-Green deployment or Canary release
   - Smoke tests in production
   - Monitor metrics
   ↓
7. Rollback if Issues Detected
   - Automated rollback
   - Alert team

Deployment Strategies:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Blue-Green Deployment:
   - Blue: Current production version
   - Green: New version deployed in parallel
   - Switch traffic from Blue to Green
   - If issues: Switch back to Blue (instant rollback)
   
   Benefits: Zero downtime, instant rollback

2. Canary Release:
   - Deploy new version to small % of users (5%)
   - Monitor metrics (errors, performance)
   - If good: Gradually increase to 100%
   - If issues: Rollback
   
   Benefits: Risk mitigation, real user feedback

3. Rolling Deployment:
   - Deploy to servers one by one
   - Monitor each server
   - Continue if healthy
   
   Benefits: No downtime, gradual rollout

TESTING IN PRODUCTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Why Test in Production?
- Test environment never 100% matches production
- Real user behavior unpredictable
- Scale and load different
- Third-party integrations behave differently

Techniques:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Smoke Tests After Deployment:
   - Verify critical paths work
   - Run immediately after deploy
   - Example: Login, checkout, payment

2. Synthetic Monitoring:
   - Automated scripts simulate user actions
   - Run continuously (every 5 minutes)
   - Alert if failures detected

3. Feature Flags:
   - Deploy code, but keep feature disabled
   - Enable for internal users first
   - Gradually enable for all users
   - Disable instantly if issues

4. A/B Testing:
   - 50% users see old version
   - 50% users see new version
   - Compare metrics
   - Choose winner

5. Chaos Engineering:
   - Intentionally break things to test resilience
   - Simulate server failures, network issues
   - Verify system recovers
   - Example: Netflix Chaos Monkey

Example Monitoring Dashboard:
```
PRODUCTION HEALTH DASHBOARD

Response Time: 250ms (Target: <500ms) ✅
Error Rate: 0.5% (Target: <1%) ✅
Uptime: 99.95% (Target: 99.9%) ✅
Throughput: 5000 req/min ✅

Recent Deployments:
- v2.3.4: Deployed 2 hours ago ✅
  * Smoke tests: Passed
  * Error rate: 0.5% (unchanged)
  * Response time: 250ms (improved from 300ms)

Alerts:
🟢 No active alerts
```

TEST AUTOMATION IN CI/CD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best Practices:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FAST FEEDBACK:
   ✓ Unit tests: < 10 minutes
   ✓ Integration tests: < 30 minutes
   ✓ UI tests: < 1 hour
   
   If tests too slow: Developers skip them

2. RELIABLE TESTS:
   ✓ No flaky tests (random failures)
   ✓ Deterministic (same input = same output)
   ✓ Independent (tests don't depend on each other)
   ✓ Repeatable
   
   If tests flaky: Lose trust, ignore failures

3. MAINTAINABLE TESTS:
   ✓ Page Object Model (UI tests)
   ✓ DRY principle (Don't Repeat Yourself)
   ✓ Clear test names
   ✓ Good error messages
   
   If hard to maintain: Test debt accumulates

4. RIGHT LEVEL OF TESTING:
   ✓ Unit tests: Business logic
   ✓ Integration tests: API contracts, database
   ✓ UI tests: Critical user journeys only
   
   Don't test everything at UI level (slow, brittle)

5. TEST DATA MANAGEMENT:
   ✓ Each test creates own data
   ✓ Clean up after test
   ✓ Use test database (not production)
   ✓ Seed data for tests
   
   Bad: Shared test data = race conditions

Example Test Organization:
```
tests/
├── unit/               # Fast, run every commit
│   ├── auth.test.js
│   ├── payment.test.js
│   └── cart.test.js
├── integration/        # Medium speed, run every commit
│   ├── api/
│   │   ├── user-api.test.js
│   │   └── order-api.test.js
│   └── database/
│       └── migrations.test.js
└── e2e/               # Slow, run on merge/nightly
    ├── critical/       # Must pass for deploy
    │   ├── login.spec.js
    │   └── checkout.spec.js
    └── extended/       # Nice to have
        ├── profile.spec.js
        └── search.spec.js
```

SHIFT LEFT ON SECURITY (DevSecOps):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Security in CI/CD Pipeline:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Stage 1: Code Commit
- Git pre-commit hooks: Check for secrets
- IDE plugins: Security linting

Stage 2: Build
- Dependency scanning (Snyk, Dependabot)
- Check for vulnerable libraries
- Fail build if critical vulnerabilities

Stage 3: Static Analysis
- SAST (Static Application Security Testing)
- SonarQube: Security hotspots
- Find SQL injection, XSS vulnerabilities

Stage 4: Deploy to Test Environment
- DAST (Dynamic Application Security Testing)
- OWASP ZAP: Scan running application
- Penetration testing (automated)

Stage 5: Production
- Runtime security monitoring
- WAF (Web Application Firewall)
- SIEM (Security Information and Event Management)

Example Security Check (CI Pipeline):
```yaml
- name: Check for secrets
  run: |
    # Fail if secrets (API keys, passwords) in code
    trufflehog git file://. --fail

- name: Scan dependencies
  run: |
    npm audit --audit-level=high
    # Fail if high/critical vulnerabilities

- name: SAST scan
  run: |
    sonarqube-scanner
    # Fail if security hotspots

- name: Container scan
  run: |
    trivy image myapp:latest
    # Scan Docker image for vulnerabilities
```

METRICS FOR CI/CD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Key Metrics:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Build Success Rate:
   Formula: (Successful Builds / Total Builds) × 100
   Target: >90%
   
   Example: 180 passed / 200 total = 90%

2. Build Duration:
   Unit tests: <10 minutes
   Full pipeline: <1 hour
   
   Track trend: Are builds getting slower?

3. Deployment Frequency:
   How often deploying to production?
   High performers: Multiple times per day
   Medium: Weekly
   Low: Monthly

4. Lead Time for Changes:
   Time from code commit to production
   Target: <1 day

5. Mean Time to Recovery (MTTR):
   Time to fix production issue
   Target: <1 hour

6. Change Failure Rate:
   % of deployments causing production issues
   Target: <15%

Example Metrics Dashboard:
```
CI/CD METRICS - January 2026

Build Success Rate: 92% ✅ (Target: >90%)
Avg Build Duration: 45 min ✅ (Target: <1 hour)
Deployment Frequency: 3x per day ✅
Lead Time: 4 hours ✅ (Target: <1 day)
MTTR: 30 min ✅ (Target: <1 hour)
Change Failure Rate: 12% ✅ (Target: <15%)

Trend: ↗️ Improving
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**Study Time:** 2-2.5 hours

**Previous:** Day 20B - ISTQB Certification & Test Maturity  
**Next:** Day 20D - Industry-Specific Testing & Integration

---

*End of Day 20C Study Guide*
