
# Day 5: Test Documentation & Artifacts - Assessment

## Assessment Overview

This document contains all assessment questions for Day 5 covering Test Documentation, Test Plans, Test Cases, and Test Artifacts.

- **Quick Mode**: 15 questions, 15 minutes
- **Full Mode**: 30 questions, 40 minutes

---

## Assessment Questions

### Section A: Multiple Choice Questions (15 questions)

**1. Which standard defines test documentation templates?**
   a) ISO 9001
   b) IEEE 829
   c) CMMI
   d) Six Sigma

**2. What is the primary purpose of a test plan?**
   a) To list all test cases
   b) To define the testing approach, scope, and resources
   c) To report defects
   d) To execute tests

**3. Which of the following is NOT typically included in a test plan?**
   a) Test scope
   b) Entry and exit criteria
   c) Detailed test case steps
   d) Risk assessment

**4. What is a Requirements Traceability Matrix (RTM)?**
   a) A matrix showing test execution results
   b) A document linking requirements to test cases
   c) A defect tracking report
   d) A test schedule

**5. What is the difference between a test scenario and a test case?**
   a) No difference, they are the same
   b) Test scenario is high-level, test case is detailed
   c) Test case is high-level, test scenario is detailed
   d) Test scenarios are only for manual testing

**6. Which test case component describes the starting state?**
   a) Test steps
   b) Expected result
   c) Preconditions
   d) Postconditions

**7. What does P0 priority typically indicate?**
   a) Low priority
   b) Medium priority
   c) High priority
   d) Critical priority (must fix immediately)

**8. What is entry criteria in testing?**
   a) Conditions to stop testing
   b) Conditions to start testing
   c) Test case format
   d) Defect severity levels

**9. What is exit criteria in testing?**
   a) Conditions to start testing
   b) Conditions to stop testing and move to next phase
   c) Test environment setup
   d) Test data requirements

**10. Which document provides a summary of testing activities and results?**
   a) Test plan
   b) Test case
   c) Test summary report
   d) Requirements document

**11. What should a good test case ID include?**
   a) Only numbers
   b) Only letters
   c) A meaningful prefix and unique identifier
   d) Random characters

**12. What is the purpose of test data in test cases?**
   a) To make test cases longer
   b) To provide specific inputs for test execution
   c) To confuse testers
   d) To replace test steps

**13. Which artifact links test cases back to requirements?**
   a) Test plan
   b) Defect report
   c) Traceability matrix
   d) Test summary report

**14. What is a test suite?**
   a) A single test case
   b) A collection of related test cases
   c) A testing tool
   d) A test environment

**15. What should be included in test case expected results?**
   a) Vague descriptions
   b) "It should work"
   c) Specific, measurable outcomes
   d) Only pass/fail

---

### Section B: True/False Questions (8 questions)

**1. A test plan should be created before test case development.**
   ☐ True  ☐ False

**2. Test cases should include both positive and negative scenarios.**
   ☐ True  ☐ False

**3. Entry criteria and exit criteria are the same thing.**
   ☐ True  ☐ False

**4. A Requirements Traceability Matrix ensures all requirements are tested.**
   ☐ True  ☐ False

**5. Test documentation is only needed for large projects.**
   ☐ True  ☐ False

**6. Preconditions describe what must be true before test execution.**
   ☐ True  ☐ False

**7. Test case priority and severity are always the same.**
   ☐ True  ☐ False

**8. A test summary report is created before testing begins.**
   ☐ True  ☐ False

---

### Section C: Scenario-Based Questions (7 questions)

**1. Create a complete test plan outline for a login feature of a web application. Include all major sections.**

   **Your Answer:**
   _____________________________________

---

**2. Write 5 detailed test cases for a user registration form with fields: Username, Email, Password, Confirm Password. Include test case ID, preconditions, steps, and expected results.**

   **Your Answer:**
   _____________________________________

---

**3. Create a Requirements Traceability Matrix for the following requirements:**
   - REQ-001: User must be able to login with valid credentials
   - REQ-002: System must lock account after 3 failed login attempts
   - REQ-003: User must be able to reset password via email

   **Your Answer:**
   _____________________________________

---

**4. Define entry and exit criteria for system testing of an e-commerce checkout feature.**

   **Your Answer:**
   _____________________________________

---

**5. You have 100 test cases to execute. How would you prioritize them? Explain your prioritization strategy.**

   **Your Answer:**
   _____________________________________

---

**6. Compare and contrast test scenarios vs test cases. Provide examples of each for a shopping cart feature.**

   **Your Answer:**
   _____________________________________

---

**7. Create a test summary report template with all essential sections. Explain what information goes in each section.**

   **Your Answer:**
   _____________________________________

---

## Answer Key

### Section A: MCQ Answers

1. **b) IEEE 829**
   - IEEE 829 is the standard for software test documentation.

2. **b) To define the testing approach, scope, and resources**
   - Test plan defines strategy, not detailed test cases.

3. **c) Detailed test case steps**
   - Test plans are high-level; detailed steps go in test cases.

4. **b) A document linking requirements to test cases**
   - RTM ensures bidirectional traceability between requirements and tests.

5. **b) Test scenario is high-level, test case is detailed**
   - Scenarios describe what to test; cases describe how to test.

6. **c) Preconditions**
   - Preconditions define the starting state before test execution.

7. **d) Critical priority (must fix immediately)**
   - P0 indicates critical/blocker priority requiring immediate attention.

8. **b) Conditions to start testing**
   - Entry criteria define when testing can begin.

9. **b) Conditions to stop testing and move to next phase**
   - Exit criteria define when testing is complete.

10. **c) Test summary report**
    - Test summary report provides overview of testing activities and results.

11. **c) A meaningful prefix and unique identifier**
    - Good test case IDs are structured: TC-LOGIN-001, TC-CART-015, etc.

12. **b) To provide specific inputs for test execution**
    - Test data specifies exact values to use during testing.

13. **c) Traceability matrix**
    - RTM links requirements to test cases ensuring coverage.

14. **b) A collection of related test cases**
    - Test suite groups related test cases (e.g., Login Suite, Checkout Suite).

15. **c) Specific, measurable outcomes**
    - Expected results must be clear, specific, and verifiable.

---

### Section B: True/False Answers

1. **True** - Test plan provides direction for test case development.

2. **True** - Both positive (valid) and negative (invalid) scenarios are essential.

3. **False** - Entry criteria = when to start; Exit criteria = when to stop.

4. **True** - RTM ensures every requirement has corresponding test coverage.

5. **False** - Documentation is important for projects of all sizes.

6. **True** - Preconditions define the required starting state.

7. **False** - Priority (business urgency) and severity (technical impact) are different.

8. **False** - Test summary report is created after testing completion.

---

### Section C: Scenario Answers

**1. Test Plan Outline for Login Feature:**

```
TEST PLAN: Login Feature
Version: 1.0
Date: [Date]

1. TEST PLAN IDENTIFIER
   TP-LOGIN-001

2. INTRODUCTION
   2.1 Purpose
   2.2 Scope
   2.3 References

3. TEST ITEMS
   - Login page (web)
   - Authentication service
   - Session management

4. FEATURES TO BE TESTED
   - Valid login
   - Invalid login
   - Password reset
   - Remember me functionality
   - Account lockout
   - Session timeout

5. FEATURES NOT TO BE TESTED
   - User registration (separate test plan)
   - Profile management

6. APPROACH
   - Manual functional testing
   - Automated regression tests
   - Security testing
   - Performance testing (load)

7. PASS/FAIL CRITERIA
   - All P0/P1 test cases pass
   - No critical defects open
   - 95% of all test cases pass

8. ENTRY CRITERIA
   - Login feature code complete
   - Test environment ready
   - Test data prepared
   - Test cases reviewed and approved

9. EXIT CRITERIA
   - All test cases executed
   - 95% pass rate achieved
   - All critical/high defects fixed
   - Test summary report approved

10. TEST DELIVERABLES
    - Test plan document
    - Test cases (50 cases)
    - Test execution report
    - Defect reports
    - Test summary report

11. TEST ENVIRONMENT
    - OS: Windows 10, macOS, Linux
    - Browsers: Chrome, Firefox, Safari, Edge
    - Test server: qa.example.com
    - Database: MySQL 8.0 (test instance)

12. RESPONSIBILITIES
    - Test Lead: John Doe
    - QA Engineers: Jane Smith, Bob Johnson
    - Test Environment: DevOps team

13. STAFFING & TRAINING
    - 2 QA engineers
    - 1 week duration
    - Training: Security testing basics

14. SCHEDULE
    - Test planning: Day 1
    - Test case creation: Days 2-3
    - Test execution: Days 4-6
    - Defect retesting: Day 7
    - Test closure: Day 7

15. RISKS & MITIGATION
    Risk: Test environment instability
    Mitigation: Backup environment available
    
    Risk: Resource unavailability
    Mitigation: Cross-training team members

16. APPROVALS
    Prepared by: [QA Lead]
    Reviewed by: [QA Manager]
    Approved by: [Project Manager]
```

**Keywords:** test plan, structure, IEEE 829, documentation, planning

---

**2. Test Cases for User Registration Form:**

```
TEST CASE 1: Valid Registration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Test Case ID: TC-REG-001
Title: Verify successful user registration with valid data
Priority: P0 (Critical)
Preconditions:
- Registration page is accessible
- Database is available
- Email service is configured

Test Steps:
1. Navigate to registration page
2. Enter username: "testuser123"
3. Enter email: "test@example.com"
4. Enter password: "Test@1234"
5. Enter confirm password: "Test@1234"
6. Click "Register" button

Expected Results:
✓ Registration successful message displayed
✓ User redirected to login page or dashboard
✓ Confirmation email sent to test@example.com
✓ User account created in database
✓ Password stored as encrypted hash

Postconditions:
- User can login with created credentials
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEST CASE 2: Invalid Email Format
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Test Case ID: TC-REG-002
Title: Verify registration fails with invalid email format
Priority: P1 (High)
Preconditions:
- Registration page is accessible

Test Steps:
1. Navigate to registration page
2. Enter username: "testuser123"
3. Enter email: "invalidemail" (no @ symbol)
4. Enter password: "Test@1234"
5. Enter confirm password: "Test@1234"
6. Click "Register" button

Expected Results:
✗ Registration fails
✓ Error message: "Please enter a valid email address"
✓ Email field highlighted in red
✓ User remains on registration page
✓ No account created in database

Postconditions:
- Form data retained (except password fields)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEST CASE 3: Password Mismatch
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Test Case ID: TC-REG-003
Title: Verify registration fails when passwords don't match
Priority: P1 (High)
Preconditions:
- Registration page is accessible

Test Steps:
1. Navigate to registration page
2. Enter username: "testuser123"
3. Enter email: "test@example.com"
4. Enter password: "Test@1234"
5. Enter confirm password: "Test@5678" (different)
6. Click "Register" button

Expected Results:
✗ Registration fails
✓ Error message: "Passwords do not match"
✓ Confirm password field highlighted
✓ User remains on registration page
✓ No account created

Postconditions:
- Password fields cleared for security
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEST CASE 4: Duplicate Username
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Test Case ID: TC-REG-004
Title: Verify registration fails with existing username
Priority: P1 (High)
Preconditions:
- User "existinguser" already registered in database

Test Steps:
1. Navigate to registration page
2. Enter username: "existinguser"
3. Enter email: "newemail@example.com"
4. Enter password: "Test@1234"
5. Enter confirm password: "Test@1234"
6. Click "Register" button

Expected Results:
✗ Registration fails
✓ Error message: "Username already exists"
✓ Username field highlighted
✓ User remains on registration page
✓ No duplicate account created

Postconditions:
- Original account unchanged
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEST CASE 5: Weak Password
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Test Case ID: TC-REG-005
Title: Verify registration fails with weak password
Priority: P2 (Medium)
Preconditions:
- Registration page is accessible
- Password policy: Min 8 chars, 1 uppercase, 1 number, 1 special char

Test Steps:
1. Navigate to registration page
2. Enter username: "testuser123"
3. Enter email: "test@example.com"
4. Enter password: "password" (weak - no uppercase, number, special char)
5. Enter confirm password: "password"
6. Click "Register" button

Expected Results:
✗ Registration fails
✓ Error message: "Password must contain at least 8 characters, 
   1 uppercase letter, 1 number, and 1 special character"
✓ Password field highlighted
✓ Password strength indicator shows "Weak"
✓ User remains on registration page

Postconditions:
- No account created
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Keywords:** test cases, registration, detailed steps, expected results, preconditions

---

**3. Requirements Traceability Matrix:**

```
REQUIREMENTS TRACEABILITY MATRIX (RTM)
Project: User Authentication System
Version: 1.0

┌─────────────┬──────────────────────────────┬─────────────────┬────────────┬────────┐
│ Requirement │ Description                  │ Test Case IDs   │ Status     │ Notes  │
├─────────────┼──────────────────────────────┼─────────────────┼────────────┼────────┤
│ REQ-001     │ User must be able to login   │ TC-LOGIN-001    │ Covered    │        │
│             │ with valid credentials       │ TC-LOGIN-002    │            │        │
│             │                              │ TC-LOGIN-003    │            │        │
│             │                              │ TC-LOGIN-010    │            │        │
├─────────────┼──────────────────────────────┼─────────────────┼────────────┼────────┤
│ REQ-002     │ System must lock account     │ TC-LOGIN-015    │ Covered    │        │
│             │ after 3 failed login         │ TC-LOGIN-016    │            │        │
│             │ attempts                     │ TC-LOGIN-017    │            │        │
│             │                              │ TC-LOGIN-018    │            │        │
├─────────────┼──────────────────────────────┼─────────────────┼────────────┼────────┤
│ REQ-003     │ User must be able to reset   │ TC-RESET-001    │ Covered    │        │
│             │ password via email           │ TC-RESET-002    │            │        │
│             │                              │ TC-RESET-003    │            │        │
│             │                              │ TC-RESET-004    │            │        │
│             │                              │ TC-RESET-005    │            │        │
└─────────────┴──────────────────────────────┴─────────────────┴────────────┴────────┘

DETAILED TEST CASE MAPPING:

REQ-001: Valid Login
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC-LOGIN-001: Login with valid username and password
TC-LOGIN-002: Login with valid email and password
TC-LOGIN-003: Login with "Remember Me" checked
TC-LOGIN-010: Session management after successful login

REQ-002: Account Lockout
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC-LOGIN-015: First failed login attempt
TC-LOGIN-016: Second failed login attempt
TC-LOGIN-017: Third failed login attempt (account locked)
TC-LOGIN-018: Attempt login on locked account

REQ-003: Password Reset
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC-RESET-001: Request password reset with valid email
TC-RESET-002: Receive password reset email
TC-RESET-003: Click reset link and set new password
TC-RESET-004: Login with new password
TC-RESET-005: Old password no longer works

COVERAGE SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Requirements: 3
Requirements Covered: 3 (100%)
Total Test Cases: 13
Test Cases Passed: TBD (after execution)
Test Cases Failed: TBD
Coverage Status: ✓ Complete
```

**Keywords:** traceability matrix, RTM, requirements coverage, bidirectional traceability

---

**4. Entry and Exit Criteria for E-commerce Checkout Testing:**

**ENTRY CRITERIA (Conditions to START Testing):**

**1. Environment Readiness:**
✓ Test environment deployed and accessible
✓ Database populated with test data
✓ Payment gateway configured (test mode)
✓ Email service configured
✓ All dependent services running (inventory, user, payment)

**2. Code Readiness:**
✓ Checkout feature code complete
✓ Code reviewed and approved
✓ Unit tests passed (>80% coverage)
✓ Build deployed to test environment
✓ No critical bugs from previous testing

**3. Test Readiness:**
✓ Test plan approved by stakeholders
✓ Test cases created and reviewed
✓ Test data prepared (products, users, payment methods)
✓ Test tools configured (Postman, browser tools)
✓ Testers trained on new features

**4. Documentation:**
✓ Requirements document available
✓ Design specifications available
✓ API documentation available
✓ User stories with acceptance criteria defined

**5. Resources:**
✓ QA team available (2 testers minimum)
✓ Test accounts created
✓ Test credit cards available
✓ Access permissions granted

---

**EXIT CRITERIA (Conditions to STOP Testing):**

**1. Test Execution:**
✓ 100% of planned test cases executed
✓ All P0 (critical) test cases passed
✓ 95% of P1 (high) test cases passed
✓ 90% of P2 (medium) test cases passed
✓ Regression testing completed

**2. Defect Status:**
✓ Zero P0 (critical/blocker) defects open
✓ Zero P1 (high) defects open
✓ <5 P2 (medium) defects open (documented)
✓ All reopened defects resolved
✓ Defect fix verification completed

**3. Coverage:**
✓ All requirements tested and traced
✓ All user stories acceptance criteria met
✓ All critical user journeys tested
✓ Cross-browser testing completed
✓ Mobile responsive testing completed

**4. Performance:**
✓ Checkout completes in <5 seconds (95th percentile)
✓ System handles 100 concurrent checkouts
✓ No memory leaks detected
✓ Database queries optimized

**5. Security:**
✓ Payment data encrypted (PCI DSS compliant)
✓ SQL injection testing passed
✓ XSS testing passed
✓ Session management secure
✓ HTTPS enforced

**6. Documentation:**
✓ Test execution report completed
✓ Test summary report approved
✓ Known issues documented
✓ Test metrics calculated and reported
✓ Lessons learned documented

**7. Stakeholder Approval:**
✓ QA sign-off obtained
✓ Product Owner approval received
✓ Go/No-Go decision made
✓ Release notes prepared

---

**SUSPENSION CRITERIA (When to PAUSE Testing):**

⚠️ More than 5 critical defects found
⚠️ Test environment down for >4 hours
⚠️ Major requirement changes
⚠️ Build is unstable (crashes frequently)
⚠️ Key resources unavailable

**RESUMPTION CRITERIA (When to RESUME Testing):**

✓ Critical defects fixed and verified
✓ Test environment restored
✓ Updated requirements reviewed
✓ Stable build deployed
✓ Resources available

**Keywords:** entry criteria, exit criteria, test readiness, completion criteria, go/no-go decision

---

**5. Test Case Prioritization Strategy (100 Test Cases):**

**Prioritization Framework:**

**Priority Levels:**
- P0 (Critical): 15 test cases (15%)
- P1 (High): 30 test cases (30%)
- P2 (Medium): 35 test cases (35%)
- P3 (Low): 20 test cases (20%)

---

**Prioritization Criteria:**

**1. Business Impact (Weight: 40%)**
- Revenue impact
- Customer-facing features
- Legal/compliance requirements
- Brand reputation

**2. Risk Level (Weight: 30%)**
- Probability of failure
- Impact of failure
- Complexity of feature
- Historical defect data

**3. Usage Frequency (Weight: 20%)**
- Most used features
- Critical user journeys
- Peak usage scenarios

**4. Dependencies (Weight: 10%)**
- Blocking other tests
- Integration points
- Third-party services

---

**P0 - Critical (15 test cases) - MUST TEST FIRST:**

**Characteristics:**
- Core business functionality
- Revenue-generating features
- Security-critical areas
- Compliance requirements

**Examples:**
1. User can complete purchase (end-to-end)
2. Payment processing works
3. Order confirmation sent
4. Inventory updated after purchase
5. User authentication works
6. Password reset functional
7. Critical API endpoints respond
8. Database transactions commit
9. SSL/HTTPS enforced
10. PCI DSS compliance checks
11. Data encryption verified
12. Session management secure
13. Error handling for payment failures
14. Refund processing works
15. Admin can access dashboard

**Execution:** Day 1-2 (First 2 days)
**Pass Requirement:** 100% must pass

---

**P1 - High (30 test cases) - TEST SECOND:**

**Characteristics:**
- Important features
- Frequently used functionality
- Integration points
- Performance-critical areas

**Examples:**
16-25: Shopping cart operations (add, update, remove)
26-35: Product search and filtering
36-40: User profile management
41-45: Order history and tracking

**Execution:** Day 3-4
**Pass Requirement:** 95% must pass

---

**P2 - Medium (35 test cases) - TEST THIRD:**

**Characteristics:**
- Secondary features
- Edge cases
- Less frequent scenarios
- Nice-to-have functionality

**Examples:**
46-60: Advanced search filters
61-70: Wishlist functionality
71-80: Product recommendations

**Execution:** Day 5-6
**Pass Requirement:** 90% must pass

---

**P3 - Low (20 test cases) - TEST IF TIME PERMITS:**

**Characteristics:**
- Cosmetic issues
- Rarely used features
- Future enhancements
- Documentation

**Examples:**
81-90: UI/UX improvements
91-95: Help text and tooltips
96-100: Footer links and static pages

**Execution:** Day 7 (if time available)
**Pass Requirement:** 80% pass acceptable

---

**Execution Strategy:**

**Week 1 Schedule:**
```
Day 1: P0 tests (1-8)
Day 2: P0 tests (9-15) + Start P1
Day 3: P1 tests (16-30)
Day 4: P1 tests (31-45) + Start P2
Day 5: P2 tests (46-65)
Day 6: P2 tests (66-80) + P3 if time
Day 7: P3 tests + Regression + Retesting
```

**Risk-Based Adjustments:**
- If P0 tests fail: STOP, fix immediately
- If P1 tests fail: Assess impact, may continue
- If time limited: Skip P3, focus on P0-P2
- If new critical bug found: Reprioritize

**Automation Consideration:**
- Automate P0 tests first (smoke suite)
- Automate P1 tests next (regression suite)
- P2/P3 may remain manual

**Keywords:** prioritization, risk-based testing, test execution strategy, critical path

---

**6. Test Scenarios vs Test Cases:**

**DEFINITIONS:**

**Test Scenario:**
- High-level description of what to test
- One-liner or brief description
- Covers end-to-end functionality
- Multiple test cases per scenario
- Business-focused

**Test Case:**
- Detailed step-by-step instructions
- Specific inputs and expected outputs
- Single specific condition
- Technical and precise
- Execution-ready

---

**SHOPPING CART EXAMPLES:**

**Test Scenarios (High-Level):**

1. **TS-CART-001: Add Products to Cart**
   - Verify users can add products to shopping cart

2. **TS-CART-002: Update Cart Quantities**
   - Verify users can modify product quantities in cart

3. **TS-CART-003: Remove Products from Cart**
   - Verify users can remove items from cart

4. **TS-CART-004: Cart Persistence**
   - Verify cart contents persist across sessions

5. **TS-CART-005: Cart Total Calculation**
   - Verify cart calculates totals correctly

---

**Test Cases (Detailed) for TS-CART-001:**

**TC-CART-001: Add Single Product to Empty Cart**
```
Preconditions: User logged in, cart is empty
Steps:
1. Navigate to product page
2. Click "Add to Cart" button
3. View cart

Expected Results:
✓ Product added to cart
✓ Cart count shows "1"
✓ Product details correct (name, price, image)
✓ Subtotal = product price
✓ Success message displayed
```

**TC-CART-002: Add Multiple Quantities of Same Product**
```
Preconditions: User logged in, cart is empty
Steps:
1. Navigate to product page
2. Set quantity to 3
3. Click "Add to Cart"
4. View cart

Expected Results:
✓ 3 units of product in cart
✓ Cart count shows "3"
✓ Subtotal = price × 3
✓ Quantity editable in cart
```

**TC-CART-003: Add Same Product Twice**
```
Preconditions: User logged in, product already in cart (qty: 1)
Steps:
1. Navigate to same product page
2. Click "Add to Cart" again
3. View cart

Expected Results:
✓ Quantity increases to 2
✓ Single line item (not duplicate)
✓ Cart count shows "2"
✓ Subtotal updated
```

**TC-CART-004: Add Product to Cart from Search Results**
```
Preconditions: User logged in
Steps:
1. Search for "laptop"
2. Click "Add to Cart" on search result
3. View cart

Expected Results:
✓ Product added without leaving search page
✓ Cart icon updates
✓ Mini cart preview shows product
✓ Can continue shopping
```

**TC-CART-005: Add Out-of-Stock Product**
```
Preconditions: User logged in, product out of stock
Steps:
1. Navigate to out-of-stock product
2. Attempt to add to cart

Expected Results:
✗ "Add to Cart" button disabled
✓ "Out of Stock" message displayed
✓ "Notify Me" option available
✓ Product not adde
d to cart
```

---

**COMPARISON TABLE:**

| Aspect | Test Scenario | Test Case |
|--------|---------------|-----------|
| Level | High-level | Detailed |
| Length | 1-2 lines | Multiple steps |
| Focus | What to test | How to test |
| Audience | Business stakeholders | Testers |
| Count | Few (5-10) | Many (50-100) |
| Time to create | Minutes | Hours |
| Execution | Not directly | Directly executable |
| Example | "Test login" | "Login with valid username/password" |

**When to Use:**

**Test Scenarios:**
- Initial test planning
- Communicating with stakeholders
- High-level coverage assessment
- Quick smoke testing

**Test Cases:**
- Detailed test execution
- Regression testing
- Test automation
- Defect reproduction

**Keywords:** test scenarios, test cases, comparison, shopping cart, examples

---

**7. Test Summary Report Template:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEST SUMMARY REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. REPORT IDENTIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Report ID: TSR-2026-001
Project Name: E-commerce Platform
Release Version: v2.5.0
Test Phase: System Testing
Report Date: January 5, 2026
Prepared By: [QA Lead Name]
Reviewed By: [QA Manager Name]
Approved By: [Project Manager Name]

2. EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Purpose: Summarize testing activities and results for v2.5.0 release

Overall Status: ✓ READY FOR RELEASE

Key Highlights:
• 95% test pass rate achieved
• All critical defects resolved
• Performance targets met
• Security testing passed
• Recommendation: Proceed with production deployment

3. TEST SCOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Features Tested:
✓ User authentication and authorization
✓ Product catalog and search
✓ Shopping cart functionality
✓ Checkout and payment processing
✓ Order management
✓ User profile management

Features Not Tested:
✗ Admin reporting (deferred to v2.6.0)
✗ Third-party integrations (tested separately)

Test Types Performed:
• Functional testing
• Integration testing
• Regression testing
• Performance testing
• Security testing
• Usability testing
• Cross-browser testing
• Mobile responsive testing

4. TEST EXECUTION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Test Execution Period: Dec 15, 2025 - Jan 5, 2026
Total Duration: 3 weeks

Test Case Statistics:
┌────────────────────┬───────┬────────┐
│ Status             │ Count │ %      │
├────────────────────┼───────┼────────┤
│ Total Planned      │ 500   │ 100%   │
│ Executed           │ 480   │ 96%    │
│ Passed             │ 456   │ 95%    │
│ Failed             │ 24    │ 5%     │
│ Blocked            │ 10    │ 2%     │
│ Not Executed       │ 10    │ 2%     │
└────────────────────┴───────┴────────┘

Pass Rate: 95% (456/480)
Target: 90% ✓ ACHIEVED

5. DEFECT SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Defects Found: 45

By Severity:
┌──────────┬───────┬────────┬────────┬────────┐
│ Severity │ Found │ Fixed  │ Open   │ %      │
├──────────┼───────┼────────┼────────┼────────┤
│ Critical │ 5     │ 5      │ 0      │ 11%    │
│ High     │ 12    │ 12     │ 0      │ 27%    │
│ Medium   │ 18    │ 15     │ 3      │ 40%    │
│ Low      │ 10    │ 7      │ 3      │ 22%    │
├──────────┼───────┼────────┼────────┼────────┤
│ TOTAL    │ 45    │ 39     │ 6      │ 100%   │
└──────────┴───────┴────────┴────────┴────────┘

Defect Status:
• Fixed and Verified: 39 (87%)
• Open (Medium/Low): 6 (13%)
• Deferred: 0
• Rejected: 0

Defect Removal Efficiency (DRE): 95%
Formula: (Defects found in testing / Total defects) × 100
Target: >90% ✓ ACHIEVED

6. TEST COVERAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Requirements Coverage:
• Total Requirements: 120
• Requirements Tested: 120
• Coverage: 100% ✓

Code Coverage (from automated tests):
• Statement Coverage: 85%
• Branch Coverage: 78%
• Target: >80% statement ✓ ACHIEVED

Feature Coverage:
• Critical Features: 100% tested
• High Priority: 100% tested
• Medium Priority: 95% tested
• Low Priority: 80% tested

7. TEST ENVIRONMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Environment Details:
• Test Server: qa.example.com
• Database: MySQL 8.0 (test instance)
• OS: Ubuntu 20.04 LTS
• Web Server: Nginx 1.18

Browsers Tested:
✓ Chrome 120 (Windows, macOS, Linux)
✓ Firefox 121 (Windows, macOS, Linux)
✓ Safari 17 (macOS, iOS)
✓ Edge 120 (Windows)

Mobile Devices:
✓ iPhone 14 (iOS 17)
✓ Samsung Galaxy S23 (Android 13)
✓ iPad Pro (iOS 17)

8. PERFORMANCE TESTING RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Load Testing:
• Concurrent Users: 1000
• Response Time (avg): 1.2 seconds
• Response Time (95th %ile): 2.8 seconds
• Target: <3 seconds ✓ ACHIEVED
• Throughput: 150 requests/second
• Error Rate: 0.1%

Stress Testing:
• Peak Load: 2000 concurrent users
• System remained stable
• No crashes or data loss
• Graceful degradation observed

9. SECURITY TESTING RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Security Tests Performed:
✓ SQL Injection testing - PASSED
✓ XSS (Cross-Site Scripting) - PASSED
✓ CSRF protection - PASSED
✓ Authentication testing - PASSED
✓ Authorization testing - PASSED
✓ Session management - PASSED
✓ Data encryption - PASSED
✓ SSL/TLS configuration - PASSED

Vulnerabilities Found: 2 (Medium severity)
Status: Both fixed and verified

PCI DSS Compliance: ✓ COMPLIANT

10. RISKS & ISSUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Open Issues:
1. 6 medium/low defects remain open
   Impact: Minor UI issues, no functional impact
   Mitigation: Documented, will fix in v2.5.1

2. 10 test cases not executed (blocked)
   Reason: Dependent feature delayed
   Mitigation: Will test in v2.6.0

Known Limitations:
• Admin reporting not tested (out of scope)
• Third-party payment gateway tested in test mode only

11. LESSONS LEARNED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
What Went Well:
✓ Early involvement in requirements review
✓ Effective collaboration with dev team
✓ Automated regression suite saved time
✓ Clear entry/exit criteria

Areas for Improvement:
• Test environment stability issues (3 days downtime)
• Late requirement changes impacted schedule
• Need more mobile devices for testing
• Automation coverage can be increased

12. RECOMMENDATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Release Recommendation: ✓ APPROVE FOR PRODUCTION

Conditions:
1. All critical and high defects resolved ✓
2. Pass rate >90% achieved ✓
3. Performance targets met ✓
4. Security testing passed ✓
5. Stakeholder approval obtained ✓

Post-Release Actions:
• Monitor production for 48 hours
• Fix remaining 6 medium/low defects in v2.5.1
• Complete blocked test cases in v2.6.0
• Conduct retrospective meeting

13. SIGN-OFF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QA Lead: _________________ Date: _________
QA Manager: _________________ Date: _________
Project Manager: _________________ Date: _________
Product Owner: _________________ Date: _________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF TEST SUMMARY REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Section Explanations:**

**1. Report Identification:**
- Unique report ID for tracking
- Project and version information
- Dates and approvers

**2. Executive Summary:**
- High-level overview for management
- Go/No-Go recommendation
- Key highlights only

**3. Test Scope:**
- What was tested
- What was NOT tested
- Test types performed

**4. Test Execution Summary:**
- Test case statistics
- Pass/fail rates
- Execution timeline

**5. Defect Summary:**
- Total defects by severity
- Current status of defects
- Defect metrics (DRE)

**6. Test Coverage:**
- Requirements coverage
- Code coverage
- Feature coverage by priority

**7. Test Environment:**
- Environment configuration
- Browsers and devices tested
- Infrastructure details

**8. Performance Results:**
- Load testing metrics
- Response times
- Throughput and error rates

**9. Security Results:**
- Security tests performed
- Vulnerabilities found
- Compliance status

**10. Risks & Issues:**
- Open issues and impact
- Known limitations
- Mitigation strategies

**11. Lessons Learned:**
- What worked well
- What needs improvement
- Process improvements

**12. Recommendations:**
- Release decision
- Conditions met
- Post-release actions

**13. Sign-Off:**
- Formal approvals
- Accountability

**Keywords:** test summary report, template, documentation, reporting, metrics, sign-off

---

## Scoring Guide

**Quick Mode:** 45 points total, 32 points to pass (70%)
**Full Mode:** 104 points total, 73 points to pass (70%)

---

**End of Day 5 Assessment**