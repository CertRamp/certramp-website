import type { ExamGuide } from "@/config/types";

/**
 * CIA Part 2 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ciaPart2Guide: ExamGuide = {
  slug: "cia-part-2",
  summary:
    "CIA Part 2 (Internal Audit Engagement) tests how you plan and perform an individual engagement: setting objectives, scope and criteria, gathering and evaluating evidence, analysing data, documenting findings and supervising the work. The IIA lists 100 questions in 120 minutes, and you need a scaled score of 600 or higher (on a 250–750 scale) to pass.",
  whoFor: [
    "CIA candidates who have passed or been waived from Part 1",
    "Staff and senior internal auditors who plan and run engagements",
    "Auditors who want a structured view of evidence, analytics and workpapers under the Global Internal Audit Standards",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What CIA Part 2 actually tests",
      paragraphs: [
        "The 2025 syllabus for Part 2 has three sections: Engagement Planning (50%), Information Gathering, Analysis, and Evaluation (40%) and Engagement Supervision and Communication (10%). Half of the exam is therefore about the work done before fieldwork starts.",
        "Questions follow the life of an engagement. Typical decisions: is this an objective or a scope statement, which criteria apply, which risks deserve testing, which procedure gives the most reliable evidence, which analytical technique fits, and whether a gap between criteria and condition is a significant finding.",
      ],
    },
    {
      id: "2025-syllabus",
      heading: "How the 2025 syllabus is structured",
      paragraphs: [
        "Part 2 is now called Internal Audit Engagement, replacing the 2019 title Practice of Internal Auditing. The 2019 version also covered managing the internal audit activity; under the 2025 syllabus that material sits largely in Part 3, and Part 2 concentrates on the single engagement.",
        "The syllabus follows the engagement principles of the Global Internal Audit Standards: plan engagements effectively, conduct engagement work, and communicate. It explicitly includes data analytics — structured and unstructured data, the analytics process, and diagnostic, predictive, prescriptive, anomaly detection and text analysis techniques.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the syllabus",
          body: "Download the Part 2 Expanded Test Specifications and rate yourself on topics A.1 to C.2. Planning alone is half of the exam, so start there.",
        },
        {
          title: "Walk through one engagement end to end",
          body: "Take a real or invented engagement and write its objectives, scope, criteria, risk and control matrix and work programme. Seeing how each step feeds the next makes scenario questions easier.",
        },
        {
          title: "Learn the evidence hierarchy",
          body: "Know why evidence from independent sources, corroborated evidence and evidence from well-controlled systems is more reliable, and what makes evidence sufficient and relevant.",
        },
        {
          title: "Practise analytical review",
          body: "Work ratio, trend, variance and benchmark examples until you can tell quickly what an unexpected movement might indicate and which follow-up procedure fits.",
        },
        {
          title: "Take timed practice exams",
          body: "Practise sets under exam conditions (100 questions in 120 minutes is 72 seconds per question) and read every explanation.",
        },
        {
          title: "Book when your scores are stable",
          body: "Schedule the exam at a Pearson VUE test centre once you pass practice exams with a margin, keeping the three-year CIA programme window in mind.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using 2019 material for Part 2. The old Part 2 also covered managing the internal audit activity; the 2025 version focuses on the engagement.",
        "Confusing objectives with scope. Objectives state what the engagement aims to achieve; scope sets the boundaries — processes, locations, systems and period.",
        "Mixing up the direction of testing. Tracing from records to the physical item tests existence; tracing from the item to the records tests completeness.",
        "Underestimating data analytics. The syllabus names specific analytics types and the steps of the analytics process.",
        "Ignoring supervision and communication. At 10% it is the smallest section, but it still decides points on workpaper review and escalation.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is CIA Part 2 and what is the passing score?",
      answer:
        "The IIA lists Part 2 at 100 questions in 120 minutes. Scores are reported on a scale of 250 to 750, and you need 600 or higher to pass.",
    },
    {
      question: "Is CIA Part 2 still called Practice of Internal Auditing?",
      answer:
        "That was the 2019 name. In the 2025 syllabus, Part 2 is Internal Audit Engagement.",
    },
    {
      question: "Do I have to take the CIA parts in order?",
      answer:
        "The IIA's pages do not require a fixed order, but all three parts must be passed within three years of applying. Active IAP holders are waived from Part 1 and take Parts 2 and 3.",
    },
    {
      question: "How soon can I retake Part 2 if I fail?",
      answer:
        "The IIA's candidate handbook sets a 30-day wait from your last attempt at that part, and limits you to eight attempts within the programme eligibility period.",
    },
    {
      question: "Are CertRamp's CIA Part 2 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against The IIA's published 2025 syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CIA Part 2 Exam Guide 2026: Syllabus, Format & Study Plan",
    description:
      "CIA Part 2 Internal Audit Engagement guide for the 2025 syllabus: 100 questions, 120 minutes, pass mark 600, domain weights and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
