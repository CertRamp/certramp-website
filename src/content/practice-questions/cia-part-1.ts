import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CIA Part 1 sample questions: ORIGINAL questions written by CertRamp for
 * The IIA's 2025 CIA Part 1 syllabus. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const SYLLABUS = {
  label: "The IIA: CIA Part 1 syllabus (Internal Audit Fundamentals)",
  url: "https://www.theiia.org/globalassets/site/certifications/certified-internal-auditor/cia-exam-why-how-and-what-is-changing/cia-part-1-syllabus.pdf",
};
const STANDARDS = {
  label: "The IIA: Global Internal Audit Standards",
  url: "https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/",
};
const STANDARDS_TEXT = {
  label: "The IIA: Global Internal Audit Standards (full text, PDF)",
  url: "https://www.theiia.org/globalassets/site/standards/globalinternalauditstandards_2024january9_printable.pdf",
};

export const ciaPart1Questions: PracticeQuestionSet = {
  slug: "cia-part-1",
  intro:
    "30 original CIA Part 1 practice questions across the four sections of The IIA's 2025 syllabus (Internal Audit Fundamentals), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-11-11",
  seo: {
    title: "CIA Part 1 Practice Questions with Answers (2026)",
    description:
      "30 free, original CIA Part 1 practice questions on the Global Internal Audit Standards, ethics, governance, risk, control and fraud, each with a full explanation.",
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
        { id: "B", text: "An advisory engagement", rationale: "Correct. The work is requested by management, its nature and scope are agreed with them, and management keeps responsibility for decisions: the hallmarks of an advisory service." },
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
    {
      id: "cia1-d1-plan-resource-gap",
      domain: "d1",
      objective: "A.2 Explain the internal audit mandate and responsibilities of the board and chief audit executive",
      difficulty: "intermediate",
      question:
        "While preparing the annual internal audit plan, the chief audit executive concludes that a high-risk cybersecurity area cannot be covered with the current budget and staff. What should the chief audit executive do?",
      options: [
        { id: "A", text: "Leave the area out of the plan and revisit it next year if the budget allows", rationale: "Omitting a high-risk area without telling the board hides the gap from the body that approves the plan and resources." },
        { id: "B", text: "Communicate the resource limitation and the reason for omitting the high-risk assurance to the board and senior management", rationale: "Correct. The Standards require the chief audit executive to communicate resource limitations and the reasons for omitting high-risk assurance, so the board can approve the plan and help remedy the shortfall." },
        { id: "C", text: "Ask the IT department to complete a self-assessment and report it as internal audit assurance", rationale: "A management self-assessment can be useful information, but presenting it as internal audit assurance would be misleading." },
        { id: "D", text: "Reduce the scope of every other engagement in the plan equally so that the cybersecurity area can still be squeezed in", rationale: "Cutting all engagements without board discussion changes the risk coverage the board approved and may leave other high risks under-audited." },
      ],
      answer: "B",
      explanation:
        "The board approves the internal audit plan and is responsible, together with senior management, for providing adequate resources. The chief audit executive's duty is to make resource gaps and their impact visible so the board can decide how to respond.",
      reference: STANDARDS_TEXT,
    },
    {
      id: "cia1-d1-assurance-operational",
      domain: "d1",
      objective: "A.5 Describe the types of assurance services performed by the internal audit function",
      difficulty: "foundation",
      question:
        "Internal audit plans an engagement to evaluate whether the vehicle fleet maintenance process uses staff, parts and workshop time efficiently and achieves its service targets. The conclusion will be reported to the board. Which type of assurance engagement is this?",
      options: [
        { id: "A", text: "A financial audit", rationale: "A financial audit focuses on the reliability of financial information and reporting, not on how efficiently a process uses resources." },
        { id: "B", text: "A compliance audit", rationale: "A compliance audit tests adherence to laws, regulations, contracts or policies. The criteria here are efficiency and service targets." },
        { id: "C", text: "An advisory engagement on process design", rationale: "The engagement gives an independent conclusion to the board, which makes it assurance rather than advice." },
        { id: "D", text: "An operational (performance) audit", rationale: "Correct. Operational audits assess the efficiency and effectiveness of operations and whether objectives are achieved." },
      ],
      answer: "D",
      explanation:
        "Assurance engagements are often classified by the subject and criteria: financial, compliance, operational or performance, and IT. When the question is whether a process uses resources well and meets its targets, the engagement is operational.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d1-advisory-training",
      domain: "d1",
      objective: "A.6 Describe the types of advisory services performed by the internal audit function",
      difficulty: "foundation",
      question:
        "Which of the following is an example of an advisory service rather than an assurance service?",
      options: [
        { id: "A", text: "Facilitating a risk workshop that management requested for a planned system migration", rationale: "Correct. Facilitation and training requested by management, with the team keeping ownership of the results, is a typical advisory service." },
        { id: "B", text: "Issuing a conclusion to the board on whether payroll controls operated effectively throughout the financial year", rationale: "An independent conclusion on control effectiveness for the board is assurance." },
        { id: "C", text: "Testing whether branches comply with the anti-money laundering policy", rationale: "Testing adherence to a policy against defined criteria is a compliance assurance engagement." },
        { id: "D", text: "Evaluating the reliability of the data used in the quarterly management report", rationale: "Evaluating information against criteria to give confidence to stakeholders is assurance." },
      ],
      answer: "A",
      explanation:
        "The Standards define advisory services as advice to stakeholders without providing assurance or taking on management responsibilities. Facilitation, training and advice on design are common forms; the requester decides what to do with the output.",
      reference: STANDARDS_TEXT,
    },
    {
      id: "cia1-d1-ongoing-nonaudit-role",
      domain: "d1",
      objective: "A.7 Identify situations where the independence of the internal audit function may be impaired",
      difficulty: "advanced",
      question:
        "The board asks the chief audit executive to take permanent responsibility for the organisation's regulatory compliance function, which is also in internal audit's scope. Which response is most consistent with the Global Internal Audit Standards?",
      options: [
        { id: "A", text: "Decline the role, because the Standards prohibit a chief audit executive from holding any responsibility beyond internal auditing", rationale: "The Standards do not prohibit nonaudit roles; they require safeguards when such roles could impair independence." },
        { id: "B", text: "Accept the role and continue auditing compliance with the internal audit team, since the board has approved the arrangement", rationale: "Board approval does not remove the impairment; internal audit cannot give objective assurance over work its own leader is responsible for." },
        { id: "C", text: "Document the responsibilities and safeguards in the charter and establish an alternative way to obtain assurance over compliance, such as an objective external provider reporting to the board", rationale: "Correct. For ongoing nonaudit roles, the charter must document the responsibilities, the nature of the work and the safeguards, and alternative assurance processes must be set up for areas subject to internal auditing." },
        { id: "D", text: "Accept the role and disclose it only in the next external quality assessment", rationale: "Impairments and safeguards must be discussed with the board when the role is assigned and confirmed at least annually, not left for a periodic external review." },
      ],
      answer: "C",
      explanation:
        "A chief audit executive with ongoing operational responsibilities cannot be independent of them. The Standards allow such roles with documented safeguards, and assurance over those areas must come from a provider who is objective about them.",
      reference: STANDARDS_TEXT,
    },
    {
      id: "cia1-d1-temporary-nonaudit-role",
      domain: "d1",
      objective: "A.7 Identify situations where the independence of the internal audit function may be impaired",
      difficulty: "advanced",
      question:
        "The chief audit executive agrees to lead the treasury function for six months while a new treasurer is recruited. How should assurance over treasury be obtained?",
      options: [
        { id: "A", text: "From an independent third party, during the assignment and for 12 months afterwards", rationale: "Correct. For temporary nonaudit roles, the Standards require assurance from an independent third party during the assignment and for the following 12 months, plus a plan to hand the responsibilities back to management." },
        { id: "B", text: "From the internal audit team, as long as the chief audit executive does not review the workpapers", rationale: "Staff who report to the chief audit executive are not objective about an area that the chief audit executive runs." },
        { id: "C", text: "From the internal audit team once the six-month assignment has ended", rationale: "The impairment continues after the role ends; the Standards extend independent assurance for 12 months after the assignment." },
        { id: "D", text: "From the new treasurer's own review of the previous six months", rationale: "A management review is a first-line activity and is not independent assurance." },
      ],
      answer: "A",
      explanation:
        "Running an area, even temporarily, impairs internal audit's independence over it. The 12-month window after the assignment mirrors the presumption used for individual auditors who move from an operational role into internal audit.",
      reference: STANDARDS_TEXT,
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
        { id: "B", text: "Assign her, but ask her to sign an annual declaration of objectivity", rationale: "A declaration does not cure a known impairment." },
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
    {
      id: "cia1-d2-integrity-rating-pressure",
      domain: "d2",
      objective: "B.1 Demonstrate integrity",
      difficulty: "intermediate",
      question:
        "At the closing meeting, a senior manager asks the auditor to lower a finding from \"high\" to \"medium\" because a high rating would affect his team's bonus. He offers no new evidence. The evidence supports a high rating. What should the auditor do?",
      options: [
        { id: "A", text: "Lower the rating, since the manager knows the business impact better than internal audit", rationale: "Management input is valuable when it brings new facts, but a bonus is not evidence about the severity of the issue." },
        { id: "B", text: "Remove the finding from the report and raise it verbally instead", rationale: "Dropping a supported finding from the report would make the communication misleading." },
        { id: "C", text: "Lower the rating to medium as requested, but add a footnote to the report stating that management disagreed with the original rating", rationale: "Changing the conclusion to suit management while documenting the disagreement still misstates the auditor's assessment." },
        { id: "D", text: "Keep the supported rating, consider any new facts he provides, and escalate under the function's procedures if pressure continues", rationale: "Correct. Integrity requires honesty and professional courage: auditors must not make misleading statements and must report conclusions the evidence supports, even when they are unwelcome." },
      ],
      answer: "D",
      explanation:
        "Standard 1.1 requires honesty and professional courage. Auditors should stay open to new information, but changing a supported conclusion because of pressure or personal consequences for the auditee would breach integrity.",
      reference: STANDARDS_TEXT,
    },
    {
      id: "cia1-d2-rotation-familiarity",
      domain: "d2",
      objective: "B.3 Analyze policies that promote objectivity and potential options to mitigate impairments",
      difficulty: "intermediate",
      question:
        "The same senior auditor has led the annual audit of the procurement department for six years and has become close friends with the procurement director. Which policy would best mitigate the threat to objectivity?",
      options: [
        { id: "A", text: "Requiring the auditor to sign an annual conflict of interest declaration", rationale: "Declarations help identify impairments, but on their own they do not reduce a familiarity threat that is already known." },
        { id: "B", text: "Allowing the procurement director to comment on the draft work programme", rationale: "Auditee input on scope is normal, but it does nothing to address the auditor's closeness to the auditee." },
        { id: "C", text: "Periodically rotating auditors' engagement assignments", rationale: "Correct. Rotation limits the familiarity that builds up when the same auditor reviews the same area and people year after year." },
        { id: "D", text: "Increasing the sample sizes used in the procurement engagement", rationale: "Larger samples address detection risk, not the auditor's objectivity in evaluating the results." },
      ],
      answer: "C",
      explanation:
        "Internal auditors must recognise and avoid or mitigate actual, potential and perceived impairments. Staff rotation, supervisory review and disclosure to the chief audit executive are common safeguards; rotation targets familiarity directly.",
      reference: STANDARDS_TEXT,
    },
    {
      id: "cia1-d2-due-professional-care",
      domain: "d2",
      objective: "B.5 Demonstrate due professional care",
      difficulty: "intermediate",
      question:
        "An auditor has limited time for an engagement covering both high-value international wire transfers and a small petty cash fund. Which approach best demonstrates due professional care?",
      options: [
        { id: "A", text: "Focus the extent of testing on the wire transfers, considering their complexity, materiality, probability of significant errors or fraud, and the cost of the work relative to its benefit", rationale: "Correct. The Standards list these factors as considerations for due professional care, which calls for reasonable, risk-based effort rather than equal coverage." },
        { id: "B", text: "Test 100% of transactions in both areas, so that no error can be missed", rationale: "Due professional care does not require complete testing or infallibility; the cost of the work should be weighed against its benefit." },
        { id: "C", text: "Split the available hours equally between the two areas", rationale: "Equal allocation ignores the large difference in significance and risk between the two areas." },
        { id: "D", text: "Test petty cash first because it can be completed quickly", rationale: "Convenience is not a basis for allocating effort; the more significant risks would be under-tested." },
      ],
      answer: "A",
      explanation:
        "Standard 4.2 asks auditors to consider factors such as the significance and complexity of risks, the probability of significant errors, fraud or noncompliance, and cost relative to benefit. Due professional care means the care of a reasonably prudent and competent auditor, not a guarantee.",
      reference: STANDARDS_TEXT,
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
    {
      id: "cia1-d3-whistleblowing",
      domain: "d3",
      objective: "C.3 Recognize ethical and compliance-related issues",
      difficulty: "intermediate",
      question:
        "An organisation's ethics hotline receives almost no reports. Staff surveys show employees fear being identified and that reports are routed to their own line managers. Which change would most improve the hotline?",
      options: [
        { id: "A", text: "Requiring callers to give their name so that every report can be followed up", rationale: "Mandatory identification would make the fear of being identified worse and discourage reporting further." },
        { id: "B", text: "A confidential or anonymous channel routed outside line management, backed by a non-retaliation policy", rationale: "Correct. Confidentiality, independence from the people who may be implicated and protection from retaliation are what make staff willing to report." },
        { id: "C", text: "Publishing the number of reports received each quarter", rationale: "Transparency about volumes may help later, but it does not address the reasons staff are not reporting now." },
        { id: "D", text: "Replacing the hotline with an annual signed confirmation from every employee that they know of no misconduct", rationale: "An annual confirmation is a weak substitute and gives staff no safe way to raise concerns when they arise." },
      ],
      answer: "B",
      explanation:
        "Ethics and compliance programmes rely on people raising concerns. A reporting channel only works if employees trust that they are protected and that reports reach someone independent of the matter.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d3-strategic-risk",
      domain: "d3",
      objective: "C.4 Interpret fundamental concepts of risk type",
      difficulty: "foundation",
      question:
        "A competitor launches a lower-cost technology that could make the company's main product obsolete within three years. The company's strategic plan does not address this. Which type of risk does this primarily represent?",
      options: [
        { id: "A", text: "Operational risk", rationale: "Operational risk arises from inadequate or failed internal processes, people or systems. Here the threat comes from the market." },
        { id: "B", text: "Compliance risk", rationale: "Compliance risk relates to breaching laws, regulations or other requirements, which is not the issue." },
        { id: "C", text: "Credit risk", rationale: "Credit risk is the risk that a counterparty fails to meet its financial obligations." },
        { id: "D", text: "Strategic risk", rationale: "Correct. A change in the competitive environment that threatens the business model and is not reflected in strategy is a strategic risk." },
      ],
      answer: "D",
      explanation:
        "Classifying risks by source helps assign ownership and choose responses. Threats to the business model, such as technological disruption or shifts in customer demand, are strategic and belong on the board's agenda.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d3-risk-avoidance",
      domain: "d3",
      objective: "C.5 Interpret fundamental concepts of the risk management process",
      difficulty: "intermediate",
      question:
        "Management concludes that the residual risk of a small overseas product line exceeds the risk appetite, that no cost-effective control or insurance is available, and decides to close the product line. Which risk response is this?",
      options: [
        { id: "A", text: "Acceptance", rationale: "Acceptance means keeping the risk without further action, usually when it is within appetite." },
        { id: "B", text: "Sharing (transfer)", rationale: "Sharing moves part of the risk to a third party, for example through insurance or outsourcing, which management has ruled out." },
        { id: "C", text: "Avoidance", rationale: "Correct. Exiting the activity that gives rise to the risk eliminates the exposure altogether." },
        { id: "D", text: "Reduction (mitigation)", rationale: "Reduction lowers likelihood or impact through controls while continuing the activity." },
      ],
      answer: "C",
      explanation:
        "The usual risk responses are acceptance, avoidance, reduction and sharing. When a risk is outside appetite and cannot be reduced or shared at a reasonable cost, stopping the activity is the remaining option.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d3-outsourcing-accountability",
      domain: "d3",
      objective: "C.6 Describe risk management within organizational processes and functions",
      difficulty: "advanced",
      question:
        "A company outsources its payroll processing to a specialist service provider. Which statement best describes how the related risks should be managed?",
      options: [
        { id: "A", text: "The company remains accountable and should manage the risks through the contract, ongoing performance monitoring and independent assurance on the provider's controls", rationale: "Correct. Outsourcing moves the activity, not the accountability; the organisation must still oversee the risks through its third-party risk management." },
        { id: "B", text: "The service provider becomes accountable for the risks, so the company no longer needs payroll controls", rationale: "The company still needs controls, for example over the data it sends and the results it receives." },
        { id: "C", text: "The risks are managed once the provider signs a confidentiality agreement", rationale: "A confidentiality clause addresses only one risk and says nothing about processing accuracy, availability or ongoing performance." },
        { id: "D", text: "Internal audit should take over monitoring of the provider so that management can focus on other priorities", rationale: "Monitoring third parties is a management responsibility; internal audit provides assurance on how well it is done." },
      ],
      answer: "A",
      explanation:
        "Risk management is embedded in processes such as procurement and third-party management. When an activity is outsourced, the organisation should select the provider carefully, set clear contractual requirements and obtain evidence that the provider's controls work.",
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
    {
      id: "cia1-d4-special-consideration",
      domain: "d4",
      objective: "D.2 Determine whether fraud risks require special consideration during an engagement",
      difficulty: "intermediate",
      question:
        "While planning an assurance engagement on a distribution centre, the auditor learns that inventory write-offs have tripled, that one supervisor approves and records all write-offs, and that staff believe he lives well beyond his salary. How should these facts affect the engagement?",
      options: [
        { id: "A", text: "They should be ignored, because the engagement is an assurance engagement and not a fraud investigation", rationale: "Auditors must consider fraud risks in every engagement risk assessment, not only in investigations." },
        { id: "B", text: "The auditor should interview the supervisor at the start of fieldwork about his personal finances", rationale: "Questioning a possible suspect about personal matters at the planning stage is premature and could compromise any later investigation." },
        { id: "C", text: "The engagement should be cancelled until the police have been informed", rationale: "There is not yet evidence of fraud, and decisions on external reporting belong to the organisation under its procedures." },
        { id: "D", text: "The auditor should include these fraud risks in the engagement risk assessment and design procedures that respond to them, applying professional skepticism", rationale: "Correct. The Standards require auditors to consider specific risks related to fraud when assessing engagement risks; these indicators justify targeted work on write-offs." },
      ],
      answer: "D",
      explanation:
        "Unusual trends, missing segregation of duties and behavioural red flags together point to elevated fraud risk. Special consideration means adjusting the scope, timing and nature of procedures, and escalating if evidence of fraud is found.",
      reference: STANDARDS_TEXT,
    },
    {
      id: "cia1-d4-fraud-risk-management",
      domain: "d4",
      objective: "D.3 Evaluate the potential for fraud and how the organization detects and manages fraud risks",
      difficulty: "advanced",
      question:
        "When evaluating how an organisation manages fraud risk, which observation provides the strongest evidence of an effective approach?",
      options: [
        { id: "A", text: "Management performs a periodic fraud risk assessment that identifies likely schemes and links each one to the controls that prevent or detect it", rationale: "Correct. A structured, regularly updated fraud risk assessment shows that management understands how fraud could occur and has matched controls to those schemes." },
        { id: "B", text: "No fraud cases have been reported in the past five years", rationale: "An absence of reported cases may reflect weak detection or a reporting channel nobody trusts, not an absence of fraud." },
        { id: "C", text: "All employees signed the code of conduct when they were hired", rationale: "A one-time signature at hiring is a weak directive control and says little about how fraud risk is managed today." },
        { id: "D", text: "The external auditor issued an unmodified opinion on the financial statements", rationale: "An external audit opinion concerns material misstatement of the financial statements and is not designed to evaluate the organisation's overall fraud risk management." },
      ],
      answer: "A",
      explanation:
        "Fraud risk management starts with management identifying where and how fraud could happen. Internal audit evaluates whether that assessment is realistic and whether the related prevention and detection controls are designed and operating effectively.",
      reference: SYLLABUS,
    },
    {
      id: "cia1-d4-preventive-vendor-control",
      domain: "d4",
      objective: "D.4 Describe controls to prevent and detect fraud",
      difficulty: "intermediate",
      question:
        "Which control is primarily preventive against fraudulent changes to supplier bank account details?",
      options: [
        { id: "A", text: "A monthly review by the finance manager of all changes made to the supplier master file", rationale: "A review of changes after they are made is detective: it finds fraudulent changes once they have occurred." },
        { id: "B", text: "Data analytics that regularly match all supplier bank accounts and addresses against the employee master file to flag overlaps", rationale: "Matching existing records identifies suspicious relationships after the fact, so it is detective." },
        { id: "C", text: "Verifying each requested change by calling the supplier on a known number, with independent approval before it takes effect", rationale: "Correct. Independent verification and approval before the change is applied stops a fraudulent change from entering the system." },
        { id: "D", text: "Surprise audits of the accounts payable department", rationale: "Surprise audits deter and detect fraud but do not stop an individual change from being made." },
      ],
      answer: "C",
      explanation:
        "Preventive anti-fraud controls act before a fraudulent transaction or change takes effect; detective controls identify it afterwards. Strong fraud risk management combines both, with segregation of duties and independent verification at the core of prevention.",
      reference: SYLLABUS,
    },
  ],
};
