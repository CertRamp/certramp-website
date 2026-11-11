import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free ISACA AAIR sample questions: ORIGINAL questions written by CertRamp
 * against ISACA's published AAIR exam content outline (verified 11 November
 * 2026). Not taken from the paid practice exams, not recalled exam content,
 * and not presented as real exam questions.
 */
const OUTLINE = {
  label: "ISACA: AAIR Exam Content Outline",
  url: "https://www.isaca.org/credentialing/aair/aair-exam-content-outline",
};

const AI_RMF_CORE = {
  label: "NIST AI RMF 1.0 (NIST AI 100-1), Section 5: AI RMF Core",
  url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/",
};

const AI_RMF_TRUST = {
  label: "NIST AI RMF 1.0 (NIST AI 100-1), Section 3: AI Risks and Trustworthiness",
  url: "https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/",
};

export const isacaAairQuestions: PracticeQuestionSet = {
  slug: "isaca-aair",
  intro:
    "15 original ISACA AAIR practice questions across the three domains of the official exam content outline, spread roughly by weight: six on AI Risk Governance and Framework Integration (37%), three on AI Life Cycle Risk Management (21%) and six on AI Risk Program Management (42%). Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-11-11",
  updated: "2026-11-11",
  seo: {
    title: "ISACA AAIR Practice Questions with Answers (2026)",
    description:
      "15 free, original ISACA AAIR practice questions on AI risk governance, the AI life cycle, risk treatment, KRIs and AI vendor risk, each with a full explanation.",
  },
  questions: [
    /* ── d1: AI Risk Governance and Framework Integration (37%) ───────────── */
    {
      id: "aair-d1-govern-cross-cutting",
      domain: "d1",
      objective: "1A AI Models, Frameworks, Strategies, and Use Cases",
      difficulty: "foundation",
      question:
        "A risk manager is aligning the organisation's AI risk program with the NIST AI Risk Management Framework. Which core function is designed to be cross-cutting, informing and running through the other three functions?",
      options: [
        { id: "A", text: "Map", rationale: "Map establishes context and frames risks for a specific AI system. Its outputs feed Measure and Manage, but it is not the cross-cutting function." },
        { id: "B", text: "Govern", rationale: "Correct. NIST describes Govern as a cross-cutting function that is infused throughout Map, Measure and Manage, covering culture, policies and accountability structures." },
        { id: "C", text: "Measure", rationale: "Measure analyses, benchmarks and monitors AI risks using methods and metrics. It draws on Map and informs Manage, but does not span the others." },
        { id: "D", text: "Manage", rationale: "Manage allocates resources to mapped and measured risks and plans treatment, response and recovery. It is one of the three functions that Govern informs." },
      ],
      answer: "B",
      explanation:
        "The AI RMF core has four functions: Govern, Map, Measure and Manage. Govern sets the risk culture, policies and accountability that every other activity depends on, which is why NIST positions it across the whole life cycle rather than as a single step.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d1-risk-tolerance",
      domain: "d1",
      objective: "1B AI Organizational Processes and Alignment",
      difficulty: "intermediate",
      question:
        "Several business units submit AI use cases for approval. The AI risk committee notices that each team rates its residual risk as acceptable, but the teams use very different reasoning. What should the committee establish FIRST?",
      options: [
        { id: "A", text: "A single approved AI vendor list for all business units", rationale: "A vendor list may help procurement, but it does not tell teams what level of risk the organisation is willing to accept." },
        { id: "B", text: "A requirement that every use case be red-teamed by an external firm before approval", rationale: "Testing produces risk information, but without a defined tolerance the results still cannot be judged consistently." },
        { id: "C", text: "A central inventory of all AI models in production", rationale: "An inventory is an important governance control, but it records what exists rather than setting the threshold for acceptance." },
        { id: "D", text: "Documented AI risk tolerances that every assessment is measured against", rationale: "Correct. Acceptability is only meaningful against an agreed tolerance. The NIST AI RMF (MAP 1.5) calls for organisational risk tolerances to be determined and documented." },
      ],
      answer: "D",
      explanation:
        "Without a common, documented risk tolerance, every team decides for itself what is acceptable, and the committee cannot compare or aggregate AI risk. Setting tolerances aligns AI decisions with the enterprise risk appetite and makes approvals consistent.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d1-use-case-ownership",
      domain: "d1",
      objective: "1C AI Ownership, Oversight, and Accountability",
      difficulty: "intermediate",
      question:
        "The data science team built a model that pre-screens loan applications for the retail lending department, which now uses it daily. Who should be accountable for the risk of this AI use case?",
      options: [
        { id: "A", text: "The data science team, because it designed and trained the model", rationale: "Developers are responsible for building and documenting the model, but they do not own the business decision or the risk it creates." },
        { id: "B", text: "The chief information security officer, because the model runs on corporate infrastructure", rationale: "The CISO owns security controls, not the business risk of how a lending decision tool is used." },
        { id: "C", text: "The internal audit function, because it provides independent assurance", rationale: "Internal audit must stay independent; owning the risk would impair its ability to assure it." },
        { id: "D", text: "The head of retail lending, as owner of the business process that relies on the model", rationale: "Correct. The risk owner is the person accountable for the business process and its outcomes. Technical teams, security and audit support that owner in their own roles." },
      ],
      answer: "D",
      explanation:
        "AI risk ownership follows the business process and its outcomes, not the technology. Clear accountability means the process owner accepts or treats the risk, while developers, the second line and internal audit each support oversight from their own position.",
      reference: OUTLINE,
    },
    {
      id: "aair-d1-acceptable-use-policy",
      domain: "d1",
      objective: "1D AI Policies, Procedures, and Organizational Training",
      difficulty: "foundation",
      question:
        "A review finds that employees in several departments paste customer data into free public generative AI chatbots to draft emails. There is no AI policy. What is the BEST first step for the AI risk practitioner to recommend?",
      options: [
        { id: "A", text: "Block all AI websites at the web proxy for every user and consider the issue closed", rationale: "Blocking without a policy or approved alternative tends to push use to personal devices and does not set expectations for future tools." },
        { id: "B", text: "Issue an AI acceptable use policy, backed by staff training", rationale: "Correct. A policy sets the rules for sanctioned use and data handling, and training makes staff aware of them. Technical controls can then enforce the policy." },
        { id: "C", text: "Deploy data loss prevention rules for AI sites as the only control", rationale: "DLP is a useful enforcing control, but on its own it lacks the policy basis that defines what is allowed and why." },
        { id: "D", text: "Start disciplinary proceedings against the employees involved", rationale: "Without a policy in place, staff had no defined rule to break; this treats a governance gap as individual misconduct." },
      ],
      answer: "B",
      explanation:
        "Unmanaged use of public AI tools is a governance gap first. A policy that defines sanctioned tools and data classes, combined with awareness training, gives a basis for technical controls and for accountability. The NIST AI RMF Govern function covers both policies and personnel training.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d1-eu-ai-act-high-risk",
      domain: "d1",
      objective: "1E AI Regulatory Compliance and Legal Considerations",
      difficulty: "intermediate",
      question:
        "An EU-based company plans to use an AI tool that sorts and ranks CVs for job openings. Under the risk-based approach of the EU AI Act, how is this use case MOST likely classified?",
      options: [
        { id: "A", text: "High risk, with duties such as risk management, logging and human oversight", rationale: "Correct. The European Commission lists CV-sorting software for recruitment as an example of a high-risk use case, which carries requirements such as risk mitigation, high-quality datasets, logging, documentation and human oversight." },
        { id: "B", text: "Unacceptable risk, so the tool is prohibited", rationale: "Prohibited practices include social scoring and emotion recognition in the workplace. CV sorting is regulated as high risk, not banned." },
        { id: "C", text: "Transparency risk only, so the company just needs to disclose to applicants that AI is used", rationale: "Transparency obligations apply to systems such as chatbots and generated content. Employment use cases carry the heavier high-risk obligations." },
        { id: "D", text: "Minimal risk, with no specific obligations", rationale: "Minimal-risk examples are spam filters and AI in video games. A tool that affects access to employment is treated as high risk." },
      ],
      answer: "A",
      explanation:
        "The EU AI Act sorts AI systems into unacceptable, high, transparency and minimal risk. Employment uses such as CV sorting affect people's fundamental rights and fall into the high-risk tier, so the risk practitioner must plan for the related obligations before deployment.",
      reference: { label: "European Commission: AI Act (regulatory framework for AI)", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
    },
    {
      id: "aair-d1-valid-reliable",
      domain: "d1",
      objective: "1F AI Trustworthiness, Ethical and Societal Implications (e.g., ESG)",
      difficulty: "advanced",
      question:
        "In the NIST AI Risk Management Framework, which characteristic of trustworthy AI is described as a necessary condition and the base for the other characteristics?",
      options: [
        { id: "A", text: "Accountable and transparent", rationale: "NIST shows accountable and transparent as relating to all other characteristics, but it is not the base condition." },
        { id: "B", text: "Secure and resilient", rationale: "Security and resilience are one of the characteristics built on the base; a secure system can still be untrustworthy if it is not valid." },
        { id: "C", text: "Valid and reliable", rationale: "Correct. NIST names valid and reliable as a necessary condition of trustworthiness and shows it as the base for the other characteristics." },
        { id: "D", text: "Fair with harmful bias managed", rationale: "Fairness is a key characteristic, but NIST does not position it as the foundation for the others." },
      ],
      answer: "C",
      explanation:
        "NIST lists seven characteristics: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed. A system that does not perform as intended cannot be trustworthy, so validity and reliability come first, and trade-offs between the others must be balanced in context.",
      reference: AI_RMF_TRUST,
    },

    /* ── d2: AI Life Cycle Risk Management (21%) ──────────────────────────── */
    {
      id: "aair-d2-held-out-validation",
      domain: "d2",
      objective: "2B AI Model Training, Testing, and Validation",
      difficulty: "intermediate",
      question:
        "Before go-live, a model team reports 98% accuracy for a new claims classification model. During review, the risk practitioner learns the accuracy was measured on the same records used for training. What is the PRIMARY concern?",
      options: [
        { id: "A", text: "Possible overfitting; it must be evaluated on separate, representative data", rationale: "Correct. Scoring a model on its own training data hides overfitting. Validation needs held-out data that reflects the intended deployment setting." },
        { id: "B", text: "Accuracy is an unacceptable metric for any classification model", rationale: "Accuracy can be misleading on imbalanced data, but it is not banned; the core problem here is the test data, not the metric." },
        { id: "C", text: "The model should be retrained with more epochs to reach 100%", rationale: "More training on the same data would increase the risk of overfitting, not prove that the model generalises." },
        { id: "D", text: "The training data must be deleted before deployment to protect the privacy of claimants", rationale: "Data retention is a separate question; deleting training data would also remove the ability to retest and audit the model." },
      ],
      answer: "A",
      explanation:
        "A model evaluated on its own training data looks better than it will perform on new cases. The NIST AI RMF Measure function expects systems to be tested before deployment under conditions similar to their intended use, and the evidence should come from data the model has not seen.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d2-decommissioning",
      domain: "d2",
      objective: "2C AI Implementation, Maintenance, and Decommissioning",
      difficulty: "intermediate",
      question:
        "A customer churn model is being retired and replaced by a vendor service. Which action is MOST important to include in the decommissioning plan?",
      options: [
        { id: "A", text: "Archiving the model's source code in the repository for future reference", rationale: "Keeping code may be useful, but it does nothing about the live risks of the retired system." },
        { id: "B", text: "Revoking access and integrations, handling model artefacts and data per retention rules, and updating the AI inventory", rationale: "Correct. Safe decommissioning removes residual access and data exposure and keeps the inventory accurate, so retiring the system does not increase risk." },
        { id: "C", text: "Announcing the retirement date to the model's users", rationale: "Communication is helpful, but it does not remove access, data or downstream dependencies." },
        { id: "D", text: "Running a final accuracy test on the retired model", rationale: "Testing a model that is being switched off does not address the risks that decommissioning creates." },
      ],
      answer: "B",
      explanation:
        "Retired AI systems can leave behind open endpoints, service accounts, stored training data and stale inventory records. The NIST AI RMF (GOVERN 1.7) calls for processes to decommission and phase out AI systems safely, in a way that does not increase risk or reduce trustworthiness.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d2-data-provenance",
      domain: "d2",
      objective: "2D AI Data and Asset Management",
      difficulty: "advanced",
      question:
        "A team fine-tunes a language model on data aggregated from internal documents, a purchased dataset and public web sources. Which control BEST reduces the risk that poisoned data goes undetected?",
      options: [
        { id: "A", text: "Increasing the size of the dataset so that any poisoned records are diluted by clean ones", rationale: "Targeted poisoning and backdoors can work with a small number of records, so more data does not reliably neutralise them." },
        { id: "B", text: "Encrypting the training dataset at rest", rationale: "Encryption protects confidentiality in storage, but it does not reveal whether the data was manipulated before it was stored." },
        { id: "C", text: "Tracking data provenance and versions (for example ML-BOM, DVC) and vetting suppliers", rationale: "Correct. OWASP recommends tracking data origins and transformations (for example with CycloneDX or an ML-BOM), using version control such as DVC to detect manipulation, and vetting data vendors." },
        { id: "D", text: "Restricting the model to answer only in a fixed output format", rationale: "Output format checks address other risks, such as improper output handling, but not the integrity of the training data." },
      ],
      answer: "C",
      explanation:
        "Data and model poisoning is an integrity attack that is hard to detect once a model is trained, especially from external or unverified sources. Knowing where every dataset came from and how it changed, plus vetting suppliers, makes manipulation detectable and traceable.",
      reference: { label: "OWASP Top 10 for LLM Applications 2025: LLM04:2025 Data and Model Poisoning", url: "https://genai.owasp.org/llmrisk/llm042025-data-and-model-poisoning/" },
    },

    /* ── d3: AI Risk Program Management (42%) ─────────────────────────────── */
    {
      id: "aair-d3-indirect-injection-scenario",
      domain: "d3",
      objective: "3A AI Risk Scenario Identification and Assessment (e.g., threats, vulnerabilities, and attacks)",
      difficulty: "intermediate",
      question:
        "An LLM assistant reads incoming supplier emails and drafts payment instructions for the finance team. While building risk scenarios, the practitioner notes that an attacker could send an email containing hidden instructions that the assistant follows. Which threat does this scenario describe?",
      options: [
        { id: "A", text: "Direct prompt injection", rationale: "Direct injection comes from the user's own input to the model. Here the instructions arrive in external content the model processes." },
        { id: "B", text: "Model inversion", rationale: "Model inversion aims to reconstruct training data from a model; it is not about instructions hidden in input content." },
        { id: "C", text: "Data poisoning", rationale: "Poisoning manipulates training, fine-tuning or embedding data. The email is processed at run time, not used to train the model." },
        { id: "D", text: "Indirect prompt injection", rationale: "Correct. OWASP defines indirect prompt injection as instructions hidden in external content, such as files or emails, that the model processes." },
      ],
      answer: "D",
      explanation:
        "Indirect prompt injection is a key scenario wherever an AI system reads untrusted content and can trigger actions. OWASP notes it cannot be fully prevented, so the assessment should drive impact-limiting controls such as least privilege, segregation of external content and human approval for high-risk actions.",
      reference: { label: "OWASP Top 10 for LLM Applications 2025: LLM01:2025 Prompt Injection", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
    },
    {
      id: "aair-d3-risk-avoidance",
      domain: "d3",
      objective: "3B AI Risk Treatment Strategies",
      difficulty: "foundation",
      question:
        "After assessment, a retailer concludes that a planned in-store facial recognition feature exceeds its risk tolerance and that no available control brings the risk down far enough. Management cancels the feature. Which risk response is this?",
      options: [
        { id: "A", text: "Avoidance", rationale: "Correct. Ending or not starting the activity that creates the risk is avoidance, one of the response options the NIST AI RMF lists alongside mitigation, transfer and acceptance." },
        { id: "B", text: "Mitigation", rationale: "Mitigation reduces likelihood or impact with controls while the activity continues. Here the activity was stopped." },
        { id: "C", text: "Transfer", rationale: "Transfer shifts the financial impact to another party, for example through insurance or contract. Nothing was shifted here." },
        { id: "D", text: "Acceptance", rationale: "Acceptance means proceeding with the risk as it is. The retailer chose not to proceed." },
      ],
      answer: "A",
      explanation:
        "The four classic responses are mitigate, transfer, avoid and accept. When a risk exceeds tolerance and cannot be reduced, avoiding the activity is a legitimate and often the most responsible choice.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d3-control-validation",
      domain: "d3",
      objective: "3C AI Controls Management (e.g., Evaluation, Selection, Validation)",
      difficulty: "advanced",
      question:
        "A business unit bought a guardrail product that the vendor says blocks prompt injection and the release of personal data. Before the risk register shows the risk as reduced, what should the risk practitioner require?",
      options: [
        { id: "A", text: "The vendor's marketing white paper describing the detection approach", rationale: "A description of design intent is not evidence that the control works in your environment." },
        { id: "B", text: "Confirmation that the product is widely used by other companies in the sector", rationale: "Popularity says nothing about whether the control is effective for this system and its threats." },
        { id: "C", text: "Independent testing of the control against defined attack cases in the target environment, repeated after changes", rationale: "Correct. Control validation needs evidence of operating effectiveness. Adversarial testing in the real configuration shows what the control actually blocks." },
        { id: "D", text: "A signed statement from the business unit that the control is in place", rationale: "Attestation that a control exists does not show that it operates effectively against the risk." },
      ],
      answer: "C",
      explanation:
        "Selecting a control is only half of controls management; its effectiveness must be validated before risk is recorded as reduced. The NIST AI RMF (MEASURE 2.7) calls for AI system security and resilience to be evaluated and documented, and OWASP recommends regular adversarial testing for prompt injection defences.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d3-kri-performance-drift",
      domain: "d3",
      objective: "3D AI Risk Metrics, Monitoring, and Reporting",
      difficulty: "intermediate",
      question:
        "Which metric is the BEST key risk indicator for the risk that a deployed fraud detection model becomes less effective over time?",
      options: [
        { id: "A", text: "The number of models in the organisation's AI inventory", rationale: "Inventory size describes exposure at portfolio level, not the effectiveness of this model." },
        { id: "B", text: "The trend of detection rate and false positives against confirmed outcomes, with thresholds that trigger review", rationale: "Correct. A KRI should be forward-looking and tied to the risk. Tracking production performance against ground truth, with agreed thresholds, signals degradation early." },
        { id: "C", text: "The number of hours the data science team spent training the model", rationale: "Training effort is an input measure and says nothing about current performance in production." },
        { id: "D", text: "The percentage of the AI budget spent this year", rationale: "Budget consumption is a financial metric unrelated to the model's effectiveness." },
      ],
      answer: "B",
      explanation:
        "Model effectiveness degrades as data and fraud patterns drift. The NIST AI RMF (MEASURE 2.4) calls for the functionality and behaviour of the AI system to be monitored in production, and thresholds turn that monitoring into a reportable risk indicator.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d3-vendor-model-changes",
      domain: "d3",
      objective: "3E AI Supply Chain Risk Management (e.g., third party resources)",
      difficulty: "advanced",
      question:
        "A company uses a third-party generative AI service in a customer-facing process. The contract allows the provider to change the underlying model at any time without notice. Which contract change BEST addresses this risk?",
      options: [
        { id: "A", text: "Advance notice of material model changes, a test window and an exit right", rationale: "Correct. Notice and a test window let the company re-validate the service, and an exit right gives a remedy if the new model is not acceptable." },
        { id: "B", text: "A discount on the subscription fee if the service is unavailable", rationale: "Service credits address availability, not unannounced changes in model behaviour." },
        { id: "C", text: "A clause stating that the provider's model will never produce inaccurate or harmful output", rationale: "No provider can guarantee this, and such a clause would not give the company practical control over changes." },
        { id: "D", text: "Moving all prompts to a private network connection", rationale: "Private connectivity protects data in transit, but the provider could still change the model without notice." },
      ],
      answer: "A",
      explanation:
        "A third-party model is part of the AI supply chain, and an unannounced change can invalidate earlier testing. The NIST AI RMF (GOVERN 6) calls for policies and procedures for third-party AI risks and for contingency processes for failures in high-risk third-party systems.",
      reference: AI_RMF_CORE,
    },
    {
      id: "aair-d3-deactivation-mechanism",
      domain: "d3",
      objective: "3F AI Incident Response, BIA, Business Continuity, and Disaster Recovery",
      difficulty: "intermediate",
      question:
        "A customer service chatbot suddenly starts giving customers incorrect refund commitments. The incident team cannot quickly find who may switch the chatbot off or what the fallback is. Which control was MISSING?",
      options: [
        { id: "A", text: "A larger model with better instruction following", rationale: "A different model might reduce errors, but it does not give the team a way to stop the harm now." },
        { id: "B", text: "Monthly accuracy reporting to the steering committee", rationale: "Periodic reporting is useful oversight, but it does not provide an immediate response mechanism." },
        { id: "C", text: "A defined way to deactivate the system, with an assigned owner and a manual fallback", rationale: "Correct. The NIST AI RMF (MANAGE 2.4) calls for mechanisms, with assigned responsibilities, to supersede, disengage or deactivate AI systems whose performance is inconsistent with intended use." },
        { id: "D", text: "A disclaimer on the website stating that chatbot answers are not legally binding commitments", rationale: "A disclaimer may limit legal exposure, but it does not stop the system or restore the service safely." },
      ],
      answer: "C",
      explanation:
        "AI incident response needs a pre-agreed way to take a system out of service and keep the business process running. Assigning that authority and planning the fallback in advance, as part of business continuity planning, keeps the impact of an AI failure small.",
      reference: AI_RMF_CORE,
    },
  ],
};
