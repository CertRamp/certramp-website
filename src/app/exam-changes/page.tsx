import type { Metadata } from "next";
import { ExamChangesView, examChangesCopy } from "@/components/content/ExamChangesView";
import { absoluteUrl } from "@/config/site";
import { deExamChangesPath, examChangesFeedPath, examChangesPath } from "@/lib/exam-changes";
import { buildMetadata } from "@/lib/seo";

const l = examChangesCopy.en;

const base = buildMetadata({
  title: l.seoTitle,
  description: l.description,
  path: examChangesPath,
  ogType: "article",
  languages: { en: examChangesPath, de: deExamChangesPath },
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": [{ url: absoluteUrl(examChangesFeedPath), title: "CertRamp exam changes (RSS)" }] },
  },
};

export default function ExamChangesPage() {
  return <ExamChangesView locale="en" />;
}
