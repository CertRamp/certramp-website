import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "CertRamp Learning — Practice harder. Enter confident.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Six tests that grow with you",
    title: "Practice harder. Enter confident.",
    subtitle: "Progressive certification practice exams",
  });
}

/** Generated once at build time (static export). */
export const dynamic = "force-static";
