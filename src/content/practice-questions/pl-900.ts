import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free PL-900 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 24 July 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — PL-900 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-900",
};

export const pl900Questions: PracticeQuestionSet = {
  slug: "pl-900",
  intro:
    "15 original PL-900 practice questions across all five skill areas of the Microsoft study guide (skills measured as of 24 July 2026). Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "PL-900 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original PL-900 practice questions on Power Apps, Power Automate, Dataverse, administration and Copilot Studio agents — each with a full explanation.",
  },
  questions: [
    /* ── Domain 1: Business value ─────────────────────────────────────────── */
    {
      id: "pl900-d1-pages",
      domain: "d1",
      objective: "Describe the business value of Microsoft Power Platform services",
      difficulty: "foundation",
      question:
        "A housing association wants a public website where tenants can sign in, report repairs and see the status of their requests, using data the staff already manage in Dataverse. Which Power Platform service fits best?",
      options: [
        { id: "A", text: "Power Automate desktop flows", rationale: "Desktop flows automate clicks in desktop applications; they do not provide a website for external users." },
        { id: "B", text: "A model-driven app shared with each tenant", rationale: "Model-driven apps are for internal users with licences, not a public website for many external visitors." },
        { id: "C", text: "Power Pages", rationale: "Correct. Power Pages builds secure, data-driven websites for external users on top of Dataverse." },
        { id: "D", text: "A Dataverse view", rationale: "A view is a saved list of rows inside Dataverse, not a website." },
      ],
      answer: "C",
      explanation:
        "Power Pages is the Power Platform service for websites aimed at external audiences such as customers, partners or tenants, with authentication and access to Dataverse data.",
      reference: GUIDE,
    },
    {
      id: "pl900-d1-connectors",
      domain: "d1",
      objective: "Describe the business value of Microsoft Power Platform services",
      difficulty: "foundation",
      question:
        "Which Power Platform component lets apps and flows read and write data in services such as SharePoint, Outlook, Salesforce or SQL Server without custom integration code?",
      options: [
        { id: "A", text: "Connectors", rationale: "Correct. Connectors wrap the APIs of other services so apps and flows can use them through triggers, actions and data sources." },
        { id: "B", text: "Environments", rationale: "Environments are containers for apps, flows and data; they do not connect to outside services." },
        { id: "C", text: "Security roles", rationale: "Security roles control what users may do with Dataverse data, not integration with other services." },
        { id: "D", text: "Solutions", rationale: "Solutions package components for moving them between environments; they are not an integration mechanism." },
      ],
      answer: "A",
      explanation:
        "Connectors are the integration layer of Power Platform. Hundreds of standard and premium connectors exist, and custom connectors can wrap your own APIs.",
      reference: GUIDE,
    },
    {
      id: "pl900-d1-copilot-studio",
      domain: "d1",
      objective: "Describe the business value of Microsoft Power Platform services",
      difficulty: "foundation",
      question:
        "An HR team wants employees to ask questions such as \"How many vacation days do I have left?\" in Microsoft Teams and get answers based on HR policies and employee data. Which service should they use?",
      options: [
        { id: "A", text: "Power Pages", rationale: "Power Pages builds websites; it is not the tool for a conversational assistant in Teams." },
        { id: "B", text: "Copilot Studio", rationale: "Correct. Copilot Studio creates agents that answer questions from knowledge sources, can call tools and can be published to channels such as Teams." },
        { id: "C", text: "A canvas app", rationale: "A canvas app could show the data, but it is not a conversational agent that answers questions in natural language." },
        { id: "D", text: "Dataverse business rules", rationale: "Business rules apply simple logic to data in forms; they do not provide a chat experience." },
      ],
      answer: "B",
      explanation:
        "Copilot Studio is Microsoft's tool for building agents. Knowledge sources supply the answers, tools and agent flows perform actions, and channels such as Teams make the agent available to users.",
      reference: GUIDE,
    },

    /* ── Domain 2: Environment, Dataverse, administration ─────────────────── */
    {
      id: "pl900-d2-relationship",
      domain: "d2",
      objective: "Describe Microsoft Dataverse",
      difficulty: "intermediate",
      question:
        "In Dataverse, each Customer can have many Orders, and each Order belongs to exactly one Customer. Which relationship do you create from the Customer table to the Order table?",
      options: [
        { id: "A", text: "One-to-many", rationale: "Correct. One customer row relates to many order rows; the Order table gets a lookup column to Customer." },
        { id: "B", text: "Many-to-many", rationale: "Many-to-many would mean an order could belong to several customers, which is not the case here." },
        { id: "C", text: "One-to-one", rationale: "Dataverse does not model this scenario as one-to-one; a customer clearly has more than one order." },
        { id: "D", text: "No relationship; store the customer name as text", rationale: "Text copies break when names change and cannot be used for related views or security. A lookup relationship is the right design." },
      ],
      answer: "A",
      explanation:
        "One-to-many (seen from the Order side: many-to-one) is the most common Dataverse relationship. It is implemented as a lookup column on the 'many' table.",
      reference: GUIDE,
    },
    {
      id: "pl900-d2-environments",
      domain: "d2",
      objective: "Describe Microsoft Power Platform administration and governance",
      difficulty: "foundation",
      question:
        "A company wants app makers to build and test new apps without any risk of changing the data used by the live production apps. What should the administrator provide?",
      options: [
        { id: "A", text: "A new security role in the production environment", rationale: "A role limits permissions but the makers would still work against production data." },
        { id: "B", text: "A Dataverse view that hides production rows", rationale: "Views filter what is displayed; they do not isolate data from changes." },
        { id: "C", text: "A new connector", rationale: "Connectors integrate services; they do not separate development from production." },
        { id: "D", text: "A separate environment for development and testing", rationale: "Correct. Environments separate apps, flows and Dataverse data, so work in a development environment cannot touch production data." },
      ],
      answer: "D",
      explanation:
        "Environments are the main boundary in Power Platform for data, apps, flows and policies. A common pattern is development, test and production environments, connected by ALM pipelines.",
      reference: GUIDE,
    },
    {
      id: "pl900-d2-business-logic",
      domain: "d2",
      objective: "Describe Microsoft Dataverse",
      difficulty: "intermediate",
      question:
        "A maker wants a Dataverse column called Total to be calculated automatically as Quantity × Unit Price, using an Excel-like formula language. What should the maker use?",
      options: [
        { id: "A", text: "A desktop flow", rationale: "Desktop flows automate user interface actions; they are not used to calculate column values in a table." },
        { id: "B", text: "A Power Pages site", rationale: "Power Pages displays data on a website; it does not define calculations in the table." },
        { id: "C", text: "A formula column written in Power Fx", rationale: "Correct. Dataverse formula columns use Power Fx, the low-code language that is based on Excel formulas." },
        { id: "D", text: "A new environment", rationale: "Environments separate solutions; they have nothing to do with column calculations." },
      ],
      answer: "C",
      explanation:
        "Dataverse offers several options for business logic: business rules, formula columns in Power Fx, flows and plug-ins. For a simple calculation inside a row, a formula column is the low-code choice.",
      reference: GUIDE,
    },

    /* ── Domain 3: Power Apps ─────────────────────────────────────────────── */
    {
      id: "pl900-d3-canvas-vs-model",
      domain: "d3",
      objective: "Describe Power Apps capabilities and use cases",
      difficulty: "foundation",
      question:
        "Field technicians need a phone app with a fully custom layout: large buttons, a camera control for photos and data from SharePoint and Excel. Which app type fits best?",
      options: [
        { id: "A", text: "Model-driven app", rationale: "Model-driven apps generate their layout from Dataverse forms and views and are built on Dataverse, so a pixel-level custom mobile layout is not their strength." },
        { id: "B", text: "Canvas app", rationale: "Correct. Canvas apps start from a blank screen, give full control over layout and controls such as the camera, and connect to many data sources through connectors." },
        { id: "C", text: "Power Pages site", rationale: "Power Pages is for websites, typically for external users, not a native-feeling field app." },
        { id: "D", text: "Cloud flow", rationale: "A cloud flow automates processes in the background; it has no user interface." },
      ],
      answer: "B",
      explanation:
        "Rule of thumb: canvas apps start from the user interface and can use many data sources; model-driven apps start from the data model in Dataverse and generate a consistent, responsive interface.",
      reference: GUIDE,
    },
    {
      id: "pl900-d3-model-driven",
      domain: "d3",
      objective: "Describe Power Apps capabilities and use cases",
      difficulty: "intermediate",
      question:
        "A team tracks complex cases with many related tables, business process stages and role-based security, all in Dataverse. They want a consistent, responsive app with little design work. Which app type fits best?",
      options: [
        { id: "A", text: "Canvas app", rationale: "A canvas app could do it, but every screen would have to be designed by hand, which is the opposite of 'little design work'." },
        { id: "B", text: "Desktop flow", rationale: "Desktop flows automate existing applications; they do not create an app for case management." },
        { id: "C", text: "Model-driven app", rationale: "Correct. Model-driven apps are built on Dataverse and generate forms, views and navigation from the data model, including business process flows and security." },
        { id: "D", text: "Power Pages site", rationale: "Power Pages targets external website users, not an internal case management app." },
      ],
      answer: "C",
      explanation:
        "Model-driven apps shine for data-heavy, process-driven business applications on Dataverse. The interface follows the data model, so it stays consistent across devices.",
      reference: GUIDE,
    },
    {
      id: "pl900-d3-ai-build",
      domain: "d3",
      objective: "Describe how to build basic apps by using Power Apps",
      difficulty: "foundation",
      question:
        "A business user with no app-building experience wants to start a new app by describing it in plain language, for example \"an app to track equipment loans\". What does Power Apps offer for this?",
      options: [
        { id: "A", text: "Creating the app with AI from a natural-language description", rationale: "Correct. Power Apps can generate tables and an app from a description with Copilot, which the user can then refine." },
        { id: "B", text: "Writing a plug-in in C#", rationale: "Plug-ins are professional developer extensions for Dataverse, not a starting point for business users." },
        { id: "C", text: "Importing a security role", rationale: "Security roles control permissions; they do not create apps." },
        { id: "D", text: "Creating a new environment", rationale: "An environment is a container; it does not create an app from a description." },
      ],
      answer: "A",
      explanation:
        "The July 2026 skills outline expects you to describe how AI helps create canvas apps, model-driven apps and AI-powered apps. The typical flow is: describe the need, review the generated data and screens, then refine.",
      reference: GUIDE,
    },

    /* ── Domain 4: Power Automate ─────────────────────────────────────────── */
    {
      id: "pl900-d4-desktop-flow",
      domain: "d4",
      objective: "Describe Power Automate use cases and capabilities",
      difficulty: "foundation",
      question:
        "Every morning an employee copies invoice numbers from emails into an old desktop accounting program that has no API. Which type of flow can automate this?",
      options: [
        { id: "A", text: "A cloud flow using only standard connectors", rationale: "Cloud flows need a connector or API to reach the target system; the old program has none." },
        { id: "B", text: "A business rule", rationale: "Business rules apply logic to Dataverse forms; they cannot operate a desktop program." },
        { id: "C", text: "A Power Pages site", rationale: "Power Pages provides websites, not automation of a desktop program." },
        { id: "D", text: "A desktop flow (robotic process automation)", rationale: "Correct. Desktop flows record and replay actions in desktop and legacy applications that cannot be reached through connectors." },
      ],
      answer: "D",
      explanation:
        "Cloud flows connect services through connectors; desktop flows automate the user interface of applications without an API. Both can be combined, for example a cloud flow that starts a desktop flow.",
      reference: GUIDE,
    },
    {
      id: "pl900-d4-trigger",
      domain: "d4",
      objective: "Describe how to build basic flows by using Power Automate",
      difficulty: "foundation",
      question:
        "A flow should start automatically whenever a new file is added to a SharePoint document library. In Power Automate terms, \"when a file is created\" is the flow's…",
      options: [
        { id: "A", text: "Action", rationale: "Actions are the steps a flow performs after it has started, such as sending an email." },
        { id: "B", text: "Trigger", rationale: "Correct. A trigger is the event that starts a flow; every cloud flow has exactly one." },
        { id: "C", text: "Connector", rationale: "The SharePoint connector provides the trigger, but the event itself is called the trigger." },
        { id: "D", text: "Environment variable", rationale: "Environment variables store configuration values; they do not start flows." },
      ],
      answer: "B",
      explanation:
        "Cloud flows are built from one trigger and one or more actions. Connectors supply both: here the SharePoint connector's 'When a file is created' trigger.",
      reference: GUIDE,
    },
    {
      id: "pl900-d4-approvals",
      domain: "d4",
      objective: "Describe Power Automate use cases and capabilities",
      difficulty: "intermediate",
      question:
        "Purchase requests above 1,000 EUR must be approved by a manager, who should be able to approve directly in Microsoft Teams or Outlook. What is the most suitable approach?",
      options: [
        { id: "A", text: "A desktop flow on the manager's PC", rationale: "Desktop flows automate local applications; approvals in Teams and Outlook are a cloud flow scenario." },
        { id: "B", text: "A Dataverse view filtered to amounts above 1,000 EUR", rationale: "A view only lists the requests; it does not route them for approval." },
        { id: "C", text: "A cloud flow with an approval action", rationale: "Correct. Power Automate approvals send requests that can be answered in Teams, Outlook or the approvals centre, and the flow continues based on the response." },
        { id: "D", text: "A new security role for managers", rationale: "Roles grant permissions but do not create an approval process." },
      ],
      answer: "C",
      explanation:
        "Approvals are one of the standard Power Automate use cases named in the study guide, together with Teams, Outlook, SharePoint, Forms and document automation.",
      reference: GUIDE,
    },

    /* ── Domain 5: Copilot Studio agents ──────────────────────────────────── */
    {
      id: "pl900-d5-knowledge",
      domain: "d5",
      objective: "Describe how to build agents in Copilot Studio",
      difficulty: "foundation",
      question:
        "An agent in Copilot Studio should answer employee questions using the company's travel policy, which is stored on a SharePoint site. What should the maker add to the agent?",
      options: [
        { id: "A", text: "The SharePoint site as a knowledge source", rationale: "Correct. Knowledge sources let the agent generate answers from content such as SharePoint sites, files and public websites." },
        { id: "B", text: "A channel", rationale: "Channels define where the agent is published, such as Teams or a website — not where its answers come from." },
        { id: "C", text: "A desktop flow", rationale: "A desktop flow automates user interface actions; it is not the way to ground answers in documents." },
        { id: "D", text: "A Power Pages site", rationale: "Power Pages could host the agent, but it does not provide the policy content as knowledge." },
      ],
      answer: "A",
      explanation:
        "Knowledge sources ground an agent's answers in your content. Topics define scripted conversation paths, tools let the agent take actions, and channels make it available to users.",
      reference: GUIDE,
    },
    {
      id: "pl900-d5-tools",
      domain: "d5",
      objective: "Describe how to build agents in Copilot Studio",
      difficulty: "intermediate",
      question:
        "Besides answering questions, an IT helpdesk agent should create a ticket in the ticketing system when a user reports a problem. What gives the agent this ability?",
      options: [
        { id: "A", text: "Adding more knowledge sources", rationale: "Knowledge sources improve answers but do not let the agent create records in another system." },
        { id: "B", text: "Publishing to another channel", rationale: "Channels change where the agent is available, not what it can do." },
        { id: "C", text: "Creating a Dataverse view", rationale: "A view lists data; it does not let the agent take actions." },
        { id: "D", text: "Adding a tool, for example an agent flow or a connector action", rationale: "Correct. Tools — including agent flows, connector actions and MCP servers — let agents perform actions in other systems." },
      ],
      answer: "D",
      explanation:
        "The study guide names tools, including MCP servers and agent flows, as the way agents act. A good mental model: knowledge = what the agent knows, tools = what it can do, topics = how a conversation is guided.",
      reference: GUIDE,
    },
    {
      id: "pl900-d5-channels",
      domain: "d5",
      objective: "Describe how to build agents in Copilot Studio",
      difficulty: "foundation",
      question:
        "A finished Copilot Studio agent should be available to employees in Microsoft Teams and to customers on the company website. What does the maker configure?",
      options: [
        { id: "A", text: "Topics", rationale: "Topics define conversation paths inside the agent, not where it is available." },
        { id: "B", text: "Channels", rationale: "Correct. After publishing, channels make the agent available in places such as Teams, Microsoft 365 Copilot or a website." },
        { id: "C", text: "Environments", rationale: "Environments separate solutions and data; they do not publish an agent to Teams or a website." },
        { id: "D", text: "Agent evaluations", rationale: "Evaluations test the quality of an agent's answers; they do not make it available to users." },
      ],
      answer: "B",
      explanation:
        "Publishing an agent and connecting it to channels is a separate step from building it. One agent can serve several channels at once.",
      reference: GUIDE,
    },
  ],
};
