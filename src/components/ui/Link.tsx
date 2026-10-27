import type { AnchorHTMLAttributes } from "react";

/**
 * Site-wide internal link — a plain <a>, i.e. classic page navigation.
 *
 * The site is a static export on a host with a 50 MB size quota. Client-side
 * navigation (next/link) needs a second copy of every page as RSC data
 * (`index.txt` plus per-segment `__next.*.txt` files), which roughly doubles the
 * upload. The pages are small static HTML files, so a normal page load is fast,
 * and `scripts/prune-export.mjs` removes those RSC files after the build.
 *
 * `prefetch` is accepted (and ignored) so call sites written for next/link keep working.
 */
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; prefetch?: boolean };

/**
 * Internal paths get a trailing slash (the site is exported with `trailingSlash: true`),
 * exactly as next/link would add it, so links never hit a redirect.
 * "/faq" → "/faq/", "/practice-exams#cloud" → "/practice-exams/#cloud". Files and external URLs are untouched.
 */
export function withTrailingSlash(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const match = /^([^?#]*)(.*)$/.exec(href);
  const path = match?.[1] ?? href;
  const rest = match?.[2] ?? "";
  if (path.endsWith("/") || /\.[a-z0-9]+$/i.test(path)) return href;
  return `${path}/${rest}`;
}

export default function Link({ prefetch: _prefetch, href, ...props }: Props) {
  void _prefetch;
  return <a href={withTrailingSlash(href)} {...props} />;
}
