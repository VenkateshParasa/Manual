# Week 3 - Day 17: Risk-Based Testing & Test Prioritization
## Assessment Questions

---

## Assessment Modes

### Quick Mode (15 questions, 15 minutes)
For rapid review and knowledge check

### Full Mode (30 questions, 40 minutes)
For comprehensive mastery assessment

**Passing Score:** 70% (21/30 questions in Full Mode, 11/15 in Quick Mode)

---

## Instructions
1. Choose your assessment mode (Quick or Full)
2. Answer all questions in your chosen mode
3. Check answers at the end
4. Review explanations for incorrect answers
5. Retake if needed to achieve 70% or higher

---

## Quick Mode Questions (15 Questions)

### Section A: Multiple Choice (10 Questions)

**Q1.** What is the core principle of Risk-Based Testing?
a) Test everything equally
b) Test what matters most first
c) Test only high-risk areas
d) Test based on developer priority

**Answer:** b) Test what matters most first

**Explanation:** Risk-Based Testing prioritizes testing efforts based on risk levels, focusing on high-risk areas first while still covering other areas based on available time and resources.

---

**Q2.** The Risk Score in Risk-Based Testing is calculated as:
a) Probability + Impact
b) Probability × Impact
c) Probability - Impact
d) Probability / Impact

**Answer:** b) Probability × Impact

**Explanation:** Risk Score = Probability × Impact. This formula helps quantify risk levels for prioritization.

---

**Q3.** Which is NOT a category of software risk?
a) Product Risk
b) Project Risk
c) Business Risk
d) Marketing Risk

**Answer:** d) Marketing Risk

**Explanation:** The three main risk categories in software testing are Product Risk (quality-related), Project Risk (process-related), and Business Risk (business impact-related).

---

**Q4.** In the Probability-Impact Matrix, a risk with score 20-25 is classified as:
a) Low
b) Medium
c) High
d) Critical

**Answer:** d) Critical

**Explanation:** Risk scores of 20-25 (on a 1-25 scale) are classified as Critical priority, requiring immediate attention and executive escalation.

---

**Q5.** What does MoSCoW stand for in requirement prioritization?
a) Most, Should, Could, Won't
b) Must, Should, Could, Won't
c) Must, Some, Could, Would
d) Most, Some, Could, Won't

**Answer:** b) Must, Should, Could, Won't

**Explanation:** MoSCoW is a prioritization technique: Must Have, Should Have, Could Have, Won't Have (this time).

---

**Q6.** Which risk identification technique uses past defect data?
a) Stakeholder interviews
b) Brainstorming sessions
c) Historical data analysis
d) Risk workshops

**Answer:** c) Historical data analysis

**Explanation:** Historical data analysis examines past defects, production incidents, and defect patterns to identify high-risk areas.

---

**Q7.** Defect Density is calculated as:
a) Total Defects / Lines of Code
b) (Total Defects / Lines of Code) × 100
c) (Total Defects / Lines of Code) × 1000
d) Lines of Code / Total Defects

**Answer:** c) (Total Defects / Lines of Code) × 1000

**Explanation:** Defect Density = (Total Defects / Lines of Code) × 1000, providing a normalized metric for comparing modules.

---

**Q8.** In test optimization, what should you do with tests that never found defects?
a) Always keep them
b) Evaluate and potentially remove
c) Run them more frequently
d) Increase their priority

**Answer:** b) Evaluate and potentially remove

**Explanation:** Tests that consistently find no defects should be evaluated for value. They may be candidates for removal or reduction to optimize the test suite.

---

**Q9.** Which prioritization technique focuses on features customers use most?
a) Risk-based prioritization
b) Coverage-based prioritization
c) Customer priority-based prioritization
d) History-based prioritization

**Answer:** c) Customer priority-based prioritization

**Explanation:** Customer priority-based prioritization uses usage analytics, support tickets, and customer feedback to prioritize testing of most-used features.

---

**Q10.** What is the primary benefit of parallel test execution?
a) Better test coverage
b) Reduced execution time
c) Fewer defects found
d) Easier test maintenance

**Answer:** b) Reduced execution time

**Explanation:** Parallel execution runs multiple tests simultaneously, significantly reducing overall execution time (often 50-80% reduction).

---

### Section B: True/False (5 Questions)

**Q11.** Exhaustive testing is possible with proper planning and resources.

**Answer:** FALSE

**Explanation:** Exhaustive testing is impossible for any non-trivial application due to the vast number of possible test combinations. Risk-Based Testing helps focus efforts where they matter most.

---

**Q12.** Higher code complexity generally indicates higher risk.

**Answer:** TRUE

**Explanation:** Complex code with more decision points, dependencies, and nested logic typically has higher defect probability and is therefore higher risk.

---

**Q13.** All test cases should be executed in every test cycle regardless of risk.

**Answer:** FALSE

**Explanation:** Risk-based and time-constrained prioritization means focusing on high-risk tests first. Not all tests need to run in every cycle, especially under time constraints.

---

**Q14.** Flaky tests should be kept in the test suite to catch intermittent issues.

**Answer:** FALSE

**Explanation:** Flaky tests should be fixed or removed as they reduce confidence in test results, waste time on re-runs, and mask real issues.

---

**Q15.** Test optimization should maintain or improve defect detection rate.

**Answer:** TRUE

**Explanation:** The goal of optimization is to reduce time/effort while maintaining quality. Defect detection rate should not decrease after optimization.

---

## Full Mode Questions (30 Questions)

### Includes all 15 Quick Mode questions above, plus 15 additional questions below:

---

### Section C: Multiple Choice (Continued) (5 Questions)

**Q16.** In quantitative risk assessment, Risk Exposure is calculated as:
a) Probability + Impact
b) Probability (%) × Impact ($)
c) Impact / Probability
d) (Probability + Impact) / 2

**Answer:** b) Probability (%) × Impact ($)

**Explanation:** Risk Exposure = Probability (%) × Impact ($), providing a monetary value for expected loss from a risk.

---

**Q17.** Which factor typically has the HIGHEST weight in combined risk assessment?
a) Business Criticality (0.4)
b) Complexity (0.3)
c) Defect History (0.2)
d) Change Frequency (0.1)

**Answer:** a) Business Criticality (0.4)

**Explanation:** Business Criticality typically receives the highest weight (40%) as it directly relates to business value and impact.

---

**Q18.** What is the recommended target for test suite size reduction during optimization?
a) >10% reduction
b) >20% reduction
c) >30% reduction
d) >50% reduction

**Answer:** b) >20% reduction

**Explanation:** A target of >20% reduction in test suite size is recommended while maintaining >95% coverage.

---

**Q19.** Which test optimization technique removes tests for deprecated features?
a) Test case reduction
b) Test case selection
c) Parallel execution
d) Flaky test elimination

**Answer:** a) Test case reduction

**Explanation:** Test case reduction includes removing obsolete tests for removed features, deprecated functionality, and tests that no longer apply.

---

**Q20.** In time-constrained prioritization, what should you run first?
a) All tests equally
b) Smoke tests for critical paths
c) Edge case tests
d) Low-priority tests

**Answer:** b) Smoke tests for critical paths

**Explanation:** When time is limited, start with smoke tests covering critical paths to quickly verify basic functionality before deeper testing.

---

### Section D: Scenario-Based Questions (10 Questions)

**Q21.** Scenario: You have 3 modules with risk scores: Module A = 15, Module B = 9, Module C = 3. You have 100 hours for testing. How should you allocate effort?

**Answer:**
Total Risk = 15 + 9 + 3 = 27

Allocation:
- Module A: (15/27) × 100 = 55.6 hours (~56 hours) - 56%
- Module B: (9/27) × 100 = 33.3 hours (~33 hours) - 33%
- Module C: (3/27) × 100 = 11.1 hours (~11 hours) - 11%

**Explanation:** Allocate testing effort proportionally to risk scores. Module A gets the most effort as it has the highest risk.

---

**Q22.** Scenario: A payment module has Probability = 3 (Medium) and Impact = 5 (Critical). What is the Risk Score and Priority?

**Answer:**
Risk Score = 3 × 5 = 15 (HIGH PRIORITY - P1)

**Explanation:** Score of 15 falls in the 12-19 range, classified as High priority requiring dedicated mitigation plan and close tracking.

---

**Q23.** Scenario: Historical data shows Module X had 25 defects in 5,000 LOC. Module Y had 18 defects in 3,000 LOC. Which has higher defect density and risk?

**Answer:**
Module X Defect Density = (25/5,000) × 1000 = 5.0
Module Y Defect Density = (18/3,000) × 1000 = 6.0

Module Y has HIGHER defect density (6.0 vs 5.0) and therefore HIGHER RISK.

**Explanation:** Despite fewer total defects, Module Y has higher defect density when normalized by code size, indicating higher risk per unit of code.

---

**Q24.** Scenario: Probability of data breach = 2%, Impact = $2,000,000. Security testing costs $50,000 and reduces probability to 1%. Should you invest? Calculate ROI.

**Answer:**
Current Risk Exposure = 2% × $2,000,000 = $40,000
After Security Testing = 1% × $2,000,000 = $20,000
Risk Reduction = $40,000 - $20,000 = $20,000

Investment = $50,000
Savings = $20,000

ROI = ($20,000 - $50,000) / $50,000 × 100% = -60%

**Decision:** NO, do not invest. Negative ROI means the cost exceeds the benefit.

**Explanation:** The security testing cost ($50K) exceeds the risk reduction benefit ($20K), resulting in negative ROI. Consider alternative, less expensive mitigation strategies.

---

**Q25.** Scenario: Your regression suite takes 10 hours. You remove 50 obsolete tests (10% reduction), fix flaky tests (eliminating re-runs), and parallelize across 4 machines. Estimate new execution time.

**Answer:**
Step 1: Remove obsolete tests
- 10% reduction: 10 hours × 0.9 = 9 hours

Step 2: Fix flaky tests (assume 2 re-runs before)
- Original with re-runs: 10 hours × 2 = 20 hours
- New with no re-runs: 9 hours × 1 = 9 hours

Step 3: Parallelize across 4 machines
- Sequential: 9 hours
- Parallel: 9 hours / 4 = 2.25 hours

**New Execution Time: ~2.25 hours (77.5% reduction from original 10 hours)**

**Explanation:** Combined optimizations: test reduction (10%), flaky test elimination (50% from removing re-runs), and parallelization (75%) result in dramatic time savings.

---

**Q26.** Scenario: Feature usage data shows: Feature A (80% users, 50 tickets), Feature B (60% users, 20 tickets), Feature C (30% users, 10 tickets). You have 100 hours. How to allocate using customer priority?

**Answer:**
Priority Assessment:
- Feature A: Highest (80% usage + most issues)
- Feature B: Medium (good usage + some issues)
- Feature C: Low (lower usage + few issues)

Suggested Allocation:
- Feature A: 50 hours (50%) - Highest usage + most support tickets
- Feature B: 35 hours (35%) - Good usage + moderate issues
- Feature C: 15 hours (15%) - Lower usage + fewer issues

**Explanation:** Allocate based on combination of user impact (usage %) and pain points (support tickets). Focus where users are most active and experiencing issues.

---

**Q27.** Scenario: You need to test a hotfix in 2 hours. Full suite has 200 tests (8 hours). What's your strategy?

**Answer:**
Time-Constrained Strategy:

1. **Smoke Tests (30 min):** 20 critical path tests
   - Verify basic functionality
   - Fail fast if fundamentals broken

2. **Impact Area Testing (60 min):** 25 tests
   - Test modules affected by hotfix
   - Test dependent modules

3. **Risk-Based Sampling (30 min):** 15 tests
   - High-risk integration tests
   - Known problem areas

**Total: 60 tests in 120 minutes**
**Coverage: 30% of tests, ~85% of risk**

**Skip:** Low-priority, unaffected modules

**Explanation:** When time-constrained, prioritize critical paths, affected areas, and high-risk zones. Accept that not all tests will run, but maximize risk coverage.

---

**Q28.** Scenario: Module change frequency: Search (45 changes), Dashboard (28 changes), Payment (12 changes), Reports (3 changes). How does this affect testing priority?

**Answer:**
Change Frequency = Regression Risk

**Priority:**
1. **Search (45 changes): HIGHEST RISK - P1**
   - Extensive regression testing required
   - Most likely to have introduced defects

2. **Dashboard (28 changes): MEDIUM-HIGH RISK - P1/P2**
   - Moderate regression testing

3. **Payment (12 changes): MEDIUM RISK - P2**
   - Targeted regression testing

4. **Reports (3 changes): LOW RISK - P3**
   - Smoke testing sufficient

**Testing Allocation (100 hours):**
- Search: 45 hours (45%)
- Dashboard: 30 hours (30%)
- Payment: 15 hours (15%)
- Reports: 10 hours (10%)

**Explanation:** Frequently changed code has higher probability of defects. Allocate testing effort proportionally to change frequency.

---

**Q29.** Scenario: You have 500 test cases. Analysis shows: High Value (200 tests, 80 bugs found), Medium Value (250 tests, 30 bugs found), Low Value (50 tests, 0 bugs found). How to optimize?

**Answer:**
**Optimization Strategy:**

1. **Keep High Value Tests:** 200 tests
   - 80 bugs found = 0.40 bugs/test (excellent ROI)
   - Priority: P0/P1

2. **Reduce Medium Value Tests:** 250 → 150 tests
   - 30 bugs found = 0.12 bugs/test (moderate ROI)
   - Keep most critical 150, remove redundant 100
   - Priority: P2

3. **Remove Low Value Tests:** 50 → 0 tests
   - 0 bugs found = no value
   - Remove entirely

**Optimized Suite: 350 tests (30% reduction)**
**Maintained Coverage: ~95% (kept all high-value tests)**

**Explanation:** Focus on tests with proven defect detection. Remove tests that never find bugs. Reduce redundancy in medium-value tests.

---

**Q30.** Scenario: Create a risk register entry for: "Payment processing fails for orders >$1000". Include Risk ID, Description, Category, Probability, Impact, Score, Priority, and Mitigation.

**Answer:**
**RISK REGISTER ENTRY:**

**Risk ID:** R001

**Risk Name:** Payment Processing Failure for High-Value Orders

**Description:** Payment gateway times out for orders exceeding $1000, preventing transaction completion

**Category:** Product Risk (Integration)

**Probability:** 3 (Medium)
- Has occurred in past during peak loads
- Affects specific order value range

**Impact:** 5 (Critical)
- Direct revenue loss
- Affects high-value customers
- Customer frustration and churn
- Estimated impact: $50K/day

**Risk Score:** 3 × 5 = 15 (HIGH PRIORITY)

**Priority:** P0 (Must fix before release)

**Root Cause:**
- Payment gateway timeout set too low (5 seconds)
- No retry mechanism for high-value transactions
- Third-party service capacity limits

**Mitigation Strategy:**
1. Load testing with expected peak volumes
2. Implement retry logic with exponential backoff
3. Increase timeout to 10 seconds for orders >$1000
4. Configure backup payment gateway
5. Queue transactions during extreme peaks

**Testing Approach:**
- Performance testing: 5000 concurrent high-value transactions
- Timeout scenario testing (network delays)
- Failover testing (switch to backup gateway)
- Monitor payment success rate under load

**Owner:** QA Lead

**Status:** Open → In Progress

**Target Date:** [Within current sprint]

**Explanation:** A complete risk register entry includes identification, assessment, mitigation strategy, and ownership. This provides full context for managing the risk throughout the project.

---

## Answer Key Summary

### Quick Mode (Q1-Q15):
1. b  2. b  3. d  4. d  5. b  6. c  7. c  8. b  9. c  10. b  11. F  12. T  13. F  14. F  15. T

### Full Mode Additional (Q16-Q30):
16. b  17. a  18. b  19. a  20. b  21-30. (See detailed answers above)

---

## Scoring Guide

**Quick Mode (15 questions):**
- 15-14 correct: Excellent (93-100%)
- 13-11 correct: Pass (73-87%)
- 10 or below: Review needed

**Full Mode (30 questions):**
- 30-28 correct: Excellent (93-100%)
- 27-24 correct: Good (80-90%)
- 23-21 correct: Pass (70-77%)
- 20 or below: Review needed

---

## Study Tips

1. **Understand Risk Calculation:**
   - Risk Score = Probability × Impact
   - Practice calculating risk scores
   - Know priority thresholds (20-25 Critical, 12-19 High, 6-11 Medium, 1-5 Low)

2. **Master Prioritization Techniques:**
   - Risk-based (highest risk first)
   - MoSCoW (Must, Should, Could, Won't)
   - Customer priority (usage-based)
   - History-based (defect patterns)

3. **Practice Risk Assessment:**
   - Identify risks in different categories (Product, Project, Business)
   - Calculate defect density
   - Perform quantitative risk assessment (ROI calculations)

4. **Learn Optimization Strategies:**
   - Test case reduction (remove obsolete, merge redundant)
   - Parallel execution (calculate time savings)
   - Flaky test elimination
   - Coverage-based selection

5. **Apply to Real Scenarios:**
   - Practice allocating testing effort based on risk scores
   - Create risk registers for sample projects
   - Calculate optimization improvements
   - Make prioritization decisions with limited time

---

## Next Steps

After completing this assessment:

1. **Review Incorrect Answers:** Focus on explanations for questions you missed
2. **Practice Calculations:** Work through risk score and optimization calculations
3. **Create Risk Registers:** Practice documenting risks for sample projects
4. **Study Day 18:** Move on to Test Tools & Test Management Systems
5. **Retake if Needed:** Aim for 80%+ mastery before proceeding

---

**Good luck with your assessment!**

*Estimated completion time: 15 minutes (Quick Mode) or 40 minutes (Full Mode)*