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
];

export const comparePath = (id: string) => `/compare/${id}`;
