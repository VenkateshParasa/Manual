export const day17Assessment = {
  id: 'day17',
  title: 'Day 17: Risk-Based Testing & Test Prioritization',
  description: 'Assessment covering Risk-Based Testing, Test Prioritization, and Test Optimization',
  
  passingScore: 70,
  
  quickMode: {
    timeLimit: 15,
    questions: 15
  },
  
  fullMode: {
    timeLimit: 40,
    questions: 30
  },

  questions: [
    // Quick Mode Questions (Q1-Q15)
    {
      id: 'q1',
      type: 'mcq',
      question: 'What is the core principle of Risk-Based Testing?',
      options: [
        'Test everything equally',
        'Test what matters most first',
        'Test only high-risk areas',
        'Test based on developer priority'
      ],
      correctAnswer: 1,
      explanation: 'Risk-Based Testing prioritizes testing efforts based on risk levels, focusing on high-risk areas first while still covering other areas based on available time and resources.',
      difficulty: 'easy',
      section: 'Risk-Based Testing',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'The Risk Score in Risk-Based Testing is calculated as:',
      options: [
        'Probability + Impact',
        'Probability × Impact',
        'Probability - Impact',
        'Probability / Impact'
      ],
      correctAnswer: 1,
      explanation: 'Risk Score = Probability × Impact. This formula helps quantify risk levels for prioritization.',
      difficulty: 'easy',
      section: 'Risk Assessment',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'Which is NOT a category of software risk?',
      options: [
        'Product Risk',
        'Project Risk',
        'Business Risk',
        'Marketing Risk'
      ],
      correctAnswer: 3,
      explanation: 'The three main risk categories in software testing are Product Risk (quality-related), Project Risk (process-related), and Business Risk (business impact-related).',
      difficulty: 'medium',
      section: 'Risk Categories',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'In the Probability-Impact Matrix, a risk with score 20-25 is classified as:',
      options: [
        'Low',
        'Medium',
        'High',
        'Critical'
      ],
      correctAnswer: 3,
      explanation: 'Risk scores of 20-25 (on a 1-25 scale) are classified as Critical priority, requiring immediate attention and executive escalation.',
      difficulty: 'medium',
      section: 'Risk Assessment',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'What does MoSCoW stand for in requirement prioritization?',
      options: [
        'Most, Should, Could, Won\'t',
        'Must, Should, Could, Won\'t',
        'Must, Some, Could, Would',
        'Most, Some, Could, Won\'t'
      ],
      correctAnswer: 1,
      explanation: 'MoSCoW is a prioritization technique: Must Have, Should Have, Could Have, Won\'t Have (this time).',
      difficulty: 'easy',
      section: 'Test Prioritization',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'Which risk identification technique uses past defect data?',
      options: [
        'Stakeholder interviews',
        'Brainstorming sessions',
        'Historical data analysis',
        'Risk workshops'
      ],
      correctAnswer: 2,
      explanation: 'Historical data analysis examines past defects, production incidents, and defect patterns to identify high-risk areas.',
      difficulty: 'medium',
      section: 'Risk Identification',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'Defect Density is calculated as:',
      options: [
        'Total Defects / Lines of Code',
        '(Total Defects / Lines of Code) × 100',
        '(Total Defects / Lines of Code) × 1000',
        'Lines of Code / Total Defects'
      ],
      correctAnswer: 2,
      explanation: 'Defect Density = (Total Defects / Lines of Code) × 1000, providing a normalized metric for comparing modules.',
      difficulty: 'medium',
      section: 'Risk Metrics',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'In test optimization, what should you do with tests that never found defects?',
      options: [
        'Always keep them',
        'Evaluate and potentially remove',
        'Run them more frequently',
        'Increase their priority'
      ],
      correctAnswer: 1,
      explanation: 'Tests that consistently find no defects should be evaluated for value. They may be candidates for removal or reduction to optimize the test suite.',
      difficulty: 'medium',
      section: 'Test Optimization',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'Which prioritization technique focuses on features customers use most?',
      options: [
        'Risk-based prioritization',
        'Coverage-based prioritization',
        'Customer priority-based prioritization',
        'History-based prioritization'
      ],
      correctAnswer: 2,
      explanation: 'Customer priority-based prioritization uses usage analytics, support tickets, and customer feedback to prioritize testing of most-used features.',
      difficulty: 'medium',
      section: 'Test Prioritization',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'What is the primary benefit of parallel test execution?',
      options: [
        'Better test coverage',
        'Reduced execution time',
        'Fewer defects found',
        'Easier test maintenance'
      ],
      correctAnswer: 1,
      explanation: 'Parallel execution runs multiple tests simultaneously, significantly reducing overall execution time (often 50-80% reduction).',
      difficulty: 'easy',
      section: 'Test Optimization',
      points: 1
    },
    {
      id: 'q11',
      type: 'truefalse',
      question: 'Exhaustive testing is possible with proper planning and resources.',
      correctAnswer: false,
      explanation: 'Exhaustive testing is impossible for any non-trivial application due to the vast number of possible test combinations. Risk-Based Testing helps focus efforts where they matter most.',
      difficulty: 'easy',
      section: 'Risk-Based Testing',
      points: 1
    },
    {
      id: 'q12',
      type: 'truefalse',
      question: 'Higher code complexity generally indicates higher risk.',
      correctAnswer: true,
      explanation: 'Complex code with more decision points, dependencies, and nested logic typically has higher defect probability and is therefore higher risk.',
      difficulty: 'easy',
      section: 'Risk Assessment',
      points: 1
    },
    {
      id: 'q13',
      type: 'truefalse',
      question: 'All test cases should be executed in every test cycle regardless of risk.',
      correctAnswer: false,
      explanation: 'Risk-based and time-constrained prioritization means focusing on high-risk tests first. Not all tests need to run in every cycle, especially under time constraints.',
      difficulty: 'medium',
      section: 'Test Prioritization',
      points: 1
    },
    {
      id: 'q14',
      type: 'truefalse',
      question: 'Flaky tests should be kept in the test suite to catch intermittent issues.',
      correctAnswer: false,
      explanation: 'Flaky tests should be fixed or removed as they reduce confidence in test results, waste time on re-runs, and mask real issues.',
      difficulty: 'medium',
      section: 'Test Optimization',
      points: 1
    },
    {
      id: 'q15',
      type: 'truefalse',
      question: 'Test optimization should maintain or improve defect detection rate.',
      correctAnswer: true,
      explanation: 'The goal of optimization is to reduce time/effort while maintaining quality. Defect detection rate should not decrease after optimization.',
      difficulty: 'medium',
      section: 'Test Optimization',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'mcq',
      question: 'In quantitative risk assessment, Risk Exposure is calculated as:',
      options: [
        'Probability + Impact',
        'Probability (%) × Impact ($)',
        'Impact / Probability',
        '(Probability + Impact) / 2'
      ],
      correctAnswer: 1,
      explanation: 'Risk Exposure = Probability (%) × Impact ($), providing a monetary value for expected loss from a risk.',
      difficulty: 'hard',
      section: 'Risk Assessment',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'mcq',
      question: 'Which factor typically has the HIGHEST weight in combined risk assessment?',
      options: [
        'Business Criticality (0.4)',
        'Complexity (0.3)',
        'Defect History (0.2)',
        'Change Frequency (0.1)'
      ],
      correctAnswer: 0,
      explanation: 'Business Criticality typically receives the highest weight (40%) as it directly relates to business value and impact.',
      difficulty: 'medium',
      section: 'Risk Assessment',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'mcq',
      question: 'What is the recommended target for test suite size reduction during optimization?',
      options: [
        '>10% reduction',
        '>20% reduction',
        '>30% reduction',
        '>50% reduction'
      ],
      correctAnswer: 1,
      explanation: 'A target of >20% reduction in test suite size is recommended while maintaining >95% coverage.',
      difficulty: 'medium',
      section: 'Test Optimization',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'mcq',
      question: 'Which test optimization technique removes tests for deprecated features?',
      options: [
        'Test case reduction',
        'Test case selection',
        'Parallel execution',
        'Flaky test elimination'
      ],
      correctAnswer: 0,
      explanation: 'Test case reduction includes removing obsolete tests for removed features, deprecated functionality, and tests that no longer apply.',
      difficulty: 'medium',
      section: 'Test Optimization',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'mcq',
      question: 'In time-constrained prioritization, what should you run first?',
      options: [
        'All tests equally',
        'Smoke tests for critical paths',
        'Edge case tests',
        'Low-priority tests'
      ],
      correctAnswer: 1,
      explanation: 'When time is limited, start with smoke tests covering critical paths to quickly verify basic functionality before deeper testing.',
      difficulty: 'medium',
      section: 'Test Prioritization',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'shortanswer',
      question: 'You have 3 modules with risk scores: Module A = 15, Module B = 9, Module C = 3. You have 100 hours for testing. How many hours should be allocated to Module A?',
      acceptableAnswers: ['56', '55', '56 hours', '55 hours', '55.6', '56 hours'],
      keywords: ['56', '55', 'hours'],
      explanation: 'Total Risk = 15 + 9 + 3 = 27. Module A allocation: (15/27) × 100 = 55.6 hours ≈ 56 hours (56%)',
      difficulty: 'hard',
      section: 'Risk-Based Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'shortanswer',
      question: 'A payment module has Probability = 3 (Medium) and Impact = 5 (Critical). What is the Risk Score?',
      acceptableAnswers: ['15', 'fifteen', '15 (HIGH)', 'HIGH', 'P1'],
      keywords: ['15', 'high', 'p1'],
      explanation: 'Risk Score = 3 × 5 = 15 (HIGH PRIORITY - P1). Score of 15 falls in the 12-19 range, classified as High priority.',
      difficulty: 'medium',
      section: 'Risk Assessment',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'shortanswer',
      question: 'Module X had 25 defects in 5,000 LOC. What is the defect density per 1000 LOC?',
      acceptableAnswers: ['5', '5.0', 'five', '5 defects'],
      keywords: ['5', 'five'],
      explanation: 'Defect Density = (25/5,000) × 1000 = 5.0 defects per 1000 LOC',
      difficulty: 'medium',
      section: 'Risk Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'mcq',
      question: 'Scenario: Probability of data breach = 2%, Impact = $2,000,000. Security testing costs $50,000 and reduces probability to 1%. Should you invest?',
      options: [
        'Yes, positive ROI',
        'No, negative ROI',
        'Break even',
        'Cannot determine'
      ],
      correctAnswer: 1,
      explanation: 'Current Risk = 2% × $2M = $40K. After testing = 1% × $2M = $20K. Risk reduction = $20K. Investment = $50K. ROI = -60% (negative). Do not invest.',
      difficulty: 'hard',
      section: 'Risk Assessment',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'mcq',
      question: 'Scenario: Your regression suite takes 10 hours. After removing 50 obsolete tests (10% reduction), fixing flaky tests, and parallelizing across 4 machines, what is the estimated new execution time?',
      options: [
        '1 hour',
        '2.25 hours',
        '5 hours',
        '7.5 hours'
      ],
      correctAnswer: 1,
      explanation: 'Step 1: 10% reduction = 9 hours. Step 2: Fix flaky (no re-runs) = 9 hours. Step 3: Parallelize /4 = 2.25 hours (77.5% reduction from original).',
      difficulty: 'hard',
      section: 'Test Optimization',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'mcq',
      question: 'Scenario: Feature usage data shows Feature A (80% users, 50 tickets), Feature B (60% users, 20 tickets), Feature C (30% users, 10 tickets). You have 100 hours. How many hours for Feature A?',
      options: [
        '35 hours',
        '40 hours',
        '50 hours',
        '60 hours'
      ],
      correctAnswer: 2,
      explanation: 'Feature A has highest usage (80%) and most issues (50 tickets). Allocate 50 hours (50%) - highest priority based on user impact and pain points.',
      difficulty: 'hard',
      section: 'Test Prioritization',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'Scenario: You need to test a hotfix in 2 hours. Full suite has 200 tests (8 hours). What\'s your strategy?',
      options: [
        'Run all 200 tests',
        'Run smoke tests (20), impact area tests (25), risk-based sampling (15) = 60 tests',
        'Run only 1 test',
        'Skip testing'
      ],
      correctAnswer: 1,
      explanation: 'Time-constrained strategy: Smoke tests (30 min), Impact area testing (60 min), Risk-based sampling (30 min) = 60 tests in 120 minutes, covering ~30% of tests but ~85% of risk.',
      difficulty: 'hard',
      section: 'Test Prioritization',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'Scenario: Module change frequency: Search (45 changes), Dashboard (28 changes), Payment (12 changes), Reports (3 changes). Which has HIGHEST regression risk?',
      options: [
        'Reports',
        'Payment',
        'Dashboard',
        'Search'
      ],
      correctAnswer: 3,
      explanation: 'Search module with 45 changes has highest regression risk. Change frequency = regression risk. More changes = more likely to have introduced defects.',
      difficulty: 'medium',
      section: 'Risk Assessment',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'Scenario: You have 500 test cases. Analysis shows High Value (200 tests, 80 bugs), Medium Value (250 tests, 30 bugs), Low Value (50 tests, 0 bugs). After optimization, how many tests should remain?',
      options: [
        '200 tests',
        '300 tests',
        '350 tests',
        '450 tests'
      ],
      correctAnswer: 2,
      explanation: 'Keep all 200 high-value tests, reduce medium to 150 (remove redundant 100), remove all 50 low-value tests = 350 tests (30% reduction, ~95% coverage maintained).',
      difficulty: 'hard',
      section: 'Test Optimization',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'shortanswer',
      question: 'In a risk register, what priority level (P0, P1, P2, P3) should be assigned to a payment processing failure affecting high-value customers with direct revenue impact?',
      acceptableAnswers: ['P0', 'p0', 'P0 (Critical)', 'Critical', 'Blocker'],
      keywords: ['p0', 'critical', 'blocker'],
      explanation: 'P0 (Must fix before release) - Critical payment bug affecting high-value customers with direct revenue loss requires highest priority.',
      difficulty: 'medium',
      section: 'Risk Assessment',
      points: 1,
      fullModeOnly: true
    }
  ]
};
