// Assessment questions for each day
// Question types: mcq (multiple choice), fillblank, truefalse, matching, shortanswer

export const assessments = {
  day1: {
    title: "Day 1: Manual Testing Fundamentals & SDLC Assessment",
    passingScore: 70,
    timeLimit: 30, // minutes
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
            question: 'What is the primary objective of manual testing?',
            options: [
              'To replace automated testing',
              'To find defects and ensure quality',
              'To reduce testing time',
              'To eliminate the need for test planning'
            ],
            correctAnswer: 1,
            explanation: 'The primary objective of manual testing is to find defects and ensure quality before the software reaches production.',
            points: 5
          },
          {
            id: 'q2',
            type: 'mcq',
            question: 'In which SDLC model does testing happen only after development is complete?',
            options: [
              'Agile',
              'V-Model',
              'Waterfall',
              'DevOps'
            ],
            correctAnswer: 2,
            explanation: 'In the Waterfall model, testing is a separate phase that occurs only after development is complete.',
            points: 5
          },
          {
            id: 'q3',
            type: 'mcq',
            question: 'What does RTM stand for in testing?',
            options: [
              'Real-Time Monitoring',
              'Requirements Traceability Matrix',
              'Regression Test Management',
              'Release Test Metrics'
            ],
            correctAnswer: 1,
            explanation: 'RTM stands for Requirements Traceability Matrix, which maps requirements to test cases.',
            points: 5
          },
          {
            id: 'q4',
            type: 'mcq',
            question: 'Which testing approach involves testing throughout the development process?',
            options: [
              'Waterfall',
              'Traditional testing',
              'Shift-left testing',
              'Post-development testing'
            ],
            correctAnswer: 2,
            explanation: 'Shift-left testing involves moving testing activities earlier in the SDLC and testing throughout the development process.',
            points: 5
          },
          {
            id: 'q5',
            type: 'mcq',
            question: 'In Agile, when is testing performed?',
            options: [
              'Only at the end of sprint',
              'Continuously throughout the sprint',
              'After all development is complete',
              'Before development starts'
            ],
            correctAnswer: 1,
            explanation: 'In Agile, testing is performed continuously throughout the sprint, parallel to development.',
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
            question: 'Manual testing is becoming obsolete with the rise of automation.',
            correctAnswer: false,
            explanation: 'False. Manual testing remains essential for exploratory testing, usability testing, and new feature validation where human judgment is crucial.',
            points: 5
          },
          {
            id: 'q7',
            type: 'truefalse',
            question: 'In V-Model, UAT planning happens during the requirements phase.',
            correctAnswer: true,
            explanation: 'True. In the V-Model, UAT (User Acceptance Testing) planning corresponds to and happens during the requirements phase.',
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
            question: 'The first phase of STLC is _____ Analysis.',
            correctAnswer: 'requirement',
            acceptableAnswers: ['requirement', 'requirements'],
            caseSensitive: false,
            explanation: 'The first phase of STLC (Software Testing Life Cycle) is Requirement Analysis.',
            points: 5
          },
          {
            id: 'q9',
            type: 'fillblank',
            question: 'The average cost multiplier of fixing a bug in production vs requirements phase is approximately _____x.',
            correctAnswer: '150',
            acceptableAnswers: ['150', '100-150', '150x'],
            caseSensitive: false,
            explanation: 'Fixing a bug in production can cost approximately 150x more than fixing it during the requirements phase.',
            points: 5
          },
          {
            id: 'q10',
            type: 'shortanswer',
            question: 'Name three critical areas where manual testing is preferred over automation.',
            sampleAnswer: 'Usability testing, exploratory testing, and ad-hoc testing',
            keywords: ['usability', 'exploratory', 'ad-hoc', 'ux', 'ui'],
            minKeywords: 2,
            explanation: 'Manual testing is preferred for: Usability Testing, Exploratory Testing, Ad-hoc Testing, New Feature Testing, UX/UI Testing, and Accessibility Testing.',
            points: 10
          }
        ]
      },
      // Additional sections for FULL mode only
      {
        id: 'section-a-full',
        title: 'Section A (Full): Additional MCQ Questions',
        description: 'Extended multiple choice questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q11',
            type: 'mcq',
            question: 'What does RTM stand for?',
            options: [
              'Real-Time Monitoring',
              'Requirements Traceability Matrix',
              'Regression Test Management',
              'Release Test Metrics'
            ],
            correctAnswer: 1,
            explanation: 'RTM stands for Requirements Traceability Matrix, which maps requirements to test cases ensuring complete coverage.',
            points: 3
          },
          {
            id: 'q12',
            type: 'mcq',
            question: 'Which SDLC model has the shape of a \'V\'?',
            options: [
              'Waterfall',
              'Agile',
              'V-Model',
              'Spiral'
            ],
            correctAnswer: 2,
            explanation: 'The V-Model is named for its V-shape, showing the relationship between development phases and corresponding testing phases.',
            points: 3
          },
          {
            id: 'q13',
            type: 'mcq',
            question: 'What is the entry criterion for Test Execution phase?',
            options: [
              'Requirements document available',
              'Test plan approved',
              'Test environment ready and smoke test passed',
              'All defects fixed'
            ],
            correctAnswer: 2,
            explanation: 'Test Execution can begin when the test environment is ready and smoke test has passed, confirming basic functionality works.',
            points: 3
          },
          {
            id: 'q14',
            type: 'mcq',
            question: 'In DevOps, what percentage of tests should typically be unit tests (according to test pyramid)?',
            options: [
              '10%',
              '30%',
              '50%',
              '70%'
            ],
            correctAnswer: 3,
            explanation: 'The test pyramid suggests 70% unit tests (fast, reliable), 20% integration tests, and 10% E2E tests.',
            points: 3
          },
          {
            id: 'q15',
            type: 'mcq',
            question: 'What is the purpose of a smoke test?',
            options: [
              'Detailed feature testing',
              'Build verification - check if critical features work',
              'Performance testing',
              'Security testing'
            ],
            correctAnswer: 1,
            explanation: 'Smoke testing is a build verification test to quickly check if the critical features of the application work before detailed testing.',
            points: 3
          },
          {
            id: 'q16',
            type: 'mcq',
            question: 'Which phase of STLC includes defect logging?',
            options: [
              'Test Planning',
              'Test Case Design',
              'Test Execution',
              'Test Closure'
            ],
            correctAnswer: 2,
            explanation: 'Defect logging happens during Test Execution phase when test cases are executed and failures are documented.',
            points: 3
          },
          {
            id: 'q17',
            type: 'mcq',
            question: 'What is the average cost multiplier of fixing a bug in production vs requirements phase?',
            options: [
              '2x',
              '10x',
              '50x',
              '150x'
            ],
            correctAnswer: 3,
            explanation: 'Fixing a bug in production costs approximately 150x more than fixing it during requirements phase, emphasizing the importance of early testing.',
            points: 3
          },
          {
            id: 'q18',
            type: 'mcq',
            question: 'In Scrum, what does DoD stand for?',
            options: [
              'Date of Delivery',
              'Definition of Done',
              'Defect or Development',
              'Day of Deployment'
            ],
            correctAnswer: 1,
            explanation: 'DoD stands for Definition of Done, which is a shared understanding of what it means for work to be complete, including testing criteria.',
            points: 3
          },
          {
            id: 'q19',
            type: 'mcq',
            question: 'Which testing type is best suited for manual testing?',
            options: [
              'Regression testing',
              'Load testing',
              'Usability testing',
              'Performance testing'
            ],
            correctAnswer: 2,
            explanation: 'Usability testing requires human judgment and subjective evaluation, making it best suited for manual testing.',
            points: 3
          },
          {
            id: 'q20',
            type: 'mcq',
            question: 'What is delivered at the end of Test Closure phase?',
            options: [
              'Test cases',
              'Defect reports',
              'Test summary report',
              'Test plan'
            ],
            correctAnswer: 2,
            explanation: 'Test Closure phase delivers a comprehensive Test Summary Report including metrics, defects, and recommendations.',
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
            question: 'Test planning should only start after development is complete.',
            correctAnswer: false,
            explanation: 'False. Test planning should start during requirements/design phase to enable early defect detection and better preparation.',
            points: 3
          },
          {
            id: 'q22',
            type: 'truefalse',
            question: 'Shift-left testing means moving testing activities earlier in SDLC.',
            correctAnswer: true,
            explanation: 'True. Shift-left testing is the philosophy of moving testing activities earlier in the SDLC to prevent defects rather than just finding them.',
            points: 3
          },
          {
            id: 'q23',
            type: 'truefalse',
            question: 'In Agile, documentation is more important than working software.',
            correctAnswer: false,
            explanation: 'False. Agile values working software over comprehensive documentation, though documentation is still important.',
            points: 3
          },
          {
            id: 'q24',
            type: 'truefalse',
            question: 'RTM helps in tracking test coverage against requirements.',
            correctAnswer: true,
            explanation: 'True. Requirements Traceability Matrix (RTM) maps requirements to test cases, ensuring complete test coverage.',
            points: 3
          },
          {
            id: 'q25',
            type: 'truefalse',
            question: 'Test environment setup happens before test case design.',
            correctAnswer: false,
            explanation: 'False. Test case design typically happens before environment setup. Test cases are designed during Test Case Design phase, while environment is set up in Test Environment Setup phase.',
            points: 3
          },
          {
            id: 'q26',
            type: 'truefalse',
            question: 'In DevOps, testing is completely automated with no manual testing.',
            correctAnswer: false,
            explanation: 'False. While DevOps emphasizes automation, manual testing remains important for exploratory testing, usability testing, and new features.',
            points: 3
          },
          {
            id: 'q27',
            type: 'truefalse',
            question: 'Waterfall model is best suited for projects with frequently changing requirements.',
            correctAnswer: false,
            explanation: 'False. Waterfall is rigid and suits stable, well-defined requirements. Agile is better for frequently changing requirements.',
            points: 3
          },
          {
            id: 'q28',
            type: 'truefalse',
            question: 'Test closure includes archiving test artifacts and lessons learned.',
            correctAnswer: true,
            explanation: 'True. Test Closure phase includes documentation, archival of test artifacts, lessons learned, and formal sign-off.',
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
            question: 'You are testing a mobile app using Agile. The regression suite has grown to 400 test cases taking 3 days to execute manually, but the sprint is only 2 weeks. What strategy would you recommend?',
            sampleAnswer: 'Prioritize automation for regression tests, implement risk-based testing to focus on critical areas, use parallel testing, and consider continuous integration',
            keywords: ['automation', 'automate', 'risk-based', 'prioritize', 'parallel', 'ci', 'continuous'],
            minKeywords: 2,
            explanation: 'Key strategies: 1) Automate regression tests (60-70% coverage target), 2) Implement risk-based testing to prioritize critical scenarios, 3) Use parallel test execution, 4) Integrate with CI/CD pipeline, 5) Focus manual testing on new features.',
            points: 5
          },
          {
            id: 'q30',
            type: 'shortanswer',
            question: 'During Test Execution, you find that 30% of test cases are blocked due to environment issues. What should be your immediate actions?',
            sampleAnswer: 'Stop further execution, escalate the blocker immediately, document the impact, explore workarounds, reprioritize to test non-blocked areas, and provide daily status updates',
            keywords: ['escalate', 'stop', 'blocker', 'document', 'workaround', 'reprioritize', 'status'],
            minKeywords: 2,
            explanation: 'Immediate actions: 1) Stop wasting time on blocked tests, 2) Escalate blocker to management and DevOps, 3) Document impact (test cases blocked, timeline), 4) Explore workarounds (alternative environment, mocking), 5) Reprioritize to test non-blocked areas, 6) Provide daily updates on blocker resolution.',
            points: 5
          },
          {
            id: 'q31',
            type: 'shortanswer',
            question: 'A banking project requires 100% traceability and regulatory compliance. Which SDLC model would you recommend and why?',
            sampleAnswer: 'V-Model or Waterfall because they provide extensive documentation, clear traceability, rigorous testing at each level, and meet regulatory requirements',
            keywords: ['v-model', 'waterfall', 'documentation', 'traceability', 'compliance', 'regulatory', 'rigorous'],
            minKeywords: 2,
            explanation: 'Recommended: V-Model or Waterfall. Reasons: 1) Extensive documentation required for audits, 2) 100% traceability through RTM, 3) Rigorous testing at each level, 4) Clear entry/exit criteria, 5) Formal sign-offs, 6) Meets regulatory compliance needs (banking regulations).',
            points: 5
          },
          {
            id: 'q32',
            type: 'shortanswer',
            question: 'You are in the Requirement Analysis phase of STLC and find that many requirements are ambiguous. What should you do?',
            sampleAnswer: 'Document all ambiguities, raise clarification questions to stakeholders, conduct requirement review meetings, update RTM, and ensure sign-off before proceeding',
            keywords: ['document', 'clarify', 'stakeholder', 'review', 'meeting', 'rtm', 'sign-off', 'questions'],
            minKeywords: 2,
            explanation: 'Actions: 1) Document all ambiguous requirements, 2) Prepare clarification questions, 3) Schedule requirement review meetings with stakeholders, 4) Get clarifications documented and approved, 5) Update RTM with clarified requirements, 6) Ensure formal sign-off before moving to next phase.',
            points: 5
          },
          {
            id: 'q33',
            type: 'shortanswer',
            question: 'Your company wants to move from Waterfall to Agile. What challenges would the QA team face?',
            sampleAnswer: 'Mindset shift from phase-based to continuous testing, need for automation skills, shorter test cycles, less documentation, constant context switching, and regression management challenges',
            keywords: ['mindset', 'automation', 'continuous', 'short', 'cycle', 'documentation', 'regression', 'skill'],
            minKeywords: 2,
            explanation: 'Challenges: 1) Mindset shift (testing is continuous, not a phase), 2) Skill gaps (need automation, API testing), 3) Shorter test cycles (sprint vs months), 4) Less documentation, 5) Constant context switching, 6) Growing regression burden, 7) Need for collaboration. Preparation: Training, pilot sprint, automation strategy, culture change.',
            points: 5
          },
          {
            id: 'q34',
            type: 'shortanswer',
            question: 'During Test Closure, your test summary shows 85% pass rate but stakeholders want 95%. What options do you have?',
            sampleAnswer: 'Analyze failed test cases, extend testing timeline, accept risk for low-priority defects, defer non-critical features, or negotiate revised exit criteria based on risk assessment',
            keywords: ['analyze', 'extend', 'timeline', 'risk', 'defer', 'negotiate', 'priority', 'defect'],
            minKeywords: 2,
            explanation: 'Options: 1) Analyze failed tests (are they valid failures?), 2) Extend testing timeline to fix and retest, 3) Risk assessment (accept low-priority defects), 4) Defer non-critical features to next release, 5) Negotiate exit criteria based on business risk, 6) Document risks of proceeding with 85%.',
            points: 5
          },
          {
            id: 'q35',
            type: 'shortanswer',
            question: 'Name the six phases of STLC in order.',
            sampleAnswer: 'Requirement Analysis, Test Planning, Test Case Design, Test Environment Setup, Test Execution, Test Closure',
            keywords: ['requirement', 'planning', 'design', 'environment', 'execution', 'closure'],
            minKeywords: 4,
            explanation: 'The 6 phases of STLC in order: 1) Requirement Analysis, 2) Test Planning, 3) Test Case Design, 4) Test Environment Setup, 5) Test Execution, 6) Test Closure. Each phase has specific entry criteria, activities, deliverables, and exit criteria.',
            points: 5
          }
        ]
      }
    ]
  },
  
  day2: {
    title: "Day 2: Testing Levels & Types Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (Part 1 - 15 questions)",
        timeLimit: 20,
        description: "First part covering testing levels and basic concepts"
      },
      full: {
        title: "Full Assessment (All 35 questions)",
        timeLimit: 45,
        description: "Complete assessment covering all testing levels, types, and scenarios"
      }
    },
    sections: [
      {
        id: 'section-a',
        title: 'Section A: Multiple Choice Questions (Part 1)',
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
            points: 3
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
            explanation: 'Smoke testing is a build verification test to check if the critical features of the application work.',
            points: 3
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
            points: 3
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
            points: 3
          },
          {
            id: 'q5',
            type: 'mcq',
            question: 'Which testing type verifies that new changes haven\'t broken existing functionality?',
            options: [
              'Smoke Testing',
              'Sanity Testing',
              'Regression Testing',
              'Re-testing'
            ],
            correctAnswer: 2,
            explanation: 'Regression testing ensures that new changes haven\'t broken existing functionality.',
            points: 3
          },
          {
            id: 'q6',
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
            id: 'q7',
            type: 'mcq',
            question: 'Which integration approach uses stubs?',
            options: [
              'Bottom-Up',
              'Top-Down',
              'Big Bang',
              'None of the above'
            ],
            correctAnswer: 1,
            explanation: 'Top-Down integration uses stubs to simulate lower-level modules.',
            points: 3
          },
          {
            id: 'q8',
            type: 'mcq',
            question: 'What is the difference between smoke and sanity testing?',
            options: [
              'Smoke is wide & shallow, Sanity is narrow & deep',
              'Smoke is narrow & deep, Sanity is wide & shallow',
              'They are the same',
              'Smoke is automated, Sanity is manual'
            ],
            correctAnswer: 0,
            explanation: 'Smoke testing is wide and shallow (many features briefly), while sanity testing is narrow and deep (specific areas thoroughly).',
            points: 3
          },
          {
            id: 'q9',
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
            id: 'q10',
            type: 'mcq',
            question: 'What is re-testing?',
            options: [
              'Testing the entire application again',
              'Testing to verify a specific bug fix',
              'Testing after code changes',
              'Testing with new test cases'
            ],
            correctAnswer: 1,
            explanation: 'Re-testing is testing to verify that a specific bug has been fixed correctly.',
            points: 3
          }
        ]
      },
      {
        id: 'section-b',
        title: 'Section B: True/False Questions (Part 1)',
        description: 'Determine whether each statement is true or false',
        questions: [
          {
            id: 'q11',
            type: 'truefalse',
            question: 'Unit testing is primarily performed by QA testers.',
            correctAnswer: false,
            explanation: 'False. Unit testing is primarily performed by developers, not QA testers.',
            points: 3
          },
          {
            id: 'q12',
            type: 'truefalse',
            question: 'Regression testing should be performed after every code change.',
            correctAnswer: true,
            explanation: 'True. Regression testing ensures that new changes haven\'t broken existing functionality.',
            points: 3
          },
          {
            id: 'q13',
            type: 'truefalse',
            question: 'Smoke testing is deeper and more thorough than sanity testing.',
            correctAnswer: false,
            explanation: 'False. Smoke testing is wide and shallow; sanity testing is narrow and deep.',
            points: 3
          },
          {
            id: 'q14',
            type: 'truefalse',
            question: 'Integration testing focuses on testing individual components in isolation.',
            correctAnswer: false,
            explanation: 'False. Integration testing focuses on interfaces between components, not individual components in isolation.',
            points: 3
          },
          {
            id: 'q15',
            type: 'truefalse',
            question: 'System testing includes both functional and non-functional testing.',
            correctAnswer: true,
            explanation: 'True. System testing includes both functional (features) and non-functional (performance, security, usability) testing.',
            points: 3
          }
        ]
      },
      // Additional sections for FULL mode
      {
        id: 'section-a-full',
        title: 'Section A: Multiple Choice Questions (Part 2)',
        description: 'Additional MCQ questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
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
            explanation: 'Performance testing measures system behavior under various load conditions.',
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
            explanation: 'Alpha testing is internal testing performed before releasing to external users (Beta testing).',
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
            explanation: 'Bottom-Up integration uses drivers to simulate higher-level modules.',
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
            explanation: 'Beta testing involves real users testing the application in real-world environments.',
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
            explanation: 'Usability testing evaluates user-friendliness and user experience.',
            points: 3
          }
        ]
      },
      {
        id: 'section-b-full',
        title: 'Section B: True/False Questions (Part 2)',
        description: 'Additional true/false questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q21',
            type: 'truefalse',
            question: 'Alpha testing is performed by external users in their environment.',
            correctAnswer: false,
            explanation: 'False. Alpha testing is internal testing; Beta testing is performed by external users.',
            points: 3
          },
          {
            id: 'q22',
            type: 'truefalse',
            question: 'Re-testing and regression testing are the same thing.',
            correctAnswer: false,
            explanation: 'False. Re-testing verifies specific bug fixes; regression testing ensures no new bugs in existing features.',
            points: 3
          },
          {
            id: 'q23',
            type: 'truefalse',
            question: 'Top-Down integration requires the use of stubs.',
            correctAnswer: true,
            explanation: 'True. Top-Down integration uses stubs to simulate lower-level modules not yet developed.',
            points: 3
          },
          {
            id: 'q24',
            type: 'truefalse',
            question: 'Acceptance testing is performed before system testing.',
            correctAnswer: false,
            explanation: 'False. Acceptance testing is performed after system testing.',
            points: 3
          },
          {
            id: 'q25',
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
        title: 'Section C: Scenario-Based Questions',
        description: 'Real-world scenario questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q26',
            type: 'shortanswer',
            question: 'You are testing a new build. After deploying it to the test environment, what should be your first testing activity and why?',
            sampleAnswer: 'Perform smoke testing first to verify the build is stable enough for detailed testing, checking if critical functionalities work, taking only 30-60 minutes, and preventing wasting time on an unstable build',
            keywords: ['smoke', 'testing', 'stable', 'critical', 'build', 'verification', 'quick'],
            minKeywords: 2,
            explanation: 'Smoke testing should be performed first because it quickly verifies if the build is stable enough for detailed testing. It checks critical functionalities and takes only 30-60 minutes. If smoke test fails, the build is rejected immediately, saving testing time.',
            points: 5
          },
          {
            id: 'q27',
            type: 'shortanswer',
            question: 'Your project uses Bottom-Up integration. The database layer is ready but the UI is not. How would you test the database layer?',
            sampleAnswer: 'Use drivers (test harnesses) to simulate the UI and business logic layers, calling database functions directly to test CRUD operations, transactions, data validation, and verify data integrity',
            keywords: ['driver', 'test', 'harness', 'simulate', 'database', 'crud', 'bottom-up'],
            minKeywords: 2,
            explanation: 'Use drivers (test harnesses) that simulate the UI and business logic layers. Drivers will call database functions directly to test CRUD operations, transactions, data validation, and verify data integrity. This allows testing the database layer independently without waiting for UI completion.',
            points: 5
          },
          {
            id: 'q28',
            type: 'shortanswer',
            question: 'A critical bug was fixed in the payment module. What types of testing would you perform and in what order?',
            sampleAnswer: 'First re-testing to verify the specific bug fix, then sanity testing for deep testing of payment module, followed by regression testing of related modules, and finally smoke testing for overall system stability',
            keywords: ['re-testing', 'retest', 'sanity', 'regression', 'smoke', 'order', 'sequence'],
            minKeywords: 2,
            explanation: 'Perform testing in this order: 1) Re-testing (verify the specific bug is fixed), 2) Sanity testing (deep testing of payment module), 3) Regression testing (test related modules like cart, checkout, order), 4) Smoke testing (quick end-to-end test of critical flows).',
            points: 5
          },
          {
            id: 'q29',
            type: 'shortanswer',
            question: 'You have 500 regression test cases but only 2 days to test before release. How would you approach this?',
            sampleAnswer: 'Use risk-based testing to prioritize test cases into P0 critical, P1 high, P2 medium, and P3 low priority, focus on high-risk areas, leverage automation, and use parallel execution with multiple testers',
            keywords: ['risk', 'prioritize', 'priority', 'critical', 'automation', 'parallel', 'p0', 'p1'],
            minKeywords: 2,
            explanation: 'Use risk-based testing: Prioritize test cases (P0 critical must run, P1 high should run, P2 medium if time permits, P3 low skip). Focus on high-risk areas (recently changed modules, payment, authentication). Leverage automation for overnight execution. Use parallel execution with multiple testers.',
            points: 5
          },
          {
            id: 'q30',
            type: 'shortanswer',
            question: 'During UAT, business users report that the system is too slow. What type of testing should have been performed earlier to catch this?',
            sampleAnswer: 'Performance testing should have been performed during system testing phase, including load testing, stress testing, endurance testing, and spike testing to measure system behavior under various conditions',
            keywords: ['performance', 'testing', 'load', 'stress', 'system', 'earlier', 'non-functional'],
            minKeywords: 2,
            explanation: 'Performance testing should have been performed earlier during System Testing phase. This includes load testing (expected user load), stress testing (beyond capacity), endurance testing (extended periods), and spike testing (sudden load increases). Performance is a non-functional requirement that must be tested before UAT.',
            points: 5
          },
          {
            id: 'q31',
            type: 'shortanswer',
            question: 'You\'re testing a mobile banking app. List the different testing levels you would perform and what each level would focus on.',
            sampleAnswer: 'Unit testing by developers for individual functions, integration testing for API and database connectivity, system testing by QA for all features including functional and non-functional, and acceptance testing by business users and customers',
            keywords: ['unit', 'integration', 'system', 'acceptance', 'developers', 'api', 'functional', 'users'],
            minKeywords: 3,
            explanation: 'Testing levels: 1) Unit Testing (developers test individual functions, 85%+ code coverage), 2) Integration Testing (API integration, database connectivity, third-party services), 3) System Testing (QA tests all features - functional, performance, security, usability, compatibility), 4) Acceptance Testing (Alpha with employees, Beta with customers, UAT with business).',
            points: 5
          },
          {
            id: 'q32',
            type: 'shortanswer',
            question: 'A new feature was added to the login module. The smoke test passed, but should you proceed with full testing? What additional checks would you perform?',
            sampleAnswer: 'Yes proceed but first perform sanity testing on login module deeply testing all scenarios, check related modules like registration and user profile, review code changes to identify impact areas, then run regression tests focusing on authentication',
            keywords: ['sanity', 'deep', 'login', 'related', 'regression', 'authentication', 'impact'],
            minKeywords: 2,
            explanation: 'Yes, proceed with full testing, but perform Sanity Testing first on the login module: Test all login scenarios deeply (valid/invalid credentials, password reset, session management, account lockout). Check related modules (registration, user profile). Review code changes to identify potential impact areas. Run regression tests focusing on authentication-related test cases.',
            points: 5
          },
          {
            id: 'q33',
            type: 'shortanswer',
            question: 'Your team is planning to use Hybrid/Sandwich integration for a large ERP system. Explain how you would organize the testing.',
            sampleAnswer: 'Divide into top-down team testing UI with stubs and bottom-up team testing database with drivers, both teams meet at business logic layer in week 3, remove stubs and drivers, test complete integration, parallel testing reduces timeline',
            keywords: ['top-down', 'bottom-up', 'stub', 'driver', 'parallel', 'business', 'logic', 'integration'],
            minKeywords: 3,
            explanation: 'Organize into two teams: Top-Down Team (test UI layer using stubs for business logic), Bottom-Up Team (test database layer using drivers). Both teams work in parallel for 2 weeks. Week 3: Teams meet at business logic layer, remove stubs and drivers, test complete integration. This parallel approach reduces timeline by 40% while ensuring both UI and database are tested thoroughly.',
            points: 5
          },
          {
            id: 'q34',
            type: 'shortanswer',
            question: 'During system testing, you find that the application works on Chrome but not on Firefox. What type of testing is this, and what should be your next steps?',
            sampleAnswer: 'This is compatibility testing specifically browser compatibility, next steps include documenting the issue with browser version and OS, reproducing on multiple Firefox versions, testing on other browsers, analyzing root cause for browser-specific issues, and reporting to development',
            keywords: ['compatibility', 'browser', 'document', 'reproduce', 'version', 'analyze', 'report'],
            minKeywords: 2,
            explanation: 'This is Compatibility Testing (Browser Compatibility). Next steps: 1) Document issue (Firefox version, OS, specific feature, error messages, screenshots), 2) Reproduce on multiple Firefox versions, 3) Test on other browsers (Safari, Edge), 4) Analyze root cause (CSS issues, JavaScript compatibility, browser API differences), 5) Expand compatibility testing with matrix, 6) Report detailed bug to development.',
            points: 5
          },
          {
            id: 'q35',
            type: 'shortanswer',
            question: 'You\'re conducting Alpha testing with 50 internal employees. What metrics would you track and what would constitute a successful Alpha test?',
            sampleAnswer: 'Track participation metrics like active users and session time, bug metrics by severity, performance metrics like crashes and response time, user feedback and satisfaction survey, success criteria include 85%+ participation, less than 5 critical bugs, user satisfaction above 4/5',
            keywords: ['participation', 'bugs', 'severity', 'performance', 'satisfaction', 'metrics', 'criteria', 'success'],
            minKeywords: 3,
            explanation: 'Metrics to track: 1) Participation (active participants 90%, daily active users, session time), 2) Bug metrics (total bugs, by severity, by module, resolution time), 3) Performance (crashes, response time, memory, battery), 4) User feedback (satisfaction survey 1-5, feature requests, usability issues). Success criteria: 85%+ participation, <5 critical bugs, <15 high bugs, user satisfaction >4/5, all major features tested, actionable feedback collected.',
            points: 5
          }
        ]
      }
    ]
  },

  day3: {
    title: "Day 3: Test Design Techniques Assessment",
    passingScore: 70,
    timeLimit: 50,
    modes: {
      quick: {
        title: "Quick Assessment (Part 1 - 15 questions)",
        timeLimit: 20,
        description: "First part covering basic test design techniques"
      },
      full: {
        title: "Full Assessment (All 40 questions)",
        timeLimit: 50,
        description: "Complete assessment covering all test design techniques and scenarios"
      }
    },
    sections: [
      {
        id: 'section-a',
        title: 'Section A: Multiple Choice Questions (Part 1)',
        description: 'Choose the best answer for each question',
        questions: [
          {
            id: 'q1',
            type: 'mcq',
            question: 'Which test design technique divides input data into valid and invalid partitions?',
            options: [
              'Boundary Value Analysis',
              'Equivalence Partitioning',
              'Decision Table Testing',
              'State Transition Testing'
            ],
            correctAnswer: 1,
            explanation: 'Equivalence Partitioning divides input data into valid and invalid partitions to reduce the number of test cases.',
            points: 3
          },
          {
            id: 'q2',
            type: 'mcq',
            question: 'What is the primary focus of Boundary Value Analysis (BVA)?',
            options: [
              'Testing middle values',
              'Testing boundary values at edges of input domains',
              'Testing random values',
              'Testing all possible values'
            ],
            correctAnswer: 1,
            explanation: 'BVA focuses on testing values at the boundaries (edges) of input domains where defects are most likely.',
            points: 3
          },
          {
            id: 'q3',
            type: 'mcq',
            question: 'Which technique is best for testing complex business rules with multiple conditions?',
            options: [
              'Equivalence Partitioning',
              'Boundary Value Analysis',
              'Decision Table Testing',
              'State Transition Testing'
            ],
            correctAnswer: 2,
            explanation: 'Decision Table Testing is ideal for complex business logic with multiple conditions and combinations.',
            points: 3
          },
          {
            id: 'q4',
            type: 'mcq',
            question: 'State Transition Testing is most suitable for testing:',
            options: [
              'Static web pages',
              'Systems with different states and transitions',
              'Database queries',
              'API endpoints'
            ],
            correctAnswer: 1,
            explanation: 'State Transition Testing is used for systems that have different states and transitions between them.',
            points: 3
          },
          {
            id: 'q5',
            type: 'mcq',
            question: 'In Equivalence Partitioning, how many test cases are typically selected from each partition?',
            options: [
              'All values',
              'At least one representative value',
              'Only boundary values',
              'Random values'
            ],
            correctAnswer: 1,
            explanation: 'In EP, at least one representative value is selected from each partition to reduce test cases while maintaining coverage.',
            points: 3
          },
          {
            id: 'q6',
            type: 'mcq',
            question: 'For an input field accepting age 18-65, which values would BVA test?',
            options: [
              '18, 40, 65',
              '17, 18, 65, 66',
              '20, 30, 40, 50',
              '18, 65'
            ],
            correctAnswer: 1,
            explanation: 'BVA tests boundary values: 17 (just below min), 18 (min), 65 (max), 66 (just above max).',
            points: 3
          },
          {
            id: 'q7',
            type: 'mcq',
            question: 'What does each column in a Decision Table represent?',
            options: [
              'Test cases',
              'Conditions',
              'A unique combination of conditions and actions',
              'Expected results'
            ],
            correctAnswer: 2,
            explanation: 'Each column in a Decision Table represents a unique combination of conditions and their corresponding actions.',
            points: 3
          },
          {
            id: 'q8',
            type: 'mcq',
            question: 'Which test design technique is considered a Black Box technique?',
            options: [
              'Statement Coverage',
              'Branch Coverage',
              'Equivalence Partitioning',
              'Path Coverage'
            ],
            correctAnswer: 2,
            explanation: 'Equivalence Partitioning is a Black Box technique that doesn\'t require knowledge of internal code structure.',
            points: 3
          },
          {
            id: 'q9',
            type: 'mcq',
            question: 'In State Transition Testing, what is tested?',
            options: [
              'Only valid transitions',
              'Only invalid transitions',
              'Both valid and invalid transitions',
              'Only initial states'
            ],
            correctAnswer: 2,
            explanation: 'State Transition Testing tests both valid transitions (expected behavior) and invalid transitions (error handling).',
            points: 3
          },
          {
            id: 'q10',
            type: 'mcq',
            question: 'What is the main advantage of using test design techniques?',
            options: [
              'Increases testing time',
              'Reduces test coverage',
              'Optimizes test cases while maintaining coverage',
              'Eliminates the need for testing'
            ],
            correctAnswer: 2,
            explanation: 'Test design techniques optimize the number of test cases needed while maintaining good test coverage.',
            points: 3
          }
        ]
      },
      {
        id: 'section-b',
        title: 'Section B: True/False Questions (Part 1)',
        description: 'Determine whether each statement is true or false',
        questions: [
          {
            id: 'q11',
            type: 'truefalse',
            question: 'Equivalence Partitioning and Boundary Value Analysis are often used together.',
            correctAnswer: true,
            explanation: 'True. EP and BVA complement each other and are commonly used together for comprehensive testing.',
            points: 3
          },
          {
            id: 'q12',
            type: 'truefalse',
            question: 'Decision Tables can only handle two conditions at a time.',
            correctAnswer: false,
            explanation: 'False. Decision Tables can handle multiple conditions simultaneously, making them ideal for complex business logic.',
            points: 3
          },
          {
            id: 'q13',
            type: 'truefalse',
            question: 'BVA tests only the minimum and maximum boundary values.',
            correctAnswer: false,
            explanation: 'False. BVA tests values just below minimum, at minimum, at maximum, and just above maximum.',
            points: 3
          },
          {
            id: 'q14',
            type: 'truefalse',
            question: 'State Transition Testing is useful for testing workflow-based applications.',
            correctAnswer: true,
            explanation: 'True. State Transition Testing is excellent for workflow-based applications with different states and transitions.',
            points: 3
          },
          {
            id: 'q15',
            type: 'truefalse',
            question: 'Test design techniques are only applicable to manual testing.',
            correctAnswer: false,
            explanation: 'False. Test design techniques apply to both manual and automated testing for designing effective test cases.',
            points: 3
          }
        ]
      },
      // Additional sections for FULL mode
      {
        id: 'section-a-full',
        title: 'Section A: Multiple Choice Questions (Part 2)',
        description: 'Additional MCQ questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q16',
            type: 'mcq',
            question: 'For a password field requiring 8-20 characters, which EP partitions would you create?',
            options: [
              'Valid: 8-20, Invalid: <8, >20',
              'Valid: 10-15, Invalid: all others',
              'Valid: exactly 8, Invalid: all others',
              'Valid: 8-20, Invalid: only >20'
            ],
            correctAnswer: 0,
            explanation: 'EP creates three partitions: Valid (8-20 characters), Invalid (<8 characters), Invalid (>20 characters).',
            points: 3
          },
          {
            id: 'q17',
            type: 'mcq',
            question: 'What is the formula for calculating the number of test cases in a full Decision Table?',
            options: [
              'Number of conditions',
              '2^n where n is number of conditions',
              'Number of actions',
              'Conditions × Actions'
            ],
            correctAnswer: 1,
            explanation: 'A full Decision Table has 2^n test cases, where n is the number of conditions (each condition can be True or False).',
            points: 3
          },
          {
            id: 'q18',
            type: 'mcq',
            question: 'In State Transition Testing, what is a "state"?',
            options: [
              'A test case',
              'A condition of the system at a specific time',
              'An input value',
              'An expected result'
            ],
            correctAnswer: 1,
            explanation: 'A state represents a specific condition or mode of the system at a particular point in time.',
            points: 3
          },
          {
            id: 'q19',
            type: 'mcq',
            question: 'Which technique would you use to test a login system with 3 attempts before lockout?',
            options: [
              'Equivalence Partitioning',
              'Boundary Value Analysis',
              'State Transition Testing',
              'Decision Table Testing'
            ],
            correctAnswer: 2,
            explanation: 'State Transition Testing is ideal for testing systems with states (Active, Locked) and transitions based on attempts.',
            points: 3
          },
          {
            id: 'q20',
            type: 'mcq',
            question: 'What is the main difference between EP and BVA?',
            options: [
              'EP tests partitions, BVA tests boundaries',
              'EP is for numbers, BVA is for text',
              'EP is manual, BVA is automated',
              'There is no difference'
            ],
            correctAnswer: 0,
            explanation: 'EP divides input into partitions and tests representative values, while BVA specifically tests boundary values.',
            points: 3
          },
          {
            id: 'q21',
            type: 'mcq',
            question: 'In a Decision Table, what does "Don\'t Care" (-) mean?',
            options: [
              'The condition is invalid',
              'The condition doesn\'t affect the outcome',
              'The condition must be true',
              'The condition must be false'
            ],
            correctAnswer: 1,
            explanation: '"Don\'t Care" (-) means the condition doesn\'t affect the outcome for that particular combination.',
            points: 3
          },
          {
            id: 'q22',
            type: 'mcq',
            question: 'Which technique is most effective for testing a discount calculation with multiple rules?',
            options: [
              'State Transition Testing',
              'Boundary Value Analysis',
              'Decision Table Testing',
              'Equivalence Partitioning'
            ],
            correctAnswer: 2,
            explanation: 'Decision Table Testing is best for complex business rules like discount calculations with multiple conditions.',
            points: 3
          },
          {
            id: 'q23',
            type: 'mcq',
            question: 'For testing a date field (DD/MM/YYYY), which technique would identify invalid dates like 31/02/2024?',
            options: [
              'Only Equivalence Partitioning',
              'Only Boundary Value Analysis',
              'Combination of EP and BVA',
              'State Transition Testing'
            ],
            correctAnswer: 2,
            explanation: 'Combination of EP (valid/invalid months, days) and BVA (boundary dates) would identify such invalid dates.',
            points: 3
          },
          {
            id: 'q24',
            type: 'mcq',
            question: 'What is a "transition" in State Transition Testing?',
            options: [
              'A test case',
              'Movement from one state to another',
              'An input field',
              'A validation rule'
            ],
            correctAnswer: 1,
            explanation: 'A transition is the movement or change from one state to another, triggered by an event or action.',
            points: 3
          },
          {
            id: 'q25',
            type: 'mcq',
            question: 'Which test design technique requires knowledge of the internal code structure?',
            options: [
              'Equivalence Partitioning',
              'Decision Table Testing',
              'Statement Coverage',
              'Boundary Value Analysis'
            ],
            correctAnswer: 2,
            explanation: 'Statement Coverage is a White Box technique that requires knowledge of internal code structure.',
            points: 3
          }
        ]
      },
      {
        id: 'section-b-full',
        title: 'Section B: True/False Questions (Part 2)',
        description: 'Additional true/false questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q26',
            type: 'truefalse',
            question: 'In BVA, testing just the minimum and maximum values is sufficient.',
            correctAnswer: false,
            explanation: 'False. BVA requires testing values just below min, at min, at max, and just above max (4 values minimum).',
            points: 3
          },
          {
            id: 'q27',
            type: 'truefalse',
            question: 'Decision Tables can be simplified by combining columns with identical actions.',
            correctAnswer: true,
            explanation: 'True. Decision Tables can be optimized by combining columns that have the same actions, reducing redundancy.',
            points: 3
          },
          {
            id: 'q28',
            type: 'truefalse',
            question: 'State Transition Testing only tests valid state transitions.',
            correctAnswer: false,
            explanation: 'False. State Transition Testing tests both valid transitions (expected) and invalid transitions (error handling).',
            points: 3
          },
          {
            id: 'q29',
            type: 'truefalse',
            question: 'Equivalence Partitioning reduces the number of test cases without compromising coverage.',
            correctAnswer: true,
            explanation: 'True. EP reduces test cases by testing representative values from each partition while maintaining good coverage.',
            points: 3
          },
          {
            id: 'q30',
            type: 'truefalse',
            question: 'Test design techniques eliminate the need for exploratory testing.',
            correctAnswer: false,
            explanation: 'False. Test design techniques complement exploratory testing but don\'t replace it. Both are valuable.',
            points: 3
          }
        ]
      },
      {
        id: 'section-c-full',
        title: 'Section C: Scenario-Based Questions',
        description: 'Real-world scenario questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q31',
            type: 'shortanswer',
            question: 'You need to test an age input field that accepts values 18-65. Using BVA, what test values would you use and why?',
            sampleAnswer: 'Test values: 17 (invalid, just below min), 18 (valid, minimum boundary), 65 (valid, maximum boundary), 66 (invalid, just above max). These boundary values are where defects are most likely to occur.',
            keywords: ['17', '18', '65', '66', 'boundary', 'minimum', 'maximum', 'invalid', 'valid'],
            minKeywords: 4,
            explanation: 'BVA test values: 17 (invalid - just below minimum), 18 (valid - minimum boundary), 65 (valid - maximum boundary), 66 (invalid - just above maximum). Boundary values are tested because defects are most likely at the edges of input domains.',
            points: 5
          },
          {
            id: 'q32',
            type: 'shortanswer',
            question: 'A discount system has these rules: Orders >$100 get 10% off, Orders >$500 get 20% off, Premium members get additional 5% off. Create a Decision Table structure for this.',
            sampleAnswer: 'Conditions: Order >$100 (Y/N), Order >$500 (Y/N), Premium Member (Y/N). Actions: No discount, 10% discount, 15% discount (10%+5%), 20% discount, 25% discount (20%+5%). Create columns for all combinations.',
            keywords: ['conditions', 'actions', 'combinations', '100', '500', 'premium', 'discount', 'columns', 'rules'],
            minKeywords: 4,
            explanation: 'Decision Table structure: Conditions: 1) Order >$100 (Y/N), 2) Order >$500 (Y/N), 3) Premium Member (Y/N). Actions: Apply appropriate discount (0%, 10%, 15%, 20%, 25%). Create 8 columns (2^3) for all combinations. Example: Order=$600, Premium=Yes → 25% discount (20%+5%).',
            points: 5
          },
          {
            id: 'q33',
            type: 'shortanswer',
            question: 'Describe the states and transitions for an ATM card system that locks after 3 incorrect PIN attempts.',
            sampleAnswer: 'States: Active, Attempt 1, Attempt 2, Locked. Transitions: Correct PIN → Active, Incorrect PIN → Next attempt state, 3rd incorrect → Locked. Test valid transitions (correct PIN) and invalid transitions (3 wrong PINs).',
            keywords: ['states', 'active', 'locked', 'attempts', 'transitions', 'correct', 'incorrect', 'pin', '3'],
            minKeywords: 4,
            explanation: 'States: 1) Active (card ready), 2) Attempt 1 (first wrong PIN), 3) Attempt 2 (second wrong PIN), 4) Locked (after 3 wrong PINs). Transitions: Correct PIN → Active state, Incorrect PIN → Next attempt state, 3rd incorrect PIN → Locked state. Test both valid transitions (correct PIN at any attempt) and invalid transitions (3 consecutive wrong PINs).',
            points: 5
          },
          {
            id: 'q34',
            type: 'shortanswer',
            question: 'You need to test a username field that accepts 6-20 alphanumeric characters. Using EP, what partitions would you create?',
            sampleAnswer: 'Valid partition: 6-20 alphanumeric characters. Invalid partitions: <6 characters, >20 characters, special characters, empty field, spaces only. Test one value from each partition.',
            keywords: ['valid', 'invalid', 'partition', '6', '20', 'alphanumeric', 'special', 'empty', 'characters'],
            minKeywords: 4,
            explanation: 'Equivalence Partitions: Valid: 6-20 alphanumeric characters (test: "user123"). Invalid: <6 characters (test: "user"), >20 characters (test: "verylongusername12345"), special characters (test: "user@123"), empty field (test: ""), spaces only (test: "      "). Select one representative value from each partition.',
            points: 5
          },
          {
            id: 'q35',
            type: 'shortanswer',
            question: 'A shopping cart has these rules: Free shipping if order >$50 AND (customer is premium OR order has 5+ items). How would you test this using Decision Table?',
            sampleAnswer: 'Conditions: Order >$50 (Y/N), Premium customer (Y/N), 5+ items (Y/N). Actions: Free shipping (Y/N). Create 8 combinations. Free shipping when: Order >$50 AND (Premium=Y OR Items≥5).',
            keywords: ['conditions', 'order', '50', 'premium', 'items', '5', 'actions', 'shipping', 'combinations', 'and', 'or'],
            minKeywords: 5,
            explanation: 'Decision Table: Conditions: 1) Order >$50 (Y/N), 2) Premium customer (Y/N), 3) 5+ items (Y/N). Actions: Free shipping (Y/N). Create 8 columns (2^3). Free shipping applies when: Order >$50 AND (Premium=Y OR Items≥5). Test cases: Order=$60, Premium=Y, Items=3 → Free shipping. Order=$60, Premium=N, Items=6 → Free shipping. Order=$60, Premium=N, Items=3 → No free shipping.',
            points: 5
          },
          {
            id: 'q36',
            type: 'shortanswer',
            question: 'You\'re testing a date picker that should only allow dates from 01/01/2020 to 31/12/2025. Which test design techniques would you combine and why?',
            sampleAnswer: 'Combine EP and BVA. EP for valid (2020-2025) and invalid (before 2020, after 2025) partitions. BVA for boundary dates: 31/12/2019, 01/01/2020, 31/12/2025, 01/01/2026. Also test invalid dates like 31/02/2024.',
            keywords: ['ep', 'bva', 'equivalence', 'boundary', 'valid', 'invalid', 'partition', '2020', '2025', 'dates', 'combine'],
            minKeywords: 5,
            explanation: 'Combine EP and BVA: EP creates partitions: Valid (01/01/2020 to 31/12/2025), Invalid (<01/01/2020), Invalid (>31/12/2025). BVA tests boundaries: 31/12/2019 (invalid), 01/01/2020 (valid min), 31/12/2025 (valid max), 01/01/2026 (invalid). Also test invalid dates: 31/02/2024, 30/02/2024, 32/01/2020. This combination ensures comprehensive coverage.',
            points: 5
          },
          {
            id: 'q37',
            type: 'shortanswer',
            question: 'Explain how you would use State Transition Testing for a document workflow: Draft → Review → Approved/Rejected → Published (only if Approved).',
            sampleAnswer: 'States: Draft, Review, Approved, Rejected, Published. Valid transitions: Draft→Review, Review→Approved, Review→Rejected, Approved→Published. Invalid transitions: Draft→Published, Rejected→Published. Test all valid and invalid transitions.',
            keywords: ['states', 'draft', 'review', 'approved', 'rejected', 'published', 'transitions', 'valid', 'invalid'],
            minKeywords: 5,
            explanation: 'States: Draft, Review, Approved, Rejected, Published. Valid transitions: Draft→Review (submit), Review→Approved (approve), Review→Rejected (reject), Approved→Published (publish). Invalid transitions to test: Draft→Published (skip review), Rejected→Published (publish rejected doc), Published→Draft (reverse flow). Test cases: Verify valid transitions work, verify invalid transitions are blocked with proper error messages.',
            points: 5
          },
          {
            id: 'q38',
            type: 'shortanswer',
            question: 'A loan approval system has 4 conditions: Credit score >700, Income >$50k, Employment >2 years, Debt ratio <40%. How many test cases would a full Decision Table have?',
            sampleAnswer: '16 test cases (2^4 = 16). Each condition can be True or False, creating 16 unique combinations. Can be optimized by identifying impossible or redundant combinations.',
            keywords: ['16', '2^4', 'combinations', 'conditions', 'test', 'cases', 'four', 'optimize'],
            minKeywords: 3,
            explanation: 'Full Decision Table: 2^4 = 16 test cases (4 conditions, each True/False). All combinations: TTTT, TTTF, TTFT, TTFF, TFTT, TFTF, TFFT, TFFF, FTTT, FTTF, FTFT, FTFF, FFTT, FFTF, FFFT, FFFF. Can be optimized by combining columns with identical actions (e.g., if any condition is False, loan is rejected). Optimized table might have 5-8 test cases instead of 16.',
            points: 5
          },
          {
            id: 'q39',
            type: 'shortanswer',
            question: 'You need to test a search feature that accepts 1-100 characters. Using both EP and BVA, list all your test cases.',
            sampleAnswer: 'EP: Valid (1-100 chars), Invalid (0 chars/empty, >100 chars). BVA: 0 chars (invalid), 1 char (valid min), 100 chars (valid max), 101 chars (invalid). Also test special characters, SQL injection, XSS.',
            keywords: ['ep', 'bva', 'valid', 'invalid', '0', '1', '100', '101', 'empty', 'characters', 'boundary'],
            minKeywords: 5,
            explanation: 'EP Partitions: Valid (1-100 characters), Invalid (0 characters/empty), Invalid (>100 characters). BVA Test Cases: 0 characters (invalid), 1 character (valid - minimum boundary), 100 characters (valid - maximum boundary), 101 characters (invalid). Additional tests: Special characters (@#$%), SQL injection (SELECT * FROM), XSS (<script>), Unicode characters, spaces only. Total: ~10-12 test cases covering all scenarios.',
            points: 5
          },
          {
            id: 'q40',
            type: 'shortanswer',
            question: 'Compare when you would use Decision Table Testing vs State Transition Testing. Give examples.',
            sampleAnswer: 'Decision Table: For complex business rules with multiple conditions (loan approval, discount calculation, insurance premium). State Transition: For systems with states and transitions (ATM, order workflow, game levels). Decision Table focuses on condition combinations, State Transition focuses on state changes.',
            keywords: ['decision', 'table', 'state', 'transition', 'conditions', 'rules', 'states', 'workflow', 'business', 'combinations'],
            minKeywords: 5,
            explanation: 'Decision Table Testing: Use for complex business rules with multiple conditions and combinations. Examples: Loan approval (credit score, income, employment), Discount calculation (order amount, membership, items), Insurance premium (age, coverage, history). State Transition Testing: Use for systems with different states and transitions. Examples: ATM (Active, Locked states), Order workflow (Pending, Processing, Shipped, Delivered), Game levels (Level 1→2→3). Key difference: Decision Table focuses on condition combinations and actions, State Transition focuses on state changes and transitions.',
            points: 5
          }
        ]
      }
    ]
  },

  day4: {
    title: "Day 4: Test Design Techniques Part 2 Assessment",
    passingScore: 70,
    timeLimit: 50,
    modes: {
      quick: {
        title: "Quick Assessment (Part 1 - 15 questions)",
        timeLimit: 20,
        description: "First part covering Use Case Testing, Error Guessing, and Exploratory Testing basics"
      },
      full: {
        title: "Full Assessment (All 40 questions)",
        timeLimit: 50,
        description: "Complete assessment covering all advanced test design techniques and scenarios"
      }
    },
    sections: [
      {
        id: 'section-a',
        title: 'Section A: Multiple Choice Questions (Part 1)',
        description: 'Choose the best answer for each question',
        questions: [
          {
            id: 'q1',
            type: 'mcq',
            question: 'What are the three main flow types in Use Case Testing?',
            options: [
              'Basic, Complex, Simple',
              'Basic, Alternate, Exception',
              'Happy, Sad, Error',
              'Primary, Secondary, Tertiary'
            ],
            correctAnswer: 1,
            explanation: 'Use Case Testing includes Basic Flow (happy path), Alternate Flows (variations), and Exception Flows (error conditions).',
            points: 3
          },
          {
            id: 'q2',
            type: 'mcq',
            question: 'Which test design technique relies on tester\'s experience and intuition to anticipate defects?',
            options: [
              'Equivalence Partitioning',
              'Boundary Value Analysis',
              'Error Guessing',
              'Decision Table Testing'
            ],
            correctAnswer: 2,
            explanation: 'Error Guessing is an experience-based technique where testers use their knowledge to anticipate where defects might occur.',
            points: 3
          },
          {
            id: 'q3',
            type: 'mcq',
            question: 'In Exploratory Testing, what does "simultaneous" mean?',
            options: [
              'Multiple testers testing at once',
              'Testing multiple features together',
              'Design and execution happen together',
              'Running multiple test cases simultaneously'
            ],
            correctAnswer: 2,
            explanation: 'Exploratory Testing involves simultaneous test design, execution, and learning - all happening together.',
            points: 3
          },
          {
            id: 'q4',
            type: 'mcq',
            question: 'What is a "charter" in Session-Based Exploratory Testing?',
            options: [
              'A test plan document',
              'A mission statement defining what to explore and discover',
              'A list of test cases',
              'A bug report template'
            ],
            correctAnswer: 1,
            explanation: 'A charter defines the scope, resources, and goals for an exploratory testing session.',
            points: 3
          },
          {
            id: 'q5',
            type: 'mcq',
            question: 'Which coverage type measures the percentage of code statements executed?',
            options: [
              'Branch Coverage',
              'Path Coverage',
              'Statement Coverage',
              'Function Coverage'
            ],
            correctAnswer: 2,
            explanation: 'Statement Coverage measures the percentage of code statements that have been executed during testing.',
            points: 3
          },
          {
            id: 'q6',
            type: 'mcq',
            question: 'In Use Case Testing, what is a "precondition"?',
            options: [
              'The final state after use case completes',
              'The state that must exist before the use case begins',
              'An error condition',
              'A test case requirement'
            ],
            correctAnswer: 1,
            explanation: 'Preconditions define the state that must exist before a use case can begin execution.',
            points: 3
          },
          {
            id: 'q7',
            type: 'mcq',
            question: 'Which of the following is a common error-prone area for input fields?',
            options: [
              'Empty input',
              'SQL injection attempts',
              'Special characters',
              'All of the above'
            ],
            correctAnswer: 3,
            explanation: 'Input fields are prone to errors with empty input, SQL injection, special characters, and many other issues.',
            points: 3
          },
          {
            id: 'q8',
            type: 'mcq',
            question: 'What does FCC CUTS VIDS stand for in Exploratory Testing?',
            options: [
              'A code coverage tool',
              'Different testing tours/approaches',
              'A bug tracking system',
              'A test automation framework'
            ],
            correctAnswer: 1,
            explanation: 'FCC CUTS VIDS represents different testing tours: Feature, Complexity, Claims, User, Testability, Scenario, Variability, Interoperability, Data, Structure.',
            points: 3
          },
          {
            id: 'q9',
            type: 'mcq',
            question: 'In White Box Testing, what is Branch Coverage also known as?',
            options: [
              'Statement Coverage',
              'Decision Coverage',
              'Path Coverage',
              'Line Coverage'
            ],
            correctAnswer: 1,
            explanation: 'Branch Coverage is also called Decision Coverage as it tests both true and false outcomes of decision points.',
            points: 3
          },
          {
            id: 'q10',
            type: 'mcq',
            question: 'What is the main advantage of Use Case Testing?',
            options: [
              'It\'s the fastest technique',
              'It provides end-to-end coverage from user perspective',
              'It requires no documentation',
              'It\'s fully automated'
            ],
            correctAnswer: 1,
            explanation: 'Use Case Testing provides comprehensive end-to-end coverage based on realistic user scenarios.',
            points: 3
          }
        ]
      },
      {
        id: 'section-b',
        title: 'Section B: True/False Questions (Part 1)',
        description: 'Determine whether each statement is true or false',
        questions: [
          {
            id: 'q11',
            type: 'truefalse',
            question: 'Use Case Testing only covers the happy path (basic flow).',
            correctAnswer: false,
            explanation: 'False. Use Case Testing covers basic flow, alternate flows, and exception flows - not just the happy path.',
            points: 3
          },
          {
            id: 'q12',
            type: 'truefalse',
            question: 'Error Guessing is a systematic, repeatable test design technique.',
            correctAnswer: false,
            explanation: 'False. Error Guessing is experience-based and depends on tester\'s intuition, making it less systematic and repeatable.',
            points: 3
          },
          {
            id: 'q13',
            type: 'truefalse',
            question: 'Exploratory Testing means testing without any planning or structure.',
            correctAnswer: false,
            explanation: 'False. Exploratory Testing is structured through charters, time boxes, and testing tours - it\'s not random testing.',
            points: 3
          },
          {
            id: 'q14',
            type: 'truefalse',
            question: 'In White Box Testing, 100% code coverage guarantees no bugs.',
            correctAnswer: false,
            explanation: 'False. 100% code coverage doesn\'t guarantee bug-free code; it only means all code was executed, not that all scenarios were tested.',
            points: 3
          },
          {
            id: 'q15',
            type: 'truefalse',
            question: 'QA testers should understand White Box Testing concepts even if developers write unit tests.',
            correctAnswer: true,
            explanation: 'True. QA should understand White Box concepts to review coverage reports, suggest scenarios, and collaborate with developers.',
            points: 3
          }
        ]
      },
      // Additional sections for FULL mode
      {
        id: 'section-a-full',
        title: 'Section A: Multiple Choice Questions (Part 2)',
        description: 'Additional MCQ questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q16',
            type: 'mcq',
            question: 'In a Use Case, what is an "alternate flow"?',
            options: [
              'An error condition',
              'A variation of the basic flow',
              'The main happy path',
              'A failed test case'
            ],
            correctAnswer: 1,
            explanation: 'Alternate flows represent variations of the basic flow, such as using a saved address instead of entering a new one.',
            points: 3
          },
          {
            id: 'q17',
            type: 'mcq',
            question: 'Which error guessing scenario tests for race conditions?',
            options: [
              'Testing with empty input',
              'Testing with very long input',
              'Adding last item from two devices simultaneously',
              'Testing with special characters'
            ],
            correctAnswer: 2,
            explanation: 'Testing concurrent access from multiple devices can reveal race conditions in inventory management.',
            points: 3
          },
          {
            id: 'q18',
            type: 'mcq',
            question: 'What is the typical time box for an exploratory testing session?',
            options: [
              '15-30 minutes',
              '60-120 minutes',
              '4-8 hours',
              '1-2 days'
            ],
            correctAnswer: 1,
            explanation: 'Exploratory testing sessions are typically time-boxed to 60-120 minutes (1-2 hours) to maintain focus.',
            points: 3
          },
          {
            id: 'q19',
            type: 'mcq',
            question: 'In the FEATURE tour, what is the focus?',
            options: [
              'Testing complex areas only',
              'Testing each feature systematically one by one',
              'Testing user scenarios',
              'Testing integration points'
            ],
            correctAnswer: 1,
            explanation: 'The Feature Tour focuses on testing each feature thoroughly, one at a time.',
            points: 3
          },
          {
            id: 'q20',
            type: 'mcq',
            question: 'What is the formula for Statement Coverage?',
            options: [
              '(Branches Executed / Total Branches) × 100%',
              '(Statements Executed / Total Statements) × 100%',
              '(Paths Executed / Total Paths) × 100%',
              '(Functions Executed / Total Functions) × 100%'
            ],
            correctAnswer: 1,
            explanation: 'Statement Coverage is calculated as the percentage of code statements executed during testing.',
            points: 3
          },
          {
            id: 'q21',
            type: 'mcq',
            question: 'Which testing technique is best for testing a complete user workflow from login to checkout?',
            options: [
              'Equivalence Partitioning',
              'Boundary Value Analysis',
              'Use Case Testing',
              'Statement Coverage'
            ],
            correctAnswer: 2,
            explanation: 'Use Case Testing is ideal for end-to-end workflows as it follows complete user scenarios.',
            points: 3
          },
          {
            id: 'q22',
            type: 'mcq',
            question: 'What should you test when error guessing for date fields?',
            options: [
              'Only valid dates',
              'Feb 29 on non-leap years',
              'Only current dates',
              'Only future dates'
            ],
            correctAnswer: 1,
            explanation: 'Error guessing for dates includes testing invalid dates like Feb 29 on non-leap years, Feb 30, Feb 31, etc.',
            points: 3
          },
          {
            id: 'q23',
            type: 'mcq',
            question: 'In Exploratory Testing, what is the purpose of a "mind map"?',
            options: [
              'To automate tests',
              'To visualize and organize testing areas',
              'To calculate code coverage',
              'To generate test data'
            ],
            correctAnswer: 1,
            explanation: 'Mind maps help visualize and organize different areas of the application for exploratory testing.',
            points: 3
          },
          {
            id: 'q24',
            type: 'mcq',
            question: 'What is Path Coverage in White Box Testing?',
            options: [
              'Testing all statements',
              'Testing all branches',
              'Testing all possible paths through the code',
              'Testing all functions'
            ],
            correctAnswer: 2,
            explanation: 'Path Coverage measures the percentage of all possible execution paths that have been tested.',
            points: 3
          },
          {
            id: 'q25',
            type: 'mcq',
            question: 'Which is NOT a component of a Use Case?',
            options: [
              'Actor',
              'Precondition',
              'Code Coverage',
              'Postcondition'
            ],
            correctAnswer: 2,
            explanation: 'Code Coverage is a White Box testing metric, not a component of Use Case Testing.',
            points: 3
          }
        ]
      },
      {
        id: 'section-b-full',
        title: 'Section B: True/False Questions (Part 2)',
        description: 'Additional true/false questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q26',
            type: 'truefalse',
            question: 'A Use Case postcondition describes the state after the use case completes.',
            correctAnswer: true,
            explanation: 'True. Postconditions define the system state after successful or failed completion of the use case.',
            points: 3
          },
          {
            id: 'q27',
            type: 'truefalse',
            question: 'Error Guessing can complement formal test design techniques like EP and BVA.',
            correctAnswer: true,
            explanation: 'True. Error Guessing is often used alongside formal techniques to find additional edge cases and unexpected issues.',
            points: 3
          },
          {
            id: 'q28',
            type: 'truefalse',
            question: 'Exploratory Testing sessions should always be recorded or documented.',
            correctAnswer: true,
            explanation: 'True. Documentation through session sheets, recordings, or notes is essential for tracking findings and sharing knowledge.',
            points: 3
          },
          {
            id: 'q29',
            type: 'truefalse',
            question: 'Branch Coverage is always higher than Statement Coverage.',
            correctAnswer: false,
            explanation: 'False. Branch Coverage is typically equal to or lower than Statement Coverage, as it has stricter requirements (testing both true and false branches).',
            points: 3
          },
          {
            id: 'q30',
            type: 'truefalse',
            question: 'The CLAIMS tour in Exploratory Testing focuses on verifying marketing claims and documentation.',
            correctAnswer: true,
            explanation: 'True. The Claims Tour specifically tests whether the application meets its advertised claims and documented features.',
            points: 3
          }
        ]
      },
      {
        id: 'section-c-full',
        title: 'Section C: Scenario-Based Questions',
        description: 'Real-world scenario questions for comprehensive assessment',
        fullModeOnly: true,
        questions: [
          {
            id: 'q31',
            type: 'shortanswer',
            question: 'You\'re testing an online banking transfer feature. Using Use Case Testing, describe the basic flow, one alternate flow, and one exception flow.',
            sampleAnswer: 'Basic Flow: User logs in, selects source account, selects destination account, enters amount, confirms, transfer completes, confirmation displayed. Alternate Flow: User schedules future transfer - at amount entry, selects schedule for later, picks date/time, continues to confirmation. Exception Flow: Insufficient funds - system detects balance less than amount, displays error with available balance, user can modify or cancel.',
            keywords: ['basic', 'flow', 'alternate', 'exception', 'transfer', 'account', 'amount', 'error', 'insufficient', 'schedule', 'confirmation'],
            minKeywords: 5,
            explanation: 'Use Case Testing requires identifying basic flow (happy path), alternate flows (variations), and exception flows (error handling) for comprehensive coverage.',
            points: 5
          },
          {
            id: 'q32',
            type: 'shortanswer',
            question: 'You\'re testing a shopping cart. Using Error Guessing, list 5 error-prone scenarios you would test.',
            sampleAnswer: 'Update quantity to 0 or negative, apply multiple discount codes simultaneously, item price changes while in cart, session timeout with items in cart, product goes out of stock during checkout, add item from two browsers simultaneously for race condition.',
            keywords: ['quantity', 'negative', 'discount', 'price', 'session', 'timeout', 'stock', 'race', 'condition', 'concurrent', 'browser', 'codes'],
            minKeywords: 5,
            explanation: 'Error Guessing leverages experience to identify common error-prone areas like quantity validation, concurrent access, session management, and price synchronization.',
            points: 5
          },
          {
            id: 'q33',
            type: 'shortanswer',
            question: 'Create a 60-minute Exploratory Testing charter for testing a food delivery app\'s ordering flow.',
            sampleAnswer: 'EXPLORE: Food ordering flow from restaurant selection to order confirmation. WITH: Mobile app, test account, test credit card, various restaurants. TO DISCOVER: Usability issues, calculation errors, performance problems, edge cases. TIME BOX: 60 minutes. Focus: restaurant search and filtering, menu browsing and cart management, checkout and payment, edge cases and error handling.',
            keywords: ['explore', 'charter', 'time', 'box', 'discover', 'restaurant', 'cart', 'payment', 'checkout', 'menu', 'filter', 'edge', 'usability'],
            minKeywords: 6,
            explanation: 'Exploratory Testing charters define the mission (EXPLORE), resources (WITH), goals (TO DISCOVER), and time constraint (TIME BOX) for structured exploratory sessions.',
            points: 5
          },
          {
            id: 'q34',
            type: 'shortanswer',
            question: 'You receive a code coverage report showing 75% statement coverage and 60% branch coverage for the payment module. As a QA, what actions would you take?',
            sampleAnswer: 'Review coverage report to identify uncovered lines and branches, analyze missing scenarios like error handling and edge cases, create test cases for uncovered code paths, focus on the 25% uncovered statements, investigate why branch coverage is lower, collaborate with developers to understand uncovered code, prioritize testing critical paths like payment failures, timeouts, and refunds.',
            keywords: ['coverage', 'report', 'uncovered', 'branches', 'statements', 'test', 'cases', 'error', 'handling', 'edge', 'critical', 'payment', 'analyze', 'collaborate'],
            minKeywords: 6,
            explanation: 'QA should review coverage reports, identify gaps, create test cases for uncovered code, and collaborate with developers to ensure critical paths are tested.',
            points: 5
          },
          {
            id: 'q35',
            type: 'shortanswer',
            question: 'Describe how you would use the VARIABILITY tour to test a login feature.',
            sampleAnswer: 'VARIABILITY tour varies inputs and configurations: different browsers (Chrome, Firefox, Safari, Edge), different devices (desktop, mobile, tablet), different screen sizes, different user roles (admin, regular user, guest), different credentials (valid, invalid, expired, locked), different network conditions (fast WiFi, slow 3G, offline), different input methods (keyboard, copy-paste, autofill, password manager).',
            keywords: ['variability', 'tour', 'different', 'browsers', 'devices', 'screen', 'roles', 'credentials', 'network', 'input', 'methods', 'configurations'],
            minKeywords: 6,
            explanation: 'The VARIABILITY tour systematically varies inputs, configurations, environments, and conditions to discover issues across different scenarios.',
            points: 5
          },
          {
            id: 'q36',
            type: 'shortanswer',
            question: 'You\'re testing a hotel booking system. Write a Use Case for booking a room including at least one alternate flow and one exception flow.',
            sampleAnswer: 'Basic Flow: Guest enters destination, dates, guests, system displays hotels, guest filters and selects hotel and room, system shows booking summary, guest enters details and payment, system processes and creates reservation, displays confirmation. Alternate Flow: Apply promo code at booking summary, system validates and applies discount, total updates. Exception Flow: Payment declined, system displays error, guest can retry with different card or cancel.',
            keywords: ['use', 'case', 'basic', 'flow', 'alternate', 'exception', 'hotel', 'booking', 'room', 'guest', 'payment', 'promo', 'code', 'error', 'declined'],
            minKeywords: 8,
            explanation: 'Use Cases document complete workflows including basic flow (success path), alternate flows (variations), and exception flows (error scenarios).',
            points: 5
          },
          {
            id: 'q37',
            type: 'shortanswer',
            question: 'Using Error Guessing, what would you test for a password field that requires 8-20 characters with at least one uppercase, one lowercase, and one number?',
            sampleAnswer: 'Test all lowercase (missing uppercase), all uppercase (missing lowercase), no numbers, only 7 characters (below minimum), 21 characters (above maximum), special characters only, spaces in password, common passwords, empty field, copy-paste vs typing, leading/trailing spaces, SQL injection attempts.',
            keywords: ['error', 'guessing', 'password', 'uppercase', 'lowercase', 'number', 'characters', 'minimum', 'maximum', 'special', 'validation', 'empty', 'weak', 'injection'],
            minKeywords: 7,
            explanation: 'Error Guessing for password fields includes testing boundary violations, missing requirements, special cases, security vulnerabilities, and common user mistakes.',
            points: 5
          },
          {
            id: 'q38',
            type: 'shortanswer',
            question: 'Explain the difference between Statement Coverage and Branch Coverage with an example.',
            sampleAnswer: 'Statement Coverage measures percentage of code statements executed. Branch Coverage measures percentage of decision points tested for both true and false. Example: if age >= 18 return Adult else return Minor. Statement Coverage needs 1 test (age=20 covers both statements). Branch Coverage needs 2 tests (age=20 for true, age=15 for false). Branch Coverage is stricter requiring both outcomes.',
            keywords: ['statement', 'coverage', 'branch', 'decision', 'true', 'false', 'percentage', 'executed', 'outcomes', 'example', 'test', 'stricter'],
            minKeywords: 7,
            explanation: 'Statement Coverage counts executed lines, while Branch Coverage ensures all decision outcomes (true/false) are tested, making it more thorough.',
            points: 5
          },
          {
            id: 'q39',
            type: 'shortanswer',
            question: 'You have 90 minutes for an exploratory testing session on a new e-commerce checkout feature. How would you structure your session?',
            sampleAnswer: 'Minutes 0-10: Setup and initial exploration. Minutes 10-30: FEATURE tour testing core checkout functionality. Minutes 30-50: USER tour with different scenarios (guest vs logged-in, multiple items, payment methods, discount codes). Minutes 50-70: VARIABILITY tour testing edge cases (invalid addresses, expired cards, out of stock, session timeout, network issues). Minutes 70-85: Bug investigation and reproduction. Minutes 85-90: Wrap-up and documentation.',
            keywords: ['exploratory', 'session', 'minutes', 'structure', 'feature', 'tour', 'user', 'variability', 'edge', 'cases', 'checkout', 'bugs', 'documentation', 'time', 'box'],
            minKeywords: 8,
            explanation: 'Structured exploratory sessions allocate time for setup, systematic tours (Feature, User, Variability), bug investigation, and documentation.',
            points: 5
          },
          {
            id: 'q40',
            type: 'shortanswer',
            question: 'As a QA reviewing unit test coverage, you notice the error handling code has 0% coverage. What would you recommend to the development team?',
            sampleAnswer: 'Add unit tests for all error scenarios, test exception handling paths, verify error messages, test error logging. Specific tests needed: network timeouts, database failures, invalid input, null pointers, file not found, permission denied. Use mocking to simulate errors, test error detection and recovery, verify user error messages, check error logging. Error handling is critical for production stability, uncovered paths are high-risk, aim for 90%+ coverage on error handling.',
            keywords: ['error', 'handling', 'coverage', 'unit', 'tests', 'exceptions', 'scenarios', 'mocking', 'logging', 'critical', 'risk', 'recommend', 'developers', 'integration'],
            minKeywords: 8,
            explanation: 'Error handling code is critical and must be thoroughly tested using unit tests, mocking for error simulation, and verification of proper error detection, logging, and user messaging.',
            points: 5
          }
        ]
      }
    ]
  },

  day5: {
    title: "Day 5: Test Documentation & Artifacts Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is the primary purpose of a Test Plan?',
            options: [
              'To list all test cases',
              'To define the testing strategy, scope, and resources',
              'To report bugs',
              'To automate tests'
            ],
            correctAnswer: 1,
            explanation: 'A Test Plan defines the overall testing strategy, scope, approach, resources, and schedule.',
            points: 5
          }
        ]
      }
    ]
  },

  day6: {
    title: "Day 6: Defect Management & Bug Life Cycle Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is the first status of a newly reported bug?',
            options: [
              'Assigned',
              'New/Open',
              'In Progress',
              'Fixed'
            ],
            correctAnswer: 1,
            explanation: 'A newly reported bug typically starts with the status New or Open.',
            points: 5
          }
        ]
      }
    ]
  },

  day7: {
    title: "Day 7: Week 1 Review & Practical Assessment",
    passingScore: 70,
    timeLimit: 60,
    modes: {
      quick: {
        title: "Quick Review (20 questions)",
        timeLimit: 30,
        description: "Quick review of Week 1 concepts"
      },
      full: {
        title: "Full Assessment (40 questions)",
        timeLimit: 60,
        description: "Comprehensive Week 1 review assessment"
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
            question: 'Which testing level is performed first in the testing process?',
            options: [
              'System Testing',
              'Integration Testing',
              'Unit Testing',
              'Acceptance Testing'
            ],
            correctAnswer: 2,
            explanation: 'Unit Testing is typically performed first, testing individual components.',
            points: 5
          }
        ]
      }
    ]
  },

  day8: {
    title: "Day 8: Web Application Testing - Part 1 Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What does UI stand for in web testing?',
            options: [
              'Universal Interface',
              'User Interface',
              'Unified Integration',
              'User Integration'
            ],
            correctAnswer: 1,
            explanation: 'UI stands for User Interface, which is what users interact with.',
            points: 5
          }
        ]
      }
    ]
  },

  day9: {
    title: "Day 9: Web Application Testing - Part 2 Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is the purpose of cross-browser testing?',
            options: [
              'To test on multiple operating systems',
              'To ensure the application works correctly across different browsers',
              'To test mobile applications',
              'To test APIs'
            ],
            correctAnswer: 1,
            explanation: 'Cross-browser testing ensures the application works correctly across different browsers like Chrome, Firefox, Safari, etc.',
            points: 5
          }
        ]
      }
    ]
  },

  day10: {
    title: "Day 10: Mobile Application Testing Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What are the two major mobile platforms?',
            options: [
              'Windows and Linux',
              'iOS and Android',
              'MacOS and Windows',
              'Chrome and Firefox'
            ],
            correctAnswer: 1,
            explanation: 'The two major mobile platforms are iOS (Apple) and Android (Google).',
            points: 5
          }
        ]
      }
    ]
  },

  day11: {
    title: "Day 11: Specialized Testing Types Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is the primary focus of Performance Testing?',
            options: [
              'Testing functionality',
              'Testing security',
              'Testing system behavior under load',
              'Testing user interface'
            ],
            correctAnswer: 2,
            explanation: 'Performance Testing focuses on testing system behavior, response time, and stability under various load conditions.',
            points: 5
          }
        ]
      }
    ]
  },

  day12: {
    title: "Day 12: Regression & Smoke Testing Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is the main purpose of Regression Testing?',
            options: [
              'To test new features',
              'To ensure existing functionality still works after changes',
              'To test performance',
              'To test security'
            ],
            correctAnswer: 1,
            explanation: 'Regression Testing ensures that existing functionality continues to work correctly after code changes.',
            points: 5
          }
        ]
      }
    ]
  },

  day13: {
    title: "Day 13: Exploratory Testing & SBTM Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What does SBTM stand for?',
            options: [
              'System Based Test Management',
              'Session-Based Test Management',
              'Simple Bug Tracking Method',
              'Software Build Test Methodology'
            ],
            correctAnswer: 1,
            explanation: 'SBTM stands for Session-Based Test Management, a structured approach to exploratory testing.',
            points: 5
          }
        ]
      }
    ]
  },

  day14: {
    title: "Day 14: Week 2 Review & Assessment",
    passingScore: 70,
    timeLimit: 60,
    modes: {
      quick: {
        title: "Quick Review (20 questions)",
        timeLimit: 30,
        description: "Quick review of Week 2 concepts"
      },
      full: {
        title: "Full Assessment (40 questions)",
        timeLimit: 60,
        description: "Comprehensive Week 2 review assessment"
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
            question: 'Which testing approach is best for testing complex workflows?',
            options: [
              'Unit Testing',
              'Exploratory Testing',
              'Performance Testing',
              'Security Testing'
            ],
            correctAnswer: 1,
            explanation: 'Exploratory Testing is effective for complex workflows as it allows testers to discover issues through investigation.',
            points: 5
          }
        ]
      }
    ]
  },

  day15: {
    title: "Day 15: Agile Testing & Scrum Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is a Sprint in Scrum?',
            options: [
              'A testing phase',
              'A time-boxed iteration typically 1-4 weeks',
              'A bug report',
              'A meeting type'
            ],
            correctAnswer: 1,
            explanation: 'A Sprint is a time-boxed iteration in Scrum, typically lasting 1-4 weeks.',
            points: 5
          }
        ]
      }
    ]
  },

  day16: {
    title: "Day 16: Test Management & Metrics Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is a Test Metric?',
            options: [
              'A test case',
              'A quantitative measure of testing progress or quality',
              'A bug report',
              'A test plan'
            ],
            correctAnswer: 1,
            explanation: 'A Test Metric is a quantitative measure that helps track testing progress, quality, and effectiveness.',
            points: 5
          }
        ]
      }
    ]
  },

  day17: {
    title: "Day 17: Risk-Based Testing Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is the primary benefit of Risk-Based Testing?',
            options: [
              'Testing everything equally',
              'Focusing testing efforts on high-risk areas',
              'Reducing testing time completely',
              'Eliminating test planning'
            ],
            correctAnswer: 1,
            explanation: 'Risk-Based Testing prioritizes testing efforts on areas with the highest risk, maximizing testing effectiveness.',
            points: 5
          }
        ]
      }
    ]
  },

  day18: {
    title: "Day 18: Test Tools & Systems Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is JIRA commonly used for?',
            options: [
              'Code development',
              'Bug tracking and project management',
              'Database management',
              'Network monitoring'
            ],
            correctAnswer: 1,
            explanation: 'JIRA is widely used for bug tracking, issue tracking, and agile project management.',
            points: 5
          }
        ]
      }
    ]
  },

  day19: {
    title: "Day 19: Communication & Soft Skills Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What is the most important skill for a QA professional when reporting bugs?',
            options: [
              'Technical knowledge only',
              'Clear communication and documentation',
              'Programming skills',
              'Design skills'
            ],
            correctAnswer: 1,
            explanation: 'Clear communication and documentation are essential for effective bug reporting and collaboration.',
            points: 5
          }
        ]
      }
    ]
  },

  day20: {
    title: "Day 20: Industry Best Practices Assessment",
    passingScore: 70,
    timeLimit: 45,
    modes: {
      quick: {
        title: "Quick Assessment (15 questions)",
        timeLimit: 20,
        description: "A quick assessment covering key concepts"
      },
      full: {
        title: "Full Assessment (30 questions)",
        timeLimit: 45,
        description: "Comprehensive assessment covering all topics"
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
            question: 'What does CI/CD stand for?',
            options: [
              'Code Integration / Code Deployment',
              'Continuous Integration / Continuous Deployment',
              'Central Integration / Central Development',
              'Custom Integration / Custom Deployment'
            ],
            correctAnswer: 1,
            explanation: 'CI/CD stands for Continuous Integration and Continuous Deployment, key practices in modern software development.',
            points: 5
          }
        ]
      }
    ]
  },

  day21: {
    title: "Day 21: Final Review & Certification Prep Assessment",
    passingScore: 70,
    timeLimit: 60,
    modes: {
      quick: {
        title: "Quick Review (20 questions)",
        timeLimit: 30,
        description: "Quick review of all concepts"
      },
      full: {
        title: "Full Assessment (50 questions)",
        timeLimit: 60,
        description: "Comprehensive final assessment"
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
            question: 'What is the primary goal of manual testing?',
            options: [
              'To replace automation',
              'To ensure software quality and find defects',
              'To write code',
              'To manage projects'
            ],
            correctAnswer: 1,
            explanation: 'The primary goal of manual testing is to ensure software quality by finding defects before production.',
            points: 5
          }
        ]
      }
    ]
  },

};

// Helper function to get assessment for a day with mode support
export const getAssessment = (dayId, mode = 'quick') => {
  const assessment = assessments[dayId];
  if (!assessment) return null;
  
  // Filter sections based on mode
  let sections = assessment.sections;
  if (mode === 'quick') {
    // Quick mode: exclude fullModeOnly sections
    sections = assessment.sections.filter(section => !section.fullModeOnly);
  }
  // Full mode: include all sections
  
  // Get time limit based on mode
  const timeLimit = assessment.modes?.[mode]?.timeLimit || assessment.timeLimit;
  
  // If assessment has sections, flatten questions
  if (sections) {
    return {
      ...assessment,
      timeLimit,
      mode,
      questions: sections.flatMap(section => section.questions)
    };
  }
  
  return assessment;
};

// Helper function to get assessment with sections and mode support
export const getAssessmentWithSections = (dayId, mode = 'quick') => {
  const assessment = assessments[dayId];
  if (!assessment) return null;
  
  // Filter sections based on mode
  let sections = assessment.sections;
  if (mode === 'quick') {
    // Quick mode: exclude fullModeOnly sections
    sections = assessment.sections.filter(section => !section.fullModeOnly);
  }
  
  // Get time limit based on mode
  const timeLimit = assessment.modes?.[mode]?.timeLimit || assessment.timeLimit;
  
  return {
    ...assessment,
    sections,
    timeLimit,
    mode
  };
};

// Helper function to check if assessment has modes
export const hasAssessmentModes = (dayId) => {
  const assessment = assessments[dayId];
  return assessment && assessment.modes ? true : false;
};

// Helper function to get available modes for an assessment
export const getAssessmentModes = (dayId) => {
  const assessment = assessments[dayId];
  return assessment?.modes || null;
};

// Helper function to check if day has assessment
export const hasAssessment = (dayId) => {
  return assessments.hasOwnProperty(dayId);
};

// Calculate score
export const calculateScore = (answers, assessment) => {
  let totalPoints = 0;
  let earnedPoints = 0;
  
  assessment.questions.forEach((question, index) => {
    totalPoints += question.points;
    const userAnswer = answers[question.id];
    
    if (userAnswer !== undefined && userAnswer !== null) {
      if (question.type === 'mcq' || question.type === 'truefalse') {
        if (userAnswer === question.correctAnswer) {
          earnedPoints += question.points;
        }
      } else if (question.type === 'fillblank') {
        const acceptable = question.acceptableAnswers || [question.correctAnswer];
        const userAnswerNormalized = question.caseSensitive 
          ? userAnswer.trim() 
          : userAnswer.trim().toLowerCase();
        
        const isCorrect = acceptable.some(ans => {
          const ansNormalized = question.caseSensitive 
            ? ans.trim() 
            : ans.trim().toLowerCase();
          return userAnswerNormalized === ansNormalized;
        });
        
        if (isCorrect) {
          earnedPoints += question.points;
        }
      } else if (question.type === 'shortanswer') {
        // For short answer, check if minimum keywords are present
        const userAnswerLower = userAnswer.toLowerCase();
        const matchedKeywords = question.keywords.filter(keyword => 
          userAnswerLower.includes(keyword.toLowerCase())
        );
        
        if (matchedKeywords.length >= question.minKeywords) {
          earnedPoints += question.points;
        }
      }
    }
  });
  
  const percentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
  const passed = percentage >= assessment.passingScore;
  
  return {
    earnedPoints,
    totalPoints,
    percentage,
    passed,
    grade: getGrade(percentage)
  };
};

// Get letter grade
const getGrade = (percentage) => {
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
};