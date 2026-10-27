import type { ExamGuide } from "@/config/types";

/**
 * AI-901 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ai901Guide: ExamGuide = {
  slug: "ai-901",
  summary:
    "AI-901 (Microsoft Azure AI Fundamentals) is the exam for the Microsoft Certified: Azure AI Fundamentals certification and replaced AI-900, which retired on 30 June 2026. It tests AI concepts and responsible AI (40–45%) and building simple AI solutions with Microsoft Foundry (55–60%), against the skills measured as of 15 April 2026. You need 700 points to pass, and Fundamentals certifications do not expire.",
  whoFor: [
    "People at the start of a career in AI solution development who want a first Azure AI certification",
    "Developers with some Python who want to learn Microsoft Foundry, generative AI and agents",
    "Candidates who planned to take AI-900 and now need its successor",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AI-901 actually tests",
      paragraphs: [
        "AI-901 has two skill areas. \"Identify AI concepts and capabilities\" (40–45%) covers the six responsible AI principles, how generative AI models work, choosing a model and its deployment options and parameters, and recognising common workloads: generative and agentic AI, text analysis, speech, computer vision and information extraction.",
        "\"Implement AI solutions by using Microsoft Foundry\" (55–60%) is the larger area. You are expected to write system and user prompts, deploy a model and use it in the Foundry portal, build lightweight client apps with the Foundry SDK, create and test a single agent, and use Azure Speech, multimodal models, image generation and Azure Content Understanding in Foundry Tools.",
      ],
    },
    {
      id: "ai-900-vs-ai-901",
      heading: "AI-901 versus the retired AI-900",
      paragraphs: [
        "AI-900 retired on 30 June 2026. To earn Microsoft Certified: Azure AI Fundamentals, candidates now pass AI-901. The certification name stays the same, but the exam is more practical: more than half of the skills are about implementing solutions in Microsoft Foundry rather than describing services.",
        "Microsoft's certification page says candidates should have conceptual knowledge of AI solutions in Azure, knowledge of Python coding syntax and programming techniques, and familiarity with Azure resources, REST APIs, SDKs and CLIs. If your notes are built around older AI-900 topics such as classic machine learning on Azure, check them against the current AI-901 study guide.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official AI-901 skills list and mark it as known, unsure or new. The Foundry implementation area is worth 55–60%, so plan most of your time there.",
        },
        {
          title: "Learn the concepts precisely",
          body: "Be able to tell the six responsible AI principles apart in a scenario, explain at a high level how a generative model produces output, and name the right workload — text analysis, speech, vision, image generation or information extraction — for a business need.",
        },
        {
          title: "Build in Microsoft Foundry",
          body: "Deploy a chat model, test system prompts in the playground, create a single agent, and call a deployment from a short Python script with the Foundry SDK. Try a multimodal prompt with an image and an extraction task with Content Understanding.",
        },
        {
          title: "Work through the Microsoft Learn training",
          body: "Use the free AI-901 learning material on Microsoft Learn and check each module against the current skills outline.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams and read every explanation, including for the questions you answered correctly. Book the exam once you pass several practice exams with a margin.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying from AI-900 material only. The successor exam puts more weight on building with Microsoft Foundry, agents and generative models.",
        "Mixing up the responsible AI principles. Transparency, accountability and fairness are easy to confuse — learn what each one looks like in a concrete situation.",
        "Confusing the system prompt with the user prompt. Behaviour, tone and boundaries for the whole conversation belong in the system prompt.",
        "Treating a model and an agent as the same thing. An agent combines a model with instructions and tools so that it can take actions.",
        "Skipping the hands-on parts. Deploying a model, testing it in the portal and calling it from code make the scenario questions much easier.",
      ],
    },
  ],
  faq: [
    {
      question: "What is the passing score for AI-901, and how long is the exam?",
      answer:
        "Microsoft requires 700 or greater to pass. The AI-901 exam page does not state a duration; Microsoft's exam duration page lists 45 minutes of exam time (65 minutes seat time) for Fundamentals exams. Check the exam time you are given when you register.",
    },
    {
      question: "Can I still take AI-900?",
      answer:
        "No. AI-900 retired on 30 June 2026. To earn Microsoft Certified: Azure AI Fundamentals you now pass AI-901.",
    },
    {
      question: "Does the Azure AI Fundamentals certification expire?",
      answer:
        "No. Microsoft states that Fundamentals certifications do not expire, so there is no renewal assessment.",
    },
    {
      question: "Do I need to be able to code for AI-901?",
      answer:
        "Some coding knowledge helps. Microsoft expects knowledge of Python coding syntax and programming techniques and familiarity with REST APIs, SDKs and CLIs, and several skills involve building lightweight client applications.",
    },
    {
      question: "Are CertRamp's AI-901 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AI-901 Exam Guide 2026: Azure AI Fundamentals Study Plan",
    description:
      "AI-901 guide for the skills measured as of 15 April 2026: AI concepts, responsible AI, Microsoft Foundry, passing score 700 and a five-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
