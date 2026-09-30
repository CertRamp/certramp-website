import type { FaqItem } from "./types";
import { productPolicy } from "./product";

/**
 * Site-wide FAQ. Shown on /faq and (a subset) on the home page.
 * Answers that depend on undefined product conditions pull from product.ts,
 * so they show as placeholders until you define them there.
 */
export const globalFaq: { group: string; items: FaqItem[] }[] = [
  {
    group: "About CertRamp",
    items: [
      {
        question: "What is CertRamp?",
        answer:
          "CertRamp Learning is an independent exam-preparation brand. We create progressive practice exams for professional certifications in IT, project management, cybersecurity and governance — six tests per certification that increase in difficulty, so you can measure where you stand and build up to exam level.",
      },
      {
        question: "Are these official certification exams?",
        answer:
          "No. CertRamp practice exams are independent study material written by CertRamp. They are not official exams and are not affiliated with, endorsed by or sponsored by any certification body. Passing a CertRamp test does not award a certification — certifications are issued only by the organisation that owns them.",
      },
      {
        question: "Where do I take the real certification exam?",
        answer:
          "The official exam is booked and taken through the certification body or its authorised exam provider. Check the official website of the organisation that issues your certification for registration, pricing and exam rules.",
      },
    ],
  },
  {
    group: "The practice exams",
    items: [
      {
        question: "How do the practice exams work?",
        answer:
          "Each certification has six practice tests that grow with you. Test 1 is a diagnostic that shows your starting point. Tests 2 and 3 build and strengthen your knowledge. Test 4 is set at real exam level. Tests 5 and 6 go further — targeting weak areas and finally going beyond exam difficulty. Take them in order, review your results, and repeat.",
      },
      {
        question: "Where do I take the practice exams?",
        answer:
          "CertRamp practice exams are available as Udemy courses today — you take them on Udemy, in the browser or the Udemy app. The CertRamp Exam Simulator, offered directly by CertRamp, will run online in your browser with nothing to install.",
      },
      {
        question: "What does the free practice test include?",
        answer: productPolicy.freeTestScope,
      },
      {
        question: "How many attempts do I receive?",
        answer: productPolicy.attempts,
      },
      {
        question: "Will I receive explanations?",
        answer: productPolicy.explanations,
      },
      {
        question: "What do I see after finishing a test?",
        answer: productPolicy.resultsFeedback,
      },
      {
        question: "Can I access the exams on mobile?",
        answer: productPolicy.mobileAccess,
      },
    ],
  },
  {
    group: "Buying & access",
    items: [
      {
        question: "What is the difference between Udemy and the CertRamp Exam Simulator?",
        answer: productPolicy.udemyVsSimulator,
      },
      {
        question: "How long do I have access?",
        answer: productPolicy.accessPeriod,
      },
      {
        question: "How do I receive access after buying?",
        answer: productPolicy.accessDelivery,
      },
      {
        question: "Which payment methods are accepted?",
        answer: productPolicy.paymentMethods,
      },
      {
        question: "Can I get a refund?",
        answer: productPolicy.refunds,
      },
    ],
  },
];

/** Questions shown on the home page (by exact question text). */
export const homeFaqQuestions = [
  "What is CertRamp?",
  "Are these official certification exams?",
  "How do the practice exams work?",
  "What is the difference between Udemy and the CertRamp Exam Simulator?",
  "Can I access the exams on mobile?",
];

/** Generic questions appended to every certification page. `{name}` is replaced with the certification name. */
export const certificationFaqTemplate: FaqItem[] = [
  {
    question: "Are these the official {name} exam questions?",
    answer:
      "No. These are independent practice questions written by CertRamp to reflect the topics and style of the {name} exam. CertRamp is not affiliated with or endorsed by the certification body, and our tests are not official exams.",
  },
  {
    question: "Which test should I start with?",
    answer:
      "Start with Test 1, the diagnostic. It shows your baseline across the syllabus. Then work through the tests in order — each one is harder than the last.",
  },
  {
    question: "How do I know if I'm ready for the {name} exam?",
    answer:
      "Test 4 is set at real exam level, so a consistent result there is your clearest readiness signal. Tests 5 and 6 push past that level; if you can handle those, you have margin to spare. No practice test can guarantee a pass, but it can show you exactly where you stand.",
  },
];

export function allGlobalFaqItems(): FaqItem[] {
  return globalFaq.flatMap((g) => g.items);
}
