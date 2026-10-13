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
    ipify("https://api4.ipify.org?format=json").then((ip) => {
      show("#v4", ip);
      if (isLocal && ip) {
        // Running on a local network or dev server: show the address websites actually see.
        ipEl.textContent = ip;
        document.querySelector("[data-copy]").dataset.copy = ip;
      }
    });
    ipify("https://api6.ipify.org?format=json").then((ip) => show("#v6", ip));

    api("/api/lookup?q=" + encodeURIComponent(own))
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
  const OWNLAT = { url: (i) => `/api/ping?i=${i}&r=${Math.random()}`, init: {}, colo: async (res) => res.headers.get("x-colo") || "" };
  let latTarget = null;
  async function latencyTarget() {
    if (latTarget) return latTarget;
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 3000);
    try {
      const res = await fetch(CFLAT.url(), { cache: "no-store", signal: ctl.signal, ...CFLAT.init });
      if (!res.ok) throw new Error("unavailable");
      latTarget = CFLAT;
    } catch { latTarget = OWNLAT; }
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
        const t = performance.now();
        try {
          const res = await fetch(target.url(i), { cache: "no-store", signal: ctl.signal, ...target.init });
          const ms = performance.now() - t;
          colo = (await target.colo(res)) || colo;
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
    const setLive = (n, unit = "Mbps") => { $("#live").innerHTML = `${fmt(n)}<small>${unit}</small>`; };
    const phase = (text, p) => { $("#phase").textContent = tr(text); if (p !== undefined) $("#prog").style.width = p + "%"; };
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    async function latency() {
      const sample = async (target) => {
        const times = [];
        let colo = "";
        for (let i = 0; i < 12; i++) {
          const t = performance.now();
          const res = await fetch(target.url(i), { cache: "no-store", ...target.init });
          times.push(performance.now() - t);
          colo = (await target.colo(res)) || colo;
          phase("Measuring latency…", (i / 12) * 15);
        }
        return { times, colo };
      };
      let r;
      try { r = await sample(await latencyTarget()); } catch { latTarget = OWNLAT; r = await sample(OWNLAT); }
      const chrono = r.times.slice(2); // drop connection warm-up
      const sorted = chrono.slice().sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      // Jitter is how much the delay changes from one check to the next, so it needs the checks in the order they ran.
      const jitter = chrono.slice(1).reduce((s, v, i) => s + Math.abs(v - chrono[i]), 0) / (chrono.length - 1);
      $("#lat").textContent = `${median.toFixed(0)} ms`;
      $("#jit").textContent = `${jitter.toFixed(1)} ms`;
      if (r.colo) $("#colo").textContent = ` (${r.colo})`;
    }

    /*
      Where the bytes come from. Cloudflare's own speed-test servers are built to move data at line rate and allow
      cross-origin use, and the browser opens several parallel connections to them, as Ookla and fast.com do. Pulling
      the test data through our own Worker capped the result far below the real speed, so it is only the fallback.
    */
    const CHUNK = 26214400;
    const CFSRC = { down: () => `${CF}/__down?bytes=${CHUNK}&r=${Math.random()}`, up: `${CF}/__up`, init: { credentials: "omit" } };
    const OWNSRC = { down: () => `/api/speed/down?bytes=${CHUNK}&r=${Math.random()}`, up: "/api/speed/up", init: {} };
    let src = CFSRC;
    let primary = CFSRC;

    async function pickSource() {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 4000);
      try {
        const res = await fetch(`${CF}/__down?bytes=1000&r=${Math.random()}`, { cache: "no-store", credentials: "omit", signal: ctl.signal });
        if (!res.ok) throw new Error("unavailable");
        await res.arrayBuffer();
        primary = CFSRC;
      } catch { primary = OWNSRC; }
      clearTimeout(timer);
    }

    /*
      Samples are taken every 250 ms. The first 1.5 s (TCP ramp-up) is ignored, then the slowest 20% and the fastest 5%
      of the samples are dropped before averaging. One stalled stream or a request restart cannot drag the result down,
      and one burst cannot inflate it, which is how the big speed tests arrive at a steady-state figure.
    */
    const steadyMbps = (rates, fallback) => {
      if (rates.length < 8) return fallback;
      const s = rates.slice().sort((a, b) => a - b);
      const kept = s.slice(Math.floor(s.length * 0.2), s.length - Math.floor(s.length * 0.05));
      return kept.reduce((a, b) => a + b, 0) / kept.length;
    };

    function sampler(start, warmup, onLive) {
      const rates = [];
      let last = { t: 0, b: 0 }, total = 0;
      const recent = [];
      return {
        add: (n) => { total += n; },
        get total() { return total; },
        rates,
        tick() {
          const t = performance.now() - start;
          const dt = t - last.t;
          if (dt < 50) return t;
          const rate = mbps(total - last.b, dt);
          if (t > warmup) rates.push(rate);
          last = { t, b: total };
          recent.push(rate);
          if (recent.length > 4) recent.shift();
          onLive(recent.reduce((a, b) => a + b, 0) / recent.length);
          return t;
        },
      };
    }

    async function download() {
      const DURATION = 8000, STREAMS = 6;
      const ctl = new AbortController();
      const start = performance.now();
      const s = sampler(start, 1500, setLive);
      const tick = setInterval(() => phase("Testing download…", 15 + Math.min(s.tick() / DURATION, 1) * 45), 250);
      const worker = async () => {
        while (performance.now() - start < DURATION) {
          try {
            const res = await fetch(src.down(), { signal: ctl.signal, cache: "no-store", ...src.init });
            if (!res.ok) return;
            const reader = res.body.getReader();
            for (;;) {
              const { done, value } = await reader.read();
              if (done) break;
              s.add(value.byteLength);
              if (performance.now() - start >= DURATION) { ctl.abort(); return; }
            }
          } catch { return; }
        }
      };
      await Promise.all(Array.from({ length: STREAMS }, worker));
      clearInterval(tick);
      // Streams that died early (for example a rate-limited server) make the figure meaningless.
      if (s.total < 100000 || performance.now() - start < DURATION - 1000) throw new Error("no data");
      const result = steadyMbps(s.rates, mbps(s.total, performance.now() - start));
      $("#down").textContent = `${fmt(result)} Mbps`;
      setLive(result);
    }

    async function upload() {
      const DURATION = 6000, STREAMS = 6, BLOCK = 65536;
      const block = new Uint8Array(BLOCK);
      crypto.getRandomValues(block);
      const body = new Blob(Array.from({ length: 256 }, () => block)); // 16 MB, so a fast line needs few requests
      const start = performance.now();
      const s = sampler(start, 1500, setLive);
      const open = new Set();
      const tick = setInterval(() => phase("Testing upload…", 60 + Math.min(s.tick() / DURATION, 1) * 40), 250);
      // XMLHttpRequest reports how many bytes have actually left, so partly sent requests count too.
      const sendOne = () => new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        let seen = 0, ok = false;
        open.add(xhr);
        xhr.open("POST", src.up);
        xhr.upload.onprogress = (e) => { s.add(e.loaded - seen); seen = e.loaded; };
        xhr.onload = () => { ok = xhr.status >= 200 && xhr.status < 300; };
        xhr.onloadend = () => { open.delete(xhr); resolve(ok); };
        xhr.send(body);
      });
      const worker = async () => {
        while (performance.now() - start < DURATION) {
          if (!(await sendOne())) return;
        }
      };
      const stopper = setTimeout(() => open.forEach((x) => x.abort()), DURATION);
      await Promise.all(Array.from({ length: STREAMS }, worker));
      clearTimeout(stopper);
      clearInterval(tick);
      if (s.total < 100000 || performance.now() - start < DURATION - 1000) throw new Error("no data");
      const result = steadyMbps(s.rates, mbps(s.total, performance.now() - start));
      $("#up").textContent = `${fmt(result)} Mbps`;
      setLive(result);
    }

    go.addEventListener("click", async () => {
      go.disabled = true;
      ["down", "up", "lat", "jit"].forEach((id) => ($("#" + id).textContent = "–"));
      setLive(0);
      try {
        await latency();
        await pickSource();
        // Cloudflare's speed servers limit how much one IP address may transfer per hour. If they refuse, the same step
        // runs again against our own server instead of failing.
        // Download and upload are limited separately, so each step picks its own source.
        const step = async (run) => {
          src = primary;
          try { await run(); } catch (e) { if (primary === OWNSRC) throw e; src = OWNSRC; await run(); }
        };
        await step(download);
        await sleep(300);
        await step(upload);
        phase("Done", 100);
      } catch {
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
  const pages = { ip: home, lookup, dns, "reverse-dns": reverseDns, reputation, "proxy-checker": proxyChecker, ping, whois, browser: browserInfo, port, speed, webrtc, subnet };
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
