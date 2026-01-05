export default {
  title: "Day 13: Exploratory Testing & SBTM Assessment",
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
      question: 'What does SBTM stand for?',
      options: ['System Based Test Management', 'Session-Based Test Management', 'Simple Bug Tracking Method', 'Software Build Test Methodology'],
      correctAnswer: 1, explanation: 'SBTM stands for Session-Based Test Management, a structured approach to exploratory testing.', points: 5
    }]
  }]
};
