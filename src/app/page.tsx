import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { FounderSignature } from "@/components/site/logo";
import { ConsultationForm } from "@/components/site/consultation-form";
import {
  SERVICES,
  featuredServices,
  CATEGORY_ORDER,
  CATEGORY_DESCRIPTIONS,
} from "@/lib/services";
import {
  INDUSTRIES,
  FAQS,
  STATS,
  PROCESS_STEPS,
  SITE,
  CONTACT,
} from "@/lib/site";

export default function Home() {
  const featured = featuredServices();
  const topFaq = FAQS.slice(0, 3);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden paper-grain">
        <div className="gold-rule absolute inset-x-0 top-0" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7 lg:pr-6">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-7 bg-gold" />
                Accounting · Tax · Compliance
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[4.1rem]">
                Your numbers, handled by a{" "}
                <span className="relative whitespace-nowrap">
                  <span className="italic font-light">real&nbsp;person</span>
                  <svg className="absolute -bottom-1 left-0 h-2 w-full text-gold" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 5c40-3 120-4 196-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
                .
                <br />
                Not a portal. Not a ticket queue.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl font-sans text-[1.05rem] leading-[1.7] text-body">
                Yaara is the accounting and compliance partner for Indian founders
                and small businesses who want someone who actually understands
                their books. GST, ITR, registrations, ROC, payroll, advisory &mdash;
                filed on time, explained in plain English, every time.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/book" className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-sans text-[0.97rem] font-semibold text-ink transition-all hover:bg-gold-light hover:shadow-[0_10px_30px_-12px_rgba(184,135,59,0.7)]">
                  Book a free 20-minute call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/services" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-transparent px-7 font-sans text-[0.97rem] font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface">
                  Explore services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 font-mono text-[0.78rem] text-muted-foreground">
                No sales pitch. Just a straight answer &mdash; and a clear next step.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18} y={24}>
              <HeroCalendarMotif />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section aria-label="At a glance" className="border-y border-border bg-surface/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-5 sm:px-8 sm:divide-y-0 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="flex flex-col gap-1 px-4 py-7 sm:px-7 sm:py-9">
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-[2rem] font-semibold leading-none text-ink sm:text-[2.4rem]">{s.value}</span>
                <span className="font-mono text-[0.95rem] font-medium text-gold">{s.unit}</span>
              </div>
              <p className="font-sans text-[0.82rem] leading-snug text-muted-foreground sm:text-[0.88rem]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SERVICES TEASER ============ */}
      <section className="paper-grain py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">01 — Services</span>
                <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                  Everything your business needs to stay{" "}
                  <span className="italic font-light">compliant and current</span>.
                </h2>
                <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                  30+ services across tax, registrations, accounting, payroll and advisory &mdash; one partner, one point of contact.
                </p>
              </div>
              <Link href="/services" className="group inline-flex items-center gap-1.5 font-sans text-[0.92rem] font-medium text-ink hover:text-gold">
                View all services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          {/* featured services */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            {featured.slice(0, 2).map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <Link href={`/services/${s.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.4)] sm:p-9">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-border">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </span>
                      {s.comingSoon && (
                        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-gold">Coming soon</span>
                      )}
                    </div>
                    <h3 className="mt-6 inline-block font-serif text-[1.5rem] font-medium text-ink">
                      <span className="relative">
                        {s.title}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                      </span>
                    </h3>
                    <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-body">{s.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-sans text-[0.86rem] font-medium text-ink">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* category chips linking to /services */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CATEGORY_ORDER.map((cat, i) => (
              <Reveal key={cat} delay={i * 0.04}>
                <Link href={`/services#${slugify(cat)}`} className="group block rounded-lg border border-border bg-card p-5 transition-all hover:border-ink/25 hover:bg-surface/60">
                  <p className="font-serif text-[0.98rem] font-medium text-ink">{cat}</p>
                  <p className="mt-1.5 font-sans text-[0.78rem] leading-snug text-muted-foreground line-clamp-2">{CATEGORY_DESCRIPTIONS[cat]}</p>
                  <span className="mt-3 inline-flex items-center gap-1 font-mono text-[0.66rem] uppercase tracking-wider text-gold">
                    {servicesByCategoryCount(cat)} services
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS TEASER ============ */}
      <section className="border-y border-border bg-surface/50 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">02 — How we work</span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                What actually happens after you{" "}
                <span className="italic font-light">hand over documents</span>.
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                Compliance clients are rightly anxious about the &ldquo;black box&rdquo; after they send their papers. Here is the whole process &mdash; nothing hidden.
              </p>
            </div>
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
            <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {PROCESS_STEPS.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 0.08} className="relative">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-paper font-mono text-[1rem] font-semibold text-ink shadow-[0_6px_18px_-10px_rgba(14,42,71,0.3)]">{s.n}</span>
                    <h3 className="font-serif text-[1.4rem] font-medium text-ink lg:mt-5">{s.title}</h3>
                  </div>
                  <p className="mt-3 font-sans text-[0.92rem] leading-relaxed text-body lg:mt-3">{s.desc}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ FOUNDER NOTE TEASER ============ */}
      <section id="about" className="paper-grain py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5" y={24}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="duotone-navy relative overflow-hidden rounded-xl border border-border shadow-[0_30px_60px_-30px_rgba(14,42,71,0.45)]">
                  <Image src="/founder/founder-at-work.png" alt={`Portrait of ${SITE.founder}, ${SITE.founderRole} of Yaara Consultancy Services`} width={864} height={1152} className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-3 max-w-[16rem] rotate-1 rounded-lg border border-border bg-paper px-4 py-3 shadow-[0_14px_30px_-16px_rgba(14,42,71,0.4)] sm:-right-5">
                  <p className="font-serif text-[1rem] font-semibold text-ink">{SITE.founder}</p>
                  <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">{SITE.founderRole} · {SITE.experienceYears} yrs hands-on</p>
                </div>
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-tl-lg border-l-2 border-t-2 border-gold" />
              </div>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal>
                <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">03 — Founder&apos;s note</span>
              </Reveal>
              <Reveal delay={0.05}>
                <blockquote className="mt-5 font-serif text-[1.5rem] font-light italic leading-[1.45] text-ink sm:text-[1.9rem]">
                  &ldquo;I started Yaara because the founders I kept helping on the side were being treated like ticket numbers by the portals they paid. You deserve a person who knows your name{" "}
                  <span className="not-italic font-medium">and</span> your numbers.&rdquo;
                </blockquote>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 font-sans text-[1rem] leading-[1.75] text-body">
                  I&apos;m not a Chartered Accountant, and I won&apos;t pretend to be. I have five years of hands-on accounting experience. For work that legally requires a practicing CA&apos;s signature, I work with an empanelled network of independent CAs. What you get with Yaara: <span className="font-medium text-ink">me</span> &mdash; a single point of contact who knows your books.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex items-center justify-between gap-6 border-t border-border pt-6">
                  <FounderSignature />
                  <Link href="/about" className="inline-flex items-center gap-1.5 font-sans text-[0.9rem] font-medium text-ink hover:text-gold">
                    Read full story
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES TEASER ============ */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">04 — Industries we serve</span>
                <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                  We speak the language of{" "}
                  <span className="italic font-light">your kind of business</span>.
                </h2>
              </div>
              <Link href="/industries" className="group inline-flex items-center gap-1.5 font-sans text-[0.92rem] font-medium text-ink hover:text-gold">
                All industries
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.slice(0, 5).map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 0.06}>
                <Link href={`/industries#${ind.slug}`} className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-ink/25 hover:shadow-[0_16px_40px_-26px_rgba(14,42,71,0.4)]">
                  <h3 className="inline-block font-serif text-[1.2rem] font-medium text-ink">
                    <span className="relative">
                      {ind.title}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                    </span>
                  </h3>
                  <p className="mt-2.5 font-sans text-[0.9rem] leading-relaxed text-body">{ind.blurb}</p>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.12}>
              <Link href="/industries" className="group flex h-full flex-col justify-between rounded-lg border border-ink bg-ink p-6 text-paper transition-all hover:bg-ink-dark">
                <p className="font-serif text-[1.2rem] font-medium leading-snug">Not sure where you fit?</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-[0.9rem] font-medium text-gold-light">
                  See all industries
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CALENDAR + PRICING TEASER ============ */}
      <section className="border-y border-border bg-surface/50 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">05 — Compliance calendar</span>
              <h2 className="mt-3 font-serif text-[1.8rem] font-medium leading-tight text-ink sm:text-[2.2rem]">
                Deadlines you can&apos;t afford to miss.
              </h2>
              <p className="mt-4 font-sans text-[0.96rem] leading-relaxed text-body">
                GST, TDS, ITR, advance tax &mdash; we track them so you don&apos;t have to. Bookmark our live calendar.
              </p>
              <Link href="/resources/compliance-calendar" className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-ink px-6 font-sans text-[0.92rem] font-medium text-paper transition-colors hover:bg-ink-dark">
                <CalendarClock className="h-4 w-4 text-gold" />
                Open the calendar
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">06 — Pricing</span>
              <h2 className="mt-3 font-serif text-[1.8rem] font-medium leading-tight text-ink sm:text-[2.2rem]">
                Transparent. No &ldquo;get a quote&rdquo; walls.
              </h2>
              <p className="mt-4 font-sans text-[0.96rem] leading-relaxed text-body">
                Retainers from <span className="font-mono font-semibold text-ink">&#8377;1,999/mo</span> and flat-fee one-offs. What you see is what you pay.
              </p>
              <Link href="/pricing" className="mt-6 inline-flex h-11 items-center gap-2 rounded-md border border-ink px-6 font-sans text-[0.92rem] font-medium text-ink transition-colors hover:bg-ink hover:text-paper">
                See all pricing
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ TEASER ============ */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">07 — Questions, answered straight</span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                The things founders{" "}
                <span className="italic font-light">actually ask us</span>.
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                We&apos;d rather you ask the awkward question up front than find out the answer later.
              </p>
              <Link href="/resources/faqs" className="mt-6 inline-flex items-center gap-1.5 font-sans text-[0.92rem] font-medium text-ink hover:text-gold">
                All FAQs
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal className="lg:col-span-7" y={20}>
              <ul className="divide-y divide-border rounded-lg border border-border bg-card">
                {topFaq.map((f) => (
                  <li key={f.q} className="p-6">
                    <p className="font-serif text-[1.1rem] font-medium text-ink">{f.q}</p>
                    <p className="mt-2 font-sans text-[0.9rem] leading-relaxed text-body line-clamp-3">{f.a}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BOOKING CTA ============ */}
      <section className="relative overflow-hidden bg-ink py-16 text-paper sm:py-24 lg:py-28">
        <div className="gold-rule absolute inset-x-0 top-0" />
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(184,135,59,0.5), transparent 70%)" }} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold-light">08 — Book a free consultation</span>
            <h2 className="mt-3 font-serif text-[2.1rem] font-medium leading-tight text-paper sm:text-[2.8rem]">
              Twenty minutes. No pitch.{" "}
              <span className="italic font-light text-gold-light">Just a straight answer.</span>
            </h2>
            <p className="mt-5 max-w-md font-sans text-[1rem] leading-[1.7] text-paper/75">
              Tell us about your business. We&apos;ll reply within one working day with a clear next step and a transparent price.
            </p>
            <ul className="mt-9 space-y-4">
              <PromiseItem icon={Clock} title="Reply within 1 working day" desc="Usually much faster. Mornings get same-day replies." />
              <PromiseItem icon={ShieldCheck} title="Your details stay private" desc="Encrypted, never shared, retained only for compliance." />
              <PromiseItem icon={MessageCircle} title="Continue on WhatsApp" desc="Lower friction than a portal login." />
            </ul>
          </div>
          <div className="lg:col-span-7">
            <ConsultationForm variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}

// ---- helpers ----
function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function servicesByCategoryCount(cat: string) {
  return SERVICES.filter((s) => s.category === cat).length;
}

function PromiseItem({ icon: Icon, title, desc }: { icon: typeof Clock; title: string; desc: string }) {
  return (
    <li className="flex gap-3.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-paper/20 bg-paper/5 text-gold-light">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div>
        <p className="font-sans text-[0.92rem] font-semibold text-paper">{title}</p>
        <p className="font-sans text-[0.84rem] text-paper/65">{desc}</p>
      </div>
    </li>
  );
}

function HeroCalendarMotif() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const today = 11;
  const dueDay = 20;
  return (
    <div className="relative">
      <div className="absolute -right-3 -top-4 z-10 rotate-2 rounded-lg border border-border bg-paper px-3.5 py-2 shadow-[0_12px_30px_-14px_rgba(14,42,71,0.35)] sm:-right-5">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-success" />
          <span className="font-mono text-[0.72rem] font-medium uppercase tracking-wide text-ink">GSTR-3B filed</span>
        </div>
        <p className="mt-0.5 font-sans text-[0.66rem] text-muted-foreground">on time, every month</p>
      </div>
      <article className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(14,42,71,0.4)]">
        <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-4">
          <div className="flex items-center gap-2 text-ink">
            <CalendarClock className="h-4 w-4 text-gold" />
            <span className="font-serif text-[1.05rem] font-medium">Compliance desk</span>
          </div>
          <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">live view</span>
        </div>
        <div className="px-5 pb-2 pt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-sans text-[0.82rem] font-semibold text-ink">This month</span>
            <span className="font-mono text-[0.72rem] text-muted-foreground">M T W T F S S</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d) => {
              const isToday = d === today;
              const isDue = d === dueDay;
              return (
                <div key={d} className={`flex h-6 items-center justify-center rounded font-mono text-[0.62rem] ${isDue ? "bg-gold/20 font-semibold text-gold ring-1 ring-gold/40" : isToday ? "bg-ink text-paper" : "text-muted-foreground"}`}>
                  {d}
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-2.5 border-t border-border px-5 py-4">
          <p className="font-sans text-[0.72rem] font-medium uppercase tracking-wider text-muted-foreground">Upcoming</p>
          <div className="flex items-center justify-between"><span className="font-sans text-[0.88rem] text-body">GSTR-3B</span><span className="font-mono text-[0.78rem] font-medium text-warning">20th</span></div>
          <div className="flex items-center justify-between"><span className="font-sans text-[0.88rem] text-body">TDS payment</span><span className="font-mono text-[0.78rem] font-medium text-ink">7th</span></div>
          <div className="flex items-center justify-between"><span className="font-sans text-[0.88rem] text-body">Advance tax</span><span className="font-mono text-[0.78rem] font-medium text-ink">15th</span></div>
        </div>
        <div className="flex items-center gap-2 border-t border-border bg-surface px-5 py-3">
          <FileCheck2 className="h-4 w-4 text-success" />
          <span className="font-sans text-[0.78rem] text-body"><span className="font-semibold text-ink">0</span> overdue filings this quarter</span>
        </div>
      </article>
      <div className="pointer-events-none absolute -bottom-6 left-6 right-6 h-10 rounded-[50%] bg-ink/10 blur-2xl" />
    </div>
  );
}
