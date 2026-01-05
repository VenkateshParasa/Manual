export default {
  title: "Day 11: Specialized Testing Types Assessment",
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
      question: 'What is the primary focus of Performance Testing?',
      options: ['Testing functionality', 'Testing security', 'Testing system behavior under load', 'Testing user interface'],
      correctAnswer: 2, explanation: 'Performance Testing focuses on testing system behavior, response time, and stability under various load conditions.', points: 5
    }]
  }]
};
