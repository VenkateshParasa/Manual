export default {
  title: "Day 20: Industry Best Practices Assessment",
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
      question: 'What does CI/CD stand for?',
      options: ['Code Integration / Code Deployment', 'Continuous Integration / Continuous Deployment', 'Central Integration / Central Development', 'Custom Integration / Custom Deployment'],
      correctAnswer: 1, explanation: 'CI/CD stands for Continuous Integration and Continuous Deployment, key practices in modern software development.', points: 5
    }]
  }]
};
