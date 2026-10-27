import type { ExamGuide } from "@/config/types";

/**
 * CompTIA Security+ SY0-701 exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const comptiaSecurityPlusSy0701Guide: ExamGuide = {
  slug: "comptia-security-plus-sy0-701",
  summary:
    "CompTIA Security+ SY0-701 (Security+ V7) tests core security skills across five domains, from security controls and threats to security operations and governance. You get a maximum of 90 multiple-choice and performance-based questions in 90 minutes and need 750 on a scale of 100–900. The successor exam SY0-801 (V8) is expected to launch on or around 17 November 2026, and SY0-701 retires on 11 June 2027 in English and on 13 August 2027 in Japanese, Portuguese, Spanish and Thai.",
  whoFor: [
    "Systems and network administrators moving into a security role",
    "Junior security analysts and SOC staff who want a broad, vendor-neutral foundation",
    "Candidates who have started preparing for SY0-701 and can sit the exam before it retires in 2027",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What SY0-701 actually tests",
      paragraphs: [
        "The SY0-701 objectives have five domains: General Security Concepts (12%), Threats, Vulnerabilities, and Mitigations (22%), Security Architecture (18%), Security Operations (28%) and Security Program Management and Oversight (20%). Security Operations carries the highest weight, so identity and access management, vulnerability management, monitoring, incident response and investigations deserve a large share of your time.",
        "Many objectives start with \"Given a scenario\" — for example analysing indicators of malicious activity, securing enterprise infrastructure or implementing identity and access management. Others ask you to compare and contrast or explain concepts. Expect to choose the right control, attack type, technology or next step for a short situation rather than recite definitions.",
      ],
    },
    {
      id: "sy0-701-vs-sy0-801",
      heading: "SY0-701 or SY0-801: which version should you take?",
      paragraphs: [
        "CompTIA is replacing Security+ V7 (SY0-701, launched 7 November 2023) with Security+ V8 (SY0-801), which is expected to launch on or around 17 November 2026. SY0-701 stays available until it retires: 11 June 2027 for the English exam and 13 August 2027 for the Japanese, Portuguese, Spanish and Thai exams. Both versions keep the same format — a maximum of 90 questions, 90 minutes and a passing score of 750 on a scale of 100–900.",
        "The V8 objectives use the same five-domain structure with different weights (16%, 24%, 19%, 27% and 14%), and domain 2 is renamed \"Threats, Vulnerabilities, and Attacks\". At launch CompTIA lists SY0-801 in English only. If you are well into SY0-701 preparation and can sit the exam before the retirement date, staying on SY0-701 is reasonable; if you are just starting and plan to test in English late in the transition, prepare for SY0-801 instead (CertRamp has a separate SY0-801 page).",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Download the official objectives",
          body: "Get the SY0-701 exam objectives (V7) from CompTIA and mark each of the 28 objectives as known, unsure or new. Weight your time by domain — Security Operations alone is 28%.",
        },
        {
          title: "Fix your timeline against the retirement date",
          body: "Pick an exam date well before SY0-701 retires (11 June 2027 in English, 13 August 2027 in the other languages) so a resit is still possible on the same version.",
        },
        {
          title: "Learn the vocabulary in comparison pairs",
          body: "Many objectives are \"compare and contrast\". Learn controls, attacks and technologies side by side: preventive vs detective, tokenisation vs masking, hot vs warm vs cold site, SAML vs OAuth, SPF vs DKIM vs DMARC.",
        },
        {
          title: "Get hands-on for the scenario objectives",
          body: "Use a small lab or free tools to read logs, run a vulnerability scan, configure a firewall rule and inspect certificates. Performance-based questions are much easier once you have seen the real artefacts.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams of up to 90 questions in 90 minutes. Read every explanation, including for the questions you answered correctly, and note which objective each miss belongs to.",
        },
        {
          title: "Book when your results are stable",
          body: "Book once you pass several practice exams with a margin. Plan your renewal from day one: the certification is valid for three years and needs 50 CEUs.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using the wrong objectives. SY0-801 material has different weights and a renamed domain 2; check that your resources say SY0-701.",
        "Leaving the exam too late. A failed attempt shortly before 11 June 2027 (English) may leave no time for a resit on SY0-701.",
        "Under-preparing for performance-based questions. They test applied skills, so reading alone is not enough.",
        "Treating governance as an afterthought. Security Program Management and Oversight is 20% of SY0-701 — risk management, third-party risk, compliance, audits and awareness all count.",
        "Memorising lists without the \"why\". Scenario questions reward knowing when a control or technique fits, not just its name.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the Security+ SY0-701 exam and what is the passing score?",
      answer:
        "You have 90 minutes for a maximum of 90 questions, a mix of multiple-choice and performance-based questions. The passing score is 750 on a scale of 100–900.",
    },
    {
      question: "When does SY0-701 retire, and what replaces it?",
      answer:
        "The English SY0-701 exam retires on 11 June 2027; the Japanese, Portuguese, Spanish and Thai versions retire on 13 August 2027. Its successor, Security+ V8 (SY0-801), is expected to launch on or around 17 November 2026 and is listed in English only at launch.",
    },
    {
      question: "In which languages is SY0-701 available?",
      answer:
        "CompTIA offers SY0-701 in English, Japanese, Portuguese, Spanish and Thai.",
    },
    {
      question: "How do I keep Security+ current?",
      answer:
        "Security+ is valid for three years from the date you pass. To renew, you need 50 continuing education units (CEUs) — for example through a CompTIA CertMaster CE course, qualifying activities or other certifications — or you can pass the latest version of the Security+ exam.",
    },
    {
      question: "Are CertRamp's Security+ SY0-701 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against CompTIA's published SY0-701 exam objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "Security+ SY0-701 Exam Guide 2026: Domains & Study Plan",
    description:
      "Security+ SY0-701 guide: 90 questions, 90 minutes, pass mark 750, five domains, retirement on 11 June 2027, how it compares with SY0-801 and a study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
