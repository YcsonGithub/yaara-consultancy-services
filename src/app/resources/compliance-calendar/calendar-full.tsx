"use client";

import { useSyncExternalStore, useMemo, useState } from "react";
import Link from "next/link";
import {
  CalendarClock,
  ArrowRight,
  Info,
  AlertCircle,
} from "lucide-react";

// ---- Types ----
type DeadlineType = "GST" | "TDS" | "ITR" | "ROC" | "Advance Tax";

type Deadline = {
  date: Date;
  title: string;
  type: DeadlineType;
  note?: string;
};

const TYPE_STYLES: Record<
  DeadlineType,
  { badge: string; dot: string; cell: string }
> = {
  GST: {
    badge: "bg-success/12 text-success ring-1 ring-success/30",
    dot: "bg-success",
    cell: "bg-success/15 text-success ring-1 ring-success/40",
  },
  TDS: {
    badge: "bg-ink/10 text-ink ring-1 ring-ink/25",
    dot: "bg-ink",
    cell: "bg-ink/15 text-paper ring-1 ring-ink/40",
  },
  ITR: {
    badge: "bg-gold/15 text-gold ring-1 ring-gold/30",
    dot: "bg-gold",
    cell: "bg-gold/20 text-gold ring-1 ring-gold/50",
  },
  ROC: {
    badge: "bg-muted-foreground/15 text-muted-foreground ring-1 ring-muted-foreground/25",
    dot: "bg-muted-foreground",
    cell: "bg-muted-foreground/15 text-muted-foreground ring-1 ring-muted-foreground/40",
  },
  "Advance Tax": {
    badge: "bg-warning/12 text-warning ring-1 ring-warning/30",
    dot: "bg-warning",
    cell: "bg-warning/15 text-warning ring-1 ring-warning/40",
  },
};

const TYPES: DeadlineType[] = ["GST", "TDS", "ITR", "ROC", "Advance Tax"];

// ---- Hydration-safe date hook ----
// Server render returns null; client renders the real Date only after hydration.
function subscribeNoop() {
  return () => {};
}
let clientNow: Date | null = null;
function getClientNow() {
  if (!clientNow) clientNow = new Date();
  return clientNow;
}
function getServerNow(): Date | null {
  return null;
}

// ---- Deadline generation ----
function fyCode(startYear: number) {
  return `FY ${startYear}-${String(startYear + 1).slice(-2)}`;
}

function generateDeadlines(now: Date): Deadline[] {
  const out: Deadline[] = [];
  const windowStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const windowEnd = new Date(
    now.getFullYear(),
    now.getMonth() + 13,
    now.getDate()
  );

  // Current FY start (April of current or previous year)
  const currentFYStart =
    now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;

  // 1. Monthly GSTR-3B (20th) and TDS payment (7th) — for each month in window
  for (let i = 0; i < 14; i++) {
    const m = new Date(windowStart.getFullYear(), windowStart.getMonth() + i, 1);
    const yr = m.getFullYear();
    const mo = m.getMonth();
    out.push({
      date: new Date(yr, mo, 20),
      title: "GSTR-3B filing",
      type: "GST",
      note: "Monthly summary return",
    });
    out.push({
      date: new Date(yr, mo, 7),
      title: "TDS payment",
      type: "TDS",
      note: "Monthly tax deposit (challan)",
    });
  }

  // 2. TDS quarterly returns — generate for FY-1, FY, FY+1 (some fall in window)
  for (let fy = currentFYStart - 1; fy <= currentFYStart + 1; fy++) {
    out.push({
      date: new Date(fy, 6, 31),
      title: "TDS Q1 return — Form 24Q",
      type: "TDS",
      note: `${fyCode(fy)} · Apr–Jun`,
    });
    out.push({
      date: new Date(fy, 9, 31),
      title: "TDS Q2 return — Form 24Q",
      type: "TDS",
      note: `${fyCode(fy)} · Jul–Sep`,
    });
    out.push({
      date: new Date(fy + 1, 0, 31),
      title: "TDS Q3 return — Form 24Q",
      type: "TDS",
      note: `${fyCode(fy)} · Oct–Dec`,
    });
    out.push({
      date: new Date(fy + 1, 4, 31),
      title: "TDS Q4 return — Form 24Q",
      type: "TDS",
      note: `${fyCode(fy)} · Jan–Mar`,
    });
  }

  // 3. Advance tax — 4 instalments per FY
  for (let fy = currentFYStart - 1; fy <= currentFYStart + 1; fy++) {
    out.push({
      date: new Date(fy, 5, 15),
      title: "Advance tax — 1st instalment (15%)",
      type: "Advance Tax",
      note: fyCode(fy),
    });
    out.push({
      date: new Date(fy, 8, 15),
      title: "Advance tax — 2nd instalment (45%)",
      type: "Advance Tax",
      note: fyCode(fy),
    });
    out.push({
      date: new Date(fy, 11, 15),
      title: "Advance tax — 3rd instalment (75%)",
      type: "Advance Tax",
      note: fyCode(fy),
    });
    out.push({
      date: new Date(fy + 1, 2, 15),
      title: "Advance tax — 4th instalment (100%)",
      type: "Advance Tax",
      note: fyCode(fy),
    });
  }

  // 4. ITR deadlines (for FY ending previous March) — 31 Jul, 31 Oct, 30 Nov
  for (let yr = now.getFullYear() - 1; yr <= now.getFullYear() + 1; yr++) {
    out.push({
      date: new Date(yr, 6, 31),
      title: "ITR — Individuals (ITR-1 / ITR-2 / ITR-3)",
      type: "ITR",
      note: `For FY ${yr - 1}-${String(yr).slice(-2)}`,
    });
    out.push({
      date: new Date(yr, 9, 31),
      title: "ITR — Businesses (audit cases u/s 44AB)",
      type: "ITR",
      note: `For FY ${yr - 1}-${String(yr).slice(-2)}`,
    });
    out.push({
      date: new Date(yr, 10, 30),
      title: "ITR — Transfer pricing cases",
      type: "ITR",
      note: `For FY ${yr - 1}-${String(yr).slice(-2)}`,
    });
  }

  // 5. GSTR-9 annual — 31 Dec (for previous FY)
  for (let yr = now.getFullYear() - 1; yr <= now.getFullYear() + 1; yr++) {
    out.push({
      date: new Date(yr, 11, 31),
      title: "GSTR-9 — Annual return",
      type: "GST",
      note: `For FY ${yr - 1}-${String(yr).slice(-2)}`,
    });
  }

  // 6. ROC filings — AOC-4 (~30 Sep), MGT-7 (~29 Nov)
  for (let yr = now.getFullYear() - 1; yr <= now.getFullYear() + 1; yr++) {
    out.push({
      date: new Date(yr, 8, 30),
      title: "ROC AOC-4 — Financial statements",
      type: "ROC",
      note: `For FY ${yr - 1}-${String(yr).slice(-2)}`,
    });
    out.push({
      date: new Date(yr, 10, 29),
      title: "ROC MGT-7 — Annual return",
      type: "ROC",
      note: `For FY ${yr - 1}-${String(yr).slice(-2)}`,
    });
  }

  // Dedupe by date+title, filter to window, sort ascending
  const seen = new Set<string>();
  const unique = out.filter((d) => {
    const k = `${d.date.toISOString()}|${d.title}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  return unique
    .filter((d) => d.date >= windowStart && d.date <= windowEnd)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

// ---- Date helpers ----
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const DOW_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function daysUntil(target: Date, now: Date) {
  const t = startOfDay(target).getTime();
  const n = startOfDay(now).getTime();
  return Math.round((t - n) / 86400000);
}

function formatCountdown(days: number) {
  if (days < 0) return { label: `${Math.abs(days)}d overdue`, tone: "past" as const };
  if (days === 0) return { label: "Today", tone: "urgent" as const };
  if (days === 1) return { label: "Tomorrow", tone: "urgent" as const };
  if (days <= 7) return { label: `In ${days} days`, tone: "soon" as const };
  return { label: `In ${days} days`, tone: "normal" as const };
}

// ---- Component ----
export function ComplianceCalendarFull() {
  const now = useSyncExternalStore(subscribeNoop, getClientNow, getServerNow);
  const [filter, setFilter] = useState<DeadlineType | "All">("All");

  const allDeadlines = useMemo(
    () => (now ? generateDeadlines(now) : []),
    [now]
  );

  const filtered = useMemo(() => {
    if (filter === "All") return allDeadlines;
    return allDeadlines.filter((d) => d.type === filter);
  }, [filter, allDeadlines]);

  const byMonth = useMemo(() => {
    const map = new Map<string, Deadline[]>();
    for (const d of filtered) {
      const key = `${d.date.getFullYear()}-${String(d.date.getMonth()).padStart(2, "0")}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(d);
    }
    return Array.from(map.entries());
  }, [filtered]);

  // Count by type for legend
  const counts = useMemo(() => {
    const c: Record<DeadlineType, number> = {
      GST: 0,
      TDS: 0,
      ITR: 0,
      ROC: 0,
      "Advance Tax": 0,
    };
    for (const d of allDeadlines) c[d.type]++;
    return c;
  }, [allDeadlines]);

  if (!now) {
    return <CalendarSkeleton />;
  }

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      {/* Filter bar + legend */}
      <div className="mt-12 flex flex-col gap-6 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterButton
            active={filter === "All"}
            onClick={() => setFilter("All")}
            label="All"
            count={allDeadlines.length}
          />
          {TYPES.map((t) => (
            <FilterButton
              key={t}
              active={filter === t}
              onClick={() => setFilter(t)}
              label={t}
              count={counts[t]}
              dotColor={TYPE_STYLES[t].dot}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {TYPES.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-muted-foreground"
            >
              <span className={`h-2 w-2 rounded-full ${TYPE_STYLES[t].dot}`} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Month grid for current month */}
      <CurrentMonthGrid now={now} deadlines={allDeadlines} />

      {/* List view */}
      <div className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-[1.6rem] font-medium text-ink sm:text-[1.9rem]">
            Upcoming deadlines
          </h2>
          <span className="font-mono text-[0.72rem] uppercase tracking-wider text-muted-foreground">
            Next 12 months · {filtered.length} dates
          </span>
        </div>

        {byMonth.length === 0 ? (
          <p className="mt-6 font-sans text-[0.95rem] text-muted-foreground">
            No deadlines match this filter in the next 12 months.
          </p>
        ) : (
          <div className="mt-6 space-y-10">
            {byMonth.map(([key, items]) => {
              const [yStr, mStr] = key.split("-");
              const y = Number(yStr);
              const m = Number(mStr);
              return (
                <div key={key}>
                  <div className="mb-3 flex items-baseline gap-3 border-b border-border pb-2">
                    <h3 className="font-serif text-[1.15rem] font-medium text-ink">
                      {MONTH_NAMES[m]} {y}
                    </h3>
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                      {items.length} {items.length === 1 ? "deadline" : "deadlines"}
                    </span>
                  </div>
                  <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
                    {items.map((d, i) => {
                      const days = daysUntil(d.date, now);
                      const cd = formatCountdown(days);
                      const isPast = days < 0;
                      return (
                        <li
                          key={`${key}-${i}`}
                          className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
                        >
                          {/* Date block */}
                          <div
                            className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md border ${
                              isPast
                                ? "border-border bg-surface text-muted-foreground"
                                : "border-border bg-surface text-ink"
                            }`}
                          >
                            <span className="font-mono text-[0.62rem] font-medium uppercase tracking-wider text-muted-foreground">
                              {MONTH_SHORT[d.date.getMonth()]}
                            </span>
                            <span className="font-mono text-[1.4rem] font-semibold leading-none">
                              {String(d.date.getDate()).padStart(2, "0")}
                            </span>
                            <span className="font-mono text-[0.6rem] text-muted-foreground">
                              {DOW_SHORT[d.date.getDay()]}
                            </span>
                          </div>

                          {/* Title + note */}
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider ${TYPE_STYLES[d.type].badge}`}
                              >
                                <span className={`h-1.5 w-1.5 rounded-full ${TYPE_STYLES[d.type].dot}`} />
                                {d.type}
                              </span>
                              <p className="font-serif text-[1.02rem] font-medium text-ink">
                                {d.title}
                              </p>
                            </div>
                            {d.note && (
                              <p className="mt-1 font-sans text-[0.82rem] text-body">
                                {d.note}
                              </p>
                            )}
                          </div>

                          {/* Countdown */}
                          <div className="shrink-0 sm:text-right">
                            <span
                              className={`inline-flex items-center gap-1.5 font-mono text-[0.78rem] font-medium ${
                                cd.tone === "past"
                                  ? "text-muted-foreground"
                                  : cd.tone === "urgent"
                                  ? "text-error"
                                  : cd.tone === "soon"
                                  ? "text-warning"
                                  : "text-ink"
                              }`}
                            >
                              {cd.tone === "urgent" && (
                                <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
                              )}
                              {cd.label}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 flex gap-3 rounded-lg border border-border bg-surface/60 p-5">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
        <p className="font-sans text-[0.86rem] leading-relaxed text-body">
          <span className="font-semibold text-ink">A note on dates:</span> Dates
          are indicative for common cases. Your exact due date can vary by
          turnover, state, registrations already done, and whether you&apos;re on
          QRMP scheme. For GST in particular, monthly filers and quarterly
          (QRMP) filers have different GSTR-3B cycles. Always confirm your
          specific deadline with us before relying on this list.
        </p>
      </div>

      {/* End-of-page CTA */}
      <div className="mt-12 overflow-hidden rounded-xl bg-ink p-7 text-paper sm:p-9">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-serif text-[1.6rem] font-medium leading-tight text-paper sm:text-[1.9rem]">
              Hand these deadlines to us.
            </h2>
            <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-paper/75">
              Forget bookmarking. We track every date that applies to your
              business, file before it&apos;s due, and send a single WhatsApp
              reminder before each one — not a calendar full of noise.
            </p>
          </div>
          <Link
            href="/book"
            className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-md bg-gold px-7 font-sans text-[0.97rem] font-semibold text-ink transition-all hover:bg-gold-light"
          >
            Book a free consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ---- Sub-components ----
function FilterButton({
  active,
  onClick,
  label,
  count,
  dotColor,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  dotColor?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 font-sans text-[0.86rem] font-medium transition-all ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-border bg-card text-body hover:border-ink/30 hover:text-ink"
      }`}
    >
      {dotColor && (
        <span className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden />
      )}
      {label}
      <span
        className={`font-mono text-[0.72rem] ${
          active ? "text-paper/70" : "text-muted-foreground"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function CurrentMonthGrid({
  now,
  deadlines,
}: {
  now: Date;
  deadlines: Deadline[];
}) {
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();

  // Map: day-of-month → Deadline[] (only for current month)
  const dayMap = new Map<number, Deadline[]>();
  for (const d of deadlines) {
    if (d.date.getMonth() === month && d.date.getFullYear() === year) {
      const day = d.date.getDate();
      if (!dayMap.has(day)) dayMap.set(day, []);
      dayMap.get(day)!.push(d);
    }
  }

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  // pad to multiple of 7
  while (cells.length % 7 !== 0) cells.push(null);

  // Pick the dominant type for a day (priority: urgent-types first)
  const priority: DeadlineType[] = ["Advance Tax", "GST", "TDS", "ITR", "ROC"];
  function dominantType(list: Deadline[]) {
    for (const t of priority) {
      if (list.some((d) => d.type === t)) return t;
    }
    return list[0]?.type ?? null;
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-[1.15rem] font-medium text-ink">
                {MONTH_NAMES[month]} {year}
              </h3>
            </div>
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
              Today · {String(today).padStart(2, "0")} {MONTH_SHORT[month]}
            </span>
          </div>

          <div className="mb-2 grid grid-cols-7 gap-1">
            {DOW_SHORT.map((d) => (
              <div
                key={d}
                className="text-center font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) {
                return <div key={i} className="aspect-square" />;
              }
              const list = dayMap.get(day) ?? [];
              const dom = list.length > 0 ? dominantType(list) : null;
              const isToday = day === today;
              const isPast = day < today;

              return (
                <div
                  key={i}
                  className={`relative flex aspect-square flex-col items-center justify-center rounded-md border text-center ${
                    dom
                      ? `${TYPE_STYLES[dom as DeadlineType].cell} font-semibold`
                      : isToday
                      ? "border-ink bg-ink text-paper"
                      : isPast
                      ? "border-border bg-surface/60 text-muted-foreground"
                      : "border-border bg-surface/40 text-ink"
                  }`}
                >
                  <span className="font-mono text-[0.78rem] leading-none">
                    {String(day).padStart(2, "0")}
                  </span>
                  {list.length > 0 && (
                    <span className="mt-1 flex gap-0.5">
                      {list.slice(0, 3).map((d, j) => (
                        <span
                          key={j}
                          className={`h-1 w-1 rounded-full ${TYPE_STYLES[d.type].dot}`}
                        />
                      ))}
                      {list.length > 3 && (
                        <span className="font-mono text-[0.5rem] leading-none text-current">
                          +
                        </span>
                      )}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Today's & next-up deadlines summary */}
          <div className="mt-5 border-t border-border pt-4">
            <p className="font-mono text-[0.66rem] uppercase tracking-wider text-muted-foreground">
              This month — {dayMap.size} deadline days
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
              {Array.from(dayMap.entries())
                .sort((a, b) => a[0] - b[0])
                .slice(0, 6)
                .map(([day, list]) => (
                  <span
                    key={day}
                    className="inline-flex items-center gap-1.5 font-sans text-[0.78rem] text-body"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        TYPE_STYLES[dominantType(list) as DeadlineType].dot
                      }`}
                    />
                    <span className="font-mono font-medium text-ink">
                      {String(day).padStart(2, "0")}
                    </span>
                    {list[0].title.split("—")[0].trim()}
                    {list.length > 1 && (
                      <span className="font-mono text-[0.7rem] text-muted-foreground">
                        +{list.length - 1}
                      </span>
                    )}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick legend / info */}
      <div className="lg:col-span-5">
        <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface/50 p-6">
          <div>
            <h3 className="font-serif text-[1.2rem] font-medium text-ink">
              How to read this
            </h3>
            <ul className="mt-4 space-y-3 font-sans text-[0.88rem] leading-relaxed text-body">
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                <span>
                  <strong className="font-semibold text-ink">List view</strong>{" "}
                  below shows every deadline in the next 12 months, grouped by
                  month, sorted by date.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <strong className="font-semibold text-ink">Day blocks</strong>{" "}
                  show the calendar date in mono. Past dates are muted.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                <span>
                  <strong className="font-semibold text-ink">Countdown</strong>{" "}
                  turns red for today/tomorrow, ochre within 7 days, navy
                  otherwise.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                <span>
                  <strong className="font-semibold text-ink">Filter</strong> by
                  type using the buttons above — useful if you only care about
                  GST or only ITR.
                </span>
              </li>
            </ul>
          </div>
          <p className="mt-6 font-mono text-[0.7rem] leading-relaxed text-muted-foreground">
            Bookmark this page — we keep the dates current as the department
            notifies changes.
          </p>
        </div>
      </div>
    </div>
  );
}

function CalendarSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div className="mt-12 h-12 animate-pulse rounded-full bg-surface" />
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="h-72 animate-pulse rounded-xl bg-surface" />
        </div>
        <div className="lg:col-span-5">
          <div className="h-72 animate-pulse rounded-xl bg-surface" />
        </div>
      </div>
      <div className="mt-12 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-20 animate-pulse rounded-lg bg-surface"
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
