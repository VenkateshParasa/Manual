export default {
  title: "Day 7: Week 1 Review & Practical Assessment",
  passingScore: 70,
  timeLimit: 60,
  modes: {
    quick: { title: "Quick Review (20 questions)", timeLimit: 30, description: "Quick review of Week 1 concepts" },
    full: { title: "Full Assessment (40 questions)", timeLimit: 60, description: "Comprehensive Week 1 review assessment" }
  },
  sections: [{
    id: 'section-a', title: 'Section A: Multiple Choice Questions', description: 'Choose the best answer for each question',
    questions: [{
      id: 'q1', type: 'mcq',
      question: 'Which testing level is performed first in the testing process?',
      options: ['System Testing', 'Integration Testing', 'Unit Testing', 'Acceptance Testing'],
      correctAnswer: 2, explanation: 'Unit Testing is typically performed first, testing individual components.', points: 5
    }]
  }]
};
