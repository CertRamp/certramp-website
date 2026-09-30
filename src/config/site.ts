import { P } from "@/lib/placeholder";

/**
 * Global site configuration.
 * Everything wrapped in P("...") still has to be provided before launch.
 */

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
  name: "CertRamp Learning",
  shortName: "CertRamp",
  tagline: "Practice harder. Enter confident.",
  philosophy: "Six Tests That Grow With You",
  description:
    "Independent, progressive practice exams for IT, project management, cybersecurity and governance certifications. Six tests that grow with you — from diagnostic to beyond exam level.",
  url: rawSiteUrl.replace(/\/+$/, ""),
  locale: "en",
  /** Only the real production deployment should set NEXT_PUBLIC_ALLOW_INDEXING=true. */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",

  contact: {
    email: P("Public contact email address"),
  },

  /** Your Udemy instructor profile. Leave as P(...) until provided. */
  udemyProfileUrl: "https://www.udemy.com/user/joshua-ravnjak/",

  /** Optional social profiles. Remove entries you don't use; nothing is shown while a value is a placeholder. */
  social: {
    linkedin: P("LinkedIn page URL (optional)"),
  },
} as const;

/** Main navigation — order here is the order in the header. */
export const mainNav = [
  { label: "Practice Exams", href: "/practice-exams" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

export const legalNav = [
  { label: "Imprint", href: "/legal/imprint" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
] as const;

/**
 * Build an absolute URL from a site path. Page paths get a trailing slash to
 * match the static export (`trailingSlash: true`); file paths (with an
 * extension), queries and anchors are left as they are.
 */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  let p = path.startsWith("/") ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+$/i.test(p.split(/[?#]/)[0]);
  if (!isFile && !/[?#]/.test(p) && !p.endsWith("/")) p = `${p}/`;
  return `${siteConfig.url}${p}`;
}
