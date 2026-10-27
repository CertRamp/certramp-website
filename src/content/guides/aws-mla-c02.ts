import type { ExamGuide } from "@/config/types";

/**
 * MLA-C02 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const awsMlaC02Guide: ExamGuide = {
  slug: "aws-mla-c02",
  summary:
    "MLA-C02 (AWS Certified Machine Learning Engineer – Associate) tests whether you can prepare data, build, deploy, operate and secure both traditional ML models and foundation models on AWS, using Amazon SageMaker AI, Amazon Bedrock and related services. It replaces MLA-C01: the English beta has run since 29 September 2026 with 85 questions in 170 minutes, and the passing score is 720 on a scale of 100–1,000.",
  whoFor: [
    "ML and MLOps engineers who train, deploy and monitor models on Amazon SageMaker AI",
    "Developers, data engineers and data scientists adding generative AI, RAG or agents with Amazon Bedrock",
    "MLA-C01 candidates who need to know what the new version adds before booking",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What MLA-C02 actually tests",
      paragraphs: [
        "The exam guide has four content domains: Data Preparation for ML and AI (28%), ML Model and Foundation Model (FM) Development (24%), Deployment and Orchestration of ML and AI Workflows (24%) and Operating, Monitoring, and Securing ML and AI Solutions (24%). Each domain has three task statements, and every task statement now spans traditional ML and generative AI.",
        "Expect engineering decisions rather than theory: which storage and data format to use, how to chunk documents for RAG, which inference option fits a workload, how to automate retraining and deployment, how to control cost per token or per instance hour, and how to lock down endpoints, credentials and sensitive data. The guide names services directly, including SageMaker Feature Store, SageMaker Model Registry, MLflow on SageMaker AI, Amazon Bedrock knowledge bases, Bedrock Guardrails, Bedrock Prompt Management and Amazon Bedrock AgentCore Observability.",
      ],
    },
    {
      id: "whats-new",
      heading: "What changed from MLA-C01",
      paragraphs: [
        "AWS kept the domain structure and the 12 task statements, but broadened them to cover generative AI, agentic AI and foundation models. Its comparison page lists 45 new skill statements, for example vector databases, embedding models, RAG document preparation, Bedrock model selection, LLM-as-a-judge evaluation, agent deployment and state management, token cost monitoring and Bedrock API keys. Seven statements were removed, including SageMaker Neo edge optimisation, model size reduction techniques and bring-your-own-container.",
        "The weights moved slightly: model development fell from 26% to 24% and deployment and orchestration rose from 22% to 24%. The last day to take MLA-C01 in English was 28 September 2026. AWS's 1 September 2026 announcement gives 14 January 2027 as the start of MLA-C02 general availability in all languages, when MLA-C01 retires; the certification page still lists GA dates as TBD. Until then MLA-C01 remains available in Japanese, Korean and Simplified Chinese.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Read the MLA-C02 exam guide line by line",
          body: "Go through every skill in the four domains and mark it as known, unsure or new. If you studied for MLA-C01, start with the comparison page: the 45 added statements are where your gaps are most likely to be.",
        },
        {
          title: "Build the classic SageMaker AI pipeline once",
          body: "In your own account, process data, train a model with a built-in algorithm or script mode, tune it, register it in the Model Registry and deploy it to an endpoint. Then delete the endpoint so it stops costing money.",
        },
        {
          title: "Build a small RAG application on Amazon Bedrock",
          body: "Create a knowledge base on a few documents, compare chunking strategies, add a guardrail and run an evaluation. This covers several of the new skills in domains 1–3.",
        },
        {
          title: "Learn the deployment and cost options as a decision table",
          body: "Real-time, serverless, asynchronous and batch inference; on-demand versus provisioned capacity; Spot for training; instance families for CPU, GPU and accelerator workloads. Know which requirement points to which option.",
        },
        {
          title: "Cover monitoring and security",
          body: "Drift detection, A/B and shadow testing, CloudWatch and AgentCore Observability, IAM least privilege, VPC isolation, CloudTrail and AWS Config, and the choice between Bedrock API keys and IAM credentials.",
        },
        {
          title: "Practise under exam conditions",
          body: "Take timed practice exams and read every explanation. The beta gives you 170 minutes for 85 questions, and multiple-response questions only score if you select every correct option.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying only MLA-C01 material. Older courses barely touch Bedrock, RAG, agents or LLM evaluation, which now appear in every domain.",
        "Ignoring traditional ML. Feature engineering, built-in algorithms, hyperparameter tuning, overfitting and bias metrics are still in the outline.",
        "Choosing services by name rather than by requirement. Read for the deciding constraint: payload size, latency, idle time, data volume or compliance.",
        "Forgetting cost. Every domain has cost trade-offs, from storage formats to token usage and purchasing options.",
        "Treating security as an afterthought. Domain 4 covers IAM, VPCs, logging, vulnerability scanning, credential types and guardrails for sensitive data.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the MLA-C02 exam and what is the passing score?",
      answer:
        "The beta exam has 85 questions in 170 minutes. The exam guide sets the minimum passing score at 720 on a scaled score of 100–1,000, with compensatory scoring, so you only need to pass the exam overall, not each domain. Beta questions that are not scored do not affect your result. The exam guide describes 50 scored and 15 unscored questions; AWS has not yet published the question count or duration for the GA exam.",
    },
    {
      question: "Is MLA-C02 replacing MLA-C01?",
      answer:
        "Yes. The last day to take MLA-C01 in English was 28 September 2026, and MLA-C02 beta delivery began on 29 September 2026. AWS's September 2026 announcement gives 14 January 2027 for general availability, when MLA-C01 is retired in all languages (the certification page still shows the GA date as TBD). An MLA-C01 certification you already hold stays active until its original expiry date.",
    },
    {
      question: "Which languages is MLA-C02 available in?",
      answer:
        "The beta is English only. AWS states that Japanese, Korean and Simplified Chinese will follow at general availability.",
    },
    {
      question: "How long is the certification valid?",
      answer:
        "AWS Certified Machine Learning Engineer – Associate is valid for 3 years. To recertify, you pass the latest version of the exam before your certification expires.",
    },
    {
      question: "Are CertRamp's MLA-C02 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the published MLA-C02 exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "MLA-C02 Exam Guide 2026: AWS ML Engineer Associate",
    description:
      "MLA-C02 guide: 4 domains and weights, passing score 720, what changed from MLA-C01 (Bedrock, RAG, agents), beta dates and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
