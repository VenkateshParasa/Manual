# Day 4: Test Design Techniques Part 2 - Assessment

**Topics Covered:**
- Use Case Testing
- Error Guessing
- Exploratory Testing Fundamentals
- White Box Testing (QA Perspective)
- Experience-Based Techniques

**Assessment Structure:**
- **Section A:** Multiple Choice Questions (20 questions)
- **Section B:** True/False Questions (10 questions)
- **Section C:** Scenario-Based Questions (10 questions)
- **Total Questions:** 40
- **Passing Score:** 70%
- **Time Limit:** 
  - Quick Mode: 20 minutes (15 questions)
  - Full Mode: 50 minutes (40 questions)

---

## Section A: Multiple Choice Questions

### Part 1: Quick Mode Questions (1-10)

**Question 1:**
What are the three main flow types in Use Case Testing?
- A) Basic, Complex, Simple
- B) Basic, Alternate, Exception
- C) Happy, Sad, Error
- D) Primary, Secondary, Tertiary

**Answer:** B) Basic, Alternate, Exception
**Explanation:** Use Case Testing includes Basic Flow (happy path), Alternate Flows (variations), and Exception Flows (error conditions).

---

**Question 2:**
Which test design technique relies on tester's experience and intuition to anticipate defects?
- A) Equivalence Partitioning
- B) Boundary Value Analysis
- C) Error Guessing
- D) Decision Table Testing

**Answer:** C) Error Guessing
**Explanation:** Error Guessing is an experience-based technique where testers use their knowledge to anticipate where defects might occur.

---

**Question 3:**
In Exploratory Testing, what does "simultaneous" mean?
- A) Multiple testers testing at once
- B) Testing multiple features together
- C) Design and execution happen together
- D) Running multiple test cases simultaneously

**Answer:** C) Design and execution happen together
**Explanation:** Exploratory Testing involves simultaneous test design, execution, and learning - all happening together.

---

**Question 4:**
What is a "charter" in Session-Based Exploratory Testing?
- A) A test plan document
- B) A mission statement defining what to explore and discover
- C) A list of test cases
- D) A bug report template

**Answer:** B) A mission statement defining what to explore and discover
**Explanation:** A charter defines the scope, resources, and goals for an exploratory testing session.

---

**Question 5:**
Which coverage type measures the percentage of code statements executed?
- A) Branch Coverage
- B) Path Coverage
- C) Statement Coverage
- D) Function Coverage

**Answer:** C) Statement Coverage
**Explanation:** Statement Coverage measures the percentage of code statements that have been executed during testing.

---

**Question 6:**
In Use Case Testing, what is a "precondition"?
- A) The final state after use case completes
- B) The state that must exist before the use case begins
- C) An error condition
- D) A test case requirement

**Answer:** B) The state that must exist before the use case begins
**Explanation:** Preconditions define the state that must exist before a use case can begin execution.

---

**Question 7:**
Which of the following is a common error-prone area for input fields?
- A) Empty input
- B) SQL injection attempts
- C) Special characters
- D) All of the above

**Answer:** D) All of the above
**Explanation:** Input fields are prone to errors with empty input, SQL injection, special characters, and many other issues.

---

**Question 8:**
What does FCC CUTS VIDS stand for in Exploratory Testing?
- A) A code coverage tool
- B) Different testing tours/approaches
- C) A bug tracking system
- D) A test automation framework

**Answer:** B) Different testing tours/approaches
**Explanation:** FCC CUTS VIDS represents different testing tours: Feature, Complexity, Claims, User, Testability, Scenario, Variability, Interoperability, Data, Structure.

---

**Question 9:**
In White Box Testing, what is Branch Coverage also known as?
- A) Statement Coverage
- B) Decision Coverage
- C) Path Coverage
- D) Line Coverage

**Answer:** B) Decision Coverage
**Explanation:** Branch Coverage is also called Decision Coverage as it tests both true and false outcomes of decision points.

---

**Question 10:**
What is the main advantage of Use Case Testing?
- A) It's the fastest technique
- B) It provides end-to-end coverage from user perspective
- C) It requires no documentation
- D) It's fully automated

**Answer:** B) It provides end-to-end coverage from user perspective
**Explanation:** Use Case Testing provides comprehensive end-to-end coverage based on realistic user scenarios.

---

### Part 2: Full Mode Additional Questions (11-20)

**Question 11:**
In a Use Case, what is an "alternate flow"?
- A) An error condition
- B) A variation of the basic flow
- C) The main happy path
- D) A failed test case

**Answer:** B) A variation of the basic flow
**Explanation:** Alternate flows represent variations of the basic flow, such as using a saved address instead of entering a new one.

---

**Question 12:**
Which error guessing scenario tests for race conditions?
- A) Testing with empty input
- B) Testing with very long input
- C) Adding last item from two devices simultaneously
- D) Testing with special characters

**Answer:** C) Adding last item from two devices simultaneously
**Explanation:** Testing concurrent access from multiple devices can reveal race conditions in inventory management.

---

**Question 13:**
What is the typical time box for an exploratory testing session?
- A) 15-30 minutes
- B) 60-120 minutes
- C) 4-8 hours
- D) 1-2 days

**Answer:** B) 60-120 minutes
**Explanation:** Exploratory testing sessions are typically time-boxed to 60-120 minutes (1-2 hours) to maintain focus.

---

**Question 14:**
In the FEATURE tour, what is the focus?
- A) Testing complex areas only
- B) Testing each feature systematically one by one
- C) Testing user scenarios
- D) Testing integration points

**Answer:** B) Testing each feature systematically one by one
**Explanation:** The Feature Tour focuses on testing each feature thoroughly, one at a time.

---

**Question 15:**
What is the formula for Statement Coverage?
- A) (Branches Executed / Total Branches) × 100%
- B) (Statements Executed / Total Statements) × 100%
- C) (Paths Executed / Total Paths) × 100%
- D) (Functions Executed / Total Functions) × 100%

**Answer:** B) (Statements Executed / Total Statements) × 100%
**Explanation:** Statement Coverage is calculated as the percentage of code statements executed during testing.

---

**Question 16:**
Which testing technique is best for testing a complete user workflow from login to checkout?
- A) Equivalence Partitioning
- B) Boundary Value Analysis
- C) Use Case Testing
- D) Statement Coverage

**Answer:** C) Use Case Testing
**Explanation:** Use Case Testing is ideal for end-to-end workflows as it follows complete user scenarios.

---

**Question 17:**
What should you test when error guessing for date fields?
- A) Only valid dates
- B) Feb 29 on non-leap years
- C) Only current dates
- D) Only future dates

**Answer:** B) Feb 29 on non-leap years
**Explanation:** Error guessing for dates includes testing invalid dates like Feb 29 on non-leap years, Feb 30, Feb 31, etc.

---

**Question 18:**
In Exploratory Testing, what is the purpose of a "mind map"?
- A) To automate tests
- B) To visualize and organize testing areas
- C) To calculate code coverage
- D) To generate test data

**Answer:** B) To visualize and organize testing areas
**Explanation:** Mind maps help visualize and organize different areas of the application for exploratory testing.

---

**Question 19:**
What is Path Coverage in White Box Testing?
- A) Testing all statements
- B) Testing all branches
- C) Testing all possible paths through the code
- D) Testing all functions

**Answer:** C) Testing all possible paths through the code
**Explanation:** Path Coverage measures the percentage of all possible execution paths that have been tested.

---

**Question 20:**
Which is NOT a component of a Use Case?
- A) Actor
- B) Precondition
- C) Code Coverage
- D) Postcondition

**Answer:** C) Code Coverage
**Explanation:** Code Coverage is a White Box testing metric, not a component of Use Case Testing.

---

## Section B: True/False Questions

### Part 1: Quick Mode Questions (1-5)

**Question 1:**
Use Case Testing only covers the happy path (basic flow).

**Answer:** False
**Explanation:** Use Case Testing covers basic flow, alternate flows, and exception flows - not just the happy path.

---

**Question 2:**
Error Guessing is a systematic, repeatable test design technique.

**Answer:** False
**Explanation:** Error Guessing is experience-based and depends on tester's intuition, making it less systematic and repeatable.

---

**Question 3:**
Exploratory Testing means testing without any planning or structure.

**Answer:** False
**Explanation:** Exploratory Testing is structured through charters, time boxes, and testing tours - it's not random testing.

---

**Question 4:**
In White Box Testing, 100% code coverage guarantees no bugs.

**Answer:** False
**Explanation:** 100% code coverage doesn't guarantee bug-free code; it only means all code was executed, not that all scenarios were tested.

---

**Question 5:**
QA testers should understand White Box Testing concepts even if developers write unit tests.

**Answer:** True
**Explanation:** QA should understand White Box concepts to review coverage reports, suggest scenarios, and collaborate with developers.

---

### Part 2: Full Mode Additional Questions (6-10)

**Question 6:**
A Use Case postcondition describes the state after the use case completes.

**Answer:** True
**Explanation:** Postconditions define the system state after successful or failed completion of the use case.

---

**Question 7:**
Error Guessing can complement formal test design techniques like EP and BVA.

**Answer:** True
**Explanation:** Error Guessing is often used alongside formal techniques to find additional edge cases and unexpected issues.

---

**Question 8:**
Exploratory Testing sessions should always be recorded or documented.

**Answer:** True
**Explanation:** Documentation through session sheets, recordings, or notes is essential for tracking findings and sharing knowledge.

---

**Question 9:**
Branch Coverage is always higher than Statement Coverage.

**Answer:** False
**Explanation:** Branch Coverage is typically equal to or lower than Statement Coverage, as it has stricter requirements (testing both true and false branches).

---

**Question 10:**
The CLAIMS tour in Exploratory Testing focuses on verifying marketing claims and documentation.

**Answer:** True
**Explanation:** The Claims Tour specifically tests whether the application meets its advertised claims and documented features.

---

## Section C: Scenario-Based Questions

**Question 1:**
You're testing an online banking transfer feature. Using Use Case Testing, describe the basic flow, one alternate flow, and one exception flow.

**Sample Answer:**
Basic Flow: User logs in → selects source account → selects destination account → enters amount → confirms → transfer completes → confirmation displayed.

Alternate Flow: User schedules future transfer - at the amount entry step, user selects "Schedule for later", picks date/time, then continues to confirmation.

Exception Flow: Insufficient funds - during validation, system detects balance is less than transfer amount, displays error "Insufficient funds. Available: $X", user can modify amount or cancel.

**Keywords:** basic, flow, alternate, exception, transfer, account, amount, error, insufficient, schedule
**Min Keywords:** 5

---

**Question 2:**
You're testing a shopping cart. Using Error Guessing, list 5 error-prone scenarios you would test.

**Sample Answer:**
1. Update quantity to 0 or negative number
2. Apply multiple discount codes simultaneously
3. Item price changes while in cart
4. Session timeout with items in cart
5. Product goes out of stock during checkout
6. Add item from two browsers simultaneously (race condition)

**Keywords:** quantity, negative, discount, price, session, timeout, stock, race, condition, concurrent, browser
**Min Keywords:** 5

---

**Question 3:**
Create a 60-minute Exploratory Testing charter for testing a food delivery app's ordering flow.

**Sample Answer:**
EXPLORE: Food ordering flow from restaurant selection to order confirmation
WITH: Mobile app (iOS), test account, test credit card, various restaurants
TO DISCOVER: Usability issues, calculation errors, performance problems, edge cases
TIME BOX: 60 minutes

Focus areas:
- Restaurant search and filtering (15 min)
- Menu browsing and cart management (20 min)
- Checkout and payment (15 min)
- Edge cases and error handling (10 min)

**Keywords:** explore, charter, time, box, discover, restaurant, cart, payment, checkout, menu, filter, edge
**Min Keywords:** 6

---

**Question 4:**
You receive a code coverage report showing 75% statement coverage and 60% branch coverage for the payment module. As a QA, what actions would you take?

**Sample Answer:**
1. Review the coverage report to identify uncovered lines and branches
2. Analyze which scenarios are missing (likely error handling, edge cases)
3. Create test cases to cover the uncovered code paths
4. Focus on the 25% uncovered statements - these might be error handling or edge cases
5. Investigate why branch coverage is lower - suggests some decision points aren't fully tested
6. Collaborate with developers to understand the uncovered code
7. Prioritize testing critical paths like payment failures, timeouts, refunds

**Keywords:** coverage, report, uncovered, branches, statements, test, cases, error, handling, edge, critical, payment, analyze
**Min Keywords:** 6

---

**Question 5:**
Describe how you would use the VARIABILITY tour to test a login feature.

**Sample Answer:**
VARIABILITY tour varies inputs and configurations:

1. Different browsers: Chrome, Firefox, Safari, Edge
2. Different devices: Desktop, mobile, tablet
3. Different screen sizes: 1920x1080, 1366x768, mobile portrait/landscape
4. Different user roles: Admin, regular user, guest
5. Different credentials: Valid, invalid, expired, locked account
6. Different network conditions: Fast WiFi, slow 3G, offline
7. Different input methods: Keyboard, copy-paste, autofill, password manager

**Keywords:** variability, tour, different, browsers, devices, screen, roles, credentials, network, input, methods, configurations
**Min Keywords:** 6

---

**Question 6:**
You're testing a hotel booking system. Write a Use Case for booking a room including at least one alternate flow and one exception flow.

**Sample Answer:**
Use Case: Book Hotel Room

Basic Flow:
1. Guest enters destination, check-in/out dates, number of guests
2. System displays available hotels
3. Guest filters by price, rating, amenities
4. Guest selects hotel and room type
5. System displays booking summary with total cost
6. Guest enters personal and payment details
7. System processes payment and creates reservation
8. System displays confirmation with booking ID

Alternate Flow A1: Apply Promo Code (at step 5)
- Guest enters promo code
- System validates and applies discount
- Total cost updates
- Continue to step 6

Exception Flow E1: Payment Declined (at step 7)
- Payment gateway returns error
- System displays "Payment declined"
- Guest can retry with different card or cancel
- Return to step 6 or end use case

**Keywords:** use, case, basic, flow, alternate, exception, hotel, booking, room, guest, payment, promo, code, error, declined
**Min Keywords:** 8

---

**Question 7:**
Using Error Guessing, what would you test for a password field that requires 8-20 characters with at least one uppercase, one lowercase, and one number?

**Sample Answer:**
Error Guessing scenarios:
1. All lowercase: "password123" (missing uppercase)
2. All uppercase: "PASSWORD123" (missing lowercase)
3. No numbers: "Password" (missing number)
4. Only 7 characters: "Pass123" (below minimum)
5. 21 characters: "Password1234567890123" (above maximum)
6. Special characters only: "!@#$%^&*" (no alphanumeric)
7. Spaces in password: "Pass word1" (spaces handling)
8. Common passwords: "Password123" (weak password)
9. Empty field (required validation)
10. Copy-paste vs typing (input method)
11. Leading/trailing spaces: " Password1 "
12. SQL injection: "Pass' OR '1'='1"

**Keywords:** error, guessing, password, uppercase, lowercase, number, characters, minimum, maximum, special, validation, empty, weak, injection
**Min Keywords:** 7

---

**Question 8:**
Explain the difference between Statement Coverage and Branch Coverage with an example.

**Sample Answer:**
Statement Coverage measures percentage of code statements executed.
Branch Coverage measures percentage of decision points tested for both true and false outcomes.

Example:
```
if age >= 18:        # Decision point
    return "Adult"   # Statement 1
else:
    return "Minor"   # Statement 2
```

For 100% Statement Coverage: Need 1 test
- Test: age=20 → executes "return Adult" (covers both statements through different paths)

For 100% Branch Coverage: Need 2 tests
- Test 1: age=20 → Decision=True → "Adult"
- Test 2: age=15 → Decision=False → "Minor"

Branch Coverage is stricter as it requires testing both outcomes of each decision.

**Keywords:** statement, coverage, branch, decision, true, false, percentage, executed, outcomes, example, test, stricter
**Min Keywords:** 7

---

**Question 9:**
You have 90 minutes for an exploratory testing session on a new e-commerce checkout feature. How would you structure your session?

**Sample Answer:**
90-Minute Exploratory Session Structure:

Minutes 0-10: Setup & Initial Exploration
- Create test account, add items to cart
- Understand checkout flow overview

Minutes 10-30: FEATURE Tour - Core Checkout
- Test address entry and validation
- Test payment method selection
- Test order review and confirmation
- Document basic functionality

Minutes 30-50: USER Tour - Different Scenarios
- Guest checkout vs logged-in user
- Multiple items vs single item
- Different payment methods
- Apply discount codes

Minutes 50-70: VARIABILITY Tour - Edge Cases
- Invalid addresses
- Expired credit cards
- Out of stock items during checkout
- Session timeout scenarios
- Network interruptions

Minutes 70-85: Bug Investigation & Reproduction
- Reproduce any issues found
- Document steps clearly
- Take screenshots

Minutes 85-90: Wrap-up & Documentation
- Complete session notes
- Log all bugs
- Note ideas for next session

**Keywords:** exploratory, session, minutes, structure, feature, tour, user, variability, edge, cases, checkout, bugs, documentation, time, box
**Min Keywords:** 8

---

**Question 10:**
As a QA reviewing unit test coverage, you notice the error handling code has 0% coverage. What would you recommend to the development team?

**Sample Answer:**
Recommendations for uncovered error handling:

1. Immediate Actions:
   - Add unit tests for all error scenarios
   - Test exception handling paths
   - Verify error messages are correct
   - Test error logging functionality

2. Specific Test Cases Needed:
   - Network timeout errors
   - Database connection failures
   - Invalid input handling
   - Null pointer exceptions
   - File not found errors
   - Permission denied scenarios

3. Testing Approach:
   - Use mocking to simulate error conditions
   - Test both error detection and recovery
   - Verify proper error messages to users
   - Check error logging for debugging

4. Quality Impact:
   - Error handling is critical for production stability
   - Uncovered error paths are high-risk areas
   - Users will encounter these in real scenarios
   - Should aim for 90%+ coverage on error handling

5. Collaboration:
   - Pair with developers to write error tests
   - Review error handling strategy
   - Add integration tests for error scenarios

**Keywords:** error, handling, coverage, unit, tests, exceptions, scenarios, mocking, logging, critical, risk, recommend, developers, integration
**Min Keywords:** 8

---

## Answer Key Summary

### Section A: Multiple Choice (20 questions)
1. B  2. C  3. C  4. B  5. C  6. B  7. D  8. B  9. B  10. B
11. B  12. C  13. B  14. B  15. B  16. C  17. B  18. B  19. C  20. C

### Section B: True/False (10 questions)
1. False  2. False  3. False  4. False  5. True
6. True  7. True  8. True  9. False  10. True

### Section C: Scenario-Based (10 questions)
Evaluated based on keywords and understanding demonstrated in answers.

---

## Scoring Guide

**Quick Mode (15 questions):**
- Section A (Q1-10): 30 points (3 points each)
- Section B (Q1-5): 15 points (3 points each)
- **Total: 45 points**
- **Passing: 32 points (70%)**
- **Time: 20 minutes**

**Full Mode (40 questions):**
- Section A (Q1-20): 60 points (3 points each)
- Section B (Q1-10): 30 points (3 points each)
- Section C (Q1-10): 50 points (5 points each)
- **Total: 140 points**
- **Passing: 98 points (70%)**
- **Time: 50 minutes**

---

**End of Assessment**