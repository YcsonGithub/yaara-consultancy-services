/**
 * JSON-LD structured-data builders for Yaara Consultancy Services.
 *
 * All functions return plain objects (ready to be `JSON.stringify`-ed into a
 * `<script type="application/ld+json">` tag). Centralising them here keeps the
 * schema vocabulary consistent across pages and easy to validate in Google's
 * Rich Results Test.
 *
 * Reference: https://schema.org / https://developers.google.com/search/docs/appearance/structured-data
 */

import { SITE, CONTACT, GRIEVANCE_OFFICER, SOCIAL, PRICING } from "@/lib/site";
import { SERVICES, getService } from "@/lib/services";
import { FAQS } from "@/lib/site";

const BASE_URL = SITE.url;
const LOGO_URL = `${BASE_URL}/logo-original.png`;

/** Organisation / LocalBusiness — emitted once site-wide in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
    "@id": `${BASE_URL}/#organization`,
    name: SITE.name,
    legalName: SITE.name,
    description:
      "Accounting, tax, and business-compliance consultancy for founders and small businesses in India. GST, ITR, ROC, bookkeeping, payroll, TDS, advisory — handled by a real person, not a portal.",
    url: BASE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    founder: { "@type": "Person", name: SITE.founder, jobTitle: SITE.founderRole },
    founderDate: String(SITE.foundedYear),
    knowsAbout: [
      "GST registration and filing",
      "Income tax return filing",
      "ROC compliance",
      "Bookkeeping and accounting",
      "TDS compliance",
      "Payroll services",
      "Business registration",
      "Virtual CFO",
      "Tax planning",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.line3}, ${CONTACT.address.line4}`,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4435,
      longitude: 78.3772,
    },
    areaServed: { "@type": "Country", name: "India" },
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: SOCIAL.map((s) => s.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: CONTACT.phone,
        email: CONTACT.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
    ],
  };
}

/** WebSite schema with SearchAction — enables Google sitelinks search box. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: SITE.name,
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/resources?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Service schema — one per /services/[slug] page. */
export function serviceSchema(slug: string) {
  const service = getService(slug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${slug}/#service`,
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    category: service.category,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    url: `${BASE_URL}/services/${slug}`,
    /*
      Fees are only published to search engines when the site-wide
      NEXT_PUBLIC_SHOW_PRICING switch is on — shipping indicative-only
      numbers as structured data would be misleading.
    */
    offers:
      PRICING.visible && service.pricing
        ? {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "0",
            availability: "https://schema.org/InStock",
            description: service.pricing,
            url: `${BASE_URL}/pricing`,
          }
        : undefined,
  };
}

/** ItemList of all services — emitted on /services overview for richer indexing. */
export function serviceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yaara Consultancy Services — Full service catalog",
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${BASE_URL}/services/${s.slug}`,
    })),
  };
}

/** FAQPage schema — emitted on /resources/faqs. */
export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList — pass an ordered list of {name, path} crumbs. */
export function breadcrumbSchema(
  crumbs: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${BASE_URL}${c.path}`,
    })),
  };
}
