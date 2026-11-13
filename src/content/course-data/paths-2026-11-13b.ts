import { awsPaths } from "./paths-aws";
import { microsoftPaths } from "./paths-microsoft";
import { morePaths } from "./paths-more";
import { restPaths } from "./paths-rest";
import { cisspGlossary, md102Glossary } from "./glossary-md-cissp";
import { pmpGlossary } from "./glossary-pmp";
import { sc200Glossary } from "./glossary-sc-200";
import type { CertPath, CourseData, Glossary, PathItem } from "./types";

/**
 * Certification paths for Microsoft security, ISTQB, PMI and CompTIA Cloud+
 * courses, written 13 Nov 2026 from the prerequisites verified on the vendor
 * pages (see the comments in src/config/certifications.ts).
 */
const checked = "2026-11-13";
const ms = (label: string, url: string) => ({ label: `Microsoft Learn: ${label}`, url });

const sc900: PathItem = {
  name: "Microsoft Security, Compliance, and Identity Fundamentals",
  code: "SC-900",
  slug: "sc-900",
  relation: {
    en: "Optional fundamentals exam that introduces Microsoft Entra, Defender, Sentinel and Purview. Not required for any associate exam.",
    de: "Optionale Grundlagenprüfung, die Microsoft Entra, Defender, Sentinel und Purview einführt. Für keine Associate-Prüfung erforderlich.",
  },
};
const sc100: PathItem = {
  name: "Microsoft Certified: Cybersecurity Architect Expert",
  code: "SC-100",
  slug: "sc-100",
  relation: {
    en: "Expert certification. Microsoft requires one of SC-200, SC-300 or the Cloud and AI Security Engineer Associate (SC-500) in addition to passing SC-100.",
    de: "Expert-Zertifizierung. Microsoft verlangt zusätzlich zur bestandenen SC-100 eine der Zertifizierungen SC-200, SC-300 oder Cloud and AI Security Engineer Associate (SC-500).",
  },
};
const sc200: PathItem = {
  name: "Microsoft Certified: Security Operations Analyst Associate",
  code: "SC-200",
  slug: "sc-200",
  relation: {
    en: "Security operations with Microsoft Sentinel and Defender XDR: detection, incident response and threat hunting.",
    de: "Security Operations mit Microsoft Sentinel und Defender XDR: Erkennung, Incident Response und Threat Hunting.",
  },
};
const sc300: PathItem = {
  name: "Microsoft Certified: Identity and Access Administrator Associate",
  code: "SC-300",
  slug: "sc-300",
  relation: {
    en: "Identity and access with Microsoft Entra ID: users, authentication, workload identities and identity governance.",
    de: "Identitäten und Zugriffe mit Microsoft Entra ID: Benutzer, Authentifizierung, Workload-Identitäten und Identity Governance.",
  },
};
const sc500: PathItem = {
  name: "Microsoft Certified: Cloud and AI Security Engineer Associate",
  code: "SC-500",
  slug: "sc-500",
  relation: {
    en: "Securing Azure identities, storage, databases and compute, and monitoring security posture.",
    de: "Absicherung von Azure-Identitäten, Speicher, Datenbanken und Compute sowie Überwachung des Sicherheitsstatus.",
  },
};
const msNote = {
  en: "Microsoft sets no prerequisites for its associate exams; associate certifications are renewed every 12 months with a free online assessment.",
  de: "Microsoft setzt für Associate-Prüfungen keine Voraussetzungen; Associate-Zertifizierungen werden alle 12 Monate mit einer kostenlosen Online-Prüfung verlängert.",
};

export const sc200Path: CertPath = {
  before: [sc900],
  after: [sc100],
  similar: [sc300, sc500],
  note: msNote,
  source: ms("Security Operations Analyst Associate", "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/"),
  checked,
};
export const sc300Path: CertPath = {
  before: [sc900],
  after: [sc100],
  similar: [sc200, sc500],
  note: msNote,
  source: ms("Identity and Access Administrator Associate", "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/"),
  checked,
};
export const sc500Path: CertPath = {
  before: [sc900],
  after: [sc100],
  similar: [sc200, sc300],
  note: msNote,
  source: ms("SC-100 Cybersecurity Architect Expert", "https://learn.microsoft.com/en-us/credentials/certifications/cybersecurity-architect-expert/"),
  checked,
};
export const sc900Path: CertPath = {
  before: [],
  after: [sc200, sc300, sc500],
  similar: [
    {
      name: "ISC2 Certified in Cybersecurity",
      code: "CC",
      slug: "isc2-cc",
      relation: {
        en: "Vendor-neutral entry-level security certification, where SC-900 is about Microsoft's own security products.",
        de: "Herstellerneutrale Einstiegszertifizierung, während SC-900 die Sicherheitsprodukte von Microsoft behandelt.",
      },
    },
  ],
  note: {
    en: "SC-900 has no prerequisites and does not expire. It is not required for the Microsoft security associate exams.",
    de: "SC-900 hat keine Voraussetzungen und läuft nicht ab. Für die Microsoft-Security-Associate-Prüfungen ist sie nicht erforderlich.",
  },
  source: ms("SC-900", "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"),
  checked,
};
export const sc100Path: CertPath = {
  before: [sc200, sc300, sc500],
  after: [],
  similar: [],
  note: {
    en: "To earn Cybersecurity Architect Expert you need SC-100 plus one of the three listed associate certifications.",
    de: "Für Cybersecurity Architect Expert brauchst du SC-100 und eine der drei genannten Associate-Zertifizierungen.",
  },
  source: ms("Cybersecurity Architect Expert", "https://learn.microsoft.com/en-us/credentials/certifications/cybersecurity-architect-expert/"),
  checked,
};

export const md102Path: CertPath = {
  before: [],
  after: [],
  similar: [
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      code: "AZ-104",
      slug: "az-104",
      relation: {
        en: "Administration of Azure resources rather than endpoints: identities, storage, compute, networking and monitoring.",
        de: "Administration von Azure-Ressourcen statt Endgeräten: Identitäten, Speicher, Compute, Netzwerk und Überwachung.",
      },
    },
    { ...sc300, relation: { en: "Microsoft Entra ID identity and access, which MD-102 relies on for device join and Conditional Access.", de: "Identitäten und Zugriffe mit Microsoft Entra ID, auf die MD-102 bei Geräteanbindung und bedingtem Zugriff aufbaut." } },
  ],
  note: {
    en: "MD-102 has no prerequisites and is renewed every 12 months with a free online assessment.",
    de: "MD-102 hat keine Voraussetzungen und wird alle 12 Monate mit einer kostenlosen Online-Prüfung verlängert.",
  },
  source: ms("Endpoint Administrator Associate", "https://learn.microsoft.com/en-us/credentials/certifications/modern-desktop/"),
  checked,
};

const ctfl: PathItem = {
  name: "ISTQB Certified Tester Foundation Level",
  code: "CTFL",
  slug: "istqb-ctfl-4",
  relation: {
    en: "Required: ISTQB issues the specialist certificate only to holders of the Foundation Level certificate.",
    de: "Pflicht: ISTQB vergibt das Spezialisten-Zertifikat nur an Inhaber des Foundation-Level-Zertifikats.",
  },
};
const istqbSource = { label: "ISTQB: certifications", url: "https://istqb.org/certifications/" };

export const ctGenaiPath: CertPath = {
  before: [ctfl],
  after: [],
  similar: [
    {
      name: "ISTQB Certified Tester AI Testing",
      code: "CT-AI",
      slug: "istqb-ct-ai",
      relation: {
        en: "Testing AI-based systems (machine learning models and their data), where CT-GenAI is about using generative AI to support testing.",
        de: "Testen KI-basierter Systeme (ML-Modelle und ihre Daten), während CT-GenAI generative KI zur Unterstützung des Testens einsetzt.",
      },
    },
  ],
  note: { en: "ISTQB requires the CTFL certificate for CT-GenAI.", de: "ISTQB setzt für CT-GenAI das CTFL-Zertifikat voraus." },
  source: { label: "ISTQB: Testing with Generative AI", url: "https://istqb.org/certifications/gen-ai/" },
  checked,
};
export const ctAiPath: CertPath = {
  before: [ctfl],
  after: [],
  similar: [
    {
      name: "ISTQB Certified Tester Testing with Generative AI",
      code: "CT-GenAI",
      slug: "istqb-ct-genai",
      relation: {
        en: "Using generative AI and LLMs to support test work, where CT-AI is about testing AI-based systems.",
        de: "Einsatz generativer KI und LLMs zur Unterstützung der Testarbeit, während CT-AI das Testen KI-basierter Systeme behandelt.",
      },
    },
  ],
  note: { en: "ISTQB requires the CTFL certificate for CT-AI.", de: "ISTQB setzt für CT-AI das CTFL-Zertifikat voraus." },
  source: { label: "ISTQB: AI Testing (CT-AI)", url: "https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/" },
  checked,
};
export const ctflPath: CertPath = {
  before: [],
  after: [
    { name: "ISTQB Certified Tester Testing with Generative AI", code: "CT-GenAI", slug: "istqb-ct-genai", relation: { en: "Specialist module; requires CTFL.", de: "Spezialistenmodul; setzt CTFL voraus." } },
    { name: "ISTQB Certified Tester AI Testing", code: "CT-AI", slug: "istqb-ct-ai", relation: { en: "Specialist module; requires CTFL.", de: "Spezialistenmodul; setzt CTFL voraus." } },
    { name: "ISTQB Advanced Level Test Management", code: "CTAL-TM", slug: "istqb-ctal-tm", relation: { en: "Advanced Level module for test managers.", de: "Advanced-Level-Modul für Testmanager." } },
    { name: "ISTQB Advanced Level Test Analyst", code: "CTAL-TA", slug: "istqb-ctal-ta", relation: { en: "Advanced Level module for test analysts.", de: "Advanced-Level-Modul für Testanalysten." } },
  ],
  similar: [],
  note: {
    en: "CTFL is the entry point of the ISTQB scheme and the prerequisite for its specialist and Advanced Level certificates.",
    de: "CTFL ist der Einstieg in das ISTQB-Schema und Voraussetzung für dessen Spezialisten- und Advanced-Level-Zertifikate.",
  },
  source: istqbSource,
  checked,
};

export const capmPath: CertPath = {
  before: [],
  after: [
    {
      name: "Project Management Professional",
      code: "PMP",
      slug: "pmp",
      relation: {
        en: "PMI's experienced-practitioner certification. An active CAPM waives the 35 hours of project management education; the project experience requirement still applies.",
        de: "PMI-Zertifizierung für erfahrene Projektleiter. Ein aktives CAPM ersetzt die 35 Stunden Projektmanagement-Ausbildung; die geforderte Projekterfahrung bleibt.",
      },
    },
  ],
  similar: [
    { name: "PMI Agile Certified Practitioner", code: "PMI-ACP", slug: "pmi-acp", relation: { en: "PMI certification focused on agile ways of working.", de: "PMI-Zertifizierung mit Schwerpunkt auf agilem Arbeiten." } },
  ],
  note: {
    en: "CAPM needs a secondary diploma and 23 hours of project management education, but no project experience.",
    de: "Für CAPM brauchst du einen Sekundarabschluss und 23 Stunden Projektmanagement-Ausbildung, aber keine Projekterfahrung.",
  },
  source: { label: "PMI: CAPM", url: "https://www.pmi.org/certifications/certified-associate-capm" },
  checked,
};
export const pmpPath: CertPath = {
  before: [
    {
      name: "Certified Associate in Project Management",
      code: "CAPM",
      slug: "capm",
      relation: {
        en: "Not required. An active CAPM counts towards the 35 hours of project management education PMP asks for.",
        de: "Keine Pflicht. Ein aktives CAPM wird auf die 35 Stunden Projektmanagement-Ausbildung angerechnet, die PMP verlangt.",
      },
    },
  ],
  after: [
    { name: "PMI Risk Management Professional", code: "PMI-RMP", slug: "pmi-rmp", relation: { en: "PMI specialist certification for project risk management.", de: "PMI-Spezialzertifizierung für Risikomanagement in Projekten." } },
  ],
  similar: [
    { name: "PMI Agile Certified Practitioner", code: "PMI-ACP", slug: "pmi-acp", relation: { en: "PMI certification focused on agile ways of working.", de: "PMI-Zertifizierung mit Schwerpunkt auf agilem Arbeiten." } },
    { name: "IPMA Level D", slug: "ipma-level-d", relation: { en: "Competence-based project management certification from IPMA (ICB4), common in Germany.", de: "Kompetenzbasierte Projektmanagement-Zertifizierung der IPMA (ICB4), in Deutschland verbreitet." } },
  ],
  note: {
    en: "PMP requires 35 hours of project management education and 24 to 60 months of experience leading projects, depending on your education.",
    de: "PMP setzt 35 Stunden Projektmanagement-Ausbildung und je nach Bildungsabschluss 24 bis 60 Monate Erfahrung in der Projektleitung voraus.",
  },
  source: { label: "PMI: PMP", url: "https://www.pmi.org/certifications/project-management-pmp" },
  checked,
};

export const cloudPlusPath: CertPath = {
  before: [
    {
      name: "CompTIA Network+",
      code: "N10-009",
      slug: "comptia-network-plus-n10-009",
      relation: {
        en: "Not required; the Cloud+ objectives recommend Network+ (and Server+) or equivalent knowledge.",
        de: "Keine Pflicht; die Cloud+-Prüfungsziele empfehlen Network+ (und Server+) oder gleichwertiges Wissen.",
      },
    },
  ],
  after: [],
  similar: [
    { name: "AWS Certified Solutions Architect: Associate", code: "SAA-C03", slug: "aws-saa-c03", relation: { en: "Vendor-specific cloud architecture on AWS, where Cloud+ is vendor-neutral.", de: "Herstellerspezifische Cloud-Architektur auf AWS, während Cloud+ herstellerneutral ist." } },
    { name: "Microsoft Certified: Azure Administrator Associate", code: "AZ-104", slug: "az-104", relation: { en: "Vendor-specific cloud administration on Azure.", de: "Herstellerspezifische Cloud-Administration auf Azure." } },
  ],
  note: {
    en: "CompTIA requires no prior certification; it recommends 2 to 3 years as a systems administrator or cloud engineer.",
    de: "CompTIA verlangt keine vorherige Zertifizierung; empfohlen werden 2 bis 3 Jahre als Systemadministrator oder Cloud Engineer.",
  },
  source: { label: "CompTIA: Cloud+", url: "https://www.comptia.org/en-us/certifications/cloud/" },
  checked,
};

/** slug → path, merged into the batch course data in ./index.ts. */
export const extraPaths: Record<string, CertPath> = {
  ...awsPaths,
  ...microsoftPaths,
  ...morePaths,
  ...restPaths,
  "sc-200": sc200Path,
  "sc-300": sc300Path,
  "sc-500": sc500Path,
  "sc-900": sc900Path,
  "sc-100": sc100Path,
  "md-102": md102Path,
  "istqb-ct-genai": ctGenaiPath,
  "istqb-ct-ai": ctAiPath,
  "istqb-ctfl-4": ctflPath,
  capm: capmPath,
  pmp: pmpPath,
  "comptia-cloud-plus-cv0-004": cloudPlusPath,
};

/** slug → glossary for the batch courses. */
export const extraGlossaries: Record<string, Glossary> = {
  "sc-200": sc200Glossary,
  pmp: pmpGlossary,
  "md-102": md102Glossary,
  "isc2-cissp": cisspGlossary,
};

/** Courses without counted data (no blueprint yet) that still get a path. */
export function extraOnly(existing: string[]): CourseData[] {
  const have = new Set(existing);
  return Object.keys(extraPaths)
    .filter((slug) => !have.has(slug))
    .map((slug) => ({ slug, path: extraPaths[slug] }));
}

export function withExtraPaths(list: CourseData[]): CourseData[] {
  return list.map((d) => ({
    ...d,
    ...(extraPaths[d.slug] && !d.path ? { path: extraPaths[d.slug] } : {}),
    ...(extraGlossaries[d.slug] && !d.glossary ? { glossary: extraGlossaries[d.slug] } : {}),
  }));
}
