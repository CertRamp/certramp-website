import type { ExamGuide } from "@/config/types";

/**
 * NVIDIA NCA-AIIO exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const nvidiaNcaAiioGuide: ExamGuide = {
  slug: "nvidia-nca-aiio",
  summary:
    "NCA-AIIO (NVIDIA-Certified Associate: AI Infrastructure and Operations) is an entry-level certification for the hardware, networking and operations side of AI: GPUs, accelerated clusters, data center networking, monitoring and virtualization. The exam has 50 questions in 60 minutes, is delivered online with remote proctoring, and the certification is valid for two years.",
  whoFor: [
    "Data center, infrastructure and system administrators who are starting to run GPU servers and AI clusters",
    "Network and storage engineers who need to understand what AI workloads demand from the fabric",
    "IT operations, cloud and pre-sales staff who plan, size or support accelerated infrastructure",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What NCA-AIIO actually tests",
      paragraphs: [
        "NVIDIA publishes three exam topics with fixed weights: AI Infrastructure (40%), Essential AI Knowledge (38%) and AI Operations (22%). The only stated prerequisite is a basic understanding of data center infrastructure, so the exam checks that you can talk sensibly about AI systems rather than build models yourself.",
        "Essential AI Knowledge covers the difference between AI, machine learning and deep learning, why AI adoption has accelerated, key use cases and industries, GPU versus CPU architecture, training versus inference requirements, and the NVIDIA software stack and solutions used across the AI life cycle. Expect to recognise products such as the NGC catalog, NVIDIA AI Enterprise, Triton Inference Server and Base Command Manager by what they do.",
        "AI Infrastructure is the largest area. It covers hardware requirements for training, scaling GPU infrastructure, power and cooling, facility requirements, on-premises versus cloud, cluster components, networking requirements for AI workloads, data center networking protocols and high-speed options, and the purpose of a DPU. AI Operations covers data center management and monitoring, cluster orchestration and job scheduling, the measures used to monitor GPUs, and virtualizing accelerated infrastructure.",
      ],
    },
    {
      id: "how-the-exam-works",
      heading: "How the exam is structured",
      paragraphs: [
        "The exam has 50 questions and you have 60 minutes, so plan for a little over one minute per question. It is offered in English, online and remotely proctored, and you need a Certiverse account to access it.",
        "NVIDIA does not publish a passing score for NCA-AIIO on the certification page. The certification is valid for two years from issuance, and you recertify by retaking the exam. Passing earns a digital badge and an optional certificate.",
        "NVIDIA recommends the self-paced AI Infrastructure and Operations Fundamentals course, which takes about seven hours, and lists suggested reading for each topic area on the exam page. Its recommended background includes experience with enterprise data centers and on-premises compute and a solid understanding of AI and machine learning concepts.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the topic list",
          body: "Go through every bullet on the official NCA-AIIO page and mark it as known, unsure or new. Spend time in proportion to the weights: AI Infrastructure (40%) and Essential AI Knowledge (38%) together make up more than three quarters of the exam.",
        },
        {
          title: "Get the AI basics straight",
          body: "Be able to explain how AI, machine learning and deep learning relate, why GPUs suit parallel workloads (thousands of threads and high throughput rather than fast single threads), and how training and inference differ in compute, latency and throughput needs.",
        },
        {
          title: "Learn the NVIDIA stack by job",
          body: "Build a one-line description for each product: NGC catalog for GPU-optimised containers and models, NVIDIA AI Enterprise for AI software and management tools, Triton for model serving, Base Command Manager for cluster management, UFM for InfiniBand fabrics, DCGM for GPU monitoring, the GPU Operator for Kubernetes nodes.",
        },
        {
          title: "Study a reference cluster",
          body: "Read the DGX SuperPOD reference architecture. Note the separate compute fabric, storage fabric, in-band and out-of-band management networks, where NVLink and NVSwitch fit inside a node, why GPUDirect RDMA matters, and what a BlueField DPU offloads from the host CPU.",
        },
        {
          title: "Cover operations and virtualization",
          body: "Learn the difference between DCGM health monitoring and active diagnostics, how Slurm and Kubernetes schedule GPU work, and when to choose GPU passthrough, time-sliced vGPU or MIG. Know that MIG can split supported GPUs into up to seven isolated instances.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed sets of 50 questions in 60 minutes and read every explanation, including those for questions you got right. Book the exam once you pass consistently with a margin.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying only AI concepts. Infrastructure is the largest topic at 40%, and power, cooling, facilities and networking are easy to underestimate.",
        "Mixing up the networks. NVLink connects GPUs inside a server; the InfiniBand compute fabric connects nodes; management traffic runs on separate Ethernet networks.",
        "Confusing MIG with vGPU sharing. MIG partitions a GPU into isolated instances with their own memory paths; time-sliced vGPU shares a GPU between VMs; passthrough gives one VM the whole GPU.",
        "Treating a DPU as an accelerator for models. A DPU offloads, accelerates and isolates networking, storage, security and management functions.",
        "Ignoring the clock. 50 questions in 60 minutes leaves little time to reason through product names you have not learned.",
      ],
    },
  ],
  faq: [
    {
      question: "How many questions are on the NCA-AIIO exam and how long is it?",
      answer:
        "The exam has 50 questions and you have 60 minutes. It is delivered online with remote proctoring through a Certiverse account and is offered in English.",
    },
    {
      question: "What is the passing score for NCA-AIIO?",
      answer:
        "NVIDIA does not publish a passing score on the NCA-AIIO certification page. Prepare until you pass practice sets with a clear margin rather than aiming for a specific number.",
    },
    {
      question: "Are there prerequisites?",
      answer:
        "NVIDIA lists a basic understanding of data center infrastructure as the prerequisite. Recommended qualifications include a relevant degree, experience with enterprise data centers and on-premises compute, and a solid understanding of AI and machine learning concepts.",
    },
    {
      question: "How long is the certification valid?",
      answer:
        "The certification is valid for two years from issuance. NVIDIA states that recertification may be achieved by retaking the exam.",
    },
    {
      question: "Are CertRamp's NCA-AIIO questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against NVIDIA's published exam topics and NVIDIA documentation. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "NVIDIA NCA-AIIO Exam Guide 2026: Topics, Format & Study Plan",
    description:
      "NCA-AIIO guide: 50 questions in 60 minutes, remote proctored, the three weighted exam topics (40/38/22%) and a six-step study plan for NVIDIA AI infrastructure.",
  },
  published: "2026-11-11",
  updated: "2026-11-11",
};
