/**
 * ============================================================
 *  YAARA PLACEHOLDER IMAGE GENERATOR
 * ============================================================
 * Generates branded placeholder PNGs into public/images/ for every
 * slot listed below. Each placeholder is a warm-paper panel with a
 * navy label chip and a gold rule — on-brand enough for production
 * previews, and clearly a placeholder.
 *
 * Usage:  bun scripts/generate-placeholders.mjs   (or: node ...)
 *
 * The AI prompts for the real artwork live in
 * `AI bundles/image-prompts.json`. Overwrite the generated files with
 * the real images at the same paths — no code change required.
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";

const NAVY = "#0E2A47";
const NAVY_DARK = "#0B1F3A";
const GOLD = "#B8873B";
const GOLD_LIGHT = "#D4A855";
const PAPER = "#FAF7F1";
const SURFACE = "#F2EFE7";

/** Every placeholder slot — must stay in sync with src/lib/images.ts. */
const IMAGES = [
  { file: "public/images/industries/hero.png", label: "Industries · hero", w: 1024, h: 640 },
  { file: "public/images/industries/startups-founders.png", label: "Startups & Founders", w: 1024, h: 512 },
  { file: "public/images/industries/freelancers-professionals.png", label: "Freelancers & Professionals", w: 1024, h: 512 },
  { file: "public/images/industries/small-medium-businesses.png", label: "Small & Medium Businesses", w: 1024, h: 512 },
  { file: "public/images/industries/doctors-lawyers-architects.png", label: "Doctors · Lawyers · Architects", w: 1024, h: 512 },
  { file: "public/images/industries/ngos-trusts.png", label: "NGOs & Trusts", w: 1024, h: 512 },
  { file: "public/images/industries/manufacturers-traders.png", label: "Manufacturers & Traders", w: 1024, h: 512 },
  { file: "public/images/resources/hero.png", label: "Resources · hero", w: 1024, h: 640 },
  { file: "public/images/book/hero.png", label: "Book a call · hero", w: 1024, h: 640 },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svgFor({ w, h, label }) {
  const cx = w / 2;
  const cy = h / 2;
  // dotted grid
  let dots = "";
  const step = Math.max(36, Math.round(w / 24));
  for (let x = step / 2; x < w; x += step) {
    for (let y = step / 2; y < h; y += step) {
      dots += `<circle cx="${x}" cy="${y}" r="1.6" fill="${NAVY}" opacity="0.06"/>`;
    }
  }
  const chipW = Math.min(w * 0.72, 640);
  const chipH = 76;
  const captionSize = Math.max(15, Math.round(w / 52));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${SURFACE}"/>
  ${dots}
  <!-- gold diagonal accent -->
  <path d="M-20 ${h - 90} C ${w * 0.3} ${h - 120}, ${w * 0.7} ${h - 40}, ${w + 20} ${h - 70}" stroke="${GOLD}" stroke-width="3" fill="none" opacity="0.35"/>
  <path d="M-20 90 C ${w * 0.35} 60, ${w * 0.65} 130, ${w + 20} 100" stroke="${NAVY}" stroke-width="2" fill="none" opacity="0.12"/>
  <!-- corner accents -->
  <path d="M28 28 h44 M28 28 v44" stroke="${GOLD}" stroke-width="3" opacity="0.8" fill="none"/>
  <path d="M${w - 28} ${h - 28} h-44 M${w - 28} ${h - 28} v-44" stroke="${GOLD}" stroke-width="3" opacity="0.8" fill="none"/>
  <!-- navy label chip -->
  <g>
    <rect x="${cx - chipW / 2 + 8}" y="${cy - chipH / 2 + 8}" width="${chipW}" height="${chipH}" rx="14" fill="${NAVY}" opacity="0.10"/>
    <rect x="${cx - chipW / 2}" y="${cy - chipH / 2}" width="${chipW}" height="${chipH}" rx="14" fill="${NAVY}"/>
    <text x="${cx}" y="${cy + 7}" text-anchor="middle" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="${Math.round(chipH * 0.3)}" font-weight="600" fill="${PAPER}">${esc(label)}</text>
  </g>
  <text x="${cx}" y="${cy + chipH / 2 + captionSize * 2.2}" text-anchor="middle" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="${captionSize}" fill="${NAVY}" opacity="0.55">PLACEHOLDER — generate with AI · prompts: AI bundles/image-prompts.json</text>
  <rect x="${cx - 40}" y="${h - 40}" width="80" height="4" rx="2" fill="${GOLD_LIGHT}"/>
</svg>`;
}

for (const img of IMAGES) {
  mkdirSync(path.dirname(img.file), { recursive: true });
  await sharp(Buffer.from(svgFor(img)))
    .png({ compressionLevel: 9 })
    .toFile(img.file);
  console.log("✓ created", img.file, `${img.w}x${img.h}`);
}

// Report dimensions of the EXISTING images so the prompts JSON stays accurate.
const EXISTING = [
  "public/founder/founder-at-work.png",
  "public/scenes/workspace-flatlay.png",
  "public/scenes/growth-illustration.png",
  "public/logo-original.png",
];
const dims = {};
for (const f of EXISTING) {
  try {
    const meta = await sharp(f).metadata();
    dims[f] = { width: meta.width, height: meta.height };
    console.log("existing", f, `${meta.width}x${meta.height}`);
  } catch (e) {
    console.warn("could not read", f, e.message);
  }
}
console.log("DIMS_JSON " + JSON.stringify(dims));