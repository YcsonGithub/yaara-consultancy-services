import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Clock,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Handshake,
  Scale,
  Target,
  HeartHandshake,
} from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { FounderSignature } from "@/components/site/logo";
import { SITE, CONTACT, STATS } from "@/lib/site";

export const metadata = {
  title: "About — A real person, not a portal",
  description:
    "Yaara Consultancy Services was founded in 2024 by Anakali Pawan Kalyan in Hyderabad. Five years of hands-on accounting experience, a CA partner network for statutory sign-off, and a single point of contact who knows your name and your numbers.",
};

const WHY_YAARA = [
  {
    icon: MessageCircle,
    title: "You get me, not a ticket queue",
    desc: "No helpdesk. No ticket IDs. You message one person — the one who actually does your work — and they reply within a working day. That is the whole model.",
  },
  {
    icon: Clock,
    title: `${SITE.experienceYears} years hands-on, honestly stated`,
    desc: "Not inflated. Not dressed up. Five real years of accounting work for real Indian businesses — freelancers, Pvt Ltds, NGOs, professionals, traders. That is what I bring.",
  },
  {
    icon: Users,
    title: "CA partner network for statutory sign-off",
    desc: "Audits and certifications legally require a practicing CA. We engage an empanelled network of independent CAs for those — the same model every reputable compliance platform uses.",
  },
  {
    icon: ShieldCheck,
    title: "WhatsApp-first, 1-day reply",
    desc: "Send a photo, ask a question, share a document — on WhatsApp. A real reply within one working day. Try getting that from a portal.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Honesty over inflation",
    desc: "We will not claim experience we do not have, or certifications we do not hold. If something is outside our scope, we will say so and refer you to someone who can.",
  },
  {
    icon: Sparkles,
    title: "Clarity over jargon",
    desc: "Every filing explained in plain English. You will always understand what was filed, why, and what comes next — without needing a dictionary of Indian tax acronyms.",
  },
  {
    icon: Scale,
    title: "Precision over approximation",
    desc: "Books that reconcile to the rupee. Deadlines met by the day. Filings that survive scrutiny. We treat your numbers the way we would treat our own.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership over transactions",
    desc: "We are not a one-time filing service. Most of our clients stay for years — because we get to know their business and flag what is coming before it lands.",
  },
];

export default function AboutPage() {
  const [YouGetMe, ExpHonest, CaNetwork, WhatsappFirst] = WHY_YAARA.map((w) => w.icon);
  return (
    <>
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="About Yaara"
        title={
          <>
            A real person.{" "}
            <span className="italic font-light">Not a portal.</span>
          </>
        }
        intro="Yaara Consultancy Services is the accounting and compliance partner for Indian founders and small businesses who want someone who actually understands their numbers. Founded in 2024 by Anakali Pawan Kalyan, based in Hyderabad."
      />

      {/* ============ FOUNDER'S STORY ============ */}
      <section className="paper-grain py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Portrait */}
            <Reveal className="lg:col-span-5" y={24}>
              <div className="relative mx-auto max-w-sm lg:max-w-none lg:sticky lg:top-28">
                <div className="duotone-navy relative overflow-hidden rounded-xl border border-border shadow-[0_30px_60px_-30px_rgba(14,42,71,0.45)]">
                  <Image
                    src="/founder/founder-portrait.png"
                    alt={`Portrait of ${SITE.founder}, ${SITE.founderRole} of Yaara Consultancy Services`}
                    width={864}
                    height={1152}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Name plate overlay — like the home page */}
                <div className="absolute -bottom-5 -right-3 max-w-[16rem] rotate-1 rounded-lg border border-border bg-paper px-4 py-3 shadow-[0_14px_30px_-16px_rgba(14,42,71,0.4)] sm:-right-5">
                  <p className="font-serif text-[1rem] font-semibold text-ink">
                    {SITE.founder}
                  </p>
                  <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                    {SITE.founderRole} · {SITE.experienceYears} yrs hands-on
                  </p>
                </div>
                {/* Gold corner accent */}
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-tl-lg border-l-2 border-t-2 border-gold" />
              </div>
            </Reveal>

            {/* Narrative */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                  01 — Founder&apos;s story
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.4rem]">
                  Five years of books.{" "}
                  <span className="italic font-light">One name on the door.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-7 space-y-5 font-sans text-[1rem] leading-[1.75] text-body">
                  <p>
                    I&apos;m {SITE.founder}. I started Yaara in {SITE.foundedYear} after
                    five years of doing accounting work for Indian founders,
                    freelancers, and small businesses — first as an employee, then on
                    my own. The longer I did it, the more I noticed the same pattern:
                    bright, capable people paying good money to portals that treated
                    them like a ticket in a queue.
                  </p>
                  <p>
                    I&apos;m not a Chartered Accountant, and I won&apos;t pretend to
                    be. I have five real years of hands-on accounting experience —
                    GST, ITR, TDS, bookkeeping, payroll, ROC. That is enough to handle
                    the day-to-day of nearly every small business in India. For work
                    that legally requires a practicing CA&apos;s signature — statutory
                    audits, certain certifications — I engage an empanelled network of
                    independent Chartered Accountants.
                  </p>
                  <p>
                    That is the same model ClearTax, Vakilsearch, and IndiaFilings
                    use. The difference is who handles your file. With a portal,
                    you&apos;re a ticket. With Yaara, you&apos;re{" "}
                    <span className="font-medium text-ink">my client</span> — and
                    you&apos;ll hear from me, by name, on WhatsApp, within a working
                    day.
                  </p>
                  <p>
                    If you want software, use a portal. If you want a person who
                    knows your name and your numbers, that&apos;s the work I do.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex items-center justify-between gap-6 border-t border-border pt-6">
                  <FounderSignature />
                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-1.5 font-sans text-[0.9rem] font-medium text-ink hover:text-gold"
                  >
                    Book a call with me
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY YAARA — differentiator cards (varied layouts) ============ */}
      <section className="border-y border-border bg-surface/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                02 — Why Yaara
              </span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                Four things that are{" "}
                <span className="italic font-light">actually different</span>.
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                Not feature bullets. Not marketing copy. The four things that
                genuinely separate working with Yaara from working with anyone else.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Card 1 — wide, accent quote-style */}
            <Reveal className="lg:col-span-7" delay={0.04}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.35)] sm:p-10">
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink text-paper">
                    <YouGetMe className="h-6 w-6 text-gold-light" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.5rem] font-medium text-ink">
                      {WHY_YAARA[0].title}
                    </h3>
                    <p className="mt-3 font-sans text-[0.97rem] leading-relaxed text-body">
                      {WHY_YAARA[0].desc}
                    </p>
                  </div>
                </div>
                <p className="mt-6 border-l-2 border-gold pl-4 font-serif text-[1.05rem] italic leading-snug text-ink/80">
                  &ldquo;If you wanted software, you&apos;d use a portal. You came to
                  Yaara because you wanted a person.&rdquo;
                </p>
              </div>
            </Reveal>

            {/* Card 2 — narrow, stat-style */}
            <Reveal className="lg:col-span-5" delay={0.08}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-8 transition-all hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.35)] sm:p-10">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-border">
                    <ExpHonest className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.4rem] font-medium text-ink">
                    {WHY_YAARA[1].title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-body">
                    {WHY_YAARA[1].desc}
                  </p>
                </div>
                <div className="mt-6 flex items-baseline gap-2 border-t border-border pt-5">
                  <span className="font-mono text-[2rem] font-semibold leading-none text-ink">
                    {SITE.experienceYears}
                  </span>
                  <span className="font-mono text-[0.85rem] uppercase tracking-wider text-muted-foreground">
                    years, hands-on
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Card 3 — wide, two-column content */}
            <Reveal className="lg:col-span-7" delay={0.12}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.35)] sm:p-10">
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-border">
                    <CaNetwork className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.4rem] font-medium text-ink">
                      {WHY_YAARA[2].title}
                    </h3>
                    <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-body">
                      {WHY_YAARA[2].desc}
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-border pt-5 sm:grid-cols-2">
                  {[
                    "Statutory audits (Companies Act)",
                    "Tax audits under 44AB",
                    "GST audits (GSTR-9C)",
                    "Certifications & attestations",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      <span className="font-sans text-[0.85rem] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Card 4 — narrow, action-style */}
            <Reveal className="lg:col-span-5" delay={0.16}>
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-ink bg-ink p-8 text-paper transition-all hover:bg-ink-dark sm:p-10">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-paper/10 text-paper ring-1 ring-paper/15">
                    <WhatsappFirst className="h-6 w-6 text-gold-light" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.4rem] font-medium text-paper">
                    {WHY_YAARA[3].title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-paper/75">
                    {WHY_YAARA[3].desc}
                  </p>
                </div>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 font-sans text-[0.88rem] font-semibold text-ink transition-colors hover:bg-gold-light"
                >
                  Message on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CA / CS PARTNER NETWORK ============ */}
      <section className="paper-grain py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                03 — Our CA / CS partner network
              </span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                Honest about what we are{" "}
                <span className="italic font-light">— and what we aren&apos;t</span>.
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                Yaara is not a Chartered Accountancy firm. For statutory audits and
                certifications that legally require a practicing CA&apos;s signature,
                we engage an empanelled network of independent Chartered
                Accountants. This is the same model ClearTax, Vakilsearch, and
                IndiaFilings use — we just say it out loud.
              </p>
            </div>
          </Reveal>

          {/* Diagram + callout */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Flow diagram */}
            <Reveal className="lg:col-span-7" delay={0.05}>
              <div className="h-full rounded-xl border border-border bg-card p-8 sm:p-10">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  How statutory work flows
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-stretch">
                  {/* You */}
                  <div className="flex-1 rounded-lg border border-border bg-surface/60 p-5">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-gold">01</span>
                    <p className="mt-1.5 font-serif text-[1.05rem] font-medium text-ink">You</p>
                    <p className="mt-1 font-sans text-[0.8rem] leading-snug text-muted-foreground">
                      One WhatsApp. One person. One relationship.
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="hidden items-center sm:flex">
                    <ArrowRight className="h-5 w-5 text-gold" />
                  </div>
                  <div className="hidden items-center sm:flex">
                    <ArrowRight className="h-5 w-5 text-gold" />
                  </div>
                  {/* Yaara */}
                  <div className="flex-1 rounded-lg border-2 border-ink bg-ink p-5 text-paper">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-gold-light">02</span>
                    <p className="mt-1.5 font-serif text-[1.05rem] font-medium text-paper">Yaara</p>
                    <p className="mt-1 font-sans text-[0.8rem] leading-snug text-paper/75">
                      Prepares, reviews, and routes the file. Owns the deadline.
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="hidden items-center sm:flex">
                    <ArrowRight className="h-5 w-5 text-gold" />
                  </div>
                  <div className="hidden items-center sm:flex">
                    <ArrowRight className="h-5 w-5 text-gold" />
                  </div>
                  {/* CA partner */}
                  <div className="flex-1 rounded-lg border border-border bg-surface/60 p-5">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-gold">03</span>
                    <p className="mt-1.5 font-serif text-[1.05rem] font-medium text-ink">CA partner</p>
                    <p className="mt-1 font-sans text-[0.8rem] leading-snug text-muted-foreground">
                      Signs off where the law requires it. Verifiable, accountable.
                    </p>
                  </div>
                </div>
                <p className="mt-6 font-sans text-[0.85rem] leading-relaxed text-body">
                  For everything that does <span className="font-medium text-ink">not</span> require
                  a CA&apos;s signature — GST filings, ITR, TDS, bookkeeping, payroll,
                  ROC basics, advisory — the file stays with Yaara end-to-end.
                </p>
              </div>
            </Reveal>

            {/* Transparency callout */}
            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-gold/40 bg-surface/60 p-8 sm:p-10">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold ring-1 ring-gold/30">
                    <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.4rem] font-medium text-ink">
                    Why we say this out loud
                  </h3>
                  <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-body">
                    Some consultancies dress up the CA-network model as their own
                    in-house signature. We don&apos;t. You deserve to know exactly
                    who signs your filings — and that the signature is real,
                    verifiable, and accountable.
                  </p>
                </div>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {[
                    "Same model as ClearTax / Vakilsearch / IndiaFilings",
                    "Every sign-off traceable to a practicing CA",
                    "You always know what is in-scope and what isn't",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                      <span className="font-sans text-[0.88rem] leading-snug text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="border-y border-border bg-surface/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                04 — Values
              </span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                What we choose, when there&apos;s{" "}
                <span className="italic font-light">a trade-off</span>.
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                Values aren&apos;t posters on a wall — they&apos;re the choices you
                make when it costs you something. These are ours.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-ink/25 hover:shadow-[0_16px_40px_-26px_rgba(14,42,71,0.35)] sm:p-8">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-border">
                        <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                          0{i + 1}
                        </p>
                        <h3 className="mt-1 font-serif text-[1.25rem] font-medium text-ink">
                          {v.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 font-sans text-[0.95rem] leading-relaxed text-body">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="paper-grain py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-2 divide-x divide-y divide-border border border-border sm:divide-y-0 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 bg-card px-5 py-7 sm:px-7 sm:py-9">
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-[2rem] font-semibold leading-none text-ink sm:text-[2.4rem]">
                      {s.value}
                    </span>
                    <span className="font-mono text-[0.95rem] font-medium text-gold">{s.unit}</span>
                  </div>
                  <p className="font-sans text-[0.82rem] leading-snug text-muted-foreground sm:text-[0.88rem]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Want to work with someone who knows your name?" />
    </>
  );
}
