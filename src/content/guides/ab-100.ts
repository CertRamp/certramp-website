import type { ExamGuide } from "@/config/types";

/**
 * AB-100 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ab100Guide: ExamGuide = {
  slug: "ab-100",
  summary:
    "AB-100 (Agentic AI Business Solutions Architect) tests whether you can plan, design and deploy AI-powered business solutions across Microsoft 365 Copilot, Copilot Studio, Microsoft Foundry, Dynamics 365 and Power Platform. You need 700 points to pass, and the English exam moves to the skills measured as of 16 November 2026. To earn the Expert certification you also need one of the prerequisite associate certifications Microsoft lists.",
  whoFor: [
    "Solution and enterprise architects who design agent-based solutions on Microsoft business applications",
    "Senior Dynamics 365 and Power Platform consultants moving into an AI architecture role",
    "AI and digital transformation leads who own AI strategy, governance and ROI decisions",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AB-100 actually tests",
      paragraphs: [
        "AB-100 has three skill areas. Plan AI-powered business solutions carries the most weight (35–40%): requirements, overall AI strategy, build-versus-buy decisions and ROI. Design AI-powered business solutions is worth 30–35% (agents, Copilot Studio topics and orchestration, extensibility with Model Context Protocol and computer use, and prebuilt agents in Dynamics 365 and Microsoft 365). Deploy AI-powered business solutions is worth 20–25%: monitoring, testing, ALM, and responsible AI, security and governance.",
        "This is an architect exam, so most questions describe a business scenario and ask for the best design decision rather than a click path. Typical decisions: extend Microsoft 365 Copilot or build a custom agent, prebuilt agent or custom build, which knowledge source and orchestration mode, how to move agents between environments, and how to protect grounding data and defend against prompt manipulation.",
      ],
    },
    {
      id: "november-2026-update",
      heading: "What the 16 November 2026 update changes",
      paragraphs: [
        "Microsoft's change log shows a shift in weighting: the planning and design areas each gain a larger share of the exam, while the deployment area shrinks. Within the areas, three sub-sections have minor changes: \"Design overall AI strategy for business solutions\", \"Design AI and agents for business solutions\" and \"Design the ALM process for AI-powered business solutions\".",
        "The audience profile and skills outline name current products and features, including Microsoft Foundry, Foundry Tools, model router, Agent2Agent (A2A) and Model Context Protocol (MCP), computer use and agent flows in Copilot Studio. Localised versions of the exam are updated about eight weeks after the English version. Microsoft notes that most questions cover generally available features, but commonly used preview features can appear.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official AB-100 skills list and mark it as known, unsure or new. The planning area alone is up to 40%, so do not treat strategy and ROI as soft topics.",
        },
        {
          title: "Check your prerequisite certification",
          body: "The Expert certification requires AB-100 plus one associate certification from Microsoft's list, for example a Dynamics 365, Power Platform or AI associate. Confirm which one you hold or plan to take on the certification page.",
        },
        {
          title: "Build agents yourself",
          body: "Use a Copilot Studio trial and a Microsoft Foundry project to build a small agent with knowledge sources, a tool, an event trigger and an MCP connection. Move it between two environments with a solution. Hands-on experience makes the design trade-offs much easier to judge.",
        },
        {
          title: "Study the frameworks the outline names",
          body: "Read the AI adoption guidance in the Cloud Adoption Framework for Azure, the Power Platform Well-Architected guidance for intelligent workloads and Microsoft's responsible AI material. Architect questions often hinge on these.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams and read every explanation, including for the questions you answered correctly. Focus on why the wrong options are wrong — that is where architect questions are decided.",
        },
        {
          title: "Book when your results are stable",
          body: "Book once you pass several practice exams with a margin. Plan the free annual renewal assessment on Microsoft Learn right away.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying only Copilot Studio. The outline spans Microsoft 365 Copilot, Microsoft Foundry, Dynamics 365 finance, supply chain and customer experience apps, and Power Platform.",
        "Skipping the business side. ROI criteria, total cost of ownership, build-buy-extend decisions and the AI Center of Excellence are named skills.",
        "Treating ALM as an afterthought. Expect questions on solutions, environments and the ALM process for agents, connectors, custom models and AI in Dynamics 365.",
        "Underestimating security and governance. Prompt manipulation, data residency, access controls on grounding data and audit trails all appear in the deployment area.",
        "Learning features without their limits. Know when to use generative orchestration versus classic topics, and when a custom agent is justified instead of extending Microsoft 365 Copilot.",
      ],
    },
  ],
  faq: [
    {
      question: "What is the passing score for AB-100?",
      answer:
        "Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for AB-100; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "Do I need another certification to become an Agentic AI Business Solutions Architect Expert?",
      answer:
        "Yes. Besides passing AB-100, you must earn at least one of the prerequisite associate-level certifications listed on Microsoft Learn, such as Power Platform Developer Associate or Azure AI Apps and Agents Developer Associate. Check the current list before you plan.",
    },
    {
      question: "How do I renew the certification?",
      answer:
        "Microsoft associate, expert and specialty certifications expire annually. You renew for free by passing an online assessment on Microsoft Learn during the six-month renewal window.",
    },
    {
      question: "What changes on 16 November 2026?",
      answer:
        "The planning and design areas gain weight and the deployment area loses weight. Microsoft lists minor changes in the overall AI strategy, AI and agent design, and ALM sub-sections.",
    },
    {
      question: "Are CertRamp's AB-100 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AB-100 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "AB-100 guide for the skills measured as of 16 Nov 2026: passing score 700, AI strategy, agent design, ALM, responsible AI and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
