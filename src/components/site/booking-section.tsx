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

const SERVICES = [
  "GST registration & filing",
  "Income Tax Return (ITR)",
  "Business registration (Pvt Ltd / LLP / OPC)",
  "Udyam (MSME) registration",
  "ROC compliance & annual filings",
  "Bookkeeping & accounting",
  "Payroll services",
  "TDS compliance",
  "Professional tax",
  "Trademark registration",
  "Digital Signature Certificate (DSC)",
  "Auditing (via CA partner network)",
  "Business licenses",
  "Not sure yet — help me figure it out",
];

export function BookingSection() {
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

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28"
    >
      {/* gold accent line top */}
      <div className="gold-rule absolute inset-x-0 top-0" />
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(184,135,59,0.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Left — pitch */}
        <div className="lg:col-span-5">
          <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold-light">
            08 — Book a free consultation
          </span>
          <h2 className="mt-3 font-serif text-[2.1rem] font-medium leading-tight text-paper sm:text-[2.8rem]">
            Twenty minutes. No pitch.{" "}
            <span className="italic font-light text-gold-light">
              Just a straight answer.
            </span>
          </h2>
          <p className="mt-5 max-w-md font-sans text-[1rem] leading-[1.7] text-paper/75">
            Tell us a little about your business and what&apos;s on your mind.
            We&apos;ll reply within one working day with a clear next step and a
            transparent price.
          </p>

          <ul className="mt-9 space-y-4">
            <PromiseItem
              icon={Clock}
              title="Reply within 1 working day"
              desc="Usually much faster. Mornings get same-day replies."
            />
            <PromiseItem
              icon={ShieldCheck}
              title="Your details stay private"
              desc="Encrypted, never shared, retained only for compliance."
            />
            <PromiseItem
              icon={MessageCircle}
              title="Pick up the conversation on WhatsApp"
              desc="Lower friction than a portal login — ideal for busy founders."
            />
          </ul>
        </div>

        {/* Right — form card */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-paper/15 bg-paper p-6 text-ink shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:p-8">
            {done ? (
              <SuccessState onReset={() => setDone(false)} />
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Your name" required>
                    <Input
                      name="name"
                      placeholder="e.g. Priya Sharma"
                      autoComplete="name"
                      required
                      className="h-11"
                    />
                  </Field>
                  <Field label="Email" required>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@business.in"
                      autoComplete="email"
                      required
                      className="h-11"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Phone (optional)">
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="+91 90000 00000"
                      autoComplete="tel"
                      className="h-11"
                    />
                  </Field>
                  <Field label="Business name (optional)">
                    <Input
                      name="business"
                      placeholder="e.g. Sharma & Co."
                      autoComplete="organization"
                      className="h-11"
                    />
                  </Field>
                </div>

                <Field label="What do you need help with?">
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Pick the closest match" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
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
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-6 font-sans text-[0.97rem] font-semibold text-ink transition-all hover:bg-[#a87a33] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending…" : "Request my free call"}
                  {!submitting && (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </button>

                <p className="font-mono text-[0.72rem] text-muted-foreground">
                  By submitting, you agree to be contacted about your request.
                  We never spam or share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
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

function PromiseItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Clock;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-3.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-paper/20 bg-paper/5 text-gold-light">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div>
        <p className="font-sans text-[0.92rem] font-semibold text-paper">{title}</p>
        <p className="font-sans text-[0.84rem] text-paper/65">{desc}</p>
      </div>
    </li>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
        <CheckCircle2 className="h-8 w-8" />
      </span>
      <h3 className="mt-5 font-serif text-[1.6rem] font-medium text-ink">
        Thank you &mdash; your request is in.
      </h3>
      <p className="mt-2 max-w-sm font-sans text-[0.95rem] leading-relaxed text-body">
        We&apos;ll reach out within one working day to set up your free
        20-minute call. In a hurry? Message us on WhatsApp for a faster reply.
      </p>
      <a
        href="https://wa.me/919000000000"
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
