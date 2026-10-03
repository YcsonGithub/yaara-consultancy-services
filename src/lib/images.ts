/**
 * ============================================================
 *  YAARA SITE IMAGES — central registry
 * ============================================================
 * Single source of truth for every raster image used on the site.
 * Pages import from here instead of hard-coding paths, so swapping a
 * placeholder for final artwork never touches page code.
 *
 * ------------------------------------------------------------
 *  public/ LAYOUT
 * ------------------------------------------------------------
 *  public/
 *   favicon.ico               Root only — browsers probe /favicon.ico directly.
 *   brand/                    Logo lockups + every derived app icon.
 *   images/<group>/           Editorial imagery, one folder per group.
 *   docs/                     Non-image downloads (PDFs, brochures).
 *
 *  Folder names mirror site groups: `industries`, `resources` and `book`
 *  map to the /industries, /resources and /book routes; `people` and
 *  `scenes` are cross-page assets.
 *
 * ------------------------------------------------------------
 *  BRAND
 * ------------------------------------------------------------
 *  `logo-original.png` is the client's supplied artwork and stays the
 *  canonical lockup — it is what Google reads for the `logo` field in
 *  JSON-LD. `logo-mark.svg` / `logo-maskable.svg` are flat vector
 *  rebuilds of the monogram for small placements (favicon, PWA icons);
 *  the 3D-bevelled original does not survive at 16px. Regenerate every
 *  raster icon with `bun scripts/generate-brand-icons.mjs`.
 *
 * ------------------------------------------------------------
 *  EDITORIAL IMAGERY
 * ------------------------------------------------------------
 *  The AI image-generation prompts for each image live in
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

/**
 * Brand assets. Unlike editorial imagery these have no alt/dimensions
 * coupling — they are referenced by metadata, manifest and JSON-LD, all
 * of which build their own attributes from the path alone.
 */
export const BRAND_ASSETS = {
  /** Canonical lockup — header/footer logo and JSON-LD `logo`. */
  logoLockup: "/brand/logo-original.png",
  /** Flat vector lockup, for placements that want crisp scaling. */
  logoSvg: "/brand/logo.svg",
  /** Square monogram — favicon and PWA "any" purpose. */
  markSvg: "/brand/logo-mark.svg",
  /** Navy plate monogram — PWA "maskable" purpose. */
  markMaskableSvg: "/brand/logo-maskable.svg",
  appleTouchIcon: "/brand/apple-touch-icon.png",
  icon192: "/brand/icon-192.png",
  icon512: "/brand/icon-512.png",
  markPng: "/brand/logo-original.png",
  /** Root-only: browsers request /favicon.ico without consulting the HTML. */
  favicon: "/favicon.ico",
} as const;

export const SITE_IMAGES = {
  /* ---- /industries ---- */
  industriesHero: {
    src: "/images/industries/hero.png",
    alt: "Editorial illustration of six different Indian businesses — a startup desk, a freelancer, a shop counter, a clinic, a community trust and a small factory — connected by one ledger",
    width: 1774,
    height: 887,
  },
  industryStartupsFounders: {
    src: "/images/industries/startups-founders.png",
    alt: "Young founders at a minimalist workspace with a laptop, cap-table chart and incorporation certificate",
    width: 1672,
    height: 941,
  },
  industryFreelancersProfessionals: {
    src: "/images/industries/freelancers-professionals.png",
    alt: "A freelancer working from a home studio with invoices and a laptop",
    width: 1774,
    height: 887,
  },
  industrySmallMediumBusinesses: {
    src: "/images/industries/small-medium-businesses.png",
    alt: "A small business owner at a shop counter with a ledger and GST receipts",
    width: 2043,
    height: 770,
  },
  industryDoctorsLawyersArchitects: {
    src: "/images/industries/doctors-lawyers-architects.png",
    alt: "Regulated professionals — a doctor, a lawyer and an architect — at their consulting desks",
    width: 1916,
    height: 821,
  },
  industryNgosTrusts: {
    src: "/images/industries/ngos-trusts.png",
    alt: "A community trust office with donation receipts and audit files",
    width: 1774,
    height: 887,
  },
  industryManufacturersTraders: {
    src: "/images/industries/manufacturers-traders.png",
    alt: "A small factory floor with inventory, crates and cost-accounting ledgers",
    width: 1774,
    height: 887,
  },

  /* ---- /resources ---- */
  resourcesHero: {
    src: "/images/resources/hero.png",
    alt: "A desk with a printed compliance calendar, reference books and a cup of chai",
    width: 1672,
    height: 941,
  },

  /* ---- /book ---- */
  bookHero: {
    src: "/images/book/hero.png",
    alt: "A warm video-call scene: a founder and an advisor talking over a laptop with notes",
    width: 1774,
    height: 887,
  },

  /* ---- /people — founder portrait, used on / and /about ---- */
  founderPortrait: {
    src: "/images/people/founder-at-work.png",
    alt: "Portrait of the founder of Yaara Consultancy Services at work",
    width: 1586,
    height: 992,
  },
  homeConsultation: {
    src: "/images/people/home-consultation.png",
    alt: "An Indian business owner and financial advisor reviewing a ledger together in a bright Hyderabad office",
    width: 1680,
    height: 944,
  },

  /* ---- /scenes — ambient cross-page imagery ---- */
  workspaceFlatlay: {
    src: "/images/scenes/workspace-flatlay.png",
    alt: "An overhead flatlay of a consultancy workspace — ledger, calculator and documents",
    width: 1536,
    height: 1024,
  },
  growthIllustration: {
    src: "/images/scenes/growth-illustration.png",
    alt: "Illustration of a business growing steadily over successive quarters",
    width: 1254,
    height: 1254,
  },

  /* ---- /services/[slug] — category visuals shared by each service detail page ---- */
  serviceTaxStatutory: {
    src: "/images/services/tax-statutory.png",
    alt: "An organised tax compliance desk with a ledger, calculator, filing folders and calendar",
    width: 1774,
    height: 887,
  },
  serviceBusinessRegistration: {
    src: "/images/services/business-registration.png",
    alt: "Founders reviewing incorporation papers beside a company seal and business planning blocks",
    width: 2048,
    height: 768,
  },
  serviceAccountingBookkeeping: {
    src: "/images/services/accounting-bookkeeping.png",
    alt: "A male accountant reviewing an open ledger with a calculator, coins and financial reports",
    width: 1944,
    height: 809,
  },
  servicePayrollHr: {
    src: "/images/services/payroll-hr.png",
    alt: "An HR team reviewing organised employee records, payroll papers and a calendar",
    width: 1774,
    height: 887,
  },
  serviceAdvisoryGrowth: {
    src: "/images/services/advisory-growth.png",
    alt: "A founder and advisor reviewing a financial plan with a chart, compass and roadmap cards",
    width: 1983,
    height: 793,
  },
  featuredGst: {
    src: "/images/services/featured-gst.png",
    alt: "A small-business owner and advisor reviewing GST receipts, a reconciliation ledger and calculator",
    width: 1942,
    height: 809,
  },
  featuredItr: {
    src: "/images/services/featured-itr.png",
    alt: "A professional and advisor reviewing income-tax documents, a laptop and calculator together",
    width: 1881,
    height: 836,
  },
  pricingClarity: {
    src: "/images/services/pricing-clarity.png",
    alt: "A business owner and advisor reviewing a clear service plan beside a laptop and calculator",
    width: 1672,
    height: 940,
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

/** Service category → visual used on every service detail hero. */
export const SERVICE_CATEGORY_IMAGES: Record<string, SiteImage> = {
  "Tax & Statutory Compliance": SITE_IMAGES.serviceTaxStatutory,
  "Business Registration & Corporate": SITE_IMAGES.serviceBusinessRegistration,
  "Accounting & Bookkeeping": SITE_IMAGES.serviceAccountingBookkeeping,
  "Payroll & HR Compliance": SITE_IMAGES.servicePayrollHr,
  "Advisory & Growth": SITE_IMAGES.serviceAdvisoryGrowth,
};

/** Homepage featured-service slug → dedicated visual. */
export const FEATURED_SERVICE_IMAGES: Record<string, SiteImage> = {
  "gst-registration-filing": SITE_IMAGES.featuredGst,
  "income-tax-return-filing": SITE_IMAGES.featuredItr,
};
