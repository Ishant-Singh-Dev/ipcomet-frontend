import type { Faq } from "../layout";
import ouiMeta from "../../static/oui/meta.json";

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
      a: "Your browser first times 20 round trips to the nearest Cloudflare data center while the line is idle. It then downloads over six parallel transfers, and then uploads random data the same way. Each direction runs until the speed has settled, between 5 and 15 seconds, while a round trip is timed every quarter second to measure latency under load. The first 1.5 seconds of each transfer are ignored, and the slowest 20% and fastest 5% of samples are dropped, so one stall or burst cannot skew the result. Speeds are reported in megabits per second, the unit your internet plan uses.",
    },
    {
      q: "What is bufferbloat, and what does the grade mean?",
      a: "Bufferbloat is the extra delay that appears when a router or modem queues too much data while the line is busy. Your connection can be fast and still lag in calls and games whenever someone else is downloading. The grade compares latency while downloading or uploading with idle latency: a rise under 5 ms is A+, under 30 ms A, under 60 ms B, under 200 ms C, under 400 ms D, and anything more is F. A router with smart queue management (SQM), such as fq_codel or CAKE, usually brings it down to A.",
    },
    {
      q: "Why is my result different from Ookla Speedtest or fast.com?",
      a: "Each test measures the path to its own servers. Ookla usually picks a server inside or near your provider's network, fast.com uses Netflix's video servers, and this test uses Cloudflare's nearest data center, so the three take different routes and can disagree by 10% or more. They also handle ramp-up and outliers differently. Running all three and taking the lowest consistent figure is a fair way to judge your line.",
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
  mac: [
    {
      q: "How do I find the manufacturer of a MAC address?",
      a: "Paste the address into the box above. The first six hexadecimal digits (the OUI) identify the company that IEEE assigned the block to, and the tool looks them up in the IEEE MA-L, MA-M and MA-S registries, including the smaller 28-bit and 36-bit blocks that many lookups miss.",
    },
    {
      q: "Why does a MAC lookup say the address is randomized or locally administered?",
      a: "The second hexadecimal digit of the address is 2, 6, A or E, which means the locally administered bit is set. Phones and computers use addresses like this as private Wi-Fi addresses: Android 10 and later randomize by default, and Apple devices use a different private address for each network. A randomized address does not belong to any manufacturer, so no vendor lookup can name one.",
    },
    {
      q: "Can I look up many MAC addresses at once?",
      a: "Yes. Paste a list, or the whole output of arp -a, ip neigh or your router's client list. The tool finds every MAC address in the text, in any common format, and shows the vendor of each one. You can copy the results as CSV.",
    },
    {
      q: "Can a MAC address tell me where a device is?",
      a: "No. A MAC address identifies a network interface, not a place, and it never leaves your local network, so websites cannot see it. A vendor lookup only tells you who made the network card or who registered the block.",
    },
    {
      q: "Is this MAC address lookup private?",
      a: "Yes. The vendor data is downloaded to your browser in small pieces and the lookup runs there. The addresses you paste are not sent to our server.",
    },
  ],
  dmarc: [
    {
      q: "How do I check my DMARC record?",
      a: "Enter your domain above. The checker reads the TXT record at _dmarc.yourdomain, explains every tag in plain English, and shows whether the policy actually protects you. If a subdomain has no record of its own, it shows the parent record that applies, the way RFC 9989 looks it up.",
    },
    {
      q: "What does p=none, p=quarantine or p=reject mean?",
      a: "They are the domain owner's request to receiving mail servers. p=none asks for no special treatment and is used while you collect reports. p=quarantine marks failing mail as suspicious, usually sending it to spam. p=reject says failures are not legitimate and asks receivers to refuse them. Only quarantine and reject stop people spoofing your domain.",
    },
    {
      q: "Is DMARC required?",
      a: "For bulk senders to Gmail, yes. Google requires anyone sending more than 5,000 messages a day to Gmail accounts to set up SPF, DKIM and DMARC, and a policy of p=none is enough to meet that rule. For everyone else it is strongly recommended, because without it anyone can send mail that claims to come from your domain.",
    },
    {
      q: "What changed in RFC 9989?",
      a: "RFC 9989, published in May 2026, replaces RFC 7489 as the DMARC standard. Records still start with v=DMARC1. It removes the pct tag, adds np for subdomains that do not exist and t for test mode, and finds the policy by walking up the DNS tree. This checker follows the new rules and flags tags that receivers now ignore.",
    },
  ],
  spf: [
    {
      q: "How do I check my SPF record?",
      a: "Enter your domain above. The checker reads the TXT record that starts with v=spf1, follows every include and redirect, counts the DNS lookups, and warns about the mistakes that break SPF: two records, more than 10 lookups, a +all that lets anyone send, or a deprecated ptr mechanism.",
    },
    {
      q: "What is the SPF 10 lookup limit?",
      a: "RFC 7208 allows at most 10 mechanisms and modifiers that need DNS queries (include, a, mx, ptr, exists and redirect) per check, counted across every nested include. Going over makes SPF return a permanent error, which receivers treat as a failure. ip4, ip6 and all do not count.",
    },
    {
      q: "What is the difference between ~all and -all?",
      a: "-all is a fail: mail from servers not listed is not authorized. ~all is a softfail, a weaker statement that such mail is probably not authorized. Both are valid; with DMARC at quarantine or reject, ~all is common because DMARC makes the final decision. Never use +all, which authorizes every server on the internet.",
    },
    {
      q: "Can I have two SPF records?",
      a: "No. If a domain publishes more than one record starting with v=spf1, the result is a permanent error under RFC 7208. Merge them into one record with all the includes you need.",
    },
  ],
  dkim: [
    {
      q: "How do I find my DKIM selector?",
      a: "Open the headers of an email you sent and find the DKIM-Signature header. The s= value is the selector and d= is the domain. Enter both above. The checker also scans over 30 selectors used by common mail services, so it often finds the key without one.",
    },
    {
      q: "Why does the DKIM check find nothing?",
      a: "DKIM keys live at selector._domainkey.yourdomain, and DNS has no way to list them, so a key can only be found by name. If your provider uses a custom or date-based selector, enter it in the selector box. A domain that does not send mail at all may have no DKIM keys.",
    },
    {
      q: "What does a revoked DKIM key mean?",
      a: "A DKIM record with an empty p= value means the key has been revoked, according to RFC 6376. Signatures made with that selector fail. It is normal for an old selector to be revoked after a key rotation, as long as a current selector is active.",
    },
    {
      q: "What DKIM key size should I use?",
      a: "Use a 2048-bit RSA key where your provider supports it. The checker estimates the size of each RSA key from the length of its published public key.",
    },
  ],
  mx: [
    {
      q: "How do I look up MX records?",
      a: "Enter a domain or an email address above. The lookup returns the mail servers listed in the domain's MX records, sorted by priority, and names the provider when the servers belong to a known service such as Google Workspace or Microsoft 365.",
    },
    {
      q: "What does MX priority mean?",
      a: "Each MX record has a number. Sending servers try the lowest number first and fall back to higher numbers if it does not answer. Records with the same number share the load.",
    },
    {
      q: "What does an MX record of 0 . mean?",
      a: "A single MX record with priority 0 and a target of a dot is a null MX. It says the domain accepts no email at all, so senders can fail immediately instead of retrying.",
    },
    {
      q: "Why does my domain have no MX records?",
      a: "Either email was never set up for it, or the records were removed when the domain moved. Without MX records, mail to the domain will usually bounce. Add the records your email provider gives you, then check again here.",
    },
  ],
  propagation: [
    {
      q: "How long does DNS propagation take?",
      a: "Up to the TTL of the old record, counted from the moment you saved the change. Resolvers keep a cached answer for as many seconds as its TTL allows, then ask again and get the new one. A record with a 300-second TTL updates everywhere within about five minutes; one with a 86,400-second TTL can take a day. This checker shows how long each resolver still has to wait.",
    },
    {
      q: "Why do nameserver changes take longer?",
      a: "When you change nameservers at your registrar, the parent zone has to publish the new delegation, and resolvers cache the old one for the TTL that zone sets. The .com servers, for example, hand out delegation records with a TTL of 172,800 seconds (48 hours).",
    },
    {
      q: "Why do some resolvers show a different answer?",
      a: "Either they still hold the old answer in cache, or the domain deliberately gives different answers to different places, as content delivery networks do. Enter the value you expect in the optional box: resolvers that already return it are marked, and the rest show how many seconds of cache they have left.",
    },
    {
      q: "Can I make DNS propagate faster?",
      a: "Plan ahead. Lower the TTL of the record to something like 300 seconds a day before the change, make the change, then raise the TTL again. You cannot force other people's resolvers to drop a cached answer early, although Cloudflare and Google offer pages to purge their own caches.",
    },
  ],
  download: [
    {
      q: "How long does it take to download 1 GB at 100 Mbps?",
      a: "About 80 seconds. One gigabyte is 8,000 megabits, and 8,000 divided by 100 Mbps is 80 seconds. In practice expect a little longer, because protocol overhead, the server and Wi-Fi all take a share.",
    },
    {
      q: "How do I convert Mbps to MB/s?",
      a: "Divide by 8. Internet speeds are quoted in megabits per second (Mbps) and download managers usually show megabytes per second (MB/s). A 100 Mbps connection downloads at up to 12.5 MB/s.",
    },
    {
      q: "What speed do I need to download 100 GB in an hour?",
      a: "About 222 Mbps. 100 GB is 800,000 megabits, and 800,000 divided by 3,600 seconds is 222 Mbps. The table under the result shows the speed needed for any size and deadline you enter.",
    },
    {
      q: "Why is my download slower than the calculator says?",
      a: "The calculator assumes your full line speed for the whole transfer. Real downloads lose some of it to protocol overhead and other devices on the network, and the server may send more slowly than your line can receive. Run our speed test to measure what your connection actually delivers.",
    },
  ],
  asn: [
    {
      q: "What is an ASN?",
      a: "An autonomous system number identifies a network that makes its own routing decisions on the internet, such as an internet provider, a cloud company or a large university. Networks use these numbers in BGP to tell each other which IP prefixes they can deliver traffic to.",
    },
    {
      q: "How do I find the ASN of an IP address?",
      a: "Enter the IP address above. The lookup finds the prefix that contains it in live routing data, names the AS that announces that prefix, and shows the network's other prefixes. Our IP lookup also shows the ASN next to location and provider.",
    },
    {
      q: "What are private AS numbers?",
      a: "RFC 6996 reserves 64512 to 65534 and 4200000000 to 4294967294 for private use inside a network, the way 192.168.x.x addresses are used at home. They never identify a public network, and the lookup labels them instead of searching for an owner.",
    },
    {
      q: "Who assigns AS numbers?",
      a: "IANA hands out blocks of numbers to the five regional internet registries (AFRINIC, APNIC, ARIN, LACNIC and RIPE NCC), and they assign individual numbers to networks in their region. The lookup shows which registry the number came from.",
    },
  ],
  redirects: [
    {
      q: "What is the difference between a 301 and a 302 redirect?",
      a: "A 301 says the page has moved permanently and a 302 says it is somewhere else for now, as defined in RFC 9110. Google treats 301 and 308 as a strong sign that the new address should replace the old one in search, and 302, 303 and 307 as temporary.",
    },
    {
      q: "How many redirects is too many?",
      a: "Every hop adds a round trip before the page starts loading, so one redirect is best. This checker follows up to 10 and flags chains of more than one hop, loops, and switches between HTTP and HTTPS along the way.",
    },
    {
      q: "Does it check meta refresh redirects?",
      a: "Yes. When the final page is HTML, the checker reads its start and reports a meta refresh tag with its delay and destination. Google treats an instant meta refresh as permanent and a delayed one as temporary.",
    },
    {
      q: "What is a 307 or 308 redirect?",
      a: "They are the method-preserving versions of 302 and 301. A browser must repeat a POST as a POST after a 307 or 308, while after a 301 or 302 it may switch to GET.",
    },
  ],
  "email-headers": [
    {
      q: "How do I get the full headers of an email?",
      a: "In Gmail, open the message, click More (the three dots) and choose Show original. In Outlook on the web, open the message, choose More actions, then View, then View message source. In Apple Mail, choose View, Message, All Headers. Copy everything above the message body and paste it here.",
    },
    {
      q: "How do I find the sender's IP address from email headers?",
      a: "Read the Received lines from the bottom up. The lowest one added by the recipient's server names the server that handed over the message, usually with its IP in brackets. The analyzer lists every hop in order and marks the first public IP it finds.",
    },
    {
      q: "What do spf=pass, dkim=pass and dmarc=pass mean?",
      a: "They are the receiving server's verdicts, recorded in the Authentication-Results header defined in RFC 8601. SPF checks that the sending server was allowed to send for the envelope domain, DKIM checks the message's signature, and DMARC checks that one of them matches the From domain.",
    },
    {
      q: "Is it safe to paste email headers here?",
      a: "Yes. The analysis runs in your browser and the headers are not sent to our server. Headers can contain your email address and internal server names, so avoid pasting them into tools that upload them.",
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
  mac:
    "A MAC address lookup finds the company behind a network device from the first part of its MAC address. Every Ethernet and Wi-Fi interface has a 48-bit hardware address, and IEEE assigns the leading 24, 28 or 36 bits to organizations in blocks called MA-L, MA-M and MA-S. Use this tool to identify an unknown device on your network, check the hardware in a router's client list, or read the vendor of an access point. It also decodes the address itself: unicast or multicast, universally or locally administered (the sign of a randomized private address), every common format, and the IPv6 link-local address derived from it.",
  dmarc:
    "A DMARC checker shows whether a domain tells receiving mail servers what to do with email that fails authentication. DMARC builds on SPF and DKIM: it asks that the domain in the visible From: address matches a domain that passed one of them, and it publishes a policy for messages that do not. Enter a domain to read its DMARC record tag by tag, see the policy that applies to subdomains, find out whether reports are being sent anywhere, and get a suggested next step towards a reject policy. The same report checks SPF, DKIM, MX, MTA-STS and BIMI, so you can see the whole email setup at once.",
  spf:
    "An SPF checker reads a domain's Sender Policy Framework record, the TXT record that lists which servers may send email for the domain. It follows every include and redirect, counts the DNS lookups that the record triggers against the limit of 10 set by RFC 7208, and explains the result receivers will reach for mail from unlisted servers. Use it after adding a new email service, when mail starts landing in spam, or before moving DMARC to an enforcing policy.",
  dkim:
    "A DKIM checker finds the public keys a domain publishes for DomainKeys Identified Mail, the signature that proves an email was sent by the domain and was not changed on the way. Keys are stored at a name built from a selector, so this tool tries over 30 selectors used by common providers and lets you enter your own. For each key it shows the type, an estimate of the RSA key size, and whether the key is active, revoked or in testing mode.",
  mx:
    "An MX lookup shows the mail exchanger records of a domain: the servers that accept email for it, in the order senders try them. It tells you which provider handles a domain's mail, helps you confirm a migration to a new email service, and explains bounces caused by missing or wrong records. The report also checks SPF, DKIM, DMARC and MTA-STS, which decide whether mail from the domain is trusted.",
  propagation:
    "A DNS propagation checker shows whether a DNS change has reached the resolvers people actually use. After you edit a record, each resolver keeps serving its cached copy until the record's TTL runs out, so for a while different networks see different answers. This tool asks 12 large public resolvers, including Cloudflare, Google, Cisco OpenDNS, AdGuard, NextDNS and Alibaba, for the same record at once over DNS over HTTPS, and shows each answer with the seconds it has left in that resolver's cache. Add the value you expect and it tells you which resolvers already have it and when the rest should catch up.",
  download:
    "A download time calculator works out how long a file takes to transfer at a given internet speed. Enter the file size and your speed, and it shows the time at once, plus a table for common sizes and the speed you would need to finish within a minute, ten minutes or an hour. It handles both decimal units (MB, GB, TB) and the binary units Windows uses (MiB, GiB), and megabits or megabytes per second. Run our speed test first and it hands its result to this page, so the answer uses your real speed.",
  asn:
    "An ASN lookup shows the autonomous system behind a network: the number that internet providers, cloud companies and other large networks use to exchange routes with BGP. Enter an AS number to see who holds it, which regional registry assigned it, whether it currently announces routes, and every IPv4 and IPv6 prefix it announces. Enter an IP address instead to find the prefix and ASN that cover it. The data comes from RIPEstat, which combines registry records with live routing tables from the RIPE RIS collectors.",
  redirects:
    "A redirect checker follows a URL the way a browser or search engine does, one hop at a time, and shows every step: the status code, where it points, how long it took and whether it set HSTS. Use it to confirm that HTTP goes to HTTPS in one hop, that an old page has a permanent 301 or 308 to its new address, that www and non-www settle on one version, and that a shortened or tracking link ends where you expect. It also catches loops, long chains and meta refresh redirects on the final page.",
  "email-headers":
    "An email header analyzer turns the raw headers of a message into something readable. It lists every Received line in the order the message travelled, with the time each server added and the delay between hops, finds the first public IP address so you can look up where the message came from, and reads the SPF, DKIM and DMARC verdicts that the receiving server recorded. It also flags common signs of phishing, such as a Reply-To that differs from the sender. Everything runs in your browser.",
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
  mac: `<h3>How to read a MAC address</h3>
<p>A MAC address is six bytes, usually written as twelve hexadecimal digits such as <code>B8:27:EB:12:34:56</code>, <code>B8-27-EB-12-34-56</code> or the Cisco style <code>b827.eb12.3456</code>. The first part is the block IEEE assigned to an organization, and the rest is chosen by that organization for each device. Two bits in the first byte have special meanings, as IEEE's guidelines describe: the lowest bit marks a group (multicast) address, and the next bit marks a locally administered address that was not assigned by a manufacturer.</p>
<div class="tw"><table><tbody>
<tr><th>Block</th><th>Prefix length</th><th>Example prefix</th></tr>
<tr><td>MA-L (formerly OUI)</td><td>24 bits, 6 hex digits</td><td>B8:27:EB</td></tr>
<tr><td>MA-M</td><td>28 bits, 7 hex digits</td><td>00:69:67:A</td></tr>
<tr><td>MA-S (and the older IAB)</td><td>36 bits, 9 hex digits</td><td>00:1B:C5:07:4</td></tr>
</tbody></table></div>
<p>Smaller companies often get an MA-M or MA-S block inside a 24-bit prefix shared with other organizations. This tool checks all three registries, longest match first, so it names the right company where a lookup that only reads the first six digits would not.</p>
<h3>Randomized and private MAC addresses</h3>
<p>Modern phones hide their hardware address on Wi-Fi. Android 10 and later use a randomized MAC by default and set the locally administered bit, according to Android's documentation. Apple devices running iOS 14 or later use a different private Wi-Fi address for each network, and from iOS 18 you can choose a fixed or a rotating private address. If a device on your network shows an address whose second digit is 2, 6, A or E, it is almost certainly one of these, and its real manufacturer cannot be read from it.</p>
<h3>How to find your own MAC address</h3>
<ul>
<li>Windows: run <code>ipconfig /all</code> and read the Physical Address of your adapter, or run <code>getmac</code>.</li>
<li>Mac: run <code>ifconfig en0 | grep ether</code> in Terminal, or hold Option and click the Wi-Fi icon in the menu bar.</li>
<li>Linux: run <code>ip link</code> and read the value after <code>link/ether</code>.</li>
<li>iPhone and Android: open the details of the Wi-Fi network you are on. With a private address turned on, that is the address the network sees, not the hardware one.</li>
</ul>
<p>Our guide to <a href="/learn/what-is-a-mac-address">what a MAC address is</a> explains how it differs from an IP address and why websites never see it.</p>
<p class="note">Vendor data: IEEE <a href="https://standards-oui.ieee.org/oui/oui.csv" rel="noopener">MA-L</a>, <a href="https://standards-oui.ieee.org/oui28/mam.csv" rel="noopener">MA-M</a> and <a href="https://standards-oui.ieee.org/oui36/oui36.csv" rel="noopener">MA-S</a> registries, downloaded ${ouiMeta.updated} (${(ouiMeta.L + ouiMeta.M + ouiMeta.S).toLocaleString("en-US")} assignments). Sources: <a href="https://standards.ieee.org/wp-content/uploads/import/documents/tutorials/eui.pdf" rel="noopener">IEEE guidelines for EUI, OUI and CID</a>, <a href="https://source.android.com/docs/core/connect/wifi-mac-randomization-behavior" rel="noopener">Android MAC randomization behavior</a>, <a href="https://support.apple.com/en-us/102509" rel="noopener">Apple: private Wi-Fi addresses</a>, <a href="https://www.rfc-editor.org/rfc/rfc4291" rel="noopener">RFC 4291 (modified EUI-64)</a>.</p>`,
  dmarc: `<h3>What this DMARC checker looks at</h3>
<ul>
<li>The DMARC record itself, its syntax, and every tag: p, sp, np, t, adkim, aspf, rua, ruf and fo.</li>
<li>Whether the policy protects the domain. Only quarantine and reject stop spoofing; none only collects reports.</li>
<li>Inheritance. A subdomain without its own record uses its parent's, and the checker shows where the record was found.</li>
<li>Tags that RFC 9989 removed, such as pct, which receivers following the new standard ignore.</li>
<li>SPF, DKIM, MX, MTA-STS, TLS reporting and BIMI, so you can see what DMARC depends on.</li>
</ul>
<h3>DMARC tags explained</h3>
<div class="tw"><table><tbody>
<tr><th>Tag</th><th>Meaning</th><th>Default</th></tr>
<tr><td>p</td><td>Policy for the domain: none, quarantine or reject</td><td>none, if missing</td></tr>
<tr><td>sp</td><td>Policy for subdomains that exist</td><td>same as p</td></tr>
<tr><td>np</td><td>Policy for subdomains that do not exist (new in RFC 9989)</td><td>sp, then p</td></tr>
<tr><td>t</td><td>Test mode: y asks receivers to apply one level less than the policy (new in RFC 9989)</td><td>n</td></tr>
<tr><td>adkim, aspf</td><td>Alignment for DKIM and SPF: r (relaxed) or s (strict)</td><td>r</td></tr>
<tr><td>rua</td><td>Where to send daily aggregate reports</td><td>none</td></tr>
<tr><td>ruf</td><td>Where to send failure reports</td><td>none</td></tr>
</tbody></table></div>
<h3>How to move to p=reject safely</h3>
<ol>
<li>Publish <code>v=DMARC1; p=none; rua=mailto:</code> followed by an address you read, and collect reports for a few weeks.</li>
<li>Find every service that sends as your domain in the reports, and make sure each one passes SPF or DKIM with your domain.</li>
<li>Move to p=quarantine, watch the reports again, then move to p=reject.</li>
</ol>
<p class="note">Sources: <a href="https://www.rfc-editor.org/rfc/rfc9989" rel="noopener">RFC 9989 (DMARC)</a>, <a href="https://www.rfc-editor.org/rfc/rfc7208" rel="noopener">RFC 7208 (SPF)</a>, <a href="https://www.rfc-editor.org/rfc/rfc6376" rel="noopener">RFC 6376 (DKIM)</a>, <a href="https://www.rfc-editor.org/rfc/rfc8461" rel="noopener">RFC 8461 (MTA-STS)</a>, <a href="https://support.google.com/a/answer/81126" rel="noopener">Google email sender guidelines</a>.</p>`,
  spf: `<h3>What this SPF checker tests</h3>
<ul>
<li>That exactly one record starting with v=spf1 exists. Two records are a permanent error.</li>
<li>The DNS lookup count across all nested includes, against the limit of 10 in RFC 7208.</li>
<li>Void lookups, includes that return nothing. RFC 7208 says implementations should stop after two.</li>
<li>The all mechanism at the end: -all (fail), ~all (softfail), ?all (neutral) or the dangerous +all.</li>
<li>The ptr mechanism, which RFC 7208 says should not be published.</li>
</ul>
<h3>SPF qualifiers</h3>
<div class="tw"><table><tbody>
<tr><th>Qualifier</th><th>Result</th><th>Meaning</th></tr>
<tr><td>+ (or none)</td><td>pass</td><td>The server is authorized</td></tr>
<tr><td>-</td><td>fail</td><td>The server is not authorized</td></tr>
<tr><td>~</td><td>softfail</td><td>Probably not authorized</td></tr>
<tr><td>?</td><td>neutral</td><td>No statement either way</td></tr>
</tbody></table></div>
<h3>How to fix too many SPF lookups</h3>
<p>Remove includes for services you no longer use first. Replace an include with the ip4 and ip6 ranges it stands for only when the service publishes fixed ranges, because ip4 and ip6 do not count towards the limit. Sending marketing mail from a subdomain with its own SPF record also keeps the main record short.</p>
<p class="note">Sources: <a href="https://www.rfc-editor.org/rfc/rfc9989" rel="noopener">RFC 9989 (DMARC)</a>, <a href="https://www.rfc-editor.org/rfc/rfc7208" rel="noopener">RFC 7208 (SPF)</a>, <a href="https://www.rfc-editor.org/rfc/rfc6376" rel="noopener">RFC 6376 (DKIM)</a>, <a href="https://www.rfc-editor.org/rfc/rfc8461" rel="noopener">RFC 8461 (MTA-STS)</a>, <a href="https://support.google.com/a/answer/81126" rel="noopener">Google email sender guidelines</a>.</p>`,
  dkim: `<h3>How DKIM records work</h3>
<p>A mail server signs each message with a private key and adds a DKIM-Signature header naming the domain (d=) and the selector (s=). The receiver fetches the public key from the TXT record at <code>selector._domainkey.domain</code> and checks the signature. Using selectors lets a domain run several keys at once, one for each service, and rotate them without downtime.</p>
<h3>Selectors this checker tries</h3>
<p>Common ones include google (Google Workspace), selector1 and selector2 (Microsoft 365), k1 and k2 (Mailchimp and others), s1 and s2, fm1 to fm3 (Fastmail), protonmail to protonmail3 (Proton), zoho and zmail (Zoho), and default. If yours is not found, read the s= value from the DKIM-Signature header of a message you sent and enter it.</p>
<h3>Reading a DKIM record</h3>
<div class="tw"><table><tbody>
<tr><th>Tag</th><th>Meaning</th></tr>
<tr><td>v=DKIM1</td><td>Version, if present must come first</td></tr>
<tr><td>k=</td><td>Key type, rsa when missing</td></tr>
<tr><td>p=</td><td>The public key. Empty means the key is revoked</td></tr>
<tr><td>t=y</td><td>Testing: receivers treat signed mail like unsigned mail</td></tr>
</tbody></table></div>
<p class="note">Sources: <a href="https://www.rfc-editor.org/rfc/rfc9989" rel="noopener">RFC 9989 (DMARC)</a>, <a href="https://www.rfc-editor.org/rfc/rfc7208" rel="noopener">RFC 7208 (SPF)</a>, <a href="https://www.rfc-editor.org/rfc/rfc6376" rel="noopener">RFC 6376 (DKIM)</a>, <a href="https://www.rfc-editor.org/rfc/rfc8461" rel="noopener">RFC 8461 (MTA-STS)</a>, <a href="https://support.google.com/a/answer/81126" rel="noopener">Google email sender guidelines</a>.</p>`,
  mx: `<h3>What an MX lookup shows</h3>
<p>Every domain that receives email publishes MX records naming its mail servers, each with a priority number. Senders try the lowest number first. This lookup lists the servers, recognizes common providers from their hostnames (Google Workspace, Microsoft 365, Zoho, Proton, Fastmail, iCloud, Cloudflare Email Routing and others), and detects a null MX that says the domain takes no mail.</p>
<h3>Checking a migration to a new email provider</h3>
<ol>
<li>Replace the old MX records with the ones your new provider gives you, and remove any you no longer need.</li>
<li>Run this lookup and confirm only the new servers appear.</li>
<li>Update SPF to include the new provider and set up its DKIM key, then check both in the same report.</li>
</ol>
<p>DNS changes can take a while to reach every resolver. Our <a href="/dns">DNS lookup</a> lets you query Cloudflare and Google directly.</p>
<p class="note">Sources: <a href="https://www.rfc-editor.org/rfc/rfc9989" rel="noopener">RFC 9989 (DMARC)</a>, <a href="https://www.rfc-editor.org/rfc/rfc7208" rel="noopener">RFC 7208 (SPF)</a>, <a href="https://www.rfc-editor.org/rfc/rfc6376" rel="noopener">RFC 6376 (DKIM)</a>, <a href="https://www.rfc-editor.org/rfc/rfc8461" rel="noopener">RFC 8461 (MTA-STS)</a>, <a href="https://support.google.com/a/answer/81126" rel="noopener">Google email sender guidelines</a>.</p>`,
  propagation: `<h3>How this checker differs from map-based tools</h3>
<p>Most propagation checkers send a query from servers in different countries and show a tick or a cross on a map. That tells you what one server saw at one moment. This tool asks each resolver directly, reads the TTL in its answer, and subtracts any time the answer spent in an HTTP cache, as RFC 8484 requires. The remaining TTL is how long that resolver will keep its current answer, which is the real countdown to your change appearing there.</p>
<p>Large resolvers run many sites around the world. Queries from this tool reach the site of each provider nearest to the Cloudflare data center that handles your request, so caches in other regions can hold a different copy for a while.</p>
<h3>Resolvers checked</h3>
<p>Cloudflare 1.1.1.1, Google Public DNS 8.8.8.8, Cisco OpenDNS, AdGuard DNS (unfiltered), Control D, NextDNS, DNS.SB, Alibaba Public DNS, Tencent DNSPod, LibreDNS, dnsforge and 360 Secure DNS.</p>
<h3>Reading the results</h3>
<ul>
<li>New value: the resolver already returns the value you entered.</li>
<li>Old value: it still returns something else. The TTL column says how many seconds until it asks again.</li>
<li>No record: the resolver got NXDOMAIN or an empty answer, common for a brand new record that a resolver cached as missing.</li>
<li>No answer: the resolver did not reply in time. Try again.</li>
</ul>
<p>To see every record type for a domain from Cloudflare or Google, use the <a href="/dns">DNS lookup</a>. The guide to <a href="/learn/how-to-flush-dns-cache">flushing your DNS cache</a> clears the copy on your own device.</p>
<p class="note">Sources: <a href="https://www.rfc-editor.org/rfc/rfc1035" rel="noopener">RFC 1035 (DNS and TTL)</a>, <a href="https://www.rfc-editor.org/rfc/rfc8484" rel="noopener">RFC 8484 (DNS over HTTPS)</a>. The 48-hour .com delegation TTL was read from a.gtld-servers.net.</p>`,
  download: `<h3>How download time is calculated</h3>
<p>Time in seconds equals the file size in bits divided by the speed in bits per second. A byte is 8 bits, so a 10 GB file is 80,000 megabits, and at 100 Mbps it takes 800 seconds, a little over 13 minutes.</p>
<h3>MB or MiB, GB or GiB?</h3>
<div class="tw"><table><tbody>
<tr><th>Unit</th><th>Bytes</th><th>Prefix</th></tr>
<tr><td>1 MB (megabyte)</td><td>1,000,000</td><td>Decimal, 10 to the power 6</td></tr>
<tr><td>1 MiB (mebibyte)</td><td>1,048,576</td><td>Binary, 2 to the power 20</td></tr>
<tr><td>1 GB (gigabyte)</td><td>1,000,000,000</td><td>Decimal, 10 to the power 9</td></tr>
<tr><td>1 GiB (gibibyte)</td><td>1,073,741,824</td><td>Binary, 2 to the power 30</td></tr>
</tbody></table></div>
<p>NIST defines the binary prefixes kibi, mebi and gibi as powers of 2, separate from the decimal kilo, mega and giga. Some software labels binary sizes with the decimal names, so a size shown as "4 GB" may really be 4 GiB, about 4.29 billion bytes. Pick the unit that matches where you read the size.</p>
<h3>Speeds: Mbps and MB/s</h3>
<p>Internet plans and our <a href="/speed-test">speed test</a> use megabits per second. Browsers and game launchers often show megabytes per second, which is eight times smaller for the same connection. Our guide to <a href="/learn/what-is-a-good-internet-speed">what a good internet speed is</a> explains how much speed different households need.</p>
<p class="note">Source: <a href="https://physics.nist.gov/cuu/Units/binary.html" rel="noopener">NIST, prefixes for binary multiples</a>.</p>`,
  asn: `<h3>What the results mean</h3>
<ul>
<li>Holder: the organization name registered for the number.</li>
<li>Registry: the regional internet registry, or IANA block, the number came from.</li>
<li>Announced: whether the network currently originates routes seen by the RIPE RIS collectors. Transit-only networks can show no prefixes of their own.</li>
<li>Prefixes: the IPv4 and IPv6 blocks the network announces, with the total number of IPv4 addresses they cover.</li>
</ul>
<h3>Special AS numbers</h3>
<div class="tw"><table><tbody>
<tr><th>Range</th><th>Use</th></tr>
<tr><td>64512 to 65534</td><td>Private use, 16-bit (RFC 6996)</td></tr>
<tr><td>4200000000 to 4294967294</td><td>Private use, 32-bit (RFC 6996)</td></tr>
<tr><td>64496 to 64511, 65536 to 65551</td><td>Documentation (RFC 5398)</td></tr>
</tbody></table></div>
<p>To see where an address is and which provider uses it, try the <a href="/lookup">IP lookup</a>. The <a href="/whois">WHOIS lookup</a> shows the registration record for an IP range.</p>
<p class="note">Sources: <a href="https://stat.ripe.net/docs/data-api/api-endpoints/as-overview" rel="noopener">RIPEstat data API</a>, <a href="https://www.iana.org/numbers" rel="noopener">IANA number resources</a>, <a href="https://www.rfc-editor.org/rfc/rfc6996" rel="noopener">RFC 6996</a>, <a href="https://www.rfc-editor.org/rfc/rfc5398" rel="noopener">RFC 5398</a>.</p>`,
  redirects: `<h3>Redirect status codes</h3>
<div class="tw"><table><tbody>
<tr><th>Code</th><th>Meaning (RFC 9110)</th><th>How Google treats it</th></tr>
<tr><td>301 Moved Permanently</td><td>New permanent address; a POST may become GET</td><td>Permanent: the target becomes canonical</td></tr>
<tr><td>302 Found</td><td>Temporarily at another address; a POST may become GET</td><td>Temporary</td></tr>
<tr><td>303 See Other</td><td>Go to a different resource with GET</td><td>Temporary</td></tr>
<tr><td>307 Temporary Redirect</td><td>Temporary; the method must not change</td><td>Temporary</td></tr>
<tr><td>308 Permanent Redirect</td><td>Permanent; the method stays the same</td><td>Permanent</td></tr>
</tbody></table></div>
<h3>A clean redirect setup</h3>
<ol>
<li>Send http:// and www (or non-www) to your one preferred HTTPS address in a single permanent redirect.</li>
<li>When a page moves, point the old address straight at the new one instead of through intermediate hops.</li>
<li>Set an HSTS header on HTTPS so returning browsers skip the HTTP hop entirely.</li>
</ol>
<p>The checker identifies itself as ipcomet-redirect-checker, so some sites that treat bots differently may redirect it to a different place than a browser. Our <a href="/dns-propagation">DNS propagation checker</a> helps when a redirect depends on a recent DNS change.</p>
<p class="note">Sources: <a href="https://www.rfc-editor.org/rfc/rfc9110" rel="noopener">RFC 9110 (HTTP Semantics), section 15.4</a>, <a href="https://developers.google.com/search/docs/crawling-indexing/301-redirects" rel="noopener">Google Search Central: redirects and Google Search</a>.</p>`,
  "email-headers": `<h3>How to read email headers</h3>
<p>Each mail server that handles a message adds a Received line at the top, so the newest hop is first and the original sender is at the bottom. The analyzer reverses them into travel order and works out the delay between hops from their timestamps. A long delay usually means a server queued the message, often because of spam filtering or a busy relay.</p>
<h3>Signs of a spoofed or phishing email</h3>
<ul>
<li>dmarc=fail, or spf=fail together with a DKIM failure, in Authentication-Results.</li>
<li>A Reply-To address on a different domain from the From address.</li>
<li>A Return-Path domain that has nothing to do with the brand in the From name.</li>
<li>An originating IP on a residential or hosting network for mail that claims to come from a large company. Check it with our <a href="/reputation">IP reputation check</a>.</li>
</ul>
<p>To check the sending domain's own setup, run the <a href="/dmarc-checker">DMARC checker</a>.</p>
<p class="note">Sources: <a href="https://www.rfc-editor.org/rfc/rfc8601" rel="noopener">RFC 8601 (Authentication-Results)</a>, <a href="https://www.rfc-editor.org/rfc/rfc5322" rel="noopener">RFC 5322 (Internet Message Format, trace fields)</a>.</p>`,
};
