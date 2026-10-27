import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CPRE Foundation Level sample questions — ORIGINAL questions written by
 * CertRamp for IREB syllabus 3.3.0. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const SYLLABUS = {
  label: "IREB — CPRE Foundation Level syllabus 3.3.0",
  url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf",
};

export const irebCpreQuestions: PracticeQuestionSet = {
  slug: "ireb-cpre-foundation-level",
  intro:
    "15 original CPRE Foundation Level practice questions across all seven chapters of IREB syllabus 3.3.0, with more questions for the larger chapters 3, 4 and 6. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CPRE Foundation Level Practice Questions with Answers (3.3.0)",
    description:
      "15 free, original IREB CPRE Foundation Level practice questions on syllabus 3.3.0 — principles, templates, elicitation, validation, traceability — with explanations.",
  },
  questions: [
    /* ── Chapter 1: Introduction and overview ─────────────────────────────── */
    {
      id: "cpre-c1-requirement-types",
      domain: "d1",
      objective: "EO 1.1.2 Understand the different kinds of requirements",
      difficulty: "foundation",
      question:
        "\"The system shall display the search results within two seconds for 95% of all queries.\" Which kind of requirement is this?",
      options: [
        { id: "A", text: "Functional requirement", rationale: "A functional requirement describes a result or behaviour the system provides, such as performing the search itself — not how fast it happens." },
        { id: "B", text: "Quality requirement", rationale: "Correct. The statement describes a quality — here performance — that the system shall have." },
        { id: "C", text: "Constraint", rationale: "A constraint restricts the solution space beyond what is needed for functional and quality requirements, for example a mandated technology or law." },
        { id: "D", text: "Glossary entry", rationale: "A glossary defines terms; this is a requirement." },
      ],
      answer: "B",
      explanation:
        "IREB distinguishes functional requirements, quality requirements and constraints. Response times, availability, security and usability are typical quality requirements.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c1-tasks",
      domain: "d1",
      objective: "EO 1.4.1 Know the major tasks of RE",
      difficulty: "foundation",
      question: "Which list names the major tasks of requirements engineering according to the CPRE syllabus?",
      options: [
        { id: "A", text: "Elicitation, documentation, validation, management", rationale: "Correct. These are the four major RE tasks; the RE process must be tailored to perform them in a given situation." },
        { id: "B", text: "Design, implementation, testing, deployment", rationale: "These are development activities, not the RE tasks." },
        { id: "C", text: "Planning, budgeting, staffing, controlling", rationale: "These are project management activities." },
        { id: "D", text: "Coding, reviewing, merging, releasing", rationale: "These are software engineering activities." },
      ],
      answer: "A",
      explanation:
        "Elicitation, documentation, validation and management are the major RE tasks. The syllabus stresses that there is no single RE process: it has to be tailored to the context.",
      reference: SYLLABUS,
    },

    /* ── Chapter 2: Fundamental principles ────────────────────────────────── */
    {
      id: "cpre-c2-principles",
      domain: "d2",
      objective: "EO 2.1.1 Enumerate the principles of RE",
      difficulty: "foundation",
      question: "Which of the following is NOT one of the nine principles of requirements engineering in the CPRE syllabus?",
      options: [
        { id: "A", text: "Value-orientation", rationale: "This is principle 1: requirements are a means to an end, not an end in themselves." },
        { id: "B", text: "Shared understanding", rationale: "This is principle 3." },
        { id: "C", text: "Completeness before implementation", rationale: "Correct. This is not a principle. Requirements evolve (principle 7), and complete up-front specification is not required." },
        { id: "D", text: "Systematic and disciplined work", rationale: "This is principle 9." },
      ],
      answer: "C",
      explanation:
        "The nine principles are value-orientation, stakeholders, shared understanding, context, problem – requirement – solution, validation, evolution, innovation, and systematic and disciplined work.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c2-context-boundary",
      domain: "d2",
      objective: "EO 2.2.2 Explain the principles and why they are important",
      difficulty: "intermediate",
      question:
        "In a project for an online shop, the payment provider's system will not be changed but provides an interface the shop uses. How is the payment provider's system classified?",
      options: [
        { id: "A", text: "Inside the system boundary", rationale: "Inside the system boundary are the parts that can be changed within the project; the payment system cannot." },
        { id: "B", text: "Part of the system context, between the system boundary and the context boundary", rationale: "Correct. It is relevant to the system and interacts with it, but it is outside the system and cannot be changed in the project." },
        { id: "C", text: "Outside the context boundary (irrelevant environment)", rationale: "It is relevant because the shop interacts with it, so it belongs to the context." },
        { id: "D", text: "A stakeholder", rationale: "A stakeholder is a person or organisation with an interest in the system. An external system is a context element, not a stakeholder." },
      ],
      answer: "B",
      explanation:
        "The system boundary separates the system from its context; the context boundary separates the relevant context from the irrelevant environment. External systems the system interacts with lie between the two.",
      reference: SYLLABUS,
    },

    /* ── Chapter 3: Work products and documentation ───────────────────────── */
    {
      id: "cpre-c3-user-story",
      domain: "d3",
      objective: "EO 3.3.2 Specify an individual requirement and a user story using a phrase template",
      difficulty: "foundation",
      question: "Which statement follows the user story template described by Cohn?",
      options: [
        { id: "A", text: "The system shall export reports as PDF.", rationale: "This is a classic 'shall' requirement, not a user story." },
        { id: "B", text: "As a sales manager, I want to export reports as PDF so that I can send them to customers.", rationale: "Correct. Role, goal and benefit: As a <role>, I want <requirement> so that <benefit>." },
        { id: "C", text: "When the user clicks Export, the system shall create a PDF.", rationale: "This follows an EARS-like event-driven pattern, not the user story template." },
        { id: "D", text: "Export: PDF, priority high, owner: sales.", rationale: "These are attributes, not a user story." },
      ],
      answer: "B",
      explanation:
        "Phrase templates in the syllabus include EARS and the template by Rupp for individual requirements, and Cohn's template for user stories. Form templates are used for use cases.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c3-quality-criteria",
      domain: "d3",
      objective: "EO 3.8.1 Know quality criteria for single requirements",
      difficulty: "intermediate",
      question: "\"The app shall be fast and user-friendly.\" Which quality criterion for single requirements is most clearly violated?",
      options: [
        { id: "A", text: "Verifiable (and unambiguous)", rationale: "Correct. 'Fast' and 'user-friendly' cannot be checked objectively and can be understood differently by different readers." },
        { id: "B", text: "Traceable", rationale: "Traceability is a quality criterion for work products as a whole, not the main problem of this single sentence." },
        { id: "C", text: "Non-redundant", rationale: "Redundancy concerns repeated content across a work product; nothing is repeated here." },
        { id: "D", text: "Conformant", rationale: "Conformance to a structure or template is a work product criterion; the main issue here is vague wording." },
      ],
      answer: "A",
      explanation:
        "Quality criteria for single requirements: adequate, necessary, unambiguous, complete, understandable, verifiable. Criteria such as consistent, non-redundant, complete, modifiable, traceable and conformant apply to work products.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c3-model-choice",
      domain: "d3",
      objective: "EO 3.4.4 Select an appropriate model type",
      difficulty: "intermediate",
      question:
        "You want to specify the steps of a business process, including decisions and steps that run in parallel. Which model type is most suitable?",
      options: [
        { id: "A", text: "UML class diagram", rationale: "Class diagrams specify data and the objects in a domain with their relationships, not process steps." },
        { id: "B", text: "UML activity diagram", rationale: "Correct. Activity diagrams model functions and business processes with actions, decisions and parallel flows." },
        { id: "C", text: "Context diagram", rationale: "A context diagram shows the system in its environment and the interfaces, not the internal process flow." },
        { id: "D", text: "Glossary", rationale: "A glossary defines terms; it is not a model of a process." },
      ],
      answer: "B",
      explanation:
        "Match the model to the aspect: structure and data → class diagram; function and flow → activity or process model; state and behaviour → state machine; context → context diagram.",
      reference: SYLLABUS,
    },

    /* ── Chapter 4: Requirements elaboration ──────────────────────────────── */
    {
      id: "cpre-c4-kano",
      domain: "d4",
      objective: "EO 4.2.1 Understand how the Kano model can help to elicit the right requirements",
      difficulty: "intermediate",
      question:
        "Customers of a banking app take it for granted that they can see their account balance. They would never mention it, but would be very dissatisfied without it. In the Kano model, this is a…",
      options: [
        { id: "A", text: "Delighter", rationale: "Delighters are unexpected features that create enthusiasm; their absence does not cause dissatisfaction." },
        { id: "B", text: "Satisfier", rationale: "Satisfiers are explicitly requested; more of them increases satisfaction roughly proportionally." },
        { id: "C", text: "Dissatisfier", rationale: "Correct. Dissatisfiers are implicitly expected, so stakeholders rarely state them, but missing them causes strong dissatisfaction." },
        { id: "D", text: "Constraint", rationale: "This is a category of requirements, not a Kano category." },
      ],
      answer: "C",
      explanation:
        "The Kano model helps you look for requirements stakeholders will not tell you about: dissatisfiers through observation and existing systems, delighters through creativity techniques.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c4-elicitation",
      domain: "d4",
      objective: "EO 4.2.3 Choose a proper elicitation technique for a given situation",
      difficulty: "intermediate",
      question:
        "Warehouse staff have performed their picking process for years. They find it hard to explain the details because many steps have become routine. Which elicitation approach is most suitable?",
      options: [
        { id: "A", text: "A questionnaire sent by email", rationale: "Questionnaires capture what people can articulate; routine, implicit knowledge is often missed." },
        { id: "B", text: "Observation of the staff at work", rationale: "Correct. Observation techniques reveal implicit, routine knowledge that people cannot easily put into words." },
        { id: "C", text: "Brainstorming new features", rationale: "Brainstorming generates new ideas; it does not reveal how the current process actually works." },
        { id: "D", text: "Reading the marketing brochure", rationale: "Brochures rarely describe the real operational process." },
      ],
      answer: "B",
      explanation:
        "The syllabus groups gathering techniques into questioning, collaboration, observation and artifact-based techniques. Observation is the choice when knowledge is tacit or routine.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c4-validation",
      domain: "d4",
      objective: "EO 4.4.2 Remember the four important aspects for requirements validation",
      difficulty: "advanced",
      question: "Which of the following is one of the four important aspects of requirements validation in the CPRE syllabus?",
      options: [
        { id: "A", text: "Separating the identification of defects from their correction", rationale: "Correct. Finding defects and fixing them are separate activities, so validation stays focused and thorough." },
        { id: "B", text: "Validating only once, at the end of the project", rationale: "The syllabus calls for repeated validation, not a single check at the end." },
        { id: "C", text: "Letting the author validate their own requirements alone", rationale: "Validation should involve the right stakeholders and different views, not only the author." },
        { id: "D", text: "Validating only from the developer's point of view", rationale: "Validation should take different views into account." },
      ],
      answer: "A",
      explanation:
        "The four aspects are: involving the right stakeholders, separating the identification and correction of defects, validating from different views, and repeated validation.",
      reference: SYLLABUS,
    },

    /* ── Chapter 5: Process and working structure ─────────────────────────── */
    {
      id: "cpre-c5-facets",
      domain: "d5",
      objective: "EO 5.3.1 Know typical RE process configurations",
      difficulty: "advanced",
      question:
        "A company develops a product for an anonymous mass market, works iteratively and explores the requirements step by step. Which RE process configuration fits best?",
      options: [
        { id: "A", text: "Contractual RE process", rationale: "Contractual configurations suit customer-specific development where a specification forms the basis of a contract." },
        { id: "B", text: "Product-oriented RE process", rationale: "Correct. A market-oriented, iterative and explorative setting points to a product-oriented configuration." },
        { id: "C", text: "Participatory RE process", rationale: "Participatory configurations suit customer-specific development with close, continuous collaboration with known stakeholders." },
        { id: "D", text: "No RE process is needed", rationale: "Every development needs RE; only its configuration differs." },
      ],
      answer: "B",
      explanation:
        "The facets time (linear/iterative), purpose (prescriptive/explorative) and target (customer-specific/market-oriented) lead to typical configurations: participatory, contractual and product-oriented.",
      reference: SYLLABUS,
    },

    /* ── Chapter 6: Management practices ──────────────────────────────────── */
    {
      id: "cpre-c6-traceability",
      domain: "d6",
      objective: "EO 6.6.1 Name reasons for requirements traceability",
      difficulty: "foundation",
      question:
        "A law changes, and the team must quickly find out which requirements, design elements and test cases are affected. Which practice makes this possible?",
      options: [
        { id: "A", text: "Prioritisation", rationale: "Prioritisation ranks requirements; it does not show what is affected by a change." },
        { id: "B", text: "Traceability", rationale: "Correct. Traceability links requirements to their origin and to later work products, which enables impact analysis." },
        { id: "C", text: "Versioning only", rationale: "Versions show how a requirement changed, but not which other work products depend on it." },
        { id: "D", text: "A glossary", rationale: "A glossary defines terms, not dependencies between work products." },
      ],
      answer: "B",
      explanation:
        "Backward traceability to the origin (here the law) and forward traceability to design and tests let you assess the impact of a change. Explicit traces can be documented as links, matrices, tables or graphs.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c6-baseline",
      domain: "d6",
      objective: "EO 6.4.1 Know the use of requirements configurations and baselines",
      difficulty: "intermediate",
      question:
        "Before a release, the team freezes a stable, approved set of requirements in specific versions as the basis for planning and contracts. What is this called?",
      options: [
        { id: "A", text: "A baseline", rationale: "Correct. A baseline is a stable, released configuration of requirements that serves as a reference, for example for release planning or effort estimation." },
        { id: "B", text: "A view", rationale: "Views show selected or aggregated parts of the requirements; they do not freeze an approved state." },
        { id: "C", text: "An attribute", rationale: "Attributes describe properties of individual requirements, such as status or priority." },
        { id: "D", text: "A persona", rationale: "Personas describe fictional stakeholder types." },
      ],
      answer: "A",
      explanation:
        "A configuration is a consistent set of requirements in specific versions; a baseline is a configuration that has been released as a stable reference.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c6-change-agile",
      domain: "d6",
      objective: "EO 6.7.1 Know how to handle changes in linear and agile approaches",
      difficulty: "intermediate",
      question: "In an agile project, who typically decides how a requested change to the requirements is handled?",
      options: [
        { id: "A", text: "A Change Control Board that meets monthly", rationale: "A formal Change Control Board is typical of linear, plan-driven approaches." },
        { id: "B", text: "The product owner, by updating and reprioritising the backlog", rationale: "Correct. In agile approaches, changes are handled through the backlog, which the product owner maintains and prioritises." },
        { id: "C", text: "Each developer individually", rationale: "Uncoordinated changes by individual developers are not a change management approach." },
        { id: "D", text: "Nobody — requirements cannot change in agile projects", rationale: "Agile approaches explicitly embrace change." },
      ],
      answer: "B",
      explanation:
        "The syllabus contrasts change handling: Change Control Boards with defined procedures in linear approaches, and backlog management by the product owner in agile approaches.",
      reference: SYLLABUS,
    },

    /* ── Chapter 7: Tool support ──────────────────────────────────────────── */
    {
      id: "cpre-c7-introduction",
      domain: "d7",
      objective: "EO 7.2.1 Explain what to consider when introducing RE tools",
      difficulty: "foundation",
      question: "Which approach is most advisable when introducing a new requirements management tool in an organisation?",
      options: [
        { id: "A", text: "Buy the tool with the most features and roll it out to everyone at once", rationale: "Feature count does not guarantee fit, and a big-bang rollout without preparation is risky." },
        { id: "B", text: "Clarify the RE process and needs first, consider all costs and try the tool in a pilot before broad rollout", rationale: "Correct. A tool should support a defined process; costs beyond licences (training, administration) and a pilot reduce the risk of a bad fit." },
        { id: "C", text: "Let each team choose its own tool without coordination", rationale: "This undermines shared work products, traceability and reporting." },
        { id: "D", text: "Introduce the tool first and define the process later", rationale: "A tool cannot fix an undefined process; the process should come first." },
      ],
      answer: "B",
      explanation:
        "When introducing RE tools, think about the process the tool should support, the full costs, training, a step-by-step introduction and evaluating the tool in practice.",
      reference: SYLLABUS,
    },
  ],
};
