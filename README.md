# Yaara Consultancy Services — Marketing Website

A multi-page Next.js 16 marketing website for **Yaara Consultancy Services**, an Indian
accounting, tax, and compliance consultancy based in Hyderabad, founded by
**Anakali Pawan Kalyan**. The site presents 30+ service offerings across five
practice areas, six industry verticals, transparent pricing, a compliance calendar,
and a DPDP Act–compliant consent layer — all wrapped in an editorial,
trust-first design system that deliberately avoids the generic SaaS template look.

The project ships as a self-contained Next.js standalone build (Turbopack + App
Router), fronted by a Caddy gateway that exposes a single port to the outside world.

## ✨ Highlights

- **DPDP Act compliant cookie consent** — granular Essential / Analytics / Marketing
  categories, versioned consent state, and a designated Grievance Officer (§8(9)).
- **Google Consent Mode v2** — every Google storage category defaults to `denied`
  before any tag loads; GA4/GTM fire cookieless pings until the visitor opts in.
- **GTM + GA4 ready** — container IDs are read from env vars; with no IDs set, no
  third-party script is ever injected (the consent banner still records preferences).
- **JSON-LD structured data** — `Organization` / `LocalBusiness` / `ProfessionalService`,
  `WebSite`, `Service`, `ItemList`, `BreadcrumbList`, `FAQPage` — all centralised in
  `src/lib/schema.ts`.
- **WCAG 2.2 AA accessibility** — skip-to-content link, semantic landmarks, ARIA
  labels, focus-visible rings, AA-compliant contrast, `prefers-reduced-motion` support.
- **AI chat assistant** — LLM-powered routing concierge (`/api/chat`) that helps
  visitors find the right service, clearly labelled "not a CA", with human handoff.
- **WhatsApp float** — sticky contact button on scroll.
- **36 individual service pages** — generated from the typed catalog in
  `src/lib/services.ts`, each with process, documents, timeline, pricing, FAQs.
- **Compliance calendar** — Indian due-date calendar (GST, TDS, ITR, ROC, MCA).
- **Transparent pricing** — three retainer tiers + 15 flat-fee line items.
- **Legal stack** — Privacy, Terms, Refund, Cookie, and Disclaimer pages, all
  rendered from a shared legal-body component.
- **Custom OG image** — dynamically generated at `/opengraph-image`.
- **`sitemap.xml` + `robots.txt`** — generated from the route registry at build time.

## 🧱 Tech Stack

| Layer            | Choice                                                         |
| ---------------- | -------------------------------------------------------------- |
| Framework        | Next.js 16 (App Router, Turbopack, `output: "standalone"`)     |
| UI runtime       | React 19                                                       |
| Language         | TypeScript 5                                                   |
| Styling          | Tailwind CSS 4 (`@tailwindcss/postcss`) + `tw-animate-css`     |
| Component kit    | shadcn/ui (New York) on Radix UI primitives                    |
| Animation        | Framer Motion 12                                               |
| Icons            | `lucide-react`                                                 |
| Fonts            | `next/font/google` — Fraunces, Work Sans, IBM Plex Mono        |
| Database         | Prisma ORM 6 + SQLite (`@prisma/client`)                       |
| AI chat          | `z-ai-web-dev-sdk` (server-side only, in `/api/chat`)          |
| Forms            | `react-hook-form` + `zod`                                      |
| Notifications    | `sonner` via shadcn `<Toaster />`                              |
| Runtime          | Bun (recommended) — production serves `bun .next/standalone/server.js` |

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+** and **Bun** (recommended; the `start` script uses `bun`)
- No external services required — SQLite is a local file, and the AI chat SDK
  works out of the box.

### Installation & Development

```bash
bun install
bun run dev      # Next.js dev server on http://localhost:3000 (Turbopack)
bun run lint     # ESLint
bun run db:push  # Push Prisma schema to SQLite (creates dev.db)
```

The dev server logs to `dev.log` (piped via `tee`). Production build is a
**standalone** Next.js output: `bun run build` compiles the app and copies the
`static/` and `public/` directories into `.next/standalone/` so the server is
fully self-contained.

### Environment Variables

Create a `.env` file at the project root. Only `DATABASE_URL` is required;
every analytics ID is optional and the build runs cleanly without them.

| Variable                          | Required | Purpose                                                                                          |
| --------------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `DATABASE_URL`                    | yes      | SQLite connection string for Prisma, e.g. `file:./prisma/dev.db`.                                |
| `NEXT_PUBLIC_GTM_ID`              | no       | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`). When set, GTM bootstraps after consent.    |
| `NEXT_PUBLIC_GA4_ID`              | no       | GA4 measurement ID (e.g. `G-XXXXXXXXXX`). Used as a `gtag.js` fallback **only when GTM is unset**. |
| `NEXT_PUBLIC_GSC_VERIFICATION`    | no       | Google Search Console verification token, emitted as `<meta name="google-site-verification">`.   |

When `NEXT_PUBLIC_GTM_ID` is unset, no GTM script loads. When
`NEXT_PUBLIC_GA4_ID` is also unset, no GA4 script loads either — the consent
banner still records preferences locally. This is intentional: the site ships
tracking-free by default and only activates third-party scripts when the
operator configures IDs in the deployment environment.

## 📁 Project Structure

```
src/
  app/                 — App Router pages, layouts, and route handlers
    api/               — Backend route handlers (chat, consultation)
    legal/             — Privacy, Terms, Refund, Cookie, Disclaimer (+ shared body)
    resources/         — Resources hub, compliance calendar, FAQs
    services/[slug]/   — Dynamic per-service pages (36 slugs)
    layout.tsx         — Root layout: fonts, consent, GTM, JSON-LD, header/footer
    page.tsx           — Homepage
    sitemap.ts         — /sitemap.xml builder
    robots.ts          — /robots.txt builder
    manifest.ts        — /manifest.webmanifest
    opengraph-image.tsx — Dynamic OG image generator
    not-found.tsx      — Custom 404
  components/
    site/              — Marketing-specific shared components
      header.tsx, footer.tsx, logo.tsx
      chat-assistant.tsx, whatsapp-float.tsx
      consent-provider.tsx, cookie-banner.tsx
      consultation-form.tsx, json-ld.tsx, reveal.tsx, section.tsx
    ui/                — shadcn/ui component library (New York style)
  lib/
    site.ts            — Site config: name, founder, contact, nav, industries, pricing, FAQs
    services.ts        — Typed catalog of 36 services across 5 categories
    schema.ts          — JSON-LD builders (Organization, WebSite, Service, Breadcrumb, FAQ)
    analytics.ts       — Consent Mode v2 + GTM/GA4 bootstrap scripts
    chat-context.ts    — System prompt builder for the AI assistant
    db.ts              — Prisma client singleton (dev hot-reload safe)
    utils.ts           — `cn()` and shared helpers
  hooks/               — use-mobile, use-toast
prisma/
  schema.prisma        — SQLite schema (ConsultationRequest, ContactMessage, + demo models)
public/
  logo.svg, logo-original.png, favicon.ico
  founder/             — Founder portrait
  scenes/              — Workspace flatlay, growth illustration
Caddyfile              — Gateway config (single-port reverse proxy)
next.config.ts         — `output: "standalone"`, `reactStrictMode: false`
```

## 🗺️ Site Map / Routes

### Pages

| Route                                | Description                                                                |
| ------------------------------------ | -------------------------------------------------------------------------- |
| `/`                                  | Homepage — hero, value props, featured services, process, pricing, FAQs    |
| `/about`                             | About Yaara — founder story, philosophy, CA disclaimer                     |
| `/services`                          | Full service catalog grouped by category                                   |
| `/services/[slug]`                   | 36 individual service detail pages (process, documents, timeline, FAQs)    |
| `/industries`                        | Six industry verticals with challenges and outcomes                        |
| `/pricing`                           | Three retainer tiers + 15 flat-fee line items                              |
| `/resources`                         | Resources hub                                                              |
| `/resources/compliance-calendar`     | Indian due-date calendar (GST, TDS, ITR, ROC, MCA)                         |
| `/resources/faqs`                    | Frequently asked questions                                                 |
| `/book`                              | Book a free 20-minute consultation                                         |
| `/contact`                           | Contact form                                                               |
| `/legal/privacy`                     | Privacy Policy (DPDP-aligned)                                              |
| `/legal/terms`                       | Terms of Service                                                           |
| `/legal/refund`                      | Refund & Cancellation Policy                                               |
| `/legal/cookie`                      | Cookie Policy                                                              |
| `/legal/disclaimer`                  | Disclaimer (CA status, no advice, etc.)                                    |

### API Routes

| Method & Route            | Description                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| `POST /api/chat`          | LLM assistant — routing concierge using `z-ai-web-dev-sdk`. Multi-turn.    |
| `POST /api/consultation`  | Persists a "book a consultation" submission to `ConsultationRequest`.      |
| `GET  /api`               | Existing demo route (placeholder).                                        |

### Generated Files

- `/sitemap.xml` — built from `src/app/sitemap.ts`
- `/robots.txt` — built from `src/app/robots.ts`
- `/manifest.webmanifest` — PWA manifest
- `/opengraph-image` — 1200×630 OG image, rendered on demand by Next.js

## 🎨 Design System

The palette is intentionally warm and editorial — the visual language of a
trusted advisor's office, not a SaaS dashboard.

| Token        | Hex       | Use                                                              |
| ------------ | --------- | ---------------------------------------------------------------- |
| Navy ink     | `#0E2A47` | Headings, primary text, dark section backgrounds                 |
| Antique Gold | `#B8873B` | Accent, links on dark, hero highlights, button emphasis          |
| Warm Paper   | `#FAF7F1` | Body background, light section surfaces                          |

**Typography**

- **Fraunces** — warm editorial variable serif for headings.
- **Work Sans** — clean humanist sans for body and UI.
- **IBM Plex Mono** — reserved for numbers, deadlines, fees, and data tables.

All three fonts are loaded via `next/font/google` with `display: "swap"` and
exposed as CSS variables (`--font-fraunces`, `--font-work-sans`,
`--font-ibm-plex-mono`) on the `<body>` element. Theme colors follow the
shadcn/ui token convention (`bg-background`, `text-foreground`, `bg-ink`,
`text-paper`, `text-gold`, etc.) defined in `src/app/globals.css`.

## 🔒 Compliance & Privacy (DPDP Act)

The consent implementation follows the **Digital Personal Data Protection Act,
2023** and Google's Consent Mode v2 specification:

- **Default-deny** — an inline script in the root layout sets every Google
  storage category (`ad_storage`, `analytics_storage`, `ad_user_data`,
  `ad_personalization`, `functionality_storage`) to `"denied"` **before** any
  tag loads. Only `security_storage` is granted by default.
- **Granular categories** — visitors choose Essential (always on), Analytics,
  and Marketing independently. Selections are persisted to `localStorage`
  under `yaara-consent-v1` with a version stamp so banner copy changes can
  re-prompt.
- **Consent Mode update** — on accept, `gtag("consent", "update", …)` flips
  the granted categories and GTM tags begin firing.
- **Grievance Officer** — designated under DPDP §8(9), published in the
  footer and in the Organization JSON-LD: acknowledgement within 24 hours,
  resolution within 21 days.
- **Legal pages** — Privacy, Terms, Refund, Cookie, and Disclaimer, all
  rendered from a shared `legal-body.tsx` component for consistent styling.

## 🔍 SEO & Analytics

- **JSON-LD structured data** (`src/lib/schema.ts`) emitted via a
  `<JsonLd>` component:
  - `Organization` / `LocalBusiness` / `ProfessionalService` — site-wide in root layout
  - `WebSite` with `SearchAction` — site-wide
  - `Service` — per-service detail page
  - `ItemList` — services index
  - `BreadcrumbList` — per-service detail page
  - `FAQPage` — homepage and FAQ page
- **`sitemap.xml`** and **`robots.txt`** generated from the route registry.
- **Open Graph image** generated dynamically by `src/app/opengraph-image.tsx`.
- **GTM + GA4** wired through `src/lib/analytics.ts` — only activated when
  env IDs are configured.
- **Google Search Console** verification via `NEXT_PUBLIC_GSC_VERIFICATION`.
- **Metadata** centralised in `src/app/layout.tsx` — `metadataBase`, title
  template, keywords, OpenGraph, Twitter cards, `robots`, `manifest`.

## ♿ Accessibility (WCAG 2.2 AA)

- **Skip-to-content link** — first focusable element, revealed on focus
  (WCAG 2.4.1 Bypass Blocks).
- **Semantic HTML** — `<main id="main-content" tabIndex={-1}>`, proper
  landmark roles via `SiteHeader` / `SiteFooter`.
- **ARIA labels** on icon-only buttons (chat toggle, WhatsApp, mobile nav).
- **Keyboard navigation** — all interactive Radix components are keyboard
  accessible; visible focus rings via Tailwind `focus-visible:` utilities.
- **Color contrast** — Navy/Gold on Paper all meet AA contrast ratios.
- **`prefers-reduced-motion`** — Framer Motion animations honour the
  user's motion preference.
- **`lang="en-IN"`** and locale-aware `<meta>` set on the root `<html>`.

## 🤖 AI Features

The chat assistant is a **routing concierge**, not a tax advisor:

- **`POST /api/chat`** uses `z-ai-web-dev-sdk` server-side only — the SDK
  is never shipped to the browser.
- **System prompt** (`src/lib/chat-context.ts`) is pre-loaded with the
  service catalog, pricing, and contact details so the assistant can route
  visitors to the right page or service.
- **Clearly labelled** — the assistant states up-front that it is not a CA
  and offers human handoff via WhatsApp / email / consultation booking.
- **Safety rails** — message history capped at 16 turns, per-message
  length capped at 2000 chars; input sanitised before reaching the model.

## 📝 Database

Prisma ORM with SQLite (file-based — no external database server required).

**Models** (`prisma/schema.prisma`):

- `ConsultationRequest` — submissions from the homepage and `/book` form.
  Fields: `name`, `email`, `phone`, `business`, `service`, `message`,
  `status` (`new | contacted | booked | closed`), `createdAt`.
- `ContactMessage` — submissions from the `/contact` form. Fields: `name`,
  `email`, `subject`, `message`, `createdAt`.
- `User`, `Post` — existing demo models (retained for reference).

Database lifecycle scripts:

```bash
bun run db:push      # push schema to SQLite (dev; --accept-data-loss)
bun run db:generate  # regenerate Prisma Client
bun run db:migrate   # create + apply a migration (dev)
bun run db:reset     # drop + recreate (dev)
```

`src/lib/db.ts` exports a singleton `PrismaClient` and caches it on
`globalThis` in non-production to survive Next.js hot-reload cycles.

## 📦 Build & Deploy

```bash
bun run build      # next build → .next/standalone (+ copies static + public)
bun run start      # NODE_ENV=production bun .next/standalone/server.js
```

The build produces a **standalone** Next.js bundle (configured via
`output: "standalone"` in `next.config.ts`). The `build` script then copies
`.next/static/` and `public/` into `.next/standalone/` so the resulting
directory is fully self-contained and can be deployed as a single artifact.

### Gateway (Caddy)

The repo ships with a `Caddyfile` that runs Caddy on port `:81` and reverse
proxies to the Next.js server on `localhost:3000`, forwarding `Host`,
`X-Forwarded-For`, `X-Forwarded-Proto`, and `X-Real-IP`. A query-based
`@transform_port_query` handler lets the orchestrator route to alternate
upstream ports via `?XTransformPort=<port>`. In production, only the Caddy
port needs to be exposed; Next.js itself stays bound to localhost.

### Production checklist

1. Set `DATABASE_URL`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, and
   `NEXT_PUBLIC_GSC_VERIFICATION` in the deployment environment.
2. Run `bun run db:push` once to initialise the SQLite file.
3. Run `bun run build` to produce `.next/standalone/`.
4. Start Caddy and `bun run start` (the Next.js standalone server).
5. Verify `https://www.yaaraconsultancyservices.com/sitemap.xml`,
   `/robots.txt`, and `/opengraph-image` all resolve.

## 📄 License

Proprietary — © Yaara Consultancy Services. All rights reserved.

This codebase is not open source. No part of it may be copied, modified, or
redistributed without explicit written permission from Yaara Consultancy
Services.
