# Day 20A: Quality Standards & ISO Frameworks
## Comprehensive Study Guide

**Part of Week 3 - Day 20 Series**

---

# Day 20: Industry Best Practices & Standards
## Comprehensive Study Guide

---

## Table of Contents
1. [Quality Standards Overview](#quality-standards-overview)
2. [ISO/IEC Standards for Software Testing](#iso-iec-standards)
3. [ISTQB Guidelines & Certification](#istqb-guidelines)
4. [Test Process Improvement Models](#test-process-improvement-models)
5. [Agile & DevOps Best Practices](#agile-devops-best-practices)
6. [Industry-Specific Testing](#industry-specific-testing)
7. [Practical Exercises](#practical-exercises)
8. [Assessment Questions](#assessment-questions)

---

## Quality Standards Overview

### 1.1 Why Standards Matter

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANCE OF QUALITY STANDARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition:
Quality standards are documented agreements containing technical
specifications or criteria to ensure materials, products, processes,
and services are fit for their purpose.

WHY STANDARDS MATTER IN SOFTWARE TESTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSISTENCY:
   ✓ Common language across teams
   ✓ Repeatable processes
   ✓ Predictable outcomes
   ✓ Reduced variation

2. QUALITY ASSURANCE:
   ✓ Proven practices
   ✓ Risk mitigation
   ✓ Customer satisfaction
   ✓ Defect prevention

3. COMPLIANCE:
   ✓ Regulatory requirements (FDA, HIPAA, SOC 2)
   ✓ Industry mandates
   ✓ Legal protection
   ✓ Audit readiness

4. EFFICIENCY:
   ✓ No need to "reinvent the wheel"
   ✓ Faster onboarding
   ✓ Better collaboration
   ✓ Shared best practices

5. CREDIBILITY:
   ✓ Professional recognition
   ✓ Market differentiation
   ✓ Customer trust
   ✓ Competitive advantage

BENEFITS VS CHALLENGES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Benefits:
✓ Improved quality
✓ Reduced costs (long-term)
✓ Risk mitigation
✓ Process improvement
✓ Team alignment
✓ Knowledge sharing
✓ Audit compliance

Challenges:
⚠ Initial implementation cost
⚠ Learning curve
⚠ May seem bureaucratic
⚠ Requires ongoing maintenance
⚠ Can slow initial development
⚠ Need organizational buy-in

Example Impact:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Without Standards:
Company A: Each team uses different bug tracking, test processes,
           documentation formats. New hires take 3 months to be
           productive. Cross-team collaboration is difficult.
           
With Standards (ISO 29119):
Company B: All teams follow same test processes, documentation.
           New hires productive in 3 weeks. Easy knowledge transfer.
           Passed audit on first attempt.

MAJOR TESTING STANDARDS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

International:
1. ISO/IEC 29119 - Software Testing
2. ISO/IEC 25010 - Software Quality Models
3. ISO 9001 - Quality Management Systems
4. IEEE 829 - Software Test Documentation

Industry Bodies:
1. ISTQB - International Software Testing Qualifications Board
2. IEEE - Institute of Electrical and Electronics Engineers
3. ISO - International Organization for Standardization
4. ANSI - American National Standards Institute

Methodologies:
1. TMMi - Test Maturity Model Integration
2. TPI NEXT - Test Process Improvement
3. CTP - Critical Testing Processes
4. STEP - Systematic Test and Evaluation Process

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.2 Standards Landscape

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOFTWARE TESTING STANDARDS ECOSYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STANDARDS HIERARCHY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Level 1: International Standards (ISO/IEC)
          │
          ├─→ Globally recognized
          ├─→ High-level principles
          ├─→ Industry-agnostic
          └─→ Examples: ISO 29119, ISO 25010

Level 2: Industry Standards (ISTQB, IEEE)
          │
          ├─→ Specific to software testing
          ├─→ Detailed practices
          ├─→ Certification bodies
          └─→ Examples: ISTQB Syllabus, IEEE 829

Level 3: Company/Organization Standards
          │
          ├─→ Internal policies
          ├─→ Customized for context
          ├─→ Based on Level 1 & 2
          └─→ Examples: Company QA Manual

Level 4: Project/Team Guidelines
          │
          ├─→ Project-specific
          ├─→ Team agreements
          ├─→ Tool-specific
          └─→ Examples: Project Test Plan Template

STANDARD TYPES BY PURPOSE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PROCESS STANDARDS:
   What: Define HOW to perform testing activities
   Examples:
   - ISO 29119: Software testing processes
   - TMMi: Test process maturity levels
   - Agile Testing Quadrants
   
   Cover:
   ✓ Test planning
   ✓ Test design
   ✓ Test execution
   ✓ Test closure

2. PRODUCT STANDARDS:
   What: Define characteristics of test artifacts
   Examples:
   - IEEE 829: Test documentation
   - ISO 25010: Software quality characteristics
   
   Cover:
   ✓ Test plan format
   ✓ Test case structure
   ✓ Bug report format
   ✓ Test report content

3. COMPETENCY STANDARDS:
   What: Define required skills and knowledge
   Examples:
   - ISTQB: Tester competencies
   - IEEE CSDP: Software development professional
   
   Cover:
   ✓ Tester skill levels
   ✓ Certification criteria
   ✓ Training requirements
   ✓ Professional ethics

COMPLIANCE LEVELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Level 1: Aware
- Team knows standards exist
- No formal implementation
- Ad-hoc usage
Status: ❌ Not compliant

Level 2: Partially Compliant
- Some practices adopted
- Not organization-wide
- Inconsistent application
Status: 🟡 Improving

Level 3: Compliant
- Formal adoption
- Consistent application
- Documentation in place
- Regular audits
Status: ✅ Compliant

Level 4: Certified
- External audit passed
- Official certification
- Ongoing compliance monitoring
- Continuous improvement
Status: ✅✅ Certified

Example Progression:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Year 1:
- Awareness training on ISO 29119
- Pilot team implements standard
- Document gaps
Action: Assess current state

Year 2:
- Roll out to all teams
- Update test processes
- Tool alignment
- Training program
Action: Implement organization-wide

Year 3:
- Prepare for external audit
- Process refinement
- Documentation complete
- Pre-audit assessment
Action: Certification preparation

Year 4:
- External audit
- ISO 29119 certification achieved
- Continuous improvement process
- Annual surveillance audits
Action: Maintain and improve

WHEN TO ADOPT STANDARDS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MUST Adopt:
✓ Regulated industries (healthcare, finance, aerospace)
✓ Government contracts
✓ Safety-critical systems
✓ Large enterprises with multiple teams
✓ Organizations seeking certification

SHOULD Consider:
✓ Growing teams (>10 people)
✓ High-quality requirements
✓ Customer demand
✓ Process improvement initiatives
✓ Knowledge retention needs

MAY Skip (Initially):
✓ Small startups (<5 people)
✓ Prototypes/POCs
✓ Non-critical applications
✓ Very tight budgets
Note: Can adopt later as organization matures

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ISO/IEC Standards for Software Testing

### 2.1 ISO/IEC 29119 - Software Testing Standard

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ISO/IEC 29119: SOFTWARE TESTING STANDARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Overview:
International standard for software testing processes, covering all
aspects from organizational test policy to individual test execution.

Published: 2013 (Parts 1-4), 2016 (Part 5)
Maintained by: ISO/IEC Joint Technical Committee

STRUCTURE (5 Parts):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PART 1: CONCEPTS AND DEFINITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Common vocabulary for testing

Key Concepts:
✓ Test Process
✓ Test Levels (Unit, Integration, System, Acceptance)
✓ Test Types (Functional, Non-functional)
✓ Testing Roles
✓ Test Artifacts

Benefits:
- Eliminates confusion from ambiguous terms
- Enables clear communication
- Basis for other parts

Example Terms Defined:
┌──────────────────┬─────────────────────────────────────┐
│ Term             │ ISO 29119 Definition                │
├──────────────────┼─────────────────────────────────────┤
│ Test Case        │ Set of preconditions, inputs,       │
│                  │ actions, expected results, and      │
│                  │ postconditions                      │
├──────────────────┼─────────────────────────────────────┤
│ Test Condition   │ Testable aspect of a component or   │
│                  │ system identified as a basis for    │
│                  │ testing                             │
├──────────────────┼─────────────────────────────────────┤
│ Defect           │ Imperfection or deficiency where    │
│                  │ component does not meet requirements│
├──────────────────┼─────────────────────────────────────┤
│ Test Execution   │ Process of running a test on the    │
│                  │ test item                           │
└──────────────────┴─────────────────────────────────────┘

PART 2: TEST PROCESSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Define testing processes at different levels

THREE PROCESS LEVELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ORGANIZATIONAL TEST PROCESS
   Scope: Entire organization
   
   Activities:
   ✓ Define test policy
   ✓ Establish test strategy
   ✓ Test process assessment
   ✓ Continuous improvement
   
   Artifacts:
   - Organizational Test Policy
   - Organizational Test Strategy
   - Test Process Improvement Plan
   
   Example Policy Statement:
   "All software released by ACME Corp shall be tested according to
    ISO 29119 standards. Minimum pass criteria: 95% test coverage,
    zero critical defects, 90% pass rate."

2. TEST MANAGEMENT PROCESS
   Scope: Test project
   
   Activities:
   ✓ Test planning
   ✓ Test monitoring & control
   ✓ Test completion
   
   Sub-processes:
   a) Test Planning:
      - Define test scope
      - Identify test conditions
      - Design test approach
      - Determine resources
      - Schedule tests
      
   b) Test Monitoring & Control:
      - Track progress vs plan
      - Measure test execution
      - Identify deviations
      - Take corrective action
      
   c) Test Completion:
      - Evaluate exit criteria
      - Document lessons learned
      - Archive test artifacts
      - Release test environment
   
   Artifacts:
   - Test Plan
   - Test Progress Reports
   - Test Completion Report

3. DYNAMIC TEST PROCESS
   Scope: Individual test execution
   
   Activities:
   ✓ Test design
   ✓ Test environment setup
   ✓ Test execution
   ✓ Test incident reporting
   
   Sub-processes:
   a) Test Design:
      - Identify test conditions
      - Derive test cases
      - Identify test data
      
   b) Test Environment Setup:
      - Configure test environment
      - Prepare test data
      - Verify environment readiness
      
   c) Test Execution:
      - Run test procedures
      - Log results
      - Compare actual vs expected
      
   d) Test Incident Reporting:
      - Document anomalies
      - Classify incidents
      - Track to resolution
   
   Artifacts:
   - Test Design Specification
   - Test Cases
   - Test Procedures
   - Test Execution Logs
   - Test Incident Reports

PROCESS FLOW EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Organizational Level:
[Test Policy] → [Test Strategy] → [Process Assessment]
       │
       ↓
Test Management Level:
[Test Planning] → [Test Monitoring] → [Test Completion]
       │                    ↑
       ↓                    │
Dynamic Test Level:
[Test Design] → [Environment Setup] → [Test Execution] →
                                        [Incident Reporting]

PART 3: TEST DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Templates for test documentation

KEY DOCUMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Organizational Test Policy (Template)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Structure:
1. Policy Scope
2. Testing Principles
3. Test Process Requirements
4. Roles & Responsibilities
5. Compliance & Review

Example:
```
ORGANIZATIONAL TEST POLICY

1. SCOPE:
   This policy applies to all software development at XYZ Corp.

2. PRINCIPLES:
   - Testing is integral to development
   - Quality is everyone's responsibility
   - Risk-based test approach
   - Continuous improvement

3. REQUIREMENTS:
   - All projects must have test plans
   - Minimum 80% code coverage
   - Zero critical defects before release
   - All defects tracked in Jira

4. ROLES:
   - QA Manager: Overall test strategy
   - Test Leads: Project test plans
   - Testers: Test execution
   - Developers: Unit testing

5. COMPLIANCE:
   Annual audit of test processes
```

2. Test Plan (Template)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mandatory Sections (ISO 29119-3):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  Test Plan Identifier
2.  Introduction
3.  Test Items
4.  Features to be Tested
5.  Features Not to be Tested
6.  Test Approach
7.  Pass/Fail Criteria
8.  Suspension & Resumption Criteria
9.  Test Deliverables
10. Test Environment
11. Responsibilities
12. Staffing & Training Needs
13. Schedule
14. Risks & Contingencies
15. Approvals

Example Test Plan Excerpt:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEST PLAN
Project: E-commerce Checkout Redesign
Version: 1.2
Date: January 10, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. TEST PLAN IDENTIFIER: TP-ECOM-CHECKOUT-v1.2

2. INTRODUCTION:
   This plan describes testing for checkout redesign (Release 3.5).
   Scope: Payment integration, order confirmation, receipt generation.

3. TEST ITEMS:
   - Checkout UI (Web + Mobile)
   - Payment Gateway Integration (Stripe)
   - Order Processing Service
   - Email Notification Service

4. FEATURES TO BE TESTED:
   ✓ Payment processing (Credit Card, PayPal, Apple Pay)
   ✓ Order confirmation workflow
   ✓ Receipt generation (PDF)
   ✓ Error handling and validation
   ✓ Mobile responsiveness

5. FEATURES NOT TO BE TESTED:
   ✗ User authentication (unchanged from previous release)
   ✗ Shopping cart (separate test plan)
   ✗ Product catalog

6. TEST APPROACH:
   Test Levels:
   - Unit Testing (Developers)
   - Integration Testing (QA)
   - System Testing (QA)
   - UAT (Business Users)
   
   Test Types:
   - Functional Testing
   - Security Testing (PCI compliance)
   - Performance Testing (1000 concurrent users)
   - Usability Testing
   - Accessibility Testing (WCAG 2.1 Level AA)

7. PASS/FAIL CRITERIA:
   Pass Criteria:
   ✓ 100% of P0 test cases passed
   ✓ 95% of P1 test cases passed
   ✓ Zero critical defects open
   ✓ Code coverage ≥ 85%
   ✓ Performance: <3 sec checkout time
   
   Fail Criteria:
   ✗ Any P0 test case fails
   ✗ Critical defects open
   ✗ Performance >5 sec checkout time

8. SUSPENSION CRITERIA:
   Testing will be suspended if:
   - Test environment unavailable >4 hours
   - >20% of test cases blocked
   - Critical build issue
   
   Resumption Criteria:
   - Environment restored
   - Blockers resolved
   - Stable build deployed

9. TEST DELIVERABLES:
   - Test Plan (this document)
   - Test Cases (500 cases in TestRail)
   - Test Execution Reports (daily)
   - Defect Reports (Jira)
   - Test Completion Report
   - Test Metrics Dashboard

10. TEST ENVIRONMENT:
    - QA Environment: qa.ecommerce.com
    - Browsers: Chrome, Safari, Firefox, Edge (latest 2 versions)
    - Mobile: iOS 15+, Android 11+
    - Payment: Stripe Test Mode
    - Database: MySQL 8.0 (test data)

11. RESPONSIBILITIES:
    Test Manager: Sarah Chen
    Test Leads: John Smith (Web), Maria Garcia (Mobile)
    Testers: 5 QA engineers
    Developers: Support for defect fixes

12. STAFFING & TRAINING:
    - 5 QA engineers (full-time, 4 weeks)
    - Training: Stripe API (2 hours)
    - Skills Required: Web testing, API testing, SQL

13. SCHEDULE:
    Test Planning: Jan 10-12 (3 days)
    Test Design: Jan 13-17 (5 days)
    Test Execution: Jan 18-31 (10 days)
    Regression: Feb 1-3 (3 days)
    UAT: Feb 4-7 (4 days)
    Release: Feb 10

14. RISKS & CONTINGENCIES:
    Risk 1: Payment gateway test environment unstable
    Likelihood: Medium | Impact: High
    Mitigation: Use mock server as backup
    
    Risk 2: Limited mobile test devices
    Likelihood: High | Impact: Medium
    Mitigation: Use BrowserStack cloud devices
    
    Risk 3: Late requirement changes
    Likelihood: Medium | Impact: High
    Mitigation: Change control process, buffer in schedule

15. APPROVALS:
    QA Manager: _________________ Date: _______
    Project Manager: ____________ Date: _______
    Product Owner: ______________ Date: _______

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

3. Test Case Specification (Template)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ISO 29119-3 Test Case Format:
```
Test Case ID: TC-CHECKOUT-001
Test Case Name: Verify successful checkout with credit card
Priority: P0 (Critical)
Test Level: System Test
Test Type: Functional

Preconditions:
- User logged in
- Items in shopping cart (total: $100)
- Test credit card available

Test Data:
Card Number: 4242 4242 4242 4242
Expiry: 12/25
CVV: 123
ZIP: 12345

Test Steps:
┌──────┬───────────────────────────┬────────────────────────────┐
│ Step │ Action                    │ Expected Result            │
├──────┼───────────────────────────┼────────────────────────────┤
│  1   │ Click "Checkout" button   │ Redirected to checkout page│
│  2   │ Enter shipping address    │ Address validated, saved   │
│  3   │ Select "Credit Card"      │ Payment form displayed     │
│  4   │ Enter card details        │ Form accepts input         │
│  5   │ Click "Place Order"       │ Processing indicator shown │
│  6   │ Wait for confirmation     │ Order confirmation page    │
│      │                           │ Order# displayed           │
│      │                           │ Receipt emailed            │
│      │                           │ Cart emptied               │
└──────┴───────────────────────────┴────────────────────────────┘

Postconditions:
- Order created in database
- Payment processed
- Email sent
- Inventory updated

Pass/Fail Criteria:
PASS: All expected results achieved
FAIL: Any expected result not achieved

Actual Result: [To be filled during execution]
Status: [Pass/Fail/Blocked]
Tested By: [Name]
Test Date: [Date]
Comments: [Notes]
```

4. Test Incident Report (Defect Report Template)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ISO 29119-3 Incident Report Format:
```
Incident ID: INC-2026-001
Summary: Payment fails for orders >$1000
Priority: Critical (P0)
Severity: High

Test Case: TC-CHECKOUT-005
Test Environment: QA
Date Detected: 2026-01-10
Detected By: Sarah Chen

Description:
Payment processing fails when order total exceeds $1000.
Error message: "Payment gateway timeout"

Steps to Reproduce:
1. Add items totaling $1200 to cart
2. Proceed to checkout
3. Enter payment details (card: 4242...)
4. Click "Place Order"
5. Observe error

Expected Result:
Payment should process successfully
Order confirmation displayed

Actual Result:
Error message: "Payment gateway timeout"
Payment not processed
Order not created

Environment:
Browser: Chrome 120
OS: macOS Sontura
Server: qa.ecommerce.com
Build: v3.5.0-RC1
Database: MySQL 8.0 (QA)

Impact:
- Affects all orders >$1000
- Blocks checkout for high-value transactions
- Revenue impact: High
- User impact: Critical

Frequency: 100% (reproducible 5/5 times)

Workaround:
Split order into multiple transactions <$1000 each

Attachments:
- Screenshot: payment_error.png
- Browser Console Log: console_log.txt
- Network HAR file: network.har

Assigned To: John Developer
Target Fix Date: 2026-01-12
Priority Justification: Blocks core business functionality

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

PART 4: TEST TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Standardized test design techniques

CATEGORIES OF TEST TECHNIQUES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Specification-Based (Black-Box):
   ✓ Equivalence Partitioning
   ✓ Boundary Value Analysis
   ✓ Decision Tables
   ✓ State Transition Testing
   ✓ Use Case Testing
   ✓ Classification Trees

2. Structure-Based (White-Box):
   ✓ Statement Coverage
   ✓ Decision Coverage
   ✓ Condition Coverage
   ✓ Path Coverage

3. Experience-Based:
   ✓ Error Guessing
   ✓ Exploratory Testing
   ✓ Checklist-Based Testing

Example: Equivalence Partitioning (ISO 29119-4)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Requirement: Age field accepts values 18-65

Partitions:
┌────────────┬─────────────┬──────────────┬────────────────┐
│ Partition  │ Range       │ Valid/Invalid│ Test Value     │
├────────────┼─────────────┼──────────────┼────────────────┤
│ Below min  │ < 18        │ Invalid      │ 17             │
│ Valid range│ 18-65       │ Valid        │ 30, 50         │
│ Above max  │ > 65        │ Invalid      │ 66             │
└────────────┴─────────────┴──────────────┴────────────────┘

Test Cases:
TC-001: Input 17 → Expect: Error "Must be 18 or older"
TC-002: Input 30 → Expect: Accepted
TC-003: Input 50 → Expect: Accepted
TC-004: Input 66 → Expect: Error "Maximum age is 65"

PART 5: KEYWORD-DRIVEN TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Standardize keyword-driven test approach

Concept: Test cases written using keywords (actions)

Example:
```
Test Case: Login with valid credentials

┌──────────┬────────────┬──────────────┬────────────────┐
│ Keyword  │ Object     │ Data         │ Expected Result│
├──────────┼────────────┼──────────────┼────────────────┤
│ Navigate │ URL        │ /login       │ Page loads     │
│ Input    │ Username   │ testuser     │ Text entered   │
│ Input    │ Password   │ Test@123     │ Text entered   │
│ Click    │ LoginBtn   │              │ Login success  │
│ Verify   │ Dashboard  │              │ Displayed      │
└──────────┴────────────┴──────────────┴────────────────┘
```

Benefits:
✓ Non-programmers can write tests
✓ Reusable keywords
✓ Easier maintenance
✓ Test data separation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPLEMENTING ISO 29119
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP-BY-STEP IMPLEMENTATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phase 1: Assessment (Month 1-2)
--------------------------------
✓ Review current test processes
✓ Identify gaps vs ISO 29119
✓ Stakeholder buy-in
✓ Form implementation team

Phase 2: Planning (Month 3-4)
------------------------------
✓ Define organizational test policy
✓ Customize templates
✓ Tool selection/configuration
✓ Training plan

Phase 3: Pilot (Month 5-6)
---------------------------
✓ Select pilot project
✓ Apply ISO 29119 processes
✓ Use document templates
✓ Collect feedback
✓ Refine approach

Phase 4: Rollout (Month 7-12)
------------------------------
✓ Train all teams
✓ Apply to all projects
✓ Establish governance
✓ Regular process audits

Phase 5: Certification (Year 2)
--------------------------------
✓ Pre-assessment audit
✓ Address non-conformances
✓ External certification audit
✓ Achieve certification

COSTS & BENEFITS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Costs:
- Training: $10,000-50,000
- Tools/Templates: $5,000-20,000
- Consulting: $20,000-100,000 (optional)
- Time Investment: 6-12 months
- Certification Audit: $15,000-50,000

Benefits:
✓ Improved quality
✓ Reduced defects (15-30%)
✓ Better process efficiency
✓ Market differentiation
✓ Customer confidence
✓ Audit readiness
✓ Knowledge retention

ROI: Typically positive after 12-18 months

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.2 ISO/IEC 25010 - Software Quality Model

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ISO/IEC 25010: SOFTWARE QUALITY MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose:
Defines quality characteristics for evaluating software products

Published: 2011 (Replaced ISO 9126)
Part of: SQuaRE (Systems and Software Quality Requirements
         and Evaluation) series

TWO QUALITY MODELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PRODUCT QUALITY MODEL (Internal & External)
2. QUALITY IN USE MODEL

PRODUCT QUALITY MODEL (8 Characteristics):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FUNCTIONAL SUITABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Degree to which product provides functions that meet stated needs

   Sub-characteristics:
   a) Functional Completeness
      - All specified functions implemented
      
   b) Functional Correctness
      - Functions provide correct results
      
   c) Functional Appropriateness
      - Functions facilitate specified tasks

   Test Approach:
   ✓ Requirements-based testing
   ✓ Functional test coverage
   ✓ Acceptance testing
   
   Example Tests:
   - All user stories tested
   - All acceptance criteria verified
   - Edge cases covered

2. PERFORMANCE EFFICIENCY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Performance relative to resources used

   Sub-characteristics:
   a) Time Behavior
      - Response times, throughput
      
   b) Resource Utilization
      - CPU, memory, network usage
      
   c) Capacity
      - Maximum limits

   Test Approach:
   ✓ Performance testing
   ✓ Load testing
   ✓ Stress testing
   ✓ Scalability testing
   
   Example Tests:
   - Page load time <2 seconds
   - Support 1000 concurrent users
   - Memory usage <500MB

3. COMPATIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Ability to exchange information and co-exist with other systems

   Sub-characteristics:
   a) Co-existence
      - Works alongside other software
      
   b) Interoperability
      - Exchange data with other systems

   Test Approach:
   ✓ Integration testing
   ✓ API testing
   ✓ Cross-platform testing
   
   Example Tests:
   - Works with all major browsers
   - API integration with payment gateway
   - Runs on Windows, Mac, Linux

4. USABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Ease of use and learnability

   Sub-characteristics:
   a) Appropriateness Recognizability
      - Users understand if suitable for needs
      
   b) Learnability
      - Easy to learn
      
   c) Operability
      - Easy to operate and control
      
   d) User Error Protection
      - Protects against errors
      
   e) User Interface Aesthetics
      - Pleasing interface
      
   f) Accessibility
      - Usable by people with disabilities

   Test Approach:
   ✓ Usability testing
   ✓ User acceptance testing
   ✓ Accessibility testing (WCAG)
   
   Example Tests:
   - First-time users complete task in <5 min
   - Keyboard navigation works
   - Screen reader compatible
   - Error messages are clear

5. RELIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   System performs under stated conditions

   Sub-characteristics:
   a) Maturity
      - Meets reliability needs under normal use
      
   b) Availability
      - Operational when needed
      
   c) Fault Tolerance
      - Operates despite faults
      
   d) Recoverability
      - Recovers data after failure

   Test Approach:
   ✓ Reliability testing
   ✓ Failover testing
   ✓ Recovery testing
   ✓ Long-running tests
   
   Example Tests:
   - 99.9% uptime
   - Automatic failover to backup server
   - Recover from database crash in <5 min
   - No data loss on unexpected shutdown

6. SECURITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Protection of information and data

   Sub-characteristics:
   a) Confidentiality
      - Data accessible only to authorized
      
   b) Integrity
      - Data not modified without authorization
      
   c) Non-repudiation
      - Actions can be proven
      
   d) Accountability
      - Actions traced to entity
      
   e) Authenticity
      - Identity verified

   Test Approach:
   ✓ Security testing
   ✓ Penetration testing
   ✓ Vulnerability scanning
   ✓ Authentication/authorization testing
   
   Example Tests:
   - SQL injection attempts blocked
   - XSS attacks prevented
   - Unauthorized access denied
   - Passwords encrypted
   - Audit logs created

7. MAINTAINABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Ease of modification

   Sub-characteristics:
   a) Modularity
      - Components independent
      
   b) Reusability
      - Components reusable
      
   c) Analyzability
      - Easy to diagnose issues
      
   d) Modifiability
      - Easy to modify
      
   e) Testability
      - Easy to test

   Test Approach:
   ✓ Code reviews
   ✓ Static analysis
   ✓ Architecture reviews
   ✓ Test coverage analysis
   
   Example Tests:
   - Code coverage >80%
   - Cyclomatic complexity <10
   - No code duplication >10 lines
   - Unit test execution time <5 sec

8. PORTABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Ease of transfer to different environments

   Sub-characteristics:
   a) Adaptability
      - Adapts to different environments
      
   b) Installability
      - Easy to install/uninstall
      
   c) Replaceability
      - Can replace another system

   Test Approach:
   ✓ Installation testing
   ✓ Cross-platform testing
   ✓ Migration testing
   
   Example Tests:
   - Install on Windows, Mac, Linux
   - Uninstall leaves no traces
   - Migrate data from old system
   - Works on different cloud providers

QUALITY IN USE MODEL (5 Characteristics):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Measured from user's perspective in real context

1. Effectiveness
   - Accuracy and completeness of goals

2. Efficiency
   - Resources expended relative to goals

3. Satisfaction
   - User fulfillment of needs

4. Freedom from Risk
   - Mitigates economic, health, environmental risk

5. Context Coverage
   - Works in specified contexts

PRACTICAL APPLICATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example: E-commerce Website Quality Requirements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────┬──────────────────────────────────┐
│ Quality Character.  │ Requirement & Test Criteria      │
├─────────────────────┼──────────────────────────────────┤
│ Functional Suit.    │ - All checkout features work     │
│                     │ - 100% user stories implemented  │
│                     │ Test: Functional test coverage   │
├─────────────────────┼──────────────────────────────────┤
│ Performance         │ - Page load <2 sec               │
│                     │ - Support 5000 concurrent users  │
│                     │ Test: JMeter load testing        │
├─────────────────────┼──────────────────────────────────┤
│ Compatibility       │ - Works on Chrome, Safari, etc.  │
│                     │ - Mobile responsive              │
│                     │ Test: Cross-browser testing      │
├─────────────────────┼──────────────────────────────────┤
│ Usability           │ - First-time users complete      │
│                     │   purchase in <3 min             │
│                     │ Test: Usability testing          │
├─────────────────────┼──────────────────────────────────┤
│ Reliability         │ - 99.9% uptime                   │
│                     │ - Zero data loss                 │
│                     │ Test: Stress & failover tests    │
├─────────────────────┼──────────────────────────────────┤
│ Security            │ - PCI DSS compliant              │
│                     │ - HTTPS enforced                 │
│                     │ Test: Penetration testing        │
├─────────────────────┼──────────────────────────────────┤
│ Maintainability     │ - Code coverage >85%             │
│                     │ - Automated regression suite     │
│                     │ Test: Static analysis            │
├─────────────────────┼──────────────────────────────────┤
│ Portability         │ - Runs on AWS, Azure, GCP        │
│                     │ - Docker containerized           │
│                     │ Test: Deployment testing         │
└─────────────────────┴──────────────────────────────────┘

CREATING QUALITY METRICS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For each characteristic, define:
1. Measurement method
2. Target value
3. Acceptance criteria

Example (Performance Efficiency):
```
Characteristic: Performance Efficiency
Sub-characteristic: Time Behavior
Metric: Average response time

Measurement Method:
- Automated performance test using JMeter
- 1000 concurrent users
- 10-minute test duration
- Measure avg response time for all API calls

Target Value: <500ms
Acceptance Criteria: <800ms

Results:
API Endpoint           | Avg Response Time | Status
─────────────────────────────────────────────────────
GET /products         | 320ms             | ✓ Pass
POST /checkout        | 450ms             | ✓ Pass
GET /orders           | 280ms             | ✓ Pass
POST /payment         | 650ms             | ✓ Pass

Overall: PASS (all <800ms)
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**Study Time:** 2-2.5 hours

**Next:** Day 20B - ISTQB Certification & Test Maturity

---

*End of Day 20A Study Guide*
