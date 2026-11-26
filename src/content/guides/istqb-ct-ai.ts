import type { ExamGuide } from "@/config/types";

/**
 * ISTQB CT-AI v2.0 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts and the istqb-ct-ai-v1-0 tracker entry.
 */
export const istqbCtAiGuide: ExamGuide = {
  slug: "istqb-ct-ai",
  summary:
    "The ISTQB Certified Tester AI Testing (CT-AI) v2.0 exam has 40 multiple-choice questions in 60 minutes (plus 25% in a non-native language), and you pass with 29 of 44 points (65%). Version 2.0 was released in April 2026 and focuses on testing AI-based systems, including generative AI and large language models.",
  whoFor: [
    "Testers who work on systems that use machine learning or generative AI",
    "CTFL holders who want an AI testing specialisation",
    "QA leads introducing test approaches for AI features",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CT-AI v2.0 has 40 multiple-choice questions worth 44 points, in 60 minutes (plus 25% in a non-native language). You need 29 points (65%). You must hold the ISTQB Foundation Level (CTFL).",
        "CT-AI v1.0 exams, including retakes, end on 21 April 2027 in English and 21 October 2027 in other languages. There is no bridging exam, so prepare for the version you will book.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The seven chapters cover an introduction to AI, quality characteristics for AI-based systems, machine learning, testing AI-based systems, input data testing, model testing and ML development testing.",
        "Compared with v1.0, the AI-for-testing content was removed and testing of generative AI and large language models was added. Know the quality risks specific to AI, such as bias, robustness and explainability, and how to test data and models.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Download syllabus v2.0", body: "Use it as your checklist and avoid v1.0 material." },
        { title: "Learn the ML basics", body: "Training, validation, overfitting and common metrics come up across the chapters." },
        { title: "Study AI quality risks", body: "Bias, robustness, transparency and explainability: know how each is tested." },
        { title: "Practise data and model testing", body: "Work through examples of testing input data and evaluating model behaviour." },
        { title: "Take timed practice exams", body: "Answer full 40-question practice exams in 60 minutes and aim clearly above 29 points." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using CT-AI v1.0 material for the v2.0 exam.",
        "Skipping the generative AI and LLM content added in v2.0.",
        "Studying ML theory too deeply instead of how to test AI systems.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does CT-AI v2.0 have?", answer: "40 multiple-choice questions worth 44 points." },
    { question: "How long is the exam and what is the passing score?", answer: "60 minutes (plus 25% in a non-native language). You need 29 of 44 points (65%)." },
    { question: "Until when can I take CT-AI v1.0?", answer: "Until 21 April 2027 in English and 21 October 2027 in other languages, including retakes." },
    { question: "Do I need CTFL first?", answer: "Yes. The ISTQB Foundation Level (CTFL) is required." },
    {
      question: "Are CertRamp's CT-AI questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published ISTQB syllabus. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "ISTQB CT-AI v2.0 Exam Guide 2026: Syllabus, Format & Plan",
    description:
      "Prepare for ISTQB AI Testing (CT-AI v2.0): 40 questions in 60 minutes, 29 of 44 points to pass, what changed from v1.0 and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
