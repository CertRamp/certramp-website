import type { CourseData } from "./types";

/**
 * GIAC GAIPS. Blueprint counts from the live Udemy course on 13 Nov 2026 (54 questions per test,
 * eight objectives, GIAC publishes no weights). Exam page re-checked 13 Nov 2026.
 * Course changelog not recorded yet (no dated history for earlier revisions).
 */
export const giacGaips: CourseData = {
  slug: "giac-gaips",

  examWatch: {
    lastChecked: "2026-11-13",
    examVersion: {
      en: "Exam versions released on or after 25 July 2026 (65% passing score); eight objectives, no published weights",
      de: "Prüfungsversionen ab 25. Juli 2026 (Bestehensgrenze 65 %); acht Prüfungsziele ohne veröffentlichte Gewichtung",
    },
    source: { label: "GIAC: AI Platform Security (GAIPS)", url: "https://www.giac.org/certifications/ai-security-platform-security-gaips" },
    entries: [
      {
        date: "2026-07-25",
        summary: {
          en: "GIAC set the passing score at 65% for exam versions released on or after 25 July 2026, based on a psychometric standard-setting study.",
          de: "GIAC legt die Bestehensgrenze für Prüfungsversionen ab dem 25. Juli 2026 auf 65 % fest, auf Grundlage einer psychometrischen Standard-Setting-Studie.",
        },
        domains: [],
        examVersion: { en: "Versions released on or after 25 July 2026", de: "Versionen ab 25. Juli 2026" },
        source: { label: "GIAC: AI Platform Security (GAIPS)", url: "https://www.giac.org/certifications/ai-security-platform-security-gaips" },
      },
    ],
  },

  blueprint: {
    rows: [
      { domain: "d1", perTest: [7, 7, 7, 6, 7, 7] },
      { domain: "d2", perTest: [7, 7, 7, 6, 7, 7] },
      { domain: "d3", perTest: [7, 7, 6, 7, 7, 7] },
      { domain: "d4", perTest: [7, 7, 6, 7, 7, 7] },
      { domain: "d5", perTest: [7, 6, 7, 7, 7, 6] },
      { domain: "d6", perTest: [7, 6, 7, 7, 7, 6] },
      { domain: "d7", perTest: [6, 7, 7, 7, 6, 7] },
      { domain: "d8", perTest: [6, 7, 7, 7, 6, 7] },
    ],
    examVersion: { en: "GIAC objectives for exam versions from 25 July 2026", de: "GIAC-Prüfungsziele für Versionen ab 25. Juli 2026" },
    counted: "2026-11-13",
  },

  path: {
    before: [],
    after: [],
    similar: [
      {
        name: "ISACA Advanced in AI Security Management",
        code: "AAISM",
        slug: "isaca-aaism",
        relation: {
          en: "AI security from the management side: governance, risk and AI security programmes, for holders of CISM or CISSP. GAIPS is hands-on and technical.",
          de: "KI-Sicherheit aus Managementsicht: Governance, Risiko und KI-Sicherheitsprogramme, für Inhaber von CISM oder CISSP. GAIPS ist praktisch und technisch.",
        },
      },
      {
        name: "IAPP AI Governance Professional",
        code: "AIGP",
        slug: "iapp-aigp",
        relation: {
          en: "AI governance, law and responsible AI rather than securing AI platforms.",
          de: "KI-Governance, Recht und verantwortungsvolle KI statt Absicherung von KI-Plattformen.",
        },
      },
      {
        name: "GIAC Offensive AI Analyst",
        code: "GOAA",
        url: "https://www.giac.org/certifications/offensive-ai-analyst-goaa",
        relation: {
          en: "Another GIAC certification in the AI focus area. GIAC sets no order between its AI certifications.",
          de: "Weitere GIAC-Zertifizierung im Bereich KI. GIAC legt keine Reihenfolge zwischen seinen KI-Zertifizierungen fest.",
        },
      },
      {
        name: "GIAC Machine Learning Engineer",
        code: "GMLE",
        url: "https://www.giac.org/certifications/machine-learning-engineer-gmle",
        relation: {
          en: "Another GIAC certification in the AI focus area. GIAC sets no order between its AI certifications.",
          de: "Weitere GIAC-Zertifizierung im Bereich KI. GIAC legt keine Reihenfolge zwischen seinen KI-Zertifizierungen fest.",
        },
      },
    ],
    compare: ["giac-gaips-vs-isaca-aaism"],
    note: {
      en: "GIAC lists no prerequisite certification for GAIPS. The associated SANS training is SEC545: GenAI and LLM Application Security.",
      de: "GIAC nennt für GAIPS keine vorausgesetzte Zertifizierung. Die zugehörige SANS-Schulung ist SEC545: GenAI and LLM Application Security.",
    },
    source: { label: "GIAC: AI Platform Security (GAIPS)", url: "https://www.giac.org/certifications/ai-security-platform-security-gaips" },
    checked: "2026-11-13",
  },

  readiness: {},

  glossary: {
    reviewed: "2026-11-13",
    sources: [
      { label: "GIAC: AI Platform Security (GAIPS)", url: "https://www.giac.org/certifications/ai-security-platform-security-gaips" },
      { label: "OWASP Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/" },
      { label: "NIST AI 100-2 E2025: Adversarial Machine Learning", url: "https://csrc.nist.gov/pubs/ai/100/2/e2025/final" },
      { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    ],
    terms: [
      { id: "llm", term: "Large language model", abbr: "LLM", domain: "d2", translations: { en: "Large language model", de: "Großes Sprachmodell (LLM)" }, definition: { en: "A neural network trained on large amounts of text to predict the next token. It follows instructions in its context window but cannot reliably tell trusted instructions from untrusted data.", de: "Neuronales Netz, das auf großen Textmengen trainiert wurde, um das nächste Token vorherzusagen. Es folgt Anweisungen im Kontextfenster, kann aber vertrauenswürdige Anweisungen nicht zuverlässig von nicht vertrauenswürdigen Daten unterscheiden." } },
      { id: "context-window", term: "Context window", domain: "d2", translations: { en: "Context window", de: "Kontextfenster" }, definition: { en: "Everything the model sees in one request: system prompt, conversation, retrieved documents and tool results. Anything in it can influence the output.", de: "Alles, was das Modell in einer Anfrage sieht: Systemprompt, Gesprächsverlauf, abgerufene Dokumente und Tool-Ergebnisse. Alles davon kann die Ausgabe beeinflussen." } },
      { id: "prompt-injection", term: "Prompt injection", domain: "d1", translations: { en: "Prompt injection", de: "Prompt Injection" }, definition: { en: "Input that changes the model's behaviour against the developer's intent. Direct injection comes from the user; indirect injection hides in content the model processes, such as web pages, emails or retrieved documents. OWASP lists it as LLM01:2025.", de: "Eingabe, die das Verhalten des Modells gegen die Absicht der Entwickler ändert. Direkte Injection kommt vom Nutzer, indirekte versteckt sich in verarbeiteten Inhalten wie Webseiten, E-Mails oder abgerufenen Dokumenten. OWASP führt sie als LLM01:2025." } },
      { id: "jailbreak", term: "Jailbreak", domain: "d2", translations: { en: "Jailbreak", de: "Jailbreak" }, definition: { en: "A form of prompt injection that makes the model ignore its safety rules altogether.", de: "Form der Prompt Injection, die das Modell dazu bringt, seine Sicherheitsregeln ganz zu ignorieren." } },
      { id: "system-prompt-leakage", term: "System prompt leakage", domain: "d3", translations: { en: "System prompt leakage", de: "Offenlegung des Systemprompts" }, definition: { en: "The risk that instructions in the system prompt are revealed. OWASP's point: the system prompt must not contain secrets or act as an access control.", de: "Risiko, dass die Anweisungen im Systemprompt offengelegt werden. Kernaussage von OWASP: Der Systemprompt darf keine Geheimnisse enthalten und keine Zugriffskontrolle ersetzen." } },
      { id: "excessive-agency", term: "Excessive agency", domain: "d1", translations: { en: "Excessive agency", de: "Übermäßige Handlungsbefugnis" }, definition: { en: "An LLM system with more functions, permissions or autonomy than it needs, so a manipulated output can cause real damage. Countered by least privilege and human approval for high-impact actions.", de: "LLM-System mit mehr Funktionen, Rechten oder Autonomie als nötig, sodass eine manipulierte Ausgabe echten Schaden anrichten kann. Gegenmittel: minimale Rechte und menschliche Freigabe für folgenreiche Aktionen." } },
      { id: "improper-output-handling", term: "Improper output handling", domain: "d3", translations: { en: "Improper output handling", de: "Unsichere Ausgabeverarbeitung" }, definition: { en: "Passing model output to browsers, shells, databases or other systems without validation or encoding, which can lead to XSS, injection or code execution.", de: "Weitergabe von Modellausgaben an Browser, Shells, Datenbanken oder andere Systeme ohne Prüfung oder Kodierung; kann zu XSS, Injection oder Codeausführung führen." } },
      { id: "sensitive-information-disclosure", term: "Sensitive information disclosure", domain: "d5", translations: { en: "Sensitive information disclosure", de: "Offenlegung sensibler Informationen" }, definition: { en: "The model or application reveals personal data, credentials or confidential business data, for example from training data, context or connected systems.", de: "Modell oder Anwendung legen personenbezogene Daten, Zugangsdaten oder vertrauliche Geschäftsdaten offen, etwa aus Trainingsdaten, Kontext oder angebundenen Systemen." } },
      { id: "unbounded-consumption", term: "Unbounded consumption", domain: "d4", translations: { en: "Unbounded consumption", de: "Unbegrenzter Ressourcenverbrauch" }, definition: { en: "Uncontrolled use of model resources that leads to denial of service, runaway costs or model extraction. Countered with rate limits, quotas and monitoring.", de: "Unkontrollierte Nutzung von Modellressourcen, die zu Dienstausfall, ausufernden Kosten oder Modell-Extraktion führt. Gegenmittel: Ratenbegrenzung, Kontingente und Überwachung." } },
      { id: "rag", term: "Retrieval-augmented generation", abbr: "RAG", domain: "d7", translations: { en: "Retrieval-augmented generation", de: "Retrieval-Augmented Generation (RAG)" }, definition: { en: "The application retrieves relevant documents, usually from a vector database, and adds them to the prompt. Retrieved content is untrusted input and can carry indirect prompt injection.", de: "Die Anwendung ruft passende Dokumente ab, meist aus einer Vektordatenbank, und fügt sie dem Prompt hinzu. Abgerufene Inhalte sind nicht vertrauenswürdige Eingaben und können indirekte Prompt Injection enthalten." } },
      { id: "embedding", term: "Embedding", domain: "d7", translations: { en: "Embedding", de: "Embedding (Vektordarstellung)" }, definition: { en: "A numeric vector that represents the meaning of text, used to find similar content in a vector database.", de: "Zahlenvektor, der die Bedeutung eines Textes darstellt; dient dazu, ähnliche Inhalte in einer Vektordatenbank zu finden." } },
      { id: "vector-database", term: "Vector database", domain: "d7", translations: { en: "Vector database", de: "Vektordatenbank" }, definition: { en: "A database that stores embeddings and returns the nearest matches. Its risks include missing access control per document, poisoned entries and leakage between tenants.", de: "Datenbank, die Embeddings speichert und die ähnlichsten Treffer liefert. Risiken sind fehlende Zugriffskontrolle je Dokument, vergiftete Einträge und Datenabfluss zwischen Mandanten." } },
      { id: "data-poisoning", term: "Data poisoning", domain: "d6", translations: { en: "Data poisoning", de: "Datenvergiftung (Data Poisoning)" }, definition: { en: "Manipulating training, fine-tuning or retrieval data to introduce backdoors, bias or wrong behaviour.", de: "Manipulation von Trainings-, Fine-Tuning- oder Abrufdaten, um Hintertüren, Verzerrungen oder Fehlverhalten einzuschleusen." } },
      { id: "supply-chain", term: "AI supply chain", domain: "d6", translations: { en: "AI supply chain", de: "KI-Lieferkette" }, definition: { en: "Third-party models, adapters such as LoRA, datasets, libraries and plugins an AI system depends on. Each can be tampered with, so provenance and integrity checks matter.", de: "Fremde Modelle, Adapter wie LoRA, Datensätze, Bibliotheken und Plugins, von denen ein KI-System abhängt. Jedes Teil kann manipuliert sein, deshalb zählen Herkunfts- und Integritätsprüfung." } },
      { id: "model-serialization", term: "Model serialization", domain: "d6", translations: { en: "Model serialization", de: "Modell-Serialisierung" }, definition: { en: "Saving a model to a file. Pickle-based formats can execute code when loaded, so untrusted models should use safer formats such as safetensors and be scanned and signed.", de: "Speichern eines Modells in einer Datei. Pickle-basierte Formate können beim Laden Code ausführen; nicht vertrauenswürdige Modelle sollten sicherere Formate wie safetensors nutzen und geprüft sowie signiert sein." } },
      { id: "mlops", term: "MLOps", domain: "d6", translations: { en: "MLOps", de: "MLOps" }, definition: { en: "Practices for building, deploying and running machine learning models reliably: data pipelines, training, model registry, deployment and monitoring. MLSecOps adds security to each step.", de: "Vorgehen, um Machine-Learning-Modelle zuverlässig zu entwickeln, bereitzustellen und zu betreiben: Datenpipelines, Training, Modellregister, Deployment und Überwachung. MLSecOps ergänzt jeden Schritt um Sicherheit." } },
      { id: "fine-tuning", term: "Fine-tuning", domain: "d8", translations: { en: "Fine-tuning", de: "Fine-Tuning (Nachtraining)" }, definition: { en: "Further training a pretrained model on specific data to change its behaviour. It can weaken earlier safety alignment and does not on its own stop prompt injection.", de: "Weitertrainieren eines vortrainierten Modells mit eigenen Daten, um sein Verhalten zu ändern. Es kann frühere Sicherheitsausrichtung schwächen und verhindert allein keine Prompt Injection." } },
      { id: "lora", term: "Low-rank adaptation", abbr: "LoRA", domain: "d8", translations: { en: "Low-rank adaptation", de: "Low-Rank Adaptation (LoRA)" }, definition: { en: "A parameter-efficient fine-tuning method that trains small adapter weights instead of the whole model. Adapters from third parties are part of the supply chain.", de: "Parameter-effizientes Fine-Tuning, das kleine Adapter-Gewichte statt des ganzen Modells trainiert. Adapter von Dritten gehören zur Lieferkette." } },
      { id: "alignment", term: "Alignment", domain: "d8", translations: { en: "Alignment", de: "Alignment (Ausrichtung)" }, definition: { en: "Training a model to follow intended values and rules, for example with reinforcement learning from human feedback (RLHF).", de: "Training eines Modells, damit es gewünschten Werten und Regeln folgt, etwa mit Reinforcement Learning from Human Feedback (RLHF)." } },
      { id: "guardrails", term: "Guardrails", domain: "d3", translations: { en: "Guardrails", de: "Guardrails (Schutzschranken)" }, definition: { en: "Checks before and after the model, such as input filters, content moderation and output validation. They reduce risk but do not replace least privilege.", de: "Prüfungen vor und nach dem Modell, etwa Eingabefilter, Inhaltsmoderation und Ausgabeprüfung. Sie senken das Risiko, ersetzen aber keine minimalen Rechte." } },
      { id: "ai-agent", term: "AI agent", domain: "d1", translations: { en: "AI agent", de: "KI-Agent" }, definition: { en: "An LLM system that plans steps and calls tools to reach a goal. Its security depends on which tools and permissions it has and on checks outside the model.", de: "LLM-System, das Schritte plant und Werkzeuge aufruft, um ein Ziel zu erreichen. Seine Sicherheit hängt davon ab, welche Werkzeuge und Rechte es hat und welche Prüfungen außerhalb des Modells greifen." } },
      { id: "tool-calling", term: "Tool calling", domain: "d1", translations: { en: "Tool calling", de: "Tool Calling (Werkzeugaufruf)" }, definition: { en: "The model asks the application to run a function, such as an API call or database query. Authorisation for the call belongs in the application, not in the prompt.", de: "Das Modell bittet die Anwendung, eine Funktion auszuführen, etwa einen API-Aufruf oder eine Datenbankabfrage. Die Berechtigungsprüfung gehört in die Anwendung, nicht in den Prompt." } },
      { id: "mcp", term: "Model Context Protocol", abbr: "MCP", domain: "d1", translations: { en: "Model Context Protocol", de: "Model Context Protocol (MCP)" }, definition: { en: "An open protocol that connects AI applications to tools and data sources through MCP servers. Untrusted servers and tool descriptions are an injection and supply-chain risk.", de: "Offenes Protokoll, das KI-Anwendungen über MCP-Server mit Werkzeugen und Datenquellen verbindet. Nicht vertrauenswürdige Server und Werkzeugbeschreibungen sind ein Injection- und Lieferkettenrisiko." } },
      { id: "least-privilege", term: "Least privilege", domain: "d4", translations: { en: "Least privilege", de: "Prinzip der minimalen Rechte" }, definition: { en: "Giving models, agents and service accounts only the permissions they need. The key control against excessive agency.", de: "Modelle, Agenten und Dienstkonten erhalten nur die Rechte, die sie brauchen. Wichtigste Maßnahme gegen übermäßige Handlungsbefugnis." } },
      { id: "evasion-attack", term: "Evasion attack", domain: "d2", translations: { en: "Evasion attack", de: "Evasion-Angriff (Umgehungsangriff)" }, definition: { en: "Inputs crafted at inference time so the model misclassifies or misbehaves, one of the attack classes in NIST AI 100-2.", de: "Eingaben, die zur Laufzeit so gestaltet sind, dass das Modell falsch klassifiziert oder sich falsch verhält; eine der Angriffsklassen in NIST AI 100-2." } },
      { id: "model-extraction", term: "Model extraction", domain: "d4", translations: { en: "Model extraction", de: "Modell-Extraktion" }, definition: { en: "Copying a model's behaviour or parameters by sending many queries and learning from the answers.", de: "Nachbilden des Verhaltens oder der Parameter eines Modells durch viele Abfragen und Lernen aus den Antworten." } },
      { id: "membership-inference", term: "Membership inference", domain: "d5", translations: { en: "Membership inference", de: "Membership Inference (Zugehörigkeitsangriff)" }, definition: { en: "A privacy attack that tests whether a specific record was part of the training data.", de: "Datenschutzangriff, der prüft, ob ein bestimmter Datensatz Teil der Trainingsdaten war." } },
      { id: "nist-ai-rmf", term: "NIST AI Risk Management Framework", abbr: "AI RMF", domain: "d5", translations: { en: "NIST AI Risk Management Framework", de: "NIST AI Risk Management Framework (AI RMF)" }, definition: { en: "A voluntary framework for managing AI risks, organised in four functions: Govern, Map, Measure and Manage.", de: "Freiwilliges Rahmenwerk zum Umgang mit KI-Risiken, gegliedert in vier Funktionen: Govern, Map, Measure und Manage." } },
      { id: "owasp-llm-top-10", term: "OWASP Top 10 for LLM Applications", domain: "d5", translations: { en: "OWASP Top 10 for LLM Applications", de: "OWASP Top 10 für LLM-Anwendungen" }, definition: { en: "OWASP's list of the most critical risks for LLM applications; the 2025 edition runs from prompt injection (LLM01) to unbounded consumption (LLM10).", de: "OWASP-Liste der kritischsten Risiken für LLM-Anwendungen; die Ausgabe 2025 reicht von Prompt Injection (LLM01) bis unbegrenzter Ressourcenverbrauch (LLM10)." } },
    ],
  },
};
