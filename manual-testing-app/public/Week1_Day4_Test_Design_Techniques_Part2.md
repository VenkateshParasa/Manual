# Day 4: Test Case Design Techniques - Part 2
## Comprehensive Study Guide

---

## Table of Contents
1. [Use Case Testing](#use-case-testing)
2. [Error Guessing](#error-guessing)
3. [Exploratory Testing Fundamentals](#exploratory-testing-fundamentals)
4. [White Box Testing - QA Perspective](#white-box-testing---qa-perspective)
5. [Experience-Based Techniques](#experience-based-techniques)
6. [Practical Exercises](#practical-exercises)
7. [Assessment Questions](#assessment-questions)

---

## Use Case Testing

### 1.1 Concept and Theory

**Definition:** A test design technique based on use cases, which describe interactions between actors (users) and the system to achieve specific goals.

**Use Case Components:**
- **Actor:** User or system interacting with the application
- **Precondition:** State before use case begins
- **Basic Flow:** Normal, successful path (happy path)
- **Alternate Flows:** Variations of the basic flow
- **Exception Flows:** Error conditions and how they're handled
- **Postcondition:** State after use case completes

**When to Use:**
- End-to-end testing
- User acceptance testing
- Requirements-based testing
- Integration testing
- System testing

---

### 1.2 Use Case Structure

**Template:**

```
Use Case ID: UC-001
Use Case Name: Purchase Product Online
Actor: Customer
Preconditions:
- User has registered account
- Products available in catalog
- Payment gateway operational

Basic Flow:
1. User logs into system
2. User searches for product
3. User views product details
4. User adds product to cart
5. User proceeds to checkout
6. User enters shipping address
7. User selects payment method
8. User confirms order
9. System processes payment
10. System displays order confirmation
11. System sends confirmation email

Alternate Flows:
A1: Guest Checkout (Step 1)
    - User selects "Guest Checkout"
    - User enters email address
    - Continue from Step 2

A2: Use Saved Address (Step 6)
    - User selects saved address from list
    - Continue from Step 7

A3: Apply Discount Code (Step 8)
    - User enters discount code
    - System validates and applies discount
    - Continue from Step 9

Exception Flows:
E1: Product Out of Stock (Step 4)
    - System displays "Out of Stock"
    - User cannot add to cart
    - Use case ends

E2: Payment Fails (Step 9)
    - System displays payment error
    - User can retry or change payment method
    - Return to Step 7

E3: Network Error (Any step)
    - System displays error message
    - User can retry
    - System restores session state

Postconditions:
Success: Order placed, payment processed, confirmation sent
Failure: No order created, no charge made
```

---

### 1.3 Detailed Example 1: Online Banking Transfer

**Use Case: Transfer Money Between Accounts**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USE CASE: Transfer Funds
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ID: UC-BANK-001
Actor: Account Holder
Goal: Transfer money from one account to another

Preconditions:
✓ User is authenticated
✓ User has at least 2 accounts
✓ Source account has sufficient balance
✓ Transfer limits not exceeded today

BASIC FLOW (Happy Path):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. User navigates to "Transfer Funds" section
2. System displays list of user's accounts
3. User selects source account (Checking - $5,000)
4. User selects destination account (Savings)
5. User enters amount ($1,000)
6. User enters transfer note (optional): "Monthly savings"
7. System displays transfer summary:
   - From: Checking Account ****1234
   - To: Savings Account ****5678
   - Amount: $1,000.00
   - Fee: $0.00
   - Total: $1,000.00
8. User clicks "Confirm Transfer"
9. System validates transfer
10. System deducts $1,000 from Checking
11. System adds $1,000 to Savings
12. System displays success message with reference number
13. System sends confirmation email
14. System updates transaction history

Result: Transfer successful
Time: < 30 seconds

ALTERNATE FLOWS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A1: Schedule Future Transfer (at Step 5)
    5a. User selects "Schedule for later"
    5b. User picks date (e.g., "Jan 15, 2026")
    5c. User picks time (e.g., "9:00 AM")
    5d. Continue to Step 6
    Result: Transfer scheduled, executed on specified date

A2: Recurring Transfer (at Step 5)
    5a. User selects "Make Recurring"
    5b. User selects frequency (Weekly/Monthly)
    5c. User selects start date and end date
    5d. Continue to Step 6
    Result: Recurring transfer set up

A3: Transfer to External Account (at Step 4)
    4a. User selects "External Account"
    4b. User enters routing number
    4c. User enters account number
    4d. System validates account (2-3 business days)
    4e. Continue to Step 5
    Result: External transfer initiated (takes 2-3 days)

EXCEPTION FLOWS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E1: Insufficient Funds (at Step 9)
    9a. System checks balance: $800 available
    9b. System displays error:
        "Insufficient funds. Available: $800.00"
    9c. User can modify amount or cancel
    9d. Return to Step 5 OR End use case
    Result: Transfer not completed

E2: Daily Limit Exceeded (at Step 9)
    9a. System checks daily transfer limit
    9b. User has already transferred $4,000 today
    9c. Daily limit is $5,000
    9d. Requested $1,500 exceeds remaining $1,000
    9e. System displays:
        "Daily limit exceeded. Remaining limit: $1,000"
    9f. User can transfer up to $1,000 or schedule for tomorrow
    Result: Transfer blocked or reduced

E3: Same Account Selected (at Step 4)
    4a. User selects same account for source and destination
    4b. System displays error:
        "Cannot transfer to same account"
    4c. Return to Step 3
    Result: Must select different account

E4: System Timeout (at Step 9)
    9a. Payment processing takes > 30 seconds
    9b. System times out
    9c. Transaction rolled back
    9d. System displays: "Request timed out. Please try again"
    9e. User can retry
    Result: No transfer made, retry available

E5: Account Frozen (at Step 9)
    9a. System detects account is frozen
    9b. System displays: "Account temporarily locked. Contact support"
    9c. Use case ends
    Result: Transfer blocked, manual intervention needed

Postconditions:
Success:
- Balance updated in both accounts
- Transaction recorded in history
- Email notification sent
- Reference number generated

Failure:
- No balance change
- Error logged
- User notified of reason
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Test Cases from Use Case:**

```
TC01: Basic Flow - Successful Transfer
Precondition: User logged in, 2 accounts with sufficient balance
Steps: Follow Basic Flow Steps 1-14
Expected: Transfer successful, confirmation received
Priority: P0 (Critical)

TC02: Alternate Flow - Schedule Future Transfer
Steps: Follow A1 - Schedule for Jan 15, 2026, 9:00 AM
Expected: Transfer scheduled, executes on Jan 15
Priority: P1

TC03: Alternate Flow - Recurring Monthly Transfer
Steps: Follow A2 - Monthly, 1st of each month, 12 months
Expected: 12 transfers scheduled
Priority: P1

TC04: Exception Flow - Insufficient Funds
Precondition: Source account balance = $500
Steps: Try to transfer $1,000
Expected: Error message, transfer blocked
Priority: P0

TC05: Exception Flow - Daily Limit Exceeded
Precondition: Already transferred $4,800 today, limit = $5,000
Steps: Try to transfer $500
Expected: Error "Remaining limit: $200", transfer blocked
Priority: P0

TC06: Exception Flow - Same Account Transfer
Steps: Select Checking as both source and destination
Expected: Error message, cannot proceed
Priority: P1

TC07: Exception Flow - System Timeout
Steps: Simulate network delay > 30 seconds during processing
Expected: Timeout error, transaction rolled back
Priority: P0

Total: 7 test cases covering all flows
```

---

### 1.4 Detailed Example 2: Hotel Room Booking

**Use Case: Book Hotel Room**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USE CASE: Book Hotel Room
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ID: UC-HOTEL-001
Actor: Guest
Goal: Reserve a hotel room for specific dates

BASIC FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Guest enters destination: "New York, NY"
2. Guest enters check-in date: "Mar 15, 2026"
3. Guest enters check-out date: "Mar 18, 2026"
4. Guest enters number of guests: 2 adults
5. Guest clicks "Search"
6. System displays available hotels with:
   - Hotel name, rating, price per night
   - 150 hotels found
7. Guest filters by: 4-star, $150-$250/night, Pool
8. System shows 12 matching hotels
9. Guest selects "Grand Hotel Manhattan"
10. System displays:
    - Room types available
    - King Room: $199/night
    - Double Queen: $189/night
11. Guest selects "King Room"
12. Guest selects "1 room"
13. System displays booking summary:
    - Hotel: Grand Hotel Manhattan
    - Check-in: Mar 15, 2026 (3:00 PM)
    - Check-out: Mar 18, 2026 (11:00 AM)
    - Nights: 3
    - Room: King Room x 1
    - Rate: $199/night
    - Subtotal: $597
    - Taxes & Fees: $89.55
    - Total: $686.55
14. Guest enters personal details:
    - Name, Email, Phone
15. Guest enters payment details
16. Guest clicks "Complete Booking"
17. System processes payment
18. System creates reservation
19. System displays confirmation:
    - Booking ID: HB-2026-12345
    - Confirmation sent to email
20. System sends confirmation email with:
    - Booking details
    - Cancellation policy
    - Hotel contact info

ALTERNATE FLOWS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A1: Add Special Requests (at Step 13)
    13a. Guest clicks "Special Requests"
    13b. Guest enters: "Late check-in after 10 PM"
    13c. Guest adds: "High floor, quiet room"
    13d. Continue to Step 14

A2: Login to Use Saved Details (before Step 14)
    14a. Guest clicks "Login"
    14b. Guest enters credentials
    14c. System auto-fills personal and payment details
    14d. Continue to Step 16

A3: Apply Promo Code (at Step 13)
    13a. Guest enters code: "SPRING20"
    13b. System validates code: 20% off
    13c. New Total: $549.24 (saved $137.31)
    13d. Continue to Step 14

A4: Book Multiple Rooms (at Step 12)
    12a. Guest selects "2 rooms"
    12b. Subtotal updates: $597 × 2 = $1,194
    12c. Continue to Step 13

EXCEPTION FLOWS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
E1: No Rooms Available (at Step 6)
    6a. System finds no available rooms
    6b. System displays:
        "No rooms available for selected dates"
    6c. System suggests:
        - Nearby dates with availability
        - Nearby hotels
    6d. Guest can modify search or end

E2: Room No Longer Available (at Step 17)
    17a. Someone else booked the last room
    17b. System displays:
        "Room no longer available"
    17c. System shows alternative rooms
    17d. Guest can select alternative or cancel

E3: Payment Declined (at Step 17)
    17a. Payment gateway returns error
    17b. System displays:
        "Payment declined. Please try another card"
    17c. Guest can retry or use different payment
    17d. Return to Step 15

E4: Invalid Dates (at Step 2-3)
    3a. Check-out date before check-in date
    3b. System displays:
        "Check-out must be after check-in"
    3c. Return to Step 2

E5: Promo Code Invalid (at A3)
    A3b. System validates code: Not found or expired
    A3c. System displays:
         "Invalid promo code"
    A3d. Continue without discount

Postconditions:
Success: Booking confirmed, payment charged, confirmation sent
Failure: No booking, no charge, error displayed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Test Cases:**

```
TC01: Basic Flow - Complete Booking
Steps: Execute all 20 steps of basic flow
Expected: Booking successful, confirmation received
Test Data: NYC, Mar 15-18, 2 adults, King Room
Priority: P0

TC02: Alternate - Special Requests
Steps: Basic flow + Add special requests
Expected: Requests noted in confirmation
Priority: P1

TC03: Alternate - Login and Auto-fill
Steps: Login before entering details
Expected: Personal/payment details auto-filled
Priority: P1

TC04: Alternate - Apply Valid Promo Code
Steps: Enter code "SPRING20"
Expected: 20% discount applied, total reduced
Priority: P1

TC05: Exception - No Rooms Available
Test Data: Popular dates, no availability
Expected: "No rooms available" message, suggestions shown
Priority: P0

TC06: Exception - Payment Declined
Steps: Use test card that always declines
Expected: Error message, can retry
Priority: P0

TC07: Exception - Invalid Dates
Steps: Check-out = Mar 14, Check-in = Mar 15
Expected: Error "Check-out must be after check-in"
Priority: P0
```

---

### 1.5 Advantages and Limitations

**Advantages:**
- ✅ End-to-end coverage
- ✅ Business perspective
- ✅ Realistic scenarios
- ✅ Covers happy path and exceptions
- ✅ Easy for stakeholders to understand
- ✅ Derives from requirements

**Limitations:**
- ❌ Time-consuming to create
- ❌ May miss non-functional aspects
- ❌ Requires detailed use cases
- ❌ Can become outdated
- ❌ May not cover all edge cases

---

## Error Guessing

### 2.1 Concept and Theory

**Definition:** An experience-based test design technique where testers use their experience and intuition to anticipate where defects might occur.

**Based on:**
- Past experience with similar applications
- Knowledge of common error patterns
- Understanding of technology limitations
- Awareness of typical developer mistakes
- Industry best practices

**When to Use:**
- Complement to formal techniques
- Time-constrained situations
- Exploratory testing
- After requirements-based testing
- New feature testing

---

### 2.2 Common Error-Prone Areas

**1. Input Fields:**
```
Common Errors to Test:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Empty input
✓ Whitespace only ("   ")
✓ Very long input (>10,000 characters)
✓ Special characters: <, >, &, ', ", %, ;, --
✓ SQL injection: ' OR '1'='1
✓ XSS: <script>alert('XSS')</script>
✓ Null values
✓ Leading/trailing spaces
✓ Unicode characters: 你好, مرحبا, 🎉
✓ Copy-paste vs typing
✓ Input using keyboard shortcuts (Ctrl+A, Ctrl+V)
```

**2. Numeric Fields:**
```
Common Errors:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Zero (0)
✓ Negative numbers (-100)
✓ Very large numbers (999999999999)
✓ Decimal numbers where integer expected (5.5)
✓ Leading zeros (007)
✓ Scientific notation (1e10)
✓ Currency symbols ($100)
✓ Commas in numbers (1,000)
```

**3. Date Fields:**
```
Common Errors:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Feb 29 on non-leap years (Feb 29, 2025)
✓ Feb 30, Feb 31 (invalid dates)
✓ Dec 32 (invalid date)
✓ Past dates where future expected
✓ Future dates where past expected
✓ Dates 100 years in future
✓ Dates in the year 1900
✓ Different date formats (MM/DD/YYYY vs DD/MM/YYYY)
✓ Time zone changes (daylight saving)
```

**4. File Uploads:**
```
Common Errors:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Empty file (0 bytes)
✓ Extremely large file (> 1 GB)
✓ Wrong file format (PDF where JPEG expected)
✓ Corrupted file
✓ File with same name as existing
✓ File with special characters in name (test%file.pdf)
✓ File with very long name (>255 characters)
✓ Upload while disconnected
✓ Upload same file twice simultaneously
```

**5. Passwords:**
```
Common Errors:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ All lowercase: password123
✓ All uppercase: PASSWORD123
✓ All numbers: 12345678
✓ Only special characters: !@#$%^&*
✓ Spaces in password: "pass word"
✓ Common passwords: password, 123456, qwerty
✓ Password = Username
✓ Very long password (>100 characters)
```

---

### 2.3 Detailed Example: E-commerce Shopping Cart

**Feature:** Shopping Cart

**Error Guessing Checklist:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUANTITY ERRORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EG-TC01: Update quantity to 0
Action: Change quantity from 2 to 0
Expected: Item removed from cart (or error)
Reason: Common to confuse 0 with "remove"

EG-TC02: Update quantity to negative (-5)
Action: Enter -5 in quantity field
Expected: Error "Quantity must be positive"
Reason: Negative inventory would break system

EG-TC03: Update quantity to 999,999
Action: Enter very large quantity
Expected: Error "Maximum quantity exceeded" OR
          "Insufficient stock"
Reason: Stock validation might fail

EG-TC04: Update quantity to decimal (2.5)
Action: Enter 2.5 as quantity
Expected: Error "Quantity must be whole number"
Reason: Can't ship half a product

EG-TC05: Update quantity using copy-paste
Action: Copy "100" from somewhere, paste in quantity
Expected: Should work same as typing
Reason: Paste events sometimes not captured

PRICE CALCULATION ERRORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EG-TC06: Add item, apply discount, remove item
Steps:
1. Add Item A ($50)
2. Add Item B ($30)
3. Apply 10% discount
4. Remove Item A
Expected: Discount recalculated on remaining items
Reason: Discount might not adjust

EG-TC07: Multiple discount codes
Steps:
1. Add item ($100)
2. Apply code "SAVE10" (10% off)
3. Apply code "SAVE20" (20% off)
Expected: Only one code allowed OR
          Codes combined correctly
Reason: Multiple discounts cause calculation errors

EG-TC08: Item price changes while in cart
Steps:
1. Add item to cart ($100)
2. Admin changes price to $80
3. User proceeds to checkout
Expected: Price updates OR locked at add time
Reason: Price synchronization issues

CONCURRENT USER ERRORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EG-TC09: Same user, two browsers
Steps:
1. Login in Chrome, add Item A
2. Login in Firefox, add Item B
3. Check cart in both browsers
Expected: Cart synced across browsers
Reason: Session management issues

EG-TC10: Add last item from two devices
Steps:
1. Stock = 1 for Product X
2. User A adds to cart (Device 1)
3. User B adds to cart (Device 2)
4. Both checkout
Expected: Only one succeeds OR
          Both get stock warning
Reason: Race condition

SESSION/STORAGE ERRORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EG-TC11: Session timeout with items in cart
Steps:
1. Add 5 items to cart
2. Leave browser idle for 30 minutes
3. Try to checkout
Expected: Session expired message OR
          Cart preserved, re-login required
Reason: Session management

EG-TC12: Clear browser cache with cart items
Steps:
1. Add items to cart
2. Clear browser cache/cookies
3. Reload page
Expected: Cart empty (if using cookies) OR
          Cart preserved (if server-side)
Reason: Data storage location matters

PRODUCT AVAILABILITY ERRORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EG-TC13: Product discontinued while in cart
Steps:
1. Add product to cart
2. Admin marks product discontinued
3. User proceeds to checkout
Expected: Warning "Product no longer available"
Reason: Sync between catalog and cart

EG-TC14: Product out of stock at checkout
Steps:
1. Add last 5 units to cart
2. Another user buys 3 units
3. First user proceeds to checkout
Expected: Warning "Only 2 units available"
Reason: Stock not reserved until purchase

SPECIAL CHARACTER ERRORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EG-TC15: Promo code with special characters
Input: Code = "SAVE&WIN<>20%"
Expected: Should validate properly OR
          Sanitize input
Reason: XSS vulnerability

BACK BUTTON ERRORS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EG-TC16: Complete order, click Back button
Steps:
1. Complete checkout successfully
2. Click browser Back button
3. Arrive at payment page
4. Click Submit again
Expected: Prevent duplicate order OR
          Show "Order already placed"
Reason: Double-charging customers

Total: 16 error guessing test cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.4 Industry-Specific Error Patterns

**Banking/Financial:**
```
✓ Concurrent transactions on same account
✓ Transfer amount = exact account balance
✓ Transaction during month-end processing
✓ Interest calculation on Feb 29
✓ Rounding errors in currency conversion
✓ Transaction exactly at midnight (timezone)
```

**E-commerce:**
```
✓ Multiple tabs with same cart
✓ Checkout with expired credit card
✓ Apply gift card worth more than order
✓ Order with mixed in-stock and out-of-stock items
✓ Change shipping address after payment
```

**Healthcare:**
```
✓ Patient with same name as another patient
✓ Prescription with allergy to medication
✓ Appointment on holiday/weekend
✓ Age = 0 (newborn)
✓ Medical record number with leading zeros
```

---

### 2.5 Advantages and Limitations

**Advantages:**
- ✅ Quick to apply
- ✅ Leverages experience
- ✅ Finds unexpected defects
- ✅ Complements formal techniques
- ✅ No documentation needed
- ✅ Cost-effective

**Limitations:**
- ❌ Depends on tester's experience
- ❌ Not systematic
- ❌ Hard to measure coverage
- ❌ May miss obvious scenarios
- ❌ Not repeatable
- ❌ Difficult for new testers

---

## Exploratory Testing Fundamentals

### 3.1 Concept and Theory

**Definition:** Simultaneous test design, test execution, and learning, where the tester actively controls the design of tests as they are performed.

**Key Characteristics:**
- **Simultaneous:** Design and execution happen together
- **Interactive:** Learning influences next actions
- **Creative:** Tester uses intelligence and intuition
- **Adaptive:** Changes approach based on findings
- **Investigative:** Asks "what if" questions

**Exploratory vs Scripted Testing:**

```
Scripted Testing:
1. Design test cases (Day 1)
2. Review test cases (Day 2)
3. Execute test cases (Day 3-5)
4. Report results (Day 6)

Exploratory Testing:
1. Design + Execute + Learn + Report (All together)
   - Observe behavior
   - Form hypothesis
   - Test hypothesis
   - Learn from results
   - Adapt approach
```

---

### 3.2 When to Use Exploratory Testing

**Ideal Scenarios:**
- ✅ New features with limited documentation
- ✅ Time-constrained testing
- ✅ Supplement to scripted testing
- ✅ Learning the application
- ✅ Finding edge cases
- ✅ After automated tests run
- ✅ Risk-based testing

**Not Ideal:**
- ❌ Regulatory compliance testing
- ❌ When complete documentation required
- ❌ Repeatable regression testing
- ❌ Inexperienced testers
- ❌ Large-scale coverage requirements

---

### 3.3 Exploratory Testing Techniques

#### 3.3.1 Charters (Session-Based Testing)

**Charter Template:**
```
EXPLORE: [Target area]
WITH: [Resources/tools]
TO DISCOVER: [Information/risks]
TIME BOX: [Duration]
```

**Example Charter:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPLORATORY TESTING CHARTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Charter ID: ET-001
Date: January 5, 2026
Tester: John Doe

EXPLORE: Shopping cart functionality
WITH: Desktop browser (Chrome), test account, various products
TO DISCOVER: Calculation errors, UI issues, performance problems
TIME BOX: 90 minutes

SESSION NOTES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Start Time: 10:00 AM
End Time: 11:30 AM
Actual Duration: 90 minutes

WHAT I TESTED:
1. Adding various products to cart (10-15 minutes)
   - Single item
   - Multiple quantities
   - Different product types

2. Cart calculations (20 minutes)
   - Subtotal accuracy
   - Tax calculation
   - Discount codes
   - Shipping costs

3. Cart persistence (15 minutes)
   - Logout and login
   - Browser refresh
   - Multiple tabs

4. Edge cases (30 minutes)
   - Maximum quantity (tested up to 1000)
   - Price = $0.01 (minimum price)
   - Price = $99,999 (very high price)
   - Special characters in promo codes

5. Performance (15 minutes)
   - Cart with 50 items
   - Rapid add/remove operations

ISSUES FOUND:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BUG-401 (High): Tax calculated incorrectly for international shipping
- Reproduction: Add item, select Canada as country
- Expected: 13% tax (HST)
- Actual: 0% tax applied
- Impact: Revenue loss

BUG-402 (Medium): Cart not updating when product price changes
- Reproduction: Admin changes price while item in cart
- Expected: Price updates automatically
- Actual: Shows old price until page refresh

BUG-403 (Low): Promo code case-sensitive
- Reproduction: Enter "save10" instead of "SAVE10"
- Expected: Should work (case-insensitive)
- Actual: "Invalid code" error

OBSERVATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Cart handles 50+ items well, no performance issues
✓ Discount codes stack (might be intentional?)
✓ Removed items show in "Recently Removed" (good UX)
⚠ No warning when stock runs low
⚠ Cart doesn't show estimated delivery date

IDEAS FOR NEXT SESSION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Test cart with mixed physical and digital products
- Explore guest checkout vs logged-in cart
- Test concurrent cart modifications (two browsers)
- Check cart behavior during site maintenance

COVERAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Setup: 10%
Testing: 75%
Bug Investigation: 10%
Reporting: 5%

CONFIDENCE LEVEL: Medium
- Core functionality works well
- Found calculation issues
- Need more testing on edge cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

#### 3.3.2 Testing Tours (FCC CUTS VIDS)

**Guideline:** Different "tours" of the application, each with specific focus.

**FEATURE TOUR:**
Focus on each feature one by one
- Test all aspects of shopping cart
- Then move to checkout
- Then payment processing
- Systematic feature coverage

**COMPLEXITY TOUR:**
Focus on complex, challenging areas
- Multi-step workflows
- Complex calculations
- Integration points
- Configuration-dependent behavior

**CLAIMS TOUR:**
Test marketing claims and documentation
- "Lightning fast checkout"
- "Supports 50+ payment methods"
- "Mobile-responsive design"
- Verify all claims are true

**USER TOUR:**
Follow real user workflows
- New user first-time purchase
- Returning customer repeat purchase
- Power user with advanced features
- User persona-based testing

**TESTABILITY TOUR:**
Explore how testable the application is
- Error messages clarity
- Log file availability
- Debug modes
- API access for testing

**SCENARIO TOUR:**
Test realistic user scenarios
- Buy gift for friend
- Shop during sale
- Use coupon code
- Return defective product

**VARIABILITY TOUR:**
Vary inputs and configurations
- Different browsers
- Different screen sizes
- Different user roles
- Different data sets

**INTEROPERABILITY TOUR:**
Test integration with other systems
- Payment gateways
- Shipping providers
- Email services
- Third-party APIs

**DATA TOUR:**
Focus on data handling
- Large data sets
- Empty data
- Special characters in data
- Data validation

**STRUCTURE TOUR:**
Follow code/architecture structure
- Test each module
- Test each API endpoint
- Test each database table
- Technical architecture-based

---

### 3.4 Practical Example: Exploratory Session

**Application:** Online Food Delivery App

**90-Minute Exploratory Session:**

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHARTER: Explore food ordering flow
TIME: 90 minutes
TESTER: Sarah Johnson
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MINUTES 0-15: SETUP & INITIAL EXPLORATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10:00-10:05: Create test account, login
10:05-10:10: Browse homepage, understand layout
10:10-10:15: Search for restaurants

First Observation: Homepage loads slowly (5 seconds)
Action: Note for performance testing

MINUTES 15-35: FEATURE TOUR - Restaurant Selection
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10:15-10:20: Filter restaurants (by cuisine, rating, delivery time)
Finding: Filter by "Vegan" shows non-vegan restaurants
→ BUG-501: Filter not working correctly

10:20-10:25: Sort restaurants (by distance, rating, delivery time)
Observation: Sorting works well

10:25-10:30: Select "Mario's Pizza" restaurant
10:30-10:35: Browse menu

Question: What if restaurant closes while I'm ordering?
→ Test this scenario

MINUTES 35-55: USER TOUR - Complete Order Flow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10:35-10:40: Add items to cart
- Large Pizza ($18)
- Garlic Bread ($5)
- Soda ($2)

10:40-10:42: Modify quantities
Finding: Clicking "+" button twice quickly causes quantity to jump to 5
→ BUG-502: Race condition in quantity update

10:42-10:45: Add special instructions
Input: "Extra cheese, no olives, deliver to back door"
Character limit: 200 characters
Observation: Good UX, shows character count

10:45-10:50: Proceed to checkout
- Enter delivery address
- Select delivery time: "ASAP"
- Add tip: 15%

Finding: Tip calculator shows $3.75 but should be $3.75
(Wait... let me recalculate: $25 * 15% = $3.75)
Observation: Correct, no issue

10:50-10:55: Payment
- Enter credit card (test card)
- Apply promo code "FIRST10"

Finding: Promo code applies BEFORE tax (should be after?)
→ Question for product team: Is this intentional?

MINUTES 55-70: VARIABILITY TOUR - Edge Cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10:55-11:00: Test with minimum order ($1 item)
Finding: Error "Minimum order $10"
Observation: Good validation

11:00-11:05: Test with very large order (50 items)
Observation: Cart handles well, calculates correctly
Performance: No lag

11:05-11:10: Test with address variations
- Address with apartment number: Works
- Address with special characters: Works
- Empty address: Good validation error

11:10-11:15: Test scheduled delivery
- Select "Tomorrow, 7:00 PM"
- Calendar shows available slots

Finding: Can select past time (today, 9:00 AM - it's 11:15 AM)
→ BUG-503: Past time selectable for same-day delivery

MINUTES 70-85: CLAIMS TOUR & INTEROPERABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11:15-11:20: Test claim: "Real-time order tracking"
- Place order
- Check tracking page
Observation: Shows "Order received" immediately
→ Good

11:20-11:23: Test claim: "30-minute delivery guarantee"
Observation: Displays estimated time: 25-35 minutes
Question: How is guarantee enforced?

11:23-11:25: Test third-party payment (Google Pay)
Finding: Google Pay button not working in Chrome
→ BUG-504: Google Pay integration broken

MINUTES 85-90: WRAP-UP & DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11:25-11:30: Log all bugs, complete session notes

SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bugs Found: 4
- BUG-501 (Medium): Vegan filter shows non-vegan restaurants
- BUG-502 (Low): Quantity double-increment on rapid clicks
- BUG-503 (High): Past time selectable for delivery
- BUG-504 (Critical): Google Pay not working

Observations: 8
Questions for Team: 2

Test Coverage:
- Ordering flow: 80%
- Payment methods: 50% (only tested 2 of 4)
- Delivery options: 70%

Next Session Ideas:
- Test order cancellation
- Test on mobile app
- Test customer support chat
- Test restaurant-side app
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.5 Documentation in Exploratory Testing

**Methods:**

**1. Mind Maps:**
```


        Food Delivery App
               |
    ┌──────────┼──────────┐
    |          |          |
Restaurant  Ordering   Payment
Selection    Flow      Methods
    |          |          |
  Filter    Cart      Credit Card
  Sort      Quantity   Google Pay
  Search    Modify     PayPal
            Special
            Instructions
```

**2. Session Sheets:**
Documented above in 3.4

**3. Screen Recordings:**
- Record entire session
- Review later for details
- Share with team

**4. Annotated Screenshots:**
- Capture issues immediately
- Add notes/arrows
- Quick bug reporting

---

### 3.6 Advantages and Limitations

**Advantages:**
- ✅ Flexible and adaptive
- ✅ Quick feedback
- ✅ Finds unexpected issues
- ✅ Learning while testing
- ✅ Good for new features
- ✅ Complements automation

**Limitations:**
- ❌ Depends on tester skill
- ❌ Hard to measure coverage
- ❌ Not fully repeatable
- ❌ Requires experienced testers
- ❌ Documentation overhead
- ❌ May miss obvious test cases

---

## White Box Testing - QA Perspective

### 4.1 Understanding White Box Testing

**Definition:** Testing based on analysis of internal structure, code, and logic of the application.

**Also Known As:**
- Structural testing
- Glass box testing
- Clear box testing
- Code-based testing

**QA Role:**
- Understand the concepts
- Review code coverage reports
- Collaborate with developers
- Suggest additional test scenarios
- Verify unit test quality

---

### 4.2 Code Coverage Types

#### 4.2.1 Statement Coverage

**Definition:** Percentage of code statements executed during testing.

**Formula:**
```
Statement Coverage = (Statements Executed / Total Statements) × 100%
```

**Example Code:**
```python
def calculate_grade(score):
    if score >= 90:              # Statement 1
        return "A"               # Statement 2
    elif score >= 80:            # Statement 3
        return "B"               # Statement 4
    elif score >= 70:            # Statement 5
        return "C"               # Statement 6


    else:                        # Statement 7
        return "F"               # Statement 8
```

**Test Case 1:**
```


Input: score = 95
Path: Statement 1 → Statement 2
Coverage: 2/8 = 25%
```

**To Achieve 100% Statement Coverage:**
```
Test 1: score = 95  (covers statements 1, 2)
Test 2: score = 85  (covers statements 3, 4)
Test 3: score = 75  (covers statements 5, 6)
Test 4: score = 60  (covers statements 7, 8)

Total Coverage: 8/8 = 100%
```

---

#### 4.2.2 Branch/Decision Coverage

**Definition:** Percentage of decision points (if, while, for) tested for both true and false outcomes.

**Example Code:**
```python
def check_eligibility(age, income):
    if age >= 18:                    # Decision 1
        if income >= 30000:          # Decision 2


            return "Eligible"
        else:
            return "Low Income"
    else:
        return "Underage"
```

**Decision Table:**
```


Decision 1 (age >= 18):  True or False
Decision 2 (income >= 30000): True or False

Test Cases for 100% Branch Coverage:
TC1: age=20, income=40000  → D1=True, D2=True  → "Eligible"
TC2: age=20, income=20000  → D1=True, D2=False → "Low Income"
TC3: age=15, income=40000  → D1=False          → "Underage"

Branch Coverage: 3 branches out of 3 = 100%
```

---

#### 4.2.3 Path Coverage

**Definition:** Percentage of possible paths through the code executed.

**Example:**


```python
def process_order(premium, expedite):
    fee = 0
    if premium:              # Path splits
        fee += 10
    if expedite:             # Path splits again
        fee += 20
    return fee
```

**Possible Paths:**
```


Path 1: premium=False, expedite=False → fee=0
Path 2: premium=True,  expedite=False → fee=10
Path 3: premium=False, expedite=True  → fee=20
Path 4: premium=True,  expedite=True  → fee=30

Total Paths: 4
For 100% Path Coverage: Need all 4 test cases
```

---

### 4.3 QA's Role in White Box Testing

**What QA Should Do:**

**1. Review Code Coverage Reports:**
```
Example Coverage Report:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Module: payment_processing.py
Line Coverage: 85% (170/200 lines)
Branch Coverage: 78% (45/58 branches)

Uncovered Lines:
- Lines 45-52: Error handling for timeout
- Lines 89-95: Refund processing
- Line 134: Currency conversion edge case

QA Action:
✓ Create test cases to cover timeout scenarios
✓ Test refund processing flows
✓ Test currency conversion edge cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**2. Suggest Additional Scenarios:**
```
Developer Test: check_eligibility(age=20, income=40000)
Covers: Basic eligibility

QA Suggestion:
- What about age=18 exactly? (boundary)
- What about income=30000 exactly? (boundary)
- What about age=17.99? (just below boundary)
- What about negative age? (invalid input)
- What about null values?
```

**3. Participate in Code Reviews:**
```
Review Checklist:
✓ Are unit tests comprehensive?
✓ Are edge cases covered?
✓ Is error handling tested?
✓ Are boundary values tested?
✓ Is code coverage >80%?
✓ Are integration points tested?
```

---

### 4.4 Understanding Code Coverage Tools

**Common Tools:**
- **Python:** pytest-cov, coverage.py
- **Java:** JaCoCo, Cobertura
- **JavaScript:** Istanbul, Jest
- **C#:** dotCover, OpenCover

**Sample Coverage Report:**
```
Name                      Stmts   Miss  Cover
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
shopping_cart.py            150     15    90%
payment_processor.py        200     40    80%
user_authentication.py      100      5    95%
order_management.py         180     35    81%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL                       630     95    85%
```

**QA Interpretation:**
- 85% overall coverage is good
- payment_processor.py needs attention (80%)
- user_authentication.py excellent (95%)

---

## Summary & Key Takeaways

### Day 4 Key Concepts:

1. **Use Case Testing:**
   - Based on user scenarios
   - Covers basic, alternate, exception flows
   - End-to-end testing approach

2. **Error Guessing:**
   - Experience-based technique
   - Anticipate common errors
   - Quick and effective

3. **Exploratory Testing:**
   - Simultaneous design and execution
   - Charter-based sessions
   - Testing tours (FCC CUTS VIDS)
   - Adaptive and creative

4. **White Box Testing (QA View):**
   - Statement, branch, path coverage
   - Review coverage reports
   - Collaborate with developers
   - Suggest additional scenarios

### Technique Selection:
```
Use Case Testing: End-to-end workflows
Error Guessing: Quick testing, edge cases
Exploratory: New features, time-constrained
White Box: Review developer tests, coverage gaps
```

### Tomorrow's Preview:

Day 5 will cover:
- Test Plan Documentation (IEEE 829)
- Test Case Documentation
- Requirements Traceability Matrix (RTM)
- Test Reports and Artifacts
- Documentation Best Practices

---

**Congratulations on completing Day 4!**

**Daily Checklist:**
- ☐ Mastered use case testing
- ☐ Learned error guessing patterns
- ☐ Practiced exploratory testing
- ☐ Understood white box concepts
- ☐ Completed 6 exercises
- ☐ Scored 16/20 on assessment
- ☐ Ready for Day 5

**Study Time:** 3-4 hours

---

*End of Day 4 Study Guide*
