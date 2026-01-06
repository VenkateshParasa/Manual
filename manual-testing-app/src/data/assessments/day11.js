export default {
  title: "Day 11: Specialized Testing Types",
  description: "Localization, Accessibility, Usability, Compatibility Testing",
  passingScore: 70,
  timeLimit: 60,
  modes: {
    quick: {
      timeLimit: 20,
      questionCount: 20,
      description: "Quick assessment covering essential specialized testing concepts"
    },
    full: {
      timeLimit: 60,
      questionCount: 44,
      description: "Comprehensive assessment covering all specialized testing topics"
    }
  },
  sections: [
    {
      title: "Localization & Internationalization",
      questions: [
        {
          id: "day11_q1",
          type: "mcq",
          question: "What is the difference between i18n and L10n?",
          options: [
            "They are the same thing",
            "i18n is architecture, L10n is adaptation",
            "L10n is architecture, i18n is adaptation",
            "i18n is for iOS, L10n is for Android"
          ],
          correctAnswer: 1,
          explanation: "i18n (Internationalization) is designing architecture to support multiple languages. L10n (Localization) is adapting content for specific locales.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q2",
          type: "mcq",
          question: "Which language typically expands 30-40% compared to English?",
          options: [
            "Spanish",
            "Chinese",
            "German/Finnish",
            "Japanese"
          ],
          correctAnswer: 2,
          explanation: "German and Finnish words are typically 30-40% longer than English equivalents, requiring extra UI space.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q3",
          type: "mcq",
          question: "What is RTL in localization testing?",
          options: [
            "Right-to-Left languages (Arabic, Hebrew)",
            "Run-Time Loading",
            "Rapid Testing Localization",
            "Resource Translation Layer"
          ],
          correctAnswer: 0,
          explanation: "RTL refers to Right-to-Left languages like Arabic, Hebrew, Persian, and Urdu that read from right to left.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day11_q4",
          type: "mcq",
          question: "What should happen with numbers in RTL languages?",
          options: [
            "Display right-to-left like text",
            "Display left-to-right (123, not 321)",
            "Use Arabic numerals only",
            "Reverse the order"
          ],
          correctAnswer: 1,
          explanation: "Numbers always display left-to-right (123), even in RTL languages. Only text direction changes.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Accessibility Testing (WCAG)",
      questions: [
        {
          id: "day11_q5",
          type: "mcq",
          question: "What is the MINIMUM color contrast ratio for normal text (WCAG Level AA)?",
          options: [
            "3:1",
            "4.5:1",
            "7:1",
            "10:1"
          ],
          correctAnswer: 1,
          explanation: "WCAG Level AA requires 4.5:1 minimum contrast ratio for normal text (less than 18pt or 14pt bold).",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q6",
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
        },
        {
          id: "day11_q7",
          type: "mcq",
          question: "Which ARIA attribute hides content from screen readers?",
          options: [
            "aria-hidden=\"true\"",
            "aria-invisible=\"true\"",
            "aria-skip=\"true\"",
            "aria-exclude=\"true\""
          ],
          correctAnswer: 0,
          explanation: "aria-hidden=\"true\" hides elements from screen readers while keeping them visible on screen.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q8",
          type: "mcq",
          question: "What is the purpose of \"alt\" text for images?",
          options: [
            "SEO optimization",
            "Alternative text for screen readers",
            "Image caption",
            "Copyright notice"
          ],
          correctAnswer: 1,
          explanation: "Alt text provides text alternative for screen readers when images cannot be seen or loaded.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day11_q9",
          type: "mcq",
          question: "Which WCAG conformance level is most commonly targeted by organizations?",
          options: [
            "Level A",
            "Level AA",
            "Level AAA",
            "Level A+"
          ],
          correctAnswer: 1,
          explanation: "Level AA is the most common target as it balances accessibility with feasibility. Level AAA is aspirational.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q10",
          type: "mcq",
          question: "What does \"keyboard accessible\" mean?",
          options: [
            "Has keyboard shortcuts",
            "All functionality available via keyboard without mouse",
            "Keyboard is wireless",
            "Works with virtual keyboards"
          ],
          correctAnswer: 1,
          explanation: "Keyboard accessible means all functionality can be operated using only keyboard, without requiring a mouse.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "Usability Testing",
      questions: [
        {
          id: "day11_q11",
          type: "mcq",
          question: "How many users does Nielsen recommend for usability testing to find 85% of issues?",
          options: [
            "3 users",
            "5 users",
            "10 users",
            "20 users"
          ],
          correctAnswer: 1,
          explanation: "Nielsen's research shows 5 users find approximately 85% of usability issues. Diminishing returns after 5 users.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q12",
          type: "mcq",
          question: "What is the \"Think Aloud\" protocol in usability testing?",
          options: [
            "Tester talks to user during test",
            "User verbalizes thoughts while performing tasks",
            "Team discusses results after test",
            "User reads instructions aloud"
          ],
          correctAnswer: 1,
          explanation: "Think Aloud protocol has users verbalize their thoughts, decisions, and confusion while performing tasks.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q13",
          type: "mcq",
          question: "What does SUS stand for in usability metrics?",
          options: [
            "Standard Usability Score",
            "System Usability Scale",
            "Software User Satisfaction",
            "Simple Usage Standard"
          ],
          correctAnswer: 1,
          explanation: "System Usability Scale (SUS) is a 10-question survey for measuring perceived usability. Score above 68 is good.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q14",
          type: "mcq",
          question: "What is Nielsen's Heuristic #1?",
          options: [
            "User control and freedom",
            "Consistency and standards",
            "Visibility of system status",
            "Error prevention"
          ],
          correctAnswer: 2,
          explanation: "Heuristic #1 is \"Visibility of system status\" - keep users informed about what's happening through feedback.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q15",
          type: "mcq",
          question: "What is considered a \"good\" SUS score?",
          options: [
            "Above 50",
            "Above 68",
            "Above 80",
            "Above 90"
          ],
          correctAnswer: 1,
          explanation: "SUS score above 68 is considered good (68 is the average). Above 80 is excellent.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Compatibility Testing",
      questions: [
        {
          id: "day11_q16",
          type: "mcq",
          question: "Which browser has the HIGHEST market share in 2026?",
          options: [
            "Safari",
            "Firefox",
            "Chrome",
            "Edge"
          ],
          correctAnswer: 2,
          explanation: "Chrome has approximately 63% market share on both desktop and mobile, making it highest priority for testing.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day11_q17",
          type: "mcq",
          question: "What tool would you use to check CSS feature support across browsers?",
          options: [
            "W3C Validator",
            "Can I Use (caniuse.com)",
            "Google Analytics",
            "PageSpeed Insights"
          ],
          correctAnswer: 1,
          explanation: "Can I Use (caniuse.com) shows browser support for HTML, CSS, and JavaScript features across versions.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day11_q18",
          type: "mcq",
          question: "Which platform requires vendor prefixes for CSS properties?",
          options: [
            "Modern browsers don't need prefixes",
            "Older browsers may need prefixes (-webkit-, -moz-)",
            "Only Internet Explorer needs prefixes",
            "Prefixes are only for animations"
          ],
          correctAnswer: 1,
          explanation: "Older browsers may require vendor prefixes (-webkit-, -moz-, -ms-, -o-) for certain CSS features.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day11_q19",
          type: "mcq",
          question: "What is BrowserStack used for?",
          options: [
            "Browser development",
            "Cloud-based cross-browser testing",
            "Browser performance monitoring",
            "Browser security testing"
          ],
          correctAnswer: 1,
          explanation: "BrowserStack provides cloud-based cross-browser and cross-device testing on real browsers and devices.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day11_q20",
          type: "mcq",
          question: "What is the difference between macOS keyboard shortcuts and Windows?",
          options: [
            "No difference",
            "macOS uses ⌘ (Command), Windows uses Ctrl",
            "macOS uses Alt, Windows uses Option",
            "Shortcuts are identical across platforms"
          ],
          correctAnswer: 1,
          explanation: "macOS uses Command key (⌘) for shortcuts, Windows uses Ctrl. Example: ⌘+C vs Ctrl+C for copy.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "True/False Questions",
      questions: [
        {
          id: "day11_q21",
          type: "truefalse",
          question: "i18n stands for \"Internationalization\" (i + 18 letters + n).",
          correctAnswer: true,
          explanation: "i18n is numeronym for Internationalization: i + 18 characters + n.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q22",
          type: "truefalse",
          question: "Concatenated strings are a good practice for localization.",
          correctAnswer: false,
          explanation: "Concatenation breaks translations as word order varies by language. Use placeholders instead.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q23",
          type: "truefalse",
          question: "UTF-8 encoding should be used for supporting multiple character sets.",
          correctAnswer: true,
          explanation: "UTF-8 supports all character sets and is the standard encoding for internationalization.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q24",
          type: "truefalse",
          question: "Color alone can be used to convey information in accessible design.",
          correctAnswer: false,
          explanation: "Color should not be the sole means of conveying information. Add icons, text, or patterns for colorblind users.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q25",
          type: "truefalse",
          question: "WCAG Level AAA is required for all websites by law.",
          correctAnswer: false,
          explanation: "Level AA is commonly required. Level AAA is aspirational and not required for full conformance.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q26",
          type: "truefalse",
          question: "Screen readers can read text in images if alt text is provided.",
          correctAnswer: true,
          explanation: "Screen readers read alt text, not the actual image. Alt text provides text alternative for images.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q27",
          type: "truefalse",
          question: "Every form field should have an associated <label> element.",
          correctAnswer: true,
          explanation: "Every form field needs a <label> element for accessibility. Labels help screen readers and improve usability.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q28",
          type: "truefalse",
          question: "Keyboard focus should always be visible to users.",
          correctAnswer: true,
          explanation: "Keyboard focus must be visible (3:1 contrast minimum) so users know which element is active.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q29",
          type: "truefalse",
          question: "Decorative images should have descriptive alt text.",
          correctAnswer: false,
          explanation: "Decorative images should have empty alt=\"\" so screen readers skip them, avoiding unnecessary announcements.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q30",
          type: "truefalse",
          question: "Moderated usability testing allows asking follow-up questions.",
          correctAnswer: true,
          explanation: "Moderated testing allows real-time probing and follow-up questions to understand user behavior.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q31",
          type: "truefalse",
          question: "A/B testing explains WHY users prefer one option.",
          correctAnswer: false,
          explanation: "A/B testing shows WHAT works better, not WHY. Usability testing explains the reasons behind preferences.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q32",
          type: "truefalse",
          question: "Task success rate is a quantitative usability metric.",
          correctAnswer: true,
          explanation: "Task success rate is measurable and quantitative (e.g., 8 out of 10 users completed the task = 80%).",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q33",
          type: "truefalse",
          question: "Nielsen's heuristic \"Error Prevention\" means showing good error messages.",
          correctAnswer: false,
          explanation: "Error Prevention means PREVENTING errors from occurring, not just showing good error messages.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q34",
          type: "truefalse",
          question: "Usability testing should only be done with expert users.",
          correctAnswer: false,
          explanation: "Test with representative users from your target audience, not experts. Experts behave differently.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q35",
          type: "truefalse",
          question: "Browser emulators are 100% accurate for compatibility testing.",
          correctAnswer: false,
          explanation: "Emulators/simulators have limitations. Real browser testing on actual devices is more reliable.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q36",
          type: "truefalse",
          question: "WebP image format is supported by all browsers.",
          correctAnswer: false,
          explanation: "WebP support varies. Safari 14+ supports it, but older browsers don't. Check caniuse.com for compatibility.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q37",
          type: "truefalse",
          question: "CSS Grid Layout requires fallbacks for older browsers.",
          correctAnswer: true,
          explanation: "CSS Grid needs fallbacks for older browsers like IE11. Use feature detection (@supports) and alternative layouts.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q38",
          type: "truefalse",
          question: "Font rendering differs between Windows, macOS, and Linux.",
          correctAnswer: true,
          explanation: "Font rendering engines differ across operating systems, affecting text appearance and readability.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q39",
          type: "truefalse",
          question: "Mobile Safari and Desktop Safari always render pages identically.",
          correctAnswer: false,
          explanation: "Mobile and desktop Safari can render differently due to viewport, touch interactions, and mobile-specific features.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day11_q40",
          type: "truefalse",
          question: "Cross-browser testing tools eliminate the need for real device testing.",
          correctAnswer: false,
          explanation: "Cloud tools help but don't eliminate need for real device testing, especially for critical scenarios.",
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
          id: "day11_q41",
          type: "shortanswer",
          question: "Scenario: Your e-commerce site is being translated to German. Testers report that many buttons show truncated text like \"Einkaufswagen hinz...\" instead of \"Einkaufswagen hinzufügen\" (Add to cart). The layout looks fine in English. What is causing this issue?",
          acceptableAnswers: ["Text truncation", "Insufficient button width", "German text expansion", "Layout not flexible", "Fixed width buttons"],
          keywords: ["truncation", "width", "expansion", "German", "space", "layout"],
          minKeywords: 2,
          explanation: "Text truncation due to insufficient button width. German words are 30-40% longer than English. Prevention: Design with 40% extra space, use flexible layouts, test with longest translations.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day11_q42",
          type: "shortanswer",
          question: "Scenario: Your website fails WCAG AA audit with these issues: 1) Light gray text (#999) on white background, 2) Form fields without labels, 3) Dropdown menu not keyboard accessible, 4) Images missing alt text. Name TWO WCAG principles violated.",
          acceptableAnswers: ["Perceivable", "Operable", "Understandable", "Robust"],
          keywords: ["Perceivable", "Operable", "Understandable", "Robust"],
          minKeywords: 2,
          explanation: "Violations: 1) Low contrast violates Perceivable (1.4.3), 2) No labels violates Understandable (3.3.2), 3) No keyboard access violates Operable (2.1.1), 4) Missing alt violates Perceivable (1.1.1).",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day11_q43",
          type: "shortanswer",
          question: "Scenario: You conducted usability testing with 5 users on a checkout flow. Results: 2 users completed checkout successfully (40% success rate), 3 users abandoned at payment step, Average time: 8 minutes (target was 2 minutes), All users complained: \"I don't know where to enter my discount code\". What is the primary usability issue?",
          acceptableAnswers: ["Discount code field not visible", "Poor discoverability", "Hidden discount field", "Lack of visibility", "Not findable"],
          keywords: ["discount", "visible", "findable", "discoverability", "hidden", "visibility"],
          minKeywords: 2,
          explanation: "Primary issue: Discount code field not visible/findable - lack of discoverability. Violates Nielsen's heuristic #6 \"Recognition rather than recall\". Solution: Make discount field prominent and always visible.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day11_q44",
          type: "shortanswer",
          question: "Scenario: Users report that your web application works perfectly in Chrome and Edge, but in Firefox: The sidebar navigation is missing, The layout is broken, Console shows errors about CSS Grid not working. What is the likely cause?",
          acceptableAnswers: ["CSS Grid compatibility", "Browser compatibility issue", "Missing vendor prefix", "Unsupported CSS feature", "Firefox doesn't support Grid"],
          keywords: ["Grid", "compatibility", "Firefox", "support", "prefix", "CSS"],
          minKeywords: 2,
          explanation: "Firefox doesn't support CSS Grid as implemented (missing vendor prefix or using unsupported features). Solution: Add fallback layout, use feature detection (@supports), test in target Firefox versions.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        }
      ]
    }
  ]
};
