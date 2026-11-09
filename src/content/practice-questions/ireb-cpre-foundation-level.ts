import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CPRE Foundation Level sample questions — ORIGINAL questions written by
 * CertRamp for IREB syllabus 3.3.0. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const SYLLABUS = {
  label: "IREB: CPRE Foundation Level syllabus 3.3.0",
  url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf",
};

export const irebCpreQuestions: PracticeQuestionSet = {
  slug: "ireb-cpre-foundation-level",
  intro:
    "30 original CPRE Foundation Level practice questions across all seven chapters of IREB syllabus 3.3.0, with more questions for the larger chapters 3, 4 and 6. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-11-09",
  seo: {
    title: "CPRE Foundation Level Practice Questions with Answers (3.3.0)",
    description:
      "30 free, original IREB CPRE Foundation Level practice questions on syllabus 3.3.0 (principles, templates, elicitation, validation, traceability) with explanations.",
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
        { id: "A", text: "Quality requirement", rationale: "Correct. The statement describes a quality, here performance, that the system shall have." },
        { id: "B", text: "Functional requirement", rationale: "A functional requirement describes a result or behaviour the system provides, such as performing the search itself, not how fast it happens." },
        { id: "C", text: "Constraint", rationale: "A constraint restricts the solution space beyond what is needed for functional and quality requirements, for example a mandated technology or law." },
        { id: "D", text: "Glossary entry", rationale: "A glossary defines terms; this is a requirement." },
      ],
      answer: "A",
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
        { id: "A", text: "Design, implementation, testing, deployment", rationale: "These are development activities, not the RE tasks." },
        { id: "B", text: "Planning, budgeting, staffing, controlling", rationale: "These are project management activities." },
        { id: "C", text: "Coding, reviewing, merging, releasing", rationale: "These are software engineering activities." },
        { id: "D", text: "Elicitation, documentation, validation, management", rationale: "Correct. These are the four major RE tasks; the RE process must be tailored to perform them in a given situation." },
      ],
      answer: "D",
      explanation:
        "Elicitation, documentation, validation and management are the major RE tasks. The syllabus stresses that there is no single RE process: it has to be tailored to the context.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c1-symptoms",
      domain: "d1",
      objective: "EO 1.2.2 Enumerate symptoms of inadequate RE",
      difficulty: "foundation",
      question:
        "In a project retrospective, the team lists several observations. Which one is a typical symptom of inadequate requirements engineering, rather than a cause, according to the CPRE syllabus?",
      options: [
        { id: "A", text: "The team started building right away to meet the deadline.", rationale: "Rushing into building is named as a cause of inadequate RE, not as its symptom." },
        { id: "B", text: "Nobody on the team had received any RE training.", rationale: "Inadequate RE education and skills are a cause of poor RE, not a symptom." },
        { id: "C", text: "After implementation, requirements turned out to be missing, unclear or wrong.", rationale: "Correct. Missing, unclear and incorrect requirements are the typical symptoms of inadequate RE." },
        { id: "D", text: "Everyone assumed the requirements were self-evident.", rationale: "Assuming that requirements are self-evident is a cause of inadequate RE, not a symptom." },
      ],
      answer: "C",
      explanation:
        "The syllabus names missing, unclear and incorrect requirements as typical symptoms of inadequate RE. Typical causes are rushing into building, communication problems, assuming the requirements are self-evident, and inadequate RE education and skills.",
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
        "The nine principles are value-orientation, stakeholders, shared understanding, context, problem, requirement, solution, validation, evolution, innovation, and systematic and disciplined work.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c2-context-boundary",
      domain: "d2",
      objective: "EO 4.1.1 Determine the boundaries of the system to focus on the relevant requirements",
      difficulty: "intermediate",
      question:
        "In a project for an online shop, the payment provider's system will not be changed but provides an interface the shop uses. How is the payment provider's system classified?",
      options: [
        { id: "A", text: "Inside the system boundary", rationale: "Inside the system boundary are the parts that can be changed within the project; the payment system cannot." },
        { id: "B", text: "Part of the system context, between the system boundary and the context boundary", rationale: "Correct. It is relevant to the system and interacts with it, but it is outside the system and cannot be changed in the project." },
        { id: "C", text: "Outside the context boundary (irrelevant environment)", rationale: "It is relevant because the shop interacts with it, so it belongs to the context." },
        { id: "D", text: "A stakeholder", rationale: "A stakeholder is a person or organisation who influences the requirements or is impacted by the system. The question asks about the provider's system, which is a context element, not a stakeholder." },
      ],
      answer: "B",
      explanation:
        "The system boundary separates the system from its context; the context boundary separates the RE-relevant part of the environment from the rest of the world. External systems the system interacts with lie between the two.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c2-problem-solution",
      domain: "d2",
      objective: "EO 2.2.2 Explain the principles and the reasons why they are important",
      difficulty: "intermediate",
      question:
        "In the first meeting, the head of sales says: \"We need a mobile app for our field staff.\" Following the principle that problem, requirement and solution are intertwined, what should the Requirements Engineer do first?",
      options: [
        { id: "A", text: "Explore which problem the app is meant to solve, for example what field staff cannot do today", rationale: "Correct. Stakeholders often express their wishes as solutions. Uncovering the underlying problem and the actual requirements also leaves room for better solutions." },
        { id: "B", text: "Document \"mobile app\" as a constraint and start specifying the screens", rationale: "This takes the proposed solution for granted without understanding the problem behind it." },
        { id: "C", text: "Reject the request, because solutions must never be discussed in RE", rationale: "Solutions are not forbidden in RE. The principle says that problems, requirements and solutions cannot be fully separated." },
        { id: "D", text: "Ask the developers which app framework they prefer", rationale: "Choosing a technology is a design decision and does not help to understand the problem." },
      ],
      answer: "A",
      explanation:
        "Principle 5 states that problem, requirement and solution form an inevitably intertwined triple. When a stakeholder names a solution, the Requirements Engineer works back to the problem and the requirements behind it before committing to that solution.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c2-innovation",
      domain: "d2",
      objective: "EO 2.2.2 Explain the principles and the reasons why they are important",
      difficulty: "intermediate",
      question:
        "A team lead says: \"Our job in RE is to write down exactly what the stakeholders ask for, nothing more.\" Which principle of RE does this attitude neglect most?",
      options: [
        { id: "A", text: "Validation", rationale: "Validation checks whether requirements meet the stakeholders' needs. The statement does not argue against validating." },
        { id: "B", text: "Systematic and disciplined work", rationale: "This principle concerns using suitable processes and practices. The statement is about the scope of what RE delivers, not about method." },
        { id: "C", text: "Context", rationale: "The context principle says requirements cannot be understood in isolation. The statement does not deny the context." },
        { id: "D", text: "Innovation", rationale: "Correct. The innovation principle says that more of the same is not enough: good RE also looks for new ideas that can delight stakeholders, not only their explicit wishes." },
      ],
      answer: "D",
      explanation:
        "Principle 8 (innovation) reminds you that giving stakeholders only what they ask for rarely creates outstanding systems. RE should also aim for innovative ideas, which is why design and idea-generating techniques belong to the elicitation toolbox.",
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
        { id: "B", text: "When the user clicks Export, the system shall create a PDF.", rationale: "This follows an EARS-like event-driven pattern, not the user story template." },
        { id: "C", text: "As a sales manager, I want to export reports as PDF so that I can send them to customers.", rationale: "Correct. Role, goal and benefit: As a <role>, I want <requirement> so that <benefit>." },
        { id: "D", text: "Export: PDF, priority high, owner: sales.", rationale: "These are attributes, not a user story." },
      ],
      answer: "C",
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
        "Quality criteria for single requirements: adequate, necessary, unambiguous, complete (self-contained), understandable, verifiable. Criteria for work products: consistent, non-redundant, complete (no known relevant requirements missing), modifiable, traceable, conformant.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c3-model-choice",
      domain: "d3",
      objective: "EO 3.4.4 Understand how to select an appropriate model type for specifying requirements in a given situation",
      difficulty: "intermediate",
      question:
        "You want to specify the steps of a business process, including decisions and steps that run in parallel. Which model type is most suitable?",
      options: [
        { id: "A", text: "UML class diagram", rationale: "Class diagrams specify data and the objects in a domain with their relationships, not process steps." },
        { id: "B", text: "Context diagram", rationale: "A context diagram shows the system in its environment and the interfaces, not the internal process flow." },
        { id: "C", text: "Glossary", rationale: "A glossary defines terms; it is not a model of a process." },
        { id: "D", text: "UML activity diagram", rationale: "Correct. Activity diagrams model functions and business processes with actions, decisions and parallel flows." },
      ],
      answer: "D",
      explanation:
        "Match the model to the aspect: structure and data → class diagram; function and flow → activity or process model; state and behaviour → state machine; context → context diagram.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c3-nl-rules",
      domain: "d3",
      objective: "EO 3.2.2 Explain the rules for writing good natural-language-based requirements",
      difficulty: "intermediate",
      question: "\"The order is checked and released.\" Which rule for writing natural-language requirements does this statement mainly break?",
      options: [
        { id: "A", text: "Use universal quantifiers such as \"all\" or \"never\" with care", rationale: "The statement contains no universal quantifier." },
        { id: "B", text: "Use passive voice with care", rationale: "Correct. The passive voice hides who performs the action: it is unclear whether the system, a clerk or a supervisor checks and releases the order." },
        { id: "C", text: "Write short sentences", rationale: "The sentence is already short." },
        { id: "D", text: "Use nominalisations with care", rationale: "The sentence uses verbs, not nominalisations such as \"the checking\". Its main problem is the missing actor." },
      ],
      answer: "B",
      explanation:
        "The syllabus asks for short, well-structured sentences and defined terms, avoiding vague wording and incomplete descriptions, and using passive voice, universal quantifiers and nominalisations with care. Rewriting in active voice, for example \"The system shall check…\", makes the actor explicit.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c3-glossary",
      domain: "d3",
      objective: "EO 3.5.1 Explain the purpose of glossaries and how to create one",
      difficulty: "intermediate",
      question:
        "In a project, \"customer\" means a contract partner for the sales team but any registered app user for the IT team. How should this be handled?",
      options: [
        { id: "A", text: "Leave the term out of the glossary, because everyone knows the word", rationale: "Everyday words with context-specific meanings are exactly what a glossary needs to clarify." },
        { id: "B", text: "Let each team keep its own glossary with its own definition", rationale: "Separate glossaries keep the misunderstanding alive. A glossary should be managed centrally for the whole project." },
        { id: "C", text: "Agree on definitions with the stakeholders, resolve the homonym, for example with separate terms, and make the glossary binding", rationale: "Correct. The glossary creates shared understanding when terms are agreed with stakeholders, homonyms are avoided or marked, and its use is mandatory." },
        { id: "D", text: "Define the term only in comments in the source code", rationale: "Code comments are not accessible to all stakeholders and are not a glossary." },
      ],
      answer: "C",
      explanation:
        "A glossary defines the terms of the domain so that all stakeholders understand them the same way. Manage it centrally with a clear owner, agree on terms with the stakeholders, make it accessible and mandatory, mark synonyms and avoid or mark homonyms.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c3-prototype",
      domain: "d3",
      objective: "EO 3.7.1 Know different kinds of prototypes and what they are used for",
      difficulty: "foundation",
      question:
        "Early in a project, you want to discuss the rough screen layout of a new app with users in a workshop, using quick sketches that are thrown away afterwards. Which kind of prototype fits best?",
      options: [
        { id: "A", text: "Wireframe (low-fidelity exploratory prototype)", rationale: "Correct. Wireframes are quick, low-fidelity sketches used to explore and discuss ideas, and they are discarded after use." },
        { id: "B", text: "Native prototype", rationale: "Native prototypes are high-fidelity prototypes built with the target technology, far too costly for discussing rough layout ideas." },
        { id: "C", text: "Evolutionary prototype", rationale: "An evolutionary prototype is developed further into the final system; it is not thrown away." },
        { id: "D", text: "Pilot system", rationale: "A pilot system is an evolutionary prototype that forms the core of the real system, not a quick sketch." },
      ],
      answer: "A",
      explanation:
        "Exploratory prototypes are discarded after use and come as wireframes (low fidelity), mock-ups (medium fidelity) or native prototypes (high fidelity). Evolutionary prototypes, or pilot systems, grow into the final system.",
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
        { id: "B", text: "Dissatisfier", rationale: "Correct. Dissatisfiers (subconscious requirements, basic factors) are taken for granted, so stakeholders rarely mention them, but missing them causes strong dissatisfaction." },
        { id: "C", text: "Satisfier", rationale: "Satisfiers (conscious requirements, performance factors) are explicitly demanded; the more of them, the higher the satisfaction." },
        { id: "D", text: "Constraint", rationale: "This is a category of requirements, not a Kano category." },
      ],
      answer: "B",
      explanation:
        "The Kano model helps you find requirements stakeholders will not mention: gathering techniques help elicit satisfiers and dissatisfiers, while design and idea-generating techniques often lead to delighters.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c4-elicitation",
      domain: "d4",
      objective: "EO 4.2.3 Understand how to choose a proper elicitation technique for a given situation",
      difficulty: "intermediate",
      question:
        "Warehouse staff have performed their picking process for years. They find it hard to explain the details because many steps have become routine. Which elicitation approach is most suitable?",
      options: [
        { id: "A", text: "A questionnaire sent by email", rationale: "Questionnaires capture what people can articulate; routine, implicit knowledge is often missed." },
        { id: "B", text: "Brainstorming new features", rationale: "Brainstorming generates new ideas; it does not reveal how the current process actually works." },
        { id: "C", text: "Observation of the staff at work", rationale: "Correct. Observation techniques reveal implicit, routine knowledge that people cannot easily put into words." },
        { id: "D", text: "Reading the marketing brochure", rationale: "Brochures rarely describe the real operational process." },
      ],
      answer: "C",
      explanation:
        "The syllabus groups gathering techniques into questioning, collaboration, observation and artifact-based techniques. Observation is a good fit when stakeholders cannot easily put routine, implicit knowledge into words.",
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
    {
      id: "cpre-c4-sources",
      domain: "d4",
      objective: "EO 4.1.2 Remember the relevant sources for the system to be created",
      difficulty: "foundation",
      question:
        "A team is replacing a legacy claims system. Which approach makes use of all three types of requirements sources named in the CPRE syllabus?",
      options: [
        { id: "A", text: "Interviewing as many claims handlers as possible", rationale: "This uses only one type of source: stakeholders." },
        { id: "B", text: "Reading the relevant regulations and process descriptions", rationale: "This uses only documents as a source." },
        { id: "C", text: "Analysing the screens and functions of the legacy system", rationale: "This uses only systems as a source." },
        { id: "D", text: "Combining stakeholders, documents such as regulations, and existing systems such as the legacy system", rationale: "Correct. Stakeholders, documents and systems are the three types of requirements sources." },
      ],
      answer: "D",
      explanation:
        "The syllabus names three types of requirements sources: stakeholders, documents and systems. Laws, standards and process documents as well as existing or legacy systems often reveal requirements that stakeholders forget to mention.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c4-design-techniques",
      domain: "d4",
      objective: "EO 4.2.2 Understand the difference between gathering techniques, and design and idea-generating techniques",
      difficulty: "intermediate",
      question:
        "A product team wants new feature ideas that could delight the users of a fitness app. Which of these is a design and idea-generating technique rather than a gathering technique?",
      options: [
        { id: "A", text: "A structured interview with existing users", rationale: "Interviews are questioning techniques and belong to the gathering techniques." },
        { id: "B", text: "The analogy technique, transferring ideas from another domain such as gaming", rationale: "Correct. Analogies create new ideas by transferring concepts from another domain, which is typical of design and idea-generating techniques." },
        { id: "C", text: "Field observation of users at the gym", rationale: "Field observation is an observation technique and belongs to the gathering techniques." },
        { id: "D", text: "Analysis of existing app store reviews", rationale: "Analysing existing documents is an artifact-based technique and belongs to the gathering techniques." },
      ],
      answer: "B",
      explanation:
        "Gathering techniques (questioning, collaboration, observation and artifact-based techniques) collect what stakeholders know or do. Design and idea-generating techniques such as brainstorming, analogies, prototyping, scenarios and storyboards create new ideas and often lead to delighters.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c4-conflict-type",
      domain: "d4",
      objective: "EO 4.3.1 Remember the different types of conflict",
      difficulty: "intermediate",
      question:
        "Two department heads disagree about the required capacity of a new booking system. One cites 2,000 bookings per day from last year's report, the other 5,000 from a market forecast. Which type of conflict is this primarily?",
      options: [
        { id: "A", text: "Value conflict", rationale: "Value conflicts arise from different beliefs or principles, such as privacy versus transparency. Here the disagreement is about figures." },
        { id: "B", text: "Relationship conflict", rationale: "Relationship conflicts stem from personal tensions or negative experiences between people, which are not described here." },
        { id: "C", text: "Data conflict", rationale: "Correct. The parties rely on different information and sources, which is typical of a data conflict." },
        { id: "D", text: "Structural conflict", rationale: "Structural conflicts are caused by structures such as hierarchies, responsibilities or the distribution of resources and power." },
      ],
      answer: "C",
      explanation:
        "The syllabus distinguishes subject matter, data, interest, value, relationship and structural conflicts. Knowing the type helps you choose a resolution: data conflicts can often be resolved by clarifying the facts and agreeing on a reliable source.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c4-conflict-resolution",
      domain: "d4",
      objective: "EO 4.3.3 Understand how to apply appropriate conflict resolution techniques",
      difficulty: "advanced",
      question:
        "Accountants want the invoice screen to show all details, while field staff want a minimal view on their phones. Both needs are legitimate, and the budget allows building both. Which conflict resolution technique fits best?",
      options: [
        { id: "A", text: "Definition of variants", rationale: "Correct. Both needs can coexist, for example as role-specific views, and the effort is acceptable." },
        { id: "B", text: "Overruling", rationale: "Letting a higher authority decide is unnecessary here and would leave one group dissatisfied." },
        { id: "C", text: "Voting", rationale: "A vote leaves the minority dissatisfied, although both needs could be served." },
        { id: "D", text: "Compromise", rationale: "A middle-ground screen would satisfy neither group fully, although both can be satisfied completely." },
      ],
      answer: "A",
      explanation:
        "The main conflict resolution techniques are agreement, compromise, voting, overruling and definition of variants, supported by consider-all-facts, plus-minus-interesting and the decision matrix. Variants suit situations where different needs can coexist at acceptable cost.",
      reference: SYLLABUS,
    },

    /* ── Chapter 5: Process and working structure ─────────────────────────── */
    {
      id: "cpre-c5-facets",
      domain: "d5",
      objective: "EO 5.3.3 For simple settings, select and apply an appropriate RE process configuration",
      difficulty: "advanced",
      question:
        "A company develops a product for an anonymous mass market, works iteratively and explores the requirements step by step. Which RE process configuration fits best?",
      options: [
        { id: "A", text: "Contractual RE process", rationale: "Contractual configurations suit customer-specific development where a specification forms the basis of a contract." },
        { id: "B", text: "Participatory RE process", rationale: "Participatory configurations suit customer-specific development with close, continuous collaboration with known stakeholders." },
        { id: "C", text: "No RE process is needed", rationale: "Every development needs RE; only its configuration differs." },
        { id: "D", text: "Product-oriented RE process", rationale: "Correct. A market-oriented, iterative and explorative setting points to a product-oriented configuration." },
      ],
      answer: "D",
      explanation:
        "The facets time (linear/iterative), purpose (prescriptive/explorative) and target (customer-specific/market-oriented) lead to typical configurations: participatory, contractual and product-oriented.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c5-factors",
      domain: "d5",
      objective: "EO 5.1.2 Understand how and why these factors are influencing",
      difficulty: "intermediate",
      question:
        "A team specifies the software for an infusion pump, a safety-critical medical device that must be approved by an authority. How do these influencing factors most likely affect the RE process?",
      options: [
        { id: "A", text: "RE can be skipped because the authority defines all requirements", rationale: "Regulations add constraints, but they do not define all requirements of the system." },
        { id: "B", text: "Requirements should only be discussed verbally to stay flexible", rationale: "High criticality and approval demand documented, verifiable requirements, not only conversations." },
        { id: "C", text: "Criticality has no influence; only time and budget matter", rationale: "System criticality and constraints are among the important factors that influence an RE process." },
        { id: "D", text: "Requirements need to be more explicit and thoroughly documented and validated", rationale: "Correct. High criticality and regulatory constraints call for a more prescriptive process with carefully documented and validated requirements." },
      ],
      answer: "D",
      explanation:
        "Factors that influence an RE process include the overall development process, the development context, stakeholder capability and availability, shared understanding, complexity and criticality, constraints, time and budget, volatility and experience. Safety-critical, regulated systems push the process towards explicit, prescriptive documentation.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c5-config-steps",
      domain: "d5",
      objective: "EO 5.3.2 Understand the steps for configuring an RE process",
      difficulty: "foundation",
      question: "You are configuring the RE process for a new project. According to the CPRE syllabus, what is the first step?",
      options: [
        { id: "A", text: "Select the appropriate practices", rationale: "Selecting practices is the last step, once the configuration and the work products are clear." },
        { id: "B", text: "Analyse the influencing factors", rationale: "Correct. The influencing factors come first, because they determine how the facets are assessed." },
        { id: "C", text: "Determine the work products", rationale: "The work products are determined after the process has been configured." },
        { id: "D", text: "Assess the facet criteria", rationale: "Assessing the facets is the second step and is based on the influencing factors." },
      ],
      answer: "B",
      explanation:
        "The steps are: analyse the influencing factors, assess the facet criteria (time, purpose, target), configure the process, determine the work products and select appropriate practices.",
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
        { id: "A", text: "A view", rationale: "Views show selected or aggregated parts of the requirements; they do not freeze an approved state." },
        { id: "B", text: "A baseline", rationale: "Correct. A baseline is a stable, change-controlled configuration of work products, used for example for release planning or other delivery milestones." },
        { id: "C", text: "An attribute", rationale: "Attributes describe properties of individual requirements, such as status or priority." },
        { id: "D", text: "A persona", rationale: "Personas describe fictional stakeholder types." },
      ],
      answer: "B",
      explanation:
        "A requirements configuration is a consistent set of work products that contain requirements; a baseline is a stable, change-controlled configuration that serves as a reference, for example for release planning.",
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
        { id: "B", text: "Each developer individually", rationale: "Uncoordinated changes by individual developers are not a change management approach." },
        { id: "C", text: "Nobody: requirements cannot change in agile projects", rationale: "Agile approaches explicitly embrace change." },
        { id: "D", text: "The product owner, by updating and reprioritising the backlog", rationale: "Correct. In agile approaches, changes are handled through the backlog, which the product owner maintains and prioritises." },
      ],
      answer: "D",
      explanation:
        "The syllabus contrasts change handling: Change Control Boards with defined procedures in linear approaches, and backlog management by the product owner in agile approaches.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c6-prioritization",
      domain: "d6",
      objective: "EO 6.8.2 Name steps to prioritize requirements",
      difficulty: "intermediate",
      question:
        "A product owner wants to rank 60 backlog items for the next release and immediately asks the team to vote on them. Which step of prioritisation has been skipped?",
      options: [
        { id: "A", text: "Archiving all low-priority requirements", rationale: "Archiving is not a step of prioritisation." },
        { id: "B", text: "Creating a baseline of all 60 items", rationale: "A baseline is a stable configuration for planning, not a step of prioritisation." },
        { id: "C", text: "Defining the assessment criteria, such as business value, urgency, effort or dependencies", rationale: "Correct. Without agreed criteria, the ranking reflects personal preferences instead of the project's goals." },
        { id: "D", text: "Writing test cases for all items", rationale: "Writing test cases is not part of prioritisation." },
      ],
      answer: "C",
      explanation:
        "The steps are: define the goals and constraints, define the assessment criteria, identify the stakeholders and the requirements to be prioritised, select a technique and perform the prioritisation. Prioritisation techniques fall into ad-hoc and analytical categories.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c6-views",
      domain: "d6",
      objective: "EO 6.5.3 Explain the purpose of views and name the different views of requirements",
      difficulty: "intermediate",
      question:
        "A tester wants to see only the requirements that are assigned to release 2.1 and have the status \"approved\". All attributes may remain visible. Which kind of view is this?",
      options: [
        { id: "A", text: "Selective view", rationale: "Correct. A selective view shows only the requirements that meet given criteria, here release and status." },
        { id: "B", text: "Projective view", rationale: "A projective view shows only certain attributes or information of the requirements; here all attributes stay visible." },
        { id: "C", text: "Aggregating view", rationale: "An aggregating view condenses information, for example the number of requirements per status." },
        { id: "D", text: "Baseline", rationale: "A baseline is a stable, change-controlled configuration, not a view." },
      ],
      answer: "A",
      explanation:
        "Views show the parts of the requirements a specific reader needs. Selective views filter requirements, projective views show only selected attributes, and aggregating views summarise; most reports combine these kinds.",
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
        { id: "A", text: "Clarify the RE process and needs first, consider all costs and try the tool in a pilot before broad rollout", rationale: "Correct. A tool should support a defined process; costs beyond licences (training, administration) and a pilot reduce the risk of a bad fit." },
        { id: "B", text: "Buy the tool with the most features and roll it out to everyone at once", rationale: "Feature count does not guarantee fit, and a big-bang rollout without preparation is risky." },
        { id: "C", text: "Let each team choose its own tool without coordination", rationale: "This undermines shared work products, traceability and reporting." },
        { id: "D", text: "Introduce the tool first and define the process later", rationale: "A tool cannot fix an undefined process; the process should come first." },
      ],
      answer: "A",
      explanation:
        "When introducing RE tools, think about the process the tool should support, the full costs, training, a step-by-step introduction and evaluating the tool in practice.",
      reference: SYLLABUS,
    },
    {
      id: "cpre-c7-tool-types",
      domain: "d7",
      objective: "EO 7.1.1 Know the different types of RE tools",
      difficulty: "foundation",
      question:
        "A team needs a tool to manage requirement attributes, versions and configurations, trace links and change requests. Which type of RE tool covers these tasks?",
      options: [
        { id: "A", text: "A tool for managing the RE process, such as measuring and reporting on process quality", rationale: "RE process management tools support workflows and measurement of the process, not the requirements themselves." },
        { id: "B", text: "A requirements management tool", rationale: "Correct. Requirements management tools support attributes, prioritisation, versions and configurations, traceability and change management." },
        { id: "C", text: "A test automation framework", rationale: "Test automation supports testing, not the management of requirements." },
        { id: "D", text: "A tool for documenting requirements knowledge, such as a modelling or collaboration tool", rationale: "These tools support documenting requirements and building shared understanding, not managing attributes, versions and trace links." },
      ],
      answer: "B",
      explanation:
        "The syllabus distinguishes tools for managing requirements, tools for managing the RE process and tools for documenting knowledge about requirements. Tools support RE work but do not replace a defined process.",
      reference: SYLLABUS,
    },
  ],
};
