import type { Metadata } from "next";
import { ExamChangesView, examChangesCopy } from "@/components/content/ExamChangesView";
import { deExamChangesPath, examChangesPath } from "@/lib/exam-changes";
import { buildMetadata } from "@/lib/seo";

const l = examChangesCopy.en;

export const metadata: Metadata = buildMetadata({
  title: l.seoTitle,
  description: l.description,
  path: examChangesPath,
  ogType: "article",
  languages: { en: examChangesPath, de: deExamChangesPath },
});

export default function ExamChangesPage() {
  return <ExamChangesView locale="en" />;
}
