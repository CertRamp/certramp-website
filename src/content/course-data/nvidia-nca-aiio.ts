import type { CourseData } from "./types";

/**
 * Pilot certification for the building blocks (November 2026).
 * Blueprint counts taken from the live Udemy course on 13 Nov 2026 (every test: 19 / 20 / 11).
 * Exam facts checked against the NVIDIA exam page on 13 Nov 2026 (page updated 3 Nov 2026;
 * no new version, update or retirement announced).
 */
export const ncaAiio: CourseData = {
  slug: "nvidia-nca-aiio",

  examWatch: {
    lastChecked: "2026-11-13",
    examVersion: {
      en: "NVIDIA exam study guide dated January 2026 (NVIDIA gives no version number); three domains weighted 38% / 40% / 22%",
      de: "NVIDIA-Studienleitfaden vom Januar 2026 (NVIDIA nennt keine Versionsnummer); drei Domains mit 38 % / 40 % / 22 %",
    },
    source: {
      label: "NVIDIA: AI Infrastructure and Operations Associate (NCA-AIIO)",
      url: "https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-operations-associate/",
    },
    entries: [],
  },

  blueprint: {
    rows: [
      { domain: "d1", perTest: [19, 19, 19, 19, 19, 19] },
      { domain: "d2", perTest: [20, 20, 20, 20, 20, 20] },
      { domain: "d3", perTest: [11, 11, 11, 11, 11, 11] },
    ],
    examVersion: {
      en: "NVIDIA study guide dated January 2026",
      de: "NVIDIA-Studienleitfaden vom Januar 2026",
    },
    counted: "2026-11-13",
  },

  changelog: [
    {
      date: "2026-11-11",
      kind: "new-questions",
      tests: [5, 6],
      questions: 100,
      note: {
        en: "Tests 5 and 6 rebuilt with 50 new scenario questions each, with an explanation for every option.",
        de: "Test 5 und 6 mit je 50 neuen Szenariofragen neu aufgebaut, mit Erklärung zu jeder Antwortoption.",
      },
    },
    {
      date: "2026-11-11",
      kind: "revision",
      tests: [4],
      questions: 50,
      note: {
        en: "Test 4 (exam simulation) revised: answer options sharpened and explanations added for every option; correct answers unchanged.",
        de: "Test 4 (Prüfungssimulation) überarbeitet: Antwortoptionen geschärft und Erklärungen zu jeder Option ergänzt; richtige Antworten unverändert.",
      },
    },
    {
      date: "2026-09",
      kind: "launch",
      tests: [1, 2, 3, 4, 5, 6],
      questions: 300,
      note: {
        en: "Course published with six tests of 50 questions, aligned to the January 2026 study guide.",
        de: "Kurs veröffentlicht mit sechs Tests zu je 50 Fragen, ausgerichtet am Studienleitfaden vom Januar 2026.",
      },
    },
  ],

  path: {
    before: [],
    after: [
      {
        name: "NVIDIA-Certified Professional AI Infrastructure",
        code: "NCP-AII",
        url: "https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-professional/",
        relation: {
          en: "Professional exam in the same AI Infrastructure category: deploying, configuring and validating NVIDIA AI infrastructure. NVIDIA recommends 2–3 years of hands-on experience with GPU servers and AI clusters.",
          de: "Professional-Prüfung derselben Kategorie AI Infrastructure: NVIDIA-KI-Infrastruktur bereitstellen, konfigurieren und validieren. NVIDIA empfiehlt 2–3 Jahre Praxis mit GPU-Servern und KI-Clustern.",
        },
      },
      {
        name: "NVIDIA-Certified Professional AI Operations",
        code: "NCP-AIO",
        url: "https://www.nvidia.com/en-us/learn/certification/ai-operations-professional/",
        relation: {
          en: "Professional exam for monitoring, troubleshooting and optimising AI infrastructure in the data center; 30 questions plus 3 hands-on labs. NVIDIA recommends 2–3 years of operational experience with NVIDIA hardware.",
          de: "Professional-Prüfung zu Überwachung, Fehlersuche und Optimierung von KI-Infrastruktur im Rechenzentrum; 30 Fragen plus 3 praktische Laborübungen. NVIDIA empfiehlt 2–3 Jahre Betriebserfahrung mit NVIDIA-Hardware.",
        },
      },
      {
        name: "NVIDIA-Certified Professional AI Networking",
        code: "NCP-AIN",
        url: "https://www.nvidia.com/en-us/learn/certification/ai-networking-professional/",
        relation: {
          en: "Professional exam for deploying and configuring NVIDIA networking for AI. NVIDIA recommends 2–3 years of hands-on data center networking experience.",
          de: "Professional-Prüfung zur Bereitstellung und Konfiguration von NVIDIA-Netzwerken für KI. NVIDIA empfiehlt 2–3 Jahre praktische Erfahrung mit Rechenzentrumsnetzwerken.",
        },
      },
    ],
    similar: [
      {
        name: "NVIDIA-Certified Associate: Generative AI LLMs",
        code: "NCA-GENL",
        slug: "nvidia-nca-genl",
        relation: {
          en: "The other NVIDIA associate exam in our catalogue: same level and format, but about building with large language models instead of running AI infrastructure.",
          de: "Die zweite NVIDIA-Associate-Prüfung in unserem Katalog: gleiches Niveau und Format, aber zum Entwickeln mit großen Sprachmodellen statt zum Betrieb von KI-Infrastruktur.",
        },
      },
      {
        name: "Microsoft Azure AI Fundamentals",
        code: "AI-901",
        slug: "ai-901",
        relation: {
          en: "Entry-level AI certification from Microsoft: AI concepts and AI services on Azure rather than data center hardware.",
          de: "Einstiegszertifizierung für KI von Microsoft: KI-Grundbegriffe und KI-Dienste in Azure statt Rechenzentrums-Hardware.",
        },
      },
      {
        name: "CompTIA Cloud+",
        code: "CV0-004",
        slug: "comptia-cloud-plus-cv0-004",
        relation: {
          en: "Vendor-neutral infrastructure certification: cloud architecture, deployment and operations, without a focus on GPUs or AI workloads.",
          de: "Herstellerneutrale Infrastruktur-Zertifizierung: Cloud-Architektur, Bereitstellung und Betrieb, ohne Schwerpunkt auf GPUs oder KI-Workloads.",
        },
      },
      {
        name: "Certified Kubernetes Administrator",
        code: "CKA",
        slug: "cka",
        relation: {
          en: "Hands-on Kubernetes administration. NCA-AIIO covers Kubernetes only at the level of AI cluster orchestration and job scheduling.",
          de: "Praktische Kubernetes-Administration. NCA-AIIO behandelt Kubernetes nur auf der Ebene von Orchestrierung und Job-Scheduling im KI-Cluster.",
        },
      },
    ],
    compare: ["nvidia-nca-aiio-vs-nvidia-nca-genl"],
    note: {
      en: "NVIDIA lists no prerequisite certification and no required order. The exam page expects a basic understanding of data center infrastructure.",
      de: "NVIDIA nennt keine vorausgesetzte Zertifizierung und keine feste Reihenfolge. Die Prüfungsseite setzt ein Grundverständnis von Rechenzentrumsinfrastruktur voraus.",
    },
    source: { label: "NVIDIA: Certification portfolio", url: "https://www.nvidia.com/en-us/learn/certification/" },
    checked: "2026-11-13",
  },

  readiness: {},

  glossary: {
    reviewed: "2026-11-13",
    sources: [
      { label: "NVIDIA: NCA-AIIO exam page", url: "https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-operations-associate/" },
      { label: "NVIDIA Documentation Hub", url: "https://docs.nvidia.com/" },
      { label: "NVIDIA Developer", url: "https://developer.nvidia.com/" },
    ],
    terms: [
      /* ── Essential AI Knowledge ── */
      {
        id: "artificial-intelligence",
        term: "Artificial intelligence",
        abbr: "AI",
        domain: "d1",
        translations: { en: "Artificial intelligence", de: "Künstliche Intelligenz (KI)" },
        definition: {
          en: "The broad field of computer systems that perform tasks normally requiring human intelligence. Machine learning is a subset of AI, and deep learning is a subset of machine learning.",
          de: "Oberbegriff für Computersysteme, die Aufgaben lösen, für die sonst menschliche Intelligenz nötig ist. Maschinelles Lernen ist ein Teilgebiet der KI, Deep Learning ein Teilgebiet des maschinellen Lernens.",
        },
      },
      {
        id: "machine-learning",
        term: "Machine learning",
        abbr: "ML",
        domain: "d1",
        translations: { en: "Machine learning", de: "Maschinelles Lernen" },
        definition: {
          en: "AI methods that learn patterns from data instead of following hand-written rules.",
          de: "KI-Verfahren, die Muster aus Daten lernen, statt fest programmierten Regeln zu folgen.",
        },
      },
      {
        id: "deep-learning",
        term: "Deep learning",
        abbr: "DL",
        domain: "d1",
        translations: { en: "Deep learning", de: "Deep Learning (tiefes Lernen)" },
        definition: {
          en: "Machine learning with neural networks of many layers. Its large matrix calculations are the main reason GPUs are used for AI.",
          de: "Maschinelles Lernen mit neuronalen Netzen aus vielen Schichten. Die großen Matrixberechnungen sind der Hauptgrund, warum GPUs für KI eingesetzt werden.",
        },
      },
      {
        id: "training",
        term: "Training",
        domain: "d1",
        translations: { en: "Training", de: "Training" },
        definition: {
          en: "The phase in which a model learns its parameters from data. Training large models needs many GPUs working together, fast GPU-to-GPU links and high storage throughput.",
          de: "Phase, in der ein Modell seine Parameter aus Daten lernt. Das Training großer Modelle braucht viele zusammenarbeitende GPUs, schnelle Verbindungen zwischen den GPUs und hohen Speicherdurchsatz.",
        },
      },
      {
        id: "inference",
        term: "Inference",
        domain: "d1",
        translations: { en: "Inference", de: "Inferenz" },
        definition: {
          en: "Running a trained model to produce predictions or answers. Inference is usually judged by latency, throughput and cost per request.",
          de: "Ausführen eines trainierten Modells, um Vorhersagen oder Antworten zu erzeugen. Inferenz wird meist nach Latenz, Durchsatz und Kosten pro Anfrage bewertet.",
        },
      },
      {
        id: "gpu",
        term: "Graphics processing unit",
        abbr: "GPU",
        domain: "d1",
        translations: { en: "Graphics processing unit", de: "Grafikprozessor (GPU)" },
        definition: {
          en: "A processor with thousands of cores built for running many calculations in parallel. A CPU has fewer, more complex cores optimised for sequential, general-purpose work.",
          de: "Prozessor mit Tausenden Rechenkernen für viele parallele Berechnungen. Eine CPU hat weniger, komplexere Kerne für sequenzielle, allgemeine Aufgaben.",
        },
      },
      {
        id: "tensor-core",
        term: "Tensor Core",
        domain: "d1",
        translations: { en: "Tensor Core", de: "Tensor Core (Tensorkern)" },
        definition: {
          en: "Specialised units inside NVIDIA GPUs that accelerate the matrix multiply-accumulate operations of deep learning, especially at reduced precision.",
          de: "Spezialeinheiten in NVIDIA-GPUs, die die Matrix-Multiplikationen von Deep Learning beschleunigen, besonders bei reduzierter Rechengenauigkeit.",
        },
      },
      {
        id: "cuda",
        term: "CUDA",
        domain: "d1",
        translations: { en: "CUDA", de: "CUDA" },
        definition: {
          en: "NVIDIA's parallel computing platform and programming model for GPUs. Most of the NVIDIA AI software stack builds on CUDA and its libraries.",
          de: "NVIDIAs Plattform und Programmiermodell für paralleles Rechnen auf GPUs. Der größte Teil des NVIDIA-KI-Software-Stacks baut auf CUDA und seinen Bibliotheken auf.",
        },
      },
      {
        id: "nvidia-ai-enterprise",
        term: "NVIDIA AI Enterprise",
        domain: "d1",
        translations: { en: "NVIDIA AI Enterprise", de: "NVIDIA AI Enterprise" },
        definition: {
          en: "NVIDIA's licensed software platform for developing and running AI in production, with enterprise support. It includes frameworks, pretrained models and NIM microservices.",
          de: "NVIDIAs lizenzierte Softwareplattform zum Entwickeln und Betreiben von KI in der Produktion, mit Enterprise-Support. Sie umfasst Frameworks, vortrainierte Modelle und NIM-Microservices.",
        },
      },
      {
        id: "nim",
        term: "NVIDIA NIM",
        abbr: "NIM",
        domain: "d1",
        translations: { en: "NVIDIA NIM", de: "NVIDIA NIM" },
        definition: {
          en: "Prebuilt, containerised inference microservices that package a model with an optimised runtime and a standard API.",
          de: "Vorgefertigte Inferenz-Microservices im Container, die ein Modell mit optimierter Laufzeitumgebung und Standard-API bündeln.",
        },
      },
      {
        id: "triton",
        term: "Triton Inference Server",
        domain: "d1",
        translations: { en: "Triton Inference Server", de: "Triton Inference Server" },
        definition: {
          en: "Open-source inference server that serves models from several frameworks on GPUs and CPUs. NVIDIA now names it NVIDIA Dynamo-Triton.",
          de: "Open-Source-Inferenzserver, der Modelle aus verschiedenen Frameworks auf GPUs und CPUs bereitstellt. NVIDIA führt ihn inzwischen als NVIDIA Dynamo-Triton.",
        },
      },
      {
        id: "tensorrt",
        term: "TensorRT",
        domain: "d1",
        translations: { en: "TensorRT", de: "TensorRT" },
        definition: {
          en: "NVIDIA SDK that optimises trained models for faster inference on NVIDIA GPUs, for example through layer fusion and reduced precision.",
          de: "NVIDIA-SDK, das trainierte Modelle für schnellere Inferenz auf NVIDIA-GPUs optimiert, etwa durch Zusammenfassen von Schichten und reduzierte Genauigkeit.",
        },
      },
      {
        id: "rapids",
        term: "RAPIDS",
        domain: "d1",
        translations: { en: "RAPIDS", de: "RAPIDS" },
        definition: {
          en: "Open-source GPU-accelerated libraries for data science and data preparation, with APIs modelled on pandas and scikit-learn.",
          de: "Open-Source-Bibliotheken für GPU-beschleunigte Data Science und Datenaufbereitung, mit Schnittstellen nach dem Vorbild von pandas und scikit-learn.",
        },
      },
      {
        id: "ngc",
        term: "NGC catalog",
        abbr: "NGC",
        domain: "d1",
        translations: { en: "NGC catalog", de: "NGC-Katalog" },
        definition: {
          en: "NVIDIA's hub for GPU-optimised containers, pretrained models, Helm charts and SDKs.",
          de: "NVIDIAs Sammlung GPU-optimierter Container, vortrainierter Modelle, Helm-Charts und SDKs.",
        },
      },

      /* ── AI Infrastructure ── */
      {
        id: "dgx",
        term: "DGX",
        domain: "d2",
        translations: { en: "DGX", de: "DGX" },
        definition: {
          en: "NVIDIA's integrated AI systems: servers with multiple NVIDIA GPUs, NVLink, networking and software, delivered as one tested platform.",
          de: "NVIDIAs integrierte KI-Systeme: Server mit mehreren NVIDIA-GPUs, NVLink, Netzwerk und Software, geliefert als eine getestete Plattform.",
        },
      },
      {
        id: "hgx",
        term: "HGX",
        domain: "d2",
        translations: { en: "HGX", de: "HGX" },
        definition: {
          en: "NVIDIA's GPU baseboard platform that server manufacturers build their own AI servers around.",
          de: "NVIDIAs GPU-Baseboard-Plattform, um die Serverhersteller ihre eigenen KI-Server bauen.",
        },
      },
      {
        id: "dgx-superpod",
        term: "DGX SuperPOD",
        domain: "d2",
        translations: { en: "DGX SuperPOD", de: "DGX SuperPOD" },
        definition: {
          en: "NVIDIA's reference architecture for large AI clusters built from DGX systems, with defined networking, storage and management software.",
          de: "NVIDIAs Referenzarchitektur für große KI-Cluster aus DGX-Systemen, mit festgelegtem Netzwerk, Speicher und Verwaltungssoftware.",
        },
      },
      {
        id: "nvlink",
        term: "NVLink",
        domain: "d2",
        translations: { en: "NVLink", de: "NVLink" },
        definition: {
          en: "NVIDIA's high-bandwidth GPU-to-GPU interconnect, much faster than PCIe, used inside a server and, with NVLink Switch, across a rack.",
          de: "NVIDIAs Verbindung zwischen GPUs mit hoher Bandbreite, deutlich schneller als PCIe, innerhalb eines Servers und mit NVLink Switch auch über ein Rack hinweg.",
        },
      },
      {
        id: "nvswitch",
        term: "NVSwitch",
        domain: "d2",
        translations: { en: "NVSwitch", de: "NVSwitch" },
        definition: {
          en: "A switch chip that connects many GPUs over NVLink so that every GPU can talk to every other GPU at full NVLink speed.",
          de: "Switch-Chip, der viele GPUs über NVLink verbindet, sodass jede GPU mit jeder anderen mit voller NVLink-Geschwindigkeit kommunizieren kann.",
        },
      },
      {
        id: "pcie",
        term: "PCI Express",
        abbr: "PCIe",
        domain: "d2",
        translations: { en: "PCI Express", de: "PCI Express" },
        definition: {
          en: "The standard expansion bus that connects GPUs, network cards and storage to the CPU in a server.",
          de: "Standard-Erweiterungsbus, der GPUs, Netzwerkkarten und Speicher im Server mit der CPU verbindet.",
        },
      },
      {
        id: "infiniband",
        term: "InfiniBand",
        abbr: "IB",
        domain: "d2",
        translations: { en: "InfiniBand", de: "InfiniBand" },
        definition: {
          en: "A low-latency, high-bandwidth network technology with native RDMA, widely used to connect the servers of AI training clusters. NVIDIA's InfiniBand family is called Quantum.",
          de: "Netzwerktechnik mit geringer Latenz, hoher Bandbreite und eingebautem RDMA, verbreitet zur Verbindung der Server in KI-Trainingsclustern. NVIDIAs InfiniBand-Produktfamilie heißt Quantum.",
        },
      },
      {
        id: "rdma",
        term: "Remote direct memory access",
        abbr: "RDMA",
        domain: "d2",
        translations: { en: "Remote direct memory access", de: "Direkter Speicherzugriff über das Netz (RDMA)" },
        definition: {
          en: "Moving data directly between the memory of two computers without involving their CPUs or operating systems, which lowers latency and CPU load.",
          de: "Datenübertragung direkt zwischen dem Speicher zweier Rechner, ohne deren CPUs oder Betriebssysteme einzubinden; senkt Latenz und CPU-Last.",
        },
      },
      {
        id: "roce",
        term: "RDMA over Converged Ethernet",
        abbr: "RoCE",
        domain: "d2",
        translations: { en: "RDMA over Converged Ethernet", de: "RDMA über Ethernet (RoCE)" },
        definition: {
          en: "RDMA carried over Ethernet networks. It needs a carefully configured, lossless or congestion-controlled Ethernet fabric to perform well.",
          de: "RDMA über Ethernet-Netzwerke. Für gute Leistung braucht es ein sorgfältig konfiguriertes, verlustfreies oder staugesteuertes Ethernet.",
        },
      },
      {
        id: "gpudirect",
        term: "GPUDirect",
        domain: "d2",
        translations: { en: "GPUDirect", de: "GPUDirect" },
        definition: {
          en: "NVIDIA technologies that let network cards (GPUDirect RDMA) and storage (GPUDirect Storage) move data straight to and from GPU memory, bypassing a copy through CPU memory.",
          de: "NVIDIA-Technologien, mit denen Netzwerkkarten (GPUDirect RDMA) und Speicher (GPUDirect Storage) Daten direkt in den und aus dem GPU-Speicher übertragen, ohne Umweg über den CPU-Speicher.",
        },
      },
      {
        id: "dpu",
        term: "Data processing unit",
        abbr: "DPU",
        domain: "d2",
        translations: { en: "Data processing unit", de: "Datenverarbeitungseinheit (DPU)" },
        definition: {
          en: "A programmable processor on the network card that offloads networking, storage and security tasks from the host CPU. NVIDIA's DPUs are the BlueField family.",
          de: "Programmierbarer Prozessor auf der Netzwerkkarte, der Netzwerk-, Speicher- und Sicherheitsaufgaben von der Host-CPU übernimmt. NVIDIAs DPUs sind die BlueField-Familie.",
        },
      },
      {
        id: "spectrum-x",
        term: "Spectrum-X",
        domain: "d2",
        translations: { en: "Spectrum-X", de: "Spectrum-X" },
        definition: {
          en: "NVIDIA's Ethernet platform for AI, combining Spectrum switches with BlueField SuperNICs to improve RoCE performance in AI clusters.",
          de: "NVIDIAs Ethernet-Plattform für KI, die Spectrum-Switches mit BlueField-SuperNICs kombiniert, um die RoCE-Leistung in KI-Clustern zu verbessern.",
        },
      },
      {
        id: "east-west-traffic",
        term: "East-west traffic",
        domain: "d2",
        translations: { en: "East-west traffic", de: "Ost-West-Verkehr" },
        definition: {
          en: "Network traffic between servers inside the data center, such as GPU-to-GPU traffic during distributed training. North-south traffic flows in and out of the data center.",
          de: "Netzwerkverkehr zwischen Servern innerhalb des Rechenzentrums, etwa GPU-zu-GPU-Verkehr beim verteilten Training. Nord-Süd-Verkehr fließt in das Rechenzentrum hinein und heraus.",
        },
      },
      {
        id: "pue",
        term: "Power usage effectiveness",
        abbr: "PUE",
        domain: "d2",
        translations: { en: "Power usage effectiveness", de: "PUE (Energieeffizienz-Kennzahl)" },
        definition: {
          en: "Total facility power divided by the power used by IT equipment. A value closer to 1.0 means less energy goes to cooling and other overhead.",
          de: "Gesamter Energiebedarf des Rechenzentrums geteilt durch den Bedarf der IT-Geräte. Ein Wert näher an 1,0 bedeutet, dass weniger Energie in Kühlung und sonstigen Overhead fließt.",
        },
      },
      {
        id: "liquid-cooling",
        term: "Liquid cooling",
        domain: "d2",
        translations: { en: "Liquid cooling", de: "Flüssigkeitskühlung" },
        definition: {
          en: "Removing heat with liquid, for example cold plates on the processors (direct-to-chip). It handles the high rack power densities of modern GPU systems better than air.",
          de: "Wärmeabfuhr mit Flüssigkeit, etwa über Kühlplatten direkt auf den Prozessoren (Direct-to-Chip). Sie bewältigt die hohen Leistungsdichten moderner GPU-Racks besser als Luftkühlung.",
        },
      },

      /* ── AI Operations ── */
      {
        id: "dcgm",
        term: "Data Center GPU Manager",
        abbr: "DCGM",
        domain: "d3",
        translations: { en: "Data Center GPU Manager", de: "Data Center GPU Manager (DCGM)" },
        definition: {
          en: "NVIDIA tool suite for monitoring, health checks and diagnostics of GPUs in clusters. Its metrics are often exported to Prometheus and Grafana.",
          de: "NVIDIA-Werkzeugsammlung für Überwachung, Zustandsprüfung und Diagnose von GPUs im Cluster. Die Messwerte werden oft an Prometheus und Grafana weitergegeben.",
        },
      },
      {
        id: "nvidia-smi",
        term: "nvidia-smi",
        domain: "d3",
        translations: { en: "nvidia-smi", de: "nvidia-smi" },
        definition: {
          en: "Command-line tool that shows and manages the state of the NVIDIA GPUs in one server: utilisation, memory, temperature, power and running processes.",
          de: "Kommandozeilenwerkzeug, das den Zustand der NVIDIA-GPUs eines Servers anzeigt und verwaltet: Auslastung, Speicher, Temperatur, Leistungsaufnahme und laufende Prozesse.",
        },
      },
      {
        id: "slurm",
        term: "Slurm",
        domain: "d3",
        translations: { en: "Slurm", de: "Slurm" },
        definition: {
          en: "Open-source workload manager common in HPC and AI training clusters. It queues batch jobs and allocates nodes and GPUs to them.",
          de: "Open-Source-Workload-Manager, verbreitet in HPC- und KI-Trainingsclustern. Er stellt Batch-Jobs in Warteschlangen und weist ihnen Knoten und GPUs zu.",
        },
      },
      {
        id: "kubernetes",
        term: "Kubernetes",
        abbr: "K8s",
        domain: "d3",
        translations: { en: "Kubernetes", de: "Kubernetes" },
        definition: {
          en: "Open-source platform for orchestrating containers. It is common for inference services and increasingly for training, with GPUs exposed through the NVIDIA GPU Operator.",
          de: "Open-Source-Plattform zur Orchestrierung von Containern. Verbreitet für Inferenzdienste und zunehmend für Training; GPUs werden über den NVIDIA GPU Operator bereitgestellt.",
        },
      },
      {
        id: "gpu-operator",
        term: "NVIDIA GPU Operator",
        domain: "d3",
        translations: { en: "NVIDIA GPU Operator", de: "NVIDIA GPU Operator" },
        definition: {
          en: "A Kubernetes operator that installs and manages the software GPUs need on each node: driver, container toolkit, device plugin and DCGM monitoring.",
          de: "Kubernetes-Operator, der die nötige GPU-Software auf jedem Knoten installiert und verwaltet: Treiber, Container-Toolkit, Device-Plugin und DCGM-Überwachung.",
        },
      },
      {
        id: "base-command-manager",
        term: "Base Command Manager",
        abbr: "BCM",
        domain: "d3",
        translations: { en: "Base Command Manager", de: "Base Command Manager" },
        definition: {
          en: "NVIDIA software for provisioning, managing and monitoring AI clusters, including setup of Slurm or Kubernetes.",
          de: "NVIDIA-Software zum Bereitstellen, Verwalten und Überwachen von KI-Clustern, einschließlich der Einrichtung von Slurm oder Kubernetes.",
        },
      },
      {
        id: "run-ai",
        term: "NVIDIA Run:ai",
        domain: "d3",
        translations: { en: "NVIDIA Run:ai", de: "NVIDIA Run:ai" },
        definition: {
          en: "GPU orchestration software on Kubernetes that pools GPUs and shares them between teams with quotas and scheduling policies.",
          de: "GPU-Orchestrierungssoftware auf Kubernetes, die GPUs bündelt und mit Kontingenten und Scheduling-Regeln zwischen Teams aufteilt.",
        },
      },
      {
        id: "mig",
        term: "Multi-Instance GPU",
        abbr: "MIG",
        domain: "d3",
        translations: { en: "Multi-Instance GPU", de: "Multi-Instance GPU (MIG)" },
        definition: {
          en: "Partitioning one supported data center GPU into up to seven isolated instances, each with its own memory, cache and compute.",
          de: "Aufteilung einer unterstützten Rechenzentrums-GPU in bis zu sieben isolierte Instanzen mit jeweils eigenem Speicher, Cache und eigenen Recheneinheiten.",
        },
      },
      {
        id: "vgpu",
        term: "Virtual GPU",
        abbr: "vGPU",
        domain: "d3",
        translations: { en: "Virtual GPU", de: "Virtuelle GPU (vGPU)" },
        definition: {
          en: "NVIDIA software that shares a physical GPU between virtual machines through the hypervisor.",
          de: "NVIDIA-Software, die eine physische GPU über den Hypervisor zwischen virtuellen Maschinen aufteilt.",
        },
      },
      {
        id: "gpu-utilization",
        term: "GPU utilization",
        domain: "d3",
        translations: { en: "GPU utilization", de: "GPU-Auslastung" },
        definition: {
          en: "The share of time a GPU is busy. High utilisation alone does not prove efficient use, so it is read together with memory use, power, temperature and error counters.",
          de: "Anteil der Zeit, in der eine GPU beschäftigt ist. Hohe Auslastung allein beweist keine effiziente Nutzung; sie wird zusammen mit Speichernutzung, Leistung, Temperatur und Fehlerzählern bewertet.",
        },
      },
    ],
  },
};
