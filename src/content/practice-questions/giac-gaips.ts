import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free GIAC GAIPS sample questions: ORIGINAL questions written by CertRamp
 * against GIAC's published exam certification objectives (verified 27 October
 * 2026). Not taken from the paid practice exams, not recalled exam content,
 * and not presented as real exam questions.
 */
const OWASP = (id: string, name: string, path: string) => ({
  label: `OWASP Top 10 for LLM Applications 2025: ${id} ${name}`,
  url: `https://genai.owasp.org/llmrisk/${path}/`,
});

const NIST_AML = {
  label: "NIST AI 100-2 E2025 (Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations)",
  url: "https://csrc.nist.gov/pubs/ai/100/2/e2025/final",
};

const MCP_SECURITY = {
  label: "Model Context Protocol: Security Best Practices",
  url: "https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices",
};

export const giacGaipsQuestions: PracticeQuestionSet = {
  slug: "giac-gaips",
  intro:
    "30 original GIAC GAIPS practice questions across all eight exam certification objectives published by GIAC. GIAC does not publish weightings, so the questions are spread across all eight objectives (four each, three each for Knowledge Augmentation and Retrieval and for Model Customization and Alignment). Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-11-11",
  seo: {
    title: "GIAC GAIPS Practice Questions with Answers (2026)",
    description:
      "30 free, original GIAC GAIPS practice questions on agentic AI, prompt injection, RAG, MLSecOps and AI risk management, each with a full explanation.",
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
        { id: "A", text: "The design is acceptable as long as the tokens are only ever sent over TLS between components", rationale: "TLS protects the token in transit, but does nothing about the server accepting tokens that were never issued to it." },
        { id: "B", text: "The design is acceptable if the downstream API enforces rate limiting", rationale: "Downstream controls that depend on the token audience are exactly what token passthrough can circumvent; it also breaks accountability at the MCP server." },
        { id: "C", text: "Reject it as token passthrough: MCP servers must not accept tokens not issued for them", rationale: "Correct. The MCP security best practices call token passthrough an anti-pattern and state that MCP servers MUST NOT accept tokens not explicitly issued for the MCP server." },
        { id: "D", text: "The server should store the client's token in the system prompt so the agent can reuse it", rationale: "Credentials should never be placed in prompts; this adds a leakage risk without addressing the audience problem." },
      ],
      answer: "C",
      explanation:
        "Token passthrough lets clients bypass controls that rely on the token audience, muddies the audit trail and breaks trust boundaries. The fix is audience validation: an MCP server only accepts tokens issued for itself and obtains its own tokens for downstream APIs.",
      reference: { label: "Model Context Protocol: Security Best Practices", url: "https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices" },
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
    {
      id: "gaips-d1-mcp-session-hijack",
      domain: "d1",
      objective: "Agentic Systems and AI Integrations",
      difficulty: "advanced",
      question:
        "A remote MCP server runs on several stateful HTTP instances. After the first login it identifies callers only by their session ID, and session IDs are issued as sequential numbers. A penetration tester calls tools as another user by guessing a neighbouring session ID. Which remediation matches the MCP security best practices?",
      options: [
        { id: "A", text: "Keep session-based authentication but require all remote clients to move to the stdio transport instead", rationale: "stdio is a local transport that limits access to the MCP client on the same machine; it is not a fix for a remote server that authenticates by session." },
        { id: "B", text: "Authorise every request instead of the session, and bind random session IDs to the user ID", rationale: "Correct. The specification says servers MUST verify all inbound requests, MUST NOT use sessions for authentication and MUST use non-deterministic session IDs, and SHOULD bind them to user-specific information such as <user_id>:<session_id>." },
        { id: "C", text: "Keep the sequential IDs but make sure they are only ever sent over TLS", rationale: "TLS protects the ID in transit, but a guessable ID can still be produced by the attacker without intercepting anything." },
        { id: "D", text: "Extend the session lifetime so that users authenticate less often and fewer IDs are issued", rationale: "Longer-lived sessions widen the window in which a stolen or guessed ID is useful; the guidance suggests rotating or expiring IDs instead." },
      ],
      answer: "B",
      explanation:
        "Session hijacking lets an attacker who knows or guesses a session ID impersonate a client or inject events into a shared queue. Binding the session to a user ID derived from the user's token means a guessed session ID alone is worthless, and authorising each request removes the reliance on the session.",
      reference: MCP_SECURITY,
    },
    {
      id: "gaips-d1-mcp-scope-minimization",
      domain: "d1",
      objective: "Agentic Systems and AI Integrations",
      difficulty: "intermediate",
      question:
        "To avoid repeated consent prompts, an MCP server lists every scope it supports (files:*, db:*, admin:*) and the client requests all of them on first connection. Which design does the MCP guidance on scope minimisation recommend instead?",
      options: [
        { id: "A", text: "Keep the broad scopes but shorten the access token lifetime to a few minutes", rationale: "Short lifetimes help, but a stolen token still carries every privilege for as long as it is valid; the blast radius stays the same." },
        { id: "B", text: "Collapse the scopes into a single full-access scope so the audit log is easier to read", rationale: "Wildcard or omnibus scopes are listed as a common mistake: they mask user intent per operation and make audit harder, not easier." },
        { id: "C", text: "Grant whatever scopes the token claims and skip further authorisation logic on the server", rationale: "Treating claimed scopes as sufficient without server-side authorisation logic is explicitly named as a common mistake." },
        { id: "D", text: "Begin with minimal scopes and elevate through targeted scope challenges when needed", rationale: "Correct. The guidance describes a progressive, least-privilege model: baseline scopes first, then incremental elevation via WWW-Authenticate scope challenges." },
      ],
      answer: "D",
      explanation:
        "Broad up-front scopes turn a single leaked token into access to unrelated tools and data and make revocation disruptive. Progressive scope elevation limits what a compromised token can do and leaves a clearer audit trail of which privileges were requested and granted.",
      reference: MCP_SECURITY,
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
        { id: "A", text: "Evasion targets generative models only, while poisoning targets predictive classifiers only", rationale: "Both attack classes are described across machine learning types; this is not the distinguishing factor." },
        { id: "B", text: "Evasion alters inputs to a deployed model; poisoning corrupts the training stage", rationale: "Correct. NIST describes evasion as modifying test samples against an already trained model, and poisoning as attacks during the training stage." },
        { id: "C", text: "Evasion requires white-box access; poisoning always requires black-box access", rationale: "Attacker knowledge is a separate dimension of the taxonomy; neither class is defined by it." },
        { id: "D", text: "Evasion extracts the model's weights; poisoning extracts its training data", rationale: "Extracting model information or training data is a privacy attack in the NIST taxonomy, not evasion or poisoning." },
      ],
      answer: "B",
      explanation:
        "NIST classifies attacks partly by the lifecycle stage in which they occur. Evasion attacks craft adversarial examples against a deployed model, while poisoning attacks, including backdoor poisoning, corrupt the training stage.",
      reference: NIST_AML,
    },
    {
      id: "gaips-d2-membership-inference",
      domain: "d2",
      objective: "AI and LLM Foundations",
      difficulty: "intermediate",
      question:
        "An attacker repeatedly queries a model trained on hospital records to determine whether one specific patient's record was part of the training set. How does the NIST adversarial machine learning taxonomy (NIST AI 100-2 E2025) classify this?",
      options: [
        { id: "A", text: "Membership inference, a privacy attack", rationale: "Correct. NIST lists membership inference under the privacy compromise objective and describes it as inferring the presence of data in the training set." },
        { id: "B", text: "Property inference, also a privacy attack", rationale: "Property inference is also a privacy attack, but it targets properties of the training data distribution, not whether an individual record was used." },
        { id: "C", text: "Evasion, an integrity attack", rationale: "Evasion crafts adversarial inputs to change a deployed model's output; it does not try to learn about the training data." },
        { id: "D", text: "Availability poisoning", rationale: "Poisoning requires influence over the training stage and aims to degrade the model, not to reveal who is in the data." },
      ],
      answer: "A",
      explanation:
        "NIST groups data reconstruction, membership inference and property inference under privacy compromise, because the attacker seeks information about the training data. For sensitive data such as health records, even confirming that a person is in the dataset can be a breach.",
      reference: NIST_AML,
    },
    {
      id: "gaips-d2-multimodal-injection",
      domain: "d2",
      objective: "AI and LLM Foundations",
      difficulty: "intermediate",
      question:
        "A vision-enabled assistant accepts uploaded images. Its prompt injection filter scans only the text that users type. An attacker uploads an image with instructions rendered inside it, together with a harmless question, and the model follows the hidden instructions. What is the key lesson?",
      options: [
        { id: "A", text: "This is training data poisoning, because the malicious content arrived as a file", rationale: "Poisoning targets data used to train or fine-tune the model; this content was processed at inference time." },
        { id: "B", text: "Images cannot carry instructions, so the system prompt must have been leaked first", rationale: "Images can carry instructions; OWASP explicitly describes hiding instructions in images that accompany benign text." },
        { id: "C", text: "Every input modality is attack surface, so text-only filtering is not enough", rationale: "Correct. OWASP notes that multimodal systems let attackers exploit interactions between data types, and that these cross-modal attacks are hard to detect." },
        { id: "D", text: "Downscaling every uploaded image is a proven way to remove injected instructions", rationale: "No such guarantee exists; OWASP states that robust defences for multimodal systems still need further research." },
      ],
      answer: "C",
      explanation:
        "Every input modality the model processes is part of its attack surface. Because no single filter reliably catches cross-modal injection, the impact has to be limited by other layers too, such as least privilege and human approval for high-risk actions.",
      reference: OWASP("LLM01:2025", "Prompt Injection", "llm01-prompt-injection"),
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
        { id: "A", text: "Ask the model in the system prompt to produce only safe, read-only SELECT statements", rationale: "Prompt instructions can be bypassed; they are not a reliable control over what reaches the database." },
        { id: "B", text: "Increase the model's temperature to make outputs less predictable", rationale: "Randomness does nothing to make generated SQL safe." },
        { id: "C", text: "Treat output as untrusted: parameterised queries and a least-privilege DB account", rationale: "Correct. OWASP recommends a zero-trust approach to model output and parameterised queries or prepared statements for database operations; a least-privilege database account further limits the impact." },
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
        { id: "A", text: "The system prompt is too long and will reduce the quality of the model's responses", rationale: "Length is not the security problem here." },
        { id: "B", text: "The system prompt should be encrypted at rest in the application's configuration store", rationale: "Encryption at rest does not help once the model can be induced to reveal its prompt." },
        { id: "C", text: "The rules should be moved into the user prompt, where they are closer to each request", rationale: "That makes the problem worse: the user then controls the rules, and they are still only instructions to the model." },
        { id: "D", text: "Keep secrets out of the model's reach and enforce authorisation in application code", rationale: "Correct. OWASP states that the system prompt should not be treated as a secret or used as a security control, that credentials and connection strings do not belong in it, and that authorisation checks must not be delegated to the LLM." },
      ],
      answer: "D",
      explanation:
        "System prompts can leak, so credentials and connection strings must live in systems the model cannot read. Permission checks such as who may see salary data belong in deterministic code, not in instructions the model is asked to follow.",
      reference: OWASP("LLM07:2025", "System Prompt Leakage", "llm072025-system-prompt-leakage"),
    },
    {
      id: "gaips-d3-package-hallucination",
      domain: "d3",
      objective: "AI Application Architecture and Development Frameworks",
      difficulty: "intermediate",
      question:
        "A coding assistant tells a developer to install a helper package. The install succeeds, but the package was registered only recently by an unknown publisher. Which supply chain risk does this illustrate, and what is the right control?",
      options: [
        { id: "A", text: "No risk: a successful install proves the package is the one the model meant", rationale: "Attackers can register exactly the names that models tend to invent, so a successful install proves nothing about legitimacy." },
        { id: "B", text: "Package hallucination: verify suggested dependencies before installing them", rationale: "Correct. OWASP describes attackers finding frequently hallucinated package names and publishing malicious packages under them, and recommends verification and secure coding practices." },
        { id: "C", text: "Model drift; ask the assistant to confirm the package exists before installing it", rationale: "The same model can confirm a non-existent or malicious package just as confidently; that is not independent verification." },
        { id: "D", text: "Version drift; pin the package to the exact version the assistant suggested", rationale: "Pinning makes builds reproducible, but pinning a malicious package simply installs the malicious code every time." },
      ],
      answer: "B",
      explanation:
        "LLMs can suggest code libraries that do not exist, and attackers can turn those names into real, malicious packages. Treat model suggestions as unverified: check publisher, age and reputation, or restrict installs to an approved internal registry.",
      reference: OWASP("LLM09:2025", "Misinformation", "llm092025-misinformation"),
    },
    {
      id: "gaips-d3-markdown-exfiltration",
      domain: "d3",
      objective: "AI Application Architecture and Development Frameworks",
      difficulty: "advanced",
      question:
        "A chat interface renders model output as Markdown, including images. After a user asks it to summarise an attacker's web page, the reply contains an image whose URL points to the attacker's domain, with parts of the conversation in the query string. The browser loads the image automatically. Which control addresses this at the application layer?",
      options: [
        { id: "A", text: "Instruct the model in the system prompt never to output image links", rationale: "Prompt instructions can be overridden by the injected content; they do not control what the browser renders." },
        { id: "B", text: "Use parameterised queries for every operation that involves model output", rationale: "Parameterised queries protect database operations; this output is rendered in a browser, which needs encoding for that context." },
        { id: "C", text: "Limit the conversation history passed to the model to only the last few turns", rationale: "Less context may reduce what leaks, but the exfiltration channel stays open." },
        { id: "D", text: "Sanitise or encode output for the rendering context and enforce a strict CSP", rationale: "Correct. OWASP recommends encoding model output to prevent unwanted execution through JavaScript or Markdown, context-aware output encoding and strict CSPs." },
      ],
      answer: "D",
      explanation:
        "OWASP describes a summariser that is prompt-injected into sending sensitive data to an attacker-controlled server, and cites Markdown image exfiltration in its references. The renderer must decide what model output may do in the browser, for example by not loading images from arbitrary external origins.",
      reference: OWASP("LLM05:2025", "Improper Output Handling", "llm052025-improper-output-handling"),
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
        { id: "B", text: "Model extraction", rationale: "Correct. In model extraction, an attacker uses query outputs to replicate the model; detailed probabilities and unlimited queries help build a functional copy. OWASP recommends restricting logit_bias and logprobs exposure and rate limiting." },
        { id: "C", text: "System prompt leakage", rationale: "Logprobs do not by themselves reveal the system prompt; this is a different risk." },
        { id: "D", text: "Vector and embedding weaknesses", rationale: "This risk concerns RAG stores and embeddings, not the model API's output detail." },
      ],
      answer: "B",
      explanation:
        "NIST AI 100-2 classes model extraction as a privacy attack against deployed models, and OWASP lists functional model replication under unbounded consumption. Expose only the output detail the use case needs and limit query volume.",
      reference: OWASP("LLM10:2025", "Unbounded Consumption", "llm102025-unbounded-consumption"),
    },
    {
      id: "gaips-d4-mcp-client-ssrf",
      domain: "d4",
      objective: "AI Infrastructure and Deployment Security",
      difficulty: "advanced",
      question:
        "An agent platform runs an MCP client on a cloud VM and lets users connect it to any remote MCP server. During OAuth discovery, a malicious server returns a resource_metadata URL pointing to http://169.254.169.254/. Which set of controls best fits the MCP security guidance?",
      options: [
        { id: "A", text: "Enforce HTTPS, block private and link-local ranges on every hop, use an egress proxy", rationale: "Correct. The guidance recommends enforcing HTTPS, blocking private and reserved ranges including 169.254.0.0/16, validating redirect targets and using egress proxies for server-side clients." },
        { id: "B", text: "Allow any URL whose hostname resolves to a public IP address at validation time", rationale: "A domain can resolve to a safe IP during the check and to an internal IP at use (DNS rebinding); a one-time check is not enough on its own." },
        { id: "C", text: "Write a custom string filter that rejects URLs containing \"169.254\"", rationale: "The guidance warns against hand-written IP validation because encoding tricks such as octal, hex or IPv4-mapped IPv6 bypass it." },
        { id: "D", text: "Validate the first URL carefully, then let the HTTP client follow any redirects automatically", rationale: "Redirect chains are a named SSRF pattern; each hop needs the same validation." },
      ],
      answer: "A",
      explanation:
        "A server-side MCP client that fetches URLs supplied by an untrusted server can be turned into a proxy into the internal network, and cloud metadata endpoints often expose credentials. Network-level egress controls combined with careful URL validation give defence in depth.",
      reference: MCP_SECURITY,
    },
    {
      id: "gaips-d4-on-device-model",
      domain: "d4",
      objective: "AI Infrastructure and Deployment Security",
      difficulty: "intermediate",
      question:
        "A company ships a mobile app that runs a small LLM on the device. The threat model includes attackers who reverse-engineer the app, swap in a tampered model and redistribute it. Which controls address this most directly?",
      options: [
        { id: "A", text: "Publish a detailed model card describing the model's training and intended use", rationale: "Model cards document a model but, as OWASP notes, offer no guarantees on its origin." },
        { id: "B", text: "Add rate limiting to the backend API", rationale: "On-device inference does not pass through the backend, so server-side rate limits do not see or stop it." },
        { id: "C", text: "Encrypt the model, verify its integrity and use vendor attestation APIs", rationale: "Correct. These are the controls OWASP lists for protecting models deployed to edge devices." },
        { id: "D", text: "Quantise the model so it is smaller and harder to read", rationale: "Quantisation reduces size and compute needs; it is not a tamper protection." },
      ],
      answer: "C",
      explanation:
        "Edge deployment puts the model on hardware the attacker controls, so integrity has to be checked where the model runs. OWASP describes a real pattern of reverse-engineered mobile apps with replaced models that steer users to scam sites.",
      reference: OWASP("LLM03:2025", "Supply Chain", "llm032025-supply-chain"),
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
      reference: { label: "Cloud Security Alliance: Threat Modeling OpenAI's Responses API with the MAESTRO Framework", url: "https://cloudsecurityalliance.org/blog/2025/03/24/threat-modeling-openai-s-responses-api-with-the-maestro-framework" },
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
      reference: { label: "NIST: AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    },
    {
      id: "gaips-d5-mitre-atlas",
      domain: "d5",
      objective: "AI Risk Management and Strategic Application",
      difficulty: "foundation",
      question:
        "A red team planning an exercise against an ML-based fraud detection system wants a living knowledge base of adversary tactics and techniques against AI systems, modelled after MITRE ATT&CK and based on real-world attack observations and case studies. Which resource fits?",
      options: [
        { id: "A", text: "The OWASP Top 10 for LLM Applications", rationale: "A ranked list of critical risks for LLM applications, not a tactics and techniques knowledge base with case studies." },
        { id: "B", text: "MITRE ATLAS", rationale: "Correct. MITRE describes ATLAS as a globally accessible, living knowledge base of adversary tactics and techniques, modelled after ATT&CK and drawing on real-world observations." },
        { id: "C", text: "The NIST AI Risk Management Framework", rationale: "A voluntary framework for managing AI risk through Govern, Map, Measure and Manage, not a catalogue of attacker techniques." },
        { id: "D", text: "The MITRE ATT&CK Enterprise matrix on its own", rationale: "ATT&CK covers adversary behaviour against enterprise IT; ATLAS adds the AI-specific techniques that complement it." },
      ],
      answer: "B",
      explanation:
        "ATLAS gives threat modellers and red teams a shared vocabulary for attacks on AI systems, and its techniques are designed to complement those in ATT&CK. Its case studies help ground threat scenarios in attacks that have actually been observed or demonstrated.",
      reference: { label: "MITRE ATLAS Fact Sheet", url: "https://atlas.mitre.org/pdf-files/MITRE_ATLAS_Fact_Sheet.pdf" },
    },
    {
      id: "gaips-d5-confabulation",
      domain: "d5",
      objective: "AI Risk Management and Strategic Application",
      difficulty: "intermediate",
      question:
        "A risk team uses the NIST Generative AI Profile (NIST AI 600-1) to classify issues. A legal research assistant confidently cites court decisions that do not exist. Which of the profile's risk categories describes this most precisely?",
      options: [
        { id: "A", text: "Information Integrity", rationale: "A related category, but it concerns the wider information ecosystem, such as content used for large-scale disinformation; the defining feature here is the system confidently presenting false content in reply to a prompt." },
        { id: "B", text: "Data Privacy", rationale: "Data Privacy concerns leakage or misuse of personal or sensitive data, not invented citations." },
        { id: "C", text: "Value Chain and Component Integration", rationale: "This category covers risks from third-party components such as data and models, not false output in itself." },
        { id: "D", text: "Confabulation", rationale: "Correct. NIST AI 600-1 uses confabulation for GAI systems that generate and confidently present erroneous or false content in response to prompts." },
      ],
      answer: "D",
      explanation:
        "NIST AI 600-1, published in July 2024 as a companion to the AI RMF, names 12 risks that are unique to or exacerbated by generative AI. Mapping an issue to the right category helps choose the matching actions, here verification of outputs and human review before reliance.",
      reference: { label: "NIST AI 600-1: Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile", url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" },
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
        { id: "B", text: "The weights may be quantised and therefore noticeably less accurate", rationale: "An accuracy concern, not a security one." },
        { id: "C", text: "The licence may not allow commercial use", rationale: "Licensing matters for supply chain governance, but the immediate danger is code execution." },
        { id: "D", text: "Arbitrary code execution when the pickle is deserialised", rationale: "Correct. The Python documentation warns that malicious pickle data can execute arbitrary code during unpickling, and that data from an untrusted source should never be unpickled." },
      ],
      answer: "D",
      explanation:
        "Model files are code-adjacent artefacts. Load models only from trusted sources, prefer serialisation formats that do not execute code, verify integrity with signatures or hashes, and scan files before they enter the pipeline.",
      reference: { label: "Python documentation: pickle (security warning)", url: "https://docs.python.org/3/library/pickle.html" },
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
        { id: "B", text: "Data version control and provenance tracking", rationale: "Correct. OWASP recommends tracking data origins and transformations (for example with CycloneDX or an ML-BOM) and using data version control to detect manipulation." },
        { id: "C", text: "Switching the model endpoint to a private subnet", rationale: "Network isolation of the endpoint does not protect or track the training data." },
        { id: "D", text: "Adding a content filter on the model's output", rationale: "An output filter may hide symptoms but cannot identify which data was poisoned." },
      ],
      answer: "B",
      explanation:
        "Data and model poisoning can target pre-training, fine-tuning and embedding data. Versioned, provenance-tracked datasets let you compare runs, spot unexpected changes and roll back.",
      reference: OWASP("LLM04:2025", "Data and Model Poisoning", "llm042025-data-and-model-poisoning"),
    },
    {
      id: "gaips-d6-ai-bom",
      domain: "d6",
      objective: "Development Pipelines and MLOps Security",
      difficulty: "intermediate",
      question:
        "A critical vulnerability is announced in a widely used model serving library. The security team must find out within hours which of its 40 deployed models and training pipelines include the affected version. Which practice would make this fastest?",
      options: [
        { id: "A", text: "A current, signed SBOM or AI BOM per model and pipeline", rationale: "Correct. OWASP recommends an up-to-date, accurate and signed inventory of components to prevent tampering and to detect new vulnerabilities quickly, and points to OWASP CycloneDX as a starting point for an AI BOM." },
        { id: "B", text: "A model card for every model in the registry", rationale: "Model cards describe a model's purpose and behaviour; they are not a dependency inventory and give no guarantee of origin." },
        { id: "C", text: "Re-running the standard benchmark suite against every model", rationale: "Benchmarks measure task performance; they reveal nothing about which libraries a deployment contains." },
        { id: "D", text: "An annual penetration test of the ML platform", rationale: "A point-in-time test cannot answer a new, urgent question about component versions across all deployments." },
      ],
      answer: "A",
      explanation:
        "AI systems combine models, datasets and many software libraries, and each can carry vulnerabilities. A maintained bill of materials turns a new advisory into a lookup instead of a manual hunt, and also supports licence management.",
      reference: OWASP("LLM03:2025", "Supply Chain", "llm032025-supply-chain"),
    },
    {
      id: "gaips-d6-conversion-service",
      domain: "d6",
      objective: "Development Pipelines and MLOps Security",
      difficulty: "advanced",
      question:
        "To save time, an ML team uploads vendor models to a free public online service that merges adapters and converts formats, then pushes the results straight into the internal model registry. What should the pipeline review require?",
      options: [
        { id: "A", text: "Nothing extra, because the original models came from a trusted vendor", rationale: "Trust in the original vendor does not extend to a third-party service that can alter the model after it leaves the vendor." },
        { id: "B", text: "Use the service only for safetensors output, because safetensors files cannot be tampered with", rationale: "safetensors stores tensors without executable code, so loading it does not run code; it does not stop a service from altering the weights themselves, for example to embed a backdoor." },
        { id: "C", text: "Run merges and conversions in-house and verify hashes or signatures before registry upload", rationale: "Correct. OWASP cites attacks that use model merge or format conversion services to inject malware into models, and recommends verifiable sources, signing and file hashes." },
        { id: "D", text: "Re-run the benchmark suite after conversion and accept the model if scores are unchanged", rationale: "Tampered or backdoored models can pass benchmarks while hiding targeted triggers." },
      ],
      answer: "C",
      explanation:
        "Every service that touches a model artefact is part of the supply chain. Keeping transformations inside controlled infrastructure and verifying integrity at each hand-off prevents an untrusted step from silently replacing what enters production.",
      reference: OWASP("LLM03:2025", "Supply Chain", "llm032025-supply-chain"),
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
        { id: "C", text: "Permission-aware retrieval with per-tenant partitioning", rationale: "Correct. OWASP recommends fine-grained, permission-aware vector stores with strict logical and access partitioning between groups." },
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
        { id: "A", text: "Hidden-content-aware text extraction plus validation before ingestion", rationale: "Correct. OWASP recommends text extraction tools that ignore formatting and detect hidden content, plus validation of knowledge sources before ingestion." },
        { id: "B", text: "Store all embeddings in an encrypted vector database", rationale: "Encryption protects the data at rest; it does not stop malicious content from being retrieved and acted on." },
        { id: "C", text: "Re-index the whole vector database every night so content stays fresh", rationale: "Re-indexing simply re-ingests the same poisoned content." },
        { id: "D", text: "Reduce the chunk size used for embeddings", rationale: "Chunking strategy does not remove the hidden instructions." },
      ],
      answer: "A",
      explanation:
        "OWASP uses a CV with hidden text as an example of data poisoning in a RAG system. Treat every document as untrusted, inspect what is actually extracted, and keep a human in the loop for consequential decisions such as hiring.",
      reference: OWASP("LLM08:2025", "Vector and Embedding Weaknesses", "llm082025-vector-and-embedding-weaknesses"),
    },
    {
      id: "gaips-d7-embedding-inversion",
      domain: "d7",
      objective: "Knowledge Augmentation and Retrieval",
      difficulty: "intermediate",
      question:
        "For an HR assistant, an architect proposes storing only the embeddings of confidential personnel documents in a third-party hosted vector database and deleting the source text there, arguing that vectors are anonymous numbers. How should the security review respond?",
      options: [
        { id: "A", text: "Accept it: embeddings work like one-way hashes, so the original text can never be recovered from them", rationale: "Embeddings are not cryptographic hashes; they are designed to preserve meaning, and that is what makes recovery possible." },
        { id: "B", text: "Reject it: inversion attacks can recover source content, so protect vectors like the documents", rationale: "Correct. OWASP names embedding inversion as a risk that can recover significant amounts of source information and compromise confidentiality." },
        { id: "C", text: "Accept it as long as the embedding model produces vectors with more than 1,000 dimensions", rationale: "Dimensionality is not a privacy control; richer vectors may even carry more information." },
        { id: "D", text: "Accept it unless the vector database is shared between several tenants", rationale: "Cross-tenant leakage is a separate risk; inversion applies to anyone who can read the vectors, shared database or not." },
      ],
      answer: "B",
      explanation:
        "Embeddings derived from confidential text should be classified like that text. That means access control on the vector store, vetting of the hosting provider and immutable logs of retrieval activity.",
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
        { id: "A", text: "LoRA adapters cannot be evaluated with benchmarks because they are not full models", rationale: "Adapters can be benchmarked; the issue is what benchmarks may fail to reveal." },
        { id: "B", text: "LoRA adapters always overwrite the full base model weights when they are applied", rationale: "LoRA adapters are small add-on weights applied to a base model; they do not replace it." },
        { id: "C", text: "Benchmarks only measure inference speed and memory footprint, never the quality of the outputs", rationale: "Benchmarks typically measure task performance; this is not the reason." },
        { id: "D", text: "A backdoor may stay dormant until a trigger appears, so provenance checks are also needed", rationale: "Correct. OWASP warns that a malicious LoRA adapter compromises the integrity of the base model, and that fine-tuned models can pass safety benchmarks while hiding very targeted triggers." },
      ],
      answer: "D",
      explanation:
        "Backdoored models behave normally on ordinary inputs, which makes them hard to detect with standard tests. Treat adapters as supply chain components: verify their source, check signatures or hashes, record them in an inventory and include adversarial testing.",
      reference: OWASP("LLM03:2025", "Supply Chain", "llm032025-supply-chain"),
    },
    {
      id: "gaips-d8-finetune-pii",
      domain: "d8",
      objective: "Model Customization and Alignment",
      difficulty: "intermediate",
      question:
        "A team plans to fine-tune a model on five years of customer support transcripts that contain names, addresses and account numbers. Which step should come before training?",
      options: [
        { id: "A", text: "Scrub or mask the sensitive data, for example by tokenisation or redaction", rationale: "Correct. OWASP recommends data sanitisation so user data does not enter the training model, with tokenisation, redaction and privacy techniques such as differential privacy." },
        { id: "B", text: "Add a system prompt rule telling the fine-tuned model never to reveal account numbers", rationale: "The data would already be in the model's weights, and a prompt rule is not a security control that injection cannot bypass." },
        { id: "C", text: "Train on the raw data and rely on an output filter to catch any leaked account numbers", rationale: "Output filtering is a useful extra layer, but pattern filters miss variants and paraphrases; the sensitive data should not be learned in the first place." },
        { id: "D", text: "Encrypt the transcript dataset at rest before training", rationale: "Encryption protects the stored files, but the training job decrypts them and the model still learns their content." },
      ],
      answer: "A",
      explanation:
        "OWASP lists careless inclusion of sensitive data in training as a cause of sensitive information disclosure. Sanitising data before fine-tuning, and telling users how their data is used with an option to opt out, prevents the model from memorising what it should never repeat.",
      reference: OWASP("LLM02:2025", "Sensitive Information Disclosure", "llm022025-sensitive-information-disclosure"),
    },
    {
      id: "gaips-d8-finetune-not-enough",
      domain: "d8",
      objective: "Model Customization and Alignment",
      difficulty: "intermediate",
      question:
        "After a prompt injection incident, a product owner proposes fine-tuning the model on thousands of injection attempts paired with refusals, then removing the input and output filters and the human approval step to cut latency. What is the best assessment?",
      options: [
        { id: "A", text: "Sound: once the model has learned to recognise attacks, the filters and approval step are redundant", rationale: "Attackers keep finding new phrasings; a model trained on known attempts cannot be assumed to refuse all future ones." },
        { id: "B", text: "Fine-tuning will not help, but switching to RAG would fully prevent prompt injection", rationale: "OWASP says research shows that RAG, like fine-tuning, does not fully mitigate prompt injection; retrieved content can itself carry injections." },
        { id: "C", text: "Fine-tuning cannot change model behaviour, so only the system prompt matters", rationale: "Fine-tuning does change model behaviour; the problem is that it is not a complete defence." },
        { id: "D", text: "Keep the layered controls: fine-tuning helps but does not fully mitigate prompt injection", rationale: "Correct. OWASP states that RAG and fine-tuning do not fully mitigate prompt injection and lists filtering, least privilege and human approval as mitigations." },
      ],
      answer: "D",
      explanation:
        "Alignment through fine-tuning is probabilistic, so it belongs alongside deterministic controls rather than replacing them. Moderation filters, privilege limits and human approval reduce the impact when a crafted input gets past the model.",
      reference: OWASP("LLM01:2025", "Prompt Injection", "llm01-prompt-injection"),
    },
  ],
};
