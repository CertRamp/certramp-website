import { P } from "@/lib/placeholder";

/**
 * Legal pages configuration.
 *
 * ⚠️  LEGAL REVIEW REQUIRED BEFORE PUBLICATION ⚠️
 * No legal text has been written for you. The owner is based in Germany and
 * sells internationally (consumer law, VAT, GDPR/DSGVO, DDG imprint duties,
 * cookie consent under TDDDG, etc.). Have a qualified lawyer or a reputable
 * legal-text service provide the content.
 *
 * Set `reviewed: true` for a page only once its final, reviewed text is in
 * place. Until then, the page shows a warning banner and is `noindex`.
 */

export interface LegalPageConfig {
  slug: "imprint" | "privacy" | "terms" | "cookies";
  title: string;
  description: string;
  reviewed: boolean;
  /**
   * Final reviewed legal text as HTML (e.g. exported from your legal-text provider).
   * `null` renders the outline of information to prepare instead.
   */
  html: string | null;
  /** What needs to be prepared — a checklist for you and your lawyer, NOT legal text. */
  checklist: string[];
}

export const legalEntity = {
  name: P("Legal name of the business / sole proprietor"),
  address: P("Full postal address"),
  email: P("Contact email"),
  phone: P("Phone number (if required)"),
  representative: P("Person responsible / legal representative"),
  register: P("Commercial register and number (if applicable)"),
  vatId: P("VAT identification number (if applicable)"),
};

export const legalPages: Record<LegalPageConfig["slug"], LegalPageConfig> = {
  imprint: {
    slug: "imprint",
    title: "Imprint / Legal Notice",
    description: "Legal notice (Impressum) for CertRamp Learning.",
    reviewed: false,
    html: null,
    checklist: [
      "Provider identification and contact details (see legalEntity above)",
      "Information required for your business type and registration status",
      "Responsible person for editorial content, if applicable",
      "EU online dispute resolution / consumer arbitration statement, as advised",
    ],
  },
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    description: "How CertRamp Learning processes personal data.",
    reviewed: false,
    html: null,
    checklist: [
      "Controller identity and contact details",
      "Hosting provider and server logs (e.g. Vercel or your chosen host)",
      "ClassMarker as exam platform: data processed, processing agreement, international transfers",
      "Payment processing at checkout (whichever provider ClassMarker checkout uses)",
      "Links to Udemy and other third-party sites",
      "Analytics or marketing tools — only if you enable any",
      "Contact by email",
      "Data subject rights, retention periods and legal bases",
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    description: "Terms for purchasing and using the CertRamp Exam Simulator.",
    reviewed: false,
    html: null,
    checklist: [
      "Scope and contracting party",
      "Description of the digital product and access period",
      "Prices, taxes and payment",
      "Right of withdrawal for digital content (consumers) and its expiry conditions",
      "Usage rights and prohibited sharing of test content",
      "Disclaimer: independent practice material, no official affiliation, no pass guarantee",
      "Liability, governing law and jurisdiction as advised",
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Cookie Information",
    description: "Information about cookies and similar technologies on this website.",
    reviewed: false,
    html: null,
    checklist: [
      "This site sets no tracking cookies by default and loads no analytics scripts",
      "Fonts are self-hosted — no requests to Google Fonts",
      "Embedded ClassMarker tests (if used) may set cookies from the exam platform",
      "If you add analytics or marketing tools: consent banner and cookie list required",
    ],
  },
};
