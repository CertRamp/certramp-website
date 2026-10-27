import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free Google Cloud Professional Agentic Architect sample questions — ORIGINAL
 * questions written by CertRamp against the official exam guide (five sections)
 * and the current Gemini Enterprise Agent Platform documentation. Not taken
 * from the paid practice exams, not recalled exam content, and not presented
 * as real exam questions.
 */
export const googleCloudAgenticArchitectQuestions: PracticeQuestionSet = {
  slug: "google-cloud-agentic-architect",
  intro:
    "15 original Google Cloud Professional Agentic Architect practice questions across the five sections of the official exam guide, weighted roughly like the real exam and using the current Gemini Enterprise Agent Platform product names. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "Google Agentic Architect Practice Questions & Answers (2026)",
    description:
      "15 free, original Professional Agentic Architect practice questions on ADK, RAG, coding agents, evaluation, Agent Runtime and agent security, with explanations.",
  },
  questions: [
    /* ── Section 1: Building agents using low-code tools (~13%) ───────────── */
    {
      id: "gcpaa-d1-workflow-builder",
      domain: "d1",
      objective: "1.1 Configuring agentic workflows and behavior using low-code tools",
      difficulty: "foundation",
      question:
        "A finance team without developers wants to create its own agent in the Gemini Enterprise web app. The agent should run a recurring multi-step process, pull data through connectors that administrators have approved, and wait for a manager's approval before the final step. What should the team use?",
      options: [
        { id: "A", text: "A custom ADK agent deployed to Google Kubernetes Engine", rationale: "This works technically, but it requires developers and cluster operations, which the team does not have." },
        { id: "B", text: "A fine-tuned model from Model Garden", rationale: "Fine-tuning changes model behaviour; it does not provide scheduling, connectors or approval steps." },
        { id: "C", text: "Workflow Builder in Gemini Enterprise (called Agent Designer in the exam guide)", rationale: "Correct. Workflow Builder is the no-code, low-code way to build chat agents and workflows in the Gemini Enterprise web app, with recurring schedules, steps that combine AI automation with human intervention, and connectors governed by administrative policies." },
        { id: "D", text: "A Vector Search index", rationale: "Vector Search stores and queries embeddings; it is a building block, not an agent-building tool." },
      ],
      answer: "C",
      explanation:
        "When business users need to build their own agents, start with the low-code tools. Workflow Builder combines AI steps with human approvals and recurring schedules, while administrator policies limit which connectors and tools those agents can use.",
      reference: { label: "Gemini Enterprise — Workflow Builder overview", url: "https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer" },
    },
    {
      id: "gcpaa-d1-studio-get-code",
      domain: "d1",
      objective: "1.1 Configuring agentic workflows and behavior using low-code tools",
      difficulty: "intermediate",
      question:
        "A product manager prototyped an agent in Agent Studio (Preview) on Gemini Enterprise Agent Platform. Developers now want to continue the work in their own editor, under version control, and add custom logic. What is the most efficient next step?",
      options: [
        { id: "A", text: "Use Get code in Agent Studio to generate the agent's Python code and continue development from it", rationale: "Correct. Agent Studio can generate the agent's Python code so developers can carry the prototype into their own tooling." },
        { id: "B", text: "Rebuild the agent from scratch with the same instructions copied by hand", rationale: "This throws away work that Agent Studio can export directly." },
        { id: "C", text: "Upload the prototype's instructions as a reference file to a new agent", rationale: "Reference files ground an agent with knowledge; they do not turn a prototype into code." },
        { id: "D", text: "Deploy the prototype as an A2A asset and edit it in Agent Registry", rationale: "Deploying makes the agent available to callers, but Agent Registry is a catalogue, not a code editor." },
      ],
      answer: "A",
      explanation:
        "Low-code and code-first tools are meant to work together. Prototype quickly in a visual tool, then export the generated code when the agent needs custom logic, testing and a normal development workflow.",
      reference: { label: "Agent Platform — Design agents in Agent Studio", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/agent-studio/design-agents" },
    },

    /* ── Section 2: Using coding agents for application development (~17%) ── */
    {
      id: "gcpaa-d2-mcp-read-only",
      domain: "d2",
      objective: "2.1 Using coding agents effectively",
      difficulty: "advanced",
      question:
        "Developers connect their coding agents to Google Cloud remote MCP servers so the agents can inspect project resources. Security requires that, in this project, no MCP tool that creates, modifies or deletes resources can be called, while read-only tools keep working. What should you configure?",
      options: [
        { id: "A", text: "Remove the MCP Tool User role from all developers", rationale: "Without the mcp.tools.call permission no MCP tool can be called at all, so the read-only tools would stop working too." },
        { id: "B", text: "An IAM deny policy on MCP tool calls with a condition that matches tools that are not read-only", rationale: "Correct. IAM deny policies for Google Cloud MCP servers can use the tool.isReadOnly attribute to block every tool that is not read-only." },
        { id: "C", text: "An instruction in the coding agent's rules telling it never to change resources", rationale: "Rules guide the agent's behaviour, but they are not an enforcement control." },
        { id: "D", text: "A Model Armor template on the agent's prompts", rationale: "Model Armor screens content such as prompt injection and sensitive data; it does not decide which MCP tools may be called." },
      ],
      answer: "B",
      explanation:
        "Calling a Google Cloud MCP tool needs both the mcp.tools.call permission and access to the underlying resource. IAM deny policies can then narrow MCP use by service, tool, OAuth client or whether a tool is read-only.",
      reference: { label: "Google Cloud MCP servers — Control MCP use with IAM", url: "https://docs.cloud.google.com/mcp/control-mcp-use-iam" },
    },
    {
      id: "gcpaa-d2-antigravity-skill",
      domain: "d2",
      objective: "2.2 Customizing coding agents for enterprise workflows",
      difficulty: "intermediate",
      question:
        "Your team wants every developer's Antigravity agent to follow the company's release-notes procedure, including a helper script, whenever someone asks it to prepare a release. The procedure must be versioned with the repository and shared with the team. What should you create?",
      options: [
        { id: "A", text: "A global skill in each developer's home directory", rationale: "Global skills are available across all projects on one workstation, but they are not versioned with the repository or automatically shared." },
        { id: "B", text: "A long paragraph pasted into each conversation", rationale: "This is manual, easy to forget and cannot bundle the helper script." },
        { id: "C", text: "A new MCP server that returns the procedure as text", rationale: "MCP servers expose tools and data; a skill is the intended way to package task instructions and scripts for the agent." },
        { id: "D", text: "A workspace skill: a folder under .agents/skills in the repository with a SKILL.md whose description says when to use it, plus the script", rationale: "Correct. Workspace skills live in the repository, are committed to version control, and the agent loads a skill when its description matches the task." },
      ],
      answer: "D",
      explanation:
        "Antigravity skills are folders with a required SKILL.md and optional scripts and resources. The agent first sees only each skill's name and description and reads the full instructions when the description looks relevant, so a clear description is what makes the skill trigger.",
      reference: { label: "Google Antigravity — Agent Skills", url: "https://antigravity.google/docs/skills/" },
    },

    /* ── Section 3: Developing custom agents (~33%) ───────────────────────── */
    {
      id: "gcpaa-d3-model-connector",
      domain: "d3",
      objective: "3.1 Designing and building agentic workflows in code",
      difficulty: "intermediate",
      question:
        "For data-residency reasons, an ADK agent must use an open-weight model that your team serves itself with vLLM, instead of a Gemini model. How do you configure the agent?",
      options: [
        { id: "A", text: "This is not possible, because ADK agents only work with Gemini models", rationale: "ADK is model-agnostic; it supports Gemini by name and other models through connectors." },
        { id: "B", text: "Instantiate a model connector such as LiteLlm pointing at the vLLM endpoint and pass it as the LlmAgent's model parameter", rationale: "Correct. For models outside Google's direct integrations, ADK uses wrapper classes such as LiteLlm, which also cover self-hosted options like vLLM." },
        { id: "C", text: "Wrap the vLLM server in an AgentTool", rationale: "AgentTool wraps another agent as a tool; it does not set the model that powers the agent's reasoning." },
        { id: "D", text: "Fine-tune Gemini on the open model's outputs", rationale: "This changes nothing about where inference runs and does not meet the requirement to use the self-hosted model." },
      ],
      answer: "B",
      explanation:
        "Model choice (open or proprietary, self-hosted or managed) is part of designing agents in code. ADK resolves Gemini and Agent Platform endpoint models from a string, and uses connectors such as LiteLlm for other providers and self-hosted servers.",
      reference: { label: "ADK — Models", url: "https://adk.dev/agents/models/" },
    },
    {
      id: "gcpaa-d3-memory-bank",
      domain: "d3",
      objective: "3.1 Designing and building agentic workflows in code",
      difficulty: "intermediate",
      question:
        "A shopping assistant built with ADK should remember a returning customer's dietary preferences in future conversations without replaying every past conversation. Which service fits best?",
      options: [
        { id: "A", text: "Agent Platform Sessions only", rationale: "Sessions store the chronological history of a single interaction; on their own they do not carry distilled facts across sessions." },
        { id: "B", text: "A larger context window", rationale: "This still requires replaying old conversations and does not persist anything between sessions." },
        { id: "C", text: "Agent Platform Memory Bank, scoped to the customer's user ID", rationale: "Correct. Memory Bank uses an LLM to extract and consolidate facts from conversations and makes them available across sessions, scoped to a user." },
        { id: "D", text: "Cloud Trace", rationale: "Cloud Trace records request traces for observability, not user preferences." },
      ],
      answer: "C",
      explanation:
        "Sessions are short-term memory for one conversation; Memory Bank is long-term memory across conversations. Relevant memories can be retrieved by similarity search and inserted into the prompt.",
      reference: { label: "Agent Platform — Memory Bank", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/memory-bank" },
    },
    {
      id: "gcpaa-d3-rag-engine",
      domain: "d3",
      objective: "3.2 Integrating enterprise domain knowledge",
      difficulty: "intermediate",
      question:
        "An HR agent must answer questions from several thousand internal policy documents in Cloud Storage. The documents change every week, and answers must be grounded in the current versions to reduce hallucinations. Which approach fits best?",
      options: [
        { id: "A", text: "Fine-tune a model on the policy documents every month", rationale: "Fine-tuning is slow to refresh, would lag behind weekly changes and does not ground answers in retrieved sources." },
        { id: "B", text: "Paste all policy documents into the agent's system instruction", rationale: "Thousands of documents will not fit sensibly into a prompt, and every request would pay for all of them." },
        { id: "C", text: "Import the documents into a RAG Engine corpus and retrieve relevant chunks as context for each question", rationale: "Correct. RAG Engine ingests data such as Cloud Storage files, chunks and embeds it into an indexed corpus, and retrieves relevant information to ground the model's answer." },
        { id: "D", text: "Store the documents in Agent Platform Memory Bank", rationale: "Memory Bank holds facts distilled from user conversations, scoped to users; it is not a document knowledge base." },
      ],
      answer: "C",
      explanation:
        "Retrieval-augmented generation adds private knowledge to the model's context at query time. The pipeline is ingestion, chunking, embedding, indexing and retrieval, and you can choose the vector database behind the corpus.",
      reference: { label: "Agent Platform — RAG Engine overview", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview" },
    },
    {
      id: "gcpaa-d3-agent-card",
      domain: "d3",
      objective: "3.3 Orchestrating and coordinating agentic workflows",
      difficulty: "foundation",
      question:
        "Your ADK agent must call a partner's agent through the Agent2Agent (A2A) protocol. Before sending a request, it needs to know the remote agent's skills, service endpoint and required authentication. Where does it get this information?",
      options: [
        { id: "A", text: "From the remote agent's Agent Card, typically served at /.well-known/agent-card.json", rationale: "Correct. The Agent Card is a JSON document describing the agent's identity, service endpoint, capabilities, security schemes and skills." },
        { id: "B", text: "From the remote agent's system prompt", rationale: "System prompts are internal to the remote agent and are not published for discovery." },
        { id: "C", text: "From a Cloud Storage bucket shared by the partner", rationale: "A2A defines the Agent Card for discovery; an ad hoc bucket is not part of the protocol." },
        { id: "D", text: "From the remote agent's Model Armor template", rationale: "Model Armor templates configure content screening, not agent discovery." },
      ],
      answer: "A",
      explanation:
        "A2A discovery starts with the Agent Card. A client fetches it, checks whether the agent's skills fit the task, and uses the endpoint and security schemes it declares to send the request.",
      reference: { label: "A2A Protocol — Agent discovery", url: "https://a2a-protocol.org/latest/topics/agent-discovery/" },
    },
    {
      id: "gcpaa-d3-loop-agent",
      domain: "d3",
      objective: "3.3 Orchestrating and coordinating agentic workflows",
      difficulty: "advanced",
      question:
        "In ADK, a writer agent drafts a document and a critic agent reviews it. The pair should repeat until the critic approves the draft, but never more than five rounds. Which design meets this requirement reliably?",
      options: [
        { id: "A", text: "A ParallelAgent containing the writer and the critic", rationale: "A ParallelAgent runs sub-agents at the same time; the critic would not review the writer's latest draft in turn." },
        { id: "B", text: "One LlmAgent whose instruction says \"revise up to five times\"", rationale: "An instruction is not a guaranteed limit; the model may stop early or keep going." },
        { id: "C", text: "A LoopAgent with max_iterations=5, where the critic calls a tool that sets escalate to end the loop on approval", rationale: "Correct. A LoopAgent stops after max_iterations, and a sub-agent can end it early by escalating, for example through an exit tool." },
        { id: "D", text: "A SequentialAgent with five copies of the writer and critic", rationale: "This always runs all five rounds and cannot stop when the draft is approved." },
      ],
      answer: "C",
      explanation:
        "Workflow agents give deterministic control flow, but a LoopAgent does not decide by itself when to stop. Combine a hard iteration limit with an explicit termination signal from a sub-agent; ADK 2.0 adds graph-based workflows for more complex routing.",
      reference: { label: "ADK — Loop agents", url: "https://adk.dev/agents/workflow-agents/loop-agents/" },
    },

    /* ── Section 4: Evaluating and deploying agentic workflows (~22%) ─────── */
    {
      id: "gcpaa-d4-tool-use-eval",
      domain: "d4",
      objective: "4.1 Evaluating agents in development and in production",
      difficulty: "intermediate",
      question:
        "A support agent gives good final answers in tests, but in production it sometimes calls the refund tool when it should only look up an order. You want to catch this before release across realistic multi-turn conversations. What should you add?",
      options: [
        { id: "A", text: "A multi-turn evaluation with simulated users that scores task success and tool use quality on the captured traces", rationale: "Correct. Agent Platform evaluation can generate scenarios with user simulation and score traces with multi-turn metrics such as task success and tool use quality." },
        { id: "B", text: "An exact-match comparison of final answers only", rationale: "The final answers already look fine; the problem is in the tool calls." },
        { id: "C", text: "A load test that measures requests per second", rationale: "Throughput says nothing about whether the agent chooses the right tools." },
        { id: "D", text: "An alert on the agent's CPU utilisation", rationale: "Infrastructure metrics do not reveal wrong tool choices." },
      ],
      answer: "A",
      explanation:
        "Agents must be evaluated on how they reach an answer, not only on the answer itself. Multi-turn evaluation of tool use catches wrong or unsafe tool calls that final-response checks miss.",
      reference: { label: "Agent Platform — Evaluate your agents", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/optimize/evaluation/evaluate-agents" },
    },
    {
      id: "gcpaa-d4-agent-runtime",
      domain: "d4",
      objective: "4.2 Deploying and scaling production workloads",
      difficulty: "foundation",
      question:
        "You have built an agent with ADK in Python and want a fully managed runtime to deploy, operate and scale it, without running clusters or virtual machines yourself. Which option fits best?",
      options: [
        { id: "A", text: "A self-managed Compute Engine instance group", rationale: "You would manage the virtual machines, operating systems and scaling yourself." },
        { id: "B", text: "Agent Runtime on Gemini Enterprise Agent Platform", rationale: "Correct. Agent Runtime (formerly Vertex AI Agent Engine) is a fully managed runtime for deploying, operating and scaling agents, with full ADK integration." },
        { id: "C", text: "A Google Kubernetes Engine Standard cluster", rationale: "GKE can run ADK agents, but you operate the cluster, which the requirement rules out." },
        { id: "D", text: "Model Garden", rationale: "Model Garden gives access to models; it does not host your agent code." },
      ],
      answer: "B",
      explanation:
        "ADK agents can run locally, on Agent Runtime, on Cloud Run or on GKE. When the requirement is a managed, agent-specific runtime with minimal operations, Agent Runtime is the intended choice.",
      reference: { label: "Agent Platform — Agent Runtime", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime" },
    },
    {
      id: "gcpaa-d4-traces",
      domain: "d4",
      objective: "4.2 Deploying and scaling production workloads",
      difficulty: "advanced",
      question:
        "Users report that a production agent sometimes takes minutes to answer and burns many tokens. You suspect it gets stuck in a reasoning loop, calling the same tool again and again. What is the best first diagnostic step?",
      options: [
        { id: "A", text: "Increase the maximum number of instances", rationale: "More capacity does not change what a single session does and would only spread the cost." },
        { id: "B", text: "Raise the model's temperature", rationale: "This makes behaviour less predictable and does not tell you why the loop happens." },
        { id: "C", text: "Clear the agent's Memory Bank", rationale: "Deleting memories removes data without any evidence that memory causes the problem." },
        { id: "D", text: "Inspect the affected sessions' traces in the agent's Observability tab in Gemini Enterprise Agent Platform, which show each step's spans with inputs and outputs", rationale: "Correct. Traces show the step-by-step execution of a session, so you can see which tool is called repeatedly and with what inputs, alongside token and latency metrics." },
      ],
      answer: "D",
      explanation:
        "Troubleshooting reasoning loops starts with evidence from traces, logs and metrics. Once you see the repeated step, fix it with clearer tool descriptions, a termination condition or a deterministic workflow.",
      reference: { label: "Agent Platform — Observability overview", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/optimize/observability/overview" },
    },

    /* ── Section 5: Securing and governing agentic workflows (~15%) ───────── */
    {
      id: "gcpaa-d5-oauth-user-auth",
      domain: "d5",
      objective: "5.1 Configuring agent security and governance",
      difficulty: "advanced",
      question:
        "An ADK agent has a tool that reads files from each user's own Google Drive. Each user must only ever reach the files they personally have access to. How should the tool authenticate?",
      options: [
        { id: "A", text: "With the agent's own service account, granted access to every user's files", rationale: "With agent auth, all users share the agent's access, so one user could reach another user's files." },
        { id: "B", text: "With an API key stored in the agent's code", rationale: "An API key does not represent the individual user and is easy to leak." },
        { id: "C", text: "By asking users for their password and storing it in session state", rationale: "Collecting passwords is insecure and not how delegated access works." },
        { id: "D", text: "With an OAuth 2.0 auth scheme on the tool, so ADK pauses, the client obtains the user's consent, and ADK retries the call with the user's token", rationale: "Correct. With user auth over OAuth 2.0, the agent acts with the user's identity; ADK signals the client with an adk_request_credential event and retries the tool call after the token exchange." },
      ],
      answer: "D",
      explanation:
        "Choose between agent auth and user auth deliberately. When access must follow the individual user's permissions, use OAuth 2.0, and keep scopes as narrow as the tool allows, because delegated scopes are often broader than the agent needs.",
      reference: { label: "ADK — Authenticating with tools", url: "https://adk.dev/tools-custom/authentication/" },
    },
    {
      id: "gcpaa-d5-model-armor",
      domain: "d5",
      objective: "5.2 Implementing secure agent behavior and execution",
      difficulty: "intermediate",
      question:
        "An agent reads web pages and customer emails through its tools. Security wants prompts and tool responses screened for prompt injection, jailbreak attempts and sensitive data such as credit card numbers. Which service is designed for this?",
      options: [
        { id: "A", text: "Model Armor, with templates applied to prompts and responses", rationale: "Correct. Model Armor screens prompts and responses for prompt injection and jailbreaks, sensitive data, harmful content and malicious URLs, and integrates with Agent Gateway and Agent Platform." },
        { id: "B", text: "VPC Service Controls", rationale: "A service perimeter reduces data exfiltration through Google APIs, but it does not inspect prompt content." },
        { id: "C", text: "Cloud Armor", rationale: "Cloud Armor protects web applications at the load balancer; it is not built to analyse LLM prompts and tool responses." },
        { id: "D", text: "IAM Conditions", rationale: "IAM Conditions decide who can access resources; they do not inspect content." },
      ],
      answer: "A",
      explanation:
        "Indirect prompt injection often arrives through tool output, so screen both directions. Model Armor templates can run in inspect-only mode for testing before you switch them to inspect and block.",
      reference: { label: "Model Armor overview", url: "https://docs.cloud.google.com/model-armor/overview" },
    },
    {
      id: "gcpaa-d5-before-tool-callback",
      domain: "d5",
      objective: "5.2 Implementing secure agent behavior and execution",
      difficulty: "advanced",
      question:
        "An ADK agent uses a third-party database tool that you cannot modify. The agent must only ever run read-only SELECT queries. Which control enforces this before the query reaches the database?",
      options: [
        { id: "A", text: "An instruction in the agent's prompt saying \"only run SELECT queries\"", rationale: "Prompt instructions guide the model but can be ignored or overridden, for example by prompt injection." },
        { id: "B", text: "A before_tool_callback that inspects the query and returns an error dictionary for anything other than SELECT", rationale: "Correct. If a before_tool_callback returns a dictionary, the tool does not run and that dictionary is returned instead, so disallowed queries never execute." },
        { id: "C", text: "An after_tool_callback that checks the query once it has run", rationale: "By then the write has already happened; this is too late to prevent it." },
        { id: "D", text: "Lowering the model's temperature", rationale: "Lower temperature makes output less random but gives no guarantee about which queries are run." },
      ],
      answer: "B",
      explanation:
        "Deterministic guardrails belong in code, not in the prompt. When you cannot change a tool, a before_tool_callback can validate its parameters; combine it with least-privilege database credentials for defence in depth.",
      reference: { label: "ADK — Safety and security for AI agents", url: "https://adk.dev/safety/" },
    },
  ],
};
