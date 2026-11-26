import type { ExamGuide } from "@/config/types";

/**
 * CNCF / Linux Foundation CKS exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts (note the curriculum/environment version difference).
 */
export const cksGuide: ExamGuide = {
  slug: "cks",
  summary:
    "The Certified Kubernetes Security Specialist (CKS) exam is a 2-hour, online, proctored, performance-based exam with 15 to 20 command-line tasks. You pass with 67%, and you must have passed the CKA before you can take it. Three domains carry 20% each: microservice vulnerabilities, supply chain security, and monitoring, logging and runtime security.",
  whoFor: [
    "CKA holders who secure Kubernetes clusters and workloads",
    "Platform and security engineers responsible for container security",
    "DevSecOps engineers working on supply chain and runtime security",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CKS has 15 to 20 hands-on tasks in 2 hours on the PSI Bridge platform with the PSI Secure Browser. You need 67% to pass. You must have passed the CKA before attempting CKS.",
        "The curriculum is version 1.37, while the Linux Foundation's exam instructions state that the exam environment currently runs Kubernetes v1.35. Check the current instructions before the exam and practise on a matching version.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Minimize Microservice Vulnerabilities, Supply Chain Security, and Monitoring, Logging and Runtime Security are 20% each. Cluster Setup and Cluster Hardening are 15% each and System Hardening 10%.",
        "Expect tasks such as restricting network traffic, tightening RBAC, hardening pods, scanning images, configuring audit logging and detecting suspicious behaviour at runtime. Speed with kubectl and with security tools on the command line is essential.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the CKS curriculum", body: "Use the CNCF curriculum v1.37 and the Linux Foundation's CKS instructions as your checklist." },
        { title: "Refresh CKA skills", body: "CKS assumes fluent cluster administration; brush up before adding security topics." },
        { title: "Practise each security control", body: "Network policies, RBAC, pod security, secrets, audit logs and admission control: configure each one yourself." },
        { title: "Work with supply chain and runtime tools", body: "Scan images, verify sources and use runtime detection on a lab cluster." },
        { title: "Take timed practice sessions", body: "Solve full task sets in 2 hours and practise skipping hard tasks." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Booking CKS before passing the CKA.",
        "Practising on a Kubernetes version that does not match the exam environment.",
        "Knowing security concepts but being too slow on the command line.",
      ],
    },
  ],
  faq: [
    { question: "How long is the CKS exam?", answer: "2 hours." },
    { question: "What is the CKS passing score?", answer: "67%." },
    { question: "Do I need the CKA first?", answer: "Yes. You must have passed the CKA before attempting the CKS." },
    {
      question: "What are the CKS domains and weights?",
      answer:
        "Cluster Setup 15%, Cluster Hardening 15%, System Hardening 10%, Minimize Microservice Vulnerabilities 20%, Supply Chain Security 20%, Monitoring, Logging and Runtime Security 20%.",
    },
    {
      question: "Are CertRamp's CKS questions real exam tasks?",
      answer: "No. All CertRamp questions are original practice questions written against the published CKS curriculum. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CKS Exam Guide 2026: Kubernetes Security Domains & Plan",
    description:
      "Prepare for the Certified Kubernetes Security Specialist exam: 15–20 hands-on tasks in 2 hours, 67% to pass, CKA required, domains with weights and a plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
