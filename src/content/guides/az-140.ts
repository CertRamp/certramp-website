import type { ExamGuide } from "@/config/types";

/**
 * Microsoft AZ-140 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts.
 */
export const az140Guide: ExamGuide = {
  slug: "az-140",
  summary:
    "AZ-140: Configuring and Operating Microsoft Azure Virtual Desktop is the exam for the Azure Virtual Desktop Specialty certification. It lasts 100 minutes and you pass with 700 or more. Planning and implementing the AVD infrastructure dominates at 40–45%.",
  whoFor: [
    "Desktop and server administrators who run Azure Virtual Desktop",
    "Engineers migrating on-premises VDI to Azure",
    "Consultants who design remote desktop and app solutions",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AZ-140 lasts 100 minutes and needs 700 or more. It is scheduled through Pearson VUE and offered in seven languages, including English and German. The skills measured were updated on 20 July 2026.",
        "There are no formal prerequisites. Microsoft expects experience with compute, networking, identity, storage and resiliency. You renew every 12 months with a free online assessment.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Plan and implement an AVD infrastructure is 40–45%, user environments and apps 20–25%, identity and security 15–20%, and monitoring and maintenance 10–15%.",
        "Know host pools, session hosts and images, networking and storage for user profiles, identity integration, app delivery and scaling. The July 2026 update made minor changes to identity integration, security, FSLogix, user experience and session host apps.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the AZ-140 study guide", body: "Use the skills measured as of 20 July 2026 as your checklist." },
        { title: "Deploy AVD in a lab", body: "Create a host pool, session hosts, a workspace and app groups in a test subscription." },
        { title: "Configure user profiles", body: "Set up FSLogix profile containers with suitable storage." },
        { title: "Practise scaling and monitoring", body: "Configure autoscale and use monitoring tools to troubleshoot sessions." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 100 minutes and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Underestimating the infrastructure area, which is almost half the exam.",
        "Never deploying AVD hands-on.",
        "Using material from before the July 2026 update.",
      ],
    },
  ],
  faq: [
    { question: "How long is AZ-140 and what is the passing score?", answer: "100 minutes. You need 700 or greater." },
    { question: "What is the largest skills area?", answer: "Plan and implement an Azure Virtual Desktop infrastructure with 40–45%." },
    { question: "Is AZ-140 available in German?", answer: "Yes. It is offered in seven languages, including English and German." },
    {
      question: "Are CertRamp's AZ-140 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AZ-140 Exam Guide 2026: Azure Virtual Desktop Skills & Plan",
    description:
      "Prepare for AZ-140 Azure Virtual Desktop Specialty: 100 minutes, 700 to pass, skills measured as of July 2026 with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
