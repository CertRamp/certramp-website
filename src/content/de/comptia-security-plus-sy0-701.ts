import type { DeContent } from "@/config/types";

/**
 * German edition of the CompTIA Security+ SY0-701 guide and free practice questions.
 * Faithful translation of src/content/guides/comptia-security-plus-sy0-701.ts and
 * src/content/practice-questions/comptia-security-plus-sy0-701.ts. Exam facts match the
 * verified `exam` record in src/config/certifications.ts. Domain names and objectives stay
 * in CompTIA's official English wording (no official German version of SY0-701 exists).
 */
const OBJECTIVES = {
  label: "CompTIA — Security+ V7 (SY0-701): Prüfungsdetails und Prüfungsziele (Englisch)",
  url: "https://www.comptia.org/en-us/certifications/security/v7/",
};

export const comptiaSecurityPlusSy0701De: DeContent = {
  slug: "comptia-security-plus-sy0-701",
  name: "CompTIA Security+ SY0-701",
  languageNote:
    "Die offizielle Prüfung SY0-701 gibt es nicht auf Deutsch – CompTIA bietet sie auf Englisch, Japanisch, Portugiesisch, Spanisch und Thai an; unsere Übungsprüfungen helfen Ihnen, die Inhalte auf Deutsch zu verstehen.",
  facts: [
    { label: "Prüfungsanbieter", value: "CompTIA" },
    { label: "Prüfungscode", value: "SY0-701" },
    { label: "Fragen", value: "Maximal 90" },
    { label: "Dauer", value: "90 Minuten" },
    { label: "Bestehensgrenze", value: "750 (auf einer Skala von 100–900)" },
    { label: "Fragetypen", value: "Multiple-Choice- und performancebasierte Fragen" },
    { label: "Prüfungssprachen", value: "Englisch, Japanisch, Portugiesisch, Spanisch, Thai" },
    {
      label: "Voraussetzungen",
      value:
        "Empfohlene Erfahrung: CompTIA Network+ und zwei Jahre Berufserfahrung als Security- bzw. Systemadministrator. Drei Jahre gültig; Verlängerung mit 50 CEUs.",
    },
    { label: "Prüfungsversion", value: "Security+ V7 (Prüfungsziele, Dokumentversion 7.0)" },
    {
      label: "Auslaufdatum",
      value: "Englisch: 11. Juni 2027; Japanisch, Portugiesisch, Spanisch und Thai: 13. August 2027",
    },
  ],
  domains: [
    {
      id: "d1",
      name: "General Security Concepts",
      weight: "12%",
      objectives: [
        "1.1 Compare and contrast various types of security controls.",
        "1.2 Summarize fundamental security concepts.",
        "1.3 Explain the importance of change management processes and the impact to security.",
        "1.4 Explain the importance of using appropriate cryptographic solutions.",
      ],
    },
    {
      id: "d2",
      name: "Threats, Vulnerabilities, and Mitigations",
      weight: "22%",
      objectives: [
        "2.1 Compare and contrast common threat actors and motivations.",
        "2.2 Explain common threat vectors and attack surfaces.",
        "2.3 Explain various types of vulnerabilities.",
        "2.4 Given a scenario, analyze indicators of malicious activity.",
        "2.5 Explain the purpose of mitigation techniques used to secure the enterprise.",
      ],
    },
    {
      id: "d3",
      name: "Security Architecture",
      weight: "18%",
      objectives: [
        "3.1 Compare and contrast security implications of different architecture models.",
        "3.2 Given a scenario, apply security principles to secure enterprise infrastructure.",
        "3.3 Compare and contrast concepts and strategies to protect data.",
        "3.4 Explain the importance of resilience and recovery in security architecture.",
      ],
    },
    {
      id: "d4",
      name: "Security Operations",
      weight: "28%",
      objectives: [
        "4.1 Given a scenario, apply common security techniques to computing resources.",
        "4.2 Explain the security implications of proper hardware, software, and data asset management.",
        "4.3 Explain various activities associated with vulnerability management.",
        "4.4 Explain security alerting and monitoring concepts and tools.",
        "4.5 Given a scenario, modify enterprise capabilities to enhance security.",
        "4.6 Given a scenario, implement and maintain identity and access management.",
        "4.7 Explain the importance of automation and orchestration related to secure operations.",
        "4.8 Explain appropriate incident response activities.",
        "4.9 Given a scenario, use data sources to support an investigation.",
      ],
    },
    {
      id: "d5",
      name: "Security Program Management and Oversight",
      weight: "20%",
      objectives: [
        "5.1 Summarize elements of effective security governance.",
        "5.2 Explain elements of the risk management process.",
        "5.3 Explain the processes associated with third-party risk assessment and management.",
        "5.4 Summarize elements of effective security compliance.",
        "5.5 Explain types and purposes of audits and assessments.",
        "5.6 Given a scenario, implement security awareness practices.",
      ],
    },
  ],

  guide: {
    slug: "comptia-security-plus-sy0-701",
    summary:
      "CompTIA Security+ SY0-701 (Security+ V7) prüft grundlegende Sicherheitskompetenzen in fünf Domänen – von Sicherheitskontrollen und Bedrohungen bis zu Security Operations und Governance. Sie erhalten maximal 90 Multiple-Choice- und performancebasierte Fragen in 90 Minuten und benötigen 750 Punkte auf einer Skala von 100–900. Die Nachfolgeprüfung SY0-801 (V8) erscheint voraussichtlich am oder um den 17. November 2026; SY0-701 läuft am 11. Juni 2027 auf Englisch und am 13. August 2027 auf Japanisch, Portugiesisch, Spanisch und Thai aus.",
    whoFor: [
      "System- und Netzwerkadministratoren, die in eine Security-Rolle wechseln",
      "Junior-Security-Analysten und SOC-Mitarbeitende, die ein breites, herstellerneutrales Fundament suchen",
      "Kandidatinnen und Kandidaten, die bereits mit der Vorbereitung auf SY0-701 begonnen haben und die Prüfung vor dem Auslaufen 2027 ablegen können",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was SY0-701 tatsächlich prüft",
        paragraphs: [
          "Die Prüfungsziele von SY0-701 umfassen fünf Domänen: General Security Concepts (allgemeine Sicherheitskonzepte, 12 %), Threats, Vulnerabilities, and Mitigations (Bedrohungen, Schwachstellen und Gegenmaßnahmen, 22 %), Security Architecture (Sicherheitsarchitektur, 18 %), Security Operations (Sicherheitsbetrieb, 28 %) sowie Security Program Management and Oversight (Steuerung und Überwachung des Sicherheitsprogramms, 20 %). Security Operations hat das höchste Gewicht – Identity and Access Management, Schwachstellenmanagement, Monitoring, Incident Response und Untersuchungen verdienen deshalb einen großen Teil Ihrer Lernzeit.",
          "Viele Prüfungsziele beginnen mit „Given a scenario“ – etwa Indikatoren für bösartige Aktivitäten analysieren, Unternehmensinfrastruktur absichern oder Identity and Access Management umsetzen. Andere verlangen, Konzepte zu vergleichen und gegenüberzustellen oder zu erklären. Rechnen Sie damit, für eine kurze Situation die passende Kontrolle, den Angriffstyp, die Technologie oder den nächsten Schritt auszuwählen, statt Definitionen aufzusagen.",
        ],
      },
      {
        id: "sy0-701-vs-sy0-801",
        heading: "SY0-701 oder SY0-801: Welche Version sollten Sie ablegen?",
        paragraphs: [
          "CompTIA ersetzt Security+ V7 (SY0-701, gestartet am 7. November 2023) durch Security+ V8 (SY0-801), die voraussichtlich am oder um den 17. November 2026 erscheint. SY0-701 bleibt bis zum Auslaufen verfügbar: bis 11. Juni 2027 für die englische Prüfung und bis 13. August 2027 für die japanische, portugiesische, spanische und thailändische Prüfung. Beide Versionen behalten dasselbe Format – maximal 90 Fragen, 90 Minuten und eine Bestehensgrenze von 750 auf einer Skala von 100–900.",
          "Die Prüfungsziele von V8 verwenden dieselbe Struktur mit fünf Domänen, aber andere Gewichtungen (16 %, 24 %, 19 %, 27 % und 14 %), und Domäne 2 heißt nun „Threats, Vulnerabilities, and Attacks“. Zum Start führt CompTIA SY0-801 nur auf Englisch. Wenn Sie in der Vorbereitung auf SY0-701 schon weit sind und die Prüfung vor dem Auslaufdatum ablegen können, ist es sinnvoll, bei SY0-701 zu bleiben. Wenn Sie gerade erst anfangen und spät in der Übergangsphase auf Englisch prüfen wollen, bereiten Sie sich stattdessen auf SY0-801 vor (CertRamp hat eine eigene Seite zu SY0-801).",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Laden Sie die offiziellen Prüfungsziele herunter",
            body: "Holen Sie sich die SY0-701 Exam Objectives (V7) von CompTIA und markieren Sie jedes der 28 Prüfungsziele als „beherrscht“, „unsicher“ oder „neu“. Verteilen Sie Ihre Zeit nach Domänengewicht – allein Security Operations macht 28 % aus.",
          },
          {
            title: "Legen Sie Ihren Zeitplan mit Blick auf das Auslaufdatum fest",
            body: "Wählen Sie einen Prüfungstermin deutlich vor dem Auslaufen von SY0-701 (11. Juni 2027 auf Englisch, 13. August 2027 in den anderen Sprachen), damit eine Wiederholung in derselben Version noch möglich ist.",
          },
          {
            title: "Lernen Sie das Vokabular in Vergleichspaaren",
            body: "Viele Prüfungsziele lauten „compare and contrast“. Lernen Sie Kontrollen, Angriffe und Technologien im direkten Vergleich: präventiv vs. detektiv, Tokenisierung vs. Maskierung, Hot vs. Warm vs. Cold Site, SAML vs. OAuth, SPF vs. DKIM vs. DMARC.",
          },
          {
            title: "Sammeln Sie praktische Erfahrung für die Szenario-Ziele",
            body: "Nutzen Sie ein kleines Lab oder kostenlose Tools, um Logs zu lesen, einen Schwachstellenscan auszuführen, eine Firewall-Regel zu konfigurieren und Zertifikate zu prüfen. Performancebasierte Fragen fallen deutlich leichter, wenn Sie die echten Artefakte schon einmal gesehen haben.",
          },
          {
            title: "Üben Sie unter Zeitdruck",
            body: "Absolvieren Sie zeitlich begrenzte Übungsprüfungen mit bis zu 90 Fragen in 90 Minuten. Lesen Sie jede Erklärung – auch zu den Fragen, die Sie richtig beantwortet haben – und notieren Sie, zu welchem Prüfungsziel jeder Fehler gehört.",
          },
          {
            title: "Buchen Sie, wenn Ihre Ergebnisse stabil sind",
            body: "Buchen Sie die Prüfung, sobald Sie mehrere Übungsprüfungen mit Abstand bestehen. Planen Sie die Verlängerung von Anfang an mit ein: Die Zertifizierung ist drei Jahre gültig und erfordert 50 CEUs.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Mit den falschen Prüfungszielen lernen. Material zu SY0-801 hat andere Gewichtungen und eine umbenannte Domäne 2; prüfen Sie, ob Ihre Unterlagen SY0-701 angeben.",
          "Die Prüfung zu spät ansetzen. Ein nicht bestandener Versuch kurz vor dem 11. Juni 2027 (Englisch) lässt möglicherweise keine Zeit mehr für eine Wiederholung in SY0-701.",
          "Performancebasierte Fragen unterschätzen. Sie prüfen angewandte Fähigkeiten – reines Lesen reicht nicht.",
          "Governance als Nebensache behandeln. Security Program Management and Oversight macht 20 % von SY0-701 aus – Risikomanagement, Drittparteienrisiken, Compliance, Audits und Awareness zählen alle.",
          "Listen auswendig lernen, ohne das „Warum“ zu verstehen. Szenariofragen belohnen das Wissen, wann eine Kontrolle oder Technik passt, nicht nur ihren Namen.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die Security+-Prüfung SY0-701 und wie hoch ist die Bestehensgrenze?",
        answer:
          "Sie haben 90 Minuten für maximal 90 Fragen, eine Mischung aus Multiple-Choice- und performancebasierten Fragen. Die Bestehensgrenze liegt bei 750 auf einer Skala von 100–900.",
      },
      {
        question: "Wann läuft SY0-701 aus und was ersetzt die Prüfung?",
        answer:
          "Die englische Prüfung SY0-701 läuft am 11. Juni 2027 aus; die japanische, portugiesische, spanische und thailändische Version am 13. August 2027. Die Nachfolgeprüfung Security+ V8 (SY0-801) erscheint voraussichtlich am oder um den 17. November 2026 und wird zum Start nur auf Englisch angeboten.",
      },
      {
        question: "In welchen Sprachen ist SY0-701 verfügbar?",
        answer:
          "CompTIA bietet SY0-701 auf Englisch, Japanisch, Portugiesisch, Spanisch und Thai an.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Nein. SY0-701 wird nicht auf Deutsch angeboten; Sie legen sie in einer der verfügbaren Sprachen ab, für Teilnehmende aus Deutschland, Österreich und der Schweiz in der Regel auf Englisch. Unsere deutschsprachigen Übungsfragen helfen Ihnen, die Inhalte auf Deutsch zu verstehen – die Fachbegriffe der Prüfung sollten Sie dennoch auf Englisch kennen.",
      },
      {
        question: "Wie halte ich Security+ aktuell?",
        answer:
          "Security+ ist ab dem Tag des Bestehens drei Jahre gültig. Zur Verlängerung benötigen Sie 50 Continuing Education Units (CEUs) – etwa über einen CompTIA-CertMaster-CE-Kurs, anrechenbare Aktivitäten oder andere Zertifizierungen – oder Sie bestehen die jeweils aktuelle Version der Security+-Prüfung.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, geschrieben nach den von CompTIA veröffentlichten Prüfungszielen für SY0-701. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "Security+ SY0-701 Prüfungsvorbereitung 2026: Leitfaden",
      description:
        "Security+ SY0-701 Leitfaden: 90 Fragen, 90 Minuten, Bestehensgrenze 750, fünf Domänen, Auslaufen am 11. Juni 2027, Vergleich mit SY0-801 und Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  questions: {
    slug: "comptia-security-plus-sy0-701",
    intro:
      "15 eigene Übungsfragen zu CompTIA Security+ SY0-701 aus allen fünf Domänen der offiziellen Prüfungsziele (V7), ungefähr so gewichtet wie die echte Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "Security+ SY0-701 Übungsfragen mit Lösungen (2026)",
      description:
        "15 kostenlose, eigene Übungsfragen zu Security+ SY0-701: Sicherheitskontrollen, Bedrohungen, Architektur, Betrieb und Governance – jeweils mit Erklärung.",
    },
    questions: [
      /* ── Domäne 1: General Security Concepts (12 %) ─────────────────────── */
      {
        id: "secplus701-d1-deterrent-control",
        domain: "d1",
        objective: "1.1 Compare and contrast various types of security controls.",
        difficulty: "foundation",
        question:
          "Ein Unternehmen bringt an jedem Eingang Schilder an, die darauf hinweisen, dass das Gelände videoüberwacht wird und Eindringlinge strafrechtlich verfolgt werden. Welche Art von Kontrolle stellen die Schilder in erster Linie dar?",
        options: [
          { id: "A", text: "Präventiv (Preventive)", rationale: "Eine präventive Kontrolle verhindert eine Handlung physisch oder technisch, etwa eine verschlossene Tür. Ein Schild hält niemanden vom Betreten ab." },
          { id: "B", text: "Abschreckend (Deterrent)", rationale: "Richtig. Die Schilder sollen einen Angreifer davon abhalten, es überhaupt zu versuchen – genau das ist der Zweck einer abschreckenden Kontrolle." },
          { id: "C", text: "Kompensierend (Compensating)", rationale: "Eine kompensierende Kontrolle ersetzt eine Kontrolle, die nicht umgesetzt werden kann. Hier wird nichts ersetzt." },
          { id: "D", text: "Korrigierend (Corrective)", rationale: "Korrigierende Kontrollen beheben oder begrenzen Schäden nach einem Vorfall, etwa die Wiederherstellung aus einem Backup." },
        ],
        answer: "B",
        explanation:
          "Abschreckende Kontrollen setzen bei der Entscheidung des Angreifers an: Warnschilder, sichtbare Kameras und Login-Banner lassen einen Angriff weniger attraktiv erscheinen. Die Videoüberwachung selbst wäre detektiv, das Schild, das sie ankündigt, ist dagegen abschreckend.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d1-tokenisation",
        domain: "d1",
        objective: "1.4 Explain the importance of using appropriate cryptographic solutions.",
        difficulty: "intermediate",
        question:
          "Ein Onlinehändler will keine Kartennummern mehr in seiner Bestelldatenbank speichern. Jede Kartennummer soll durch einen Zufallswert ersetzt werden, der in keiner mathematischen Beziehung zum Original steht, während ein separates, gesichertes System den Wert bei einer Rückerstattung wieder zuordnen kann. Welche Technik erfüllt diese Anforderung?",
        options: [
          { id: "A", text: "Hashing", rationale: "Hashing ist eine Einwegfunktion. Die ursprüngliche Kartennummer lässt sich für eine Rückerstattung nicht wiederherstellen." },
          { id: "B", text: "Datenmaskierung (Data Masking)", rationale: "Maskierung verbirgt einen Teil des Werts (zum Beispiel werden nur die letzten vier Ziffern angezeigt); sie liefert keinen zugeordneten Ersatzwert, der über ein separates System zurückgeführt werden kann." },
          { id: "C", text: "Steganografie", rationale: "Steganografie versteckt Daten in anderen Daten, etwa in einem Bild. Sie entfernt keine Kartennummern aus der Datenbank." },
          { id: "D", text: "Tokenisierung", rationale: "Richtig. Tokenisierung ersetzt sensible Daten durch ein zufälliges Token und hält die Zuordnung in einem separaten, geschützten Token-Vault vor." },
        ],
        answer: "D",
        explanation:
          "Tokenisierung entfernt den sensiblen Wert vollständig aus den Systemen der Anwendung, weil sich das Token mathematisch nicht zurückrechnen lässt. Nur der Token-Vault kann es wieder zuordnen – dadurch sinkt die Zahl der Systeme, die Kartendaten enthalten.",
        reference: OBJECTIVES,
      },

      /* ── Domäne 2: Threats, Vulnerabilities, and Mitigations (22 %) ─────── */
      {
        id: "secplus701-d2-password-spraying",
        domain: "d2",
        objective: "2.4 Given a scenario, analyze indicators of malicious activity.",
        difficulty: "intermediate",
        question:
          "Die Authentifizierungsprotokolle zeigen, dass eine externe IP-Adresse innerhalb einer Stunde versucht, sich bei 400 verschiedenen Benutzerkonten anzumelden. Jedes Konto erhält nur einen oder zwei Versuche, alle mit dem Passwort „Autumn2026!“. Kein Konto wird gesperrt. Um welchen Angriff handelt es sich am wahrscheinlichsten?",
        options: [
          { id: "A", text: "Password Spraying", rationale: "Richtig. Ein oder wenige gängige Passwörter gegen viele Konten, langsam genug, um keine Sperre auszulösen – das ist das typische Muster von Password Spraying." },
          { id: "B", text: "Brute-Force-Angriff auf ein einzelnes Konto", rationale: "Ein Brute-Force-Angriff probiert viele Passwörter gegen ein Konto aus und würde in der Regel eine Kontosperre auslösen." },
          { id: "C", text: "Rechteausweitung (Privilege Escalation)", rationale: "Eine Rechteausweitung findet statt, nachdem bereits Zugriff erlangt wurde; hier handelt es sich um fehlgeschlagene Anmeldeversuche." },
          { id: "D", text: "Geburtstagsangriff (Birthday Attack)", rationale: "Ein Geburtstagsangriff zielt auf Hash-Kollisionen, nicht auf Online-Anmeldungen." },
        ],
        answer: "A",
        explanation:
          "Spraying kehrt das übliche Brute-Force-Muster um: viele Konten, wenige Passwörter. Achten Sie auf viele unterschiedliche Benutzernamen aus einer Quelle, ein wiederholtes Passwort und Versuche, die unter der Sperrschwelle bleiben.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d2-smishing",
        domain: "d2",
        objective: "2.2 Explain common threat vectors and attack surfaces.",
        difficulty: "foundation",
        question:
          "Mehrere Mitarbeitende erhalten auf ihren Mobiltelefonen eine Textnachricht, angeblich vom Paketdienst des Unternehmens, mit der Aufforderung, einem Link zu folgen und eine kleine Zollgebühr zu bezahlen. Welcher Bedrohungsvektor wird genutzt?",
        options: [
          { id: "A", text: "Vishing", rationale: "Vishing nutzt Sprachanrufe, keine Textnachrichten." },
          { id: "B", text: "Whaling", rationale: "Whaling zielt gezielt auf Führungskräfte; diese Nachricht ging an gewöhnliche Mitarbeitende." },
          { id: "C", text: "Smishing", rationale: "Richtig. Smishing ist Phishing per SMS oder anderen Textnachrichten." },
          { id: "D", text: "Typosquatting", rationale: "Typosquatting setzt darauf, dass Benutzer einen Domainnamen falsch eintippen; hier wird dem Benutzer ein Link direkt zugeschickt." },
        ],
        answer: "C",
        explanation:
          "Die Prüfungsziele nennen nachrichtenbasierte Vektoren wie SMS und Instant Messaging neben E-Mail und Sprache. Der Übertragungskanal gibt dem Angriff seinen Namen: Phishing per E-Mail, Smishing per Textnachricht, Vishing per Sprachanruf.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d2-legacy-segmentation",
        domain: "d2",
        objective: "2.5 Explain the purpose of mitigation techniques used to secure the enterprise.",
        difficulty: "intermediate",
        question:
          "In einer Fabrik läuft eine Legacy-Steuerung, deren Betriebssystem das Ende seines Lebenszyklus erreicht hat und nicht mehr gepatcht werden kann. Die Produktion ist noch zwei Jahre auf sie angewiesen. Welche Gegenmaßnahme verringert das Risiko in der Zwischenzeit am besten?",
        options: [
          { id: "A", text: "Den lokalen Speicher der Steuerung verschlüsseln", rationale: "Verschlüsselung schützt ruhende Daten, hilft aber nicht gegen die Ausnutzung des ungepatchten Betriebssystems über das Netzwerk." },
          { id: "B", text: "Sie in einem eigenen Netzwerksegment mit strikten Access Control Lists isolieren", rationale: "Richtig. Segmentierung und ACLs begrenzen, welche Systeme die Steuerung erreichen können, und verkleinern so die Angriffsfläche, wenn Patchen unmöglich ist." },
          { id: "C", text: "Automatische Updates aktivieren", rationale: "Das System hat das Ende seines Lebenszyklus erreicht; es werden keine weiteren Updates mehr ausgeliefert." },
          { id: "D", text: "Sie sofort außer Betrieb nehmen", rationale: "Die Außerbetriebnahme beseitigt das Risiko, ignoriert aber die genannte geschäftliche Anforderung, das System weiter zu betreiben." },
        ],
        answer: "B",
        explanation:
          "Wenn ein verwundbares System weder gepatcht noch stillgelegt werden kann, begrenzen Sie, wer mit ihm kommunizieren kann. Segmentierung, Isolation und Access Control Lists sind der übliche kompensierende Ansatz für Legacy-Systeme und Operational Technology.",
        reference: OBJECTIVES,
      },

      /* ── Domäne 3: Security Architecture (18 %) ─────────────────────────── */
      {
        id: "secplus701-d3-warm-site",
        domain: "d3",
        objective: "3.4 Explain the importance of resilience and recovery in security architecture.",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen braucht einen Ausweichstandort, der innerhalb eines Tages nach einer Katastrophe betriebsbereit ist. Das Budget schließt einen vollständig gespiegelten Standort aus, ein leerer Standort bräuchte jedoch Wochen, bis er ausgestattet wäre. Welche Option passt am besten?",
        options: [
          { id: "A", text: "Hot Site", rationale: "Eine Hot Site ist mit aktuellen Daten nahezu sofort einsatzbereit, aber sie ist die teuerste Option – und die schließt das Budget aus." },
          { id: "B", text: "Cold Site", rationale: "Eine Cold Site bietet nur Räumlichkeiten und Strom; ihre Ausstattung würde weit länger als einen Tag dauern." },
          { id: "C", text: "Snapshot der Hauptserver", rationale: "Snapshots helfen bei der Wiederherstellung von Systemen, sind aber kein Ausweichstandort." },
          { id: "D", text: "Warm Site", rationale: "Richtig. Bei einer Warm Site sind Hardware und Netzanbindung vorhanden; Daten und Konfiguration müssen auf den aktuellen Stand gebracht werden, was typischerweise Stunden bis zu einem Tag dauert." },
        ],
        answer: "D",
        explanation:
          "Bei Ausweichstandorten stehen Kosten und Wiederherstellungszeit gegeneinander: Hot ist am schnellsten und teuersten, Cold am günstigsten und langsamsten, Warm liegt dazwischen. Wählen Sie den Standort passend zur geforderten Wiederherstellungszeit und zum Budget.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d3-ips-inline",
        domain: "d3",
        objective: "3.2 Given a scenario, apply security principles to secure enterprise infrastructure.",
        difficulty: "intermediate",
        question:
          "Ein Sicherheitsarchitekt soll ein Gerät einsetzen, das den Datenverkehr zwischen dem Internet und den Webservern untersucht und Pakete, die bekannten Exploit-Signaturen entsprechen, automatisch verwirft. Wie sollte das Gerät eingesetzt werden?",
        options: [
          { id: "A", text: "Als Intrusion Prevention System, inline platziert", rationale: "Richtig. Ein IPS muss im Datenpfad (inline) liegen, damit es bösartige Pakete blockieren kann, bevor sie die Server erreichen." },
          { id: "B", text: "Als Intrusion Detection System an einem SPAN-Port", rationale: "Ein passives IDS an einem gespiegelten Port sieht nur Kopien des Datenverkehrs und kann alarmieren, aber die Originalpakete nicht verwerfen." },
          { id: "C", text: "Als Jump-Server in der DMZ", rationale: "Ein Jump-Server ermöglicht kontrollierten administrativen Zugriff; er untersucht oder blockiert keinen Datenverkehr." },
          { id: "D", text: "Als Load Balancer vor den Webservern", rationale: "Ein Load Balancer verteilt den Datenverkehr für die Verfügbarkeit; signaturbasiertes Blockieren ist nicht seine Aufgabe." },
        ],
        answer: "A",
        explanation:
          "Die Prüfungsziele unterscheiden zwischen aktiv und passiv sowie zwischen Inline- und Tap/Monitor-Platzierung. Nur ein aktives Inline-Gerät kann Datenverkehr stoppen; passives Monitoring kann nur erkennen und alarmieren.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d3-data-sovereignty",
        domain: "d3",
        objective: "3.3 Compare and contrast concepts and strategies to protect data.",
        difficulty: "foundation",
        question:
          "Eine nationale Vorschrift besagt, dass personenbezogene Daten der Bürgerinnen und Bürger eines Landes dessen Gesetzen unterliegen und innerhalb seiner Grenzen gespeichert und verarbeitet werden müssen. Welches Konzept wird hier beschrieben?",
        options: [
          { id: "A", text: "Datenmaskierung (Data Masking)", rationale: "Maskierung verbirgt Teile von Datenwerten; sie sagt nichts darüber aus, wo Daten aufbewahrt werden müssen." },
          { id: "B", text: "Datenklassifizierung (Data Classification)", rationale: "Klassifizierung kennzeichnet Daten nach ihrer Sensibilität, etwa vertraulich oder öffentlich, nicht nach Rechtsordnung." },
          { id: "C", text: "Datensouveränität (Data Sovereignty)", rationale: "Richtig. Datensouveränität bedeutet, dass Daten den Gesetzen des Landes unterliegen, in dem sie erhoben oder gespeichert werden – daraus ergeben sich Standortanforderungen wie diese." },
          { id: "D", text: "Daten in Übertragung (Data in Transit)", rationale: "Daten in Übertragung sind ein Datenzustand (Bewegung über ein Netzwerk), kein rechtliches Konzept." },
        ],
        answer: "C",
        explanation:
          "Datensouveränität beeinflusst das Design von Cloud- und Backup-Lösungen, denn Replikate in einer anderen Region könnten gegen die Vorschrift verstoßen. Geografische Beschränkungen und geolokationsbasierte Kontrollen sind die üblichen technischen Antworten.",
        reference: OBJECTIVES,
      },

      /* ── Domäne 4: Security Operations (28 %) ───────────────────────────── */
      {
        id: "secplus701-d4-saml",
        domain: "d4",
        objective: "4.6 Given a scenario, implement and maintain identity and access management.",
        difficulty: "advanced",
        question:
          "Mitarbeitende sollen sich mit ihren Unternehmensanmeldedaten bei einer Webanwendung eines Drittanbieters anmelden. Der Identitätsanbieter des Unternehmens authentifiziert die Benutzer und sendet der Anwendung eine signierte XML-Assertion. Welcher Standard wird verwendet?",
        options: [
          { id: "A", text: "LDAP", rationale: "LDAP ist ein Protokoll für den Verzeichniszugriff innerhalb der Organisation; es stellt externen Webanwendungen keine signierten Assertions aus." },
          { id: "B", text: "SAML", rationale: "Richtig. Die Security Assertion Markup Language tauscht signierte XML-Assertions zwischen einem Identitätsanbieter und einem Dienstanbieter aus und ermöglicht so föderiertes Single Sign-on." },
          { id: "C", text: "OAuth", rationale: "OAuth ist ein Autorisierungs-Framework für delegierten Zugriff mittels Tokens; es ist nicht um XML-Authentifizierungs-Assertions herum definiert." },
          { id: "D", text: "RADIUS", rationale: "RADIUS stellt AAA für den Netzwerkzugang bereit, etwa für VPN oder WLAN, nicht für die Föderation von Webanwendungen." },
        ],
        answer: "B",
        explanation:
          "SAML ist der klassische Föderationsstandard für browserbasiertes SSO: Der Identitätsanbieter authentifiziert den Benutzer, und der Dienstanbieter vertraut dessen signierter Assertion. Die XML-Assertion ist der entscheidende Hinweis, der SAML von OAuth unterscheidet.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d4-ir-eradication",
        domain: "d4",
        objective: "4.8 Explain appropriate incident response activities.",
        difficulty: "foundation",
        question:
          "Während eines Vorfalls hat das Incident-Response-Team alle mit Malware infizierten Arbeitsplatzrechner vom Netzwerk isoliert. Welche Phase folgt laut Incident-Response-Prozess als Nächstes?",
        options: [
          { id: "A", text: "Vorbereitung (Preparation)", rationale: "Die Vorbereitung findet statt, bevor ein Vorfall eintritt." },
          { id: "B", text: "Lessons Learned", rationale: "Lessons Learned kommt am Ende, nach der Wiederherstellung." },
          { id: "C", text: "Beseitigung (Eradication)", rationale: "Richtig. Die Isolation ist die Eindämmung; als Nächstes folgt die Beseitigung – das Entfernen der Malware und ihrer Persistenzmechanismen von den betroffenen Systemen." },
          { id: "D", text: "Erkennung (Detection)", rationale: "Die Erkennung ist bereits erfolgt; das Team reagiert auf einen bekannten Vorfall." },
        ],
        answer: "C",
        explanation:
          "Der Prozess in den Prüfungszielen verläuft in dieser Reihenfolge: Vorbereitung, Erkennung, Analyse, Eindämmung, Beseitigung, Wiederherstellung und Lessons Learned. Wer Systeme vor der Beseitigung wiederherstellt, riskiert eine erneute Infektion.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d4-dmarc",
        domain: "d4",
        objective: "4.5 Given a scenario, modify enterprise capabilities to enhance security.",
        difficulty: "intermediate",
        question:
          "Angreifer versenden Phishing-E-Mails, die die Domain des Unternehmens fälschen. Das Unternehmen veröffentlicht bereits SPF-Einträge und signiert ausgehende E-Mails mit DKIM. Nun sollen empfangende Mailserver Nachrichten, die diese Prüfungen nicht bestehen, ablehnen und dem Unternehmen Berichte senden. Was sollte es veröffentlichen?",
        options: [
          { id: "A", text: "Eine DMARC-Richtlinie", rationale: "Richtig. DMARC legt fest, wie Empfänger mit E-Mails umgehen sollen, die das SPF- und DKIM-Alignment nicht bestehen (none, quarantine oder reject), und wohin aggregierte Berichte gesendet werden." },
          { id: "B", text: "Einen weiteren DKIM-Schlüssel", rationale: "DKIM signiert Nachrichten, legt aber nicht fest, was Empfänger bei einer fehlgeschlagenen Prüfung tun sollen oder wohin sie berichten." },
          { id: "C", text: "Einen strengeren SPF-Eintrag", rationale: "SPF listet die autorisierten sendenden Server auf; für sich allein definiert es weder einen Berichtsmechanismus noch eine Richtlinie, die beide Prüfungen abdeckt." },
          { id: "D", text: "DNS-Filterung", rationale: "DNS-Filterung hindert Benutzer daran, bösartige Domains aufzulösen; sie beeinflusst nicht, wie andere Organisationen gefälschte E-Mails behandeln." },
        ],
        answer: "A",
        explanation:
          "SPF, DKIM und DMARC arbeiten zusammen: SPF autorisiert Absender, DKIM belegt Integrität und Herkunft, und DMARC legt Richtlinie und Berichterstattung fest. Um gefälschte E-Mails abzulehnen, ist eine DMARC-Richtlinie mit reject erforderlich.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d4-false-positive",
        domain: "d4",
        objective: "4.3 Explain various activities associated with vulnerability management.",
        difficulty: "foundation",
        question:
          "Ein Schwachstellenscan meldet bei einem Webserver eine Lücke in einer Softwareversion, die laut manueller Prüfung auf diesem Server gar nicht installiert ist. Wie sollte der Analyst den Befund einordnen?",
        options: [
          { id: "A", text: "True Positive", rationale: "Ein True Positive ist eine echte Schwachstelle, die korrekt gemeldet wurde. Hier ist die Schwachstelle nicht vorhanden." },
          { id: "B", text: "False Negative", rationale: "Ein False Negative ist eine echte Schwachstelle, die der Scanner übersehen hat – also die umgekehrte Situation." },
          { id: "C", text: "Ausnahme (Exception)", rationale: "Eine Ausnahme ist eine dokumentierte Entscheidung, eine echte Schwachstelle zu akzeptieren, keine Einordnung für einen falschen Befund." },
          { id: "D", text: "False Positive", rationale: "Richtig. Der Scanner hat eine Schwachstelle gemeldet, die auf dem System nicht existiert." },
        ],
        answer: "D",
        explanation:
          "Die Validierung von Scanergebnissen gehört zur Schwachstellenanalyse. Bestätigte False Positives sollten dokumentiert werden, damit sie keinen Aufwand bei der Behebung verursachen; False Negatives sind der gefährlichere Fehler, weil sie unbemerkt bleiben.",
        reference: OBJECTIVES,
      },

      /* ── Domäne 5: Security Program Management and Oversight (20 %) ─────── */
      {
        id: "secplus701-d5-ale",
        domain: "d5",
        objective: "5.2 Explain elements of the risk management process.",
        difficulty: "advanced",
        question:
          "Ein Server im Wert von 200.000 würde bei einem Hochwasser 25 % seines Werts verlieren. Ein Hochwasser wird einmal alle fünf Jahre erwartet. Wie hoch ist die jährliche Verlusterwartung (Annualized Loss Expectancy, ALE)?",
        options: [
          { id: "A", text: "50.000", rationale: "Das ist die einmalige Verlusterwartung (Single Loss Expectancy, SLE: 200.000 × 0,25); sie wurde nicht mit der jährlichen Eintrittsrate multipliziert." },
          { id: "B", text: "40.000", rationale: "Hier wird der volle Anlagewert mit der jährlichen Rate multipliziert (200.000 × 0,2) und der Gefährdungsfaktor ignoriert." },
          { id: "C", text: "10.000", rationale: "Richtig. SLE = 200.000 × 0,25 = 50.000. ARO = 1/5 = 0,2. ALE = 50.000 × 0,2 = 10.000." },
          { id: "D", text: "2.500", rationale: "Hier wird der Gefährdungsfaktor doppelt angewendet oder die Formel anderweitig falsch verwendet." },
        ],
        answer: "C",
        explanation:
          "Die quantitative Risikoanalyse verwendet SLE = Anlagewert × Gefährdungsfaktor (Exposure Factor) und ALE = SLE × ARO (Annualized Rate of Occurrence, jährliche Eintrittsrate). Ein Ereignis, das einmal alle fünf Jahre eintritt, hat eine ARO von 0,2.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d5-right-to-audit",
        domain: "d5",
        objective: "5.3 Explain the processes associated with third-party risk assessment and management.",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen schließt einen Vertrag mit einem Cloud-Anbieter für die Lohnabrechnung. Es möchte das vertragliche Recht, die Sicherheitskontrollen des Anbieters selbst oder durch einen unabhängigen Prüfer zu bewerten. Welcher Vertragsbestandteil sichert dies?",
        options: [
          { id: "A", text: "Auditrecht-Klausel (Right-to-Audit Clause)", rationale: "Richtig. Eine Right-to-Audit-Klausel gibt dem Kunden das vertragliche Recht, die Kontrollen und Unterlagen des Anbieters zu prüfen." },
          { id: "B", text: "Geheimhaltungsvereinbarung (NDA)", rationale: "Ein NDA schützt vertrauliche Informationen, die zwischen den Parteien ausgetauscht werden; es gewährt keine Auditrechte." },
          { id: "C", text: "Service-Level-Agreement (SLA)", rationale: "Ein SLA definiert messbare Serviceniveaus wie Verfügbarkeit und Reaktionszeiten, keinen Zugang für Audits." },
          { id: "D", text: "Memorandum of Understanding (MOU)", rationale: "Ein MOU hält eine allgemeine, meist unverbindliche Absicht zur Zusammenarbeit fest; es ist zu schwach, um Auditrechte zu sichern." },
        ],
        answer: "A",
        explanation:
          "Das Management von Drittparteienrisiken verbindet eine Bewertung vor Vertragsabschluss mit laufender Überwachung. Eine Right-to-Audit-Klausel ermöglicht eine unabhängige Überprüfung, statt sich nur auf die eigenen Angaben des Anbieters zu verlassen.",
        reference: OBJECTIVES,
      },
      {
        id: "secplus701-d5-unknown-environment",
        domain: "d5",
        objective: "5.5 Explain types and purposes of audits and assessments.",
        difficulty: "foundation",
        question:
          "Ein Unternehmen beauftragt eine Firma mit einem Penetrationstest und gibt den Testern bewusst keine Netzwerkpläne, Zugangsdaten oder Systemdetails, damit der Test einen externen Angreifer simuliert. Um welche Art von Test handelt es sich?",
        options: [
          { id: "A", text: "Bekannte Umgebung (Known Environment)", rationale: "Bei einem Test in bekannter Umgebung erhalten die Tester vollständige Informationen über das Ziel." },
          { id: "B", text: "Unbekannte Umgebung (Unknown Environment)", rationale: "Richtig. Die Tester beginnen ohne Informationen über das Ziel – genau wie ein externer Angreifer." },
          { id: "C", text: "Teilweise bekannte Umgebung (Partially Known Environment)", rationale: "Bei einem Test in teilweise bekannter Umgebung erhalten die Tester einige Informationen, etwa einen Netzwerkbereich oder ein Benutzerkonto." },
          { id: "D", text: "Passive Aufklärung (Passive Reconnaissance)", rationale: "Passive Aufklärung ist eine Technik zur Informationsbeschaffung, keine Art von Penetrationstest, die sich danach richtet, wie viel den Testern mitgeteilt wird." },
        ],
        answer: "B",
        explanation:
          "Penetrationstests werden danach eingeteilt, was die Tester vorab wissen: bekannte, teilweise bekannte oder unbekannte Umgebung. Tests in unbekannter Umgebung sind für einen externen Angreifer am realistischsten, decken in der verfügbaren Zeit aber möglicherweise weniger von der Infrastruktur ab.",
        reference: OBJECTIVES,
      },
    ],
  },
};
