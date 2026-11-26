import type { ExamGuide } from "@/config/types";

/**
 * AWS Certified AI Practitioner (AIF-C01) exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts and the aws-aif-c01-german tracker entry.
 */
export const awsAifC01Guide: ExamGuide = {
  slug: "aws-aif-c01",
  summary:
    "The AWS Certified AI Practitioner exam (AIF-C01) has 65 questions (50 scored, 15 unscored) in 90 minutes, and you pass with a scaled score of 700. Applications of Foundation Models is the largest domain at 28%. The German and Italian versions were retired after 15 October 2026.",
  whoFor: [
    "Business, product and technical staff who work with AI and generative AI on AWS",
    "Newcomers to AI who want a recognised foundation certificate",
    "Candidates preparing for AWS ML or GenAI associate exams later",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AIF-C01 has 65 questions, 50 scored and 15 unscored, in 90 minutes. Besides multiple choice and multiple response you will see ordering and matching questions. You need 700 out of 1,000 and can test at a Pearson VUE centre or online.",
        "The exam is no longer offered in German or Italian since 15 October 2026; it remains available in English and nine other languages. There are no prerequisites; the target candidate has up to six months of exposure to AI/ML on AWS.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Applications of Foundation Models is 28%, Fundamentals of GenAI 24%, Fundamentals of AI and ML 20%, and Responsible AI and Security, Compliance, and Governance 14% each.",
        "You do not need to build models. Know the core concepts (training, inference, prompts, retrieval-augmented generation, fine-tuning, evaluation), which AWS service fits which AI use case, and the risks and controls around responsible AI.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the AIF-C01 exam guide", body: "Use the five domains in version 1.2 of the exam guide as your checklist." },
        { title: "Learn the vocabulary", body: "Write one-sentence definitions for the key AI, ML and GenAI terms." },
        { title: "Map services to use cases", body: "For each AWS AI service, know the problem it solves." },
        { title: "Practise ordering and matching", body: "These question types need precise knowledge of steps and definitions." },
        { title: "Take timed practice exams", body: "Answer full 65-question practice exams in 90 minutes." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Planning to take the exam in German, which is no longer offered.",
        "Going too deep into model building instead of concepts and use cases.",
        "Skipping responsible AI and governance.",
      ],
    },
  ],
  faq: [
    { question: "How many questions are on AIF-C01?", answer: "65 questions: 50 scored and 15 unscored." },
    { question: "How long is the exam and what is the passing score?", answer: "90 minutes. You need a scaled score of 700 on a scale of 100 to 1,000." },
    { question: "Can I take AIF-C01 in German?", answer: "No. AWS retired the German and Italian versions after 15 October 2026." },
    {
      question: "What are the AIF-C01 domains?",
      answer:
        "Fundamentals of AI and ML 20%, Fundamentals of GenAI 24%, Applications of Foundation Models 28%, Guidelines for Responsible AI 14%, Security, Compliance, and Governance for AI Solutions 14%.",
    },
    {
      question: "Are CertRamp's AIF-C01 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS AI Practitioner AIF-C01 Exam Guide 2026",
    description:
      "Prepare for AWS AI Practitioner (AIF-C01): 65 questions in 90 minutes, 700 to pass, the five domains with weights, question types and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
