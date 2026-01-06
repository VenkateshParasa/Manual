export const day20cAssessment = {
  id: 'day20c',
  title: 'Day 20C: Agile & DevOps Testing Practices',
  description: 'Assessment covering Agile Testing, DevOps, CI/CD, Test Automation Pyramid, and Continuous Testing',
  
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
      question: 'What does the Agile Testing Pyramid recommend for unit tests?',
      options: [
        '10%',
        '30%',
        '60%',
        '100%'
      ],
      correctAnswer: 2,
      explanation: 'The Test Automation Pyramid recommends 60% unit tests (fast, many), 30% integration tests, 10% UI tests (slow, few).',
      difficulty: 'medium',
      section: 'Test Automation Pyramid',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'Which Agile Testing Quadrant contains unit tests?',
      options: [
        'Q1 (Technology-facing, Supporting Team)',
        'Q2 (Business-facing, Supporting Team)',
        'Q3 (Business-facing, Critique Product)',
        'Q4 (Technology-facing, Critique Product)'
      ],
      correctAnswer: 0,
      explanation: 'Q1 contains unit tests, component tests, and API tests - technology-facing tests that support the team.',
      difficulty: 'medium',
      section: 'Agile Testing Quadrants',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'What does "shift left" mean in testing?',
      options: [
        'Move testing team to different location',
        'Test only left side of application',
        'Move testing activities earlier in SDLC',
        'Reduce testing time'
      ],
      correctAnswer: 2,
      explanation: 'Shift-left means moving testing activities earlier (left on timeline) to find defects sooner when they\'re cheaper to fix.',
      difficulty: 'easy',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'In CI/CD, what is the recommended maximum time for unit tests?',
      options: [
        '1 minute',
        '10 minutes',
        '30 minutes',
        '1 hour'
      ],
      correctAnswer: 1,
      explanation: 'Unit tests should run in under 10 minutes to provide fast feedback in CI/CD pipelines.',
      difficulty: 'medium',
      section: 'CI/CD',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'Which deployment strategy allows instant rollback?',
      options: [
        'Rolling deployment',
        'Canary release',
        'Blue-Green deployment',
        'Big bang deployment'
      ],
      correctAnswer: 2,
      explanation: 'Blue-Green deployment maintains two identical environments, allowing instant rollback by switching traffic back to the previous version.',
      difficulty: 'medium',
      section: 'DevOps',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'What percentage of tests should be UI tests in the Test Pyramid?',
      options: [
        '10%',
        '30%',
        '60%',
        '100%'
      ],
      correctAnswer: 0,
      explanation: 'UI tests should be only 10% - they are slow, brittle, and expensive to maintain.',
      difficulty: 'easy',
      section: 'Test Automation Pyramid',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'Which Agile Testing Quadrant focuses on exploratory testing?',
      options: [
        'Q1',
        'Q2',
        'Q3',
        'Q4'
      ],
      correctAnswer: 2,
      explanation: 'Q3 (Business-facing, Critique Product) includes exploratory testing, usability testing, and UAT.',
      difficulty: 'medium',
      section: 'Agile Testing Quadrants',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'What does DevOps combine?',
      options: [
        'Development + Operations',
        'Development + Quality Assurance',
        'Deployment + Operations',
        'Design + Operations'
      ],
      correctAnswer: 0,
      explanation: 'DevOps combines Development and Operations to improve collaboration and automate software delivery.',
      difficulty: 'easy',
      section: 'DevOps',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'In Canary release, what percentage of users typically get the new version first?',
      options: [
        '1-5%',
        '25-50%',
        '50-75%',
        '100%'
      ],
      correctAnswer: 0,
      explanation: 'Canary releases start with 1-5% of users to minimize risk, then gradually increase if no issues are found.',
      difficulty: 'medium',
      section: 'DevOps',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'What is the main benefit of the whole team approach in Agile?',
      options: [
        'Faster development',
        'Shared quality ownership',
        'Less documentation',
        'No need for QA'
      ],
      correctAnswer: 1,
      explanation: 'The whole team approach means everyone (developers, testers, PO) shares responsibility for quality.',
      difficulty: 'easy',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q11',
      type: 'mcq',
      question: 'Which CI/CD metric measures time from commit to production?',
      options: [
        'Build duration',
        'Deployment frequency',
        'Lead time',
        'MTTR'
      ],
      correctAnswer: 2,
      explanation: 'Lead time measures the time from code commit to production deployment.',
      difficulty: 'medium',
      section: 'CI/CD Metrics',
      points: 1
    },
    {
      id: 'q12',
      type: 'mcq',
      question: 'What does MTTR stand for?',
      options: [
        'Mean Time To Release',
        'Mean Time To Recovery',
        'Maximum Time To Repair',
        'Minimum Testing Time Required'
      ],
      correctAnswer: 1,
      explanation: 'MTTR stands for Mean Time To Recovery - the average time to restore service after a failure.',
      difficulty: 'easy',
      section: 'DevOps Metrics',
      points: 1
    },
    {
      id: 'q13',
      type: 'mcq',
      question: 'In Agile Testing Quadrants, which quadrant is 100% automated?',
      options: [
        'Q1',
        'Q2',
        'Q3',
        'None are 100% automated'
      ],
      correctAnswer: 0,
      explanation: 'Q1 (unit tests, component tests) is typically 100% automated. Other quadrants have varying levels of automation.',
      difficulty: 'medium',
      section: 'Agile Testing Quadrants',
      points: 1
    },
    {
      id: 'q14',
      type: 'mcq',
      question: 'What is the target change failure rate in DevOps?',
      options: [
        '<5%',
        '<15%',
        '<25%',
        '<50%'
      ],
      correctAnswer: 1,
      explanation: 'Elite DevOps teams target a change failure rate of <15%.',
      difficulty: 'medium',
      section: 'DevOps Metrics',
      points: 1
    },
    {
      id: 'q15',
      type: 'mcq',
      question: 'Which testing type belongs in Q4 (Technology-facing, Critique)?',
      options: [
        'Unit tests',
        'Functional tests',
        'Performance tests',
        'Exploratory tests'
      ],
      correctAnswer: 2,
      explanation: 'Q4 includes performance, load, security, and scalability testing - technology-facing tests that critique the product.',
      difficulty: 'medium',
      section: 'Agile Testing Quadrants',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'truefalse',
      question: 'In Agile, testing is only the QA team\'s responsibility.',
      correctAnswer: false,
      explanation: 'Quality is everyone\'s responsibility in Agile - the whole team approach.',
      difficulty: 'easy',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'truefalse',
      question: 'The Test Pyramid recommends more UI tests than unit tests.',
      correctAnswer: false,
      explanation: 'The pyramid is inverted - more unit tests (60%) at the base, fewer UI tests (10%) at the top.',
      difficulty: 'easy',
      section: 'Test Automation Pyramid',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'truefalse',
      question: 'Continuous Deployment means automatically deploying to production after tests pass.',
      correctAnswer: true,
      explanation: 'Continuous Deployment automatically deploys to production when all tests pass. Continuous Delivery requires manual approval.',
      difficulty: 'medium',
      section: 'CI/CD',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'truefalse',
      question: 'Testing in production is always a bad practice.',
      correctAnswer: false,
      explanation: 'Testing in production is valid when done correctly using techniques like canary releases, feature flags, synthetic monitoring, and A/B testing.',
      difficulty: 'medium',
      section: 'DevOps',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'truefalse',
      question: 'Definition of Done should include testing criteria.',
      correctAnswer: true,
      explanation: 'DoD must include testing criteria such as all tests passed, code coverage met, and no critical defects.',
      difficulty: 'easy',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'truefalse',
      question: 'Blue-Green deployment requires two identical environments.',
      correctAnswer: true,
      explanation: 'Blue-Green deployment maintains two identical production environments to enable instant rollback.',
      difficulty: 'easy',
      section: 'DevOps',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'truefalse',
      question: 'In Agile, all testing happens at the end of the sprint.',
      correctAnswer: false,
      explanation: 'Testing happens continuously throughout the sprint - shift-left approach.',
      difficulty: 'easy',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'truefalse',
      question: 'DevSecOps means shifting security testing left in the pipeline.',
      correctAnswer: true,
      explanation: 'DevSecOps integrates security practices early in the development pipeline (shift-left security).',
      difficulty: 'medium',
      section: 'DevOps',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'shortanswer',
      question: 'Design a CI/CD pipeline for a microservices application. List the 5 main stages.',
      acceptableAnswers: ['Build, Unit Test, Integration Test, Deploy, Smoke Test', 'Commit, Build, Test, Deploy, Monitor'],
      keywords: ['build', 'test', 'deploy', 'integration', 'smoke'],
      explanation: 'Typical stages: 1) Code Commit, 2) Build & Unit Tests (10 min), 3) Integration Tests (20 min), 4) Deploy to Staging, 5) Smoke Tests, 6) Deploy to Production.',
      difficulty: 'hard',
      section: 'CI/CD',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'mcq',
      question: 'Your regression suite takes 8 hours. How would you optimize it for CI/CD?',
      options: [
        'Run all tests sequentially',
        'Parallel execution, test categorization, selective testing, remove obsolete tests',
        'Skip testing',
        'Run tests manually'
      ],
      correctAnswer: 1,
      explanation: 'Optimization strategies: parallel execution (4 agents = 75% reduction), test categorization (smoke first), selective testing (run only affected tests), remove obsolete/flaky tests.',
      difficulty: 'hard',
      section: 'CI/CD',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'shortanswer',
      question: 'Create a Definition of Done for a user story. List 5 criteria.',
      acceptableAnswers: ['Code complete, Unit tests passed, Code reviewed, Functional tests passed, No critical defects', 'Development done, Testing done, Review done, Documentation done, Acceptance criteria met'],
      keywords: ['code', 'tests', 'review', 'defects', 'acceptance'],
      explanation: 'DoD criteria: 1) Code complete and reviewed, 2) Unit tests passed (>80% coverage), 3) Functional tests passed, 4) No critical defects, 5) Acceptance criteria met, 6) Documentation updated.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'Explain how you would implement the Agile Testing Quadrants in a 2-week sprint.',
      options: [
        'Test everything at the end',
        'Q1 (unit tests) continuous, Q2 (functional) during development, Q3 (exploratory) mid-sprint, Q4 (performance) end of sprint',
        'Only Q1 and Q2',
        'Random testing'
      ],
      correctAnswer: 1,
      explanation: 'Sprint testing: Q1 (unit tests) - continuous with TDD, Q2 (functional/BDD) - as features develop, Q3 (exploratory/usability) - mid to late sprint, Q4 (performance/security) - end of sprint.',
      difficulty: 'hard',
      section: 'Agile Testing Quadrants',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'Compare Blue-Green deployment vs Canary release. When would you use Blue-Green?',
      options: [
        'For gradual rollout',
        'For instant rollback capability and zero-downtime deployment',
        'For testing in production',
        'Never use Blue-Green'
      ],
      correctAnswer: 1,
      explanation: 'Use Blue-Green for: instant rollback, zero-downtime deployment, complete environment switch. Use Canary for: gradual rollout, risk mitigation, testing with real users.',
      difficulty: 'hard',
      section: 'DevOps',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'Your team has 5 developers and 1 QA. How would you implement whole team testing?',
      options: [
        'QA does all testing',
        'Developers write unit tests, QA writes integration/E2E tests, pair testing, shared DoD',
        'No testing needed',
        'Hire more QA'
      ],
      correctAnswer: 1,
      explanation: 'Whole team approach: Developers write unit tests (Q1), QA guides test strategy and writes integration/E2E tests (Q2), pair testing sessions, shared Definition of Done, everyone reviews test results.',
      difficulty: 'hard',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'shortanswer',
      question: 'Design a testing strategy for production. Name 3 techniques.',
      acceptableAnswers: ['Synthetic monitoring, Feature flags, A/B testing', 'Canary release, Monitoring, Feature toggles', 'Production monitoring, Canary, Feature flags'],
      keywords: ['monitoring', 'canary', 'feature flags', 'synthetic', 'A/B'],
      explanation: 'Production testing strategy: 1) Synthetic monitoring (simulate user journeys), 2) Feature flags (gradual rollout, instant disable), 3) Canary releases (1-5% users first), 4) A/B testing (compare versions), 5) Real-time monitoring and alerting.',
      difficulty: 'hard',
      section: 'DevOps',
      points: 1,
      fullModeOnly: true
    }
  ]
};