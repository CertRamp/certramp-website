#!/usr/bin/env node
/**
 * Runs after `next build` (npm "postbuild").
 *
 * Removes `__next._full.txt` from the static export. Next.js writes this file
 * for every page as an internal by-product (an identical copy of `index.txt`),
 * but the browser never requests it on a static host: client navigation loads
 * `index.txt` and prefetching loads the `__next._tree/_index/<segment>.txt`
 * files. Dropping the copies keeps the upload under the IONOS Deploy Now
 * size quota (50 MB) as the catalogue grows.
 */
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const out = new URL("../out", import.meta.url).pathname;
let count = 0;
let bytes = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (name === "__next._full.txt") {
      bytes += s.size;
      unlinkSync(p);
      count++;
    }
  }
}

walk(out);
console.log(`✓ pruned ${count} unused __next._full.txt files (${(bytes / 1e6).toFixed(1)} MB) from out/`);
