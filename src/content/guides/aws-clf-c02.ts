import type { ExamGuide } from "@/config/types";

/**
 * AWS Certified Cloud Practitioner (CLF-C02) exam guide. Exam facts come from
 * the verified `exam` record in src/config/certifications.ts.
 */
export const awsClfC02Guide: ExamGuide = {
  slug: "aws-clf-c02",
  summary:
    "The AWS Certified Cloud Practitioner exam (CLF-C02) has 65 questions (50 scored, 15 unscored) in 90 minutes, and you pass with a scaled score of 700 out of 1,000. It covers Cloud Concepts (24%), Security and Compliance (30%), Cloud Technology and Services (34%) and Billing, Pricing, and Support (12%).",
  whoFor: [
    "Newcomers to cloud computing and AWS, including non-technical roles",
    "Sales, finance, project and management staff who work with AWS teams",
    "Technical candidates who want an entry point before an Associate exam",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CLF-C02 has 65 questions, 50 scored and 15 unscored, in 90 minutes. Questions are multiple choice (one correct answer) or multiple response (two or more correct answers). You take it at a Pearson VUE test centre or online with a proctor. Note that AWS retires the German and Italian versions after 31 December 2026; after that, plan for English or another offered language.",
        "There are no prerequisites. AWS describes the target candidate as someone with up to six months of exposure to the AWS Cloud, but that is not required.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Cloud Technology and Services is the largest domain at 34%: the main compute, storage, database, networking and analytics services and what each is used for. Security and Compliance follows at 30%, with the shared responsibility model, IAM basics and compliance resources.",
        "Billing, Pricing, and Support is only 12%, but its questions are easy points if you know the pricing models, cost tools and support plans. Cloud Concepts (24%) covers the benefits of the cloud and the Well-Architected Framework.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        {
          title: "Read the CLF-C02 exam guide",
          body: "Use the four domains in the official AWS exam guide as your checklist.",
        },
        {
          title: "Learn services by purpose",
          body: "For each major service, learn one sentence on what it does and when you would use it. You do not need configuration details.",
        },
        {
          title: "Master the shared responsibility model",
          body: "Know exactly what AWS secures and what the customer secures for different service types; it appears in many security questions.",
        },
        {
          title: "Practise with timed exams",
          body: "Answer full 65-question practice exams in 90 minutes and read every explanation.",
        },
        {
          title: "Book with a buffer",
          body: "Book once you score clearly above the pass mark in several practice exams.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Going too deep into configuration details the exam does not ask for.",
        "Mixing up similar services with different purposes.",
        "Skipping billing and support plans because the domain is small.",
        "Misreading multiple-response questions that need more than one answer.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on CLF-C02?",
      answer: "65 questions: 50 scored and 15 unscored.",
    },
    {
      question: "How long is the exam and what is the passing score?",
      answer: "90 minutes. You need a scaled score of 700 on a scale of 100 to 1,000.",
    },
    {
      question: "Is CLF-C02 available in German?",
      answer: "Until 31 December 2026. AWS retires the German and Italian versions after that date; the exam stays available in English and other languages.",
    },
    {
      question: "Do I need technical experience?",
      answer: "No. There are no prerequisites; AWS describes the target candidate as having up to six months of AWS Cloud exposure, which is not required.",
    },
    {
      question: "Are CertRamp's CLF-C02 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS Cloud Practitioner CLF-C02 Exam Guide 2026",
    description:
      "Prepare for AWS Cloud Practitioner (CLF-C02): 65 questions in 90 minutes, 700 to pass, the four domains with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
