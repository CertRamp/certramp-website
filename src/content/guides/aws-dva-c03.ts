import type { ExamGuide } from "@/config/types";

/**
 * AWS Developer - Associate (DVA-C03) exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts and the aws-dva-c02 tracker entry.
 */
export const awsDvaC03Guide: ExamGuide = {
  slug: "aws-dva-c03",
  summary:
    "DVA-C03 replaces DVA-C02 as the AWS Certified Developer - Associate exam from 1 December 2026. It has 65 questions (50 scored, 15 unscored) in 130 minutes, and you pass with a scaled score of 720. Development with AWS Services is the largest domain at 30%.",
  whoFor: [
    "Developers who build and maintain applications on AWS",
    "Candidates whose exam date is on or after 1 December 2026",
    "Engineers moving from DVA-C02 material to the new version",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "DVA-C03 has 65 questions, 50 scored and 15 unscored, in 130 minutes. Questions are multiple choice or multiple response, and you need a scaled score of 720 out of 1,000. You can test at a Pearson VUE centre or online with a proctor.",
        "DVA-C02 can be taken until 30 November 2026; exams from 1 December 2026 use DVA-C03. Study the version that matches your booked date. There are no formal prerequisites; AWS recommends at least one year of hands-on development experience on AWS.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Development with AWS Services is 30%, Security 26%, and Testing and Deployment and Troubleshooting and Optimization 22% each.",
        "Questions are written from a developer's view: SDKs and APIs, serverless functions, managed data stores, messaging, authentication and authorisation, CI/CD, logging and performance tuning. Expect code-level details such as error handling and retries.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Check your exam date", body: "Exams from 1 December 2026 use DVA-C03. Use DVA-C03 material unless you test before then." },
        { title: "Read the DVA-C03 exam guide", body: "Use the four domains and task statements from AWS as your checklist." },
        { title: "Build a small serverless app", body: "Write functions, store data, add authentication and deploy with a pipeline. It covers most domains at once." },
        { title: "Practise troubleshooting", body: "Read logs and traces, fix permission errors and tune slow functions." },
        { title: "Take timed practice exams", body: "Answer full 65-question practice exams in 130 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying DVA-C02 material for a DVA-C03 exam date.",
        "Learning services at architecture level only, without the developer details.",
        "Underestimating the security domain at 26%.",
      ],
    },
  ],
  faq: [
    { question: "When does DVA-C03 replace DVA-C02?", answer: "From 1 December 2026. The last day to take DVA-C02 is 30 November 2026." },
    { question: "How many questions are on DVA-C03?", answer: "65 questions: 50 scored and 15 unscored." },
    { question: "How long is the exam and what is the passing score?", answer: "130 minutes. You need a scaled score of 720 on a scale of 100 to 1,000." },
    {
      question: "What are the DVA-C03 domains?",
      answer: "Development with AWS Services 30%, Security 26%, Testing and Deployment 22%, Troubleshooting and Optimization 22%.",
    },
    {
      question: "Are CertRamp's DVA-C03 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS DVA-C03 Exam Guide: Developer Associate from Dec 2026",
    description:
      "Prepare for AWS Developer Associate DVA-C03: 65 questions in 130 minutes, 720 to pass, the four domains with weights and what changes from DVA-C02.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
