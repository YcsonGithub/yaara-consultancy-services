import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Yaara logo — uses the client's original logo image.
 * Two variants:
 *  - `lockup` : the full original PNG (icon + wordmark + tagline)
 *  - `mark`   : a clean flat SVG monogram for favicon / small placements
 *               (the original 3D-bevelled image does not survive at 24×24px,
 *                so a flat SVG mark is used for tiny placements — this is
 *                standard practice, not a replacement of the brand logo.)
 */
export function YaaraLogo({
  className,
  variant = "lockup",
  onDark = false,
  height = 44,
}: {
  className?: string;
  variant?: "mark" | "lockup";
  onDark?: boolean;
  height?: number;
}) {
  if (variant === "mark") {
    const navy = onDark ? "#FAF7F1" : "#0E2A47";
    const gold = onDark ? "#D4A855" : "#B8873B";
    return (
      <svg
        viewBox="0 0 48 48"
        className={cn("h-9 w-9", className)}
        role="img"
        aria-label="Yaara Consultancy Services"
        fill="none"
      >
        <path d="M24 3a21 21 0 1 0 0 42" stroke={navy} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 45a21 21 0 0 0 0-42" stroke={gold} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 16v16" stroke={navy} strokeWidth="3" strokeLinecap="round" />
        <path d="M24 22l-7-7" stroke={navy} strokeWidth="3" strokeLinecap="round" />
        <rect x="25.5" y="20" width="2.6" height="6" rx="1" fill={gold} />
        <rect x="29.5" y="16.5" width="2.6" height="9.5" rx="1" fill={gold} />
        <path d="M33.5 13.5l3-3 3 3M36.5 10.5v9" stroke={gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <div className={cn("relative", className)} style={{ height }}>
      <Image
        src="/logo-original.png"
        alt="Yaara Consultancy Services — Advise · Analyze · Achieve"
        width={612}
        height={408}
        priority
        className="h-full w-auto object-contain"
        sizes="(max-width: 768px) 180px, 220px"
      />
    </div>
  );
}

/** Founder signature — cursive-style SVG */
export function FounderSignature({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 70"
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
