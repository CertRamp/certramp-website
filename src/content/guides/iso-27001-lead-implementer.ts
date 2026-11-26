import type { ExamGuide } from "@/config/types";

/**
 * PECB ISO/IEC 27001 Lead Implementer exam guide. Exam facts come from the verified
 * `exam` record in src/config/certifications.ts.
 */
export const iso27001LeadImplementerGuide: ExamGuide = {
  slug: "iso-27001-lead-implementer",
  summary:
    "The PECB Certified ISO/IEC 27001 Lead Implementer exam has 80 multiple-choice questions in 3 hours. It is open book and you pass with 70%. Planning an ISMS implementation is the largest domain at 22.5%. The full Lead Implementer credential also requires 5 years of professional experience.",
  whoFor: [
    "Information security managers who build or run an ISMS",
    "Consultants who implement ISO/IEC 27001 for clients",
    "Compliance and IT professionals preparing their organisation for certification",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam has 80 multiple-choice questions with three options each, both standalone and scenario-based (five questions per scenario), in 3 hours. It is open book: a hard copy of ISO/IEC 27001, the course materials and your notes are allowed. You need 70%. You take it online via the PECB Exams application or on paper with a PECB-approved invigilator.",
        "Anyone can take the exam. The Lead Implementer credential requires 5 years of professional experience (2 in information security management) and 300 hours of ISMS project work; with less experience you can hold the Provisional Implementer or Implementer credential.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Planning an ISMS implementation is 22.5%, fundamental principles and concepts 18.75%, implementation 17.5%, ISMS requirements 15% and monitoring and measurement 12.5%, with the rest on continual improvement and certification preparation.",
        "Questions follow the implementation journey based on ISO/IEC 27001:2022: scope, context, risk assessment and treatment, Statement of Applicability, controls, documentation, internal audit and management review.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Get ISO/IEC 27001:2022", body: "Work from the 2022 edition and know its clause structure, since you may bring it into the exam." },
        { title: "Follow the implementation steps", body: "Map each step from scoping to certification to the clauses of the standard." },
        { title: "Practise risk assessment and treatment", body: "Work through examples up to the Statement of Applicability." },
        { title: "Practise scenarios", body: "Answer sets of five questions per scenario, as in the real exam." },
        { title: "Take timed practice exams", body: "Answer full 80-question practice exams in 3 hours and aim clearly above 70%." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Relying on the open book instead of knowing the standard well.",
        "Using material based on ISO/IEC 27001:2013.",
        "Confusing the implementer's view with the auditor's view.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does the exam have?", answer: "80 multiple-choice questions with three options each." },
    { question: "How long is the exam and what is the passing score?", answer: "3 hours. You need 70%." },
    { question: "Is the exam open book?", answer: "Yes. A hard copy of ISO/IEC 27001, the course materials and personal notes are allowed." },
    {
      question: "What experience do I need?",
      answer:
        "None to take the exam. The Lead Implementer credential requires 5 years of professional experience (2 in information security management) and 300 hours of ISMS project activity.",
    },
    {
      question: "Are CertRamp's questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published PECB material. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISO 27001 Lead Implementer Exam Guide 2026 (PECB)",
    description:
      "Prepare for PECB ISO/IEC 27001 Lead Implementer: 80 questions in 3 hours, open book, 70% to pass, domains with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
