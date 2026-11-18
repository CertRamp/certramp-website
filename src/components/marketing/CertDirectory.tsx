import Link from "@/components/ui/Link";
import { categoryList } from "@/config/categories";
import { getAllCertifications, isIndexable } from "@/lib/certifications";
import { getResources, guidesHubPath } from "@/lib/content";

/**
 * Compact A-Z directory of every indexable practice exam (plus its free guide, if any),
 * grouped by category. Server-rendered so every page is one crawlable link away from the homepage.
 */
export function CertDirectory() {
  const certs = getAllCertifications().filter(isIndexable);
  const groups = categoryList
    .map((cat) => ({
      cat,
      items: certs
        .filter((c) => c.categoryId === cat.id)
        .sort((a, b) => a.name.localeCompare(b.name, "en")),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div>
      <div className="columns-1 gap-10 sm:columns-2 lg:columns-3">
        {groups.map(({ cat, items }) => (
          <div key={cat.id} className="mb-8 break-inside-avoid">
            <h3 className="font-display text-base font-semibold text-ink">
              <Link href={`/practice-exams#${cat.id}`} className="hover:text-accent-700">
                {cat.name}
              </Link>
            </h3>
            <ul className="mt-3 space-y-1.5 text-[0.9375rem]">
              {items.map((c) => {
                const guide = getResources(c.slug).guide;
                return (
                  <li key={c.slug} className="text-muted">
                    <Link href={c.path} className="text-ink/85 hover:text-accent-700 hover:underline">
                      {c.name}
                    </Link>
                    {guide && (
                      <>
                        <span aria-hidden="true"> · </span>
                        <Link href={guide.path} className="text-accent-600 hover:underline">
                          Guide
                        </Link>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[0.9375rem] text-muted">
        Prefer to start with the free material?{" "}
        <Link href={guidesHubPath} className="font-semibold text-accent-600 hover:underline">
          All free exam guides
        </Link>
      </p>
    </div>
  );
}
