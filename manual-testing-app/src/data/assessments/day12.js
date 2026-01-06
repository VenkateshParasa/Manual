export default {
  title: "Day 12: Regression & Smoke Testing Strategies",
  description: "Regression Types, Test Prioritization, Smoke vs Sanity, Test Suite Optimization",
  passingScore: 70,
  timeLimit: 60,
  modes: {
    quick: {
      timeLimit: 20,
      questionCount: 20,
      description: "Quick assessment covering essential regression and smoke testing concepts"
    },
    full: {
      timeLimit: 60,
      questionCount: 44,
      description: "Comprehensive assessment covering all regression and optimization strategies"
    }
  },
  sections: [
    {
      title: "Regression Testing Types",
      questions: [
        {
          id: "day12_q1",
          type: "mcq",
          question: "Which regression testing type reuses existing test cases without modification?",
          options: [
            "Progressive Regression Testing",
            "Corrective Regression Testing",
            "Retest-All Regression Testing",
            "Selective Regression Testing"
          ],
          correctAnswer: 1,
          explanation: "Corrective Regression Testing reuses existing test cases without modification when no specification changes occur.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day12_q2",
          type: "mcq",
          question: "When should \"Retest-All\" regression testing be used?",
          options: [
            "Minor bug fixes",
            "Major architecture changes or framework upgrades",
            "Hotfixes",
            "UI text changes only"
          ],
          correctAnswer: 1,
          explanation: "Retest-All is used for major changes when impact is uncertain or very large (architecture changes, framework upgrades).",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day12_q3",
          type: "mcq",
          question: "What is \"Selective Regression Testing\"?",
          options: [
            "Testing all test cases",
            "Testing only changed modules and their dependencies",
            "Testing only new features",
            "Random selection of test cases"
          ],
          correctAnswer: 1,
          explanation: "Selective Regression tests only changed modules and their dependencies, requiring impact analysis.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day12_q4",
          type: "mcq",
          question: "Which regression testing type adds NEW test cases for new features?",
          options: [
            "Corrective",
            "Retest-All",
            "Selective",
            "Progressive"
          ],
          correctAnswer: 3,
          explanation: "Progressive Regression adds new test cases for new features while keeping existing test cases.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Test Case Prioritization",
      questions: [
        {
          id: "day12_q5",
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
          id: "day12_q6",
          type: "mcq",
          question: "In the priority scoring formula: Score = (Business Criticality × 0.5) + (Defect History × 0.3) + (Change Frequency × 0.2), what has the HIGHEST weight?",
          options: [
            "Business Criticality",
            "Defect History",
            "Change Frequency",
            "All equal"
          ],
          correctAnswer: 0,
          explanation: "Business Criticality has the highest weight at 0.5 (50%), followed by Defect History (30%) and Change Frequency (20%).",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day12_q7",
          type: "mcq",
          question: "What priority should be assigned to a feature that handles payment transactions?",
          options: [
            "P3 (Low)",
            "P2 (Medium)",
            "P1 (High)",
            "P0 (Critical)"
          ],
          correctAnswer: 3,
          explanation: "Payment/transactions are always P0 Critical due to direct revenue impact and security implications.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day12_q8",
          type: "mcq",
          question: "Which prioritization technique focuses on tests that historically find the most bugs?",
          options: [
            "Coverage-based",
            "History-based (DDR - Defect Detection Rate)",
            "Risk-based",
            "Time-constrained"
          ],
          correctAnswer: 1,
          explanation: "History-based prioritization uses DDR (Defect Detection Rate) to prioritize tests that historically find the most bugs.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Smoke Testing",
      questions: [
        {
          id: "day12_q9",
          type: "mcq",
          question: "What is the PRIMARY purpose of smoke testing?",
          options: [
            "Find all possible bugs",
            "Verify build is stable enough for detailed testing",
            "Test security vulnerabilities",
            "Performance testing"
          ],
          correctAnswer: 1,
          explanation: "Smoke testing verifies build stability before detailed testing. It's a quick sanity check of critical functionality.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day12_q10",
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
          id: "day12_q11",
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
          points: 2
        },
        {
          id: "day12_q12",
          type: "mcq",
          question: "What happens if ANY smoke test fails?",
          options: [
            "Continue testing",
            "Skip that feature",
            "Reject build immediately",
            "Create a bug report and proceed"
          ],
          correctAnswer: 2,
          explanation: "ANY smoke test failure means reject build immediately. No compromise - build is not stable for testing.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day12_q13",
          type: "mcq",
          question: "What type of testing is \"Wide and Shallow\"?",
          options: [
            "Regression Testing",
            "Smoke Testing",
            "Sanity Testing",
            "Integration Testing"
          ],
          correctAnswer: 1,
          explanation: "Smoke testing is wide (covers all features) and shallow (surface-level testing only).",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Smoke vs Sanity vs Regression",
      questions: [
        {
          id: "day12_q14",
          type: "mcq",
          question: "What is the MAIN difference between Smoke and Sanity testing?",
          options: [
            "Smoke is wide & shallow, Sanity is narrow & deep",
            "Smoke is automated, Sanity is manual",
            "Smoke is for mobile, Sanity is for web",
            "No difference"
          ],
          correctAnswer: 0,
          explanation: "Smoke covers all features lightly (wide & shallow). Sanity focuses deep on specific area after bug fix (narrow & deep).",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day12_q15",
          type: "mcq",
          question: "When should Sanity testing be performed?",
          options: [
            "New build deployment",
            "After a specific bug fix or minor change",
            "Before every release",
            "Only on Fridays"
          ],
          correctAnswer: 1,
          explanation: "Sanity testing is performed after a specific bug fix or minor change to verify that specific functionality works.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day12_q16",
          type: "mcq",
          question: "Which has the BROADEST scope?",
          options: [
            "Smoke Testing",
            "Sanity Testing",
            "Regression Testing",
            "All equal"
          ],
          correctAnswer: 2,
          explanation: "Regression testing has the broadest scope - comprehensive testing of all features to ensure no side effects.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "Test Suite Optimization",
      questions: [
        {
          id: "day12_q17",
          type: "mcq",
          question: "What is the PRIMARY goal of test suite optimization?",
          options: [
            "Remove all test cases",
            "Reduce execution time while maintaining coverage",
            "Automate everything",
            "Increase number of test cases"
          ],
          correctAnswer: 1,
          explanation: "Optimization aims to reduce execution time while maintaining adequate test coverage - not just removing tests.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day12_q18",
          type: "mcq",
          question: "Which tests should be REMOVED during optimization?",
          options: [
            "Tests that never find bugs (0% DDR)",
            "Tests for critical features",
            "All P0 tests",
            "Automated tests"
          ],
          correctAnswer: 0,
          explanation: "Remove tests with 0% DDR (never find bugs), obsolete tests, and redundant tests. Keep critical and high-value tests.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day12_q19",
          type: "mcq",
          question: "What does \"parallel execution\" mean in testing?",
          options: [
            "Running tests one after another",
            "Running multiple tests simultaneously",
            "Testing on multiple browsers sequentially",
            "Testing with multiple testers"
          ],
          correctAnswer: 1,
          explanation: "Parallel execution runs multiple tests simultaneously on different machines/threads to reduce total execution time.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day12_q20",
          type: "mcq",
          question: "What is a key requirement for parallel test execution?",
          options: [
            "Tests must be very slow",
            "Tests must be independent (no dependencies)",
            "Tests must use same test data",
            "Tests must be manual"
          ],
          correctAnswer: 1,
          explanation: "Tests must be independent with no dependencies to run in parallel safely without conflicts.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "True/False Questions",
      questions: [
        {
          id: "day12_q21",
          type: "truefalse",
          question: "Corrective Regression Testing requires creating new test cases.",
          correctAnswer: false,
          explanation: "Corrective Regression reuses existing test cases without modification when no specification changes occur.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q22",
          type: "truefalse",
          question: "Selective Regression Testing requires impact analysis to identify affected areas.",
          correctAnswer: true,
          explanation: "Selective Regression requires impact analysis to identify which modules and dependencies are affected by changes.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q23",
          type: "truefalse",
          question: "Full Regression Testing should be run after every code commit.",
          correctAnswer: false,
          explanation: "Full regression is too time-consuming for every commit. Run smoke tests for commits, full regression before releases.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q24",
          type: "truefalse",
          question: "Test case prioritization is unnecessary if you have time to run all tests.",
          correctAnswer: false,
          explanation: "Prioritization helps even with time - focuses on high-value tests first and provides better risk management.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q25",
          type: "truefalse",
          question: "P0 test cases must pass before deployment.",
          correctAnswer: true,
          explanation: "P0 (Critical) tests must pass - they are blocking for deployment as they cover critical functionality.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q26",
          type: "truefalse",
          question: "Risk Score = (Business Impact × Complexity × Change Frequency)",
          correctAnswer: true,
          explanation: "Risk score formula multiplies these three factors to calculate overall risk for prioritization.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q27",
          type: "truefalse",
          question: "Smoke tests should include negative testing and edge cases.",
          correctAnswer: false,
          explanation: "Smoke tests focus on happy path only - basic positive scenarios. Negative testing is for detailed regression.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q28",
          type: "truefalse",
          question: "A smoke test suite should test ALL features in depth.",
          correctAnswer: false,
          explanation: "Smoke tests are shallow - touch all features lightly, not in depth. Deep testing is for regression.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q29",
          type: "truefalse",
          question: "Smoke testing is also called \"Build Verification Testing (BVT)\".",
          correctAnswer: true,
          explanation: "Smoke testing = Build Verification Testing (BVT) - both verify build stability before detailed testing.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q30",
          type: "truefalse",
          question: "If a smoke test fails, detailed testing should continue.",
          correctAnswer: false,
          explanation: "If smoke fails, reject build immediately. No further testing until build is fixed and smoke passes.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q31",
          type: "truefalse",
          question: "Sanity testing is a subset of regression testing.",
          correctAnswer: true,
          explanation: "Sanity is a focused subset of regression testing - quick check of specific functionality after changes.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q32",
          type: "truefalse",
          question: "Regression testing catches side effects of code changes.",
          correctAnswer: true,
          explanation: "Regression testing ensures changes don't break existing functionality - catches unintended side effects.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q33",
          type: "truefalse",
          question: "Test automation always saves money regardless of the test.",
          correctAnswer: false,
          explanation: "Automation has ROI calculation. Not all tests are worth automating (rarely-run tests, frequently-changing UI).",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q34",
          type: "truefalse",
          question: "Repetitive tests executed frequently are good automation candidates.",
          correctAnswer: true,
          explanation: "Repetitive, frequently-run, stable tests are best automation candidates - high ROI.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q35",
          type: "truefalse",
          question: "ROI = (Savings - Cost) / Cost × 100%",
          correctAnswer: true,
          explanation: "ROI (Return on Investment) formula: (Savings - Cost) / Cost × 100%. Positive ROI means profitable.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q36",
          type: "truefalse",
          question: "Flaky tests should be ignored if they pass most of the time.",
          correctAnswer: false,
          explanation: "Flaky tests should be fixed, not ignored. They erode confidence in test suite and waste time investigating.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q37",
          type: "truefalse",
          question: "Obsolete tests for removed features should remain in the regression suite.",
          correctAnswer: false,
          explanation: "Obsolete tests should be removed or archived. They waste execution time and maintenance effort.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q38",
          type: "truefalse",
          question: "Merging redundant test cases can reduce execution time.",
          correctAnswer: true,
          explanation: "Merging redundant tests reduces total test count and execution time while maintaining coverage.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q39",
          type: "truefalse",
          question: "Tests should be independent to enable parallel execution.",
          correctAnswer: true,
          explanation: "Independence allows parallel execution and any order - no dependencies or shared state.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day12_q40",
          type: "truefalse",
          question: "Manual testers should focus only on manual testing, never automation.",
          correctAnswer: false,
          explanation: "Manual testers should learn automation to increase efficiency and career growth. Blended skills are valuable.",
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
          id: "day12_q41",
          type: "shortanswer",
          question: "Scenario: Your regression test suite has grown from 100 test cases (2 hours execution) in Sprint 1 to 1,500 test cases (30 hours execution) in Sprint 20. The team can no longer complete full regression before each release. Name TWO optimization strategies to reduce execution time.",
          acceptableAnswers: ["Remove obsolete tests", "Prioritize tests", "Automate tests", "Parallel execution", "Merge redundant tests", "Remove low-value tests"],
          keywords: ["remove", "obsolete", "prioritize", "automate", "parallel", "merge", "redundant"],
          minKeywords: 2,
          explanation: "Three main strategies: 1) Remove obsolete/redundant tests, 2) Prioritize tests (P0 daily, P1 weekly, P2/P3 before release), 3) Automate and run in parallel. Also: merge redundant tests, optimize test data.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day12_q42",
          type: "shortanswer",
          question: "Scenario: You're creating a smoke test suite for a new e-commerce application. The app has: User registration/login, Product search and catalog, Shopping cart, Checkout and payment, Order management, User profile. Select 5 critical test scenarios for the smoke suite.",
          acceptableAnswers: ["Login", "Search product", "Add to cart", "View cart", "Checkout", "Logout", "Product details"],
          keywords: ["login", "search", "cart", "checkout", "product", "logout"],
          minKeywords: 3,
          explanation: "Critical smoke scenarios: 1) Login with valid credentials, 2) Search for product, 3) View product details, 4) Add to cart, 5) View cart, 6) Proceed to checkout (don't complete payment), 7) Logout. Execution time: 15-20 minutes.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day12_q43",
          type: "shortanswer",
          question: "Scenario: You have 500 test cases and only 4 hours before release. Payment module has 45 P0 tests, 32 recent defects, and was changed yesterday. Checkout has 40 P0 tests, 47 defects, and was changed yesterday. Which modules should you prioritize?",
          acceptableAnswers: ["Payment", "Checkout", "Login", "Critical modules", "P0 tests"],
          keywords: ["Payment", "Checkout", "P0", "critical", "changed"],
          minKeywords: 2,
          explanation: "Prioritize: 1) Payment (45 P0, 32 defects, changed recently) - HIGH RISK, 2) Checkout (40 P0, 47 defects, changed recently) - HIGH RISK, 3) Login (critical path). Run all P0 from these modules = ~95 tests in 4 hours.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day12_q44",
          type: "shortanswer",
          question: "Scenario: Your team is considering automating the smoke test suite. Current state: 25 smoke tests, Manual execution: 2 hours per run, Run 3 times per day, 22 working days per month, Tester rate: $50/hour. Automation costs: Development: 40 hours @ $75/hour, Maintenance: 5 hours/month @ $75/hour, Tool cost: $200/month. Calculate the monthly ROI after the first month.",
          acceptableAnswers: ["84%", "85%", "80-90%", "Positive ROI", "High ROI"],
          keywords: ["84", "85", "80", "90", "positive", "ROI"],
          minKeywords: 1,
          explanation: "Current monthly cost: 2 hours × 3 runs × 22 days = 132 hours × $50 = $6,600. First month automation: (40 × $75) + (5 × $75) + $200 = $3,575. ROI = ($6,600 - $3,575) / $3,575 × 100% = 84.6%. Payback period: 2 weeks.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        }
      ]
    }
  ]
};
