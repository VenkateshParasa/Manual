export default {
  title: "Day 4: Advanced Test Design Techniques Assessment",
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
          question: 'What are the three main flow types in Use Case Testing?',
          options: [
            'Basic, Complex, Simple',
            'Basic, Alternate, Exception',
            'Happy, Sad, Error',
            'Primary, Secondary, Tertiary'
          ],
          correctAnswer: 1,
          explanation: 'Use Case Testing includes Basic Flow (happy path), Alternate Flows (variations), and Exception Flows (error conditions).',
          points: 5
        },
        {
          id: 'q2',
          type: 'mcq',
          question: 'Which test design technique relies on tester experience and intuition to anticipate defects?',
          options: [
            'Equivalence Partitioning',
            'Boundary Value Analysis',
            'Error Guessing',
            'Decision Table Testing'
          ],
          correctAnswer: 2,
          explanation: 'Error Guessing is an experience-based technique where testers use their knowledge to anticipate where defects might occur.',
          points: 5
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
          points: 5
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
          points: 5
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
          question: 'Use Case Testing only covers the happy path (basic flow).',
          correctAnswer: false,
          explanation: 'False. Use Case Testing covers basic flow, alternate flows, and exception flows - not just the happy path.',
          points: 5
        },
        {
          id: 'q7',
          type: 'truefalse',
          question: 'Error Guessing is a systematic, repeatable test design technique.',
          correctAnswer: false,
          explanation: 'False. Error Guessing is experience-based and depends on tester\'s intuition, making it less systematic and repeatable.',
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
          question: 'In Use Case Testing, a _____ describes the state that must exist before the use case begins.',
          correctAnswer: 'precondition',
          acceptableAnswers: ['precondition', 'pre-condition', 'Precondition'],
          caseSensitive: false,
          explanation: 'Preconditions define the state that must exist before a use case can begin execution.',
          points: 5
        },
        {
          id: 'q9',
          type: 'fillblank',
          question: 'FCC CUTS VIDS represents different testing _____ in Exploratory Testing.',
          correctAnswer: 'tours',
          acceptableAnswers: ['tours', 'tour', 'approaches'],
          caseSensitive: false,
          explanation: 'FCC CUTS VIDS represents different testing tours/approaches: Feature, Complexity, Claims, User, Testability, Scenario, Variability, Interoperability, Data, Structure.',
          points: 5
        },
        {
          id: 'q10',
          type: 'shortanswer',
          question: 'What is the main advantage of Use Case Testing?',
          sampleAnswer: 'It provides end-to-end coverage from user perspective based on realistic user scenarios',
          keywords: ['end-to-end', 'user', 'perspective', 'realistic', 'scenarios', 'coverage', 'complete'],
          minKeywords: 2,
          explanation: 'Use Case Testing provides comprehensive end-to-end coverage based on realistic user scenarios from the user\'s perspective.',
          points: 10
        },
        {
          id: 'q11',
          type: 'shortanswer',
          question: 'Name three common error-prone areas that Error Guessing focuses on.',
          sampleAnswer: 'Empty input fields, boundary values, special characters, null values, concurrent access',
          keywords: ['empty', 'input', 'boundary', 'special', 'characters', 'null', 'concurrent', 'race', 'condition'],
          minKeywords: 2,
          explanation: 'Error Guessing focuses on: empty inputs, boundary values, special characters, null/undefined values, concurrent access, and other commonly problematic areas.',
          points: 10
        },
        {
          id: 'q12',
          type: 'shortanswer',
          question: 'What is the difference between Statement Coverage and Branch Coverage?',
          sampleAnswer: 'Statement Coverage measures percentage of code statements executed. Branch Coverage measures percentage of decision points tested for both true and false outcomes.',
          keywords: ['statement', 'branch', 'coverage', 'decision', 'true', 'false', 'executed', 'percentage', 'outcomes'],
          minKeywords: 3,
          explanation: 'Statement Coverage measures executed statements. Branch Coverage (Decision Coverage) measures both true and false outcomes of decision points, making it stricter.',
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
          id: 'q14',
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
          id: 'q15',
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
          id: 'q16',
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
          id: 'q17',
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
          id: 'q18',
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
          id: 'q19',
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
          id: 'q20',
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
          id: 'q21',
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
          id: 'q22',
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
          question: 'Exploratory Testing means testing without any planning or structure.',
          correctAnswer: false,
          explanation: 'False. Exploratory Testing is structured through charters, time boxes, and testing tours - it\'s not random testing.',
          points: 3
        },
        {
          id: 'q24',
          type: 'truefalse',
          question: 'In White Box Testing, 100% code coverage guarantees no bugs.',
          correctAnswer: false,
          explanation: 'False. 100% code coverage doesn\'t guarantee bug-free code; it only means all code was executed, not that all scenarios were tested.',
          points: 3
        },
        {
          id: 'q25',
          type: 'truefalse',
          question: 'QA testers should understand White Box Testing concepts even if developers write unit tests.',
          correctAnswer: true,
          explanation: 'True. QA should understand White Box concepts to review coverage reports, suggest scenarios, and collaborate with developers.',
          points: 3
        },
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
      title: 'Section C (Full): Scenario-Based Questions',
      description: 'Real-world scenario questions for comprehensive assessment',
      fullModeOnly: true,
      questions: [
        {
          id: 'q31',
          type: 'shortanswer',
          question: 'You are testing an online banking transfer feature. Using Use Case Testing, describe the basic flow, one alternate flow, and one exception flow.',
          sampleAnswer: 'Basic Flow: User logs in, selects source account, selects destination account, enters amount, confirms, transfer completes, confirmation displayed. Alternate Flow: User schedules future transfer - at amount entry, selects schedule for later, picks date/time, continues to confirmation. Exception Flow: Insufficient funds - during validation, system detects balance less than transfer amount, displays error, user can modify amount or cancel.',
          keywords: ['basic', 'flow', 'alternate', 'exception', 'transfer', 'account', 'amount', 'error', 'insufficient', 'schedule'],
          minKeywords: 5,
          explanation: 'Use Case Testing covers: Basic Flow (happy path), Alternate Flows (variations like scheduling), and Exception Flows (error handling like insufficient funds).',
          points: 5
        },
        {
          id: 'q32',
          type: 'shortanswer',
          question: 'You are testing a shopping cart. Using Error Guessing, list 5 error-prone scenarios you would test.',
          sampleAnswer: 'Update quantity to 0 or negative number, apply multiple discount codes simultaneously, item price changes while in cart, session timeout with items in cart, product goes out of stock during checkout, add item from two browsers simultaneously (race condition)',
          keywords: ['quantity', 'negative', 'discount', 'price', 'session', 'timeout', 'stock', 'race', 'condition', 'concurrent', 'browser'],
          minKeywords: 5,
          explanation: 'Error-prone scenarios: quantity edge cases, multiple discounts, price changes, session management, stock availability, concurrent access.',
          points: 5
        },
        {
          id: 'q33',
          type: 'shortanswer',
          question: 'Create a 60-minute Exploratory Testing charter for testing a food delivery app\'s ordering flow.',
          sampleAnswer: 'EXPLORE: Food ordering flow from restaurant selection to order confirmation. WITH: Mobile app (iOS), test account, test credit card, various restaurants. TO DISCOVER: Usability issues, calculation errors, performance problems, edge cases. TIME BOX: 60 minutes. Focus areas: Restaurant search and filtering (15 min), Menu browsing and cart management (20 min), Checkout and payment (15 min), Edge cases and error handling (10 min)',
          keywords: ['explore', 'charter', 'time', 'box', 'discover', 'restaurant', 'cart', 'payment', 'checkout', 'menu', 'filter', 'edge'],
          minKeywords: 6,
          explanation: 'Charter structure: EXPLORE (what), WITH (resources), TO DISCOVER (goals), TIME BOX (duration), with specific focus areas and time allocation.',
          points: 5
        },
        {
          id: 'q34',
          type: 'shortanswer',
          question: 'You receive a code coverage report showing 75% statement coverage and 60% branch coverage for the payment module. As a QA, what actions would you take?',
          sampleAnswer: 'Review the coverage report to identify uncovered lines and branches. Analyze which scenarios are missing (likely error handling, edge cases). Create test cases to cover the uncovered code paths. Focus on the 25% uncovered statements - these might be error handling or edge cases. Investigate why branch coverage is lower - suggests some decision points aren\'t fully tested. Collaborate with developers to understand the uncovered code. Prioritize testing critical paths like payment failures, timeouts, refunds.',
          keywords: ['coverage', 'report', 'uncovered', 'branches', 'statements', 'test', 'cases', 'error', 'handling', 'edge', 'critical', 'payment', 'analyze'],
          minKeywords: 6,
          explanation: 'Actions: Review report, identify gaps, create test cases for uncovered code, focus on error handling and edge cases, collaborate with developers, prioritize critical paths.',
          points: 5
        },
        {
          id: 'q35',
          type: 'shortanswer',
          question: 'Describe how you would use the VARIABILITY tour to test a login feature.',
          sampleAnswer: 'VARIABILITY tour varies inputs and configurations: Different browsers (Chrome, Firefox, Safari, Edge), Different devices (Desktop, mobile, tablet), Different screen sizes (1920x1080, 1366x768, mobile portrait/landscape), Different user roles (Admin, regular user, guest), Different credentials (Valid, invalid, expired, locked account), Different network conditions (Fast WiFi, slow 3G, offline), Different input methods (Keyboard, copy-paste, autofill, password manager)',
          keywords: ['variability', 'tour', 'different', 'browsers', 'devices', 'screen', 'roles', 'credentials', 'network', 'input', 'methods', 'configurations'],
          minKeywords: 6,
          explanation: 'VARIABILITY tour tests different: browsers, devices, screen sizes, user roles, credentials, network conditions, and input methods.',
          points: 5
        },
        {
          id: 'q36',
          type: 'shortanswer',
          question: 'You are testing a hotel booking system. Write a Use Case for booking a room including at least one alternate flow and one exception flow.',
          sampleAnswer: 'Use Case: Book Hotel Room. Basic Flow: Guest enters destination, check-in/out dates, number of guests. System displays available hotels. Guest filters by price, rating, amenities. Guest selects hotel and room type. System displays booking summary with total cost. Guest enters personal and payment details. System processes payment and creates reservation. System displays confirmation with booking ID. Alternate Flow A1: Apply Promo Code (at step 5) - Guest enters promo code, System validates and applies discount, Total cost updates, Continue to step 6. Exception Flow E1: Payment Declined (at step 7) - Payment gateway returns error, System displays "Payment declined", Guest can retry with different card or cancel, Return to step 6 or end use case.',
          keywords: ['use', 'case', 'basic', 'flow', 'alternate', 'exception', 'hotel', 'booking', 'room', 'guest', 'payment', 'promo', 'code', 'error', 'declined'],
          minKeywords: 8,
          explanation: 'Complete Use Case with: Basic Flow (happy path), Alternate Flow (promo code variation), Exception Flow (payment error handling).',
          points: 5
        },
        {
          id: 'q37',
          type: 'shortanswer',
          question: 'Using Error Guessing, what would you test for a password field that requires 8-20 characters with at least one uppercase, one lowercase, and one number?',
          sampleAnswer: 'Error Guessing scenarios: All lowercase "password123" (missing uppercase), All uppercase "PASSWORD123" (missing lowercase), No numbers "Password" (missing number), Only 7 characters "Pass123" (below minimum), 21 characters "Password1234567890123" (above maximum), Special characters only "!@#$%^&*" (no alphanumeric), Spaces in password "Pass word1" (spaces handling), Common passwords "Password123" (weak password), Empty field (required validation), Copy-paste vs typing (input method), Leading/trailing spaces " Password1 ", SQL injection "Pass\' OR \'1\'=\'1"',
          keywords: ['error', 'guessing', 'password', 'uppercase', 'lowercase', 'number', 'characters', 'minimum', 'maximum', 'special', 'validation', 'empty', 'weak', 'injection'],
          minKeywords: 7,
          explanation: 'Test: missing requirements, length boundaries, special characters, spaces, weak passwords, empty input, SQL injection, and input methods.',
          points: 5
        },
        {
          id: 'q38',
          type: 'shortanswer',
          question: 'Explain the difference between Statement Coverage and Branch Coverage with an example.',
          sampleAnswer: 'Statement Coverage measures percentage of code statements executed. Branch Coverage measures percentage of decision points tested for both true and false outcomes. Example: if age >= 18: return "Adult" else: return "Minor". For 100% Statement Coverage: Need 1 test (age=20 executes "return Adult"). For 100% Branch Coverage: Need 2 tests (age=20 for Decision=True, age=15 for Decision=False). Branch Coverage is stricter as it requires testing both outcomes of each decision.',
          keywords: ['statement', 'coverage', 'branch', 'decision', 'true', 'false', 'percentage', 'executed', 'outcomes', 'example', 'test', 'stricter'],
          minKeywords: 7,
          explanation: 'Statement Coverage: percentage of statements executed. Branch Coverage: both true/false outcomes tested. Branch Coverage is stricter.',
          points: 5
        },
        {
          id: 'q39',
          type: 'shortanswer',
          question: 'You have 90 minutes for an exploratory testing session on a new e-commerce checkout feature. How would you structure your session?',
          sampleAnswer: '90-Minute Exploratory Session Structure: Minutes 0-10: Setup & Initial Exploration - Create test account, add items to cart, understand checkout flow overview. Minutes 10-30: FEATURE Tour - Core Checkout - Test address entry and validation, payment method selection, order review and confirmation, document basic functionality. Minutes 30-50: USER Tour - Different Scenarios - Guest checkout vs logged-in user, multiple items vs single item, different payment methods, apply discount codes. Minutes 50-70: VARIABILITY Tour - Edge Cases - Invalid addresses, expired credit cards, out of stock items during checkout, session timeout scenarios, network interruptions. Minutes 70-85: Bug Investigation & Reproduction - Reproduce any issues found, document steps clearly, take screenshots. Minutes 85-90: Wrap-up & Documentation - Complete session notes, log all bugs, note ideas for next session.',
          keywords: ['exploratory', 'session', 'minutes', 'structure', 'feature', 'tour', 'user', 'variability', 'edge', 'cases', 'checkout', 'bugs', 'documentation', 'time', 'box'],
          minKeywords: 8,
          explanation: 'Structure: Setup (10 min), Feature Tour (20 min), User Tour (20 min), Variability Tour (20 min), Bug Investigation (15 min), Wrap-up (5 min).',
          points: 5
        },
        {
          id: 'q40',
          type: 'shortanswer',
          question: 'As a QA reviewing unit test coverage, you notice the error handling code has 0% coverage. What would you recommend to the development team?',
          sampleAnswer: 'Recommendations for uncovered error handling: Immediate Actions: Add unit tests for all error scenarios, test exception handling paths, verify error messages are correct, test error logging functionality. Specific Test Cases Needed: Network timeout errors, database connection failures, invalid input handling, null pointer exceptions, file not found errors, permission denied scenarios. Testing Approach: Use mocking to simulate error conditions, test both error detection and recovery, verify proper error messages to users, check error logging for debugging. Quality Impact: Error handling is critical for production stability, uncovered error paths are high-risk areas, users will encounter these in real scenarios, should aim for 90%+ coverage on error handling. Collaboration: Pair with developers to write error tests, review error handling strategy, add integration tests for error scenarios.',
          keywords: ['error', 'handling', 'coverage', 'unit', 'tests', 'exceptions', 'scenarios', 'mocking', 'logging', 'critical', 'risk', 'recommend', 'developers', 'integration'],
          minKeywords: 8,
          explanation: 'Recommend: Add error scenario tests, use mocking, test error detection and recovery, verify logging, collaborate with developers, prioritize critical error paths.',
          points: 5
        }
      ]
    }
  ]
};
