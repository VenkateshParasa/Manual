export default {
  title: "Day 18: Test Tools & Systems Assessment",
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
      question: 'What is JIRA commonly used for?',
      options: ['Code development', 'Bug tracking and project management', 'Database management', 'Network monitoring'],
      correctAnswer: 1, explanation: 'JIRA is widely used for bug tracking, issue tracking, and agile project management.', points: 5
    }]
  }]
};
