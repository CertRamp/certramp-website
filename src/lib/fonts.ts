import localFont from "next/font/local";

/**
 * Fonts are self-hosted (bundled from npm) — no requests to Google servers,
 * which avoids the GDPR issue of loading Google Fonts from the client in Germany.
 */
export const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const interTight = localFont({
  src: "../../node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});
