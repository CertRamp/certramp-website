import type { ExamGuide } from "@/config/types";

/**
 * CompTIA A+ Core 2 (220-1202) exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts.
 */
export const comptiaAPlusCore2Guide: ExamGuide = {
  slug: "comptia-a-plus-core-2-220-1202",
  summary:
    "CompTIA A+ Core 2 (220-1202, V15) has a maximum of 90 questions in 90 minutes, including multiple-choice, drag-and-drop and performance-based items. You pass with 700 on a scale of 100 to 900. Operating systems and security are the largest domains at 28% each. A+ also requires Core 1 (220-1201).",
  whoFor: [
    "IT support and help desk staff",
    "Candidates who have passed or are preparing for Core 1",
    "Career changers building a base for Security+",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "Core 2 has up to 90 questions in 90 minutes: multiple choice, drag-and-drop and performance-based questions. You need 700 on a scale of 100 to 900, a higher bar than Core 1's 675. The V15 exam launched on 25 March 2025.",
        "There are no required prerequisites; CompTIA recommends 12 months of hands-on IT support experience.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Operating systems and security are 28% each, software troubleshooting 23% and operational procedures 21%.",
        "Know the main desktop and mobile operating systems, their tools and command-line utilities, common security threats and controls, and good practice for documentation, change management, safety and customer communication.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Get the 220-1202 objectives", body: "Use the official V15 objectives and make sure your material is for 220-1202." },
        { title: "Work in the operating systems", body: "Use system tools, settings and command-line utilities until you can find them quickly." },
        { title: "Learn security basics", body: "Malware types, social engineering, authentication and basic hardening make up more than a quarter of the exam." },
        { title: "Practise software troubleshooting", body: "Work through symptoms such as slow systems, failed updates and app crashes with a clear method." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 90 minutes and aim clearly above 700." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using material for the older 220-1102 exam.",
        "Treating operational procedures as common sense and skipping them.",
        "Forgetting that Core 2 needs a higher score than Core 1.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does 220-1202 have?", answer: "A maximum of 90, in 90 minutes." },
    { question: "What is the Core 2 passing score?", answer: "700 on a scale of 100 to 900." },
    {
      question: "What are the Core 2 domains?",
      answer: "Operating systems 28%, security 28%, software troubleshooting 23% and operational procedures 21%.",
    },
    { question: "Do I need both A+ exams?", answer: "Yes. A+ requires Core 1 (220-1201) and Core 2 (220-1202)." },
    {
      question: "Are CertRamp's A+ questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published CompTIA objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CompTIA A+ Core 2 (220-1202) Exam Guide 2026",
    description:
      "Prepare for CompTIA A+ Core 2 (220-1202, V15): up to 90 questions in 90 minutes, 700 to pass, the four domains with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
