import type { ExamGuide } from "@/config/types";

/**
 * Microsoft AZ-802 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts and the microsoft-az-800-az-801 tracker entry.
 */
export const az802Guide: ExamGuide = {
  slug: "az-802",
  summary:
    "AZ-802: Administering Windows Server is now the only exam for the Windows Server Administrator Associate certification, after AZ-800 and AZ-801 retired on 30 September 2026. It lasts 120 minutes, you pass with 700 or more, and it is offered in English only. Deploying and managing AD DS is the largest area at 20–25%.",
  whoFor: [
    "Windows Server administrators in on-premises and hybrid environments",
    "Candidates who had planned to take AZ-800 and AZ-801",
    "Administrators bringing servers into Azure with Azure Arc",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AZ-802 lasts 120 minutes and needs a scaled score of 700 or more. It is a proctored exam that may include interactive components, and it is offered in English only.",
        "Microsoft expects experience with Windows Admin Center, Hyper-V, PowerShell, Azure Arc, Azure Monitor, Azure Update Manager and Microsoft Defender for Cloud, plus familiarity with AD DS.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "AD DS is 20–25%. Storage and file services and monitoring and troubleshooting are 15–20% each. Hybrid management, virtual machines, networking and security are 10–15% each.",
        "Because one exam now covers what used to take two, expect breadth: core server administration and hybrid tools side by side.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the AZ-802 study guide", body: "Use Microsoft Learn's skills measured as your checklist; older AZ-800/801 notes only help where they match." },
        { title: "Build a lab", body: "Set up a small domain with Hyper-V virtual machines, file services and DNS/DHCP." },
        { title: "Add the hybrid layer", body: "Connect a server to Azure with Azure Arc and practise monitoring, updates and Defender for Cloud." },
        { title: "Practise PowerShell", body: "Many tasks are faster in PowerShell, and the exam expects you to know it." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 120 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Preparing only with AZ-800 or AZ-801 material.",
        "Ignoring the hybrid Azure tools.",
        "Skipping monitoring and troubleshooting, which is up to a fifth of the exam.",
      ],
    },
  ],
  faq: [
    { question: "Does AZ-802 replace AZ-800 and AZ-801?", answer: "Yes. AZ-800 and AZ-801 retired on 30 September 2026; the Windows Server Administrator Associate certification now requires only AZ-802." },
    { question: "How long is AZ-802 and what is the passing score?", answer: "120 minutes. You need 700 or greater." },
    { question: "In which languages is AZ-802 offered?", answer: "English only." },
    { question: "What is the largest skills area?", answer: "Deploy and manage AD DS with 20–25%." },
    {
      question: "Are CertRamp's AZ-802 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AZ-802 Exam Guide 2026: Windows Server Skills & Study Plan",
    description:
      "Prepare for AZ-802 Administering Windows Server, the AZ-800/801 replacement: 120 minutes, 700 to pass, skills areas with weights and a study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
