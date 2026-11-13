import type { CertPath } from "./types";

/**
 * Certification paths for Claude, ISACA and Palo Alto Networks courses, written
 * 13 Nov 2026 from the prerequisites verified in src/config/certifications.ts
 * (official vendor pages, checked 4 Nov 2026).
 */
const checked = "2026-11-13";

const partnerNote = {
  en: "Anthropic names no required order and no prerequisites. The exams are open only to staff of Claude Partner Network organizations.",
  de: "Anthropic nennt keine feste Reihenfolge und keine Voraussetzungen. Die Prüfungen stehen nur Beschäftigten von Organisationen im Claude Partner Network offen.",
};
const anthropicSource = { label: "Anthropic Partner Academy", url: "https://anthropic-partners.skilljar.com/" };

export const ccaoPath: CertPath = {
  before: [],
  after: [
    {
      name: "Claude Certified Developer: Foundations",
      code: "CCDV-F",
      slug: "claude-certified-developer-ccdv-f",
      relation: {
        en: "For software engineers building with the Claude API and Agent SDK. Anthropic's target candidate has 1 to 5 years in software engineering and Python or TypeScript.",
        de: "Für Softwareentwickler, die mit der Claude API und dem Agent SDK bauen. Zielgruppe laut Anthropic: 1 bis 5 Jahre Softwareentwicklung und Python oder TypeScript.",
      },
    },
    {
      name: "Claude Certified Architect: Foundations",
      code: "CCAR-F",
      slug: "claude-certified-architect-ccar-f",
      relation: {
        en: "For solution architects designing Claude systems with the APIs, Agent SDK, Claude Code and MCP; typically 6+ months of hands-on experience.",
        de: "Für Lösungsarchitekten, die Claude-Systeme mit APIs, Agent SDK, Claude Code und MCP entwerfen; typischerweise 6+ Monate Praxiserfahrung.",
      },
    },
  ],
  similar: [],
  note: {
    en: "No software development or API experience is needed for CCAO-F. Anthropic names no required order; the exams are open only to staff of Claude Partner Network organizations.",
    de: "Für CCAO-F ist keine Erfahrung mit Softwareentwicklung oder APIs nötig. Anthropic nennt keine feste Reihenfolge; die Prüfungen stehen nur Beschäftigten von Organisationen im Claude Partner Network offen.",
  },
  source: anthropicSource,
  checked,
};

export const ccdvPath: CertPath = {
  before: [
    {
      name: "Claude Certified Associate: Foundations",
      code: "CCAO-F",
      slug: "claude-certified-associate-ccao-f",
      relation: {
        en: "Not required. Covers using Claude as a productivity tool, without development; useful if you are new to Claude itself.",
        de: "Keine Pflicht. Behandelt Claude als Produktivitätswerkzeug, ohne Entwicklung; sinnvoll, wenn Claude selbst noch neu für dich ist.",
      },
    },
  ],
  after: [
    {
      name: "Claude Certified Architect: Foundations",
      code: "CCAR-F",
      slug: "claude-certified-architect-ccar-f",
      relation: {
        en: "Moves from building to designing: architecture decisions for Claude systems with the APIs, Agent SDK, Claude Code and MCP.",
        de: "Vom Bauen zum Entwerfen: Architekturentscheidungen für Claude-Systeme mit APIs, Agent SDK, Claude Code und MCP.",
      },
    },
  ],
  similar: [],
  note: partnerNote,
  source: anthropicSource,
  checked,
};

export const aaismPath: CertPath = {
  before: [
    {
      name: "ISACA CISM",
      slug: "cism",
      relation: {
        en: "One of the two certifications ISACA accepts as a prerequisite: you need an active CISM or CISSP to be certified in AAISM.",
        de: "Eine der beiden Zertifizierungen, die ISACA als Voraussetzung akzeptiert: Für AAISM brauchst du ein aktives CISM oder CISSP.",
      },
    },
    {
      name: "ISC2 CISSP",
      slug: "isc2-cissp",
      relation: {
        en: "The other accepted prerequisite. An active CISSP qualifies you for AAISM certification.",
        de: "Die andere akzeptierte Voraussetzung. Ein aktives CISSP berechtigt zur AAISM-Zertifizierung.",
      },
    },
  ],
  after: [],
  similar: [
    {
      name: "ISACA Advanced in AI Risk",
      code: "AAIR",
      slug: "isaca-aair",
      relation: {
        en: "ISACA's sister credential for AI risk management rather than AI security management. Accepts a wider list of prerequisite certifications.",
        de: "Die Schwesterzertifizierung von ISACA für KI-Risikomanagement statt KI-Sicherheitsmanagement. Akzeptiert eine längere Liste an Vorzertifizierungen.",
      },
    },
    {
      name: "GIAC AI Platform Security",
      code: "GAIPS",
      slug: "giac-gaips",
      relation: {
        en: "Technical AI security exam without a prerequisite certification; closer to hands-on platform protection than to management.",
        de: "Technische KI-Sicherheitsprüfung ohne Vorzertifizierung; näher am praktischen Schutz von Plattformen als am Management.",
      },
    },
    {
      name: "IAPP Artificial Intelligence Governance Professional",
      code: "AIGP",
      slug: "iapp-aigp",
      relation: {
        en: "AI governance from a privacy and compliance angle, with no prerequisite certification.",
        de: "KI-Governance aus Sicht von Datenschutz und Compliance, ohne Vorzertifizierung.",
      },
    },
  ],
  compare: ["giac-gaips-vs-isaca-aaism"],
  note: {
    en: "AAISM is an advanced credential: ISACA certifies only holders of an active CISM or CISSP.",
    de: "AAISM ist eine weiterführende Zertifizierung: ISACA zertifiziert nur Inhaber eines aktiven CISM oder CISSP.",
  },
  source: { label: "ISACA: AAISM", url: "https://www.isaca.org/credentialing/aaism" },
  checked,
};

export const aairPath: CertPath = {
  before: [
    {
      name: "ISACA CRISC",
      slug: "crisc",
      relation: {
        en: "ISACA's IT risk certification and the closest fit among the eligible certifications ISACA lists for AAIR.",
        de: "Die IT-Risiko-Zertifizierung von ISACA und unter den für AAIR anerkannten Zertifizierungen die thematisch nächste.",
      },
    },
    {
      name: "ISACA CISA",
      slug: "cisa",
      relation: {
        en: "Eligible for AAIR. Audit background; AAIR adds AI-specific risk assessment.",
        de: "Für AAIR anerkannt. Prüfungs- und Audit-Hintergrund; AAIR ergänzt die KI-spezifische Risikobewertung.",
      },
    },
    {
      name: "ISACA CISM",
      slug: "cism",
      relation: {
        en: "Eligible for AAIR. Security management background.",
        de: "Für AAIR anerkannt. Hintergrund im Sicherheitsmanagement.",
      },
    },
    {
      name: "ISC2 CISSP",
      slug: "isc2-cissp",
      relation: {
        en: "Also on ISACA's list of eligible certifications for AAIR.",
        de: "Steht ebenfalls auf der ISACA-Liste der für AAIR anerkannten Zertifizierungen.",
      },
    },
  ],
  after: [],
  similar: [
    {
      name: "ISACA Advanced in AI Security Management",
      code: "AAISM",
      slug: "isaca-aaism",
      relation: {
        en: "ISACA's sister credential for AI security management; requires an active CISM or CISSP.",
        de: "Die Schwesterzertifizierung von ISACA für KI-Sicherheitsmanagement; setzt ein aktives CISM oder CISSP voraus.",
      },
    },
    {
      name: "IAPP Artificial Intelligence Governance Professional",
      code: "AIGP",
      slug: "iapp-aigp",
      relation: {
        en: "AI governance from a privacy and compliance angle, with no prerequisite certification.",
        de: "KI-Governance aus Sicht von Datenschutz und Compliance, ohne Vorzertifizierung.",
      },
    },
    {
      name: "PECB ISO/IEC 42001 Foundation",
      slug: "iso-iec-42001-foundation",
      relation: {
        en: "Entry-level knowledge of the AI management system standard that many AI risk programmes build on.",
        de: "Grundwissen zur Norm für KI-Managementsysteme, auf der viele KI-Risikoprogramme aufbauen.",
      },
    },
  ],
  note: {
    en: "AAIR is an advanced credential: ISACA requires an eligible certification (for example CISA, CISM, CRISC, CISSP or CIA; full list on the ISACA page) plus experience in IT risk or advisory roles.",
    de: "AAIR ist eine weiterführende Zertifizierung: ISACA verlangt eine anerkannte Zertifizierung (zum Beispiel CISA, CISM, CRISC, CISSP oder CIA; vollständige Liste auf der ISACA-Seite) und Erfahrung in IT-Risiko- oder Beratungsrollen.",
  },
  source: { label: "ISACA: AAIR", url: "https://www.isaca.org/credentialing/aair" },
  checked,
};

export const netsecProPath: CertPath = {
  before: [],
  after: [
    {
      name: "Palo Alto Networks Certified Next-Generation Firewall Engineer",
      slug: "palo-alto-ngfw-engineer",
      relation: {
        en: "Palo Alto Networks recommends Network Security Professional and Network Security Analyst for it, plus 2 to 3 years in IT security including 2 years with its NGFW solutions.",
        de: "Palo Alto Networks empfiehlt dafür Network Security Professional und Network Security Analyst sowie 2 bis 3 Jahre IT-Sicherheit, davon 2 Jahre mit seinen NGFW-Lösungen.",
      },
    },
  ],
  similar: [
    {
      name: "Palo Alto Networks Certified Network Security Analyst",
      slug: "palo-alto-netsec-analyst",
      relation: {
        en: "The other certification recommended before NGFW Engineer; covers object and policy configuration, operations with Strata Cloud Manager and troubleshooting.",
        de: "Die zweite Zertifizierung, die vor NGFW Engineer empfohlen wird; behandelt Objekt- und Richtlinienkonfiguration, Betrieb mit Strata Cloud Manager und Fehlersuche.",
      },
    },
  ],
  note: {
    en: "Palo Alto Networks states no prerequisites; it recommends basic network security knowledge and experience with Strata and Prisma SASE, Panorama and Strata Cloud Manager.",
    de: "Palo Alto Networks nennt keine Voraussetzungen; empfohlen werden Grundwissen in Netzwerksicherheit und Erfahrung mit Strata und Prisma SASE, Panorama und Strata Cloud Manager.",
  },
  source: { label: "Palo Alto Networks: Network Security Professional", url: "https://www.paloaltonetworks.com/services/education/palo-alto-networks-netsec-professional" },
  checked,
};
