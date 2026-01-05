export default {
  title: "Day 19: Communication & Soft Skills Assessment",
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
      question: 'What is the most important skill for a QA professional when reporting bugs?',
      options: ['Technical knowledge only', 'Clear communication and documentation', 'Programming skills', 'Design skills'],
      correctAnswer: 1, explanation: 'Clear communication and documentation are essential for effective bug reporting and collaboration.', points: 5
    }]
  }]
};
