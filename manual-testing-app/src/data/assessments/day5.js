export default {
  title: "Day 5: Test Documentation & Artifacts Assessment",
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
        },
        {
          id: 'q2',
          type: 'mcq',
          question: 'Which standard defines test documentation templates?',
          options: [
            'ISO 9001',
            'IEEE 829',
            'CMMI',
            'Six Sigma'
          ],
          correctAnswer: 1,
          explanation: 'IEEE 829 is the standard for software test documentation.',
          points: 5
        }
      ]
    }
  ]
};
