"use client";

import { useSyncExternalStore, useMemo } from "react";
import { CalendarClock, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type DeadlineType = "GST" | "TDS" | "ITR" | "ROC" | "Advance Tax";

type Deadline = {
  date: Date;
  title: string;
  type: DeadlineType;
};

const TYPE_COLORS: Record<DeadlineType, string> = {
  GST: "text-success border-success/30 bg-success/[0.06]",
  TDS: "text-ink border-border bg-surface",
  ITR: "text-gold border-gold/30 bg-gold/[0.06]",
  ROC: "text-ink border-border bg-surface",
  "Advance Tax": "text-warning border-warning/30 bg-warning/[0.06]",
};

/** Build all candidate deadlines for the next ~12 months from `from`. */
function buildDeadlines(from: Date): Deadline[] {
  const out: Deadline[] = [];
  const y = from.getFullYear();

  // helper to make a Date at a given y/m/d, 09:00 local
  const at = (year: number, monthIdx: number, day: number) =>
    new Date(year, monthIdx, day, 9, 0, 0, 0);

  // Monthly: GSTR-3B (20th), TDS payment (7th) — for this month + next 11
  for (let i = 0; i < 12; i++) {
    const d = new Date(from.getFullYear(), from.getMonth() + i, 1);
    out.push({
      date: at(d.getFullYear(), d.getMonth(), 20),
      title: "GSTR-3B monthly return",
      type: "GST",
    });
    out.push({
      date: at(d.getFullYear(), d.getMonth(), 7),
      title: "TDS payment (monthly)",
      type: "TDS",
    });
  }

  // Advance tax: 15 Jun, 15 Sep, 15 Dec, 15 Mar
  const advance = [
    [5, 15], // Jun
    [8, 15], // Sep
    [11, 15], // Dec
    [2, 15], // Mar
  ];
  for (const [m, day] of advance) {
    out.push({ date: at(y, m, day), title: "Advance tax installment", type: "Advance Tax" });
    out.push({ date: at(y + 1, m, day), title: "Advance tax installment", type: "Advance Tax" });
  }

  // ITR — individuals (non-audit): 31 Jul; businesses (audit): 31 Oct; TP: 30 Nov
  out.push({ date: at(y, 6, 31), title: "ITR filing — individuals (non-audit)", type: "ITR" });
  out.push({ date: at(y, 9, 31), title: "ITR filing — businesses (audit)", type: "ITR" });
  out.push({ date: at(y, 10, 30), title: "ITR filing — transfer pricing", type: "ITR" });
  out.push({ date: at(y + 1, 6, 31), title: "ITR filing — individuals (non-audit)", type: "ITR" });

  // TDS quarterly returns: Q1 31 Jul, Q2 31 Oct, Q3 31 Jan, Q4 31 May
  out.push({ date: at(y, 6, 31), title: "TDS quarterly return — Q1", type: "TDS" });
  out.push({ date: at(y, 9, 31), title: "TDS quarterly return — Q2", type: "TDS" });
  out.push({ date: at(y, 0, 31), title: "TDS quarterly return — Q3", type: "TDS" });
  out.push({ date: at(y, 4, 31), title: "TDS quarterly return — Q4", type: "TDS" });

  // GSTR-9 annual (prev FY): 31 Dec
  out.push({ date: at(y, 11, 31), title: "GSTR-9 annual return (prev. FY)", type: "GST" });

  // ROC annual (approx — 30 days / 60 days from AGM, shown as indicative)
  out.push({ date: at(y, 9, 30), title: "ROC AOC-4 (approx.)", type: "ROC" });
  out.push({ date: at(y, 10, 29), title: "ROC MGT-7 (approx.)", type: "ROC" });

  return out.filter((d) => d.date.getTime() >= from.getTime() - 86400000);
}

function fmtDate(d: Date) {
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function daysUntil(from: Date, target: Date) {
  const ms = target.getTime() - from.getTime();
  return Math.round(ms / 86400000);
}

// --- Client-only "now" via useSyncExternalStore (no hydration mismatch) ---
const subscribeNoop = () => () => {};
// Cache a single Date for the session so the snapshot is referentially stable.
let cachedNow: Date | null = null;
function getClientNow(): Date {
  if (!cachedNow) cachedNow = new Date();
  return cachedNow;
}
function getServerNow(): Date | null {
  return null;
}

export function ComplianceCalendar() {
  // Read "now" client-side only — useSyncExternalStore returns null on the
  // server (and during hydration) so there's no SSR/client date mismatch,
  // then resolves to a stable Date once mounted. This is the React-recommended
  // way to consume a client-only value without setState-in-effect.
  const now = useSyncExternalStore(subscribeNoop, getClientNow, getServerNow);

  const upcoming = useMemo(() => {
    if (!now) return [];
    return buildDeadlines(now)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 5);
  }, [now]);

  return (
    <section id="resources" className="border-y border-border bg-surface/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy */}
          <Reveal className="lg:col-span-5">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold">
              05 — Compliance calendar
            </span>
            <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-[2.6rem]">
              The next deadlines{" "}
              <span className="italic font-light">you can&apos;t afford to miss</span>.
            </h2>
            <p className="mt-4 font-sans text-[1rem] leading-relaxed text-body">
              Bookmark this. We keep it current so you always know what&apos;s
              due next &mdash; GST, TDS, ITR, advance tax, and ROC. Hand the
              lot to us and you&apos;ll never see a late fee again.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#book"
                className="inline-flex h-11 items-center rounded-md bg-ink px-6 font-sans text-[0.92rem] font-medium text-paper transition-colors hover:bg-ink-dark"
              >
                Hand these to us
              </a>
              <div className="flex items-center gap-2 font-mono text-[0.74rem] text-muted-foreground">
                <CalendarClock className="h-4 w-4 text-gold" />
                {now ? (
                  <>Viewing from {fmtDate(now)}</>
                ) : (
                  <span className="inline-block h-3 w-28 animate-pulse rounded bg-surface" />
                )}
              </div>
            </div>

            {/* legend */}
            <div className="mt-8 flex flex-wrap gap-2">
              {(["GST", "TDS", "ITR", "ROC", "Advance Tax"] as DeadlineType[]).map((t) => (
                <span
                  key={t}
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 font-mono text-[0.66rem] uppercase tracking-wide",
                    TYPE_COLORS[t]
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Right — live list */}
          <Reveal className="lg:col-span-7" y={24}>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_60px_-34px_rgba(14,42,71,0.35)]">
              <div className="flex items-center justify-between border-b border-border bg-surface px-6 py-4">
                <div className="flex items-center gap-2 text-ink">
                  <CalendarClock className="h-4 w-4 text-gold" />
                  <span className="font-serif text-[1.1rem] font-medium">
                    Upcoming deadlines
                  </span>
                </div>
                <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                  next 5
                </span>
              </div>

              <ul className="divide-y divide-border">
                {now && upcoming.length > 0 ? (
                  upcoming.map((d) => (
                    <DeadlineRow
                      key={`${d.title}-${d.date.toISOString()}`}
                      deadline={d}
                      now={now}
                    />
                  ))
                ) : (
                  // skeletons while computing client-side
                  Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="flex items-center gap-4 px-6 py-5">
                      <div className="h-12 w-12 shrink-0 animate-pulse rounded-lg bg-surface" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3.5 w-1/2 animate-pulse rounded bg-surface" />
                        <div className="h-3 w-1/3 animate-pulse rounded bg-surface" />
                      </div>
                    </li>
                  ))
                )}
              </ul>

              <div className="flex items-center gap-2 border-t border-border bg-surface px-6 py-3">
                <AlertCircle className="h-3.5 w-3.5 text-muted-foreground" />
                <p className="font-sans text-[0.76rem] text-muted-foreground">
                  Dates are indicative for common cases. Your exact due date can
                  vary by turnover, state, and filings already done.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DeadlineRow({ deadline, now }: { deadline: Deadline; now: Date }) {
  const days = daysUntil(now, deadline.date);
  const isOverdue = days < 0;
  const isSoon = days >= 0 && days <= 7;

  const tone = isOverdue
    ? { text: "text-error", icon: AlertCircle, label: "Overdue" }
    : isSoon
    ? { text: "text-warning", icon: Clock, label: `${days === 0 ? "Today" : `${days}d left`}` }
    : { text: "text-success", icon: CheckCircle2, label: `${days}d left` };

  const ToneIcon = tone.icon;

  return (
    <li className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-surface/40">
      {/* date block */}
      <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-border bg-surface">
        <span className="font-mono text-[0.95rem] font-semibold leading-none text-ink">
          {deadline.date.getDate()}
        </span>
        <span className="font-mono text-[0.58rem] uppercase tracking-wide text-muted-foreground">
          {deadline.date.toLocaleDateString("en-IN", { month: "short" })}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-sans text-[0.94rem] font-medium text-ink">
          {deadline.title}
        </p>
        <p className="font-mono text-[0.72rem] text-muted-foreground">
          {fmtDate(deadline.date)}
        </p>
      </div>

      <span
        className={cn(
          "hidden rounded-full border px-2.5 py-0.5 font-mono text-[0.64rem] uppercase tracking-wide sm:inline-block",
          TYPE_COLORS[deadline.type]
        )}
      >
        {deadline.type}
      </span>

      <div className={cn("flex w-20 items-center justify-end gap-1.5", tone.text)}>
        <ToneIcon className="h-3.5 w-3.5" />
        <span className="font-mono text-[0.74rem] font-medium">{tone.label}</span>
      </div>
    </li>
  );
}
