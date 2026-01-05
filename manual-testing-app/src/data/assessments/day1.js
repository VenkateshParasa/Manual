export default {
  title: "Day 1: Manual Testing Fundamentals & SDLC Assessment",
  passingScore: 70,
  timeLimit: 30,
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
};
