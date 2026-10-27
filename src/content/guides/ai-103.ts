import type { ExamGuide } from "@/config/types";

/**
 * AI-103 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ai103Guide: ExamGuide = {
  slug: "ai-103",
  summary:
    "AI-103 (Developing AI Apps and Agents on Azure) is Microsoft's developer exam for generative AI apps and agents built with Microsoft Foundry. It replaced AI-102, which retired on 30 June 2026. The exam takes 120 minutes, you need 700 points to pass, and generative AI and agents alone make up 30–35% of the skills.",
  whoFor: [
    "Developers who build generative AI applications and agents on Azure with Python",
    "AI engineers moving from classic Azure AI services to Foundry-based solutions",
    "Candidates who prepared for AI-102 and now need the successor certification",
  ],
  sections: [
    {
      id: "ai-102-vs-ai-103",
      heading: "AI-103 versus the retired AI-102",
      paragraphs: [
        "AI-102 retired on 30 June 2026. Its successor focuses much more on generative AI and agents: planning Foundry solutions (25–30%) and implementing generative and agentic solutions (30–35%) together make up more than half of the exam. Computer vision, text analysis and information extraction each account for 10–15%.",
        "Even the classic areas have moved towards generative models. Vision now includes image and video generation and multimodal understanding; text analysis uses language models for extraction and structured JSON output; information extraction centres on retrieval pipelines and Content Understanding for RAG and agents.",
      ],
    },
    {
      id: "what-the-exam-tests",
      heading: "What AI-103 actually tests",
      paragraphs: [
        "Expect design and implementation decisions rather than definitions: which model or Foundry service fits a task, how to set up retrieval and indexing, how to secure deployments with managed identity and private networking, how to add tools, memory and approval steps to an agent, and how to monitor quality, safety and cost.",
        "Responsible AI runs through every area — content filters and guardrails, safety evaluations, tracing and audit, oversight of autonomous agents and defending against prompt injection, including text hidden in images. Microsoft notes that mostly generally available features are tested, with commonly used preview features possible.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the AI-103 study guide line by line",
          body: "Mark every bullet as known, unsure or new. If you studied for AI-102, look especially at agents, multi-agent orchestration, evaluation and observability — these are new or much bigger.",
        },
        {
          title: "Build in Microsoft Foundry",
          body: "Create a Foundry project, deploy a chat model, build a small RAG app over your own documents and an agent with at least one tool. Hands-on work makes the scenario questions far easier.",
        },
        {
          title: "Practise the security and operations side",
          body: "Configure keyless authentication with managed identity, look at quotas and rate limits, enable tracing and run an evaluation. These operational topics are easy to skip and frequently tested.",
        },
        {
          title: "Cover the smaller areas",
          body: "Spend focused time on vision, speech, translation and Content Understanding. Each is 10–15%, so together they still decide whether you pass.",
        },
        {
          title: "Practise under exam conditions",
          body: "Take timed practice exams in 120 minutes and read every explanation. The exam can include labs, so practise working in the portal and SDK, not only reading.",
        },
        {
          title: "Book and plan the renewal",
          body: "Book when your practice scores are stable. The certification is valid for 12 months and renewed with a free online assessment.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Preparing with AI-102 material only. Large parts of AI-103 — agents, evaluation, observability and multimodal generation — are not covered there.",
        "Treating RAG as one step. Know ingestion, chunking and enrichment, vector, semantic and hybrid search, and how retrieval connects to agents.",
        "Ignoring cost and quotas. Managing rate limits, scaling and token usage is part of the outline.",
        "Skipping responsible AI. Safety filters, evaluations, tracing and human approval for agents appear across all areas.",
        "Using API keys everywhere. The outline emphasises managed identity and keyless credentials.",
      ],
    },
  ],
  faq: [
    {
      question: "Is AI-103 the replacement for AI-102?",
      answer:
        "AI-102 retired on 30 June 2026. AI-103 leads to the Microsoft Certified: Azure AI Apps and Agents Developer Associate certification and covers the current Foundry-based way of building AI apps and agents on Azure.",
    },
    {
      question: "How long is the AI-103 exam and what is the passing score?",
      answer: "You have 120 minutes, and Microsoft requires a score of 700 or greater to pass. The exam may include labs.",
    },
    {
      question: "Do I need programming experience for AI-103?",
      answer:
        "There are no formal prerequisites, but Microsoft expects candidates to have experience developing apps with Python and to be familiar with AI, generative AI and Azure services.",
    },
    {
      question: "Are CertRamp's AI-103 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AI-103 Exam Guide 2026: AI Apps & Agents on Azure (ex AI-102)",
    description:
      "AI-103 guide: what replaced AI-102, 120 minutes, passing score 700, Foundry, generative AI and agents, RAG, vision and language — plus a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
