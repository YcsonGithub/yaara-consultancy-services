import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { siteConfig } from "./config";
import { canonicalUrl } from "./urls";

type PageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
};

/** Generate consistent page metadata without repeating site-wide SEO values. */
export function generatePageMetadata({
  title,
  description,
  pathname,
  type = "website",
  image = siteConfig.defaultOgImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = canonicalUrl(pathname);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type,
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
    },
  };
}
