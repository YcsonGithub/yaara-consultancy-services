import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Starter",
    price: "1,999",
    period: "/mo",
    blurb: "For freelancers and solo professionals who want filings handled without thinking about them.",
    features: [
      "GSTR-3B monthly filing",
      "Annual ITR filing",
      "Advance tax reminders",
      "WhatsApp access, 1-day reply",
      "Quarterly compliance review",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growing",
    price: "4,999",
    period: "/mo",
    blurb: "For small businesses that need a real back office — books, GST, TDS, and payroll together.",
    features: [
      "Everything in Starter, plus:",
      "Monthly bookkeeping & reconciliation",
      "TDS payment + quarterly returns",
      "Payroll for up to 5 people",
      "Priority WhatsApp, same-day reply",
      "Annual ROC basics (where applicable)",
    ],
    cta: "Choose Growing",
    featured: true,
  },
  {
    name: "Established",
    price: "Custom",
    period: "",
    blurb: "For Pvt Ltd companies, audit cases, and multi-state operations — scoped to your reality.",
    features: [
      "Everything in Growing, plus:",
      "Full ROC compliance & annual filings",
      "Statutory audit via CA partner network",
      "Dedicated monthly review call",
      "Multi-state GST handling",
      "Custom reporting cadence",
    ],
    cta: "Scope a quote",
    featured: false,
  },
];

const FLAT_FEES = [
  { service: "GST Registration", fee: "1,499", note: "one-time, incl. first return" },
  { service: "ITR — salaried", fee: "999", note: "per filing" },
  { service: "ITR — business / 44ADA", fee: "2,499", note: "per filing" },
  { service: "Pvt Ltd incorporation", fee: "6,999", note: "+ govt. fees" },
  { service: "LLP incorporation", fee: "5,499", note: "+ govt. fees" },
  { service: "Udyam (MSME)", fee: "999", note: "one-time" },
  { service: "Trademark filing", fee: "3,499", note: "+ govt. fees" },
  { service: "DSC Class 3", fee: "1,499", note: "2-year validity" },
  { service: "ROC annual filing", fee: "from 4,999", note: "per form" },
];

export function Pricing() {
  return (
    <section id="pricing" className="paper-grain py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
              06 — Pricing
            </span>
            <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
              Transparent pricing.{" "}
              <span className="italic font-light">No &ldquo;get a quote&rdquo; walls.</span>
            </h2>
            <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
              Most compliance portals hide pricing behind a form. Here are our
              real starting fees &mdash; what you see is what you pay, plus
              government fees where they apply. No surprises.
            </p>
          </div>
        </Reveal>

        {/* Retainer tiers */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <TierCard tier={t} />
            </Reveal>
          ))}
        </div>

        {/* Flat-fee reference table */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex flex-col gap-1 border-b border-border bg-surface px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-serif text-[1.3rem] font-medium text-ink">
                  One-off services &mdash; flat fees
                </h3>
                <p className="mt-1 font-sans text-[0.86rem] text-muted-foreground">
                  For things that aren&apos;t a monthly retainer. All in
                  <span className="font-mono"> &#8377;</span>, exclusive of government fees unless noted.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-3 text-left font-sans text-[0.74rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      Service
                    </th>
                    <th className="px-6 py-3 text-right font-sans text-[0.74rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      Fee
                    </th>
                    <th className="hidden px-6 py-3 text-left font-sans text-[0.74rem] font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FLAT_FEES.map((row, i) => (
                    <tr
                      key={row.service}
                      className={cn(
                        "border-b border-border/60 transition-colors hover:bg-surface/50",
                        i % 2 === 1 && "bg-surface/30"
                      )}
                    >
                      <td className="px-6 py-3.5 font-sans text-[0.92rem] font-medium text-ink">
                        {row.service}
                      </td>
                      <td className="px-6 py-3.5 text-right font-mono text-[0.95rem] font-semibold text-ink">
                        &#8377;{row.fee}
                      </td>
                      <td className="hidden px-6 py-3.5 font-mono text-[0.78rem] text-muted-foreground sm:table-cell">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 font-sans text-[0.84rem] text-muted-foreground">
            Don&apos;t see what you need?{" "}
            <a href="#book" className="font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 hover:decoration-ink">
              Ask us &mdash; we&apos;ll quote it straight.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: (typeof TIERS)[number] }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-xl border p-7 transition-all",
        tier.featured
          ? "border-ink bg-ink text-paper shadow-[0_24px_60px_-30px_rgba(14,42,71,0.5)]"
          : "border-border bg-card hover:border-ink/25"
      )}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-ink">
          Most popular
        </span>
      )}

      <h3
        className={cn(
          "font-serif text-[1.4rem] font-medium",
          tier.featured ? "text-paper" : "text-ink"
        )}
      >
        {tier.name}
      </h3>

      <div className="mt-3 flex items-baseline gap-1">
        {tier.price !== "Custom" && (
          <span
            className={cn(
              "font-mono text-[0.9rem]",
              tier.featured ? "text-paper/70" : "text-muted-foreground"
            )}
          >
            &#8377;
          </span>
        )}
        <span
          className={cn(
            "font-mono text-[2.2rem] font-semibold leading-none",
            tier.featured ? "text-paper" : "text-ink"
          )}
        >
          {tier.price}
        </span>
        {tier.period && (
          <span
            className={cn(
              "font-mono text-[0.85rem]",
              tier.featured ? "text-paper/70" : "text-muted-foreground"
            )}
          >
            {tier.period}
          </span>
        )}
      </div>

      <p
        className={cn(
          "mt-3 font-sans text-[0.88rem] leading-relaxed",
          tier.featured ? "text-paper/75" : "text-body"
        )}
      >
        {tier.blurb}
      </p>

      <ul className="mt-6 space-y-2.5">
        {tier.features.map((f) => (
          <li
            key={f}
            className={cn(
              "flex items-start gap-2.5 font-sans text-[0.88rem]",
              tier.featured ? "text-paper/90" : "text-body"
            )}
          >
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                tier.featured ? "text-gold-light" : "text-gold"
              )}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#book"
        className={cn(
          "group mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md font-sans text-[0.92rem] font-semibold transition-colors",
          tier.featured
            ? "bg-gold text-ink hover:bg-gold-light"
            : "border border-ink text-ink hover:bg-ink hover:text-paper"
        )}
      >
        {tier.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
