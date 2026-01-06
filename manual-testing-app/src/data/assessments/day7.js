export const day7Assessment = {
  id: 'day7',
  title: 'Day 7: Week 1 Comprehensive Review & Assessment',
  description: '100-Question Master Test covering all Week 1 topics (Days 1-6)',
  
  passingScore: 70,
  
  quickMode: {
    timeLimit: 30,
    questions: 30
  },
  
  fullMode: {
    timeLimit: 120,
    questions: 100
  },

  questions: [
    // QUICK MODE QUESTIONS (Q1-Q30)
    // Section A: Multiple Choice (15 questions)
    
    {
      id: 'q1',
      type: 'mcq',
      question: 'What is the primary goal of software testing?',
      options: [
        'To prove the software has no defects',
        'To find all possible defects',
        'To provide information about software quality',
        'To delay the release date'
      ],
      correctAnswer: 2,
      explanation: 'The primary goal is to provide information about software quality to enable informed decisions, not to prove absence of defects or find all defects (which is impossible).',
      difficulty: 'easy',
      section: 'Fundamentals',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'Which SDLC model is best suited for projects with unclear requirements?',
      options: [
        'Waterfall',
        'V-Model',
        'Agile',
        'Spiral'
      ],
      correctAnswer: 2,
      explanation: 'Agile is best for projects with unclear or changing requirements due to its iterative and flexible nature.',
      difficulty: 'easy',
      section: 'SDLC',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'What is the first phase in STLC?',
      options: [
        'Test Planning',
        'Test Design',
        'Requirement Analysis',
        'Test Execution'
      ],
      correctAnswer: 2,
      explanation: 'STLC starts with Requirement Analysis, where testers understand requirements and identify testable aspects.',
      difficulty: 'easy',
      section: 'STLC',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'Which testing level focuses on testing individual units of code?',
      options: [
        'Unit Testing',
        'Integration Testing',
        'System Testing',
        'Acceptance Testing'
      ],
      correctAnswer: 0,
      explanation: 'Unit Testing focuses on testing individual units/components of code in isolation.',
      difficulty: 'easy',
      section: 'Testing Levels',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'What does "Shift-Left Testing" mean?',
      options: [
        'Moving testers to left side of office',
        'Testing earlier in SDLC',
        'Left-to-right test execution',
        'Testing on left monitor'
      ],
      correctAnswer: 1,
      explanation: 'Shift-Left Testing means starting testing activities earlier in the SDLC to find defects when they are cheaper to fix.',
      difficulty: 'medium',
      section: 'Testing Principles',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'In which integration approach do we use stubs?',
      options: [
        'Big Bang',
        'Top-Down',
        'Bottom-Up',
        'Sandwich'
      ],
      correctAnswer: 1,
      explanation: 'Top-Down integration uses stubs to simulate lower-level modules that haven\'t been developed yet.',
      difficulty: 'medium',
      section: 'Integration Testing',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'Which test design technique divides input into valid and invalid partitions?',
      options: [
        'Boundary Value Analysis',
        'Equivalence Partitioning',
        'Decision Table',
        'State Transition'
      ],
      correctAnswer: 1,
      explanation: 'Equivalence Partitioning divides input data into valid and invalid partitions where all values in a partition behave similarly.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'For an age field accepting 18-65, which BVA values should be tested?',
      options: [
        '18, 40, 65',
        '17, 18, 65, 66',
        '17, 18, 19, 64, 65, 66',
        '1, 18, 65, 100'
      ],
      correctAnswer: 2,
      explanation: 'BVA tests boundaries and values just inside/outside: 17 (invalid), 18 (min valid), 19 (min+1), 64 (max-1), 65 (max valid), 66 (invalid).',
      difficulty: 'hard',
      section: 'Test Design',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'What does RTM stand for?',
      options: [
        'Real-Time Monitoring',
        'Requirements Traceability Matrix',
        'Regression Test Management',
        'Risk Testing Methodology'
      ],
      correctAnswer: 1,
      explanation: 'RTM (Requirements Traceability Matrix) maps requirements to test cases ensuring complete coverage.',
      difficulty: 'easy',
      section: 'Documentation',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'Which document defines the overall testing approach and strategy?',
      options: [
        'Test Case',
        'Test Plan',
        'Test Report',
        'RTM'
      ],
      correctAnswer: 1,
      explanation: 'Test Plan defines the overall testing approach, strategy, scope, resources, and schedule.',
      difficulty: 'easy',
      section: 'Documentation',
      points: 1
    },
    {
      id: 'q11',
      type: 'mcq',
      question: 'What is the correct bug life cycle sequence?',
      options: [
        'New → Fixed → Closed',
        'New → Assigned → Fixed → Retest → Closed',
        'New → Assigned → In Progress → Fixed → Retest → Verified → Closed',
        'New → Closed'
      ],
      correctAnswer: 2,
      explanation: 'Complete bug life cycle: New → Assigned → In Progress → Fixed → Retest → Verified → Closed.',
      difficulty: 'medium',
      section: 'Defect Management',
      points: 1
    },
    {
      id: 'q12',
      type: 'mcq',
      question: 'What is the difference between Severity and Priority?',
      options: [
        'They are the same',
        'Severity is technical impact, Priority is business urgency',
        'Severity is business urgency, Priority is technical impact',
        'Severity is for testers, Priority is for developers'
      ],
      correctAnswer: 1,
      explanation: 'Severity = technical impact (how bad the defect is), Priority = business urgency (when to fix it).',
      difficulty: 'medium',
      section: 'Defect Management',
      points: 1
    },
    {
      id: 'q13',
      type: 'mcq',
      question: 'What is the formula for Defect Removal Efficiency (DRE)?',
      options: [
        '(Total Defects / Size) × 100',
        '(Defects in Production / Total Defects) × 100',
        '(Defects Found Before Release / Total Defects) × 100',
        '(Fixed Defects / Total Defects) × 100'
      ],
      correctAnswer: 2,
      explanation: 'DRE = (Defects Found Before Release / Total Defects) × 100%. Measures testing effectiveness.',
      difficulty: 'medium',
      section: 'Metrics',
      points: 1
    },
    {
      id: 'q14',
      type: 'mcq',
      question: 'Which testing type is wide and shallow?',
      options: [
        'Smoke Testing',
        'Sanity Testing',
        'Regression Testing',
        'Unit Testing'
      ],
      correctAnswer: 0,
      explanation: 'Smoke Testing is wide (covers many features) and shallow (basic functionality only).',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1
    },
    {
      id: 'q15',
      type: 'mcq',
      question: 'What is the main purpose of Regression Testing?',
      options: [
        'To test new features',
        'To verify bug fixes',
        'To ensure existing functionality still works after changes',
        'To test performance'
      ],
      correctAnswer: 2,
      explanation: 'Regression Testing ensures that existing functionality still works correctly after code changes.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1
    },

    // Section B: True/False (10 questions)
    {
      id: 'q16',
      type: 'truefalse',
      question: 'Testing can prove that software is defect-free.',
      correctAnswer: false,
      explanation: 'False. Testing can only show the presence of defects, not their absence. Exhaustive testing is impossible.',
      difficulty: 'easy',
      section: 'Testing Principles',
      points: 1
    },
    {
      id: 'q17',
      type: 'truefalse',
      question: 'The V-Model shows testing activities corresponding to each development phase.',
      correctAnswer: true,
      explanation: 'True. The V-Model explicitly shows how each development phase has a corresponding test level.',
      difficulty: 'easy',
      section: 'SDLC',
      points: 1
    },
    {
      id: 'q18',
      type: 'truefalse',
      question: 'White box testing requires knowledge of internal code structure.',
      correctAnswer: true,
      explanation: 'True. White box testing examines internal code structure, logic, and paths.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1
    },
    {
      id: 'q19',
      type: 'truefalse',
      question: 'Smoke testing should be performed before detailed testing.',
      correctAnswer: true,
      explanation: 'True. Smoke testing verifies basic functionality before investing time in detailed testing.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1
    },
    {
      id: 'q20',
      type: 'truefalse',
      question: 'A test case must always have expected results.',
      correctAnswer: true,
      explanation: 'True. Every test case must have expected results to compare against actual results.',
      difficulty: 'easy',
      section: 'Documentation',
      points: 1
    },
    {
      id: 'q21',
      type: 'truefalse',
      question: 'Severity and Priority always have the same value.',
      correctAnswer: false,
      explanation: 'False. Severity and Priority are independent. A critical bug affecting few users can have high severity but low priority.',
      difficulty: 'medium',
      section: 'Defect Management',
      points: 1
    },
    {
      id: 'q22',
      type: 'truefalse',
      question: 'Regression testing is only needed when bugs are fixed.',
      correctAnswer: false,
      explanation: 'False. Regression testing is needed whenever code changes, including new features, enhancements, or bug fixes.',
      difficulty: 'medium',
      section: 'Testing Types',
      points: 1
    },
    {
      id: 'q23',
      type: 'truefalse',
      question: 'Exploratory testing is completely unstructured.',
      correctAnswer: false,
      explanation: 'False. Exploratory testing is structured with charters, time-boxes, and session notes.',
      difficulty: 'medium',
      section: 'Testing Types',
      points: 1
    },
    {
      id: 'q24',
      type: 'truefalse',
      question: 'Entry criteria define when testing can start.',
      correctAnswer: true,
      explanation: 'True. Entry criteria are conditions that must be met before testing can begin.',
      difficulty: 'easy',
      section: 'STLC',
      points: 1
    },
    {
      id: 'q25',
      type: 'truefalse',
      question: 'Defect Density measures defects per unit size.',
      correctAnswer: true,
      explanation: 'True. Defect Density = (Total Defects / Size) × 1000, typically measured per KLOC.',
      difficulty: 'easy',
      section: 'Metrics',
      points: 1
    },

    // Section C: Scenario-Based (5 questions)
    {
      id: 'q26',
      type: 'mcq',
      question: 'You\'re testing a login form with password length 8-20 characters. Using 3-value BVA, which values would you test?',
      options: [
        '7, 8, 9, 19, 20, 21',
        '8, 14, 20',
        '7, 8, 20, 21',
        '1, 8, 20, 30'
      ],
      correctAnswer: 0,
      explanation: '3-value BVA tests: min-1 (7), min (8), min+1 (9), max-1 (19), max (20), max+1 (21).',
      difficulty: 'hard',
      section: 'Test Design',
      points: 1
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'A critical bug causes app crash but only affects 0.1% of users. What severity and priority?',
      options: [
        'Severity: Critical, Priority: P0',
        'Severity: Critical, Priority: P2',
        'Severity: Low, Priority: P3',
        'Severity: Medium, Priority: P1'
      ],
      correctAnswer: 1,
      explanation: 'Severity is Critical (app crashes), but Priority is P2 (affects very few users, not urgent).',
      difficulty: 'hard',
      section: 'Defect Management',
      points: 1
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'You executed 150 test cases: 120 passed, 20 failed, 10 blocked. What is the pass percentage?',
      options: [
        '80%',
        '85.7%',
        '75%',
        '90%'
      ],
      correctAnswer: 1,
      explanation: 'Pass % = (Passed / Executed) × 100 = (120 / 140) × 100 = 85.7% (blocked tests are not executed).',
      difficulty: 'medium',
      section: 'Metrics',
      points: 1
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'Testing found 85 defects before release, 15 found in production. What is the DRE?',
      options: [
        '85%',
        '15%',
        '100%',
        '70%'
      ],
      correctAnswer: 0,
      explanation: 'DRE = (85 / (85+15)) × 100 = 85%. This means 85% of defects were found before release.',
      difficulty: 'medium',
      section: 'Metrics',
      points: 1
    },
    {
      id: 'q30',
      type: 'mcq',
      question: 'Which test design technique is best for testing an insurance premium calculator with multiple conditions (age, accidents, car type)?',
      options: [
        'Boundary Value Analysis',
        'Equivalence Partitioning',
        'Decision Table',
        'State Transition'
      ],
      correctAnswer: 2,
      explanation: 'Decision Table is best for testing multiple condition combinations and business rules.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1
    },

    // FULL MODE ADDITIONAL QUESTIONS (Q31-Q100)
    // DAY 1: Manual Testing Fundamentals & SDLC (15 questions)
    
    {
      id: 'q31',
      type: 'mcq',
      question: 'Which is NOT one of the seven testing principles?',
      options: [
        'Testing shows presence of defects',
        'Exhaustive testing is impossible',
        'Testing can prove absence of defects',
        'Defect clustering'
      ],
      correctAnswer: 2,
      explanation: 'Testing can prove absence of defects is NOT a principle. Testing can only show presence of defects.',
      difficulty: 'medium',
      section: 'Testing Principles',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q32',
      type: 'mcq',
      question: 'What does the Pesticide Paradox state?',
      options: [
        'Tests become less effective if repeated without changes',
        'Defects cluster in certain modules',
        'Testing is context-dependent',
        'Early testing saves money'
      ],
      correctAnswer: 0,
      explanation: 'Pesticide Paradox: If same tests are repeated, they become less effective at finding new defects. Tests need to be reviewed and updated.',
      difficulty: 'medium',
      section: 'Testing Principles',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q33',
      type: 'mcq',
      question: 'In Waterfall model, when does testing begin?',
      options: [
        'After requirements',
        'After design',
        'After coding',
        'Throughout development'
      ],
      correctAnswer: 2,
      explanation: 'In Waterfall, testing begins after coding phase is complete. This is a sequential approach.',
      difficulty: 'easy',
      section: 'SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q34',
      type: 'mcq',
      question: 'Which SDLC model has the highest risk?',
      options: [
        'Waterfall',
        'Agile',
        'V-Model',
        'Spiral'
      ],
      correctAnswer: 0,
      explanation: 'Waterfall has highest risk as testing happens late, making defects expensive to fix.',
      difficulty: 'medium',
      section: 'SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q35',
      type: 'mcq',
      question: 'What is the main advantage of Agile methodology?',
      options: [
        'No documentation needed',
        'Flexibility to changing requirements',
        'Faster development',
        'Less testing required'
      ],
      correctAnswer: 1,
      explanation: 'Agile\'s main advantage is flexibility to adapt to changing requirements through iterative development.',
      difficulty: 'medium',
      section: 'SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q36',
      type: 'mcq',
      question: 'In STLC, what comes after Test Design?',
      options: [
        'Test Planning',
        'Test Execution',
        'Test Environment Setup',
        'Test Closure'
      ],
      correctAnswer: 2,
      explanation: 'STLC phases: Planning → Analysis → Design → Environment Setup → Execution → Closure.',
      difficulty: 'medium',
      section: 'STLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q37',
      type: 'mcq',
      question: 'What are Exit Criteria?',
      options: [
        'Conditions to start testing',
        'Conditions to end testing',
        'Test case pass criteria',
        'Bug closure criteria'
      ],
      correctAnswer: 1,
      explanation: 'Exit Criteria are conditions that must be met to end testing (e.g., all critical bugs fixed, 90% test coverage).',
      difficulty: 'easy',
      section: 'STLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q38',
      type: 'mcq',
      question: 'Which testing approach tests software without executing code?',
      options: [
        'Dynamic Testing',
        'Static Testing',
        'Black Box Testing',
        'White Box Testing'
      ],
      correctAnswer: 1,
      explanation: 'Static Testing examines code, documents, or requirements without executing the software (reviews, inspections).',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q39',
      type: 'mcq',
      question: 'What is the purpose of a Test Strategy?',
      options: [
        'List all test cases',
        'Define high-level testing approach',
        'Report test results',
        'Track defects'
      ],
      correctAnswer: 1,
      explanation: 'Test Strategy defines the high-level testing approach, scope, and objectives for the organization.',
      difficulty: 'medium',
      section: 'Documentation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q40',
      type: 'mcq',
      question: 'In V-Model, which testing level corresponds to High-Level Design?',
      options: [
        'Unit Testing',
        'Integration Testing',
        'System Testing',
        'Acceptance Testing'
      ],
      correctAnswer: 1,
      explanation: 'Integration Testing corresponds to High-Level Design in the V-Model.',
      difficulty: 'medium',
      section: 'SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q41',
      type: 'truefalse',
      question: 'Agile eliminates the need for test documentation.',
      correctAnswer: false,
      explanation: 'False. Agile values working software over comprehensive documentation, but documentation is still needed, just lighter.',
      difficulty: 'medium',
      section: 'SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q42',
      type: 'truefalse',
      question: 'STLC can start before SDLC completes.',
      correctAnswer: true,
      explanation: 'True. STLC can start during SDLC (e.g., test planning during requirements phase).',
      difficulty: 'medium',
      section: 'STLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q43',
      type: 'truefalse',
      question: 'Static testing can find defects in requirements.',
      correctAnswer: true,
      explanation: 'True. Static testing (reviews, inspections) can find defects in requirements, design documents, and code.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q44',
      type: 'truefalse',
      question: 'Waterfall model allows going back to previous phases easily.',
      correctAnswer: false,
      explanation: 'False. Waterfall is sequential and rigid. Going back to previous phases is difficult and expensive.',
      difficulty: 'easy',
      section: 'SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q45',
      type: 'truefalse',
      question: 'Test Planning should include risk assessment.',
      correctAnswer: true,
      explanation: 'True. Test Planning should identify and assess risks to prioritize testing efforts.',
      difficulty: 'easy',
      section: 'STLC',
      points: 1,
      fullModeOnly: true
    },

    // DAY 2: Testing Levels & Types (15 questions)
    {
      id: 'q46',
      type: 'mcq',
      question: 'Which testing level is performed by end users?',
      options: [
        'Unit Testing',
        'Integration Testing',
        'System Testing',
        'User Acceptance Testing'
      ],
      correctAnswer: 3,
      explanation: 'User Acceptance Testing (UAT) is performed by end users to validate the system meets their needs.',
      difficulty: 'easy',
      section: 'Testing Levels',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q47',
      type: 'mcq',
      question: 'What is the main focus of Integration Testing?',
      options: [
        'Individual components',
        'Interfaces between components',
        'Complete system',
        'User requirements'
      ],
      correctAnswer: 1,
      explanation: 'Integration Testing focuses on testing interfaces and interactions between integrated components.',
      difficulty: 'easy',
      section: 'Testing Levels',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q48',
      type: 'mcq',
      question: 'In Bottom-Up integration, what do we use instead of stubs?',
      options: [
        'Drivers',
        'Mocks',
        'Simulators',
        'Nothing'
      ],
      correctAnswer: 0,
      explanation: 'Bottom-Up integration uses drivers to call lower-level modules. Top-Down uses stubs.',
      difficulty: 'medium',
      section: 'Integration Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q49',
      type: 'mcq',
      question: 'Which testing type verifies non-functional requirements?',
      options: [
        'Functional Testing',
        'Performance Testing',
        'Unit Testing',
        'Integration Testing'
      ],
      correctAnswer: 1,
      explanation: 'Performance Testing verifies non-functional requirements like speed, scalability, and stability.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q50',
      type: 'mcq',
      question: 'What is the difference between Smoke and Sanity testing?',
      options: [
        'No difference',
        'Smoke is wide & shallow, Sanity is narrow & deep',
        'Smoke is narrow & deep, Sanity is wide & shallow',
        'Smoke is automated, Sanity is manual'
      ],
      correctAnswer: 1,
      explanation: 'Smoke testing is wide (many features) and shallow (basic checks). Sanity is narrow (specific area) and deep (detailed checks).',
      difficulty: 'hard',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q51',
      type: 'mcq',
      question: 'Which testing type checks if software works on different browsers?',
      options: [
        'Compatibility Testing',
        'Functional Testing',
        'Performance Testing',
        'Security Testing'
      ],
      correctAnswer: 0,
      explanation: 'Compatibility Testing verifies software works across different browsers, OS, devices, etc.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q52',
      type: 'mcq',
      question: 'What is Regression Testing?',
      options: [
        'Testing new features',
        'Testing to verify existing functionality after changes',
        'Testing performance degradation',
        'Testing backwards compatibility'
      ],
      correctAnswer: 1,
      explanation: 'Regression Testing verifies that existing functionality still works correctly after code changes.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q53',
      type: 'mcq',
      question: 'Which testing type is performed without test cases?',
      options: [
        'Scripted Testing',
        'Exploratory Testing',
        'Automated Testing',
        'Unit Testing'
      ],
      correctAnswer: 1,
      explanation: 'Exploratory Testing is performed without predefined test cases, combining learning and testing.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q54',
      type: 'mcq',
      question: 'What is Re-testing (Confirmation Testing)?',
      options: [
        'Testing entire application again',
        'Verifying a specific bug is fixed',
        'Regression testing',
        'Performance testing'
      ],
      correctAnswer: 1,
      explanation: 'Re-testing (Confirmation Testing) verifies that a specific defect has been fixed.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q55',
      type: 'mcq',
      question: 'Which integration approach tests all components together at once?',
      options: [
        'Top-Down',
        'Bottom-Up',
        'Big Bang',
        'Sandwich'
      ],
      correctAnswer: 2,
      explanation: 'Big Bang integration tests all components together at once without incremental integration.',
      difficulty: 'easy',
      section: 'Integration Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q56',
      type: 'truefalse',
      question: 'System Testing is performed in production environment.',
      correctAnswer: false,
      explanation: 'False. System Testing is performed in a test environment that simulates production.',
      difficulty: 'easy',
      section: 'Testing Levels',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q57',
      type: 'truefalse',
      question: 'Alpha testing is performed by end users at their location.',
      correctAnswer: false,
      explanation: 'False. Alpha testing is performed by internal staff at the developer\'s site. Beta testing is by end users at their location.',
      difficulty: 'medium',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q58',
      type: 'truefalse',
      question: 'Regression testing should be automated whenever possible.',
      correctAnswer: true,
      explanation: 'True. Regression tests are repetitive and ideal for automation to save time and ensure consistency.',
      difficulty: 'easy',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q59',
      type: 'truefalse',
      question: 'Sanity testing is a subset of Regression testing.',
      correctAnswer: true,
      explanation: 'True. Sanity testing is a narrow, focused subset of regression testing.',
      difficulty: 'medium',
      section: 'Testing Types',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q60',
      type: 'truefalse',
      question: 'UAT is the final testing level before production.',
      correctAnswer: true,
      explanation: 'True. User Acceptance Testing is typically the final testing level before production deployment.',
      difficulty: 'easy',
      section: 'Testing Levels',
      points: 1,
      fullModeOnly: true
    },

    // DAY 3: Test Design Techniques Part 1 (20 questions)
    {
      id: 'q61',
      type: 'mcq',
      question: 'Equivalence Partitioning is a _____ technique.',
      options: [
        'White Box',
        'Black Box',
        'Gray Box',
        'Experience-based'
      ],
      correctAnswer: 1,
      explanation: 'Equivalence Partitioning is a Black Box (specification-based) technique.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q62',
      type: 'mcq',
      question: 'For input range 1-100, how many valid partitions in EP?',
      options: [
        '1',
        '2',
        '3',
        '100'
      ],
      correctAnswer: 0,
      explanation: 'Equivalence Partitioning: 1 valid partition (1-100) and 2 invalid partitions (<1, >100).',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q63',
      type: 'mcq',
      question: 'What is the standard BVA approach?',
      options: [
        '2-value (min, max)',
        '3-value (min-1, min, min+1, max-1, max, max+1)',
        '5-value',
        'Test all values'
      ],
      correctAnswer: 1,
      explanation: 'Standard BVA uses 3-value approach: boundary, just inside, and just outside the boundary.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q64',
      type: 'mcq',
      question: 'Decision Table testing is best for:',
      options: [
        'Boundary conditions',
        'Multiple condition combinations',
        'State changes',
        'Code coverage'
      ],
      correctAnswer: 1,
      explanation: 'Decision Table testing is ideal for testing multiple condition combinations and business rules.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q65',
      type: 'mcq',
      question: 'How many test cases for 3 conditions (each True/False) in Decision Table?',
      options: [
        '3',
        '6',
        '8',
        '9'
      ],
      correctAnswer: 2,
      explanation: '2³ = 8 test cases for 3 binary conditions (all possible combinations).',
      difficulty: 'hard',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q66',
      type: 'mcq',
      question: 'State Transition testing focuses on:',
      options: [
        'Input boundaries',
        'Valid and invalid state changes',
        'Code paths',
        'User interface'
      ],
      correctAnswer: 1,
      explanation: 'State Transition testing focuses on testing valid and invalid state changes in the system.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q67',
      type: 'mcq',
      question: 'For a traffic light (Red → Green → Yellow → Red), how many valid transitions?',
      options: [
        '2',
        '3',
        '4',
        '6'
      ],
      correctAnswer: 1,
      explanation: '3 valid transitions: Red→Green, Green→Yellow, Yellow→Red.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q68',
      type: 'mcq',
      question: 'Which technique tests all possible combinations?',
      options: [
        'Equivalence Partitioning',
        'Pairwise Testing',
        'All-Pairs Testing',
        'Exhaustive Testing'
      ],
      correctAnswer: 3,
      explanation: 'Exhaustive Testing tests all possible combinations, but is usually impractical.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q69',
      type: 'mcq',
      question: 'What is the main benefit of Equivalence Partitioning?',
      options: [
        'Finds more defects',
        'Reduces number of test cases',
        'Tests boundaries',
        'Tests all combinations'
      ],
      correctAnswer: 1,
      explanation: 'EP reduces the number of test cases by grouping similar inputs into partitions.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q70',
      type: 'mcq',
      question: 'In Decision Table, what are "Don\'t Care" conditions?',
      options: [
        'Conditions that don\'t matter for outcome',
        'Conditions to ignore',
        'Invalid conditions',
        'Optional conditions'
      ],
      correctAnswer: 0,
      explanation: '"Don\'t Care" conditions are those that don\'t affect the outcome for a particular rule.',
      difficulty: 'hard',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q71',
      type: 'mcq',
      question: 'For password field 8-16 characters, how many boundary values to test?',
      options: [
        '2',
        '4',
        '6',
        '8'
      ],
      correctAnswer: 2,
      explanation: '6 boundary values: 7, 8, 9 (min boundary) and 15, 16, 17 (max boundary).',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q72',
      type: 'mcq',
      question: 'Which technique is best for testing a vending machine?',
      options: [
        'Equivalence Partitioning',
        'Boundary Value Analysis',
        'State Transition',
        'Decision Table'
      ],
      correctAnswer: 2,
      explanation: 'State Transition is best for systems with different states like a vending machine.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q73',
      type: 'truefalse',
      question: 'BVA tests values at the edges of equivalence partitions.',
      correctAnswer: true,
      explanation: 'True. BVA focuses on testing boundary values at the edges of equivalence partitions.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q74',
      type: 'truefalse',
      question: 'Decision Tables can handle "Don\'t Care" conditions.',
      correctAnswer: true,
      explanation: 'True. Decision Tables can use "Don\'t Care" (dash) to indicate conditions that don\'t affect the outcome.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q75',
      type: 'truefalse',
      question: 'State Transition testing requires a state diagram.',
      correctAnswer: true,
      explanation: 'True. State Transition testing typically uses a state diagram to identify valid and invalid transitions.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q76',
      type: 'truefalse',
      question: 'EP and BVA can be used together.',
      correctAnswer: true,
      explanation: 'True. EP and BVA are often used together - EP identifies partitions, BVA tests their boundaries.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q77',
      type: 'truefalse',
      question: 'Decision Table testing guarantees 100% coverage.',
      correctAnswer: false,
      explanation: 'False. Decision Table tests condition combinations but doesn\'t guarantee 100% coverage of all scenarios.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q78',
      type: 'shortanswer',
      question: 'Design test cases using EP for a discount field: 0-10% (no discount), 11-25% (silver), 26-50% (gold), 51%+ (invalid).',
      acceptableAnswers: [
        'Valid: 5%, 18%, 38%; Invalid: -1%, 55%',
        'No discount: 5%, Silver: 18%, Gold: 38%, Invalid: -1%, 55%',
        '5, 18, 38, -1, 55'
      ],
      keywords: ['5', '18', '38', '-1', '55', 'valid', 'invalid'],
      explanation: 'EP test cases: No discount (5%), Silver (18%), Gold (38%), Invalid below (−1%), Invalid above (55%).',
      difficulty: 'hard',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q79',
      type: 'shortanswer',
      question: 'Create a Decision Table for login: Username (valid/invalid), Password (valid/invalid), Captcha (valid/invalid). How many test cases?',
      acceptableAnswers: ['8', '8 test cases', 'eight'],
      keywords: ['8', 'eight', '2^3'],
      explanation: '2³ = 8 test cases for 3 binary conditions (all combinations of valid/invalid).',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q80',
      type: 'shortanswer',
      question: 'Draw state transitions for an ATM: Idle → Card Inserted → PIN Entry → Transaction → Idle. Identify 2 invalid transitions.',
      acceptableAnswers: [
        'Idle to Transaction, PIN Entry to Idle without card removal',
        'Idle→Transaction, Card Inserted→Transaction',
        'Direct to Transaction, Skip PIN Entry'
      ],
      keywords: ['idle', 'transaction', 'pin', 'skip', 'direct'],
      explanation: 'Invalid transitions: Idle→Transaction (skipping card/PIN), PIN Entry→Idle (without proper card removal).',
      difficulty: 'hard',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },

    // DAY 4: Test Design Techniques Part 2 (15 questions)
    {
      id: 'q81',
      type: 'mcq',
      question: 'Use Case Testing is based on:',
      options: [
        'Code structure',
        'User scenarios',
        'Boundaries',
        'State changes'
      ],
      correctAnswer: 1,
      explanation: 'Use Case Testing is based on user scenarios and how users interact with the system.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q82',
      type: 'mcq',
      question: 'What is the main component of a Use Case?',
      options: [
        'Preconditions, Steps, Postconditions',
        'Input, Output',
        'Conditions, Actions',
        'States, Transitions'
      ],
      correctAnswer: 0,
      explanation: 'Use Case components: Preconditions (setup), Steps (actions), Postconditions (expected outcome).',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q83',
      type: 'mcq',
      question: 'Error Guessing is based on:',
      options: [
        'Formal techniques',
        'Tester\'s experience',
        'Code analysis',
        'Requirements'
      ],
      correctAnswer: 1,
      explanation: 'Error Guessing is an experience-based technique relying on tester\'s intuition and past experience.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q84',
      type: 'mcq',
      question: 'Which is a White Box testing technique?',
      options: [
        'Equivalence Partitioning',
        'Statement Coverage',
        'Use Case Testing',
        'Error Guessing'
      ],
      correctAnswer: 1,
      explanation: 'Statement Coverage is a White Box technique that examines code structure.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q85',
      type: 'mcq',
      question: 'What does 100% Statement Coverage mean?',
      options: [
        'All statements executed at least once',
        'All branches tested',
        'All paths tested',
        'All conditions tested'
      ],
      correctAnswer: 0,
      explanation: '100% Statement Coverage means every executable statement in the code has been executed at least once.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q86',
      type: 'mcq',
      question: 'Decision Coverage is also known as:',
      options: [
        'Statement Coverage',
        'Branch Coverage',
        'Path Coverage',
        'Condition Coverage'
      ],
      correctAnswer: 1,
      explanation: 'Decision Coverage is also known as Branch Coverage - tests all decision outcomes (true/false).',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q87',
      type: 'mcq',
      question: 'Which coverage is strongest?',
      options: [
        'Statement Coverage',
        'Decision Coverage',
        'Path Coverage',
        'All are equal'
      ],
      correctAnswer: 2,
      explanation: 'Path Coverage is strongest: Path > Decision > Statement. Path coverage tests all possible paths through code.',
      difficulty: 'hard',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q88',
      type: 'mcq',
      question: 'Exploratory Testing is:',
      options: [
        'Random testing',
        'Structured learning and testing simultaneously',
        'Automated testing',
        'Performance testing'
      ],
      correctAnswer: 1,
      explanation: 'Exploratory Testing combines simultaneous learning, test design, and execution in a structured way.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q89',
      type: 'mcq',
      question: 'What is a Test Charter in Exploratory Testing?',
      options: [
        'Test case document',
        'Mission statement for testing session',
        'Bug report',
        'Test plan'
      ],
      correctAnswer: 1,
      explanation: 'Test Charter is a mission statement defining the scope and objectives of an exploratory testing session.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q90',
      type: 'mcq',
      question: 'Which technique would you use to test a complex workflow?',
      options: [
        'Boundary Value Analysis',
        'Use Case Testing',
        'Statement Coverage',
        'Equivalence Partitioning'
      ],
      correctAnswer: 1,
      explanation: 'Use Case Testing is best for testing complex workflows and user scenarios.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q91',
      type: 'truefalse',
      question: '100% Decision Coverage guarantees 100% Statement Coverage.',
      correctAnswer: true,
      explanation: 'True. Decision coverage subsumes statement coverage. 100% decision coverage ensures 100% statement coverage.',
      difficulty: 'hard',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q92',
      type: 'truefalse',
      question: 'Error Guessing is a formal test design technique.',
      correctAnswer: false,
      explanation: 'False. Error Guessing is an informal, experience-based technique, not a formal technique.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q93',
      type: 'truefalse',
      question: 'White Box testing requires access to source code.',
      correctAnswer: true,
      explanation: 'True. White Box testing examines internal code structure and requires access to source code.',
      difficulty: 'easy',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q94',
      type: 'truefalse',
      question: 'Exploratory testing doesn\'t require any planning.',
      correctAnswer: false,
      explanation: 'False. Exploratory testing requires planning through test charters and session objectives.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q95',
      type: 'truefalse',
      question: 'Use Case testing focuses on happy path only.',
      correctAnswer: false,
      explanation: 'False. Use Case testing includes both main flow (happy path) and alternative/exception flows.',
      difficulty: 'medium',
      section: 'Test Design',
      points: 1,
      fullModeOnly: true
    },

    // DAY 5: Test Documentation & Artifacts (20 questions) - Continuing from Q96
    {
      id: 'q96',
      type: 'mcq',
      question: 'Which document is created first in testing?',
      options: [
        'Test Case',
        'Test Plan',
        'Test Report',
        'RTM'
      ],
      correctAnswer: 1,
      explanation: 'Test Plan is created first, defining the overall testing approach before other documents.',
      difficulty: 'easy',
      section: 'Documentation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q97',
      type: 'mcq',
      question: 'What should a Test Plan include?',
      options: [
        'Only test cases',
        'Scope, approach, resources, schedule',
        'Only defects',
        'Only test results'
      ],
      correctAnswer: 1,
      explanation: 'Test Plan includes scope, approach, resources, schedule, entry/exit criteria, and risks.',
      difficulty: 'medium',
      section: 'Documentation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q98',
      type: 'mcq',
      question: 'What is the purpose of RTM?',
      options: [
        'Track defects',
        'Map requirements to test cases',
        'Report test results',
        'Plan testing'
      ],
      correctAnswer: 1,
      explanation: 'RTM (Requirements Traceability Matrix) maps requirements to test cases ensuring complete coverage.',
      difficulty: 'easy',
      section: 'Documentation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q99',
      type: 'mcq',
      question: 'A good test case should have:',
      options: [
        'Test ID, Description, Steps, Expected Result',
        'Only steps',
        'Only expected result',
        'Only test ID'
      ],
      correctAnswer: 0,
      explanation: 'A complete test case includes: Test ID, Description, Preconditions, Steps, Expected Result, Actual Result.',
      difficulty: 'easy',
      section: 'Documentation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q100',
      type: 'mcq',
      question: 'What is a Test Scenario?',
      options: [
        'Same as test case',
        'High-level functionality to test',
        'Bug report',
        'Test environment'
      ],
      correctAnswer: 1,
      explanation: 'Test Scenario is a high-level description of functionality to test. Multiple test cases can be derived from one scenario.',
      difficulty: 'medium',
      section: 'Documentation',
      points: 1,
      fullModeOnly: true
    }
  ]
};
