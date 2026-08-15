"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * NewsletterForm — footer email capture.
 *
 * Client-only: validates the email locally, shows a success toast, and
 * resets. In production this would POST to /api/newsletter (or a ESP
 * webhook — Mailchimp, Buttondown, ConvertKit). For now it's a clean,
 * non-blocking UX that doesn't require a database table.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const { toast } = useToast();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    setStatus("loading");
    // Simulated async — swap for a real fetch when the API is wired up.
    setTimeout(() => {
      setStatus("done");
      toast({
        title: "You're on the list.",
        description: "One deadline, one tip — every month. No spam.",
      });
      setEmail("");
      // Reset the "done" checkmark back to the form after 2.5s.
      setTimeout(() => setStatus("idle"), 2500);
    }, 600);
  }

  if (status === "done") {
    return (
      <div className="flex h-11 items-center gap-2 rounded-md border border-gold-light/40 bg-gold-light/10 px-4 font-sans text-[0.86rem] text-gold-light">
        <Check className="h-4 w-4" strokeWidth={2} />
        You&apos;re subscribed.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" noValidate>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        required
        className="h-11 min-w-0 flex-1 rounded-md border border-paper/15 bg-paper/5 px-3.5 font-sans text-[0.88rem] text-paper placeholder:text-paper/35 focus:border-gold-light/50 focus:outline-none focus:ring-1 focus:ring-gold-light/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-md bg-gold px-4 font-sans text-[0.86rem] font-semibold text-ink transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
        ) : (
          <>
            Subscribe
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </>
        )}
      </button>
    </form>
  );
}
