export default {
  title: "Day 13: Exploratory Testing & Session-Based Test Management",
  description: "Exploratory Testing, Testing Tours (FCC CUTS VIDS), SBTM",
  passingScore: 70,
  timeLimit: 40,
  modes: {
    quick: {
      timeLimit: 15,
      questionCount: 15,
      description: "Quick assessment covering essential exploratory testing concepts"
    },
    full: {
      timeLimit: 40,
      questionCount: 30,
      description: "Comprehensive assessment covering all exploratory testing and SBTM topics"
    }
  },
  sections: [
    {
      title: "Multiple Choice Questions",
      questions: [
        {
          id: "day13_q1",
          type: "mcq",
          question: "What is the key characteristic of exploratory testing?",
          options: [
            "Following a detailed test script",
            "Simultaneous learning, test design, and execution",
            "Only testing without any planning",
            "Random clicking without purpose"
          ],
          correctAnswer: 1,
          explanation: "James Bach defines exploratory testing as 'simultaneous learning, test design, and test execution.' It's structured and purposeful, not random.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q2",
          type: "mcq",
          question: "What does the mnemonic \"FCC CUTS VIDS\" represent?",
          options: [
            "A testing framework",
            "11 different testing tours",
            "Scrum ceremonies",
            "Test automation tools"
          ],
          correctAnswer: 1,
          explanation: "FCC CUTS VIDS is a mnemonic for 11 testing tours: Feature, Complexity, Claims, Configuration, User, Testability, Scenarios, Variability, Interoperability, Data, Structure.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q3",
          type: "mcq",
          question: "What is the recommended duration for an SBTM testing session?",
          options: [
            "30 minutes",
            "60 minutes",
            "90 minutes",
            "120 minutes"
          ],
          correctAnswer: 2,
          explanation: "The recommended SBTM session duration is 90 minutes (60-120 minutes range), providing enough time for meaningful testing while maintaining focus.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q4",
          type: "mcq",
          question: "In the TBS model for SBTM, what does \"TBS\" stand for?",
          options: [
            "Test, Build, Ship",
            "Test, Bug, Setup",
            "Time, Budget, Scope",
            "Test, Baseline, Standard"
          ],
          correctAnswer: 1,
          explanation: "TBS model tracks time spent on Testing (actual testing), Bug investigation/reporting, and Setup (environment preparation).",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q5",
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
          points: 1
        },
        {
          id: "day13_q6",
          type: "mcq",
          question: "What is the ideal percentage of time spent on \"Test\" in the TBS model?",
          options: [
            "40-50%",
            "60-70%",
            "70-80%",
            "90-100%"
          ],
          correctAnswer: 2,
          explanation: "Ideal TBS distribution is Test: 70-80%, Bug: 10-20%, Setup: 5-10%. High test percentage indicates efficient sessions.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q7",
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
          points: 1
        },
        {
          id: "day13_q8",
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
          points: 1
        },
        {
          id: "day13_q16",
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
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q17",
          type: "mcq",
          question: "What is the primary purpose of a session debrief?",
          options: [
            "To blame testers for bugs",
            "To share findings and plan next steps",
            "To extend the session",
            "To write documentation"
          ],
          correctAnswer: 1,
          explanation: "Session debriefs are collaborative meetings to review findings, discuss issues, and plan follow-up testing. Duration: 15-30 minutes.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q18",
          type: "mcq",
          question: "In SBTM, what is an \"opportunity\"?",
          options: [
            "A bug found during testing",
            "Follow-up testing identified but not completed",
            "A chance to automate tests",
            "Time saved during testing"
          ],
          correctAnswer: 1,
          explanation: "Opportunities are areas identified during testing that need follow-up sessions but couldn't be completed in the current session.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q19",
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
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q20",
          type: "mcq",
          question: "What does the \"Goldilocks\" heuristic test?",
          options: [
            "Too much, too little, just right",
            "Create, read, update, delete",
            "Structure, oracles, actions, properties",
            "Feature, complexity, claims"
          ],
          correctAnswer: 0,
          explanation: "Goldilocks heuristic tests boundary conditions: minimum values (too little), maximum values (too much), and normal values (just right).",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q21",
          type: "mcq",
          question: "Which testing tour evaluates how easy the application is to test?",
          options: [
            "User Tour",
            "Testability Tour",
            "Configuration Tour",
            "Structure Tour"
          ],
          correctAnswer: 1,
          explanation: "The Testability Tour evaluates how easy the application is to test, including test data setup, observability, and automation potential.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q22",
          type: "mcq",
          question: "What is the recommended frequency for session debriefs?",
          options: [
            "Within 1 week",
            "Within 24 hours",
            "Immediately after session",
            "At end of sprint"
          ],
          correctAnswer: 1,
          explanation: "Session debriefs should occur within 24 hours while findings are fresh. For critical findings, debrief immediately.",
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
          id: "day13_q9",
          type: "truefalse",
          question: "Exploratory testing is completely unstructured and random.",
          correctAnswer: false,
          explanation: "Exploratory testing is structured and guided by charters, heuristics, and experience. It's NOT random or unstructured.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day13_q10",
          type: "truefalse",
          question: "SBTM sessions should be uninterrupted for best results.",
          correctAnswer: true,
          explanation: "SBTM sessions should be uninterrupted for best focus and productivity. Interruptions should be minimized or the session should be ended and restarted.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day13_q11",
          type: "truefalse",
          question: "The Complexity Tour focuses on testing the simplest features first.",
          correctAnswer: false,
          explanation: "The Complexity Tour focuses on testing the MOST complex features first, as they are more likely to contain defects.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q12",
          type: "truefalse",
          question: "Exploratory testing can only be done by experienced testers.",
          correctAnswer: false,
          explanation: "While experience helps, exploratory testing can be learned and practiced by testers at all levels. SBTM provides structure for less experienced testers.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day13_q23",
          type: "truefalse",
          question: "The Interoperability Tour focuses on testing integrations with other systems.",
          correctAnswer: true,
          explanation: "The Interoperability Tour specifically focuses on testing integrations with third-party APIs, external services, and other systems.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q24",
          type: "truefalse",
          question: "A good charter should be completable in one 90-minute session.",
          correctAnswer: true,
          explanation: "A well-sized charter should be completable in one 90-minute session. If too large, split into multiple charters.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q25",
          type: "truefalse",
          question: "Exploratory testing eliminates the need for scripted testing.",
          correctAnswer: false,
          explanation: "Exploratory testing complements scripted testing. Best practice is a blended approach: 70% scripted, 30% exploratory.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q26",
          type: "truefalse",
          question: "The Data Tour focuses on testing data flow and persistence.",
          correctAnswer: true,
          explanation: "The Data Tour follows data through its lifecycle: input, validation, storage, retrieval, display, update, and deletion.",
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
          id: "day13_q13",
          type: "mcq",
          question: "Scenario: You conducted a 90-minute SBTM session. You spent 65 minutes testing, 20 minutes investigating bugs, and 5 minutes on setup. What is your TBS breakdown?",
          options: [
            "Test: 72%, Bug: 22%, Setup: 6%",
            "Test: 65%, Bug: 20%, Setup: 5%",
            "Test: 70%, Bug: 25%, Setup: 5%",
            "Test: 75%, Bug: 20%, Setup: 5%"
          ],
          correctAnswer: 0,
          explanation: "Test: 65/90 = 72.2%, Bug: 20/90 = 22.2%, Setup: 5/90 = 5.6%. Round to Test: 72%, Bug: 22%, Setup: 6%.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q14",
          type: "mcq",
          question: "Scenario: You're testing a payment gateway. Which testing tour would be most appropriate to test with multiple payment methods, currencies, and error scenarios?",
          options: [
            "Feature Tour",
            "Complexity Tour",
            "Variability Tour",
            "Configuration Tour"
          ],
          correctAnswer: 2,
          explanation: "The Variability Tour focuses on testing with varying inputs, data, payment methods, currencies, and scenarios - perfect for payment gateway testing.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q15",
          type: "mcq",
          question: "Scenario: Your charter states \"Explore login functionality with valid and invalid credentials to discover authentication issues.\" After 90 minutes, you've only tested valid credentials. Is the charter complete?",
          options: [
            "Yes, you tested for 90 minutes",
            "No, you didn't cover invalid credentials",
            "Yes, valid credentials are most important",
            "No, you should have tested for 120 minutes"
          ],
          correctAnswer: 1,
          explanation: "The charter explicitly states 'valid and invalid credentials.' Completing only half the charter means it's not done, regardless of time spent.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day13_q27",
          type: "mcq",
          question: "Scenario: You're creating a charter for testing a shopping cart. Which charter is better?",
          options: [
            "\"Test the shopping cart\"",
            "\"Explore shopping cart functionality with various product quantities and types to discover calculation and state management issues\"",
            "\"Find bugs in cart\"",
            "\"Test everything about the cart feature\""
          ],
          correctAnswer: 1,
          explanation: "Good charter is specific (shopping cart), defines resources (various quantities/types), and states objective (find calculation/state issues).",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q28",
          type: "mcq",
          question: "Scenario: During an exploratory session, you find a critical bug. The session has 30 minutes remaining. What should you do?",
          options: [
            "Stop testing and write bug report immediately",
            "Continue testing and log bug at end",
            "Note the bug briefly and continue testing, document fully at end",
            "Extend the session to investigate further"
          ],
          correctAnswer: 2,
          explanation: "During a session, note bugs briefly to maintain testing flow. Document fully during wrap-up phase. Don't let bug investigation consume all testing time.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q29",
          type: "mcq",
          question: "Scenario: Your team wants to track exploratory testing progress. Which SBTM metric would be most useful?",
          options: [
            "Lines of code tested",
            "Number of sessions completed and coverage achieved",
            "Number of bugs per tester",
            "Time spent in meetings"
          ],
          correctAnswer: 1,
          explanation: "SBTM metrics include session count, coverage (features tested), defect discovery rate, and TBS efficiency - all trackable and meaningful.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day13_q30",
          type: "mcq",
          question: "Scenario: You completed 12 SBTM sessions in a sprint and found 36 defects. What is your Defect Discovery Rate (DDR)?",
          options: [
            "2.0 defects per session",
            "3.0 defects per session",
            "4.0 defects per session",
            "36 defects per sprint"
          ],
          correctAnswer: 1,
          explanation: "DDR = Total Defects / Total Sessions = 36 / 12 = 3.0 defects per session.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        }
      ]
    }
  ]
};
