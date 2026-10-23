import { LOCALE_DATA, type Locale } from "./i18n";

export interface Tool {
  id: string;
  path: string;
  name: string;
  desc: string;
  title: string;
  description: string;
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
];

export const toolById = (id: string) => TOOLS.find((t) => t.id === id);

/** A tool's name, short description and page title in a language (English where no translation exists). */
export const localTool = (tool: Tool, locale: Locale): Tool => {
  const s = locale === "en" ? undefined : LOCALE_DATA[locale]?.tools[tool.id];
  return s ? { ...tool, name: s.name, desc: s.desc, title: s.title, description: s.description } : tool;
};
