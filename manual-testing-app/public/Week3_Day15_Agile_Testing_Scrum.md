# Day 15: Agile Testing & Scrum
## Comprehensive Study Guide

---

## Table of Contents
1. [Agile Methodology Overview](#agile-methodology-overview)
2. [Scrum Framework Deep Dive](#scrum-framework-deep-dive)
3. [Testing in Agile/Scrum](#testing-in-agile-scrum)
4. [Agile Testing Quadrants](#agile-testing-quadrants)
5. [Agile Testing Principles](#agile-testing-principles)
6. [Practical Exercises](#practical-exercises)
7. [Assessment Questions](#assessment-questions)

---

## Agile Methodology Overview

### 1.1 The Agile Manifesto

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGILE MANIFESTO (2001)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOUR CORE VALUES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INDIVIDUALS AND INTERACTIONS
   over processes and tools
   
   Meaning:
   - People matter more than processes
   - Face-to-face communication preferred
   - Team collaboration is key
   - Empower team members
   
   Example in Testing:
   ✓ Tester talking directly to developer about a bug
   ✗ Only communicating through formal defect reports

2. WORKING SOFTWARE
   over comprehensive documentation
   
   Meaning:
   - Deliver functional software frequently
   - Documentation is important but secondary
   - Focus on value delivery
   - Software is the primary measure of progress
   
   Example in Testing:
   ✓ Testing working features every sprint
   ✗ Spending weeks writing test plan documents

3. CUSTOMER COLLABORATION
   over contract negotiation
   
   Meaning:
   - Work closely with stakeholders
   - Regular feedback loops
   - Adapt to changing requirements
   - Partnerships over contracts
   
   Example in Testing:
   ✓ Product Owner provides acceptance criteria
   ✓ Testers participate in sprint planning
   ✗ Testing only what's in original contract

4. RESPONDING TO CHANGE
   over following a plan
   
   Meaning:
   - Embrace changing requirements
   - Adapt quickly
   - Iterative approach
   - Continuous improvement
   
   Example in Testing:
   ✓ Adjusting test scope mid-sprint based on priorities
   ✗ Refusing to test new features not in original plan

Important Note:
"While there is value in the items on the right,
we value the items on the left more."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TWELVE AGILE PRINCIPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Customer Satisfaction
   "Our highest priority is to satisfy the customer through
   early and continuous delivery of valuable software."
   
   Testing Impact:
   - Test early and often
   - Focus on business value
   - Prioritize critical features

2. Welcome Changing Requirements
   "Welcome changing requirements, even late in development.
   Agile processes harness change for competitive advantage."
   
   Testing Impact:
   - Flexible test plans
   - Regression suite maintenance
   - Quick test scope adjustments

3. Deliver Working Software Frequently
   "Deliver working software frequently, from a couple of
   weeks to a couple of months, with preference to shorter timescale."
   
   Testing Impact:
   - Sprint testing (2-4 weeks)
   - Continuous integration
   - Automated regression

4. Business and Development Collaboration
   "Business people and developers must work together daily."
   
   Testing Impact:
   - Testers join planning meetings
   - Daily standups with whole team
   - Clarify requirements continuously

5. Motivated Individuals
   "Build projects around motivated individuals. Give them
   the environment and support they need."
   
   Testing Impact:
   - Empower testers to make decisions
   - Provide necessary tools
   - Supportive environment

6. Face-to-Face Conversation
   "The most efficient and effective method of conveying
   information is face-to-face conversation."
   
   Testing Impact:
   - Talk to developers directly
   - Participate in team discussions
   - Avoid email-only communication

7. Working Software is Primary Measure
   "Working software is the primary measure of progress."
   
   Testing Impact:
   - Focus on working features
   - Test automation
   - Definition of Done

8. Sustainable Development
   "Agile processes promote sustainable development.
   Sponsors, developers, and users should be able to
   maintain a constant pace indefinitely."
   
   Testing Impact:
   - Avoid testing crunches
   - Balanced workload
   - No overtime culture

9. Technical Excellence
   "Continuous attention to technical excellence and
   good design enhances agility."
   
   Testing Impact:
   - Test code quality
   - Maintain test suites
   - Technical debt tracking

10. Simplicity
    "Simplicity--the art of maximizing the amount of
    work not done--is essential."
    
    Testing Impact:
    - Essential tests only
    - Avoid over-testing
    - Remove obsolete tests

11. Self-Organizing Teams
    "The best architectures, requirements, and designs
    emerge from self-organizing teams."
    
    Testing Impact:
    - Testers contribute to strategy
    - Team decides approach
    - Collaborative planning

12. Regular Reflection and Adjustment
    "At regular intervals, the team reflects on how to
    become more effective, then tunes and adjusts."
    
    Testing Impact:
    - Sprint retrospectives
    - Process improvement
    - Metrics review

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.2 Agile vs Waterfall

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGILE VS WATERFALL COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────────┬─────────────────────┬─────────────────────┐
│ Aspect           │ WATERFALL           │ AGILE               │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Approach         │ Sequential phases   │ Iterative cycles    │
│                  │ (linear)            │ (incremental)       │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Requirements     │ Defined upfront     │ Evolve over time    │
│                  │ (frozen)            │ (flexible)          │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Testing          │ After development   │ Continuous testing  │
│                  │ (separate phase)    │ (integrated)        │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Customer         │ End of project      │ Every sprint        │
│ Feedback         │ (late)              │ (continuous)        │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Delivery         │ Single release      │ Frequent releases   │
│                  │ (6-24 months)       │ (2-4 weeks)         │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Team Structure   │ Specialized roles   │ Cross-functional    │
│                  │ (siloed)            │ (collaborative)     │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Change Handling  │ Difficult/costly    │ Expected/embraced   │
│                  │ (change requests)   │ (adaptive)          │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Documentation    │ Comprehensive       │ Lightweight         │
│                  │ (extensive)         │ (just enough)       │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Risk             │ High (late feedback)│ Low (early feedback)│
│                  │                     │                     │
├──────────────────┼─────────────────────┼─────────────────────┤
│ Best For         │ Fixed requirements  │ Evolving needs      │
│                  │ Regulated industries│ Innovation projects │
└──────────────────┴─────────────────────┴─────────────────────┘

WATERFALL PHASES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Requirements → 2. Design → 3. Implementation →
4. Testing → 5. Deployment → 6. Maintenance

Timeline: 6-24 months

Testing in Waterfall:
- Starts after development complete
- Separate testing team
- Formal test planning
- Big bang testing
- Late defect detection

Issues:
✗ Defects found late (expensive to fix)
✗ No working software until end
✗ Customer feedback only at end
✗ Cannot adapt to changes

AGILE ITERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sprint 1 (2-4 weeks):
Plan → Design → Develop → Test → Review → Deploy

Sprint 2 (2-4 weeks):
Plan → Design → Develop → Test → Review → Deploy

Sprint 3...
[Repeat continuously]

Testing in Agile:
✓ Testing throughout sprint
✓ Testers part of dev team
✓ Lightweight test planning
✓ Continuous testing
✓ Early defect detection

Benefits:
✓ Early and frequent delivery
✓ Quick adaptation to changes
✓ Customer collaboration
✓ Early ROI

Example Comparison:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project: Build E-commerce Website

WATERFALL APPROACH:
Month 1-3: Requirements and design
Month 4-8: Development
Month 9-11: Testing
Month 12: Deployment

Customer sees working product: Month 12
First feedback: Month 12
Risk: High (what if requirements were wrong?)

AGILE APPROACH:
Sprint 1 (2 weeks): User registration + login
  → Deploy, get feedback
Sprint 2 (2 weeks): Product catalog
  → Deploy, get feedback
Sprint 3 (2 weeks): Shopping cart
  → Deploy, get feedback
Sprint 4 (2 weeks): Checkout
  → Deploy, get feedback

Customer sees working product: Week 2
First feedback: Week 2
Risk: Low (continuous validation)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 1.3 Agile Frameworks

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POPULAR AGILE FRAMEWORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SCRUM (Most Popular)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Characteristics:
- Fixed-length sprints (2-4 weeks)
- Defined roles (PO, SM, Dev Team)
- Specific ceremonies
- Iterative and incremental

Best For:
✓ Teams new to Agile
✓ Projects with evolving requirements
✓ Product development

Testing Approach:
- Testing within each sprint
- Definition of Done includes testing
- Whole team quality approach

2. KANBAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Characteristics:
- Continuous flow (no sprints)
- Visual board (To Do, In Progress, Done)
- WIP (Work In Progress) limits
- Pull system

Kanban Board Example:
┌────────────┬────────────┬────────────┬────────────┐
│ To Do      │ In Dev     │ In Testing │ Done       │
│            │ (WIP: 3)   │ (WIP: 2)   │            │
├────────────┼────────────┼────────────┼────────────┤
│ Story A    │ Story B    │ Story C    │ Story X    │
│ Story D    │ Story E    │ Story F    │ Story Y    │
│ Story G    │ Story H    │            │ Story Z    │
│ Story I    │            │            │            │
└────────────┴────────────┴────────────┴────────────┘

Best For:
✓ Support and maintenance teams
✓ Continuous delivery
✓ Operations teams

Testing Approach:
- Test as work flows through
- Dedicated testing column
- WIP limits prevent bottlenecks

3. EXTREME PROGRAMMING (XP)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Characteristics:
- Short iterations (1-2 weeks)
- Technical practices focused
- Pair programming
- TDD (Test-Driven Development)

Core Practices:
✓ Continuous Integration
✓ Test-Driven Development
✓ Pair Programming
✓ Refactoring
✓ Simple Design
✓ Collective Code Ownership

Best For:
✓ Technical teams
✓ Quality-focused projects
✓ Complex systems

Testing Approach:
- Test-first development
- Automated testing
- Continuous testing

4. SCRUMBAN (Hybrid)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Combination of Scrum + Kanban

From Scrum:
✓ Sprints (optional)
✓ Roles
✓ Ceremonies (selected)

From Kanban:
✓ Visual board
✓ WIP limits
✓ Continuous flow

Best For:
✓ Teams transitioning from Scrum
✓ Maintenance projects
✓ Mixed project types

5. SAFe (Scaled Agile Framework)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
For large organizations (50+ people)

Characteristics:
- Multiple teams coordinated
- Program Increments (8-12 weeks)
- Architectural runway
- Release trains

Best For:
✓ Enterprise organizations
✓ Multiple coordinated teams
✓ Large-scale projects

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FRAMEWORK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────┬──────────┬──────────┬─────────┬──────────┐
│ Aspect   │ Scrum    │ Kanban   │ XP      │ Scrumban │
├──────────┼──────────┼──────────┼─────────┼──────────┤
│ Sprints  │ Yes      │ No       │ Yes     │ Optional │
│ Roles    │ Defined  │ Flexible │ Defined │ Flexible │
│ Board    │ Sprint   │ Continuous│ Sprint  │ Continuous│
│ WIP      │ Sprint   │ Limited  │ Sprint  │ Limited  │
│ Change   │ Next     │ Anytime  │ Next    │ Anytime  │
│          │ Sprint   │          │ Sprint  │          │
└──────────┴──────────┴──────────┴─────────┴──────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Scrum Framework Deep Dive

### 2.1 Scrum Overview

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRUM FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition:
Scrum is a lightweight framework that helps people, teams,
and organizations generate value through adaptive solutions
for complex problems.

SCRUM PILLARS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. TRANSPARENCY
   - Everyone can see what's happening
   - Work is visible
   - Progress is clear
   
   Example:
   ✓ Scrum board visible to all
   ✓ Burndown charts shared
   ✓ Open communication

2. INSPECTION
   - Regular checkpoints
   - Review artifacts
   - Detect variances
   
   Example:
   ✓ Daily standups
   ✓ Sprint review
   ✓ Sprint retrospective

3. ADAPTATION
   - Adjust based on learnings
   - Continuous improvement
   - Embrace change
   
   Example:
   ✓ Process changes from retros
   ✓ Scope adjustments
   ✓ Team improvements

SCRUM VALUES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. COMMITMENT
   - Team commits to sprint goals
   - Everyone dedicates to success
   - Focus on delivery

2. COURAGE
   - Address difficult problems
   - Speak up about issues
   - Take calculated risks

3. FOCUS
   - Sprint goal is priority
   - Minimize distractions
   - Concentrate on current work

4. OPENNESS
   - Transparent about work
   - Share challenges
   - Collaborative mindset

5. RESPECT
   - Value team members
   - Appreciate differences
   - Professional conduct

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRUM FLOW DIAGRAM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Product Backlog
      ↓
 Sprint Planning
      ↓
 Sprint Backlog
      ↓
┌──────────────────────────────┐
│      SPRINT (2-4 weeks)      │
│                              │
│  Daily Standup → Daily Standup│
│         ↓              ↓     │
│    Development & Testing     │
│                              │
│      Increment (Done)        │
└──────────────────────────────┘
      ↓              ↓
Sprint Review  Sprint Retrospective
      ↓
  Next Sprint

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 2.2 Scrum Roles

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRUM ROLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PRODUCT OWNER (PO)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Responsibilities:
✓ Maximizing product value
✓ Managing Product Backlog
✓ Prioritizing features
✓ Defining acceptance criteria
✓ Stakeholder communication
✓ Making trade-off decisions
✓ Accepting/rejecting work

Key Activities:
- Writes user stories
- Prioritizes backlog
- Answers team questions
- Attends sprint ceremonies
- Validates deliverables

Example Day:
09:00 - Refine backlog items
10:00 - Daily standup
10:15 - Clarify story with team
11:00 - Stakeholder meeting
14:00 - Sprint review
15:00 - Accept completed stories

NOT Responsible For:
✗ How work is done
✗ Team management
✗ Technical decisions
✗ Task assignments

Relationship with QA:
- Provides acceptance criteria
- Reviews test results
- Clarifies requirements
- Validates test scenarios

2. SCRUM MASTER (SM)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Responsibilities:
✓ Facilitating Scrum events
✓ Coaching the team
✓ Removing impediments
✓ Protecting team from interruptions
✓ Ensuring Scrum practices followed
✓ Fostering self-organization

Key Activities:
- Facilitates ceremonies
- Removes blockers
- Shields team from distractions
- Coaches on Agile practices
- Tracks metrics

Example Day:
08:30 - Prepare for standup
09:00 - Facilitate daily standup
09:15 - Address impediments
10:00 - Coach team member
11:00 - Update burndown chart
14:00 - Sprint retrospective prep
15:00 - Meet with stakeholders

NOT Responsible For:
✗ Managing the team (not a manager)
✗ Assigning tasks
✗ Making technical decisions
✗ Prioritizing backlog

Relationship with QA:
- Removes testing blockers
- Facilitates test discussions
- Coaches on quality practices
- Ensures testing time protected

3. DEVELOPMENT TEAM (Including Testers)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Characteristics:
✓ Self-organizing
✓ Cross-functional
✓ 5-9 members (ideal)
✓ No sub-teams
✓ Collectively responsible

Team Composition Example:
- 3-4 Developers
- 1-2 Testers
- 1 UI/UX Designer
- 1 DevOps Engineer

Responsibilities:
✓ Delivering increment
✓ Creating Sprint Backlog
✓ Ensuring quality
✓ Self-management
✓ Collaboration

Tester's Role in Team:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NOT a separate role, but a skill set:

Tester Activities:
✓ Participate in all ceremonies
✓ Help write acceptance criteria
✓ Test throughout sprint
✓ Pair with developers
✓ Automate tests
✓ Exploratory testing
✓ Define DoD
✓ Coach team on quality

Collaboration Example:
Developer writes code → Tester reviews
Developer commits code → Automated tests run
Tester finds bug → Pair with developer to fix
Feature complete → Tester performs exploratory testing
Sprint ends → Tester reports on quality

IMPORTANT: No "Throwing Over the Wall"

Bad (Traditional):
Developer → (Completes) → Tester → (Finds bugs) → Developer
(Sequential, delays)

Good (Agile):
Developer ↔ Tester (Continuous collaboration)
- Daily communication
- Shared responsibility for quality
- No blame culture

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROLE COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌────────────────┬────────────┬─────────────┬────────────┐
│ Aspect         │ PO         │ SM          │ Dev Team   │
├────────────────┼────────────┼─────────────┼────────────┤
│ Focus          │ What       │ How (process│ How (tech) │
│                │ to build   │ )           │            │
├────────────────┼────────────┼─────────────┼────────────┤
│ Accountable    │ Product    │ Scrum       │ Increment  │
│ For            │ value      │ process     │ quality    │
├────────────────┼────────────┼─────────────┼────────────┤
│ Primary        │ Business   │ Team        │ Team       │
│ Customer       │ stakeholders│            │            │
├────────────────┼────────────┼─────────────┼────────────┤
│ Decision       │ Priority   │ Process     │ Technical  │
│ Authority      │            │ improvement │ approach   │
└────────────────┴────────────┴─────────────┴────────────┘

Team Interaction Example:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scenario: New feature - "Add social media sharing"

PO:
- Writes user story
- Defines business value
- Sets priority (P1)
- Provides acceptance criteria

SM:
- Facilitates planning meeting
- Ensures story is clear
- Helps team estimate
- Removes impediments

Development Team (including tester):
- Asks clarifying questions
- Estimates effort (story points)
- Designs solution
- Develops and tests
- Delivers working feature

Tester Specifically:
- Reviews acceptance criteria
- Suggests testability improvements
- Creates test scenarios
- Tests during development
- Reports quality status

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Testing in Agile/Scrum

### 3.1 Whole Team Approach to Quality

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHOLE TEAM QUALITY APPROACH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Principle:
"Quality is everyone's responsibility, not just testers."

Traditional Approach (WRONG):
Developer → Writes code
Tester → Tests code
Result: Quality is tester's problem

Agile Approach (RIGHT):
ENTIRE TEAM → Responsible for quality
- Developers write testable code
- Testers guide quality practices
- PO defines acceptance criteria
- Everyone tests

Quality Activities by Role:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Product Owner:
✓ Clear acceptance criteria
✓ Testable user stories
✓ Available for questions
✓ Reviews test results

Developers:
✓ Unit testing
✓ Code reviews
✓ Refactoring
✓ Pair programming
✓ Testable code
✓ Fix bugs promptly

Testers:
✓ Test strategy
✓ Test automation
✓ Exploratory testing
✓ Defect prevention
✓ Quality coaching
✓ Test data management

Scrum Master:
✓ Facilitate quality discussions
✓ Remove testing impediments
✓ Track quality metrics
✓ Coach quality practices

Example - Social Login Feature:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PO:
- Writes user story with acceptance criteria
- Provides test accounts for Google/Facebook
- Clarifies edge cases

Developer:
- Writes unit tests first (TDD)
- Implements OAuth integration
- Pair programs with tester on complex logic
- Fixes bugs same day

Tester:
- Reviews acceptance criteria (suggests additions)
- Creates automated API tests
- Performs exploratory testing
- Tests across browsers/devices
- Documents test results

SM:
- Ensures test environment ready
- Removes blocker (OAuth approval delay)
- Facilitates testing discussions

Result: High-quality feature, whole team engaged

COLLABORATIVE TESTING PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THREE AMIGOS MEETINGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Who: Product Owner + Developer + Tester
When: Before sprint or during refinement
Duration: 30-45 minutes per story
Purpose: Shared understanding of requirements

Discussion Points:
✓ User story review
✓ Acceptance criteria clarification
✓ Test scenarios identification
✓ Edge cases discussion
✓ Technical feasibility
✓ Testability concerns

Example Three Amigos Session:

User Story: "As a user, I want to reset my password"

PO Perspective:
- Business need: Users forget passwords frequently
- Success criteria: <1 minute to reset
- Security: Email-based reset

Developer Perspective:
- Implementation: Token-based reset link
- Concerns: Token expiration time?
- Dependencies: Email service

Tester Perspective:
- Test scenarios:
  ✓ Valid email
  ✓ Invalid email
  ✓ Expired token
  ✓ Already used token
  ✓ Multiple reset requests
- Edge cases:
  ✓ Email not delivered
  ✓ Special characters in email
  ✓ Concurrent resets

Outcome:
- Refined acceptance criteria
- Identified 10 test scenarios
- Technical approach agreed
- Ready for sprint

2. PAIR TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tester + Developer testing together

Benefits:
✓ Faster bug fixes
✓ Knowledge sharing
✓ Better test coverage
✓ Learning opportunity

Example:
Tester: "Let's test the payment flow"
Developer: "I'll run the debugger"
[Testing begins]
Tester: "Error on card expiration validation"
Developer: "I see the issue, let me fix it"
[Developer fixes in real-time]
Tester: "Great, let's test again"

3. SPECIFICATION BY EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concrete examples to clarify requirements

Instead of:
"Password must be strong"

Use Examples:
✓ PASS: "MyP@ssw0rd123"
✗ FAIL: "password" (too simple)
✗ FAIL: "12345678" (no letters)
✗ FAIL: "abcdefgh" (no numbers/special chars)

Rules derived from examples:
- Minimum 8 characters
- At least 1 uppercase
- At least 1 lowercase
- At least 1 number
- At least 1 special character

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.2 User Stories and Acceptance Criteria

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER STORIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

USER STORY FORMAT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

As a [role],
I want [feature],
So that [benefit].

Example 1:
As a registered user,
I want to save items to my wishlist,
So that I can purchase them later.

Example 2:
As an administrator,
I want to view user activity logs,
So that I can monitor system usage and detect issues.

Example 3:
As a guest user,
I want to browse products without creating an account,
So that I can explore before committing to register.

INVEST Criteria for Good User Stories:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I - INDEPENDENT
   Stories can be developed in any order
   Not dependent on other stories

N - NEGOTIABLE
   Details can be discussed
   Not a fixed contract

V - VALUABLE
   Provides value to users/business
   Clear benefit

E - ESTIMABLE
   Team can estimate effort
   Clear enough to size

S - SMALL
   Can be completed in one sprint
   Not too large

T - TESTABLE
   Can verify if done correctly
   Clear acceptance criteria

ACCEPTANCE CRITERIA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition:
Conditions that must be met for a user story
to be accepted as complete.

Format 1: GIVEN-WHEN-THEN (BDD Style)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Structure:
GIVEN [initial context]
WHEN [event occurs]
THEN [expected outcome]

Example: Login Feature

GIVEN I am on the login page
WHEN I enter valid username and password
THEN I should be redirected to the homepage
AND I should see a welcome message

GIVEN I am on the login page
WHEN I enter invalid credentials
THEN I should see an error message "Invalid credentials"
AND I should remain on the login page

GIVEN I have failed login 3 times
WHEN I attempt to login again
THEN my account should be locked for 30 minutes
AND I should see "Account temporarily locked" message

Format 2: SCENARIO-BASED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scenario 1: Successful Search
✓ User can enter search term
✓ Results display within 2 seconds
✓ Results are relevant to search term
✓ Results show product image, name, price
✓ User can click result to view details

Scenario 2: No Results Found
✓ Message displayed: "No products found"
✓ Suggestions shown for alternative searches
✓ User can modify search

Scenario 3: Search with Filters
✓ User can apply filters (price, brand, rating)
✓ Results update immediately
✓ Applied filters are visible
✓ User can remove filters

COMPREHENSIVE EXAMPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1: Password Reset
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Story:
As a registered user,
I want to reset my forgotten password,
So that I can regain access to my account.

Acceptance Criteria:

Scenario 1: Request Password Reset
GIVEN I am on the login page
WHEN I click "Forgot Password?"
THEN I should be taken to password reset page
AND I should see a field to enter my email

Scenario 2: Valid Email Submitted
GIVEN I am on the password reset page
WHEN I enter my registered email
AND I click "Send Reset Link"
THEN I should receive a reset email within 2 minutes
AND I should see confirmation message
AND the reset link should be valid for 1 hour

Scenario 3: Invalid Email Submitted
GIVEN I am on the password reset page
WHEN I enter an unregistered email
AND I click "Send Reset Link"
THEN I should see "If email exists, reset link sent"
(Security: Don't reveal if email is registered)

Scenario 4: Using Reset Link
GIVEN I received a reset email
WHEN I click the reset link
THEN I should be taken to set new password page
AND I should be able to enter new password twice
AND password strength indicator should be shown

Scenario 5: Setting New Password
GIVEN I am on set new password page
WHEN I enter valid new password (confirmed)
AND I click "Reset Password"
THEN my password should be updated
AND I should be redirected to login page
AND I should see "Password successfully reset"
AND old password should no longer work
AND reset link should be invalidated

Scenario 6: Expired Reset Link
GIVEN I received a reset email 2 hours ago
WHEN I click the reset link
THEN I should see "Link expired"
AND I should have option to request new link

Scenario 7: Already Used Reset Link
GIVEN I already used a reset link
WHEN I click the same link again
THEN I should see "Link already used"
AND I should have option to request new link

Example 2: Shopping Cart
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Story:
As a shopper,
I want to add products to my cart,
So that I can purchase multiple items at once.

Acceptance Criteria:

Scenario 1: Add Product to Empty Cart
GIVEN my cart is empty
WHEN I click "Add to Cart" on a product
THEN the product should be added to cart
AND cart icon should show count "1"
AND I should see confirmation message
AND I should remain on the same page

Scenario 2: Add Same Product Multiple Times
GIVEN I have product X in cart (quantity: 1)
WHEN I add product X again
THEN quantity should increase to 2
AND cart icon should show count "1" (1 unique item)
AND total price should update correctly

Scenario 3: Add Multiple Different Products
GIVEN I have product A in cart
WHEN I add product B
AND I add product C
THEN cart should contain 3 items
AND cart icon should show "3"
AND subtotal should be sum of all products

Scenario 4: Update Quantity in Cart
GIVEN I have product X (qty: 2) in cart
WHEN I change quantity to 5
THEN quantity should update to 5
AND price should recalculate
AND update should be reflected immediately

Scenario 5: Remove Product from Cart
GIVEN I have 3 products in cart
WHEN I click "Remove" on product A
THEN product A should be removed
AND cart should show 2 products
AND subtotal should recalculate

Scenario 6: Cart Persistence
GIVEN I add products to cart
WHEN I close browser and return
THEN cart should still contain my products
(For logged-in users)

Scenario 7: Stock Availability Check
GIVEN product X has only 2 units in stock
WHEN I try to add 5 units to cart
THEN I should see "Only 2 available"
AND only 2 units should be added

Example 3: File Upload
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Story:
As a user,
I want to upload my profile picture,
So that others can recognize me.

Acceptance Criteria:

Scenario 1: Valid Image Upload
GIVEN I am on the profile edit page
WHEN I click "Upload Picture"
AND I select a valid image (JPG, PNG, GIF)
AND file size < 5MB
THEN image should upload successfully
AND preview should be shown
AND "Save" button should be enabled

Scenario 2: Invalid File Type
GIVEN I am on profile edit page
WHEN I try to upload a PDF file
THEN I should see error "Only JPG, PNG, GIF allowed"
AND file should not upload

Scenario 3: File Size Exceeded
GIVEN I am on profile edit page
WHEN I try to upload 10MB image
THEN I should see error "Max file size is 5MB"
AND I should see compression suggestion

Scenario 4: Image Cropping
GIVEN I uploaded an image
WHEN I see the preview
THEN I should be able to crop the image
AND preview should update as I crop
AND aspect ratio should be 1:1 (square)

Scenario 5: Upload Progress
GIVEN I selected a 3MB image
WHEN upload begins
THEN I should see progress bar
AND I should be able to cancel upload
AND uploaded percentage should be shown

Scenario 6: No Image Selected
GIVEN I am on profile edit page
WHEN I click "Save" without uploading image
THEN I should keep my current profile picture
OR default avatar if no previous picture

Example 4: Product Search with Filters
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Story:
As a shopper,
I want to filter search results by price and brand,
So that I can find products matching my budget and preferences.

Acceptance Criteria:

Scenario 1: Apply Price Filter
GIVEN I searched for "laptop"
AND I see 100 results
WHEN I set price range $500-$1000
THEN results should show only laptops in that range
AND result count should update
AND applied filter should be visible

Scenario 2: Apply Brand Filter
GIVEN I searched for "smartphone"
WHEN I select brand filter "Apple"
THEN only Apple phones should be shown
AND "Apple" filter should be highlighted

Scenario 3: Multiple Filters
GIVEN I searched for "shoes"
WHEN I select brand "Nike"
AND set price range $50-$100
AND select size "10"
THEN results should match ALL criteria
AND all applied filters should be shown

Scenario 4: Remove Filter
GIVEN I have price filter applied
WHEN I click "X" on price filter
THEN price filter should be removed
AND results should update to show all prices
AND other filters should remain active

Scenario 5: No Results with Filters
GIVEN I applied multiple filters
WHEN no products match criteria
THEN I should see "No products found"
AND suggestion to broaden search
AND option to clear all filters

Example 5: Email Notification
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Story:
As a user,
I want to receive email notifications for order updates,
So that I stay informed about my purchases.

Acceptance Criteria:

Scenario 1: Order Confirmation Email
GIVEN I placed an order
WHEN payment is successful
THEN I should receive confirmation email within 5 minutes
AND email should contain:
  - Order number
  - Items ordered
  - Total amount
  - Delivery address
  - Expected delivery date
AND email should have working "View Order" link

Scenario 2: Shipment Notification
GIVEN my order has shipped
WHEN courier picks up package
THEN I should receive shipment email
AND email should contain:
  - Tracking number
  - Courier name
  - Tracking link
  - Expected delivery date

Scenario 3: Delivery Notification
GIVEN my order was delivered
WHEN courier marks as delivered
THEN I should receive delivery confirmation
AND email should ask for feedback/review

Scenario 4: Email Opt-out
GIVEN I don't want promotional emails
WHEN I unsubscribe from promotions
THEN I should stop receiving promotional emails
BUT still receive transactional emails (order updates)

Scenario 5: Email Failure Handling
GIVEN my email address is invalid
WHEN system tries to send email
THEN order should still be processed
AND I should be notified via SMS/phone
AND email failure should be logged

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRITING EFFECTIVE ACCEPTANCE CRITERIA - CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DO:
✓ Be specific and measurable
✓ Include both positive and negative scenarios
✓ Cover edge cases
✓ Define expected behavior clearly
✓ Include performance criteria when relevant
✓ Consider different user types
✓ Include security considerations
✓ Define error messages
✓ Specify timing/timeouts where applicable
✓ Include accessibility requirements

DON'T:
✗ Be vague ("system should work well")
✗ Use technical jargon
✗ Make assumptions
✗ Skip edge cases
✗ Forget error scenarios
✗ Omit performance criteria
✗ Ignore security aspects
✗ Write from developer perspective only

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

(Content continues with sections on Definition of Done, Scrum Ceremonies, Agile Testing Quadrants, Practical Exercises, and Assessment Questions...)

### 3.3 Definition of Done (DoD)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEFINITION OF DONE (DoD)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose:
Shared understanding of what "complete" means

DOD TEMPLATE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A user story is DONE when:

DEVELOPMENT:
□ Code written and committed
□ Code reviewed by peer
□ Unit tests written (>80% coverage)
□ No critical bugs
□ Code follows coding standards
□ Refactoring completed

TESTING:
□ All acceptance criteria met
□ Functional testing passed
□ Integration testing passed
□ Regression testing passed (automated)
□ No blockers or critical defects
□ Exploratory testing completed
□ Cross-browser testing done
□ Mobile testing done (if applicable)

QUALITY:
□ Code coverage >80%
□ No critical security vulnerabilities
□ Performance benchmarks met
□ Accessibility standards met (WCAG AA)

DOCUMENTATION:
□ User documentation updated
□ API documentation updated (if applicable)
□ Release notes updated
□ Known issues documented

DEPLOYMENT:
□ Deployed to test environment
□ Deployed to staging environment
□ Product Owner acceptance
□ Ready for production deployment

Example DoD for E-commerce Team:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STORY LEVEL DoD:
✓ All acceptance criteria verified
✓ Tested on Chrome, Safari, Firefox
✓ Tested on iOS and Android
✓ No P0 or P1 defects
✓ Unit test coverage >85%
✓ Automated tests created
✓ Code reviewed and merged
✓ PO accepted the story
✓ User guide updated
✓ Deployed to staging

SPRINT LEVEL DoD:
✓ All stories meet story-level DoD
✓ Sprint goal achieved
✓ Regression suite passed
✓ Performance tests passed
✓ Security scan completed
✓ No known critical bugs
✓ Potentially shippable increment

RELEASE LEVEL DoD:
✓ All sprint-level DoD met
✓ User acceptance testing completed
✓ Production deployment plan reviewed
✓ Rollback plan documented
✓ Support team trained
✓ Marketing materials ready
✓ Legal/compliance review completed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.4 Scrum Ceremonies and Testing

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRUM EVENTS/CEREMONIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SPRINT PLANNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Duration: 2-4 hours for 2-week sprint
Attendees: Entire Scrum Team
Purpose: Plan work for upcoming sprint

Agenda:
Part 1: WHAT will be done? (Sprint Goal)
- PO presents prioritized backlog
- Team selects stories for sprint
- Create sprint goal

Part 2: HOW will it be done? (Sprint Backlog)
- Team breaks stories into tasks
- Team estimates tasks
- Identify dependencies
- Confirm capacity

Tester's Role in Sprint Planning:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before Meeting:
✓ Review backlog items
✓ Identify testability concerns
✓ Prepare questions

During Meeting:
✓ Participate in story selection
✓ Review acceptance criteria
✓ Estimate testing effort
✓ Identify testing dependencies
✓ Highlight risks
✓ Plan test approach

Example Contribution:
Story: "Integrate payment gateway"

Tester asks:
- "Do we have test merchant account?"
- "What payment methods to support?"
- "Security requirements?"
- "Error scenarios to test?"
- "Browser/device coverage?"

Tester estimates:
- Manual testing: 8 hours
- Automation: 6 hours
- Exploratory: 4 hours
Total: 18 hours (2.25 days)

2. DAILY STANDUP (Daily Scrum)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Duration: 15 minutes (timeboxed\!)
Attendees: Development Team
Purpose: Synchronize work, identify impediments

Format (Each person answers):
1. What did I do yesterday?
2. What will I do today?
3. Any impediments?

Tester's Daily Standup Example:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Yesterday:
- Tested user registration story
- Found 2 bugs, both fixed by Sarah
- Started automation for login tests

Today:
- Complete login automation
- Test password reset story
- Pair with John on payment integration

Impediments:
- Test environment was down for 2 hours yesterday
- Need test credit cards for payment testing"

Key Points:
✓ Brief updates
✓ Focus on progress
✓ Raise blockers
✓ NOT a status meeting for managers

3. SPRINT REVIEW (Demo)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Duration: 1-2 hours for 2-week sprint
Attendees: Scrum Team + Stakeholders
Purpose: Demonstrate completed work, gather feedback

Agenda:
✓ PO reviews sprint goal
✓ Team demonstrates increment
✓ PO declares what's "Done"
✓ Stakeholders provide feedback
✓ Discuss what's next

Tester's Role in Sprint Review:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before Review:
✓ Verify all DoD criteria met
✓ Prepare test results summary
✓ Document known issues

During Review:
✓ Present quality status
✓ Highlight test coverage
✓ Demonstrate features working
✓ Explain any limitations

Example Test Summary Presentation:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Testing Summary - Sprint 23:

Stories Completed: 8 of 8
Test Cases Executed: 147
  Passed: 142 (97%)
  Failed: 5 (fixed during sprint)

Test Coverage:
✓ All acceptance criteria verified
✓ Regression suite: 100% pass
✓ Browsers: Chrome, Safari, Firefox tested
✓ Mobile: iOS and Android tested

Known Issues:
- Minor UI alignment issue on iPad (non-blocking)
- Performance optimization identified for next sprint

Quality Status: READY FOR RELEASE"

4. SPRINT RETROSPECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Duration: 1-1.5 hours for 2-week sprint
Attendees: Scrum Team only
Purpose: Inspect and adapt process

Format:
1. What went well?
2. What didn't go well?
3. What should we improve?
4. Action items for next sprint

Tester's Input Example:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What Went Well:
✓ "Three Amigos meetings improved clarity"
✓ "Automated tests caught regression early"
✓ "Good collaboration with developers"

What Didn't Go Well:
✗ "Test environment unstable"
✗ "Late acceptance criteria changes"
✗ "Not enough time for exploratory testing"

Improvements:
→ "Reserve last day of sprint for exploratory testing"
→ "Set up dedicated test environment"
→ "Finalize acceptance criteria before sprint starts"

Action Items:
1. DevOps: Set up separate test environment (Owner: Mike, Due: Next week)
2. Team: Agree to complete refinement before sprint (Owner: All)
3. Tester: Block last day for exploratory testing (Owner: QA)

Retrospective Formats:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Start-Stop-Continue:
   START: What should we start doing?
   STOP: What should we stop doing?
   CONTINUE: What's working well?

2. Glad-Sad-Mad:
   GLAD: What made us happy?
   SAD: What disappointed us?
   MAD: What frustrated us?

3. 4 L's:
   LIKED: What did we like?
   LEARNED: What did we learn?
   LACKED: What was missing?
   LONGED FOR: What do we wish we had?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRUM CEREMONY SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────┬──────────┬────────────┬─────────────────┐
│ Ceremony     │ Duration │ Attendees  │ Tester Focus    │
├──────────────┼──────────┼────────────┼─────────────────┤
│ Sprint       │ 2-4 hrs  │ All        │ Testability,    │
│ Planning     │          │            │ estimates       │
├──────────────┼──────────┼────────────┼─────────────────┤
│ Daily        │ 15 min   │ Team       │ Progress,       │
│ Standup      │          │            │ blockers        │
├──────────────┼──────────┼────────────┼─────────────────┤
│ Sprint       │ 1-2 hrs  │ All +      │ Quality status, │
│ Review       │          │Stakeholders│ test results    │
├──────────────┼──────────┼────────────┼─────────────────┤
│ Sprint       │ 1-1.5hrs │ Team       │ Process         │
│ Retrospective│          │            │ improvements    │
└──────────────┴──────────┴────────────┴─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Agile Testing Quadrants

### 4.1 Brian Marick's Agile Testing Quadrants

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGILE TESTING QUADRANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Visual Representation:

                    BUSINESS FACING
                          ↑
                          │
         Q2               │               Q3
    ┌────────────────────┼────────────────────┐
    │ Functional Tests   │  Exploratory Testing│
    │ Story Tests        │  Scenarios          │
GUIDE│ Prototypes         │  Usability Testing  │CRITIQUE
DEVEL│ Simulations        │  UAT                │PRODUCT
OPMENT│                    │  Alpha/Beta Testing │
    ├────────────────────┼────────────────────┤
    │                    │                    │
    │ Unit Tests         │  Performance Testing│
    │ Component Tests    │  Load Testing       │
    │ API Tests          │  Security Testing   │
    │                    │  "ility" Testing    │
    └────────────────────┼────────────────────┘
         Q1               │               Q4
                          │
                    TECHNOLOGY FACING

             ← AUTOMATED → | ← MANUAL/TOOLS →

QUADRANT 1 (Q1): Technology Facing, Support Programming
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Guide development, prevent defects
Focus: Internal quality, code level
Who: Developers (primarily), Testers
When: During development (TDD)
Automation: Highly automated

Tests in Q1:
✓ Unit Tests
✓ Component Tests
✓ API Tests
✓ Integration Tests (technical)

Characteristics:
- Written before/during code development
- Fast execution
- High automation
- Technology-focused
- Developers write most tests

Example - Unit Test (Jest):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// calculateDiscount function
test('applies 10% discount correctly', () => {
  expect(calculateDiscount(100, 10)).toBe(90);
});

test('handles zero discount', () => {
  expect(calculateDiscount(100, 0)).toBe(100);
});

test('throws error for negative discount', () => {
  expect(() => {
    calculateDiscount(100, -5);
  }).toThrow('Discount cannot be negative');
});

Example - API Test (Postman/Newman):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Test: POST /api/users
Request Body: { "name": "John", "email": "john@example.com" }

Assertions:
✓ Status code is 201
✓ Response contains user ID
✓ Email format is valid
✓ Response time < 500ms

Tester Role in Q1:
- Guide test strategy
- Review test coverage
- Pair with developers
- Suggest edge cases

QUADRANT 2 (Q2): Business Facing, Support Programming
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Guide development, specify behavior
Focus: External quality, business requirements
Who: Testers, Business Analysts, Product Owners
When: Before/during development (BDD)
Automation: Mostly automated

Tests in Q2:
✓ Functional Tests
✓ Story Tests
✓ Prototypes/Wireframes
✓ Examples and Scenarios
✓ Workflow Tests

Characteristics:
- Business language
- Specify expected behavior
- Acceptance criteria
- Can be automated (BDD)
- Team collaboration

Example - BDD Test (Cucumber/Gherkin):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feature: Shopping Cart

Scenario: Add product to cart
  Given I am on the product page for "Laptop"
  When I click "Add to Cart"
  Then the cart should contain 1 item
  And the cart total should be $999.99

Scenario: Apply discount code
  Given I have "Laptop" in cart ($999.99)
  When I apply discount code "SAVE10"
  Then the discount should be $100.00
  And the cart total should be $899.99

Example - Story Test:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Story: Search Products

Test 1: Search with results
Input: "laptop"
Expected: Display 50 results, sorted by relevance

Test 2: Search with no results
Input: "xyzabc123"
Expected: "No products found", show suggestions

Test 3: Search with special characters
Input: "laptop & accessories"
Expected: Handle special chars, return relevant results

Tester Role in Q2:
- Write acceptance tests
- Collaborate on examples
- Automate functional tests
- Guide BDD implementation

QUADRANT 3 (Q3): Business Facing, Critique Product
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Critique product, find issues
Focus: External quality, user perspective
Who: Testers, Users, Product Owners
When: During/after development
Automation: Mostly manual

Tests in Q3:
✓ Exploratory Testing
✓ Usability Testing
✓ User Acceptance Testing (UAT)
✓ Collaborative Testing
✓ Alpha/Beta Testing

Characteristics:
- Manual, human evaluation
- Creativity and experience
- User perspective
- Find unexpected issues
- Subjective assessment

Example - Exploratory Testing Session:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Charter:
"Explore checkout flow with variability tour to discover
calculation errors and usability issues"

Session Notes:
Time: 90 minutes

Found Issues:
1. Promo code applied twice if user refreshes page
2. Shipping address validation accepts invalid ZIP codes
3. "Checkout" button disabled state not visually clear
4. Back button on payment page loses cart data

Usability Observations:
- Confusing layout on mobile (< 375px width)
- "Continue" button too small on tablets
- No confirmation when promo code applied successfully

Example - Usability Testing:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task: "Purchase a laptop under $1000"

User 1 (Novice):
- Time: 8 minutes
- Errors: 2 (couldn't find filters, confused by checkout)
- Success: Yes
- Feedback: "Layout is confusing"

User 2 (Expert):
- Time: 2 minutes
- Errors: 0
- Success: Yes
- Feedback: "Missing keyboard shortcuts"

Insights:
- Filter placement needs improvement for novice users
- Add tooltips/help text
- Provide keyboard shortcuts for power users

Tester Role in Q3:
- Conduct exploratory testing
- Facilitate usability sessions
- Coordinate UAT
- Document findings

QUADRANT 4 (Q4): Technology Facing, Critique Product
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Critique product, validate quality attributes
Focus: Internal quality, non-functional requirements
Who: Testers (specialized), Performance engineers
When: During/after development
Automation: Automated with tools

Tests in Q4:
✓ Performance Testing
✓ Load Testing
✓ Stress Testing
✓ Security Testing
✓ Scalability Testing
✓ Reliability Testing
✓ "ility" Testing (maintainability, etc.)

Characteristics:
- Specialized tools
- Technical expertise
- Non-functional focus
- Often separate from dev cycle
- Requires special environments

Example - Performance Test (JMeter):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Test: Homepage Load Test

Scenario:
- Users: 1000 concurrent
- Duration: 30 minutes
- Ramp-up: 5 minutes

Results:
- Average Response Time: 1.2 seconds ✓
- 95th Percentile: 2.8 seconds ✓
- Max Response Time: 5.1 seconds ⚠
- Error Rate: 0.2% ✓
- Throughput: 250 requests/second ✓

Issues Found:
- Database connection pool exhausted at peak
- Memory leak after 25 minutes

Example - Security Test (OWASP ZAP):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scan Results:
High Risk:
- SQL Injection vulnerability in search (Critical)
- XSS in comment field (High)

Medium Risk:
- Missing CSRF tokens on forms
- Weak password policy

Low Risk:
- Missing security headers (X-Frame-Options)
- Autocomplete enabled on password field

Recommendations:
1. Implement parameterized queries (SQL injection)
2. Sanitize user inputs (XSS)
3. Add CSRF tokens to all forms

Tester Role in Q4:
- Design performance scenarios
- Execute security scans
- Analyze results
- Work with specialists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUADRANT COMPARISON TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────┬─────────┬──────────┬──────────┬───────────┐
│ Aspect  │ Q1      │ Q2       │ Q3       │ Q4        │
├─────────┼─────────┼──────────┼──────────┼───────────┤
│ Purpose │ Guide   │ Guide    │ Critique │ Critique  │
│         │ Dev     │ Dev      │ Product  │ Product   │
├─────────┼─────────┼──────────┼──────────┼───────────┤
│ Focus   │ Tech    │ Business │ Business │ Tech      │
├─────────┼─────────┼──────────┼──────────┼───────────┤
│ Automate│ Yes     │ Mostly   │ No       │ Tools     │
├─────────┼─────────┼──────────┼──────────┼───────────┤
│ Who     │ Devs    │ Testers/ │ Testers/ │ Testers/  │
│         │         │ BA       │ Users    │ Specialists│
├─────────┼─────────┼──────────┼──────────┼───────────┤
│ When    │ TDD     │ BDD      │ After    │ After     │
├─────────┼─────────┼──────────┼──────────┼───────────┤
│ Examples│ Unit    │ BDD      │ Exploratory│Performance│
│         │ API     │ Functional│ UAT      │ Security  │
└─────────┴─────────┴──────────┴──────────┴───────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USING THE QUADRANTS IN PRACTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sprint Testing Strategy Using Quadrants:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sprint Goal: "Implement user registration feature"

Q1 (Unit/Component):
Week 1:
- Developers write unit tests (TDD)
- API tests for registration endpoint
- Testers review test coverage

Q2 (Functional):
Week 1-2:
- Three Amigos define scenarios
- Testers write BDD tests
- Automate acceptance criteria
- Regression tests updated

Q3 (Exploratory/UAT):
Week 2:
- Exploratory testing (1-2 sessions)
- Usability testing with 3 users
- Edge case testing
- Cross-browser testing

Q4 (Performance/Security):
Week 2:
- Security scan (OWASP ZAP)
- Load test (100 concurrent registrations)
- Validate performance (<2s response)

Balance Across Quadrants:
✓ Don't focus only on Q2 (functional)
✓ Include all four quadrants
✓ Automate Q1 and Q2
✓ Reserve time for Q3
✓ Don't skip Q4

Typical Distribution:
Q1: 30% (unit, component)
Q2: 40% (functional, acceptance)
Q3: 20% (exploratory, usability)
Q4: 10% (performance, security)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Agile Testing Principles

### 5.1 Core Agile Testing Principles

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGILE TESTING PRINCIPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRINCIPLE 1: CONTINUOUS FEEDBACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Provide feedback early and often

Feedback Loops:
1. Real-time (seconds):
   - Unit test results
   - Automated regression
   - Linting and code analysis

2. Daily (hours):
   - Daily standup
   - Build status
   - Automated test results

3. Sprint (weeks):
   - Sprint review
   - Quality metrics
   - Sprint retrospective

Example Feedback Loop:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Developer commits code
    ↓ (2 minutes)
CI/CD runs unit tests
    ↓ (5 minutes)
Automated regression runs
    ↓ (15 minutes)
Tester notified of failures
    ↓ (30 minutes)
Tester investigates
    ↓ (1 hour)
Developer fixes issue
    ↓ (2 hours)
Code merged

Total time: 4 hours
vs. Traditional: 1-2 weeks to find issues

PRINCIPLE 2: TEST EARLY, TEST OFTEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Test Activities Throughout Sprint:

Day 1-2 (Sprint Planning):
✓ Review acceptance criteria
✓ Identify testability concerns
✓ Plan test approach

Day 3-8 (Development):
✓ Review code as it's written
✓ Run unit tests continuously
✓ Test features as they're developed
✓ Pair with developers

Day 9-10 (Stabilization):
✓ Exploratory testing
✓ Regression testing
✓ Bug fixes and retesting
✓ Final quality check

PRINCIPLE 3: SHIFT-LEFT TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Move testing earlier in lifecycle

Traditional (Shift-Right):
Requirements → Design → Development → Testing → Deploy
                                      ↑ Testing starts here

Agile (Shift-Left):
Requirements → Design → Development → Testing → Deploy
↑ Testing starts here

Shift-Left Activities:
✓ Participate in requirements discussions
✓ Review designs for testability
✓ Write tests before code (TDD/BDD)
✓ Continuous testing during development
✓ Early defect detection

Benefits:
✓ Find bugs earlier (cheaper to fix)
✓ Prevent defects
✓ Better quality
✓ Faster delivery

Cost of Defect by Phase:
Requirements: $1
Design: $10
Development: $100
Testing: $1000
Production: $10000

Shift-left saves money\!

PRINCIPLE 4: TEST AUTOMATION PYRAMID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Visual:
                 UI (10%)
                ┌────────┐
                │ Manual │
                │   E2E  │
              ┌─┴────────┴─┐
              │ Integration│
              │  Tests     │ (30%)
            ┌─┴────────────┴─┐
            │                 │
            │   Unit Tests    │ (60%)
            │                 │
            └─────────────────┘

Layer 1: Unit Tests (60%)
- Fast (milliseconds)
- Many tests
- Developers write
- Run frequently

Layer 2: Integration Tests (30%)
- Medium speed (seconds)
- Fewer tests
- API, service tests
- Run daily

Layer 3: UI Tests (10%)
- Slow (minutes)
- Fewest tests
- Critical paths
- Run before release

Anti-Pattern (Ice Cream Cone):
            ┌─────────────────┐
            │   Manual        │
            │   UI Tests      │ (60%)
            ├─────────────────┤
            │  Integration    │ (30%)
            ├─────────────────┤
            │  Unit Tests     │ (10%)
            └─────────────────┘

Problems:
✗ Slow feedback
✗ Brittle tests
✗ Expensive maintenance
✗ Late defect detection

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Practical Exercises

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRACTICAL EXERCISES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXERCISE 1: Write Acceptance Criteria for User Stories
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task: Write comprehensive acceptance criteria using
GIVEN-WHEN-THEN format for these 10 user stories:

1. As a user, I want to share products on social media

2. As an admin, I want to export user data to CSV

3. As a customer, I want to track my order status

4. As a user, I want to filter products by multiple attributes

5. As a shopper, I want to compare products side-by-side

6. As a user, I want to save my payment methods

7. As a customer, I want to receive order notifications

8. As a user, I want to write and edit product reviews

9. As a shopper, I want to apply gift cards at checkout

10. As a user, I want to enable two-factor authentication

EXERCISE 2: Create a Sprint Test Plan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scenario: Your team is starting a 2-week sprint

Sprint Goal: "Enable users to manage their wishlist"

Stories in Sprint:
- Create wishlist
- Add items to wishlist
- Remove items from wishlist
- Share wishlist with others
- Move items from wishlist to cart

Task: Create a comprehensive sprint test plan including:
1. Test strategy for each story
2. Test types from all 4 Agile Testing Quadrants
3. Test schedule (what to test when)
4. Risks and mitigation
5. Entry and exit criteria
6. Definition of Done

EXERCISE 3: Map Test Types to Agile Testing Quadrants
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task: Classify these 20 test types into Q1, Q2, Q3, or Q4:

1. Load testing
2. BDD scenarios
3. User acceptance testing
4. Unit testing
5. Smoke testing
6. Accessibility testing
7. API contract testing
8. Exploratory testing
9. Security scanning
10. Functional testing
11. Component testing
12. Usability testing
13. Integration testing
14. Performance testing
15. Story testing
16. Alpha testing
17. Database testing
18. Chaos engineering
19. Regression testing
20. Penetration testing

EXERCISE 4: Design Definition of Done
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task: Create a comprehensive Definition of Done for:

1. Story-level DoD (for an e-commerce team)
2. Sprint-level DoD
3. Release-level DoD

Include criteria for:
- Development
- Testing
- Documentation
- Quality metrics
- Deployment

EXERCISE 5: Create Sprint Testing Strategy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scenario: You're the QA lead for a Scrum team

Context:
- Team: 2 developers, 1 tester (you), 1 PO
- Sprint: 2 weeks
- Application: Mobile banking app
- Upcoming Feature: Bill payment integration

Task: Create testing strategy addressing:
1. How to allocate testing effort across the sprint
2. What types of testing to perform (use Quadrants)
3. When to test what
4. Collaboration with developers
5. Automation strategy
6. Risk management
7. Quality reporting

EXERCISE 6: Practice User Story Writing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task: Write 5 well-formed user stories with complete
acceptance criteria for a restaurant food delivery app

Features to cover:
1. Restaurant search and filtering
2. Order customization
3. Real-time order tracking
4. Rating and reviews
5. Reorder from history

For each story:
✓ Write story in proper format (As a/I want/So that)
✓ Include 5-7 acceptance criteria (GIVEN-WHEN-THEN)
✓ Cover positive and negative scenarios
✓ Include edge cases
✓ Make it testable
✓ Ensure it meets INVEST criteria

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Assessment Questions

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ASSESSMENT QUESTIONS (25 Total)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION A: Multiple Choice Questions (10 Questions)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Q1. Which Agile Manifesto value emphasizes people over processes?
a) Working software over comprehensive documentation
b) Individuals and interactions over processes and tools
c) Customer collaboration over contract negotiation
d) Responding to change over following a plan

Answer: b

Q2. In Scrum, who is responsible for maximizing product value?
a) Scrum Master
b) Development Team
c) Product Owner
d) Stakeholders

Answer: c

Q3. What is the recommended duration for a Sprint in Scrum?
a) 1 week
b) 2-4 weeks
c) 1-3 months
d) Varies widely

Answer: b

Q4. Which Agile Testing Quadrant contains unit tests?
a) Q1
b) Q2
c) Q3
d) Q4

Answer: a

Q5. What does BDD stand for?
a) Bug Driven Development
b) Behavior Driven Development
c) Business Domain Development
d) Build Deploy Deliver

Answer: b

Q6. In the Three Amigos meeting, who are the three roles?
a) Developer, Tester, Manager
b) PO, Scrum Master, Developer
c) PO, Developer, Tester
d) Customer, Developer, Tester

Answer: c

Q7. What is the purpose of Sprint Retrospective?
a) Demonstrate working software
b) Plan next sprint
c) Inspect and adapt the process
d) Review product backlog

Answer: c

Q8. Which testing quadrant focuses on exploratory testing?
a) Q1 - Technology facing, guide development
b) Q2 - Business facing, guide development
c) Q3 - Business facing, critique product
d) Q4 - Technology facing, critique product

Answer: c

Q9. What is the maximum recommended time for Daily Standup?
a) 10 minutes
b) 15 minutes
c) 30 minutes
d) 1 hour

Answer: b

Q10. In the Test Automation Pyramid, which layer should have the most tests?
a) UI Tests
b) Integration Tests
c) Unit Tests
d) Manual Tests

Answer: c

SECTION B: Scenario-Based Questions (10 Questions)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Q11. Scenario: You're in Sprint Planning. The PO presents a user story
but the acceptance criteria are vague. What should you do?

a) Accept the story and figure it out during the sprint
b) Ask clarifying questions and work with PO to refine criteria
c) Reject the story entirely
d) Accept it but mark it as risky

Answer: b
Explanation: In Agile, clarity is essential. The tester should
collaborate with the PO to define clear, testable acceptance
criteria before committing to the sprint. This is part of the
"whole team" approach.

Q12. Scenario: During Daily Standup, a developer mentions they finished
a feature. You haven't tested it yet. What do you say?

a) Nothing, wait for your turn
b) "I'll test it today and update the team tomorrow"
c) "It's not done until I test it"
d) Complain that developers aren't waiting for testing

Answer: b
Explanation: Provide a clear update on your testing plans without
creating conflict. Emphasize collaboration and commit to testing
promptly. "Done" means meeting DoD, which includes testing.

Q13. Scenario: You find a critical bug 2 days before sprint end.
Developer says there's no time to fix it. What do you do?

a) Accept it and move on
b) Log the bug for next sprint
c) Discuss with team and PO to decide (remove feature or extend sprint)
d) Fix it yourself

Answer: c
Explanation: In Scrum, the team decides together. Bring the issue
to the team and PO. Options: remove the feature from increment,
extend sprint (rare), or prioritize fix over other work.

Q14. Scenario: Your team wants to automate 100% of testing.
Based on Testing Pyramid, what do you advise?

a) Great idea, automate everything
b) Focus automation on unit and integration tests, keep some manual
c) Automation is waste of time
d) Only automate UI tests

Answer: b
Explanation: Test Automation Pyramid suggests 60% unit, 30%
integration, 10% UI. 100% automation is neither practical nor
advisable. Exploratory and usability testing require human judgment.

Q15. Scenario: You're asked to classify "Usability Testing".
Which Agile Testing Quadrant does it belong to?

a) Q1 - Unit tests
b) Q2 - Functional tests
c) Q3 - Exploratory/UAT
d) Q4 - Performance tests

Answer: c
Explanation: Usability testing is Business Facing (users' perspective)
and Critiques the Product (evaluates existing features). This places
it in Q3.

Q16. Scenario: PO changes acceptance criteria mid-sprint.
What's the Agile approach?

a) Refuse changes (sprint is sacred)
b) Discuss impact with team, adjust sprint backlog if needed
c) Accept all changes without discussion
d) Report PO to Scrum Master

Answer: b
Explanation: Agile embraces change, but changes have impact. The
team should discuss the change, assess impact on sprint goal,
and decide together how to proceed.

Q17. Scenario: Your Definition of Done includes "80% code coverage"
but a story only has 60%. Can you mark it Done?

a) Yes, 60% is close enough
b) No, DoD must be met
c) Ask PO to make an exception
d) Lower the DoD requirement

Answer: b
Explanation: Definition of Done is a commitment. If DoD is not met,
the story is not done. The team should either increase coverage or
discuss why DoD criterion should change (for all future stories).

Q18. Scenario: You're performing exploratory testing and find many
minor UI issues. Sprint ends tomorrow. What do you do?

a) Log all issues as critical bugs
b) Prioritize issues with team, fix critical ones, defer minor ones
c) Ignore minor issues
d) Extend sprint to fix everything

Answer: b
Explanation: Not all bugs are equal. Work with team and PO to
prioritize. Critical bugs might block release; minor UI issues
might be acceptable for now and fixed in next sprint.

Q19. Scenario: Developers complain that testing is slowing down
the sprint. How do you respond?

a) Apologize and test faster
b) Explain that quality takes time
c) Propose earlier testing involvement (shift-left) and pair testing
d) Skip some testing to speed up

Answer: c
Explanation: The solution is better collaboration, not faster
testing or compromised quality. Shift-left (test earlier), pair
with developers, and automate tests to speed feedback.

Q20. Scenario: Your team delivers increments every sprint but
never releases to production. Is this true Agile?

a) Yes, increments can stay unreleased
b) No, potentially shippable means should be releasable
c) Doesn't matter, focus is on development
d) Only matters if PO wants to release

Answer: b
Explanation: "Potentially shippable increment" means the increment
should meet DoD and be releasable to production, even if PO decides
not to release it. This ensures quality and reduces risk.

SECTION C: Agile Testing Quadrants Questions (5 Questions)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Q21. For each testing activity, identify the correct quadrant:
a) Writing unit tests before code: Q1 / Q2 / Q3 / Q4
b) Load testing a checkout flow: Q1 / Q2 / Q3 / Q4
c) Exploratory testing a new feature: Q1 / Q2 / Q3 / Q4
d) Automating BDD scenarios: Q1 / Q2 / Q3 / Q4
e) Security scanning with tools: Q1 / Q2 / Q3 / Q4

Answers:
a) Q1 (Technology facing, guide development)
b) Q4 (Technology facing, critique product)
c) Q3 (Business facing, critique product)
d) Q2 (Business facing, guide development)
e) Q4 (Technology facing, critique product)

Q22. A team spends 80% of testing effort on manual UI testing and
20% on unit tests. What's the problem and solution?

Answer:
Problem: Inverted Test Automation Pyramid (Ice Cream Cone anti-pattern)
- Too much manual UI testing (slow, brittle)
- Too few unit tests (late feedback)

Solution:
- Increase unit test coverage (target 60%)
- Automate integration tests (30%)
- Reserve UI tests for critical paths (10%)
- Implement shift-left testing

Q23. Give 2 examples each of tests in all four quadrants for a
"User Login" feature:

Answer:
Q1 (Technology facing, guide development):
1. Unit test for password hashing function
2. API test for authentication endpoint

Q2 (Business facing, guide development):
1. BDD scenario for successful login
2. Automated functional test for "Remember Me" feature

Q3 (Business facing, critique product):
1. Exploratory testing with different user types
2. Usability testing of login flow

Q4 (Technology facing, critique product):
1. Load test with 1000 concurrent logins
2. Security scan for SQL injection on login form

Q24. Which quadrant would you focus on FIRST when starting a new
feature, and why?

Answer: Q1 and Q2 (guide development)

Reason:
- Q1 and Q2 guide development (preventive)
- Q3 and Q4 critique product (detective)
- Testing should start before/during development (shift-left)
- Q1 (unit tests) and Q2 (acceptance tests) define expected behavior
- This prevents defects rather than finding them later
- Follows TDD/BDD practices
- Q3 and Q4 come later to critique the built product

Q25. A tester says "I only do manual testing, automation is for
developers." How would you respond using Agile Testing Quadrants?

Answer:
"In Agile, testing spans all four quadrants:
- Q1 (unit tests): Primarily developers, but testers provide guidance
- Q2 (functional tests): Testers should automate these (BDD/acceptance tests)
- Q3 (exploratory/UAT): Testers excel here (manual testing)
- Q4 (performance/security): Testers use specialized tools

Manual testing is valuable (Q3), but testers should also:
- Automate Q2 tests (functional/acceptance)
- Guide Q1 test strategy
- Use tools for Q4 testing

Agile testing is about whole team quality, not limiting roles."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Summary & Key Takeaways

### Day 15 Key Concepts:

1. **Agile Manifesto:**
   - 4 core values (Individuals, Working software, Customer collaboration, Responding to change)
   - 12 principles guiding Agile development
   - Comparison with Waterfall methodology

2. **Scrum Framework:**
   - 3 roles: Product Owner, Scrum Master, Development Team
   - 3 artifacts: Product Backlog, Sprint Backlog, Increment
   - 5 events: Sprint, Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective
   - Sprint duration: 2-4 weeks

3. **Testing in Agile:**
   - Whole team approach to quality
   - Tester as team member (not separate)
   - Three Amigos meetings
   - User stories with acceptance criteria (GIVEN-WHEN-THEN)
   - Definition of Done (Story, Sprint, Release levels)

4. **Agile Testing Quadrants:**
   - Q1: Technology facing, guide development (unit, API tests)
   - Q2: Business facing, guide development (functional, BDD)
   - Q3: Business facing, critique product (exploratory, UAT)
   - Q4: Technology facing, critique product (performance, security)

5. **Agile Testing Principles:**
   - Continuous feedback
   - Test early, test often
   - Shift-left testing
   - Test Automation Pyramid (60% unit, 30% integration, 10% UI)

### Best Practices:

✓ Participate in all Scrum ceremonies
✓ Collaborate with team continuously
✓ Write clear, testable acceptance criteria
✓ Test throughout the sprint, not at the end
✓ Automate appropriate tests (follow pyramid)
✓ Balance testing across all four quadrants
✓ Focus on preventing defects, not just finding them
✓ Embrace change and provide quick feedback
✓ Define and adhere to Definition of Done
✓ Continuous learning and improvement

### Tomorrow's Preview:

Day 16 will cover:
- Test Estimation Techniques
- Test Metrics & KPIs
- Test Reporting
- Dashboards and Stakeholder Communication

---

**Congratulations on completing Day 15\!**

**Study Time:** 5-6 hours

---

*End of Day 15 Study Guide*
