export default {
  title: "Day 15: Agile Testing & Scrum Assessment",
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
      question: 'What is a Sprint in Scrum?',
      options: ['A testing phase', 'A time-boxed iteration typically 1-4 weeks', 'A bug report', 'A meeting type'],
      correctAnswer: 1, explanation: 'A Sprint is a time-boxed iteration in Scrum, typically lasting 1-4 weeks.', points: 5
    }]
  }]
};
