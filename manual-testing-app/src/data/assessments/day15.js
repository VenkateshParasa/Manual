export const day15Assessment = {
  id: 'day15',
  title: 'Day 15: Agile Testing & Scrum',
  description: 'Assessment covering Agile Methodology, Scrum Framework, Testing in Agile, and Agile Testing Quadrants',
  
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
      question: 'Which Agile Manifesto value emphasizes people over processes?',
      options: [
        'Working software over comprehensive documentation',
        'Individuals and interactions over processes and tools',
        'Customer collaboration over contract negotiation',
        'Responding to change over following a plan'
      ],
      correctAnswer: 1,
      explanation: 'This is the first value of the Agile Manifesto, emphasizing that people and communication matter more than rigid processes and tools.',
      difficulty: 'easy',
      section: 'Agile Manifesto',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'In Scrum, who is responsible for maximizing product value?',
      options: [
        'Scrum Master',
        'Development Team',
        'Product Owner',
        'Stakeholders'
      ],
      correctAnswer: 2,
      explanation: 'The Product Owner is responsible for maximizing product value by managing the Product Backlog, prioritizing features, and making trade-off decisions.',
      difficulty: 'easy',
      section: 'Scrum Framework',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'What is the recommended duration for a Sprint in Scrum?',
      options: [
        '1 week',
        '2-4 weeks',
        '1-3 months',
        'Varies widely'
      ],
      correctAnswer: 1,
      explanation: 'Scrum recommends sprints of 2-4 weeks duration. This provides a balance between flexibility and planning stability.',
      difficulty: 'easy',
      section: 'Scrum Framework',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'Which Agile Testing Quadrant contains unit tests?',
      options: [
        'Q1 - Technology facing, guide development',
        'Q2 - Business facing, guide development',
        'Q3 - Business facing, critique product',
        'Q4 - Technology facing, critique product'
      ],
      correctAnswer: 0,
      explanation: 'Unit tests are technology-facing (code level) and guide development (written before/during coding). They belong in Quadrant 1.',
      difficulty: 'medium',
      section: 'Agile Testing Quadrants',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'What does BDD stand for?',
      options: [
        'Bug Driven Development',
        'Behavior Driven Development',
        'Business Domain Development',
        'Build Deploy Deliver'
      ],
      correctAnswer: 1,
      explanation: 'BDD (Behavior Driven Development) uses business-readable language to describe system behavior, often with GIVEN-WHEN-THEN format.',
      difficulty: 'easy',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'In the Three Amigos meeting, who are the three roles?',
      options: [
        'Developer, Tester, Manager',
        'PO, Scrum Master, Developer',
        'PO, Developer, Tester',
        'Customer, Developer, Tester'
      ],
      correctAnswer: 2,
      explanation: 'Three Amigos meetings bring together Product Owner (business perspective), Developer (technical perspective), and Tester (quality perspective) to discuss user stories.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'What is the purpose of Sprint Retrospective?',
      options: [
        'Demonstrate working software',
        'Plan next sprint',
        'Inspect and adapt the process',
        'Review product backlog'
      ],
      correctAnswer: 2,
      explanation: 'Sprint Retrospective is for the team to reflect on their process and identify improvements. It\'s about continuous improvement.',
      difficulty: 'medium',
      section: 'Scrum Framework',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'What is the maximum recommended time for Daily Standup?',
      options: [
        '10 minutes',
        '15 minutes',
        '30 minutes',
        '1 hour'
      ],
      correctAnswer: 1,
      explanation: 'Daily Standup is strictly time-boxed to 15 minutes to keep it focused and efficient.',
      difficulty: 'easy',
      section: 'Scrum Framework',
      points: 1
    },
    {
      id: 'q9',
      type: 'truefalse',
      question: 'In Agile, quality is only the tester\'s responsibility.',
      correctAnswer: false,
      explanation: 'In Agile, quality is everyone\'s responsibility - the whole team approach. Developers, testers, PO, and Scrum Master all contribute to quality.',
      difficulty: 'easy',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q10',
      type: 'truefalse',
      question: 'The Product Owner can change acceptance criteria mid-sprint without team discussion.',
      correctAnswer: false,
      explanation: 'While Agile embraces change, mid-sprint changes should be discussed with the team to assess impact on sprint goal and capacity.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q11',
      type: 'truefalse',
      question: 'Definition of Done must be met for a story to be considered complete.',
      correctAnswer: true,
      explanation: 'Definition of Done is a commitment. If DoD criteria are not met, the story is not complete, regardless of time spent.',
      difficulty: 'easy',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q12',
      type: 'truefalse',
      question: 'Exploratory testing belongs in Quadrant 3 (Business facing, critique product).',
      correctAnswer: true,
      explanation: 'Exploratory testing is business-facing (user perspective) and critiques the product (evaluates existing features), placing it in Q3.',
      difficulty: 'medium',
      section: 'Agile Testing Quadrants',
      points: 1
    },
    {
      id: 'q13',
      type: 'mcq',
      question: 'Scenario: You\'re in Sprint Planning and the Product Owner presents a user story with vague acceptance criteria. What should you do?',
      options: [
        'Accept the story and figure it out during the sprint',
        'Ask clarifying questions and work with PO to refine criteria',
        'Reject the story entirely',
        'Accept it but mark it as risky'
      ],
      correctAnswer: 1,
      explanation: 'In Agile, clarity is essential. Collaborate with PO to define clear, testable acceptance criteria before committing to the sprint.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q14',
      type: 'mcq',
      question: 'Scenario: A developer says a feature is "done" but you haven\'t tested it yet. According to Agile principles, is it done?',
      options: [
        'Yes, if the developer says so',
        'No, it must meet Definition of Done which includes testing',
        'Yes, testing can happen later',
        'It depends on the sprint timeline'
      ],
      correctAnswer: 1,
      explanation: '"Done" means meeting all DoD criteria, which typically includes development, testing, code review, and documentation.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1
    },
    {
      id: 'q15',
      type: 'mcq',
      question: 'Scenario: You need to classify "Load Testing" into an Agile Testing Quadrant. Which quadrant does it belong to?',
      options: [
        'Q1 - Technology facing, guide development',
        'Q2 - Business facing, guide development',
        'Q3 - Business facing, critique product',
        'Q4 - Technology facing, critique product'
      ],
      correctAnswer: 3,
      explanation: 'Load testing is technology-facing (performance metrics) and critiques the product (evaluates non-functional requirements), placing it in Q4.',
      difficulty: 'medium',
      section: 'Agile Testing Quadrants',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'mcq',
      question: 'What format is commonly used for writing acceptance criteria in Agile?',
      options: [
        'Use Case format',
        'GIVEN-WHEN-THEN format',
        'Waterfall requirements format',
        'Technical specification format'
      ],
      correctAnswer: 1,
      explanation: 'GIVEN-WHEN-THEN (BDD format) is commonly used for acceptance criteria: GIVEN [context] WHEN [action] THEN [outcome].',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'mcq',
      question: 'In the Test Automation Pyramid, which layer should have the most tests?',
      options: [
        'UI Tests',
        'Integration Tests',
        'Unit Tests',
        'Manual Tests'
      ],
      correctAnswer: 2,
      explanation: 'Test Automation Pyramid recommends 60% unit tests (fast, many), 30% integration tests, 10% UI tests (slow, few).',
      difficulty: 'medium',
      section: 'Test Automation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'mcq',
      question: 'What does "shift-left testing" mean?',
      options: [
        'Moving testers to a different team',
        'Testing earlier in the development lifecycle',
        'Testing only on the left side of the screen',
        'Reducing testing effort'
      ],
      correctAnswer: 1,
      explanation: 'Shift-left means moving testing activities earlier (left on timeline) to find defects sooner when they\'re cheaper to fix.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'mcq',
      question: 'Which Scrum ceremony is time-boxed to 15 minutes?',
      options: [
        'Sprint Planning',
        'Daily Standup',
        'Sprint Review',
        'Sprint Retrospective'
      ],
      correctAnswer: 1,
      explanation: 'Daily Standup is strictly time-boxed to 15 minutes. Other ceremonies have longer durations based on sprint length.',
      difficulty: 'easy',
      section: 'Scrum Framework',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'mcq',
      question: 'What is the primary focus of Quadrant 2 (Q2) testing?',
      options: [
        'Unit and component tests',
        'Functional tests and BDD scenarios',
        'Exploratory and usability testing',
        'Performance and security testing'
      ],
      correctAnswer: 1,
      explanation: 'Q2 (Business facing, guide development) focuses on functional tests, story tests, and BDD scenarios that specify expected behavior.',
      difficulty: 'medium',
      section: 'Agile Testing Quadrants',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'mcq',
      question: 'Who facilitates Scrum ceremonies?',
      options: [
        'Product Owner',
        'Scrum Master',
        'Development Team',
        'Project Manager'
      ],
      correctAnswer: 1,
      explanation: 'The Scrum Master facilitates all Scrum ceremonies (Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective).',
      difficulty: 'easy',
      section: 'Scrum Framework',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'mcq',
      question: 'What does INVEST stand for in user story criteria?',
      options: [
        'Independent, Negotiable, Valuable, Estimable, Small, Testable',
        'Integrated, New, Verified, Estimated, Structured, Tested',
        'Important, Necessary, Valuable, Essential, Significant, Timely',
        'Innovative, Notable, Verified, Executable, Scalable, Trackable'
      ],
      correctAnswer: 0,
      explanation: 'INVEST criteria ensure user stories are well-formed: Independent, Negotiable, Valuable, Estimable, Small, Testable.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'truefalse',
      question: 'In Agile, working software is more important than comprehensive documentation.',
      correctAnswer: true,
      explanation: 'Second Agile Manifesto value: "Working software over comprehensive documentation." Documentation is important but secondary to working software.',
      difficulty: 'easy',
      section: 'Agile Manifesto',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'truefalse',
      question: 'The Scrum Master assigns tasks to team members.',
      correctAnswer: false,
      explanation: 'Scrum Master does NOT assign tasks. The Development Team is self-organizing and members choose their own tasks.',
      difficulty: 'medium',
      section: 'Scrum Framework',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'truefalse',
      question: 'Acceptance criteria should cover both positive and negative scenarios.',
      correctAnswer: true,
      explanation: 'Good acceptance criteria cover both happy paths (positive scenarios) and error cases (negative scenarios) plus edge cases.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'truefalse',
      question: 'In the Test Automation Pyramid, UI tests should comprise 60% of all tests.',
      correctAnswer: false,
      explanation: 'In the Test Automation Pyramid, UI tests should be only 10%, not 60%. Unit tests should be 60%, integration 30%, UI 10%.',
      difficulty: 'medium',
      section: 'Test Automation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'Scenario: You find a critical bug 2 days before sprint end. The developer says there\'s no time to fix it. What should you do?',
      options: [
        'Accept it and move on',
        'Log the bug for next sprint',
        'Discuss with team and PO to decide (remove feature or extend sprint)',
        'Fix it yourself'
      ],
      correctAnswer: 2,
      explanation: 'In Scrum, the team decides together. Options include removing the feature from increment, prioritizing the fix, or (rarely) extending sprint.',
      difficulty: 'hard',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'Scenario: Your team spends 80% of testing effort on manual UI testing and 20% on unit tests. What\'s the problem?',
      options: [
        'Perfect distribution',
        'Inverted Test Automation Pyramid (Ice Cream Cone anti-pattern)',
        'Too much unit testing',
        'Not enough manual testing'
      ],
      correctAnswer: 1,
      explanation: 'This is the Ice Cream Cone anti-pattern - too much slow, brittle UI testing and too few fast unit tests. Should be inverted.',
      difficulty: 'hard',
      section: 'Test Automation',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'Scenario: During Sprint Review, stakeholders request a major new feature. What happens next?',
      options: [
        'Add it to current sprint immediately',
        'Product Owner adds it to Product Backlog for prioritization',
        'Reject it as out of scope',
        'Start a new sprint for this feature'
      ],
      correctAnswer: 1,
      explanation: 'New requests go to Product Backlog where PO prioritizes them. They may be included in future sprints based on priority.',
      difficulty: 'medium',
      section: 'Scrum Framework',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'mcq',
      question: 'Scenario: You\'re writing a user story for password reset. Which format is correct?',
      options: [
        'The system shall allow password reset via email',
        'As a user, I want to reset my password via email, so that I can regain access to my account',
        'Password reset feature needed',
        'Implement password reset functionality'
      ],
      correctAnswer: 1,
      explanation: 'Correct user story format: "As a [role], I want [feature], so that [benefit]." This format focuses on user value.',
      difficulty: 'medium',
      section: 'Agile Testing',
      points: 1,
      fullModeOnly: true
    }
  ]
};
