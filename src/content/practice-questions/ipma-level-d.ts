import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free IPMA Level D sample questions — ORIGINAL questions written by CertRamp
 * against the competence elements of the IPMA Individual Competence Baseline
 * (ICB4). Not taken from the paid practice exams, not recalled exam content,
 * and not presented as real exam questions.
 */
const ICB4 = {
  label: "PM-ZERT (GPM) — General guide for IPMA Level D–A, ICB4 competence elements (PDF)",
  url: "https://www.gpm-ipma.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Z01_PM_General_Guide_ICB4.pdf",
};

export const ipmaLevelDQuestions: PracticeQuestionSet = {
  slug: "ipma-level-d",
  intro:
    "15 original IPMA Level D practice questions across the three ICB4 competence areas — Perspective, People and Practice — weighted roughly by the number of competence elements in each area. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "IPMA Level D Practice Questions with Answers (ICB4)",
    description:
      "15 free, original IPMA Level D practice questions on ICB4 — stakeholders, risk, planning, leadership, conflict and governance — each with a full explanation.",
  },
  questions: [
    /* ── Area 1: Perspective competences ──────────────────────────────────── */
    {
      id: "ipmad-d1-strategy",
      domain: "d1",
      objective: "4.3.1 Strategy",
      difficulty: "foundation",
      question:
        "A steering committee must decide which of two proposed projects to start, because the budget only covers one. Which question matters most from the perspective of the strategy competence element?",
      options: [
        { id: "A", text: "Which project has the more experienced project manager?", rationale: "The project manager's experience affects delivery risk, but it does not tell you whether the project serves the organisation's goals." },
        { id: "B", text: "Which project can start first?", rationale: "An early start says nothing about the value the project creates for the organisation." },
        { id: "C", text: "Which project contributes more to the organisation's strategic objectives?", rationale: "Correct. The strategy element is about aligning the project with the organisation's mission, vision and strategic goals, and justifying it on that basis." },
        { id: "D", text: "Which project needs fewer documents?", rationale: "Documentation effort is not a sound criterion for selecting a project." },
      ],
      answer: "C",
      explanation:
        "Projects exist to deliver value for the organisation. A project that is well run but does not support the strategy is still the wrong project, so strategic fit comes before delivery considerations.",
      reference: ICB4,
    },
    {
      id: "ipmad-d1-power-interest",
      domain: "d1",
      objective: "4.3.4 Power and interest",
      difficulty: "intermediate",
      question:
        "A department head officially supports your project, but you notice that she keeps delaying the release of her staff because the project would reduce her department's influence. Which competence element is most directly involved in recognising and handling this?",
      options: [
        { id: "A", text: "Power and interest", rationale: "Correct. This element covers understanding informal personal and group interests, influence and politics and how they affect the project." },
        { id: "B", text: "Quality", rationale: "Quality concerns the fitness of the project's outputs and processes, not hidden interests." },
        { id: "C", text: "Finance", rationale: "Finance deals with budgets and cost control, not informal power structures." },
        { id: "D", text: "Scope", rationale: "Scope defines what the project delivers, not why someone is resisting it." },
      ],
      answer: "A",
      explanation:
        "Formal support and actual behaviour can differ. Recognising informal interests and power lets you address the real concern, for example by involving the department head in how the change affects her area.",
      reference: ICB4,
    },
    {
      id: "ipmad-d1-governance",
      domain: "d1",
      objective: "4.3.2 Governance, structures and processes",
      difficulty: "intermediate",
      question:
        "Your organisation has a project management office (PMO), defined phase gates and a rule that projects above a certain budget need board approval. Which competence element covers understanding and working within these arrangements?",
      options: [
        { id: "A", text: "Culture and values", rationale: "Culture and values cover norms and unwritten rules. Formal approval levels and phase gates are structures and processes." },
        { id: "B", text: "Governance, structures and processes", rationale: "Correct. This element covers how the organisation steers projects: governance bodies, decision rights, PMOs, phase models and reporting lines." },
        { id: "C", text: "Personal integrity and reliability", rationale: "This is a People element about ethical, consistent personal behaviour, not organisational structures." },
        { id: "D", text: "Procurement", rationale: "Procurement concerns buying goods and services from suppliers." },
      ],
      answer: "B",
      explanation:
        "Perspective competences describe the environment a project lives in. Knowing who decides what, when approval is needed and which standard processes apply helps the project manager act within the organisation's governance.",
      reference: ICB4,
    },

    /* ── Area 2: People competences ───────────────────────────────────────── */
    {
      id: "ipmad-d2-conflict-escalation",
      domain: "d2",
      objective: "4.4.7 Conflict and crisis",
      difficulty: "intermediate",
      question:
        "Two senior developers disagree on a technical approach. Their discussion has become personal and they now avoid each other in meetings. What is the most appropriate first step for the project manager?",
      options: [
        { id: "A", text: "Ignore it, because conflicts usually resolve themselves", rationale: "Conflicts that have become personal tend to escalate further and harm the team if they are left alone." },
        { id: "B", text: "Decide in favour of the more senior developer to end the dispute", rationale: "Imposing a decision without understanding the conflict may settle the technical question but leaves the relationship problem unresolved." },
        { id: "C", text: "Escalate immediately to the line managers of both developers", rationale: "Escalation is appropriate when the project manager cannot resolve the conflict, not as a first step." },
        { id: "D", text: "Talk to both, analyse the cause and stage of the conflict, and moderate a solution-focused discussion", rationale: "Correct. Analysing the conflict and moderating it early is how the project manager prevents further escalation and refocuses the discussion on the task." },
      ],
      answer: "D",
      explanation:
        "Conflict handling starts with understanding: what is the conflict about and how far has it escalated? The earlier the project manager intervenes and moderates, the more likely the parties can still solve it together.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-leadership-situational",
      domain: "d2",
      objective: "4.4.5 Leadership",
      difficulty: "intermediate",
      question:
        "A new team member is highly motivated but has never done the task assigned to her. Which leadership approach fits best at this stage?",
      options: [
        { id: "A", text: "Delegate the task fully and check the result at the end", rationale: "Full delegation suits people who are both able and willing. With no experience, she would be left without the guidance she needs." },
        { id: "B", text: "Give clear instructions and close guidance until she has built up the skills", rationale: "Correct. Adapting leadership to the situation means giving more direction where competence is still low, and stepping back as it grows." },
        { id: "C", text: "Leave her to work it out to build independence", rationale: "This risks errors and frustration, and wastes her motivation." },
        { id: "D", text: "Apply the same leadership style to every team member for fairness", rationale: "A single style ignores that people differ in skills and motivation; effective leadership adapts to the person and situation." },
      ],
      answer: "B",
      explanation:
        "Leadership in projects means choosing a style that fits the person, the task and the situation. Motivation without experience calls for direction and support, which can be reduced as competence grows.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-teamwork",
      domain: "d2",
      objective: "4.4.6 Teamwork",
      difficulty: "foundation",
      question:
        "A newly formed project team starts to argue about roles and ways of working a few weeks after kick-off. According to common team development models, how should the project manager interpret this?",
      options: [
        { id: "A", text: "As a sign that the team was badly selected and should be replaced", rationale: "Friction at this stage is normal and not in itself evidence of a wrong team composition." },
        { id: "B", text: "As a normal storming phase that the project manager should guide by clarifying roles and agreeing team rules", rationale: "Correct. Teams typically go through forming, storming, norming and performing; in storming, clear roles and agreed rules help the team move on." },
        { id: "C", text: "As proof that the team is already performing", rationale: "Performing teams work effectively together; open disputes about roles indicate an earlier stage." },
        { id: "D", text: "As a reason to stop all team meetings until the arguments end", rationale: "Reducing communication would slow down team development rather than resolve the issues." },
      ],
      answer: "B",
      explanation:
        "Team development is a process. Knowing the phases helps the project manager respond correctly, for example by clarifying roles and agreeing working rules when the team is storming.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-negotiation",
      domain: "d2",
      objective: "4.4.9 Negotiation",
      difficulty: "advanced",
      question:
        "You negotiate with a line manager for two specialists. He insists on releasing only one; you insist on two. What is the best way to move towards an agreement that both sides can accept?",
      options: [
        { id: "A", text: "Repeat your demand until he gives in", rationale: "Positional bargaining hardens positions and damages the relationship you will still need later." },
        { id: "B", text: "Accept one specialist immediately to avoid conflict", rationale: "Giving in without exploring options may put the project at risk and does not address the underlying need." },
        { id: "C", text: "Explore the interests behind both positions and look for options such as phased release or part-time availability", rationale: "Correct. Focusing on interests rather than positions opens up options that can satisfy both sides." },
        { id: "D", text: "Escalate to the steering committee before the first meeting ends", rationale: "Escalation can be a last resort, but it should not replace an honest attempt to negotiate." },
      ],
      answer: "C",
      explanation:
        "Good negotiation separates positions (\"one\" or \"two\") from interests (his department's workload, your project's deadline). Options built on interests lead to agreements that last and protect the working relationship.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-communication",
      domain: "d2",
      objective: "4.4.3 Personal communication",
      difficulty: "foundation",
      question:
        "After explaining a change in priorities to the team, the project manager wants to make sure the message was understood as intended. What is the most effective technique?",
      options: [
        { id: "A", text: "Ask team members to summarise the key points in their own words", rationale: "Correct. Asking for a summary checks understanding and gives the project manager feedback on whether the message arrived as intended." },
        { id: "B", text: "Repeat the message louder", rationale: "Volume does not improve understanding." },
        { id: "C", text: "Send the same text again by email without asking for questions", rationale: "Repeating one-way communication does not show whether the message was understood." },
        { id: "D", text: "Assume that silence means agreement", rationale: "Silence can mean confusion, disagreement or uncertainty; it is not confirmation." },
      ],
      answer: "A",
      explanation:
        "Communication is only effective when the receiver understands the message as intended. Feedback techniques such as asking for a summary or active listening close that loop.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-self-management",
      domain: "d2",
      objective: "4.4.1 Self-reflection and self-management",
      difficulty: "foundation",
      question:
        "A project manager notices that he becomes impatient and interrupts others when deadlines are tight, which upsets the team. What does the competence element self-reflection and self-management expect him to do?",
      options: [
        { id: "A", text: "Recognise the pattern, reflect on its triggers and develop ways to manage his reaction", rationale: "Correct. This element is about being aware of your own emotions, behaviour and stress and managing them constructively." },
        { id: "B", text: "Ask the team to stop raising issues before deadlines", rationale: "This shifts responsibility to the team and suppresses important information." },
        { id: "C", text: "Accept the behaviour as part of his personality", rationale: "Self-management means working on behaviour that harms others, not accepting it." },
        { id: "D", text: "Avoid team meetings near deadlines", rationale: "Avoidance removes communication when it is most needed." },
      ],
      answer: "A",
      explanation:
        "People competences start with yourself. Reflecting on your reactions, especially under pressure, is the basis for leading and working with others effectively.",
      reference: ICB4,
    },

    /* ── Area 3: Practice competences ─────────────────────────────────────── */
    {
      id: "ipmad-d3-stakeholder-analysis",
      domain: "d3",
      objective: "4.5.12 Stakeholders",
      difficulty: "foundation",
      question:
        "In a stakeholder analysis you classify the works council as having high influence on the project and a negative attitude towards it. What is the most appropriate strategy?",
      options: [
        { id: "A", text: "Inform them only once the project is finished", rationale: "Excluding an influential critical stakeholder increases the risk that they block the project later." },
        { id: "B", text: "Involve them early, understand their concerns and engage them actively", rationale: "Correct. Stakeholders with high influence and a critical attitude need close, early engagement so their concerns can be addressed." },
        { id: "C", text: "Treat them like every other stakeholder with the standard newsletter", rationale: "A stakeholder analysis exists precisely to tailor engagement; influential critics need more than standard information." },
        { id: "D", text: "Remove them from the stakeholder list because they are opposed", rationale: "Opposition does not reduce their influence; ignoring them does not make them go away." },
      ],
      answer: "B",
      explanation:
        "Stakeholder management means identifying stakeholders, analysing their influence and attitude, and choosing an engagement strategy for each. Influential critics are a priority for active involvement.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-risk-opportunity",
      domain: "d3",
      objective: "4.5.11 Risk and opportunity",
      difficulty: "intermediate",
      question:
        "A risk has an estimated probability of 20% and a potential damage of EUR 50,000. What is its expected value (risk exposure)?",
      options: [
        { id: "A", text: "EUR 2,500", rationale: "This would correspond to 5%, not 20%, of the potential damage." },
        { id: "B", text: "EUR 50,000", rationale: "This is the full damage, ignoring the probability." },
        { id: "C", text: "EUR 250,000", rationale: "This multiplies the damage by 5 rather than by 0.2." },
        { id: "D", text: "EUR 10,000", rationale: "Correct. Expected value = probability × impact = 0.2 × EUR 50,000 = EUR 10,000." },
      ],
      answer: "D",
      explanation:
        "Multiplying probability by impact gives a comparable value for prioritising risks and sizing contingency reserves. The same logic applies to opportunities, where the impact is a benefit rather than a loss.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-wbs",
      domain: "d3",
      objective: "4.5.3 Scope",
      difficulty: "foundation",
      question:
        "What is the main purpose of a work breakdown structure (WBS)?",
      options: [
        { id: "A", text: "To show the sequence and dependencies of activities over time", rationale: "Sequence and dependencies are shown in a network plan or schedule, not the WBS." },
        { id: "B", text: "To list the project's stakeholders and their influence", rationale: "That is the stakeholder register or analysis." },
        { id: "C", text: "To break the total scope down hierarchically into manageable work packages", rationale: "Correct. The WBS structures all the work of the project into deliverables and work packages, which then serve as the basis for scheduling, estimating and assigning responsibility." },
        { id: "D", text: "To record the project's budget approvals", rationale: "Budget approvals belong to finance and governance documentation." },
      ],
      answer: "C",
      explanation:
        "The WBS answers \"what has to be done?\" for the whole project scope. Work that is not in the WBS is not part of the project, so it is the reference for planning and for scope control.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-critical-path",
      domain: "d3",
      objective: "4.5.4 Time",
      difficulty: "advanced",
      question:
        "A project has three paths from start to finish: A–B–E takes 12 days, A–C–E 15 days and A–D–E 10 days. Activity B is delayed by 2 days. What happens to the project end date, assuming no other changes?",
      options: [
        { id: "A", text: "It moves by 2 days", rationale: "B is not on the critical path. A–B–E becomes 14 days, which is still shorter than A–C–E." },
        { id: "B", text: "It does not change", rationale: "Correct. The critical path A–C–E determines the duration of 15 days. Path A–B–E has 3 days of float, so a 2-day delay in B is absorbed." },
        { id: "C", text: "It moves by 3 days", rationale: "The delay is 2 days, and it is absorbed by float rather than added." },
        { id: "D", text: "It moves by 5 days", rationale: "This adds the delay to float instead of comparing path lengths." },
      ],
      answer: "B",
      explanation:
        "The longest path through the network is the critical path and sets the project duration. Activities on other paths have float; a delay only moves the end date if it exceeds that float.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-objectives",
      domain: "d3",
      objective: "4.5.2 Requirements and objectives",
      difficulty: "intermediate",
      question:
        "Which project objective is best formulated?",
      options: [
        { id: "A", text: "Improve customer satisfaction as much as possible", rationale: "This is neither specific nor measurable, and has no deadline." },
        { id: "B", text: "Implement the new CRM system soon", rationale: "\"Soon\" is not a defined date and there is no measurable outcome." },
        { id: "C", text: "Make the website better", rationale: "\"Better\" cannot be verified at the end of the project." },
        { id: "D", text: "Reduce the average processing time for customer complaints from 10 to 5 working days by 30 June", rationale: "Correct. The objective is specific, measurable and time-bound, so it can be checked at project closure." },
      ],
      answer: "D",
      explanation:
        "Objectives must be verifiable, which is why criteria such as SMART are widely used. A clear objective lets the project and its stakeholders agree on when the project has succeeded.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-change-control",
      domain: "d3",
      objective: "4.5.10 Plan and control",
      difficulty: "intermediate",
      question:
        "Midway through the project, the customer asks for an additional feature. The team could build it, but it would affect cost and schedule. What should the project manager do?",
      options: [
        { id: "A", text: "Build it quietly to keep the customer happy", rationale: "Unmanaged additions cause scope creep and undermine the agreed baseline for cost and time." },
        { id: "B", text: "Refuse all changes once the plan is approved", rationale: "Changes are normal in projects; the aim is to control them, not forbid them." },
        { id: "C", text: "Assess the impact on scope, cost, time and risk and submit it for a decision through the agreed change process", rationale: "Correct. A controlled change process makes the consequences visible and lets the authorised body decide before the baseline is updated." },
        { id: "D", text: "Let the team decide on its own whether to include it", rationale: "The team can estimate the effort, but approving changes to the baseline is a decision for the authorised body." },
      ],
      answer: "C",
      explanation:
        "Planning and control include managing changes against an agreed baseline. Impact analysis followed by a formal decision keeps scope, cost and schedule consistent and transparent for all stakeholders.",
      reference: ICB4,
    },
  ],
};
