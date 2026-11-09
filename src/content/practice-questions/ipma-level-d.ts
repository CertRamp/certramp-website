import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free IPMA Level D sample questions — ORIGINAL questions written by CertRamp
 * against the competence elements of the IPMA Individual Competence Baseline
 * (ICB4). Not taken from the paid practice exams, not recalled exam content,
 * and not presented as real exam questions.
 */
const ICB4 = {
  label: "PM-ZERT (GPM): General guide for IPMA Level D–A, ICB4 competence elements (PDF)",
  url: "https://www.gpm-ipma.de/fileadmin/pm_zert_upload/Zertifizierung/Projektmanagement/Z01_PM_General_Guide_ICB4.pdf",
};

export const ipmaLevelDQuestions: PracticeQuestionSet = {
  slug: "ipma-level-d",
  intro:
    "30 original IPMA Level D practice questions across the three ICB4 competence areas (Perspective, People and Practice) covering all three areas. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-11-09",
  seo: {
    title: "IPMA Level D Practice Questions with Answers (ICB4)",
    description:
      "30 free, original IPMA Level D practice questions on ICB4 (stakeholders, risk, planning, leadership, conflict and governance) each with a full explanation.",
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
    {
      id: "ipmad-d1-compliance-data-protection",
      domain: "d1",
      objective: "4.3.3 Compliance, standards and regulations",
      difficulty: "foundation",
      question:
        "Your team wants to test a new customer portal with a copy of the real customer database, because realistic data makes testing faster. What should you do first as project manager?",
      options: [
        { id: "A", text: "Approve it, because the data never leaves the company network", rationale: "Staying inside the network does not make the use of personal data lawful; data protection rules still apply." },
        { id: "B", text: "Clarify the legal requirements, involve the data protection officer and use anonymised data if needed", rationale: "Correct. The compliance element expects you to identify the laws and rules that apply to the project and make sure the project follows them." },
        { id: "C", text: "Let each tester decide individually how carefully to handle the data", rationale: "Compliance cannot be left to individual judgement; the project must make sure the rules are followed." },
        { id: "D", text: "Postpone the question until the portal is live and the audit starts", rationale: "Dealing with legal requirements late creates risk and costly rework; they belong in planning." },
      ],
      answer: "B",
      explanation:
        "Projects must operate within laws, regulations and internal standards. Recognising early that personal data is involved and involving the right experts protects both the organisation and the project from legal and reputational damage.",
      reference: ICB4,
    },
    {
      id: "ipmad-d1-culture-international",
      domain: "d1",
      objective: "4.3.5 Culture and values",
      difficulty: "intermediate",
      question:
        "In your international project, colleagues from one location never raise concerns in the weekly meeting, although problems later turn out to have been known to them. In their organisation, openly contradicting a manager is uncommon. What is the most appropriate response?",
      options: [
        { id: "A", text: "Tell them that open criticism is expected here and leave it at that", rationale: "A simple instruction ignores deeply rooted norms and is unlikely to change behaviour." },
        { id: "B", text: "Report the location to the steering committee for withholding information", rationale: "Treating a cultural difference as misconduct damages trust and does not solve the problem." },
        { id: "C", text: "Stop asking for their input, since they do not contribute anyway", rationale: "Excluding them loses valuable knowledge and makes the information gap worse." },
        { id: "D", text: "Recognise the cultural difference and offer other channels, such as one-to-one talks or written input before meetings", rationale: "Correct. The culture and values element expects you to understand different norms and adapt how the project works so that everyone can contribute." },
      ],
      answer: "D",
      explanation:
        "Organisations and countries have different norms about hierarchy and openness. A project manager who recognises these differences can adapt communication formats instead of misreading silence as agreement.",
      reference: ICB4,
    },
    {
      id: "ipmad-d1-programme-portfolio",
      domain: "d1",
      objective: "4.3.2 Governance, structures and processes",
      difficulty: "foundation",
      question:
        "To enter a new market, a company sets up several related projects (a new product, a sales organisation and an IT platform) that are coordinated jointly to achieve one strategic goal. What is this group of projects called?",
      options: [
        { id: "A", text: "A programme", rationale: "Correct. A programme is a set of related projects and activities managed together to achieve a common strategic goal or change." },
        { id: "B", text: "A portfolio", rationale: "A portfolio is a collection of projects and programmes that are managed together to optimise resources and strategic contribution, and they do not need to share one goal." },
        { id: "C", text: "A project management office", rationale: "A PMO is a supporting organisational unit, not a group of projects." },
        { id: "D", text: "A work breakdown structure", rationale: "A WBS breaks down the scope of a single project into work packages." },
      ],
      answer: "A",
      explanation:
        "Organisations steer temporary initiatives at different levels: projects, programmes and portfolios. Knowing the difference helps the project manager understand where the project sits and who makes which decisions.",
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
    {
      id: "ipmad-d2-integrity-status-report",
      domain: "d2",
      objective: "4.4.2 Personal integrity and reliability",
      difficulty: "intermediate",
      question:
        "Before a board meeting, your sponsor asks you to show the project status as green, although you know that an important milestone will be missed by three weeks. What is the appropriate behaviour?",
      options: [
        { id: "A", text: "Show the status as green as requested, since the sponsor is responsible for the report", rationale: "Reporting a status you know to be false breaks your integrity, whoever asked for it." },
        { id: "B", text: "Show the status as green but plan to catch up quietly before anyone notices", rationale: "This hides the problem from the people who need to decide on it and relies on hope rather than facts." },
        { id: "C", text: "Explain to the sponsor why you will report the real status and propose recovery measures to present with it", rationale: "Correct. Integrity means acting in line with ethical values and reporting honestly, while still supporting the sponsor with a constructive way forward." },
        { id: "D", text: "Avoid the conflict by not attending the board meeting", rationale: "Staying away does not correct the false picture and undermines your reliability." },
      ],
      answer: "C",
      explanation:
        "Personal integrity and reliability are the basis for trust in the project manager. Honest status reporting, combined with solutions, lets decision makers act in time and protects your credibility.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-relations-remote",
      domain: "d2",
      objective: "4.4.4 Relations and engagement",
      difficulty: "foundation",
      question:
        "A specialist from a partner company joins your team remotely. After a few weeks he rarely speaks in video calls and only does the minimum. What is the best first step?",
      options: [
        { id: "A", text: "Take time for a personal conversation, show genuine interest in his situation and listen to what he needs", rationale: "Correct. Relations and engagement are about building trust through personal contact, listening and showing interest in others." },
        { id: "B", text: "Send him a written reminder of his contractual obligations", rationale: "A formal reminder may be needed later, but it does not build the relationship or reveal the cause." },
        { id: "C", text: "Replace him with someone from your own company as soon as possible", rationale: "Replacing him before understanding the cause loses know-how and ignores the relationship side." },
        { id: "D", text: "Wait until he becomes more engaged on his own", rationale: "Remote team members can easily drift away; waiting lets the distance grow." },
      ],
      answer: "A",
      explanation:
        "People commit to a project when they feel noticed and connected. Especially in remote settings, the project manager has to actively build relationships instead of relying on contracts or chance encounters.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-resourcefulness-creativity",
      domain: "d2",
      objective: "4.4.8 Resourcefulness",
      difficulty: "intermediate",
      question:
        "Your team has been stuck on a technical problem for days and the usual solutions have failed. You organise a brainstorming session. Which rule is most important during the idea generation phase?",
      options: [
        { id: "A", text: "Only experienced team members may suggest ideas", rationale: "Limiting participation reduces the range of perspectives that brainstorming is meant to bring in." },
        { id: "B", text: "Each idea is evaluated immediately so that time is not wasted", rationale: "Immediate evaluation discourages unusual ideas; assessment comes in a later step." },
        { id: "C", text: "Only ideas that fit the current budget may be named", rationale: "Restricting ideas too early blocks creative solutions that could later be adapted." },
        { id: "D", text: "Criticism is postponed, and quantity of ideas comes before quality", rationale: "Correct. Deferring judgement encourages people to share unusual ideas, which is the purpose of creativity techniques." },
      ],
      answer: "D",
      explanation:
        "Resourcefulness includes using techniques that help people think differently when standard approaches fail. Separating idea generation from evaluation is the key principle of brainstorming.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-results-orientation",
      domain: "d2",
      objective: "4.4.10 Results orientation",
      difficulty: "advanced",
      question:
        "Your team spends a lot of time perfecting a feature that the customer rated as \"nice to have\", while a core deliverable needed for the next milestone is falling behind. What does results orientation require from you?",
      options: [
        { id: "A", text: "Let the team continue, because high quality on every feature motivates people", rationale: "Motivation matters, but effort on low-value work at the expense of agreed results does not serve the project." },
        { id: "B", text: "Refocus the team on the deliverables that contribute most to the agreed objectives and set priorities with them", rationale: "Correct. Results orientation means focusing your own and the team's effort on the results that matter most to stakeholders." },
        { id: "C", text: "Postpone the milestone so that both items can be finished to a high standard", rationale: "Moving the milestone without need accepts a worse overall result instead of setting priorities." },
        { id: "D", text: "Take over the core deliverable yourself so the team is not disturbed", rationale: "Doing the work yourself bypasses the team and leaves the underlying prioritisation problem unsolved." },
      ],
      answer: "B",
      explanation:
        "Being busy is not the same as delivering results. The project manager keeps the team focused on the outcomes that create value and makes priorities explicit when time is limited.",
      reference: ICB4,
    },
    {
      id: "ipmad-d2-crisis-go-live",
      domain: "d2",
      objective: "4.4.7 Conflict and crisis",
      difficulty: "advanced",
      question:
        "Two days before go-live, the central server at the customer site fails and the launch is at serious risk. What should the project manager do first?",
      options: [
        { id: "A", text: "Find out who caused the failure before taking any further action", rationale: "Looking for the person responsible costs time; analysing causes belongs after the situation is under control." },
        { id: "B", text: "Wait until the full analysis is complete before informing anyone", rationale: "Delaying information prevents the sponsor and stakeholders from acting and damages trust." },
        { id: "C", text: "Assess the situation quickly, inform the sponsor and set up a small crisis team to decide on immediate measures", rationale: "Correct. In a crisis, the project manager has to act quickly, inform the right people and organise decisions to stabilise the situation." },
        { id: "D", text: "Continue with the go-live plan and hope the server is repaired in time", rationale: "Ignoring a crisis makes a controlled response impossible and increases the damage." },
      ],
      answer: "C",
      explanation:
        "A crisis requires fast, structured action rather than the slower approach used for conflicts. Once the situation is stable, the causes can be analysed and lessons learned recorded.",
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
    {
      id: "ipmad-d3-project-design-approach",
      domain: "d3",
      objective: "4.5.1 Project design",
      difficulty: "intermediate",
      question:
        "At the start of a project the customer can only describe the requirements roughly and expects them to change, but is willing to give feedback every two weeks. Which approach fits best when designing the project?",
      options: [
        { id: "A", text: "An iterative, agile approach that delivers in short cycles and adjusts based on feedback", rationale: "Correct. Project design means choosing an approach that fits the project's context; uncertain, changing requirements and regular feedback favour iterative delivery." },
        { id: "B", text: "A strictly sequential approach that fixes all requirements in detail before work starts", rationale: "Fixing requirements in detail is hard when they are still unclear and expected to change, and leads to frequent rework." },
        { id: "C", text: "Starting work without any agreed approach so the team stays flexible", rationale: "Flexibility still needs a deliberate approach, roles and rules; working without one leads to chaos." },
        { id: "D", text: "Using the same approach as the last project to save time on decisions", rationale: "The approach should be chosen for the current context, not copied from a project with different conditions." },
      ],
      answer: "A",
      explanation:
        "Project design is about shaping the project to its context, including the approach, success criteria and key choices at the start. When requirements are uncertain, short cycles with regular feedback reduce the risk of building the wrong thing.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-responsibility-matrix",
      domain: "d3",
      objective: "4.5.5 Organisation and information",
      difficulty: "foundation",
      question:
        "In your project there is repeated confusion about who has to approve a deliverable, who should be consulted and who only needs to be informed. Which tool helps most to clarify this?",
      options: [
        { id: "A", text: "A Gantt chart", rationale: "A Gantt chart shows activities over time, not who carries which role for them." },
        { id: "B", text: "A risk register", rationale: "A risk register records risks and responses, not responsibilities for deliverables." },
        { id: "C", text: "A cost baseline", rationale: "A cost baseline shows planned costs over time, not roles and decision rights." },
        { id: "D", text: "A responsibility matrix such as a RACI chart", rationale: "Correct. A responsibility matrix assigns roles such as responsible, accountable, consulted and informed for each task or deliverable." },
      ],
      answer: "D",
      explanation:
        "The organisation and information element covers project roles, responsibilities and the flow of information. A responsibility matrix makes these roles explicit and prevents gaps and overlaps.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-quality-prevention",
      domain: "d3",
      objective: "4.5.6 Quality",
      difficulty: "intermediate",
      question:
        "In your project, many defects are only discovered during the final acceptance test, which leads to expensive rework. Which approach best addresses the cause?",
      options: [
        { id: "A", text: "Add a second, longer acceptance test at the end of the project", rationale: "More testing at the end still finds defects late and does not prevent them; the rework stays expensive." },
        { id: "B", text: "Build quality into the work through agreed standards, reviews and early tests", rationale: "Correct. Preventing defects through quality assurance during the project is cheaper and more effective than finding them at the end." },
        { id: "C", text: "Lower the acceptance criteria so that fewer defects are counted", rationale: "Lowering criteria hides the problem and puts the customer's satisfaction at risk." },
        { id: "D", text: "Ask the customer to accept the defects and fix them after handover", rationale: "This shifts the problem to the customer and does not improve how the work is done." },
      ],
      answer: "B",
      explanation:
        "Quality management covers both the quality of the outputs and of the processes that produce them. The later a defect is found, the more it costs, so prevention during the work is better than inspection at the end.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-earned-value",
      domain: "d3",
      objective: "4.5.7 Finance",
      difficulty: "advanced",
      question:
        "At the reporting date, the planned value (PV) is EUR 100,000, the earned value (EV) is EUR 80,000 and the actual cost (AC) is EUR 100,000. How should you interpret the project's status?",
      options: [
        { id: "A", text: "On budget and on schedule, because actual cost equals planned value", rationale: "Comparing AC with PV mixes cost and schedule; the value of the work actually done (EV) must be used." },
        { id: "B", text: "Under budget and behind schedule", rationale: "The schedule assessment is right, but AC is higher than EV, so the project is over budget." },
        { id: "C", text: "Over budget and behind schedule", rationale: "Correct. CPI = EV / AC = 0.8, so more was spent than the work is worth; SPI = EV / PV = 0.8, so less work was done than planned." },
        { id: "D", text: "Over budget but ahead of schedule", rationale: "EV is lower than PV, so less work was completed than planned, not more." },
      ],
      answer: "C",
      explanation:
        "Earned value analysis compares planned value, earned value and actual cost. Only by measuring the value of the work done can you tell whether a project is over budget, behind schedule or both.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-resource-levelling",
      domain: "d3",
      objective: "4.5.8 Resources",
      difficulty: "intermediate",
      question:
        "The resource plan shows that a database specialist is scheduled at 150% of her capacity in week 12. Some of her activities in that week are not on the critical path and have float. What is the best first step?",
      options: [
        { id: "A", text: "Move her non-critical activities within their float to even out the workload", rationale: "Correct. Levelling the workload within the available float (resource smoothing) removes the overload without moving the project end date." },
        { id: "B", text: "Ask her to work overtime for as long as necessary", rationale: "Permanent overtime is a short-term fix that increases the risk of errors and exhaustion." },
        { id: "C", text: "Move the project end date by one week straight away", rationale: "Moving the end date is unnecessary while float can absorb the overload." },
        { id: "D", text: "Leave the plan unchanged, since overloads usually sort themselves out", rationale: "An unresolved overload makes the plan unrealistic and leads to delays." },
      ],
      answer: "A",
      explanation:
        "Resource planning compares the demand for resources with their availability. Using float to level peaks resolves overloads while keeping the critical path and end date unchanged.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-contract-type",
      domain: "d3",
      objective: "4.5.9 Procurement",
      difficulty: "advanced",
      question:
        "You need to buy a clearly specified software module from an external supplier. The scope is stable and your organisation wants to keep its own cost risk as low as possible. Which type of contract fits best?",
      options: [
        { id: "A", text: "A time and materials contract", rationale: "With time and materials the buyer pays for the effort actually used, so the cost risk stays with the buyer." },
        { id: "B", text: "A fixed-price contract", rationale: "Correct. With a fixed price the supplier carries most of the cost risk, which works well when the scope is clearly defined and stable." },
        { id: "C", text: "A cost-plus contract with a percentage fee", rationale: "The buyer reimburses all costs plus a fee, so the cost risk lies mainly with the buyer." },
        { id: "D", text: "An informal verbal agreement", rationale: "Without a written contract, scope, price and responsibilities are hard to prove and enforce, which increases risk." },
      ],
      answer: "B",
      explanation:
        "The choice of contract type decides who carries the cost risk. Fixed-price contracts suit stable, well-defined scope, while time and materials contracts suit work whose scope is still unclear.",
      reference: ICB4,
    },
    {
      id: "ipmad-d3-change-adoption",
      domain: "d3",
      objective: "4.5.13 Change and transformation",
      difficulty: "foundation",
      question:
        "Your project has installed a new planning software on time and within budget. Three months later most employees still use their old spreadsheets. What should have received more attention?",
      options: [
        { id: "A", text: "A more detailed technical specification of the software", rationale: "The software works; the problem is that people do not use it, which is not a technical issue." },
        { id: "B", text: "Making the new software mandatory by management order on day one", rationale: "An order without explanation or support often increases resistance rather than adoption." },
        { id: "C", text: "The people side of the change: explaining why, involving users, training and support during the transition", rationale: "Correct. The change and transformation element is about helping people and the organisation adopt the change so that the intended benefits are achieved." },
        { id: "D", text: "A faster project closure so the team could move on to the next project", rationale: "Closing faster would not have helped employees adopt the new way of working." },
      ],
      answer: "C",
      explanation:
        "Delivering an output is not the same as achieving the change. Benefits only arise when people actually adopt the new way of working, so communication, involvement and support are part of the project's job.",
      reference: ICB4,
    },
  ],
};
