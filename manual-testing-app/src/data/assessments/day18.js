export const day18Assessment = {
  id: 'day18',
  title: 'Day 18: Test Tools & Test Management Systems',
  description: 'Assessment covering Testing Tools, JIRA, TestRail, CI/CD, and Test Management',
  
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
      question: 'Which tool is the industry standard for bug tracking and project management?',
      options: [
        'Bugzilla',
        'Jira',
        'MantisBT',
        'GitHub Issues'
      ],
      correctAnswer: 1,
      explanation: 'Jira by Atlassian is the most widely used project management and bug tracking tool in the industry, supporting Agile methodologies and extensive integrations.',
      difficulty: 'easy',
      section: 'Testing Tools',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'What does CI/CD stand for?',
      options: [
        'Continuous Integration / Continuous Deployment',
        'Code Integration / Code Deployment',
        'Continuous Improvement / Continuous Development',
        'Central Integration / Central Deployment'
      ],
      correctAnswer: 0,
      explanation: 'CI/CD stands for Continuous Integration (automatically building and testing code) and Continuous Deployment (automatically deploying to production).',
      difficulty: 'easy',
      section: 'CI/CD',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'In Jira, what is JQL?',
      options: [
        'Jira Quality Language',
        'Jira Query Language',
        'Java Query Language',
        'JSON Query Language'
      ],
      correctAnswer: 1,
      explanation: 'JQL (Jira Query Language) is used for advanced filtering and searching of issues in Jira.',
      difficulty: 'medium',
      section: 'JIRA',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'Which is NOT a typical Jira bug lifecycle status?',
      options: [
        'Open',
        'In Progress',
        'Deployed',
        'Closed'
      ],
      correctAnswer: 2,
      explanation: '"Deployed" is not a standard bug status. Typical statuses are: Open, In Progress, In Review, Ready for Testing, Closed, Reopened.',
      difficulty: 'medium',
      section: 'JIRA',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'TestRail is primarily used for:',
      options: [
        'Bug tracking only',
        'Test case management',
        'Performance testing',
        'Code review'
      ],
      correctAnswer: 1,
      explanation: 'TestRail is a comprehensive test case management tool for organizing, managing, and tracking testing activities.',
      difficulty: 'easy',
      section: 'TestRail',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'In a CI/CD pipeline, tests should run:',
      options: [
        'Only before deployment',
        'Only after deployment',
        'Automatically on code commits',
        'Manually when QA is free'
      ],
      correctAnswer: 2,
      explanation: 'CI/CD pipelines automatically trigger tests on code commits to provide fast feedback and catch issues early.',
      difficulty: 'medium',
      section: 'CI/CD',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'Which tool is best for team chat and collaboration?',
      options: [
        'Jira',
        'TestRail',
        'Slack',
        'Jenkins'
      ],
      correctAnswer: 2,
      explanation: 'Slack is a popular team messaging and collaboration platform with channels, integrations, and real-time communication.',
      difficulty: 'easy',
      section: 'Collaboration Tools',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'Confluence is primarily used for:',
      options: [
        'Bug tracking',
        'Documentation and knowledge management',
        'Test execution',
        'Code deployment'
      ],
      correctAnswer: 1,
      explanation: 'Confluence by Atlassian is used for creating, organizing, and collaborating on documentation and knowledge bases.',
      difficulty: 'easy',
      section: 'Documentation Tools',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'Which CI/CD tool is open-source and most popular?',
      options: [
        'GitLab CI',
        'CircleCI',
        'Jenkins',
        'Azure Pipelines'
      ],
      correctAnswer: 2,
      explanation: 'Jenkins is the most popular open-source automation server for CI/CD, with extensive plugin ecosystem and community support.',
      difficulty: 'medium',
      section: 'CI/CD',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'In TestRail, what is a "Test Run"?',
      options: [
        'A single test case',
        'A collection of test cases to be executed',
        'An automated test script',
        'A bug report'
      ],
      correctAnswer: 1,
      explanation: 'A Test Run in TestRail is a collection of test cases grouped together for execution, typically for a specific release or sprint.',
      difficulty: 'medium',
      section: 'TestRail',
      points: 1
    },
    {
      id: 'q11',
      type: 'truefalse',
      question: 'Jira can only be used for bug tracking, not for Agile project management.',
      correctAnswer: false,
      explanation: 'Jira is a comprehensive project management tool that supports Agile methodologies (Scrum, Kanban), not just bug tracking.',
      difficulty: 'easy',
      section: 'JIRA',
      points: 1
    },
    {
      id: 'q12',
      type: 'truefalse',
      question: 'GitHub Actions can be used for CI/CD automation.',
      correctAnswer: true,
      explanation: 'GitHub Actions is a CI/CD tool integrated with GitHub that can automate workflows including testing and deployment.',
      difficulty: 'easy',
      section: 'CI/CD',
      points: 1
    },
    {
      id: 'q13',
      type: 'truefalse',
      question: 'All test management tools require integration with Jira.',
      correctAnswer: false,
      explanation: 'Many test management tools can work standalone. Jira integration is optional though commonly used.',
      difficulty: 'easy',
      section: 'Testing Tools',
      points: 1
    },
    {
      id: 'q14',
      type: 'truefalse',
      question: 'Slack notifications can be triggered from Jenkins builds.',
      correctAnswer: true,
      explanation: 'Jenkins has Slack integration that can send notifications about build status, test results, and other events.',
      difficulty: 'medium',
      section: 'Tool Integration',
      points: 1
    },
    {
      id: 'q15',
      type: 'truefalse',
      question: 'Zephyr is a standalone test management tool separate from Jira.',
      correctAnswer: false,
      explanation: 'Zephyr for Jira is a plugin/add-on that integrates directly into Jira. There\'s also Zephyr Scale (formerly Zephyr Enterprise), but the most common version is the Jira plugin.',
      difficulty: 'medium',
      section: 'Testing Tools',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'mcq',
      question: 'Which Jira field is used for advanced filtering and searching?',
      options: [
        'Summary',
        'Description',
        'JQL (Jira Query Language)',
        'Labels'
      ],
      correctAnswer: 2,
      explanation: 'JQL is a powerful query language for creating complex filters and searches in Jira, similar to SQL.',
      difficulty: 'medium',
      section: 'JIRA',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'mcq',
      question: 'What is the primary purpose of a Risk Register in testing?',
      options: [
        'Track test execution',
        'Document and manage identified risks',
        'Store test cases',
        'Generate reports'
      ],
      correctAnswer: 1,
      explanation: 'A Risk Register is a central repository for documenting, assessing, and tracking all identified risks throughout the project.',
      difficulty: 'medium',
      section: 'Test Management',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'mcq',
      question: 'Which tool is a Jira plugin for test management?',
      options: [
        'TestRail',
        'Zephyr',
        'qTest',
        'TestLink'
      ],
      correctAnswer: 1,
      explanation: 'Zephyr for Jira is a popular test management plugin that integrates directly into Jira, allowing test management alongside development issues.',
      difficulty: 'medium',
      section: 'Testing Tools',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'mcq',
      question: 'In Jenkins, what is a "Pipeline"?',
      options: [
        'A single test case',
        'A series of jobs linked together',
        'A bug report',
        'A test environment'
      ],
      correctAnswer: 1,
      explanation: 'A Jenkins Pipeline is a series of automated steps (jobs) that define the entire build, test, and deployment process.',
      difficulty: 'medium',
      section: 'CI/CD',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'mcq',
      question: 'Which is a free, open-source test management tool?',
      options: [
        'TestRail',
        'Zephyr Scale',
        'TestLink',
        'qTest'
      ],
      correctAnswer: 2,
      explanation: 'TestLink is a free, open-source test management tool, while TestRail, Zephyr Scale, and qTest are commercial products.',
      difficulty: 'medium',
      section: 'Testing Tools',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'shortanswer',
      question: 'You found a critical bug that blocks all testing. Write a JQL query to find all bugs with Priority = Blocker in project PROJ.',
      acceptableAnswers: ['project = PROJ AND priority = Blocker', 'project = PROJ AND priority = "Blocker"', 'priority = Blocker AND project = PROJ'],
      keywords: ['project', 'PROJ', 'priority', 'Blocker', 'AND'],
      explanation: 'JQL query: project = PROJ AND priority = Blocker. This finds all blocker priority issues in the PROJ project.',
      difficulty: 'hard',
      section: 'JIRA',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'shortanswer',
      question: 'In TestRail, where do you find the test execution progress for a sprint?',
      acceptableAnswers: ['Test Run', 'Test Run Dashboard', 'Test Run Summary', 'Test Results'],
      keywords: ['test', 'run', 'dashboard', 'summary'],
      explanation: 'Navigate to the Test Run for the specific sprint and view the Test Run Summary/Dashboard which shows execution progress, pass/fail counts, and completion percentage.',
      difficulty: 'medium',
      section: 'TestRail',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'mcq',
      question: 'Scenario: Developer says "I can\'t reproduce the bug you reported." What information should you add to the Jira ticket?',
      options: [
        'Just close the bug',
        'Video recording, detailed environment, console logs, exact steps, test data',
        'Only screenshots',
        'Escalate to manager'
      ],
      correctAnswer: 1,
      explanation: 'Add comprehensive evidence: video recording, detailed environment (browser, OS, version), console logs, HAR file, exact steps with screenshots, test data used, and offer to pair debug.',
      difficulty: 'hard',
      section: 'JIRA',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'mcq',
      question: 'Scenario: Your CI/CD pipeline fails at the "API Tests" stage. What should you investigate first?',
      options: [
        'Restart the pipeline',
        'Check build logs for specific test failures and error messages',
        'Skip the API tests',
        'Blame the developer'
      ],
      correctAnswer: 1,
      explanation: 'First check Jenkins/CI build logs to identify which specific tests failed, error messages, and failure reasons. Then investigate environment, recent changes, and data issues.',
      difficulty: 'hard',
      section: 'CI/CD',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'shortanswer',
      question: 'Write a JQL query to find all bugs related to "Login" feature reported in December 2025.',
      acceptableAnswers: ['project = PROJ AND type = Bug AND component = "Login" AND created >= 2025-12-01 AND created <= 2025-12-31', 'type = Bug AND text ~ "login" AND created >= 2025-12-01'],
      keywords: ['Bug', 'Login', 'created', '2025-12', 'AND'],
      explanation: 'JQL: project = PROJ AND type = Bug AND component = "Login" AND created >= 2025-12-01 AND created <= 2025-12-31. This filters bugs by type, component, and date range.',
      difficulty: 'hard',
      section: 'JIRA',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'mcq',
      question: 'Scenario: What are the benefits of TestRail-Jira integration?',
      options: [
        'Only bug linking',
        'Defect linking, requirements traceability, bi-directional sync, unified workflow',
        'Only test case storage',
        'No benefits'
      ],
      correctAnswer: 1,
      explanation: 'Integration provides: create Jira bugs from failed tests, link test cases to user stories, bi-directional status sync, requirements traceability, and unified workflow without tool switching.',
      difficulty: 'hard',
      section: 'Tool Integration',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'Scenario: You\'re setting up a Jenkins pipeline for regression testing. Tests take 2 hours. How can you optimize to ~30 minutes?',
      options: [
        'Skip tests',
        'Parallel execution on 4 agents, selective testing, caching dependencies',
        'Run fewer tests',
        'Increase timeout'
      ],
      correctAnswer: 1,
      explanation: 'Optimization strategies: parallel execution across multiple agents (4 agents = 75% reduction), selective test execution (run only affected tests), caching dependencies, and test categorization (smoke first).',
      difficulty: 'hard',
      section: 'CI/CD',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'Scenario: What\'s the difference between TestRail and Jira?',
      options: [
        'They are the same',
        'Jira = Project management & bug tracking, TestRail = Test case management',
        'TestRail is for bugs only',
        'Jira is only for developers'
      ],
      correctAnswer: 1,
      explanation: 'Jira manages overall project (sprints, bugs, stories), while TestRail specifically manages test cases and execution. They integrate to provide end-to-end visibility from requirements to testing to defects.',
      difficulty: 'medium',
      section: 'Testing Tools',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'Scenario: Your Slack channel is flooded with notifications. How to configure better?',
      options: [
        'Disable all notifications',
        'Create dedicated channels (#critical-alerts, #build-notifications), filter integrations, use threads',
        'Ignore Slack',
        'Send everything to one channel'
      ],
      correctAnswer: 1,
      explanation: 'Solution: Create structured channels (#critical-alerts for P0/Blocker, #build-notifications for CI/CD), configure integration filters (only failures), use threads for discussions, and set appropriate notification levels.',
      difficulty: 'hard',
      section: 'Collaboration Tools',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'mcq',
      question: 'Scenario: Manager asks: "Should we buy TestRail or use free tools?" What factors to consider?',
      options: [
        'Always buy paid tools',
        'Always use free tools',
        'Team size, budget, features needed, integrations, compliance, ROI',
        'Just pick randomly'
      ],
      correctAnswer: 2,
      explanation: 'Consider: team size (small <5 = free OK, large >10 = paid worthwhile), budget, required features, integration needs, compliance requirements, and calculate ROI (time saved vs cost).',
      difficulty: 'hard',
      section: 'Testing Tools',
      points: 1,
      fullModeOnly: true
    }
  ]
};
