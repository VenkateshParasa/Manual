export default {
  title: "Day 16: Test Management & Metrics Assessment",
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
      question: 'What is a Test Metric?',
      options: ['A test case', 'A quantitative measure of testing progress or quality', 'A bug report', 'A test plan'],
      correctAnswer: 1, explanation: 'A Test Metric is a quantitative measure that helps track testing progress, quality, and effectiveness.', points: 5
    }]
  }]
};
