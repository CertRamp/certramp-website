import type { ExamGuide } from "@/config/types";

/**
 * PMI-RMP exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const pmiRmpGuide: ExamGuide = {
  slug: "pmi-rmp",
  summary:
    "The PMI Risk Management Professional (PMI-RMP) exam has 115 questions in 150 minutes, including multiple-select questions, with predictive, agile and hybrid approaches across all domains. Risk Identification and Risk Analysis are the largest domains at 23% each.",
  whoFor: [
    "Project risk managers and risk analysts",
    "Project and programme managers who own risk on large projects",
    "PMP holders who want a risk specialisation",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 115 questions in 150 minutes, including multiple-select questions. You can test at a Pearson VUE centre or online, in English, Arabic or Simplified Chinese. The current exam was released in April 2022.",
        "Eligibility depends on education: a secondary diploma with 36 months of project risk experience in the last 5 years and 40 hours of risk education; a bachelor's degree with 24 months and 30 hours; or a degree from a GAC-accredited programme with 12 months and 30 hours.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Risk Identification and Risk Analysis are 23% each, Risk Strategy and Planning 22%, Monitor and Close Risk 19% and Risk Response 13%.",
        "Questions are situational and follow the risk process. The best answer usually happens in the right order (plan, identify, analyse, respond, monitor), involves the risk owner and fits the delivery approach in the scenario.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Confirm eligibility", body: "Check your risk experience and education hours against PMI's three options." },
        { title: "Read the exam content outline", body: "Use the five domains and their tasks as your checklist." },
        { title: "Learn qualitative and quantitative analysis", body: "Know when to use each technique and how to read their results." },
        { title: "Practise risk in agile and hybrid projects", body: "Risk work looks different in iterative delivery; expect scenarios from all approaches." },
        { title: "Take full-length practice exams", body: "Answer 115 questions in 150 minutes and review the reasoning for each option." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Jumping to a risk response before identification and analysis are done.",
        "Studying only predictive risk management.",
        "Misreading multiple-select questions that need every correct option.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does PMI-RMP have?", answer: "115 questions in 150 minutes." },
    {
      question: "What are the PMI-RMP domains?",
      answer: "Risk Strategy and Planning 22%, Risk Identification 23%, Risk Analysis 23%, Risk Response 13%, Monitor and Close Risk 19%.",
    },
    {
      question: "What do I need to apply?",
      answer:
        "One of: a secondary diploma, 36 months of project risk experience in the last 5 years and 40 hours of risk education; a bachelor's degree, 24 months and 30 hours; or a GAC-accredited degree, 12 months and 30 hours.",
    },
    { question: "Can I take PMI-RMP online?", answer: "Yes, online proctored or at a Pearson VUE test centre." },
    {
      question: "Are CertRamp's PMI-RMP questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published PMI exam content outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "PMI-RMP Exam Guide 2026: Domains, Eligibility & Study Plan",
    description:
      "Prepare for PMI-RMP: 115 questions in 150 minutes, the five risk domains with weights, eligibility options and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
