import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND_ASSETS } from "@/lib/images";

/** Uses the supplied shield artwork consistently across light and dark surfaces. */
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
    return (
      <Image
        src={BRAND_ASSETS.logoLockup}
        alt="Yaara Consultancy Services"
        width={1254}
        height={1254}
        className={cn("h-9 w-9 object-contain", className)}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)} style={{ height }}>
      <Image
        src={BRAND_ASSETS.logoLockup}
        alt="Yaara Consultancy Services"
        width={1254}
        height={1254}
        priority
        className="h-full w-auto shrink-0 object-contain"
        sizes={`${height}px`}
      />
      <span className={cn("flex min-w-0 flex-col leading-none", onDark ? "text-paper" : "text-ink")}>
        <span className="font-serif text-[1.08rem] font-semibold tracking-[-0.02em]">Yaara</span>
        <span className={cn("mt-1 font-mono text-[0.54rem] font-medium uppercase tracking-[0.14em]", onDark ? "text-paper/65" : "text-muted-foreground")}>
          Consultancy Services
        </span>
      </span>
    </div>
  );
}

/** Founder signature — cursive-style SVG. */
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
