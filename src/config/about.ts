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
    position: "Senior Consultant at a large IT management consultancy",
    positionDe: "Senior Consultant bei einer großen IT-Unternehmensberatung",
    bio: "I have worked in IT consulting for more than 12 years and hold a wide range of certifications myself. Every CertRamp practice exam is written with that experience: the way real exams phrase things, where candidates usually slip, and what it takes to be ready on exam day.",
    bioDe:
      "Ich arbeite seit über 12 Jahren in der IT-Beratung und habe selbst zahlreiche Zertifizierungen abgelegt. Diese Erfahrung steckt in jeder CertRamp-Übungsprüfung: wie echte Prüfungen formulieren, wo Kandidaten typischerweise stolpern und was es braucht, um am Prüfungstag bereit zu sein.",
    /** Short credential tags. Keep them factual. */
    credentials: [
      "IREB® CPRE Foundation Level",
      "ITIL® 4 Foundation",
      "Scrum.org",
      "Scaled Agile, Inc.",
      "GASQ",
      "Microsoft",
      "Anthropic Claude",
    ],
    credentialsNote: "Certifications from Scrum.org, Scaled Agile, Inc., PeopleCert, GASQ, Microsoft and Anthropic, among others.",
    credentialsNoteDe: "Zertifizierungen u. a. von Scrum.org, Scaled Agile, Inc., PeopleCert, GASQ, Microsoft und Anthropic.",
    trademarkNote: "ITIL® is a registered trademark of PeopleCert. IREB® is a registered trademark of IREB e.V.",
    trademarkNoteDe: "ITIL® ist eine eingetragene Marke von PeopleCert. IREB® ist eine eingetragene Marke des IREB e.V.",
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
