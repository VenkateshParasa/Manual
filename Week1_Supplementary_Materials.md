# Week 1 Supplementary Materials
## Manual Testing Learning Journey - Foundations & Core Concepts

---

## Table of Contents
1. [Daily Checklists](#daily-checklists)
2. [Templates](#templates)
3. [Quick Reference Guides](#quick-reference-guides)
4. [Practice Exercises & Worksheets](#practice-exercises--worksheets)
5. [Self-Assessment Tools](#self-assessment-tools)
6. [Additional Resources](#additional-resources)

---

## Daily Checklists

### Day 1 Checklist: Manual Testing Fundamentals & SDLC
- [ ] Understand the definition and objectives of manual testing
- [ ] Identify when to use manual vs automated testing
- [ ] Learn all 6 SDLC models and their testing approaches
- [ ] Memorize all 6 STLC phases with entry/exit criteria
- [ ] Complete 5 practical exercises
- [ ] Score at least 12/15 on assessment questions
- [ ] Create summary notes in your own words
- [ ] Review real-world examples and relate to your experience

**Time Estimate:** 3-4 hours

---

### Day 2 Checklist: Testing Levels & Types
- [ ] Understand all 4 testing levels (Unit, Integration, System, Acceptance)
- [ ] Differentiate between 4 integration approaches
- [ ] Learn functional testing types (smoke, sanity, regression, re-testing)
- [ ] Learn non-functional testing types (performance, security, usability)
- [ ] Create a testing level matrix for a sample application
- [ ] Complete 5 practical exercises
- [ ] Score at least 16/20 on assessment questions
- [ ] Create a mind map of testing types

**Time Estimate:** 3-4 hours

---

### Day 3 Checklist: Test Case Design Techniques - Part 1
- [ ] Master Equivalence Partitioning with 3+ examples
- [ ] Master Boundary Value Analysis with 3+ examples
- [ ] Understand Decision Table Testing with 2+ examples
- [ ] Understand State Transition Testing with 2+ examples
- [ ] Design test cases for login form using EP and BVA
- [ ] Create decision table for discount system
- [ ] Draw state transition diagram for ATM
- [ ] Complete all 8 practical exercises
- [ ] Score at least 20/25 on assessment questions
- [ ] Practice each technique on 2-3 different scenarios

**Time Estimate:** 4-5 hours

---

### Day 4 Checklist: Test Case Design Techniques - Part 2
- [ ] Understand Use Case Testing (basic, alternate, exception flows)
- [ ] Learn Error Guessing patterns
- [ ] Understand Exploratory Testing basics
- [ ] Learn White Box Testing concepts (statement, branch, path coverage)
- [ ] Understand Experience-Based Techniques
- [ ] Write use case scenarios for shopping cart
- [ ] Practice error guessing on sample application
- [ ] Complete all 6 practical exercises
- [ ] Score at least 16/20 on assessment questions

**Time Estimate:** 3-4 hours

---

### Day 5 Checklist: Test Documentation & Artifacts
- [ ] Learn IEEE 829 standard components
- [ ] Create a complete test plan using template
- [ ] Write 20 detailed test cases with all components
- [ ] Build an RTM (Requirements Traceability Matrix)
- [ ] Create test summary report
- [ ] Design defect report template
- [ ] Complete all 5 practical exercises
- [ ] Score at least 16/20 on assessment questions
- [ ] Download and customize all templates

**Time Estimate:** 4-5 hours

---

### Day 6 Checklist: Defect Management & Bug Life Cycle
- [ ] Memorize all bug life cycle states and transitions
- [ ] Learn severity vs priority matrix
- [ ] Write 10 effective bug reports
- [ ] Calculate defect metrics (density, DRE, leakage)
- [ ] Create defect life cycle flowchart
- [ ] Practice improving poorly written bug reports
- [ ] Complete all 5 practical exercises
- [ ] Score at least 16/20 on assessment questions

**Time Estimate:** 3-4 hours

---

### Day 7 Checklist: Week 1 Review & Assessment
- [ ] Review all notes from Days 1-6
- [ ] Complete comprehensive review summary
- [ ] Work through practical project (4-6 hours)
- [ ] Take 50-question comprehensive assessment
- [ ] Score at least 40/50 (80%) on final assessment
- [ ] Identify weak areas for additional practice
- [ ] Create Week 2 preparation plan
- [ ] Celebrate Week 1 completion

**Time Estimate:** 6-8 hours

---

## Templates

### Template 1: Test Plan Template (IEEE 829 Based)

```
TEST PLAN
Project Name: [Enter Project Name]
Version: 1.0
Date: [DD/MM/YYYY]
Prepared by: [Your Name]

==========================================

1. TEST PLAN IDENTIFIER
   TP-[Project Code]-[Version]-[YYYYMMDD]

2. INTRODUCTION
   2.1 Purpose
   [Describe the purpose of this test plan]

   2.2 Scope
   In Scope:
   - [Feature/Module 1]
   - [Feature/Module 2]

   Out of Scope:
   - [Feature/Module not included]

3. TEST ITEMS
   - [Application/Module to be tested]
   - Version: [Version number]
   - Build: [Build number]

4. FEATURES TO BE TESTED
   | Feature ID | Feature Name | Priority |
   |------------|--------------|----------|
   | F001       | User Login   | P0       |
   | F002       | Registration | P1       |

5. FEATURES NOT TO BE TESTED
   - [Feature name and reason]

6. APPROACH
   6.1 Testing Types
   - Functional Testing
   - UI/UX Testing
   - Compatibility Testing
   - Regression Testing

   6.2 Testing Levels
   - System Testing
   - Integration Testing
   - Acceptance Testing

7. ITEM PASS/FAIL CRITERIA
   Pass Criteria:
   - All P0 test cases pass
   - 95% of P1 test cases pass
   - No critical/blocker defects

   Fail Criteria:
   - Any P0 test case fails
   - Critical/Blocker defects exist

8. SUSPENSION CRITERIA AND RESUMPTION REQUIREMENTS
   Suspension:
   - [Criteria to stop testing]

   Resumption:
   - [Criteria to resume testing]

9. TEST DELIVERABLES
   - Test Plan
   - Test Cases
   - Test Scripts
   - Test Data
   - Defect Reports
   - Test Summary Report
   - RTM (Requirements Traceability Matrix)

10. TESTING TASKS
    - Test plan creation
    - Test case design
    - Test environment setup
    - Test execution
    - Defect reporting
    - Test closure

11. ENVIRONMENTAL NEEDS
    11.1 Hardware
    - [Hardware specifications]

    11.2 Software
    - OS: [Operating System]
    - Browser: [Browser versions]
    - Database: [Database type and version]

    11.3 Tools
    - Test Management: [Tool name]
    - Defect Tracking: [Tool name]
    - API Testing: [Tool name]

12. RESPONSIBILITIES
    | Role            | Responsibility               | Name      |
    |-----------------|------------------------------|-----------|
    | Test Lead       | Test planning & coordination | [Name]    |
    | Test Engineer   | Test execution              | [Name]    |
    | Developer       | Defect fixing               | [Name]    |

13. STAFFING AND TRAINING NEEDS
    - Number of testers: [Number]
    - Training required: [Training details]

14. SCHEDULE
    | Phase                  | Start Date  | End Date    |
    |------------------------|-------------|-------------|
    | Test Planning          | [Date]      | [Date]      |
    | Test Case Design       | [Date]      | [Date]      |
    | Test Environment Setup | [Date]      | [Date]      |
    | Test Execution         | [Date]      | [Date]      |
    | Test Closure           | [Date]      | [Date]      |

15. RISKS AND MITIGATION
    | Risk                    | Impact | Probability | Mitigation           |
    |-------------------------|--------|-------------|----------------------|
    | Resource unavailability | High   | Medium      | Backup resource plan |
    | Environment delays      | High   | Low         | Early setup          |

16. APPROVALS
    | Name           | Role          | Signature | Date |
    |----------------|---------------|-----------|------|
    | [Name]         | Test Manager  |           |      |
    | [Name]         | Project Manager|          |      |

==========================================
End of Test Plan
```

---

### Template 2: Test Case Template

```
TEST CASE DOCUMENT
Project: [Project Name]
Module: [Module Name]
Created by: [Your Name]
Date: [DD/MM/YYYY]

==========================================

Test Case ID: TC_[Module]_[Number]_[YYYYMMDD]
Example: TC_LOGIN_001_20250104

Test Case Title: [Clear, descriptive title]
Example: Verify login with valid credentials

Module/Feature: [Module name]
Example: User Authentication

Test Case Priority: [P0/P1/P2/P3]
- P0: Critical (Blocker)
- P1: High
- P2: Medium
- P3: Low

Test Case Type: [Functional/Non-functional]
Example: Functional

Test Design Technique: [EP/BVA/Decision Table/State Transition/etc.]
Example: Equivalence Partitioning

Prerequisites/Preconditions:
1. [Condition 1]
2. [Condition 2]
Example:
1. User is registered in the system
2. Application is accessible
3. User is on login page

Test Data:
| Field      | Test Data           |
|------------|---------------------|
| Username   | testuser@email.com  |
| Password   | Test@12345          |

Test Steps:
| Step No | Action                          | Expected Result                    |
|---------|----------------------------------|-------------------------------------|
| 1       | Navigate to login page          | Login page is displayed            |
| 2       | Enter valid username            | Username field accepts input       |
| 3       | Enter valid password            | Password is masked                 |
| 4       | Click Login button              | User is logged in successfully     |
| 5       | Verify dashboard is displayed   | Dashboard with username is shown   |

Expected Result:
User should be successfully logged in and redirected to dashboard page with welcome message.

Actual Result:
[To be filled during execution]

Status: [Pass/Fail/Blocked/Not Executed]

Execution Date: [DD/MM/YYYY]

Executed By: [Tester Name]

Defect ID (if any): [BUG-XXX]

Comments/Notes:
[Any additional information]

Postconditions:
1. User session is created
2. User can access protected pages
3. Logout option is available

==========================================
```

---

### Template 3: Bug/Defect Report Template

```
DEFECT REPORT
Project: [Project Name]
Reported by: [Your Name]
Date: [DD/MM/YYYY]

==========================================

Defect ID: BUG-[Number]
Example: BUG-1234

Defect Title: [Clear, concise title - max 10 words]
Example: Login button not responding on Chrome browser

Module/Feature: [Module name]
Example: User Authentication

Environment:
- OS: [Windows 10 / macOS 13.2 / Ubuntu 22.04]
- Browser: [Chrome 120.0.6099 / Firefox 121.0 / Safari 17.2]
- Device: [Desktop / Mobile - iPhone 14 / Samsung Galaxy S23]
- Screen Resolution: [1920x1080]
- Application Version: [v2.3.1]
- Build Number: [Build-456]

Severity: [Critical/High/Medium/Low]
Critical: System crash, data loss, security breach
High: Major feature not working, no workaround
Medium: Feature partially working, workaround available
Low: Minor UI issue, cosmetic defect

Priority: [P0/P1/P2/P3]
P0: Fix immediately (production down)
P1: Fix in current sprint
P2: Fix in next sprint
P3: Fix when time permits

Defect Type: [Functional/UI/Performance/Security/Data/etc.]

Test Case ID (if applicable): TC_LOGIN_001

Steps to Reproduce:
1. [Clear step 1]
2. [Clear step 2]
3. [Clear step 3]

Example:
1. Open Chrome browser v120
2. Navigate to https://app.example.com/login
3. Enter valid username: test@example.com
4. Enter valid password: Test@123
5. Click on "Login" button
6. Observe the behavior

Expected Result:
[What should happen]
Example: User should be logged in and redirected to dashboard page within 2 seconds

Actual Result:
[What actually happened]
Example: Login button does not respond to click. No action occurs. User remains on login page.

Frequency: [Always/Sometimes/Once]
Example: Always (100% reproducible)

Attachments:
- Screenshot: [login_button_issue.png]
- Video: [login_flow_recording.mp4]
- Console logs: [browser_console_errors.txt]
- Network logs: [network_traffic.har]

Additional Information:
- This issue occurs only on Chrome browser
- Works fine on Firefox and Safari
- No console errors observed
- Network calls are not triggered on button click

Defect Status: [New/Open/Assigned/In Progress/Fixed/Retest/Verified/Closed/Deferred/Rejected]

Assigned To: [Developer Name]

Root Cause (filled by developer):
[Root cause analysis]

Fix Description (filled by developer):
[What was fixed]

Verified By: [Tester Name]
Verification Date: [DD/MM/YYYY]

Comments:
[Any additional comments during defect lifecycle]

==========================================
```

---

### Template 4: Requirements Traceability Matrix (RTM)

```
REQUIREMENTS TRACEABILITY MATRIX (RTM)
Project: [Project Name]
Version: 1.0
Date: [DD/MM/YYYY]

==========================================

| Req ID | Requirement Description | Priority | Test Case ID | Test Case Description | Status | Defect ID | Comments |
|--------|-------------------------|----------|--------------|------------------------|--------|-----------|----------|
| REQ-001 | User should be able to login | P0 | TC_LOGIN_001 | Login with valid credentials | Pass | - | - |
| REQ-001 | User should be able to login | P0 | TC_LOGIN_002 | Login with invalid username | Pass | - | - |
| REQ-001 | User should be able to login | P0 | TC_LOGIN_003 | Login with invalid password | Fail | BUG-101 | Error message not displayed |
| REQ-002 | User should be able to register | P1 | TC_REG_001 | Registration with valid data | Pass | - | - |
| REQ-002 | User should be able to register | P1 | TC_REG_002 | Registration with existing email | Pass | - | - |

Coverage Metrics:
- Total Requirements: [Number]
- Requirements with Test Cases: [Number]
- Requirements Coverage: [Percentage]
- Total Test Cases: [Number]
- Test Cases Passed: [Number]
- Test Cases Failed: [Number]
- Pass Percentage: [Percentage]

==========================================
```

---

### Template 5: Test Summary Report

```
TEST SUMMARY REPORT
Project: [Project Name]
Test Cycle: [Sprint/Release Number]
Report Date: [DD/MM/YYYY]
Prepared by: [Your Name]

==========================================

1. EXECUTIVE SUMMARY
   [Brief overview of testing activities and results - 2-3 paragraphs]

2. TEST SCOPE
   In Scope:
   - [Module/Feature 1]
   - [Module/Feature 2]

   Out of Scope:
   - [Module/Feature not tested]

3. TEST ENVIRONMENT
   - OS: [Operating Systems tested]
   - Browsers: [Browsers tested]
   - Devices: [Devices tested]
   - Application Version: [Version]
   - Build Number: [Build number]

4. TEST EXECUTION SUMMARY

   | Metric                    | Count | Percentage |
   |---------------------------|-------|------------|
   | Total Test Cases          | 150   | 100%       |
   | Test Cases Executed       | 145   | 97%        |
   | Test Cases Passed         | 130   | 90%        |
   | Test Cases Failed         | 15    | 10%        |
   | Test Cases Blocked        | 5     | 3%         |
   | Test Cases Not Executed   | 5     | 3%         |

5. TEST CASE EXECUTION BY PRIORITY

   | Priority | Total | Passed | Failed | Pass % |
   |----------|-------|--------|--------|--------|
   | P0       | 40    | 38     | 2      | 95%    |
   | P1       | 60    | 55     | 5      | 92%    |
   | P2       | 40    | 32     | 8      | 80%    |
   | P3       | 10    | 5      | 0      | 100%   |

6. DEFECT SUMMARY

   | Severity | Open | In Progress | Fixed | Closed | Deferred | Total |
   |----------|------|-------------|-------|--------|----------|-------|
   | Critical | 1    | 0           | 2     | 2      | 0        | 5     |
   | High     | 3    | 2           | 8     | 7      | 0        | 20    |
   | Medium   | 5    | 3           | 15    | 12     | 2        | 37    |
   | Low      | 2    | 1           | 10    | 8      | 3        | 24    |
   | Total    | 11   | 6           | 35    | 29     | 5        | 86    |

7. DEFECT METRICS
   - Defect Density: [Number of defects per 1000 lines of code or per module]
   - Defect Removal Efficiency: [Percentage]
   - Defect Leakage: [Percentage]
   - Average Defect Age: [Days]

8. TEST COVERAGE
   - Requirements Coverage: [Percentage]
   - Code Coverage: [Percentage if available]
   - Feature Coverage: [Percentage]

9. ISSUES/RISKS/BLOCKERS
   - [Issue 1 with impact and resolution]
   - [Issue 2 with impact and resolution]

10. TESTING CHALLENGES
    - [Challenge 1]
    - [Challenge 2]

11. RECOMMENDATIONS
    - [Recommendation 1]
    - [Recommendation 2]

12. CONCLUSION
    [Overall assessment of quality and readiness for release - 2-3 paragraphs]

    Go/No-Go Recommendation: [GO / NO-GO]
    Reason: [Justification for recommendation]

13. SIGN-OFF
    | Name           | Role          | Signature | Date |
    |----------------|---------------|-----------|------|
    | [Name]         | Test Lead     |           |      |
    | [Name]         | QA Manager    |           |      |

==========================================
End of Test Summary Report
```

---

### Template 6: Test Execution Report (Daily/Weekly)

```
TEST EXECUTION REPORT
Project: [Project Name]
Sprint/Cycle: [Sprint Number]
Reporting Period: [Daily/Weekly - Date Range]
Prepared by: [Your Name]
Date: [DD/MM/YYYY]

==========================================

1. SUMMARY
   Testing Phase: [Smoke/Sanity/Functional/Regression]
   Build Under Test: [Build Number]
   Environment: [Environment details]

2. TODAY'S/THIS WEEK'S EXECUTION

   | Metric                  | Count |
   |-------------------------|-------|
   | Test Cases Planned      | 50    |
   | Test Cases Executed     | 45    |
   | Test Cases Passed       | 38    |
   | Test Cases Failed       | 7     |
   | Test Cases Blocked      | 5     |
   | Test Cases Pending      | 5     |
   | Pass Percentage         | 84%   |

3. CUMULATIVE EXECUTION

   | Metric                  | Count |
   |-------------------------|-------|
   | Total Test Cases        | 200   |
   | Total Executed          | 150   |
   | Total Passed            | 125   |
   | Total Failed            | 25    |
   | Execution Progress      | 75%   |
   | Pass Percentage         | 83%   |

4. DEFECTS LOGGED TODAY/THIS WEEK
   - Critical: [Number]
   - High: [Number]
   - Medium: [Number]
   - Low: [Number]
   - Total: [Number]

5. TOP DEFECTS
   | Defect ID | Title | Severity | Status |
   |-----------|-------|----------|--------|
   | BUG-101   | [Title] | Critical | Open |
   | BUG-102   | [Title] | High | In Progress |

6. BLOCKERS & ISSUES
   - [Blocker 1 with impact]
   - [Blocker 2 with impact]

7. PLANNED ACTIVITIES FOR TOMORROW/NEXT WEEK
   - [Activity 1]
   - [Activity 2]

8. COMMENTS
   [Any additional information]

==========================================
```

---

## Quick Reference Guides

### QRG 1: SDLC Models Quick Reference

```
SDLC MODELS AT A GLANCE

1. WATERFALL MODEL
   Phases: Requirements → Design → Implementation → Testing → Deployment → Maintenance
   Testing: Separate phase after development
   Best for: Stable requirements, well-defined projects
   Pros: Simple, well-documented
   Cons: Inflexible, late testing

2. AGILE MODEL
   Phases: Iterative sprints (Plan → Design → Develop → Test → Review)
   Testing: Continuous throughout sprint
   Best for: Changing requirements, rapid delivery
   Pros: Flexible, early testing, customer feedback
   Cons: Less documentation, requires collaboration

3. V-MODEL
   Phases: Parallel V-shape (left: development, right: testing)
   Testing: Each development phase has corresponding test phase
   Best for: Projects requiring high reliability
   Pros: Early test planning, clear structure
   Cons: Rigid, expensive

4. SPIRAL MODEL
   Phases: Iterative cycles (Plan → Risk Analysis → Engineering → Evaluation)
   Testing: Each cycle includes testing
   Best for: Large, complex, risk-heavy projects
   Pros: Risk management, flexible
   Cons: Expensive, complex

5. ITERATIVE MODEL
   Phases: Multiple iterations of mini-development cycles
   Testing: At end of each iteration
   Best for: Large applications with clear objectives
   Pros: Early functionality, flexible
   Cons: Resource-intensive

6. DevOps
   Phases: Continuous integration and continuous delivery (CI/CD)
   Testing: Automated continuous testing
   Best for: Rapid deployment, cloud applications
   Pros: Fast delivery, automation, collaboration
   Cons: Requires cultural change, tooling investment
```

---

### QRG 2: STLC Phases Quick Reference

```
SOFTWARE TESTING LIFE CYCLE (STLC)

Phase 1: REQUIREMENT ANALYSIS
Entry: Requirements document available
Activities:
  - Analyze requirements
  - Identify testable requirements
  - Identify testing types
  - Create RTM
Exit: RTM signed off, automation feasibility report
Deliverables: RTM, Automation feasibility report

Phase 2: TEST PLANNING
Entry: Requirements document, RTM
Activities:
  - Test strategy preparation
  - Resource planning
  - Test estimation
  - Risk analysis
Exit: Test plan approved
Deliverables: Test Plan, Test Effort Estimation

Phase 3: TEST CASE DESIGN
Entry: Requirements document, Test Plan
Activities:
  - Create test scenarios
  - Design test cases
  - Review test cases
  - Create test data
Exit: Test cases reviewed and approved
Deliverables: Test Cases, Test Scripts, Test Data

Phase 4: TEST ENVIRONMENT SETUP
Entry: Test Plan, Environment requirements
Activities:
  - Setup hardware/software
  - Configure test data
  - Perform smoke test
Exit: Environment ready, smoke test passed
Deliverables: Test Environment, Smoke Test Results

Phase 5: TEST EXECUTION
Entry: Test cases, Test environment, Build
Activities:
  - Execute test cases
  - Log defects
  - Retest fixed defects
  - Regression testing
Exit: All planned tests executed
Deliverables: Defect Reports, Execution Logs, Test Results

Phase 6: TEST CLOSURE
Entry: Test execution complete
Activities:
  - Test summary report
  - Lessons learned
  - Archive test artifacts
Exit: Test closure report signed off
Deliverables: Test Summary Report, Test Metrics, Test Closure Report
```

---

### QRG 3: Testing Types Quick Reference

```
TESTING TYPES CLASSIFICATION

FUNCTIONAL TESTING:
1. Smoke Testing
   - Build verification
   - Critical functionality check
   - Wide & shallow coverage
   - Done before detailed testing

2. Sanity Testing
   - Narrow & deep
   - Specific functionality after bug fix
   - Subset of regression
   - Quick validation

3. Regression Testing
   - Re-run tests after changes
   - Ensure no new defects
   - Full or selective
   - Time-consuming

4. Re-testing
   - Verify fixed defects
   - Same test case, same environment
   - Not regression
   - Targeted testing

NON-FUNCTIONAL TESTING:
1. Performance Testing
   - Load, stress, scalability
   - Response time, throughput
   - Resource utilization

2. Security Testing
   - Vulnerability assessment
   - Authentication/Authorization
   - SQL injection, XSS
   - Data protection

3. Usability Testing
   - User-friendliness
   - Ease of use
   - User satisfaction

4. Compatibility Testing
   - Browser compatibility
   - OS compatibility
   - Device compatibility
   - Backward compatibility
```

---

### QRG 4: Test Case Design Techniques

```
TEST DESIGN TECHNIQUES CHEAT SHEET

1. EQUIVALENCE PARTITIONING (EP)
   Concept: Divide inputs into groups that behave similarly
   Example: Age 1-10 (child), 11-17 (teen), 18+ (adult)
   When: Large input ranges
   Test: One value from each partition

2. BOUNDARY VALUE ANALYSIS (BVA)
   Concept: Test at boundaries of partitions
   Example: Age range 18-65: test 17, 18, 65, 66
   When: Input ranges, numeric fields
   Test: Min-1, Min, Min+1, Max-1, Max, Max+1

3. DECISION TABLE
   Concept: Combinations of conditions and actions
   Example: Login (username valid/invalid, password valid/invalid)
   When: Multiple conditions, complex business rules
   Test: All combinations or reduced set

4. STATE TRANSITION
   Concept: Test state changes based on events
   Example: ATM (Idle → Card Inserted → PIN Entered → Authorized)
   When: System has states, workflows
   Test: Valid transitions, invalid transitions

5. USE CASE TESTING
   Concept: Test based on user scenarios
   Example: User login → Browse products → Add to cart → Checkout
   When: End-to-end scenarios
   Test: Basic flow, alternate flows, exception flows

6. ERROR GUESSING
   Concept: Based on experience and intuition
   Example: Empty fields, special characters, SQL injection
   When: Exploratory testing, experience-based
   Test: Common error-prone areas

7. EXPLORATORY TESTING
   Concept: Simultaneous learning, test design, and execution
   Example: Explore application without predefined test cases
   When: Limited time, new features, ad-hoc testing
   Test: Charter-based, time-boxed sessions
```

---

### QRG 5: Severity vs Priority Matrix

```
SEVERITY vs PRIORITY

SEVERITY: Impact on application functionality

Critical (S1): System crash, data loss, security breach
High (S2): Major feature not working, no workaround
Medium (S3): Feature partially working, workaround exists
Low (S4): Minor UI issue, cosmetic defect

PRIORITY: Urgency of fixing

P0 (Immediate): Fix immediately, production down
P1 (High): Fix in current sprint/release
P2 (Medium): Fix in next sprint/release
P3 (Low): Fix when time permits

SEVERITY-PRIORITY MATRIX:

| Scenario | Severity | Priority | Example |
|----------|----------|----------|---------|
| High Severity, High Priority | Critical | P0 | Application crash on login |
| High Severity, Low Priority | Critical | P2 | Crash in rarely used feature |
| Low Severity, High Priority | Low | P1 | Company logo wrong color |
| Low Severity, Low Priority | Low | P3 | Tooltip text alignment issue |

EXAMPLES:

1. Payment processing fails (S1, P0)
   - Critical severity: Users can't pay
   - Immediate priority: Revenue impact

2. Help page has broken link (S4, P3)
   - Low severity: Minor issue
   - Low priority: Can wait

3. CEO name misspelled on homepage (S4, P0)
   - Low severity: Just text
   - Immediate priority: Brand reputation

4. Admin panel crashes (S1, P2)
   - Critical severity: Feature broken
   - Medium priority: Few users affected
```

---

### QRG 6: Defect Life Cycle States

```
DEFECT LIFE CYCLE

NEW → ASSIGNED → IN PROGRESS → FIXED → RETEST → VERIFIED → CLOSED
                                  ↓                   ↓
                              DEFERRED          REOPENED
                                  ↓                   ↓
                              CLOSED             IN PROGRESS

States Explained:

1. NEW
   - Defect logged by tester
   - Awaiting review

2. ASSIGNED
   - Assigned to developer
   - Developer acknowledged

3. IN PROGRESS
   - Developer working on fix
   - Under investigation

4. FIXED
   - Developer fixed the issue
   - Ready for retesting
   - Build deployed to test environment

5. RETEST
   - Tester is retesting
   - Verification in progress

6. VERIFIED
   - Tester confirmed fix works
   - Ready to close

7. CLOSED
   - Defect resolved completely
   - No further action needed

8. REOPENED
   - Fix didn't work
   - Issue persists
   - Back to developer

9. DEFERRED
   - Will fix in future release
   - Not critical now
   - Resource constraints

10. REJECTED
    - Not a defect
    - Working as designed
    - Cannot reproduce
    - Duplicate
```

---

## Practice Exercises & Worksheets

### Worksheet 1: SDLC Model Matching Exercise

Match the scenario with the most appropriate SDLC model:

**Scenarios:**
1. Banking system with strict regulatory requirements
2. Startup building MVP with evolving features
3. Mission-critical aerospace software
4. Mobile app requiring rapid releases
5. Large ERP system with high complexity and risks

**SDLC Models:**
A. Waterfall
B. Agile
C. V-Model
D. Spiral
E. DevOps

**Answers:**
1. C (V-Model) - Banking requires high reliability
2. B (Agile) - Startup needs flexibility
3. C (V-Model) - Aerospace requires rigorous testing
4. E (DevOps) - Mobile app needs rapid deployment
5. D (Spiral) - ERP has high complexity and risks

---

### Worksheet 2: Test Case Design Practice

**Scenario:** ATM Withdrawal Feature
- Minimum withdrawal: $20
- Maximum withdrawal: $500
- Account balance: $1000
- Must be multiples of $20

**Design test cases using:**

1. **Equivalence Partitioning:**
   - Valid class: $20-$500 in multiples of $20
   - Invalid class: <$20
   - Invalid class: >$500
   - Invalid class: Not multiple of $20
   - Invalid class: > Account balance

   Test cases:
   - TC1: $100 (valid)
   - TC2: $10 (invalid - below min)
   - TC3: $600 (invalid - above max)
   - TC4: $45 (invalid - not multiple of 20)
   - TC5: $1200 (invalid - exceeds balance)

2. **Boundary Value Analysis:**
   Test values: $19, $20, $40, $480, $500, $520

3. **Decision Table:**

   | Condition | T1 | T2 | T3 | T4 |
   |-----------|----|----|----|----|
   | Amount in range | Y | Y | N | N |
   | Multiple of 20 | Y | N | Y | N |
   | Sufficient balance | Y | Y | Y | Y |
   | **Action** | **Allow** | **Reject** | **Reject** | **Reject** |

---

### Worksheet 3: Bug Report Writing Practice

**Scenario:** You're testing a registration form. When you enter a valid email and click "Register", nothing happens. Write a detailed bug report.

**Your Bug Report:**

```
Defect ID: BUG-____
Title: ___________________________________
Module: ___________________________________
Environment:
  OS: ___________________________________
  Browser: ___________________________________
Severity: ___________________________________
Priority: ___________________________________

Steps to Reproduce:
1. ___________________________________
2. ___________________________________
3. ___________________________________

Expected Result: ___________________________________

Actual Result: ___________________________________

Attachments: ___________________________________
```

**Sample Answer:**

```
Defect ID: BUG-1001
Title: Register button not responding on registration form
Module: User Registration
Environment:
  OS: Windows 11
  Browser: Chrome 120.0.6099
  Device: Desktop (1920x1080)
Severity: High
Priority: P1

Steps to Reproduce:
1. Navigate to https://example.com/register
2. Enter valid email: test@example.com
3. Enter valid password: Test@123
4. Click "Register" button
5. Observe the behavior

Expected Result: User should be registered successfully and redirected to welcome page or receive confirmation email

Actual Result: Register button does not respond. No action occurs. Form remains on same page. No error message displayed.

Frequency: Always
Attachments: registration_issue.png, console_errors.txt
```

---

### Worksheet 4: RTM Creation Exercise

**Requirements:**
1. REQ-001: User must be able to login with email and password
2. REQ-002: System must validate email format
3. REQ-003: System must lock account after 3 failed login attempts

**Create RTM with at least 8 test cases covering all requirements:**

| Req ID | Requirement | Test Case ID | Test Case Description | Status | Defect ID |
|--------|-------------|--------------|------------------------|--------|-----------|
| REQ-001 | Login functionality | TC_001 | Login with valid credentials | | |
| REQ-001 | Login functionality | TC_002 | Login with invalid password | | |
| REQ-002 | Email validation | TC_003 | Register with valid email format | | |
| REQ-002 | Email validation | TC_004 | Register with invalid email format | | |
| REQ-003 | Account lockout | TC_005 | Verify account locks after 3 failures | | |
| REQ-003 | Account lockout | TC_006 | Verify lockout message is displayed | | |
| REQ-001 | Login functionality | TC_007 | Login with locked account | | |
| REQ-001 | Login functionality | TC_008 | Password visibility toggle | | |

---

### Worksheet 5: Defect Metrics Calculation

**Scenario Data:**
- Total test cases: 200
- Test cases executed: 180
- Defects found in testing: 45
- Defects escaped to production: 5
- Total lines of code: 10,000
- Defects fixed: 40
- Testing effort: 160 hours

**Calculate:**

1. **Defect Density** = Total Defects / Size (KLOC or modules)
   = 50 defects / 10 KLOC = 5 defects per KLOC

2. **Defect Removal Efficiency (DRE)** = Defects found in testing / Total defects × 100
   = 45 / (45 + 5) × 100 = 90%

3. **Defect Leakage** = Defects in production / Total defects × 100
   = 5 / 50 × 100 = 10%

4. **Test Coverage** = Test cases executed / Total test cases × 100
   = 180 / 200 × 100 = 90%

5. **Defect Rejection Ratio** = Rejected defects / Total defects reported
   [Assume 5 rejected] = 5 / 45 × 100 = 11%

---

## Self-Assessment Tools

### Daily Progress Tracker

```
WEEK 1 DAILY PROGRESS TRACKER

Day 1: Manual Testing Fundamentals & SDLC
┌─────────────────────────────────────────┐
│ Date Completed: ___/___/______          │
│ Time Spent: _____ hours                 │
│ Study Quality: ☐ Poor ☐ Fair ☐ Good ☐ Excellent │
│                                         │
│ Concepts Understood:                    │
│ ☐ Manual testing definition            │
│ ☐ SDLC models (all 6)                  │
│ ☐ STLC phases (all 6)                  │
│ ☐ Entry/exit criteria                  │
│                                         │
│ Exercises Completed: ___/5              │
│ Assessment Score: ___/15                │
│                                         │
│ Confidence Level (1-5): ___             │
│                                         │
│ Notes/Questions:                        │
│ _________________________________       │
│ _________________________________       │
│                                         │
│ Action Items for Tomorrow:              │
│ _________________________________       │
└─────────────────────────────────────────┘

[Repeat for Days 2-7]
```

---

### Week 1 Knowledge Check Matrix

Rate your understanding (1=Weak, 3=Moderate, 5=Strong):

| Topic | Day | Rating | Need Review? |
|-------|-----|--------|--------------|
| Manual testing fundamentals | 1 | __/5 | ☐ Yes ☐ No |
| SDLC models | 1 | __/5 | ☐ Yes ☐ No |
| STLC phases | 1 | __/5 | ☐ Yes ☐ No |
| Testing levels | 2 | __/5 | ☐ Yes ☐ No |
| Testing types | 2 | __/5 | ☐ Yes ☐ No |
| Equivalence Partitioning | 3 | __/5 | ☐ Yes ☐ No |
| Boundary Value Analysis | 3 | __/5 | ☐ Yes ☐ No |
| Decision Table | 3 | __/5 | ☐ Yes ☐ No |
| State Transition | 3 | __/5 | ☐ Yes ☐ No |
| Use Case Testing | 4 | __/5 | ☐ Yes ☐ No |
| Error Guessing | 4 | __/5 | ☐ Yes ☐ No |
| Exploratory Testing | 4 | __/5 | ☐ Yes ☐ No |
| White Box Testing | 4 | __/5 | ☐ Yes ☐ No |
| Test Plan writing | 5 | __/5 | ☐ Yes ☐ No |
| Test Case documentation | 5 | __/5 | ☐ Yes ☐ No |
| RTM creation | 5 | __/5 | ☐ Yes ☐ No |
| Bug Life Cycle | 6 | __/5 | ☐ Yes ☐ No |
| Severity vs Priority | 6 | __/5 | ☐ Yes ☐ No |
| Defect Metrics | 6 | __/5 | ☐ Yes ☐ No |

**Overall Week 1 Score: ___/95**

**Target: 75+ for proceeding to Week 2**

---

### Skill Proficiency Assessment

```
WEEK 1 SKILLS ASSESSMENT

Rate your current proficiency (1-5):
1 = Beginner (Heard about it)
2 = Novice (Basic understanding)
3 = Intermediate (Can apply with guidance)
4 = Advanced (Can apply independently)
5 = Expert (Can teach others)

THEORETICAL KNOWLEDGE:
☐ SDLC Models: ___/5
☐ STLC Phases: ___/5
☐ Testing Levels: ___/5
☐ Testing Types: ___/5
☐ Test Design Techniques: ___/5
☐ Defect Management: ___/5

PRACTICAL SKILLS:
☐ Test Case Design: ___/5
☐ Test Plan Creation: ___/5
☐ Bug Report Writing: ___/5
☐ RTM Creation: ___/5
☐ Test Execution: ___/5
☐ Defect Metrics Calculation: ___/5

TOOLS & DOCUMENTATION:
☐ Documentation Standards: ___/5
☐ Test Management Concepts: ___/5
☐ Defect Tracking Concepts: ___/5

Total Score: ___/75

Interpretation:
60-75: Excellent! Ready for Week 2
45-59: Good progress, review weak areas
30-44: Need more practice, revisit concepts
<30: Spend more time on Week 1 before proceeding
```

---

## Additional Resources

### Recommended Reading List

**Books:**
1. "Software Testing: A Craftsman's Approach" by Paul Jorgensen
2. "Lessons Learned in Software Testing" by Cem Kaner
3. "Explore It!" by Elisabeth Hendrickson
4. "Perfect Software And Other Illusions About Testing" by Gerald Weinberg
5. "Agile Testing" by Lisa Crispin and Janet Gregory

**Online Resources:**
1. ISTQB Glossary: https://glossary.istqb.org/
2. Ministry of Testing: https://www.ministryoftesting.com/
3. Software Testing Help: https://www.softwaretestinghelp.com/
4. Guru99 Testing: https://www.guru99.com/software-testing.html
5. Test Automation University (free courses)

---

### Practice Applications for Week 1

**For Test Case Design (Days 3-4):**
1. https://www.saucedemo.com/ - E-commerce demo
2. https://demo.opencart.com/ - Shopping cart
3. https://www.globalsqa.com/angularJs-protractor/BankingProject/ - Banking app

**For Documentation Practice (Day 5):**
- Use any of the above applications
- Create complete test documentation
- Build RTM for all features

**For Bug Reporting (Day 6):**
1. https://the-internet.herokuapp.com/ - Various bug scenarios
2. Intentionally buggy app: https://www.globalsqa.com/samplepagetest/

---

### Week 1 Study Schedule Template

```
WEEK 1 STUDY SCHEDULE

Day 1: Monday [Date: ___/___]
⏰ 9:00 AM - 10:00 AM: SDLC Models study
⏰ 10:15 AM - 11:30 AM: STLC Phases study
⏰ 11:45 AM - 1:00 PM: Practical exercises
⏰ 2:00 PM - 3:00 PM: Assessment questions
✓ Completed: ☐ Yes ☐ Partial ☐ No

Day 2: Tuesday [Date: ___/___]
⏰ 9:00 AM - 10:30 AM: Testing Levels
⏰ 10:45 AM - 12:00 PM: Testing Types
⏰ 1:00 PM - 2:30 PM: Practical exercises
⏰ 2:45 PM - 3:30 PM: Assessment questions
✓ Completed: ☐ Yes ☐ Partial ☐ No

Day 3: Wednesday [Date: ___/___]
⏰ 9:00 AM - 11:00 AM: EP & BVA techniques
⏰ 11:15 AM - 1:00 PM: Decision Table & State Transition
⏰ 2:00 PM - 4:00 PM: Practice test case design
⏰ 4:15 PM - 5:00 PM: Assessment questions
✓ Completed: ☐ Yes ☐ Partial ☐ No

Day 4: Thursday [Date: ___/___]
⏰ 9:00 AM - 11:00 AM: Advanced techniques study
⏰ 11:15 AM - 1:00 PM: White box testing
⏰ 2:00 PM - 3:30 PM: Practical exercises
⏰ 3:45 PM - 4:30 PM: Assessment questions
✓ Completed: ☐ Yes ☐ Partial ☐ No

Day 5: Friday [Date: ___/___]
⏰ 9:00 AM - 11:00 AM: Test documentation standards
⏰ 11:15 AM - 1:00 PM: Test case documentation
⏰ 2:00 PM - 4:00 PM: Create test plan & RTM
⏰ 4:15 PM - 5:00 PM: Assessment questions
✓ Completed: ☐ Yes ☐ Partial ☐ No

Day 6: Saturday [Date: ___/___]
⏰ 9:00 AM - 10:30 AM: Bug life cycle study
⏰ 10:45 AM - 12:00 PM: Defect reporting
⏰ 1:00 PM - 3:00 PM: Practice bug reporting
⏰ 3:15 PM - 4:00 PM: Defect metrics
✓ Completed: ☐ Yes ☐ Partial ☐ No

Day 7: Sunday [Date: ___/___]
⏰ 9:00 AM - 11:00 AM: Review all Week 1 topics
⏰ 11:15 AM - 3:00 PM: Practical project
⏰ 3:15 PM - 5:00 PM: Final assessment (50 questions)
⏰ 5:15 PM - 6:00 PM: Gap analysis & Week 2 prep
✓ Completed: ☐ Yes ☐ Partial ☐ No

Total Study Time Week 1: ~30-35 hours
```

---

### Flashcards for Quick Review

```
WEEK 1 FLASHCARD DECK

[Front]: What are the 6 phases of STLC?
[Back]:
1. Requirement Analysis
2. Test Planning
3. Test Case Design
4. Test Environment Setup
5. Test Execution
6. Test Closure

---

[Front]: Difference between Smoke and Sanity testing?
[Back]:
Smoke: Wide & shallow, build verification
Sanity: Narrow & deep, specific functionality
Smoke: Before detailed testing
Sanity: After bug fix

---

[Front]: What is Equivalence Partitioning?
[Back]: Test design technique that divides input data into equivalent groups. Test one value from each partition.

---

[Front]: BVA tests which values?
[Back]: Min-1, Min, Min+1, Max-1, Max, Max+1

---

[Front]: Critical severity example?
[Back]: Application crash, data loss, security breach

---

[Front]: When is defect status "REOPENED"?
[Back]: When fix doesn't work and issue still persists after retesting

---

[Front]: Formula for Defect Removal Efficiency?
[Back]: (Defects found in testing / Total defects) × 100

---

[Front]: What should a test case include?
[Back]:
- Test Case ID
- Title
- Preconditions
- Test Steps
- Test Data
- Expected Result
- Priority
- Status

---

[Create 50+ flashcards total for Week 1]
```

---

### Weekly Reflection Template

```
WEEK 1 REFLECTION

What I Learned:
┌────────────────────────────────────────┐
│ 3 Most Important Concepts:            │
│ 1. _____________________________      │
│ 2. _____________________________      │
│ 3. _____________________________      │
└────────────────────────────────────────┘

What I Found Challenging:
┌────────────────────────────────────────┐
│ 1. _____________________________      │
│ 2. _____________________________      │
│ 3. _____________________________      │
└────────────────────────────────────────┘

How I Overcame Challenges:
┌────────────────────────────────────────┐
│ _____________________________         │
│ _____________________________         │
└────────────────────────────────────────┘

Practical Skills Gained:
┌────────────────────────────────────────┐
│ ☐ Can write test cases independently │
│ ☐ Can create test plans              │
│ ☐ Can write effective bug reports    │
│ ☐ Can apply test design techniques   │
│ ☐ Can calculate defect metrics       │
└────────────────────────────────────────┘

What I Will Do Differently in Week 2:
┌────────────────────────────────────────┐
│ _____________________________         │
│ _____________________________         │
└────────────────────────────────────────┘

Confidence Level for Week 2:
☐ Very Confident
☐ Confident
☐ Somewhat Confident
☐ Need More Review

Goals for Week 2:
1. _____________________________
2. _____________________________
3. _____________________________
```

---

## Bonus: Week 1 Certificate of Completion

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║              CERTIFICATE OF COMPLETION                     ║
║                                                            ║
║                    Week 1: Foundations                     ║
║           Manual Testing Learning Journey                  ║
║                                                            ║
║                  This certifies that                       ║
║                                                            ║
║                  [Your Name]                               ║
║                                                            ║
║          has successfully completed Week 1 of the          ║
║          3-Week Manual Testing Learning Program            ║
║                                                            ║
║                Topics Covered:                             ║
║        • Manual Testing Fundamentals & SDLC               ║
║        • Testing Levels & Types                           ║
║        • Test Case Design Techniques                      ║
║        • Test Documentation & Artifacts                   ║
║        • Defect Management & Bug Life Cycle              ║
║                                                            ║
║        Assessment Score: ___/50   Date: ___/___/___       ║
║                                                            ║
║              Congratulations on your achievement!          ║
║                 Ready for Week 2 Advanced Topics           ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## How to Use These Supplementary Materials

### Before Starting Each Day:
1. Review the daily checklist
2. Print or bookmark relevant templates
3. Set up practice applications
4. Prepare note-taking tools

### During Study:
1. Follow the daily checklist
2. Use templates for exercises
3. Refer to quick reference guides
4. Complete worksheets
5. Take notes on templates

### After Completing Each Day:
1. Fill out daily progress tracker
2. Review flashcards
3. Complete self-assessment
4. Update knowledge check matrix
5. Plan next day's study

### End of Week 1:
1. Complete comprehensive review
2. Take final assessment
3. Calculate overall scores
4. Fill out reflection template
5. Print certificate of completion
6. Plan Week 2 schedule

---

## Tips for Maximum Effectiveness

1. **Print Key Templates**: Have physical copies ready for practice
2. **Create Digital Folder**: Organize all your practice documents
3. **Use Real Applications**: Practice on actual websites, not just theory
4. **Time Yourself**: Track time spent on each activity
5. **Review Daily**: Spend 15 minutes reviewing previous day's notes
6. **Ask Questions**: Use AI assistant to clarify doubts immediately
7. **Build Portfolio**: Save all your practice test cases and bug reports
8. **Stay Consistent**: Follow the schedule strictly
9. **Join Communities**: Share your progress on testing forums
10. **Celebrate Milestones**: Reward yourself after each day completion

---

**Remember**: These supplementary materials are designed to enhance your learning experience. Use them actively, not passively. Practice makes perfect!

**Good luck with Week 1! You've got this! 🚀**
