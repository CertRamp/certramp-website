import type { ExamGuide } from "@/config/types";

/**
 * MD-102 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const md102Guide: ExamGuide = {
  slug: "md-102",
  summary:
    "MD-102 (Microsoft 365 Endpoint Administrator) tests whether you can deploy, manage and protect Windows, macOS, iOS and Android devices with Microsoft Intune and Microsoft Entra ID. The exam takes 100 minutes, you need 700 points to pass, and the English exam follows the skills measured as of 27 October 2026.",
  whoFor: [
    "Endpoint and workplace administrators who manage devices with Microsoft Intune",
    "Desktop support engineers moving from on-premises tools such as Configuration Manager to cloud management",
    "Consultants who plan Autopilot, Windows 365 or Intune rollouts",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What MD-102 actually tests",
      paragraphs: [
        "The exam covers the whole device life cycle: preparing identity and enrollment (20–25%), deploying and maintaining devices (25–30%), protecting them (15–20%), managing and securing apps (15–20%) and automating, monitoring and reporting (10–15%).",
        "Most questions are scenarios with one right configuration choice: which Entra join type, which Autopilot mode, which enrollment method for corporate iPhones, which policy type to block copy-and-paste from work apps on personal phones. You need to know what each option does and when it applies.",
      ],
    },
    {
      id: "october-2026-update",
      heading: "What the 27 October 2026 update changed",
      paragraphs: [
        "Microsoft rates the October 2026 update as minor. The area \"Manage applications\" was renamed \"Manage and secure applications\", and seven sub-skills received minor changes — namely enrollment, Windows deployment with cloud-based tools, configuration profiles, the Intune Suite add-ons, remote actions, app deployment and health monitoring.",
        "The current outline expects you to know newer capabilities such as Autopilot device preparation policies, Windows 365 Cloud PC provisioning, Endpoint Privilege Management, Cloud PKI, multi-admin approval, Windows Autopatch with Hotpatch, device queries with KQL and Security Copilot agents in Intune. Translated exams follow about eight weeks after English.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Check the outline against your daily work",
          body: "Mark each bullet of the MD-102 study guide as known, unsure or new. Most administrators know Windows well but have gaps in Apple and Android enrollment or the Intune Suite add-ons.",
        },
        {
          title: "Set up a lab tenant",
          body: "Use a Microsoft 365 E5 or Intune trial tenant (or a developer sandbox if you qualify through a Visual Studio subscription). Enroll at least one Windows device and one phone, create a compliance policy, a configuration profile and an app protection policy.",
        },
        {
          title: "Walk through Autopilot end to end",
          body: "Register a device, create a deployment profile or device preparation policy and an Enrollment Status Page, and watch a deployment. Autopilot has its own sub-skill with several bullets in the study guide.",
        },
        {
          title: "Learn the decision points",
          body: "Write your own short tables: join types, Autopilot modes, enrollment methods per platform, update options for Windows, app types in Intune. Exam questions are mostly about choosing correctly between them.",
        },
        {
          title: "Practise with timed exams",
          body: "Answer full-length practice exams in 100 minutes and read every explanation, including the ones you got right.",
        },
        {
          title: "Book and plan the renewal",
          body: "Book when your scores are consistently above target. The certification is valid for 12 months and can be renewed for free with an online assessment.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Focusing only on Windows. iOS/iPadOS, macOS and Android enrollment and configuration are a large part of the outline.",
        "Confusing compliance policies with configuration profiles. Compliance evaluates a device; configuration profiles change settings on it.",
        "Mixing up app protection and app configuration policies. App protection protects company data inside apps, even on personal devices without enrollment.",
        "Skipping the Intune Suite add-ons. Endpoint Privilege Management, Remote Help, Cloud PKI, Microsoft Tunnel for MAM and Advanced Analytics have their own sub-skill.",
        "Learning old product names. Use Microsoft Entra ID, Microsoft Defender for Endpoint and Windows Autopatch as they appear in the current study guide.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the MD-102 exam and what is the passing score?",
      answer: "You have 100 minutes, and Microsoft requires a score of 700 or greater to pass. If the exam is not available in your language, you can request 30 extra minutes.",
    },
    {
      question: "Which certification do I get with MD-102?",
      answer: "Passing MD-102 earns the Microsoft 365 Certified: Endpoint Administrator Associate certification. It is valid for 12 months and renewed with a free online assessment on Microsoft Learn.",
    },
    {
      question: "What changed on 27 October 2026?",
      answer:
        "Microsoft lists minor changes in seven sub-skills and renamed \"Manage applications\" to \"Manage and secure applications\". No skill area was added or removed. Localized exams are updated about eight weeks after the English version.",
    },
    {
      question: "Are CertRamp's MD-102 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "MD-102 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "MD-102 guide for the skills measured as of 27 Oct 2026: 100 minutes, passing score 700, Intune, Autopilot, endpoint security, apps and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
