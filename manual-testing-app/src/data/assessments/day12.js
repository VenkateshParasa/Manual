export default {
  title: "Day 12: Regression & Smoke Testing Assessment",
  passingScore: 70,
  timeLimit: 45,
  modes: {
    quick: { title: "Quick Assessment (15 questions)", timeLimit: 20, description: "Quick assessment covering key concepts" },
    full: { title: "Full Assessment (30 questions)", timeLimit: 45, description: "Comprehensive assessment covering all topics" }
  },
  sections: [{
    id: 'section-a', title: 'Section A: Multiple Choice Questions', description: 'Choose the best answer for each question',
    questions: [{
      id: 'q1', type: 'mcq',
      question: 'What is the main purpose of Regression Testing?',
      options: ['To test new features', 'To ensure existing functionality still works after changes', 'To test performance', 'To test security'],
      correctAnswer: 1, explanation: 'Regression Testing ensures that existing functionality continues to work correctly after code changes.', points: 5
    }]
  }]
};
