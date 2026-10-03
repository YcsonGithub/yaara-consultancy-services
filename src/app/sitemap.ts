import type { MetadataRoute } from "next";
import { SITE, LEGAL_PAGES } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const dynamic = "force-static";

/** Canonical, public, indexable URLs only. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/services", changeFrequency: "weekly", priority: 0.9 },
    { url: "/about", changeFrequency: "monthly", priority: 0.8 },
    { url: "/industries", changeFrequency: "monthly", priority: 0.8 },
    { url: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { url: "/resources", changeFrequency: "weekly", priority: 0.7 },
    { url: "/resources/compliance-calendar", changeFrequency: "weekly", priority: 0.7 },
    { url: "/resources/faqs", changeFrequency: "monthly", priority: 0.6 },
    { url: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { url: "/book", changeFrequency: "yearly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legalPages: MetadataRoute.Sitemap = LEGAL_PAGES.map((page) => ({
    url: `/legal/${page.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...staticPages, ...servicePages, ...legalPages];
}

export const baseUrl = SITE.url;
