import type { ExamGuide } from "@/config/types";

/**
 * SC-900 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const sc900Guide: ExamGuide = {
  slug: "sc-900",
  summary:
    "SC-900 (Microsoft Security, Compliance, and Identity Fundamentals) tests whether you can describe security, compliance and identity concepts and the Microsoft solutions behind them: Microsoft Entra, Defender for Cloud, Microsoft Sentinel, Defender XDR and Microsoft Purview. The exam takes 45 minutes, you need 700 points to pass, and the skills outline was last updated on 21 October 2026. Fundamentals certifications do not expire.",
  whoFor: [
    "Business stakeholders who need to understand how Microsoft approaches security, compliance and identity",
    "New or existing IT professionals starting out in security or moving towards SC-200, SC-300 or SC-500",
    "Students who want a first Microsoft security certification",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What SC-900 actually tests",
      paragraphs: [
        "SC-900 has four skill areas. Microsoft security solutions carry the most weight (35–40%): Azure infrastructure security services such as Azure Firewall, network security groups, Azure Bastion and Key Vault, plus Defender for Cloud, Microsoft Sentinel and the Defender XDR services. Microsoft Entra is worth 25–30%, Microsoft Purview compliance solutions 20–25%, and the underlying concepts of security, compliance and identity 10–15%.",
        "Every objective starts with \"Describe\" or \"Define\". You are not asked to configure anything step by step; you are asked to recognise what a concept means and which product or feature solves a stated problem. Typical decisions: Conditional Access or Privileged Identity Management, sensitivity label or retention label, Azure Firewall or a network security group, SIEM or SOAR.",
      ],
    },
    {
      id: "october-2026-update",
      heading: "What the 21 October 2026 update changed",
      paragraphs: [
        "Microsoft lists two minor changes: \"Describe function and identity types of Microsoft Entra ID\" and \"Describe threat protection with Microsoft Defender XDR\". The skill areas are otherwise unchanged and the published weights are the same as before.",
        "The current outline names workload identities and hybrid identity under Entra ID, and lists Defender for Office 365, Defender for Endpoint, Defender for Cloud Apps, Defender for Identity, Defender Vulnerability Management, Microsoft Threat Intelligence and the Microsoft Defender portal under Defender XDR. Translated versions of the exam are typically updated about eight weeks after the English version.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official SC-900 skills list and mark it as known, unsure or new. The security solutions area alone is up to 40%, so it deserves the largest share of your time.",
        },
        {
          title: "Get the concepts straight first",
          body: "Shared responsibility, defence in depth, Zero Trust, encryption versus hashing, authentication versus authorisation and federation are the vocabulary the rest of the exam relies on. Make sure you can explain each in one sentence.",
        },
        {
          title: "Work through the Microsoft Learn paths",
          body: "Follow the free SC-900 learning paths for Entra, Azure and Defender security, and Microsoft Purview. For each product, write down the one problem it solves — that is usually what the question tests.",
        },
        {
          title: "Look at the portals once",
          body: "A free Azure account and a Microsoft 365 trial let you see Entra ID, Defender for Cloud, the Defender portal and the Purview portal. Seeing where secure score, Conditional Access or sensitivity labels live makes the wording of questions much easier to follow.",
        },
        {
          title: "Practise under time pressure, then book",
          body: "Take timed practice exams in 45 minutes and read every explanation, including for the questions you answered correctly. Book once you pass several practice exams with a margin.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Treating a fundamentals exam as trivial. The product range is wide, and similar-sounding features are easy to confuse.",
        "Confusing sensitivity labels with retention labels. Sensitivity labels classify and protect content (for example with encryption); retention labels decide how long content is kept or when it is deleted.",
        "Mixing up Conditional Access, Privileged Identity Management and ID Protection. Conditional Access enforces sign-in conditions, PIM gives just-in-time privileged roles, and ID Protection detects risky users and sign-ins.",
        "Blurring the Defender products. Know which one protects email, endpoints, cloud apps, on-premises identities and cloud workloads.",
        "Skipping the compliance area. Service Trust Portal, Compliance Manager, DLP, records management, insider risk, eDiscovery and audit together make up to a quarter of the exam.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the SC-900 exam and what is the passing score?",
      answer:
        "You have 45 minutes. Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for SC-900; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "Does the SC-900 certification expire?",
      answer:
        "No. Microsoft states that Fundamentals certifications do not expire, so there is no renewal assessment for SC-900.",
    },
    {
      question: "Which skills changed on 21 October 2026?",
      answer:
        "Microsoft lists minor changes in \"Describe function and identity types of Microsoft Entra ID\" and \"Describe threat protection with Microsoft Defender XDR\". The skill areas and their weights stay the same.",
    },
    {
      question: "Do I need technical experience to pass SC-900?",
      answer:
        "There are no formal prerequisites. Microsoft says candidates should be familiar with Microsoft Azure and Microsoft 365, and the exam is aimed at business stakeholders, IT professionals and students alike.",
    },
    {
      question: "Are CertRamp's SC-900 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "SC-900 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "SC-900 guide for the skills measured as of 21 Oct 2026: 45 minutes, passing score 700, Entra, Defender, Sentinel, Purview and a five-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
