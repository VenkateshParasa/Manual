// Assessment questions for each day
// Question types: mcq (multiple choice), fillblank, truefalse, matching, shortanswer

export const assessments = {
  day1: {
    title: "Day 1: Manual Testing Fundamentals & SDLC Assessment",
    passingScore: 70,
    timeLimit: 30, // minutes
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
        type: 'truefalse',
        question: 'Manual testing is becoming obsolete with the rise of automation.',
        correctAnswer: false,
        explanation: 'False. Manual testing remains essential for exploratory testing, usability testing, and new feature validation where human judgment is crucial.',
        points: 5
      },
      {
        id: 'q4',
        type: 'fillblank',
        question: 'The first phase of STLC is _____ Analysis.',
        correctAnswer: 'requirement',
        acceptableAnswers: ['requirement', 'requirements'],
        caseSensitive: false,
        explanation: 'The first phase of STLC (Software Testing Life Cycle) is Requirement Analysis.',
        points: 5
      },
      {
        id: 'q5',
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
        id: 'q6',
        type: 'truefalse',
        question: 'In V-Model, UAT planning happens during the requirements phase.',
        correctAnswer: true,
        explanation: 'True. In the V-Model, UAT (User Acceptance Testing) planning corresponds to and happens during the requirements phase.',
        points: 5
      },
      {
        id: 'q7',
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
        id: 'q8',
        type: 'fillblank',
        question: 'The average cost multiplier of fixing a bug in production vs requirements phase is approximately _____x.',
        correctAnswer: '150',
        acceptableAnswers: ['150', '100-150', '150x'],
        caseSensitive: false,
        explanation: 'Fixing a bug in production can cost approximately 150x more than fixing it during the requirements phase.',
        points: 5
      },
      {
        id: 'q9',
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
  
  day2: {
    title: "Day 2: Testing Levels & Types Assessment",
    passingScore: 70,
    timeLimit: 25,
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
        question: 'What is the purpose of smoke testing?',
        options: [
          'Detailed feature testing',
          'Build verification - check if critical features work',
          'Performance testing',
          'Security testing'
        ],
        correctAnswer: 1,
        explanation: 'Smoke testing is a build verification test to check if the critical features of the application work.',
        points: 5
      },
      {
        id: 'q3',
        type: 'truefalse',
        question: 'Regression testing should be performed after every code change.',
        correctAnswer: true,
        explanation: 'True. Regression testing ensures that new changes haven\'t broken existing functionality.',
        points: 5
      },
      {
        id: 'q4',
        type: 'fillblank',
        question: 'The testing level that verifies the interaction between different modules is called _____ testing.',
        correctAnswer: 'integration',
        acceptableAnswers: ['integration', 'integration testing'],
        caseSensitive: false,
        explanation: 'Integration testing verifies the interaction and data flow between different modules or components.',
        points: 5
      },
      {
        id: 'q5',
        type: 'mcq',
        question: 'Which is NOT a non-functional testing type?',
        options: [
          'Performance Testing',
          'Security Testing',
          'Regression Testing',
          'Usability Testing'
        ],
        correctAnswer: 2,
        explanation: 'Regression Testing is a functional testing type. The others are non-functional testing types.',
        points: 5
      }
    ]
  },

  // Template for other days
  day3: {
    title: "Day 3: Test Design Techniques Assessment",
    passingScore: 70,
    timeLimit: 30,
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
        type: 'fillblank',
        question: 'BVA stands for Boundary _____ Analysis.',
        correctAnswer: 'value',
        acceptableAnswers: ['value'],
        caseSensitive: false,
        explanation: 'BVA stands for Boundary Value Analysis, which tests values at the boundaries of input domains.',
        points: 5
      },
      {
        id: 'q3',
        type: 'truefalse',
        question: 'Decision tables are useful when there are multiple conditions that result in different actions.',
        correctAnswer: true,
        explanation: 'True. Decision tables are excellent for testing complex business logic with multiple conditions.',
        points: 5
      }
    ]
  }
};

// Helper function to get assessment for a day
export const getAssessment = (dayId) => {
  return assessments[dayId] || null;
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