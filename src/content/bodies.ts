/** Article bodies (trusted, hand-written HTML). Kept apart from metadata so the Worker bundle stays small. */
export const BODIES: Record<string, string> = {
  "what-is-an-ip-address": `
<p>An IP address (Internet Protocol address) is a number that identifies a device or network on the internet, so data knows where to go and where it came from. Think of it as the return address on a letter. Without one, a website would have nowhere to send the page you asked for.</p>

<h2>What does an IP address look like?</h2>
<p>There are two formats in use today. An IPv4 address is four numbers separated by dots, such as <code>203.0.113.42</code>. An IPv6 address is longer and written in hexadecimal, such as <code>2001:db8:85a3::8a2e:370:7334</code>. Both do the same job. If you want the details, read <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a>.</p>

<h2>What is an IP address used for?</h2>
<ul>
<li><strong>Routing.</strong> Routers read the destination address on every packet and pass it along until it arrives.</li>
<li><strong>Identifying a network.</strong> Servers see the address your traffic comes from and send the reply back to it.</li>
<li><strong>Rough location.</strong> Services use IP databases to guess your country or city, for language, currency or content licensing.</li>
<li><strong>Security.</strong> Sites use addresses to rate-limit abuse, block bad actors and allow-list trusted ones.</li>
</ul>

<h2>Public and private addresses</h2>
<p>Your home has one public IP address that the rest of the internet sees, and every device inside it has a private address that only works on your local network. Your router translates between the two. We explain this in <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>How do you get an IP address?</h2>
<p>Your internet service provider assigns the public address, usually automatically through a system called DHCP. Most home connections receive a <em>dynamic</em> address that can change over time, while businesses often pay for a <em>static</em> one that never does. See <a href="/learn/why-does-my-ip-address-change">why your IP address keeps changing</a>.</p>

<h2>What does your IP address reveal about you?</h2>
<p>A public IP address typically reveals your internet provider, your country and often your city or region. It does not reveal your name, your street address or what you do online. Anyone who wants to connect an address to a person normally needs your provider's records, which are released only through legal process. For a fuller answer, read <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a></p>

<h2>How to find your IP address</h2>
<p>Your public IP address is the one at the top of our <a href="/">home page</a>. For every device and operating system, see <a href="/learn/how-to-find-your-ip-address">how to find your IP address</a>. To find the private address of a device on your network:</p>
<ul>
<li><strong>Windows:</strong> open Command Prompt and run <code>ipconfig</code>.</li>
<li><strong>macOS:</strong> open System Settings, choose Network and select your connection.</li>
<li><strong>Linux:</strong> run <code>ip addr</code> in a terminal.</li>
<li><strong>iPhone or Android:</strong> open the Wi-Fi settings and tap your network.</li>
</ul>
`,

  "ipv4-vs-ipv6": `
<p>IPv4 and IPv6 are the two versions of the Internet Protocol. Both give devices an address so they can talk to each other. IPv4 is the original and is running out of space. IPv6 is the newer standard with a far larger pool.</p>

<h2>The key differences</h2>
<div class="tw"><table><tbody>
<tr><th>Feature</th><th>IPv4</th><th>IPv6</th></tr>
<tr><td>Address size</td><td>32 bits</td><td>128 bits</td></tr>
<tr><td>Total addresses</td><td>About 4.3 billion</td><td>About 340 undecillion (3.4 × 10<sup>38</sup>)</td></tr>
<tr><td>Written as</td><td>Decimal, dotted: <code>192.0.2.1</code></td><td>Hexadecimal, colons: <code>2001:db8::1</code></td></tr>
<tr><td>Address sharing (NAT)</td><td>Very common</td><td>Rarely needed</td></tr>
<tr><td>Typical home subnet</td><td>/24</td><td>/64</td></tr>
</tbody></table></div>

<h2>Why does IPv6 exist?</h2>
<p>When IPv4 was designed in the early 1980s, 4.3 billion addresses looked like plenty. Then phones, laptops, TVs and sensors arrived. The central pool of free IPv4 addresses ran out in 2011, and regional registries have since run low too. Providers cope by sharing a single public IPv4 address between many customers using carrier-grade NAT, and by trading existing blocks.</p>
<p>IPv6 solves the shortage outright. It also simplifies routing, removes the need for most address translation and was designed with modern networking in mind.</p>

<h2>Are IPv4 and IPv6 compatible?</h2>
<p>Not directly. A device that only speaks IPv4 cannot talk to one that only speaks IPv6. In practice most networks run <strong>dual stack</strong>, which means a device has both an IPv4 and an IPv6 address and uses whichever works best. Your browser usually tries IPv6 first and falls back to IPv4 within a fraction of a second.</p>

<h2>Which one am I using?</h2>
<p>Open our <a href="/">IP checker</a>. The large address at the top is the one your browser used, and the two lines underneath show whether you also have an IPv4 and an IPv6 address. If IPv6 says &ldquo;Not detected&rdquo;, your provider or router probably has not enabled it.</p>

<h2>Does it matter for privacy?</h2>
<p>A little. IPv6 addresses are so numerous that each device can have its own public address, which could make tracking easier. To limit this, operating systems use <em>privacy extensions</em> that generate temporary, rotating addresses for outgoing connections. If you use a VPN, make sure it handles both versions, otherwise one of them can bypass the tunnel. Our <a href="/webrtc">WebRTC leak test</a> can help you spot problems.</p>

<h2>Do I need to do anything?</h2>
<p>Usually not. If your provider supports IPv6, your router will probably use it automatically. If you run servers, make sure your DNS has both an A record and an AAAA record, and that your firewall rules cover both. See <a href="/learn/dns-records-explained">DNS records explained</a>.</p>
`,

  "public-vs-private-ip-address": `
<p>Every home network uses two kinds of IP address. A <strong>public</strong> address identifies your whole connection to the internet, and <strong>private</strong> addresses identify each device inside your home. Understanding the split explains why you cannot simply connect to a laptop from across the world, and why port forwarding exists.</p>

<h2>Public IP address</h2>
<p>This is the address websites see when you visit them. Your internet provider assigns it to your router, and every device on your network shares it. It is unique on the internet at any moment, and it is what our <a href="/">IP checker</a> displays.</p>

<h2>Private IP address</h2>
<p>Private addresses are used only inside local networks, so they can be reused by millions of homes without clashing. Your router hands them out to your phone, laptop and TV. Three IPv4 ranges are reserved for this:</p>
<div class="tw"><table><tbody>
<tr><th>Range</th><th>CIDR</th><th>Typical use</th></tr>
<tr><td><code>10.0.0.0 – 10.255.255.255</code></td><td>10.0.0.0/8</td><td>Large companies, some routers</td></tr>
<tr><td><code>172.16.0.0 – 172.31.255.255</code></td><td>172.16.0.0/12</td><td>Medium networks, Docker</td></tr>
<tr><td><code>192.168.0.0 – 192.168.255.255</code></td><td>192.168.0.0/16</td><td>Most home routers</td></tr>
</tbody></table></div>
<p>Other special ranges you may meet include <code>127.0.0.1</code> (your own device, called loopback), <code>169.254.x.x</code> (self-assigned when DHCP fails) and <code>100.64.0.0/10</code> (used by providers for carrier-grade NAT).</p>

<h2>How do public and private IP addresses work together?</h2>
<p>Your router performs <strong>network address translation</strong> (NAT). When your laptop requests a web page, the router replaces the laptop's private address with the public one, remembers who asked, and forwards the reply back to the right device. Unsolicited traffic from the internet has no matching entry, so the router drops it. That is a useful side effect: NAT acts as a basic shield.</p>

<h2>What about IPv6?</h2>
<p>With IPv6 most devices receive a globally routable address, and the router's firewall is what blocks unwanted inbound traffic instead of NAT. IPv6 also has private-style ranges: unique local addresses (<code>fc00::/7</code>) and link-local addresses (<code>fe80::/10</code>). See <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a>.</p>

<h2>Why does the difference matter?</h2>
<ul>
<li><strong>Hosting from home.</strong> To reach a game server or camera from outside, you have to forward a port from the public address to a private one. Read <a href="/learn/what-is-port-forwarding">what port forwarding is</a>.</li>
<li><strong>Privacy.</strong> Websites see only your public address, never the private ones behind it.</li>
<li><strong>Troubleshooting.</strong> If the router's WAN address differs from the public address you see online, your provider is probably using carrier-grade NAT.</li>
</ul>
`,

  "how-to-change-your-ip-address": `
<p>Most home internet connections use a dynamic IP address, so you can change it if you need to. Here are five methods, from simplest to most reliable, and what each really does.</p>

<h2>1. Restart your router</h2>
<p>Unplug your modem and router, wait a few minutes, then plug them back in. Your provider may assign a new address when the router reconnects. It does not always work, because many providers reserve the same address for your connection for days or weeks. Leaving the equipment off for longer, or overnight, improves your odds.</p>

<h2>2. Ask your internet provider</h2>
<p>If you have a dynamic address, support staff can often reset it. If you have a static address, they can issue a different one. This is the cleanest option when you need a genuinely new address, for example after being targeted by an attack.</p>

<h2>3. Use a VPN</h2>
<p>A VPN routes your traffic through a server run by the VPN provider, so websites see the server's address instead of yours. You can switch locations in seconds. Choose a provider you trust, because it can see your traffic instead of your internet provider.</p>

<h2>4. Use a proxy or Tor</h2>
<p>A proxy forwards your requests through another machine, and Tor sends them through several volunteer relays. Both hide your real address from the sites you visit. They are slower than a VPN and some websites block them.</p>

<h2>5. Switch networks</h2>
<p>Connecting through a mobile hotspot, a coffee shop or a friend's Wi-Fi gives you a different public address for as long as you are connected. It is simple, but obviously only temporary.</p>

<h2>What does not work</h2>
<p>Running <code>ipconfig /release</code> and <code>ipconfig /renew</code> on your computer only changes the private address your router gave to that device. Websites will not notice, because they see your router's public address.</p>

<h2>Check that it worked</h2>
<p>Open our <a href="/">IP checker</a> before and after the change and compare the two addresses. If you use a VPN, also run the <a href="/webrtc">WebRTC leak test</a>, because a browser can sometimes still reveal your real address. Read <a href="/learn/webrtc-leak-explained">how WebRTC leaks work</a>.</p>

<h2>Is changing your IP a privacy fix?</h2>
<p>Only partly. A new address stops sites from linking you to the old one, but cookies, logins and browser fingerprints still identify you. If you want websites to see a different address from your provider's, read <a href="/learn/how-to-hide-your-ip-address">how to hide your IP address</a>. For the full picture, see <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a></p>
`,

  "can-someone-track-you-by-ip-address": `
<p>Short answer: someone can learn roughly where you are and who your internet provider is, but they cannot find your name or home address from your IP address alone. Here is what is and is not possible.</p>

<h2>What does your IP address reveal?</h2>
<ul>
<li><strong>Your internet provider</strong> and the network it belongs to.</li>
<li><strong>Your approximate location</strong>, usually the country, and often the city or region. Accuracy varies, and it frequently points to your provider's regional hub instead of your house.</li>
<li><strong>Your connection type</strong>, such as residential, mobile or a data center.</li>
</ul>
<p>You can see exactly what others see by using our <a href="/lookup">IP lookup</a> on your own address.</p>

<h2>What does your IP address not reveal?</h2>
<ul>
<li>Your name, email or phone number.</li>
<li>Your street address.</li>
<li>The websites you visit, or the content of your traffic.</li>
</ul>
<p>Only your internet provider knows which customer had a given address at a given time, and it releases that information to authorities with proper legal process, not to the public.</p>

<h2>How do people get your IP address?</h2>
<p>Any website, server or peer you connect to sees your address. Common ways it is collected include visiting a site, joining a game lobby or voice chat, using peer-to-peer file sharing, and clicking a link to a page controlled by someone else. Email normally does not expose your address to the recipient if you use a large webmail provider, but some mail systems include it in message headers.</p>

<h2>What can someone do with your IP address?</h2>
<ul>
<li><strong>Flood your connection</strong> with traffic (a denial-of-service attack), most often seen in online gaming disputes.</li>
<li><strong>Probe for open ports</strong> and exposed services such as remote desktop or cameras.</li>
<li><strong>Geolocate you roughly</strong>, or block you from a service.</li>
</ul>
<p>Having your address does not let someone read your files or take over your computer. That requires a weakness such as an exposed service or a phishing success.</p>

<h2>How to protect yourself</h2>
<ol>
<li>Hide your address from the sites you visit with a reputable VPN or another method from <a href="/learn/how-to-hide-your-ip-address">how to hide your IP address</a>.</li>
<li>Keep your router firmware and devices updated and do not expose services you do not need. Check what is open with our <a href="/port">port checker</a>.</li>
<li>Avoid clicking links from strangers, especially in games and chats.</li>
<li>If your address is being attacked, ask your provider to <a href="/learn/how-to-change-your-ip-address">change it</a>.</li>
<li>Test for <a href="/learn/webrtc-leak-explained">WebRTC leaks</a>, which can expose your real address behind a VPN.</li>
</ol>
`,

  "why-does-my-ip-address-change": `
<p>If you check your IP address a few weeks apart and it looks different, nothing is wrong. Most internet providers assign addresses dynamically, which means they can change.</p>

<h2>Dynamic vs static IP addresses</h2>
<p>A <strong>dynamic</strong> address is borrowed from a pool and can change. A <strong>static</strong> address is permanently assigned to you. Home plans are almost always dynamic. Static addresses are mostly sold to businesses, usually for an extra fee, because they are useful for hosting and remote access.</p>

<h2>Why does my IP address keep changing?</h2>
<ul>
<li><strong>DHCP lease expires.</strong> Your router receives its address on a lease. When the lease ends, or the router restarts after the lease has lapsed, the provider can hand out a different one.</li>
<li><strong>Router or modem restart.</strong> A power cut or reboot can trigger a new assignment, particularly if you were offline for a while.</li>
<li><strong>Provider maintenance.</strong> Network changes or migrations can reshuffle customers between address pools.</li>
<li><strong>Switching networks.</strong> Moving from home Wi-Fi to mobile data, or to a coffee shop, obviously changes your address.</li>
<li><strong>Using a VPN or proxy.</strong> Your visible address becomes the server's.</li>
</ul>

<h2>Mobile networks and shared addresses</h2>
<p>Mobile carriers and some home providers use <strong>carrier-grade NAT</strong>, sharing one public address between many customers. Your visible address can change often, and may even appear to be in a different city. It also makes hosting at home hard, because inbound connections cannot reach you. Read <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a> for the background.</p>

<h2>What about IPv6?</h2>
<p>With IPv6, your provider typically delegates a prefix to your router, and devices create their own addresses inside it. Devices also rotate temporary addresses for privacy, so the address a website sees can change within a day even though the prefix does not. More in <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a>.</p>

<h2>Do I need a static IP?</h2>
<p>Only if you host a server, need remote access to your home, or must be allow-listed by a service. Before paying for one, consider <strong>dynamic DNS</strong>. It gives you a stable name such as <code>myhome.example.net</code> that updates automatically whenever your address changes.</p>

<h2>How to track your address</h2>
<p>Check our <a href="/">IP checker</a> any time, or use the <a href="/lookup">lookup tool</a> to see which provider and region currently own it. If you want a new one on purpose, see <a href="/learn/how-to-change-your-ip-address">how to change your IP address</a>.</p>
`,

  "dns-records-explained": `
<p>DNS, the Domain Name System, is the internet's phone book. It translates names like <code>example.com</code> into the addresses and settings computers need. Each entry in that phone book is a <strong>record</strong>, and there are a handful of types you will meet again and again.</p>

<h2>The record types that matter</h2>
<div class="tw"><table><tbody>
<tr><th>Type</th><th>What it does</th><th>Example value</th></tr>
<tr><td><strong>A</strong></td><td>Maps a name to an IPv4 address</td><td><code>203.0.113.10</code></td></tr>
<tr><td><strong>AAAA</strong></td><td>Maps a name to an IPv6 address</td><td><code>2001:db8::10</code></td></tr>
<tr><td><strong>CNAME</strong></td><td>Makes one name an alias of another</td><td><code>www → example.com</code></td></tr>
<tr><td><strong>MX</strong></td><td>Says which servers receive email</td><td><code>10 mail.example.com</code></td></tr>
<tr><td><strong>TXT</strong></td><td>Holds text such as SPF, DKIM, DMARC and verification codes</td><td><code>v=spf1 include:_spf.example.com ~all</code></td></tr>
<tr><td><strong>NS</strong></td><td>Lists the nameservers that control the domain</td><td><code>ns1.example.net</code></td></tr>
<tr><td><strong>SOA</strong></td><td>Zone details: primary server, admin contact, serial and timers</td><td><code>ns1.example.net hostmaster.example.com …</code></td></tr>
<tr><td><strong>CAA</strong></td><td>Restricts which certificate authorities may issue certificates</td><td><code>0 issue "letsencrypt.org"</code></td></tr>
<tr><td><strong>PTR</strong></td><td>Reverse lookup: maps an IP address back to a name</td><td><code>mail.example.com</code></td></tr>
</tbody></table></div>

<h2>TTL: how long answers are cached</h2>
<p>Every record has a time to live (TTL), in seconds. Resolvers keep an answer for that long before asking again. A low TTL such as 300 makes changes appear quickly. A high TTL such as 86400 reduces lookups. If you plan to move a site, lower the TTL a day ahead of time.</p>

<h2>Setting up a website</h2>
<p>Point the bare domain to your server with an A record (and an AAAA record if you support IPv6). Point <code>www</code> to the bare domain with a CNAME. A CNAME cannot sit at the root of a domain alongside other records, so many DNS providers offer an &ldquo;ALIAS&rdquo; or &ldquo;flattened CNAME&rdquo; for that case.</p>

<h2>Setting up email</h2>
<ul>
<li><strong>MX records</strong> list your mail servers. Lower numbers mean higher priority.</li>
<li><strong>SPF</strong> (a TXT record) lists which servers may send mail for you.</li>
<li><strong>DKIM</strong> (a TXT record on a selector name) publishes a key so recipients can verify signatures.</li>
<li><strong>DMARC</strong> (a TXT record at <code>_dmarc.yourdomain</code>) tells receivers what to do with mail that fails checks.</li>
</ul>

<h2>Why do my DNS changes not show up?</h2>
<p>Caching. Resolvers hold old answers until the TTL expires, so a new record can take minutes or hours to be visible everywhere. Query two different resolvers to compare. Our <a href="/dns">DNS lookup</a> lets you switch between Cloudflare and Google.</p>

<h2>Check any domain</h2>
<p>Try the <a href="/dns">DNS lookup</a> on your own domain to see all of these records at once, and use <a href="/whois">WHOIS</a> to see the registrar and nameservers that control them.</p>
`,

  "webrtc-leak-explained": `
<p>You connect to a VPN, check that your address changed, and assume you are hidden. But your browser may still be showing your real address to websites through a feature called WebRTC. This is a <strong>WebRTC leak</strong>.</p>

<h2>What is WebRTC?</h2>
<p>WebRTC is a browser technology for real-time communication such as video calls, voice chat and peer-to-peer file transfer, without plugins. To connect two people directly, each browser needs to know its own public address, so it asks a STUN server. The server replies with the address it sees.</p>

<h2>How does a WebRTC leak happen?</h2>
<p>That request is made by the browser itself, and it can travel outside the VPN tunnel. Any web page can start a WebRTC connection with a few lines of JavaScript, read the addresses the browser gathers, and send them to its own server. You do not see a prompt. If the address returned differs from the one the website sees through your VPN, the page has learned your real one.</p>
<p>Modern browsers hide your <em>local</em> network address behind a random name ending in <code>.local</code>, which helps. The <em>public</em> address is the part that can still leak.</p>

<h2>How to test for a leak</h2>
<ol>
<li>Connect to your VPN.</li>
<li>Open our <a href="/webrtc">WebRTC leak test</a> and press Run.</li>
<li>Compare the public address WebRTC reports with the address shown under &ldquo;IP websites see&rdquo;.</li>
</ol>
<p>If they match, or WebRTC reports no public address at all, you are fine. If the WebRTC address is different and belongs to your real internet provider, you have a leak. You can look up any address with the <a href="/lookup">IP lookup tool</a> to see who it belongs to.</p>

<h2>How to fix it</h2>
<ul>
<li><strong>Choose a VPN with leak protection.</strong> Many VPN apps and browser extensions block or rewrite WebRTC traffic.</li>
<li><strong>Change your browser setting.</strong> Firefox lets you set <code>media.peerconnection.enabled</code> to <code>false</code> on the <code>about:config</code> page, which disables WebRTC completely and will break browser video calls. Brave has a &ldquo;WebRTC IP handling policy&rdquo; setting under privacy.</li>
<li><strong>Use a privacy extension.</strong> Reputable extensions can restrict how WebRTC chooses network routes.</li>
<li><strong>Retest.</strong> Run the test again after every change.</li>
</ul>

<h2>What about DNS leaks?</h2>
<p>A separate problem is a <strong>DNS leak</strong>, where your lookups go to your internet provider's resolver instead of the VPN's, revealing the sites you visit. A WebRTC test does not check for this. Use a dedicated DNS leak test that generates unique test hostnames, and make sure your VPN app's DNS protection is enabled. Also confirm your VPN covers IPv6, as explained in <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a>.</p>

<h2>Is WebRTC bad?</h2>
<p>No. It makes video calls and voice chat in the browser possible. The risk only matters if you rely on a VPN or proxy to hide your address. See <a href="/learn/how-to-change-your-ip-address">how to change your IP address</a> for your options.</p>
`,

  "what-is-port-forwarding": `
<p>Port forwarding tells your router to send incoming internet traffic on a specific port to a specific device inside your home network. It is what makes game servers, security cameras, Plex and remote desktop reachable from outside.</p>

<h2>Why is port forwarding needed?</h2>
<p>Your home has one public address shared by every device, and your router uses NAT to keep the devices private. A request arriving from the internet has no idea which device it is for, so the router drops it. A port forwarding rule adds an exception: &ldquo;traffic arriving on port 25565 goes to the gaming PC at 192.168.1.50&rdquo;. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a> for the background.</p>

<h2>How to set it up</h2>
<ol>
<li><strong>Give the device a fixed local address.</strong> Create a DHCP reservation in the router so the device keeps the same private IP.</li>
<li><strong>Open the router's admin page.</strong> It is often <code>192.168.1.1</code> or <code>192.168.0.1</code>. The login is printed on the router.</li>
<li><strong>Find the Port Forwarding section.</strong> It may be under Advanced, NAT or Gaming.</li>
<li><strong>Create a rule.</strong> Enter the external port, the device's private address, the internal port and the protocol (TCP, UDP or both).</li>
<li><strong>Allow the port in the device's firewall</strong> and make sure the service is running.</li>
<li><strong>Test it.</strong> Use our <a href="/port">port checker</a> to confirm the port is open from the internet.</li>
</ol>

<h2>Common ports</h2>
<ul>
<li><code>22</code> SSH</li>
<li><code>80</code> and <code>443</code> HTTP and HTTPS</li>
<li><code>3389</code> Remote Desktop</li>
<li><code>25565</code> Minecraft Java</li>
<li><code>32400</code> Plex</li>
<li><code>51820</code> WireGuard (UDP)</li>
</ul>

<h2>Why does a port still show as closed?</h2>
<ul>
<li><strong>The service is not listening</strong> on that port or is bound only to localhost.</li>
<li><strong>A firewall blocks it</strong> on the device or the router.</li>
<li><strong>Double NAT.</strong> A second router, such as your provider's modem behind your own router, needs its own forwarding rule or bridge mode.</li>
<li><strong>Carrier-grade NAT.</strong> If your router's WAN address differs from the address on our <a href="/">IP checker</a>, your provider shares one address between customers and inbound connections will never arrive. Ask for a public address, or use a tunnel. See <a href="/learn/why-does-my-ip-address-change">why your IP address changes</a>.</li>
<li><strong>UDP.</strong> Our checker tests TCP only, because UDP has no handshake to confirm.</li>
</ul>

<h2>Staying safe</h2>
<p>Every open port is an entrance. Forward only what you need, keep the software behind it updated, use strong passwords or keys, and close ports you no longer use. For private services such as a home server or camera, a VPN or a tunnel service is safer than exposing a port at all.</p>
`,

  "cidr-subnet-mask-explained": `
<p>CIDR notation is a compact way to write a network. In <code>192.168.1.0/24</code>, the part after the slash says how many bits of the address identify the network. The rest identify devices on it. Once you can read that number, subnetting becomes simple arithmetic.</p>

<h2>Reading the number after the slash</h2>
<p>An IPv4 address has 32 bits. A <code>/24</code> uses the first 24 as the network portion, leaving 8 bits for hosts, which gives 2<sup>8</sup> = 256 addresses. The formula is:</p>
<p><code>addresses = 2 ^ (32 − prefix length)</code></p>
<p>A bigger prefix number means a smaller network.</p>

<h2>Common IPv4 sizes</h2>
<div class="tw"><table><tbody>
<tr><th>CIDR</th><th>Subnet mask</th><th>Addresses</th><th>Usable hosts</th></tr>
<tr><td>/8</td><td>255.0.0.0</td><td>16,777,216</td><td>16,777,214</td></tr>
<tr><td>/16</td><td>255.255.0.0</td><td>65,536</td><td>65,534</td></tr>
<tr><td>/24</td><td>255.255.255.0</td><td>256</td><td>254</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>64</td><td>62</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>16</td><td>14</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>4</td><td>2</td></tr>
<tr><td>/31</td><td>255.255.255.254</td><td>2</td><td>2 (point-to-point links)</td></tr>
<tr><td>/32</td><td>255.255.255.255</td><td>1</td><td>1 (a single host)</td></tr>
</tbody></table></div>
<p>Usable hosts are two fewer than the total because the first address is the <strong>network address</strong> and the last is the <strong>broadcast address</strong>. The exceptions are /31 and /32.</p>

<h2>A worked example</h2>
<p>Take <code>192.168.10.77/26</code>.</p>
<ol>
<li>A /26 leaves 6 host bits, so each block holds 64 addresses.</li>
<li>Blocks start at .0, .64, .128 and .192. The address .77 falls in the block starting at .64.</li>
<li>Network address: <code>192.168.10.64</code>.</li>
<li>Broadcast address: <code>192.168.10.127</code>.</li>
<li>Usable hosts: <code>192.168.10.65</code> to <code>192.168.10.126</code>, which is 62 hosts.</li>
<li>Subnet mask: <code>255.255.255.192</code>.</li>
</ol>
<p>Paste it into our <a href="/subnet">subnet calculator</a> to check the answer.</p>

<h2>Wildcard masks</h2>
<p>A wildcard mask is the inverse of the subnet mask. For <code>255.255.255.192</code> it is <code>0.0.0.63</code>. Some routers and firewalls use wildcard masks in access rules.</p>

<h2>CIDR in IPv6</h2>
<p>The idea is identical, with 128 bits. A single LAN is normally a <code>/64</code>, a home network is often delegated a <code>/56</code> or <code>/60</code> by the provider, and a larger site gets a <code>/48</code>. Because a /64 holds 2<sup>64</sup> addresses, you never count hosts in IPv6. You plan how many /64 networks you need. See <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a>.</p>

<h2>Where you will see CIDR</h2>
<ul>
<li>Cloud security groups and firewall rules, for example <code>10.0.0.0/16</code>.</li>
<li>The private ranges in <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</li>
<li>Network ownership records. Our <a href="/whois">WHOIS tool</a> shows the CIDR block an address belongs to.</li>
</ul>
`,

  "fix-slow-dns-lookup": `
<p>Every time you open a website, your device first asks a DNS resolver to turn the name into an IP address. When that step is slow, every page feels sluggish even if your connection is fast, and your browser sits on &ldquo;Resolving host&rdquo; or &ldquo;Looking up&hellip;&rdquo; before anything loads. The good news is that it is usually easy to fix.</p>

<h2>First, measure it</h2>
<p>A healthy lookup takes well under 50 milliseconds, and a cached one is nearly instant. To see yours:</p>
<ul>
<li><strong>Command line.</strong> Run <code>nslookup example.com</code> or, on macOS and Linux, <code>dig example.com</code> and read the &ldquo;Query time&rdquo;.</li>
<li><strong>Browser.</strong> Open developer tools, go to the Network tab, click a request and check the &ldquo;DNS Lookup&rdquo; timing.</li>
<li><strong>Online.</strong> Run our <a href="/dns">DNS lookup</a> on a domain and compare the Cloudflare and Google resolvers.</li>
</ul>
<p>If lookups routinely take hundreds of milliseconds, or time out, work through the fixes below.</p>

<h2>1. Switch to a faster DNS resolver</h2>
<p>By default you use your internet provider's resolver, which can be slow or overloaded. Public resolvers such as Cloudflare (<code>1.1.1.1</code>), Google (<code>8.8.8.8</code>) and Quad9 (<code>9.9.9.9</code>) are usually quicker. Change it on your router to speed up every device, or in your device's network settings for just one.</p>

<h2>2. Flush the DNS cache</h2>
<p>A corrupted or stale cache can cause delays and failures.</p>
<ul>
<li><strong>Windows:</strong> <code>ipconfig /flushdns</code></li>
<li><strong>macOS:</strong> <code>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code></li>
<li><strong>Linux (systemd):</strong> <code>resolvectl flush-caches</code></li>
</ul>

<h2>3. Restart your router and modem</h2>
<p>Home routers run a small DNS forwarder that can get stuck. Power-cycling the router is a quick way to clear it.</p>

<h2>4. Turn on DNS over HTTPS in your browser</h2>
<p>Chrome, Firefox, Edge and Safari can send lookups over an encrypted connection to a resolver you choose. This bypasses a slow or interfering network resolver, and it also stops others on the network from seeing which sites you look up.</p>

<h2>5. Check for IPv6 problems</h2>
<p>Browsers ask for both an IPv4 (A) record and an IPv6 (AAAA) record. If your network advertises IPv6 but cannot actually use it, lookups and connections can stall before falling back. Test by temporarily disabling IPv6 on your adapter. If things speed up, the fault is your IPv6 setup. Read <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a> for the background.</p>

<h2>6. Test without your VPN, antivirus or filter</h2>
<p>VPN apps, security suites and parental-control filters often intercept DNS. Pause them briefly and test again. If the delay disappears, change their DNS settings or choose a different server.</p>

<h2>7. Look for local misconfiguration</h2>
<p>An old entry in your hosts file, a dead secondary DNS server listed in your network settings, or an unreachable search domain can each add seconds. Remove any DNS server that you do not recognize or that no longer responds.</p>

<h2>8. If it is only one website</h2>
<p>When just one site is slow, the problem may be the site's own nameservers. Look up its NS records with our <a href="/dns">DNS tool</a> and see how fast they answer. If you run the site, use a reputable DNS provider with servers around the world, and keep TTL values sensible. See <a href="/learn/dns-records-explained">DNS records explained</a>.</p>

<h2>Still slow?</h2>
<p>Run our <a href="/speed">speed test</a> to check latency and jitter. A high round-trip time points to a connection problem, not DNS.</p>
`,

  "how-to-check-if-a-port-is-open": `
<p>&ldquo;Is this port open?&rdquo; can mean two different things: is something <em>listening</em> on the port on your own computer, or can the <em>internet reach</em> it? You usually need to check both. Here is how.</p>

<h2>Method 1: Check from the internet with an online tool</h2>
<p>This answers the question that matters for port forwarding. Open our <a href="/port">port checker</a>, type the port number and press Check. It connects to your public IP address and reports:</p>
<ul>
<li><strong>Open.</strong> Something accepted the connection.</li>
<li><strong>Closed.</strong> The connection was refused, so nothing is listening or a firewall rejected it.</li>
<li><strong>No response.</strong> The request timed out, which usually means a firewall is silently dropping traffic.</li>
</ul>

<h2>Method 2: Windows</h2>
<p>To see whether your PC is listening on a port, open Command Prompt and run:</p>
<p><code>netstat -ano | findstr :8080</code></p>
<p>A line with <code>LISTENING</code> means a program is waiting on that port. To test a connection to another machine, use PowerShell:</p>
<p><code>Test-NetConnection -ComputerName 192.168.1.50 -Port 443</code></p>
<p>Look for <code>TcpTestSucceeded : True</code>.</p>

<h2>Method 3: macOS and Linux</h2>
<ul>
<li><strong>What is listening locally:</strong> <code>sudo lsof -iTCP -sTCP:LISTEN -P</code> or <code>ss -ltnp</code>.</li>
<li><strong>Connect to a remote port:</strong> <code>nc -zv example.com 443</code> prints whether the connection succeeded.</li>
</ul>

<h2>Method 4: Scan with Nmap</h2>
<p><code>nmap -p 22,80,443 192.168.1.50</code> reports each port as open, closed or filtered. Only scan machines you own or have permission to test, because scanning other people's systems can be against the law or a provider's terms.</p>

<h2>Why is a port closed when it should be open?</h2>
<ol>
<li>Make sure the program is running and listening on the right port, and on the right address. A service bound to <code>127.0.0.1</code> is not reachable from other machines.</li>
<li>Allow the port in the computer's firewall.</li>
<li>Forward the port on your router to the device's private address. See <a href="/learn/what-is-port-forwarding">what port forwarding is</a>.</li>
<li>Check whether your provider uses carrier-grade NAT. If your router's WAN address differs from the address on our <a href="/">IP checker</a>, inbound connections cannot reach you.</li>
<li>Remember that UDP services cannot be confirmed the same way, because UDP has no connection handshake.</li>
</ol>
`,

  "change-ip-address-windows-11": `
<p>People searching for how to change an IP address on Windows 11 usually want one of two things: change the <strong>private</strong> address of the PC on the local network, or get a new <strong>public</strong> address from the internet. The two work differently, so here is each.</p>

<h2>Option 1: Renew your address automatically</h2>
<p>If your PC uses DHCP, which is the default, you can ask the router for a fresh lease. Open Command Prompt as administrator and run:</p>
<p><code>ipconfig /release</code></p>
<p><code>ipconfig /renew</code></p>
<p>Then run <code>ipconfig</code> to see the result. The router often gives the same address back, because it remembers your device.</p>

<h2>Option 2: Set a static IP address</h2>
<ol>
<li>Open <strong>Settings</strong>, then <strong>Network &amp; internet</strong>.</li>
<li>Choose <strong>Wi-Fi</strong> or <strong>Ethernet</strong> and open the properties of your connection.</li>
<li>Next to <strong>IP assignment</strong>, select <strong>Edit</strong> and change it from Automatic (DHCP) to <strong>Manual</strong>.</li>
<li>Turn on <strong>IPv4</strong> and enter:
<ul>
<li><strong>IP address:</strong> for example <code>192.168.1.50</code></li>
<li><strong>Subnet prefix length:</strong> <code>24</code> (the same as mask 255.255.255.0)</li>
<li><strong>Gateway:</strong> your router, often <code>192.168.1.1</code></li>
<li><strong>Preferred DNS:</strong> for example <code>1.1.1.1</code></li>
</ul></li>
<li>Select <strong>Save</strong>.</li>
</ol>
<p>Pick an address on the same network as your router, outside the range its DHCP server hands out, so two devices never share it. If you are unsure about the prefix length, use our <a href="/subnet">subnet calculator</a>.</p>

<h3>The command-line way</h3>
<p>In an administrator Command Prompt, replace the adapter name with yours:</p>
<p><code>netsh interface ip set address "Ethernet" static 192.168.1.50 255.255.255.0 192.168.1.1</code></p>
<p>To go back to automatic addressing, run <code>netsh interface ip set address "Ethernet" dhcp</code>.</p>

<h2>Option 3: Change your public IP address</h2>
<p>Nothing you change in Windows alters the address websites see, because that belongs to your router. To get a new public address, restart your router, ask your provider, or use a VPN. All are covered in <a href="/learn/how-to-change-your-ip-address">how to change your IP address</a>. You can confirm the change on our <a href="/">IP checker</a>.</p>

<h2>Troubleshooting</h2>
<ul>
<li><strong>No internet after setting a static IP.</strong> The gateway, prefix or DNS is probably wrong. Switch back to automatic and try again.</li>
<li><strong>&ldquo;IP address conflict&rdquo; message.</strong> Another device already uses that address. Choose a different one.</li>
<li><strong>Not sure what a private address is?</strong> Read <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</li>
</ul>
`,

  "find-printer-ip-address": `
<p>You need a printer's IP address to add it manually, fix a connection problem or open its settings page. Here are five easy ways to find it. Network printers use a private address on your home or office network, such as <code>192.168.1.45</code>, which is different from your public address. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>1. Use the printer's own screen</h2>
<p>Most printers show their address under a menu such as <strong>Settings</strong>, <strong>Network</strong>, <strong>Wireless</strong> or <strong>Wi-Fi status</strong>. Look for &ldquo;IPv4 address&rdquo;.</p>

<h2>2. Print a network configuration page</h2>
<p>If the printer has no screen, hold the Wi-Fi or information button for a few seconds, or find &ldquo;Print network config&rdquo; in its menu. The printed page lists the IP address.</p>

<h2>3. Check your router's device list</h2>
<p>Log in to your router (often <code>192.168.1.1</code> or <code>192.168.0.1</code>) and open the list of connected devices or DHCP clients. Find the printer by its name or manufacturer.</p>

<h2>4. Look in Windows or macOS</h2>
<ul>
<li><strong>Windows 11:</strong> open <strong>Settings</strong>, then <strong>Bluetooth &amp; devices</strong>, then <strong>Printers &amp; scanners</strong>. Select the printer, open <strong>Printer properties</strong> and check the <strong>Ports</strong> tab, or the <strong>Web Services</strong> tab for the address.</li>
<li><strong>macOS:</strong> open <strong>System Settings</strong>, then <strong>Printers &amp; Scanners</strong>, and select the printer. Its address or hostname appears in the printer's details.</li>
</ul>

<h2>5. Scan your network</h2>
<p>Run <code>arp -a</code> in a terminal to list devices your computer has recently talked to, or use a network scanner app. Match the printer's MAC address, which is printed on a label on the device.</p>

<h2>Make the address stay put</h2>
<p>If the address changes and your printer keeps disconnecting, give it a fixed one. Either reserve it in the router's DHCP settings, which is the best approach, or set a static address on the printer. Choose an address inside your network and outside the DHCP pool. Our <a href="/subnet">subnet calculator</a> shows the usable range.</p>
`,

  "is-my-ip-address-blacklisted": `
<p>An IP blocklist (often called a blacklist) is a public list of addresses that have been linked to spam, malware or other abuse. If yours is on one, you may find that email bounces, websites show endless captchas, or a service blocks you outright. The good news is that you can check in seconds and usually fix it.</p>

<h2>How to check</h2>
<p>Run our <a href="/reputation">IP reputation check</a>. Leave the box empty to test your own address, or enter any IPv4 address. It queries five public blocklists, tells you whether the address is a Tor exit node, and shows what kind of network owns it. You can also look at the details of any address with the <a href="/lookup">IP lookup</a>.</p>

<h2>Why does an IP address get blacklisted?</h2>
<ul>
<li><strong>Someone else's behavior.</strong> Many home and mobile connections share or reuse addresses. The previous user of your address may have sent spam or had an infected device.</li>
<li><strong>Your own device.</strong> Malware, a hacked router or an open mail server can send spam without you knowing.</li>
<li><strong>VPN and proxy servers.</strong> Hundreds of people share each address, so a single abuser can get it listed for everyone.</li>
<li><strong>Data center addresses.</strong> Hosting networks are watched more closely than home connections. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a> for how addresses are allocated.</li>
</ul>

<h2>What does being blacklisted do to you?</h2>
<p>Most blocklists target email. A listing can cause mail servers to reject or junk your messages. Other services use blocklists, or their own data, to decide when to show a captcha, slow you down or block a login. Being listed does not mean your computer is hacked, but it is worth checking.</p>

<h2>How to get removed</h2>
<ol>
<li><strong>Find out why.</strong> Scan your devices for malware and make sure no unknown service is exposed. You can see what your IP exposes with our <a href="/port">port checker</a>.</li>
<li><strong>Fix the cause.</strong> Update your router, change its admin password and close ports you do not need.</li>
<li><strong>Use the list's removal page.</strong> Each blocklist has a delisting form. Some are automatic and remove entries after a few days of clean behavior.</li>
<li><strong>Ask your provider.</strong> If the address is shared or recycled, your internet provider can often give you a different one. Read <a href="/learn/how-to-change-your-ip-address">how to change your IP address</a>.</li>
</ol>

<h2>If you use a VPN</h2>
<p>Listed or flagged VPN addresses are common. Switch to a different server, or ask your VPN provider about dedicated or residential addresses. Note that a blocklist result does not show whether a VPN is detectable. Test for leaks with the <a href="/webrtc">WebRTC leak test</a> as well.</p>

<h2>What our check does not cover</h2>
<p>We only query lists that answer public DNS resolvers. Spamhaus, a widely used list, refuses these queries, so it is not included. If your email problem continues, also check Spamhaus directly on its own website.</p>
`,

  "how-to-hide-your-ip-address": `
<p>Hiding your IP address means websites and online services see a different address from the one your internet provider gave you. There are several ways to do it, and they are not equal. Some hide your address and encrypt your traffic, some only swap the address, and some do not hide anything at all. This guide compares the five that matter and shows you how to test that yours works.</p>

<h2>Hiding vs changing your IP address</h2>
<p>These are different things. <strong>Changing</strong> your IP means your provider assigns you a new address, which is still tied to your provider and your region. <strong>Hiding</strong> it means your traffic leaves the internet from someone else's address, so sites never see yours. If you only want a new address from your provider, read <a href="/learn/how-to-change-your-ip-address">how to change your IP address</a>. If you want websites to see a different one, keep reading.</p>

<h2>The five methods at a glance</h2>
<div class="tw"><table><tbody>
<tr><th>Method</th><th>Hides IP from sites</th><th>Encrypts traffic</th><th>Covers</th></tr>
<tr><td><strong>VPN</strong></td><td>Yes</td><td>Yes</td><td>Every app on the device</td></tr>
<tr><td><strong>Tor Browser</strong></td><td>Yes</td><td>Yes, in layers</td><td>Tor Browser only</td></tr>
<tr><td><strong>Proxy</strong></td><td>Yes</td><td>Usually not</td><td>One app or browser</td></tr>
<tr><td><strong>iCloud Private Relay</strong></td><td>Yes</td><td>Yes</td><td>Safari and some apps</td></tr>
<tr><td><strong>Another network</strong></td><td>Yes, temporarily</td><td>No</td><td>The whole device</td></tr>
</tbody></table></div>

<h2>1. Use a VPN</h2>
<p>A virtual private network sends all of your traffic through an encrypted tunnel to a server run by the VPN company. Websites see the server's address, and your internet provider sees only that you are connected to a VPN. For most people this is the most practical option, because it covers every app and works with any browser.</p>
<p>The catch is trust. A VPN does not remove the middleman, it swaps your provider for the VPN company, which can see your traffic. Choose carefully:</p>
<ul>
<li>Look for an independent security audit and a clear no-logs policy.</li>
<li>Make sure it has a kill switch, which cuts your connection if the tunnel drops, and leak protection for WebRTC, DNS and IPv6.</li>
<li>Be wary of free VPNs. Running servers costs money, and free services often pay for it with ads or by selling data.</li>
</ul>

<h2>2. Use the Tor Browser</h2>
<p>Tor sends your browser traffic through three volunteer relays, so no single relay knows both who you are and where you are going. It is free and gives the strongest anonymity of the five, but only for traffic inside Tor Browser. It is slow, it is not suited to streaming or large downloads, and some websites block Tor exit nodes. You can see how a Tor address looks to the world with our <a href="/reputation">IP reputation check</a>.</p>

<h2>3. Use a proxy</h2>
<p>A proxy forwards requests from one app or browser through another server. It is simple and cheap, and useful for specific jobs such as testing how a site looks from another country. But a proxy usually does not encrypt your traffic, it only covers the app you configure, and it is easy to misconfigure. A browser can also bypass it with WebRTC and reveal your real address, so run the <a href="/webrtc">WebRTC leak test</a>. You are trusting the proxy operator completely.</p>

<h2>4. Use iCloud Private Relay (Apple devices)</h2>
<p>If you pay for iCloud+, Private Relay routes Safari traffic through two separate relays so that neither Apple nor the relay operator can see both who you are and which sites you visit. Websites see an address near your region rather than your real one. It covers Safari and some app traffic, not other browsers, and it is not a replacement for a full VPN.</p>

<h2>5. Switch to another network</h2>
<p>Connecting through a mobile hotspot or a public Wi-Fi network gives you a different public address for as long as you stay on it. It is free and instant, but it protects nothing else. The network owner can see your activity, and open public Wi-Fi is risky without a VPN.</p>

<h2>What does not hide your IP address?</h2>
<ul>
<li><strong>Private or incognito mode.</strong> It only stops your browser saving history. Websites still see your address.</li>
<li><strong>Clearing cookies or switching browsers.</strong> Neither changes your IP.</li>
<li><strong>Restarting your modem or asking your provider for a new address.</strong> This changes the address but does not hide it. It is still your provider's address in your region.</li>
<li><strong>Your router's NAT.</strong> NAT hides your devices' private addresses from the internet, but your public address stays visible. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</li>
</ul>

<h2>How to check that it worked</h2>
<ol>
<li>Open our <a href="/">IP checker</a> without the method turned on and note your address, location and network.</li>
<li>Turn the method on and reload the page. The address, location and network should all be different.</li>
<li>Look at the IPv4 and IPv6 lines. If one still shows your real address, that part of your traffic is leaking around the tunnel.</li>
<li>Run the <a href="/webrtc">WebRTC leak test</a>. Read <a href="/learn/webrtc-leak-explained">how WebRTC leaks work</a> if it reports a different address.</li>
<li>Use the <a href="/reputation">IP reputation check</a> to see how your new address looks. A VPN address normally shows as a hosting network, and that is expected.</li>
</ol>

<h2>What does hiding your IP not do?</h2>
<p>It does not make you anonymous. Sites can still recognize you through logins, cookies and your browser fingerprint, which our <a href="/browser">browser info page</a> lets you inspect. It also does not protect you from malware or phishing. Finally, using a VPN or similar tool is legal in most countries but restricted in some, and it never makes illegal activity legal, so check the rules where you live.</p>

<h2>How to hide your IP address on iPhone</h2>
<ol>
<li><strong>iCloud Private Relay.</strong> With iCloud+, open <strong>Settings</strong>, tap your name, then <strong>iCloud</strong>, then <strong>Private Relay</strong> and turn it on. It covers Safari and some app traffic.</li>
<li><strong>A VPN app.</strong> Install a reputable VPN app, allow it to add a VPN configuration and connect. This covers every app on the phone.</li>
<li><strong>Tor.</strong> Use a Tor-based browser such as Onion Browser for private browsing only.</li>
</ol>

<h2>How to hide your IP address on Android</h2>
<ol>
<li><strong>A VPN app.</strong> Install one, accept the VPN permission and connect. This covers the whole phone.</li>
<li><strong>Tor Browser for Android.</strong> The official Tor Project browser hides your address for browsing in that app.</li>
<li><strong>Mobile data.</strong> Switching from Wi-Fi to mobile data gives you a different address, though it does not hide it from the carrier.</li>
</ol>
<p>Android&rsquo;s &ldquo;Private DNS&rdquo; setting is not an IP hider. It only encrypts your DNS lookups, and websites still see your address.</p>

<h2>Does a VPN hide your IP address?</h2>
<p>Yes, from the websites and services you visit, which see the VPN server&rsquo;s address instead. It does not hide your address from the VPN company, which sees your real one, and your internet provider can still see that you are connected to a VPN. To confirm it works on your connection, follow <a href="/learn/is-my-vpn-working">is my VPN working?</a></p>

<h2>Which method should you choose?</h2>
<ul>
<li><strong>Everyday privacy on all your devices:</strong> a reputable paid VPN.</li>
<li><strong>Maximum anonymity for browsing:</strong> Tor Browser.</li>
<li><strong>A quick one-off address change:</strong> a mobile hotspot.</li>
<li><strong>Apple users who mainly use Safari:</strong> iCloud Private Relay.</li>
</ul>
<p>For the bigger picture of what an address reveals about you, read <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a></p>
`,

  "how-to-find-your-ip-address": `
<p>Every device has more than one IP address, so &ldquo;what is my IP address?&rdquo; has two answers. Your <strong>public</strong> address is the one websites see, and your <strong>private</strong> address is the one your device uses inside your home network. Here is how to find both on any device.</p>

<h2>Find your public IP address (any device)</h2>
<p>Open our <a href="/">IP checker</a> in any browser. Your public address appears at the top within a fraction of a second, along with your approximate location and internet provider. It works the same on a phone, tablet or computer. If you are connected to a VPN, you will see the VPN's address instead of your own.</p>

<h2>Find your private IP address</h2>
<h3>On Windows 11 or Windows 10</h3>
<ol>
<li>Press the Windows key, type <code>cmd</code> and press Enter.</li>
<li>Type <code>ipconfig</code> and press Enter.</li>
<li>Look for <strong>IPv4 Address</strong> under your active connection, Wi-Fi or Ethernet.</li>
</ol>
<p>You can also open <strong>Settings</strong>, then <strong>Network &amp; internet</strong>, choose your connection and open its properties.</p>

<h3>On a Mac</h3>
<p>Open <strong>System Settings</strong>, choose <strong>Network</strong>, select your active connection and click <strong>Details</strong>. The address is shown under <strong>TCP/IP</strong>. In Terminal you can run <code>ipconfig getifaddr en0</code> for Wi-Fi on most modern Macs.</p>

<h3>On an iPhone or iPad</h3>
<p>Open <strong>Settings</strong>, tap <strong>Wi-Fi</strong>, then tap the <strong>(i)</strong> button next to your network. The <strong>IP Address</strong> is listed on that screen.</p>

<h3>On Android</h3>
<p>Open <strong>Settings</strong>, go to <strong>Network &amp; internet</strong> (or <strong>Connections</strong>), tap <strong>Wi-Fi</strong> and tap your connected network. The IP address is shown in its details. Menu names vary by phone maker.</p>

<h3>On Linux</h3>
<p>Run <code>ip addr</code> or <code>hostname -I</code> in a terminal.</p>

<h2>Find the IP address of your router</h2>
<p>Your router's address, also called the default gateway, is different again. We cover it step by step in <a href="/learn/find-router-ip-address">how to find your router's IP address</a>. To find a printer's address, see <a href="/learn/find-printer-ip-address">how to find a printer's IP address</a>.</p>

<h2>Find the IP address of a website</h2>
<p>Type the domain into our <a href="/lookup">IP lookup</a> and it returns the address of the server behind the site, with its location and owner. For all of a domain's records, use the <a href="/dns">DNS lookup</a>.</p>

<h2>Why you might see two addresses</h2>
<p>Your public address may show as IPv4 (like <code>203.0.113.7</code>) or IPv6 (like <code>2001:db8::1</code>), or both. Our home page shows each on its own line. Read <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a> to understand the difference, and <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a> for why your phone and your public address never match.</p>

<h2>Is it safe to share my IP address?</h2>
<p>Generally yes. An address shows roughly where you are and who your provider is, not your name or home address. See <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a></p>
`,

  "find-router-ip-address": `
<p>Your router's IP address, also known as the default gateway, is the address you type into a browser to open the router's settings page. You need it to change the Wi-Fi password, set up port forwarding or fix a connection problem. Here is how to find it on every device.</p>

<h2>The most common router addresses</h2>
<p>Try these first. One of them works for most home routers:</p>
<ul>
<li><code>192.168.0.1</code></li>
<li><code>192.168.1.1</code></li>
<li><code>10.0.0.1</code></li>
<li><code>192.168.1.254</code></li>
<li><code>192.168.100.1</code> (some cable modems)</li>
</ul>
<p>The exact address and the default login are usually printed on a sticker on the back or bottom of the router.</p>

<h2>On Windows</h2>
<ol>
<li>Open Command Prompt (press the Windows key, type <code>cmd</code>, press Enter).</li>
<li>Run <code>ipconfig</code>.</li>
<li>Find <strong>Default Gateway</strong> under your active connection. That is your router.</li>
</ol>

<h2>On a Mac</h2>
<p>Open <strong>System Settings</strong>, choose <strong>Network</strong>, select your connection and click <strong>Details</strong>, then open <strong>TCP/IP</strong>. The <strong>Router</strong> field is the address. In Terminal, <code>route -n get default | grep gateway</code> prints it too.</p>

<h2>On an iPhone or iPad</h2>
<p>Go to <strong>Settings</strong>, tap <strong>Wi-Fi</strong>, tap the <strong>(i)</strong> next to your network and read the <strong>Router</strong> line.</p>

<h2>On Android</h2>
<p>Open <strong>Settings</strong>, then <strong>Wi-Fi</strong>, and tap your connected network. The <strong>Gateway</strong> or <strong>Router</strong> entry is the address. On some phones you need to tap <strong>Advanced</strong> first.</p>

<h2>On Linux</h2>
<p>Run <code>ip route | grep default</code>. The address after <code>via</code> is your router.</p>

<h2>Log in to your router</h2>
<ol>
<li>Type the address into your browser, such as <code>http://192.168.1.1</code>.</li>
<li>Enter the username and password from the router's sticker, or the ones you set.</li>
<li>Change the default admin password straight away. Unchanged defaults are a common way routers get compromised.</li>
</ol>

<h2>Router IP vs your public IP</h2>
<p>These are different addresses. The router's address is private and only works inside your home network. Your public address is the one the internet sees, and you can check it on our <a href="/">IP checker</a>. If you want to know why they differ, read <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>What to do next</h2>
<ul>
<li>To open a port for a game or server, follow <a href="/learn/what-is-port-forwarding">what port forwarding is</a>, then confirm it with the <a href="/port">port checker</a>.</li>
<li>To find other devices on your network, such as a printer, see <a href="/learn/find-printer-ip-address">how to find a printer's IP address</a>.</li>
<li>To check how your connection performs, run the <a href="/speed">speed test</a> or the <a href="/ping">ping test</a>.</li>
</ul>
`,

  "what-is-my-isp": `
<p>Your ISP, or internet service provider, is the company that connects you to the internet. Most of the time you already know who it is, because they send the bill. But sometimes you need to confirm it: after moving, when a VPN is on, or when a support agent asks. Here is how to find it in seconds.</p>

<h2>The fastest way</h2>
<p>Open our <a href="/">IP checker</a>. The <strong>ISP</strong> line in the Network box shows who owns the network your connection comes from, and the <strong>ASN</strong> beside it is that network's identification number. For a lookup of any other address, use the <a href="/lookup">IP lookup</a>.</p>

<h2>Why does the ISP name not match my provider's brand?</h2>
<ul>
<li><strong>The legal name is shown.</strong> A brand such as Airtel may appear under its registered company name, for example &ldquo;Bharti British Telecom Internet Limited&rdquo;.</li>
<li><strong>Wholesale and resold lines.</strong> Smaller providers often rent capacity from a larger network, so the larger company's name appears.</li>
<li><strong>Mobile data.</strong> On a phone's mobile connection you will see the mobile carrier, not your home provider.</li>
<li><strong>A VPN is on.</strong> You will see the VPN company's hosting network. Turn it off to see your real ISP, or read <a href="/learn/how-to-hide-your-ip-address">how to hide your IP address</a> to understand what the VPN is doing.</li>
</ul>

<h2>Other ways to find your ISP</h2>
<ul>
<li>Check your monthly bill or the provider's app.</li>
<li>Look at the label on the modem or router, which often shows the brand.</li>
<li>Log in to your router and look at the WAN or internet status page. See <a href="/learn/find-router-ip-address">how to find your router's IP address</a>.</li>
</ul>

<h2>What can my ISP see?</h2>
<p>Your ISP sees which sites and servers you connect to by name, how much data you use and when, but not the content of pages loaded over HTTPS. A VPN hides your browsing destinations from the ISP, though it then trusts the VPN company instead.</p>

<h2>What can an ISP do with your IP address?</h2>
<p>Providers assign your public address, usually dynamically, and they are the only ones who can link it to your account. Read <a href="/learn/why-does-my-ip-address-change">why your IP address changes</a> and <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a></p>

<h2>Check how well your ISP performs</h2>
<p>Test your connection with the <a href="/speed">speed test</a> and the <a href="/ping">ping test</a>. If your results are far below what you pay for, repeat them on a wired connection before calling support.</p>
`,

  "is-my-vpn-working": `
<p>A VPN app that says &ldquo;Connected&rdquo; is not proof that your traffic is protected. Leaks are common, and you can check for most of them in about five minutes with free tools. Here are the tests, in order.</p>

<h2>1. Check that your IP address and location changed</h2>
<p>Open our <a href="/">IP checker</a> with the VPN off and note your address, city and network. Connect the VPN and reload. All three should change, and the location should match the server you picked. If nothing changed, the VPN is not routing your traffic.</p>

<h2>2. Check the IPv6 line</h2>
<p>Many VPNs only tunnel IPv4. If your device also has IPv6, websites can still reach you through it. On the home page, the IPv6 line should say &ldquo;Not detected&rdquo; or show an address that belongs to the VPN. If it shows your real provider's IPv6 address, turn on IPv6 protection in your VPN app or disable IPv6. Background: <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a>.</p>

<h2>3. Run the WebRTC leak test</h2>
<p>Browsers can reveal your real address through WebRTC even when a VPN is on. Run our <a href="/webrtc">WebRTC leak test</a>. If it reports a public address that differs from the one websites see, you have a leak. Read <a href="/learn/webrtc-leak-explained">how WebRTC leaks work and how to fix them</a>.</p>

<h2>4. Run a DNS leak test</h2>
<p>A DNS leak sends your website lookups to your internet provider instead of the VPN, which reveals the sites you visit. We do not offer a DNS leak test, because it needs a special server that logs which resolver asked. Use a dedicated DNS leak test from your VPN provider or another trusted site, run the extended test and check that the resolvers listed belong to the VPN and not to your ISP. You can find out who owns an address with the <a href="/lookup">IP lookup</a>.</p>

<h2>5. Check your time zone and language</h2>
<p>Websites can read your browser's time zone and language, which do not change when you connect a VPN. If your IP says Amsterdam but your time zone says Asia/Kolkata, the mismatch gives you away. Open the <a href="/browser">browser info page</a> to see what you are sharing, and use a browser with fingerprinting protection if this matters to you.</p>

<h2>6. Test the kill switch</h2>
<p>A kill switch blocks your internet if the VPN drops. To test it, start a continuous <code>ping</code> to any address, then turn off the VPN's connection or switch servers. With a working kill switch, the pings should stop instead of carrying on over your normal connection. Do this only on your own device.</p>

<h2>See how your VPN address looks to websites</h2>
<p>Run the <a href="/reputation">VPN checker and IP reputation test</a> on your connection. A VPN address normally shows as a hosting network, which is expected. Some sites treat these networks with extra suspicion, so you may see more captchas. If your address is on a blocklist, switch to another server. See <a href="/learn/is-my-ip-address-blacklisted">is your IP address blacklisted?</a></p>

<h2>If a test fails</h2>
<ul>
<li>Update the VPN app and switch to a modern protocol such as WireGuard.</li>
<li>Turn on the app's kill switch, DNS leak protection and IPv6 protection.</li>
<li>Restart the browser and test again.</li>
<li>If the leak continues, try another provider. Our guide <a href="/learn/how-to-hide-your-ip-address">how to hide your IP address</a> compares the alternatives.</li>
</ul>
`,

  "what-is-ping": `
<p>Ping is the time, in milliseconds (ms), that it takes for a small message to travel from your device to another computer and back. You will see the word in games, video calls and in the results of every speed test. A lower number means a faster, more responsive connection.</p>

<h2>What does ping mean in a speed test?</h2>
<p>In a speed test, ping, also called latency, is separate from download and upload speed. Speed is how much data you can move per second. Ping is how quickly the first byte gets there and back. A connection can be very fast and still feel laggy if its ping is high.</p>

<h2>What is a good ping?</h2>
<div class="tw"><table><tbody>
<tr><th>Ping</th><th>What it means</th></tr>
<tr><td>Under 30 ms</td><td>Excellent. Great for any online game.</td></tr>
<tr><td>30 to 60 ms</td><td>Good. Fine for gaming, calls and streaming.</td></tr>
<tr><td>60 to 100 ms</td><td>Fair. Fine for browsing, you may notice lag in fast games.</td></tr>
<tr><td>100 to 150 ms</td><td>Slow. Lag is noticeable.</td></tr>
<tr><td>Over 150 ms</td><td>Poor. Games feel delayed and calls can stutter.</td></tr>
</tbody></table></div>
<p>These are rough guides. Two related numbers matter as much. <strong>Jitter</strong> is how much your ping changes from moment to moment, and <strong>packet loss</strong> is the share of messages that never arrive. High jitter or any packet loss causes stutter even when the average ping is low.</p>

<h2>How to test your ping</h2>
<ul>
<li><strong>Online:</strong> run our <a href="/ping">ping test</a>. It sends 25 quick checks to the nearest Cloudflare server and reports your average, best, worst, jitter and packet loss.</li>
<li><strong>Command line:</strong> open Command Prompt or Terminal and run <code>ping 8.8.8.8</code>. On Windows add <code>-t</code> to keep it running, and on macOS and Linux press Ctrl+C to stop. The <code>time=</code> value is your ping in milliseconds.</li>
<li><strong>Full picture:</strong> the <a href="/speed">speed test</a> also reports latency and jitter alongside download and upload.</li>
</ul>

<h2>What affects your ping?</h2>
<ul>
<li><strong>Distance.</strong> The farther the server, the higher the ping, because signals take time to travel.</li>
<li><strong>Wi-Fi.</strong> Weak signal, interference and busy channels add delay and jitter.</li>
<li><strong>Other traffic.</strong> Uploads, streams and downloads on your network can make ping spike. This is called bufferbloat.</li>
<li><strong>Your provider and its routing.</strong> Congested networks and long routes add delay.</li>
<li><strong>A VPN.</strong> It adds a detour, so ping is usually higher with one on.</li>
</ul>

<h2>How to lower your ping</h2>
<p>The biggest wins are using a cable instead of Wi-Fi, pausing large downloads while you play, and choosing a game server close to you. Our full guide walks through each fix and the popular advice that does nothing: <a href="/learn/how-to-lower-ping">how to lower your ping</a>.</p>
`,

  "how-to-flush-dns-cache": `
<p>Your device keeps a short-term memory of recent DNS answers so pages load faster. When a website moves to a new server, or a lookup goes wrong, that memory can hold a stale answer and send you to the wrong place. Flushing the DNS cache clears it and forces a fresh lookup. Here is the exact command or step for every device.</p>

<h2>When does flushing the DNS cache actually help?</h2>
<ul>
<li>A site you just moved or updated still points to the old server.</li>
<li>You see &ldquo;server not found&rdquo; or &ldquo;this site can't be reached&rdquo; for a site that works elsewhere.</li>
<li>You changed your DNS provider and want the change to take effect now.</li>
<li>A blocked or redirected page keeps coming back after the block was lifted.</li>
</ul>
<p>It will not speed up a slow connection or fix a problem on the website's end. For that, see <a href="/learn/fix-slow-dns-lookup">how to fix slow DNS lookups</a>.</p>

<h2>Windows 11 and Windows 10</h2>
<ol>
<li>Press the Windows key, type <code>cmd</code>, then choose <strong>Run as administrator</strong>.</li>
<li>Run this command:</li>
</ol>
<p><code>ipconfig /flushdns</code></p>
<p>You should see &ldquo;Successfully flushed the DNS Resolver Cache&rdquo;. PowerShell has an equivalent, <code>Clear-DnsClientCache</code>. To see what is in the cache before you clear it, run <code>ipconfig /displaydns</code>.</p>

<h2>macOS</h2>
<p>Open Terminal and run both parts of this line together, then enter your password:</p>
<p><code>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code></p>
<p>The first part clears the directory service cache and the second restarts the service that actually answers DNS queries. Running only one of them often leaves the stale entry in place. There is no confirmation message, which is normal.</p>

<h2>Linux</h2>
<p>It depends on which resolver your distribution uses:</p>
<ul>
<li><strong>systemd-resolved</strong> (Ubuntu, Fedora and most modern distributions): <code>resolvectl flush-caches</code>. On older releases, <code>sudo systemd-resolve --flush-caches</code>.</li>
<li><strong>nscd</strong>: <code>sudo systemctl restart nscd</code></li>
<li><strong>dnsmasq</strong>: <code>sudo systemctl restart dnsmasq</code></li>
</ul>
<p>Many minimal Linux setups cache nothing at all, in which case there is nothing to flush.</p>

<h2>Google Chrome</h2>
<p>Chrome keeps its own cache, separate from the operating system. Type <code>chrome://net-internals/#dns</code> into the address bar and click <strong>Clear host cache</strong>. Then open <code>chrome://net-internals/#sockets</code> and click <strong>Flush socket pools</strong>, because Chrome may otherwise reuse an existing connection. Edge, Brave and other Chromium browsers use the same addresses.</p>

<h2>Android</h2>
<p>Android has no built-in flush command. In order of effort:</p>
<ol>
<li>Turn airplane mode on, wait five seconds, turn it off. This resets the network stack and is enough most of the time.</li>
<li>Restart the phone.</li>
<li>In Chrome, clear the host cache at <code>chrome://net-internals/#dns</code>.</li>
<li>Forget the Wi-Fi network and reconnect.</li>
</ol>

<h2>iPhone and iPad</h2>
<p>There is no command here either. Toggle airplane mode on and off, or restart the device. If the problem persists, go to <strong>Settings</strong>, then <strong>General</strong>, then <strong>Transfer or Reset iPhone</strong>, then <strong>Reset</strong>, then <strong>Reset Network Settings</strong>. That last option also clears saved Wi-Fi passwords, so use it only as a last resort.</p>

<h2>Your router also caches</h2>
<p>Most home routers run a small DNS forwarder with its own cache. If flushing every device does not help, restart the router. Find its address with <a href="/learn/find-router-ip-address">how to find your router's IP address</a>.</p>

<h2>Check whether it worked</h2>
<p>Look up the domain with our <a href="/dns">DNS lookup</a>, which queries live resolvers rather than anything cached on your machine. Compare the answer with what your browser is doing. If the live answer is correct but your browser still goes elsewhere, something on your device is still caching. If the live answer itself is the old one, the change simply has not propagated yet, and the record's TTL tells you how long that takes. See <a href="/learn/dns-records-explained">DNS records explained</a>.</p>
`,

  "what-is-a-dns-server": `
<p>A DNS server translates names people can remember, such as example.com, into the IP addresses computers actually connect to. Every time you open a website, send an email or load an app, a DNS server answers that question first. If it is slow or unreachable, nothing else works.</p>

<h2>What happens when you open a website?</h2>
<ol>
<li>Your device asks its configured DNS server, called a <strong>resolver</strong>, for the address of the site.</li>
<li>If the resolver has a recent answer cached, it replies immediately.</li>
<li>If not, it asks the root servers, then the servers for the domain ending (.com), then the domain's own <strong>authoritative</strong> nameservers.</li>
<li>It returns the address to your device and caches it for the length of the record's TTL.</li>
<li>Your browser connects to that address.</li>
</ol>
<p>All of this normally takes a few tens of milliseconds.</p>

<h2>Which DNS server are you using?</h2>
<p>By default, your router hands out your internet provider's resolver. You can see your provider on our <a href="/">IP checker</a>, and look up who owns any address with the <a href="/lookup">IP lookup</a>.</p>

<h2>Popular public DNS servers</h2>
<div class="tw"><table><tbody>
<tr><th>Provider</th><th>IPv4 addresses</th><th>Notable for</th></tr>
<tr><td>Cloudflare</td><td>1.1.1.1 and 1.0.0.1</td><td>Speed and a privacy policy audited by a third party</td></tr>
<tr><td>Google</td><td>8.8.8.8 and 8.8.4.4</td><td>Reliability and global reach</td></tr>
<tr><td>Quad9</td><td>9.9.9.9 and 149.112.112.112</td><td>Blocks known malware domains</td></tr>
<tr><td>Cloudflare for Families</td><td>1.1.1.3 and 1.0.0.3</td><td>Blocks malware and adult content</td></tr>
</tbody></table></div>
<p>Changing resolver can make lookups faster, and it changes who sees your browsing requests. It does not hide your IP address from websites. For that, see <a href="/learn/how-to-hide-your-ip-address">how to hide your IP address</a>.</p>

<h2>How to change your DNS server</h2>
<ul>
<li><strong>Router (best option).</strong> Log in to the router and set the DNS servers on its internet or DHCP page. Every device on your network then uses them. See <a href="/learn/find-router-ip-address">how to find your router's IP address</a>.</li>
<li><strong>Windows 11.</strong> Settings, then Network &amp; internet, pick your connection, then Edit next to DNS server assignment, choose Manual and turn on IPv4.</li>
<li><strong>macOS.</strong> System Settings, then Network, select your connection, then Details, then DNS, and add the servers.</li>
<li><strong>iPhone.</strong> Settings, then Wi-Fi, tap the (i) next to your network, then Configure DNS, then Manual.</li>
<li><strong>Android.</strong> Settings, then Network &amp; internet, then Private DNS, and enter a provider's hostname such as one.one.one.one or dns.google.</li>
<li><strong>PlayStation and Xbox.</strong> In the console's network settings, choose manual DNS and enter the two addresses from the table above.</li>
</ul>
<p>After changing, clear your cache so the new server is used right away. See <a href="/learn/how-to-flush-dns-cache">how to flush your DNS cache</a>.</p>

<h2>Fixing &ldquo;DNS server not responding&rdquo;</h2>
<ol>
<li>Try a different device on the same network. If only one device fails, the fault is on that device.</li>
<li>Restart your router and modem.</li>
<li>Set a public resolver from the table above, which rules out a broken provider resolver.</li>
<li>Flush the DNS cache.</li>
<li>Temporarily disable a VPN or security suite, since both often intercept DNS.</li>
<li>Check that the site itself resolves, using our <a href="/dns">DNS lookup</a>. If we can resolve it and you cannot, the problem is local.</li>
</ol>

<h2>Encrypted DNS</h2>
<p>Ordinary DNS queries travel unencrypted, so anyone on the path, including your provider, can see the names you look up. DNS over HTTPS (DoH) and DNS over TLS (DoT) encrypt them. Chrome, Firefox and Edge have a secure DNS setting, Android has Private DNS, and Apple devices support encrypted DNS profiles. Our own <a href="/dns">DNS lookup</a> uses DNS over HTTPS for every query it makes.</p>

<h2>Resolver or authoritative?</h2>
<p>A <strong>resolver</strong> answers questions for you and caches the results. An <strong>authoritative</strong> nameserver holds the real records for a domain and is the source of truth. When you buy a domain, you point it at authoritative nameservers, and those are the NS records you can inspect in <a href="/learn/dns-records-explained">DNS records explained</a>.</p>
`,

  "what-is-a-mac-address": `
<p>A MAC address is a hardware identifier burned into every network adapter: your laptop's Wi-Fi chip, your phone, your TV, your console. It identifies a device on a local network, while an IP address identifies it on the wider internet. The two are easy to confuse, so here is the difference and how to find yours.</p>

<h2>What does a MAC address look like?</h2>
<p>It is 48 bits, written as six pairs of hexadecimal digits, for example <code>00:1A:2B:3C:4D:5E</code>. Some systems use dashes or dots instead of colons. The first three pairs are the <strong>OUI</strong>, which identifies the manufacturer, so a MAC address can reveal whether a device is an Apple, Samsung or Intel product. The last three pairs identify the individual adapter.</p>
<p>Every network interface has its own, so a laptop with both Wi-Fi and Ethernet has two.</p>

<h2>What is the difference between a MAC address and an IP address?</h2>
<div class="tw"><table><tbody>
<tr><th></th><th>MAC address</th><th>IP address</th></tr>
<tr><td>Assigned by</td><td>The hardware manufacturer</td><td>Your router or internet provider</td></tr>
<tr><td>Scope</td><td>Your local network only</td><td>The whole internet</td></tr>
<tr><td>Changes</td><td>Normally fixed, though it can be randomized</td><td>Often changes</td></tr>
<tr><td>Format</td><td>00:1A:2B:3C:4D:5E</td><td>203.0.113.7 or 2001:db8::1</td></tr>
<tr><td>Visible to websites</td><td>No</td><td>Yes</td></tr>
</tbody></table></div>
<p>The last row matters most. Your MAC address does not travel beyond your router, so websites never see it. The address they do see is on our <a href="/">IP checker</a>. If you want to understand the two kinds of IP address as well, read <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>How to find your MAC address</h2>
<h3>Windows</h3>
<p>Open Command Prompt and run <code>ipconfig /all</code>. The <strong>Physical Address</strong> line under your adapter is the MAC address. The command <code>getmac /v</code> gives a shorter list.</p>
<h3>macOS</h3>
<p>Open System Settings, then Network, select Wi-Fi, click Details and look for <strong>Wi-Fi Address</strong> (it is called Hardware Address on older versions). In Terminal, <code>ifconfig en0 | grep ether</code> prints it.</p>
<h3>iPhone and iPad</h3>
<p>Settings, then General, then About, then <strong>Wi-Fi Address</strong>. Note that iOS shows a different, private address per network by default, which is explained below.</p>
<h3>Android</h3>
<p>Settings, then About phone, then Status, then <strong>Wi-Fi MAC address</strong>. On some phones it is under the Wi-Fi network's own details.</p>
<h3>Linux</h3>
<p>Run <code>ip link</code>. The value after <code>link/ether</code> is the MAC address.</p>
<h3>Game consoles and TVs</h3>
<p>On PlayStation and Xbox, open the network settings and look at the connection status or advanced settings. On a smart TV it is usually under Network or About. You can also find every device's MAC address in your router's list of connected clients.</p>

<h2>MAC address randomization</h2>
<p>Modern phones and laptops invent a different MAC address for each Wi-Fi network they join. Apple calls this Private Wi-Fi Address, Android calls it randomized MAC. It stops shops, airports and other networks from tracking a device as it moves between them. It also means the address you see may not match what the hardware label says, and it can break setups that allow only known MAC addresses, so you may need to turn it off per network.</p>

<h2>What is a MAC address used for?</h2>
<ul>
<li><strong>Delivering data on your own network.</strong> Your router uses it to know which device a packet belongs to.</li>
<li><strong>DHCP reservations.</strong> Giving a device the same local IP every time, which is useful for printers and servers. See <a href="/learn/what-is-port-forwarding">what port forwarding is</a>.</li>
<li><strong>MAC filtering.</strong> Allowing only listed devices on a network. It is weak as a security measure, because addresses can be copied.</li>
<li><strong>Device identification</strong> by network administrators.</li>
</ul>

<h2>Common myths</h2>
<ul>
<li><strong>&ldquo;Someone can track me by my MAC address over the internet.&rdquo;</strong> No. It does not leave your local network. What others can see is covered in <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a></li>
<li><strong>&ldquo;MAC filtering secures my Wi-Fi.&rdquo;</strong> It helps a little, but addresses are visible in the air and can be imitated. A strong WPA2 or WPA3 password matters far more.</li>
<li><strong>&ldquo;A MAC address is permanent.&rdquo;</strong> It is set in hardware, but operating systems can and do present a different one.</li>
</ul>
`,

  "what-is-my-default-gateway": `
<p>Your default gateway is the device that forwards traffic from your network to everywhere else. On a home network it is almost always your router. When your computer wants to reach a server it cannot see locally, it hands the packet to the gateway, and the gateway sends it on.</p>

<h2>Why is it called a default gateway?</h2>
<p>Your device keeps a small routing table. Addresses on your own network it delivers directly. For anything else there is one catch-all entry, the <em>default</em> route, pointing at the gateway. Without it, your device can reach your printer but not the internet.</p>

<h2>Typical gateway addresses</h2>
<p>It is a private address on your own network, most often one of these:</p>
<ul>
<li><code>192.168.1.1</code> and <code>192.168.0.1</code></li>
<li><code>10.0.0.1</code> and <code>10.0.0.138</code></li>
<li><code>192.168.1.254</code> or <code>192.168.100.1</code> on some provider modems</li>
</ul>

<h2>How to find yours</h2>
<ul>
<li><strong>Windows:</strong> run <code>ipconfig</code> in Command Prompt and read the <strong>Default Gateway</strong> line.</li>
<li><strong>macOS:</strong> System Settings, then Network, then Details, then TCP/IP, and read the <strong>Router</strong> field.</li>
<li><strong>Linux:</strong> run <code>ip route | grep default</code>. The address after <code>via</code> is the gateway.</li>
<li><strong>iPhone:</strong> Settings, then Wi-Fi, tap the (i) next to your network, and read <strong>Router</strong>.</li>
<li><strong>Android:</strong> Settings, then Wi-Fi, tap your network and read <strong>Gateway</strong>.</li>
<li><strong>PlayStation 5:</strong> Settings, then Network, then Connection Status, then View Connection Status.</li>
</ul>
<p>Our step-by-step guide with screenshots of each menu is <a href="/learn/find-router-ip-address">how to find your router's IP address</a>, since on a home network the two are the same number.</p>

<h2>Gateway, subnet mask and DNS: how they fit together</h2>
<div class="tw"><table><tbody>
<tr><th>Setting</th><th>What it decides</th><th>Example</th></tr>
<tr><td>IP address</td><td>Who this device is on the network</td><td>192.168.1.42</td></tr>
<tr><td>Subnet mask</td><td>Which addresses count as local</td><td>255.255.255.0</td></tr>
<tr><td>Default gateway</td><td>Where everything else is sent</td><td>192.168.1.1</td></tr>
<tr><td>DNS server</td><td>Who turns names into addresses</td><td>1.1.1.1</td></tr>
</tbody></table></div>
<p>The gateway must sit inside the range your subnet mask defines, or your device cannot reach it. Our <a href="/subnet">subnet calculator</a> shows that range for any address and prefix, and <a href="/learn/cidr-subnet-mask-explained">CIDR and subnet masks explained</a> covers the arithmetic.</p>

<h2>Your gateway is not your public IP address</h2>
<p>The gateway is a private address that only exists inside your home. The address the internet sees belongs to the router's outside interface, and you can check it on our <a href="/">IP checker</a>. If the address on your router's status page differs from the one we show, your provider is sharing one public address between several customers, which also blocks inbound connections. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>Troubleshooting</h2>
<ul>
<li><strong>No gateway listed.</strong> Your device did not get a DHCP lease. Reconnect to the network or restart the router.</li>
<li><strong>Gateway shows 0.0.0.0.</strong> Same cause: no working configuration was received.</li>
<li><strong>An address starting 169.254.</strong> Windows assigned itself a fallback address because DHCP failed entirely.</li>
<li><strong>Gateway responds but nothing loads.</strong> Local networking is fine and the fault is upstream, either DNS or your provider. Try our <a href="/ping">ping test</a> and <a href="/learn/what-is-a-dns-server">what is a DNS server</a>.</li>
<li><strong>Two gateways.</strong> A second router behind the first creates double NAT, which breaks port forwarding until one is put into bridge mode.</li>
</ul>
`,

  "static-vs-dynamic-ip-address": `
<p>A dynamic IP address is borrowed and can change. A static IP address is fixed and stays yours. Almost every home connection uses dynamic addressing, and for most people that is the right choice. Here is when it is not.</p>

<h2>The difference in one table</h2>
<div class="tw"><table><tbody>
<tr><th></th><th>Dynamic IP</th><th>Static IP</th></tr>
<tr><td>Assigned by</td><td>DHCP, automatically</td><td>Set manually or reserved for you</td></tr>
<tr><td>Changes over time</td><td>Yes</td><td>No</td></tr>
<tr><td>Cost</td><td>Included</td><td>Usually an extra monthly fee</td></tr>
<tr><td>Setup</td><td>None</td><td>Manual configuration</td></tr>
<tr><td>Best for</td><td>Normal browsing, streaming, gaming</td><td>Hosting, remote access, mail servers</td></tr>
</tbody></table></div>

<h2>Two different things are called &ldquo;static&rdquo;</h2>
<p>This trips people up constantly.</p>
<ul>
<li>A <strong>static local IP</strong> fixes a device's address inside your home, such as 192.168.1.50 for a printer. It is free, you set it yourself, and it changes nothing on the internet.</li>
<li>A <strong>static public IP</strong> fixes the address the whole internet sees. Only your provider can give you one, and it usually costs extra.</li>
</ul>
<p>If you want a printer or server to keep the same address at home, you want the first one, and the best way is a DHCP reservation in your router rather than configuring the device by hand. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>Why does dynamic addressing exist?</h2>
<p>There are not enough IPv4 addresses for every connection to hold one permanently, so providers recycle them from a pool. Your router asks for an address, gets a lease, and renews it. When the lease lapses, you may be handed a different one. That is why your address changes for no apparent reason, as explained in <a href="/learn/why-does-my-ip-address-change">why your IP address keeps changing</a>.</p>

<h2>Advantages and drawbacks</h2>
<h3>Dynamic</h3>
<p><strong>Good:</strong> free, automatic, and a changing address makes long-term tracking by address alone slightly harder.<br>
<strong>Bad:</strong> anything that must find you at a fixed address breaks when it changes, and you may inherit an address someone else got blocklisted. See <a href="/learn/is-my-ip-address-blacklisted">is your IP address blacklisted?</a></p>
<h3>Static</h3>
<p><strong>Good:</strong> reliable for hosting and remote access, can be added to allow-lists at work, and generally comes with proper reverse DNS, which mail servers check.<br>
<strong>Bad:</strong> costs more, is permanently linked to you, and is a steady target for scanning, so anything you expose needs to be kept patched.</p>

<h2>Do you need a static IP?</h2>
<p>You probably do if you run a mail server, host a website or game server from home, need reliable remote desktop or VPN access to your home or office, or a service you use requires an allow-listed address. Business connections, CCTV installations and point-of-sale systems often fall into this group.</p>
<p>You probably do not if you browse, stream, work remotely through someone else's VPN, or play online games. Gaming needs low latency, not a fixed address. For that, see <a href="/learn/how-to-lower-ping">how to lower your ping</a>.</p>

<h2>The cheaper alternative: dynamic DNS</h2>
<p>Dynamic DNS gives you a fixed name, such as myhome.example.net, that updates automatically whenever your address changes. A small client on your router or computer reports the new address to the provider. For most home hosting and remote access, this does the job at no cost, with a short gap whenever the address changes. Combine it with <a href="/learn/what-is-port-forwarding">port forwarding</a> and check the result with our <a href="/port">port checker</a>.</p>
<p>One thing dynamic DNS cannot fix is carrier-grade NAT, where your provider shares one public address between many customers. If your router's address differs from the one on our <a href="/">IP checker</a>, inbound connections cannot reach you at all, and you need a real public address or a tunnel service.</p>

<h2>How to set a static local IP</h2>
<p>The cleanest method is a DHCP reservation. Log in to your router, find the DHCP or LAN settings, locate the device in the client list and reserve its current address against its MAC address. The device keeps using automatic settings and always receives the same address. You will need its MAC address, which is covered in <a href="/learn/what-is-a-mac-address">what is a MAC address</a>. To set it on the device instead, follow <a href="/learn/change-ip-address-windows-11">how to change your IP address on Windows 11</a>.</p>
`,

  "how-to-lower-ping": `
<p>High ping is the delay between pressing a key and the game server reacting. It shows up as rubber-banding, shots that do not register and laggy voice chat. Download speed barely affects it, so paying for a faster plan often changes nothing. These are the fixes that actually work, roughly in order of impact.</p>
<p>Measure first so you know whether anything helped. Run our <a href="/ping">ping test</a> and note your average and your jitter before you change anything.</p>

<h2>1. Use a cable instead of Wi-Fi</h2>
<p>This is the single biggest win for most people. Wi-Fi adds delay and, worse, makes it inconsistent. An Ethernet cable typically removes 5 to 30 ms and nearly all of the jitter. If you cannot run a cable, use the 5 GHz band, sit closer to the router, and avoid powerline adapters where you can.</p>

<h2>2. Pick a server close to you</h2>
<p>Distance sets a floor your connection cannot beat, because signals take time to travel. A server on another continent cannot give you a low ping no matter what you buy. Most games let you choose a region or show the ping per server, so pick the nearest one with a healthy population.</p>

<h2>3. Stop other traffic on your network</h2>
<p>A single large upload, cloud backup or 4K stream can add hundreds of milliseconds to everything else. This is called <strong>bufferbloat</strong>, and it is why ping is fine when idle and terrible while someone downloads. Pause big transfers while you play, and if your router supports Smart Queue Management, SQM or fq_codel, turn it on. It is the most effective router setting for gaming.</p>

<h2>4. Check your jitter and packet loss, not just ping</h2>
<p>A steady 60 ms feels better than a ping that jumps between 20 and 200 ms. Our <a href="/ping">ping test</a> reports jitter and packet loss alongside the average. Any packet loss at all points at a physical problem: a bad cable, a failing router, weak Wi-Fi or a fault on your provider's line. Fix that before tuning anything else, and read <a href="/learn/what-is-ping">what is ping</a> for what the numbers mean.</p>

<h2>5. Restart and update your router</h2>
<p>Routers accumulate state and slow down over weeks. Restart it, install any firmware update, and if it is more than about five years old consider replacing it. Old hardware is a common hidden cause of bufferbloat.</p>

<h2>6. Close background apps and updates</h2>
<p>Game launchers, cloud sync, torrent clients and operating-system updates all compete for the same connection. Windows Update and console system updates are the usual culprits, since they can saturate your line silently.</p>

<h2>Console-specific tips</h2>
<ul>
<li><strong>PlayStation and Xbox:</strong> use a cable, and turn off automatic updates and background downloads while playing. Setting a manual DNS server can speed up matchmaking lookups, though it does not change in-game ping. See <a href="/learn/what-is-a-dns-server">what is a DNS server</a>.</li>
<li><strong>Nintendo Switch:</strong> the built-in Wi-Fi is weak, so a USB Ethernet adapter helps noticeably.</li>
<li><strong>Mobile games:</strong> 5G and good Wi-Fi are both fine, but moving between cells causes spikes. Stay still while playing competitively.</li>
</ul>

<h2>Does a VPN lower ping?</h2>
<p>Usually not. A VPN adds a detour, so ping normally goes up. There is one exception: when your provider routes you badly to a particular game server, a VPN can occasionally find a shorter path. Test it both ways with our <a href="/ping">ping test</a> and keep whichever is faster. If you do use one, confirm it is behaving with <a href="/learn/is-my-vpn-working">is my VPN working?</a></p>

<h2>What does not work</h2>
<ul>
<li><strong>&ldquo;Ping booster&rdquo; and network optimizer software.</strong> Most of it either does nothing or is a repackaged VPN.</li>
<li><strong>Buying more download speed.</strong> Beyond about 50 Mbps, extra bandwidth does nothing for latency.</li>
<li><strong>Changing DNS.</strong> It speeds up lookups, not gameplay.</li>
<li><strong>Turning off IPv6.</strong> Harmless, but it rarely changes anything.</li>
</ul>

<h2>When it is your provider</h2>
<p>If your ping is high on a wired connection with nothing else running, and the nearest servers are still slow, the problem is upstream. Run a traceroute (<code>tracert example.com</code> on Windows, <code>traceroute example.com</code> on macOS and Linux) to see where the delay appears. Record results from our <a href="/ping">ping test</a> and <a href="/speed">speed test</a> at different times of day, then contact support with that evidence. Congestion in the evening is a common and fixable complaint.</p>
`,

  "how-to-check-if-a-proxy-is-working": `
<p>A proxy that "works" can still fail you. It may connect but be slow, exit in the wrong country, rotate when you need it to stay put, or be blocked by the one site you care about. Five quick tests tell you most of what you need to know before you commit a project or a payment to it.</p>

<h2>1. Check that it connects and signs in</h2>
<p>Enter the proxy into the <a href="/proxy-checker">proxy checker</a> as <code>host:port</code>, adding the username and password if it uses them. The tool opens a tunnel through the proxy and fetches a page over HTTPS. If that succeeds, the proxy is alive and your credentials are accepted. If it fails, the message names the cause, and our guide to <a href="/learn/proxy-error-407-403-502">proxy errors 407, 403 and 502</a> explains each one.</p>

<h2>2. Confirm the exit IP and country</h2>
<p>The exit IP is the address websites see. It should differ from your own and sit in the country, and if you paid for it the city, that you chose. The checker shows it with its location, network owner and ASN. To look at any address in more detail, paste it into the <a href="/lookup">IP lookup</a>. Location databases disagree and are approximate, so a city that is off by a hundred miles is normal, while the wrong country is a real problem.</p>

<h2>3. Check what kind of network it is</h2>
<p>A proxy sold as residential should not sit on a hosting company's network. The <a href="/reputation">IP reputation check</a> classifies the owner as a hosting or data center network, a known VPN or proxy network, or a likely home or mobile provider, and tells you if the address is a Tor exit or is listed on spam blocklists. These are indicators, not proof. Residential proxies can look like any home connection, which is why they work, and datacenter proxies are easy to spot, which is why some sites block them. See <a href="/learn/residential-vs-datacenter-proxies">residential vs datacenter proxies</a>.</p>

<h2>4. Run several requests, not one</h2>
<p>One good request proves little. The checker makes three on separate connections, so you can see the success rate and whether the exit IP stays the same. A rotating proxy should show different addresses, and a static or sticky one should show the same address. If a proxy fails one request in three here, expect worse under load. Read <a href="/learn/rotating-vs-sticky-proxies">rotating vs sticky proxies</a> for what each result means.</p>

<h2>5. Test the site you actually need</h2>
<p>Many proxies work on test pages and fail on the website you bought them for, because that site blocks the network or rate-limits it. Enter the site's HTTPS address in the optional website field of the checker. A 200 means it let the proxy in. A 403, 429 or 503 means it is blocking or throttling that proxy, which no speed result will reveal.</p>

<h2>Test from your own machine with cURL</h2>
<p>A command-line check confirms a proxy from the machine that will use it. For an HTTP proxy, run <code>curl -x http://user:password@host:port https://www.cloudflare.com/cdn-cgi/trace</code>. For SOCKS5, run <code>curl -x socks5h://user:password@host:port https://www.cloudflare.com/cdn-cgi/trace</code>. The reply includes a line starting with <code>ip=</code>, which is the exit IP. If a password contains characters such as <code>@</code> or <code>:</code>, write them as <code>%40</code> and <code>%3A</code> in the URL.</p>

<h2>What a quick test cannot prove</h2>
<p>A free online test runs from one place for a few seconds. It cannot tell you how a proxy behaves over a day, how many of its IPs are already burned on your target, or how it handles heavy traffic. Treat it as a screening step, then run a small trial on your real workload before you buy more. To measure speed properly, follow <a href="/learn/how-to-test-proxy-speed">how to test proxy speed</a>.</p>
`,

  "proxy-error-407-403-502": `
<p>When a proxy fails, it usually tells you why in a three-digit code, and the code points at the fix. Browsers show these in friendlier words, such as <em>ERR_PROXY_CONNECTION_FAILED</em> or <em>ERR_TUNNEL_CONNECTION_FAILED</em>, but the cause is the same. Run the failing proxy through the <a href="/proxy-checker">proxy checker</a> first, because it shows the exact code the proxy returns.</p>

<h2>407 Proxy Authentication Required</h2>
<p>The proxy wants a username and password and either did not get them or did not accept them. This is the most common error with paid proxies.</p>
<ul>
<li><strong>Check for typos</strong> and for extra spaces copied from a dashboard.</li>
<li><strong>Use the right username format.</strong> Many providers build targeting into the username, such as a country or a session ID, so the plain account name is not enough. Copy the full string the dashboard generates.</li>
<li><strong>Encode special characters</strong> when you use the <code>user:password@host:port</code> form. An <code>@</code> in a password becomes <code>%40</code> and a colon becomes <code>%3A</code>, otherwise the address is split in the wrong place.</li>
<li><strong>Check the authentication method.</strong> If the provider authenticates by IP address instead of by password, requests from any other address are refused. Add your current public IP in the provider's dashboard. Our <a href="/">IP checker</a> shows it.</li>
<li><strong>Check the plan.</strong> An expired plan, used-up traffic, or a product that was never activated (for example residential access on an account that only has datacenter proxies) can look like a login failure.</li>
</ul>

<h2>403 Forbidden</h2>
<p>The proxy understood you and refused. Typical causes are an IP address that is not on the allow-list, a destination the provider restricts, or an account that has not completed a verification step the provider requires for certain sites. Try an ordinary destination first. If that works, the block is specific to your target, and you should ask the provider whether that site is allowed on your plan.</p>

<h2>502 Bad Gateway and 504 Gateway Timeout</h2>
<p>The proxy accepted your request but could not get an answer from the next hop. On residential and mobile networks the exit device may have gone offline, so retrying, which usually picks a new exit, often works. If every request fails, the provider may have an outage, or your chosen location may have no available IPs at that moment.</p>

<h2>429 Too Many Requests</h2>
<p>Either the provider or the website is rate limiting you. Slow down, spread requests across more IPs, or use a rotating pool instead of a single address. If the checker shows 429 only when you test a specific website, the website is the one limiting you.</p>

<h2>Timeouts and connection refused</h2>
<ul>
<li><strong>Connection refused</strong> means nothing is listening on that host and port. Re-check both, and check whether SOCKS5 uses a different port from HTTP.</li>
<li><strong>Timeout</strong> means packets are being dropped. The proxy may be offline, or a firewall in between may block the port. Test the port from another network, and see our guide to <a href="/learn/how-to-check-if-a-port-is-open">checking if a port is open</a>.</li>
<li><strong>The server closes the connection without answering</strong> often means you chose the wrong protocol. Try SOCKS5 if you tried HTTP, or the other way round. <a href="/learn/http-vs-socks5-proxy">HTTP vs SOCKS5</a> explains the difference.</li>
</ul>

<h2>TLS and certificate errors</h2>
<p>If the tunnel opens but the secure connection to the website fails, the proxy may be intercepting HTTPS traffic with its own certificate. That is normal for some corporate proxies and a red flag for a proxy you bought, because it means the operator could read what you send.</p>

<h2>A quick way to narrow it down</h2>
<p>Run the same proxy in the checker and in cURL, then change one thing at a time: the protocol, the port, the credentials, the destination. The first change that turns a failure into a success is your answer. If nothing helps, send your provider the exact code and the time you saw it.</p>
`,

  "http-vs-socks5-proxy": `
<p>HTTP proxy and SOCKS5 proxy are the two protocols you will see in nearly every proxy list. Both forward your traffic through another address, but they work at different levels, and the right choice depends on what you are sending.</p>

<h2>HTTP and HTTPS proxies</h2>
<p>An HTTP proxy understands web traffic. For plain http:// pages it reads your request and passes it on, so it can also read, log, cache or change that request. For https:// pages your client asks the proxy to open a tunnel with the <code>CONNECT</code> method and then talks to the website directly inside that tunnel, so the proxy sees which site you connect to but not what you send. Providers label proxies that support this as "HTTP/HTTPS". A proxy that you reach over an encrypted connection to the proxy itself is much rarer, and is the only kind that is strictly an HTTPS proxy.</p>

<h2>SOCKS5 proxies</h2>
<p>SOCKS5 works at a lower level and does not care what you are sending. It opens a connection to the destination you name and passes bytes in both directions, so it works with web traffic, email clients, torrent clients, games and any other TCP application, and it can carry UDP traffic as well when the proxy supports it. It supports sign-in with a username and password. It does not read or alter your requests, so it adds no headers.</p>

<h2>What is the difference between an HTTP proxy and a SOCKS5 proxy?</h2>
<p>An HTTP proxy understands web traffic and can read or change plain HTTP requests, while a SOCKS5 proxy simply forwards bytes for any TCP application and adds no headers. Use HTTP for browsing and scraping; use SOCKS5 for torrents, games, email clients and anything that is not a web page.</p>
<div class="tw"><table><tbody>
<tr><th>Feature</th><th>HTTP / HTTPS proxy</th><th>SOCKS5 proxy</th></tr>
<tr><td>Traffic it carries</td><td>Web traffic only</td><td>Any TCP application, plus UDP where supported</td></tr>
<tr><td>What the proxy can see</td><td>Everything on plain HTTP; only the destination host on HTTPS</td><td>Only the destination and the amount of data</td></tr>
<tr><td>Reads or changes requests</td><td>Yes, on plain HTTP</td><td>No, it adds no headers</td></tr>
<tr><td>Speed</td><td>Similar in practice</td><td>Slightly less overhead, rarely noticeable</td></tr>
<tr><td>Client support</td><td>Universal: every browser and scraping library</td><td>Common but not universal</td></tr>
<tr><td>Who resolves the name</td><td>The proxy</td><td>Your machine, unless you use <code>socks5h://</code></td></tr>
<tr><td>Best for</td><td>Browsing, scraping, anything web-only</td><td>Torrents, games, email clients, mixed traffic</td></tr>
</tbody></table></div>

<h2>DNS: who looks up the website name?</h2>
<p>With a plain <em>socks5://</em> setting, many clients look up the website name on your own machine and send only the IP address to the proxy, which tells your DNS resolver which sites you visit. With <em>socks5h://</em> the proxy looks up the name instead. HTTP proxies look up the name themselves. If you use a proxy for privacy, or to see a site as someone in another country would, make sure the proxy resolves the name. Our <a href="/webrtc">WebRTC leak test</a> covers a related leak in browsers.</p>

<h2>Which should you choose?</h2>
<ul>
<li><strong>Web scraping and browsers.</strong> HTTP/HTTPS is the simplest choice and works with almost every tool.</li>
<li><strong>Non-web apps, torrenting, games or mixed traffic.</strong> SOCKS5.</li>
<li><strong>A tool that supports only one protocol.</strong> Use the one it supports. The differences rarely matter.</li>
</ul>

<h2>How to tell what you have</h2>
<p>Your provider's dashboard usually says, but a proxy list may not. The <a href="/proxy-checker">proxy checker</a> auto-detects the protocol: it tries HTTP first, falls back to SOCKS5, and reports which one answered. Pointing the wrong protocol at a port is a common cause of the errors in our <a href="/learn/proxy-error-407-403-502">proxy error guide</a>. For what each kind reveals about you, read <a href="/learn/proxy-anonymity-levels">transparent, anonymous and elite proxies</a>.</p>
`,

  "residential-vs-datacenter-proxies": `
<p>Proxy providers sell two main kinds of address, and the difference decides how often you get blocked, how fast you go and how much you pay. The names describe where the IP address comes from, not how the proxy is built.</p>

<h2>Datacenter proxies</h2>
<p>Datacenter proxies use addresses owned by hosting companies and cloud providers. They are fast, stable, cheap and available in large quantities, often priced per IP. The downside is that they are easy to recognise. Any website can look up who owns the address, see a hosting company, and treat the traffic as automated. Sites that do this block or challenge datacenter addresses far more often than home connections.</p>

<h2>Residential proxies</h2>
<p>Residential proxies use addresses that internet providers assign to real households, so traffic looks like an ordinary visitor. They are harder to block and are available in many countries and cities, which is why they are used for ad verification, price monitoring, localised testing and scraping protected sites. They cost more, usually by the gigabyte, and they are slower and less consistent because the exit is a consumer connection. Reputable providers explain how they obtain residential IPs and that the people who share their connection have agreed to it, which is worth checking before you buy.</p>

<h2>ISP and mobile proxies</h2>
<p>Two variants sit between these. ISP proxies, also called static residential, are hosted in a data center but use addresses registered to a residential internet provider, so they are fast like datacenter proxies with a more trusted label. Mobile proxies exit through mobile carriers. Carrier networks share one address among many users, so sites are reluctant to block them, but mobile proxies are the most expensive and often the slowest.</p>

<h2>Which proxy type should you buy?</h2>
<p>Buy datacenter proxies when you need speed and volume on sites that do not block hard, and residential proxies when the target checks who owns the address. Mobile proxies are the hardest to block and the most expensive, so keep them for the sites that defeat everything else.</p>
<div class="tw"><table><tbody>
<tr><th>Feature</th><th>Datacenter</th><th>Residential</th><th>Mobile</th></tr>
<tr><td>Price</td><td>Cheapest, usually per IP</td><td>Higher, usually per GB</td><td>Highest</td></tr>
<tr><td>Speed</td><td>Fastest and most stable</td><td>Varies with the home connection</td><td>Varies, often slowest</td></tr>
<tr><td>Block rate</td><td>Highest</td><td>Low</td><td>Lowest</td></tr>
<tr><td>Address owner</td><td>Hosting or cloud company</td><td>Consumer internet provider</td><td>Mobile carrier</td></tr>
<tr><td>Location choice</td><td>Limited to data centers</td><td>Widest range of countries and cities</td><td>Wide, carrier-dependent</td></tr>
<tr><td>Best for</td><td>High-volume work on lenient sites</td><td>Strict sites, localised testing</td><td>The hardest targets</td></tr>
</tbody></table></div>
<p>ISP proxies, also called static residential, sit between the first two: datacenter speed with an address registered to a consumer provider.</p>

<h2>How to tell which kind you actually have</h2>
<p>Run the proxy through the <a href="/proxy-checker">proxy checker</a> and read the network owner and type. A hosting company or a known VPN or proxy network points to datacenter. A consumer internet provider points to residential or mobile. For any exit IP, the <a href="/reputation">IP reputation check</a> gives the same classification, and the <a href="/lookup">IP lookup</a> shows the owner and ASN. These are indicators, not proof: residential proxies are designed to look like ordinary home connections, so a clean result is what you should see. If you paid for residential and the owner is a hosting company, ask your provider why.</p>

<h2>How to choose</h2>
<p>Start from the target. If it does not block datacenter addresses, you do not need to pay for residential. If it does, test a small residential or ISP plan on that exact site before you commit, using the website test in the checker. Compare providers on success rate and speed measured the same way, as described in <a href="/learn/how-to-test-proxy-speed">how to test proxy speed</a>, and choose between <a href="/learn/rotating-vs-sticky-proxies">rotating and sticky sessions</a> once you know whether your job needs a stable IP.</p>
`,

  "rotating-vs-sticky-proxies": `
<p>A proxy gives you an exit IP address. What matters next is how long you keep it. Providers sell two behaviours: rotating, where the address changes often, and sticky, where it stays the same for a while. Choosing the wrong one is a common reason a scraping job fails or a login keeps getting signed out.</p>

<h2>Rotating proxies</h2>
<p>A rotating proxy assigns a new exit IP from a pool, typically on every request or every new connection. You connect to one gateway address and the provider handles the change behind it. Rotation spreads requests across many IPs, which keeps any single address under a website's rate limit and makes requests harder to link together. It suits large crawls, price checks and any job where each request is independent.</p>

<h2>Sticky proxies</h2>
<p>A sticky proxy, or sticky session, keeps the same exit IP for a set time, such as a few minutes, or until the connection drops. Providers usually let you choose the duration, and you request a session by adding a session ID to the username or by using a specific port, depending on the provider. Stickiness suits anything that needs one identity across several steps: logging in, filling a basket, paging through results behind a login, or a site that signs you out when your address changes. Sessions on residential networks can end early, because the device carrying your traffic may go offline.</p>

<h2>Static proxies</h2>
<p>A static proxy never changes. Datacenter and ISP proxies are normally static: you rent an address and keep it. That gives you a stable identity and, for some services, an address you can ask a partner to allow-list.</p>

<h2>Should you use a rotating or a sticky proxy?</h2>
<p>Use a rotating proxy when every request stands alone, such as a large crawl or a price check, because spreading requests across many addresses keeps each one under the rate limit. Use a sticky proxy when several steps must come from one identity, such as signing in, paging through results or completing a basket.</p>
<div class="tw"><table><tbody>
<tr><th>Behaviour</th><th>Rotating</th><th>Sticky</th><th>Static</th></tr>
<tr><td>Exit IP changes</td><td>Every request or connection</td><td>After a set time, or when the connection drops</td><td>Never</td></tr>
<tr><td>You control it by</td><td>Connecting to one gateway</td><td>A session ID or a dedicated port</td><td>Buying a fixed IP</td></tr>
<tr><td>Keeps a login alive</td><td>No</td><td>Yes, for the session length</td><td>Yes</td></tr>
<tr><td>Spreads rate limits</td><td>Yes, across the whole pool</td><td>Partly</td><td>No</td></tr>
<tr><td>Typical use</td><td>Crawling, price monitoring</td><td>Logins, baskets, multi-step flows</td><td>Allowlisted access, long sessions</td></tr>
</tbody></table></div>

<h2>How to test which one you have</h2>
<p>Run the proxy through the <a href="/proxy-checker">proxy checker</a>. It makes three requests on separate connections and lists the exit IP of each.</p>
<ul>
<li><strong>Different addresses each time.</strong> The proxy is rotating.</li>
<li><strong>The same address every time.</strong> The proxy is static, or you are inside a sticky session.</li>
<li><strong>Some requests failing.</strong> The pool or the exit devices are unreliable. See <a href="/learn/proxy-error-407-403-502">proxy errors and fixes</a>.</li>
</ul>
<p>Three requests in a few seconds will not reveal how long a sticky session lasts. To measure that, send a request once a minute for a while and note when the address changes. You can look up any address in the <a href="/lookup">IP lookup</a> to confirm that the location stays where you expect. For how one provider behaves, trust your own tests over its marketing page.</p>

<h2>Which should you use?</h2>
<ul>
<li><strong>Collecting many independent pages.</strong> Rotating.</li>
<li><strong>Anything with a login or a multi-step flow.</strong> Sticky, with a duration longer than the whole flow.</li>
<li><strong>Accounts that should look consistent over time, or allow-listing.</strong> Static.</li>
</ul>
<p>Whatever you pick, the type of address matters as much as how it rotates. Read <a href="/learn/residential-vs-datacenter-proxies">residential vs datacenter proxies</a> before you buy.</p>
`,

  "proxy-anonymity-levels": `
<p>Old proxy lists sort proxies into three levels: transparent, anonymous and elite. The levels describe what a proxy tells a website about you, and they come from the era when most traffic was plain HTTP. They are still worth understanding, with one important caveat further down.</p>

<h2>Transparent proxies</h2>
<p>A transparent proxy passes your real IP address to the website, usually in a header such as <code>X-Forwarded-For</code>, and often announces itself with a <code>Via</code> header. It hides nothing. Companies, schools and public Wi-Fi use them for caching and filtering, and some free proxy lists are full of them.</p>

<h2>Anonymous proxies</h2>
<p>An anonymous proxy does not send your real IP address, so the website sees only the proxy's address. It still identifies itself as a proxy, for example with a <code>Via</code> or <code>Proxy-Connection</code> header, so a website can tell you are behind one and may block or challenge you.</p>

<h2>Elite proxies</h2>
<p>An elite proxy, also called high-anonymity, sends neither your IP address nor any sign that a proxy is involved. The request looks as if it came directly from the proxy's address. This is the level to want for anything that depends on not being identified as a proxy user, although "elite" describes headers only, not the reputation of the IP itself.</p>

<h2>What are the three proxy anonymity levels?</h2>
<p>The three levels describe what a proxy tells a website about you. A transparent proxy passes your real IP address, an anonymous proxy hides it but still identifies itself as a proxy, and an elite proxy sends neither your address nor any sign that a proxy is involved.</p>
<div class="tw"><table><tbody>
<tr><th>Level</th><th>Sends your real IP</th><th>Reveals it is a proxy</th><th>Typical use</th></tr>
<tr><td>Transparent</td><td>Yes, usually in <code>X-Forwarded-For</code></td><td>Yes, often a <code>Via</code> header</td><td>Company, school and public Wi-Fi caching and filtering</td></tr>
<tr><td>Anonymous</td><td>No</td><td>Yes, via headers such as <code>Via</code></td><td>Basic IP hiding where being seen as a proxy is acceptable</td></tr>
<tr><td>Elite (high-anonymity)</td><td>No</td><td>No</td><td>Anything that must not look like proxy traffic</td></tr>
</tbody></table></div>

<h2>How the levels are tested</h2>
<p>A test server receives a request through the proxy and inspects the headers. If it sees your real IP, the proxy is transparent. If your IP is hidden but proxy headers are present, it is anonymous. If neither shows, it is elite. You can see which headers your own browser sends with our <a href="/headers">HTTP headers viewer</a>.</p>

<h2>The caveat: HTTPS makes the levels mostly irrelevant</h2>
<p>For https:// sites your client asks the proxy to open an encrypted tunnel and talks to the site directly inside it. The proxy cannot add or change headers in that traffic, so it cannot leak your IP through them, whatever its label says. That is why our <a href="/proxy-checker">proxy checker</a> runs its tests over HTTPS and does not show a transparent, anonymous or elite label: it would be a guess. The label still matters if you send plain HTTP requests through the proxy.</p>

<h2>What actually gives you away</h2>
<ul>
<li><strong>WebRTC.</strong> A browser can reveal your real IP through WebRTC even when traffic goes through a proxy or VPN. Test it with the <a href="/webrtc">WebRTC leak test</a>.</li>
<li><strong>DNS.</strong> If your device looks up website names itself, your resolver sees where you browse. See the DNS note in <a href="/learn/http-vs-socks5-proxy">HTTP vs SOCKS5</a>.</li>
<li><strong>The IP's reputation.</strong> A clean header does not help if the address belongs to a data center or is on a blocklist. Check the exit IP with the <a href="/reputation">IP reputation tool</a>.</li>
<li><strong>Browser fingerprint and cookies.</strong> Sites can recognise you from your browser details and from cookies, whatever proxy you use. Our <a href="/browser">browser info page</a> shows what you expose.</li>
</ul>
<p>For the wider picture, read <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address</a>.</p>
`,

  "how-to-test-proxy-speed": `
<p>"Fast" can mean three different things for a proxy, and a provider's headline number rarely tells you which. Measure latency, time to first byte, download speed and success rate, and measure them the same way for every proxy you compare.</p>

<h2>Which four numbers matter when testing proxy speed?</h2>
<ul>
<li><strong>Connect time.</strong> How long it takes to open a connection to the proxy itself. It reflects the distance and path between you and the proxy.</li>
<li><strong>Time to first byte (TTFB).</strong> How long until the first part of the answer arrives through the proxy, including the proxy's own work and the website's. This is the number that makes pages feel fast or slow.</li>
<li><strong>Throughput.</strong> How many megabits per second you can download through it. It matters for large files and media.</li>
<li><strong>Success rate.</strong> The share of requests that complete without an error or a block. A fast proxy that fails one request in five is slower in practice than a steady one.</li>
</ul>

<h2>Test with the proxy checker</h2>
<p>Enter the proxy in the <a href="/proxy-checker">proxy checker</a>. It reports connect time, time to first byte through the tunnel, the download rate of a 1 MB sample and the success rate over three requests. Use it to compare proxies against each other and to catch ones that are broken or very slow. Its limits are listed on the page: it runs from a Cloudflare data center near you, not from your own server, and one sample over one connection reads lower than a long download.</p>

<h2>Test from the machine that will use the proxy</h2>
<p>The speed you get depends on the path from your machine, so confirm with cURL there. This command prints three timings:</p>
<p><code>curl -x http://user:password@host:port -o /dev/null -s -w "connect=%{time_connect} ttfb=%{time_starttransfer} total=%{time_total}\\n" https://www.cloudflare.com/cdn-cgi/trace</code></p>
<p>To measure throughput, download a larger file through the proxy and divide its size by the time taken. Run each test several times and at different times of day, and ignore the first result, which includes setup costs.</p>

<h2>What to compare</h2>
<p>As a rough guide, datacenter proxies usually answer with a TTFB in the tens to low hundreds of milliseconds, while residential and mobile proxies are typically several times slower and less consistent, because the exit is a consumer connection. These ranges vary by provider and distance, so the useful comparison is between your own candidates, measured identically. For background on the difference, read <a href="/learn/residential-vs-datacenter-proxies">residential vs datacenter proxies</a>.</p>

<h2>Why is my proxy slow?</h2>
<ul>
<li><strong>Distance.</strong> A proxy far from you adds latency to every request. Pick a location near you or near your target, depending on which matters more.</li>
<li><strong>Your own connection.</strong> Check your baseline with the <a href="/speed">speed test</a> and the <a href="/ping">ping test</a>, so you do not blame the proxy for a slow link.</li>
<li><strong>Overloaded pools.</strong> Shared datacenter IPs and busy residential pools slow down at peak hours.</li>
<li><strong>The target.</strong> Some websites throttle or delay traffic from proxy ranges. Test the same proxy against a neutral page and against your real site to see which one is slow.</li>
<li><strong>Protocol overhead.</strong> It is small. Switching between HTTP and SOCKS5 rarely changes the result.</li>
</ul>

<h2>A simple buying checklist</h2>
<ol>
<li>Ask for a trial or a small plan.</li>
<li>Test each candidate in the checker, then from your own machine.</li>
<li>Record TTFB, throughput and success rate at two different times of day.</li>
<li>Test your real target site, not just a test page.</li>
<li>Buy the one that wins on your numbers, not the one with the best headline figure.</li>
</ol>
<p>If a test fails outright, see <a href="/learn/proxy-error-407-403-502">proxy errors and fixes</a>. For the overall method, read <a href="/learn/how-to-check-if-a-proxy-is-working">how to check if a proxy is working</a>.</p>
`,
  "get-public-ip-address-command-line": `
<p>The quickest way to get your public IP address from a terminal is <code>curl https://ipcomet.com</code>. It prints your address and nothing else, so the output can go straight into a script. This guide shows the same one-liner on macOS, Linux and Windows, how to do it from Python and Node.js, how to get your location and ISP as JSON, and how to choose between IPv4 and IPv6.</p>

<h2>The one-line answer</h2>
<pre><code>curl https://ipcomet.com</code></pre>
<p>The output is a single line such as <code>203.0.113.7</code>. The home page recognises command-line clients (curl, wget, PowerShell and similar) by their User-Agent and returns just the address instead of the web page. In scripts, use the explicit endpoint <code>https://ipcomet.com/api/ip</code>, which always returns plain text.</p>

<h2>macOS and Linux</h2>
<pre><code>curl https://ipcomet.com/api/ip
wget -qO- https://ipcomet.com/api/ip</code></pre>
<p>macOS includes curl but not wget. To keep the result in a shell variable, use <code>MYIP=$(curl -s https://ipcomet.com/api/ip)</code>. The <code>-s</code> flag hides curl's progress meter.</p>

<h2>Windows</h2>
<p>Windows 10 and 11 ship with curl, so <code>curl.exe https://ipcomet.com/api/ip</code> works in both Command Prompt and PowerShell. Type <code>curl.exe</code> rather than <code>curl</code> in PowerShell, where <code>curl</code> can be an alias for <code>Invoke-WebRequest</code>. The native PowerShell way is:</p>
<pre><code>(Invoke-RestMethod https://ipcomet.com/api/ip).Trim()</code></pre>

<h2>Python</h2>
<p>With the <code>requests</code> library:</p>
<pre><code>import requests
print(requests.get("https://ipcomet.com/api/ip", timeout=10).text.strip())</code></pre>
<p>With only the standard library, set a User-Agent. Python's default one (<code>Python-urllib</code>) is rejected by the bot protection in front of many sites, including this one, which answers with a 403 error (Cloudflare error 1010):</p>
<pre><code>import urllib.request

req = urllib.request.Request("https://ipcomet.com/api/ip", headers={"User-Agent": "my-script/1.0"})
print(urllib.request.urlopen(req, timeout=10).read().decode().strip())</code></pre>

<h2>JavaScript and Node.js</h2>
<pre><code>const ip = (await (await fetch("https://ipcomet.com/api/ip")).text()).trim();
console.log(ip);</code></pre>
<p>This works in Node.js 18 and later, which has <code>fetch</code> built in, and in a browser page, because the endpoint allows cross-origin requests.</p>

<h2>Get your location and ISP as JSON</h2>
<pre><code>curl https://ipcomet.com/api/me</code></pre>
<p>The response describes the connection that made the request. An example, with made-up values:</p>
<pre><code>{
  "ip": "203.0.113.7",
  "version": 4,
  "city": "Mumbai",
  "region": "Maharashtra",
  "country": "India",
  "countryCode": "IN",
  "timezone": "Asia/Kolkata",
  "asn": 64500,
  "org": "Example Broadband Ltd"
}</code></pre>
<p>The full response also has the postal code, latitude and longitude, and a few details about the connection (the edge location, the HTTP and TLS versions and the round-trip time). To pick out one field, pipe it through <code>jq</code>: <code>curl -s https://ipcomet.com/api/me | jq -r .country</code>.</p>
<p>To look up any other address, use <code>curl "https://ipcomet.com/api/lookup?q=8.8.8.8"</code>. It returns the IP version, hostname, city, region, country, coordinates, timezone, ASN and network owner. Lookups are limited to 60 a minute per caller, and location data is approximate because it comes from network records, not GPS. The <a href="/about">About page</a> lists where each piece of data comes from.</p>

<h2>Force IPv4 or IPv6</h2>
<p>If your connection has both, add <code>-4</code> or <code>-6</code> to curl: <code>curl -4 https://ipcomet.com</code> forces IPv4, and <code>curl -6 https://ipcomet.com</code> forces IPv6, which only works if your connection has IPv6. The <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6 guide</a> explains the difference.</p>

<h2>Other services you will see recommended</h2>
<ul>
<li><code>curl ifconfig.me</code>, <code>curl icanhazip.com</code>, <code>curl api.ipify.org</code> and <code>curl ipinfo.io/ip</code> are other free services that return a bare address in the same way.</li>
<li>Without HTTP, you can ask a DNS resolver instead: <code>dig +short myip.opendns.com @resolver1.opendns.com</code>.</li>
</ul>
<p>They all report the address the internet sees, so they should agree.</p>

<h2>Why do two services show different IP addresses?</h2>
<p>If they differ, your router may be sharing traffic across two internet connections, or a VPN may be carrying only some of your traffic. The <a href="/reputation">reputation tool</a> shows what kind of network each address belongs to, and the <a href="/webrtc">WebRTC leak test</a> helps when a VPN is involved.</p>
<p>These commands return your <em>public</em> address, the one websites see. For the private address on your own network, such as 192.168.1.20, see <a href="/learn/how-to-find-your-ip-address">how to find your IP address</a> and <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>Limits and privacy</h2>
<p>No key or sign-up is needed. Please keep requests reasonable: checking every few minutes is fine, but calling it in a tight loop may be rate limited. ipcomet does not store or log the addresses it sees, as the <a href="/privacy">privacy page</a> explains. Try it in the browser first with the <a href="/">what is my IP address</a> page.</p>
`,
  "what-is-an-ip-checker": `
<p>An IP checker is a tool that shows an IP address and what can be learned about it. Some checkers tell you <em>your own</em> public IP address, some look up <em>any</em> address or domain you type in, and some judge whether an address looks like a VPN, a proxy or a source of spam. This guide explains the three kinds, what each result means, and which one to use for the job in front of you.</p>

<h2>What are the three kinds of IP checker?</h2>
<ul>
<li><strong>&ldquo;What is my IP&rdquo; checkers</strong> show the address your connection uses on the internet. Open the <a href="/">what is my IP address</a> page and it appears at once, with your approximate location and provider.</li>
<li><strong>IP lookup checkers</strong> take an address or domain you type in and report where it is and who runs the network behind it. Use the <a href="/lookup">IP lookup tool</a>.</li>
<li><strong>IP reputation checkers</strong> look for signs that an address is a VPN, a proxy, a Tor exit or a data center, and check it against public spam and abuse blocklists. Use the <a href="/reputation">IP reputation checker</a>.</li>
</ul>

<h2>What do the results mean?</h2>
<ul>
<li><strong>IP version.</strong> IPv4 looks like <code>203.0.113.7</code> and IPv6 like <code>2001:db8::1</code>. Many connections have both.</li>
<li><strong>Location.</strong> Country, region and city. It is an estimate made from network records, not GPS, so it can be wrong. See <a href="/learn/why-is-my-ip-location-wrong">why an IP address can show the wrong location</a>.</li>
<li><strong>ISP and organization.</strong> The company that provides the connection or owns the block of addresses.</li>
<li><strong>ASN.</strong> The Autonomous System Number identifies the network that announces the address on the internet, such as an internet provider or a hosting company.</li>
<li><strong>Hostname.</strong> The name in the address's reverse DNS record, if its owner set one. Servers usually have one and home connections often do not.</li>
<li><strong>Network type.</strong> Whether the address belongs to a home or mobile provider, a hosting company or a known VPN. Websites use this to decide how far to trust a visitor.</li>
<li><strong>Blocklist status.</strong> Whether the address appears on public lists of spam or abuse sources. This can affect whether your email is delivered.</li>
</ul>

<h2>Which IP checker should you use?</h2>
<ul>
<li><strong>To see what websites see when you visit them,</strong> use &ldquo;what is my IP&rdquo;. Check it with a VPN off and then on to confirm the VPN is working; see <a href="/learn/is-my-vpn-working">is my VPN working</a>.</li>
<li><strong>To investigate an address in a log or a message,</strong> use the lookup.</li>
<li><strong>If your email is being rejected or a site keeps showing CAPTCHAs,</strong> use the reputation checker and read <a href="/learn/is-my-ip-address-blacklisted">is my IP address blacklisted</a>.</li>
<li><strong>To test a proxy you bought,</strong> use the <a href="/proxy-checker">proxy checker</a>, which connects through the proxy and reports the address it exits from.</li>
<li><strong>To check for leaks,</strong> run the <a href="/webrtc">WebRTC leak test</a>, because a browser can reveal your real address even behind a VPN.</li>
</ul>

<h2>Limits to keep in mind</h2>
<p>An IP address is not an identity. It points at a connection, usually shared by many people, and the location is approximate. VPN and proxy detection is based on clues, so residential proxies and some private VPNs cannot be detected. Treat the results as indicators, not proof. The <a href="/about">About page</a> lists how each result is produced.</p>
<p>From a terminal you can get your own address with one command; see <a href="/learn/get-public-ip-address-command-line">how to get your public IP address from the command line</a>.</p>
`,
  "why-is-my-ip-location-wrong": `
<p>An IP address does not contain your location. A location lookup is an estimate that a database makes by matching the address to records and measurements. That is why a lookup can show the right country but the wrong city, or a place far from where you actually are. Here is why it happens and what you can do about it.</p>

<h2>How is an IP location worked out?</h2>
<p>Providers of IP location data combine several sources: registration records that show which company holds a block of addresses and where it says it operates, network measurements such as how long traffic takes to reach an address, routing information, and location hints gathered from other data. None of it comes from your device, and none of it uses GPS.</p>

<h2>Why is my IP location wrong?</h2>
<ul>
<li><strong>Your provider's hub is somewhere else.</strong> Many providers send a whole region's customers out through one location, so the address appears there, possibly in another city.</li>
<li><strong>You are on a mobile network.</strong> Mobile traffic often leaves the carrier's network far from the phone, and addresses are shared between many users.</li>
<li><strong>You use a VPN or proxy.</strong> The address belongs to the VPN server, so the location is the server's. See <a href="/learn/is-my-vpn-working">is my VPN working</a>.</li>
<li><strong>The address was recently reassigned.</strong> Providers move addresses between regions and customers, and databases take time to catch up.</li>
<li><strong>The database is out of date or coarse.</strong> Different providers disagree, and some only know the country or a default point in a region.</li>
<li><strong>The address is registered to a head office.</strong> A business may hold its addresses under its headquarters while the connection is somewhere else.</li>
</ul>

<h2>How accurate is IP geolocation?</h2>
<p>The country is usually right, the region is often right and the city is only sometimes right. The street or house is never something an IP address can tell. To see how much tools disagree, open the <a href="/">what is my IP address</a> page and the <a href="/lookup">IP lookup</a> and compare what they say.</p>

<h2>Can you fix it?</h2>
<p>Not directly, because the location is held by each data provider, not by you. If a website relies on it wrongly, you can contact your internet provider, who controls the registration of its address blocks, or contact the website. Some location data providers accept correction requests. Switching network, for example from mobile data to Wi-Fi, or reconnecting can also give you a different address with a different estimate.</p>

<h2>Why it matters, and why it is also reassuring</h2>
<p>A wrong location can show you the wrong language or prices, block a service limited to a region, or trigger a security warning. It also means websites cannot find your home from your IP address. Read <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by IP address</a> for what an IP address does reveal.</p>
`,
};
