import type { ExamGuide } from "@/config/types";

/**
 * iSAQB CPSA-F exam guide (English). Exam facts come from the verified `exam`
 * record in src/config/certifications.ts (curriculum 2025.1-rev2).
 */
export const isaqbCpsaFGuide: ExamGuide = {
  slug: "isaqb-cpsa-f",
  summary:
    "The iSAQB CPSA Foundation Level exam has about 40 multiple-choice questions, worth 1 or 2 points each, in 75 minutes (plus 15 minutes in a foreign language). You pass with at least 60% of the points. The certification is valid for life, and training is recommended but not required.",
  whoFor: [
    "Software developers taking on architecture responsibility",
    "Software architects who want a recognised, vendor-neutral foundation certificate",
    "Technical leads and consultants in the German-speaking market, where CPSA-F is widely known",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has about 40 randomly drawn multiple-choice questions worth 1 or 2 points each. You have 75 minutes, or 90 minutes if you take it in a foreign language, and you need at least 60% of the achievable points. Independent certification bodies licensed by iSAQB run the exam.",
        "There are no formal prerequisites. An accredited training is recommended but not required, and the certificate does not expire.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The curriculum has five exam-relevant chapters: basic concepts, requirements and constraints, design and development, specification and communication, and analysis and assessment of software architectures. iSAQB publishes no exam weights.",
        "Learning goals marked R1 are examined, R2 may be examined and R3 are not. Focus first on all R1 goals across the five chapters.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Download the current curriculum", body: "Use the CPSA-F curriculum 2025.1 and mark every R1 and R2 learning goal." },
        { title: "Learn the terms precisely", body: "Quality attributes, quality scenarios, architecture decisions, views, cross-cutting concepts: many questions turn on exact definitions." },
        { title: "Connect requirements to design", body: "Practise deriving design decisions from quality requirements and constraints." },
        { title: "Practise documentation", body: "Describe a small system with context, building block and runtime views, for example in the arc42 structure." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 75 minutes, including multi-part questions worth 2 points." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Spending time on R3 learning goals, which are not examined.",
        "Answering from personal project experience instead of the curriculum's definitions.",
        "Rushing multi-part questions where every statement counts.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does the CPSA-F exam have?", answer: "About 40 randomly drawn multiple-choice questions, worth 1 or 2 points each." },
    { question: "How long is the exam?", answer: "75 minutes, plus 15 minutes if you take it in a foreign language." },
    { question: "What is the passing score?", answer: "At least 60% of the achievable points." },
    { question: "Do I need a training course?", answer: "No. An accredited training is recommended but not required." },
    { question: "Does the CPSA-F certificate expire?", answer: "No. It is valid for life." },
    {
      question: "Are CertRamp's CPSA-F questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published iSAQB curriculum. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "iSAQB CPSA-F Exam Guide 2026: Curriculum, Format & Plan",
    description:
      "Prepare for the iSAQB CPSA Foundation Level exam: about 40 questions in 75 minutes, 60% to pass, R1/R2 learning goals and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
