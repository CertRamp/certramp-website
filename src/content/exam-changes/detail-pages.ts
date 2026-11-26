/**
 * Dedicated pages for single exam changes (pilot, 2026-11-21).
 * Each page targets searches like "CS0-003 retirement" and reuses the facts of
 * the matching exam-changes entry; only the framing text lives here.
 * Add a page only when CertRamp has a course for the successor exam.
 */
export interface ExamChangeDetailPage {
  /** URL slug under /exam-changes/. */
  slug: string;
  /** id of the entry in exam-changes/index.ts. */
  changeId: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  faq: { q: string; a: string }[];
}

export const examChangeDetailPages: ExamChangeDetailPage[] = [
  {
    slug: "cs0-003-retirement",
    changeId: "comptia-cs0-003",
    title: "CompTIA CySA+ CS0-003 Retirement: Dates and What to Take Next",
    seoTitle: "CS0-003 Retirement Date 2026: CySA+ CS0-004 Next",
    description:
      "CompTIA CySA+ CS0-003 retires on 22 December 2026 (English). CS0-004 (V4) launched on 23 June 2026. Key dates, the new exam format and which version to take.",
    intro:
      "CompTIA replaces CySA+ V3 (CS0-003) with CySA+ V4 (CS0-004). Here are the official retirement dates, what the new exam looks like and which version to prepare for if you are studying now.",
    faq: [
      {
        q: "When does CS0-003 retire?",
        a: "The English CS0-003 exam retires on 22 December 2026. The Japanese, Portuguese and Spanish versions retire on 23 March 2027.",
      },
      {
        q: "What replaces CS0-003?",
        a: "CySA+ V4 with the exam code CS0-004. CompTIA launched it on 23 June 2026. It has a maximum of 85 questions, 165 minutes and a passing score of 750 on a scale of 100 to 900.",
      },
      {
        q: "Should I still take CS0-003 or switch to CS0-004?",
        a: "If your CS0-003 exam is booked before 22 December 2026 and you are well prepared, you can still take it in English. If you are starting now, prepare for CS0-004, because CS0-003 study material does not cover the V4 objectives.",
      },
    ],
  },
  // --- Added 2026-11-26: facts come only from the matching verified tracker entry. ---
  {
    slug: "sy0-701-vs-sy0-801",
    changeId: "comptia-sy0-701",
    title: "Security+ SY0-701 vs SY0-801: Which Version Should You Take?",
    seoTitle: "SY0-701 vs SY0-801: Security+ V8 Dates and Which to Take",
    description:
      "CompTIA Security+ V8 (SY0-801) launched on 17 November 2026. SY0-701 retires in English on 11 June 2027. Key dates and how to choose your version.",
    intro:
      "CompTIA has launched Security+ V8 (SY0-801) while Security+ V7 (SY0-701) stays bookable until mid-2027. Here are the official dates and a simple way to decide which version to prepare for.",
    faq: [
      {
        q: "When did SY0-801 launch?",
        a: "CompTIA launched Security+ V8 (SY0-801) in English on 17 November 2026.",
      },
      {
        q: "When does SY0-701 retire?",
        a: "The English SY0-701 exam retires on 11 June 2027. The Japanese, Portuguese, Spanish and Thai versions retire on 13 August 2027.",
      },
      {
        q: "Should I take SY0-701 or SY0-801?",
        a: "Take the version your study material covers. If you are already well prepared for SY0-701, you can still book it in English until 11 June 2027. If you are starting now, prepare for SY0-801, because it is the version that stays available.",
      },
      {
        q: "Does a pass on SY0-701 still count after it retires?",
        a: "The retirement date only ends the possibility to take SY0-701. Check CompTIA's own pages for how long an existing certification stays valid and how to renew it.",
      },
    ],
  },
  {
    slug: "sap-c02-retirement",
    changeId: "aws-sap-c02",
    title: "AWS SAP-C02 Retirement: SAP-C03 Is the Solutions Architect Professional Exam",
    seoTitle: "SAP-C02 Retired: AWS SAP-C03 Dates and What Changed",
    description:
      "The last day to take AWS SAP-C02 was 16 November 2026. SAP-C03 has been the Solutions Architect Professional exam since 17 November 2026. Dates and what it means for you.",
    intro:
      "AWS has replaced SAP-C02 with SAP-C03 for the AWS Certified Solutions Architect: Professional certification. Here are the official dates and what they mean if you are studying now.",
    faq: [
      {
        q: "When did SAP-C02 retire?",
        a: "16 November 2026 was the last day to take SAP-C02. Exams from 17 November 2026 use SAP-C03.",
      },
      {
        q: "Is SAP-C03 a beta exam?",
        a: "No. AWS released SAP-C03 as a standard (non-beta) exam in all currently supported languages. Registration opened on 27 October 2026.",
      },
      {
        q: "Can I still use SAP-C02 study material?",
        a: "Only as background. Your exam now uses SAP-C03, so check every resource against the SAP-C03 exam guide from AWS.",
      },
    ],
  },
  {
    slug: "dva-c02-retirement",
    changeId: "aws-dva-c02",
    title: "AWS DVA-C02 Retirement: DVA-C03 Starts on 1 December 2026",
    seoTitle: "DVA-C02 Retirement: AWS DVA-C03 from 1 December 2026",
    description:
      "AWS DVA-C02 can be taken until 30 November 2026. DVA-C03 becomes the AWS Certified Developer: Associate exam on 1 December 2026. Dates and which version to study.",
    intro:
      "AWS replaces DVA-C02 with DVA-C03 for the AWS Certified Developer: Associate certification. Here are the official dates and how to pick the right version for your exam date.",
    faq: [
      {
        q: "When is the last day to take DVA-C02?",
        a: "30 November 2026. Exams taken from 1 December 2026 use DVA-C03.",
      },
      {
        q: "Is DVA-C03 a beta exam?",
        a: "No. AWS releases DVA-C03 as a standard (non-beta) exam in all currently supported languages. Registration opened on 27 October 2026.",
      },
      {
        q: "Which version should I study?",
        a: "The version that matches your booked date: DVA-C02 for exams on or before 30 November 2026, DVA-C03 for exams from 1 December 2026.",
      },
    ],
  },
  {
    slug: "mla-c01-retirement",
    changeId: "aws-mla-c01",
    title: "AWS MLA-C01 Retirement: MLA-C02 Beta and General Availability",
    seoTitle: "MLA-C01 Retirement: AWS MLA-C02 Beta and GA Date",
    description:
      "The English AWS MLA-C01 exam ended on 28 September 2026. MLA-C02 is in beta, with general availability given as 14 January 2027 in the AWS blog. All dates.",
    intro:
      "AWS replaces MLA-C01 with MLA-C02 for the AWS Certified Machine Learning Engineer: Associate certification. Here is where each language stands and what to book now.",
    faq: [
      {
        q: "Can I still take MLA-C01?",
        a: "Not in English: the last English exam date was 28 September 2026. MLA-C01 stays available in Japanese, Korean and Simplified Chinese until MLA-C02 reaches general availability.",
      },
      {
        q: "When does MLA-C02 become generally available?",
        a: "The AWS blog gives 14 January 2027. The AWS certification page still lists the date as TBD, so check it before you book.",
      },
      {
        q: "What can English candidates book now?",
        a: "Only the MLA-C02 beta, which AWS has delivered since 29 September 2026.",
      },
    ],
  },
  {
    slug: "az-500-retirement",
    changeId: "microsoft-az-500",
    title: "AZ-500 Retirement: SC-500 Replaces the Azure Security Engineer Exam",
    seoTitle: "AZ-500 Retired: SC-500 Replacement, Dates and What to Take",
    description:
      "Microsoft retired AZ-500 and the Azure Security Engineer Associate certification on 31 August 2026. SC-500 (Cloud and AI Security Engineer Associate) replaces it.",
    intro:
      "Microsoft has retired AZ-500 and replaced it with SC-500 and the new Cloud and AI Security Engineer Associate certification. Here are the dates and what they mean for you.",
    faq: [
      {
        q: "When did AZ-500 retire?",
        a: "On 31 August 2026, together with the Azure Security Engineer Associate certification and its renewal assessment.",
      },
      {
        q: "What replaces AZ-500?",
        a: "SC-500, the exam for the Microsoft Certified: Cloud and AI Security Engineer Associate certification. According to Microsoft Partner Center it has been available since 21 July 2026.",
      },
      {
        q: "Can I still renew my AZ-500 certification?",
        a: "No. The renewal assessment retired together with the exam, so the next step is SC-500.",
      },
    ],
  },
  {
    slug: "az-204-retirement",
    changeId: "microsoft-az-204",
    title: "AZ-204 Retirement: AI-200 Replaces the Azure Developer Exam",
    seoTitle: "AZ-204 Retired: AI-200 Is the New Azure Developer Exam",
    description:
      "Microsoft retired AZ-204 and the Azure Developer Associate certification on 31 July 2026 and names AI-200 (Azure AI Cloud Developer Associate) as the replacement.",
    intro:
      "Microsoft has retired AZ-204. Developers now take AI-200 for the Azure AI Cloud Developer Associate certification. Here are the dates and what they mean if you are studying now.",
    faq: [
      {
        q: "When did AZ-204 retire?",
        a: "On 31 July 2026, together with the Azure Developer Associate certification.",
      },
      {
        q: "What replaces AZ-204?",
        a: "AI-200: Developing AI Cloud Solutions on Azure, for the Microsoft Certified: Azure AI Cloud Developer Associate certification. According to Microsoft Partner Center it has been available since 9 July 2026.",
      },
      {
        q: "Can I still take or renew AZ-204?",
        a: "No. Developers starting now should prepare for AI-200.",
      },
    ],
  },
  {
    slug: "ai-102-retirement",
    changeId: "microsoft-ai-102",
    title: "AI-102 Retirement: AI-103 Replaces the Azure AI Engineer Exam",
    seoTitle: "AI-102 Retired: AI-103 Replacement and Key Dates",
    description:
      "Microsoft retired AI-102 and the Azure AI Engineer Associate certification on 30 June 2026. AI-103 (Azure AI Apps and Agents Developer Associate) replaces it.",
    intro:
      "Microsoft has retired AI-102 and replaced it with AI-103 and the Azure AI Apps and Agents Developer Associate certification. Here are the dates and what to prepare for.",
    faq: [
      {
        q: "When did AI-102 retire?",
        a: "On 30 June 2026, together with the Azure AI Engineer Associate certification.",
      },
      {
        q: "What replaces AI-102?",
        a: "AI-103: Developing AI Apps and Agents on Azure, for the Microsoft Certified: Azure AI Apps and Agents Developer Associate certification.",
      },
      {
        q: "Can I still take AI-102?",
        a: "No. Candidates for this role should prepare for AI-103.",
      },
    ],
  },
  {
    slug: "ai-900-retirement",
    changeId: "microsoft-ai-900",
    title: "AI-900 Retirement: AI-901 Is the New Azure AI Fundamentals Exam",
    seoTitle: "AI-900 Retired: AI-901 Is Azure AI Fundamentals Now",
    description:
      "Microsoft retired AI-900 on 30 June 2026. AI-901 is now the exam for the Azure AI Fundamentals certification. What changed and what to take.",
    intro:
      "The Azure AI Fundamentals certification now has a new exam: AI-901 replaced AI-900. Here is what that means if you are planning to take it.",
    faq: [
      {
        q: "When did AI-900 retire?",
        a: "On 30 June 2026.",
      },
      {
        q: "Which exam do I take for Azure AI Fundamentals now?",
        a: "AI-901: Microsoft Azure AI Fundamentals.",
      },
    ],
  },
  {
    slug: "dp-100-retirement",
    changeId: "microsoft-dp-100",
    title: "DP-100 Retirement: AI-300 Replaces the Azure Data Scientist Exam",
    seoTitle: "DP-100 Retired: AI-300 MLOps Engineer Replacement",
    description:
      "Microsoft retired DP-100 and the Azure Data Scientist Associate certification on 1 June 2026 and names AI-300 (MLOps Engineer Associate) as the replacement.",
    intro:
      "Microsoft has retired DP-100. The role now has a new exam, AI-300, for the Machine Learning Operations (MLOps) Engineer Associate certification. Here are the dates and what to prepare for.",
    faq: [
      {
        q: "When did DP-100 retire?",
        a: "On 1 June 2026, together with the Azure Data Scientist Associate certification.",
      },
      {
        q: "What replaces DP-100?",
        a: "AI-300: Operationalizing Machine Learning and Generative AI Solutions, for the Microsoft Certified: Machine Learning Operations Engineer Associate certification.",
      },
      {
        q: "Can I still take DP-100?",
        a: "No. Candidates for this role should prepare for AI-300.",
      },
    ],
  },
  {
    slug: "pl-400-retirement",
    changeId: "microsoft-pl-400",
    title: "PL-400 Retirement: AB-400 Is the Power Platform Developer Exam",
    seoTitle: "PL-400 Retired: AB-400 Power Platform Developer Exam",
    description:
      "Microsoft closed PL-400 registration on 16 October 2026 and retired the exam on 30 October 2026. AB-400 is now the Power Platform Developer Associate exam.",
    intro:
      "The Power Platform Developer Associate certification has moved from PL-400 to AB-400: Extending Microsoft Power Platform Solutions with Code and AI. Here are the dates and what they mean.",
    faq: [
      {
        q: "When did PL-400 retire?",
        a: "Registration closed on 16 October 2026. Candidates who had booked by then could take PL-400 until 30 October 2026.",
      },
      {
        q: "What replaces PL-400?",
        a: "AB-400: Extending Microsoft Power Platform Solutions with Code and AI, for the Microsoft Certified: Power Platform Developer Associate certification.",
      },
      {
        q: "In which languages is AB-400 offered?",
        a: "In English only.",
      },
    ],
  },
  {
    slug: "pl-200-retirement",
    changeId: "microsoft-pl-200",
    title: "PL-200 Retirement: AB-410 Replaces the Power Platform Functional Consultant",
    seoTitle: "PL-200 Retired: AB-410 Replacement and Key Dates",
    description:
      "Microsoft retired PL-200 on 31 August 2026 and names the Intelligent Applications Builder Associate (AB-410) as its replacement. Dates and what to take.",
    intro:
      "Microsoft has retired PL-200, the Power Platform Functional Consultant exam. The replacement is AB-410 for the Intelligent Applications Builder Associate certification.",
    faq: [
      {
        q: "When did PL-200 retire?",
        a: "On 31 August 2026 at 11:59 PM Central Standard Time.",
      },
      {
        q: "What replaces PL-200?",
        a: "Microsoft names the Microsoft Certified: Intelligent Applications Builder Associate (AB-410) as the replacement. According to Microsoft Partner Center it has been available since 30 July 2026.",
      },
      {
        q: "Can I still take PL-200?",
        a: "No. Candidates for this role should prepare for AB-410.",
      },
    ],
  },
  {
    slug: "az-800-az-801-retirement",
    changeId: "microsoft-az-800-az-801",
    title: "AZ-800 and AZ-801 Retirement: AZ-802 Is the Windows Server Exam",
    seoTitle: "AZ-800 & AZ-801 Retired: AZ-802 Windows Server Exam",
    description:
      "Microsoft retired AZ-800 and AZ-801 on 30 September 2026. The Windows Server Administrator Associate certification now needs only AZ-802.",
    intro:
      "The Windows Server certification used to need two exams. Since AZ-800 and AZ-801 retired, it needs only one: AZ-802, Administering Windows Server.",
    faq: [
      {
        q: "When did AZ-800 and AZ-801 retire?",
        a: "On 30 September 2026.",
      },
      {
        q: "What replaces AZ-800 and AZ-801?",
        a: "AZ-802: Administering Windows Server, for the Microsoft Certified: Windows Server Administrator Associate certification. You now need only this one exam.",
      },
      {
        q: "In which languages is AZ-802 offered?",
        a: "In English only.",
      },
    ],
  },
  {
    slug: "cobit-2019-vs-cobit-7-foundation",
    changeId: "isaca-cobit-2019-foundation",
    title: "COBIT 2019 vs COBIT 7 Foundation: Dates and Which Exam to Take",
    seoTitle: "COBIT 2019 vs COBIT 7 Foundation: Dates and Which to Take",
    description:
      "ISACA replaced the COBIT 2019 Foundations Certificate with COBIT 7 Foundation on 19 November 2026. The COBIT 2019 exam stays on sale until 30 June 2027.",
    intro:
      "ISACA has introduced the COBIT 7 Foundation Certificate. The COBIT 2019 Foundation exam is still on sale for a while. Here are the dates and how to choose.",
    faq: [
      {
        q: "When did COBIT 7 Foundation replace COBIT 2019?",
        a: "On 19 November 2026. Since then you can book the COBIT 7 Foundation Certificate.",
      },
      {
        q: "Until when can I buy the COBIT 2019 Foundation exam?",
        a: "Until 30 June 2027, including the exam prep.",
      },
      {
        q: "Should I take COBIT 2019 or COBIT 7 Foundation?",
        a: "If you are already well prepared for COBIT 2019, you can still buy that exam until 30 June 2027. If you are starting now, prepare for COBIT 7 Foundation.",
      },
    ],
  },
  {
    slug: "itsm-foundation-v4-vs-v5",
    changeId: "peoplecert-itsm-foundation-v4",
    title: "ITSM Foundation Version 4 vs Version 5: Sunset Dates and Which to Take",
    seoTitle: "ITSM Foundation V4 vs V5: Sunset Date 2027 and Bridge Exam",
    description:
      "PeopleCert plans to sunset all version 4 IT service management modules and the Foundation Bridge (Version 5) exam on 31 December 2027. What it means for you.",
    intro:
      "PeopleCert has released version 5 of its IT service management Foundation and plans to sunset version 4. Here is the timeline and what to do whether you are new or already certified.",
    faq: [
      {
        q: "When does ITSM Foundation version 4 retire?",
        a: "PeopleCert plans to sunset all version 4 modules, including the Foundation exam, on 31 December 2027. Voucher validity dates are still to be announced.",
      },
      {
        q: "I am new. Should I take version 4 or version 5?",
        a: "Version 4 stays available until the planned sunset, but newcomers should consider version 5, because it is the version that continues.",
      },
      {
        q: "I hold version 4. How do I upgrade?",
        a: "With the Foundation Bridge (Version 5) exam. It also retires on 31 December 2027, so you need to pass it by then.",
      },
    ],
  },
  {
    slug: "istqb-ct-ai-v1-vs-v2",
    changeId: "istqb-ct-ai-v1-0",
    title: "ISTQB CT-AI v1.0 vs v2.0: Retirement Dates and What Changed",
    seoTitle: "ISTQB CT-AI v2.0: v1.0 Retirement Dates and Changes",
    description:
      "ISTQB released CT-AI v2.0 in April 2026. CT-AI v1.0 exams end on 21 April 2027 in English and 21 October 2027 in other languages. What changed and what to take.",
    intro:
      "ISTQB has released version 2.0 of the Certified Tester AI Testing syllabus. Version 1.0 will be phased out in 2027. Here are the dates and the main differences.",
    faq: [
      {
        q: "Until when can I take CT-AI v1.0?",
        a: "Until 21 April 2027 in English and 21 October 2027 in other languages, including retakes.",
      },
      {
        q: "What changed in CT-AI v2.0?",
        a: "The AI-for-testing content was removed and testing of generative AI and large language models was added.",
      },
      {
        q: "Is there a bridging exam from v1.0 to v2.0?",
        a: "No. Prepare for the version you will actually book.",
      },
    ],
  },
  {
    slug: "ccna-200-301-v2",
    changeId: "cisco-200-301",
    title: "CCNA 200-301 v2.0: What Changes on 3 February 2027",
    seoTitle: "CCNA 200-301 v2.0: Change Date and Which Version to Study",
    description:
      "Cisco replaces CCNA 200-301 v1.1 with v2.0. The last day to test on v1.1 is 2 February 2027; v2.0 starts on 3 February 2027. The exam number stays the same.",
    intro:
      "Cisco is moving the CCNA to version 2.0 of the exam topics, but the exam number 200-301 stays the same. That makes it easy to study for the wrong version. Here is how to get it right.",
    faq: [
      {
        q: "When does CCNA v2.0 start?",
        a: "On 3 February 2027. The last day to test on CCNA v1.1 is 2 February 2027.",
      },
      {
        q: "Does the exam code change?",
        a: "No. Both versions use the exam number 200-301. What changes is the version of the exam topics.",
      },
      {
        q: "Which version should I study?",
        a: "The one that matches your exam date: the v1.1 exam topics for exams on or before 2 February 2027, the v2.0 exam topics from 3 February 2027.",
      },
    ],
  },
];

export const examChangeDetailBase = "/exam-changes";

export function examChangeDetailPath(slug: string): string {
  return `${examChangeDetailBase}/${slug}`;
}

export function getDetailPageForChange(changeId: string): ExamChangeDetailPage | undefined {
  return examChangeDetailPages.find((p) => p.changeId === changeId);
}
