import type { ExamGuide } from "@/config/types";

/**
 * TOGAF Enterprise Architecture Part 1 (OGEA-101) exam guide. Exam facts come
 * from the verified `exam` record in src/config/certifications.ts.
 */
export const togaf10FoundationGuide: ExamGuide = {
  slug: "togaf-10-foundation-ogea-101",
  summary:
    "The TOGAF Enterprise Architecture Part 1 exam (OGEA-101) for the TOGAF Standard, 10th Edition has 40 multiple-choice questions in 60 minutes. It is closed book, and you pass with 60% (24 of 40). The Introduction to the ADM section alone accounts for 14 questions.",
  whoFor: [
    "Enterprise, solution and business architects starting with TOGAF",
    "IT managers and consultants who work with architecture teams",
    "Candidates preparing for the Part 2 (Practitioner) exam",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "OGEA-101 has 40 multiple-choice questions in 60 minutes; non-native English speakers may get extra time. It is supervised and closed book, and you need 24 correct answers (60%). You can take it at a test centre or online with OnVUE proctoring. There are no prerequisites.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The question count per section is published: Concepts 8, Introduction to the ADM 14, ADM Techniques 6, Applying the ADM 4, Architecture Governance 3 and Architecture Content 5. The Architecture Development Method is the heart of the exam.",
        "Foundation questions test knowledge and understanding of TOGAF's terms. Learn the ADM phases with their objectives, inputs and outputs, and the exact definitions of terms such as architecture building block, architecture repository and enterprise continuum.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Get the TOGAF Standard, 10th Edition", body: "Make sure your material is for the 10th Edition, not 9.2." },
        { title: "Learn the ADM cycle", body: "For each phase from Preliminary to H, learn its purpose and main outputs. This covers the largest section." },
        { title: "Build a glossary", body: "Write your own definitions of the key terms and check them against the standard." },
        { title: "Practise closed book", body: "Answer practice questions without notes, because the exam is closed book." },
        { title: "Take timed practice exams", body: "Answer full 40-question practice exams in 60 minutes and aim clearly above 24 correct." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying TOGAF 9.2 material for the 10th Edition exam.",
        "Answering from company practice instead of TOGAF's definitions.",
        "Mixing up the objectives and outputs of neighbouring ADM phases.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does OGEA-101 have?", answer: "40 multiple-choice questions." },
    { question: "How long is the exam and what is the passing score?", answer: "60 minutes. You need 60%, which is 24 of 40 questions." },
    { question: "Is the TOGAF Foundation exam open book?", answer: "No. OGEA-101 is supervised and closed book." },
    { question: "Are there prerequisites?", answer: "No." },
    {
      question: "Are CertRamp's TOGAF questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published TOGAF Standard. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "TOGAF 10 Foundation (OGEA-101) Exam Guide 2026",
    description:
      "Prepare for TOGAF Enterprise Architecture Part 1 (OGEA-101): 40 questions in 60 minutes, 60% to pass, closed book, questions per section and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
