import type { Metadata } from "next";
import { QuestionsMadeView, questionsMadeCopy } from "@/components/blocks/QuestionsMadeView";
import { questionsMadePath } from "@/lib/course-data";
import { buildMetadata } from "@/lib/seo";

const l = questionsMadeCopy.de;

export const metadata: Metadata = buildMetadata({
  title: l.seoTitle,
  description: l.description,
  path: questionsMadePath("de"),
  locale: "de",
  languages: { en: questionsMadePath("en"), de: questionsMadePath("de") },
});

export default function WieUnsereFragenEntstehenPage() {
  return <QuestionsMadeView locale="de" />;
}
