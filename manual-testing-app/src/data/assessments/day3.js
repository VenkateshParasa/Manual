export default {
  title: "Day 3: Test Design Techniques Part 1 Assessment",
  passingScore: 70,
  timeLimit: 50,
  modes: {
    quick: {
      title: "Quick Assessment (15 questions)",
      timeLimit: 20,
      description: "Quick assessment covering key concepts"
    },
    full: {
      title: "Full Assessment (40 questions)",
      timeLimit: 50,
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
          question: 'Which test design technique divides input data into valid and invalid partitions?',
          options: [
            'Boundary Value Analysis',
            'Equivalence Partitioning',
            'Decision Table Testing',
            'State Transition Testing'
          ],
          correctAnswer: 1,
          explanation: 'Equivalence Partitioning divides input data into valid and invalid partitions to reduce the number of test cases.',
          points: 5
        },
        {
          id: 'q2',
          type: 'mcq',
          question: 'What does BVA stand for?',
          options: [
            'Boundary Value Assessment',
            'Boundary Value Analysis',
            'Basic Value Analysis',
            'Binary Value Assessment'
          ],
          correctAnswer: 1,
          explanation: 'BVA stands for Boundary Value Analysis, which focuses on testing at the boundaries of input ranges.',
          points: 5
        },
        {
          id: 'q3',
          type: 'mcq',
          question: 'In Equivalence Partitioning, how many values should you test from each partition?',
          options: [
            'All values',
            'At least one value',
            'Two values',
            'Three values'
          ],
          correctAnswer: 1,
          explanation: 'Testing one representative value from each partition is sufficient as all values in a partition should behave similarly.',
          points: 5
        },
        {
          id: 'q4',
          type: 'mcq',
          question: 'Which technique is most effective at finding off-by-one errors?',
          options: [
            'Equivalence Partitioning',
            'Decision Table Testing',
            'Boundary Value Analysis',
            'State Transition Testing'
          ],
          correctAnswer: 2,
          explanation: 'BVA is specifically designed to catch off-by-one errors at boundaries.',
          points: 5
        },
        {
          id: 'q5',
          type: 'mcq',
          question: 'For a range [18, 65], what are the boundary values in standard Three-Value BVA?',
          options: [
            '18, 65',
            '17, 18, 64, 65',
            '17, 18, 19, 64, 65, 66',
            '18, 19, 64, 65'
          ],
          correctAnswer: 2,
          explanation: 'Standard Three-Value BVA tests: min-1, min, min+1, max-1, max, max+1 = 17, 18, 19, 64, 65, 66',
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
          question: 'Equivalence Partitioning can only be applied to numeric inputs.',
          correctAnswer: false,
          explanation: 'False. EP can be applied to any type of input including numeric, text, dates, etc.',
          points: 5
        },
        {
          id: 'q7',
          type: 'truefalse',
          question: 'Boundary Value Analysis is effective because defects commonly occur at the edges of input ranges.',
          correctAnswer: true,
          explanation: 'True. Defects commonly occur at boundaries due to off-by-one errors and incorrect operators.',
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
          question: 'In a decision table, if there are 3 conditions, there will be _____ rules.',
          correctAnswer: '8',
          acceptableAnswers: ['8', 'eight', '2^3'],
          caseSensitive: false,
          explanation: 'Number of rules = 2^n where n is number of conditions. 2^3 = 8 rules.',
          points: 5
        },
        {
          id: 'q9',
          type: 'fillblank',
          question: 'In State Transition Testing, an _____ triggers a transition from one state to another.',
          correctAnswer: 'event',
          acceptableAnswers: ['event', 'Event'],
          caseSensitive: false,
          explanation: 'Events trigger transitions from one state to another in State Transition Testing.',
          points: 5
        },
        {
          id: 'q10',
          type: 'shortanswer',
          question: 'Name three test design techniques covered in Day 3.',
          sampleAnswer: 'Equivalence Partitioning, Boundary Value Analysis, and Decision Table Testing',
          keywords: ['equivalence', 'partitioning', 'boundary', 'value', 'analysis', 'decision', 'table', 'state', 'transition'],
          minKeywords: 3,
          explanation: 'Day 3 covers: Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, and State Transition Testing.',
          points: 10
        },
        {
          id: 'q11',
          type: 'shortanswer',
          question: 'What is the core principle of Equivalence Partitioning?',
          sampleAnswer: 'If one value in a partition works, all values in that partition should work similarly',
          keywords: ['partition', 'value', 'works', 'similar', 'behave', 'same', 'representative'],
          minKeywords: 2,
          explanation: 'The core principle is that all values in an equivalence partition behave similarly, so testing one representative value is sufficient.',
          points: 10
        },
        {
          id: 'q12',
          type: 'shortanswer',
          question: 'Why is Boundary Value Analysis effective at finding defects?',
          sampleAnswer: 'Defects commonly occur at boundaries due to off-by-one errors and incorrect comparison operators',
          keywords: ['boundary', 'boundaries', 'off-by-one', 'errors', 'edge', 'defects', 'operators', 'comparison'],
          minKeywords: 2,
          explanation: 'BVA is effective because defects commonly occur at boundaries due to off-by-one errors, incorrect operators (< vs <=), and edge case handling issues.',
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
          id: 'q13',
          type: 'mcq',
          question: 'Decision tables are most useful for testing:',
          options: [
            'Input ranges',
            'Complex business rules with multiple conditions',
            'Sequential workflows',
            'Performance requirements'
          ],
          correctAnswer: 1,
          explanation: 'Decision tables excel at handling complex business logic with multiple conditions and their combinations.',
          points: 3
        },
        {
          id: 'q14',
          type: 'mcq',
          question: 'State Transition Testing is best suited for:',
          options: [
            'Input validation',
            'Systems with distinct states and transitions',
            'Boundary conditions',
            'Complex calculations'
          ],
          correctAnswer: 1,
          explanation: 'State Transition Testing models systems that move between different states based on events.',
          points: 3
        },
        {
          id: 'q15',
          type: 'mcq',
          question: 'In Equivalence Partitioning, an invalid test case should cover:',
          options: [
            'Multiple invalid classes',
            'Only one invalid class',
            'All invalid classes',
            'No invalid classes'
          ],
          correctAnswer: 1,
          explanation: 'Each invalid test case should test only one invalid class to identify the exact failure reason.',
          points: 3
        },
        {
          id: 'q16',
          type: 'mcq',
          question: 'Which BVA type tests values far below and far above the boundaries?',
          options: [
            'Two-Value BVA',
            'Three-Value BVA',
            'Robust BVA',
            'Worst-Case BVA'
          ],
          correctAnswer: 2,
          explanation: 'Robust BVA extends testing to values far below and far above boundaries for more comprehensive coverage.',
          points: 3
        },
        {
          id: 'q17',
          type: 'mcq',
          question: 'What is the main advantage of Equivalence Partitioning?',
          options: [
            'Tests all possible values',
            'Reduces number of test cases dramatically',
            'Finds all defects',
            'Eliminates need for other techniques'
          ],
          correctAnswer: 1,
          explanation: 'EP\'s main advantage is reducing test cases while maintaining coverage by testing representative values.',
          points: 3
        },
        {
          id: 'q18',
          type: 'mcq',
          question: 'Which technique would you use to test a login form with username (5-20 chars) and password (8-16 chars)?',
          options: [
            'Only Equivalence Partitioning',
            'Only Boundary Value Analysis',
            'Both EP and BVA',
            'Decision Table Testing'
          ],
          correctAnswer: 2,
          explanation: 'Use EP for partitioning and BVA for testing boundaries of both fields for comprehensive coverage.',
          points: 3
        },
        {
          id: 'q19',
          type: 'mcq',
          question: 'In a decision table, what does \'X\' typically represent?',
          options: [
            'A condition is true',
            'A condition is false',
            'An action is taken',
            'Don\'t care'
          ],
          correctAnswer: 2,
          explanation: '\'X\' marks which actions are executed for each rule in the decision table.',
          points: 3
        },
        {
          id: 'q20',
          type: 'mcq',
          question: 'Which technique is best for testing age-based discount calculation (0-12: child, 13-17: teen, 18-64: adult, 65+: senior)?',
          options: [
            'State Transition',
            'Decision Table',
            'Equivalence Partitioning with BVA',
            'Use Case Testing'
          ],
          correctAnswer: 2,
          explanation: 'EP for age ranges combined with BVA for boundaries between ranges provides optimal coverage.',
          points: 3
        },
        {
          id: 'q21',
          type: 'mcq',
          question: 'For testing a password field (8-20 characters), which values would you test using Three-Value BVA?',
          options: [
            '8, 20',
            '7, 8, 19, 20',
            '7, 8, 9, 19, 20, 21',
            '1, 8, 14, 20, 30'
          ],
          correctAnswer: 2,
          explanation: 'Three-Value BVA tests: min-1, min, min+1, max-1, max, max+1 = 7, 8, 9, 19, 20, 21',
          points: 3
        },
        {
          id: 'q22',
          type: 'mcq',
          question: 'What is a stub in integration testing context?',
          options: [
            'A test case template',
            'A dummy module that simulates lower-level modules',
            'A test data file',
            'An error message'
          ],
          correctAnswer: 1,
          explanation: 'Stubs are dummy modules used in Top-Down integration to simulate lower-level modules not yet developed.',
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
          id: 'q23',
          type: 'truefalse',
          question: 'In Equivalence Partitioning, a valid test case can cover multiple valid equivalence classes.',
          correctAnswer: true,
          explanation: 'True. A valid test case can cover multiple valid equivalence classes to reduce the total number of test cases.',
          points: 3
        },
        {
          id: 'q24',
          type: 'truefalse',
          question: 'Decision tables can become very large when there are many conditions (2^n rules).',
          correctAnswer: true,
          explanation: 'True. With n conditions, there are 2^n possible combinations, which can become very large.',
          points: 3
        },
        {
          id: 'q25',
          type: 'truefalse',
          question: 'State Transition Testing is suitable for all types of applications.',
          correctAnswer: false,
          explanation: 'False. State Transition Testing is best for systems with distinct states, not all applications.',
          points: 3
        },
        {
          id: 'q26',
          type: 'truefalse',
          question: 'BVA should always be used together with Equivalence Partitioning.',
          correctAnswer: true,
          explanation: 'True. BVA complements EP by testing boundary values that EP might miss.',
          points: 3
        },
        {
          id: 'q27',
          type: 'truefalse',
          question: 'In a decision table, each column represents a test case.',
          correctAnswer: true,
          explanation: 'True. Each column in a decision table represents one rule/test case.',
          points: 3
        },
        {
          id: 'q28',
          type: 'truefalse',
          question: 'Robust BVA tests more values than Standard BVA.',
          correctAnswer: true,
          explanation: 'True. Robust BVA tests additional values (far below/above) compared to Standard BVA.',
          points: 3
        },
        {
          id: 'q29',
          type: 'truefalse',
          question: 'State Transition Testing can identify invalid state transitions.',
          correctAnswer: true,
          explanation: 'True. State Transition Testing helps identify and test both valid and invalid state transitions.',
          points: 3
        },
        {
          id: 'q30',
          type: 'truefalse',
          question: 'Equivalence Partitioning eliminates the need for testing boundary values.',
          correctAnswer: false,
          explanation: 'False. EP and BVA complement each other; EP doesn\'t test boundaries which BVA does.',
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
          id: 'q31',
          type: 'shortanswer',
          question: 'You need to test a discount code field that accepts codes of 5-10 characters (alphanumeric only). Using Equivalence Partitioning, identify the valid and invalid equivalence classes.',
          sampleAnswer: 'Valid: 5-10 alphanumeric characters. Invalid: less than 5 chars, more than 10 chars, special characters, spaces, empty input',
          keywords: ['valid', 'invalid', '5', '10', 'alphanumeric', 'special', 'characters', 'empty', 'less', 'more', 'partition'],
          minKeywords: 4,
          explanation: 'Valid class: 5-10 alphanumeric characters. Invalid classes: <5 chars, >10 chars, special characters, spaces, empty input.',
          points: 5
        },
        {
          id: 'q32',
          type: 'shortanswer',
          question: 'A hotel booking system allows stays from 1 to 30 nights. Using Three-Value BVA, what test values would you use?',
          sampleAnswer: '0, 1, 2 for minimum boundary and 29, 30, 31 for maximum boundary',
          keywords: ['0', '1', '2', '29', '30', '31', 'minimum', 'maximum', 'boundary', 'min-1', 'min+1', 'max-1', 'max+1'],
          minKeywords: 4,
          explanation: 'Three-Value BVA: min-1 (0), min (1), min+1 (2), max-1 (29), max (30), max+1 (31).',
          points: 5
        },
        {
          id: 'q33',
          type: 'shortanswer',
          question: 'Create a decision table for a loan approval system with these conditions: Income (High/Low), Credit Score (Good/Bad), Existing Loan (Yes/No). What actions would you define?',
          sampleAnswer: 'Actions: Approve with low interest, Approve with high interest, Reject. 8 rules total (2^3). High income + Good credit = Low interest. High income + Bad credit = High interest. Low income combinations mostly reject.',
          keywords: ['approve', 'reject', 'low', 'high', 'interest', '8', 'rules', 'income', 'credit', 'loan', 'conditions'],
          minKeywords: 4,
          explanation: 'Decision table with 3 conditions creates 8 rules. Actions: Approve with low interest (best conditions), Approve with high interest (moderate risk), Reject (high risk).',
          points: 5
        },
        {
          id: 'q34',
          type: 'shortanswer',
          question: 'An ATM has states: Idle, Card Inserted, PIN Entered, Authenticated, Blocked. Describe the state transitions for a successful withdrawal scenario.',
          sampleAnswer: 'Idle → Card Inserted (insert card) → PIN Entered (enter PIN) → Authenticated (correct PIN) → perform withdrawal → Authenticated → Idle (eject card)',
          keywords: ['idle', 'card', 'inserted', 'pin', 'entered', 'authenticated', 'withdrawal', 'eject', 'transition', 'state'],
          minKeywords: 4,
          explanation: 'Successful flow: Idle → Card Inserted → PIN Entered → Authenticated → (withdrawal transaction) → Idle. Each transition triggered by specific events.',
          points: 5
        },
        {
          id: 'q35',
          type: 'shortanswer',
          question: 'You are testing a registration form with: Username (5-20 chars), Email (valid format), Password (8-16 chars), Age (18-100). How would you combine EP and BVA to create an efficient test suite?',
          sampleAnswer: 'Use EP to identify valid and invalid partitions for each field. Use BVA to test boundaries: username 4,5,6,19,20,21; password 7,8,9,15,16,17; age 17,18,19,99,100,101. Create valid combinations and invalid tests with one field invalid at a time.',
          keywords: ['ep', 'bva', 'boundary', 'partition', 'valid', 'invalid', 'username', 'password', 'age', 'combine', 'efficient'],
          minKeywords: 4,
          explanation: 'Combine EP for partitioning and BVA for boundaries. Test valid combinations at boundaries and invalid cases with one field invalid at a time for efficient coverage.',
          points: 5
        },
        {
          id: 'q36',
          type: 'shortanswer',
          question: 'A shopping cart allows quantities from 1 to 10 items. You find a bug where quantity 10 is rejected. What type of error is this, and which test design technique would have caught it?',
          sampleAnswer: 'This is an off-by-one error (boundary error). Boundary Value Analysis would have caught it by testing the maximum boundary value of 10.',
          keywords: ['off-by-one', 'boundary', 'error', 'bva', 'analysis', 'maximum', '10', 'edge'],
          minKeywords: 3,
          explanation: 'Off-by-one error at the boundary. BVA specifically tests boundary values like 10 (max) and would have caught this defect.',
          points: 5
        },
        {
          id: 'q37',
          type: 'shortanswer',
          question: 'Create test cases using Equivalence Partitioning for a month field that accepts values 1-12.',
          sampleAnswer: 'Valid partition: 1-12 (test value: 6). Invalid partitions: less than 1 (test: 0), greater than 12 (test: 13), non-numeric (test: abc), decimal (test: 6.5), negative (test: -1), empty (test: blank)',
          keywords: ['valid', 'invalid', '1', '12', 'partition', 'month', 'numeric', 'decimal', 'negative', 'empty', '0', '13'],
          minKeywords: 4,
          explanation: 'Valid: 1-12. Invalid: <1, >12, non-numeric, decimal, negative, empty. Test one value from each partition.',
          points: 5
        },
        {
          id: 'q38',
          type: 'shortanswer',
          question: 'An insurance premium calculator has 3 conditions: Age (<25 or >=25), Accidents (Yes/No), Car Type (Economy/Luxury). How many rules would the decision table have, and why?',
          sampleAnswer: '8 rules because with 3 conditions, the formula is 2^3 = 8. Each condition has 2 possible values, creating 8 unique combinations.',
          keywords: ['8', 'rules', '2^3', 'three', 'conditions', 'combinations', 'formula', 'decision', 'table'],
          minKeywords: 3,
          explanation: 'Number of rules = 2^n where n is number of conditions. With 3 conditions: 2^3 = 8 rules.',
          points: 5
        },
        {
          id: 'q39',
          type: 'shortanswer',
          question: 'You are testing an order processing system with states: New, Payment Pending, Confirmed, Processing, Shipped, Delivered, Cancelled. Identify 3 valid and 2 invalid state transitions.',
          sampleAnswer: 'Valid: New→Payment Pending, Payment Pending→Confirmed, Confirmed→Processing, Processing→Shipped, Shipped→Delivered. Invalid: New→Shipped (skips steps), Delivered→Payment Pending (cannot go backward), Cancelled→Processing (cannot process cancelled order)',
          keywords: ['valid', 'invalid', 'transition', 'new', 'payment', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'state'],
          minKeywords: 5,
          explanation: 'Valid transitions follow logical order. Invalid transitions skip required steps, go backward inappropriately, or violate business rules.',
          points: 5
        },
        {
          id: 'q40',
          type: 'shortanswer',
          question: 'A file upload feature accepts files from 1KB to 5MB. Using Robust BVA, what test values would you use and why?',
          sampleAnswer: 'Robust BVA tests: 0KB (far below), 0.5KB (min-1), 1KB (min), 1.5KB (min+1), 5119KB (max-1), 5120KB/5MB (max), 5121KB (max+1), 10MB (far above). This catches extreme cases and comprehensive boundary coverage.',
          keywords: ['robust', 'bva', '0', '1', '5', 'kb', 'mb', 'minimum', 'maximum', 'far', 'below', 'above', 'boundary', 'extreme'],
          minKeywords: 5,
          explanation: 'Robust BVA tests extreme values beyond standard boundaries: far below (0KB), standard boundaries (0.5, 1, 1.5KB and 5119, 5120, 5121KB), and far above (10MB) for comprehensive coverage.',
          points: 5
        }
      ]
    }
  ]
};
