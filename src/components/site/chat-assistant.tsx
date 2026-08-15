"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  MessageSquareText,
  X,
  Send,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { CONTACT } from "@/lib/site";

/**
 * Yaara website assistant — a scoped routing concierge (NOT a tax advisor).
 *
 * - Helps visitors find the right service / page / price.
 * - Always offers a human handoff (WhatsApp / book a call).
 * - Clearly labelled "not a CA" to avoid misleading visitors.
 *
 * Pairs with the WhatsApp float in the bottom-right dock:
 *   [chat trigger]   ← sits above
 *   [whatsapp]       ← sits below
 */

type Role = "user" | "assistant";
interface Msg {
  role: Role;
  content: string;
}

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hi — I'm the **Yaara assistant**. I can help you find the right service, check pricing, or point you to the next deadline. For anything that needs real judgement about your situation, I'll connect you to a human. What brings you here today?",
};

const QUICK_REPLIES = [
  "What services do you offer?",
  "Help with GST registration",
  "How much does it cost?",
  "I missed a filing deadline",
  "Book a free call",
];

const SUGGESTIONS_AFTER = [
  "Tell me about ITR filing",
  "What industries do you serve?",
  "Where are you located?",
  "Talk to a human on WhatsApp",
];

export function ChatAssistant() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unseen, setUnseen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages / loading state changes
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  // Focus the input when the panel opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Reset the unseen dot when the panel opens
  useEffect(() => {
    if (open) setUnseen(false);
  }, [open]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      setError(null);
      const nextMessages: Msg[] = [
        ...messages,
        { role: "user", content: trimmed },
      ];
      setMessages(nextMessages);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: trimmed,
            // Send prior turns (exclude the welcome + the just-added user msg
            // — the user msg goes as `message` above)
            messages: nextMessages
              .slice(1, -1)
              .map((m) => ({ role: m.role, content: m.content })),
          }),
        });
        const json = await res.json();
        if (!res.ok || !json.ok) {
          throw new Error(json?.error || "Something went wrong.");
        }
        const reply: string = json.reply || "Could you rephrase that?";
        setMessages((m) => [...m, { role: "assistant", content: reply }]);
        if (!open) setUnseen(true);
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Something went wrong.";
        setError(msg);
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              "I hit a snag just then. Could you try once more — or message us on WhatsApp for a faster reply?",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading, open]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const onQuickReply = (text: string) => {
    if (text.toLowerCase().includes("whatsapp")) {
      window.open(CONTACT.whatsappHref, "_blank", "noopener,noreferrer");
      return;
    }
    if (text.toLowerCase().includes("book a free call")) {
      setOpen(false);
      router.push("/book");
      return;
    }
    send(text);
  };

  // Show different quick replies depending on conversation length
  const showQuickReplies = messages.length <= 2 && !loading;
  const quickReplies =
    messages.length <= 1 ? QUICK_REPLIES : SUGGESTIONS_AFTER;

  return (
    <>
      {/* Trigger button — sits above the WhatsApp float */}
      <div className="fixed bottom-24 right-5 z-40 sm:bottom-28 sm:right-6">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close Yaara assistant" : "Open Yaara assistant"}
          aria-expanded={open}
          className={`group relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-[0_12px_30px_-8px_rgba(14,42,71,0.55)] transition-all hover:scale-105 hover:bg-ink-dark ${
            open ? "ring-2 ring-gold ring-offset-2 ring-offset-paper" : ""
          }`}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageSquareText className="h-6 w-6" />
              {/* Unseen indicator */}
              {unseen && (
                <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-ink bg-gold" />
                </span>
              )}
              {/* First-visit hint badge */}
              {messages.length <= 1 && !unseen && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 font-mono text-[0.6rem] font-semibold text-ink shadow">
                  AI
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Yaara assistant chat"
          className="fixed inset-x-3 bottom-44 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-border bg-paper shadow-[0_30px_70px_-20px_rgba(14,42,71,0.5)] sm:inset-x-auto sm:bottom-44 sm:right-6 sm:w-[400px] sm:max-h-[600px]"
        >
          {/* Header */}
          <div className="relative shrink-0 bg-ink px-4 py-3.5 text-paper">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-serif text-[1.05rem] font-medium leading-tight text-paper">
                    Yaara Assistant
                  </p>
                  <p className="font-mono text-[0.66rem] uppercase tracking-wide text-paper/60">
                    Routing · not a CA
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {/* Online status strip */}
            <div className="mt-2.5 flex items-center gap-1.5 border-t border-paper/10 pt-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="font-sans text-[0.72rem] text-paper/70">
                Online · instant replies
              </span>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="scroll-fine flex-1 space-y-3 overflow-y-auto bg-paper-grain px-4 py-4"
            aria-live="polite"
          >
            {messages.map((m, i) => (
              <MessageBubble key={i} role={m.role} content={m.content} />
            ))}

            {loading && <TypingIndicator />}

            {error && (
              <div className="flex items-start gap-2 rounded-lg border border-error/20 bg-error/5 p-2.5">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-error" />
                <p className="font-sans text-[0.78rem] leading-relaxed text-error">
                  {error}
                </p>
              </div>
            )}

            {showQuickReplies && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onQuickReply(q)}
                    className="rounded-full border border-border bg-card px-2.5 py-1.5 font-sans text-[0.74rem] text-ink transition-colors hover:border-gold hover:bg-gold/5"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={onSubmit}
            className="shrink-0 border-t border-border bg-card px-3 py-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                placeholder="Ask about a service, deadline, or price…"
                aria-label="Type your message"
                className="scroll-fine max-h-28 min-h-[2.75rem] flex-1 resize-none rounded-lg border border-border bg-paper px-3 py-2.5 font-sans text-[0.88rem] text-ink placeholder:text-muted-foreground focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-ink transition-colors hover:bg-[#a87a33] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 font-mono text-[0.65rem] text-muted-foreground">
              Instant replies · not tax advice ·{" "}
              <a
                href="/book"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  router.push("/book");
                }}
                className="text-gold underline-offset-2 hover:underline"
              >
                book a free call
              </a>{" "}
              for specifics
            </p>
          </form>
        </div>
      )}
    </>
  );
}

/* ---------- Message bubble + lightweight markdown renderer ---------- */

function MessageBubble({ role, content }: { role: Role; content: string }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 font-sans text-[0.87rem] leading-relaxed ${
          isUser
            ? "rounded-br-sm bg-gold text-ink"
            : "rounded-bl-sm border border-border bg-card text-body"
        }`}
      >
        {isUser ? (
          <span className="whitespace-pre-wrap">{content}</span>
        ) : (
          <MarkdownLite text={content} />
        )}
      </div>
    </div>
  );
}

/**
 * Tiny markdown renderer — handles **bold**, [text](url), bullets (- or •),
 * and line breaks. Escapes HTML first to prevent injection. Internal links
 * (starting with /) navigate via Next router and close the panel.
 */
function MarkdownLite({ text }: { text: string }) {
  const router = useRouter();

  // Split into blocks by double-newline (paragraphs / lists)
  const blocks = text.split(/\n{2,}/);

  return (
    <div className="space-y-1.5">
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => /^\s*([-•*])\s+/.test(l));
        if (isList) {
          return (
            <ul key={bi} className="space-y-0.5 pl-1">
              {lines.map((line, li) => (
                <li key={li} className="flex gap-1.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span>
                    {renderInline(line.replace(/^\s*([-•*])\s+/, ""), router)}
                  </span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={bi} className="whitespace-pre-wrap">
            {renderInline(block, router)}
          </p>
        );
      })}
    </div>
  );
}

function renderInline(
  text: string,
  router: ReturnType<typeof useRouter>
): React.ReactNode[] {
  // Pattern matches **bold** or [text](url)
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <a
            key={i}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              router.push(href);
            }}
            className="font-medium text-gold underline-offset-2 hover:underline"
          >
            {label}
          </a>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gold underline-offset-2 hover:underline"
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-muted-foreground/60"
            style={{
              animation: "chat-bounce 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.16}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
