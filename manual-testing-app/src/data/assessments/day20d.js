export const day20dAssessment = {
  id: 'day20d',
  title: 'Day 20D: Industry-Specific Testing & Integration',
  description: 'Assessment covering Healthcare, Financial, E-commerce, Gaming, and Industry-Specific Testing Requirements',
  
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
      question: 'Which regulation applies to healthcare software in the US?',
      options: [
        'PCI DSS',
        'FDA 21 CFR Part 11',
        'SOX',
        'Basel III'
      ],
      correctAnswer: 1,
      explanation: 'FDA 21 CFR Part 11 regulates electronic records and signatures in healthcare software.',
      difficulty: 'medium',
      section: 'Healthcare Testing',
      points: 1
    },
    {
      id: 'q2',
      type: 'mcq',
      question: 'What does HIPAA protect?',
      options: [
        'Payment card data',
        'Patient health information',
        'Financial records',
        'Source code'
      ],
      correctAnswer: 1,
      explanation: 'HIPAA (Health Insurance Portability and Accountability Act) protects patient health information (PHI).',
      difficulty: 'easy',
      section: 'Healthcare Testing',
      points: 1
    },
    {
      id: 'q3',
      type: 'mcq',
      question: 'Which standard is required for payment card processing?',
      options: [
        'HIPAA',
        'FDA 21 CFR Part 11',
        'PCI DSS',
        'ISO 26262'
      ],
      correctAnswer: 2,
      explanation: 'PCI DSS (Payment Card Industry Data Security Standard) is required for handling payment card data.',
      difficulty: 'easy',
      section: 'Financial Testing',
      points: 1
    },
    {
      id: 'q4',
      type: 'mcq',
      question: 'What does PCI DSS stand for?',
      options: [
        'Payment Card Industry Data Security Standard',
        'Personal Credit Information Data Storage',
        'Protected Card Identification System',
        'Payment Compliance and Insurance Data'
      ],
      correctAnswer: 0,
      explanation: 'PCI DSS stands for Payment Card Industry Data Security Standard.',
      difficulty: 'easy',
      section: 'Financial Testing',
      points: 1
    },
    {
      id: 'q5',
      type: 'mcq',
      question: 'Which standard applies to automotive software safety?',
      options: [
        'IEC 62304',
        'ISO 26262',
        'HIPAA',
        'SOX'
      ],
      correctAnswer: 1,
      explanation: 'ISO 26262 is the functional safety standard for automotive software.',
      difficulty: 'medium',
      section: 'Automotive Testing',
      points: 1
    },
    {
      id: 'q6',
      type: 'mcq',
      question: 'What is the highest ASIL level in automotive testing?',
      options: [
        'ASIL A',
        'ASIL B',
        'ASIL C',
        'ASIL D'
      ],
      correctAnswer: 3,
      explanation: 'ASIL D is the highest safety integrity level in automotive testing (most stringent).',
      difficulty: 'medium',
      section: 'Automotive Testing',
      points: 1
    },
    {
      id: 'q7',
      type: 'mcq',
      question: 'Which industry requires 99.999% uptime (five nines)?',
      options: [
        'E-commerce',
        'Gaming',
        'Telecommunications',
        'Healthcare'
      ],
      correctAnswer: 2,
      explanation: 'Telecommunications systems require 99.999% uptime (five nines) = only 5.26 minutes downtime per year.',
      difficulty: 'medium',
      section: 'Telecommunications Testing',
      points: 1
    },
    {
      id: 'q8',
      type: 'mcq',
      question: 'What does SOX regulate?',
      options: [
        'Healthcare data',
        'Financial reporting',
        'Payment processing',
        'Automotive safety'
      ],
      correctAnswer: 1,
      explanation: 'SOX (Sarbanes-Oxley Act) regulates financial reporting and corporate governance.',
      difficulty: 'medium',
      section: 'Financial Testing',
      points: 1
    },
    {
      id: 'q9',
      type: 'mcq',
      question: 'Which testing is mandatory for financial applications?',
      options: [
        'Usability testing',
        'Penetration testing',
        'A/B testing',
        'Smoke testing'
      ],
      correctAnswer: 1,
      explanation: 'Penetration testing is mandatory for financial applications to identify security vulnerabilities.',
      difficulty: 'medium',
      section: 'Financial Testing',
      points: 1
    },
    {
      id: 'q10',
      type: 'mcq',
      question: 'What is IEC 62304?',
      options: [
        'Payment card standard',
        'Medical device software standard',
        'Automotive safety standard',
        'Telecommunications protocol'
      ],
      correctAnswer: 1,
      explanation: 'IEC 62304 is the international standard for medical device software lifecycle processes.',
      difficulty: 'medium',
      section: 'Healthcare Testing',
      points: 1
    },
    {
      id: 'q11',
      type: 'mcq',
      question: 'In e-commerce, what is a critical performance metric?',
      options: [
        'Page load time <3 seconds',
        '100% test coverage',
        'Zero defects',
        'Daily deployments'
      ],
      correctAnswer: 0,
      explanation: 'Page load time <3 seconds is critical for e-commerce - every second delay reduces conversions by 7%.',
      difficulty: 'medium',
      section: 'E-commerce Testing',
      points: 1
    },
    {
      id: 'q12',
      type: 'mcq',
      question: 'Which compliance is required for EU users\' data?',
      options: [
        'HIPAA',
        'SOX',
        'GDPR',
        'PCI DSS'
      ],
      correctAnswer: 2,
      explanation: 'GDPR (General Data Protection Regulation) is required for processing EU citizens\' data.',
      difficulty: 'easy',
      section: 'Data Privacy',
      points: 1
    },
    {
      id: 'q13',
      type: 'mcq',
      question: 'What does WCAG 2.1 Level AA ensure?',
      options: [
        'Security compliance',
        'Accessibility compliance',
        'Performance standards',
        'Data privacy'
      ],
      correctAnswer: 1,
      explanation: 'WCAG 2.1 Level AA ensures web accessibility compliance for users with disabilities.',
      difficulty: 'medium',
      section: 'Accessibility',
      points: 1
    },
    {
      id: 'q14',
      type: 'mcq',
      question: 'In gaming, what is the target frame rate?',
      options: [
        '30 FPS',
        '60 FPS',
        '120 FPS',
        '240 FPS'
      ],
      correctAnswer: 1,
      explanation: '60 FPS is the standard target for smooth gaming experience. Competitive games may target 120+ FPS.',
      difficulty: 'easy',
      section: 'Gaming Testing',
      points: 1
    },
    {
      id: 'q15',
      type: 'mcq',
      question: 'Which industry has the strictest data retention requirements?',
      options: [
        'Gaming',
        'E-commerce',
        'Financial services',
        'Telecommunications'
      ],
      correctAnswer: 2,
      explanation: 'Financial services typically require 7 years of data retention for compliance (SOX, SEC regulations).',
      difficulty: 'medium',
      section: 'Financial Testing',
      points: 1
    },

    // Full Mode Additional Questions (Q16-Q30)
    {
      id: 'q16',
      type: 'truefalse',
      question: 'All software must comply with HIPAA regulations.',
      correctAnswer: false,
      explanation: 'Only healthcare applications handling PHI (Protected Health Information) must comply with HIPAA.',
      difficulty: 'easy',
      section: 'Healthcare Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q17',
      type: 'truefalse',
      question: 'PCI DSS requires quarterly vulnerability scans.',
      correctAnswer: true,
      explanation: 'PCI DSS mandates quarterly vulnerability scans by an Approved Scanning Vendor (ASV).',
      difficulty: 'medium',
      section: 'Financial Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q18',
      type: 'truefalse',
      question: 'Medical device software requires FDA approval in the US.',
      correctAnswer: true,
      explanation: 'Medical devices (including software) require FDA approval through 510(k) or PMA process.',
      difficulty: 'medium',
      section: 'Healthcare Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q19',
      type: 'truefalse',
      question: 'GDPR applies only to companies located in Europe.',
      correctAnswer: false,
      explanation: 'GDPR applies to ANY company processing EU citizens\' data, regardless of company location.',
      difficulty: 'medium',
      section: 'Data Privacy',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q20',
      type: 'truefalse',
      question: 'Financial applications must encrypt data at rest and in transit.',
      correctAnswer: true,
      explanation: 'Financial applications must use encryption (AES-256 at rest, TLS 1.3 in transit) for PCI DSS compliance.',
      difficulty: 'easy',
      section: 'Financial Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q21',
      type: 'truefalse',
      question: 'Automotive ASIL D is the highest safety level.',
      correctAnswer: true,
      explanation: 'ASIL D is the highest safety integrity level in ISO 26262, requiring the most rigorous testing.',
      difficulty: 'easy',
      section: 'Automotive Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q22',
      type: 'truefalse',
      question: 'E-commerce sites don\'t need security testing if using HTTPS.',
      correctAnswer: false,
      explanation: 'HTTPS is just one layer. E-commerce sites still need comprehensive security testing (SQL injection, XSS, CSRF, etc.).',
      difficulty: 'medium',
      section: 'E-commerce Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q23',
      type: 'truefalse',
      question: 'Telecommunications systems require real-time performance testing.',
      correctAnswer: true,
      explanation: 'Telecom systems require real-time performance testing to ensure low latency and high availability.',
      difficulty: 'easy',
      section: 'Telecommunications Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q24',
      type: 'shortanswer',
      question: 'You\'re testing a healthcare app storing patient data. Create a HIPAA compliance checklist with 3 items.',
      acceptableAnswers: ['Data encryption, Access controls, Audit logs', 'Encryption, Authentication, Logging', 'Security, Privacy, Audit trail'],
      keywords: ['encryption', 'access', 'audit', 'security', 'authentication'],
      explanation: 'HIPAA checklist: 1) Data encryption (AES-256 at rest, TLS in transit), 2) Access controls (role-based, MFA), 3) Audit logs (who accessed what when), 4) Data backup and recovery, 5) PHI transmission security.',
      difficulty: 'hard',
      section: 'Healthcare Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q25',
      type: 'mcq',
      question: 'Design a security testing strategy for online banking. What should be included?',
      options: [
        'Only penetration testing',
        'Penetration testing, vulnerability scanning, encryption verification, PCI DSS compliance, SOX compliance',
        'Just use HTTPS',
        'No testing needed'
      ],
      correctAnswer: 1,
      explanation: 'Comprehensive strategy: Penetration testing (quarterly), vulnerability scanning, encryption verification (AES-256, TLS 1.3), PCI DSS compliance (if handling cards), SOX compliance (financial reporting), session management, authentication testing.',
      difficulty: 'hard',
      section: 'Financial Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q26',
      type: 'mcq',
      question: 'You find patient data transmitted over HTTP (unencrypted) in a healthcare app. What should you do?',
      options: [
        'Ignore it',
        'Log as P0 Critical, stop release, escalate to security team, document HIPAA violation',
        'Log as low priority',
        'Fix it later'
      ],
      correctAnswer: 1,
      explanation: 'Immediate actions: 1) Log as P0 Critical blocker, 2) Stop release immediately, 3) Escalate to security team and management, 4) Document as HIPAA violation, 5) Require TLS 1.3 implementation, 6) Conduct security audit.',
      difficulty: 'hard',
      section: 'Healthcare Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q27',
      type: 'shortanswer',
      question: 'Create a test plan for an automotive braking system (ASIL D). What are 3 key testing requirements?',
      acceptableAnswers: ['Hardware-in-loop testing, Fault injection, Safety analysis', 'HIL testing, Failure mode testing, Safety validation', 'Simulation, Fault testing, Safety verification'],
      keywords: ['hardware', 'fault', 'safety', 'simulation', 'injection'],
      explanation: 'ASIL D testing: 1) Hardware-in-loop (HIL) testing, 2) Fault injection testing (simulate failures), 3) Safety analysis (FMEA, FTA), 4) Requirements traceability (100%), 5) Code coverage (MC/DC 100%), 6) Independent verification.',
      difficulty: 'hard',
      section: 'Automotive Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q28',
      type: 'mcq',
      question: 'Compare testing requirements for healthcare vs financial services. What\'s a key difference?',
      options: [
        'They are identical',
        'Healthcare focuses on patient safety and PHI protection, Financial focuses on transaction accuracy and fraud prevention',
        'Healthcare is easier',
        'No difference'
      ],
      correctAnswer: 1,
      explanation: 'Healthcare: Patient safety (FDA), PHI protection (HIPAA), medical device standards (IEC 62304). Financial: Transaction accuracy, fraud prevention, PCI DSS, SOX compliance, penetration testing. Both require high security and audit trails.',
      difficulty: 'hard',
      section: 'Industry Comparison',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q29',
      type: 'mcq',
      question: 'Design a performance testing strategy for an e-commerce site expecting Black Friday traffic (10x normal load).',
      options: [
        'No testing needed',
        'Load testing (10x normal), stress testing (15x), spike testing, endurance testing, CDN testing',
        'Just hope for the best',
        'Only test normal load'
      ],
      correctAnswer: 1,
      explanation: 'Black Friday strategy: 1) Load testing (10x normal = 100K concurrent users), 2) Stress testing (15x to find breaking point), 3) Spike testing (sudden traffic surge), 4) Endurance testing (sustained load), 5) CDN performance, 6) Database optimization, 7) Auto-scaling validation.',
      difficulty: 'hard',
      section: 'E-commerce Testing',
      points: 1,
      fullModeOnly: true
    },
    {
      id: 'q30',
      type: 'shortanswer',
      question: 'You\'re testing a mobile game. What are 3 key testing areas specific to gaming?',
      acceptableAnswers: ['Frame rate, Graphics rendering, Multiplayer', 'Performance, Graphics, Network', 'FPS, Rendering, Gameplay'],
      keywords: ['frame', 'fps', 'graphics', 'performance', 'multiplayer', 'network'],
      explanation: 'Gaming-specific testing: 1) Frame rate (60 FPS target), 2) Graphics rendering (different devices, resolutions), 3) Multiplayer/network (latency <100ms), 4) Battery consumption, 5) In-app purchases, 6) Game balance, 7) Save/load functionality, 8) Controller support.',
      difficulty: 'medium',
      section: 'Gaming Testing',
      points: 1,
      fullModeOnly: true
    }
  ]
};