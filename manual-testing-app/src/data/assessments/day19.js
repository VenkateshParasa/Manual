export const day19Assessment = {
  id: 'day19',
  title: 'Day 19: Communication & Soft Skills for QA',
  description: 'Assessment covering Communication Skills, Bug Reporting, Stakeholder Management, and Professional Development',
  
  passingScore: 70,
  
  quickMode: {
    timeLimit: 15,
    questions: 15
  },
  
  fullMode: {
    timeLimit: 40,
    questions: 30
  },

  questions: [
    // Quick Mode Questions (Q1-Q15)
    {
      id: 'q1',
      type: 'mcq',
      question: 'What percentage of a QA professional\'s job involves communication skills?',
      options: [
        '30%',
        '40%',
        '50%',
        '60%'
      ],
      correctAnswer: 3,
      explanation: 'Communication skills make up approximately 60% of a QA job, while technical skills comprise about 40%. QA acts as a bridge between technical and business teams.',
      difficulty: 'medium',
      section: 'Communication Skills',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'Which is NOT one of the 5 C\'s of bug reporting?',
      options: [
        'Clear',
        'Complete',
        'Creative',
        'Constructive'
      ],
      correctAnswer: 2,
      explanation: 'The 5 C\'s are Clear, Concise, Complete, Correct, and Constructive. Creativity is not a requirement for bug reporting.',
      difficulty: 'easy',
      section: 'Bug Reporting',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'When communicating with executives, what should you focus on?',
      options: [
        'Detailed technical information',
        'All defects found',
        'High-level summary and business risk',
        'Testing process documentation'
      ],
      correctAnswer: 2,
      explanation: 'Executives need concise, high-level information focused on business impact, risks, and go/no-go decisions, not technical details.',
      difficulty: 'medium',
      section: 'Stakeholder Management',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'What is the best approach when a developer says "I can\'t reproduce the bug"?',
      options: [
        'Insist it exists and mark it critical',
        'Close the bug as "Cannot Reproduce"',
        'Provide additional details, video, logs, and offer to pair',
        'Escalate to management immediately'
      ],
      correctAnswer: 2,
      explanation: 'Collaborative problem-solving with more evidence and willingness to pair debug is the professional approach.',
      difficulty: 'medium',
      section: 'Communication Skills',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'In a standup, how long should your update typically take?',
      options: [
        '30 seconds to 1 minute',
        '2-3 minutes',
        '5 minutes',
        'As long as needed'
      ],
      correctAnswer: 1,
      explanation: 'Standups should be brief. 2-3 minutes per person allows you to share meaningful updates without excessive detail.',
      difficulty: 'easy',
      section: 'Agile Communication',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'Which type of report should include a go/no-go recommendation?',
      options: [
        'Daily Status Report',
        'Weekly Summary Report',
        'Test Completion Report',
        'Bug Report'
      ],
      correctAnswer: 2,
      explanation: 'The Test Completion Report is the final assessment that includes a recommendation on whether to approve release.',
      difficulty: 'medium',
      section: 'Test Reporting',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'When presenting test results, what should you do first?',
      options: [
        'Show detailed test data',
        'Present executive summary',
        'Review all bugs found',
        'Explain testing process'
      ],
      correctAnswer: 1,
      explanation: 'Use inverted pyramid style - most important information first. Busy executives may only read/hear the first part.',
      difficulty: 'medium',
      section: 'Presentation Skills',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'What is the first step in the conflict resolution framework?',
      options: [
        'Propose solutions',
        'Stay calm',
        'Find common ground',
        'Escalate'
      ],
      correctAnswer: 1,
      explanation: 'Before addressing any conflict, you must first stay calm, take a breath, and avoid emotional reactions.',
      difficulty: 'easy',
      section: 'Conflict Resolution',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'Which certification is most widely recognized for QA professionals?',
      options: [
        'ISTQB Foundation',
        'AWS Certified',
        'PMP',
        'Scrum Master'
      ],
      correctAnswer: 0,
      explanation: 'ISTQB (International Software Testing Qualifications Board) Foundation is the most widely recognized testing certification globally.',
      difficulty: 'easy',
      section: 'Career Development',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'A typical career path from Junior QA to QA Lead takes approximately:',
      options: [
        '2-3 years',
        '4-5 years',
        '7-10 years',
        '15 years'
      ],
      correctAnswer: 2,
      explanation: 'Typical progression: Junior (0-2 years) → QA Engineer (2-4) → Senior QA (4-7) → QA Lead (7-10 years).',
      difficulty: 'medium',
      section: 'Career Development',
      points: 1
    },
    {
      id: 'q11',
      type: 'truefalse',
      question: 'When writing bug reports, it\'s acceptable to use phrases like "This is obviously wrong" or "Why would anyone code it this way?"',
      correctAnswer: false,
      explanation: 'Bug reports should use neutral, factual language without blame or sarcasm. You\'re reporting on code, not criticizing the person.',
      difficulty: 'easy',
      section: 'Bug Reporting',
      points: 1
    },
    {
      id: 'q12',
      type: 'truefalse',
      question: 'Different stakeholders need the same information, just delivered through different channels.',
      correctAnswer: false,
      explanation: 'Different stakeholders need different information. Developers need technical details, executives need high-level summaries, and product owners need business impact.',
      difficulty: 'medium',
      section: 'Stakeholder Management',
      points: 1
    },
    {
      id: 'q13',
      type: 'truefalse',
      question: 'It\'s better to under-promise and over-deliver than to over-promise and under-deliver.',
      correctAnswer: true,
      explanation: 'Conservative estimates that you can exceed build credibility. Missing aggressive commitments damages trust and reputation.',
      difficulty: 'easy',
      section: 'Expectation Management',
      points: 1
    },
    {
      id: 'q14',
      type: 'truefalse',
      question: 'In presentations, it\'s acceptable to read slides word-for-word to ensure you don\'t miss important information.',
      correctAnswer: false,
      explanation: 'Reading slides verbatim is a bad practice. Slides should be visual aids, not scripts. Use bullet points and expand verbally.',
      difficulty: 'easy',
      section: 'Presentation Skills',
      points: 1
    },
    {
      id: 'q15',
      type: 'truefalse',
      question: 'When blamed for missing a bug, the best response is to defend yourself by explaining all the constraints you faced.',
      correctAnswer: false,
      explanation: 'The professional response is to take appropriate responsibility, explain what happened objectively, and propose prevention measures. Avoid defensive reactions.',
      difficulty: 'medium',
      section: 'Professional Conduct',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'mcq',
      question: 'What should a bug report summary include?',
      options: [
        'Complete technical details',
        'One-line clear description of the issue',
        'All reproduction steps',
        'Developer\'s name'
      ],
      correctAnswer: 1,
      explanation: 'The summary should be a brief, clear one-line description that immediately conveys what the bug is about (e.g., "Login button not working on mobile Safari").',
      difficulty: 'easy',
      section: 'Bug Reporting',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'mcq',
      question: 'When managing expectations, what principle should you follow?',
      options: [
        'Always promise the fastest delivery',
        'Under-promise and over-deliver',
        'Over-promise to impress stakeholders',
        'Never commit to timelines'
      ],
      correctAnswer: 1,
      explanation: 'It\'s better to exceed conservative estimates than to miss aggressive commitments. This builds credibility and trust.',
      difficulty: 'medium',
      section: 'Expectation Management',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'mcq',
      question: 'In a presentation, how should you structure a 10-minute talk?',
      options: [
        'Opening (5 min), Body (5 min)',
        'Opening (1 min), Body (7 min), Conclusion (1 min), Q&A (1 min)',
        'Body (8 min), Conclusion (2 min)',
        'Opening (2 min), Body (8 min)'
      ],
      correctAnswer: 1,
      explanation: 'Effective structure: Brief opening to set context, substantial body with main points, concise conclusion with key takeaway, and time for questions.',
      difficulty: 'medium',
      section: 'Presentation Skills',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'mcq',
      question: 'What is the recommended frequency for proactive status updates?',
      options: [
        'Only when asked',
        'Weekly regardless of progress',
        'Regularly throughout the project (e.g., Monday start, Wednesday mid-point, Friday completion)',
        'Only when there are problems'
      ],
      correctAnswer: 2,
      explanation: 'Proactive communication means updating stakeholders regularly without waiting to be asked, preventing surprises and enabling better planning.',
      difficulty: 'medium',
      section: 'Communication Skills',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'mcq',
      question: 'Which stakeholder needs user-facing explanations and workarounds?',
      options: [
        'Developers',
        'Product Owners',
        'Customer Support Team',
        'Executives'
      ],
      correctAnswer: 2,
      explanation: 'Customer Support needs user-friendly language, workarounds, expected fix dates, and scripts to communicate with customers about known issues.',
      difficulty: 'medium',
      section: 'Stakeholder Management',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'shortanswer',
      question: 'A developer says a feature is "working as designed" but it doesn\'t match requirements. What should you do?',
      acceptableAnswers: ['Reference requirements', 'Involve Product Owner', 'Discuss with PO', 'Clarify requirements', 'Escalate to PO'],
      keywords: ['requirements', 'product owner', 'PO', 'clarify', 'discuss'],
      explanation: 'Respectfully reference the requirement document, focus on user impact, and suggest involving the Product Owner to align on expected behavior. Maintain professional tone and seek to understand the design intent.',
      difficulty: 'hard',
      section: 'Conflict Resolution',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'shortanswer',
      question: 'Your manager asks "How\'s testing going?" but you\'re behind schedule with many critical bugs. What\'s the first thing you should communicate?',
      acceptableAnswers: ['Current status', 'Progress percentage', 'Behind schedule', 'Quality concerns', 'Honest update'],
      keywords: ['status', 'behind', 'progress', 'honest', 'quality'],
      explanation: 'Be honest about status: "Testing is facing challenges. Currently 60% complete (planned 80%), found 15 bugs including 3 critical." Then provide root causes, options, and recommendations.',
      difficulty: 'hard',
      section: 'Communication Skills',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'mcq',
      question: 'Scenario: You need to present test results to developers, product owner, and an executive. How do you structure it?',
      options: [
        'Same detailed presentation for everyone',
        'Layered approach: Executive summary first, then progressive detail',
        'Technical details only',
        'Skip the executive summary'
      ],
      correctAnswer: 1,
      explanation: 'Use layered presentation: Start with executive summary (for all, especially executives), then add progressive detail (metrics, defect analysis, risks), with technical backup slides if needed.',
      difficulty: 'hard',
      section: 'Presentation Skills',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'mcq',
      question: 'Scenario: During code review, a developer becomes defensive when you point out issues. How do you handle this?',
      options: [
        'Argue back',
        'Stay calm, focus on code not person, use "we" language, ask questions',
        'Stop reviewing their code',
        'Escalate immediately'
      ],
      correctAnswer: 1,
      explanation: 'De-escalate by staying calm, focusing on code quality not the person, using "we" language, asking questions instead of declaring problems, and acknowledging good parts of code first.',
      difficulty: 'hard',
      section: 'Conflict Resolution',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'mcq',
      question: 'Scenario: You\'re asked to estimate testing but requirements are vague. What should you do?',
      options: [
        'Refuse to estimate',
        'Provide a rough range with caveats, list gaps, offer to refine after requirements review',
        'Give a specific number anyway',
        'Blame the product owner'
      ],
      correctAnswer: 1,
      explanation: 'Provide preliminary range (5-10 days) with clear caveats about incomplete requirements, list specific gaps/questions, and offer to refine estimate after requirements review session.',
      difficulty: 'hard',
      section: 'Expectation Management',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'mcq',
      question: 'Scenario: You discover a critical bug right before release. The team wants to release anyway. How do you communicate the risk?',
      options: [
        'Just say "Don\'t release"',
        'Present facts, quantify business impact, provide options with risk assessment, make clear recommendation',
        'Stay silent',
        'Threaten to quit'
      ],
      correctAnswer: 1,
      explanation: 'Communicate professionally: Present facts with evidence, quantify business impact (revenue, customers affected), provide multiple options with risk assessment for each, make clear recommendation, and set decision deadline.',
      difficulty: 'hard',
      section: 'Risk Communication',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'mcq',
      question: 'Scenario: A developer repeatedly closes bugs as "Cannot Reproduce" without investigation. What should you do?',
      options: [
        'Escalate immediately',
        'Have private one-on-one conversation, gather data, focus on process not person, document agreement',
        'Stop reporting bugs',
        'Complain to team'
      ],
      correctAnswer: 1,
      explanation: 'Professional approach: Gather data on pattern, have private conversation, assume good intent, focus on improving process, offer solutions (pair debugging, better documentation), document agreement, escalate only if pattern continues.',
      difficulty: 'hard',
      section: 'Conflict Resolution',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'shortanswer',
      question: 'Your daily standup updates are vague: "Tested stuff, found bugs." Write a better standup update format.',
      acceptableAnswers: ['Yesterday: [specific modules tested, test counts, bugs found with IDs]. Today: [planned work]. Blockers: [specific issues]', 'Specific modules, numbers, bug IDs, clear plan'],
      keywords: ['specific', 'modules', 'numbers', 'bug', 'IDs', 'yesterday', 'today', 'blockers'],
      explanation: 'Better format: "YESTERDAY: Completed User Management testing (80 test cases, 75 passed, 5 failed). Found 3 bugs: BUG-234 (Critical), BUG-235 (Medium), BUG-236 (Low). TODAY: Start Payment module testing (30 cases planned). BLOCKERS: Test environment down 2 hours."',
      difficulty: 'hard',
      section: 'Agile Communication',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'Scenario: Interview question - "Tell me about a time you delivered bad news to stakeholders." What method should you use?',
      options: [
        'Just tell the story',
        'STAR method (Situation, Task, Action, Result)',
        'Blame others',
        'Make up a story'
      ],
      correctAnswer: 1,
      explanation: 'Use STAR method: Situation (context), Task (your responsibility), Action (specific steps you took), Result (outcome and lessons learned). Be specific, show problem-solving, and demonstrate professional communication.',
      difficulty: 'medium',
      section: 'Interview Skills',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'mcq',
      question: 'Scenario: Your team is remote across time zones. How do you ensure effective communication without real-time standups?',
      options: [
        'Don\'t communicate',
        'Async standup in Slack with structured template, daily updates by end of day, clear working hours',
        'Email only',
        'Wait for weekly meeting'
      ],
      correctAnswer: 1,
      explanation: 'Async communication strategy: Daily standup in Slack channel with structured template (completed, planned, blockers, working hours), each person posts by end of their day, use threads for discussions, scheduled summaries, and clear notification rules.',
      difficulty: 'hard',
      section: 'Remote Communication',
      points: 1,
      fullModeOnly: true
    }
  ]
};
