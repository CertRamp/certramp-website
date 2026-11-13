import type { CertPath, PathItem } from "./types";

/**
 * Microsoft certification paths (Azure, AI, data, Power Platform, Microsoft 365),
 * written 13 Nov 2026 from the prerequisites verified on Microsoft Learn (see
 * src/config/certifications.ts). Only the expert certifications AZ-305 and
 * AB-100 have prerequisite certifications; everything else is a recommendation.
 */
const checked = "2026-11-13";
const L = (en: string, de: string) => ({ en, de });
const item = (slug: string, name: string, code: string, relation: { en: string; de: string }): PathItem => ({ name, code, slug, relation });
const ms = (label: string, url: string) => ({ label: `Microsoft Learn: ${label}`, url });
const learn = (s: string) => `https://learn.microsoft.com/en-us/credentials/certifications/exams/${s}/`;

const az900 = item("az-900", "Azure Fundamentals", "AZ-900", L("Optional fundamentals exam on cloud concepts, Azure architecture and governance. Does not expire.", "Optionale Grundlagenprüfung zu Cloud-Konzepten, Azure-Architektur und Governance. Läuft nicht ab."));
const az104 = item("az-104", "Azure Administrator Associate", "AZ-104", L("Core Azure administration: identities, storage, compute, networking and monitoring.", "Kern der Azure-Administration: Identitäten, Speicher, Compute, Netzwerk und Überwachung."));
const az305 = item("az-305", "Azure Solutions Architect Expert", "AZ-305", L("Expert certification for designing Azure solutions. Microsoft requires AZ-104 in addition to passing AZ-305.", "Expert-Zertifizierung für den Entwurf von Azure-Lösungen. Microsoft verlangt zusätzlich zur bestandenen AZ-305 die AZ-104."));
const az700 = item("az-700", "Azure Network Engineer Associate", "AZ-700", L("Specialised Azure networking: hybrid connectivity, routing, load balancing and private access.", "Spezialisiertes Azure-Networking: hybride Verbindungen, Routing, Lastverteilung und privater Zugriff."));
const az140 = item("az-140", "Configuring and Operating Microsoft Azure Virtual Desktop", "AZ-140", L("Planning, delivering and operating Azure Virtual Desktop.", "Planung, Bereitstellung und Betrieb von Azure Virtual Desktop."));
const az802 = item("az-802", "Windows Server administration", "AZ-802", L("Hybrid Windows Server administration with Azure Arc, Azure Monitor and Defender for Cloud.", "Hybride Windows-Server-Administration mit Azure Arc, Azure Monitor und Defender for Cloud."));
const ai901 = item("ai-901", "Azure AI Fundamentals", "AI-901", L("Optional fundamentals exam on AI concepts and Azure AI services. Does not expire.", "Optionale Grundlagenprüfung zu KI-Konzepten und Azure-KI-Diensten. Läuft nicht ab."));
const ai103 = item("ai-103", "Azure AI Apps and Agents Developer Associate", "AI-103", L("Building generative AI apps and agents with Microsoft Foundry and Azure AI services.", "Entwicklung generativer KI-Apps und Agenten mit Microsoft Foundry und Azure-KI-Diensten."));
const ai200 = item("ai-200", "Azure AI Cloud Developer Associate", "AI-200", L("Developing AI cloud solutions on Azure: containers, data services, messaging and monitoring.", "Entwicklung von KI-Cloud-Lösungen auf Azure: Container, Datendienste, Messaging und Überwachung."));
const ai300 = item("ai-300", "Machine learning and generative AI operations", "AI-300", L("Operationalising ML and generative AI: MLOps and GenAIOps with Azure Machine Learning and Microsoft Foundry.", "Betrieb von ML und generativer KI: MLOps und GenAIOps mit Azure Machine Learning und Microsoft Foundry."));
const dp600 = item("dp-600", "Fabric Analytics Engineer Associate", "DP-600", L("Analytics engineering in Microsoft Fabric: data preparation and semantic models.", "Analytics Engineering in Microsoft Fabric: Datenaufbereitung und semantische Modelle."));
const dp750 = item("dp-750", "Azure Databricks data engineering", "DP-750", L("Data engineering with Azure Databricks and Unity Catalog.", "Data Engineering mit Azure Databricks und Unity Catalog."));
const dp800 = item("dp-800", "AI-enabled database solutions", "DP-800", L("Developing AI-enabled database solutions on SQL Server, Azure SQL and Fabric SQL databases.", "Entwicklung KI-gestützter Datenbanklösungen auf SQL Server, Azure SQL und Fabric-SQL-Datenbanken."));
const pl900 = item("pl-900", "Power Platform Fundamentals", "PL-900", L("Optional fundamentals exam on Power Apps, Power Automate and Copilot Studio. Does not expire.", "Optionale Grundlagenprüfung zu Power Apps, Power Automate und Copilot Studio. Läuft nicht ab."));
const ab400 = item("ab-400", "Power Platform developer exam", "AB-400", L("Extending Power Platform with code and AI (successor of PL-400).", "Erweiterung der Power Platform mit Code und KI (Nachfolger von PL-400)."));
const ab620 = item("ab-620", "AI Agent Builder Associate", "AB-620", L("Building agents in Copilot Studio with Power Platform and Microsoft Foundry.", "Entwicklung von Agenten in Copilot Studio mit Power Platform und Microsoft Foundry."));
const ab100 = item("ab-100", "Agentic AI Business Solutions Architect Expert", "AB-100", L("Expert certification for agentic AI business solutions. Microsoft requires one of its listed associate certifications in addition to AB-100.", "Expert-Zertifizierung für agentische KI-Geschäftslösungen. Microsoft verlangt zusätzlich zu AB-100 eine der gelisteten Associate-Zertifizierungen."));
const ab730 = item("ab-730", "AI Business Professional", "AB-730", L("Using Microsoft 365 Copilot and agents in daily business work; no coding.", "Einsatz von Microsoft 365 Copilot und Agenten in der täglichen Arbeit; ohne Programmierung."));
const ab731 = item("ab-731", "AI Transformation Leader", "AB-731", L("For business decision-makers leading AI adoption; no coding.", "Für Entscheidungsträger, die die KI-Einführung verantworten; ohne Programmierung."));
const ab900 = item("ab-900", "Microsoft 365 Copilot and Agent Administration Fundamentals", "AB-900", L("Fundamentals of administering Microsoft 365, Copilot and agents.", "Grundlagen der Administration von Microsoft 365, Copilot und Agenten."));
const ab650 = item("ab-650", "Microsoft 365 and AI services administration", "AB-650", L("Administering Microsoft 365 and AI services, including security and governance.", "Administration von Microsoft 365 und KI-Diensten, einschließlich Sicherheit und Governance."));
const sc401 = item("sc-401", "Information security in Microsoft 365", "SC-401", L("Information protection, data loss prevention and insider risk with Microsoft Purview.", "Informationsschutz, Data Loss Prevention und Insider-Risiken mit Microsoft Purview."));
const mo200 = item("mo-200", "Microsoft Excel (Office 2019)", "MO-200", L("Excel Associate exam for Office 2019.", "Excel-Associate-Prüfung für Office 2019."));
const mo210 = item("mo-210", "Excel Associate (Microsoft 365 Apps)", "MO-210", L("Excel Associate exam for Microsoft 365 Apps, the current version.", "Excel-Associate-Prüfung für Microsoft 365 Apps, die aktuelle Version."));

const noteAssoc = L(
  "Microsoft sets no prerequisite certifications for this exam; role-based certifications are renewed every 12 months with a free online assessment.",
  "Microsoft setzt für diese Prüfung keine Vorzertifizierung voraus; rollenbasierte Zertifizierungen werden alle 12 Monate mit einer kostenlosen Online-Prüfung verlängert.",
);
const noteFund = L("Fundamentals exams have no prerequisites and do not expire.", "Fundamentals-Prüfungen haben keine Voraussetzungen und laufen nicht ab.");
const p = (before: PathItem[], after: PathItem[], similar: PathItem[], code: string, note = noteAssoc): CertPath => ({
  before,
  after,
  similar,
  note,
  source: ms(code, learn(code.toLowerCase())),
  checked,
});

export const microsoftPaths: Record<string, CertPath> = {
  "az-900": p([], [az104, ai103], [ai901, pl900], "AZ-900", noteFund),
  "az-104": p([az900], [az305, az700], [az140, az802], "AZ-104"),
  "az-305": p([az104], [], [az700], "AZ-305", L("To earn Azure Solutions Architect Expert you need AZ-305 and the Azure Administrator Associate certification (AZ-104).", "Für Azure Solutions Architect Expert brauchst du AZ-305 und die Zertifizierung Azure Administrator Associate (AZ-104).")),
  "az-700": p([az104], [az305], [az140], "AZ-700"),
  "az-140": p([az104], [], [az700, az802], "AZ-140"),
  "az-802": p([az900], [az104], [az140], "AZ-802"),
  "ai-901": p([], [ai103, ai200, ai300], [az900], "AI-901", noteFund),
  "ai-103": p([ai901], [ab100], [ai200, ab620], "AI-103"),
  "ai-200": p([ai901], [], [ai103, ai300], "AI-200"),
  "ai-300": p([ai901], [], [ai103, ai200], "AI-300"),
  "dp-600": p([], [], [dp750, dp800], "DP-600"),
  "dp-750": p([], [], [dp600], "DP-750"),
  "dp-800": p([], [], [dp600], "DP-800"),
  "pl-900": p([], [ab400, ab620], [ab900], "PL-900", noteFund),
  "ab-400": p([pl900], [ab100], [ab620], "AB-400"),
  "ab-620": p([pl900], [ab100], [ab400, ai103], "AB-620"),
  "ab-100": p([ab400, ai103], [], [ab620], "AB-100", L("To earn the Expert certification you need AB-100 and one of the associate certifications Microsoft lists for it.", "Für die Expert-Zertifizierung brauchst du AB-100 und eine der von Microsoft dafür gelisteten Associate-Zertifizierungen.")),
  "ab-730": p([], [ab731], [ab900], "AB-730"),
  "ab-731": p([ab730], [], [ab900], "AB-731"),
  "ab-900": p([], [ab650], [ab730], "AB-900"),
  "ab-650": p([ab900], [], [sc401], "AB-650"),
  "sc-401": p([], [], [ab650], "SC-401"),
  "mo-200": p([], [], [mo210], "MO-200", L("No prerequisites; renewal every 60 months.", "Keine Voraussetzungen; Erneuerung alle 60 Monate.")),
  "mo-210": p([], [], [mo200], "MO-210", L("No prerequisites; renewal every 60 months.", "Keine Voraussetzungen; Erneuerung alle 60 Monate.")),
};
