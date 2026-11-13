import type { Localized } from "@/content/course-data/types";

/**
 * Comparison pages at /compare/<id>/. Exam facts (questions, duration, domains,
 * prerequisites, languages) come from the verified `exam` records in
 * certifications.ts; only the rows below are written per pair. Factual, no
 * ranking of vendors or certifications.
 */
export interface ComparisonSide {
  slug: string;
  audience: Localized;
  level: Localized;
  focus: Localized;
}

export interface Comparison {
  id: string;
  a: ComparisonSide;
  b: ComparisonSide;
  /** Two or three sentences on how to tell the two apart. */
  summary: Localized;
  /** Plain-language guide: "Choose A if …", neutral. */
  choose: { a: Localized; b: Localized };
  checked: string;
}

export const comparisons: Comparison[] = [
  {
    id: "nvidia-nca-aiio-vs-nvidia-nca-genl",
    a: {
      slug: "nvidia-nca-aiio",
      audience: {
        en: "Data center, infrastructure and operations staff who plan, run or support GPU systems for AI.",
        de: "Fachleute aus Rechenzentrum, Infrastruktur und Betrieb, die GPU-Systeme für KI planen, betreiben oder unterstützen.",
      },
      level: { en: "NVIDIA Associate (entry level)", de: "NVIDIA Associate (Einstiegsniveau)" },
      focus: {
        en: "How AI workloads run: GPUs, NVIDIA software stack, servers, networking, power and cooling, cluster monitoring and scheduling.",
        de: "Wie KI-Workloads laufen: GPUs, NVIDIA-Software-Stack, Server, Netzwerk, Strom und Kühlung, Überwachung und Scheduling im Cluster.",
      },
    },
    b: {
      slug: "nvidia-nca-genl",
      audience: {
        en: "Developers and data scientists who build applications with large language models.",
        de: "Entwicklerinnen, Entwickler und Data Scientists, die Anwendungen mit großen Sprachmodellen bauen.",
      },
      level: { en: "NVIDIA Associate (entry level)", de: "NVIDIA Associate (Einstiegsniveau)" },
      focus: {
        en: "How LLM applications are built: machine learning basics, data analysis, experimentation, software development and trustworthy AI.",
        de: "Wie LLM-Anwendungen entstehen: Grundlagen des maschinellen Lernens, Datenanalyse, Experimente, Softwareentwicklung und vertrauenswürdige KI.",
      },
    },
    summary: {
      en: "Both are NVIDIA associate exams of about one hour, taken online with remote proctoring. NCA-AIIO is about the infrastructure that AI runs on; NCA-GENL is about building applications with large language models. They overlap only in basic AI concepts.",
      de: "Beide sind NVIDIA-Associate-Prüfungen von etwa einer Stunde, online mit Fernaufsicht. NCA-AIIO behandelt die Infrastruktur, auf der KI läuft; NCA-GENL das Entwickeln von Anwendungen mit großen Sprachmodellen. Gemeinsam haben sie nur die KI-Grundbegriffe.",
    },
    choose: {
      a: {
        en: "your work is with servers, networks, data center facilities or cluster operations.",
        de: "du mit Servern, Netzwerken, Rechenzentrumstechnik oder dem Betrieb von Clustern arbeitest.",
      },
      b: {
        en: "your work is writing code, preparing data or building chatbots and RAG applications.",
        de: "du Code schreibst, Daten aufbereitest oder Chatbots und RAG-Anwendungen baust.",
      },
    },
    checked: "2026-11-13",
  },
  {
    id: "giac-gaips-vs-isaca-aaism",
    a: {
      slug: "giac-gaips",
      audience: {
        en: "AI/ML engineers, developers, application and cloud security engineers who build or assess generative AI applications.",
        de: "KI/ML-Engineers, Entwickler sowie Anwendungs- und Cloud-Sicherheitsfachleute, die generative KI-Anwendungen bauen oder prüfen.",
      },
      level: { en: "GIAC practitioner certification", de: "GIAC-Praktiker-Zertifizierung" },
      focus: {
        en: "Securing AI platforms hands-on: agents and integrations, RAG, MLOps pipelines, model customisation and hosting.",
        de: "KI-Plattformen praktisch absichern: Agenten und Integrationen, RAG, MLOps-Pipelines, Modellanpassung und Hosting.",
      },
    },
    b: {
      slug: "isaca-aaism",
      audience: {
        en: "Security managers who already hold CISM or CISSP and run AI security programmes.",
        de: "Sicherheitsverantwortliche mit CISM oder CISSP, die KI-Sicherheitsprogramme verantworten.",
      },
      level: { en: "ISACA advanced credential (requires an active CISM or CISSP)", de: "ISACA-Advanced-Zertifizierung (setzt aktives CISM oder CISSP voraus)" },
      focus: {
        en: "Managing AI security: governance and programme management, AI risk management, and AI technologies and controls.",
        de: "KI-Sicherheit steuern: Governance und Programmmanagement, KI-Risikomanagement sowie KI-Technologien und Kontrollen.",
      },
    },
    summary: {
      en: "Both certify AI security knowledge, from different angles. GAIPS is a technical practitioner exam about securing generative AI applications and pipelines. AAISM is a management credential for CISM or CISSP holders about governing AI security and risk.",
      de: "Beide zertifizieren Wissen zur KI-Sicherheit, aus unterschiedlichen Blickwinkeln. GAIPS ist eine technische Praktiker-Prüfung zur Absicherung generativer KI-Anwendungen und Pipelines. AAISM ist eine Management-Zertifizierung für Inhaber von CISM oder CISSP zur Steuerung von KI-Sicherheit und KI-Risiken.",
    },
    choose: {
      a: {
        en: "you build, test or secure LLM applications, agents and ML pipelines yourself.",
        de: "du LLM-Anwendungen, Agenten und ML-Pipelines selbst baust, testest oder absicherst.",
      },
      b: {
        en: "you already hold CISM or CISSP and lead security governance and risk for AI.",
        de: "du bereits CISM oder CISSP hast und Governance und Risiko für KI verantwortest.",
      },
    },
    checked: "2026-11-13",
  },
  {
    id: "google-cloud-agentic-architect-vs-claude-certified-architect-ccar-f",
    a: {
      slug: "google-cloud-agentic-architect",
      audience: {
        en: "Developers and architects who build, deploy and govern agents on Google Cloud.",
        de: "Entwickler und Architekten, die Agenten auf Google Cloud bauen, bereitstellen und steuern.",
      },
      level: { en: "Google Cloud Professional certification", de: "Google-Cloud-Professional-Zertifizierung" },
      focus: {
        en: "Agents on Google Cloud: low-code tools, coding agents, custom agents with ADK, evaluation and deployment on Agent Runtime, security and governance.",
        de: "Agenten auf Google Cloud: Low-Code-Werkzeuge, Coding-Agenten, eigene Agenten mit ADK, Evaluierung und Deployment auf Agent Runtime, Sicherheit und Governance.",
      },
    },
    b: {
      slug: "claude-certified-architect-ccar-f",
      audience: {
        en: "Architects and engineers who design solutions with Claude and Anthropic's tools.",
        de: "Architekten und Engineers, die Lösungen mit Claude und den Werkzeugen von Anthropic entwerfen.",
      },
      level: { en: "Anthropic Architect, Foundations level", de: "Anthropic Architect, Stufe Foundations" },
      focus: {
        en: "Designing solutions with Claude, assessed through practical scenarios.",
        de: "Lösungen mit Claude entwerfen, geprüft anhand praxisnaher Szenarien.",
      },
    },
    summary: {
      en: "Both certify architects who design agentic AI solutions. PAA is tied to Google Cloud's agent platform and adds hands-on labs after the exam; CCAR-F is tied to Claude and Anthropic's tooling and uses scenario-based items.",
      de: "Beide zertifizieren Architekten für agentische KI-Lösungen. PAA ist an die Agentenplattform von Google Cloud gebunden und ergänzt die Prüfung um praktische Labs; CCAR-F ist an Claude und die Werkzeuge von Anthropic gebunden und arbeitet mit szenariobasierten Aufgaben.",
    },
    choose: {
      a: {
        en: "your agents run on Google Cloud and you work with ADK, Agent Runtime and the Gemini Enterprise tools.",
        de: "deine Agenten auf Google Cloud laufen und du mit ADK, Agent Runtime und den Gemini-Enterprise-Werkzeugen arbeitest.",
      },
      b: {
        en: "you design solutions around Claude, the Claude API or Claude Code.",
        de: "du Lösungen rund um Claude, die Claude API oder Claude Code entwirfst.",
      },
    },
    checked: "2026-11-13",
  },
  {
    id: "cia-part-1-vs-cisa",
    a: {
      slug: "cia-part-1",
      audience: {
        en: "Internal auditors and risk, compliance and control professionals starting the three-part CIA.",
        de: "Interne Revisoren sowie Fachleute aus Risiko, Compliance und Kontrolle, die mit der dreiteiligen CIA beginnen.",
      },
      level: { en: "First of three CIA exams (The IIA)", de: "Erste von drei CIA-Prüfungen (IIA)" },
      focus: {
        en: "Foundations of internal auditing under the Global Internal Audit Standards: purpose, ethics, governance, risk and control, fraud risks.",
        de: "Grundlagen der Internen Revision nach den Globalen Standards: Zweck, Ethik, Governance, Risiko und Kontrolle, Betrugsrisiken.",
      },
    },
    b: {
      slug: "cisa",
      audience: {
        en: "IT auditors and professionals who audit, control and assure information systems.",
        de: "IT-Revisoren und Fachleute, die Informationssysteme prüfen, steuern und absichern.",
      },
      level: { en: "ISACA certification, one exam", de: "ISACA-Zertifizierung, eine Prüfung" },
      focus: {
        en: "Auditing information systems: the IS audit process, IT governance, acquisition and development, operations and resilience, protection of information assets.",
        de: "Prüfung von Informationssystemen: IS-Prüfungsprozess, IT-Governance, Beschaffung und Entwicklung, Betrieb und Resilienz, Schutz von Informationswerten.",
      },
    },
    summary: {
      en: "Both are audit certifications, but for different scopes. CIA covers internal auditing across the whole organisation in three exams, starting with Part 1. CISA covers auditing information systems and IT controls in one exam.",
      de: "Beide sind Prüfer-Zertifizierungen, aber mit unterschiedlichem Umfang. Die CIA deckt die Interne Revision der gesamten Organisation in drei Prüfungen ab, beginnend mit Teil 1. Die CISA deckt die Prüfung von Informationssystemen und IT-Kontrollen in einer Prüfung ab.",
    },
    choose: {
      a: {
        en: "you work, or want to work, in internal audit across all business areas.",
        de: "du in der Internen Revision über alle Geschäftsbereiche arbeitest oder arbeiten möchtest.",
      },
      b: {
        en: "your audit work centres on IT systems, IT controls and information security.",
        de: "deine Prüfungsarbeit sich auf IT-Systeme, IT-Kontrollen und Informationssicherheit konzentriert.",
      },
    },
    checked: "2026-11-13",
  },
];

export const comparePath = (id: string) => `/compare/${id}`;
