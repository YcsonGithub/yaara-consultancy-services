import { CONTACT, SITE, SOCIAL } from "@/lib/site";
import { BRAND_ASSETS } from "@/lib/images";

export const siteConfig = {
  name: SITE.name,
  shortName: SITE.shortName,
  url: SITE.url,
  locale: "en_IN",
  language: "en-IN",
  description:
    "Accounting, tax and compliance support for Indian founders and small businesses, with GST, ITR, registrations, bookkeeping, payroll and advisory handled personally.",
  defaultOgImage: "/opengraph-image",
  logo: BRAND_ASSETS.logoLockup,
  contact: CONTACT,
  socialProfiles: SOCIAL.filter(({ label }) => label !== "WhatsApp").map(
    ({ href }) => href,
  ),
} as const;
