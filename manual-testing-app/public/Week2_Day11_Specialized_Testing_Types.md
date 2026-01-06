# Day 11: Specialized Testing Types
## Comprehensive Study Guide

---

## Table of Contents
1. [Localization & Internationalization Testing](#localization--internationalization-testing)
2. [Accessibility Testing (WCAG Deep Dive)](#accessibility-testing-wcag-deep-dive)
3. [Usability Testing](#usability-testing)
4. [Compatibility Testing](#compatibility-testing)
5. [Practical Exercises](#practical-exercises)
6. [Assessment Questions](#assessment-questions)

---

## Localization & Internationalization Testing

### 1.1 Understanding i18n and L10n

**Definitions:**

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERNATIONALIZATION (i18n) vs LOCALIZATION (L10n)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INTERNATIONALIZATION (i18n)
"i" + 18 letters + "n"

Definition: Designing software so it CAN be adapted to various languages and regions WITHOUT code changes.

Key Activities:
✓ Externalizing strings (not hardcoded)
✓ Supporting Unicode (UTF-8)
✓ Using locale-aware functions
✓ Designing flexible UI layouts
✓ Separating code from content
✓ Supporting multiple character sets

Example:
// BAD (Not internationalized)
message = "Welcome, " + userName + "!";

// GOOD (Internationalized)
message = getMessage("welcome_message", userName);

When: During development (architecture decision)
Responsibility: Developers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LOCALIZATION (L10n)
"L" + 10 letters + "n"

Definition: Adapting software for a SPECIFIC language, region, or culture.

Key Activities:
✓ Translating text
✓ Adapting date/time formats
✓ Adapting currency formats
✓ Adapting number formats
✓ Using local images/colors
✓ Adjusting layout for text expansion
✓ Cultural adaptation

Example:
English: "Welcome, John!"
Spanish: "¡Bienvenido, John!"
Japanese: "ようこそ、Johnさん!"
Arabic: "!John ،مرحبا" (RTL - Right-to-Left)

When: After development, per target market
Responsibility: Translators, localization team, QA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RELATIONSHIP:
i18n (once) → L10n (many times)

Think of it as:
i18n = Building a house with removable wallpaper
L10n = Changing the wallpaper for each customer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.2 Language Translation Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRANSLATION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-L10N-001: Translation completeness
Steps:
1. Switch to target language (e.g., Spanish)
2. Navigate through all screens
3. Check every UI element

Expected:
✓ All text translated (no English remnants)
✓ Buttons, labels, messages in target language
✓ Error messages translated
✓ Help text translated
✗ No "Lorem ipsum" placeholder text

Common Issues:
✗ "Login" button not translated
✗ Error message still in English
✗ Hardcoded strings not externalized

TC-L10N-002: Translation accuracy
Prerequisite: Native speaker review
Steps: Review translations for correctness

Expected:
✓ Translations accurate (correct meaning)
✓ Context-appropriate (formal vs informal)
✓ Industry terminology correct
✓ No awkward phrasing

Example Issues:
✗ Machine translation errors (Google Translate)
✗ Wrong context (e.g., "Bank" = financial vs riverbank)
✗ Overly literal translation

TC-L10N-003: Text expansion (truncation)
Context: Many languages expand compared to English

Expansion Examples:
English → German: +30% average
English → Spanish: +20-30%
English → French: +15-20%
English → Finnish: +30-40%

Test Case:
English: "Submit" (6 characters)
German: "Einreichen" (10 characters)
Spanish: "Enviar" (6 characters)
French: "Soumettre" (9 characters)

Steps:
1. Switch to language with expansion
2. Check all UI elements

Expected:
✓ Text fits in buttons (no truncation)
✓ Labels not cut off
✓ Dialogs resize appropriately
✗ No text overflow

Design Tips:
✓ Allow 30-40% extra space for buttons
✓ Use responsive layouts
✓ Test with longest expected translation

TC-L10N-004: Text contraction
Context: Some languages are shorter

Examples:
English → Chinese: -30% or more
English → Japanese: -10-20%

Steps: Switch to shorter language, check layout

Expected:
✓ UI still looks good (not stretched)
✓ Appropriate spacing maintained

TC-L10N-005: Concatenated strings
Bad Practice Example:
English: message = "Hello, " + name + "!"
French: message = "Bonjour, " + name + "!"

Problem:
German: "Hallo, " + name + "!" (works)
Spanish: "¡Hola, " + name + "!" (¡ before name - doesn't work!)

Test:
✓ No broken sentences
✓ Grammar correct with variables

Solution: Use placeholders
English: "Hello, {name}!"
Spanish: "¡Hola, {name}!"

TC-L10N-006: Pluralization rules
English: Simple (1 item, 2+ items)
1 item
2 items

Other languages: More complex

Arabic: 6 plural forms
0, 1, 2, 3-10, 11-99, 100+

Russian: 3 forms
1, 2-4, 5+
1 файл (1 file)
2 файла (2 files)
5 файлов (5 files)

Test Case:
Steps: Test with 0, 1, 2, 3, 5, 10, 100 items

Expected:
✓ Correct plural form for each number
✓ Grammar correct

TC-L10N-007: Special characters
Test characters unique to language:
- Spanish: ñ, á, é, í, ó, ú, ü, ¿, ¡
- German: ä, ö, ü, ß
- French: é, è, ê, ë, à, ù, ç, œ
- Portuguese: ã, õ, ç
- Scandinavian: å, ä, ö
- Polish: ą, ć, ę, ł, ń, ó, ś, ź, ż

Expected:
✓ All special characters display correctly
✓ Search works with special characters
✓ Input accepts special characters
✓ Sorting works correctly (ä after a, ñ after n)

TC-L10N-008: Encoding (UTF-8)
Test: Various languages in one app

Expected:
✓ All character sets display correctly
✓ No garbled text (����)
✓ UTF-8 encoding used throughout
✓ Database stores Unicode correctly

TC-L10N-009: Language switcher
Steps:
1. Find language selection (settings, menu)
2. Switch language
3. Navigate app

Expected:
✓ Language changes immediately OR after restart
✓ All content updates to new language
✓ Selection persists

TC-L10N-010: Fallback language
Steps:
1. Request unsupported language
2. Observe behavior

Expected:
✓ Falls back to default (usually English)
✓ Partial translation if available
✓ No blank screens

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.3 Cultural Adaptation Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CULTURAL ADAPTATION TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TC-CULTURE-001: Date format
Different formats worldwide:

US: MM/DD/YYYY (03/15/2026)
Europe: DD/MM/YYYY (15/03/2026)
Japan: YYYY/MM/DD (2026/03/15)
ISO: YYYY-MM-DD (2026-03-15)

Test:
✓ Correct format for user's locale
✓ Ambiguous dates avoided (use month names)
✓ Date picker uses local format

TC-CULTURE-002: Time format
12-hour (US): 3:00 PM
24-hour (Most of world): 15:00

Test:
✓ Correct format for locale
✓ AM/PM displayed if 12-hour
✓ Time picker matches locale

TC-CULTURE-003: Number format
Different decimal and thousand separators:

US: 1,234.56 (comma thousands, period decimal)
Europe: 1.234,56 (period thousands, comma decimal)
India: 1,23,456.78 (lakhs system)

Test:
✓ Correct separators for locale
✓ Input accepts local format
✓ Display uses local format

TC-CULTURE-004: Currency format
Different currency symbols and placement:

US: $1,234.56 (symbol before, comma thousands, period decimal)
Europe: 1.234,56 € (symbol after, period thousands, comma decimal)
UK: £1,234.56
Japan: ¥1,234
India: ₹1,23,456.78

Test:
✓ Correct currency symbol
✓ Correct format for locale
✓ Currency conversion accurate
✓ Symbol positioned correctly

TC-CULTURE-005: Phone number format
Different formats:

US: (555) 123-4567 or 555-123-4567
UK: 020 1234 5678
France: 01 23 45 67 89
Germany: 030 12345678
International: +1 555 123 4567

Test:
✓ Accepts local format
✓ Validates correctly
✓ Displays with appropriate formatting
✓ International format supported

TC-CULTURE-006: Address format
Different address structures:

US:
John Doe
123 Main Street
Apt 4B
New York, NY 10001
USA

UK:
John Doe
Flat 4B
123 High Street
London
SW1A 1AA
United Kingdom

Japan: (Reverse order)
〒100-0001
東京都千代田区千代田1-1
田中太郎

Test:
✓ Address fields appropriate for country
✓ Required fields match local standards
✓ Postal code format validated correctly

TC-CULTURE-007: Name format
Different name structures:

Western: FirstName LastName (John Doe)
Chinese: LastName FirstName (李明 = Li Ming)
Spanish: FirstName LastName MotherLastName (Juan García López)
Single name: Madonna, Cher (mononym)

Test:
✓ Name field accepts various formats
✓ No "First Name" / "Last Name" assumptions
✓ Sorting works appropriately

TC-CULTURE-008: Colors and symbols
Cultural meanings vary:

Red:
- Western: Danger, stop, love
- China: Good luck, celebration
- South Africa: Mourning

White:
- Western: Purity, peace
- Eastern: Death, mourning

Symbols:
- Thumbs up 👍: Offensive in some Middle Eastern countries
- OK sign 👌: Offensive in some countries

Test:
✓ Colors appropriate for target culture
✓ Symbols not offensive
✓ Images culturally appropriate

TC-CULTURE-009: Right-to-Left (RTL) languages
Languages: Arabic, Hebrew, Persian, Urdu

Layout changes:
- Text direction: right to left
- UI mirrored: back button on right, menu on left
- Numbers: Still left to right (123, not 321)
- Icons: Some mirror (back arrow), some don't (play button)

TC-RTL-001: RTL layout
Steps: Switch to Arabic or Hebrew

Expected:
✓ Text flows right to left
✓ UI elements mirrored horizontally
✓ Scrollbars on left side
✓ Navigation reversed (back button on right)
✓ Alignment: Right-aligned instead of left

TC-RTL-002: Mixed content (LTR in RTL)
Example: Arabic text with English words
"مرحبا John!"

Expected:
✓ Mixed text displays correctly
✓ English words left-to-right within RTL text
✓ Punctuation in correct position

TC-RTL-003: Numbers in RTL
Numbers: Always left-to-right
Example: "١٢٣" = 123 (Arabic numerals)

Expected:
✓ Numbers display correctly
✓ Calculations work correctly

TC-CULTURE-010: Legal and regulatory
Different countries, different rules:

GDPR (Europe): Strict privacy laws
CCPA (California): Consumer privacy rights
Cookie laws: Must get consent (EU)
Age restrictions: Vary by country

Test:
✓ Privacy policy appropriate for region
✓ Cookie consent shown (if required)
✓ Age verification (if required)
✓ Terms of service localized

TC-CULTURE-011: Payment methods
Different regions prefer different methods:

US: Credit cards, PayPal
China: Alipay, WeChat Pay
India: UPI, Paytm
Germany: SEPA, Giropay
Netherlands: iDEAL

Test:
✓ Local payment methods supported
✓ Currency conversion correct
✓ Payment flow localized

TC-CULTURE-012: Holidays and weekends
Different calendars:

Western: Sunday/Monday start, Saturday/Sunday weekend
Middle East: Friday/Saturday weekend
India: Many regional holidays
China: Lunar New Year

Test:
✓ Calendar starts on correct day
✓ Weekends marked correctly
✓ Local holidays displayed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.4 Localization Testing Checklist

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPREHENSIVE LOCALIZATION TESTING CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BEFORE TESTING:
□ Identify target languages/locales
□ Get native speakers for testing
□ Understand cultural differences
□ Review translation style guide
□ Check competitor apps in target market

TRANSLATION TESTING:
□ All UI text translated
□ All error messages translated
□ All help text / tooltips translated
□ All email templates translated
□ All push notifications translated
□ No English leaking through
□ No placeholder text (Lorem ipsum)
□ Context-appropriate translations
□ Industry terminology correct
□ Tone/formality appropriate

LAYOUT TESTING:
□ No text truncation
□ No text overflow
□ Buttons sized appropriately
□ Dialogs resize for expanded text
□ No overlapping elements
□ Line breaks appropriate
□ Proper spacing maintained
□ Images and text don't overlap

FORMATTING TESTING:
□ Date format correct
□ Time format correct (12h/24h)
□ Number format correct (decimal separator)
□ Currency format and symbol correct
□ Phone number format correct
□ Address format correct for country
□ Postal code format validated

CHARACTER TESTING:
□ Special characters display
□ Accented characters work
□ Search with special characters works
□ Input accepts special characters
□ Sorting with special characters correct
□ URLs/Email with special characters work

ENCODING TESTING:
□ UTF-8 encoding throughout
□ No garbled text (����)
□ All character sets display
□ Database stores Unicode
□ API handles Unicode
□ Files save in UTF-8

FUNCTIONAL TESTING:
□ Language switcher works
□ Language persists after restart
□ All features work in target language
□ Forms submit correctly
□ Validation messages in target language
□ Login/Signup works

CULTURAL TESTING:
□ Colors appropriate
□ Images culturally appropriate
□ Icons not offensive
□ Symbols culturally correct
□ Content tone appropriate
□ Legal requirements met (GDPR, etc.)

RTL TESTING (Arabic, Hebrew):
□ Text flows right-to-left
□ UI mirrored correctly
□ Navigation reversed
□ Alignment correct (right-aligned)
□ Scrollbars on left
□ Icons mirrored appropriately
□ Numbers still left-to-right

EDGE CASES:
□ Very long words (German compounds)
□ Short character sets (Chinese)
□ Multiple scripts (Japanese: Hiragana, Katakana, Kanji)
□ Mixed LTR-RTL content
□ Special characters in usernames/passwords
□ Unicode in URLs

PERFORMANCE:
□ No performance degradation
□ Font files load correctly
□ Downloads complete
□ No bloated file sizes

TESTING TOOLS:
□ Pseudo-localization (testing tool)
□ Screenshot comparison
□ Translation management system (Crowdin, etc.)
□ Native speakers for review

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Accessibility Testing (WCAG Deep Dive)

### 2.1 WCAG Conformance Levels

**WCAG 2.1 Overview:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WCAG 2.1 CONFORMANCE LEVELS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LEVEL A (Minimum)
Basic web accessibility. If not met, some users CANNOT access content.

Key Requirements:
✓ Non-text content has text alternative
✓ Audio has captions
✓ Keyboard accessible
✓ No keyboard trap
✓ Page has title
✓ Link purpose clear
✓ Color not sole means of conveying information
✓ Audio control available

Example Issues if Level A not met:
- Blind user cannot access images (no alt text)
- Keyboard user trapped in modal (no escape)
- Deaf user cannot understand video (no captions)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LEVEL AA (Mid-range, Most Common Target)
Addresses major barriers. Required by most laws (ADA, Section 508, etc.)

Additional Requirements:
✓ Color contrast 4.5:1 (normal text)
✓ Color contrast 3:1 (large text)
✓ Resize text to 200%
✓ Multiple ways to find content
✓ Headings and labels descriptive
✓ Focus visible
✓ Error identification
✓ Error suggestions provided
✓ Labels or instructions for user input

Example: Most companies target Level AA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LEVEL AAA (Highest, Gold Standard)
Enhanced accessibility. Difficult to achieve for all content.

Additional Requirements:
✓ Color contrast 7:1 (normal text)
✓ Color contrast 4.5:1 (large text)
✓ Audio described (extended)
✓ Sign language for audio
✓ No time limits OR very generous time limits
✓ No distractions (moving, blinking content)
✓ Context-sensitive help available

Example: Government websites often target AAA

Note: AAA is NOT required for full conformance.
Goal: Meet AAA where possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONFORMANCE STATEMENT:
To claim WCAG conformance, you must meet ALL criteria for that level.

Example:
"This website conforms to WCAG 2.1 Level AA"

Means: ALL Level A and ALL Level AA criteria met.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.2 Detailed Accessibility Testing Scenarios

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERCEIVABLE: Users must be able to perceive information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.1 TEXT ALTERNATIVES

TC-A11Y-001: Images of text
Bad: Using image for heading

Good HTML:
<h1>Welcome to Our Site</h1>

Bad HTML:
<img src="heading.png"> (no alt text, not scalable)

Expected:
✓ Real text used instead of images
✓ If image necessary, alt text provided
✓ Text can be resized by user

TC-A11Y-002: Informative images
Example: Product image, infographic

Expected:
<img src="product.jpg" alt="Red leather handbag with gold chain strap">

✓ Alt text describes image content
✓ Blind user understands what's shown
✓ Alt text concise but descriptive

TC-A11Y-003: Decorative images
Example: Border decorations, spacer images

Expected:
<img src="decoration.png" alt="" role="presentation">
OR
<img src="spacer.gif" alt="">

✓ Empty alt attribute (not missing)
✓ Screen reader skips image
✓ No "image" announcement

TC-A11Y-004: Complex images (charts, diagrams)
Example: Bar chart showing sales data

Expected:
<img src="sales-chart.png" alt="Bar chart showing quarterly sales">
<p>Detailed description: Q1 sales were $1.2M, Q2...</p>
OR
<a href="sales-data.html">View sales data table</a>

✓ Alt text provides overview
✓ Detailed description available
✓ Data also in accessible format (table)

TC-A11Y-005: Images of text (exceptions)
Acceptable cases:
- Logo
- Photo containing text
- Screenshot

Expected:
✓ Alt text includes text in image
Example: <img src="logo.png" alt="Company Name">

TC-A11Y-006: Audio content
Example: Podcast, audio announcement

Expected:
✓ Transcript provided
✓ Captions for important sounds
✓ Audio can be paused/stopped

TC-A11Y-007: Video content
Expected:
✓ Captions for dialogue
✓ Captions for important sounds ([Door closes], [Music playing])
✓ Audio description for visual-only content
✓ Transcript available

1.3 ADAPTABLE CONTENT

TC-A11Y-008: Semantic HTML
Bad:
<div class="heading">Page Title</div>
<div onclick="submit()">Submit</div>

Good:
<h1>Page Title</h1>
<button onclick="submit()">Submit</button>

Expected:
✓ Proper HTML elements (<h1>, <button>, <nav>, <main>)
✓ Screen reader announces element type
✓ Keyboard navigation works automatically

TC-A11Y-009: Heading hierarchy
Bad:
<h1>Main Title</h1>
<h3>Subsection</h3> (skipped h2!)

Good:
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>

Expected:
✓ No heading levels skipped
✓ One <h1> per page
✓ Logical document structure
✓ Screen reader users can navigate by headings

TC-A11Y-010: Reading order
Expected:
✓ Content order in HTML matches visual order
✓ CSS doesn't reorder illogically
✓ Keyboard navigation follows logical order

TC-A11Y-011: Sensory characteristics
Bad: "Click the green button on the right"

Good: "Click the Submit button"

Expected:
✓ Instructions don't rely solely on shape/color/position
✓ Multiple cues provided

TC-A11Y-012: Orientation
Expected:
✓ Content works in portrait and landscape
✓ No forced orientation (unless essential)
✓ Layout adapts to orientation

1.4 DISTINGUISHABLE

TC-A11Y-013: Color contrast (text)
Level AA Requirements:
- Normal text (< 18pt): 4.5:1 contrast
- Large text (≥ 18pt or 14pt bold): 3:1 contrast

Level AAA Requirements:
- Normal text: 7:1 contrast
- Large text: 4.5:1 contrast

Tools: WebAIM Contrast Checker, Chrome DevTools

Test Examples:
✓ #333333 on #FFFFFF: 12.6:1 (Pass AA & AAA)
✓ #767676 on #FFFFFF: 4.5:1 (Pass AA, Fail AAA)
✗ #999999 on #FFFFFF: 2.8:1 (Fail AA & AAA)

Expected:
✓ All text meets minimum contrast
✓ Links distinguishable from text
✓ Buttons have sufficient contrast

TC-A11Y-014: Color contrast (UI components)
Level AA: 3:1 contrast for UI components and graphical objects

Test:
✓ Form field borders: 3:1 contrast
✓ Focus indicators: 3:1 contrast
✓ Icons: 3:1 contrast
✓ Chart elements: 3:1 contrast

TC-A11Y-015: Use of color
Bad: "Required fields are in red"

Good: "Required fields are marked with an asterisk (*)"

Expected:
✓ Color not sole means of conveying information
✓ Additional indicators present (icons, text, patterns)
✓ Works for colorblind users

TC-A11Y-016: Text resize
Expected:
✓ Text can be resized to 200% without loss of content
✓ No horizontal scrolling (except data tables)
✓ Layout adapts to larger text
✓ No text truncation

TC-A11Y-017: Reflow
Expected:
✓ Content reflows at 400% zoom
✓ No two-dimensional scrolling required
✓ Mobile-friendly responsive design

TC-A11Y-018: Non-text contrast
Expected:
✓ Important graphics have 3:1 contrast
✓ UI component parts distinguishable
✓ Focus indicators visible

TC-A11Y-019: Text spacing
User applies:
- Line height: 1.5
- Paragraph spacing: 2x font size
- Letter spacing: 0.12x font size
- Word spacing: 0.16x font size

Expected:
✓ No loss of content
✓ No overlapping text
✓ Layout adapts

TC-A11Y-020: Content on hover or focus
Expected:
✓ Content dismissible (Esc key)
✓ Content hoverable (can move mouse to content)
✓ Content persists (doesn't disappear immediately)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPERABLE: Users must be able to operate the interface
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2.1 KEYBOARD ACCESSIBLE

TC-A11Y-021: Keyboard access to all functionality
Expected:
✓ All features accessible via keyboard
✓ No mouse-only functionality
✓ Tab, Enter, Space, Arrow keys work

TC-A11Y-022: No keyboard trap
Test: Tab through entire page

Expected:
✓ Can always move focus
✓ Can tab out of every element
✓ Esc or standard key to exit modals

TC-A11Y-023: Character key shortcuts
If single-key shortcuts exist (e.g., "s" for search):

Expected:
✓ Can be turned off
✓ Can be remapped
✓ Only active when component focused

2.2 ENOUGH TIME

TC-A11Y-024: Session timeout
Expected:
✓ User warned before timeout (20-second warning)
✓ Option to extend session
✓ OR timeout at least 20 hours

TC-A11Y-025: Moving content (carousel, slideshow)
Expected:
✓ Can pause, stop, or hide
✓ Pauses on hover or focus
✓ No auto-play > 5 seconds (unless user can control)

2.3 SEIZURES AND PHYSICAL REACTIONS

TC-A11Y-026: Flashing content
Expected:
✗ No content flashes more than 3 times per second
✓ OR flash below threshold (small, low contrast)

2.4 NAVIGABLE

TC-A11Y-027: Skip links
Expected:
<a href="#main" class="skip-link">Skip to main content</a>

✓ First focusable element
✓ Jumps to main content
✓ Bypasses navigation

TC-A11Y-028: Page title
Expected:
<title>Product Name - Page Title - Site Name</title>

✓ Unique per page
✓ Descriptive of page content
✓ Helps users identify page

TC-A11Y-029: Focus order
Expected:
✓ Focus order is logical
✓ Follows visual flow (top → bottom, left → right)
✓ No unexpected focus jumps

TC-A11Y-030: Link purpose
Bad: "Click here"

Good: "Download 2026 Annual Report (PDF, 2MB)"

Expected:
✓ Link text descriptive of destination
✓ Link purpose understood from text alone
✓ Or understood from context

TC-A11Y-031: Multiple ways to find content
Expected:
At least two of:
✓ Search function
✓ Site map
✓ Table of contents
✓ Navigation menu

TC-A11Y-032: Headings and labels
Expected:
✓ Headings describe topic/purpose
✓ Labels describe form fields
✓ Clear and descriptive

TC-A11Y-033: Focus visible
Expected:
✓ Keyboard focus always visible
✓ Clear visual indicator (outline, border, background)
✓ Minimum 3:1 contrast ratio
✓ Never hidden with outline:none without alternative

Good example:
*:focus {
    outline: 3px solid #0066CC;
    outline-offset: 2px;
}

TC-A11Y-034: Target size (touch)
Level AAA (but important for mobile):

Expected:
✓ Touch targets at least 44×44 CSS pixels
✓ Adequate spacing between targets
✓ Easy to tap without mistakes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UNDERSTANDABLE: Users must be able to understand information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3.1 READABLE

TC-A11Y-035: Page language
Expected:
<html lang="en">

✓ Language of page specified
✓ Screen reader pronounces correctly
✓ Browser translation tools work

TC-A11Y-036: Language of parts
Expected:
<p>English text</p>
<p lang="es">Spanish text: Hola mundo</p>

✓ Language changes indicated
✓ Screen reader switches pronunciation

TC-A11Y-037: Unusual words
Expected:
✓ Jargon defined on first use
✓ Abbreviations spelled out first time
✓ Idioms explained
✓ Or link to glossary

3.2 PREDICTABLE

TC-A11Y-038: On focus
Expected:
✓ Focusing an element doesn't trigger unexpected change
✗ No auto-submit on focus
✗ No modal opening on focus
✓ Predictable behavior

TC-A11Y-039: On input
Expected:
✓ Entering data doesn't cause unexpected change
✗ No auto-submit when field filled
✓ User must explicitly submit

Exception: Search autocomplete OK if user expects it

TC-A11Y-040: Consistent navigation
Expected:
✓ Navigation in same location/order on each page
✓ Same components work the same way throughout site
✓ Predictable patterns

TC-A11Y-041: Consistent identification
Expected:
✓ Same functionality labeled consistently
✓ "Search" doesn't become "Find" on different pages
✓ Icons have consistent meanings

3.3 INPUT ASSISTANCE

TC-A11Y-042: Error identification
Expected:
✓ Error detected automatically
✓ User notified clearly
✓ Error described in text
✓ Problem field identified

Example:
"Email is required"
"Email format is invalid"

TC-A11Y-043: Labels or instructions
Expected:
✓ Every form field has <label>
✓ Instructions provided when needed
✓ Required fields indicated

Good example:
<label for="email">Email Address *</label>
<input type="email" id="email" required>

TC-A11Y-044: Error suggestion
Expected:
✓ Error message suggests correction
✓ Example of correct format provided
✓ Help user fix error

Example:
"Password must be at least 8 characters, include 1 uppercase, 1 number"

TC-A11Y-045: Error prevention (legal, financial)
Expected:
At least one of:
✓ Reversible (can undo)
✓ Checked (data validated before submission)
✓ Confirmed (confirmation page, "Are you sure?")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROBUST: Content works with current and future tools
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4.1 COMPATIBLE

TC-A11Y-046: Valid HTML
Expected:
✓ HTML validates (W3C validator)
✓ Complete start and end tags
✓ No duplicate IDs
✓ Proper nesting

TC-A11Y-047: Name, Role, Value
Expected:
✓ All UI components have accessible name
✓ Role communicated (button, link, etc.)
✓ State communicated (checked, expanded)
✓ Properties communicated (required, disabled)

ARIA example:
<button aria-label="Close dialog" aria-pressed="false">
    <span aria-hidden="true">×</span>
</button>

TC-A11Y-048: Status messages
Expected:
✓ Status messages announced to screen reader
✓ User doesn't need to be on that element

Using ARIA live regions:
<div aria-live="polite" role="status">
    Items added to cart
</div>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.3 ARIA (Accessible Rich Internet Applications)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARIA ATTRIBUTES COMPREHENSIVE GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ARIA RULES:
1. Use native HTML when possible (better than ARIA)
2. Don't change native semantics
3. All interactive ARIA controls must be keyboard accessible
4. Don't use role="presentation" or aria-hidden on focusable elements
5. All interactive elements must have accessible name

ARIA ROLES:

TC-ARIA-001: Landmark roles
Purpose: Structure page for screen reader navigation

<header role="banner">Site header</header>
<nav role="navigation">Main navigation</nav>
<main role="main">Main content</main>
<aside role="complementary">Sidebar</aside>
<footer role="contentinfo">Site footer</footer>

Expected:
✓ Screen reader can jump to landmarks
✓ One banner, one main, one contentinfo per page
✓ Multiple navigations OK (label differently)

TC-ARIA-002: Widget roles
Purpose: Define interactive components

<div role="button" tabindex="0">Custom Button</div>
<div role="dialog" aria-modal="true">Modal Dialog</div>
<div role="alert">Important Alert</div>
<div role="tablist">
    <button role="tab">Tab 1</button>
    <button role="tab">Tab 2</button>
</div>

Expected:
✓ Role announced by screen reader
✓ Keyboard interaction matches role
✓ Native HTML preferred when available

ARIA PROPERTIES (aria-*):

TC-ARIA-003: aria-label
Purpose: Provide accessible name

<button aria-label="Close dialog">
    <span aria-hidden="true">×</span>
</button>

Expected:
✓ Screen reader announces label
✓ Useful for icon-only buttons
✓ Overrides visible text

TC-ARIA-004: aria-labelledby
Purpose: Reference another element as label

<h2 id="dialog-title">Confirm Delete</h2>
<div role="dialog" aria-labelledby="dialog-title">
    Are you sure?
</div>

Expected:
✓ Screen reader announces referenced element's text
✓ Multiple IDs supported (space-separated)

TC-ARIA-005: aria-describedby
Purpose: Additional description/help text

<input type="email" id="email" aria-describedby="email-help">
<small id="email-help">We'll never share your email</small>

Expected:
✓ Screen reader announces description after label
✓ Helpful for instructions

TC-ARIA-006: aria-hidden
Purpose: Hide content from screen readers

<span aria-hidden="true">★</span> 4.5 stars

Expected:
✓ Decorative icons hidden
✓ Visual-only content hidden
✗ Don't hide focusable elements
✗ Don't hide important information

TC-ARIA-007: aria-live
Purpose: Announce dynamic content updates

<div aria-live="polite" aria-atomic="true">
    3 items in cart
</div>

Values:
- polite: Announce when user is idle
- assertive: Announce immediately
- off: Don't announce (default)

Expected:
✓ Updates announced automatically
✓ User doesn't need to navigate to element
✓ Use for status messages

TC-ARIA-008: aria-expanded
Purpose: Indicate if element expanded/collapsed

<button aria-expanded="false" aria-controls="menu">
    Menu
</button>
<ul id="menu" hidden>...</ul>

Expected:
✓ Screen reader announces state
✓ Value toggles when state changes
✓ Use for dropdowns, accordions

TC-ARIA-009: aria-current
Purpose: Indicate current item in set

<nav>
    <a href="/">Home</a>
    <a href="/about" aria-current="page">About</a>
    <a href="/contact">Contact</a>
</nav>

Expected:
✓ Screen reader announces "current page"
✓ Use for active navigation item

TC-ARIA-010: aria-required
Purpose: Indicate required form field

<label for="email">Email *</label>
<input type="email" id="email" aria-required="true">

Expected:
✓ Screen reader announces "required"
✓ Use with required attribute

TC-ARIA-011: aria-invalid
Purpose: Indicate validation error

<input type="email" id="email" aria-invalid="true"
       aria-describedby="email-error">
<span id="email-error">Email format is invalid</span>

Expected:
✓ Screen reader announces "invalid"
✓ Error message associated and announced

TC-ARIA-012: aria-disabled vs disabled
Difference:
disabled: Truly disabled, not focusable, grayed out
aria-disabled="true": Appears disabled, but can be focused

Expected:
✓ Use disabled for most cases
✓ Use aria-disabled when need to explain why disabled

TC-ARIA-013: aria-modal
Purpose: Indicate modal dialog

<div role="dialog" aria-modal="true" aria-labelledby="title">
    <h2 id="title">Confirm Action</h2>
    ...
</div>

Expected:
✓ Focus trapped in modal
✓ Background content not accessible
✓ Esc key closes modal

COMMON ARIA PATTERNS:

TC-ARIA-014: Modal dialog complete example
<div role="dialog"
     aria-modal="true"
     aria-labelledby="modal-title"
     aria-describedby="modal-desc">

    <h2 id="modal-title">Delete Item</h2>
    <p id="modal-desc">This action cannot be undone.</p>

    <button>Cancel</button>
    <button>Delete</button>
</div>

Expected:
✓ Focus moves to modal on open
✓ Focus trapped inside
✓ Esc closes modal
✓ Focus returns to trigger on close

TC-ARIA-015: Accordion complete example
<div class="accordion">
    <h3>
        <button aria-expanded="false"
                aria-controls="panel1"
                id="accordion1">
            Section 1
        </button>
    </h3>
    <div id="panel1"
         role="region"
         aria-labelledby="accordion1"
         hidden>
        Content
    </div>
</div>

Expected:
✓ Button announces expanded state
✓ Arrow keys navigate between buttons
✓ Panel hidden when collapsed

TC-ARIA-016: Tab panel complete example
<div role="tablist" aria-label="Sample Tabs">
    <button role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1">
        Tab 1
    </button>
    <button role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1">
        Tab 2
    </button>
</div>

<div role="tabpanel"
     id="panel-1"
     aria-labelledby="tab-1">
    Panel 1 content
</div>

<div role="tabpanel"
     id="panel-2"
     aria-labelledby="tab-2"
     hidden>
    Panel 2 content
</div>

Expected:
✓ Tab key moves to tablist
✓ Arrow keys navigate between tabs
✓ Active tab has aria-selected="true"
✓ Inactive tabs have tabindex="-1"

TC-ARIA-017: Combobox (autocomplete) example
<label for="search">Search</label>
<input type="text"
       id="search"
       role="combobox"
       aria-autocomplete="list"
       aria-expanded="false"
       aria-controls="suggestions">

<ul role="listbox" id="suggestions" hidden>
    <li role="option">Suggestion 1</li>
    <li role="option">Suggestion 2</li>
</ul>

Expected:
✓ Typing shows suggestions
✓ aria-expanded toggles
✓ Arrow keys navigate suggestions
✓ Enter selects suggestion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Usability Testing

### 3.1 Usability Testing Fundamentals

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USABILITY TESTING OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DEFINITION:
Usability testing = Observing users as they interact with a product to identify usability issues and gather qualitative data about their experience.

GOAL:
✓ Ensure product is easy to use
✓ Identify confusing areas
✓ Improve user experience
✓ Validate design decisions

KEY DIFFERENCE FROM FUNCTIONAL TESTING:
Functional: Does it work?
Usability: Is it easy to use?

Example:
Functional Test: User can login (Pass ✓)
Usability Test: User finds login button intuitive and completes login quickly (Fail ✗ - took 2 minutes to find button)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

USABILITY TESTING METHODS:

1. MODERATED USABILITY TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Facilitator guides user through tasks in real-time

Process:
1. Recruit participants (5-8 users)
2. Prepare test scenarios
3. Conduct sessions (1 hour each)
4. Observe and take notes
5. Ask follow-up questions
6. Analyze findings

Advantages:
✓ Can probe deeper (ask why)
✓ Understand user thought process
✓ Clarify confusion
✓ Observe body language

Disadvantages:
✗ Time-consuming
✗ Expensive
✗ Facilitator bias possible

2. UNMODERATED USABILITY TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Users complete tasks independently, remote

Tools: UserTesting.com, Lookback, UsabilityHub

Process:
1. Create tasks and questions
2. Recruit participants
3. Users complete tasks at their own time
4. Review recordings

Advantages:
✓ Faster
✓ Cheaper
✓ More participants
✓ Natural environment

Disadvantages:
✗ Cannot probe deeper
✗ Technical issues possible
✗ Less contextual information

3. GUERRILLA TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Quick, informal testing in public places (coffee shop, library)

Process:
1. Bring laptop/device
2. Approach people
3. Ask 5-10 minutes of their time
4. Have them complete 1-2 tasks
5. Gather quick feedback

Advantages:
✓ Very fast
✓ Very cheap
✓ Real people
✓ Quick validation

Disadvantages:
✗ Not your target audience necessarily
✗ Superficial feedback
✗ Short sessions

4. REMOTE USABILITY TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Testing with users in different locations

Tools: Zoom, Teams, UserTesting

Advantages:
✓ Geographic diversity
✓ Users in natural environment
✓ No travel required
✓ Record sessions easily

Disadvantages:
✗ Technical challenges
✗ Harder to observe non-verbal cues
✗ Connectivity issues

5. A/B TESTING (Quantitative)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Comparing two versions to see which performs better

Example:
Version A: "Buy Now" button (green)
Version B: "Add to Cart" button (blue)

Metrics:
- Click-through rate
- Conversion rate
- Time on page

Advantages:
✓ Data-driven
✓ Clear winner
✓ Live user data

Disadvantages:
✗ Doesn't explain why
✗ Requires significant traffic
✗ Only tests one variable at a time

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.2 Conducting Usability Tests

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USABILITY TEST PROCESS (MODERATED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1: PREPARATION (Before Test)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Define Objectives
What do you want to learn?
Examples:
- Can users complete checkout in < 2 minutes?
- Do users understand the navigation?
- Is the search function intuitive?

Step 2: Recruit Participants
How many: 5-8 users (Nielsen: 5 users find 85% of issues)
Who: Representative of target audience
Where: usertesting.com, respondent.io, or your user base

Screening questions example:
- Age range?
- Tech proficiency (1-5)?
- Have you used [competitor product]?
- How often do you shop online?

Step 3: Prepare Test Scenarios
Create realistic tasks, not instructions

- ❌ Bad: "Click the search icon in the top right and search for 'laptop'"
- ✅ Good: "You're looking for a laptop for college. Find one that costs under $800."

5-7 tasks per session

Example Tasks (E-commerce site):
1. Find a blue t-shirt in size medium
2. Add it to your cart
3. Apply a discount code
4. Complete the checkout process
5. Track your order

Step 4: Prepare Test Environment
□ Quiet room
□ Recording equipment (screen + audio)
□ Test device (laptop, phone, etc.)
□ Consent form
□ Note-taking materials

Step 5: Create Test Script
Welcome Script:
"Thank you for participating. Today we're testing the website, not you. There are no right or wrong answers. Please think aloud as you complete tasks. Do you have any questions?"

Consent:
"We'll record your screen and voice. Is that OK?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 2: DURING TEST (Conducting Session)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Introduction (5 minutes)
✓ Welcome participant
✓ Explain purpose
✓ Get consent
✓ Encourage thinking aloud
✓ Ask demographic questions

2. Tasks (40 minutes)
For each task:
a) Read task aloud
b) Let user attempt
c) Observe (don't help!)
d) Take notes
e) Ask follow-up questions

THINKING ALOUD PROTOCOL:
Ask user to verbalize thoughts as they work
"What are you looking for?"
"What do you expect to happen when you click that?"

If user goes silent:
"What are you thinking?"
"Tell me what you see."

PROBING QUESTIONS (After task):
"How was that?"
"What was confusing?"
"What did you expect?"
"On a scale 1-5, how easy was that?"

IMPORTANT:
✗ Don't lead: "Was the button hard to find?" (leading)
✓ Open-ended: "How did you find the button?" (neutral)

3. Wrap-up (10 minutes)
✓ Overall impressions
✓ What did you like?
✓ What was frustrating?
✓ Any suggestions?
✓ Thank participant

4. Observations to Note:
□ Task completion (success/failure)
□ Time taken per task
□ Number of errors
□ Hesitations
□ Confusion (where/why)
□ Unexpected paths taken
□ Comments (positive/negative)
□ Body language (frustration, delight)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 3: ANALYSIS (After Tests)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Review Recordings
Watch all sessions
Take detailed notes

Step 2: Identify Patterns
Look for issues that occurred in multiple sessions
- 4/5 users couldn't find search → Critical issue
- 2/5 users confused by checkout → Medium issue
- 1/5 user suggested feature → Note, not critical

Step 3: Severity Rating
Critical (P0): Blocks task completion
- 4 users couldn't complete checkout
- All users got lost in navigation

High (P1): Major frustration, but workaround exists
- 3 users took > 2 minutes to find setting
- Users complained about confusing labels

Medium (P2): Minor inconvenience
- 2 users didn't notice a feature
- Button could be more prominent

Low (P3): Suggestions, nice-to-haves
- 1 user suggested adding a feature
- Color preference

Step 4: Create Findings Report
Include:
1. Executive Summary
   - Key findings
   - Critical issues (3-5 top issues)
   - Recommendations

2. Methodology
   - Number of participants
   - Date of tests
   - Tasks tested

3. Detailed Findings
   For each issue:
   - Description
   - Severity
   - Number of users affected
   - Evidence (quotes, screenshots)
   - Recommendation

4. Quantitative Data
   - Task success rates
   - Average time per task
   - Error rates

5. Qualitative Data
   - User quotes
   - Positive feedback
   - Suggestions

Example Finding:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ISSUE #1: Users cannot find the search function
Severity: Critical (P0)
Affected: 5/5 participants

Description:
All participants struggled to find the search function. The search icon is in the top right corner but is not prominent. 3 participants eventually found it after 1-2 minutes. 2 participants gave up and used the navigation menu instead.

Evidence:
- P1: "I don't see a search bar anywhere. Where is it?"
- P3: "Oh, that tiny icon is the search? I didn't notice it."
- P5: "I expect search to be more obvious. I almost missed it."

Impact:
- Average time to find search: 87 seconds
- Task success rate: 40% (2/5 completed using search)
- All users expressed frustration

Recommendation:
1. Make search icon larger and more prominent
2. Add "Search" text label next to icon
3. Consider adding search bar to header (always visible)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 5: Prioritize Fixes
Work with team to prioritize based on:
- Severity
- Frequency (how many users affected)
- Effort to fix
- Business impact

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.3 Usability Metrics

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USABILITY METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. TASK SUCCESS RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Percentage of tasks completed successfully

Formula: (Tasks Completed / Total Task Attempts) × 100%

Example:
5 users, 5 tasks each = 25 total task attempts
22 tasks completed successfully
Success Rate = 22/25 × 100% = 88%

Benchmark:
✓ > 90%: Excellent
✓ 75-90%: Good
⚠ 50-75%: Needs improvement
✗ < 50%: Critical issues

2. TIME ON TASK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: How long it takes to complete a task

Measure:
- Average time
- Median time (better for outliers)
- Time range (fastest to slowest)

Example:
Task: Complete checkout

User 1: 2:15 (2 minutes, 15 seconds)
User 2: 1:45
User 3: 3:30
User 4: 2:00
User 5: 4:00

Average: 2:42
Median: 2:15

Interpretation:
Compare to:
- Baseline (previous version)
- Competitor
- Target (e.g., < 2 minutes)

3. ERROR RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Number of errors made during tasks

Types of Errors:
- Critical: Prevents task completion
- Non-critical: Slows down but recoverable

Formula: (Total Errors / Total Tasks) × 100

Example:
25 tasks attempted
8 errors (3 critical, 5 non-critical)
Error Rate = 8/25 × 100 = 32%

Target: < 10% error rate

4. SUBJECTIVE SATISFACTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: User's perception of ease of use

Measurement Methods:

A) Single Ease Question (SEQ)
After each task:
"Overall, how difficult or easy was this task to complete?"
1 (Very Difficult) to 7 (Very Easy)

Average score across users

B) System Usability Scale (SUS)
10 questions, 5-point scale (Strongly Disagree to Strongly Agree)

Questions:
1. I think I would like to use this system frequently
2. I found the system unnecessarily complex
3. I thought the system was easy to use
4. I think I would need support to use this system
5. I found the various functions were well integrated
6. I thought there was too much inconsistency
7. I would imagine most people would learn this quickly
8. I found the system very cumbersome to use
9. I felt very confident using the system
10. I needed to learn a lot before I could get going

Scoring: 0-100
- > 80: Excellent
- 68-80: Good (68 is average)
- < 68: Needs improvement

C) Net Promoter Score (NPS)
"How likely are you to recommend this product?"
0 (Not at all likely) to 10 (Extremely likely)

Calculation:
% Promoters (9-10) - % Detractors (0-6) = NPS

Example:
40% Promoters, 10% Detractors
NPS = 40 - 10 = 30

Score Interpretation:
- > 50: Excellent
- 0-49: Good
- < 0: Needs improvement

5. TASK LEVEL SATISFACTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
After each task:
"How satisfied are you with your experience completing this task?"
1 (Very Dissatisfied) to 5 (Very Satisfied)

Average across tasks and users

6. FIRST CLICK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Where did user click first when attempting task?

Metric: % of users who clicked correct first element

Example:
Task: Find the search function
5 users:
- 2 clicked search icon (correct) → 40%
- 2 clicked menu → 40%
- 1 clicked logo → 20%

First Click Success Rate = 40%

Insight: If first click wrong, task completion decreases significantly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.4 Nielsen's 10 Usability Heuristics

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NIELSEN'S 10 USABILITY HEURISTICS
(Jakob Nielsen, 1994 - Still relevant in 2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. VISIBILITY OF SYSTEM STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: System should always inform users about what's going on

Examples:
✓ Loading spinner while page loads
✓ Progress bar during file upload
✓ "Saving..." indicator
✓ "3 items in cart" notification
✓ Breadcrumbs showing current location

✗ Bad: Silent loading (user doesn't know if anything's happening)
✓ Good: "Loading products..." with spinner

Test:
- Perform action, observe feedback
- All actions should have visible feedback within 1 second

2. MATCH BETWEEN SYSTEM AND REAL WORLD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Use familiar language and concepts

Examples:
✓ "Shopping cart" (familiar metaphor)
✓ "Trash" or "Recycle bin" for delete
✓ Calendar icon for dates
✓ Magnifying glass for search

✗ Bad: Technical jargon ("Initialize DB schema")
✓ Good: Plain language ("Set up your account")

Test:
- Review all labels, buttons, messages
- Are terms familiar to target users?
- No technical jargon for non-technical users

3. USER CONTROL AND FREEDOM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Users often perform actions by mistake. Provide "emergency exit"

Examples:
✓ Undo button
✓ Cancel button on forms
✓ Back button always available
✓ "Are you sure?" confirmation for destructive actions
✓ Ability to recover deleted items

✗ Bad: No way to cancel subscription
✓ Good: "Cancel Subscription" button with confirmation

Test:
- Try to undo actions
- Look for cancel/back options
- Test "emergency exits"

4. CONSISTENCY AND STANDARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Follow platform conventions and be internally consistent

Examples:
✓ Submit buttons always same color/style
✓ Navigation always in same place
✓ Icons have consistent meanings
✓ Follow iOS/Android guidelines on mobile

✗ Bad: "Submit" on one page, "Send" on another (same function)
✓ Good: "Submit" consistently throughout

Test:
- Navigate through all pages
- Check consistency of:
  - Button styles
  - Navigation placement
  - Terminology
  - Interaction patterns

5. ERROR PREVENTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Prevent errors before they occur

Examples:
✓ Disable "Submit" until form valid
✓ Date picker instead of text input
✓ Dropdown instead of free text
✓ Confirmation: "Are you sure you want to delete?"
✓ Input masks (phone: (555) 555-5555)

✗ Bad: Let user type invalid date, then show error
✓ Good: Date picker ensures valid date

Test:
- Try to enter invalid data
- Look for safeguards preventing errors
- Check for confirmations on destructive actions

6. RECOGNITION RATHER THAN RECALL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Minimize user's memory load. Make objects, actions, options visible.

Examples:
✓ Show recently viewed items
✓ Autocomplete in search
✓ Show order history (don't make user remember order number)
✓ Visual menus instead of commands

✗ Bad: "Enter command" (requires memorization)
✓ Good: Visual menu with icons and labels

Test:
- Can user see options rather than remember them?
- Are previous choices visible?
- Is navigation visible?

7. FLEXIBILITY AND EFFICIENCY OF USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Cater to both novice and expert users

Examples:
✓ Keyboard shortcuts for power users
✓ "Quick checkout" for returning customers
✓ Customizable dashboard
✓ Recently used items list

✗ Bad: One workflow fits all
✓ Good: Express checkout for registered users, full flow for guests

Test:
- Complete tasks as novice (first time)
- Complete tasks as expert (repeat)
- Should be faster second time
- Look for shortcuts, saved preferences

8. AESTHETIC AND MINIMALIST DESIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Don't include irrelevant information. Every extra unit of information competes with relevant units.

Examples:
✓ Clean, uncluttered interface
✓ Only essential information visible
✓ Hide advanced options behind "Advanced"
✓ Progressive disclosure (show details on demand)

✗ Bad: Homepage with 50 links, 10 banners, multiple pop-ups
✓ Good: Clean homepage, clear value proposition, few key actions

Test:
- Is there unnecessary information?
- Can anything be removed without losing functionality?
- Is visual hierarchy clear?

9. HELP USERS RECOGNIZE, DIAGNOSE, AND RECOVER FROM ERRORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Error messages in plain language, indicate problem, suggest solution

Examples:
✗ Bad: "Error 404"
✓ Good: "Page not found. The page you're looking for doesn't exist. Try our homepage."

✗ Bad: "Invalid input"
✓ Good: "Email format is invalid. Please enter a valid email like name@example.com"

✗ Bad: "System error 0x8004FE21"
✓ Good: "We couldn't process your payment. Please check your card details and try again."

Test:
- Trigger errors intentionally
- Check error messages:
  - Plain language?
  - Explain what happened?
  - Suggest how to fix?

10. HELP AND DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principle: Best if system doesn't need explanation, but provide help if needed

Examples:
✓ Context-sensitive help (? icon next to complex fields)
✓ Tooltips on hover
✓ FAQ section
✓ Search in help section
✓ Video tutorials

✗ Bad: No help available, users must figure it out
✓ Good: Help icon available, comprehensive FAQ, searchable

Test:
- Try to find help when confused
- Is help easy to find?
- Is help actually helpful?
- Can search help content?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---



## Compatibility Testing

### 4.1 Browser Compatibility Testing (Deep Dive)

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BROWSER COMPATIBILITY TESTING (COMPREHENSIVE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BROWSER MARKET SHARE (2026):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Desktop:
1. Chrome: 63%
2. Safari: 11%
3. Edge: 11%
4. Firefox: 5%
5. Opera: 3%
6. Others: 7%

Mobile:
1. Chrome: 63%
2. Safari: 32%
3. Samsung Internet: 4%
4. Others: 1%

TESTING STRATEGY:
P0: Chrome (latest 2 versions), Safari (latest)
P1: Edge (latest), Firefox (latest)
P2: Older versions (1-2 versions back)
P3: Opera, Samsung Internet, UC Browser

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BROWSER-SPECIFIC ISSUES:

TC-COMPAT-001: CSS Grid Layout
Support: Chrome 57+, Firefox 52+, Safari 10.1+, Edge 16+

Test:
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

Expected:
✓ Layout works in modern browsers
✓ Fallback for older browsers (flexbox or float)

TC-COMPAT-002: CSS Custom Properties (Variables)
Support: All modern browsers

Test:
:root {
    --primary-color: #0066CC;
}
.button {
    background: var(--primary-color);
}

Expected:
✓ Works in modern browsers
✓ Fallback color for older browsers

TC-COMPAT-003: JavaScript ES6+ Features
Features: Arrow functions, let/const, template literals, etc.

Test:
const add = (a, b) => a + b;
const message = `Hello, ${name}!`;

Expected:
✓ Works in modern browsers
✓ Transpiled to ES5 for older browsers (using Babel)

TC-COMPAT-004: Fetch API
Support: All modern browsers, not IE11

Test:
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data));

Expected:
✓ Works in modern browsers
✓ Polyfill or fallback (XMLHttpRequest) for IE11

TC-COMPAT-005: WebP Image Format
Support: Chrome, Edge, Firefox, Safari 14+

Test:
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>

Expected:
✓ WebP loads in supporting browsers
✓ JPG fallback for others

TC-COMPAT-006: CSS Flexbox
Support: All modern browsers, IE10+ (with prefixes)

Test:
.container {
    display: -webkit-flex; /* Safari */
    display: -ms-flexbox; /* IE10 */
    display: flex;
}

Expected:
✓ Works in all browsers with prefixes

TC-COMPAT-007: Video/Audio Formats
Different browsers support different codecs

Video:
- MP4 (H.264): All browsers
- WebM: Chrome, Firefox, Edge
- Ogg: Firefox, Chrome

Test:
<video>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser doesn't support video
</video>

Expected:
✓ Video plays in all browsers (using appropriate format)

TC-COMPAT-008: Local Storage
Support: All modern browsers

Test:
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');

Expected:
✓ Works in all browsers
✓ Graceful handling if disabled (private browsing)

TC-COMPAT-009: Service Workers (PWA)
Support: Chrome, Firefox, Edge, Safari 11.1+

Test: Register service worker

Expected:
✓ Works in supporting browsers
✓ Graceful degradation in others (app works without PWA features)

TC-COMPAT-010: CSS Position: Sticky
Support: All modern browsers

Test:
.header {
    position: sticky;
    top: 0;
}

Expected:
✓ Sticky header in modern browsers
✓ Fallback (position: fixed) in older browsers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CROSS-BROWSER TESTING CHECKLIST:

LAYOUT & VISUAL:
□ Page layout consistent across browsers
□ Fonts render correctly (web fonts load)
□ Colors accurate
□ Spacing and alignment correct
□ Images display correctly
□ Icons/SVGs render
□ Animations smooth
□ Responsive breakpoints work

FUNCTIONALITY:
□ All forms submit correctly
□ All links work
□ Buttons clickable and functional
□ Dropdown menus work
□ Modals/popups display correctly
□ JavaScript functions correctly
□ AJAX requests succeed
□ Cookies work
□ Local storage works
□ Session management works

PERFORMANCE:
□ Page load time acceptable on each browser
□ No memory leaks
□ Smooth scrolling
□ No browser crashes or freezes

CONSOLE ERRORS:
□ No JavaScript errors (F12 → Console)
□ No CSS warnings
□ No 404 errors (missing resources)
□ No CORS errors

SPECIFIC FEATURES:
□ HTML5 features work (if used)
□ CSS3 features render (if used)
□ ES6+ JavaScript works (or transpiled)
□ Browser-specific APIs work or have fallbacks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TESTING TOOLS:

1. BROWSERSTACK (Cloud Testing)
- Test on 3000+ real browsers/devices
- Price: From $29/month
- Best for: Comprehensive testing

2. LAMBDATEST (Cloud Testing)
- 3000+ browser/OS combinations
- Price: From $15/month
- Best for: Budget-friendly

3. CROSSBROWSERTESTING (Cloud Testing)
- Live testing + automated
- Price: From $29/month
- Best for: Visual testing

4. SAUCE LABS (Cloud Testing)
- Enterprise-grade testing
- Price: Custom
- Best for: Large teams, CI/CD

5. CAN I USE (caniuse.com)
- Browser support tables
- Free
- Best for: Checking feature support

6. BROWSERLING (Quick Testing)
- Quick browser testing
- Free tier available
- Best for: Quick checks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BROWSER TESTING MATRIX EXAMPLE:

┌─────────────┬────────┬────────┬────────┬────────┬────────┐
│ Feature     │Chrome  │Safari  │Firefox │ Edge   │ IE11   │
│             │120     │17      │120     │120     │        │
├─────────────┼────────┼────────┼────────┼────────┼────────┤
│ Homepage    │ ✓ Pass │ ✓ Pass │ ✓ Pass │ ✓ Pass │ N/A    │
│ Login       │ ✓ Pass │ ✓ Pass │ ✓ Pass │ ✓ Pass │ N/A    │
│ Search      │ ✓ Pass │ ✓ Pass │ ✓ Pass │ ✓ Pass │ N/A    │
│ Checkout    │ ✓ Pass │ ⚠ Minor│ ✗ Fail │ ✓ Pass │ N/A    │
│ Profile     │ ✓ Pass │ ✓ Pass │ ✓ Pass │ ✓ Pass │ N/A    │
└─────────────┴────────┴────────┴────────┴────────┴────────┘

Issues:
- Safari: Animation stutter on checkout page
- Firefox: Payment button styling issue

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4.2 Operating System Compatibility

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPERATING SYSTEM COMPATIBILITY TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DESKTOP OPERATING SYSTEMS:

TC-OS-001: Windows Testing
Versions to test:
- Windows 11 (latest)
- Windows 10 (still 50%+ users)

Browsers:
- Chrome, Edge (Chromium), Firefox

Test:
✓ Application launches
✓ UI renders correctly
✓ File operations work (open, save, download)
✓ Keyboard shortcuts work
✓ Right-click context menu works
✓ Installation/uninstallation works
✓ Windows notifications work

TC-OS-002: macOS Testing
Versions to test:
- macOS Sonoma (14.x) - latest
- macOS Ventura (13.x) - previous

Browsers:
- Safari, Chrome, Firefox

Test:
✓ Application launches
✓ UI renders correctly (Retina display)
✓ Keyboard shortcuts work (⌘ instead of Ctrl)
✓ Trackpad gestures work
✓ macOS notifications work
✓ Integration with macOS features (Spotlight, etc.)

TC-OS-003: Linux Testing
Distributions to test:
- Ubuntu (most popular)
- Fedora
- Debian

Browsers:
- Chrome/Chromium, Firefox

Test:
✓ Application launches
✓ Dependencies installed correctly
✓ UI renders correctly
✓ Keyboard shortcuts work
✓ File operations work
✓ Package managers work (apt, yum, etc.)

MOBILE OPERATING SYSTEMS:

TC-OS-004: iOS Testing
Versions to test:
- iOS 18 (latest)
- iOS 17 (still common)
- iOS 16 (minimum supported)

Test:
✓ App launches on all versions
✓ UI adapts to different screen sizes
✓ Gestures work correctly
✓ iOS-specific features work (Face ID, etc.)
✓ Notifications work
✓ Permissions requested correctly

TC-OS-005: Android Testing
Versions to test:
- Android 14 (latest)
- Android 13 (common)
- Android 12 (still 15% users)
- Android 11 (minimum supported)

Test:
✓ App launches on all versions
✓ UI adapts to different screen sizes
✓ Back button behavior correct
✓ Android-specific features work
✓ Notifications work
✓ Permissions requested correctly

CROSS-OS ISSUES:

TC-OS-006: Font rendering differences
Windows: ClearType
macOS: Quartz
Linux: FreeType

Test:
✓ Fonts readable on all OSes
✓ No font-size/layout issues
✓ Web fonts load correctly

TC-OS-007: File path differences
Windows: C:\Users\Name\file.txt (backslashes)
macOS/Linux: /Users/Name/file.txt (forward slashes)

Test:
✓ File operations handle paths correctly
✓ No hardcoded path separators

TC-OS-008: Keyboard shortcuts
Windows/Linux: Ctrl+C, Ctrl+V
macOS: ⌘+C, ⌘+V

Test:
✓ Shortcuts work on each platform
✓ Platform-specific shortcuts respected

TC-OS-009: Screen DPI/Scaling
Windows: 100%, 125%, 150%, 175%, 200%
macOS: Retina (2x, 3x)

Test:
✓ UI scales correctly
✓ Images sharp at all DPIs
✓ No layout breaks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Summary & Key Takeaways

### Day 11 Key Concepts:

1. **Localization & Internationalization:**
   - i18n (architecture) vs L10n (adaptation)
   - Translation completeness and accuracy
   - Text expansion/contraction issues
   - Date/time/currency/number formatting
   - RTL language support (Arabic, Hebrew)
   - Cultural adaptation (colors, symbols, addresses)

2. **Accessibility Testing:**
   - WCAG 2.1 conformance levels (A, AA, AAA)
   - Four principles: Perceivable, Operable, Understandable, Robust
   - Color contrast requirements (4.5:1 for AA)
   - Keyboard accessibility (no traps, visible focus)
   - Screen reader testing (NVDA, JAWS, VoiceOver)
   - ARIA attributes and roles

3. **Usability Testing:**
   - User testing methodologies (moderated, unmoderated, guerrilla, remote)
   - Think-aloud protocol
   - Usability metrics (task success, time on task, error rate, satisfaction)
   - Nielsen's 10 Usability Heuristics
   - SUS and NPS scoring

4. **Compatibility Testing:**
   - Browser testing strategy (P0: Chrome, Safari)
   - CSS/JavaScript compatibility issues
   - Feature detection and fallbacks
   - Operating system differences (Windows, macOS, Linux, iOS, Android)
   - Cross-browser testing tools (BrowserStack, LambdaTest)

### Best Practices:

✓ Test with native speakers for localization
✓ Use pseudo-localization for testing i18n readiness
✓ Ensure WCAG Level AA compliance minimum
✓ Test with actual screen readers, not just automated tools
✓ Conduct usability tests with 5-8 users
✓ Prioritize browsers by market share
✓ Use feature detection, not browser detection
✓ Provide graceful degradation for unsupported features
✓ Document compatibility requirements clearly
✓ Test on real devices, not just emulators

### Tomorrow's Preview:

Day 12 will cover:
- Regression Testing strategies
- Building regression test suites
- Test case prioritization techniques
- Smoke testing in depth
- Optimization strategies for test execution
- Automation considerations for manual testers

---

**Congratulations on completing Day 11!**

**Study Time:** 5-6 hours

---

*End of Day 11 Study Guide*
