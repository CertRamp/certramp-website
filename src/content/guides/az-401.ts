import type { ExamGuide } from "@/config/types";

/**
 * Microsoft AZ-401 exam guide. Exam facts come from the verified `exam` record
 * in src/config/certifications.ts. AZ-401 was in beta when the facts were read.
 */
export const az401Guide: ExamGuide = {
  slug: "az-401",
  summary:
    "AZ-401: Designing and Implementing Microsoft Agentic DevOps Solutions is the successor of AZ-400. It was in beta when we last checked, with general availability announced for December 2026, and you pass with 700 or more. For the Agentic DevOps Engineer Expert certification you also need GH-300 or AZ-104.",
  whoFor: [
    "DevOps engineers who want the new Agentic DevOps Engineer Expert certification",
    "AZ-400 candidates whose exam date falls after AZ-400 retires on 1 February 2027",
    "Teams bringing AI agents and GitHub Copilot into their delivery workflow",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AZ-401 needs a scaled score of 700 or more. When we read the official sources it was a beta exam, with general availability announced for December 2026. Microsoft had not stated the duration or the number of questions.",
        "Passing AZ-401 alone is not enough for the Agentic DevOps Engineer Expert certification: you must also pass GH-300 (GitHub Copilot) or AZ-104 (Azure Administrator).",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Build and release pipelines are the largest area at 35–40%. Processes and communications, security and compliance, and instrumentation are 15–20% each, and source control strategy is 10–15%.",
        "Compared with AZ-400, pipelines carry less weight and processes, security and instrumentation carry more. Expect AI agents in the delivery workflow to appear across these areas, not only in one domain.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Read the AZ-401 study guide", body: "Use Microsoft Learn's study guide as your checklist and check it again before booking, because beta exams can still change." },
        { title: "Plan the second exam", body: "Decide early whether you will add GH-300 or AZ-104 for the Expert certification." },
        { title: "Practise agentic workflows", body: "Use GitHub Copilot and AI agents in a real repository: code review, pipeline changes and security checks." },
        { title: "Do not drop pipeline skills", body: "Pipelines are still the largest area. Build multi-stage pipelines with approvals and deployment strategies." },
        { title: "Take timed practice exams", body: "Answer full practice exams and review every explanation." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Using only AZ-400 material: the weights and the agentic content differ.",
        "Forgetting the second exam needed for the Expert certification.",
        "Not checking the study guide again before booking while the exam is new.",
      ],
    },
  ],
  faq: [
    { question: "What is the AZ-401 passing score?", answer: "700 or greater (scaled score)." },
    {
      question: "Is AZ-401 the successor of AZ-400?",
      answer: "Yes. AZ-400 and the DevOps Engineer Expert certification retire on 1 February 2027, and Microsoft names AZ-401 as the successor.",
    },
    {
      question: "What else do I need for the Agentic DevOps Engineer Expert certification?",
      answer: "You must also pass GH-300 (GitHub Copilot) or AZ-104 (Microsoft Azure Administrator).",
    },
    {
      question: "Is AZ-401 still in beta?",
      answer: "It was in beta when we last checked, with general availability announced for December 2026. Check the Microsoft Learn exam page for the current status.",
    },
    {
      question: "Are CertRamp's AZ-401 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AZ-401 Exam Guide: Agentic DevOps, Skills & Study Plan",
    description:
      "Prepare for AZ-401, the AZ-400 successor: skills measured with weights, 700 to pass, the GH-300 or AZ-104 requirement and a five-step study plan.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
