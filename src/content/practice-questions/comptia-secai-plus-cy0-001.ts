import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CompTIA SecAI+ (CY0-001) sample questions: ORIGINAL questions written by
 * CertRamp against CompTIA's published CY0-001 exam objectives (verified 11
 * November 2026). Not taken from the paid practice exams, not recalled exam
 * content, and not presented as real exam questions.
 */
const OBJECTIVES = {
  label: "CompTIA SecAI+ CY0-001 Exam Objectives (PDF)",
  url: "https://lecbyo.files.cmp.optimizely.com/download/856bb680aa9f11f09c4adeeca108c729",
};

const OWASP = (id: string, name: string, path: string) => ({
  label: `OWASP Top 10 for LLM Applications 2025: ${id} ${name}`,
  url: `https://genai.owasp.org/llmrisk/${path}/`,
});

export const comptiaSecaiPlusCy0001Questions: PracticeQuestionSet = {
  slug: "comptia-secai-plus-cy0-001",
  intro:
    "15 original CompTIA SecAI+ (CY0-001) practice questions across all four exam domains, spread roughly by official weight: two on Basic AI concepts related to cybersecurity (17%), six on Securing AI systems (40%), four on AI-assisted security (24%) and three on AI governance, risk, and compliance (19%). Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-11-11",
  updated: "2026-11-11",
  seo: {
    title: "CompTIA SecAI+ (CY0-001) Practice Questions with Answers (2026)",
    description:
      "15 free, original CompTIA SecAI+ CY0-001 practice questions on AI threats, gateway controls, excessive agency, AI-assisted SOC work and AI governance, with explanations.",
  },
  questions: [
    /* ── d1: Basic AI concepts related to cybersecurity (17%) ─────────────── */
    {
      id: "secai-d1-federated-learning",
      domain: "d1",
      objective: "1.1 Compare and contrast various AI types and techniques used in cybersecurity.",
      difficulty: "foundation",
      question:
        "Several hospitals want to train a shared model to detect anomalous access to patient records, but none of them may send raw records outside its own network. Which training technique fits this requirement?",
      options: [
        { id: "A", text: "Reinforcement learning", rationale: "Reinforcement learning trains an agent through rewards for actions in an environment. It does not address where the training data is held." },
        { id: "B", text: "Transfer learning from a public model", rationale: "Transfer learning reuses a pre-trained model, but the hospitals would still need to bring their data together to adapt it to their shared task." },
        { id: "C", text: "Federated learning", rationale: "Correct. Federated learning trains on decentralised data, so each participant keeps its raw data locally and only model updates are shared." },
        { id: "D", text: "Unsupervised learning on a central data lake", rationale: "Unsupervised learning can detect anomalies, but a central data lake requires exactly the data transfer the hospitals must avoid." },
      ],
      answer: "C",
      explanation:
        "Federated learning reduces the need to centralise sensitive data, which lowers the exposure of the raw records. OWASP lists it as a mitigation for sensitive information disclosure, alongside techniques such as differential privacy.",
      reference: OWASP("LLM02:2025", "Sensitive Information Disclosure", "llm022025-sensitive-information-disclosure"),
    },
    {
      id: "secai-d1-rag-data-provenance",
      domain: "d1",
      objective: "1.2 Explain the importance of data security in relation to AI.",
      difficulty: "intermediate",
      question:
        "An internal assistant uses retrieval-augmented generation over a shared document library that every employee can write to. A user notices the assistant quoting a fake bank account change policy that someone uploaded. Which measure BEST addresses the root cause?",
      options: [
        { id: "A", text: "Only ingest vetted sources with controlled write access, and track provenance", rationale: "Correct. The problem is untrusted data entering the knowledge base. Verifying provenance and integrity and limiting who can add content addresses it at the source." },
        { id: "B", text: "Increase the number of documents returned per query so the fake policy is outweighed", rationale: "Retrieving more chunks does not remove the malicious document and may even surface it more often." },
        { id: "C", text: "Switch to a larger embedding model with more dimensions", rationale: "Better embeddings improve retrieval relevance, not the trustworthiness of the content being retrieved." },
        { id: "D", text: "Encrypt the vector database at rest", rationale: "Encryption at rest protects against theft of the storage, not against authorised users adding false content." },
      ],
      answer: "A",
      explanation:
        "The data in a RAG knowledge base becomes part of the model's answers, so its provenance and integrity matter as much as training data. OWASP recommends tracking data origins and transformations and restricting the model to intended, vetted data sources.",
      reference: OWASP("LLM04:2025", "Data and Model Poisoning", "llm042025-data-and-model-poisoning"),
    },

    /* ── d2: Securing AI systems (40%) ────────────────────────────────────── */
    {
      id: "secai-d2-mitre-atlas",
      domain: "d2",
      objective: "2.1 Given a scenario, use AI threat-modeling resources.",
      difficulty: "foundation",
      question:
        "A threat modeling team wants a public knowledge base of adversary tactics and techniques against AI systems, with technique identifiers, mitigations and documented case studies. Which resource should they use?",
      options: [
        { id: "A", text: "OWASP Top 10 for LLM Applications", rationale: "The OWASP list ranks the most critical risk categories for LLM applications with mitigations, but it is not a matrix of adversary tactics and techniques with case studies." },
        { id: "B", text: "MIT AI Risk Repository", rationale: "The MIT repository catalogues AI risks drawn from published frameworks and research, not adversary techniques with identifiers." },
        { id: "C", text: "NIST AI Risk Management Framework", rationale: "The AI RMF is a voluntary framework for governing and managing AI risk, not a catalogue of attacker techniques." },
        { id: "D", text: "MITRE ATLAS", rationale: "Correct. MITRE ATLAS is a public knowledge base of adversary tactics, techniques and procedures targeting AI systems, with technique, mitigation and case study entries." },
      ],
      answer: "D",
      explanation:
        "The SecAI+ objectives list several threat-modeling resources, and each has a different purpose. ATLAS organises adversary behaviour into tactics and techniques (AML.TA and AML.T identifiers), links mitigations to techniques and documents real incidents as case studies.",
      reference: { label: "MITRE ATLAS data repository (GitHub)", url: "https://github.com/mitre-atlas/atlas-data" },
    },
    {
      id: "secai-d2-gateway-limits",
      domain: "d2",
      objective: "2.2 Given a set of requirements, implement security controls for AI systems.",
      difficulty: "intermediate",
      question:
        "A public LLM API's monthly cloud bill tripled. Logs show a few API keys sending huge numbers of very long prompts around the clock. Which control should be implemented at the AI gateway FIRST?",
      options: [
        { id: "A", text: "A stricter system prompt telling the model to give shorter answers", rationale: "A prompt instruction does not stop the volume or size of incoming requests and can be ignored or overridden." },
        { id: "B", text: "Per-key rate limits, token limits and input size quotas", rationale: "Correct. Rate limits, token limits and input quotas cap how much any single client can consume, which directly addresses denial of wallet and resource exhaustion." },
        { id: "C", text: "Encryption of prompts in transit with TLS 1.3", rationale: "Transport encryption protects confidentiality but has no effect on how many requests a client can send." },
        { id: "D", text: "Fine-tuning the model on shorter example conversations", rationale: "Fine-tuning changes model behaviour, not the volume of requests the API accepts." },
      ],
      answer: "B",
      explanation:
        "This is unbounded consumption, also called denial of wallet when the goal is cost. OWASP recommends input size limits, rate limiting with per-source quotas, resource allocation management and timeouts, all of which fit naturally into an AI gateway.",
      reference: OWASP("LLM10:2025", "Unbounded Consumption", "llm102025-unbounded-consumption"),
    },
    {
      id: "secai-d2-agent-least-privilege",
      domain: "d2",
      objective: "2.3 Given a scenario, implement appropriate access controls for AI systems.",
      difficulty: "intermediate",
      question:
        "An AI agent answers employees' questions about their own HR records. It connects to the HR database with a shared service account that has read and write access to all employee records. Which change BEST applies appropriate access control?",
      options: [
        { id: "A", text: "Add a guardrail that blocks answers containing other employees' names", rationale: "Output filtering may catch some leaks, but the agent still holds write access to every record and can be manipulated into using it." },
        { id: "B", text: "Rotate the service account password every 30 days", rationale: "Credential rotation limits the lifetime of a stolen password but does not reduce the account's excessive permissions." },
        { id: "C", text: "Have the agent act in the requesting user's context with read-only access to that user's own record", rationale: "Correct. Running the action with the user's own, narrowly scoped access removes both excessive permissions and excessive functionality, and authorisation is enforced by the database rather than the model." },
        { id: "D", text: "Instruct the agent in its system prompt to only look up the current user", rationale: "A prompt instruction is not an access control and can be bypassed by prompt injection; the agent's permissions stay the same." },
      ],
      answer: "C",
      explanation:
        "OWASP traces excessive agency to excessive functionality, permissions and autonomy. Executing in the user's context with least privilege, and enforcing authorisation in the downstream system, limits what a manipulated agent can do.",
      reference: OWASP("LLM06:2025", "Excessive Agency", "llm062025-excessive-agency"),
    },
    {
      id: "secai-d2-training-data-redaction",
      domain: "d2",
      objective: "2.4 Given a scenario, implement data security controls for AI systems.",
      difficulty: "foundation",
      question:
        "A company wants to fine-tune a model on three years of customer support tickets. Many tickets contain names, phone numbers and account numbers that the model does not need. Which control should be applied before training?",
      options: [
        { id: "A", text: "Redact or mask the personal data and keep only needed fields", rationale: "Correct. Sanitising and minimising the data before training means the model cannot memorise and later disclose personal data it never saw." },
        { id: "B", text: "Encrypt the tickets at rest and decrypt them during training", rationale: "Encryption at rest protects the stored files, but the model still learns from the full personal data during training." },
        { id: "C", text: "Tell users in the chatbot interface not to ask about other customers", rationale: "User guidance does not prevent the model from revealing memorised data through other prompts." },
        { id: "D", text: "Lower the model's temperature setting to reduce random output", rationale: "Temperature affects output variability, not whether personal data is present in the model." },
      ],
      answer: "A",
      explanation:
        "Data that is not in the training set cannot leak from the model. OWASP recommends data sanitisation, including scrubbing or masking sensitive content before it is used in training, and the SecAI+ objectives list redaction, masking and minimisation as data safety controls.",
      reference: OWASP("LLM02:2025", "Sensitive Information Disclosure", "llm022025-sensitive-information-disclosure"),
    },
    {
      id: "secai-d2-prompt-log-protection",
      domain: "d2",
      objective: "2.5 Given a scenario, implement monitoring and auditing for AI systems.",
      difficulty: "intermediate",
      question:
        "For audit purposes, a team enables full logging of all prompts and responses for an internal LLM assistant. Which additional control is MOST important?",
      options: [
        { id: "A", text: "Keeping the logs indefinitely so every interaction can be reviewed later", rationale: "Unlimited retention increases the amount of sensitive data at risk; retention should follow policy and need." },
        { id: "B", text: "Sending the logs to the model as extra context for future answers", rationale: "Feeding logs back into the model would spread any sensitive content to other users' sessions." },
        { id: "C", text: "Logging only the model's responses and dropping the prompts", rationale: "Dropping prompts removes evidence needed to detect prompt injection and misuse, which defeats the purpose of prompt monitoring." },
        { id: "D", text: "Sanitising sensitive data in the logs and restricting access to them", rationale: "Correct. Prompts and responses often contain personal data and secrets, so the SecAI+ objectives pair prompt and log monitoring with log sanitisation and protection." },
      ],
      answer: "D",
      explanation:
        "Prompt and response logs are valuable for detecting attacks, hallucinations and misuse, but they quickly become a store of sensitive information. Redacting sensitive fields and limiting access keeps the monitoring benefit without creating a new data leak.",
      reference: OBJECTIVES,
    },
    {
      id: "secai-d2-membership-inference",
      domain: "d2",
      objective: "2.6 Given a scenario, analyze the evidence of an attack and suggest compensating controls for AI systems.",
      difficulty: "advanced",
      question:
        "Logs for a credit risk model's API show a client submitting records of specific, named individuals and comparing the model's responses, apparently to work out whether those people's records were in the training data. Which attack is this, and which control helps against it?",
      options: [
        { id: "A", text: "Model inversion; mitigated by encrypting the model weights", rationale: "Model inversion tries to reconstruct training data features, and encrypting weights at rest does not change what the API reveals." },
        { id: "B", text: "Membership inference; mitigated by differential privacy and regularisation to reduce overfitting", rationale: "Correct. Determining whether a specific record was in the training set is membership inference. OWASP recommends adding noise through differential privacy and regularisation to reduce what the model reveals." },
        { id: "C", text: "Data poisoning; mitigated by dataset version control", rationale: "Poisoning manipulates training data to change model behaviour. The client here is probing the model, not altering its data." },
        { id: "D", text: "Prompt injection; mitigated by a prompt firewall", rationale: "Prompt injection manipulates model instructions. A credit risk model receiving structured records is being probed for training data membership." },
      ],
      answer: "B",
      explanation:
        "Membership inference exploits differences in how a model responds to records it was trained on, which is stronger when the model is overfitted. Differential privacy, regularisation and monitoring for unusual query patterns reduce the risk.",
      reference: { label: "OWASP Machine Learning Security Top 10: ML04:2023 Membership Inference Attack", url: "https://owasp.github.io/www-project-machine-learning-security-top-10/docs/ML04_2023-Membership_Inference_Attack" },
    },

    /* ── d3: AI-assisted security (24%) ───────────────────────────────────── */
    {
      id: "secai-d3-ueba-unsupervised",
      domain: "d3",
      objective: "3.1 Given a scenario, use AI-enabled tools to facilitate security tasks.",
      difficulty: "intermediate",
      question:
        "A SOC wants to detect unusual insider behaviour, such as an account suddenly downloading large volumes of files at night. It has no labelled examples of past insider incidents. Which AI approach fits BEST?",
      options: [
        { id: "A", text: "Signature matching against known malware hashes", rationale: "Signature matching finds known artefacts. Insider misuse with legitimate credentials leaves no malware signature." },
        { id: "B", text: "Unsupervised anomaly detection on a baseline of normal user behaviour", rationale: "Correct. Unsupervised learning does not need labelled attacks; it learns what normal looks like and flags deviations, which suits insider and novel threats." },
        { id: "C", text: "A supervised classifier trained on labelled examples of past insider incidents", rationale: "Supervised learning needs labelled examples, which the SOC does not have." },
        { id: "D", text: "A chatbot that answers analysts' questions about the security policy", rationale: "A policy chatbot can help analysts, but it does not detect behavioural anomalies in activity data." },
      ],
      answer: "B",
      explanation:
        "The SecAI+ objectives list anomaly detection and pattern recognition among the use cases for AI-enabled security tools. When there are no labelled attack examples, an unsupervised model that baselines normal behaviour is the practical choice, with analysts reviewing what it flags.",
      reference: OBJECTIVES,
    },
    {
      id: "secai-d3-deepfake-verification",
      domain: "d3",
      objective: "3.2 Explain how AI enables or enhances attack vectors.",
      difficulty: "foundation",
      question:
        "An accounts payable clerk receives a video call from someone who looks and sounds exactly like the CFO, urgently requesting a transfer to a new supplier account. Which control BEST protects against this type of attack?",
      options: [
        { id: "A", text: "Out-of-band verification, such as a call back to a known number", rationale: "Correct. Deepfakes can convincingly imitate a person's face and voice, so the defence is a process control that does not rely on recognising the caller." },
        { id: "B", text: "Training staff to look for visual glitches and lip-sync errors in video calls", rationale: "Awareness helps, but deepfake quality keeps improving, so spotting artefacts cannot be the main control." },
        { id: "C", text: "Requiring video instead of audio for all executive requests", rationale: "Video can be faked as well, so it does not establish identity on its own." },
        { id: "D", text: "Blocking all external video conferencing tools", rationale: "This disrupts business and does not stop impersonation through other channels such as phone calls." },
      ],
      answer: "A",
      explanation:
        "The SecAI+ objectives list deepfakes for impersonation as an AI-enhanced attack vector. Because the media itself cannot be trusted, verification through an independent, pre-registered channel is the reliable control for high-risk requests.",
      reference: OBJECTIVES,
    },
    {
      id: "secai-d3-ai-triage-human-approval",
      domain: "d3",
      objective: "3.3 Given a scenario, use AI to automate security tasks.",
      difficulty: "intermediate",
      question:
        "A SOC introduces an AI agent that summarises alerts, correlates them and proposes response actions. Some proposed actions include disabling user accounts and isolating production servers. What is the BEST design?",
      options: [
        { id: "A", text: "Let the agent execute all actions automatically to minimise response time", rationale: "Full autonomy for high-impact actions creates excessive agency; a wrong or manipulated decision could take down production." },
        { id: "B", text: "Use the agent only for summaries and never let it propose actions", rationale: "This discards much of the value of AI-assisted triage; the risk can be managed without removing it." },
        { id: "C", text: "Let the agent handle low-impact steps, but require analyst approval for high-impact actions such as disabling accounts or isolating servers", rationale: "Correct. Human-in-the-loop approval for high-impact actions keeps the speed benefit while preventing an error or a manipulated input from causing major damage." },
        { id: "D", text: "Allow the agent to act automatically if its confidence score is above 90%", rationale: "Model confidence is not a reliable safeguard; a manipulated or wrong decision can still score high." },
      ],
      answer: "C",
      explanation:
        "AI can speed up triage and correlation, but high-impact response actions need human oversight. OWASP recommends requiring human approval for high-impact actions, and the SecAI+ objectives stress human-in-the-loop design across the AI life cycle.",
      reference: OWASP("LLM06:2025", "Excessive Agency", "llm062025-excessive-agency"),
    },
    {
      id: "secai-d3-hallucinated-packages",
      domain: "d3",
      objective: "3.3 Given a scenario, use AI to automate security tasks.",
      difficulty: "advanced",
      question:
        "Developers increasingly accept AI-generated code. A review finds that the assistant sometimes suggests importing packages that do not exist in the official registry, and attackers are known to register such names. Which CI/CD control MOST directly addresses this risk?",
      options: [
        { id: "A", text: "Unit tests that check the business logic of the generated functions", rationale: "Unit tests verify behaviour, but a malicious package can pass them while running harmful code at install time." },
        { id: "B", text: "Automated rollback of deployments when error rates rise", rationale: "Rollback reacts after deployment and does not stop a malicious dependency from entering the build." },
        { id: "C", text: "Linting the generated code for style issues", rationale: "Linting improves code quality, but it does not verify that a dependency is legitimate." },
        { id: "D", text: "Software composition analysis that checks every dependency against approved, verified packages before the build", rationale: "Correct. SCA in the pipeline inspects dependencies and can block unknown or unapproved packages, catching hallucinated names before they are installed." },
      ],
      answer: "D",
      explanation:
        "OWASP describes LLMs suggesting insecure or non-existent code libraries and attackers publishing malicious packages under commonly hallucinated names. Treating AI-generated code like any other code, with software composition analysis and an approved dependency list in CI/CD, closes this gap.",
      reference: OWASP("LLM09:2025", "Misinformation", "llm092025-misinformation"),
    },

    /* ── d4: AI governance, risk, and compliance (19%) ────────────────────── */
    {
      id: "secai-d4-shadow-ai",
      domain: "d4",
      objective: "4.2 Explain risks associated with AI.",
      difficulty: "foundation",
      question:
        "A security team discovers that staff regularly paste confidential contract text into a free public AI chatbot. The company has no approved AI tool. Which response BEST balances risk and business need?",
      options: [
        { id: "A", text: "Allow the use to continue because the chatbot provider is large and well known", rationale: "A provider's reputation does not make unsanctioned processing of confidential data compliant with company policy." },
        { id: "B", text: "Block the chatbot and ban all AI use permanently", rationale: "A blanket ban without an alternative tends to push use to personal devices, creating more shadow AI." },
        { id: "C", text: "Set a sanctioned-use policy, offer an approved private model and govern data", rationale: "Correct. The SecAI+ objectives (4.3) list sanctioned versus unsanctioned use, private versus public models and sensitive data governance as corporate policy topics." },
        { id: "D", text: "Ask the chatbot provider to delete all past conversations", rationale: "Deletion requests may help clean up, but they do not prevent the behaviour from continuing." },
      ],
      answer: "C",
      explanation:
        "Shadow AI is a form of shadow IT that can leak sensitive data. A clear policy, an approved alternative and data governance give staff a safe way to use AI and give the organisation a basis for monitoring and enforcement.",
      reference: OBJECTIVES,
    },
    {
      id: "secai-d4-ai-rmf-map",
      domain: "d4",
      objective: "4.3 Summarize the impact of compliance on business use and development of AI.",
      difficulty: "intermediate",
      question:
        "A company adopting the NIST AI RMF is documenting an AI system's intended purpose, users, deployment setting, potential impacts and the organisation's risk tolerance. Which AI RMF function does this work belong to?",
      options: [
        { id: "A", text: "Map", rationale: "Correct. Map establishes the context to frame risks, including intended purposes, deployment settings, impacts and risk tolerances, and its results inform Measure and Manage." },
        { id: "B", text: "Measure", rationale: "Measure uses methods and metrics to analyse, assess and monitor risks that Map has identified." },
        { id: "C", text: "Manage", rationale: "Manage prioritises and treats mapped and measured risks and plans response and recovery." },
        { id: "D", text: "Govern", rationale: "Govern sets the cross-cutting culture, policies and accountability, but documenting the context of a specific system is Map." },
      ],
      answer: "A",
      explanation:
        "The NIST AI RMF core has four functions: Govern, Map, Measure and Manage. Map creates the context for each AI system, and its outcomes support an initial go or no-go decision before the risks are measured and managed.",
      reference: { label: "NIST AI RMF 1.0 (NIST AI 100-1), Section 5: AI RMF Core", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" },
    },
    {
      id: "secai-d4-eu-ai-act-transparency",
      domain: "d4",
      objective: "4.3 Summarize the impact of compliance on business use and development of AI.",
      difficulty: "intermediate",
      question:
        "A retailer deploys a customer service chatbot for EU customers. It does not make decisions about credit, employment or access to essential services. Under the EU AI Act's risk-based approach, which obligation is MOST relevant?",
      options: [
        { id: "A", text: "A ban on the system, because chatbots are a prohibited practice", rationale: "Prohibited practices include social scoring and harmful manipulation. Ordinary customer service chatbots are not banned." },
        { id: "B", text: "Full high-risk obligations, including a conformity assessment before go-live", rationale: "High-risk obligations apply to use cases such as recruitment or credit scoring, not to a general customer service chatbot." },
        { id: "C", text: "No obligations at all, because chatbots are minimal risk", rationale: "The European Commission names chatbots specifically as systems with transparency obligations, so they are not in the no-rules tier." },
        { id: "D", text: "Transparency: users must be told they are interacting with a machine", rationale: "Correct. The European Commission describes chatbots as a transparency risk, where users must be informed that they are talking to a machine." },
      ],
      answer: "D",
      explanation:
        "The EU AI Act sorts AI systems into unacceptable, high, transparency and minimal risk. Chatbots fall under transparency obligations, so the key requirement is clear disclosure that the customer is talking to AI.",
      reference: { label: "European Commission: AI Act (regulatory framework for AI)", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
    },
  ],
};
