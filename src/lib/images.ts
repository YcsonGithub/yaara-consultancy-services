/**
 * ============================================================
 *  YAARA SITE IMAGES — central registry
 * ============================================================
 * Single source of truth for every raster image used on the site.
 * Pages import from here instead of hard-coding paths, so swapping a
 * placeholder for final artwork never touches page code.
 *
 * The AI image-generation prompts for each image live in
 * `AI bundles/image-prompts.json`. Placeholder images currently ship in
 * `public/images/...` — generate the real artwork and overwrite the file
 * at the same path; the site picks it up with zero code changes.
 *
 * Brand style for all imagery: deep navy (#0E2A47), muted gold (#B8873B),
 * warm paper (#FAF7F1), editorial flat illustration — no stock-photo
 * clichés, no legible text inside the image.
 */

export type SiteImage = {
  /** Public web path, used directly with next/image. */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const SITE_IMAGES = {
  /* ---- /industries ---- */
  industriesHero: {
    src: "/images/industries/hero.png",
    alt: "Editorial illustration of six different Indian businesses — a startup desk, a freelancer, a shop counter, a clinic, a community trust and a small factory — connected by one ledger",
    width: 1024,
    height: 640,
  },
  industryStartupsFounders: {
    src: "/images/industries/startups-founders.png",
    alt: "Young founders at a minimalist workspace with a laptop, cap-table chart and incorporation certificate",
    width: 1024,
    height: 512,
  },
  industryFreelancersProfessionals: {
    src: "/images/industries/freelancers-professionals.png",
    alt: "A freelancer working from a home studio with invoices and a laptop",
    width: 1024,
    height: 512,
  },
  industrySmallMediumBusinesses: {
    src: "/images/industries/small-medium-businesses.png",
    alt: "A small business owner at a shop counter with a ledger and GST receipts",
    width: 1024,
    height: 512,
  },
  industryDoctorsLawyersArchitects: {
    src: "/images/industries/doctors-lawyers-architects.png",
    alt: "Regulated professionals — a doctor, a lawyer and an architect — at their consulting desks",
    width: 1024,
    height: 512,
  },
  industryNgosTrusts: {
    src: "/images/industries/ngos-trusts.png",
    alt: "A community trust office with donation receipts and audit files",
    width: 1024,
    height: 512,
  },
  industryManufacturersTraders: {
    src: "/images/industries/manufacturers-traders.png",
    alt: "A small factory floor with inventory, crates and cost-accounting ledgers",
    width: 1024,
    height: 512,
  },

  /* ---- /resources ---- */
  resourcesHero: {
    src: "/images/resources/hero.png",
    alt: "A desk with a printed compliance calendar, reference books and a cup of chai",
    width: 1024,
    height: 640,
  },

  /* ---- /book ---- */
  bookHero: {
    src: "/images/book/hero.png",
    alt: "A warm video-call scene: a founder and an advisor talking over a laptop with notes",
    width: 1024,
    height: 640,
  },
} as const satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof SITE_IMAGES;

/** Industry slug → card image, used by the /industries page. */
export const INDUSTRY_IMAGES: Record<string, SiteImage> = {
  "startups-founders": SITE_IMAGES.industryStartupsFounders,
  "freelancers-professionals": SITE_IMAGES.industryFreelancersProfessionals,
  "small-medium-businesses": SITE_IMAGES.industrySmallMediumBusinesses,
  "doctors-lawyers-architects": SITE_IMAGES.industryDoctorsLawyersArchitects,
  "ngos-trusts": SITE_IMAGES.industryNgosTrusts,
  "manufacturers-traders": SITE_IMAGES.industryManufacturersTraders,
};