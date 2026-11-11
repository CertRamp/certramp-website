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
    "30 original Google Cloud Professional Agentic Architect practice questions across the five sections of the official exam guide, weighted roughly like the real exam and using the current Gemini Enterprise Agent Platform product names. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-11-11",
  seo: {
    title: "Google Agentic Architect Practice Questions & Answers (2026)",
    description:
      "30 free, original Professional Agentic Architect practice questions on ADK, RAG, coding agents, evaluation, Agent Runtime and agent security, with explanations.",
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
      reference: { label: "Gemini Enterprise: Workflow Builder overview", url: "https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer" },
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
      reference: { label: "Agent Platform: Design agents in Agent Studio", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/agent-studio/design-agents" },
    },
    {
      id: "gcpaa-d1-cx-flow-verification",
      domain: "d1",
      objective: "1.1 Configuring agentic workflows and behavior using low-code tools",
      difficulty: "advanced",
      question:
        "A customer service agent in CX Agent Studio handles open-ended questions well. Compliance now requires that identity verification always collects the account number first, validates it, and only then asks for the PIN, with no deviation. The rest of the conversation should stay flexible. What is the recommended design?",
      options: [
        { id: "A", text: "Describe the required verification order step by step in the agent's instructions and add few-shot examples of correct conversations", rationale: "Better instructions make the order more likely, but an LLM following instructions is not deterministic, which the compliance rule requires." },
        { id: "B", text: "Move all routing into a Dialogflow CX flow that classifies every user intent", rationale: "The guidance is to let the LLM-based agent handle intent classification and routing, and to use flows only for self-contained deterministic logic." },
        { id: "C", text: "Use a flow-based agent for the greeting and other canned responses", rationale: "Canned responses are better handled with agent callbacks; this leaves the verification order unenforced." },
        { id: "D", text: "Import a flow-based agent for verification, called by the CX Agent Studio agent, with input and output variable mappings", rationale: "Correct. Flow-based agents suit highly deterministic logic such as sequential data collection, validation and authentication, while the CX Agent Studio agent stays the routing layer." },
      ],
      answer: "D",
      explanation:
        "Combine generative and state-based behaviour: the agent routes and converses, and a flow runs a strict sequence until it ends and hands control back. Treat the flow as a black box and pass data in and out through explicit variable mappings, because session parameters are global by default.",
      reference: { label: "CX Agent Studio: Flow-based agents", url: "https://docs.cloud.google.com/gemini-enterprise-cx/cx-agent-studio/flow" },
    },
    {
      id: "gcpaa-d1-federated-connector",
      domain: "d1",
      objective: "1.2 Connecting enterprise data to Gemini Enterprise",
      difficulty: "intermediate",
      question:
        "Employees should be able to search a third-party document system from Gemini Enterprise. The data owner does not allow the content to be copied into the Gemini Enterprise index, and the team accepts that search quality may be somewhat lower as a result. The connector supports both methods. Which one should you choose?",
      options: [
        { id: "A", text: "Data ingestion with a daily full sync", rationale: "Ingestion copies the data into the Gemini Enterprise index, which the data owner does not allow." },
        { id: "B", text: "Federated search, which retrieves results directly from the source at query time", rationale: "Correct. Federation does not copy data into the index, so there is no storage to plan for, at the cost of possibly lower search quality." },
        { id: "C", text: "Export the documents to Cloud Storage on a schedule and ingest them into a Gemini Enterprise data store", rationale: "This still copies the content into Google Cloud and into the index, so it breaks the same rule." },
        { id: "D", text: "Store the documents in Agent Platform Memory Bank", rationale: "Memory Bank keeps facts extracted from user conversations; it is not a connector to enterprise content." },
      ],
      answer: "B",
      explanation:
        "Gemini Enterprise connectors either ingest (index) data, which usually improves search quality but uses storage and sync time, or federate queries to the source. With federation, the query string is sent to the enabled third-party backends, which is worth noting in a privacy review.",
      reference: { label: "Gemini Enterprise: Introduction to connectors and data stores", url: "https://docs.cloud.google.com/gemini/enterprise/docs/introduction-to-connectors-and-data-stores" },
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
      reference: { label: "Google Cloud MCP servers: Control MCP use with IAM", url: "https://docs.cloud.google.com/mcp/control-mcp-use-iam" },
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
      reference: { label: "Google Antigravity: Agent Skills", url: "https://antigravity.google/docs/skills/" },
    },
    {
      id: "gcpaa-d2-terminal-sandbox",
      domain: "d2",
      objective: "2.1 Using coding agents effectively",
      difficulty: "intermediate",
      question:
        "Developers want their Antigravity agent to run build and test commands without approving each one. Security requires that these commands cannot write outside the project, cannot read files such as ~/.ssh, and can reach only the company's package registry on the network. What should you configure?",
      options: [
        { id: "A", text: "The Turbo permission preset, so commands run without prompts", rationale: "Turbo removes the prompts but turns the terminal sandbox off, so nothing limits file or network access." },
        { id: "B", text: "An always_on rule in AGENTS.md telling the agent never to write outside the project folder, read credential files or use the network", rationale: "A rule guides the model's behaviour; it does not enforce limits on what a command can do." },
        { id: "C", text: "The terminal sandbox (Default or Auto preset), with only the registry domain allowed under read_url", rationale: "Correct. Sandboxed commands can write only to the project, temp folders and build caches, sensitive files such as ~/.ssh and .env are blocked, and network access is off except for domains allowed under read_url." },
        { id: "D", text: "The Request Review preset, so a developer reviews each command", rationale: "This turns the sandbox off and requires manual review, which is exactly what the developers want to avoid." },
      ],
      answer: "C",
      explanation:
        "Coding agents become safer to run autonomously when their commands execute in an operating-system sandbox. In Antigravity the sandbox has no network by default and grants outbound access per domain, so you allow only what builds need.",
      reference: { label: "Google Antigravity: Terminal sandbox", url: "https://antigravity.google/docs/sandbox/" },
    },
    {
      id: "gcpaa-d2-pretooluse-hook",
      domain: "d2",
      objective: "2.2 Customizing coding agents for enterprise workflows",
      difficulty: "advanced",
      question:
        "Your platform team wants to guarantee that no developer's Antigravity agent can ever run \"terraform apply\", even if the model decides it should. The control must be deterministic and shared through the repository. What should you add?",
      options: [
        { id: "A", text: "A PreToolUse hook in .agents/hooks.json that returns \"deny\" for terraform apply", rationale: "Correct. PreToolUse hooks run before a tool executes, can match tools by name, and a \"deny\" decision hard-blocks the call." },
        { id: "B", text: "A PostToolUse hook that reports terraform apply commands", rationale: "PostToolUse runs after the tool has completed, so the infrastructure change has already happened." },
        { id: "C", text: "A model_decision rule in .agents/rules that describes the change management policy and forbids terraform apply", rationale: "The agent reads the rule only when it judges it relevant, and even then a rule is guidance rather than enforcement." },
        { id: "D", text: "A SessionStart hook that adds a warning to every session", rationale: "SessionStart hooks run once before the first model call and can only inject steps; they cannot block a later tool call." },
      ],
      answer: "A",
      explanation:
        "Rules and skills shape what the agent tries to do, while hooks run your own scripts at fixed points in the execution loop. Use a blocking hook when a policy must hold regardless of what the model decides.",
      reference: { label: "Google Antigravity: Hooks", url: "https://antigravity.google/docs/hooks" },
    },
    {
      id: "gcpaa-d2-agents-cli-setup",
      domain: "d2",
      objective: "2.2 Customizing coding agents for enterprise workflows",
      difficulty: "foundation",
      question:
        "Your developers use coding agents to build ADK agents. You want each coding agent to know how to scaffold, evaluate, deploy and observe agents on Google Cloud with Google's toolchain, so developers can simply ask for it in plain language. What is the most direct way to set this up?",
      options: [
        { id: "A", text: "Start the ADK web UI with adk web on each workstation", rationale: "The web UI is a local tool for running and debugging agents; it does not teach a coding agent the build and deploy workflow." },
        { id: "B", text: "Write an AGENTS.md file in every repository that explains ADK scaffolding, evaluation and deployment from scratch", rationale: "This is possible, but it is manual work that duplicates the maintained skills and goes stale as the tools change." },
        { id: "C", text: "Connect the coding agents to the Cloud Logging MCP server", rationale: "Log access helps with troubleshooting but covers none of scaffolding, evaluation or deployment." },
        { id: "D", text: "Run the Agents CLI setup to install agents-cli and its skills into the coding agents", rationale: "Correct. Agents CLI is a command-line tool plus skills for building, evaluating and deploying agents on Google Cloud; setup installs the skills into the coding agents so they know how to use the CLI and ADK." },
      ],
      answer: "D",
      explanation:
        "Agents CLI packages the agent development lifecycle (scaffolding, evaluation, deployment, publishing and observability) as skills that coding agents load. After setup, a developer can ask the coding agent to write evals or deploy to Cloud Run instead of looking up each command.",
      reference: { label: "Agents CLI: Getting started", url: "https://google.github.io/agents-cli/guide/getting-started/" },
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
      reference: { label: "ADK: Models", url: "https://adk.dev/agents/models/" },
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
      reference: { label: "Agent Platform: Memory Bank", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/memory-bank" },
    },
    {
      id: "gcpaa-d3-state-prefix",
      domain: "d3",
      objective: "3.1 Designing and building agentic workflows in code",
      difficulty: "intermediate",
      question:
        "An ADK travel agent asks each user once for their preferred currency. The value must be available in every future session of that same user, but must not be visible to other users. The app uses a persistent session service. Which state key should the agent write?",
      options: [
        { id: "A", text: "temp:preferred_currency", rationale: "temp: state is discarded when the current invocation completes, so it would not even survive to the next turn." },
        { id: "B", text: "app:preferred_currency", rationale: "app: state is shared by all users and sessions of the application, so one user's choice would overwrite everyone's." },
        { id: "C", text: "user:preferred_currency", rationale: "Correct. user: state is shared across all sessions of the same user_id within the same app, and is persisted by the database or Agent Platform session services." },
        { id: "D", text: "preferred_currency, with no prefix", rationale: "Keys without a prefix belong to the current session only and are not available in the user's next session." },
      ],
      answer: "C",
      explanation:
        "ADK state prefixes set the scope of a value: none for the session, user: for one user across sessions, app: for the whole app and temp: for one invocation. Write user: or app: values through state_delta, because output_key saves only the agent's final text response under a single key.",
      reference: { label: "ADK: Session state", url: "https://adk.dev/sessions/state/" },
    },
    {
      id: "gcpaa-d3-model-choice-router",
      domain: "d3",
      objective: "3.1 Designing and building agentic workflows in code",
      difficulty: "foundation",
      question:
        "A multi-agent system receives millions of support tickets per day. A router agent only has to assign each ticket to one of six specialist agents; the specialists do the complex reasoning. The router currently uses the same large model as the specialists, and costs are too high. What is the best change?",
      options: [
        { id: "A", text: "Keep the large model for the router and lower its maximum output tokens and temperature to cut the cost per request", rationale: "The router already produces a short label, and every ticket would still be processed at the large model's price, so the cost problem remains." },
        { id: "B", text: "Use a cost-efficient, high-throughput model such as Gemini 3.1 Flash-Lite for the router", rationale: "Correct. Matching model size to the task keeps a capable model where reasoning is needed and puts a cheap, high-throughput model on the simple, high-volume step." },
        { id: "C", text: "Self-host a large open model on GKE for the router", rationale: "This adds cluster and GPU operations for a simple classification step without addressing the mismatch between task and model size." },
        { id: "D", text: "Remove the router and send every ticket to all six specialists", rationale: "This multiplies the expensive calls instead of reducing them." },
      ],
      answer: "B",
      explanation:
        "Model selection is a per-agent decision. Simple, high-volume steps such as routing and classification usually fit a small, cheap model, while larger models are reserved for agents that need deeper reasoning; evaluate the router's accuracy after the switch.",
      reference: { label: "Agent Platform: Gemini 3.1 Flash-Lite", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-flash-lite" },
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
      reference: { label: "Agent Platform: RAG Engine overview", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview" },
    },
    {
      id: "gcpaa-d3-rag-reranking",
      domain: "d3",
      objective: "3.2 Integrating enterprise domain knowledge",
      difficulty: "advanced",
      question:
        "Testing a RAG Engine corpus shows that the chunk containing the right answer is usually retrieved, but often ranked below less relevant chunks, so the agent answers from the wrong context. The agent has a strict latency budget, and reranking may add at most about 100 ms. What should you configure?",
      options: [
        { id: "A", text: "An LLM reranker that sends the retrieved chunks to a Gemini model to judge each chunk's relevance", rationale: "An LLM reranker can work well, but it typically adds 1 to 2 seconds, which breaks the latency budget." },
        { id: "B", text: "A much higher top_k so more chunks reach the model", rationale: "More chunks add noise and tokens without putting the relevant chunk first." },
        { id: "C", text: "A new corpus with smaller chunks and no other change", rationale: "Chunk size affects what is retrieved, but the relevant chunk is already retrieved; the problem is its rank." },
        { id: "D", text: "The Agent Platform ranking API as the ranker in the retrieval configuration", rationale: "Correct. The ranking API is a standalone semantic reranker with very low latency (under 100 ms) that reorders retrieved chunks by relevance." },
      ],
      answer: "D",
      explanation:
        "Vector retrieval optimises recall; a reranker then scores the retrieved candidates against the query for precision. RAG Engine supports the ranking API (billed per request, very low latency) and an LLM reranker (billed on tokens, higher latency, Gemini models only).",
      reference: { label: "Agent Platform: Reranking for RAG Engine", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/retrieval-and-ranking" },
    },
    {
      id: "gcpaa-d3-mcp-toolset-filter",
      domain: "d3",
      objective: "3.2 Integrating enterprise domain knowledge",
      difficulty: "intermediate",
      question:
        "Another team runs a remote MCP server over Streamable HTTP that exposes 40 tools for your company's inventory system. Your ADK agent should use only three read-only lookup tools from it, and the model should not even see the others. How should you integrate it?",
      options: [
        { id: "A", text: "Add an McpToolset with StreamableHTTPConnectionParams to the agent's tools and set tool_filter to the three tool names", rationale: "Correct. McpToolset discovers the server's tools and makes them available to the agent, and tool_filter limits which tools are exposed to the LLM." },
        { id: "B", text: "Reimplement the three tools as Python FunctionTools that call the inventory database directly", rationale: "This duplicates the other team's integration and bypasses the MCP server they maintain." },
        { id: "C", text: "Wrap the MCP server in an AgentTool", rationale: "AgentTool wraps another agent so it can be called as a tool; it is not how ADK connects to MCP servers." },
        { id: "D", text: "Fetch the MCP server's Agent Card and call it through A2A", rationale: "Agent Cards belong to the A2A protocol for agent-to-agent calls; MCP servers expose tools through MCP." },
      ],
      answer: "A",
      explanation:
        "MCP lets an agent reuse existing tool integrations instead of rebuilding them. Filtering the toolset keeps the agent's options small and safe, which also improves tool selection; pair it with least-privilege credentials on the server side.",
      reference: { label: "ADK: MCP tools", url: "https://adk.dev/tools-custom/mcp-tools/" },
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
      reference: { label: "A2A Protocol: Agent discovery", url: "https://a2a-protocol.org/latest/topics/agent-discovery/" },
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
      reference: { label: "ADK: Loop agents", url: "https://adk.dev/agents/workflow-agents/loop-agents/" },
    },
    {
      id: "gcpaa-d3-fan-out-gather",
      domain: "d3",
      objective: "3.3 Orchestrating and coordinating agentic workflows",
      difficulty: "intermediate",
      question:
        "Three independent research agents (market, competitors, regulation) should run at the same time to save latency, and a fourth agent should then write one report from all three results. How do you build this with ADK workflow agents?",
      options: [
        { id: "A", text: "A ParallelAgent containing all four agents", rationale: "The report writer would start at the same time as the researchers, before their results exist." },
        { id: "B", text: "A ParallelAgent of the three researchers, all writing to the same output_key", rationale: "Parallel branches writing one key would overwrite each other, and nothing runs the report writer afterwards." },
        { id: "C", text: "A SequentialAgent that runs a ParallelAgent of the three researchers, each with its own output_key, and then the report writer, which reads those keys in its instruction", rationale: "Correct. This is the fan-out and gather pattern: the parallel step stores each result under a distinct key, and the next step reads them from session state." },
        { id: "D", text: "A LoopAgent that runs the four agents until the report is complete", rationale: "A loop repeats sub-agents in sequence; it neither runs the researchers concurrently nor fits a single pass." },
      ],
      answer: "C",
      explanation:
        "Parallel branches do not share conversation history or state automatically while they run, so results are passed through distinct state keys and combined in a later step. For more complex routing, ADK 2.0 adds graph-based workflows.",
      reference: { label: "ADK: Parallel agents", url: "https://adk.dev/agents/workflow-agents/parallel-agents/" },
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
      reference: { label: "Agent Platform: Evaluate your agents", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/optimize/evaluation/evaluate-agents" },
    },
    {
      id: "gcpaa-d4-adk-evalset-trajectory",
      domain: "d4",
      objective: "4.1 Evaluating agents in development and in production",
      difficulty: "intermediate",
      question:
        "You maintain a set of golden conversations for an ADK agent, each with the exact tool calls the agent should make and a reference answer. Every pull request should fail automatically if a change alters the tool calls for these conversations. What should you set up?",
      options: [
        { id: "A", text: "A Cloud Monitoring alert on the production agent's error rate", rationale: "This only reacts after a change is live and does not compare tool calls with the golden data." },
        { id: "B", text: "An ADK evalset with the expected tool trajectories, run in CI with adk eval or pytest, using tool_trajectory_avg_score", rationale: "Correct. Evalsets store expected tool use and reference responses per turn, and tool_trajectory_avg_score checks for an exact trajectory match, with a default threshold of 1.0." },
        { id: "C", text: "A user-simulation evalset scored with tool_trajectory_avg_score", rationale: "Simulated users produce new conversations, and ADK does not allow tool_trajectory_avg_score to be combined with user simulation." },
        { id: "D", text: "A manual review of a few chats in the ADK web UI before each release", rationale: "Manual checks are useful for exploration, but they are not an automatic gate on every pull request." },
      ],
      answer: "B",
      explanation:
        "Golden datasets with expected trajectories turn agent behaviour into regression tests. ADK can run them from the CLI, from pytest or in the web UI, and adds response_match_score for the final answer, with a default threshold of 0.8.",
      reference: { label: "ADK: Why evaluate agents", url: "https://adk.dev/evaluate/" },
    },
    {
      id: "gcpaa-d4-custom-autorater",
      domain: "d4",
      objective: "4.1 Evaluating agents in development and in production",
      difficulty: "advanced",
      question:
        "A marketing agent must follow the company's tone-of-voice guide and must never promise delivery dates. There are no reference answers to compare against, and you need a score for each response from this one agent. Which evaluation approach fits best with the Gen AI evaluation service?",
      options: [
        { id: "A", text: "The rouge metric against last quarter's approved texts", rationale: "ROUGE measures word overlap with a reference; it cannot judge tone or detect a promised delivery date in new content." },
        { id: "B", text: "The exact_match metric", rationale: "Exact match needs a ground-truth answer and fails any legitimately different wording." },
        { id: "C", text: "A pairwise model-based metric", rationale: "Pairwise metrics compare two models' or prompts' responses and pick the better one; they do not give this agent its own score." },
        { id: "D", text: "A custom pointwise model-based metric with your own criteria and rating rubric, judged by Gemini", rationale: "Correct. Model-based metrics use a judge model to score output against descriptive criteria, do not require ground truth, and can be defined as custom pointwise metrics." },
      ],
      answer: "D",
      explanation:
        "Use computation-based metrics when you have ground truth and want fast, cheap scoring, and model-based metrics (autoraters) for qualitative, company-specific criteria. Check a sample of the judge's ratings against human judgement before relying on it.",
      reference: { label: "Agent Platform: Define your evaluation metrics", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/eval-python-sdk/determine-eval" },
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
      reference: { label: "Agent Platform: Agent Runtime", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime" },
    },
    {
      id: "gcpaa-d4-runtime-gke",
      domain: "d4",
      objective: "4.2 Deploying and scaling production workloads",
      difficulty: "intermediate",
      question:
        "A company's platform team already operates Kubernetes. It wants to run an ADK agent next to a self-hosted open model, and needs full control over the deployment, including node configuration and Kubernetes network policies. Which runtime fits best?",
      options: [
        { id: "A", text: "Agent Runtime on Gemini Enterprise Agent Platform", rationale: "Agent Runtime is the managed choice with the least operations, but it does not give the team control over nodes and Kubernetes policies." },
        { id: "B", text: "Cloud Run", rationale: "Cloud Run runs the agent as a managed, auto-scaling container, but it abstracts away the nodes and Kubernetes objects the team wants to control." },
        { id: "C", text: "Google Kubernetes Engine", rationale: "Correct. The ADK documentation describes GKE as a good option when you need more control over the deployment, and as a fit for running open models." },
        { id: "D", text: "Running the agent with adk web on a Compute Engine VM", rationale: "adk web is a development UI, not a production serving setup, and a single VM gives no managed scaling." },
      ],
      answer: "C",
      explanation:
        "Choose the runtime from the requirements: Agent Runtime for a fully managed agent service, Cloud Run for managed containers, and GKE when the team needs control and already runs Kubernetes. More control means more operational work, so it should be a deliberate choice.",
      reference: { label: "ADK: Deploy your agent", url: "https://adk.dev/deploy/" },
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
      reference: { label: "Agent Platform: Observability overview", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/optimize/observability/overview" },
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
      reference: { label: "ADK: Authenticating with tools", url: "https://adk.dev/tools-custom/authentication/" },
    },
    {
      id: "gcpaa-d5-principal-access-boundary",
      domain: "d5",
      objective: "5.1 Configuring agent security and governance",
      difficulty: "advanced",
      question:
        "Agents in the project sales-agents run with agent identities. Security wants a guardrail so these agents can only ever access resources inside the sales organization folder, even if someone later grants them a role on a resource elsewhere by mistake. What should you configure?",
      options: [
        { id: "A", text: "Remove all role bindings for the agent identities outside the folder", rationale: "This fixes today's state but does nothing to stop a mistaken grant tomorrow." },
        { id: "B", text: "A Principal Access Boundary policy bound to the agent identities' principal set that lists the folder as the eligible resources", rationale: "Correct. Principal Access Boundary policies are attached to principal sets, including agent identities, and limit which resources those principals are eligible to access regardless of the roles they are granted." },
        { id: "C", text: "IAM deny policies attached to every project and resource outside the sales folder that deny all permissions to the agent identities", rationale: "Deny policies are attached to resources, so you would need one on every other resource, including ones created later." },
        { id: "D", text: "A Model Armor template on the agents' prompts", rationale: "Model Armor screens content; it does not control which resources an identity can reach." },
      ],
      answer: "B",
      explanation:
        "Allow and deny policies say who can access a resource; Principal Access Boundary policies say what a set of principals can access. They never grant access on their own, so the agents still need allow policies inside the folder.",
      reference: { label: "IAM: Principal Access Boundary policies", url: "https://docs.cloud.google.com/iam/docs/principal-access-boundary-policies" },
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
      reference: { label: "ADK: Safety and security for AI agents", url: "https://adk.dev/safety/" },
    },
    {
      id: "gcpaa-d5-conditional-confirmation",
      domain: "d5",
      objective: "5.2 Implementing secure agent behavior and execution",
      difficulty: "intermediate",
      question:
        "An ADK agent has a refund tool. Refunds up to 1,000 should run automatically, but any larger refund must be approved by a person before the tool executes. Which approach implements this human-in-the-loop step?",
      options: [
        { id: "A", text: "A FunctionTool whose require_confirmation is a function that checks whether the amount exceeds 1,000", rationale: "Correct. ADK tool confirmation accepts a function that receives the tool's arguments and decides whether confirmation is needed, so only large refunds pause for approval." },
        { id: "B", text: "Set require_confirmation=True on the tool", rationale: "This pauses for approval on every refund, including the small ones that should run automatically." },
        { id: "C", text: "An instruction telling the agent to always ask the user in the chat for explicit approval before it issues any refund above 1,000", rationale: "The model may skip the question, and the user asking for the refund is not an independent approver." },
        { id: "D", text: "An after_tool_callback that flags refunds over 1,000 for review", rationale: "The callback runs after the refund has been issued, so the approval comes too late." },
      ],
      answer: "A",
      explanation:
        "Human-in-the-loop controls belong at the point of action and should trigger only where risk justifies the interruption. ADK tool confirmation (experimental) pauses the tool until a client sends an adk_request_confirmation response; check its documented session service limitations before relying on it in production.",
      reference: { label: "ADK: Get action confirmation", url: "https://adk.dev/tools-custom/confirmation/" },
    },
  ],
};
