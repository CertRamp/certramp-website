import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for Microsoft SC-100 (Cybersecurity Architect).
 * Exam facts follow the verified record in src/config/certifications.ts (Microsoft Learn
 * SC-100 study guide, exam page and certification page, checked 2026-11-04).
 * Domain and objective names follow the German Microsoft Learn study guide (de-de,
 * skills measured as of 21 October 2026, read 2026-11-25).
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn: Kursleitfaden für Prüfung SC-100",
  url: "https://learn.microsoft.com/de-de/credentials/certifications/resources/study-guides/sc-100",
};

export const sc100De: DeContent = {
  slug: "sc-100",
  name: "Microsoft SC-100: Cybersecurity Architect",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten. Die englische Fassung wurde am 21. Oktober 2026 aktualisiert; lokalisierte Fassungen folgen laut Microsoft etwa acht Wochen später. Ist die Prüfung nicht in deiner bevorzugten Sprache verfügbar, kannst du 30 Minuten zusätzliche Zeit beantragen.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "SC-100" },
    { label: "Bestehensgrenze", value: "700 oder mehr (skaliert)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Deutsch, Französisch, Spanisch, Italienisch, Japanisch, Koreanisch, Portugiesisch (Brasilien), Chinesisch (vereinfacht), Chinesisch (traditionell)",
    },
    { label: "Durchführung", value: "Terminbuchung über Pearson VUE" },
    {
      label: "Voraussetzungen für den Titel",
      value:
        "Für Cybersecurity Architect Expert zusätzlich eine dieser Zertifizierungen: Identity and Access Administrator Associate, Security Operations Analyst Associate oder Cloud and AI Security Engineer Associate. Verlängerung alle 12 Monate über eine kostenlose Online-Bewertung auf Microsoft Learn.",
    },
    { label: "Prüfungsversion", value: "Gemessene Fähigkeiten ab dem 21. Oktober 2026 (englische Fassung)" },
  ],
  domains: [
    { id: "d1", name: "Entwerfen von Lösungen, die an den bewährten Sicherheitsmethoden und Prioritäten ausgerichtet sind", weight: "20–25 %" },
    { id: "d2", name: "Entwerfen von Funktionen für Sicherheitsvorgänge, Identität und Compliance", weight: "25–30 %" },
    { id: "d3", name: "Entwerfen von Sicherheitslösungen für die Infrastruktur", weight: "25–30 %" },
    { id: "d4", name: "Entwerfen von Sicherheitslösungen für Anwendungen und Daten", weight: "20–25 %" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "sc-100",
    summary:
      "SC-100 ist die Prüfung zum Microsoft Certified: Cybersecurity Architect Expert. Sie prüft, ob du Sicherheitsstrategien nach Zero Trust und den bewährten Methoden von Microsoft entwerfen kannst, von Ransomware-Resilienz über Identität und Sicherheitsvorgänge bis zu Infrastruktur, Anwendungen und Daten. Bestanden ist ab 700 Punkten. Für den Expert-Titel brauchst du zusätzlich eine passende Associate-Zertifizierung.",
    whoFor: [
      "Erfahrene Sicherheitsfachleute, die in eine Architektenrolle wechseln",
      "Inhaber von SC-200, SC-300 oder der Cloud-and-AI-Security-Engineer-Zertifizierung",
      "Berater, die Sicherheitsstrategien für Microsoft-Umgebungen entwerfen",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Microsoft nennt auf den SC-100-Seiten keine feste Fragenzahl und keine Dauer; bestanden ist ab 700 Punkten. Die Prüfung buchst du über Pearson VUE, und Microsoft bietet eine Prüfungs-Sandbox, mit der du die Oberfläche vorab kennenlernen kannst. Für die Vorbereitung gibt es außerdem eine kostenlose Übungsbewertung.",
          "Die englische Fassung wurde am 21. Oktober 2026 geringfügig aktualisiert, betroffen sind Lösungen für Sicherheitsvorgänge und der Schutz von Microsoft 365. Lokalisierte Fassungen wie die deutsche folgen laut Microsoft etwa acht Wochen später. Für den Titel Cybersecurity Architect Expert brauchst du zusätzlich eine der Zertifizierungen Identity and Access Administrator, Security Operations Analyst oder Cloud and AI Security Engineer. Der Titel wird jährlich mit einer kostenlosen Online-Bewertung verlängert.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Die beiden größten Bereiche mit je 25 bis 30 % sind Sicherheitsvorgänge, Identität und Compliance sowie Infrastruktur. Dazu gehören XDR und SIEM mit Microsoft Defender XDR und Sentinel, MITRE ATT&CK, Microsoft Entra ID mit bedingtem Zugriff und PIM, das Unternehmenszugriffsmodell, Microsoft Purview und Azure Policy, aber auch Defender for Cloud, Azure Arc, Exposure Management, Endpunkt- und Container-Sicherheit sowie Entra Internet Access und Private Access als Security Service Edge.",
          "Bewährte Methoden (20 bis 25 %) umfassen Ransomware-Resilienz, die Microsoft Cybersecurity Reference Architectures (MCRA), den Microsoft Cloud Security Benchmark (MCSB), das Zero Trust Adoption Framework, das Cloud Adoption Framework, das Well-Architected Framework, Azure-Zielzonen und sichere KI-Einführung. Anwendungen und Daten (20 bis 25 %) behandeln Microsoft 365 einschließlich Copilot, Bedrohungsmodellierung, DevSecOps, API- und WAF-Schutz, Datenklassifizierung und Verschlüsselung mit Azure Key Vault.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den Studienleitfaden lesen",
            body: "Arbeite den Kursleitfaden zu SC-100 auf Microsoft Learn durch, am besten auf Englisch und Deutsch, damit du die Begriffe in beiden Sprachen kennst.",
          },
          {
            title: "Die Referenz-Frameworks lernen",
            body: "MCRA, MCSB, Zero Trust, CAF, WAF und die Sicherheitsempfehlungen gegen Ransomware bilden das Gerüst vieler Fragen. Lerne, welches Framework welche Frage beantwortet.",
          },
          {
            title: "Wie ein Architekt denken",
            body: "SC-100 fragt selten nach Klickpfaden, sondern nach der besten Lösung für eine Anforderung. Übe, Anforderungen wie Kosten, Aufwand, Compliance und Benutzerfreundlichkeit gegeneinander abzuwägen.",
          },
          {
            title: "Die Fallstudien üben",
            body: "Microsoft-Expertenprüfungen enthalten häufig Fallstudien mit mehreren Fragen zu einem Unternehmen. Lies zuerst die Anforderungen, dann die Fragen, und suche danach gezielt im Text.",
          },
          {
            title: "Associate-Wissen auffrischen",
            body: "Wiederhole Kernthemen aus SC-200 und SC-300, etwa Sentinel-Analyseregeln, bedingten Zugriff und PIM, weil SC-100 dieses Wissen voraussetzt.",
          },
          {
            title: "Mit der Übungsbewertung testen",
            body: "Nutze die kostenlose Übungsbewertung von Microsoft und eigene Übungsprüfungen. Buche die Prüfung, wenn du sicher über 80 % liegst.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Zu sehr in Konfigurationsdetails denken. SC-100 fragt nach Entwurf und Bewertung, nicht nach dem genauen Klickweg.",
          "MCRA und MCSB verwechseln: MCRA beschreibt Referenzarchitekturen und Fähigkeiten, MCSB gibt konkrete Sicherheitskontrollen und Empfehlungen vor.",
          "Bei Ransomware nur an Schutzsoftware denken. Microsoft priorisiert sichere Sicherung und Wiederherstellung sowie den Schutz privilegierter Zugänge.",
          "Den Unterschied zwischen Defender for Cloud (Sicherheitsstatus und Workloadschutz) und Sentinel (SIEM und SOAR) nicht sauber trennen.",
          "Neue Themen der aktuellen Fassung übersehen, etwa Agentidentitäten mit Microsoft Entra Agent ID, sichere KI-Einführung und Copilot-Datenschutz.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Punkte brauche ich zum Bestehen?",
        answer: "700 Punkte. Microsoft nennt auf den SC-100-Seiten keine feste Fragenzahl und keine Dauer.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. Die deutsche Fassung wird laut Microsoft etwa acht Wochen nach der englischen aktualisiert. Ist deine bevorzugte Sprache nicht verfügbar, kannst du 30 Minuten zusätzliche Zeit beantragen.",
      },
      {
        question: "Welche Voraussetzungen gibt es?",
        answer:
          "Für den Titel Cybersecurity Architect Expert brauchst du zusätzlich eine dieser Zertifizierungen: Identity and Access Administrator Associate, Security Operations Analyst Associate oder Cloud and AI Security Engineer Associate.",
      },
      {
        question: "Was hat sich am 21. Oktober 2026 geändert?",
        answer:
          "Es gab geringfügige Änderungen bei den Lösungen für Sicherheitsvorgänge und beim Schutz von Microsoft 365. Die Gewichtung der vier Bereiche blieb gleich.",
      },
      {
        question: "Wie lange ist die Zertifizierung gültig?",
        answer: "Zwölf Monate. Du verlängerst sie über eine kostenlose Online-Bewertung auf Microsoft Learn.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach dem offiziellen Studienleitfaden erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "SC-100 auf Deutsch: Cybersecurity Architect Prüfung & Lernplan",
      description:
        "Microsoft SC-100 auf Deutsch vorbereiten: alle vier Bereiche mit Gewichtung, Zero Trust, MCRA, MCSB, Ransomware-Resilienz, Voraussetzungen und Lernplan.",
    },
    published: "2026-11-25",
    updated: "2026-11-25",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "sc-100",
    intro:
      "30 eigene Übungsfragen zu Microsoft SC-100 aus allen vier Bereichen des Studienleitfadens, gewichtet wie in der Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-25",
    updated: "2026-11-25",
    seo: {
      title: "SC-100 Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose SC-100 Übungsfragen auf Deutsch: Zero Trust, Ransomware, Sentinel, Entra ID, PIM, Defender for Cloud, Purview und Datenschutz, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Bewährte Sicherheitsmethoden ───────────────────────── */
      {
        id: "sc100-d1-ransomware-priority",
        domain: "d1",
        objective: "Entwerfen einer Resilienzstrategie für Ransomware und andere Angriffe auf der Grundlage bewährter Sicherheitsmethoden von Microsoft",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte seine Ransomware-Resilienz verbessern und fragt, womit es nach den Empfehlungen von Microsoft beginnen sollte. Was hat die höchste Priorität?",
        options: [
          { id: "A", text: "Ein neues Intranet-Design", rationale: "Das hat keinen Bezug zur Ransomware-Resilienz." },
          { id: "B", text: "Sichere, unveränderliche Sicherungen mit getesteter Wiederherstellung und der Schutz privilegierter Zugänge", rationale: "Richtig. Microsoft priorisiert, die Wiederherstellung ohne Lösegeldzahlung zu ermöglichen und Angreifern den Zugriff auf privilegierte Konten zu erschweren." },
          { id: "C", text: "Ausschließlich eine stärkere Perimeter-Firewall", rationale: "Eine Firewall allein verhindert keine Angriffe über kompromittierte Identitäten und sichert keine Wiederherstellung." },
          { id: "D", text: "Die Abschaffung aller Sicherungen, um Speicherkosten zu sparen", rationale: "Ohne Sicherungen wäre eine Wiederherstellung unmöglich." },
        ],
        answer: "B",
        explanation:
          "Microsofts Ransomware-Empfehlungen gliedern sich in drei Prioritäten: Wiederherstellung vorbereiten, Schaden begrenzen (vor allem privilegierten Zugriff schützen) und Angreifern den Zugang erschweren.",
        reference: GUIDE,
      },
      {
        id: "sc100-d1-mcsb",
        domain: "d1",
        objective: "Designlösungen, die sich an den Microsoft Cybersecurity Reference Architectures (MCRA) und Microsoft Cloud Security Benchmark (MCSB) ausrichten",
        difficulty: "intermediate",
        question:
          "Ein Architekt braucht einen Katalog konkreter, technisch prüfbarer Sicherheitskontrollen für Azure- und Multicloud-Workloads, der auch in Defender for Cloud bewertet wird. Welche Grundlage passt?",
        options: [
          { id: "A", text: "Microsoft Cloud Security Benchmark (MCSB)", rationale: "Richtig. Der MCSB enthält konkrete Kontrollen und Empfehlungen und ist die Standardinitiative in Defender for Cloud." },
          { id: "B", text: "Microsoft Cybersecurity Reference Architectures (MCRA)", rationale: "MCRA beschreibt Referenzarchitekturen und das Zusammenspiel der Sicherheitsfunktionen, keinen Katalog prüfbarer Kontrollen." },
          { id: "C", text: "Das Azure-Preisblatt", rationale: "Das Preisblatt enthält keine Sicherheitskontrollen." },
          { id: "D", text: "Der Microsoft-365-Roadmap-Blog", rationale: "Die Roadmap informiert über neue Funktionen, ist aber kein Kontrollkatalog." },
        ],
        answer: "A",
        explanation:
          "MCRA hilft beim Gesamtbild und bei der Zuordnung von Fähigkeiten, MCSB beim konkreten Soll-Zustand. Beide werden in der Prüfung häufig gemeinsam genannt.",
        reference: GUIDE,
      },
      {
        id: "sc100-d1-landing-zone",
        domain: "d1",
        objective: "Entwerfen von Lösungen zum Implementieren und Steuern von Sicherheit mithilfe von Azure-Zielzonen",
        difficulty: "intermediate",
        question:
          "Ein Konzern plant viele neue Azure-Abonnements für verschiedene Teams. Sicherheits- und Governance-Vorgaben sollen von Anfang an einheitlich gelten. Was empfiehlt das Cloud Adoption Framework dafür?",
        options: [
          { id: "A", text: "Jedes Team richtet sein Abonnement nach eigenem Ermessen ein", rationale: "Das führt zu uneinheitlicher Sicherheit und schwer kontrollierbaren Umgebungen." },
          { id: "B", text: "Alle Workloads in ein einziges Abonnement legen", rationale: "Das erschwert Trennung, Berechtigungen und Skalierung." },
          { id: "C", text: "Azure-Zielzonen mit Verwaltungsgruppen, Azure Policy und zentralen Diensten", rationale: "Richtig. Zielzonen geben eine skalierbare, vorkonfigurierte Struktur mit eingebauten Sicherheits- und Governance-Vorgaben vor." },
          { id: "D", text: "Sicherheit erst nach dem Produktivstart nachrüsten", rationale: "Nachträgliche Sicherheit ist teurer und lückenhafter als Sicherheit von Anfang an." },
        ],
        answer: "C",
        explanation:
          "Azure-Zielzonen setzen die Empfehlungen des CAF um, etwa Verwaltungsgruppenhierarchie, Richtlinien, Identität, Netzwerk und Überwachung, und lassen sich über Infrastructure as Code bereitstellen.",
        reference: GUIDE,
      },
      {
        id: "sc100-d1-zero-trust",
        domain: "d1",
        objective: "Entwerfen von Lösungen, die mit dem Zero Trust Adoption Framework übereinstimmen",
        difficulty: "foundation",
        question: "Welche drei Leitprinzipien liegen dem Zero-Trust-Modell von Microsoft zugrunde?",
        options: [
          { id: "A", text: "Vertrauen im internen Netz, Prüfung nur am Perimeter, offene Ports", rationale: "Das beschreibt das klassische Perimetermodell, das Zero Trust ablöst." },
          { id: "B", text: "Schneller liefern, weniger testen, später absichern", rationale: "Das sind keine Sicherheitsprinzipien." },
          { id: "C", text: "Nur VPN, nur Kennwörter, nur Firewalls", rationale: "Zero Trust ist kein einzelnes Produkt, sondern ein Prinzipienmodell." },
          { id: "D", text: "Explizit verifizieren, Zugriff mit geringsten Rechten gewähren, von einer Kompromittierung ausgehen", rationale: "Richtig. Diese drei Prinzipien bilden die Grundlage von Zero Trust bei Microsoft." },
        ],
        answer: "D",
        explanation:
          "Das Zero Trust Adoption Framework übersetzt die Prinzipien in Geschäftsszenarien wie sichere Remote-Arbeit, schnelle Modernisierung des Sicherheitsstatus und Schutz kritischer Daten.",
        reference: GUIDE,
      },
      {
        id: "sc100-d1-devsecops",
        domain: "d1",
        objective: "Entwerfen eines DevSecOps-Prozesses, der sich an bewährten Methoden im Microsoft Cloud Adoption Framework für Azure (CAF) richtet",
        difficulty: "intermediate",
        question:
          "Ein Entwicklungsteam findet Sicherheitslücken bisher erst kurz vor dem Release. Was ist der wirksamste architektonische Ansatz?",
        options: [
          { id: "A", text: "Sicherheitsprüfungen in die Pipeline integrieren, etwa Code-, Abhängigkeits- und Geheimnisscans bei jedem Commit", rationale: "Richtig. DevSecOps verlagert Sicherheit nach vorne (Shift Left), sodass Lücken früh und günstig behoben werden." },
          { id: "B", text: "Die Release-Zyklen verlängern, ohne die Prüfungen zu ändern", rationale: "Längere Zyklen verschieben das Problem nur." },
          { id: "C", text: "Sicherheitsprüfungen nur einmal jährlich durch externe Prüfer", rationale: "Jährliche Prüfungen sind für häufige Releases viel zu selten." },
          { id: "D", text: "Den Entwicklern Administratorrechte in der Produktion geben", rationale: "Das erhöht das Risiko und verletzt das Prinzip der geringsten Rechte." },
        ],
        answer: "A",
        explanation:
          "Werkzeuge wie GitHub Advanced Security und Defender for Cloud DevOps Security unterstützen Code-, Abhängigkeits- und Geheimnisscans sowie die Sicherheit von Infrastructure as Code.",
        reference: GUIDE,
      },
      {
        id: "sc100-d1-secure-ai",
        domain: "d1",
        objective: "Entwerfen einer Strategie für die sichere KI-Einführung",
        difficulty: "intermediate",
        question:
          "Fachbereiche nutzen zunehmend eigene KI-Werkzeuge, ohne dass die IT davon weiß. Was sollte am Anfang einer Strategie für die sichere KI-Einführung stehen?",
        options: [
          { id: "A", text: "Alle KI-Werkzeuge ohne Bewertung freigeben", rationale: "Ohne Bewertung bleiben Risiken wie Datenabfluss unbekannt." },
          { id: "B", text: "Transparenz schaffen: KI-Nutzung erkennen und inventarisieren, Risiken bewerten und Richtlinien für zulässige Nutzung festlegen", rationale: "Richtig. Erst wer die KI-Nutzung kennt, kann sie gezielt absichern, steuern und sichere Alternativen anbieten." },
          { id: "C", text: "Das Internet im Unternehmen komplett sperren", rationale: "Das ist unverhältnismäßig und verhindert produktive Nutzung." },
          { id: "D", text: "KI-Nutzung nur über private Konten erlauben", rationale: "Das verschärft das Problem der unkontrollierten Nutzung." },
        ],
        answer: "B",
        explanation:
          "Bausteine sind etwa Defender for Cloud Apps zur Erkennung von KI-Apps, Microsoft Purview für Datenschutz in KI-Interaktionen und Defender for Cloud für den Sicherheitsstatus von KI-Workloads.",
        reference: GUIDE,
      },
      {
        id: "sc100-d1-bcdr",
        domain: "d1",
        objective: "Entwerfen einer Resilienzstrategie für Ransomware und andere Angriffe auf der Grundlage bewährter Sicherheitsmethoden von Microsoft",
        difficulty: "intermediate",
        question:
          "Angreifer versuchen bei Ransomware-Angriffen gezielt, auch die Sicherungen zu löschen. Welche Eigenschaft von Azure Backup hilft am direktesten dagegen?",
        options: [
          { id: "A", text: "Eine höhere Netzwerkbandbreite", rationale: "Bandbreite schützt Sicherungen nicht vor dem Löschen." },
          { id: "B", text: "Ein kürzeres Aufbewahrungsintervall", rationale: "Kürzere Aufbewahrung verringert eher die Zahl verfügbarer Wiederherstellungspunkte." },
          { id: "C", text: "Vorläufiges Löschen (Soft Delete), unveränderliche Tresore und Mehrbenutzerautorisierung für kritische Vorgänge", rationale: "Richtig. Diese Funktionen verhindern oder verzögern das Löschen von Sicherungen und verlangen für kritische Änderungen eine zusätzliche Freigabe." },
          { id: "D", text: "Sicherungen im selben Abonnement mit denselben Administratorkonten", rationale: "Wer die Produktivumgebung kompromittiert, hätte dann auch Zugriff auf die Sicherungen." },
        ],
        answer: "C",
        explanation:
          "Zur sicheren Sicherung gehören auch getrennte Berechtigungen, regelmäßige Wiederherstellungstests und Kopien außerhalb der Reichweite kompromittierter Konten.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Sicherheitsvorgänge, Identität und Compliance ──────── */
      {
        id: "sc100-d2-xdr-siem",
        domain: "d2",
        objective: "Entwerfen einer Lösung für Erkennung und Reaktion, die XDR sowie SIEM beinhaltet",
        difficulty: "intermediate",
        question:
          "Ein SOC möchte Signale aus Endpunkten, Identitäten, E-Mail und Cloud-Apps korrelieren und zusätzlich Protokolle von Firewalls und Drittanbieter-Clouds auswerten. Welche Kombination passt?",
        options: [
          { id: "A", text: "Nur Microsoft Intune", rationale: "Intune verwaltet Geräte, ist aber keine Lösung für Erkennung und Reaktion." },
          { id: "B", text: "Nur Azure Monitor-Metriken", rationale: "Metriken allein bieten keine Sicherheitskorrelation und Vorfallsverwaltung." },
          { id: "C", text: "Nur Microsoft Purview", rationale: "Purview dient Datenschutz und Compliance, nicht der Bedrohungserkennung im SOC." },
          { id: "D", text: "Microsoft Defender XDR zusammen mit Microsoft Sentinel", rationale: "Richtig. Defender XDR korreliert Microsoft-Signale, Sentinel ergänzt SIEM und SOAR für beliebige Quellen; beide lassen sich in einer gemeinsamen Oberfläche nutzen." },
        ],
        answer: "D",
        explanation:
          "Sentinel bietet Datenkonnektoren, Analyseregeln, Bedrohungssuche und Playbooks auf Basis von Logic Apps. Mit der Einbindung in das Defender-Portal entsteht eine einheitliche SecOps-Plattform.",
        reference: GUIDE,
      },
      {
        id: "sc100-d2-mitre",
        domain: "d2",
        objective: "Entwerfen und evaluieren Sie die Erkennung von Bedrohungen mit Hilfe der MITRE ATT&CK-Matrizen",
        difficulty: "intermediate",
        question:
          "Ein CISO möchte wissen, welche Angriffstechniken die vorhandenen Erkennungsregeln abdecken und wo Lücken bestehen. Welche Grundlage eignet sich dafür am besten?",
        options: [
          { id: "A", text: "Die MITRE ATT&CK-Matrix", rationale: "Richtig. ATT&CK beschreibt Taktiken und Techniken von Angreifern; Erkennungsregeln lassen sich darauf abbilden, um Abdeckung und Lücken zu sehen." },
          { id: "B", text: "Das OSI-Modell", rationale: "Das OSI-Modell beschreibt Netzwerkschichten, keine Angriffstechniken." },
          { id: "C", text: "Die ITIL-Prozessbibliothek", rationale: "ITIL beschreibt IT-Service-Management-Prozesse." },
          { id: "D", text: "Der Azure-Preisrechner", rationale: "Der Preisrechner schätzt Kosten." },
        ],
        answer: "A",
        explanation:
          "Microsoft Sentinel zeigt die Abdeckung von Analyseregeln auf der MITRE-ATT&CK-Matrix an. Neben Enterprise gibt es Matrizen für Mobile und industrielle Steuerungssysteme (ICS).",
        reference: GUIDE,
      },
      {
        id: "sc100-d2-conditional-access",
        domain: "d2",
        objective: "Entwerfen einer modernen Authentifizierungs- und Autorisierungsstrategie, einschließlich bedingten Zugriffs, kontinuierlicher Zugriffsauswertung, Risikobewertung und geschützten Aktionen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte, dass der Zugriff auf Microsoft 365 nahezu sofort entzogen wird, wenn ein Benutzerkonto deaktiviert wird oder sich der Standort des Benutzers kritisch ändert, statt erst nach Ablauf des Tokens. Welche Funktion passt?",
        options: [
          { id: "A", text: "Längere Gültigkeit der Zugriffstoken", rationale: "Längere Token verzögern den Entzug zusätzlich." },
          { id: "B", text: "Kontinuierliche Zugriffsauswertung (Continuous Access Evaluation)", rationale: "Richtig. CAE ermöglicht es unterstützten Diensten, auf kritische Ereignisse wie Kontosperrung oder Standortänderung nahezu in Echtzeit zu reagieren." },
          { id: "C", text: "Self-Service-Kennwortzurücksetzung", rationale: "SSPR erlaubt Benutzern, ihr Kennwort selbst zurückzusetzen; es entzieht keinen Zugriff." },
          { id: "D", text: "Eine neue Domäne in Microsoft Entra ID", rationale: "Eine Domäne ändert nichts an der Gültigkeit vorhandener Token." },
        ],
        answer: "B",
        explanation:
          "Moderne Zugriffsstrategien kombinieren bedingten Zugriff, risikobasierte Richtlinien aus Entra ID Protection, Authentifizierungsstärken, CAE und geschützte Aktionen für besonders sensible Vorgänge.",
        reference: GUIDE,
      },
      {
        id: "sc100-d2-pim",
        domain: "d2",
        objective: "Bewerten der Sicherheit und Governance von Microsoft Entra ID, einschließlich PIM, Berechtigungsverwaltung und Zugriffsüberprüfungen",
        difficulty: "intermediate",
        question:
          "Mehrere Administratoren haben dauerhaft die Rolle Globaler Administrator. Wie lässt sich das Risiko am besten senken, ohne die Administration zu behindern?",
        options: [
          { id: "A", text: "Allen Benutzern Administratorrechte geben, damit niemand auf andere warten muss", rationale: "Das vervielfacht das Risiko." },
          { id: "B", text: "Ein gemeinsames Administratorkonto für alle", rationale: "Gemeinsame Konten verhindern die Nachvollziehbarkeit." },
          { id: "C", text: "Privileged Identity Management mit berechtigten statt dauerhaften Zuweisungen, Just-in-Time-Aktivierung, MFA und Genehmigung", rationale: "Richtig. PIM gewährt privilegierte Rollen nur bei Bedarf und zeitlich begrenzt, mit Begründung und Protokollierung." },
          { id: "D", text: "Die Rolle bestehen lassen und nur die Kennwörter verlängern", rationale: "Längere Kennwörter ändern nichts an dauerhaft vorhandenen Rechten." },
        ],
        answer: "C",
        explanation:
          "Ergänzend gehören Zugriffsüberprüfungen, Notfallzugriffskonten, getrennte Administratorkonten und das Unternehmenszugriffsmodell zu einem sicheren Konzept für privilegierten Zugriff.",
        reference: GUIDE,
      },
      {
        id: "sc100-d2-enterprise-access-model",
        domain: "d2",
        objective: "Entwerfen einer Lösung zum Zuweisen und Delegieren privilegierter Rollen mithilfe des Unternehmenszugriffsmodells",
        difficulty: "intermediate",
        question: "Welches Ziel verfolgt das Unternehmenszugriffsmodell (Enterprise Access Model) von Microsoft?",
        options: [
          { id: "A", text: "Alle Administratoren sollen mit einem einzigen Konto alle Systeme verwalten", rationale: "Das widerspricht dem Modell, das gerade auf Trennung setzt." },
          { id: "B", text: "Privilegierte Zugriffe werden nach Ebenen getrennt: Steuerungsebene, Verwaltungsebene, Datenebene und Workloads sowie Benutzer- und App-Zugriff", rationale: "Richtig. Das Modell trennt Zugriffspfade, damit eine Kompromittierung in einem Bereich sich nicht auf die Steuerung der gesamten Umgebung ausweitet." },
          { id: "C", text: "Der Zugriff wird ausschließlich über Netzwerkstandorte geregelt", rationale: "Das Modell betrachtet Identitäten, Geräte und Zugriffspfade, nicht nur Standorte." },
          { id: "D", text: "Es ersetzt die Notwendigkeit von MFA", rationale: "MFA bleibt ein grundlegender Baustein." },
        ],
        answer: "B",
        explanation:
          "Das Unternehmenszugriffsmodell löst das ältere Tier-Modell für Active Directory ab und bezieht Cloud- und Hybridumgebungen ein. Sichere Arbeitsstationen für privilegierten Zugriff (PAW) sind ein Baustein.",
        reference: GUIDE,
      },
      {
        id: "sc100-d2-azure-policy",
        domain: "d2",
        objective: "Entwerfen von Azure Policy-Lösungen zur Erfüllung von Sicherheits- und Complianceanforderungen",
        difficulty: "intermediate",
        question:
          "Eine Vorschrift verlangt, dass Speicherkonten in Azure nur in der EU erstellt werden dürfen und öffentlicher Zugriff verboten ist. Wie wird das am zuverlässigsten durchgesetzt?",
        options: [
          { id: "A", text: "Mit Azure Policy, die nicht konforme Bereitstellungen verweigert, zugewiesen auf Verwaltungsgruppenebene", rationale: "Richtig. Azure Policy kann Regeln wie erlaubte Standorte und Einstellungen erzwingen und nicht konforme Ressourcen verhindern." },
          { id: "B", text: "Mit einer E-Mail an alle Entwickler", rationale: "Eine E-Mail setzt nichts technisch durch." },
          { id: "C", text: "Mit einem monatlichen manuellen Bericht", rationale: "Ein Bericht erkennt Verstöße erst nachträglich und verhindert sie nicht." },
          { id: "D", text: "Mit einem Azure-Tag „EU“ an jeder Ressource", rationale: "Tags dienen der Kennzeichnung und setzen keine Regeln durch." },
        ],
        answer: "A",
        explanation:
          "Policy-Effekte reichen von Audit über Deny bis zu DeployIfNotExists und Modify. Initiativen bündeln mehrere Richtlinien, etwa für regulatorische Standards in Defender for Cloud.",
        reference: GUIDE,
      },
      {
        id: "sc100-d2-agent-identity",
        domain: "d2",
        objective: "Entwerfen einer Lösung für Agentidentitäten mithilfe von Microsoft Entra-Agent-ID und Richtlinien für bedingten Zugriff",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen setzt zahlreiche KI-Agenten ein, die selbstständig auf Unternehmensdaten zugreifen. Wie sollten diese Agenten aus Identitätssicht behandelt werden?",
        options: [
          { id: "A", text: "Alle Agenten nutzen das Konto eines Administrators", rationale: "Das gibt Agenten übermäßige Rechte und verhindert jede Nachvollziehbarkeit." },
          { id: "B", text: "Agenten brauchen keine Identität, da sie keine Menschen sind", rationale: "Gerade nicht-menschliche Identitäten müssen verwaltet und abgesichert werden." },
          { id: "C", text: "Agenten erhalten dauerhaft vollen Zugriff auf alle Daten", rationale: "Das verletzt das Prinzip der geringsten Rechte." },
          { id: "D", text: "Jeder Agent erhält eine eigene, verwaltete Identität mit geringsten Rechten, unterliegt Richtlinien für bedingten Zugriff und wird in den Lebenszyklus einbezogen", rationale: "Richtig. Microsoft Entra Agent ID ermöglicht es, Agenten wie andere Identitäten zu inventarisieren, zu steuern und abzusichern." },
        ],
        answer: "D",
        explanation:
          "Agentidentitäten sind ein neuer Schwerpunkt im Studienleitfaden. Dieselben Zero-Trust-Prinzipien gelten für Benutzer, Workloads und Agenten.",
        reference: GUIDE,
      },
      {
        id: "sc100-d2-compliance-translate",
        domain: "d2",
        objective: "Übersetzen von Complianceanforderungen in Sicherheitskontrollen",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen muss nachweisen, dass es die Anforderungen eines regulatorischen Standards in Azure erfüllt, und möchte den Stand fortlaufend sehen. Welches Werkzeug hilft dabei am direktesten?",
        options: [
          { id: "A", text: "Azure DevOps Boards", rationale: "Boards dienen der Arbeitsplanung, nicht der Compliance-Bewertung." },
          { id: "B", text: "Das Dashboard zur Einhaltung gesetzlicher Bestimmungen in Microsoft Defender for Cloud", rationale: "Richtig. Es bildet Standards wie ISO 27001 oder PCI DSS auf bewertbare Kontrollen ab und zeigt den Erfüllungsgrad." },
          { id: "C", text: "Microsoft Teams-Kanäle", rationale: "Teams dient der Zusammenarbeit, nicht der Compliance-Bewertung." },
          { id: "D", text: "Azure Load Balancer", rationale: "Ein Load Balancer verteilt Netzwerkverkehr." },
        ],
        answer: "B",
        explanation:
          "Für Microsoft 365 bietet der Compliance-Manager in Microsoft Purview Bewertungen und Verbesserungsmaßnahmen. Beide helfen, Anforderungen in konkrete Kontrollen zu übersetzen.",
        reference: GUIDE,
      },

      /* ── Bereich 3: Infrastruktur ──────────────────────────────────────── */
      {
        id: "sc100-d3-arc",
        domain: "d3",
        objective: "Entwerfen einer Lösung für die Integration von Hybrid- und Multicloudumgebungen mithilfe von Azure Arc",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen betreibt Server im eigenen Rechenzentrum und in einer anderen Cloud und möchte sie mit denselben Richtlinien und mit Defender for Cloud schützen wie Azure-VMs. Was ist der empfohlene Weg?",
        options: [
          { id: "A", text: "Die Server mit Azure Arc verbinden", rationale: "Richtig. Azure Arc macht Server außerhalb von Azure als Azure-Ressourcen verwaltbar, sodass Policy, Defender for Cloud und Überwachung genutzt werden können." },
          { id: "B", text: "Alle Server sofort nach Azure migrieren", rationale: "Eine Migration kann sinnvoll sein, ist aber für einheitlichen Schutz nicht zwingend und oft nicht kurzfristig möglich." },
          { id: "C", text: "Für jede Umgebung ein eigenes, unabhängiges Werkzeug einsetzen", rationale: "Das widerspricht dem Ziel einer einheitlichen Verwaltung." },
          { id: "D", text: "Auf den Schutz der lokalen Server verzichten", rationale: "Lokale Server sind häufig Angriffsziele und müssen geschützt werden." },
        ],
        answer: "A",
        explanation:
          "Für AWS- und GCP-Konten bietet Defender for Cloud zusätzlich eigene Multicloud-Konnektoren. Zusammen entsteht ein einheitlicher Sicherheitsstatus über alle Umgebungen.",
        reference: GUIDE,
      },
      {
        id: "sc100-d3-exposure-management",
        domain: "d3",
        objective: "Angeben von Anforderungen und Prioritäten für einen Verwaltungsprozess des Sicherheitsstatus mit Microsoft Security Exposure Management",
        difficulty: "intermediate",
        question:
          "Das Sicherheitsteam hat Tausende offene Empfehlungen und möchte zuerst die beheben, über die ein Angreifer tatsächlich kritische Ressourcen erreichen könnte. Welcher Ansatz passt?",
        options: [
          { id: "A", text: "Alle Empfehlungen alphabetisch abarbeiten", rationale: "Die alphabetische Reihenfolge hat keinen Bezug zum Risiko." },
          { id: "B", text: "Nur Empfehlungen mit dem geringsten Aufwand umsetzen", rationale: "Der geringste Aufwand sagt nichts über das tatsächliche Risiko aus." },
          { id: "C", text: "Angriffspfadanalysen nutzen, um Schwachstellen auf Pfaden zu kritischen Ressourcen zu priorisieren", rationale: "Richtig. Angriffspfade zeigen, welche Kombination von Schwächen einen Weg zu wertvollen Ressourcen eröffnet, und helfen, die wirksamsten Maßnahmen zuerst umzusetzen." },
          { id: "D", text: "Empfehlungen ignorieren, solange kein Vorfall bekannt ist", rationale: "Das wartet auf den Schaden, statt ihn zu verhindern." },
        ],
        answer: "C",
        explanation:
          "Microsoft Security Exposure Management und Defender for Cloud bieten Angriffspfadanalysen, Analysen der Angriffsfläche und Initiativen zur Verbesserung des Sicherheitsstatus.",
        reference: GUIDE,
      },
      {
        id: "sc100-d3-defender-iot",
        domain: "d3",
        objective: "Bewerten von Lösungen zum Schutz von OT und ICS mithilfe von Microsoft Defender for IoT",
        difficulty: "intermediate",
        question:
          "Ein Produktionsbetrieb möchte seine industriellen Steuerungen überwachen, auf denen keine Agenten installiert werden dürfen. Welcher Ansatz von Defender for IoT passt?",
        options: [
          { id: "A", text: "Einen Endpunktagenten auf jeder Steuerung installieren", rationale: "Auf vielen OT-Geräten ist die Installation von Agenten nicht möglich oder nicht zulässig." },
          { id: "B", text: "Die Steuerungen direkt mit dem Internet verbinden", rationale: "Das erhöht die Angriffsfläche erheblich." },
          { id: "C", text: "Die Steuerungen nur einmal jährlich manuell prüfen", rationale: "Das bietet keine laufende Bedrohungserkennung." },
          { id: "D", text: "Agentlose, passive Netzwerküberwachung über Netzwerksensoren an einem gespiegelten Port", rationale: "Richtig. Defender for IoT analysiert den Netzwerkverkehr passiv, erkennt Geräte und Anomalien, ohne die Steuerungen zu beeinträchtigen." },
        ],
        answer: "D",
        explanation:
          "OT-Umgebungen sind oft empfindlich gegenüber aktiven Scans. Passive Überwachung, Segmentierung und die Integration in Sentinel und Defender XDR sind typische Bausteine.",
        reference: GUIDE,
      },
      {
        id: "sc100-d3-laps",
        domain: "d3",
        objective: "Bewertung der Windows Local Administrator Password Solution (Windows LAPS)",
        difficulty: "intermediate",
        question:
          "Auf allen Clients hat das lokale Administratorkonto dasselbe Kennwort. Ein Angreifer könnte sich damit nach einer Kompromittierung seitlich im Netz bewegen. Welche Lösung adressiert das direkt?",
        options: [
          { id: "A", text: "Windows LAPS, das für jedes Gerät ein eigenes, regelmäßig wechselndes Kennwort verwaltet", rationale: "Richtig. Eindeutige, rotierende Kennwörter verhindern, dass ein einziges Kennwort Zugang zu vielen Geräten gibt." },
          { id: "B", text: "Das gemeinsame Kennwort einmal jährlich ändern", rationale: "Das Kennwort bliebe weiterhin auf allen Geräten gleich." },
          { id: "C", text: "Das Kennwort in einer Freigabe für alle Benutzer ablegen", rationale: "Das macht das Kennwort zusätzlich leichter zugänglich." },
          { id: "D", text: "Die Bildschirmsperre deaktivieren", rationale: "Das schwächt die Sicherheit weiter und hat mit dem Kennwortproblem nichts zu tun." },
        ],
        answer: "A",
        explanation:
          "Windows LAPS speichert die Kennwörter in Microsoft Entra ID oder Active Directory und lässt sich über Intune oder Gruppenrichtlinien konfigurieren.",
        reference: GUIDE,
      },
      {
        id: "sc100-d3-sse",
        domain: "d3",
        objective: "Auswerten von Lösungen, die Microsoft Entra Private Access verwenden",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte das klassische VPN ablösen. Mitarbeitende sollen nur auf die jeweils benötigten internen Anwendungen zugreifen können, mit Prüfung über bedingten Zugriff. Welche Lösung passt?",
        options: [
          { id: "A", text: "Ein VPN mit vollem Netzwerkzugriff für alle", rationale: "Voller Netzwerkzugriff widerspricht Zero Trust und erleichtert seitliche Bewegung." },
          { id: "B", text: "Microsoft Entra Private Access als Zero-Trust-Netzwerkzugriff", rationale: "Richtig. Private Access gewährt identitätsbasierten Zugriff auf einzelne private Anwendungen, gesteuert über bedingten Zugriff." },
          { id: "C", text: "Interne Anwendungen direkt ins Internet stellen", rationale: "Das vergrößert die Angriffsfläche erheblich." },
          { id: "D", text: "Remotedesktop über offenen Port 3389", rationale: "Offenes RDP im Internet ist ein häufiger Angriffsweg." },
        ],
        answer: "B",
        explanation:
          "Microsoft Entra Internet Access sichert dagegen den Zugriff auf Internet- und SaaS-Ressourcen als sicheres Webgateway. Beide bilden zusammen die Security-Service-Edge-Lösung von Microsoft.",
        reference: GUIDE,
      },
      {
        id: "sc100-d3-containers",
        domain: "d3",
        objective: "Angeben von Sicherheitsanforderungen für Container und Containerorchestrierung",
        difficulty: "intermediate",
        question: "Welche Anforderung gehört zu einer sicheren Container-Plattform auf Azure Kubernetes Service (AKS)?",
        options: [
          { id: "A", text: "Container laufen grundsätzlich mit Root-Rechten", rationale: "Root-Rechte vergrößern den Schaden bei einer Kompromittierung." },
          { id: "B", text: "Images werden aus beliebigen öffentlichen Quellen ungeprüft verwendet", rationale: "Ungeprüfte Images können Schwachstellen oder Schadcode enthalten." },
          { id: "C", text: "Images aus einer vertrauenswürdigen Registry mit Schwachstellenscans, Netzwerkrichtlinien und Laufzeitschutz durch Defender for Containers", rationale: "Richtig. Sichere Images, Segmentierung und Laufzeitschutz sind zentrale Anforderungen." },
          { id: "D", text: "Die Kubernetes-API öffentlich und ohne Authentifizierung erreichbar machen", rationale: "Die API-Steuerungsebene muss geschützt und eingeschränkt sein." },
        ],
        answer: "C",
        explanation:
          "Weitere Anforderungen sind Microsoft Entra ID für den Clusterzugriff, Workloadidentitäten statt geheimer Schlüssel, Azure Policy für Kubernetes und private Cluster.",
        reference: GUIDE,
      },
      {
        id: "sc100-d3-easm",
        domain: "d3",
        objective: "Entwerfen einer Lösung für Microsoft Defender External Attack Surface Management (Defender EASM)",
        difficulty: "intermediate",
        question:
          "Nach mehreren Firmenübernahmen weiß das Sicherheitsteam nicht, welche Domains, IP-Adressen und Webanwendungen des Konzerns aus dem Internet erreichbar sind. Welche Lösung hilft am direktesten?",
        options: [
          { id: "A", text: "Microsoft Intune", rationale: "Intune verwaltet Geräte, entdeckt aber keine extern erreichbaren Ressourcen." },
          { id: "B", text: "Azure Backup", rationale: "Backup sichert Daten, erkennt aber keine Angriffsfläche." },
          { id: "C", text: "Microsoft Defender External Attack Surface Management", rationale: "Richtig. Defender EASM erkennt und inventarisiert extern erreichbare Ressourcen aus Sicht eines Angreifers, auch unbekannte oder vergessene." },
          { id: "D", text: "Microsoft Purview eDiscovery", rationale: "eDiscovery dient der Suche nach Inhalten für rechtliche Zwecke." },
        ],
        answer: "C",
        explanation:
          "Unbekannte Ressourcen (Shadow IT) sind ein häufiges Einfallstor. Die Erkenntnisse aus EASM fließen in die Priorisierung im Exposure Management ein.",
        reference: GUIDE,
      },

      {
        id: "sc100-d3-server-baseline",
        domain: "d3",
        objective: "Angeben von Sicherheitsbaselines für Server und Clientendpunkte",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen betreibt Windows- und Linux-Server in Azure und lokal. Es möchte Abweichungen von einer einheitlichen Härtungsbaseline erkennen und Endpunktschutz auf allen Servern sicherstellen. Was passt am besten?",
        options: [
          { id: "A", text: "Für jeden Server individuell entscheiden, ohne Vorgabe", rationale: "Ohne einheitliche Baseline sind Abweichungen weder messbar noch steuerbar." },
          { id: "B", text: "Nur die Windows-Server absichern, Linux-Server brauchen keinen Schutz", rationale: "Auch Linux-Server sind häufige Angriffsziele." },
          { id: "C", text: "Ausschließlich auf die Firewall am Perimeter vertrauen", rationale: "Der Perimeter schützt nicht vor Angriffen innerhalb des Netzes oder über kompromittierte Identitäten." },
          { id: "D", text: "Defender for Servers über Defender for Cloud (lokale Server über Azure Arc) mit Bewertung gegen Sicherheitsbaselines", rationale: "Richtig. Defender for Servers liefert Endpunktschutz und Schwachstellenbewertung, Defender for Cloud bewertet Konfigurationen gegen Baselines für mehrere Betriebssysteme." },
        ],
        answer: "D",
        explanation:
          "Sicherheitsbaselines beschreiben empfohlene Konfigurationen. Für Clients werden Baselines häufig über Intune verteilt, für Server über Azure Policy, Machine Configuration und Defender for Cloud bewertet.",
        reference: GUIDE,
      },

      /* ── Bereich 4: Anwendungen und Daten ──────────────────────────────── */
      {
        id: "sc100-d4-copilot",
        domain: "d4",
        objective: "Bewerten Sie Datensicherheits- und Compliancekontrollen in Microsoft 365 Copilot",
        difficulty: "intermediate",
        question:
          "Vor der Einführung von Microsoft 365 Copilot befürchtet ein Unternehmen, dass Mitarbeitende über Copilot Inhalte finden, auf die sie nie hätten Zugriff haben dürfen. Was ist die wichtigste vorbereitende Maßnahme?",
        options: [
          { id: "A", text: "Copilot für alle sofort ohne Vorbereitung freischalten", rationale: "Copilot nutzt die vorhandenen Berechtigungen; zu weit gefasste Freigaben würden sichtbar." },
          { id: "B", text: "Berechtigungen und Freigaben überprüfen und bereinigen sowie vertrauliche Inhalte mit Purview-Vertraulichkeitsbezeichnungen schützen", rationale: "Richtig. Copilot respektiert bestehende Berechtigungen; Überberechtigungen und fehlende Klassifizierung sind daher das eigentliche Risiko." },
          { id: "C", text: "Alle Dokumente in eine öffentliche Website verschieben", rationale: "Das würde die Vertraulichkeit vollständig aufheben." },
          { id: "D", text: "Die Mehrstufige Authentifizierung abschalten", rationale: "Das schwächt die Sicherheit und hat mit Überberechtigungen nichts zu tun." },
        ],
        answer: "B",
        explanation:
          "Hilfreich sind Berichte zu überfreigegebenen Inhalten, Purview Information Protection, Data Loss Prevention und Data Security Posture Management für KI.",
        reference: GUIDE,
      },
      {
        id: "sc100-d4-threat-modeling",
        domain: "d4",
        objective: "Bewerten von Bedrohungen für unternehmenskritische Anwendungen mithilfe der Bedrohungsmodellierung",
        difficulty: "intermediate",
        question: "Wann ist der beste Zeitpunkt, eine Bedrohungsmodellierung für eine neue unternehmenskritische Anwendung durchzuführen?",
        options: [
          { id: "A", text: "Früh in der Entwurfsphase und erneut bei wesentlichen Architekturänderungen", rationale: "Richtig. Früh erkannte Bedrohungen lassen sich im Entwurf mit geringem Aufwand adressieren." },
          { id: "B", text: "Erst nach dem ersten Sicherheitsvorfall", rationale: "Dann ist der Schaden bereits eingetreten." },
          { id: "C", text: "Nur einmal nach dem Produktivstart", rationale: "Nach dem Start sind Änderungen deutlich teurer, und spätere Änderungen werden nicht erfasst." },
          { id: "D", text: "Gar nicht, wenn eine Web Application Firewall vorhanden ist", rationale: "Eine WAF ersetzt keine systematische Analyse der Bedrohungen." },
        ],
        answer: "A",
        explanation:
          "Methoden wie STRIDE helfen, Bedrohungen systematisch zu erkennen. Das Microsoft Threat Modeling Tool unterstützt die Modellierung von Datenflüssen und Vertrauensgrenzen.",
        reference: GUIDE,
      },
      {
        id: "sc100-d4-workload-identity",
        domain: "d4",
        objective: "Entwerfen einer Lösung für Workloadidentitäten zum Authentifizieren und Zugreifen auf Azure-Ressourcen",
        difficulty: "intermediate",
        question:
          "Eine Web-App in Azure App Service muss auf eine Azure SQL-Datenbank und Azure Key Vault zugreifen. Bisher steht ein Verbindungsschlüssel in der Konfigurationsdatei. Was ist der empfohlene Ansatz?",
        options: [
          { id: "A", text: "Den Schlüssel im Quellcode-Repository speichern", rationale: "Geheimnisse im Repository werden leicht offengelegt." },
          { id: "B", text: "Den Schlüssel per E-Mail an das Betriebsteam senden", rationale: "E-Mail ist kein sicherer Speicherort für Geheimnisse." },
          { id: "C", text: "Den Schlüssel nie rotieren, damit nichts ausfällt", rationale: "Nicht rotierte Schlüssel erhöhen das Risiko bei einer Offenlegung." },
          { id: "D", text: "Eine verwaltete Identität für die App nutzen und ihr nur die benötigten Rollen zuweisen", rationale: "Richtig. Verwaltete Identitäten machen gespeicherte Geheimnisse überflüssig, weil Azure die Anmeldeinformationen automatisch verwaltet." },
        ],
        answer: "D",
        explanation:
          "Für Workloads außerhalb von Azure, etwa in GitHub Actions, bietet die Workloadidentitätsföderation einen Zugriff ohne langlebige Geheimnisse.",
        reference: GUIDE,
      },
      {
        id: "sc100-d4-encryption",
        domain: "d4",
        objective: "Bewerten von Lösungen für die Verschlüsselung ruhender und übertragener Daten, einschließlich Azure Key Vault und Infrastrukturverschlüsselung",
        difficulty: "intermediate",
        question:
          "Eine Bank muss für Azure Storage selbst die Kontrolle über die Verschlüsselungsschlüssel haben und sie bei Bedarf widerrufen können. Welche Lösung passt?",
        options: [
          { id: "A", text: "Ausschließlich die von Microsoft verwalteten Schlüssel", rationale: "Dabei verwaltet Microsoft die Schlüssel; die Bank hätte keine eigene Kontrolle über Rotation und Widerruf." },
          { id: "B", text: "Kundenseitig verwaltete Schlüssel in Azure Key Vault oder Managed HSM", rationale: "Richtig. Mit kundenseitig verwalteten Schlüsseln steuert die Bank Rotation, Zugriff und Widerruf selbst." },
          { id: "C", text: "Die Verschlüsselung deaktivieren", rationale: "Azure Storage verschlüsselt ruhende Daten immer; eine Deaktivierung wäre zudem nicht im Sinne der Anforderung." },
          { id: "D", text: "Die Schlüssel in einer Tabelle auf einem Dateiserver speichern", rationale: "Das bietet weder sicheren Schutz noch kontrollierten Zugriff." },
        ],
        answer: "B",
        explanation:
          "Infrastrukturverschlüsselung ergänzt eine zweite Verschlüsselungsebene. Für Daten bei der Übertragung werden TLS und gegebenenfalls private Endpunkte eingesetzt.",
        reference: GUIDE,
      },
      {
        id: "sc100-d4-api-management",
        domain: "d4",
        objective: "Entwerfen einer Lösung für API Management und Sicherheit",
        difficulty: "intermediate",
        question:
          "Mehrere Backend-APIs sollen Partnern zentral bereitgestellt werden, mit Authentifizierung, Drosselung von Anfragen und einheitlicher Protokollierung. Welche Lösung passt?",
        options: [
          { id: "A", text: "Azure API Management als zentrales Gateway mit Richtlinien für Authentifizierung und Rate Limiting", rationale: "Richtig. API Management bündelt APIs hinter einem Gateway und setzt Sicherheits- und Nutzungsrichtlinien zentral durch." },
          { id: "B", text: "Alle Backend-APIs direkt und ohne Authentifizierung öffentlich erreichbar machen", rationale: "Das bietet weder Zugriffsschutz noch Drosselung." },
          { id: "C", text: "Jedem Partner Administratorzugang zum Backend geben", rationale: "Das verletzt das Prinzip der geringsten Rechte erheblich." },
          { id: "D", text: "Die APIs per FTP bereitstellen", rationale: "FTP ist kein geeignetes Verfahren zur Bereitstellung von APIs." },
        ],
        answer: "A",
        explanation:
          "In Kombination mit Microsoft Entra ID für OAuth 2.0, Defender for APIs und einer vorgeschalteten WAF entsteht ein mehrschichtiger API-Schutz.",
        reference: GUIDE,
      },
      {
        id: "sc100-d4-waf",
        domain: "d4",
        objective: "Entwerfen von Lösungen zum Sichern von Anwendungen mithilfe der Azure Web Application Firewall (WAF)",
        difficulty: "intermediate",
        question:
          "Eine weltweit genutzte Webanwendung soll vor OWASP-Top-10-Angriffen geschützt werden; die Nutzer sollen zudem über den nächstgelegenen Edge-Standort zugreifen. Welche Kombination passt am besten?",
        options: [
          { id: "A", text: "Eine Netzwerksicherheitsgruppe mit Portregeln", rationale: "NSGs filtern auf Netzwerk- und Transportebene, erkennen aber keine Angriffe auf Anwendungsebene." },
          { id: "B", text: "Azure DNS allein", rationale: "DNS löst Namen auf, bietet aber keinen Anwendungsschutz." },
          { id: "C", text: "Azure Front Door mit Azure WAF", rationale: "Richtig. Front Door liefert globale Edge-Auslieferung, und die integrierte WAF schützt mit verwalteten Regelsätzen vor typischen Webangriffen." },
          { id: "D", text: "Azure Bastion", rationale: "Bastion bietet sicheren RDP- und SSH-Zugang zu VMs, keinen Schutz für Webanwendungen." },
        ],
        answer: "C",
        explanation:
          "Für regionale Anwendungen kommt Azure Application Gateway mit WAF in Frage. Azure DDoS Protection ergänzt den Schutz auf Netzwerkebene.",
        reference: GUIDE,
      },
      {
        id: "sc100-d4-data-classification",
        domain: "d4",
        objective: "Bewerten von Lösungen für die Datenermittlung und -klassifizierung",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen weiß nicht, wo in Microsoft 365 und in Azure-Datenquellen personenbezogene Daten liegen. Was ist der erste sinnvolle Schritt einer Datenschutzstrategie?",
        options: [
          { id: "A", text: "Alle Daten pauschal löschen", rationale: "Das ist weder praktikabel noch zulässig." },
          { id: "B", text: "Sofort alle Dateien mit demselben Schlüssel verschlüsseln, ohne sie zu kennen", rationale: "Ohne Kenntnis der Daten lassen sich Schutzmaßnahmen nicht gezielt planen." },
          { id: "C", text: "Den Datenschutz an die Benutzer delegieren, ohne Werkzeuge bereitzustellen", rationale: "Ohne Werkzeuge und Vorgaben entsteht kein einheitlicher Schutz." },
          { id: "D", text: "Daten mit Microsoft Purview ermitteln und klassifizieren, etwa mit vertraulichen Informationstypen und Vertraulichkeitsbezeichnungen", rationale: "Richtig. Erst wenn bekannt ist, wo welche Daten liegen, lassen sich Schutz, DLP und Aufbewahrung gezielt anwenden." },
        ],
        answer: "D",
        explanation:
          "Purview deckt Microsoft 365, Azure-Datenquellen und weitere Systeme ab. Auf der Klassifizierung bauen Verschlüsselung, Data Loss Prevention und Insider-Risikomanagement auf.",
        reference: GUIDE,
      },
    ],
  },
};
