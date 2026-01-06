export default {
  title: "Day 5: Test Documentation & Artifacts Assessment",
  passingScore: 70,
  timeLimit: 40,
  modes: {
    quick: {
      timeLimit: 15,
      sections: ['section-a', 'section-b']
    },
    full: {
      timeLimit: 40,
      sections: ['section-a', 'section-b', 'section-c', 'section-a-full', 'section-b-full']
    }
  },
  sections: [
    {
      id: 'section-a',
      title: 'Multiple Choice Questions',
      description: 'Test your knowledge of test documentation and artifacts',
      questions: [
        {
          id: 'q1',
          type: 'mcq',
          question: 'Which standard defines test documentation templates?',
          options: [
            'ISO 9001',
            'IEEE 829',
            'CMMI',
            'Six Sigma'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'IEEE 829 is the standard for software test documentation, defining templates for test plans, test cases, and other test artifacts.'
        },
        {
          id: 'q2',
          type: 'mcq',
          question: 'What is the primary purpose of a test plan?',
          options: [
            'To list all test cases',
            'To define the testing approach, scope, and resources',
            'To report defects',
            'To execute tests'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'A test plan defines the overall testing strategy, scope, approach, resources, schedule, and deliverables - not detailed test cases.'
        },
        {
          id: 'q3',
          type: 'mcq',
          question: 'Which of the following is NOT typically included in a test plan?',
          options: [
            'Test scope',
            'Entry and exit criteria',
            'Detailed test case steps',
            'Risk assessment'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'Test plans are high-level documents. Detailed test case steps belong in individual test cases, not the test plan.'
        },
        {
          id: 'q4',
          type: 'mcq',
          question: 'What is a Requirements Traceability Matrix (RTM)?',
          options: [
            'A matrix showing test execution results',
            'A document linking requirements to test cases',
            'A defect tracking report',
            'A test schedule'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'RTM ensures bidirectional traceability between requirements and test cases, ensuring all requirements are tested and all tests map to requirements.'
        },
        {
          id: 'q5',
          type: 'mcq',
          question: 'What is the difference between a test scenario and a test case?',
          options: [
            'No difference, they are the same',
            'Test scenario is high-level, test case is detailed',
            'Test case is high-level, test scenario is detailed',
            'Test scenarios are only for manual testing'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Test scenarios describe WHAT to test (high-level), while test cases describe HOW to test (detailed steps, data, expected results).'
        },
        {
          id: 'q6',
          type: 'mcq',
          question: 'Which test case component describes the starting state?',
          options: [
            'Test steps',
            'Expected result',
            'Preconditions',
            'Postconditions'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'Preconditions define what must be true before test execution begins - the starting state or setup required.'
        },
        {
          id: 'q7',
          type: 'mcq',
          question: 'What does P0 priority typically indicate?',
          options: [
            'Low priority',
            'Medium priority',
            'High priority',
            'Critical priority (must fix immediately)'
          ],
          correctAnswer: 3,
          points: 2,
          explanation: 'P0 indicates critical/blocker priority requiring immediate attention - typically system-breaking issues.'
        },
        {
          id: 'q8',
          type: 'mcq',
          question: 'What is entry criteria in testing?',
          options: [
            'Conditions to stop testing',
            'Conditions to start testing',
            'Test case format',
            'Defect severity levels'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Entry criteria define the conditions that must be met before testing can begin (e.g., code complete, test environment ready).'
        },
        {
          id: 'q9',
          type: 'mcq',
          question: 'What is exit criteria in testing?',
          options: [
            'Conditions to start testing',
            'Conditions to stop testing and move to next phase',
            'Test environment setup',
            'Test data requirements'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Exit criteria define when testing is complete and ready to move to the next phase (e.g., 95% pass rate, all critical bugs fixed).'
        },
        {
          id: 'q10',
          type: 'mcq',
          question: 'Which document provides a summary of testing activities and results?',
          options: [
            'Test plan',
            'Test case',
            'Test summary report',
            'Requirements document'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'Test summary report provides an overview of all testing activities, results, metrics, and recommendations after testing completion.'
        }
      ]
    },
    {
      id: 'section-b',
      title: 'True/False Questions',
      description: 'Determine if the following statements are true or false',
      questions: [
        {
          id: 'q11',
          type: 'truefalse',
          question: 'A test plan should be created before test case development.',
          correctAnswer: true,
          points: 2,
          explanation: 'True. The test plan provides direction and strategy for test case development, so it should be created first.'
        },
        {
          id: 'q12',
          type: 'truefalse',
          question: 'Test cases should include both positive and negative scenarios.',
          correctAnswer: true,
          points: 2,
          explanation: 'True. Comprehensive testing requires both positive (valid inputs) and negative (invalid inputs) test scenarios.'
        },
        {
          id: 'q13',
          type: 'truefalse',
          question: 'Entry criteria and exit criteria are the same thing.',
          correctAnswer: false,
          points: 2,
          explanation: 'False. Entry criteria define when to START testing, while exit criteria define when to STOP testing.'
        },
        {
          id: 'q14',
          type: 'truefalse',
          question: 'A Requirements Traceability Matrix ensures all requirements are tested.',
          correctAnswer: true,
          points: 2,
          explanation: 'True. RTM maps requirements to test cases, ensuring 100% requirements coverage and identifying gaps.'
        },
        {
          id: 'q15',
          type: 'truefalse',
          question: 'Test documentation is only needed for large projects.',
          correctAnswer: false,
          points: 2,
          explanation: 'False. Test documentation is important for projects of all sizes to ensure quality, traceability, and knowledge transfer.'
        }
      ]
    },
    {
      id: 'section-c',
      title: 'Fill in the Blanks',
      description: 'Complete the following statements',
      questions: [
        {
          id: 'q16',
          type: 'fillblank',
          question: 'The _____ standard defines templates for software test documentation.',
          acceptableAnswers: ['IEEE 829', 'IEEE-829', '829'],
          caseSensitive: false,
          points: 2,
          explanation: 'IEEE 829 is the international standard for software test documentation templates.'
        },
        {
          id: 'q17',
          type: 'fillblank',
          question: 'A _____ links requirements to test cases ensuring complete coverage.',
          acceptableAnswers: ['RTM', 'Requirements Traceability Matrix', 'Traceability Matrix'],
          caseSensitive: false,
          points: 2,
          explanation: 'Requirements Traceability Matrix (RTM) ensures bidirectional traceability between requirements and tests.'
        },
        {
          id: 'q18',
          type: 'fillblank',
          question: '_____ criteria define the conditions that must be met before testing can begin.',
          acceptableAnswers: ['Entry', 'Entry criteria'],
          caseSensitive: false,
          points: 2,
          explanation: 'Entry criteria specify prerequisites for starting testing (e.g., code complete, environment ready).'
        },
        {
          id: 'q19',
          type: 'fillblank',
          question: 'A _____ is a collection of related test cases grouped together.',
          acceptableAnswers: ['test suite', 'suite'],
          caseSensitive: false,
          points: 2,
          explanation: 'A test suite groups related test cases (e.g., Login Suite, Checkout Suite) for organized execution.'
        },
        {
          id: 'q20',
          type: 'fillblank',
          question: '_____ describe what must be true before a test case can be executed.',
          acceptableAnswers: ['Preconditions', 'Pre-conditions'],
          caseSensitive: false,
          points: 2,
          explanation: 'Preconditions define the starting state or setup required before test execution.'
        }
      ]
    },
    {
      id: 'section-a-full',
      title: 'Additional Multiple Choice Questions',
      description: 'More questions on test documentation',
      fullModeOnly: true,
      questions: [
        {
          id: 'q21',
          type: 'mcq',
          question: 'What should a good test case ID include?',
          options: [
            'Only numbers',
            'Only letters',
            'A meaningful prefix and unique identifier',
            'Random characters'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'Good test case IDs are structured with meaningful prefixes (TC-LOGIN-001, TC-CART-015) for easy identification and organization.'
        },
        {
          id: 'q22',
          type: 'mcq',
          question: 'What is the purpose of test data in test cases?',
          options: [
            'To make test cases longer',
            'To provide specific inputs for test execution',
            'To confuse testers',
            'To replace test steps'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Test data specifies exact input values to use during testing, ensuring consistent and repeatable test execution.'
        },
        {
          id: 'q23',
          type: 'mcq',
          question: 'Which artifact links test cases back to requirements?',
          options: [
            'Test plan',
            'Defect report',
            'Traceability matrix',
            'Test summary report'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'The traceability matrix (RTM) links requirements to test cases, ensuring complete coverage and bidirectional traceability.'
        },
        {
          id: 'q24',
          type: 'mcq',
          question: 'What is a test suite?',
          options: [
            'A single test case',
            'A collection of related test cases',
            'A testing tool',
            'A test environment'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'A test suite is a logical grouping of related test cases (e.g., Login Suite, Payment Suite) for organized execution.'
        },
        {
          id: 'q25',
          type: 'mcq',
          question: 'What should be included in test case expected results?',
          options: [
            'Vague descriptions',
            '"It should work"',
            'Specific, measurable outcomes',
            'Only pass/fail'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'Expected results must be clear, specific, and verifiable to enable accurate pass/fail determination.'
        }
      ]
    },
    {
      id: 'section-b-full',
      title: 'Short Answer Questions',
      description: 'Provide detailed answers to the following questions',
      fullModeOnly: true,
      questions: [
        {
          id: 'q26',
          type: 'shortanswer',
          question: 'List at least 5 major sections that should be included in a comprehensive test plan.',
          keywords: ['scope', 'approach', 'resources', 'schedule', 'entry', 'exit', 'criteria', 'deliverables', 'risks', 'environment'],
          minKeywords: 5,
          points: 3,
          explanation: 'A comprehensive test plan should include: Test Plan Identifier, Introduction/Purpose, Scope, Test Items, Features to be Tested, Approach/Strategy, Pass/Fail Criteria, Entry/Exit Criteria, Test Deliverables, Test Environment, Responsibilities, Schedule, and Risks/Mitigation.'
        },
        {
          id: 'q27',
          type: 'shortanswer',
          question: 'Explain the difference between test scenarios and test cases with an example.',
          keywords: ['scenario', 'high-level', 'what', 'case', 'detailed', 'how', 'steps', 'example'],
          minKeywords: 4,
          points: 3,
          explanation: 'Test scenarios are high-level descriptions of WHAT to test (e.g., "Verify user login"). Test cases are detailed descriptions of HOW to test with specific steps, data, and expected results (e.g., "TC-001: Login with valid username and password - Steps: 1. Navigate to login page, 2. Enter username: test@example.com...").'
        },
        {
          id: 'q28',
          type: 'shortanswer',
          question: 'What are the key components that must be included in every test case?',
          keywords: ['test case ID', 'title', 'description', 'preconditions', 'steps', 'test data', 'expected result', 'priority', 'postconditions'],
          minKeywords: 5,
          points: 3,
          explanation: 'Essential test case components: Test Case ID, Title/Description, Preconditions, Test Steps (numbered), Test Data, Expected Results, Priority/Severity, Postconditions, and optionally: Author, Date, Status, Execution History.'
        },
        {
          id: 'q29',
          type: 'shortanswer',
          question: 'Describe what entry criteria and exit criteria are, and provide 3 examples of each.',
          keywords: ['entry', 'start', 'begin', 'exit', 'stop', 'complete', 'code', 'environment', 'test cases', 'pass rate', 'defects', 'fixed'],
          minKeywords: 6,
          points: 3,
          explanation: 'Entry Criteria (conditions to START testing): 1) Code complete and deployed, 2) Test environment ready, 3) Test cases reviewed and approved. Exit Criteria (conditions to STOP testing): 1) All test cases executed, 2) 95% pass rate achieved, 3) All critical/high defects fixed and verified.'
        },
        {
          id: 'q30',
          type: 'shortanswer',
          question: 'What is the purpose of a Test Summary Report and what key information should it contain?',
          keywords: ['summary', 'overview', 'results', 'metrics', 'test execution', 'pass', 'fail', 'defects', 'coverage', 'recommendation', 'sign-off'],
          minKeywords: 5,
          points: 3,
          explanation: 'Test Summary Report provides a comprehensive overview of testing activities after completion. Key contents: Executive Summary, Test Scope, Test Execution Statistics (pass/fail rates), Defect Summary (by severity/status), Test Coverage, Performance/Security Results, Risks/Issues, Recommendations (Go/No-Go decision), and Sign-off/Approvals.'
        }
      ]
    }
  ]
};
