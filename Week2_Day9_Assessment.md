# Day 9 Assessment: Web Application Testing - Part 2
## Security, Performance, Database & API Testing

**Duration:** 60 minutes
**Total Points:** 100
**Passing Score:** 70%

---

## Section A: Multiple Choice Questions (40 points)
*Choose the best answer for each question (2 points each)*

### Security Testing

1. What is the correct ranking of OWASP Top 10 (2021) #1 risk?
   - A) SQL Injection
   - B) Broken Access Control
   - C) Cross-Site Scripting (XSS)
   - D) Cryptographic Failures

2. Which SQL injection payload would bypass a login without knowing the password?
   - A) admin' OR '1'='1
   - B) admin'; DROP TABLE users--
   - C) admin' AND '1'='1
   - D) admin' UNION SELECT * FROM users--

3. What type of XSS attack stores malicious scripts in the database?
   - A) Reflected XSS
   - B) Stored XSS
   - C) DOM-based XSS
   - D) Server-side XSS

4. What is the primary defense against CSRF attacks?
   - A) Input validation
   - B) CSRF tokens
   - C) SQL parameterization
   - D) Content Security Policy

5. What is the correct minimum contrast ratio for normal text (WCAG Level AA)?
   - A) 3:1
   - B) 4.5:1
   - C) 7:1
   - D) 10:1

### Performance Testing

6. What is considered an "Excellent" page load time?
   - A) < 1 second
   - B) < 2 seconds
   - C) < 3 seconds
   - D) < 5 seconds

7. What does FCP stand for in web performance metrics?
   - A) First Content Paint
   - B) First Contentful Paint
   - C) Fast Content Performance
   - D) Final Content Processing

8. Which performance bottleneck is characterized by white screen until CSS loads?
   - A) Large images
   - B) Render-blocking resources
   - C) Slow database queries
   - D) JavaScript execution time

### Database Testing

9. What type of constraint prevents duplicate entries in a column?
   - A) PRIMARY KEY
   - B) FOREIGN KEY
   - C) UNIQUE
   - D) CHECK

10. What does "ON DELETE CASCADE" do?
    - A) Deletes all records in the table
    - B) Prevents deletion of parent records
    - C) Automatically deletes child records when parent is deleted
    - D) Creates a backup before deletion

### API Testing

11. Which HTTP method is idempotent and used to update resources?
    - A) POST
    - B) PUT
    - C) PATCH
    - D) DELETE

12. What HTTP status code indicates "Resource created successfully"?
    - A) 200 OK
    - B) 201 Created
    - C) 202 Accepted
    - D) 204 No Content

13. Which status code range indicates "Client Errors"?
    - A) 2XX
    - B) 3XX
    - C) 4XX
    - D) 5XX

14. What does REST stand for?
    - A) Remote Execution Service Transfer
    - B) Representational State Transfer
    - C) Resource Execution State Transfer
    - D) Remote State Transfer

### Session Management

15. Which cookie flag prevents JavaScript from accessing session cookies?
    - A) Secure
    - B) HttpOnly
    - C) SameSite
    - D) Domain

16. What is the minimum recommended session ID length?
    - A) 8 bits
    - B) 64 bits
    - C) 128 bits
    - D) 256 bits

### Authentication & Authorization

17. What is the difference between authentication and authorization?
    - A) Authentication is "who you are", authorization is "what you can do"
    - B) They are the same thing
    - C) Authentication is for users, authorization is for admins
    - D) Authorization is "who you are", authentication is "what you can do"

18. What type of attack allows User A to access User B's data by changing IDs in URLs?
    - A) SQL Injection
    - B) XSS
    - C) CSRF
    - D) IDOR (Insecure Direct Object Reference)

19. Which HTTP method should NEVER be used for state-changing operations?
    - A) POST
    - B) GET
    - C) PUT
    - D) DELETE

20. What is the purpose of parameterized queries?
    - A) Improve performance
    - B) Prevent SQL injection
    - C) Validate input
    - D) Format output

---

## Section B: True/False Questions (20 points)
*Mark each statement as True (T) or False (F) (1 point each)*

21. SQL Injection is still ranked #1 in OWASP Top 10 (2021). ___
22. XSS attacks can steal session cookies if HttpOnly flag is not set. ___
23. CSRF attacks can be prevented by using POST requests instead of GET. ___
24. A page load time of 4 seconds is considered "Excellent". ___
25. Time to First Byte (TTFB) should be less than 600ms for good performance. ___
26. Foreign key constraints ensure referential integrity between tables. ___
27. PUT and POST are both idempotent HTTP methods. ___
28. A 404 status code indicates "Internal Server Error". ___
29. Brute force attacks can be prevented by implementing account lockout. ___
30. Session IDs should never be included in URLs. ___
31. Password reset tokens should be predictable for consistency. ___
32. The "Remember Me" feature should use the same session cookie as regular login. ___
33. Horizontal privilege escalation allows regular users to access admin functions. ___
34. JWT tokens can be tampered with if not properly signed. ___
35. Content Security Policy (CSP) helps prevent XSS attacks. ___
36. Database transactions can be rolled back if an error occurs. ___
37. REST APIs must use JSON format exclusively. ___
38. A 429 status code indicates "Rate limit exceeded". ___
39. Cascading updates only work with DELETE operations. ___
40. Error messages should expose database details for better debugging. ___

---

## Section C: Scenario-Based Questions (20 points)
*Provide detailed answers (5 points each)*

### Scenario 1: SQL Injection Discovery
You're testing a search feature. When you enter `laptop' OR '1'='1`, the application returns ALL products in the database, not just laptops matching your search.

**Questions:**
a) What vulnerability have you discovered? (1 point)
b) Why is this happening? (2 points)
c) What are two ways developers should fix this? (2 points)

---

### Scenario 2: Performance Investigation
Users complain that the product page loads slowly. Using Chrome DevTools, you discover:
- Total page size: 8.5 MB
- Main product image: 6.2 MB (uncompressed)
- Page load time: 12 seconds on 4G connection
- 15 JavaScript files loading sequentially

**Questions:**
a) Identify three performance bottlenecks. (3 points)
b) Suggest two optimization strategies. (2 points)

---

### Scenario 3: API Testing Issue
You're testing the user API endpoint `GET /api/users/{id}`. You notice:
- `GET /api/users/100` (your user ID) → Returns your data (200 OK)
- `GET /api/users/101` (another user) → Also returns their data (200 OK)

You can view ANY user's data by changing the ID.

**Questions:**
a) What security vulnerability is this? (2 points)
b) What type of testing should catch this? (1 point)
c) How should this be fixed? (2 points)

---

### Scenario 4: Session Management Problem
A user reports: "I logged out, but when I clicked the browser's Back button, I could still see my account page."

**Questions:**
a) What is the security issue? (2 points)
b) What should happen after logout? (2 points)
c) What test cases would verify proper logout functionality? (1 point)

---

## Section D: Practical Exercise (20 points)
*Complete the following exercises*

### Exercise 1: Security Test Cases (10 points)
Write 5 test cases for testing a login feature for SQL injection and XSS vulnerabilities.

**Format:**
```
TC-ID: [Your test case ID]
Title: [Test case title]
Input: [What you'll enter]
Expected Result: [What should happen]
```

---

### Exercise 2: API Test Scenarios (10 points)
You're testing a REST API endpoint: `POST /api/orders` that creates orders.

Write test cases covering:
a) Successful order creation (2 points)
b) Invalid data handling (2 points)
c) Authentication check (2 points)
d) Status code verification (2 points)
e) Response structure validation (2 points)

---

## BONUS Section: Advanced Questions (+10 points)

### Bonus 1: OWASP Top 10 (5 points)
List 5 items from OWASP Top 10 (2021) and provide a brief example of each.

---

### Bonus 2: Performance Metrics (5 points)
Explain the difference between:
- FCP (First Contentful Paint)
- LCP (Largest Contentful Paint)
- TTI (Time to Interactive)

Why are these metrics important?

---

## Answer Key

### Section A: Multiple Choice
1. B (Broken Access Control is #1 in OWASP 2021)
2. A (Bypasses password check)
3. B (Stored XSS persists in database)
4. B (CSRF tokens validate request origin)
5. B (4.5:1 minimum for WCAG AA normal text)
6. A (< 1 second is excellent)
7. B (First Contentful Paint)
8. B (Render-blocking CSS/JS)
9. C (UNIQUE constraint prevents duplicates)
10. C (CASCADE deletes child records)
11. B (PUT is idempotent for updates)
12. B (201 Created)
13. C (4XX series)
14. B (Representational State Transfer)
15. B (HttpOnly flag)
16. C (128 bits minimum)
17. A (Authentication = identity, Authorization = permissions)
18. D (IDOR vulnerability)
19. B (GET should be read-only)
20. B (Prevents SQL injection)

### Section B: True/False
21. F (Broken Access Control is #1, Injection is #3)
22. T (XSS can steal cookies without HttpOnly)
23. F (CSRF can affect POST too, need tokens)
24. F (4 seconds is "Poor")
25. T (< 600ms is good TTFB)
26. T (Maintains referential integrity)
27. F (POST is not idempotent, PUT is)
28. F (404 is "Not Found", 500 is server error)
29. T (Account lockout prevents brute force)
30. T (Session IDs in URLs are insecure)
31. F (Tokens should be random/unpredictable)
32. F (Should use separate long-lived token)
33. F (That's vertical escalation; horizontal is same level)
34. T (Signature validates integrity)
35. T (CSP restricts script execution)
36. T (Transactions support rollback)
37. F (REST can use JSON, XML, etc.)
38. T (429 indicates rate limiting)
39. F (Cascading works with UPDATE too)
40. F (Error messages should be generic)

### Section C: Scenario Answers

**Scenario 1:**
a) SQL Injection vulnerability
b) User input is directly concatenated into SQL query without sanitization. The `' OR '1'='1` closes the string and adds a condition that's always true.
c) 1) Use parameterized queries/prepared statements, 2) Input validation and sanitization

**Scenario 2:**
a) Three bottlenecks: Huge uncompressed image (6.2 MB), large total page size (8.5 MB), sequential JavaScript loading
b) Two strategies: Compress and optimize images (WebP format), bundle/minify JavaScript files, implement lazy loading

**Scenario 3:**
a) IDOR (Insecure Direct Object Reference) / Broken Access Control
b) Authorization testing
c) Implement server-side authorization checks to verify user can only access their own data

**Scenario 4:**
a) Session not properly destroyed on logout; cached pages accessible
b) Session should be invalidated, cookies cleared, cached pages should not be accessible
c) Test cases: 1) Verify session destroyed after logout, 2) Back button after logout shows login page, 3) Expired session cannot access protected resources

### Section D: Practical Answers
*Answers will vary but should demonstrate understanding of:*
- SQL injection test patterns
- XSS payloads
- API testing principles
- Status code expectations
- Security validation

---

**Scoring Guide:**
- 90-100: Excellent - Strong understanding of security and web testing
- 80-89: Very Good - Good grasp of concepts, minor gaps
- 70-79: Good - Adequate understanding, needs improvement in some areas
- 60-69: Satisfactory - Basic understanding, significant gaps
- Below 60: Needs Improvement - Review material and retake

**End of Assessment**
