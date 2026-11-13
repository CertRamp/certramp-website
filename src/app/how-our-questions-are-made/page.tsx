import type { Metadata } from "next";
import { QuestionsMadeView, questionsMadeCopy } from "@/components/blocks/QuestionsMadeView";
import { questionsMadePath } from "@/lib/course-data";
import { buildMetadata } from "@/lib/seo";

const l = questionsMadeCopy.en;

export const metadata: Metadata = buildMetadata({
  title: l.seoTitle,
  description: l.description,
  path: questionsMadePath("en"),
  languages: { en: questionsMadePath("en"), de: questionsMadePath("de") },
});

export default function QuestionsMadePage() {
  return <QuestionsMadeView locale="en" />;
}
