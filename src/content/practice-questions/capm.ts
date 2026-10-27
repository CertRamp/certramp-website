import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CAPM sample questions — ORIGINAL questions written by CertRamp against the
 * PMI CAPM Examination Content Outline (2023 exam update). Not taken from the paid
 * practice exams, not recalled exam content, not presented as real exam questions,
 * and not reproduced from the PMBOK Guide. CAPM and PMBOK are registered marks of
 * the Project Management Institute, used here only to name the exam.
 */
const ECO = {
  label: "PMI — CAPM Examination Content Outline (2023 exam update)",
  url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/capm-exam-content-outline-english.pdf",
};

export const capmQuestions: PracticeQuestionSet = {
  slug: "capm",
  intro:
    "15 original CAPM practice questions across the four domains of PMI's CAPM Examination Content Outline (2023 exam update), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CAPM Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original CAPM practice questions on project fundamentals, predictive and agile methods and business analysis — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: Project Management Fundamentals and Core Concepts ──────── */
    {
      id: "capm-d1-risk-vs-issue",
      domain: "d1",
      objective: "Demonstrate an understanding of the various project life cycles and processes",
      difficulty: "foundation",
      question:
        "A key supplier has just informed the project manager that a component delivery, due today, will arrive two weeks late. How should the project manager classify this situation?",
      options: [
        { id: "A", text: "A risk, because it may affect the schedule", rationale: "A risk is an uncertain event that has not happened yet. The delay has already been confirmed." },
        { id: "B", text: "An issue, because it is a current condition that must be dealt with", rationale: "Correct. The late delivery is already happening, so it is an issue to be logged, owned and resolved." },
        { id: "C", text: "An assumption, because the delivery date was planned", rationale: "An assumption is something believed to be true for planning purposes. The delivery date may have been an assumption, but the confirmed delay is not." },
        { id: "D", text: "A constraint, because it limits the project's options", rationale: "A constraint is a known limiting factor such as a fixed budget or deadline, not an unexpected event during the project." },
      ],
      answer: "B",
      explanation:
        "Risks are uncertain and lie in the future; issues are certain and current. When a risk occurs it becomes an issue, and the response moves from the risk register to the issue log.",
      reference: ECO,
    },
    {
      id: "capm-d1-project-vs-operations",
      domain: "d1",
      objective: "Demonstrate an understanding of the various project life cycles and processes",
      difficulty: "foundation",
      question:
        "Which of the following is best described as a project rather than ongoing operations?",
      options: [
        { id: "A", text: "Processing the monthly payroll for all employees", rationale: "Payroll is repetitive and continues indefinitely, which makes it an operational activity." },
        { id: "B", text: "Answering customer calls at a service desk", rationale: "A service desk is a continuing business function with no planned end." },
        { id: "C", text: "Running the nightly backup of the company's servers", rationale: "Nightly backups are a routine, repeating task, which is typical of operations." },
        { id: "D", text: "Moving the company's head office to a new building by the end of the year", rationale: "Correct. The move is a temporary endeavour with a defined end and a unique result." },
      ],
      answer: "D",
      explanation:
        "A project is temporary and creates a unique product, service or result. Operations are ongoing and repetitive and sustain the business. A project's output is often handed over to operations at closure.",
      reference: ECO,
    },
    {
      id: "capm-d1-stakeholder-register",
      domain: "d1",
      objective: "Demonstrate an understanding of project management planning",
      difficulty: "intermediate",
      question:
        "Early in a project, the project manager wants a single document that lists everyone affected by the project, together with their interests, influence and expectations. Which document should the project manager create?",
      options: [
        { id: "A", text: "Stakeholder register", rationale: "Correct. The stakeholder register records identified stakeholders and information about them, such as their role, interests, influence and expectations." },
        { id: "B", text: "Risk register", rationale: "The risk register records identified risks, their owners and planned responses, not people and their interests." },
        { id: "C", text: "Responsibility assignment matrix", rationale: "A RACI or responsibility assignment matrix links work to team members' responsibilities; it does not capture stakeholder interests or influence." },
        { id: "D", text: "Issue log", rationale: "The issue log tracks current problems and their resolution, not stakeholders." },
      ],
      answer: "A",
      explanation:
        "The stakeholder register is the main output of identifying stakeholders and is updated throughout the project. It supports communication planning and stakeholder engagement.",
      reference: ECO,
    },
    {
      id: "capm-d1-sponsor-role",
      domain: "d1",
      objective: "Demonstrate an understanding of project roles and responsibilities",
      difficulty: "intermediate",
      question:
        "The project team needs an extra budget allocation that is beyond the project manager's authority to approve. Who is normally responsible for providing the funding and approving it?",
      options: [
        { id: "A", text: "The project manager", rationale: "The question states that the change is beyond the project manager's authority." },
        { id: "B", text: "The most senior team member", rationale: "Team members carry out the work; they do not provide or approve funding." },
        { id: "C", text: "The project sponsor", rationale: "Correct. The sponsor provides resources and support for the project, champions it and makes decisions that are beyond the project manager's authority." },
        { id: "D", text: "The product owner", rationale: "The product owner maximises product value and manages the backlog; funding decisions sit with the sponsor." },
      ],
      answer: "C",
      explanation:
        "The sponsor provides funding, removes obstacles at organisational level and approves decisions outside the project manager's authority. The project manager leads the team and manages the work within agreed limits, and escalates when those limits are exceeded.",
      reference: ECO,
    },
    {
      id: "capm-d1-brainstorming",
      domain: "d1",
      objective: "Demonstrate an understanding of common problem-solving tools and techniques",
      difficulty: "foundation",
      question:
        "A team wants to generate as many ideas as possible for reducing defects, without judging any idea until the list is complete. Which technique best fits this goal?",
      options: [
        { id: "A", text: "Daily standup", rationale: "A standup is a short coordination meeting about progress and impediments, not an idea-generation session." },
        { id: "B", text: "Brainstorming", rationale: "Correct. Brainstorming collects many ideas quickly and deliberately postpones evaluation until idea generation is finished." },
        { id: "C", text: "Earned value analysis", rationale: "Earned value analysis measures cost and schedule performance; it does not generate ideas." },
        { id: "D", text: "Sprint review", rationale: "A sprint review inspects the increment with stakeholders; it is not designed for open idea generation." },
      ],
      answer: "B",
      explanation:
        "Brainstorming separates generating ideas from evaluating them, which encourages participation and creativity. The ideas can then be grouped and prioritised, for example with multi-voting or an affinity diagram.",
      reference: ECO,
    },

    /* ── Domain 2: Predictive, Plan-Based Methodologies ───────────────────── */
    {
      id: "capm-d2-when-predictive",
      domain: "d2",
      objective: "Explain when it is appropriate to use a predictive, plan-based approach",
      difficulty: "foundation",
      question:
        "In which situation is a predictive, plan-based approach most appropriate?",
      options: [
        { id: "A", text: "A start-up building a new mobile app whose features will be shaped by user feedback", rationale: "Changing requirements driven by feedback favour an adaptive approach." },
        { id: "B", text: "A research team exploring a technology that has never been used in the organisation", rationale: "High uncertainty about the solution favours iterative, adaptive delivery." },
        { id: "C", text: "Building a bridge to a fixed, regulator-approved design with a contractual completion date", rationale: "Correct. Requirements are clear and stable, changes are costly, and the work must follow an approved plan, which suits a predictive approach." },
        { id: "D", text: "A marketing team testing several campaign ideas to see which one performs best", rationale: "Experimentation with fast feedback suits an adaptive approach." },
      ],
      answer: "C",
      explanation:
        "Predictive approaches work best when scope is well understood early, requirements are stable and late changes are expensive. High uncertainty and evolving requirements point towards adaptive or hybrid approaches.",
      reference: ECO,
    },
    {
      id: "capm-d2-critical-path",
      domain: "d2",
      objective: "Demonstrate an understanding of a project management plan schedule",
      difficulty: "intermediate",
      question:
        "Activity A (3 days) starts the project. Activities B (4 days) and C (6 days) can both start when A finishes. Activity D (2 days) can start only when both B and C are finished. What is the critical path and its duration?",
      options: [
        { id: "A", text: "A–C–D, 11 days", rationale: "Correct. A–C–D takes 3 + 6 + 2 = 11 days, which is longer than A–B–D, so it is the critical path." },
        { id: "B", text: "A–B–D, 9 days", rationale: "A–B–D takes 9 days, but it is shorter than A–C–D, so it has 2 days of float and is not critical." },
        { id: "C", text: "A–B–C–D, 15 days", rationale: "B and C run in parallel, so their durations are not added together." },
        { id: "D", text: "A–C–D, 9 days", rationale: "The path is right but the duration is wrong: 3 + 6 + 2 = 11 days." },
      ],
      answer: "A",
      explanation:
        "The critical path is the longest path through the network and sets the shortest possible project duration. Activities on it have zero total float, so any delay to them delays the project.",
      reference: ECO,
    },
    {
      id: "capm-d2-variances",
      domain: "d2",
      objective: "Determine how to document project controls of predictive, plan-based projects",
      difficulty: "advanced",
      question:
        "At a status date, a project has a planned value (PV) of 50,000, an earned value (EV) of 40,000 and an actual cost (AC) of 45,000. Which statement is correct?",
      options: [
        { id: "A", text: "The project is ahead of schedule and under budget", rationale: "Both variances are negative, so the project is neither ahead nor under budget." },
        { id: "B", text: "The project is behind schedule but under budget", rationale: "CV = EV − AC = −5,000, so the project is over budget, not under it." },
        { id: "C", text: "The project is on schedule but over budget", rationale: "SV = EV − PV = −10,000, so the project is behind schedule." },
        { id: "D", text: "The project is behind schedule and over budget", rationale: "Correct. SV = 40,000 − 50,000 = −10,000 (behind schedule) and CV = 40,000 − 45,000 = −5,000 (over budget)." },
      ],
      answer: "D",
      explanation:
        "Schedule variance is EV − PV and cost variance is EV − AC. Negative values mean behind schedule and over budget; positive values mean ahead of schedule and under budget.",
      reference: ECO,
    },

    /* ── Domain 3: Agile Frameworks/Methodologies ─────────────────────────── */
    {
      id: "capm-d3-when-adaptive",
      domain: "d3",
      objective: "Explain when it is appropriate to use an adaptive approach",
      difficulty: "foundation",
      question:
        "A customer cannot describe all the features of a new online service in advance and wants to see working results regularly to steer the product. Which approach fits best?",
      options: [
        { id: "A", text: "A predictive approach with a fully baselined scope before design begins", rationale: "A fixed scope baseline conflicts with requirements that are not yet known and will change." },
        { id: "B", text: "An adaptive approach that delivers in short iterations", rationale: "Correct. Short iterations deliver working increments, collect feedback and let the customer reprioritise as understanding grows." },
        { id: "C", text: "A predictive approach with one delivery at the end", rationale: "A single final delivery gives the customer no chance to steer the product along the way." },
        { id: "D", text: "No formal approach until all requirements are known", rationale: "Waiting for complete requirements would delay value and may never happen when the customer is still discovering what they need." },
      ],
      answer: "B",
      explanation:
        "Adaptive approaches suit high uncertainty and evolving requirements. Frequent delivery and feedback reduce the risk of building the wrong product.",
      reference: ECO,
    },
    {
      id: "capm-d3-kanban-wip",
      domain: "d3",
      objective: "Explain the components of an adaptive plan",
      difficulty: "intermediate",
      question:
        "A team visualises its work on a board and wants to improve flow by limiting how many items can be in each column at the same time. Which framework is this practice most closely associated with?",
      options: [
        { id: "A", text: "Scrum", rationale: "Scrum organises work in fixed-length sprints with defined roles and events; explicit limits per workflow column are not one of its core rules." },
        { id: "B", text: "Extreme Programming (XP)", rationale: "XP focuses on engineering practices such as pair programming, test-driven development and continuous integration." },
        { id: "C", text: "Kanban", rationale: "Correct. Kanban visualises the workflow and uses work-in-progress (WIP) limits to manage flow and expose bottlenecks." },
        { id: "D", text: "Scaled Agile Framework (SAFe)", rationale: "SAFe coordinates many agile teams at enterprise level; WIP limits per board column are a Kanban practice." },
      ],
      answer: "C",
      explanation:
        "Kanban is a flow-based method: work is pulled when capacity is available, and WIP limits stop the team from starting more than it can finish. It has no prescribed iterations or roles.",
      reference: ECO,
    },
    {
      id: "capm-d3-burndown",
      domain: "d3",
      objective: "Determine how to document project controls for an adaptive project",
      difficulty: "intermediate",
      question:
        "Halfway through an iteration, a stakeholder asks how much work remains compared with the time left. Which artefact shows this most directly?",
      options: [
        { id: "A", text: "Iteration burndown chart", rationale: "Correct. A burndown chart plots the remaining work against time in the iteration, so the trend shows whether the team is on track." },
        { id: "B", text: "Gantt chart", rationale: "A Gantt chart shows scheduled activities and dates and is mainly used in predictive projects." },
        { id: "C", text: "Product roadmap", rationale: "A roadmap shows the planned direction and releases over a longer horizon, not progress within one iteration." },
        { id: "D", text: "Requirements traceability matrix", rationale: "A traceability matrix links requirements to their sources and deliverables; it does not show progress over time." },
      ],
      answer: "A",
      explanation:
        "Burndown charts show work remaining; burnup charts show work completed against total scope. Both are common progress artefacts in adaptive projects.",
      reference: ECO,
    },

    /* ── Domain 4: Business Analysis Frameworks ───────────────────────────── */
    {
      id: "capm-d4-product-owner",
      domain: "d4",
      objective: "Demonstrate an understanding of business analysis (BA) roles and responsibilities",
      difficulty: "foundation",
      question:
        "On an agile team, who is primarily accountable for ordering the product backlog to maximise the value delivered?",
      options: [
        { id: "A", text: "The project sponsor", rationale: "The sponsor funds and supports the work but does not usually order the backlog day to day." },
        { id: "B", text: "The process owner", rationale: "A process owner is responsible for a business process, not for prioritising a product backlog." },
        { id: "C", text: "The development team as a whole", rationale: "The team estimates and delivers backlog items and contributes to refinement, but ordering the backlog is the product owner's accountability." },
        { id: "D", text: "The product owner", rationale: "Correct. The product owner represents the customer and stakeholders and orders the backlog by value." },
      ],
      answer: "D",
      explanation:
        "The product owner decides what is built next by ordering the backlog, informed by stakeholders and the team. Business analysts often support this role by refining requirements and writing user stories.",
      reference: ECO,
    },
    {
      id: "capm-d4-communication-channel",
      domain: "d4",
      objective: "Determine how to conduct stakeholder communication",
      difficulty: "intermediate",
      question:
        "A business analyst must explain a significant change in requirements to senior stakeholders who need to discuss the options and agree on a decision. Which communication method is most appropriate?",
      options: [
        { id: "A", text: "Publishing an updated document on the project intranet", rationale: "Pull communication leaves it to stakeholders to find and read the information, and it does not support discussion or a decision." },
        { id: "B", text: "An interactive presentation or meeting with the stakeholders", rationale: "Correct. Interactive communication allows questions, discussion and agreement, which a significant decision needs." },
        { id: "C", text: "A one-line status update in the weekly email report", rationale: "A brief push message is not enough to explain a significant change or agree on options." },
        { id: "D", text: "Updating the requirements traceability matrix", rationale: "The matrix should be updated, but it records the change; it does not communicate it or obtain agreement." },
      ],
      answer: "B",
      explanation:
        "Choose the communication method by purpose and audience. Push and pull methods suit information sharing, while decisions and complex or sensitive topics need interactive communication.",
      reference: ECO,
    },
    {
      id: "capm-d4-traceability",
      domain: "d4",
      objective: "Determine how to gather requirements",
      difficulty: "intermediate",
      question:
        "A business analyst needs to show, for every requirement, which business objective it supports and which deliverable and test case cover it. Which tool should be used?",
      options: [
        { id: "A", text: "Requirements traceability matrix", rationale: "Correct. A traceability matrix links each requirement to its origin and to the deliverables and tests that satisfy it." },
        { id: "B", text: "Work breakdown structure", rationale: "A WBS decomposes the total scope into deliverables and work packages, but it does not trace individual requirements to objectives and tests." },
        { id: "C", text: "Stakeholder register", rationale: "The stakeholder register describes stakeholders, not requirements." },
        { id: "D", text: "Use case diagram", rationale: "A use case shows how actors interact with a system; it does not trace requirements to objectives and tests." },
      ],
      answer: "A",
      explanation:
        "The requirements traceability matrix helps ensure that every requirement adds business value and is delivered and tested. In adaptive projects, the product backlog with its acceptance criteria often serves a similar purpose.",
      reference: ECO,
    },
    {
      id: "capm-d4-acceptance-criteria",
      domain: "d4",
      objective: "Validate requirements through product delivery",
      difficulty: "advanced",
      question:
        "A user story reads: \"As a customer, I want to reset my password so that I can regain access to my account.\" What should be added so that the team and product owner can agree objectively when the story is done?",
      options: [
        { id: "A", text: "A story point estimate", rationale: "An estimate expresses relative size or effort; it does not define when the story meets the user's needs." },
        { id: "B", text: "A link to the product roadmap", rationale: "The roadmap shows where the feature fits in the release plan, not how to verify it." },
        { id: "C", text: "Acceptance criteria, such as \"A reset link is emailed within one minute and expires after 24 hours\"", rationale: "Correct. Acceptance criteria are testable conditions that the story must meet to be accepted." },
        { id: "D", text: "The name of the developer assigned to the story", rationale: "Who builds the story does not tell anyone whether it is complete and correct." },
      ],
      answer: "C",
      explanation:
        "Acceptance criteria turn a user story into something that can be verified, and they form the basis for acceptance tests. Together with the team's definition of done, they show when a story is ready for delivery.",
      reference: ECO,
    },
  ],
};
