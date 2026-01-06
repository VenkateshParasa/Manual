export default {
  title: "Day 10: Mobile Application Testing",
  description: "Mobile App Types, iOS vs Android, Gestures, Permissions, Battery & Performance",
  passingScore: 70,
  timeLimit: 60,
  modes: {
    quick: {
      timeLimit: 20,
      questionCount: 20,
      description: "Quick assessment covering essential mobile testing concepts"
    },
    full: {
      timeLimit: 60,
      questionCount: 44,
      description: "Comprehensive assessment covering all mobile testing topics"
    }
  },
  sections: [
    {
      title: "Mobile App Types & Fundamentals",
      questions: [
        {
          id: "day10_q1",
          type: "mcq",
          question: "Which mobile app type offers the BEST performance?",
          options: [
            "Web App",
            "Hybrid App",
            "Native App",
            "Progressive Web App"
          ],
          correctAnswer: 2,
          explanation: "Native apps have best performance with direct access to hardware and platform-specific optimizations.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day10_q2",
          type: "mcq",
          question: "Which technology is commonly used for Hybrid app development?",
          options: [
            "Swift",
            "Kotlin",
            "React Native",
            "Objective-C"
          ],
          correctAnswer: 2,
          explanation: "React Native, Flutter, and Ionic are popular hybrid/cross-platform frameworks. Swift and Kotlin are for native development.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day10_q3",
          type: "mcq",
          question: "What is the PRIMARY advantage of Web Apps over Native Apps?",
          options: [
            "Better performance",
            "No installation required",
            "Full device feature access",
            "App store presence"
          ],
          correctAnswer: 1,
          explanation: "Web apps are accessible via browser without installation. However, they have limited device feature access and lower performance.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "iOS vs Android",
      questions: [
        {
          id: "day10_q4",
          type: "mcq",
          question: "Which platform has significantly MORE device fragmentation?",
          options: [
            "iOS",
            "Android",
            "Both equal",
            "Neither has fragmentation"
          ],
          correctAnswer: 1,
          explanation: "Android has 20,000+ device models with varying screen sizes, OS versions, and manufacturers. iOS has ~15 active models.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day10_q5",
          type: "mcq",
          question: "What is the correct iOS navigation back gesture?",
          options: [
            "Swipe from right edge",
            "Swipe from left edge",
            "Swipe from bottom",
            "Three-finger swipe"
          ],
          correctAnswer: 1,
          explanation: "iOS uses swipe from left edge for back navigation. Android uses back button or swipe from left/right edges.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day10_q6",
          type: "mcq",
          question: "Which design language is used for Android?",
          options: [
            "Human Interface Guidelines",
            "Fluent Design",
            "Material Design",
            "Flat Design"
          ],
          correctAnswer: 2,
          explanation: "Material Design is Google's design language for Android. iOS uses Human Interface Guidelines (HIG).",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day10_q7",
          type: "mcq",
          question: "What is the Android equivalent of iOS TestFlight?",
          options: [
            "Google Play Beta",
            "Internal Testing",
            "Firebase App Distribution",
            "APK Direct Distribution"
          ],
          correctAnswer: 1,
          explanation: "Internal Testing track in Google Play Console is similar to TestFlight for beta distribution.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Mobile Testing Challenges",
      questions: [
        {
          id: "day10_q8",
          type: "mcq",
          question: "What is the recommended MINIMUM touch target size for mobile?",
          options: [
            "32×32 points",
            "44×44 points",
            "64×64 points",
            "80×80 points"
          ],
          correctAnswer: 1,
          explanation: "44×44 points (iOS) or 48×48 dp (Android) is the minimum recommended touch target size for easy tapping.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day10_q9",
          type: "mcq",
          question: "Which network condition should be tested for mobile apps?",
          options: [
            "WiFi only",
            "4G only",
            "All network types including offline",
            "5G only"
          ],
          correctAnswer: 2,
          explanation: "Test all network types: WiFi, 4G, 3G, 2G, offline mode, and transitions between networks.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day10_q10",
          type: "mcq",
          question: "What happens during an \"interruption\" in mobile testing?",
          options: [
            "App crashes",
            "Network disconnects",
            "External event disrupts app (call, notification)",
            "Battery dies"
          ],
          correctAnswer: 2,
          explanation: "Interruptions are external events like incoming calls, notifications, alarms that temporarily suspend the app.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "Gestures & Interactions",
      questions: [
        {
          id: "day10_q11",
          type: "mcq",
          question: "What gesture is typically used for \"pull-to-refresh\"?",
          options: [
            "Swipe up from bottom",
            "Swipe down from top",
            "Double tap",
            "Pinch out"
          ],
          correctAnswer: 1,
          explanation: "Pull-to-refresh is triggered by swiping down from the top of scrollable content.",
          difficulty: "easy",
          points: 2
        },
        {
          id: "day10_q12",
          type: "mcq",
          question: "Which gesture involves two fingers moving apart?",
          options: [
            "Pinch to zoom out",
            "Pinch to zoom in",
            "Rotate",
            "Swipe"
          ],
          correctAnswer: 1,
          explanation: "Pinch out (fingers moving apart) = zoom in. Pinch in (fingers moving together) = zoom out.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "Permissions & Security",
      questions: [
        {
          id: "day10_q13",
          type: "mcq",
          question: "What does \"Just-in-Time\" permission request mean?",
          options: [
            "Permissions requested at installation",
            "Permissions requested when feature is used",
            "Permissions requested at launch",
            "Permissions requested hourly"
          ],
          correctAnswer: 1,
          explanation: "Just-in-Time permissions are requested when the user actually tries to use a feature requiring that permission.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day10_q14",
          type: "mcq",
          question: "What is the purpose of the \"HttpOnly\" flag in cookies?",
          options: [
            "Enable HTTP connections",
            "Prevent JavaScript access",
            "Enable HTTPS only",
            "Store HTTP methods"
          ],
          correctAnswer: 1,
          explanation: "HttpOnly flag prevents JavaScript from accessing cookies, protecting against XSS attacks.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day10_q15",
          type: "mcq",
          question: "On iOS, if a user denies camera permission, what should the app do?",
          options: [
            "Show system alert again",
            "Force the user to grant permission",
            "Show message with \"Go to Settings\" option",
            "Crash with error"
          ],
          correctAnswer: 2,
          explanation: "After denial, show user-friendly message explaining why permission is needed and provide link to Settings.",
          difficulty: "medium",
          points: 2
        }
      ]
    },
    {
      title: "Battery & Performance",
      questions: [
        {
          id: "day10_q16",
          type: "mcq",
          question: "What is considered acceptable background battery drain per hour?",
          options: [
            "< 1%",
            "< 5%",
            "< 10%",
            "< 20%"
          ],
          correctAnswer: 0,
          explanation: "Less than 1% battery drain per hour in background is acceptable for most apps.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day10_q17",
          type: "mcq",
          question: "Which feature typically consumes the MOST battery?",
          options: [
            "Reading text",
            "GPS location tracking",
            "Playing audio",
            "Viewing static images"
          ],
          correctAnswer: 1,
          explanation: "GPS location tracking is most battery-intensive, followed by camera, video, and network operations.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "Testing Tools & Approaches",
      questions: [
        {
          id: "day10_q18",
          type: "mcq",
          question: "What is the PRIMARY limitation of using emulators instead of real devices?",
          options: [
            "Cannot test UI",
            "Cannot test functionality",
            "Hardware-specific issues may be missed",
            "Cannot install apps"
          ],
          correctAnswer: 2,
          explanation: "Emulators miss hardware-specific issues: camera quality, GPS accuracy, touch sensitivity, battery behavior, network conditions.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day10_q19",
          type: "mcq",
          question: "What is the recommended testing priority for a small team with 3 devices?",
          options: [
            "Three latest iPhones",
            "Latest iPhone, Latest Samsung, One older device",
            "Three oldest devices",
            "Only tablets"
          ],
          correctAnswer: 1,
          explanation: "Diverse coverage is best: latest popular devices (iPhone, Samsung) plus one older device for backward compatibility.",
          difficulty: "medium",
          points: 2
        },
        {
          id: "day10_q20",
          type: "mcq",
          question: "Which cloud testing service is mentioned for mobile testing?",
          options: [
            "AWS Lambda",
            "BrowserStack",
            "GitHub Actions",
            "Jenkins"
          ],
          correctAnswer: 1,
          explanation: "BrowserStack provides cloud-based mobile device testing. Other options: Firebase Test Lab, Sauce Labs, LambdaTest.",
          difficulty: "easy",
          points: 2
        }
      ]
    },
    {
      title: "True/False Questions",
      questions: [
        {
          id: "day10_q21",
          type: "truefalse",
          question: "Native apps have a single codebase that works on both iOS and Android.",
          correctAnswer: false,
          explanation: "Native apps require separate codebases for each platform (Swift/Objective-C for iOS, Kotlin/Java for Android).",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q22",
          type: "truefalse",
          question: "iOS has less device fragmentation compared to Android.",
          correctAnswer: true,
          explanation: "iOS has ~15 active device models vs 20,000+ for Android, making iOS testing more manageable.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q23",
          type: "truefalse",
          question: "Hybrid apps are distributed through app stores.",
          correctAnswer: true,
          explanation: "Hybrid apps are packaged and distributed through App Store and Play Store like native apps.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q24",
          type: "truefalse",
          question: "Android allows installation from unknown sources (APK files).",
          correctAnswer: true,
          explanation: "Android allows sideloading APK files from unknown sources (with user permission). iOS requires jailbreaking for similar functionality.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q25",
          type: "truefalse",
          question: "iOS uses a bottom navigation drawer as the primary navigation pattern.",
          correctAnswer: false,
          explanation: "iOS uses bottom tab bar. Android uses navigation drawer (hamburger menu) as primary pattern.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q26",
          type: "truefalse",
          question: "Material Design is specific to iOS applications.",
          correctAnswer: false,
          explanation: "Material Design is Google's design language for Android. iOS uses Human Interface Guidelines (HIG).",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q27",
          type: "truefalse",
          question: "Mobile apps should be tested on both portrait and landscape orientations.",
          correctAnswer: true,
          explanation: "Both orientations must be tested to ensure proper layout adaptation and state preservation.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q28",
          type: "truefalse",
          question: "A single tap gesture should provide visual feedback within 100ms.",
          correctAnswer: true,
          explanation: "Visual feedback within 100ms is expected for responsive UI. Delays feel sluggish to users.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q29",
          type: "truefalse",
          question: "Permission requests should explain WHY the permission is needed.",
          correctAnswer: true,
          explanation: "Permission rationale must explain why the permission is needed to increase user trust and approval rate.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q30",
          type: "truefalse",
          question: "Offline mode testing is only necessary for web apps.",
          correctAnswer: false,
          explanation: "Mobile apps also need offline mode testing to ensure graceful degradation when network is unavailable.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q31",
          type: "truefalse",
          question: "Battery consumption should be tested in both foreground and background states.",
          correctAnswer: true,
          explanation: "Battery drain must be tested in both states as background operations can significantly impact battery life.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q32",
          type: "truefalse",
          question: "3G network conditions should never be tested as it's obsolete.",
          correctAnswer: false,
          explanation: "3G is still used in many regions and should be tested. Test all network types: WiFi, 4G, 3G, 2G, offline.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q33",
          type: "truefalse",
          question: "Low storage conditions can cause app performance issues.",
          correctAnswer: true,
          explanation: "Low storage affects app performance, caching, and functionality. Test app behavior when storage is nearly full.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q34",
          type: "truefalse",
          question: "The minimum supported Android version is always Android 14.",
          correctAnswer: false,
          explanation: "Minimum version varies by app requirements. Many apps support Android 8.0+ or lower for wider reach.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q35",
          type: "truefalse",
          question: "Touch targets smaller than 44×44 points are difficult to tap accurately.",
          correctAnswer: true,
          explanation: "44×44 points (iOS) / 48×48 dp (Android) minimum ensures easy tapping for users with varying dexterity.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q36",
          type: "truefalse",
          question: "App state should be preserved after an incoming phone call.",
          correctAnswer: true,
          explanation: "State preservation during interruptions (calls, notifications) is critical for good user experience.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q37",
          type: "truefalse",
          question: "iOS automatically handles dark mode for all apps without developer effort.",
          correctAnswer: false,
          explanation: "Developers must implement dark mode support. iOS provides APIs but doesn't automatically convert apps.",
          difficulty: "medium",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q38",
          type: "truefalse",
          question: "Real device testing is more reliable than emulator testing for critical scenarios.",
          correctAnswer: true,
          explanation: "Real devices reveal hardware-specific issues, actual performance, and real-world conditions that emulators miss.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q39",
          type: "truefalse",
          question: "Cache should never be clearable by users.",
          correctAnswer: false,
          explanation: "Users should be able to clear cache to free storage space. Provide clear cache option in settings.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        },
        {
          id: "day10_q40",
          type: "truefalse",
          question: "An app should function gracefully even when permissions are denied.",
          correctAnswer: true,
          explanation: "Apps must handle denied permissions gracefully, providing alternative functionality or clear explanations.",
          difficulty: "easy",
          points: 1,
          fullModeOnly: true
        }
      ]
    },
    {
      title: "Scenario-Based Questions",
      questions: [
        {
          id: "day10_q41",
          type: "shortanswer",
          question: "Scenario: You're testing a mobile banking app. When filling out a loan application form with 10 fields, you rotate the device from portrait to landscape. After rotation, all the data you entered is lost and the form is empty. What is the primary issue here?",
          acceptableAnswers: ["Data loss during orientation change", "State not preserved", "Orientation change bug", "No state preservation", "Form data lost"],
          keywords: ["data", "state", "preserved", "orientation", "lost"],
          minKeywords: 2,
          explanation: "The app is not preserving state during orientation changes. All form data, focus position, and scroll position should be preserved when rotating the device.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day10_q42",
          type: "shortanswer",
          question: "Scenario: You're testing a photo editing app. When a user tries to edit a photo, the app requests camera permission. The user denies the permission. The app shows an error \"Error 403\" and crashes. Identify TWO problems with this behavior.",
          acceptableAnswers: ["Cryptic error message", "App crashes", "No graceful handling", "Poor error handling", "Not user-friendly"],
          keywords: ["error", "crash", "message", "handling", "graceful"],
          minKeywords: 2,
          explanation: "Two problems: 1) Cryptic error message (\"Error 403\" not user-friendly), 2) App crashes instead of handling gracefully. Should show clear message with \"Go to Settings\" option and allow using other features.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day10_q43",
          type: "shortanswer",
          question: "Scenario: You're testing an e-commerce app. A user adds 5 items to their cart and proceeds to checkout. While entering payment details, the network connection is lost (airplane mode activated). The app freezes and becomes unresponsive. What is the issue and how should it be handled?",
          acceptableAnswers: ["No network error handling", "App doesn't handle network loss", "Should detect network loss", "Should save data locally", "Should show error message"],
          keywords: ["network", "error", "handling", "detect", "save", "message"],
          minKeywords: 2,
          explanation: "The app doesn't handle network interruption during critical operations. Should: 1) Detect network loss immediately, 2) Show clear \"No connection\" message, 3) Save entered data locally, 4) Prevent submission, 5) Allow retry when connection restored.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        },
        {
          id: "day10_q44",
          type: "shortanswer",
          question: "Scenario: Users complain that your social media app drains their battery excessively. You check the device battery settings and find the app has consumed 45% battery over 3 hours with minimal active use (app was in background most of the time). What is likely causing the excessive battery drain?",
          acceptableAnswers: ["Background location tracking", "GPS tracking", "Continuous data syncing", "Background operations", "Wake locks", "Inefficient polling"],
          keywords: ["background", "location", "GPS", "tracking", "sync", "polling", "wake"],
          minKeywords: 2,
          explanation: "Likely causes: Background location tracking (GPS), continuous data syncing, wake locks preventing sleep, inefficient API polling, or memory leaks. Acceptable background drain is <1% per hour.",
          difficulty: "medium",
          points: 5,
          fullModeOnly: true
        }
      ]
    }
  ]
};
