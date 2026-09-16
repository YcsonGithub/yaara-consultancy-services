import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { INDUSTRIES } from "@/lib/site";
import { SITE_IMAGES, INDUSTRY_IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/json-ld";

export const metadata = {
  title: "Industries we serve",
  description:
    "Yaara serves six kinds of Indian businesses with different compliance realities — startups & founders, freelancers & professionals, SMBs, regulated professionals (doctors/lawyers/architects), NGOs & trusts, and manufacturers & traders. Each gets specialised handling.",
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Industries we serve"
        title={
          <>
            We speak the language of{" "}
            <span className="italic font-light">
              your kind of business
            </span>
            .
          </>
        }
        intro="A freelancer and a Pvt Ltd founder have completely different anxieties. These pages speak to each — specifically."
        aside={
          <Image
            src={SITE_IMAGES.industriesHero.src}
            alt={SITE_IMAGES.industriesHero.alt}
            width={SITE_IMAGES.industriesHero.width}
            height={SITE_IMAGES.industriesHero.height}
            className="h-52 w-full object-cover sm:h-60 lg:h-68"
          />
        }
      />

      {/* ============ INDUSTRY ANCHOR NAV ============ */}
      <section className="border-b border-border bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-[0.82rem] sm:text-[0.88rem]">
            <span className="font-mono text-[0.72rem] uppercase tracking-wider text-muted-foreground">
              Jump to:
            </span>
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries#${ind.slug}`}
                className="py-1 font-medium text-ink/80 transition-colors hover:text-gold"
              >
                {ind.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRY SECTIONS ============ */}
      {INDUSTRIES.map((ind, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={ind.slug}
            id={ind.slug}
            className={cn(
              "scroll-mt-28 py-20 sm:py-24",
              i % 2 === 1 ? "bg-surface/50 border-y border-border" : "paper-grain"
            )}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                {/* Narrative column */}
                <Reveal
                  className={cn("lg:col-span-6", reversed && "lg:order-2")}
                  delay={0.04}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                      0{i + 1}
                    </span>
                    <span className="font-mono text-[0.72rem] uppercase tracking-wider text-muted-foreground">
                      Industry
                    </span>
                  </div>
                  <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.4rem]">
                    {ind.title}
                  </h2>
                  <p className="mt-5 font-sans text-[1rem] leading-[1.75] text-body">
                    {ind.desc}
                  </p>

                  {/* Challenges */}
                  <div className="mt-8">
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                      What we typically see
                    </p>
                    <ul className="mt-4 space-y-4">
                      {ind.challenges.map((c) => (
                        <li
                          key={c.title}
                          className="flex gap-3.5 border-l-2 border-border pl-4 transition-colors hover:border-gold"
                        >
                          <AlertCircle
                            className="mt-1 h-4 w-4 shrink-0 text-gold"
                            strokeWidth={1.5}
                          />
                          <div>
                            <p className="font-serif text-[1.05rem] font-medium text-ink">
                              {c.title}
                            </p>
                            <p className="mt-1 font-sans text-[0.92rem] leading-relaxed text-body">
                              {c.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {/* Services + outcomes card */}
                <Reveal
                  className={cn("lg:col-span-6", reversed && "lg:order-1")}
                  delay={0.1}
                >
                  <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_44px_-30px_rgba(14,42,71,0.35)]">
                    {/* Industry image banner — placeholder until AI artwork replaces it (see `AI bundles/image-prompts.json`) */}
                    {INDUSTRY_IMAGES[ind.slug] && (
                      <div className="relative border-b border-border">
                        <Image
                          src={INDUSTRY_IMAGES[ind.slug].src}
                          alt={INDUSTRY_IMAGES[ind.slug].alt}
                          width={INDUSTRY_IMAGES[ind.slug].width}
                          height={INDUSTRY_IMAGES[ind.slug].height}
                          className="h-40 w-full object-cover sm:h-44"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gold/70" />
                      </div>
                    )}

                    {/* Services block */}
                    <div className="border-b border-border p-7 sm:p-8">
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-gold">
                        Typical services
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {ind.services.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center rounded-md border border-border bg-surface/70 px-3 py-1.5 font-sans text-[0.82rem] font-medium text-ink"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.85rem] font-medium text-ink hover:text-gold"
                      >
                        See full service catalog
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    {/* Outcomes block */}
                    <div className="p-7 sm:p-8">
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-gold">
                        What you get
                      </p>
                      <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {ind.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                              strokeWidth={1.5}
                            />
                            <span className="font-sans text-[0.88rem] leading-snug text-body">
                              {o}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="font-serif text-[0.95rem] italic leading-snug text-ink/75">
                          Sound like your situation?
                        </p>
                        <Link
                          href="/book"
                          className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-5 font-sans text-[0.88rem] font-semibold text-paper transition-colors hover:bg-ink-dark"
                        >
                          Book a free call
                          <ArrowRight className="h-4 w-4 text-gold-light transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============ NOT SURE WHERE YOU FIT? — navy band ============ */}
      <section className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20">
        <div className="gold-rule absolute inset-x-0 top-0" />
        <div
          className="pointer-events-none absolute -left-32 -bottom-24 h-96 w-96 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(184,135,59,0.5), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold-light">
              Not on the list?
            </span>
            <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-paper sm:text-[2.4rem]">
              Not sure where you fit?
            </h2>
            <p className="mt-4 font-sans text-[1rem] leading-relaxed text-paper/75">
              These six cover most of who we serve — but if your business sits at an
              edge, book a free call and we&apos;ll tell you honestly whether
              we&apos;re the right partner or refer you to someone who is.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-sans text-[0.97rem] font-semibold text-ink transition-all hover:bg-gold-light"
            >
              Book a free consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-paper/25 px-7 font-sans text-[0.97rem] font-medium text-paper transition-colors hover:bg-paper/10"
            >
              Browse all services
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
