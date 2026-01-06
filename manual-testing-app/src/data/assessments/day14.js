export default {
  title: "Day 14: Week 2 Review & Assessment",
  description: "Comprehensive review of Week 2 topics: Web Testing, Mobile Testing, Specialized Testing, Regression Testing, and Exploratory Testing",
  passingScore: 70,
  timeLimit: 120,
  modes: {
    quick: {
      timeLimit: 40,
      questionCount: 40,
      description: "Quick review of Week 2 concepts"
    },
    full: {
      timeLimit: 120,
      questionCount: 100,
      description: "Comprehensive Week 2 review assessment - 100 questions"
    }
  },
  sections: [
    {
      title: "Web Application Testing Review",
      questions: [
        {
          id: "day14_q1",
          type: "mcq",
          question: "Which OWASP Top 10 (2021) vulnerability is ranked #1?",
          options: [
            "SQL Injection",
            "Broken Access Control",
            "XSS",
            "CSRF"
          ],
          correctAnswer: 1,
          explanation: "Broken Access Control moved to #1 in OWASP 2021, up from #5 in 2017.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q2",
          type: "mcq",
          question: "What is the minimum contrast ratio for normal text (WCAG Level AA)?",
          options: [
            "3:1",
            "4.5:1",
            "7:1",
            "10:1"
          ],
          correctAnswer: 1,
          explanation: "WCAG Level AA requires 4.5:1 minimum contrast ratio for normal text.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q3",
          type: "mcq",
          question: "Which HTTP method is idempotent?",
          options: [
            "POST",
            "PUT",
            "PATCH",
            "All of the above"
          ],
          correctAnswer: 1,
          explanation: "PUT is idempotent - multiple identical requests have the same effect as a single request.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q4",
          type: "mcq",
          question: "What does the HttpOnly flag prevent?",
          options: [
            "HTTP connections",
            "JavaScript access to cookies",
            "HTTPS connections",
            "Cookie storage"
          ],
          correctAnswer: 1,
          explanation: "HttpOnly flag prevents JavaScript from accessing cookies, protecting against XSS attacks.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Mobile Application Testing Review",
      questions: [
        {
          id: "day14_q5",
          type: "mcq",
          question: "Which mobile app type offers the BEST performance?",
          options: [
            "Web App",
            "Hybrid App",
            "Native App",
            "Progressive Web App"
          ],
          correctAnswer: 2,
          explanation: "Native apps have best performance with direct access to hardware and platform-specific optimizations.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day14_q6",
          type: "mcq",
          question: "What is the recommended minimum touch target size for mobile?",
          options: [
            "32×32 points",
            "44×44 points",
            "64×64 points",
            "80×80 points"
          ],
          correctAnswer: 1,
          explanation: "44×44 points (iOS) or 48×48 dp (Android) is the minimum recommended touch target size.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q7",
          type: "mcq",
          question: "Which platform has MORE device fragmentation?",
          options: [
            "iOS",
            "Android",
            "Both equal",
            "Neither"
          ],
          correctAnswer: 1,
          explanation: "Android has 20,000+ device models vs ~15 for iOS, creating significant fragmentation challenges.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day14_q8",
          type: "mcq",
          question: "What is acceptable background battery drain per hour?",
          options: [
            "< 1%",
            "< 5%",
            "< 10%",
            "< 20%"
          ],
          correctAnswer: 0,
          explanation: "Less than 1% battery drain per hour in background is acceptable for most apps.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Specialized Testing Review",
      questions: [
        {
          id: "day14_q9",
          type: "mcq",
          question: "What does i18n stand for?",
          options: [
            "Internet 18 Nations",
            "Internationalization",
            "Integration 18",
            "Internal 18 Networks"
          ],
          correctAnswer: 1,
          explanation: "i18n is numeronym for Internationalization: i + 18 characters + n.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day14_q10",
          type: "mcq",
          question: "How many users does Nielsen recommend for usability testing?",
          options: [
            "3 users",
            "5 users",
            "10 users",
            "20 users"
          ],
          correctAnswer: 1,
          explanation: "Nielsen's research shows 5 users find approximately 85% of usability issues.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q11",
          type: "mcq",
          question: "Which browser has the highest market share?",
          options: [
            "Safari",
            "Firefox",
            "Chrome",
            "Edge"
          ],
          correctAnswer: 2,
          explanation: "Chrome has approximately 63% market share, making it highest priority for testing.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day14_q12",
          type: "mcq",
          question: "What are the FOUR principles of WCAG 2.1?",
          options: [
            "Perceivable, Operable, Understandable, Robust",
            "Visible, Clickable, Readable, Stable",
            "Accessible, Usable, Compatible, Maintainable",
            "Clear, Simple, Fast, Secure"
          ],
          correctAnswer: 0,
          explanation: "WCAG 2.1 is based on POUR principles: Perceivable, Operable, Understandable, Robust.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Regression & Smoke Testing Review",
      questions: [
        {
          id: "day14_q13",
          type: "mcq",
          question: "What is the PRIMARY purpose of smoke testing?",
          options: [
            "Find all possible bugs",
            "Verify build is stable enough for detailed testing",
            "Test security vulnerabilities",
            "Performance testing"
          ],
          correctAnswer: 1,
          explanation: "Smoke testing verifies build stability before detailed testing - a quick sanity check.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day14_q14",
          type: "mcq",
          question: "How many test cases should a typical smoke test suite contain?",
          options: [
            "5-10",
            "20-30",
            "100-200",
            "500+"
          ],
          correctAnswer: 1,
          explanation: "20-30 test cases is optimal for smoke testing - covers critical paths without being too time-consuming.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q15",
          type: "mcq",
          question: "What is the formula for Risk-Based Prioritization?",
          options: [
            "Risk = Severity + Frequency",
            "Risk = Probability × Impact",
            "Risk = Business Value / Effort",
            "Risk = Complexity + Change Frequency"
          ],
          correctAnswer: 1,
          explanation: "Risk = Probability of Failure × Impact of Failure. Higher risk items are tested first.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q16",
          type: "mcq",
          question: "Which regression testing type reuses existing test cases without modification?",
          options: [
            "Progressive",
            "Corrective",
            "Retest-All",
            "Selective"
          ],
          correctAnswer: 1,
          explanation: "Corrective Regression Testing reuses existing test cases without modification when no specification changes occur.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Exploratory Testing Review",
      questions: [
        {
          id: "day14_q17",
          type: "mcq",
          question: "What is the key characteristic of exploratory testing?",
          options: [
            "Following a detailed test script",
            "Simultaneous learning, test design, and execution",
            "Only testing without any planning",
            "Random clicking without purpose"
          ],
          correctAnswer: 1,
          explanation: "James Bach defines exploratory testing as 'simultaneous learning, test design, and test execution.'",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q18",
          type: "mcq",
          question: "What is the recommended duration for an SBTM testing session?",
          options: [
            "30 minutes",
            "60 minutes",
            "90 minutes",
            "120 minutes"
          ],
          correctAnswer: 2,
          explanation: "The recommended SBTM session duration is 90 minutes (60-120 minutes range).",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q19",
          type: "mcq",
          question: "What does FCC CUTS VIDS represent?",
          options: [
            "A testing framework",
            "11 different testing tours",
            "Scrum ceremonies",
            "Test automation tools"
          ],
          correctAnswer: 1,
          explanation: "FCC CUTS VIDS is a mnemonic for 11 testing tours: Feature, Complexity, Claims, Configuration, User, Testability, Scenarios, Variability, Interoperability, Data, Structure.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day14_q20",
          type: "mcq",
          question: "What is the ideal percentage of time spent on 'Test' in the TBS model?",
          options: [
            "40-50%",
            "60-70%",
            "70-80%",
            "90-100%"
          ],
          correctAnswer: 2,
          explanation: "Ideal TBS distribution is Test: 70-80%, Bug: 10-20%, Setup: 5-10%.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "True/False Questions",
      questions: [
        {
          id: "day14_q21",
          type: "truefalse",
          question: "SQL Injection is still ranked #1 in OWASP Top 10 (2021).",
          correctAnswer: false,
          explanation: "Broken Access Control is #1 in OWASP 2021. Injection (including SQL Injection) is #3.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q22",
          type: "truefalse",
          question: "Native apps have a single codebase that works on both iOS and Android.",
          correctAnswer: false,
          explanation: "Native apps require separate codebases for each platform (Swift/Objective-C for iOS, Kotlin/Java for Android).",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q23",
          type: "truefalse",
          question: "Concatenated strings are a good practice for localization.",
          correctAnswer: false,
          explanation: "Concatenation breaks translations as word order varies by language. Use placeholders instead.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q24",
          type: "truefalse",
          question: "Full Regression Testing should be run after every code commit.",
          correctAnswer: false,
          explanation: "Full regression is too time-consuming for every commit. Run smoke tests for commits, full regression before releases.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q25",
          type: "truefalse",
          question: "Exploratory testing is completely unstructured and random.",
          correctAnswer: false,
          explanation: "Exploratory testing is structured and guided by charters, heuristics, and experience. It's NOT random.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q26",
          type: "truefalse",
          question: "XSS attacks can steal session cookies if HttpOnly flag is not set.",
          correctAnswer: true,
          explanation: "Without HttpOnly flag, JavaScript (including XSS payloads) can access document.cookie.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q27",
          type: "truefalse",
          question: "iOS has less device fragmentation compared to Android.",
          correctAnswer: true,
          explanation: "iOS has ~15 active device models vs 20,000+ for Android, making iOS testing more manageable.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q28",
          type: "truefalse",
          question: "Color alone can be used to convey information in accessible design.",
          correctAnswer: false,
          explanation: "Color should not be the sole means of conveying information. Add icons, text, or patterns for colorblind users.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q29",
          type: "truefalse",
          question: "P0 test cases must pass before deployment.",
          correctAnswer: true,
          explanation: "P0 (Critical) tests must pass - they are blocking for deployment as they cover critical functionality.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q30",
          type: "truefalse",
          question: "SBTM sessions should be uninterrupted for best results.",
          correctAnswer: true,
          explanation: "SBTM sessions should be uninterrupted for best focus and productivity.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        }
      ]
    },
    {
      title: "Scenario-Based Questions",
      questions: [
        {
          id: "day14_q31",
          type: "shortanswer",
          question: "You're testing a search feature. When you enter `laptop' OR '1'='1`, the application returns ALL products. What vulnerability have you discovered?",
          acceptableAnswers: ["SQL Injection", "SQL injection", "sql injection", "SQLi", "Injection"],
          keywords: ["SQL", "injection"],
          minKeywords: 1,
          explanation: "This is SQL Injection vulnerability. User input is directly concatenated into SQL query without sanitization.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q32",
          type: "shortanswer",
          question: "You're testing a mobile banking app. When rotating the device, all form data is lost. What is the primary issue?",
          acceptableAnswers: ["Data loss during orientation change", "State not preserved", "Orientation change bug", "No state preservation"],
          keywords: ["data", "state", "preserved", "orientation", "lost"],
          minKeywords: 2,
          explanation: "The app is not preserving state during orientation changes. All form data should be preserved when rotating the device.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q33",
          type: "shortanswer",
          question: "Your e-commerce site is being translated to German. Buttons show truncated text. What is causing this issue?",
          acceptableAnswers: ["Text truncation", "Insufficient button width", "German text expansion", "Layout not flexible"],
          keywords: ["truncation", "width", "expansion", "German", "space"],
          minKeywords: 2,
          explanation: "Text truncation due to insufficient button width. German words are 30-40% longer than English.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q34",
          type: "shortanswer",
          question: "Your regression suite has grown from 100 tests (2 hours) to 1,500 tests (30 hours). Name TWO optimization strategies.",
          acceptableAnswers: ["Remove obsolete tests", "Prioritize tests", "Automate tests", "Parallel execution", "Merge redundant tests"],
          keywords: ["remove", "obsolete", "prioritize", "automate", "parallel", "merge"],
          minKeywords: 2,
          explanation: "Optimization strategies: 1) Remove obsolete/redundant tests, 2) Prioritize tests, 3) Automate and run in parallel.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q35",
          type: "shortanswer",
          question: "You conducted a 90-minute SBTM session: 65 min testing, 20 min investigating bugs, 5 min setup. What is your TBS breakdown?",
          acceptableAnswers: ["Test: 72%, Bug: 22%, Setup: 6%", "72%, 22%, 6%", "72/22/6"],
          keywords: ["72", "22", "6", "percent"],
          minKeywords: 2,
          explanation: "Test: 65/90 = 72%, Bug: 20/90 = 22%, Setup: 5/90 = 6%.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q36",
          type: "mcq",
          question: "Scenario: You find a critical payment bug 2 days before release. The team wants to release anyway. What should you do?",
          options: [
            "Accept it and move on",
            "Log the bug for next sprint",
            "Present facts, quantify business impact, provide options with risk assessment",
            "Threaten to quit"
          ],
          correctAnswer: 2,
          explanation: "Communicate professionally: Present facts with evidence, quantify business impact, provide options with risk assessment, make clear recommendation.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q37",
          type: "mcq",
          question: "Scenario: Your website works in Chrome and Edge, but in Firefox the sidebar is missing and layout is broken. What is the likely cause?",
          options: [
            "Firefox is broken",
            "CSS Grid compatibility issue",
            "JavaScript error",
            "Network problem"
          ],
          correctAnswer: 1,
          explanation: "Firefox doesn't support CSS Grid as implemented (missing vendor prefix or using unsupported features).",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q38",
          type: "mcq",
          question: "Scenario: You're creating a smoke test suite for e-commerce. Which scenarios are MOST critical?",
          options: [
            "All edge cases",
            "Login, Search product, Add to cart, View cart, Proceed to checkout",
            "Only payment processing",
            "Only user registration"
          ],
          correctAnswer: 1,
          explanation: "Critical smoke scenarios cover the main user journey: Login, Search, View product, Add to cart, View cart, Checkout (don't complete payment).",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q39",
          type: "mcq",
          question: "Scenario: You're testing a payment gateway. Which testing tour would be most appropriate?",
          options: [
            "Feature Tour",
            "Complexity Tour",
            "Variability Tour",
            "Configuration Tour"
          ],
          correctAnswer: 2,
          explanation: "The Variability Tour focuses on testing with varying inputs, payment methods, currencies, and scenarios.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q40",
          type: "mcq",
          question: "Scenario: Users complain your social media app drains 45% battery in 3 hours (mostly background). What is likely causing this?",
          options: [
            "Normal behavior",
            "Background location tracking or continuous data syncing",
            "Screen brightness",
            "User error"
          ],
          correctAnswer: 1,
          explanation: "Likely causes: Background location tracking (GPS), continuous data syncing, wake locks, or inefficient API polling. Acceptable drain is <1% per hour.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day14_q41",
          type: "mcq",
          question: "What HTTP status code indicates 'Resource created successfully'?",
          options: [
            "200 OK",
            "201 Created",
            "202 Accepted",
            "204 No Content"
          ],
          correctAnswer: 1,
          explanation: "201 Created indicates successful resource creation. 200 OK is for general success.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q42",
          type: "mcq",
          question: "Which status code range indicates 'Client Errors'?",
          options: [
            "2XX",
            "3XX",
            "4XX",
            "5XX"
          ],
          correctAnswer: 2,
          explanation: "4XX codes indicate client errors (400 Bad Request, 401 Unauthorized, 404 Not Found, etc.).",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q43",
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
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q44",
          type: "mcq",
          question: "Which technology is commonly used for Hybrid app development?",
          options: [
            "Swift",
            "Kotlin",
            "React Native",
            "Objective-C"
          ],
          correctAnswer: 2,
          explanation: "React Native, Flutter, and Ionic are popular hybrid/cross-platform frameworks.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q45",
          type: "mcq",
          question: "What is the correct iOS navigation back gesture?",
          options: [
            "Swipe from right edge",
            "Swipe from left edge",
            "Swipe from bottom",
            "Three-finger swipe"
          ],
          correctAnswer: 1,
          explanation: "iOS uses swipe from left edge for back navigation.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q46",
          type: "mcq",
          question: "Which design language is used for Android?",
          options: [
            "Human Interface Guidelines",
            "Fluent Design",
            "Material Design",
            "Flat Design"
          ],
          correctAnswer: 2,
          explanation: "Material Design is Google's design language for Android. iOS uses Human Interface Guidelines (HIG).",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q47",
          type: "mcq",
          question: "What gesture is typically used for 'pull-to-refresh'?",
          options: [
            "Swipe up from bottom",
            "Swipe down from top",
            "Double tap",
            "Pinch out"
          ],
          correctAnswer: 1,
          explanation: "Pull-to-refresh is triggered by swiping down from the top of scrollable content.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q48",
          type: "mcq",
          question: "Which language typically expands 30-40% compared to English?",
          options: [
            "Spanish",
            "Chinese",
            "German/Finnish",
            "Japanese"
          ],
          correctAnswer: 2,
          explanation: "German and Finnish words are typically 30-40% longer than English equivalents.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q49",
          type: "mcq",
          question: "What is RTL in localization testing?",
          options: [
            "Right-to-Left languages (Arabic, Hebrew)",
            "Run-Time Loading",
            "Rapid Testing Localization",
            "Resource Translation Layer"
          ],
          correctAnswer: 0,
          explanation: "RTL refers to Right-to-Left languages like Arabic, Hebrew, Persian, and Urdu.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q50",
          type: "mcq",
          question: "What does 'Think Aloud' protocol mean in usability testing?",
          options: [
            "Tester talks to user during test",
            "User verbalizes thoughts while performing tasks",
            "Team discusses results after test",
            "User reads instructions aloud"
          ],
          correctAnswer: 1,
          explanation: "Think Aloud protocol has users verbalize their thoughts, decisions, and confusion while performing tasks.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q51",
          type: "mcq",
          question: "What does SUS stand for in usability metrics?",
          options: [
            "Standard Usability Score",
            "System Usability Scale",
            "Software User Satisfaction",
            "Simple Usage Standard"
          ],
          correctAnswer: 1,
          explanation: "System Usability Scale (SUS) is a 10-question survey for measuring perceived usability.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q52",
          type: "mcq",
          question: "What is Nielsen's Heuristic #1?",
          options: [
            "User control and freedom",
            "Consistency and standards",
            "Visibility of system status",
            "Error prevention"
          ],
          correctAnswer: 2,
          explanation: "Heuristic #1 is 'Visibility of system status' - keep users informed about what's happening.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q53",
          type: "mcq",
          question: "What tool would you use to check CSS feature support across browsers?",
          options: [
            "W3C Validator",
            "Can I Use (caniuse.com)",
            "Google Analytics",
            "PageSpeed Insights"
          ],
          correctAnswer: 1,
          explanation: "Can I Use (caniuse.com) shows browser support for HTML, CSS, and JavaScript features.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q54",
          type: "mcq",
          question: "What is BrowserStack used for?",
          options: [
            "Browser development",
            "Cloud-based cross-browser testing",
            "Browser performance monitoring",
            "Browser security testing"
          ],
          correctAnswer: 1,
          explanation: "BrowserStack provides cloud-based cross-browser and cross-device testing.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q55",
          type: "mcq",
          question: "When should 'Retest-All' regression testing be used?",
          options: [
            "Minor bug fixes",
            "Major architecture changes or framework upgrades",
            "Hotfixes",
            "UI text changes only"
          ],
          correctAnswer: 1,
          explanation: "Retest-All is used for major changes when impact is uncertain or very large.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q56",
          type: "mcq",
          question: "What is 'Selective Regression Testing'?",
          options: [
            "Testing all test cases",
            "Testing only changed modules and their dependencies",
            "Testing only new features",
            "Random selection of test cases"
          ],
          correctAnswer: 1,
          explanation: "Selective Regression tests only changed modules and their dependencies, requiring impact analysis.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q57",
          type: "mcq",
          question: "What priority should be assigned to payment transactions?",
          options: [
            "P3 (Low)",
            "P2 (Medium)",
            "P1 (High)",
            "P0 (Critical)"
          ],
          correctAnswer: 3,
          explanation: "Payment/transactions are always P0 Critical due to direct revenue impact.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q58",
          type: "mcq",
          question: "What should be the expected duration of a smoke test suite?",
          options: [
            "1-2 hours",
            "10-30 minutes",
            "4-6 hours",
            "1-2 days"
          ],
          correctAnswer: 1,
          explanation: "Smoke tests should execute in 10-30 minutes for quick build verification feedback.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q59",
          type: "mcq",
          question: "What happens if ANY smoke test fails?",
          options: [
            "Continue testing",
            "Skip that feature",
            "Reject build immediately",
            "Create a bug report and proceed"
          ],
          correctAnswer: 2,
          explanation: "ANY smoke test failure means reject build immediately. Build is not stable for testing.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q60",
          type: "mcq",
          question: "What type of testing is 'Wide and Shallow'?",
          options: [
            "Regression Testing",
            "Smoke Testing",
            "Sanity Testing",
            "Integration Testing"
          ],
          correctAnswer: 1,
          explanation: "Smoke testing is wide (covers all features) and shallow (surface-level testing only).",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q61",
          type: "mcq",
          question: "What is the MAIN difference between Smoke and Sanity testing?",
          options: [
            "Smoke is wide & shallow, Sanity is narrow & deep",
            "Smoke is automated, Sanity is manual",
            "Smoke is for mobile, Sanity is for web",
            "No difference"
          ],
          correctAnswer: 0,
          explanation: "Smoke covers all features lightly (wide & shallow). Sanity focuses deep on specific area (narrow & deep).",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q62",
          type: "mcq",
          question: "When should Sanity testing be performed?",
          options: [
            "New build deployment",
            "After a specific bug fix or minor change",
            "Before every release",
            "Only on Fridays"
          ],
          correctAnswer: 1,
          explanation: "Sanity testing is performed after a specific bug fix or minor change to verify that functionality works.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q63",
          type: "mcq",
          question: "In the TBS model for SBTM, what does 'TBS' stand for?",
          options: [
            "Test, Build, Ship",
            "Test, Bug, Setup",
            "Time, Budget, Scope",
            "Test, Baseline, Standard"
          ],
          correctAnswer: 1,
          explanation: "TBS model tracks time spent on Testing (actual testing), Bug investigation/reporting, and Setup.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q64",
          type: "mcq",
          question: "Which testing tour focuses on testing each feature in isolation?",
          options: [
            "Complexity Tour",
            "Feature Tour",
            "Scenario Tour",
            "User Tour"
          ],
          correctAnswer: 1,
          explanation: "The Feature Tour focuses on testing each feature independently without combining features.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q65",
          type: "mcq",
          question: "What is the format of an SBTM charter?",
          options: [
            "Test [AREA] With [TOOLS] To Find [BUGS]",
            "Explore [AREA] With [RESOURCES] To Discover [INFORMATION]",
            "Execute [TESTS] Using [DATA] To Verify [REQUIREMENTS]",
            "Analyze [FEATURE] With [TEAM] To Report [RESULTS]"
          ],
          correctAnswer: 1,
          explanation: "Standard SBTM charter format: Explore [what to test] With [tools/techniques] To Discover [what you're looking for].",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q66",
          type: "mcq",
          question: "Which testing tour focuses on verifying marketing claims?",
          options: [
            "Feature Tour",
            "Claims Tour",
            "User Tour",
            "Variability Tour"
          ],
          correctAnswer: 1,
          explanation: "The Claims Tour specifically focuses on verifying marketing claims and promises made about the product.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q67",
          type: "mcq",
          question: "Which testing tour focuses on testing from different user personas?",
          options: [
            "Configuration Tour",
            "User Tour",
            "Scenarios Tour",
            "Feature Tour"
          ],
          correctAnswer: 1,
          explanation: "The User Tour focuses on testing from different user personas (novice, expert, malicious, elderly, etc.).",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q68",
          type: "mcq",
          question: "Which heuristic involves testing Create, Read, Update, Delete operations?",
          options: [
            "Goldilocks",
            "CRUD",
            "SOAP",
            "Consistency"
          ],
          correctAnswer: 1,
          explanation: "CRUD heuristic tests Create, Read, Update, Delete operations for any entity in the system.",
          difficulty: "easy",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q69",
          type: "mcq",
          question: "What does the 'Goldilocks' heuristic test?",
          options: [
            "Too much, too little, just right",
            "Create, read, update, delete",
            "Structure, oracles, actions, properties",
            "Feature, complexity, claims"
          ],
          correctAnswer: 0,
          explanation: "Goldilocks heuristic tests boundary conditions: minimum values (too little), maximum values (too much), and normal values (just right).",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q70",
          type: "mcq",
          question: "Which testing tour evaluates how easy the application is to test?",
          options: [
            "User Tour",
            "Testability Tour",
            "Configuration Tour",
            "Structure Tour"
          ],
          correctAnswer: 1,
          explanation: "The Testability Tour evaluates how easy the application is to test, including test data setup and observability.",
          difficulty: "medium",
          points: 2,
          fullModeOnly: true
        },
        {
          id: "day14_q71",
          type: "truefalse",
          question: "CSRF attacks can be prevented by using POST requests instead of GET.",
          correctAnswer: false,
          explanation: "CSRF can affect both GET and POST. CSRF tokens are needed for proper protection.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q72",
          type: "truefalse",
          question: "A page load time of 4 seconds is considered 'Excellent'.",
          correctAnswer: false,
          explanation: "4 seconds is considered 'Poor'. Excellent is <1 second, Good is 1-2 seconds.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q73",
          type: "truefalse",
          question: "Foreign key constraints ensure referential integrity between tables.",
          correctAnswer: true,
          explanation: "Foreign keys maintain referential integrity by ensuring child records reference valid parent records.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q74",
          type: "truefalse",
          question: "PUT and POST are both idempotent HTTP methods.",
          correctAnswer: false,
          explanation: "PUT is idempotent (same result for multiple requests), POST is not idempotent.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q75",
          type: "truefalse",
          question: "Hybrid apps are distributed through app stores.",
          correctAnswer: true,
          explanation: "Hybrid apps are packaged and distributed through App Store and Play Store like native apps.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q76",
          type: "truefalse",
          question: "Android allows installation from unknown sources (APK files).",
          correctAnswer: true,
          explanation: "Android allows sideloading APK files from unknown sources (with user permission).",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q77",
          type: "truefalse",
          question: "Mobile apps should be tested on both portrait and landscape orientations.",
          correctAnswer: true,
          explanation: "Both orientations must be tested to ensure proper layout adaptation and state preservation.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q78",
          type: "truefalse",
          question: "Permission requests should explain WHY the permission is needed.",
          correctAnswer: true,
          explanation: "Permission rationale must explain why the permission is needed to increase user trust and approval rate.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q79",
          type: "truefalse",
          question: "Battery consumption should be tested in both foreground and background states.",
          correctAnswer: true,
          explanation: "Battery drain must be tested in both states as background operations can significantly impact battery life.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q80",
          type: "truefalse",
          question: "UTF-8 encoding should be used for supporting multiple character sets.",
          correctAnswer: true,
          explanation: "UTF-8 supports all character sets and is the standard encoding for internationalization.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q81",
          type: "truefalse",
          question: "WCAG Level AAA is required for all websites by law.",
          correctAnswer: false,
          explanation: "Level AA is commonly required. Level AAA is aspirational and not required for full conformance.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q82",
          type: "truefalse",
          question: "Every form field should have an associated <label> element.",
          correctAnswer: true,
          explanation: "Every form field needs a <label> element for accessibility. Labels help screen readers and improve usability.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q83",
          type: "truefalse",
          question: "Decorative images should have descriptive alt text.",
          correctAnswer: false,
          explanation: "Decorative images should have empty alt='' so screen readers skip them.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q84",
          type: "truefalse",
          question: "A/B testing explains WHY users prefer one option.",
          correctAnswer: false,
          explanation: "A/B testing shows WHAT works better, not WHY. Usability testing explains the reasons.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q85",
          type: "truefalse",
          question: "Browser emulators are 100% accurate for compatibility testing.",
          correctAnswer: false,
          explanation: "Emulators/simulators have limitations. Real browser testing on actual devices is more reliable.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q86",
          type: "truefalse",
          question: "Test case prioritization is unnecessary if you have time to run all tests.",
          correctAnswer: false,
          explanation: "Prioritization helps even with time - focuses on high-value tests first and provides better risk management.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q87",
          type: "truefalse",
          question: "Smoke tests should include negative testing and edge cases.",
          correctAnswer: false,
          explanation: "Smoke tests focus on happy path only - basic positive scenarios. Negative testing is for detailed regression.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q88",
          type: "truefalse",
          question: "Smoke testing is also called 'Build Verification Testing (BVT)'.",
          correctAnswer: true,
          explanation: "Smoke testing = Build Verification Testing (BVT) - both verify build stability before detailed testing.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q89",
          type: "truefalse",
          question: "Sanity testing is a subset of regression testing.",
          correctAnswer: true,
          explanation: "Sanity is a focused subset of regression testing - quick check of specific functionality after changes.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q90",
          type: "truefalse",
          question: "Regression testing catches side effects of code changes.",
          correctAnswer: true,
          explanation: "Regression testing ensures changes don't break existing functionality - catches unintended side effects.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q91",
          type: "truefalse",
          question: "Repetitive tests executed frequently are good automation candidates.",
          correctAnswer: true,
          explanation: "Repetitive, frequently-run, stable tests are best automation candidates - high ROI.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q92",
          type: "truefalse",
          question: "Flaky tests should be ignored if they pass most of the time.",
          correctAnswer: false,
          explanation: "Flaky tests should be fixed, not ignored. They erode confidence in test suite and waste time investigating.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q93",
          type: "truefalse",
          question: "Tests should be independent to enable parallel execution.",
          correctAnswer: true,
          explanation: "Independence allows parallel execution and any order - no dependencies or shared state.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q94",
          type: "truefalse",
          question: "The Complexity Tour focuses on testing the simplest features first.",
          correctAnswer: false,
          explanation: "The Complexity Tour focuses on testing the MOST complex features first, as they are more likely to contain defects.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q95",
          type: "truefalse",
          question: "The Interoperability Tour focuses on testing integrations with other systems.",
          correctAnswer: true,
          explanation: "The Interoperability Tour specifically focuses on testing integrations with third-party APIs and external services.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q96",
          type: "truefalse",
          question: "A good charter should be completable in one 90-minute session.",
          correctAnswer: true,
          explanation: "A well-sized charter should be completable in one 90-minute session. If too large, split into multiple charters.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q97",
          type: "truefalse",
          question: "Exploratory testing eliminates the need for scripted testing.",
          correctAnswer: false,
          explanation: "Exploratory testing complements scripted testing. Best practice is a blended approach: 70% scripted, 30% exploratory.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q98",
          type: "truefalse",
          question: "The Data Tour focuses on testing data flow and persistence.",
          correctAnswer: true,
          explanation: "The Data Tour follows data through its lifecycle: input, validation, storage, retrieval, display, update, and deletion.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q99",
          type: "truefalse",
          question: "Real device testing is more reliable than emulator testing for critical scenarios.",
          correctAnswer: true,
          explanation: "Real devices reveal hardware-specific issues, actual performance, and real-world conditions that emulators miss.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day14_q100",
          type: "truefalse",
          question: "An app should function gracefully even when permissions are denied.",
          correctAnswer: true,
          explanation: "Apps must handle denied permissions gracefully, providing alternative functionality or clear explanations.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        }
      ]
    }
  ]
};
