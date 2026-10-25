import { LOCALE_DATA, localizedPath, type Locale } from "./i18n";

export interface Tool {
  id: string;
  path: string;
  name: string;
  desc: string;
  title: string;
  description: string;
  /** Published in English only until its text is translated; other languages link to the English page. */
  enOnly?: boolean;
}

export const TOOLS: Tool[] = [
  {
    id: "ip",
    path: "/",
    name: "My IP",
    desc: "Your public IP address, location and ISP",
    title: "What Is My IP Address? Free IP Checker",
    description: "What's my IP? Check your public IP address instantly: approximate location, ISP, ASN, IPv4 and IPv6. Free IP checker, no ads, no sign-up.",
  },
  {
    id: "lookup",
    path: "/lookup",
    name: "IP Lookup",
    desc: "Location, ISP and ASN of any IP or domain",
    title: "IP Lookup and IP Checker: Location, ISP and Owner of Any IP",
    description: "Free IP checker and lookup tool. Enter any IP address or domain to see its location, ISP, ASN and hostname. IPv4 and IPv6 supported.",
  },
  {
    id: "dns",
    path: "/dns",
    name: "DNS Lookup",
    desc: "A, AAAA, MX, TXT, NS, CNAME, SOA and CAA records",
    title: "DNS Lookup: Check DNS Records for Any Domain",
    description: "Free DNS record lookup. Check A, AAAA, MX, TXT, NS, CNAME, SOA and CAA records with Cloudflare or Google DNS, or run a reverse DNS lookup.",
  },
  {
    id: "reverse-dns",
    path: "/reverse-dns",
    name: "Reverse DNS",
    desc: "Find the hostname behind any IP address",
    title: "Reverse DNS Lookup: Find the Hostname of Any IP",
    description: "Free reverse DNS lookup. Enter an IPv4 or IPv6 address to find its PTR record and hostname, and check that mail servers are set up correctly.",
  },
  {
    id: "reputation",
    path: "/reputation",
    name: "IP Reputation",
    desc: "VPN, proxy, Tor and blocklist check",
    title: "VPN Checker: IP Reputation, Proxy and Blacklist Test",
    description: "Free VPN checker. See if an IP looks like a VPN, proxy, Tor exit or data center, and whether it is on spam and abuse blocklists.",
  },
  {
    id: "proxy-checker",
    path: "/proxy-checker",
    name: "Proxy Checker",
    desc: "Test HTTP and SOCKS5 proxies: speed, location, rotation",
    title: "Proxy Checker: Test HTTP and SOCKS5 Proxies Online",
    description: "Free online proxy checker. Test any HTTP or SOCKS5 proxy for speed, exit IP, location, rotation and blocklists, with username and password support.",
  },
  {
    id: "whois",
    path: "/whois",
    name: "WHOIS",
    desc: "Domain and IP registration details",
    title: "WHOIS Lookup: Domain and IP Registration Details",
    description: "Find the registrar, creation and expiry dates and nameservers of any domain, or see who owns an IP address range. Fast RDAP-based WHOIS lookup.",
  },
  {
    id: "headers",
    path: "/headers",
    name: "HTTP Headers",
    desc: "The headers your browser sends to websites",
    title: "HTTP Headers Viewer: See Your Request Headers",
    description: "See every HTTP request header your browser sends, including user agent, language and encoding, and which ones are added by proxies.",
  },
  {
    id: "browser",
    path: "/browser",
    name: "Browser Info",
    desc: "User agent, screen, language and more",
    title: "What Is My User Agent? Browser and Device Info",
    description: "Find your user agent string, browser, operating system, screen size, language and timezone. See what every website can read about you.",
  },
  {
    id: "port",
    path: "/port",
    name: "Port Checker",
    desc: "Check if a port is open on your IP",
    title: "Port Checker: Open Port Check Tool for Your IP",
    description: "Free open port checker and port forwarding tester. Check if a port is open on your public IP address for game servers, Plex, SSH and remote desktop.",
  },
  {
    id: "speed",
    path: "/speed-test",
    name: "Speed Test",
    desc: "Latency, download and upload speed",
    title: "Internet Speed Test: Download, Upload and Ping",
    description: "Free internet speed test: download, upload, ping, jitter and latency under load with a bufferbloat grade, measured against the nearest Cloudflare data center.",
  },
  {
    id: "ping",
    path: "/ping",
    name: "Ping Test",
    desc: "Check your latency and jitter",
    title: "Ping Test: Test Your Ping, Latency and Jitter Online",
    description: "Free internet ping test. Check your ping, latency, jitter and packet loss to the nearest Cloudflare server in about 10 seconds. No install needed.",
  },
  {
    id: "webrtc",
    path: "/webrtc",
    name: "WebRTC Leak Test",
    desc: "See if your browser leaks your real IP",
    title: "WebRTC Leak Test: Is Your VPN Leaking Your IP?",
    description: "Test whether your browser exposes your real IP address through WebRTC, even when you are connected to a VPN or proxy.",
  },
  {
    id: "subnet",
    path: "/subnet",
    name: "Subnet Calculator",
    desc: "CIDR ranges, masks and host counts",
    title: "Subnet Calculator: CIDR and Subnet Mask Calculator",
    description: "Free subnet mask calculator for IPv4 and IPv6. Enter an IP and CIDR to get the network address, broadcast, host range and usable hosts.",
  },
  {
    id: "mac",
    path: "/mac-lookup",
    name: "MAC Lookup",
    desc: "Find the vendor of any MAC address or OUI",
    title: "MAC Address Lookup: Find the Vendor of Any MAC",
    description: "Free MAC address lookup: find the vendor of any MAC or OUI from the IEEE registry, check hundreds at once, and spot randomized private addresses.",
  },
  {
    id: "dmarc",
    path: "/dmarc-checker",
    name: "DMARC Checker",
    desc: "Check a domain's DMARC, SPF and DKIM setup",
    title: "DMARC Checker: Test Your DMARC Record Free",
    description: "Free DMARC checker: read and explain any domain's DMARC policy under the new RFC 9989 rules, with SPF, DKIM and MX checks and a suggested next record.",
  },
  {
    id: "spf",
    path: "/spf-checker",
    name: "SPF Checker",
    desc: "Validate SPF and count its DNS lookups",
    title: "SPF Checker: Validate SPF Records and Lookups",
    description: "Free SPF record checker: validate the syntax, count DNS lookups against the 10-lookup limit, see every include, and check DKIM and DMARC at once.",
  },
  {
    id: "dkim",
    path: "/dkim-checker",
    name: "DKIM Checker",
    desc: "Find DKIM keys by selector and test them",
    title: "DKIM Checker: Find and Test DKIM Records",
    description: "Free DKIM checker: scan over 30 common selectors or test your own, and see key type, size and revoked or testing keys, next to SPF and DMARC.",
  },
  {
    id: "mx",
    path: "/mx-lookup",
    name: "MX Lookup",
    desc: "Mail servers and email provider of a domain",
    title: "MX Lookup: Check MX Records and Mail Provider",
    description: "Free MX lookup: see a domain's mail servers in priority order, which email provider runs them, and whether SPF, DKIM, DMARC and MTA-STS are set up.",
  },
  {
    id: "propagation",
    path: "/dns-propagation",
    name: "DNS Propagation",
    desc: "Check a DNS change across 12 public resolvers",
    title: "DNS Propagation Checker: See DNS Changes Live",
    description: "Free DNS propagation checker: see what 12 public DNS resolvers return for any record right now, how long each keeps its cached answer, and when yours lands.",
  },
  {
    id: "download",
    path: "/download-time-calculator",
    name: "Download Time",
    desc: "How long a file takes at your internet speed",
    title: "Download Time Calculator: File Size and Speed",
    description: "Free download time calculator: see how long any file takes at your internet speed, find the speed you need to finish by a deadline, and plug in your speed test.",
  },
];

export const toolById = (id: string) => TOOLS.find((t) => t.id === id);

/** Where a tool lives for a visitor reading in a language: its own language page, or the English one. */
export const toolHref = (tool: Tool, locale: Locale) => localizedPath(tool.enOnly ? "en" : locale, tool.path);

/** A tool's name, short description and page title in a language (English where no translation exists). */
export const localTool = (tool: Tool, locale: Locale): Tool => {
  const s = locale === "en" ? undefined : LOCALE_DATA[locale]?.tools[tool.id];
  return s ? { ...tool, name: s.name, desc: s.desc, title: s.title, description: s.description } : tool;
};
