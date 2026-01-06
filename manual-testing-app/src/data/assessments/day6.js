export default {
  title: "Day 6: Defect Management & Bug Life Cycle Assessment",
  passingScore: 70,
  timeLimit: 40,
  modes: {
    quick: {
      timeLimit: 15,
      sections: ['section-a', 'section-b']
    },
    full: {
      timeLimit: 40,
      sections: ['section-a', 'section-b', 'section-c', 'section-a-full', 'section-b-full']
    }
  },
  sections: [
    {
      id: 'section-a',
      title: 'Multiple Choice Questions',
      description: 'Test your knowledge of defect management and bug life cycle',
      questions: [
        {
          id: 'q1',
          type: 'mcq',
          question: 'What is the first state in the defect life cycle?',
          options: [
            'Assigned',
            'New/Open',
            'In Progress',
            'Fixed'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'New/Open is the initial state when a defect is first logged by the tester.'
        },
        {
          id: 'q2',
          type: 'mcq',
          question: 'What is the difference between severity and priority?',
          options: [
            'They are the same thing',
            'Severity is technical impact, priority is business urgency',
            'Severity is business urgency, priority is technical impact',
            'Severity is for testers, priority is for developers'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Severity measures the technical impact (how bad), while priority measures business urgency (how soon to fix).'
        },
        {
          id: 'q3',
          type: 'mcq',
          question: 'Which severity level indicates the system is completely unusable?',
          options: [
            'Low',
            'Medium',
            'High',
            'Critical/Blocker'
          ],
          correctAnswer: 3,
          points: 2,
          explanation: 'Critical/Blocker severity means the system is completely unusable or a core functionality is broken.'
        },
        {
          id: 'q4',
          type: 'mcq',
          question: 'What does P0 priority typically mean?',
          options: [
            'Can be fixed anytime',
            'Fix in next release',
            'Fix immediately (critical)',
            'Nice to have'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'P0 indicates highest priority requiring immediate attention - typically system-breaking or business-critical issues.'
        },
        {
          id: 'q5',
          type: 'mcq',
          question: 'When should a defect be marked as "Reopened"?',
          options: [
            'When first discovered',
            'When assigned to developer',
            'When the fix doesn\'t work',
            'When closed'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'Reopened status is used when a defect reappears or the fix is inadequate after testing.'
        },
        {
          id: 'q6',
          type: 'mcq',
          question: 'What is the "Deferred" status used for?',
          options: [
            'Defects that are not bugs',
            'Defects postponed to future release',
            'Duplicate defects',
            'Defects that cannot be reproduced'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Deferred means the defect is acknowledged but will not be fixed in the current release - postponed to a future release.'
        },
        {
          id: 'q7',
          type: 'mcq',
          question: 'Which defect state indicates the developer is working on the fix?',
          options: [
            'New',
            'Assigned',
            'In Progress',
            'Fixed'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'In Progress indicates the developer is actively working on fixing the defect.'
        },
        {
          id: 'q8',
          type: 'mcq',
          question: 'What should be included in a good bug report?',
          options: [
            'Only the bug title',
            'Steps to reproduce, expected vs actual results, environment',
            'Just a screenshot',
            'Only the severity level'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'A complete bug report includes: Title, Steps to Reproduce, Expected Result, Actual Result, Severity, Priority, Environment details, and Screenshots/Logs.'
        },
        {
          id: 'q9',
          type: 'mcq',
          question: 'What is Defect Density?',
          options: [
            'Number of defects per tester',
            'Number of defects per KLOC (thousand lines of code)',
            'Number of defects per day',
            'Number of defects per test case'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Defect Density = Total Defects / Size (KLOC). It measures code quality - typically 1-5 defects/KLOC is acceptable.'
        },
        {
          id: 'q10',
          type: 'mcq',
          question: 'What does DRE stand for?',
          options: [
            'Defect Reporting Efficiency',
            'Defect Removal Efficiency',
            'Defect Resolution Efficiency',
            'Defect Review Efficiency'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'DRE (Defect Removal Efficiency) = (Defects found before release / Total defects) × 100. Target is >90%.'
        }
      ]
    },
    {
      id: 'section-b',
      title: 'True/False Questions',
      description: 'Determine if the following statements are true or false',
      questions: [
        {
          id: 'q11',
          type: 'truefalse',
          question: 'Priority and severity should always be the same for a defect.',
          correctAnswer: false,
          points: 2,
          explanation: 'False. Severity (technical impact) and priority (business urgency) are independent. A cosmetic bug on homepage can be low severity but high priority.'
        },
        {
          id: 'q12',
          type: 'truefalse',
          question: 'A defect can be reopened if the fix doesn\'t work.',
          correctAnswer: true,
          points: 2,
          explanation: 'True. Defects should be reopened if the fix is inadequate or the issue reappears during retesting.'
        },
        {
          id: 'q13',
          type: 'truefalse',
          question: 'All defects must be fixed before release.',
          correctAnswer: false,
          points: 2,
          explanation: 'False. Not all defects must be fixed. Low priority bugs may be deferred to future releases based on business decisions.'
        },
        {
          id: 'q14',
          type: 'truefalse',
          question: 'Screenshots and logs are helpful in bug reports.',
          correctAnswer: true,
          points: 2,
          explanation: 'True. Visual evidence (screenshots, videos) and logs are crucial for understanding and reproducing defects.'
        },
        {
          id: 'q15',
          type: 'truefalse',
          question: 'Defect Removal Efficiency (DRE) target should be >90%.',
          correctAnswer: true,
          points: 2,
          explanation: 'True. Industry standard DRE target is >90%, meaning at least 90% of defects should be caught before production.'
        }
      ]
    },
    {
      id: 'section-c',
      title: 'Fill in the Blanks',
      description: 'Complete the following statements',
      questions: [
        {
          id: 'q16',
          type: 'fillblank',
          question: 'The first state in the bug life cycle is _____.',
          acceptableAnswers: ['New', 'Open', 'New/Open'],
          caseSensitive: false,
          points: 2,
          explanation: 'New or Open is the initial state when a defect is first logged.'
        },
        {
          id: 'q17',
          type: 'fillblank',
          question: '_____ measures the technical impact of a defect, while _____ measures business urgency.',
          acceptableAnswers: ['Severity, Priority', 'Severity priority'],
          caseSensitive: false,
          points: 2,
          explanation: 'Severity measures technical impact (how bad), Priority measures business urgency (how soon).'
        },
        {
          id: 'q18',
          type: 'fillblank',
          question: 'DRE stands for Defect _____ Efficiency.',
          acceptableAnswers: ['Removal'],
          caseSensitive: false,
          points: 2,
          explanation: 'Defect Removal Efficiency (DRE) measures the percentage of defects caught before production release.'
        },
        {
          id: 'q19',
          type: 'fillblank',
          question: 'Defects found in production that escaped testing are called defect _____.',
          acceptableAnswers: ['leakage', 'leak'],
          caseSensitive: false,
          points: 2,
          explanation: 'Defect leakage refers to defects that escaped testing and were found in production.'
        },
        {
          id: 'q20',
          type: 'fillblank',
          question: 'A defect marked as _____ will not be fixed in the current release.',
          acceptableAnswers: ['Deferred', 'Postponed'],
          caseSensitive: false,
          points: 2,
          explanation: 'Deferred status means the defect is acknowledged but postponed to a future release.'
        }
      ]
    },
    {
      id: 'section-a-full',
      title: 'Additional Multiple Choice Questions',
      description: 'More questions on defect management',
      fullModeOnly: true,
      questions: [
        {
          id: 'q21',
          type: 'mcq',
          question: 'A cosmetic issue on the homepage that doesn\'t affect functionality. What is the severity and priority?',
          options: [
            'High severity, High priority',
            'Low severity, High priority',
            'High severity, Low priority',
            'Low severity, Low priority'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Low severity (cosmetic, no functional impact) but High priority (homepage is high visibility, affects brand image).'
        },
        {
          id: 'q22',
          type: 'mcq',
          question: 'A critical payment bug that only affects 0.1% of users. What is the severity and priority?',
          options: [
            'High severity, Low priority',
            'Low severity, High priority',
            'High severity, High priority',
            'Low severity, Low priority'
          ],
          correctAnswer: 2,
          points: 2,
          explanation: 'High severity (payment is critical) and High priority (even 0.1% matters for payment/financial issues).'
        },
        {
          id: 'q23',
          type: 'mcq',
          question: 'What is defect leakage?',
          options: [
            'Defects found during testing',
            'Defects found in production',
            'Defects that are deferred',
            'Defects that are rejected'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Defect leakage refers to defects that escaped testing and were found in production by end users.'
        },
        {
          id: 'q24',
          type: 'mcq',
          question: 'Which metric measures the percentage of defects caught before production?',
          options: [
            'Defect Density',
            'Defect Removal Efficiency (DRE)',
            'Defect Rejection Ratio',
            'Defect Age'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'DRE = (Defects found before release / Total defects) × 100. It measures testing effectiveness.'
        },
        {
          id: 'q25',
          type: 'mcq',
          question: 'What should you do if you cannot reproduce a defect?',
          options: [
            'Close it immediately',
            'Mark as "Cannot Reproduce" and ask for more information',
            'Assign to developer anyway',
            'Ignore it'
          ],
          correctAnswer: 1,
          points: 2,
          explanation: 'Professional approach: Mark as "Cannot Reproduce", document your attempts, and request more details from the reporter.'
        }
      ]
    },
    {
      id: 'section-b-full',
      title: 'Short Answer Questions',
      description: 'Provide detailed answers to the following questions',
      fullModeOnly: true,
      questions: [
        {
          id: 'q26',
          type: 'shortanswer',
          question: 'Describe the complete defect life cycle from discovery to closure, including all major states.',
          keywords: ['new', 'assigned', 'in progress', 'fixed', 'retest', 'verified', 'closed', 'reopened', 'deferred', 'rejected'],
          minKeywords: 6,
          points: 3,
          explanation: 'Complete defect life cycle: New/Open → Assigned → In Progress → Fixed → Retest → Verified → Closed. Alternative flows: Reopened (if fix fails), Deferred (postponed), Rejected (not a bug), Duplicate (already reported), Cannot Reproduce.'
        },
        {
          id: 'q27',
          type: 'shortanswer',
          question: 'Explain the difference between severity and priority with examples.',
          keywords: ['severity', 'technical', 'impact', 'priority', 'business', 'urgency', 'example', 'cosmetic', 'critical'],
          minKeywords: 5,
          points: 3,
          explanation: 'Severity = Technical impact (how bad). Priority = Business urgency (how soon). Example: Logo missing on homepage = Low severity (cosmetic) but High priority (brand visibility). Admin page crash = High severity but Low priority (affects few users).'
        },
        {
          id: 'q28',
          type: 'shortanswer',
          question: 'What are the essential components of a comprehensive bug report?',
          keywords: ['title', 'steps', 'reproduce', 'expected', 'actual', 'severity', 'priority', 'environment', 'screenshot', 'logs'],
          minKeywords: 6,
          points: 3,
          explanation: 'Essential bug report components: Bug ID, Title, Description, Steps to Reproduce, Expected Result, Actual Result, Severity, Priority, Environment Details (OS, browser, version), Screenshots/Videos, Console Logs, Frequency, and Suggested Fix (optional).'
        },
        {
          id: 'q29',
          type: 'shortanswer',
          question: 'Calculate Defect Density and DRE: 85 defects found in testing, 15 in production, 50,000 lines of code.',
          keywords: ['defect density', '2', 'KLOC', 'DRE', '85', 'percent', 'efficiency'],
          minKeywords: 4,
          points: 3,
          explanation: 'Defect Density = Total Defects / KLOC = 100 / 50 = 2.0 defects/KLOC (Good, within 1-5 range). DRE = (85 / 100) × 100 = 85% (Below target of 90%, needs improvement).'
        },
        {
          id: 'q30',
          type: 'shortanswer',
          question: 'How would you handle a situation where a developer marks your bug as "Cannot Reproduce"?',
          keywords: ['professional', 'information', 'details', 'environment', 'steps', 'video', 'screenshot', 'pair', 'collaborate', 'reproduce'],
          minKeywords: 5,
          points: 3,
          explanation: 'Professional approach: 1) Stay calm and collaborative, 2) Review your bug report for completeness, 3) Try to reproduce again with detailed steps, 4) Provide additional information (exact environment, video recording, console logs), 5) Offer to pair test with developer, 6) Document all attempts, 7) Escalate only if necessary after exhausting all options.'
        }
      ]
    }
  ]
};
