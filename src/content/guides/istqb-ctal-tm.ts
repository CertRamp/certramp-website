import type { ExamGuide } from "@/config/types";

/**
 * ISTQB CTAL-TM v3.0 exam guide (English). Exam facts come from the verified `exam`
 * record in src/config/certifications.ts.
 */
export const istqbCtalTmGuide: ExamGuide = {
  slug: "istqb-ctal-tm",
  summary:
    "The ISTQB Advanced Level Test Management (CTAL-TM) v3.0 exam has 50 multiple-choice questions in 120 minutes (plus 25% if it is not in your native language). You pass with 58 of 88 points. You need the ISTQB Foundation Level (CTFL) and practical experience first.",
  whoFor: [
    "Test managers and test leads",
    "Experienced testers moving into a management role",
    "QA managers responsible for test strategy, teams and reporting",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CTAL-TM has 50 multiple-choice questions worth 88 points in total, so some questions are worth more than one point. You have 120 minutes, or 25% more in a non-native language, and you need 58 points. The exam is based on syllabus v3.0, released on 3 May 2024, and is delivered through ISTQB Member Boards and accredited exam providers.",
        "You need CTFL (v4.0 or earlier) and enough practical experience as defined by your Member Board or exam provider.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The v3.0 syllabus has three chapters: managing the test activities, managing the product, and managing the team.",
        "Advanced questions are scenario-based and often ask you to analyse a situation and choose the best management decision: planning and estimation, risk-based testing, metrics and reporting, defect management, process improvement and team skills.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Download syllabus v3.0", body: "Use it as your checklist; v3.0 is restructured compared with the 2012 syllabus." },
        { title: "Note the higher-value questions", body: "Learning goals at higher cognitive levels carry more points; practise them most." },
        { title: "Practise scenario analysis", body: "Work through scenarios on estimation, risk, metrics and team problems and justify your choice." },
        { title: "Review CTFL test management", body: "Advanced questions build on Foundation concepts and terms." },
        { title: "Take timed practice exams", body: "Answer full 50-question practice exams in 120 minutes and aim clearly above 58 points." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using material for the old CTAL-TM 2012 syllabus.",
        "Treating all questions as equal when some are worth more points.",
        "Answering from company habits instead of the syllabus.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does CTAL-TM v3.0 have?", answer: "50 multiple-choice questions worth 88 points in total." },
    { question: "How long is the exam and what is the passing score?", answer: "120 minutes (plus 25% in a non-native language). You need 58 of 88 points." },
    { question: "What do I need before CTAL-TM?", answer: "ISTQB Foundation Level (CTFL) and sufficient practical experience as defined by your Member Board or exam provider." },
    { question: "Which syllabus is current?", answer: "Syllabus v3.0, released on 3 May 2024." },
    {
      question: "Are CertRamp's CTAL-TM questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISTQB syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISTQB CTAL-TM v3.0 Exam Guide 2026: Format & Study Plan",
    description:
      "Prepare for ISTQB Advanced Test Management (CTAL-TM v3.0): 50 questions in 120 minutes, 58 of 88 points to pass, the syllabus chapters and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
