import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * robots.txt — generated via App Router (overrides any static public/robots.txt).
 * - Allows all legitimate crawlers.
 * - Blocks API routes and internal-only paths.
 * - References the XML sitemap so search engines discover it automatically.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/*?*XTransformPort="],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
