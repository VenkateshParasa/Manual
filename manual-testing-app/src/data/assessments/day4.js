export default {
  title: "Day 4: Advanced Test Design Techniques Assessment",
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
        }
      ]
    }
  ]
};
