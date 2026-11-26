import type { ExamGuide } from "@/config/types";

/**
 * CompTIA Network+ (N10-009) exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts.
 */
export const comptiaNetworkPlusN10009Guide: ExamGuide = {
  slug: "comptia-network-plus-n10-009",
  summary:
    "CompTIA Network+ V9 (N10-009) has a maximum of 90 multiple-choice and performance-based questions in 90 minutes. You pass with 720 on a scale of 100 to 900. Network troubleshooting (24%) and networking concepts (23%) are the largest domains.",
  whoFor: [
    "Junior network administrators and network support technicians",
    "IT support staff moving into networking, often after A+",
    "Candidates preparing for Security+ who want a solid networking base",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "N10-009 has up to 90 questions in 90 minutes, including performance-based questions where you configure or troubleshoot in a simulation. You need 720 on a scale of 100 to 900.",
        "There are no required prerequisites. CompTIA recommends A+ and 9 to 12 months of hands-on experience as a junior network administrator or support technician.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Troubleshooting is 24%, networking concepts 23%, implementation 20%, operations 19% and security 14%.",
        "Know the OSI model, ports and protocols, IP addressing and subnetting, and a structured troubleshooting method. Subnetting and port numbers come up again and again, so practise them until they are automatic.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Get the N10-009 objectives", body: "Use the official V9 objectives as your checklist and check your book or course is for N10-009." },
        { title: "Drill subnetting and ports", body: "Practise a few subnetting problems and port questions every day." },
        { title: "Build a small lab", body: "Use a simulator or real equipment to configure VLANs, routing and basic services." },
        { title: "Practise troubleshooting", body: "Follow CompTIA's troubleshooting method on realistic problems; it is the largest domain." },
        { title: "Take timed practice exams", body: "Answer full practice exams in 90 minutes and leave time for performance-based items." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using material for the older N10-008 exam.",
        "Memorising port numbers without knowing the protocols behind them.",
        "Spending too long on one performance-based question.",
      ],
    },
  ],
  faq: [
    { question: "How many questions does N10-009 have?", answer: "A maximum of 90 multiple-choice and performance-based questions in 90 minutes." },
    { question: "What is the passing score?", answer: "720 on a scale of 100 to 900." },
    {
      question: "What are the Network+ domains?",
      answer: "Networking concepts 23%, network implementation 20%, network operations 19%, network security 14% and network troubleshooting 24%.",
    },
    { question: "Do I need A+ first?", answer: "No. CompTIA recommends A+ and some hands-on networking experience, but neither is required." },
    {
      question: "Are CertRamp's Network+ questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published CompTIA objectives. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CompTIA Network+ N10-009 Exam Guide 2026",
    description:
      "Prepare for CompTIA Network+ (N10-009): up to 90 questions in 90 minutes, 720 to pass, the five domains with weights and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
