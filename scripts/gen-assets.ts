/**
 * Generates every brand asset in ./static from the two vector logos in ./brand:
 *   brand/icon.svg      the orange comet square
 *   brand/wordmark.svg  the "ipcomet" text with the orange dot
 * Writes favicon.svg, logo.svg (icon + wordmark, used in the page header and footer), wordmark.svg, favicon.ico,
 * favicon-48.png, favicon-96.png, icon-192.png, icon-512.png, apple-touch-icon.png and og.png (1200x630 social card).
 * The outputs are committed, so this only needs to run when a logo or the card text changes:
 *   npx tsx scripts/gen-assets.ts
 * Uses sharp, which is already present in node_modules as a dependency of wrangler.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "static");
const iconSvg = readFileSync(join(root, "brand", "icon.svg"), "utf8").trim();
const wordSvg = readFileSync(join(root, "brand", "wordmark.svg"), "utf8").trim();

/** The drawing inside an <svg> element, so one logo can be placed inside another picture. */
const inner = (svg: string) => svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
const viewBox = (svg: string) => /viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/.exec(svg)!.slice(1, 3).map(Number) as [number, number];
const [IW, IH] = viewBox(iconSvg);
const [WW, WH] = viewBox(wordSvg);
const ORANGE = "#fb5816";

/** A logo placed at x, y and sized to the given width, keeping its proportions. */
const place = (svg: string, x: number, y: number, width: number) => {
  const [w, h] = viewBox(svg);
  return `<svg x="${x}" y="${y}" width="${width}" height="${(width * h) / w}" viewBox="0 0 ${w} ${h}">${inner(svg)}</svg>`;
};

// Icon and wordmark side by side. The wordmark is 64% of the icon's height and centred on it.
const WORD_H = IH * 0.64;
const WORD_W = (WORD_H * WW) / WH;
const GAP = IW * 0.26;
const LOCKUP_W = Math.round(IW + GAP + WORD_W);
const lockup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LOCKUP_W} ${IH}">${place(iconSvg, 0, 0, IW)}${place(wordSvg, IW + GAP, (IH - WORD_H) / 2, WORD_W)}</svg>`;

const FONT = `font-family="Helvetica Neue, Helvetica, Arial, sans-serif"`;
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#fffbf5"/>
<rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="#d9cdbb" stroke-width="2" stroke-dasharray="10 8"/>
${place(wordSvg, 72, 62, 300)}
<text x="72" y="330" ${FONT} font-size="96" font-weight="700" fill="#1f1f1f" letter-spacing="-4">What is my</text>
<text x="72" y="430" ${FONT} font-size="96" font-weight="700" fill="#1f1f1f" letter-spacing="-4">IP address?</text>
<rect x="72" y="464" width="150" height="9" rx="4.5" fill="${ORANGE}"/>
<text x="72" y="540" ${FONT} font-size="34" font-weight="500" fill="#6f6860">IP lookup · DNS · WHOIS · Speed test · Port checker</text>
<text x="72" y="580" ${FONT} font-size="26" font-weight="500" fill="#6f6860">Free and fast. No ads, and analytics only if you accept.</text>
${place(iconSvg, 780, 140, 350)}
</svg>`;

const png = (svg: string, size: number) => sharp(Buffer.from(svg), { density: 384 }).resize(size, size).png().toBuffer();

/** Packs PNG images into a .ico container (PNG payloads are valid in ICO since Windows Vista). */
function ico(images: Array<{ size: number; data: Buffer }>): Buffer {
  const head = Buffer.alloc(6 + 16 * images.length);
  head.writeUInt16LE(0, 0);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(images.length, 4);
  let offset = head.length;
  images.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    head.writeUInt8(size >= 256 ? 0 : size, e);
    head.writeUInt8(size >= 256 ? 0 : size, e + 1);
    head.writeUInt16LE(1, e + 4);
    head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(data.length, e + 8);
    head.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([head, ...images.map((i) => i.data)]);
}

// iOS applies its own rounded mask, so the touch icon is a full-bleed orange square with the comet on it.
const fullBleed = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${IW} ${IW}"><rect width="${IW}" height="${IW}" fill="${ORANGE}"/>${inner(iconSvg)}</svg>`;

writeFileSync(join(out, "favicon.svg"), iconSvg);
writeFileSync(join(out, "wordmark.svg"), wordSvg);
writeFileSync(join(out, "logo.svg"), lockup);
writeFileSync(join(out, "og.png"), await sharp(Buffer.from(card), { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toBuffer());
writeFileSync(join(out, "apple-touch-icon.png"), await png(fullBleed, 180));
writeFileSync(join(out, "icon-512.png"), await png(iconSvg, 512));
writeFileSync(join(out, "icon-192.png"), await png(iconSvg, 192));
// Google asks for a favicon that is a multiple of 48 px, so ship 48 and 96 as plain PNGs as well as the .ico.
writeFileSync(join(out, "favicon-48.png"), await png(iconSvg, 48));
writeFileSync(join(out, "favicon-96.png"), await png(iconSvg, 96));
writeFileSync(join(out, "favicon.ico"), ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await png(iconSvg, size) })))));
console.log(`Wrote the logo set to static/ (lockup ${LOCKUP_W}x${IH}).`);
