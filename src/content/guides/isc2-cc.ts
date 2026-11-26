import type { ExamGuide } from "@/config/types";

/**
 * ISC2 Certified in Cybersecurity (CC) exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts.
 */
export const isc2CcGuide: ExamGuide = {
  slug: "isc2-cc",
  summary:
    "ISC2 Certified in Cybersecurity (CC) is an entry-level exam with 100 to 125 adaptive questions in 2 hours, following the outline effective 1 September 2026. You pass with 700 out of 1,000, and no work experience is required. The exam is delivered in person only at ISC2-authorised Pearson test centres.",
  whoFor: [
    "Newcomers to cybersecurity, including career changers and students",
    "IT staff who want a first, recognised security credential",
    "Candidates planning to move on to CISSP or other ISC2 certifications",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CC uses computerized adaptive testing: between 100 and 125 questions in 2 hours, with multiple-choice and advanced item types. You need 700 out of 1,000. The exam is available in English, Simplified Chinese, German, Japanese and Spanish, in person only at Pearson test centres.",
        "No work experience is required, which makes CC one of the most accessible security certifications.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The five domains are fairly balanced: Security Principles 24%, Networking and Cloud Security Concepts 21.3%, IAM Concepts 20%, Security Governance 17.3% and Security Operations and Incident Response 17.3%.",
        "The outline changed on 1 September 2026. Make sure your material covers the current version, including cloud security concepts.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the current exam outline", body: "Use the CC outline effective 1 September 2026 as your checklist." },
        { title: "Learn the core principles", body: "Confidentiality, integrity, availability, risk, controls and governance terms appear across the exam." },
        { title: "Cover networking basics", body: "Ports, protocols, network devices and basic cloud models are about a fifth of the exam." },
        { title: "Practise one-pass answering", body: "On an adaptive exam you cannot return to questions; practise committing to an answer." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 2 hours and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using material for the outline before September 2026.",
        "Planning an online exam: CC is in person only.",
        "Skipping networking because it seems too technical for an entry exam.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does the CC exam have?", answer: "Between 100 and 125. It is a computerized adaptive test." },
    { question: "How long is the exam and what is the passing score?", answer: "2 hours. You need 700 out of 1,000." },
    { question: "Do I need work experience for CC?", answer: "No work experience is required." },
    { question: "Can I take CC online?", answer: "No. It is delivered in person only at ISC2-authorised Pearson test centres." },
    { question: "Is CC available in German?", answer: "Yes. It is offered in English, Simplified Chinese, German, Japanese and Spanish." },
    {
      question: "Are CertRamp's CC questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISC2 outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISC2 CC Exam Guide 2026: New Outline, Domains & Study Plan",
    description:
      "Prepare for ISC2 Certified in Cybersecurity: 100–125 adaptive questions in 2 hours, 700 to pass, the September 2026 domains with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
