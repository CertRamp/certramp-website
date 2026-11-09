import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CIA Part 3 sample questions — ORIGINAL questions written by CertRamp for
 * The IIA's 2025 CIA Part 3 syllabus. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const SYLLABUS = {
  label: "The IIA: CIA Part 3 syllabus (Internal Audit Function)",
  url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-3-syllabus.pdf",
};
const STANDARDS = {
  label: "The IIA: Global Internal Audit Standards",
  url: "https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/",
};

export const ciaPart3Questions: PracticeQuestionSet = {
  slug: "cia-part-3",
  intro:
    "30 original CIA Part 3 practice questions across the four sections of The IIA's 2025 syllabus (Internal Audit Function), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-11-09",
  seo: {
    title: "CIA Part 3 Practice Questions with Answers (2026)",
    description:
      "30 free, original CIA Part 3 practice questions on internal audit operations, the audit plan, quality, reporting and follow-up, each with a full explanation.",
  },
  questions: [
    /* ── Section A: Internal Audit Operations (25%) ───────────────────────── */
    {
      id: "cia3-d1-strategy",
      domain: "d1",
      objective: "A.3 Describe the key elements required to align internal audit strategy to stakeholder expectations",
      difficulty: "intermediate",
      question:
        "A newly appointed chief audit executive is developing an internal audit strategy. What should she do first to align it with stakeholder expectations?",
      options: [
        { id: "A", text: "Copy the previous year's strategy and update the dates", rationale: "This ignores changes in the organisation and in stakeholder expectations." },
        { id: "B", text: "Understand the organisation's strategy, objectives and risks and discuss expectations with the board and senior management", rationale: "Correct. An internal audit strategy should support the organisation's strategy and reflect what the board and senior management expect from the function." },
        { id: "C", text: "Benchmark the audit team's headcount against competitors and request the same number", rationale: "Benchmarking may inform resourcing, but it does not establish what stakeholders need." },
        { id: "D", text: "Ask each operational manager which areas they would prefer not to be audited", rationale: "Letting auditees steer coverage would compromise independence." },
      ],
      answer: "B",
      explanation:
        "Strategic planning for internal audit starts with the organisation: its strategy, objectives and risks, and the expectations of the board and senior management. The vision, objectives and resource plans of the function follow from that.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d1-resources",
      domain: "d1",
      objective: "A.2 Describe key activities for managing financial, human, and IT resources within the internal audit function",
      difficulty: "intermediate",
      question:
        "The chief audit executive concludes that the approved budget is not enough to cover several high-risk areas in the plan. What should she do?",
      options: [
        { id: "A", text: "Quietly drop the high-risk engagements and complete the rest", rationale: "The board must be aware of the impact of resource limitations on coverage." },
        { id: "B", text: "Reduce testing on every engagement so that all of them can be completed", rationale: "Spreading resources too thinly may produce unsupported conclusions." },
        { id: "C", text: "Ask management of the high-risk areas to audit themselves", rationale: "Self-assessment by management is not independent assurance." },
        { id: "D", text: "Communicate the shortfall and its impact on coverage to the board and senior management, and propose options such as co-sourcing or additional funding", rationale: "Correct. The chief audit executive must evaluate whether resources are sufficient and inform the board of the impact of any insufficiency." },
      ],
      answer: "D",
      explanation:
        "Resource management is a chief audit executive responsibility, but the board decides whether to accept the resulting gaps in assurance. Transparent communication with options is the expected response.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d1-methodology",
      domain: "d1",
      objective: "A.1 Describe methodologies for the planning, organizing, directing, and monitoring of internal audit operations",
      difficulty: "foundation",
      question:
        "Why should the chief audit executive establish documented methodologies for the internal audit function?",
      options: [
        { id: "A", text: "To guide the function's work consistently and in conformance with the Global Internal Audit Standards", rationale: "Correct. Methodologies such as policies, procedures and templates give auditors consistent guidance for planning, performing and documenting work." },
        { id: "B", text: "To replace the need for engagement supervision", rationale: "Methodologies support supervision but do not replace it." },
        { id: "C", text: "To give management control over how audits are performed", rationale: "Methodologies are owned by the internal audit function, not by management." },
        { id: "D", text: "To avoid having to update procedures when the Standards change", rationale: "Methodologies must be reviewed and updated as standards and the organisation change." },
      ],
      answer: "A",
      explanation:
        "Documented methodologies make the work of the function repeatable, consistent and reviewable. Their form depends on the size and maturity of the function.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d1-board-communication",
      domain: "d1",
      objective: "A.4 Recognize the chief audit executive's responsibilities for building relationships and communicating with senior management and the board about various matters",
      difficulty: "advanced",
      question:
        "The chief executive tells the chief audit executive not to mention a significant control failure to the audit committee because it is \"being handled\". What is the most appropriate response?",
      options: [
        { id: "A", text: "Agree, because the chief executive is the chief audit executive's administrative superior", rationale: "Administrative reporting does not override the chief audit executive's direct accountability to the board." },
        { id: "B", text: "Report the matter only after management has fully resolved it", rationale: "Delaying communication of a significant issue at management's request restricts the board's oversight." },
        { id: "C", text: "Explain to the chief executive that the matter must be reported, and communicate the facts and the status of management's response to the audit committee", rationale: "Correct. The chief audit executive has direct, unrestricted access to the board and must communicate significant matters, while keeping the relationship with management constructive." },
        { id: "D", text: "Resign immediately without communicating anything", rationale: "Resigning does not inform the board and leaves the issue unresolved." },
      ],
      answer: "C",
      explanation:
        "Building relationships with senior management matters, but not at the cost of the board's oversight. A restriction on what the chief audit executive may report is itself a potential impairment that the board should know about.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d1-charter",
      domain: "d1",
      objective: "A.4 Recognize the chief audit executive's responsibilities for building relationships and communicating with senior management and the board about various matters",
      difficulty: "foundation",
      question:
        "The chief audit executive has drafted an updated internal audit charter that reflects a broader internal audit mandate. Who should approve the charter?",
      options: [
        { id: "A", text: "The board, after the chief audit executive has discussed the draft with the board and senior management", rationale: "Correct. The chief audit executive develops and discusses the charter, and the board approves it, which confirms the mandate and the function's position in the organisation." },
        { id: "B", text: "The chief executive alone, because the chief audit executive reports to her administratively", rationale: "Administrative reporting covers day-to-day matters; approval of the charter is a board responsibility." },
        { id: "C", text: "The external auditor, because it relies on the work of internal audit each year", rationale: "The external auditor may be interested in the charter but has no role in approving it." },
        { id: "D", text: "Nobody, because the chief audit executive owns the charter and only needs to sign it", rationale: "A charter without board approval lacks the authority the function needs to perform its mandate." },
      ],
      answer: "A",
      explanation:
        "The internal audit charter documents the mandate, the organisational position and reporting relationships, and the scope of internal audit services. Standard 6.2 places drafting with the chief audit executive and approval with the board, and the charter should be reviewed when circumstances change.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d1-competencies",
      domain: "d1",
      objective: "A.2 Describe key activities for managing financial, human, and IT resources within the internal audit function",
      difficulty: "intermediate",
      question:
        "The approved plan includes an assurance engagement on a new cloud-based ERP system, but nobody in the internal audit team has the necessary technical skills. What should the chief audit executive do?",
      options: [
        { id: "A", text: "Perform the engagement with the current team and quietly narrow the scope to the areas they understand", rationale: "Silently limiting scope leaves the board with a false impression of the assurance provided." },
        { id: "B", text: "Ask the head of IT, who designed the system, to lead the engagement on internal audit's behalf", rationale: "Someone who designed the system cannot objectively assess it." },
        { id: "C", text: "Remove the engagement from the plan permanently, because the team lacks the required skills", rationale: "A skills gap is a reason to obtain resources, not to abandon coverage of a significant risk without informing the board." },
        { id: "D", text: "Close the gap through training, hiring, co-sourcing or a guest auditor, and tell the board if coverage is affected", rationale: "Correct. The chief audit executive must ensure the function collectively has the competencies needed and communicate any impact of resource limitations." },
      ],
      answer: "D",
      explanation:
        "Human resources management includes identifying the competencies the plan requires and closing gaps through recruitment, development or external providers. Objectivity must be preserved when choosing who performs the work, and the board should know when resource limitations affect coverage.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d1-budget",
      domain: "d1",
      objective: "A.2 Describe key activities for managing financial, human, and IT resources within the internal audit function",
      difficulty: "intermediate",
      question:
        "The chief audit executive is preparing next year's budget for the internal audit function. Which approach is most appropriate?",
      options: [
        { id: "A", text: "Take last year's budget, add an inflation factor and submit it without further analysis", rationale: "An incremental budget ignores changes in risk, the plan and the function's strategy." },
        { id: "B", text: "Base the budget on the resources needed to deliver the strategy and risk-based plan, and present it to the board", rationale: "Correct. The budget should follow from the plan and strategy, and the board approves the function's budget and resource plan." },
        { id: "C", text: "Let the chief financial officer set the amount, since finance controls spending across the organisation", rationale: "Leaving the budget entirely to management could be used to restrict internal audit's scope and independence." },
        { id: "D", text: "Cut training and technology first, since they do not directly produce audit reports", rationale: "Training and technology support competence and quality; cutting them first weakens the function." },
      ],
      answer: "B",
      explanation:
        "Financial resource management means estimating the cost of delivering the plan, including staff, training, technology and external providers, and managing spending against the approved budget. Board approval of the budget supports the function's independence.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d1-technology",
      domain: "d1",
      objective: "A.2 Describe key activities for managing financial, human, and IT resources within the internal audit function",
      difficulty: "foundation",
      question:
        "The chief audit executive wants the function to make greater use of data analytics. What is the best way to approach this?",
      options: [
        { id: "A", text: "Buy the most advanced analytics platform available, because the board will be impressed by it", rationale: "Technology should be selected for the function's needs, not for its image." },
        { id: "B", text: "Ask the IT department to run all the analyses and send internal audit the results", rationale: "Depending entirely on the audited organisation for data and analysis can affect objectivity and the reliability of evidence." },
        { id: "C", text: "Assess technology needs against the strategy and plan, then invest in tools and training and review their benefit", rationale: "Correct. Technological resources should support the strategy and plan, staff need the skills to use them, and their effectiveness should be evaluated." },
        { id: "D", text: "Avoid analytics, because internal auditors should always examine original source documents", rationale: "Analytics can test entire populations and often provide stronger evidence than manual sampling." },
      ],
      answer: "C",
      explanation:
        "Managing technological resources is part of resource management alongside financial and human resources. The chief audit executive should plan technology investments around the function's strategy and the competencies of the team.",
      reference: SYLLABUS,
    },

    /* ── Section B: Internal Audit Plan (15%) ─────────────────────────────── */
    {
      id: "cia3-d2-risk-based-plan",
      domain: "d2",
      objective: "B.2 Describe the processes to develop a risk-based audit plan",
      difficulty: "intermediate",
      question:
        "Which approach best describes the development of a risk-based internal audit plan?",
      options: [
        { id: "A", text: "Audit every business unit on a fixed three-year rotation regardless of risk", rationale: "A fixed cycle ignores changes in risk and is not risk-based." },
        { id: "B", text: "Base the plan on a documented assessment of the organisation's strategies, objectives and risks, informed by input from the board and senior management, and review it regularly", rationale: "Correct. A risk-based plan prioritises engagements according to risk and stakeholder input and is updated as risks change." },
        { id: "C", text: "Include only the engagements requested by senior management", rationale: "Management requests are one input, but the plan must reflect the chief audit executive's independent assessment of risk." },
        { id: "D", text: "Focus solely on areas audited by the external auditor", rationale: "This duplicates effort and omits many operational and strategic risks." },
      ],
      answer: "B",
      explanation:
        "The internal audit plan should be dynamic: grounded in a risk assessment, informed by stakeholders, approved by the board and adjusted when the organisation's risks change.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d2-reliance",
      domain: "d2",
      objective: "B.3 Recognize the importance for internal auditors to coordinate with other assurance providers and leverage their work",
      difficulty: "advanced",
      question:
        "The compliance function performs detailed monitoring of anti-money-laundering controls. Before relying on its work to reduce internal audit's own testing, what should the chief audit executive do?",
      options: [
        { id: "A", text: "Rely on it fully, because compliance is a second-line function", rationale: "Position in the Three Lines Model alone does not establish that the work is reliable." },
        { id: "B", text: "Refuse to rely on any work not performed by internal audit", rationale: "Coordination and reliance are encouraged to avoid duplication and improve coverage." },
        { id: "C", text: "Ask the compliance function to sign the internal audit report", rationale: "Internal audit remains responsible for its own conclusions." },
        { id: "D", text: "Evaluate the provider's competence and objectivity and the quality of its work, and document the basis for reliance", rationale: "Correct. Before relying on another assurance provider, internal audit considers its competence, objectivity and due professional care and documents the basis for reliance." },
      ],
      answer: "D",
      explanation:
        "Leveraging other assurance providers reduces duplication and gaps, but internal audit stays accountable for any conclusions it reaches. A documented evaluation of the provider is what makes reliance defensible.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d2-request",
      domain: "d2",
      objective: "B.1 Identify sources of potential engagements",
      difficulty: "intermediate",
      question:
        "Midway through the year, senior management asks internal audit to review the integration of a newly acquired subsidiary, which is not in the approved plan. What should the chief audit executive do?",
      options: [
        { id: "A", text: "Accept the request automatically and drop whichever planned engagement is scheduled next", rationale: "Changes to the plan should be based on relative risk, not on scheduling convenience." },
        { id: "B", text: "Decline, because internal audit may only perform engagements in the approved plan", rationale: "The plan should be flexible enough to respond to new risks and stakeholder requests." },
        { id: "C", text: "Assess the request against the risks in the current plan and, if accepted, update the plan and inform the board", rationale: "Correct. Management requests are a valid source of engagements; the chief audit executive evaluates them by risk and communicates significant plan changes to the board." },
        { id: "D", text: "Perform the review informally outside the plan so that the board's approval is not needed", rationale: "Work outside the plan without the board's knowledge undermines its oversight of internal audit." },
      ],
      answer: "C",
      explanation:
        "Potential engagements come from the risk assessment, the audit universe, stakeholder requests, regulatory requirements and changes such as acquisitions. Significant changes to the plan should be communicated to the board and senior management, and approved by the board where required.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d2-topical-requirements",
      domain: "d2",
      objective: "B.1 Identify sources of potential engagements",
      difficulty: "advanced",
      question:
        "The internal audit plan includes an assurance engagement on cybersecurity, a subject covered by one of The IIA's Topical Requirements. How does the Topical Requirement apply to this engagement?",
      options: [
        { id: "A", text: "It is mandatory, and internal auditors use it together with the Standards because the topic is in scope", rationale: "Correct. Topical Requirements are mandatory when their subject is within the scope of an assurance engagement and are applied alongside the Global Internal Audit Standards." },
        { id: "B", text: "It is optional guidance that the engagement team may consult if it finds it useful", rationale: "Topical Requirements are part of the mandatory elements of the IPPF, unlike the Global Guidance." },
        { id: "C", text: "It applies only if the external auditor or a regulator specifically requests it", rationale: "Applicability depends on whether the topic is in scope, not on a request from a third party." },
        { id: "D", text: "It replaces the Global Internal Audit Standards for the duration of that engagement", rationale: "Topical Requirements add to the Standards; they do not replace them." },
      ],
      answer: "A",
      explanation:
        "Topical Requirements set a baseline for auditing specific risk areas such as cybersecurity. When such a topic is in the scope of an engagement, internal auditors apply the requirements together with the Standards rather than treating them as optional guidance.",
      reference: STANDARDS,
    },

    /* ── Section C: Quality of the Internal Audit Function (15%) ─────────── */
    {
      id: "cia3-d3-eqa",
      domain: "d3",
      objective: "C.1 Describe the required elements of the quality assurance and improvement program",
      difficulty: "foundation",
      question:
        "Under the Global Internal Audit Standards, how often must an external quality assessment of the internal audit function be performed at a minimum?",
      options: [
        { id: "A", text: "At least once every five years", rationale: "Correct. Standard 8.4 requires an external quality assessment at least once every five years by a qualified, independent assessor or team." },
        { id: "B", text: "Every year", rationale: "Annual assessments are not required; ongoing monitoring and periodic self-assessments cover the years in between." },
        { id: "C", text: "Only when the board requests one", rationale: "External assessments are a requirement, not merely at the board's discretion." },
        { id: "D", text: "Every ten years", rationale: "This is longer than the maximum interval the Standards allow." },
      ],
      answer: "A",
      explanation:
        "The quality programme combines internal assessments (ongoing monitoring and periodic self-assessments) with external assessments. The Standards also require at least one assessor to hold an active CIA designation.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d3-nonconformance",
      domain: "d3",
      objective: "C.2 Identify appropriate disclosure of nonconformance with The IIA's Global Internal Audit Standards",
      difficulty: "intermediate",
      question:
        "An external quality assessment found that the internal audit function does not conform with the Standards in several areas that affect its overall operations. Since then, its reports have continued to state that work was performed \"in conformance with the Global Internal Audit Standards\". What is the issue?",
      options: [
        { id: "A", text: "There is no issue, because the statement refers to the function's intention", rationale: "A conformance statement must be supported by the results of the quality programme, not intentions." },
        { id: "B", text: "Only the external assessor is allowed to use the conformance statement", rationale: "The internal audit function may use the statement when it is supported by quality assessment results." },
        { id: "C", text: "The function should stop using the conformance statement, and the chief audit executive should disclose the nonconformance and its impact to the board and senior management", rationale: "Correct. Claiming conformance is only appropriate when supported by quality assessment results; nonconformance that affects the function must be disclosed." },
        { id: "D", text: "The statement is acceptable if a footnote mentions that procedures are under review", rationale: "A vague footnote does not disclose the nature and impact of the nonconformance." },
      ],
      answer: "C",
      explanation:
        "The syllabus treats disclosure of nonconformance as a distinct topic. Honest reporting of where the function falls short, and of its impact, protects the credibility of all internal audit work.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d3-kpis",
      domain: "d3",
      objective: "C.3 Recognize practical methods for establishing internal audit key performance indicators or scorecard metrics that the chief audit executive communicates to senior management and the board",
      difficulty: "intermediate",
      question:
        "Which performance measure best shows the board how effectively internal audit contributes to improving controls?",
      options: [
        { id: "A", text: "The number of pages in each audit report", rationale: "Report length says nothing about effectiveness or impact." },
        { id: "B", text: "The percentage of agreed action plans implemented by their due date", rationale: "Correct. This outcome measure links internal audit's work to actual improvements in the organisation." },
        { id: "C", text: "The total number of photocopies made by the function", rationale: "This is an irrelevant activity measure." },
        { id: "D", text: "The number of hours internal auditors spend in the office", rationale: "Input measures like attendance do not show contribution to improvement." },
      ],
      answer: "B",
      explanation:
        "Good internal audit scorecards balance efficiency (plan completion, cycle time), quality (stakeholder feedback, assessment results) and impact (implemented actions). Measures should be agreed with the board and reported regularly.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d3-ongoing-monitoring",
      domain: "d3",
      objective: "C.1 Describe the required elements of the quality assurance and improvement program",
      difficulty: "foundation",
      question:
        "Which activity is an example of ongoing monitoring within the internal audit function's quality assurance and improvement program?",
      options: [
        { id: "A", text: "An assessment of the function by a qualified, independent team from outside the organisation", rationale: "This describes an external quality assessment, not ongoing monitoring." },
        { id: "B", text: "The external auditor's annual audit of the organisation's financial statements", rationale: "The financial statement audit is not part of internal audit's quality programme." },
        { id: "C", text: "A self-assessment of the whole function carried out by internal audit staff every two years", rationale: "This is a periodic self-assessment, the other component of internal assessments." },
        { id: "D", text: "Supervisory review of engagement work papers and draft reports before they are issued", rationale: "Correct. Ongoing monitoring is built into the routine work of the function, for example through engagement supervision, checklists and stakeholder feedback." },
      ],
      answer: "D",
      explanation:
        "Internal assessments under Standard 12.1 consist of ongoing monitoring and periodic self-assessments, and their results are communicated to the board and senior management. External quality assessments complete the programme.",
      reference: STANDARDS,
    },

    /* ── Section D: Engagement Results and Monitoring (45%) ───────────────── */
    {
      id: "cia3-d4-attributes",
      domain: "d4",
      objective: "D.1 Recognize attributes of effective engagement results communication",
      difficulty: "foundation",
      question:
        "A draft report contains a finding that overstates the number of exceptions because a test was miscounted. Which quality of effective communication does this most directly fail?",
      options: [
        { id: "A", text: "Conciseness", rationale: "Conciseness concerns avoiding unnecessary detail, not factual errors." },
        { id: "B", text: "Timeliness", rationale: "Timeliness concerns when results are communicated." },
        { id: "C", text: "Constructiveness", rationale: "Constructiveness concerns whether communication is helpful and leads to improvement." },
        { id: "D", text: "Accuracy", rationale: "Correct. Accurate communications are free from errors and distortions and faithful to the underlying facts." },
      ],
      answer: "D",
      explanation:
        "Effective engagement communications are accurate, objective, clear, concise, constructive, complete and timely. If a final communication contains a significant error or omission, the chief audit executive must communicate corrected information promptly to all parties who received the original (Standard 11.4).",
      reference: STANDARDS,
    },
    {
      id: "cia3-d4-recommendation-or-plan",
      domain: "d4",
      objective: "D.3 Determine whether to develop recommendations, request action plans from management, or collaborate with management to agree on actions",
      difficulty: "intermediate",
      question:
        "Internal audit finds a complex weakness in a production planning process where management has deep technical knowledge and several valid solutions exist. What is usually the most effective way to address it?",
      options: [
        { id: "A", text: "Collaborate with management to agree on actions that address the root cause", rationale: "Correct. Where management is best placed to design the solution, internal audit can work with them to agree actions that address the root cause." },
        { id: "B", text: "Design and implement the new process for management", rationale: "Implementing the solution would make internal audit responsible for management's process and impair objectivity." },
        { id: "C", text: "Issue the finding with no recommendation or action", rationale: "Findings should lead to recommendations or agreed actions." },
        { id: "D", text: "Escalate the finding directly to the board before discussing it with management", rationale: "Escalation is used when management does not act; discussion with management comes first." },
      ],
      answer: "A",
      explanation:
        "The syllabus distinguishes three routes: internal audit recommends, management proposes an action plan, or both collaborate. The choice depends on the issue's complexity and who has the expertise, while management keeps ownership of the solution.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d4-rating-scale",
      domain: "d4",
      objective: "D.5 Describe the chief audit executive's responsibility for assessing residual risk for the engagement",
      difficulty: "intermediate",
      question:
        "What is the main purpose of applying a rating scale (for example satisfactory, needs improvement, unsatisfactory) to an engagement?",
      options: [
        { id: "A", text: "To rank individual auditors by performance", rationale: "Engagement ratings assess the area under review, not the auditors." },
        { id: "B", text: "To replace the detailed findings in the report", rationale: "Ratings summarise the findings; they do not replace them." },
        { id: "C", text: "To express the overall assessment of controls in the area under review in a consistent, comparable way", rationale: "Correct. The syllabus describes rating scales as a way to reflect the overall assessment of controls for the engagement, after findings have been aggregated and prioritised." },
        { id: "D", text: "To determine the auditee's bonus", rationale: "Linking ratings to pay can create pressure on auditors and auditees; it is not their purpose." },
      ],
      answer: "C",
      explanation:
        "Assessing residual risk for an engagement means aggregating and prioritising the findings and then expressing an overall view. A consistent rating scale lets the board compare results across engagements.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d4-risk-acceptance",
      domain: "d4",
      objective: "D.6 Describe the process for communicating risk acceptance (when management has accepted a level of risk that may be unacceptable to the organization)",
      difficulty: "advanced",
      question:
        "Management decides not to fix a critical access control weakness, and the chief audit executive believes the remaining risk exceeds the organisation's risk tolerance. What is the correct sequence?",
      options: [
        { id: "A", text: "Report the matter to the external regulator immediately", rationale: "External reporting is not the first step and depends on law and organisational policy." },
        { id: "B", text: "Discuss the matter with senior management, and if it is not resolved, communicate it to the board", rationale: "Correct. The chief audit executive first discusses the risk acceptance with senior management and escalates to the board only if the matter remains unresolved." },
        { id: "C", text: "Accept management's decision because risk acceptance is always management's prerogative", rationale: "Management may accept risk, but not silently beyond the organisation's tolerance; the chief audit executive has an obligation to communicate." },
        { id: "D", text: "Fix the weakness using internal audit staff", rationale: "Remediation is management's responsibility; doing it would impair objectivity." },
      ],
      answer: "B",
      explanation:
        "The syllabus asks you to recognise the method for deciding whether a risk is unacceptable, the parties involved and the proper sequence of steps. Standard 11.5 requires the chief audit executive to discuss the matter with senior management and, if it is not resolved, to escalate it to the board.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d4-follow-up",
      domain: "d4",
      objective: "D.7 Describe the process for monitoring and confirming the implementation of management action plans",
      difficulty: "foundation",
      question:
        "Management reports that all actions from last year's procurement audit have been completed. What should internal audit do for the high-risk actions?",
      options: [
        { id: "A", text: "Confirm implementation with appropriate evidence, for example by retesting the controls", rationale: "Correct. For significant actions, internal audit confirms implementation with evidence rather than relying solely on management's self-reporting." },
        { id: "B", text: "Close them on management's word, because management owns the actions", rationale: "Self-reporting alone may be acceptable for low-risk items but is weak evidence for high-risk ones." },
        { id: "C", text: "Ignore them until the next full audit in three years", rationale: "Monitoring of action plans should be timely, not left to the next cycle." },
        { id: "D", text: "Ask the external auditor to confirm implementation", rationale: "Follow-up is internal audit's responsibility." },
      ],
      answer: "A",
      explanation:
        "Internal audit must monitor and confirm that agreed actions are implemented. The depth of follow-up should reflect the risk: higher-risk actions call for stronger evidence, such as retesting.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d4-escalation",
      domain: "d4",
      objective: "D.8 Describe the escalation process if management has not adequately implemented an action plan",
      difficulty: "intermediate",
      question:
        "An action plan for a significant finding is nine months overdue, and the responsible manager keeps postponing it without explanation. What should internal audit do?",
      options: [
        { id: "A", text: "Remove the action from the tracking list to keep the statistics clean", rationale: "This hides the issue and misleads stakeholders." },
        { id: "B", text: "Implement the action itself", rationale: "Implementation is management's responsibility." },
        { id: "C", text: "Wait for the manager to complete it whenever possible", rationale: "Indefinite waiting leaves a significant risk unaddressed." },
        { id: "D", text: "Escalate to the manager's senior management and, if still unresolved, report the status to the board", rationale: "Correct. Escalation follows the organisation's hierarchy, ending with the board when significant actions remain unimplemented." },
      ],
      answer: "D",
      explanation:
        "Agreeing the escalation steps in advance, for example in the internal audit methodology, avoids disputes when an action is overdue. Regular reporting of overdue actions to the board keeps pressure on timely remediation.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d4-finding-elements",
      domain: "d4",
      objective: "D.2 Demonstrate effective communication of engagement results",
      difficulty: "foundation",
      question:
        "A draft finding states that 12 of 40 supplier changes were not independently approved, contrary to the procurement policy. It says nothing about why this happened or what it could lead to. Which elements of the finding are missing?",
      options: [
        { id: "A", text: "Criteria and condition", rationale: "The policy (criteria) and the 12 unapproved changes (condition) are already described." },
        { id: "B", text: "Cause and effect", rationale: "Correct. The finding does not explain why the condition exists (cause) or the risk or impact it creates (effect)." },
        { id: "C", text: "Objectives and scope", rationale: "These describe the engagement as a whole, not the elements of an individual finding." },
        { id: "D", text: "Rating and opinion", rationale: "Findings are prioritised by significance, but the gaps the stem describes are the reason for the condition and its consequences; an opinion relates to the engagement as a whole." },
      ],
      answer: "B",
      explanation:
        "A well-developed finding sets out the criteria, the condition, the cause and the effect. Identifying the root cause is what allows management to design actions that prevent the problem from recurring.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d4-closing-discussion",
      domain: "d4",
      objective: "D.4 Describe the engagement closing communication and reporting process",
      difficulty: "foundation",
      question:
        "What is the main purpose of discussing the draft findings with management before the final engagement communication is issued?",
      options: [
        { id: "A", text: "To let management decide which findings are included in the final communication", rationale: "Management may comment, but internal audit decides what is reported." },
        { id: "B", text: "To obtain management's formal approval of internal audit's engagement conclusion", rationale: "The engagement conclusion is internal audit's judgement and does not require management approval." },
        { id: "C", text: "To confirm the facts, understand management's view and agree on actions before finalising", rationale: "Correct. The closing discussion helps ensure accuracy, avoids surprises and gives management the chance to agree on action plans." },
        { id: "D", text: "To meet a formality, since the report cannot be changed after the draft stage", rationale: "Discussion can lead to corrections where management provides valid new information." },
      ],
      answer: "C",
      explanation:
        "Closing discussions give management the opportunity to correct misunderstandings and to commit to actions with owners and due dates. Internal audit keeps responsibility for the content of the final communication.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d4-distribution",
      domain: "d4",
      objective: "D.4 Describe the engagement closing communication and reporting process",
      difficulty: "intermediate",
      question:
        "Who is responsible for deciding who receives the final engagement communication?",
      options: [
        { id: "A", text: "The chief audit executive, who distributes it to the parties who can ensure the results receive due consideration", rationale: "Correct. The chief audit executive reviews and approves the final communication and decides on its distribution." },
        { id: "B", text: "The manager of the audited area, who decides which colleagues and committees need a copy", rationale: "The auditee receives the communication but does not control its distribution." },
        { id: "C", text: "Anyone who asks for it, including external parties, because transparency improves accountability", rationale: "Distribution outside the organisation must follow organisational policy and any legal requirements." },
        { id: "D", text: "The board only, because senior management should not receive internal audit reports", rationale: "Senior management and the responsible managers normally need the results to act on them." },
      ],
      answer: "A",
      explanation:
        "The chief audit executive approves final engagement communications and sends them to those who can act on the results. Release to parties outside the organisation requires care, and organisational policies and legal requirements must be followed.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d4-disagreement",
      domain: "d4",
      objective: "D.3 Determine whether to develop recommendations, request action plans from management, or collaborate with management to agree on actions",
      difficulty: "advanced",
      question:
        "Management disagrees with a significant finding, but internal audit has sufficient evidence to support it. After discussions fail to resolve the disagreement, what should the final communication do?",
      options: [
        { id: "A", text: "Omit the finding so that the relationship with management is not damaged", rationale: "Removing a supported, significant finding would make the communication incomplete and mislead the board." },
        { id: "B", text: "Soften the wording repeatedly until management is willing to accept the finding", rationale: "Changing the substance to win agreement compromises the objectivity and accuracy of the communication." },
        { id: "C", text: "Be held back until management and internal audit reach full agreement", rationale: "Indefinite delay fails the timeliness attribute and leaves the risk uncommunicated." },
        { id: "D", text: "Include the finding and management's position, with the reasons internal audit's conclusion stands", rationale: "Correct. When disagreement cannot be resolved, both positions and the reasons for them are stated so that readers have the full picture." },
      ],
      answer: "D",
      explanation:
        "Internal auditors should try to resolve disagreements through discussion, but they cannot give up a well-supported finding. Stating both views in the final communication respects management while preserving the integrity of internal audit's work.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d4-aggregation",
      domain: "d4",
      objective: "D.5 Describe the chief audit executive's responsibility for assessing residual risk for the engagement",
      difficulty: "advanced",
      question:
        "An engagement produces several findings rated low on their own, but all of them stem from the same weakness in periodic user access reviews. How should they be treated when assessing the engagement's overall result?",
      options: [
        { id: "A", text: "Rate each finding in isolation and treat the area as satisfactory because none is significant", rationale: "Assessing findings only individually can hide a pattern that represents a significant risk." },
        { id: "B", text: "Report only the single largest finding and drop the others as repetitive", rationale: "Dropping related findings removes the evidence that shows the extent of the weakness." },
        { id: "C", text: "Aggregate the related findings and consider whether together they indicate a more significant risk", rationale: "Correct. Related findings are aggregated and prioritised, and their combined significance can affect the overall rating." },
        { id: "D", text: "Move them to an informal memo so that they do not affect the engagement rating", rationale: "Reporting outside the formal communication to protect a rating would mislead readers." },
      ],
      answer: "C",
      explanation:
        "Assessing residual risk involves looking at findings collectively as well as individually. A common root cause behind many small exceptions often signals a control weakness that deserves a higher priority.",
      reference: SYLLABUS,
    },
    {
      id: "cia3-d4-objectivity",
      domain: "d4",
      objective: "D.1 Recognize attributes of effective engagement results communication",
      difficulty: "intermediate",
      question:
        "A draft report describes the warehouse team as \"careless and indifferent to controls\" and focuses on blame rather than on the facts of the stock count exceptions. Which attribute of effective communication is most clearly lacking?",
      options: [
        { id: "A", text: "Completeness", rationale: "Completeness concerns whether all information needed by readers is included." },
        { id: "B", text: "Objectivity", rationale: "Correct. Objective communications are fair, impartial and unbiased, and based on a balanced assessment of the facts." },
        { id: "C", text: "Timeliness", rationale: "Timeliness concerns when the communication is issued, not its tone." },
        { id: "D", text: "Conciseness", rationale: "Conciseness concerns avoiding unnecessary detail and repetition." },
      ],
      answer: "B",
      explanation:
        "Emotive or blaming language undermines the credibility of the report and the relationship with management. Communications should describe conditions factually and focus on causes, effects and improvements.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d4-tracking",
      domain: "d4",
      objective: "D.7 Describe the process for monitoring and confirming the implementation of management action plans",
      difficulty: "intermediate",
      question:
        "Which practice best supports internal audit in monitoring the implementation of management action plans across the organisation?",
      options: [
        { id: "A", text: "Keep a tracking system of actions, owners and due dates, and report status and overdue items to the board", rationale: "Correct. A structured tracking process, with periodic reporting to senior management and the board, makes monitoring systematic and visible." },
        { id: "B", text: "Wait for auditees to say that their actions are complete before recording any status", rationale: "Passive reliance on auditees means delays and overdue actions go unnoticed." },
        { id: "C", text: "Track only actions from engagements rated unsatisfactory and close all others at once", rationale: "Agreed actions should be monitored regardless of the overall rating, with effort scaled to risk." },
        { id: "D", text: "Leave the tracking of action plans to the external auditor during its annual audit", rationale: "Monitoring the implementation of internal audit's agreed actions is internal audit's responsibility." },
      ],
      answer: "A",
      explanation:
        "Standard 15.2 requires internal auditors to confirm that management has implemented the recommendations or action plans, following an established methodology that includes inquiring about progress, performing risk-based follow-up assessments and updating the status of actions in a tracking system. Recording owners and due dates provides the basis for follow-up and for reporting to the board.",
      reference: STANDARDS,
    },
    {
      id: "cia3-d4-risk-tolerance",
      domain: "d4",
      objective: "D.6 Describe the process for communicating risk acceptance (when management has accepted a level of risk that may be unacceptable to the organization)",
      difficulty: "intermediate",
      question:
        "Management has decided not to act on a finding about weak segregation of duties in payments. How should the chief audit executive determine whether the risk management has accepted may be unacceptable to the organisation?",
      options: [
        { id: "A", text: "Rely on the personal judgement of the auditor in charge, without reference to any framework", rationale: "An unsupported personal view is hard to defend when the matter is escalated." },
        { id: "B", text: "Check whether the external auditor has also reported the same weakness this year", rationale: "The external auditor's view may be relevant, but it does not define the organisation's tolerance for risk." },
        { id: "C", text: "Compare the cost of fixing the weakness with the size of the internal audit budget", rationale: "Internal audit's budget has nothing to do with whether the organisation can accept the risk." },
        { id: "D", text: "Compare the residual risk with the risk appetite and tolerance set by the board and senior management", rationale: "Correct. Whether a risk is unacceptable is judged against the organisation's own risk appetite, tolerance and risk management policies." },
      ],
      answer: "D",
      explanation:
        "The syllabus expects candidates to know how to decide whether accepted risk is unacceptable and who is involved. Using the organisation's risk appetite and risk management framework gives the chief audit executive an objective basis for discussing the matter with senior management and, if needed, the board.",
      reference: STANDARDS,
    },
  ],
};
