# Day 7: Week 1 Review & Practical Assessment
## Comprehensive Study Guide

---

## Table of Contents
1. [Week 1 Comprehensive Review](#week-1-comprehensive-review)
2. [Key Concepts Summary](#key-concepts-summary)
3. [Practical Assessment Project](#practical-assessment-project)
4. [100-Question Assessment](#100-question-assessment)
5. [Gap Analysis](#gap-analysis)
6. [Week 2 Preparation](#week-2-preparation)

---

## Week 1 Comprehensive Review

### 1.1 Day-by-Day Summary

**DAY 1: Manual Testing Fundamentals & SDLC Integration**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Manual Testing Definition & Objectives
✓ Manual vs Automated Testing
✓ SDLC Models:
  - Waterfall (Sequential)
  - Agile/Scrum (Iterative)
  - V-Model (Verification & Validation)
  - Spiral (Risk-driven)
  - DevOps (Continuous)
✓ Shift-Left Testing Principles
✓ STLC 6 Phases:
  1. Requirement Analysis
  2. Test Planning
  3. Test Case Design
  4. Test Environment Setup
  5. Test Execution
  6. Test Closure

Core Skill Acquired:
→ Understanding where testing fits in development lifecycle
→ Ability to plan testing activities
```

**DAY 2: Testing Levels & Types**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ 4 Testing Levels:
  - Unit Testing
  - Integration Testing (4 approaches)
  - System Testing
  - Acceptance Testing (UAT, Alpha, Beta)

✓ Testing Types:
  Functional:
  - Smoke Testing
  - Sanity Testing
  - Regression Testing
  - Re-testing

  Non-Functional:
  - Performance Testing
  - Security Testing
  - Usability Testing
  - Compatibility Testing

Core Skill Acquired:
→ Knowing WHAT and WHEN to test
→ Selecting appropriate testing types
```

**DAY 3: Test Case Design Techniques - Part 1**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Equivalence Partitioning (EP)
  - Valid and invalid classes
  - Reduces test cases dramatically

✓ Boundary Value Analysis (BVA)
  - Two-value, Three-value, Robust, Worst-case
  - Catches off-by-one errors

✓ Decision Table Testing
  - Complex business rules
  - Condition-action combinations

✓ State Transition Testing
  - State-based systems
  - Valid and invalid transitions

Core Skill Acquired:
→ Designing effective test cases systematically
→ Maximum coverage with minimum cases
```

**DAY 4: Test Case Design Techniques - Part 2**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Use Case Testing
  - Basic, alternate, exception flows
  - End-to-end scenarios

✓ Error Guessing
  - Experience-based technique
  - Common error patterns

✓ Exploratory Testing
  - Charter-based sessions (SBTM)
  - Testing tours (FCC CUTS VIDS)
  - Simultaneous learning and testing

✓ White Box Testing (QA Perspective)
  - Statement coverage
  - Branch coverage
  - Path coverage

Core Skill Acquired:
→ Complementing structured techniques with creativity
→ Finding defects through exploration
```

**DAY 5: Test Documentation & Artifacts**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Test Plan (IEEE 829)
  - 16 standard sections
  - Comprehensive planning

✓ Test Case Documentation
  - Structure and format
  - Best practices

✓ Test Scenario vs Test Case
  - High-level vs detailed

✓ Requirements Traceability Matrix (RTM)
  - Requirement to test case mapping
  - Coverage tracking

✓ Test Reports
  - Daily execution reports
  - Test summary reports
  - Test closure reports

Core Skill Acquired:
→ Professional documentation skills
→ Clear communication with stakeholders
```

**DAY 6: Defect Management & Bug Life Cycle**
```
Key Topics Covered:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Bug Life Cycle (10 states)
  - NEW → ASSIGNED → IN PROGRESS → FIXED →
    RETEST → VERIFIED → CLOSED
  - Plus: REOPENED, DEFERRED, REJECTED

✓ Defect Reporting Best Practices
  - Clear titles
  - Reproduction steps
  - Environment details
  - Evidence (screenshots, logs)

✓ Severity vs Priority
  - Technical impact vs business urgency
  - Matrix examples

✓ Defect Metrics
  - Defect Density
  - Defect Removal Efficiency (DRE)
  - Defect Leakage
  - MTTD, MTTR

Core Skill Acquired:
→ Professional defect tracking and reporting
→ Data-driven quality assessment
```

---

## Key Concepts Summary

### 2.1 Critical Formulas & Calculations

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MUST-KNOW FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Test Coverage
   = (Requirements with Test Cases / Total Requirements) × 100%

2. Pass Percentage
   = (Test Cases Passed / Test Cases Executed) × 100%

3. Defect Density
   = Total Defects / Size (KLOC or Modules)

4. Defect Removal Efficiency (DRE)
   = (Defects Found Before Release / Total Defects) × 100%

5. Defect Leakage
   = (Defects in Production / Total Defects) × 100%

6. Defect Rejection Ratio
   = (Rejected Defects / Total Logged Defects) × 100%

7. Mean Time to Repair (MTTR)
   = Total Fix Time / Number of Defects Fixed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 2.2 Quick Reference Tables

**STLC Phase Summary:**
```
┌────────────────────┬─────────────────┬───────────────────┐
│ Phase              │ Key Activity    │ Deliverable       │
├────────────────────┼─────────────────┼───────────────────┤
│ Requirement Analyze│ Review reqs     │ RTM               │
│ Test Planning      │ Define strategy │ Test Plan         │
│ Test Case Design   │ Write TCs       │ Test Cases        │
│ Environment Setup  │ Prepare env     │ Ready Environment │
│ Test Execution     │ Execute TCs     │ Defect Reports    │
│ Test Closure       │ Summary report  │ Closure Report    │
└────────────────────┴─────────────────┴───────────────────┘
```

**Test Design Techniques:**
```
┌──────────────────────┬─────────────────────────────────┐
│ Technique            │ When to Use                     │
├──────────────────────┼─────────────────────────────────┤
│ Equivalence Part.    │ Large input ranges              │
│ Boundary Value       │ Numeric/date boundaries         │
│ Decision Table       │ Complex business rules          │
│ State Transition     │ Workflows, state-based systems  │
│ Use Case             │ End-to-end scenarios            │
│ Error Guessing       │ Quick testing, edge cases       │
│ Exploratory          │ New features, learning app      │
└──────────────────────┴─────────────────────────────────┘
```

**Testing Types Quick Guide:**
```
┌──────────────┬────────┬──────────────────────────────┐
│ Type         │ Scope  │ Purpose                      │
├──────────────┼────────┼──────────────────────────────┤
│ Smoke        │ Wide   │ Build verification           │
│ Sanity       │ Narrow │ Specific feature check       │
│ Regression   │ Broad  │ No new bugs in old features  │
│ Re-testing   │ Narrow │ Verify bug fix               │
└──────────────┴────────┴──────────────────────────────┘
```

---

## Practical Assessment Project

### 3.1 Project Overview

**Scenario:** You are the QA Lead for a new mobile food delivery application. Complete all testing activities for the "Order Food" feature.

**Application:** FoodExpress Mobile App
**Platform:** iOS & Android
**Feature:** Complete food ordering flow
**Timeline:** Full day exercise (6-8 hours)

---

### 3.2 Project Requirements

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIREMENTS: FOOD ORDERING FEATURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REQ-001 (P0): Search Restaurants
User shall be able to search for restaurants by:
- Cuisine type (Italian, Chinese, Indian, Mexican)
- Restaurant name
- Delivery time (30 min, 45 min, 60 min)
- Rating (4+ stars, 4.5+ stars)

REQ-002 (P0): Browse Menu
User shall be able to:
- View restaurant menu with item details
- See item price, description, image
- Filter items (Vegetarian, Vegan, Gluten-free)
- Sort items (Price, Popularity, Rating)

REQ-003 (P0): Add to Cart
User shall be able to:
- Add item to cart (quantity 1-10)
- Customize items (size, toppings, special instructions)
- View cart summary (items, quantities, subtotal)
- Update cart (change quantity, remove items)

REQ-004 (P0): Checkout & Payment
User shall be able to:
- Enter/select delivery address
- Select delivery time (ASAP or scheduled)
- Choose payment method (Credit Card, PayPal, Cash)
- Apply promo code (10%-50% discount)
- Review order before placing
- Place order and receive confirmation

REQ-005 (P1): Order Tracking
User shall be able to:
- View order status in real-time
- See estimated delivery time
- Track delivery driver on map
- Contact driver/restaurant

REQ-006 (P2): Order History
User shall be able to:
- View past orders
- Reorder previous orders
- Rate and review orders

Non-Functional Requirements:
REQ-NF-001: Response time < 2 seconds for all operations
REQ-NF-002: Support 1000 concurrent users
REQ-NF-003: Work on iOS 15+ and Android 11+
REQ-NF-004: Payment data must be PCI-DSS compliant
REQ-NF-005: App size < 50 MB

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.3 Project Tasks

**TASK 1: Test Planning (2 hours)**

Create a comprehensive test plan including:
1. Test Plan Identifier
2. Introduction (purpose, scope, objectives)
3. Test Items
4. Features to be tested (prioritized)
5. Features not to be tested
6. Approach (testing types, levels, techniques)
7. Pass/Fail criteria
8. Test deliverables
9. Schedule (2-week testing cycle)
10. Risks and mitigation

**Deliverable:** Complete test plan document (3-5 pages)

---

**TASK 2: Requirements Traceability Matrix (1 hour)**

Create RTM mapping all requirements to test scenarios:
- REQ-001: 10-15 test scenarios
- REQ-002: 8-10 test scenarios
- REQ-003: 12-15 test scenarios
- REQ-004: 15-20 test scenarios
- REQ-005: 8-10 test scenarios
- REQ-006: 6-8 test scenarios

**Deliverable:** RTM spreadsheet with 60-80 test scenarios

---

**TASK 3: Test Case Design (3 hours)**

Design 30 detailed test cases covering:

**Using Equivalence Partitioning & BVA (10 test cases):**
- Search filters (cuisine type, delivery time, rating)
- Item quantity (1-10 range)
- Promo code validation

**Using Decision Table (5 test cases):**
- Payment method + promo code + user type combinations
- Delivery address + time + payment combinations

**Using State Transition (5 test cases):**
- Order status flow: Placed → Confirmed → Preparing → Out for Delivery → Delivered

**Using Use Case (5 test cases):**
- Complete ordering flow (happy path)
- Guest checkout flow
- Scheduled delivery flow
- Order cancellation flow
- Reorder from history

**Error Guessing (5 test cases):**
- Special characters in search
- Very long special instructions
- Out of stock items
- Payment timeout
- Address not in delivery zone

**Deliverable:** 30 detailed test cases with all components

---

**TASK 4: Defect Reporting (30 minutes)**

Write 5 detailed defect reports for these scenarios:

**Defect 1:** Cart total incorrect when promo code applied
- Severity: High
- Priority: P1

**Defect 2:** App crashes when adding 11th item to cart
- Severity: Critical
- Priority: P0

**Defect 3:** Search results don't match selected cuisine filter
- Severity: Medium
- Priority: P1

**Defect 4:** Delivery address save button misaligned on small screens
- Severity: Low
- Priority: P3

**Defect 5:** Payment processing timeout after 30 seconds
- Severity: Critical
- Priority: P0

**Deliverable:** 5 complete defect reports

---

**TASK 5: Test Summary Report (1 hour)**

Create final test summary report including:
- Executive summary
- Test execution summary (assume 80 TCs, 75 passed, 5 failed)
- Defect summary (assume 45 defects found)
- Test metrics (coverage, pass rate, defect density, DRE)
- GO/NO-GO recommendation

**Deliverable:** Complete test summary report (3-4 pages)

---

### 3.4 Evaluation Criteria

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCORING RUBRIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Test Plan (20 points):
- Completeness: All 10 sections (10 pts)
- Clarity: Easy to understand (5 pts)
- Professionalism: Proper format (5 pts)

RTM (15 points):
- Coverage: All requirements mapped (8 pts)
- Traceability: Clear linkage (5 pts)
- Organization: Well-structured (2 pts)

Test Cases (35 points):
- Technique Application: Correct use (10 pts)
- Detail Level: All components included (10 pts)
- Coverage: Diverse scenarios (10 pts)
- Quality: Clear, executable (5 pts)

Defect Reports (15 points):
- Completeness: All sections (7 pts)
- Clarity: Easy to reproduce (5 pts)
- Professionalism: Proper format (3 pts)

Test Summary Report (15 points):
- Completeness: All sections (7 pts)
- Analysis: Meaningful insights (5 pts)
- Recommendation: Justified (3 pts)

Total: 100 points

Grading:
90-100: Excellent - Ready for professional QA work
80-89: Good - Minor improvements needed
70-79: Satisfactory - Practice more
< 70: Needs improvement - Review concepts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 100-Question Assessment

### 4.1 Assessment Structure

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEEK 1 COMPREHENSIVE ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Questions: 100
Time Limit: 2 hours
Passing Score: 70%

Question Types:
- Multiple Choice (40 questions) @ 1 point each = 40 points
- True/False (20 questions) @ 0.5 points each = 10 points
- Scenario-Based (20 questions) @ 2 points each = 40 points
- Short Answer (10 questions) @ 1 point each = 10 points

Total Points: 100

Topics Covered:
- Day 1 (SDLC/STLC): 15 questions
- Day 2 (Levels/Types): 20 questions
- Day 3 (Techniques 1): 15 questions
- Day 4 (Techniques 2): 15 questions
- Day 5 (Documentation): 15 questions
- Day 6 (Defects): 15 questions
- Integration: 5 questions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 4.2 Sample Questions (20 of 100)

**Section A: Multiple Choice (8 questions)**

**Q1. Which SDLC model is most suitable for a project with frequently changing requirements?**
a) Waterfall
b) V-Model
c) Agile
d) Spiral

**Answer:** c) Agile

---

**Q2. What is the first phase of STLC?**
a) Test Planning
b) Test Execution
c) Requirement Analysis
d) Test Case Design

**Answer:** c) Requirement Analysis

---

**Q3. In which testing level do we test interfaces between modules?**
a) Unit Testing
b) Integration Testing
c) System Testing
d) Acceptance Testing

**Answer:** b) Integration Testing

---

**Q4. Which test design technique divides input data into equivalent groups?**
a) Boundary Value Analysis
b) Decision Table
c) Equivalence Partitioning
d) State Transition

**Answer:** c) Equivalence Partitioning

---

**Q5. What does RTM stand for?**
a) Real-Time Monitoring
b) Requirements Traceability Matrix
c) Regression Test Management
d) Risk Testing Methodology

**Answer:** b) Requirements Traceability Matrix

---

**Q6. Which bug state comes after "FIXED"?**
a) CLOSED
b) VERIFIED
c) RETEST
d) REOPENED

**Answer:** c) RETEST

---

**Q7. What is the formula for Defect Removal Efficiency (DRE)?**
a) (Total Defects / Size) × 100
b) (Defects in Production / Total Defects) × 100
c) (Defects Found Before Release / Total Defects) × 100
d) (Rejected Defects / Total Defects) × 100

**Answer:** c) (Defects Found Before Release / Total Defects) × 100

---

**Q8. Which testing type focuses on testing at boundaries?**
a) Exploratory Testing
b) Boundary Value Analysis
c) Error Guessing
d) Use Case Testing

**Answer:** b) Boundary Value Analysis

---

**Section B: True/False (6 questions)**

**Q9. Smoke testing is wide and shallow in scope.**
True / False

**Answer:** True

---

**Q10. Severity and Priority always have the same value for a defect.**
True / False

**Answer:** False (They can be different)

---

**Q11. In V-Model, UAT planning happens during the requirements phase.**
True / False

**Answer:** True

---

**Q12. Regression testing ensures that new bugs aren't introduced in existing functionality.**
True / False

**Answer:** True

---

**Q13. White box testing is based only on requirements without seeing code.**
True / False

**Answer:** False (White box testing involves code analysis)

---

**Q14. Exploratory testing is completely unstructured with no planning.**
True / False

**Answer:** False (Charter-based, has structure)

---

**Section C: Scenario-Based (4 questions)**

**Q15. Scenario: You're testing a login form. The requirement states password must be 8-16 characters. Using BVA, which values would you test?**

a) 7, 8, 16, 17
b) 8, 12, 16
c) 7, 8, 9, 15, 16, 17
d) 1, 8, 16, 20

**Answer:** c) 7, 8, 9, 15, 16, 17 (standard 3-value BVA)

---

**Q16. Scenario: A defect causes the entire application to crash, but it only occurs in a rarely-used admin feature that 2 users access once per month. What severity and priority would you assign?**

a) Severity: Critical, Priority: P0
b) Severity: Critical, Priority: P2
c) Severity: Low, Priority: P3
d) Severity: Medium, Priority: P1

**Answer:** b) Severity: Critical (app crashes), Priority: P2 (low user impact, infrequent use)

---

**Q17. Scenario: Testing results show 90 defects found before release and 10 defects found in production. What is the DRE?**

a) 90%
b) 10%
c) 80%
d) 100%

**Answer:** a) 90% (90/(90+10) × 100 = 90%)

---

**Q18. Scenario: You're testing an insurance premium calculator that depends on: age (<25 or >=25), accidents (yes/no), and car type (economy/luxury). Which test design technique is most appropriate?**

a) Boundary Value Analysis
b) Equivalence Partitioning
c) Decision Table
d) State Transition

**Answer:** c) Decision Table (multiple conditions with combinations)

---

**Section D: Short Answer (2 questions)**

**Q19. List the 6 phases of STLC in order.**

**Answer:**
1. Requirement Analysis
2. Test Planning
3. Test Case Design
4. Test Environment Setup
5. Test Execution
6. Test Closure

---

**Q20. Explain the difference between Smoke Testing and Sanity Testing.**

**Answer:**
- **Smoke Testing:** Wide and shallow testing to verify build stability and critical functionality. Done before detailed testing.
- **Sanity Testing:** Narrow and deep testing of specific functionality after bug fix or minor change. Subset of regression testing.

---

*(Note: This is a sample of 20 questions. Full assessment has 100 questions covering all Week 1 topics)*

---

## Gap Analysis

### 5.1 Self-Assessment Checklist

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEEK 1 KNOWLEDGE CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Rate your confidence (1-5):
1 = No understanding
2 = Basic awareness
3 = Can explain and apply
4 = Can teach others
5 = Expert level

DAY 1: SDLC & STLC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Manual testing definition and when to use       [ /5]
□ SDLC models (all 6) and their characteristics   [ /5]
□ Shift-left testing concept and benefits         [ /5]
□ All 6 STLC phases and their activities          [ /5]
□ Entry/exit criteria for each STLC phase         [ /5]

Subtotal Day 1:  [ /25]

DAY 2: TESTING LEVELS & TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Unit testing (QA perspective)                   [ /5]
□ Integration testing (4 approaches)              [ /5]
□ System testing (functional & non-functional)    [ /5]
□ Acceptance testing (UAT, Alpha, Beta)           [ /5]
□ Smoke vs Sanity vs Regression vs Re-testing     [ /5]

Subtotal Day 2:  [ /25]

DAY 3: TEST DESIGN TECHNIQUES - PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Equivalence Partitioning with examples          [ /5]
□ Boundary Value Analysis (all types)             [ /5]
□ Decision Table creation and testing             [ /5]
□ State Transition diagrams and testing           [ /5]
□ Selecting appropriate technique                 [ /5]

Subtotal Day 3:  [ /25]

DAY 4: TEST DESIGN TECHNIQUES - PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Use Case testing (basic/alternate/exception)    [ /5]
□ Error Guessing patterns and application         [ /5]
□ Exploratory testing and SBTM                    [ /5]
□ White box testing concepts (coverage types)     [ /5]
□ When to use each technique                      [ /5]

Subtotal Day 4:  [ /25]

DAY 5: TEST DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Test Plan (IEEE 829) components                 [ /5]
□ Test Case documentation best practices          [ /5]
□ Test Scenario vs Test Case difference           [ /5]
□ RTM creation and usage                          [ /5]
□ Test report types and contents                  [ /5]

Subtotal Day 5:  [ /5]

DAY 6: DEFECT MANAGEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Bug life cycle (all states)                     [ /5]
□ Writing effective defect reports                [ /5]
□ Severity vs Priority matrix                     [ /5]
□ Defect metrics calculations                     [ /5]
□ Defect management best practices                [ /5]

Subtotal Day 6:  [ /25]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL SCORE:  [ /150]

ASSESSMENT:
135-150 (90-100%): Excellent - Ready for Week 2
120-134 (80-89%): Good - Minor review needed
105-119 (70-79%): Satisfactory - Review weak areas
<105 (<70%): Need more practice - Revisit concepts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 5.2 Areas for Additional Practice

**If you scored < 4 in any area, focus on:**

**SDLC Models:**
- Create comparison chart of all 6 models
- Map each model to real project scenarios
- Practice explaining when to use each

**STLC Phases:**
- Create flashcards for entry/exit criteria
- Practice identifying phase from activities
- Draw STLC flowchart from memory

**Test Design Techniques:**
- Practice 5 examples for each technique
- Mixed technique exercises
- Technique selection scenarios

**Test Documentation:**
- Write 3 complete test plans
- Create 50 detailed test cases
- Build RTM for sample project

**Defect Management:**
- Write 20 defect reports (good and bad)
- Practice defect metrics calculations
- Draw bug life cycle from memory

---

## Week 2 Preparation

### 6.1 Week 2 Overview

**Theme:** Advanced Testing Techniques & Specialized Testing

**Week 2 Topics:**
```
Day 8: Web Application Testing - Part 1
- Browser compatibility
- Responsive testing
- UI/UX testing
- Accessibility basics

Day 9: Web Application Testing - Part 2
- Security testing (OWASP Top 10)
- API testing fundamentals
- Database testing
- Performance testing basics

Day 10: Mobile Application Testing
- Native vs Hybrid vs Web apps
- Mobile-specific testing
- Gestures and interruptions
- Device compatibility

Day 11: Specialized Testing Types
- Localization & Internationalization
- Accessibility testing (WCAG)
- Usability testing
- Compatibility testing

Day 12: Regression & Smoke Testing Strategies
- Building regression suites
- Test prioritization
- Optimization strategies
- Automation considerations

Day 13: Exploratory Testing Advanced & SBTM
- Testing tours (FCC CUTS VIDS)
- Session-based test management
- Charter creation
- Documentation techniques

Day 14: Week 2 Review & Assessment
- Comprehensive review
- Advanced practical projects
- 60-question assessment
```

### 6.2 Prerequisites for Week 2

**Ensure you can:**
✓ Write a complete test plan independently
✓ Design test cases using multiple techniques
✓ Create RTM for a project
✓ Write professional defect reports
✓ Explain all STLC phases
✓ Differentiate testing types
✓ Calculate defect metrics

**Recommended Pre-work:**
1. Install and explore:
   - Postman (API testing)
   - Browser DevTools (Chrome, Firefox)
   - WAVE accessibility tool

2. Familiarize with:
   - REST API concepts
   - HTTP methods (GET, POST, PUT, DELETE)
   - JSON format
   - Basic SQL queries

3. Practice applications:
   - https://www.saucedemo.com/
   - https://reqres.in/ (API)
   - https://the-internet.herokuapp.com/

---

### 6.3 Week 1 Success Checklist

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEEK 1 COMPLETION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STUDY COMPLETION:
□ Day 1: Manual Testing & SDLC (3-4 hours)
□ Day 2: Testing Levels & Types (3-4 hours)
□ Day 3: Test Design Part 1 (4-5 hours)
□ Day 4: Test Design Part 2 (3-4 hours)
□ Day 5: Test Documentation (4-5 hours)
□ Day 6: Defect Management (3-4 hours)
□ Day 7: Review & Assessment (6-8 hours)

EXERCISES COMPLETED:
□ All Day 1 exercises (5)
□ All Day 2 exercises (5)
□ All Day 3 exercises (8)
□ All Day 4 exercises (6)
□ All Day 5 exercises (5)
□ All Day 6 exercises (5)
□ Day 7 practical project (5 tasks)

ASSESSMENTS COMPLETED:
□ Day 1: 15 questions (Score: __/15)
□ Day 2: 20 questions (Score: __/20)
□ Day 3: 25 questions (Score: __/25)
□ Day 4: 20 questions (Score: __/20)
□ Day 5: 20 questions (Score: __/20)
□ Day 6: 20 questions (Score: __/20)
□ Day 7: 100 questions (Score: __/100)

PRACTICAL SKILLS:
□ Can write a test plan
□ Can design test cases using 7+ techniques
□ Can create RTM
□ Can write defect reports
□ Can calculate defect metrics
□ Can explain STLC phases
□ Can differentiate testing types

DOCUMENTATION CREATED:
□ Personal notes for all 7 days
□ Summary sheets/flashcards
□ Sample test plan
□ Sample test cases (50+)
□ Sample defect reports (10+)
□ Practical project deliverables

CONFIDENCE LEVEL:
Overall Week 1 Confidence: [1] [2] [3] [4] [5]

READY FOR WEEK 2?
□ Yes, confident and ready
□ Yes, but need to review [specify topics]: __________
□ No, need more time on Week 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Conclusion & Next Steps

### Congratulations on Completing Week 1!

**What You've Achieved:**
✓ Comprehensive understanding of manual testing fundamentals
✓ Knowledge of SDLC and STLC processes
✓ Mastery of 7+ test design techniques
✓ Professional documentation skills
✓ Defect management expertise
✓ Foundation for advanced testing

**Your Learning Journey:**
```
Week 1: FOUNDATIONS ✓
├── SDLC & STLC
├── Testing Levels & Types
├── Test Design Techniques
├── Documentation
└── Defect Management

Week 2: ADVANCED TECHNIQUES (Coming Next)
├── Web Application Testing
├── Mobile Testing
├── Security & API Testing
└── Specialized Testing

Week 3: PROFESSIONAL SKILLS
├── Agile Testing
├── Test Management
├── Tools & Technologies
└── Career Development
```

**Immediate Next Steps:**
1. Complete all Week 1 exercises if not done
2. Take the 100-question assessment
3. Complete the practical project
4. Review any weak areas identified
5. Prepare for Week 2 (install tools)
6. Take a day to consolidate learning
7. Start Week 2 with confidence!

**Remember:**
- Quality over speed
- Practice makes perfect
- Document your learning
- Ask questions
- Apply to real projects
- Celebrate progress!

---

**You're now ready for Week 2! 🚀**

**Study Time for Day 7:** 6-8 hours

---

*End of Week 1 - Manual Testing Foundations*
*Continue to Week 2 - Advanced Testing Techniques*
