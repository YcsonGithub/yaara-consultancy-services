import { Reveal } from "./reveal";

const STATS = [
  { value: "5", unit: "yrs", label: "hands-on accounting experience", mono: true },
  { value: "13", unit: "+", label: "compliance services under one roof", mono: true },
  { value: "1", unit: "day", label: "typical response time, working days", mono: true },
  { value: "CA", unit: "network", label: "empanelled partners for statutory sign-off", mono: false },
];

export function TrustBar() {
  return (
    <section
      aria-label="At a glance"
      className="border-y border-border bg-surface/60"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.06}
            className="flex flex-col gap-1 px-4 py-7 sm:px-7 sm:py-9"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-[2rem] font-semibold leading-none text-ink sm:text-[2.4rem]">
                {s.value}
              </span>
              <span className="font-mono text-[0.95rem] font-medium text-gold">
                {s.unit}
              </span>
            </div>
            <p className="font-sans text-[0.82rem] leading-snug text-muted-foreground sm:text-[0.88rem]">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
