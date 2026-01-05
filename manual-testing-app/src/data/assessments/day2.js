export default {
  title: "Day 2: Testing Levels & Types Assessment",
  passingScore: 70,
  timeLimit: 45,
  modes: {
    quick: {
      title: "Quick Assessment (10 questions)",
      timeLimit: 15,
      description: "A quick 15-minute assessment covering key concepts"
    },
    full: {
      title: "Full Assessment (35 questions)",
      timeLimit: 45,
      description: "Comprehensive 45-minute assessment covering all topics in depth"
    }
  },
  sections: [
    {
      id: 'section-a',
      title: 'Section A: Multiple Choice Questions',
      description: 'Choose the best answer for each question',
      questions: [
        {
          id: 'q1',
          type: 'mcq',
          question: 'Which testing level is typically performed by developers?',
          options: [
            'System Testing',
            'Unit Testing',
            'Acceptance Testing',
            'Integration Testing'
          ],
          correctAnswer: 1,
          explanation: 'Unit Testing is typically performed by developers to test individual components or functions.',
          points: 5
        },
        {
          id: 'q2',
          type: 'mcq',
          question: 'What is the primary purpose of smoke testing?',
          options: [
            'Detailed feature testing',
            'Build verification - check if critical features work',
            'Performance testing',
            'Security testing'
          ],
          correctAnswer: 1,
          explanation: 'Smoke testing is a build verification test to quickly check if the critical features of the application work before detailed testing.',
          points: 5
        },
        {
          id: 'q3',
          type: 'mcq',
          question: 'In which integration approach are all modules integrated simultaneously?',
          options: [
            'Top-Down',
            'Bottom-Up',
            'Big Bang',
            'Sandwich'
          ],
          correctAnswer: 2,
          explanation: 'Big Bang integration integrates all modules at once and tests them as a whole.',
          points: 5
        },
        {
          id: 'q4',
          type: 'mcq',
          question: 'What is the main focus of System Testing?',
          options: [
            'Individual components',
            'Module interfaces',
            'Complete integrated system',
            'User acceptance'
          ],
          correctAnswer: 2,
          explanation: 'System testing focuses on testing the complete integrated system as a whole.',
          points: 5
        },
        {
          id: 'q5',
          type: 'mcq',
          question: 'Which testing type verifies that new changes have not broken existing functionality?',
          options: [
            'Smoke Testing',
            'Sanity Testing',
            'Regression Testing',
            'Re-testing'
          ],
          correctAnswer: 2,
          explanation: 'Regression testing ensures that new changes have not broken existing functionality.',
          points: 5
        }
      ]
    },
    {
      id: 'section-b',
      title: 'Section B: True/False Questions',
      description: 'Determine whether each statement is true or false',
      questions: [
        {
          id: 'q6',
          type: 'truefalse',
          question: 'Unit testing is primarily performed by QA testers.',
          correctAnswer: false,
          explanation: 'False. Unit testing is primarily performed by developers, not QA testers.',
          points: 5
        },
        {
          id: 'q7',
          type: 'truefalse',
          question: 'Regression testing should be performed after every code change.',
          correctAnswer: true,
          explanation: 'True. Regression testing should be performed after code changes to ensure no new bugs are introduced.',
          points: 5
        }
      ]
    },
    {
      id: 'section-c',
      title: 'Section C: Fill in the Blanks & Short Answer',
      description: 'Complete the statements and provide detailed answers',
      questions: [
        {
          id: 'q8',
          type: 'fillblank',
          question: 'What does UAT stand for?',
          correctAnswer: 'User Acceptance Testing',
          acceptableAnswers: ['User Acceptance Testing', 'user acceptance testing', 'UAT'],
          caseSensitive: false,
          explanation: 'UAT stands for User Acceptance Testing, which is performed by end users to validate the system meets their needs.',
          points: 5
        },
        {
          id: 'q9',
          type: 'fillblank',
          question: 'In Top-Down integration, _____ are used to simulate lower-level modules.',
          correctAnswer: 'stubs',
          acceptableAnswers: ['stubs', 'stub', 'Stubs'],
          caseSensitive: false,
          explanation: 'Top-Down integration uses stubs to simulate lower-level modules that are not yet developed.',
          points: 5
        },
        {
          id: 'q10',
          type: 'shortanswer',
          question: 'Name three types of performance testing.',
          sampleAnswer: 'Load testing, stress testing, and endurance testing',
          keywords: ['load', 'stress', 'endurance', 'spike', 'performance', 'soak'],
          minKeywords: 2,
          explanation: 'Performance testing types include: Load Testing (expected load), Stress Testing (beyond capacity), Endurance Testing (long duration), and Spike Testing (sudden load increase).',
          points: 10
        }
      ]
    },
    {
      id: 'section-a-full',
      title: 'Section A (Full): Additional MCQ Questions',
      description: 'Extended multiple choice questions for comprehensive assessment',
      fullModeOnly: true,
      questions: [
        {
          id: 'q11',
          type: 'mcq',
          question: 'What does UAT stand for?',
          options: [
            'Unit Acceptance Testing',
            'User Acceptance Testing',
            'Universal Application Testing',
            'Unified Automated Testing'
          ],
          correctAnswer: 1,
          explanation: 'UAT stands for User Acceptance Testing, performed by end users to validate the system.',
          points: 3
        },
        {
          id: 'q12',
          type: 'mcq',
          question: 'Which integration approach uses stubs?',
          options: [
            'Bottom-Up',
            'Top-Down',
            'Big Bang',
            'None of the above'
          ],
          correctAnswer: 1,
          explanation: 'Top-Down integration uses stubs to simulate lower-level modules not yet developed.',
          points: 3
        },
        {
          id: 'q13',
          type: 'mcq',
          question: 'What is the difference between smoke and sanity testing?',
          options: [
            'Smoke is wide & shallow, Sanity is narrow & deep',
            'Smoke is narrow & deep, Sanity is wide & shallow',
            'They are the same',
            'Smoke is automated, Sanity is manual'
          ],
          correctAnswer: 0,
          explanation: 'Smoke testing covers many features briefly (wide & shallow), while Sanity testing focuses deeply on specific areas (narrow & deep).',
          points: 3
        },
        {
          id: 'q14',
          type: 'mcq',
          question: 'Which testing level is performed by end users?',
          options: [
            'Unit Testing',
            'Integration Testing',
            'System Testing',
            'Acceptance Testing'
          ],
          correctAnswer: 3,
          explanation: 'Acceptance Testing (UAT) is performed by end users to validate the system meets their needs.',
          points: 3
        },
        {
          id: 'q15',
          type: 'mcq',
          question: 'What is re-testing?',
          options: [
            'Testing the entire application again',
            'Testing to verify a specific bug fix',
            'Testing after code changes',
            'Testing with new test cases'
          ],
          correctAnswer: 1,
          explanation: 'Re-testing (confirmation testing) verifies that a specific bug has been fixed correctly.',
          points: 3
        },
        {
          id: 'q16',
          type: 'mcq',
          question: 'Which non-functional testing type measures system performance under load?',
          options: [
            'Security Testing',
            'Usability Testing',
            'Performance Testing',
            'Compatibility Testing'
          ],
          correctAnswer: 2,
          explanation: 'Performance Testing measures system behavior, response time, and stability under various load conditions.',
          points: 3
        },
        {
          id: 'q17',
          type: 'mcq',
          question: 'What is the purpose of Alpha Testing?',
          options: [
            'Testing by end users',
            'Internal testing before external release',
            'Testing in production',
            'Automated testing'
          ],
          correctAnswer: 1,
          explanation: 'Alpha testing is internal testing performed by company employees before release to external users.',
          points: 3
        },
        {
          id: 'q18',
          type: 'mcq',
          question: 'Which integration approach uses drivers?',
          options: [
            'Top-Down',
            'Bottom-Up',
            'Big Bang',
            'Sandwich'
          ],
          correctAnswer: 1,
          explanation: 'Bottom-Up integration uses drivers to simulate higher-level modules and call lower-level modules.',
          points: 3
        },
        {
          id: 'q19',
          type: 'mcq',
          question: 'What is the main goal of Beta Testing?',
          options: [
            'Internal validation',
            'Real-world testing by external users',
            'Performance testing',
            'Security testing'
          ],
          correctAnswer: 1,
          explanation: 'Beta testing involves real users testing in real environments to validate the system before official release.',
          points: 3
        },
        {
          id: 'q20',
          type: 'mcq',
          question: 'Which testing type focuses on user-friendliness?',
          options: [
            'Performance Testing',
            'Security Testing',
            'Usability Testing',
            'Compatibility Testing'
          ],
          correctAnswer: 2,
          explanation: 'Usability testing evaluates user-friendliness, user experience, and ease of use.',
          points: 3
        }
      ]
    },
    {
      id: 'section-b-full',
      title: 'Section B (Full): Additional True/False Questions',
      description: 'Extended true/false questions for comprehensive assessment',
      fullModeOnly: true,
      questions: [
        {
          id: 'q21',
          type: 'truefalse',
          question: 'Smoke testing is deeper and more thorough than sanity testing.',
          correctAnswer: false,
          explanation: 'False. Smoke testing is wide and shallow; Sanity testing is narrow and deep.',
          points: 3
        },
        {
          id: 'q22',
          type: 'truefalse',
          question: 'Integration testing focuses on testing individual components in isolation.',
          correctAnswer: false,
          explanation: 'False. Integration testing focuses on interfaces between components, not individual components in isolation.',
          points: 3
        },
        {
          id: 'q23',
          type: 'truefalse',
          question: 'System testing includes both functional and non-functional testing.',
          correctAnswer: true,
          explanation: 'True. System testing includes both functional (features) and non-functional (performance, security) testing.',
          points: 3
        },
        {
          id: 'q24',
          type: 'truefalse',
          question: 'Alpha testing is performed by external users in their environment.',
          correctAnswer: false,
          explanation: 'False. Alpha testing is internal testing; Beta testing is performed by external users.',
          points: 3
        },
        {
          id: 'q25',
          type: 'truefalse',
          question: 'Re-testing and regression testing are the same thing.',
          correctAnswer: false,
          explanation: 'False. Re-testing verifies specific bug fixes; Regression testing ensures no new bugs in existing features.',
          points: 3
        },
        {
          id: 'q26',
          type: 'truefalse',
          question: 'Top-Down integration requires the use of stubs.',
          correctAnswer: true,
          explanation: 'True. Top-Down integration uses stubs to simulate lower-level modules not yet developed.',
          points: 3
        },
        {
          id: 'q27',
          type: 'truefalse',
          question: 'Acceptance testing is performed before system testing.',
          correctAnswer: false,
          explanation: 'False. Acceptance testing is performed after system testing in the testing hierarchy.',
          points: 3
        },
        {
          id: 'q28',
          type: 'truefalse',
          question: 'Performance testing is a type of non-functional testing.',
          correctAnswer: true,
          explanation: 'True. Performance testing is a non-functional testing type that measures system behavior under load.',
          points: 3
        }
      ]
    },
    {
      id: 'section-c-full',
      title: 'Section C (Full): Scenario-Based Questions',
      description: 'Real-world scenario questions for comprehensive assessment',
      fullModeOnly: true,
      questions: [
        {
          id: 'q29',
          type: 'shortanswer',
          question: 'You are testing a new build. After deploying it to the test environment, what should be your first testing activity and why?',
          sampleAnswer: 'Perform smoke testing first to verify the build is stable enough for detailed testing. Check if critical functionalities work like login, navigation, and key features. If smoke test fails, reject the build immediately to save testing time.',
          keywords: ['smoke', 'testing', 'build', 'verification', 'critical', 'stable', 'reject', 'deploy'],
          minKeywords: 3,
          explanation: 'Smoke testing should be performed first after build deployment to verify critical functionalities work and the build is stable enough for detailed testing. This prevents wasting time on an unstable build.',
          points: 5
        },
        {
          id: 'q30',
          type: 'shortanswer',
          question: 'Your project uses Bottom-Up integration. The database layer is ready but the UI is not. How would you test the database layer?',
          sampleAnswer: 'Use drivers (test harnesses) to test the database layer. Create test drivers that simulate the UI and business logic layers to call database functions directly. Test CRUD operations, transactions, data validation, and stored procedures.',
          keywords: ['drivers', 'test', 'harness', 'database', 'simulate', 'crud', 'bottom-up', 'layer'],
          minKeywords: 3,
          explanation: 'In Bottom-Up integration, drivers are used to simulate higher-level modules. Create test drivers to call database functions directly and test database operations independently.',
          points: 5
        },
        {
          id: 'q31',
          type: 'shortanswer',
          question: 'A critical bug was fixed in the payment module. What types of testing would you perform and in what order?',
          sampleAnswer: 'First perform re-testing to verify the specific bug fix. Then sanity testing on the payment module to test related scenarios. Finally, regression testing on modules that interact with payment like cart, checkout, and order to ensure the fix did not break existing functionality.',
          keywords: ['re-testing', 'retesting', 'sanity', 'regression', 'payment', 'bug', 'fix', 'verify', 'order'],
          minKeywords: 3,
          explanation: 'Testing order: 1) Re-testing (verify specific bug fix), 2) Sanity testing (deep testing of payment module), 3) Regression testing (ensure no side effects in related modules).',
          points: 5
        },
        {
          id: 'q32',
          type: 'shortanswer',
          question: 'You have 500 regression test cases but only 2 days to test before release. How would you approach this?',
          sampleAnswer: 'Use risk-based testing approach. Prioritize test cases into P0 (critical - must run), P1 (high - should run), P2 (medium - run if time), P3 (low - skip or defer). Focus on high-risk areas like payment, authentication, and recently changed modules. Leverage automation for stable tests and parallel execution with multiple testers.',
          keywords: ['risk', 'based', 'prioritize', 'critical', 'high', 'automation', 'parallel', 'p0', 'p1'],
          minKeywords: 3,
          explanation: 'Use risk-based testing to prioritize test cases. Focus on critical business features and high-risk areas. Leverage automation and parallel execution to maximize coverage within time constraints.',
          points: 5
        },
        {
          id: 'q33',
          type: 'shortanswer',
          question: 'During UAT, business users report that the system is too slow. What type of testing should have been performed earlier to catch this?',
          sampleAnswer: 'Performance testing should have been performed during system testing phase. This includes load testing with expected user load, stress testing beyond capacity, and endurance testing for extended periods. Performance requirements should be defined early and tested before UAT.',
          keywords: ['performance', 'testing', 'load', 'stress', 'system', 'testing', 'early', 'requirements', 'benchmark'],
          minKeywords: 3,
          explanation: 'Performance testing should be performed during system testing to identify performance issues before UAT. This includes load, stress, and endurance testing with defined performance benchmarks.',
          points: 5
        },
        {
          id: 'q34',
          type: 'shortanswer',
          question: 'You are testing a mobile banking app. List the different testing levels you would perform and what each level would focus on.',
          sampleAnswer: 'Unit Testing by developers for individual functions with 85%+ code coverage. Integration Testing for API integration, database connectivity, and third-party services. System Testing for all features, performance, security, usability, and compatibility. Acceptance Testing with Alpha testing by employees and Beta testing by real customers, plus UAT by business users.',
          keywords: ['unit', 'integration', 'system', 'acceptance', 'alpha', 'beta', 'uat', 'api', 'security', 'performance'],
          minKeywords: 4,
          explanation: 'Testing levels: 1) Unit Testing (developers, individual functions), 2) Integration Testing (API, database, services), 3) System Testing (functional, performance, security, usability), 4) Acceptance Testing (Alpha, Beta, UAT).',
          points: 5
        },
        {
          id: 'q35',
          type: 'shortanswer',
          question: 'Name the four main integration testing approaches and when each is most appropriate.',
          sampleAnswer: 'Big Bang - integrate all modules at once, suitable for small systems. Top-Down - start from top modules using stubs, good for UI-driven apps. Bottom-Up - start from bottom modules using drivers, good for core functionality testing. Hybrid/Sandwich - combination of top-down and bottom-up, best for large complex systems with parallel teams.',
          keywords: ['big', 'bang', 'top', 'down', 'bottom', 'up', 'hybrid', 'sandwich', 'stubs', 'drivers', 'integration'],
          minKeywords: 4,
          explanation: 'Four integration approaches: 1) Big Bang (all at once), 2) Top-Down (with stubs), 3) Bottom-Up (with drivers), 4) Hybrid/Sandwich (combination). Each suits different project types and development approaches.',
          points: 5
        }
      ]
    }
  ]
};
