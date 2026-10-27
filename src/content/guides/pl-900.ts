import type { ExamGuide } from "@/config/types";

/**
 * PL-900 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const pl900Guide: ExamGuide = {
  slug: "pl-900",
  summary:
    "PL-900 (Microsoft Power Platform Fundamentals) is Microsoft's entry-level exam for Power Apps, Power Automate, Dataverse and Copilot Studio. It takes 45 minutes, you need 700 points to pass, and the certification does not expire. Since the skills update of 24 July 2026, building and managing agents in Copilot Studio makes up 20–25% of the exam.",
  whoFor: [
    "Business users and analysts who want to automate tasks or build simple apps without code",
    "IT professionals and consultants who advise on or support Power Platform projects",
    "Anyone starting a Power Platform career before role-based exams such as app maker or developer certifications",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What PL-900 actually tests",
      paragraphs: [
        "PL-900 is a fundamentals exam. It checks whether you understand what each part of Microsoft Power Platform does and when to use it — not whether you can build a complex solution. Most skills in the official study guide start with \"Describe\": describe the value of Power Apps, describe tables and relationships in Dataverse, describe use cases for cloud and desktop flows.",
        "In practice, many questions give you a short business situation and ask which tool, app type or feature fits it best. You need to know the differences between canvas and model-driven apps, between cloud and desktop flows, and between Dataverse and a traditional database well enough to choose correctly under time pressure.",
      ],
    },
    {
      id: "july-2026-update",
      heading: "What changed with the July 2026 skills update",
      paragraphs: [
        "The skills measured as of 24 July 2026 put a clear focus on AI. Copilot Studio now has its own skill area (20–25%) covering topics, knowledge sources, tools including MCP servers and agent flows, publishing through channels, Microsoft Agent 365, usage monitoring and agent evaluations.",
        "AI also runs through the other areas: creating tables, canvas apps, model-driven apps, cloud flows and desktop flows with AI, and the vibe experience for AI-powered apps. Power Apps also adds Plan designer and code apps. The update removed the separate Power Pages skill area (Power Pages now appears only as a business-value bullet) and replaced the hands-on 'build a canvas app / model-driven app' objectives with describing how AI builds them. If you prepared with older material focused on building apps by hand, Power Pages site creation or Power BI, you are missing a large part of today's exam.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        {
          title: "Start with the official study guide",
          body: "Download the PL-900 skills list from Microsoft Learn and mark each bullet as known, unsure or new. The five skill areas and their weights tell you where to spend your time.",
        },
        {
          title: "Get hands-on with a free environment",
          body: "Sign up for a Power Platform developer environment or a trial and build one small canvas app, one model-driven app on a Dataverse table, one cloud flow and one Copilot Studio agent. Fifteen minutes in the product makes many questions obvious.",
        },
        {
          title: "Work through the Microsoft Learn modules",
          body: "Follow the free PL-900 learning path area by area, with extra time on Copilot Studio and the AI features, which are the newest content.",
        },
        {
          title: "Practise with timed questions",
          body: "45 minutes is short. Practise answering scenario questions in about a minute each and read every explanation, including for the ones you got right.",
        },
        {
          title: "Book when you score consistently",
          body: "Book the exam once you pass several practice tests with a margin — not after a single good result.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using outdated material. Older courses still focus on Power BI and Power Virtual Agents; the current exam is about Dataverse, apps, flows and Copilot Studio agents.",
        "Mixing up canvas and model-driven apps. Canvas apps start from the design of the screen; model-driven apps start from the data model in Dataverse.",
        "Confusing cloud flows with desktop flows. Desktop flows (robotic process automation) automate clicks in desktop and legacy applications; cloud flows connect services through connectors.",
        "Ignoring administration. Administration and governance (environments, the security model, monitoring and ALM with pipelines) shares a 20–25% area with Dataverse and is easy to overlook for business users.",
        "Learning only definitions. Most questions ask which option fits a scenario, so practise choosing, not just recognising terms.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the PL-900 exam and what score do I need?",
      answer:
        "You have 45 minutes. Microsoft requires a score of 700 or greater to pass. If the exam is not available in your language, you can request 30 extra minutes.",
    },
    {
      question: "Does the PL-900 certification expire?",
      answer: "No. According to Microsoft, Fundamentals certifications do not expire, so there is no annual renewal.",
    },
    {
      question: "Do I need PL-900 before other Power Platform certifications?",
      answer:
        "No. Microsoft states that PL-900 can help you prepare for role-based certifications, but it is not a prerequisite for any of them.",
    },
    {
      question: "Is Power BI still part of PL-900?",
      answer:
        "No. Power BI was already absent from the outline before the 24 July 2026 update, and the current skills measured do not list it. The five areas are business value, environment management (Dataverse and administration), Power Apps, Power Automate and Copilot Studio agents.",
    },
    {
      question: "Are CertRamp's PL-900 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "PL-900 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "PL-900 guide for the skills measured as of 24 July 2026: 45 minutes, passing score 700, five skill areas incl. Copilot Studio agents, and a five-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
