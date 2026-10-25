import { ARTICLES } from "./content/articles";
import { HOME_FAQ, TOOL_ABOUT, TOOL_FAQ, TOOL_MORE } from "./content/faqs";
import { MAP_BOTTOM, MAP_COLS, MAP_ROWS_TEXT, MAP_TOP } from "./content/worldmap";
import { LOCALE_DATA, LOCALE_META, localizedPath, t, type Locale } from "./i18n";
import {
  appJsonLd,
  articleCards,
  breadcrumbJsonLd,
  faqJsonLd,
  faqSection,
  organizationJsonLd,
  toolCards,
  toolHeader,
  type Faq,
} from "./layout";
import { classifyNetwork } from "./network";
import { localTool, toolById } from "./tools";
import { esc } from "./html";

export interface ClientInfo {
  ip: string;
  version: 4 | 6 | 0;
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
  postal?: string;
  timezone?: string;
  latitude?: number;
  longitude?: number;
  asn?: number;
  org?: string;
  edge?: string;
  protocol?: string;
  tls?: string;
  rttMs?: number;
}

/** Clamps a percentage for positioning the map pin. */
const clamp = (n: number) => Math.min(100, Math.max(0, n));

/** A translator bound to one language: English text in, that language out (English if no translation). */
type Tr = (text: string, vars?: Record<string, string | number>) => string;
const translator = (loc: Locale): Tr => (text, vars) => t(loc, text, vars);

function rows(items: Array<[string, string | undefined, string?]>): string {
  const body = items
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v, id]) => `<div><dt>${esc(k)}</dt><dd${id ? ` id="${id}"` : ""}>${esc(v)}</dd></div>`)
    .join("");
  return `<dl class="kv">${body}</dl>`;
}

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

/** The guides linked from the English home page: the ones that answer the questions people arrive with. */
const HOME_GUIDES = [
  "how-to-find-your-ip-address",
  "what-is-an-ip-address",
  "what-is-an-ip-checker",
  "why-is-my-ip-location-wrong",
  "how-to-hide-your-ip-address",
  "public-vs-private-ip-address",
];

export function homeBody(c: ClientInfo, loc: Locale = "en"): string {
  const lt = translator(loc);
  const lp = (path: string) => localizedPath(loc, path);
  const faq = loc === "en" ? HOME_FAQ : (LOCALE_DATA[loc]?.home.faq ?? HOME_FAQ);

  const place = [...new Set([c.city, c.region].filter(Boolean))].join(", ");
  // The country's name in the page language, from the runtime's own data (English if that fails).
  let country = c.country;
  if (loc !== "en" && c.countryCode) {
    try {
      country = new Intl.DisplayNames([LOCALE_META[loc].htmlLang], { type: "region" }).of(c.countryCode) ?? country;
    } catch {
      /* keep the English name */
    }
  }
  const coords =
    c.latitude !== undefined && c.longitude !== undefined ? `${c.latitude.toFixed(3)}, ${c.longitude.toFixed(3)}` : undefined;
  const map =
    coords && c.latitude !== undefined && c.longitude !== undefined
      ? `<div><dt>${esc(lt("Coordinates"))}</dt><dd><a href="https://www.openstreetmap.org/?mlat=${c.latitude}&mlon=${c.longitude}#map=9/${c.latitude}/${c.longitude}" target="_blank" rel="noopener noreferrer">${esc(coords)}</a></dd></div>`
      : "";

  const location = rows([
    [lt("City"), place || undefined],
    [lt("Country"), country ? `${country}${c.countryCode ? ` (${c.countryCode})` : ""}` : undefined],
    [lt("Postal code"), c.postal],
    [lt("Timezone"), c.timezone],
  ]).replace("</dl>", `${map}</dl>`);

  const network = rows([
    [lt("ISP"), c.org],
    [lt("ASN"), c.asn ? `AS${c.asn}` : undefined],
    [lt("IP version"), c.version ? `IPv${c.version}` : undefined],
    [lt("Network type"), c.org ? lt(classifyNetwork(c.org).label) : undefined],
    [lt("Hostname"), "…", "rdns"],
  ]);

  const connection = rows([
    [lt("Protocol"), c.protocol],
    [lt("Encryption"), c.tls],
    [lt("Edge location"), c.edge],
    [lt("Latency to edge"), c.rttMs !== undefined ? `${c.rttMs} ms` : undefined],
  ]);

  const where = [place, country].filter(Boolean).join(", ");
  const line = [where, c.org].filter(Boolean).join(" · ");

  const pin =
    c.latitude !== undefined && c.longitude !== undefined
      ? `<i class="pin" style="left:${clamp(((c.longitude + 180) / 360) * 100).toFixed(1)}%;top:${clamp(((MAP_TOP - c.latitude) / (MAP_TOP - MAP_BOTTOM)) * 100).toFixed(1)}%"></i>`
      : "";
  const ascii = MAP_ROWS_TEXT.map((r) => r.padEnd(MAP_COLS, " ")).join("\n");

  return `<section class="panel hero" data-ip="${esc(c.ip)}">
<div class="map" aria-hidden="true" data-nosnippet><pre class="ascii" id="ascii" data-map="${esc(ascii)}"></pre>${pin}</div>
<h1 class="pill">${esc(lt("What is my IP address?"))}</h1>
<p class="ip" id="ip">${esc(c.ip)}</p>
${line ? `<p class="where">${esc(line)}</p>` : ""}
<div class="actions">
<button class="btn pri" type="button" data-copy="${esc(c.ip)}">${esc(lt("Copy IP"))}</button>
<button class="btn" type="button" id="hide" aria-pressed="false">${esc(lt("Hide"))}</button>
</div>
<div class="alt" id="alt" aria-live="polite"><span>IPv4 <b id="v4">${c.ip.includes(":") ? "…" : esc(c.ip)}</b></span><span>IPv6 <b id="v6">${c.ip.includes(":") ? esc(c.ip) : "…"}</b></span></div>
</section>
<section class="sec" style="border-top:0;padding-top:40px">
<div class="grid3">
<div><h2 class="lbl" style="margin-top:0">${esc(lt("Location"))}</h2>${location}</div>
<div><h2 class="lbl" style="margin-top:0">${esc(lt("Network"))}</h2>${network}</div>
<div><h2 class="lbl" style="margin-top:0">${esc(lt("Connection"))}</h2>${connection}</div>
</div>
<p class="note">${esc(lt("Location is approximate. It comes from your IP address, not GPS, and often points to your ISP's nearest hub instead of your home."))}</p>
${loc === "en" ? `<p style="max-width:720px;margin:22px 0 0">Your IP address is the public number that identifies your internet connection to the websites you visit. This free IP checker shows what your IP is, where it appears to be located, which provider assigned it and what kind of network it belongs to. To search any other IP address or domain, use the <a href="/lookup">IP lookup</a>.</p>` : ""}
<div class="cta"><h3>${esc(lt("Is your IP flagged?"))}</h3><p>${esc(lt("Check whether it looks like a VPN, proxy, Tor exit or data center, and whether it is on spam and abuse blocklists."))}</p><a class="btn pri" href="${lp("/reputation")}">${esc(lt("Run the reputation check"))}</a> <a class="btn" href="${lp("/webrtc")}">${esc(lt("Test for WebRTC leaks"))}</a></div>
</section>
<section class="sec"><h2>${esc(lt("Free network tools"))}</h2><p>${esc(lt("Everything you need to inspect, test and troubleshoot a connection, with no sign-up."))}</p>${toolCards(undefined, loc)}</section>
${faqSection(faq, undefined, loc)}
<section class="sec"><h2>${esc(lt("Learn about IP addresses"))}</h2><p>${esc(lt("Short, plain-English guides on how the internet identifies you and what you can do about it."))}</p>${articleCards(loc === "en" ? HOME_GUIDES : ARTICLES.slice(0, 6).map((a) => a.slug), false, loc)}${loc === "en" ? `<p style="margin:22px 0 0">Working in a terminal or a script? The <a href="/developers">free IP API</a> returns your address as plain text or JSON, with no key: <code class="mono">curl ipcomet.com</code>.</p>` : ""}</section>`;
}

export function homeJsonLd(origin: string, loc: Locale = "en"): unknown[] {
  const home = localTool(toolById("ip")!, loc);
  const faq = loc === "en" ? HOME_FAQ : (LOCALE_DATA[loc]?.home.faq ?? HOME_FAQ);
  const homePath = localizedPath(loc, "/");
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ipcomet",
      ...(origin ? { "@id": origin + homePath + "#website", url: origin + homePath, publisher: { "@id": origin + "/#organization" } } : {}),
      description: home.description,
      inLanguage: LOCALE_META[loc].htmlLang,
    },
    organizationJsonLd(origin),
    appJsonLd(origin, loc === "en" ? "ipcomet: What is my IP address" : home.title, home.description, "/", loc),
    faqJsonLd(faq),
  ];
}

/* ------------------------------------------------------------------ */
/* Tool pages                                                          */
/* ------------------------------------------------------------------ */

const ui = (html: string) => `<div class="tool-ui">${html}</div>`;

function lookupUi(lt: Tr): string {
  return ui(`<form class="row" id="f" autocomplete="off"><input id="q" name="q" placeholder="${esc(lt("8.8.8.8 or example.com"))}" aria-label="${esc(lt("IP address or domain"))}" inputmode="url" autocapitalize="off" spellcheck="false" required><button class="btn pri" type="submit">${esc(lt("Look up"))}</button></form>
<div class="chips"><button class="chip" type="button" data-fill="1.1.1.1">1.1.1.1</button><button class="chip" type="button" data-fill="8.8.8.8">8.8.8.8</button><button class="chip" type="button" data-fill="github.com">github.com</button><button class="chip" type="button" id="mine">${esc(lt("My IP"))}</button></div>
<div id="out" aria-live="polite"></div>`);
}

function dnsUi(lt: Tr): string {
  return ui(`<form class="row" id="f" autocomplete="off"><input id="q" name="q" placeholder="example.com" aria-label="${esc(lt("Domain or IP"))}" inputmode="url" autocapitalize="off" spellcheck="false" required>
<select id="type" aria-label="${esc(lt("Record type"))}"><option value="ALL">${esc(lt("All records"))}</option><option>A</option><option>AAAA</option><option>MX</option><option>TXT</option><option>NS</option><option>CNAME</option><option>SOA</option><option>CAA</option></select>
<select id="resolver" aria-label="${esc(lt("Resolver"))}"><option value="cloudflare">Cloudflare 1.1.1.1</option><option value="google">Google 8.8.8.8</option></select>
<button class="btn pri" type="submit">${esc(lt("Lookup"))}</button></form>
<div class="chips"><button class="chip" type="button" data-fill="google.com">google.com</button><button class="chip" type="button" data-fill="github.com">github.com</button><button class="chip" type="button" data-fill="cloudflare.com">cloudflare.com</button></div>
<div id="out" aria-live="polite"></div>`);
}

function pingUi(lt: Tr): string {
  return ui(`<div class="panel speedhero" style="margin-top:0">
<div class="big" id="live">–<small>ms</small></div>
<p class="eyebrow" id="phase">${esc(lt("Press start to measure"))}</p>
<div class="bar2"><i id="prog"></i></div>
<div class="actions"><button class="btn pri" id="go" type="button">${esc(lt("Start ping test"))}</button></div>
</div>
<div class="stats">
<div class="stat"><span>${esc(lt("Average"))}</span><b id="avg">–</b></div>
<div class="stat"><span>${esc(lt("Best"))}</span><b id="min">–</b></div>
<div class="stat"><span>${esc(lt("Worst"))}</span><b id="max">–</b></div>
<div class="stat"><span>${esc(lt("Jitter"))}</span><b id="jit">–</b></div>
<div class="stat"><span>${esc(lt("Packet loss"))}</span><b id="loss">–</b></div>
</div>
<div id="out" aria-live="polite"></div>
<p class="note">${lt("Measured from your device to the nearest Cloudflare data center{colo}. It shows the quality of your own connection, not the route to a particular game server.", { colo: '<span id="colo"></span>' })}</p>`);
}

function reverseDnsUi(lt: Tr): string {
  return ui(`<form class="row" id="f" autocomplete="off"><input id="q" name="q" placeholder="${esc(lt("Enter an IP address, e.g. 8.8.8.8"))}" aria-label="${esc(lt("IP address"))}" inputmode="text" autocapitalize="off" spellcheck="false" required><button class="btn pri" type="submit">${esc(lt("Look up hostname"))}</button></form>
<div class="chips"><button class="chip" type="button" data-fill="8.8.8.8">8.8.8.8</button><button class="chip" type="button" data-fill="1.1.1.1">1.1.1.1</button><button class="chip" type="button" data-fill="2606:4700:4700::1111">${esc(lt("IPv6 example"))}</button><button class="chip" type="button" id="mine">${esc(lt("My IP"))}</button></div>
<div id="out" aria-live="polite"></div>`);
}

function reputationUi(lt: Tr): string {
  return ui(`<form class="row" id="f" autocomplete="off"><input id="q" name="q" placeholder="${esc(lt("Leave empty to check your own IP"))}" aria-label="${esc(lt("IP address"))}" inputmode="text" autocapitalize="off" spellcheck="false"><button class="btn pri" type="submit">${esc(lt("Check IP"))}</button></form>
<div class="chips"><button class="chip" type="button" data-fill="185.220.101.1">${esc(lt("Tor exit example"))}</button><button class="chip" type="button" data-fill="1.1.1.1">1.1.1.1</button><button class="chip" type="button" id="mine">${esc(lt("My IP"))}</button></div>
<div id="out" aria-live="polite"></div>`);
}

function proxyUi(lt: Tr): string {
  return ui(`<form class="pform" id="f" autocomplete="off">
<div class="row"><input id="q" name="q" placeholder="${esc(lt("host:port or user:password@host:port"))}" aria-label="${esc(lt("Proxy address"))}" autocapitalize="off" spellcheck="false" required>
<select id="ptype" aria-label="${esc(lt("Proxy type"))}"><option value="auto">${esc(lt("Auto-detect"))}</option><option value="http">HTTP / HTTPS</option><option value="socks5">SOCKS5</option></select></div>
<div class="row"><input id="pu" name="pu" placeholder="${esc(lt("Username (optional)"))}" aria-label="${esc(lt("Proxy username"))}" autocapitalize="off" spellcheck="false" autocomplete="off">
<input id="pp" name="pp" type="password" placeholder="${esc(lt("Password (optional)"))}" aria-label="${esc(lt("Proxy password"))}" autocomplete="new-password"></div>
<div class="row"><input id="pt" name="pt" placeholder="${esc(lt("Test a website through it, e.g. https://example.com (optional)"))}" aria-label="${esc(lt("Website to test through the proxy"))}" inputmode="url" autocapitalize="off" spellcheck="false">
<button class="btn pri" id="go" type="submit">${esc(lt("Check proxy"))}</button></div>
</form>
<p class="note">${lt("Accepted formats: {formats}. Your proxy details are used for this one check and are never stored or logged.", {
    formats: '<span class="mono">host:port</span> · <span class="mono">user:pass@host:port</span> · <span class="mono">host:port:user:pass</span> · <span class="mono">socks5://user:pass@host:port</span>',
  })}</p>
<div id="out" aria-live="polite"></div>`);
}

function whoisUi(lt: Tr): string {
  return ui(`<form class="row" id="f" autocomplete="off"><input id="q" name="q" placeholder="${esc(lt("example.com or 8.8.8.8"))}" aria-label="${esc(lt("Domain or IP"))}" inputmode="url" autocapitalize="off" spellcheck="false" required><button class="btn pri" type="submit">${esc(lt("Search"))}</button></form>
<div class="chips"><button class="chip" type="button" data-fill="github.com">github.com</button><button class="chip" type="button" data-fill="1.1.1.1">1.1.1.1</button></div>
<div id="out" aria-live="polite"></div>`);
}

function headersUi(lt: Tr, headers: Headers): string {
  const interesting = (k: string) => k.startsWith("cf-") || k.startsWith("x-forwarded") || k === "x-real-ip";
  const list = [...headers.entries()].sort(([a], [b]) => a.localeCompare(b));
  const table = list
    .map(([k, v]) => `<tr><th class="mono">${esc(k)}</th><td class="mono">${esc(v)}${interesting(k) ? ` <span class="badge warn">${esc(lt("added by proxy"))}</span>` : ""}</td></tr>`)
    .join("");
  return ui(`<div class="tw"><table class="stack"><tbody>${table}</tbody></table></div>
<p class="note">${esc(lt("Headers marked “added by proxy” come from the network in between, not from your browser. Websites can read all of the others."))}</p>`);
}

function browserUi(lt: Tr): string {
  return ui(`<div id="out"><p class="note">${esc(lt("Loading…"))}</p></div>`);
}

function portUi(lt: Tr, ip: string): string {
  const common: Array<[number, string]> = [
    [22, "SSH"], [80, "HTTP"], [443, "HTTPS"], [3389, "RDP"], [8080, lt("HTTP alt")], [25565, "Minecraft"], [32400, "Plex"], [51820, "WireGuard"],
  ];
  const chips = common.map(([p, n]) => `<button class="chip" type="button" data-port="${p}">${p} · ${esc(n)}</button>`).join("");
  return ui(`<form class="row" id="f" autocomplete="off"><input id="port" name="port" type="number" min="1" max="65535" placeholder="${esc(lt("Port, e.g. 443"))}" aria-label="${esc(lt("Port number"))}" required><button class="btn pri" type="submit">${esc(lt("Check port"))}</button></form>
<div class="chips">${chips}</div>
<div class="note" data-ip="${esc(ip)}">${lt("Checking {ip} from Cloudflare's network. You can only test your own IP, and a service must be running and allowed through your firewall and router for a port to show as open.", { ip: `<b class="mono">${esc(ip)}</b>` })}</div>
<div id="out" aria-live="polite"></div>`);
}

function speedUi(lt: Tr, h1: string): string {
  const step = (id: string, label: string) => `<li id="st-${id}"><i></i>${esc(lt(label))}</li>`;
  const stat = (id: string, label: string, hint: string) =>
    `<div class="stat"><span>${esc(lt(label))}</span><b id="${id}">–</b><em>${esc(lt(hint))}</em></div>`;
  const fit = (id: string, label: string) => `<li id="fit-${id}"><span>${esc(lt(label))}</span><b>–</b></li>`;
  return ui(`<div class="panel speedlab">
<div class="sl-top"><div><h1 class="sl-h1">${esc(h1)}</h1><p class="srv" id="srv"></p></div><ol class="rail" aria-label="${esc(lt("Test steps"))}">${step("lat", "Latency")}${step("down", "Download")}${step("up", "Upload")}</ol></div>
<div class="sl-read"><div class="big" id="live">0<small>Mbps</small></div><p class="eyebrow" id="phase" aria-live="polite">${esc(lt("Ready when you are"))}</p></div>
<div class="chart" id="chart"><svg class="trace" id="trace" role="img" tabindex="0" aria-label="${esc(lt("Speed over time. Run the test to draw it."))}"></svg><div class="tip" id="tip" hidden></div></div>
<div class="sl-key" aria-hidden="true"><span class="k-d">${esc(lt("Download"))}</span><span class="k-u">${esc(lt("Upload"))}</span><span id="peak"></span></div>
<div class="bar2"><i id="prog"></i></div>
<div class="actions"><button class="btn pri" id="go" type="button">${esc(lt("Start test"))}</button></div>
</div>
<div class="stats sl-stats">
${stat("down", "Download", "Steady speed, Mbps")}
${stat("up", "Upload", "Steady speed, Mbps")}
${stat("lat", "Idle latency", "Round trip, nothing else running")}
${stat("jit", "Jitter", "How much the delay varies")}
${stat("ldown", "Latency while downloading", "Loaded round trip")}
${stat("lup", "Latency while uploading", "Loaded round trip")}
</div>
<div class="cols sl-res">
<div class="card grade" id="grade"><b id="gr">–</b><div><h3>${esc(lt("Bufferbloat grade"))}</h3><p id="grtext">${esc(lt("How much your latency rises when the line is busy. It decides whether calls and games stay smooth while someone else is downloading."))}</p></div></div>
<div class="card"><h3>${esc(lt("What this connection can handle"))}</h3><ul class="fit">${fit("4k", "4K streaming")}${fit("call", "HD video calls")}${fit("game", "Online gaming")}${fit("big", "Uploading large files")}</ul></div>
</div>
<p class="note" id="used"></p>
<p class="note">${lt("Results reflect the path to the nearest Cloudflare data center{colo}, which is typically faster than a trip to a far-away server. Each direction runs until the speed settles (5 to 15 seconds), so on a fast line the test can use several hundred megabytes.", { colo: '<span id="colo"></span>' })}</p>`);
}

function webrtcUi(lt: Tr): string {
  return ui(`<div class="actions" style="justify-content:flex-start;margin:0"><button class="btn pri" id="go" type="button">${esc(lt("Run test"))}</button></div>
<div id="out" aria-live="polite"></div>`);
}

function subnetUi(lt: Tr): string {
  return ui(`<form class="row" id="f" autocomplete="off"><input id="q" name="q" value="192.168.1.0/24" placeholder="192.168.1.0/24 or 2001:db8::/32" aria-label="${esc(lt("CIDR block"))}" autocapitalize="off" spellcheck="false" required><button class="btn pri" type="submit">${esc(lt("Calculate"))}</button></form>
<div class="chips"><button class="chip" type="button" data-fill="10.0.0.0/8">10.0.0.0/8</button><button class="chip" type="button" data-fill="172.16.0.0/12">172.16.0.0/12</button><button class="chip" type="button" data-fill="192.168.0.0/16">192.168.0.0/16</button><button class="chip" type="button" data-fill="2001:db8::/32">2001:db8::/32</button></div>
<div id="out" aria-live="polite"></div>`);
}

function macUi(lt: Tr): string {
  return ui(`<form id="f" autocomplete="off"><textarea id="q" name="q" rows="3" placeholder="${esc(lt("Paste one MAC address, an OUI, or a whole list (arp -a output works too)"))}" aria-label="${esc(lt("MAC addresses"))}" autocapitalize="off" spellcheck="false" required></textarea>
<div class="row"><button class="btn pri" type="submit">${esc(lt("Look up"))}</button></div></form>
<div class="chips"><button class="chip" type="button" data-fill="B8:27:EB:12:34:56">B8:27:EB:12:34:56</button><button class="chip" type="button" data-fill="00:00:0C:9F:F0:01">00:00:0C:9F:F0:01</button><button class="chip" type="button" data-fill="F0-18-98">F0-18-98</button><button class="chip" type="button" data-fill="DA:A1:19:6B:2C:7E">DA:A1:19:6B:2C:7E</button></div>
<div id="out" aria-live="polite"></div>`);
}

function mailUi(lt: Tr, selector = false): string {
  return ui(`<form class="row" id="f" autocomplete="off"><input id="q" name="q" placeholder="example.com" aria-label="${esc(lt("Domain or email address"))}" inputmode="url" autocapitalize="off" spellcheck="false" required>${selector ? `<input id="sel" name="selector" placeholder="${esc(lt("Selector (optional)"))}" aria-label="${esc(lt("DKIM selector"))}" autocapitalize="off" spellcheck="false" style="flex:0 1 200px">` : ""}<button class="btn pri" type="submit">${esc(lt("Check"))}</button></form>
<div class="chips"><button class="chip" type="button" data-fill="gmail.com">gmail.com</button><button class="chip" type="button" data-fill="github.com">github.com</button><button class="chip" type="button" data-fill="paypal.com">paypal.com</button></div>
<div id="out" aria-live="polite"></div>`);
}

function propagationUi(lt: Tr): string {
  return ui(`<form class="row" id="f" autocomplete="off"><input id="q" name="q" placeholder="example.com" aria-label="${esc(lt("Domain"))}" inputmode="url" autocapitalize="off" spellcheck="false" required>
<select id="type" aria-label="${esc(lt("Record type"))}"><option>A</option><option>AAAA</option><option>CNAME</option><option>MX</option><option>NS</option><option>TXT</option><option>CAA</option><option>SOA</option></select>
<input id="expect" name="expect" placeholder="${esc(lt("Expected value (optional)"))}" aria-label="${esc(lt("Expected value"))}" autocapitalize="off" spellcheck="false" style="flex:1 1 200px">
<button class="btn pri" type="submit">${esc(lt("Check"))}</button></form>
<div class="chips"><button class="chip" type="button" data-fill="github.com">github.com</button><button class="chip" type="button" data-fill="wikipedia.org">wikipedia.org</button><button class="chip" type="button" data-fill="cloudflare.com">cloudflare.com</button></div>
<div id="out" aria-live="polite"></div>`);
}

function downloadUi(lt: Tr, lp: (path: string) => string): string {
  const opt = (v: string, sel = false) => `<option${sel ? " selected" : ""}>${v}</option>`;
  return ui(`<form class="row" id="f" autocomplete="off">
<input id="size" type="number" min="0" step="any" value="10" inputmode="decimal" aria-label="${esc(lt("File size"))}" style="flex:1 1 120px">
<select id="sunit" aria-label="${esc(lt("Size unit"))}">${opt("MB")}${opt("GB", true)}${opt("TB")}${opt("MiB")}${opt("GiB")}</select>
<input id="speed" type="number" min="0" step="any" value="100" inputmode="decimal" aria-label="${esc(lt("Internet speed"))}" style="flex:1 1 120px">
<select id="vunit" aria-label="${esc(lt("Speed unit"))}">${opt("Mbps", true)}${opt("Gbps")}${opt("MB/s")}</select></form>
<div class="chips"><button class="chip" type="button" data-size="1">1 GB</button><button class="chip" type="button" data-size="4">4 GB</button><button class="chip" type="button" data-size="50">50 GB</button><button class="chip" type="button" data-size="100">100 GB</button><a class="chip" href="${lp("/speed-test")}">${esc(lt("Measure my speed"))}</a></div>
<div id="out" aria-live="polite"></div>`);
}

const LEADS: Record<string, string> = {
  ping: "Measure your latency, jitter and packet loss to the nearest Cloudflare server in about ten seconds.",
  "reverse-dns": "Find the hostname (PTR record) that belongs to any IPv4 or IPv6 address.",
  reputation: "See whether an IP address looks like a VPN, proxy, Tor exit or data center, and whether it appears on spam and abuse blocklists.",
  "proxy-checker": "Test any HTTP, HTTPS or SOCKS5 proxy. See whether it works, where it exits, how fast it is and whether its IP changes.",
  lookup: "Find the location, ISP and network of any IP address or domain.",
  dns: "Query live DNS records for any domain, or reverse-resolve an IP address.",
  whois: "Registrar, dates and nameservers for a domain, or network ownership for an IP address.",
  headers: "These are the request headers your browser sent to this page.",
  browser: "What every website can learn about your browser and device without asking.",
  port: "Check whether a TCP port is reachable on your public IP. Handy for port forwarding and game servers.",
  speed: "Measure download, upload, idle latency and latency under load (bufferbloat) between your device and Cloudflare's nearest edge.",
  webrtc: "Browsers can reveal your real IP through WebRTC, even behind a VPN. Run the check to see what is exposed.",
  subnet: "Work out network ranges, masks and usable hosts for any IPv4 or IPv6 CIDR block.",
  mac: "Find the manufacturer behind any MAC address or OUI, check a whole list at once, and see whether an address is a randomized private one.",
  dmarc: "Check any domain's DMARC record against the current standard, RFC 9989, with SPF, DKIM, MX and MTA-STS in the same report.",
  spf: "Validate a domain's SPF record, count its DNS lookups against the limit of 10, and follow every include.",
  dkim: "Find a domain's DKIM keys by scanning common selectors, or test your own selector, and see whether each key is active.",
  mx: "See which mail servers receive email for a domain, in priority order, and which provider runs them.",
  propagation: "See what 12 public DNS resolvers return for a record right now, and how long each will keep its cached answer.",
  download: "Work out how long a download takes at your internet speed, or the speed you need to finish it in time.",
};

const H1: Record<string, string> = {
  ping: "Ping Test",
  "reverse-dns": "Reverse DNS Lookup",
  reputation: "VPN Checker and IP Reputation Test",
  "proxy-checker": "Proxy Checker",
  lookup: "IP Address Lookup",
  dns: "DNS Lookup",
  whois: "WHOIS Lookup",
  headers: "HTTP Headers Viewer",
  browser: "What Is My User Agent?",
  port: "Open Port Checker",
  speed: "Internet Speed Test",
  webrtc: "WebRTC Leak Test",
  subnet: "Subnet Calculator",
  mac: "MAC Address Lookup",
  dmarc: "DMARC Checker",
  spf: "SPF Record Checker",
  dkim: "DKIM Record Checker",
  mx: "MX Lookup",
  propagation: "DNS Propagation Checker",
  download: "Download Time Calculator",
};

/** Topically related tools, so "More tools" links to what a visitor is likely to need next. */
const RELATED_TOOLS: Record<string, string[]> = {
  lookup: ["reverse-dns", "reputation", "whois"],
  dns: ["reverse-dns", "whois", "lookup"],
  "reverse-dns": ["dns", "lookup", "reputation"],
  reputation: ["proxy-checker", "webrtc", "lookup"],
  "proxy-checker": ["reputation", "ping", "lookup"],
  whois: ["dns", "lookup", "reverse-dns"],
  headers: ["browser", "lookup", "webrtc"],
  browser: ["headers", "webrtc", "lookup"],
  port: ["ping", "speed", "lookup"],
  speed: ["ping", "proxy-checker", "port"],
  ping: ["speed", "port", "dns"],
  webrtc: ["reputation", "proxy-checker", "browser"],
  subnet: ["lookup", "reputation", "port"],
  mac: ["subnet", "lookup", "browser"],
  dmarc: ["spf", "dkim", "mx"],
  spf: ["dmarc", "dkim", "mx"],
  dkim: ["dmarc", "spf", "mx"],
  mx: ["dmarc", "spf", "dns"],
  propagation: ["dns", "whois", "mx"],
  download: ["speed", "ping", "subnet"],
};

export interface ToolPageContext {
  headers?: Headers;
  ip?: string;
}

/**
 * The text of a tool page in a language. English uses the long-form content in src/content/faqs.ts; translated
 * pages carry a short, translated version (heading, intro, About paragraph, FAQ) and omit the long English-only
 * explainers instead of shipping them untranslated.
 */
export function toolCopy(id: string, loc: Locale) {
  const tool = toolById(id);
  if (!tool) throw new Error(`Unknown tool: ${id}`);
  const s = loc === "en" ? undefined : LOCALE_DATA[loc]?.tools[id];
  return {
    meta: localTool(tool, loc),
    h1: s?.h1 ?? H1[id] ?? tool.name,
    lead: s?.lead ?? LEADS[id] ?? tool.desc,
    about: s?.about ?? TOOL_ABOUT[id] ?? "",
    faq: (s?.faq ?? TOOL_FAQ[id] ?? []) as Faq[],
    more: s ? "" : (TOOL_MORE[id] ?? ""),
  };
}

export function toolPage(id: string, origin: string, ctx: ToolPageContext = {}, loc: Locale = "en"): { body: string; jsonLd: unknown[] } {
  const tool = toolById(id);
  if (!tool) throw new Error(`Unknown tool: ${id}`);
  const lt = translator(loc);
  const lp = (path: string) => localizedPath(loc, path);
  const copy = toolCopy(id, loc);

  const uis: Record<string, () => string> = {
    lookup: () => lookupUi(lt),
    dns: () => dnsUi(lt),
    reputation: () => reputationUi(lt),
    "proxy-checker": () => proxyUi(lt),
    ping: () => pingUi(lt),
    "reverse-dns": () => reverseDnsUi(lt),
    whois: () => whoisUi(lt),
    headers: () => headersUi(lt, ctx.headers ?? new Headers()),
    browser: () => browserUi(lt),
    port: () => portUi(lt, ctx.ip ?? ""),
    speed: () => speedUi(lt, copy.h1),
    webrtc: () => webrtcUi(lt),
    subnet: () => subnetUi(lt),
    mac: () => macUi(lt),
    dmarc: () => mailUi(lt),
    spf: () => mailUi(lt),
    dkim: () => mailUi(lt, true),
    mx: () => mailUi(lt),
    propagation: () => propagationUi(lt),
    download: () => downloadUi(lt, lp),
  };

  // Guides whose main tool is this page come first, then the others that use it.
  const guides = ARTICLES.filter((a) => a.tools.includes(id))
    .sort((a, b) => Number(b.tools[0] === id) - Number(a.tools[0] === id))
    .slice(0, 3);
  const others = toolCards(RELATED_TOOLS[id] ?? ["lookup", "dns", "reverse-dns"].filter((x) => x !== id), loc);

  // The speed test leads with the test itself; its heading sits inside the panel.
  const body = `${id === "speed" ? "" : toolHeader(copy.h1, copy.lead, copy.meta.name, loc)}
${uis[id]?.() ?? ""}
<section class="sec"><div class="prose"><h2>${esc(lt("About {name}", { name: copy.meta.name }))}</h2><p>${esc(copy.about)}</p>${copy.more}</div></section>
${faqSection(copy.faq, undefined, loc)}
${guides.length ? `<section class="sec"><h2>${esc(lt("Related guides"))}</h2>${articleCards(guides.map((g) => g.slug), false, loc)}</section>` : ""}
<section class="sec"><h2>${esc(lt("More tools"))}</h2>${others}</section>`;

  return {
    body,
    jsonLd: [
      appJsonLd(origin, copy.h1, copy.meta.description, tool.path, loc),
      faqJsonLd(copy.faq),
      breadcrumbJsonLd(origin, [[lt("Home"), lp("/")], [copy.meta.name, lp(tool.path)]]),
    ],
  };
}

export function notFoundBody(loc: Locale = "en"): string {
  const lt = translator(loc);
  return `${toolHeader(lt("Page not found"), lt("That page doesn't exist. Try one of the tools below."), lt("Not found"), loc)}<section class="sec" style="border-top:0">${toolCards(undefined, loc)}</section>`;
}
