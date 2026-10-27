import type { ExamGuide } from "@/config/types";

/**
 * AI-200 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ai200Guide: ExamGuide = {
  slug: "ai-200",
  summary:
    "AI-200 (Developing AI Cloud Solutions on Azure) leads to the Microsoft Certified: Azure AI Cloud Developer Associate certification and covers the back-end of AI solutions: containers, vector-capable data services, messaging, Functions, security and monitoring. Microsoft retired AZ-204 (Azure Developer Associate) on 31 July 2026. AI-200 takes 120 minutes, you need 700 points to pass, and the skills outline was last updated on 7 October 2026.",
  whoFor: [
    "Back-end and cloud developers who build the services behind AI applications on Azure, mainly in Python",
    "Developers who prepared for or hold AZ-204 and want the current developer associate certification",
    "Engineers who work with Cosmos DB, PostgreSQL or Redis as vector stores for retrieval-augmented generation",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AI-200 actually tests",
      paragraphs: [
        "AI-200 has four skill areas: developing containerised solutions (20–25%), developing AI solutions with Azure data management services, connecting to and consuming Azure services (20–25%), and securing, monitoring and troubleshooting Azure solutions (20–25%). For the data area, the current English study guide shows 30–35% in the overview and 25–30% in the section heading; the change log states that its share of the exam increased on 7 October 2026. Check the official page before you plan around either figure.",
        "This is not a model-building exam. The AI part is about the data and plumbing an AI application needs: storing embeddings and running vector similarity search in Cosmos DB for NoSQL, Azure Database for PostgreSQL with pgvector and Azure Managed Redis, RAG with metadata filters, and the containers, queues, events and functions around them. Microsoft expects proficiency in Python, Azure SDKs, vector databases and containerised applications.",
      ],
    },
    {
      id: "az-204-vs-ai-200",
      heading: "AI-200 and the retired AZ-204",
      paragraphs: [
        "Microsoft lists AZ-204 (Microsoft Certified: Azure Developer Associate) as retired on 31 July 2026. If you already earned it, it stays on your Microsoft Learn transcript, but you can no longer renew it. AI-200 is the developer associate exam that now covers similar ground.",
        "Compared with AZ-204, the weight has moved towards data services with vector search, containers (Container Registry tasks, Container Apps with KEDA scaling, AKS) and observability with OpenTelemetry and KQL. Messaging (Service Bus, Event Grid), Azure Functions, Key Vault and App Configuration remain. On 7 October 2026 only the data management area changed (its weight increased); its three sub-areas are unchanged. Translated versions are updated about eight weeks after the English exam.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official AI-200 skills list and mark it as known, unsure or new. AZ-204 veterans usually find the vector search and container orchestration bullets the newest.",
        },
        {
          title: "Build one small RAG back-end end to end",
          body: "Store embeddings in Cosmos DB for NoSQL and in PostgreSQL with pgvector, run a similarity query in each, and add Azure Managed Redis as a cache. Doing it once makes index types, vector policies and consistency levels concrete.",
        },
        {
          title: "Containerise and deploy it",
          body: "Build the image with ACR Tasks, deploy it to Container Apps with a queue-based scale rule and a second revision, and try the same image on AKS with a manifest. Practise reading logs and events when something does not start.",
        },
        {
          title: "Wire up messaging and Functions",
          body: "Add a Service Bus topic with subscriptions, an Event Grid subscription with filters and an Azure Function with a trigger and bindings. Deliberately break a message to see the dead-letter queue in action.",
        },
        {
          title: "Secure and observe it",
          body: "Move secrets to Key Vault with managed identity, put settings and feature flags in App Configuration, instrument the services with OpenTelemetry and query traces with KQL in Application Insights.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams, read every explanation, and use Microsoft's free practice assessment. Book once your results are stable, and plan the free annual renewal assessment.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying only AZ-204 material. Much of it still helps, but vector search, Managed Redis, KEDA scaling and OpenTelemetry are not covered there in the same depth.",
        "Treating 'AI' as model training. AI-200 tests the data services and infrastructure around AI applications, not building or fine-tuning models.",
        "Mixing up Cosmos DB settings. Indexing policy, vector policy and consistency level each solve a different problem, and the RU cost of a read depends on the consistency level.",
        "Confusing queues with topics, and Event Grid with Service Bus. Know which service carries commands and which reacts to events, and how retries and dead-lettering work in each.",
        "Putting secrets in the wrong place. Secrets go to Key Vault; App Configuration is for settings and feature flags.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the AI-200 exam and what is the passing score?",
      answer:
        "You have 120 minutes. Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for AI-200; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "Does AI-200 replace AZ-204?",
      answer:
        "AZ-204 and the Azure Developer Associate certification retired on 31 July 2026, and AI-200 leads to the new Azure AI Cloud Developer Associate certification. The outlines overlap — messaging, Functions, Key Vault, containers — but AI-200 adds vector search in Cosmos DB, PostgreSQL and Redis, container orchestration and OpenTelemetry. An AZ-204 certification you already earned stays on your transcript.",
    },
    {
      question: "How do I renew the Azure AI Cloud Developer Associate certification?",
      answer:
        "Microsoft associate certifications expire annually. You renew for free by passing an online assessment on Microsoft Learn during the six-month renewal window, before the certification expires; a pass extends the certification by one year.",
    },
    {
      question: "In which languages is AI-200 available?",
      answer:
        "English, Arabic (Saudi Arabia), Chinese (Simplified), Chinese (Traditional), French, German, Indonesian (Indonesia), Italian, Japanese, Korean, Portuguese (Brazil), Russian and Spanish. If the exam is not available in your preferred language, you can request an additional 30 minutes.",
    },
    {
      question: "Are CertRamp's AI-200 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AI-200 Exam Guide 2026: Skills, AZ-204 Changes & Study Plan",
    description:
      "AI-200 guide for the skills measured as of 7 Oct 2026: 120 minutes, pass mark 700, vector search, containers, messaging, security and a six-step plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
