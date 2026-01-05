export default {
  title: "Day 14: Week 2 Review & Assessment",
  passingScore: 70,
  timeLimit: 60,
  modes: {
    quick: { title: "Quick Review (20 questions)", timeLimit: 30, description: "Quick review of Week 2 concepts" },
    full: { title: "Full Assessment (40 questions)", timeLimit: 60, description: "Comprehensive Week 2 review assessment" }
  },
  sections: [{
    id: 'section-a', title: 'Section A: Multiple Choice Questions', description: 'Choose the best answer for each question',
    questions: [{
      id: 'q1', type: 'mcq',
      question: 'Which testing approach is best for testing complex workflows?',
      options: ['Unit Testing', 'Exploratory Testing', 'Performance Testing', 'Security Testing'],
      correctAnswer: 1, explanation: 'Exploratory Testing is effective for complex workflows as it allows testers to discover issues through investigation.', points: 5
    }]
  }]
};
