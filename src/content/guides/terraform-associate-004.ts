import type { ExamGuide } from "@/config/types";

/**
 * HashiCorp Terraform Associate (004) exam guide. Exam facts come from the
 * verified `exam` record in src/config/certifications.ts.
 */
export const terraformAssociate004Guide: ExamGuide = {
  slug: "terraform-associate-004",
  summary:
    "The HashiCorp Certified: Terraform Associate (004) exam is a 1-hour, online proctored, multiple-choice exam. It tests Terraform 1.12 and includes HCP Terraform content, across eight objectives from IaC basics to state management and modules. There are no required prerequisites.",
  whoFor: [
    "Cloud, DevOps and platform engineers who manage infrastructure as code",
    "Developers and administrators starting with Terraform",
    "Teams adopting HCP Terraform",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "The exam lasts 1 hour, is multiple choice and is taken online with a proctor, in English. Version 004 tests Terraform 1.12 and includes HCP Terraform.",
        "No prerequisites are required. HashiCorp recommends basic terminal skills, an understanding of on-premises and cloud architecture, and either professional experience or practice in your own demo environment.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "The eight objectives cover IaC concepts, Terraform fundamentals, the core workflow, configuration, modules, state management, maintaining infrastructure and HCP Terraform. HashiCorp publishes no weights.",
        "Know the core workflow commands and what each does to state, how variables, outputs, locals and data sources work, how modules are sourced and versioned, and how remote state and locking behave.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the 004 objectives", body: "Use HashiCorp's Terraform Associate (004) objectives as your checklist." },
        { title: "Install Terraform 1.12", body: "Practise on the version the exam tests so commands and behaviour match." },
        { title: "Build and change real infrastructure", body: "Write a configuration, apply it, change it, import a resource and destroy it, watching how state changes each time." },
        { title: "Try HCP Terraform", body: "Create a free organisation, connect a workspace and run plans remotely." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 1 hour and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using material for the older 003 exam, which does not match 004.",
        "Learning commands without understanding their effect on state.",
        "Skipping HCP Terraform, which is now part of the objectives.",
      ],
    },
  ],
  faq: [
    { question: "How long is the Terraform Associate (004) exam?", answer: "1 hour." },
    { question: "Which Terraform version does 004 test?", answer: "Terraform 1.12, including HCP Terraform content." },
    { question: "Is the exam online?", answer: "Yes. It is an online proctored, multiple-choice exam in English." },
    { question: "Are there prerequisites?", answer: "None are required. HashiCorp recommends basic terminal skills and practical experience." },
    {
      question: "Are CertRamp's Terraform questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published HashiCorp objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "Terraform Associate 004 Exam Guide 2026: Objectives & Plan",
    description:
      "Prepare for HashiCorp Terraform Associate (004): 1-hour online exam on Terraform 1.12 and HCP Terraform, the eight objectives and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
