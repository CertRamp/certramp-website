import { P } from "@/lib/placeholder";

/**
 * About page content that only you can provide.
 * Nothing here is invented: replace each P(...) with real, verifiable information,
 * or delete the field (and its block on the About page) if you prefer not to share it.
 *
 * Product copy avoids PeopleCert trademarks (request from PeopleCert, October 2026). The
 * founder's own credentials are stated by their official names, with the ® mark and a notice.
 */
export const about = {
  story: P(
    "2–3 sentences on why CertRamp exists: how it started, what problem you saw with existing practice tests. Only real history.",
  ),
  founder: {
    name: "Joshua Ravnjak",
    role: "Founder, CertRamp Learning",
    roleDe: "Gründer von CertRamp Learning",
    /** Day job, shown under the name. The employer is deliberately not named. */
    position: "Senior Consultant, digital transformation and AI",
    positionDe: "Senior Consultant für digitale Transformation und KI",
    bio: "I have more than 12 years of professional experience and work as a senior consultant in an IT management consultancy, focusing on digital transformation, AI and requirements engineering in the insurance industry. I have earned many certifications myself, so I know what exam preparation feels like. That is why every CertRamp practice exam follows the same progression: an easy start to see where you stand, then real exam level, then beyond it. You walk into the exam with a buffer and a good feeling.",
    bioDe:
      "Ich habe über 12 Jahre Berufserfahrung und arbeite als Senior Consultant in einer IT-Unternehmensberatung, mit Schwerpunkt auf digitaler Transformation, KI und Requirements Engineering in der Versicherungsbranche. Viele Zertifizierungen habe ich selbst abgelegt und weiß, wie sich Prüfungsvorbereitung anfühlt. Deshalb folgt jede CertRamp-Übungsprüfung derselben Progression: ein leichter Einstieg zur Standortbestimmung, dann echtes Prüfungsniveau, dann darüber hinaus. So gehst du mit Puffer und einem guten Gefühl in die Prüfung.",
    /** Selected certifications, by their official names. Keep them factual. */
    credentials: [
      "IREB® CPRE Foundation Level",
      "ITIL® 4 Foundation",
      "Professional Scrum Master I (PSM I)",
      "Professional Scrum Product Owner I (PSPO I)",
      "Certified SAFe® 6 Scrum Master",
      "Certified AI-Empowered SAFe® 6 Product Owner/Product Manager",
    ],
    moreCredentials: "Plus further certifications from Microsoft and Anthropic (Claude).",
    moreCredentialsDe: "Dazu weitere Zertifizierungen von Microsoft und Anthropic (Claude).",
    trademarkNote:
      "ITIL® is a registered trademark of PeopleCert. IREB® is a registered trademark of IREB e.V. SAFe® is a registered trademark of Scaled Agile, Inc. PSM and PSPO are trademarks of Scrum.org.",
    trademarkNoteDe:
      "ITIL® ist eine eingetragene Marke von PeopleCert. IREB® ist eine eingetragene Marke des IREB e.V. SAFe® ist eine eingetragene Marke von Scaled Agile, Inc. PSM und PSPO sind Marken von Scrum.org.",
    /** Put the image in /public/images and reference it as "/images/xyz.jpg". */
    photo: "/images/joshua-ravnjak.jpg" as string | null,
    photoAlt: "Joshua Ravnjak, founder of CertRamp Learning",
  },
  book: {
    title: "CPRE Foundation Level Prüfungsvorbereitung 2026",
    subtitle: "6 Übungsprüfungen mit 270 Fragen und ausführlichen Erklärungen",
    format: "Paperback, German, October 2026",
    formatDe: "Taschenbuch, Oktober 2026",
    url: "https://amzn.eu/d/05ut1xWB",
    cover: "/images/cpre-book-cover.jpg",
    coverAlt: "Cover: CPRE Foundation Level Prüfungsvorbereitung 2026 by Joshua Ravnjak",
    /** Certification pages that show the book prominently. */
    certSlug: "ireb-cpre-foundation-level",
  },
  location: "Munich, Germany",
  udemyNote: P(
    "Optional factual statement about your Udemy track record (e.g. courses, students, rating), with source and date",
  ),
};
