# Day 3: Test Case Design Techniques - Part 1 - Assessment Questions

## Assessment Overview

This document contains all assessment questions for Day 3. These questions are also available in the interactive web application with two modes:

- **Quick Mode**: 15 questions, 20 minutes
- **Full Mode**: 40 questions, 50 minutes

---

## Assessment Questions

### Section A: Multiple Choice Questions (20 questions)

**1. Which test design technique divides input data into valid and invalid partitions?**
   a) Boundary Value Analysis
   b) Equivalence Partitioning
   c) Decision Table Testing
   d) State Transition Testing

**2. What does BVA stand for?**
   a) Boundary Value Assessment
   b) Boundary Value Analysis
   c) Basic Value Analysis
   d) Binary Value Assessment

**3. In Equivalence Partitioning, how many values should you test from each partition?**
   a) All values
   b) At least one value
   c) Two values
   d) Three values

**4. Which technique is most effective at finding off-by-one errors?**
   a) Equivalence Partitioning
   b) Decision Table Testing
   c) Boundary Value Analysis
   d) State Transition Testing

**5. For a range [18, 65], what are the boundary values in standard BVA?**
   a) 18, 65
   b) 17, 18, 64, 65
   c) 17, 18, 19, 64, 65, 66
   d) 18, 19, 64, 65

**6. Decision tables are most useful for testing:**
   a) Input ranges
   b) Complex business rules with multiple conditions
   c) Sequential workflows
   d) Performance requirements

**7. In a decision table, if there are 3 conditions, how many rules (columns) will there be?**
   a) 3
   b) 6
   c) 8
   d) 9

**8. State Transition Testing is best suited for:**
   a) Input validation
   b) Systems with distinct states and transitions
   c) Boundary conditions
   d) Complex calculations

**9. What is a stub in integration testing context?**
   a) A test case template
   b) A dummy module that simulates lower-level modules
   c) A test data file
   d) An error message

**10. In Equivalence Partitioning, an invalid test case should cover:**
   a) Multiple invalid classes
   b) Only one invalid class
   c) All invalid classes
   d) No invalid classes

**11. Which BVA type tests values far below and far above the boundaries?**
   a) Two-Value BVA
   b) Three-Value BVA
   c) Robust BVA
   d) Worst-Case BVA

**12. What is the main advantage of Equivalence Partitioning?**
   a) Tests all possible values
   b) Reduces number of test cases dramatically
   c) Finds all defects
   d) Eliminates need for other techniques

**13. In State Transition Testing, what triggers a transition?**
   a) A state
   b) An event
   c) An action
   d) A condition

**14. Decision tables use which notation for conditions?**
   a) Yes/No
   b) True/False
   c) T/F or Y/N
   d) 1/0

**15. Which technique would you use to test a login form with username (5-20 chars) and password (8-16 chars)?**
   a) Only Equivalence Partitioning
   b) Only Boundary Value Analysis
   c) Both EP and BVA
   d) Decision Table Testing

**16. What is the core principle of Equivalence Partitioning?**
   a) Test all values in a partition
   b) If one value works, all values in that partition should work
   c) Test only boundary values
   d) Test random values

**17. In a decision table, what does 'X' typically represent?**
   a) A condition is true
   b) A condition is false
   c) An action is taken
   d) Don't care

**18. Which technique is best for testing age-based discount calculation (0-12: child, 13-17: teen, 18-64: adult, 65+: senior)?**
   a) State Transition
   b) Decision Table
   c) Equivalence Partitioning with BVA
   d) Use Case Testing

**19. What is a driver in integration testing?**
   a) A test automation tool
   b) A test harness that simulates higher-level modules
   c) A database connection
   d) A test manager

**20. For testing a password field (8-20 characters), which values would you test using Three-Value BVA?**
   a) 8, 20
   b) 7, 8, 19, 20
   c) 7, 8, 9, 19, 20, 21
   d) 1, 8, 14, 20, 30

---

### Section B: True/False Questions (10 questions)

**1. Equivalence Partitioning can only be applied to numeric inputs.**
   ☐ True  ☐ False

**2. Boundary Value Analysis is effective because defects commonly occur at the edges of input ranges.**
   ☐ True  ☐ False

**3. In Equivalence Partitioning, a valid test case can cover multiple valid equivalence classes.**
   ☐ True  ☐ False

**4. Decision tables can become very large when there are many conditions (2^n rules).**
   ☐ True  ☐ False

**5. State Transition Testing is suitable for all types of applications.**
   ☐ True  ☐ False

**6. BVA should always be used together with Equivalence Partitioning.**
   ☐ True  ☐ False

**7. In a decision table, each column represents a test case.**
   ☐ True  ☐ False

**8. Robust BVA tests more values than Standard BVA.**
   ☐ True  ☐ False

**9. State Transition Testing can identify invalid state transitions.**
   ☐ True  ☐ False

**10. Equivalence Partitioning eliminates the need for testing boundary values.**
   ☐ True  ☐ False

---

### Section C: Scenario-Based Questions (10 questions)

**1. You need to test a discount code field that accepts codes of 5-10 characters (alphanumeric only). Using Equivalence Partitioning, identify the valid and invalid equivalence classes.**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**2. A hotel booking system allows stays from 1 to 30 nights. Using Three-Value BVA, what test values would you use?**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**3. Create a decision table for a loan approval system with these conditions: Income (High/Low), Credit Score (Good/Bad), Existing Loan (Yes/No). Actions: Approve with low interest, Approve with high interest, Reject.**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**4. An ATM has states: Idle, Card Inserted, PIN Entered, Authenticated, Blocked. Draw or describe the state transitions for a successful withdrawal scenario.**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**5. You're testing a registration form with: Username (5-20 chars), Email (valid format), Password (8-16 chars), Age (18-100). How would you combine EP and BVA to create an efficient test suite?**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**6. A shopping cart allows quantities from 1 to 10 items. You find a bug where quantity 10 is rejected. What type of error is this, and which test design technique would have caught it?**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**7. Create test cases using Equivalence Partitioning for a month field that accepts values 1-12.**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**8. An insurance premium calculator has 3 conditions: Age (<25 or >=25), Accidents (Yes/No), Car Type (Economy/Luxury). How many rules would the decision table have, and why?**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**9. You're testing an order processing system with states: New, Payment Pending, Confirmed, Processing, Shipped, Delivered, Cancelled. Identify 3 valid and 2 invalid state transitions.**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

**10. A file upload feature accepts files from 1KB to 5MB. Using Robust BVA, what test values would you use and why?**

   **Your Answer:**
   _____________________________________
   _____________________________________
   _____________________________________

---

## Answer Key

### Section A: MCQ Answers

1. **b) Equivalence Partitioning**
   - EP divides input data into valid and invalid partitions

2. **b) Boundary Value Analysis**
   - BVA focuses on testing at the boundaries of input ranges

3. **b) At least one value**
   - Testing one representative value from each partition is sufficient

4. **c) Boundary Value Analysis**
   - BVA is specifically designed to catch off-by-one errors at boundaries

5. **c) 17, 18, 19, 64, 65, 66**
   - Standard Three-Value BVA: min-1, min, min+1, max-1, max, max+1

6. **b) Complex business rules with multiple conditions**
   - Decision tables excel at handling multiple conditions and their combinations

7. **c) 8**
   - Number of rules = 2^n where n is number of conditions. 2^3 = 8

8. **b) Systems with distinct states and transitions**
   - State Transition Testing models systems that move between different states

9. **b) A dummy module that simulates lower-level modules**
   - Stubs are used in Top-Down integration to simulate modules not yet developed

10. **b) Only one invalid class**
    - Each invalid test case should test only one invalid class to identify the exact failure reason

11. **c) Robust BVA**
    - Robust BVA extends testing to values far below and far above boundaries

12. **b) Reduces number of test cases dramatically**
    - EP's main advantage is reducing test cases while maintaining coverage

13. **b) An event**
    - Events trigger transitions from one state to another

14. **c) T/F or Y/N**
    - Decision tables typically use T/F (True/False) or Y/N (Yes/No) notation

15. **c) Both EP and BVA**
    - Use EP for partitioning and BVA for testing boundaries of both fields

16. **b) If one value works, all values in that partition should work**
    - Core principle: all values in a partition behave similarly

17. **c) An action is taken**
    - 'X' marks which actions are executed for each rule

18. **c) Equivalence Partitioning with BVA**
    - EP for age ranges, BVA for boundaries between ranges

19. **b) A test harness that simulates higher-level modules**
    - Drivers are used in Bottom-Up integration to simulate calling modules

20. **c) 7, 8, 9, 19, 20, 21**
    - Three-Value BVA: min-1, min, min+1, max-1, max, max+1

---

### Section B: True/False Answers

1. **False** - EP can be applied to any type of input (numeric, text, dates, etc.)

2. **True** - Defects commonly occur at boundaries due to off-by-one errors and incorrect operators

3. **True** - A valid test case can cover multiple valid equivalence classes to reduce test cases

4. **True** - With n conditions, there are 2^n possible combinations, which can become very large

5. **False** - State Transition Testing is best for systems with distinct states, not all applications

6. **True** - BVA complements EP by testing boundary values that EP might miss

7. **True** - Each column in a decision table represents one rule/test case

8. **True** - Robust BVA tests additional values (far below/above) compared to Standard BVA

9. **True** - State Transition Testing helps identify and test invalid state transitions

10. **False** - EP and BVA complement each other; EP doesn't test boundaries which BVA does

---

### Section C: Scenario Answers (Sample Answers)

**1. Discount Code Equivalence Classes:**

**Valid Equivalence Classes:**
- VEC1: 5-10 characters, alphanumeric only
  - Example: "SAVE5", "DISC2024"

**Invalid Equivalence Classes:**
- IEC1: Less than 5 characters
  - Example: "SAVE", "ABC"
- IEC2: More than 10 characters
  - Example: "SUPERSAVER2024"
- IEC3: Contains special characters
  - Example: "SAVE@10", "DISC#2024"
- IEC4: Contains spaces
  - Example: "SAVE 10", "DISC 2024"
- IEC5: Empty input
  - Example: ""
- IEC6: Non-alphanumeric only (numbers or letters only missing)
  - Example: "12345", "ABCDE"

**Test Cases:**
- TC1: Valid code "SAVE10" (VEC1)
- TC2: Too short "SAVE" (IEC1)
- TC3: Too long "SUPERSAVER2024" (IEC2)
- TC4: Special chars "SAVE@10" (IEC3)
- TC5: With spaces "SAVE 10" (IEC4)
- TC6: Empty "" (IEC5)

---

**2. Hotel Booking BVA (1-30 nights):**

**Three-Value BVA Test Values:**

**Minimum Boundary:**
- 0 nights (min-1) - Invalid
- 1 night (min) - Valid
- 2 nights (min+1) - Valid

**Maximum Boundary:**
- 29 nights (max-1) - Valid
- 30 nights (max) - Valid
- 31 nights (max+1) - Invalid

**Test Cases:**
- TC1: 0 nights → Error "Minimum stay is 1 night"
- TC2: 1 night → Booking successful
- TC3: 2 nights → Booking successful
- TC4: 29 nights → Booking successful
- TC5: 30 nights → Booking successful
- TC6: 31 nights → Error "Maximum stay is 30 nights"

---

**3. Loan Approval Decision Table:**

```
┌─────────────────────────────────────────────────────┐
│ Conditions      │ R1 │ R2 │ R3 │ R4 │ R5 │ R6 │ R7 │ R8 │
├─────────────────────────────────────────────────────┤
│ Income High     │ Y  │ Y  │ Y  │ Y  │ N  │ N  │ N  │ N  │
│ Credit Good     │ Y  │ Y  │ N  │ N  │ Y  │ Y  │ N  │ N  │
│ Existing Loan   │ Y  │ N  │ Y  │ N  │ Y  │ N  │ Y  │ N  │
├─────────────────────────────────────────────────────┤
│ Actions         │    │    │    │    │    │    │    │    │
│ Approve Low Int │ X  │ X  │    │    │    │    │    │    │
│ Approve High Int│    │    │ X  │ X  │ X  │    │    │    │
│ Reject          │    │    │    │    │    │ X  │ X  │ X  │
└─────────────────────────────────────────────────────┘
```

**Rules:**
- R1, R2: High income + Good credit → Approve with low interest
- R3, R4: High income + Bad credit → Approve with high interest
- R5: Low income + Good credit + No existing loan → Approve with high interest
- R6, R7, R8: Low income + Bad credit OR Low income with existing loan → Reject

---

**4. ATM Successful Withdrawal State Transitions:**

**States:** Idle → Card Inserted → PIN Entered → Authenticated → Idle

**Transition Flow:**
1. **Idle → Card Inserted**
   - Event: Insert card
   - Action: Display PIN entry screen

2. **Card Inserted → PIN Entered**
   - Event: Enter PIN
   - Action: Validate PIN

3. **PIN Entered → Authenticated**
   - Event: PIN correct
   - Action: Show transaction menu

4. **Authenticated → Authenticated**
   - Event: Select withdraw
   - Action: Dispense cash, update balance

5. **Authenticated → Idle**
   - Event: Eject card
   - Action: Return card, end session

**Complete Flow:**
```
[Idle] --Insert Card--> [Card Inserted] --Enter PIN--> [PIN Entered]
  ↑                                                          ↓
  |                                                    PIN Correct
  |                                                          ↓
  |                                                  [Authenticated]
  |                                                          ↓
  └-----------------Eject Card------------------------------ 
```

---

**5. Registration Form EP + BVA Strategy:**

**Approach:**

**1. Equivalence Partitioning:**
- Username: Valid (5-20 chars), Invalid (<5, >20, special chars, empty)
- Email: Valid format, Invalid format, empty
- Password: Valid (8-16 chars), Invalid (<8, >16, weak, empty)
- Age: Valid (18-100), Invalid (<18, >100, non-numeric, empty)

**2. Boundary Value Analysis:**
- Username: 4, 5, 6, 19, 20, 21 characters
- Password: 7, 8, 9, 15, 16, 17 characters
- Age: 17, 18, 19, 99, 100, 101

**3. Efficient Test Suite (15 test cases):**

**Valid Combinations (3 test cases):**
- TC1: Min boundaries (username=5, password=8, age=18)
- TC2: Mid values (username=12, password=12, age=50)
- TC3: Max boundaries (username=20, password=16, age=100)

**Invalid - One field at a time (12 test cases):**
- TC4-6: Username invalid (too short, too long, special chars)
- TC7-9: Email invalid (no @, invalid format, empty)
- TC10-12: Password invalid (too short, too long, empty)
- TC13-15: Age invalid (too young, too old, non-numeric)

**Total:** 15 test cases covering all equivalence classes and key boundaries

---

**6. Quantity 10 Rejected Bug:**

**Error Type:** Off-by-one error (boundary error)

**Likely Code Issue:**
```javascript
// Buggy code:
if (quantity > 0 && quantity < 10) {  // Should be <= 10
    addToCart(quantity);
}
```

**Test Design Technique:** Boundary Value Analysis (BVA)

**Why BVA Would Catch It:**
- BVA specifically tests boundary values
- Would test: 0, 1, 2, 9, 10, 11
- Testing quantity=10 (max boundary) would reveal the bug
- This is exactly the type of defect BVA is designed to find

**Prevention:**
Always use BVA for range validations to catch off-by-one errors at boundaries.

---

**7. Month Field EP Test Cases:**

**Equivalence Classes:**

**Valid:**
- VEC1: Valid months (1-12)
  - Test value: 6 (any value from 1-12)

**Invalid:**
- IEC1: Below minimum (<1)
  - Test value: 0
- IEC2: Above maximum (>12)
  - Test value: 13
- IEC3: Non-numeric
  - Test value: "abc"
- IEC4: Decimal
  - Test value: 6.5
- IEC5: Negative
  - Test value: -1
- IEC6: Empty
  - Test value: ""

**Test Cases:**
```
TC1: Month = 6 (VEC1)
Expected: Valid month accepted

TC2: Month = 0 (IEC1)
Expected: Error "Month must be between 1-12"

TC3: Month = 13 (IEC2)
Expected: Error "Month must be between 1-12"

TC4: Month = "abc" (IEC3)
Expected: Error "Month must be numeric"

TC5: Month = 6.5 (IEC4)
Expected: Error "Month must be whole number"

TC6: Month = -1 (IEC5)
Expected: Error "Month cannot be negative"

TC7: Month = "" (IEC6)
Expected: Error "Month is required"
```

**Total:** 7 test cases covering all scenarios

---

**8. Insurance Premium Decision Table:**

**Number of Rules:** 8 rules (2^3 = 8)

**Why:** 
- 3 conditions (Age, Accidents, Car Type)
- Each condition has 2 possible values
- Total combinations = 2 × 2 × 2 = 8

**Decision Table:**
```
┌──────────────────────────────────────────────────────────────┐
│ Conditions      │ R1│ R2│ R3│ R4│ R5│ R6│ R7│ R8│
├──────────────────────────────────────────────────────────────┤
│ Age < 25        │ Y │ Y │ Y │ Y │ N │ N │ N │ N │
│ Has Accidents   │ Y │ Y │ N │ N │ Y │ Y │ N │ N │
│ Luxury Car      │ Y │ N │ Y │ N │ Y │ N │ Y │ N │
├──────────────────────────────────────────────────────────────┤
│ Actions         │   │   │   │   │   │   │   │   │
│ Very High       │ X │   │   │   │ X │   │   │   │
│ High            │   │ X │ X │   │   │ X │   │   │
│ Medium          │   │   │   │ X │   │   │ X │   │
│ Low             │   │   │   │   │   │   │   │ X │
└──────────────────────────────────────────────────────────────┘
```

**8 Test Cases:** One for each rule/column

---

**9. Order Processing State Transitions:**

**Valid Transitions:**
1. **New → Payment Pending**
   - Event: Place order
   - Normal flow start

2. **Payment Pending → Confirmed**
   - Event: Payment successful
   - Payment processed

3. **Confirmed → Processing**
   - Event: Start processing
   - Order preparation begins

4. **Processing → Shipped**
   - Event: Ship order
   - Order dispatched

5. **Shipped → Delivered**
   - Event: Delivery confirmed
   - Successful completion

**Invalid Transitions:**
1. **New → Shipped**
   - Cannot ship without payment and processing
   - Should be rejected

2. **Payment Pending → Delivered**
   - Cannot deliver without intermediate states
   - Should be rejected

3. **Delivered → Payment Pending**
   - Cannot go back to payment after delivery
   - Should be rejected

4. **Cancelled → Processing**
   - Cannot process a cancelled order
   - Should be rejected

5. **Shipped → New**
   - Cannot reset to new after shipping
   - Should be rejected

---

**10. File Upload Robust BVA (1KB - 5MB):**

**Robust BVA Test Values:**

**Far Below Minimum:**
- 0 KB (empty file)
- Expected: Error "File cannot be empty"

**Minimum Boundary:**
- 0.5 KB (min-1)
- Expected: Error "Minimum file size is 1 KB"
- 1 KB (min)
- Expected: Upload successful
- 1.5 KB (min+1)
- Expected: Upload successful

**Maximum Boundary:**
- 5119 KB (max-1)
- Expected: Upload successful
- 5120 KB / 5 MB (max)
- Expected: Upload successful
- 5121 KB (max+1)
- Expected: Error "Maximum file size is 5 MB"

**Far Above Maximum:**
- 10 MB (far above)
- Expected: Error "File size exceeds limit"

**Why Robust BVA:**
- Tests extreme values (0 KB, 10 MB) beyond standard boundaries
- Catches edge cases like empty files
- Verifies error handling for very large files
- More comprehensive than standard BVA
- Critical for file upload features where size limits are important

**Total:** 8 test values providing comprehensive boundary coverage

---

## Notes

- These questions are available in the interactive web application
- The app provides immediate feedback and explanations
- Use Quick Mode (15 questions) for practice
- Use Full Mode (40 questions) for comprehensive assessment
- Passing score: 70%
- Review feature available to learn from mistakes

---

*For the interactive assessment experience, visit the web application and navigate to Day 3 Assessment.*