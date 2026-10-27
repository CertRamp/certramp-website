import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * Site-wide link: next/link with prefetching switched off by default.
 *
 * The site is a static export on a host with a 50 MB size quota. Prefetching needs
 * Next.js's per-segment `__next.*.txt` files, which roughly add another 12 MB.
 * Without prefetching, navigation still happens client-side via each page's
 * `index.txt`, so `scripts/prune-export.mjs` removes the segment files after the build.
 * Pass `prefetch` explicitly only if you also stop pruning those files.
 */
export default function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
