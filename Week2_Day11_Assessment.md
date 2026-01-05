# Day 11 Assessment: Specialized Testing Types
## Localization, Accessibility, Usability, Compatibility Testing

**Duration:** 60 minutes
**Total Points:** 100
**Passing Score:** 70%

---

## Section A: Multiple Choice Questions (40 points)
*Choose the best answer for each question (2 points each)*

### Localization & Internationalization

1. What is the difference between i18n and L10n?
   - A) They are the same thing
   - B) i18n is architecture, L10n is adaptation
   - C) L10n is architecture, i18n is adaptation
   - D) i18n is for iOS, L10n is for Android

2. Which language typically expands 30-40% compared to English?
   - A) Spanish
   - B) Chinese
   - C) German/Finnish
   - D) Japanese

3. What is RTL in localization testing?
   - A) Right-to-Left languages (Arabic, Hebrew)
   - B) Run-Time Loading
   - C) Rapid Testing Localization
   - D) Resource Translation Layer

4. What should happen with numbers in RTL languages?
   - A) Display right-to-left like text
   - B) Display left-to-right (123, not 321)
   - C) Use Arabic numerals only
   - D) Reverse the order

### Accessibility Testing (WCAG)

5. What is the MINIMUM color contrast ratio for normal text (WCAG Level AA)?
   - A) 3:1
   - B) 4.5:1
   - C) 7:1
   - D) 10:1

6. What are the FOUR principles of WCAG 2.1?
   - A) Perceivable, Operable, Understandable, Robust
   - B) Visible, Clickable, Readable, Stable
   - C) Accessible, Usable, Compatible, Maintainable
   - D) Clear, Simple, Fast, Secure

7. Which ARIA attribute hides content from screen readers?
   - A) aria-hidden="true"
   - B) aria-invisible="true"
   - C) aria-skip="true"
   - D) aria-exclude="true"

8. What is the purpose of "alt" text for images?
   - A) SEO optimization
   - B) Alternative text for screen readers
   - C) Image caption
   - D) Copyright notice

9. Which WCAG conformance level is most commonly targeted by organizations?
   - A) Level A
   - B) Level AA
   - C) Level AAA
   - D) Level A+

10. What does "keyboard accessible" mean?
    - A) Has keyboard shortcuts
    - B) All functionality available via keyboard without mouse
    - C) Keyboard is wireless
    - D) Works with virtual keyboards

### Usability Testing

11. How many users does Nielsen recommend for usability testing to find 85% of issues?
    - A) 3 users
    - B) 5 users
    - C) 10 users
    - D) 20 users

12. What is the "Think Aloud" protocol in usability testing?
    - A) Tester talks to user during test
    - B) User verbalizes thoughts while performing tasks
    - C) Team discusses results after test
    - D) User reads instructions aloud

13. What does SUS stand for in usability metrics?
    - A) Standard Usability Score
    - B) System Usability Scale
    - C) Software User Satisfaction
    - D) Simple Usage Standard

14. What is Nielsen's Heuristic #1?
    - A) User control and freedom
    - B) Consistency and standards
    - C) Visibility of system status
    - D) Error prevention

15. What is considered a "good" SUS score?
    - A) Above 50
    - B) Above 68
    - C) Above 80
    - D) Above 90

### Compatibility Testing

16. Which browser has the HIGHEST market share in 2026?
    - A) Safari
    - B) Firefox
    - C) Chrome
    - D) Edge

17. What tool would you use to check CSS feature support across browsers?
    - A) W3C Validator
    - B) Can I Use (caniuse.com)
    - C) Google Analytics
    - D) PageSpeed Insights

18. Which platform requires vendor prefixes for CSS properties?
    - A) Modern browsers don't need prefixes
    - B) Older browsers may need prefixes (-webkit-, -moz-)
    - C) Only Internet Explorer needs prefixes
    - D) Prefixes are only for animations

19. What is BrowserStack used for?
    - A) Browser development
    - B) Cloud-based cross-browser testing
    - C) Browser performance monitoring
    - D) Browser security testing

20. What is the difference between macOS keyboard shortcuts and Windows?
    - A) No difference
    - B) macOS uses ⌘ (Command), Windows uses Ctrl
    - C) macOS uses Alt, Windows uses Option
    - D) Shortcuts are identical across platforms

---

## Section B: True/False Questions (20 points)
*Mark each statement as True (T) or False (F) (1 point each)*

21. i18n stands for "Internationalization" (i + 18 letters + n). ___
22. Concatenated strings are a good practice for localization. ___
23. UTF-8 encoding should be used for supporting multiple character sets. ___
24. Color alone can be used to convey information in accessible design. ___
25. WCAG Level AAA is required for all websites by law. ___
26. Screen readers can read text in images if alt text is provided. ___
27. Every form field should have an associated <label> element. ___
28. Keyboard focus should always be visible to users. ___
29. Decorative images should have descriptive alt text. ___
30. Moderated usability testing allows asking follow-up questions. ___
31. A/B testing explains WHY users prefer one option. ___
32. Task success rate is a quantitative usability metric. ___
33. Nielsen's heuristic "Error Prevention" means showing good error messages. ___
34. Usability testing should only be done with expert users. ___
35. Browser emulators are 100% accurate for compatibility testing. ___
36. WebP image format is supported by all browsers. ___
37. CSS Grid Layout requires fallbacks for older browsers. ___
38. Font rendering differs between Windows, macOS, and Linux. ___
39. Mobile Safari and Desktop Safari always render pages identically. ___
40. Cross-browser testing tools eliminate the need for real device testing. ___

---

## Section C: Scenario-Based Questions (20 points)
*Provide detailed answers (5 points each)*

### Scenario 1: Localization Bug Discovery
Your e-commerce site is being translated to German. Testers report that many buttons show truncated text like "Einkaufswagen hinz..." instead of "Einkaufswagen hinzufügen" (Add to cart). The layout looks fine in English.

**Questions:**
a) What is causing this issue? (1 point)
b) Why does this happen specifically with German? (1 point)
c) How should this be prevented during design and development? (2 points)
d) What test cases would catch this issue? (1 point)

---

### Scenario 2: Accessibility Audit Failure
Your website fails WCAG AA audit with these issues:
1. Light gray text (#999) on white background
2. Form fields without labels
3. Dropdown menu not keyboard accessible
4. Images missing alt text

**Questions:**
a) For each issue, explain the WCAG principle it violates. (2 points)
b) How would you fix each issue? (2 points)
c) What tools could detect these issues automatically? (1 point)

---

### Scenario 3: Usability Test Results
You conducted usability testing with 5 users on a checkout flow. Results:
- 2 users completed checkout successfully (40% success rate)
- 3 users abandoned at payment step
- Average time: 8 minutes (target was 2 minutes)
- All users complained: "I don't know where to enter my discount code"

**Questions:**
a) What is the primary usability issue? (1 point)
b) Which Nielsen heuristic is violated? (1 point)
c) What metrics show poor usability? (1 point)
d) How would you improve this? (2 points)

---

### Scenario 4: Browser Compatibility Issue
Users report that your web application works perfectly in Chrome and Edge, but in Firefox:
- The sidebar navigation is missing
- The layout is broken
- Console shows errors about CSS Grid not working

**Questions:**
a) What is the likely cause? (1 point)
b) How would you investigate this issue? (2 points)
c) What is the proper solution? (2 points)

---

## Section D: Practical Exercise (20 points)
*Complete the following exercises*

### Exercise 1: Accessibility Test Cases (10 points)
You're testing a login page that has:
- Email and Password fields
- "Remember Me" checkbox
- "Login" button
- "Forgot Password?" link

Write 5 WCAG-compliant accessibility test cases covering:
- Keyboard accessibility
- Screen reader compatibility
- Color contrast
- Form labels
- Focus indicators

**Format:**
```
TC-ID: [Test case ID]
WCAG Guideline: [Which guideline]
Test: [What to test]
Expected Result: [What should happen]
```

---

### Exercise 2: Localization Testing Checklist (10 points)
Your mobile app is being localized for:
- Spanish (Latin America)
- Arabic (RTL language)
- Japanese (different character set)

Create a comprehensive localization testing checklist covering:
a) Translation completeness (2 points)
b) Layout and UI adaptation (2 points)
c) Cultural considerations (2 points)
d) Formatting (dates, currency, numbers) (2 points)
e) RTL-specific tests for Arabic (2 points)

---

## BONUS Section: Advanced Questions (+10 points)

### Bonus 1: ARIA Implementation (5 points)
Explain how ARIA (Accessible Rich Internet Applications) enhances accessibility.
Provide examples of:
- 3 ARIA roles and when to use them
- 3 ARIA properties and their purposes
- When NOT to use ARIA (when native HTML is better)

### Bonus 2: Usability vs Accessibility vs Compatibility (5 points)
Compare and contrast:
- Usability Testing: Goal, methods, who benefits
- Accessibility Testing: Goal, standards, who benefits
- Compatibility Testing: Goal, approach, who benefits

How do these three types of testing complement each other?

---

## Answer Key

### Section A: Multiple Choice
1. B (i18n = architecture/design for internationalization, L10n = actual adaptation/translation)
2. C (German and Finnish expand 30-40% compared to English)
3. A (Right-to-Left languages like Arabic, Hebrew, Persian, Urdu)
4. B (Numbers always display left-to-right, even in RTL languages)
5. B (4.5:1 is minimum for normal text at WCAG Level AA)
6. A (Perceivable, Operable, Understandable, Robust - POUR)
7. A (aria-hidden="true" hides elements from screen readers)
8. B (Alt text provides text alternative for screen readers)
9. B (Level AA is the most common target - balances accessibility with feasibility)
10. B (All functionality must work without a mouse, keyboard only)
11. B (5 users find ~85% of usability issues according to Nielsen)
12. B (User verbalizes their thoughts while performing tasks)
13. B (System Usability Scale - 10 question survey)
14. C (Visibility of system status - keep users informed)
15. B (Above 68 is good; 68 is the average SUS score)
16. C (Chrome has ~63% market share on both desktop and mobile)
17. B (Can I Use website shows feature support across browsers)
18. B (Older browsers may require vendor prefixes for certain CSS features)
19. B (BrowserStack provides cloud-based cross-browser testing)
20. B (macOS uses Command key ⌘, Windows uses Ctrl)

### Section B: True/False
21. T (i18n = i + 18 characters + n)
22. F (Concatenation breaks translations; use placeholders instead)
23. T (UTF-8 supports all character sets)
24. F (Color should not be the sole means - add icons, text, patterns)
25. F (Level AA is common; AAA is not required for conformance)
26. T (Screen readers read alt text, not the actual image)
27. T (Every form field needs a <label> for accessibility)
28. T (Keyboard focus must be visible - 3:1 contrast minimum)
29. F (Decorative images should have empty alt="" attribute)
30. T (Moderated allows real-time probing and follow-up questions)
31. F (A/B testing shows WHAT works, not WHY)
32. T (Task success rate is a measurable quantitative metric)
33. F (Error Prevention means PREVENTING errors, not just messaging)
34. F (Test with representative users, not experts)
35. F (Emulators/simulators have limitations, need real testing)
36. F (WebP support varies; Safari 14+ supports it, not all browsers)
37. T (CSS Grid needs fallbacks for older browsers like IE11)
38. T (Font rendering engines differ across operating systems)
39. F (Mobile and desktop Safari can render differently)
40. F (Cloud tools help but don't eliminate need for real device testing)

### Section C: Scenario Answers

**Scenario 1:**
a) Text truncation due to insufficient button width
b) German words are typically 30-40% longer than English equivalents
c) Prevention: 1) Design with 40% extra space for text expansion, 2) Use flexible layouts (not fixed widths), 3) Test with pseudo-localization early, 4) Use longest expected translations during design
d) Test cases: 1) Switch to German locale and verify all UI text, 2) Check all buttons fit text without truncation, 3) Test with longest translations, 4) Verify text in different screen sizes

**Scenario 2:**
a) Issues:
   1. Low contrast - violates Perceivable (1.4.3 Contrast)
   2. No labels - violates Understandable (3.3.2 Labels/Instructions)
   3. No keyboard access - violates Operable (2.1.1 Keyboard)
   4. Missing alt - violates Perceivable (1.1.1 Non-text Content)

b) Fixes:
   1. Change text to #767676 or darker (4.5:1 ratio minimum)
   2. Add <label for="field-id"> for each field
   3. Ensure Tab key navigates through menu, Enter/Space activates
   4. Add descriptive alt="" text for each image

c) Tools: WAVE, axe DevTools, Lighthouse, Pa11y, NVDA/JAWS screen readers

**Scenario 3:**
a) Primary issue: Discount code field not visible/findable - lack of discoverability
b) Violates: #6 "Recognition rather than recall" - users must remember discount exists; #2 "Visibility of system status" - not clear where/how to use discount
c) Poor metrics: 40% success rate (target >90%), 8 min vs 2 min target, Low satisfaction
d) Improvements: 1) Make discount field prominent on payment page, 2) Add "Have a discount code?" section that's always visible, 3) Show where discount will be applied, 4) Test with users to verify discoverability

**Scenario 4:**
a) Firefox doesn't support CSS Grid as implemented (missing vendor prefix or using unsupported features)
b) Investigate: 1) Check Firefox console for specific errors, 2) Use Can I Use to check Grid support in Firefox version, 3) Validate CSS syntax, 4) Check if vendor prefixes needed, 5) Test in different Firefox versions
c) Solution: 1) Add fallback layout for browsers without Grid support, 2) Use feature detection (@supports), 3) Provide alternative layout (flexbox or float), 4) Test in target Firefox versions

### Section D: Practical Answers
*Answers will vary but should demonstrate understanding of:*
- WCAG guidelines and specific success criteria
- Accessibility testing techniques
- Localization challenges and solutions
- Cultural adaptation requirements
- Proper test case structure

**Exercise 1 Sample:**
```
TC-A11Y-001
WCAG: 2.1.1 Keyboard - Level A
Test: Navigate entire login form using only Tab, Shift+Tab, Enter
Expected: All fields focusable, visual focus indicator visible, can submit with Enter

TC-A11Y-002
WCAG: 3.3.2 Labels or Instructions - Level A
Test: Inspect each form field for <label> element
Expected: Email field has <label for="email">, Password has <label for="password">

TC-A11Y-003
WCAG: 1.4.3 Contrast (Minimum) - Level AA
Test: Check color contrast of all text using contrast checker
Expected: All text has 4.5:1 minimum contrast ratio

TC-A11Y-004
WCAG: 2.4.7 Focus Visible - Level AA
Test: Tab through all interactive elements
Expected: Clear focus indicator visible on each element (outline, border, background change)

TC-A11Y-005
WCAG: 4.1.2 Name, Role, Value - Level A
Test: Use screen reader (NVDA/JAWS) to navigate form
Expected: Screen reader announces "Email, edit text" for email field, "Password, password edit text" for password, "Remember Me, checkbox not checked"
```

**Exercise 2 Sample Checklist:**

a) Translation Completeness:
- All UI text translated (buttons, labels, messages)
- Error messages translated
- Help text/tooltips translated
- No English leaking through

b) Layout/UI Adaptation:
- Text fits in buttons (no truncation)
- No overlapping elements
- Line breaks appropriate
- Images/text don't overlap

c) Cultural Considerations:
- Date format correct (DD/MM/YYYY vs MM/DD/YYYY)
- Currency symbol and format correct
- Colors culturally appropriate
- Images not offensive

d) Formatting:
- Spanish: Currency as $1.234,56 (period thousands, comma decimal)
- Arabic: Currency with local symbol, right-aligned
- Japanese: Date as 2026年1月5日

e) RTL-Specific (Arabic):
- Text flows right-to-left
- UI mirrored horizontally
- Navigation reversed
- Numbers still left-to-right
- Scrollbars on left side

---

**Scoring Guide:**
- 90-100: Excellent - Strong understanding of specialized testing
- 80-89: Very Good - Good grasp of concepts, minor gaps
- 70-79: Good - Adequate understanding, needs improvement in some areas
- 60-69: Satisfactory - Basic understanding, significant gaps
- Below 60: Needs Improvement - Review material and retake

**End of Assessment**
