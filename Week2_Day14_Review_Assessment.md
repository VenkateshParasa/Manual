# Day 14: Week 2 Review & Practical Assessment
## Comprehensive Study Guide

---

## Table of Contents
1. [Week 2 Comprehensive Review](#week-2-comprehensive-review)
2. [Key Concepts Summary](#key-concepts-summary)
3. [Practical Assessment Project](#practical-assessment-project)
4. [60-Question Assessment](#60-question-assessment)
5. [Gap Analysis](#gap-analysis)
6. [Week 3 Preparation](#week-3-preparation)

---

## Week 2 Comprehensive Review

### 1.1 Day-by-Day Summary

**DAY 8: Web Application Testing - Part 1**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Client-Side vs Server-Side Testing
✓ Browser Compatibility Testing
  - Chrome, Safari, Firefox, Edge
  - BrowserStack, LambdaTest
✓ Responsive Design Testing
  - Breakpoints: 320px to 1920px+
  - Mobile-first approach
✓ Form Validation Testing (30 test cases)
✓ Navigation Testing
✓ Links Testing (internal, external, broken)
✓ Cookies & Session Management
✓ Search Functionality Testing
✓ UI/UX Testing Basics
✓ Accessibility Testing Introduction

Core Skill Acquired:
→ Comprehensive web application testing approach
→ Browser compatibility verification skills
```

**DAY 9: Web Application Testing - Part 2**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Security Testing
  - OWASP Top 10 (2021)
  - SQL Injection (with examples and mitigations)
  - XSS (Reflected, Stored, DOM-based)
  - CSRF attacks and prevention
  - Authentication/Authorization testing

✓ Performance Testing
  - Page load metrics (TTFB, FCP, LCP, CLS, TTI)
  - Bottleneck identification
  - Performance benchmarks (<2 seconds)

✓ Database Testing
  - CRUD operations
  - Data integrity constraints
  - Transaction testing

✓ API Testing
  - REST principles
  - HTTP methods (GET, POST, PUT, DELETE)
  - Status codes
  - Postman with JavaScript test scripts

Core Skill Acquired:
→ Security vulnerability identification
→ Performance testing and analysis
→ API testing with Postman
```

**DAY 10: Mobile Application Testing**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Mobile App Types (Native, Hybrid, Web)
✓ iOS vs Android Testing Differences
  - Navigation patterns
  - Permission models
  - UI guidelines
✓ Installation Testing
✓ Gesture Testing (tap, swipe, pinch, drag)
✓ Orientation Testing (portrait/landscape)
✓ Interruption Testing (calls, notifications)
✓ Battery Consumption Testing
✓ Network Connectivity Testing (WiFi, 4G, 3G, offline)
✓ Storage Testing
✓ Permission Testing
✓ Device Compatibility (P0, P1, P2 matrix)

Core Skill Acquired:
→ Platform-specific testing skills (iOS/Android)
→ Mobile-specific scenario testing
```

**DAY 11: Specialized Testing Types**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Localization & Internationalization (i18n/L10n)
  - Translation testing
  - Text expansion/contraction
  - Date/time/currency formats
  - RTL languages (Arabic, Hebrew)
  - Cultural adaptation

✓ Accessibility Testing (WCAG 2.1 Deep Dive)
  - Conformance levels (A, AA, AAA)
  - Four principles (Perceivable, Operable, Understandable, Robust)
  - Color contrast requirements (4.5:1 for AA)
  - ARIA attributes and roles

✓ Usability Testing
  - Moderated/unmoderated methods
  - Metrics (SUS, NPS, task success rate)
  - Nielsen's 10 Usability Heuristics

✓ Compatibility Testing
  - Browser/OS compatibility
  - Testing matrices and strategies

Core Skill Acquired:
→ Specialized testing domain expertise
→ WCAG compliance verification
→ Usability assessment skills
```

**DAY 12: Regression & Smoke Testing Strategies**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Regression Testing Types
  - Corrective, Retest-All, Selective, Progressive, Complete, Partial
✓ Building Regression Suites (10-step process)
✓ Test Case Prioritization (8 techniques)
  - Risk-based, requirement-based, coverage-based, history-based
✓ Smoke Testing In-Depth
  - 20-30 tests, 10-30 minutes
  - Wide and shallow coverage
  - Smoke vs Sanity vs Regression
✓ Optimization Strategies (10 techniques)
  - Remove obsolete, parallel execution, refactoring
✓ Automation Considerations
  - Decision framework, ROI calculation
  - Automation pyramid

Core Skill Acquired:
→ Test suite management and optimization
→ Effective prioritization strategies
→ Automation decision-making
```

**DAY 13: Exploratory Testing & SBTM**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Exploratory Testing Advanced
  - Heuristics (CRUD, Goldilocks, consistency)
  - NOT random testing

✓ Testing Tours (FCC CUTS VIDS)
  - 11 tour types
  - Business: Feature, Complexity, Claims
  - Historical: Configuration, User, Testability, Scenarios
  - Entertainment: Variability, Interoperability, Data, Structure

✓ Session-Based Test Management (SBTM)
  - Time-boxed sessions (90 minutes)
  - Charter creation
  - Session execution and documentation
  - TBS model (Test, Bug, Setup)

✓ Debriefing & Reporting
  - Session debriefs (15-30 min)
  - Metrics tracking
  - Weekly/sprint reports

Core Skill Acquired:
→ Structured exploratory testing
→ Charter-based testing approach
→ Session management and reporting
```

---

## Key Concepts Summary

### 2.1 Critical Formulas & Calculations

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MUST-KNOW FORMULAS (WEEK 2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COLOR CONTRAST RATIO:
Contrast Ratio = (L1 + 0.05) / (L2 + 0.05)
Where L1 = lighter color luminance, L2 = darker color luminance
WCAG AA: 4.5:1 (normal text), 3:1 (large text)
WCAG AAA: 7:1 (normal text), 4.5:1 (large text)

RISK-BASED PRIORITY SCORE:
Risk Score = (Probability of Failure × Impact of Failure)
OR
Priority Score = (Business Criticality × 0.5) +
                 (Defect History × 0.3) +
                 (Change Frequency × 0.2)

DEFECT DISCOVERY RATE (DDR):
DDR = Total Defects Found / Total Test Sessions

SESSION EFFICIENCY (SBTM):
Test Time % = (Test Time / Total Session Time) × 100%
Target: 70-80%

TEST COVERAGE:
Coverage = (Features Tested / Total Features) × 100%

ROI FOR AUTOMATION:
ROI = (Savings - Cost) / Cost × 100%
Payback Period = Initial Investment / Monthly Savings

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 2.2 Quick Reference Tables

**OWASP Top 10 (2021):**
```
┌─────┬──────────────────────────────┬────────────────────┐
│ Rank│ Vulnerability                │ Example Attack     │
├─────┼──────────────────────────────┼────────────────────┤
│ A01 │ Broken Access Control        │ URL manipulation   │
│ A02 │ Cryptographic Failures       │ Weak encryption    │
│ A03 │ Injection                    │ SQL injection      │
│ A04 │ Insecure Design              │ Missing rate limit │
│ A05 │ Security Misconfiguration    │ Default passwords  │
│ A06 │ Vulnerable Components        │ Outdated libraries │
│ A07 │ ID & Auth Failures           │ Weak passwords     │
│ A08 │ Software & Data Integrity    │ Unsigned updates   │
│ A09 │ Logging & Monitoring Failures│ No audit logs      │
│ A10 │ Server-Side Request Forgery  │ SSRF attacks       │
└─────┴──────────────────────────────┴────────────────────┘
```

**Mobile App Types Comparison:**
```
┌────────────────────┬─────────┬─────────┬─────────┐
│ Aspect             │ Native  │ Hybrid  │ Web     │
├────────────────────┼─────────┼─────────┼─────────┤
│ Performance        │ Best    │ Good    │ Average │
│ Development Cost   │ High    │ Medium  │ Low     │
│ Device Features    │ Full    │ Most    │ Limited │
│ Offline Support    │ Full    │ Good    │ Limited │
│ App Store          │ Yes     │ Yes     │ No      │
└────────────────────┴─────────┴─────────┴─────────┘
```

**WCAG Conformance Levels:**
```
┌────────┬──────────────────────────────────────────────┐
│ Level  │ Requirements                                 │
├────────┼──────────────────────────────────────────────┤
│ A      │ Minimum (basic accessibility)                │
│        │ - Alt text, keyboard access, page titles     │
├────────┼──────────────────────────────────────────────┤
│ AA     │ Mid-range (most laws require this)           │
│        │ - 4.5:1 contrast, resize to 200%, labels     │
├────────┼──────────────────────────────────────────────┤
│ AAA    │ Highest (enhanced accessibility)             │
│        │ - 7:1 contrast, sign language, no time limits│
└────────┴──────────────────────────────────────────────┘
```

**Testing Tours (FCC CUTS VIDS):**
```
┌─────────────────────┬─────────────────────────────────┐
│ Tour                │ Focus                           │
├─────────────────────┼─────────────────────────────────┤
│ Feature             │ Test each feature in isolation  │
│ Complexity          │ Most complex features first     │
│ Claims              │ Verify marketing claims         │
│ Configuration       │ Different configurations        │
│ User                │ Different user personas         │
│ Testability         │ How easy to test                │
│ Scenarios           │ End-to-end workflows            │
│ Variability         │ Varying inputs and data         │
│ Interoperability    │ Integration with other systems  │
│ Data                │ Data flow and persistence       │
│ Structure           │ Application architecture        │
└─────────────────────┴─────────────────────────────────┘
```

---

## Practical Assessment Project

### 3.1 Project Overview

**Scenario:** You are the QA Lead for a comprehensive web and mobile travel booking platform. Complete all testing activities for the "Flight Booking" feature across web and mobile.

**Application:** TravelExpress Platform
**Platforms:** Web (Chrome, Safari, Firefox), Mobile (iOS & Android)
**Feature:** Complete flight booking flow
**Timeline:** Full day exercise (8 hours)

---

### 3.2 Project Requirements

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIREMENTS: FLIGHT BOOKING FEATURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FUNCTIONAL REQUIREMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REQ-FB-001 (P0): Flight Search
User shall be able to search for flights with:
- Origin and destination cities
- Departure and return dates (one-way or round-trip)
- Number of passengers (adults, children, infants)
- Class (Economy, Business, First)
- Filters (non-stop, max stops, airlines, price range)

REQ-FB-002 (P0): Search Results
System shall display:
- Available flights matching criteria
- Flight details (airline, flight number, departure/arrival times)
- Layover information (if applicable)
- Price per passenger
- Total price
- Seat availability
- Sort options (price, duration, departure time)

REQ-FB-003 (P0): Flight Selection
User shall be able to:
- Select outbound flight (round-trip: also return flight)
- View detailed flight information
- Compare different flight options
- Add to booking

REQ-FB-004 (P0): Passenger Information
User shall be able to enter for each passenger:
- First name, last name
- Date of birth
- Gender
- Passport information (for international)
- Contact information (email, phone)
- Special requests (meal preferences, wheelchair, etc.)

REQ-FB-005 (P0): Seat Selection
User shall be able to:
- View seat map
- Select seats for each passenger
- See seat pricing (standard, extra legroom, premium)
- Modify seat selection

REQ-FB-006 (P0): Add-ons & Extras
User shall be able to add:
- Baggage (checked bags, carry-on)
- Travel insurance
- Lounge access
- Priority boarding
- Meal upgrades

REQ-FB-007 (P0): Payment & Checkout
User shall be able to:
- Review booking summary
- Apply promo code/voucher
- Enter payment details (credit card, PayPal)
- Agree to terms and conditions
- Complete payment
- Receive booking confirmation

REQ-FB-008 (P1): Booking Management
User shall be able to:
- View booking details
- Modify booking (date/time changes)
- Cancel booking
- Request refund
- Check-in online (24 hours before flight)

REQ-FB-009 (P2): Multi-City Search
User shall be able to search flights for:
- Multiple destinations in one trip
- Complex itineraries (e.g., NYC → London → Paris → NYC)

NON-FUNCTIONAL REQUIREMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REQ-NFR-001: Search results load in < 3 seconds
REQ-NFR-002: Support 5000 concurrent users
REQ-NFR-003: 99.9% uptime during booking hours
REQ-NFR-004: PCI-DSS compliant payment processing
REQ-NFR-005: WCAG 2.1 Level AA compliance
REQ-NFR-006: Mobile responsive (320px to 1920px+)
REQ-NFR-007: Support iOS 15+ and Android 11+
REQ-NFR-008: Multi-language support (English, Spanish, French, Arabic)
REQ-NFR-009: Multi-currency support (USD, EUR, GBP, AED)

BROWSER REQUIREMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
P0: Chrome (latest 2 versions), Safari (latest)
P1: Firefox (latest), Edge (latest)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.3 Project Tasks

**TASK 1: Web Application Testing (3 hours)**

**Part A: Browser Compatibility Testing (45 min)**
Test flight search and booking on:
- Chrome (latest)
- Safari (latest)
- Firefox (latest)

Document 15 test cases covering:
- Search functionality
- Form inputs
- Payment processing
- Responsive behavior
- CSS rendering

**Deliverable:** Browser compatibility test report with matrix

---

**Part B: Security Testing (45 min)**

Perform security testing including:
- SQL injection attempts on search fields
- XSS attempts on passenger name fields
- CSRF token validation
- Authentication/authorization testing
- Payment data security

Document 10 security test cases with attempted attacks and results.

**Deliverable:** Security testing report with findings

---

**Part C: Accessibility Testing (45 min)**

Test WCAG 2.1 Level AA compliance:
- Color contrast (use WebAIM tool)
- Keyboard navigation (tab through entire flow)
- Screen reader compatibility (NVDA or VoiceOver)
- ARIA attributes verification
- Form labels and error messages

Document 12 accessibility test cases.

**Deliverable:** WCAG compliance report

---

**Part D: API Testing (45 min)**

Using Postman, test flight search API:
- GET /api/flights (search)
- POST /api/bookings (create booking)
- GET /api/bookings/{id} (retrieve booking)
- PUT /api/bookings/{id} (modify booking)
- DELETE /api/bookings/{id} (cancel booking)

Write JavaScript test scripts for:
- Status code verification
- Response time checks
- Data validation
- Error handling

**Deliverable:** Postman collection with 15 API tests

---

**TASK 2: Mobile Application Testing (2.5 hours)**

**Part A: iOS Testing (1 hour 15 min)**

Test on iPhone (simulator or real device):
- Installation and launch
- Search and booking flow
- Gestures (tap, swipe, pinch)
- Orientation changes (portrait/landscape)
- Interruption testing (incoming call simulation)
- Permission requests (location, notifications)

Document 20 iOS-specific test cases.

**Deliverable:** iOS test execution report

---

**Part B: Android Testing (1 hour 15 min)**

Test on Android device:
- Installation (APK or Play Store)
- All functional flows
- Back button behavior
- Permission handling
- Battery consumption (30-min observation)
- Network switching (WiFi to 4G)

Document 20 Android-specific test cases.

**Deliverable:** Android test execution report

---

**TASK 3: Localization Testing (1 hour)**

Test application in multiple languages:
- Switch to Spanish
- Verify all text translated
- Check date/time formats (DD/MM/YYYY)
- Currency display (EUR formatting)
- Switch to Arabic (RTL language)
- Verify RTL layout
- Text expansion issues

Document 10 localization test cases.

**Deliverable:** Localization testing report

---

**TASK 4: Exploratory Testing with SBTM (1.5 hours)**

Conduct 1 exploratory testing session (90 minutes):

Charter:
"Explore flight booking checkout flow
With variability tour approach and edge case scenarios
To discover calculation errors, validation issues, and usability problems"

Document:
- Session sheet with TBS breakdown
- Areas covered
- Defects found
- Questions raised
- Follow-up opportunities

**Deliverable:** Complete SBTM session report

---

**TASK 5: Comprehensive Test Summary Report (1 hour)**

Create final test summary report including:
- Executive summary
- Testing scope and coverage
- Test execution summary (assume: 120 TCs executed, 108 passed, 12 failed)
- Defect summary by severity and module
- Browser compatibility results
- Security testing results
- Accessibility compliance status
- Mobile testing results
- Localization status
- Risk assessment
- GO/NO-GO recommendation

**Deliverable:** Comprehensive test summary report (5-6 pages)

---

### 3.4 Evaluation Criteria

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCORING RUBRIC (Total: 100 points)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TASK 1: Web Application Testing (30 points)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Browser Compatibility (8 pts):
- Completeness of test cases (3 pts)
- Matrix clarity (2 pts)
- Issues identified (3 pts)

Security Testing (7 pts):
- Attack attempts documented (3 pts)
- Vulnerability assessment (2 pts)
- Mitigation recommendations (2 pts)

Accessibility Testing (8 pts):
- WCAG compliance checks (4 pts)
- Tool usage evidence (2 pts)
- Detailed findings (2 pts)

API Testing (7 pts):
- Postman collection completeness (3 pts)
- JavaScript test scripts (2 pts)
- Coverage of HTTP methods (2 pts)

TASK 2: Mobile Application Testing (25 points)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
iOS Testing (12 pts):
- Platform-specific test cases (5 pts)
- Gesture and interruption testing (4 pts)
- Documentation quality (3 pts)

Android Testing (13 pts):
- Platform-specific test cases (5 pts)
- Device compatibility testing (4 pts)
- Battery/network testing (4 pts)

TASK 3: Localization Testing (10 points)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Language testing coverage (4 pts)
- RTL testing (3 pts)
- Format verification (3 pts)

TASK 4: Exploratory Testing/SBTM (15 points)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Charter quality (3 pts)
- Session execution (5 pts)
- Documentation completeness (4 pts)
- Findings and follow-up (3 pts)

TASK 5: Test Summary Report (20 points)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Executive summary (4 pts)
- Test execution analysis (5 pts)
- Defect analysis and metrics (5 pts)
- Risk assessment (3 pts)
- GO/NO-GO recommendation (3 pts)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GRADING SCALE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
90-100: Excellent - Ready for professional QA work
80-89:  Good - Minor improvements needed
70-79:  Satisfactory - Practice more
< 70:   Needs improvement - Review concepts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 60-Question Assessment

### 4.1 Assessment Structure

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEEK 2 COMPREHENSIVE ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Questions: 60
Time Limit: 90 minutes
Passing Score: 70%

Question Types:
- Multiple Choice (25 questions) @ 1 point each = 25 points
- True/False (10 questions) @ 0.5 points each = 5 points
- Scenario-Based (15 questions) @ 2 points each = 30 points
- Short Answer (10 questions) @ 1 point each = 10 points

Total Points: 70

Topics Covered:
- Day 8 (Web Testing Part 1): 10 questions
- Day 9 (Web Testing Part 2): 12 questions
- Day 10 (Mobile Testing): 10 questions
- Day 11 (Specialized Testing): 10 questions
- Day 12 (Regression/Smoke): 10 questions
- Day 13 (Exploratory/SBTM): 8 questions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 4.2 Sample Questions (20 of 60)

**Section A: Multiple Choice (10 questions)**

**Q1. Which OWASP Top 10 (2021) vulnerability involves executing malicious SQL commands?**
a) Broken Access Control
b) Injection
c) Cryptographic Failures
d) Security Misconfiguration

**Answer:** b) Injection

---

**Q2. What is the WCAG 2.1 Level AA minimum color contrast ratio for normal text?**
a) 3:1
b) 4.5:1
c) 7:1
d) 10:1

**Answer:** b) 4.5:1

---

**Q3. In mobile testing, what does "RTL" stand for?**
a) Real-Time Loading
b) Right-to-Left
c) Ready to Launch
d) Return to Login

**Answer:** b) Right-to-Left (for languages like Arabic, Hebrew)

---

**Q4. Which testing tour focuses on testing each feature in isolation?**
a) Complexity Tour
b) Scenario Tour
c) Feature Tour
d) User Tour

**Answer:** c) Feature Tour

---

**Q5. What is the recommended duration for an SBTM testing session?**
a) 30 minutes
b) 60 minutes
c) 90 minutes
d) 120 minutes

**Answer:** c) 90 minutes

---

**Q6. Which HTTP status code indicates "Unauthorized"?**
a) 200
b) 400
c) 401
d) 500

**Answer:** c) 401

---

**Q7. In regression testing, which type uses ALL test cases?**
a) Selective Regression
b) Corrective Regression
c) Retest-All Regression
d) Progressive Regression

**Answer:** c) Retest-All Regression

---

**Q8. Which mobile app type has the best performance?**
a) Web app
b) Hybrid app
c) Native app
d) All have equal performance

**Answer:** c) Native app

---

**Q9. What does "i18n" stand for?**
a) Internet 18 Nations
b) Internationalization
c) Integration 18
d) Information 18 Network

**Answer:** b) Internationalization (i + 18 letters + n)

---

**Q10. In the TBS model for SBTM, what is the ideal percentage for "Test" time?**
a) 40-50%
b) 60-70%
c) 70-80%
d) 90-100%

**Answer:** c) 70-80%

---

**Section B: True/False (5 questions)**

**Q11. Smoke testing is deep and narrow in scope.**
True / False

**Answer:** False (Smoke testing is wide and shallow)

---

**Q12. XSS stands for Cross-Site Scripting.**
True / False

**Answer:** True

---

**Q13. iOS has more device fragmentation than Android.**
True / False

**Answer:** False (Android has significantly more fragmentation)

---

**Q14. ARIA attributes can replace native HTML semantic elements.**
True / False

**Answer:** False (Use native HTML when possible; ARIA is supplementary)

---

**Q15. Exploratory testing is completely unstructured and random.**
True / False

**Answer:** False (Exploratory testing is structured and guided by charters/heuristics)

---

**Section C: Scenario-Based (3 questions)**

**Q16. Scenario: You're testing a login form and enter `admin' OR '1'='1` as username. The system returns a database error message showing table names. What vulnerability have you discovered?**

a) XSS (Cross-Site Scripting)
b) SQL Injection
c) CSRF (Cross-Site Request Forgery)
d) Broken Authentication

**Answer:** b) SQL Injection

---

**Q17. Scenario: You're testing mobile app on iOS. After filling half a registration form, you receive a phone call. After ending the call and returning to the app, all form data is lost. What type of testing would have caught this issue?**

a) Functional Testing
b) Performance Testing
c) Interruption Testing
d) Installation Testing

**Answer:** c) Interruption Testing

---

**Q18. Scenario: Your regression test suite has 800 test cases taking 16 hours to execute. You need to reduce execution time. You identify 150 obsolete tests, merge 100 redundant tests, and run 300 tests in parallel (reducing their time by 75%). What is the new approximate execution time?**

a) 4 hours
b) 6 hours
c) 8 hours
d) 10 hours

**Answer:** b) 6 hours
Calculation:
- Remove obsolete: 800 - 150 = 650 tests
- Merge redundant: 650 - 50 = 600 tests (100 tests become 50)
- Parallel execution: 300 tests save 75% time
- Original: 16 hours for 800 = 1.2 min/test
- New: 600 tests × 1.2 min = 720 min
- Parallel savings: 300 tests × 1.2 × 0.75 = 270 min saved
- Final: (720 - 270) / 60 = 7.5 hours (closest answer: b)

---

**Section D: Short Answer (2 questions)**

**Q19. List the FCC CUTS VIDS testing tours (all 11).**

**Answer:**
Business District (FCC):
- Feature Tour
- Complexity Tour
- Claims Tour

Historical District (CUTS):
- Configuration Tour
- User Tour
- Testability Tour
- Scenarios Tour

Entertainment District (VIDS):
- Variability Tour
- Interoperability Tour
- Data Tour
- Structure Tour

---

**Q20. Explain the difference between i18n and L10n.**

**Answer:**
- **Internationalization (i18n):** The process of designing software so it CAN be adapted to various languages and regions WITHOUT code changes. It's the architecture/framework (done once by developers).

- **Localization (L10n):** The process of adapting software FOR a specific language, region, or culture. It involves translation, format adaptation, and cultural customization (done multiple times for each target market).

Relationship: i18n (once) → L10n (many times)

---

*(Note: This is a sample of 20 questions. Full assessment has 60 questions covering all Week 2 topics)*

---

## Gap Analysis

### 5.1 Self-Assessment Checklist

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEEK 2 KNOWLEDGE CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Rate your confidence (1-5):
1 = No understanding
2 = Basic awareness
3 = Can explain and apply
4 = Can teach others
5 = Expert level

DAY 8: WEB APPLICATION TESTING - PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Client-side vs server-side testing             [ /5]
□ Browser compatibility testing strategies       [ /5]
□ Responsive design testing (all breakpoints)    [ /5]
□ Form validation testing (30 scenarios)         [ /5]
□ Cookies and session testing                    [ /5]

Subtotal Day 8:  [ /25]

DAY 9: WEB APPLICATION TESTING - PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ OWASP Top 10 vulnerabilities                   [ /5]
□ SQL injection testing and prevention           [ /5]
□ XSS types and testing methods                  [ /5]
□ Performance testing metrics (LCP, CLS, etc.)   [ /5]
□ API testing with Postman (with JS scripts)     [ /5]

Subtotal Day 9:  [ /25]

DAY 10: MOBILE APPLICATION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Mobile app types (Native, Hybrid, Web)         [ /5]
□ iOS vs Android testing differences             [ /5]
□ Gesture testing (all types)                    [ /5]
□ Interruption and orientation testing           [ /5]
□ Device compatibility matrix approach           [ /5]

Subtotal Day 10:  [ /25]

DAY 11: SPECIALIZED TESTING TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Localization vs Internationalization           [ /5]
□ WCAG 2.1 conformance levels (A, AA, AAA)       [ /5]
□ ARIA attributes and roles                      [ /5]
□ Usability testing methods and metrics          [ /5]
□ Nielsen's 10 Usability Heuristics              [ /5]

Subtotal Day 11:  [ /25]

DAY 12: REGRESSION & SMOKE TESTING STRATEGIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Regression testing types (all 6)               [ /5]
□ Test case prioritization techniques            [ /5]
□ Smoke vs Sanity vs Regression differences      [ /5]
□ Test suite optimization strategies             [ /5]
□ Automation ROI calculation                     [ /5]

Subtotal Day 12:  [ /25]

DAY 13: EXPLORATORY TESTING & SBTM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Exploratory testing heuristics                 [ /5]
□ Testing tours (FCC CUTS VIDS)                  [ /5]
□ Charter creation (format and quality)          [ /5]
□ Session execution and TBS model                [ /5]
□ SBTM metrics and reporting                     [ /5]

Subtotal Day 13:  [ /25]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL SCORE:  [ /150]

ASSESSMENT:
135-150 (90-100%): Excellent - Ready for Week 3
120-134 (80-89%):  Good - Minor review needed
105-119 (70-79%):  Satisfactory - Review weak areas
<105 (<70%):       Need more practice - Revisit concepts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 5.2 Areas for Additional Practice

**If you scored < 4 in any area, focus on:**

**Security Testing:**
- Practice identifying OWASP Top 10 vulnerabilities
- Hands-on SQL injection and XSS testing
- Use DVWA (Damn Vulnerable Web App) for practice
- Learn mitigation strategies

**Mobile Testing:**
- Practice on real devices (borrow or use cloud services)
- Test apps on both iOS and Android
- Focus on platform-specific scenarios
- Practice gesture and interruption testing

**Accessibility:**
- Use WebAIM Contrast Checker extensively
- Practice with NVDA or VoiceOver
- Review WCAG 2.1 guidelines thoroughly
- Test real websites for compliance

**API Testing:**
- Set up Postman and practice
- Write JavaScript test scripts
- Test various HTTP methods
- Learn REST API principles

**Exploratory Testing:**
- Practice all 11 testing tours
- Conduct multiple SBTM sessions
- Write diverse charters
- Track TBS metrics

---

## Week 3 Preparation

### 6.1 Week 3 Overview

**Theme:** Professional Testing Skills & Career Development

**Week 3 Topics:**
```
Day 15: Agile Testing & Scrum
- Agile methodology overview
- Testing in Scrum
- Sprint ceremonies
- Continuous testing

Day 16: Test Management & Reporting
- Test management tools
- Test metrics and KPIs
- Executive reporting
- Stakeholder communication

Day 17: Testing Tools & Technologies
- Bug tracking (Jira, etc.)
- Test management (TestRail, Zephyr)
- Collaboration tools
- CI/CD basics for testers

Day 18: SQL for Testers
- Database fundamentals
- SELECT queries
- Joins and subqueries
- Data validation queries

Day 19: Introduction to Test Automation
- Automation concepts
- Selenium WebDriver basics
- When to automate
- Test automation frameworks

Day 20: Manual Testing Career Development
- Resume building
- Interview preparation
- Certification paths (ISTQB, etc.)
- Continuous learning

Day 21: Week 3 Review & Final Assessment
- Comprehensive review
- Final practical project
- 80-question final assessment
- Career roadmap
```

### 6.2 Prerequisites for Week 3

**Ensure you can:**
✓ Execute comprehensive web application testing
✓ Perform security testing (OWASP Top 10)
✓ Test mobile apps on iOS and Android
✓ Conduct accessibility testing (WCAG)
✓ Build and optimize regression suites
✓ Perform exploratory testing with SBTM
✓ Write professional test documentation

**Recommended Pre-work:**
1. Install tools:
   - Jira (free trial or use Cloud version)
   - TestRail (free trial)
   - MySQL Workbench or DBeaver
   - Selenium IDE (browser extension)

2. Create accounts:
   - GitHub (version control)
   - LinkedIn (career development)
   - Stack Overflow (community)

3. Familiarize with:
   - Basic Agile/Scrum concepts
   - SQL SELECT syntax
   - Test automation basics

4. Practice projects:
   - Complete 5 more exploratory sessions
   - Test 2-3 real websites for security
   - Perform accessibility audit on 3 sites

---

### 6.3 Week 2 Success Checklist

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEEK 2 COMPLETION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STUDY COMPLETION:
□ Day 8: Web Testing Part 1 (4-5 hours)
□ Day 9: Web Testing Part 2 (5-6 hours)
□ Day 10: Mobile Testing (4-5 hours)
□ Day 11: Specialized Testing (5-6 hours)
□ Day 12: Regression/Smoke (5-6 hours)
□ Day 13: Exploratory/SBTM (5-6 hours)
□ Day 14: Review & Assessment (8 hours)

PRACTICAL SKILLS ACHIEVED:
□ Can test web applications comprehensively
□ Can identify security vulnerabilities
□ Can test mobile apps (iOS & Android)
□ Can verify WCAG accessibility compliance
□ Can build regression test suites
□ Can optimize test execution
□ Can conduct exploratory testing with SBTM
□ Can write effective charters

TOOLS EXPERIENCE:
□ BrowserStack or LambdaTest
□ WebAIM Contrast Checker
□ Postman for API testing
□ NVDA or VoiceOver for screen reader testing
□ Mobile device testing (emulator or real)
□ Session management for SBTM

ASSESSMENTS COMPLETED:
□ Day 14: 60 questions (Score: __/70)
□ Practical project (Score: __/100)
□ Self-assessment (Score: __/150)

DOCUMENTATION CREATED:
□ Browser compatibility reports
□ Security testing reports
□ API test collections (Postman)
□ Mobile test execution reports
□ Accessibility compliance reports
□ Exploratory session sheets
□ Test summary reports

CONFIDENCE LEVEL:
Overall Week 2 Confidence: [1] [2] [3] [4] [5]

READY FOR WEEK 3?
□ Yes, confident and ready
□ Yes, but need to review [specify topics]: __________
□ No, need more time on Week 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Conclusion & Next Steps

### Congratulations on Completing Week 2!

**What You've Achieved:**
✓ Advanced web application testing skills (security, performance, API)
✓ Comprehensive mobile testing expertise (iOS & Android)
✓ Specialized testing knowledge (L10n, accessibility, usability)
✓ Test suite management and optimization
✓ Exploratory testing with SBTM framework
✓ Professional testing documentation skills

**Your Learning Journey:**
```
Week 1: FOUNDATIONS ✓
├── SDLC & STLC
├── Testing Levels & Types
├── Test Design Techniques
├── Documentation
└── Defect Management

Week 2: ADVANCED TECHNIQUES ✓
├── Web Application Testing
├── Mobile Testing
├── Security & API Testing
├── Specialized Testing
├── Regression Strategies
└── Exploratory Testing

Week 3: PROFESSIONAL SKILLS (Coming Next)
├── Agile Testing
├── Test Management
├── Tools & Technologies
├── SQL for Testers
├── Automation Introduction
└── Career Development
```

**Immediate Next Steps:**
1. Complete all Week 2 exercises if not done
2. Take the 60-question assessment
3. Complete the practical project
4. Review any weak areas identified
5. Install Week 3 tools
6. Take a day to consolidate learning
7. Start Week 3 with confidence!

**Key Skills Acquired:**
→ Can independently test web and mobile applications
→ Can identify and document security vulnerabilities
→ Can verify accessibility compliance
→ Can optimize test suites for efficiency
→ Can conduct structured exploratory testing
→ Ready for professional QA roles

---

**You're now ready for Week 3! 🚀**

**Study Time for Day 14:** 8 hours

---

*End of Week 2 - Advanced Testing Techniques*
*Continue to Week 3 - Professional Testing Skills*
