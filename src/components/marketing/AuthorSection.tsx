import Image from "next/image";
import { TrackedLink } from "@/components/analytics/Tracked";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { about } from "@/config/about";
import { cn } from "@/lib/cn";

type Lang = "en" | "de";

const copy = {
  en: {
    eyebrow: "Who writes the exams",
    title: "Written by a practitioner, not a question mill",
    bookEyebrow: "Also in print",
    bookCta: "View on Amazon",
    bookNote: "My CPRE Foundation Level exam-prep book (in German) follows the same progressive approach.",
    bookNoteProminent: "Prefer paper? The same progressive approach is available as a book (in German) with six practice exams and 270 questions.",
    credentialsLabel: "Selected certifications",
    educationLabel: "Education",
  },
  de: {
    eyebrow: "Wer die Prüfungen schreibt",
    title: "Geschrieben aus der Praxis, nicht aus der Fragenfabrik",
    bookEyebrow: "Auch als Buch",
    bookCta: "Bei Amazon ansehen",
    bookNote: "Mein Buch zur CPRE Foundation Level folgt demselben aufbauenden Prinzip.",
    bookNoteProminent: "Lieber auf Papier? Dasselbe aufbauende Prinzip gibt es als Buch mit sechs Übungsprüfungen und 270 Fragen.",
    credentialsLabel: "Ausgewählte Zertifizierungen",
    educationLabel: "Ausbildung",
  },
} as const;

function BookCover({ large = false }: { large?: boolean }) {
  return (
    <Image
      src={about.book.cover}
      alt={about.book.coverAlt}
      width={745}
      height={972}
      sizes="128px"
      className={cn(
        "h-auto shrink-0 rounded-r-md rounded-l-sm shadow-[6px_8px_18px_-6px_rgba(10,20,45,0.45)]",
        large ? "w-28 ring-1 ring-white/15" : "w-24",
      )}
    />
  );
}

export function AuthorSection({
  lang = "en",
  tone = "white",
  certSlug,
  location,
}: {
  lang?: Lang;
  tone?: "white" | "surface" | "navy";
  /** When this is the book's certification, the book is shown prominently. */
  certSlug?: string;
  location: string;
}) {
  const t = copy[lang];
  const f = about.founder;
  const book = about.book;
  const prominent = certSlug === book.certSlug;
  const position = lang === "de" ? f.positionDe : f.position;
  const bio = lang === "de" ? f.bioDe : f.bio;
  const more = lang === "de" ? f.moreCredentialsDe : f.moreCredentials;
  const education = lang === "de" ? f.educationDe : f.education;

  return (
    <Section tone={tone === "navy" ? "white" : tone} labelledBy={`author-title-${location}`} className="!py-16 sm:!py-20">
      <div lang={lang}>
        <SectionHeader id={`author-title-${location}`} eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Author */}
          <div className={cn("rounded-[1.5rem] border border-line bg-white p-6 sm:p-8", prominent ? "lg:col-span-7" : "lg:col-span-8")}>
            <div className="flex items-center gap-5">
              {f.photo && (
                <Image
                  src={f.photo}
                  alt={f.photoAlt}
                  width={160}
                  height={160}
                  className="size-20 shrink-0 rounded-2xl object-cover sm:size-24"
                />
              )}
              <div>
                <p className="font-display text-xl font-semibold text-ink sm:text-2xl">{f.name}</p>
                <p className="mt-1 font-medium text-accent-600">{position}</p>
                <p className="text-sm text-muted">{lang === "de" ? f.roleDe : f.role}</p>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-body">{bio}</p>
            <p className="mt-5 text-sm font-medium text-muted">{t.credentialsLabel}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {f.credentials.map((c) => (
                <li key={c} className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-body">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">{more}</p>
            <p className="mt-5 text-sm font-medium text-muted">{t.educationLabel}</p>
            <p className="mt-1 text-sm text-body">{education.join(" · ")}</p>
            <p className="mt-5 text-xs text-muted">{lang === "de" ? f.trademarkNoteDe : f.trademarkNote}</p>
          </div>

          {/* Book */}
          <div
            className={cn(
              "flex flex-col rounded-[1.5rem] p-6 sm:p-8",
              prominent ? "bg-navy-900 text-white/75 lg:col-span-5" : "border border-line bg-surface lg:col-span-4",
            )}
          >
            <p className={cn("eyebrow", prominent && "text-accent-300")}>{t.bookEyebrow}</p>
            <div className="mt-4 flex gap-5">
              <BookCover large={prominent} />
              <div className="min-w-0">
                <p lang="de" className={cn("font-display font-semibold leading-snug", prominent ? "text-lg text-white" : "text-ink")}>
                  {book.title}
                </p>
                <p lang="de" className={cn("mt-1 text-sm", prominent ? "text-white/70" : "text-muted")}>
                  {book.subtitle}
                </p>
                <p className={cn("mt-2 text-xs", prominent ? "text-white/60" : "text-muted")}>
                  {lang === "de" ? book.formatDe : book.format}
                </p>
              </div>
            </div>
            <p className={cn("mt-5 text-[0.9375rem] leading-relaxed", prominent ? "text-white/75" : "text-muted")}>
              {prominent ? t.bookNoteProminent : t.bookNote}
            </p>
            <TrackedLink
              href={book.url}
              external
              event="book_clicked"
              eventProps={{ location, certification: certSlug ?? "" }}
              className={cn(
                "mt-5 inline-flex items-center gap-1.5 self-start font-display font-semibold",
                prominent
                  ? "rounded-lg bg-white px-4 py-2.5 text-navy-900 hover:bg-white/90"
                  : "text-accent-600 hover:text-accent-700",
              )}
            >
              {t.bookCta} <Icon name="external" className="size-4" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
