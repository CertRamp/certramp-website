import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free AB-620 sample questions — ORIGINAL questions written by CertRamp for the
 * AB-620 study guide as published on Microsoft Learn (last updated 16 October 2026).
 * Not taken from the paid practice exams, not recalled exam content, and not
 * presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — AB-620 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-620",
};

const MULTI_AGENT = {
  label: "Microsoft Learn — Add other agents in Copilot Studio",
  url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-add-other-agents",
};

const EVALUATION = {
  label: "Microsoft Learn — Agent evaluation in Copilot Studio",
  url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-overview",
};

export const ab620Questions: PracticeQuestionSet = {
  slug: "ab-620",
  intro:
    "15 original AB-620 practice questions across the three skill areas of the Microsoft study guide, weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AB-620 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original AB-620 practice questions on Copilot Studio agent flows, topics, MCP and REST tools, multi-agent solutions, evaluation and ALM.",
  },
  questions: [
    /* ── Domain 1: Plan and configure agent solutions ─────────────────────── */
    {
      id: "ab620-d1-identity-teams",
      domain: "d1",
      objective: "Plan identity strategy",
      difficulty: "foundation",
      question:
        "An internal HR agent will be published only through the built-in Teams and Microsoft 365 channel. Employees must be signed in, and you want Microsoft Entra ID authentication set up without manual app registration. Which authentication option should you choose?",
      options: [
        { id: "A", text: "No authentication", rationale: "Anyone with the link could use the agent, and you would not know who the user is." },
        { id: "B", text: "Authenticate manually", rationale: "Manual authentication is for channels and identity providers that need custom configuration; it is more work than required here." },
        { id: "C", text: "Authenticate with Microsoft", rationale: "Correct. Microsoft recommends this option for the Teams and Microsoft 365 channel; it sets up Entra ID authentication automatically." },
        { id: "D", text: "An API key stored in a global variable", rationale: "API keys authenticate calls to APIs; they do not sign users in to an agent." },
      ],
      answer: "C",
      explanation:
        "Copilot Studio offers no authentication, Authenticate with Microsoft and Authenticate manually. Pick the simplest option that meets the channel and identity requirements; manual authentication is for other channels or custom identity providers.",
      reference: { label: "Microsoft Learn — Configure user authentication in Copilot Studio", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication" },
    },
    {
      id: "ab620-d1-hitl-approval",
      domain: "d1",
      objective: "Create a human-in-the-loop agent flow",
      difficulty: "intermediate",
      question:
        "An agent flow processes supplier invoices. Invoices above a threshold must first be assessed by an AI model and then approved by a finance manager before payment continues. Which action fits best?",
      options: [
        { id: "A", text: "Run a multistage approval with an AI stage followed by a manual stage", rationale: "Correct. Multistage approvals in agent flows combine AI stages, manual stages and conditions, and the flow waits until the approval completes." },
        { id: "B", text: "A Send HTTP request node in a topic", rationale: "This calls an API from a topic; it provides no approval process or waiting for a human decision." },
        { id: "C", text: "A generative answers node grounded on the invoice policy", rationale: "Generative answers produce responses from knowledge; they do not collect a manager's approval." },
        { id: "D", text: "A scheduled refresh of the knowledge source", rationale: "Refreshing knowledge has nothing to do with approving an invoice." },
      ],
      answer: "A",
      explanation:
        "Human-in-the-loop flows pause for a person's decision. A multistage approval can route an AI decision to a human reviewer, and approvers can respond in Teams, Outlook or the Power Automate portal.",
      reference: { label: "Microsoft Learn — Multistage and AI approvals in agent flows", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-advanced-approvals" },
    },
    {
      id: "ab620-d1-http-node",
      domain: "d1",
      objective: "Configure advanced agent responses with API and Send HTTP requests",
      difficulty: "intermediate",
      question:
        "In a topic you call an external order API with the Send HTTP request node. You want later nodes to use fields from the JSON response with IntelliSense in the Power Fx editor. What should you do?",
      options: [
        { id: "A", text: "Set the body to Raw content", rationale: "The body setting controls what you send, not how the response is typed." },
        { id: "B", text: "Store the response as a string and parse it with a custom prompt", rationale: "This adds an unnecessary model call and loses the typed structure." },
        { id: "C", text: "Add an Authorization header", rationale: "Headers may be needed for authentication, but they do not type the response." },
        { id: "D", text: "Generate the response schema from sample JSON and save the response to a variable", rationale: "Correct. Get schema from sample JSON creates a typed Power Fx variable that later nodes can use." },
      ],
      answer: "D",
      explanation:
        "The Send HTTP request node supports GET, POST, PATCH, PUT and DELETE, custom headers and JSON or raw bodies. Providing a sample response turns the result into a structured variable instead of plain text.",
      reference: { label: "Microsoft Learn — Make HTTP requests in Copilot Studio", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-http-node" },
    },
    {
      id: "ab620-d1-adaptive-card",
      domain: "d1",
      objective: "Configure adaptive cards",
      difficulty: "foundation",
      question:
        "A topic must collect a travel date, a destination and a cost centre in one step, with a single Submit button, and store each value for later nodes. What should you add?",
      options: [
        { id: "A", text: "Three separate Message nodes", rationale: "Message nodes display information; they do not collect input." },
        { id: "B", text: "An Adaptive Card node with three input fields and a submit action", rationale: "Correct. The Adaptive Card node shows an interactive card and creates output variables for its inputs, which are filled when the user submits." },
        { id: "C", text: "A generative answers node", rationale: "Generative answers respond from knowledge sources; they do not present a form." },
        { id: "D", text: "A global variable with a default value", rationale: "A variable stores values but does not ask the user for them." },
      ],
      answer: "B",
      explanation:
        "Use the Adaptive Card node for interactive cards that expect a submission. For cards that only display information, use Message or Question nodes; check the generated output variables with Edit Schema.",
      reference: { label: "Microsoft Learn — Ask with Adaptive Cards", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-ask-with-adaptive-card" },
    },
    {
      id: "ab620-d1-variables",
      domain: "d1",
      objective: "Manage variables",
      difficulty: "intermediate",
      question:
        "Several topics need the customer's account number once it has been captured in a sign-in topic. In addition, the API base URL must differ between development, test and production environments without editing the agent. Which combination fits?",
      options: [
        { id: "A", text: "A global variable for the account number and a Power Platform environment variable for the API base URL", rationale: "Correct. Global variables are available in all topics; environment variables hold per-environment values and are read-only in Copilot Studio." },
        { id: "B", text: "Topic variables for both values", rationale: "Topic variables are only available in the topic that creates them." },
        { id: "C", text: "A system variable for the account number", rationale: "System variables are created automatically by Copilot Studio; you cannot store your own value in one." },
        { id: "D", text: "Hard-coding the API base URL in every HTTP node", rationale: "This requires editing the agent after each deployment, which the requirement rules out." },
      ],
      answer: "A",
      explanation:
        "Copilot Studio has topic, global, system and environment variables. Environment variables are set in Power Platform and travel with solutions, so each environment can hold its own value.",
      reference: { label: "Microsoft Learn — Work with variables in Copilot Studio", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about" },
    },

    /* ── Domain 2: Integrate and extend agents in Copilot Studio ──────────── */
    {
      id: "ab620-d2-mcp",
      domain: "d2",
      objective: "Configure MCP tools",
      difficulty: "intermediate",
      question:
        "Your company runs an MCP server that exposes tools and prompt templates for its ticketing system. You connect it to a Copilot Studio agent. Which statement is correct?",
      options: [
        { id: "A", text: "Every tool must be re-imported manually whenever the server adds a tool", rationale: "Tools published by the server become available automatically, and changes on the server are reflected dynamically." },
        { id: "B", text: "MCP works with classic orchestration only", rationale: "Generative orchestration must be turned on to use MCP." },
        { id: "C", text: "The agent can use all three MCP primitives, including the prompt templates", rationale: "Copilot Studio currently supports MCP tools and resources, not prompts." },
        { id: "D", text: "The agent can use the server's tools and resources, and generative orchestration must be turned on", rationale: "Correct. Copilot Studio supports MCP tools and resources and needs generative orchestration to use them." },
      ],
      answer: "D",
      explanation:
        "MCP defines resources, tools and prompts. Copilot Studio uses tools and resources; the server supplies names, descriptions, inputs and outputs, so the orchestrator can decide when to call each tool.",
      reference: { label: "Microsoft Learn — Extend your agent with Model Context Protocol", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp" },
    },
    {
      id: "ab620-d2-rest-api",
      domain: "d2",
      objective: "Add REST APIs to an agent",
      difficulty: "intermediate",
      question:
        "You want to add a partner's REST API as a tool to an agent. The partner provides an OpenAPI 3.0 specification. What happens when you upload it?",
      options: [
        { id: "A", text: "The upload is rejected; you must build a custom connector first", rationale: "A custom connector is not required for a REST API tool, and v3 specifications are accepted." },
        { id: "B", text: "Copilot Studio translates it to an OpenAPI v2 specification automatically", rationale: "Correct. REST API tools are created from OpenAPI v2; a v3 specification is translated automatically." },
        { id: "C", text: "Copilot Studio creates an MCP server from it", rationale: "Uploading a specification creates a REST API tool, not an MCP server." },
        { id: "D", text: "Only APIs without authentication can be added", rationale: "REST API tools support no authentication, API key and OAuth 2.0." },
      ],
      answer: "B",
      explanation:
        "To add a REST API tool you need the OpenAPI specification and the authentication details. The v2 requirement comes from how Power Platform processes API specifications.",
      reference: { label: "Microsoft Learn — Add REST API tools to agents", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-rest-api" },
    },
    {
      id: "ab620-d2-computer-use",
      domain: "d2",
      objective: "Configure and monitor computer use for an agent",
      difficulty: "intermediate",
      question:
        "An agent must enter claims into a legacy Windows desktop application that has no API or connector. What should you configure?",
      options: [
        { id: "A", text: "A Send HTTP request node pointing at the application's executable", rationale: "HTTP requests call web APIs; the application has none." },
        { id: "B", text: "Azure AI Search as a knowledge source", rationale: "Knowledge sources ground answers; they cannot operate an application." },
        { id: "C", text: "The computer use tool on a Windows machine set up for it, with generative orchestration turned on", rationale: "Correct. Computer use operates websites and desktop apps with a virtual mouse and keyboard when no API exists." },
        { id: "D", text: "A Fabric data agent", rationale: "Fabric data agents answer questions over Fabric data; they do not operate desktop applications." },
      ],
      answer: "C",
      explanation:
        "Computer use runs on a Windows machine you set up and select in the tool. During testing you see a step-by-step log and a preview of the machine; in conversations it shares reasoning messages and screenshots.",
      reference: { label: "Microsoft Learn — Computer use in Copilot Studio", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use" },
    },
    {
      id: "ab620-d2-azure-ai-search",
      domain: "d2",
      objective: "Connect to Azure AI Search",
      difficulty: "advanced",
      question:
        "You add an Azure AI Search index as a knowledge source and want answers to show citations that link to the original documents. What should the index contain?",
      options: [
        { id: "A", text: "A field with the full URL of each document, such as metadata_storage_path", rationale: "Correct. Copilot Studio uses metadata_storage_path as the citation when present, or otherwise a field containing a complete URL." },
        { id: "B", text: "One vector index per document type", rationale: "Only one vector index can be added, and multiple indexes do not create citations." },
        { id: "C", text: "The admin key stored in a document field", rationale: "Keys belong in the data connection, never in index content." },
        { id: "D", text: "A semantic ranker configuration only", rationale: "The semantic ranker improves relevance but does not provide citation links." },
      ],
      answer: "A",
      explanation:
        "Azure AI Search must be added through a formal data connection, for example with Microsoft Entra ID authentication. Citations need a URL field in the index, and users can open them only if they have access to the underlying source.",
      reference: { label: "Microsoft Learn — Add Azure AI Search as a knowledge source", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-azure-ai-search" },
    },
    {
      id: "ab620-d2-a2a",
      domain: "d2",
      objective: "Create a multi-agent solution by using A2A protocol",
      difficulty: "intermediate",
      question:
        "A logistics partner exposes a shipment-tracking agent built on another platform through the Agent2Agent (A2A) protocol. Your Copilot Studio agent should delegate tracking questions to it. What should you do?",
      options: [
        { id: "A", text: "Rebuild the partner agent as a child agent in your Copilot Studio agent", rationale: "Rebuilding duplicates the partner's work; it can be connected directly." },
        { id: "B", text: "Copy the partner's answers into a knowledge file", rationale: "Static files cannot answer live tracking questions." },
        { id: "C", text: "Ask the partner to publish its agent to your Teams tenant", rationale: "Publishing to Teams makes it available to people, not as a connected agent of yours." },
        { id: "D", text: "Add it as a connected agent that is available over the A2A protocol", rationale: "Correct. Copilot Studio can add other agents that are available over A2A to a multi-agent solution." },
      ],
      answer: "D",
      explanation:
        "Copilot Studio can add child agents, other Copilot Studio agents in the environment, A2A agents, and (in preview) Microsoft Foundry agents, Fabric data agents and Microsoft 365 Agents SDK agents.",
      reference: MULTI_AGENT,
    },
    {
      id: "ab620-d2-fabric-data-agent",
      domain: "d2",
      objective: "Integrate a Fabric data agent",
      difficulty: "advanced",
      question:
        "You connect a Fabric data agent to your main Copilot Studio agent so that users can ask sales questions over a lakehouse. During design, which limitation must you plan for?",
      options: [
        { id: "A", text: "The main agent must use classic topics only", rationale: "There is no such requirement in the documentation for connected agents." },
        { id: "B", text: "Fabric data agents cannot be the target of a topic's Redirect node and do not currently work when the main agent is deployed to Microsoft Copilot", rationale: "Correct. Microsoft documents both limitations for Fabric data agents connected in Copilot Studio." },
        { id: "C", text: "The Fabric data agent must be rebuilt as a child agent", rationale: "Fabric data agents are connected as they are; they do not need rebuilding." },
        { id: "D", text: "Fabric data agents can only answer questions in English", rationale: "The documentation does not list such a restriction." },
      ],
      answer: "B",
      explanation:
        "Connecting Foundry, Fabric and Microsoft 365 Agents SDK agents is in public preview. Fabric data agents also cannot be referenced in instructions, so plan channels and routing around these limits.",
      reference: MULTI_AGENT,
    },
    {
      id: "ab620-d2-app-insights",
      domain: "d2",
      objective: "Monitor agents by using Application Insights",
      difficulty: "foundation",
      question:
        "Your operations team wants Copilot Studio conversation telemetry in the same Azure Application Insights resource they already use for other services. What do you do?",
      options: [
        { id: "A", text: "Export the transcript table from Dataverse to Application Insights every night", rationale: "A manual export is not needed; Copilot Studio can send telemetry directly." },
        { id: "B", text: "Install the Azure Monitor Agent on the users' devices", rationale: "Agents on devices collect device logs, not Copilot Studio conversations." },
        { id: "C", text: "Enter the Application Insights connection string in the agent's advanced settings", rationale: "Correct. The agent then logs telemetry, which you query in the Logs section, for example in the customEvents table." },
        { id: "D", text: "Add an MCP server for Application Insights", rationale: "MCP extends what the agent can do; it is not how telemetry is configured." },
      ],
      answer: "C",
      explanation:
        "In Settings > Advanced you add the connection string and can optionally log message details and node execution events. Test-canvas conversations are flagged with designMode so you can filter them out.",
      reference: { label: "Microsoft Learn — Capture telemetry with Application Insights", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry" },
    },

    /* ── Domain 3: Test and manage agents ─────────────────────────────────── */
    {
      id: "ab620-d3-test-set-import",
      domain: "d3",
      objective: "Create a test set",
      difficulty: "foundation",
      question:
        "You have 80 real user questions with the answers the business expects, kept in a spreadsheet. You want to evaluate your agent against them. What is the quickest way to create the test set?",
      options: [
        { id: "A", text: "Save them as a CSV file with the headings Question and Expected response and import it", rationale: "Correct. Imported test sets use a CSV or text file with these headings, up to 100 questions." },
        { id: "B", text: "Type each question into the test chat and wait for errors", rationale: "Manual chatting does not produce a repeatable test set with expected responses." },
        { id: "C", text: "Generate questions from the agent's topics", rationale: "Generated questions would not be your 80 real questions and expected answers." },
        { id: "D", text: "Upload the spreadsheet as a knowledge source", rationale: "That would add the content to the agent's knowledge rather than test it." },
      ],
      answer: "A",
      explanation:
        "Test sets can be generated from knowledge or topics, built from the latest test chat, written manually or imported. Expected responses are optional for import but needed for comparison-based test methods.",
      reference: { label: "Microsoft Learn — Create a test set", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create" },
    },
    {
      id: "ab620-d3-evaluation-method",
      domain: "d3",
      objective: "Choose an evaluation method",
      difficulty: "intermediate",
      question:
        "Your agent's answers may be worded differently from the expected responses, as long as they say the same thing. Which test method should you choose?",
      options: [
        { id: "A", text: "Exact match", rationale: "Exact match fails any answer that is not word-for-word identical." },
        { id: "B", text: "Keyword match", rationale: "Keyword match checks for specific words or phrases, not overall meaning." },
        { id: "C", text: "Tool use", rationale: "Tool use checks whether the expected tools or topics were used, not the answer content." },
        { id: "D", text: "Compare meaning", rationale: "Correct. Compare meaning evaluates how well the meaning of the answer matches the expected response." },
      ],
      answer: "D",
      explanation:
        "Copilot Studio offers general quality, content safety, compare meaning, tool use, keyword match, text similarity, exact match and custom methods. Methods that compare against an expected value return Invalid when that value is missing.",
      reference: EVALUATION,
    },
    {
      id: "ab620-d3-pipelines",
      domain: "d3",
      objective: "Implement and extend Microsoft Power Platform Pipelines",
      difficulty: "advanced",
      question:
        "You use Power Platform pipelines to move a solution containing your agent from development to test and production. Which statement is correct?",
      options: [
        { id: "A", text: "Pipelines deploy the solution together with its Dataverse table data", rationale: "Pipelines and solutions do not contain data stored in Dataverse tables." },
        { id: "B", text: "The development environment must be the pipelines host", rationale: "Using the same environment for development and the host is not supported." },
        { id: "C", text: "Test and production targets must be managed environments, and Microsoft recommends deploying managed solutions to them", rationale: "Correct. All non-developer environments used in pipelines must be managed environments, and managed solutions are recommended for non-development targets." },
        { id: "D", text: "Pipelines cannot be customised", rationale: "Pipelines can be extended with extension hooks, Power Automate and integration with other CI/CD tools." },
      ],
      answer: "C",
      explanation:
        "Pipelines deploy solutions plus configuration such as connection references and environment variables. Keep agents in solutions from the start so that ALM, environment variables and pipelines work as intended.",
      reference: { label: "Microsoft Learn — Overview of pipelines in Power Platform", url: "https://learn.microsoft.com/en-us/power-platform/alm/pipelines" },
    },
  ],
};
