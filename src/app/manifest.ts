import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0a1130",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

/** Generated once at build time (static export). */
export const dynamic = "force-static";
