import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CIA Part 3 sample questions — ORIGINAL questions written by CertRamp for
 * The IIA's 2025 CIA Part 3 syllabus. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const SYLLABUS = {
  label: "The IIA — CIA Part 3 syllabus (Internal Audit Function)",
  url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-3-syllabus.pdf",
};
const STANDARDS = {
  label: "The IIA — Global Internal Audit Standards",
  url: "https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/",
};

export const ciaPart3Questions: PracticeQuestionSet = {
  slug: "cia-part-3",
  intro:
    "15 original CIA Part 3 practice questions across the four sections of The IIA's 2025 syllabus (Internal Audit Function), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CIA Part 3 Practice Questions with Answers (2026)",
    description:
      "15 free, original CIA Part 3 practice questions on internal audit operations, the audit plan, quality, reporting and follow-up — each with a full explanation.",
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
        "Effective engagement communications are accurate, objective, clear, concise, constructive, complete and timely. If a final communication turns out to contain a significant error or omission, corrected information must be communicated promptly to everyone who received the original.",
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
        "The syllabus asks you to recognise the method for deciding whether a risk is unacceptable, the parties involved and the proper sequence of steps. Senior management comes first; the board is informed when the disagreement cannot be resolved.",
      reference: SYLLABUS,
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
  ],
};
