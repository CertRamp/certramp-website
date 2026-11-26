import type { ExamGuide } from "@/config/types";

/**
 * CompTIA CySA+ V4 (CS0-004) exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts and the comptia-cs0-003 tracker entry.
 */
export const comptiaCysaPlusCs0004Guide: ExamGuide = {
  slug: "comptia-cysa-plus-cs0-004",
  summary:
    "CompTIA CySA+ V4 (CS0-004) launched on 23 June 2026 and replaces CS0-003, which retires in English on 22 December 2026. The exam has a maximum of 85 multiple-choice and performance-based questions in 165 minutes, and you pass with 750 on a scale of 100 to 900. Security Operations is the largest domain at 34%.",
  whoFor: [
    "SOC analysts, threat analysts and vulnerability analysts",
    "Security+ holders moving into a blue-team analyst role",
    "Candidates who had planned to take CS0-003",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "CS0-004 has up to 85 questions in 165 minutes, a mix of multiple-choice and performance-based questions where you analyse logs, alerts or scan results in a simulation. You need 750 on a scale of 100 to 900. The exam is offered in English.",
        "There are no required prerequisites. CompTIA recommends about four years in a SOC analyst or vulnerability analyst role.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Security Operations is 34%, Vulnerability Management 26%, Incident Response and Management 24% and Reporting and Communication 16%.",
        "CySA+ is about analysis: reading log entries, prioritising vulnerabilities, choosing the next incident response step and communicating findings. Practise interpreting real tool output rather than memorising tool names.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Get the CS0-004 objectives", body: "Use the V4 objectives (document version 2.0) and make sure your material is for CS0-004, not CS0-003." },
        { title: "Practise log and alert analysis", body: "Work through sample logs, packet captures and alerts until you can spot indicators quickly." },
        { title: "Prioritise vulnerabilities", body: "Practise ranking scan findings by risk, exposure and business impact." },
        { title: "Walk through incidents", body: "For realistic scenarios, decide the right response phase and the next step, then write a short report." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 165 minutes and leave time for performance-based items." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Preparing with CS0-003 material for the CS0-004 exam.",
        "Memorising tools without practising how to read their output.",
        "Skipping reporting and communication, which is 16% of the exam.",
      ],
    },
  ],
  faq: [
    { question: "When did CS0-004 launch?", answer: "On 23 June 2026. CS0-003 retires in English on 22 December 2026." },
    { question: "How many questions does CS0-004 have?", answer: "A maximum of 85 multiple-choice and performance-based questions in 165 minutes." },
    { question: "What is the passing score?", answer: "750 on a scale of 100 to 900." },
    {
      question: "What are the CS0-004 domains?",
      answer: "Security Operations 34%, Vulnerability Management 26%, Incident Response and Management 24%, Reporting and Communication 16%.",
    },
    {
      question: "Are CertRamp's CySA+ questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published CompTIA objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CompTIA CySA+ CS0-004 Exam Guide 2026: V4 Domains & Plan",
    description:
      "Prepare for CompTIA CySA+ V4 (CS0-004): up to 85 questions in 165 minutes, 750 to pass, the four domains with weights and how it replaces CS0-003.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
