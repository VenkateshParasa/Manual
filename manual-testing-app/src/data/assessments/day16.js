export const day16Assessment = {
  id: 'day16',
  title: 'Day 16: Test Management & Metrics',
  description: 'Assessment covering Test Estimation, Test Metrics & KPIs, Test Reporting, and Dashboards',
  
  passingScore: 70,
  
  quickMode: {
    timeLimit: 20,
    questions: 15
  },
  
  fullMode: {
    timeLimit: 45,
    questions: 30
  },

  questions: [
    // Quick Mode Questions (Q1-Q15)
    {
      id: 'q1',
      type: 'mcq',
      question: 'Which estimation technique uses Optimistic, Most Likely, and Pessimistic estimates?',
      options: [
        'Work Breakdown Structure',
        'Three-Point Estimation (PERT)',
        'Function Point Analysis',
        'Percentage Distribution'
      ],
      correctAnswer: 1,
      explanation: 'Three-Point Estimation uses three estimates (O, M, P) to account for uncertainty in estimation.',
      difficulty: 'medium',
      section: 'Test Estimation',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'What is the formula for Three-Point Estimation?',
      options: [
        'E = (O + M + P) / 3',
        'E = (O + 2M + P) / 4',
        'E = (O + 4M + P) / 6',
        'E = (2O + M + P) / 4'
      ],
      correctAnswer: 2,
      explanation: 'This is the PERT formula where Expected Time = (Optimistic + 4×Most Likely + Pessimistic) / 6.',
      difficulty: 'medium',
      section: 'Test Estimation',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'What is a good target for Defect Removal Efficiency (DRE)?',
      options: [
        '>50%',
        '>70%',
        '>90%',
        '100% (always achievable)'
      ],
      correctAnswer: 2,
      explanation: 'DRE >90% is considered good, >95% is excellent. This means catching most defects before release.',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'How is Defect Density calculated?',
      options: [
        'Total Defects / Total Test Cases',
        '(Total Defects / Lines of Code) × 1000',
        'Total Defects / Testing Days',
        'Failed Tests / Total Tests'
      ],
      correctAnswer: 1,
      explanation: 'Defect Density normalizes defects per 1000 LOC for comparison across projects.',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'In the Percentage Distribution method, what is the typical testing effort ratio in Waterfall?',
      options: [
        '20% of development effort',
        '30% of development effort',
        '40% of development effort',
        '50% of development effort'
      ],
      correctAnswer: 2,
      explanation: 'In traditional Waterfall, testing typically consumes 40% of development effort (Agile: 30%).',
      difficulty: 'medium',
      section: 'Test Estimation',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'What does MTTD stand for in testing metrics?',
      options: [
        'Mean Time To Deploy',
        'Mean Time To Detect',
        'Maximum Time To Defect',
        'Manual Test Time Duration'
      ],
      correctAnswer: 1,
      explanation: 'MTTD measures the average time from code commit to defect detection.',
      difficulty: 'easy',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'What is the industry benchmark for good defect density per 1000 LOC?',
      options: [
        '<1 defect',
        '1-5 defects',
        '5-10 defects',
        '>10 defects'
      ],
      correctAnswer: 1,
      explanation: 'Industry benchmark: Good = 1-5 defects/1000 LOC, Average = 5-10, Poor = >10.',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'Which metric measures the percentage of defects found before release?',
      options: [
        'Defect Density',
        'Defect Leakage',
        'Defect Removal Efficiency',
        'Defect Age'
      ],
      correctAnswer: 2,
      explanation: 'DRE = (Defects Found Before Release / Total Defects) × 100%. Measures test effectiveness.',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'Calculate Requirements Coverage: Total Requirements: 200, Requirements with Test Cases: 180. Coverage = ?',
      options: [
        '85%',
        '90%',
        '95%',
        '100%'
      ],
      correctAnswer: 1,
      explanation: 'Coverage = (180/200) × 100% = 90%',
      difficulty: 'easy',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'Calculate Pass Rate: Total Test Cases Executed: 500, Passed: 465, Failed: 30, Blocked: 5. Pass Rate = ?',
      options: [
        '90%',
        '91%',
        '93%',
        '94%'
      ],
      correctAnswer: 2,
      explanation: 'Pass Rate = (465/500) × 100% = 93%',
      difficulty: 'easy',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q11',
      type: 'mcq',
      question: 'Calculate Defect Density: Total Defects: 120, Lines of Code: 40,000. Defect Density (per 1000 LOC) = ?',
      options: [
        '2.0',
        '3.0',
        '4.0',
        '5.0'
      ],
      correctAnswer: 1,
      explanation: 'Defect Density = (120/40,000) × 1000 = 3.0 defects per 1000 LOC',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q12',
      type: 'mcq',
      question: 'Calculate DRE: Defects found in testing: 95, Defects found in production: 5. DRE = ?',
      options: [
        '90%',
        '92%',
        '95%',
        '98%'
      ],
      correctAnswer: 2,
      explanation: 'Total Defects = 95 + 5 = 100. DRE = (95/100) × 100% = 95%',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q13',
      type: 'mcq',
      question: 'Scenario: Your manager asks you to estimate testing for a new e-commerce feature. You have no historical data. Which estimation technique should you use?',
      options: [
        'Only Three-Point Estimation',
        'Only Function Point Analysis',
        'Combination of WBS and Three-Point Estimation',
        'Just guess based on development estimate'
      ],
      correctAnswer: 2,
      explanation: 'When you have no historical data, combine WBS (break down work) with Three-Point Estimation (handle uncertainty). Add 20-30% buffer.',
      difficulty: 'hard',
      section: 'Test Estimation',
      points: 1
    },
    {
      id: 'q14',
      type: 'mcq',
      question: 'Scenario: Your DRE is 75% but the target is 90%. What does this indicate?',
      options: [
        'Testing is excellent',
        '25% of defects are escaping to production',
        'Too many tests are being run',
        'Development quality is perfect'
      ],
      correctAnswer: 1,
      explanation: 'DRE of 75% means only 75% caught before release, so 25% escape. This indicates testing effectiveness needs improvement.',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1
    },
    {
      id: 'q15',
      type: 'mcq',
      question: 'Scenario: Stakeholders complain about "too many metrics" in your reports. What should you do?',
      options: [
        'Remove all metrics',
        'Keep only pass/fail rate',
        'Focus on actionable metrics that drive decisions',
        'Ignore the complaint and continue'
      ],
      correctAnswer: 2,
      explanation: 'Include only metrics that help make decisions, show trends, and are actionable. Tailor to audience needs.',
      difficulty: 'medium',
      section: 'Test Reporting',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'mcq',
      question: 'What is the first level in Work Breakdown Structure (WBS)?',
      options: [
        'Test activities',
        'Test cases',
        'Major modules',
        'Individual tasks'
      ],
      correctAnswer: 2,
      explanation: 'WBS Level 0 is Project, Level 1 is Major Modules, Level 2 is Features, Level 3 is Test Activities.',
      difficulty: 'medium',
      section: 'Test Estimation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'mcq',
      question: 'In Function Point Analysis, what does EI stand for?',
      options: [
        'External Integration',
        'External Inputs',
        'Error Investigation',
        'Execution Interface'
      ],
      correctAnswer: 1,
      explanation: 'In FPA, EI = External Inputs (user inputs data). Other types: EO (outputs), EQ (inquiries), ILF (internal files), EIF (external files).',
      difficulty: 'medium',
      section: 'Test Estimation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'mcq',
      question: 'What is a good target for code coverage?',
      options: [
        '50-60%',
        '60-70%',
        '70-80%',
        '80-90%'
      ],
      correctAnswer: 3,
      explanation: 'Good code coverage target is 80-90%. Minimum acceptable is 70%.',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'mcq',
      question: 'What does a positive Schedule Variance indicate?',
      options: [
        'Ahead of schedule',
        'On schedule',
        'Behind schedule',
        'Cannot determine'
      ],
      correctAnswer: 2,
      explanation: 'SV = Actual - Planned. Positive SV means behind schedule, Negative SV means ahead of schedule.',
      difficulty: 'hard',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'mcq',
      question: 'Which report should be created daily during test execution?',
      options: [
        'Test Summary Report',
        'Daily Test Status Report',
        'Test Completion Report',
        'Test Metrics Dashboard'
      ],
      correctAnswer: 1,
      explanation: 'Daily reports track progress, defects, blockers. Weekly = summary, Completion = final report.',
      difficulty: 'easy',
      section: 'Test Reporting',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'mcq',
      question: 'What is the ideal target for Defect Leakage ratio?',
      options: [
        '<5%',
        '<10%',
        '<15%',
        '<20%'
      ],
      correctAnswer: 0,
      explanation: 'Defect Leakage should be <5%. This means <5% of defects escape to production.',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'mcq',
      question: 'In Three-Point Estimation, what does \'P\' represent?',
      options: [
        'Probable time',
        'Pessimistic time',
        'Planned time',
        'Projected time'
      ],
      correctAnswer: 1,
      explanation: 'P = Pessimistic (worst case), M = Most Likely (realistic), O = Optimistic (best case).',
      difficulty: 'easy',
      section: 'Test Estimation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'mcq',
      question: 'Calculate Three-Point Estimation: Optimistic: 15 hours, Most Likely: 25 hours, Pessimistic: 40 hours. Expected Time = ?',
      options: [
        '25 hours',
        '26 hours',
        '26.67 hours',
        '27 hours'
      ],
      correctAnswer: 2,
      explanation: 'E = (15 + 4×25 + 40) / 6 = (15 + 100 + 40) / 6 = 155/6 = 25.83 ≈ 26.67 hours',
      difficulty: 'hard',
      section: 'Test Estimation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'mcq',
      question: 'Calculate Defect Leakage: Total Defects: 150, Production Defects: 9. Defect Leakage = ?',
      options: [
        '4%',
        '6%',
        '8%',
        '10%'
      ],
      correctAnswer: 1,
      explanation: 'Defect Leakage = (9/150) × 100% = 6%',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'mcq',
      question: 'Calculate Test Automation ROI (Year 1): Automation Investment: $25,000, Manual Testing Cost Saved: $45,000. ROI = ?',
      options: [
        '60%',
        '70%',
        '80%',
        '90%'
      ],
      correctAnswer: 2,
      explanation: 'Savings = $45,000 - $25,000 = $20,000. ROI = ($20,000/$25,000) × 100% = 80%',
      difficulty: 'hard',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'mcq',
      question: 'Calculate MTTR: Total defects fixed: 40, Total time to fix: 200 hours. MTTR = ?',
      options: [
        '4 hours',
        '5 hours',
        '6 hours',
        '8 hours'
      ],
      correctAnswer: 1,
      explanation: 'MTTR = 200 hours / 40 defects = 5 hours per defect',
      difficulty: 'easy',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'Scenario: Your pass rate is declining over the sprint (Day 1: 95%, Day 3: 90%, Day 5: 85%). What should you do?',
      options: [
        'Continue testing normally',
        'Escalate immediately and investigate quality degradation',
        'Reduce testing to improve pass rate',
        'Wait until sprint end to report'
      ],
      correctAnswer: 1,
      explanation: 'Declining pass rate indicates quality issues. Actions: halt new testing, meet with dev team, review recent changes, implement code freeze if needed.',
      difficulty: 'hard',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'Scenario: Your defect density is 8 per 1000 LOC, but industry average is 3-5. What should you investigate?',
      options: [
        'Nothing, this is acceptable',
        'Code quality, requirements clarity, and development practices',
        'Only the testing process',
        'Reduce testing to find fewer defects'
      ],
      correctAnswer: 1,
      explanation: 'High defect density (8 vs 3-5 industry avg) indicates issues in code quality, requirements, or team experience. Investigate thoroughly.',
      difficulty: 'hard',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'Scenario: You\'re creating a test estimation for a 6-module project. Development estimate is 2000 hours. Using Percentage Distribution (40%), what is your testing estimate?',
      options: [
        '600 hours',
        '700 hours',
        '800 hours',
        '900 hours'
      ],
      correctAnswer: 2,
      explanation: 'Testing Effort = 2000 × 0.40 = 800 hours (using 40% ratio)',
      difficulty: 'medium',
      section: 'Test Estimation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'mcq',
      question: 'Scenario: Your manager wants to justify test automation investment. Which metric would be most convincing?',
      options: [
        'Number of test cases automated',
        'Test Automation ROI with payback period',
        'Percentage of automation coverage',
        'Number of tools purchased'
      ],
      correctAnswer: 1,
      explanation: 'ROI with financial metrics (savings, payback period, 3-year projection) is most convincing to management.',
      difficulty: 'medium',
      section: 'Test Metrics',
      points: 1,
      fullModeOnly: true
    }
  ]
};
