import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CIA Part 2 sample questions — ORIGINAL questions written by CertRamp for
 * The IIA's 2025 CIA Part 2 syllabus. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const SYLLABUS = {
  label: "The IIA — CIA Part 2 syllabus (Internal Audit Engagement)",
  url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-2-syllabus.pdf",
};
const STANDARDS = {
  label: "The IIA — Global Internal Audit Standards",
  url: "https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/",
};

export const ciaPart2Questions: PracticeQuestionSet = {
  slug: "cia-part-2",
  intro:
    "15 original CIA Part 2 practice questions across the three sections of The IIA's 2025 syllabus (Internal Audit Engagement), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CIA Part 2 Practice Questions with Answers (2026)",
    description:
      "15 free, original CIA Part 2 practice questions on engagement planning, evidence, data analytics, findings and supervision — each with a full explanation.",
  },
  questions: [
    /* ── Section A: Engagement Planning (50%) ─────────────────────────────── */
    {
      id: "cia2-d1-objectives-scope",
      domain: "d1",
      objective: "A.1 Determine engagement objectives and scope",
      difficulty: "foundation",
      question:
        "Which statement is an example of engagement scope rather than an engagement objective?",
      options: [
        { id: "A", text: "To determine whether payroll controls ensure that only valid employees are paid", rationale: "This states what the engagement aims to achieve, so it is an objective." },
        { id: "B", text: "To evaluate whether overtime payments comply with company policy", rationale: "This is also an objective: it describes what will be evaluated and why." },
        { id: "C", text: "Payroll processing at the two UK sites for the period 1 January to 30 June", rationale: "Correct. Scope sets the boundaries of the engagement — which processes, locations and period are covered." },
        { id: "D", text: "To provide assurance that payroll data is accurate and complete", rationale: "This is an objective expressed as the assurance to be provided." },
      ],
      answer: "C",
      explanation:
        "Objectives say what the engagement is meant to accomplish; scope says what is included and excluded. Scope must be sufficient to achieve the objectives, so the two are set together during planning.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d1-criteria",
      domain: "d1",
      objective: "A.2 Determine evaluation criteria based on relevant information gathered",
      difficulty: "intermediate",
      question:
        "An auditor is planning an engagement on a department that has no documented performance standards. What is the most appropriate way to establish evaluation criteria?",
      options: [
        { id: "A", text: "Use the auditor's personal expectations without discussion", rationale: "Criteria must be appropriate and accepted; unilateral personal standards are hard to defend." },
        { id: "B", text: "Work with management to identify appropriate criteria, such as industry practice or regulatory requirements, and agree them before fieldwork", rationale: "Correct. Where criteria are missing or inadequate, internal auditors identify suitable criteria and discuss them with management." },
        { id: "C", text: "Cancel the engagement because criteria do not exist", rationale: "A lack of documented criteria is itself relevant and does not justify cancelling the engagement." },
        { id: "D", text: "Accept whatever results the department achieves as the criteria", rationale: "This would make every condition conform by definition and produce no meaningful evaluation." },
      ],
      answer: "B",
      explanation:
        "Findings are gaps between criteria and condition, so the engagement depends on sound criteria. Agreeing them with management early reduces disputes when results are communicated.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d1-risk-assessment",
      domain: "d1",
      objective: "A.5 Complete a detailed risk assessment of each activity under review",
      difficulty: "intermediate",
      question:
        "During planning, an auditor rates the risks in the area under review by likelihood and impact and maps the key controls to each risk. What is the main purpose of this step?",
      options: [
        { id: "A", text: "To decide where to focus testing on the most significant risks and key controls", rationale: "Correct. The engagement-level risk assessment drives which areas are tested and how much effort each receives." },
        { id: "B", text: "To replace management's own risk assessment", rationale: "Internal audit considers management's assessment but does not replace it." },
        { id: "C", text: "To prepare the final engagement rating before fieldwork", rationale: "Conclusions can only be reached after evidence has been gathered." },
        { id: "D", text: "To determine the external auditor's materiality", rationale: "Materiality for the financial statement audit is set by the external auditor." },
      ],
      answer: "A",
      explanation:
        "A detailed risk assessment links objectives, risks and controls. It ensures the work programme concentrates resources on what matters most rather than testing everything equally.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d1-work-program",
      domain: "d1",
      objective: "A.6 Determine engagement procedures and prepare the engagement work program",
      difficulty: "foundation",
      question: "What should an engagement work programme document?",
      options: [
        { id: "A", text: "The organisation's strategic plan for the next five years", rationale: "Strategy is an input to planning, not the content of a work programme." },
        { id: "B", text: "The final findings and recommendations", rationale: "Findings come from performing the work and appear in workpapers and communications." },
        { id: "C", text: "The chief audit executive's annual budget", rationale: "Budgeting belongs to managing the function, not to an individual engagement." },
        { id: "D", text: "The procedures for identifying, analysing, evaluating and documenting information during the engagement", rationale: "Correct. The work programme sets out the procedures to be performed to achieve the engagement objectives." },
      ],
      answer: "D",
      explanation:
        "The work programme turns the plan into concrete steps. It should be approved before fieldwork, and later changes should also be approved, so supervisors can see what was planned and what was done.",
      reference: STANDARDS,
    },
    {
      id: "cia2-d1-resources",
      domain: "d1",
      objective: "A.7 Determine the level of resources and skills needed for the engagement",
      difficulty: "intermediate",
      question:
        "An engagement on cloud access management requires technical skills that the assigned team lacks, and the engagement cannot be postponed. What is the most appropriate planning response?",
      options: [
        { id: "A", text: "Reduce the objectives so that nothing technical is tested, without informing stakeholders", rationale: "Narrowing objectives silently leaves the key risks unaddressed and misleads stakeholders." },
        { id: "B", text: "Ask the IT administrators who manage access to perform the testing", rationale: "The people who run the process are not objective about it." },
        { id: "C", text: "Include an internal or external specialist in the team and plan the work and supervision accordingly", rationale: "Correct. Engagement resources must be appropriate and sufficient; specialists can be brought in where the team lacks skills." },
        { id: "D", text: "Proceed and rely on general audit experience", rationale: "Proceeding without the necessary competence risks unreliable conclusions." },
      ],
      answer: "C",
      explanation:
        "Resourcing is part of planning: the right number of people with the right skills, at the right time. Specialists are a normal solution, but the auditor remains responsible for supervising and evaluating their work.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d1-approach",
      domain: "d1",
      objective: "A.4 Determine the appropriate approach for an engagement",
      difficulty: "advanced",
      question:
        "Internal audit must give assurance over two million refund transactions processed in a year by a system with reliable data extracts. Which approach is most appropriate for testing a rule that refunds over £500 need a second approval?",
      options: [
        { id: "A", text: "Use data analytics to test the full population against the rule", rationale: "Correct. With reliable data and a clearly defined rule, testing 100% of transactions gives stronger evidence than a sample and is efficient." },
        { id: "B", text: "Select 25 refunds judgementally and inspect the approvals", rationale: "A small judgemental sample gives limited assurance over such a large population when full testing is feasible." },
        { id: "C", text: "Interview the refunds manager only", rationale: "Inquiry alone is weak evidence and does not test whether the control operated." },
        { id: "D", text: "Rely on the absence of customer complaints", rationale: "Customers would not complain about unauthorised refunds, so this provides no evidence." },
      ],
      answer: "A",
      explanation:
        "Choosing the engagement approach means matching techniques to the objective, the risk and the available data. Rule-based controls over large, well-structured data sets are a classic case for full-population analytics.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d1-key-controls",
      domain: "d1",
      objective: "A.3 Plan the engagement to assess key risks and controls",
      difficulty: "intermediate",
      question:
        "A risk and control matrix lists eight controls over vendor master data. Which control is most likely to be a key control for the risk that payments are made to fictitious suppliers?",
      options: [
        { id: "A", text: "A quarterly newsletter reminding staff of the procurement policy", rationale: "This is a directive control with an indirect effect on the specific risk." },
        { id: "B", text: "Independent verification of new supplier bank details and registration before they are activated in the system", rationale: "Correct. This control acts directly on the risk by stopping fictitious suppliers being set up, so its failure would leave the risk largely unmitigated." },
        { id: "C", text: "Annual satisfaction survey of suppliers", rationale: "Surveys of real suppliers would not reveal fictitious ones." },
        { id: "D", text: "Colour-coding of purchase order printouts", rationale: "This has no meaningful effect on the risk of fictitious suppliers." },
      ],
      answer: "B",
      explanation:
        "Key controls are those that, on their own or together, reduce a significant risk to an acceptable level. Planning focuses testing on key controls rather than on every control listed.",
      reference: SYLLABUS,
    },

    /* ── Section B: Information Gathering, Analysis, and Evaluation (40%) ── */
    {
      id: "cia2-d2-evidence-reliability",
      domain: "d2",
      objective: "B.2 Evaluate the relevance, sufficiency, and reliability of evidence gathered to support engagement objectives",
      difficulty: "foundation",
      question: "Which evidence about a customer's balance is generally the most reliable?",
      options: [
        { id: "A", text: "A verbal statement from the sales manager", rationale: "Oral evidence from inside the organisation is the least reliable form here." },
        { id: "B", text: "A spreadsheet prepared by the accounts receivable clerk", rationale: "Internally prepared documents are more open to error or manipulation." },
        { id: "C", text: "A copy of the invoice held in the company's files", rationale: "Internal documents are less reliable than evidence received directly from an independent source." },
        { id: "D", text: "A confirmation sent by the customer directly to the auditor", rationale: "Correct. Evidence obtained directly by the auditor from an independent external source is generally the most reliable." },
      ],
      answer: "D",
      explanation:
        "Reliability increases when evidence comes from independent sources, is obtained directly by the auditor and is corroborated. Information from well-controlled systems is also more reliable than information from weak ones.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d2-completeness",
      domain: "d2",
      objective: "B.1 Identify sources of information to support engagement objectives and procedures",
      difficulty: "intermediate",
      question:
        "An auditor wants to test whether all goods received at the warehouse have been recorded in inventory. Which procedure is most appropriate?",
      options: [
        { id: "A", text: "Select items from the inventory records and inspect them in the warehouse", rationale: "This tests existence (recorded items are real), not completeness." },
        { id: "B", text: "Select goods received notes and trace them to the inventory records", rationale: "Correct. Tracing from source documents to the records tests whether every receipt has been recorded." },
        { id: "C", text: "Recalculate the total of the inventory listing", rationale: "Recalculation tests arithmetical accuracy, not whether items are missing." },
        { id: "D", text: "Ask the warehouse manager to confirm that all receipts are recorded", rationale: "Inquiry of the responsible manager is weak evidence for this objective." },
      ],
      answer: "B",
      explanation:
        "The direction of testing matters. Start from the records and go to the source to test existence or occurrence; start from the source and go to the records to test completeness.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d2-analytical-review",
      domain: "d2",
      objective: "B.5 Apply analytical review techniques",
      difficulty: "intermediate",
      question:
        "Sales at one branch rose by 4% this year while its accounts receivable rose by 45%, and the other branches show stable relationships. What is the most appropriate next step?",
      options: [
        { id: "A", text: "Conclude that the branch is performing well", rationale: "Rapid receivables growth relative to sales is a warning sign, not evidence of good performance." },
        { id: "B", text: "Ignore the movement because sales grew", rationale: "The relationship between sales and receivables is what makes the movement unusual." },
        { id: "C", text: "Investigate the cause, for example by reviewing ageing, credit notes and recent large sales near year-end", rationale: "Correct. Analytical review identifies unexpected relationships that require follow-up to explain or rule out errors, collection problems or fictitious sales." },
        { id: "D", text: "Report the branch manager for fraud", rationale: "An anomaly is not proof of fraud; it must be investigated before any conclusion is reached." },
      ],
      answer: "C",
      explanation:
        "Ratio and trend analysis show where results differ from expectations. The value lies in the follow-up: obtaining evidence that explains the difference or reveals a problem.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d2-analytics-type",
      domain: "d2",
      objective: "B.4 Apply appropriate analytical approaches and process mapping techniques",
      difficulty: "advanced",
      question:
        "Internal audit wants to scan all journal entries for postings that differ markedly from normal patterns, such as entries at weekends by users who rarely post. Which analytics type is this?",
      options: [
        { id: "A", text: "Anomaly detection", rationale: "Correct. Anomaly detection identifies records that deviate from expected patterns for follow-up." },
        { id: "B", text: "Prescriptive analytics", rationale: "Prescriptive analytics recommends actions to achieve a desired outcome; it is not mainly about finding outliers." },
        { id: "C", text: "Text analysis", rationale: "Text analysis extracts meaning from unstructured text such as emails or contracts." },
        { id: "D", text: "Predictive analytics", rationale: "Predictive analytics forecasts future outcomes from historical data." },
      ],
      answer: "A",
      explanation:
        "The syllabus names diagnostic, predictive, prescriptive, anomaly detection and text analysis. Knowing what question each one answers helps you choose the right technique for an engagement objective.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d2-finding-significance",
      domain: "d2",
      objective: "B.6 Determine whether there is a difference between evaluation criteria and existing conditions and evaluate the significance of each finding",
      difficulty: "intermediate",
      question:
        "Policy requires a signed contract before any supplier is paid. Testing shows that 3 of 60 payments were made before contracts were signed. In the language of findings, what does the 3-of-60 result represent?",
      options: [
        { id: "A", text: "The criteria", rationale: "The criteria are the policy requirement — the expected state." },
        { id: "B", text: "The cause", rationale: "The cause would be why the payments were made early, which is not yet known." },
        { id: "C", text: "The effect", rationale: "The effect is the risk or consequence of the gap, such as paying on disputed terms." },
        { id: "D", text: "The condition", rationale: "Correct. The condition is what the auditor actually found, which is then compared with the criteria." },
      ],
      answer: "D",
      explanation:
        "A finding is a gap between criteria and condition. Auditors then identify the root cause and the effect to judge its significance and to develop a useful recommendation.",
      reference: STANDARDS,
    },
    {
      id: "cia2-d2-workpapers",
      domain: "d2",
      objective: "B.7 Prepare workpapers, including relevant information to support conclusions and engagement results",
      difficulty: "foundation",
      question: "What is the main test of whether engagement workpapers are adequate?",
      options: [
        { id: "A", text: "Another experienced auditor could understand the work performed and reach the same conclusions from them", rationale: "Correct. Documentation must be sufficient for an informed, competent person to repeat the reasoning and support the conclusions." },
        { id: "B", text: "They include a copy of every document the auditee provided", rationale: "Volume does not equal adequacy; workpapers should contain relevant, sufficient evidence, not everything." },
        { id: "C", text: "They have been approved by the auditee's management", rationale: "Auditee approval is not required and would compromise objectivity." },
        { id: "D", text: "They are kept in paper form", rationale: "The medium does not matter; electronic workpapers are common." },
      ],
      answer: "A",
      explanation:
        "Workpapers document the information, analyses and evaluations that support engagement results. The benchmark is that a competent reviewer could follow them and reach the same conclusion.",
      reference: SYLLABUS,
    },

    /* ── Section C: Engagement Supervision and Communication (10%) ────────── */
    {
      id: "cia2-d3-supervision",
      domain: "d3",
      objective: "C.1 Apply appropriate supervision throughout the engagement",
      difficulty: "intermediate",
      question:
        "Which supervisory activity provides the most direct assurance that an engagement's conclusions are supported?",
      options: [
        { id: "A", text: "Approving the staff auditor's holiday dates", rationale: "This is general staff management, not engagement supervision." },
        { id: "B", text: "Reviewing the workpapers to confirm that evidence supports the findings and conclusions before results are communicated", rationale: "Correct. Documented review of workpapers is the core supervisory control over the quality of engagement conclusions." },
        { id: "C", text: "Counting the number of hours charged to the engagement", rationale: "Monitoring hours helps budget control but does not show whether conclusions are supported." },
        { id: "D", text: "Asking the auditee whether they agree with the findings", rationale: "Auditee agreement is useful but is not evidence that the work was performed properly." },
      ],
      answer: "B",
      explanation:
        "Supervision runs from planning to communication. Its most important product is evidence that a qualified reviewer checked the work and the support for the conclusions.",
      reference: SYLLABUS,
    },
    {
      id: "cia2-d3-escalation",
      domain: "d3",
      objective: "C.2 Apply appropriate communication with stakeholders throughout the engagement",
      difficulty: "advanced",
      question:
        "Midway through fieldwork an auditor discovers that customer personal data has been publicly accessible for weeks. The engagement report is not due for another month. What is the most appropriate action?",
      options: [
        { id: "A", text: "Wait and include the issue in the final engagement report", rationale: "Waiting a month allows serious harm to continue; significant issues should be communicated promptly." },
        { id: "B", text: "Fix the access settings personally", rationale: "Taking over management's responsibility would impair objectivity and may not follow change procedures." },
        { id: "C", text: "Inform the engagement supervisor and promptly communicate the issue to the appropriate management, escalating further if needed", rationale: "Correct. The syllabus covers identifying when escalation is needed during the engagement; urgent, significant issues should not wait for the final report." },
        { id: "D", text: "Post a warning on the company intranet", rationale: "Broad disclosure is inappropriate and could breach confidentiality." },
      ],
      answer: "C",
      explanation:
        "Communication happens throughout the engagement, not only at the end. Significant, time-sensitive issues are raised promptly with management and, where necessary, with senior management or the board.",
      reference: SYLLABUS,
    },
  ],
};
