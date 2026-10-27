import type { ExamGuide } from "@/config/types";

/**
 * SC-300 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const sc300Guide: ExamGuide = {
  slug: "sc-300",
  summary:
    "SC-300 (Microsoft Identity and Access Administrator) tests whether you can implement and run identity and access management with Microsoft Entra: user and hybrid identities, authentication and Conditional Access, workload identities and enterprise apps, and identity governance. The exam takes 100 minutes, you need 700 points to pass, and the English exam moves to the skills measured as of 28 October 2026.",
  whoFor: [
    "Identity and access administrators who run Microsoft Entra ID day to day",
    "Microsoft 365 and Azure administrators who own sign-in security, Conditional Access or app integration",
    "Security engineers responsible for privileged access, access reviews and Zero Trust identity controls",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What SC-300 actually tests",
      paragraphs: [
        "SC-300 has four skill areas: implement and manage user identities, implement authentication and access management, plan and implement workload identities, and plan and automate identity governance. Each area is weighted around a quarter of the exam. Microsoft's study guide lists authentication and access management as 25–30% in its summary and 20–25% in the detailed section, so plan for it to be at least as large as the others.",
        "Most questions describe an organisation's requirement and ask for the right Entra feature or setting. Typical decisions: administrative unit or tenant-wide role, password hash synchronisation or pass-through authentication, which Conditional Access condition and control, system-assigned or user-assigned managed identity, access package or access review, and eligible or active PIM assignment.",
      ],
    },
    {
      id: "october-2026-update",
      heading: "What the 28 October 2026 update changes",
      paragraphs: [
        "Microsoft classified the October 2026 changes as minor. Three sub-areas were adjusted: \"Plan, implement, and manage Microsoft Entra user authentication\", \"Implement Global Secure Access\" and \"Plan and implement privileged access\". The other areas and the audience profile are unchanged.",
        "The current outline expects you to know modern authentication methods (certificate-based authentication, Temporary Access Pass, Microsoft Authenticator and passkeys), Global Secure Access with Microsoft Entra Private Access and Internet Access, and PIM for Microsoft Entra roles, Azure resources and groups. Localised versions of the exam are updated about eight weeks after the English version.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official SC-300 skills list and mark it as known, unsure or new. The four areas are close in weight, so do not skip one.",
        },
        {
          title: "Build a lab tenant",
          body: "Use a Microsoft 365 E5 trial tenant (or a developer sandbox if your Visual Studio subscription qualifies) so that Microsoft Entra ID P2 features such as PIM, ID Protection and access reviews are available. Create test users, groups, administrative units and a few Conditional Access policies in report-only mode.",
        },
        {
          title: "Practise the identity lifecycle end to end",
          body: "Invite a guest, give them access through an access package, review that access and let it expire. Then activate a role with PIM and read the audit history. Seeing the whole cycle makes governance questions much easier.",
        },
        {
          title: "Work through the Microsoft Learn paths",
          body: "Follow the free SC-300 learning paths and check each module against the current outline, especially Global Secure Access and workload identities.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams of 40–60 questions in 100 minutes and read every explanation, including for the questions you answered correctly.",
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
        "Mixing up Microsoft Entra roles and Azure RBAC roles. Entra roles manage the directory and Microsoft 365; Azure roles manage Azure resources. PIM covers both, but they are configured separately.",
        "Learning Conditional Access only as \"require MFA\". Know assignments, conditions, grant and session controls, report-only mode, continuous access evaluation, authentication context and protected actions.",
        "Treating hybrid identity as a footnote. Entra Connect Sync, Cloud Sync, password hash synchronisation, pass-through authentication and seamless SSO all appear in the outline.",
        "Skipping workload identities. Managed identities, service principals, app registrations, consent and Defender for Cloud Apps make up a full skill area.",
        "Confusing governance tools. Entitlement management grants access through access packages; access reviews check whether existing access is still needed; PIM controls when privileged roles are active.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the SC-300 exam and what is the passing score?",
      answer:
        "You have 100 minutes. Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for SC-300; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "How do I renew the SC-300 certification?",
      answer:
        "The Identity and Access Administrator Associate certification has a renewal frequency of 12 months. You renew it for free by passing an online assessment on Microsoft Learn during the six-month renewal window.",
    },
    {
      question: "Which skills change on 28 October 2026?",
      answer:
        "Microsoft lists minor changes in \"Plan, implement, and manage Microsoft Entra user authentication\", \"Implement Global Secure Access\" and \"Plan and implement privileged access\". All other areas are unchanged.",
    },
    {
      question: "Are there formal prerequisites for SC-300?",
      answer:
        "No. Microsoft recommends familiarity with Azure, Microsoft 365 services and workloads, Active Directory Domain Services, PowerShell and Kusto Query Language (KQL).",
    },
    {
      question: "Are CertRamp's SC-300 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "SC-300 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "SC-300 guide for the skills measured as of 28 Oct 2026: 100 minutes, passing score 700, Entra ID, Conditional Access, PIM, governance and a study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
