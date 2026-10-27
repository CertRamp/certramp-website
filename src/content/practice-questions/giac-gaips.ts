import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free GIAC GAIPS sample questions — ORIGINAL questions written by CertRamp
 * against GIAC's published exam certification objectives (verified 27 October
 * 2026). Not taken from the paid practice exams, not recalled exam content,
 * and not presented as real exam questions.
 */
const OWASP = (id: string, name: string, path: string) => ({
  label: `OWASP Top 10 for LLM Applications 2025 — ${id} ${name}`,
  url: `https://genai.owasp.org/llmrisk/${path}/`,
});

const NIST_AML = {
  label: "NIST AI 100-2 E2025 — Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations",
  url: "https://csrc.nist.gov/pubs/ai/100/2/e2025/final",
};

export const giacGaipsQuestions: PracticeQuestionSet = {
  slug: "giac-gaips",
  intro:
    "15 original GIAC GAIPS practice questions across all eight exam certification objectives published by GIAC. GIAC does not publish weightings, so the questions are spread evenly. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "GIAC GAIPS Practice Questions with Answers (2026)",
    description:
      "15 free, original GIAC GAIPS practice questions on agentic AI, prompt injection, RAG, MLSecOps and AI risk management — each with a full explanation.",
  },
  questions: [
    /* ── d1: Agentic Systems and AI Integrations ──────────────────────────── */
    {
      id: "gaips-d1-mcp-token-passthrough",
      domain: "d1",
      objective: "Agentic Systems and AI Integrations",
      difficulty: "advanced",
      question:
        "An MCP server sits in front of a third-party API. To keep the design simple, it accepts the access token sent by the MCP client and forwards it unchanged to the downstream API, without checking who the token was issued to. What should the security review conclude?",
      options: [
        { id: "A", text: "The design is acceptable as long as the tokens are sent over TLS", rationale: "TLS protects the token in transit, but does nothing about the server accepting tokens that were never issued to it." },
        { id: "B", text: "The design is acceptable if the downstream API enforces rate limiting", rationale: "Downstream controls that depend on the token audience are exactly what token passthrough can circumvent; it also breaks accountability at the MCP server." },
        { id: "C", text: "This is token passthrough, which the MCP specification forbids: the server must not accept tokens that were not explicitly issued for it", rationale: "Correct. The MCP security best practices call token passthrough an anti-pattern and state that MCP servers MUST NOT accept tokens not explicitly issued for the MCP server." },
        { id: "D", text: "The server should store the client's token in the system prompt so the agent can reuse it", rationale: "Credentials should never be placed in prompts; this adds a leakage risk without addressing the audience problem." },
      ],
      answer: "C",
      explanation:
        "Token passthrough lets clients bypass controls that rely on the token audience, muddies the audit trail and breaks trust boundaries. The fix is audience validation: an MCP server only accepts tokens issued for itself and obtains its own tokens for downstream APIs.",
      reference: { label: "Model Context Protocol — Security Best Practices", url: "https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices" },
    },
    {
      id: "gaips-d1-excessive-agency",
      domain: "d1",
      objective: "Agentic Systems and AI Integrations",
      difficulty: "intermediate",
      question:
        "An assistant summarises a user's inbox. Its mail plugin connects with a shared service account that can read, send and delete mail for every mailbox. Which change best addresses the excessive agency risk?",
      options: [
        { id: "A", text: "Give the plugin read-only access, scoped to the requesting user's own mailbox", rationale: "Correct. This removes excessive functionality (send and delete are not needed) and excessive permissions (the action runs in the user's context with minimum privileges)." },
        { id: "B", text: "Add an instruction to the system prompt telling the model never to delete mail", rationale: "A prompt instruction is not a security control; a successful prompt injection can override it, and the plugin still holds the permissions." },
        { id: "C", text: "Log every plugin call and review the logs weekly", rationale: "OWASP notes that logging and monitoring can limit damage but do not prevent excessive agency." },
        { id: "D", text: "Switch to a larger model that follows instructions more reliably", rationale: "Model capability does not reduce the permissions granted to the plugin." },
      ],
      answer: "A",
      explanation:
        "OWASP LLM06:2025 traces excessive agency to excessive functionality, excessive permissions and excessive autonomy. Minimising the extension's functions and running it with the user's least privilege removes the dangerous capability instead of hoping the model will not use it.",
      reference: OWASP("LLM06:2025", "Excessive Agency", "llm062025-excessive-agency"),
    },

    /* ── d2: AI and LLM Foundations ───────────────────────────────────────── */
    {
      id: "gaips-d2-indirect-injection",
      domain: "d2",
      objective: "AI and LLM Foundations",
      difficulty: "foundation",
      question:
        "A browsing assistant summarises a web page that contains hidden text instructing the model to send the user's chat history to an external URL. The user never typed anything malicious. How is this attack best classified?",
      options: [
        { id: "A", text: "Direct prompt injection", rationale: "Direct injection comes from the user's own prompt. Here the instructions arrive via external content." },
        { id: "B", text: "Model inversion", rationale: "Model inversion tries to reconstruct training data from a model; it is not about instructions hidden in input content." },
        { id: "C", text: "Training data poisoning", rationale: "Poisoning manipulates data used to train or fine-tune the model, not content processed at inference time." },
        { id: "D", text: "Indirect prompt injection", rationale: "Correct. The malicious instructions reach the model through an external source the application processes, such as a website or file." },
      ],
      answer: "D",
      explanation:
        "OWASP distinguishes direct prompt injection (the user's input alters the model's behaviour) from indirect prompt injection (the model accepts input from external sources such as websites or files). Indirect injection matters most for agents and RAG systems that read untrusted content.",
      reference: OWASP("LLM01:2025", "Prompt Injection", "llm01-prompt-injection"),
    },
    {
      id: "gaips-d2-evasion-vs-poisoning",
      domain: "d2",
      objective: "AI and LLM Foundations",
      difficulty: "intermediate",
      question:
        "According to the NIST adversarial machine learning taxonomy (NIST AI 100-2 E2025), what distinguishes an evasion attack from a poisoning attack?",
      options: [
        { id: "A", text: "Evasion targets generative models only; poisoning targets classifiers only", rationale: "Both attack classes are described across machine learning types; this is not the distinguishing factor." },
        { id: "B", text: "Evasion modifies inputs at deployment time to create adversarial examples; poisoning happens during the training stage", rationale: "Correct. NIST describes evasion as modifying test samples against an already trained model, and poisoning as attacks during the training stage." },
        { id: "C", text: "Evasion requires white-box access; poisoning always requires black-box access", rationale: "Attacker knowledge is a separate dimension of the taxonomy; neither class is defined by it." },
        { id: "D", text: "Evasion extracts the model's weights; poisoning extracts its training data", rationale: "Extracting model information or training data is a privacy attack in the NIST taxonomy, not evasion or poisoning." },
      ],
      answer: "B",
      explanation:
        "NIST classifies attacks partly by the lifecycle stage in which they occur. Evasion attacks craft adversarial examples against a deployed model, while poisoning attacks, including backdoor poisoning, corrupt the training stage.",
      reference: NIST_AML,
    },

    /* ── d3: AI Application Architecture and Development Frameworks ───────── */
    {
      id: "gaips-d3-output-handling-sql",
      domain: "d3",
      objective: "AI Application Architecture and Development Frameworks",
      difficulty: "intermediate",
      question:
        "A reporting feature asks an LLM to turn natural-language questions into SQL, then runs the generated statement directly against the production database. Which control most directly addresses the resulting risk?",
      options: [
        { id: "A", text: "Ask the model in the system prompt to produce only safe SELECT statements", rationale: "Prompt instructions can be bypassed; they are not a reliable control over what reaches the database." },
        { id: "B", text: "Increase the model's temperature to make outputs less predictable", rationale: "Randomness does nothing to make generated SQL safe." },
        { id: "C", text: "Treat model output as untrusted: use parameterised queries and a least-privilege database account", rationale: "Correct. OWASP recommends a zero-trust approach to model output, with parameterised queries for database operations, combined with least privilege on the downstream system." },
        { id: "D", text: "Cache the model's responses so the same query is not generated twice", rationale: "Caching affects cost and latency, not injection risk." },
      ],
      answer: "C",
      explanation:
        "Improper output handling occurs when LLM output is passed to downstream components without validation, which can lead to SQL injection, XSS or remote code execution. Treat the model like any other untrusted user and apply the same controls you would to user input.",
      reference: OWASP("LLM05:2025", "Improper Output Handling", "llm052025-improper-output-handling"),
    },
    {
      id: "gaips-d3-system-prompt-secret",
      domain: "d3",
      objective: "AI Application Architecture and Development Frameworks",
      difficulty: "foundation",
      question:
        "A developer puts the database connection string and the rule \"only managers may see salary data\" into the system prompt of a chatbot. What is the main design flaw?",
      options: [
        { id: "A", text: "The system prompt is too long and will reduce response quality", rationale: "Length is not the security problem here." },
        { id: "B", text: "The system prompt should be encrypted at rest", rationale: "Encryption at rest does not help once the model can be induced to reveal its prompt." },
        { id: "C", text: "The rules should be moved into the user prompt instead", rationale: "That makes the problem worse: the user then controls the rules." },
        { id: "D", text: "Secrets and access rules do not belong in the system prompt; credentials must be kept out of the model's reach and authorisation enforced outside the LLM", rationale: "Correct. OWASP states that the system prompt should not be treated as a secret or used as a security control." },
      ],
      answer: "D",
      explanation:
        "System prompts can leak, so credentials and connection strings must live in systems the model cannot read. Permission checks such as who may see salary data belong in deterministic code, not in instructions the model is asked to follow.",
      reference: OWASP("LLM07:2025", "System Prompt Leakage", "llm072025-system-prompt-leakage"),
    },

    /* ── d4: AI Infrastructure and Deployment Security ────────────────────── */
    {
      id: "gaips-d4-denial-of-wallet",
      domain: "d4",
      objective: "AI Infrastructure and Deployment Security",
      difficulty: "foundation",
      question:
        "A public chatbot runs on a pay-per-token cloud model API. Overnight, automated clients send very large prompts at high volume and the monthly bill spikes. Which controls address this most directly?",
      options: [
        { id: "A", text: "Rate limiting, per-user quotas and limits on input size", rationale: "Correct. OWASP lists rate limiting, user quotas and input size validation as mitigations for unbounded consumption, including denial of wallet." },
        { id: "B", text: "Fine-tuning the model on examples of abusive prompts", rationale: "Fine-tuning changes model behaviour, but every request is still processed and billed." },
        { id: "C", text: "Moving the system prompt into a vector database", rationale: "This has no effect on request volume or cost." },
        { id: "D", text: "Enabling detailed logprobs in API responses", rationale: "Exposing logprobs helps attackers with model extraction and does nothing to limit consumption." },
      ],
      answer: "A",
      explanation:
        "Unbounded consumption covers attacks that exploit uncontrolled inference, including denial of wallet against pay-per-use services. Limits on who can call the model, how often and with how much input are the first line of defence.",
      reference: OWASP("LLM10:2025", "Unbounded Consumption", "llm102025-unbounded-consumption"),
    },
    {
      id: "gaips-d4-logprobs-extraction",
      domain: "d4",
      objective: "AI Infrastructure and Deployment Security",
      difficulty: "advanced",
      question:
        "A company exposes its proprietary model through an API that returns full token log-probabilities and allows unlimited queries. Which threat does this configuration most increase?",
      options: [
        { id: "A", text: "Training data poisoning", rationale: "Poisoning requires influence over training data; query access and logprobs do not provide that." },
        { id: "B", text: "Model extraction, where an attacker uses query outputs to replicate the model", rationale: "Correct. Detailed probabilities and unlimited queries help an attacker build a functional copy. OWASP recommends restricting logit_bias and logprobs exposure and rate limiting." },
        { id: "C", text: "System prompt leakage", rationale: "Logprobs do not by themselves reveal the system prompt; this is a different risk." },
        { id: "D", text: "Vector and embedding weaknesses", rationale: "This risk concerns RAG stores and embeddings, not the model API's output detail." },
      ],
      answer: "B",
      explanation:
        "NIST AI 100-2 classes model extraction as a privacy attack against deployed models, and OWASP lists functional model replication under unbounded consumption. Expose only the output detail the use case needs and limit query volume.",
      reference: OWASP("LLM10:2025", "Unbounded Consumption", "llm102025-unbounded-consumption"),
    },

    /* ── d5: AI Risk Management and Strategic Application ─────────────────── */
    {
      id: "gaips-d5-maestro",
      domain: "d5",
      objective: "AI Risk Management and Strategic Application",
      difficulty: "intermediate",
      question:
        "Your team needs a structured threat modelling method designed specifically for multi-agent AI systems, which examines threats layer by layer from foundation models up to the agent ecosystem. Which framework fits best?",
      options: [
        { id: "A", text: "The NIST Cybersecurity Framework", rationale: "A general cyber security risk framework, not a threat modelling method for agentic AI." },
        { id: "B", text: "The OWASP Top 10 for LLM Applications", rationale: "A list of the most critical risks for LLM applications, not a layered threat modelling method." },
        { id: "C", text: "The Cloud Security Alliance's MAESTRO framework", rationale: "Correct. MAESTRO (Multi-Agent Environment, Security, Threat, Risk, and Outcome) is a seven-layer threat modelling framework for agentic AI, from Foundation Models to the Agent Ecosystem." },
        { id: "D", text: "The Common Vulnerability Scoring System (CVSS)", rationale: "CVSS scores the severity of individual vulnerabilities; it is not a threat modelling method." },
      ],
      answer: "C",
      explanation:
        "MAESTRO was published by the Cloud Security Alliance to address threats that traditional methods miss in agentic systems. Its layers cover foundation models, data operations, agent frameworks, deployment and infrastructure, evaluation and observability, security and compliance, and the agent ecosystem.",
      reference: { label: "Cloud Security Alliance — Agentic AI Threat Modeling Framework: MAESTRO", url: "https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro" },
    },
    {
      id: "gaips-d5-ai-rmf",
      domain: "d5",
      objective: "AI Risk Management and Strategic Application",
      difficulty: "foundation",
      question:
        "Which set lists the four core functions of the NIST AI Risk Management Framework (AI RMF 1.0)?",
      options: [
        { id: "A", text: "Govern, Map, Measure, Manage", rationale: "Correct. The AI RMF core is organised into these four functions, with Govern applying across the other three." },
        { id: "B", text: "Identify, Protect, Detect, Respond", rationale: "These are functions of the NIST Cybersecurity Framework, not the AI RMF." },
        { id: "C", text: "Plan, Do, Check, Act", rationale: "This is the general continuous-improvement cycle used in management systems." },
        { id: "D", text: "Assess, Authorise, Monitor, Retire", rationale: "Not the AI RMF functions." },
      ],
      answer: "A",
      explanation:
        "The NIST AI RMF 1.0 (January 2023) defines Govern, Map, Measure and Manage. NIST also published a Generative AI Profile (NIST AI 600-1) in July 2024 that applies the framework to generative AI risks.",
      reference: { label: "NIST — AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    },

    /* ── d6: Development Pipelines and MLOps Security ─────────────────────── */
    {
      id: "gaips-d6-pickle",
      domain: "d6",
      objective: "Development Pipelines and MLOps Security",
      difficulty: "intermediate",
      question:
        "A data scientist wants to load a pickle-based PyTorch checkpoint downloaded from an unknown account on a public model hub into the training cluster. What is the primary risk?",
      options: [
        { id: "A", text: "The model may use too much GPU memory", rationale: "A resource concern, but not the primary security risk." },
        { id: "B", text: "The weights may be quantised and therefore less accurate", rationale: "An accuracy concern, not a security one." },
        { id: "C", text: "The licence may not allow commercial use", rationale: "Licensing matters for supply chain governance, but the immediate danger is code execution." },
        { id: "D", text: "Deserialising the pickle file can execute arbitrary code on the cluster", rationale: "Correct. Pickle can run Python code at deserialisation time, so untrusted files should not be unpickled; safer formats such as safetensors, scanning and source verification reduce the risk." },
      ],
      answer: "D",
      explanation:
        "Model files are code-adjacent artefacts. Load models only from trusted sources, prefer serialisation formats that do not execute code, verify integrity with signatures or hashes, and scan files before they enter the pipeline.",
      reference: { label: "Hugging Face — Pickle Scanning", url: "https://huggingface.co/docs/hub/security-pickle" },
    },
    {
      id: "gaips-d6-data-provenance",
      domain: "d6",
      objective: "Development Pipelines and MLOps Security",
      difficulty: "intermediate",
      question:
        "After a fine-tuned model starts producing biased output, your team cannot tell which training records changed between the last two pipeline runs. Which practice would best have helped detect and trace data manipulation?",
      options: [
        { id: "A", text: "Increasing the number of training epochs", rationale: "More epochs change model fit; they give no visibility into data changes." },
        { id: "B", text: "Data version control and provenance tracking for the training datasets", rationale: "Correct. OWASP recommends tracking data origins and transformations (for example with CycloneDX or an ML-BOM) and using data version control to detect manipulation." },
        { id: "C", text: "Switching the model endpoint to a private subnet", rationale: "Network isolation of the endpoint does not protect or track the training data." },
        { id: "D", text: "Adding a content filter on the model's output", rationale: "An output filter may hide symptoms but cannot identify which data was poisoned." },
      ],
      answer: "B",
      explanation:
        "Data and model poisoning can target pre-training, fine-tuning and embedding data. Versioned, provenance-tracked datasets let you compare runs, spot unexpected changes and roll back.",
      reference: OWASP("LLM04:2025", "Data and Model Poisoning", "llm042025-data-and-model-poisoning"),
    },

    /* ── d7: Knowledge Augmentation and Retrieval ─────────────────────────── */
    {
      id: "gaips-d7-multitenant-vector",
      domain: "d7",
      objective: "Knowledge Augmentation and Retrieval",
      difficulty: "intermediate",
      question:
        "A SaaS provider runs one shared vector database for all customers' RAG assistants. A customer reports that answers sometimes quote another company's documents. Which mitigation addresses the root cause?",
      options: [
        { id: "A", text: "Use a larger embedding model to improve retrieval precision", rationale: "Better relevance does not enforce who may retrieve which documents." },
        { id: "B", text: "Ask the model to ignore documents that belong to other customers", rationale: "The model cannot reliably enforce access control, and the data has already been retrieved." },
        { id: "C", text: "Permission-aware retrieval with access controls and logical partitioning per tenant", rationale: "Correct. OWASP recommends fine-grained, permission-aware vector stores with strict logical and access partitioning between groups." },
        { id: "D", text: "Lower the similarity threshold so fewer documents are returned", rationale: "Fewer results reduce the chance but do not prevent cross-tenant retrieval." },
      ],
      answer: "C",
      explanation:
        "Cross-context information leakage is a named risk under LLM08:2025 in multi-tenant environments that share a vector database. Access control must be enforced at retrieval time, before content reaches the model.",
      reference: OWASP("LLM08:2025", "Vector and Embedding Weaknesses", "llm082025-vector-and-embedding-weaknesses"),
    },
    {
      id: "gaips-d7-hidden-text",
      domain: "d7",
      objective: "Knowledge Augmentation and Retrieval",
      difficulty: "advanced",
      question:
        "A RAG-based recruitment tool ingests uploaded CVs. An applicant embeds white-on-white text telling the system to rate the candidate as highly qualified. Which ingestion control is most effective against this?",
      options: [
        { id: "A", text: "Extract text in a way that ignores formatting and detects hidden content, and validate documents before they enter the knowledge base", rationale: "Correct. OWASP recommends text extraction tools that ignore formatting and detect hidden content, plus validation of knowledge sources before ingestion." },
        { id: "B", text: "Store embeddings in an encrypted database", rationale: "Encryption protects the data at rest; it does not stop malicious content from being retrieved and acted on." },
        { id: "C", text: "Re-index the vector database every night", rationale: "Re-indexing simply re-ingests the same poisoned content." },
        { id: "D", text: "Reduce the chunk size used for embeddings", rationale: "Chunking strategy does not remove the hidden instructions." },
      ],
      answer: "A",
      explanation:
        "OWASP uses a CV with hidden text as an example of data poisoning in a RAG system. Treat every document as untrusted, inspect what is actually extracted, and keep a human in the loop for consequential decisions such as hiring.",
      reference: OWASP("LLM08:2025", "Vector and Embedding Weaknesses", "llm082025-vector-and-embedding-weaknesses"),
    },

    /* ── d8: Model Customization and Alignment ────────────────────────────── */
    {
      id: "gaips-d8-lora-backdoor",
      domain: "d8",
      objective: "Model Customization and Alignment",
      difficulty: "advanced",
      question:
        "Your team downloads a third-party LoRA adapter to fine-tune an approved base model. It passes your standard benchmark suite. Why is that alone not enough assurance?",
      options: [
        { id: "A", text: "LoRA adapters cannot be evaluated with benchmarks at all", rationale: "Adapters can be benchmarked; the issue is what benchmarks may fail to reveal." },
        { id: "B", text: "LoRA adapters always replace the full base model weights", rationale: "LoRA adapters are small add-on weights applied to a base model; they do not replace it." },
        { id: "C", text: "Benchmarks only measure speed, not output quality", rationale: "Benchmarks typically measure task performance; this is not the reason." },
        { id: "D", text: "A malicious adapter can carry a backdoor that behaves normally until a specific trigger appears, so you also need provenance and integrity checks", rationale: "Correct. OWASP warns that a malicious LoRA adapter can compromise the base model and that poisoned models may act as sleeper agents until triggered." },
      ],
      answer: "D",
      explanation:
        "Backdoored models behave normally on ordinary inputs, which makes them hard to detect with standard tests. Treat adapters as supply chain components: verify their source, check signatures or hashes, record them in an inventory and include adversarial testing.",
      reference: OWASP("LLM03:2025", "Supply Chain", "llm032025-supply-chain"),
    },
  ],
};
