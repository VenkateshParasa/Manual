export default {
  title: "Day 20: Industry Best Practices & Standards",
  description: "Quality Standards, ISO Frameworks, ISTQB, TMMi, Agile/DevOps Practices, and Industry-Specific Testing",
  passingScore: 70,
  timeLimit: 90,
  modes: {
    quick: {
      timeLimit: 30,
      questionCount: 30,
      description: "Quick assessment covering essential industry best practices"
    },
    full: {
      timeLimit: 90,
      questionCount: 120,
      description: "Comprehensive assessment covering all industry standards and practices"
    }
  },
  sections: [
    {
      title: "Quality Standards & ISO Frameworks - Multiple Choice",
      questions: [
        {
          id: "day20_q1",
          type: "mcq",
          question: "What is the primary purpose of quality standards in software testing?",
          options: [
            "To increase project costs",
            "To provide consistency, quality assurance, and compliance",
            "To slow down development",
            "To replace testing processes"
          ],
          correctAnswer: 1,
          explanation: "Standards ensure consistent processes, proven practices, and regulatory compliance.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q2",
          type: "mcq",
          question: "How many parts does ISO/IEC 29119 consist of?",
          options: [
            "3 parts",
            "4 parts",
            "5 parts",
            "6 parts"
          ],
          correctAnswer: 2,
          explanation: "ISO/IEC 29119 has 5 parts: Concepts, Processes, Documentation, Techniques, Keyword-Driven.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q3",
          type: "mcq",
          question: "How many product quality characteristics are defined in ISO/IEC 25010?",
          options: [
            "5",
            "6",
            "7",
            "8"
          ],
          correctAnswer: 3,
          explanation: "ISO 25010 defines 8 characteristics: Functional Suitability, Performance, Compatibility, Usability, Reliability, Security, Maintainability, Portability.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q4",
          type: "mcq",
          question: "Which ISO 25010 characteristic focuses on protecting information and data?",
          options: [
            "Reliability",
            "Security",
            "Maintainability",
            "Portability"
          ],
          correctAnswer: 1,
          explanation: "Security characteristic focuses on protecting information and data from unauthorized access.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q5",
          type: "mcq",
          question: "What is the formula for calculating defect density?",
          options: [
            "(Total Defects / Lines of Code) × 100",
            "(Total Defects / Lines of Code) × 1000",
            "(Critical Defects / Total Defects) × 100",
            "(Defects Found / Test Cases) × 100"
          ],
          correctAnswer: 1,
          explanation: "Defect density = (Total Defects / Lines of Code) × 1000, providing a normalized metric per 1000 LOC.",
          difficulty: "medium",
          points: 1
        }
      ]
    },
    {
      title: "ISTQB Certification - Multiple Choice",
      questions: [
        {
          id: "day20_q6",
          type: "mcq",
          question: "What does ISTQB stand for?",
          options: [
            "International Software Testing Quality Board",
            "International Software Testing Qualifications Board",
            "International System Testing Quality Board",
            "International Standards Testing Board"
          ],
          correctAnswer: 1,
          explanation: "ISTQB stands for International Software Testing Qualifications Board.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q7",
          type: "mcq",
          question: "How many questions are in the ISTQB Foundation Level exam?",
          options: [
            "30 questions",
            "40 questions",
            "50 questions",
            "60 questions"
          ],
          correctAnswer: 1,
          explanation: "ISTQB Foundation Level exam has 40 questions with 65% passing score (26 correct).",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q8",
          type: "mcq",
          question: "Which is NOT one of the seven testing principles in ISTQB?",
          options: [
            "Testing shows presence of defects",
            "Exhaustive testing is possible",
            "Early testing",
            "Defect clustering"
          ],
          correctAnswer: 1,
          explanation: "The principle states that exhaustive testing is IMPOSSIBLE, not possible.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q9",
          type: "mcq",
          question: "Which ISTQB Advanced Level certification focuses on black-box techniques?",
          options: [
            "Test Manager",
            "Test Analyst",
            "Technical Test Analyst",
            "Test Automation Engineer"
          ],
          correctAnswer: 1,
          explanation: "Test Analyst focuses on black-box testing techniques and business-facing testing.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q10",
          type: "mcq",
          question: "What is the passing score for ISTQB Foundation Level?",
          options: [
            "60%",
            "65%",
            "70%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "The passing score is 65% (26 out of 40 correct answers).",
          difficulty: "easy",
          points: 1
        }
      ]
    },
    {
      title: "Test Maturity Models - Multiple Choice",
      questions: [
        {
          id: "day20_q11",
          type: "mcq",
          question: "How many maturity levels are in TMMi?",
          options: [
            "3 levels",
            "4 levels",
            "5 levels",
            "6 levels"
          ],
          correctAnswer: 2,
          explanation: "TMMi has 5 maturity levels: Initial, Managed, Defined, Measured, Optimization.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q12",
          type: "mcq",
          question: "What is TMMi Level 1 called?",
          options: [
            "Managed",
            "Initial",
            "Defined",
            "Aware"
          ],
          correctAnswer: 1,
          explanation: "Level 1 is called Initial (ad-hoc, chaotic testing with no formal processes).",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q13",
          type: "mcq",
          question: "At which TMMi level is 'Test Organization' introduced?",
          options: [
            "Level 2",
            "Level 3",
            "Level 4",
            "Level 5"
          ],
          correctAnswer: 1,
          explanation: "Test Organization is a process area at TMMi Level 3 (Defined).",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q14",
          type: "mcq",
          question: "Which TMMi level focuses on 'Defect Prevention'?",
          options: [
            "Level 2",
            "Level 3",
            "Level 4",
            "Level 5"
          ],
          correctAnswer: 3,
          explanation: "Defect Prevention is a process area at TMMi Level 5 (Optimization).",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q15",
          type: "mcq",
          question: "What does TPI NEXT stand for?",
          options: [
            "Test Process Integration",
            "Test Process Improvement",
            "Test Performance Index",
            "Test Planning Initiative"
          ],
          correctAnswer: 1,
          explanation: "TPI NEXT stands for Test Process Improvement, offering flexible improvement approach.",
          difficulty: "medium",
          points: 1
        }
      ]
    },
    {
      title: "Agile & DevOps Practices - Multiple Choice",
      questions: [
        {
          id: "day20_q16",
          type: "mcq",
          question: "What does the Agile Testing Pyramid recommend for unit tests?",
          options: [
            "10%",
            "30%",
            "60%",
            "100%"
          ],
          correctAnswer: 2,
          explanation: "The Test Automation Pyramid recommends 60% unit tests (fast, many), 30% integration tests, 10% UI tests (slow, few).",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q17",
          type: "mcq",
          question: "Which Agile Testing Quadrant contains unit tests?",
          options: [
            "Q1 (Technology-facing, Supporting Team)",
            "Q2 (Business-facing, Supporting Team)",
            "Q3 (Business-facing, Critique Product)",
            "Q4 (Technology-facing, Critique Product)"
          ],
          correctAnswer: 0,
          explanation: "Q1 contains unit tests, component tests, and API tests - technology-facing tests that support the team.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q18",
          type: "mcq",
          question: "What does 'shift left' mean in testing?",
          options: [
            "Move testing team to different location",
            "Test only left side of application",
            "Move testing activities earlier in SDLC",
            "Reduce testing time"
          ],
          correctAnswer: 2,
          explanation: "Shift-left means moving testing activities earlier (left on timeline) to find defects sooner when they're cheaper to fix.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q19",
          type: "mcq",
          question: "Which deployment strategy allows instant rollback?",
          options: [
            "Rolling deployment",
            "Canary release",
            "Blue-Green deployment",
            "Big bang deployment"
          ],
          correctAnswer: 2,
          explanation: "Blue-Green deployment maintains two identical environments, allowing instant rollback by switching traffic.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q20",
          type: "mcq",
          question: "In Canary release, what percentage of users typically get the new version first?",
          options: [
            "1-5%",
            "25-50%",
            "50-75%",
            "100%"
          ],
          correctAnswer: 0,
          explanation: "Canary releases start with 1-5% of users to minimize risk, then gradually increase if no issues found.",
          difficulty: "medium",
          points: 1
        }
      ]
    },
    {
      title: "Industry-Specific Testing - Multiple Choice",
      questions: [
        {
          id: "day20_q21",
          type: "mcq",
          question: "Which regulation applies to healthcare software in the US?",
          options: [
            "PCI DSS",
            "FDA 21 CFR Part 11",
            "SOX",
            "Basel III"
          ],
          correctAnswer: 1,
          explanation: "FDA 21 CFR Part 11 regulates electronic records and signatures in healthcare software.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q22",
          type: "mcq",
          question: "What does HIPAA protect?",
          options: [
            "Payment card data",
            "Patient health information",
            "Financial records",
            "Source code"
          ],
          correctAnswer: 1,
          explanation: "HIPAA (Health Insurance Portability and Accountability Act) protects patient health information (PHI).",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q23",
          type: "mcq",
          question: "Which standard is required for payment card processing?",
          options: [
            "HIPAA",
            "FDA 21 CFR Part 11",
            "PCI DSS",
            "ISO 26262"
          ],
          correctAnswer: 2,
          explanation: "PCI DSS (Payment Card Industry Data Security Standard) is required for handling payment card data.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q24",
          type: "mcq",
          question: "Which standard applies to automotive software safety?",
          options: [
            "IEC 62304",
            "ISO 26262",
            "HIPAA",
            "SOX"
          ],
          correctAnswer: 1,
          explanation: "ISO 26262 is the functional safety standard for automotive software.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q25",
          type: "mcq",
          question: "What is the highest ASIL level in automotive testing?",
          options: [
            "ASIL A",
            "ASIL B",
            "ASIL C",
            "ASIL D"
          ],
          correctAnswer: 3,
          explanation: "ASIL D is the highest safety integrity level in automotive testing (most stringent requirements).",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q26",
          type: "mcq",
          question: "Which compliance is required for EU users' data?",
          options: [
            "HIPAA",
            "SOX",
            "GDPR",
            "PCI DSS"
          ],
          correctAnswer: 2,
          explanation: "GDPR (General Data Protection Regulation) is required for processing EU citizens' data.",
          difficulty: "easy",
          points: 1
        },
        {
          id: "day20_q27",
          type: "mcq",
          question: "What does SOX regulate?",
          options: [
            "Healthcare data",
            "Financial reporting",
            "Payment processing",
            "Automotive safety"
          ],
          correctAnswer: 1,
          explanation: "SOX (Sarbanes-Oxley Act) regulates financial reporting and corporate governance.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q28",
          type: "mcq",
          question: "In e-commerce, what is a critical performance metric?",
          options: [
            "Page load time <3 seconds",
            "100% test coverage",
            "Zero defects",
            "Daily deployments"
          ],
          correctAnswer: 0,
          explanation: "Page load time <3 seconds is critical for e-commerce - every second delay reduces conversions by 7%.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q29",
          type: "mcq",
          question: "What is IEC 62304?",
          options: [
            "Payment card standard",
            "Medical device software standard",
            "Automotive safety standard",
            "Telecommunications protocol"
          ],
          correctAnswer: 1,
          explanation: "IEC 62304 is the international standard for medical device software lifecycle processes.",
          difficulty: "medium",
          points: 1
        },
        {
          id: "day20_q30",
          type: "mcq",
          question: "In gaming, what is the target frame rate?",
          options: [
            "30 FPS",
            "60 FPS",
            "120 FPS",
            "240 FPS"
          ],
          correctAnswer: 1,
          explanation: "60 FPS is the standard target for smooth gaming experience. Competitive games may target 120+ FPS.",
          difficulty: "easy",
          points: 1
        }
      ]
    },
    {
      title: "True/False Questions",
      questions: [
        {
          id: "day20_q31",
          type: "truefalse",
          question: "ISO/IEC 29119 is mandatory for all software projects.",
          correctAnswer: false,
          explanation: "ISO 29119 is not mandatory for all projects; adoption depends on industry, size, and requirements.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q32",
          type: "truefalse",
          question: "Quality standards eliminate the need for testing.",
          correctAnswer: false,
          explanation: "Standards provide framework and best practices but don't eliminate the need for actual testing.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q33",
          type: "truefalse",
          question: "ISO 25010 replaced ISO 9126 in 2011.",
          correctAnswer: true,
          explanation: "ISO 25010 was published in 2011 as the replacement for ISO 9126.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q34",
          type: "truefalse",
          question: "ISTQB Foundation Level has prerequisites requiring 2 years of testing experience.",
          correctAnswer: false,
          explanation: "No prerequisites required for ISTQB Foundation Level. Anyone can take it.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q35",
          type: "truefalse",
          question: "The seven testing principles state that exhaustive testing is impossible.",
          correctAnswer: true,
          explanation: "One of the seven principles is that exhaustive testing is impossible for any non-trivial application.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q36",
          type: "truefalse",
          question: "TMMi Level 2 is called 'Defined'.",
          correctAnswer: false,
          explanation: "Level 2 is 'Managed', Level 3 is 'Defined'.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q37",
          type: "truefalse",
          question: "ISTQB certification is valid for 5 years and must be renewed.",
          correctAnswer: false,
          explanation: "ISTQB certification is lifetime valid with no expiration or renewal required.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q38",
          type: "truefalse",
          question: "TPI NEXT is more flexible than TMMi for targeted improvements.",
          correctAnswer: true,
          explanation: "TPI NEXT allows organizations to improve specific areas without following strict maturity level progression.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q39",
          type: "truefalse",
          question: "In Agile, testing is only the QA team's responsibility.",
          correctAnswer: false,
          explanation: "Quality is everyone's responsibility in Agile - the whole team approach.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q40",
          type: "truefalse",
          question: "The Test Pyramid recommends more UI tests than unit tests.",
          correctAnswer: false,
          explanation: "The pyramid is inverted - more unit tests (60%) at the base, fewer UI tests (10%) at the top.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q41",
          type: "truefalse",
          question: "Continuous Deployment means automatically deploying to production after tests pass.",
          correctAnswer: true,
          explanation: "Continuous Deployment automatically deploys to production when all tests pass. Continuous Delivery requires manual approval.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q42",
          type: "truefalse",
          question: "Testing in production is always a bad practice.",
          correctAnswer: false,
          explanation: "Testing in production is valid when done correctly using canary releases, feature flags, synthetic monitoring, and A/B testing.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q43",
          type: "truefalse",
          question: "Blue-Green deployment requires two identical environments.",
          correctAnswer: true,
          explanation: "Blue-Green deployment maintains two identical production environments to enable instant rollback.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q44",
          type: "truefalse",
          question: "All software must comply with HIPAA regulations.",
          correctAnswer: false,
          explanation: "Only healthcare applications handling PHI (Protected Health Information) must comply with HIPAA.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q45",
          type: "truefalse",
          question: "PCI DSS requires quarterly vulnerability scans.",
          correctAnswer: true,
          explanation: "PCI DSS mandates quarterly vulnerability scans by an Approved Scanning Vendor (ASV).",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q46",
          type: "truefalse",
          question: "Medical device software requires FDA approval in the US.",
          correctAnswer: true,
          explanation: "Medical devices (including software) require FDA approval through 510(k) or PMA process.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q47",
          type: "truefalse",
          question: "GDPR applies only to companies located in Europe.",
          correctAnswer: false,
          explanation: "GDPR applies to ANY company processing EU citizens' data, regardless of company location.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q48",
          type: "truefalse",
          question: "Financial applications must encrypt data at rest and in transit.",
          correctAnswer: true,
          explanation: "Financial applications must use encryption (AES-256 at rest, TLS 1.3 in transit) for PCI DSS compliance.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q49",
          type: "truefalse",
          question: "Automotive ASIL D is the highest safety level.",
          correctAnswer: true,
          explanation: "ASIL D is the highest safety integrity level in ISO 26262, requiring the most rigorous testing.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q50",
          type: "truefalse",
          question: "E-commerce sites don't need security testing if using HTTPS.",
          correctAnswer: false,
          explanation: "HTTPS is just one layer. E-commerce sites still need comprehensive security testing (SQL injection, XSS, CSRF, etc.).",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q51",
          type: "truefalse",
          question: "100% code coverage guarantees zero defects according to ISO standards.",
          correctAnswer: false,
          explanation: "100% coverage doesn't guarantee zero defects; it only means all code was executed.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q52",
          type: "truefalse",
          question: "An Organizational Test Policy applies to the entire organization.",
          correctAnswer: true,
          explanation: "Organizational Test Policy applies to the entire organization, setting high-level testing standards.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q53",
          type: "truefalse",
          question: "ISO 29119 Part 3 provides templates for test documentation.",
          correctAnswer: true,
          explanation: "Part 3 provides templates for test plans, test cases, and incident reports.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q54",
          type: "truefalse",
          question: "Test Organization is a process area at TMMi Level 3.",
          correctAnswer: true,
          explanation: "Test Organization is introduced at Level 3 (Defined) to establish formal test organization structure.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q55",
          type: "truefalse",
          question: "ISTQB Advanced Level requires Foundation Level as a prerequisite.",
          correctAnswer: true,
          explanation: "ISTQB Advanced Level requires Foundation Level certification plus 18 months of testing experience.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q56",
          type: "truefalse",
          question: "Definition of Done should include testing criteria.",
          correctAnswer: true,
          explanation: "DoD must include testing criteria such as all tests passed, code coverage met, and no critical defects.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q57",
          type: "truefalse",
          question: "In Agile, all testing happens at the end of the sprint.",
          correctAnswer: false,
          explanation: "Testing happens continuously throughout the sprint - shift-left approach.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q58",
          type: "truefalse",
          question: "DevSecOps means shifting security testing left in the pipeline.",
          correctAnswer: true,
          explanation: "DevSecOps integrates security practices early in the development pipeline (shift-left security).",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q59",
          type: "truefalse",
          question: "Telecommunications systems require real-time performance testing.",
          correctAnswer: true,
          explanation: "Telecom systems require real-time performance testing to ensure low latency and high availability (99.999% uptime).",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day20_q60",
          type: "truefalse",
          question: "Small startups (<5 people) must adopt ISO standards immediately.",
          correctAnswer: false,
          explanation: "Small startups may skip standards initially and adopt them as they mature and grow.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        }
      ]
    },
    {
      title: "Scenario-Based & Short Answer Questions",
      questions: [
        {
          id: "day20_q61",
          type: "shortanswer",
          question: "List the 4-year progression from awareness to ISO 29119 certification.",
          acceptableAnswers: ["Year 1: Awareness, Year 2: Implementation, Year 3: Preparation, Year 4: Certification", "Awareness, Implementation, Preparation, Certification"],
          keywords: ["awareness", "implementation", "preparation", "certification", "year"],
          minKeywords: 3,
          explanation: "Year 1: Awareness & Assessment, Year 2: Organization-Wide Implementation, Year 3: Certification Preparation, Year 4: Certification & Maintenance.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q62",
          type: "shortanswer",
          question: "Name 3 key sections that must be in an Organizational Test Policy.",
          acceptableAnswers: ["Scope, Principles, Requirements", "Scope, Testing Principles, Process Requirements", "Scope, Roles, Compliance"],
          keywords: ["scope", "principles", "requirements", "roles", "compliance"],
          minKeywords: 2,
          explanation: "Key sections: 1) Scope (what it applies to), 2) Testing Principles (quality is everyone's responsibility), 3) Process Requirements (test plans, coverage targets, defect tracking).",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q63",
          type: "shortanswer",
          question: "For online banking, which ISO 25010 characteristic is MOST critical?",
          acceptableAnswers: ["Security", "Reliability", "Security and Reliability"],
          keywords: ["security", "reliability"],
          minKeywords: 1,
          explanation: "Security is MOST critical for online banking (data encryption, authentication). Reliability is also critical (99.9% uptime).",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q64",
          type: "shortanswer",
          question: "List 5 mandatory sections in an ISO 29119-3 Test Plan.",
          acceptableAnswers: ["Test Plan Identifier, Test Items, Features to be Tested, Pass/Fail Criteria, Test Deliverables", "Identifier, Items, Features, Criteria, Deliverables"],
          keywords: ["identifier", "items", "features", "criteria", "deliverables"],
          minKeywords: 3,
          explanation: "5 mandatory sections: 1) Test Plan Identifier, 2) Test Items, 3) Features to be Tested, 4) Pass/Fail Criteria, 5) Test Deliverables.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q65",
          type: "shortanswer",
          question: "Create a 12-month roadmap to achieve TMMi Level 2 from Level 1. List the 4 quarters.",
          acceptableAnswers: ["Q1: Assessment, Q2: Planning, Q3: Implementation, Q4: Audit", "Assessment, Planning, Implementation, Audit"],
          keywords: ["assessment", "planning", "implementation", "audit", "quarter"],
          minKeywords: 3,
          explanation: "Q1: Gap assessment and training, Q2: Test policy and strategy development, Q3: Process implementation and documentation, Q4: Internal audit and certification preparation.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q66",
          type: "shortanswer",
          question: "Create a 6-week ISTQB Foundation Level study plan. What should Week 1 cover?",
          acceptableAnswers: ["Fundamentals of Testing", "Chapter 1", "Testing principles", "Seven principles"],
          keywords: ["fundamentals", "principles", "chapter 1", "testing"],
          minKeywords: 1,
          explanation: "Week 1: Fundamentals of Testing (Chapter 1) - Seven testing principles, test process, psychology of testing.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q67",
          type: "mcq",
          question: "List the seven ISTQB testing principles.",
          options: [
            "Testing shows presence of defects, Exhaustive testing is impossible, Early testing, Defect clustering, Pesticide paradox, Testing is context dependent, Absence of errors fallacy",
            "All testing is equal, Test everything, Late testing is fine, No defects exist",
            "Only test critical features, Skip documentation, Test randomly",
            "Test only once, Never retest, Ignore context"
          ],
          correctAnswer: 0,
          explanation: "The seven principles are: 1) Testing shows presence of defects, 2) Exhaustive testing is impossible, 3) Early testing saves time and money, 4) Defect clustering, 5) Pesticide paradox, 6) Testing is context dependent, 7) Absence of errors fallacy.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q68",
          type: "shortanswer",
          question: "You're testing a healthcare app storing patient data. Create a HIPAA compliance checklist with 3 items.",
          acceptableAnswers: ["Data encryption, Access controls, Audit logs", "Encryption, Authentication, Logging", "Security, Privacy, Audit trail"],
          keywords: ["encryption", "access", "audit", "security", "authentication"],
          minKeywords: 2,
          explanation: "HIPAA checklist: 1) Data encryption (AES-256 at rest, TLS in transit), 2) Access controls (role-based, MFA), 3) Audit logs (who accessed what when), 4) Data backup and recovery, 5) PHI transmission security.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q69",
          type: "mcq",
          question: "Design a security testing strategy for online banking. What should be included?",
          options: [
            "Only penetration testing",
            "Penetration testing, vulnerability scanning, encryption verification, PCI DSS compliance, SOX compliance",
            "Just use HTTPS",
            "No testing needed"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive strategy: Penetration testing (quarterly), vulnerability scanning, encryption verification (AES-256, TLS 1.3), PCI DSS compliance (if handling cards), SOX compliance (financial reporting), session management, authentication testing.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q70",
          type: "mcq",
          question: "You find patient data transmitted over HTTP (unencrypted) in a healthcare app. What should you do?",
          options: [
            "Ignore it",
            "Log as P0 Critical, stop release, escalate to security team, document HIPAA violation",
            "Log as low priority",
            "Fix it later"
          ],
          correctAnswer: 1,
          explanation: "Immediate actions: 1) Log as P0 Critical blocker, 2) Stop release immediately, 3) Escalate to security team and management, 4) Document as HIPAA violation, 5) Require TLS 1.3 implementation, 6) Conduct security audit.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q71",
          type: "shortanswer",
          question: "Create a test plan for an automotive braking system (ASIL D). What are 3 key testing requirements?",
          acceptableAnswers: ["Hardware-in-loop testing, Fault injection, Safety analysis", "HIL testing, Failure mode testing, Safety validation", "Simulation, Fault testing, Safety verification"],
          keywords: ["hardware", "fault", "safety", "simulation", "injection"],
          minKeywords: 2,
          explanation: "ASIL D testing: 1) Hardware-in-loop (HIL) testing, 2) Fault injection testing (simulate failures), 3) Safety analysis (FMEA, FTA), 4) Requirements traceability (100%), 5) Code coverage (MC/DC 100%), 6) Independent verification.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q72",
          type: "mcq",
          question: "Compare testing requirements for healthcare vs financial services. What's a key difference?",
          options: [
            "They are identical",
            "Healthcare focuses on patient safety and PHI protection, Financial focuses on transaction accuracy and fraud prevention",
            "Healthcare is easier",
            "No difference"
          ],
          correctAnswer: 1,
          explanation: "Healthcare: Patient safety (FDA), PHI protection (HIPAA), medical device standards (IEC 62304). Financial: Transaction accuracy, fraud prevention, PCI DSS, SOX compliance, penetration testing. Both require high security and audit trails.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q73",
          type: "mcq",
          question: "Design a performance testing strategy for an e-commerce site expecting Black Friday traffic (10x normal load).",
          options: [
            "No testing needed",
            "Load testing (10x normal), stress testing (15x), spike testing, endurance testing, CDN testing",
            "Just hope for the best",
            "Only test normal load"
          ],
          correctAnswer: 1,
          explanation: "Black Friday strategy: 1) Load testing (10x normal = 100K concurrent users), 2) Stress testing (15x to find breaking point), 3) Spike testing (sudden traffic surge), 4) Endurance testing (sustained load), 5) CDN performance, 6) Database optimization, 7) Auto-scaling validation.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q74",
          type: "shortanswer",
          question: "You're testing a mobile game. What are 3 key testing areas specific to gaming?",
          acceptableAnswers: ["Frame rate, Graphics rendering, Multiplayer", "Performance, Graphics, Network", "FPS, Rendering, Gameplay"],
          keywords: ["frame", "fps", "graphics", "performance", "multiplayer", "network"],
          minKeywords: 2,
          explanation: "Gaming-specific testing: 1) Frame rate (60 FPS target), 2) Graphics rendering (different devices, resolutions), 3) Multiplayer/network (latency <100ms), 4) Battery consumption, 5) In-app purchases, 6) Game balance, 7) Save/load functionality, 8) Controller support.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q75",
          type: "shortanswer",
          question: "Design a CI/CD pipeline for a microservices application. List the 5 main stages.",
          acceptableAnswers: ["Build, Unit Test, Integration Test, Deploy, Smoke Test", "Commit, Build, Test, Deploy, Monitor"],
          keywords: ["build", "test", "deploy", "integration", "smoke"],
          minKeywords: 3,
          explanation: "Typical stages: 1) Code Commit, 2) Build & Unit Tests (10 min), 3) Integration Tests (20 min), 4) Deploy to Staging, 5) Smoke Tests, 6) Deploy to Production.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q76",
          type: "mcq",
          question: "Your regression suite takes 8 hours. How would you optimize it for CI/CD?",
          options: [
            "Run all tests sequentially",
            "Parallel execution, test categorization, selective testing, remove obsolete tests",
            "Skip testing",
            "Run tests manually"
          ],
          correctAnswer: 1,
          explanation: "Optimization strategies: parallel execution (4 agents = 75% reduction), test categorization (smoke first), selective testing (run only affected tests), remove obsolete/flaky tests.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q77",
          type: "shortanswer",
          question: "Create a Definition of Done for a user story. List 5 criteria.",
          acceptableAnswers: ["Code complete, Unit tests passed, Code reviewed, Functional tests passed, No critical defects", "Development done, Testing done, Review done, Documentation done, Acceptance criteria met"],
          keywords: ["code", "tests", "review", "defects", "acceptance"],
          minKeywords: 3,
          explanation: "DoD criteria: 1) Code complete and reviewed, 2) Unit tests passed (>80% coverage), 3) Functional tests passed, 4) No critical defects, 5) Acceptance criteria met, 6) Documentation updated.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q78",
          type: "mcq",
          question: "Explain how you would implement the Agile Testing Quadrants in a 2-week sprint.",
          options: [
            "Test everything at the end",
            "Q1 (unit tests) continuous, Q2 (functional) during development, Q3 (exploratory) mid-sprint, Q4 (performance) end of sprint",
            "Only Q1 and Q2",
            "Random testing"
          ],
          correctAnswer: 1,
          explanation: "Sprint testing: Q1 (unit tests) - continuous with TDD, Q2 (functional/BDD) - as features develop, Q3 (exploratory/usability) - mid to late sprint, Q4 (performance/security) - end of sprint.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q79",
          type: "mcq",
          question: "Compare Blue-Green deployment vs Canary release. When would you use Blue-Green?",
          options: [
            "For gradual rollout",
            "For instant rollback capability and zero-downtime deployment",
            "For testing in production",
            "Never use Blue-Green"
          ],
          correctAnswer: 1,
          explanation: "Use Blue-Green for: instant rollback, zero-downtime deployment, complete environment switch. Use Canary for: gradual rollout, risk mitigation, testing with real users.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q80",
          type: "mcq",
          question: "Your team has 5 developers and 1 QA. How would you implement whole team testing?",
          options: [
            "QA does all testing",
            "Developers write unit tests, QA writes integration/E2E tests, pair testing, shared DoD",
            "No testing needed",
            "Hire more QA"
          ],
          correctAnswer: 1,
          explanation: "Whole team approach: Developers write unit tests (Q1), QA guides test strategy and writes integration/E2E tests (Q2), pair testing sessions, shared Definition of Done, everyone reviews test results.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q81",
          type: "shortanswer",
          question: "Design a testing strategy for production. Name 3 techniques.",
          acceptableAnswers: ["Synthetic monitoring, Feature flags, A/B testing", "Canary release, Monitoring, Feature toggles", "Production monitoring, Canary, Feature flags"],
          keywords: ["monitoring", "canary", "feature flags", "synthetic", "A/B"],
          minKeywords: 2,
          explanation: "Production testing strategy: 1) Synthetic monitoring (simulate user journeys), 2) Feature flags (gradual rollout, instant disable), 3) Canary releases (1-5% users first), 4) A/B testing (compare versions), 5) Real-time monitoring and alerting.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q82",
          type: "mcq",
          question: "Compare TMMi and TPI NEXT. When would you choose TMMi?",
          options: [
            "For quick, targeted improvements",
            "For comprehensive, structured maturity progression with certification",
            "For small teams only",
            "Never use TMMi"
          ],
          correctAnswer: 1,
          explanation: "Choose TMMi for: comprehensive maturity model, certification goals, structured progression, large organizations. Choose TPI NEXT for: flexible improvements, specific area focus, no certification needed.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q83",
          type: "mcq",
          question: "What's the difference between ISTQB Test Analyst and Technical Test Analyst?",
          options: [
            "They are the same",
            "Test Analyst = black-box/business-facing, Technical Test Analyst = white-box/technology-facing",
            "Test Analyst is easier",
            "No difference"
          ],
          correctAnswer: 1,
          explanation: "Test Analyst focuses on black-box techniques, business requirements, and functional testing. Technical Test Analyst focuses on white-box techniques, code-level testing, and non-functional testing.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q84",
          type: "shortanswer",
          question: "Your company wants TMMi Level 3 certification. You're at Level 1. What's the first step?",
          acceptableAnswers: ["Gap assessment", "Current state assessment", "TMMi assessment", "Evaluate current processes"],
          keywords: ["assessment", "gap", "evaluate", "current"],
          minKeywords: 1,
          explanation: "First step: Conduct TMMi gap assessment to evaluate current state, identify gaps between Level 1 and Level 3, document findings, and create improvement roadmap.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q85",
          type: "mcq",
          question: "Explain the difference between the three ISO 29119 process levels.",
          options: [
            "All are the same",
            "Organizational (entire org policy), Management (project planning), Dynamic (test execution)",
            "Only one level exists",
            "They are independent"
          ],
          correctAnswer: 1,
          explanation: "Organizational (entire organization, high-level policy), Management (individual project, planning and control), Dynamic (test execution, design and report).",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q86",
          type: "mcq",
          question: "A project has 85% code coverage, 2.5 defects per 1000 LOC, 95% DRE. Using ISO 25010, what needs improvement?",
          options: [
            "Everything is perfect",
            "Reduce defect density to <2.0 per 1000 LOC",
            "Reduce code coverage",
            "Reduce DRE"
          ],
          correctAnswer: 1,
          explanation: "Maintainability (85% coverage) is good. Reliability needs improvement (defect density 2.5 vs target <2.0). Functional Suitability (95% DRE) is good. Focus on reducing defect density through code reviews and static analysis.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q87",
          type: "shortanswer",
          question: "In an ISO 29119-3 Test Incident Report for a critical payment bug, what priority should be assigned?",
          acceptableAnswers: ["Critical", "P0", "High", "Blocker"],
          keywords: ["critical", "p0", "high", "blocker"],
          minKeywords: 1,
          explanation: "Critical (P0) priority for payment processing failure. Include: Incident ID, Summary, Priority (Critical), Severity (High), Description, Steps to Reproduce, Expected vs Actual, Environment, Impact Analysis, Frequency, Workaround, Attachments, Assignment.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q88",
          type: "mcq",
          question: "Design a TMMi improvement initiative for 50 developers and 10 testers. What's the estimated timeline?",
          options: [
            "3-6 months",
            "6-12 months",
            "12-24 months",
            "36-48 months"
          ],
          correctAnswer: 2,
          explanation: "For a team of 60 people moving from Level 1 to Level 3: 12-24 months. Budget: $100K-200K (training, tools, consulting). Expected ROI: 20-30% improvement in defect detection, 15-20% reduction in testing time after 18 months.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q89",
          type: "mcq",
          question: "Scenario: Your manager asks 'Should we buy TestRail or use free tools?' What factors to consider?",
          options: [
            "Always buy paid tools",
            "Always use free tools",
            "Team size, budget, features needed, integrations, compliance, ROI",
            "Just pick randomly"
          ],
          correctAnswer: 2,
          explanation: "Consider: team size (small <5 = free OK, large >10 = paid worthwhile), budget, required features, integration needs, compliance requirements, and calculate ROI (time saved vs cost).",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day20_q90",
          type: "mcq",
          question: "Scenario: Your Slack channel is flooded with notifications. How to configure better?",
          options: [
            "Disable all notifications",
            "Create dedicated channels (#critical-alerts, #build-notifications), filter integrations, use threads",
            "Ignore Slack",
            "Send everything to one channel"
          ],
          correctAnswer: 1,
          explanation: "Solution: Create structured channels (#critical-alerts for P0/Blocker, #build-notifications for CI/CD), configure integration filters (only failures), use threads for discussions, and set appropriate notification levels.",
          difficulty: "hard",
          points: 5,
          fullModeOnly: true
        }
      ]
    }
  ]
};
