import Link from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { examChangesPath, formatChangeDate, getChangesForSlug } from "@/lib/exam-changes";

/** Slim notice under the hero when the exam has a recent or upcoming change on /exam-changes/. */
export function ExamChangeNotice({ slug }: { slug: string }) {
  const changes = getChangesForSlug(slug).slice(0, 2);
  if (!changes.length) return null;
  return (
    <div className="border-b border-line bg-surface">
      <div className="container-page space-y-2 py-4 text-[0.9375rem]">
        {changes.map((c) => (
          <p key={c.id} className="flex items-start gap-2.5">
            <Icon name="info" className="mt-0.5 size-4 shrink-0 text-accent-600" />
            <span>
              <span className="font-semibold">
                {c.upcoming ? "Upcoming exam change" : "Recent exam change"}, {formatChangeDate(c.keyDate, "en")}:
              </span>{" "}
              {c.summary}{" "}
              <Link href={`${examChangesPath}/#change-${c.id}`} className="whitespace-nowrap font-semibold text-accent-600 hover:underline">
                Details and source
              </Link>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
