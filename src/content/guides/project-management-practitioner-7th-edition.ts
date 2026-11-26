import type { ExamGuide } from "@/config/types";

/**
 * PeopleCert Project Management Practitioner (7th Edition) exam guide (English).
 * Exam facts come from the verified `exam` record in src/config/certifications.ts.
 */
export const pmPractitioner7Guide: ExamGuide = {
  slug: "project-management-practitioner-7th-edition",
  summary:
    "The Project Management Practitioner (7th Edition) exam has 56 questions and sub-questions worth 70 marks in 150 minutes. It is scenario-based and open book, and you pass with 60%. You need the 7th edition Foundation or another qualifying certification first.",
  whoFor: [
    "Project managers who apply the method on real projects",
    "Foundation holders moving to the Practitioner level",
    "Project support and PMO staff who tailor the method to their organisation",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 56 questions and sub-questions worth 70 marks, based on a project scenario, in 150 minutes. It is open book and you need 60%. It is offered in 14 languages, including English and German.",
        "You need the 7th edition Foundation or another qualifying certification listed by PeopleCert. The certification is renewed with 60 CPD points or another exam from the same product suite.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The exam covers principles, people (roles, people management and communication), practices, processes, and tailoring to the project context.",
        "Practitioner questions test application, not recall: given the scenario, which action, document or role fits the method best? Tailoring matters, so an answer must fit the project's size and context, not just follow the manual mechanically.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Refresh your Foundation knowledge", body: "Practitioner assumes you know every term and element from Foundation." },
        { title: "Know your manual", body: "The exam is open book. Tab the official manual so you can find practices, processes and roles quickly." },
        { title: "Practise with scenarios", body: "Read a full project scenario and answer questions against it, as in the real exam." },
        { title: "Practise tailoring", body: "For each scenario, ask how the method should be adapted to the project's size, risk and environment." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 150 minutes without relying on looking up every answer." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Relying on the open book instead of knowing the method well.",
        "Answering from company practice instead of the method in the scenario.",
        "Ignoring tailoring and applying the method mechanically.",
        "Using material for the previous edition.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does the Practitioner exam have?", answer: "56 questions and sub-questions worth 70 marks." },
    { question: "How long is the exam and what is the passing score?", answer: "150 minutes. You need 60%." },
    { question: "Is the Practitioner exam open book?", answer: "Yes." },
    { question: "What do I need before Practitioner?", answer: "The 7th edition Foundation or another qualifying certification listed by PeopleCert." },
    { question: "Is the exam available in German?", answer: "Yes. It is offered in 14 languages, including English and German." },
    {
      question: "Are CertRamp's questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published 7th edition guidance. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "PM Practitioner 7th Edition Exam Guide 2026: Format & Plan",
    description:
      "Prepare for the Project Management Practitioner (7th Edition) exam: 56 questions worth 70 marks in 150 minutes, open book, 60% to pass and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
