
# Week 2 Supplementary Materials
## Manual Testing Learning Journey - Advanced Testing & Specialized Domains

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

### Day 8 Checklist: Web Application Testing - Part 1
- [ ] Understand web application architecture (frontend, backend, database)
- [ ] Learn HTML, CSS, JavaScript testing fundamentals
- [ ] Master browser DevTools for testing
- [ ] Understand DOM structure and manipulation
- [ ] Learn cross-browser testing concepts
- [ ] Practice testing forms, navigation, and UI elements
- [ ] Complete 5 practical exercises
- [ ] Score at least 16/20 on assessment questions
- [ ] Test at least 2 different web applications

**Time Estimate:** 4-5 hours

---

### Day 9 Checklist: Web Application Testing - Part 2
- [ ] Understand client-side vs server-side validation
- [ ] Learn security testing basics (XSS, SQL injection, CSRF)
- [ ] Master session and cookie testing
- [ ] Understand API testing fundamentals
- [ ] Learn responsive design testing
- [ ] Practice accessibility testing (WCAG guidelines)
- [ ] Complete 5 practical exercises
- [ ] Score at least 16/20 on assessment questions
- [ ] Perform security testing on sample applications

**Time Estimate:** 4-5 hours

---

### Day 10 Checklist: Mobile Application Testing
- [ ] Understand mobile testing types (native, hybrid, web)
- [ ] Learn iOS and Android testing differences
- [ ] Master mobile-specific testing scenarios
- [ ] Understand gestures, orientation, and interruptions
- [ ] Learn mobile performance testing
- [ ] Practice testing on emulators/simulators
- [ ] Complete 5 practical exercises
- [ ] Score at least 16/20 on assessment questions
- [ ] Test at least 2 mobile applications

**Time Estimate:** 4-5 hours

---

### Day 11 Checklist: Specialized Testing Types
- [ ] Understand performance testing (load, stress, scalability)
- [ ] Learn security testing methodologies
- [ ] Master usability testing principles
- [ ] Understand compatibility testing matrix
- [ ] Learn localization and internationalization testing
- [ ] Practice accessibility testing with tools
- [ ] Complete 5 practical exercises
- [ ] Score at least 16/20 on assessment questions

**Time Estimate:** 4-5 hours

---

### Day 12 Checklist: Regression & Smoke Testing Strategies
- [ ] Master regression testing strategies
- [ ] Understand test case selection techniques
- [ ] Learn smoke test suite design
- [ ] Understand impact analysis
- [ ] Learn test automation prioritization
- [ ] Practice creating regression test suites
- [ ] Complete 5 practical exercises
- [ ] Score at least 16/20 on assessment questions
- [ ] Design regression suite for sample application

**Time Estimate:** 3-4 hours

---

### Day 13 Checklist: Exploratory Testing & SBTM
- [ ] Understand exploratory testing principles
- [ ] Learn Session-Based Test Management (SBTM)
- [ ] Master charter creation
- [ ] Understand heuristics and oracles
- [ ] Learn note-taking during exploration
- [ ] Practice time-boxed testing sessions
- [ ] Complete 5 practical exercises
- [ ] Score at least 16/20 on assessment questions
- [ ] Conduct 3 exploratory testing sessions

**Time Estimate:** 4-5 hours

---

### Day 14 Checklist: Week 2 Review & Assessment
- [ ] Review all notes from Days 8-13
- [ ] Complete comprehensive review summary
- [ ] Work through practical project (4-6 hours)
- [ ] Take 50-question comprehensive assessment
- [ ] Score at least 40/50 (80%) on final assessment
- [ ] Identify weak areas for additional practice
- [ ] Create Week 3 preparation plan
- [ ] Celebrate Week 2 completion

**Time Estimate:** 6-8 hours

---

## Templates

### Template 1: Web Application Test Case Template

```
WEB APPLICATION TEST CASE
Project: [Project Name]
Application URL: [URL]
Created by: [Your Name]
Date: [DD/MM/YYYY]

==========================================

Test Case ID: TC_WEB_[Module]_[Number]
Example: TC_WEB_LOGIN_001

Test Case Title: [Clear, descriptive title]
Example: Verify login form validation with empty fields

Module/Feature: [Module name]
Example: User Authentication

Browser/Environment:
- Browser: [Chrome 120 / Firefox 121 / Safari 17]
- OS: [Windows 11 / macOS 13 / Ubuntu 22.04]
- Screen Resolution: [1920x1080 / 1366x768]
- Device: [Desktop / Tablet / Mobile]

Test Case Priority: [P0/P1/P2/P3]

Test Type: [Functional/UI/Security/Performance/Compatibility]

Prerequisites:
1. [Condition 1]
2. [Condition 2]
Example:
1. Application is accessible at https://example.com
2. Test user account exists
3. Browser cache is cleared

Test Data:
| Field      | Test Data           | Type    |
|------------|---------------------|---------|
| Username   | test@example.com    | Valid   |
| Password   | Test@12345          | Valid   |
| Email      | invalid-email       | Invalid |

Test Steps:
| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Navigate to login page | Login form displayed | | |
| 2 | Leave username empty | Field highlighted in red | | |
| 3 | Click Login button | Error message shown | | |
| 4 | Enter valid username | Field accepts input | | |
| 5 | Enter valid password | Password is masked | | |
| 6 | Click Login button | User logged in successfully | | |

Browser Console Checks:
- [ ] No JavaScript errors
- [ ] No 404 errors
- [ ] No CORS errors
- [ ] No security warnings

Network Tab Checks:
- [ ] API calls successful (200 status)
- [ ] Response time < 2 seconds
- [ ] Proper request/response headers

Accessibility Checks:
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Proper ARIA labels
- [ ] Color contrast meets WCAG standards

Expected Result:
[Detailed expected behavior]

Actual Result:
[To be filled during execution]

Status: [Pass/Fail/Blocked/Not Executed]

Defect ID (if any): [BUG-XXX]

Screenshots/Evidence:
[Attach screenshots, videos, or logs]

Comments:
[Any additional observations]

==========================================
```

---

### Template 2: Mobile Application Test Case Template

```
MOBILE APPLICATION TEST CASE
Project: [Project Name]
App Version: [Version Number]
Created by: [Your Name]
Date: [DD/MM/YYYY]

==========================================

Test Case ID: TC_MOB_[Module]_[Number]
Example: TC_MOB_LOGIN_001

Test Case Title: [Clear, descriptive title]
Example: Verify app behavior on network interruption

Module/Feature: [Module name]

Device Configuration:
- Device: [iPhone 14 Pro / Samsung Galaxy S23]
- OS Version: [iOS 17.2 / Android 14]
- Screen Size: [6.1" / 6.8"]
- Network: [WiFi / 4G / 5G]
- App Version: [v2.3.1]
- Build Number: [Build-456]

Test Case Priority: [P0/P1/P2/P3]

Test Type: [Functional/UI/Performance/Compatibility/Interruption]

Prerequisites:
1. [Condition 1]
2. [Condition 2]
Example:
1. App installed on device
2. User logged in
3. Location services enabled
4. Notifications enabled

Test Data:
[Relevant test data]

Test Steps:
| Step | Action | Expected Result | Actual Result | Status |
|------|--------|-----------------|---------------|--------|
| 1 | Launch app | Splash screen shown | | |
| 2 | Navigate to feature | Feature loads correctly | | |
| 3 | Perform action | Action completes | | |

Mobile-Specific Checks:
- [ ] Portrait orientation works
- [ ] Landscape orientation works
- [ ] Gesture controls work (swipe, pinch, tap)
- [ ] Back button behavior correct
- [ ] App handles interruptions (calls, SMS)
- [ ] Battery consumption acceptable
- [ ] Memory usage within limits
- [ ] App works offline (if applicable)
- [ ] Push notifications work
- [ ] Deep linking works

Performance Checks:
- [ ] App launch time < 3 seconds
- [ ] Screen transitions smooth
- [ ] No UI freezing
- [ ] Scrolling is smooth

Interruption Testing:
- [ ] Incoming call handling
- [ ] Low battery warning
- [ ] Network switch (WiFi to 4G)
- [ ] App backgrounding/foregrounding
- [ ] Device rotation
- [ ] Low memory condition

Expected Result:
[Detailed expected behavior]

Actual Result:
[To be filled during execution]

Status: [Pass/Fail/Blocked/Not Executed]

Defect ID (if any): [BUG-XXX]

Screenshots/Videos:
[Attach evidence]

Device Logs:
[Attach crash logs if any]

Comments:
[Any additional observations]

==========================================
```

---

### Template 3: Exploratory Testing Charter

```
EXPLORATORY TESTING CHARTER
Project: [Project Name]
Session ID: ET_[Date]_[Number]
Tester: [Your Name]
Date: [DD/MM/YYYY]

==========================================

CHARTER:
Explore [area/feature] with [resources/tools] to discover [information/risks]

Example:
Explore the checkout process with various payment methods to discover 
data validation issues and security vulnerabilities

SESSION DETAILS:
- Duration: [Time-boxed: 60/90/120 minutes]
- Start Time: [HH:MM]
- End Time: [HH:MM]
- Actual Duration: [Minutes]

MISSION:
[What you're trying to accomplish]

Example:
Test the complete checkout flow including cart management, address entry,
payment processing, and order confirmation

AREAS TO EXPLORE:
1. [Area 1]
2. [Area 2]
3. [Area 3]

Example:
1. Shopping cart operations (add, remove, update quantity)
2. Address validation and auto-complete
3. Payment method selection and processing
4. Promo code application
5. Order summary and confirmation

TEST IDEAS/HEURISTICS:
- [ ] Boundary values
- [ ] Invalid inputs
- [ ] Interruptions
- [ ] Performance under load
- [ ] Security vulnerabilities
- [ ] Usability issues
- [ ] Error handling
- [ ] Data persistence

RISKS TO INVESTIGATE:
1. [Risk 1]
2. [Risk 2]

Example:
1. Payment information security
2. Session timeout handling
3. Concurrent user scenarios
4. Data validation bypass

TOOLS USED:
- [ ] Browser DevTools
- [ ] Proxy tools (Burp Suite, Fiddler)
- [ ] Screen recorder
- [ ] Note-taking app
- [ ] Bug tracking tool

SESSION NOTES:
[Time] - [Observation/Action]

Example:
10:00 - Started testing checkout flow
10:15 - Found issue with promo code validation
10:30 - Tested payment with expired card
10:45 - Discovered session timeout issue

BUGS FOUND:
| Bug ID | Title | Severity | Priority | Status |
|--------|-------|----------|----------|--------|
| BUG-101 | Promo code accepts expired codes | High | P1 | New |
| BUG-102 | Session timeout not handled | Medium | P2 | New |

ISSUES/BLOCKERS:
- [Issue 1]
- [Issue 2]

QUESTIONS RAISED:
1. [Question 1]
2. [Question 2]

AREAS NOT COVERED:
- [Area 1]
- [Area 2]

COVERAGE ASSESSMENT:
- Areas Covered: [Percentage or description]
- Depth of Testing: [Shallow/Medium/Deep]
- Confidence Level: [Low/Medium/High]

FOLLOW-UP ACTIONS:
1. [Action 1]
2. [Action 2]

Example:
1. Create detailed test cases for payment flow
2. Investigate session management further
3. Test with different browsers

DEBRIEF NOTES:
[Summary of session, key findings, recommendations]

Example:
Session was productive. Found 2 critical issues in checkout flow.
Payment security needs more investigation. Recommend dedicated
security testing session for payment processing.

==========================================
```

---

### Template 4: Security Testing Checklist

```
SECURITY TESTING CHECKLIST
Project: [Project Name]
Application: [Web/Mobile/API]
Tester: [Your Name]
Date: [DD/MM/YYYY]

==========================================

AUTHENTICATION & AUTHORIZATION:
- [ ] Password complexity requirements enforced
- [ ] Account lockout after failed attempts
- [ ] Session timeout implemented
- [ ] Secure password reset mechanism
- [ ] Multi-factor authentication (if applicable)
- [ ] Role-based access control working
- [ ] Privilege escalation prevented
- [ ] Default credentials changed

INPUT VALIDATION:
- [ ] SQL injection prevented
- [ ] Cross-Site Scripting (XSS) prevented
- [ ] Command injection prevented
- [ ] Path traversal prevented
- [ ] File upload validation
- [ ] Input length validation
- [ ] Special character handling
- [ ] HTML encoding implemented

SESSION MANAGEMENT:
- [ ] Session ID randomness
- [ ] Session fixation prevented
- [ ] Secure cookie flags (HttpOnly, Secure)
- [ ] Session expiration on logout
- [ ] Concurrent session handling
- [ ] Session hijacking prevention

DATA PROTECTION:
- [ ] Sensitive data encrypted in transit (HTTPS)
- [ ] Sensitive data encrypted at rest
- [ ] Password hashing (not plain text)
- [ ] Credit card data PCI-DSS compliant
- [ ] Personal data GDPR compliant
- [ ] Data masking in logs
- [ ] Secure data deletion

ERROR HANDLING:
- [ ] Generic error messages (no stack traces)
- [ ] No sensitive information in errors
- [ ] Proper logging without sensitive data
- [ ] 404 pages don't reveal structure

SECURITY HEADERS:
- [ ] Content-Security-Policy
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Strict-Transport-Security
- [ ] X-XSS-Protection

API SECURITY:
- [ ] API authentication required
- [ ] Rate limiting implemented
- [ ] Input validation on API
- [ ] Proper HTTP methods used
- [ ] API versioning
- [ ] CORS properly configured

MOBILE-SPECIFIC:
- [ ] Certificate pinning
- [ ] Secure data storage
- [ ] Jailbreak/root detection
- [ ] Code obfuscation
- [ ] Secure communication

FINDINGS:
| Issue | Severity | Description | Recommendation |
|-------|----------|-------------|----------------|
| | | | |

==========================================
```

---

### Template 5: Performance Testing Report

```
PERFORMANCE TESTING REPORT
Project: [Project Name]
Test Type: [Load/Stress/Scalability/Endurance]
Date: [DD/MM/YYYY]
Prepared by: [Your Name]

==========================================

1. EXECUTIVE SUMMARY
[Brief overview of performance testing results]

2. TEST OBJECTIVES
- [Objective 1]
- [Objective 2]

Example:
- Verify application handles 1000 concurrent users
- Identify performance bottlenecks
- Measure response times under load

3. TEST ENVIRONMENT
- Application Version: [Version]
- Server Configuration: [Details]
- Database: [Type and version]
- Network: [Bandwidth details]
- Load Generation Tool: [JMeter/LoadRunner/K6]

4. TEST SCENARIOS

Scenario 1: [Name]
- Virtual Users: [Number]
- Duration: [Minutes]
- Ramp-up Time: [Seconds]
- Think Time: [Seconds]

5. PERFORMANCE METRICS

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Response Time (avg) | < 2s | 1.8s | ✓ Pass |
| Response Time (95th) | < 3s | 2.9s | ✓ Pass |
| Throughput | > 100 req/s | 120 req/s | ✓ Pass |
| Error Rate | < 1% | 0.5% | ✓ Pass |
| CPU Usage | < 70% | 65% | ✓ Pass |
| Memory Usage | < 80% | 75% | ✓ Pass |

6. LOAD TEST RESULTS

Concurrent Users vs Response Time:
| Users | Avg Response (s) | 95th Percentile (s) | Error % |
|-------|------------------|---------------------|---------|
| 100   | 0.8              | 1.2                 | 0%      |
| 500   | 1.5              | 2.1                 | 0.2%    |
| 1000  | 2.3              | 3.5                 | 0.8%    |
| 1500  | 4.2              | 6.8                 | 2.5%    |

7. BOTTLENECKS IDENTIFIED
1. [Bottleneck 1 with details]
2. [Bottleneck 2 with details]

Example:
1. Database query optimization needed for user search
2. Image loading causing delays on product pages

8. RECOMMENDATIONS
1. [Recommendation 1]
2. [Recommendation 2]

Example:
1. Implement database indexing on user table
2. Add image caching and lazy loading
3. Increase server memory to 16GB

9. GRAPHS & CHARTS
[Attach performance graphs]
- Response time over time
- Throughput over time
- Resource utilization

10. CONCLUSION
[Overall assessment and go/no-go recommendation]

==========================================
```

---

### Template 6: Cross-Browser Testing Matrix

```
CROSS-BROWSER TESTING MATRIX
Project: [Project Name]
Application URL: [URL]
Date: [DD/MM/YYYY]

==========================================

BROWSERS TO TEST:
✓ = Pass | ✗ = Fail | ⚠ = Issues | - = Not Tested

| Feature/Page | Chrome 120 | Firefox 121 | Safari 17 | Edge 120 | Mobile Safari | Chrome Mobile |
|--------------|------------|-------------|-----------|----------|---------------|---------------|
| Homepage | | | | | | |
| Login | | | | | | |
| Registration | | | | | | |
| Product List | | | | | | |
| Product Detail | | | | | | |
| Shopping Cart | | | | | | |
| Checkout | | | | | | |
| Payment | | | | | | |
| User Profile | | | | | | |
| Search | | | | | | |

SCREEN RESOLUTIONS:
| Resolution | Chrome | Firefox | Safari | Edge |
|------------|--------|---------|--------|------|
| 1920x1080 | | | | |
| 1366x768 | | | | |
| 1280x720 | | | | |
| 768x1024 (Tablet) | | | | |
| 375x667 (Mobile) | | | | |

ISSUES FOUND:
| Browser | Issue | Severity | Screenshot | Status |
|---------|-------|----------|------------|--------|
| | | | | |

BROWSER-SPECIFIC NOTES:
Chrome:
- [Note 1]

Firefox:
- [Note 1]

Safari:
- [Note 1]

Edge:
- [Note 1]

COMPATIBILITY SUMMARY:
- Total Features Tested: [Number]
- Fully Compatible: [Number]
- Minor Issues: [Number]
- Major Issues: [Number]
- Blockers: [Number]

RECOMMENDATIONS:
1. [Recommendation 1]
2. [Recommendation 2]

==========================================
```

---

## Quick Reference Guides

### QRG 1: Web Testing Essentials

```
WEB APPLICATION TESTING QUICK GUIDE

BROWSER DEVTOOLS SHORTCUTS:
Chrome/Edge:
- F12 or Ctrl+Shift+I: Open DevTools
- Ctrl+Shift+C: Inspect element
- Ctrl+Shift+J: Console
- Ctrl+Shift+M: Device toolbar (responsive)
- Ctrl+R: Reload page
- Ctrl+Shift+R: Hard reload (clear cache)

Firefox:
- F12: Open DevTools
- Ctrl+Shift+K: Console
- Ctrl+Shift+M: Responsive design mode

COMMON WEB TESTING AREAS:
1. Forms & Input Validation
   - Required fields
   - Field length limits
   - Special characters
   - Email/phone format
   - Date pickers
   - File uploads

2. Navigation
   - Menu links
   - Breadcrumbs
   - Back button
   - Deep linking
   - 404 pages

3. Session Management
   - Login/logout
   - Session timeout
   - Remember me
   - Multiple tabs
   - Concurrent sessions

4. UI/UX
   - Layout consistency
   - Responsive design
   - Loading indicators
   - Error messages
   - Tooltips/help text

5. Performance
   - Page load time
   - Image optimization
   - Caching
   - Lazy loading
   - CDN usage

SECURITY TESTING BASICS:
- SQL Injection: ' OR '1'='1
- XSS: <script>alert('XSS')</script>
- Path Traversal: ../../etc/passwd
- CSRF: Check for tokens
- Sensitive data exposure

ACCESSIBILITY TESTING:
- Keyboard navigation (Tab, Enter, Esc)
- Screen reader compatibility
- Color contrast (4.5:1 for text)
- Alt text for images
- ARIA labels
- Focus indicators
```

---

### QRG 2: Mobile Testing Essentials

```
MOBILE APPLICATION TESTING QUICK GUIDE

MOBILE-SPECIFIC TEST SCENARIOS:

1. GESTURES:
   - Tap
   - Double tap
   - Long press
   - Swipe (left, right, up, down)
   - Pinch to zoom
   - Rotate
   - Shake

2. ORIENTATION:
   - Portrait mode
   - Landscape mode
   - Auto-rotation
   - Orientation lock

3. INTERRUPTIONS:
   - Incoming call
   - Incoming SMS
   - Push notification
   - Alarm
   - Low battery warning
   - Network loss
   - App backgrounding

4. NETWORK CONDITIONS:
   - WiFi
   - 4G/5G
   - 3G/2G
   - Airplane mode
   - Network switching
   - Offline mode

5. DEVICE-SPECIFIC:
   - Different screen sizes
   - Different OS versions
   - Different manufacturers
   - Different resolutions
   - Notch/cutout handling

6. PERMISSIONS:
   - Camera
   - Microphone
   - Location
   - Contacts
   - Photos
   - Notifications
   - Storage

7. BATTERY & PERFORMANCE:
   - Battery consumption
   - Memory usage
   - CPU usage
   - App size
   - Startup time
   - Response time

MOBILE TESTING TOOLS:
- Android: Android Studio, ADB
- iOS: Xcode, Instruments
- Cross-platform: Appium, BrowserStack
- Performance: Android Profiler, Xcode Instruments

COMMON MOBILE BUGS:
- UI elements cut off
- Text truncation
- Keyboard covering input
- Slow performance
- Crashes on specific devices
- Memory leaks
- Battery drain
```

---

### QRG 3: Exploratory Testing Heuristics

```
EXPLORATORY TESTING HEURISTICS

SFDPOT HEURISTIC (James Bach):
S - Structure: Test the architecture
F - Function: Test what it does
D - Data: Test with various data
P - Platform: Test on different platforms
O - Operations: Test user operations
T - Time: Test timing and sequences

CRUD HEURISTIC:
C - Create: Test creation of data
R - Read: Test reading/viewing data
U - Update: Test modification of data
D - Delete: Test deletion of data

FAILURE PATTERNS:
- Boundary values
- Empty/null values
- Special characters
- Large data sets
- Concurrent operations
- Interruptions
- Error conditions

GOLDILOCKS TESTING:
- Too big
- Too small
- Just right

TOURING HEURISTICS:
- Guidebook Tour: Follow documentation
- Money Tour: Most important features
- Landmark Tour: Key features
- Intellectual Tour: Complex features
- FedEx Tour: Data flow
- Garbage Collector's Tour: Error handling
- Bad Neighborhood Tour: Buggy areas
- Museum Tour: Legacy features

ORACLES (How to know if it's working):
- Specification
- Comparable products
- Past versions
- User expectations
- Product image
- Statutes/standards
- History (previous bugs)

TIME-BOXING:
- Short sessions: 30-45 minutes
- Medium sessions: 60-90 minutes
- Long sessions: 2 hours max
- Always take breaks
```

---

### QRG 4: Performance Testing Metrics

```
PERFORMANCE TESTING METRICS

KEY METRICS:

1. RESPONSE TIME:
   - Average Response Time
   - Median Response Time
   - 90th Percentile
   - 95th Percentile
   - 99th Percentile
   - Maximum Response Time

2. THROUGHPUT:
   - Requests per second
   - Transactions per second
   - Pages per second
   - Hits per second

3. RESOURCE UTILIZATION:
   - CPU Usage (%)
   - Memory Usage (%)
   - Disk I/O
   - Network Bandwidth

4. ERROR RATE:
   - HTTP Errors (4xx, 5xx)
   - Application Errors
   - Timeout Errors
   - Connection Errors

5. CONCURRENT USERS:
   - Active Users
   - Peak Users
   - Average Users

PERFORMANCE TESTING TYPES:

LOAD TESTING:
- Purpose: Test under expected load
- Users: Normal to peak load
- Duration: Extended period
- Goal: Verify performance under load

STRESS TESTING:
- Purpose: Find breaking point
- Users: Beyond peak load
- Duration: Until failure
- Goal: Identify maximum capacity

SPIKE TESTING:
- Purpose: Test sudden load increase
- Users: Rapid increase/decrease
- Duration: Short bursts
- Goal: Verify handling of spikes

ENDURANCE TESTING:
- Purpose: Test over long period
- Users: Normal load
- Duration: Hours to days
- Goal: Find memory leaks

SCALABILITY TESTING:
- Purpose: Test scaling capability
- Users: Gradual increase
- Duration: Varies
- Goal: Verify scaling strategy

PERFORMANCE BENCHMARKS:
- Page Load: < 3 seconds
- API Response: < 1 second
- Database Query: < 100ms
- Search: < 2 seconds
- File Upload: Depends on size
```

---

### QRG 5: Security Testing Checklist

```
SECURITY TESTING QUICK CHECKLIST

OWASP TOP 10 (2021):

1. BROKEN ACCESS CONTROL:
   - Test unauthorized access
   - Test privilege escalation
   - Test IDOR (Insecure Direct Object Reference)

2. CRYPTOGRAPHIC FAILURES:
   - Test data encryption
   - Test password storage
   - Test sensitive data exposure

3. INJECTION:
   - SQL Injection
   - Command Injection
   - LDAP Injection
   - XPath Injection

4. INSECURE DESIGN:
   - Test business logic flaws
   - Test missing security controls

5. SECURITY MISCONFIGURATION:
   - Default credentials
   - Unnecessary features enabled
   - Error messages revealing info

6. VULNERABLE COMPONENTS:
   - Outdated libraries
   - Known vulnerabilities
   - Unpatched systems

7. IDENTIFICATION & AUTHENTICATION:
   - Weak passwords allowed
   - Session management issues
   - Credential stuffing

8. SOFTWARE & DATA INTEGRITY:
   - Unsigned updates
   - Insecure deserialization
   - CI/CD pipeline security

9. SECURITY LOGGING & MONITORING:
   - Insufficient logging
   - No alerting
   - Log tampering

10. SERVER-SIDE REQUEST FORGERY:
    - SSRF vulnerabilities
    - Internal network access

COMMON SECURITY TESTS:

XSS Testing:
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>

SQL Injection:
' OR '1'='1
'; DROP TABLE users--
' UNION SELECT NULL--

Path Traversal:
../../etc/passwd
..\..\windows\system32\config\sam

CSRF Testing:
- Check for CSRF tokens
- Test token validation
- Test same-site cookies

SECURITY TOOLS:
- Burp Suite
- OWASP ZAP
- Nmap
- Wireshark
- SQLMap
```

---

### QRG 6: Regression Testing Strategy

```
REGRESSION TESTING STRATEGY

REGRESSION TEST SELECTION:

1. PRIORITY-BASED:
   - P0: Critical functionality
   - P1: Major features
   - P2: Important features
   - P3: Nice-to-have features

2. RISK-BASED:
   - High-risk areas
   - Frequently changed code
   - Complex modules
   - Integration points

3. IMPACT-BASED:
   - Changed modules
   - Dependent modules
   - Integration points
   - End-to-end flows

REGRESSION SUITE TYPES:

FULL REGRESSION:
- All test cases
- Time: High
- Frequency: Major releases
- Coverage: 100%

SELECTIVE REGRESSION:
- Impacted test cases
- Time: Medium
- Frequency: Minor releases
- Coverage: 30-50%

SMOKE REGRESSION:
- Critical test cases
- Time: Low
- Frequency: Every build
- Coverage: 10-20%

REGRESSION AUTOMATION:
- Automate stable test cases
- Automate repetitive tests
- Automate data-driven tests
- Keep manual for exploratory

REGRESSION METRICS:
- Test cases executed
- Pass percentage
- Defects found
- Test coverage
- Execution time
- Automation percentage

BEST PRACTICES:
1. Maintain regression suite
2. Remove obsolete tests
3. Add tests for new bugs
4. Prioritize test cases
5. Automate where possible
6. Track metrics
7. Review regularly
```

---

## Practice Exercises & Worksheets

### Worksheet 1: Web Application Testing Exercise

**Scenario:** Test a login form at https://www.saucedemo.com/

**Tasks:**
1. Test with valid credentials
2. Test with invalid credentials
3. Test with empty fields
4. Test with SQL injection attempts
5. Test with XSS attempts
6. Test session management
7. Test browser back button
8. Test in different browsers

**Document your findings:**

| Test Case | Input | Expected | Actual | Status | Bug ID |
|-----------|-------|----------|--------|--------|--------|
| Valid login | standard_user / secret_sauce | Login successful | | | |
| Invalid password | standard_user / wrong | Error message | | | |
| Empty fields | (empty) / (empty) | Validation error | | | |
| SQL injection | ' OR '1'='1 | Rejected | | | |

---

### Worksheet 2: Mobile Testing Scenarios

**Scenario:** Test a mobile banking app

**Create test cases for:**

1. **Interruption Testing:**
   - Incoming call during transaction
   - Low battery warning
   - Network loss during payment
   - App backgrounding

2. **Gesture Testing:**
   - Swipe to refresh account balance
   - Pinch to zoom on check image
   - Long press on transaction for details

3. **Orientation Testing:**
   - Rotate device during form entry
   - Landscape mode for viewing statements

4. **Permission Testing:**
   - Camera for check deposit
   - Location for ATM finder
   - Biometric for login

**Document test cases using mobile template**

---

### Worksheet 3: Exploratory Testing Session

**Charter:** Explore the checkout process of an e-commerce site to discover payment and data validation issues

**Time