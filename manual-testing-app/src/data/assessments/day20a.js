export const day20aAssessment = {
  id: 'day20a',
  title: 'Day 20A: Quality Standards & ISO Frameworks',
  description: 'Assessment covering ISO/IEC 29119, ISO 25010, Quality Standards, and Compliance',
  
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
      question: 'What is the primary purpose of quality standards in software testing?',
      options: [
        'To increase project costs',
        'To provide consistency, quality assurance, and compliance',
        'To slow down development',
        'To replace testing processes'
      ],
      correctAnswer: 1,
      explanation: 'Standards ensure consistent processes, proven practices, and regulatory compliance.',
      difficulty: 'easy',
      section: 'Quality Standards',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'Which organization maintains the ISO/IEC 29119 standard?',
      options: [
        'ISTQB',
        'IEEE',
        'ISO/IEC Joint Technical Committee',
        'ANSI'
      ],
      correctAnswer: 2,
      explanation: 'ISO/IEC JTC maintains the 29119 standard.',
      difficulty: 'medium',
      section: 'ISO Standards',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'How many parts does ISO/IEC 29119 consist of?',
      options: [
        '3 parts',
        '4 parts',
        '5 parts',
        '6 parts'
      ],
      correctAnswer: 2,
      explanation: 'Parts: Concepts, Processes, Documentation, Techniques, Keyword-Driven.',
      difficulty: 'medium',
      section: 'ISO 29119',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'What does ISO/IEC 29119 Part 1 cover?',
      options: [
        'Test Processes',
        'Concepts and Definitions',
        'Test Documentation',
        'Test Techniques'
      ],
      correctAnswer: 1,
      explanation: 'Part 1 provides common vocabulary for testing.',
      difficulty: 'easy',
      section: 'ISO 29119',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'Which is NOT one of the three process levels in ISO 29119 Part 2?',
      options: [
        'Organizational Test Process',
        'Test Management Process',
        'Dynamic Test Process',
        'Static Test Process'
      ],
      correctAnswer: 3,
      explanation: 'The three levels are: Organizational, Management, and Dynamic.',
      difficulty: 'medium',
      section: 'ISO 29119',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'How many product quality characteristics are defined in ISO/IEC 25010?',
      options: [
        '5',
        '6',
        '7',
        '8'
      ],
      correctAnswer: 3,
      explanation: 'Functional Suitability, Performance, Compatibility, Usability, Reliability, Security, Maintainability, Portability.',
      difficulty: 'medium',
      section: 'ISO 25010',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'Which ISO 25010 characteristic focuses on protecting information and data?',
      options: [
        'Reliability',
        'Security',
        'Maintainability',
        'Portability'
      ],
      correctAnswer: 1,
      explanation: 'Security characteristic focuses on protecting information and data.',
      difficulty: 'easy',
      section: 'ISO 25010',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'What is the formula for calculating defect density?',
      options: [
        '(Total Defects / Lines of Code) × 100',
        '(Total Defects / Lines of Code) × 1000',
        '(Critical Defects / Total Defects) × 100',
        '(Defects Found / Test Cases) × 100'
      ],
      correctAnswer: 1,
      explanation: 'Defect density is typically measured per 1000 lines of code.',
      difficulty: 'medium',
      section: 'Quality Metrics',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'Which compliance level indicates formal adoption with consistent application?',
      options: [
        'Level 1: Aware',
        'Level 2: Partially Compliant',
        'Level 3: Compliant',
        'Level 4: Certified'
      ],
      correctAnswer: 2,
      explanation: 'Level 3 indicates formal adoption with consistent application.',
      difficulty: 'medium',
      section: 'Compliance',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'What is the typical ROI timeline for ISO 29119 implementation?',
      options: [
        '3-6 months',
        '6-12 months',
        '12-18 months',
        '24-36 months'
      ],
      correctAnswer: 2,
      explanation: 'ROI typically becomes positive after 12-18 months.',
      difficulty: 'medium',
      section: 'ISO Implementation',
      points: 1
    },
    {
      id: 'q11',
      type: 'mcq',
      question: 'Which is a mandatory section in an ISO 29119-3 Test Plan?',
      options: [
        'Test Automation Strategy',
        'Pass/Fail Criteria',
        'Performance Benchmarks',
        'Code Review Process'
      ],
      correctAnswer: 1,
      explanation: 'Pass/Fail Criteria is one of the 15 mandatory sections.',
      difficulty: 'medium',
      section: 'ISO 29119',
      points: 1
    },
    {
      id: 'q12',
      type: 'mcq',
      question: 'What does ISO 25010\'s "Functional Suitability" characteristic measure?',
      options: [
        'System performance',
        'Degree to which product provides functions that meet stated needs',
        'Code maintainability',
        'System security'
      ],
      correctAnswer: 1,
      explanation: 'Functional Suitability measures if functions meet requirements.',
      difficulty: 'medium',
      section: 'ISO 25010',
      points: 1
    },
    {
      id: 'q13',
      type: 'mcq',
      question: 'Which test technique category includes Equivalence Partitioning?',
      options: [
        'Structure-Based (White-Box)',
        'Specification-Based (Black-Box)',
        'Experience-Based',
        'Risk-Based'
      ],
      correctAnswer: 1,
      explanation: 'EP is a black-box technique.',
      difficulty: 'easy',
      section: 'Test Techniques',
      points: 1
    },
    {
      id: 'q14',
      type: 'mcq',
      question: 'What is the purpose of ISO 29119 Part 5?',
      options: [
        'Test Processes',
        'Test Documentation',
        'Keyword-Driven Testing',
        'Test Metrics'
      ],
      correctAnswer: 2,
      explanation: 'Part 5 standardizes keyword-driven test approach.',
      difficulty: 'medium',
      section: 'ISO 29119',
      points: 1
    },
    {
      id: 'q15',
      type: 'mcq',
      question: 'Which ISO 25010 sub-characteristic measures response times and throughput?',
      options: [
        'Resource Utilization',
        'Capacity',
        'Time Behavior',
        'Maturity'
      ],
      correctAnswer: 2,
      explanation: 'Time Behavior sub-characteristic measures response times and throughput.',
      difficulty: 'medium',
      section: 'ISO 25010',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'truefalse',
      question: 'ISO/IEC 29119 is mandatory for all software projects.',
      correctAnswer: false,
      explanation: 'ISO 29119 is not mandatory for all projects; adoption depends on industry, size, and requirements.',
      difficulty: 'easy',
      section: 'ISO Standards',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'truefalse',
      question: 'Quality standards eliminate the need for testing.',
      correctAnswer: false,
      explanation: 'Standards provide framework and best practices but don\'t eliminate the need for actual testing.',
      difficulty: 'easy',
      section: 'Quality Standards',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'truefalse',
      question: 'ISO 25010 replaced ISO 9126 in 2011.',
      correctAnswer: true,
      explanation: 'ISO 25010 was published in 2011 as the replacement for ISO 9126.',
      difficulty: 'medium',
      section: 'ISO 25010',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'truefalse',
      question: 'Equivalence Partitioning is classified as a white-box technique in ISO 29119-4.',
      correctAnswer: false,
      explanation: 'Equivalence Partitioning is a black-box (specification-based) technique.',
      difficulty: 'medium',
      section: 'Test Techniques',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'truefalse',
      question: 'An Organizational Test Policy applies to the entire organization.',
      correctAnswer: true,
      explanation: 'Organizational Test Policy applies to the entire organization.',
      difficulty: 'easy',
      section: 'ISO 29119',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'truefalse',
      question: 'ISO 29119 Part 3 provides templates for test documentation.',
      correctAnswer: true,
      explanation: 'Part 3 provides templates for test plans, test cases, and incident reports.',
      difficulty: 'easy',
      section: 'ISO 29119',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'truefalse',
      question: '100% code coverage guarantees zero defects according to ISO standards.',
      correctAnswer: false,
      explanation: '100% coverage doesn\'t guarantee zero defects; it only means all code was executed.',
      difficulty: 'medium',
      section: 'Quality Metrics',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'truefalse',
      question: 'Small startups (<5 people) must adopt ISO standards immediately.',
      correctAnswer: false,
      explanation: 'Small startups may skip standards initially and adopt them as they mature.',
      difficulty: 'easy',
      section: 'ISO Implementation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'shortanswer',
      question: 'List the 4-year progression from awareness to ISO 29119 certification.',
      acceptableAnswers: ['Year 1: Awareness, Year 2: Implementation, Year 3: Preparation, Year 4: Certification', 'Awareness, Implementation, Preparation, Certification'],
      keywords: ['awareness', 'implementation', 'preparation', 'certification', 'year'],
      explanation: 'Year 1: Awareness & Assessment, Year 2: Organization-Wide Implementation, Year 3: Certification Preparation, Year 4: Certification & Maintenance.',
      difficulty: 'hard',
      section: 'ISO Implementation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'shortanswer',
      question: 'Name 3 key sections that must be in an Organizational Test Policy.',
      acceptableAnswers: ['Scope, Principles, Requirements', 'Scope, Testing Principles, Process Requirements', 'Scope, Roles, Compliance'],
      keywords: ['scope', 'principles', 'requirements', 'roles', 'compliance'],
      explanation: 'Key sections: 1) Scope (what it applies to), 2) Testing Principles (quality is everyone\'s responsibility), 3) Process Requirements (test plans, coverage targets, defect tracking).',
      difficulty: 'hard',
      section: 'ISO 29119',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'shortanswer',
      question: 'For online banking, which ISO 25010 characteristic is MOST critical?',
      acceptableAnswers: ['Security', 'Reliability', 'Security and Reliability'],
      keywords: ['security', 'reliability'],
      explanation: 'Security is MOST critical for online banking (data encryption, authentication). Reliability is also critical (99.9% uptime). Both are essential for financial applications.',
      difficulty: 'medium',
      section: 'ISO 25010',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'shortanswer',
      question: 'List 5 mandatory sections in an ISO 29119-3 Test Plan.',
      acceptableAnswers: ['Test Plan Identifier, Test Items, Features to be Tested, Pass/Fail Criteria, Test Deliverables', 'Identifier, Items, Features, Criteria, Deliverables'],
      keywords: ['identifier', 'items', 'features', 'criteria', 'deliverables'],
      explanation: '5 mandatory sections: 1) Test Plan Identifier, 2) Test Items, 3) Features to be Tested, 4) Pass/Fail Criteria, 5) Test Deliverables.',
      difficulty: 'hard',
      section: 'ISO 29119',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'Explain the difference between the three ISO 29119 process levels.',
      options: [
        'All are the same',
        'Organizational (entire org policy), Management (project planning), Dynamic (test execution)',
        'Only one level exists',
        'They are independent'
      ],
      correctAnswer: 1,
      explanation: 'Organizational (entire organization, high-level policy), Management (individual project, planning and control), Dynamic (test execution, design and report).',
      difficulty: 'hard',
      section: 'ISO 29119',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'A project has 85% code coverage, 2.5 defects per 1000 LOC, 95% DRE. Using ISO 25010, what needs improvement?',
      options: [
        'Everything is perfect',
        'Reduce defect density to <2.0 per 1000 LOC',
        'Reduce code coverage',
        'Reduce DRE'
      ],
      correctAnswer: 1,
      explanation: 'Maintainability (85% coverage) is good. Reliability needs improvement (defect density 2.5 vs target <2.0). Functional Suitability (95% DRE) is good. Focus on reducing defect density through code reviews and static analysis.',
      difficulty: 'hard',
      section: 'Quality Assessment',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'shortanswer',
      question: 'In an ISO 29119-3 Test Incident Report for a critical payment bug, what priority should be assigned?',
      acceptableAnswers: ['Critical', 'P0', 'High', 'Blocker'],
      keywords: ['critical', 'p0', 'high', 'blocker'],
      explanation: 'Critical (P0) priority for payment processing failure. Include: Incident ID, Summary, Priority (Critical), Severity (High), Description, Steps to Reproduce, Expected vs Actual, Environment, Impact Analysis, Frequency, Workaround, Attachments, Assignment.',
      difficulty: 'medium',
      section: 'ISO 29119',
      points: 1,
      fullModeOnly: true
    }
  ]
};