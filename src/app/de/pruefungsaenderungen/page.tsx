import type { Metadata } from "next";
import { ExamChangesView, examChangesCopy } from "@/components/content/ExamChangesView";
import { deExamChangesPath, examChangesPath } from "@/lib/exam-changes";
import { buildMetadata } from "@/lib/seo";

const l = examChangesCopy.de;

export const metadata: Metadata = buildMetadata({
  title: l.seoTitle,
  description: l.description,
  path: deExamChangesPath,
  ogType: "article",
  locale: "de",
  languages: { en: examChangesPath, de: deExamChangesPath },
});

export default function PruefungsaenderungenPage() {
  return <ExamChangesView locale="de" />;
}
