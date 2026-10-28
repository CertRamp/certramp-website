import type { DeContent } from "@/config/types";

/**
 * German edition of the AI-901 exam guide and free practice questions.
 * Faithful translation of src/content/guides/ai-901.ts and
 * src/content/practice-questions/ai-901.ts. Exam facts match the verified
 * `exam` record in src/config/certifications.ts. Domain and objective names
 * follow the official German (de-de) AI-901 study guide on Microsoft Learn.
 */
const GUIDE = {
  label: "Microsoft Learn — AI-901-Studienleitfaden",
  url: "https://learn.microsoft.com/de-de/credentials/certifications/resources/study-guides/ai-901",
};

export const ai901De: DeContent = {
  slug: "ai-901",
  languageNote: "Die Prüfung wird auch auf Deutsch angeboten.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "AI-901" },
    { label: "Bestehensgrenze", value: "700 oder mehr (Skala 1–1000)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Arabisch (Saudi-Arabien), Chinesisch (vereinfacht), Chinesisch (traditionell), Französisch, Deutsch, Indonesisch (Indonesien), Italienisch, Japanisch, Koreanisch, Portugiesisch (Brasilien), Russisch, Spanisch",
    },
    {
      label: "Voraussetzungen",
      value:
        "Keine. Microsoft erwartet konzeptionelles Wissen über KI-Lösungen in Azure, Kenntnisse der Python-Syntax und Vertrautheit mit Azure-Ressourcen. Fundamentals-Zertifizierungen laufen nicht ab.",
    },
    { label: "Prüfungsversion", value: "Gemessene Fähigkeiten ab dem 15. April 2026" },
  ],
  domains: [
    {
      id: "d1",
      name: "Identifizieren von KI-Konzepten und Funktionen",
      weight: "40–45%",
      objectives: [
        "Beschreiben von Prinzipien verantwortungsvoller KI",
        "Identifizieren von KI-Modellkomponenten und -konfigurationen",
        "Identifizieren von KI-Workloads",
      ],
    },
    {
      id: "d2",
      name: "Implementieren von KI-Lösungen mithilfe von Microsoft Foundry",
      weight: "55–60%",
      objectives: [
        "Implementieren von generativen KI-Apps und -Agents mithilfe von Foundry",
        "Implementieren von KI-Lösungen für Text und Sprache mithilfe von Foundry",
        "Implementieren von KI-Lösungen mit Computervisions- und Bildgenerierungsfunktionen mithilfe von Foundry",
        "Implementieren von KI-Lösungen für die Informationsextraktion mithilfe von Foundry",
      ],
    },
  ],

  /* ── Leitfaden ──────────────────────────────────────────────────────────── */
  guide: {
    slug: "ai-901",
    summary:
      "AI-901 (Microsoft Azure AI Fundamentals) ist die Prüfung für die Zertifizierung Microsoft Certified: Azure AI Fundamentals und hat AI-900 abgelöst, die am 30. Juni 2026 eingestellt wurde. Geprüft werden KI-Konzepte und verantwortungsvolle KI (40–45 %) sowie der Aufbau einfacher KI-Lösungen mit Microsoft Foundry (55–60 %), auf Grundlage der gemessenen Fähigkeiten ab dem 15. April 2026. Zum Bestehen brauchen Sie 700 Punkte, und Fundamentals-Zertifizierungen laufen nicht ab.",
    whoFor: [
      "Einsteigerinnen und Einsteiger in die Entwicklung von KI-Lösungen, die eine erste Azure-KI-Zertifizierung anstreben",
      "Entwicklerinnen und Entwickler mit etwas Python-Erfahrung, die Microsoft Foundry, generative KI und Agents kennenlernen möchten",
      "Kandidatinnen und Kandidaten, die AI-900 ablegen wollten und jetzt die Nachfolgeprüfung brauchen",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was AI-901 tatsächlich prüft",
        paragraphs: [
          "AI-901 hat zwei Fähigkeitsbereiche. „Identifizieren von KI-Konzepten und Funktionen“ (Identify AI concepts and capabilities, 40–45 %) umfasst die sechs Prinzipien verantwortungsvoller KI, die Funktionsweise generativer KI-Modelle, die Auswahl eines Modells samt Bereitstellungsoptionen und Parametern sowie das Erkennen gängiger Workloads: generative und agentische KI, Textanalyse, Sprache, Computer Vision und Informationsextraktion.",
          "„Implementieren von KI-Lösungen mithilfe von Microsoft Foundry“ (Implement AI solutions by using Microsoft Foundry, 55–60 %) ist der größere Bereich. Erwartet wird, dass Sie System- und Benutzerprompts schreiben, ein Modell bereitstellen und im Foundry-Portal nutzen, schlanke Client-Apps mit dem Foundry SDK erstellen, einen einzelnen Agent erstellen und testen sowie Azure Speech, multimodale Modelle, Bildgenerierung und Azure Content Understanding in Foundry Tools einsetzen.",
        ],
      },
      {
        id: "ai-900-vs-ai-901",
        heading: "AI-901 im Vergleich zur eingestellten AI-900",
        paragraphs: [
          "AI-900 wurde am 30. Juni 2026 eingestellt. Für die Zertifizierung Microsoft Certified: Azure AI Fundamentals legen Kandidatinnen und Kandidaten jetzt AI-901 ab. Der Name der Zertifizierung bleibt gleich, die Prüfung ist aber praxisnäher: Mehr als die Hälfte der Fähigkeiten betrifft die Implementierung von Lösungen in Microsoft Foundry statt der bloßen Beschreibung von Diensten.",
          "Laut der Zertifizierungsseite von Microsoft sollten Kandidatinnen und Kandidaten konzeptionelles Wissen über KI-Lösungen in Azure, Kenntnisse der Python-Syntax und von Programmiertechniken sowie Vertrautheit mit Azure-Ressourcen, REST-APIs, SDKs und CLIs mitbringen. Wenn Ihre Unterlagen auf älteren AI-900-Themen wie klassischem Machine Learning in Azure aufbauen, gleichen Sie sie mit dem aktuellen AI-901-Studienleitfaden ab.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in fünf Schritten",
        steps: [
          {
            title: "Eigenen Stand am Studienleitfaden messen",
            body: "Gehen Sie jeden Punkt der offiziellen Liste der gemessenen Fähigkeiten für AI-901 durch und markieren Sie ihn als bekannt, unsicher oder neu. Der Implementierungsbereich mit Foundry macht 55–60 % aus, planen Sie also den Großteil Ihrer Zeit dafür ein.",
          },
          {
            title: "Die Konzepte genau lernen",
            body: "Sie sollten die sechs Prinzipien verantwortungsvoller KI in einem Szenario auseinanderhalten, grob erklären können, wie ein generatives Modell seine Ausgabe erzeugt, und für einen geschäftlichen Bedarf den passenden Workload benennen können – Textanalyse, Sprache, Computer Vision, Bildgenerierung oder Informationsextraktion.",
          },
          {
            title: "In Microsoft Foundry praktisch arbeiten",
            body: "Stellen Sie ein Chatmodell bereit, testen Sie Systemprompts im Playground, erstellen Sie einen einzelnen Agent und rufen Sie eine Bereitstellung aus einem kurzen Python-Skript mit dem Foundry SDK auf. Probieren Sie einen multimodalen Prompt mit einem Bild und eine Extraktionsaufgabe mit Content Understanding aus.",
          },
          {
            title: "Die Microsoft-Learn-Lernpfade durcharbeiten",
            body: "Nutzen Sie die kostenlosen AI-901-Lernpfade auf Microsoft Learn und gleichen Sie jedes Modul mit den aktuellen gemessenen Fähigkeiten ab.",
          },
          {
            title: "Unter Zeitdruck üben",
            body: "Absolvieren Sie Übungsprüfungen auf Zeit und lesen Sie jede Erklärung, auch bei Fragen, die Sie richtig beantwortet haben. Buchen Sie die Prüfung, sobald Sie mehrere Übungsprüfungen mit Abstand bestehen.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Nur mit AI-900-Material lernen. Die Nachfolgeprüfung legt mehr Gewicht auf das Entwickeln mit Microsoft Foundry, auf Agents und auf generative Modelle.",
          "Die Prinzipien verantwortungsvoller KI verwechseln. Transparenz, Verantwortlichkeit und Fairness werden leicht verwechselt – lernen Sie, wie jedes Prinzip in einer konkreten Situation aussieht.",
          "Systemprompt und Benutzerprompt verwechseln. Verhalten, Tonfall und Grenzen für das gesamte Gespräch gehören in den Systemprompt.",
          "Modell und Agent gleichsetzen. Ein Agent kombiniert ein Modell mit Anweisungen und Tools, damit er Aktionen ausführen kann.",
          "Die praktischen Teile überspringen. Ein Modell bereitzustellen, es im Portal zu testen und aus Code aufzurufen, macht die Szenariofragen deutlich leichter.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie hoch ist die Bestehensgrenze für AI-901, und wie lange dauert die Prüfung?",
        answer:
          "Microsoft verlangt zum Bestehen 700 oder mehr. Die AI-901-Prüfungsseite nennt keine Dauer; die Microsoft-Seite zur Prüfungsdauer gibt für Fundamentals-Prüfungen 45 Minuten Prüfungszeit (65 Minuten Gesamtzeit am Platz) an. Prüfen Sie bei der Anmeldung, welche Prüfungszeit Ihnen angezeigt wird.",
      },
      {
        question: "Kann ich AI-900 noch ablegen?",
        answer:
          "Nein. AI-900 wurde am 30. Juni 2026 eingestellt. Für Microsoft Certified: Azure AI Fundamentals legen Sie jetzt AI-901 ab.",
      },
      {
        question: "Läuft die Zertifizierung Azure AI Fundamentals ab?",
        answer:
          "Nein. Laut Microsoft laufen Fundamentals-Zertifizierungen nicht ab, daher gibt es keine Verlängerungsbewertung.",
      },
      {
        question: "Muss ich für AI-901 programmieren können?",
        answer:
          "Etwas Programmierwissen hilft. Microsoft erwartet Kenntnisse der Python-Syntax und von Programmiertechniken sowie Vertrautheit mit REST-APIs, SDKs und CLIs, und mehrere Fähigkeiten betreffen das Erstellen schlanker Client-Anwendungen.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. AI-901 wird unter anderem auf Deutsch angeboten, außerdem auf Englisch und in weiteren Sprachen wie Französisch, Italienisch und Spanisch.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den von Microsoft veröffentlichten gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "AI-901 Prüfungsvorbereitung 2026: Azure AI Fundamentals",
      description:
        "AI-901-Leitfaden auf Deutsch: gemessene Fähigkeiten ab 15. April 2026, verantwortungsvolle KI, Microsoft Foundry, Bestehensgrenze 700, 5-Schritte-Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ───────────────────────────────────────────────────────── */
  questions: {
    slug: "ai-901",
    intro:
      "15 eigene AI-901-Übungsfragen zu den zwei Fähigkeitsbereichen des Microsoft-Studienleitfadens (gemessene Fähigkeiten ab dem 15. April 2026), ungefähr wie in der echten Prüfung gewichtet. Zu jeder Frage gibt es die Antwort, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "AI-901 Übungsfragen mit Antworten und Erklärungen (2026)",
      description:
        "15 kostenlose, eigene AI-901 Übungsfragen zu verantwortungsvoller KI, generativer KI, Agents, Sprache, Vision und Microsoft Foundry – mit Erklärung.",
    },
    questions: [
      /* ── Bereich 1: Identifizieren von KI-Konzepten und Funktionen ────────── */
      {
        id: "ai901-d1-transparency",
        domain: "d1",
        objective: "Beschreiben von Prinzipien verantwortungsvoller KI",
        difficulty: "foundation",
        question:
          "Der Kreditassistent einer Bank teilt Antragstellenden mit, dass ein KI-System an ihrer Entscheidung beteiligt war, und erklärt in verständlicher Sprache, welche Faktoren das System berücksichtigt hat. Welches Prinzip verantwortungsvoller KI wird damit hauptsächlich umgesetzt?",
        options: [
          { id: "A", text: "Inklusion", rationale: "Bei Inklusion geht es darum, KI so zu gestalten, dass sie Menschen mit unterschiedlichsten Fähigkeiten und Hintergründen unterstützt und für sie funktioniert." },
          { id: "B", text: "Zuverlässigkeit und Sicherheit", rationale: "Zuverlässigkeit und Sicherheit betreffen konsistentes, sicheres Verhalten unter erwarteten und unerwarteten Bedingungen, nicht das Erklären von Entscheidungen." },
          { id: "C", text: "Transparenz", rationale: "Richtig. Transparenz bedeutet, dass Menschen verstehen, dass KI eingesetzt wird, wie sie zu ihren Ergebnissen kommt und wo ihre Grenzen liegen." },
          { id: "D", text: "Datenschutz und Sicherheit", rationale: "Datenschutz und Sicherheit betreffen den Schutz personenbezogener Daten und des Systems, nicht die Erklärung, wie Entscheidungen zustande kommen." },
        ],
        answer: "C",
        explanation:
          "Offenzulegen, dass KI eingesetzt wird, und die Faktoren hinter ihrem Ergebnis zu erklären, ist der Kern der Transparenz. Verantwortlichkeit ist verwandt, meint aber, dass Menschen für den Betrieb des Systems verantwortlich bleiben.",
        reference: GUIDE,
      },
      {
        id: "ai901-d1-fairness",
        domain: "d1",
        objective: "Beschreiben von Prinzipien verantwortungsvoller KI",
        difficulty: "foundation",
        question:
          "Beim Testen lehnt ein Modell zur Bewerberauswahl gleich qualifizierte Bewerberinnen und Bewerber aus einer Altersgruppe häufiger ab als andere. Welches Prinzip verantwortungsvoller KI ist gefährdet?",
        options: [
          { id: "A", text: "Fairness", rationale: "Richtig. Fairness verlangt, dass ein KI-System alle Menschen gleichberechtigt behandelt und Gruppen mit ähnlicher Qualifikation nicht benachteiligt." },
          { id: "B", text: "Transparenz", rationale: "Bei Transparenz geht es um die Erklärung des Systems; das Problem hier ist ungleiche Behandlung, nicht fehlende Erklärungen." },
          { id: "C", text: "Verantwortlichkeit", rationale: "Verantwortlichkeit regelt, wer für das System einsteht. Sie ist für die Behebung des Problems wichtig, ist aber nicht das verletzte Prinzip." },
          { id: "D", text: "Datenschutz und Sicherheit", rationale: "Im Szenario werden keine personenbezogenen Daten offengelegt oder missbraucht." },
        ],
        answer: "A",
        explanation:
          "Unterschiedliche Ergebnisse für vergleichbare Personen aufgrund eines Merkmals wie des Alters sind ein Fairnessproblem. Ergebnisse über verschiedene Gruppen hinweg zu testen, ist ein typischer Weg, es zu erkennen.",
        reference: GUIDE,
      },
      {
        id: "ai901-d1-accountability",
        domain: "d1",
        objective: "Beschreiben von Prinzipien verantwortungsvoller KI",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen richtet ein Prüfgremium ein, das jedes KI-System vor der Freigabe abnimmt und für das Verhalten jedes Systems im Produktivbetrieb verantwortlich bleibt. Welches Prinzip verantwortungsvoller KI wird dadurch am direktesten unterstützt?",
        options: [
          { id: "A", text: "Inklusion", rationale: "Bei Inklusion geht es darum, Menschen aller Fähigkeiten und Hintergründe gerecht zu werden, nicht um Governance und Zuständigkeit." },
          { id: "B", text: "Verantwortlichkeit", rationale: "Richtig. Verantwortlichkeit bedeutet, dass Menschen – nicht das KI-System – für Entwurf, Bereitstellung und Betrieb verantwortlich bleiben." },
          { id: "C", text: "Zuverlässigkeit und Sicherheit", rationale: "Ein Prüfgremium kann die Zuverlässigkeit prüfen, das entscheidende Merkmal ist hier aber die menschliche Verantwortung für das System." },
          { id: "D", text: "Fairness", rationale: "Bei Fairness geht es um die gleichberechtigte Behandlung der vom System betroffenen Menschen." },
        ],
        answer: "B",
        explanation:
          "Governance-Strukturen, die Menschen für KI-Systeme verantwortlich halten, setzen Verantwortlichkeit in die Praxis um. Die anderen Prinzipien beschreiben Eigenschaften des Systems, nicht wer dafür verantwortlich ist.",
        reference: GUIDE,
      },
      {
        id: "ai901-d1-temperature",
        domain: "d1",
        objective: "Identifizieren von KI-Modellkomponenten und -konfigurationen",
        difficulty: "intermediate",
        question:
          "Ein in Microsoft Foundry bereitgestelltes Chatmodell liefert zu stark schwankende Antworten, wenn dieselbe Sachfrage mehrmals gestellt wird. Welche Parameteränderung macht die Antworten am wahrscheinlichsten konsistenter?",
        options: [
          { id: "A", text: "Die maximale Antwortlänge erhöhen", rationale: "Ein höheres Limit erlaubt längere Antworten; es verringert nicht die Schwankung zwischen den Antworten." },
          { id: "B", text: "Die Temperatur erhöhen", rationale: "Eine höhere Temperatur lässt das Modell zufälliger auswählen und erhöht die Schwankung." },
          { id: "C", text: "Weitere Stoppsequenzen hinzufügen", rationale: "Stoppsequenzen beenden die Generierung nur bei einem bestimmten Text; sie steuern nicht die Zufälligkeit." },
          { id: "D", text: "Die Temperatur senken", rationale: "Richtig. Eine niedrigere Temperatur lässt das Modell die wahrscheinlichsten Token bevorzugen, sodass die Ausgaben fokussierter und reproduzierbarer werden." },
        ],
        answer: "D",
        explanation:
          "Die Temperatur steuert, wie zufällig das Modell Token auswählt. Niedrige Werte eignen sich für sachliche, konsistente Antworten, höhere Werte für kreative Aufgaben.",
        reference: GUIDE,
      },
      {
        id: "ai901-d1-how-genai-works",
        domain: "d1",
        objective: "Identifizieren von KI-Modellkomponenten und -konfigurationen",
        difficulty: "foundation",
        question:
          "Welche Aussage beschreibt am besten, wie ein großes Sprachmodell eine Textantwort erzeugt?",
        options: [
          { id: "A", text: "Es sucht eine gespeicherte Antwort in einer Datenbank freigegebener Antworten heraus", rationale: "Sprachmodelle rufen keine festen Antworten ab; das würde einen regelbasierten FAQ-Bot beschreiben." },
          { id: "B", text: "Es führt für jeden Fragetyp eine von Hand geschriebene Regel aus", rationale: "Generative Modelle lernen Muster aus Trainingsdaten, statt von Hand geschriebenen Regeln zu folgen." },
          { id: "C", text: "Es sagt wiederholt das nächste Token voraus, auf Basis des Prompts und der bisher erzeugten Token", rationale: "Richtig. Das Modell zerlegt Text in Token und erzeugt eine Antwort Token für Token aus gelernten Wahrscheinlichkeiten." },
          { id: "D", text: "Es durchsucht vor jeder Antwort immer das Internet", rationale: "Ein Modell nutzt externe Quellen nur, wenn eine Anwendung oder ein Agent ihm dafür ein Tool oder Grounding-Daten bereitstellt." },
        ],
        answer: "C",
        explanation:
          "Sprachmodelle werden mit großen Textmengen trainiert und erzeugen Ausgaben, indem sie wahrscheinliche nächste Token vorhersagen. Deshalb können sie auch flüssige, aber falsche Inhalte erzeugen, und deshalb sind Grounding und Überprüfung wichtig.",
        reference: GUIDE,
      },
      {
        id: "ai901-d1-sentiment",
        domain: "d1",
        objective: "Identifizieren von KI-Workloads",
        difficulty: "foundation",
        question:
          "Eine Hotelkette möchte automatisch erkennen, ob jede Online-Bewertung positiv, negativ oder neutral ist. Welche Textanalysetechnik passt?",
        options: [
          { id: "A", text: "Stimmungsanalyse (Sentimentanalyse)", rationale: "Richtig. Die Stimmungsanalyse ordnet die in einem Text geäußerte Meinung als positiv, negativ, neutral oder gemischt ein." },
          { id: "B", text: "Stichwortextraktion", rationale: "Die Stichwortextraktion liefert die wichtigsten Begriffe eines Textes, nicht ob die Meinung positiv oder negativ ist." },
          { id: "C", text: "Entitätserkennung", rationale: "Die Entitätserkennung findet Dinge wie Personen, Orte und Datumsangaben im Text." },
          { id: "D", text: "Sprachsynthese", rationale: "Die Sprachsynthese wandelt Text in Audio um; sie analysiert keine Meinungen." },
        ],
        answer: "A",
        explanation:
          "Der Studienleitfaden nennt Stichwortextraktion, Entitätserkennung, Stimmungsanalyse und Zusammenfassung als gängige Textanalysetechniken. Wählen Sie die Technik passend zu der Ausgabe, die das Unternehmen braucht.",
        reference: GUIDE,
      },
      {
        id: "ai901-d1-speech-synthesis",
        domain: "d1",
        objective: "Identifizieren von KI-Workloads",
        difficulty: "foundation",
        question:
          "Ein Bahnunternehmen möchte schriftliche Verspätungsmeldungen automatisch mit natürlich klingender Stimme über die Bahnhofslautsprecher vorlesen lassen. Welche KI-Fähigkeit wird benötigt?",
        options: [
          { id: "A", text: "Spracherkennung", rationale: "Die Spracherkennung wandelt gesprochenes Audio in Text um – also die umgekehrte Richtung." },
          { id: "B", text: "Bildgenerierung", rationale: "Die Bildgenerierung erzeugt Bilder, kein Audio." },
          { id: "C", text: "Entitätserkennung", rationale: "Die Entitätserkennung analysiert Text; sie erzeugt keine Sprache." },
          { id: "D", text: "Sprachsynthese", rationale: "Richtig. Die Sprachsynthese (Text-to-Speech) erzeugt gesprochenes Audio aus Text." },
        ],
        answer: "D",
        explanation:
          "Spracherkennung ist Speech-to-Text, Sprachsynthese ist Text-to-Speech. Stellen Sie sicher, dass Sie die beiden Richtungen in einem Szenario auseinanderhalten können.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Implementieren von KI-Lösungen mithilfe von Microsoft Foundry ── */
      {
        id: "ai901-d2-system-prompt",
        domain: "d2",
        objective: "Implementieren von generativen KI-Apps und -Agents mithilfe von Foundry",
        difficulty: "foundation",
        question:
          "Sie entwickeln eine Support-Chat-App auf Basis eines in Microsoft Foundry bereitgestellten Modells. Der Assistent soll immer höflich antworten, nur über die Produkte Ihres Unternehmens sprechen und themenfremde Anfragen ablehnen. Wo sollten Sie diese Anweisungen hinterlegen?",
        options: [
          { id: "A", text: "Im Systemprompt", rationale: "Richtig. Der Systemprompt legt Rolle, Tonfall und Grenzen des Modells für das gesamte Gespräch fest." },
          { id: "B", text: "In jedem Benutzerprompt, vom Kunden eingegeben", rationale: "Man kann sich nicht darauf verlassen, dass Kunden Anweisungen hinzufügen, und sie könnten diese ändern oder entfernen." },
          { id: "C", text: "Im Bereitstellungsnamen des Modells", rationale: "Der Bereitstellungsname identifiziert nur die Bereitstellung; das Modell liest ihn nicht als Anweisung." },
          { id: "D", text: "In der Einstellung für die maximale Antwortlänge", rationale: "Dieser Parameter begrenzt die Länge der Ausgabe; er kann keine Verhaltensregeln abbilden." },
        ],
        answer: "A",
        explanation:
          "Systemprompts legen fest, wie sich das Modell verhalten soll; Benutzerprompts enthalten die einzelnen Anfragen. Klare, konkrete Systemanweisungen sind ein zentraler Bestandteil wirksamen Prompt-Designs.",
        reference: GUIDE,
      },
      {
        id: "ai901-d2-deploy-before-sdk",
        domain: "d2",
        objective: "Implementieren von generativen KI-Apps und -Agents mithilfe von Foundry",
        difficulty: "intermediate",
        question:
          "Ein schlanker Python-Chatclient soll ein Modell aus dem Foundry-Modellkatalog aufrufen. Was muss in Ihrem Foundry-Projekt vorhanden sein, bevor der Client Prompts an das Modell senden kann?",
        options: [
          { id: "A", text: "Eine feinabgestimmte (fine-tuned) Version des Modells", rationale: "Feinabstimmung ist optional; Basismodelle können direkt verwendet werden." },
          { id: "B", text: "Eine Bereitstellung (Deployment) des Modells", rationale: "Richtig. Der Client ruft eine Modellbereitstellung über deren Endpunkt auf; ein Katalogeintrag allein kann nicht aufgerufen werden." },
          { id: "C", text: "Ein Content-Understanding-Analysetool", rationale: "Content Understanding dient der Informationsextraktion und wird für einen Chatclient nicht benötigt." },
          { id: "D", text: "Eine Speech-Ressource", rationale: "Speech wird nur für Audiofunktionen benötigt, nicht für Textchat." },
        ],
        answer: "B",
        explanation:
          "In Foundry stellen Sie zuerst ein Modell bereit, testen es im Portal und rufen die Bereitstellung dann mit dem Foundry SDK aus Code auf. Der Code verweist auf die Bereitstellung, nicht nur auf das Modell im Katalog.",
        reference: GUIDE,
      },
      {
        id: "ai901-d2-agent-vs-chat",
        domain: "d2",
        objective: "Implementieren von generativen KI-Apps und -Agents mithilfe von Foundry",
        difficulty: "intermediate",
        question:
          "Ein Team möchte einen Assistenten, der nicht nur Fragen beantwortet, sondern bei Bedarf auch den Bestellstatus über eine Unternehmens-API abfragen kann. Was sollte das Team in Microsoft Foundry erstellen?",
        options: [
          { id: "A", text: "Eine Modellbereitstellung mit höherer Temperatur", rationale: "Die Temperatur verändert die Zufälligkeit; sie ermöglicht dem Modell keinen API-Aufruf." },
          { id: "B", text: "Eine Textanalyseanwendung", rationale: "Textanalyse extrahiert Informationen aus Text; sie führt keine Aktionen aus." },
          { id: "C", text: "Einen Agent, bei dem die API als Tool konfiguriert ist", rationale: "Richtig. Ein Agent kombiniert ein Modell mit Anweisungen und Tools und kann so entscheiden, die API aufzurufen, um eine Aufgabe zu erledigen." },
          { id: "D", text: "Eine Bereitstellung zur Bildgenerierung", rationale: "Bildgenerierung erzeugt Bilder und hat nichts mit dem Abfragen von Bestellungen zu tun." },
        ],
        answer: "C",
        explanation:
          "Der Unterschied zwischen einer Chat-App und einem Agent ist die Fähigkeit, Tools zu nutzen und zu handeln. Der Studienleitfaden erwartet, dass Sie im Foundry-Portal eine Lösung mit einem einzelnen Agent erstellen und testen.",
        reference: GUIDE,
      },
      {
        id: "ai901-d2-spoken-prompt",
        domain: "d2",
        objective: "Implementieren von KI-Lösungen für Text und Sprache mithilfe von Foundry",
        difficulty: "intermediate",
        question:
          "Ein Servicetechniker nimmt eine gesprochene Frage auf dem Smartphone auf, und die App soll sie in einem einzigen Schritt ohne separaten Transkriptionsdienst beantworten. Welcher Ansatz passt?",
        options: [
          { id: "A", text: "Das Audio an ein bereitgestelltes multimodales Modell senden, das Audioeingaben akzeptiert", rationale: "Richtig. Ein multimodales Modell mit Audiounterstützung kann den gesprochenen Prompt direkt verarbeiten und darauf antworten." },
          { id: "B", text: "Das Audio an ein Bildgenerierungsmodell senden", rationale: "Bildgenerierungsmodelle erzeugen Bilder aus Prompts; sie beantworten keine gesprochenen Fragen." },
          { id: "C", text: "Eine Stimmungsanalyse auf die Audiodatei anwenden", rationale: "Die Stimmungsanalyse arbeitet mit Text und liefert nur eine Meinungsbewertung, keine Antwort." },
          { id: "D", text: "Sprachsynthese auf die Aufnahme anwenden", rationale: "Sprachsynthese erzeugt Audio aus Text; sie versteht keine Audioeingaben." },
        ],
        answer: "A",
        explanation:
          "Der Studienleitfaden behandelt zwei Wege für Sprache: auf gesprochene Prompts mit einem multimodalen Modell antworten und Apps mit Azure Speech in Foundry Tools erstellen. Hier spricht die Anforderung nach einem einzigen Schritt für das multimodale Modell.",
        reference: GUIDE,
      },
      {
        id: "ai901-d2-azure-speech",
        domain: "d2",
        objective: "Implementieren von KI-Lösungen für Text und Sprache mithilfe von Foundry",
        difficulty: "foundation",
        question:
          "Ein Contact Center braucht Live-Transkripte von Kundengesprächen, damit die Mitarbeitenden mitlesen können. Welchen Foundry-Tools-Dienst sollte die Entwicklerin bzw. der Entwickler verwenden?",
        options: [
          { id: "A", text: "Azure Content Understanding, nur Bildanalyse", rationale: "Bildanalyse kann keine Gesprächsaufnahmen transkribieren." },
          { id: "B", text: "Ein Bildgenerierungsmodell", rationale: "Bildgenerierung verarbeitet kein Audio." },
          { id: "C", text: "Eine Textanalysefunktion zur Schlüsselbegriffserkennung", rationale: "Die Schlüsselbegriffserkennung braucht Text als Eingabe; sie kann Audio nicht in Text umwandeln." },
          { id: "D", text: "Azure Speech mit Speech-to-Text", rationale: "Richtig. Azure Speech bietet Spracherkennung, die gesprochenes Audio in Text umwandelt." },
        ],
        answer: "D",
        explanation:
          "Speech-to-Text ist die Spracherkennungsfunktion von Azure Speech. Textanalysefunktionen könnten anschließend auf das Transkript angewendet werden, ersetzen aber nicht die Transkription.",
        reference: GUIDE,
      },
      {
        id: "ai901-d2-vision-prompt",
        domain: "d2",
        objective: "Implementieren von KI-Lösungen mit Computervisions- und Bildgenerierungsfunktionen mithilfe von Foundry",
        difficulty: "intermediate",
        question:
          "In einer Versicherungs-App können Kundinnen und Kunden ein Foto eines Autoschadens hochladen und fragen: „Welche Teile sehen beschädigt aus?“ Welcher Ansatz nutzt das Foto direkt im Gespräch?",
        options: [
          { id: "A", text: "Die Bildunterschrift des Fotos per Sprachsynthese in Audio umwandeln", rationale: "Sprachsynthese erzeugt Audio und kann keine Bilder interpretieren." },
          { id: "B", text: "Das Bild in den Prompt an ein bereitgestelltes multimodales Modell aufnehmen", rationale: "Richtig. Multimodale Modelle können visuelle Eingaben in Prompts interpretieren und Fragen dazu beantworten." },
          { id: "C", text: "Mit einem Bildgenerierungsmodell ein neues Bild des Autos erstellen", rationale: "Bildgenerierung erzeugt neue Bilder; sie analysiert nicht das hochgeladene Bild." },
          { id: "D", text: "Eine Stimmungsanalyse auf den Dateinamen des Bildes anwenden", rationale: "Der Dateiname sagt nichts über den Schaden aus, und die Stimmungsanalyse beantwortet keine Fragen." },
        ],
        answer: "B",
        explanation:
          "Visuelle Eingaben in Prompts zu interpretieren ist eine ausdrücklich genannte AI-901-Fähigkeit. Trennen Sie das Verstehen von Bildern (multimodale Eingabe) vom Erzeugen von Bildern (generative Bildmodelle).",
        reference: GUIDE,
      },
      {
        id: "ai901-d2-image-generation",
        domain: "d2",
        objective: "Implementieren von KI-Lösungen mit Computervisions- und Bildgenerierungsfunktionen mithilfe von Foundry",
        difficulty: "foundation",
        question:
          "Ein Marketingteam möchte für eine Kampagne eigene Illustrationen aus Textbeschreibungen wie „ein Radfahrer bei Sonnenaufgang im flachen Pastellstil“ erstellen. Was sollte es verwenden?",
        options: [
          { id: "A", text: "Ein Spracherkennungsmodell", rationale: "Spracherkennung wandelt Audio in Text um und kann keine Bilder erzeugen." },
          { id: "B", text: "Content Understanding, um Felder aus Bildern zu extrahieren", rationale: "Content Understanding extrahiert Informationen aus vorhandenen Inhalten; es erzeugt keine neuen Bilder." },
          { id: "C", text: "Ein in Foundry bereitgestelltes Bildgenerierungsmodell", rationale: "Richtig. Bildgenerierungsmodelle erzeugen neue visuelle Ausgaben aus Textprompts." },
          { id: "D", text: "Entitätserkennung", rationale: "Die Entitätserkennung findet benannte Elemente in Text; sie erzeugt keine Bilder." },
        ],
        answer: "C",
        explanation:
          "Neue visuelle Ausgaben mit generativen Modellen zu erstellen, gehört zu den Vision-Fähigkeiten. Verantwortungsvolle KI gilt auch hier: Prüfen Sie generierte Bilder vor der Verwendung.",
        reference: GUIDE,
      },
      {
        id: "ai901-d2-content-understanding",
        domain: "d2",
        objective: "Implementieren von KI-Lösungen für die Informationsextraktion mithilfe von Foundry",
        difficulty: "intermediate",
        question:
          "Eine Buchhaltung erhält Tausende Lieferantenrechnungen als PDFs und Scans. Rechnungsnummer, Datum und Gesamtbetrag sollen als strukturierte Felder für das Finanzsystem extrahiert werden. Welchen Dienst sollte die Entwicklerin bzw. der Entwickler verwenden?",
        options: [
          { id: "A", text: "Azure Speech", rationale: "Azure Speech verarbeitet gesprochenes Audio, keine Dokumente." },
          { id: "B", text: "Ein Bildgenerierungsmodell", rationale: "Bildgenerierung erzeugt Bilder und kann keine Felder extrahieren." },
          { id: "C", text: "Stimmungsanalyse", rationale: "Die Stimmungsanalyse liefert für Text nur eine Meinungsbewertung." },
          { id: "D", text: "Azure Content Understanding in Foundry Tools", rationale: "Richtig. Content Understanding extrahiert Informationen aus Dokumenten und Formularen (sowie aus Bildern, Audio und Video) in strukturierte Ausgaben." },
        ],
        answer: "D",
        explanation:
          "Die Fähigkeiten zur Informationsextraktion drehen sich um Azure Content Understanding. Es funktioniert mit Dokumenten, Bildern, Audio und Video, und der Studienleitfaden erwartet, dass Sie eine schlanke Anwendung erstellen, die es nutzt.",
        reference: GUIDE,
      },
    ],
  },
};
