import {
  Receipt,
  FileText,
  Building2,
  BadgeCheck,
  Landmark,
  BookOpen,
  Users,
  Percent,
  Briefcase,
  ShieldCheck,
  KeyRound,
  ClipboardCheck,
  ScrollText,
  TrendingUp,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  hint?: string;
};

const FEATURED: Service[] = [
  {
    icon: Receipt,
    title: "GST Registration & Filing",
    desc: "From your first GSTIN to monthly GSTR-3B and annual returns — filed accurately, on time, and reconciled to your books so notice season is uneventful.",
    hint: "Most clients start here",
  },
  {
    icon: Building2,
    title: "Business Registration",
    desc: "Private Limited, LLP, Partnership, or One Person Company — incorporated end-to-end with DSC, DIN, name reservation, MOA/AOA, and PAN/TAN done in one pass.",
    hint: "Pvt Ltd · LLP · OPC",
  },
];

const REST: Service[] = [
  { icon: FileText, title: "Income Tax Return (ITR)", desc: "Salaried, business, or capital gains — the right form, every deduction you're entitled to." },
  { icon: BadgeCheck, title: "Udyam (MSME)", desc: "Get your MSME registration and the subsidies, priority credit, and protection it unlocks." },
  { icon: Landmark, title: "ROC Compliance", desc: "Annual filings, DIR-3 KYC, board resolutions — keeping your company's statutory record clean." },
  { icon: BookOpen, title: "Bookkeeping & Accounting", desc: "Clean, reconciled books in your preferred tool, with monthly reports you can actually read." },
  { icon: Users, title: "Payroll Services", desc: "Salary processing, payslips, PF/ESI, and full-and-final — for teams of 1 or 100." },
  { icon: Percent, title: "TDS Compliance", desc: "TAN, deduction, monthly deposit, quarterly returns, and Form 16/16A without the scramble." },
  { icon: Briefcase, title: "Professional Tax", desc: "State-wise registration and returns for employees and the entity, handled quietly in the background." },
  { icon: ShieldCheck, title: "Trademark Registration", desc: "Search, file, and follow through to registration — protect your name before someone else does." },
  { icon: KeyRound, title: "Digital Signature (DSC)", desc: "Class 3 DSC for filing, tenders, and e-verification — issued and renewed on schedule." },
  { icon: ClipboardCheck, title: "Auditing", desc: "Statutory, tax, and internal audits via our empanelled CA partner network — signed off properly." },
  { icon: ScrollText, title: "Business Licenses", desc: "Shop & Establishment, FSSAI, Trade License, Import-Export Code — what you need, where you are." },
];

export function Services() {
  return (
    <section id="services" className="paper-grain py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section head */}
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
              01 — Services
            </span>
            <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
              Everything your business needs to stay{" "}
              <span className="italic font-light">compliant and current</span>.
            </h2>
            <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
              One partner for registrations, filings, accounting, and audits —
              so you stop juggling three vendors and a folder of pending
              deadlines.
            </p>
          </div>
        </Reveal>

        {/* Featured row — 2 large modules */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {FEATURED.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <FeaturedCard service={s} />
            </Reveal>
          ))}
        </div>

        {/* Rest — asymmetric bento, 4-up on desktop */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REST.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}

          {/* Coming soon — signals ambition without overpromising */}
          <Reveal delay={0.1}>
            <ComingSoonCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <a
      href="#book"
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:border-ink/25 hover:shadow-[0_18px_44px_-26px_rgba(14,42,71,0.4)] sm:p-9"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface text-ink ring-1 ring-border">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </span>
        {service.hint && (
          <span className="font-mono text-[0.66rem] uppercase tracking-wider text-muted-foreground">
            {service.hint}
          </span>
        )}
      </div>

      <h3 className="mt-6 inline-block font-serif text-[1.5rem] font-medium text-ink">
        <span className="relative">
          {service.title}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
        </span>
      </h3>

      <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-body">
        {service.desc}
      </p>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-sans text-[0.86rem] font-medium text-ink">
        Talk to us about this
        <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <a
      href="#book"
      className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-all hover:border-ink/25 hover:bg-surface/60"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-surface text-ink ring-1 ring-border">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="mt-4 inline-block font-serif text-[1.08rem] font-medium text-ink">
        <span className="relative">
          {service.title}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
        </span>
      </h3>
      <p className="mt-2 font-sans text-[0.84rem] leading-relaxed text-body">
        {service.desc}
      </p>
    </a>
  );
}

function ComingSoonCard() {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between rounded-lg border border-dashed border-gold/50 bg-gold/[0.04] p-5"
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-paper text-gold ring-1 ring-gold/30">
        <TrendingUp className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <div className="mt-4">
        <span className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-gold">
          Coming soon
        </span>
        <h3 className="mt-1 font-serif text-[1.08rem] font-medium text-ink">
          Virtual CFO &amp; Growth Advisory
        </h3>
        <p className="mt-2 font-sans text-[0.84rem] leading-relaxed text-body">
          Forecasting, unit economics, and fundraising-readiness &mdash; in
          development for early-2026.
        </p>
      </div>
    </div>
  );
}
