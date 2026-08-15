import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { buildAssistantSystemPrompt } from "@/lib/chat-context";

// POST /api/chat — Yaara website assistant (routing concierge, NOT a tax advisor)
// Multi-turn: client sends the full message history each request.
export const runtime = "nodejs";

type ChatRole = "system" | "user" | "assistant";
interface IncomingMessage {
  role: ChatRole;
  content: string;
}

const MAX_MESSAGES = 16; // cap history to control token usage
const MAX_CONTENT_LEN = 2000; // per-message length cap to prevent abuse

function sanitizeHistory(messages: IncomingMessage[]): IncomingMessage[] {
  return messages
    .filter((m) => m && typeof m.content === "string" && m.content.trim().length > 0)
    .slice(-MAX_MESSAGES)
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content.slice(0, MAX_CONTENT_LEN),
    }));
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    const userMessage = String(body?.message ?? "").trim();

    // Build the conversation: system prompt first, then sanitized history, then latest user message
    const systemPrompt = buildAssistantSystemPrompt();

    const conversation: { role: ChatRole; content: string }[] = [
      { role: "system", content: systemPrompt },
      ...sanitizeHistory(messages),
    ];

    if (userMessage) {
      conversation.push({ role: "user", content: userMessage });
    } else if (conversation.length <= 1) {
      return NextResponse.json(
        { ok: false, error: "Please type a message first." },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: conversation,
      thinking: { type: "disabled" },
    });

    const reply =
      completion?.choices?.[0]?.message?.content?.trim() ||
      "I'm sorry — I couldn't quite form a reply just then. Could you rephrase, or message us on WhatsApp for a faster answer?";

    return NextResponse.json({
      ok: true,
      reply,
    });
  } catch (err) {
    console.error("[chat] error", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "The assistant hit a snag. Please try once more, or message us on WhatsApp — we usually reply within a working day.",
      },
      { status: 500 }
    );
  }
}
