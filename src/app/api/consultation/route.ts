import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// POST /api/consultation — "Book a free consultation" form
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const business = String(body?.business ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Your name and email are required so we can reach you." },
        { status: 400 }
      );
    }

    // Light, plain-English validation — never a harsh "invalid input"
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        {
          ok: false,
          error: "That email doesn't look quite right — could you double-check it?",
        },
        { status: 400 }
      );
    }

    const record = await db.consultationRequest.create({
      data: {
        name,
        email,
        phone: phone || null,
        business: business || null,
        service: service || null,
        message: message || null,
        status: "new",
      },
    });

    return NextResponse.json({
      ok: true,
      id: record.id,
      message:
        "Thank you — we'll reach out within one working day to set up your free 20-minute call.",
    });
  } catch (err) {
    console.error("[consultation] error", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our end while saving your request. Please try once more, or WhatsApp us directly.",
      },
      { status: 500 }
    );
  }
}
