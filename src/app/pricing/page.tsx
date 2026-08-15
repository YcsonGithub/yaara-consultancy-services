import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Receipt,
  ShieldAlert,
  CreditCard,
} from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { PRICING_TIERS, FLAT_FEES } from "@/lib/site";
import { cn } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/json-ld";

export const metadata = {
  title: "Pricing — transparent fees, no quote walls",
  description:
    "Transparent starting fees for Yaara Consultancy Services: three monthly retainer tiers (Starter ₹1,999, Growing ₹4,999, Established custom) plus a flat-fee reference table for 15 common one-off services. No 'get a quote' walls.",
};

const FAQ_PRICE = [
  {
    icon: ShieldAlert,
    q: "What's not included?",
    a: "Government fees (ROC, MCA, GST portal, trademark fees) are charged at actuals and shown separately on every invoice. Anything outside your retainer scope — say, a one-off audit or a new incorporation — is quoted upfront in writing before we start, never silently added later.",
  },
  {
    icon: Receipt,
    q: "Are there hidden charges?",
    a: "No. The price you see is the price you pay, plus government fees where they apply. If a filing needs an additional form, an amendment, or a notice response, we tell you the cost before doing the work — never after. Every invoice is itemised, in plain English.",
  },
  {
    icon: CreditCard,
    q: "How do payments work?",
    a: "Retainer fees are billed monthly in advance. One-off services are invoiced at engagement, before work begins. We accept UPI, bank transfer, and cheques. All invoices are GST-compliant where applicable — and you'll get a proper receipt every time.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Transparent pricing.{" "}
            <span className="italic font-light">
              No &ldquo;get a quote&rdquo; walls.
            </span>
          </>
        }
        intro="Most compliance portals hide pricing behind a form. Here are our real starting fees — what you see is what you pay, plus government fees where they apply."
      />

      {/* ============ RETAINER TIERS ============ */}
      <section className="paper-grain py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                01 — Monthly retainers
              </span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                Three plans.{" "}
                <span className="italic font-light">Honest boundaries.</span>
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                Most clients pick one of these. If none fits, we scope a custom one —
                and tell you the price before we start, not after.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, i) => {
              const featured = tier.featured;
              return (
                <Reveal key={tier.name} delay={i * 0.06} className="h-full">
                  <div
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-xl border p-7 transition-all sm:p-8",
                      featured
                        ? "border-ink bg-ink text-paper shadow-[0_30px_60px_-30px_rgba(14,42,71,0.5)]"
                        : "border-border bg-card hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.3)]"
                    )}
                  >
                    {featured && (
                      <div className="absolute right-0 top-0 flex items-center gap-1.5 rounded-bl-lg bg-gold px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-ink">
                        <Sparkles className="h-3 w-3" />
                        Most popular
                      </div>
                    )}

                    <h3
                      className={cn(
                        "font-serif text-[1.5rem] font-medium",
                        featured ? "text-paper" : "text-ink"
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 font-sans text-[0.9rem] leading-relaxed",
                        featured ? "text-paper/75" : "text-body"
                      )}
                    >
                      {tier.blurb}
                    </p>

                    {/* Price */}
                    <div className="mt-6 flex items-baseline gap-1 border-t border-b py-5"
                      style={{
                        borderColor: featured
                          ? "rgba(250,247,241,0.18)"
                          : "var(--border)",
                      }}
                    >
                      {tier.price !== "Custom" && (
                        <span
                          className={cn(
                            "font-sans text-[1.4rem] font-medium",
                            featured ? "text-paper/80" : "text-muted-foreground"
                          )}
                        >
                          ₹
                        </span>
                      )}
                      <span
                        className={cn(
                          "font-mono text-[2.4rem] font-semibold leading-none",
                          featured ? "text-paper" : "text-ink"
                        )}
                      >
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span
                          className={cn(
                            "ml-1 font-mono text-[0.95rem]",
                            featured ? "text-paper/70" : "text-muted-foreground"
                          )}
                        >
                          {tier.period}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="mt-6 flex-1 space-y-3">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={cn(
                              "mt-0.5 h-4 w-4 shrink-0",
                              featured ? "text-gold-light" : "text-gold"
                            )}
                            strokeWidth={1.5}
                          />
                          <span
                            className={cn(
                              "font-sans text-[0.9rem] leading-snug",
                              f.endsWith(":")
                                ? featured
                                  ? "font-semibold text-paper"
                                  : "font-semibold text-ink"
                                : featured
                                  ? "text-paper/80"
                                  : "text-body"
                            )}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/book"
                      className={cn(
                        "group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 font-sans text-[0.95rem] font-semibold transition-all",
                        featured
                          ? "bg-gold text-ink hover:bg-gold-light"
                          : "border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper"
                      )}
                    >
                      {tier.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 font-sans text-[0.82rem] leading-relaxed text-muted-foreground">
              All retainers exclude government fees, charged at actuals. Cancel
              anytime with one month&apos;s notice — no lock-in, no penalty.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FLAT-FEE TABLE ============ */}
      <section className="border-y border-border bg-surface/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                02 — One-off fees
              </span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                Flat-fee reference table
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                Starting prices for the services we get asked about most. Quoted
                upfront, itemised on every invoice — no surprises.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_44px_-30px_rgba(14,42,71,0.25)]">
              {/* Header row */}
              <div className="hidden grid-cols-12 gap-4 border-b border-border bg-surface/70 px-6 py-4 sm:grid sm:px-8">
                <div className="col-span-6 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Service
                </div>
                <div className="col-span-3 text-right font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Fee (₹)
                </div>
                <div className="col-span-3 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Notes
                </div>
              </div>

              {/* Rows */}
              <div>
                {FLAT_FEES.map((row, i) => (
                  <div
                    key={row.service}
                    className={cn(
                      "grid grid-cols-1 gap-1 px-6 py-4 transition-colors hover:bg-surface/40 sm:grid-cols-12 sm:gap-4 sm:px-8",
                      i % 2 === 1 && "bg-surface/40",
                      i !== FLAT_FEES.length - 1 && "border-b border-border"
                    )}
                  >
                    <div className="col-span-6 font-sans text-[0.95rem] font-medium text-ink">
                      {row.service}
                    </div>
                    <div className="col-span-3 font-mono text-[0.95rem] font-semibold text-ink sm:text-right">
                      {row.fee}
                    </div>
                    <div className="col-span-3 font-sans text-[0.85rem] leading-snug text-muted-foreground">
                      {row.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="border-t border-border bg-surface/30 px-6 py-4 sm:px-8">
                <p className="font-sans text-[0.8rem] leading-relaxed text-muted-foreground">
                  &ldquo;+ govt. fees&rdquo; = MCA / ROC / GST portal / trademark
                  fees charged at actuals. &ldquo;from&rdquo; = starting price for
                  standard cases; complex situations are scoped and quoted in
                  writing before any work begins.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-[1.05rem] italic text-ink/80">
                Need something not on this list? Just ask.
              </p>
              <Link
                href="/services"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border border-ink bg-transparent px-6 font-sans text-[0.9rem] font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                See all 30+ services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED / FAQ-ISH ============ */}
      <section className="paper-grain py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                03 — The fine print, in plain English
              </span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                What&apos;s included —{" "}
                <span className="italic font-light">and what isn&apos;t</span>.
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                Three honest answers to the questions you&apos;d ask if you could
                read our invoices before signing up.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {FAQ_PRICE.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.q} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-ink/25 hover:shadow-[0_16px_40px_-26px_rgba(14,42,71,0.35)] sm:p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-border">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-serif text-[1.2rem] font-medium text-ink">
                      {f.q}
                    </h3>
                    <p className="mt-3 font-sans text-[0.92rem] leading-relaxed text-body">
                      {f.a}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/resources/faqs"
                className="group inline-flex items-center gap-1.5 font-sans text-[0.9rem] font-medium text-ink hover:text-gold"
              >
                <HelpCircle className="h-4 w-4" />
                See the full FAQ
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which plan fits?"
        desc="Book a free call and we'll recommend honestly — even if that's the smallest plan."
      />
    </>
  );
}
