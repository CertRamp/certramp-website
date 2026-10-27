import type { ExamGuide } from "@/config/types";

/**
 * CIA Part 1 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ciaPart1Guide: ExamGuide = {
  slug: "cia-part-1",
  summary:
    "CIA Part 1 (Internal Audit Fundamentals) tests the foundations of internal auditing under The IIA's Global Internal Audit Standards: purpose and mandate, ethics and professionalism, governance, risk management and control, and fraud risks. The IIA lists 125 questions in 150 minutes, and you need a scaled score of 600 or higher (on a 250–750 scale) to pass.",
  whoFor: [
    "Candidates starting the three-part CIA exam on the 2025 syllabus",
    "Internal auditors who want a firm grounding in the Global Internal Audit Standards",
    "Risk, compliance and control professionals moving into internal audit",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What CIA Part 1 actually tests",
      paragraphs: [
        "The 2025 syllabus for Part 1 has four sections: Foundations of Internal Auditing (35%), Governance, Risk Management, and Control (30%), Ethics and Professionalism (20%) and Fraud Risks (15%). Together they cover why internal auditing exists, how it is positioned in the organisation and how an individual auditor is expected to behave.",
        "Expect questions that ask you to apply concepts rather than recite them: is this an assurance or an advisory service, is an auditor's objectivity impaired, which type of control is this, what is the residual risk, and what should internal audit do when it finds signs of fraud.",
      ],
    },
    {
      id: "2025-syllabus",
      heading: "How the 2025 syllabus is structured",
      paragraphs: [
        "The IIA revised the CIA exam to align it more closely with the Global Internal Audit Standards, which became effective on 9 January 2025. Part 1 is now called Internal Audit Fundamentals, replacing the 2019 title Essentials of Internal Auditing, and the old separate sections on independence and objectivity, proficiency and due care, and quality assurance have been reorganised.",
        "Ethics and Professionalism now mirrors the five principles of the Standards' ethics domain: integrity, objectivity, competency, due professional care and confidentiality. Some languages remained on the 2019 syllabus for a transition period, so check on theiia.org which syllabus applies to the language you test in.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Download the official syllabus",
          body: "Get the Part 1 Expanded Test Specifications from theiia.org and rate yourself on every topic (A.1 to D.5). Spend time in proportion to the section weights.",
        },
        {
          title: "Read the Global Internal Audit Standards",
          body: "Work through the Standards themselves, especially the Purpose of Internal Auditing, the ethics principles and the standards on governing the internal audit function. Part 1 language follows the Standards closely.",
        },
        {
          title: "Learn the vocabulary precisely",
          body: "Mandate, charter, assurance, advisory, objectivity, independence, inherent and residual risk, preventive and detective controls: many questions turn on the exact meaning of one term.",
        },
        {
          title: "Practise judgement questions",
          body: "For objectivity and independence, train yourself to spot the impairment, then choose the response the Standards require — disclosure, reassignment or third-party assurance.",
        },
        {
          title: "Take timed practice exams",
          body: "Practise sets under exam conditions (125 questions in 150 minutes is about 72 seconds per question) and read every explanation, including for questions you answered correctly.",
        },
        {
          title: "Book when your scores are stable",
          body: "Schedule the exam at a Pearson VUE test centre once you pass practice exams with a margin. Remember that all three parts must be passed within the CIA programme's three-year window.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying from 2019-syllabus material. Older books are organised around the previous International Standards and section titles; check that your material follows the 2024 Global Internal Audit Standards.",
        "Confusing independence and objectivity. Independence relates to the internal audit function's position in the organisation; objectivity is an individual auditor's unbiased mental attitude.",
        "Mixing up assurance and advisory services. In advisory work the nature and scope are agreed with the requester and management keeps responsibility for decisions.",
        "Treating fraud as an investigation exercise only. The syllabus also covers fraud risk assessment, preventive and detective controls and when fraud needs special consideration in an engagement.",
        "Memorising lists without applying them. Most questions describe a situation and ask what the auditor or chief audit executive should do.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is CIA Part 1 and what is the passing score?",
      answer:
        "The IIA lists Part 1 at 125 questions in 150 minutes. Scores are reported on a scale of 250 to 750, and you need 600 or higher to pass.",
    },
    {
      question: "Is CIA Part 1 still called Essentials of Internal Auditing?",
      answer:
        "That was the name under the 2019 syllabus. In the 2025 syllabus, Part 1 is Internal Audit Fundamentals, aligned with the Global Internal Audit Standards.",
    },
    {
      question: "Can I skip CIA Part 1?",
      answer:
        "The IIA waives Part 1 for active holders of its Internal Audit Practitioner (IAP) designation. They then need to pass Parts 2 and 3 within three years of applying.",
    },
    {
      question: "How long do I have to pass all three parts?",
      answer:
        "Candidates must pass all three parts within three years of applying to the CIA programme. After a failed attempt you must wait 30 days before retaking that part.",
    },
    {
      question: "Are CertRamp's CIA Part 1 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against The IIA's published 2025 syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CIA Part 1 Exam Guide 2026: Syllabus, Format & Study Plan",
    description:
      "CIA Part 1 Internal Audit Fundamentals guide for the 2025 syllabus: 125 questions, 150 minutes, pass mark 600, domain weights and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
