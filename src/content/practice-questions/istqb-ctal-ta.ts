import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free ISTQB CTAL-TA sample questions — ORIGINAL questions written by CertRamp
 * for the CTAL-TA v4.0 syllabus. Not taken from the paid practice exams, not
 * taken from the ISTQB sample exam, not recalled exam content, and not
 * presented as real exam questions.
 */
const SYLLABUS = {
  label: "ISTQB — CTAL-TA Syllabus v4.0",
  url: "https://www.istqb.org/wp-content/uploads/sdm-uploads/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf",
};

export const istqbCtalTaQuestions: PracticeQuestionSet = {
  slug: "istqb-ctal-ta",
  intro:
    "15 original CTAL-TA practice questions across all five chapters of the ISTQB Advanced Level Test Analyst syllabus v4.0, weighted roughly like the real exam — with the most questions on test analysis and test design. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "ISTQB CTAL-TA v4.0 Practice Questions with Answers (2026)",
    description:
      "15 free, original CTAL-TA v4.0 practice questions on domain testing, decision tables, metamorphic testing, risk-based testing and defect prevention, explained.",
  },
  questions: [
    /* ── Chapter 1: The tasks of the test analyst in the test process ─────── */
    {
      id: "ta-d1-high-low-level",
      domain: "d1",
      objective: "TA-1.3.1 Differentiate between high-level test cases and low-level test cases",
      difficulty: "foundation",
      question:
        "An agile team with experienced testers works on a product whose requirements change every sprint. Test cases must stay maintainable and leave room for the tester's judgement during execution. Which kind of test case suits this situation best?",
      options: [
        { id: "A", text: "Low-level test cases with concrete input values and exact expected results", rationale: "Low-level test cases suit inexperienced testers, regulatory needs or automation, but they are costly to maintain when requirements change often." },
        { id: "B", text: "High-level test cases without concrete values for inputs and expected results", rationale: "Correct. High-level (logical) test cases are easier to maintain under changing requirements and let experienced testers vary the data during execution." },
        { id: "C", text: "Test charters only, with no test cases at all", rationale: "Charters support session-based testing, but the question asks which kind of test case fits; dropping test cases entirely is not implied by the scenario." },
        { id: "D", text: "Low-level test cases generated from the code", rationale: "Deriving test cases from code is a white-box approach and does not address maintainability under changing requirements." },
      ],
      answer: "B",
      explanation:
        "High-level test cases describe what to test without fixing concrete data, so they need less rework when requirements change and use the tester's experience. Low-level test cases are preferred when reproducibility, auditability or automation matter more.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d1-test-oracle",
      domain: "d1",
      objective: "TA-1.3.4 Explain the test oracle problem and potential solutions",
      difficulty: "intermediate",
      question:
        "A logistics system computes optimised delivery routes. For realistic inputs, nobody can calculate the correct optimal route by hand, so testers cannot write exact expected results. Which approach addresses this test oracle problem?",
      options: [
        { id: "A", text: "Skip result checking and only verify that the system does not crash", rationale: "Crash-only checking avoids the oracle problem rather than solving it and misses incorrect results." },
        { id: "B", text: "Ask the developers which output the code is supposed to produce", rationale: "Deriving expected results from the implementation risks confirming the defects in it; the developers face the same oracle problem." },
        { id: "C", text: "Check relations between the results of related executions, for example that removing a delivery stop never makes the route longer", rationale: "Correct. Checking properties that must hold between related test runs (as in metamorphic testing) is a recognised way to test when exact expected results are unavailable." },
        { id: "D", text: "Increase the number of test cases until a defect appears", rationale: "More test cases do not help if you cannot decide whether an individual result is correct." },
      ],
      answer: "C",
      explanation:
        "The test oracle problem arises when expected results are hard or impossible to determine. Partial oracles — such as relations between source and follow-up test results, plausibility checks or comparison with another implementation — let you detect failures without knowing the exact result.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d1-keyword-driven",
      domain: "d1",
      objective: "TA-1.3.6 Use keyword-driven testing to develop test scripts",
      difficulty: "intermediate",
      question:
        "A keyword library contains: OpenApp, Login(user, password), VerifyMessage(text), VerifyPage(name) and Logout. Which keyword sequence tests that a registered user who enters a wrong password sees the error message \"Invalid credentials\" and stays on the login page?",
      options: [
        { id: "A", text: "OpenApp, Login(\"anna\", \"wrong\"), VerifyPage(\"Home\"), Logout", rationale: "Checks that the user reaches the home page, which is the opposite of the expected behaviour." },
        { id: "B", text: "OpenApp, Login(\"anna\", \"correct\"), VerifyMessage(\"Invalid credentials\")", rationale: "Uses a valid password, so the error message should not appear." },
        { id: "C", text: "Login(\"anna\", \"wrong\"), Logout, VerifyMessage(\"Invalid credentials\")", rationale: "Misses OpenApp, and Logout makes no sense for a user who never logged in." },
        { id: "D", text: "OpenApp, Login(\"anna\", \"wrong\"), VerifyMessage(\"Invalid credentials\"), VerifyPage(\"Login\")", rationale: "Correct. It starts the application, performs the invalid login and checks both the message and that the login page is still shown." },
      ],
      answer: "D",
      explanation:
        "In keyword-driven testing, each keyword represents an action or check with its own data. A complete test script needs the setup, the action under test and verifications for every expected result.",
      reference: SYLLABUS,
    },

    /* ── Chapter 2: The tasks of the test analyst in risk-based testing ───── */
    {
      id: "ta-d2-regression-scope",
      domain: "d2",
      objective: "TA-2.2.1 Analyze the impact of changes to determine the scope of regression testing",
      difficulty: "advanced",
      question:
        "A shared tax calculation component is changed to support a new tax rate. The component is called by the invoicing and payroll modules; the reporting module only reads stored invoice totals. Time allows only part of the regression suite to be run. Which regression scope is most appropriate?",
      options: [
        { id: "A", text: "Tests of the tax component plus the invoicing and payroll tests that exercise tax calculation, prioritised by risk", rationale: "Correct. Impact analysis follows the dependencies of the changed component, and risk-based prioritisation fits the limited time." },
        { id: "B", text: "Only the new tests for the new tax rate", rationale: "Confirms the new behaviour but leaves unchanged functionality that depends on the component without regression testing." },
        { id: "C", text: "The reporting tests only, because reports show the final figures", rationale: "Reporting reads stored values and is only indirectly affected; it misses the directly dependent modules." },
        { id: "D", text: "A random selection of tests from the whole suite", rationale: "Random selection ignores the impact analysis and may skip the most affected areas." },
      ],
      answer: "A",
      explanation:
        "Regression scope comes from analysing which parts of the system are affected by a change, directly or through dependencies. With limited time, the test analyst selects and prioritises the regression tests that cover the highest-risk impacted areas.",
      reference: SYLLABUS,
    },

    /* ── Chapter 3: Test analysis and test design ─────────────────────────── */
    {
      id: "ta-d3-domain-testing",
      domain: "d3",
      objective: "TA-3.1.1 Apply domain testing",
      difficulty: "intermediate",
      question:
        "An integer input x is valid when x ≤ 100. Which set of test values achieves simplified domain coverage for this border?",
      options: [
        { id: "A", text: "99 and 100", rationale: "Both values are inside the domain; there is no OFF point." },
        { id: "B", text: "100 and 101", rationale: "Correct. For a closed border (≤), the ON point lies on the border (100) and the OFF point just outside it (101)." },
        { id: "C", text: "100 only", rationale: "Simplified domain coverage needs one ON and one OFF point for a ≤ border." },
        { id: "D", text: "99 and 101", rationale: "99 is an IN point, not an ON point; the border value itself is not tested." },
      ],
      answer: "B",
      explanation:
        "Domain testing uses ON, OFF, IN and OUT points. For a border defined with ≤, the ON point is the border value and the OFF point the closest value outside the domain; simplified domain coverage requires one of each.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d3-pairwise",
      domain: "d3",
      objective: "TA-3.1.2 Apply combinatorial testing",
      difficulty: "intermediate",
      question:
        "A web shop must be tested with three configuration parameters, each with two values: browser (Chrome, Firefox), payment (card, invoice) and language (EN, DE). What is the minimum number of test cases that achieves pairwise coverage?",
      options: [
        { id: "A", text: "2", rationale: "Two test cases cannot cover all four value pairs of any two parameters." },
        { id: "B", text: "3", rationale: "Each pair of parameters has 2 × 2 = 4 value pairs, so at least 4 test cases are needed." },
        { id: "C", text: "4", rationale: "Correct. Four test cases can cover all four value pairs of every two parameters, for example C-card-EN, C-invoice-DE, F-card-DE, F-invoice-EN." },
        { id: "D", text: "8", rationale: "Eight is the number of all combinations (2 × 2 × 2), which pairwise testing is designed to reduce." },
      ],
      answer: "C",
      explanation:
        "Pairwise coverage requires every value of each parameter to be combined with every value of every other parameter at least once. The lower bound is the product of the two largest parameter value counts — here 2 × 2 = 4 — compared with 8 for all combinations.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d3-n-switch",
      domain: "d3",
      objective: "TA-3.2.2 Apply state transition testing",
      difficulty: "intermediate",
      question:
        "A risk assessment requires that every sequence of two consecutive valid transitions in a state model is exercised by the tests. Which coverage criterion fulfils this requirement?",
      options: [
        { id: "A", text: "1-switch coverage", rationale: "Correct. N-switch coverage covers sequences of N+1 consecutive transitions, so 1-switch coverage covers all sequences of two transitions." },
        { id: "B", text: "0-switch coverage", rationale: "0-switch coverage (valid transitions coverage) covers each single transition, not sequences of two." },
        { id: "C", text: "All states coverage", rationale: "Visiting every state does not guarantee that every transition, let alone every pair of transitions, is exercised." },
        { id: "D", text: "Round-trip coverage", rationale: "Round-trip coverage targets loops that start and end in the same state, not all pairs of consecutive transitions." },
      ],
      answer: "A",
      explanation:
        "0-switch coverage exercises each valid transition once; 1-switch coverage exercises every sequence of two consecutive valid transitions. Higher N-switch levels grow quickly in size and are usually reserved for high-risk components.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d3-decision-table",
      domain: "d3",
      objective: "TA-3.3.1 Apply decision table testing",
      difficulty: "advanced",
      question:
        "A full decision table with three Boolean conditions has eight columns. Two of the columns describe combinations that can never occur. The current tests exercise three of the remaining columns. What is the decision table coverage?",
      options: [
        { id: "A", text: "37.5%", rationale: "Divides by all eight columns; infeasible columns are excluded from the coverage calculation." },
        { id: "B", text: "60%", rationale: "This is 3 / 5. Only two of the eight columns are infeasible, so six feasible columns remain." },
        { id: "C", text: "75%", rationale: "Divides three by four, which would be the count after removing four columns, not two." },
        { id: "D", text: "50%", rationale: "Correct. Coverage is the number of exercised feasible columns divided by all feasible columns: 3 / 6 = 50%." },
      ],
      answer: "D",
      explanation:
        "Decision table coverage counts only feasible columns, because infeasible combinations cannot be tested. Identify and remove infeasible columns first, then measure coverage against what remains.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d3-metamorphic",
      domain: "d3",
      objective: "TA-3.3.2 Apply metamorphic testing",
      difficulty: "intermediate",
      question:
        "Testers of a product search have no way to know the correct number of results for any query against the live catalogue. Which statement is a valid metamorphic relation they can use?",
      options: [
        { id: "A", text: "The search for \"shoes\" must return exactly 1,250 results", rationale: "This is an exact expected result, which is precisely what the testers cannot determine." },
        { id: "B", text: "Every search must complete within two seconds", rationale: "This is a performance requirement, not a relation between source and follow-up test results." },
        { id: "C", text: "Adding a further filter to a search must never return more results than the original search", rationale: "Correct. It relates the result of a follow-up test (filtered search) to the result of the source test without needing the exact count." },
        { id: "D", text: "The search must return at least one result for every query", rationale: "This is not true in general and does not relate two executions to each other." },
      ],
      answer: "C",
      explanation:
        "A metamorphic relation describes how a change to the input of a source test case should affect the result of the follow-up test case. It lets testers find failures where no test oracle for individual results exists.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d3-crud",
      domain: "d3",
      objective: "TA-3.2.1 Explain CRUD testing",
      difficulty: "foundation",
      question:
        "While checking a CRUD matrix, a test analyst notices that no function in the system ever deletes a \"Customer\" entity, although data protection rules require it. Which part of CRUD testing has revealed this problem?",
      options: [
        { id: "A", text: "Completeness testing", rationale: "Correct. Completeness testing is a static check that each of the create, read, update and delete operations occurs for every entity." },
        { id: "B", text: "Consistency testing", rationale: "Consistency testing is dynamic and checks that functions interact correctly on entities, for example reading an entity that was never created." },
        { id: "C", text: "Random testing", rationale: "Random testing selects inputs at random and is not based on a CRUD matrix." },
        { id: "D", text: "Scenario-based testing", rationale: "Scenario-based testing uses sequences of interactions; it is not the check for missing operations in a CRUD matrix." },
      ],
      answer: "A",
      explanation:
        "CRUD testing verifies the life cycle of data entities. Its static part checks the matrix for missing operations; its dynamic part executes tests to check that the operations work together consistently.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d3-test-charter",
      domain: "d3",
      objective: "TA-3.4.1 Prepare test charters for session-based testing",
      difficulty: "foundation",
      question:
        "Which mission statement is written in the recommended format for a test charter in session-based testing?",
      options: [
        { id: "A", text: "Test the checkout and log all defects found", rationale: "It names an area but no resources and no information to be discovered." },
        { id: "B", text: "Execute test cases TC-101 to TC-140 on the checkout page", rationale: "This describes scripted test execution, not an exploratory mission." },
        { id: "C", text: "Checkout must accept all valid card numbers", rationale: "This is a requirement, not a mission for an exploratory session." },
        { id: "D", text: "Explore the checkout with expired and blocked cards to discover how payment errors are handled", rationale: "Correct. It follows the format Explore [target] with [resources] to discover [information]." },
      ],
      answer: "D",
      explanation:
        "A test charter's mission names the target, the resources and the information the session should discover. Further charter content, such as duration, scope, risks and historical defects, is optional and depends on the context.",
      reference: SYLLABUS,
    },

    /* ── Chapter 4: Testing quality characteristics ───────────────────────── */
    {
      id: "ta-d4-adaptability",
      domain: "d4",
      objective: "4.3 Flexibility Testing (TA-4.3.1)",
      difficulty: "foundation",
      question:
        "A business application must run without changes on three different cloud service platforms. The test analyst identifies the target environments and designs tests for combinations of them. Which quality (sub-)characteristic is being tested?",
      options: [
        { id: "A", text: "Interoperability", rationale: "Interoperability concerns exchanging information with other systems and using it, not running in different environments." },
        { id: "B", text: "Adaptability", rationale: "Correct. Adaptability, part of flexibility, is about how well a product can be adapted to different environments such as platforms." },
        { id: "C", text: "Functional correctness", rationale: "Functional correctness is about whether functions produce correct results, independent of the platform." },
        { id: "D", text: "Learnability", rationale: "Learnability is part of usability and concerns how easily users learn the product." },
      ],
      answer: "B",
      explanation:
        "Adaptability testing checks that the product works in its intended target environments, such as different platforms, operating systems or browsers. The test analyst identifies those environments and covers relevant combinations.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d4-usability",
      domain: "d4",
      objective: "4.2 Usability Testing (TA-4.2.1)",
      difficulty: "intermediate",
      question:
        "A team wants to evaluate how easily first-time customers can complete an online loan application. Which approach is most appropriate?",
      options: [
        { id: "A", text: "Testers who know the application well complete the form as quickly as possible", rationale: "Experienced testers do not represent first-time customers and will not show their difficulties." },
        { id: "B", text: "A developer guides customers through each step and answers their questions", rationale: "Guiding participants hides the very problems the test is supposed to find." },
        { id: "C", text: "Representative users perform realistic tasks based on personas while being observed without help", rationale: "Correct. Usability testing needs representative users, realistic scenarios (for example from personas or operational profiles) and observation rather than guidance." },
        { id: "D", text: "An automated script measures the response time of each page", rationale: "Response time is a performance characteristic, not usability." },
      ],
      answer: "C",
      explanation:
        "Usability testing tells you how real users experience a product. It relies on representative participants, realistic tasks and unobtrusive observation, so that difficulties appear as they would in real use.",
      reference: SYLLABUS,
    },

    /* ── Chapter 5: Software defect prevention ────────────────────────────── */
    {
      id: "ta-d5-ddp",
      domain: "d5",
      objective: "5.3.1 Analyzing Test Results to Improve Defect Detection (TA-5.3.1)",
      difficulty: "advanced",
      question:
        "During system testing, 40 defects were found. Later, 10 further defects that system testing should have detected were found in acceptance testing and production. What is the defect detection percentage (DDP) of system testing, and what does it tell you?",
      options: [
        { id: "A", text: "80% — system testing contained most, but not all, of the defects it was responsible for", rationale: "Correct. DDP = defects found in the phase / (found + escaped) = 40 / (40 + 10) = 80%, a measure of phase containment." },
        { id: "B", text: "25% — the escaped defects are a quarter of the defects found", rationale: "10 / 40 is the ratio of escaped to found defects, not DDP." },
        { id: "C", text: "75% — system testing found three in four defects", rationale: "This is (40 − 10) / 40. DDP divides the defects found in the phase by the sum of found and escaped defects." },
        { id: "D", text: "100% — all 40 defects found in system testing were fixed", rationale: "Fixing defects does not change how many escaped; DDP measures detection, not correction." },
      ],
      answer: "A",
      explanation:
        "DDP per phase shows how well a test level catches the defects it should find. Analysing it, together with where defects cluster, helps the test analyst decide where to strengthen detection.",
      reference: SYLLABUS,
    },
    {
      id: "ta-d5-role-based-review",
      domain: "d5",
      objective: "5.2.2 Applying Review Techniques (TA-5.2.2)",
      difficulty: "intermediate",
      question:
        "Reviewers of a banking app's requirements each take on a specific persona — a first-time customer, a branch employee and a customer with impaired vision — and evaluate the requirements from that viewpoint. Which review technique is being applied?",
      options: [
        { id: "A", text: "Ad hoc review", rationale: "Ad hoc reviews have no structure or assigned viewpoints, which often leads to duplicate findings." },
        { id: "B", text: "Checklist-based review", rationale: "Checklist-based reviews work through predefined questions, not assigned personas." },
        { id: "C", text: "Scenario-based review", rationale: "Scenario-based reviews use dry runs of expected use; they are not defined by reviewers taking on user roles." },
        { id: "D", text: "Role-based review", rationale: "Correct. In role-based reviews, reviewers evaluate the work product from the perspective of individual stakeholder roles, often described as personas." },
      ],
      answer: "D",
      explanation:
        "Review techniques help find defects in the test basis early, supporting phase containment. Role-based reviews add value by making reviewers look at the work product from distinct user and stakeholder viewpoints.",
      reference: SYLLABUS,
    },
  ],
};
