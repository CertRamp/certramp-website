import type { ExamGuide } from "@/config/types";

/**
 * CNCF / Linux Foundation CKAD exam guide. Exam facts come from the verified
 * `exam` record in src/config/certifications.ts.
 */
export const ckadGuide: ExamGuide = {
  slug: "ckad",
  summary:
    "The Certified Kubernetes Application Developer (CKAD) exam is a 2-hour, online, proctored, performance-based exam with 15 to 20 command-line tasks (curriculum Kubernetes v1.37). You pass with 66%. Application Environment, Configuration and Security is the largest domain at 25%.",
  whoFor: [
    "Developers who build and deploy applications on Kubernetes",
    "DevOps engineers who package and run workloads",
    "Candidates preparing for CKA who want an application-focused start",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CKAD has no multiple-choice questions. You solve 15 to 20 tasks on the command line within 2 hours, in an online proctored session on the PSI Bridge platform with the PSI Secure Browser. You need 66% to pass, and there are no prerequisites.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Application Environment, Configuration and Security is 25%: ConfigMaps, Secrets, security contexts, service accounts and resource limits. Application Design and Build, Application Deployment, and Services and Networking are 20% each, and Application Observability and Maintenance is 15%.",
        "Speed matters. Generate manifests with imperative kubectl commands and dry runs instead of writing YAML from scratch, and always check you are in the right namespace.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the CKAD curriculum", body: "Use the curriculum for Kubernetes v1.37 and the Linux Foundation's CKA/CKAD exam tips as your checklist." },
        { title: "Get fast with kubectl", body: "Practise creating pods, deployments, jobs and services imperatively, then editing the generated YAML." },
        { title: "Practise configuration and security", body: "Mount ConfigMaps and Secrets, set security contexts and resource limits, and use service accounts." },
        { title: "Debug running applications", body: "Use logs, events, probes and exec to find and fix failing workloads." },
        { title: "Take timed practice sessions", body: "Solve full task sets in 2 hours and practise skipping hard tasks and coming back to them." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Writing YAML by hand when kubectl can generate it.",
        "Working in the wrong namespace or context.",
        "Practising on a different Kubernetes version than the exam uses.",
        "Spending too long on one task.",
      ],
    },
  ],
  faq: [
    { question: "How long is the CKAD exam?", answer: "2 hours." },
    { question: "What is the CKAD passing score?", answer: "66%." },
    { question: "Is CKAD multiple choice?", answer: "No. It is performance-based: 15 to 20 tasks completed on the command line in Kubernetes clusters." },
    {
      question: "What are the CKAD domains and weights?",
      answer:
        "Application Design and Build 20%, Application Deployment 20%, Application Observability and Maintenance 15%, Application Environment, Configuration and Security 25%, Services and Networking 20%.",
    },
    {
      question: "Are CertRamp's CKAD questions real exam tasks?",
      answer: "No. All CertRamp questions are original practice questions written against the published CKAD curriculum. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CKAD Exam Guide 2026: Kubernetes v1.37, Domains & Study Plan",
    description:
      "Prepare for the Certified Kubernetes Application Developer exam: 15–20 hands-on tasks in 2 hours, 66% to pass, the five domains with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
