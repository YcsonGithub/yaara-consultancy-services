import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description:
      "Accounting, tax & compliance for Indian founders and small businesses — handled by a real person.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F1",
    theme_color: "#0E2A47",
    orientation: "portrait-primary",
    categories: ["business", "finance", "productivity"],
    lang: "en-IN",
    scope: "/",
    icons: [
      { src: "/logo.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/logo-original.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
