import type { ExamGuide } from "@/config/types";

/**
 * AZ-900 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const az900Guide: ExamGuide = {
  slug: "az-900",
  summary:
    "AZ-900 (Microsoft Azure Fundamentals) tests whether you can describe cloud concepts, the core Azure architecture and services, and the tools Azure offers for cost management, governance and monitoring. The exam takes 45 minutes, you need 700 points to pass, and the current skills outline is dated 20 July 2026. The certification does not expire.",
  whoFor: [
    "People starting a career in cloud or moving into an Azure role from another area of IT",
    "Technical and non-technical staff who work with Azure projects and need a shared vocabulary",
    "Students and career changers who want a first Microsoft certification before an associate exam such as AZ-104",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AZ-900 actually tests",
      paragraphs: [
        "AZ-900 has three skill areas. Describe Azure architecture and services carries the highest weight (35–40%): regions and availability zones, the resource hierarchy, compute, networking, storage, identity and security. Describe Azure management and governance is worth 30–35% (cost management, Azure Policy, resource locks, deployment tools and monitoring), and Describe cloud concepts 25–30%.",
        "The questions are about recognising concepts and choosing the right service, not about configuring it step by step. Typical decisions: IaaS, PaaS or SaaS; availability zone or region pair; management group, subscription or resource group; which storage tier or redundancy option fits; and which tool answers a cost, compliance or monitoring question.",
      ],
    },
    {
      id: "july-2026-update",
      heading: "What the 20 July 2026 update changed",
      paragraphs: [
        "Microsoft classified the July 2026 changes as minor. They affect three sub-areas: \"Describe Azure compute and networking services\", \"Describe features and tools for managing and deploying Azure resources\" and \"Describe monitoring tools in Azure\". The weights of the three skill areas did not change.",
        "The outline uses current product names such as Microsoft Entra ID, Microsoft Entra Domain Services and Microsoft Purview. If your material still talks about Azure Active Directory, translate the names as you study. Localised versions of the exam are updated about eight weeks after the English version.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official AZ-900 skills list and mark it as known, unsure or new. Architecture and services is the largest area, so expect to spend the most time there.",
        },
        {
          title: "Work through the Microsoft Learn paths",
          body: "Follow the free AZ-900 learning paths on Microsoft Learn. They cover the outline closely and include sandbox exercises where you can create resources without your own subscription.",
        },
        {
          title: "Learn the comparisons, not just the names",
          body: "Make short tables for the pairs and groups the exam likes to contrast: cloud models, service types, VM options, storage tiers and redundancy options, Azure Policy versus RBAC versus resource locks, and Advisor versus Service Health versus Azure Monitor.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams of 40–60 questions in 45 minutes and read every explanation, including for the questions you answered correctly.",
        },
        {
          title: "Book when your results are stable",
          body: "Book once you pass several practice exams with a margin. Students and educators can schedule through Certiport; everyone else schedules through Pearson VUE.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Treating it as a pure theory exam. Many questions describe a business need and ask which Azure service or feature fits.",
        "Mixing up governance tools. Azure Policy enforces rules on resource properties, RBAC controls who can do what, and resource locks stop deletion or changes even for authorised users.",
        "Confusing availability zones with regions and region pairs. Zones protect against a datacentre failure inside a region; region pairs help with region-wide outages.",
        "Learning storage tiers without their trade-offs. Know which tiers are online and which is offline, and that colder tiers trade lower storage cost for higher access cost.",
        "Ignoring the monitoring area. Azure Advisor, Azure Service Health and Azure Monitor each answer a different question.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the AZ-900 exam and what is the passing score?",
      answer:
        "You have 45 minutes. Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for AZ-900; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "Does the Azure Fundamentals certification expire?",
      answer:
        "No. Microsoft states that Fundamentals certifications do not expire, so there is no renewal assessment for AZ-900.",
    },
    {
      question: "Which skills changed on 20 July 2026?",
      answer:
        "Microsoft lists minor changes in \"Describe Azure compute and networking services\", \"Describe features and tools for managing and deploying Azure resources\" and \"Describe monitoring tools in Azure\". All other areas are unchanged.",
    },
    {
      question: "What happens if I fail AZ-900?",
      answer:
        "Under Microsoft's retake policy you can retake the exam after 24 hours. Further attempts require a 14-day wait, and you can take the same exam at most five times in 12 months from your first attempt.",
    },
    {
      question: "Are CertRamp's AZ-900 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AZ-900 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "AZ-900 guide for the skills measured as of 20 July 2026: 45 minutes, passing score 700, cloud concepts, Azure services, governance and a study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
