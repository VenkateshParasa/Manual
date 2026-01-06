# Day 8: Web Application Testing - Part 1
## Comprehensive Study Guide

---

## Table of Contents
1. [Web Testing Fundamentals](#web-testing-fundamentals)
2. [Functional Web Testing](#functional-web-testing)
3. [UI/UX Testing](#uiux-testing)
4. [Accessibility Testing Basics](#accessibility-testing-basics)
5. [Practical Exercises](#practical-exercises)
6. [Assessment Questions](#assessment-questions)

---

## Web Testing Fundamentals

### 1.1 Client-Side vs Server-Side Testing

**Client-Side Testing:**
- **Definition:** Testing that occurs in the user's browser
- **Technologies:** HTML, CSS, JavaScript, Angular, React, Vue.js
- **What to Test:**
  - UI rendering and display
  - Form validations (before submission)
  - JavaScript functionality
  - Client-side error handling
  - Browser console errors
  - Local storage/session storage

**Server-Side Testing:**
- **Definition:** Testing that occurs on the web server
- **Technologies:** PHP, Python, Java, Node.js, .NET, Ruby
- **What to Test:**
  - Business logic execution
  - Database operations
  - API responses
  - Session management
  - Server-side validations
  - Authentication and authorization

**Comparison:**

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT-SIDE vs SERVER-SIDE TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌────────────────────┬──────────────────┬──────────────────┐
│ Aspect             │ Client-Side      │ Server-Side      │
├────────────────────┼──────────────────┼──────────────────┤
│ Execution Location │ User's browser   │ Web server       │
│ Primary Language   │ JavaScript       │ Various (PHP,    │
│                    │                  │ Java, Python)    │
│ Validation Speed   │ Instant          │ Requires request │
│ Security           │ Less secure      │ More secure      │
│ Data Persistence   │ Local/Session    │ Database         │
│ Testing Tool       │ Browser DevTools │ Postman, curl    │
│ User Experience    │ Immediate        │ Network delay    │
│ Bypass Risk        │ Can be disabled  │ Cannot bypass    │
└────────────────────┴──────────────────┴──────────────────┘
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Example: Email Validation**

```javascript


// CLIENT-SIDE (JavaScript)
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Invalid email format");
        return false;
    }
    return true;
}

// Test: Enter "test@" → Immediate error message
// Test: Disable JavaScript → Validation bypassed!

// SERVER-SIDE (Python example)
def validate_email_server(email):
    if not re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", email):
        return {"error": "Invalid email format"}
    # Additional checks: email exists, domain valid
    return {"success": True}

// Test: Send POST with invalid email → Server rejects
// Test: Cannot bypass (runs on server)
```

**Testing Strategy:**
```
✓ Test client-side validation works
✓ Test server-side validation exists (try to bypass client-side)
✓ Ensure both validations have consistent rules
✓ Verify appropriate error messages on both sides
```

---

### 1.2 Browser Compatibility Testing

**Definition:** Ensuring web application works correctly across different browsers and versions.

**Major Browsers to Test:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BROWSER MARKET SHARE (2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌──────────────────┬────────────┬─────────────────────┐
│ Browser          │ Share      │ Testing Priority    │
├──────────────────┼────────────┼─────────────────────┤
│ Chrome           │ 63%        │ P0 (Critical)       │
│ Safari           │ 20%        │ P0 (Critical)       │
│ Edge             │ 5%         │ P1 (High)           │
│ Firefox          │ 3%         │ P1 (High)           │
│ Samsung Internet │ 3%         │ P2 (Medium)         │
│ Opera            │ 2%         │ P2 (Medium)         │
│ Others           │ 4%         │ P3 (Low)            │
└──────────────────┴────────────┴─────────────────────┘

Recommendation:
- Test on Chrome (latest 2 versions)
- Test on Safari (latest 2 versions)
- Test on Edge (latest version)
- Test on Firefox (latest version)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Common Browser Compatibility Issues:**

**1. CSS Rendering Differences:**
```css
/* Issue: Flexbox compatibility */

/* Problem in older browsers */
.container {
    display: flex; /* Not supported in IE9 */
}

/* Solution: Add vendor prefixes */
.container {
    display: -webkit-flex; /* Chrome, Safari */
    display: -moz-flex;    /* Firefox */
    display: -ms-flexbox;  /* IE10 */
    display: flex;         /* Standard */
}

Test Cases:
TC01: Verify flexbox layout in Chrome 120+
TC02: Verify flexbox layout in Safari 17+
TC03: Verify flexbox layout in Firefox 120+
TC04: Check fallback for older browsers
```

**2. JavaScript Compatibility:**
```javascript
/* Issue: Arrow functions not supported in IE11 */

// Modern syntax (doesn't work in IE11)
const add = (a, b) => a + b;

// Compatible syntax
function add(a, b) {
    return a + b;
}

Test Cases:
TC05: Test JavaScript functions in Chrome
TC06: Test JavaScript functions in Safari
TC07: Test JavaScript functions in IE11 (if supporting)
TC08: Verify console shows no errors
```

**3. Date Input Fields:**
```html
<!-- Different behaviors across browsers -->
<input type="date" name="birthdate">

Chrome: Shows calendar picker
Safari: Shows native iOS date picker
Firefox: Shows calendar picker
IE11: Shows text input (no picker!)

Test Cases:
TC09: Verify date picker appears (Chrome, Safari, Firefox)
TC10: Verify date format validation
TC11: Test manual date entry
TC12: Verify IE11 fallback (if supporting)
```

**Browser Compatibility Testing Checklist:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BROWSER COMPATIBILITY TESTING CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VISUAL/LAYOUT:
□ Page layout consistent across browsers
□ Fonts render correctly
□ Colors display accurately
□ Images load and display properly
□ Icons and SVGs render correctly
□ Spacing and alignment consistent
□ Responsive design works on all browsers

FUNCTIONALITY:
□ All links work
□ Forms submit correctly
□ Buttons respond to clicks
□ Dropdown menus function
□ Modal popups display correctly
□ Animations run smoothly
□ Videos play correctly
□ Audio works

PERFORMANCE:
□ Page load time acceptable
□ No memory leaks
□ Smooth scrolling
□ No browser freezing

CONSOLE:
□ No JavaScript errors
□ No CSS warnings
□ No 404 errors
□ No console warnings

SPECIFIC FEATURES:
□ HTML5 features work (if used)
□ CSS3 features render (if used)
□ Local/Session storage works
□ Cookies function correctly
□ AJAX requests succeed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Browser Testing Matrix Example:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BROWSER COMPATIBILITY MATRIX
Application: E-Commerce Website v2.0
Test Date: January 10, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────┬─────────┬─────────┬─────────┬─────────┐
│ Feature         │ Chrome  │ Safari  │ Firefox │ Edge    │
│                 │ 120     │ 17.2    │ 121     │ 120     │
├─────────────────┼─────────┼─────────┼─────────┼─────────┤
│ Homepage Load   │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │
│ User Login      │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │
│ Product Search  │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │
│ Add to Cart     │ ✓ Pass  │ ⚠ Minor │ ✓ Pass  │ ✓ Pass  │
│ Checkout Form   │ ✓ Pass  │ ✓ Pass  │ ✗ Fail  │ ✓ Pass  │
│ Payment Process │ ✓ Pass  │ ✓ Pass  │ ✗ Fail  │ ✓ Pass  │
│ Order History   │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │
│ Filters/Sort    │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │ ✓ Pass  │
└─────────────────┴─────────┴─────────┴─────────┴─────────┘

Issues Found:
BUG-801 (Safari): Cart icon animation glitch
BUG-802 (Firefox): Payment form not submitting
BUG-803 (Firefox): CVV field validation error

Legend:
✓ Pass: Works as expected
⚠ Minor: Works with minor visual/UX issues
✗ Fail: Functionality broken
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.3 Responsive Design Testing

**Definition:** Ensuring web application adapts correctly to different screen sizes and devices.

**Standard Breakpoints:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE DESIGN BREAKPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌──────────────────┬────────────────┬─────────────────────┐
│ Device Type      │ Width Range    │ Common Resolutions  │
├──────────────────┼────────────────┼─────────────────────┤
│ Mobile (Portrait)│ 320px - 480px  │ 360×640, 375×667    │
│ Mobile (Landscape)│ 481px - 767px │ 667×375, 812×375    │
│ Tablet (Portrait)│ 768px - 1024px │ 768×1024, 810×1080  │
│ Tablet (Landscape)│ 1025px - 1366px│ 1024×768, 1366×1024│
│ Desktop          │ 1367px+        │ 1920×1080, 2560×1440│
│ Large Desktop    │ 1920px+        │ 2560×1440, 3840×2160│
└──────────────────┴────────────────┴─────────────────────┘

Priority Testing Resolutions:
P0: 375×667 (iPhone), 1920×1080 (Desktop)
P1: 360×640 (Android), 768×1024 (iPad), 1366×768 (Laptop)
P2: 414×896 (iPhone Plus), 1440×900 (MacBook)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Testing Approach:**

**Method 1: Browser DevTools**
```
Chrome DevTools:
1. Open website
2. Press F12 or Ctrl+Shift+I
3. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
4. Select device or enter custom dimensions
5. Test functionality at each breakpoint

Advantages:
✓ Quick and easy
✓ Multiple device presets
✓ Can simulate touch events
✓ Can throttle network speed

Limitations:
✗ Not 100% accurate (emulation)
✗ May miss device-specific issues
```

**Method 2: Physical Devices**
```
Test on actual devices:
- iPhone 14 Pro (iOS 17)
- Samsung Galaxy S23 (Android 13)
- iPad Pro 12.9" (iOS 17)
- Various Android tablets

Advantages:
✓ Most accurate testing
✓ Real touch interaction
✓ True performance metrics
✓ Actual user experience

Limitations:
✗ Expensive (need multiple devices)
✗ Time-consuming
✗ Device availability
```

**Method 3: Browser Resize**
```
Manual browser window resizing:
1. Open website
2. Slowly resize browser window from wide to narrow
3. Observe layout changes at each breakpoint
4. Note any issues

Advantages:
✓ Simple, no tools needed
✓ See transitions in real-time

Limitations:
✗ Less precise


✗ Manual and time-consuming
```

**Responsive Design Test Cases:**

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE DESIGN TEST SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC01: Navigation Menu Responsiveness
Mobile (< 768px):
✓ Hamburger menu icon appears
✓ Menu opens on tap
✓ Menu items stack vertically
✓ Menu closes on selection or outside tap

Tablet (768px - 1024px):
✓ Horizontal menu OR hamburger (depends on design)
✓ All menu items visible or accessible
✓ Dropdowns work correctly

Desktop (> 1024px):
✓ Full horizontal menu
✓ All items visible
✓ Hover effects work
✓ Dropdowns display correctly

TC02: Image Responsiveness
Mobile:
✓ Images scale down to fit screen
✓ No horizontal scrolling
✓ Images load optimized versions (smaller file size)
✓ Aspect ratio maintained

Desktop:
✓ Images display at full quality
✓ High-resolution images load
✓ Gallery/carousel works smoothly

TC03: Form Layout
Mobile:
✓ Form fields stack vertically
✓ Input fields fill screen width (with padding)
✓ Labels above fields (not side-by-side)
✓ Buttons full-width or centered
✓ Easy to tap (min 44×44px touch targets)

Desktop:
✓ Multi-column layout (if designed)
✓ Appropriate field widths
✓ Labels positioned correctly
✓ Submit button appropriately sized

TC04: Typography
Mobile:
✓ Font size readable (minimum 16px for body)
✓ Line height appropriate (1.5-1.6)
✓ No text overflow
✓ Headings scale appropriately

Desktop:
✓ Font sizes comfortable to read
✓ Line length optimal (50-75 characters)
✓ Proper hierarchy maintained

TC05: Touch Targets (Mobile)
✓ Buttons minimum 44×44px
✓ Links easy to tap (not too close together)
✓ Form fields easy to focus
✓ Adequate spacing between interactive elements

TC06: Content Visibility
✓ No content hidden on any device
✓ All features accessible
✓ Important content prioritized on mobile
✓ No horizontal scrolling

TC07: Tables
Mobile:
✓ Tables scroll horizontally OR
✓ Tables reformat to cards/lists
✓ Data readable without zooming

Desktop:
✓ Tables display in standard format
✓ All columns visible
✓ Proper alignment

TC08: Media Queries
✓ Correct styles apply at each breakpoint
✓ Smooth transitions between breakpoints
✓ No layout breaking at exact breakpoint values
✓ Test at ±1px from breakpoint

TC09: Orientation Change
✓ Layout adjusts on rotate (portrait ↔ landscape)
✓ No content loss
✓ Functionality maintained
✓ Form data preserved

TC10: Performance
Mobile:
✓ Page loads in < 3 seconds on 4G
✓ Images optimized for mobile
✓ Minimal data usage

Desktop:
✓ Page loads in < 2 seconds
✓ Smooth animations
✓ No lag or freezing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Real-World Example: E-Commerce Product Page**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE LAYOUT COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DESKTOP (1920×1080):
┌─────────────────────────────────────────────────────┐
│ [Logo]    [Search Bar]           [Cart] [Profile]  │
├──────────────┬──────────────────────────────────────┤
│              │  Product Image Gallery (Large)       │
│  Filters:    │  ┌────────┬────────┬────────┐       │
│  □ Category  │  │ Main   │ Thumb1 │ Thumb2 │       │
│  □ Price     │  │ Image  │ Thumb3 │ Thumb4 │       │
│  □ Brand     │  └────────┴────────┴────────┘       │
│  □ Rating    │                                      │
│              │  Product Title                       │
│              │  ★★★★☆ (245 reviews)                │
│              │  $99.99  [−] 1 [+]  [Add to Cart]   │
│              │                                      │
│              │  Description (full width)            │
│              │  Specifications, Reviews             │
└──────────────┴──────────────────────────────────────┘

TABLET (768×1024):
┌─────────────────────────────────────────────────────┐
│ [☰]  [Logo]     [Search]         [Cart] [Profile]  │
├─────────────────────────────────────────────────────┤
│          Product Image Gallery (Medium)             │
│          ┌────────────────────┐                     │
│          │   Main Image       │                     │
│          └────────────────────┘                     │
│          [Thumb1][Thumb2][Thumb3]                   │
│                                                      │
│  Product Title                                      │
│  ★★★★☆ (245 reviews)                               │
│  $99.99    [−] 1 [+]    [Add to Cart]              │
│                                                      │
│  [Filters]  [Description]  [Specs]  [Reviews]      │
│  (Tabs instead of sidebar)                          │
└─────────────────────────────────────────────────────┘

MOBILE (375×667):
┌──────────────────────┐
│ [☰][Logo]   [🔍][🛒] │
├──────────────────────┤
│   Main Product       │
│   Image (Full Width) │
│   ┌────────────────┐ │
│   │                │ │
│   │                │ │
│   └────────────────┘ │
│ [○][○][○][○]        │ (Dots for gallery)
│                      │
│ Product Title        │
│ $99.99               │
│ ★★★★☆ (245)         │
│                      │
│ [−]  1  [+]         │
│                      │
│ [   Add to Cart   ] │
│                      │
│ ▼ Description        │
│ ▼ Specifications     │
│ ▼ Reviews            │
│                      │
│ [Filter button fixed │
│  at bottom]          │
└──────────────────────┘

Key Differences Tested:
✓ Navigation: Full menu → Hamburger
✓ Layout: Sidebar → Stacked
✓ Gallery: Grid → Swipe carousel
✓ Filters: Sidebar → Bottom sheet/modal
✓ Buttons: Side-by-side → Full width
✓ Tabs: Horizontal → Accordions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.4 Cross-Browser Testing Tools

**Popular Tools:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CROSS-BROWSER TESTING TOOLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BROWSERSTACK
   - Cloud-based testing platform
   - 3000+ real devices and browsers
   - Live testing + automated testing
   - Screenshots across browsers
   - Price: From $29/month
   Use Case: Comprehensive cross-browser testing

2. LAMBDATEST
   - Cloud testing platform
   - 3000+ browsers & OS combinations
   - Real-time testing
   - Screenshot testing
   - Price: From $15/month
   Use Case: Budget-friendly alternative

3. SAUCE LABS
   - Cloud testing platform
   - Manual and automated testing
   - Mobile and desktop testing
   - Price: Enterprise pricing
   Use Case: Large teams, CI/CD integration

4. CROSSBROWSERTESTING (by SmartBear)
   - Live testing on real browsers
   - Visual testing
   - Screenshot comparison
   - Price: From $29/month
   Use Case: Visual regression testing

5. BROWSER DevTools (Free)
   - Chrome DevTools
   - Firefox Developer Tools
   - Safari Web Inspector
   - Edge DevTools
   Use Case: Local testing, debugging

6. RESPONSIVELY APP (Free)
   - Open-source tool
   - Multiple device views simultaneously
   - Synchronized interactions
   Use Case: Responsive design testing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```



---

## Functional Web Testing

### 2.1 Form Validation Testing

**Complete Form Testing Example:**

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER REGISTRATION FORM - COMPLETE TEST SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Form Fields:
- First Name (required, 2-50 characters, alphabets only)
- Last Name (required, 2-50 characters, alphabets only)
- Email (required, valid email format)
- Password (required, 8-20 characters, 1 uppercase, 1 number, 1 special)
- Confirm Password (must match password)
- Phone (optional, 10 digits)
- Date of Birth (required, user must be 18+)
- Terms & Conditions (checkbox, required)

TEST SCENARIOS:

TC-FORM-001: Submit with all valid data
Precondition: On registration page
Steps:
1. Enter First Name: "John"
2. Enter Last Name: "Doe"
3. Enter Email: "john.doe@example.com"
4. Enter Password: "Test@1234"
5. Enter Confirm Password: "Test@1234"
6. Enter Phone: "1234567890"
7. Enter DOB: "01/15/1990"
8. Check Terms & Conditions
9. Click "Register"
Expected: ✓ Registration successful
         ✓ Welcome email sent
         ✓ Redirect to dashboard

TC-FORM-002: First Name - Empty field
Steps: Leave First Name empty, fill others, submit
Expected: ✗ Error: "First Name is required"
         ✗ Field highlighted in red
         ✗ Form not submitted

TC-FORM-003: First Name - Too short (1 character)
Steps: Enter "J", fill others, submit
Expected: ✗ Error: "First Name must be at least 2 characters"

TC-FORM-004: First Name - Too long (51 characters)
Steps: Enter 51-character name, fill others, submit
Expected: ✗ Error: "First Name cannot exceed 50 characters"

TC-FORM-005: First Name - Numbers included
Steps: Enter "John123", fill others, submit
Expected: ✗ Error: "First Name can only contain letters"

TC-FORM-006: First Name - Special characters
Steps: Enter "John@Doe", fill others, submit
Expected: ✗ Error: "First Name can only contain letters"

TC-FORM-007: Email - Invalid format (missing @)
Steps: Enter "johndoe.com", fill others, submit
Expected: ✗ Error: "Please enter a valid email address"

TC-FORM-008: Email - Invalid format (missing domain)
Steps: Enter "john@", fill others, submit
Expected: ✗ Error: "Please enter a valid email address"

TC-FORM-009: Email - Already registered
Steps: Enter already registered email, fill others, submit
Expected: ✗ Error: "Email already registered. Please login."

TC-FORM-010: Password - Too short (< 8 characters)
Steps: Enter "Test@12", fill others, submit
Expected: ✗ Error: "Password must be at least 8 characters"

TC-FORM-011: Password - No uppercase
Steps: Enter "test@1234", fill others, submit
Expected: ✗ Error: "Password must contain at least one uppercase letter"

TC-FORM-012: Password - No number
Steps: Enter "Test@abcd", fill others, submit
Expected: ✗ Error: "Password must contain at least one number"

TC-FORM-013: Password - No special character
Steps: Enter "Test1234", fill others, submit
Expected: ✗ Error: "Password must contain at least one special character"

TC-FORM-014: Password strength indicator
Steps: Type password character by character
Expected: ✓ Indicator shows: Weak → Medium → Strong
         ✓ Color changes: Red → Yellow → Green

TC-FORM-015: Confirm Password - Mismatch
Steps: Password: "Test@1234", Confirm: "Test@1235"
Expected: ✗ Error: "Passwords do not match"

TC-FORM-016: Phone - Invalid format (letters)
Steps: Enter "abcd567890", fill others, submit
Expected: ✗ Error: "Phone number must contain only digits"

TC-FORM-017: Phone - Too short (9 digits)
Steps: Enter "123456789", fill others, submit
Expected: ✗ Error: "Phone number must be 10 digits"

TC-FORM-018: Phone - Too long (11 digits)
Steps: Enter "12345678901", fill others, submit
Expected: ✗ Error: "Phone number must be 10 digits"

TC-FORM-019: Date of Birth - Under 18
Steps: Enter DOB: "01/15/2020" (makes user 6 years old)
Expected: ✗ Error: "You must be at least 18 years old"

TC-FORM-020: Date of Birth - Invalid date (Feb 30)
Steps: Enter "02/30/2000"
Expected: ✗ Error: "Please enter a valid date"

TC-FORM-021: Date of Birth - Future date
Steps: Enter "12/31/2030"
Expected: ✗ Error: "Date of birth cannot be in the future"

TC-FORM-022: Terms & Conditions - Not checked
Steps: Fill all fields, leave T&C unchecked, submit
Expected: ✗ Error: "You must accept Terms & Conditions"

TC-FORM-023: Multiple validation errors
Steps: Leave all required fields empty, submit
Expected: ✓ All field errors displayed simultaneously
         ✓ Fields highlighted in red
         ✓ Summary error message at top

TC-FORM-024: Tab navigation
Steps: Use Tab key to navigate through fields
Expected: ✓ Focus moves to next field
         ✓ Visual focus indicator visible
         ✓ Logical tab order

TC-FORM-025: Copy-paste into password field
Steps: Copy password from elsewhere, paste
Expected: ✓ Paste works OR
         ✗ Paste disabled (security measure)
         ✓ Confirm password allows paste OR blocks consistently

TC-FORM-026: Auto-fill functionality
Steps: Use browser auto-fill
Expected: ✓ Fields populate correctly
         ✓ Validation triggers
         ✓ Form submits successfully

TC-FORM-027: Submit button - Double click prevention
Steps: Fill form, double-click "Register" quickly
Expected: ✓ Only one request sent
         ✓ Button disabled after first click
         ✓ Loading indicator shown

TC-FORM-028: Field max length enforcement
Steps: Try to type more than allowed characters
Expected: ✓ Cannot type beyond limit OR
         ✓ Extra characters not accepted

TC-FORM-029: Leading/trailing spaces in email
Steps: Enter " john@example.com " (with spaces)
Expected: ✓ Spaces trimmed automatically OR
         ✗ Error: "Email cannot contain spaces"

TC-FORM-030: Session timeout during form fill
Steps: Fill half the form, wait 30 minutes, submit
Expected: ✓ Session timeout message
         ✓ Data preserved OR warning given
         ✓ Redirect to login
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total: 30 test cases for one registration form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Client-Side vs Server-Side Validation Testing:**

```
Test Strategy:
1. Test with JavaScript ENABLED (client-side validation)
2. Test with JavaScript DISABLED (server-side validation)
3. Test by bypassing client-side (using Browser DevTools)

Example: Testing Email Validation

WITH JavaScript (Client-Side):
TC01: Enter invalid email "test@"
Expected: Immediate error message (before submit)
Result: ✓ Error appears instantly

WITHOUT JavaScript (Server-Side):
TC02: Disable JavaScript, enter invalid email "test@", submit
Expected: Server returns error after form submission
Result: ✓ Server validation catches error
       ⚠ If server doesn't validate = SECURITY RISK!

BYPASS Client-Side:
TC03: Use browser console to submit form with invalid data
Method: document.getElementById('email').value = 'invalid'
        document.forms[0].submit()
Expected: Server rejects invalid data
Result: ✓ Server validation prevents bypass
       ✗ If bypassed = CRITICAL BUG!
```

---

### 2.2 Navigation Testing

**Types of Navigation:**

**1. Main Navigation Menu:**
```
Test Scenarios:

TC-NAV-001: All menu items clickable
✓ Hover over each menu item
✓ Click each menu item
✓ Verify correct page loads

TC-NAV-002: Sub-menus (Dropdowns)
✓ Hover shows dropdown
✓ All dropdown items accessible
✓ Click navigates correctly
✓ Dropdown closes on selection or outside click

TC-NAV-003: Active page indicator
✓ Current page highlighted in menu
✓ Styling distinct from other menu items
✓ Indicator updates on navigation

TC-NAV-004: Mobile hamburger menu
✓ Hamburger icon appears on mobile
✓ Tap opens menu
✓ Menu items stack vertically
✓ Tap item navigates and closes menu
✓ Tap outside closes menu
```

**2. Breadcrumb Navigation:**
```
Example: Home > Products > Electronics > Laptops

TC-NAV-005: Breadcrumb accuracy
✓ All levels displayed correctly
✓ Reflects current page hierarchy
✓ Each level is clickable
✓ Clicking navigates to that level

TC-NAV-006: Breadcrumb on mobile
✓ Doesn't break layout
✓ Truncates appropriately if needed
✓ Still functional

TC-NAV-007: Deep navigation
Navigate: Home > Cat1 > Cat2 > Cat3 > Cat4 > Product
✓ All levels shown OR truncated intelligently
✓ Full path accessible (tooltip or expansion)
```

**3. Pagination:**
```
Scenario: Product listing with 500 items, 20 per page

TC-NAV-008: Pagination controls
✓ Page numbers displayed (1, 2, 3... 25)
✓ Previous/Next buttons present
✓ First/Last buttons present (if applicable)

TC-NAV-009: Page navigation
✓ Click page 5, loads page 5 correctly
✓ URL updates (e.g., /products?page=5)
✓ Current page highlighted
✓ Previous button disabled on page 1
✓ Next button disabled on last page

TC-NAV-010: Items per page selector
✓ Options: 20, 50, 100 per page
✓ Selecting updates display
✓ Pagination adjusts accordingly
✓ User selection persists across pages

TC-NAV-011: Jump to specific page
✓ Input field to enter page number
✓ Validates input (can't enter page 100 if only 25 pages)
✓ Navigates on Enter or button click
```



**4. Footer Navigation:**
```
TC-NAV-012: Footer links
✓ All footer links work
✓ Links open in same OR new tab (consistent)
✓ External links have indicator (icon)
✓ Footer accessible on all pages
```

**5. Back Button Behavior:**
```


TC-NAV-013: Browser back button
Scenario: Home → Products → Product Detail
✓ Click back from Product Detail → Returns to Products
✓ State preserved (scroll position, filters)
✓ No duplicate in history

TC-NAV-014: Back button after form submission
Scenario: Submit form → Confirmation page → Back button
✓ Warning about resubmission OR
✓ Returns to form without resubmitting OR
✓ Redirects appropriately

TC-NAV-015: Back button with login
Scenario: Login → Secure page → Back button
✓ Remains on secure page OR
✓ Returns but requires re-authentication
```

---

### 2.3 Link Testing

**Complete Link Testing:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LINK TESTING COMPREHENSIVE GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INTERNAL LINKS

TC-LINK-001: Internal links validity
✓ All internal links work (no 404 errors)
✓ Links navigate to correct pages
✓ Relative URLs work correctly

TC-LINK-002: Anchor links (same page)
Example: "Jump to Reviews" → #reviews section
✓ Page scrolls to correct section
✓ Smooth scroll (if implemented)
✓ Works on first visit and after navigation

2. EXTERNAL LINKS

TC-LINK-003: External links functionality
✓ External links work
✓ Open in new tab (target="_blank")
✓ Have rel="noopener noreferrer" (security)
✓ External link icon/indicator present

TC-LINK-004: External link security
Check: <a href="external.com" target="_blank"
        rel="noopener noreferrer">
✓ "noopener" prevents window.opener access
✓ "noreferrer" prevents referrer information leakage

3. BROKEN LINKS

TC-LINK-005: Broken link detection
Test all links on a page for:
✗ 404 Not Found
✗ 500 Server Error
✗ Timeout
✗ Redirect to error page

Method: Use tools like:
- W3C Link Checker
- Screaming Frog SEO Spider
- Broken Link Checker (Chrome extension)
- Dead Link Checker

4. REDIRECTS

TC-LINK-006: 301 Permanent redirects
Old URL → New URL
✓ Redirect works
✓ Status code: 301
✓ Final URL correct
✓ No redirect chains (A→B→C)

TC-LINK-007: 302 Temporary redirects
✓ Redirect works
✓ Status code: 302
✓ Used appropriately (temporary situations)

TC-LINK-008: Multiple redirects
✓ No more than 2 redirects in chain
✓ Final destination reached
✓ Performance acceptable

5. LINK TEXT AND ACCESSIBILITY

TC-LINK-009: Link text clarity
✗ Bad: "Click here" (not descriptive)
✓ Good: "Download 2026 Annual Report (PDF)"

TC-LINK-010: Link underline and styling
✓ Links visually distinct (color, underline)
✓ Hover state visible
✓ Visited links different color (if applicable)
✓ Focus state visible (for keyboard users)

6. SPECIAL LINK TYPES

TC-LINK-011: Email links (mailto)
<a href="mailto:support@example.com">
✓ Opens default email client
✓ Email address correct
✓ Subject prefilled (if specified)

TC-LINK-012: Phone links (tel)
<a href="tel:+1234567890">
✓ On mobile: Opens dialer
✓ On desktop: Offers to call (if Skype/app installed)
✓ Number formatted correctly

TC-LINK-013: Download links
<a href="/files/report.pdf" download>
✓ File downloads
✓ Correct file name
✓ File not corrupted
✓ Appropriate file size

TC-LINK-014: Deep links (mobile apps)
<a href="myapp://product/123">
✓ Opens app if installed
✓ Falls back to web if app not installed
✓ Correct page/content in app

7. DYNAMIC LINKS

TC-LINK-015: JavaScript-generated links
Links created by JavaScript after page load
✓ Links functional
✓ Work with JavaScript disabled (fallback)
✓ SEO-friendly (if applicable)

TC-LINK-016: Infinite scroll links
✓ Links in dynamically loaded content work
✓ Each item has unique URL
✓ Browser back button works correctly

8. LINK SECURITY

TC-LINK-017: HTTPS links
✓ All links use HTTPS (not HTTP)
✓ No mixed content warnings
✓ Certificate valid

TC-LINK-018: Malicious link protection
✓ User-generated links sanitized
✓ No javascript: protocol allowed
✓ No data: protocol for sensitive links
✗ Block: <a href="javascript:alert('XSS')">

9. PERFORMANCE

TC-LINK-019: Link preloading
<link rel="prefetch" href="next-page.html">
✓ Next likely page preloaded
✓ Improves performance
✓ Doesn't slow current page

TC-LINK-020: Link response time
✓ Links respond quickly (< 2 seconds)
✓ No dead-end pages
✓ Loading indicators for slow links

10. EDGE CASES

TC-LINK-021: Special characters in URLs
Test: /product/café+ñoño
✓ URL encoded correctly (%C3%A9)
✓ Page loads correctly
✓ Can navigate back

TC-LINK-022: Very long URLs
Test: /product?filter=...( 2000+ characters)
✓ URL works OR
✓ Appropriate error message

TC-LINK-023: Empty href
<a href="">Link</a> or <a href="#">Link</a>
✓ Doesn't cause page reload
✓ Appropriate behavior defined
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.4 Cookie and Session Management Testing

**Cookie Testing:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COOKIE TESTING SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-COOKIE-001: Cookie creation
Steps:
1. Visit website
2. Open DevTools → Application → Cookies
Expected:
✓ Necessary cookies created
✓ Cookie names appropriate
✓ Values encrypted (if sensitive)

TC-COOKIE-002: Cookie attributes
Check each cookie for:
✓ Domain: Correct domain set
✓ Path: Appropriate path
✓ Expires/Max-Age: Correct expiration
✓ HttpOnly: Set for sensitive cookies (prevents JS access)
✓ Secure: Set for HTTPS only
✓ SameSite: Set to Lax or Strict (CSRF protection)

Example Good Cookie:
Name: session_id
Value: [encrypted_value]
Domain: .example.com
Path: /
Expires: 2026-01-15 (or Session)
HttpOnly: ✓ Yes
Secure: ✓ Yes
SameSite: Lax

TC-COOKIE-003: Cookie acceptance banner
✓ Banner appears on first visit
✓ User can accept or reject
✓ Preferences saved
✓ Banner doesn't reappear after selection

TC-COOKIE-004: Cookie preferences
✓ User can manage cookie preferences
✓ Essential cookies can't be disabled
✓ Optional cookies can be disabled
✓ Changes apply immediately

TC-COOKIE-005: Cookie expiration
Steps:
1. Login (creates session cookie)
2. Wait for expiration time
3. Try to access protected page
Expected:
✓ Session expired
✓ Redirect to login
✓ Appropriate message shown

TC-COOKIE-006: Cookie size limits
✓ Cookies don't exceed 4KB limit
✓ Application handles cookie limit gracefully
✓ Use localStorage for large data

TC-COOKIE-007: Cookie deletion
Steps:
1. Set cookies
2. User logs out OR clicks "Clear cookies"
3. Check DevTools
Expected:
✓ Cookies deleted
✓ User logged out
✓ Session cleared

TC-COOKIE-008: Third-party cookies
✓ Check if third-party cookies used
✓ Necessary for functionality? (analytics, ads)
✓ Disclosed in privacy policy
✓ User can opt-out

TC-COOKIE-009: Cookies with JavaScript disabled
Steps:
1. Disable JavaScript
2. Use website
Expected:
✓ Essential features work OR
✓ Appropriate message shown

TC-COOKIE-010: Cross-site cookie behavior
Test SameSite attribute:
- SameSite=None: Sent with cross-site requests
- SameSite=Lax: Sent with top-level navigation
- SameSite=Strict: Only sent with same-site requests
Expected: Behavior matches SameSite setting
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Session Management Testing:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SESSION MANAGEMENT TEST SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-SESSION-001: Session creation on login
Steps:
1. User logs in
2. Check cookies/storage
Expected:
✓ Session ID created
✓ Unique for each user
✓ Unpredictable (secure random)
✓ Stored securely

TC-SESSION-002: Session timeout (inactivity)
Scenario: Timeout = 15 minutes
Steps:
1. Login
2. Browse for 10 minutes
3. Leave idle for 6 minutes
4. Try to perform action
Expected:
✓ Session expired message
✓ Redirect to login
✓ Data not lost (warning given)

TC-SESSION-003: Session timeout warning
Steps:
1. Login
2. Leave idle for 14 minutes
Expected:
✓ Warning shown: "Session expires in 1 minute"
✓ Option to extend session
✓ Click extend → Session renewed

TC-SESSION-004: Absolute session timeout
Scenario: Absolute timeout = 8 hours
Steps:
1. Login
2. Stay active for 8 hours (keep clicking)
Expected:
✓ Force logout after 8 hours
✓ Must re-login (even if active)

TC-SESSION-005: Multiple tabs/windows
Steps:
1. Login in Tab 1
2. Open website in Tab 2
Expected:
✓ Same session shared
✓ Actions in Tab 1 reflect in Tab 2
✓ Logout in Tab 1 logs out Tab 2

TC-SESSION-006: Concurrent sessions
Steps:
1. Login on Chrome
2. Login on Firefox (same user)
Expected:
✓ Both sessions work OR
✓ First session terminated OR
✓ Warning about multiple logins
Depends on security policy

TC-SESSION-007: Session on different devices
Steps:
1. Login on Desktop
2. Login on Mobile (same user)
Expected:
✓ Both work simultaneously OR
✓ Desktop session terminated OR
✓ User can manage active sessions

TC-SESSION-008: Session after logout
Steps:
1. Login
2. Logout
3. Press Back button
Expected:
✓ Cannot access protected pages
✓ Redirect to login
✓ Session fully terminated

TC-SESSION-009: Session after password change
Steps:
1. Login on Device A
2. On Device B, change password
3. On Device A, try to perform action
Expected:
✓ Session invalidated on Device A
✓ Must re-login with new password

TC-SESSION-010: Session hijacking prevention
Security test:
✓ Session ID not in URL
✓ Session ID regenerated on login
✓ Session ID regenerated on privilege change
✓ HTTPS only (prevents sniffing)
✓ HttpOnly cookie (prevents XSS)

TC-SESSION-011: Session fixation prevention
Attack scenario:
1. Attacker gets session ID
2. User logs in with that session ID
3. Attacker uses session ID
Expected:
✓ Session ID regenerated on login
✓ Old session ID invalid

TC-SESSION-012: Remember Me functionality
Steps:
1. Login with "Remember Me" checked
2. Close browser
3. Reopen browser, visit site
Expected:
✓ Still logged in
✓ Uses separate long-lived token (not session)
✓ Can be revoked in settings

TC-SESSION-013: Session data persistence
Steps:
1. Add items to cart
2. Close browser
3. Reopen browser
Expected:
✓ Cart items still present (if Remember Me)
✓ Cart cleared (if Remember Me not checked)
Depends on implementation

TC-SESSION-014: Session storage limits
Steps:
1. Store large amounts of data in session
Expected:
✓ Handles gracefully
✓ Doesn't exceed server limits
✓ Error handling if limit exceeded

TC-SESSION-015: Session across subdomains
Scenario: login.example.com, shop.example.com
Steps:
1. Login on login.example.com
2. Navigate to shop.example.com
Expected:
✓ Session maintained
✓ Cookie domain set to .example.com
✓ User still logged in
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.5 Search Functionality Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEARCH FUNCTIONALITY TEST SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-SEARCH-001: Basic search - Exact match
Search: "iPhone 14 Pro"
Expected:
✓ Returns products matching exact phrase
✓ Results displayed clearly
✓ Relevant results at top

TC-SEARCH-002: Partial keyword search
Search: "iPho" (partial word)
Expected:
✓ Auto-suggest shows: iPhone, iPhones, etc.
✓ Clicking suggestion searches that term

TC-SEARCH-003: Multiple keywords
Search: "wireless bluetooth headphones"
Expected:
✓ Returns products matching ALL keywords
✓ OR products matching ANY keyword (ranked by relevance)

TC-SEARCH-004: Case insensitivity
Search: "IPHONE" vs "iphone" vs "IpHoNe"
Expected:
✓ All return same results
✓ Case doesn't matter

TC-SEARCH-005: Special characters
Search: "Dell 15\" laptop"
Expected:
✓ Handles quotes correctly
✓ Doesn't break
✓ Returns relevant results

TC-SEARCH-006: Numbers in search
Search: "iPhone 14" vs "iPhone fourteen"
Expected:
✓ "iPhone 14" finds iPhone 14
✓ "iPhone fourteen" may find iPhone 14 (if smart search)

TC-SEARCH-007: Misspelling tolerance
Search: "aple watsh" (misspelled)
Expected:
✓ Shows: "Did you mean: apple watch?"
✓ Option to search anyway
✓ Auto-corrects (if enabled)

TC-SEARCH-008: No results found
Search: "xyznonexistentproduct123"
Expected:
✓ Message: "No results found for 'xyznonexistent product123'"
✓ Suggestions: "Try different keywords" or related searches
✓ Option to browse categories

TC-SEARCH-009: Too many results
Search: "phone" (very generic, 10,000 results)
Expected:
✓ Shows first page (e.g., 20 results)
✓ Total results displayed: "10,000 results"
✓ Filters available to narrow down
✓ Sorts available (relevance, price, rating)

TC-SEARCH-010: Empty search
Search: "" (empty string)
Expected:
✗ Error: "Please enter a search term" OR
✓ Shows popular/trending items

TC-SEARCH-011: Very long search query
Search: 200+ character string
Expected:
✓ Handles gracefully
✓ Truncates display if needed
✓ Still searches (or error if too long)

TC-SEARCH-012: Special character injection
Search: <script>alert('XSS')</script>
Expected:
✓ Escaped/sanitized
✓ No XSS vulnerability
✓ Treats as plain text

TC-SEARCH-013: SQL injection attempt
Search: ' OR '1'='1
Expected:
✓ Parameterized query prevents injection
✓ No database error
✓ Treats as plain text search

TC-SEARCH-014: Search within results
Steps:
1. Search "laptop"
2. Within results, search "gaming"
Expected:
✓ Refines to "gaming laptops"
✓ Maintains initial search context

TC-SEARCH-015: Search history
Steps:
1. Perform several searches
2. Click search box again
Expected:
✓ Recent searches shown
✓ Can click to repeat search
✓ Can clear history

TC-SEARCH-016: Search suggestions/auto-complete
Steps:
1. Type "lap" in search box
Expected:
✓ Suggestions appear: laptop, lap desk, laparoscopy tools
✓ Updates as typing continues
✓ Can navigate with arrow keys
✓ Enter key searches selected suggestion

TC-SEARCH-017: Voice search (if available)
Steps:
1. Click microphone icon
2. Say "wireless mouse"
Expected:
✓ Converts speech to text accurately
✓ Searches for "wireless mouse"
✓ Handles background noise

TC-SEARCH-018: Image search (if available)
Steps:
1. Upload image of product
2. Initiate search
Expected:
✓ Finds similar or same products
✓ Results ranked by similarity

TC-SEARCH-019: Filter integration
Steps:
1. Search "laptop"
2. Apply filter: Price $500-$1000
3. Apply filter: Brand Dell
Expected:
✓ Results filtered correctly
✓ Can remove filters individually
✓ Results update dynamically

TC-SEARCH-020: Sort options
Search: "laptop"
Options: Sort by Price (Low to High)
Expected:
✓ Results sorted correctly
✓ Cheapest laptop displayed first
✓ Sort persists during pagination

TC-SEARCH-021: Search result count
Search: "laptop"
Expected:
✓ Shows total results: "500 results for 'laptop'"
✓ Shows current page results: "Showing 1-20 of 500"
✓ Count updates with filters

TC-SEARCH-022: Search performance
Search: Generic term with 50,000 results
Expected:
✓ Results appear in < 2 seconds
✓ Page doesn't freeze
✓ Smooth user experience

TC-SEARCH-023: Search in specific category
Scenario: Electronics category page
Search: "wireless"
Expected:
✓ Searches only within Electronics
✓ Option to search all categories
✓ Current category indicated

TC-SEARCH-024: Faceted search
Search: "laptop"
Filters available:
- Brand
- Price range
- Screen size
- Processor
- RAM
- Storage
Expected:
✓ All filters work independently
✓ Multiple filters can be combined
✓ Active filters displayed
✓ Filter counts update dynamically

TC-SEARCH-025: Search result highlighting
Search: "bluetooth speaker"
Expected:
✓ Keywords highlighted in results
✓ Highlights in title and description
✓ Easy to see relevance

TC-SEARCH-026: Search pagination
Search: "phone" (1000 results)
Expected:
✓ Pagination controls present
✓ Page through results works
✓ URL updates with page number
✓ Direct link to page works

TC-SEARCH-027: Search synonyms
Search: "cellphone"
Expected:
✓ Returns results for "cell phone" and "mobile phone"
✓ Synonym matching intelligent

TC-SEARCH-028: Search by product code/SKU
Search: "DELL-XPS-13-2026"
Expected:
✓ Finds exact product
✓ Exact match at top of results

TC-SEARCH-029: Search persistence
Steps:
1. Search "laptop"
2. Click a product
3. Go back
Expected:
✓ Search results still displayed
✓ Scroll position preserved
✓ Filters maintained

TC-SEARCH-030: Mobile search experience
Device: iPhone
Expected:
✓ Search bar prominent
✓ Touch-friendly
✓ Auto-suggestions work
✓ Results mobile-optimized
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## UI/UX Testing

### 3.1 Layout and Alignment Checks

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UI/UX LAYOUT TESTING CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ALIGNMENT
□ Text aligned consistently (left, center, right, justified)
□ Form fields aligned (labels, inputs, buttons)
□ Images aligned properly
□ Icons aligned with text
□ Grid system consistent
□ Vertical alignment of elements

2. SPACING
□ Consistent margins (between sections)
□ Consistent padding (within elements)
□ White space appropriate (not too crowded)
□ Line height comfortable (1.5-1.6 for body text)
□ Letter spacing (kerning) appropriate

3. VISUAL HIERARCHY
□ Headings sizes decreasing (H1 > H2 > H3)
□ Important elements stand out
□ CTA buttons prominent
□ Less important info subdued

4. CONSISTENCY
□ Same elements look same across pages
□ Button styles consistent
□ Link styles consistent
□ Form field styles consistent
□ Card/box styles consistent

5. RESPONSIVE BEHAVIOR
□ Layout doesn't break at any width
□ Elements don't overlap
□ Text doesn't overflow containers
□ Images resize properly
□ No horizontal scrolling (unless intended)

6. COMMON LAYOUT ISSUES TO CHECK

Issue: Overlapping elements
Where: Navigation overlaps content on certain screen sizes
Test: Resize browser slowly, check all breakpoints
Fix: Adjust media queries, z-index values

Issue: Text overflow
Where: Long product names overflow card boundaries
Test: Long text inputs, different languages (German is longer)
Fix: Use ellipsis, word-wrap, or expand container

Issue: Broken grid
Where: 3-column layout shows 2.5 columns
Test: Various screen widths
Fix: Adjust grid columns at breakpoints

Issue: Misaligned buttons
Where: Submit button not aligned with form fields
Test: Visual inspection across pages
Fix: Standardize button positioning

Issue: Inconsistent spacing
Where: Some sections have 20px margin, others 30px
Test: Measure spacing with DevTools
Fix: Use CSS variables for consistent spacing

7. PIXEL-PERFECT TESTING

Method: Overlay design on implemented page
Tools: PerfectPixel extension, Avocode, Zeplin
Process:
1. Import design mockup
2. Overlay on webpage
3. Adjust opacity
4. Compare pixel-by-pixel
5. Document discrepancies

Tolerance: ±2px acceptable for most elements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.2 Color Scheme and Contrast

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR TESTING CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. COLOR CONTRAST (WCAG STANDARDS)

Normal text (< 18pt):
- WCAG AA: Minimum 4.5:1 contrast ratio
- WCAG AAA: Minimum 7:1 contrast ratio

Large text (≥ 18pt or 14pt bold):
- WCAG AA: Minimum 3:1 contrast ratio
- WCAG AAA: Minimum 4.5:1 contrast ratio

Test: Use tools like:
- WebAIM Contrast Checker
- Chrome DevTools Lighthouse
- WAVE browser extension

Example Tests:

TC-COLOR-001: Body text contrast
Text: #333333 on Background: #FFFFFF
Ratio: 12.6:1
Result: ✓ PASS (AA and AAA)

TC-COLOR-002: Link text contrast
Text: #0066CC on Background: #FFFFFF
Ratio: 6.7:1
Result: ✓ PASS AA, ⚠ FAIL AAA (need 7:1)

TC-COLOR-003: Button text contrast
Text: #FFFFFF on Background: #FF0000
Ratio: 4.0:1
Result: ⚠ FAIL AA (need 4.5:1 for normal text)

TC-COLOR-004: Gray text (often problematic)
Text: #999999 on Background: #FFFFFF
Ratio: 2.8:1
Result: ✗ FAIL (insufficient for any text)

2. COLOR BLINDNESS TESTING

Types to test:
- Deuteranopia (red-green, most common)
- Protanopia (red-green)
- Tritanopia (blue-yellow)
- Achromatopsia (total color blindness)

Tools:
- Color Oracle (free app)
- Toptal Color Blind Filter
- Chrome extension: Colorblinding

Common Issues:

Issue: Red/Green for error/success
Problem: Indistinguishable to red-green colorblind users
Solution: Use icons + text (✓ Success, ✗ Error)

Issue: Color-only information
Problem: "Click the green button" - which is green?
Solution: Use shape, position, text, icons

Issue: Charts using only color
Problem: Red vs green lines indistinguishable
Solution: Use patterns, markers, labels

TC-COLOR-005: Error message visibility
Normal: Red text "Error: Invalid email"
Colorblind: Still distinguishable?
Test: Apply colorblind filter
Expected: ✓ Icon present, ✓ Text readable

TC-COLOR-006: Form validation
Normal: Red border on error, green on success
Colorblind: Can user tell the difference?
Solution: Add icons (✗ for error, ✓ for success)

TC-COLOR-007: Status indicators
Example: Order status (Red=Pending, Yellow=Processing, Green=Delivered)
Problem: Colors alone not enough
Solution: Add text labels to each status

3. BRAND COLOR CONSISTENCY

TC-COLOR-008: Primary color usage
Expected: #0066CC used for all primary buttons
Test: Inspect all pages
Result: Check consistency across site

TC-COLOR-009: Color palette adherence
Defined palette:
- Primary: #0066CC
- Secondary: #FF6600
- Success: #28A745
- Error: #DC3545
- Warning: #FFC107

Test: No other colors used (except images)

4. DARK MODE (if applicable)

TC-COLOR-010: Dark mode contrast
Background: #121212 (dark gray, not pure black)
Text: #FFFFFF or #E0E0E0
Test: Still meets 4.5:1 ratio

TC-COLOR-011: Dark mode color adjustments
Problem: Colors designed for light mode may not work
Solution: Adjust saturation/brightness for dark mode
Example: Bright blue #0066CC → Lighter blue #5CA1FF

5. COLOR USAGE PRINCIPLES

TC-COLOR-012: Sufficient visual difference
Test: All interactive elements distinguishable
✓ Links distinct from plain text
✓ Buttons stand out from background
✓ Focused element clearly visible

TC-COLOR-013: Color psychology
✓ Red for errors, danger
✓ Green for success, go
✓ Yellow/Orange for warnings
✓ Blue for information
(Cultural differences may apply)

TC-COLOR-014: Overly bright colors
Problem: Neon colors (#00FF00) strain eyes
Test: No pure, bright colors for large areas
✓ Use muted, professional colors

TC-COLOR-015: Sufficient color variety
Problem: Everything is blue (links, buttons, headings)
Solution: Use color palette strategically
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.3 Font Consistency and Readability

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY TESTING CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FONT FAMILY CONSISTENCY

TC-FONT-001: Font family usage
Expected: Maximum 2-3 font families
Example:
- Headings: 'Roboto', sans-serif
- Body: 'Open Sans', sans-serif
- Code: 'Monaco', monospace

Test: Inspect elements, verify font-family
✗ Issue: 5 different fonts on one page

TC-FONT-002: Font fallbacks
Expected: font-family: 'Roboto', Arial, sans-serif;
Test: Disable custom fonts, check fallback
✓ Fallback font loads
✓ Layout doesn't break

2. FONT SIZES

Recommended minimum sizes:
- Body text: 16px (1rem)
- Small text: 14px (0.875rem)
- Large headings: 32-48px
- Mobile body: 16px+ (never less)

TC-FONT-003: Minimum font size
Test: Body text size
Expected: ≥ 16px
Reason: Smaller text hard to read, especially on mobile

TC-FONT-004: Font size hierarchy
H1 > H2 > H3 > H4 > Body > Small
Example:
- H1: 48px
- H2: 36px
- H3: 28px
- H4: 24px
- Body: 16px
- Small: 14px

Test: Visual hierarchy clear

TC-FONT-005: Consistent sizing
Test: All H2 elements same size across site
Expected: Consistency maintained

3. LINE HEIGHT (Leading)

Recommended:
- Body text: 1.5 to 1.6
- Headings: 1.2 to 1.3
- Small text: 1.4

TC-FONT-006: Line height for readability
Body text: 16px with line-height: 1.5 = 24px
Test: Comfortable to read
✗ Too tight: 1.2 or less
✗ Too loose: 2.0 or more

TC-FONT-007: Line height with font size
Larger text: smaller line-height ratio okay
Small text: needs larger line-height ratio
Example:
- 48px heading: line-height 1.2 = 57.6px (good)
- 16px body: line-height 1.5 = 24px (good)

4. LINE LENGTH (Measure)

Optimal: 50-75 characters per line
Maximum: 90 characters

TC-FONT-008: Line length on desktop
Test: Count characters in paragraph
Expected: 50-75 characters
✗ Too long: 100+ characters (hard to track)
✗ Too short: 30 characters (choppy reading)

TC-FONT-009: Line length on mobile
Test: Mobile view, full-width text
Expected: 35-50 characters
✓ Comfortable reading

5. FONT WEIGHT

TC-FONT-010: Font weight usage
- Normal: 400 (regular)
- Medium: 500 or 600
- Bold: 700
- Light: 300 (use sparingly)

Test: Appropriate weights used
✗ Issue: All text is bold (exhausting)
✗ Issue: All text is light (hard to read)

TC-FONT-011: Font weight accessibility
Test: Thin fonts (100-300)
Concern: Hard to read, poor contrast
Use: Sparingly, for decorative text only

6. SPECIAL TEXT CASES

TC-FONT-012: ALL CAPS text
Problem: Harder to read, appears as shouting
Use: Sparingly (button labels, short headings)
Test: No body text in all caps

TC-FONT-013: Italic text
Problem: Long italic text hard to read
Use: Emphasis, quotes, citations
Test: Not overused

TC-FONT-014: Underlined text
Reserved for: Links only
Test: Non-link text not underlined
Reason: Users expect underline = clickable

7. RESPONSIVE TYPOGRAPHY

TC-FONT-015: Font size scaling
Desktop: 16px body text
Tablet: 16px
Mobile: 16px (don't scale down below 16px)

Large headings may scale:
Desktop: 48px
Mobile: 32px

Test: Readability maintained at all sizes

8. FONT LOADING

TC-FONT-016: FOUT (Flash of Unstyled Text)
Issue: System font appears briefly before custom font loads
Solution: font-display: swap; in CSS
Test: Slow connection, check font loading

TC-FONT-017: FOIT (Flash of Invisible Text)
Issue: Text invisible until font loads
Solution: font-display: swap; (shows fallback immediately)
Test: Disable cache, reload page
Expected: Text visible immediately

9. SPECIAL CHARACTERS AND SYMBOLS

TC-FONT-018: Currency symbols
Test: $, €, £, ¥, ₹ display correctly
Expected: Not replaced with boxes

TC-FONT-019: Emoji support
Test: 😊, 🔥, 🎉 display correctly
Expected: Color emoji on supported platforms

TC-FONT-020: Math symbols
Test: ×, ÷, ±, ≤, ≥, ≠ display correctly
Expected: Correct symbols, not alternatives

10. MULTILINGUAL SUPPORT

TC-FONT-021: Non-Latin characters
Test: Chinese (你好), Arabic (مرحبا), Japanese (こんにちは)
Expected: Characters display correctly
Font must support character set

TC-FONT-022: Right-to-left (RTL) text
Test: Arabic, Hebrew content
Expected: Text flows right-to-left
Layout mirrors appropriately
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Accessibility Testing Basics

### 4.1 WCAG Guidelines Overview

**WCAG 2.1 Principles: POUR**

```
P - PERCEIVABLE
O - OPERABLE
U - UNDERSTANDABLE
R - ROBUST

Conformance Levels:
- Level A: Minimum (must have)
- Level AA: Mid-range (should have, most common target)
- Level AAA: Highest (nice to have)
```

**Key WCAG Success Criteria:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WCAG 2.1 KEY REQUIREMENTS (Level AA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PERCEIVABLE

1.1 Text Alternatives
□ All images have alt text (alt="description")
□ Decorative images: alt="" (empty)
□ Complex images: detailed description

1.3 Adaptable
□ Content can be presented in different ways
□ Logical reading order maintained
□ Semantic HTML used (headings, lists, tables)

1.4 Distinguishable
□ Color contrast: 4.5:1 for normal text, 3:1 for large text
□ Text can be resized 200% without loss of content
□ No information conveyed by color alone

2. OPERABLE

2.1 Keyboard Accessible
□ All functionality available from keyboard
□ No keyboard traps (can navigate away)
□ Visible focus indicator

2.4 Navigable
□ Skip navigation links present
□ Page titles descriptive
□ Focus order logical
□ Link purpose clear from text or context
□ Multiple ways to find content (menu, search, sitemap)
□ Headings and labels descriptive

2.5 Input Modalities
□ Target size: 44×44px minimum (touch targets)

3. UNDERSTANDABLE

3.1 Readable
□ Language of page specified (<html lang="en">)
□ Unusual words explained
□ Abbreviations explained on first use

3.2 Predictable
□ Consistent navigation across pages
□ Components behave consistently
□ No unexpected context changes

3.3 Input Assistance
□ Error messages clear and specific
□ Labels or instructions for user input
□ Error prevention for legal/financial/data

4. ROBUST

4.1 Compatible
□ Valid HTML (parses correctly)
□ Name, Role, Value available for all UI components
□ Status messages can be programmatically determined
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.2 Keyboard Navigation Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KEYBOARD NAVIGATION TEST SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-KB-001: Tab navigation
Test: Press Tab key repeatedly
Expected:
✓ Focus moves through all interactive elements
✓ Order: Top → Bottom, Left → Right (logical)
✓ Visible focus indicator on current element
✓ No elements skipped

TC-KB-002: Shift+Tab (reverse navigation)
Test: Press Shift+Tab
Expected:
✓ Focus moves backward
✓ Returns to previous interactive element

TC-KB-003: Enter/Space on links
Test: Focus on link, press Enter
Expected:
✓ Link activates (navigates to target)

TC-KB-004: Enter/Space on buttons
Test: Focus on button, press Enter or Space
Expected:
✓ Button activates (performs action)

TC-KB-005: Arrow keys in custom controls
Test: Focus on dropdown, press Down arrow
Expected:
✓ Opens dropdown
✓ Arrow keys navigate options
✓ Enter selects option
✓ Esc closes dropdown

TC-KB-006: Skip navigation link
Test: Tab from browser address bar
Expected:
✓ First element is "Skip to main content" link
✓ Press Enter jumps to main content
✓ Skips navigation menu

TC-KB-007: Modal dialog keyboard trap
Test: Open modal, press Tab
Expected:
✓ Focus trapped inside modal
✓ Can tab through modal elements
✓ Cannot tab to background
✓ Esc closes modal

TC-KB-008: Form navigation
Test: Tab through form fields
Expected:
✓ Moves from field to field
✓ Radio buttons: Arrow keys change selection
✓ Checkboxes: Space toggles
✓ Dropdown: Arrow keys + Enter

TC-KB-009: No keyboard trap
Test: Tab through entire page
Expected:
✓ Can always tab to next element
✓ Never stuck on one element
✓ Can always move focus

TC-KB-010: Access keys/shortcuts
Test: Alt+S (if shortcut defined)
Expected:
✓ Shortcut performs action
✓ Doesn't conflict with browser shortcuts
✓ Shortcut documented

TC-KB-011: Focus visibility
Test: Tab through page
Expected:
✓ Focused element clearly visible
✓ Outline or highlight present
✓ Contrast sufficient (3:1 minimum)

Example good focus indicator:
*:focus {
    outline: 3px solid #0066CC;
    outline-offset: 2px;
}

TC-KB-012: Carousel/Slider keyboard control
Test: Focus on carousel, use keyboard
Expected:
✓ Left/Right arrows change slides
✓ Can pause/play with Space or button
✓ All slides accessible via keyboard

TC-KB-013: Image zoom/gallery
Test: Focus on image, press Enter
Expected:
✓ Opens lightbox/modal
✓ Arrow keys navigate images
✓ Esc closes
✓ All controls keyboard-accessible

TC-KB-014: Autocomplete/Typeahead
Test: Type in search box
Expected:
✓ Suggestions appear
✓ Down arrow moves to suggestions
✓ Up/Down arrow navigates suggestions
✓ Enter selects suggestion
✓ Esc closes suggestions

TC-KB-015: Menu navigation (dropdown)
Test: Tab to menu, press Enter
Expected:
✓ Submenu opens
✓ Arrow keys navigate submenu items
✓ Esc closes submenu
✓ Tab moves to next top-level item

TC-KB-016: Table navigation
Test: Focus in table
Expected:
✓ Can tab through interactive cells
✓ If sortable: Space/Enter activates sort
✓ If editable: Enter enters edit mode

TC-KB-017: Drag-and-drop alternative
Test: Keyboard-only attempt to reorder items
Expected:
✓ Alternative method exists (buttons, context menu)
✓ Can achieve same result without mouse

TC-KB-018: Video/Audio player controls
Test: Focus on player, use keyboard
Expected:
✓ Space plays/pauses
✓ Arrow keys skip forward/backward
✓ M mutes
✓ F fullscreen
✓ All controls keyboard-accessible

TC-KB-019: Custom widgets (date picker, color picker)
Test: Focus on widget, use keyboard
Expected:
✓ Fully functional with keyboard
✓ Keyboard instructions provided or intuitive
✓ Follows WAI-ARIA authoring practices

TC-KB-020: Focus restoration after page reload
Test: Focus on element, refresh page
Expected:
✓ Focus returns to same element OR
✓ Focus returns to top of page (predictable behavior)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.3 Screen Reader Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN READER TESTING GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POPULAR SCREEN READERS:
- NVDA (Windows, free)
- JAWS (Windows, paid, industry standard)
- VoiceOver (Mac/iOS, built-in)
- TalkBack (Android, built-in)
- Narrator (Windows, built-in)

BASIC TESTING WITH NVDA (Windows):

Setup:
1. Download and install NVDA (free)
2. Restart computer
3. NVDA will auto-start
4. Control NVDA key is Insert or Caps Lock

Basic Commands:
- NVDA+Q: Quit NVDA
- Down arrow: Read next line
- Up arrow: Read previous line
- NVDA+Down: Read all
- H: Next heading
- Shift+H: Previous heading
- Tab: Next focusable element
- Enter: Activate link/button

TEST SCENARIOS:

TC-SR-001: Page title announcement
Test: Open page, NVDA announces
Expected: "Page Title - Website Name"
✓ Title descriptive
✓ Title unique per page

TC-SR-002: Heading structure
Test: Press H to jump through headings
Expected:
✓ H1 (one per page): Main page title
✓ H2: Major sections
✓ H3: Subsections
✓ Logical hierarchy (no skipping levels)
✓ Headings descriptive

TC-SR-003: Link announcements
Test: Tab to links, listen to announcement
Expected:
✓ "Link, Home" (announces it's a link + link text)
✓ Link text descriptive
✗ Bad: "Click here" (not descriptive)
✓ Good: "Download 2026 Annual Report (PDF)"

TC-SR-004: Image alt text
Test: Navigate to images
Expected:
✓ "Graphic, [Alt text description]"
✓ Alt text describes image content
✓ Decorative images: Skipped (alt="" or role="presentation")

TC-SR-005: Form fields
Test: Tab through form
Expected:
✓ "Email, edit, required" (label + field type + required status)
✓ Labels clearly associated with fields
✓ Error messages announced
✓ Required fields indicated

Example good form field:
<label for="email">Email Address *</label>
<input type="email" id="email" aria-required="true">

TC-SR-006: Buttons
Test: Focus on button
Expected:
✓ "Submit, button" (announces name + type)
✓ Button purpose clear from name

TC-SR-007: Lists
Test: Navigate to list
Expected:
✓ "List with 5 items"
✓ Each item: "Bullet, Item 1", "Bullet, Item 2", etc.
✓ Semantic list markup (<ul>, <ol>, <li>)

TC-SR-008: Tables
Test: Navigate to data table
Expected:
✓ "Table with 3 rows and 4 columns"
✓ Column headers announced
✓ Row headers announced (if applicable)
✓ Table markup: <table>, <th>, <tr>, <td>

TC-SR-009: Landmarks
Test: NVDA+F7 (Elements List) → Landmarks
Expected:
✓ Banner (header)
✓ Navigation (nav)
✓ Main (main content)
✓ Contentinfo (footer)
✓ Complementary (aside)
Can jump directly to each landmark

TC-SR-010: Dynamic content updates
Test: Add item to cart
Expected:
✓ "Item added to cart" announcement
✓ Uses aria-live region

Example:
<div aria-live="polite" aria-atomic="true">
  Item added to cart
</div>

TC-SR-011: Modal dialogs
Test: Open modal
Expected:
✓ Focus moves to modal
✓ Modal title announced
✓ Background content not accessible
✓ Esc closes modal

TC-SR-012: Error messages
Test: Submit form with errors
Expected:
✓ "Error, Email is required" announcement
✓ Focus moves to first error OR
✓ Error summary at top
✓ Each field error associated with field

TC-SR-013: Status messages
Examples:
- "Saving..."
- "Saved successfully"
- "3 new messages"

Test: Trigger status change
Expected:
✓ Status announced automatically
✓ Uses role="status" or aria-live="polite"

TC-SR-014: Skip links
Test: Tab from address bar
Expected:
✓ "Skip to main content, link" announced
✓ Activate link jumps to main content

TC-SR-015: ARIA labels
Test: Icon-only buttons
Expected:
✓ Button name announced (from aria-label)

Example:
<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>

Announces: "Close dialog, button" (not just "×, button")

TC-SR-016: Reading order
Test: NVDA+Down (Read All)
Expected:
✓ Content read in logical order
✓ Order matches visual order
✓ No content skipped

TC-SR-017: Language switching
Test: Page with English and Spanish text
Expected:
✓ Main language: <html lang="en">
✓ Spanish section: <span lang="es">Hola</span>
✓ Screen reader pronounces correctly

TC-SR-018: Custom controls (dropdowns, sliders)
Test: Focus on custom widget
Expected:
✓ Role announced (combobox, slider, etc.)
✓ Current value announced
✓ Instructions provided (aria-describedby)
✓ State changes announced

TC-SR-019: Loading states
Test: Page loading content
Expected:
✓ "Loading" or "Busy" announced
✓ aria-busy="true" on loading container
✓ Announcement when loading completes

TC-SR-020: Hidden content
Test: Content hidden with display:none or visibility:hidden
Expected:
✓ Hidden from screen readers
✓ Not announced
✓ Not focusable

Content hidden visually but available to SR:
.sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.4 Accessibility Testing Tools

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY TESTING TOOLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. AUTOMATED TOOLS

WAVE (Web Accessibility Evaluation Tool)
- URL: wave.webaim.org
- Type: Browser extension + online tool
- Free: Yes
- Features:
  • Visual feedback on page
  • Identifies errors, warnings, features
  • Shows structure (headings, landmarks)
  • Color contrast analyzer
- Best for: Quick initial scan

AXE DevTools
- Type: Browser extension (Chrome, Firefox)
- Free: Yes (paid version available)
- Features:
  • Runs in DevTools
  • Identifies WCAG violations
  • Provides remediation advice
  • Intelligent guided tests
- Best for: Developer testing

Lighthouse
- Type: Built into Chrome DevTools
- Free: Yes
- Features:
  • Accessibility score (0-100)
  • Performance, SEO, PWA audits too
  • Detailed recommendations
- Best for: Overall audit

Pa11y
- Type: Command-line tool
- Free: Yes
- Features:
  • Automated testing
  • CI/CD integration
  • HTML reports
- Best for: Automated testing in build pipeline

2. MANUAL TESTING TOOLS

Screen Readers:
- NVDA (Windows, free)
- JAWS (Windows, paid)
- VoiceOver (Mac, built-in)
- TalkBack (Android, built-in)

Color Contrast Checkers:
- WebAIM Contrast Checker
- Colour Contrast Analyser (CCA)
- Chrome DevTools (inspect element → contrast ratio)

Keyboard Testing:
- Just your keyboard! (Tab, Shift+Tab, Enter, Space, Arrows)

Color Blindness Simulators:
- Color Oracle (free app)
- Chrome extension: Colorblinding
- Toptal Color Blind Filter

HTML Validators:
- W3C Markup Validation Service
- Nu Html Checker

3. TESTING CHECKLIST

Automated Test (15 minutes):
□ Run WAVE scan
□ Run axe DevTools
□ Run Lighthouse audit
□ Fix all critical errors
□ Address warnings

Manual Test (30 minutes):
□ Keyboard navigation (all features)
□ Screen reader test (NVDA or VoiceOver)
□ Zoom to 200% (text still readable)
□ Color contrast check (main elements)
□ Color blindness simulation
□ Test with images disabled
□ Test with CSS disabled

Comprehensive Test (2 hours):
□ All automated tests
□ All manual tests
□ Test with multiple screen readers
□ User testing with persons with disabilities
□ WCAG compliance audit (A, AA, or AAA)

4. COMMON ISSUES FOUND BY TOOLS

From WAVE:
✗ Missing alt text on images
✗ Empty links
✗ Missing form labels
✗ Low contrast text
✗ Missing page title
✗ Missing language attribute

From axe DevTools:
✗ Color contrast insufficient
✗ ARIA attributes incorrect
✗ Heading levels skipped
✗ Form elements not labeled
✗ Focus order incorrect

From Lighthouse:
✗ Buttons don't have accessible names
✗ Images don't have alt attributes
✗ Links don't have discernible names
✗ Background and foreground colors lack contrast
✗ HTML doesn't have lang attribute

5. REMEDIATION PRIORITIES

P0 (Critical - Fix Immediately):
- Keyboard traps
- Insufficient color contrast for text
- Missing form labels
- No alt text on important images
- Links with no text

P1 (High - Fix Soon):
- Heading hierarchy issues
- Missing ARIA labels on icon buttons
- Improper use of ARIA
- Missing page language
- Complex tables without proper markup

P2 (Medium - Address Next):
- Decorative images not marked as such
- Missing skip links
- Non-descriptive link text
- Minor contrast issues on non-critical elements

P3 (Low - Nice to Have):
- Minor HTML validation errors
- Redundant ARIA attributes
- Opportunities for better semantics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Summary & Key Takeaways

### Day 8 Key Concepts:

1. **Web Testing Fundamentals:**
   - Client-side vs Server-side testing
   - Browser compatibility testing (Chrome, Safari, Firefox, Edge)
   - Responsive design testing (mobile, tablet, desktop)
   - Cross-browser testing tools

2. **Functional Web Testing:**
   - Form validation testing (30+ test cases for one form)
   - Navigation testing (menu, breadcrumbs, pagination)
   - Link testing (internal, external, broken links)
   - Cookie and session management
   - Search functionality testing

3. **UI/UX Testing:**
   - Layout and alignment checks
   - Color contrast testing (WCAG standards)
   - Typography and font consistency
   - Visual hierarchy

4. **Accessibility Testing:**
   - WCAG 2.1 guidelines (POUR principles)
   - Keyboard navigation testing
   - Screen reader testing (NVDA, VoiceOver)
   - Accessibility tools (WAVE, axe, Lighthouse)

### Best Practices:

✓ Test on real devices, not just emulators
✓ Use automated tools + manual testing
✓ Ensure 4.5:1 contrast ratio for normal text
✓ All functionality available via keyboard
✓ Provide text alternatives for images
✓ Use semantic HTML
✓ Test with screen readers regularly

### Tomorrow's Preview:

Day 9 will cover:
- Security Testing Basics (SQL injection, XSS, CSRF, OWASP Top 10)
- Performance Testing Manual Aspects
- Database Testing
- API Testing Fundamentals with Postman

---

**Congratulations on completing Day 8!**

**Study Time:** 4-5 hours

---

*End of Day 8 Study Guide*
