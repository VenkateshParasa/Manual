# Day 13: Exploratory Testing & Session-Based Test Management
## Comprehensive Study Guide

---

## Table of Contents
1. [Exploratory Testing Advanced](#exploratory-testing-advanced)
2. [Testing Tours (FCC CUTS VIDS)](#testing-tours-fcc-cuts-vids)
3. [Session-Based Test Management (SBTM)](#session-based-test-management-sbtm)
4. [Charter Creation](#charter-creation)
5. [Session Execution & Documentation](#session-execution-documentation)
6. [Debriefing & Reporting](#debriefing-reporting)
7. [Practical Exercises](#practical-exercises)
8. [Assessment Questions](#assessment-questions)

---

## Exploratory Testing Advanced

### 1.1 Exploratory Testing Deep Dive

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPLORATORY TESTING COMPREHENSIVE OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DEFINITION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Exploratory Testing is simultaneous learning, test design,
and test execution where the tester actively explores the
application to find defects.

Key Quote (James Bach):
"Exploratory testing is simultaneous learning, test design,
and test execution."

Characteristics:
✓ Minimal advance planning
✓ Simultaneous learning and testing
✓ Tester freedom and creativity
✓ Context-driven approach
✓ Adaptive to what you discover
✓ Skilled tester required

NOT Random Testing:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Common Misconception: "Exploratory = Random clicking"

Reality: Exploratory testing is structured and purposeful
✓ Guided by charters/missions
✓ Based on tester experience
✓ Uses heuristics and patterns
✓ Systematic exploration
✓ Documented findings

Analogy:
Exploratory testing is like being a detective investigating
a crime scene. You have an objective (find clues), a method
(forensics), but you adapt based on what you discover.

WHEN TO USE EXPLORATORY TESTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Perfect For:
✓ New features (learning phase)
✓ Time-constrained testing
✓ Supplementing scripted tests
✓ Finding unexpected issues
✓ Validating fixes
✓ Risk-based testing
✓ Usability assessment

Not Ideal For:
✗ Regulatory/compliance testing (requires documentation)
✗ Contractual test coverage requirements
✗ Repeated regression (use automation)
✗ Verification of specific requirements

EXPLORATORY vs SCRIPTED TESTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────┬──────────────────┬─────────────────┐
│ Aspect          │ Scripted         │ Exploratory     │
├─────────────────┼──────────────────┼─────────────────┤
│ Test Design     │ Advance          │ During testing  │
│ Documentation   │ Detailed         │ Lightweight     │
│ Flexibility     │ Low              │ High            │
│ Learning        │ Limited          │ Continuous      │
│ Adaptability    │ Fixed path       │ Dynamic path    │
│ Coverage        │ Predictable      │ Varies          │
│ Defect Finding  │ Expected bugs    │ Unexpected bugs │
│ Repeatability   │ High             │ Moderate        │
│ Skill Required  │ Moderate         │ High            │
└─────────────────┴──────────────────┴─────────────────┘

Example:
Scripted Test: "Click Login, enter user/pass, verify success"
  → Finds bugs you expected to find

Exploratory Test: "Explore login feature for 30 minutes"
  → Might discover: Unicode handling issue, timing attack
     vulnerability, accessibility problem, edge cases

BLENDED APPROACH (Recommended):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best Practice: Use both approaches

Scripted Testing (70%):
- Requirements verification
- Regression testing
- Compliance testing

Exploratory Testing (30%):
- New features
- Finding unexpected issues
- Supplementing gaps in scripted tests
- Usability and user experience

Example Testing Schedule:
Sprint Testing (2 weeks):
- Days 1-7: Scripted testing (regression, new feature tests)
- Days 8-10: Exploratory testing (focus on new features)

BENEFITS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Finds unexpected defects
✓ Adapts to what you learn
✓ Efficient use of tester skills
✓ Quick feedback on quality
✓ Complements scripted testing
✓ Engages tester creativity
✓ Effective for UI/UX issues
✓ Good for time-boxed testing

CHALLENGES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✗ Difficult to estimate coverage
✗ Hard to track progress
✗ Less repeatable
✗ Requires skilled testers
✗ Challenging to manage/report
✗ May miss systematic coverage

Solution: Session-Based Test Management (SBTM)
Addresses challenges while keeping exploratory benefits

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.2 Exploratory Testing Heuristics

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TESTING HEURISTICS & TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEURISTIC 1: FOLLOW THE DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Trace how data flows through the application

Questions:
- Where does data come from?
- How is it transformed?
- Where is it stored?
- Where is it displayed?

Example: User Profile Feature
1. User enters profile data (input)
2. Validation applied
3. Data saved to database
4. Data retrieved for display
5. Data shown on profile page

Test Ideas:
✓ Invalid data at input
✓ Special characters
✓ Data truncation in database
✓ Display formatting issues
✓ Edit and verify changes persist

HEURISTIC 2: GOLDILOCKS TESTING (Too Much, Too Little, Just Right)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Test boundary conditions

Too Little:
- Empty fields
- Zero items
- Minimum values

Just Right:
- Valid nominal values
- Expected use cases

Too Much:
- Maximum values
- Large files
- Many items
- Excessive data

Example: Shopping Cart
- Too Little: 0 items in cart
- Just Right: 5 items in cart
- Too Much: 1000 items in cart

HEURISTIC 3: CRUD (Create, Read, Update, Delete)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Test all data operations

For any entity (User, Product, Order):
✓ Create: Can I add new?
✓ Read: Can I view it?
✓ Update: Can I modify it?
✓ Delete: Can I remove it?

Additional:
✓ List: Can I see all items?
✓ Search: Can I find items?
✓ Filter: Can I narrow down?
✓ Sort: Can I reorder?

Example: Task Management App
Create: Add new task ✓
Read: View task details ✓
Update: Edit task description ✓
Delete: Remove task ✓
List: See all tasks ✓
Search: Find tasks by keyword ✓
Filter: Show only incomplete tasks ✓
Sort: Order by due date ✓

HEURISTIC 4: CONSISTENCY CHECKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Verify consistency across application

Check:
✓ Same data shown consistently everywhere
✓ Same terminology used throughout
✓ Same formatting rules applied
✓ Same validation rules everywhere

Example Issues:
✗ Product price: $99.99 on listing, $100.00 in cart
✗ Date format: MM/DD/YYYY on one page, DD/MM/YYYY on another
✗ "Email" labeled as "Email Address" elsewhere
✗ Password min 8 chars on signup, min 6 chars on reset

HEURISTIC 5: INTERRUPT & RESUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Test application behavior when interrupted

Interruptions:
- Close and reopen
- Network disconnect
- Browser refresh
- System sleep/wake
- Kill process
- Log out/log in

Example: Form Filling
1. Fill half the form
2. Close browser (interrupt)
3. Reopen and navigate to form
Expected: Data preserved OR clear indication it's lost

HEURISTIC 6: ERROR FORCING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Deliberately cause errors

Techniques:
✓ Invalid inputs
✓ Out-of-order operations
✓ Resource exhaustion
✓ Boundary violations
✓ Unauthorized access

Example:
Normal: Add to cart → Checkout → Payment
Error Force: Skip to payment without adding items
Error Force: Try to checkout with $0 total
Error Force: Access /admin without login

HEURISTIC 7: ANALOGIES & COMPARISONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Compare to similar features/apps

Questions:
- How does Feature X work compared to Feature Y?
- How does this app compare to competitors?
- How does this version compare to previous version?

Example:
Our app vs. competitor:
- Competitor allows bulk delete → Does ours?
- Competitor has undo function → Do we?
- Competitor shows preview → Do we?

HEURISTIC 8: FOLLOW THE COMPLEXITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Complex areas have more bugs

Indicators of Complexity:
- Many conditionals (if/else)
- Multiple integrations
- Frequent changes
- Developer uncertainty

Focus Testing On:
✓ Payment processing (integrations, security)
✓ Search (algorithms, performance)
✓ Recommendation engines (complex logic)
✓ Multi-step workflows

HEURISTIC 9: PAIRING EXPLORATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Concept: Pair compatible inputs/operations

Examples:
- Valid username + valid password
- Valid username + invalid password
- Invalid username + valid password
- Invalid username + invalid password

Configuration combinations:
- Browser: Chrome, Firefox, Safari
- OS: Windows, macOS, Linux
- Pairing: 3 × 3 = 9 combinations

HEURISTIC 10: SOAP (Structure, Oracles, Actions, Properties)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Structure: What application is made of
- Pages, components, data structures
Explore: Navigation, architecture

Oracles: How to know if it's working
- Requirements, specs, user expectations
Explore: Verification methods

Actions: What users do
- Click, type, scroll, swipe
Explore: All possible user actions

Properties: Characteristics
- Speed, security, usability
Explore: Quality attributes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUESTION-BASED HEURISTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHO Questions:
- Who is the user? (personas)
- Who else might use it? (unauthorized)
- Who shouldn't be able to access this?

WHAT Questions:
- What is this feature supposed to do?
- What could go wrong?
- What did similar features do wrong?
- What are edge cases?

WHEN Questions:
- When does this execute? (timing)
- When might it fail? (conditions)
- When was it changed? (recent changes risky)

WHERE Questions:
- Where is data stored?
- Where else is this feature accessed?
- Where might there be security holes?

WHY Questions:
- Why was this feature built? (business goal)
- Why this implementation? (alternatives)
- Why might users struggle?

HOW Questions:
- How does it work? (technical understanding)
- How might users misuse it?
- How does it integrate with other features?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Testing Tours (FCC CUTS VIDS)

### 2.1 Testing Tours Overview

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TESTING TOURS (FCC CUTS VIDS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORIGIN:
Created by James Whittaker (Google)
Published in "Exploratory Software Testing" (2009)

CONCEPT:
Structured approach to exploratory testing
Think of application as tourist destination
Different tours focus on different aspects

MNEMONIC: FCC CUTS VIDS
Each letter = one tour type

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BUSINESS DISTRICT TOURS (FCC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

F - FEATURE TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test each feature in isolation

Approach:
1. List all features
2. Test each feature independently
3. Don't combine features yet

Example: E-commerce App
Features:
✓ Search products
✓ Add to cart
✓ Checkout
✓ Track order
✓ Write review

Test each independently:
- Just search (don't buy)
- Just add to cart (don't checkout)
- Just track order (existing order)

Questions:
- Does this feature work by itself?
- Can I complete this feature's purpose?
- Are all options available?

Duration: 30-60 minutes per feature

C - COMPLEXITY TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test the most complex features first

Complexity Indicators:
- Many options/configurations
- Multiple integrations
- Complex algorithms
- Frequent changes
- Developer concerns

Example: Payment Processing
Complexity factors:
- Multiple payment methods (card, PayPal, crypto)
- Multiple currencies
- Promo codes
- Split payments
- Refunds and chargebacks
- PCI compliance
- Integration with payment gateway

Approach:
1. Identify most complex features
2. Create complex test scenarios
3. Combine multiple options

Test Scenarios:
✓ International purchase with promo code
✓ Split payment (card + gift card)
✓ Refund to expired card
✓ Currency conversion edge cases

Duration: 1-2 hours per complex feature

C - CLAIMS TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Verify marketing claims and promises

Sources:
- Marketing website
- Product descriptions
- Sales presentations
- Release notes
- User documentation

Example Claims:
"Checkout in under 60 seconds"
"Support 1 million concurrent users"
"99.9% uptime guarantee"
"Mobile-friendly responsive design"
"Bank-level security"

Test Approach:
1. List all claims
2. Verify each claim
3. Document if claim is false

Example Tests:
Claim: "Fastest checkout"
Test: Time actual checkout process (measured: 85 seconds)
Result: Claim questionable

Claim: "Works on all devices"
Test: Try on various devices
Result: Broken on iPad mini

Duration: 2-3 hours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HISTORICAL DISTRICT TOURS (CUTS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

C - CONFIGURATION TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test with different configurations

Configuration Types:
- User settings
- System settings
- Browser settings
- Device types
- Network conditions

Example Configurations:
User Level:
- Guest user
- Registered user
- Premium user
- Admin user

Device:
- Desktop (Windows, Mac, Linux)
- Mobile (iOS, Android)
- Tablet

Browser:
- Chrome
- Firefox
- Safari
- Edge

Network:
- High-speed WiFi
- 4G mobile
- Slow 3G
- Offline mode

Test Matrix Example:
Windows + Chrome + Premium User + 4G
macOS + Safari + Guest User + WiFi
Android + Chrome + Registered User + 3G

Duration: 3-4 hours (sample combinations)

U - USER TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test from different user personas

User Types:
- Novice (first time)
- Expert (power user)
- Malicious (attacker)
- Elderly (accessibility)
- Child (if applicable)

Example: Banking App

Novice User:
- Confused by terminology
- Needs help at every step
- Might make mistakes
Test: Is app intuitive? Clear guidance?

Expert User:
- Wants shortcuts
- Knows what they're doing
- Impatient with hand-holding
Test: Are there power user features? Shortcuts?

Malicious User:
- Trying to exploit
- Testing security
- Attempting fraud
Test: SQL injection? XSS? Auth bypass?

Duration: 1 hour per persona

T - TESTABILITY TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Evaluate how easy the app is to test

Questions:
- Can I easily set up test data?
- Are there test/debug modes?
- Can I observe state?
- Are error messages helpful?
- Can I automate testing?

Good Testability:
✓ Test data seeding
✓ Debug mode available
✓ Clear logs
✓ Exposed APIs
✓ Reset/cleanup functions

Poor Testability:
✗ Must manually create test data
✗ No way to inspect state
✗ Cryptic error messages
✗ No automation hooks
✗ Cannot reset application state

Duration: 1-2 hours

S - SCENARIOS TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test realistic end-to-end scenarios

Approach:
1. Define user stories/scenarios
2. Execute complete workflows
3. Don't isolate features

Example Scenarios:

Scenario 1: First-time Buyer
1. Discover website (Google search)
2. Browse products
3. Create account
4. Add items to cart
5. Apply promo code
6. Complete checkout
7. Track order
8. Receive order
9. Leave review

Scenario 2: Returning Customer
1. Login
2. Reorder previous purchase
3. Checkout (saved payment)
4. Done

Scenario 3: Gift Purchase
1. Browse products
2. Add to cart
3. Select gift wrapping
4. Enter gift message
5. Ship to different address
6. Complete purchase

Duration: 30-45 minutes per scenario

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENTERTAINMENT DISTRICT TOURS (VIDS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

V - VARIABILITY TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test with varying inputs and data

Vary:
- Input data (valid, invalid, edge cases)
- Data volume (1 item, 100 items, 10,000 items)
- Data types (text, numbers, special chars)
- Timing (fast, slow, concurrent)

Example: Search Feature

Vary Search Terms:
- Short query: "a"
- Long query: 200 characters
- Numbers: "12345"
- Special characters: "@#$%"
- Unicode: "日本語"
- SQL injection: "' OR '1'='1"
- XSS: "<script>alert('XSS')</script>"

Vary Result Counts:
- 0 results
- 1 result
- 100 results
- 1,000,000 results

Duration: 2-3 hours

I - INTEROPERABILITY TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test integrations with other systems

Integrations:
- Third-party APIs
- External services
- Databases
- Authentication providers
- Payment gateways

Example Integrations:

Payment Gateway:
- Successful payment
- Failed payment
- Payment timeout
- Declined card
- 3D Secure authentication

OAuth Login (Google, Facebook):
- Successful login
- Denied permission
- Network failure during OAuth
- Token expiration

Email Service:
- Email sent successfully
- Email delivery failure
- Invalid email addresses
- Email size limits

Duration: 2-4 hours

D - DATA TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test data flow and persistence

Data Lifecycle:
1. Input/Create
2. Validate
3. Store
4. Retrieve
5. Display
6. Update
7. Delete

Example: User Profile

Create:
✓ Enter profile data
✓ Valid and invalid data
✓ Special characters
✓ Maximum field lengths

Store:
✓ Data saved correctly to database
✓ No data truncation
✓ Proper encoding (UTF-8)

Retrieve:
✓ Data retrieved accurately
✓ All fields present

Display:
✓ Data displayed correctly
✓ Formatting preserved
✓ Special characters render

Update:
✓ Changes saved
✓ Version control (if applicable)
✓ Concurrent updates handled

Delete:
✓ Data removed completely
✓ No orphaned records
✓ Cascade deletes (if applicable)

Duration: 2-3 hours

S - STRUCTURE TOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Test application structure and architecture

Explore:
- File structure
- URL patterns
- API endpoints
- Code organization
- Dependencies

Example: Web Application

URL Structure:
/products → List products
/products/123 → Product details
/products/123/reviews → Product reviews
Test: /products/abc → How is invalid ID handled?
Test: /products/../admin → Can I bypass security?

API Endpoints:
GET /api/users → Requires auth?
POST /api/users → Can create user?
DELETE /api/users/me → Can delete own account?
Test: Direct API access
Test: Missing auth tokens
Test: Malformed requests

File Structure:
- Are source maps exposed? (security risk)
- Can I access /admin/ directly?
- Are backup files accessible? (.bak, ~)

Duration: 1-2 hours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOUR SELECTION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

New Application:
Start with: Feature Tour, Scenarios Tour, User Tour

Mature Application:
Focus on: Complexity Tour, Variability Tour, Data Tour

Before Release:
Must do: Claims Tour, Scenarios Tour, Configuration Tour

Security Focus:
Prioritize: Structure Tour, User Tour (malicious), Data Tour

Integration Heavy:
Essential: Interoperability Tour, Data Tour

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Session-Based Test Management (SBTM)

### 3.1 SBTM Overview

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SESSION-BASED TEST MANAGEMENT (SBTM)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DEFINITION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SBTM is a framework for managing exploratory testing
through time-boxed testing sessions guided by charters.

Created by: Jon Bach and James Bach (2000)

Purpose:
✓ Structure exploratory testing
✓ Make it manageable
✓ Track progress
✓ Measure productivity
✓ Provide accountability

Key Concepts:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SESSION
Time-boxed period of uninterrupted testing
- Duration: 60-120 minutes
- Guided by charter
- One tester (or pair)

2. CHARTER
Mission statement for testing session
- What to test
- How to test it
- What to look for

3. TIME BOX
Fixed duration
- Forces focus
- Enables planning
- Allows estimation

4. DEBRIEFING
Review session results
- What was tested
- What was found
- What remains

5. METRICS
Quantifiable data
- Test coverage
- Session count
- Defect count
- Time spent

SBTM WORKFLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌────────────────────────────────────────────┐
│ 1. CREATE CHARTER                          │
│    Define testing mission                  │
└────────────────┬───────────────────────────┘
                 ↓
┌────────────────────────────────────────────┐
│ 2. CONDUCT SESSION (90 minutes)            │
│    - Set up (5-10 min)                     │
│    - Test (70-80 min)                      │
│    - Document (5-10 min)                   │
└────────────────┬───────────────────────────┘
                 ↓
┌────────────────────────────────────────────┐
│ 3. DEBRIEF (15-30 minutes)                 │
│    Review findings with stakeholders       │
└────────────────┬───────────────────────────┘
                 ↓
┌────────────────────────────────────────────┐
│ 4. REPORT & METRICS                        │
│    Track progress and results              │
└────────────────────────────────────────────┘

BENEFITS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Structured yet flexible
✓ Trackable progress
✓ Measurable results
✓ Better time management
✓ Clear accountability
✓ Efficient use of tester skills
✓ Adapts to findings
✓ Stakeholder visibility

VS. UNSTRUCTURED EXPLORATORY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Unstructured Exploratory:
"Go test the app"
✗ Hard to track
✗ Difficult to estimate
✗ Unknown coverage
✗ Unpredictable results

SBTM:
"Conduct 3 sessions (90 min each) testing payment feature"
✓ Trackable (3 sessions)
✓ Estimated (4.5 hours)
✓ Defined scope (payment)
✓ Measurable outcome (session reports)

WHEN TO USE SBTM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Perfect For:
✓ Exploratory testing needs management
✓ New features requiring investigation
✓ Complex features
✓ Supplementing scripted tests
✓ Time-boxed testing efforts

Not Necessary For:
✗ Simple scripted testing
✗ One-off quick checks
✗ Ad-hoc testing (< 30 min)

TYPICAL SPRINT USAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2-Week Sprint Testing Plan:

Week 1:
- Days 1-5: Scripted testing (regression, new feature)
- 8-10 SBTM sessions (2 per day, 90 min each)

Week 2:
- Days 1-3: Continue testing
- 6 SBTM sessions
- Days 4-5: Bug fixes, retesting

Total: 14-16 SBTM sessions per sprint

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Charter Creation

### 4.1 Writing Effective Charters

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHARTER CREATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CHARTER DEFINITION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A charter is a statement that defines the scope and
objective of a testing session.

Purpose:
✓ Provides focus
✓ Sets boundaries
✓ Communicates intent
✓ Enables planning
✓ Guides exploration

CHARTER TEMPLATE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Standard Format:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Explore [AREA]
With [RESOURCES]
To Discover [INFORMATION]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Components:

AREA:
What part of the application to test
- Feature, module, functionality
- Specific enough to complete in session
- Not too narrow, not too broad

RESOURCES:
Tools, data, techniques to use
- Test data sets
- Testing tools
- Specific techniques/tours
- Documentation

INFORMATION:
What you're looking for
- Types of bugs
- Quality attributes
- Specific concerns
- Questions to answer

EXAMPLE CHARTERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1: Basic Charter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Explore the login functionality
With valid and invalid credentials
To discover authentication and security issues

Details:
- Area: Login feature
- Resources: Test accounts (valid/invalid)
- Goal: Find auth bugs

Example 2: Tour-Based Charter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Explore the shopping cart feature
With a variability tour approach
To discover data handling and calculation errors

Details:
- Area: Shopping cart
- Resources: Variability tour (vary inputs)
- Goal: Find data/calculation bugs

Example 3: Integration Charter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Explore payment processing
With multiple payment methods and test transactions
To discover integration and error handling issues

Details:
- Area: Payment feature
- Resources: Various payment methods, test cards
- Goal: Find integration problems

Example 4: Scenario-Based Charter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Explore the complete checkout workflow
With a first-time buyer scenario
To discover usability and workflow issues

Details:
- Area: End-to-end checkout
- Resources: New user scenario
- Goal: Find UX problems

Example 5: Risk-Based Charter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Explore user profile management
With boundary and malicious inputs
To discover security vulnerabilities and data validation issues

Details:
- Area: Profile feature
- Resources: Boundary values, attack patterns
- Goal: Find security/validation bugs

Example 6: Platform-Specific Charter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Explore mobile app on iOS
With gesture interactions and orientation changes
To discover mobile-specific issues

Details:
- Area: Mobile app (iOS)
- Resources: iOS device, gestures
- Goal: Find mobile bugs

CHARTER QUALITY CHECKLIST:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Good Charter:
✓ Specific enough (can be completed in 90 min)
✓ Clear objective
✓ Defines resources
✓ Testable
✓ Independent (not dependent on other charters)
✓ Valuable (worth doing)

Poor Charter Examples:

Too Broad:
- ❌ "Test the entire application"
   → Would take days, not one session

Too Narrow:
- ❌ "Verify login button is blue"
   → Too trivial, not worth 90 minutes

Vague:
- ❌ "Test stuff and find bugs"
   → No clear direction

No Resources:
- ❌ "Explore payment processing"
   → Missing: how to test, what to use

CHARTER SIZING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Too Big (> 2 hours):
"Explore entire e-commerce workflow from search to delivery"
→ Split into multiple charters:
  1. Search and product selection
  2. Cart and checkout
  3. Order tracking and delivery

Just Right (60-120 min):
"Explore shopping cart with various product types and quantities"

Too Small (< 30 min):
"Click logout button and verify redirection"
→ Combine with related testing:
"Explore authentication flows including login, logout, and session management"

CHARTER MANAGEMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Charter List for Sprint:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ID  │ Charter                              │ Priority│Status
━━━━┼──────────────────────────────────────┼─────────┼────────
C001│ Explore login feature...             │ P0      │Done
C002│ Explore payment processing...        │ P0      │Done
C003│ Explore cart functionality...        │ P1      │Done
C004│ Explore search feature...            │ P1      │Pending
C005│ Explore order history...             │ P2      │Pending
C006│ Explore profile management...        │ P2      │Pending

ADVANCED CHARTER TECHNIQUES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PROGRESSIVE CHARTERS:
Session 1: Explore feature X basics
Session 2: Explore feature X edge cases (builds on Session 1)
Session 3: Explore feature X integrations

2. PAIRED CHARTERS:
Tester A: Explore UI from user perspective
Tester B: Explore same feature from security perspective
Then: Compare findings

3. RISK-BASED CHARTERS:
Prioritize charters based on risk assessment
High-risk areas get multiple charters
Low-risk areas get sampled

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SAMPLE CHARTER BANK (E-COMMERCE APP)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUTHENTICATION & USER MANAGEMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
C-AUTH-001:
Explore login functionality
With valid, invalid, and boundary credentials
To discover authentication vulnerabilities and error handling issues

C-AUTH-002:
Explore password reset workflow
With various email addresses and scenarios
To discover security and usability issues

C-AUTH-003:
Explore user registration
With data variability tour approach
To discover validation and data handling issues

PRODUCT & CATALOG:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
C-PROD-001:
Explore product search functionality
With various search terms and filters
To discover search accuracy and performance issues

C-PROD-002:
Explore product details page
With different product types
To discover display and data inconsistencies

C-PROD-003:
Explore product catalog navigation
With scenarios tour approach
To discover navigation and filtering issues

SHOPPING CART:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
C-CART-001:
Explore shopping cart functionality
With various product quantities and types
To discover calculation and state management issues

C-CART-002:
Explore cart persistence
With interrupt and resume scenarios
To discover data persistence issues

CHECKOUT & PAYMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
C-CHECK-001:
Explore checkout workflow
With first-time buyer scenario
To discover usability and workflow issues

C-PAY-001:
Explore payment processing
With multiple payment methods
To discover integration and error handling issues

C-PAY-002:
Explore payment with promo codes
With various discount scenarios
To discover calculation and validation issues

ORDER MANAGEMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
C-ORDER-001:
Explore order history
With various order states
To discover display and filtering issues

C-ORDER-002:
Explore order tracking
With real-time updates
To discover integration and refresh issues

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Session Execution & Documentation

### 5.1 Conducting a Testing Session

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SESSION EXECUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SESSION STRUCTURE (90 minutes):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────┐
│ PHASE 1: SETUP (5-10 minutes)                       │
│ - Review charter                                    │
│ - Prepare environment                               │
│ - Gather resources                                  │
│ - Start timer                                       │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│ PHASE 2: TESTING (70-80 minutes)                    │
│ - Execute tests                                     │
│ - Explore features                                  │
│ - Document findings                                 │
│ - Log bugs                                          │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│ PHASE 3: WRAP-UP (5-10 minutes)                     │
│ - Finish current activity                           │
│ - Complete session sheet                            │
│ - Save artifacts                                    │
└─────────────────────────────────────────────────────┘

DETAILED PHASE BREAKDOWN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1: SETUP (5-10 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Activities:
□ Read charter carefully
□ Understand objective
□ Prepare test environment
  - Login to application
  - Open necessary tools
  - Load test data
□ Review any related documentation
□ Set up recording (if needed)
  - Screen recording
  - Note-taking tool
□ Start timer
□ Begin testing

PHASE 2: TESTING (70-80 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Activities:
□ Follow charter guidance
□ Explore feature systematically
□ Try different inputs
□ Observe behaviors
□ Document in real-time:
  - What you're testing
  - What you observe
  - Issues found
  - Questions raised
□ Log defects as found
□ Take screenshots/videos
□ Stay focused on charter
□ Adapt based on findings

Time Breakdown Example:
Minutes 1-20: Basic functionality testing
Minutes 21-40: Edge cases and variations
Minutes 41-60: Integration points
Minutes 61-80: Follow interesting issues

Note-Taking During Testing:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10:00 - Started testing login feature
10:05 - Verified valid login works
10:12 - Testing invalid password - error message unclear
10:15 - BUG: SQL error displayed when username contains '
10:20 - Testing password reset flow
10:25 - Password reset email received after 3 minutes (slow?)
10:30 - Reset link expires after 1 hour (is this documented?)
...

PHASE 3: WRAP-UP (5-10 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Activities:
□ Stop timer
□ Complete session sheet
□ Categorize time spent
□ List test areas covered
□ Summarize findings
□ Note any follow-up needed
□ Save all artifacts:
  - Screenshots
  - Logs
  - Test data used
  - Recordings
□ Submit defect reports

SESSION SHEET TEMPLATE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SESSION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Session ID: SESS-2026-01-04-001
Tester: John Doe
Date: 2026-01-04
Duration: 90 minutes

CHARTER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Explore login functionality
With valid and invalid credentials
To discover authentication and security issues

AREAS COVERED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Login with valid credentials
✓ Login with invalid credentials
✓ Password reset workflow
✓ Account lockout mechanism
✓ Session management
✓ "Remember Me" functionality
✓ SQL injection attempts
✓ XSS attempts

DEFECTS FOUND: 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BUG-001: SQL error exposed with single quote in username
         Severity: Critical

BUG-002: Password reset email takes 3-5 minutes to arrive
         Severity: Medium

BUG-003: Error message "Invalid credentials" not specific
         Security issue: reveals if username exists
         Severity: Low

ISSUES/CONCERNS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Account lockout after 3 failed attempts (is this documented?)
- Reset link expires after 1 hour (could be longer?)
- No CAPTCHA on login form (brute force possible?)

QUESTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- What is intended session timeout duration?
- Should "Remember Me" persist across browser restarts?
- Is two-factor authentication planned?

TIME BREAKDOWN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Setup:        10 min  (11%)
Testing:      70 min  (78%)
Bug Reporting: 10 min  (11%)

DATA FILES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Screenshots: /sessions/2026-01-04/screenshots/ (15 files)
- Screen recording: /sessions/2026-01-04/session-001.mp4
- Test data: /sessions/2026-01-04/test-accounts.csv

OPPORTUNITY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Follow-up session needed to test:
- Multi-factor authentication (if available)
- OAuth login (Google, Facebook)
- Password strength requirements
- Session fixation vulnerabilities

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TIME BREAKDOWN CATEGORIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TBS (Test, Bug, Setup) Model:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEST: Time spent actively testing
- Executing tests
- Exploring features
- Observing behaviors

BUG: Time spent on defects
- Investigating bugs
- Writing bug reports
- Reproducing issues
- Taking screenshots

SETUP: Time spent on preparation
- Environment setup
- Data preparation
- Tool configuration
- Research/learning

Ideal Distribution:
Test: 70-80%
Bug: 10-20%
Setup: 5-10%

Warning Signs:
Setup > 20%: Environment issues
Bug > 40%: Quality problems
Test < 60%: Inefficient session

Example:
90-minute session
Test: 65 min (72%) ✓ Good
Bug: 15 min (17%) ✓ Good
Setup: 10 min (11%) ⚠ A bit high but acceptable

OPPORTUNITIES (Future Testing):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What to note:
✓ Areas not covered (ran out of time)
✓ Interesting findings worth deeper exploration
✓ Follow-up charters needed
✓ Related features to test
✓ Questions that arose

Example Opportunities:
"Found unusual behavior with concurrent logins. Suggest:
- Session 2: Explore concurrent session handling
- Session 3: Test session timeout variations
- Session 4: Investigate session security"

DOCUMENTATION BEST PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

During Session:
✓ Write as you test (real-time notes)
✓ Use timestamps
✓ Be descriptive but concise
✓ Capture evidence (screenshots)
✓ Note exact steps to reproduce

After Session:
✓ Complete session sheet immediately
✓ Don't rely on memory
✓ Organize artifacts
✓ Submit bug reports
✓ File session report

INTERRUPTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

How to Handle:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sessions should be uninterrupted, but if interrupted:

Minor (<5 min):
- Pause timer
- Handle interruption
- Resume session
- Note interruption time

Major (>5 min):
- End session early
- Complete partial session sheet
- Schedule continuation session

Example:
"Session interrupted at 45 minutes due to production issue.
 Resumed 2 hours later for remaining 45 minutes (new session)."

TOOLS FOR SESSION MANAGEMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Simple:
- Stopwatch/timer
- Text editor for notes
- Screenshot tool
- Bug tracking system

Sophisticated:
- Session management tools (Rapid Reporter, Session Tester)
- Screen recording software
- Mind mapping tools
- Specialized SBTM tools

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Debriefing & Reporting

### 6.1 Session Debriefing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SESSION DEBRIEFING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PURPOSE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Debriefing is a structured conversation between tester
and stakeholders to review session results and plan next steps.

Goals:
✓ Share findings
✓ Discuss issues discovered
✓ Answer questions
✓ Plan follow-up testing
✓ Make decisions

Benefits:
✓ Immediate communication
✓ Collaborative problem-solving
✓ Quick feedback loop
✓ Stakeholder visibility
✓ Course correction

DEBRIEF TIMING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When: Within 24 hours of session completion
Duration: 15-30 minutes per session
Frequency:
- Daily for critical testing
- Weekly for routine testing
- Immediately for critical findings

DEBRIEF PARTICIPANTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Required:
✓ Tester (session owner)
✓ Test Lead/Manager

Optional (as needed):
✓ Product Owner
✓ Developer
✓ Business Analyst
✓ Other testers

DEBRIEF AGENDA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Review Charter (2 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Remind everyone of session objective
- Confirm scope

Example:
"This session explored login functionality with valid and
 invalid credentials to discover authentication issues."

2. Areas Covered (3 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- What was actually tested
- Coverage achieved

Example:
"Tested:
- Valid/invalid login attempts
- Password reset flow
- Account lockout
- Session management
- Basic security tests (SQL injection, XSS)"

3. Findings Discussion (10-15 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Defects found (review each)
- Issues and concerns
- Questions raised

For Each Defect:
✓ Brief description
✓ Severity assessment
✓ Impact analysis
✓ Reproduction steps
✓ Evidence (show screenshots)
✓ Discussion

Example Dialog:
Tester: "Found critical SQL injection vulnerability. Username
         field accepts single quote, exposing database error."
Dev: "That's serious. Can you show reproduction steps?"
Tester: "Yes, here's the screenshot..."
Manager: "Priority P0. Fix immediately."

4. Opportunities (3 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Areas not covered (time constraints)
- Suggested follow-up testing
- New charters needed

Example:
"Didn't have time to test OAuth login. Recommend follow-up
 session focusing on third-party authentication."

5. Metrics Review (2 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Time breakdown (TBS)
- Session efficiency
- Coverage metrics

Example:
"Session duration: 90 minutes
 Testing: 70 min (78%)
 Bug investigation: 15 min (17%)
 Setup: 5 min (5%)
 Efficiency: Good"

6. Next Steps (3 min)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Immediate actions
- Follow-up sessions
- Dependencies

Example:
"Next steps:
- Developer fixes SQL injection (today)
- Retest after fix
- Schedule OAuth testing session tomorrow"

DEBRIEF BEST PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DO:
✓ Be prepared (session sheet complete)
✓ Be concise (respect time)
✓ Show evidence (screenshots)
✓ Focus on facts
✓ Provide context
✓ Suggest solutions
✓ Listen to feedback

DON'T:
✗ Wing it (unprepared)
✗ Ramble (time wasting)
✗ Make accusations
✗ Assign blame
✗ Get defensive
✗ Overload with detail

DEBRIEF DOCUMENTATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Debrief Meeting Notes Template:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEBRIEF MEETING - Session SESS-2026-01-04-001
Date: 2026-01-04 15:00
Attendees: John Doe (Tester), Jane Smith (Test Lead),
           Bob Johnson (Developer)

CHARTER REVIEW:
Explored login functionality with security focus

KEY FINDINGS:
1. BUG-001: SQL injection (P0) → Fix immediately
2. BUG-002: Slow password reset email (P2) → Investigate
3. BUG-003: Error message too specific (P3) → Consider

DECISIONS:
- BUG-001: Developer fixing today, retest tomorrow
- BUG-002: Performance team to investigate
- BUG-003: Discuss with security team

FOLLOW-UP:
- OAuth testing session scheduled for tomorrow
- Multi-factor auth testing next week

ACTION ITEMS:
[ ] Bob: Fix SQL injection by EOD
[ ] John: Retest tomorrow after fix
[ ] Jane: Schedule OAuth session

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VIRTUAL DEBRIEFING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
For remote teams:
✓ Use video conferencing
✓ Share screen for evidence
✓ Record meeting (if appropriate)
✓ Use collaborative docs
✓ Follow same agenda

ASYNCHRONOUS DEBRIEFING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When meetings not possible:
✓ Detailed session report
✓ Email summary with evidence
✓ Recorded screen demo
✓ Slack/Teams update
✓ Request feedback

Example Email Debrief:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: Session SESS-2026-01-04-001 Results - CRITICAL ISSUE

Team,

Completed exploratory testing of login functionality.

🔴 CRITICAL: Found SQL injection vulnerability (BUG-001)
   Screenshot: [attached]
   Reproduction: Enter "admin'--" in username field
   Recommendation: Fix immediately

Other findings:
- Password reset email slow (2-5 min)
- Error messages reveal user existence

Full report: [link to session sheet]

Next session: OAuth testing tomorrow

Questions? Let's discuss.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 6.2 SBTM Metrics & Reporting

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SBTM METRICS & REPORTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY METRICS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SESSION COUNT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tracks: Number of sessions completed

Formula: Total sessions conducted

Example:
Sprint 1: 12 sessions
Sprint 2: 15 sessions
Sprint 3: 10 sessions

Insight: Session count trending up/down

2. TEST COVERAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tracks: Areas/features tested

Formula:
Coverage = (Features Tested / Total Features) × 100%

Example:
Total Features: 20
Features Tested: 16
Coverage: 80%

Tracking Method:
Feature Matrix:
┌──────────────────┬──────────┬────────────┐
│ Feature          │ Sessions │ Status     │
├──────────────────┼──────────┼────────────┤
│ Login            │ 3        │ Complete   │
│ Search           │ 2        │ Complete   │
│ Cart             │ 2        │ Complete   │
│ Checkout         │ 4        │ In Progress│
│ Payment          │ 0        │ Not Started│
└──────────────────┴──────────┴────────────┘

3. DEFECT DISCOVERY RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tracks: Bugs found per session

Formula:
DDR = Total Defects Found / Total Sessions

Example:
Sessions: 15
Defects Found: 45
DDR: 3.0 defects per session

Trending:
Week 1: 4.2 bugs/session (lots of issues)
Week 2: 3.1 bugs/session (improving)
Week 3: 1.5 bugs/session (quality improving)

4. SESSION EFFICIENCY (TBS Ratio)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tracks: How time is spent in sessions

Ideal Distribution:
Test: 70-80%
Bug: 10-20%
Setup: 5-10%

Example:
Session 1:
- Test: 65 min (72%)
- Bug: 20 min (22%)
- Setup: 5 min (6%)
Assessment: Good, slightly high bug time (quality issues?)

Session 2:
- Test: 50 min (56%)
- Bug: 10 min (11%)
- Setup: 30 min (33%)
Assessment: Poor, excessive setup time (environment problems?)

5. CHARTER COMPLETION RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tracks: Whether charters achieved objectives

Formula:
CCR = (Completed Charters / Total Charters) × 100%

Example:
Total Charters: 20
Completed: 18
Partial: 1
Not Started: 1
CCR: 90%

6. OPPORTUNITY BACKLOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tracks: Follow-up testing identified

Measure: Number of new charters generated from sessions

Example:
Sessions Conducted: 10
New Charters Created: 15

Insight: Sessions are uncovering more areas to test
(good for thoroughness, may need more time)

WEEKLY SBTM REPORT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPLORATORY TESTING WEEKLY REPORT
Week of: Jan 1-5, 2026
Tester: John Doe

SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Sessions: 12
Total Time: 18 hours (1,080 minutes)
Charters Completed: 10
Defects Found: 36

METRICS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Defect Discovery Rate: 3.0 bugs/session
Session Efficiency: 75% test, 18% bug, 7% setup
Coverage: 65% of features tested

DEFECTS BY SEVERITY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Critical (P0): 3
High (P1): 12
Medium (P2): 15
Low (P3): 6

AREAS TESTED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Authentication (3 sessions)
✓ Shopping Cart (2 sessions)
✓ Checkout (4 sessions)
✓ Search (2 sessions)
✓ Product Catalog (1 session)

HIGHLIGHTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Critical SQL injection found in login
- ✅ Payment integration working well
⚠️ Performance concerns with search (>5 sec response)

NEXT WEEK PLAN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Complete remaining 4 charters
- Retest fixed critical bugs
- Focus on mobile app testing

SPRINT SBTM REPORT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPLORATORY TESTING SPRINT REPORT
Sprint 15 (Dec 18 - Dec 29, 2025)

OVERALL STATISTICS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Sessions: 24
Total Time: 36 hours
Testers: 3
Features Tested: 18 of 22 (82% coverage)
Defects Found: 67

DEFECT ANALYSIS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
By Severity:
┌──────────┬───────┬────────┐
│ Severity │ Count │ % │
├──────────┼───────┼────────┤
│ Critical │ 5     │ 7%     │
│ High     │ 18    │ 27%    │
│ Medium   │ 31    │ 46%    │
│ Low      │ 13    │ 20%    │
└──────────┴───────┴────────┘

By Module:
┌────────────────┬───────┐
│ Module         │ Bugs  │
├────────────────┼───────┤
│ Checkout       │ 18    │
│ Payment        │ 15    │
│ Cart           │ 12    │
│ Authentication │ 10    │
│ Search         │ 7     │
│ Other          │ 5     │
└────────────────┴───────┘

EFFICIENCY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Average Session Breakdown:
Test: 74%
Bug: 19%
Setup: 7%
Assessment: Good efficiency

COVERAGE HEAT MAP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ✅ Well Covered (3+ sessions):
- Authentication
- Checkout
- Payment

⚠️ Partially Covered (1-2 sessions):
- Search
- Product Catalog
- Order History

- ❌ Not Covered:
- Reports
- Admin Panel
- Settings
- FAQs

TRENDS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
vs. Previous Sprint:
Sessions: +20% (20 → 24)
Defects: +34% (50 → 67)
DDR: +12% (2.5 → 2.8)

Observation: More bugs found, but DDR not proportionally
higher = quality may be declining

RECOMMENDATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Address high defect density in Checkout/Payment modules
2. Complete coverage of uncovered features next sprint
3. Consider code review for checkout module
4. Performance testing needed for search

DASHBOARDS & VISUALIZATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Session Burndown Chart
Shows: Sessions completed vs. planned over time

   24┤                               ╭───╮
   20┤                         ╭─────╯   │
   16┤                   ╭─────╯         │
   12┤            ╭──────╯               │
    8┤      ╭─────╯                      │
    4┤╭─────╯                            │
    0└─────────────────────────────────────
     D1  D3  D5  D7  D9  D11  D13  D15

2. Coverage Matrix
Shows: Which features have been tested

Features    │ Sessions │ Status
──────────────────────────────────
Login       │ ■■■      │ ✅ Complete
Search      │ ■■       │ ⚠️ Partial
Cart        │ ■■       │ ⚠️ Partial
Checkout    │ ■■■■     │ ✅ Complete
Payment     │ ■■■■     │ ✅ Complete
Reports     │          │ ❌ Not Started

3. Defect Discovery Trend
Shows: Bugs found per week

Bugs
 60┤           ╭─╮
 50┤        ╭──╯ ╰╮
 40┤     ╭──╯     ╰─╮
 30┤  ╭──╯           ╰─╮
 20┤──╯                ╰──
  0└────────────────────────
   W1  W2  W3  W4  W5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Summary & Key Takeaways

### Day 13 Key Concepts:

1. **Exploratory Testing:**
   - Simultaneous learning, test design, and execution
   - NOT random testing - structured and purposeful
   - Guided by heuristics (CRUD, Goldilocks, consistency, interrupt/resume)
   - Blended approach: 70% scripted, 30% exploratory

2. **Testing Tours (FCC CUTS VIDS):**
   - 11 different tour types for structured exploration
   - Business District: Feature, Complexity, Claims
   - Historical District: Configuration, User, Testability, Scenarios
   - Entertainment District: Variability, Interoperability, Data, Structure
   - Each tour provides different perspective and coverage

3. **Session-Based Test Management:**
   - Framework for managing exploratory testing
   - Time-boxed sessions (60-120 minutes)
   - Three phases: Setup, Testing, Wrap-up
   - TBS model: Test 70-80%, Bug 10-20%, Setup 5-10%

4. **Charter Creation:**
   - Format: Explore [AREA] With [RESOURCES] To Discover [INFORMATION]
   - Specific enough for one session
   - Independent and testable
   - Charter bank for organized planning

5. **Session Execution:**
   - Structured 90-minute format
   - Real-time documentation
   - Session sheet template
   - Evidence collection (screenshots, recordings)

6. **Debriefing & Reporting:**
   - 15-30 minute structured review
   - Share findings and discuss issues
   - Plan follow-up testing
   - Track metrics: Session count, coverage, defect rate, efficiency
   - Weekly and sprint reports

### Best Practices:

✓ Use charters to guide exploratory testing
✓ Time-box sessions (90 minutes recommended)
✓ Document as you test (real-time notes)
✓ Debrief within 24 hours
✓ Track TBS metrics for efficiency
✓ Combine multiple tour approaches
✓ Create charter banks for organized testing
✓ Use session reports for transparency
✓ Measure defect discovery rate
✓ Balance exploratory with scripted testing

### Tomorrow's Preview:

Day 14 will cover:
- Week 2 Comprehensive Review
- Advanced Practical Projects
- 60-Question Assessment
- Gap Analysis
- Week 3 Preparation

---

**Congratulations on completing Day 13!**

**Study Time:** 5-6 hours

---

*End of Day 13 Study Guide*
