import { cn } from "@/lib/utils";

/**
 * ============================================================
 *  YAARA SECTION ART
 * ============================================================
 * Larger, narrative SVG scenes for the non-service sections of the
 * site (compliance calendar, "how we work", fees & retainers).
 *
 * Same rules as the service art: hand-drawn for this brand, navy +
 * gold, no stock photography, no generic "office people" clichés.
 */

const C = {
  ink: "#0E2A47",
  inkDark: "#0B1F3A",
  gold: "#B8873B",
  goldLight: "#D4A855",
  paper: "#FAF7F1",
  surface: "#F2EFE7",
  card: "#FFFFFF",
  blue: "#4A6B8A",
  blueLight: "#8FA9C0",
  success: "#2F7A5F",
  warning: "#C2762A",
  border: "rgba(14,42,71,0.14)",
  hair: "rgba(14,42,71,0.10)",
} as const;

function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 480 320"
      className={cn("block h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="480" height="320" fill={C.surface} />
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------
   Compliance calendar — a month of deadlines, most already filed.
   ------------------------------------------------------------------ */
export function ComplianceCalendarArt({ className }: { className?: string }) {
  const cells: { x: number; y: number }[] = [];
  for (let r = 0; r < 5; r += 1) {
    for (let c = 0; c < 7; c += 1) {
      cells.push({ x: 100 + c * 44, y: 132 + r * 32 });
    }
  }
  const due = new Set([9, 16, 24]);
  const filed = new Set([2, 3, 10, 17, 25, 26]);
  return (
    <Shell className={className}>
      <path
        d="M0 292 C 120 288, 250 260, 480 268"
        stroke={C.gold}
        strokeWidth="2"
        opacity="0.3"
        fill="none"
      />

      {/* month card */}
      <rect x="88" y="42" width="326" height="234" rx="14" fill={C.ink} opacity="0.07" />
      <rect x="82" y="34" width="326" height="234" rx="14" fill={C.card} stroke={C.border} />
      <path d="M82 82 h326" stroke={C.ink} strokeWidth="14" opacity="0.88" />
      <rect x="104" y="56" width="86" height="10" rx="5" fill={C.paper} opacity="0.4" />
      <rect x="326" y="58" width="60" height="7" rx="3.5" fill={C.goldLight} />
      <path
        d="M150 82 v-26 M340 82 v-26"
        stroke={C.ink}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.3"
      />

      {cells.map((cell, i) => {
        const isDue = due.has(i);
        const isFiled = filed.has(i);
        return (
          <g key={`${cell.x}-${cell.y}`}>
            <rect
              x={cell.x}
              y={cell.y}
              width="32"
              height="22"
              rx="6"
              fill={isFiled ? C.ink : isDue ? "rgba(184,135,59,0.16)" : "rgba(14,42,71,0.05)"}
              opacity={isFiled ? 0.85 : 1}
            />
            {isDue && <circle cx={cell.x + 16} cy={cell.y + 11} r="5.5" fill={C.gold} />}
            {isFiled && (
              <path
                d={`M${cell.x + 9} ${cell.y + 11} l4 4 l9 -9`}
                stroke={C.goldLight}
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
          </g>
        );
      })}

      {/* filed chip */}
      <g transform="translate(28 118)">
        <rect width="126" height="34" rx="17" fill={C.ink} />
        <circle cx="20" cy="17" r="8" fill={C.success} opacity="0.9" />
        <path
          d="M16 17 l3 3.5 l6 -7"
          stroke={C.paper}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="36" y="12" width="72" height="9" rx="4.5" fill={C.goldLight} />
      </g>

      {/* due chip */}
      <g transform="translate(30 196)">
        <rect width="126" height="34" rx="17" fill={C.card} stroke={C.border} />
        <circle cx="20" cy="17" r="8" fill={C.warning} opacity="0.22" />
        <circle cx="20" cy="17" r="3" fill={C.warning} />
        <rect x="36" y="12" width="52" height="9" rx="4.5" fill={C.ink} opacity="0.35" />
      </g>

      {/* desk pen */}
      <g transform="rotate(-18 420 268)">
        <rect x="392" y="248" width="96" height="12" rx="6" fill={C.ink} />
        <rect x="446" y="248" width="42" height="12" rx="6" fill={C.gold} />
        <path d="M392 254 l-16 6 l16 6 Z" fill={C.inkDark} />
      </g>
    </Shell>
  );
}

/* ------------------------------------------------------------------
   Ledger desk — an accounts flat-lay drawn from scratch (no stock photo).
   ------------------------------------------------------------------ */
export function LedgerDeskArt({ className }: { className?: string }) {
  const rows = [0, 1, 2, 3, 4];
  return (
    <Shell className={className}>
      <path
        d="M0 258 C 140 246, 320 262, 480 250"
        stroke={C.hair}
        strokeWidth="1.5"
        fill="none"
      />

      {/* invoice stack */}
      <g transform="rotate(-6 200 150)">
        <rect x="118" y="46" width="176" height="228" rx="8" fill={C.ink} opacity="0.14" />
        <rect x="108" y="38" width="176" height="228" rx="8" fill={C.card} stroke={C.border} />
        <path d="M108 74 h176" stroke={C.ink} strokeWidth="12" opacity="0.88" />
        <circle cx="126" cy="56" r="4" fill={C.goldLight} />
        <rect x="140" y="52" width="56" height="8" rx="4" fill={C.paper} opacity="0.45" />
        <rect x="228" y="54" width="42" height="5" rx="2.5" fill={C.goldLight} opacity="0.9" />
        {rows.map((r) => (
          <g key={r}>
            <rect
              x="126"
              y={94 + r * 22}
              width={r % 2 ? 66 : 88}
              height="5"
              rx="2.5"
              fill={C.hair}
            />
            <rect x="230" y={94 + r * 22} width="34" height="5" rx="2.5" fill={C.ink} opacity="0.2" />
          </g>
        ))}
        <rect x="126" y="212" width="138" height="1" fill={C.hair} />
        <rect x="126" y="222" width="60" height="6" rx="3" fill={C.gold} />
        <rect x="126" y="240" width="94" height="5" rx="2.5" fill={C.hair} />
        <path d="M250 20 a12 12 0 0 1 0 24 h-20" stroke={C.blue} strokeWidth="3" fill="none" opacity="0.7" />
      </g>

      {/* calculator */}
      <g transform="rotate(6 356 214)">
        <rect x="304" y="150" width="112" height="150" rx="12" fill={C.ink} />
        <rect x="318" y="164" width="84" height="30" rx="6" fill={C.paper} opacity="0.9" />
        <rect x="326" y="176" width="46" height="7" rx="3.5" fill={C.ink} opacity="0.5" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <rect
              key={`k${r}-${c}`}
              x={318 + c * 22}
              y={206 + r * 24}
              width="16"
              height="16"
              rx="4"
              fill={r === 2 && c === 3 ? C.gold : C.paper}
              opacity={r === 2 && c === 3 ? 1 : 0.22}
            />
          ))
        )}
      </g>

      {/* pen */}
      <g transform="rotate(38 236 300)">
        <rect x="196" y="292" width="112" height="11" rx="5.5" fill={C.blue} opacity="0.5" />
        <rect x="264" y="292" width="44" height="11" rx="5.5" fill={C.gold} />
        <path d="M196 297.5 l-18 5.5 l18 5.5 Z" fill={C.ink} />
      </g>

      {/* tea cup */}
      <g transform="translate(408 72)">
        <path
          d="M-16 -26 c0 -12 6 -18 6 -26 M4 -26 c0 -10 5 -16 5 -24 M22 -26 c0 -8 4 -14 4 -20"
          stroke={C.ink}
          strokeWidth="2"
          opacity="0.22"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M-30 -18 h60 v26 a30 26 0 0 1 -60 0 Z" fill={C.card} stroke={C.border} />
        <path d="M30 -12 h10 a12 12 0 0 1 0 24 h-10" stroke={C.border} strokeWidth="4" fill="none" />
        <rect x="-24" y="-12" width="48" height="8" rx="4" fill={C.gold} opacity="0.35" />
      </g>

      {/* gold paperclip */}
      <g transform="translate(60 250)">
        <path
          d="M0 0 v-28 a10 10 0 0 1 20 0 v34 a16 16 0 0 1 -32 0 v-30"
          stroke={C.gold}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </Shell>
  );
}

/* ------------------------------------------------------------------
   Growth arc — three retainer tiers rising, with a plan and a check-in.
   ------------------------------------------------------------------ */
export function GrowthArcArt({ className }: { className?: string }) {
  const steps = [
    { x: 84, h: 74, tone: C.blueLight, o: 0.6 },
    { x: 178, h: 118, tone: C.blue, o: 0.8 },
    { x: 272, h: 164, tone: C.ink, o: 0.9 },
  ];
  return (
    <Shell className={className}>
      <path d="M0 296 H480" stroke={C.hair} strokeWidth="1.5" />

      {/* stepped tiers */}
      {steps.map((s) => (
        <g key={s.x}>
          <rect x={s.x} y={252 - s.h} width="86" height={s.h} rx="8" fill={s.tone} opacity={s.o} />
          <rect x={s.x} y={252 - s.h} width="86" height="9" rx="4.5" fill={C.gold} opacity="0.9" />
          <rect x={s.x + 16} y={252 - s.h + 28} width="54" height="6" rx="3" fill={C.paper} opacity="0.45" />
          <rect x={s.x + 16} y={252 - s.h + 46} width="38" height="6" rx="3" fill={C.paper} opacity="0.3" />
        </g>
      ))}

      {/* sweeping arc over the tiers */}
      <path
        d="M84 96 C 170 46, 300 34, 404 54"
        stroke={C.gold}
        strokeWidth="3"
        fill="none"
        strokeDasharray="1 0"
        opacity="0.85"
      />
      {[84, 244, 404].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={i === 0 ? 96 : i === 1 ? 38 : 54} r="8" fill={C.paper} stroke={C.gold} strokeWidth="3" />
          <circle cx={x} cy={i === 0 ? 96 : i === 1 ? 38 : 54} r="2.6" fill={C.ink} />
        </g>
      ))}

      {/* checked milestone */}
      <g transform="translate(244 38)">
        <rect x="-30" y="-58" width="60" height="42" rx="10" fill={C.ink} />
        <path
          d="M-12 -38 l8 8 l18 -18"
          stroke={C.goldLight}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M0 -16 l0 16" stroke={C.ink} strokeWidth="31" opacity="0" />
      </g>

      {/* receipt slip */}
      <g transform="translate(392 176)">
        <rect x="0" y="0" width="62" height="76" rx="6" fill={C.card} stroke={C.border} />
        <path d="M0 62 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8" stroke={C.card} strokeWidth="0" fill="none" />
        <path d="M10 16 h42 M10 30 h42 M10 44 h26" stroke={C.hair} strokeWidth="4" strokeLinecap="round" />
        <circle cx="46" cy="58" r="9" fill={C.gold} opacity="0.9" />
      </g>
    </Shell>
  );
}