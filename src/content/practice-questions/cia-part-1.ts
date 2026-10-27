import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CIA Part 1 sample questions — ORIGINAL questions written by CertRamp for
 * The IIA's 2025 CIA Part 1 syllabus. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const SYLLABUS = {
  label: "The IIA — CIA Part 1 syllabus (Internal Audit Fundamentals)",
  url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-1-syllabus.pdf",
};
const STANDARDS = {
  label: "The IIA — Global Internal Audit Standards",
  url: "https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/",
};

export const ciaPart1Questions: PracticeQuestionSet = {
  slug: "cia-part-1",
  intro:
    "15 original CIA Part 1 practice questions across the four sections of The IIA's 2025 syllabus (Internal Audit Fundamentals), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CIA Part 1 Practice Questions with Answers (2026)",
    description:
      "15 free, original CIA Part 1 practice questions on the Global Internal Audit Standards, ethics, governance, risk, control and fraud — each with a full explanation.",
  },
  questions: [
    /* ── Section A: Foundations of Internal Auditing (35%) ────────────────── */
    {
      id: "cia1-d1-assurance-advisory",
      domain: "d1",
      objective: "A.4 Interpret the differences between assurance services and advisory services provided by the internal audit function",
      difficulty: "foundation",
      question:
        "The head of procurement asks internal audit to help her team design approval steps for a new purchasing system. The nature and scope of the work will be agreed with her, and her team will decide which suggestions to adopt. How should this engagement be classified?",
      options: [
        { id: "A", text: "An assurance engagement, because internal audit evaluates controls", rationale: "Assurance engagements provide an objective assessment to stakeholders, with scope set by internal audit. Here the requester shapes the scope and receives advice." },
        { id: "B", text: "An advisory engagement", rationale: "Correct. The work is requested by management, its nature and scope are agreed with them, and management keeps responsibility for decisions — the hallmarks of an advisory service." },
        { id: "C", text: "A compliance audit", rationale: "Compliance audits assess conformance with laws, regulations or policies. Nothing is being tested against requirements here." },
        { id: "D", text: "A fraud investigation", rationale: "There is no allegation or indication of fraud to investigate." },
      ],
      answer: "B",
      explanation:
        "The key distinction is who sets the scope and who relies on the result. In assurance work internal audit determines the scope and gives an independent conclusion; in advisory work the scope is agreed with the requester and management owns the decisions.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d1-charter",
      domain: "d1",
      objective: "A.3 Recognize the requirements of an internal audit charter",
      difficulty: "foundation",
      question:
        "Which body should approve the internal audit charter under the Global Internal Audit Standards?",
      options: [
        { id: "A", text: "The chief audit executive alone", rationale: "The chief audit executive drafts and maintains the charter but cannot authorise their own function." },
        { id: "B", text: "The external auditor", rationale: "External auditors have no role in authorising the internal audit function." },
        { id: "C", text: "The board", rationale: "Correct. The Standards' principle \"Authorized by the Board\" places approval of the charter, which documents the mandate, with the board." },
        { id: "D", text: "The chief financial officer", rationale: "Senior management is consulted, but approval by a single executive would undermine independence." },
      ],
      answer: "C",
      explanation:
        "The charter sets out the internal audit mandate, the function's position and reporting relationships and the scope of its work. Board approval is what gives the function its authority and protects its independence.",
      reference: STANDARDS,
    },
    {
      id: "cia1-d1-independence",
      domain: "d1",
      objective: "A.7 Identify situations where the independence of the internal audit function may be impaired",
      difficulty: "intermediate",
      question:
        "Which arrangement is most likely to impair the independence of the internal audit function?",
      options: [
        { id: "A", text: "The chief audit executive meets the audit committee in private sessions without management present", rationale: "Private sessions with the board strengthen independence rather than impair it." },
        { id: "B", text: "The chief audit executive reports administratively to the chief executive officer and functionally to the board", rationale: "This dual reporting line is the arrangement the Standards favour." },
        { id: "C", text: "Internal audit has unrestricted access to records, personnel and property", rationale: "Unrestricted access supports independence." },
        { id: "D", text: "The chief financial officer approves the internal audit plan and decides the chief audit executive's pay and appointment", rationale: "Correct. When management whose activities are audited controls the plan, the appointment and the remuneration of the chief audit executive, internal audit's freedom from interference is impaired." },
      ],
      answer: "D",
      explanation:
        "Independence is about the function's position: a direct reporting relationship with the board and freedom from management interference in its plan, resources and conclusions. Board involvement in the plan, appointment and pay of the chief audit executive is a key safeguard.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d1-three-lines",
      domain: "d1",
      objective: "A.8 Recognize the internal audit function's role in the organization's risk management process",
      difficulty: "intermediate",
      question:
        "Under The IIA's Three Lines Model, which role is most appropriate for internal audit in relation to the organisation's risk management?",
      options: [
        { id: "A", text: "Setting the organisation's risk appetite", rationale: "Risk appetite is set by the governing body and senior management, not internal audit." },
        { id: "B", text: "Providing independent and objective assurance and advice on the adequacy and effectiveness of governance and risk management", rationale: "Correct. In the Three Lines Model, internal audit's third-line role is independent assurance and advice; ownership of risk stays with management." },
        { id: "C", text: "Taking ownership of key operational risks and their responses", rationale: "Owning risks is a first-line management responsibility." },
        { id: "D", text: "Implementing risk responses on management's behalf", rationale: "Implementing responses would make internal audit responsible for activities it may later audit." },
      ],
      answer: "B",
      explanation:
        "Management in the first and second lines owns and manages risk. Internal audit supports risk management through assurance and advice, while avoiding management responsibilities that would compromise its objectivity.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d1-purpose",
      domain: "d1",
      objective: "A.1 Describe the Purpose of Internal Auditing according to the Global Internal Audit Standards",
      difficulty: "foundation",
      question:
        "According to the Purpose of Internal Auditing in the Global Internal Audit Standards, what does internal auditing strengthen?",
      options: [
        { id: "A", text: "The organisation's ability to create, protect and sustain value", rationale: "Correct. The Purpose statement opens with this idea, delivered through independent, risk-based and objective assurance, advice, insight and foresight." },
        { id: "B", text: "The accuracy of the external auditor's opinion", rationale: "Internal audit may coordinate with external auditors, but its purpose is not defined by their opinion." },
        { id: "C", text: "Management's ability to avoid all risks", rationale: "Organisations take risks to achieve objectives; avoiding all risk is neither possible nor the aim." },
        { id: "D", text: "The board's ability to delegate oversight to internal audit", rationale: "The board keeps its oversight responsibility; internal audit supports it." },
      ],
      answer: "A",
      explanation:
        "The Purpose statement frames internal auditing in terms of value: strengthening the organisation's ability to create, protect and sustain value. Many Part 1 questions test whether an activity supports that purpose without taking over management's role.",
      reference: STANDARDS,
    },

    /* ── Section B: Ethics and Professionalism (20%) ──────────────────────── */
    {
      id: "cia1-d2-objectivity-12-months",
      domain: "d2",
      objective: "B.2 Assess whether an individual internal auditor has any impairments to objectivity",
      difficulty: "intermediate",
      question:
        "An auditor joined internal audit from the accounts payable department eight months ago, where she supervised supplier payments. The chief audit executive wants to assign her to an assurance engagement on accounts payable. What is the most appropriate response?",
      options: [
        { id: "A", text: "Assign her as planned, since she knows the process best", rationale: "Process knowledge is useful, but it does not remove the presumed impairment." },
        { id: "B", text: "Assign her, but ask her to sign an annual declaration of independence", rationale: "A declaration does not cure a known impairment." },
        { id: "C", text: "Assign a different auditor to the assurance engagement", rationale: "Correct. The Standards presume objectivity is impaired when an auditor provides assurance on an activity they were responsible for within the previous 12 months." },
        { id: "D", text: "Proceed, provided her former manager approves the work programme", rationale: "Involving the auditee's management makes objectivity worse, not better." },
      ],
      answer: "C",
      explanation:
        "Recent responsibility for an activity creates a presumed impairment to objectivity for assurance work. Reassigning the engagement is the cleanest safeguard; she could still contribute to an advisory engagement in the same area if the impairment is disclosed.",
      reference: STANDARDS,
    },
    {
      id: "cia1-d2-confidentiality",
      domain: "d2",
      objective: "B.6 Maintain confidentiality and use information appropriately during engagements",
      difficulty: "foundation",
      question:
        "During an engagement, an auditor learns of an unannounced acquisition that will affect the company's share price. A friend asks whether he should buy shares. What should the auditor do?",
      options: [
        { id: "A", text: "Share only general hints, without naming the target", rationale: "Any use of engagement information for personal or third-party gain breaches confidentiality, hints included." },
        { id: "B", text: "Decline to share the information and not use it for personal gain or to benefit others", rationale: "Correct. Internal auditors must protect information obtained in engagements and must not use it for personal benefit or in a way that harms the organisation." },
        { id: "C", text: "Share it once the engagement report has been issued", rationale: "Issuing the report does not make confidential information public or available for personal use." },
        { id: "D", text: "Report the friend to the board", rationale: "The friend has done nothing wrong; the obligation sits with the auditor." },
      ],
      answer: "B",
      explanation:
        "Confidentiality is one of the five ethics principles of the Standards. It covers both disclosure and use: information gained in an engagement may only be used for the organisation's legitimate purposes.",
      reference: STANDARDS,
    },
    {
      id: "cia1-d2-competency",
      domain: "d2",
      objective: "B.4 Apply the knowledge, skills, and competencies required (whether developed or procured) to fulfill the responsibilities of the internal audit function",
      difficulty: "intermediate",
      question:
        "The audit plan includes an engagement on a complex derivatives trading system, and nobody in the internal audit team has the required expertise. What should the chief audit executive do?",
      options: [
        { id: "A", text: "Remove the engagement from the plan without telling anyone", rationale: "Dropping a planned engagement silently hides a resource gap from the board." },
        { id: "B", text: "Perform the engagement with the existing team and note the limitation in the workpapers only", rationale: "Proceeding without the necessary competence breaches the requirement to perform work competently." },
        { id: "C", text: "Ask the trading desk manager to audit the system", rationale: "The manager is responsible for the activity and is not objective." },
        { id: "D", text: "Obtain the competence, for example through training, a guest auditor or an external specialist, before performing the engagement", rationale: "Correct. The syllabus explicitly covers competencies that are developed or procured; the function must obtain the skills it lacks." },
      ],
      answer: "D",
      explanation:
        "The internal audit function must collectively have, or obtain, the competencies needed for its work. Training, co-sourcing and external specialists are all legitimate ways of filling a gap, and significant resource limitations should be discussed with the board.",
      reference: SYLLABUS,
    },

    /* ── Section C: Governance, Risk Management, and Control (30%) ────────── */
    {
      id: "cia1-d3-residual-risk",
      domain: "d3",
      objective: "C.5 Interpret fundamental concepts of the risk management process",
      difficulty: "foundation",
      question: "What is residual risk?",
      options: [
        { id: "A", text: "The risk that remains after management's response to it", rationale: "Correct. Residual risk is what is left once controls and other responses have been applied." },
        { id: "B", text: "The risk before any action is taken to reduce it", rationale: "That is inherent risk." },
        { id: "C", text: "The amount of risk an organisation is willing to accept in pursuit of its objectives", rationale: "That describes risk appetite." },
        { id: "D", text: "The risk that auditors fail to detect a material error", rationale: "That is a form of audit or detection risk, not residual risk." },
      ],
      answer: "A",
      explanation:
        "Inherent risk minus the effect of management's responses gives residual risk. Management then compares residual risk with risk appetite to decide whether further action is needed.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d3-control-type",
      domain: "d3",
      objective: "C.7 Interpret internal control concepts and types of controls",
      difficulty: "foundation",
      question:
        "Each month, an accountant who does not handle cash compares the bank statement with the cash ledger and investigates any differences. What type of control is this?",
      options: [
        { id: "A", text: "Preventive", rationale: "A preventive control stops an error or irregularity before it occurs. A reconciliation works after the transactions have been recorded." },
        { id: "B", text: "Directive", rationale: "Directive controls such as policies and training encourage desired behaviour; they do not compare records." },
        { id: "C", text: "Detective", rationale: "Correct. A bank reconciliation identifies errors or irregularities after they have occurred so that they can be corrected." },
        { id: "D", text: "Compensating", rationale: "A compensating control makes up for a weakness in another control. Nothing here indicates such a weakness." },
      ],
      answer: "C",
      explanation:
        "Ask when the control acts: before the event (preventive) or afterwards (detective). Using a person independent of cash handling also adds segregation of duties, which strengthens the detective control.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d3-culture",
      domain: "d3",
      objective: "C.2 Recognize the impact of organizational culture on the overall control environment and individual engagement risks and controls",
      difficulty: "intermediate",
      question:
        "Staff in a sales division say that managers praise people who meet targets \"whatever it takes\" and ignore complaints about approval steps being skipped. What is the most significant implication for internal audit?",
      options: [
        { id: "A", text: "Well-designed controls in the division can be relied on, because policies are documented", rationale: "Documented controls can be overridden when the culture tolerates it." },
        { id: "B", text: "The control environment is weak, raising engagement risk and the likelihood of control override", rationale: "Correct. Tone at the top and incentives shape whether controls operate in practice; this culture increases the risk that controls are bypassed." },
        { id: "C", text: "Culture is a human resources matter and outside internal audit's remit", rationale: "Culture is part of the control environment, which internal audit considers in governance and engagement work." },
        { id: "D", text: "Only the sales targets need to be audited", rationale: "The issue is behaviour around controls, not only the targets themselves." },
      ],
      answer: "B",
      explanation:
        "Organisational culture is the foundation of the control environment. Where pressure to perform is combined with tolerance of shortcuts, auditors should raise their assessment of engagement risk and test whether controls actually operate.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d3-governance",
      domain: "d3",
      objective: "C.1 Describe the concept of organizational governance",
      difficulty: "intermediate",
      question: "Which statement best describes the board's role in organisational governance?",
      options: [
        { id: "A", text: "The board runs day-to-day operations and designs internal controls", rationale: "Day-to-day operations and control design are management's responsibilities." },
        { id: "B", text: "The board delegates all oversight to internal audit", rationale: "Internal audit supports oversight but cannot take over the board's accountability." },
        { id: "C", text: "The board's role is limited to approving the annual financial statements", rationale: "This is far too narrow; governance covers strategy, risk and oversight more broadly." },
        { id: "D", text: "The board provides oversight, direction and accountability, while management carries out the strategy and manages risk", rationale: "Correct. Governance divides responsibilities: the board oversees and holds management to account; management executes." },
      ],
      answer: "D",
      explanation:
        "Governance is the combination of processes and structures through which the board directs and oversees the organisation. Internal audit questions often test whether a responsibility belongs to the board, to management or to internal audit.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d3-control-design",
      domain: "d3",
      objective: "C.8 Recognize the importance of the design, effectiveness, and efficiency of internal controls (financial and nonfinancial)",
      difficulty: "advanced",
      question:
        "An auditor finds that every purchase order, including stationery orders under £50, requires three separate approvals, and that orders are delayed by up to two weeks. Testing shows the approvals are always performed. What is the most appropriate conclusion?",
      options: [
        { id: "A", text: "The control is effective but may not be efficient, because its cost and delay appear out of proportion to the risk", rationale: "Correct. The control operates as designed, but efficiency asks whether its cost is justified by the risk it addresses." },
        { id: "B", text: "The control is ineffective because approvals are performed", rationale: "Consistent performance shows the control is operating, not that it is ineffective." },
        { id: "C", text: "The control is poorly designed because there are no approvals", rationale: "The facts state there are three approvals." },
        { id: "D", text: "No observation is needed, because more approvals always reduce risk", rationale: "Excessive controls create costs and delays; internal audit should consider efficiency as well as effectiveness." },
      ],
      answer: "A",
      explanation:
        "Controls are judged on design, effectiveness and efficiency. A control can operate perfectly and still be an observation if its cost or delay is disproportionate to the risk, for example where low-value orders could use a lighter approval threshold.",
      reference: SYLLABUS,
    },

    /* ── Section D: Fraud Risks (15%) ─────────────────────────────────────── */
    {
      id: "cia1-d4-fraud-triangle",
      domain: "d4",
      objective: "D.1 Describe concepts of fraud risks and types of fraud",
      difficulty: "foundation",
      question:
        "An employee with large personal debts realises that nobody reviews the expense claims he approves for his own team. In fraud risk terms, what does the lack of review represent?",
      options: [
        { id: "A", text: "Pressure", rationale: "The personal debts are the pressure (or incentive), not the lack of review." },
        { id: "B", text: "Rationalisation", rationale: "Rationalisation is the justification a person uses to excuse the act, such as \"I will pay it back\"." },
        { id: "C", text: "Opportunity", rationale: "Correct. A weakness in controls, such as missing review, gives the employee the opportunity to commit and conceal fraud." },
        { id: "D", text: "Detection", rationale: "Detection is a control objective, not one of the conditions that make fraud possible." },
      ],
      answer: "C",
      explanation:
        "The fraud triangle describes pressure, opportunity and rationalisation. Organisations have most direct influence over opportunity, which is why control weaknesses are central to fraud risk assessment.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d4-investigation-role",
      domain: "d4",
      objective: "D.5 Recognize techniques and the internal audit function's role related to fraud investigation",
      difficulty: "advanced",
      question:
        "During a routine engagement an auditor finds indicators that a warehouse manager may be stealing inventory. What should the auditor do first?",
      options: [
        { id: "A", text: "Confront the warehouse manager to obtain a confession", rationale: "Confronting a suspect prematurely can compromise evidence, alert other parties and create legal risk." },
        { id: "B", text: "Inform the appropriate level of management and the chief audit executive in line with the organisation's procedures, and consider whether investigation expertise is needed", rationale: "Correct. Suspected fraud must be escalated to the right people, and the investigation should be carried out by people with the necessary skills and authority." },
        { id: "C", text: "Ignore the indicators because detecting fraud is solely management's responsibility", rationale: "Internal auditors must be alert to fraud indicators and act on them, even though they are not expected to have the expertise of a fraud investigator." },
        { id: "D", text: "Report the manager directly to the police", rationale: "External reporting is a decision for the organisation, usually involving legal counsel, not for an individual auditor acting alone." },
      ],
      answer: "B",
      explanation:
        "Internal audit's role is to recognise indicators, escalate them appropriately and support or carry out investigations where it has the competence and mandate. Protecting evidence and following the organisation's fraud response procedures comes before any interview.",
      reference: SYLLABUS,
    },
  ],
};
