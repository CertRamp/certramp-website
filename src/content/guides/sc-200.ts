import type { ExamGuide } from "@/config/types";

/**
 * SC-200 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const sc200Guide: ExamGuide = {
  slug: "sc-200",
  summary:
    "SC-200 (Microsoft Security Operations Analyst) tests whether you can run a security operations centre with Microsoft Defender XDR and Microsoft Sentinel: configure detections and automation, investigate incidents and hunt for threats with KQL. The exam takes 100 minutes, you need 700 points to pass, and the skills outline was last updated on 21 October 2026.",
  whoFor: [
    "SOC analysts and incident responders working with Microsoft Defender XDR or Microsoft Sentinel",
    "Security engineers who build detections, automation and data connectors",
    "IT administrators moving into a security operations role",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What SC-200 actually tests",
      paragraphs: [
        "SC-200 has three skill areas. Managing the security operations environment carries the most weight (40–45%): automation rules and playbooks, Sentinel roles, data retention tiers, data connectors and detection rules. Responding to incidents is worth 35–40%, and threat hunting with KQL 20–25%.",
        "Most questions describe a SOC situation and ask for the right tool, setting or next step. Typical decisions: automation rule or playbook, scheduled or near-real-time analytics rule, which connector for which log source, which KQL table holds the evidence, and which device action fits the investigation.",
      ],
    },
    {
      id: "october-2026-update",
      heading: "What the 21 October 2026 update changed",
      paragraphs: [
        "Microsoft classified the October 2026 change as minor: only the area \"Ingest data into the Microsoft Sentinel SIEM and platform\" was adjusted. The outline as a whole reflects the current Sentinel platform, including data lake and analytics tiers, KQL jobs in the data lake, summary rules, Sentinel Graph and notebooks with the Sentinel MCP Server.",
        "Agentic AI also appears in the response area: investigating incidents with the embedded Microsoft Security Copilot. If your material still talks only about the classic Log Analytics workspace and the old Microsoft 365 Defender portal names, check it against the current study guide.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet of the official SC-200 skills list and mark it as known, unsure or new. Spend time in proportion to the weights — the first area alone is up to 45%.",
        },
        {
          title: "Build a free lab",
          body: "Use a Microsoft 365 developer or trial tenant and an Azure subscription to connect a Sentinel workspace, onboard a test device to Defender for Endpoint and generate a few test alerts. Seeing the portals once makes the scenario questions much easier.",
        },
        {
          title: "Learn KQL properly",
          body: "Practise where, project, summarize, join and time filters on the Defender hunting tables (DeviceProcessEvents, DeviceNetworkEvents, EmailEvents, IdentityLogonEvents and others). You need to read queries quickly and spot the right table.",
        },
        {
          title: "Work through the Microsoft Learn paths",
          body: "Follow the free SC-200 learning paths for Defender XDR, Defender for Cloud and Microsoft Sentinel, and check each module against the current outline.",
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
        "Underestimating configuration. The biggest area is about setting things up — connectors, retention, roles, rules and automation — not only about reacting to alerts.",
        "Confusing automation rules with playbooks. Automation rules handle incidents centrally and can run playbooks; playbooks are Logic Apps workflows that perform actions.",
        "Learning KQL only by reading. Hunting questions expect you to recognise what a query does and which table to use.",
        "Mixing up portals and product names. Know which task happens in the Defender portal, which in Sentinel and which in Microsoft Purview.",
        "Ignoring Microsoft 365 investigations. Purview Audit, eDiscovery content search and Microsoft Graph activity logs are part of the outline.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the SC-200 exam and what is the passing score?",
      answer:
        "You have 100 minutes. Microsoft requires 700 or greater to pass. Microsoft does not publish the exact number of questions for SC-200; it states that most of its certification exams have between 40 and 60 questions.",
    },
    {
      question: "How do I renew the SC-200 certification?",
      answer:
        "The Security Operations Analyst Associate certification is valid for 12 months. You renew it for free by passing an online assessment on Microsoft Learn during the six-month renewal window.",
    },
    {
      question: "Which skills changed on 21 October 2026?",
      answer:
        "Microsoft lists only a minor change in \"Ingest data into the Microsoft Sentinel SIEM and platform\". All other areas are unchanged.",
    },
    {
      question: "Are CertRamp's SC-200 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Microsoft's published skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "SC-200 Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "SC-200 guide for the skills measured as of 21 Oct 2026: 100 minutes, passing score 700, Defender XDR, Sentinel, KQL hunting and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
