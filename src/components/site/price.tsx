import { PRICING } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * ============================================================
 *  PRICE DISPLAY
 * ============================================================
 * Fees printed on this website are INDICATIVE, not quotes. They are
 * published or hidden across the whole site from one switch —
 * `NEXT_PUBLIC_SHOW_PRICING` in `.env.local` (see `PRICING` in
 * `src/lib/site.ts`).
 *
 * Everything that shows a fee renders through these two components, so
 * there is exactly one place to audit when the fee card changes.
 */

/** Renders a fee, or the "on request" label when pricing is hidden. */
export function Price({
  value,
  className,
  hiddenClassName,
}: {
  /** The fee text as authored (e.g. "From ₹1,499/month"). */
  value: string;
  className?: string;
  /** Applied on top of `className` when the fee is hidden. */
  hiddenClassName?: string;
}) {
  if (PRICING.visible) {
    return <span className={className}>{value}</span>;
  }
  return (
    <span className={cn(className, hiddenClassName)}>{PRICING.hiddenLabel}</span>
  );
}

/** Longer copy used in place of fee tables, to explain how quoting works. */
export function PriceNote({
  className,
  hint,
}: {
  className?: string;
  /** Extra sentence appended when fees are hidden. */
  hint?: React.ReactNode;
}) {
  if (PRICING.visible) {
    return hint ? (
      <p className={cn("font-sans text-[0.86rem] leading-relaxed text-muted-foreground", className)}>
        {hint}
      </p>
    ) : null;
  }
  return (
    <p className={cn("font-sans text-[0.86rem] leading-relaxed text-muted-foreground", className)}>
      {PRICING.hiddenNote}
      {hint ? <> {hint}</> : null}
    </p>
  );
}

/** True when fees are published — for callers that need to branch layout. */
export const PRICES_VISIBLE = PRICING.visible;
