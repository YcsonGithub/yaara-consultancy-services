/**
 * ============================================================
 *  YAARA BRAND ICON GENERATOR
 * ============================================================
 * Renders the supplied `public/brand/logo-original.png` into every raster icon size
 * the site needs. Run it after editing the mark:
 *
 *   bun scripts/generate-brand-icons.mjs   (or: node ...)
 *
 * Outputs
 *   public/favicon.ico                  — 16/32/48, root (browsers probe /favicon.ico)
 *   public/brand/apple-touch-icon.png   — 180×180, iOS home screen
 *   public/brand/icon-192.png           — PWA, any purpose
 *   public/brand/icon-512.png           — PWA, maskable (navy plate)
 *
 * Inputs
 *   public/brand/logo-original.png     — canonical supplied logo source
 *
 * The ICO container is assembled by hand because sharp cannot write
 * .ico; each entry embeds a PNG blob, which every current browser reads.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

/** Transparent-background mark — used for favicon and "any" purpose. */
const MARK = "public/brand/logo-original.png";
/** Same supplied logo source for the 16px .ico entry. */
const MARK_16 = "public/brand/logo-original.png";
/** Full-bleed navy plate — used wherever the platform applies a mask. */
const MASKABLE = "public/brand/logo-original.png";

/**
 * Rasterise the supplied logo source to a square PNG at `size`.
 *
 * `density` controls the intermediate raster size before the downscale.
 * Left at the 72dpi default, sharp rasterises a 64-unit viewBox at just
 * 64px and produces soft edges; too high and the PNG balloons (a fixed
 * 384 roughly quadrupled the .ico to 66 KB). Scaling it with the target
 * gives crisp edges at small sizes without the bloat.
 */
const densityFor = (size) => Math.max(72, Math.min(384, size * 4));

/** Rasterise the supplied logo source to a square PNG at `size`. */
const render = async (source, size, { maskable = false } = {}) =>
  sharp(source, { density: densityFor(size) })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .flatten(maskable ? { background: "#0E2A47" } : { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: size <= 64 })
    .toBuffer();

/* ---------- favicon.ico ---------- */
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(16 * entries.length);
  let offset = header.length + dir.length;

  entries.forEach(({ size, data }, i) => {
    const at = i * 16;
    dir[at] = size >= 256 ? 0 : size; // width  (0 = 256)
    dir[at + 1] = size >= 256 ? 0 : size; // height
    dir[at + 2] = 0; // palette size
    dir[at + 3] = 0; // reserved
    dir.writeUInt16LE(1, at + 4); // color planes
    dir.writeUInt16LE(32, at + 6); // bits per pixel
    dir.writeUInt32LE(data.length, at + 8);
    dir.writeUInt32LE(offset, at + 12);
    offset += data.length;
  });

  return Buffer.concat([header, dir, ...entries.map((e) => e.data)]);
}

const icoSizes = [16, 32, 48];
const ico = buildIco(
  await Promise.all(
    icoSizes.map(async (size) => ({
      size,
      data: await render(size === 16 ? MARK_16 : MARK, size),
    })),
  ),
);
writeFileSync("public/favicon.ico", ico);
console.log("✓ public/favicon.ico", icoSizes.join("/"), `${(ico.length / 1024).toFixed(1)} KB`);

/* ---------- raster fallbacks ---------- */
const rasters = [
  { file: "public/brand/apple-touch-icon.png", size: 180, source: MASKABLE, note: "maskable" },
  { file: "public/brand/icon-192.png", size: 192, source: MARK, note: "any" },
  { file: "public/brand/icon-512.png", size: 512, source: MASKABLE, note: "maskable" },
];

for (const { file, size, source, note } of rasters) {
  const buf = await render(source, size, { maskable: note === "maskable" });
  writeFileSync(file, buf);
  console.log(
    `✓ ${file}`,
    `${size}×${size} ${note}`,
    `${(buf.length / 1024).toFixed(1)} KB`,
  );
}

console.log("Sources:", path.normalize(MARK), path.normalize(MARK_16), path.normalize(MASKABLE));
