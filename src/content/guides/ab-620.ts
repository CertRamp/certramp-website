import type { ExamGuide } from "@/config/types";

/**
 * AB-620 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ab620Guide: ExamGuide = {
  slug: "ab-620",
  summary:
    "AB-620 (Designing and Building Integrated AI Agent Solutions in Copilot Studio) leads to the Microsoft Certified: AI Agent Builder Associate certification. It tests whether you can plan, build, integrate, test and deploy enterprise agents in Microsoft Copilot Studio — agent flows, topics, MCP and REST tools, multi-agent solutions, Azure integration, evaluation and ALM. The exam takes 120 minutes and you need 700 points to pass.",
  whoFor: [
    "Professional developers and advanced builders who build, extend and integrate custom agents in Copilot Studio",
    "IT application developers, consultants and ISV partners delivering agent solutions for organisations or customers",
    "Power Platform makers who already configure basic agents and want to move to integrations, multi-agent designs and ALM",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AB-620 actually tests",
      paragraphs: [
        "AB-620 has three skill areas. Integrating and extending agents in Copilot Studio carries the most weight (40–45%): enterprise knowledge sources, tools such as computer use, MCP, custom connectors and REST APIs, multi-agent collaboration, and integration with Azure. Planning and configuring agent solutions is worth 30–35% (planning, agent flows and topics), and testing and managing agents 20–25% (evaluation and ALM).",
        "This is a developer-level exam, not an introduction. Microsoft expects familiarity with Power Fx, Dataverse, Power Platform environments, Microsoft 365 Copilot, Microsoft Foundry and adaptive cards, intermediate knowledge of generative AI concepts such as orchestration, RAG, MCP and the A2A protocol, and experience with prompt engineering and REST APIs.",
      ],
    },
    {
      id: "how-it-is-structured",
      heading: "How the outline is structured",
      paragraphs: [
        "The planning area starts before any building: integration with enterprise systems, identity, channels, responsible AI, security and governance, reusable components and internal versus external audiences. It then moves to agent flows (including human-in-the-loop flows, error handling and monitoring) and advanced topic authoring with custom prompts, HTTP requests, generative answers, adaptive cards and variables.",
        "The integration area names concrete technologies: Copilot connectors, Power Platform connectors and Azure AI Search for knowledge; computer use, MCP, custom connectors and REST APIs as tools; Foundry agents, Fabric data agents, existing agents and A2A for multi-agent solutions; and Azure AI Search with Foundry, the Foundry model catalog and Application Insights. Microsoft notes that most questions cover generally available features, but commonly used preview features may appear. Translated versions are updated about eight weeks after the English exam.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official AB-620 skills list and mark it as known, unsure or new. Spend most time on integration, which alone is up to 45%.",
        },
        {
          title: "Get a Copilot Studio environment",
          body: "Use a Copilot Studio trial or a developer environment, plus an Azure subscription for Azure AI Search, Foundry and Application Insights. Watch Azure costs outside free tiers.",
        },
        {
          title: "Build one agent with real integrations",
          body: "Create an agent with generative orchestration, add a Power Platform connector, a REST API tool from an OpenAPI file and an MCP server, and ground it on an Azure AI Search index with citations.",
        },
        {
          title: "Add flows, topics and a second agent",
          body: "Build an agent flow with an approval step and error handling, a topic with an adaptive card and an HTTP request, and connect a second agent. Note which multi-agent options are still in preview.",
        },
        {
          title: "Evaluate and deploy it properly",
          body: "Create a test set, run several evaluation methods, put the agent in a solution with environment variables and deploy it with Power Platform pipelines to a test environment. Connect Application Insights and look at the telemetry.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams in 120 minutes, read every explanation, and use Microsoft's free practice assessment. Book when your results are stable, and plan the free annual renewal assessment.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Preparing at maker level only. AB-620 expects integrations with APIs, MCP, Azure and other agents, not just knowledge sources and simple topics.",
        "Mixing up extension options. Know when to use a connector, a custom connector, a REST API tool, an MCP server, an HTTP request node or computer use.",
        "Ignoring preview limits. Several multi-agent integrations are in preview and have documented limitations that affect design choices.",
        "Treating evaluation as optional. Test sets, evaluation methods and reviewing results are part of the outline, and each method needs the right expected values.",
        "Building outside solutions. ALM questions assume agents live in solutions with environment variables and are deployed through pipelines.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the AB-620 exam and what is the passing score?",
      answer:
        "You have 120 minutes. Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for AB-620; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "What is the official name of the AB-620 exam and certification?",
      answer:
        "The exam is \"Designing and Building Integrated AI Agent Solutions in Copilot Studio\" and it leads to the Microsoft Certified: AI Agent Builder Associate certification. \"Copilot Studio AI Agent Builder\" is a common short description, not the official name.",
    },
    {
      question: "How do I renew the AI Agent Builder Associate certification?",
      answer:
        "Microsoft associate certifications expire annually. You renew for free by passing an online assessment on Microsoft Learn during the six-month renewal window, before the certification expires.",
    },
    {
      question: "In which languages is AB-620 available?",
      answer:
        "English, Arabic (Saudi Arabia), Chinese (Simplified), Chinese (Traditional), French, German, Indonesian (Indonesia), Italian, Japanese, Korean, Portuguese (Brazil), Russian and Spanish. If the exam is not available in your preferred language, you can request an additional 30 minutes.",
    },
    {
      question: "Are CertRamp's AB-620 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AB-620 Exam Guide 2026: AI Agent Builder Skills & Study Plan",
    description:
      "AB-620 guide: 120 minutes, pass mark 700, Copilot Studio agent flows, MCP and REST tools, multi-agent solutions, evaluation, ALM and a six-step plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
