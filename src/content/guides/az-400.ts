import type { ExamGuide } from "@/config/types";

/**
 * Microsoft AZ-400 exam guide. Exam facts come from the verified `exam` record
 * in src/config/certifications.ts (including the 1 February 2027 retirement).
 */
export const az400Guide: ExamGuide = {
  slug: "az-400",
  summary:
    "AZ-400: Designing and Implementing Microsoft DevOps Solutions is the exam for the DevOps Engineer Expert certification. You pass with 700 or more. Microsoft retires the exam, the certification and renewals on 1 February 2027, with AZ-401 as the successor, so book AZ-400 only if you can take it before then.",
  whoFor: [
    "DevOps engineers who build pipelines with Azure DevOps or GitHub",
    "Administrators and developers who need the DevOps Engineer Expert certification before 1 February 2027",
    "Candidates deciding between AZ-400 and its successor AZ-401",
  ],
  sections: [
    {
      id: "exam-format",
      heading: "How the exam works",
      paragraphs: [
        "AZ-400 needs a scaled score of 700 or more and is offered in ten languages, including English and German. The skills measured were last updated on 27 July 2026.",
        "The exam, the DevOps Engineer Expert certification and its renewals retire on 1 February 2027. Microsoft names AZ-401 (Agentic DevOps) as the successor. If your exam date is later, prepare for AZ-401 instead.",
      ],
    },
    {
      id: "where-to-focus",
      heading: "Where to focus",
      paragraphs: [
        "Build and release pipelines dominate the exam at 50–55%. The other areas are processes and communications (10–15%), source control strategy (10–15%), security and compliance (10–15%) and instrumentation (5–10%).",
        "Questions are scenario-based: a team, a repository and a requirement. Know how to design pipelines with stages, approvals, environments, artifacts and deployment strategies, and how to fit security scanning and secrets management into them.",
      ],
    },
    {
      id: "study-plan",
      heading: "A five-step preparation plan",
      steps: [
        { title: "Check your timeline", body: "If you cannot take AZ-400 before 1 February 2027, switch to AZ-401 now." },
        { title: "Read the study guide", body: "Use Microsoft Learn's skills measured as of 27 July 2026 as your checklist." },
        { title: "Build real pipelines", body: "Create multi-stage YAML pipelines in Azure DevOps and workflows in GitHub Actions, with approvals, environments and a deployment strategy." },
        { title: "Spend half your time on pipelines", body: "The pipeline domain is more than half the exam. Cover the smaller domains, but weight your time accordingly." },
        { title: "Take timed practice exams", body: "Answer full practice exams and review every explanation, especially for pipeline design scenarios." },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Booking AZ-400 for a date after the retirement on 1 February 2027.",
        "Learning only one tool when questions cover both Azure DevOps and GitHub.",
        "Underestimating how much of the exam is about build and release pipelines.",
        "Ignoring security and compliance steps inside the pipeline.",
      ],
    },
  ],
  faq: [
    { question: "What is the AZ-400 passing score?", answer: "700 or greater (scaled score)." },
    {
      question: "When does AZ-400 retire?",
      answer: "On 1 February 2027, together with the DevOps Engineer Expert certification and its renewals. The successor is AZ-401.",
    },
    {
      question: "What is the largest skills area?",
      answer: "Design and implement build and release pipelines with 50–55% of the exam.",
    },
    { question: "Is AZ-400 available in German?", answer: "Yes. It is offered in ten languages, including English and German." },
    {
      question: "Are CertRamp's AZ-400 questions real exam questions?",
      answer: "No. All CertRamp questions are original practice questions written against the published Microsoft skills outline. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AZ-400 Exam Guide 2026: Skills, Retirement Date & Study Plan",
    description:
      "Prepare for AZ-400 DevOps Engineer Expert: skills measured with weights, 700 to pass, the retirement on 1 February 2027 and when to switch to AZ-401.",
  },
  published: "2026-11-26",
  updated: "2026-11-26",
};
