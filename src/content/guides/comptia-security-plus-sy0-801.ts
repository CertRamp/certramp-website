import type { ExamGuide } from "@/config/types";

/**
 * CompTIA Security+ V8 (SY0-801) exam guide. Exam facts come from the verified
 * `exam` record in src/config/certifications.ts and the comptia-sy0-701 tracker entry.
 */
export const comptiaSecurityPlusSy0801Guide: ExamGuide = {
  slug: "comptia-security-plus-sy0-801",
  summary:
    "CompTIA Security+ V8 (SY0-801) launched in English on 17 November 2026. The exam has a maximum of 90 multiple-choice and performance-based questions in 90 minutes, and you pass with 750 on a scale of 100 to 900. Security Operations is the largest of its five domains at 27%.",
  whoFor: [
    "Entry-level security professionals and system or network administrators moving into security",
    "Candidates who need a vendor-neutral baseline security certification",
    "New starters who would otherwise prepare for SY0-701, which retires in English on 11 June 2027",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "SY0-801 has up to 90 questions in 90 minutes, a mix of multiple-choice and performance-based questions. Performance-based questions ask you to complete a task in a simulated environment, so budget extra time for them. You need 750 on a scale of 100 to 900.",
        "There are no required prerequisites. CompTIA recommends the experience of a security administrator with two years of hands-on work.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Security Operations (27%) and Threats, Vulnerabilities, and Attacks (24%) together make up just over half the exam. Security Architecture is 19%, General Security Concepts 16% and Security Program Management and Oversight 14%.",
        "If you are switching from SY0-701 material, work from the V8 objectives document rather than a list of differences. Pick the version your study material covers: SY0-701 stays bookable in English until 11 June 2027, but new starters should prepare for SY0-801.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Download the SY0-801 objectives",
          body: "Use the official Security+ V8 exam objectives as your checklist and make sure your book or course is written for V8.",
        },
        {
          title: "Learn the terms and acronyms",
          body: "Security+ uses many acronyms. Build your own list and practise explaining each in one sentence.",
        },
        {
          title: "Practise hands-on tasks",
          body: "Performance-based questions reward practical skill. Practise reading logs, configuring basic controls and analysing simple attack scenarios.",
        },
        {
          title: "Weight your time by domain",
          body: "Spend the most time on Security Operations and Threats, Vulnerabilities, and Attacks, but cover all five domains.",
        },
        {
          title: "Take timed practice exams",
          body: "Answer full practice exams in 90 minutes and leave time for the longer performance-based items.",
        },
        {
          title: "Book with a buffer",
          body: "Book once you score clearly above 750 in several practice exams.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Preparing with SY0-701 material and then booking SY0-801.",
        "Spending too long on one performance-based question early in the exam.",
        "Memorising acronyms without understanding when each control applies.",
        "Neglecting program management and oversight topics such as governance and compliance.",
      ],
    },
  ],
  faq: [
    {
      question: "When did SY0-801 launch?",
      answer: "CompTIA launched Security+ V8 (SY0-801) in English on 17 November 2026.",
    },
    {
      question: "How many questions does SY0-801 have?",
      answer: "A maximum of 90 multiple-choice and performance-based questions in 90 minutes.",
    },
    {
      question: "What is the passing score?",
      answer: "750 on a scale of 100 to 900.",
    },
    {
      question: "Should I take SY0-701 or SY0-801?",
      answer:
        "Take the version your study material covers. SY0-701 can be booked in English until 11 June 2027; if you are starting now, prepare for SY0-801.",
    },
    {
      question: "Are CertRamp's SY0-801 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published CompTIA objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "Security+ SY0-801 Exam Guide 2026: V8 Domains & Study Plan",
    description:
      "Prepare for CompTIA Security+ V8 (SY0-801): up to 90 questions in 90 minutes, 750 to pass, the five domains with weights and how it differs from SY0-701.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
