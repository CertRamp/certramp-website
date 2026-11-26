import type { ExamGuide } from "@/config/types";

/**
 * AWS Solutions Architect - Associate (SAA-C03) exam guide. Exam facts come from
 * the verified `exam` record in src/config/certifications.ts.
 */
export const awsSaaC03Guide: ExamGuide = {
  slug: "aws-saa-c03",
  summary:
    "The AWS Certified Solutions Architect - Associate exam (SAA-C03) has 65 questions (50 scored, 15 unscored) in 130 minutes, and you pass with a scaled score of 720 out of 1,000. It covers four domains: secure (30%), resilient (26%), high-performing (24%) and cost-optimized (20%) architectures.",
  whoFor: [
    "Cloud engineers and architects who design solutions on AWS",
    "Developers and administrators who want to prove architecture skills beyond one service",
    "Candidates moving on from AWS Cloud Practitioner",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "SAA-C03 has 65 questions, of which 50 count toward your score and 15 are unscored. You have 130 minutes. Questions are multiple choice (one correct answer out of four) or multiple response (two or more correct answers out of five or more options). You can take it at a Pearson VUE test centre or online with a proctor.",
        "Scoring is compensatory: you do not need to pass each domain, only reach a scaled score of 720 overall. There are no formal prerequisites; AWS recommends at least one year of hands-on experience designing cloud solutions.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Security is the largest domain at 30%: IAM policies and roles, secure access across accounts, encryption and data protection controls. Resilient architectures (26%) follow, with loosely coupled designs, high availability and fault tolerance.",
        "Most questions are scenarios with several technically valid answers. The keyword decides: lowest cost, least operational overhead, highest availability or best performance. Practise spotting that requirement first and then eliminating the options that do not meet it.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the SAA-C03 exam guide",
          body: "Download the official exam guide from AWS and use its four domains and task statements as your checklist.",
        },
        {
          title: "Learn the core services by use case",
          body: "Group services by what they solve: compute, storage, databases, networking, messaging and security. For each, know when it is the right choice and when it is not.",
        },
        {
          title: "Build small architectures",
          body: "Hands-on practice in a free-tier account makes VPCs, load balancing, auto scaling and storage classes much easier to reason about in scenarios.",
        },
        {
          title: "Practise the requirement keywords",
          body: "For each practice question, underline the constraint (cost, availability, performance, operational effort) before reading the options.",
        },
        {
          title: "Take timed practice exams",
          body: "Answer full 65-question practice exams in 130 minutes and read the explanation for every option, including the wrong ones.",
        },
        {
          title: "Book with a buffer",
          body: "Book once you score clearly above the pass mark in several practice exams, so that a few unfamiliar scenarios on the day do not decide the result.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Learning services in isolation instead of comparing them for the same use case.",
        "Ignoring the cost-optimized domain, which is still a fifth of the exam.",
        "Choosing the most powerful solution when the question asks for the cheapest or simplest.",
        "Skipping multiple-response questions in practice; they need every correct option.",
        "Relying only on video courses without any hands-on work.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on SAA-C03?",
      answer: "65 questions: 50 scored and 15 unscored. You cannot tell which ones are unscored.",
    },
    {
      question: "How long is the exam and what is the passing score?",
      answer: "130 minutes. You need a scaled score of 720 on a scale of 100 to 1,000.",
    },
    {
      question: "Which domain is the largest?",
      answer: "Design Secure Architectures with 30%, followed by Resilient (26%), High-Performing (24%) and Cost-Optimized Architectures (20%).",
    },
    {
      question: "Are there prerequisites?",
      answer: "No formal prerequisites. AWS recommends at least one year of hands-on experience designing cloud solutions on AWS.",
    },
    {
      question: "Are CertRamp's SAA-C03 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published AWS exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AWS SAA-C03 Exam Guide 2026: Domains, Passing Score & Plan",
    description:
      "Prepare for AWS Solutions Architect Associate (SAA-C03): 65 questions in 130 minutes, 720 to pass, the four domains with weights and a six-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
