# Day 13: Exploratory Testing & Session-Based Test Management
## Comprehensive Assessment

---

## Assessment Information

**Day:** 13 - Exploratory Testing & SBTM  
**Topic:** Exploratory Testing, Testing Tours (FCC CUTS VIDS), Session-Based Test Management  
**Total Questions:** 30 (Quick Mode: 15, Full Mode: 30)  
**Passing Score:** 70%  
**Time Limit:** Quick Mode: 15 minutes, Full Mode: 40 minutes

---

## Quick Mode (15 Questions - 15 Minutes)

### Section A: Multiple Choice Questions (8 questions)

**Q1. What is the key characteristic of exploratory testing?**
a) Following a detailed test script  
b) Simultaneous learning, test design, and execution  
c) Only testing without any planning  
d) Random clicking without purpose

**Q2. What does the mnemonic "FCC CUTS VIDS" represent?**
a) A testing framework  
b) 11 different testing tours  
c) Scrum ceremonies  
d) Test automation tools

**Q3. What is the recommended duration for an SBTM testing session?**
a) 30 minutes  
b) 60 minutes  
c) 90 minutes  
d) 120 minutes

**Q4. In the TBS model for SBTM, what does "TBS" stand for?**
a) Test, Build, Ship  
b) Test, Bug, Setup  
c) Time, Budget, Scope  
d) Test, Baseline, Standard

**Q5. Which testing tour focuses on testing each feature in isolation?**
a) Complexity Tour  
b) Feature Tour  
c) Scenario Tour  
d) User Tour

**Q6. What is the ideal percentage of time spent on "Test" in the TBS model?**
a) 40-50%  
b) 60-70%  
c) 70-80%  
d) 90-100%

**Q7. What is the format of an SBTM charter?**
a) Test [AREA] With [TOOLS] To Find [BUGS]  
b) Explore [AREA] With [RESOURCES] To Discover [INFORMATION]  
c) Execute [TESTS] Using [DATA] To Verify [REQUIREMENTS]  
d) Analyze [FEATURE] With [TEAM] To Report [RESULTS]

**Q8. Which testing tour focuses on verifying marketing claims?**
a) Feature Tour  
b) Claims Tour  
c) User Tour  
d) Variability Tour

### Section B: True/False Questions (4 questions)

**Q9. Exploratory testing is completely unstructured and random.**
- [ ] True
- [ ] False

**Q10. SBTM sessions should be uninterrupted for best results.**
- [ ] True
- [ ] False

**Q11. The Complexity Tour focuses on testing the simplest features first.**
- [ ] True
- [ ] False

**Q12. Exploratory testing can only be done by experienced testers.**
- [ ] True
- [ ] False

### Section C: Scenario-Based Questions (3 questions)

**Q13. Scenario: You conducted a 90-minute SBTM session. You spent 65 minutes testing, 20 minutes investigating bugs, and 5 minutes on setup. What is your TBS breakdown?**

a) Test: 72%, Bug: 22%, Setup: 6%  
b) Test: 65%, Bug: 20%, Setup: 5%  
c) Test: 70%, Bug: 25%, Setup: 5%  
d) Test: 75%, Bug: 20%, Setup: 5%

**Q14. Scenario: You're testing a payment gateway. Which testing tour would be most appropriate to test with multiple payment methods, currencies, and error scenarios?**

a) Feature Tour  
b) Complexity Tour  
c) Variability Tour  
d) Configuration Tour

**Q15. Scenario: Your charter states "Explore login functionality with valid and invalid credentials to discover authentication issues." After 90 minutes, you've only tested valid credentials. Is the charter complete?**

a) Yes, you tested for 90 minutes  
b) No, you didn't cover invalid credentials  
c) Yes, valid credentials are most important  
d) No, you should have tested for 120 minutes

---

## Full Mode (30 Questions - 40 Minutes)

*Includes all 15 Quick Mode questions plus 15 additional questions below*

### Section A: Multiple Choice Questions (7 additional questions)

**Q16. Which testing tour focuses on testing from different user personas?**
a) Configuration Tour  
b) User Tour  
c) Scenarios Tour  
d) Feature Tour

**Q17. What is the primary purpose of a session debrief?**
a) To blame testers for bugs  
b) To share findings and plan next steps  
c) To extend the session  
d) To write documentation

**Q18. In SBTM, what is an "opportunity"?**
a) A bug found during testing  
b) Follow-up testing identified but not completed  
c) A chance to automate tests  
d) Time saved during testing

**Q19. Which heuristic involves testing Create, Read, Update, Delete operations?**
a) Goldilocks  
b) CRUD  
c) SOAP  
d) Consistency

**Q20. What does the "Goldilocks" heuristic test?**
a) Too much, too little, just right  
b) Create, read, update, delete  
c) Structure, oracles, actions, properties  
d) Feature, complexity, claims

**Q21. Which testing tour evaluates how easy the application is to test?**
a) User Tour  
b) Testability Tour  
c) Configuration Tour  
d) Structure Tour

**Q22. What is the recommended frequency for session debriefs?**
a) Within 1 week  
b) Within 24 hours  
c) Immediately after session  
d) At end of sprint

### Section B: True/False Questions (4 additional questions)

**Q23. The Interoperability Tour focuses on testing integrations with other systems.**
- [ ] True
- [ ] False

**Q24. A good charter should be completable in one 90-minute session.**
- [ ] True
- [ ] False

**Q25. Exploratory testing eliminates the need for scripted testing.**
- [ ] True
- [ ] False

**Q26. The Data Tour focuses on testing data flow and persistence.**
- [ ] True
- [ ] False

### Section C: Scenario-Based Questions (4 additional questions)

**Q27. Scenario: You're creating a charter for testing a shopping cart. Which charter is better?**

a) "Test the shopping cart"  
b) "Explore shopping cart functionality with various product quantities and types to discover calculation and state management issues"  
c) "Find bugs in cart"  
d) "Test everything about the cart feature"

**Q28. Scenario: During an exploratory session, you find a critical bug. The session has 30 minutes remaining. What should you do?**

a) Stop testing and write bug report immediately  
b) Continue testing and log bug at end  
c) Note the bug briefly and continue testing, document fully at end  
d) Extend the session to investigate further

**Q29. Scenario: Your team wants to track exploratory testing progress. Which SBTM metric would be most useful?**

a) Lines of code tested  
b) Number of sessions completed and coverage achieved  
c) Number of bugs per tester  
d) Time spent in meetings

**Q30. Scenario: You completed 12 SBTM sessions in a sprint and found 36 defects. What is your Defect Discovery Rate (DDR)?**

a) 2.0 defects per session  
b) 3.0 defects per session  
c) 4.0 defects per session  
d) 36 defects per sprint

---

## Answer Key

### Quick Mode Answers (Q1-Q15)

**Q1: b) Simultaneous learning, test design, and execution**  
Explanation: James Bach defines exploratory testing as "simultaneous learning, test design, and test execution." It's not random but structured and purposeful.

**Q2: b) 11 different testing tours**  
Explanation: FCC CUTS VIDS is a mnemonic for 11 testing tours created by James Whittaker: Feature, Complexity, Claims, Configuration, User, Testability, Scenarios, Variability, Interoperability, Data, Structure.

**Q3: c) 90 minutes**  
Explanation: The recommended SBTM session duration is 90 minutes (60-120 minutes range), which provides enough time for meaningful testing while maintaining focus.

**Q4: b) Test, Bug, Setup**  
Explanation: TBS model tracks time spent on Testing (actual testing), Bug investigation/reporting, and Setup (environment preparation).

**Q5: b) Feature Tour**  
Explanation: The Feature Tour focuses on testing each feature independently without combining features.

**Q6: c) 70-80%**  
Explanation: Ideal TBS distribution is Test: 70-80%, Bug: 10-20%, Setup: 5-10%. High test percentage indicates efficient sessions.

**Q7: b) Explore [AREA] With [RESOURCES] To Discover [INFORMATION]**  
Explanation: Standard SBTM charter format: Explore [what to test] With [tools/techniques] To Discover [what you're looking for].

**Q8: b) Claims Tour**  
Explanation: The Claims Tour specifically focuses on verifying marketing claims and promises made about the product.

**Q9: False**  
Explanation: Exploratory testing is structured and guided by charters, heuristics, and experience. It's NOT random or unstructured.

**Q10: True**  
Explanation: SBTM sessions should be uninterrupted for best focus and productivity. Interruptions should be minimized or the session should be ended and restarted.

**Q11: False**  
Explanation: The Complexity Tour focuses on testing the MOST complex features first, as they are more likely to contain defects.

**Q12: False**  
Explanation: While experience helps, exploratory testing can be learned and practiced by testers at all levels. SBTM provides structure for less experienced testers.

**Q13: a) Test: 72%, Bug: 22%, Setup: 6%**  
Explanation: Test: 65/90 = 72.2%, Bug: 20/90 = 22.2%, Setup: 5/90 = 5.6%

**Q14: c) Variability Tour**  
Explanation: The Variability Tour focuses on testing with varying inputs, data, payment methods, currencies, and scenarios - perfect for payment gateway testing.

**Q15: b) No, you didn't cover invalid credentials**  
Explanation: The charter explicitly states "valid and invalid credentials." Completing only half the charter means it's not done, regardless of time spent.

### Full Mode Additional Answers (Q16-Q30)

**Q16: b) User Tour**  
Explanation: The User Tour focuses on testing from different user personas (novice, expert, malicious, elderly, etc.).

**Q17: b) To share findings and plan next steps**  
Explanation: Session debriefs are collaborative meetings to review findings, discuss issues, and plan follow-up testing. Duration: 15-30 minutes.

**Q18: b) Follow-up testing identified but not completed**  
Explanation: Opportunities are areas identified during testing that need follow-up sessions but couldn't be completed in the current session.

**Q19: b) CRUD**  
Explanation: CRUD heuristic tests Create, Read, Update, Delete operations for any entity in the system.

**Q20: a) Too much, too little, just right**  
Explanation: Goldilocks heuristic tests boundary conditions: minimum values (too little), maximum values (too much), and normal values (just right).

**Q21: b) Testability Tour**  
Explanation: The Testability Tour evaluates how easy the application is to test, including test data setup, observability, and automation potential.

**Q22: b) Within 24 hours**  
Explanation: Session debriefs should occur within 24 hours while findings are fresh. For critical findings, debrief immediately.

**Q23: True**  
Explanation: The Interoperability Tour specifically focuses on testing integrations with third-party APIs, external services, and other systems.

**Q24: True**  
Explanation: A well-sized charter should be completable in one 90-minute session. If too large, split into multiple charters.

**Q25: False**  
Explanation: Exploratory testing complements scripted testing. Best practice is a blended approach: 70% scripted, 30% exploratory.

**Q26: True**  
Explanation: The Data Tour follows data through its lifecycle: input, validation, storage, retrieval, display, update, and deletion.

**Q27: b) "Explore shopping cart functionality with various product quantities and types to discover calculation and state management issues"**  
Explanation: Good charter is specific (shopping cart), defines resources (various quantities/types), and states objective (find calculation/state issues).

**Q28: c) Note the bug briefly and continue testing, document fully at end**  
Explanation: During a session, note bugs briefly to maintain testing flow. Document fully during wrap-up phase. Don't let bug investigation consume all testing time.

**Q29: b) Number of sessions completed and coverage achieved**  
Explanation: SBTM metrics include session count, coverage (features tested), defect discovery rate, and TBS efficiency - all trackable and meaningful.

**Q30: b) 3.0 defects per session**  
Explanation: DDR = Total Defects / Total Sessions = 36 / 12 = 3.0 defects per session

---

## Scoring Guide

### Quick Mode (15 questions)
- **Total Points:** 15
- **Passing Score:** 11/15 (73%)
- **Score Breakdown:**
  - 13-15: Excellent (87-100%)
  - 11-12: Good (73-80%)
  - 9-10: Fair (60-67%)
  - Below 9: Needs Review

### Full Mode (30 questions)
- **Total Points:** 30
- **Passing Score:** 21/30 (70%)
- **Score Breakdown:**
  - 27-30: Excellent (90-100%)
  - 24-26: Very Good (80-87%)
  - 21-23: Good (70-77%)
  - 18-20: Fair (60-67%)
  - Below 18: Needs Review

---

## Key Concepts Summary

### Exploratory Testing
- **Definition:** Simultaneous learning, test design, and execution
- **NOT random:** Structured, purposeful, guided by charters and heuristics
- **When to use:** New features, time-constrained testing, finding unexpected issues
- **Blended approach:** 70% scripted, 30% exploratory

### Testing Tours (FCC CUTS VIDS)
**Business District (FCC):**
- Feature Tour - Test each feature in isolation
- Complexity Tour - Test most complex features first
- Claims Tour - Verify marketing claims

**Historical District (CUTS):**
- Configuration Tour - Test with different configurations
- User Tour - Test from different user personas
- Testability Tour - Evaluate ease of testing
- Scenarios Tour - Test end-to-end workflows

**Entertainment District (VIDS):**
- Variability Tour - Test with varying inputs and data
- Interoperability Tour - Test integrations
- Data Tour - Test data flow and persistence
- Structure Tour - Test application architecture

### Session-Based Test Management (SBTM)
- **Session Duration:** 90 minutes (60-120 range)
- **Structure:** Setup (5-10 min), Testing (70-80 min), Wrap-up (5-10 min)
- **Charter Format:** Explore [AREA] With [RESOURCES] To Discover [INFORMATION]
- **TBS Model:** Test 70-80%, Bug 10-20%, Setup 5-10%
- **Debrief:** Within 24 hours, 15-30 minutes

### Key Heuristics
- **CRUD:** Create, Read, Update, Delete
- **Goldilocks:** Too much, too little, just right
- **Consistency:** Verify consistency across application
- **Interrupt & Resume:** Test behavior when interrupted
- **Error Forcing:** Deliberately cause errors
- **Follow the Data:** Trace data flow through system

### SBTM Metrics
- **Session Count:** Number of sessions completed
- **Test Coverage:** Features/areas tested
- **Defect Discovery Rate (DDR):** Defects found per session
- **Session Efficiency:** TBS ratio
- **Charter Completion Rate:** Percentage of charters completed
- **Opportunity Backlog:** Follow-up testing identified

---

## Practical Application

### Creating Effective Charters

**Poor Charter:**
❌ "Test the application"
- Too broad, no focus, no resources defined

**Good Charter:**
✓ "Explore payment processing with multiple payment methods and error scenarios to discover integration and error handling issues"
- Specific area (payment processing)
- Defined resources (multiple methods, error scenarios)
- Clear objective (find integration/error issues)

### Session Execution Tips

**Before Session:**
- Review charter carefully
- Prepare test environment
- Gather necessary resources
- Set timer for 90 minutes

**During Session:**
- Stay focused on charter
- Take real-time notes
- Document bugs briefly
- Capture screenshots/evidence
- Adapt based on findings

**After Session:**
- Complete session sheet immediately
- Calculate TBS breakdown
- Submit bug reports
- Identify opportunities
- Save all artifacts

### Debrief Best Practices

**DO:**
✓ Be prepared with session sheet
✓ Show evidence (screenshots)
✓ Focus on facts
✓ Suggest follow-up testing
✓ Listen to feedback

**DON'T:**
✗ Wing it unprepared
✗ Make accusations
✗ Get defensive
✗ Overload with details
✗ Skip documentation

---

## Common Mistakes to Avoid

❌ **Treating exploratory testing as random clicking**
✓ Use charters, heuristics, and structured approaches

❌ **Skipping session documentation**
✓ Complete session sheet immediately after testing

❌ **Spending too much time on setup**
✓ Prepare environment before session starts

❌ **Not tracking time breakdown (TBS)**
✓ Monitor and optimize time distribution

❌ **Creating charters that are too broad**
✓ Size charters for 90-minute completion

❌ **Ignoring opportunities for follow-up**
✓ Document areas needing additional testing

❌ **Testing without a charter**
✓ Always have a clear mission/charter

❌ **Not debriefing sessions**
✓ Debrief within 24 hours to share findings

---

## Study Tips

**For Exploratory Testing:**
1. Practice all 11 testing tours on real applications
2. Create charter bank for common scenarios
3. Conduct multiple SBTM sessions
4. Track your TBS metrics
5. Learn from experienced exploratory testers

**For Testing Tours:**
1. Memorize FCC CUTS VIDS mnemonic
2. Practice identifying which tour fits which scenario
3. Combine multiple tours in one session
4. Document tour-specific findings

**For SBTM:**
1. Practice writing effective charters
2. Time your sessions strictly (90 minutes)
3. Calculate TBS breakdown for each session
4. Conduct debriefs with team members
5. Build a charter library

**For Heuristics:**
1. Learn and practice each heuristic
2. Create heuristic cheat sheet
3. Apply multiple heuristics in sessions
4. Document which heuristics find most bugs

---

## Next Steps

### If You Passed (70%+):
✓ Excellent! You understand exploratory testing and SBTM  
✓ Practice conducting actual SBTM sessions  
✓ Create charter bank for your projects  
✓ Move on to Day 14: Week 2 Review

### If You Need More Practice (<70%):
1. Review the Day 13 study guide thoroughly
2. Practice writing 10 different charters
3. Conduct 3 SBTM sessions on test websites
4. Study all 11 testing tours in detail
5. Learn and apply testing heuristics
6. Retake this assessment

### Recommended Practice:
- Conduct 5 SBTM sessions on https://www.saucedemo.com/
- Practice all 11 testing tours
- Create 20 different charters
- Track TBS metrics for each session
- Debrief with peers or mentors

---

**Congratulations on completing Day 13 Assessment!**

Exploratory testing and SBTM are powerful techniques that complement scripted testing and help find unexpected issues.

**Study Time:** 5-6 hours

---

*End of Day 13 Assessment*