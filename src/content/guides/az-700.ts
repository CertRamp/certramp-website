import type { ExamGuide } from "@/config/types";

/**
 * Microsoft AZ-700 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const az700Guide: ExamGuide = {
  slug: "az-700",
  summary:
    "AZ-700: Designing and Implementing Microsoft Azure Networking Solutions is the exam for the Azure Network Engineer Associate certification. It lasts 100 minutes and you pass with 700 or more. Core networking infrastructure is the largest area at 25–30%.",
  whoFor: [
    "Network engineers who design and run Azure networks",
    "Azure administrators who want to specialise in networking",
    "Engineers connecting on-premises networks to Azure",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AZ-700 lasts 100 minutes and needs 700 or more. It is scheduled through Pearson VUE, may include interactive components and is offered in ten languages, including English and German. The skills measured were updated on 27 July 2026.",
        "There are no formal prerequisites. Microsoft expects experience with Azure compute, storage and networking, and an understanding of name resolution, network protocols and address management. You renew every 12 months with a free online assessment.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Core networking infrastructure is 25–30%, connectivity services 20–25%, application delivery and network security 15–20% each, and private access to Azure services 10–15%.",
        "Expect design and troubleshooting questions on IP addressing, routing, hybrid connectivity, load balancing, private endpoints and network security. Know the limits and trade-offs between similar services.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the AZ-700 study guide", body: "Use the skills measured as of 27 July 2026 as your checklist." },
        { title: "Build a hub-and-spoke lab", body: "Create virtual networks, peering, routing and a hybrid connection in a test subscription." },
        { title: "Compare load balancing options", body: "Know when each application delivery service fits, by layer, scope and features." },
        { title: "Practise private access and security", body: "Set up private endpoints, service endpoints, NSGs and a firewall, and test the traffic flow." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 100 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Mixing up private endpoints and service endpoints.",
        "Not knowing which load balancing service works at which layer.",
        "Studying without a lab, which makes routing questions much harder.",
      ],
    },
  ],
  faq: [
    { question: "How long is AZ-700 and what is the passing score?", answer: "100 minutes. You need 700 or greater." },
    { question: "What is the largest skills area?", answer: "Design and implement core networking infrastructure with 25–30%." },
    { question: "Is AZ-700 available in German?", answer: "Yes. It is offered in ten languages, including English and German." },
    {
      question: "Are CertRamp's AZ-700 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AZ-700 Exam Guide 2026: Azure Networking Skills & Plan",
    description:
      "Prepare for AZ-700 Azure Network Engineer: 100 minutes, 700 to pass, skills measured as of July 2026 with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
