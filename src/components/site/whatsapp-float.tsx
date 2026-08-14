"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { CONTACT } from "@/lib/site";

/**
 * Floating WhatsApp button — appears after the user scrolls a little.
 * Lower-friction than a portal login for an Indian SMB/CA-services audience.
 */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-end gap-3 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      {expanded && (
        <div className="mb-1 max-w-[16rem] rounded-xl border border-border bg-card p-4 shadow-[0_18px_44px_-16px_rgba(14,42,71,0.4)]">
          <div className="flex items-start justify-between gap-2">
            <p className="font-sans text-[0.9rem] font-semibold text-ink">
              Need help with a filing?
            </p>
            <button
              onClick={() => setExpanded(false)}
              aria-label="Dismiss"
              className="text-muted-foreground hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1.5 font-sans text-[0.82rem] leading-relaxed text-body">
            Message us on WhatsApp — we usually reply the same working day.
          </p>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-success px-3 font-sans text-[0.86rem] font-semibold text-paper"
          >
            <MessageCircle className="h-4 w-4" />
            Start chat
          </a>
        </div>
      )}

      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-paper shadow-[0_12px_30px_-8px_rgba(47,107,79,0.6)] transition-transform hover:scale-105"
      >
        {expanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
