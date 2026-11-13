import type { CertPath, PathItem } from "./types";

/**
 * Certification paths for ISACA, ISC2, CompTIA (A+, Network+), Kubernetes,
 * Terraform, IIA, ISTQB Advanced, IAPP, PMI and Google Cloud courses, written
 * 13 Nov 2026 from the prerequisites verified on the vendor pages (see
 * src/config/certifications.ts).
 */
const checked = "2026-11-13";
const L = (en: string, de: string) => ({ en, de });
const item = (slug: string, name: string, code: string | undefined, relation: { en: string; de: string }): PathItem => ({ name, ...(code ? { code } : {}), slug, relation });
const P = (before: PathItem[], after: PathItem[], similar: PathItem[], note: { en: string; de: string }, label: string, url: string): CertPath => ({
  before,
  after,
  similar,
  note,
  source: { label, url },
  checked,
});

/* ISACA */
const cisa = item("cisa", "Certified Information Systems Auditor", "CISA", L("ISACA's IS audit certification.", "ISACA-Zertifizierung für IT-Revision."));
const cism = item("cism", "Certified Information Security Manager", "CISM", L("ISACA's security management certification; also a prerequisite for AAISM.", "ISACA-Zertifizierung für Sicherheitsmanagement; zugleich Voraussetzung für AAISM."));
const crisc = item("crisc", "Certified in Risk and Information Systems Control", "CRISC", L("ISACA's IT risk certification.", "ISACA-Zertifizierung für IT-Risikomanagement."));
const aair = item("isaca-aair", "ISACA Advanced in AI Risk", "AAIR", L("Advanced AI risk credential; CISA, CISM and CRISC are among the eligible prerequisites.", "Weiterführende KI-Risiko-Zertifizierung; CISA, CISM und CRISC gehören zu den anerkannten Voraussetzungen."));
const aaism = item("isaca-aaism", "ISACA Advanced in AI Security Management", "AAISM", L("Advanced AI security credential; requires an active CISM or CISSP.", "Weiterführende KI-Sicherheits-Zertifizierung; setzt ein aktives CISM oder CISSP voraus."));
const cobit = item("cobit-2019-foundation", "COBIT 2019 Foundation", undefined, L("Entry-level certificate on ISACA's IT governance framework.", "Einstiegszertifikat zum IT-Governance-Framework von ISACA."));
const isacaNote = (years: string, yearsDe: string) =>
  L(`Anyone can take the exam; to be certified ISACA requires ${years} of relevant work experience within the last 10 years.`, `Die Prüfung steht allen offen; für die Zertifizierung verlangt ISACA ${yearsDe} einschlägige Berufserfahrung innerhalb der letzten 10 Jahre.`);

/* ISC2 */
const cc = item("isc2-cc", "ISC2 Certified in Cybersecurity", "CC", L("Entry-level ISC2 certification; no work experience required.", "Einstiegszertifizierung von ISC2; keine Berufserfahrung nötig."));
const cissp = item("isc2-cissp", "ISC2 CISSP", "CISSP", L("ISC2's flagship security certification; 5 years of experience required for full certification.", "Die zentrale Sicherheitszertifizierung von ISC2; für die volle Zertifizierung sind 5 Jahre Berufserfahrung nötig."));
const ccsp = item("isc2-ccsp", "ISC2 CCSP", "CCSP", L("ISC2's cloud security certification.", "Cloud-Security-Zertifizierung von ISC2."));
const secplus = item("comptia-security-plus-sy0-801", "CompTIA Security+", "SY0-801", L("Vendor-neutral foundational security certification.", "Herstellerneutrale Grundlagen-Zertifizierung für IT-Sicherheit."));

/* CompTIA */
const a1 = item("comptia-a-plus-core-1-220-1201", "CompTIA A+ Core 1", "220-1201", L("First of the two A+ exams: hardware, mobile devices, networking and troubleshooting.", "Erste der beiden A+-Prüfungen: Hardware, Mobilgeräte, Netzwerk und Fehlerbehebung."));
const a2 = item("comptia-a-plus-core-2-220-1202", "CompTIA A+ Core 2", "220-1202", L("Second A+ exam: operating systems, security, software troubleshooting and procedures. Both are needed for A+.", "Zweite A+-Prüfung: Betriebssysteme, Sicherheit, Software-Fehlerbehebung und Abläufe. Für A+ sind beide nötig."));
const netplus = item("comptia-network-plus-n10-009", "CompTIA Network+", "N10-009", L("CompTIA's networking certification; CompTIA recommends A+ first.", "Die Netzwerkzertifizierung von CompTIA; CompTIA empfiehlt vorher A+."));
const ccna = item("ccna-200-301", "Cisco CCNA", "200-301", L("Cisco's associate networking certification, more vendor-specific than Network+.", "Cisco-Associate-Zertifizierung für Netzwerke, stärker herstellerspezifisch als Network+."));

/* Kubernetes */
const cka = item("cka", "Certified Kubernetes Administrator", "CKA", L("Hands-on Kubernetes administration exam.", "Praktische Prüfung zur Kubernetes-Administration."));
const ckad = item("ckad", "Certified Kubernetes Application Developer", "CKAD", L("Hands-on exam on designing and deploying applications on Kubernetes.", "Praktische Prüfung zum Entwerfen und Bereitstellen von Anwendungen auf Kubernetes."));
const cks = item("cks", "Certified Kubernetes Security Specialist", "CKS", L("Hands-on Kubernetes security exam; the CKA must be passed first.", "Praktische Prüfung zur Kubernetes-Sicherheit; vorher muss die CKA bestanden sein."));

/* Terraform */
const tfa = item("terraform-associate-004", "HashiCorp Terraform Associate", "004", L("Foundational Terraform certification; strongly recommended before the Professional exam.", "Grundlegende Terraform-Zertifizierung; vor der Professional-Prüfung dringend empfohlen."));
const tfp = item("terraform-professional-002", "HashiCorp Terraform Authoring and Operations Professional", "002", L("Hands-on professional exam for production Terraform work.", "Praktische Professional-Prüfung für Terraform im Produktivbetrieb."));

/* IIA */
const cia1 = item("cia-part-1", "CIA Part 1: Internal Audit Fundamentals", undefined, L("First of the three CIA exams.", "Erste der drei CIA-Prüfungen."));
const cia2 = item("cia-part-2", "CIA Part 2: Internal Audit Engagement", undefined, L("Second CIA exam: planning and performing engagements.", "Zweite CIA-Prüfung: Planung und Durchführung von Prüfungsaufträgen."));
const cia3 = item("cia-part-3", "CIA Part 3: Internal Audit Function", undefined, L("Third CIA exam: managing the internal audit function.", "Dritte CIA-Prüfung: Leitung der Internen Revision."));
const ciaNote = L("All three parts must be passed within 3 years of applying; eligibility depends on education and experience.", "Alle drei Teile müssen innerhalb von 3 Jahren nach der Anmeldung bestanden werden; die Zulassung hängt von Ausbildung und Erfahrung ab.");

/* ISTQB */
const ctfl = item("istqb-ctfl-4", "ISTQB Certified Tester Foundation Level", "CTFL", L("Required: Advanced Level certificates are only issued to CTFL holders.", "Pflicht: Advanced-Level-Zertifikate werden nur an CTFL-Inhaber vergeben."));
const ta = item("istqb-ctal-ta", "ISTQB Advanced Level Test Analyst", "CTAL-TA", L("Advanced Level module for test analysis and test design.", "Advanced-Level-Modul für Testanalyse und Testentwurf."));
const tm = item("istqb-ctal-tm", "ISTQB Advanced Level Test Management", "CTAL-TM", L("Advanced Level module for test managers.", "Advanced-Level-Modul für Testmanager."));

/* IAPP */
const cippe = item("iapp-cipp-e", "IAPP CIPP/E", "CIPP/E", L("European data protection law (GDPR).", "Europäisches Datenschutzrecht (DSGVO)."));
const cipm = item("iapp-cipm", "IAPP CIPM", "CIPM", L("Running a privacy programme in an organisation.", "Aufbau und Betrieb eines Datenschutzprogramms in einer Organisation."));
const aigp = item("iapp-aigp", "IAPP AIGP", "AIGP", L("AI governance: laws, frameworks and governing AI development and use.", "KI-Governance: Gesetze, Rahmenwerke und Steuerung von Entwicklung und Einsatz von KI."));
const iappNote = L("IAPP sets no prerequisites; certifications are maintained with 20 CPE credits per two-year term.", "IAPP setzt keine Voraussetzungen; Zertifizierungen werden mit 20 CPE-Punkten je zwei Jahre aufrechterhalten.");

/* PMI */
const pmp = item("pmp", "Project Management Professional", "PMP", L("PMI's main project management certification.", "Die zentrale Projektmanagement-Zertifizierung von PMI."));
const acp = item("pmi-acp", "PMI Agile Certified Practitioner", "PMI-ACP", L("PMI certification focused on agile ways of working.", "PMI-Zertifizierung mit Schwerpunkt auf agilem Arbeiten."));
const rmp = item("pmi-rmp", "PMI Risk Management Professional", "PMI-RMP", L("PMI specialist certification for project risk management.", "PMI-Spezialzertifizierung für Risikomanagement in Projekten."));

/* Google Cloud */
const pca = item("google-cloud-professional-cloud-architect", "Google Cloud Professional Cloud Architect", "PCA", L("Designing and managing solutions on Google Cloud.", "Entwurf und Verwaltung von Lösungen auf Google Cloud."));
const pcse = item("google-cloud-professional-cloud-security-engineer", "Google Cloud Professional Cloud Security Engineer", "PCSE", L("Securing workloads and data on Google Cloud.", "Absicherung von Workloads und Daten auf Google Cloud."));
const paa = item("google-cloud-agentic-architect", "Google Cloud Professional Agentic Architect", "PAA", L("Designing agentic AI systems on Google Cloud.", "Entwurf agentischer KI-Systeme auf Google Cloud."));
const gNote = L("Google sets no prerequisites; it recommends 3+ years of industry experience including 1+ year with Google Cloud.", "Google setzt keine Voraussetzungen; empfohlen werden 3+ Jahre Branchenerfahrung, davon 1+ Jahr mit Google Cloud.");

export const morePaths: Record<string, CertPath> = {
  cisa: P([], [crisc, aair], [cism], isacaNote("5 years", "5 Jahre"), "ISACA: CISA", "https://www.isaca.org/credentialing/cisa"),
  cism: P([], [aaism, aair], [cissp, crisc], isacaNote("5 years", "5 Jahre"), "ISACA: CISM", "https://www.isaca.org/credentialing/cism"),
  crisc: P([], [aair], [cisa, cism], isacaNote("3 years", "3 Jahre"), "ISACA: CRISC", "https://www.isaca.org/credentialing/crisc"),
  "cobit-2019-foundation": P([], [cisa, crisc], [], L("No prerequisites. ISACA lists COBIT 2019 Foundation as retiring; check the ISACA page for the successor.", "Keine Voraussetzungen. ISACA führt COBIT 2019 Foundation als auslaufend; den Nachfolger findest du auf der ISACA-Seite."), "ISACA: COBIT Foundation", "https://www.isaca.org/credentialing/cobit/cobit-foundation"),
  "isc2-cc": P([], [secplus, cissp], [], L("No work experience required.", "Keine Berufserfahrung nötig."), "ISC2: CC", "https://www.isc2.org/certifications/cc"),
  "isc2-cissp": P([cc, secplus], [aaism, ccsp], [cism], L("ISC2 requires 5 years of relevant work experience; without it you can become an Associate of ISC2 and earn the experience within 6 years.", "ISC2 verlangt 5 Jahre einschlägige Berufserfahrung; ohne sie kannst du Associate of ISC2 werden und die Erfahrung innerhalb von 6 Jahren nachholen."), "ISC2: CISSP", "https://www.isc2.org/certifications/cissp"),
  "isc2-ccsp": P([cissp], [], [pcse], L("ISC2 requires 5 years of IT experience, including 3 in cybersecurity and 1 in a CCSP domain.", "ISC2 verlangt 5 Jahre IT-Erfahrung, davon 3 in Cybersecurity und 1 in einer CCSP-Domain."), "ISC2: CCSP", "https://www.isc2.org/certifications/ccsp"),
  "comptia-a-plus-core-1-220-1201": P([], [a2, netplus], [], L("No prerequisites; CompTIA recommends 12 months of IT support experience.", "Keine Voraussetzungen; CompTIA empfiehlt 12 Monate Erfahrung im IT-Support."), "CompTIA: A+", "https://www.comptia.org/en-us/certifications/a/"),
  "comptia-a-plus-core-2-220-1202": P([a1], [netplus, secplus], [], L("No prerequisites; A+ requires passing both Core 1 and Core 2.", "Keine Voraussetzungen; für A+ müssen Core 1 und Core 2 bestanden werden."), "CompTIA: A+", "https://www.comptia.org/en-us/certifications/a/"),
  "comptia-network-plus-n10-009": P([a1, a2], [secplus], [ccna], L("No prerequisites; CompTIA recommends A+ and 9 to 12 months of networking experience.", "Keine Voraussetzungen; CompTIA empfiehlt A+ und 9 bis 12 Monate Netzwerkerfahrung."), "CompTIA: Network+", "https://www.comptia.org/en-us/certifications/network/"),
  "ccna-200-301": P([], [], [netplus], L("Cisco sets no prerequisites for the CCNA.", "Cisco setzt für den CCNA keine Voraussetzungen."), "Cisco: CCNA", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html"),
  cka: P([], [cks], [ckad], L("No prerequisites. The CKA is required before the CKS.", "Keine Voraussetzungen. Die CKA ist Voraussetzung für die CKS."), "Linux Foundation: CKA", "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/"),
  ckad: P([], [], [cka], L("No prerequisites.", "Keine Voraussetzungen."), "Linux Foundation: CKAD", "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/"),
  cks: P([cka], [], [ckad], L("The Linux Foundation requires a passed CKA before you attempt the CKS.", "Die Linux Foundation verlangt eine bestandene CKA, bevor du die CKS ablegst."), "Linux Foundation: CKS", "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/"),
  "terraform-associate-004": P([], [tfp], [], L("No prerequisites.", "Keine Voraussetzungen."), "HashiCorp: Terraform Associate", "https://developer.hashicorp.com/certifications/terraform-associate"),
  "terraform-professional-002": P([tfa], [], [], L("No formal prerequisites; HashiCorp strongly recommends the Terraform Associate and production experience.", "Keine formalen Voraussetzungen; HashiCorp empfiehlt dringend die Terraform Associate und Praxiserfahrung im Produktivbetrieb."), "HashiCorp: Terraform Professional", "https://developer.hashicorp.com/certifications/terraform-infrastructure-engineer-professional"),
  "cia-part-2": P([cia1], [cia3], [], ciaNote, "The IIA: CIA", "https://www.theiia.org/en/certifications/cia/"),
  "cia-part-3": P([cia1, cia2], [], [cisa], ciaNote, "The IIA: CIA", "https://www.theiia.org/en/certifications/cia/"),
  "istqb-ctal-ta": P([ctfl], [], [tm], L("ISTQB requires the CTFL certificate and practical experience.", "ISTQB verlangt das CTFL-Zertifikat und Praxiserfahrung."), "ISTQB: Advanced Level Test Analyst", "https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/"),
  "istqb-ctal-tm": P([ctfl], [], [ta], L("ISTQB requires the CTFL certificate and practical experience.", "ISTQB verlangt das CTFL-Zertifikat und Praxiserfahrung."), "ISTQB: Advanced Level Test Management", "https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"),
  "iapp-cipp-e": P([], [cipm], [aigp], iappNote, "IAPP: CIPP/E", "https://iapp.org/certify/cippe/"),
  "iapp-cipm": P([cippe], [], [aigp], iappNote, "IAPP: CIPM", "https://iapp.org/certify/cipm"),
  "iapp-aigp": P([], [], [cippe, aaism], iappNote, "IAPP: AIGP", "https://iapp.org/certify/aigp"),
  "pmi-acp": P([], [], [pmp], L("PMI requires 21 hours of agile training and 1 to 2 years of agile experience, depending on your background.", "PMI verlangt 21 Stunden Agile-Schulung und je nach Hintergrund 1 bis 2 Jahre agile Erfahrung."), "PMI: PMI-ACP", "https://www.pmi.org/certifications/agile-acp"),
  "pmi-rmp": P([], [], [pmp, crisc], L("PMI requires project risk management experience (24 to 36 months) and 30 to 40 hours of risk management education.", "PMI verlangt Erfahrung im Projektrisikomanagement (24 bis 36 Monate) und 30 bis 40 Stunden Ausbildung im Risikomanagement."), "PMI: PMI-RMP", "https://www.pmi.org/certifications/risk-management-rmp"),
  "google-cloud-professional-cloud-architect": P([], [paa], [pcse], gNote, "Google Cloud: Professional Cloud Architect", "https://cloud.google.com/learn/certification/cloud-architect"),
  "google-cloud-professional-cloud-security-engineer": P([], [], [pca, ccsp], gNote, "Google Cloud: Professional Cloud Security Engineer", "https://cloud.google.com/learn/certification/cloud-security-engineer"),
};
