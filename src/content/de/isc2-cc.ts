import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for ISC2 Certified in Cybersecurity (CC),
 * exam outline effective 1 September 2026. Exam facts and weights follow the
 * verified record in src/config/certifications.ts (ISC2 CC exam outline page,
 * re-checked 2026-11-24). Section numbers follow the outline (1.1 to 5.5).
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const OUTLINE = {
  label: "ISC2: CC-Prüfungsübersicht (gültig ab 1. September 2026)",
  url: "https://www.isc2.org/certifications/cc/cc-certification-exam-outline",
};

export const isc2CcDe: DeContent = {
  slug: "isc2-cc",
  name: "ISC2 Certified in Cybersecurity (CC)",
  languageNote:
    "ISC2 bietet die CC-Prüfung auf Deutsch an, und die Prüfungsübersicht gibt es auch als deutsches PDF. Fachbegriffe wie Zero Trust, Least Privilege oder Tabletop-Übung solltest du trotzdem auch auf Englisch kennen.",
  facts: [
    { label: "Prüfungsanbieter", value: "ISC2, über Pearson VUE" },
    { label: "Prüfungsversion", value: "Prüfungsübersicht gültig ab 1. September 2026" },
    { label: "Fragen", value: "100 bis 125 (computergestütztes adaptives Testen, CAT)" },
    { label: "Dauer", value: "2 Stunden" },
    { label: "Bestehensgrenze", value: "700 von 1.000 Punkten" },
    { label: "Fragetypen", value: "Multiple Choice und erweiterte Aufgabentypen" },
    { label: "Prüfungssprachen", value: "Englisch, Chinesisch, Deutsch, Japanisch, Spanisch" },
    { label: "Durchführung", value: "Nur vor Ort in einem Pearson-VUE-Testcenter" },
    { label: "Voraussetzungen", value: "Keine Berufserfahrung erforderlich" },
  ],
  domains: [
    { id: "d1", name: "Sicherheitsprinzipien", weight: "24 %" },
    { id: "d2", name: "Sicherheits-Governance", weight: "17,3 %" },
    { id: "d3", name: "Konzepte des Identitäts- und Zugriffsmanagements (IAM)", weight: "20 %" },
    { id: "d4", name: "Konzepte der Netzwerk- und Cloud-Sicherheit", weight: "21,3 %" },
    { id: "d5", name: "Sicherheitsbetrieb und Reaktion auf Vorfälle", weight: "17,3 %" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "isc2-cc",
    summary:
      "ISC2 Certified in Cybersecurity (CC) ist das Einstiegszertifikat von ISC2. Seit dem 1. September 2026 gilt eine neue Prüfungsübersicht mit fünf Bereichen: Sicherheitsprinzipien (24 %), Netzwerk- und Cloud-Sicherheit (21,3 %), IAM (20 %), Sicherheits-Governance (17,3 %) sowie Sicherheitsbetrieb und Reaktion auf Vorfälle (17,3 %). Die adaptive Prüfung hat 100 bis 125 Fragen in 2 Stunden; bestanden ist ab 700 von 1.000 Punkten.",
    whoFor: [
      "Quereinsteiger in die Cybersicherheit, auch ohne IT-Erfahrung",
      "Studierende und Auszubildende, die einen anerkannten Einstieg suchen",
      "IT-Fachleute aus Support oder Administration, die in die Sicherheit wechseln wollen",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die CC-Prüfung nutzt computergestütztes adaptives Testen (CAT): Die Schwierigkeit der nächsten Frage richtet sich nach deinen bisherigen Antworten, und die Prüfung endet, sobald das System mit ausreichender Sicherheit entscheiden kann, zwischen 100 und 125 Fragen. Du hast 2 Stunden Zeit und bestehst mit 700 von 1.000 Punkten. Neben Multiple Choice gibt es erweiterte Aufgabentypen.",
          "Die Prüfung findet nur vor Ort in einem Pearson-VUE-Testcenter statt und wird auf Englisch, Chinesisch, Deutsch, Japanisch und Spanisch angeboten. Berufserfahrung ist nicht erforderlich. Seit dem 1. September 2026 gilt die neue Prüfungsübersicht; ältere Lernmaterialien mit den Bereichen „Business Continuity, Disaster Recovery & Incident Response“ oder „Access Controls Concepts“ beziehen sich auf die alte Fassung.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Sicherheitsprinzipien sind mit 24 % der größte Bereich: CIA-Triade, Authentifizierung, Autorisierung und Accounting (AAA), Nichtabstreitbarkeit, Datenschutz, Risikomanagement, Governance mit Gesetzen, Frameworks und Richtlinien, technische, administrative und physische Kontrollen sowie der ISC2 Code of Ethics. Netzwerk- und Cloud-Sicherheit (21,3 %) umfasst OSI- und TCP/IP-Modell, IPv4 und IPv6, VPN, Firewalls, WLAN, IoT, Segmentierung, Defense in Depth, Zero Trust sowie Cloud-Service- und Bereitstellungsmodelle mit geteilter Verantwortung.",
          "IAM (20 %) behandelt den Lebenszyklus von Identitäten von der Rollendefinition bis zum Entzug der Rechte, Least Privilege, Funktionstrennung und Zugriffskontrollmodelle. Sicherheits-Governance (17,3 %) umfasst GRC, Business Continuity und Disaster Recovery, Sicherheitsbewusstsein und Kennzahlen wie Key Risk Indicators. Sicherheitsbetrieb (17,3 %) deckt Datensicherheit und Verschlüsselung, Logging und Monitoring, Bedrohungsakteure, Incident Response, Asset- und Änderungsmanagement sowie Sicherheitstests ab. In allen Bereichen kommen neu auch KI-Bezüge vor, etwa Model Poisoning, Model Drift oder Datenabfluss über öffentliche KI-Dienste.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Die neue Prüfungsübersicht lesen",
            body: "Lade die Prüfungsübersicht (gültig ab 1. September 2026) bei ISC2 herunter, auf Wunsch auf Deutsch. Prüfe bei jedem Lernmaterial, ob es schon die neuen fünf Bereiche abdeckt.",
          },
          {
            title: "Grundbegriffe sicher beherrschen",
            body: "Erstelle Karteikarten zu CIA, AAA, Risiko, Bedrohung, Schwachstelle, Kontrollarten und den Zugriffskontrollmodellen DAC, MAC und RBAC. Diese Begriffe tauchen in allen Bereichen wieder auf.",
          },
          {
            title: "Netzwerkgrundlagen nachholen",
            body: "Wer keine IT-Erfahrung hat, sollte sich OSI-Modell, IP-Adressen, Ports und die Aufgaben von Firewall, VPN und VLAN in Ruhe erarbeiten. Hier verlieren Quereinsteiger die meisten Punkte.",
          },
          {
            title: "Wie ein Sicherheitsverantwortlicher denken",
            body: "Viele Fragen fragen nach der besten oder ersten Maßnahme. Sicherheit von Menschen geht immer vor, und Entscheidungen orientieren sich an Richtlinien und Risiko, nicht an Technik um ihrer selbst willen.",
          },
          {
            title: "Mit Übungsfragen trainieren",
            body: "Bearbeite gemischte Übungsfragen aus allen Bereichen und lies die Erklärungen. Da die Prüfung adaptiv ist, kannst du Fragen nicht überspringen und später zurückkehren; übe, jede Frage direkt zu entscheiden.",
          },
          {
            title: "Den Termin buchen",
            body: "Buche einen Termin in einem Pearson-VUE-Testcenter, wenn du in Übungsprüfungen sicher über 80 % liegst.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Mit Material zur alten Prüfungsübersicht lernen. Seit dem 1. September 2026 gelten neue Bereiche, inklusive KI-Themen und Sicherheitstests.",
          "Business Continuity und Disaster Recovery verwechseln: BC hält kritische Geschäftsprozesse am Laufen, DR stellt die IT nach einem Ausfall wieder her.",
          "Kontrollarten falsch zuordnen: Richtlinien und Schulungen sind administrativ, Firewalls und Verschlüsselung technisch, Zäune und Schlösser physisch.",
          "Bei „was zuerst?“-Fragen technisch statt organisatorisch denken. Oft ist die richtige Antwort, den Vorfall zu melden oder die Richtlinie zu befolgen.",
          "Den ISC2 Code of Ethics nicht kennen. Seine vier Grundsätze gehören ausdrücklich zum Prüfungsstoff.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die CC-Prüfung?",
        answer:
          "100 bis 125 Fragen. Die Prüfung ist adaptiv und endet, sobald das Ergebnis feststeht. Du hast 2 Stunden Zeit.",
      },
      {
        question: "Wie viele Punkte brauche ich zum Bestehen?",
        answer: "700 von 1.000 Punkten.",
      },
      {
        question: "Kann ich die Prüfung auf Deutsch ablegen?",
        answer: "Ja. ISC2 bietet die CC-Prüfung auf Englisch, Chinesisch, Deutsch, Japanisch und Spanisch an.",
      },
      {
        question: "Kann ich die Prüfung online von zu Hause ablegen?",
        answer: "Nein. Die CC-Prüfung findet nur vor Ort in einem Pearson-VUE-Testcenter statt.",
      },
      {
        question: "Was hat sich am 1. September 2026 geändert?",
        answer:
          "ISC2 hat die Prüfungsübersicht neu gefasst. Die fünf Bereiche heißen jetzt Sicherheitsprinzipien, Sicherheits-Governance, IAM-Konzepte, Netzwerk- und Cloud-Sicherheit sowie Sicherheitsbetrieb und Reaktion auf Vorfälle. Neu sind unter anderem Cloud-Sicherheit, Zero Trust, Sicherheitstests und KI-Bezüge in allen Bereichen.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach der offiziellen ISC2-Prüfungsübersicht erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "ISC2 CC auf Deutsch: Prüfung 2026 & Lernplan",
      description:
        "ISC2 Certified in Cybersecurity auf Deutsch vorbereiten: neue Prüfungsübersicht ab September 2026, 100 bis 125 Fragen, 2 Stunden, 700 Punkte, alle Bereiche mit Gewichtung.",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "isc2-cc",
    intro:
      "30 eigene Übungsfragen zu ISC2 Certified in Cybersecurity (CC) nach der Prüfungsübersicht ab 1. September 2026, aus allen fünf Bereichen und gewichtet wie in der Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-24",
    updated: "2026-11-24",
    seo: {
      title: "ISC2 CC Übungsfragen mit Lösungen (Deutsch, 2026)",
      description:
        "30 kostenlose ISC2 CC Übungsfragen auf Deutsch zur neuen Prüfungsübersicht 2026: CIA, Risiko, IAM, Zero Trust, Cloud, Incident Response, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Sicherheitsprinzipien ──────────────────────────────── */
      {
        id: "cc-d1-integrity",
        domain: "d1",
        objective: "1.1 Cybersicherheitskonzepte verstehen",
        difficulty: "foundation",
        question:
          "Ein Angreifer verändert unbemerkt die Kontonummer in einer gespeicherten Überweisungsvorlage. Welches Schutzziel ist in erster Linie verletzt?",
        options: [
          { id: "A", text: "Vertraulichkeit", rationale: "Vertraulichkeit wäre verletzt, wenn Unbefugte die Daten lesen; hier wurden sie verändert." },
          { id: "B", text: "Integrität", rationale: "Richtig. Integrität bedeutet, dass Daten vollständig und unverändert sind; eine unbefugte Änderung verletzt sie." },
          { id: "C", text: "Verfügbarkeit", rationale: "Die Vorlage ist weiterhin verfügbar, nur ihr Inhalt ist falsch." },
          { id: "D", text: "Nichtabstreitbarkeit", rationale: "Nichtabstreitbarkeit stellt sicher, dass jemand eine Handlung nicht leugnen kann; sie ist hier nicht das primär verletzte Ziel." },
        ],
        answer: "B",
        explanation:
          "Die CIA-Triade: Vertraulichkeit (nur Berechtigte sehen Daten), Integrität (Daten sind korrekt und unverändert), Verfügbarkeit (Daten und Systeme sind bei Bedarf nutzbar). Hashwerte und digitale Signaturen helfen, Integrität zu prüfen.",
        reference: OUTLINE,
      },
      {
        id: "cc-d1-non-repudiation",
        domain: "d1",
        objective: "1.1 Cybersicherheitskonzepte verstehen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte sicherstellen, dass ein Mitarbeiter später nicht bestreiten kann, eine bestimmte Bestellung freigegeben zu haben. Welches Verfahren unterstützt das am besten?",
        options: [
          { id: "A", text: "Eine digitale Signatur mit dem privaten Schlüssel des Mitarbeiters", rationale: "Richtig. Nur der Inhaber des privaten Schlüssels kann die Signatur erzeugen; das schafft Nichtabstreitbarkeit." },
          { id: "B", text: "Ein gemeinsames Teamkonto für Freigaben", rationale: "Bei einem gemeinsamen Konto ist nicht nachweisbar, wer die Freigabe erteilt hat." },
          { id: "C", text: "Eine symmetrische Verschlüsselung der Bestellung", rationale: "Bei symmetrischer Verschlüsselung kennen mehrere Parteien denselben Schlüssel; sie belegt nicht, wer gehandelt hat." },
          { id: "D", text: "Eine tägliche Datensicherung", rationale: "Backups sichern die Verfügbarkeit, nicht die Zuordnung einer Handlung." },
        ],
        answer: "A",
        explanation:
          "Nichtabstreitbarkeit verbindet eine Handlung eindeutig mit einer Person. Digitale Signaturen und eindeutige Benutzerkonten mit Protokollierung sind die typischen Mittel.",
        reference: OUTLINE,
      },
      {
        id: "cc-d1-risk-treatment",
        domain: "d1",
        objective: "1.2 Konzepte des Risikomanagements verstehen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen schließt eine Cyberversicherung ab, um die finanziellen Folgen eines Ransomware-Angriffs abzufedern. Welche Form der Risikobehandlung ist das?",
        options: [
          { id: "A", text: "Risikovermeidung", rationale: "Bei der Vermeidung wird die risikobehaftete Tätigkeit ganz eingestellt." },
          { id: "B", text: "Risikoakzeptanz", rationale: "Bei der Akzeptanz trägt das Unternehmen das Risiko bewusst selbst, ohne Maßnahmen." },
          { id: "C", text: "Risikotransfer", rationale: "Richtig. Mit einer Versicherung wird die finanzielle Auswirkung des Risikos auf einen Dritten übertragen." },
          { id: "D", text: "Risikominderung", rationale: "Minderung senkt Wahrscheinlichkeit oder Auswirkung durch Kontrollen, etwa Backups oder Patches." },
        ],
        answer: "C",
        explanation:
          "Die vier Arten der Risikobehandlung: vermeiden, mindern, übertragen, akzeptieren. Die Verantwortung für den Schutz der Daten bleibt auch beim Transfer beim Unternehmen.",
        reference: OUTLINE,
      },
      {
        id: "cc-d1-control-types",
        domain: "d1",
        objective: "1.4 Cybersicherheitskontrollen verstehen",
        difficulty: "foundation",
        question: "Welche der folgenden Maßnahmen ist eine administrative Kontrolle?",
        options: [
          { id: "A", text: "Eine Firewall am Netzwerkübergang", rationale: "Eine Firewall ist eine technische Kontrolle." },
          { id: "B", text: "Ein Zaun um das Rechenzentrum", rationale: "Ein Zaun ist eine physische Kontrolle." },
          { id: "C", text: "Die Festplattenverschlüsselung auf Notebooks", rationale: "Verschlüsselung ist eine technische Kontrolle." },
          { id: "D", text: "Eine verbindliche Richtlinie zur akzeptablen Nutzung mit jährlicher Schulung", rationale: "Richtig. Richtlinien, Verfahren und Schulungen sind administrative Kontrollen." },
        ],
        answer: "D",
        explanation:
          "Technische (logische) Kontrollen werden durch Systeme umgesetzt, administrative durch Regeln und Prozesse, physische schützen Gebäude und Hardware.",
        reference: OUTLINE,
      },
      {
        id: "cc-d1-ethics",
        domain: "d1",
        objective: "1.5 Professionelles und ethisches Verhalten wahren",
        difficulty: "intermediate",
        question:
          "Ein CC-Zertifizierter wird von einem Freund gebeten, ihm die internen Netzwerkpläne seines Arbeitgebers für ein „Uni-Projekt“ zu geben. Was verlangt der ISC2 Code of Ethics?",
        options: [
          { id: "A", text: "Die Pläne weitergeben, wenn der Freund Vertraulichkeit zusagt", rationale: "Eine Zusage des Freundes ändert nichts daran, dass die Weitergabe den Arbeitgeber schädigt und Vertrauen bricht." },
          { id: "B", text: "Die Anfrage ablehnen und vertrauliche Informationen des Arbeitgebers schützen", rationale: "Richtig. Der Code verlangt ehrenhaftes, verantwortungsvolles Handeln und gewissenhaften Dienst gegenüber den Auftraggebern." },
          { id: "C", text: "Nur einen Teil der Pläne weitergeben", rationale: "Auch Teile vertraulicher Informationen dürfen nicht unbefugt weitergegeben werden." },
          { id: "D", text: "Die Pläne anonymisiert veröffentlichen", rationale: "Eine Veröffentlichung verschärft den Schaden zusätzlich." },
        ],
        answer: "B",
        explanation:
          "Die vier Grundsätze des ISC2 Code of Ethics: die Gesellschaft, das Gemeinwohl und die Infrastruktur schützen; ehrenhaft, ehrlich, gerecht, verantwortungsvoll und rechtmäßig handeln; den Auftraggebern gewissenhaft und kompetent dienen; den Berufsstand fördern und schützen.",
        reference: OUTLINE,
      },
      {
        id: "cc-d1-due-care",
        domain: "d1",
        objective: "1.5 Professionelles und ethisches Verhalten wahren",
        difficulty: "intermediate",
        question:
          "Bevor ein Unternehmen einen neuen KI-Dienst einführt, prüft es dessen Sicherheitszertifikate, Datenschutzbedingungen und Vertragsklauseln. Wie nennt man diese vorausgehende Prüfung?",
        options: [
          { id: "A", text: "Due Diligence", rationale: "Richtig. Due Diligence ist die sorgfältige Untersuchung und Informationsbeschaffung, bevor eine Entscheidung getroffen wird." },
          { id: "B", text: "Due Care", rationale: "Due Care ist das laufende, angemessene Handeln zum Schutz, etwa das Umsetzen und Pflegen von Kontrollen; die vorausgehende Prüfung ist Due Diligence." },
          { id: "C", text: "Risikoakzeptanz", rationale: "Risikoakzeptanz ist eine Entscheidung über ein Risiko, keine Prüfung." },
          { id: "D", text: "Change Management", rationale: "Change Management steuert Änderungen an Systemen, nicht die Bewertung eines Anbieters." },
        ],
        answer: "A",
        explanation:
          "Eine Merkhilfe: Due Diligence ist „Wissen und prüfen“, Due Care ist „Handeln und schützen“. Beides gehört zur Verantwortung der Leitung.",
        reference: OUTLINE,
      },
      {
        id: "cc-d1-ai-poisoning",
        domain: "d1",
        objective: "1.1 Cybersicherheitskonzepte verstehen",
        difficulty: "intermediate",
        question:
          "Angreifer schleusen manipulierte Datensätze in die Trainingsdaten eines KI-Modells ein, damit es später falsche Entscheidungen trifft. Welches Schutzziel steht hier vor allem im Mittelpunkt?",
        options: [
          { id: "A", text: "Verfügbarkeit der Trainingsserver", rationale: "Die Server bleiben verfügbar; das Problem sind veränderte Daten." },
          { id: "B", text: "Vertraulichkeit der Modellgewichte", rationale: "Es geht nicht um das Ausspähen des Modells, sondern um dessen Manipulation." },
          { id: "C", text: "Integrität der Trainingsdaten", rationale: "Richtig. Model Poisoning greift die Integrität der Daten an, aus denen das Modell lernt." },
          { id: "D", text: "Accounting der Benutzerkonten", rationale: "Accounting protokolliert Handlungen, ist aber nicht das primär betroffene Ziel." },
        ],
        answer: "C",
        explanation:
          "Die neue Prüfungsübersicht wendet die Grundprinzipien auch auf KI an: Integrität schützt vor Model Poisoning, Vertraulichkeit und Datenschutz betreffen die Trainingsdaten.",
        reference: OUTLINE,
      },

      /* ── Bereich 2: Sicherheits-Governance ─────────────────────────────── */
      {
        id: "cc-d2-bc-dr",
        domain: "d2",
        objective: "2.2 Redundanz verstehen",
        difficulty: "foundation",
        question:
          "Nach einem Brand im Rechenzentrum werden Server und Daten an einem Ausweichstandort wiederhergestellt. Welcher Plan regelt in erster Linie diese Wiederherstellung der IT?",
        options: [
          { id: "A", text: "Der Incident-Response-Plan", rationale: "Der IR-Plan regelt die Reaktion auf Sicherheitsvorfälle, nicht primär die Wiederherstellung der IT nach einer Katastrophe." },
          { id: "B", text: "Die Richtlinie zur akzeptablen Nutzung", rationale: "Sie regelt das Verhalten der Benutzer." },
          { id: "C", text: "Der Schulungsplan zur Sicherheitsaufklärung", rationale: "Er dient der Sensibilisierung der Mitarbeiter." },
          { id: "D", text: "Der Disaster-Recovery-Plan", rationale: "Richtig. Der DR-Plan beschreibt, wie IT-Systeme und Daten nach einer Katastrophe wiederhergestellt werden." },
        ],
        answer: "D",
        explanation:
          "Business Continuity hält die kritischen Geschäftsprozesse während einer Störung aufrecht; Disaster Recovery ist der Teil, der die IT wiederherstellt. Ausweichstandorte heißen je nach Ausstattung Hot, Warm oder Cold Site.",
        reference: OUTLINE,
      },
      {
        id: "cc-d2-kri",
        domain: "d2",
        objective: "2.4 Die Wirksamkeit der Cybersicherheit messen",
        difficulty: "intermediate",
        question:
          "Die Geschäftsleitung möchte frühzeitig erkennen, ob das Risiko durch ungepatchte Systeme steigt. Welche Kennzahl eignet sich als Key Risk Indicator (KRI)?",
        options: [
          { id: "A", text: "Anzahl der Mitarbeiter in der IT-Abteilung", rationale: "Diese Zahl sagt nichts über das aktuelle Risiko durch fehlende Patches aus." },
          { id: "B", text: "Anteil der Systeme mit kritischen Patches, die länger als 30 Tage ausstehen", rationale: "Richtig. Diese Kennzahl zeigt frühzeitig, wenn das Risiko durch ungepatchte Systeme wächst." },
          { id: "C", text: "Gesamtbudget der IT im letzten Jahr", rationale: "Das Budget ist keine Frühwarnkennzahl für ein konkretes Risiko." },
          { id: "D", text: "Anzahl der verschickten Newsletter", rationale: "Newsletter haben keinen Bezug zum Patchstand." },
        ],
        answer: "B",
        explanation:
          "KRIs warnen vor steigendem Risiko, bevor ein Schaden eintritt. Sie werden in Dashboards, Scorecards und Berichten für die Leitung aufbereitet.",
        reference: OUTLINE,
      },
      {
        id: "cc-d2-awareness-ai-phishing",
        domain: "d2",
        objective: "2.3 Sicherheitsbewusstsein verstehen",
        difficulty: "foundation",
        question:
          "Mitarbeitende erhalten zunehmend fehlerfreie, persönlich zugeschnittene Phishing-E-Mails, die mit KI erstellt wurden. Welche Maßnahme ist am wirksamsten, um die Erfolgsquote zu senken?",
        options: [
          { id: "A", text: "Regelmäßige Schulungen und Phishing-Simulationen, die auch KI-gestützte Angriffe zeigen", rationale: "Richtig. Aktuelle Schulungen helfen Mitarbeitenden, Phishing trotz perfekter Sprache an Kontext und Druck zu erkennen." },
          { id: "B", text: "Rechtschreibfehler als wichtigstes Erkennungsmerkmal lehren", rationale: "Gerade KI-Phishing enthält kaum noch Fehler; dieses Merkmal ist unzuverlässig." },
          { id: "C", text: "E-Mail im Unternehmen abschaffen", rationale: "Das ist unverhältnismäßig und verlagert das Problem nur auf andere Kanäle." },
          { id: "D", text: "Phishing-Meldungen der Mitarbeitenden ignorieren, um die IT zu entlasten", rationale: "Meldungen sind wertvoll und sollten gefördert werden." },
        ],
        answer: "A",
        explanation:
          "Sicherheitsbewusstsein ist Teil der Unternehmenskultur. Gute Programme erklären Social Engineering, sichere Kennwörter und Phishing und machen das Melden verdächtiger Nachrichten einfach.",
        reference: OUTLINE,
      },
      {
        id: "cc-d2-grc",
        domain: "d2",
        objective: "2.1 Governance, Risiko und Compliance (GRC) planen",
        difficulty: "intermediate",
        question: "Welche Aussage beschreibt den Zweck von GRC (Governance, Risk and Compliance) am besten?",
        options: [
          { id: "A", text: "GRC ist ein Werkzeug zur Virenerkennung", rationale: "GRC ist ein übergreifender Ansatz, kein einzelnes technisches Werkzeug." },
          { id: "B", text: "GRC ersetzt alle technischen Sicherheitskontrollen", rationale: "GRC steuert und überwacht Kontrollen, ersetzt sie aber nicht." },
          { id: "C", text: "GRC verbindet Unternehmenssteuerung, Risikomanagement und die Einhaltung von Vorgaben zu einem abgestimmten Vorgehen", rationale: "Richtig. GRC sorgt dafür, dass Ziele, Risiken und gesetzliche sowie interne Anforderungen gemeinsam gesteuert werden." },
          { id: "D", text: "GRC betrifft nur die Buchhaltung", rationale: "GRC betrifft das gesamte Unternehmen, einschließlich IT und Sicherheit." },
        ],
        answer: "C",
        explanation:
          "Governance gibt Richtung und Verantwortlichkeiten vor, Risikomanagement bewertet und behandelt Risiken, Compliance stellt die Einhaltung von Gesetzen, Normen und Richtlinien sicher.",
        reference: OUTLINE,
      },
      {
        id: "cc-d2-model-drift",
        domain: "d2",
        objective: "2.2 Redundanz verstehen",
        difficulty: "intermediate",
        question:
          "Ein KI-Modell zur Betrugserkennung liefert über Monate immer schlechtere Ergebnisse, weil sich das Kundenverhalten verändert hat. Wie wird dieses Risiko in der neuen CC-Prüfungsübersicht bezeichnet?",
        options: [
          { id: "A", text: "Privilege Creep", rationale: "Privilege Creep ist das schleichende Anhäufen von Berechtigungen bei Benutzern." },
          { id: "B", text: "Tailgating", rationale: "Tailgating ist unbefugtes Mitgehen durch eine Zugangstür." },
          { id: "C", text: "Shadow IT", rationale: "Shadow IT bezeichnet IT, die ohne Wissen der IT-Abteilung genutzt wird." },
          { id: "D", text: "Model Drift", rationale: "Richtig. Model Drift ist die nachlassende Leistung eines Modells und gilt als Risiko für Business Continuity und Disaster Recovery." },
        ],
        answer: "D",
        explanation:
          "Für die Kontinuität von KI-Diensten müssen neben Daten auch Modellkonfigurationen und Datensätze gesichert und die Leistung des Modells überwacht werden.",
        reference: OUTLINE,
      },

      /* ── Bereich 3: IAM-Konzepte ───────────────────────────────────────── */
      {
        id: "cc-d3-deprovision",
        domain: "d3",
        objective: "3.1 Das Lebenszyklusmanagement von Identitäten verstehen",
        difficulty: "foundation",
        question: "Ein Mitarbeiter verlässt heute das Unternehmen. Was sollte mit seinen Zugängen geschehen?",
        options: [
          { id: "A", text: "Die Zugänge bleiben aktiv, falls er Fragen beantworten muss", rationale: "Aktive Konten ehemaliger Mitarbeiter sind ein erhebliches Sicherheitsrisiko." },
          { id: "B", text: "Die Zugänge werden zeitnah entzogen und das Konto deaktiviert (Deprovisionierung)", rationale: "Richtig. Beim Ausscheiden werden Zugänge zum vereinbarten Zeitpunkt entzogen." },
          { id: "C", text: "Das Kennwort wird einem Kollegen mitgeteilt", rationale: "Kennwörter dürfen nie weitergegeben werden; Nachvollziehbarkeit ginge verloren." },
          { id: "D", text: "Die Zugänge werden erst bei der nächsten jährlichen Prüfung entfernt", rationale: "Bis dahin bliebe ein unnötiges Risiko bestehen." },
        ],
        answer: "B",
        explanation:
          "Der Identitätslebenszyklus: Rollen definieren, Zugänge bereitstellen (Provisionierung), regelmäßig überprüfen (Review) und bei Wechsel oder Austritt entziehen (Deprovisionierung). Das gilt auch für Service-Konten und KI-Bots.",
        reference: OUTLINE,
      },
      {
        id: "cc-d3-sod",
        domain: "d3",
        objective: "3.2 Logische Zugriffskontrollen verstehen",
        difficulty: "intermediate",
        question:
          "In der Buchhaltung darf dieselbe Person nicht sowohl neue Lieferanten anlegen als auch Zahlungen an sie freigeben. Welches Prinzip wird hier umgesetzt?",
        options: [
          { id: "A", text: "Funktionstrennung (Separation of Duties)", rationale: "Richtig. Kritische Aufgaben werden auf mehrere Personen verteilt, damit niemand allein Betrug begehen kann." },
          { id: "B", text: "Single Sign-on", rationale: "Single Sign-on erleichtert die Anmeldung an mehreren Systemen." },
          { id: "C", text: "Defense in Depth", rationale: "Defense in Depth beschreibt mehrere Schutzschichten, nicht die Aufteilung von Aufgaben." },
          { id: "D", text: "Mandatory Access Control", rationale: "MAC ist ein Zugriffskontrollmodell mit Sicherheitsstufen, keine Aufteilung von Geschäftsaufgaben." },
        ],
        answer: "A",
        explanation:
          "Funktionstrennung verhindert Betrug und Fehler, weil für kritische Vorgänge mehrere Personen zusammenwirken müssen. Verwandt ist das Vier-Augen-Prinzip.",
        reference: OUTLINE,
      },
      {
        id: "cc-d3-rbac",
        domain: "d3",
        objective: "3.2 Logische Zugriffskontrollen verstehen",
        difficulty: "intermediate",
        question:
          "In einem Krankenhaus erhalten alle Pflegekräfte automatisch dieselben Zugriffsrechte auf Patientendaten, sobald ihnen die Stelle „Pflege“ zugewiesen wird. Welches Zugriffskontrollmodell ist das?",
        options: [
          { id: "A", text: "Discretionary Access Control (DAC)", rationale: "Bei DAC entscheidet der Besitzer einer Ressource, wem er Zugriff gibt." },
          { id: "B", text: "Mandatory Access Control (MAC)", rationale: "Bei MAC entscheiden Sicherheitsstufen und Freigaben, festgelegt von einer zentralen Stelle." },
          { id: "C", text: "Role-Based Access Control (RBAC)", rationale: "Richtig. Rechte werden Rollen zugeordnet, und Benutzer erhalten sie über ihre Rolle." },
          { id: "D", text: "Rule-Based Access Control nach Uhrzeit", rationale: "Regelbasierte Kontrolle nutzt Regeln wie Uhrzeiten oder IP-Bereiche, nicht Stellenrollen." },
        ],
        answer: "C",
        explanation:
          "RBAC vereinfacht die Verwaltung in großen Organisationen. DAC ist flexibel, aber schwer zu kontrollieren; MAC ist streng und wird etwa im militärischen Umfeld eingesetzt.",
        reference: OUTLINE,
      },
      {
        id: "cc-d3-least-privilege-bot",
        domain: "d3",
        objective: "3.2 Logische Zugriffskontrollen verstehen",
        difficulty: "intermediate",
        question:
          "Ein KI-Chatbot im Kundenservice soll Bestellstatus abfragen. Das Entwicklungsteam schlägt vor, ihm der Einfachheit halber Administratorrechte auf die gesamte Kundendatenbank zu geben. Wie ist das zu bewerten?",
        options: [
          { id: "A", text: "Sinnvoll, weil der Bot so nie an fehlenden Rechten scheitert", rationale: "Bequemlichkeit rechtfertigt keine übermäßigen Rechte; ein kompromittierter Bot hätte vollen Zugriff." },
          { id: "B", text: "Unproblematisch, weil Bots keine Identität haben", rationale: "Auch Bots und Service-Konten sind Identitäten und müssen verwaltet werden." },
          { id: "C", text: "Unproblematisch, solange der Bot in der Cloud läuft", rationale: "Der Betriebsort ändert nichts am Prinzip der geringsten Rechte." },
          { id: "D", text: "Abzulehnen; der Bot erhält nur Leserechte auf die Bestellstatus, die er tatsächlich braucht", rationale: "Richtig. Das Prinzip der geringsten Rechte gilt für Menschen und automatisierte Konten gleichermaßen." },
        ],
        answer: "D",
        explanation:
          "Die neue Prüfungsübersicht betont, dass KI-Bots und Service-Konten den gleichen Lebenszyklus und die gleichen Zugriffsprinzipien durchlaufen wie menschliche Benutzer.",
        reference: OUTLINE,
      },
      {
        id: "cc-d3-access-review",
        domain: "d3",
        objective: "3.1 Das Lebenszyklusmanagement von Identitäten verstehen",
        difficulty: "intermediate",
        question:
          "Eine Mitarbeiterin hat in sechs Jahren drei Abteilungen durchlaufen und besitzt noch die Rechte aus allen drei Stellen. Welche Maßnahme hätte das verhindert?",
        options: [
          { id: "A", text: "Regelmäßige Zugriffsüberprüfungen und Anpassung der Rechte bei jedem Stellenwechsel", rationale: "Richtig. Reviews und konsequentes Entziehen alter Rechte verhindern die Anhäufung von Berechtigungen (Privilege Creep)." },
          { id: "B", text: "Ein längeres Kennwort", rationale: "Die Kennwortlänge hat keinen Einfluss auf angehäufte Berechtigungen." },
          { id: "C", text: "Eine neue Firewall", rationale: "Eine Firewall regelt Netzwerkverkehr, nicht Benutzerrechte." },
          { id: "D", text: "Ein gemeinsames Konto für alle Abteilungen", rationale: "Das würde das Problem verschärfen und die Nachvollziehbarkeit zerstören." },
        ],
        answer: "A",
        explanation:
          "Privilege Creep entsteht, wenn bei Wechseln nur Rechte hinzukommen, aber keine entfernt werden. Regelmäßige Reviews durch Vorgesetzte oder Datenverantwortliche sind die Gegenmaßnahme.",
        reference: OUTLINE,
      },
      {
        id: "cc-d3-impossible-travel",
        domain: "d3",
        objective: "3.2 Logische Zugriffskontrollen verstehen",
        difficulty: "intermediate",
        question:
          "Ein Konto meldet sich um 9:00 Uhr in München und um 9:20 Uhr in Singapur an. Das IAM-System markiert die zweite Anmeldung als verdächtig. Wie nennt man diese Erkennung?",
        options: [
          { id: "A", text: "Single Sign-on", rationale: "Single Sign-on ist ein Anmeldeverfahren, keine Anomalieerkennung." },
          { id: "B", text: "Impossible Travel", rationale: "Richtig. Zwei Anmeldungen, die räumlich so weit auseinanderliegen, dass die Reise in der Zeit unmöglich ist, deuten auf kompromittierte Zugangsdaten hin." },
          { id: "C", text: "Funktionstrennung", rationale: "Funktionstrennung verteilt Aufgaben auf mehrere Personen." },
          { id: "D", text: "Deprovisionierung", rationale: "Deprovisionierung entzieht Rechte beim Austritt." },
        ],
        answer: "B",
        explanation:
          "KI-gestützte Verhaltensanalysen erkennen ungewöhnliche Anmeldemuster und können zusätzliche Faktoren anfordern oder die Anmeldung blockieren. Grundlage bleibt eine Multi-Faktor-Authentifizierung.",
        reference: OUTLINE,
      },

      /* ── Bereich 4: Netzwerk- und Cloud-Sicherheit ─────────────────────── */
      {
        id: "cc-d4-osi",
        domain: "d4",
        objective: "4.1 Netzwerksicherheit verstehen",
        difficulty: "foundation",
        question: "Auf welcher Schicht des OSI-Modells arbeitet ein Router, der Pakete anhand von IP-Adressen weiterleitet?",
        options: [
          { id: "A", text: "Schicht 1, Bitübertragung", rationale: "Schicht 1 betrifft Kabel, Signale und Stecker." },
          { id: "B", text: "Schicht 2, Sicherung", rationale: "Auf Schicht 2 arbeiten Switches mit MAC-Adressen." },
          { id: "C", text: "Schicht 7, Anwendung", rationale: "Schicht 7 betrifft Anwendungsprotokolle wie HTTP." },
          { id: "D", text: "Schicht 3, Vermittlung", rationale: "Richtig. Auf der Vermittlungsschicht werden Pakete anhand logischer Adressen wie IP-Adressen geroutet." },
        ],
        answer: "D",
        explanation:
          "OSI-Schichten: 1 Bitübertragung, 2 Sicherung, 3 Vermittlung, 4 Transport, 5 Sitzung, 6 Darstellung, 7 Anwendung. Das TCP/IP-Modell fasst sie in vier Schichten zusammen.",
        reference: OUTLINE,
      },
      {
        id: "cc-d4-zero-trust",
        domain: "d4",
        objective: "4.2 Netzwerksicherheitsarchitektur verstehen",
        difficulty: "intermediate",
        question: "Welche Aussage beschreibt den Grundgedanken von Zero Trust am besten?",
        options: [
          { id: "A", text: "Geräte im internen Netz gelten automatisch als vertrauenswürdig", rationale: "Genau dieses Vertrauen aufgrund des Standorts lehnt Zero Trust ab." },
          { id: "B", text: "Jeder Zugriff wird unabhängig vom Standort explizit geprüft und nur mit den nötigen Rechten gewährt", rationale: "Richtig. Zero Trust bedeutet „niemals vertrauen, immer prüfen“, mit Least Privilege und Annahme einer möglichen Kompromittierung." },
          { id: "C", text: "Firewalls werden überflüssig", rationale: "Firewalls und Segmentierung bleiben Teil einer Zero-Trust-Architektur." },
          { id: "D", text: "Benutzer melden sich nur einmal pro Jahr an", rationale: "Zero Trust prüft eher häufiger, nicht seltener." },
        ],
        answer: "B",
        explanation:
          "Zero Trust ergänzt Defense in Depth und Segmentierung. Identität, Gerätezustand und Kontext werden bei jedem Zugriff bewertet.",
        reference: OUTLINE,
      },
      {
        id: "cc-d4-segmentation",
        domain: "d4",
        objective: "4.2 Netzwerksicherheitsarchitektur verstehen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte verhindern, dass ein kompromittierter IoT-Sensor in der Produktion auf die Server der Personalabteilung zugreifen kann. Welche Maßnahme ist am wirksamsten?",
        options: [
          { id: "A", text: "Das Netz segmentieren, etwa mit getrennten VLANs und Firewall-Zonen", rationale: "Richtig. Segmentierung begrenzt, welche Systeme miteinander kommunizieren dürfen, und hemmt die Ausbreitung von Angriffen." },
          { id: "B", text: "Den IoT-Sensor häufiger neu starten", rationale: "Ein Neustart beseitigt keine Zugriffsmöglichkeiten im Netz." },
          { id: "C", text: "Alle Geräte in ein gemeinsames flaches Netz legen", rationale: "Ein flaches Netz erleichtert gerade die Ausbreitung von Angriffen." },
          { id: "D", text: "Die WLAN-SSID verbergen", rationale: "Ein verborgener Netzwerkname ist keine wirksame Sicherheitsmaßnahme." },
        ],
        answer: "A",
        explanation:
          "IoT- und industrielle Steuerungssysteme (ICS) sind oft schwer zu patchen. Sie werden daher in eigenen Segmenten betrieben; Mikrosegmentierung geht noch feiner bis auf einzelne Workloads.",
        reference: OUTLINE,
      },
      {
        id: "cc-d4-firewall-port",
        domain: "d4",
        objective: "4.1 Netzwerksicherheit verstehen",
        difficulty: "foundation",
        question:
          "Ein Webserver soll aus dem Internet nur verschlüsselt per HTTPS erreichbar sein. Welchen Port gibt die Firewall dafür frei?",
        options: [
          { id: "A", text: "23", rationale: "Port 23 gehört zu Telnet, einem unverschlüsselten Protokoll." },
          { id: "B", text: "80", rationale: "Port 80 gehört zu unverschlüsseltem HTTP." },
          { id: "C", text: "443", rationale: "Richtig. HTTPS verwendet standardmäßig Port 443." },
          { id: "D", text: "3389", rationale: "Port 3389 gehört zu RDP und sollte nicht offen im Internet stehen." },
        ],
        answer: "C",
        explanation:
          "Sichere und unsichere Varianten im Vergleich: HTTP 80 und HTTPS 443, Telnet 23 und SSH 22, FTP 21 und SFTP über 22. Firewalls sollten nur benötigte Ports freigeben.",
        reference: OUTLINE,
      },
      {
        id: "cc-d4-cloud-shared",
        domain: "d4",
        objective: "4.3 Cloud-Sicherheit verstehen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen mietet bei einem Cloud-Anbieter virtuelle Server (IaaS). Wer ist laut Modell der geteilten Verantwortung für das Patchen des Betriebssystems auf diesen Servern zuständig?",
        options: [
          { id: "A", text: "Der Cloud-Anbieter", rationale: "Bei IaaS verantwortet der Anbieter die physische Infrastruktur und Virtualisierung, nicht das Gastbetriebssystem." },
          { id: "B", text: "Niemand, weil Cloud-Server keine Patches brauchen", rationale: "Auch Cloud-Server müssen gepatcht werden." },
          { id: "C", text: "Die Internetbehörde des Landes", rationale: "Behörden betreiben keine Server von Unternehmen." },
          { id: "D", text: "Das Unternehmen als Kunde", rationale: "Richtig. Bei IaaS verwaltet der Kunde Betriebssystem, Anwendungen und Daten selbst." },
        ],
        answer: "D",
        explanation:
          "Je höher das Service-Modell, desto mehr übernimmt der Anbieter: Bei IaaS bleibt viel beim Kunden, bei PaaS weniger, bei SaaS am wenigsten. Daten und Zugriffsrechte bleiben immer in der Verantwortung des Kunden.",
        reference: OUTLINE,
      },
      {
        id: "cc-d4-cloud-characteristics",
        domain: "d4",
        objective: "4.3 Cloud-Sicherheit verstehen",
        difficulty: "foundation",
        question:
          "Ein Team kann über ein Webportal jederzeit selbst neue Server anlegen, ohne beim Anbieter anrufen zu müssen. Welche Cloud-Eigenschaft ist das?",
        options: [
          { id: "A", text: "On-Demand-Self-Service", rationale: "Richtig. Kunden stellen Ressourcen bei Bedarf selbst bereit, ohne menschliche Interaktion mit dem Anbieter." },
          { id: "B", text: "Gemessene Nutzung (Measured Service)", rationale: "Gemessene Nutzung bedeutet, dass der Verbrauch erfasst und abgerechnet wird." },
          { id: "C", text: "Ressourcenbündelung (Resource Pooling)", rationale: "Ressourcenbündelung bedeutet, dass sich viele Kunden die Infrastruktur teilen." },
          { id: "D", text: "Breiter Netzwerkzugang", rationale: "Breiter Netzwerkzugang bedeutet Erreichbarkeit über Standardnetze und -geräte." },
        ],
        answer: "A",
        explanation:
          "Die fünf Cloud-Eigenschaften: breiter Netzwerkzugang, schnelle Elastizität, gemessene Nutzung, On-Demand-Self-Service und Ressourcenbündelung.",
        reference: OUTLINE,
      },
      {
        id: "cc-d4-vpn",
        domain: "d4",
        objective: "4.1 Netzwerksicherheit verstehen",
        difficulty: "foundation",
        question:
          "Eine Mitarbeiterin arbeitet im Hotel über das öffentliche WLAN und muss auf interne Systeme zugreifen. Was schützt die Verbindung am besten?",
        options: [
          { id: "A", text: "Den Browser im Inkognitomodus verwenden", rationale: "Der Inkognitomodus speichert nur keinen Verlauf; er verschlüsselt keine Verbindung." },
          { id: "B", text: "Ein VPN des Unternehmens nutzen", rationale: "Richtig. Ein VPN baut einen verschlüsselten Tunnel ins Unternehmensnetz auf und schützt vor Mitlesen im fremden WLAN." },
          { id: "C", text: "Die Bildschirmhelligkeit reduzieren", rationale: "Das hilft allenfalls gegen Mitlesen über die Schulter, nicht gegen Netzwerkangriffe." },
          { id: "D", text: "Bluetooth aktivieren", rationale: "Bluetooth hat keinen Einfluss auf die Sicherheit der WLAN-Verbindung." },
        ],
        answer: "B",
        explanation:
          "Öffentliche WLANs sind anfällig für Mitlesen und gefälschte Zugangspunkte (Evil Twin). VPN, HTTPS und das Vermeiden automatischer Verbindungen erhöhen die Sicherheit.",
        reference: OUTLINE,
      },

      /* ── Bereich 5: Sicherheitsbetrieb und Reaktion auf Vorfälle ───────── */
      {
        id: "cc-d5-hashing",
        domain: "d5",
        objective: "5.1 Datensicherheit verstehen",
        difficulty: "intermediate",
        question: "Welche Aussage zu Hashing ist richtig?",
        options: [
          { id: "A", text: "Ein Hashwert lässt sich mit dem richtigen Schlüssel wieder in die Originaldaten zurückverwandeln", rationale: "Hashing ist eine Einwegfunktion ohne Schlüssel; es gibt keine Entschlüsselung." },
          { id: "B", text: "Hashing verwendet ein Schlüsselpaar aus öffentlichem und privatem Schlüssel", rationale: "Das beschreibt asymmetrische Verschlüsselung." },
          { id: "C", text: "Hashing erzeugt aus Daten einen Wert fester Länge und dient vor allem zur Prüfung der Integrität", rationale: "Richtig. Schon eine kleine Änderung der Daten ergibt einen völlig anderen Hashwert." },
          { id: "D", text: "Hashing ist dasselbe wie symmetrische Verschlüsselung", rationale: "Symmetrische Verschlüsselung ist umkehrbar und nutzt einen gemeinsamen Schlüssel." },
        ],
        answer: "C",
        explanation:
          "Symmetrische Verschlüsselung: ein gemeinsamer Schlüssel, schnell. Asymmetrische: Schlüsselpaar, für Schlüsselaustausch und Signaturen. Hashing: Einwegfunktion für Integrität und Kennwortspeicherung. Quantenresistente Verfahren sollen künftigen Quantencomputern standhalten.",
        reference: OUTLINE,
      },
      {
        id: "cc-d5-public-ai-leak",
        domain: "d5",
        objective: "5.1 Datensicherheit verstehen",
        difficulty: "intermediate",
        question:
          "Ein Mitarbeiter fügt vertrauliche Kundendaten in einen öffentlichen KI-Chatdienst ein, um eine Zusammenfassung zu erhalten. Welche Maßnahme senkt dieses Risiko am wirksamsten?",
        options: [
          { id: "A", text: "Eine Richtlinie zur Datenklassifizierung und KI-Nutzung mit Schulung, ergänzt durch freigegebene Werkzeuge", rationale: "Richtig. Klassifizierung zeigt, welche Daten nicht in externe Dienste gehören, und freigegebene Werkzeuge bieten eine sichere Alternative." },
          { id: "B", text: "Die Kundendaten vorher in eine andere Sprache übersetzen", rationale: "Übersetzte Daten bleiben vertraulich und personenbezogen." },
          { id: "C", text: "Nur noch kurze Textausschnitte einfügen", rationale: "Auch kurze Ausschnitte können vertrauliche Informationen enthalten." },
          { id: "D", text: "Den Vorfall nicht melden, da die Daten bereits übertragen sind", rationale: "Vorfälle müssen gemeldet werden, damit sie bewertet und behandelt werden können." },
        ],
        answer: "A",
        explanation:
          "Zur Datenhandhabung gehören Klassifizierung, Kennzeichnung, Maskierung und Bereinigung. Die neue Prüfungsübersicht nennt den Datenabfluss über öffentliche KI-Dienste ausdrücklich als Risiko.",
        reference: OUTLINE,
      },
      {
        id: "cc-d5-tabletop",
        domain: "d5",
        objective: "5.3 Incident Response verstehen",
        difficulty: "foundation",
        question:
          "Das Incident-Response-Team spielt in einem Besprechungsraum ein Ransomware-Szenario durch und bespricht, wer wann was tun würde, ohne Systeme zu berühren. Wie nennt man diese Übung?",
        options: [
          { id: "A", text: "Penetrationstest", rationale: "Ein Penetrationstest greift Systeme aktiv an, um Schwachstellen zu finden." },
          { id: "B", text: "Schwachstellenscan", rationale: "Ein Schwachstellenscan prüft Systeme automatisiert auf bekannte Lücken." },
          { id: "C", text: "Vollständiger Failover-Test", rationale: "Bei einem Failover-Test werden Systeme tatsächlich umgeschaltet." },
          { id: "D", text: "Tabletop-Übung", rationale: "Richtig. Bei einer Tabletop-Übung wird ein Szenario am Tisch besprochen, um Plan, Rollen und Abläufe zu prüfen." },
        ],
        answer: "D",
        explanation:
          "Incident-Response-Pläne werden regelmäßig getestet, von Tabletop-Übungen über Simulationen bis zu vollständigen Tests. Erkenntnisse fließen in die Aktualisierung des Plans ein.",
        reference: OUTLINE,
      },
      {
        id: "cc-d5-red-team",
        domain: "d5",
        objective: "5.5 Sicherheitstests verstehen",
        difficulty: "intermediate",
        question:
          "Ein Team simuliert realistische Angriffe auf das Unternehmen, während ein zweites Team versucht, diese zu erkennen und abzuwehren. Beide arbeiten anschließend eng zusammen, um die Abwehr zu verbessern. Wie nennt man diese gemeinsame Form?",
        options: [
          { id: "A", text: "Blue Teaming", rationale: "Das Blue Team ist die verteidigende Seite allein." },
          { id: "B", text: "Purple Teaming", rationale: "Richtig. Beim Purple Teaming arbeiten Red Team (Angriff) und Blue Team (Verteidigung) gezielt zusammen." },
          { id: "C", text: "Red Teaming ohne Nachbesprechung", rationale: "Reines Red Teaming beschreibt nur die angreifende Seite." },
          { id: "D", text: "Change Management", rationale: "Change Management steuert Änderungen an Systemen." },
        ],
        answer: "B",
        explanation:
          "Red Team: simulierte Angreifer. Blue Team: Verteidiger im Sicherheitsbetrieb. Purple Team: Zusammenarbeit beider, um Erkennung und Abwehr gemeinsam zu verbessern.",
        reference: OUTLINE,
      },
      {
        id: "cc-d5-eol",
        domain: "d5",
        objective: "5.4 Schutz von Assets verstehen",
        difficulty: "intermediate",
        question:
          "Auf mehreren Rechnern läuft ein Betriebssystem, für das der Hersteller keine Sicherheitsupdates mehr liefert. Was ist die angemessenste Maßnahme?",
        options: [
          { id: "A", text: "Nichts tun, solange die Rechner noch funktionieren", rationale: "Ungepatchte Systeme sind ein wachsendes Risiko, auch wenn sie funktionieren." },
          { id: "B", text: "Die Rechner ausschließlich für E-Mail verwenden", rationale: "E-Mail ist ein häufiger Angriffsweg; das verringert das Risiko nicht." },
          { id: "C", text: "Die Systeme im Rahmen des Asset-Lebenszyklus ersetzen oder aktualisieren und bis dahin isolieren", rationale: "Richtig. End-of-Life-Systeme werden geplant ersetzt; bis dahin begrenzen Isolation und zusätzliche Kontrollen das Risiko." },
          { id: "D", text: "Die Virenschutzsoftware deinstallieren, um Leistung zu sparen", rationale: "Das erhöht das Risiko zusätzlich." },
        ],
        answer: "C",
        explanation:
          "Asset-Lebenszyklusmanagement umfasst Inventarisierung, Wartung, Aktualisierung und sichere Ausmusterung. Änderungen daran laufen über das Konfigurations- und Änderungsmanagement.",
        reference: OUTLINE,
      },
    ],
  },
};
