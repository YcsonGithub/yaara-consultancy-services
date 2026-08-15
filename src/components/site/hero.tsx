import { ArrowRight, CheckCircle2, CalendarDays, FileCheck2 } from "lucide-react";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden paper-grain">
      {/* subtle gold hairline at the very top of the page */}
      <div className="gold-rule absolute inset-x-0 top-0" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
        {/* ---- Left: editorial copy ---- */}
        <div className="lg:col-span-7 lg:pr-6">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-7 bg-gold" />
              Accounting &middot; Tax &middot; Compliance
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[4.1rem]">
              Your numbers, handled by a{" "}
              <span className="relative whitespace-nowrap">
                <span className="italic font-light">real&nbsp;person</span>
                <svg
                  className="absolute -bottom-1 left-0 h-2 w-full text-gold"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 5c40-3 120-4 196-2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
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
              their books. GST, ITR, registrations, ROC, payroll &mdash; filed on
              time, explained in plain English, every time.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#book"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-sans text-[0.97rem] font-semibold text-ink transition-all hover:bg-[#a87a33] hover:shadow-[0_10px_30px_-12px_rgba(184,135,59,0.7)]"
              >
                Book a free 20-minute call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-transparent px-7 font-sans text-[0.97rem] font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                See what we handle
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 font-mono text-[0.78rem] text-muted-foreground">
              No sales pitch. Just a straight answer &mdash; and a clear next step.
            </p>
          </Reveal>
        </div>

        {/* ---- Right: designed compliance-calendar motif ---- */}
        <div className="lg:col-span-5">
          <Reveal delay={0.18} y={24}>
            <HeroCalendarMotif />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroCalendarMotif() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // pretend "today" is the 11th, deadline highlighted on the 20th
  const today = 11;
  const dueDay = 20;

  return (
    <div className="relative">
      {/* floating "filed" chip */}
      <div className="absolute -right-3 -top-4 z-10 rotate-2 rounded-lg border border-border bg-paper px-3.5 py-2 shadow-[0_12px_30px_-14px_rgba(14,42,71,0.35)] sm:-right-5">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-success" />
          <span className="font-mono text-[0.72rem] font-medium uppercase tracking-wide text-ink">
            GSTR-3B filed
          </span>
        </div>
        <p className="mt-0.5 font-sans text-[0.66rem] text-muted-foreground">
          on time, every month
        </p>
      </div>

      <article className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_60px_-30px_rgba(14,42,71,0.4)]">
        {/* card head */}
        <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-4">
          <div className="flex items-center gap-2 text-ink">
            <CalendarDays className="h-4 w-4 text-gold" />
            <span className="font-serif text-[1.05rem] font-medium">
              Compliance desk
            </span>
          </div>
          <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
            live view
          </span>
        </div>

        {/* mini calendar */}
        <div className="px-5 pb-2 pt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-sans text-[0.82rem] font-semibold text-ink">
              This month
            </span>
            <span className="font-mono text-[0.72rem] text-muted-foreground">
              M T W T F S S
            </span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d) => {
              const isToday = d === today;
              const isDue = d === dueDay;
              return (
                <div
                  key={d}
                  className={[
                    "flex h-6 items-center justify-center rounded font-mono text-[0.62rem]",
                    isDue
                      ? "bg-gold/20 font-semibold text-gold ring-1 ring-gold/40"
                      : isToday
                      ? "bg-ink text-paper"
                      : "text-muted-foreground",
                  ].join(" ")}
                >
                  {d}
                </div>
              );
            })}
          </div>
        </div>

        {/* next due list */}
        <div className="space-y-2.5 border-t border-border px-5 py-4">
          <p className="font-sans text-[0.72rem] font-medium uppercase tracking-wider text-muted-foreground">
            Upcoming
          </p>
          <DeadlineRow label="GSTR-3B" date="20th" tone="warning" />
          <DeadlineRow label="TDS payment" date="7th" tone="ok" />
          <DeadlineRow label="Advance tax" date="15th" tone="ok" />
        </div>

        {/* footer */}
        <div className="flex items-center gap-2 border-t border-border bg-surface px-5 py-3">
          <FileCheck2 className="h-4 w-4 text-success" />
          <span className="font-sans text-[0.78rem] text-body">
            <span className="font-semibold text-ink">0</span> overdue filings
            this quarter
          </span>
        </div>
      </article>

      {/* soft base shadow */}
      <div className="pointer-events-none absolute -bottom-6 left-6 right-6 h-10 rounded-[50%] bg-ink/10 blur-2xl" />
    </div>
  );
}

function DeadlineRow({
  label,
  date,
  tone,
}: {
  label: string;
  date: string;
  tone: "warning" | "ok";
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-sans text-[0.88rem] text-body">{label}</span>
      <span
        className={`font-mono text-[0.78rem] font-medium ${
          tone === "warning" ? "text-warning" : "text-ink"
        }`}
      >
        {date}
      </span>
    </div>
  );
}
