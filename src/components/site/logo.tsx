import { cn } from "@/lib/utils";

/**
 * Yaara logo — recreated as a flat, scalable SVG (the brief explicitly
 * recommends a flat vector over the 3D-bevelled raster original so it
 * survives at 24×24px). Concept: navy "Y" anchoring a three-bar ascending
 * chart that lifts into an upward arrow, encircled by a split navy/gold ring.
 *
 * Two variants:
 *  - `mark`     : icon only (favicon, nav, avatar)
 *  - `lockup`   : icon + wordmark + tagline (hero, footer)
 */
export function YaaraLogo({
  className,
  variant = "lockup",
  onDark = false,
}: {
  className?: string;
  variant?: "mark" | "lockup";
  onDark?: boolean;
}) {
  const navy = onDark ? "#FAF7F1" : "#0E2A47";
  const gold = onDark ? "#D4A855" : "#B8873B";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 48 48"
        className={cn("h-9 w-9", className)}
        role="img"
        aria-label="Yaara Consultancy Services"
        fill="none"
      >
        {/* Split ring — navy left, gold right */}
        <path
          d="M24 3a21 21 0 1 0 0 42"
          stroke={navy}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 45a21 21 0 0 0 0-42"
          stroke={gold}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* The Y stem */}
        <path
          d="M24 16v16"
          stroke={navy}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Left arm of Y */}
        <path
          d="M24 22l-7-7"
          stroke={navy}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Right arm of Y becomes the ascending bars + arrow */}
        <rect x="25.5" y="20" width="2.6" height="6" rx="1" fill={gold} />
        <rect x="29.5" y="16.5" width="2.6" height="9.5" rx="1" fill={gold} />
        <path
          d="M33.5 13.5l3-3 3 3M36.5 10.5v9"
          stroke={gold}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <YaaraLogo variant="mark" onDark={onDark} />
      <div className="flex flex-col leading-none">
        <span
          className="font-serif text-[1.35rem] font-semibold tracking-[0.14em] uppercase"
          style={{ color: navy }}
        >
          Yaara
        </span>
        <span
          className="font-sans text-[0.55rem] font-medium tracking-[0.34em] uppercase mt-1"
          style={{ color: gold }}
        >
          Consultancy Services
        </span>
      </div>
    </div>
  );
}

/** Compact signature for the founder's note — first-name cursive feel */
export function FounderSignature({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 70"
      className={cn("h-12 w-auto", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 48c6-22 14-30 20-30 5 0 6 8 3 18-2 7-7 14-11 14-3 0-3-6 0-14 4-11 12-22 18-22 4 0 4 6 1 14-3 9-9 18-14 18 6-2 14-12 20-24 2-4 5-4 5 0 0 5-4 12-8 14 4-1 9-7 13-16"
        stroke="#0E2A47"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M104 40c4-10 9-16 13-16 3 0 3 4 1 9-2 6-6 10-9 10 4-1 8-6 11-13 2-4 4-4 4 0 0 4-3 9-6 11 3-1 6-5 9-11"
        stroke="#0E2A47"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M150 36c3-7 7-12 10-12 3 0 3 3 1 7-1 4-4 7-7 7 3-1 6-4 8-9"
        stroke="#B8873B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M168 34c2-5 5-9 8-9 2 0 2 2 1 5-1 3-3 5-5 5 2-1 4-3 6-6M180 30c2-3 4-5 6-5"
        stroke="#0E2A47"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
