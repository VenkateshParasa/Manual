# Day 6: Defect Management & Bug Life Cycle
## Comprehensive Study Guide

---

## Table of Contents
1. [Defect/Bug Life Cycle](#defectbug-life-cycle)
2. [Defect Reporting Best Practices](#defect-reporting-best-practices)
3. [Severity vs Priority](#severity-vs-priority)
4. [Defect Metrics](#defect-metrics)
5. [Practical Exercises](#practical-exercises)
6. [Assessment Questions](#assessment-questions)

---

## Defect/Bug Life Cycle

### 1.1 Understanding Bug Life Cycle

**Definition:** The bug life cycle represents the journey of a defect from discovery to closure, including all states it passes through.

**Purpose:**
- Track defect status
- Ensure accountability
- Facilitate communication
- Measure quality
- Support process improvement

---

### 1.2 Bug Life Cycle States

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLETE BUG LIFE CYCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                 [NEW]
                   ↓
              [ASSIGNED]
                   ↓
             [IN PROGRESS]
                   ↓
      ┌────────────┴──────────────┐
      ↓                            ↓
   [FIXED]                    [REJECTED]
      ↓                            ↓
   [RETEST]                    [CLOSED]
      ↓
   ┌──┴──┐
   ↓     ↓
[VERIFIED] [REOPENED]
   ↓         ↓
[CLOSED]   [ASSIGNED]


Alternative Paths:
- [NEW] → [DEFERRED] → [CLOSED]
- [ASSIGNED] → [DUPLICATE] → [CLOSED]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.3 Detailed State Descriptions

#### State 1: NEW

**Description:** Defect has been logged but not yet reviewed or assigned.

**Who Sets:** Tester
**Activities:**
- Tester discovers bug
- Logs defect with all details
- Defect enters system

**Example:**
```
Defect: BUG-501
Status: NEW
Logged By: John Doe (QA)
Date: Jan 10, 2026, 10:30 AM
Description: Login button not responding on Chrome browser
```

**Typical Duration:** Few hours to 1 day

---

#### State 2: ASSIGNED

**Description:** Defect has been reviewed and assigned to a developer.

**Who Sets:** QA Lead / Development Manager
**Activities:**
- Review defect validity
- Assign to appropriate developer
- Prioritize for fixing

**Example:**
```
Defect: BUG-501
Status: ASSIGNED
Assigned To: Mike Chen (Developer)
Assigned By: Sarah Williams (Dev Lead)
Date: Jan 10, 2026, 2:00 PM
Priority: P1 (High)
Target Fix Date: Jan 11, 2026
```

**Typical Duration:** Depends on priority (hours to days)

---

#### State 3: IN PROGRESS

**Description:** Developer is actively working on fixing the defect.

**Who Sets:** Developer
**Activities:**
- Investigate root cause
- Code the fix
- Perform unit testing
- Code review
- Commit fix to repository

**Example:**
```
Defect: BUG-501
Status: IN PROGRESS
Developer: Mike Chen
Started: Jan 10, 2026, 3:00 PM
Comments: "Investigating event listener issue. Found that click
          event not properly attached in Chrome v120. Working
          on fix."
Estimated Completion: Jan 11, 2026, 11:00 AM
```

**Typical Duration:** Few hours to several days

---

#### State 4: FIXED

**Description:** Developer has completed the fix and deployed to test environment.

**Who Sets:** Developer
**Activities:**
- Fix implemented
- Unit tests passed
- Code merged
- Build deployed to test environment
- Ready for QA retesting

**Example:**
```
Defect: BUG-501
Status: FIXED
Fixed By: Mike Chen
Fixed Date: Jan 11, 2026, 10:45 AM
Fix Description:
"Updated login.js to properly attach click event listener for
Chrome browsers v120+. Added event delegation for dynamic content.
Unit tests added to prevent regression."

Build: Build-2.0.492
Deployed To: Test Environment
Ready for Retest: Yes

Code Changes:
- File: src/components/login.js (Lines 45-52)
- Commit: a3f5d89
```

**Typical Duration:** Until QA retests (few hours to 1 day)

---

#### State 5: RETEST

**Description:** QA is retesting the defect to verify the fix.

**Who Sets:** Tester
**Activities:**
- Execute original test case
- Verify fix works
- Test related scenarios
- Check for side effects

**Example:**
```
Defect: BUG-501
Status: RETEST
Retested By: John Doe (original reporter)
Retest Date: Jan 11, 2026, 2:00 PM
Build: Build-2.0.492

Retest Steps:
1. Open Chrome v120 ✓
2. Navigate to login page ✓
3. Enter credentials ✓
4. Click login button ✓
5. Verify successful login ✓

Additional Testing:
- Tested on Chrome v119: Works ✓
- Tested on Chrome v121: Works ✓
- Tested rapid clicking: Works ✓
- Tested with keyboard (Enter key): Works ✓

Result: Fix verified successfully
```

**Typical Duration:** 15 minutes to 2 hours

---

#### State 6: VERIFIED

**Description:** QA confirmed the fix works correctly.

**Who Sets:** Tester
**Activities:**
- Test passed
- Fix confirmed
- Defect validated as resolved
- Ready to close

**Example:**
```
Defect: BUG-501
Status: VERIFIED
Verified By: John Doe
Verified Date: Jan 11, 2026, 2:30 PM

Verification Notes:
"Fix works perfectly. Login button now responds correctly in
Chrome v119, v120, and v121. Tested multiple scenarios including
rapid clicks and keyboard navigation. No side effects observed.
Recommend closing."

Next State: Will be CLOSED after final review
```

**Typical Duration:** Until formal closure (few hours to 1 day)

---

#### State 7: CLOSED

**Description:** Defect is resolved and closed. No further action needed.

**Who Sets:** QA Lead / QA Manager
**Activities:**
- Final review
- Mark as closed
- Archive documentation
- Update metrics

**Example:**
```
Defect: BUG-501
Status: CLOSED
Closed By: Jane Smith (QA Manager)
Closed Date: Jan 11, 2026, 5:00 PM

Resolution: Fixed
Total Time: 30 hours 30 minutes
  - Discovery to Assignment: 3.5 hours
  - Assignment to Fix: 20 hours
  - Fix to Verification: 3.5 hours
  - Verification to Closure: 3.5 hours

Final Comments:
"Bug successfully resolved and verified. Added to regression
test suite to prevent future occurrences."
```

**This is the final state for successfully resolved defects.**

---

#### State 8: REOPENED

**Description:** Fix didn't work or issue persists. Defect reopened.

**Who Sets:** Tester
**Activities:**
- Document why fix failed
- Provide additional details
- Reassign to developer

**Example:**
```
Defect: BUG-502
Status: REOPENED
Reopened By: Sarah Johnson
Reopened Date: Jan 12, 2026, 10:00 AM
Previously: FIXED (Jan 11, 2026)

Reason for Reopening:
"Retested in Build-2.0.495. Login button now works in Chrome,
but the fix introduced a new issue: login button not working
in Firefox v122. Original issue resolved but new regression
introduced."

New Findings:
- Chrome v120: Works ✓ (original issue fixed)
- Firefox v122: Broken ✗ (new regression)
- Safari v17: Works ✓
- Edge v120: Works ✓

Severity: High (same as original)
Priority: P0 (blocking Firefox users)

Reassigned To: Mike Chen
Comments: "Please fix for both Chrome and Firefox"

Previous Fix Attempts: 1
Current Attempt: 2
```

**Reopened defects return to ASSIGNED or IN PROGRESS state.**

---

#### State 9: DEFERRED

**Description:** Defect acknowledged but fix postponed to future release.

**Who Sets:** Product Manager / Project Manager
**Activities:**
- Evaluate impact
- Assess resources
- Decide to postpone
- Plan for future release

**Example:**
```
Defect: BUG-505
Status: DEFERRED
Deferred By: Alex Brown (Product Manager)
Deferred Date: Jan 15, 2026

Original Details:
Title: "Export to PDF feature slow for large reports"
Severity: Medium
Priority: P2
Found: Jan 10, 2026

Reason for Deferral:
"While this issue affects user experience, it is not blocking
any critical functionality. The workaround (exporting smaller
sections) is acceptable. Given the current release timeline
constraints and resource availability, deferring to v2.1."

Workaround:
"Users can export reports in smaller sections (< 100 pages)
which completes in acceptable time (<5 seconds)."

Planned Fix Release: v2.1 (Q2 2026)
Estimated Effort: 40 hours
Resources Required: 1 developer, 1 QA

Impact Analysis:
- Affects: 5% of users (those with reports >100 pages)
- Frequency: Low (once per month average)
- Business Impact: Low
- Customer Complaints: 2 in past 3 months

Will Revisit: March 2026 (v2.1 planning)
```

**Deferred defects eventually close or fix in future release.**

---

#### State 10: REJECTED

**Description:** Defect is not valid and will not be fixed.

**Who Sets:** Developer / Tech Lead / QA Lead
**Activities:**
- Review defect
- Determine invalidity
- Provide justification
- Close as rejected

**Rejection Reasons:**
1. **Not a Bug (Working as Designed)**
2. **Cannot Reproduce**
3. **Duplicate**
4. **Invalid (Incorrect information)**
5. **Won't Fix (Not worth effort)**

**Example 1: Not a Bug**
```
Defect: BUG-510
Status: REJECTED
Rejected By: Mike Chen (Developer)
Rejection Date: Jan 16, 2026

Reported Issue:
"Login session expires after 15 minutes of inactivity"

Rejection Reason: Not a Bug - Working as Designed
Explanation:
"This is the intended security behavior as per requirements
document REQ-SEC-005 which states: 'User sessions must expire
after 15 minutes of inactivity for security purposes.'"

Supporting Documents:
- Requirements: REQ-SEC-005, page 12
- Security Policy: SEC-POL-2025, section 3.2
- Design Document: DES-AUTH-001, section 2.1

Reviewer Comments (QA Lead):
"Confirmed this is by design. Reporter may not have been aware
of the security requirement. Closing as rejected."

Action: QA team to be briefed on session timeout policy
```

**Example 2: Cannot Reproduce**
```
Defect: BUG-511
Status: REJECTED
Rejected By: Sarah Johnson (Sr. QA)
Rejection Date: Jan 17, 2026

Reported Issue:
"Cart total shows incorrect value sometimes"

Rejection Reason: Cannot Reproduce
Attempted Reproduction:
Attempt 1 (Jan 16, 10:00 AM): Cannot reproduce
  - Added 5 items
  - Checked total: Correct
  - Applied discount: Correct

Attempt 2 (Jan 16, 2:00 PM): Cannot reproduce
  - Different items, different quantities
  - Total calculated correctly

Attempt 3 (Jan 17, 9:00 AM): Cannot reproduce
  - Tested with original reporter present
  - Still cannot reproduce issue

Missing Information:
- Specific items affected
- Exact steps to reproduce
- Screenshots or screen recording
- Test data used

Request to Reporter:
"Please provide detailed steps, screenshots, and specific test
data. Will reopen if reproducible steps provided."

Current Status: Rejected due to insufficient information
Can Reopen If: Detailed reproduction steps provided
```

**Example 3: Duplicate**
```


Defect: BUG-515
Status: REJECTED (DUPLICATE)
Rejected By: Jane Smith (QA Manager)
Rejection Date: Jan 18, 2026

Reported Issue:
"Payment button disabled after timeout"

Rejection Reason: Duplicate of BUG-505
Original Defect: BUG-505 (Logged: Jan 15, 2026)
Original Reporter: John Doe

Comparison:
┌──────────────────┬─────────────┬─────────────┐
│ Aspect           │ BUG-515     │ BUG-505     │
├──────────────────┼─────────────┼─────────────┤
│ Issue            │ Button disabled│ Same      │
│ Steps            │ Identical   │ Identical   │
│ Environment      │ Chrome v120 │ Chrome v120 │
│ Build            │ Build-2.0.495│Build-2.0.495│
└──────────────────┴─────────────┴─────────────┘

Action:
- Closing BUG-515 as duplicate
- All communication and fixes tracked in BUG-505
- Reporter notified to follow BUG-505 for updates
```



---

### 1.4 Bug Life Cycle in Different Organizations

**Organization A (Startup - Agile):**
```


NEW → OPEN → IN PROGRESS → RESOLVED → CLOSED
              ↓


           REJECTED

- Simple, fast workflow
- Fewer states
- Quick turnaround
```

**Organization B (Enterprise - Waterfall):**
```




NEW → TRIAGED → ASSIGNED → ANALYZED → IN PROGRESS →
CODE REVIEW → FIXED → BUILD DEPLOYED → RETEST →
VERIFIED → CLOSED

- Detailed workflow
- More governance
- Multiple review stages
```

**Organization C (Regulated Industry - Healthcare/Finance):**
```


NEW → INTAKE REVIEW → APPROVED → PRIORITY SET →
ASSIGNED → IN PROGRESS → CODE COMPLETE →
PEER REVIEW → QA REVIEW → FIXED → BUILD VALIDATION →
RETEST → VERIFIED → COMPLIANCE CHECK →
SIGN-OFF → CLOSED

- Very detailed workflow
- Multiple checkpoints
- Audit trail required
- Compliance mandatory
```

---

## Defect Reporting Best Practices

### 2.1 Effective Bug Title

**Good Titles:**
✓ "Login button not responding on Chrome v120"
✓ "Cart total calculation incorrect when discount applied"
✓ "Order confirmation email not received within 2 minutes"
✓ "App crashes when uploading file >5MB on iOS 16"

**Bad Titles:**
✗ "Login not working" (Too vague)
✗ "Bug in cart" (Not descriptive)
✗ "Issue" (No information)
✗ "Fix this" (Not professional)

**Title Formula:**
```
[Action/Feature] + [Problem] + [Condition/Context]

Examples:
- Payment processing fails for Visa cards in production
- Search returns no results when using special characters
- Dashboard loads slowly (>10 seconds) for admin users
```

---

### 2.2 Steps to Reproduce

**Template:**
```
Prerequisites:
[What needs to be set up before reproducing]

Steps:
1. [First action]
2. [Second action]
3. [Third action]
...

Actual Result:
[What actually happened]

Expected Result:
[What should have happened]
```

**Example:**
```
BUG-601: Unable to apply discount code during checkout

Prerequisites:
- User logged in
- At least one item in cart (Total: $100)
- Valid discount code available: "SAVE20" (20% off)

Steps to Reproduce:
1. Navigate to cart page
2. Click "Proceed to Checkout"
3. On payment page, locate "Discount Code" field
4. Enter discount code: "SAVE20"
5. Click "Apply" button
6. Observe the result

Actual Result:
- Error message displayed: "Invalid discount code"
- Discount not applied
- Total remains $100

Expected Result:
- Success message: "Discount applied successfully"
- Discount of $20 (20%) deducted
- New total: $80
- Discount code "SAVE20" displayed as applied
```

---

### 2.3 Environment Details

**What to Include:**
```
Environment Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Application Details:
- Application Name: [E-Commerce Mobile App]
- Version: [2.0.5]
- Build Number: [Build-2.0.495]
- Environment: [Test / Staging / Production]

Device/Browser:
- Device: [iPhone 14 Pro / Samsung Galaxy S23 / Desktop]
- OS: [iOS 17.2 / Android 13 / Windows 11]
- Browser: [Chrome 120.0.6099 / Safari 17.2]
- Screen Resolution: [1170x2532 / 1920x1080]

Network:
- Connection Type: [WiFi / 4G / 3G]
- Speed: [50 Mbps]

User Account:
- Username: [test.user@example.com]
- User Role: [Customer / Admin / Guest]
- Account Status: [Active / Premium]

Additional:
- Date/Time of Issue: [Jan 10, 2026, 2:30 PM EST]
- Frequency: [Always / Sometimes / Once]
- Reproducibility: [100% / 50% / Cannot reproduce consistently]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.4 Attachments and Evidence

**What to Attach:**

**1. Screenshots:**
```
✓ Capture the exact error or issue
✓ Include relevant UI elements
✓ Highlight the problem area (use arrows/circles)
✓ Show timestamps if relevant
✓ Multiple screenshots for different steps

File Naming Convention:
BUG-601_Step3_Error_Screenshot.png
BUG-601_Expected_vs_Actual.png
```

**2. Screen Recordings:**


```
✓ Show complete reproduction steps
✓ Keep video < 2 minutes if possible
✓ Narrate actions if possible
✓ Show problem occurrence
✓ Include relevant UI interaction

Tools:
- Loom
- OBS Studio
- Built-in screen recorders
```

**3. Logs:**


```


✓ Browser console logs (F12 → Console)
✓ Application logs
✓ Server logs (if accessible)
✓ Network logs (F12 → Network tab)
✓ Mobile device logs

Example Console Error:
Uncaught TypeError: Cannot read property 'amount' of undefined
    at calculateDiscount (discount.js:45)
    at applyCode (checkout.js:112)
```

**4. HAR Files:**
```


✓ Capture network traffic
✓ Useful for API issues
✓ Shows request/response

How to Generate:
1. Open DevTools (F12)
2. Go to Network tab
3. Reproduce issue
4. Right-click → "Save all as HAR"
5. Attach to defect
```

---

### 2.5 Complete Bug Report Example

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEFECT REPORT: BUG-701
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TITLE:
Payment fails with error "Transaction declined" for valid cards

SEVERITY: Critical
PRIORITY: P0 (Blocker)

DESCRIPTION:
Users are unable to complete purchases using valid credit cards.
Payment processing fails with generic error message "Transaction
declined" even though cards have sufficient funds and are not
expired.

ENVIRONMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Application: E-Commerce Web Application
Version: 2.5.1
Build: Build-2.5.501
Environment: Production
URL: https://shop.example.com

Browser: Chrome 120.0.6099.129
OS: Windows 11 Pro (22H2)
Screen Resolution: 1920x1080

Date/Time: January 20, 2026, 3:45 PM EST
Frequency: Affects approximately 30% of transactions
Reproducibility: Consistent (100% for affected cards)

User Impact: ~500 users affected in last 2 hours
Business Impact: Revenue loss estimated $50,000+ in 2 hours

PREREQUISITES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. User account: test.buyer@example.com / Test@123
2. Items in cart: 3 items, Total $250.00
3. Shipping address saved
4. Valid test credit card:
   - Number: 4532 0158 8876 5432 (Visa)
   - Name: Test User
   - Expiry: 12/2027
   - CVV: 123
   - This card works in test environment

STEPS TO REPRODUCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Login to application
2. Add 3 items to cart (Total: $250.00)
3. Click "Checkout"
4. Confirm shipping address
5. Click "Continue to Payment"
6. Select "Credit Card" as payment method
7. Enter credit card details:
   - Card Number: 4532 0158 8876 5432
   - Cardholder Name: Test User
   - Expiry Date: 12/2027
   - CVV: 123
   - Billing ZIP: 10001
8. Click "Place Order" button
9. Observe loading indicator for ~5 seconds
10. Error appears

ACTUAL RESULT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Red error banner displayed at top of page
- Error Message: "Transaction declined. Please try another
  payment method or contact your bank."
- Payment not processed
- Order not created
- User stuck on payment page
- No order confirmation email received

Console Errors:
POST https://api.example.com/payments/process 500 (Internal Server Error)
Error: Payment gateway returned error code 500
    at processPayment (payment.js:234)

Network Response:
{
  "status": "error",
  "code": 500,
  "message": "Transaction declined",
  "details": "Gateway timeout - connection to payment processor failed"
}

EXPECTED RESULT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Payment processes successfully (within 3-5 seconds)
- Success message: "Order placed successfully!"
- Order confirmation page displayed with:
  - Order number: ORD-2026-XXXXX
  - Order summary
  - Estimated delivery date
- Confirmation email sent within 2 minutes
- Payment charged to credit card
- Order created in system

ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Affected Card Types:
- Visa: Yes (confirmed with 5 different cards)
- Mastercard: Yes (confirmed with 3 cards)
- American Express: Unknown (not tested yet)
- Discover: Unknown (not tested yet)

Pattern Observed:
- Issue started at 2:00 PM EST today
- All transactions failing after 2:00 PM
- Transactions before 2:00 PM worked fine
- No code deployment at 2:00 PM
- Possible payment gateway issue?

Workaround:
- None currently available
- Users cannot complete purchases
- PayPal payment method also failing (separate defect)

Similar Issues:
- BUG-645 (Last month): Similar gateway timeout
- That was resolved by payment processor
- May be related to payment gateway service

Customer Reports:
- 47 customer support tickets in last 2 hours
- Social media mentions increasing
- High business impact

ATTACHMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Screenshot_Error_Page.png (shows error banner)
2. Console_Logs.txt (full browser console output)
3. Network_HAR_File.har (network traffic capture)
4. Screen_Recording_Reproduction.mp4 (full reproduction video)
5. Payment_Gateway_Status.pdf (gateway status page)

REPORTER INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reported By: Sarah Johnson (Senior QA Engineer)
Report Date: January 20, 2026, 4:00 PM EST
Contact: sarah.johnson@example.com
Phone: +1-555-0123

TEST CASE REFERENCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Related Test Case: TC_PAYMENT_CC_001
Test Result: FAIL

SUGGESTED PRIORITY JUSTIFICATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Severity: Critical
- Complete loss of payment functionality
- No workaround available
- Affects all users attempting to purchase

Priority: P0 (Immediate)
- Active revenue loss ($25,000/hour estimated)
- High volume of customer complaints
- Brand reputation impact
- Requires immediate attention
- Fix needed within 1-2 hours

RECOMMENDED ACTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Immediate (Next 30 minutes):
1. Contact payment gateway provider
2. Check gateway status and logs
3. Review recent configuration changes
4. Consider rolling back if recent deployment

Short-term (1-2 hours):
1. Implement fix
2. Deploy to production
3. Verify resolution
4. Monitor transaction success rate

Communication:
1. Notify customers via email/website banner
2. Update customer support team
3. Post on social media/status page
4. Prepare incident report

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF DEFECT REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Severity vs Priority

### 3.1 Understanding the Difference

**Severity:** Impact of the defect on application functionality (Technical perspective)

**Priority:** Urgency of fixing the defect (Business perspective)

```
Severity = "How bad is the problem?"
Priority = "How soon should we fix it?"
```

---

### 3.2 Severity Levels

**Critical (S1):**
- Application crash/hang
- Data loss or corruption
- Security breach
- Complete feature failure
- No workaround available

**High (S2):**
- Major feature not working
- Significant functionality impacted
- Workaround exists but difficult
- Affects many users

**Medium (S3):**
- Minor feature not working
- Moderate functionality impacted
- Easy workaround available
- Affects some users

**Low (S4):**
- Cosmetic issues
- Minor inconvenience
- Spelling/grammar errors
- UI alignment issues

---

### 3.3 Priority Levels

**P0 (Immediate/Blocker):**
- Fix immediately (within hours)
- Blocks release
- Production down
- Critical business impact

**P1 (High):**
- Fix in current sprint/release
- Important for release
- Significant user impact

**P2 (Medium):**
- Fix in next sprint/release
- Moderate user impact
- Can wait

**P3 (Low):**
- Fix when time permits
- Nice to have
- Minimal impact

---

### 3.4 Severity vs Priority Matrix

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEVERITY-PRIORITY MATRIX WITH EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌────────────────────┬──────────────────────────────────────┐
│ HIGH SEVERITY      │ PRIORITY                             │
│ HIGH PRIORITY      │ P0 (Immediate Fix)                   │
├────────────────────┼──────────────────────────────────────┤
│ Example 1:         │ App crashes when user clicks         │
│                    │ "Checkout" button                    │
│                    │ Impact: Cannot purchase (revenue)    │
│                    │ Users Affected: All                  │
├────────────────────┼──────────────────────────────────────┤
│ Example 2:         │ Payment gateway not processing       │
│                    │ any transactions                     │
│                    │ Impact: Zero sales                   │
│                    │ Users Affected: All                  │
├────────────────────┼──────────────────────────────────────┤
│ Example 3:         │ Database connection failure          │
│                    │ causing complete app failure         │
│                    │ Impact: App unusable                 │
│                    │ Users Affected: All                  │
└────────────────────┴──────────────────────────────────────┘

┌────────────────────┬──────────────────────────────────────┐
│ HIGH SEVERITY      │ PRIORITY                             │
│ LOW PRIORITY       │ P2 or P3 (Can Wait)                  │
├────────────────────┼──────────────────────────────────────┤
│ Example 1:         │ Admin report generation crashes      │
│                    │ Impact: High (crashes)               │
│                    │ Users Affected: 2 admin users        │
│                    │ Frequency: Used once per month       │
│                    │ Priority: Low (few users, rare use)  │
├────────────────────┼──────────────────────────────────────┤
│ Example 2:         │ Data export feature fails for        │
│                    │ files > 10MB                         │
│                    │ Impact: High (feature broken)        │
│                    │ Users Affected: < 1% of users        │
│                    │ Workaround: Export in smaller chunks │
│                    │ Priority: P2 (workaround available)  │
└────────────────────┴──────────────────────────────────────┘

┌────────────────────┬──────────────────────────────────────┐
│ LOW SEVERITY       │ PRIORITY                             │
│ HIGH PRIORITY      │ P0 or P1 (Fix Quickly)               │
├────────────────────┼──────────────────────────────────────┤
│ Example 1:         │ Company logo image is incorrect      │
│                    │ Severity: Low (just an image)        │
│                    │ Priority: P0 (brand reputation)      │
│                    │ Reason: CEO noticed, PR issue        │
├────────────────────┼──────────────────────────────────────┤
│ Example 2:         │ Promotional banner shows wrong       │
│                    │ discount (50% instead of 20%)        │
│                    │ Severity: Low (banner only)          │
│                    │ Priority: P0 (legal/financial issue) │
│                    │ Reason: False advertising            │
├────────────────────┼──────────────────────────────────────┤
│ Example 3:         │ Spelling error in product name       │
│                    │ on Black Friday sale page            │
│                    │ Severity: Low (typo)                 │
│                    │ Priority: P1 (major sales event)     │
│                    │ Reason: High visibility, credibility │
└────────────────────┴──────────────────────────────────────┘

┌────────────────────┬──────────────────────────────────────┐
│ LOW SEVERITY       │ PRIORITY                             │
│ LOW PRIORITY       │ P3 (Fix Someday)                     │
├────────────────────┼──────────────────────────────────────┤
│ Example 1:         │ Help icon alignment slightly off     │
│                    │ Severity: Low (cosmetic)             │
│                    │ Priority: P3 (not important)         │
│                    │ Fix: Eventually                      │
├────────────────────┼──────────────────────────────────────┤
│ Example 2:         │ Footer text color slightly different │
│                    │ from design                          │
│                    │ Severity: Low (minor visual)         │
│                    │ Priority: P3 (not noticeable)        │
│                    │ Fix: Backlog                         │
├────────────────────┼──────────────────────────────────────┤
│ Example 3:         │ Unused button on internal test page  │
│                    │ Severity: Low (not visible to users) │
│                    │ Priority: P3 (cleanup)               │
│                    │ Fix: Technical debt                  │
└────────────────────┴──────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEY TAKEAWAY:
Severity is technical impact.
Priority is business urgency.
They don't always align!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Defect Metrics

### 4.1 Defect Density

**Definition:** Number of defects per unit size (e.g., per module, per 1000 lines of code, per function point).

**Formula:**
```
Defect Density = Total Number of Defects / Size

Size can be:
- Lines of Code (KLOC - thousands of lines)
- Function Points
- Modules
- Features


```

**Example 1:**
```
Project: E-Commerce Application
Total Defects Found: 150
Total Lines of Code: 50,000 (50 KLOC)

Defect Density = 150 / 50 = 3 defects per KLOC

Industry Benchmark:
- Excellent: < 1 defect per KLOC
- Good: 1-3 defects per KLOC
- Average: 3-5 defects per KLOC
- Poor: > 5 defects per KLOC

Assessment: Good (3 defects per KLOC)
```

**Example 2:**
```


Module-wise Defect Density:

┌─────────────────┬────────┬───────┬──────────────┐
│ Module          │ LOC    │Defects│ Density      │
├─────────────────┼────────┼───────┼──────────────┤
│ User Auth       │ 5,000  │ 8     │ 1.6/KLOC     │
│ Product Catalog │ 15,000 │ 35    │ 2.3/KLOC     │
│ Shopping Cart   │ 8,000  │ 28    │ 3.5/KLOC ⚠   │
│ Payment         │ 12,000 │ 52    │ 4.3/KLOC ⚠⚠  │
│ Order Mgmt      │ 10,000 │ 27    │ 2.7/KLOC     │
└─────────────────┴────────┴───────┴──────────────┘

Analysis:
- Shopping Cart and Payment modules have high defect density
- Recommendation: Focus more testing on these modules
- Consider code review and refactoring
```

---

### 4.2 Defect Removal Efficiency (DRE)

**Definition:** Percentage of defects found before release compared to total defects.

**Formula:**
```
DRE = (Defects Found Before Release / Total Defects) × 100

Total Defects = Defects Found Before Release + Defects Found in Production
```

**Example:**
```
Testing Phase:
- Defects found in Unit Testing: 50
- Defects found in Integration Testing: 30
- Defects found in System Testing: 40
- Defects found in UAT: 15
Total Defects Before Release: 135

Production (First 3 months):
- Defects found in Production: 15

Total Defects: 135 + 15 = 150

DRE = (135 / 150) × 100 = 90%

Industry Benchmark:
- Excellent: > 95%
- Good: 85-95%
- Average: 75-85%
- Poor: < 75%

Assessment: Good (90% DRE)
```

**Interpretation:**
- 90% DRE means 90% of defects were caught before release
- 10% defect leakage to production
- Goal: Increase DRE to >95%

---

### 4.3 Defect Leakage

**Definition:** Percentage of defects that escaped to production.

**Formula:**
```
Defect Leakage = (Defects Found in Production / Total Defects) × 100
```

**Example:**
```
Defects in Testing: 200
Defects in Production: 25
Total: 225



Defect Leakage = (25 / 225) × 100 = 11.1%

Target: < 5% leakage

Analysis:
- 11.1% leakage is high
- Indicates testing gaps
- Need to improve test coverage
```

---

### 4.4 Defect Age

**Definition:** Time between defect detection and closure.

**Formula:**
```
Defect Age = Closure Date - Detection Date (in days)
```

**Example:**
```


Defect Aging Report:

┌──────────┬───────────────┬──────────────┬─────────┐
│ Defect   │ Found Date    │ Closed Date  │ Age(Days│
├──────────┼───────────────┼──────────────┼─────────┤
│ BUG-501  │ Jan 10, 2026  │ Jan 11, 2026 │ 1       │
│ BUG-502  │ Jan 10, 2026  │ Jan 15, 2026 │ 5       │
│ BUG-503  │ Jan 12, 2026  │ Jan 20, 2026 │ 8       │
│ BUG-504  │ Jan 15, 2026  │ Open         │ 25 ⚠⚠   │
│ BUG-505  │ Jan 18, 2026  │ Jan 22, 2026 │ 4       │
└──────────┴───────────────┴──────────────┴─────────┘

Average Age (Closed Defects): 4.5 days

Target:
- Critical: < 1 day
- High: < 3 days
- Medium: < 7 days
- Low: < 14 days

Concern:
BUG-504 open for 25 days - needs immediate attention
```

---

### 4.5 Defect Rejection Ratio

**Definition:** Percentage of defects that were rejected (not valid bugs).

**Formula:**
```
Rejection Ratio = (Rejected Defects / Total Logged Defects) × 100
```

**Example:**
```
Total Defects Logged: 150
Rejected Defects: 18
  - Not a Bug: 8
  - Duplicate: 6
  - Cannot Reproduce: 4

Rejection Ratio = (18 / 150) × 100 = 12%

Industry Benchmark:
- Excellent: < 5%
- Good: 5-10%
- Average: 10-20%
- Poor: > 20%

Assessment: Average (12%)

Action Items:
- Improve tester training
- Better requirements understanding
- More thorough reproduction testing
- Check for duplicates before logging
```

---

### 4.6 Mean Time to Detect (MTTD)

**Definition:** Average time to discover a defect after it was introduced.

**Example:**
```
BUG-601:
- Defect introduced: Jan 5 (code deployed)
- Defect detected: Jan 12
- MTTD: 7 days



BUG-602:
- Defect introduced: Jan 8
- Defect detected: Jan 9
- MTTD: 1 day

Average MTTD: 4 days

Goal: Reduce MTTD
Strategy:
- Increase test frequency
- Automated testing in CI/CD
- Better monitoring
```

---

### 4.7 Mean Time to Repair (MTTR)

**Definition:** Average time to fix a defect after it was reported.

**Formula:**
```
MTTR = Total Fix Time / Number of Defects Fixed
```

**Example:**
```


Defect Fix Times:

┌──────────┬───────────────┬──────────────┬──────────┐
│ Defect   │ Reported      │ Fixed        │Time(Hours│
├──────────┼───────────────┼──────────────┼──────────┤
│ BUG-701  │ Jan 10, 9AM   │ Jan 10, 2PM  │ 5        │
│ BUG-702  │ Jan 10, 10AM  │ Jan 11, 11AM │ 25       │
│ BUG-703  │ Jan 11, 8AM   │ Jan 11, 10AM │ 2        │
│ BUG-704  │ Jan 11, 2PM   │ Jan 12, 10AM │ 20       │
│ BUG-705  │ Jan 12, 9AM   │ Jan 12, 3PM  │ 6        │
└──────────┴───────────────┴──────────────┴──────────┘

Total Fix Time: 58 hours
Number of Defects: 5

MTTR = 58 / 5 = 11.6 hours

By Severity:
- Critical MTTR: 3 hours (target: < 4 hours)
- High MTTR: 8 hours (target: < 24 hours)
- Medium MTTR: 48 hours (target: < 1 week)
- Low MTTR: 1 week (target: < 2 weeks)
```

---

## Summary & Key Takeaways

### Day 6 Key Concepts:

1. **Bug Life Cycle:**
   - 10 possible states
   - Varies by organization
   - Clear workflow essential
   - Proper transitions important

2. **Defect Reporting:**
   - Clear, concise titles
   - Detailed reproduction steps
   - Complete environment details
   - Strong evidence (screenshots, logs)
   - Professional tone

3. **Severity vs Priority:**
   - Severity = Technical impact
   - Priority = Business urgency
   - Can be different!
   - Both perspectives matter

4. **Defect Metrics:**
   - Defect Density: Defects per size
   - DRE: % found before release
   - Defect Leakage: % escaped
   - Age, MTTD, MTTR
   - Drive process improvement

### Best Practices:

✓ Report defects promptly
✓ Provide complete information
✓ Attach evidence
✓ Use professional language
✓ Focus on facts, not blame
✓ Follow up on defects
✓ Track and analyze metrics

### Tomorrow's Preview:

Day 7 will cover:
- Week 1 Comprehensive Review
- All topics summary
- 100-question assessment
- Practical project
- Gap analysis
- Week 2 preparation

---

**Congratulations on completing Day 6!**

**Daily Checklist:**
- ☐ Memorized bug life cycle states
- ☐ Learned defect reporting best practices
- ☐ Mastered severity vs priority
- ☐ Understood defect metrics
- ☐ Completed 5 exercises
- ☐ Scored 16/20 on assessment
- ☐ Ready for Day 7 review

**Study Time:** 3-4 hours

---

*End of Day 6 Study Guide*
