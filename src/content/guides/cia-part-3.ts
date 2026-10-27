import type { ExamGuide } from "@/config/types";

/**
 * CIA Part 3 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ciaPart3Guide: ExamGuide = {
  slug: "cia-part-3",
  summary:
    "CIA Part 3 (Internal Audit Function) tests how the internal audit function is run: operations and resources, the risk-based audit plan, quality assurance, and communicating engagement results and monitoring action plans. The IIA lists 100 questions in 120 minutes, and you need a scaled score of 600 or higher (on a 250–750 scale) to pass.",
  whoFor: [
    "CIA candidates completing the third part of the 2025 syllabus",
    "Audit managers and chief audit executives responsible for planning, quality and reporting",
    "Senior auditors who want to understand the function-level requirements of the Global Internal Audit Standards",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What CIA Part 3 actually tests",
      paragraphs: [
        "The 2025 syllabus for Part 3 has four sections: Engagement Results and Monitoring (45%), Internal Audit Operations (25%), Internal Audit Plan (15%) and Quality of the Internal Audit Function (15%).",
        "Questions are written largely from the chief audit executive's point of view: how to build the audit plan, coordinate with other assurance providers, measure performance, run the quality assurance and improvement programme, communicate results, assess residual risk, handle risk acceptance and follow up on action plans.",
      ],
    },
    {
      id: "2025-syllabus",
      heading: "How the 2025 syllabus is structured",
      paragraphs: [
        "Part 3 is now called Internal Audit Function. Under the 2019 syllabus, Part 3 was Business Knowledge for Internal Auditing and covered business acumen, information security, IT and financial management. The 2025 version replaces that with the function-level content of the Global Internal Audit Standards.",
        "If you studied for the old Part 3, expect very different material. The syllabus now covers topics such as the applicability of Topical Requirements, disclosure of nonconformance with the Standards, residual risk ratings and the sequence for communicating risk acceptance.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Download the official syllabus",
          body: "Get the Part 3 Expanded Test Specifications and rate yourself on topics A.1 to D.8. Engagement Results and Monitoring alone is 45%.",
        },
        {
          title: "Study the function-level Standards",
          body: "Read the Standards' domains on governing and managing the internal audit function, especially the principles on planning strategically, managing resources, communicating effectively and enhancing quality.",
        },
        {
          title: "Learn the communication sequence",
          body: "Know the path from draft findings through closing discussions to the final communication, and the escalation path for risk acceptance and unimplemented action plans.",
        },
        {
          title: "Know the quality requirements",
          body: "Be clear on ongoing monitoring, periodic self-assessments and external quality assessments, including how often external assessments are required and who may perform them.",
        },
        {
          title: "Take timed practice exams",
          body: "Practise sets under exam conditions (100 questions in 120 minutes) and read every explanation, including for questions you answered correctly.",
        },
        {
          title: "Book when your scores are stable",
          body: "Schedule the exam at a Pearson VUE test centre once you pass practice exams with a margin, within the three-year CIA programme window.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying business, IT and finance topics from the 2019 Part 3. They are not the focus of the 2025 Part 3 syllabus.",
        "Skipping escalation steps. Risk acceptance and unimplemented action plans go to senior management first and to the board only if the matter is not resolved.",
        "Confusing internal and external assessments. Both belong to the quality programme, but external assessments have their own frequency and assessor requirements.",
        "Treating follow-up as optional. Monitoring and confirming the implementation of action plans is part of the syllabus, not an afterthought.",
        "Thinking only as a staff auditor. Many questions ask what the chief audit executive should do.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is CIA Part 3 and what is the passing score?",
      answer:
        "The IIA lists Part 3 at 100 questions in 120 minutes. Scores are reported on a scale of 250 to 750, and you need 600 or higher to pass.",
    },
    {
      question: "Is CIA Part 3 still Business Knowledge for Internal Auditing?",
      answer:
        "No. That was the 2019 syllabus. In the 2025 syllabus, Part 3 is Internal Audit Function and focuses on running the internal audit function under the Global Internal Audit Standards.",
    },
    {
      question: "How often must an external quality assessment take place?",
      answer:
        "The Global Internal Audit Standards require an external quality assessment at least once every five years, and at least one assessor must hold an active CIA designation.",
    },
    {
      question: "Where do I take the CIA exam?",
      answer:
        "The IIA delivers the CIA exam as computer-based testing at Pearson VUE test centres around the world.",
    },
    {
      question: "Are CertRamp's CIA Part 3 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against The IIA's published 2025 syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CIA Part 3 Exam Guide 2026: Syllabus, Format & Study Plan",
    description:
      "CIA Part 3 Internal Audit Function guide for the 2025 syllabus: 100 questions, 120 minutes, pass mark 600, domain weights and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
