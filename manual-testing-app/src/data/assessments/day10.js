export default {
  title: "Day 10: Mobile Application Testing Assessment",
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
      question: 'What are the two major mobile platforms?',
      options: ['Windows and Linux', 'iOS and Android', 'MacOS and Windows', 'Chrome and Firefox'],
      correctAnswer: 1, explanation: 'The two major mobile platforms are iOS (Apple) and Android (Google).', points: 5
    }]
  }]
};
