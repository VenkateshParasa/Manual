# Day 12 Assessment: Regression & Smoke Testing Strategies

**Duration:** 60 minutes
**Total Points:** 100
**Passing Score:** 70%

---

## Section A: Multiple Choice Questions (40 points)
*Choose the best answer for each question (2 points each)*

### Regression Testing Types

1. Which regression testing type reuses existing test cases without modification?
   - A) Progressive Regression Testing
   - B) Corrective Regression Testing
   - C) Retest-All Regression Testing
   - D) Selective Regression Testing

2. When should "Retest-All" regression testing be used?
   - A) Minor bug fixes
   - B) Major architecture changes or framework upgrades
   - C) Hotfixes
   - D) UI text changes only

3. What is "Selective Regression Testing"?
   - A) Testing all test cases
   - B) Testing only changed modules and their dependencies
   - C) Testing only new features
   - D) Random selection of test cases

4. Which regression testing type adds NEW test cases for new features?
   - A) Corrective
   - B) Retest-All
   - C) Selective
   - D) Progressive

### Test Case Prioritization

5. What is the formula for Risk-Based Prioritization?
   - A) Risk = Severity + Frequency
   - B) Risk = Probability × Impact
   - C) Risk = Business Value / Effort
   - D) Risk = Complexity + Change Frequency

6. In the priority scoring formula: Score = (Business Criticality × 0.5) + (Defect History × 0.3) + (Change Frequency × 0.2), what has the HIGHEST weight?
   - A) Business Criticality
   - B) Defect History
   - C) Change Frequency
   - D) All equal

7. What priority should be assigned to a feature that handles payment transactions?
   - A) P3 (Low)
   - B) P2 (Medium)
   - C) P1 (High)
   - D) P0 (Critical)

8. Which prioritization technique focuses on tests that historically find the most bugs?
   - A) Coverage-based
   - B) History-based (DDR - Defect Detection Rate)
   - C) Risk-based
   - D) Time-constrained

### Smoke Testing

9. What is the PRIMARY purpose of smoke testing?
   - A) Find all possible bugs
   - B) Verify build is stable enough for detailed testing
   - C) Test security vulnerabilities
   - D) Performance testing

10. How many test cases should a typical smoke test suite contain?
    - A) 5-10
    - B) 20-30
    - C) 100-200
    - D) 500+

11. What should be the expected duration of a smoke test suite?
    - A) 1-2 hours
    - B) 10-30 minutes
    - C) 4-6 hours
    - D) 1-2 days

12. What happens if ANY smoke test fails?
    - A) Continue testing
    - B) Skip that feature
    - C) Reject build immediately
    - D) Create a bug report and proceed

13. What type of testing is "Wide and Shallow"?
    - A) Regression Testing
    - B) Smoke Testing
    - C) Sanity Testing
    - D) Integration Testing

### Smoke vs Sanity vs Regression

14. What is the MAIN difference between Smoke and Sanity testing?
    - A) Smoke is wide & shallow, Sanity is narrow & deep
    - B) Smoke is automated, Sanity is manual
    - C) Smoke is for mobile, Sanity is for web
    - D) No difference

15. When should Sanity testing be performed?
    - A) New build deployment
    - B) After a specific bug fix or minor change
    - C) Before every release
    - D) Only on Fridays

16. Which has the BROADEST scope?
    - A) Smoke Testing
    - B) Sanity Testing
    - C) Regression Testing
    - D) All equal

### Test Suite Optimization

17. What is the PRIMARY goal of test suite optimization?
    - A) Remove all test cases
    - B) Reduce execution time while maintaining coverage
    - C) Automate everything
    - D) Increase number of test cases

18. Which tests should be REMOVED during optimization?
    - A) Tests that never find bugs (0% DDR)
    - B) Tests for critical features
    - C) All P0 tests
    - D) Automated tests

19. What does "parallel execution" mean in testing?
    - A) Running tests one after another
    - B) Running multiple tests simultaneously
    - C) Testing on multiple browsers sequentially
    - D) Testing with multiple testers

20. What is a key requirement for parallel test execution?
    - A) Tests must be very slow
    - B) Tests must be independent (no dependencies)
    - C) Tests must use same test data
    - D) Tests must be manual

### Automation Considerations

---

## Section B: True/False Questions (20 points)
*Mark each statement as True (T) or False (F) (1 point each)*

21. Corrective Regression Testing requires creating new test cases. ___
22. Selective Regression Testing requires impact analysis to identify affected areas. ___
23. Full Regression Testing should be run after every code commit. ___
24. Test case prioritization is unnecessary if you have time to run all tests. ___
25. P0 test cases must pass before deployment. ___
26. Risk Score = (Business Impact × Complexity × Change Frequency) ___
27. Smoke tests should include negative testing and edge cases. ___
28. A smoke test suite should test ALL features in depth. ___
29. Smoke testing is also called "Build Verification Testing (BVT)". ___
30. If a smoke test fails, detailed testing should continue. ___
31. Sanity testing is a subset of regression testing. ___
32. Regression testing catches side effects of code changes. ___
33. Test automation always saves money regardless of the test. ___
34. Repetitive tests executed frequently are good automation candidates. ___
35. ROI = (Savings - Cost) / Cost × 100% ___
36. Flaky tests should be ignored if they pass most of the time. ___
37. Obsolete tests for removed features should remain in the regression suite. ___
38. Merging redundant test cases can reduce execution time. ___
39. Tests should be independent to enable parallel execution. ___
40. Manual testers should focus only on manual testing, never automation. ___

---

## Section C: Scenario-Based Questions (20 points)
*Provide detailed answers (5 points each)*

### Scenario 1: Regression Suite Growing Out of Control
Your regression test suite has grown from 100 test cases (2 hours execution) in Sprint 1 to 1,500 test cases (30 hours execution) in Sprint 20. The team can no longer complete full regression before each release. Management is frustrated by testing bottlenecks.

**Questions:**
a) What is the problem? (1 point)
b) Identify THREE optimization strategies to reduce execution time. (3 points)
c) How would you prioritize which tests to run when time is limited? (1 point)

---

### Scenario 2: Smoke Test Suite Design
You're tasked with creating a smoke test suite for a new e-commerce application that has:
- User registration/login
- Product search and catalog
- Shopping cart
- Checkout and payment
- Order management
- User profile

**Questions:**
a) Select 5-7 critical test scenarios for the smoke suite. (3 points)
b) What should be excluded from the smoke suite? (1 point)
c) Estimate the execution time and explain your reasoning. (1 point)

---

### Scenario 3: Prioritization Decision
You have 500 test cases and only 4 hours before the release deadline. You must decide which tests to run. You have the following data:

| Module | Test Cases | P0 Cases | Defects (last 6 months) | Changed Recently? |
|--------|------------|----------|-------------------------|-------------------|
| Login | 50 | 10 | 5 | No |
| Payment | 80 | 45 | 32 | Yes |
| Search | 120 | 15 | 8 | No |
| Checkout | 100 | 40 | 47 | Yes |
| Reports | 150 | 5 | 3 | No |

**Questions:**
a) Which modules should you prioritize for testing? (2 points)
b) Justify your selection using prioritization principles. (2 points)
c) How many test cases can you realistically execute in 4 hours? (1 point)

---

### Scenario 4: Automation ROI Calculation
Your team is considering automating the smoke test suite. Current state:
- 25 smoke tests
- Manual execution: 2 hours per run
- Run 3 times per day (morning, afternoon, pre-deploy)
- 22 working days per month
- Tester hourly rate: $50/hour

Automation costs:
- Development: 40 hours @ $75/hour
- Maintenance: 5 hours/month @ $75/hour
- Tool cost: $200/month

**Questions:**
a) Calculate current monthly cost of manual smoke testing. (2 points)
b) Calculate automation costs (first month and ongoing). (1 point)
c) What is the ROI and payback period? (2 points)

---

## Section D: Practical Exercise (20 points)
*Complete the following exercises*

### Exercise 1: Build Regression Test Suite (10 points)
You're testing a Travel Booking Application with these modules:
- Flight Search (120 test cases, 30 P0, 15 defects, changed last week)
- Hotel Search (80 test cases, 20 P0, 8 defects, stable)
- Car Rental (60 test cases, 15 P0, 4 defects, stable)
- Payment (90 test cases, 50 P0, 45 defects, changed yesterday)
- User Profile (50 test cases, 10 P0, 2 defects, stable)
- Bookings Management (100 test cases, 25 P0, 18 defects, changed last week)

**Tasks:**
a) Calculate priority scores for each module using the formula:
   Score = (P0 Count / Total × 0.4) + (Defects / 50 × 0.3) + (Recent Change × 0.3)
   Recent Change: 0.3 if changed, 0 if stable
   (3 points)

b) Rank modules from highest to lowest priority (1 point)

c) Design three test suites:
   - Smoke Suite (20-30 tests, 15-20 min)
   - P0 Regression (all P0 tests)
   - Full Regression (all tests)
   (3 points)

d) Create an execution schedule:
   - What runs daily?
   - What runs weekly?
   - What runs before release?
   (3 points)

---

### Exercise 2: Test Case Optimization Analysis (10 points)
You have these test cases in your Login module:

```
TC-LOGIN-001: Login with valid email and password
TC-LOGIN-002: Login with valid credentials and verify homepage displayed
TC-LOGIN-003: Login with valid credentials and verify session cookie created
TC-LOGIN-004: Login with invalid email
TC-LOGIN-005: Login with invalid password
TC-LOGIN-006: Login with empty email
TC-LOGIN-007: Login with empty password
TC-LOGIN-008: Login with empty email and password
TC-LOGIN-009: Login with SQL injection in email
TC-LOGIN-010: Login with XSS in password field
```

**Tasks:**
a) Identify redundant test cases that can be merged. (3 points)
b) Propose optimized test cases (fewer but comprehensive). (4 points)
c) Estimate time saved by optimization. (1 point)
d) Identify which tests are good automation candidates. (2 points)

---

## BONUS Section: Advanced Questions (+10 points)

### Bonus 1: Test Suite Evolution Strategy (5 points)
Describe a comprehensive test suite maintenance strategy including:
- How often to review and optimize?
- What metrics to track? (execution time, pass rate, DDR, coverage)
- How to handle obsolete tests?
- When and how to add new tests?
- How to prevent suite from growing uncontrollably?

### Bonus 2: Automation Pyramid for Manual Testers (5 points)
Explain the ideal distribution of automated vs manual tests:
- What percentage should be automated at each level (Unit, API, UI)?
- Which tests should ALWAYS remain manual?
- What skills do manual testers need to transition to automation?
- How to balance automation development time vs manual testing time?

---

## Answer Key

### Section A: Multiple Choice
1. B (Corrective uses existing test cases without modification when no spec changes)
2. B (Retest-All for major changes when impact is uncertain or very large)
3. B (Selective tests only changed modules and dependencies - requires impact analysis)
4. D (Progressive adds new test cases for new features while keeping existing ones)
5. B (Risk = Probability of Failure × Impact of Failure)
6. A (Business Criticality has highest weight at 0.5 = 50%)
7. D (Payment/transactions are always P0 Critical - revenue impact)
8. B (History-based uses DDR - Defect Detection Rate to prioritize)
9. B (Smoke testing verifies build stability before detailed testing)
10. B (20-30 test cases is optimal for smoke testing)
11. B (10-30 minutes target execution time for smoke tests)
12. C (ANY smoke test failure = reject build immediately, no compromise)
13. B (Smoke testing is wide coverage, shallow depth)
14. A (Smoke covers all features lightly, Sanity focuses deep on specific area)
15. B (Sanity after bug fix or minor change to verify specific functionality)
16. C (Regression has broadest scope - comprehensive all features)
17. B (Optimize to reduce time while maintaining coverage)
18. A (Remove tests with 0% DDR - never find bugs)
19. B (Parallel = running multiple tests simultaneously)
20. B (Tests must be independent with no dependencies for parallel execution)

### Section B: True/False
21. F (Corrective reuses existing test cases without modification)
22. T (Selective requires impact analysis to identify which tests to run)
23. F (Full regression too time-consuming for every commit; smoke tests for commits)
24. F (Prioritization helps even with time - focuses on high-value tests)
25. T (P0 critical tests must pass - blocking for deployment)
26. T (Risk score formula multiplies these three factors)
27. F (Smoke tests focus on happy path only, no negative testing)
28. F (Smoke tests are shallow - touch all features lightly, not in depth)
29. T (Smoke testing = Build Verification Testing (BVT))
30. F (If smoke fails, reject build immediately, no further testing)
31. T (Sanity is a focused subset of regression testing)
32. T (Regression ensures changes don't break existing functionality)
33. F (Automation has ROI calculation - not always worth it for rarely-run tests)
34. T (Repetitive, frequent tests are best automation candidates)
35. T (ROI formula: (Savings - Cost) / Cost × 100%)
36. F (Flaky tests should be fixed, not ignored - they erode confidence)
37. F (Obsolete tests should be removed or archived)
38. T (Merging redundant tests reduces total test count and execution time)
39. T (Independence allows parallel execution and any order)
40. F (Manual testers should learn automation to increase efficiency)

### Section C: Scenario Answers

**Scenario 1:**
a) Problem: Test suite grown unsustainably large (1,500 tests, 30 hours) causing testing bottleneck and delays

b) Three optimization strategies:
   1. Remove obsolete test cases - tests for removed features, duplicate coverage
   2. Prioritize tests (P0/P1/P2/P3) - run P0 daily, P1 weekly, P2/P3 before release
   3. Automate repetitive tests - convert stable, frequently-run tests to automation for parallel execution
   (Other valid strategies: merge redundant tests, optimize test data management, remove low-value tests)

c) Prioritization when time limited:
   - Run P0 tests first (critical features)
   - Tests for recently changed modules
   - Tests with high DDR (find bugs historically)
   - Tests for high-traffic features

**Scenario 2:**
a) 5-7 Critical Smoke Test Scenarios:
   1. User can login with valid credentials
   2. Search for product returns results
   3. View product details
   4. Add product to cart
   5. View cart with correct items
   6. Proceed to checkout (don't complete payment)
   7. Logout

b) Exclude from smoke:
   - Registration flow (unless critical)
   - Password reset
   - Filters and sorting
   - Product reviews
   - Wishlist
   - Advanced search
   - Profile editing
   - Order history

c) Execution time: 15-20 minutes
   Reasoning: 7 tests × 2-3 minutes each = 14-21 minutes (includes navigation time)

**Scenario 3:**
a) Prioritize modules:
   1. Payment (45 P0 tests, 32 defects, changed recently) - CRITICAL
   2. Checkout (40 P0 tests, 47 defects, changed recently) - CRITICAL
   3. Login (10 P0 tests, stable but critical) - CRITICAL PATH

b) Justification:
   - Payment: High P0 count (45), highest recent defects (32), changed recently = HIGH RISK
   - Checkout: High P0 count (40), most defects historically (47), changed recently = HIGH RISK
   - Login: Critical path (can't use app without it), must verify
   - Skip: Reports (low P0, low defects, stable), Search (stable, moderate defects)

c) Realistic in 4 hours:
   - Assume 2-3 min per test case
   - 4 hours = 240 minutes
   - 240 minutes ÷ 2.5 min/test = ~96 test cases
   - Recommendation: Run all P0 from Payment (45) + Checkout (40) + Login (10) = 95 tests

**Scenario 4:**
a) Current monthly cost:
   - 2 hours × 3 runs/day × 22 days = 132 hours/month
   - 132 hours × $50/hour = $6,600/month

b) Automation costs:
   - First month: (40 hours × $75) + (5 hours × $75) + $200 = $3,000 + $375 + $200 = $3,575
   - Ongoing monthly: (5 hours × $75) + $200 = $375 + $200 = $575/month

c) ROI and payback:
   - First month ROI: ($6,600 - $3,575) / $3,575 × 100% = 84.6%
   - Ongoing ROI: ($6,600 - $575) / $575 × 100% = 948%
   - Payback period: $3,000 initial investment / ($6,600 - $575 monthly savings) = 0.5 months (2 weeks)

### Section D: Practical Answers

**Exercise 1:**
a) Priority Score Calculations:

Payment: (50/90 × 0.4) + (45/50 × 0.3) + 0.3 = 0.222 + 0.270 + 0.3 = 0.792
Bookings: (25/100 × 0.4) + (18/50 × 0.3) + 0.3 = 0.100 + 0.108 + 0.3 = 0.508
Flight: (30/120 × 0.4) + (15/50 × 0.3) + 0.3 = 0.100 + 0.090 + 0.3 = 0.490
Hotel: (20/80 × 0.4) + (8/50 × 0.3) + 0 = 0.100 + 0.048 + 0 = 0.148
Car Rental: (15/60 × 0.4) + (4/50 × 0.3) + 0 = 0.100 + 0.024 + 0 = 0.124
User Profile: (10/50 × 0.4) + (2/50 × 0.3) + 0 = 0.080 + 0.012 + 0 = 0.092

b) Ranked priority:
   1. Payment (0.792)
   2. Bookings Management (0.508)
   3. Flight Search (0.490)
   4. Hotel Search (0.148)
   5. Car Rental (0.124)
   6. User Profile (0.092)

c) Test Suite Design:
   Smoke Suite (25 tests, 20 min):
   - Login (2 tests)
   - Flight search → select flight (4 tests)
   - Hotel search → select hotel (3 tests)
   - Car rental → select car (2 tests)
   - Add to cart (2 tests)
   - View cart/booking summary (2 tests)
   - Checkout start (not complete payment) (2 tests)
   - View bookings (2 tests)
   - Profile view (1 test)
   - Logout (1 test)

   P0 Regression: All P0 tests = 150 tests
   - Payment: 50
   - Bookings: 25
   - Flight: 30
   - Hotel: 20
   - Car: 15
   - Profile: 10

   Full Regression: All 500 tests

d) Execution Schedule:
   Daily:
   - Smoke suite (every build)
   - P0 tests for changed modules only

   Weekly:
   - Full P0 regression suite
   - P1 tests

   Before Release:
   - Full regression (all 500 tests)
   - All P2 and P3 tests

**Exercise 2:**

a) Redundant test cases:
   - TC-001, TC-002, TC-003 test same login with valid credentials (just verify different aspects)
   - TC-006, TC-007, TC-008 test empty fields (can be merged into one test with multiple validations)

b) Optimized test cases:
   ```
   TC-LOGIN-01: Login with valid credentials
   - Enter valid email and password
   - Click Login
   - Expected: Homepage displayed, session cookie created, user authenticated

   TC-LOGIN-02: Login with invalid credentials
   - Test: Wrong email, wrong password
   - Expected: Error message, login fails

   TC-LOGIN-03: Login with empty fields
   - Test: Empty email, empty password, both empty
   - Expected: Validation errors, login prevented

   TC-LOGIN-04: Login with security payloads
   - Test: SQL injection in email, XSS in password
   - Expected: Input sanitized, no code execution, login fails gracefully
   ```

   Reduced from 10 to 4 comprehensive tests

c) Time saved:
   - Original: 10 tests × 2 min = 20 minutes
   - Optimized: 4 tests × 3 min = 12 minutes
   - Saved: 8 minutes per regression run (40% reduction)

d) Good automation candidates:
   - TC-LOGIN-01 (critical path, executed frequently)
   - TC-LOGIN-02 (stable, predictable)
   - TC-LOGIN-03 (repetitive validation testing)
   - TC-LOGIN-04 (security testing, should run every build)
   All are good candidates due to stability and frequency of execution

---

**Scoring Guide:**
- 90-100: Excellent - Strong understanding of regression and optimization strategies
- 80-89: Very Good - Good grasp of concepts, minor gaps
- 70-79: Good - Adequate understanding, needs improvement in some areas
- 60-69: Satisfactory - Basic understanding, significant gaps
- Below 60: Needs Improvement - Review material and retake

**End of Assessment**
