import type { CertPath, Glossary, GlossaryTerm } from "./types";

/**
 * Glossary and certification path shared by CompTIA Security+ SY0-701 (V7) and
 * SY0-801 (V8). Both versions use the same five domain names (d1 to d5), so one
 * glossary serves both. Written 13 Nov 2026 from the CompTIA exam objectives and
 * NIST definitions; path facts from comptia.org and the catalogue's verified
 * prerequisites.
 */

const t = (id: string, term: string, domain: string, de: string, en: string, deDef: string, abbr?: string): GlossaryTerm => ({
  id,
  term,
  ...(abbr ? { abbr } : {}),
  domain,
  translations: { en: term, de },
  definition: { en, de: deDef },
});

const terms: GlossaryTerm[] = [
  /* d1 General Security Concepts */
  t("cia-triad", "CIA triad", "d1", "CIA-Triade (Vertraulichkeit, Integrität, Verfügbarkeit)",
    "Confidentiality, integrity and availability: the three basic goals of information security. Controls are judged by which of the three they protect.",
    "Vertraulichkeit, Integrität und Verfügbarkeit: die drei Grundziele der Informationssicherheit. Maßnahmen werden danach beurteilt, welches der drei Ziele sie schützen."),
  t("non-repudiation", "Non-repudiation", "d1", "Nichtabstreitbarkeit",
    "Proof that a specific party performed an action, so it cannot later deny it. Typically achieved with digital signatures and audit logs.",
    "Nachweis, dass eine bestimmte Partei eine Aktion ausgeführt hat, sodass sie dies später nicht bestreiten kann. Meist über digitale Signaturen und Audit-Logs."),
  t("aaa", "Authentication, authorization and accounting", "d1", "Authentifizierung, Autorisierung und Accounting (AAA)",
    "Authentication proves who someone is, authorization decides what they may do, accounting records what they did.",
    "Authentifizierung prüft, wer jemand ist, Autorisierung legt fest, was er darf, Accounting protokolliert, was er getan hat.", "AAA"),
  t("zero-trust", "Zero Trust", "d1", "Zero Trust",
    "A security model that grants no implicit trust based on network location. Every request is authenticated and authorized; the control plane (policy engine, policy administrator) decides, the data plane enforces.",
    "Sicherheitsmodell ohne implizites Vertrauen aufgrund des Netzwerkstandorts. Jede Anfrage wird authentifiziert und autorisiert; die Control Plane (Policy Engine, Policy Administrator) entscheidet, die Data Plane setzt durch."),
  t("pki", "Public key infrastructure", "d1", "Public-Key-Infrastruktur (PKI)",
    "The certificate authorities, certificates, policies and revocation services (CRL, OCSP) that bind public keys to identities.",
    "Zertifizierungsstellen, Zertifikate, Richtlinien und Sperrdienste (CRL, OCSP), die öffentliche Schlüssel an Identitäten binden.", "PKI"),
  t("hashing", "Hashing", "d1", "Hashing",
    "A one-way function that turns data into a fixed-length digest. Any change to the data changes the digest, so hashes check integrity. Hashes are not encryption: they cannot be reversed.",
    "Einwegfunktion, die Daten in einen Hashwert fester Länge umwandelt. Jede Änderung der Daten ändert den Hashwert, daher prüft man damit die Integrität. Hashing ist keine Verschlüsselung und lässt sich nicht umkehren."),
  t("salting", "Salting", "d1", "Salting",
    "Adding a random value to each password before hashing, so identical passwords get different hashes and precomputed rainbow tables stop working.",
    "Jedem Passwort vor dem Hashen ein Zufallswert hinzufügen, damit gleiche Passwörter unterschiedliche Hashwerte erhalten und vorberechnete Rainbow Tables nicht mehr funktionieren."),
  t("digital-signature", "Digital signature", "d1", "Digitale Signatur",
    "A hash of the data encrypted with the sender's private key. Anyone with the public key can verify integrity, authenticity and non-repudiation.",
    "Mit dem privaten Schlüssel des Absenders verschlüsselter Hashwert der Daten. Jeder mit dem öffentlichen Schlüssel kann Integrität, Authentizität und Nichtabstreitbarkeit prüfen."),
  t("change-management", "Change management", "d1", "Änderungsmanagement (Change Management)",
    "The approval process for changes to systems: impact analysis, approval by owners or a change board, a maintenance window, a backout plan and documentation.",
    "Freigabeprozess für Änderungen an Systemen: Auswirkungsanalyse, Freigabe durch Verantwortliche oder ein Change Board, Wartungsfenster, Rückfallplan und Dokumentation."),

  /* d2 Threats, Vulnerabilities, and Attacks */
  t("threat-actor", "Threat actor", "d2", "Bedrohungsakteur",
    "Whoever carries out an attack: nation-state, organized crime, hacktivist, insider, unskilled attacker or shadow IT. They differ in resources, sophistication and motivation.",
    "Wer einen Angriff ausführt: Nationalstaat, organisierte Kriminalität, Hacktivist, Insider, unerfahrener Angreifer oder Schatten-IT. Sie unterscheiden sich in Ressourcen, Fähigkeiten und Motivation."),
  t("social-engineering", "Social engineering", "d2", "Social Engineering",
    "Manipulating people into revealing information or taking actions, for example phishing, vishing, smishing, pretexting or impersonation.",
    "Menschen dazu bringen, Informationen preiszugeben oder Handlungen auszuführen, etwa durch Phishing, Vishing, Smishing, Pretexting oder Identitätsvortäuschung."),
  t("phishing", "Phishing", "d2", "Phishing",
    "Fraudulent messages, usually email, that trick recipients into clicking a link, opening an attachment or entering credentials. Spear phishing targets specific people.",
    "Betrügerische Nachrichten, meist E-Mails, die Empfänger dazu bringen, einen Link anzuklicken, einen Anhang zu öffnen oder Zugangsdaten einzugeben. Spear Phishing zielt auf bestimmte Personen."),
  t("ransomware", "Ransomware", "d2", "Ransomware",
    "Malware that encrypts or steals data and demands payment. Offline or immutable backups and tested recovery are the main safeguards.",
    "Schadsoftware, die Daten verschlüsselt oder stiehlt und Lösegeld fordert. Wichtigster Schutz: Offline- oder unveränderliche Backups und getestete Wiederherstellung."),
  t("sql-injection", "SQL injection", "d2", "SQL-Injection",
    "Inserting SQL code into input that the application builds into a database query. Prevented with parameterized queries and input validation.",
    "Einschleusen von SQL-Code in Eingaben, die die Anwendung in eine Datenbankabfrage einbaut. Verhindert durch parametrisierte Abfragen und Eingabeprüfung.", "SQLi"),
  t("xss", "Cross-site scripting", "d2", "Cross-Site-Scripting (XSS)",
    "Injecting script into a web page that other users' browsers then run. Prevented with output encoding, input validation and a Content Security Policy.",
    "Einschleusen von Skripten in eine Webseite, die dann im Browser anderer Nutzer ausgeführt werden. Verhindert durch Ausgabekodierung, Eingabeprüfung und eine Content Security Policy.", "XSS"),
  t("on-path-attack", "On-path attack", "d2", "On-Path-Angriff",
    "An attacker positions themselves between two parties to read or change traffic (formerly called man-in-the-middle), for example through ARP poisoning or a rogue access point.",
    "Ein Angreifer schaltet sich zwischen zwei Parteien, um Verkehr mitzulesen oder zu verändern (früher Man-in-the-Middle), etwa per ARP Poisoning oder einem gefälschten Access Point."),
  t("zero-day", "Zero-day vulnerability", "d2", "Zero-Day-Schwachstelle",
    "A vulnerability that is exploited before the vendor has released a fix. Signature-based tools usually cannot detect it.",
    "Schwachstelle, die ausgenutzt wird, bevor der Hersteller eine Korrektur veröffentlicht hat. Signaturbasierte Werkzeuge erkennen sie meist nicht."),
  t("supply-chain-attack", "Supply chain attack", "d2", "Lieferkettenangriff",
    "Compromising a supplier, software update, library or service provider to reach its customers.",
    "Kompromittierung eines Lieferanten, Software-Updates, einer Bibliothek oder eines Dienstleisters, um dessen Kunden zu erreichen."),
  t("ioc", "Indicator of compromise", "d2", "Kompromittierungsindikator (IoC)",
    "Evidence that a system may have been breached, such as account lockouts, impossible travel, unusual outbound traffic, missing logs or unknown processes.",
    "Hinweis darauf, dass ein System kompromittiert sein könnte, etwa Kontosperrungen, unmögliche Reisebewegungen, ungewöhnlicher ausgehender Verkehr, fehlende Logs oder unbekannte Prozesse.", "IoC"),

  /* d3 Security Architecture */
  t("segmentation", "Network segmentation", "d3", "Netzwerksegmentierung",
    "Dividing a network into zones (for example with VLANs, firewalls or a screened subnet) so an attacker who gets into one zone cannot move freely to others.",
    "Aufteilung eines Netzwerks in Zonen (etwa mit VLANs, Firewalls oder einem Screened Subnet), damit sich ein Angreifer nach dem Eindringen nicht frei in andere Zonen bewegen kann."),
  t("data-classification", "Data classification", "d3", "Datenklassifizierung",
    "Labelling data by sensitivity (for example public, internal, confidential, restricted) so the right protection, handling and retention apply.",
    "Kennzeichnung von Daten nach Schutzbedarf (etwa öffentlich, intern, vertraulich, streng vertraulich), damit passende Schutzmaßnahmen, Handhabung und Aufbewahrung gelten."),
  t("data-states", "Data states", "d3", "Datenzustände",
    "Data at rest (stored), in transit (moving across a network) and in use (being processed). Each state needs its own protection, such as disk encryption or TLS.",
    "Ruhende Daten (gespeichert), Daten in Übertragung (im Netzwerk) und Daten in Verwendung (in Verarbeitung). Jeder Zustand braucht eigenen Schutz, etwa Festplattenverschlüsselung oder TLS."),
  t("rto-rpo", "Recovery time and recovery point objectives", "d3", "Recovery Time Objective und Recovery Point Objective (RTO/RPO)",
    "RTO is the maximum acceptable time to restore a service; RPO is the maximum acceptable data loss, measured in time since the last good backup.",
    "RTO ist die maximal tolerierbare Zeit bis zur Wiederherstellung eines Dienstes; RPO ist der maximal tolerierbare Datenverlust, gemessen als Zeit seit der letzten brauchbaren Sicherung.", "RTO/RPO"),
  t("high-availability", "High availability", "d3", "Hochverfügbarkeit",
    "Designing systems to keep running despite failures, for example with redundancy, load balancing, clustering and geographically separate sites.",
    "Systeme so auslegen, dass sie trotz Ausfällen weiterlaufen, etwa durch Redundanz, Lastverteilung, Clustering und räumlich getrennte Standorte."),
  t("iac", "Infrastructure as code", "d3", "Infrastructure as Code (IaC)",
    "Defining infrastructure in version-controlled configuration files, so environments are reproducible and changes can be reviewed before deployment.",
    "Infrastruktur in versionierten Konfigurationsdateien beschreiben, damit Umgebungen reproduzierbar sind und Änderungen vor dem Ausrollen geprüft werden können.", "IaC"),

  /* d4 Security Operations */
  t("least-privilege", "Least privilege", "d4", "Prinzip der minimalen Rechte",
    "Giving users, services and systems only the access they need for their task, and only for as long as they need it.",
    "Nutzern, Diensten und Systemen nur die Rechte geben, die sie für ihre Aufgabe brauchen, und nur so lange wie nötig."),
  t("mfa", "Multifactor authentication", "d4", "Mehrfaktor-Authentifizierung (MFA)",
    "Authentication with factors from at least two different categories: something you know, something you have, something you are (and sometimes somewhere you are).",
    "Authentifizierung mit Faktoren aus mindestens zwei verschiedenen Kategorien: Wissen, Besitz, Inhärenz (manchmal auch Ort).", "MFA"),
  t("sso", "Single sign-on", "d4", "Single Sign-on (SSO)",
    "One authentication gives access to several systems, often through federation protocols such as SAML or OpenID Connect.",
    "Eine Anmeldung gewährt Zugang zu mehreren Systemen, oft über Föderationsprotokolle wie SAML oder OpenID Connect.", "SSO"),
  t("siem", "Security information and event management", "d4", "Security Information and Event Management (SIEM)",
    "A system that collects and correlates logs from many sources, raises alerts and supports investigations and reporting.",
    "System, das Logs aus vielen Quellen sammelt und korreliert, Alarme auslöst und Untersuchungen sowie Berichte unterstützt.", "SIEM"),
  t("edr", "Endpoint detection and response", "d4", "Endpoint Detection and Response (EDR)",
    "Software on endpoints that monitors behaviour, detects threats and can isolate a device or stop a process. XDR extends this across network, cloud and email.",
    "Software auf Endgeräten, die Verhalten überwacht, Bedrohungen erkennt und ein Gerät isolieren oder einen Prozess stoppen kann. XDR erweitert das auf Netzwerk, Cloud und E-Mail.", "EDR"),
  t("soar", "Security orchestration, automation and response", "d4", "Security Orchestration, Automation and Response (SOAR)",
    "Tools that automate repeatable response steps with playbooks, for example enriching an alert or disabling an account.",
    "Werkzeuge, die wiederholbare Reaktionsschritte mit Playbooks automatisieren, etwa einen Alarm anreichern oder ein Konto sperren.", "SOAR"),
  t("cvss", "Common Vulnerability Scoring System", "d4", "Common Vulnerability Scoring System (CVSS)",
    "A 0 to 10 score for the severity of a vulnerability, used with CVE identifiers to prioritize remediation together with asset value and exposure.",
    "Bewertung des Schweregrads einer Schwachstelle von 0 bis 10; dient zusammen mit CVE-Kennungen, Wert und Exponiertheit des Systems zur Priorisierung der Behebung.", "CVSS"),
  t("hardening", "Hardening", "d4", "Härtung",
    "Reducing the attack surface of a system: removing unused services and accounts, changing defaults, applying patches and secure configuration baselines.",
    "Verkleinern der Angriffsfläche eines Systems: ungenutzte Dienste und Konten entfernen, Standardeinstellungen ändern, Patches und sichere Konfigurations-Baselines anwenden."),
  t("incident-response", "Incident response process", "d4", "Prozess zur Reaktion auf Sicherheitsvorfälle",
    "The phases CompTIA lists: preparation, detection, analysis, containment, eradication, recovery and lessons learned.",
    "Die Phasen nach CompTIA: Vorbereitung, Erkennung, Analyse, Eindämmung, Beseitigung, Wiederherstellung und Lessons Learned."),
  t("chain-of-custody", "Chain of custody", "d4", "Beweismittelkette (Chain of Custody)",
    "Documentation of who collected, handled and stored evidence and when, so it stays admissible. Part of digital forensics together with legal hold and preservation.",
    "Dokumentation, wer Beweismittel wann gesammelt, gehandhabt und gelagert hat, damit sie verwertbar bleiben. Teil der digitalen Forensik, zusammen mit Legal Hold und Sicherung."),

  /* d5 Security Program Management and Oversight */
  t("risk-register", "Risk register", "d5", "Risikoregister",
    "A list of identified risks with owner, likelihood, impact, risk level and chosen response (accept, avoid, transfer or mitigate).",
    "Liste der erkannten Risiken mit Verantwortlichem, Eintrittswahrscheinlichkeit, Auswirkung, Risikostufe und gewählter Behandlung (akzeptieren, vermeiden, übertragen oder mindern)."),
  t("ale", "Annualized loss expectancy", "d5", "Jährliche Verlusterwartung (ALE)",
    "Quantitative risk measure: ALE = SLE × ARO. The single loss expectancy (SLE) is asset value × exposure factor; ARO is how often per year the event is expected.",
    "Quantitatives Risikomaß: ALE = SLE × ARO. Die Einzelverlusterwartung (SLE) ist Wert des Assets × Expositionsfaktor; ARO gibt an, wie oft pro Jahr das Ereignis erwartet wird.", "ALE"),
  t("bia", "Business impact analysis", "d5", "Business-Impact-Analyse (BIA)",
    "Identifies critical business functions and the impact of their disruption; the basis for RTO, RPO and continuity planning.",
    "Ermittelt kritische Geschäftsprozesse und die Folgen ihres Ausfalls; Grundlage für RTO, RPO und Notfallplanung.", "BIA"),
  t("third-party-risk", "Third-party risk management", "d5", "Management von Drittparteirisiken",
    "Assessing and monitoring vendors: due diligence, right-to-audit clauses, agreements such as SLA, MOU, MSA and NDA, and ongoing review.",
    "Bewertung und Überwachung von Dienstleistern: Due Diligence, Auditrechte, Vereinbarungen wie SLA, MOU, MSA und NDA sowie laufende Überprüfung."),
  t("penetration-test", "Penetration test", "d5", "Penetrationstest",
    "An authorized simulated attack within agreed rules of engagement. Tests can be known, partially known or unknown environment (white, gray or black box).",
    "Autorisierter simulierter Angriff innerhalb vereinbarter Rules of Engagement. Tests erfolgen mit bekannter, teilweise bekannter oder unbekannter Umgebung (White, Gray oder Black Box)."),
  t("security-awareness", "Security awareness training", "d5", "Security-Awareness-Schulung",
    "Training and phishing simulations that teach staff to recognize and report threats; measured by reporting rates and repeat-click rates.",
    "Schulungen und Phishing-Simulationen, die Beschäftigten beibringen, Bedrohungen zu erkennen und zu melden; gemessen an Melde- und Wiederholungsklickquoten."),
];

export const securityPlusGlossary: Glossary = {
  reviewed: "2026-11-13",
  sources: [
    { label: "CompTIA: Security+ certification", url: "https://www.comptia.org/en-us/certifications/security/" },
    { label: "CompTIA: Security+ SY0-801 V8 Exam Objectives (PDF)", url: "https://lecbyo.files.cmp.optimizely.com/download/77f3bd3223ac11f180820e495f189928" },
    { label: "NIST Computer Security Resource Center: Glossary", url: "https://csrc.nist.gov/glossary" },
    { label: "NIST SP 800-207: Zero Trust Architecture", url: "https://csrc.nist.gov/pubs/sp/800/207/final" },
  ],
  terms,
};

/** Path for one Security+ version; the other version is listed as "similar". */
export function securityPlusPath(version: "701" | "801"): CertPath {
  const other = version === "701" ? "801" : "701";
  return {
    before: [
      {
        name: "CompTIA Network+",
        code: "N10-009",
        slug: "comptia-network-plus-n10-009",
        relation: {
          en: version === "701"
            ? "CompTIA names Network+ as recommended experience for Security+ V7. Not required, but Security+ assumes the networking basics it covers."
            : "CompTIA's networking certification. Not required for Security+, but Security+ assumes the networking basics it covers.",
          de: version === "701"
            ? "CompTIA nennt Network+ als empfohlene Vorerfahrung für Security+ V7. Keine Pflicht, aber Security+ setzt die dort behandelten Netzwerkgrundlagen voraus."
            : "Die Netzwerkzertifizierung von CompTIA. Keine Pflicht für Security+, aber Security+ setzt die dort behandelten Netzwerkgrundlagen voraus.",
        },
      },
      {
        name: "ISC2 Certified in Cybersecurity",
        code: "CC",
        slug: "isc2-cc",
        relation: {
          en: "Entry-level security certification from ISC2. A gentler first step into security concepts for people without IT security experience.",
          de: "Einstiegszertifizierung von ISC2. Ein leichterer erster Schritt in Sicherheitskonzepte für Menschen ohne Erfahrung in der IT-Sicherheit.",
        },
      },
    ],
    after: [
      {
        name: "CompTIA CySA+",
        url: "https://www.comptia.org/en/certifications/cybersecurity-analyst/v4/",
        relation: {
          en: "Defensive analyst certification: threat detection, vulnerability management and incident response in a SOC.",
          de: "Zertifizierung für defensive Analysten: Bedrohungserkennung, Schwachstellenmanagement und Incident Response im SOC.",
        },
      },
      {
        name: "CompTIA PenTest+",
        url: "https://comptia.org/en-us/certifications/pentest",
        relation: {
          en: "Offensive counterpart to CySA+: planning, carrying out and reporting penetration tests.",
          de: "Offensives Gegenstück zu CySA+: Penetrationstests planen, durchführen und berichten.",
        },
      },
      {
        name: "CompTIA SecAI+",
        code: "CY0-001",
        slug: "comptia-secai-plus-cy0-001",
        relation: {
          en: "Security of AI systems. CompTIA recommends Security+, CySA+, PenTest+ or equivalent knowledge first.",
          de: "Sicherheit von KI-Systemen. CompTIA empfiehlt vorher Security+, CySA+, PenTest+ oder gleichwertiges Wissen.",
        },
      },
      {
        name: "CompTIA SecurityX",
        code: "CAS-005",
        url: "https://comptia.org/certifications/SecurityX",
        relation: {
          en: "CompTIA's expert-level security certification (formerly CASP+) for security architects and senior engineers.",
          de: "CompTIAs Sicherheitszertifizierung auf Expertenniveau (früher CASP+) für Sicherheitsarchitekten und erfahrene Engineers.",
        },
      },
      {
        name: "ISC2 CISSP",
        slug: "isc2-cissp",
        relation: {
          en: "Management-oriented security certification. ISC2 requires five years of paid work experience in its domains for full certification.",
          de: "Managementorientierte Sicherheitszertifizierung. ISC2 verlangt für die volle Zertifizierung fünf Jahre bezahlte Berufserfahrung in ihren Domains.",
        },
      },
    ],
    similar: [
      {
        name: `CompTIA Security+ SY0-${other}`,
        slug: `comptia-security-plus-sy0-${other}`,
        relation:
          version === "701"
            ? {
                en: "The new Security+ version (V8), expected to launch on or around 17 November 2026. Same five domain names, updated objectives (for example AI threats).",
                de: "Die neue Security+-Version (V8), Start laut CompTIA um den 17. November 2026. Gleiche fünf Domainnamen, überarbeitete Prüfungsziele (zum Beispiel KI-Bedrohungen).",
              }
            : {
                en: "The previous Security+ version (V7). It stays available until 11 June 2027 in English and 13 August 2027 in other languages.",
                de: "Die bisherige Security+-Version (V7). Sie bleibt bis 11. Juni 2027 auf Englisch und bis 13. August 2027 in anderen Sprachen verfügbar.",
              },
      },
    ],
    note:
      version === "701"
        ? {
            en: "CompTIA requires no prior certification for Security+; for V7 it recommends Network+ and two years of experience as a security or systems administrator.",
            de: "CompTIA verlangt für Security+ keine vorherige Zertifizierung; für V7 empfiehlt es Network+ und zwei Jahre Erfahrung als Sicherheits- oder Systemadministrator.",
          }
        : {
            en: "CompTIA requires no prior certification for Security+; for V8 it recommends two years of hands-on experience as a security administrator.",
            de: "CompTIA verlangt für Security+ keine vorherige Zertifizierung; für V8 empfiehlt es zwei Jahre praktische Erfahrung als Sicherheitsadministrator.",
          },
    source: { label: "CompTIA: Security+ certification", url: "https://www.comptia.org/en-us/certifications/security/" },
    checked: "2026-11-13",
  };
}
