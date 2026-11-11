import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free Claude Certified Developer: Foundations (CCDV-F) sample questions.
 * ORIGINAL questions written by CertRamp against Anthropic's published CCDV-F
 * exam guide (v1.0) and the official Claude documentation (verified
 * 11 November 2026). Not taken from the paid practice tests, not recalled exam
 * content, and not presented as real exam questions.
 */
const PLATFORM = (label: string, path: string) => ({
  label: `Claude Platform Docs: ${label}`,
  url: `https://platform.claude.com/docs/en/${path}`,
});

const CODE = (label: string, path: string) => ({
  label: `Claude Code Docs: ${label}`,
  url: `https://code.claude.com/docs/en/${path}`,
});

export const claudeCertifiedDeveloperCcdvFQuestions: PracticeQuestionSet = {
  slug: "claude-certified-developer-ccdv-f",
  intro:
    "15 original CCDV-F practice questions across all eight domains of Anthropic's Claude Certified Developer: Foundations exam guide, weighted roughly like the real exam (four on Applications and Integration, two each on Agents and Workflows, Model Selection and Optimization, Prompt and Context Engineering, and Tools and MCPs, one each on the smaller domains). Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-11-11",
  updated: "2026-11-11",
  seo: {
    title: "CCDV-F Practice Questions with Answers (2026)",
    description:
      "15 free, original Claude Certified Developer (CCDV-F) practice questions on the Claude API, agents, prompt caching, tools, MCP and security, with explanations.",
  },
  questions: [
    /* ── d1: Agents and Workflows (14.7%) ─────────────────────────────────── */
    {
      id: "ccdvf-d1-subagent-context",
      domain: "d1",
      objective: "Agent Architecture",
      difficulty: "intermediate",
      question:
        "An agent built with the Claude Agent SDK must check 200 source files for a deprecated API and then write a short migration plan. After a few dozen Read calls, the main conversation is crowded with file contents and the plan misses findings from early in the run. Which change addresses the cause most directly?",
      options: [
        { id: "A", text: "Delegate the audit to a read-only subagent that reports back a summary", rationale: "Correct. A subagent runs in its own conversation; its intermediate tool calls and results stay inside it and only the final message returns to the parent." },
        { id: "B", text: "Raise max_turns so the agent has more round trips available to finish the audit", rationale: "max_turns limits how many tool-use turns run. It does nothing about file contents accumulating in the main context." },
        { id: "C", text: "Ask the agent to restate all findings so far after every Read call", rationale: "Repeating findings adds even more tokens to the same context window instead of keeping the raw file contents out of it." },
        { id: "D", text: "Run the session in plan permission mode so Claude explores without editing files", rationale: "Plan mode controls whether Claude edits files. It does not change how much tool output accumulates in the conversation." },
      ],
      answer: "A",
      explanation:
        "Context isolation is one of the main reasons to use subagents: the parent receives a concise summary instead of every file the subagent read. Restricting the subagent to Read, Grep and Glob also keeps the audit strictly read-only.",
      reference: CODE("Subagents in the SDK", "agent-sdk/subagents"),
    },
    {
      id: "ccdvf-d1-bound-the-loop",
      domain: "d1",
      objective: "Agent Construction with Claude",
      difficulty: "intermediate",
      question:
        "A team exposes an Agent SDK agent behind an internal endpoint that accepts open-ended prompts such as \"improve this codebase\". Some sessions run for a very long time and cost far more than expected. What is the documented way to bound each run?",
      options: [
        { id: "A", text: "Set effort to \"max\" so Claude reaches a finished answer in fewer steps", rationale: "Higher effort lets Claude spend more tokens on reasoning; it is not a limit on how long the loop runs." },
        { id: "B", text: "Set max_turns and max_budget_usd and handle the error result subtypes", rationale: "Correct. Both options default to no limit; when one is hit the SDK returns a ResultMessage with the subtype error_max_turns or error_max_budget_usd, and the session can be resumed if needed." },
        { id: "C", text: "Add Bash to disallowed_tools so the agent cannot run long commands", rationale: "Blocking a tool reduces what the agent can do but does not cap the number of turns or the spend." },
        { id: "D", text: "Use the bypassPermissions mode so the agent never waits for approval", rationale: "This removes approval prompts and is meant only for isolated environments. It makes runs less controlled, not shorter." },
      ],
      answer: "B",
      explanation:
        "Without limits the agent loop runs until Claude produces a response with no tool calls, which can take long on open-ended prompts. The documentation calls setting a budget a good default for production agents, and the result subtype tells your code whether the task finished or hit a limit.",
      reference: CODE("How the agent loop works", "agent-sdk/agent-loop"),
    },

    /* ── d2: Applications and Integration (33.1%) ─────────────────────────── */
    {
      id: "ccdvf-d2-batch-custom-id",
      domain: "d2",
      objective: "Claude API Mechanics",
      difficulty: "intermediate",
      question:
        "Every night a job classifies about 40,000 support tickets with the same prompt template. The results are needed by the next morning, and cost matters more than latency. Which approach fits best?",
      options: [
        { id: "A", text: "Send all requests concurrently to the Messages API with streaming enabled and store results in request order", rationale: "Realtime calls are billed at standard prices and 40,000 concurrent requests run straight into rate limits; streaming adds nothing for an offline job." },
        { id: "B", text: "Submit a Message Batch and read the results by position, because a batch returns them in submission order", rationale: "The documentation says batch results can be returned in any order, so position cannot be used to match them." },
        { id: "C", text: "Submit a Message Batch and match every result to its request by custom_id", rationale: "Correct. Batch usage is charged at 50% of standard prices, most batches finish within an hour (a batch expires if it is not done within 24 hours), and custom_id is how you pair results with requests." },
        { id: "D", text: "Process the tickets one by one with the Messages API and enable prompt caching on the template", rationale: "Caching lowers the cost of the repeated prefix, but sequential realtime calls still pay standard output prices and take far longer than necessary." },
      ],
      answer: "C",
      explanation:
        "The Message Batches API is built for large, non-urgent workloads: one batch can hold up to 100,000 requests or 256 MB. Because results may come back in any order, each request needs a unique custom_id that your code uses to join the result back to its ticket.",
      reference: PLATFORM("Batch processing", "build-with-claude/batch-processing"),
    },
    {
      id: "ccdvf-d2-stateless-history",
      domain: "d2",
      objective: "Claude Application Design",
      difficulty: "foundation",
      question:
        "A chat feature sends only the user's newest message in each Messages API request. Users complain that Claude forgets what they said one turn earlier. What is the fix?",
      options: [
        { id: "A", text: "Raise max_tokens so the model can keep more of the conversation in memory", rationale: "max_tokens caps the length of the response. It has no effect on which earlier turns the model can see." },
        { id: "B", text: "Enable prompt caching so earlier turns are stored on the server and reused automatically", rationale: "Prompt caching changes what you pay for a repeated prefix that you still send. It never adds content you leave out of the request." },
        { id: "C", text: "Lower the temperature so answers stay consistent from one turn to the next", rationale: "Temperature controls randomness during generation. It cannot restore context that was never sent." },
        { id: "D", text: "Send the whole conversation, alternating user and assistant turns, with every request", rationale: "Correct. The Messages API is stateless, so each request must carry the conversation history you want Claude to consider." },
      ],
      answer: "D",
      explanation:
        "With the standard Messages API your application owns the conversation state and resends it every turn. Earlier turns do not even have to come from Claude: you can include synthetic assistant messages when you build up a conversation.",
      reference: PLATFORM("Working with the Messages API", "build-with-claude/working-with-messages"),
    },
    {
      id: "ccdvf-d2-tool-result-order",
      domain: "d2",
      objective: "Claude API Mechanics",
      difficulty: "advanced",
      question:
        "After a response with stop_reason \"tool_use\" for a client tool, your code sends a user message whose content array holds a text block (\"Here is the lookup result:\") followed by the tool_result block. The request is rejected as an invalid request. Which change fixes it?",
      options: [
        { id: "A", text: "Put the tool_result block first in the content array and the text after it", rationale: "Correct. In the user message that carries tool results, tool_result blocks must come first; any text must follow all of them." },
        { id: "B", text: "Send the tool output in a new assistant message instead of a user message", rationale: "Tool results are returned in a user message. An assistant message cannot answer a tool_use block." },
        { id: "C", text: "Insert a short user message acknowledging the tool call before the message that holds the tool_result", rationale: "Tool results must immediately follow their tool_use blocks; no other message may sit between them." },
        { id: "D", text: "Move the tool output into the system prompt of the next request", rationale: "The system prompt cannot resolve a pending tool_use block. The API expects a matching tool_result in the next user message." },
      ],
      answer: "A",
      explanation:
        "Two formatting rules apply to client tool results: the tool_result must come right after the assistant message with the tool_use, and inside that user message the tool_result blocks come before any text. Each result is linked to its call through tool_use_id.",
      reference: PLATFORM("Handle tool calls", "agents-and-tools/tool-use/handle-tool-calls"),
    },
    {
      id: "ccdvf-d2-pin-model-id",
      domain: "d2",
      objective: "Configuration Management",
      difficulty: "intermediate",
      question:
        "A production integration references a model alias that resolves to the most recent snapshot of a model version. After a new snapshot ships, a regression test of the team's extraction prompt fails although nobody changed the code. Which practice prevents this kind of surprise?",
      options: [
        { id: "A", text: "Keep the alias but set temperature to 0 so the output becomes deterministic", rationale: "Lower randomness does not stop the alias from pointing to a different snapshot with different behaviour." },
        { id: "B", text: "Pin a specific model ID and change it only after regression testing", rationale: "Correct. A model ID identifies a pinned version whose underlying model stays constant; an alias is a convenience pointer that moves to the newest snapshot." },
        { id: "C", text: "Keep the prompt inline next to the API call so prompt and code always change together", rationale: "Versioning prompts is good practice, but the failure here came from the model changing, not the prompt." },
        { id: "D", text: "Query the Models API at startup and always use the newest active model", rationale: "This would change the model even more often and make regressions harder to trace." },
      ],
      answer: "B",
      explanation:
        "Anthropic does not update the weights or configuration of an existing model ID; updated versions ship under new IDs. Pinning the ID, versioning prompts and treating a model change as a tested release is part of configuration management.",
      reference: PLATFORM("Model IDs and versions", "about-claude/models/model-ids-and-versions"),
    },

    /* ── d3: Claude Code (3.1%) ───────────────────────────────────────────── */
    {
      id: "ccdvf-d3-claude-md-scopes",
      domain: "d3",
      objective: "Claude Code Operation",
      difficulty: "foundation",
      question:
        "A team wants Claude Code to follow the build commands and coding conventions of one repository for everyone who clones it. One developer also wants personal notes for this project, such as the URL of a private sandbox, that should not be shared. Where should each set of instructions go?",
      options: [
        { id: "A", text: "Team instructions in ~/.claude/CLAUDE.md; personal notes in the project's ./CLAUDE.md file", rationale: "~/.claude/CLAUDE.md applies only to one user across all projects, and ./CLAUDE.md is the file shared with the team." },
        { id: "B", text: "Team instructions in the managed policy CLAUDE.md; personal notes in .claude/settings.json", rationale: "Managed policy files are organisation-wide instructions maintained by IT, and .claude/settings.json holds settings, not instructions, and is meant to be committed." },
        { id: "C", text: "Team instructions in ./CLAUDE.local.md; personal notes in ~/.claude/CLAUDE.md", rationale: "This is reversed: CLAUDE.local.md is for personal project notes, and the user file would apply the notes to every project." },
        { id: "D", text: "Team instructions in ./CLAUDE.md; personal notes in ./CLAUDE.local.md", rationale: "Correct. ./CLAUDE.md (or ./.claude/CLAUDE.md) holds project instructions shared through source control, while CLAUDE.local.md is for personal project-specific preferences and belongs in .gitignore." },
      ],
      answer: "D",
      explanation:
        "Claude Code reads CLAUDE.md and CLAUDE.local.md files while walking up from the working directory and concatenates them rather than letting one override another. Choosing the right scope decides who sees an instruction: the organisation, the team, only you in every project, or only you in this project.",
      reference: CODE("How Claude remembers your project", "memory"),
    },

    /* ── d4: Eval, Testing, and Debugging (2.6%) ──────────────────────────── */
    {
      id: "ccdvf-d4-retry-policy",
      domain: "d4",
      objective: "Debugging and Error Handling",
      difficulty: "intermediate",
      question:
        "Your service logs show three kinds of failed Messages API calls: 400 invalid_request_error, 401 authentication_error and 529 overloaded_error. Which handling is appropriate?",
      options: [
        { id: "A", text: "Retry all three with exponential backoff, since any of them may be temporary", rationale: "A malformed request or a revoked or expired key fails the same way on every retry; retrying only adds load and delay." },
        { id: "B", text: "Never retry; return every error to the user immediately", rationale: "This throws away easy recoveries: an overloaded API is a temporary condition that usually clears." },
        { id: "C", text: "Retry only the 400 errors after automatically shortening the prompt", rationale: "invalid_request_error covers many problems with request format or content; shortening the prompt fixes only one possible cause, and the 529s are left unhandled." },
        { id: "D", text: "Retry the 529s with backoff; fix the request (400) and the key (401)", rationale: "Correct. 529 means the API is temporarily overloaded, while 400 and 401 point to problems in the request or the credentials that a retry cannot solve." },
      ],
      answer: "D",
      explanation:
        "Separating transient errors from integration bugs is the first step in isolating where a problem comes from. The official SDK already retries connection errors, rate limits and 5xx errors with exponential backoff (twice by default), and every response carries a request-id to quote when contacting support.",
      reference: PLATFORM("Errors", "api/errors"),
    },

    /* ── d5: Model Selection and Optimization (16.8%) ─────────────────────── */
    {
      id: "ccdvf-d5-cache-miss-timestamp",
      domain: "d5",
      objective: "Cost and Token Management",
      difficulty: "advanced",
      question:
        "An application sends a 6,000-token system prompt plus tool definitions with every request and marks the end of the system prompt with cache_control. The usage field shows cache_creation_input_tokens on every request, and cache_read_input_tokens is always 0. Last week a developer added the current timestamp as the first line of the system prompt. What is the most likely cause?",
      options: [
        { id: "A", text: "The system prompt is shorter than the minimum length that can be cached", rationale: "The documented minimums are a few thousand tokens at most, and a too-short prompt would show no cache writes at all rather than a write on every request." },
        { id: "B", text: "Prompt caching only covers the messages array, never the system prompt", rationale: "Cache prefixes are built from tools, then system, then messages, so a system prompt can be cached." },
        { id: "C", text: "The timestamp changes the start of the prompt, so the cached prefix never matches", rationale: "Correct. Cache hits require 100% identical prompt segments up to the breakpoint; moving the variable timestamp after the cached block restores cache reads." },
        { id: "D", text: "cache_control must be placed on the final user message before any caching happens", rationale: "A breakpoint can be placed on the system prompt; caching covers everything up to and including the block that carries cache_control." },
      ],
      answer: "C",
      explanation:
        "Changes at one level invalidate that level and everything after it, so volatile content near the start of a prompt defeats caching. Keep stable content (tools, system instructions, reference documents) first and per-request content last, then confirm hits with cache_read_input_tokens.",
      reference: PLATFORM("Prompt caching", "build-with-claude/prompt-caching"),
    },
    {
      id: "ccdvf-d5-effort-low",
      domain: "d5",
      objective: "LLM Fundamentals",
      difficulty: "intermediate",
      question:
        "A feature extracts three fields from short, clean invoices. Quality is already good, but latency and token usage are higher than needed. Without changing the model, which adjustment should you try first?",
      options: [
        { id: "A", text: "Set output_config.effort to \"low\" and test the quality", rationale: "Correct. Lower effort reduces token spend across text, tool calls and thinking, and the documentation recommends low effort for speed-sensitive or simple tasks, after evaluating on your own use case." },
        { id: "B", text: "Raise max_tokens so the response always completes in one pass", rationale: "max_tokens is a ceiling on output length; raising it does not make a response faster or cheaper." },
        { id: "C", text: "Set effort to \"max\" so Claude reaches the answer with fewer steps", rationale: "max effort removes constraints on token spending, which moves latency and cost in the wrong direction." },
        { id: "D", text: "Pass \"adaptive\" as the effort value so Claude decides how much to think", rationale: "adaptive is a thinking mode, not an effort value, and the documentation says not to pass it as one." },
      ],
      answer: "A",
      explanation:
        "Effort is a behavioural signal that trades thoroughness for token efficiency on the same model. Because its impact varies by task, the documented practice is to measure quality on representative inputs before deploying a lower setting.",
      reference: PLATFORM("Effort", "build-with-claude/effort"),
    },

    /* ── d6: Prompt and Context Engineering (11.0%) ───────────────────────── */
    {
      id: "ccdvf-d6-long-documents-first",
      domain: "d6",
      objective: "Prompt Engineering",
      difficulty: "foundation",
      question:
        "You send Claude five contracts of about 10,000 tokens each together with the question \"Which contracts allow termination for convenience?\". Which prompt layout follows Anthropic's long-context guidance?",
      options: [
        { id: "A", text: "The question first, then the contracts, so Claude knows what to look for while reading", rationale: "Anthropic recommends the opposite order: long documents at the top and the query at the end." },
        { id: "B", text: "Contracts first, each in its own document tags with source metadata, question last", rationale: "Correct. Long inputs go above the query, and XML tags (document, source, document_content) keep multiple documents distinct; queries at the end can improve response quality by up to 30% in Anthropic's tests." },
        { id: "C", text: "All five contracts pasted as one block without separators, followed by the question", rationale: "Putting the question last is right, but without structure Claude cannot reliably tell which clause belongs to which contract." },
        { id: "D", text: "A separate call that shortens each contract to 200 tokens, then the summaries and the question", rationale: "The inputs fit comfortably in the context window, and lossy summaries can drop exactly the clause the question is about." },
      ],
      answer: "B",
      explanation:
        "For inputs of roughly 20,000 tokens or more, Anthropic suggests long-form data at the top, a clear query at the end and per-document XML structure. Asking Claude to quote the relevant clauses before answering further grounds the result.",
      reference: PLATFORM("Long context prompting tips", "build-with-claude/prompt-engineering/long-context-tips"),
    },
    {
      id: "ccdvf-d6-structured-output-checks",
      domain: "d6",
      objective: "Output Handling",
      difficulty: "advanced",
      question:
        "A pipeline uses JSON outputs (output_config.format with a json_schema) to extract order data. On rare occasions the JSON fails to parse or required fields are missing. What should the code check before parsing?",
      options: [
        { id: "A", text: "Nothing extra: constrained decoding guarantees schema-valid output in every case", rationale: "The documentation says compliance is guaranteed in most cases but lists scenarios where the output might not match the schema." },
        { id: "B", text: "Whether the response contains a thinking block, and discard it if it does", rationale: "Thinking blocks are separate from the text block that carries the JSON and do not explain truncated or missing fields." },
        { id: "C", text: "Whether stop_reason is \"refusal\" or \"max_tokens\" before trusting the JSON", rationale: "Correct. In both cases the output might not match the schema: a refusal takes precedence over schema constraints, and a response cut off at max_tokens can be incomplete." },
        { id: "D", text: "Whether string enum values match the schema's capitalisation exactly, and reject the response if not", rationale: "Capitalisation of enum values is not guaranteed, so the documentation suggests comparing case-insensitively rather than rejecting the response." },
      ],
      answer: "C",
      explanation:
        "Defensive parsing means checking why generation stopped before trusting the payload. Handle refusal and max_tokens explicitly (for example by retrying with a higher max_tokens or routing to review) instead of assuming the schema always holds.",
      reference: PLATFORM("Structured outputs", "build-with-claude/structured-outputs"),
    },

    /* ── d7: Security and Safety (8.1%) ───────────────────────────────────── */
    {
      id: "ccdvf-d7-pretooluse-exit-2",
      domain: "d7",
      objective: "Claude Hooks",
      difficulty: "intermediate",
      question:
        "A team wants Claude Code to refuse any Bash command containing \"rm -rf\" in their repository, for every developer and regardless of what Claude decides. Which setup achieves this?",
      options: [
        { id: "A", text: "Add the line \"Never run rm -rf\" to the project's CLAUDE.md", rationale: "CLAUDE.md is context that guides Claude's behaviour; it does not deterministically stop a tool call." },
        { id: "B", text: "A PostToolUse hook on Bash that exits with code 2 when the command contains rm -rf", rationale: "PostToolUse runs after the tool call has succeeded, so the deletion has already happened." },
        { id: "C", text: "A PreToolUse hook in ~/.claude/settings.json that prints a warning to stderr and exits with code 0", rationale: "Exit code 0 lets the action go ahead and Claude never sees stderr from a hook that exits 0; a user settings file is also not shared with the team." },
        { id: "D", text: "A PreToolUse hook on Bash in .claude/settings.json that exits with code 2", rationale: "Correct. PreToolUse can block a tool call; exiting with code 2 stops it and the reason written to stderr is passed back to Claude, and .claude/settings.json can be committed to the repository." },
      ],
      answer: "D",
      explanation:
        "Hooks turn a rule into a deterministic guardrail that runs outside the model. A PreToolUse hook can also return JSON with permissionDecision \"deny\" and a reason; either way the destructive command never executes.",
      reference: CODE("Hooks reference", "hooks"),
    },

    /* ── d8: Tools and MCPs (10.6%) ───────────────────────────────────────── */
    {
      id: "ccdvf-d8-tool-descriptions",
      domain: "d8",
      objective: "Tool Implementation",
      difficulty: "foundation",
      question:
        "An application defines two tools, search_orders and search_invoices, each with a one-line description. Claude often calls search_orders for questions about invoices. What is the most effective first fix?",
      options: [
        { id: "A", text: "Rewrite both descriptions in detail, including when to use and not use each tool", rationale: "Correct. Anthropic calls detailed descriptions by far the most important factor in tool performance and suggests at least 3 to 4 sentences per tool." },
        { id: "B", text: "Set tool_choice to force search_invoices whenever a question mentions invoices", rationale: "Forcing a tool takes the choice away from Claude, misfires on mixed questions, and the documentation notes that forced tool choice is not supported on some current models." },
        { id: "C", text: "Remove the descriptions so Claude relies on the tool names alone", rationale: "Less information makes selection harder, not easier." },
        { id: "D", text: "Add strict: true to both tool definitions", rationale: "Strict tool use guarantees that tool inputs match the schema. It does not help Claude decide which of two similar tools fits a question." },
      ],
      answer: "A",
      explanation:
        "Claude decides whether and which tool to call from the descriptions it is given. Explaining the boundary between similar tools, with the caveats and limits of each, is the cheapest and most reliable fix before changing anything else.",
      reference: PLATFORM("Define tools", "agents-and-tools/tool-use/define-tools"),
    },
    {
      id: "ccdvf-d8-mcp-project-http",
      domain: "d8",
      objective: "MCP Server Development",
      difficulty: "intermediate",
      question:
        "Your team built an MCP server that wraps the internal ticketing API and runs as a hosted service. Everyone who works in the repository should get it in Claude Code without configuring it themselves. Which setup fits?",
      options: [
        { id: "A", text: "Add it with --transport stdio at user scope on each developer's machine", rationale: "stdio servers run as local processes on your own machine, and user scope is private to one user account." },
        { id: "B", text: "Add it with --transport sse at local scope in the repository folder", rationale: "The SSE transport is deprecated in favour of HTTP, and local scope keeps the server private to you in one project." },
        { id: "C", text: "Add it with --transport http at project scope (.mcp.json)", rationale: "Correct. HTTP is the recommended transport for remote servers, and project scope writes it to .mcp.json in the repository root, sharing the configuration through version control; interactive sessions ask each developer to approve it." },
        { id: "D", text: "Add it with --transport http at local scope and commit the developer's ~/.claude.json", rationale: "~/.claude.json lives in the home directory and holds personal configuration; it is not part of the repository." },
      ],
      answer: "C",
      explanation:
        "Transport follows where the server runs (stdio for a local process, HTTP for a remote service), and scope follows who should get it (local, project or user). For security, Claude Code prompts before using project-scoped servers from .mcp.json in interactive sessions.",
      reference: CODE("Connect Claude Code to tools via MCP", "mcp"),
    },
  ],
};
