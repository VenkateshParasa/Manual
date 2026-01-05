export default {
  title: "Day 3: Test Design Techniques Assessment",
  passingScore: 70,
  timeLimit: 45,
  modes: {
    quick: {
      title: "Quick Assessment (15 questions)",
      timeLimit: 20,
      description: "Quick assessment covering key concepts"
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
          question: 'What is the primary focus of Boundary Value Analysis (BVA)?',
          options: [
            'Testing middle values',
            'Testing boundary values at edges of input domains',
            'Testing random values',
            'Testing all possible values'
          ],
          correctAnswer: 1,
          explanation: 'BVA focuses on testing values at the boundaries (edges) of input domains where defects are most likely.',
          points: 5
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
          points: 5
        }
      ]
    }
  ]
};
