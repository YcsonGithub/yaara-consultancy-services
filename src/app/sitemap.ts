import type { MetadataRoute } from "next";
import { SITE, LEGAL_PAGES } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Dynamic XML sitemap. Re-built at deploy time, includes every canonical
 * indexable URL: static pages, every service slug, every industry anchor,
 * every legal page, and the key resource routes. Submitted to Google
 * Search Console and referenced from robots.txt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const staticPages: MetadataRoute.Sitemap = [
    { url: "/", lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: "/services", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "/about", lastModified: lastMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: "/industries", lastModified: lastMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: "/pricing", lastModified: lastMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: "/resources", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: "/resources/compliance-calendar", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: "/resources/faqs", lastModified: lastMonth, changeFrequency: "monthly", priority: 0.6 },
    { url: "/contact", lastModified: lastMonth, changeFrequency: "yearly", priority: 0.6 },
    { url: "/book", lastModified: lastMonth, changeFrequency: "yearly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `/services/${s.slug}`,
    lastModified: lastMonth,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `/industries#${i.slug}`,
    lastModified: lastMonth,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const legalPages: MetadataRoute.Sitemap = LEGAL_PAGES.map((l) => ({
    url: `/legal/${l.slug}`,
    lastModified: lastMonth,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...legalPages];
}

export const baseUrl = SITE.url;
