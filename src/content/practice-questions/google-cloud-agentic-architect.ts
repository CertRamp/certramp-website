import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free Google Cloud Professional Agentic Architect sample questions — ORIGINAL
 * questions written by CertRamp against the five skill areas Google publishes
 * for the exam and the current Gemini Enterprise Agent Platform documentation.
 * Not taken from the paid practice exams, not recalled exam content, and not
 * presented as real exam questions.
 */
export const googleCloudAgenticArchitectQuestions: PracticeQuestionSet = {
  slug: "google-cloud-agentic-architect",
  intro:
    "15 original Google Cloud Professional Agentic Architect practice questions across the five skill areas Google lists for the exam, using the current Gemini Enterprise Agent Platform product names. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "Google Agentic Architect Practice Questions & Answers (2026)",
    description:
      "15 free, original Professional Agentic Architect practice questions on ADK, Agent Studio, Agent Runtime, evaluation, A2A and agent security, with explanations.",
  },
  questions: [
    /* ── Skill area 1: Build agents using low-code tools ──────────────────── */
    {
      id: "gcpaa-d1-workflow-builder",
      domain: "d1",
      objective: "Build agents using low-code tools",
      difficulty: "foundation",
      question:
        "A finance team without developers wants to create its own agent in the Gemini Enterprise web app. The agent should run a recurring multi-step process, pull data through connectors that administrators have approved, and wait for a manager's approval before the final step. What should the team use?",
      options: [
        { id: "A", text: "A custom ADK agent deployed to Google Kubernetes Engine", rationale: "This works technically, but it requires developers and cluster operations, which the team does not have." },
        { id: "B", text: "A fine-tuned model from Model Garden", rationale: "Fine-tuning changes model behaviour; it does not provide scheduling, connectors or approval steps." },
        { id: "C", text: "Workflow Builder in Gemini Enterprise", rationale: "Correct. Workflow Builder is the no-code, low-code way to build chat agents and workflows in the Gemini Enterprise web app, with scheduling, human approvals and administrator-controlled connectors." },
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
      objective: "Build agents using low-code tools",
      difficulty: "intermediate",
      question:
        "A product manager prototyped an agent in Agent Studio. Developers now want to continue the work in their own editor, under version control, and add custom logic. What is the most efficient next step?",
      options: [
        { id: "A", text: "Use Get code in Agent Studio to generate the agent's Python code and continue development from it", rationale: "Correct. Agent Studio can generate the agent's Python code so developers can carry the prototype into their own tooling." },
        { id: "B", text: "Rebuild the agent from scratch with the same instructions copied by hand", rationale: "This throws away work that Agent Studio can export directly." },
        { id: "C", text: "Upload the prototype's instructions as a reference file to a new agent", rationale: "Reference files ground an agent with knowledge; they do not turn a prototype into code." },
        { id: "D", text: "Deploy the prototype as an A2A asset and edit it in Agent Registry", rationale: "Deploying makes the agent available to callers, but Agent Registry is a catalogue, not a code editor." },
      ],
      answer: "A",
      explanation:
        "Low-code and code-first tools are meant to work together. Prototype quickly in Agent Studio, then export the generated code when the agent needs custom logic, testing and a normal development workflow.",
      reference: { label: "Agent Platform — Design agents in Agent Studio", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/agent-studio/design-agents" },
    },
    {
      id: "gcpaa-d1-remote-subagent",
      domain: "d1",
      objective: "Build agents using low-code tools",
      difficulty: "intermediate",
      question:
        "In Agent Studio you are designing a parent agent for employee questions. Another team has already deployed a travel-booking agent that is listed in Agent Registry. How should your parent agent use it?",
      options: [
        { id: "A", text: "Copy the travel agent's instructions into the parent agent's instructions", rationale: "This duplicates the prompt but not the other agent's tools, data or deployment, and the two copies will drift apart." },
        { id: "B", text: "Attach the travel agent's documentation as a reference file", rationale: "Reference files give the parent agent knowledge, not the ability to delegate tasks to another agent." },
        { id: "C", text: "Add the travel agent as an MCP server", rationale: "MCP servers expose tools. The travel service here is an agent, which Agent Studio adds as a subagent." },
        { id: "D", text: "Add it as a remote subagent from Agent Registry so the parent can route travel requests to it", rationale: "Correct. Agent Studio can register agents from Agent Registry as remote subagents, and the parent agent routes tasks to them based on their Agent Card." },
      ],
      answer: "D",
      explanation:
        "Reusing deployed agents as subagents keeps ownership with the team that built them. The parent only needs the remote agent's Agent Card to decide when to delegate.",
      reference: { label: "Agent Platform — Design agents in Agent Studio", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/agent-studio/design-agents" },
    },

    /* ── Skill area 2: Use coding agents for application development ──────── */
    {
      id: "gcpaa-d2-approval",
      domain: "d2",
      objective: "Use coding agents for application development",
      difficulty: "foundation",
      question:
        "Your team uses Gemini Code Assist agent mode in VS Code. Policy says the agent may read the codebase freely, but no file may be changed without a developer explicitly allowing it. How do you meet this policy?",
      options: [
        { id: "A", text: "Enable the setting to always allow agent actions", rationale: "This does the opposite: the agent would modify files without asking." },
        { id: "B", text: "Keep per-request approval for tools that modify files and do not turn on always-allow", rationale: "Correct. In agent mode, tool requests that modify files or change resources need the developer's permission unless Gemini has been set to always allow them." },
        { id: "C", text: "Add a sentence to a Markdown context file asking the agent not to edit files", rationale: "Context files guide behaviour, but they are not an enforcement mechanism." },
        { id: "D", text: "Remove all MCP server configuration", rationale: "MCP servers add tools; removing them does not stop the built-in file-editing tools." },
      ],
      answer: "B",
      explanation:
        "Coding agents are controlled through approvals of plans and tool use. Read-only requests may run without asking, while changes need permission unless you deliberately grant always-allow, which is exactly what this policy forbids.",
      reference: { label: "Gemini Code Assist — Agent mode overview", url: "https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode" },
    },
    {
      id: "gcpaa-d2-mcp",
      domain: "d2",
      objective: "Use coding agents for application development",
      difficulty: "intermediate",
      question:
        "Developers want the Gemini Code Assist agent to look up tickets in the company's internal issue tracker while it works on a change. The tracker team already provides an MCP server. What is the right approach?",
      options: [
        { id: "A", text: "Paste a recent export of all tickets into every prompt", rationale: "This is stale, bloats the context and does not let the agent query the tracker." },
        { id: "B", text: "Fine-tune a model on the ticket history", rationale: "Fine-tuning does not give live access to current tickets and is far more effort than needed." },
        { id: "C", text: "Ask developers to copy ticket text into code comments", rationale: "This is manual and error-prone; the agent still cannot query the tracker itself." },
        { id: "D", text: "Configure the issue tracker's MCP server in agent mode so its functions become tools the agent can call", rationale: "Correct. Agent mode can be extended with local or remote MCP servers, whose functions are available to the agent as tools." },
      ],
      answer: "D",
      explanation:
        "MCP is the standard way to give a coding agent access to external systems. Once configured, the agent can call the server's tools, subject to the same approval rules as its other tools.",
      reference: { label: "Gemini Code Assist — Agent mode overview", url: "https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode" },
    },

    /* ── Skill area 3: Develop custom agents ──────────────────────────────── */
    {
      id: "gcpaa-d3-agent-card",
      domain: "d3",
      objective: "Develop custom agents",
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
      objective: "Develop custom agents",
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
        "Workflow agents give deterministic control flow, but a LoopAgent does not decide by itself when to stop. Combine a hard iteration limit with an explicit termination signal from a sub-agent.",
      reference: { label: "ADK — Loop agents", url: "https://adk.dev/agents/workflow-agents/loop-agents/" },
    },
    {
      id: "gcpaa-d3-agent-tool",
      domain: "d3",
      objective: "Develop custom agents",
      difficulty: "intermediate",
      question:
        "An ADK coordinator agent needs a specialist agent to calculate a quote, then use that quote in its own reply to the user. The coordinator must stay in charge of the conversation. How should you connect the specialist?",
      options: [
        { id: "A", text: "Register it as a sub-agent and let the coordinator transfer the conversation to it", rationale: "With LLM-driven transfer, control passes to the sub-agent, which then handles the user directly." },
        { id: "B", text: "Wrap the specialist in an AgentTool and give it to the coordinator as a tool", rationale: "Correct. With AgentTool, the coordinator calls the specialist like any other tool, gets the result back and keeps control." },
        { id: "C", text: "Run both agents in a ParallelAgent", rationale: "Parallel branches run independently; the coordinator could not use the quote while it is being calculated." },
        { id: "D", text: "Store the specialist's instructions in Memory Bank", rationale: "Memory Bank holds facts about users across sessions, not callable agents." },
      ],
      answer: "B",
      explanation:
        "ADK supports two ways to involve another agent: transfer, which hands over the conversation, and AgentTool, which treats the agent as a callable tool. Use AgentTool when the caller must combine the result into its own answer.",
      reference: { label: "ADK — About ADK", url: "https://adk.dev/get-started/about/" },
    },
    {
      id: "gcpaa-d3-parallel-state",
      domain: "d3",
      objective: "Develop custom agents",
      difficulty: "advanced",
      question:
        "Three ADK research agents run in a ParallelAgent, and a synthesis agent must then combine their findings. During testing, the results are sometimes missing or overwritten. What is the best design?",
      options: [
        { id: "A", text: "Let each research agent read the other branches' conversation history while they run", rationale: "Parallel branches do not automatically share conversation history or state during execution." },
        { id: "B", text: "Have all three research agents write to the same state key", rationale: "Each write replaces the previous one, which is exactly what causes overwritten results." },
        { id: "C", text: "Replace the ParallelAgent with a LoopAgent", rationale: "A loop repeats sub-agents; it does not solve how results are collected." },
        { id: "D", text: "Give each research agent its own output_key, and run the synthesis agent after the ParallelAgent inside a SequentialAgent", rationale: "Correct. Each branch writes to a distinct key, and the synthesis agent reads all keys once every branch has finished." },
      ],
      answer: "D",
      explanation:
        "ParallelAgent branches are independent and their completion order is not deterministic. Write each branch's result to its own state key and combine them in a later step.",
      reference: { label: "ADK — Parallel agents", url: "https://adk.dev/agents/workflow-agents/parallel-agents/" },
    },

    /* ── Skill area 4: Evaluate and deploy agentic workflows ──────────────── */
    {
      id: "gcpaa-d4-tool-use-eval",
      domain: "d4",
      objective: "Evaluate and deploy agentic workflows",
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
      id: "gcpaa-d4-memory-bank",
      domain: "d4",
      objective: "Evaluate and deploy agentic workflows",
      difficulty: "intermediate",
      question:
        "A shopping assistant deployed on Agent Runtime should remember a returning customer's dietary preferences in future conversations without replaying every past conversation. Which service fits best?",
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
      id: "gcpaa-d4-agent-runtime",
      domain: "d4",
      objective: "Evaluate and deploy agentic workflows",
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

    /* ── Skill area 5: Secure and govern agentic workflows ────────────────── */
    {
      id: "gcpaa-d5-agent-identity",
      domain: "d5",
      objective: "Secure and govern agentic workflows",
      difficulty: "intermediate",
      question:
        "Several agents share one service account, so audit logs cannot tell which agent accessed a BigQuery dataset, and every agent has the combined permissions of all of them. What should you implement?",
      options: [
        { id: "A", text: "Create a long-lived service account key for each agent", rationale: "Long-lived keys add a credential-leak risk and are exactly what managed agent identities avoid." },
        { id: "B", text: "Grant the shared service account the Owner role to simplify troubleshooting", rationale: "This makes over-permissioning worse." },
        { id: "C", text: "Agent Identity, giving each agent its own identity and granting only the roles that agent needs", rationale: "Correct. Agent Identity provides a SPIFFE-based identity per agent that is not shared by default, which supports least privilege and per-agent auditing." },
        { id: "D", text: "An API key embedded in each agent's code", rationale: "API keys do not provide a per-agent IAM identity and are easy to leak." },
      ],
      answer: "C",
      explanation:
        "Per-agent identities remove over-permissioned shared accounts and make actions attributable. You can add Principal Access Boundary policies to cap what each agent can reach.",
      reference: { label: "Agent Platform — Agent Identity overview", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/agent-identity-overview" },
    },
    {
      id: "gcpaa-d5-model-armor",
      domain: "d5",
      objective: "Secure and govern agentic workflows",
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
      objective: "Secure and govern agentic workflows",
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
