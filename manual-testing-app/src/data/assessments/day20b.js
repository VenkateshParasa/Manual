export const day20bAssessment = {
  id: 'day20b',
  title: 'Day 20B: ISTQB Certification & Test Maturity',
  description: 'Assessment covering ISTQB Certification, TMMi, TPI NEXT, and Test Process Improvement',
  
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
      question: 'What does ISTQB stand for?',
      options: [
        'International Software Testing Quality Board',
        'International Software Testing Qualifications Board',
        'International System Testing Quality Board',
        'International Standards Testing Board'
      ],
      correctAnswer: 1,
      explanation: 'ISTQB stands for International Software Testing Qualifications Board.',
      difficulty: 'easy',
      section: 'ISTQB',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'How many questions are in the ISTQB Foundation Level exam?',
      options: [
        '30 questions',
        '40 questions',
        '50 questions',
        '60 questions'
      ],
      correctAnswer: 1,
      explanation: 'ISTQB Foundation Level exam has 40 questions.',
      difficulty: 'easy',
      section: 'ISTQB',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'What is the passing score for ISTQB Foundation Level?',
      options: [
        '60%',
        '65%',
        '70%',
        '75%'
      ],
      correctAnswer: 1,
      explanation: 'The passing score is 65% (26 out of 40 correct).',
      difficulty: 'easy',
      section: 'ISTQB',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'Which is NOT one of the seven testing principles in ISTQB?',
      options: [
        'Testing shows presence of defects',
        'Exhaustive testing is possible',
        'Early testing',
        'Defect clustering'
      ],
      correctAnswer: 1,
      explanation: 'The principle states that exhaustive testing is IMPOSSIBLE, not possible.',
      difficulty: 'medium',
      section: 'ISTQB Principles',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'How many maturity levels are in TMMi?',
      options: [
        '3 levels',
        '4 levels',
        '5 levels',
        '6 levels'
      ],
      correctAnswer: 2,
      explanation: 'TMMi has 5 maturity levels: Initial, Managed, Defined, Measured, Optimization.',
      difficulty: 'medium',
      section: 'TMMi',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'What is TMMi Level 1 called?',
      options: [
        'Managed',
        'Initial',
        'Defined',
        'Aware'
      ],
      correctAnswer: 1,
      explanation: 'Level 1 is called Initial (ad-hoc, chaotic testing).',
      difficulty: 'easy',
      section: 'TMMi',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'At which TMMi level is "Test Organization" introduced?',
      options: [
        'Level 2',
        'Level 3',
        'Level 4',
        'Level 5'
      ],
      correctAnswer: 1,
      explanation: 'Test Organization is a process area at TMMi Level 3 (Defined).',
      difficulty: 'medium',
      section: 'TMMi',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'How many process areas are there across all TMMi levels?',
      options: [
        '12',
        '14',
        '16',
        '18'
      ],
      correctAnswer: 2,
      explanation: 'TMMi has 16 process areas across all 5 levels.',
      difficulty: 'hard',
      section: 'TMMi',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'Which ISTQB Advanced Level certification focuses on black-box techniques?',
      options: [
        'Test Manager',
        'Test Analyst',
        'Technical Test Analyst',
        'Test Automation Engineer'
      ],
      correctAnswer: 1,
      explanation: 'Test Analyst focuses on black-box testing techniques and business-facing testing.',
      difficulty: 'medium',
      section: 'ISTQB Advanced',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'What does TPI NEXT stand for?',
      options: [
        'Test Process Integration',
        'Test Process Improvement',
        'Test Performance Index',
        'Test Planning Initiative'
      ],
      correctAnswer: 1,
      explanation: 'TPI NEXT stands for Test Process Improvement.',
      difficulty: 'medium',
      section: 'TPI NEXT',
      points: 1
    },
    {
      id: 'q11',
      type: 'mcq',
      question: 'How many key areas does TPI NEXT have?',
      options: [
        '12',
        '14',
        '16',
        '18'
      ],
      correctAnswer: 2,
      explanation: 'TPI NEXT has 16 key areas for test process improvement.',
      difficulty: 'medium',
      section: 'TPI NEXT',
      points: 1
    },
    {
      id: 'q12',
      type: 'mcq',
      question: 'Which TMMi level focuses on "Defect Prevention"?',
      options: [
        'Level 2',
        'Level 3',
        'Level 4',
        'Level 5'
      ],
      correctAnswer: 3,
      explanation: 'Defect Prevention is a process area at TMMi Level 5 (Optimization).',
      difficulty: 'medium',
      section: 'TMMi',
      points: 1
    },
    {
      id: 'q13',
      type: 'mcq',
      question: 'What is the typical timeline to move from TMMi Level 1 to Level 3?',
      options: [
        '6-9 months',
        '12-18 months',
        '24-36 months',
        '36-48 months'
      ],
      correctAnswer: 1,
      explanation: 'Moving from Level 1 to Level 3 typically takes 12-18 months with dedicated effort.',
      difficulty: 'medium',
      section: 'TMMi Implementation',
      points: 1
    },
    {
      id: 'q14',
      type: 'mcq',
      question: 'Which is NOT an ISTQB specialist certification?',
      options: [
        'Agile Tester',
        'Performance Tester',
        'Database Tester',
        'Security Tester'
      ],
      correctAnswer: 2,
      explanation: 'Database Tester is not an official ISTQB specialist certification. Others include Agile, Performance, Security, Mobile, Usability, and AI Testing.',
      difficulty: 'hard',
      section: 'ISTQB Certifications',
      points: 1
    },
    {
      id: 'q15',
      type: 'mcq',
      question: 'What does CTP stand for in process improvement?',
      options: [
        'Critical Testing Processes',
        'Continuous Testing Program',
        'Certified Test Professional',
        'Complete Test Plan'
      ],
      correctAnswer: 0,
      explanation: 'CTP stands for Critical Testing Processes in test process improvement.',
      difficulty: 'medium',
      section: 'Process Improvement',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'truefalse',
      question: 'ISTQB Foundation Level has prerequisites requiring 2 years of testing experience.',
      correctAnswer: false,
      explanation: 'No prerequisites required for ISTQB Foundation Level. Anyone can take it.',
      difficulty: 'easy',
      section: 'ISTQB',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'truefalse',
      question: 'The seven testing principles state that exhaustive testing is impossible.',
      correctAnswer: true,
      explanation: 'One of the seven principles is that exhaustive testing is impossible for any non-trivial application.',
      difficulty: 'easy',
      section: 'ISTQB Principles',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'truefalse',
      question: 'TMMi Level 2 is called "Defined".',
      correctAnswer: false,
      explanation: 'Level 2 is "Managed", Level 3 is "Defined".',
      difficulty: 'medium',
      section: 'TMMi',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'truefalse',
      question: 'Test Organization is a process area at TMMi Level 3.',
      correctAnswer: true,
      explanation: 'Test Organization is introduced at Level 3 (Defined) to establish formal test organization structure.',
      difficulty: 'medium',
      section: 'TMMi',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'truefalse',
      question: 'ISTQB certification is valid for 5 years and must be renewed.',
      correctAnswer: false,
      explanation: 'ISTQB certification is lifetime valid with no expiration or renewal required.',
      difficulty: 'medium',
      section: 'ISTQB',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'truefalse',
      question: 'TPI NEXT is more flexible than TMMi for targeted improvements.',
      correctAnswer: true,
      explanation: 'TPI NEXT allows organizations to improve specific areas without following a strict maturity level progression, making it more flexible than TMMi.',
      difficulty: 'medium',
      section: 'TPI NEXT',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'truefalse',
      question: 'TMMi Level 5 includes "Test Process Optimization" as a process area.',
      correctAnswer: true,
      explanation: 'Test Process Optimization is one of the process areas at TMMi Level 5 (Optimization).',
      difficulty: 'medium',
      section: 'TMMi',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'truefalse',
      question: 'ISTQB Advanced Level requires Foundation Level as a prerequisite.',
      correctAnswer: true,
      explanation: 'ISTQB Advanced Level requires Foundation Level certification plus 18 months of testing experience.',
      difficulty: 'medium',
      section: 'ISTQB Advanced',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'shortanswer',
      question: 'Create a 12-month roadmap to achieve TMMi Level 2 from Level 1. List the 4 quarters.',
      acceptableAnswers: ['Q1: Assessment, Q2: Planning, Q3: Implementation, Q4: Audit', 'Assessment, Planning, Implementation, Audit'],
      keywords: ['assessment', 'planning', 'implementation', 'audit', 'quarter'],
      explanation: 'Q1: Gap assessment and training, Q2: Test policy and strategy development, Q3: Process implementation and documentation, Q4: Internal audit and certification preparation.',
      difficulty: 'hard',
      section: 'TMMi Implementation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'mcq',
      question: 'Compare TMMi and TPI NEXT. When would you choose TMMi?',
      options: [
        'For quick, targeted improvements',
        'For comprehensive, structured maturity progression with certification',
        'For small teams only',
        'Never use TMMi'
      ],
      correctAnswer: 1,
      explanation: 'Choose TMMi for: comprehensive maturity model, certification goals, structured progression, large organizations. Choose TPI NEXT for: flexible improvements, specific area focus, no certification needed.',
      difficulty: 'hard',
      section: 'Process Improvement',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'shortanswer',
      question: 'Create a 6-week ISTQB Foundation Level study plan. What should Week 1 cover?',
      acceptableAnswers: ['Fundamentals of Testing', 'Chapter 1', 'Testing principles', 'Seven principles'],
      keywords: ['fundamentals', 'principles', 'chapter 1', 'testing'],
      explanation: 'Week 1: Fundamentals of Testing (Chapter 1) - Seven testing principles, test process, psychology of testing. Week 2: SDLC. Week 3: Static Testing. Week 4: Test Techniques. Week 5: Test Management. Week 6: Practice exams.',
      difficulty: 'medium',
      section: 'ISTQB Preparation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'What\'s the difference between ISTQB Test Analyst and Technical Test Analyst?',
      options: [
        'They are the same',
        'Test Analyst = black-box/business-facing, Technical Test Analyst = white-box/technology-facing',
        'Test Analyst is easier',
        'No difference'
      ],
      correctAnswer: 1,
      explanation: 'Test Analyst focuses on black-box techniques, business requirements, and functional testing. Technical Test Analyst focuses on white-box techniques, code-level testing, and non-functional testing.',
      difficulty: 'hard',
      section: 'ISTQB Advanced',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'shortanswer',
      question: 'Your company wants TMMi Level 3 certification. You\'re at Level 1. What\'s the first step?',
      acceptableAnswers: ['Gap assessment', 'Current state assessment', 'TMMi assessment', 'Evaluate current processes'],
      keywords: ['assessment', 'gap', 'evaluate', 'current'],
      explanation: 'First step: Conduct TMMi gap assessment to evaluate current state, identify gaps between Level 1 and Level 3, document findings, and create improvement roadmap.',
      difficulty: 'medium',
      section: 'TMMi Implementation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'shortanswer',
      question: 'List the seven ISTQB testing principles.',
      acceptableAnswers: ['Testing shows presence of defects, Exhaustive testing is impossible, Early testing, Defect clustering, Pesticide paradox, Testing is context dependent, Absence of errors fallacy'],
      keywords: ['presence', 'exhaustive', 'early', 'clustering', 'pesticide', 'context', 'absence'],
      explanation: '1) Testing shows presence of defects, 2) Exhaustive testing is impossible, 3) Early testing saves time and money, 4) Defect clustering, 5) Pesticide paradox, 6) Testing is context dependent, 7) Absence of errors fallacy.',
      difficulty: 'hard',
      section: 'ISTQB Principles',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'mcq',
      question: 'Design a TMMi improvement initiative for 50 developers and 10 testers. What\'s the estimated timeline?',
      options: [
        '3-6 months',
        '6-12 months',
        '12-24 months',
        '36-48 months'
      ],
      correctAnswer: 2,
      explanation: 'For a team of 60 people moving from Level 1 to Level 3: 12-24 months. Budget: $100K-200K (training, tools, consulting). Expected ROI: 20-30% improvement in defect detection, 15-20% reduction in testing time after 18 months.',
      difficulty: 'hard',
      section: 'TMMi Implementation',
      points: 1,
      fullModeOnly: true
    }
  ]
};