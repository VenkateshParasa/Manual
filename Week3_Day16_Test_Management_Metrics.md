# Day 16: Test Management & Metrics
## Comprehensive Study Guide

---

## Table of Contents
1. [Test Estimation Techniques](#test-estimation-techniques)
2. [Test Metrics & KPIs](#test-metrics-kpis)
3. [Test Reporting](#test-reporting)
4. [Dashboards and Visualization](#dashboards-and-visualization)
5. [Practical Exercises](#practical-exercises)
6. [Assessment Questions](#assessment-questions)

---

## Test Estimation Techniques

### 1.1 Why Test Estimation Matters

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEST ESTIMATION IMPORTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose:
✓ Resource planning
✓ Budget allocation
✓ Timeline commitment
✓ Risk management
✓ Stakeholder communication

Challenges:
✗ Requirements uncertainty
✗ Team experience variance
✗ Technology complexity
✗ Changing priorities
✗ Historical data unavailability

Estimation is not a commitment—it's an educated guess\!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.2 Work Breakdown Structure (WBS)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WORK BREAKDOWN STRUCTURE (WBS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Break large project into smaller, manageable components

WBS LEVELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Level 0: Project (E-commerce Website Testing)
    ↓
Level 1: Major Modules
    ├── User Management
    ├── Product Catalog
    ├── Shopping Cart
    ├── Checkout & Payment
    └── Order Management
    ↓
Level 2: Features (User Management)
    ├── Registration
    ├── Login
    ├── Profile Management
    └── Password Reset
    ↓
Level 3: Test Activities (Registration)
    ├── Test Planning
    ├── Test Case Design
    ├── Test Execution
    ├── Defect Logging
    └── Test Reporting

EXAMPLE: User Registration Module WBS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. USER REGISTRATION
   1.1 Test Planning & Analysis
       - Review requirements: 2 hours
       - Identify test scenarios: 3 hours
       - Risk assessment: 1 hour
       Subtotal: 6 hours

   1.2 Test Design
       - Write test cases (positive): 4 hours
       - Write test cases (negative): 3 hours
       - Write test cases (edge): 2 hours
       - Peer review: 1 hour
       Subtotal: 10 hours

   1.3 Test Environment Setup
       - Configure test data: 2 hours
       - Browser setup: 1 hour
       - Test account creation: 1 hour
       Subtotal: 4 hours

   1.4 Test Execution
       - Execute functional tests: 8 hours
       - Execute security tests: 4 hours
       - Execute usability tests: 2 hours
       - Regression testing: 3 hours
       Subtotal: 17 hours

   1.5 Defect Management
       - Log defects: 3 hours
       - Retest fixes: 4 hours
       - Verify closures: 2 hours
       Subtotal: 9 hours

   1.6 Test Reporting
       - Daily status: 2 hours
       - Final report: 2 hours
       Subtotal: 4 hours

TOTAL ESTIMATION: 50 hours (6.25 days)

Add buffer: 20% = 10 hours
FINAL ESTIMATE: 60 hours (7.5 days)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WBS TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────────┬──────────┬──────────┬───────────┐
│ Task             │ Est(hrs) │ Actual   │ Variance  │
├──────────────────┼──────────┼──────────┼───────────┤
│ Test Planning    │    6     │    7     │   +1      │
│ Test Design      │   10     │   12     │   +2      │
│ Environment Setup│    4     │    3     │   -1      │
│ Test Execution   │   17     │   20     │   +3      │
│ Defect Management│    9     │   11     │   +2      │
│ Test Reporting   │    4     │    4     │    0      │
├──────────────────┼──────────┼──────────┼───────────┤
│ TOTAL            │   50     │   57     │   +7(14%) │
└──────────────────┴──────────┴──────────┴───────────┘

Use variance for future estimates\!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.3 Three-Point Estimation

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THREE-POINT ESTIMATION (PERT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Account for uncertainty with 3 estimates

FORMULA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Expected Time = (Optimistic + 4 × Most Likely + Pessimistic) / 6

Or:

E = (O + 4M + P) / 6

Where:
O = Optimistic (best case)
M = Most Likely (realistic)
P = Pessimistic (worst case)

EXAMPLE 1: Test Execution for Shopping Cart
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimistic (O): 12 hours
  (Everything works first time, no bugs)

Most Likely (M): 18 hours
  (Few bugs, need retesting)

Pessimistic (P): 30 hours
  (Many bugs, multiple retest cycles)

Expected Time:
E = (12 + 4×18 + 30) / 6
E = (12 + 72 + 30) / 6
E = 114 / 6
E = 19 hours

Standard Deviation:
SD = (P - O) / 6
SD = (30 - 12) / 6
SD = 3 hours

Interpretation:
Expected: 19 hours ± 3 hours
Range: 16-22 hours (68% confidence)

EXAMPLE 2: Complete Module Testing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task: Test Payment Integration Module

O (Best case): 3 days
  - Clear requirements
  - No technical issues
  - Experienced tester

M (Realistic): 5 days
  - Few requirement clarifications
  - Minor technical issues
  - Standard complexity

P (Worst case): 10 days
  - Unclear requirements
  - Major technical issues
  - High complexity
  - Inexperienced tester

E = (3 + 4×5 + 10) / 6
E = (3 + 20 + 10) / 6
E = 33 / 6
E = 5.5 days

SD = (10 - 3) / 6 = 1.17 days

Recommendation: Estimate 5.5-6 days

MULTIPLE TASKS ESTIMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project: E-commerce Testing

┌────────────────┬──────┬──────┬──────┬──────────┬──────┐
│ Module         │  O   │  M   │  P   │ Expected │  SD  │
├────────────────┼──────┼──────┼──────┼──────────┼──────┤
│ User Mgmt      │  10  │  15  │  25  │   15.8   │  2.5 │
│ Product Catalog│  12  │  18  │  30  │   19.0   │  3.0 │
│ Shopping Cart  │   8  │  12  │  20  │   12.7   │  2.0 │
│ Checkout       │  15  │  22  │  35  │   23.2   │  3.3 │
│ Payment        │  10  │  15  │  25  │   15.8   │  2.5 │
├────────────────┼──────┼──────┼──────┼──────────┼──────┤
│ TOTAL          │  55  │  82  │ 135  │   86.5   │ 13.3 │
└────────────────┴──────┴──────┴──────┴──────────┴──────┘

Total Expected: 86.5 hours (11 days)
Range: 73-100 hours (68% confidence)

Recommendation: Plan for 90 hours (11-12 days)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.4 Function Point Analysis

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FUNCTION POINT ANALYSIS (FPA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Estimate based on functional complexity

STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Identify function types
2. Assign complexity (Low/Medium/High)
3. Calculate unadjusted function points
4. Apply technical complexity factor
5. Calculate adjusted function points
6. Convert to effort

FUNCTION TYPES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. External Inputs (EI)
   - User inputs data
   Example: Registration form, Login

2. External Outputs (EO)
   - Reports, calculations
   Example: Order confirmation, Invoice

3. External Inquiries (EQ)
   - Search, query
   Example: Product search, Order lookup

4. Internal Logical Files (ILF)
   - Database tables
   Example: User table, Product table

5. External Interface Files (EIF)
   - External system integration
   Example: Payment gateway, Shipping API

COMPLEXITY WEIGHTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────┬─────┬────────┬──────┐
│ Function Type│ Low │ Medium │ High │
├──────────────┼─────┼────────┼──────┤
│ EI           │  3  │   4    │   6  │
│ EO           │  4  │   5    │   7  │
│ EQ           │  3  │   4    │   6  │
│ ILF          │  7  │  10    │  15  │
│ EIF          │  5  │   7    │  10  │
└──────────────┴─────┴────────┴──────┘

EXAMPLE CALCULATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

E-commerce Application:

External Inputs (EI):
- User Registration (Medium): 4 FP
- Login (Low): 3 FP
- Add to Cart (Low): 3 FP
- Checkout Form (High): 6 FP
Subtotal: 16 FP

External Outputs (EO):
- Order Confirmation (Medium): 5 FP
- Invoice (High): 7 FP
Subtotal: 12 FP

External Inquiries (EQ):
- Product Search (Medium): 4 FP
- Order Status (Low): 3 FP
Subtotal: 7 FP

Internal Logical Files (ILF):
- User Database (Medium): 10 FP
- Product Database (Medium): 10 FP
- Order Database (Medium): 10 FP
Subtotal: 30 FP

External Interface Files (EIF):
- Payment Gateway (High): 10 FP
- Shipping API (Medium): 7 FP
Subtotal: 17 FP

TOTAL UNADJUSTED FP: 82

Technical Complexity Factor (TCF):
Average complexity: 1.0 (neutral)

ADJUSTED FP: 82 × 1.0 = 82 FP

Industry Average:
1 FP = 6-8 test hours

Testing Effort:
82 FP × 7 hours = 574 hours (72 days)

For team of 3 testers:
574 / 3 = 191 hours per tester
191 / 8 hours/day = 24 working days

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.5 Percentage Distribution Method

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERCENTAGE DISTRIBUTION METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Distribute testing effort as % of development effort

INDUSTRY STANDARD RATIOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Traditional (Waterfall):
- Development: 40%
- Testing: 40%
- Other (Req, Design): 20%

Agile:
- Development: 60%
- Testing: 30%
- Other: 10%

CALCULATION STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Determine total project effort
2. Apply testing percentage
3. Distribute across test phases

EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project: E-commerce Platform
Total Development: 2000 hours

Testing Effort (40% of dev):
2000 × 0.40 = 800 hours

Distribution across Testing Phases:

Test Planning & Design: 15%
800 × 0.15 = 120 hours

Test Execution: 50%
800 × 0.50 = 400 hours

Defect Management: 20%
800 × 0.20 = 160 hours

Test Reporting: 5%
800 × 0.05 = 40 hours

Regression Testing: 10%
800 × 0.10 = 80 hours

TOTAL: 800 hours (100 days for 1 tester)

Team Sizing:
If project timeline = 4 months (16 weeks)
800 hours / (16 weeks × 40 hours) = 1.25 testers
Recommendation: 2 testers

DETAILED BREAKDOWN BY MODULE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────────┬─────────┬─────────┬─────────────┐
│ Module           │ Dev(hrs)│ Test %  │ Test(hrs)   │
├──────────────────┼─────────┼─────────┼─────────────┤
│ User Management  │   300   │   40%   │    120      │
│ Product Catalog  │   500   │   35%   │    175      │
│ Shopping Cart    │   250   │   40%   │    100      │
│ Checkout         │   600   │   50%   │    300      │
│ Payment (complex)│   350   │   60%   │    210      │
├──────────────────┼─────────┼─────────┼─────────────┤
│ TOTAL            │  2000   │   40%   │    905      │
└──────────────────┴─────────┴─────────┴─────────────┘

Note: Payment has higher % due to complexity/criticality

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Test Metrics & KPIs

### 2.1 Test Coverage Metrics

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEST COVERAGE METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. REQUIREMENTS COVERAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Requirements Coverage = (Requirements Tested / Total Requirements) × 100%

Example:
Total Requirements: 150
Requirements with Test Cases: 135
Coverage = (135/150) × 100% = 90%

Requirement Traceability Matrix (RTM):
┌────────────┬─────────────────┬───────────────┬──────────┐
│ Req ID     │ Requirement     │ Test Cases    │ Status   │
├────────────┼─────────────────┼───────────────┼──────────┤
│ REQ-001    │ User Login      │ TC-001, TC-002│ Covered  │
│ REQ-002    │ Password Reset  │ TC-003        │ Covered  │
│ REQ-003    │ Profile Update  │ TC-004, TC-005│ Covered  │
│ REQ-004    │ 2FA Enable      │ (none)        │ NOT Covered│
│ REQ-005    │ Logout          │ TC-006        │ Covered  │
└────────────┴─────────────────┴───────────────┴──────────┘

Action: Create test cases for REQ-004

2. CODE COVERAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Types:
a) Line Coverage = (Lines Executed / Total Lines) × 100%
b) Branch Coverage = (Branches Executed / Total Branches) × 100%
c) Function Coverage = (Functions Tested / Total Functions) × 100%

Example (JavaScript):
Total Lines: 1000
Lines Executed by Tests: 850
Line Coverage = (850/1000) × 100% = 85%

Total Branches (if/else): 200
Branches Tested: 160
Branch Coverage = (160/200) × 100% = 80%

Industry Standards:
Minimum: 70%
Good: 80-85%
Excellent: >90%

3. FEATURE COVERAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Feature Coverage = (Features Tested / Total Features) × 100%

Example: E-commerce App

Total Features: 25
┌──────────────────────┬────────────┐
│ Feature              │ Tested?    │
├──────────────────────┼────────────┤
│ User Registration    │ ✓ Yes      │
│ Login                │ ✓ Yes      │
│ Product Search       │ ✓ Yes      │
│ Add to Cart          │ ✓ Yes      │
│ Checkout             │ ✓ Yes      │
│ Payment              │ ✓ Yes      │
│ Order History        │ ✓ Yes      │
│ Reviews              │ ✗ No       │
│ Wishlist             │ ✗ No       │
│ ...                  │            │
└──────────────────────┴────────────┘

Features Tested: 20
Coverage = (20/25) × 100% = 80%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.2 Defect Metrics

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEFECT METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFECT DENSITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Defect Density = Total Defects / Size

Size can be measured in:
- Lines of Code (LOC)
- Function Points (FP)
- Test Cases
- Requirements

Example 1: By LOC
Total Defects: 120
Lines of Code: 50,000
Defect Density = 120 / 50,000 = 0.0024 defects/LOC
Or: 2.4 defects per 1000 LOC

Industry Benchmark:
Good: 1-5 defects per 1000 LOC
Average: 5-10 defects per 1000 LOC
Poor: >10 defects per 1000 LOC

Example 2: By Module
┌──────────────────┬──────────┬─────────┬──────────────┐
│ Module           │ Defects  │ LOC     │ Density/1000 │
├──────────────────┼──────────┼─────────┼──────────────┤
│ User Management  │    15    │  8,000  │     1.9      │
│ Shopping Cart    │    25    │  5,000  │     5.0      │
│ Payment          │    40    │ 10,000  │     4.0      │
│ Product Catalog  │    30    │ 12,000  │     2.5      │
└──────────────────┴──────────┴─────────┴──────────────┘

Analysis: Shopping Cart has highest defect density → needs focus

2. DEFECT REMOVAL EFFICIENCY (DRE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
DRE = (Defects Found Before Release / Total Defects) × 100%

Where:
Total Defects = Defects Found Before Release + Defects Found After Release

Example:
Defects found during testing: 95
Defects found in production (first month): 5
Total Defects: 100

DRE = (95 / 100) × 100% = 95%

Interpretation:
Excellent: >95%
Good: 90-95%
Average: 80-90%
Poor: <80%

Example Calculation Over Time:
Month 1:
- Testing found: 80 defects
- Production found: 20 defects
- DRE = 80/(80+20) = 80%

Month 2 (After improvements):
- Testing found: 95 defects
- Production found: 5 defects
- DRE = 95/(95+5) = 95%

Improvement: +15% DRE

3. DEFECT LEAKAGE RATIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Defect Leakage = (Defects in Production / Total Defects) × 100%

Example:
Total Defects: 150
Production Defects: 10
Leakage = (10/150) × 100% = 6.67%

Target: <5% leakage

4. DEFECT AGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Defect Age = Date Fixed - Date Reported

Example:
┌──────────┬────────────┬────────────┬──────────────┐
│ Defect   │ Reported   │ Fixed      │ Age (days)   │
├──────────┼────────────┼────────────┼──────────────┤
│ BUG-001  │ Jan 10     │ Jan 12     │      2       │
│ BUG-002  │ Jan 10     │ Jan 25     │     15       │
│ BUG-003  │ Jan 15     │ Jan 16     │      1       │
│ BUG-004  │ Jan 20     │ Feb 10     │     21       │
└──────────┴────────────┴────────────┴──────────────┘

Average Defect Age = (2 + 15 + 1 + 21) / 4 = 9.75 days

Target:
Critical: <1 day
High: <3 days
Medium: <7 days
Low: <14 days

5. MEAN TIME TO DETECT (MTTD)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
MTTD = Total Time to Detect All Defects / Number of Defects

Example:
Month 1:
10 defects detected
Total time from code commit to defect report: 80 hours

MTTD = 80 / 10 = 8 hours

Interpretation: On average, defects are detected 8 hours after
code is committed.

Goal: Reduce MTTD through:
✓ Continuous Integration
✓ Automated Testing
✓ Code Reviews

6. MEAN TIME TO REPAIR (MTTR)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
MTTR = Total Time to Fix All Defects / Number of Defects Fixed

Example:
20 defects fixed
Total time to fix: 120 hours

MTTR = 120 / 20 = 6 hours per defect

By Severity:
Critical: MTTR = 2 hours (average)
High: MTTR = 8 hours
Medium: MTTR = 16 hours
Low: MTTR = 40 hours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEFECT METRICS DASHBOARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sprint 25 Summary:
┌──────────────────────────┬────────────┐
│ Metric                   │ Value      │
├──────────────────────────┼────────────┤
│ Total Defects Found      │    45      │
│ Defects Fixed            │    42      │
│ Defects Open             │     3      │
│ Defect Density (per 1000)│    3.2     │
│ DRE                      │    96%     │
│ Defect Leakage           │    4%      │
│ Average Defect Age       │  4.5 days  │
│ MTTD                     │  6 hours   │
│ MTTR                     │  8 hours   │
└──────────────────────────┴────────────┘

Trend (vs Sprint 24):
Defect Density: 4.5 → 3.2 (↓ 29%) ✓ Improving
DRE: 92% → 96% (↑ 4%) ✓ Improving
MTTD: 8h → 6h (↓ 25%) ✓ Improving

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.3 Test Execution Metrics

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEST EXECUTION METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. TEST PASS/FAIL RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Pass Rate = (Tests Passed / Total Tests Executed) × 100%
Fail Rate = (Tests Failed / Total Tests Executed) × 100%

Example:
Total Test Cases: 500
Passed: 470
Failed: 25
Blocked: 5

Pass Rate = (470/500) × 100% = 94%
Fail Rate = (25/500) × 100% = 5%
Blocked Rate = (5/500) × 100% = 1%

Daily Trend:
┌──────────┬───────┬────────┬────────┬──────────┐
│ Date     │ Total │ Passed │ Failed │ Pass %   │
├──────────┼───────┼────────┼────────┼──────────┤
│ Day 1    │  100  │   85   │   15   │   85%    │
│ Day 2    │  200  │  175   │   25   │   87.5%  │
│ Day 3    │  350  │  320   │   30   │   91.4%  │
│ Day 4    │  500  │  470   │   30   │   94%    │
└──────────┴───────┴────────┴────────┴──────────┘

Trend: Improving ✓

2. TEST EXECUTION PRODUCTIVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Productivity = Test Cases Executed / Time (hours or days)

Example:
Week 1:
Test Cases Executed: 150
Time: 40 hours (1 week)
Productivity = 150 / 40 = 3.75 test cases/hour

Week 2 (After automation):
Test Cases Executed: 300
Time: 40 hours
Productivity = 300 / 40 = 7.5 test cases/hour

Improvement: 2x productivity\!

3. TEST CASE EFFECTIVENESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Test Effectiveness = (Defects Found by Tests / Total Defects) × 100%

Example:
Total Defects: 100
Defects found by:
- Test Cases: 70
- Code Review: 15
- Production: 10
- Ad-hoc: 5

Test Effectiveness = (70/100) × 100% = 70%

Goal: >80%

Individual Test Case Effectiveness:
┌──────────────┬───────────┬────────────┬─────────────┐
│ Test Case    │ Executions│ Bugs Found │ Effectiveness│
├──────────────┼───────────┼────────────┼─────────────┤
│ TC-LOGIN-001 │    50     │     8      │    High     │
│ TC-LOGIN-002 │    50     │     0      │    Low      │
│ TC-CART-001  │    40     │     5      │    Medium   │
│ TC-CART-002  │    40     │     0      │    Low      │
└──────────────┴───────────┴────────────┴─────────────┘

Action: Review low-effectiveness test cases (may be redundant)

4. TEST EXECUTION PROGRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
Progress = (Tests Executed / Total Planned Tests) × 100%

Example Sprint (2 weeks):
Day 1: 50/500 = 10%
Day 2: 120/500 = 24%
Day 3: 200/500 = 40%
...
Day 10: 500/500 = 100%

Burndown Chart:
Tests Remaining
500│●
   │  ●
400│    ●
   │      ●
300│        ●
   │          ●
200│            ●
   │              ●
100│                ●
   │                  ●
  0└────────────────────●
    D1 D2 D3 D4 D5 D6 D7 D8 D9 D10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

(Content will continue with Test Reporting, Dashboards, Exercises, and Assessment Questions...)
