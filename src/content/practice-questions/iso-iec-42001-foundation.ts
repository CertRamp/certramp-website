import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free PECB ISO/IEC 42001 Foundation sample questions: ORIGINAL questions
 * written by CertRamp against the knowledge statements in the PECB candidate
 * handbook (verified 11 November 2026). Not taken from the paid practice
 * exams, not recalled exam content, and not presented as real exam questions.
 * The real exam uses three options per question; these practice questions use
 * four. No text of ISO/IEC 42001 is reproduced beyond clause titles.
 */
const HANDBOOK = {
  label: "PECB: ISO/IEC 42001 Foundation Candidate Handbook (PDF)",
  url: "https://pecb.com/pdf/candidate-handbooks/pecb-candidate-handbook-iso-iec-42001-foundation.pdf",
};

const ISO_42001 = {
  label: "ISO/IEC 42001:2023 Information technology: Artificial intelligence: Management system",
  url: "https://committee.iso.org/standard/81230.html",
};

export const isoIec42001FoundationQuestions: PracticeQuestionSet = {
  slug: "iso-iec-42001-foundation",
  intro:
    "15 original ISO/IEC 42001 Foundation practice questions across both PECB competency domains, weighted like the real exam: 6 on fundamental principles and concepts of an AIMS and 9 on the AI management system requirements. Each one comes with the answer, a short explanation and the reason every other option is wrong. The real exam uses three options per question; these use four to make you work a little harder.",
  published: "2026-11-11",
  updated: "2026-11-11",
  seo: {
    title: "ISO/IEC 42001 Foundation Practice Questions (2026)",
    description:
      "15 free, original PECB ISO/IEC 42001 Foundation practice questions on AI concepts, AI risk and impact assessment, Annex A and the AIMS clauses, with explanations.",
  },
  questions: [
    /* ── d1: Fundamental principles and concepts of an AIMS ───────────────── */
    {
      id: "iso42001-d1-applicability",
      domain: "d1",
      objective: "Purpose, scope and applicability of ISO/IEC 42001",
      difficulty: "foundation",
      question:
        "A 40-person logistics company does not build AI, but it uses a purchased AI route-planning service in daily operations. Can it implement an AIMS based on ISO/IEC 42001?",
      options: [
        { id: "A", text: "Yes. It applies to any organization that provides or uses AI", rationale: "Correct. ISO states that ISO/IEC 42001 applies to organizations of any size involved in developing, providing or using AI-based products or services." },
        { id: "B", text: "No. Only organizations that develop and train their own AI models are in scope", rationale: "Using AI is explicitly covered, not only developing it." },
        { id: "C", text: "Only if it already holds an ISO/IEC 27001 certificate for its information security management system", rationale: "ISO/IEC 42001 can be implemented on its own; an existing ISO/IEC 27001 system helps integration but is not a precondition." },
        { id: "D", text: "No. The standard is intended for large enterprises and public authorities", rationale: "ISO describes the standard as applicable regardless of organization size." },
      ],
      answer: "A",
      explanation:
        "ISO/IEC 42001 is a generic management system standard. Developers, providers and users of AI can all establish an AIMS, scaled to their size and the AI systems in scope.",
      reference: ISO_42001,
    },
    {
      id: "iso42001-d1-related-standards",
      domain: "d1",
      objective: "Key ISO standards related to AI, and their purposes and applications",
      difficulty: "intermediate",
      question:
        "An AIMS team wants dedicated guidance on how to identify, evaluate and document the potential effects of an AI system on individuals, groups and society. Which standard is designed for this purpose?",
      options: [
        { id: "A", text: "ISO/IEC 22989", rationale: "ISO/IEC 22989 defines AI concepts and terminology; it is not a method for assessing impacts." },
        { id: "B", text: "ISO/IEC 23894", rationale: "ISO/IEC 23894 gives guidance on AI risk management for organizations, which is related but not the dedicated impact assessment standard." },
        { id: "C", text: "ISO/IEC 42005", rationale: "Correct. ISO/IEC 42005:2025 gives guidance for conducting AI system impact assessments focused on individuals, groups and society, and complements ISO/IEC 42001." },
        { id: "D", text: "ISO/IEC 23053", rationale: "ISO/IEC 23053 is a framework describing AI systems that use machine learning, not an impact assessment method." },
      ],
      answer: "C",
      explanation:
        "Learn the SC 42 family by purpose: 22989 for terminology, 23053 for the machine learning framework, 23894 for AI risk management guidance and 42005 for AI system impact assessment. ISO/IEC 42001 is the only one of these with certifiable management system requirements.",
      reference: { label: "ISO/IEC 42005:2025 AI system impact assessment", url: "https://committee.iso.org/standard/44545.html" },
    },
    {
      id: "iso42001-d1-supervised-learning",
      domain: "d1",
      objective: "Machine learning approaches, including supervised learning and deep learning",
      difficulty: "foundation",
      question:
        "A bank trains a model on 10 years of past loan applications, each labelled with whether the borrower later defaulted, so that it can predict default for new applications. Which machine learning approach is this?",
      options: [
        { id: "A", text: "Unsupervised learning", rationale: "Unsupervised learning finds structure such as clusters in unlabelled data; here every example carries a known outcome." },
        { id: "B", text: "Supervised learning", rationale: "Correct. The model learns from input examples paired with known labels (defaulted or not) and predicts the label for new inputs." },
        { id: "C", text: "Reinforcement learning", rationale: "Reinforcement learning learns from rewards received while acting in an environment, not from a fixed labelled data set." },
        { id: "D", text: "A rule-based expert system", rationale: "An expert system applies rules written by people; it does not learn its behaviour from labelled data." },
      ],
      answer: "B",
      explanation:
        "Supervised learning uses labelled training data, which is typical for classification and regression tasks such as credit scoring. The quality and representativeness of those labels is also where many AI risks, such as bias, start.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d1-deep-learning",
      domain: "d1",
      objective: "Structure, layers and functions of artificial neural networks",
      difficulty: "foundation",
      question:
        "What best distinguishes deep learning from other machine learning approaches?",
      options: [
        { id: "A", text: "It can only be used for image recognition", rationale: "Deep learning is also used for language, speech, tabular data and more." },
        { id: "B", text: "It does not need any training data", rationale: "Deep learning typically needs large amounts of training data." },
        { id: "C", text: "Its decision logic is written as explicit if-then rules by domain experts", rationale: "That describes symbolic, rule-based AI; deep learning learns its parameters from data." },
        { id: "D", text: "It uses neural networks with many hidden layers", rationale: "Correct. Deep learning is a subset of machine learning based on neural networks with multiple hidden layers, which learn increasingly abstract features." },
      ],
      answer: "D",
      explanation:
        "A neural network has an input layer, one or more hidden layers and an output layer; deep learning uses many hidden layers. ISO/IEC 23053 treats deep learning as a subset of machine learning.",
      reference: { label: "ISO/IEC 23053:2022 Framework for AI systems using machine learning", url: "https://committee.iso.org/standard/74438.html" },
    },
    {
      id: "iso42001-d1-pdca-check",
      domain: "d1",
      objective: "Management system concepts and their fundamental elements",
      difficulty: "intermediate",
      question:
        "ISO/IEC 42001 follows the Plan-Do-Check-Act approach. In which phase do internal audits and management reviews of the AIMS mainly belong?",
      options: [
        { id: "A", text: "Plan", rationale: "Plan covers setting the AI policy, objectives, risk and impact assessments and planned actions (clauses 4 to 7 broadly)." },
        { id: "B", text: "Do", rationale: "Do is operating the planned processes and controls (clause 8 Operation)." },
        { id: "C", text: "Check", rationale: "Correct. Monitoring, measurement, internal audit and management review sit in clause 9 Performance evaluation, the Check phase." },
        { id: "D", text: "Act", rationale: "Act is acting on the results through corrective action and continual improvement (clause 10 Improvement)." },
      ],
      answer: "C",
      explanation:
        "Mapping clauses to PDCA is a quick way to orient yourself: planning up front, clause 8 for doing, clause 9 for checking and clause 10 for acting. Management review outputs then feed decisions on improvement.",
      reference: ISO_42001,
    },
    {
      id: "iso42001-d1-transparency",
      domain: "d1",
      objective: "Principles of responsible and trustworthy AI, including transparency",
      difficulty: "foundation",
      question:
        "An insurer tells customers when they are talking to an AI chatbot and gives them a plain-language explanation of the main factors behind automated claim decisions. Which responsible AI principle does this mainly support?",
      options: [
        { id: "A", text: "Transparency", rationale: "Correct. Disclosing that AI is used and explaining how it reaches decisions supports transparency and explainability towards affected people." },
        { id: "B", text: "Robustness", rationale: "Robustness is about the system performing reliably under varied or adverse conditions, not about informing users." },
        { id: "C", text: "Data minimization", rationale: "Data minimization limits the personal data collected and processed; the measures described do not change the data used." },
        { id: "D", text: "Environmental sustainability", rationale: "Sustainability concerns the resource use of AI systems, which the described measures do not address." },
      ],
      answer: "A",
      explanation:
        "Transparency means people can know that AI is involved and understand, at an appropriate level, how outcomes are produced. It also underpins accountability, because decisions that cannot be explained are hard to challenge.",
      reference: { label: "ISO: AI management systems, what businesses need to know", url: "https://committee.iso.org/artificial-intelligence/ai-management-systems" },
    },

    /* ── d2: Artificial intelligence management system (AIMS) ─────────────── */
    {
      id: "iso42001-d2-context",
      domain: "d2",
      objective: "Organizational context and interested-party requirements under ISO/IEC 42001",
      difficulty: "foundation",
      question:
        "An organization starting its AIMS determines the external and internal issues relevant to its use of AI, the interested parties and their requirements, and its role (for example AI provider or AI user). Which clause of ISO/IEC 42001 does this work address?",
      options: [
        { id: "A", text: "Clause 6 Planning", rationale: "Planning uses the results of the context analysis to address risks and set objectives, but determining the context itself comes earlier." },
        { id: "B", text: "Clause 4 Context of the organization", rationale: "Correct. Clause 4 covers understanding the organization and its context, the needs of interested parties and the scope of the AIMS." },
        { id: "C", text: "Clause 5 Leadership", rationale: "Clause 5 covers top management commitment, the AI policy and roles; it is not where the context analysis sits." },
        { id: "D", text: "Clause 8 Operation", rationale: "Clause 8 covers operational planning and control, including carrying out assessments, once the system is set up." },
      ],
      answer: "B",
      explanation:
        "The context analysis drives everything else: the AIMS scope, the risks to address and the requirements of interested parties. In ISO/IEC 42001 it also includes the roles the organization plays in relation to its AI systems.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d2-top-management",
      domain: "d2",
      objective: "Top management's leadership and commitment responsibilities",
      difficulty: "intermediate",
      question:
        "Which of the following is a leadership responsibility of top management under ISO/IEC 42001?",
      options: [
        { id: "A", text: "Personally carrying out every AI risk assessment and AI system impact assessment in the organization", rationale: "Top management must ensure the AIMS works, but tasks such as risk assessments can be assigned to competent people." },
        { id: "B", text: "Acting as internal auditor for the AIMS processes they manage", rationale: "Auditors should be objective and impartial; auditing your own work conflicts with that." },
        { id: "C", text: "Approving each individual change to an AI model's code", rationale: "Change approval is an operational process that can be delegated; it is not a defined leadership duty." },
        { id: "D", text: "Ensuring the AI policy and AI objectives fit the strategic direction", rationale: "Correct. Clause 5 requires top management to show leadership, including establishing the AI policy and objectives and integrating the AIMS into business processes." },
      ],
      answer: "D",
      explanation:
        "Leadership in a management system means direction, resources and accountability rather than doing every task. Top management sets the AI policy, makes sure roles are assigned and supports continual improvement.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d2-statement-of-applicability",
      domain: "d2",
      objective: "Annex A control applicability, AI risk treatment and statement of applicability requirements",
      difficulty: "intermediate",
      question:
        "After AI risk treatment, an organization concludes that some Annex A controls are not needed for its AI systems. What does ISO/IEC 42001 expect?",
      options: [
        { id: "A", text: "Justify each inclusion and exclusion in the statement of applicability", rationale: "Correct. The statement of applicability lists the necessary controls and justifies inclusions and exclusions, so excluding a control is possible when it is justified." },
        { id: "B", text: "Implement every Annex A control anyway, because certification requires all of them to be in place", rationale: "Annex A is a reference set of controls; the organization determines which are necessary based on risk treatment." },
        { id: "C", text: "Ask the certification body to remove the controls from the standard for that organization", rationale: "Certification bodies audit against the standard; they do not change it per client." },
        { id: "D", text: "Leave the excluded controls out of all documentation so auditors do not ask about them", rationale: "Exclusions must be documented and justified, not hidden." },
      ],
      answer: "A",
      explanation:
        "Risk treatment decides which controls are needed, Annex A acts as a cross-check that nothing necessary was overlooked, and the statement of applicability documents the outcome. Organizations may also add controls from other sources.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d2-impact-assessment",
      domain: "d2",
      objective: "Conducting, documenting, reviewing and updating impact assessments, including consequences for individuals, groups and society",
      difficulty: "intermediate",
      question:
        "What is the main focus of an AI system impact assessment under ISO/IEC 42001, compared with the AI risk assessment?",
      options: [
        { id: "A", text: "It replaces the AI risk assessment for high-risk systems", rationale: "Both are required; the impact assessment does not replace the risk assessment." },
        { id: "B", text: "It estimates the financial return of an AI project", rationale: "Business cases are useful but are not what the impact assessment requires." },
        { id: "C", text: "Consequences of the AI system for individuals, groups and societies", rationale: "Correct. The impact assessment looks at how the AI system and its foreseeable uses can affect people and society, and its results feed into the risk assessment." },
        { id: "D", text: "It measures the technical accuracy of the model on a held-out test data set before release", rationale: "Model testing is part of verification and validation in the life cycle, not the impact assessment." },
      ],
      answer: "C",
      explanation:
        "The impact assessment widens the view beyond the organization to the people and societies affected by an AI system. It is documented, reviewed and updated when the system or its context changes.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d2-risk-evaluation",
      domain: "d2",
      objective: "AI risk management process: establishing scope, context and criteria, then identifying, analysing, evaluating, prioritizing, treating and monitoring risks",
      difficulty: "foundation",
      question:
        "In the AI risk management process, which step compares the results of risk analysis with the organization's AI risk criteria to decide which risks need treatment and in what priority?",
      options: [
        { id: "A", text: "Risk identification", rationale: "Identification finds and describes risks; it comes before they are analysed or compared with criteria." },
        { id: "B", text: "Risk evaluation", rationale: "Correct. Risk evaluation compares analysed risk levels with the risk criteria to support decisions on treatment and priorities." },
        { id: "C", text: "Risk treatment", rationale: "Treatment selects and implements options to modify risk after evaluation has decided what needs action." },
        { id: "D", text: "Risk monitoring", rationale: "Monitoring and review keep track of risks and controls over time; it is not the comparison step." },
      ],
      answer: "B",
      explanation:
        "The sequence is identify, analyse, evaluate, then treat, with monitoring and review throughout. Defined AI risk criteria are what make evaluation consistent and repeatable.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d2-third-parties",
      domain: "d2",
      objective: "ISO/IEC 42001 requirements for managing third-party and customer relationships",
      difficulty: "advanced",
      question:
        "A company builds a customer service assistant on top of a large language model provided by an external supplier through an API. How should its AIMS treat this supplier relationship?",
      options: [
        { id: "A", text: "The assistant is out of scope, because the company does not own the model", rationale: "AI systems that rely on third-party components remain in scope when the organization provides or uses them." },
        { id: "B", text: "The company may only use suppliers that are certified to ISO/IEC 42001", rationale: "The standard does not require suppliers to hold ISO/IEC 42001 certification." },
        { id: "C", text: "Signing a contract transfers all accountability for the assistant's outcomes to the supplier", rationale: "Contracts can allocate tasks and responsibilities, but the organization remains accountable for its own AIMS and AI use." },
        { id: "D", text: "Allocate responsibilities and manage the supplier in line with its own AI requirements", rationale: "Correct. Third-party and customer relationships are part of the AIMS: responsibilities are allocated and suppliers are managed in line with the organization's requirements." },
      ],
      answer: "D",
      explanation:
        "AI systems often depend on models, data and services from others. ISO/IEC 42001 expects the organization to allocate responsibilities clearly and to manage suppliers so that their contributions fit its AI policy and risk treatment.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d2-audit-types",
      domain: "d2",
      objective: "First-, second- and third-party AIMS audits, their characteristics and internal audit reporting requirements",
      difficulty: "foundation",
      question:
        "A hospital audits the AIMS of the vendor that supplies its AI triage software, using criteria from their contract. What type of audit is this?",
      options: [
        { id: "A", text: "A second-party audit", rationale: "Correct. A second-party audit is performed by a party with an interest in the organization, typically a customer auditing its supplier." },
        { id: "B", text: "A first-party audit", rationale: "First-party audits are internal audits, carried out by or on behalf of the organization on itself." },
        { id: "C", text: "A third-party audit", rationale: "Third-party audits are performed by independent bodies, such as a certification body, not by a customer." },
        { id: "D", text: "A management review", rationale: "Management review is top management's periodic review of the AIMS, not an audit by an external customer." },
      ],
      answer: "A",
      explanation:
        "First party means internal, second party means a customer or other interested party, and third party means an independent organization such as a certification body. ISO/IEC 42001 itself requires internal (first-party) audits at planned intervals.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d2-corrective-action",
      domain: "d2",
      objective: "Corrective action processes and mechanisms for reporting and addressing AI-related concerns",
      difficulty: "intermediate",
      question:
        "An internal audit finds that a model was deployed without the required impact assessment. The team completes the assessment the same week. What else does ISO/IEC 42001 expect as part of corrective action?",
      options: [
        { id: "A", text: "Nothing, because the immediate fix closes the nonconformity", rationale: "Fixing the instance is a correction; corrective action also deals with why it happened." },
        { id: "B", text: "A separate preventive action report under a dedicated preventive action clause", rationale: "The harmonized management system structure has no separate preventive action clause; prevention is handled through risk-based planning." },
        { id: "C", text: "Find the cause, act to prevent recurrence, and check the action worked", rationale: "Correct. Corrective action means evaluating the cause, taking action proportionate to the effects, and reviewing whether it worked, with documented information as evidence." },
        { id: "D", text: "Wait for the next certification audit to decide whether action is needed", rationale: "The organization must react to nonconformities itself; it does not defer the decision to the certification body." },
      ],
      answer: "C",
      explanation:
        "Correction fixes the symptom, corrective action removes the cause. Here, the root cause might be a release process that does not check for a completed impact assessment, so the process needs to change.",
      reference: HANDBOOK,
    },
    {
      id: "iso42001-d2-operational-monitoring",
      domain: "d2",
      objective: "AI security and operational monitoring, including event logging, performance monitoring, anomaly detection and security event monitoring",
      difficulty: "intermediate",
      question:
        "Months after deployment, a fraud detection model starts missing more fraud cases because customer behaviour has changed. Which practice in the AIMS is best placed to catch this early?",
      options: [
        { id: "A", text: "Testing the model thoroughly once before deployment and relying on those results", rationale: "Pre-deployment testing is necessary but cannot detect changes that occur in operation." },
        { id: "B", text: "Event logging and performance monitoring of the deployed system", rationale: "Correct. Monitoring in operation, with logs and performance indicators, detects degradation and anomalies so the organization can act." },
        { id: "C", text: "Retraining the model on a fixed schedule without measuring performance", rationale: "Scheduled retraining without measurement may miss or even worsen problems and gives no evidence of performance." },
        { id: "D", text: "Reviewing the AI policy and AI objectives every three years during the management review", rationale: "Policy reviews matter but are far too infrequent and high level to detect model degradation." },
      ],
      answer: "B",
      explanation:
        "The AI system life cycle does not end at deployment. Operation and monitoring, including event logs and performance measures, are what reveal drift, anomalies and security events, and they inform repair, update or decommissioning decisions.",
      reference: HANDBOOK,
    },
  ],
};
