import type { ExamGuide } from "@/config/types";

/**
 * AWS Certified Security - Specialty (SCS-C03) exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts and the aws-scs-c03 tracker entry.
 */
export const awsScsC03Guide: ExamGuide = {
  slug: "aws-scs-c03",
  summary:
    "SCS-C03 has been the AWS Certified Security - Specialty exam since 2 December 2025. It has 65 questions (50 scored, 15 unscored) in 170 minutes, and you pass with a scaled score of 750. Identity and Access Management is the largest of its six domains at 20%.",
  whoFor: [
    "Security engineers and architects who secure AWS workloads",
    "Cloud engineers responsible for detection, incident response and data protection on AWS",
    "AWS associate certification holders specialising in security",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "SCS-C03 has 65 questions, 50 scored and 15 unscored, in 170 minutes. Besides multiple choice and multiple response there are ordering and matching questions. You need 750 out of 1,000 and can test at a Pearson VUE centre or online.",
        "English, Japanese and Korean remain available; the Simplified Chinese, Spanish (Latin America) and Portuguese (Brazil) versions are retired after 31 December 2026. There are no formal prerequisites; AWS recommends several years of security experience, including hands-on work securing AWS workloads.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Identity and Access Management is 20%, Infrastructure Security and Data Protection 18% each, Detection 16%, Incident Response 14%, and Security Foundations and Governance makes up the rest.",
        "Questions are detailed scenarios. Know how IAM policies are evaluated across accounts, how to encrypt and manage keys, how to detect and investigate suspicious activity, and how to automate the response.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the SCS-C03 exam guide", body: "Use the six domains and AWS's SCS-C02 vs SCS-C03 comparison as your checklist." },
        { title: "Master policy evaluation", body: "Practise how identity, resource and organisation policies combine to allow or deny a request." },
        { title: "Build detection and response", body: "Enable logging and threat detection in a lab account and automate a response to a finding." },
        { title: "Practise data protection", body: "Encrypt data at rest and in transit, manage keys and control who can use them." },
        { title: "Take timed practice exams", body: "Answer full 65-question practice exams in 170 minutes and aim clearly above 750." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using SCS-C02 material without checking the new domain structure.",
        "Guessing on policy evaluation instead of working through it step by step.",
        "Booking the exam in a language that is being retired.",
      ],
    },
  ],
  faq: [
    { question: "When did SCS-C03 replace SCS-C02?", answer: "SCS-C03 has been in use since 2 December 2025." },
    { question: "How many questions are on SCS-C03?", answer: "65 questions: 50 scored and 15 unscored." },
    { question: "How long is the exam and what is the passing score?", answer: "170 minutes. You need a scaled score of 750 on a scale of 100 to 1,000." },
    {
      question: "Which languages remain available?",
      answer: "English, Japanese and Korean. The Simplified Chinese, Spanish (Latin America) and Portuguese (Brazil) versions are retired after 31 December 2026.",
    },
    {
      question: "Are CertRamp's SCS-C03 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS Security Specialty SCS-C03 Exam Guide 2026",
    description:
      "Prepare for AWS Security Specialty (SCS-C03): 65 questions in 170 minutes, 750 to pass, the six domains with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
