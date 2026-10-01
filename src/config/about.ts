import { P } from "@/lib/placeholder";

/**
 * About page content that only you can provide.
 * Nothing here is invented — replace each P(...) with real, verifiable information,
 * or delete the field (and its block on the About page) if you prefer not to share it.
 */
export const about = {
  story: P(
    "2–3 sentences on why CertRamp exists: how it started, what problem you saw with existing practice tests. Only real history.",
  ),
  founder: {
    // Name, role and bio are taken from your public Udemy instructor profile. Edit freely.
    name: "Joshua Ravnjak",
    role: "Founder, CertRamp Learning",
    bio: "I create realistic practice exams for IT and professional certifications, designed to help you measure your knowledge, identify weak areas and build confidence before the real exam.",
    /** Put the image in /public/images and reference it as "/images/xyz.jpg". */
    photo: "/images/joshua-ravnjak.jpg" as string | null,
    photoAlt: "Joshua Ravnjak, founder of CertRamp Learning",
  },
  location: "Munich, Germany",
  udemyNote: P(
    "Optional factual statement about your Udemy track record (e.g. courses, students, rating) — with source and date",
  ),
};
