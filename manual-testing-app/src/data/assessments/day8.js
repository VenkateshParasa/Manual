export default {
  title: "Day 8: Web Application Testing - Part 1",
  description: "Browser Compatibility, Responsive Design, UI/UX, Accessibility",
  passingScore: 70,
  timeLimit: 40,
  modes: {
    quick: {
      timeLimit: 15,
      questionCount: 15,
      description: "Quick assessment covering essential concepts"
    },
    full: {
      timeLimit: 40,
      questionCount: 30,
      description: "Comprehensive assessment covering all topics"
    }
  },
  sections: [
    {
      title: "Multiple Choice Questions",
      questions: [
        {
          id: "day8_q1",
          type: "mcq",
          question: "What is the main difference between client-side and server-side validation?",
          options: [
            "Client-side is faster, server-side is more secure",
            "Client-side is more secure, server-side is faster",
            "They are the same",
            "Client-side runs on server, server-side runs on browser"
          ],
          correctAnswer: 0,
          explanation: "Client-side validation provides immediate feedback but can be bypassed. Server-side validation is essential for security as it cannot be bypassed.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day8_q2",
          type: "mcq",
          question: "Which browser currently has the highest market share (2026)?",
          options: [
            "Firefox",
            "Safari",
            "Chrome",
            "Edge"
          ],
          correctAnswer: 2,
          explanation: "Chrome holds approximately 63% market share in 2026, making it the highest priority for testing.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day8_q3",
          type: "mcq",
          question: "What is the recommended minimum font size for body text on mobile devices?",
          options: [
            "12px",
            "14px",
            "16px",
            "18px"
          ],
          correctAnswer: 2,
          explanation: "16px is the recommended minimum for body text on mobile to ensure readability without zooming.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day8_q4",
          type: "mcq",
          question: "What does WCAG stand for?",
          options: [
            "Web Content Accessibility Guidelines",
            "Web Compatibility and Graphics",
            "Website Color and Alignment Guide",
            "Web Component Accessibility Group"
          ],
          correctAnswer: 0,
          explanation: "WCAG provides guidelines for making web content accessible to people with disabilities.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day8_q5",
          type: "mcq",
          question: "What is the minimum color contrast ratio for normal text according to WCAG AA?",
          options: [
            "3:1",
            "4.5:1",
            "7:1",
            "2:1"
          ],
          correctAnswer: 1,
          explanation: "WCAG AA requires a minimum contrast ratio of 4.5:1 for normal text (less than 18pt or 14pt bold).",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day8_q6",
          type: "mcq",
          question: "Which breakpoint range is typically used for mobile devices in portrait mode?",
          options: [
            "768px - 1024px",
            "320px - 480px",
            "1025px - 1366px",
            "481px - 767px"
          ],
          correctAnswer: 1,
          explanation: "Mobile portrait mode typically ranges from 320px (small phones) to 480px (larger phones).",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day8_q7",
          type: "mcq",
          question: "What is the purpose of the \"Skip to main content\" link?",
          options: [
            "To improve SEO",
            "To allow keyboard users to bypass navigation",
            "To speed up page loading",
            "To hide content from screen readers"
          ],
          correctAnswer: 1,
          explanation: "Skip links help keyboard and screen reader users jump directly to main content, bypassing repetitive navigation.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day8_q8",
          type: "mcq",
          question: "Which HTTP status code indicates a permanent redirect?",
          options: [
            "200",
            "302",
            "301",
            "404"
          ],
          correctAnswer: 2,
          explanation: "HTTP 301 indicates a permanent redirect, while 302 is temporary.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day8_q16",
          type: "mcq",
          question: "What is the optimal line length for body text on desktop?",
          options: [
            "30-40 characters",
            "50-75 characters",
            "90-100 characters",
            "100-120 characters"
          ],
          correctAnswer: 1,
          explanation: "Optimal line length for readability is 50-75 characters per line, with 90 characters as maximum.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q17",
          type: "mcq",
          question: "Which cookie attribute prevents JavaScript from accessing the cookie?",
          options: [
            "Secure",
            "SameSite",
            "HttpOnly",
            "Domain"
          ],
          correctAnswer: 2,
          explanation: "HttpOnly attribute prevents JavaScript from accessing cookies, protecting against XSS attacks.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q18",
          type: "mcq",
          question: "What does the aria-label attribute do?",
          options: [
            "Styles the element",
            "Provides an accessible name for screen readers",
            "Validates form input",
            "Controls element visibility"
          ],
          correctAnswer: 1,
          explanation: "aria-label provides a text alternative for screen readers when visual labels aren't present.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q19",
          type: "mcq",
          question: "Which tool is built into Chrome DevTools for accessibility testing?",
          options: [
            "WAVE",
            "axe DevTools",
            "Lighthouse",
            "NVDA"
          ],
          correctAnswer: 2,
          explanation: "Lighthouse is built into Chrome DevTools and provides accessibility audits along with performance and SEO.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q20",
          type: "mcq",
          question: "What is the recommended minimum touch target size for mobile?",
          options: [
            "24×24px",
            "32×32px",
            "44×44px",
            "56×56px"
          ],
          correctAnswer: 2,
          explanation: "WCAG recommends minimum 44×44px touch targets for mobile to ensure easy tapping.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q21",
          type: "mcq",
          question: "Which CSS property is commonly used to create responsive layouts?",
          options: [
            "position: fixed",
            "display: flex",
            "float: left",
            "margin: auto"
          ],
          correctAnswer: 1,
          explanation: "Flexbox (display: flex) is commonly used for creating responsive, flexible layouts.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q22",
          type: "mcq",
          question: "What does POUR stand for in WCAG principles?",
          options: [
            "Performance, Optimization, Usability, Reliability",
            "Perceivable, Operable, Understandable, Robust",
            "Practical, Organized, Universal, Responsive",
            "Progressive, Open, Unified, Reliable"
          ],
          correctAnswer: 1,
          explanation: "POUR represents the four main principles of WCAG 2.1 accessibility guidelines.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        }
      ]
    },
    {
      title: "True/False Questions",
      questions: [
        {
          id: "day8_q9",
          type: "truefalse",
          question: "Client-side validation can be bypassed by disabling JavaScript.",
          correctAnswer: true,
          explanation: "Client-side JavaScript validation can be disabled in browser settings, which is why server-side validation is essential.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day8_q10",
          type: "truefalse",
          question: "All images must have alt text according to accessibility guidelines.",
          correctAnswer: false,
          explanation: "Decorative images should have empty alt text (alt=\"\") to be skipped by screen readers. Only meaningful images need descriptive alt text.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day8_q11",
          type: "truefalse",
          question: "Responsive design means the website works only on mobile devices.",
          correctAnswer: false,
          explanation: "Responsive design means the website adapts to all screen sizes - mobile, tablet, and desktop.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day8_q12",
          type: "truefalse",
          question: "The Tab key is used to navigate forward through interactive elements on a webpage.",
          correctAnswer: true,
          explanation: "Tab key moves focus forward through interactive elements; Shift+Tab moves backward.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day8_q23",
          type: "truefalse",
          question: "Session cookies are automatically deleted when the browser is closed.",
          correctAnswer: true,
          explanation: "Session cookies (without Expires or Max-Age) are deleted when the browser session ends.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q24",
          type: "truefalse",
          question: "Color alone should never be used to convey information.",
          correctAnswer: true,
          explanation: "Color alone is insufficient for colorblind users. Always combine color with text, icons, or patterns.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q25",
          type: "truefalse",
          question: "All functionality must be available via keyboard for accessibility compliance.",
          correctAnswer: true,
          explanation: "WCAG requires all functionality to be keyboard-accessible for users who cannot use a mouse.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q26",
          type: "truefalse",
          question: "Decorative images should have alt=\"\" (empty alt attribute).",
          correctAnswer: true,
          explanation: "Decorative images should have alt=\"\" so screen readers skip them, avoiding unnecessary announcements.",
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
          id: "day8_q13",
          type: "mcq",
          question: "Scenario: You're testing a registration form. The email field shows an error \"Invalid email\" immediately as you type, before clicking submit. What type of validation is this?",
          options: [
            "Server-side validation",
            "Client-side validation",
            "Database validation",
            "API validation"
          ],
          correctAnswer: 1,
          explanation: "Immediate validation as you type occurs on the client-side (browser) using JavaScript.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day8_q14",
          type: "mcq",
          question: "Scenario: A website displays perfectly on Chrome but the layout breaks on Safari. The navigation menu overlaps the content. What type of testing would have caught this issue?",
          options: [
            "Performance testing",
            "Security testing",
            "Browser compatibility testing",
            "Load testing"
          ],
          correctAnswer: 2,
          explanation: "Testing across different browsers (Chrome, Safari, Firefox, Edge) catches browser-specific rendering issues.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day8_q15",
          type: "mcq",
          question: "Scenario: You're testing a website at 375×667 resolution (iPhone). The text is 14px and difficult to read. What is the issue?",
          options: [
            "Font size too large",
            "Font size below recommended minimum (16px)",
            "Resolution too high",
            "Color contrast issue"
          ],
          correctAnswer: 1,
          explanation: "14px is below the recommended 16px minimum for mobile body text, making it difficult to read.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day8_q27",
          type: "mcq",
          question: "Scenario: You're testing a form where the password field requires: 8-20 characters, 1 uppercase, 1 number, 1 special character. A user enters \"test@123\". What should happen?",
          options: [
            "Form submits successfully",
            "Error: \"Password too short\"",
            "Error: \"Password must contain at least one uppercase letter\"",
            "Error: \"Password must contain a special character\""
          ],
          correctAnswer: 2,
          explanation: "\"test@123\" has 8 characters (✓), 1 number (✓), 1 special char @ (✓), but no uppercase letter (✗).",
          difficulty: "hard",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q28",
          type: "mcq",
          question: "Scenario: A website uses red text for errors and green text for success messages. A colorblind user cannot distinguish between them. What is the best solution?",
          options: [
            "Use brighter colors",
            "Add icons (✗ for error, ✓ for success) along with color",
            "Use only text, no colors",
            "Increase font size"
          ],
          correctAnswer: 1,
          explanation: "Combining color with icons ensures information is conveyed to all users, including those with color blindness.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q29",
          type: "mcq",
          question: "Scenario: You're testing a website and notice that pressing Tab moves focus from the header directly to the footer, skipping all main content. What is the issue?",
          options: [
            "Correct behavior - saves time",
            "Keyboard trap",
            "Incorrect tab order",
            "Missing skip link"
          ],
          correctAnswer: 2,
          explanation: "Tab order should follow logical flow through all interactive elements. Skipping main content indicates incorrect tabindex or focus management.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day8_q30",
          type: "mcq",
          question: "Scenario: A user session times out after 15 minutes of inactivity. The user was filling a long form for 20 minutes. What should happen?",
          options: [
            "Form data is lost, user must start over",
            "Warning appears at 14 minutes with option to extend session",
            "Session never times out during form filling",
            "User is logged out immediately without warning"
          ],
          correctAnswer: 1,
          explanation: "Best practice is to warn users before timeout and allow session extension to prevent data loss.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        }
      ]
    }
  ]
};
