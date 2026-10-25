(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
  const page = document.body.dataset.page;
  const out = $("#out");

  // Interface language. English is built in; other languages load a dictionary keyed by the English text
  // (see src/i18n), and anything missing from it simply shows in English.
  const LANG = (document.documentElement.lang || "en").split("-")[0];
  let DICT = {};
  const tr = (text, vars) => {
    let s = DICT[text];
    // The server sometimes joins sentences ("... username. If your provider ..."): translate each one it knows.
    if (s === undefined && text.includes(". ")) {
      const parts = text.split(/(?<=\.)\s+/);
      if (parts.some((p) => DICT[p] !== undefined)) s = parts.map((p) => DICT[p] ?? p).join(" ");
    }
    s = s ?? text;
    return vars ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? "")) : s;
  };
  // Country names in the page language, from the browser's own data. The provider's English name is the fallback.
  const countryName = (name, code) => {
    if (!name && !code) return "";
    if (LANG !== "en" && code) {
      try { return new Intl.DisplayNames([LANG], { type: "region" }).of(code) || name || code; } catch { /* use the provider's name */ }
    }
    return name || code;
  };

  /* ---------- shared helpers ---------- */

  async function api(path) {
    const res = await fetch(path, { headers: { accept: "application/json" } });
    let data = null;
    try { data = await res.json(); } catch { /* not JSON */ }
    if (!res.ok) throw new Error((data && data.error) || `Request failed (${res.status})`);
    return data;
  }

  // rows: [label, value, {html?: boolean, copy?: boolean}]
  function kv(rows) {
    const items = rows
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(([k, v, o = {}]) => {
        const val = o.html ? v : esc(tr(String(v)));
        const copy = o.copy ? ` <button class="btn sm" type="button" data-copy="${esc(v)}">${esc(tr("Copy"))}</button>` : "";
        return `<div><dt>${esc(tr(k))}</dt><dd${o.mono ? ' class="mono"' : ""}>${val}${copy}</dd></div>`;
      })
      .join("");
    return `<dl class="kv">${items}</dl>`;
  }

  const note = (text, kind = "") => `<div class="note ${kind}">${esc(tr(text))}</div>`;
  const loading = (text = "Working…") => (out.innerHTML = `<p class="note">${esc(tr(text))}</p>`);
  const fmtDate = (iso) => {
    if (!iso) return undefined;
    const d = new Date(iso);
    return isNaN(d) ? iso : d.toLocaleDateString(LANG === "en" ? undefined : LANG, { year: "numeric", month: "short", day: "numeric" });
  };

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const t = document.createElement("textarea");
      t.value = text; t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); } catch { /* ignore */ }
      t.remove();
    }
    if (btn) {
      const prev = btn.dataset.label || btn.textContent;
      btn.dataset.label = prev;
      btn.textContent = tr("Copied");
      clearTimeout(btn._t);
      btn._t = setTimeout(() => (btn.textContent = prev), 1400);
    }
  }

  // Close the CSS-only menus when clicking elsewhere or pressing Escape.
  const menus = () => document.querySelectorAll("details.menu[open], details.burger[open]");
  document.addEventListener("click", (e) => menus().forEach((d) => { if (!d.contains(e.target)) d.removeAttribute("open"); }));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") menus().forEach((d) => d.removeAttribute("open")); });

  document.addEventListener("click", (e) => {
    const copy = e.target.closest("[data-copy]");
    if (copy) return copyText(copy.dataset.copy, copy);
  });

  // Shared pattern for "type something, hit enter, see result" pages.
  function wireForm(run) {
    const form = $("#f");
    const input = $("#q");
    if (!form || !input) return;
    form.addEventListener("submit", (e) => { e.preventDefault(); run(input.value.trim()); });
    document.querySelectorAll("[data-fill]").forEach((b) =>
      b.addEventListener("click", () => { input.value = b.dataset.fill; form.requestSubmit(); }));
    const q = new URLSearchParams(location.search).get("q");
    if (q) { input.value = q; form.requestSubmit(); }
    return input;
  }

  const pushQuery = (q) => {
    const url = new URL(location.href);
    url.searchParams.set("q", q);
    history.replaceState(null, "", url);
  };

  /* ---------- Home ---------- */

  async function ipify(url) {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 4000);
    try {
      const res = await fetch(url, { signal: ctl.signal });
      return (await res.json()).ip || null;
    } catch { return null; } finally { clearTimeout(timer); }
  }


  /* ---------- Home: animated ASCII world map ---------- */

  function asciiMap() {
    const pre = $("#ascii");
    if (!pre) return;
    // The map ships in a data attribute, not as page text, so crawlers that strip tags do not read it as the page's first content.
    if (pre.dataset.map) pre.textContent = pre.dataset.map;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const grid = pre.textContent.split("\n").map((r) => r.split(""));
    const rows = grid.length;
    const cols = grid[0].length;
    const dimmer = { "#": "+", "+": ":", ":": ".", ".": " " };
    const span = cols + 14;
    let scan = 0;
    let timer = 0;
    let visible = true;

    function frame() {
      const out = new Array(rows);
      for (let r = 0; r < rows; r++) {
        const row = grid[r].slice();
        // A slanted wave of bright characters sweeping across the continents.
        const head = ((scan + r * 2) % span) - 7;
        for (let k = 0; k < 4; k++) {
          const c = head - k;
          if (c >= 0 && c < cols && row[c] !== " ") row[c] = k === 0 ? "@" : k === 1 ? "%" : "#";
        }
        out[r] = row;
      }
      // A few cells flicker like a live data feed.
      for (let i = 0; i < 16; i++) {
        const r = (Math.random() * rows) | 0;
        const c = (Math.random() * cols) | 0;
        const ch = out[r][c];
        if (dimmer[ch]) out[r][c] = dimmer[ch];
      }
      pre.textContent = out.map((r) => r.join("")).join("\n");
      scan = (scan + 1) % span;
    }

    const start = () => { if (!timer && visible && !document.hidden) timer = setInterval(frame, 110); };
    const stop = () => { clearInterval(timer); timer = 0; };
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; visible ? start() : stop(); }).observe(pre);
    }
    start();
  }
  function home() {
    asciiMap();
    const ipEl = $("#ip");
    const hide = $("#hide");
    hide.addEventListener("click", () => {
      const on = ipEl.classList.toggle("blur");
      hide.textContent = on ? tr("Show") : tr("Hide");
      hide.setAttribute("aria-pressed", String(on));
    });

    const own = $(".hero").dataset.ip;
    const show = (id, ip) => { $(id).textContent = ip || tr("Not detected"); };
    const isLocal = /^(::1$|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|fe80:|fc|fd)/i.test(own);
    const v4 = ipify("https://api4.ipify.org?format=json").then((ip) => {
      show("#v4", ip);
      // Lead with IPv4 when the browser connected over IPv6, since that is the address people expect to see;
      // the IPv6 address stays on the line below. On a local network or dev server, show the address websites see.
      const lead = ip && (isLocal || own.includes(":"));
      if (lead) {
        ipEl.textContent = ip;
        document.querySelector("[data-copy]").dataset.copy = ip;
      }
      return lead ? ip : own;
    });
    ipify("https://api6.ipify.org?format=json").then((ip) => show("#v6", ip));

    v4.then((ip) => api("/api/lookup?q=" + encodeURIComponent(ip)))
      .then((d) => { $("#rdns").textContent = d.hostname || tr("None"); })
      .catch(() => { $("#rdns").textContent = tr("None"); });
  }

  /* ---------- IP lookup ---------- */

  function renderGeo(d) {
    const place = [...new Set([d.city, d.region].filter(Boolean))].join(", ");
    const coords = d.latitude != null && d.longitude != null
      ? `<a href="https://www.openstreetmap.org/?mlat=${d.latitude}&mlon=${d.longitude}#map=9/${d.latitude}/${d.longitude}" target="_blank" rel="noopener noreferrer">${d.latitude.toFixed(3)}, ${d.longitude.toFixed(3)}</a>`
      : "";
    return (
      kv([
        ["IP address", d.ip, { mono: true, copy: true }],
        ["Resolved from", d.resolvedFrom],
        ["Hostname", d.hostname, { mono: true }],
        ["City", place],
        ["Country", d.country ? `${countryName(d.country, d.countryCode)}${d.countryCode ? ` (${d.countryCode})` : ""}` : ""],
        ["Postal code", d.postal],
        ["Timezone", d.timezone],
        ["Coordinates", coords, { html: true }],
        ["ISP", d.isp || d.org],
        ["Organization", d.org && d.org !== d.isp ? d.org : ""],
        ["ASN", d.asn ? `AS${d.asn}` : ""],
        ["Domain", d.domain],
        ["IP version", d.version ? `IPv${d.version}` : ""],
      ]) + (d.warning ? note(d.warning, "warn") : "")
    );
  }

  function lookup() {
    const input = wireForm(async (q) => {
      if (!q) return;
      pushQuery(q);
      loading("Looking up…");
      try { out.innerHTML = renderGeo(await api("/api/lookup?q=" + encodeURIComponent(q))); }
      catch (err) { out.innerHTML = note(err.message, "bad"); }
    });
    $("#mine").addEventListener("click", async () => {
      try { input.value = (await api("/api/me")).ip; $("#f").requestSubmit(); } catch { /* ignore */ }
    });
  }

  /* ---------- DNS ---------- */

  function renderDns(d) {
    const sections = Object.entries(d.records).map(([type, list]) => {
      const body = list.length
        ? `<div class="tw"><table><tbody>${list.map((r) => `<tr><td class="mono">${esc(r.data)}</td><th>${r.ttl}s</th></tr>`).join("")}</tbody></table></div>`
        : `<p class="note">${esc(tr("No {type} records.", { type }))}</p>`;
      return `<h2 class="lbl">${esc(type)}</h2>${body}`;
    }).join("");
    const status = d.rcode === "NXDOMAIN"
      ? note("This domain does not exist (NXDOMAIN).", "bad")
      : d.rcode !== "NOERROR" ? note(tr("Resolver returned {rcode}.", { rcode: d.rcode }), "warn") : "";
    return `<p class="eyebrow">${tr("Results for {name} via {resolver} DNS", { name: `<b class="mono">${esc(d.name)}</b>`, resolver: d.resolver === "google" ? "Google" : "Cloudflare" })}</p>${status}${sections}`;
  }

  function dns() {
    wireForm(async (q) => {
      if (!q) return;
      pushQuery(q);
      loading("Querying DNS…");
      try {
        const params = new URLSearchParams({ name: q, type: $("#type").value, resolver: $("#resolver").value });
        out.innerHTML = renderDns(await api("/api/dns?" + params));
      } catch (err) { out.innerHTML = note(err.message, "bad"); }
    });
  }


  /* ---------- IP reputation ---------- */

  function reputation() {
    const input = $("#q");
    const run = async (q) => {
      if (q) pushQuery(q);
      loading("Checking blocklists and network type…");
      try {
        const d = await api("/api/reputation" + (q ? "?q=" + encodeURIComponent(q) : ""));
        const tone = d.tor ? "bad" : d.network.kind === "isp" ? "ok" : "warn";
        const headline = d.tor ? "Tor exit node" : d.network.label;
        const listed = d.blocklists.filter((b) => b.status === "listed");
        const blocklistNote = !d.blocklists.length
          ? note(d.ipv6Note || "Blocklist checks are not available for this address.", "")
          : listed.length
            ? note(tr("Listed on {n} of {total} blocklists checked. This can affect email delivery and some websites.", { n: listed.length, total: d.checked }), "bad")
            : note(tr("Not listed on any of the {total} blocklists that answered.", { total: d.checked }), "ok");
        const rows = d.blocklists.map((b) => {
          const badge = b.status === "listed" ? "bad" : b.status === "clean" ? "ok" : "warn";
          const text = tr(b.status === "listed" ? "Listed" : b.status === "clean" ? "Clean" : "No answer");
          return `<tr><td>${esc(tr(b.name))}</td><th><span class="badge ${badge}">${text}</span></th></tr>`;
        }).join("");
        out.innerHTML =
          `<p style="margin:0 0 12px"><span class="badge ${tone}">${esc(tr(headline))}</span></p>` +
          kv([
            ["IP address", d.ip, { mono: true, copy: true }],
            ["Network", d.org], ["ASN", d.asn ? `AS${d.asn}` : ""], ["Hostname", d.hostname, { mono: true }],
            ["Country", countryName(d.country, d.countryCode)],
            ["Tor exit node", d.tor === null ? "Could not check" : d.tor ? "Yes" : "No"],
            ["Network type", d.network.label],
          ]) +
          note(d.network.detail) +
          `<h2 class="lbl">${esc(tr("Blocklists"))}</h2>` + blocklistNote +
          (rows ? `<div class="tw" style="margin-top:12px"><table><tbody>${rows}</tbody></table></div>` : "") +
          note("These are indicators, not proof. Spamhaus lists are not queried because Spamhaus blocks public DNS resolvers.");
      } catch (err) { out.innerHTML = note(err.message, "bad"); }
    };
    const form = $("#f");
    form.addEventListener("submit", (e) => { e.preventDefault(); run(input.value.trim()); });
    document.querySelectorAll("[data-fill]").forEach((b) => b.addEventListener("click", () => { input.value = b.dataset.fill; run(b.dataset.fill); }));
    $("#mine").addEventListener("click", () => { input.value = ""; history.replaceState(null, "", location.pathname); run(""); });
    run(new URLSearchParams(location.search).get("q") || "");
    if (input.value === "") input.value = new URLSearchParams(location.search).get("q") || "";
  }


  /* ---------- Latency target (shared by the ping and speed tests) ---------- */

  /*
    ipcomet.com itself can be served from a far-away Cloudflare data center: on 11 Oct 2026 a visitor in India reached
    Marseille and Singapore (80 to 145 ms) while Cloudflare's own sites answered from Delhi in 12 ms. Latency is
    therefore measured against Cloudflare's speed server, which sits at the nearest data center and says which one
    (cf-meta-colo). Our own Worker is the fallback.
  */
  const CF = "https://speed.cloudflare.com";
  // /cdn-cgi/trace is answered by the edge itself (no handler), so its time is the network round trip, and its body names the data center.
  const CFLAT = { url: () => `${CF}/cdn-cgi/trace?r=${Math.random()}`, init: { credentials: "omit" }, colo: async (res) => (/colo=([A-Z]{3})/.exec(await res.text()) || [])[1] || "" };
  /*
    Second choice when a blocker swallows /cdn-cgi/trace: an empty download from the same speed server. Its reply
    includes the time Cloudflare spent producing it (Server-Timing cfSpeedWorker and cfSpeedEdge), which is subtracted.
    Checked on 23 Oct 2026 from Delhi: trace 15.9 ms, raw 46.8 ms, corrected 17.2 ms (medians of 12).
  */
  const CFDOWN = {
    url: () => `${CF}/__down?bytes=0&r=${Math.random()}`,
    init: { credentials: "omit" },
    colo: async (res) => { await res.arrayBuffer(); return ""; },
    server: (url) => {
      const e = performance.getEntriesByName(url).pop();
      const st = Object.fromEntries(((e && e.serverTiming) || []).map((x) => [x.name, x.duration]));
      return (st.cfSpeedWorker || 0) + (st.cfSpeedEdge || 0);
    },
  };
  const OWNLAT = { url: (i) => `/api/ping?i=${i}&r=${Math.random()}`, init: {}, colo: async (res) => res.headers.get("x-colo") || "" };

  // One timed round trip. The time is taken when the reply's headers arrive, before the body is read.
  async function timed(target, i, signal) {
    const url = target.url(i);
    const t = performance.now();
    const res = await fetch(url, { cache: "no-store", signal, ...target.init });
    let ms = performance.now() - t;
    if (!res.ok) throw new Error("bad reply");
    const colo = await target.colo(res);
    if (target.server) ms = Math.max(0.1, ms - target.server(url));
    performance.clearResourceTimings(); // the browser keeps only 250 entries, and later ones would lose their correction
    return { ms, colo };
  }

  let latTarget = null;
  async function latencyTarget() {
    if (latTarget) return latTarget;
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 3000);
    try {
      const res = await fetch(CFLAT.url(), { cache: "no-store", signal: ctl.signal, ...CFLAT.init });
      // Some blockers (Brave Shields, uBlock filter lists) answer /cdn-cgi/trace locally with an empty body in under
      // a millisecond, which would read as 0 ms. A real answer always names the data center.
      if (!res.ok || !/colo=[A-Z]{3}/.test(await res.text())) throw new Error("unavailable");
      latTarget = CFLAT;
    } catch {
      try {
        const url = CFDOWN.url();
        const res = await fetch(url, { cache: "no-store", signal: ctl.signal, ...CFDOWN.init });
        await res.arrayBuffer();
        if (!res.ok || !CFDOWN.server(url)) throw new Error("unavailable");
        latTarget = CFDOWN;
      } catch { latTarget = OWNLAT; }
    }
    clearTimeout(timer);
    return latTarget;
  }

  /* ---------- Ping test ---------- */

  function ping() {
    const go = $("#go");
    const COUNT = 25;
    go.addEventListener("click", async () => {
      go.disabled = true;
      ["avg", "min", "max", "jit", "loss"].forEach((id) => ($("#" + id).textContent = "–"));
      $("#live").innerHTML = "–<small>ms</small>";
      out.innerHTML = "";
      const times = [];
      let lost = 0;
      let colo = "";
      const target = await latencyTarget();
      for (let i = 0; i < COUNT; i++) {
        $("#phase").textContent = tr("Checking… {i} of {total}", { i: i + 1, total: COUNT });
        $("#prog").style.width = ((i + 1) / COUNT) * 100 + "%";
        const ctl = new AbortController();
        const timer = setTimeout(() => ctl.abort(), 3000);
        try {
          const r = await timed(target, i, ctl.signal);
          const ms = r.ms;
          colo = r.colo || colo;
          if (i >= 2) times.push(ms); // the first checks include connection set-up, so they are not counted
          $("#live").innerHTML = `${ms.toFixed(0)}<small>ms</small>`;
        } catch { if (i >= 2) lost++; } finally { clearTimeout(timer); }
        await new Promise((r) => setTimeout(r, 180));
      }
      const sent = COUNT - 2;
      if (!times.length) {
        $("#phase").textContent = tr("No replies. Check your connection and try again.");
        out.innerHTML = note("None of the checks got an answer, so your connection may be offline.", "bad");
      } else {
        const avg = times.reduce((a, b) => a + b, 0) / times.length;
        const jitter = times.length > 1 ? times.slice(1).reduce((s, v, i) => s + Math.abs(v - times[i]), 0) / (times.length - 1) : 0;
        $("#avg").textContent = `${avg.toFixed(0)} ms`;
        $("#min").textContent = `${Math.min(...times).toFixed(0)} ms`;
        $("#max").textContent = `${Math.max(...times).toFixed(0)} ms`;
        $("#jit").textContent = `${jitter.toFixed(1)} ms`;
        $("#loss").textContent = `${((lost / sent) * 100).toFixed(0)}%`;
        $("#live").innerHTML = `${avg.toFixed(0)}<small>${esc(tr("ms avg"))}</small>`;
        $("#phase").textContent = tr("Done");
        const [text, tone] = lost / sent > 0.05 || jitter > 30
          ? ["Your ping is unstable. Packet loss or jitter like this causes stutter in calls and games. Try a wired connection and restart your router.", "bad"]
          : avg < 30 ? ["Excellent. This is great for online gaming and video calls.", "ok"]
          : avg < 60 ? ["Good. Fine for gaming, calls and everything else.", "ok"]
          : avg < 100 ? ["Fair. Fine for browsing and calls, and you may notice lag in fast games.", "warn"]
          : ["High. You will notice lag. Try a wired connection, move closer to your router or restart it.", "bad"];
        out.innerHTML = note(text, tone);
      }
      if (colo) $("#colo").textContent = ` (${colo})`;
      go.disabled = false;
      go.textContent = tr("Test again");
    });
  }

  /* ---------- Reverse DNS ---------- */

  function reverseDns() {
    const input = $("#q");
    const looksLikeIp = (v) => /^\d{1,3}(\.\d{1,3}){3}$/.test(v) || (v.includes(":") && /^[0-9a-f:.]+$/i.test(v));
    const run = async (q) => {
      if (!q) return;
      if (!looksLikeIp(q)) { out.innerHTML = note("Enter an IP address, for example 8.8.8.8. For a domain name, use the DNS lookup instead.", "bad"); return; }
      pushQuery(q);
      loading("Looking up PTR record…");
      try {
        const d = await api("/api/dns?name=" + encodeURIComponent(q) + "&type=PTR");
        const ptr = (d.records.PTR || []);
        out.innerHTML = ptr.length
          ? kv([["IP address", d.name, { mono: true }], ["Hostname", ptr.map((r) => r.data.replace(/\.$/, "")).join("\n"), { mono: true, copy: true }], ["PTR query", d.query, { mono: true }], ["TTL", `${ptr[0].ttl}s`]])
          : note(tr("No PTR record found for {q}. The owner has not set a reverse name, which is common for home connections.", { q }), "warn");
      } catch (err) { out.innerHTML = note(err.message, "bad"); }
    };
    $("#f").addEventListener("submit", (e) => { e.preventDefault(); run(input.value.trim()); });
    document.querySelectorAll("[data-fill]").forEach((b) => b.addEventListener("click", () => { input.value = b.dataset.fill; run(b.dataset.fill); }));
    $("#mine").addEventListener("click", async () => { try { input.value = (await api("/api/me")).ip; run(input.value); } catch { /* ignore */ } });
    const q = new URLSearchParams(location.search).get("q");
    if (q) { input.value = q; run(q); }
  }

  /* ---------- WHOIS ---------- */

  function whois() {
    wireForm(async (q) => {
      if (!q) return;
      pushQuery(q);
      loading("Searching registry…");
      try {
        const d = await api("/api/whois?q=" + encodeURIComponent(q));
        out.innerHTML = d.kind === "ip"
          ? kv([
              ["Network", d.name], ["Handle", d.handle], ["Range", d.range, { mono: true }], ["CIDR", d.cidr, { mono: true }],
              ["Organization", d.organization], ["Country", d.country], ["Type", d.type], ["Parent", d.parent],
              ["Registered", fmtDate(d.registered)], ["Last changed", fmtDate(d.updated)],
            ])
          : kv([
              ["Domain", d.name, { mono: true }], ["Registrar", d.registrar],
              ["Registered", fmtDate(d.registered)], ["Expires", fmtDate(d.expires)], ["Last changed", fmtDate(d.updated)],
              ["Status", (d.status || []).join(", ")],
              ["Nameservers", (d.nameservers || []).join("\n"), { mono: true }],
              ["DNSSEC", d.dnssec],
            ]);
      } catch (err) { out.innerHTML = note(err.message, "bad"); }
    });
  }

  /* ---------- Browser info ---------- */

  function parseUA(ua) {
    const pick = (list) => { for (const [name, re] of list) { const m = ua.match(re); if (m) return `${name}${m[1] ? " " + m[1] : ""}`; } return "Unknown"; };
    const browser = pick([
      ["Edge", /Edg\/([\d.]+)/], ["Opera", /OPR\/([\d.]+)/], ["Samsung Internet", /SamsungBrowser\/([\d.]+)/],
      ["Firefox", /Firefox\/([\d.]+)/], ["Chrome", /(?:Chrome|CriOS)\/([\d.]+)/], ["Safari", /Version\/([\d.]+).*Safari/],
    ]);
    const os = pick([
      ["Windows", /Windows NT ([\d.]+)/], ["iOS", /OS ([\d_]+) like Mac OS X/], ["Android", /Android ([\d.]+)/],
      ["macOS", /Mac OS X ([\d_.]+)/], ["ChromeOS", /CrOS/], ["Linux", /Linux/],
    ]).replace(/_/g, ".");
    return { browser, os };
  }

  async function browserInfo() {
    const ua = navigator.userAgent;
    const { browser, os } = parseUA(ua);
    const conn = navigator.connection;
    const draw = (hints = {}) => {
      out.innerHTML =
        `<h2 class="lbl">${esc(tr("Browser"))}</h2>${kv([
          ["Browser", browser], ["Operating system", hints.platformVersion ? `${hints.platform} ${hints.platformVersion}` : os],
          ["Architecture", hints.architecture ? `${hints.architecture}${hints.bitness ? ` ${hints.bitness}-bit` : ""}` : ""],
          ["Device model", hints.model], ["User agent", ua, { mono: true, copy: true }],
        ])}` +
        `<h2 class="lbl">${esc(tr("Display"))}</h2>${kv([
          ["Screen", `${screen.width} × ${screen.height}`], ["Viewport", `${innerWidth} × ${innerHeight}`],
          ["Pixel ratio", String(devicePixelRatio)], ["Color depth", `${screen.colorDepth}-bit`],
          ["Dark mode", matchMedia("(prefers-color-scheme: dark)").matches ? "Yes" : "No"],
          ["Touch points", String(navigator.maxTouchPoints || 0)],
        ])}` +
        `<h2 class="lbl">${esc(tr("Locale and system"))}</h2>${kv([
          ["Language", navigator.language], ["All languages", (navigator.languages || []).join(", ")],
          ["Timezone", Intl.DateTimeFormat().resolvedOptions().timeZone],
          ["CPU threads", navigator.hardwareConcurrency ? String(navigator.hardwareConcurrency) : ""],
          ["Memory", navigator.deviceMemory ? tr("{n} GB", { n: navigator.deviceMemory }) : ""],
          ["Cookies enabled", navigator.cookieEnabled ? "Yes" : "No"],
          ["Do Not Track", navigator.doNotTrack === "1" ? "On" : "Off"],
          ["Online", navigator.onLine ? "Yes" : "No"],
          ["Connection", conn ? [conn.effectiveType, conn.downlink ? `${conn.downlink} Mbps` : "", conn.rtt ? `${conn.rtt} ms RTT` : ""].filter(Boolean).join(" · ") : ""],
        ])}`;
    };
    draw();
    try {
      const h = await navigator.userAgentData?.getHighEntropyValues(["platformVersion", "architecture", "bitness", "model"]);
      if (h) draw({ ...h, platform: navigator.userAgentData.platform });
    } catch { /* hints unavailable */ }
  }

  /* ---------- Port checker ---------- */

  function port() {
    const form = $("#f");
    const input = $("#port");
    const run = async (value) => {
      loading("Connecting…");
      try {
        const d = await api("/api/port?port=" + encodeURIComponent(value));
        const [headline, tone, detail] = {
          open: ["Port {port} is open", "ok", "Something accepted the connection."],
          closed: ["Port {port} is closed", "bad", "The connection was refused. Nothing is listening, or a firewall rejected it."],
          filtered: ["Port {port}: no response", "warn", "The connection timed out. A firewall is probably silently dropping traffic, or the host is unreachable."],
        }[d.state];
        out.innerHTML = `<p style="margin:0 0 12px"><span class="badge ${tone}">${esc(tr(headline, { port: d.port }))}</span></p>${note(`${tr(detail)} ${tr("Checked {ip} in {ms} ms.", { ip: d.ip, ms: d.ms })}`, tone)}`;
      } catch (err) { out.innerHTML = note(err.message, "bad"); }
    };
    form.addEventListener("submit", (e) => { e.preventDefault(); run(input.value); });
    document.querySelectorAll("[data-port]").forEach((b) =>
      b.addEventListener("click", () => { input.value = b.dataset.port; run(b.dataset.port); }));
  }

  /* ---------- Speed test ---------- */

  function speed() {
    const go = $("#go");
    const mbps = (bytes, ms) => (bytes * 8) / 1e6 / (ms / 1000);
    const fmt = (n) => (n >= 100 ? n.toFixed(0) : n.toFixed(1));
    const setLive = (n, unit = "Mbps") => { $("#live").innerHTML = `${unit === "ms" ? n.toFixed(0) : fmt(n)}<small>${unit}</small>`; };
    const phase = (text, p) => { $("#phase").textContent = tr(text); if (p !== undefined) $("#prog").style.width = p + "%"; };
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const median = (a) => { const s = a.slice().sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : NaN; };
    const step = (id, state) => { const el = $("#st-" + id); el.classList.remove("on", "done"); if (state) el.classList.add(state); };

    /*
      Live chart. Every 250 ms the one-second rolling speed is plotted against time, download then upload on one
      timeline and one Mbps axis. The shaded band at the start of each direction is the 1.5 s ramp-up that the result
      ignores, and the thin line across the rest is the result itself, so the reader sees what was counted.
    */
    const trace = { d: [], u: [], t0: 0, phases: [], hover: null };
    const svg = $("#trace");
    const tip = $("#tip");
    const WARM = 1500;
    const niceStep = (raw) => {
      const p = 10 ** Math.floor(Math.log10(raw));
      return [1, 2, 2.5, 5, 10].map((m) => m * p).find((x) => x >= raw);
    };
    const points = () => trace.d.map(([t, v]) => ({ t, v, k: "d" })).concat(trace.u.map(([t, v]) => ({ t, v, k: "u" })));

    function draw() {
      const W = svg.clientWidth || 600, H = svg.clientHeight || 240;
      const M = { l: 46, r: 12, t: 18, b: 24 };
      const pw = W - M.l - M.r, ph = H - M.t - M.b;
      const all = points();
      const vmax = Math.max(0, ...all.map((p) => p.v), ...trace.phases.map((p) => p.result || 0));
      const ystep = niceStep(Math.max(vmax * 1.08, 20) / 4);
      const ytop = ystep * Math.ceil(Math.max(vmax * 1.08, 20) / ystep);
      // The time axis grows in 5 s steps, so the chart does not rescale on every sample.
      const tEnd = Math.max(10000, Math.ceil((Math.max(0, ...all.map((p) => p.t)) + 750) / 5000) * 5000);
      const xstep = [1000, 2000, 5000, 10000].find((s) => tEnd / s <= 8);
      const X = (t) => M.l + (t / tEnd) * pw;
      const Y = (v) => M.t + ph - (v / ytop) * ph;
      const n = (v) => v.toFixed(1);
      let g = "";
      for (let v = 0; v <= ytop + 1e-9; v += ystep) {
        g += `<line class="${v ? "gl" : "base"}" x1="${M.l}" x2="${W - M.r}" y1="${n(Y(v))}" y2="${n(Y(v))}"/>`;
        g += `<text x="${M.l - 8}" y="${n(Y(v))}" dy=".32em" text-anchor="end">${Math.round(v)}</text>`;
      }
      g += `<text x="${M.l - 8}" y="${M.t - 8}" text-anchor="end">Mbps</text>`;
      for (let t = 0; t <= tEnd; t += xstep) g += `<text x="${n(X(t))}" y="${H - 6}" text-anchor="${t ? "middle" : "start"}">${t / 1000}s</text>`;
      for (const p of trace.phases) {
        const end = p.end ?? Math.max(p.start, ...trace[p.k].map((q) => q[0]));
        const x1 = X(p.start), x2 = X(Math.min(p.start + WARM, end));
        if (x2 > x1) g += `<rect class="ramp" x="${n(x1)}" y="${M.t}" width="${n(x2 - x1)}" height="${ph}"/>`;
        if (x2 - x1 > 54) g += `<text x="${n(x1 + 5)}" y="${M.t + 12}">${esc(tr("Warm-up"))}</text>`;
      }
      const L = trace.live;
      for (const k of ["d", "u"]) {
        const pts = L && L.k === k && trace[k].length ? trace[k].concat([[L.t, L.v]]) : trace[k];
        if (!pts.length) continue;
        const line = pts.map(([t, v]) => `${n(X(t))},${n(Y(v))}`).join(" ");
        g += `<polygon class="a${k}" points="${n(X(pts[0][0]))},${n(Y(0))} ${line} ${n(X(pts[pts.length - 1][0]))},${n(Y(0))}"/>`;
        g += `<polyline class="l${k}" points="${line}"/>`;
      }
      for (const p of trace.phases) {
        if (p.result === undefined) continue;
        const y = Y(p.result), x1 = X(p.start + WARM), x2 = X(p.end);
        g += `<line class="r${p.k}" x1="${n(x1)}" x2="${n(x2)}" y1="${n(y)}" y2="${n(y)}"/>`;
        const ly = y - 7 < M.t + 4 ? y + 15 : y - 7;
        g += `<text class="rl" x="${n(x2 - 2)}" y="${n(ly)}" text-anchor="end">${fmt(p.result)} Mbps</text>`;
      }
      if (L && trace[L.k].length) g += `<circle class="d${L.k}" cx="${n(X(L.t))}" cy="${n(Y(L.v))}" r="4"/>`;
      const h = trace.hover;
      if (h) {
        g += `<line class="xh" x1="${n(X(h.t))}" x2="${n(X(h.t))}" y1="${M.t}" y2="${M.t + ph}"/>`;
        g += `<circle class="d${h.k}" cx="${n(X(h.t))}" cy="${n(Y(h.v))}" r="4.5"/>`;
        const phase = trace.phases.find((p) => p.k === h.k);
        const warm = phase && h.t < phase.start + WARM;
        tip.replaceChildren();
        const b = document.createElement("b");
        b.textContent = `${fmt(h.v)} Mbps`;
        const key = document.createElement("i");
        if (h.k === "u") key.className = "u";
        tip.append(b, key, document.createTextNode(`${tr(h.k === "d" ? "Download" : "Upload")} · ${(h.t / 1000).toFixed(1)} s`));
        if (warm) { tip.append(document.createElement("br"), document.createTextNode(tr("Warm-up, not counted"))); }
        tip.hidden = false;
        const left = Math.min(Math.max(X(h.t) - tip.offsetWidth / 2, 0), W - tip.offsetWidth);
        tip.style.left = `${left}px`;
      } else tip.hidden = true;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.innerHTML = g;
      const peak = Math.max(0, ...all.map((p) => p.v));
      $("#peak").textContent = peak ? tr("Peak {n} Mbps", { n: fmt(peak) }) : "";
    }

    // Hover and keyboard: the crosshair snaps to the nearest sample, on either line.
    let raf = 0;
    const schedule = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; draw(); }); };
    const nearest = (t) => points().reduce((best, p) => (!best || Math.abs(p.t - t) < Math.abs(best.t - t) ? p : best), null);
    svg.addEventListener("pointermove", (e) => {
      const r = svg.getBoundingClientRect();
      const W = r.width, all = points();
      if (!all.length) return;
      const tEnd = Math.max(10000, Math.ceil((Math.max(0, ...all.map((p) => p.t)) + 750) / 5000) * 5000);
      trace.hover = nearest(((e.clientX - r.left - 46) / (W - 58)) * tEnd);
      schedule();
    });
    svg.addEventListener("pointerleave", () => { trace.hover = null; schedule(); });
    svg.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const all = points();
      if (!all.length) return;
      e.preventDefault();
      const i = trace.hover ? all.findIndex((p) => p.t === trace.hover.t && p.k === trace.hover.k) : -1;
      trace.hover = all[Math.min(Math.max(i + (e.key === "ArrowRight" ? 1 : -1), 0), all.length - 1)];
      schedule();
    });
    svg.addEventListener("blur", () => { trace.hover = null; schedule(); });
    if (window.ResizeObserver) new ResizeObserver(schedule).observe(svg);
    draw();

    /* ---- Latency ---- */
    const probe = (target, i) => timed(target, i);

    async function idleLatency() {
      let target = await latencyTarget();
      const times = [];
      let colo = "";
      for (let i = 0; i < 22; i++) {
        let r;
        try { r = await probe(target, i); } catch { if (target === OWNLAT) throw new Error("no data"); target = latTarget = OWNLAT; i--; continue; }
        times.push(r.ms);
        colo = r.colo || colo;
        if (i >= 2) setLive(median(times.slice(2)), "ms");
        phase("Measuring latency…", (i / 22) * 10);
      }
      const chrono = times.slice(2); // the first two include connection set-up
      // Jitter is how much the delay changes from one check to the next, so it needs the checks in the order they ran.
      const jitter = chrono.slice(1).reduce((s, v, i) => s + Math.abs(v - chrono[i]), 0) / (chrono.length - 1);
      return { ms: median(chrono), jitter, colo };
    }

    /*
      Latency under load. While data is flowing, a round trip is timed every 250 ms. On a line whose router or modem
      buffers too much, these queue behind the test data and the delay jumps: that is bufferbloat, and it is why a call
      stutters when someone else starts a download. Ookla reports it as "loaded latency" and fast.com as "loaded".
    */
    function loadedProbe() {
      const times = [];
      let on = true, i = 0;
      const loop = (async () => {
        await sleep(1200); // let the transfer fill the line first
        while (on) {
          try { const r = await probe(latTarget || OWNLAT, 100 + i++); if (on) times.push(r.ms); } catch {}
          await sleep(250);
        }
      })();
      return async () => { on = false; await loop; return times.length >= 3 ? median(times) : NaN; };
    }

    /*
      Where the bytes come from. Cloudflare's own speed-test servers are built to move data at line rate and allow
      cross-origin use, and the browser runs several parallel transfers to them, as Ookla and fast.com do. Pulling
      the test data through our own Worker capped the result far below the real speed, so it is only the fallback.
    */
    /*
      5 MB per request. Cloudflare's speed server rate-limits each IP address, and once a visitor has tested a lot it
      answers requests of 10 MB or more with 429 (checked 23 Oct 2026: 8 MB still passed, 10 MB did not). Six parallel
      5 MB requests still fill a gigabit line.
    */
    const CHUNK = 5000000;
    const CFSRC = { down: () => `${CF}/__down?bytes=${CHUNK}&r=${Math.random()}`, up: `${CF}/__up`, init: { credentials: "omit" } };
    const OWNSRC = { down: () => `/api/speed/down?bytes=${CHUNK}&r=${Math.random()}`, up: "/api/speed/up", init: {} };
    let src = CFSRC;
    let primary = CFSRC;

    async function pickSource() {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 4000);
      // Ask for a full-size chunk, so a rate limit shows up here (one console line) rather than in all six transfers,
      // and stop reading as soon as the headers say yes.
      try {
        const res = await fetch(CFSRC.down(), { cache: "no-store", credentials: "omit", signal: ctl.signal });
        if (!res.ok) throw new Error("unavailable");
        primary = CFSRC;
      } catch { primary = OWNSRC; }
      ctl.abort();
      clearTimeout(timer);
    }

    /*
      Adaptive length. Throughput is sampled every 250 ms; the first 1.5 s (TCP ramp-up) is ignored. After the minimum
      time the test stops as soon as the last two seconds average within 3% of the two seconds before, which is how
      fast.com decides a line has settled, and it never runs past the maximum. The result is the mean of the settled
      samples after dropping the slowest 20% and the fastest 5%, so one stalled transfer or one burst cannot move it.
    */
    const steadyMbps = (rates, fallback) => {
      if (rates.length < 8) return fallback;
      const s = rates.slice().sort((a, b) => a - b);
      const kept = s.slice(Math.floor(s.length * 0.2), s.length - Math.floor(s.length * 0.05));
      return kept.reduce((a, b) => a + b, 0) / kept.length;
    };
    const settled = (rates) => {
      if (rates.length < 16) return false;
      const avg = (a) => a.reduce((x, y) => x + y, 0) / a.length;
      const a = avg(rates.slice(-8)), b = avg(rates.slice(-16, -8));
      return b > 0 && Math.abs(a - b) / b < 0.03;
    };

    // Runs one direction. `start(sink, stopped)` launches the transfers and resolves when they have all ended.
    async function transfer(kind, { min, max, from, to, label, start }) {
      const t0 = performance.now();
      const rates = [];
      let total = 0, last = { t: 0, b: 0 }, stop = false, recent = [], tick;
      const offset = trace.t0;
      const phaseRec = { k: kind, start: offset };
      trace.phases = trace.phases.filter((p) => p.k !== kind).concat(phaseRec);
      /*
        Samples arrive every 250 ms, but the chart and the big number move every frame: the line's head eases toward
        the latest one-second speed, so the drawing glides instead of jumping four times a second.
      */
      const L = (trace.live = { k: kind, t: offset, v: 0, target: 0 });
      const frame = () => {
        if (trace.live !== L) return;
        L.v += (L.target - L.v) * 0.18;
        L.t = Math.max(L.t, offset + performance.now() - t0);
        setLive(L.v);
        draw();
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      const done = new Promise((resolve) => {
        tick = setInterval(() => {
          const t = performance.now() - t0;
          const dt = t - last.t;
          if (dt >= 50) {
            const rate = mbps(total - last.b, dt);
            if (t > 1500) rates.push(rate);
            last = { t, b: total };
            recent.push(rate);
            if (recent.length > 4) recent.shift();
            const live = recent.reduce((a, b) => a + b, 0) / recent.length;
            L.target = live;
            trace[kind].push([offset + t, live]);
          }
          phase(label, from + Math.min(t / max, 1) * (to - from));
          if (t >= max || (t >= min && settled(rates))) { stop = true; clearInterval(tick); resolve(t); }
        }, 250);
      });
      const ended = start((n) => { total += n; }, () => stop);
      const elapsed = await Promise.race([done, ended.then(() => (stop ? null : "early"))]);
      if (elapsed === "early") { clearInterval(tick); trace.live = null; throw new Error("no data"); } // every transfer died early, e.g. a rate limit
      await ended;
      const ms = typeof elapsed === "number" ? elapsed : performance.now() - t0;
      trace.t0 = offset + ms + 400;
      if (total < 100000) { trace.live = null; throw new Error("no data"); }
      const result = steadyMbps(rates, mbps(total, ms));
      phaseRec.end = offset + ms;
      phaseRec.result = result;
      trace.live = null;
      setLive(result);
      draw();
      return { mbps: result, bytes: total, ms };
    }

    const download = () => transfer("d", {
      min: 5000, max: 15000, from: 10, to: 55, label: "Testing download…",
      start: (sink, stopped) => {
        const ctl = new AbortController();
        // A transfer stalled mid-read would never see the stop, so abort them all from outside too.
        const watch = setInterval(() => { if (stopped()) { ctl.abort(); clearInterval(watch); } }, 100);
        const worker = async () => {
          while (!stopped()) {
            try {
              const res = await fetch(src.down(), { signal: ctl.signal, cache: "no-store", ...src.init });
              if (!res.ok) return;
              /*
                A gigabit test reads about a gigabyte. With the default reader every chunk is a new buffer, and freeing
                them froze the page for up to half a second as the test ended. A BYOB reader fills one reused buffer.
              */
              let reader, buf = new ArrayBuffer(1 << 20);
              try { reader = res.body.getReader({ mode: "byob" }); } catch { reader = res.body.getReader(); buf = null; }
              for (;;) {
                const { done, value } = buf ? await reader.read(new Uint8Array(buf)) : await reader.read();
                if (done) break;
                sink(value.byteLength);
                if (buf) buf = value.buffer;
                if (stopped()) { ctl.abort(); return; }
              }
            } catch { return; }
          }
        };
        return Promise.all(Array.from({ length: 6 }, worker)).finally(() => clearInterval(watch));
      },
    });

    const upload = () => {
      const BLOCK = 65536;
      const block = new Uint8Array(BLOCK);
      crypto.getRandomValues(block); // random bytes, so no link can compress them away
      const body = new Blob(Array.from({ length: 256 }, () => block)); // 16 MB, so a fast line needs few requests
      return transfer("u", {
        min: 4000, max: 12000, from: 58, to: 100, label: "Testing upload…",
        start: (sink, stopped) => {
          const open = new Set();
          // XMLHttpRequest reports how many bytes have actually left, so partly sent requests count too.
          const sendOne = () => new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            let seen = 0, ok = false;
            open.add(xhr);
            xhr.open("POST", src.up);
            xhr.upload.onprogress = (e) => { if (!stopped()) sink(e.loaded - seen); seen = e.loaded; };
            xhr.onload = () => { ok = xhr.status >= 200 && xhr.status < 300; };
            xhr.onloadend = () => { open.delete(xhr); resolve(ok); };
            xhr.send(body);
          });
          const watch = setInterval(() => { if (stopped()) { open.forEach((x) => x.abort()); clearInterval(watch); } }, 100);
          const worker = async () => { while (!stopped()) { if (!(await sendOne())) return; } };
          return Promise.all(Array.from({ length: 6 }, worker)).finally(() => clearInterval(watch));
        },
      });
    };

    /* ---- Verdicts ---- */

    /*
      Bufferbloat grade from the rise in latency under load, on the scale popularised by the Waveform bufferbloat test:
      under 5 ms A+, under 30 ms A, under 60 ms B, under 200 ms C, under 400 ms D, otherwise F.
    */
    function grade(idle, loaded) {
      const rise = Math.max(0, loaded - idle);
      const g = rise < 5 ? "A+" : rise < 30 ? "A" : rise < 60 ? "B" : rise < 200 ? "C" : rise < 400 ? "D" : "F";
      const el = $("#gr");
      el.textContent = g;
      el.className = g.startsWith("A") ? "g-ok" : g === "B" || g === "C" ? "g-warn" : "g-bad";
      $("#grtext").textContent = tr("Latency rose by {ms} ms under load.", { ms: rise.toFixed(0) }) + " " + tr(
        g.startsWith("A") ? "Calls and games should stay smooth even while the line is busy."
          : g === "B" || g === "C" ? "You may notice lag in calls and games while someone else is downloading or uploading."
            : "Calls and games are likely to stutter whenever the line is busy. Smart queue management (SQM) on your router usually fixes this.");
    }

    // Rules of thumb: Netflix asks for 15 Mbps for 4K, Zoom about 3.8 Mbps each way for 1080p calls.
    function fits(r) {
      const set = (id, level) => {
        const b = $(`#fit-${id} b`);
        b.className = { y: "y", m: "m", n: "n" }[level];
        b.textContent = tr({ y: "Great", m: "Works", n: "Struggles" }[level]);
      };
      const worstLat = Math.max(r.ldown || r.lat, r.lup || r.lat);
      set("4k", r.down >= 25 ? "y" : r.down >= 15 ? "m" : "n");
      set("call", r.down >= 4 && r.up >= 4 && worstLat < 150 && r.jit < 30 ? "y" : r.down >= 2 && r.up >= 1.5 && worstLat < 300 ? "m" : "n");
      set("game", worstLat < 60 && r.jit < 15 && r.down >= 3 ? "y" : worstLat < 120 && r.jit < 30 ? "m" : "n");
      set("big", r.up >= 50 ? "y" : r.up >= 10 ? "m" : "n");
    }

    /* ---- Run ---- */

    // Who and where: the visitor's network from our own API, the server from the latency checks.
    fetch("/api/me", { cache: "no-store" }).then((r) => r.json()).then((d) => {
      const place = [d.city, d.countryCode].filter(Boolean).join(", ");
      $("#srv").textContent = [d.org, place].filter(Boolean).join(" · ");
    }).catch(() => {});

    go.addEventListener("click", async () => {
      go.disabled = true;
      ["down", "up", "lat", "jit", "ldown", "lup"].forEach((id) => ($("#" + id).textContent = "–"));
      document.querySelectorAll(".fit b").forEach((b) => { b.textContent = "–"; b.className = ""; });
      $("#gr").textContent = "–"; $("#gr").className = "";
      $("#used").textContent = "";
      trace.d = []; trace.u = []; trace.t0 = 0; trace.phases = []; trace.hover = null; draw();
      ["lat", "down", "up"].forEach((id) => step(id, ""));
      setLive(0);
      const r = {};
      let bytes = 0;
      try {
        step("lat", "on");
        const idle = await idleLatency();
        r.lat = idle.ms; r.jit = idle.jitter;
        $("#lat").textContent = `${idle.ms.toFixed(0)} ms`;
        $("#jit").textContent = `${idle.jitter.toFixed(1)} ms`;
        if (idle.colo) $("#colo").textContent = ` (${idle.colo})`;
        step("lat", "done");
        await pickSource();
        // Cloudflare's speed servers limit how much one IP address may transfer per hour. If they refuse, the same
        // direction runs again against our own server instead of failing. Each direction picks its own source.
        const run = async (id, fn) => {
          step(id, "on");
          const stopLoaded = loadedProbe();
          let res;
          src = primary;
          try { res = await fn(); } catch (e) {
            if (primary === OWNSRC) { await stopLoaded(); throw e; }
            src = OWNSRC; trace[id === "down" ? "d" : "u"] = []; res = await fn();
          }
          const loaded = await stopLoaded();
          step(id, "done");
          bytes += res.bytes;
          return { ...res, loaded };
        };
        const d = await run("down", download);
        r.down = d.mbps; r.ldown = d.loaded;
        $("#down").textContent = `${fmt(d.mbps)} Mbps`;
        $("#ldown").textContent = Number.isFinite(d.loaded) ? `${d.loaded.toFixed(0)} ms` : tr("n/a");
        await sleep(400);
        const u = await run("up", upload);
        r.up = u.mbps; r.lup = u.loaded;
        $("#up").textContent = `${fmt(u.mbps)} Mbps`;
        $("#lup").textContent = Number.isFinite(u.loaded) ? `${u.loaded.toFixed(0)} ms` : tr("n/a");
        setLive(d.mbps);
        const worst = Math.max(Number.isFinite(r.ldown) ? r.ldown : r.lat, Number.isFinite(r.lup) ? r.lup : r.lat);
        grade(r.lat, worst);
        fits({ ...r, ldown: Number.isFinite(r.ldown) ? r.ldown : r.lat, lup: Number.isFinite(r.lup) ? r.lup : r.lat });
        svg.setAttribute("aria-label", tr("Download averaged {d} Mbps and upload {u} Mbps.", { d: fmt(d.mbps), u: fmt(u.mbps) }));
        $("#used").textContent = tr("This test moved {mb} MB in {s} seconds.", { mb: (bytes / 1e6).toFixed(0), s: ((d.ms + u.ms) / 1000).toFixed(0) });
        if (!$("#dlcalc")) $("#used").insertAdjacentHTML("afterend", `<p id="dlcalc"></p>`);
        $("#dlcalc").innerHTML = `<a href="${LANG === "en" ? "" : "/" + LANG}/download-time-calculator?speed=${encodeURIComponent(d.mbps.toFixed(0))}">${esc(tr("How long will a download take at this speed?"))}</a>`;
        phase("Done", 100);
      } catch {
        ["lat", "down", "up"].forEach((id) => { if ($("#st-" + id).classList.contains("on")) step(id, ""); });
        phase("The test was interrupted. Check your connection and try again.", 0);
      }
      go.disabled = false;
      go.textContent = tr("Test again");
    });
  }

  /* ---------- WebRTC leak ---------- */

  function webrtc() {
    const go = $("#go");
    const isLocal = (ip) => /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|127\.|fe80:|fc|fd)/i.test(ip) || ip.endsWith(".local");

    async function gather() {
      const found = new Map();
      const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.cloudflare.com:3478" }] });
      pc.createDataChannel("probe");
      pc.onicecandidate = (e) => {
        if (!e.candidate) return;
        const parts = e.candidate.candidate.split(" ");
        const address = parts[4];
        const type = parts[7];
        if (address) found.set(address, type);
      };
      await pc.setLocalDescription(await pc.createOffer());
      await new Promise((resolve) => {
        const done = () => resolve();
        pc.onicegatheringstatechange = () => pc.iceGatheringState === "complete" && done();
        setTimeout(done, 5000);
      });
      pc.close();
      return found;
    }

    go.addEventListener("click", async () => {
      if (!window.RTCPeerConnection) { out.innerHTML = note("This browser doesn't support WebRTC, so it can't leak anything this way.", "ok"); return; }
      go.disabled = true;
      loading("Gathering WebRTC candidates…");
      try {
        const [found, me, v4, v6] = await Promise.all([
          gather(),
          api("/api/me"),
          ipify("https://api4.ipify.org?format=json"),
          ipify("https://api6.ipify.org?format=json"),
        ]);
        const known = new Set([me.ip, v4, v6].filter(Boolean));
        const publicIps = [...found].filter(([ip, t]) => t === "srflx" && !isLocal(ip)).map(([ip]) => ip);
        const locals = [...found].filter(([ip, t]) => t === "host" || isLocal(ip)).map(([ip]) => ip);
        const leaked = publicIps.filter((ip) => !known.has(ip));

        let verdict;
        if (!publicIps.length) verdict = note("WebRTC didn't expose any public IP address. You're not leaking through it.", "ok");
        else if (leaked.length) verdict = note(tr("WebRTC exposed {ips}, which is different from the IP websites see ({ip}). If you're using a VPN, this could be a leak of your real address.", { ips: leaked.join(", "), ip: me.ip }), "bad");
        else verdict = note("The only public IPs WebRTC exposed match the ones websites already see. No leak.", "ok");

        out.innerHTML = verdict + `<h2 class="lbl">${esc(tr("Details"))}</h2>` + kv([
          ["IP websites see", me.ip, { mono: true }],
          ["Public IP via WebRTC", publicIps.join("\n") || "None", { mono: true }],
          ["Local addresses", locals.join("\n") || "None (hidden by browser)", { mono: true }],
        ]);
      } catch {
        out.innerHTML = note("The test couldn't complete. Your browser or network may be blocking WebRTC probes.", "warn");
      }
      go.disabled = false;
      go.textContent = tr("Run again");
    });
  }

  /* ---------- Subnet calculator ---------- */

  const v4ToInt = (s) => {
    const m = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(s);
    if (!m) return null;
    const p = m.slice(1).map(Number);
    return p.every((n) => n <= 255) ? ((p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]) >>> 0 : null;
  };
  const intToV4 = (n) => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");

  function v6ToBig(s) {
    if (!/^[0-9a-f:]+$/i.test(s) || !s.includes(":")) return null;
    const halves = s.split("::");
    if (halves.length > 2) return null;
    const split = (p) => (p ? p.split(":") : []);
    const head = split(halves[0]);
    const tail = halves.length === 2 ? split(halves[1]) : [];
    const fill = 8 - head.length - tail.length;
    if (halves.length === 2 ? fill < 1 : fill !== 0) return null;
    const groups = [...head, ...Array(Math.max(fill, 0)).fill("0"), ...tail];
    if (!groups.every((g) => /^[0-9a-f]{1,4}$/i.test(g))) return null;
    return groups.reduce((acc, g) => (acc << 16n) | BigInt(parseInt(g, 16)), 0n);
  }
  function bigToV6(n) {
    const groups = Array.from({ length: 8 }, (_, i) => Number((n >> BigInt((7 - i) * 16)) & 0xffffn).toString(16));
    let best = { at: -1, len: 0 };
    for (let i = 0; i < 8;) {
      if (groups[i] !== "0") { i++; continue; }
      let j = i;
      while (j < 8 && groups[j] === "0") j++;
      if (j - i > best.len) best = { at: i, len: j - i };
      i = j;
    }
    if (best.len < 2) return groups.join(":");
    return (groups.slice(0, best.at).join(":") + "::" + groups.slice(best.at + best.len).join(":")).replace(/^:{3}/, "::");
  }
  const group = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  function calcSubnet(text) {
    const [addr, prefixText] = text.split("/");
    const v4 = v4ToInt(addr);
    if (v4 !== null) {
      const p = prefixText === undefined ? 32 : Number(prefixText);
      if (!Number.isInteger(p) || p < 0 || p > 32) return { error: "Prefix length must be between 0 and 32." };
      const mask = p === 0 ? 0 : (0xffffffff << (32 - p)) >>> 0;
      const net = (v4 & mask) >>> 0;
      const bcast = (net | ~mask) >>> 0;
      const total = 2 ** (32 - p);
      const usable = p >= 31 ? total : total - 2;
      const first = p >= 31 ? net : net + 1;
      const last = p >= 31 ? bcast : bcast - 1;
      return {
        rows: [
          ["CIDR", `${intToV4(net)}/${p}`, { mono: true, copy: true }], ["Network address", intToV4(net), { mono: true }],
          ["Subnet mask", intToV4(mask), { mono: true }], ["Wildcard mask", intToV4(~mask >>> 0), { mono: true }],
          ["Broadcast", p === 32 || p === 31 ? "n/a" : intToV4(bcast), { mono: true }],
          ["First host", intToV4(first), { mono: true }], ["Last host", intToV4(last), { mono: true }],
          ["Total addresses", group(total)], ["Usable hosts", group(usable)],
        ],
      };
    }
    const v6 = v6ToBig(addr);
    if (v6 !== null) {
      const p = prefixText === undefined ? 128 : Number(prefixText);
      if (!Number.isInteger(p) || p < 0 || p > 128) return { error: "Prefix length must be between 0 and 128." };
      const host = (1n << BigInt(128 - p)) - 1n;
      const net = v6 & ~host;
      return {
        rows: [
          ["CIDR", `${bigToV6(net)}/${p}`, { mono: true, copy: true }], ["First address", bigToV6(net), { mono: true }],
          ["Last address", bigToV6(net | host), { mono: true }],
          ["Total addresses", (host + 1n).toLocaleString("en-US")],
          ["/64 subnets inside", p <= 64 ? (1n << BigInt(64 - p)).toLocaleString("en-US") : "less than one"],
        ],
      };
    }
    return { error: "Enter an IPv4 or IPv6 address, optionally followed by /prefix (for example 192.168.1.0/24)." };
  }

  function subnet() {
    const run = (q) => {
      if (!q) { out.innerHTML = ""; return; }
      const r = calcSubnet(q);
      out.innerHTML = r.error ? note(r.error, "bad") : kv(r.rows);
    };
    const input = wireForm(run);
    input.addEventListener("input", () => run(input.value.trim()));
    if (!new URLSearchParams(location.search).get("q")) run(input.value.trim());
  }

  /* ---------- Email checks: DMARC, SPF, DKIM, MX ---------- */

  const badge = (tone, text) => `<span class="badge ${tone}">${esc(tr(text))}</span>`;
  const table = (head, rows) => `<div class="tw"><table><tbody><tr>${head.map((h) => `<th>${esc(tr(h))}</th>`).join("")}</tr>${rows.join("")}</tbody></table></div>`;

  function mailSummary(d, k) {
    const s = d.spf, m = d.dmarc, p = (m.tags && m.tags.p || "none").toLowerCase();
    const keys = (k.dkim && k.dkim.found) || [];
    const active = keys.filter((x) => !x.revoked);
    const spfTone = !s.record || s.error || s.lookups > 10 || s.all === "+" ? "bad" : s.all === "?" || !s.all ? "warn" : "ok";
    const items = [
      ["MX records", d.mx.nullMx ? ["warn", "Null MX: accepts no mail"] : d.mx.hosts.length ? ["ok", d.mx.provider || tr("{n} servers", { n: d.mx.hosts.length })] : ["bad", "None found"]],
      ["SPF", !s.record ? ["bad", "Missing"] : [spfTone, tr("{n} of 10 lookups", { n: s.lookups })]],
      ["DKIM", k.error ? ["warn", "Not checked"] : active.length ? ["ok", tr("{n} active keys found", { n: active.length })] : ["warn", "None found among common selectors"]],
      ["DMARC", !m.record ? ["bad", "Missing"] : p === "reject" || p === "quarantine" ? [m.tags.t === "y" ? "warn" : "ok", tr("p={p}", { p }) + (m.tags.t === "y" ? " (test mode)" : "")] : ["warn", "p=none: monitoring only"]],
      ["MTA-STS", d.mtaSts.record ? [d.mtaSts.policy && d.mtaSts.policy.mode === "enforce" ? "ok" : "warn", d.mtaSts.policy ? tr("mode: {m}", { m: d.mtaSts.policy.mode || "?" }) : "Record found, policy unreadable"] : ["", "Not set up (optional)"]],
      ["TLS reporting", d.tlsRpt ? ["ok", "Set up"] : ["", "Not set up (optional)"]],
      ["BIMI", d.bimi ? ["ok", "Set up"] : ["", "Not set up (optional)"]],
    ];
    // Google's rule for bulk senders: SPF and DKIM, plus a DMARC record (p=none is enough).
    const gmail = s.record && !s.error && s.lookups <= 10 && active.length && m.record;
    return table(["Record type", "Result"], items.map(([name, [tone, text]]) => `<tr><td>${esc(tr(name))}</td><td>${badge(tone, text)}</td></tr>`)) +
      note(gmail ? "Meets Gmail's authentication rules for bulk senders: SPF, DKIM and a DMARC record." : "Does not yet meet Gmail's rules for bulk senders, which require SPF, DKIM and a DMARC record.", gmail ? "ok" : "warn");
  }

  function dmarcSection(d) {
    const m = d.dmarc;
    if (!m.record) {
      return note("No DMARC record found. Anyone can send mail that claims to come from this domain, and receivers get no instructions. Start with the record below and an address you read.", "bad") +
        kv([["Suggested record", `v=DMARC1; p=none; rua=mailto:dmarc-reports@${d.domain}`, { mono: true, copy: true }], ["Publish at", `_dmarc.${d.domain}`, { mono: true }]]);
    }
    const t = m.tags, p = (t.p || "none").toLowerCase();
    const named = { none: "none: no action, reports only", quarantine: "quarantine: treat failures as suspicious (spam folder)", reject: "reject: refuse failing mail" };
    const align = (v) => (v || "r").toLowerCase() === "s" ? "strict" : "relaxed";
    const next = p === "reject" ? "" : m.record.replace(/(^|;\s*)p\s*=\s*\w+/i, `$1p=${p === "none" ? "quarantine" : "reject"}`).replace(/;\s*pct\s*=\s*\d+/i, "") + (t.rua ? "" : `; rua=mailto:dmarc-reports@${d.domain}`);
    const notes = [
      !t.p ? note("The record has no p tag, so receivers treat it as p=none.", "warn") : "",
      p === "none" ? note("p=none only collects reports. It does not stop anyone spoofing this domain. Move to quarantine, then reject, once your reports show every legitimate sender passing.", "warn") : "",
      t.pct !== undefined ? note("The pct tag was removed in RFC 9989 (May 2026), and receivers that follow the new standard ignore it. Use t=y for a test phase instead.", "warn") : "",
      !t.rua ? note("No rua address, so nobody receives the daily aggregate reports that show who sends mail as this domain.", "warn") : "",
      m.multiple ? note("More than one DMARC record was found. Receivers may ignore all of them; keep exactly one.", "bad") : "",
      m.inherited ? note(tr("This domain has no record of its own and uses the policy published at _dmarc.{at}.", { at: m.foundAt })) : "",
    ].join("");
    return notes + kv([
      ["Record", m.record, { mono: true, copy: true }],
      ["Policy (p)", named[p] || p],
      ["Subdomain policy (sp)", t.sp ? named[t.sp.toLowerCase()] || t.sp : tr("Same as p")],
      ["Non-existent subdomains (np)", t.np ? named[t.np.toLowerCase()] || t.np : ""],
      ["Test mode (t)", t.t ? (t.t === "y" ? "Yes: receivers apply one level less than the policy" : "No") : ""],
      ["DKIM alignment", align(t.adkim)],
      ["SPF alignment", align(t.aspf)],
      ["Aggregate reports (rua)", t.rua, { mono: true }],
      ["Failure reports (ruf)", t.ruf, { mono: true }],
      ["Suggested next record", next, { mono: true, copy: true }],
    ]);
  }

  function spfSection(d) {
    const s = d.spf;
    if (!s.record) return note(s.error === "No SPF record found." ? "No SPF record found. Add one TXT record that starts with v=spf1 and lists the services that send mail for this domain." : s.error || "No SPF record found.", "bad");
    const allText = { "-": "-all (fail): unlisted servers are not allowed", "~": "~all (softfail): unlisted servers are probably not allowed", "?": "?all (neutral): no statement", "+": "+all: every server on the internet is allowed" };
    const tree = (n) => `<li><span class="mono">${esc(n.domain)}</span>${n.error ? ` ${badge("warn", n.error)}` : ""}${n.children.length ? `<ul>${n.children.map(tree).join("")}</ul>` : ""}</li>`;
    return [
      s.error ? note(s.error, "bad") : "",
      s.lookups > 10 ? note(tr("This record needs {n} DNS lookups. RFC 7208 allows 10, so receivers return a permanent error and SPF fails.", { n: s.lookups }), "bad") : "",
      s.all === "+" ? note("+all authorizes every server on the internet to send as this domain. Change it to ~all or -all.", "bad") : "",
      !s.all ? note("The record has no all mechanism, so unlisted servers get a neutral result. End it with ~all or -all.", "warn") : "",
      s.usesPtr ? note("The record uses ptr, which RFC 7208 says should not be published. Replace it with ip4, ip6 or include.", "warn") : "",
      s.voidLookups > 2 ? note(tr("{n} lookups returned nothing. RFC 7208 lets receivers stop after two.", { n: s.voidLookups }), "warn") : "",
    ].join("") + kv([
      ["Record", s.record, { mono: true, copy: true }],
      ["DNS lookups", `${s.lookups} / 10`],
      ["Unlisted servers", allText[s.all] || "No all mechanism"],
    ]) + (s.tree.children.length ? `<h4>${esc(tr("Includes"))}</h4><ul class="tree">${s.tree.children.map(tree).join("")}</ul>` : "");
  }

  function dkimSection(k) {
    if (k.error) return note(k.error, "bad");
    const keys = k.dkim.found;
    if (!keys.length) return note(tr("No DKIM key found among {n} common selectors. Find the s= value in the DKIM-Signature header of an email you sent and enter it as the selector.", { n: k.dkim.checked }), "warn");
    return table(["Selector", "Key", "Status"], keys.map((x) => `<tr><td class="mono">${esc(x.selector)}</td><td>${esc(x.keyType.toUpperCase())}${x.approxBits ? ` · ${esc(tr("about {n} bits", { n: x.approxBits }))}` : ""}</td><td>${x.revoked ? badge("bad", "Revoked") : x.testing ? badge("warn", "Testing") : badge("ok", "Active")}</td></tr>`)) +
      (keys.some((x) => x.approxBits && x.approxBits < 2048) ? note("A key under 2048 bits was found. Rotate to a 2048-bit RSA key if your provider supports it.", "warn") : "");
  }

  function mxSection(d) {
    const x = d.mx;
    if (x.nullMx) return note("This domain publishes a null MX record: it does not accept email.", "warn");
    if (!x.hosts.length) return note("No MX records found, so mail to this domain will usually bounce.", "bad");
    return (x.provider ? kv([["Email provider", x.provider]]) : "") + table(["Priority", "Mail server"], x.hosts.map((h) => `<tr><td>${h.preference}</td><td class="mono">${esc(h.host)}</td></tr>`));
  }

  function extrasSection(d) {
    const st = d.mtaSts;
    if (!st.record && !d.tlsRpt && !d.bimi) return note("No MTA-STS, TLS reporting or BIMI records. They are optional: MTA-STS makes other servers require encryption when delivering to you, and BIMI shows your logo in some inboxes.");
    return kv([
      ["MTA-STS record", st.record, { mono: true }],
      ["MTA-STS mode", st.policy && st.policy.mode],
      ["MTA-STS policy", st.policyError],
      ["TLS reporting (TLS-RPT)", d.tlsRpt, { mono: true }],
      ["BIMI", d.bimi, { mono: true }],
    ]);
  }

  function mailCheck(focus) {
    const order = { dmarc: ["dmarc", "spf", "dkim", "mx"], spf: ["spf", "dmarc", "dkim", "mx"], dkim: ["dkim", "spf", "dmarc", "mx"], mx: ["mx", "spf", "dmarc", "dkim"] }[focus];
    const titles = { dmarc: "DMARC", spf: "SPF", dkim: "DKIM", mx: "MX records" };
    wireForm(async (q) => {
      if (!q) return;
      pushQuery(q);
      loading("Checking DNS records…");
      const domain = encodeURIComponent(q);
      const sel = $("#sel") ? $("#sel").value.trim() : "";
      try {
        const [d, k] = await Promise.all([
          api("/api/mail?domain=" + domain),
          api(`/api/mail?part=dkim&domain=${domain}${sel ? "&selector=" + encodeURIComponent(sel) : ""}`).catch((err) => ({ error: err.message })),
        ]);
        const body = { dmarc: () => dmarcSection(d), spf: () => spfSection(d), dkim: () => dkimSection(k), mx: () => mxSection(d) };
        out.innerHTML = `<p style="margin:0 0 12px"><span class="badge">${esc(d.domain)}</span></p>` + mailSummary(d, k) +
          order.map((id) => `<h3>${esc(tr(titles[id]))}</h3>${body[id]()}`).join("") +
          `<h3>${esc(tr("MTA-STS, TLS reporting and BIMI"))}</h3>${extrasSection(d)}`;
      } catch (err) { out.innerHTML = note(err.message, "bad"); }
    });
  }

  /* ---------- DNS propagation ---------- */

  const ttlText = (s) => s >= 3600 ? tr("{h} h {m} min", { h: Math.floor(s / 3600), m: Math.floor((s % 3600) / 60) }) : s >= 60 ? (s % 60 ? tr("{m} min {s} s", { m: Math.floor(s / 60), s: s % 60 }) : tr("{m} min", { m: s / 60 })) : tr("{s} s", { s });

  function propagation() {
    const clean = (v) => String(v || "").trim().replace(/\.$/, "").replace(/^"|"$/g, "").toLowerCase();
    const run = async (q) => {
      if (!q) return;
      pushQuery(q);
      loading("Asking 12 resolvers…");
      const type = $("#type").value;
      const expect = clean($("#expect").value);
      try {
        const d = await api(`/api/propagation?name=${encodeURIComponent(q)}&type=${type}`);
        const answered = d.results.filter((r) => r.ok);
        const values = (r) => r.answers.filter((a) => a.type === d.type).map((a) => a.data);
        const key = (r) => values(r).map(clean).sort().join(" | ");
        const counts = {};
        answered.forEach((r) => { const k = key(r); if (k) counts[k] = (counts[k] || 0) + 1; });
        const majority = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
        const hasNew = (r) => expect && values(r).some((v) => clean(v) === expect || clean(v).endsWith(" " + expect));
        const status = (r) => !r.ok ? ["", r.error || "No answer"]
          : !values(r).length ? ["warn", r.rcode === "NXDOMAIN" ? "No record (NXDOMAIN)" : "No record"]
          : expect ? (hasNew(r) ? ["ok", "New value"] : ["warn", "Old value"])
          : key(r) === majority ? ["ok", "Same as most"] : ["warn", "Different"];
        const rows = d.results.map((r) => {
          const [tone, text] = status(r);
          const ttl = r.ok && r.answers.length ? Math.min(...r.answers.map((a) => a.ttl)) : null;
          return `<tr><td>${esc(r.label)}<br><small class="mono">${esc(r.ip)}</small></td><td class="mono">${values(r).map(esc).join("<br>") || "–"}</td><td>${ttl === null ? "–" : esc(ttlText(ttl))}</td><td>${badge(tone, text)}</td></tr>`;
        });
        let summary;
        if (expect) {
          const done = answered.filter(hasNew);
          const waiting = answered.filter((r) => values(r).length && !hasNew(r));
          const eta = waiting.length ? Math.max(...waiting.map((r) => Math.min(...r.answers.map((a) => a.ttl)))) : 0;
          summary = done.length === answered.length
            ? note(tr("All {n} resolvers that answered return the new value.", { n: answered.length }), "ok")
            : note(tr("{done} of {n} resolvers return the new value.", { done: done.length, n: answered.length }) + (eta ? " " + tr("The others should ask again within {t}.", { t: ttlText(eta) }) : ""), done.length ? "warn" : "bad");
        } else {
          const same = majority ? counts[majority] : 0;
          summary = note(tr("{same} of {n} resolvers return the same answer.", { same, n: answered.length }) + (same < answered.length ? " " + tr("Enter the value you expect to see which ones have your change.") : ""), same === answered.length && same ? "ok" : "warn");
        }
        out.innerHTML = summary + table(["Resolver", d.type, "Cache left", "Status"], rows) +
          `<p><button class="btn sm" type="button" id="again">${esc(tr("Check again"))}</button> <small>${esc(tr("Checked at {t}", { t: new Date(d.checkedAt).toLocaleTimeString() }))}</small></p>`;
        $("#again").addEventListener("click", () => run(q));
      } catch (err) { out.innerHTML = note(err.message, "bad"); }
    };
    wireForm(run);
  }

  /* ---------- Download time calculator ---------- */

  const BYTES = { MB: 1e6, GB: 1e9, TB: 1e12, MiB: 2 ** 20, GiB: 2 ** 30 };
  const BITRATE = { Mbps: 1e6, Gbps: 1e9, "MB/s": 8e6 };
  function durationText(sec) {
    if (!Number.isFinite(sec)) return "–";
    if (sec < 1) return tr("under a second");
    const d = Math.floor(sec / 86400), h = Math.floor((sec % 86400) / 3600), m = Math.floor((sec % 3600) / 60), s = Math.round(sec % 60);
    return [d && tr("{n} d", { n: d }), h && tr("{n} h", { n: h }), m && tr("{n} min", { n: m }), !d && s && tr("{n} s", { n: s })].filter(Boolean).join(" ");
  }
  const mbps = (n) => n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 2)} Gbps` : `${n.toFixed(n >= 100 ? 0 : 1)} Mbps`;

  function download() {
    const size = $("#size"), sunit = $("#sunit"), speed = $("#speed"), vunit = $("#vunit");
    // The speed test links here with its result (?speed=); nothing is stored in the browser.
    const params = new URLSearchParams(location.search);
    if (Number(params.get("speed")) > 0) { speed.value = params.get("speed"); vunit.value = "Mbps"; }
    if (Number(params.get("size")) > 0) size.value = params.get("size");
    const calc = () => {
      const bits = Number(size.value) * BYTES[sunit.value] * 8;
      const rate = Number(speed.value) * BITRATE[vunit.value];
      if (!(bits > 0) || !(rate > 0)) { out.innerHTML = note("Enter a file size and a speed above zero."); return; }
      const sizes = [["100 MB", 1e8], ["1 GB", 1e9], ["5 GB", 5e9], ["25 GB", 25e9], ["100 GB", 1e11]];
      const deadlines = [["1 min", 60], ["10 min", 600], ["1 h", 3600], ["8 h", 28800]];
      out.innerHTML =
        `<p class="ip" style="font-size:clamp(1.6rem,6vw,3rem);margin:8px 0 4px">${esc(durationText(bits / rate))}</p>` +
        note(tr("{size} {unit} at {speed} {vunit}, which is {mbs} MB/s. Real downloads are usually a little slower than the line speed.", { size: size.value, unit: sunit.value, speed: speed.value, vunit: vunit.value, mbs: (rate / 8e6).toFixed(rate >= 8e7 ? 0 : 1) })) +
        `<h3>${esc(tr("Other sizes at this speed"))}</h3>` + table(["File size", "Time"], sizes.map(([label, b]) => `<tr><td>${label}</td><td>${esc(durationText((b * 8) / rate))}</td></tr>`)) +
        `<h3>${esc(tr("Speed needed for this file"))}</h3>` + table(["Finish within", "Speed needed"], deadlines.map(([label, sec]) => `<tr><td>${esc(tr(label))}</td><td>${esc(mbps(bits / sec / 1e6))}</td></tr>`));
    };
    $("#f").addEventListener("submit", (e) => { e.preventDefault(); calc(); });
    [size, sunit, speed, vunit].forEach((el) => el.addEventListener("input", calc));
    document.querySelectorAll("[data-size]").forEach((b) => b.addEventListener("click", () => { size.value = b.dataset.size; sunit.value = "GB"; calc(); }));
    calc();
  }

  /* ---------- MAC address lookup ---------- */

  // Vendor data comes from the IEEE registries, cut into small files by prefix (scripts/gen-oui.ts), so a lookup
  // downloads a few kilobytes and the addresses typed here never leave the browser.
  const ouiFiles = new Map();
  const ouiFile = (path) => {
    if (!ouiFiles.has(path)) ouiFiles.set(path, fetch(path).then((r) => (r.ok ? r.json() : null)).catch(() => null));
    return ouiFiles.get(path);
  };
  async function macVendor(hex) {
    const meta = (await ouiFile("/oui/meta.json")) || { split: [] };
    let key = hex.slice(0, 2).toLowerCase();
    while (meta.split.includes(key) && key.length < 8) key += (hex[key.length] || "0").toLowerCase();
    const shard = await ouiFile(`/oui/${key.slice(0, 2)}${key.slice(2).replace(/(.)/g, "/$1")}.json`);
    if (!shard) return { error: true };
    // Longest match first: a 36-bit MA-S block can sit inside a 24-bit prefix shared by many companies.
    for (const [size, len, block] of [["S", 9, "MA-S (36-bit)"], ["M", 7, "MA-M (28-bit)"], ["L", 6, "MA-L (24-bit)"]]) {
      const hit = hex.length >= len && shard[size][hex.slice(0, len)];
      if (hit) return { org: hit[0], country: hit[1], block, prefix: hex.slice(0, len) };
    }
    const shared = Object.keys(shard.M).concat(Object.keys(shard.S)).filter((k) => k.startsWith(hex.slice(0, 6))).length;
    return { shared };
  }

  // Full addresses in colon, hyphen, Cisco-dot or bare form, as printed by arp -a, ip neigh and router pages.
  const MAC_RE = /\b(?:[0-9a-f]{1,2}[:-]){5}[0-9a-f]{1,2}\b|\b[0-9a-f]{4}\.[0-9a-f]{4}\.[0-9a-f]{4}\b|\b[0-9a-f]{12}\b/gi;
  function macsIn(text) {
    const found = (text.match(MAC_RE) || []).map((m) =>
      /[:-]/.test(m) ? m.split(/[:-]/).map((o) => o.padStart(2, "0")).join("") : m.replace(/\./g, ""));
    // A lone prefix (B8:27:EB, B8-27-EB, B827EB, or 7 and 9 digit MA-M and MA-S prefixes) is looked up as an OUI.
    if (!found.length) {
      const bare = text.trim().replace(/[:.\s-]/g, "");
      if (/^[0-9a-f]{6,11}$/i.test(bare)) found.push(bare);
    }
    return [...new Set(found.map((m) => m.toUpperCase()))].slice(0, 1000);
  }

  function macFacts(hex) {
    const first = parseInt(hex.slice(0, 2), 16);
    const full = hex.length === 12;
    const pairs = full ? hex.match(/../g) : [];
    const special = hex === "FFFFFFFFFFFF" ? "Broadcast address (every device on the network)"
      : hex.startsWith("01005E") ? "IPv4 multicast address"
      : hex.startsWith("3333") ? "IPv6 multicast address"
      : hex === "000000000000" ? "All zeros (unset or placeholder)" : "";
    let linkLocal = "";
    if (full && !(first & 1)) {
      // Modified EUI-64 (RFC 4291): flip the universal/local bit and put FF:FE in the middle.
      const b = pairs.map((p) => parseInt(p, 16));
      const g = [((b[0] ^ 2) << 8) | b[1], (b[2] << 8) | 0xff, 0xfe00 | b[3], (b[4] << 8) | b[5]].map((n) => n.toString(16));
      linkLocal = "fe80::" + (g[0] === "0" ? g.slice(1) : g).join(":");
    }
    return {
      group: Boolean(first & 1),
      local: Boolean(first & 2),
      special,
      formats: full ? [pairs.join(":"), pairs.join("-"), hex.toLowerCase().match(/..../g).join("."), hex] : [],
      linkLocal,
    };
  }

  const regionName = (code) => { try { return new Intl.DisplayNames([LANG], { type: "region" }).of(code) || code; } catch { return code; } };
  const macType = (f) => f.special || (f.group ? "Multicast (group) address" : f.local ? "Locally administered: likely a randomized private address" : "Universally administered (assigned by the manufacturer)");

  function mac() {
    const run = async (text) => {
      const list = macsIn(text);
      if (!list.length) { out.innerHTML = note("No MAC address found. Enter something like B8:27:EB:12:34:56, B8-27-EB or b827.eb12.3456.", "bad"); return; }
      if (list.length === 1) pushQuery(list[0]);
      loading("Looking up vendors…");
      const rows = await Promise.all(list.map(async (hex) => ({ hex, facts: macFacts(hex), v: await macVendor(hex) })));
      const meta = (await ouiFile("/oui/meta.json")) || {};
      const pooled = (v) => v.org === "IEEE Registration Authority";
      const vendorText = (r) => r.facts.special ? tr("Not applicable") : pooled(r.v) ? tr("Shared IEEE block (enter the full address)") : r.v.org ? r.v.org : r.v.error ? tr("Vendor data unavailable") : r.facts.local && !r.facts.group ? tr("None (randomized or locally assigned)") : tr("Not in the IEEE registry");
      const dated = meta.updated ? note(tr("IEEE registry data from {date}.", { date: fmtDate(meta.updated) })) : "";

      if (rows.length === 1) {
        const { hex, facts: f, v } = rows[0];
        const headline = f.special ? `<span class="badge">${esc(tr(f.special))}</span>`
          : pooled(v) ? `<span class="badge warn">${esc(tr("Shared IEEE block"))}</span>`
          : v.org ? `<span class="badge ok">${esc(v.org)}</span>`
          : f.local && !f.group ? `<span class="badge warn">${esc(tr("Randomized or locally administered"))}</span>`
          : `<span class="badge warn">${esc(tr("Unknown vendor"))}</span>`;
        const explain = pooled(v)
          ? note("IEEE keeps this 24-bit prefix and splits it into smaller MA-M or MA-S blocks for other companies. Enter the full MAC address to see which company the device belongs to.", "warn")
          : !v.org && f.local && !f.group
          ? note("The locally administered bit is set, so this address was not assigned by a manufacturer. Phones and laptops use addresses like this as private Wi-Fi addresses (Android 10 and later, iOS 14 and later), and software can set them too. No lookup can name a vendor for it.", "warn")
          : !v.org && v.shared ? note(tr("This 24-bit prefix is shared: IEEE assigned {n} smaller blocks inside it. Enter the full MAC address to see which company it belongs to.", { n: v.shared }), "warn")
          : !v.org && !v.error ? note("This prefix is not in the IEEE public registry. It may be unassigned, or assigned to a company that asked IEEE to keep the listing private.") : "";
        out.innerHTML = `<p style="margin:0 0 12px">${headline}</p>${explain}` + kv([
          ["Vendor", pooled(v) ? "" : v.org],
          ["Country", v.country && !pooled(v) ? regionName(v.country) : ""],
          ["Assigned block", v.block ? `${v.block} · ${v.prefix.match(/.{1,2}/g).join(":")}` : "", {}],
          ["Address type", macType(f)],
          ["Colon format", f.formats[0], { mono: true, copy: true }],
          ["Hyphen format", f.formats[1], { mono: true, copy: true }],
          ["Cisco format", f.formats[2], { mono: true, copy: true }],
          ["Bare hex", f.formats[3], { mono: true, copy: true }],
          ["IPv6 link-local (EUI-64)", f.linkLocal, { mono: true, copy: true }],
        ]) + dated;
        return;
      }

      const found = rows.filter((r) => r.v.org && !pooled(r.v)).length;
      const random = rows.filter((r) => !r.v.org && r.facts.local && !r.facts.group).length;
      const csv = ["MAC,Vendor,Country,Type", ...rows.map((r) => [r.facts.formats[0] || r.hex, r.v.org || "", r.v.country || "", macType(r.facts)].map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))].join("\n");
      out.innerHTML =
        note(tr("{n} addresses: {found} vendors found, {random} randomized or locally administered.", { n: rows.length, found, random }), found ? "ok" : "warn") +
        `<div class="tw"><table><tbody><tr><th>${esc(tr("MAC address"))}</th><th>${esc(tr("Vendor"))}</th><th>${esc(tr("Type"))}</th></tr>` +
        rows.map((r) => `<tr><td class="mono">${esc(r.facts.formats[0] || r.hex)}</td><td>${esc(vendorText(r))}</td><td>${esc(tr(r.facts.special || (r.facts.group ? "Multicast" : r.facts.local ? "Randomized / local" : "Universal")))}</td></tr>`).join("") +
        `</tbody></table></div><p><button class="btn sm" type="button" data-copy="${esc(csv)}">${esc(tr("Copy as CSV"))}</button></p>` + dated;
    };
    wireForm(run);
  }

  /* ---------- proxy checker ---------- */
  function proxyChecker() {
    const form = $("#f");
    const go = $("#go");
    const ms = (n) => (n === undefined || n === null ? "–" : `${n} ms`);
    const place = (e) => [e.city, e.region && e.region !== e.city ? e.region : "", countryName(e.country, e.countryCode)].filter(Boolean).join(", ");

    const renderFailure = (d) => {
      const er = d.error || {};
      out.innerHTML =
        `<p style="margin:0 0 12px"><span class="badge bad">${esc(tr("Not working"))}</span></p>` +
        note(er.message || "The proxy could not be reached.", "bad") +
        (er.hint ? note(er.hint) : "") +
        kv([
          ["Proxy", d.proxy ? `${d.proxy.host}:${d.proxy.port}` : "", { mono: true }],
          ["Credentials sent", d.proxy ? (d.proxy.authenticated ? "Yes" : "No") : ""],
          ["Error", er.status ? `HTTP ${er.status}` : er.code, { mono: true }],
        ]) +
        `<p class="note">${tr("Not sure what that means? Read {link}.", { link: `<a href="/learn/proxy-error-407-403-502" hreflang="en">${esc(tr("proxy errors 407, 403 and 502: causes and fixes"))}</a>` })}</p>`;
    };

    const renderSuccess = (d) => {
      const e = d.exit;
      const stable = d.successes === d.total;
      const listed = e.blocklists.listed;
      const speedOk = d.speed && d.speed.mbps !== undefined;
      const failedRounds = [...new Set(d.rounds.filter((r) => !r.ok).map((r) => r.error))];

      const stats =
        `<div class="stats">` +
        `<div class="stat"><span>${esc(tr("Download speed"))}</span><b>${speedOk ? esc(d.speed.mbps) + " Mbps" : esc(tr("n/a"))}</b></div>` +
        `<div class="stat"><span>${esc(tr("Time to first byte"))}</span><b>${esc(ms(d.timing.ttfbMs))}</b></div>` +
        `<div class="stat"><span>${esc(tr("Success rate"))}</span><b>${d.successes}/${d.total}</b></div>` +
        `<div class="stat"><span>${esc(tr("Exit IPs seen"))}</span><b>${d.uniqueIps}</b></div>` +
        `</div>`;

      const identity = kv([
        ["Protocol", d.protocol === "socks5" ? "SOCKS5" : "HTTP / HTTPS (CONNECT)"],
        ["Proxy", `${d.proxy.host}:${d.proxy.port}${d.proxy.ip !== d.proxy.host ? ` (${d.proxy.ip})` : ""}`, { mono: true }],
        ["Sign-in", d.proxy.authenticated ? "Username and password accepted" : "No credentials needed"],
        ["Exit IP", e.ip, { mono: true, copy: true }],
        ["Hostname", e.hostname, { mono: true }],
        ["Location", place(e)],
        ["Timezone", e.timezone],
        ["Network", e.org ? `${e.org}${e.asn ? ` (AS${e.asn})` : ""}` : ""],
        ["Network type", e.network.label],
        ["Tor exit node", e.tor === null ? "Could not check" : e.tor ? "Yes" : "No"],
        [
          "Blocklists",
          !e.blocklists.checked
            ? "Could not check"
            : listed.length
              ? tr("Listed on {n} of {total}: {names}", { n: listed.length, total: e.blocklists.checked, names: listed.join(", ") })
              : tr("Not listed on any of {total} checked", { total: e.blocklists.checked }),
        ],
        [
          "Rotation",
          d.rotating
            ? tr("Rotating: {ips} different IPs in {n} requests", { ips: d.uniqueIps, n: d.successes })
            : tr("Same exit IP in all {n} requests (static or sticky)", { n: d.successes }),
        ],
        ...(d.rotating ? [["Exit IPs seen", d.exitIps.join("\n"), { mono: true }]] : []),
      ]);

      const timing = kv([
        ["Connect to proxy", ms(d.timing.connectMs)],
        ["Proxy handshake", ms(d.timing.tunnelMs)],
        ["Time to first byte", ms(d.timing.ttfbMs)],
        ["Whole request", ms(d.timing.totalMs)],
        [
          "Download sample",
          speedOk
            ? tr(d.speed.complete ? "{mb} MB in {ms} ms" : "{mb} MB in {ms} ms (stopped early)", { mb: (d.speed.bytes / 1e6).toFixed(2), ms: d.speed.ms })
            : (d.speed && d.speed.error) || "Not measured",
        ],
      ]);

      let target = "";
      if (d.target) {
        const t = d.target;
        if (t.error) target = note(`${t.host}: ${tr(t.error)}`, "bad");
        else if (t.blocked) target = note(tr("{host} answered HTTP {status} through this proxy in {ms} ms. That usually means the site is blocking or limiting this proxy.", { host: t.host, status: t.status, ms: t.ms }), "bad");
        else if (t.status >= 400) target = note(tr("{host} answered HTTP {status} in {ms} ms.", { host: t.host, status: t.status, ms: t.ms }), "warn");
        else target = note(tr("{host} answered HTTP {status}{redirect} in {ms} ms. The proxy can reach this site.", { host: t.host, status: t.status, ms: t.ms, redirect: t.redirect ? " " + tr("(redirects to {url})", { url: t.redirect }) : "" }), "ok");
      }

      out.innerHTML =
        `<p style="margin:0 0 6px"><span class="badge ${stable ? "ok" : "warn"}">${esc(stable ? tr("Working") : tr("Unstable: {n} of {total} requests succeeded", { n: d.successes, total: d.total }))}</span></p>` +
        stats +
        (failedRounds.length ? note(tr("Some requests failed: {errors}", { errors: failedRounds.map((m) => tr(m)).join(" ") }), "warn") : "") +
        `<h2 class="lbl">${esc(tr("Exit IP and reputation"))}</h2>` + identity +
        (e.network.detail ? note(e.network.detail) : "") +
        `<h2 class="lbl">${esc(tr("Timing"))}</h2>` + timing +
        (target ? `<h2 class="lbl">${esc(tr("Website test"))}</h2>` + target : "") +
        note(tr("Measured from Cloudflare's network near you{edge}, not from your device, and from one 1 MB sample, so use the numbers to compare proxies with each other. Tests run over encrypted HTTPS tunnels, so the transparent, anonymous and elite labels, which depend on HTTP headers, do not apply.", { edge: d.edge ? ` (${d.edge})` : "" }));
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const proxy = $("#q").value.trim();
      if (!proxy) return;
      go.disabled = true;
      go.textContent = tr("Checking…");
      loading("Connecting through your proxy. This usually takes 5 to 15 seconds…");
      try {
        // Credentials go in the POST body only: never in the URL, history or storage.
        const res = await fetch("/api/proxy", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            proxy,
            protocol: $("#ptype").value,
            username: $("#pu").value,
            password: $("#pp").value,
            target: $("#pt").value.trim(),
          }),
        });
        let d = null;
        try { d = await res.json(); } catch { /* not JSON */ }
        if (res.status === 429) throw new Error("Too many checks in a row. Please wait a minute and try again.");
        if (!res.ok) throw new Error((d && d.error) || `Request failed (${res.status})`);
        if (d.ok) renderSuccess(d); else renderFailure(d);
      } catch (err) {
        out.innerHTML = note(err.message, "bad");
      } finally {
        go.disabled = false;
        go.textContent = tr("Check proxy");
      }
    });
  }

  /* ---------- Analytics: Google Analytics 4, loaded only after the visitor accepts ---------- */

  const GA_ID = "G-3YE43L08F0";
  const CHOICE_KEY = "ipcomet-analytics";
  const readChoice = () => { try { return localStorage.getItem(CHOICE_KEY); } catch { return null; } };
  const saveChoice = (v) => { try { localStorage.setItem(CHOICE_KEY, v); } catch { /* the choice just will not be remembered */ } };

  function loadAnalytics() {
    // Only the real site is measured, so local tests and previews never add to the numbers.
    if (window.__ga || location.hostname !== "ipcomet.com") return;
    window.__ga = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(tag);
    gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    gtag("js", new Date());
    let referrer = "";
    try { referrer = document.referrer ? new URL(document.referrer).origin + "/" : ""; } catch { /* no usable referrer */ }
    gtag("config", GA_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_flags: "SameSite=Lax;Secure",
      // The address without its query string, because lookups put the IP being looked up after the "?".
      page_location: location.origin + location.pathname,
      page_referrer: referrer,
    });
  }

  /** Stops measurement and removes the analytics cookies, for a visitor who declines or changes their mind. */
  function withdraw() {
    window["ga-disable-" + GA_ID] = true;
    const names = document.cookie.split(";").map((c) => c.split("=")[0].trim()).filter((n) => n === "_ga" || n.startsWith("_ga_"));
    for (const n of names) for (const d of [location.hostname, "." + location.hostname]) document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
  }

  function showConsent() {
    const old = document.getElementById("consent");
    if (old) old.remove();
    const privacy = (LANG === "en" ? "" : "/" + LANG) + "/privacy";
    const box = document.createElement("div");
    box.id = "consent";
    box.className = "consent";
    box.setAttribute("role", "region");
    box.setAttribute("aria-label", tr("Analytics consent"));
    // Both buttons look the same on purpose: declining must be as easy and as visible as accepting.
    box.innerHTML =
      `<p>${esc(tr("Count visits with Google Analytics? It uses cookies. Declining changes nothing else on the site."))} <a href="${privacy}">${esc(tr("Privacy"))}</a></p>` +
      `<div class="cbtns"><button type="button" class="btn" data-choice="denied">${esc(tr("Decline"))}</button><button type="button" class="btn" data-choice="granted">${esc(tr("Accept"))}</button></div>`;
    box.addEventListener("click", (e) => {
      const button = e.target.closest("button[data-choice]");
      if (!button) return;
      saveChoice(button.dataset.choice);
      box.remove();
      if (button.dataset.choice === "granted") { window["ga-disable-" + GA_ID] = false; loadAnalytics(); } else withdraw();
    });
    document.body.appendChild(box);
  }

  function initConsent() {
    document.querySelectorAll("[data-consent]").forEach((b) => b.addEventListener("click", showConsent));
    if (location.hostname !== "ipcomet.com") return;
    // A Global Privacy Control signal counts as a "no" until the visitor says otherwise.
    const choice = readChoice() || (navigator.globalPrivacyControl === true ? "denied" : null);
    if (choice === "granted") loadAnalytics();
    else if (choice === "denied") withdraw();
    else showConsent();
  }

  /* ---------- boot ---------- */
  const pages = { ip: home, lookup, dns, "reverse-dns": reverseDns, reputation, "proxy-checker": proxyChecker, ping, whois, browser: browserInfo, port, speed, webrtc, subnet, mac,
    dmarc: () => mailCheck("dmarc"), spf: () => mailCheck("spf"), dkim: () => mailCheck("dkim"), mx: () => mailCheck("mx"), propagation, download };
  const start = () => { initConsent(); if (pages[page]) pages[page](); };
  if (LANG === "en") start();
  else {
    // The dictionary is a small cached file; if it cannot be loaded the tools simply run in English.
    fetch(`/i18n/${LANG}.json`)
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}))
      .then((d) => { DICT = d; start(); });
  }
})();
