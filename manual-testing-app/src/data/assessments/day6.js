export default {
  title: "Day 6: Defect Management & Bug Life Cycle Assessment",
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
      question: 'What is the first status of a newly reported bug?',
      options: ['Assigned', 'New/Open', 'In Progress', 'Fixed'],
      correctAnswer: 1, explanation: 'A newly reported bug typically starts with the status New or Open.', points: 5
    }]
  }]
};
