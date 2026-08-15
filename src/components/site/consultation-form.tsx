"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/lib/services";

const SERVICE_OPTIONS = SERVICES.map((s) => s.title).concat(
  "Not sure yet — help me figure it out"
);

export function ConsultationForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [service, setService] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      business: String(data.get("business") ?? "").trim(),
      service: service || "",
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email) {
      toast({
        title: "A couple of fields need your attention",
        description: "Your name and email are required so we can reach you.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        toast({
          title: "Couldn't send that just yet",
          description:
            json?.error ??
            "Something went wrong. Please try once more, or WhatsApp us directly.",
          variant: "destructive",
        });
        return;
      }
      setDone(true);
      toast({
        title: "Request received",
        description:
          "We'll reach out within one working day to set up your free call.",
      });
      form.reset();
      setService("");
    } catch {
      toast({
        title: "Network hiccup",
        description: "Please try once more, or message us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const onDark = variant === "dark";

  return (
    <div
      className={
        onDark
          ? "rounded-xl border border-paper/15 bg-paper p-6 text-ink shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:p-8"
          : "rounded-xl border border-border bg-card p-6 shadow-[0_18px_44px_-26px_rgba(14,42,71,0.3)] sm:p-8"
      }
    >
      {done ? (
        <SuccessState onReset={() => setDone(false)} />
      ) : (
        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name" required>
              <Input name="name" placeholder="e.g. Priya Sharma" autoComplete="name" required className="h-11" />
            </Field>
            <Field label="Email" required>
              <Input name="email" type="email" placeholder="you@business.in" autoComplete="email" required className="h-11" />
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Phone (optional)">
              <Input name="phone" type="tel" placeholder="+91 90000 00000" autoComplete="tel" className="h-11" />
            </Field>
            <Field label="Business name (optional)">
              <Input name="business" placeholder="e.g. Sharma & Co." autoComplete="organization" className="h-11" />
            </Field>
          </div>

          <Field label="What do you need help with?">
            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="h-11 w-full">
                <SelectValue placeholder="Pick the closest match" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Anything we should know before the call? (optional)">
            <Textarea
              name="message"
              placeholder="e.g. We're a 6-person agency, GST registered, missed last month's filing."
              rows={4}
              className="resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-6 font-sans text-[0.97rem] font-semibold text-ink transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Sending…" : "Request my free call"}
            {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
          </button>

          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-muted-foreground">
              <Clock className="h-3 w-3 text-gold" /> 1-day reply
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-muted-foreground">
              <ShieldCheck className="h-3 w-3 text-gold" /> Encrypted & private
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-muted-foreground">
              <MessageCircle className="h-3 w-3 text-gold" /> WhatsApp follow-up
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="font-sans text-[0.82rem] font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-gold">*</span>}
      </Label>
      {children}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
        <CheckCircle2 className="h-8 w-8" />
      </span>
      <h3 className="mt-5 font-serif text-[1.6rem] font-medium text-ink">
        Thank you — your request is in.
      </h3>
      <p className="mt-2 max-w-sm font-sans text-[0.95rem] leading-relaxed text-body">
        We&apos;ll reach out within one working day to set up your free
        20-minute call. In a hurry? Message us on WhatsApp for a faster reply.
      </p>
      <a
        href="https://wa.me/917675016737"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 font-sans text-[0.92rem] font-medium text-paper transition-colors hover:bg-ink-dark"
      >
        <MessageCircle className="h-4 w-4 text-gold-light" />
        Continue on WhatsApp
      </a>
      <button
        onClick={onReset}
        className="mt-3 font-sans text-[0.84rem] text-muted-foreground underline-offset-4 hover:text-ink hover:underline"
      >
        Submit another request
      </button>
    </div>
  );
}
