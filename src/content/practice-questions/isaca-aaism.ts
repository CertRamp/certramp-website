import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free ISACA AAISM sample questions — ORIGINAL questions written by CertRamp
 * against the three domains of ISACA's AAISM exam content outline. Not taken
 * from the paid practice exams, not recalled exam content, and not presented
 * as real exam questions.
 */
const OUTLINE = {
  label: "ISACA — AAISM exam content outline",
  url: "https://www.isaca.org/credentialing/aaism/aaism-exam-content-outline",
};

export const isacaAaismQuestions: PracticeQuestionSet = {
  slug: "isaca-aaism",
  intro:
    "15 original ISACA AAISM practice questions across the three domains of the AAISM exam content outline, weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AAISM Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original ISACA AAISM practice questions on AI governance, AI risk management and AI security controls — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: AI Governance and Program Management (31%) ─────────────── */
    {
      id: "aaism-d1-ai-inventory",
      domain: "d1",
      objective: "AI Governance and Program Management",
      difficulty: "foundation",
      question:
        "A newly appointed AI security manager learns that several business units use AI tools, but nobody can say which ones or what data they process. What should the manager do FIRST?",
      options: [
        { id: "A", text: "Block all AI services at the web proxy until a policy is approved", rationale: "A blanket block disrupts the business without knowing what is in use or how critical it is, and often drives usage further into the shadows." },
        { id: "B", text: "Establish an inventory of AI systems and use cases, including their owners and the data they use", rationale: "Correct. You cannot govern, risk-assess or protect AI systems you do not know about. An inventory with owners and data flows is the basis for every later governance and risk decision." },
        { id: "C", text: "Commission a penetration test of the most popular AI tool", rationale: "Testing one tool is premature when the overall landscape and its risks are unknown." },
        { id: "D", text: "Buy an AI security monitoring product", rationale: "Selecting technology before understanding the scope and requirements is a classic management error." },
      ],
      answer: "B",
      explanation:
        "Visibility comes first. An AI inventory that records each system, its business owner, purpose and data allows the programme to prioritise risk assessments and controls instead of reacting tool by tool.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d1-ownership",
      domain: "d1",
      objective: "AI Governance and Program Management",
      difficulty: "intermediate",
      question:
        "Marketing wants to deploy a generative AI assistant that drafts customer emails. Who should be accountable for accepting the residual risk of this use case?",
      options: [
        { id: "A", text: "The AI security manager", rationale: "Security advises on risk and controls but does not own business risk decisions for a use case it does not run." },
        { id: "B", text: "The AI model provider", rationale: "The provider is responsible for its service, but cannot accept risk on behalf of the organisation." },
        { id: "C", text: "The data scientist who configures the assistant", rationale: "Technical staff implement the solution; they lack the authority to accept business risk." },
        { id: "D", text: "The business owner of the marketing use case", rationale: "Correct. Risk acceptance sits with the business owner who benefits from the use case and has the authority to decide, informed by security's assessment." },
      ],
      answer: "D",
      explanation:
        "Good AI governance assigns clear ownership. Security identifies and assesses risks and proposes controls, but the accountable business owner decides whether residual risk is acceptable within the organisation's risk appetite.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d1-policy",
      domain: "d1",
      objective: "AI Governance and Program Management",
      difficulty: "intermediate",
      question:
        "Staff are pasting confidential contract text into public generative AI chat services. Which action BEST addresses the root cause from a governance perspective?",
      options: [
        { id: "A", text: "Publish an acceptable use policy for AI that defines approved tools and permitted data, supported by awareness training", rationale: "Correct. The root cause is the absence of clear rules and awareness. A policy that names approved tools and data classes, backed by training, sets the expectation that technical controls can then enforce." },
        { id: "B", text: "Discipline the employees involved", rationale: "Sanctions without a published rule are hard to justify and do not prevent recurrence across the organisation." },
        { id: "C", text: "Ask the public AI provider to delete the submitted data", rationale: "This may limit damage from past incidents, but it does nothing to prevent the behaviour." },
        { id: "D", text: "Encrypt all contracts at rest", rationale: "Encryption at rest does not stop authorised users from copying content into an external service." },
      ],
      answer: "A",
      explanation:
        "Governance questions usually reward the answer that sets direction: policy, roles and awareness. Technical controls such as data loss prevention then enforce the policy rather than replace it.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d1-metrics",
      domain: "d1",
      objective: "AI Governance and Program Management",
      difficulty: "advanced",
      question:
        "The board asks how effective the AI security programme is. Which metric gives the MOST meaningful view for this audience?",
      options: [
        { id: "A", text: "The number of prompts blocked by the AI gateway each month", rationale: "An operational activity count that says little about whether business risk is under control." },
        { id: "B", text: "The number of AI security tools deployed", rationale: "Tool counts measure spending, not effectiveness." },
        { id: "C", text: "The percentage of high-risk AI use cases with a completed risk assessment and approved controls", rationale: "Correct. This metric links the programme to risk coverage of the most critical AI use cases, which is what the board needs to judge." },
        { id: "D", text: "The average response time of the AI models in production", rationale: "A performance measure, not a security programme measure." },
      ],
      answer: "C",
      explanation:
        "Metrics for senior management should show whether the programme reduces risk to acceptable levels. Coverage of high-risk use cases by assessments and controls is far more meaningful to a board than raw operational counts.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d1-third-party",
      domain: "d1",
      objective: "AI Governance and Program Management",
      difficulty: "intermediate",
      question:
        "Procurement is about to sign a contract with a vendor whose product embeds a third-party large language model. Which contract provision is MOST important from an AI security management perspective?",
      options: [
        { id: "A", text: "A discount for multi-year commitment", rationale: "A commercial term with no security value." },
        { id: "B", text: "Terms that restrict the use of the organisation's data for model training and require notification of security incidents", rationale: "Correct. These terms address the specific AI risks of the arrangement: the organisation's data being reused to train models and timely knowledge of incidents affecting it." },
        { id: "C", text: "A clause naming the vendor's preferred cloud region for marketing material", rationale: "Irrelevant to the security of the organisation's data." },
        { id: "D", text: "A requirement that the vendor uses the newest model version at all times", rationale: "Automatic model changes can introduce new behaviour and risk; this is not a security safeguard." },
      ],
      answer: "B",
      explanation:
        "Third-party AI introduces supply chain and data use risks. Contracts should cover how customer data may be used, including for training, plus incident notification, audit rights and change notification for models.",
      reference: OUTLINE,
    },

    /* ── Domain 2: AI Risk Management (31%) ───────────────────────────────── */
    {
      id: "aaism-d2-assessment-timing",
      domain: "d2",
      objective: "AI Risk Management",
      difficulty: "foundation",
      question:
        "When is the BEST time to perform the initial risk assessment for a new AI system?",
      options: [
        { id: "A", text: "After the first security incident involving the system", rationale: "Reactive assessment leaves the organisation exposed during the period it matters most." },
        { id: "B", text: "Once the system has been in production for a year", rationale: "By then design decisions and data choices are hard and expensive to change." },
        { id: "C", text: "During design, before data is collected and the model is built", rationale: "Correct. Assessing risk early lets security and privacy requirements shape data selection, architecture and controls, and allows a no-go decision before significant investment." },
        { id: "D", text: "Only when an external auditor requests it", rationale: "Risk management is an ongoing management responsibility, not an audit-driven exercise." },
      ],
      answer: "C",
      explanation:
        "Risk should be assessed at the start of the AI life cycle and revisited at major changes and periodically in operation. Early assessment is cheaper and gives decision makers real options.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d2-drift",
      domain: "d2",
      objective: "AI Risk Management",
      difficulty: "intermediate",
      question:
        "A fraud detection model approved last year now misses a growing share of fraudulent transactions because customer behaviour has changed. How should this risk be handled?",
      options: [
        { id: "A", text: "Treat it as model drift: monitor performance against agreed thresholds and trigger reassessment and retraining when they are breached", rationale: "Correct. Performance degradation as real-world data changes is drift. Ongoing monitoring with defined thresholds and a reassessment process is the appropriate risk response." },
        { id: "B", text: "Accept it, because the model was approved last year", rationale: "Approval does not make a model's risk static; conditions have changed and the original assessment no longer holds." },
        { id: "C", text: "Report it as a data poisoning attack", rationale: "Poisoning is deliberate manipulation of training data. Nothing indicates an attacker here; the environment simply changed." },
        { id: "D", text: "Replace the model with manual review of all transactions immediately", rationale: "A disproportionate response that may be operationally impossible; the risk can be managed through monitoring and retraining." },
      ],
      answer: "A",
      explanation:
        "AI risk changes after deployment. Continuous monitoring of model performance, with thresholds owned by the business, turns drift from a silent failure into a managed risk.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d2-risk-treatment",
      domain: "d2",
      objective: "AI Risk Management",
      difficulty: "advanced",
      question:
        "An AI system that recommends loan decisions has a residual risk of unfair outcomes that exceeds the organisation's risk appetite, even after bias testing and retraining. The business still wants to use it. What is the MOST appropriate risk response?",
      options: [
        { id: "A", text: "Accept the risk, because the business wants the system", rationale: "Risk above appetite cannot simply be accepted at the business's wish; that would override the organisation's own risk criteria." },
        { id: "B", text: "Transfer the risk by buying cyber insurance", rationale: "Insurance does not address unfair outcomes for customers or the regulatory and reputational consequences." },
        { id: "C", text: "Ignore the issue until a regulator raises it", rationale: "Not a risk response at all." },
        { id: "D", text: "Mitigate further, for example by requiring human review of the recommendations, and escalate the decision if risk still exceeds appetite", rationale: "Correct. Additional controls such as human oversight reduce the risk; if it remains above appetite, the decision must be escalated to someone with the authority to decide." },
      ],
      answer: "D",
      explanation:
        "Risk within appetite can be accepted by the owner; risk above appetite needs further treatment or escalation. Human oversight is a common mitigating control for high-impact automated decisions.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d2-threat-model",
      domain: "d2",
      objective: "AI Risk Management",
      difficulty: "intermediate",
      question:
        "A team is threat modelling a customer support chatbot that can look up order details through an internal API. Which threat deserves the HIGHEST priority?",
      options: [
        { id: "A", text: "The chatbot occasionally gives an unhelpful answer about store opening hours", rationale: "A quality issue with low impact." },
        { id: "B", text: "A user manipulates the chatbot through crafted prompts into retrieving other customers' order details", rationale: "Correct. Prompt injection combined with access to an internal API can lead to unauthorised disclosure of personal data — high likelihood for an internet-facing system and high impact." },
        { id: "C", text: "The chatbot's response time increases slightly at peak hours", rationale: "A performance concern, not a priority security threat." },
        { id: "D", text: "Users dislike the chatbot's tone", rationale: "A user experience issue with no security impact." },
      ],
      answer: "B",
      explanation:
        "Prioritise threats by likelihood and impact. When a language model can call tools or APIs, prompt injection becomes a path to real data access, so it ranks far above quality or performance issues.",
      reference: OUTLINE,
    },

    /* ── Domain 3: AI Technologies and Controls (38%) ─────────────────────── */
    {
      id: "aaism-d3-poisoning",
      domain: "d3",
      objective: "AI Technologies and Controls",
      difficulty: "foundation",
      question:
        "An attacker inserts carefully crafted records into a dataset that will later be used to train a spam filter, so that messages containing a certain phrase are classified as legitimate. What is this attack called?",
      options: [
        { id: "A", text: "Data poisoning", rationale: "Correct. Poisoning corrupts training data to change how the model behaves, here by creating a hidden backdoor triggered by a phrase." },
        { id: "B", text: "Model extraction", rationale: "Model extraction copies a model's behaviour by querying it; it does not change the training data." },
        { id: "C", text: "Membership inference", rationale: "Membership inference tries to learn whether a specific record was in the training data." },
        { id: "D", text: "Denial of service", rationale: "Denial of service targets availability, not the model's learned behaviour." },
      ],
      answer: "A",
      explanation:
        "Poisoning attacks target the training stage. Controls include provenance checks on data sources, integrity protection of datasets, data validation and testing the trained model for unexpected behaviour.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d3-agent-privilege",
      domain: "d3",
      objective: "AI Technologies and Controls",
      difficulty: "advanced",
      question:
        "An AI agent reads incoming supplier emails and can create payments in the finance system. Which control MOST effectively limits the impact of a malicious instruction hidden in an email?",
      options: [
        { id: "A", text: "Add a line to the system prompt telling the agent to ignore instructions found in emails", rationale: "Prompt-level instructions can be bypassed and are not a reliable security control on their own." },
        { id: "B", text: "Use a larger, more capable language model", rationale: "A more capable model is not inherently resistant to injected instructions." },
        { id: "C", text: "Restrict the agent to least-privilege permissions and require human approval before any payment is executed", rationale: "Correct. Limiting what the agent can do and adding a human approval step for high-impact actions contains the damage even if the injection succeeds." },
        { id: "D", text: "Log the agent's actions for monthly review", rationale: "Logging is useful for detection, but a monthly review comes far too late to stop a fraudulent payment." },
      ],
      answer: "C",
      explanation:
        "Indirect prompt injection cannot be ruled out entirely, so controls must limit impact. Least privilege for agent tools and human approval for irreversible or high-value actions are the most dependable safeguards.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d3-model-supply-chain",
      domain: "d3",
      objective: "AI Technologies and Controls",
      difficulty: "intermediate",
      question:
        "Developers want to download pre-trained models from a public model repository for use in production. Which control BEST reduces the supply chain risk?",
      options: [
        { id: "A", text: "Allow any model with a high number of downloads", rationale: "Popularity is not evidence of integrity; attackers deliberately target popular names." },
        { id: "B", text: "Let each developer decide which models are trustworthy", rationale: "Inconsistent, undocumented decisions are not a control." },
        { id: "C", text: "Disable antivirus on build servers to avoid false positives on model files", rationale: "This weakens security rather than strengthening it." },
        { id: "D", text: "Use an approved internal model registry where models are verified for source and integrity and scanned before release", rationale: "Correct. A controlled registry with provenance, integrity verification and scanning (for example for unsafe serialisation formats) brings external models under change and asset management." },
      ],
      answer: "D",
      explanation:
        "Pre-trained models are third-party components and can carry backdoors or malicious code. Treat them like software dependencies: approved sources, integrity checks, scanning and a managed internal registry.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d3-extraction",
      domain: "d3",
      objective: "AI Technologies and Controls",
      difficulty: "intermediate",
      question:
        "A competitor is suspected of sending large numbers of systematic queries to a public pricing-prediction API in order to recreate the model. Which control is MOST appropriate?",
      options: [
        { id: "A", text: "Retrain the model on a larger dataset", rationale: "Retraining does not stop someone copying the model through its interface." },
        { id: "B", text: "Rate limiting and per-client quotas with monitoring for unusual query patterns", rationale: "Correct. Model extraction depends on high query volumes; rate limits, quotas, authentication and anomaly detection make it slower, more costly and easier to detect." },
        { id: "C", text: "Encrypt the training data at rest", rationale: "Encryption at rest protects stored data, not a model exposed through an API." },
        { id: "D", text: "Publish the model's source code to remove the incentive", rationale: "This would give away the asset the organisation is trying to protect." },
      ],
      answer: "B",
      explanation:
        "Model extraction (model stealing) works through the inference interface. Access controls, rate limiting, returning only necessary output detail and monitoring of query patterns are the main defences.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d3-training-data-privacy",
      domain: "d3",
      objective: "AI Technologies and Controls",
      difficulty: "advanced",
      question:
        "A model will be trained on customer records that contain personal data, but the use case only needs aggregated behaviour patterns. Which control should be applied FIRST?",
      options: [
        { id: "A", text: "Data minimisation — remove or de-identify personal data fields that the use case does not need before training", rationale: "Correct. Removing unnecessary personal data at the source reduces privacy risk, including the risk of the model memorising and later revealing it, and is cheaper than compensating controls downstream." },
        { id: "B", text: "Train the model first and filter personal data from its outputs later", rationale: "Output filtering is a useful additional layer, but it leaves personal data inside the model and is easier to bypass." },
        { id: "C", text: "Make the model available only during business hours", rationale: "Time-based restrictions do not address the presence of personal data in training." },
        { id: "D", text: "Increase the number of training epochs", rationale: "More training can increase memorisation; it is not a privacy control." },
      ],
      answer: "A",
      explanation:
        "Privacy controls are most effective early in the AI data life cycle. Minimisation and de-identification before training reduce the risk of membership inference and data leakage through model outputs.",
      reference: OUTLINE,
    },
    {
      id: "aaism-d3-output-handling",
      domain: "d3",
      objective: "AI Technologies and Controls",
      difficulty: "intermediate",
      question:
        "An internal web application displays text generated by a language model directly in users' browsers. A tester shows that the model can be induced to produce script code that runs in the browser. What is the BEST fix?",
      options: [
        { id: "A", text: "Ask users not to enter unusual prompts", rationale: "User guidance is not a technical control and does not stop a malicious user." },
        { id: "B", text: "Switch to a different language model provider", rationale: "Any model can be induced to produce such output; the flaw is in the application." },
        { id: "C", text: "Treat model output as untrusted input: validate and encode it before rendering it in the browser", rationale: "Correct. Model output must be handled like any other untrusted data. Output encoding and validation prevent injected script from executing." },
        { id: "D", text: "Increase the model's temperature setting", rationale: "Temperature changes randomness, not security." },
      ],
      answer: "C",
      explanation:
        "Insecure output handling turns model responses into classic injection flaws such as cross-site scripting. Applications should never trust model output and must apply the same validation and encoding as for user input.",
      reference: OUTLINE,
    },
  ],
};
