# Day 10: Mobile Application Testing
## Comprehensive Study Guide

---

## Table of Contents
1. [Mobile Testing Fundamentals](#mobile-testing-fundamentals)
2. [iOS vs Android Testing Differences](#ios-vs-android-testing-differences)
3. [Functional Mobile Testing](#functional-mobile-testing)
4. [Mobile-Specific Testing](#mobile-specific-testing)
5. [Device Compatibility Testing](#device-compatibility-testing)
6. [Practical Exercises](#practical-exercises)
7. [Assessment Questions](#assessment-questions)

---

## Mobile Testing Fundamentals

### 1.1 Mobile App Types

**Three Types of Mobile Applications:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE APP TYPES COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. NATIVE APPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Built specifically for one platform using platform's native language

Technologies:
- iOS: Swift, Objective-C
- Android: Kotlin, Java

Distribution:
- iOS: App Store
- Android: Google Play Store

Examples:
- Instagram (native iOS and Android versions)
- WhatsApp
- Apple Music
- Google Maps

Characteristics:
✓ Best performance
✓ Full access to device features
✓ Platform-specific UI/UX
✓ Works offline
✓ Listed in app stores
✗ Separate codebase for each platform
✗ Higher development cost
✗ Longer development time

Testing Complexity: HIGH
- Different codebases
- Platform-specific bugs
- Must test on each platform separately

2. HYBRID APPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Web applications wrapped in native container

Technologies:
- React Native
- Flutter
- Ionic
- Xamarin

Distribution:
- Available in app stores
- Single codebase for multiple platforms

Examples:
- Uber
- Airbnb
- Microsoft Teams
- Discord

Characteristics:
✓ Single codebase (write once, run anywhere)
✓ Faster development
✓ Lower cost
✓ Access to device features (through plugins)
✓ Listed in app stores
⚠ Performance slightly lower than native
⚠ May not feel "native"
✗ Dependent on framework

Testing Complexity: MEDIUM
- One codebase but multiple platforms
- Platform-specific rendering issues
- Framework-specific bugs

3. WEB APPS (MOBILE WEB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Websites accessed through mobile browser

Technologies:
- HTML5
- CSS3
- JavaScript
- Responsive frameworks (Bootstrap, etc.)

Distribution:
- No app store
- Accessed via browser URL

Examples:
- Mobile Gmail (m.gmail.com)
- Mobile Twitter (mobile.twitter.com)
- Mobile LinkedIn
- Most news websites

Characteristics:
✓ No installation required
✓ No app store approval
✓ Instant updates
✓ Cross-platform by default
✓ Lower development cost
✗ Requires internet connection
✗ Limited device feature access
✗ Lower performance
✗ No app store presence
✗ Less engaging (no push notifications by default)

Testing Complexity: MEDIUM
- Browser compatibility testing
- Responsive design testing
- Network dependency

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPARISON MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌────────────────────┬─────────┬─────────┬─────────┐
│ Aspect             │ Native  │ Hybrid  │ Web     │
├────────────────────┼─────────┼─────────┼─────────┤
│ Performance        │ Best    │ Good    │ Average │
│ Development Cost   │ High    │ Medium  │ Low     │
│ Development Speed  │ Slow    │ Fast    │ Fastest │
│ Device Features    │ Full    │ Most    │ Limited │
│ Offline Support    │ Full    │ Good    │ Limited │
│ User Experience    │ Best    │ Good    │ Average │
│ App Store Presence │ Yes     │ Yes     │ No      │
│ Updates            │ Store   │ Store   │ Instant │
│ Internet Required  │ No      │ Partial │ Yes     │
└────────────────────┴─────────┴─────────┴─────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**How to Identify App Type as a Tester:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDENTIFYING APP TYPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NATIVE APP Indicators:
✓ Downloaded from app store
✓ Platform-specific UI elements (iOS: bottom tab bar, Android: bottom nav drawer)
✓ Smooth animations and transitions
✓ Works fully offline
✓ Fast response to gestures
✓ Device back button follows platform conventions

HYBRID APP Indicators:
✓ Downloaded from app store
⚠ UI may not feel entirely native
⚠ Slight delay in animations
⚠ Webview-like rendering in places
✓ Works mostly offline
⚠ May have cross-platform UI (same on iOS and Android)

WEB APP Indicators:
✓ Opens in browser (Safari, Chrome, etc.)
✓ URL in address bar
✓ Browser controls visible (back, forward, refresh)
✗ No app icon on home screen (unless PWA)
✗ Requires internet connection
⚠ May prompt to "Add to Home Screen"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.2 Mobile Testing Challenges

**Unique Challenges in Mobile Testing:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE TESTING CHALLENGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEVICE FRAGMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Thousands of device models with different:
- Screen sizes (4" to 8"+)
- Screen resolutions (720p to 4K)
- RAM (2GB to 16GB+)
- Processors (various manufacturers and speeds)
- OS versions (Android has 100+ versions in use)

Android Fragmentation (2026):
- 20,000+ different device models
- 10+ Android versions actively used
- 5+ manufacturers (Samsung, Google, OnePlus, Xiaomi, etc.)

iOS Less Fragmented:
- ~10 current iPhone models
- ~5 current iPad models
- Most users on latest iOS version

Impact on Testing:
✗ Cannot test on all devices
✓ Must prioritize based on market share
✓ Use device matrix approach

2. OPERATING SYSTEM VERSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Users on different OS versions

Android OS Distribution (2026):
- Android 14: 40%
- Android 13: 30%
- Android 12: 15%
- Android 11 and older: 15%

iOS Distribution (2026):
- iOS 18: 75%
- iOS 17: 20%
- iOS 16 and older: 5%

Testing Strategy:
✓ Test on latest OS version
✓ Test on most popular OS version
✓ Test on minimum supported OS version

3. NETWORK CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Users have varying network speeds

Network Types:
- 5G: 100-300 Mbps (in coverage areas)
- 4G LTE: 10-50 Mbps
- 3G: 1-5 Mbps
- WiFi: 10-1000 Mbps
- No connection: Offline

Testing Scenarios:
✓ Fast WiFi connection
✓ Slow 3G connection
✓ Switching networks (WiFi to cellular)
✓ No connection (offline mode)
✓ Intermittent connection

4. INTERRUPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Mobile apps face constant interruptions

Types of Interruptions:
- Incoming call
- Incoming SMS/message
- Push notification
- Alarm/Timer
- Calendar reminder
- Low battery warning
- System update prompt
- Another app opening
- Device lock/unlock

Testing Required:
✓ App behavior during interruption
✓ State preservation
✓ Resume functionality

5. LIMITED RESOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Mobile devices have limited:
- Battery life
- Storage space
- Memory (RAM)
- Processing power

Testing Scenarios:
✓ Low battery (< 20%)
✓ Low storage (< 500MB)
✓ Low memory conditions
✓ Background app behavior

6. TOUCH GESTURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Touch-based interaction different from mouse

Gestures to Test:
- Single tap
- Double tap
- Long press (press and hold)
- Swipe (left, right, up, down)
- Pinch (zoom in/out)
- Two-finger scroll
- 3D Touch (iPhone)
- Force Touch

Testing Required:
✓ All gestures work correctly
✓ Gesture conflicts resolved
✓ Touch target sizes adequate (44×44px minimum)

7. SCREEN ORIENTATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Users rotate devices

Orientations:
- Portrait (default)
- Landscape left
- Landscape right
- Upside down (some apps)

Testing Required:
✓ Layout adapts correctly
✓ Functionality maintained
✓ No data loss on rotation
✓ Orientation lock respected

8. SECURITY & PRIVACY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Sensitive data on personal devices

Security Concerns:
- Data stored on device
- Biometric authentication
- App permissions
- Data transmission
- Session management

Testing Required:
✓ Data encrypted at rest
✓ Data encrypted in transit (HTTPS)
✓ Biometric authentication works
✓ Permissions requested appropriately
✓ Secure session handling

9. APP UPDATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Backward compatibility with previous versions

Testing Scenarios:
✓ Fresh install
✓ Update from previous version
✓ Data migration from old version
✓ Settings preserved after update

10. REAL DEVICE vs SIMULATOR/EMULATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: Emulator limitations

Emulator Limitations:
✗ Performance different from real device
✗ Camera/GPS not accurate
✗ Network conditions simulated
✗ Hardware-specific issues missed
✗ Touch gestures less accurate

Best Practice:
✓ Use emulators for early/frequent testing
✓ Use real devices for final/release testing
✓ Test critical scenarios on real devices

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## iOS vs Android Testing Differences

### 2.1 Platform Comparison

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
iOS vs ANDROID: KEY DIFFERENCES FOR TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────┬──────────────────┬──────────────────┐
│ Aspect              │ iOS              │ Android          │
├─────────────────────┼──────────────────┼──────────────────┤
│ DEVICE FRAGMENTATION│                  │                  │
│ Device Models       │ ~15 active       │ 20,000+ active   │
│ OS Versions         │ 2-3 main         │ 10+ active       │
│ Testing Complexity  │ Low              │ Very High        │
│                     │                  │                  │
│ USER INTERFACE      │                  │                  │
│ Navigation          │ Bottom tab bar   │ Bottom nav bar   │
│ Back Button         │ Top left "<"     │ Hardware/gesture │
│ Settings Location   │ iOS Settings app │ In-app usually   │
│ Design Language     │ Human Interface  │ Material Design  │
│                     │                  │                  │
│ INSTALLATION        │                  │                  │
│ App Store           │ App Store only   │ Multiple sources │
│ Installation Source │ App Store        │ Play Store, APK  │
│ Sideloading         │ Very limited     │ Easy (APK)       │
│                     │                  │                  │
│ PERMISSIONS         │                  │                  │
│ Permission Request  │ Just-in-time     │ Install or JIT   │
│ User Control        │ Per permission   │ Per permission   │
│ Granularity         │ Fine-grained     │ Fine-grained     │
│                     │                  │                  │
│ NOTIFICATIONS       │                  │                  │
│ Push Notifications  │ APNS             │ FCM              │
│ Notification Style  │ Banners/Alerts   │ Status bar       │
│ Customization       │ Limited          │ Extensive        │
│                     │                  │                  │
│ GESTURES            │                  │                  │
│ Back Gesture        │ Swipe from left  │ Swipe/button     │
│ Home Gesture        │ Swipe up         │ Swipe up/button  │
│ 3D Touch            │ Yes (older)      │ No               │
│ Haptic Feedback     │ Taptic Engine    │ Varies by device │
│                     │                  │                  │
│ FILE SYSTEM         │                  │                  │
│ Access              │ Sandboxed        │ More open        │
│ Downloads           │ Files app        │ Downloads folder │
│ External Storage    │ No               │ SD Card support  │
│                     │                  │                  │
│ TESTING TOOLS       │                  │                  │
│ Official Emulator   │ Simulator        │ Emulator         │
│ Development Tool    │ Xcode            │ Android Studio   │
│ Testing Framework   │ XCTest           │ Espresso, JUnit  │
│ Emulator Speed      │ Fast             │ Medium-Fast      │
│                     │                  │                  │
│ RELEASE PROCESS     │                  │                  │
│ Review Time         │ 1-3 days         │ Few hours        │
│ Review Strictness   │ Very strict      │ Less strict      │
│ Beta Testing        │ TestFlight       │ Internal testing │
│ Update Rollout      │ All at once      │ Staged rollout   │
└─────────────────────┴──────────────────┴──────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.2 iOS-Specific Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
iOS TESTING SPECIFICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. iOS NAVIGATION PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-iOS-001: Back button navigation
Test: Navigate deep into app, use back button
Expected:
✓ Back button ("<") appears in top-left
✓ Label shows previous screen name
✓ Tapping back returns to previous screen
✓ Swipe from left edge also goes back

TC-iOS-002: Tab bar navigation
Test: App with bottom tab bar
Expected:
✓ Tab bar always visible
✓ Current tab highlighted
✓ Switching tabs preserves each tab's state
✓ Each tab has its own navigation stack

TC-iOS-003: Modal presentation
Test: Open modal screen
Expected:
✓ Modal slides up from bottom OR
✓ Modal appears as card (iOS 13+)
✓ Pull down to dismiss (if dismissible)
✓ Cancel/Done button present

2. iOS PERMISSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Permission Types:
- Camera
- Microphone
- Photo Library
- Location (Always, When in Use)
- Contacts
- Calendar
- Notifications
- Face ID / Touch ID
- Health data

TC-iOS-004: Permission request flow
Test: First time app needs camera
Expected:
✓ Alert appears: "[App] Would Like to Access the Camera"
✓ Message explains why permission needed
✓ Options: "Don't Allow" or "Allow"
✓ User choice respected

TC-iOS-005: Denied permission handling
Test: User denies camera access
Expected:
✓ Clear message explaining what user can't do
✓ Button to open Settings
✓ Instructions on how to enable in Settings

TC-iOS-006: Re-requesting permission
Test: Permission denied, app needs it again
Expected:
✓ iOS doesn't show system alert again
✓ App shows custom dialog
✓ Dialog explains and has "Go to Settings" button

3. iOS GESTURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-iOS-007: Swipe back gesture
Test: In any screen with back button
Expected:
✓ Swipe from left edge goes back
✓ Can cancel mid-swipe
✓ Works system-wide (iOS convention)

TC-iOS-008: Pull-to-refresh
Test: List view (emails, posts, etc.)
Expected:
✓ Pull down from top
✓ Loading spinner appears
✓ Release to refresh
✓ Content updates

TC-iOS-009: 3D Touch (older iPhones)
Test: Long press on app icon (home screen)
Expected:
✓ Quick actions menu appears
✓ Quick actions functional
✓ Peek and Pop (in-app, if implemented)

TC-iOS-010: Haptic feedback
Test: Actions that should provide feedback
Expected:
✓ Success: Light haptic
✓ Warning: Medium haptic
✓ Error: Heavy haptic
✓ Selection: Subtle tap

4. iOS DARK MODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-iOS-011: Dark mode support
Test: Toggle dark mode in iOS settings
Expected:
✓ App automatically switches to dark theme
✓ All screens adapt
✓ Colors appropriate for dark mode
✓ Readable contrast maintained
✓ Images/icons adapt if needed

TC-iOS-012: Dark mode colors
Test: All UI elements in dark mode
Expected:
✓ Background: Dark (not pure black)
✓ Text: Light
✓ Elevated surfaces: Slightly lighter than background
✓ Accent colors adjusted for readability

5. iOS MULTITASKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-iOS-013: App switcher
Test: Swipe up and hold (home gesture)
Expected:
✓ App switcher appears
✓ Current app shown as card
✓ Swipe up on app card to close app
✓ Tap card to return to app

TC-iOS-014: Split View (iPad)
Test: Open two apps side-by-side
Expected:
✓ Both apps functional
✓ Proper layout for split view
✓ Can resize split (drag divider)
✓ Can dismiss split view

6. iOS SPECIFIC FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-iOS-015: Face ID / Touch ID
Test: Biometric authentication
Expected:
✓ Prompt appears with app icon
✓ Face ID scans face (or Touch ID reads fingerprint)
✓ Success: Authenticates
✓ Failure: Fallback to passcode option

TC-iOS-016: Siri integration
Test: "Hey Siri, [app action]"
Expected:
✓ Siri recognizes app
✓ Performs action if configured
✓ Shortcuts work as expected

TC-iOS-017: App Clips
Test: Open App Clip (if app has one)
Expected:
✓ Lightweight version loads quickly
✓ Core functionality works
✓ Prompt to install full app

TC-iOS-018: Widgets
Test: Add app widget to home screen
Expected:
✓ Widget displays correctly
✓ Updates with fresh data
✓ Tap opens app to relevant section

7. iOS HUMAN INTERFACE GUIDELINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-iOS-019: Status bar
Test: Status bar visibility
Expected:
✓ Status bar shows network, battery, time
✓ Appropriate style (light/dark) for background
✓ Hidden during full-screen content (videos)

TC-iOS-020: Safe area
Test: Display on notched devices (iPhone X+)
Expected:
✓ Content within safe area
✓ No content hidden by notch
✓ No content hidden by home indicator
✓ Works in both orientations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.3 Android-Specific Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANDROID TESTING SPECIFICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ANDROID NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-AND-001: Back button behavior
Test: Navigate through app, press back
Expected:
✓ Hardware back button returns to previous screen OR
✓ Gesture navigation (swipe from edge) goes back
✓ From home screen, back exits app
✓ Long press back shows app history (some versions)

TC-AND-002: Navigation drawer
Test: Swipe from left edge or tap hamburger menu
Expected:
✓ Navigation drawer slides in from left
✓ Menu items listed vertically
✓ Tap item navigates to that section
✓ Tap outside drawer dismisses it

TC-AND-003: Action bar / App bar
Test: Top app bar
Expected:
✓ App title displayed
✓ Back arrow (if not top level)
✓ Menu items (3 dots overflow)
✓ Action icons for common actions

2. ANDROID PERMISSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Permission Models:
- Android 5.x and below: All permissions at install time
- Android 6.0+: Runtime permissions

TC-AND-004: Runtime permission (Android 6+)
Test: First time app needs location
Expected:
✓ Dialog: "[App] wants to access this device's location"
✓ Options: "While using the app", "Only this time", "Don't allow"
✓ User choice respected

TC-AND-005: Permission groups
Test: Request multiple related permissions
Example: Camera + Storage
Expected:
✓ Separate requests for each permission
✓ User can grant individually

TC-AND-006: Background location (Android 10+)
Test: App needs location in background
Expected:
✓ Initial request: "Allow only while using the app"
✓ Later prompt: "Allow all the time?"
✓ User can change in settings

3. ANDROID SYSTEM UI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-AND-007: Status bar
Test: Status bar display
Expected:
✓ Network, battery, time visible
✓ App can hide status bar for immersive mode
✓ Pull down shows notifications

TC-AND-008: Navigation bar
Test: System navigation (3-button or gesture)
Expected:
3-Button Navigation:
✓ Back button (◁)
✓ Home button (○)
✓ Recent apps button (▢)

Gesture Navigation (Android 10+):
✓ Swipe from edges for back
✓ Swipe up for home
✓ Swipe up and hold for recent apps

TC-AND-009: Floating Action Button (FAB)
Test: Primary action button
Expected:
✓ Circular button, usually bottom-right
✓ Contains primary app action (compose, add, etc.)
✓ Tapping performs action
✓ May expand to show multiple actions

4. ANDROID NOTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-AND-010: Notification display
Test: App sends notification
Expected:
✓ Icon appears in status bar
✓ Pull down shows notification details
✓ Tap notification opens relevant screen in app
✓ Swipe notification dismisses it

TC-AND-011: Notification channels (Android 8+)
Test: Notification settings
Expected:
✓ App has notification channels (categories)
✓ User can disable specific channels
✓ User can set importance level per channel
✓ Sound, vibration configurable per channel

TC-AND-012: Notification actions
Test: Notification with actions (Reply, Archive, etc.)
Expected:
✓ Action buttons visible in expanded notification
✓ Actions work without opening app
✓ Inline reply works (if applicable)

5. ANDROID MATERIAL DESIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-AND-013: Material Design components
Test: UI follows Material Design
Expected:
✓ Cards with elevation/shadows
✓ Ripple effect on touch
✓ Floating Action Button (FAB)
✓ Bottom sheets for modals
✓ Snackbars for brief messages

TC-AND-014: Bottom sheets
Test: Open bottom sheet
Expected:
✓ Sheet slides up from bottom
✓ Can be persistent or modal
✓ Swipe down to dismiss (if dismissible)
✓ Partially expanded or full-screen options

TC-AND-015: Snackbar
Test: Action result feedback
Expected:
✓ Brief message appears at bottom
✓ Auto-dismisses after ~3 seconds
✓ Optional action button (Undo, Retry)
✓ Doesn't block UI

6. ANDROID DEVICE FRAGMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-AND-016: Screen size adaptation
Test: On small (4"), medium (5.5"), large (6.5") screens
Expected:
✓ Layout adapts appropriately
✓ All content accessible
✓ Touch targets adequate
✓ No overlapping elements

TC-AND-017: Manufacturer customization
Test: Samsung, OnePlus, Xiaomi devices
Expected:
✓ App works despite custom Android skin
✓ Navigation behaves correctly
✓ Permissions work as expected
✓ No visual glitches

TC-AND-018: OS version compatibility
Test: Minimum supported Android version
Example: App supports Android 8.0+
Expected:
✓ App installs on Android 8.0
✓ Core features work on older versions
✓ Graceful degradation if newer API used

7. ANDROID-SPECIFIC FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-AND-019: Widgets (Home screen)
Test: Add app widget to home screen
Expected:
✓ Widget appears in widgets list
✓ Place on home screen
✓ Resizable (if applicable)
✓ Updates with data
✓ Tap opens app

TC-AND-020: File access
Test: Download file, access from File Manager
Expected:
✓ File appears in Downloads folder
✓ Can open file from File Manager
✓ Can share file to other apps

TC-AND-021: SD card support
Test: Move app to SD card (if supported)
Expected:
✓ Option available in Settings > Apps
✓ App continues working after move
✓ Data persists

TC-AND-022: Multiple users (tablets/shared devices)
Test: Switch between Android users
Expected:
✓ Each user has separate app data
✓ App works for all users
✓ No data crossover

TC-AND-023: Picture-in-Picture (PIP)
Test: Video playing, press Home
Expected:
✓ Video shrinks to small window
✓ Continues playing
✓ Can move PIP window
✓ Can expand back to full screen

TC-AND-024: App shortcuts
Test: Long press app icon on home screen
Expected:
✓ Shortcuts menu appears
✓ Quick actions listed
✓ Shortcuts work correctly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Functional Mobile Testing

### 3.1 Installation Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTALLATION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INSTALL-001: Fresh installation
Precondition: App not installed
Steps:
1. Search for app in store (App Store/Play Store)
2. Tap "Install" or "Get"
3. Wait for download and installation
4. Open app

Expected:
✓ App appears in search results
✓ App size, description, screenshots visible
✓ Download progresses smoothly
✓ Installation completes without errors
✓ App icon appears on home screen
✓ First launch shows onboarding/welcome

TC-INSTALL-002: Installation on low storage
Precondition: Device has < 500MB free space
Steps: Try to install app

Expected:
✓ Warning: "Not enough storage"
✓ Option to free up space
✓ Installation blocked if truly insufficient

TC-INSTALL-003: Installation interruption
Steps:
1. Start app installation
2. During download, put device in airplane mode
3. Wait a moment
4. Turn off airplane mode

Expected:
✓ Download pauses
✓ Resume automatically when connection restored
✓ Installation completes successfully

TC-INSTALL-004: Update existing app
Precondition: Older version installed
Steps:
1. Open app store
2. Navigate to "Updates"
3. Find app, tap "Update"
4. Open app after update

Expected:
✓ Update downloads and installs
✓ User data preserved
✓ Settings preserved
✓ App launches successfully
✓ New features/fixes present

TC-INSTALL-005: Reinstallation
Steps:
1. Uninstall app
2. Reinstall from store

Expected:
✓ Previous data cleared (unless using cloud backup)
✓ Fresh installation experience
✓ Permissions must be re-granted

TC-INSTALL-006: Installation permissions
Android: Installation from unknown sources
Steps: Try to install APK from outside Play Store

Expected:
✓ Warning about installing from unknown sources
✓ User must explicitly enable this permission
✓ Security warning shown

TC-INSTALL-007: App size
Test: Check app size before and after installation

Expected:
✓ App size reasonable
✓ Initial download size < 150MB recommended
✓ Size matches store listing
✓ Additional data download disclosed

TC-INSTALL-008: Minimum OS version
Test: Try to install on unsupported OS version

Expected:
✗ Installation blocked
✓ Clear message: "Requires iOS X+ / Android X+"
✓ No app corruption on unsupported device

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.2 Gesture Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GESTURE TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC GESTURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-GESTURE-001: Single tap
Test: Tap buttons, links, items
Expected:
✓ Immediate response (<100ms)
✓ Visual feedback (highlight, ripple)
✓ Action executes (navigation, selection, etc.)
✓ No accidental double-trigger

TC-GESTURE-002: Double tap
Test: Double tap on image (zoom) or text (select word)
Expected:
✓ Recognizes two quick taps
✓ Distinct from two single taps
✓ Zoom in/out OR word selection
✓ Works consistently

TC-GESTURE-003: Long press (press and hold)
Test: Long press on various elements
Context menus, drag mode, etc.
Expected:
✓ Triggers after ~500ms
✓ Visual feedback (vibration, menu appears)
✓ Context menu shows options OR
✓ Enters drag/reorder mode
✓ Doesn't interfere with tap

TC-GESTURE-004: Touch target size
Test: Tap on small buttons/links
Expected:
✓ Minimum size: 44×44 points (iOS) / 48×48 dp (Android)
✓ Easy to tap without mistakes
✓ Adequate spacing between tap targets

2. SWIPE GESTURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-GESTURE-005: Swipe left
Test: Swipe left on list item, photo gallery, etc.
Expected:
✓ Smooth animation
✓ Action executes (delete, next item, etc.)
✓ Can cancel mid-swipe (release before threshold)
✓ Swipe speed affects animation

TC-GESTURE-006: Swipe right
Test: Swipe right on list item, gallery, etc.
Expected:
✓ Opposite action from swipe left OR
✓ Navigation back (if applicable)

TC-GESTURE-007: Swipe up
Test: Swipe up on scrollable content
Expected:
✓ Content scrolls up (view older content)
✓ Smooth scrolling
✓ Momentum scrolling (continues after release)
✓ Bounce effect at top/bottom

TC-GESTURE-008: Swipe down
Test: Swipe down from top
Expected:
✓ Content scrolls down OR
✓ Pull-to-refresh activates (if at top of list)
✓ Refresh indicator appears
✓ Release to refresh

3. PINCH GESTURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-GESTURE-009: Pinch to zoom in
Test: On image, map, or zoomable content
Expected:
✓ Two fingers, pinch outward
✓ Content zooms in smoothly
✓ Can zoom in to reasonable maximum (2x-10x)
✓ Content remains centered

TC-GESTURE-010: Pinch to zoom out
Test: Zoomed-in content
Expected:
✓ Two fingers, pinch inward
✓ Content zooms out smoothly
✓ Can zoom out to original size
✓ Cannot zoom out beyond 1x (unless designed to)

TC-GESTURE-011: Double tap to zoom
Test: Double tap on image
Expected:
✓ First double-tap: Zoom in (2x or fit-to-screen)
✓ Second double-tap: Zoom out (back to original)
✓ Smooth animation

4. MULTI-TOUCH GESTURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-GESTURE-012: Two-finger scroll
Test: Maps, large documents
Expected:
✓ Two fingers scroll/pan content
✓ Smooth movement
✓ Distinguishable from single-finger scroll

TC-GESTURE-013: Rotation gesture
Test: Rotate image or object
Expected:
✓ Two fingers, rotate
✓ Object rotates following finger movement
✓ Angle displayed (if applicable)

TC-GESTURE-014: Three-finger gesture (if supported)
Test: Three-finger swipe, tap
Expected:
✓ Performs designated action
✓ Doesn't conflict with system gestures

5. DRAG AND DROP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-GESTURE-015: Drag to reorder
Test: List with reorderable items
Steps:
1. Long press on item
2. Drag to new position
3. Release

Expected:
✓ Item follows finger
✓ Other items shift to make space
✓ Visual feedback (item elevated)
✓ Item placed at new position on release

TC-GESTURE-016: Drag to delete
Test: Swipe and drag to trash/delete zone
Expected:
✓ Delete zone appears
✓ Item follows finger
✓ Visual cue when over delete zone
✓ Item deleted on release in zone

6. EDGE GESTURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-GESTURE-017: Swipe from left edge (back)
Test: In any screen with back navigation
Expected:
✓ Swipe from left edge starts back animation
✓ Can complete to go back
✓ Can cancel mid-swipe

TC-GESTURE-018: Swipe from bottom (home)
Test: iPhone X+ or Android gesture navigation
Expected:
✓ Swipe from bottom goes to home screen
✓ App backgrounded
✓ State preserved

7. GESTURE CONFLICTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-GESTURE-019: Horizontal scroll conflict
Test: Horizontally scrollable content inside vertically scrollable view
Expected:
✓ Horizontal scroll works
✓ Vertical scroll also works
✓ System distinguishes intent (direction of initial movement)

TC-GESTURE-020: Gesture during animation
Test: Swipe while previous animation in progress
Expected:
✓ Gesture recognized OR
✓ Gesture ignored until animation completes
✓ No glitches or conflicts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.3 Orientation Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN ORIENTATION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-ORIENT-001: Rotate to landscape
Precondition: In portrait mode
Steps:
1. Rotate device to landscape
2. Observe layout changes

Expected:
✓ Layout adapts to landscape
✓ All content visible (no cutoff)
✓ Functionality maintained
✓ No data loss
✓ Smooth transition

TC-ORIENT-002: Rotate to portrait
Precondition: In landscape mode
Steps: Rotate device to portrait

Expected:
✓ Layout adapts to portrait
✓ Content rearranges appropriately
✓ Functionality maintained

TC-ORIENT-003: Rapid orientation changes
Steps: Rotate device rapidly multiple times

Expected:
✓ App keeps up with rotations
✓ No lag or glitches
✓ No crashes
✓ Final orientation correct

TC-ORIENT-004: Orientation during loading
Steps:
1. Initiate loading operation (API call, etc.)
2. Rotate device while loading

Expected:
✓ Loading continues
✓ Layout updates after rotation
✓ Loading completes successfully
✓ Data not lost

TC-ORIENT-005: Form input during orientation change
Steps:
1. Fill in form fields
2. Rotate device

Expected:
✓ Form data preserved
✓ Focus maintained (or predictably lost)
✓ Keyboard adapts to new orientation

TC-ORIENT-006: Video playback orientation
Steps:
1. Play video
2. Rotate to landscape

Expected:
✓ Video expands to full screen (if designed)
✓ Playback continues
✓ Position preserved
✓ Controls accessible

TC-ORIENT-007: Orientation lock
Steps:
1. Enable device orientation lock
2. Rotate device

Expected:
✓ App respects orientation lock
✓ Screen doesn't rotate
✓ Content remains accessible

TC-ORIENT-008: Force orientation for specific screens
Example: Login screen portrait-only
Steps: Try to rotate login screen

Expected:
✓ Screen remains in forced orientation
✓ Clear design reason for lock
✓ User not confused

TC-ORIENT-009: Tablet split-screen orientation
Test: iPad or Android tablet
Steps: Use split-screen, rotate device

Expected:
✓ Both apps adapt
✓ Split-screen maintained
✓ Layouts appropriate

TC-ORIENT-010: Sensor accuracy
Steps: Place device flat, tilt slightly

Expected:
✓ Doesn't rotate unless clear intent
✓ No accidental rotations
✓ Responsive when intended

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.4 Interruption Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERRUPTION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INCOMING CALLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INT-001: Incoming phone call during app use
Steps:
1. Use app (fill form, watch video, play game)
2. Trigger incoming call (use second device)

Expected:
✓ Call notification appears
✓ App pauses/backgrounds
✓ User can accept or decline call
✓ After call ends, return to app
✓ App state preserved (data not lost)

TC-INT-002: Incoming call during transaction
Steps:
1. Initiate payment/critical operation
2. Incoming call arrives

Expected:
✓ Transaction completes OR
✓ Transaction safely paused/cancelled
✓ Clear indication of transaction status
✓ No money lost, no duplicate charges

2. NOTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INT-003: Push notification arrives
Steps:
1. Use app
2. Push notification from another app arrives

Expected:
✓ Notification banner appears
✓ Current app continues running
✓ Tapping notification opens other app
✓ Returning to original app preserves state

TC-INT-004: In-app notification interruption
Steps: App shows its own notification while in use

Expected:
✓ Notification displayed appropriately (banner, modal)
✓ User can dismiss or act on it
✓ App continues functioning

3. ALARMS AND TIMERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INT-005: Alarm/Timer goes off
Steps:
1. Use app
2. Alarm or timer goes off

Expected:
✓ Alarm alert appears
✓ App pauses
✓ After dismissing alarm, return to app
✓ State preserved

4. SYSTEM ALERTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INT-006: Low battery warning
Steps:
1. Use app
2. Battery drops below 20% (system warning appears)

Expected:
✓ Warning appears
✓ App continues functioning
✓ No data loss

TC-INT-007: System update prompt
Steps: System update notification appears

Expected:
✓ User can postpone update
✓ App continues functioning
✓ If update installed, app data preserved

TC-INT-008: Calendar event reminder
Steps: Calendar reminder appears during app use

Expected:
✓ Reminder notification shown
✓ App continues running
✓ User can snooze or dismiss

5. CONNECTIVITY CHANGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INT-009: WiFi to cellular transition
Steps:
1. Use app on WiFi
2. Turn off WiFi (forces cellular)

Expected:
✓ App detects network change
✓ Continues functioning on cellular
✓ Active downloads/uploads continue
✓ Warning if cellular data usage high

TC-INT-010: Network loss during operation
Steps:
1. Perform online operation (upload, download)
2. Enable airplane mode

Expected:
✓ App detects network loss
✓ Shows "No connection" message
✓ Operation pauses or queues
✓ Retry when connection restored

6. DEVICE STATE CHANGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INT-011: Lock screen during app use
Steps:
1. Use app
2. Lock device (power button or auto-lock)
3. Unlock device

Expected:
✓ App pauses when locked
✓ Secure content hidden on lock screen
✓ After unlock, app resumes
✓ State preserved (unless security requires logout)

TC-INT-012: Background app during task
Steps:
1. Perform task in app (upload, form fill)
2. Press Home button (background app)
3. Wait a moment
4. Return to app

Expected:
✓ Task continues in background (if applicable) OR
✓ Task pauses and resumes on return
✓ Progress saved
✓ State preserved

TC-INT-013: Multitasking - switching apps
Steps:
1. Use app
2. Open app switcher
3. Switch to another app
4. Return to original app

Expected:
✓ Original app preserved in background
✓ State maintained
✓ No restart required

7. MEDIA PLAYBACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INT-014: Music playing in background
Steps:
1. Play music in another app
2. Open and use test app

Expected:
✓ Music continues playing OR
✓ Test app pauses music (if it plays audio)
✓ Music controls work from control center/notification

TC-INT-015: Video playback interruption
Steps:
1. Watch video in app
2. Incoming call arrives

Expected:
✓ Video pauses
✓ Call answered
✓ After call, option to resume video
✓ Position preserved

8. PERMISSION PROMPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-INT-016: Permission request during task
Steps:
1. Perform task requiring permission (camera, location)
2. Permission prompt appears

Expected:
✓ Task pauses
✓ Permission prompt clear
✓ After grant/deny, task resumes appropriately

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Mobile-Specific Testing

### 4.1 Battery Consumption Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BATTERY CONSUMPTION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-BATTERY-001: Battery usage analysis
Tools:
- iOS: Settings → Battery → Battery Usage by App
- Android: Settings → Battery → Battery usage

Steps:
1. Charge device to 100%
2. Use app for 30 minutes
3. Check battery usage

Expected:
✓ App battery usage reasonable
✓ Not in top battery consumers (unless expected)
✓ No abnormal drain

Benchmarks:
- Light use (reading): < 5% per hour
- Moderate use (browsing): 5-10% per hour
- Heavy use (gaming, video): 10-20% per hour

TC-BATTERY-002: Background battery drain
Steps:
1. Open app
2. Background app (Home button)
3. Leave for 8 hours (overnight)
4. Check battery usage

Expected:
✓ Minimal background battery usage (< 1% per hour)
✓ App suspended properly when not in use
✗ App should not keep running unnecessarily

TC-BATTERY-003: Location services battery impact
Test: App using GPS/location
Steps:
1. Enable location services
2. Use app with location features
3. Monitor battery drain

Expected:
✓ Battery drains faster (expected with GPS)
✓ App requests location appropriately ("When in Use" vs "Always")
✓ Stops location updates when not needed

TC-BATTERY-004: Network activity battery impact
Steps:
1. Use app with constant network activity (syncing, streaming)
2. Monitor battery usage

Expected:
✓ Higher battery usage (expected)
✓ App uses WiFi when available (more efficient than cellular)
✓ Batch network requests when possible

TC-BATTERY-005: Low battery mode behavior (iOS)
Steps:
1. Enable Low Power Mode
2. Use app

Expected:
✓ App continues functioning
✓ Non-essential features may be limited
✓ Background activity reduced
✓ Animations may be simplified

TC-BATTERY-006: Battery saver mode (Android)
Steps:
1. Enable Battery Saver
2. Use app

Expected:
✓ App functions correctly
✓ Respects battery saver restrictions
✓ Background sync may be delayed

TC-BATTERY-007: Screen brightness impact
Test: Brightness at different levels
Steps:
1. Max brightness: Use app for 15 min
2. 50% brightness: Use app for 15 min
3. Compare battery drain

Expected:
✓ Higher brightness = more drain (as expected)
✓ App doesn't force brightness changes

TC-BATTERY-008: Battery-intensive features
Test: Camera, video recording, AR
Steps: Use battery-intensive features

Expected:
✓ Battery drains faster (expected)
✓ User notified if appropriate
✓ Device doesn't overheat

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.2 Network Connectivity Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NETWORK CONNECTIVITY TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DIFFERENT NETWORK TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-NET-001: WiFi connection
Steps: Use app on WiFi
Expected:
✓ App functions correctly
✓ Fast loading times
✓ Media loads quickly

TC-NET-002: 4G/LTE connection
Steps: Disable WiFi, use cellular (4G)
Expected:
✓ App functions correctly
✓ Slightly slower than WiFi (acceptable)
✓ Warning if high data usage expected

TC-NET-003: 3G connection
Steps: Force 3G connection (Settings → Network → 3G only)
Expected:
✓ App functions (may be slower)
✓ Loads optimized content (smaller images)
✓ Timeout values appropriate (not too aggressive)

TC-NET-004: 5G connection
Steps: Use on 5G network (if available)
Expected:
✓ App functions excellently
✓ Fast loading
✓ Takes advantage of high speed

2. NETWORK SWITCHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-NET-005: WiFi to cellular transition
Steps:
1. Start operation on WiFi (download, upload)
2. Turn off WiFi
3. Observe transition to cellular

Expected:
✓ App detects network change
✓ Operation continues on cellular OR
✓ Prompts user before using cellular (large downloads)
✓ No data corruption

TC-NET-006: Cellular to WiFi transition
Steps:
1. Use app on cellular
2. Connect to WiFi
3. Observe transition

Expected:
✓ App automatically prefers WiFi
✓ Seamless transition
✓ No interruptions

3. NO NETWORK / OFFLINE MODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-NET-007: No internet connection
Steps:
1. Enable airplane mode
2. Open app
3. Try to use online features

Expected:
✓ Clear message: "No internet connection"
✓ Offline features work (if applicable)
✓ Graceful degradation
✓ Retry button available

TC-NET-008: Connection lost during operation
Steps:
1. Start upload/download
2. Enable airplane mode mid-operation

Expected:
✓ App detects connection loss
✓ Shows error message
✓ Retries when connection restored OR
✓ Allows manual retry

TC-NET-009: Offline mode functionality
Test: Apps with offline mode (reading apps, maps)
Steps:
1. Download content for offline use
2. Enable airplane mode
3. Use app

Expected:
✓ Downloaded content accessible
✓ Clear indication of offline mode
✓ Cannot access online-only features
✓ Syncs when connection restored

4. INTERMITTENT CONNECTIVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-NET-010: Spotty connection
Simulate: Toggle airplane mode on/off every 10 seconds
Steps: Try to use app with intermittent connection

Expected:
✓ App handles disconnections gracefully
✓ Doesn't crash
✓ Retries requests
✓ Shows connection status

TC-NET-011: Slow network
Tools: Use network throttling
- iOS Simulator: Network Link Conditioner
- Android: Settings → Developer Options → Network throttling
- Charles Proxy: Throttle settings

Steps: Throttle to 50 kbps, use app

Expected:
✓ App loads (slowly)
✓ Loading indicators shown
✓ Timeout values appropriate (doesn't timeout too quickly)
✓ User not stuck on loading screen indefinitely

5. HIGH LATENCY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-NET-012: High latency network
Test: Latency 2000ms+
Steps: Use Charles Proxy or network simulator

Expected:
✓ App shows loading states
✓ User aware of delays
✓ App doesn't hang
✓ Operations eventually complete OR timeout with error

6. DATA USAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-NET-013: Data usage monitoring
Tools:
- iOS: Settings → Cellular → scroll to app
- Android: Settings → Network & Internet → Data usage

Steps:
1. Note data usage
2. Use app for 30 minutes
3. Check data usage again

Expected:
✓ Data usage reasonable
✓ No excessive background data
✓ User can control data usage (settings)

TC-NET-014: WiFi-only mode
Test: App setting to use WiFi only
Steps:
1. Enable "WiFi only" setting
2. Disable WiFi
3. Try to use app

Expected:
✓ App doesn't use cellular data
✓ Message: "Connect to WiFi to continue"
✓ Setting respected

7. VPN CONNECTIVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-NET-015: App through VPN
Steps:
1. Connect to VPN
2. Use app

Expected:
✓ App works correctly through VPN
✓ All features functional
✓ No IP blocking issues

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.3 Storage Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STORAGE TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-STORAGE-001: App storage usage
Tools:
- iOS: Settings → General → iPhone Storage → [App]
- Android: Settings → Apps → [App] → Storage

Steps:
1. Install app
2. Use app for a week
3. Check storage usage

Expected:
✓ App size reasonable
✓ Documents & Data reasonable
✓ Cache size not excessive (< 500MB)
✓ Total size disclosed accurately

TC-STORAGE-002: Cache management
Steps:
1. Use app, generate cache (view images, etc.)
2. Check storage
3. Clear cache (in app OR iOS:offload app)

Expected:
✓ Cache can be cleared
✓ Storage freed
✓ App continues functioning after cache clear

TC-STORAGE-003: Low storage condition
Precondition: Device < 500MB free space
Steps: Use app features

Expected:
✓ App functions (may be slower)
✓ Downloads may fail with clear error
✓ User notified if storage needed
✓ No app crash

TC-STORAGE-004: Storage limit reached
Steps:
1. Fill device storage completely
2. Try to download content in app

Expected:
✗ Download fails
✓ Error: "Not enough storage"
✓ Option to free up space

TC-STORAGE-005: Offline content downloads
Test: Apps allowing offline downloads (Netflix, Spotify)
Steps:
1. Download content for offline
2. Check storage usage
3. Delete offline content

Expected:
✓ Content downloads successfully
✓ Storage used disclosed
✓ Can manage/delete downloads
✓ Storage freed after deletion

TC-STORAGE-006: Data persistence
Steps:
1. Create data in app (notes, favorites, etc.)
2. Force quit app
3. Reopen app

Expected:
✓ Data persists
✓ No data loss
✓ Local storage working correctly

TC-STORAGE-007: App data backup (iOS iCloud)
Steps:
1. Use app, create data
2. Backup device to iCloud
3. Restore device from backup

Expected:
✓ App data restored (if backup enabled)
✓ Settings preserved
✓ User not required to reconfigure

TC-STORAGE-008: Clear app data (Android)
Steps:
1. Use app, create data
2. Settings → Apps → [App] → Storage → Clear Data

Expected:
✓ All app data deleted
✓ App resets to fresh install state
✓ User must log in again

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.4 Permission Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERMISSION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERMISSIONS TYPES:
- Camera
- Microphone
- Photo Library / Gallery
- Location (Always, When in Use, Never)
- Contacts
- Calendar
- Reminders
- Bluetooth
- Notifications
- Face ID / Touch ID / Biometrics
- Motion & Fitness
- Nearby Devices (Android)

TC-PERM-001: First-time permission request
Steps:
1. Fresh install
2. Trigger feature requiring permission (e.g., take photo)

Expected:
✓ Permission dialog appears
✓ Clear explanation why permission needed
✓ Options: Allow / Don't Allow (iOS) or Allow/Deny (Android)
✓ Choice respected

TC-PERM-002: Permission granted
Steps:
1. Grant permission (Allow)
2. Use feature

Expected:
✓ Feature works correctly
✓ Permission saved
✓ No repeated permission requests

TC-PERM-003: Permission denied
Steps:
1. Deny permission (Don't Allow)
2. Try to use feature

Expected:
✓ Clear error message
✓ Explanation of what can't be done
✓ Option to grant permission (open Settings)
✓ Instructions how to enable

TC-PERM-004: Revoke permission
Steps:
1. Initially grant permission
2. Go to Settings → [App] → Permissions
3. Revoke permission
4. Return to app, try to use feature

Expected:
✓ Feature disabled
✓ Clear message explaining permission needed
✓ Prompt to re-enable in Settings

TC-PERM-005: Partial permissions (Android 11+)
Example: Photo access
Options: Allow all, Allow selected photos, Don't allow
Steps: Select "Allow selected photos"

Expected:
✓ App can only access selected photos
✓ User can modify selection
✓ App doesn't crash with limited access

TC-PERM-006: One-time permission (Android 11+)
Steps:
1. Grant permission for "Only this time"
2. Use feature
3. Close app, reopen later
4. Try to use feature again

Expected:
✓ Feature works initially
✓ Permission request appears again on next use
✓ User must grant again

TC-PERM-007: Background location (iOS 11+, Android 10+)
Steps:
1. App requests location
2. User grants "While Using the App"
3. App later asks for "Always" permission

Expected:
✓ Clear explanation why "Always" needed
✓ User can still choose "Only While Using"
✓ App functions appropriately with choice

TC-PERM-008: Permission rationale (Android)
Steps:
1. Deny permission once
2. Request same permission again

Expected:
✓ Rationale shown explaining why needed
✓ User can reconsider
✓ If denied twice, may need Settings

TC-PERM-009: App functionality without permissions
Steps: Deny all non-essential permissions

Expected:
✓ Core app functions work
✓ Features requiring permission disabled gracefully
✓ App doesn't crash

TC-PERM-010: Permission settings screen
Steps: View app permissions in device Settings

Expected:
✓ All requested permissions listed
✓ Current status shown (Allowed/Denied)
✓ Can toggle permissions
✓ Changes take effect immediately

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Device Compatibility Testing

### 5.1 Screen Size Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN SIZE & RESOLUTION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMMON SCREEN SIZES:

iOS Devices (2026):
┌────────────────────┬──────────────┬────────────┬─────────┐
│ Device             │ Screen Size  │ Resolution │ Testing │
├────────────────────┼──────────────┼────────────┼─────────┤
│ iPhone SE (3rd)    │ 4.7"         │ 750×1334   │ P1      │
│ iPhone 13/14       │ 6.1"         │ 1170×2532  │ P0      │
│ iPhone 14 Plus     │ 6.7"         │ 1284×2778  │ P1      │
│ iPhone 14 Pro Max  │ 6.7"         │ 1290×2796  │ P1      │
│ iPad Mini          │ 8.3"         │ 1488×2266  │ P2      │
│ iPad Air           │ 10.9"        │ 1640×2360  │ P1      │
│ iPad Pro 11"       │ 11"          │ 1668×2388  │ P1      │
│ iPad Pro 12.9"     │ 12.9"        │ 2048×2732  │ P2      │
└────────────────────┴──────────────┴────────────┴─────────┘

Android Devices (Sample):
┌────────────────────┬──────────────┬────────────┬─────────┐
│ Device             │ Screen Size  │ Resolution │ Testing │
├────────────────────┼──────────────┼────────────┼─────────┤
│ Samsung Galaxy S23 │ 6.1"         │ 1080×2340  │ P0      │
│ Galaxy S23 Ultra   │ 6.8"         │ 1440×3088  │ P1      │
│ Pixel 7            │ 6.3"         │ 1080×2400  │ P0      │
│ Pixel 7 Pro        │ 6.7"         │ 1440×3120  │ P1      │
│ OnePlus 11         │ 6.7"         │ 1440×3216  │ P1      │
│ Xiaomi 13 Pro      │ 6.73"        │ 1440×3200  │ P2      │
│ Budget Phone       │ 5.5"         │ 720×1520   │ P2      │
└────────────────────┴──────────────┴────────────┴─────────┘

Priority:
P0: Must test (most popular)
P1: Should test (common)
P2: Nice to test (edge cases)

TC-SCREEN-001: Small screen (4.7" - 5.5")
Test on: iPhone SE, small Android
Expected:
✓ All UI elements visible
✓ Text readable (not too small)
✓ Buttons tappable (44×44 minimum)
✓ No horizontal scrolling
✓ Content fits or scrolls vertically

TC-SCREEN-002: Medium screen (5.5" - 6.5")
Test on: Most modern phones
Expected:
✓ Optimal layout
✓ Best user experience
✓ All features accessible

TC-SCREEN-003: Large screen (6.5"+)
Test on: iPhone Pro Max, Galaxy Ultra
Expected:
✓ UI scales appropriately
✓ Takes advantage of extra space OR
✓ Content centered with margins
✓ Not stretched awkwardly

TC-SCREEN-004: Tablet (7" - 13")
Test on: iPad, Android tablets
Expected:
✓ Layout optimized for tablet (not just scaled-up phone UI)
✓ Two-pane layout (if appropriate)
✓ Uses horizontal space effectively

TC-SCREEN-005: Resolution differences
Test: Same screen size, different resolutions
Example: 1080p vs 1440p on 6.1" screen

Expected:
✓ UI renders correctly on both
✓ Images sharp (appropriate resolution loaded)
✓ Text crisp

TC-SCREEN-006: Aspect ratios
Test: 16:9, 18:9, 19.5:9, 20:9
Expected:
✓ Content adapts to aspect ratio
✓ No black bars (unless video)
✓ UI elements positioned correctly

TC-SCREEN-007: Notch / Cutout handling
Test: iPhone notch, Android hole-punch camera
Expected:
✓ Content doesn't overlap notch
✓ Status bar handles notch appropriately
✓ Full-screen content accounts for cutout

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 5.2 OS Version Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPERATING SYSTEM VERSION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

iOS VERSION TESTING:

Strategy: Test on minimum, popular, and latest versions

Example for app supporting iOS 15+:
- iOS 15.0: Minimum supported version
- iOS 17.x: Most popular (40% users)
- iOS 18.x: Latest version (30% users)

TC-OS-001: Minimum supported iOS version
Test on: iOS 15.0 (if that's minimum)
Expected:
✓ App installs and runs
✓ All features work OR
✓ Newer features gracefully disabled
✓ No crashes
✓ Performance acceptable

TC-OS-002: Latest iOS version
Test on: iOS 18.2 (current latest)
Expected:
✓ App fully functional
✓ Takes advantage of new APIs (if applicable)
✓ No compatibility issues
✓ Follows latest design guidelines

TC-OS-003: iOS dark mode (iOS 13+)
Test: Toggle dark mode
Expected:
✓ App adapts to dark mode
✓ All screens support dark theme
✓ Colors appropriate

TC-OS-004: iOS widgets (iOS 14+)
Test: Add widget to home screen
Expected:
✓ Widget available and functional
✓ Updates with data
✓ Multiple sizes supported

ANDROID VERSION TESTING:

Strategy: Test on minimum, popular, and two latest versions

Example for app supporting Android 8.0+:
- Android 8.0 (API 26): Minimum
- Android 12 (API 31): Still popular
- Android 13 (API 33): Common
- Android 14 (API 34): Latest

TC-OS-005: Minimum supported Android version
Test on: Android 8.0
Expected:
✓ App installs and runs
✓ Features work within API limits
✓ Graceful degradation for newer APIs

TC-OS-006: Latest Android version
Test on: Android 14
Expected:
✓ App fully functional
✓ No compatibility issues
✓ Follows Material Design 3

TC-OS-007: Android 11+ scoped storage
Test: File access on Android 11+
Expected:
✓ App uses scoped storage
✓ File access works correctly
✓ Permissions requested appropriately

TC-OS-008: Android 12+ splash screen API
Test: App launch on Android 12+
Expected:
✓ Uses new splash screen API OR
✓ Custom splash screen still works

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 5.3 Device Matrix Approach

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVICE TESTING MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIORITY-BASED APPROACH:

P0 Devices (Must Test - Daily/Each Release):
✓ iPhone 14 (iOS 18) - Most popular iPhone
✓ Samsung Galaxy S23 (Android 14) - Most popular Android
✓ One tablet (iPad or Android)

P1 Devices (Should Test - Weekly/Major Releases):
✓ iPhone SE (small screen)
✓ iPhone 14 Pro Max (large screen, notch)
✓ Google Pixel 7 (Stock Android)
✓ Older iOS (iPhone with iOS 16)
✓ Older Android (Samsung with Android 11)

P2 Devices (Nice to Test - Before Major Launch):
✓ Various Android manufacturers (OnePlus, Xiaomi, etc.)
✓ Budget Android devices
✓ Older devices (3-4 years old)
✓ Various screen sizes and resolutions

SAMPLE TEST MATRIX:

┌──────────────┬────────┬────────┬────────┬─────────┐
│ Device       │ P0     │ Smoke  │ Regres.│ Full    │
│              │ Build  │ Test   │ Test   │ Test    │
├──────────────┼────────┼────────┼────────┼─────────┤
│ iPhone 14    │ Daily  │ Daily  │ Weekly │ Release │
│ Galaxy S23   │ Daily  │ Daily  │ Weekly │ Release │
│ iPad Air     │ Weekly │ Weekly │ Release│ Release │
│ iPhone SE    │ -      │ Weekly │ Weekly │ Release │
│ Pixel 7      │ -      │ Weekly │ Weekly │ Release │
│ Older iPhone │ -      │ -      │ Release│ Release │
│ Older Android│ -      │ -      │ Release│ Release │
│ Budget Phone │ -      │ -      │ -      │ Release │
└──────────────┴────────┴────────┴────────┴─────────┘

PRACTICAL APPROACH FOR SMALL TEAMS:

If you can only test on 3 devices:
1. Latest popular iPhone (iPhone 14)
2. Latest popular Android (Samsung Galaxy S23)
3. One older device (2-3 years old, either platform)

If you can test on 5 devices:
1. Latest iPhone
2. Latest Samsung
3. Google Pixel (stock Android)
4. Older iPhone (iOS 2 versions behind)
5. Budget Android

USING CLOUD TESTING SERVICES:

Services:
- BrowserStack
- Firebase Test Lab
- AWS Device Farm
- Sauce Labs

Benefits:
✓ Access to hundreds of devices
✓ No physical device purchase
✓ Test on older OS versions
✓ Parallel testing

Cost: $30-$200/month typically

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Summary & Key Takeaways

### Day 10 Key Concepts:

1. **Mobile App Types:**
   - Native: Best performance, platform-specific, higher cost
   - Hybrid: One codebase, good performance, medium cost
   - Web: Browser-based, no installation, limited features
   - Selection affects testing approach and complexity

2. **Platform Differences:**
   - iOS: Less fragmentation, strict review, consistent UX
   - Android: High fragmentation, more freedom, varied UX
   - Must test platform-specific features and guidelines

3. **Functional Mobile Testing:**
   - Installation testing (fresh, update, reinstall)
   - Gesture testing (tap, swipe, pinch, drag)
   - Orientation testing (portrait/landscape transitions)
   - Interruption testing (calls, notifications, alerts)

4. **Mobile-Specific Testing:**
   - Battery consumption (background drain, GPS impact)
   - Network connectivity (WiFi, 4G, 3G, offline)
   - Storage management (cache, low storage conditions)
   - Permission handling (grant, deny, revoke scenarios)

5. **Device Compatibility:**
   - Screen sizes (4.7" to 12.9")
   - OS versions (test minimum, popular, latest)
   - Device matrix approach (P0, P1, P2 priorities)
   - Cloud testing services for broader coverage

### Best Practices:

✓ Prioritize devices based on market share and user base
✓ Test on real devices for critical scenarios
✓ Use emulators for frequent/early testing
✓ Always test interruption scenarios
✓ Verify permissions are requested appropriately
✓ Test on both WiFi and cellular networks
✓ Check battery usage for background operations
✓ Ensure touch targets are minimum 44×44 points
✓ Test orientation changes throughout app
✓ Validate offline mode functionality

### Tomorrow's Preview:

Day 11 will cover:
- Localization & Internationalization Testing (i18n/L10n)
- Accessibility Testing (WCAG 2.1 in depth)
- Usability Testing techniques
- Compatibility Testing strategies
- Cross-platform testing considerations

---

**Congratulations on completing Day 10!**

**Study Time:** 5-6 hours

---

*End of Day 10 Study Guide*
