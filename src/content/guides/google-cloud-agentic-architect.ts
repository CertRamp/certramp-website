import type { ExamGuide } from "@/config/types";

/**
 * Google Cloud Professional Agentic Architect exam guide. Exam facts come from
 * the verified `exam` record in src/config/certifications.ts. This file holds
 * CertRamp's preparation advice.
 */
export const googleCloudAgenticArchitectGuide: ExamGuide = {
  slug: "google-cloud-agentic-architect",
  summary:
    "The Google Cloud Professional Agentic Architect certification tests whether you can design, build, evaluate, deploy and secure AI agents on Google Cloud, from low-code tools and coding agents to custom agents built with the Agent Development Kit. The beta exam has about 80 multiple-choice questions in 3 hours, delivered by Pearson online or at a test centre, and passing candidates must then complete hands-on labs in Google Skills. Google says the GA exam launches in mid-November 2026.",
  whoFor: [
    "Developers and architects who build agentic solutions on Google Cloud",
    "Engineers moving from classic generative AI apps to multi-agent systems with ADK and Agent Runtime",
    "Cloud architects who need to secure and govern agents, tools and MCP servers in production",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What the Professional Agentic Architect exam tests",
      paragraphs: [
        "Google lists five skill areas: build agents using low-code tools, use coding agents for application development, develop custom agents, evaluate and deploy agentic workflows, and secure and govern agentic workflows. Google describes the certified role as a technical practitioner who designs and manages autonomous, AI-driven agentic workflows while considering reliability, performance, cost, security and scalability.",
        "In practice that means knowing when a low-code tool such as Agent Studio or Gemini Enterprise Workflow Builder is enough and when you need custom code with the Agent Development Kit (ADK); how to structure multi-agent systems; how to evaluate tool use and not only the final answer; how to run agents on Agent Runtime with Sessions and Memory Bank; and how to control agents with Agent Identity, Agent Registry, Agent Gateway and Model Armor.",
      ],
    },
    {
      id: "how-it-is-structured",
      heading: "How the certification is structured",
      paragraphs: [
        "Certification has two parts. Part 1 is a proctored multiple-choice exam delivered by Pearson that assesses conceptual knowledge, system design choices and architectural standards. If you pass it, you receive instructions in CM Connect to take the separate PAA hands-on labs in Google Skills, which validate your execution and coding ability. For the beta, Google says passing candidates must complete the labs by 31 December 2026.",
        "Google has renamed much of the platform, and the exam outline uses the new names. Vertex AI is now Gemini Enterprise Agent Platform (Agent Platform for short), Vertex AI Agent Engine is now Agent Runtime, Vertex AI Studio is now Agent Studio, and Agent Engine Sessions and Memory Bank are now Agent Platform Sessions and Memory Bank. Older courses and blog posts still use the Vertex AI names, so map them as you study.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the official exam guide",
          body: "Download the Professional Agentic Architect exam guide from the certification page and mark every item as known, unsure or new. Google notes that its training path does not cover every topic in the guide, so the guide, not the course list, defines your scope.",
        },
        {
          title: "Build one agent three ways",
          body: "Take a simple use case and build it in Agent Studio, as a Workflow Builder agent in Gemini Enterprise and in code with ADK. Seeing the same problem in each tool makes the 'which tool fits?' questions much easier.",
        },
        {
          title: "Go deep on ADK",
          body: "Practise LLM agents, the Sequential, Parallel and Loop workflow agents, agent-as-a-tool versus sub-agent delegation, session state, MCP tools and callbacks. Know how a LoopAgent stops and what a before_tool_callback can block.",
        },
        {
          title: "Deploy, evaluate and observe",
          body: "Deploy an ADK agent to Agent Runtime, add Sessions and Memory Bank, run a multi-turn evaluation of task success and tool use, and follow a request through Cloud Trace and Cloud Logging. Use the free tier and new-customer credits Google offers, and delete resources afterwards.",
        },
        {
          title: "Work through security and governance",
          body: "Study Agent Identity, Agent Registry, Agent Gateway, IAM policies and Model Armor templates, plus ADK guardrails such as plugins and sandboxed code execution. Be able to explain which layer stops which risk.",
        },
        {
          title: "Practise under time pressure, then book",
          body: "Take timed practice sets and read every explanation. Book Part 1 once your scores are stable, and leave time for the hands-on labs that follow.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying only with Vertex AI-era material. The current documentation uses Gemini Enterprise Agent Platform names such as Agent Runtime and Agent Studio.",
        "Treating the multiple-choice exam as the finish line. You only become certified after the hands-on labs in Google Skills, so practise writing and deploying agents, not just reading about them.",
        "Relying on prompts for control. Instructions in a system prompt are not enforcement; deterministic workflow agents, callbacks, IAM and gateway policies are.",
        "Evaluating only final answers. Agent evaluation also looks at whether the agent used the right tools in the right way across a multi-turn conversation.",
        "Confusing Sessions with Memory Bank. Sessions hold the history of one interaction; Memory Bank keeps distilled facts available across sessions.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the Professional Agentic Architect exam and how many questions does it have?",
      answer:
        "Google states that the beta exam lasts 3 hours and has about 80 multiple-choice questions. Google has not published separate figures for the GA exam on the certification page, so check it again when GA registration opens in mid-November 2026.",
    },
    {
      question: "How much does the exam cost?",
      answer:
        "Google lists a beta registration fee of USD 120, a 40% discount on the retail price of USD 200, plus tax where applicable. Vouchers are accepted for beta attempts, and beta attempts do not count towards the total number of allowed exam attempts.",
    },
    {
      question: "Is the exam delivered by Kryterion?",
      answer:
        "No. The certification page states that Part 1 is delivered by Pearson, online-proctored or onsite-proctored. Part 2 is a set of hands-on labs in Google Skills.",
    },
    {
      question: "How long is the certification valid and are there prerequisites?",
      answer:
        "Google lists a validity period of one year and no prerequisites. It recommends 3+ years of hands-on experience building, testing, deploying and managing cloud solutions, including 1+ years building agentic solutions on Google Cloud.",
    },
    {
      question: "Are CertRamp's Professional Agentic Architect questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Google's published skill areas and current Google Cloud documentation. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "Google Cloud Agentic Architect Exam Guide 2026 (PAA)",
    description:
      "Professional Agentic Architect guide: ~80 questions in 3 hours (beta), Pearson delivery, hands-on labs, the five skill areas and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
