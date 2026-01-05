export default {
  title: "Day 17: Risk-Based Testing Assessment",
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
      question: 'What is the primary benefit of Risk-Based Testing?',
      options: ['Testing everything equally', 'Focusing testing efforts on high-risk areas', 'Reducing testing time completely', 'Eliminating test planning'],
      correctAnswer: 1, explanation: 'Risk-Based Testing prioritizes testing efforts on areas with the highest risk, maximizing testing effectiveness.', points: 5
    }]
  }]
};
