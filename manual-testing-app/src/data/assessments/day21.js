export const day21Assessment = {
  id: 'day21',
  title: 'Day 21: Final Comprehensive Review & ISTQB Preparation',
  description: '100-Question Master Test - Complete Course Assessment covering all 21 days of Manual Testing',
  
  passingScore: 70,
  
  quickMode: {
    timeLimit: 60,
    questions: 40
  },
  
  fullMode: {
    timeLimit: 150,
    questions: 100
  },

  questions: [
    // WEEK 1: Testing Fundamentals (Q1-Q15 in Quick Mode)
    
    {
      id: 'q1',
      type: 'mcq',
      question: 'Which of the following is one of the seven testing principles?',
      options: [
        'Testing can prove the absence of defects',
        'Exhaustive testing is possible with sufficient resources',
        'Early testing saves time and money',
        'Testing is the same in all contexts'
      ],
      correctAnswer: 2,
      explanation: 'Early testing is one of the seven ISTQB testing principles. It helps find defects when they are cheaper to fix.',
      difficulty: 'easy',
      section: 'Week 1 - Fundamentals',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'What is the primary objective of software testing?',
      options: [
        'To prove that the software works correctly',
        'To find as many defects as possible',
        'To provide information about the quality of the software',
        'To meet the testing budget'
      ],
      correctAnswer: 2,
      explanation: 'The primary objective is to provide information about quality to enable informed decisions, not just to find defects.',
      difficulty: 'medium',
      section: 'Week 1 - Fundamentals',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'Which test level focuses on testing interactions between components?',
      options: [
        'Unit testing',
        'Integration testing',
        'System testing',
        'Acceptance testing'
      ],
      correctAnswer: 1,
      explanation: 'Integration testing focuses on testing interactions and interfaces between integrated components or systems.',
      difficulty: 'easy',
      section: 'Week 1 - Test Levels',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'In the V-Model, which development phase corresponds to acceptance testing?',
      options: [
        'Requirements specification',
        'High-level design',
        'Low-level design',
        'Coding'
      ],
      correctAnswer: 0,
      explanation: 'Acceptance testing corresponds to requirements specification in the V-Model.',
      difficulty: 'medium',
      section: 'Week 1 - SDLC',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'An age input field accepts values from 18 to 65. Using boundary value analysis, which values should be tested?',
      options: [
        '18, 30, 65',
        '17, 18, 65, 66',
        '17, 18, 19, 64, 65, 66',
        '1, 18, 40, 65, 99'
      ],
      correctAnswer: 2,
      explanation: 'BVA tests boundaries and values just inside/outside: 17 (invalid), 18 (min valid), 19 (min+1), 64 (max-1), 65 (max valid), 66 (invalid).',
      difficulty: 'hard',
      section: 'Week 1 - Test Design',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'Which test design technique is specification-based (black-box)?',
      options: [
        'Statement coverage',
        'Decision coverage',
        'Equivalence partitioning',
        'Path coverage'
      ],
      correctAnswer: 2,
      explanation: 'Equivalence Partitioning is a black-box technique based on specifications, not code structure.',
      difficulty: 'easy',
      section: 'Week 1 - Test Design',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'What is the relationship between decision coverage and statement coverage?',
      options: [
        'They are the same',
        'Statement coverage subsumes decision coverage',
        'Decision coverage subsumes statement coverage',
        'They are independent'
      ],
      correctAnswer: 2,
      explanation: '100% decision coverage guarantees 100% statement coverage, but not vice versa. Decision coverage is stronger.',
      difficulty: 'hard',
      section: 'Week 1 - Test Design',
      points: 1
    },
    {
      id: 'q8',
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
      section: 'Week 1 - Documentation',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'Which bug state comes after "FIXED"?',
      options: [
        'CLOSED',
        'VERIFIED',
        'RETEST',
        'REOPENED'
      ],
      correctAnswer: 2,
      explanation: 'After FIXED, the bug goes to RETEST for verification. If verified, it moves to CLOSED.',
      difficulty: 'medium',
      section: 'Week 1 - Defect Management',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'What is the formula for Defect Removal Efficiency (DRE)?',
      options: [
        '(Total Defects / Size) × 100',
        '(Defects in Production / Total Defects) × 100',
        '(Defects Found Before Release / Total Defects) × 100',
        '(Rejected Defects / Total Defects) × 100'
      ],
      correctAnswer: 2,
      explanation: 'DRE = (Defects Found Before Release / Total Defects) × 100%. Measures testing effectiveness.',
      difficulty: 'medium',
      section: 'Week 1 - Metrics',
      points: 1
    },
    {
      id: 'q11',
      type: 'mcq',
      question: 'What is the difference between priority and severity?',
      options: [
        'No difference, they are the same',
        'Priority is business urgency, severity is technical impact',
        'Priority is technical impact, severity is business urgency',
        'Priority is for developers, severity is for testers'
      ],
      correctAnswer: 1,
      explanation: 'Priority = business urgency (when to fix), Severity = technical impact (how bad the defect is).',
      difficulty: 'medium',
      section: 'Week 1 - Defect Management',
      points: 1
    },
    {
      id: 'q12',
      type: 'mcq',
      question: 'What is regression testing?',
      options: [
        'Testing that requirements are met',
        'Testing to verify a bug is fixed',
        'Testing to ensure changes didn\'t break existing functionality',
        'Testing performance degradation'
      ],
      correctAnswer: 2,
      explanation: 'Regression testing ensures that new changes haven\'t broken existing functionality.',
      difficulty: 'easy',
      section: 'Week 2 - Regression',
      points: 1
    },
    {
      id: 'q13',
      type: 'mcq',
      question: 'What is confirmation testing (re-testing)?',
      options: [
        'Confirming requirements with customer',
        'Verifying a specific bug is fixed',
        'Regression testing',
        'User acceptance testing'
      ],
      correctAnswer: 1,
      explanation: 'Confirmation testing (re-testing) verifies that a specific defect has been fixed.',
      difficulty: 'easy',
      section: 'Week 2 - Testing Types',
      points: 1
    },
    {
      id: 'q14',
      type: 'mcq',
      question: 'Which testing type focuses on testing at boundaries?',
      options: [
        'Exploratory Testing',
        'Boundary Value Analysis',
        'Error Guessing',
        'Use Case Testing'
      ],
      correctAnswer: 1,
      explanation: 'Boundary Value Analysis specifically tests values at boundaries and just inside/outside boundaries.',
      difficulty: 'easy',
      section: 'Week 1 - Test Design',
      points: 1
    },
    {
      id: 'q15',
      type: 'mcq',
      question: 'What is static testing?',
      options: [
        'Testing without executing the code',
        'Testing with static data only',
        'Testing that doesn\'t change',
        'Testing in a static environment'
      ],
      correctAnswer: 0,
      explanation: 'Static testing examines code, documents, or requirements without executing the software (reviews, inspections, static analysis).',
      difficulty: 'easy',
      section: 'Week 1 - Testing Types',
      points: 1
    },

    // WEEK 2: Advanced Testing (Q16-Q30 in Quick Mode)
    {
      id: 'q16',
      type: 'mcq',
      question: 'Which OWASP Top 10 (2021) vulnerability is ranked #1?',
      options: [
        'Injection',
        'Broken Access Control',
        'XSS',
        'CSRF'
      ],
      correctAnswer: 1,
      explanation: 'Broken Access Control is #1 in OWASP Top 10 (2021), moved up from #5 in 2017.',
      difficulty: 'medium',
      section: 'Week 2 - Security',
      points: 1
    },
    {
      id: 'q17',
      type: 'mcq',
      question: 'What does XSS stand for?',
      options: [
        'Cross-Site Scripting',
        'Extra Security System',
        'External Site Security',
        'Cross-System Scripting'
      ],
      correctAnswer: 0,
      explanation: 'XSS stands for Cross-Site Scripting, a vulnerability where malicious scripts are injected into web pages.',
      difficulty: 'easy',
      section: 'Week 2 - Security',
      points: 1
    },
    {
      id: 'q18',
      type: 'mcq',
      question: 'Which HTTP status code indicates "Not Found"?',
      options: [
        '200',
        '400',
        '404',
        '500'
      ],
      correctAnswer: 2,
      explanation: '404 indicates "Not Found". 200 = OK, 400 = Bad Request, 500 = Internal Server Error.',
      difficulty: 'easy',
      section: 'Week 2 - Web Testing',
      points: 1
    },
    {
      id: 'q19',
      type: 'mcq',
      question: 'What is the WCAG 2.1 Level AA minimum color contrast ratio for normal text?',
      options: [
        '3:1',
        '4.5:1',
        '7:1',
        '10:1'
      ],
      correctAnswer: 1,
      explanation: 'WCAG 2.1 Level AA requires 4.5:1 contrast ratio for normal text, 3:1 for large text.',
      difficulty: 'medium',
      section: 'Week 2 - Accessibility',
      points: 1
    },
    {
      id: 'q20',
      type: 'mcq',
      question: 'Which mobile app type has the best performance?',
      options: [
        'Web app',
        'Hybrid app',
        'Native app',
        'All have equal performance'
      ],
      correctAnswer: 2,
      explanation: 'Native apps have best performance as they\'re compiled for specific platforms and have direct access to device features.',
      difficulty: 'easy',
      section: 'Week 2 - Mobile',
      points: 1
    },
    {
      id: 'q21',
      type: 'mcq',
      question: 'What does RTL stand for in localization testing?',
      options: [
        'Real-Time Loading',
        'Right-to-Left',
        'Ready to Launch',
        'Return to Login'
      ],
      correctAnswer: 1,
      explanation: 'RTL stands for Right-to-Left languages like Arabic and Hebrew.',
      difficulty: 'easy',
      section: 'Week 2 - Localization',
      points: 1
    },
    {
      id: 'q22',
      type: 'mcq',
      question: 'What does i18n stand for?',
      options: [
        'Internet 18 Nations',
        'Internationalization',
        'Integration 18',
        'Information 18 Network'
      ],
      correctAnswer: 1,
      explanation: 'i18n = Internationalization (i + 18 letters + n). Designing software to support multiple languages/regions.',
      difficulty: 'medium',
      section: 'Week 2 - Localization',
      points: 1
    },
    {
      id: 'q23',
      type: 'mcq',
      question: 'In the Test Automation Pyramid, what percentage should be unit tests?',
      options: [
        '10%',
        '30%',
        '60%',
        '100%'
      ],
      correctAnswer: 2,
      explanation: 'Test Automation Pyramid: 60% unit tests (fast, many), 30% integration, 10% UI (slow, few).',
      difficulty: 'medium',
      section: 'Week 2 - Automation',
      points: 1
    },
    {
      id: 'q24',
      type: 'mcq',
      question: 'Which regression testing type uses ALL test cases?',
      options: [
        'Selective Regression',
        'Corrective Regression',
        'Retest-All Regression',
        'Progressive Regression'
      ],
      correctAnswer: 2,
      explanation: 'Retest-All regression executes all test cases in the suite, regardless of changes made.',
      difficulty: 'easy',
      section: 'Week 2 - Regression',
      points: 1
    },
    {
      id: 'q25',
      type: 'mcq',
      question: 'What is the recommended duration for an SBTM testing session?',
      options: [
        '30 minutes',
        '60 minutes',
        '90 minutes',
        '120 minutes'
      ],
      correctAnswer: 2,
      explanation: 'Session-Based Test Management (SBTM) recommends 90-minute uninterrupted testing sessions.',
      difficulty: 'medium',
      section: 'Week 2 - Exploratory',
      points: 1
    },
    {
      id: 'q26',
      type: 'mcq',
      question: 'In the TBS model for SBTM, what is the ideal percentage for "Test" time?',
      options: [
        '40-50%',
        '60-70%',
        '70-80%',
        '90-100%'
      ],
      correctAnswer: 2,
      explanation: 'TBS (Test, Bug, Setup) model: 70-80% Test time, 10-20% Bug investigation, 10% Setup.',
      difficulty: 'hard',
      section: 'Week 2 - Exploratory',
      points: 1
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'Which testing tour focuses on testing each feature in isolation?',
      options: [
        'Complexity Tour',
        'Feature Tour',
        'Scenario Tour',
        'User Tour'
      ],
      correctAnswer: 1,
      explanation: 'Feature Tour tests each feature individually in isolation.',
      difficulty: 'medium',
      section: 'Week 2 - Exploratory',
      points: 1
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'What does FCC CUTS VIDS represent?',
      options: [
        'Testing tools',
        '11 Testing Tours',
        'Bug severity levels',
        'Test metrics'
      ],
      correctAnswer: 1,
      explanation: 'FCC CUTS VIDS is a mnemonic for 11 testing tours in exploratory testing.',
      difficulty: 'hard',
      section: 'Week 2 - Exploratory',
      points: 1
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'What is Defect Density?',
      options: [
        'Number of defects',
        'Defects per unit size (KLOC)',
        'Defect severity',
        'Defect priority'
      ],
      correctAnswer: 1,
      explanation: 'Defect Density = (Total Defects / Lines of Code) × 1000. Normalizes defects per 1000 LOC.',
      difficulty: 'medium',
      section: 'Week 2 - Metrics',
      points: 1
    },
    {
      id: 'q30',
      type: 'mcq',
      question: 'Smoke testing is:',
      options: [
        'Deep and narrow',
        'Wide and shallow',
        'Deep and wide',
        'Narrow and shallow'
      ],
      correctAnswer: 1,
      explanation: 'Smoke testing is wide (covers many features) and shallow (basic functionality only).',
      difficulty: 'easy',
      section: 'Week 2 - Testing Types',
      points: 1
    },

    // WEEK 3: Professional Skills (Q31-Q40 in Quick Mode)
    {
      id: 'q31',
      type: 'mcq',
      question: 'In Agile Testing Quadrants, which quadrant contains unit tests?',
      options: [
        'Q1 (Technology-facing, Supporting Team)',
        'Q2 (Business-facing, Supporting Team)',
        'Q3 (Business-facing, Critique Product)',
        'Q4 (Technology-facing, Critique Product)'
      ],
      correctAnswer: 0,
      explanation: 'Q1 contains unit tests, component tests - technology-facing tests that support the team.',
      difficulty: 'medium',
      section: 'Week 3 - Agile',
      points: 1
    },
    {
      id: 'q32',
      type: 'mcq',
      question: 'What is the format of a user story?',
      options: [
        'As a [role], I want [feature], So that [benefit]',
        'Given [context], When [action], Then [outcome]',
        'Test [feature], Verify [result], Report [status]',
        'User [name], Needs [feature], Because [reason]'
      ],
      correctAnswer: 0,
      explanation: 'User story format: "As a [role], I want [feature], So that [benefit]" focuses on user value.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1
    },
    {
      id: 'q33',
      type: 'mcq',
      question: 'What does INVEST criteria stand for in user stories?',
      options: [
        'Independent, Negotiable, Valuable, Estimable, Small, Testable',
        'Integrated, New, Verified, Estimated, Secure, Tested',
        'Important, Necessary, Verified, Essential, Simple, Timely',
        'Innovative, Negotiable, Verified, Efficient, Secure, Testable'
      ],
      correctAnswer: 0,
      explanation: 'INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable - criteria for good user stories.',
      difficulty: 'medium',
      section: 'Week 3 - Agile',
      points: 1
    },
    {
      id: 'q34',
      type: 'mcq',
      question: 'What is the Definition of Done (DoD)?',
      options: [
        'When code is written',
        'When testing is complete',
        'Checklist of criteria for story completion',
        'When product owner approves'
      ],
      correctAnswer: 2,
      explanation: 'DoD is a checklist of criteria that must be met for a story to be considered complete.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1
    },
    {
      id: 'q35',
      type: 'mcq',
      question: 'How long is a typical Daily Standup in Scrum?',
      options: [
        '5 minutes',
        '15 minutes',
        '30 minutes',
        '60 minutes'
      ],
      correctAnswer: 1,
      explanation: 'Daily Standup is strictly time-boxed to 15 minutes.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1
    },
    {
      id: 'q36',
      type: 'mcq',
      question: 'What is a Sprint in Scrum?',
      options: [
        'Fast development',
        'Time-boxed iteration (1-4 weeks)',
        'Quick testing',
        'Emergency fix'
      ],
      correctAnswer: 1,
      explanation: 'A Sprint is a time-boxed iteration of 1-4 weeks (typically 2 weeks) in Scrum.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1
    },
    {
      id: 'q37',
      type: 'mcq',
      question: 'What does ISTQB stand for?',
      options: [
        'International Software Testing Quality Board',
        'International Software Testing Qualifications Board',
        'International System Testing Quality Board',
        'International Standards Testing Board'
      ],
      correctAnswer: 1,
      explanation: 'ISTQB = International Software Testing Qualifications Board.',
      difficulty: 'easy',
      section: 'Week 3 - Certification',
      points: 1
    },
    {
      id: 'q38',
      type: 'mcq',
      question: 'How many questions are in the ISTQB Foundation Level exam?',
      options: [
        '30 questions',
        '40 questions',
        '50 questions',
        '60 questions'
      ],
      correctAnswer: 1,
      explanation: 'ISTQB Foundation Level exam has 40 multiple choice questions.',
      difficulty: 'easy',
      section: 'Week 3 - Certification',
      points: 1
    },
    {
      id: 'q39',
      type: 'mcq',
      question: 'What is the passing score for ISTQB Foundation Level?',
      options: [
        '60%',
        '65%',
        '70%',
        '75%'
      ],
      correctAnswer: 1,
      explanation: 'ISTQB Foundation Level requires 65% to pass (26 out of 40 questions correct).',
      difficulty: 'easy',
      section: 'Week 3 - Certification',
      points: 1
    },
    {
      id: 'q40',
      type: 'mcq',
      question: 'Which ISO standard is for software testing?',
      options: [
        'ISO 9001',
        'ISO 27001',
        'ISO/IEC 29119',
        'ISO 14001'
      ],
      correctAnswer: 2,
      explanation: 'ISO/IEC 29119 is the international standard for software testing.',
      difficulty: 'medium',
      section: 'Week 3 - Standards',
      points: 1
    },

    // FULL MODE ADDITIONAL QUESTIONS (Q41-Q100)
    // Week 1 Additional (Q41-Q55)
    
    {
      id: 'q41',
      type: 'mcq',
      question: 'Which is NOT one of the seven testing principles?',
      options: [
        'Testing shows presence of defects',
        'Exhaustive testing is impossible',
        'Testing can prove absence of defects',
        'Defect clustering'
      ],
      correctAnswer: 2,
      explanation: 'Testing can prove absence of defects is NOT a principle. Testing can only show presence of defects, not absence.',
      difficulty: 'medium',
      section: 'Week 1 - Fundamentals',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q42',
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
      section: 'Week 1 - Fundamentals',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q43',
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
      section: 'Week 1 - SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q44',
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
      section: 'Week 1 - SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q45',
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
      section: 'Week 1 - STLC',
      points: 1,
      fullModeOnly: true
    },
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
      section: 'Week 1 - Test Levels',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q47',
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
      section: 'Week 1 - Integration',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q48',
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
      section: 'Week 1 - Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q49',
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
      section: 'Week 1 - Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q50',
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
      section: 'Week 1 - Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q51',
      type: 'truefalse',
      question: 'The V-Model shows testing activities corresponding to each development phase.',
      correctAnswer: true,
      explanation: 'True. The V-Model explicitly shows how each development phase has a corresponding test level.',
      difficulty: 'easy',
      section: 'Week 1 - SDLC',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q52',
      type: 'truefalse',
      question: 'White box testing requires knowledge of internal code structure.',
      correctAnswer: true,
      explanation: 'True. White box testing examines internal code structure, logic, and paths.',
      difficulty: 'easy',
      section: 'Week 1 - Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q53',
      type: 'truefalse',
      question: '100% Decision Coverage guarantees 100% Statement Coverage.',
      correctAnswer: true,
      explanation: 'True. Decision coverage subsumes statement coverage. 100% decision coverage ensures 100% statement coverage.',
      difficulty: 'medium',
      section: 'Week 1 - Test Design',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q54',
      type: 'truefalse',
      question: 'Test cases should be written before test execution.',
      correctAnswer: true,
      explanation: 'True. Test cases should be designed and documented before execution for proper planning and traceability.',
      difficulty: 'easy',
      section: 'Week 1 - Documentation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q55',
      type: 'truefalse',
      question: 'All bugs must be fixed before release.',
      correctAnswer: false,
      explanation: 'False. Not all bugs need to be fixed. Low priority/severity bugs may be deferred based on business decisions.',
      difficulty: 'medium',
      section: 'Week 1 - Defect Management',
      points: 1,
      fullModeOnly: true
    },

    // Week 2 Additional (Q56-Q75)
    {
      id: 'q56',
      type: 'mcq',
      question: 'What is the purpose of browser DevTools?',
      options: [
        'Write code',
        'Debug and inspect web pages',
        'Design UI',
        'Manage databases'
      ],
      correctAnswer: 1,
      explanation: 'Browser DevTools are used to debug and inspect web pages, including HTML, CSS, JavaScript, and network activity.',
      difficulty: 'easy',
      section: 'Week 2 - Web Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q57',
      type: 'mcq',
      question: 'Which breakpoint represents tablets?',
      options: [
        '320px',
        '768px',
        '1024px',
        '1920px'
      ],
      correctAnswer: 1,
      explanation: 'Common breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop), 1920px (large desktop).',
      difficulty: 'medium',
      section: 'Week 2 - Responsive',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q58',
      type: 'mcq',
      question: 'What is the #1 vulnerability in OWASP Top 10 (2021)?',
      options: [
        'Injection',
        'Broken Access Control',
        'XSS',
        'CSRF'
      ],
      correctAnswer: 1,
      explanation: 'Broken Access Control is #1 in OWASP Top 10 (2021).',
      difficulty: 'medium',
      section: 'Week 2 - Security',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q59',
      type: 'mcq',
      question: 'What does CSRF stand for?',
      options: [
        'Cross-Site Request Forgery',
        'Client-Side Request Failure',
        'Cross-System Resource Failure',
        'Client-Server Request Format'
      ],
      correctAnswer: 0,
      explanation: 'CSRF = Cross-Site Request Forgery, an attack that forces users to execute unwanted actions.',
      difficulty: 'medium',
      section: 'Week 2 - Security',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q60',
      type: 'mcq',
      question: 'What is TTFB in performance testing?',
      options: [
        'Time To First Byte',
        'Total Time For Buffer',
        'Test Time For Backend',
        'Time To Final Build'
      ],
      correctAnswer: 0,
      explanation: 'TTFB = Time To First Byte, measures server response time.',
      difficulty: 'medium',
      section: 'Week 2 - Performance',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q61',
      type: 'mcq',
      question: 'What is LCP?',
      options: [
        'Largest Contentful Paint',
        'Load Complete Process',
        'Last Content Painted',
        'Loading Cache Performance'
      ],
      correctAnswer: 0,
      explanation: 'LCP = Largest Contentful Paint, a Core Web Vital measuring loading performance.',
      difficulty: 'medium',
      section: 'Week 2 - Performance',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q62',
      type: 'mcq',
      question: 'What is REST API?',
      options: [
        'Representational State Transfer',
        'Remote System Testing',
        'Request State Transfer',
        'Resource System Test'
      ],
      correctAnswer: 0,
      explanation: 'REST = Representational State Transfer, an architectural style for web services.',
      difficulty: 'easy',
      section: 'Week 2 - API Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q63',
      type: 'mcq',
      question: 'What is the main difference between Native and Hybrid apps?',
      options: [
        'Performance',
        'Development cost',
        'Device feature access',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'Native vs Hybrid differs in performance, cost, and device feature access.',
      difficulty: 'medium',
      section: 'Week 2 - Mobile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q64',
      type: 'mcq',
      question: 'Which gesture is unique to mobile?',
      options: [
        'Click',
        'Pinch to zoom',
        'Hover',
        'Right-click'
      ],
      correctAnswer: 1,
      explanation: 'Pinch to zoom is unique to mobile touchscreens. Hover and right-click are desktop-specific.',
      difficulty: 'easy',
      section: 'Week 2 - Mobile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q65',
      type: 'mcq',
      question: 'What are the WCAG conformance levels?',
      options: [
        'A, B, C',
        'A, AA, AAA',
        '1, 2, 3',
        'Low, Medium, High'
      ],
      correctAnswer: 1,
      explanation: 'WCAG has three conformance levels: A (minimum), AA (mid-range), AAA (highest).',
      difficulty: 'easy',
      section: 'Week 2 - Accessibility',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q66',
      type: 'mcq',
      question: 'What are the four WCAG principles?',
      options: [
        'Perceivable, Operable, Understandable, Robust',
        'Practical, Operational, Universal, Reliable',
        'Perfect, Optimal, Usable, Reliable',
        'Perceivable, Optimal, Universal, Robust'
      ],
      correctAnswer: 0,
      explanation: 'WCAG POUR principles: Perceivable, Operable, Understandable, Robust.',
      difficulty: 'medium',
      section: 'Week 2 - Accessibility',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q67',
      type: 'mcq',
      question: 'What is exploratory testing?',
      options: [
        'Random testing',
        'Simultaneous learning, test design, and execution',
        'Automated testing',
        'Scripted testing'
      ],
      correctAnswer: 1,
      explanation: 'Exploratory testing combines simultaneous learning, test design, and execution.',
      difficulty: 'medium',
      section: 'Week 2 - Exploratory',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q68',
      type: 'truefalse',
      question: 'SQL Injection can be prevented with parameterized queries.',
      correctAnswer: true,
      explanation: 'True. Parameterized queries (prepared statements) prevent SQL injection by separating SQL code from data.',
      difficulty: 'medium',
      section: 'Week 2 - Security',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q69',
      type: 'truefalse',
      question: 'iOS has more device fragmentation than Android.',
      correctAnswer: false,
      explanation: 'False. Android has significantly more device fragmentation due to multiple manufacturers and OS versions.',
      difficulty: 'easy',
      section: 'Week 2 - Mobile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q70',
      type: 'truefalse',
      question: 'ARIA attributes can replace native HTML semantic elements.',
      correctAnswer: false,
      explanation: 'False. Use native HTML semantic elements when possible. ARIA should supplement, not replace native semantics.',
      difficulty: 'medium',
      section: 'Week 2 - Accessibility',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q71',
      type: 'truefalse',
      question: 'Regression testing should be automated whenever possible.',
      correctAnswer: true,
      explanation: 'True. Regression tests are repetitive and ideal for automation to save time and ensure consistency.',
      difficulty: 'easy',
      section: 'Week 2 - Regression',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q72',
      type: 'truefalse',
      question: 'Exploratory testing is completely unstructured.',
      correctAnswer: false,
      explanation: 'False. Exploratory testing is structured with charters, time-boxes, and session notes (SBTM).',
      difficulty: 'medium',
      section: 'Week 2 - Exploratory',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q73',
      type: 'shortanswer',
      question: 'You\'re testing a login form and enter `admin\' OR \'1\'=\'1` as username. The system shows database error. What vulnerability?',
      acceptableAnswers: ['SQL Injection', 'SQLi', 'SQL injection'],
      keywords: ['sql', 'injection', 'sqli'],
      explanation: 'This is SQL Injection vulnerability. The input manipulates the SQL query, causing a database error.',
      difficulty: 'medium',
      section: 'Week 2 - Security',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q74',
      type: 'shortanswer',
      question: 'Calculate DRE: 90 defects found in testing, 10 in production.',
      acceptableAnswers: ['90%', '90', '0.9'],
      keywords: ['90', 'percent'],
      explanation: 'DRE = (90 / (90+10)) × 100 = 90%. This means 90% of defects were found before release.',
      difficulty: 'medium',
      section: 'Week 2 - Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q75',
      type: 'shortanswer',
      question: 'Mobile app loses all form data after receiving a phone call. What testing type would catch this?',
      acceptableAnswers: ['Interruption Testing', 'Interrupt Testing', 'Interruption', 'Interrupt handling'],
      keywords: ['interrupt', 'interruption'],
      explanation: 'Interruption Testing tests how apps handle interruptions like calls, SMS, notifications, and low battery.',
      difficulty: 'hard',
      section: 'Week 2 - Mobile',
      points: 1,
      fullModeOnly: true
    },

    // Week 3 Additional (Q76-Q100)
    {
      id: 'q76',
      type: 'mcq',
      question: 'What are the three Scrum roles?',
      options: [
        'Manager, Developer, Tester',
        'Product Owner, Scrum Master, Development Team',
        'Lead, Senior, Junior',
        'Architect, Developer, QA'
      ],
      correctAnswer: 1,
      explanation: 'Scrum has three roles: Product Owner, Scrum Master, and Development Team.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q77',
      type: 'mcq',
      question: 'What is the purpose of Sprint Planning?',
      options: [
        'Plan entire project',
        'Plan work for upcoming sprint',
        'Plan testing only',
        'Plan deployment'
      ],
      correctAnswer: 1,
      explanation: 'Sprint Planning defines what work will be done in the upcoming sprint.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q78',
      type: 'mcq',
      question: 'What happens in Sprint Review?',
      options: [
        'Review code',
        'Demo completed work to stakeholders',
        'Review test cases',
        'Review bugs'
      ],
      correctAnswer: 1,
      explanation: 'Sprint Review is where the team demonstrates completed work to stakeholders for feedback.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q79',
      type: 'mcq',
      question: 'What is the purpose of Sprint Retrospective?',
      options: [
        'Review product',
        'Improve team process',
        'Review bugs',
        'Plan next sprint'
      ],
      correctAnswer: 1,
      explanation: 'Sprint Retrospective focuses on improving team processes and collaboration.',
      difficulty: 'medium',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q80',
      type: 'mcq',
      question: 'What is a Product Backlog?',
      options: [
        'List of bugs',
        'Prioritized list of features/requirements',
        'List of completed work',
        'List of team members'
      ],
      correctAnswer: 1,
      explanation: 'Product Backlog is a prioritized list of features, enhancements, and fixes for the product.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q81',
      type: 'mcq',
      question: 'What is Velocity in Agile?',
      options: [
        'Speed of development',
        'Amount of work completed per sprint',
        'Number of bugs fixed',
        'Test execution speed'
      ],
      correctAnswer: 1,
      explanation: 'Velocity measures the amount of work (story points) a team completes per sprint.',
      difficulty: 'medium',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q82',
      type: 'mcq',
      question: 'What is Continuous Integration (CI)?',
      options: [
        'Continuous testing',
        'Frequent code integration and automated builds',
        'Continuous deployment',
        'Continuous monitoring'
      ],
      correctAnswer: 1,
      explanation: 'CI is the practice of frequently integrating code changes with automated builds and tests.',
      difficulty: 'medium',
      section: 'Week 3 - DevOps',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q83',
      type: 'mcq',
      question: 'What is Continuous Delivery (CD)?',
      options: [
        'Same as CI',
        'Automated deployment to production',
        'Code is always in deployable state',
        'Continuous testing'
      ],
      correctAnswer: 2,
      explanation: 'Continuous Delivery ensures code is always in a deployable state, ready for production release.',
      difficulty: 'medium',
      section: 'Week 3 - DevOps',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q84',
      type: 'mcq',
      question: 'What is the purpose of JIRA?',
      options: [
        'Code editor',
        'Issue and project tracking',
        'Test automation',
        'Performance testing'
      ],
      correctAnswer: 1,
      explanation: 'JIRA is an issue and project tracking tool used for managing work items, bugs, and projects.',
      difficulty: 'easy',
      section: 'Week 3 - Tools',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q85',
      type: 'mcq',
      question: 'What is TestRail?',
      options: [
        'Bug tracking tool',
        'Test management tool',
        'Automation tool',
        'Performance tool'
      ],
      correctAnswer: 1,
      explanation: 'TestRail is a test management tool for organizing test cases, plans, and results.',
      difficulty: 'easy',
      section: 'Week 3 - Tools',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q86',
      type: 'mcq',
      question: 'What is a SQL JOIN?',
      options: [
        'Combine tables',
        'Insert data',
        'Delete data',
        'Update data'
      ],
      correctAnswer: 0,
      explanation: 'SQL JOIN combines rows from two or more tables based on related columns.',
      difficulty: 'easy',
      section: 'Week 3 - SQL',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q87',
      type: 'mcq',
      question: 'What does SELECT * FROM users WHERE age > 18 do?',
      options: [
        'Select all users',
        'Select users older than 18',
        'Delete users',
        'Update users'
      ],
      correctAnswer: 1,
      explanation: 'This query selects all columns from users table where age is greater than 18.',
      difficulty: 'easy',
      section: 'Week 3 - SQL',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q88',
      type: 'mcq',
      question: 'What is Selenium?',
      options: [
        'Manual testing tool',
        'Test automation framework',
        'Bug tracking tool',
        'Performance tool'
      ],
      correctAnswer: 1,
      explanation: 'Selenium is a popular test automation framework for web applications.',
      difficulty: 'easy',
      section: 'Week 3 - Automation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q89',
      type: 'mcq',
      question: 'When should you automate tests?',
      options: [
        'Always',
        'Never',
        'When tests are stable, repetitive, and ROI is positive',
        'Only for unit tests'
      ],
      correctAnswer: 2,
      explanation: 'Automate when tests are stable, repetitive, and the return on investment justifies the effort.',
      difficulty: 'medium',
      section: 'Week 3 - Automation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q90',
      type: 'mcq',
      question: 'What is the Test Automation Pyramid?',
      options: [
        'More UI tests than unit tests',
        'More unit tests than UI tests',
        'Equal distribution',
        'Only unit tests'
      ],
      correctAnswer: 1,
      explanation: 'Test Automation Pyramid: Many unit tests (base), fewer integration tests (middle), fewest UI tests (top).',
      difficulty: 'medium',
      section: 'Week 3 - Automation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q91',
      type: 'truefalse',
      question: 'In Agile, testing is only the QA team\'s responsibility.',
      correctAnswer: false,
      explanation: 'False. In Agile, quality is everyone\'s responsibility. The whole team owns testing.',
      difficulty: 'easy',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q92',
      type: 'truefalse',
      question: 'Sprint length can vary within a project.',
      correctAnswer: false,
      explanation: 'False. Sprint length should be consistent throughout the project for predictability.',
      difficulty: 'medium',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q93',
      type: 'truefalse',
      question: 'ISTQB Foundation Level certification requires 2 years of testing experience.',
      correctAnswer: false,
      explanation: 'False. ISTQB Foundation Level has no prerequisites. Anyone can take the exam.',
      difficulty: 'easy',
      section: 'Week 3 - Certification',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q94',
      type: 'truefalse',
      question: 'ISO/IEC 29119 is mandatory for all software projects.',
      correctAnswer: false,
      explanation: 'False. ISO/IEC 29119 is a standard, not mandatory. Organizations can choose to adopt it.',
      difficulty: 'medium',
      section: 'Week 3 - Standards',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q95',
      type: 'truefalse',
      question: 'Test automation can replace manual testing completely.',
      correctAnswer: false,
      explanation: 'False. Automation complements manual testing but cannot replace it. Exploratory and usability testing still need humans.',
      difficulty: 'easy',
      section: 'Week 3 - Automation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q96',
      type: 'shortanswer',
      question: 'You have 100 test cases. 80 executed, 60 passed, 15 failed, 5 blocked. What is the pass rate?',
      acceptableAnswers: ['75%', '75', '0.75'],
      keywords: ['75', 'percent'],
      explanation: 'Pass Rate = (Passed / Executed) × 100 = (60/80) × 100 = 75%',
      difficulty: 'medium',
      section: 'Week 3 - Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q97',
      type: 'shortanswer',
      question: 'Explain the difference between verification and validation with examples.',
      acceptableAnswers: [
        'Verification checks if product meets specifications, validation checks if it meets user needs',
        'Verification is building product right, validation is building right product',
        'Verification: code reviews, unit tests. Validation: UAT, beta testing'
      ],
      keywords: ['verification', 'validation', 'specifications', 'user needs', 'right product'],
      explanation: 'Verification: "Are we building the product right?" (code reviews, unit tests). Validation: "Are we building the right product?" (UAT, beta testing).',
      difficulty: 'hard',
      section: 'Week 1 - Fundamentals',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q98',
      type: 'shortanswer',
      question: 'You\'re working in a 2-week Agile sprint. How do you ensure adequate testing coverage when requirements change mid-sprint?',
      acceptableAnswers: [
        'Test early and continuously, prioritize critical features, use risk-based approach, maintain automated regression suite',
        'Collaborate with team, update test cases, focus on Definition of Done',
        'Continuous testing, automation, risk-based testing, team collaboration'
      ],
      keywords: ['continuous', 'automation', 'risk', 'prioritize', 'collaborate', 'regression'],
      explanation: 'Test early and continuously, prioritize critical features, use risk-based approach, maintain automated regression suite, collaborate closely with team, update test cases as requirements change, focus on Definition of Done.',
      difficulty: 'hard',
      section: 'Week 3 - Agile',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q99',
      type: 'shortanswer',
      question: 'A critical payment bug is found 2 days before release. The Product Owner wants to release anyway. How do you handle this?',
      acceptableAnswers: [
        'Document bug with evidence, present options, communicate risks, get written approval, prepare hotfix plan',
        'Show business impact, recommend delay, document decision, alert support team',
        'Risk assessment, stakeholder communication, documented decision, contingency plan'
      ],
      keywords: ['document', 'risk', 'communicate', 'approval', 'hotfix', 'impact'],
      explanation: '1) Document bug with evidence and business impact, 2) Present options: delay release, release with known issue, partial release, 3) Communicate risks clearly with data, 4) Get written approval if releasing with bug, 5) Prepare hotfix plan and alert support team.',
      difficulty: 'hard',
      section: 'Week 3 - Communication',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q100',
      type: 'shortanswer',
      question: 'Create a risk assessment matrix for an e-commerce checkout feature. Identify 3 high-risk scenarios.',
      acceptableAnswers: [
        'Payment processing failure, inventory synchronization issues, form validation failures',
        'Payment gateway timeout, concurrent purchase conflicts, data validation errors',
        'Transaction failures, stock management errors, input validation bugs'
      ],
      keywords: ['payment', 'inventory', 'validation', 'transaction', 'stock', 'concurrent'],
      explanation: 'High-risk scenarios: 1) Payment Processing Failure (High Probability, High Impact = Critical) - test all payment methods, timeouts, error handling. 2) Inventory Synchronization Issues (Medium Probability, High Impact = High) - test concurrent purchases, stock updates, race conditions. 3) Form Validation Failures (High Probability, Medium Impact = High) - test all fields, error messages, browser compatibility.',
      difficulty: 'hard',
      section: 'Week 3 - Risk Management',
      points: 1,
      fullModeOnly: true
    }
  ]
};
