import type { ExamGuide } from "@/config/types";

/**
 * GH-300 (GitHub Copilot) exam guide. Exam facts come from the verified `exam`
 * record in src/config/certifications.ts. This file holds CertRamp's
 * preparation advice.
 */
export const githubCopilotGh300Guide: ExamGuide = {
  slug: "github-copilot-gh-300",
  summary:
    "GH-300 is the exam for the GitHub Copilot certification. It checks that you can use Copilot responsibly and productively across the IDE, the CLI and github.com, understand how it handles data, write effective prompts, and configure privacy settings, content exclusions and safeguards. You have 100 minutes, you need a scaled score of 700 or greater to pass, and GitHub certifications are valid for two years.",
  whoFor: [
    "Developers who use GitHub Copilot daily and want to prove they use it well and safely",
    "Team leads and platform engineers who roll out Copilot and set its organization policies",
    "DevOps, security and enablement staff who answer questions about Copilot data handling and safeguards",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What GH-300 actually tests",
      paragraphs: [
        "The Microsoft Learn study guide lists six skill areas (skills measured as of 7 August 2026): Use GitHub Copilot features (25 to 30%), Use GitHub Copilot responsibly (15 to 20%), and four areas at 10 to 15% each: Understand GitHub Copilot data and architecture, Apply prompt engineering and context crafting, Improve developer productivity with GitHub Copilot, and Configure privacy, content exclusions, and safeguards.",
        "The features area is the broadest. It covers Copilot in the IDE (inline suggestions, chat and agent mode), Copilot CLI (installation, key commands, interactive sessions, scripts and file management), agent mode, Copilot Edits, MCP, agent sessions and sub-agents, Copilot code review, Spaces, Spark, pull request summaries, instruction files and prompt files, and organization-wide policies, audit log events and subscription management through the REST API.",
        "The other areas test judgement as much as recall: the risks and limitations of generative AI and why output must be validated, how prompts are built and filtered on their way to the model, zero-shot and few-shot prompting, using Copilot for tests, refactoring, documentation and legacy code, and configuring content exclusions and the filter for suggestions matching public code. The study guide notes that most questions cover generally available features, although commonly used preview features may appear.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "You have 100 minutes for the exam, and the passing score is 700 or greater on a scaled score. The exam is proctored and may include interactive components; Microsoft offers an exam sandbox so you can try the interface first. Microsoft does not publish the number of questions on the official pages.",
        "GH-300 is available in English, Spanish, Portuguese (Brazil), Korean and Japanese. There are no formal prerequisites, but GitHub expects familiarity with GitHub fundamentals and experience with one or more programming languages. If you fail, the certification page says you can retake the exam 24 hours after the first attempt.",
        "GitHub certifications are valid for two years. GitHub is moving to Microsoft's recertification process, which is meant to let you maintain the certification without retaking the full exam; check the certification page for the current status before your expiry date.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the study guide",
          body: "Go through every bullet in the Microsoft Learn GH-300 study guide and mark it as known, unsure or new. Features carry the most weight, but responsible use alone is worth up to a fifth of the exam.",
        },
        {
          title: "Work through the official learning paths",
          body: "Microsoft lists GitHub Copilot Fundamentals Part 1 and Part 2 as training. Add the modules on responsible AI, prompt engineering, developer use cases and unit testing with Copilot.",
        },
        {
          title: "Use every surface hands-on",
          body: "Try inline suggestions, Ask, Plan and Agent in your IDE, then install Copilot CLI and use it interactively and with -p. Practise tool approval options such as --allow-tool and --deny-tool, and request a Copilot code review on a pull request.",
        },
        {
          title: "Set up the admin side",
          body: "If you can, use a test organization to configure Copilot policies, content exclusions and the public code filter. Read the audit log documentation and the REST API endpoints for seat management, including what pending cancellation means.",
        },
        {
          title: "Learn the data flow and the safeguards",
          body: "Be able to walk through how a prompt is built from context, filtered by the proxy and content filters, sent to the model and post-processed. Know what content exclusion does and does not protect, and how code referencing works.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice sets, read every explanation and revisit the documentation for anything you guessed. Book the exam once you pass consistently with a margin.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Learning only the IDE. The study guide gives Copilot CLI its own objective with installation, commands, sessions and scripting.",
        "Treating Copilot output as trusted. GitHub's responsible use guidance is clear that suggestions must be reviewed and tested, especially security-sensitive code.",
        "Assuming content exclusion is an access control. GitHub states it is not a substitute for operating system permissions, and changes can take up to 30 minutes to reach an open IDE.",
        "Mixing up customisation files. Repository instructions live in .github/copilot-instructions.md, path-specific instructions in .github/instructions/*.instructions.md with applyTo, and AGENTS.md files give agents project context.",
        "Skipping administration. Organization policies, audit log events and seat management through the REST API are explicit objectives.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the GH-300 exam and what is the passing score?",
      answer:
        "You have 100 minutes to complete the exam. The passing score is 700 or greater on a scaled score. Microsoft does not publish the number of questions on the official pages.",
    },
    {
      question: "Which languages is GH-300 available in?",
      answer:
        "The certification page lists English, Spanish, Portuguese (Brazil), Korean and Japanese.",
    },
    {
      question: "Are there prerequisites for the GitHub Copilot certification?",
      answer:
        "There are no formal prerequisites. GitHub expects candidates to be familiar with GitHub fundamentals and to have experience with one or more programming languages.",
    },
    {
      question: "How long is the certification valid?",
      answer:
        "GitHub certifications are valid for two years. GitHub is transitioning to Microsoft's recertification process so that candidates can maintain certifications without retaking the full exam.",
    },
    {
      question: "Are CertRamp's GH-300 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the skills measured in the Microsoft Learn study guide and GitHub documentation. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "GH-300 GitHub Copilot Exam Guide 2026: Skills, Format & Study Plan",
    description:
      "GH-300 guide: 100 minutes, 700 to pass, the six skill areas of the Aug 2026 outline with weights, and a six-step study plan for the GitHub Copilot certification.",
  },
  published: "2026-11-11",
  updated: "2026-11-11",
};
