import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  MessageCircle,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, getService, type Service } from "@/lib/services";
import { CONTACT } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";
import { PageHero, CtaBand } from "@/components/site/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* ---------- Static params & metadata ---------- */

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: service.title,
    description: service.tagline,
    openGraph: {
      title: `${service.title} · Yaara Consultancy Services`,
      description: service.tagline,
      type: "website",
    },
  };
}

/* ---------- Page ---------- */

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow={service.category}
        title={service.title}
        intro={service.tagline}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href={`/services#${slugify(service.category)}`}
            className="inline-flex items-center gap-1.5 font-sans text-[0.86rem] font-medium text-muted-foreground transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            All {service.category.toLowerCase()} services
          </Link>

          <Link
            href="/book"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-6 font-sans text-[0.92rem] font-semibold text-ink transition-all hover:bg-gold-light"
          >
            Book this service
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </PageHero>

      {/* ============ TWO-COLUMN BODY ============ */}
      <section className="paper-grain py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-3 lg:gap-12">
          {/* ---------- LEFT (col-span-2) ---------- */}
          <div className="space-y-14 lg:col-span-2">
            {/* Who needs this */}
            <Reveal>
              <SectionBlock
                eyebrow="Who needs this"
                title="Is this you?"
                icon={CheckCircle2}
              >
                <ul className="space-y-3">
                  {service.whoNeeds.map((w, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="font-sans text-[0.95rem] leading-relaxed text-body">
                        {w}
                      </span>
                    </li>
                  ))}
                </ul>
              </SectionBlock>
            </Reveal>

            {/* Our process */}
            <Reveal>
              <SectionBlock
                eyebrow="Our process"
                title="How we handle it"
                icon={Clock}
              >
                <ol className="space-y-6">
                  {service.process.map((p, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] gap-4 border-b border-border pb-6 last:border-b-0 last:pb-0"
                    >
                      <div className="flex flex-col items-center">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface font-mono text-[0.86rem] font-semibold text-ink">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {i < service.process.length - 1 && (
                          <span className="mt-2 h-full w-px flex-1 bg-border" />
                        )}
                      </div>
                      <div className="pt-1.5">
                        <h3 className="font-serif text-[1.1rem] font-medium text-ink">
                          {p.step}
                        </h3>
                        <p className="mt-1.5 font-sans text-[0.92rem] leading-relaxed text-body">
                          {p.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </SectionBlock>
            </Reveal>

            {/* Documents required */}
            <Reveal>
              <SectionBlock
                eyebrow="Documents required"
                title="What to keep ready"
                icon={FileText}
              >
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.documents.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-border bg-paper text-muted-foreground">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      <span className="font-sans text-[0.9rem] leading-relaxed text-body">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-sans text-[0.82rem] italic leading-relaxed text-muted-foreground">
                  Don&apos;t have everything? Send what you have — we&apos;ll
                  tell you what&apos;s missing and how to get it.
                </p>
              </SectionBlock>
            </Reveal>

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <Reveal>
                <SectionBlock
                  eyebrow="FAQs"
                  title="Questions about this service"
                  icon={MessageCircle}
                >
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="faq-0"
                    className="rounded-lg border border-border bg-card"
                  >
                    {service.faqs.map((f, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="border-b border-border last:border-b-0 px-5"
                      >
                        <AccordionTrigger className="font-serif text-[1rem] font-medium text-ink hover:no-underline">
                          {f.q}
                        </AccordionTrigger>
                        <AccordionContent className="font-sans text-[0.92rem] leading-relaxed text-body">
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </SectionBlock>
              </Reveal>
            )}
          </div>

          {/* ---------- RIGHT (sticky summary card) ---------- */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <SummaryCard service={service} Icon={Icon} />
            </div>
          </aside>
        </div>
      </section>

      {/* ============ RELATED (same category) ============ */}
      <RelatedServices service={service} />

      <CtaBand
        title="Ready to get started?"
        desc="Book a free 20-minute call and we'll map out exactly what you need."
      />
    </>
  );
}

/* ---------- Sub-components ---------- */

function SectionBlock({
  eyebrow,
  title,
  icon: Icon,
  children,
}: {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3 border-b border-border pb-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface text-ink ring-1 ring-border">
          <Icon className="h-4 w-4" strokeWidth={1.6} />
        </span>
        <div>
          <span className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </span>
          <h2 className="font-serif text-[1.4rem] font-medium leading-tight text-ink">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
}

function SummaryCard({
  service,
  Icon,
}: {
  service: Service;
  Icon: LucideIcon;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      {/* header */}
      <div className="flex items-center gap-3 border-b border-border bg-surface px-5 py-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-paper text-ink ring-1 ring-border">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <div className="min-w-0">
          <p className="truncate font-serif text-[1rem] font-medium text-ink">
            {service.title}
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
            {service.category}
          </p>
        </div>
      </div>

      {/* meta rows */}
      <div className="divide-y divide-border">
        <div className="px-5 py-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
            Timeline
          </p>
          <p className="mt-1.5 font-mono text-[0.86rem] font-medium leading-snug text-ink">
            {service.timeline}
          </p>
        </div>
        <div className="px-5 py-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
            Pricing
          </p>
          <p className="mt-1.5 font-mono text-[1.05rem] font-semibold leading-snug text-ink">
            {service.pricing}
          </p>
        </div>
        {service.comingSoon && (
          <div className="px-5 py-3">
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-gold">
              Coming soon
            </span>
          </div>
        )}
      </div>

      {/* CTAs */}
      <div className="space-y-2.5 border-t border-border px-5 py-5">
        <Link
          href="/book"
          className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-gold px-5 font-sans text-[0.92rem] font-semibold text-ink transition-all hover:bg-gold-light"
        >
          Book a free consultation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-border bg-paper px-5 font-sans text-[0.92rem] font-medium text-ink transition-colors hover:bg-surface"
        >
          <MessageCircle className="h-4 w-4 text-success" />
          Chat on WhatsApp
        </Link>
        <p className="pt-1 text-center font-sans text-[0.74rem] leading-snug text-muted-foreground">
          Replies within 1 working day · No obligation
        </p>
      </div>
    </div>
  );
}

function RelatedServices({ service }: { service: Service }) {
  const related = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-y border-border bg-surface/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                Related
              </span>
              <h2 className="mt-2 font-serif text-[1.6rem] font-medium leading-tight text-ink sm:text-[2rem]">
                More in {service.category}
              </h2>
            </div>
            <Link
              href={`/services#${slugify(service.category)}`}
              className="group hidden items-center gap-1.5 font-sans text-[0.9rem] font-medium text-ink hover:text-gold sm:inline-flex"
            >
              View all
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => {
            const RIcon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-ink/25 hover:shadow-[0_16px_40px_-26px_rgba(14,42,71,0.4)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-border">
                    <RIcon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 inline-block font-serif text-[1.08rem] font-medium leading-snug text-ink">
                    <span className="relative">
                      {s.title}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                    </span>
                  </h3>
                  <p className="mt-2 font-sans text-[0.84rem] leading-relaxed text-body line-clamp-2">
                    {s.summary}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
