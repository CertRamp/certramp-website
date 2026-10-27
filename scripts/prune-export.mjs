#!/usr/bin/env node
/**
 * Runs after `next build` (npm "postbuild"). Keeps the static export under the
 * IONOS Deploy Now size quota (50 MB) as the catalogue and content grow.
 *
 * 1. Removes `__next._full.txt`. Next.js writes this file for every page as an
 *    internal by-product (an identical copy of `index.txt`), but the browser never
 *    requests it on a static host: client navigation loads `index.txt` and
 *    prefetching loads the `__next._tree/_index/<segment>.txt` files.
 * 2. Re-encodes the generated Open Graph images (`opengraph-image`, 1200×630 PNG)
 *    as palette PNGs. They are flat graphics (solid colours, text, bars), so the
 *    result is visually identical at roughly a quarter of the size.
 */
import { readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const out = new URL("../out", import.meta.url).pathname;
const stats = { full: 0, fullBytes: 0, og: 0, ogBefore: 0, ogAfter: 0 };
const ogFiles = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (name === "__next._full.txt") {
      stats.full++;
      stats.fullBytes += s.size;
      unlinkSync(p);
    } else if (name === "opengraph-image") ogFiles.push(p);
  }
}

walk(out);

for (const p of ogFiles) {
  const input = readFileSync(p);
  // Only touch real PNGs; leave anything unexpected alone.
  if (input.subarray(1, 4).toString() !== "PNG") continue;
  const output = await sharp(input).png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 }).toBuffer();
  stats.ogBefore += input.length;
  if (output.length < input.length) {
    writeFileSync(p, output);
    stats.ogAfter += output.length;
  } else stats.ogAfter += input.length;
  stats.og++;
}

const mb = (b) => (b / 1e6).toFixed(1);
console.log(`✓ pruned ${stats.full} unused __next._full.txt files (${mb(stats.fullBytes)} MB) from out/`);
console.log(`✓ compressed ${stats.og} Open Graph images (${mb(stats.ogBefore)} MB → ${mb(stats.ogAfter)} MB)`);
