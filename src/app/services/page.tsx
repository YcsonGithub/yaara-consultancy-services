import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CATEGORY_ORDER,
  CATEGORY_DESCRIPTIONS,
  SERVICE_COUNT,
  servicesByCategory,
  type Service,
} from "@/lib/services";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading, PageHero, CtaBand } from "@/components/site/section";
import { CategoryArt } from "@/components/art/service-art";
import { LedgerDeskArt } from "@/components/art/section-art";
import { Price } from "@/components/site/price";
import { serviceListSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/json-ld";

/** Slugify a category name for anchor IDs and #hash nav */
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const metadata = {
  title: "Services — GST, ITR, ROC, Payroll, Advisory",
  description: `${SERVICE_COUNT} compliance services for Indian businesses — GST, ITR, TDS, company and firm registration, PF & ESI, ROC, bookkeeping, payroll and advisory. Jump to any service for documents, timeline and FAQs.`,
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceListSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Services"
        title={
          <>
            {SERVICE_COUNT} services.{" "}
            <span className="italic font-light">One person</span> who knows your
            books.
          </>
        }
        intro="Every registration, filing and review an Indian business needs — from GST and ITR to company formation, PF & ESI, ROC, bookkeeping and advisory. Jump to any service for documents, timeline and FAQs."
        aside={<LedgerDeskArt className="h-[15rem] sm:h-[17rem] lg:h-[20rem]" />}
      />

      {/* ============ CATEGORY NAV (sticky anchor chips) ============ */}
      <nav
        aria-label="Service categories"
        className="sticky top-[4.75rem] z-30 border-b border-border bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 scroll-fine">
          <span className="shrink-0 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
            Jump to
          </span>
          {CATEGORY_ORDER.map((cat) => {
            const count = servicesByCategory(cat).length;
            return (
              <Link
                key={cat}
                href={`#${slugify(cat)}`}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-sans text-[0.8rem] font-medium text-ink transition-all hover:border-ink/30 hover:bg-surface"
              >
                <span>{cat}</span>
                <span className="font-mono text-[0.66rem] text-gold">
                  {count}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ============ CATEGORY SECTIONS ============ */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {CATEGORY_ORDER.map((cat, idx) => {
          const items = servicesByCategory(cat);
          const anchor = slugify(cat);
          return (
            <section
              key={cat}
              id={anchor}
              className="scroll-mt-32 border-b border-border py-16 last:border-b-0 sm:py-24"
            >
              <SectionHeading
                index={`0${idx + 1}`}
                eyebrow={cat}
                title={cat}
                intro={CATEGORY_DESCRIPTIONS[cat]}
              />

              {/* bespoke category artwork — drawn for this category, not stock */}
              <Reveal delay={0.08}>
                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
                  <div className="overflow-hidden rounded-xl border border-border shadow-[0_22px_50px_-34px_rgba(14,42,71,0.4)] lg:col-span-8">
                    <CategoryArt
                      category={cat}
                      className="h-[11rem] sm:h-[13rem] lg:h-[15rem]"
                      label={`${cat} at Yaara Consultancy Services`}
                    />
                  </div>
                  <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[2rem] font-semibold leading-none text-ink">
                        {String(items.length).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                        services in
                        <br />
                        this area
                      </span>
                    </div>
                    <p className="mt-5 font-sans text-[0.88rem] leading-relaxed text-body">
                      {CATEGORY_DESCRIPTIONS[cat]}
                    </p>
                    <Link
                      href="/book"
                      className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.86rem] font-medium text-ink hover:text-gold"
                    >
                      Not sure which one you need? Ask us
                      <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                    </Link>
                  </div>
                </div>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, i) => (
                  <Reveal key={service.slug} delay={(i % 3) * 0.05} as="article">
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand />
    </>
  );
}

/* -------- Service card -------- */
function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.4)]"
    >
      {/* gold hairline that fills in on hover — brand signature */}
      <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />

      <div className="flex items-start justify-between">
        <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-ink text-gold-light">
          <span
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(120% 120% at 20% 0%, rgba(212,168,85,0.35), transparent 60%)",
            }}
          />
          <Icon className="relative h-5 w-5" strokeWidth={1.6} />
        </span>
        {service.comingSoon && (
          <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-gold">
            Coming soon
          </span>
        )}
      </div>

      <h3 className="mt-5 inline-block font-serif text-[1.18rem] font-medium leading-snug text-ink">
        <span className="relative">
          {service.title}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
        </span>
      </h3>

      <p className="mt-2.5 font-sans text-[0.88rem] leading-relaxed text-body line-clamp-3">
        {service.summary}
      </p>

      <span className="mt-auto inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-5">
        <span className="font-sans text-[0.84rem] font-medium text-ink">
          Learn more
        </span>
        <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <Price
          value={service.pricing}
          className="ml-auto font-mono text-[0.76rem] font-medium text-ink"
          hiddenClassName="text-muted-foreground"
        />
      </span>
    </Link>
  );
}
