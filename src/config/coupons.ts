/**
 * Udemy coupons shown on the website.
 *
 * Each entry belongs to one Udemy course (matched by its course path, e.g. "/course/cisa-practice-exams-information-systems-auditor/").
 * While a coupon is active at build time, the course link gets `couponCode=<code>` and the course list shows the offer.
 * After `endsAt` the coupon is ignored on the next build, so expired codes disappear automatically.
 *
 * Udemy limits (Nov 2026): free targeted coupons = 100 redemptions, 31 days; max. 3 coupons per course starting per month.
 */
export interface CourseCoupon {
  /** Udemy course path, with leading and trailing slash. */
  coursePath: string;
  code: string;
  kind: "free" | "discount";
  /** Maximum redemptions, if limited. */
  maxUses?: number;
  /** ISO timestamp when Udemy ends the coupon. */
  endsAt: string;
  /** Last day the offer can be used, for display (YYYY-MM-DD). */
  lastDay: string;
}

// Free targeted coupons created 2026-11-26 for the A-tier push list (start 2026-11-26 00:00 PST, end 2026-12-27 00:00 PST).
const FREE_NOV_2026 = { kind: "free" as const, maxUses: 100, endsAt: "2026-12-27T08:00:00Z", lastDay: "2026-12-26" };

export const coupons: CourseCoupon[] = [
  { coursePath: "/course/sap-c03-practice-exams-ex-sap-c02-aws-sa-pro/", code: "START-SAPC03", ...FREE_NOV_2026 },
  { coursePath: "/course/pmi-cpmai-practice-exams-ex-cpmai-v7-managing-ai/", code: "START-CPMAI", ...FREE_NOV_2026 },
  { coursePath: "/course/isoiec-42001-foundation-practice-exams-6-aims-mock-tests/", code: "START-42001", ...FREE_NOV_2026 },
  { coursePath: "/course/ogea-101-practice-exams-togaf-10-foundation-part-1/", code: "START-OGEA101", ...FREE_NOV_2026 },
  { coursePath: "/course/ab-650-practice-exams-microsoft-365-ai-services-admin/", code: "START-AB650", ...FREE_NOV_2026 },
  { coursePath: "/course/sc-401-practice-tests-ex-sc-400-information-security/", code: "START-SC401", ...FREE_NOV_2026 },
  { coursePath: "/course/ai-200-practice-tests-2026-ex-az-204-azure-ai-developer/", code: "START-AI200", ...FREE_NOV_2026 },
  { coursePath: "/course/dp-700-practice-tests-fabric-data-engineer-associate-w/", code: "START-DP700", ...FREE_NOV_2026 },
  { coursePath: "/course/aip-c01-practice-exams-aws-generative-ai-developer/", code: "START-AIPC01", ...FREE_NOV_2026 },
  { coursePath: "/course/cs0-004-practice-exams-comptia-cysa-v4-ex-cs0-003/", code: "START-CYSA4", ...FREE_NOV_2026 },
  { coursePath: "/course/aigp-practice-exams-iapp-ai-governance-professional/", code: "START-AIGP", ...FREE_NOV_2026 },
  { coursePath: "/course/aaism-practice-exams-ai-security-management-exam-prep/", code: "START-AAISM", ...FREE_NOV_2026 },
  { coursePath: "/course/istqb-ct-ai-v2-0-ai-testing-certification-practice-exams/", code: "START-CTAI2", ...FREE_NOV_2026 },
  { coursePath: "/course/aws-certified-ai-business-strategist-aib-c01-practice-exams/", code: "START-AIBC01", ...FREE_NOV_2026 },
  { coursePath: "/course/isaca-cobit-7-foundation-practice-exams-ex-cobit-2019/", code: "START-COBIT7", ...FREE_NOV_2026 },
  { coursePath: "/course/ai-201-practice-exams-salesforce-agentforce-specialist/", code: "START-AI201", ...FREE_NOV_2026 },
  { coursePath: "/course/ireb-cpre-foundation-level-330-270-uebungsfragen/", code: "START-IREB", ...FREE_NOV_2026 },
  { coursePath: "/course/cisa-practice-exams-information-systems-auditor/", code: "START-CISA", ...FREE_NOV_2026 },
  { coursePath: "/course/cissp-practice-exams-information-security-professional/", code: "START-CISSP", ...FREE_NOV_2026 },
];
