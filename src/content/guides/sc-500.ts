import type { ExamGuide } from "@/config/types";

/**
 * SC-500 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const sc500Guide: ExamGuide = {
  slug: "sc-500",
  summary:
    "SC-500 (Implementing End-to-End Security Controls for Cloud and AI Workloads) is the exam for the Microsoft Certified: Cloud and AI Security Engineer Associate certification, which Microsoft introduced in May 2026 ahead of AZ-500's retirement on 31 August 2026. It tests whether you can secure identities, data, networks, compute and AI workloads in Azure and monitor security posture with Defender for Cloud, Microsoft Sentinel and Security Copilot. You have 120 minutes and need 700 points to pass.",
  whoFor: [
    "Azure security engineers who held or were preparing for AZ-500 and need the current credential",
    "Cloud administrators and engineers responsible for securing Azure, hybrid and multicloud environments",
    "Security professionals who must protect AI workloads built with Microsoft Foundry, Copilot Studio and Microsoft 365 Copilot",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What SC-500 actually tests",
      paragraphs: [
        "SC-500 has four skill areas. Securing storage, databases and networking carries the most weight (25–30%): storage firewalls and access policies, Azure SQL security and auditing, NSGs and application security groups, Azure Virtual Network Manager, Virtual WAN, VPNs, Microsoft Entra Private Access, private endpoints, Private Link and Azure Firewall. Identity, access and governance, secure compute (including AI) and security posture monitoring are each worth 20–25%.",
        "The objectives are written as \"implement\" and \"configure\", so expect scenario questions about the right setting, service or next step rather than definitions. Typical decisions: PIM or a permanent role assignment, Azure RBAC role or Key Vault access policy, private endpoint or service endpoint, which resource lock, which Defender for Cloud plan, and which Sentinel connector or role.",
      ],
    },
    {
      id: "how-it-differs",
      heading: "How SC-500 relates to AZ-500",
      paragraphs: [
        "Microsoft retired the Azure Security Engineer Associate certification, the AZ-500 exam and its renewal assessments on 31 August 2026; it can no longer be earned or renewed. In its partner announcement of 6 May 2026, Microsoft introduced the Cloud and AI Security Engineer Associate (SC-500) certification during the transition and described it as expanding the security engineer role to include cloud and AI model protection. The SC-500 beta opened in May 2026, and Microsoft said training and the exam were expected in July 2026.",
        "The clearest new area is \"Implement security for AI\": data overexposure in SharePoint, Microsoft Purview Data Security Posture Management for Copilot and AI apps, real-time protection for Copilot Studio agents, Microsoft Entra Agent ID, AI Gateway in Azure API Management for Microsoft Foundry, Defender for AI services, guardrails in Foundry and the Data and AI security dashboard in Defender for Cloud. Microsoft Security Copilot workspaces, roles, plugins and agents are also part of the outline. If your material only covers AZ-500, check it against the SC-500 study guide line by line.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official SC-500 skills list and mark it as known, unsure or new. AZ-500 experience covers a lot of the identity, network and Defender for Cloud material, but the AI and Security Copilot objectives are likely to be new.",
        },
        {
          title: "Build a lab",
          body: "Use an Azure subscription and a Microsoft 365 trial tenant to deploy a Key Vault, a storage account with a private endpoint, a VM behind Azure Bastion, and Defender for Cloud plans. Turn off or delete paid resources after each session; Defender plans, Firewall and Bastion are billed while they run.",
        },
        {
          title: "Practise the networking decisions",
          body: "Networking is the largest area. Be clear on NSGs versus application security groups versus Azure Firewall, private endpoints versus Private Link services, and how Network Watcher shows which rule allows or blocks traffic.",
        },
        {
          title: "Cover the AI security objectives",
          body: "Work through the Microsoft Learn content for Purview DSPM, Defender for AI services, Entra Agent ID and Foundry guardrails. For each one, write down which risk it addresses and where you configure it.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams in 120 minutes and read every explanation, including for the questions you answered correctly. The certification page says you may have interactive components, so get used to the exam sandbox too.",
        },
        {
          title: "Book when your results are stable",
          body: "Book once you pass several practice exams with a margin. Plan the free annual renewal assessment on Microsoft Learn right away.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying from AZ-500 material only. The AI, Security Copilot and Entra Private Access objectives are not covered by older courses.",
        "Confusing private endpoints with service endpoints. A private endpoint gives the PaaS resource a private IP address in your virtual network; a service endpoint does not.",
        "Mixing up Azure RBAC and Microsoft Entra roles. Azure roles control Azure resources; Entra roles control directory objects and settings. The outline asks for custom roles of both kinds.",
        "Treating Defender for Cloud as one switch. Know what foundational (free) CSPM, Defender CSPM and the individual workload protection plans (Servers, Storage, Databases, Containers, Key Vault, AI services) add.",
        "Overlooking Sentinel set-up. Workspaces, roles, content hub, connectors, custom log tables, automation and retention all appear in the posture area.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the SC-500 exam and what is the passing score?",
      answer:
        "You have 120 minutes. Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for SC-500; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "Is SC-500 the replacement for AZ-500?",
      answer:
        "AZ-500 and the Azure Security Engineer Associate certification were retired on 31 August 2026. Microsoft introduced the Cloud and AI Security Engineer Associate (SC-500) certification as part of that transition, and it covers the security engineer role with cloud and AI workload protection added.",
    },
    {
      question: "How do I renew the Cloud and AI Security Engineer Associate certification?",
      answer:
        "Like other role-based Microsoft certifications, it is renewed annually for free by passing an online assessment on Microsoft Learn during the six-month eligibility window before it expires.",
    },
    {
      question: "Do I need a prerequisite certification for SC-500?",
      answer:
        "No formal prerequisite is listed. Microsoft recommends practical experience administering Azure and hybrid environments, strong familiarity with Microsoft Entra ID and familiarity with Microsoft 365 administration.",
    },
    {
      question: "Are CertRamp's SC-500 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "SC-500 Exam Guide 2026: AZ-500 Successor, Skills & Study Plan",
    description:
      "SC-500 guide: 120 minutes, passing score 700, the four skill areas, what replaced AZ-500, the new AI security objectives and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
