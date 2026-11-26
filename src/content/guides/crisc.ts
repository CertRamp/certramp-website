import type { ExamGuide } from "@/config/types";

/**
 * ISACA CRISC exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const criscGuide: ExamGuide = {
  slug: "crisc",
  summary:
    "The CRISC exam has 150 questions across four domains of the outline in force since 3 November 2025. Risk Response and Reporting is the largest domain at 32%. Anyone can sit the exam; certification requires 3 years of relevant work experience verified by a supervisor or manager.",
  whoFor: [
    "IT risk managers and risk analysts",
    "Control, compliance and audit professionals who work on IT risk",
    "Security and IT managers responsible for risk responses and reporting",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CRISC is a computer-based exam with 150 questions, taken at an authorised PSI test centre or remotely with a proctor.",
        "There are no prerequisites to sit the exam. To become certified you need at least 3 years of CRISC work experience across at least two of the four domains, gained in the 10 years before you apply and verified by a supervisor or manager. You must apply within 5 years of passing.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Risk Response and Reporting is the largest domain at 32%, followed by Governance at 26%, Risk Assessment at 22% and Technology and Security at 20%.",
        "CRISC questions follow the risk lifecycle. The best answer usually identifies and assesses risk before treating it, involves the risk owner and ties the response to the organisation's risk appetite. Answers that jump straight to a control without analysis are usually wrong.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the CRISC exam content outline",
          body: "Use ISACA's outline in force since 3 November 2025 as your checklist.",
        },
        {
          title: "Learn the risk vocabulary exactly",
          body: "Inherent and residual risk, risk appetite and tolerance, risk owner and control owner, key risk indicators and key control indicators: many questions turn on these differences.",
        },
        {
          title: "Follow the lifecycle",
          body: "Practise placing each scenario in the right phase: identification, assessment, response, monitoring and reporting.",
        },
        {
          title: "Weight your time by domain",
          body: "Spend the most time on Risk Response and Reporting, but do not neglect technology and security topics.",
        },
        {
          title: "Take timed practice exams",
          body: "Answer full 150-question practice exams and review why the best answer comes before the others.",
        },
        {
          title: "Plan your certification application",
          body: "Check your experience against the 3-year requirement and arrange verification by a supervisor or manager.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Choosing a control before the risk has been assessed.",
        "Confusing the risk owner with the control owner.",
        "Studying from an older outline.",
        "Treating risk as purely technical instead of a business decision.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions does the CRISC exam have?",
      answer: "150 questions.",
    },
    {
      question: "What are the CRISC domains and weights?",
      answer: "Governance 26%, Risk Assessment 22%, Risk Response and Reporting 32% and Technology and Security 20%.",
    },
    {
      question: "Which outline is current?",
      answer: "The CRISC exam content outline in force since 3 November 2025.",
    },
    {
      question: "What experience do I need for CRISC?",
      answer:
        "None to sit the exam. For certification: at least 3 years of CRISC work experience across at least two domains, gained in the 10 years before you apply and verified by a supervisor or manager.",
    },
    {
      question: "Are CertRamp's CRISC questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISACA exam content outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CRISC Exam Guide 2026: Domains, Weights & Study Plan",
    description:
      "Prepare for the ISACA CRISC exam: 150 questions, the four domains of the November 2025 outline with weights, experience rules and a six-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
