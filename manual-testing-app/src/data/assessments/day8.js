export default {
  title: "Day 8: Web Application Testing - Part 1 Assessment",
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
      question: 'What does UI stand for in web testing?',
      options: ['Universal Interface', 'User Interface', 'Unified Integration', 'User Integration'],
      correctAnswer: 1, explanation: 'UI stands for User Interface, which is what users interact with.', points: 5
    }]
  }]
};
