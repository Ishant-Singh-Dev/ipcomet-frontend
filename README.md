# ipcomet front-end

The front-end of [ipcomet.com](https://ipcomet.com): free network tools (what is my IP, IP lookup, DNS, WHOIS, proxy checker, speed and ping tests, and more) with guides, in English, French, Spanish, Brazilian Portuguese, German and Hindi.

This repository is the **public front-end only**. The Cloudflare Worker behind it (request routing, the lookup, DNS, WHOIS, port and proxy-checker APIs, rate limits and deployment config) lives in a private repository.

## What is here

| Path | What it is |
|---|---|
| `static/app.js` | The browser code for every tool: forms, results, the speed and ping tests, the proxy checker UI, translations loader |
| `static/` | Favicons, touch icons and the social card |
| `src/layout.ts` | Design system (inline CSS), page shell, header, footer, language switcher, hreflang and structured data |
| `src/pages.ts` | The body of the home page and of every tool |
| `src/blog.ts` | The guides hub, article pages, About and Privacy |
| `src/content/` | The 35 guides, the FAQs and the world-map data |
| `src/i18n/` | Translations: one file per language, keyed by the English text. A language only goes live once it is registered in `index.ts` |
| `src/tools.ts`, `src/network.ts`, `src/html.ts` | Tool metadata, the network-type classifier and the HTML escaper |
| `brand/` | The logo sources: the comet icon and the "ipcomet" wordmark, as SVG plus the original PNGs |
| `scripts/gen-assets.ts`, `scripts/gen-map.ts` | Generators for the favicon set, header logo, social card and map |

## How it works

Pages are rendered to plain HTML at build time (no framework, no web fonts, inline CSS, one cached script), so a first load is about 7 KB. Nothing sets cookies or loads analytics.

The speed test sends its data straight to Cloudflare's speed servers over six parallel connections and averages steady-state samples; latency is measured against the nearest Cloudflare data center.

## Translations

The translated pages were written with AI and are labelled as such on the page; the English version is the reference. Corrections from native speakers are welcome as issues or pull requests against the files in `src/i18n/`.

## Not included

The Worker, API handlers, proxy-checker server code, rate limiting, deploy configuration and keyword research are private, so this repository does not build or deploy on its own.
