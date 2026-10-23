import type { Faq } from "../layout";

export const HOME_FAQ: Faq[] = [
  {
    q: "What is my IP address?",
    a: "Your IP address, which people also search for as \"what's my IP\", \"whats my IP\", \"search my IP\" or \"my IP\", is the public number shown at the top of this page. It identifies your internet connection to every website and service you visit. If you use a home or mobile network it was assigned by your internet provider, and everyone on that connection shares it.",
  },
  {
    q: "How do I find or check my IP address?",
    a: "If you search my IP, what is my IP address or check my IP, this page answers it the moment it opens: your public IP address is displayed instantly, along with your approximate location and ISP, so there is nothing to install. To find the private IP address your device uses inside your home network, check your network settings, or run ipconfig on Windows or ifconfig on macOS and Linux.",
  },
  {
    q: "What is an IP checker?",
    a: "An IP checker is a tool that shows an IP address and what can be learned about it. This page checks your own address. The IP lookup tool checks any other IP address or domain for its location, ISP and network, and the IP reputation checker tells you whether an address looks like a VPN, proxy or Tor exit and whether it is on spam blocklists.",
  },
  {
    q: "Why is the location wrong or off by a few miles?",
    a: "IP geolocation is an estimate built from provider records and routing data, not GPS. It is usually accurate to the country and often the city, but it frequently points to your ISP's nearest hub instead of your home. A VPN or mobile network can move the result even further.",
  },
  {
    q: "What is the difference between IPv4 and IPv6?",
    a: "IPv4 addresses look like 203.0.113.7 and there are only about 4.3 billion of them. IPv6 addresses look like 2001:db8::1 and the format provides a practically unlimited supply. Most connections can use both. This page shows whichever your browser used, and checks the other one too.",
  },
  {
    q: "What is my public IP, and how is it different from my local IP?",
    a: "Your public IP is the address the internet sees, the one shown at the top of this page. Your router or mobile carrier holds it and every device on that connection shares it. Your local (private) IP, such as 192.168.1.20 or 10.0.0.5, only exists inside your own network and is what ipconfig or your Wi-Fi settings show. Websites never see your local IP, only your public one.",
  },
  {
    q: "What is my IPv4 address?",
    a: "It is the IPv4 value in the row under your main address at the top of this page, four numbers separated by dots, such as 203.0.113.7. If your connection also has IPv6 the row shows both, because many networks use the two side by side. If IPv4 says not detected, your network reached this page over IPv6 only.",
  },
  {
    q: "Is it safe to share my IP address?",
    a: "Sharing your IP address is generally low risk. On its own it reveals your approximate location and ISP, not your name or street address. It does let someone send traffic to your connection, so avoid posting it publicly if you host servers or play games where players attack each other, and use a VPN if you want to hide it.",
  },
  {
    q: "Does ipcomet store my IP address?",
    a: "No. Our code does not save, log or sell your IP address, and there are no ads. The page reads your IP from the request, shows it back to you and forgets it. If you accept the optional analytics banner, Google Analytics counts visits using cookies and records the pages you view, but not the addresses you look up; if you decline, nothing is set. See the privacy page for the full detail.",
  },
];

export const TOOL_FAQ: Record<string, Faq[]> = {
  "proxy-checker": [
    {
      q: "How do I check if a proxy is working?",
      a: "Enter it as host:port, add the username and password if it needs them, and press Check proxy. If the tool shows an exit IP, a location and successful requests, the proxy works. If it fails, the message says why: wrong credentials (HTTP 407), a refused connection, a timeout, or a server that is not a proxy. You can also test from a terminal with cURL: curl -x http://user:password@host:port https://www.cloudflare.com/cdn-cgi/trace",
    },
    {
      q: "Does it support SOCKS5 as well as HTTP and HTTPS proxies?",
      a: "Yes. It supports HTTP and HTTPS proxies that use the CONNECT method, and SOCKS5 with or without a username and password. Leave the type on auto-detect and it tries HTTP first, then SOCKS5. SOCKS4 and proxies that need a client certificate are not supported.",
    },
    {
      q: "Does the proxy checker work with Decodo proxies?",
      a: "Yes, as long as the proxy uses a host, a port and a username and password. Decodo (formerly Smartproxy) and most other providers show these in their dashboard. Paste them in and the checker shows the exit IP, its location and the speed. If you only use IP allow-listing, read the next question.",
    },
    {
      q: "Can I test a proxy that uses IP whitelisting?",
      a: "No. The test connects from our servers, so an allow-list that only contains your own IP address will refuse it. Use your provider's username and password endpoint for the test instead, if it offers one.",
    },
    {
      q: "Are my proxy credentials stored or logged?",
      a: "No. The proxy address and any username and password are sent to our server over HTTPS, used to run this one check and then discarded. We do not store them or write them to logs. Your proxy provider will see our connection, like any other request it handles.",
    },
    {
      q: "Why is the speed different from what I get on my own computer?",
      a: "The test runs from a Cloudflare data center near you, not from your device, and downloads a small 1 MB sample over one connection. Use it to compare proxies with each other and to spot slow ones. For the speed you will actually get, test from the machine that will use the proxy.",
    },
    {
      q: "How can I tell if a proxy is rotating?",
      a: "The checker makes three requests on separate connections and lists the exit IP of each. Different addresses mean a rotating proxy. The same address means a sticky or static proxy. A sticky session on a rotating gateway keeps one IP on purpose for several minutes, so that result is expected.",
    },
  ],
  ping: [
    {
      q: "What is a good ping?",
      a: "Under about 30 ms is excellent, 30 to 60 ms is good for almost everything including online games, 60 to 100 ms is fine for browsing and video calls, and above 150 ms you will start to notice lag in fast games. Lower is better, and a steady ping matters as much as a low one.",
    },
    {
      q: "What do jitter and packet loss mean?",
      a: "Jitter is how much your ping varies from one check to the next. Packet loss is the share of checks that never got an answer. High jitter or any loss causes stutter in calls and games even when the average ping looks fine.",
    },
    {
      q: "Does this ping test measure the speed to a game server?",
      a: "No. It measures the round trip from your device to the nearest Cloudflare data center, which shows the quality of your own connection. Your ping to a specific game server also depends on the distance and route to that server.",
    },
  ],
  "reverse-dns": [
    {
      q: "What is a reverse DNS lookup?",
      a: "A normal DNS lookup turns a name into an IP address. A reverse lookup does the opposite: it asks which hostname the owner of an IP address has assigned to it, stored in a PTR record. Many addresses have none, especially home connections.",
    },
    {
      q: "Why does reverse DNS matter for email?",
      a: "Mail servers often check that the sending IP has a PTR record that matches the name it announces. A missing or generic record is a common reason legitimate email lands in spam, so mail server owners set it with their hosting provider.",
    },
  ],
  browser: [
    {
      q: "What is a user agent?",
      a: "A user agent is a line of text your browser sends to every website to say which browser, version and operating system you use. Sites use it to serve the right version of a page. You can see yours at the top of this page and copy it with one click.",
    },
    {
      q: "Can I change my user agent?",
      a: "Yes. Browser developer tools and some extensions can override it for testing. Changing it does not hide your IP address, and sites can often still tell your real browser from other signals.",
    },
    {
      q: "What can websites learn from my browser?",
      a: "Without asking, a site can read your browser and operating system, screen size, language, timezone and often your processor thread count and memory. Combined, these details can make your browser surprisingly unique, which is called fingerprinting.",
    },
    {
      q: "How do I reduce what my browser reveals?",
      a: "Use a browser with fingerprinting protection such as Firefox with strict tracking protection, Brave or Safari. Keep it updated, avoid unusual extensions that make your setup more unique, and consider a VPN if you also want to hide your IP address.",
    },
  ],
  reputation: [
    {
      q: "How do I know if my VPN is working?",
      a: "Compare your address, location and network with your VPN switched off and on. They should all change. Then run the WebRTC leak test and check that the IPv6 line on the home page is empty or belongs to the VPN. Finally, use this checker: a working VPN address usually shows up as a hosting or VPN network, not your home provider.",
    },
    {
      q: "Can you tell if I am using a VPN or proxy?",
      a: "Only partly. We check whether the address is on the official Tor exit list, whether its network owner is a known VPN provider or a hosting company, and whether its hostname looks like a VPN. Most VPNs run on data center networks, so those are easy to spot. Residential proxies and some private VPNs look like ordinary home connections and cannot be detected from public data.",
    },
    {
      q: "What does it mean if my IP is on a blocklist?",
      a: "A blocklist is a public list of addresses that have been seen sending spam or abusive traffic. Being listed can make mail servers reject your email and some websites challenge or block you. It often happens to shared addresses, such as a VPN server or a mobile network, because of other users. Most lists have a removal form, and entries expire on their own after a while.",
    },
    {
      q: "Why are Spamhaus lists missing?",
      a: "Spamhaus refuses queries that arrive through large public DNS resolvers, so a check made this way cannot give a trustworthy answer. We only show lists that respond correctly, and we mark any list that fails to answer as unavailable instead of guessing.",
    },
  ],
  lookup: [
    {
      q: "How do I look up the IP address of a website?",
      a: "Type the domain name, such as example.com, into the box above and press Look up. The tool resolves the name to its current IP address and then shows where that server is, who runs the network, and its hostname.",
    },
    {
      q: "How accurate is an IP address lookup?",
      a: "Country is almost always right, city is right most of the time, and anything finer than that is a rough guess. The ISP and ASN come from public routing registries and are reliable. Lookups cannot reveal a street address or a person's identity.",
    },
    {
      q: "Can I look up a domain name instead of an IP?",
      a: "Yes. Enter a domain such as example.com and the tool resolves it to its current IP address first, then shows the location, network and hostname of the server behind it. Sites on a CDN will show the CDN's network rather than the origin server.",
    },
  ],
  dns: [
    {
      q: "How do I do a reverse DNS lookup?",
      a: "Enter an IP address instead of a domain name. The tool builds the matching in-addr.arpa (IPv4) or ip6.arpa (IPv6) name and returns the PTR record, which is the hostname the owner has assigned to that address, if any. Mail servers rely on reverse DNS to check senders.",
    },
    {
      q: "What DNS record types can I check?",
      a: "You can check A and AAAA records for IP addresses, MX for mail servers, TXT for SPF, DKIM and verification strings, NS for nameservers, CNAME for aliases, SOA for zone details and CAA for certificate authority rules. Enter an IP address instead of a domain to run a reverse (PTR) lookup.",
    },
    {
      q: "Why do my DNS changes not show up yet?",
      a: "Resolvers cache answers for the record's TTL, so a change can take minutes or hours to appear everywhere. Switch between the Cloudflare and Google resolvers to compare what each one currently returns. If they disagree, the change is still propagating.",
    },
  ],
  whois: [
    {
      q: "What is the difference between WHOIS and RDAP?",
      a: "RDAP is the modern replacement for the old WHOIS protocol. It returns structured data over HTTPS and is now the official standard for registries and registrars. This tool uses RDAP, so results are consistent, though personal contact details are usually redacted for privacy.",
    },
    {
      q: "Why is the owner of a domain hidden?",
      a: "Since data privacy rules such as GDPR came into force, most registrars redact the registrant's name, email and address from public records. You can still see the registrar, the registration and expiry dates, status codes and nameservers.",
    },
  ],
  headers: [
    {
      q: "What are HTTP request headers?",
      a: "Headers are small pieces of information your browser sends with every request, such as the language you prefer, the content types it accepts, and which browser you use. Servers use them to deliver the right version of a page.",
    },
    {
      q: "Which headers can identify me?",
      a: "The User-Agent and Accept-Language headers are the most revealing, because together with your IP address they can help build a fingerprint. Browsers with strong privacy settings reduce or standardize these values.",
    },
  ],
  port: [
    {
      q: "How do I check if a port is open?",
      a: "Enter the port number above and press Check port. The test connects to your public IP address from the internet and reports open, closed or no response. To check from your own computer instead, use netstat or Test-NetConnection on Windows, or ss and nc on macOS and Linux.",
    },
    {
      q: "Why does my port show as closed when my server is running?",
      a: "Three things usually block it: the service is not listening on that port, your computer's firewall blocks it, or your router is not forwarding the port to your device. Also check that your provider does not use carrier-grade NAT, which prevents inbound connections entirely.",
    },
    {
      q: "Is it safe to open a port?",
      a: "Opening a port exposes whatever is listening behind it to the whole internet. Only forward ports for software you keep updated, use strong authentication, and close ports you no longer need. Prefer a VPN or a tunnel for remote access to private services.",
    },
  ],
  speed: [
    {
      q: "How does this speed test work?",
      a: "Your browser measures round-trip time to the nearest Cloudflare data center, downloads data over several parallel connections for eight seconds, then uploads data for six seconds. Speeds are reported in megabits per second, the same unit your internet plan uses.",
    },
    {
      q: "Why is my speed lower than my plan?",
      a: "Wi-Fi signal, other devices on the network, an old router, congestion at peak hours and the distance to the test server all reduce results. For the most accurate number, use a wired connection and pause other downloads while the test runs.",
    },
  ],
  webrtc: [
    {
      q: "What is a WebRTC leak?",
      a: "WebRTC lets browsers connect directly for video calls and file sharing, and to do that it asks a STUN server for your public IP. Some browsers return your real IP this way even when a VPN is active, which exposes your true location.",
    },
    {
      q: "How do I fix a WebRTC leak?",
      a: "Use a VPN that blocks WebRTC leaks, turn off WebRTC in your browser (Firefox lets you set media.peerconnection.enabled to false), or install a reputable extension that restricts WebRTC. Then run this test again to confirm the leak is gone.",
    },
  ],
  subnet: [
    {
      q: "Is this a CIDR calculator?",
      a: "Yes. Enter any IPv4 or IPv6 address with a prefix length, such as 10.0.0.0/20, and it returns the network address, broadcast address, subnet mask, wildcard mask, first and last usable host and the number of hosts. It works as a subnet mask calculator and an IP range calculator too.",
    },
    {
      q: "How do I calculate a subnet mask?",
      a: "Write the prefix length as that many 1 bits followed by 0 bits to fill 32, then convert each group of 8 bits to decimal. For /26 that is 11111111.11111111.11111111.11000000, which is 255.255.255.192. This calculator does it for you and also gives the host range.",
    },
    {
      q: "How many hosts are in a /24 network?",
      a: "A /24 network has 256 addresses, of which 254 are usable for devices. One address is the network ID and one is the broadcast address. The subnet mask is 255.255.255.0.",
    },
    {
      q: "What does CIDR notation mean?",
      a: "CIDR notation writes a network as an address followed by a slash and a number, such as 192.168.1.0/24. The number is how many leading bits identify the network, and the remaining bits identify hosts. A bigger number means a smaller network.",
    },
  ],
};

export const TOOL_ABOUT: Record<string, string> = {
  "proxy-checker":
    "A proxy checker tests whether a proxy server works and what it looks like to the websites you use it with. Enter an HTTP, HTTPS or SOCKS5 proxy, with a username and password if it needs one, and this tool connects through it, shows the exit IP address and where it is, measures how quickly it answers and downloads, checks whether the exit IP changes between requests, and looks the address up on spam blocklists and the Tor exit list. You can also test whether the proxy can reach one website you care about. Nothing you enter is stored.",
  ping:
    "Ping is the time, in milliseconds, for a tiny message to travel from your device to a server and back. It is the number that decides whether a game feels instant or laggy and whether a video call stutters. This test sends 25 quick checks to the nearest Cloudflare data center and reports your average, best and worst times, your jitter (how much they vary) and any packet loss. Because the test server is close to you, the result shows the health of your own connection: Wi-Fi, router and provider.",
  "reverse-dns":
    "A reverse DNS lookup finds the hostname that an IP address has been assigned, using its PTR record. It is a quick way to see who runs a server (a hosting company, a mail server or a home provider), to confirm that a mail server is configured properly, or to make sense of an unfamiliar address in your logs. Enter an IPv4 or IPv6 address and the lookup returns the PTR record from live DNS.",
  reputation:
    "An IP reputation check shows how the rest of the internet is likely to treat an address. We combine several signals: the official Tor Project exit list, the type of network that owns the address (home ISP, mobile carrier, hosting company or VPN provider), hints in the reverse DNS name, and five public spam and abuse blocklists. It helps you find out whether a VPN is detectable, why a website keeps showing you captchas, or why your mail is being rejected. Results are indicators, not proof.",
  lookup:
    "An IP address lookup tells you where a server or connection appears to be on the internet and who runs the network behind it. Use it to check where a website is hosted, investigate suspicious traffic in your logs, confirm a VPN is working, or find out which provider owns an address. Results include city, region, country, timezone, ISP, organization and autonomous system number (ASN), plus the hostname when a reverse DNS record exists.",
  dns:
    "The Domain Name System turns names such as example.com into the IP addresses computers use. This tool queries live DNS over HTTPS using Cloudflare 1.1.1.1 or Google 8.8.8.8, so you see current answers instead of stale local cache. It is useful for checking email setup (MX, SPF and DKIM in TXT records), confirming a site move, debugging a CNAME, or verifying that a new record has been published.",
  whois:
    "WHOIS data shows who registered a domain, which registrar manages it, when it was created and when it expires, plus its nameservers and status flags. For IP addresses it shows the network block, the owning organization and the regional registry. It is handy for checking whether a domain is available, researching a suspicious site, or finding the right abuse contact.",
  headers:
    "Every time your browser loads a page it sends a set of HTTP headers describing itself. This page displays exactly what reached our server, which is what any website you visit would see. Headers marked as added by a proxy come from the network between you and the server, such as a CDN, rather than from your browser.",
  browser:
    "Your browser exposes more than most people expect. This page lists the details that JavaScript can read without any permission prompt, including your user agent, platform, screen and viewport size, pixel density, language preferences, timezone and hardware hints. Nothing on this page is sent anywhere. It is all read locally in your browser.",
  port:
    "A port checker tests whether a TCP port on your public IP address accepts connections from the internet. Use it after setting up port forwarding for a game server, Plex, a security camera, SSH or remote desktop. The test runs from Cloudflare's network against your own IP only, so it reflects what the outside world actually sees.",
  speed:
    "This speed test measures what matters for everyday use. Latency is the delay of a single round trip, jitter is how much that delay varies, and download and upload are the sustained throughput in megabits per second. Because the test endpoint is the nearest Cloudflare data center, the result reflects the quality of your own connection rather than a distant server.",
  webrtc:
    "A WebRTC leak test checks whether your browser exposes an IP address that differs from the one websites normally see. It is most useful if you use a VPN or proxy, because a leak means your real IP address is visible despite the tunnel. The test asks a public STUN server for your IP the same way a video-call site would, and compares the answer with your connection.",
  subnet:
    "A subnet calculator turns a CIDR block into the numbers you need to configure a network: the network and broadcast addresses, the first and last usable host, the subnet and wildcard masks, and how many hosts fit. It supports both IPv4 and IPv6, and runs entirely in your browser, so nothing you type leaves your device.",
};

/**
 * Extra explanatory copy for tool pages that would otherwise be thin. Trusted HTML, rendered inside
 * the "About" section after TOOL_ABOUT. Rendered on the server so crawlers see it without running scripts.
 */
export const TOOL_MORE: Record<string, string> = {
  "proxy-checker": `<h3>What this proxy checker tests</h3>
<ul>
<li><strong>Whether it works.</strong> The tool opens a tunnel through the proxy, signs in with your credentials if you give them, and fetches a small page over HTTPS. A failure is explained: a wrong password (HTTP 407), a blocked destination (403), a timeout, or a server that is not a proxy at all.</li>
<li><strong>Exit IP and location.</strong> The address websites see, with its country, city, network owner and ASN, so you can confirm you got the country you paid for.</li>
<li><strong>Speed.</strong> Connection time, time to first byte through the tunnel, and the download speed of a 1 MB sample.</li>
<li><strong>Success rate and rotation.</strong> Three requests on separate connections show whether the proxy is reliable, and whether it keeps one exit IP (sticky) or changes it (rotating).</li>
<li><strong>Reputation.</strong> Whether the exit IP is a Tor exit, is listed on spam or abuse blocklists, or belongs to a data center or a residential network.</li>
<li><strong>A specific website (optional).</strong> Enter an HTTPS address and the tool reports the status code the site returns through your proxy, which shows whether it is blocking or rate-limiting that proxy.</li>
</ul>
<h3>Proxy formats you can paste</h3>
<p>Providers hand out proxies in several shapes, and the checker accepts the common ones: <code>host:port</code>, <code>user:password@host:port</code>, <code>host:port:user:password</code> and <code>user:password:host:port</code>, with an optional <code>http://</code>, <code>https://</code> or <code>socks5://</code> prefix. If a password contains a colon, put it in the separate password field. With the type on auto-detect, the tool tries HTTP first and then SOCKS5.</p>
<h3>Testing proxies from Decodo and other providers</h3>
<p>The tool works with any provider whose proxies use a host, a port and a username and password. That covers residential gateways such as Decodo (formerly Smartproxy), datacenter proxies and mobile proxies. Copy the host, port, username and password from your provider's dashboard. Each request goes out from our servers, so a proxy that only accepts allow-listed IP addresses will refuse the test, and nothing on our side can change that. On a rotating gateway the three requests show whether your IP changes each time. A sticky-session port keeps the same IP, which is what it is meant to do. To go deeper, read <a href="/learn/how-to-check-if-a-proxy-is-working">how to check if a proxy is working</a> and <a href="/learn/rotating-vs-sticky-proxies">rotating vs sticky proxies</a>.</p>
<h3>What a free online checker cannot tell you</h3>
<p>The checks run from Cloudflare's network, so speed reflects the path from there to your proxy, not from your own device or server. The tests use encrypted HTTPS tunnels, so the proxy cannot add or change headers, which means the old transparent, anonymous and elite labels (they depend on HTTP headers) do not apply and are not shown. And a proxy that works for the test pages may still be blocked by the site you care about, which is why the optional website test exists. For the final word, run a short trial with your real target.</p>`,
  browser: `<h3>How to read a user agent string</h3>
<p>A typical user agent looks like this: <code>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36</code>. It reads like a history lesson because almost every browser still begins with Mozilla/5.0 and mentions AppleWebKit, Gecko and Safari, so that old websites which sniffed for those names keep working. Two parts matter. The text in brackets names the platform (here 64-bit Windows, where both Windows 10 and 11 report NT 10.0), and the product token near the end names the real browser and its version (here Chrome 140). Microsoft Edge adds an <code>Edg/</code> token after Safari, and Opera adds <code>OPR/</code>.</p>
<h3>Why your user agent may look out of date</h3>
<p>Chrome and Edge now freeze parts of the string to make browsers harder to fingerprint. Minor version numbers are zeroed (140.0.0.0) and Macs always report macOS 10_15_7, whatever you actually run. Firefox freezes its Gecko build date at 20100101, and Safari on an iPad announces itself as a Mac by default. Chromium browsers share the exact details through User-Agent Client Hints, which a site has to ask for. This page reads them, so the operating system version it shows can be more precise than the string itself. To see the raw headers your browser sends, open the <a href="/headers">HTTP headers viewer</a>.</p>`,

  "reverse-dns": `<h3>How reverse DNS works</h3>
<p>Forward DNS stores the answer under the domain name. Reverse DNS stores it under the address. For IPv4 the four numbers are written backwards and followed by <code>in-addr.arpa</code>, so a lookup for 203.0.113.25 asks for the PTR record of <code>25.113.0.203.in-addr.arpa</code>. IPv6 works the same way, one hexadecimal digit at a time, under <code>ip6.arpa</code>. Whoever controls the address block, usually your internet provider or hosting company, controls its PTR records. That is why you set them in your host's control panel and not in your domain's DNS settings.</p>
<h3>Check that reverse and forward DNS match</h3>
<p>A well-configured mail server has forward-confirmed reverse DNS: the sending IP's PTR record names a host, and that host's A or AAAA record points back to the same IP. Large mail providers such as Gmail check this, and a mismatch is a common reason for rejected or spam-foldered mail. To test yours, run a reverse lookup above, then look up the hostname it returns in the <a href="/dns">DNS lookup</a> and confirm that the address matches.</p>`,

  whois: `<h3>WHOIS and RDAP</h3>
<p>WHOIS is a decades-old plain-text protocol with no standard format, so every registry answers differently. RDAP, the Registration Data Access Protocol, is its replacement: it returns structured data over HTTPS and has taken over from WHOIS for generic domains such as .com and .org. This tool queries RDAP, which keeps results consistent. A few country-code domains do not offer RDAP yet, and those will show no record even though the domain exists.</p>
<h3>Why the owner is usually hidden</h3>
<p>Since the GDPR took effect in 2018, most registrars redact the registrant's name, email address and phone number, so you will usually see the registrar, the dates, the nameservers and a status. A status such as <code>clientTransferProhibited</code> is normal: it means the registrar has locked the domain against unauthorised transfers. To reach the owner, use the contact form or abuse address the record gives, or the website's own contact page. To see where a domain is hosted, use the <a href="/lookup">IP lookup</a>.</p>`,

  headers: `<h3>What the common headers mean</h3>
<ul>
<li><code>user-agent</code> names your browser and operating system. See <a href="/browser">what your user agent says</a>.</li>
<li><code>accept-language</code> is your ranked list of preferred languages, which sites use to choose a translation.</li>
<li><code>accept-encoding</code> lists the compression your browser understands, such as gzip, br and zstd.</li>
<li><code>sec-ch-ua</code> is sent by Chromium browsers and names the browser brand. The <code>sec-fetch-*</code> headers, sent by most current browsers, say why the request is being made, such as a normal page load or a script.</li>
<li><code>cf-connecting-ip</code>, <code>x-forwarded-for</code> and <code>cf-ipcountry</code> are added by Cloudflare, which sits between you and this site. They are not sent by your browser.</li>
</ul>
<h3>When this is useful</h3>
<p>Developers use a headers viewer to check what a proxy or CDN adds to a request, to debug language or compression negotiation, and to see what any site can read about a visitor without running a script. If a header you expect is missing, a privacy extension, VPN or corporate proxy may have removed it.</p>`,
};
