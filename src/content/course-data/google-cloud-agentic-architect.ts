import type { CourseData } from "./types";

/**
 * Google Cloud Professional Agentic Architect (PAA). Blueprint counts from the live Udemy course
 * on 13 Nov 2026 (60 questions per test). Certification page, exam guide PDF and FAQ re-checked
 * 13 Nov 2026: the English page now shows the GA exam (2 hours, 50–60 questions, USD 200).
 * Product names follow the exam guide and the Gemini Enterprise Agent Platform rename page.
 * Course changelog not recorded yet.
 */
export const paa: CourseData = {
  slug: "google-cloud-agentic-architect",

  examWatch: {
    lastChecked: "2026-11-13",
    examVersion: {
      en: "Generally available exam: 2 hours, 50–60 multiple-choice questions, then hands-on labs; five sections weighted ~13% / ~17% / ~33% / ~22% / ~15%",
      de: "Allgemein verfügbare Prüfung: 2 Stunden, 50–60 Multiple-Choice-Fragen, danach praktische Labs; fünf Abschnitte mit ca. 13 % / 17 % / 33 % / 22 % / 15 %",
    },
    source: { label: "Google Cloud: Professional Agentic Architect", url: "https://cloud.google.com/learn/certification/agentic-architect" },
    entries: [],
  },

  blueprint: {
    rows: [
      { domain: "d1", perTest: [8, 8, 8, 8, 8, 7] },
      { domain: "d2", perTest: [10, 10, 10, 10, 10, 11] },
      { domain: "d3", perTest: [20, 20, 20, 20, 20, 19] },
      { domain: "d4", perTest: [13, 13, 13, 13, 13, 14] },
      { domain: "d5", perTest: [9, 9, 9, 9, 9, 9] },
    ],
    examVersion: { en: "Professional Agentic Architect exam guide (five sections)", de: "Prüfungsleitfaden Professional Agentic Architect (fünf Abschnitte)" },
    counted: "2026-11-13",
  },

  path: {
    before: [],
    after: [],
    similar: [
      {
        name: "Claude Certified Architect: Foundations",
        code: "CCAR-F",
        slug: "claude-certified-architect-ccar-f",
        relation: {
          en: "Architect-level certification for designing solutions with Claude, scenario-based; vendor-specific to Anthropic instead of Google Cloud.",
          de: "Architekten-Zertifizierung für Lösungen mit Claude, szenariobasiert; herstellerspezifisch für Anthropic statt Google Cloud.",
        },
      },
      {
        name: "Microsoft Azure AI Apps and Agents",
        code: "AI-103",
        slug: "ai-103",
        relation: {
          en: "Building AI apps and agents on Microsoft Azure: the same type of work on a different cloud.",
          de: "KI-Anwendungen und Agenten auf Microsoft Azure entwickeln: dieselbe Art von Arbeit in einer anderen Cloud.",
        },
      },
      {
        name: "Databricks Certified Generative AI Engineer Associate",
        code: "Databricks GenAI",
        slug: "databricks-generative-ai-engineer-associate",
        relation: {
          en: "Building generative AI and RAG applications on the Databricks platform, at associate level.",
          de: "Generative-KI- und RAG-Anwendungen auf der Databricks-Plattform entwickeln, auf Associate-Niveau.",
        },
      },
      {
        name: "Google Cloud Professional Cloud Architect",
        code: "PCA",
        slug: "google-cloud-professional-cloud-architect",
        relation: {
          en: "Google Cloud's general architecture certification. Not required for PAA, but it covers the cloud foundations that agentic solutions run on.",
          de: "Die allgemeine Architektur-Zertifizierung von Google Cloud. Für PAA nicht vorausgesetzt, aber sie deckt die Cloud-Grundlagen ab, auf denen agentische Lösungen laufen.",
        },
      },
    ],
    compare: ["google-cloud-agentic-architect-vs-claude-certified-architect-ccar-f"],
    note: {
      en: "Google lists no prerequisites and recommends 3+ years of hands-on cloud experience, including 1+ years building agentic solutions on Google Cloud. The certification is valid for 1 year.",
      de: "Google nennt keine Voraussetzungen und empfiehlt 3+ Jahre praktische Cloud-Erfahrung, davon 1+ Jahr mit agentischen Lösungen auf Google Cloud. Die Zertifizierung gilt 1 Jahr.",
    },
    source: { label: "Google Cloud: Professional Agentic Architect", url: "https://cloud.google.com/learn/certification/agentic-architect" },
    checked: "2026-11-13",
  },

  readiness: {},

  glossary: {
    reviewed: "2026-11-13",
    sources: [
      { label: "Google Cloud: Professional Agentic Architect exam guide (PDF)", url: "https://services.google.com/fh/files/misc/professional_agentic_architect_exam_guide_english.pdf" },
      { label: "Google Cloud: Gemini Enterprise Agent Platform name changes", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes" },
    ],
    terms: [
      { id: "ai-agent", term: "AI agent", domain: "d3", translations: { en: "AI agent", de: "KI-Agent" }, definition: { en: "A system that uses a model to reason about a goal, plan steps and call tools to carry them out.", de: "System, das mit einem Modell über ein Ziel nachdenkt, Schritte plant und Werkzeuge aufruft, um sie umzusetzen." } },
      { id: "agentic-workflow", term: "Agentic workflow", domain: "d3", translations: { en: "Agentic workflow", de: "Agentischer Workflow" }, definition: { en: "A process in which one or more agents carry out steps, call tools and pass results to each other, with or without fixed control flow.", de: "Ablauf, in dem ein oder mehrere Agenten Schritte ausführen, Werkzeuge aufrufen und Ergebnisse weitergeben, mit oder ohne fest vorgegebenen Ablauf." } },
      { id: "multi-agent-system", term: "Multi-agent system", domain: "d3", translations: { en: "Multi-agent system", de: "Multi-Agenten-System" }, definition: { en: "Several specialised agents that work together, for example a coordinator that delegates tasks to sub-agents.", de: "Mehrere spezialisierte Agenten, die zusammenarbeiten, etwa ein Koordinator, der Aufgaben an Sub-Agenten delegiert." } },
      { id: "adk", term: "Agent Development Kit", abbr: "ADK", domain: "d3", translations: { en: "Agent Development Kit", de: "Agent Development Kit (ADK)" }, definition: { en: "Google's open-source framework for building agents and multi-agent systems in code.", de: "Googles Open-Source-Framework, um Agenten und Multi-Agenten-Systeme im Code zu entwickeln." } },
      { id: "workflow-agents", term: "Sequential, parallel and loop agents", domain: "d3", translations: { en: "Sequential, parallel and loop agents", de: "Sequenzielle, parallele und Schleifen-Agenten" }, definition: { en: "ADK workflow agents with fixed control flow: run sub-agents one after another, at the same time, or repeatedly until a condition is met.", de: "ADK-Workflow-Agenten mit festem Ablauf: Sub-Agenten nacheinander, gleichzeitig oder wiederholt bis zu einer Bedingung ausführen." } },
      { id: "agent-as-a-tool", term: "Agent as a tool", domain: "d3", translations: { en: "Agent as a tool", de: "Agent als Werkzeug" }, definition: { en: "Calling another agent like a function and getting its result back, while the calling agent keeps control. With sub-agent delegation, control passes to the sub-agent.", de: "Einen anderen Agenten wie eine Funktion aufrufen und sein Ergebnis zurückbekommen; der aufrufende Agent behält die Kontrolle. Bei der Delegation an einen Sub-Agenten geht die Kontrolle an diesen über." } },
      { id: "callbacks", term: "Callbacks", domain: "d5", translations: { en: "Callbacks", de: "Callbacks (Rückruffunktionen)" }, definition: { en: "Code that ADK runs before or after a model or tool call, used for example for guardrails, logging or changing requests.", de: "Code, den ADK vor oder nach einem Modell- oder Werkzeugaufruf ausführt, etwa für Schutzregeln, Protokollierung oder das Anpassen von Anfragen." } },
      { id: "agent-platform", term: "Gemini Enterprise Agent Platform", domain: "d4", translations: { en: "Gemini Enterprise Agent Platform", de: "Gemini Enterprise Agent Platform" }, definition: { en: "Google Cloud's platform for building and running agents and models; the new name for what was Vertex AI.", de: "Plattform von Google Cloud zum Entwickeln und Betreiben von Agenten und Modellen; neuer Name des früheren Vertex AI." } },
      { id: "agent-runtime", term: "Agent Runtime", domain: "d4", translations: { en: "Agent Runtime", de: "Agent Runtime" }, definition: { en: "The managed service for deploying and running agents in production, formerly Vertex AI Agent Engine.", de: "Verwalteter Dienst, um Agenten in der Produktion bereitzustellen und zu betreiben; früher Vertex AI Agent Engine." } },
      { id: "sessions", term: "Sessions", domain: "d4", translations: { en: "Sessions", de: "Sessions (Sitzungen)" }, definition: { en: "Storage for the conversation history and state of one interaction with an agent (Agent Platform Sessions).", de: "Speicher für Gesprächsverlauf und Zustand einer Interaktion mit einem Agenten (Agent Platform Sessions)." } },
      { id: "memory-bank", term: "Memory Bank", domain: "d4", translations: { en: "Memory Bank", de: "Memory Bank" }, definition: { en: "Long-term memory across sessions, so an agent can recall facts about a user in later conversations.", de: "Langzeitgedächtnis über Sitzungen hinweg, damit sich ein Agent in späteren Gesprächen an Fakten über einen Nutzer erinnern kann." } },
      { id: "agent-studio", term: "Agent Studio", domain: "d1", translations: { en: "Agent Studio", de: "Agent Studio" }, definition: { en: "The console environment for prototyping prompts, models and agents, formerly Vertex AI Studio.", de: "Konsolenumgebung zum Prototyping von Prompts, Modellen und Agenten; früher Vertex AI Studio." } },
      { id: "workflow-builder", term: "Workflow Builder", domain: "d1", translations: { en: "Workflow Builder", de: "Workflow Builder" }, definition: { en: "The low-code tool in Gemini Enterprise for building agents without code; the exam guide still calls it Agent Designer.", de: "Low-Code-Werkzeug in Gemini Enterprise, um Agenten ohne Code zu erstellen; der Prüfungsleitfaden nennt es noch Agent Designer." } },
      { id: "cx-agent-studio", term: "CX Agent Studio", domain: "d1", translations: { en: "CX Agent Studio", de: "CX Agent Studio" }, definition: { en: "Google's low-code tool for building customer-experience agents, such as service chat and voice agents.", de: "Low-Code-Werkzeug von Google für Kundenservice-Agenten, etwa für Chat und Sprache." } },
      { id: "coding-agent", term: "Coding agent", domain: "d2", translations: { en: "Coding agent", de: "Coding-Agent" }, definition: { en: "An agent that reads, writes and runs code in a repository. The exam guide names Antigravity and Claude Code on Google Cloud.", de: "Agent, der Code in einem Repository liest, schreibt und ausführt. Der Prüfungsleitfaden nennt Antigravity und Claude Code on Google Cloud." } },
      { id: "mcp", term: "Model Context Protocol", abbr: "MCP", domain: "d2", translations: { en: "Model Context Protocol", de: "Model Context Protocol (MCP)" }, definition: { en: "An open protocol for connecting agents to tools and data through MCP servers.", de: "Offenes Protokoll, um Agenten über MCP-Server mit Werkzeugen und Daten zu verbinden." } },
      { id: "a2a", term: "Agent2Agent protocol", abbr: "A2A", domain: "d3", translations: { en: "Agent2Agent protocol", de: "Agent2Agent-Protokoll (A2A)" }, definition: { en: "An open protocol that lets agents built with different frameworks discover each other and work together.", de: "Offenes Protokoll, mit dem Agenten aus verschiedenen Frameworks einander finden und zusammenarbeiten können." } },
      { id: "rag", term: "Retrieval-augmented generation", abbr: "RAG", domain: "d3", translations: { en: "Retrieval-augmented generation", de: "Retrieval-Augmented Generation (RAG)" }, definition: { en: "Retrieving relevant enterprise content and adding it to the model's context so answers are grounded in that data.", de: "Passende Unternehmensinhalte abrufen und dem Kontext des Modells hinzufügen, damit Antworten auf diesen Daten beruhen." } },
      { id: "rag-engine", term: "RAG Engine", domain: "d3", translations: { en: "RAG Engine", de: "RAG Engine" }, definition: { en: "A managed Google Cloud service for building RAG pipelines: ingesting, chunking, embedding and retrieving documents.", de: "Verwalteter Google-Cloud-Dienst für RAG-Pipelines: Dokumente einlesen, aufteilen, einbetten und abrufen." } },
      { id: "agent-search", term: "Agent Search", domain: "d3", translations: { en: "Agent Search", de: "Agent Search" }, definition: { en: "Google's managed enterprise search for grounding agents, formerly Vertex AI Search.", de: "Verwaltete Unternehmenssuche von Google, um Agenten mit Daten zu fundieren; früher Vertex AI Search." } },
      { id: "grounding", term: "Grounding", domain: "d3", translations: { en: "Grounding", de: "Grounding (Fundierung)" }, definition: { en: "Connecting model output to trusted sources, such as enterprise data or search results, to reduce made-up answers.", de: "Modellausgaben mit vertrauenswürdigen Quellen wie Unternehmensdaten oder Suchergebnissen verknüpfen, um erfundene Antworten zu verringern." } },
      { id: "agent-evaluation", term: "Agent evaluation", domain: "d4", translations: { en: "Agent evaluation", de: "Agenten-Evaluierung" }, definition: { en: "Measuring an agent's quality, including whether it chose the right tools and steps (trajectory), not only whether the final answer is correct.", de: "Messen der Qualität eines Agenten, auch ob er die richtigen Werkzeuge und Schritte gewählt hat (Trajektorie), nicht nur ob die Endantwort stimmt." } },
      { id: "agent-identity", term: "Agent Identity", domain: "d5", translations: { en: "Agent Identity", de: "Agent Identity" }, definition: { en: "A dedicated identity for an agent so that its access can be controlled and audited with IAM.", de: "Eigene Identität für einen Agenten, damit sein Zugriff mit IAM gesteuert und nachvollzogen werden kann." } },
      { id: "agent-gateway", term: "Agent Gateway", domain: "d5", translations: { en: "Agent Gateway", de: "Agent Gateway" }, definition: { en: "A control point for traffic between agents, tools and models, used for policy enforcement and monitoring.", de: "Kontrollpunkt für den Verkehr zwischen Agenten, Werkzeugen und Modellen, für Richtliniendurchsetzung und Überwachung." } },
      { id: "agent-registry", term: "Agent Registry", domain: "d5", translations: { en: "Agent Registry", de: "Agent Registry" }, definition: { en: "A central catalogue of agents, tools and MCP servers in an organisation, used for discovery and governance.", de: "Zentrales Verzeichnis der Agenten, Werkzeuge und MCP-Server einer Organisation, für Auffindbarkeit und Governance." } },
      { id: "model-armor", term: "Model Armor", domain: "d5", translations: { en: "Model Armor", de: "Model Armor" }, definition: { en: "A Google Cloud service that screens prompts and responses for risks such as prompt injection, harmful content and sensitive data.", de: "Google-Cloud-Dienst, der Prompts und Antworten auf Risiken wie Prompt Injection, schädliche Inhalte und sensible Daten prüft." } },
      { id: "oauth", term: "OAuth 2.0", domain: "d5", translations: { en: "OAuth 2.0", de: "OAuth 2.0" }, definition: { en: "The authorisation standard used when an agent calls a tool on behalf of a user, so the agent acts with the user's delegated permissions.", de: "Autorisierungsstandard für Werkzeugaufrufe eines Agenten im Namen eines Nutzers, damit der Agent mit dessen delegierten Rechten handelt." } },
    ],
  },
};
