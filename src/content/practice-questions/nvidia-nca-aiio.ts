import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free NVIDIA NCA-AIIO sample questions. ORIGINAL questions written by CertRamp
 * against NVIDIA's published exam topics (verified 11 November 2026) and
 * NVIDIA documentation. Not taken from the paid practice tests, not recalled
 * exam content, and not presented as real exam questions.
 */
const CUDA_GUIDE = {
  label: "NVIDIA CUDA Programming Guide: Introduction",
  url: "https://docs.nvidia.com/cuda/cuda-programming-guide/01-introduction/introduction.html",
};

const TRAINING_INFERENCE = {
  label: "NVIDIA Blog: What's the Difference Between Deep Learning Training and Inference?",
  url: "https://blogs.nvidia.com/blog/difference-deep-learning-training-inference-ai/",
};

const SUPERPOD_COMPONENTS = {
  label: "NVIDIA DGX SuperPOD Reference Architecture (DGX H100): Key Components",
  url: "https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-h100/latest/dgx-superpod-components.html",
};

const SUPERPOD_NETWORKS = {
  label: "NVIDIA DGX SuperPOD Reference Architecture (DGX H100): Network Fabrics",
  url: "https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-h100/latest/network-fabrics.html",
};

export const nvidiaNcaAiioQuestions: PracticeQuestionSet = {
  slug: "nvidia-nca-aiio",
  intro:
    "15 original NCA-AIIO practice questions spread across NVIDIA's three published exam topics by weight: six on Essential AI Knowledge (38%), six on AI Infrastructure (40%) and three on AI Operations (22%). Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-11-11",
  updated: "2026-11-11",
  seo: {
    title: "NVIDIA NCA-AIIO Practice Questions with Answers (2026)",
    description:
      "15 free, original NCA-AIIO practice questions on GPU vs CPU, NVIDIA software, AI networking, DPUs, MIG, DCGM and GPU virtualization, each with a full explanation.",
  },
  questions: [
    /* ── d1: Essential AI Knowledge (38%) ─────────────────────────────────── */
    {
      id: "aiio-d1-gpu-vs-cpu-design",
      domain: "d1",
      objective: "Compare and contrast GPU and CPU architectures.",
      difficulty: "foundation",
      question:
        "A manager asks why the team wants GPUs rather than more CPU servers for deep learning training. Which statement matches how NVIDIA's CUDA documentation describes the two architectures?",
      options: [
        { id: "A", text: "GPUs have much higher single-thread performance than CPUs, so each individual operation finishes sooner", rationale: "The opposite is true: a GPU accepts lower single-thread performance in exchange for higher total throughput." },
        { id: "B", text: "A GPU is built to run thousands of threads in parallel and spends more of its transistors on data processing, trading single-thread speed for total throughput", rationale: "Correct. The CUDA guide describes the CPU as optimised to run a serial thread as fast as possible and the GPU as optimised for thousands of parallel threads and much greater total throughput." },
        { id: "C", text: "CPUs cannot perform the floating-point matrix operations that neural networks need", rationale: "CPUs can perform these operations; they simply run far fewer of them in parallel." },
        { id: "D", text: "GPUs dedicate more transistors to data caching and flow control, which is why they hide memory latency so well", rationale: "Dedicating more transistors to caching and flow control is how the CUDA guide characterises CPUs, not GPUs." },
      ],
      answer: "B",
      explanation:
        "CPUs are designed for low latency on a serial sequence of operations and run a few tens of threads in parallel. GPUs devote more transistors to data processing and run thousands of threads at once, which suits the highly parallel arithmetic of deep learning.",
      reference: CUDA_GUIDE,
    },
    {
      id: "aiio-d1-training-vs-inference",
      domain: "d1",
      objective: "Compare and contrast training and inference architecture requirements and considerations.",
      difficulty: "foundation",
      question:
        "Which statement best contrasts the infrastructure considerations for training a large model with those for serving it in production?",
      options: [
        { id: "A", text: "Inference always needs more total compute than training because the model runs continuously", rationale: "Training a large model is the heavier workload; NVIDIA cites around 3.8 x 10^25 operations to train Llama 3.1 405B. Inference demand varies with usage." },
        { id: "B", text: "Training is mainly judged on per-user response time, while inference is an offline batch process", rationale: "This reverses the two. Responsiveness to each user is an inference concern; training is a long-running compute job." },
        { id: "C", text: "Inference runs only on CPUs, so GPU capacity is needed for training alone", rationale: "Inference is commonly GPU-accelerated, especially for large language models." },
        { id: "D", text: "Training is extremely compute-intensive, while inference has to balance real-time responsiveness for each user against throughput for many users", rationale: "Correct. NVIDIA describes training as enormously compute-hungry and inference as a trade-off between per-user latency and serving many users at once." },
      ],
      answer: "D",
      explanation:
        "Training sizing is driven by total compute, data and time to train. Inference sizing is driven by service levels: latency for each request and throughput across concurrent users, which is why inference has its own optimisation techniques.",
      reference: TRAINING_INFERENCE,
    },
    {
      id: "aiio-d1-disaggregated-serving",
      domain: "d1",
      objective: "Compare and contrast training and inference architecture requirements and considerations.",
      difficulty: "advanced",
      question:
        "An LLM serving team sees that the first phase of each request, where all input tokens are processed together, is compute-heavy, while the token-by-token generation that follows behaves differently. Which serving approach runs these two phases on separate GPUs?",
      options: [
        { id: "A", text: "Disaggregated serving, which places the prefill and decode phases on different GPUs", rationale: "Correct. NVIDIA describes disaggregated serving as using separate GPUs for the prefill and decode phases of inference." },
        { id: "B", text: "Speculative decoding, where a smaller model drafts tokens for a larger model to check", rationale: "Speculative decoding reduces waiting time during generation, but it does not split prefill and decode across GPUs." },
        { id: "C", text: "Data-parallel training across several nodes", rationale: "Data parallelism is a training technique for spreading batches over GPUs; it is not an inference serving pattern for request phases." },
        { id: "D", text: "Multi-Instance GPU partitioning of a single GPU", rationale: "MIG splits one GPU into isolated instances, but it does not by itself assign the prefill and decode phases to different hardware." },
      ],
      answer: "A",
      explanation:
        "Prefill processes the whole prompt at once and is computationally heavy; decode generates one token at a time. Because the phases stress hardware differently, disaggregated serving gives each its own GPUs so both can be tuned independently.",
      reference: TRAINING_INFERENCE,
    },
    {
      id: "aiio-d1-ngc-catalog",
      domain: "d1",
      objective: "Describe the NVIDIA software stack used in an AI environment.",
      difficulty: "foundation",
      question:
        "A platform team wants a trusted source for GPU-optimised framework containers, pretrained models and Kubernetes Helm charts. Which part of the NVIDIA software stack provides this?",
      options: [
        { id: "A", text: "Slurm, which queues and launches multi-node batch jobs", rationale: "Slurm is a workload manager for scheduling jobs; it does not distribute containers or models." },
        { id: "B", text: "The baseboard management controller on each DGX system", rationale: "The BMC is for out-of-band hardware management, not for publishing software." },
        { id: "C", text: "The NGC catalog, a curated set of GPU-optimised containers, pretrained models, Helm charts and resources", rationale: "Correct. NVIDIA describes the NGC catalog as curated GPU-optimised software for AI, HPC and visualisation, with every image security scanned and performance tested on GPUs." },
        { id: "D", text: "The NVIDIA License System used by vGPU clients", rationale: "The NVIDIA License System licenses vGPU software; it is not a software catalogue." },
      ],
      answer: "C",
      explanation:
        "NGC containers bundle frameworks, libraries and dependencies so they run consistently from cloud to data centre to edge. Pretrained models can be used for inference or fine-tuning, and Helm charts help deploy GPU-optimised applications on Kubernetes.",
      reference: { label: "NVIDIA NGC Catalog User Guide", url: "https://docs.nvidia.com/ngc/latest/ngc-catalog-user-guide.html" },
    },
    {
      id: "aiio-d1-triton-serving",
      domain: "d1",
      objective: "Describe the software components related to the life cycle of AI development and deployment.",
      difficulty: "intermediate",
      question:
        "A company has trained models in PyTorch, exported others to ONNX and optimised some with TensorRT. It wants one inference server that exposes HTTP/REST and gRPC endpoints, batches requests dynamically and reports latency and GPU utilisation metrics. Which NVIDIA component fits?",
      options: [
        { id: "A", text: "NVIDIA Data Center GPU Manager (DCGM)", rationale: "DCGM monitors and diagnoses GPUs; it does not serve models." },
        { id: "B", text: "NVIDIA Unified Fabric Manager (UFM)", rationale: "UFM manages InfiniBand fabrics and their telemetry, not inference." },
        { id: "C", text: "NVIDIA Triton Inference Server", rationale: "Correct. Triton deploys models from TensorRT, PyTorch, ONNX and other frameworks, supports dynamic batching and concurrent model execution, and exposes HTTP/REST and gRPC protocols with metrics." },
        { id: "D", text: "NVIDIA Base Command Manager", rationale: "Base Command Manager provisions and administers clusters; it is not a model server." },
      ],
      answer: "C",
      explanation:
        "In the deployment stage of the AI life cycle, an inference server turns trained models into network services. Triton's multi-framework backends, dynamic batching and built-in metrics make it NVIDIA's general-purpose answer for that stage.",
      reference: { label: "NVIDIA Triton Inference Server documentation", url: "https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/index.html" },
    },
    {
      id: "aiio-d1-ai-enterprise",
      domain: "d1",
      objective: "Explain the purpose and use case of various NVIDIA solutions.",
      difficulty: "intermediate",
      question:
        "In NVIDIA's DGX SuperPOD reference architecture, which component is described as a software suite that gives developers AI tools and frameworks and gives IT teams orchestration and management tools?",
      options: [
        { id: "A", text: "NVIDIA AI Enterprise", rationale: "Correct. The reference architecture describes NVIDIA AI Enterprise as a suite of AI development tools and frameworks plus orchestration and management tools for IT." },
        { id: "B", text: "NVIDIA Unified Fabric Manager", rationale: "UFM manages the InfiniBand compute and storage fabrics with real-time telemetry; it is not a developer software suite." },
        { id: "C", text: "Slurm", rationale: "Slurm is the workload scheduler for multi-node batch jobs, not a suite of AI frameworks." },
        { id: "D", text: "NVIDIA Base Command Manager", rationale: "Base Command Manager is the cluster management solution for provisioning and administration, not the AI framework suite." },
      ],
      answer: "A",
      explanation:
        "A SuperPOD combines several NVIDIA solutions with distinct jobs: Base Command Manager runs the cluster, UFM runs the fabric, Slurm schedules jobs and NVIDIA AI Enterprise supplies the AI software. Knowing which product does what is a recurring theme of this objective.",
      reference: SUPERPOD_COMPONENTS,
    },

    /* ── d2: AI Infrastructure (40%) ──────────────────────────────────────── */
    {
      id: "aiio-d2-dpu-purpose",
      domain: "d2",
      objective: "Explain the purpose and benefits of a DPU in a data center.",
      difficulty: "foundation",
      question:
        "An architect proposes adding NVIDIA BlueField DPUs to GPU servers. What is the main benefit she is after?",
      options: [
        { id: "A", text: "Extra Tensor Cores that speed up model training", rationale: "A DPU does not add GPU compute; training throughput still comes from the GPUs." },
        { id: "B", text: "Replacing the GPUs for inference workloads at lower cost", rationale: "A DPU is an infrastructure processor, not a substitute for GPUs running models." },
        { id: "C", text: "High-bandwidth GPU-to-GPU links inside a single server", rationale: "GPU-to-GPU connectivity inside a DGX system comes from NVLink and NVSwitch, not a DPU." },
        { id: "D", text: "Offloading, accelerating and isolating networking, storage, security and management functions from the host CPU", rationale: "Correct. NVIDIA describes BlueField-3 as offloading, accelerating and isolating software-defined networking, storage, security and management, running its own software on Arm cores." },
      ],
      answer: "D",
      explanation:
        "Moving infrastructure services onto the DPU frees host CPU cycles for applications and separates infrastructure from business workloads, which supports a zero-trust design. BlueField is programmable through the NVIDIA DOCA framework.",
      reference: { label: "NVIDIA BlueField-3 Networking Platform User Guide: Introduction", url: "https://networking-docs.nvidia.com/bf3dpu/introduction" },
    },
    {
      id: "aiio-d2-gpudirect-rdma",
      domain: "d2",
      objective: "Determine networking requirements for AI workloads.",
      difficulty: "intermediate",
      question:
        "In a multi-node training job, profiling shows that gradients are copied from GPU memory into host memory before the network adapter sends them. Which NVIDIA technology provides a direct data path between the GPU and the network adapter?",
      options: [
        { id: "A", text: "Multi-Instance GPU (MIG)", rationale: "MIG partitions a GPU into isolated instances; it does not change how data moves to the network adapter." },
        { id: "B", text: "GPUDirect RDMA", rationale: "Correct. GPUDirect RDMA enables a direct path for data exchange between the GPU and a third-party peer device such as a network interface, using standard PCI Express features." },
        { id: "C", text: "Time-sliced vGPU", rationale: "Time-sliced vGPU shares a GPU between virtual machines; it is unrelated to the network data path." },
        { id: "D", text: "NVLink between the GPUs inside the server", rationale: "NVLink connects GPUs to each other within a system; it does not give the network adapter direct access to GPU memory." },
      ],
      answer: "B",
      explanation:
        "Avoiding the copy to host memory reduces latency and CPU overhead for inter-node communication. Distributed training depends heavily on this kind of fast GPU-to-network path in addition to a high-bandwidth fabric.",
      reference: { label: "NVIDIA GPUDirect RDMA documentation", url: "https://docs.nvidia.com/cuda/gpudirect-rdma/index.html" },
    },
    {
      id: "aiio-d2-compute-fabric",
      domain: "d2",
      objective: "Identify high-speed data center network options and their use cases.",
      difficulty: "intermediate",
      question:
        "In the DGX SuperPOD reference architecture for DGX H100, which network carries the GPU traffic between nodes during a multi-node training job?",
      options: [
        { id: "A", text: "The InfiniBand compute fabric, which is rail-aligned in groups of nodes", rationale: "Correct. The compute fabric connects the GPU nodes over InfiniBand; traffic between nodes or between rails traverses the spine layer." },
        { id: "B", text: "The in-band management Ethernet network", rationale: "The in-band Ethernet network serves cluster management services, home file systems and access to external services such as the NGC registry." },
        { id: "C", text: "The out-of-band management Ethernet network", rationale: "The out-of-band network connects management ports of systems, switches and PDUs; it does not carry workload traffic." },
        { id: "D", text: "NVLink and NVSwitch inside each DGX system", rationale: "NVLink and NVSwitch connect the eight GPUs within one DGX H100. Traffic between nodes needs the compute fabric." },
      ],
      answer: "A",
      explanation:
        "A SuperPOD separates traffic into a compute fabric, a storage fabric, an in-band management network and an out-of-band management network. Inside a node, GPUs talk over NVLink; between nodes, they talk over the InfiniBand compute fabric.",
      reference: SUPERPOD_NETWORKS,
    },
    {
      id: "aiio-d2-oob-network",
      domain: "d2",
      objective: "Identify key components and considerations of a cluster of an accelerated infrastructure.",
      difficulty: "foundation",
      question:
        "A cluster design needs a network that connects the management ports of the DGX systems, management servers, storage, network switches and rack PDUs. Which SuperPOD network serves this role?",
      options: [
        { id: "A", text: "The compute fabric", rationale: "The compute fabric carries GPU traffic between nodes, not device management ports." },
        { id: "B", text: "The storage fabric", rationale: "The storage fabric carries storage I/O to the high-performance file system." },
        { id: "C", text: "The in-band management network", rationale: "The in-band network carries management services and user-facing access such as home directories and NGC; it is not the network for device management ports." },
        { id: "D", text: "The out-of-band management network", rationale: "Correct. The reference architecture's out-of-band Ethernet fabric connects the management ports of DGX systems, management servers, storage, networking gear and rack PDUs." },
      ],
      answer: "D",
      explanation:
        "Keeping device management on a separate out-of-band network means administrators can still reach hardware when the data networks or operating systems are down. It is a standard building block of an accelerated cluster.",
      reference: SUPERPOD_NETWORKS,
    },
    {
      id: "aiio-d2-mig-consolidation",
      domain: "d2",
      objective: "Scale a GPU infrastructure for different use cases.",
      difficulty: "advanced",
      question:
        "Several small inference services each use only a fraction of an H100 GPU. The owners need predictable latency and want a fault in one service not to affect the others. What is the most suitable approach?",
      options: [
        { id: "A", text: "Give each service its own full GPU so that nothing is shared", rationale: "This isolates the services but leaves most of each GPU idle, which is the utilisation problem MIG is designed to solve." },
        { id: "B", text: "Run all services as ordinary processes on one GPU without partitioning", rationale: "Unpartitioned sharing lets one workload thrash caches or saturate memory bandwidth for the others, so latency is not predictable." },
        { id: "C", text: "Partition the GPU with Multi-Instance GPU (MIG) into isolated instances", rationale: "Correct. MIG splits supported GPUs into up to seven instances with separate paths through the memory system, a defined quality of service and fault isolation." },
        { id: "D", text: "Add a BlueField DPU to the server", rationale: "A DPU offloads infrastructure functions; it does not partition GPU compute or memory between workloads." },
      ],
      answer: "C",
      explanation:
        "MIG assigns L2 cache banks, memory controllers and SMs to each instance, so one tenant cannot affect another's throughput or scheduling. That makes it a good way to scale right-sized GPU capacity for many small workloads.",
      reference: { label: "NVIDIA Multi-Instance GPU User Guide: Introduction", url: "https://docs.nvidia.com/datacenter/tesla/mig-user-guide/introduction.html" },
    },
    {
      id: "aiio-d2-psu-redundancy",
      domain: "d2",
      objective: "Identify key concepts and high-level specifications related to power and cooling requirements within a data center.",
      difficulty: "intermediate",
      question:
        "The DGX H100 user guide lists six 3.3 kW power supplies in a 4+2 redundant configuration. What does the 4+2 configuration mean?",
      options: [
        { id: "A", text: "All six supplies must be working for the system to start", rationale: "A redundant configuration exists precisely so that the system does not depend on every supply." },
        { id: "B", text: "Four supplies carry the load and two are redundant, so the system can tolerate the loss of up to two supplies", rationale: "Correct. In a 4+2 design four supplies are sufficient for operation and the remaining two provide redundancy." },
        { id: "C", text: "The whole system draws at most 3.3 kW", rationale: "3.3 kW is the rating of each supply; the system is specified for considerably more, up to 10.2 kW." },
        { id: "D", text: "Four supplies power the GPUs and two power the CPUs", rationale: "The notation describes redundancy, not a split of supplies between components." },
      ],
      answer: "B",
      explanation:
        "Power redundancy notation tells facility planners how many supplies are needed and how many can fail. With a single DGX H100 rated at up to 10.2 kW, rack power and cooling must be planned for far higher density than typical CPU servers.",
      reference: { label: "NVIDIA DGX H100 User Guide: Introduction to the DGX H100 System", url: "https://docs.nvidia.com/dgx/dgxh100-user-guide/introduction-to-dgxh100.html" },
    },

    /* ── d3: AI Operations (22%) ──────────────────────────────────────────── */
    {
      id: "aiio-d3-dcgm-diagnostics",
      domain: "d3",
      objective: "Describe AI data center management and monitoring essentials.",
      difficulty: "intermediate",
      question:
        "After a GPU board is replaced, an administrator wants the most thorough DCGM diagnostic, including memory, PCIe/NVLink and stress tests, before returning the node to production. Which command fits?",
      options: [
        { id: "A", text: "dcgmi diag -r 1", rationale: "Level 1 is a quick check that runs in seconds; it does not include stress testing." },
        { id: "B", text: "dcgmi health -c", rationale: "This reports the status of the background health watches. It is non-invasive and does not run active stress tests." },
        { id: "C", text: "dcgmi diag -r 2", rationale: "Level 2 is a medium run of about two minutes; it is less thorough than level 3." },
        { id: "D", text: "dcgmi diag -r 3", rationale: "Correct. Level 3 is the long diagnostic of about 15 minutes and includes memory, PCIe/NVLink and stress tests." },
      ],
      answer: "D",
      explanation:
        "DCGM separates passive health monitoring, which runs alongside jobs, from active diagnostics, which need the GPU to themselves. Deeper diagnostic levels take longer and are the right choice after hardware changes.",
      reference: { label: "NVIDIA DCGM User Guide: Feature Overview", url: "https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/feature-overview.html" },
    },
    {
      id: "aiio-d3-gpu-operator",
      domain: "d3",
      objective: "Describe AI cluster orchestration and job scheduling essentials.",
      difficulty: "foundation",
      question:
        "A Kubernetes team wants to automate installing and managing the NVIDIA driver, the container toolkit, the Kubernetes device plugin, GPU Feature Discovery and DCGM-based monitoring on every GPU node. What should it deploy?",
      options: [
        { id: "A", text: "The NVIDIA GPU Operator", rationale: "Correct. The GPU Operator uses the Kubernetes operator framework to automate the management of all NVIDIA software components needed to provision GPUs." },
        { id: "B", text: "Slurm", rationale: "Slurm schedules batch jobs; it does not install and manage NVIDIA software on Kubernetes nodes." },
        { id: "C", text: "NVIDIA Unified Fabric Manager", rationale: "UFM manages InfiniBand fabrics, not GPU node software in Kubernetes." },
        { id: "D", text: "The NVIDIA Virtual GPU Manager", rationale: "The Virtual GPU Manager runs in a hypervisor to share GPUs between virtual machines; it does not manage Kubernetes node components." },
      ],
      answer: "A",
      explanation:
        "Without the operator, each GPU node needs drivers, runtime, device plugin and monitoring installed and kept in step by hand. The GPU Operator handles that life cycle so Kubernetes can schedule GPU workloads reliably.",
      reference: { label: "NVIDIA GPU Operator: Overview", url: "https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/overview.html" },
    },
    {
      id: "aiio-d3-gpu-passthrough",
      domain: "d3",
      objective: "Identify the key considerations for virtualizing accelerated infrastructure.",
      difficulty: "intermediate",
      question:
        "A virtual machine running a large training job must have exclusive use of an entire physical GPU, with no sharing with other VMs. Which virtualization option fits?",
      options: [
        { id: "A", text: "A time-sliced vGPU", rationale: "Time-sliced vGPU lets several VMs share one physical GPU, which is not exclusive use." },
        { id: "B", text: "A MIG-backed vGPU", rationale: "A MIG-backed vGPU maps to one GPU instance, a partition of the physical GPU, rather than the whole device." },
        { id: "C", text: "GPU passthrough", rationale: "Correct. With passthrough the entire physical GPU is assigned to one VM, bypassing the NVIDIA Virtual GPU Manager, and is used only by that VM's driver." },
        { id: "D", text: "Installing the NVIDIA License System client in the VM", rationale: "Licensing is a separate requirement for vGPU software; it does not decide how the GPU is allocated." },
      ],
      answer: "C",
      explanation:
        "NVIDIA vGPU lets multiple VMs share a GPU, either time-sliced or backed by MIG instances. Passthrough is the choice when one VM needs the whole GPU and sharing is not wanted.",
      reference: { label: "NVIDIA vGPU Software User Guide: Introduction", url: "https://docs.nvidia.com/vgpu/latest/grid-vgpu-user-guide/grid-vgpu-introduction.html" },
    },
  ],
};
