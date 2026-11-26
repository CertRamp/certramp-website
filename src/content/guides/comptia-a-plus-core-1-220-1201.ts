import type { ExamGuide } from "@/config/types";

/**
 * CompTIA A+ Core 1 (220-1201) exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts.
 */
export const comptiaAPlusCore1Guide: ExamGuide = {
  slug: "comptia-a-plus-core-1-220-1201",
  summary:
    "CompTIA A+ Core 1 (220-1201, V15) has a maximum of 90 questions in 90 minutes, including multiple-choice, drag-and-drop and performance-based items. You pass with 675 on a scale of 100 to 900. Hardware and network troubleshooting is the largest domain at 28%. A+ also requires Core 2 (220-1202).",
  whoFor: [
    "Newcomers to IT support and help desk roles",
    "Career changers who want an entry-level IT certification",
    "Candidates planning Network+ or Security+ later",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "Core 1 has up to 90 questions in 90 minutes: single and multiple-response multiple choice, drag-and-drop and performance-based questions. You need 675 on a scale of 100 to 900. The V15 exam launched on 25 March 2025.",
        "There are no required prerequisites; CompTIA recommends 12 months of hands-on IT support experience. To earn A+ you must pass both Core 1 and Core 2.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Hardware and network troubleshooting is 28%, hardware 25%, networking 23%, mobile devices 13% and virtualisation and cloud computing 11%.",
        "Learn the hardware components and their connectors, basic networking and a step-by-step troubleshooting method. Many questions describe a symptom and ask for the most likely cause or the next step.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Get the 220-1201 objectives", body: "Use the official V15 objectives and make sure your material is for 220-1201." },
        { title: "Get hands-on", body: "Open a PC, swap components, set up a small home network and connect mobile devices." },
        { title: "Learn the troubleshooting method", body: "Practise CompTIA's step-by-step method on many symptoms; it is the largest domain." },
        { title: "Make comparison lists", body: "Connectors, cable types, RAID levels, wireless standards and ports are easy points once memorised." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 90 minutes, then move on to Core 2." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using material for the older 220-1101 exam.",
        "Skipping troubleshooting practice.",
        "Forgetting that A+ needs both Core 1 and Core 2.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does 220-1201 have?", answer: "A maximum of 90, in 90 minutes." },
    { question: "What is the Core 1 passing score?", answer: "675 on a scale of 100 to 900." },
    { question: "Do I need both A+ exams?", answer: "Yes. A+ requires Core 1 (220-1201) and Core 2 (220-1202)." },
    {
      question: "What are the Core 1 domains?",
      answer: "Mobile devices 13%, networking 23%, hardware 25%, virtualization and cloud computing 11%, hardware and network troubleshooting 28%.",
    },
    {
      question: "Are CertRamp's A+ questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published CompTIA objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CompTIA A+ Core 1 (220-1201) Exam Guide 2026",
    description:
      "Prepare for CompTIA A+ Core 1 (220-1201, V15): up to 90 questions in 90 minutes, 675 to pass, the five domains with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
