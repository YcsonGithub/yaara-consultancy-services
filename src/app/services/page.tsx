import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CATEGORY_ORDER,
  CATEGORY_DESCRIPTIONS,
  servicesByCategory,
  type Service,
} from "@/lib/services";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading, PageHero, CtaBand } from "@/components/site/section";
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
  description:
    "40+ compliance services for Indian businesses — GST, ITR, TDS, incorporation, ROC, bookkeeping, payroll and advisory. Filter by category and jump to any service for documents, timeline, pricing and FAQs.",
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
            40+ compliance services.{" "}
            <span className="italic font-light">One person</span> who knows your
            books.
          </>
        }
        intro="From GST and ITR to incorporation, ROC, payroll and advisory — every service an Indian business needs, under one roof. Filter by category or jump to any service for documents, timeline, pricing and FAQs."
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
      className="group relative flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.4)]"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-border">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
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

      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-sans text-[0.84rem] font-medium text-ink">
        Learn more
        <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>

      {/* subtle category label in mono — invisible until hover for a quiet hint of structure */}
      <span className="pointer-events-none absolute right-6 top-6 font-mono text-[0.58rem] uppercase tracking-wider text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {service.category.split(" ")[0]}
      </span>
    </Link>
  );
}
