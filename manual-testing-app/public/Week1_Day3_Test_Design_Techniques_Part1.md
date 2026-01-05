# Day 3: Test Case Design Techniques - Part 1
## Comprehensive Study Guide

---

## Table of Contents
1. [Introduction to Test Design Techniques](#introduction-to-test-design-techniques)
2. [Equivalence Partitioning (EP)](#equivalence-partitioning-ep)
3. [Boundary Value Analysis (BVA)](#boundary-value-analysis-bva)
4. [Decision Table Testing](#decision-table-testing)
5. [State Transition Testing](#state-transition-testing)
6. [Practical Exercises](#practical-exercises)
7. [Assessment Questions](#assessment-questions)

---

## Introduction to Test Design Techniques

### What are Test Design Techniques?

**Definition:** Systematic approaches to designing test cases that ensure maximum coverage with minimum number of test cases.

**Why Needed:**
- **Infinite testing is impossible:** Cannot test all possible inputs and combinations
- **Time constraints:** Limited testing time before release
- **Resource constraints:** Limited testers and environments
- **Cost effectiveness:** Need optimal test coverage with minimal effort

**Categories:**

```
Test Design Techniques
├── Black Box (Specification-based)
│   ├── Equivalence Partitioning
│   ├── Boundary Value Analysis
│   ├── Decision Table
│   ├── State Transition
│   └── Use Case Testing
├── White Box (Structure-based)
│   ├── Statement Coverage
│   ├── Branch Coverage
│   └── Path Coverage
└── Experience-Based
    ├── Error Guessing
    ├── Exploratory Testing
    └── Ad-hoc Testing
```

**Today's Focus:** Black Box Techniques
- Equivalence Partitioning (EP)
- Boundary Value Analysis (BVA)
- Decision Table Testing
- State Transition Testing

---

## Equivalence Partitioning (EP)

### 1.1 Concept and Theory

**Definition:** A test design technique that divides input data into partitions (equivalence classes) where all members of a partition are expected to be processed in the same way by the system.

**Core Principle:**
If one value in a partition works correctly, all values in that partition should work correctly. Similarly, if one value fails, all values in that partition should fail.

**Analogy:**
Think of a discount system:
- Ages 0-12: Child discount (any age in this range behaves the same)
- Ages 13-17: Teen discount  (any age in this range behaves the same)
- Ages 18-64: No discount (any age in this range behaves the same)
- Ages 65+: Senior discount (any age in this range behaves the same)

You don't need to test every single age (0,1,2,3...100). Testing one value from each partition is sufficient.

---

### 1.2 Types of Equivalence Classes

**1. Valid Equivalence Classes:**
Input values that should be accepted by the system.

**2. Invalid Equivalence Classes:**
Input values that should be rejected by the system.

**Example:**

**Requirement:** Password must be 8-16 characters long, containing at least one uppercase letter, one lowercase letter, and one number.

**Valid Equivalence Classes:**
- **VEC1:** Password with exactly 8 characters meeting all criteria
- **VEC2:** Password with 9-15 characters meeting all criteria
- **VEC3:** Password with exactly 16 characters meeting all criteria

**Invalid Equivalence Classes:**
- **IEC1:** Password < 8 characters
- **IEC2:** Password > 16 characters
- **IEC3:** Password without uppercase letter
- **IEC4:** Password without lowercase letter
- **IEC5:** Password without number
- **IEC6:** Password with special characters only
- **IEC7:** Empty password

---

### 1.3 Step-by-Step Approach

**Step 1: Identify Input Conditions**
Read requirements and identify all input fields and conditions.

**Step 2: Identify Valid and Invalid Classes**
For each input, determine what constitutes valid and invalid data.

**Step 3: Assign Unique IDs**
Label each equivalence class (VEC1, VEC2, IEC1, IEC2, etc.)

**Step 4: Design Test Cases**
Create test cases to cover each equivalence class. Each test case should cover as many valid classes as possible, but only one invalid class at a time.

**Important Rule:**
- **Valid test case:** Can cover multiple valid equivalence classes
- **Invalid test case:** Should cover only ONE invalid equivalence class (to identify exact failure reason)

---

### 1.4 Detailed Example 1: Login Form

**Requirement:**
- Username: Must be email format, 5-50 characters
- Password: Must be 8-20 characters
- System: Validates and allows login if correct

**Step 1: Identify Input Conditions**
- Input 1: Username (email format)
- Input 2: Password
- Output: Login success or error message

**Step 2: Identify Equivalence Classes**

**Username Equivalence Classes:**

**Valid:**
- **VEC1:** Valid email format, 5-50 characters
  - Examples: user@test.com, john.doe@example.org

**Invalid:**
- **IEC1:** Invalid email format
  - Examples: usertest.com, @test.com, user@
- **IEC2:** Less than 5 characters
  - Examples: a@b.c (5 chars but invalid), ab@c
- **IEC3:** More than 50 characters
  - Examples: verylongemailaddressthatexceedsthemaximumlengthallowed@test.com
- **IEC4:** Empty username
  - Example: ""
- **IEC5:** Special characters
  - Examples: user!@test.com, user#@test.com

**Password Equivalence Classes:**

**Valid:**
- **VEC2:** Password 8-20 characters
  - Examples: Pass1234, MyP@ssw0rd123

**Invalid:**
- **IEC6:** Password < 8 characters
  - Examples: Pass123, 123
- **IEC7:** Password > 20 characters
  - Example: MyVeryLongPassword123456789
- **IEC8:** Empty password
  - Example: ""

**Step 3: Assign IDs**
Already done above (VEC1, VEC2, IEC1-IEC8)

**Step 4: Design Test Cases**

```
TEST CASES:

Valid Test Cases (Cover all valid classes):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC001: Login with valid credentials
Covers: VEC1, VEC2
Username: john.doe@example.com (valid email, within length)
Password: Pass1234 (8 characters)
Expected: Login successful

TC002: Login with registered user
Covers: VEC1, VEC2
Username: testuser@company.org (valid email)
Password: MySecureP@ss123 (15 characters)
Expected: Login successful

Invalid Test Cases (One invalid class per test case):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC003: Login with invalid email format
Covers: IEC1
Username: invalidemail.com (no @)
Password: Pass1234 (valid)
Expected: Error "Invalid email format"

TC004: Login with username too short
Covers: IEC2
Username: a@b (4 characters)
Password: Pass1234 (valid)
Expected: Error "Username must be at least 5 characters"

TC005: Login with username too long
Covers: IEC3
Username: verylongemailaddressthatexceedsmaximumlength@example.com (60 chars)
Password: Pass1234 (valid)
Expected: Error "Username maximum 50 characters"

TC006: Login with empty username
Covers: IEC4
Username: [empty]
Password: Pass1234 (valid)
Expected: Error "Username is required"

TC007: Login with username containing invalid characters
Covers: IEC5
Username: user!#@test.com
Password: Pass1234 (valid)
Expected: Error "Invalid characters in username"

TC008: Login with password too short
Covers: IEC6
Username: user@test.com (valid)
Password: Pass123 (7 characters)
Expected: Error "Password must be at least 8 characters"

TC009: Login with password too long
Covers: IEC7
Username: user@test.com (valid)
Password: MyVeryLongPassword1234567890 (30 characters)
Expected: Error "Password maximum 20 characters"

TC010: Login with empty password
Covers: IEC8
Username: user@test.com (valid)
Password: [empty]
Expected: Error "Password is required"

Total Test Cases: 10
Coverage: All 2 valid + 8 invalid equivalence classes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Without Equivalence Partitioning:**
You might test hundreds of username/password combinations randomly. With EP, you cover all scenarios with just 10 targeted test cases!

---

### 1.5 Detailed Example 2: Age Validation

**Requirement:**
Movie ticket booking system with age-based pricing:
- Age 0-2: Free
- Age 3-12: Child ticket ($5)
- Age 13-17: Teen ticket ($8)
- Age 18-64: Adult ticket ($12)
- Age 65+: Senior ticket ($8)
- Age must be 0-120
- Age must be a whole number

**Equivalence Classes:**

**Valid Classes:**
- **VEC1:** Age 0-2 (Free)
  - Test value: 0, 1, or 2
- **VEC2:** Age 3-12 (Child)
  - Test value: 3, 7, or 12
- **VEC3:** Age 13-17 (Teen)
  - Test value: 13, 15, or 17
- **VEC4:** Age 18-64 (Adult)
  - Test value: 18, 30, or 64
- **VEC5:** Age 65-120 (Senior)
  - Test value: 65, 75, or 120

**Invalid Classes:**
- **IEC1:** Age < 0 (Negative)
  - Test value: -1, -5
- **IEC2:** Age > 120 (Too old)
  - Test value: 121, 150
- **IEC3:** Non-numeric input
  - Test value: "abc", "twenty"
- **IEC4:** Decimal numbers
  - Test value: 25.5, 10.9
- **IEC5:** Empty input
  - Test value: ""
- **IEC6:** Special characters
  - Test value: @, #, !

**Test Cases:**

```
Valid Test Cases:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Book ticket for infant
Input: Age = 1
Equivalence Class: VEC1 (0-2 years)
Expected: Ticket price = $0 (Free)

TC02: Book ticket for child
Input: Age = 7
Equivalence Class: VEC2 (3-12 years)
Expected: Ticket price = $5 (Child)

TC03: Book ticket for teenager
Input: Age = 15
Equivalence Class: VEC3 (13-17 years)
Expected: Ticket price = $8 (Teen)

TC04: Book ticket for adult
Input: Age = 30
Equivalence Class: VEC4 (18-64 years)
Expected: Ticket price = $12 (Adult)

TC05: Book ticket for senior
Input: Age = 70
Equivalence Class: VEC5 (65-120 years)
Expected: Ticket price = $8 (Senior)

Invalid Test Cases:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC06: Book ticket with negative age
Input: Age = -5
Equivalence Class: IEC1
Expected: Error "Age cannot be negative"

TC07: Book ticket with age exceeding maximum
Input: Age = 150
Equivalence Class: IEC2
Expected: Error "Age must be between 0-120"

TC08: Book ticket with non-numeric age
Input: Age = "twenty"
Equivalence Class: IEC3
Expected: Error "Age must be a number"

TC09: Book ticket with decimal age
Input: Age = 25.5
Equivalence Class: IEC4
Expected: Error "Age must be a whole number"

TC10: Book ticket with empty age
Input: Age = ""
Equivalence Class: IEC5
Expected: Error "Age is required"

TC11: Book ticket with special characters
Input: Age = "25@"
Equivalence Class: IEC6
Expected: Error "Invalid age format"

Total: 11 test cases covering all scenarios
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.6 Detailed Example 3: Discount Calculation

**Requirement:**
E-commerce discount system:
- Order value $0-$50: No discount
- Order value $51-$100: 5% discount
- Order value $101-$500: 10% discount
- Order value $501-$1000: 15% discount
- Order value > $1000: 20% discount
- Maximum order value: $10,000

**Equivalence Classes:**

**Valid Classes:**
- **VEC1:** $0-$50 (No discount)
- **VEC2:** $51-$100 (5% discount)
- **VEC3:** $101-$500 (10% discount)
- **VEC4:** $501-$1000 (15% discount)
- **VEC5:** $1001-$10,000 (20% discount)

**Invalid Classes:**
- **IEC1:** Negative amount
- **IEC2:** Amount > $10,000
- **IEC3:** Zero amount
- **IEC4:** Non-numeric input
- **IEC5:** Special characters

**Test Cases:**

```
Valid Test Cases:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Order with no discount
Input: Order value = $30
Equivalence Class: VEC1
Calculation: $30 - 0% = $30
Expected: Final amount = $30.00

TC02: Order with 5% discount
Input: Order value = $75
Equivalence Class: VEC2
Calculation: $75 - 5% ($3.75) = $71.25
Expected: Final amount = $71.25

TC03: Order with 10% discount
Input: Order value = $250
Equivalence Class: VEC3
Calculation: $250 - 10% ($25) = $225
Expected: Final amount = $225.00

TC04: Order with 15% discount
Input: Order value = $750
Equivalence Class: VEC4
Calculation: $750 - 15% ($112.50) = $637.50
Expected: Final amount = $637.50

TC05: Order with 20% discount
Input: Order value = $5000
Equivalence Class: VEC5
Calculation: $5000 - 20% ($1000) = $4000
Expected: Final amount = $4000.00

Invalid Test Cases:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC06: Order with negative amount
Input: Order value = -$50
Equivalence Class: IEC1
Expected: Error "Order value cannot be negative"

TC07: Order exceeding maximum
Input: Order value = $15,000
Equivalence Class: IEC2
Expected: Error "Order value cannot exceed $10,000"

TC08: Order with zero value
Input: Order value = $0
Equivalence Class: IEC3
Expected: Error "Order value must be greater than zero"

TC09: Order with non-numeric value
Input: Order value = "abc"
Equivalence Class: IEC4
Expected: Error "Invalid order value"

TC10: Order with special characters
Input: Order value = "$100@"
Equivalence Class: IEC5
Expected: Error "Invalid format"

Total: 10 test cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.7 Advantages and Limitations of EP

**Advantages:**
✅ Reduces number of test cases dramatically
✅ Ensures systematic coverage
✅ Easy to understand and apply
✅ Cost-effective
✅ Identifies gaps in requirements
✅ Applicable to all testing levels

**Limitations:**
❌ Doesn't test boundary values (use BVA for that)
❌ May miss defects at partition boundaries
❌ Assumes all values in partition behave identically (may not always be true)
❌ Requires clear requirements
❌ Doesn't cover combinations (use decision tables)

---

## Boundary Value Analysis (BVA)

### 2.1 Concept and Theory

**Definition:** A test design technique that focuses on testing at the boundaries of equivalence partitions, as defects tend to lurk at the edges.

**Core Principle:**
Experience shows that defects most commonly occur at the boundaries of valid and invalid ranges rather than in the middle of ranges.

**Why Boundaries?**
```
Common Programming Errors:
- Off-by-one errors (using < instead of <=)
- Incorrect boundary conditions
- Rounding errors
- Buffer overflow at limits
```

**Example of Boundary Defect:**

```python
# Requirement: Age must be 18-65
# Buggy code:
if age > 18 and age < 65:  # Wrong! Should be >=18 and <=65
    return "Valid"
else:
    return "Invalid"

# This code rejects age 18 and 65 (boundary values)!
# Testing age=30 (middle value) would pass
# Testing age=18 or 65 (boundary values) would fail
```

---

### 2.2 Types of BVA

#### 2.2.1 Two-Value BVA

**Approach:** Test minimum and maximum boundary values only.

**For range [a, b]:**
- Test: a (min), b (max)

**Example:** Age range 18-65
- Test: 18, 65

---

#### 2.2.2 Three-Value BVA (Standard BVA)

**Approach:** Test boundary value, one value below, and one value above.

**For range [a, b]:**
- Test: a-1, a, a+1, b-1, b, b+1

**Example:** Age range 18-65
- Test: 17, 18, 19, 64, 65, 66

**Visual Representation:**
```
Invalid | Valid Range      | Invalid
--------|------------------|--------
   17   | 18  19 ... 64 65 |   66
   ↑    | ↑   ↑      ↑  ↑  |   ↑
  Min-1 | Min Min+1 Max-1 Max| Max+1
```

---

#### 2.2.3 Robust BVA

**Approach:** Extends standard BVA by testing invalid boundaries more thoroughly.

**For range [a, b]:**
- Test: far-below, a-1, a, a+1, mid-value, b-1, b, b+1, far-above

**Example:** Age range 18-65
- Test: 0, 17, 18, 19, 40, 64, 65, 66, 150

---

#### 2.2.4 Worst-Case BVA

**Approach:** For multiple inputs, test all combinations of boundary values.

**For two inputs with ranges [a1, b1] and [a2, b2]:**
- Test all combinations of boundary values

**Example:**
- Username: 5-50 characters
- Password: 8-20 characters

**Test combinations:**
- (5, 8), (5, 20), (50, 8), (50, 20)
- Plus invalid combinations

---

### 2.3 Step-by-Step Approach

**Step 1: Identify Input Ranges**
Determine min and max values for each input.

**Step 2: Choose BVA Type**
Select two-value, three-value, robust, or worst-case based on criticality.

**Step 3: Calculate Boundary Values**
For each boundary, calculate values to test.

**Step 4: Design Test Cases**
Create test cases for each boundary value.

---

### 2.4 Detailed Example 1: Input Field Validation

**Requirement:**
Product quantity field in shopping cart:
- Minimum: 1 item
- Maximum: 10 items
- Must be integer

**Standard BVA (Three-Value):**

**Boundary Values:**
- Minimum boundary: 1
  - Test: 0 (min-1), 1 (min), 2 (min+1)
- Maximum boundary: 10
  - Test: 9 (max-1), 10 (max), 11 (max+1)

**Test Cases:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Add product with quantity below minimum
Input: Quantity = 0
Boundary: Min - 1
Expected: Error "Quantity must be at least 1"
Priority: High (boundary test)

TC02: Add product with minimum quantity
Input: Quantity = 1
Boundary: Min
Expected: Product added with quantity 1
Priority: Critical (exact boundary)

TC03: Add product with quantity just above minimum
Input: Quantity = 2
Boundary: Min + 1
Expected: Product added with quantity 2
Priority: High (boundary test)

TC04: Add product with quantity just below maximum
Input: Quantity = 9
Boundary: Max - 1
Expected: Product added with quantity 9
Priority: High (boundary test)

TC05: Add product with maximum quantity
Input: Quantity = 10
Boundary: Max
Expected: Product added with quantity 10
Priority: Critical (exact boundary)

TC06: Add product with quantity above maximum
Input: Quantity = 11
Boundary: Max + 1
Expected: Error "Maximum quantity is 10"
Priority: High (boundary test)

Total: 6 test cases for complete boundary coverage
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Common Defects Found:**
```
✓ Off-by-one errors: Code allows 0 or 11
✓ Incorrect operators: Using < instead of <=
✓ Missing validation: Boundary checks not implemented
```

---

### 2.5 Detailed Example 2: Date Range Selection

**Requirement:**
Hotel booking system - stay duration:
- Minimum stay: 1 night
- Maximum stay: 30 nights
- Check-in: Today or future dates
- Check-out: After check-in date

**BVA for Stay Duration:**

**Boundaries:**
- Minimum: 1 night
- Maximum: 30 nights

**Test Values:**
```
Minimum Boundary:
- 0 nights (min-1) → Invalid
- 1 night (min) → Valid
- 2 nights (min+1) → Valid

Maximum Boundary:
- 29 nights (max-1) → Valid
- 30 nights (max) → Valid
- 31 nights (max+1) → Invalid
```

**Test Cases:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Book hotel for 0 nights (same check-in and check-out)
Check-in: Jan 15, 2026
Check-out: Jan 15, 2026
Duration: 0 nights (min-1)
Expected: Error "Minimum stay is 1 night"

TC02: Book hotel for 1 night
Check-in: Jan 15, 2026
Check-out: Jan 16, 2026
Duration: 1 night (min)
Expected: Booking successful

TC03: Book hotel for 2 nights
Check-in: Jan 15, 2026
Check-out: Jan 17, 2026
Duration: 2 nights (min+1)
Expected: Booking successful

TC04: Book hotel for 29 nights
Check-in: Jan 15, 2026
Check-out: Feb 13, 2026
Duration: 29 nights (max-1)
Expected: Booking successful

TC05: Book hotel for 30 nights
Check-in: Jan 15, 2026
Check-out: Feb 14, 2026
Duration: 30 nights (max)
Expected: Booking successful

TC06: Book hotel for 31 nights
Check-in: Jan 15, 2026
Check-out: Feb 15, 2026
Duration: 31 nights (max+1)
Expected: Error "Maximum stay is 30 nights"

Additional Boundary Test Cases:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC07: Book with check-in date in past
Check-in: Jan 1, 2026 (past date)
Check-out: Jan 5, 2026
Expected: Error "Check-in date cannot be in past"

TC08: Book with check-in today
Check-in: Today's date
Check-out: Tomorrow's date
Expected: Booking successful

TC09: Book with check-out before check-in
Check-in: Jan 20, 2026
Check-out: Jan 15, 2026
Expected: Error "Check-out must be after check-in"

Total: 9 test cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.6 Detailed Example 3: File Upload Size Limits

**Requirement:**
Document upload feature:
- Minimum file size: 1 KB
- Maximum file size: 5 MB (5120 KB)
- Supported formats: PDF, DOC, DOCX

**Robust BVA:**

**Boundary Values:**
```
Minimum Boundary:
- 0 KB (far below)
- 0.9 KB (min-1)
- 1 KB (min)
- 1.1 KB (min+1)

Maximum Boundary:
- 5119 KB (max-1)
- 5120 KB (max)
- 5121 KB (max+1)
- 10240 KB (far above / 10 MB)
```

**Test Cases:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Minimum Boundary Tests:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Upload 0 KB file (empty file)
File: empty.pdf (0 KB)
Boundary: Far below minimum
Expected: Error "File cannot be empty"

TC02: Upload file below minimum size
File: test.pdf (0.5 KB)
Boundary: Min - 1
Expected: Error "Minimum file size is 1 KB"

TC03: Upload file with minimum size
File: document.pdf (1 KB exactly)
Boundary: Min
Expected: File uploaded successfully

TC04: Upload file just above minimum
File: report.pdf (1.5 KB)
Boundary: Min + 1
Expected: File uploaded successfully

Maximum Boundary Tests:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC05: Upload file just below maximum
File: large.pdf (5119 KB)
Boundary: Max - 1
Expected: File uploaded successfully

TC06: Upload file with maximum size
File: maxsize.pdf (5120 KB / 5 MB exactly)
Boundary: Max
Expected: File uploaded successfully

TC07: Upload file just above maximum
File: toolarge.pdf (5121 KB)
Boundary: Max + 1
Expected: Error "Maximum file size is 5 MB"

TC08: Upload very large file
File: huge.pdf (10 MB)
Boundary: Far above maximum
Expected: Error "File size exceeds limit"

Additional Format Tests:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC09: Upload maximum size DOC file
File: document.doc (5120 KB)
Expected: File uploaded successfully

TC10: Upload maximum size unsupported format
File: image.jpg (5120 KB)
Expected: Error "Unsupported file format"

Total: 10 comprehensive boundary test cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.7 BVA with Multiple Inputs (Worst-Case)

**Requirement:**
Registration form:
- Username: 5-20 characters
- Password: 8-16 characters

**Worst-Case BVA:** Test all boundary combinations

**Boundary Values:**
- Username: 4, 5, 6, 19, 20, 21
- Password: 7, 8, 9, 15, 16, 17

**Combinations (partial set):**

```
Valid Combinations:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Min username, Min password
Username: "user5" (5 chars)
Password: "Pass1234" (8 chars)
Expected: Registration successful

TC02: Min username, Max password
Username: "user5" (5 chars)
Password: "Pass123456789012" (16 chars)
Expected: Registration successful

TC03: Max username, Min password
Username: "user12345678901234567" (20 chars)
Password: "Pass1234" (8 chars)
Expected: Registration successful

TC04: Max username, Max password
Username: "user12345678901234567" (20 chars)
Password: "Pass123456789012" (16 chars)
Expected: Registration successful

Invalid Combinations:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC05: Below min username, Valid password
Username: "usr4" (4 chars)
Password: "Pass1234" (8 chars)
Expected: Error "Username minimum 5 characters"

TC06: Valid username, Below min password
Username: "user5" (5 chars)
Password: "Pass123" (7 chars)
Expected: Error "Password minimum 8 characters"

TC07: Above max username, Valid password
Username: "user123456789012345678" (21 chars)
Password: "Pass1234" (8 chars)
Expected: Error "Username maximum 20 characters"

TC08: Valid username, Above max password
Username: "user5" (5 chars)
Password: "Pass12345678901234" (17 chars)
Expected: Error "Password maximum 16 characters"

Total: 8 test cases for worst-case boundary coverage
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.8 Advantages and Limitations of BVA

**Advantages:**
✅ Highly effective at finding defects
✅ Focuses on high-risk areas (boundaries)
✅ Relatively simple to apply
✅ Complements Equivalence Partitioning
✅ Industry standard technique
✅ Catches common programming errors

**Limitations:**
❌ Only applicable to ordered data (numbers, dates)
❌ Doesn't test combinations effectively
❌ May miss logic errors in middle of range
❌ Assumes boundaries are well-defined
❌ Can generate many test cases with multiple inputs

---

## Decision Table Testing

### 3.1 Concept and Theory

**Definition:** A test design technique that captures business rules involving combinations of conditions and corresponding actions.

**When to Use:**
- Complex business logic
- Multiple conditions affecting outcome
- Different combinations of inputs produce different outputs
- "If-then-else" scenarios
- Rule-based systems

**Structure of Decision Table:**

```
┌─────────────────────────────────────────────┐
│ Decision Table                              │
├─────────────────────────────────────────────┤
│ CONDITIONS    │ Rule1 │ Rule2 │ Rule3 │ ... │
│ Condition 1   │   T   │   T   │   F   │ ... │
│ Condition 2   │   T   │   F   │   T   │ ... │
│ Condition 3   │   F   │   T   │   F   │ ... │
├─────────────────────────────────────────────┤
│ ACTIONS       │       │       │       │     │
│ Action 1      │   X   │       │   X   │ ... │
│ Action 2      │       │   X   │       │ ... │
│ Action 3      │       │       │   X   │ ... │
└─────────────────────────────────────────────┘

T = True (Yes / Condition met)
F = False (No / Condition not met)
X = Action is taken
```

---

### 3.2 Step-by-Step Approach

**Step 1: Identify Conditions**
List all conditions that affect the decision.

**Step 2: Identify Actions**
List all possible actions/outcomes.

**Step 3: Calculate Rules**
Number of rules = 2^n (where n = number of conditions)

**Step 4: Fill the Table**
For each combination of conditions, determine the action.

**Step 5: Simplify (Optional)**
Reduce redundant rules where possible.

**Step 6: Create Test Cases**
One test case for each rule (column).

---

### 3.3 Detailed Example 1: Insurance Premium Calculation

**Requirement:**
Car insurance premium calculation:
- **Condition 1:** Age of driver
  - Under 25 years: Young driver
  - 25 years or above: Experienced driver
- **Condition 2:** Driving record
  - Clean record (no accidents)
  - Accidents in last 3 years
- **Condition 3:** Car value
  - Economy (< $20,000)
  - Luxury (>= $20,000)

**Actions:**
- Premium Level: Low, Medium, High, Very High

**Decision Table:**

```
┌───────────────────────────────────────────────────────────────┐
│                    Insurance Premium Decision Table            │
├───────────────────────────────────────────────────────────────┤
│ CONDITIONS          │ R1 │ R2 │ R3 │ R4 │ R5 │ R6 │ R7 │ R8 │
│──────────────────────────────────────────────────────────────┤
│ Age < 25            │ Y  │ Y  │ Y  │ Y  │ N  │ N  │ N  │ N  │
│ Has Accidents       │ Y  │ Y  │ N  │ N  │ Y  │ Y  │ N  │ N  │
│ Luxury Car          │ Y  │ N  │ Y  │ N  │ Y  │ N  │ Y  │ N  │
│──────────────────────────────────────────────────────────────┤
│ ACTIONS             │    │    │    │    │    │    │    │    │
│ Very High Premium   │ X  │    │    │    │ X  │    │    │    │
│ High Premium        │    │ X  │ X  │    │    │ X  │    │    │
│ Medium Premium      │    │    │    │ X  │    │    │ X  │    │
│ Low Premium         │    │    │    │    │    │    │    │ X  │
└───────────────────────────────────────────────────────────────┘
```

**Test Cases Derived:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Young driver, accidents, luxury car (Rule 1)
Input:
  - Age: 22 years (< 25)
  - Driving record: 2 accidents in last year
  - Car value: $45,000 (luxury)
Expected: Premium = VERY HIGH ($3,500/year)

TC02: Young driver, accidents, economy car (Rule 2)
Input:
  - Age: 23 years (< 25)
  - Driving record: 1 accident in last 2 years
  - Car value: $15,000 (economy)
Expected: Premium = HIGH ($2,200/year)

TC03: Young driver, clean record, luxury car (Rule 3)
Input:
  - Age: 24 years (< 25)
  - Driving record: Clean
  - Car value: $35,000 (luxury)
Expected: Premium = HIGH ($2,000/year)

TC04: Young driver, clean record, economy car (Rule 4)
Input:
  - Age: 22 years (< 25)
  - Driving record: Clean
  - Car value: $12,000 (economy)
Expected: Premium = MEDIUM ($1,200/year)

TC05: Experienced driver, accidents, luxury car (Rule 5)
Input:
  - Age: 35 years (>= 25)
  - Driving record: 1 accident 2 years ago
  - Car value: $50,000 (luxury)
Expected: Premium = VERY HIGH ($2,800/year)

TC06: Experienced driver, accidents, economy car (Rule 6)
Input:
  - Age: 30 years (>= 25)
  - Driving record: 2 accidents in last 3 years
  - Car value: $18,000 (economy)
Expected: Premium = HIGH ($1,800/year)

TC07: Experienced driver, clean record, luxury car (Rule 7)
Input:
  - Age: 40 years (>= 25)
  - Driving record: Clean
  - Car value: $40,000 (luxury)
Expected: Premium = MEDIUM ($1,000/year)

TC08: Experienced driver, clean record, economy car (Rule 8)
Input:
  - Age: 35 years (>= 25)
  - Driving record: Clean
  - Car value: $16,000 (economy)
Expected: Premium = LOW ($600/year)

Total: 8 test cases covering all possible combinations
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.4 Detailed Example 2: Loan Eligibility

**Requirement:**
Personal loan eligibility criteria:
- **Condition 1:** Annual Income
  - Low: < $30,000
  - Medium: $30,000 - $80,000
  - High: > $80,000
- **Condition 2:** Credit Score
  - Poor: < 600
  - Fair: 600-750
  - Excellent: > 750
- **Condition 3:** Existing Loan
  - Yes / No

**Actions:**
- Approve with low interest (4%)
- Approve with medium interest (8%)
- Approve with high interest (12%)
- Reject

**Simplified Decision Table (Practical Rules):**

```
┌──────────────────────────────────────────────────────────────┐
│                   Loan Eligibility Decision Table             │
├──────────────────────────────────────────────────────────────┤
│ CONDITIONS          │ R1 │ R2 │ R3 │ R4 │ R5 │ R6 │ R7 │ R8 │
│─────────────────────────────────────────────────────────────┤
│ Income Level        │ H  │ H  │ H  │ M  │ M  │ M  │ L  │ L  │
│ Credit Score        │ E  │ F  │ P  │ E  │ F  │ P  │ E  │ F/P│
│ Has Existing Loan   │ Y/N│ N  │ -  │ N  │ N  │ -  │ N  │ -  │
│─────────────────────────────────────────────────────────────┤
│ ACTIONS             │    │    │    │    │    │    │    │    │
│ Approve - Low 4%    │ X  │    │    │ X  │    │    │    │    │
│ Approve - Med 8%    │    │ X  │    │    │ X  │    │ X  │    │
│ Approve - High 12%  │    │    │ X  │    │    │ X  │    │    │
│ Reject              │    │    │    │    │    │    │    │ X  │
└──────────────────────────────────────────────────────────────┘

Legend:
H = High, M = Medium, L = Low
E = Excellent, F = Fair, P = Poor
Y = Yes, N = No, - = Doesn't matter
```

**Test Cases:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: High income, Excellent credit, Existing loan (R1)
Input:
  - Annual Income: $120,000
  - Credit Score: 800
  - Existing Loan: Yes ($10,000)
Expected: Approved with 4% interest rate

TC02: High income, Fair credit, No existing loan (R2)
Input:
  - Annual Income: $95,000
  - Credit Score: 680
  - Existing Loan: No
Expected: Approved with 8% interest rate

TC03: High income, Poor credit (R3)
Input:
  - Annual Income: $100,000
  - Credit Score: 550
  - Existing Loan: Yes
Expected: Approved with 12% interest rate

TC04: Medium income, Excellent credit, No existing loan (R4)
Input:
  - Annual Income: $55,000
  - Credit Score: 780
  - Existing Loan: No
Expected: Approved with 4% interest rate

TC05: Medium income, Fair credit, No existing loan (R5)
Input:
  - Annual Income: $45,000
  - Credit Score: 650
  - Existing Loan: No
Expected: Approved with 8% interest rate

TC06: Medium income, Poor credit (R6)
Input:
  - Annual Income: $50,000
  - Credit Score: 580
  - Existing Loan: No
Expected: Approved with 12% interest rate

TC07: Low income, Excellent credit, No existing loan (R7)
Input:
  - Annual Income: $25,000
  - Credit Score: 800
  - Existing Loan: No
Expected: Approved with 8% interest rate

TC08: Low income, Fair or Poor credit (R8)
Input:
  - Annual Income: $22,000
  - Credit Score: 620
  - Existing Loan: No
Expected: Loan application REJECTED

Total: 8 test cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

(Continuing with State Transition Testing and remaining sections...)

### 3.5 Decision Table Reduction

When decision tables become large (many conditions), you can reduce them by identifying "don't care" conditions.

**Example:**
If Action is same regardless of one condition's value, mark it as "-" (don't care).

This reduces the number of test cases needed while maintaining coverage.

---

### 3.6 Advantages and Limitations

**Advantages:**
✅ Handles complex business rules effectively
✅ Ensures all combinations considered
✅ Documents business logic clearly
✅ Easy to review with business stakeholders
✅ Identifies missing rules
✅ Eliminates redundancy

**Limitations:**
❌ Can become very large (2^n rules)
❌ Time-consuming for many conditions
❌ Not suitable for sequential processes
❌ Requires complete understanding of rules
❌ May need simplification for practicality

---

## State Transition Testing

### 4.1 Concept and Theory

**Definition:** A test design technique that models the system behavior as a set of states and transitions between those states based on events.

**Key Components:**
- **State:** A condition or situation during the life of an object
- **Transition:** Movement from one state to another
- **Event:** Something that triggers a transition
- **Action:** Activity performed during transition

**When to Use:**
- Systems with distinct states (ATM, call flow, order processing)
- Workflows with sequences
- State-dependent behavior
- Systems where past actions affect current behavior

**Representation:**
- State Transition Diagram (visual)
- State Transition Table (tabular)

---

### 4.2 State Transition Diagram

**Components:**
```
 [State A] ──event/action──> [State B]

[State]: Rounded rectangle
──>: Arrow showing transition
event: What causes the transition
action: What happens during transition
```

---

### 4.3 Detailed Example 1: ATM Machine

**Requirement:**
ATM Card Authentication System

**States:**
1. **Idle:** ATM waiting for card
2. **Card Inserted:** Card in slot, waiting for PIN
3. **PIN Entered:** PIN entered, waiting for validation
4. **Authenticated:** PIN correct, ready for transactions
5. **Blocked:** Card blocked after 3 failed attempts

**Events:**
- Insert Card
- Enter PIN
- PIN Correct
- PIN Incorrect
- Withdraw Cash
- Eject Card

**State Transition Diagram:**

```
                     Insert Card
      [Idle] ─────────────────────> [Card Inserted]
        ↑                                    │
        │                                    │ Enter PIN
        │                                    ↓
        │                              [PIN Entered]
        │                                    │
        │                                    ├──────> PIN Correct
        │                                    │           ↓
        │                                    │    [Authenticated]
        │                                    │           │
        │                                    │           │ Withdraw/Check Balance
        │                                    │           │ (stays in Authenticated)
        │                                    │           │
        │            Eject Card              │           │ Eject Card
        └────────────────────────────────────┴───────────┘
                                             │
                                    PIN Incorrect
                                    (count attempts)
                                             │
                              3rd failed attempt?
                                        Yes  │  No
                                             ↓   └──> Back to PIN Entered
                                       [Blocked]
                                             │
                                             │ (Card retained)
                                             ↓
                                         [Idle]
```

**State Transition Table:**

```
┌────────────────┬─────────────────┬─────────────────┬──────────────┐
│ Current State  │ Event           │ Next State      │ Action       │
├────────────────┼─────────────────┼─────────────────┼──────────────┤
│ Idle           │ Insert Card     │ Card Inserted   │ Display PIN  │
│                │                 │                 │ entry screen │
├────────────────┼─────────────────┼─────────────────┼──────────────┤
│ Card Inserted  │ Enter PIN       │ PIN Entered     │ Validate PIN │
│                │ (within 30s)    │                 │              │
│ Card Inserted  │ Timeout (30s)   │ Idle            │ Eject card   │
│ Card Inserted  │ Cancel          │ Idle            │ Eject card   │
├────────────────┼─────────────────┼─────────────────┼──────────────┤
│ PIN Entered    │ PIN Correct     │ Authenticated   │ Show menu    │
│ PIN Entered    │ PIN Incorrect   │ PIN Entered     │ Increment    │
│                │ (attempt < 3)   │                 │ attempt count│
│ PIN Entered    │ PIN Incorrect   │ Blocked         │ Retain card  │
│                │ (attempt = 3)   │                 │ Show message │
├────────────────┼─────────────────┼─────────────────┼──────────────┤
│ Authenticated  │ Withdraw Cash   │ Authenticated   │ Dispense cash│
│ Authenticated  │ Check Balance   │ Authenticated   │ Show balance │
│ Authenticated  │ Eject Card      │ Idle            │ Eject card   │
│ Authenticated  │ Timeout (60s)   │ Idle            │ Auto eject   │
├────────────────┼─────────────────┼─────────────────┼──────────────┤
│ Blocked        │ (Auto)          │ Idle            │ Card retained│
└────────────────┴─────────────────┴─────────────────┴──────────────┘
```

**Test Cases (Valid Transitions):**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Valid State Transitions:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Successful withdrawal flow
Steps:
1. Insert card (Idle → Card Inserted)
2. Enter correct PIN (Card Inserted → PIN Entered → Authenticated)
3. Select withdraw (Authenticated → Authenticated)
4. Eject card (Authenticated → Idle)
Expected: All transitions successful, cash dispensed

TC02: Check balance flow
Steps:
1. Insert card (Idle → Card Inserted)
2. Enter correct PIN (Card Inserted → Authenticated)
3. Check balance (Authenticated → Authenticated)
4. Eject card (Authenticated → Idle)
Expected: Balance displayed correctly

TC03: Timeout after card insertion
Steps:
1. Insert card (Idle → Card Inserted)
2. Wait 30 seconds without entering PIN
3. System timeout (Card Inserted → Idle)
Expected: Card ejected automatically

TC04: One incorrect PIN, then correct
Steps:
1. Insert card (Idle → Card Inserted)
2. Enter wrong PIN (Card Inserted → PIN Entered → PIN Entered)
   Display: "Incorrect PIN, 2 attempts remaining"
3. Enter correct PIN (PIN Entered → Authenticated)
4. Withdraw cash
5. Eject card
Expected: Successful transaction after one failed attempt

TC05: Session timeout after authentication
Steps:
1. Insert card and authenticate
2. Don't perform any action for 60 seconds
3. System timeout (Authenticated → Idle)
Expected: Card automatically ejected, session ended

Invalid State Transitions:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC06: Three incorrect PIN attempts (Card blocking)
Steps:
1. Insert card (Idle → Card Inserted)
2. Enter wrong PIN - Attempt 1 (Card Inserted → PIN Entered)
   Display: "Incorrect PIN, 2 attempts remaining"
3. Enter wrong PIN - Attempt 2 (PIN Entered → PIN Entered)
   Display: "Incorrect PIN, 1 attempt remaining"
4. Enter wrong PIN - Attempt 3 (PIN Entered → Blocked)
   Display: "Card blocked. Contact bank."
Expected: Card retained, account blocked

TC07: Attempt to withdraw without authentication
Steps:
1. Insert card (Idle → Card Inserted)
2. Try to select withdraw directly (should fail)
Expected: Not allowed, must authenticate first

TC08: Multiple withdrawals in single session
Steps:
1. Authenticate successfully
2. Withdraw $100 (Authenticated → Authenticated)
3. Withdraw $200 (Authenticated → Authenticated)
4. Withdraw $500 (Authenticated → Authenticated)
5. Eject card
Expected: All withdrawals successful if balance sufficient

Total: 8 test cases covering main state transitions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.4 Detailed Example 2: Order Processing System

**Requirement:**
E-commerce order lifecycle

**States:**
1. **New:** Order just placed
2. **Payment Pending:** Waiting for payment
3. **Payment Confirmed:** Payment received
4. **Processing:** Order being prepared
5. **Shipped:** Order dispatched
6. **Delivered:** Order received by customer
7. **Cancelled:** Order cancelled
8. **Returned:** Order returned by customer

**State Transition Diagram:**

```
  [New] ──Place Order──> [Payment Pending]
                              │
                    Payment Success   Payment Failed
                              ↓              ↓
                    [Payment Confirmed]  [Cancelled]
                              │
                     Start Processing
                              ↓
                        [Processing] ─────Cancel Order───> [Cancelled]
                              │
                          Ship Order
                              ↓
                         [Shipped] ────────Lost in Transit──> [Cancelled]
                              │
                      Delivery Confirmed
                              ↓
                        [Delivered]
                              │
                       Return Request
                              ↓
                         [Returned]
```

**Test Cases:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TC01: Successful order completion
Initial State: New
Steps:
1. Place order (New → Payment Pending)
2. Complete payment (Payment Pending → Payment Confirmed)
3. Start processing (Payment Confirmed → Processing)
4. Ship order (Processing → Shipped)
5. Confirm delivery (Shipped → Delivered)
Final State: Delivered
Expected: Order completed successfully

TC02: Payment failure
Initial State: New
Steps:
1. Place order (New → Payment Pending)
2. Payment fails (Payment Pending → Cancelled)
Final State: Cancelled
Expected: Order cancelled, notification sent

TC03: Order cancellation before shipping
Initial State: New
Steps:
1. Place order → Payment → Confirmed → Processing
2. Customer cancels (Processing → Cancelled)
Final State: Cancelled
Expected: Order cancelled, refund initiated

TC04: Order return after delivery
Initial State: New
Steps:
1. Complete order flow → Delivered
2. Customer requests return (Delivered → Returned)
Final State: Returned
Expected: Return processed, refund initiated after receipt

TC05: Invalid transition attempt
Initial State: New
Steps:
1. Place order (New → Payment Pending)
2. Attempt to mark as Shipped (should fail)
Expected: Transition not allowed, error message displayed

TC06: Lost in transit
Initial State: Processing
Steps:
1. Order shipped (Processing → Shipped)
2. Tracking shows lost (Shipped → Cancelled)
Final State: Cancelled
Expected: Automatic refund, replacement order option

Total: 6 test cases covering critical state transitions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.5 State Transition Coverage Criteria

**Coverage Levels:**

**1. All States Coverage (0-switch):**
Visit every state at least once.
- Minimum coverage
- May miss transition defects

**2. Valid Transitions Coverage (1-switch):**
Test every valid transition at least once.
- Standard approach
- Good coverage

**3. All Transitions Coverage:**
Test all valid and invalid transitions.
- Comprehensive coverage
- More test cases

**4. All Paths Coverage:**
Test all possible paths through states.
- Maximum coverage
- Often impractical (too many paths)

**Example - ATM Coverage:**

**All States Coverage (4 test cases):**
- TC1: Visit Idle
- TC2: Visit Card Inserted
- TC3: Visit Authenticated
- TC4: Visit Blocked

**Valid Transitions Coverage (8 test cases):**
- All transitions in state transition table

---

### 4.6 Advantages and Limitations

**Advantages:**
✅ Models real system behavior
✅ Identifies invalid transitions
✅ Good for sequential systems
✅ Visual and easy to understand
✅ Finds state-specific defects
✅ Documents system workflows

**Limitations:**
❌ Not suitable for all systems
❌ Can become complex with many states
❌ Requires clear state definition
❌ May miss condition-based logic
❌ Difficult for concurrent states

---

## Summary & Key Takeaways

### Day 3 Key Concepts:

1. **Equivalence Partitioning:**
   - Divide inputs into groups
   - Test one value per group
   - Reduces test cases dramatically

2. **Boundary Value Analysis:**
   - Test at boundaries (edges of ranges)
   - Catches off-by-one errors
   - Three-value BVA most common

3. **Decision Tables:**
   - Perfect for complex business rules
   - All condition combinations
   - Documents logic clearly

4. **State Transitions:**
   - Models system states and transitions
   - Tests workflows and sequences
   - Catches invalid state changes

### Technique Selection Guide:

```
Use EP/BVA when:
- Input ranges and boundaries
- Simple validation rules

Use Decision Tables when:
- Complex business rules
- Multiple conditions
- Rule-based systems

Use State Transitions when:
- Workflows and sequences
- State-dependent behavior
- System has distinct states
```

### Tomorrow's Preview:

Day 4 will cover:
- Use Case Testing
- Error Guessing
- Exploratory Testing Fundamentals
- White Box Testing (QA perspective)
- Experience-Based Techniques

---

**Congratulations on completing Day 3!**

**Daily Checklist:**
- ☐ Mastered 4 test design techniques
- ☐ Completed 8 practical exercises
- ☐ Scored 20/25 on assessment
- ☐ Practiced each technique on examples
- ☐ Ready for Day 4

**Study Time:** 4-5 hours

---

*End of Day 3 Study Guide*
