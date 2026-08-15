import {
  Rocket,
  Laptop,
  Store,
  Stethoscope,
  HeartHandshake,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./reveal";

type Industry = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
};

const INDUSTRIES: Industry[] = [
  {
    icon: Rocket,
    title: "Startups & Founders",
    desc: "Incorporation, founder agreements, ESOPs, investor-ready books, and ROC hygiene from day zero.",
    tags: ["Pvt Ltd", "ESOP", "Pitch-ready"],
  },
  {
    icon: Laptop,
    title: "Freelancers & Professionals",
    desc: "ITR for gig and consulting income, advance tax, and GST the moment you cross the threshold.",
    tags: ["ITR-3/4", "Advance tax", "GST"],
  },
  {
    icon: Store,
    title: "Small & Medium Businesses",
    desc: "Monthly accounting, GST, TDS, and payroll — effectively your back office, on retainer.",
    tags: ["Bookkeeping", "GST", "Payroll"],
  },
  {
    icon: Stethoscope,
    title: "Doctors, Lawyers, Architects",
    desc: "Regulated professionals: professional tax, GST on consultancy, 44ADA, and audit where it applies.",
    tags: ["44ADA", "Prof. tax", "Audit"],
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Trusts",
    desc: "12A/80G registration, FCRA readiness, trust accounts, and the audits that keep your donations valid.",
    tags: ["12A/80G", "FCRA", "Audit"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
                04 — Industries we serve
              </span>
              <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
                We speak the language of{" "}
                <span className="italic font-light">your kind of business</span>.
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
                A freelancer and a Pvt Ltd founder have completely different
                anxieties. These pages speak to each &mdash; specifically.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 3) * 0.06}>
              <IndustryCard industry={ind} />
            </Reveal>
          ))}

          {/* 6th cell — "not sure where you fit" CTA to balance the grid */}
          <Reveal delay={0.12}>
            <a
              href="#book"
              className="group flex h-full flex-col justify-between rounded-lg border border-ink bg-ink p-6 text-paper transition-all hover:bg-ink-dark"
            >
              <div>
                <p className="font-serif text-[1.2rem] font-medium leading-snug">
                  Not sure which bucket you fall into?
                </p>
                <p className="mt-2 font-sans text-[0.9rem] leading-relaxed text-paper/75">
                  That&apos;s exactly what the free call is for. We&apos;ll map
                  your obligations in 20 minutes &mdash; no commitment.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 font-sans text-[0.9rem] font-medium text-gold-light">
                Book the call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  return (
    <a
      href="#book"
      className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-ink/25 hover:shadow-[0_16px_40px_-26px_rgba(14,42,71,0.4)]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-surface text-ink ring-1 ring-border">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="mt-5 inline-block font-serif text-[1.2rem] font-medium text-ink">
        <span className="relative">
          {industry.title}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
        </span>
      </h3>
      <p className="mt-2.5 font-sans text-[0.9rem] leading-relaxed text-body">
        {industry.desc}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {industry.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 font-mono text-[0.66rem] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
