#!/usr/bin/env node
/**
 * Bundles the small browser scripts that run on static pages (no React runtime):
 *   src/client/readiness.ts → public/readiness.js (readiness check, Baustein 6)
 * Runs before `next build` and `next dev`. The output is generated, not committed.
 */
import { build } from "esbuild";

const src = new URL("../src", import.meta.url).pathname;
await build({
  entryPoints: [new URL("../src/client/readiness.ts", import.meta.url).pathname],
  outfile: new URL("../public/readiness.js", import.meta.url).pathname,
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2019"],
  alias: { "@": src },
  legalComments: "none",
  logLevel: "warning",
});
console.log("✓ built public/readiness.js");
