import type { ExamGuide } from "@/config/types";

/**
 * AZ-104 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const az104Guide: ExamGuide = {
  slug: "az-104",
  summary:
    "AZ-104 (Microsoft Azure Administrator) tests whether you can implement, manage and monitor an Azure environment: identities and governance, storage, compute, virtual networking, and monitoring with backup and recovery. The exam takes 100 minutes, you need 700 points to pass, and the skills outline was last updated on 17 April 2026.",
  whoFor: [
    "Cloud and system administrators who run Azure subscriptions day to day",
    "IT professionals with server, networking and virtualisation experience moving into Azure",
    "Engineers who already use the Azure portal, PowerShell, Azure CLI and ARM templates or Bicep files",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AZ-104 actually tests",
      paragraphs: [
        "AZ-104 has five skill areas. Managing Azure identities and governance (20–25%) and deploying and managing compute (20–25%) carry the highest weights. Storage (15–20%) and virtual networking (15–20%) follow, and monitoring and maintaining Azure resources accounts for 10–15%.",
        "Many questions describe an administration task and ask for the right setting, service or next step. Typical decisions: which role at which scope, Azure Policy or a resource lock, which storage redundancy or access method, availability zones or availability sets, service endpoint or private endpoint, and which vault and policy for backup or Site Recovery.",
      ],
    },
    {
      id: "april-2026-update",
      heading: "What the 17 April 2026 update changed",
      paragraphs: [
        "Microsoft classified all changes in the April 2026 update as minor. They affected the audience profile and five objective groups: Azure Files and Blob Storage, virtual machines, containers in the Azure portal, virtual networks, and monitoring. Identities and governance has no entry in the change log.",
        "The current outline includes, for example, encryption at host for virtual machines, Azure Container Apps alongside Container Instances, Azure Backup vaults alongside Recovery Services vaults, and Network Watcher with Connection monitor. Translated versions of the exam are updated about eight weeks after the English version, so check the study guide if your material is older.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official AZ-104 skills list and mark it as known, unsure or new. Weight your time by the published percentages — identities and governance and compute are each up to 25%.",
        },
        {
          title: "Build a lab subscription",
          body: "Use an Azure free account or a sandbox subscription and set budgets and alerts from the start. Create users and groups, assign roles at different scopes, apply a policy and a lock, then delete resource groups when you finish each session.",
        },
        {
          title: "Do every task three ways",
          body: "Practise key tasks in the portal, with Azure CLI or PowerShell, and with an ARM template or Bicep file. The outline expects you to interpret, modify, deploy and export templates.",
        },
        {
          title: "Focus on networking and storage access",
          body: "Build two peered virtual networks with NSGs, a user-defined route, a load balancer and Azure Bastion. In storage, compare SAS tokens, stored access policies, access keys, firewalls and private endpoints.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams of 40–60 questions in 100 minutes and read every explanation, including for the questions you answered correctly.",
        },
        {
          title: "Book and plan the renewal",
          body: "Book once you pass several practice exams with a margin. The certification is valid for 12 months and is renewed with a free online assessment on Microsoft Learn.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Confusing Azure RBAC with Microsoft Entra roles. Azure roles control access to resources; Entra roles control directory tasks such as managing users.",
        "Mixing up Azure Policy and resource locks. Policy evaluates and enforces resource properties; locks stop deletion or modification regardless of permissions.",
        "Mixing up service endpoints and private endpoints. A private endpoint gives the PaaS service a private IP address in your virtual network; a service endpoint does not.",
        "Learning only the portal. Template, CLI and PowerShell questions expect you to read code and spot what it deploys.",
        "Skipping backup and recovery. Recovery Services vaults, Backup vaults, backup policies and Site Recovery failover all appear in the outline.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the AZ-104 exam and what is the passing score?",
      answer:
        "Microsoft's certification page gives 100 minutes. You need 700 or greater to pass. Microsoft does not publish the exact number of questions for AZ-104; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "How do I renew the Azure Administrator certification?",
      answer:
        "The Azure Administrator Associate certification is valid for 12 months. You renew it for free by passing an online assessment on Microsoft Learn during the six-month renewal window; passing extends it by one year from the expiry date.",
    },
    {
      question: "What changed on 17 April 2026?",
      answer:
        "Microsoft lists only minor changes: the audience profile and the objective groups for Azure Files and Blob Storage, virtual machines, containers, virtual networks and monitoring. Identities and governance has no entry in the change log.",
    },
    {
      question: "Can I retake AZ-104 if I fail?",
      answer:
        "Yes. Microsoft states that you must wait 24 hours before your first retake and 14 days between later attempts, with up to five attempts in 12 months.",
    },
    {
      question: "Are CertRamp's AZ-104 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AZ-104 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "AZ-104 guide for the skills measured as of 17 April 2026: 100 minutes, passing score 700, identity, storage, compute, networking, monitoring and a study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
