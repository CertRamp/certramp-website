import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free AB-100 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 16 November 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — AB-100 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-100",
};

export const ab100Questions: PracticeQuestionSet = {
  slug: "ab-100",
  intro:
    "15 original AB-100 practice questions across the three skill areas of the Microsoft study guide (skills measured as of 16 November 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AB-100 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original AB-100 practice questions on AI strategy, agent design in Copilot Studio and Foundry, ALM, testing and AI security — each fully explained.",
  },
  questions: [
    /* ── Domain 1: Plan AI-powered business solutions ─────────────────────── */
    {
      id: "ab100-d1-grounding-data",
      domain: "d1",
      objective: "Analyze requirements for AI-powered business solutions",
      difficulty: "foundation",
      question:
        "An HR agent answers questions from a SharePoint library. Testers find that it often quotes a leave policy that was replaced last year, because old and new versions of the document sit side by side in the library. Which grounding data quality issue should you address first?",
      options: [
        { id: "A", text: "Availability", rationale: "The data is available to the agent; the problem is what the data contains." },
        { id: "B", text: "Timeliness", rationale: "Correct. The agent is grounded on outdated content. Removing or archiving superseded versions keeps the knowledge source current." },
        { id: "C", text: "Model size", rationale: "A larger model does not fix outdated source documents; it will still ground on what it is given." },
        { id: "D", text: "Response length", rationale: "Shorter or longer answers do not change which policy version the agent uses." },
      ],
      answer: "B",
      explanation:
        "The study guide asks you to review grounding data for accuracy, relevance, timeliness, cleanliness and availability. An agent is only as reliable as its knowledge sources, so stale documents must be cleaned up before tuning anything else.",
      reference: GUIDE,
    },
    {
      id: "ab100-d1-custom-engine-agent",
      domain: "d1",
      objective: "Design overall AI strategy for business solutions",
      difficulty: "advanced",
      question:
        "A manufacturer wants an agent that uses its own fine-tuned, industry-specific model, runs complex multi-system workflows with custom business logic, and proactively sends messages to users without being prompted. Which approach should the architect recommend?",
      options: [
        { id: "A", text: "A declarative agent that extends Microsoft 365 Copilot", rationale: "Declarative agents use Copilot's orchestrator and models, so they cannot use the manufacturer's own model or custom orchestration." },
        { id: "B", text: "A SharePoint agent scoped to one site", rationale: "A SharePoint agent answers questions over site content; it does not provide custom models or custom orchestration." },
        { id: "C", text: "A prompt library for Microsoft 365 Copilot users", rationale: "A prompt library helps users write better prompts but does not change models, orchestration or proactive behaviour." },
        { id: "D", text: "A custom engine agent", rationale: "Correct. Custom engine agents allow custom orchestration, your own models and proactive messaging, at the cost of more hosting and compliance responsibility." },
      ],
      answer: "D",
      explanation:
        "Extending Microsoft 365 Copilot is faster and inherits its security and compliance. A custom agent is justified when you need your own models, custom orchestration or behaviour that Copilot's orchestrator does not support.",
      reference: { label: "Microsoft Learn — Agents for Microsoft 365 Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview" },
    },
    {
      id: "ab100-d1-model-router",
      domain: "d1",
      objective: "Evaluate the costs and benefits of an AI-powered business solution",
      difficulty: "intermediate",
      question:
        "A customer service solution receives a mix of very simple questions and complex reasoning requests. Sending everything to the most capable model is too expensive, but the team does not want to write and maintain its own routing logic. What should you propose in Microsoft Foundry?",
      options: [
        { id: "A", text: "Deploy model router", rationale: "Correct. Model router is deployed like a single model and routes each prompt in real time to the most suitable underlying model, balancing quality and cost." },
        { id: "B", text: "Deploy only the smallest available model", rationale: "This cuts cost but would reduce quality for the complex requests." },
        { id: "C", text: "Fine-tune the most capable model on all past tickets", rationale: "Fine-tuning does not reduce the cost per request of the most capable model and does not route simple questions elsewhere." },
        { id: "D", text: "Increase the token limit of every request", rationale: "A higher token limit increases cost and does nothing to choose a cheaper model for simple prompts." },
      ],
      answer: "A",
      explanation:
        "The study guide lists \"Implement a model router to intelligently route requests to the most suitable model\" under cost and benefit evaluation. Routing modes let you favour balance, cost or quality.",
      reference: { label: "Microsoft Learn — Model router for Microsoft Foundry", url: "https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/model-router" },
    },
    {
      id: "ab100-d1-build-buy-extend",
      domain: "d1",
      objective: "Evaluate the costs and benefits of an AI-powered business solution",
      difficulty: "intermediate",
      question:
        "A contact centre already licenses Dynamics 365 Customer Service. It wants AI-generated case summaries and reply drafts for its agents, and the built-in Copilot capabilities in the app cover the requirement after configuration. What is the most appropriate recommendation?",
      options: [
        { id: "A", text: "Build a custom agent in Microsoft Foundry with a new model", rationale: "Building from scratch adds cost, risk and maintenance when an existing capability already meets the need." },
        { id: "B", text: "Buy a separate third-party summarisation product", rationale: "Buying another product adds licensing and integration effort without a requirement the built-in capability misses." },
        { id: "C", text: "Configure and, where needed, extend the Copilot capabilities in Dynamics 365 Customer Service", rationale: "Correct. When a prebuilt capability meets the requirement, configuring and extending it usually offers the best time to value and lowest total cost." },
        { id: "D", text: "Postpone AI until a custom small language model can be trained", rationale: "Delaying ignores a capability that already meets the requirement." },
      ],
      answer: "C",
      explanation:
        "Build, buy or extend is a cost-benefit decision. Start from what prebuilt agents and in-app Copilot features already deliver, and build custom components only for gaps they cannot close.",
      reference: GUIDE,
    },
    {
      id: "ab100-d1-tco",
      domain: "d1",
      objective: "Evaluate the costs and benefits of an AI-powered business solution",
      difficulty: "foundation",
      question:
        "You are preparing the ROI analysis for a new agent. Which cost set reflects total cost of ownership rather than only the initial project cost?",
      options: [
        { id: "A", text: "Build effort plus ongoing licensing or consumption, monitoring, maintenance, retesting and governance over the solution's life", rationale: "Correct. Total cost of ownership covers the whole lifecycle, not just the cost of building the first version." },
        { id: "B", text: "Only the consultant days needed to build the first version", rationale: "This is the initial project cost and ignores running and maintenance costs." },
        { id: "C", text: "Only the expected time savings per user", rationale: "Time savings are a benefit, not a cost." },
        { id: "D", text: "Only the cost of the pilot environment", rationale: "A pilot is a small part of the lifecycle cost." },
      ],
      answer: "A",
      explanation:
        "The study guide asks you to select ROI criteria including total cost of ownership. AI solutions carry recurring costs such as consumption, monitoring, retesting after model changes and governance, which must be weighed against the measured benefits.",
      reference: GUIDE,
    },
    {
      id: "ab100-d1-generative-orchestration",
      domain: "d1",
      objective: "Design overall AI strategy for business solutions",
      difficulty: "intermediate",
      question:
        "An agent in Copilot Studio should be able to answer a single question by combining a topic, a tool and a knowledge source, choosing them based on their descriptions instead of matching trigger phrases. Which setting supports this?",
      options: [
        { id: "A", text: "Classic orchestration with more trigger phrases", rationale: "Classic orchestration matches trigger phrases and tries to select a single topic, falling back to knowledge." },
        { id: "B", text: "Turning off all knowledge sources", rationale: "This removes one of the resources the agent is supposed to combine." },
        { id: "C", text: "A Fallback topic that redirects to the Escalate topic", rationale: "The Fallback topic handles unrecognised input; it does not orchestrate topics, tools and knowledge together." },
        { id: "D", text: "Generative orchestration", rationale: "Correct. With generative orchestration the agent selects topics, tools, other agents and knowledge based mainly on their names and descriptions, and can combine them in one response." },
      ],
      answer: "D",
      explanation:
        "Generative orchestration makes good descriptions the most important design artefact. It is also required for features such as Model Context Protocol tools and event triggers.",
      reference: { label: "Microsoft Learn — Generative orchestration in Copilot Studio", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions" },
    },

    /* ── Domain 2: Design AI-powered business solutions ───────────────────── */
    {
      id: "ab100-d2-fallback",
      domain: "d2",
      objective: "Design AI and agents for business solutions",
      difficulty: "foundation",
      question:
        "In a Copilot Studio agent, you want to control what happens when the agent cannot work out what the user wants: ask the user to rephrase and, if it still fails, hand over to a human. Which topic should you design?",
      options: [
        { id: "A", text: "The Greeting topic", rationale: "The Greeting topic starts the conversation; it does not handle unrecognised input." },
        { id: "B", text: "A custom topic with many trigger phrases", rationale: "More trigger phrases may reduce misses, but they do not define the behaviour when intent is still unknown." },
        { id: "C", text: "The Fallback system topic", rationale: "Correct. The Fallback topic triggers on unknown intent, can ask the user to rephrase and then redirects to the Escalate topic." },
        { id: "D", text: "The Conversation Start event trigger", rationale: "This runs at the start of a conversation, not when input is not understood." },
      ],
      answer: "C",
      explanation:
        "The outline names \"Design topics for Copilot Studio, including fallback\". By default the Fallback topic asks the user to rephrase up to twice before escalating, and it can store the unrecognised input for later analysis.",
      reference: { label: "Microsoft Learn — Configure the system fallback topic", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-fallback-topic" },
    },
    {
      id: "ab100-d2-computer-use",
      domain: "d2",
      objective: "Design extensibility of AI solutions",
      difficulty: "intermediate",
      question:
        "An agent must enter supplier invoices into a legacy Windows desktop application that has no API and no connector. Which Copilot Studio capability lets the agent complete this task?",
      options: [
        { id: "A", text: "A custom connector to the application's REST API", rationale: "The application has no API, so there is nothing for a connector to call." },
        { id: "B", text: "Computer use", rationale: "Correct. Computer use lets an agent operate websites and desktop apps on a Windows computer through the user interface, so it works even when no API exists." },
        { id: "C", text: "A knowledge source pointing to the application's help files", rationale: "Knowledge sources help the agent answer questions; they do not perform data entry." },
        { id: "D", text: "A prompt action that summarises invoices", rationale: "A summary does not enter data into the application." },
      ],
      answer: "B",
      explanation:
        "Use APIs and connectors where they exist. When the only interface is a screen, computer use can select buttons, menus and fields, which suits tasks such as data entry and invoice processing.",
      reference: { label: "Microsoft Learn — Computer use in Copilot Studio", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use" },
    },
    {
      id: "ab100-d2-mcp",
      domain: "d2",
      objective: "Design extensibility of AI solutions",
      difficulty: "advanced",
      question:
        "Your engineering team already runs a Model Context Protocol (MCP) server that exposes tools for querying the order system. A Copilot Studio agent should use these tools, and new tools added to the server should become available without rebuilding the agent. What should you design?",
      options: [
        { id: "A", text: "Connect the agent to the MCP server and use generative orchestration", rationale: "Correct. Tools and resources published by a connected MCP server become available in Copilot Studio automatically and are updated when the server changes; MCP requires generative orchestration." },
        { id: "B", text: "Recreate each tool as a separate Power Automate flow", rationale: "This duplicates the logic and loses the automatic updates from the server." },
        { id: "C", text: "Upload the MCP server's source code as a knowledge file", rationale: "Knowledge files are for answering questions, not for calling tools." },
        { id: "D", text: "Connect the MCP server while using classic orchestration only", rationale: "Copilot Studio requires generative orchestration to use MCP." },
      ],
      answer: "A",
      explanation:
        "MCP is an open protocol for exposing tools, resources and prompts to agents. Designing agent extensibility with MCP lets one server serve many agents, with the server's names and descriptions guiding when tools are used.",
      reference: { label: "Microsoft Learn — Extend your agent with Model Context Protocol", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp" },
    },
    {
      id: "ab100-d2-autonomous-trigger",
      domain: "d2",
      objective: "Design AI and agents for business solutions",
      difficulty: "intermediate",
      question:
        "An agent should review every new Dataverse row for a supplier onboarding request and start the checks on its own, without anyone sending it a message. What should you design?",
      options: [
        { id: "A", text: "More trigger phrases on the onboarding topic", rationale: "Trigger phrases react to user messages; the requirement is to act without one." },
        { id: "B", text: "A Fallback topic", rationale: "The Fallback topic handles unrecognised user input." },
        { id: "C", text: "A prompt library for the onboarding team", rationale: "A prompt library supports people writing prompts; it does not make the agent act on its own." },
        { id: "D", text: "An autonomous agent with an event trigger such as \"When a row is added, modified or deleted\"", rationale: "Correct. Event triggers let an agent act autonomously when an event occurs, such as a Dataverse row change, instead of waiting for user input." },
      ],
      answer: "D",
      explanation:
        "Autonomous agents are driven by events rather than conversations. Event triggers need generative orchestration, and each trigger payload counts towards billing, which belongs in the cost analysis.",
      reference: { label: "Microsoft Learn — Event triggers in Copilot Studio", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about" },
    },
    {
      id: "ab100-d2-declarative-agent",
      domain: "d2",
      objective: "Design extensibility of AI solutions",
      difficulty: "intermediate",
      question:
        "Project managers work in Teams and SharePoint and want a low-code assistant that answers questions from the project methodology site, follows company-specific instructions and stays within Microsoft 365's security and compliance boundary. Which design fits best?",
      options: [
        { id: "A", text: "A custom engine agent hosted in Azure with its own orchestrator", rationale: "A custom engine agent needs extra hosting and its own compliance measures, which the requirement does not justify." },
        { id: "B", text: "A declarative agent for Microsoft 365 Copilot with the site as knowledge", rationale: "Correct. Declarative agents define instructions, knowledge and actions on top of Microsoft 365 Copilot, work inside Microsoft 365 apps and inherit its security and compliance." },
        { id: "C", text: "A computer use agent that browses the site", rationale: "Computer use automates user-interface tasks; it is not needed to answer questions from site content." },
        { id: "D", text: "A custom model trained on the methodology", rationale: "Training a custom model is costly and unnecessary when grounding on the site meets the need." },
      ],
      answer: "B",
      explanation:
        "Extending Microsoft 365 Copilot with a declarative agent is the fastest, lowest-risk option when users work inside Microsoft 365 apps and the agent mainly needs instructions and knowledge.",
      reference: { label: "Microsoft Learn — Agents for Microsoft 365 Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview" },
    },

    /* ── Domain 3: Deploy AI-powered business solutions ───────────────────── */
    {
      id: "ab100-d3-app-insights",
      domain: "d3",
      objective: "Analyze, monitor, and tune AI-powered business solutions",
      difficulty: "intermediate",
      question:
        "Operations wants to analyse a Copilot Studio agent's conversations, exceptions and topic usage with Kusto queries alongside other application telemetry in Azure. What should you recommend?",
      options: [
        { id: "A", text: "Export the conversation transcripts to Excel once a month", rationale: "Manual exports are not continuous monitoring and cannot be queried with Kusto alongside other telemetry." },
        { id: "B", text: "Add more trigger phrases to the most used topics", rationale: "This changes the agent's behaviour; it does not provide monitoring data." },
        { id: "C", text: "Connect the agent to Azure Application Insights", rationale: "Correct. Once connected, the agent logs telemetry to Application Insights, where you can query custom events with Kusto and use dashboards." },
        { id: "D", text: "Turn off logging of conversation details", rationale: "Turning off logging reduces the data available for analysis." },
      ],
      answer: "C",
      explanation:
        "Copilot Studio analytics give a built-in overview; Application Insights adds detailed, queryable telemetry. Decide deliberately which conversation details and sensitive properties to log.",
      reference: { label: "Microsoft Learn — Capture telemetry with Application Insights", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry" },
    },
    {
      id: "ab100-d3-agent-evaluation",
      domain: "d3",
      objective: "Manage the testing of AI-powered business solutions",
      difficulty: "intermediate",
      question:
        "Makers change an agent's instructions and knowledge sources every few weeks. You need an objective, repeatable way to tell whether each change improves or worsens answer quality before it reaches production. What should you put in place?",
      options: [
        { id: "A", text: "A test set in Copilot Studio agent evaluation that is rerun after every change", rationale: "Correct. Agent evaluation runs test cases with expected answers and test methods, and reusing the same test set gives a consistent standard to compare changes; runs can also be triggered from CI/CD pipelines." },
        { id: "B", text: "Ad hoc manual chats in the test pane by whoever made the change", rationale: "Manual chats are inconsistent and do not give a comparable baseline." },
        { id: "C", text: "Publishing each change and waiting for user complaints", rationale: "This finds problems only after they reach users." },
        { id: "D", text: "Increasing the number of knowledge sources", rationale: "More sources do not measure quality and may make answers worse." },
      ],
      answer: "A",
      explanation:
        "Structured evaluation catches regressions early. Combine quality checks against expected answers with the safety evaluators, and keep responsible AI reviews in place as well.",
      reference: { label: "Microsoft Learn — Agent evaluation in Copilot Studio", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-intro" },
    },
    {
      id: "ab100-d3-alm-solutions",
      domain: "d3",
      objective: "Design the ALM process for AI-powered business solutions",
      difficulty: "advanced",
      question:
        "You are designing ALM for Copilot Studio agents across development, test and production environments. Which approach follows Microsoft's guidance?",
      options: [
        { id: "A", text: "Build agents in the default solution and recreate them by hand in each environment", rationale: "Agents must be in a custom solution to be exported and imported; manual recreation is error-prone." },
        { id: "B", text: "Import unmanaged solutions into production so makers can edit agents there directly", rationale: "Editing in production bypasses testing; downstream environments should receive managed solutions." },
        { id: "C", text: "Keep agents in a custom unmanaged solution in development, and deploy it as a managed solution to test and production, for example with pipelines", rationale: "Correct. Unmanaged solutions are the source in development; managed solutions are the build artefact deployed to downstream environments, and pipelines can automate the deployment." },
        { id: "D", text: "Import the managed solution back into the development environment for testing", rationale: "A managed solution cannot be imported into the environment that contains its originating unmanaged solution; testing needs a separate environment." },
      ],
      answer: "C",
      explanation:
        "Copilot Studio agents live in Power Platform solutions. Develop unmanaged, export managed, and keep the unmanaged export in source control as the source of truth.",
      reference: { label: "Microsoft Learn — Solution concepts for ALM", url: "https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm" },
    },
    {
      id: "ab100-d3-prompt-shields",
      domain: "d3",
      objective: "Design responsible AI, security, governance, risk management, and compliance",
      difficulty: "advanced",
      question:
        "An agent built in Microsoft Foundry summarises incoming customer emails. A security review warns that an attacker could hide instructions inside an email to make the agent leak data. Which mitigation targets this risk most directly?",
      options: [
        { id: "A", text: "Increase the model's maximum output length", rationale: "Output length has nothing to do with whether embedded instructions are followed." },
        { id: "B", text: "Enable Prompt Shields to detect document (indirect) attacks in the email content", rationale: "Correct. Prompt Shields detect instructions hidden in documents, emails and web pages that try to hijack the model, in addition to direct user prompt attacks." },
        { id: "C", text: "Switch the agent to a smaller model", rationale: "A smaller model does not stop it from following injected instructions." },
        { id: "D", text: "Add more examples to the system prompt", rationale: "Better prompts help, but they are not a dedicated defence against indirect prompt injection." },
      ],
      answer: "B",
      explanation:
        "Prompt manipulation comes in two forms: direct attacks in the user's prompt and indirect attacks hidden in content the model processes. Grounding on emails or web pages calls for defences against the indirect kind, combined with least-privilege access to data.",
      reference: { label: "Microsoft Learn — Prompt Shields", url: "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection" },
    },
  ],
};
