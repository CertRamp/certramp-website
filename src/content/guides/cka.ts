import type { ExamGuide } from "@/config/types";

/**
 * CNCF / Linux Foundation CKA exam guide. Exam facts come from the verified
 * `exam` record in src/config/certifications.ts.
 */
export const ckaGuide: ExamGuide = {
  slug: "cka",
  summary:
    "The Certified Kubernetes Administrator (CKA) exam is a 2-hour, online, proctored, performance-based exam: you solve 15 to 20 tasks on the command line in real Kubernetes clusters (curriculum v1.37). You pass with 66%. Troubleshooting is the largest domain at 30%.",
  whoFor: [
    "Platform, DevOps and site reliability engineers who run Kubernetes clusters",
    "System administrators moving to container platforms",
    "Developers who want to prove cluster administration skills",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CKA has no multiple-choice questions. You complete 15 to 20 hands-on tasks on the Linux command line within 2 hours, in an online proctored session on the PSI Bridge platform with the PSI Secure Browser. You need 66% to pass. There are no prerequisites.",
        "Because every task is practical, speed with kubectl and comfort on the command line matter as much as knowledge. Tasks carry different weights, so skipping a hard task and coming back later is often the better strategy.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Troubleshooting is the largest domain at 30%: broken nodes, failing pods, networking problems and cluster components. Cluster Architecture, Installation & Configuration follows at 25%, Services & Networking at 20%, Workloads & Scheduling at 15% and Storage at 10%.",
        "The exam follows a specific Kubernetes version (v1.37 for the current curriculum). Practise on that version so that commands and API fields behave as expected.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the CKA curriculum",
          body: "Use the official curriculum for Kubernetes v1.37 and the CKA/CKAD exam tips from the Linux Foundation as your checklist.",
        },
        {
          title: "Build your own cluster",
          body: "Set up a small cluster yourself, for example with kubeadm, so that installation and upgrade tasks are familiar.",
        },
        {
          title: "Get fast with kubectl",
          body: "Practise imperative commands, generating YAML with dry runs, and finding fields quickly in the Kubernetes documentation.",
        },
        {
          title: "Practise troubleshooting daily",
          body: "Break things on purpose: stop the kubelet, misconfigure a service, fill a volume. Then fix them using logs, events and describe output.",
        },
        {
          title: "Take timed practice sessions",
          body: "Solve full sets of tasks under a 2-hour limit and practise skipping and returning to hard tasks.",
        },
        {
          title: "Check your exam setup",
          body: "Test your computer and room against the PSI requirements before exam day so the proctoring check does not cost you time or nerves.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Learning Kubernetes only from videos without typing the commands yourself.",
        "Forgetting to switch to the right cluster or namespace for each task.",
        "Spending too long on one low-weight task.",
        "Practising on a different Kubernetes version than the exam uses.",
        "Underestimating troubleshooting, the largest domain.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the CKA exam?",
      answer: "2 hours.",
    },
    {
      question: "What is the CKA passing score?",
      answer: "66%.",
    },
    {
      question: "Does the CKA have multiple-choice questions?",
      answer: "No. It is performance-based: 15 to 20 tasks completed on the Linux command line in Kubernetes clusters.",
    },
    {
      question: "What are the CKA domains and weights?",
      answer:
        "Troubleshooting 30%, Cluster Architecture, Installation & Configuration 25%, Services & Networking 20%, Workloads & Scheduling 15% and Storage 10%.",
    },
    {
      question: "Are CertRamp's CKA questions real exam tasks?",
      answer: "No. All CertRamp questions are original practice questions written against the published CKA curriculum. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CKA Exam Guide 2026: Kubernetes v1.37, Domains & Study Plan",
    description:
      "Prepare for the Certified Kubernetes Administrator exam: 15–20 hands-on tasks in 2 hours, 66% to pass, the five domains with weights and a six-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
