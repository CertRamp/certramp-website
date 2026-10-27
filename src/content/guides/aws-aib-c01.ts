import type { ExamGuide } from "@/config/types";

/**
 * AWS AIB-C01 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const awsAibC01Guide: ExamGuide = {
  slug: "aws-aib-c01",
  summary:
    "AIB-C01 (AWS Certified AI Business Strategist) tests whether you can turn AI capabilities into business outcomes: choose the right kind of AI solution, build the business case, govern AI responsibly and scale it across an organisation. The exam is currently in beta with 85 questions in 170 minutes, a passing score of 700 on a 100–1,000 scale, and no coding or AWS implementation experience required.",
  whoFor: [
    "Product and program managers, business analysts and consultants who evaluate or champion AI initiatives",
    "Line-of-business leaders, sales and marketing professionals who work alongside technical AI teams",
    "Professionals with around six months of experience on or alongside AI projects who want a business-focused AWS credential",
  ],
  sections: [
    {
      id: "what-the-exam-tests",
      heading: "What AIB-C01 actually tests",
      paragraphs: [
        "The exam guide has four content domains. AI Strategy and Business Value Creation carries 28% of the scored content; AI Fundamentals and Literacy, AI Governance and Responsible AI Leadership, and Business Readiness, Leadership, and AI Transformation carry 24% each. AWS states that the exam prioritises strategic decision-making over technical implementation.",
        "Expect business scenarios rather than configuration steps. Typical decisions: AI or rule-based automation, RAG or fine-tuning, build, buy or partner, which KPIs and baselines prove value, when to scale, pause or stop an initiative, which safeguards need human oversight, and how to close readiness gaps across people, process, technology and governance.",
        "AWS services appear only at a strategic level: Amazon Bedrock, Amazon SageMaker AI and Amazon Quick, plus the AWS Cloud Adoption Framework, the shared responsibility model, AI pricing models and cost tools such as AWS Pricing Calculator, AWS Cost Explorer and AWS Marketplace. Coding, model tuning, data engineering and administering AWS services are explicitly out of scope.",
      ],
    },
    {
      id: "beta-and-structure",
      heading: "Beta status and exam structure",
      paragraphs: [
        "AWS announced the certification on 1 September 2026. Beta registration opened that day and beta exam delivery began on 29 September 2026. The certification page lists the beta exam with 85 questions and 170 minutes; the exam guide states 130 minutes. AWS notes that a beta exam contains more questions than the standard version of the same exam, and it has not yet published a date for the standard exam.",
        "Questions are multiple choice (one correct answer out of four) or multiple response (two or more correct answers out of five or more, and you must select all of them for credit). Unanswered questions count as incorrect, so always answer. Scoring is compensatory: you only need 700 overall, not a pass in every domain. Candidates who earn the certification by 15 February 2027 also receive an Early Adopter badge.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Map yourself against the exam guide",
          body: "Go through every task statement and skill in the four domains of the official AIB-C01 exam guide and mark each as known, unsure or new. Because three domains weigh 24% and one 28%, no area can be skipped.",
        },
        {
          title: "Secure the AI vocabulary",
          body: "Be precise about AI versus ML versus generative AI, training versus inference, structured versus unstructured data, tokens and context windows, RAG versus fine-tuning, AI agents and model drift. Many scenario questions turn on one of these distinctions.",
        },
        {
          title: "Practise the business case",
          body: "Work through examples of KPIs (tangible and intangible), baselines measured before go-live, ROI calculations, leading indicators and cost controls. Learn the AWS pricing models at a high level: consumption-based, instance-based and seat-based.",
        },
        {
          title: "Study governance and responsible AI",
          body: "Review the responsible AI dimensions (fairness, explainability, privacy, safety, transparency, robustness), risk classification, cross-functional governance boards, human oversight and guardrails, IP and harmful content risks. Read the AWS Well-Architected Responsible AI Lens and look at the ISO/IEC 42001 and ISO/IEC 23053 scope.",
        },
        {
          title: "Learn the transformation playbook",
          body: "Use the AWS Cloud Adoption Framework to think about readiness and maturity, and practise the phased approach the guide names: envision, experiment, launch, scale. Know what a centre of excellence does and how change management and AI literacy programmes support adoption.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams and read every explanation, including for questions you answered correctly. With multiple-response questions, practise checking each option on its own merits. Book once you pass several practice exams with a margin.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying technical depth that is out of scope. You will not be asked to tune hyperparameters, write code or configure AWS services; spend that time on business decisions instead.",
        "Assuming AI is always the answer. The guide explicitly tests when rule-based automation is better and when AI is not the appropriate solution at all.",
        "Measuring value without a baseline. Without metrics captured before the AI solution goes live, you cannot show what changed.",
        "Treating responsible AI as an afterthought. The exam expects governance by design, built into project planning from the start, and clear accountability.",
        "Confusing RAG and fine-tuning. RAG grounds answers in current company content at query time; fine-tuning adapts a model's behaviour or style through additional training.",
        "Ignoring people and culture. Executive sponsorship, communication about workforce effects and AI literacy are part of the outline, not soft extras.",
      ],
    },
  ],
  faq: [
    {
      question: "How long is the AIB-C01 exam and what is the passing score?",
      answer:
        "The beta exam has 85 questions and lasts 170 minutes, according to the AWS certification page. The exam guide states 130 minutes; AWS notes that beta exams contain more questions than the standard version. Results are reported on a scaled score of 100–1,000 and the minimum passing score is 700.",
    },
    {
      question: "How much does the AIB-C01 exam cost?",
      answer:
        "AWS lists the beta exam at 50 USD and the standard exam at 100 USD. Foreign exchange rates and other costs may apply depending on your location; check the AWS exam pricing page before booking.",
    },
    {
      question: "Do I need technical or AWS experience?",
      answer:
        "No. There are no prerequisites and no other AWS certification is required. AWS expects basic familiarity with AI concepts and a business-level awareness of AWS AI services, and recommends about six months of experience working with or alongside AI initiatives.",
    },
    {
      question: "How long is the certification valid?",
      answer:
        "AWS states that candidates who pass a beta exam earn the applicable AWS Certification, which is active for three years.",
    },
    {
      question: "Are CertRamp's AIB-C01 questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against the published AIB-C01 exam guide. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "AIB-C01 Exam Guide 2026: AWS AI Business Strategist",
    description:
      "AWS AIB-C01 guide: 85 questions in 170 minutes (beta), passing score 700, four domains on AI strategy, value, governance and transformation, plus a study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
