import type { ExamGuide } from "@/config/types";

/**
 * Claude Certified Associate: Foundations (CCAO-F) exam guide. Exam facts come
 * from the verified `exam` record in src/config/certifications.ts (official
 * CCAO-F Exam Guide v1.0 and the Anthropic Partner Academy pages). This file
 * holds CertRamp's preparation advice.
 */
export const claudeCertifiedAssociateCcaoFGuide: ExamGuide = {
  slug: "claude-certified-associate-ccao-f",
  summary:
    "Claude Certified Associate: Foundations (CCAO-F) is Anthropic's entry credential for professionals who use Claude as a core productivity tool, without needing software development or API experience. The closed-book exam has 60 multiple-choice and multiple-response items in 120 minutes, and you pass with a scaled score of 720 on a 100 to 1,000 scale. Output Evaluation and Validation is the largest of its seven domains at 21%.",
  whoFor: [
    "Knowledge workers in operations, marketing, project management, education, communications and similar roles who use Claude every day",
    "People with limited to moderate technical expertise who turn business goals into prompts, choose features and judge outputs",
    "Internal staff who maintain AI-enabled workflows and consultants who support Claude rollouts",
    "Staff of Claude Partner Network organizations (the exams are currently open only to them)",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What CCAO-F actually tests",
      paragraphs: [
        "The exam guide (version 1.0, effective July 2026) lists seven domains: Output Evaluation and Validation (21%), Workflow Integration and Solution Design (16%), Governance, Risk, and Responsible Use (15%), Prompting and Task Execution (14%), Product and Model Selection (12%), Configuration and Knowledge Management (12%) and Troubleshooting and Optimization (10%). The guide gives task statements for each domain and no separate knowledge statements, so the task statements are the full list of what is measured.",
        "The emphasis is on judgement rather than writing prompts alone. More than a third of the weight sits in evaluating outputs and in governance: spotting hallucinations, inconsistencies and bias, checking facts, deciding when a human must review the result, choosing the right output format, and knowing which uses are appropriate, how sensitive data must be handled and what your organisation's AI policy requires.",
        "The product side covers choosing between chat, Projects, research mode and artifacts, telling the Haiku, Sonnet and Opus model families apart and matching them to cost, speed and quality, and managing context limits (when to restart, summarise or persist information). Configuration means setting up Projects with instructions and knowledge, managing uploaded files and connectors such as Google Drive and Gmail, and keeping all of it current.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "CCAO-F has 60 items in 120 minutes, so you have two minutes per item. Items are multiple choice or multiple response, and every item states how many responses to select. The exam is closed book, and the Partner Academy FAQ states that AI assistants and browser translation tools are not permitted. It is offered in English and Japanese and delivered by Pearson VUE, either online proctored (OnVUE) or at a Pearson test center.",
        "Scoring is criterion referenced. You receive a pass or fail result, a scaled score from 100 to 1,000 (720 to pass) and your percent correct per domain, which helps you plan a retake but does not decide the result. Scores appear on screen at the end of the exam.",
        "There are no mandatory prerequisites or required courses, and no software development or API experience is needed. Exams are currently open only to people at Claude Partner Network organizations who register with a partner company email, are at least 18 and show a government-issued ID. The credential is valid for 12 months; on-time renewal is free and consists of reviewing what has changed and completing a non-proctored assessment, while a lapsed credential requires a full retake. After a failed attempt the waiting periods are 14, 30 and 90 days, with at most four attempts per exam in a rolling 12 months. According to the FAQ, the Associate does not count toward Claude Partner Network tier criteria.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Self-assess against the task statements",
          body: "Go through every task statement in the official exam guide and mark it as confident, unsure or new. Weight your study time toward Output Evaluation and Validation, Workflow Integration and Governance, which together make up over half of the exam.",
        },
        {
          title: "Read the official documentation",
          body: "The exam guide points to Anthropic's documentation and help articles on Projects, Artifacts, Memory, Skills and Code Execution. Add Anthropic's prompting best practices and the guidance on reducing hallucinations; both map directly onto Domains 1, 2 and 7.",
        },
        {
          title: "Practise prompting deliberately",
          body: "Take real tasks from your job and rewrite vague prompts with context, audience, constraints and examples. Break a large task into steps and compare the result with a single all-in-one prompt.",
        },
        {
          title: "Build a working Project",
          body: "Create a Project with instructions and knowledge files for a recurring task, use it for a week, then review the outputs for accuracy, consistency and bias. Update the instructions and files based on what went wrong.",
        },
        {
          title: "Practise responsible-use judgement",
          body: "For each of your use cases, decide what data may go into Claude under your organisation's policy, which outputs need human review before use, and when to escalate to a specialist or to the Architect and Developer roles.",
        },
        {
          title: "Practise under time pressure",
          body: "Work through timed question sets at two minutes per item. Many items describe a workplace situation, so read for what the person actually needs before looking at the options.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying only prompting. Prompting and Task Execution is 14% of the exam; evaluating outputs and governance together carry more than twice that weight.",
        "Trusting confident output. Anthropic is explicit that its hallucination-reduction techniques reduce errors but do not eliminate them, so critical facts still need checking.",
        "Treating every task as a job for the most capable model. The exam expects you to match the model to cost, speed and quality, and a fast model is often right for simple, high-volume work.",
        "Letting Project knowledge go stale. Outdated or conflicting files are a common cause of wrong answers, and maintaining configurations is part of Domain 5.",
        "Ignoring organisational policy. Knowing what data you may share and which decisions need a qualified human is tested directly in Domain 6.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on the CCAO-F exam and how long is it?",
      answer:
        "The exam has 60 multiple-choice and multiple-response items and a time limit of 120 minutes. Each multiple-response item tells you how many answers to select.",
    },
    {
      question: "What is the passing score for the Claude Certified Associate exam?",
      answer:
        "You need a scaled score of 720 on a 100 to 1,000 scale. The score report also shows your percent correct per domain, which does not decide pass or fail.",
    },
    {
      question: "Do I need programming experience for CCAO-F?",
      answer:
        "No. The exam has no mandatory prerequisites and requires no software development or API experience. It is aimed at professionals who use Claude as a core productivity tool; building against the API is the subject of the Developer and Architect credentials.",
    },
    {
      question: "Who can take the exam, and how long is the credential valid?",
      answer:
        "Currently only staff of Claude Partner Network organizations, registering with a partner company email, aged 18 or over and with a government-issued ID. The credential is valid for 12 months and can be renewed on time for free through a non-proctored assessment.",
    },
    {
      question: "Are CertRamp's CCAO-F questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Anthropic's published exam guide and official documentation. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CCAO-F Exam Guide 2026: Claude Certified Associate",
    description:
      "Claude Certified Associate: Foundations (CCAO-F) guide: 60 items, 120 minutes, 720 to pass, the seven weighted domains and a six-step study plan.",
  },
  published: "2026-11-11",
  updated: "2026-11-11",
};
