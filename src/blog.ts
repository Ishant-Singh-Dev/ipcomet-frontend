import { ARTICLES, articleBySlug } from "./content/articles";
import { BODIES } from "./content/bodies";
import {
  articleCards,
  AUTHOR,
  AUTHOR_ID,
  BRAND,
  breadcrumbJsonLd,
  LOGO_PATH,
  OG_IMAGE,
  organizationJsonLd,
  personJsonLd,
  renderPage,
  toolCards,
  CONTACT_EMAIL,
  type PageOptions,
} from "./layout";
import { LOCALE_DATA, LOCALE_META, localizedPath, t, type Locale } from "./i18n";
import type { DocPage } from "./i18n/types";
import { esc } from "./html";

type Rendered = Omit<PageOptions, "origin">;

/** A translated About or Privacy page, built from the language's own text. */
function docPage(
  id: "about" | "privacy",
  path: string,
  d: DocPage & { sources?: Array<[string, string]> },
  origin: string,
  loc: Locale,
): Rendered {
  const lt = (text: string) => t(loc, text);
  const table = d.sources
    ? `<div class="tw"><table class="stack"><tbody>${d.sources.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table></div>`
    : "";
  const crumb = id === "about" ? lt("About") : lt("Privacy");
  return {
    id,
    title: d.title,
    description: d.description,
    path,
    locale: loc,
    body: `<section class="phead"><p class="crumbs"><a href="${localizedPath(loc, "/")}">${esc(lt("Home"))}</a> / ${esc(crumb)}</p><h1>${esc(d.h1)}</h1><p class="lead">${esc(d.lead)}</p>${id === "about" ? `<p class="meta">${esc(t(loc, "Built and maintained by {name}.", { name: AUTHOR }))}</p>` : ""}</section>
<div class="prose" style="padding-bottom:30px">${d.body.replace("{{sources}}", table)}</div>`,
    jsonLd: [
      id === "about"
        ? {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: d.h1,
            description: d.description,
            inLanguage: LOCALE_META[loc].htmlLang,
            ...(origin ? { url: origin + localizedPath(loc, path), about: { "@id": origin + "/#organization" } } : {}),
          }
        : null,
      id === "about" ? organizationJsonLd(origin) : null,
      id === "about" ? personJsonLd(origin) : null,
      breadcrumbJsonLd(origin, [[lt("Home"), localizedPath(loc, "/")], [crumb, localizedPath(loc, path)]]),
    ],
  };
}

const fmt = (iso: string) => new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

/** Topic groups for the Learn hub. An article missing from every group still appears, under "More guides". */
const TOPICS: Array<{ title: string; blurb: string; slugs: string[] }> = [
  {
    title: "IP address basics",
    blurb: "What IP addresses are, how the kinds differ and why yours changes.",
    slugs: ["what-is-an-ip-address", "what-is-an-ip-checker", "why-is-my-ip-location-wrong", "ipv4-vs-ipv6", "public-vs-private-ip-address", "static-vs-dynamic-ip-address", "why-does-my-ip-address-change", "what-is-my-isp", "what-is-a-mac-address"],
  },
  {
    title: "Find and change your IP address",
    blurb: "Step-by-step guides for every device, plus your router and printer.",
    slugs: ["how-to-find-your-ip-address", "get-public-ip-address-command-line", "find-router-ip-address", "find-printer-ip-address", "what-is-my-default-gateway", "how-to-change-your-ip-address", "change-ip-address-windows-11"],
  },
  {
    title: "Privacy, VPNs and tracking",
    blurb: "What your IP address reveals, how to hide it and how to check that it worked.",
    slugs: ["how-to-hide-your-ip-address", "can-someone-track-you-by-ip-address", "is-my-vpn-working", "webrtc-leak-explained", "is-my-ip-address-blacklisted"],
  },
  {
    title: "Proxies",
    blurb: "How to test a proxy, choose the right type and fix the common errors.",
    slugs: ["how-to-check-if-a-proxy-is-working", "how-to-test-proxy-speed", "http-vs-socks5-proxy", "residential-vs-datacenter-proxies", "rotating-vs-sticky-proxies", "proxy-anonymity-levels", "proxy-error-407-403-502"],
  },
  {
    title: "DNS",
    blurb: "How names turn into addresses, and how to fix it when they do not.",
    slugs: ["what-is-a-dns-server", "dns-records-explained", "how-to-flush-dns-cache", "fix-slow-dns-lookup"],
  },
  {
    title: "Ports, subnets and speed",
    blurb: "Port forwarding, CIDR ranges, and getting a lower ping.",
    slugs: ["what-is-port-forwarding", "how-to-check-if-a-port-is-open", "cidr-subnet-mask-explained", "what-is-ping", "how-to-lower-ping"],
  },
];

const LEARN_TITLE = "IP Address and Networking Guides";
const LEARN_DESCRIPTION = "Plain-English guides on IP addresses, IPv4 vs IPv6, DNS records, VPNs and proxies, WebRTC leaks, port forwarding and subnetting.";

export function learnIndex(origin: string): Rendered {
  const placed = new Set(TOPICS.flatMap((t) => t.slugs));
  const rest = ARTICLES.filter((a) => !placed.has(a.slug)).map((a) => a.slug);
  const groups = rest.length ? [...TOPICS, { title: "More guides", blurb: "", slugs: rest }] : TOPICS;
  const sections = groups
    .map(
      (g, i) =>
        `<section class="sec"${i === 0 ? ' style="border-top:0;padding-top:24px"' : ""}><h2>${esc(g.title)}</h2>${g.blurb ? `<p>${esc(g.blurb)}</p>` : ""}${articleCards(g.slugs, true)}</section>`,
    )
    .join("\n");

  return {
    id: "learn",
    title: LEARN_TITLE,
    description: LEARN_DESCRIPTION,
    path: "/learn",
    body: `<section class="phead"><p class="crumbs"><a href="/">Home</a> / Learn</p><h1>Learn how the internet sees you</h1><p class="lead">Short, accurate guides on IP addresses, DNS, privacy and home networking. Each one links to a free tool so you can try it on your own connection.</p></section>
${sections}
<section class="sec"><h2>Free tools</h2>${toolCards()}</section>`,
    jsonLd: [
      breadcrumbJsonLd(origin, [["Home", "/"], ["Learn", "/learn"]]),
      origin
        ? {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: LEARN_TITLE,
            description: LEARN_DESCRIPTION,
            url: origin + "/learn",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: ARTICLES.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: `${origin}/learn/${a.slug}`, name: a.title })),
            },
          }
        : null,
    ],
  };
}

export function articlePage(slug: string, origin: string): Rendered {
  const a = articleBySlug(slug);
  const body = BODIES[slug];
  if (!a || !body) throw new Error(`Unknown article: ${slug}`);
  const path = `/learn/${slug}`;

  const tools = toolCards(a.tools);
  const page = `<article>
<section class="phead"><p class="crumbs"><a href="/">Home</a> / <a href="/learn">Learn</a></p><h1>${esc(a.title)}</h1>
<p class="meta">Published by <a href="/about">${esc(AUTHOR)}</a> · Updated ${fmt(a.published)} · ${a.readMin} min read</p></section>
<div class="prose">${body}
<div class="cta"><h3>Try it yourself</h3><p>See the real numbers for your own connection with our free tools.</p></div></div>
<div style="margin-top:-20px;max-width:720px">${tools}</div>
</article>
<section class="sec"><h2>Keep reading</h2>${articleCards(a.related)}</section>`;

  return {
    id: "learn",
    title: a.title,
    description: a.description,
    path,
    ogType: "article",
    body: page,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: a.title,
        description: a.description,
        datePublished: a.published,
        dateModified: a.published,
        author: { "@type": "Person", name: AUTHOR, ...(origin ? { "@id": origin + AUTHOR_ID, url: origin + "/about" } : {}) },
        publisher: {
          "@type": "Organization",
          name: BRAND,
          ...(origin ? { url: origin + "/", logo: { "@type": "ImageObject", url: origin + LOGO_PATH, width: 512, height: 512 } } : {}),
        },
        inLanguage: "en",
        ...(origin ? { image: [origin + OG_IMAGE.path], mainEntityOfPage: origin + path } : {}),
      },
      breadcrumbJsonLd(origin, [["Home", "/"], ["Learn", "/learn"], [a.title, path]]),
    ],
  };
}

export function privacyPage(origin: string, loc: Locale = "en"): Rendered {
  const local = loc === "en" ? undefined : LOCALE_DATA[loc]?.privacy;
  if (local) return docPage("privacy", "/privacy", local, origin, loc);
  return {
    id: "privacy",
    title: "Privacy Policy",
    description: "ipcomet does not store your IP address or show ads, and uses Google Analytics cookies only if you accept. Here is exactly what happens to your data.",
    path: "/privacy",
    body: `<section class="phead"><p class="crumbs"><a href="/">Home</a> / Privacy</p><h1>Privacy</h1><p class="lead">The short version: we show you your own information and forget it.</p></section>
<div class="prose" style="padding-bottom:30px">
<h2>What we do with your IP address</h2>
<p>Your IP address is read from the incoming request so it can be shown back to you. Our code does not write it to a database, a log or any storage, and it is never sold or shared for advertising.</p>
<h2>Cookies and analytics</h2>
<p>By default we set no cookies and store nothing in your browser except, once you answer the banner, a note of your choice. If you click <strong>Accept</strong>, we load Google Analytics (from Google LLC) to count visits. It sets cookies, called <code>_ga</code> and <code>_ga_</code> followed by an identifier, to tell one visit from another, and it sends Google the page you viewed, your browser and device type, your approximate location and how you arrived. We cut everything after the question mark off the page address first, so addresses you look up are not sent, and we turn off Google signals and ad personalization. Google Analytics 4 does not store IP addresses, and the data is kept for 14 months.</p>
<p>If you click <strong>Decline</strong>, or your browser sends a Global Privacy Control signal, Google Analytics is never loaded and nothing is sent to Google. You can change your choice at any time with the &ldquo;Analytics choices&rdquo; link at the bottom of every page. We never use advertising scripts.</p>
<h2>Hosting</h2>
<p>This site runs on Cloudflare Workers. Cloudflare processes every request as our hosting provider and handles it under its own privacy policy. We also use Cloudflare's rate limiting to stop abuse of the heavier tools, which uses your connection's address only to count recent requests.</p>
<h2>Third-party services</h2>
<ul>
<li><strong>ipify.</strong> To show your IPv4 and IPv6 addresses, your browser asks api4.ipify.org and api6.ipify.org. Those services see your address, as any website you visit does.</li>
<li><strong>ipwho.is, ipapi.is and geojs.io.</strong> When you look up an IP address other than your own, our server sends that address to ipwho.is to get location data, and falls back to ipapi.is and then geojs.io if it is unavailable. Results are cached for a day.</li>
<li><strong>Cloudflare DNS and Google DNS.</strong> Domain names you query in the DNS and lookup tools are sent to the resolver you choose.</li>
<li><strong>RDAP.</strong> Domains and IP addresses you enter in the WHOIS tool are sent to rdap.org, a public redirector, which forwards the query to the registry that holds the record.</li>
<li><strong>Blocklists and the Tor exit list.</strong> The IP reputation tool checks the address you give it (or your own, if you leave it empty) against five public DNS blocklists: SpamCop, DroneBL, Passive Spam Block List, s5h.net and UCEPROTECT. It also downloads the Tor Project's public list of exit nodes.</li>
<li><strong>STUN.</strong> The WebRTC test asks stun.cloudflare.com for your public address from your browser, the same way a video-call site would.</li>
<li><strong>Cloudflare speed servers.</strong> The speed and ping tests send and receive their test data directly between your browser and speed.cloudflare.com, Cloudflare's own speed-test servers. They see your IP address, like any website you visit, and the requests carry no cookies. If they cannot be reached, the tests fall back to our own server.</li>
<li><strong>Google Analytics (only if you accept).</strong> After you click Accept in the banner, your browser loads Google Analytics from googletagmanager.com and sends visit data to google-analytics.com, as described under Cookies and analytics above. Google may process it on servers outside your country. If you decline, none of this happens.</li>
</ul>
<h2>Proxy checker</h2>
<p>When you test a proxy, the address you enter and any username and password are sent over HTTPS to our server, used for that one check and then discarded. They are not stored or written to logs. Our server connects to your proxy from Cloudflare's network and makes requests through it to Cloudflare's test endpoints (www.cloudflare.com and speed.cloudflare.com) and, if you enter one, to the website you chose. Your proxy provider therefore sees those requests coming from Cloudflare, not from you. The exit IP address the proxy reveals is then looked up with the same services described above.</p>
<h2>Port checker</h2>
<p>The port checker only connects to the IP address you are visiting from. It cannot be pointed at anyone else's address.</p>
<h2>Questions about this policy</h2>
<p>For any question about this policy, or about the data this site handles, write to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
<h2>Changes</h2>
<p>If this policy changes, the new version will appear here.</p>
</div>`,
    jsonLd: [breadcrumbJsonLd(origin, [["Home", "/"], ["Privacy", "/privacy"]])],
  };
}

/** Where each tool's data comes from. Keep in step with src/api.ts and /privacy. */
const SOURCES: Array<[string, string]> = [
  ["Your IP and connection", "Read from the request itself by Cloudflare's network: your IP address, an approximate location and network owner from Cloudflare's own geolocation data, the nearest Cloudflare data center, the HTTP and TLS versions and the round-trip time. Your IPv4 and IPv6 addresses are also confirmed by ipify."],
  ["IP Lookup", "Location and network data from ipwho.is, with ipapi.is and geojs.io as fallbacks, plus a live reverse DNS lookup for the hostname. Results are cached for up to a day."],
  ["DNS Lookup and Reverse DNS", "Live DNS over HTTPS from Cloudflare 1.1.1.1 or Google 8.8.8.8, whichever you pick. ipcomet does not cache the answers."],
  ["WHOIS", "RDAP, the modern replacement for WHOIS, through rdap.org, which forwards each query to the registry that holds the record."],
  ["IP Reputation", "The Tor Project's published exit list, the type of network that owns the address (home ISP, mobile carrier, hosting company or VPN provider), hints in its reverse DNS name, and five public blocklists: SpamCop, DroneBL, Passive Spam Block List, s5h.net and UCEPROTECT Level 1."],
  ["Proxy Checker", "Our server connects to the proxy you enter from Cloudflare's network and opens HTTPS tunnels through it to Cloudflare's own test endpoints (www.cloudflare.com and speed.cloudflare.com). It reads the exit IP, the response times and a 1 MB download, then looks the exit IP up the same way as IP Lookup and IP Reputation. If you add a website to test, it requests that one page through your proxy and reports only the status code."],
  ["Speed Test and Ping", "Latency is measured between your browser and the nearest Cloudflare data center. Download and upload run directly between your browser and Cloudflare's own speed-test servers (speed.cloudflare.com) over six parallel connections. The first 1.5 seconds are ignored and the slowest and fastest samples are dropped, so the figure reflects your steady speed. The results show the quality of your own connection, not the route to a particular game or streaming server."],
  ["Port Checker", "A TCP connection attempt from Cloudflare's network to the IP address you are visiting from. It cannot be aimed at anyone else's address."],
  ["WebRTC Leak Test", "Your browser asks stun.cloudflare.com for its public address, the way a video-call site would, and the page compares the answer with your connection."],
  ["HTTP Headers", "The headers your browser sent to this page, exactly as our server received them."],
  ["Browser Info and Subnet Calculator", "Worked out in your browser. Nothing you see or type on these pages is sent to us."],
];

export function aboutPage(origin: string, loc: Locale = "en"): Rendered {
  const local = loc === "en" ? undefined : LOCALE_DATA[loc]?.about;
  if (local) return docPage("about", "/about", local, origin, loc);
  const rows = SOURCES.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("");
  return {
    id: "about",
    title: "About ipcomet: How Our Tools Work",
    description: "How each ipcomet network tool works, where its data comes from and how accurate it is. Free, with no ads and analytics only if you accept.",
    path: "/about",
    body: `<section class="phead"><p class="crumbs"><a href="/">Home</a> / About</p><h1>About ipcomet</h1><p class="lead">ipcomet is a free set of network tools and plain-English guides. It runs on Cloudflare Workers, and the site's own code keeps no record of who uses it.</p><p class="meta">Built and maintained by ${esc(AUTHOR)}.</p></section>
<div class="prose" style="padding-bottom:30px">
<h2>Who runs it</h2>
<p>ipcomet is built and maintained by ${esc(AUTHOR)}, and every guide is published under that name. The guides and the translated pages are drafted with the help of AI tools; the translated pages say so on the page, and each guide shows the date it was last updated.</p>
<h2>What it is for</h2>
<p>Most people arrive wanting one answer: <a href="/">what is my IP address</a>. The other tools cover the next questions that come up, such as <a href="/lookup">where an IP address is</a>, <a href="/dns">what a domain's DNS records say</a>, <a href="/whois">who registered a domain</a>, <a href="/speed-test">how fast a connection is</a> and <a href="/port">whether a port is open</a>. The <a href="/learn">guides</a> explain the ideas behind them and each one links to the tool that lets you test it on your own connection.</p>
<h2>Where the data comes from</h2>
<p>Every result on the site comes from one of the sources below, and the pages say so where a result is only a best guess.</p>
<div class="tw"><table class="stack"><tbody>${rows}</tbody></table></div>
<h2>How accurate are the results?</h2>
<p>IP geolocation is approximate. It is built from network registrations and measurements, not GPS, so it is usually right about the country, often right about the region and only sometimes right about the city. It commonly points to your provider's nearest hub rather than your home, and mobile, satellite and VPN connections can appear hundreds of miles away.</p>
<p>VPN, proxy and Tor detection is heuristic. Tor is checked against the official exit list, but a VPN or proxy can only be inferred from who owns the address, its reverse DNS name and blocklist entries. Residential proxies look like ordinary home connections and cannot be detected this way. Treat the <a href="/reputation">reputation check</a> as an indicator, not proof.</p>
<h2>How the guides are written</h2>
<p>Each guide answers one question and shows the date it was last updated. Where a guide has steps for Windows, macOS, iOS, Android or Linux, those steps are meant to be followed on the device in front of you, and the matching tool is linked so you can confirm the result.</p>
<h2>How do I get in touch?</h2>
<p>Write to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>. Corrections to a guide, a translation that reads wrong, a tool giving an odd result or a question about how something works are all welcome, and corrections to the translated pages are especially useful. You can also open an issue on <a href="https://github.com/Ishant-Singh-Dev/ipcomet-frontend" rel="noopener">GitHub</a>.</p>
<h2>Privacy</h2>
<p>There are no ads, and our code does not store or log visitor IP addresses. The only cookies come from optional Google Analytics, which loads only if you accept it in the banner. The <a href="/privacy">privacy page</a> explains that choice and lists every third-party service a tool contacts.</p>
</div>`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About ipcomet",
        description: "How each ipcomet network tool works, where its data comes from and how accurate it is.",
        ...(origin ? { url: origin + "/about", about: { "@id": origin + "/#organization" } } : {}),
      },
      organizationJsonLd(origin),
      personJsonLd(origin),
      breadcrumbJsonLd(origin, [["Home", "/"], ["About", "/about"]]),
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Developers                                                          */
/* ------------------------------------------------------------------ */

const DEV_TITLE = "Free IP API: Get Your Public IP with curl";
const DEV_DESCRIPTION =
  "Free IP API, no key or sign-up. Get your public IP from the command line with curl, wget, PowerShell, Python or Node, and look up any IP as JSON.";
const DEV_UPDATED = "2026-10-14";

/** A copy-paste code block. The button needs no JavaScript of its own: static/app.js handles every [data-copy]. */
const snip = (code: string) =>
  `<div class="snip"><pre><code>${esc(code)}</code></pre><button class="btn sm" type="button" data-copy="${esc(code)}">Copy</button></div>`;

/**
 * Every public endpoint a script may rely on, with the limit that actually applies.
 * Keep in step with the routes in src/index.ts and the rate limits in wrangler.jsonc.
 * The speed-test and proxy endpoints are left out on purpose: they are shaped around the
 * browser tools on this site, not around scripts.
 */
const ENDPOINTS: Array<[string, string, string]> = [
  [
    "GET /",
    "Your public IP address as one line of plain text, for curl, wget, PowerShell and similar clients. Browsers get the web page instead.",
    "no fixed limit",
  ],
  ["GET /api/ip", "The same bare IP address as plain text, whatever asks for it. Use this one in scripts.", "no fixed limit"],
  [
    "GET /api/me",
    "Everything about the connection that made the request, as JSON: address, IP version, approximate location, timezone, ASN, network owner and connection details.",
    "no fixed limit",
  ],
  ["GET /api/lookup?q=", "Location, network owner, ASN and hostname of any IP address or domain.", "60 a minute"],
  ["GET /api/dns?name=", "DNS records for a domain (A, AAAA, CNAME, MX, NS, TXT, SOA, CAA), or the PTR record of an IP address.", "60 a minute"],
  ["GET /api/whois?q=", "Registration details for a domain or an IP range, from RDAP.", "60 a minute"],
  ["GET /api/reputation?q=", "Whether an address is a Tor exit, what kind of network owns it, and whether it is on public spam blocklists.", "60 a minute"],
  ["GET /api/port?port=", "Whether a TCP port is reachable on the address you are calling from. It cannot be aimed anywhere else.", "10 a minute"],
  ["GET /api/ping", "An empty 204 response for timing a round trip, with the Cloudflare data center that answered in the x-colo header.", "no fixed limit"],
];

export function developersPage(origin: string): Rendered {
  const rows = ENDPOINTS.map(
    ([ep, what, limit]) => `<tr><th>${esc(ep)}</th><td>${esc(what)} <strong>Limit:</strong> ${esc(limit)}.</td></tr>`,
  ).join("");

  const body = `<section class="phead"><p class="crumbs"><a href="/">Home</a> / Developers</p><h1>Free IP API: your public IP from the command line</h1>
<p class="lead">Every tool on this site is backed by a plain HTTP endpoint you can call from a script. No key, no sign-up and no ads, and ipcomet's own code never stores the addresses it sees.</p>
<p class="meta">Written by <a href="/about">${esc(AUTHOR)}</a> · Updated ${fmt(DEV_UPDATED)}</p></section>
<div class="prose" style="padding-bottom:30px">
<h2>The one-line answer</h2>
<p>Ask for the home page from a terminal and you get your public IP address, and nothing else:</p>
${snip("curl ipcomet.com")}
<p>The output is a single line, such as <code>203.0.113.7</code>. The home page returns plain text when it recognises a command-line client (curl, wget, PowerShell, Python, Node and the like) by its User-Agent, and the full web page to everyone else. In a script, prefer <code>/api/ip</code>: it always returns plain text, whatever asks for it.</p>

<h2>Endpoints</h2>
<p>Every endpoint is a GET request over HTTPS to <code>https://ipcomet.com</code>, needs no key and answers in UTF-8. Errors come back as JSON &mdash; <code>{"error": "…"}</code> &mdash; with a matching HTTP status.</p>
<div class="tw"><table class="stack"><tbody>${rows}</tbody></table></div>
<p>Only <code>/api/ip</code> and <code>/api/me</code> send <code>Access-Control-Allow-Origin: *</code>, so those two are the ones you can also call from a web page in the browser. The rest are meant for command-line and server-side use. Answers are sent with <code>Cache-Control: no-store</code>, except the lookup, reputation and WHOIS replies, which allow private caching for one to five minutes.</p>

<h2>Get your public IP address</h2>
<p>The same request in the tools you are most likely to reach for. Each one prints one line.</p>
<h3>curl</h3>
${snip("curl https://ipcomet.com/api/ip")}
<h3>wget</h3>
${snip("wget -qO- https://ipcomet.com/api/ip")}
<p>macOS ships curl but not wget; most Linux distributions ship both.</p>
<h3>PowerShell</h3>
${snip("(Invoke-RestMethod https://ipcomet.com/api/ip).Trim()")}
<p>Windows 10 and 11 also include curl, but write <code>curl.exe</code> in PowerShell, where <code>curl</code> can be an alias for <code>Invoke-WebRequest</code>.</p>
<h3>Python (requests)</h3>
${snip(`import requests

r = requests.get("https://ipcomet.com/api/ip", timeout=10)
print(r.text.strip())`)}
<p>With the standard library instead, set a User-Agent of your own. Python's default (<code>Python-urllib</code>) is turned away by the bot protection in front of this site, which answers 403.</p>
<h3>Node.js (fetch)</h3>
${snip(`const res = await fetch("https://ipcomet.com/api/ip");
const ip = (await res.text()).trim();
console.log(ip);`)}
<p>No dependency needed: <code>fetch</code> is built into Node.js 18 and later, and the endpoint allows cross-origin requests, so the same two lines work in a browser page.</p>
<h3>A shell one-liner for scripts</h3>
${snip(`MYIP=$(curl -fsS --max-time 10 https://ipcomet.com/api/ip)
echo "$MYIP"`)}
<p><code>-f</code> makes curl exit non-zero on an HTTP error instead of assigning the error body to the variable, <code>-sS</code> hides the progress meter but keeps real errors, and <code>--max-time</code> stops a stalled call from hanging a cron job. To act only when the address has changed, compare it with the last one you stored:</p>
${snip(`MYIP=$(curl -fsS --max-time 10 https://ipcomet.com/api/ip)
if [ "$MYIP" != "$(cat ~/.myip 2>/dev/null)" ]; then
  echo "Address changed to $MYIP"
  printf '%s' "$MYIP" > ~/.myip
fi`)}

<h2>Your address, location and network as JSON</h2>
${snip("curl https://ipcomet.com/api/me")}
<p>The reply describes the connection that made the request. With made-up values:</p>
${snip(`{
  "ip": "203.0.113.7",
  "version": 4,
  "city": "Mumbai",
  "region": "Maharashtra",
  "country": "India",
  "countryCode": "IN",
  "postal": "400001",
  "timezone": "Asia/Kolkata",
  "latitude": 19.076,
  "longitude": 72.8777,
  "asn": 64500,
  "org": "Example Broadband Ltd",
  "edge": "BOM",
  "protocol": "HTTP/2",
  "tls": "TLSv1.3 · AEAD-AES128-GCM-SHA256",
  "rttMs": 24
}`)}
<p>A field that cannot be determined for your connection is left out rather than set to <code>null</code>, so check that a key is there before using it. To pull out one value, pipe the reply through <code>jq</code>:</p>
${snip("curl -s https://ipcomet.com/api/me | jq -r .country")}
<p>The location is an estimate drawn from network records, not GPS, and it often points at your provider's nearest hub instead of your town. The <a href="/about">About page</a> explains where each field comes from and how far to trust it.</p>

<h2>Look up any address or domain</h2>
<p>These endpoints take a query string and return JSON. They call out to DNS resolvers, registries and blocklists, so they carry the tighter limits in the table above.</p>
<h3>IP or domain lookup</h3>
${snip(`curl "https://ipcomet.com/api/lookup?q=8.8.8.8"
curl "https://ipcomet.com/api/lookup?q=example.com"`)}
<p>A domain is resolved to its first A or AAAA record and that address is looked up, and the reply then carries <code>resolvedFrom</code>. It also carries <code>hostname</code> when the address has a reverse DNS record. As with <code>/api/me</code>, a field that cannot be determined is left out rather than set to <code>null</code>.</p>
<h3>DNS records</h3>
${snip(`curl "https://ipcomet.com/api/dns?name=example.com&type=MX"
curl "https://ipcomet.com/api/dns?name=example.com&resolver=google"
curl "https://ipcomet.com/api/dns?name=8.8.8.8"`)}
<p><code>type</code> accepts A, AAAA, CNAME, MX, NS, TXT, SOA and CAA; leave it out and all eight are fetched at once, grouped by type in a <code>records</code> object. <code>resolver</code> is <code>cloudflare</code> by default or <code>google</code>. Pass an IP address as <code>name</code> and you get its PTR record instead.</p>
<h3>WHOIS and registration</h3>
${snip(`curl "https://ipcomet.com/api/whois?q=example.com"
curl "https://ipcomet.com/api/whois?q=8.8.8.8"`)}
<p>Answers come from RDAP, the modern replacement for the WHOIS protocol. A domain reply carries the registrar, status, dates, nameservers and DNSSEC state; an IP reply carries the range, CIDR, owner and parent allocation.</p>
<h3>Reputation and blocklists</h3>
${snip(`curl "https://ipcomet.com/api/reputation?q=203.0.113.7"
curl https://ipcomet.com/api/reputation`)}
<p>Leave <code>q</code> off and your own address is checked. The reply says whether the address is a published Tor exit node, what kind of network owns it, and how it fares on five public blocklists. The network classification is a heuristic, not proof, and the blocklist checks cover IPv4 only.</p>
<h3>Open port check</h3>
${snip(`curl "https://ipcomet.com/api/port?port=443"`)}
<p>The check connects back to the address you are calling from, so it can only ever test your own connection, never someone else's host. <code>state</code> is <code>open</code>, <code>closed</code> or <code>filtered</code>. Port 25 cannot be tested from Cloudflare Workers and is refused.</p>
<h3>Round-trip timing</h3>
${snip(`curl -s -o /dev/null -w "%{time_total}s\\n" https://ipcomet.com/api/ping`)}
<p>An empty 204 reply, as cheap to answer as it gets. The <code>x-colo</code> response header names the Cloudflare data center that handled it.</p>

<h2>Rate limits and fair use</h2>
<p>Limits are counted per calling IP address over a rolling minute, and the groups are counted separately from one another:</p>
<ul>
<li><strong>60 a minute</strong> for <code>/api/lookup</code>, <code>/api/dns</code>, <code>/api/whois</code> and <code>/api/reputation</code>.</li>
<li><strong>10 a minute</strong> for <code>/api/port</code>, which opens a real TCP connection on every call.</li>
<li><strong>No fixed limit</strong> on <code>/</code>, <code>/api/ip</code>, <code>/api/me</code> and <code>/api/ping</code>, which are answered from the request itself without contacting anything else.</li>
</ul>
<p>Going over a limit returns HTTP 429 and <code>{"error": "Too many requests. Please wait a minute and try again."}</code>. Wait a minute and carry on; nothing else happens to you.</p>
<p>&ldquo;No fixed limit&rdquo; is not an invitation to hammer it. Cloudflare's abuse protection sits in front of the whole site and can throttle or block traffic that looks automated at scale, so cache the answer instead of asking on every request &mdash; a home connection's public address rarely changes more than a few times a day. The speed test and proxy checker have endpoints of their own, but they are built around the browser tools here rather than around scripts, so they are undocumented and may change.</p>

<h2>Privacy</h2>
<p>There is no key, no account and no advertising. Your IP address is read from the incoming request, used to build the answer and then gone: ipcomet's own code does not write it to a database, a log or any other storage, and never sells or shares it. Cloudflare handles every request as the hosting provider under its own privacy policy, and the rate limiter uses your address only to count your recent requests.</p>
<p>The API endpoints load no analytics at all. On the pages of this site, analytics loads only if you accept it in the banner, and never otherwise. The <a href="/privacy">privacy page</a> sets out that choice and lists every third-party service each tool contacts.</p>

<div class="cta"><h3>Prefer the walkthrough?</h3><p>The guide covers the same commands on macOS, Linux and Windows, how to force IPv4 or IPv6, and the other free services you will see recommended.</p><a class="btn pri" href="/learn/get-public-ip-address-command-line">Get your public IP from the command line</a> <a class="btn" href="/">Check my IP in the browser</a></div>
</div>`;

  return {
    id: "developers",
    title: DEV_TITLE,
    description: DEV_DESCRIPTION,
    path: "/developers",
    body,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: DEV_TITLE,
        description: DEV_DESCRIPTION,
        datePublished: DEV_UPDATED,
        dateModified: DEV_UPDATED,
        author: { "@type": "Person", name: AUTHOR, ...(origin ? { "@id": origin + AUTHOR_ID, url: origin + "/about" } : {}) },
        publisher: {
          "@type": "Organization",
          name: BRAND,
          ...(origin ? { url: origin + "/", logo: { "@type": "ImageObject", url: origin + LOGO_PATH, width: 512, height: 512 } } : {}),
        },
        inLanguage: "en",
        proficiencyLevel: "Beginner",
        ...(origin ? { image: [origin + OG_IMAGE.path], mainEntityOfPage: origin + "/developers" } : {}),
      },
      breadcrumbJsonLd(origin, [["Home", "/"], ["Developers", "/developers"]]),
    ],
  };
}

export const allArticleSlugs = () => ARTICLES.map((a) => a.slug);
export { renderPage };
