# Day 10 Assessment: Mobile Application Testing

**Duration:** 60 minutes
**Total Points:** 100
**Passing Score:** 70%

---

## Section A: Multiple Choice Questions (40 points)
*Choose the best answer for each question (2 points each)*

### Mobile App Types & Fundamentals

1. Which mobile app type offers the BEST performance?
   - A) Web App
   - B) Hybrid App
   - C) Native App
   - D) Progressive Web App

2. Which technology is commonly used for Hybrid app development?
   - A) Swift
   - B) Kotlin
   - C) React Native
   - D) Objective-C

3. What is the PRIMARY advantage of Web Apps over Native Apps?
   - A) Better performance
   - B) No installation required
   - C) Full device feature access
   - D) App store presence

### iOS vs Android

4. Which platform has significantly MORE device fragmentation?
   - A) iOS
   - B) Android
   - C) Both equal
   - D) Neither has fragmentation

5. What is the correct iOS navigation back gesture?
   - A) Swipe from right edge
   - B) Swipe from left edge
   - C) Swipe from bottom
   - D) Three-finger swipe

6. Which design language is used for Android?
   - A) Human Interface Guidelines
   - B) Fluent Design
   - C) Material Design
   - D) Flat Design

7. What is the Android equivalent of iOS TestFlight?
   - A) Google Play Beta
   - B) Internal Testing
   - C) Firebase App Distribution
   - D) APK Direct Distribution

### Mobile Testing Challenges

8. What is the recommended MINIMUM touch target size for mobile?
   - A) 32×32 points
   - B) 44×44 points
   - C) 64×64 points
   - D) 80×80 points

9. Which network condition should be tested for mobile apps?
   - A) WiFi only
   - B) 4G only
   - C) All network types including offline
   - D) 5G only

10. What happens during an "interruption" in mobile testing?
    - A) App crashes
    - B) Network disconnects
    - C) External event disrupts app (call, notification)
    - D) Battery dies

### Gestures & Interactions

11. What gesture is typically used for "pull-to-refresh"?
    - A) Swipe up from bottom
    - B) Swipe down from top
    - C) Double tap
    - D) Pinch out

12. Which gesture involves two fingers moving apart?
    - A) Pinch to zoom out
    - B) Pinch to zoom in
    - C) Rotate
    - D) Swipe

### Permissions & Security

13. What does "Just-in-Time" permission request mean?
    - A) Permissions requested at installation
    - B) Permissions requested when feature is used
    - C) Permissions requested at launch
    - D) Permissions requested hourly

14. What is the purpose of the "HttpOnly" flag in cookies?
    - A) Enable HTTP connections
    - B) Prevent JavaScript access
    - C) Enable HTTPS only
    - D) Store HTTP methods

15. On iOS, if a user denies camera permission, what should the app do?
    - A) Show system alert again
    - B) Force the user to grant permission
    - C) Show message with "Go to Settings" option
    - D) Crash with error

### Battery & Performance

16. What is considered acceptable background battery drain per hour?
    - A) < 1%
    - B) < 5%
    - C) < 10%
    - D) < 20%

17. Which feature typically consumes the MOST battery?
    - A) Reading text
    - B) GPS location tracking
    - C) Playing audio
    - D) Viewing static images

### Testing Tools & Approaches

18. What is the PRIMARY limitation of using emulators instead of real devices?
    - A) Cannot test UI
    - B) Cannot test functionality
    - C) Hardware-specific issues may be missed
    - D) Cannot install apps

19. What is the recommended testing priority for a small team with 3 devices?
    - A) Three latest iPhones
    - B) Latest iPhone, Latest Samsung, One older device
    - C) Three oldest devices
    - D) Only tablets

20. Which cloud testing service is mentioned for mobile testing?
    - A) AWS Lambda
    - B) BrowserStack
    - C) GitHub Actions
    - D) Jenkins

---

## Section B: True/False Questions (20 points)
*Mark each statement as True (T) or False (F) (1 point each)*

21. Native apps have a single codebase that works on both iOS and Android. ___
22. iOS has less device fragmentation compared to Android. ___
23. Hybrid apps are distributed through app stores. ___
24. Android allows installation from unknown sources (APK files). ___
25. iOS uses a bottom navigation drawer as the primary navigation pattern. ___
26. Material Design is specific to iOS applications. ___
27. Mobile apps should be tested on both portrait and landscape orientations. ___
28. A single tap gesture should provide visual feedback within 100ms. ___
29. Permission requests should explain WHY the permission is needed. ___
30. Offline mode testing is only necessary for web apps. ___
31. Battery consumption should be tested in both foreground and background states. ___
32. 3G network conditions should never be tested as it's obsolete. ___
33. Low storage conditions can cause app performance issues. ___
34. The minimum supported Android version is always Android 14. ___
35. Touch targets smaller than 44×44 points are difficult to tap accurately. ___
36. App state should be preserved after an incoming phone call. ___
37. iOS automatically handles dark mode for all apps without developer effort. ___
38. Real device testing is more reliable than emulator testing for critical scenarios. ___
39. Cache should never be clearable by users. ___
40. An app should function gracefully even when permissions are denied. ___

---

## Section C: Scenario-Based Questions (20 points)
*Provide detailed answers (5 points each)*

### Scenario 1: Orientation Change Bug
You're testing a mobile banking app. When filling out a loan application form with 10 fields, you rotate the device from portrait to landscape. After rotation, all the data you entered is lost and the form is empty.

**Questions:**
a) What is the primary issue here? (1 point)
b) What should happen during orientation changes? (2 points)
c) How would you test this scenario systematically? (2 points)

---

### Scenario 2: Permission Denial Flow
You're testing a photo editing app. When a user tries to edit a photo, the app requests camera permission. The user denies the permission. The app shows an error "Error 403" and crashes.

**Questions:**
a) Identify TWO problems with this behavior. (2 points)
b) What is the correct way to handle denied permissions? (2 points)
c) What test cases would you create for permission testing? (1 point)

---

### Scenario 3: Network Interruption
You're testing an e-commerce app. A user adds 5 items to their cart and proceeds to checkout. While entering payment details, the network connection is lost (airplane mode activated). The app freezes and becomes unresponsive.

**Questions:**
a) What is the issue? (1 point)
b) How should the app handle network loss during critical operations? (2 points)
c) What network scenarios should be tested? (2 points)

---

### Scenario 4: Battery Drain Investigation
Users complain that your social media app drains their battery excessively. You check the device battery settings and find the app has consumed 45% battery over 3 hours with minimal active use (app was in background most of the time).

**Questions:**
a) What is likely causing the excessive battery drain? (2 points)
b) How would you investigate and test battery consumption? (2 points)
c) What is acceptable battery usage for background operations? (1 point)

---

## Section D: Practical Exercise (20 points)
*Complete the following exercises*

### Exercise 1: Mobile Test Cases (10 points)
You're testing a fitness tracking app that uses GPS location, camera (to scan barcodes), and allows users to create workout plans.

Write 5 mobile-specific test cases covering:
- Permission handling
- Gesture interactions
- Orientation changes
- Interruptions
- Battery/Performance considerations

**Format:**
```
TC-ID: [Test case ID]
Title: [Test case title]
Precondition: [If any]
Steps: [What to do]
Expected Result: [What should happen]
```

---

### Exercise 2: Device Matrix Planning (10 points)
Your team has a budget to test on 5 physical devices. The target audience is:
- 60% iOS users (mostly iPhone 13, 14, and 15)
- 40% Android users (Samsung, Google Pixel, various models)
- Users across USA, Europe, and Asia

**Tasks:**
a) Select 5 specific devices for testing and justify your selection (6 points)
b) Create a priority matrix showing which tests run on which devices (2 points)
c) Explain how you would handle testing on devices you don't have (2 points)

---

## BONUS Section: Advanced Questions (+10 points)

### Bonus 1: iOS vs Android Testing Strategy (5 points)
Compare the testing approach for iOS vs Android in terms of:
- Device fragmentation impact
- OS version strategy
- Platform-specific features to test
- Testing tools and techniques

### Bonus 2: Mobile Testing Tools (5 points)
You need to recommend mobile testing tools for your team. Research and compare:
- BrowserStack vs Firebase Test Lab
- Real device testing vs Cloud testing
- When to use emulators/simulators vs real devices
- Cost-benefit analysis for a startup with 3 testers

---

## Answer Key

### Section A: Multiple Choice
1. C (Native apps have best performance - direct access to hardware)
2. C (React Native, Flutter, Ionic are hybrid frameworks)
3. B (No installation required - accessible via browser)
4. B (Android has 20,000+ device models, iOS ~15)
5. B (Swipe from left edge for iOS back navigation)
6. C (Material Design is Google's design language for Android)
7. B (Internal Testing track in Google Play Console)
8. B (44×44 points iOS, 48×48 dp Android minimum)
9. C (Must test all network types including offline mode)
10. C (Interruptions are external events like calls, notifications)
11. B (Swipe down from top triggers pull-to-refresh)
12. B (Pinch out = zoom in, pinch in = zoom out)
13. B (Permissions requested when feature is actually used)
14. B (HttpOnly prevents JavaScript from accessing cookies)
15. C (Show message explaining and link to Settings)
16. A (< 1% per hour is acceptable background drain)
17. B (GPS location tracking is most battery-intensive)
18. C (Hardware issues, camera accuracy, GPS not real on emulators)
19. B (Diverse coverage: latest popular devices + older device)
20. B (BrowserStack is a cloud-based mobile testing service)

### Section B: True/False
21. F (Native apps require separate codebases for each platform)
22. T (iOS has ~15 active models vs 20,000+ Android)
23. T (Hybrid apps are distributed through App Store and Play Store)
24. T (Android allows APK installation from unknown sources)
25. F (iOS uses bottom tab bar, Android uses navigation drawer)
26. F (Material Design is for Android, iOS uses Human Interface Guidelines)
27. T (Both orientations must be tested)
28. T (< 100ms feedback is expected for responsive UI)
29. T (Permission rationale must explain why it's needed)
30. F (Mobile apps also need offline mode testing)
31. T (Battery drain must be tested in both states)
32. F (3G is still used in many regions and should be tested)
33. T (Low storage can affect performance and functionality)
34. F (Minimum version varies by app, often Android 8.0+ or lower)
35. T (44×44 points minimum ensures tappability)
36. T (State preservation during interruptions is critical)
37. F (Developers must implement dark mode support)
38. T (Real devices reveal hardware-specific issues)
39. F (Users should be able to clear cache to free storage)
40. T (Graceful degradation when permissions denied)

### Section C: Scenario Answers

**Scenario 1:**
a) Data loss during orientation change - app not preserving state
b) Should preserve: All form data, focus position, scroll position, any temporary state
c) Test systematically: 1) Fill partial form → rotate → verify data preserved, 2) Fill complete form → rotate → verify all fields preserved, 3) Rotate multiple times rapidly → verify no data loss, 4) Test during various app states (loading, error, success)

**Scenario 2:**
a) Two problems: 1) Cryptic error message ("Error 403" not user-friendly), 2) App crashes instead of handling gracefully
b) Correct handling: 1) Show user-friendly message: "Camera access needed to edit photos", 2) Provide "Go to Settings" button with instructions, 3) Allow user to continue using other features, 4) Never crash
c) Test cases: Grant permission, Deny permission, Revoke previously granted permission, Deny then request again, Test app functionality without permission

**Scenario 3:**
a) App doesn't handle network interruption during critical transaction
b) Should handle by: 1) Detect network loss immediately, 2) Show clear "No connection" message, 3) Save entered data locally, 4) Prevent submission, 5) Queue transaction OR allow retry when connection restored, 6) Never leave transaction in unknown state
c) Network scenarios: WiFi, 4G, 3G, Offline mode, WiFi to cellular transition, Connection loss during operation, Intermittent connection, Slow network, High latency

**Scenario 4:**
a) Likely causes: Background location tracking (GPS), Continuous data syncing, Wake locks preventing sleep, Inefficient API polling, Memory leaks
b) Investigation: 1) Check Settings → Battery → App usage breakdown, 2) Monitor battery usage over time with app in background, 3) Test with location services disabled, 4) Test with background app refresh disabled, 5) Use profiling tools (Xcode Instruments, Android Profiler)
c) Acceptable: < 1% battery per hour in background for normal apps

### Section D: Practical Answers
*Answers will vary but should demonstrate understanding of:*
- Mobile-specific testing scenarios
- Permission request timing and handling
- Gesture interaction patterns
- Device and network considerations
- Proper test case structure and prioritization

**Exercise 1 Sample Test Cases:**
```
TC-MOBILE-001: GPS Permission Request
Precondition: Fresh install, location permission not granted
Steps:
1. Open app
2. Tap "Start Workout"
3. Observe permission dialog
Expected Result:
- Permission dialog appears with clear message
- Options: "Allow While Using", "Allow Once", "Don't Allow"
- User choice respected
```

**Exercise 2 Sample Device Selection:**
1. iPhone 14 (iOS 18) - Most popular current iPhone
2. iPhone SE (iOS 17) - Small screen, older users
3. Samsung Galaxy S23 (Android 14) - Most popular Android
4. Google Pixel 7 (Android 14) - Stock Android
5. Samsung Galaxy A Series (Android 12) - Budget device, older OS

Priority Matrix:
- P0 Daily: iPhone 14, Galaxy S23
- P1 Weekly: iPhone SE, Pixel 7
- P2 Pre-Release: Galaxy A Series

Devices not owned: Use cloud testing (BrowserStack, Firebase Test Lab)

---

**Scoring Guide:**
- 90-100: Excellent - Strong understanding of mobile testing
- 80-89: Very Good - Good grasp of concepts, minor gaps
- 70-79: Good - Adequate understanding, needs improvement in some areas
- 60-69: Satisfactory - Basic understanding, significant gaps
- Below 60: Needs Improvement - Review material and retake

**End of Assessment**
