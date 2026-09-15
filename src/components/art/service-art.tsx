import type { ServiceCategory } from "@/lib/services";
import { cn } from "@/lib/utils";

/**
 * ============================================================
 *  YAARA SERVICE ART
 * ============================================================
 * Hand-authored SVG scenes — one bespoke illustration per service
 * category. Deliberately NOT stock photography or generic "3D blob"
 * illustrations: each scene is drawn from the vocabulary of the work
 * itself (challans, seals, ledgers, payslips, growth arcs) in the
 * site's navy-and-gold palette, so it always matches the brand and
 * stays crisp at any size.
 *
 * Because they are SVGs there is no image request, no LCP penalty,
 * and every scene scales from a 120px card band to a full hero panel.
 */

const C = {
  ink: "#0E2A47",
  inkDark: "#0B1F3A",
  gold: "#B8873B",
  goldLight: "#D4A855",
  paper: "#FAF7F1",
  surface: "#F2EFE7",
  card: "#FFFFFF",
  slate: "#3D4654",
  blue: "#4A6B8A",
  blueLight: "#8FA9C0",
  success: "#2F7A5F",
  border: "rgba(14,42,71,0.14)",
  hair: "rgba(14,42,71,0.10)",
} as const;

/* ------------------------------------------------------------------
   Shared frame — every scene is composed on a 480×320 stage
   ------------------------------------------------------------------ */
function Stage({
  children,
  tone = "surface",
}: {
  children: React.ReactNode;
  tone?: "surface" | "paper" | "ink";
}) {
  const bg = tone === "ink" ? C.ink : tone === "paper" ? C.paper : C.surface;
  return (
    <>
      <rect width="480" height="320" fill={bg} />
      {children}
    </>
  );
}

/* ------------------------------------------------------------------
   01 — Tax & Statutory Compliance
   A filed return, a gold stamp, a rate slab and a due-date grid.
   ------------------------------------------------------------------ */
function TaxScene() {
  const rows = [104, 128, 152, 176, 200];
  return (
    <Stage>
      <path
        d="M0 78 C 96 78, 132 26, 214 26"
        stroke={C.hair}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M-12 300 C 90 292, 150 250, 214 246"
        stroke={C.gold}
        strokeWidth="2"
        opacity="0.35"
        fill="none"
      />

      {/* return sheet */}
      <rect x="150" y="36" width="196" height="248" rx="10" fill={C.ink} opacity="0.07" />
      <rect x="144" y="30" width="196" height="248" rx="10" fill={C.card} stroke={C.border} />
      <rect x="166" y="54" width="92" height="10" rx="5" fill={C.ink} opacity="0.75" />
      <rect x="166" y="70" width="58" height="6" rx="3" fill={C.gold} />
      {rows.map((y, i) => (
        <rect
          key={`r${y}`}
          x="166"
          y={y}
          width={i % 2 ? 112 : 146}
          height="5"
          rx="2.5"
          fill={C.hair}
        />
      ))}
      {rows.map((y) => (
        <circle key={`d${y}`} cx="322" cy={y + 2} r="3" fill={C.gold} opacity="0.6" />
      ))}
      <rect x="166" y="228" width="146" height="1" fill={C.hair} />
      <rect x="166" y="242" width="64" height="6" rx="3" fill={C.ink} opacity="0.18" />

      {/* gold stamp — filed */}
      <g transform="translate(292 234)">
        <circle r="38" fill={C.gold} opacity="0.14" />
        <circle r="38" stroke={C.gold} strokeWidth="3" fill="none" />
        <circle r="29" stroke={C.gold} strokeWidth="1" fill="none" opacity="0.7" />
        <path
          d="M-13 1.5 L-4 11 L14 -9"
          stroke={C.gold}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* rate slab */}
      <g transform="translate(28 62)">
        <rect width="86" height="58" rx="9" fill={C.ink} />
        <circle cx="28" cy="21" r="6.5" stroke={C.goldLight} strokeWidth="2.5" fill="none" />
        <circle cx="58" cy="38" r="6.5" stroke={C.goldLight} strokeWidth="2.5" fill="none" />
        <path
          d="M18 46 L68 14"
          stroke={C.paper}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>

      {/* due-date grid */}
      <g transform="translate(30 168)">
        <rect width="92" height="92" rx="8" fill={C.card} stroke={C.border} />
        <path d="M0 22 h92 M0 30 h92" stroke={C.ink} strokeWidth="8" />
        <path d="M24 26 v-22 M68 26 v-22" stroke={C.ink} strokeWidth="4" strokeLinecap="round" opacity="0.3" />
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2].map((c) => (
            <circle
              key={`g${r}-${c}`}
              cx={18 + c * 28}
              cy={46 + r * 14}
              r="3.4"
              fill={r === 1 && c === 1 ? C.gold : C.hair}
            />
          ))
        )}
      </g>
    </Stage>
  );
}

/* ------------------------------------------------------------------
   02 — Business Registration & Corporate
   A certificate, an embossed seal with ribbons, and a growing skyline.
   ------------------------------------------------------------------ */
function RegistrationScene() {
  return (
    <Stage>
      <path d="M0 262 H480" stroke={C.hair} strokeWidth="1.5" />

      {/* skyline — each registration a floor higher */}
      <rect x="28" y="188" width="44" height="74" rx="5" fill={C.blueLight} opacity="0.55" />
      <rect x="78" y="152" width="44" height="110" rx="5" fill={C.blue} opacity="0.7" />
      <rect x="128" y="116" width="44" height="146" rx="5" fill={C.ink} opacity="0.85" />
      {[0, 1, 2].map((o) =>
        [0, 1].map((c) => (
          <rect
            key={`w${o}-${c}`}
            x={138 + c * 16}
            y={130 + o * 22}
            width="9"
            height="9"
            rx="2"
            fill={C.goldLight}
            opacity="0.75"
          />
        ))
      )}
      <rect x="34" y="202" width="32" height="3" rx="1.5" fill={C.paper} opacity="0.6" />
      <rect x="84" y="170" width="32" height="3" rx="1.5" fill={C.paper} opacity="0.6" />

      {/* certificate */}
      <rect x="206" y="36" width="212" height="252" rx="10" fill={C.ink} opacity="0.07" />
      <rect x="200" y="30" width="212" height="252" rx="10" fill={C.card} stroke={C.border} />
      <rect
        x="212"
        y="42"
        width="188"
        height="228"
        rx="6"
        fill="none"
        stroke={C.gold}
        strokeWidth="1.5"
        opacity="0.65"
      />
      <rect x="232" y="64" width="148" height="9" rx="4.5" fill={C.ink} opacity="0.8" />
      <rect x="258" y="84" width="96" height="6" rx="3" fill={C.gold} />
      <rect x="232" y="108" width="148" height="1" fill={C.hair} />
      {[130, 152, 174].map((y, i) => (
        <rect key={y} x="232" y={y} width={i === 2 ? 96 : 148} height="5" rx="2.5" fill={C.hair} />
      ))}
      <rect x="232" y="218" width="60" height="5" rx="2.5" fill={C.ink} opacity="0.2" />
      <rect x="232" y="234" width="38" height="5" rx="2.5" fill={C.ink} opacity="0.2" />

      {/* embossed seal + ribbons */}
      <g transform="translate(360 236)">
        <path d="M-14 18 L-26 64 L0 50 L26 64 L14 18 Z" fill={C.gold} opacity="0.3" />
        <circle r="36" fill={C.gold} />
        <circle r="36" fill={C.inkDark} opacity="0.1" />
        <circle r="27" stroke={C.paper} strokeWidth="1.6" fill="none" opacity="0.85" />
        <path
          d="M0 -17 L5 -5 L18 -5 L8 3 L12 16 L0 8 L-12 16 L-8 3 L-18 -5 L-5 -5 Z"
          fill={C.paper}
          opacity="0.92"
        />
      </g>

      {/* approved tag */}
      <g transform="translate(30 40)">
        <rect width="104" height="30" rx="15" fill={C.paper} stroke={C.border} />
        <circle cx="19" cy="15" r="7" fill={C.success} opacity="0.16" />
        <path
          d="M15 15 l3 3 l5 -6"
          stroke={C.success}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="34" y="11" width="52" height="8" rx="4" fill={C.ink} opacity="0.2" />
      </g>
    </Stage>
  );
}

/* ------------------------------------------------------------------
   03 — Accounting & Bookkeeping
   A ledger, a bar series, a donut and coin stacks.
   ------------------------------------------------------------------ */
function AccountingScene() {
  const bars = [
    { x: 96, h: 46 },
    { x: 132, h: 74 },
    { x: 168, h: 60 },
    { x: 204, h: 98 },
  ];
  return (
    <Stage>
      <path d="M0 246 H480" stroke={C.hair} strokeWidth="1.5" />

      {/* ledger */}
      <rect x="28" y="42" width="196" height="232" rx="10" fill={C.ink} opacity="0.07" />
      <rect x="22" y="36" width="196" height="232" rx="10" fill={C.card} stroke={C.border} />
      <path d="M22 78 h196" stroke={C.ink} strokeWidth="10" opacity="0.85" />
      <circle cx="40" cy="57" r="3.4" fill={C.goldLight} />
      <rect x="52" y="52" width="76" height="9" rx="4.5" fill={C.paper} opacity="0.35" />
      {[0, 1, 2, 3, 4, 5].map((r) => (
        <g key={r}>
          <rect x="42" y={96 + r * 26} width={r % 2 ? 74 : 96} height="5" rx="2.5" fill={C.hair} />
          <rect
            x="148"
            y={96 + r * 26}
            width={r % 3 === 0 ? 44 : 34}
            height="5"
            rx="2.5"
            fill={C.gold}
            opacity="0.5"
          />
        </g>
      ))}

      {/* bar series */}
      <rect x="248" y="42" width="208" height="150" rx="10" fill={C.card} stroke={C.border} />
      <path d="M266 172 h172" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
      {bars.map((b, i) => (
        <rect
          key={b.x}
          x={b.x + 158}
          y={172 - b.h}
          width="26"
          height={b.h}
          rx="5"
          fill={i % 2 ? C.ink : C.blue}
          opacity={i % 2 ? 0.85 : 0.75}
        />
      ))}
      <path
        d="M262 116 L300 92 L338 100 L378 60 L424 46"
        stroke={C.gold}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="424" cy="46" r="5" fill={C.gold} />

      {/* donut + coins */}
      <g transform="translate(392 244)">
        <circle r="34" stroke={C.hair} strokeWidth="12" fill="none" />
        <circle
          r="34"
          stroke={C.gold}
          strokeWidth="12"
          fill="none"
          strokeDasharray="150 64"
          strokeLinecap="round"
          transform="rotate(-90)"
        />
      </g>
      <ellipse cx="64" cy="290" rx="30" ry="9" fill={C.ink} opacity="0.85" />
      <ellipse cx="92" cy="284" rx="30" ry="9" fill={C.gold} opacity="0.85" />
    </Stage>
  );
}

/* ------------------------------------------------------------------
   04 — Payroll & HR Compliance
   A payslip, a team roster, a contribution shield and a lock.
   ------------------------------------------------------------------ */
function PayrollScene() {
  const rows = [116, 138, 160, 182, 204];
  return (
    <Stage>
      <path d="M0 84 H480" stroke={C.hair} strokeWidth="1.5" />

      {/* payslip */}
      <rect x="212" y="42" width="200" height="252" rx="10" fill={C.ink} opacity="0.07" />
      <rect x="206" y="36" width="200" height="252" rx="10" fill={C.card} stroke={C.border} />
      <path d="M206 84 h200" stroke={C.ink} strokeWidth="12" opacity="0.85" />
      <circle cx="226" cy="60" r="4" fill={C.goldLight} />
      <rect x="240" y="54" width="80" height="9" rx="4.5" fill={C.paper} opacity="0.4" />
      <rect x="300" y="56" width="60" height="6" rx="3" fill={C.goldLight} opacity="0.9" />
      {rows.map((y, i) => (
        <g key={y}>
          <rect x="226" y={y} width={i % 2 ? 68 : 92} height="5" rx="2.5" fill={C.hair} />
          <rect
            x="330"
            y={y}
            width={i % 3 === 0 ? 54 : 42}
            height="5"
            rx="2.5"
            fill={C.ink}
            opacity="0.22"
          />
        </g>
      ))}
      <rect x="226" y="232" width="158" height="1" fill={C.hair} />
      <rect x="226" y="246" width="70" height="7" rx="3.5" fill={C.gold} />
      <rect x="330" y="246" width="54" height="7" rx="3.5" fill={C.ink} opacity="0.75" />

      {/* roster — three people */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${40 + i * 58} 68)`}>
          <rect width="46" height="58" rx="8" fill={C.card} stroke={C.border} />
          <circle
            cx="23"
            cy="21"
            r="9"
            fill={i === 1 ? C.gold : C.blueLight}
            opacity={i === 1 ? 0.9 : 0.7}
          />
          <path d="M9 48 a14 12 0 0 1 28 0" fill={i === 1 ? C.ink : C.blue} opacity="0.75" />
        </g>
      ))}

      {/* contribution shield */}
      <g transform="translate(84 214)">
        <path
          d="M0 -46 C 22 -40, 34 -38, 40 -30 C 44 -8, 34 22, 0 46 C -34 22, -44 -8, -40 -30 C -34 -38, -22 -40, 0 -46 Z"
          fill={C.ink}
        />
        <path
          d="M-13 0 l10 11 l20 -22"
          stroke={C.goldLight}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* lock */}
      <g transform="translate(158 268)">
        <path
          d="M-9 -6 v-7 a9 9 0 0 1 18 0 v7"
          stroke={C.ink}
          strokeWidth="3.5"
          fill="none"
          opacity="0.7"
        />
        <rect x="-15" y="-6" width="30" height="22" rx="6" fill={C.gold} />
        <circle cx="0" cy="5" r="3" fill={C.inkDark} opacity="0.6" />
      </g>
    </Stage>
  );
}

/* ------------------------------------------------------------------
   05 — Advisory & Growth
   A rising trajectory with milestones, a compass and a planted flag.
   ------------------------------------------------------------------ */
function AdvisoryScene() {
  return (
    <Stage>
      <rect x="28" y="46" width="424" height="216" rx="12" fill={C.card} stroke={C.border} />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M56 ${104 + i * 38} H424`}
          stroke={C.hair}
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      ))}
      <path d="M56 242 H424" stroke={C.ink} strokeWidth="3" strokeLinecap="round" opacity="0.8" />

      {/* area under the trajectory */}
      <path
        d="M56 228 L114 196 L172 206 L236 150 L300 132 L364 92 L424 66 L424 242 L56 242 Z"
        fill={C.blue}
        opacity="0.1"
      />
      <path
        d="M56 228 L114 196 L172 206 L236 150 L300 132 L364 92 L424 66"
        stroke={C.gold}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {[
        [114, 196],
        [236, 150],
        [364, 92],
      ].map(([x, y]) => (
        <circle key={`m${x}`} cx={x} cy={y} r="7" fill={C.paper} stroke={C.gold} strokeWidth="3" />
      ))}
      <circle cx="424" cy="66" r="9" fill={C.gold} />
      <circle cx="424" cy="66" r="3.5" fill={C.paper} />

      {/* flag marking the target */}
      <g transform="translate(424 66)">
        <path d="M0 0 v-56" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
        <path d="M0 -56 L34 -46 L0 -36 Z" fill={C.ink} />
      </g>

      {/* compass */}
      <g transform="translate(390 226)">
        <circle r="26" fill={C.paper} stroke={C.border} />
        <path d="M0 -17 L6 0 L0 17 L-6 0 Z" fill={C.ink} />
        <path d="M-17 0 L0 -6 L17 0 L0 6 Z" fill={C.gold} opacity="0.85" />
        <circle r="3" fill={C.paper} />
      </g>

      {/* milestone chip */}
      <g transform="translate(56 72)">
        <rect width="116" height="26" rx="13" fill={C.ink} />
        <rect x="12" y="9" width="54" height="8" rx="4" fill={C.goldLight} />
        <circle cx="88" cy="13" r="5" fill={C.success} opacity="0.9" />
      </g>
    </Stage>
  );
}

/* ------------------------------------------------------------------
   Category → scene
   ------------------------------------------------------------------ */
const SCENES: Record<ServiceCategory, () => React.JSX.Element> = {
  "Tax & Statutory Compliance": TaxScene,
  "Business Registration & Corporate": RegistrationScene,
  "Accounting & Bookkeeping": AccountingScene,
  "Payroll & HR Compliance": PayrollScene,
  "Advisory & Growth": AdvisoryScene,
};

/**
 * CategoryArt — the bespoke illustration for a service category.
 *
 * The 480×320 stage scales like `object-fit: cover`, so the same artwork
 * fills a wide band, a square card or a tall hero panel without distortion.
 * Decorative by default; pass `label` when the art carries meaning for
 * screen-reader users.
 */
export function CategoryArt({
  category,
  className,
  label,
}: {
  category: ServiceCategory;
  className?: string;
  label?: string;
}) {
  const Scene = SCENES[category];
  return (
    <svg
      viewBox="0 0 480 320"
      className={cn("block h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Scene />
    </svg>
  );
}

/** Category → art lookup, for callers that need the component itself. */
export const CATEGORY_ART = SCENES;
