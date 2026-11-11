import type { ExamGuide } from "@/config/types";

/**
 * Claude Certified Developer: Foundations (CCDV-F) exam guide. Exam facts come
 * from the verified `exam` record in src/config/certifications.ts (official
 * CCDV-F Exam Guide v1.0 and the Anthropic Partner Academy pages). Claude
 * product behaviour is taken from platform.claude.com/docs and code.claude.com.
 * This file holds CertRamp's preparation advice.
 */
export const claudeCertifiedDeveloperCcdvFGuide: ExamGuide = {
  slug: "claude-certified-developer-ccdv-f",
  summary:
    "Claude Certified Developer: Foundations (CCDV-F) is Anthropic's credential for engineers who build, integrate and ship applications, agents and workflows on Claude. The closed-book exam has 53 multiple-choice and multiple-response items in 120 minutes, and you pass with a scaled score of 720 on a 100 to 1,000 scale. Applications and Integration alone carries 33.1% of the weight.",
  whoFor: [
    "Software engineers, AI/ML engineers and technical leads who build on the Claude API, the Claude Agent SDK, Claude Code and MCP",
    "Developers with roughly 1 to 5 years of software engineering and at least six months of hands-on work with Claude or comparable LLM systems",
    "Engineers working in Python and/or TypeScript who are comfortable with REST APIs and command-line tools",
    "Staff of Claude Partner Network organizations (the exams are currently open only to them)",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What CCDV-F actually tests",
      paragraphs: [
        "The exam guide (version 1.0, effective July 2026) splits the content into eight domains with unusually precise weights: Applications and Integration (33.1%), Model Selection and Optimization (16.8%), Agents and Workflows (14.7%), Prompt and Context Engineering (11.0%), Tools and MCPs (10.6%), Security and Safety (8.1%), Claude Code (3.1%) and Eval, Testing, and Debugging (2.6%). Each domain is broken into weighted skills, so you can see that Claude Application Design (8.6%), Software Engineering Foundations (7.4%) and Claude API Mechanics (6.8%) matter far more than, for example, Claude Hooks (1.0%).",
        "Applications and Integration is the centre of gravity. Expect the Messages API and its building blocks: tools, streaming, vision, extended thinking, prompt caching and the Message Batches API, including when batch processing beats realtime calls. The same domain covers general engineering practice (REST, JSON, asynchronous code, version control, code review and refactoring), requirements and life cycle thinking, and configuration management such as CLAUDE.md files, settings.json, model version pinning and prompt versioning.",
        "The remaining domains test how you build and run Claude systems well: agent and workflow design with the Claude Agent SDK, subagents and hooks; tokens, context windows, sampling, effort levels and model tradeoffs between Opus, Sonnet and Haiku; context and prompt engineering with defensive output handling; prompt injection, least privilege and secrets management; and tool definitions, MCP servers and the choice between built-in tools, custom tools, Skills and MCP.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "CCDV-F has 53 items in 120 minutes, which leaves a little over two minutes per item. Items are multiple choice or multiple response, and every item states how many responses to select. The exam is closed book, and the Partner Academy FAQ states that AI assistants and browser translation tools are not permitted. It is offered in English and Japanese and delivered by Pearson VUE, either online proctored (OnVUE) or at a Pearson test center.",
        "Scoring is criterion referenced rather than curved. You receive a pass or fail result, a scaled score from 100 to 1,000 (720 to pass) and your percent correct per domain; those domain percentages help you plan a retake but do not decide the result. Scores appear on screen at the end of the exam.",
        "There are no mandatory prerequisites or required courses. Exams are currently open only to people at Claude Partner Network organizations who register with a partner company email, are at least 18 and show a government-issued ID. The credential is valid for 12 months. On-time renewal is free and consists of a non-proctored assessment on Partner Academy; a lapsed credential requires retaking the full exam at the full fee. After a failed attempt the waiting periods are 14, 30 and 90 days, with at most four attempts per exam in a rolling 12 months.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Start with the weights",
          body: "Read the official exam guide and rate yourself on each weighted skill. With a third of the exam in Applications and Integration, gaps in API mechanics, application design or configuration management cost more than gaps in Claude Code or debugging.",
        },
        {
          title: "Build against the Messages API by hand",
          body: "Write a small client without a framework: manage the conversation history yourself (the API is stateless), handle every stop_reason, return tool_result blocks correctly, stream a response and send one job through the Message Batches API. Doing it once makes the details stick.",
        },
        {
          title: "Measure tokens and cost",
          body: "Add prompt caching to a request with a long system prompt and watch cache_creation_input_tokens and cache_read_input_tokens in the usage field. Change something early in the prompt and see the cache miss. Try different effort levels and compare latency, tokens and quality on the same task.",
        },
        {
          title: "Build one agent with the Agent SDK",
          body: "Give it a few built-in tools, a read-only subagent, a PreToolUse hook that blocks a dangerous action, and limits with max_turns and max_budget_usd. Then connect an MCP server and decide, for each capability, whether a built-in tool, a custom tool, a Skill or MCP fits best.",
        },
        {
          title: "Configure Claude Code for a real repository",
          body: "Run /init, organise CLAUDE.md and .claude/rules, add a hook in .claude/settings.json and run Claude Code headless with claude -p in a script. Know which files are shared through version control and which stay personal.",
        },
        {
          title: "Practise under time pressure",
          body: "Work through timed question sets at about two minutes per item. Multiple-response items tell you how many answers to pick, so read each option against the scenario rather than looking for a single keyword.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Over-studying Claude Code. It is only 3.1% of the exam; the Claude API, application design and model choice carry much more weight.",
        "Treating the system prompt as a security boundary. Prompt instructions guide the model; deterministic controls such as hooks, permissions, least privilege and server-side authorisation enforce rules.",
        "Assuming structured outputs can never fail. The documentation notes that a refusal or a max_tokens stop can produce output that does not match the schema, so check stop_reason before parsing.",
        "Forgetting that model IDs, prompts and plugins need version control too. Pinning a model ID and versioning prompts is part of the Configuration Management skill.",
        "Memorising numbers that change between model generations. Learn the concepts (cache minimums exist, effort defaults differ by model) and look up the current values in the documentation when you build.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on the CCDV-F exam and how long is it?",
      answer:
        "The exam has 53 multiple-choice and multiple-response items and a time limit of 120 minutes. Each multiple-response item tells you how many answers to select.",
    },
    {
      question: "What is the passing score for CCDV-F?",
      answer:
        "You need a scaled score of 720 on a 100 to 1,000 scale. Scoring is criterion referenced, and the score report also shows your percent correct per domain, which does not decide pass or fail.",
    },
    {
      question: "Who can take the Claude Certified Developer exam?",
      answer:
        "Currently only staff of Claude Partner Network organizations, registering with a partner company email, aged 18 or over and with a government-issued ID. There are no mandatory prerequisites; Anthropic's target candidate has 1 to 5 years of software engineering experience and at least six months of hands-on work with Claude or comparable LLM systems.",
    },
    {
      question: "How long is the credential valid?",
      answer:
        "12 months from the date it is awarded. Renewing on time is free and involves a non-proctored assessment on Partner Academy. If the credential lapses, you have to retake the full exam.",
    },
    {
      question: "Are CertRamp's CCDV-F questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Anthropic's published exam guide and the official Claude documentation. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CCDV-F Exam Guide 2026: Claude Certified Developer",
    description:
      "Claude Certified Developer: Foundations (CCDV-F) guide: 53 items, 120 minutes, 720 to pass, the eight weighted domains and a six-step study plan.",
  },
  published: "2026-11-11",
  updated: "2026-11-11",
};
