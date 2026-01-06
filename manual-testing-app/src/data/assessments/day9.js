export default {
  title: "Day 9: Web Application Testing - Part 2",
  description: "Security, Performance, Database & API Testing",
  passingScore: 70,
  timeLimit: 60,
  modes: {
    quick: {
      timeLimit: 20,
      questionCount: 20,
      description: "Quick assessment covering essential security and API concepts"
    },
    full: {
      timeLimit: 60,
      questionCount: 44,
      description: "Comprehensive assessment covering all security, performance, and API topics"
    }
  },
  sections: [
    {
      title: "Security Testing - Multiple Choice",
      questions: [
        {
          id: "day9_q1",
          type: "mcq",
          question: "What is the correct ranking of OWASP Top 10 (2021) #1 risk?",
          options: [
            "SQL Injection",
            "Broken Access Control",
            "Cross-Site Scripting (XSS)",
            "Cryptographic Failures"
          ],
          correctAnswer: 1,
          explanation: "Broken Access Control is #1 in OWASP 2021, moved up from #5 in 2017.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q2",
          type: "mcq",
          question: "Which SQL injection payload would bypass a login without knowing the password?",
          options: [
            "admin' OR '1'='1",
            "admin'; DROP TABLE users--",
            "admin' AND '1'='1",
            "admin' UNION SELECT * FROM users--"
          ],
          correctAnswer: 0,
          explanation: "The payload 'admin' OR '1'='1' makes the WHERE clause always true, bypassing password check.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q3",
          type: "mcq",
          question: "What type of XSS attack stores malicious scripts in the database?",
          options: [
            "Reflected XSS",
            "Stored XSS",
            "DOM-based XSS",
            "Server-side XSS"
          ],
          correctAnswer: 1,
          explanation: "Stored XSS persists malicious scripts in the database, affecting all users who view the data.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q4",
          type: "mcq",
          question: "What is the primary defense against CSRF attacks?",
          options: [
            "Input validation",
            "CSRF tokens",
            "SQL parameterization",
            "Content Security Policy"
          ],
          correctAnswer: 1,
          explanation: "CSRF tokens validate that requests originate from the legitimate application, not a malicious site.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q5",
          type: "mcq",
          question: "What is the correct minimum contrast ratio for normal text (WCAG Level AA)?",
          options: [
            "3:1",
            "4.5:1",
            "7:1",
            "10:1"
          ],
          correctAnswer: 1,
          explanation: "WCAG Level AA requires 4.5:1 contrast ratio for normal text (less than 18pt or 14pt bold).",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Performance Testing - Multiple Choice",
      questions: [
        {
          id: "day9_q6",
          type: "mcq",
          question: "What is considered an \"Excellent\" page load time?",
          options: [
            "< 1 second",
            "< 2 seconds",
            "< 3 seconds",
            "< 5 seconds"
          ],
          correctAnswer: 0,
          explanation: "Page load time under 1 second is considered excellent. 1-2 seconds is good, 2-3 is average.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day9_q7",
          type: "mcq",
          question: "What does FCP stand for in web performance metrics?",
          options: [
            "First Content Paint",
            "First Contentful Paint",
            "Fast Content Performance",
            "Final Content Processing"
          ],
          correctAnswer: 1,
          explanation: "First Contentful Paint (FCP) measures when the first text or image is painted on screen.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q8",
          type: "mcq",
          question: "Which performance bottleneck is characterized by white screen until CSS loads?",
          options: [
            "Large images",
            "Render-blocking resources",
            "Slow database queries",
            "JavaScript execution time"
          ],
          correctAnswer: 1,
          explanation: "Render-blocking CSS and JavaScript prevent page rendering until they load, causing white screen.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Database Testing - Multiple Choice",
      questions: [
        {
          id: "day9_q9",
          type: "mcq",
          question: "What type of constraint prevents duplicate entries in a column?",
          options: [
            "PRIMARY KEY",
            "FOREIGN KEY",
            "UNIQUE",
            "CHECK"
          ],
          correctAnswer: 2,
          explanation: "UNIQUE constraint ensures all values in a column are different. PRIMARY KEY also enforces uniqueness but has additional properties.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day9_q10",
          type: "mcq",
          question: "What does \"ON DELETE CASCADE\" do?",
          options: [
            "Deletes all records in the table",
            "Prevents deletion of parent records",
            "Automatically deletes child records when parent is deleted",
            "Creates a backup before deletion"
          ],
          correctAnswer: 2,
          explanation: "ON DELETE CASCADE automatically deletes related child records when the parent record is deleted.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "API Testing - Multiple Choice",
      questions: [
        {
          id: "day9_q11",
          type: "mcq",
          question: "Which HTTP method is idempotent and used to update resources?",
          options: [
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          correctAnswer: 1,
          explanation: "PUT is idempotent - multiple identical requests have the same effect as a single request.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q12",
          type: "mcq",
          question: "What HTTP status code indicates \"Resource created successfully\"?",
          options: [
            "200 OK",
            "201 Created",
            "202 Accepted",
            "204 No Content"
          ],
          correctAnswer: 1,
          explanation: "201 Created indicates successful resource creation. 200 OK is for general success.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day9_q13",
          type: "mcq",
          question: "Which status code range indicates \"Client Errors\"?",
          options: [
            "2XX",
            "3XX",
            "4XX",
            "5XX"
          ],
          correctAnswer: 2,
          explanation: "4XX codes indicate client errors (400 Bad Request, 401 Unauthorized, 404 Not Found, etc.).",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day9_q14",
          type: "mcq",
          question: "What does REST stand for?",
          options: [
            "Remote Execution Service Transfer",
            "Representational State Transfer",
            "Resource Execution State Transfer",
            "Remote State Transfer"
          ],
          correctAnswer: 1,
          explanation: "REST stands for Representational State Transfer, an architectural style for web services.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "Session Management - Multiple Choice",
      questions: [
        {
          id: "day9_q15",
          type: "mcq",
          question: "Which cookie flag prevents JavaScript from accessing session cookies?",
          options: [
            "Secure",
            "HttpOnly",
            "SameSite",
            "Domain"
          ],
          correctAnswer: 1,
          explanation: "HttpOnly flag prevents JavaScript from accessing cookies, protecting against XSS attacks.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q16",
          type: "mcq",
          question: "What is the minimum recommended session ID length?",
          options: [
            "8 bits",
            "64 bits",
            "128 bits",
            "256 bits"
          ],
          correctAnswer: 2,
          explanation: "Session IDs should be at least 128 bits to prevent brute force attacks.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Authentication & Authorization - Multiple Choice",
      questions: [
        {
          id: "day9_q17",
          type: "mcq",
          question: "What is the difference between authentication and authorization?",
          options: [
            "Authentication is \"who you are\", authorization is \"what you can do\"",
            "They are the same thing",
            "Authentication is for users, authorization is for admins",
            "Authorization is \"who you are\", authentication is \"what you can do\""
          ],
          correctAnswer: 0,
          explanation: "Authentication verifies identity (who you are), authorization determines permissions (what you can do).",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q18",
          type: "mcq",
          question: "What type of attack allows User A to access User B's data by changing IDs in URLs?",
          options: [
            "SQL Injection",
            "XSS",
            "CSRF",
            "IDOR (Insecure Direct Object Reference)"
          ],
          correctAnswer: 3,
          explanation: "IDOR vulnerability allows unauthorized access by manipulating object references (like IDs) in URLs.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q19",
          type: "mcq",
          question: "Which HTTP method should NEVER be used for state-changing operations?",
          options: [
            "POST",
            "GET",
            "PUT",
            "DELETE"
          ],
          correctAnswer: 1,
          explanation: "GET should be read-only and idempotent. State-changing operations should use POST, PUT, or DELETE.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day9_q20",
          type: "mcq",
          question: "What is the purpose of parameterized queries?",
          options: [
            "Improve performance",
            "Prevent SQL injection",
            "Validate input",
            "Format output"
          ],
          correctAnswer: 1,
          explanation: "Parameterized queries (prepared statements) prevent SQL injection by separating SQL code from data.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "True/False Questions",
      questions: [
        {
          id: "day9_q21",
          type: "truefalse",
          question: "SQL Injection is still ranked #1 in OWASP Top 10 (2021).",
          correctAnswer: false,
          explanation: "Broken Access Control is #1 in OWASP 2021. Injection (including SQL Injection) is #3.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q22",
          type: "truefalse",
          question: "XSS attacks can steal session cookies if HttpOnly flag is not set.",
          correctAnswer: true,
          explanation: "Without HttpOnly flag, JavaScript (including XSS payloads) can access document.cookie.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q23",
          type: "truefalse",
          question: "CSRF attacks can be prevented by using POST requests instead of GET.",
          correctAnswer: false,
          explanation: "CSRF can affect both GET and POST. CSRF tokens are needed for proper protection.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q24",
          type: "truefalse",
          question: "A page load time of 4 seconds is considered \"Excellent\".",
          correctAnswer: false,
          explanation: "4 seconds is considered \"Poor\". Excellent is <1 second, Good is 1-2 seconds.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q25",
          type: "truefalse",
          question: "Time to First Byte (TTFB) should be less than 600ms for good performance.",
          correctAnswer: true,
          explanation: "TTFB under 600ms is considered good. It measures server response time.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q26",
          type: "truefalse",
          question: "Foreign key constraints ensure referential integrity between tables.",
          correctAnswer: true,
          explanation: "Foreign keys maintain referential integrity by ensuring child records reference valid parent records.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q27",
          type: "truefalse",
          question: "PUT and POST are both idempotent HTTP methods.",
          correctAnswer: false,
          explanation: "PUT is idempotent (same result for multiple requests), POST is not idempotent.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q28",
          type: "truefalse",
          question: "A 404 status code indicates \"Internal Server Error\".",
          correctAnswer: false,
          explanation: "404 is \"Not Found\" (client error). 500 is \"Internal Server Error\" (server error).",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q29",
          type: "truefalse",
          question: "Brute force attacks can be prevented by implementing account lockout.",
          correctAnswer: true,
          explanation: "Account lockout after failed attempts prevents automated brute force attacks.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q30",
          type: "truefalse",
          question: "Session IDs should never be included in URLs.",
          correctAnswer: true,
          explanation: "Session IDs in URLs are insecure (visible in logs, bookmarks, referrer headers). Use cookies instead.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q31",
          type: "truefalse",
          question: "Password reset tokens should be predictable for consistency.",
          correctAnswer: false,
          explanation: "Reset tokens must be random and unpredictable to prevent unauthorized access.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q32",
          type: "truefalse",
          question: "The \"Remember Me\" feature should use the same session cookie as regular login.",
          correctAnswer: false,
          explanation: "\"Remember Me\" should use a separate long-lived token, not the session cookie.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q33",
          type: "truefalse",
          question: "Horizontal privilege escalation allows regular users to access admin functions.",
          correctAnswer: false,
          explanation: "That's vertical escalation. Horizontal escalation is accessing data of users at the same privilege level.",
          difficulty: "hard",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q34",
          type: "truefalse",
          question: "JWT tokens can be tampered with if not properly signed.",
          correctAnswer: true,
          explanation: "JWT signature validates token integrity. Without proper signing/verification, tokens can be modified.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q35",
          type: "truefalse",
          question: "Content Security Policy (CSP) helps prevent XSS attacks.",
          correctAnswer: true,
          explanation: "CSP restricts sources of executable scripts, mitigating XSS attack impact.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q36",
          type: "truefalse",
          question: "Database transactions can be rolled back if an error occurs.",
          correctAnswer: true,
          explanation: "Transactions support ROLLBACK to undo changes if an error occurs before COMMIT.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q37",
          type: "truefalse",
          question: "REST APIs must use JSON format exclusively.",
          correctAnswer: false,
          explanation: "REST APIs can use JSON, XML, or other formats. JSON is most common but not mandatory.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q38",
          type: "truefalse",
          question: "A 429 status code indicates \"Rate limit exceeded\".",
          correctAnswer: true,
          explanation: "429 Too Many Requests indicates the user has sent too many requests (rate limiting).",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q39",
          type: "truefalse",
          question: "Cascading updates only work with DELETE operations.",
          correctAnswer: false,
          explanation: "Cascading works with both DELETE (ON DELETE CASCADE) and UPDATE (ON UPDATE CASCADE).",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day9_q40",
          type: "truefalse",
          question: "Error messages should expose database details for better debugging.",
          correctAnswer: false,
          explanation: "Error messages should be generic to users. Detailed errors expose system information to attackers.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        }
      ]
    },
    {
      title: "Scenario-Based Questions",
      questions: [
        {
          id: "day9_q41",
          type: "shortanswer",
          question: "Scenario: You're testing a search feature. When you enter `laptop' OR '1'='1`, the application returns ALL products in the database, not just laptops matching your search. What vulnerability have you discovered?",
          acceptableAnswers: ["SQL Injection", "SQL injection", "sql injection", "SQLi", "Injection"],
          keywords: ["SQL", "injection"],
          minKeywords: 1,
          explanation: "This is SQL Injection vulnerability. User input is directly concatenated into SQL query without sanitization. The ' OR '1'='1 closes the string and adds a condition that's always true.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day9_q42",
          type: "shortanswer",
          question: "Scenario: You're testing the user API endpoint GET /api/users/{id}. You notice GET /api/users/100 (your user ID) returns your data (200 OK), and GET /api/users/101 (another user) also returns their data (200 OK). You can view ANY user's data by changing the ID. What security vulnerability is this?",
          acceptableAnswers: ["IDOR", "Insecure Direct Object Reference", "Broken Access Control", "Access Control", "Authorization"],
          keywords: ["IDOR", "access", "control", "authorization"],
          minKeywords: 1,
          explanation: "This is IDOR (Insecure Direct Object Reference) / Broken Access Control. The API doesn't verify that the authenticated user has permission to access the requested user's data.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day9_q43",
          type: "shortanswer",
          question: "Scenario: Users complain that the product page loads slowly. Using Chrome DevTools, you discover: Total page size: 8.5 MB, Main product image: 6.2 MB (uncompressed), Page load time: 12 seconds on 4G connection, 15 JavaScript files loading sequentially. Name TWO performance bottlenecks.",
          acceptableAnswers: ["Large uncompressed image", "Sequential JavaScript loading", "Large page size", "Unoptimized images", "Too many HTTP requests", "Render blocking"],
          keywords: ["image", "JavaScript", "size", "sequential", "compress", "optimize"],
          minKeywords: 2,
          explanation: "Three main bottlenecks: 1) Huge uncompressed image (6.2 MB), 2) Large total page size (8.5 MB), 3) Sequential JavaScript loading. Solutions: compress images (WebP format), bundle/minify JavaScript, implement lazy loading.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day9_q44",
          type: "shortanswer",
          question: "Scenario: A user reports: \"I logged out, but when I clicked the browser's Back button, I could still see my account page.\" What is the security issue?",
          acceptableAnswers: ["Session not destroyed", "Session not invalidated", "Cache issue", "Session management", "Improper logout"],
          keywords: ["session", "cache", "logout", "invalidate", "destroy"],
          minKeywords: 1,
          explanation: "The session is not properly destroyed on logout, and cached pages are accessible. After logout: session should be invalidated, cookies cleared, and cached pages should not be accessible (use cache-control headers).",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        }
      ]
    }
  ]
};
