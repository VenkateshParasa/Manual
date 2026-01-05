export default {
  title: "Day 21: Final Review & Certification Prep Assessment",
  passingScore: 70,
  timeLimit: 60,
  modes: {
    quick: { title: "Quick Review (20 questions)", timeLimit: 30, description: "Quick review of all concepts" },
    full: { title: "Full Assessment (50 questions)", timeLimit: 60, description: "Comprehensive final assessment" }
  },
  sections: [{
    id: 'section-a', title: 'Section A: Multiple Choice Questions', description: 'Choose the best answer for each question',
    questions: [{
      id: 'q1', type: 'mcq',
      question: 'What is the primary goal of manual testing?',
      options: ['To replace automation', 'To ensure software quality and find defects', 'To write code', 'To manage projects'],
      correctAnswer: 1, explanation: 'The primary goal of manual testing is to ensure software quality by finding defects before production.', points: 5
    }]
  }]
};
