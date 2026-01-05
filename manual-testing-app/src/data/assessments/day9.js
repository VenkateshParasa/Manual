export default {
  title: "Day 9: Web Application Testing - Part 2 Assessment",
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
      question: 'What is the purpose of cross-browser testing?',
      options: ['To test on multiple operating systems', 'To ensure the application works correctly across different browsers', 'To test mobile applications', 'To test APIs'],
      correctAnswer: 1, explanation: 'Cross-browser testing ensures the application works correctly across different browsers like Chrome, Firefox, Safari, etc.', points: 5
    }]
  }]
};
