"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CONTACT } from "@/lib/site";

/**
 * Official-style WhatsApp glyph (phone handset in a speech bubble).
 * Kept as inline SVG so it stays crisp at every size and matches the
 * WhatsApp brand mark visitors already recognise.
 */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.18 8.18 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

/**
 * Floating WhatsApp button — always visible (bottom-right).
 * Expandable into a small "need help?" card that links to wa.me.
 *
 * Sits below the assistant chat trigger in the bottom-right dock.
 */
export function WhatsAppFloat() {
  const [expanded, setExpanded] = useState(false);
  const [pinged, setPinged] = useState(false);

  // One gentle attention pulse after a short delay, then settles.
  useEffect(() => {
    const t = setTimeout(() => setPinged(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-40 flex items-end gap-3 sm:bottom-6 sm:right-6">
      {expanded && (
        <div id="whatsapp-card" className="mb-1 max-w-[17rem] animate-in fade-in slide-in-from-bottom-2 duration-200 rounded-xl border border-border bg-card p-4 shadow-[0_18px_44px_-16px_rgba(14,42,71,0.4)]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10 text-success">
                <WhatsAppGlyph className="h-4 w-4" />
              </span>
              <p className="font-sans text-[0.9rem] font-semibold text-ink">
                Chat on WhatsApp
              </p>
            </div>
            <button
              onClick={() => setExpanded(false)}
              aria-label="Dismiss"
              className="text-muted-foreground transition-colors hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2.5 font-sans text-[0.82rem] leading-relaxed text-body">
            Message {`"`}Hi Yaara{`"`} and we usually reply the same working day.
            Founder-led, no ticket queues.
          </p>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-success px-3 font-sans text-[0.86rem] font-semibold text-paper transition-colors hover:bg-[#28603f]"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            Start chat
          </a>
          <p className="mt-2 text-center font-mono text-[0.68rem] text-muted-foreground">
            {CONTACT.phone}
          </p>
        </div>
      )}

      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label="Chat on WhatsApp"
        aria-expanded={expanded}
        aria-controls="whatsapp-card"
        title="Chat on WhatsApp"
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full bg-success text-paper shadow-[0_12px_30px_-8px_rgba(47,107,79,0.6)] transition-transform hover:scale-105 ${
          pinged && !expanded ? "animate-[pulse_2.5s_ease-in-out_1]" : ""
        }`}
      >
        {expanded ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <WhatsAppGlyph className="h-7 w-7" />
            {/* Online dot */}
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-success bg-gold" />
            </span>
          </>
        )}
      </button>
    </div>
  );
}
