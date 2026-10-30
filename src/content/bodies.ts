/** Article bodies (trusted, hand-written HTML). Kept apart from metadata so the Worker bundle stays small. */
export const BODIES: Record<string, string> = {
  "what-is-an-ip-address": `
<p>An <strong>IP address</strong> (Internet Protocol address) is the number that identifies a device or network on the internet, so data knows where to go and where it came from. It works like the address on an envelope: a website sends the page you asked for to your IP address, and routers along the way read it to pass the data in the right direction. You can see yours on our <a href="/">IP checker</a>.</p>

<h2>IP address meaning</h2>
<p>An IP address is a numeric label for a network connection. Every packet of data on the internet carries two of them: the address it came from and the address it is going to. RFC 791, the 1981 specification of the Internet Protocol, describes the job as carrying blocks of data called datagrams from sources to destinations identified by fixed-length addresses. Names such as example.com are for people; the <a href="/learn/what-is-a-dns-server">DNS</a> turns them into IP addresses for computers.</p>

<h2>What does IP stand for?</h2>
<p>IP stands for Internet Protocol, the set of rules that splits data into packets and addresses each one so it can cross many networks. An IP address is the address that protocol uses. IPv4 was specified in RFC 791 in September 1981, and IPv6 in 1998, with its current specification in RFC 8200.</p>

<h2>What does an IP address look like?</h2>
<div class="tw"><table><tbody>
<tr><th>Version</th><th>Example</th><th>Size</th><th>Possible addresses</th></tr>
<tr><td>IPv4</td><td class="mono">203.0.113.42</td><td>32 bits, four numbers from 0 to 255</td><td>About 4.3 billion</td></tr>
<tr><td>IPv6</td><td class="mono">2001:db8:85a3::8a2e:370:7334</td><td>128 bits, hexadecimal groups</td><td>2 to the power 128</td></tr>
</tbody></table></div>
<p>Both versions do the same job, and most connections now use both. Read <a href="/learn/what-is-ipv6">what IPv6 is</a> or the side-by-side <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a> comparison.</p>

<h2>Types of IP addresses</h2>
<ul>
<li>Public and private. Your router has one public address that the internet sees, and gives each device inside a private address from the ranges in RFC 1918 (10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16). It translates between them with <a href="/learn/what-is-nat">NAT</a>. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</li>
<li>Dynamic and static. Most home connections get a dynamic address that can change; businesses often pay for a static one. See <a href="/learn/static-vs-dynamic-ip-address">static vs dynamic IP addresses</a>.</li>
<li>Special ranges. 127.0.0.1 always means the device itself, 169.254.x.x means a device <a href="/learn/what-is-a-169-254-ip-address">could not get an address</a>, and 100.64.0.0/10 is used by providers for <a href="/learn/what-is-cgnat">carrier-grade NAT</a>.</li>
</ul>

<h2>Who assigns IP addresses?</h2>
<p>Addresses are handed down in blocks. IANA allocates pools of addresses to five regional internet registries: AFRINIC for Africa, APNIC for Asia and the Pacific, ARIN for Canada, the USA and some Caribbean islands, LACNIC for Latin America and some Caribbean islands, and RIPE NCC for Europe, the Middle East and Central Asia. The registries assign blocks to internet providers and large organizations, and your provider gives your router its public address, usually automatically. Our <a href="/asn-lookup">ASN lookup</a> shows which network announces any address.</p>

<h2>What does your IP address reveal?</h2>
<p>A public IP address usually reveals your internet provider, your country and often your city or region. It does not reveal your name, your street address or what you do online. Linking an address to a person normally needs your provider's records, which are released only through legal process. Our <a href="/lookup">IP lookup</a> shows exactly what anyone can see for an address, and <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a> goes further.</p>

<h2>How to find your IP address</h2>
<p>Your public address is at the top of our <a href="/">home page</a>, with your IPv6 address underneath if you have one. Our guide to <a href="/learn/my-ip">what each line of your IP result means</a> explains the location, ISP and network details shown with it. To find the private address of a device:</p>
<ul>
<li>Windows: open Command Prompt and run <code>ipconfig</code>.</li>
<li>Mac: open System Settings, choose Network, then your connection and Details.</li>
<li>Linux: run <code>ip addr</code> in a terminal.</li>
<li>iPhone or Android: open the Wi-Fi settings and tap your network.</li>
</ul>
<p>For every device and operating system, see <a href="/learn/how-to-find-your-ip-address">how to find your IP address</a>.</p>

<h2>Frequently asked questions</h2>
<h3>What is an IP address in simple words?</h3>
<p>It is your internet connection's address. Websites use it to send data back to you, the same way a letter needs a return address.</p>
<h3>Can two devices have the same IP address?</h3>
<p>Two devices on different home networks can have the same private address, such as 192.168.1.10, because private addresses only matter inside each network. On the internet, all the devices behind one router share its single public address.</p>
<h3>Does my IP address change?</h3>
<p>Often, yes. Most home connections have a dynamic address that the provider can change, and your address also changes when you switch networks. You can also <a href="/learn/how-to-change-your-ip-address">change it yourself</a>.</p>
<h3>Is my IP address the same on my phone and computer?</h3>
<p>On the same Wi-Fi, yes: both share your router's public address. On mobile data, your phone uses the carrier's address instead.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc791" rel="noopener">RFC 791: Internet Protocol (IETF, September 1981)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8200" rel="noopener">RFC 8200: Internet Protocol, Version 6 (IPv6) Specification (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc4291" rel="noopener">RFC 4291: IP Version 6 Addressing Architecture (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li><li><a href="https://www.iana.org/numbers" rel="noopener">IANA: Number resources and the regional internet registries</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc791" rel="noopener">RFC 791: Internet Protocol (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8200" rel="noopener">RFC 8200: Internet Protocol, Version 6 (IPv6) Specification (IETF)</a></li><li><a href="https://www.google.com/intl/en/ipv6/statistics.html" rel="noopener">Google: IPv6 adoption statistics</a></li></ul>
`,

  "public-vs-private-ip-address": `
<p>Every home network uses two kinds of IP address. A <strong>public</strong> address identifies your whole connection to the internet, and <strong>private</strong> addresses identify each device inside your home. Understanding the split explains why you cannot simply connect to a laptop from across the world, and why port forwarding exists.</p>

<h2>Public IP address</h2>
<p>This is the address websites see when you visit them. Your internet provider assigns it to your router, and every device on your network shares it. It is unique on the internet at any moment, and it is what our <a href="/">IP checker</a> displays. For which of your addresses counts as yours, see <a href="/learn/what-is-my-ip-address">what is my IP address</a>.</p>

<h2>Private IP address</h2>
<p>Private addresses are used only inside local networks, so they can be reused by millions of homes without clashing. Your router hands them out to your phone, laptop and TV. Three IPv4 ranges are reserved for this:</p>
<div class="tw"><table><tbody>
<tr><th>Range</th><th>CIDR</th><th>Typical use</th></tr>
<tr><td><code>10.0.0.0 – 10.255.255.255</code></td><td>10.0.0.0/8</td><td>Large companies, some routers</td></tr>
<tr><td><code>172.16.0.0 – 172.31.255.255</code></td><td>172.16.0.0/12</td><td>Medium networks, Docker</td></tr>
<tr><td><code>192.168.0.0 – 192.168.255.255</code></td><td>192.168.0.0/16</td><td>Most home routers</td></tr>
</tbody></table></div>
<p>Other special ranges you may meet include <code>127.0.0.1</code> (your own device, called loopback), <code>169.254.x.x</code> (<a href="/learn/what-is-a-169-254-ip-address">self-assigned when DHCP fails</a>) and <code>100.64.0.0/10</code> (used by providers for <a href="/learn/what-is-cgnat">carrier-grade NAT</a>).</p>

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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space (IETF)</a></li></ul>
`,

  "how-to-change-your-ip-address": `
<p>To <strong>change your IP address</strong>, restart your router, switch to a different network, use a VPN, or ask your internet provider for a new one. Which one works depends on what you mean: the public address websites see belongs to your router and provider, while the private address on your computer comes from your router. This guide covers both, and you can check the result on our <a href="/">IP checker</a>.</p>

<h2>Quick comparison</h2>
<div class="tw"><table><tbody>
<tr><th>Method</th><th>Changes what websites see?</th><th>Time</th><th>Cost</th></tr>
<tr><td>Restart the router</td><td>Sometimes</td><td>Minutes</td><td>Free</td></tr>
<tr><td>Switch network (mobile data, other Wi-Fi)</td><td>Yes, while connected</td><td>Seconds</td><td>Free</td></tr>
<tr><td>Turn airplane mode on and off (mobile data)</td><td>Often</td><td>Seconds</td><td>Free</td></tr>
<tr><td>VPN</td><td>Yes</td><td>Seconds</td><td>Usually paid</td></tr>
<tr><td>Proxy or Tor</td><td>Yes, for that browser or app</td><td>Seconds</td><td>Free to paid</td></tr>
<tr><td>Ask your provider</td><td>Yes</td><td>Hours to days</td><td>Varies</td></tr>
<tr><td>Change the local IP in device settings</td><td>No</td><td>Minutes</td><td>Free</td></tr>
</tbody></table></div>

<h2>1. Restart your router</h2>
<p>Most home connections get a dynamic public address from the provider. RFC 2131 calls this dynamic allocation: the address is handed out for a limited time, a lease. A router that reconnects often asks for its previous address again, which is why a quick restart frequently gives you the same one. Unplug the modem and router and leave them off for longer, an hour or overnight, so the lease can expire, then plug them back in and check our <a href="/">IP checker</a>. Our guide to <a href="/learn/why-does-my-ip-address-change">why IP addresses change</a> explains leases in more detail.</p>

<h2>2. Switch to a different network</h2>
<p>Every network has its own public address. Turning off Wi-Fi on your phone and using mobile data, joining a friend's Wi-Fi or a hotspot gives you a different address straight away, for as long as you stay connected.</p>

<h2>3. Change your IP on a phone</h2>
<p>On mobile data, turning airplane mode on for a few seconds and off again makes the phone reconnect to the carrier, which often hands out a new address. Many carriers share addresses between customers through <a href="/learn/what-is-cgnat">carrier-grade NAT</a>, so the address you see may also be used by others. On Wi-Fi, the public address belongs to the router, so the phone's settings cannot change it.</p>

<h2>4. Use a VPN</h2>
<p>A VPN sends your traffic through the VPN company's server, so websites see the server's address instead of yours, and you can choose another country in seconds. This is also how you change your IP to another country. The VPN provider can see the traffic your internet provider used to see, so choose one you trust. After connecting, test it with our <a href="/learn/is-my-vpn-working">VPN check guide</a> and the <a href="/webrtc">WebRTC leak test</a>.</p>

<h2>5. Use a proxy or Tor</h2>
<p>A proxy forwards requests from one browser or app through another server, and the Tor Browser sends them through several volunteer relays. Both change the address websites see, but only for the traffic you send through them. Some websites block Tor and many free proxies. If you use a proxy, our <a href="/proxy-checker">proxy checker</a> shows which address and location it gives you.</p>

<h2>6. Ask your internet provider</h2>
<p>Support can often assign a new dynamic address, and if you have a static address they can issue a different one. This is the cleanest fix when you need a genuinely new address, for example after an attack on your old one or when it has landed on a blocklist. Our <a href="/learn/is-my-ip-address-blacklisted">blocklist guide</a> shows how to check.</p>

<h2>7. Change your local IP address</h2>
<p>Sometimes the address you need to change is the private one your router gave your computer, for example to give a printer or game console a fixed address for port forwarding. This does not change what websites see.</p>
<ul>
<li>Windows 11: open Settings, then Network and internet, choose Wi-Fi or Ethernet and your network, select Edit next to IP assignment, and switch from Automatic (DHCP) to Manual. Our <a href="/learn/change-ip-address-windows-11">Windows 11 guide</a> has every step.</li>
<li>Mac: open System Settings, then Network, choose your connection, click Details and then TCP/IP. Click Renew DHCP Lease to get a new address from the router, or set one manually.</li>
<li>Any device: a DHCP reservation in your router gives the device the same address every time, which is usually better than a manual setting.</li>
</ul>
<p>Running <code>ipconfig /release</code> and <code>ipconfig /renew</code> on Windows also only renews this private address.</p>

<h2>Can you change your IP address online?</h2>
<p>No website can change your IP address for you. Pages that promise to change it online are either a web proxy, which changes the address only for pages loaded through it, or an advert for a VPN. To see what any website sees right now, use our <a href="/">IP checker</a>.</p>

<h2>Check that it worked</h2>
<ol>
<li>Note your address on the <a href="/">IP checker</a> before you start.</li>
<li>Make the change and reload the page. Look at both the IPv4 and IPv6 lines: a VPN that only covers IPv4 can leave your IPv6 address visible.</li>
<li>Run the <a href="/reputation">IP reputation check</a> on the new address to make sure it is not on a blocklist.</li>
</ol>

<h2>Frequently asked questions</h2>
<h3>Does restarting the router change your IP address?</h3>
<p>Sometimes. Your provider may give the router the same address again when it reconnects, because the lease has not expired. Leaving it off for longer improves the chance of a new one.</p>
<h3>Why does my IP address not change?</h3>
<p>Either you have a static address, your provider keeps assigning the same dynamic address to your router, or you are behind carrier-grade NAT and share an address that does not change when you reconnect. A VPN or a request to your provider works in all three cases.</p>
<h3>Does changing your IP address make you anonymous?</h3>
<p>No. Cookies, logins and browser fingerprints still identify you. A new address only stops sites linking you to the old one. Read <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a> for the full picture.</p>
<h3>How often does an IP address change by itself?</h3>
<p>It depends on your provider. Some keep the same address for months, others change it every time you reconnect. Our <a href="/learn/static-vs-dynamic-ip-address">static vs dynamic guide</a> shows how to tell which you have.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc2131" rel="noopener">RFC 2131: Dynamic Host Configuration Protocol, dynamic allocation and leases (IETF)</a></li><li><a href="https://support.microsoft.com/en-us/windows/essential-network-settings-and-tasks-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9" rel="noopener">Microsoft Support: Essential network settings and tasks in Windows</a></li><li><a href="https://support.apple.com/guide/mac-help/mchlp1545/mac" rel="noopener">Apple Support: Renew the DHCP lease on Mac</a></li><li><a href="https://www.torproject.org/" rel="noopener">The Tor Project</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8805" rel="noopener">RFC 8805: A Format for Self-Published IP Geolocation Feeds (IETF)</a></li><li><a href="https://coveryourtracks.eff.org/" rel="noopener">EFF: Cover Your Tracks (fingerprinting test)</a></li></ul>
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
<p>Mobile carriers and some home providers use <a href="/learn/what-is-cgnat"><strong>carrier-grade NAT</strong></a>, sharing one public address between many customers. Your visible address can change often, and may even appear to be in a different city. It also makes hosting at home hard, because inbound connections cannot reach you. Read <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a> for the background.</p>

<h2>What about IPv6?</h2>
<p>With IPv6, your provider typically delegates a prefix to your router, and devices create their own addresses inside it. Devices also rotate temporary addresses for privacy, so the address a website sees can change within a day even though the prefix does not. More in <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a>.</p>

<h2>Do I need a static IP?</h2>
<p>Only if you host a server, need remote access to your home, or must be allow-listed by a service. Before paying for one, consider <strong>dynamic DNS</strong>. It gives you a stable name such as <code>myhome.example.net</code> that updates automatically whenever your address changes.</p>

<h2>How to track your address</h2>
<p>Check our <a href="/">IP checker</a> any time, or use the <a href="/lookup">lookup tool</a> to see which provider and region currently own it. If you want a new one on purpose, see <a href="/learn/how-to-change-your-ip-address">how to change your IP address</a>.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc2131" rel="noopener">RFC 2131: Dynamic Host Configuration Protocol (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc1035" rel="noopener">RFC 1035: Domain Names: Implementation and Specification (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc3596" rel="noopener">RFC 3596: DNS Extensions to Support IP Version 6 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc7208" rel="noopener">RFC 7208: Sender Policy Framework (SPF) (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8445" rel="noopener">RFC 8445: Interactive Connectivity Establishment (ICE) (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8489" rel="noopener">RFC 8489: Session Traversal Utilities for NAT (STUN) (IETF)</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API" rel="noopener">MDN: WebRTC API</a></li></ul>
`,

  "what-is-port-forwarding": `
<p>Port forwarding tells your router to send incoming internet traffic on a specific port to a specific device inside your home network. It is what makes game servers, security cameras, Plex and remote desktop reachable from outside.</p>

<h2>Why is port forwarding needed?</h2>
<p>Your home has one public address shared by every device, and your router uses <a href="/learn/what-is-nat">NAT</a> to keep the devices private. A request arriving from the internet has no idea which device it is for, so the router drops it. A port forwarding rule adds an exception: &ldquo;traffic arriving on port 25565 goes to the gaming PC at 192.168.1.50&rdquo;. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a> for the background.</p>

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
<p>For the full table, see our <a href="/learn/common-ports-list">common ports list</a>.</p>

<h2>Why does a port still show as closed?</h2>
<ul>
<li><strong>The service is not listening</strong> on that port or is bound only to localhost.</li>
<li><strong>A firewall blocks it</strong> on the device or the router.</li>
<li><strong>Double NAT.</strong> A second router, such as your provider's modem behind your own router, needs its own forwarding rule or bridge mode.</li>
<li><strong>Carrier-grade NAT.</strong> Our <a href="/learn/what-is-cgnat">CGNAT guide</a> explains it in full. If your router's WAN address differs from the address on our <a href="/">IP checker</a>, your provider shares one address between customers and inbound connections will never arrive. Ask for a public address, or use a tunnel. See <a href="/learn/why-does-my-ip-address-change">why your IP address changes</a>.</li>
<li><strong>UDP.</strong> Our checker tests TCP only, because UDP has no handshake to confirm.</li>
</ul>

<h2>Staying safe</h2>
<p>Every open port is an entrance. Forward only what you need, keep the software behind it updated, use strong passwords or keys, and close ports you no longer use. For private services such as a home server or camera, a VPN or a tunnel service is safer than exposing a port at all.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc3022" rel="noopener">RFC 3022: Traditional IP Network Address Translator (IETF)</a></li><li><a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" rel="noopener">IANA Service Name and Transport Protocol Port Number Registry</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc4632" rel="noopener">RFC 4632: Classless Inter-domain Routing (CIDR) (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li></ul>
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
<p>Run our <a href="/speed-test">speed test</a> to check latency and jitter. A high round-trip time points to a connection problem, not DNS. Our guide to <a href="/learn/why-is-my-internet-so-slow">why your internet is slow</a> works through the other causes in order.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8484" rel="noopener">RFC 8484: DNS Queries over HTTPS (DoH) (IETF)</a></li><li><a href="https://developers.cloudflare.com/1.1.1.1/" rel="noopener">Cloudflare: 1.1.1.1 DNS resolver documentation</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig" rel="noopener">Microsoft: ipconfig command reference</a></li></ul>
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
<p>Not sure which port a service uses? Our <a href="/learn/common-ports-list">common ports list</a> has the standard numbers.</p>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" rel="noopener">IANA Service Name and Transport Protocol Port Number Registry</a></li><li><a href="https://nmap.org/book/man.html" rel="noopener">Nmap reference guide</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://support.microsoft.com/en-us/windows/essential-network-settings-and-tasks-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9" rel="noopener">Microsoft: Essential network settings and tasks in Windows</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netsh-interface" rel="noopener">Microsoft: netsh interface command reference</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig" rel="noopener">Microsoft: ipconfig command reference</a></li></ul>
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
<p>Run <code>arp -a</code> in a terminal to list devices your computer has recently talked to, or use a network scanner app. Match the printer's <a href="/learn/what-is-a-mac-address">MAC address</a>, which is printed on a label on the device.</p>

<h2>Make the address stay put</h2>
<p>If the address changes and your printer keeps disconnecting, give it a fixed one. Either reserve it in the router's DHCP settings, which is the best approach, or set a static address on the printer. Choose an address inside your network and outside the DHCP pool. Our <a href="/subnet">subnet calculator</a> shows the usable range.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/arp" rel="noopener">Microsoft: arp command reference</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc5782" rel="noopener">RFC 5782: DNS Blacklists and Whitelists (IETF)</a></li><li><a href="https://www.spamhaus.org/ip-reputation/" rel="noopener">Spamhaus: IP reputation</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.torproject.org/" rel="noopener">The Tor Project</a></li><li><a href="https://support.apple.com/en-us/102602" rel="noopener">Apple: About iCloud Private Relay</a></li></ul>
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
<p>Your router's address, also called the <a href="/learn/what-is-my-default-gateway">default gateway</a>, is different again. We cover it step by step in <a href="/learn/find-router-ip-address">how to find your router's IP address</a>. To find a printer's address, see <a href="/learn/find-printer-ip-address">how to find a printer's IP address</a>.</p>

<h2>Find the IP address of a website</h2>
<p>Type the domain into our <a href="/lookup">IP lookup</a> and it returns the address of the server behind the site, with its location and owner. For all of a domain's records, use the <a href="/dns">DNS lookup</a>.</p>

<h2>Why you might see two addresses</h2>
<p>Your public address may show as IPv4 (like <code>203.0.113.7</code>) or IPv6 (like <code>2001:db8::1</code>), or both. Our home page shows each on its own line. Read <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a> to understand the difference, and <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a> for why your phone and your public address never match. If two checkers disagree, <a href="/learn/what-is-my-ip-address">what is my IP address</a> walks through the usual reasons.</p>

<h2>Is it safe to share my IP address?</h2>
<p>Generally yes. An address shows roughly where you are and who your provider is, not your name or home address. See <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address?</a></p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig" rel="noopener">Microsoft: ipconfig command reference</a></li></ul>
`,

  "find-router-ip-address": `
<p>Your router's IP address, also known as the <a href="/learn/what-is-my-default-gateway">default gateway</a>, is the address you type into a browser to open the router's settings page. You need it to change the Wi-Fi password, set up port forwarding or fix a connection problem. Here is how to find it on every device.</p>

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
<li>To check how your connection performs, run the <a href="/speed-test">speed test</a> or the <a href="/ping">ping test</a>.</li>
</ul>

<h2>Sources and further reading</h2>
<ul><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig" rel="noopener">Microsoft: ipconfig command reference</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li></ul>
`,

  "what-is-my-isp": `
<p>Your ISP, or internet service provider, is the company that connects you to the internet. Most of the time you already know who it is, because they send the bill. But sometimes you need to confirm it: after moving, when a VPN is on, or when a support agent asks. Here is how to find it in seconds. Your ISP is also one line of every <a href="/learn/my-ip">my IP result</a>, next to your ASN.</p>

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
<p>Test your connection with the <a href="/speed-test">speed test</a> and the <a href="/ping">ping test</a>. If your results are far below what you pay for, repeat them on a wired connection before calling support.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc9083" rel="noopener">RFC 9083: JSON Responses for the Registration Data Access Protocol (RDAP) (IETF)</a></li><li><a href="https://search.arin.net/" rel="noopener">ARIN: Search Whois and RDAP</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8445" rel="noopener">RFC 8445: Interactive Connectivity Establishment (ICE) (IETF)</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API" rel="noopener">MDN: WebRTC API</a></li></ul>
`,

  "what-is-ping": `
<p>Ping is the time, in milliseconds (ms), that it takes for a small message to travel from your device to another computer and back. You will see the word in games, video calls and in the results of every speed test. A lower number means a faster, more responsive connection.</p>

<h2>What does ping mean in a speed test?</h2>
<p>In a speed test, ping, also called latency, is separate from download and upload speed. Speed is how much data you can move per second. Ping is how quickly the first byte gets there and back. A connection can be very fast and still feel laggy if its ping is high. For the download and upload side, see <a href="/learn/what-is-a-good-internet-speed">what counts as a good internet speed</a>.</p>

<h2>What is a good ping?</h2>
<div class="tw"><table><tbody>
<tr><th>Ping</th><th>What it means</th></tr>
<tr><td>Under 30 ms</td><td>Excellent. Great for any online game.</td></tr>
<tr><td>30 to 60 ms</td><td>Good. Fine for gaming, calls and streaming.</td></tr>
<tr><td>60 to 100 ms</td><td>Fair. Fine for browsing, you may notice lag in fast games.</td></tr>
<tr><td>100 to 150 ms</td><td>Slow. Lag is noticeable.</td></tr>
<tr><td>Over 150 ms</td><td>Poor. Games feel delayed and calls can stutter.</td></tr>
</tbody></table></div>
<p>These are rough guides. Two related numbers matter as much. <a href="/learn/what-is-jitter"><strong>Jitter</strong></a> is how much your ping changes from moment to moment, and <strong>packet loss</strong> is the share of messages that never arrive. High jitter or any packet loss causes stutter even when the average ping is low. Our guide to <a href="/learn/what-is-packet-loss">packet loss</a> shows how to test for it and where it comes from.</p>

<h2>How to test your ping</h2>
<ul>
<li><strong>Online:</strong> run our <a href="/ping">ping test</a>. It sends 25 quick checks to the nearest Cloudflare server and reports your average, best, worst, jitter and packet loss.</li>
<li><strong>Command line:</strong> open Command Prompt or Terminal and run <code>ping 8.8.8.8</code>. On Windows add <code>-t</code> to keep it running, and on macOS and Linux press Ctrl+C to stop. The <code>time=</code> value is your ping in milliseconds.</li>
<li><strong>Full picture:</strong> the <a href="/speed-test">speed test</a> also reports latency and jitter alongside download and upload.</li>
</ul>

<h2>What affects your ping?</h2>
<ul>
<li><strong>Distance.</strong> The farther the server, the higher the ping, because signals take time to travel.</li>
<li><strong>Wi-Fi.</strong> Weak signal, interference and busy channels add delay and jitter.</li>
<li><strong>Other traffic.</strong> Uploads, streams and downloads on your network can make ping spike. This is called <a href="/learn/what-is-bufferbloat">bufferbloat</a>.</li>
<li><strong>Your provider and its routing.</strong> Congested networks and long routes add delay.</li>
<li><strong>A VPN.</strong> It adds a detour, so ping is usually higher with one on.</li>
</ul>

<h2>How to lower your ping</h2>
<p>The biggest wins are using a cable instead of Wi-Fi, pausing large downloads while you play, and choosing a game server close to you. Our full guide walks through each fix and the popular advice that does nothing: <a href="/learn/how-to-lower-ping">how to lower your ping</a>.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc792" rel="noopener">RFC 792: Internet Control Message Protocol (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc4443" rel="noopener">RFC 4443: ICMPv6 for the Internet Protocol Version 6 Specification (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig" rel="noopener">Microsoft: ipconfig command reference</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1034" rel="noopener">RFC 1034: Domain Names: Concepts and Facilities (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc1034" rel="noopener">RFC 1034: Domain Names: Concepts and Facilities (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8484" rel="noopener">RFC 8484: DNS Queries over HTTPS (DoH) (IETF)</a></li><li><a href="https://developers.cloudflare.com/1.1.1.1/" rel="noopener">Cloudflare: 1.1.1.1 DNS resolver documentation</a></li></ul>
`,

  "what-is-a-mac-address": `
<p>A MAC address is a hardware identifier burned into every network adapter: your laptop's Wi-Fi chip, your phone, your TV, your console. It identifies a device on a local network, while an IP address identifies it on the wider internet. The two are easy to confuse, so here is the difference and how to find yours.</p>

<h2>What does a MAC address look like?</h2>
<p>It is 48 bits, written as six pairs of hexadecimal digits, for example <code>00:1A:2B:3C:4D:5E</code>. Some systems use dashes or dots instead of colons. The first three pairs are the <strong>OUI</strong>, which identifies the manufacturer, so a MAC address can reveal whether a device is an Apple, Samsung or Intel product. Paste any address into our <a href="/mac-lookup">MAC address lookup</a> to see its manufacturer. The last three pairs identify the individual adapter.</p>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://standards.ieee.org/products-programs/regauth/" rel="noopener">IEEE Registration Authority (MAC address OUIs)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc7042" rel="noopener">RFC 7042: IANA Considerations and IETF Protocol and Documentation Usage for IEEE 802 Parameters (IETF)</a></li></ul>
`,

  "what-is-my-default-gateway": `
<p>Your <strong>default gateway</strong> is the device that forwards traffic from your network to everywhere else. On a home network it is almost always your router. When your computer wants to reach a server it cannot see locally, it hands the packet to the gateway, and the gateway sends it on.</p>
<p>In brief: your default gateway address is your router's private address on your own network, for example 192.168.1.1. Windows lists it as Default Gateway, Macs and iPhones call it Router, and Android calls it Gateway. It is not your public IP address, and it is not your provider's gateway, which sits one step further out.</p>

<h2>Why is it called a default gateway?</h2>
<p>Your device keeps a small routing table. Addresses on your own network it delivers directly. For anything else there is one catch-all entry, the <em>default</em> route, pointing at the gateway. Without it, your device can reach your printer but not the internet. The host requirements in <a href="https://www.rfc-editor.org/rfc/rfc1122" rel="noopener">RFC 1122</a> describe this choice of a first-hop router for any destination that is not on the local network.</p>
<p>Your device usually learns the gateway automatically. When it joins the network, the router's DHCP server hands out an address, a subnet mask and a Router option that names the gateway (<a href="https://www.rfc-editor.org/rfc/rfc2132" rel="noopener">RFC 2132</a>, option 3).</p>

<h2>Common default gateway addresses</h2>
<p>There is no single standard gateway address. The router maker or your provider picks it, and it is always a private address from the ranges set aside in <a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918</a>: 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255 and 192.168.0.0 to 192.168.255.255. These are defaults their makers publish:</p>
<div class="tw"><table><tbody>
<tr><th>Equipment</th><th>Published default address</th><th>Also reachable as</th></tr>
<tr><td>TP-Link routers</td><td>192.168.0.1 (some models 192.168.1.1)</td><td>tplinkwifi.net</td></tr>
<tr><td>Netgear routers</td><td>192.168.1.1</td><td>routerlogin.net</td></tr>
<tr><td>Linksys routers</td><td>192.168.1.1</td><td>myrouter.local</td></tr>
<tr><td>Xfinity gateways</td><td>10.0.0.1</td><td>Xfinity Admin Tool at that address</td></tr>
<tr><td>Netgear cable modems</td><td>192.168.100.1</td><td>Modem status page only</td></tr>
</tbody></table></div>
<p>If you changed the router's network range yourself, or your provider's engineer did, none of these will apply. Look the address up on a device instead.</p>

<h2>How to find your default gateway address</h2>
<ul>
<li><strong>Windows:</strong> run <code>ipconfig</code> in Command Prompt and read the Default Gateway line under your active adapter. <code>route print</code> shows the full routing table, where the gateway sits on the line whose network destination is 0.0.0.0. In PowerShell, <code>Get-NetRoute -DestinationPrefix 0.0.0.0/0</code> shows it as the NextHop.</li>
<li><strong>macOS:</strong> System Settings, then Network, then Details, then TCP/IP, and read the Router field. In Terminal, <code>route -n get default</code> prints it on the gateway line.</li>
<li><strong>Linux:</strong> run <code>ip route show default</code>. The address after <code>via</code> is the gateway.</li>
<li><strong>iPhone:</strong> Settings, then Wi-Fi, tap the (i) next to your network, and read Router.</li>
<li><strong>Android:</strong> Settings, then Wi-Fi, tap your network and read Gateway. Some phones hide it under an Advanced or View more section.</li>
</ul>
<p>Our step-by-step guide to each menu is <a href="/learn/find-router-ip-address">how to find your router's IP address</a>, since on a home network the two are the same number. For your device's own address, see <a href="/learn/how-to-find-your-ip-address">how to find your IP address on any device</a>.</p>

<h3>What these commands showed on a real network</h3>
<p>We ran the macOS commands on 29 October 2026 on a Mac with a wired connection to an office network. <code>route -n get default</code> returned the gateway 172.20.64.1 on interface en6. <code>ipconfig getoption en6 router</code>, which reads the Router option from the DHCP lease, returned the same address, and <code>ipconfig getoption en6 subnet_mask</code> returned 255.255.252.0. Three pings to the gateway came back with an average of 2.3 ms and no loss.</p>

<h2>Can you work out the gateway from an IP address?</h2>
<p>Not with certainty. Your device receives the gateway as a setting, and the address alone does not reveal it. What the address and subnet mask do give you is the range the gateway must sit in, and by convention many networks use the first usable address of that range, and some use the last.</p>
<p>For example, in the test above the mask 255.255.252.0 is a /22, so the network ran from 172.20.64.0 to 172.20.67.255 and the usable hosts from 172.20.64.1 to 172.20.67.254. The gateway was 172.20.64.1, the first usable address. Our <a href="/subnet">subnet calculator</a> works out that range for any address and mask, and <a href="/learn/cidr-subnet-mask-explained">CIDR and subnet masks explained</a> covers the arithmetic. Treat the result as a guess to test with <code>ping</code>, then confirm it with one of the commands above.</p>

<h2>What is my ISP gateway address?</h2>
<p>Your <strong>ISP gateway</strong> is the provider's router on the far side of your own router. Your devices never talk to it directly. Your router uses it as the default gateway for its own internet link, the same way your laptop uses your router.</p>
<p>There are two ways to see it:</p>
<ul>
<li><strong>Router status page.</strong> Log in to the router and open the Internet, WAN or Status page. The gateway listed there, next to the router's WAN address, is normally the provider's.</li>
<li><strong>Traceroute.</strong> Run <code>tracert /d 1.1.1.1</code> on Windows or <code>traceroute -n 1.1.1.1</code> on a Mac or Linux. Hop 1 is your own gateway. The next hop is usually the provider. The /d and -n options skip name lookups so the trace finishes faster (<a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert" rel="noopener">Microsoft tracert reference</a>).</li>
</ul>
<p>On larger networks the second hop can still be yours. In our office trace, hops 2 and 3 were also private addresses (192.168.40.2 and 172.16.2.1), and the first public address appeared at hop 4. If your router's WAN address falls between 100.64.0.0 and 100.127.255.255, your provider uses carrier-grade NAT from the shared range in <a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598</a>, and the provider's gateway is inside that range too. Our guide to <a href="/learn/what-is-cgnat">CGNAT</a> explains what that changes.</p>

<h2>Why does my default gateway start with fe80?</h2>
<p>That is the IPv6 gateway. A <strong>link-local address</strong> is an IPv6 address that only works on your own network segment. Link-local addresses start with fe80, and routers must not forward packets sent to them to other links (<a href="https://www.rfc-editor.org/rfc/rfc4291" rel="noopener">RFC 4291</a>, section 2.5.6; <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-119.pdf" rel="noopener">NIST SP 800-119</a>). IPv6 routers announce themselves in Router Advertisements sent from their link-local address, so your device records that address as its IPv6 default gateway (<a href="https://www.rfc-editor.org/rfc/rfc4861" rel="noopener">RFC 4861</a>). Windows can list it in ipconfig next to the IPv4 gateway, and on a home network both point at the same router. On our test Mac, <code>netstat -nr -f inet6</code> also listed fe80 default routes on its utun tunnel interfaces. Our guide to <a href="/learn/what-is-ipv6">IPv6</a> explains link-local addresses.</p>

<h2>Gateway, subnet mask and DNS: how they fit together</h2>
<div class="tw"><table><tbody>
<tr><th>Setting</th><th>What it decides</th><th>Example</th></tr>
<tr><td>IP address</td><td>Who this device is on the network</td><td>192.168.1.42</td></tr>
<tr><td>Subnet mask</td><td>Which addresses count as local</td><td>255.255.255.0</td></tr>
<tr><td>Default gateway</td><td>Where everything else is sent</td><td>192.168.1.1</td></tr>
<tr><td>DNS server</td><td>Who turns names into addresses</td><td>1.1.1.1</td></tr>
</tbody></table></div>
<p>The gateway must sit inside the range your subnet mask defines, or your device cannot reach it.</p>

<h2>Your gateway is not your public IP address</h2>
<p>The gateway is a private address that only exists inside your network. The address the internet sees belongs to the router's outside interface, and you can check it on our <a href="/">IP checker</a>. If the WAN address on your router's status page differs from the one we show, your router may sit behind another router, or your provider may use carrier-grade NAT, which blocks unsolicited inbound connections. See <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>Troubleshooting</h2>
<ul>
<li><strong>No gateway listed.</strong> Your device did not get a DHCP lease, or a manual configuration left the gateway blank. Reconnect to the network or restart the router.</li>
<li><strong>Gateway shows 0.0.0.0.</strong> Same cause: no working configuration was received.</li>
<li><strong>An address starting 169.254.</strong> The device gave itself a fallback address because DHCP failed entirely. See <a href="/learn/what-is-a-169-254-ip-address">what a 169.254 address means</a>.</li>
<li><strong>Gateway does not answer a ping.</strong> Check the cable or Wi-Fi link first. Some routers ignore pings, so also try opening the gateway address in a browser.</li>
<li><strong>Gateway responds but nothing loads.</strong> Local networking is fine and the fault is upstream, either DNS or your provider. Try our <a href="/ping">ping test</a>, or read <a href="/learn/what-is-a-dns-server">what is a DNS server</a>.</li>
<li><strong>Two gateways.</strong> A second router behind the first creates double NAT, which breaks port forwarding until one is put into bridge mode. <a href="/learn/what-is-nat">What is NAT</a> explains why.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>Is the default gateway the same as my router's IP address?</h3>
<p>On a home network, yes. The router's LAN address is the gateway every device uses. On office and campus networks the gateway may be a separate router or firewall that you cannot log in to.</p>
<h3>Can I change my default gateway?</h3>
<p>Yes, by setting a manual (static) IP configuration on the device, or for every device at once in the router's DHCP settings. Enter a wrong address and that device loses internet access while local devices still work, so note the old value first.</p>
<h3>Why does my computer show two default gateways?</h3>
<p>Usually one is IPv4 and one is IPv6, and both belong to the same router. A VPN or a second network adapter, such as Wi-Fi and Ethernet at once, can also add a gateway.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc1122" rel="noopener">RFC 1122: Requirements for Internet Hosts: Communication Layers (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc2132" rel="noopener">RFC 2132: DHCP Options and BOOTP Vendor Extensions (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc4291" rel="noopener">RFC 4291: IP Version 6 Addressing Architecture (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc4861" rel="noopener">RFC 4861: Neighbor Discovery for IP version 6 (IETF)</a></li><li><a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-119.pdf" rel="noopener">NIST SP 800-119: Guidelines for the Secure Deployment of IPv6</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig" rel="noopener">Microsoft: ipconfig command reference</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/route_ws2008" rel="noopener">Microsoft: route command reference</a></li><li><a href="https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-netroute" rel="noopener">Microsoft: Get-NetRoute cmdlet reference</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert" rel="noopener">Microsoft: tracert command reference</a></li><li><a href="https://support.apple.com/guide/mac-help/mh141292/mac" rel="noopener">Apple: Use TCP/IP settings on Mac</a></li><li><a href="https://man7.org/linux/man-pages/man8/ip-route.8.html" rel="noopener">ip-route(8) Linux manual page</a></li><li><a href="https://www.tp-link.com/us/support/faq/87/" rel="noopener">TP-Link: How to log in to the web-based interface of a TP-Link router</a></li><li><a href="https://kb.netgear.com/980/How-do-I-log-in-to-my-NETGEAR-router" rel="noopener">Netgear: How do I log in to my NETGEAR router?</a></li><li><a href="https://kb.netgear.com/000059644/How-do-I-log-in-to-my-NETGEAR-cable-modem" rel="noopener">Netgear: How do I log in to my NETGEAR cable modem?</a></li><li><a href="https://support.linksys.com/kb/article/73" rel="noopener">Linksys: Accessing the router's web-based setup page</a></li><li><a href="https://www.xfinity.com/support/articles/wifi-change-admin-tool" rel="noopener">Xfinity: Change WiFi settings with the Admin Tool</a></li></ul>
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

<h2>Is my IP address static or dynamic?</h2>
<p>If you are on a home broadband or mobile connection and never asked for a static address, yours is almost certainly dynamic. Providers charge for static addresses, so you would remember paying for one. If you want to confirm it rather than assume, there are four checks, roughly in order of how conclusive they are.</p>
<ul>
<li><strong>Look at your router's WAN settings.</strong> Sign in to the router and open the internet or WAN page. A connection type of DHCP, Dynamic IP or PPPoE means dynamic. Only a page where someone typed in a fixed address, subnet mask and gateway means static.</li>
<li><strong>Watch whether it changes.</strong> Note your address on the <a href="/">what is my IP</a> page, restart the router, and check again. A new address proves it is dynamic. The same address proves nothing on its own, because many providers hand back the same lease for weeks.</li>
<li><strong>Read the reverse DNS name.</strong> Run your address through the <a href="/reverse-dns">reverse DNS lookup</a>. Names containing words like <code>dynamic</code>, <code>dyn</code>, <code>pool</code> or <code>dhcp</code> are your provider labelling the address as dynamic. A blank result tells you nothing either way.</li>
<li><strong>Check your contract or ask.</strong> A static IP appears as a line item on the bill or in the plan name. Your provider's support line can answer in one sentence.</li>
</ul>
<p>One complication: some providers put many customers behind a single shared address, called carrier-grade NAT. In that case the public address you see is not yours at all, static or otherwise, and opening ports from outside will not work. The <a href="/learn/why-does-my-ip-address-change">guide to why your IP changes</a> covers how to spot it.</p>

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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc2131" rel="noopener">RFC 2131: Dynamic Host Configuration Protocol (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space (IETF)</a></li></ul>
`,

  "how-to-lower-ping": `
<p>High ping is the delay between pressing a key and the game server reacting. It shows up as rubber-banding, shots that do not register and laggy voice chat. Download speed barely affects it, so paying for a faster plan often changes nothing. These are the fixes that actually work, roughly in order of impact.</p>
<p>Measure first so you know whether anything helped. Run our <a href="/ping">ping test</a> and note your average and your jitter before you change anything.</p>

<h2>1. Use a cable instead of Wi-Fi</h2>
<p>This is the single biggest win for most people. Wi-Fi adds delay and, worse, makes it inconsistent. An Ethernet cable typically removes 5 to 30 ms and nearly all of the jitter. If you cannot run a cable, use the 5 GHz band, sit closer to the router, and avoid powerline adapters where you can.</p>

<h2>2. Pick a server close to you</h2>
<p>Distance sets a floor your connection cannot beat, because signals take time to travel. A server on another continent cannot give you a low ping no matter what you buy. Most games let you choose a region or show the ping per server, so pick the nearest one with a healthy population.</p>

<h2>3. Stop other traffic on your network</h2>
<p>A single large upload, cloud backup or 4K stream can add hundreds of milliseconds to everything else. This is called <a href="/learn/what-is-bufferbloat">bufferbloat</a>, and it is why ping is fine when idle and terrible while someone downloads. Pause big transfers while you play, and if your router supports Smart Queue Management, SQM or fq_codel, turn it on. It is the most effective router setting for gaming.</p>

<h2>4. Check your jitter and packet loss, not just ping</h2>
<p>A steady 60 ms feels better than a ping that jumps between 20 and 200 ms. Our <a href="/ping">ping test</a> reports jitter and packet loss alongside the average. Any <a href="/learn/what-is-packet-loss">packet loss</a> at all points at a physical problem: a bad cable, a failing router, weak Wi-Fi or a fault on your provider's line. Fix that before tuning anything else, and read <a href="/learn/what-is-ping">what is ping</a> for what the numbers mean.</p>

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
<p>If your ping is high on a wired connection with nothing else running, and the nearest servers are still slow, the problem is upstream. Run a traceroute (<code>tracert example.com</code> on Windows, <code>traceroute example.com</code> on macOS and Linux) to see where the delay appears. Record results from our <a href="/ping">ping test</a> and <a href="/speed-test">speed test</a> at different times of day, then contact support with that evidence. Congestion in the evening is a common and fixable complaint.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc792" rel="noopener">RFC 792: Internet Control Message Protocol (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc9110" rel="noopener">RFC 9110: HTTP Semantics (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1928" rel="noopener">RFC 1928: SOCKS Protocol Version 5 (IETF)</a></li><li><a href="https://curl.se/docs/manpage.html" rel="noopener">curl manual</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc9110" rel="noopener">RFC 9110: HTTP Semantics (IETF)</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/407" rel="noopener">MDN: 407 Proxy Authentication Required</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc1928" rel="noopener">RFC 1928: SOCKS Protocol Version 5 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1929" rel="noopener">RFC 1929: Username/Password Authentication for SOCKS V5 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc9110" rel="noopener">RFC 9110: HTTP Semantics (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://search.arin.net/" rel="noopener">ARIN: Search Whois and RDAP</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc9083" rel="noopener">RFC 9083: JSON Responses for the Registration Data Access Protocol (RDAP) (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc1928" rel="noopener">RFC 1928: SOCKS Protocol Version 5 (IETF)</a></li></ul>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc7239" rel="noopener">RFC 7239: Forwarded HTTP Extension (IETF)</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-For" rel="noopener">MDN: X-Forwarded-For header</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc9110" rel="noopener">RFC 9110: HTTP Semantics (IETF)</a></li></ul>
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
<li><strong>Your own connection.</strong> Check your baseline with the <a href="/speed-test">speed test</a> and the <a href="/ping">ping test</a>, so you do not blame the proxy for a slow link.</li>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://everything.curl.dev/usingcurl/verbose/writeout.html" rel="noopener">Everything curl: write-out timing variables</a></li><li><a href="https://curl.se/docs/manpage.html" rel="noopener">curl manual</a></li></ul>
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
<p>In Command Prompt (CMD) without curl, ask OpenDNS over DNS instead. The address on the last &ldquo;Address&rdquo; line is your public IPv4 address:</p>
<pre><code>nslookup -type=A myip.opendns.com 208.67.222.222</code></pre>
<p>Note that <code>ipconfig</code> does not show your public IP. It lists the private address your router gave your computer, such as 192.168.1.20.</p>

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
<p>No key or sign-up is needed. Please keep requests reasonable: checking every few minutes is fine, but calling it in a tight loop may be rate limited. ipcomet does not store or log the addresses it sees, as the <a href="/privacy">privacy page</a> explains. The <a href="/developers">free IP API page</a> lists every endpoint with its exact rate limit. Try it in the browser first with the <a href="/">what is my IP address</a> page.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://curl.se/docs/manpage.html" rel="noopener">curl manual</a></li><li><a href="https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-restmethod" rel="noopener">Microsoft: Invoke-RestMethod</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" rel="noopener">MDN: Fetch API</a></li></ul>
`,
  "how-to-choose-an-ip-checker": `
<p>Every "what is my IP" site shows you the same number. The address your connection presents to the internet is a fact, not an opinion, and no tool can show you a different one. So if the headline answer is identical everywhere, what actually separates these sites, and how should you pick one?</p>

<h2>What does an IP checker actually tell you?</h2>
<p>An IP checker reports your public IP address and what can be inferred from it: an approximate location, the network that owns the address, and sometimes whether that address looks like a VPN or proxy. Everything past the address itself is inference, drawn from registration records and routing data, and the quality of those inferences is one of the few places tools genuinely differ.</p>

<h2>The things worth comparing</h2>
<p>Five questions separate one IP checker from another. The address it reports is not one of them.</p>
<div class="tw"><table><tbody>
<tr><th>Question</th><th>Why it matters</th></tr>
<tr><td>Does it log your address?</td><td>You are handing a site the one identifier that ties your traffic together. Whether it keeps that is the single most consequential difference, and most sites do not say either way.</td></tr>
<tr><td>How much does it load?</td><td>A page whose only job is to print one number should not need dozens of requests. Weight is the difference between an instant answer and a three-second wait on mobile data.</td></tr>
<tr><td>Does it need an account?</td><td>Checking your own IP address is not a task that warrants a sign-up. Some API-first services gate useful results behind one.</td></tr>
<tr><td>Does it explain its guesses?</td><td>A city that is wrong by 200 km is normal. A tool that says so is more useful than one that presents the guess as fact.</td></tr>
<tr><td>What else is on hand?</td><td>The IP is usually the first question, not the last. Lookup, DNS, WHOIS, reputation and a speed test save you a second site.</td></tr>
</tbody></table></div>

<h2>How heavy are these pages, really?</h2>
<p>This is the one you can measure yourself, and the spread is wide. Loading <strong>whatismyipaddress.com</strong> in a browser on 14 October 2026 produced <strong>67 network requests</strong>: an interactive vector map pulling tiles and font ranges, Google Fonts, press logos and an embedded podcast player. It is a substantial site and the map is genuinely nice to look at, but it is a lot of fetching for one number.</p>
<p>For contrast, this page's own home page answers in about 40 KB of HTML with five requests and no third-party assets at all: no web fonts, no external stylesheets, no tracker loaded unless you accept the analytics banner.</p>
<p>Neither figure is a verdict. A map is worth requests if you want a map. The point is that "it shows my IP" tells you nothing about what a page costs you, and you can check it in your browser's network tab in about ten seconds.</p>

<h2>What about ads?</h2>
<p>This category has a reputation for being ad-choked that is now partly out of date. Checking the request list of the most popular site in the category, there was no advertising network present at all: no Google ad tags, no Taboola, no Outbrain. Larger IP sites tend to monetise through VPN affiliate recommendations rather than display advertising, which is less visually intrusive but worth knowing about when a site recommends a product to you.</p>
<p>Smaller and older tools are a mixed bag, and some free proxy and IP lists remain genuinely unpleasant. Judge the page in front of you rather than the category.</p>

<h2>Where does ipcomet sit?</h2>
<p>This is our own site, so treat what follows as disclosure rather than a recommendation. ipcomet shows no advertising, asks for no account, and our code does not store or log visitor IP addresses; analytics load only if you accept the banner, and the <a href="/privacy">privacy page</a> lists every third-party service each tool contacts. Pages are pre-rendered and served from the edge, which is where the low request count comes from.</p>
<p>What we do not have is the authority those larger sites have earned over a decade, or an interactive map. If you want to see your approximate position plotted, they do that better. If you want a fast answer and a set of <a href="/learn">tools</a> that explain their own limits, that is what this site is built for.</p>

<h2>How to check any of this for yourself</h2>
<ul>
<li><strong>Weight.</strong> Open the browser's developer tools, go to the Network tab, and reload. The request count and transferred size are at the bottom.</li>
<li><strong>Logging.</strong> Read the privacy policy and look for a specific statement about IP addresses. Vagueness is the answer.</li>
<li><strong>Accuracy.</strong> Compare the reported city against where you actually are, then read <a href="/learn/why-is-my-ip-location-wrong">why IP location is often wrong</a> before concluding a tool is broken.</li>
<li><strong>Consistency.</strong> Run two or three checkers. If they disagree on the address itself, something on your connection is changing it, which the <a href="/learn/get-public-ip-address-command-line">command-line method</a> will confirm.</li>
</ul>

<h2>The short answer</h2>
<p>Any competent IP checker gives you the right address. Pick on the things that vary: whether it keeps your address, how much it loads to tell you one number, and whether it is honest about the parts it is guessing at. Those are all checkable in a couple of minutes, and they matter more than which site ranks first.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://developer.chrome.com/docs/devtools/network" rel="noopener">Chrome DevTools: Network panel</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8805" rel="noopener">RFC 8805: A Format for Self-Published IP Geolocation Feeds (IETF)</a></li></ul>
`,
  "what-is-whois": `
<p>WHOIS is the public record of who registered a domain name. It has existed since the early 1980s, and for most of that time it did what the name suggests: you typed a domain, you got back a name, a postal address, a phone number and an email. That era is over. Look up almost any domain today and the registrant line reads something like "REDACTED FOR PRIVACY" or points at a proxy service in Arizona.</p>
<p>The record is still worth reading. You just have to know what survived.</p>

<h2>What can you still learn from a WHOIS record?</h2>
<p>Plenty, as it happens, none of it personal.</p>
<div class="tw"><table><tbody>
<tr><th>Field</th><th>Still visible?</th><th>What it tells you</th></tr>
<tr><td>Creation date</td><td>Yes</td><td>How old the domain is. A site claiming twenty years of experience on a domain registered in March is worth a second look.</td></tr>
<tr><td>Expiry date</td><td>Yes</td><td>Whether it is about to lapse, and roughly how far ahead the owner commits.</td></tr>
<tr><td>Registrar</td><td>Yes</td><td>Which company sold the domain. Useful if you need to file an abuse report.</td></tr>
<tr><td>Name servers</td><td>Yes</td><td>Who runs the DNS, which usually reveals the host or CDN.</td></tr>
<tr><td>Status codes</td><td>Yes</td><td>Whether the domain is locked, pending deletion or in a transfer.</td></tr>
<tr><td>Registrant name and address</td><td>Rarely</td><td>Hidden behind privacy services or redaction for most domains since 2018.</td></tr>
<tr><td>Registrant email</td><td>Rarely</td><td>Usually replaced by a forwarding address at the privacy provider.</td></tr>
</tbody></table></div>

<h2>Why did the personal details disappear?</h2>
<p>Two things happened at once. GDPR came into force in May 2018 and made publishing a European registrant's home address and phone number to the entire internet legally difficult, so registrars redacted those fields across the board rather than sort registrants by jurisdiction. Separately, privacy proxy services had already become a cheap or free add-on at most registrars, substituting the proxy's details for yours in the public record.</p>
<p>The data still exists. Registrars hold it, and law enforcement and trademark holders can request it through defined channels. It simply is not in the public lookup any more.</p>

<h2>WHOIS or RDAP?</h2>
<p>WHOIS returns a blob of text with no agreed format, which is why parsing it reliably was always miserable. RDAP, the Registration Data Access Protocol, returns the same information as structured JSON with proper authentication and internationalisation. ICANN required registries to support it from 2019 onward, and it is what most modern tools query under the hood, including the <a href="/whois">WHOIS lookup</a> on this site.</p>
<p>You will still see the service called WHOIS everywhere, because that is the name people search for. The plumbing underneath changed.</p>

<h2>How do you read a record without being misled?</h2>
<p>A few traps catch people out.</p>
<ul>
<li><strong>The registrar is not the owner.</strong> Seeing "GoDaddy" or "Namecheap" tells you where the domain was bought, nothing about who bought it.</li>
<li><strong>A privacy service is not suspicious on its own.</strong> It is the default at several registrars. Most people using it are avoiding spam, not hiding wrongdoing.</li>
<li><strong>Dates can be misleading after a transfer.</strong> Some registrars reset the updated date on transfer, and a few report a creation date from when the current registrar took over rather than the original registration.</li>
<li><strong>Country codes vary wildly.</strong> Each country registry sets its own disclosure rules. A .de domain shows almost nothing; some smaller registries still show everything.</li>
</ul>

<h2>What should you use it for?</h2>
<p>Checking how old a site is before trusting it. Finding the right abuse contact when something needs reporting. Confirming who hosts a domain when you are debugging DNS. Seeing whether a domain you want is about to expire.</p>
<p>What it will not do is tell you who is behind a scam site. That takes a request to the registrar with a legal basis, and it is not something a lookup page can shortcut. Anyone promising otherwise is selling you stale data.</p>

<h2>Checking a domain yourself</h2>
<p>Paste any domain into the <a href="/whois">WHOIS lookup</a> and you will get the registrar, the dates, the name servers and the status codes, drawn from RDAP where the registry supports it. If you want to know where the site is actually served from rather than who bought the name, the <a href="/lookup">IP lookup</a> and <a href="/dns">DNS lookup</a> answer that better, and <a href="/learn/dns-records-explained">the guide to DNS records</a> explains which record does what.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc3912" rel="noopener">RFC 3912: WHOIS Protocol Specification (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc9083" rel="noopener">RFC 9083: JSON Responses for the Registration Data Access Protocol (RDAP) (IETF)</a></li><li><a href="https://www.icann.org/rdap" rel="noopener">ICANN: Registration Data Access Protocol (RDAP)</a></li></ul>
`,
  "what-is-reverse-dns": `
<p>Forward DNS turns a name into an address. Reverse DNS does the opposite: give it 8.8.8.8 and it answers dns.google. The record that makes this work is called a PTR record, and it lives in a strange corner of DNS that most people never touch, right up until an email stops being delivered.</p>

<h2>What is a PTR record?</h2>
<p>A PTR record maps an IP address back to a hostname. It lives under a special zone, in-addr.arpa for IPv4 and ip6.arpa for IPv6, with the address written backwards. The reverse record for 8.8.8.8 is stored at 8.8.8.8.in-addr.arpa, which looks peculiar until you realise DNS reads right to left and the reversal makes delegation work the same way it does for ordinary names.</p>
<p>One important asymmetry: forward and reverse records are independent. Your A record can point example.com at an address while that address answers with a completely unrelated hostname, or with nothing at all. Nothing forces them to agree, which is exactly why mail servers check whether they do.</p>

<h2>Why does email depend on this?</h2>
<p>Receiving mail servers treat a missing or mismatched PTR record as a spam signal, and some reject on it outright. The logic is crude but effective: anyone who controls a block of addresses legitimately can set reverse DNS on it, and most spam comes from hijacked machines whose operators cannot.</p>
<p>The usual check is a forward-confirmed lookup. The server takes your sending IP, finds the PTR hostname, then looks that hostname back up and checks it resolves to the same address. Both directions have to agree. A PTR that points at mail.yourdomain.com is worthless if mail.yourdomain.com resolves somewhere else.</p>

<h2>Who controls your reverse DNS?</h2>
<p>Not you, usually, and this catches people out. PTR records are delegated by whoever owns the address block, which means your ISP, your hosting provider or your cloud platform. You can publish any forward record you like for a domain you own, but you cannot publish a PTR for an address you merely rent.</p>
<p>What you do instead depends on the provider. Most hosting and cloud panels have a field for it, sometimes labelled rDNS. Residential connections almost never let you change it, which is one of several reasons running a mail server from home goes badly.</p>

<h2>What does a residential reverse record look like?</h2>
<p>Something like this, varying by provider:</p>
<p><code>broadband-203-0-113-45.example-isp.net</code></p>
<p>Generic, auto-generated, with the address embedded in the name. Mail servers read that pattern as a consumer connection and weight it accordingly. A business connection or a hosted server usually gets either a blank record or one you can set yourself.</p>

<h2>When is reverse DNS useful beyond mail?</h2>
<ul>
<li><strong>Reading logs.</strong> A column of raw addresses tells you nothing; resolved hostnames tell you which are crawlers, which are cloud providers and which are home connections.</li>
<li><strong>Verifying a crawler.</strong> Google, Bing and others document a reverse-then-forward check as the correct way to confirm a bot is genuine rather than someone spoofing the user agent. The claimed name has to resolve back to the same address.</li>
<li><strong>Identifying infrastructure.</strong> Reverse names frequently leak the provider, the data centre and sometimes the service, which is fast reconnaissance when you are tracing a route or an abuse report.</li>
</ul>

<h2>Why does a lookup return nothing?</h2>
<p>An empty result is normal and is not an error. Most addresses on the internet have no PTR record, because nobody bothered to set one. You will also see a genuine absence where the provider delegated the block but never populated it, and occasionally a stale record left behind by a previous tenant of the address, which is its own small embarrassment when the old company name shows up in your logs.</p>
<p>If you are chasing a mail delivery problem and the lookup comes back empty, that is your answer, and the fix is a support ticket to whoever owns the address.</p>

<h2>Checking an address</h2>
<p>Put any IPv4 or IPv6 address into the <a href="/reverse-dns">reverse DNS lookup</a> to see its PTR record and hostname. If you want the other direction, the <a href="/dns">DNS lookup</a> resolves names to addresses, and the <a href="/lookup">IP lookup</a> adds the network owner and ASN, which is often the detail you actually wanted. For the wider picture of which record does what, <a href="/learn/dns-records-explained">DNS records explained</a> covers the set.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc1035" rel="noopener">RFC 1035: Domain Names: Implementation and Specification (IETF)</a></li><li><a href="https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests" rel="noopener">Google: Verifying Googlebot and other Google crawlers</a></li></ul>
`,
  "what-your-browser-reveals": `
<p>Your IP address is the identifier people worry about. It is also the one that is easiest to change, and far from the most revealing thing your browser hands over. Every request carries a small dossier about your device, and a few lines of JavaScript can extend that into something close to a unique signature.</p>
<p>None of this requires a cookie. Clearing your history does not touch it.</p>

<h2>What goes out before any JavaScript runs?</h2>
<p>HTTP headers, sent with every single request. The interesting ones are few.</p>
<div class="tw"><table><tbody>
<tr><th>Header</th><th>What it carries</th></tr>
<tr><td>User-Agent</td><td>Browser, version, operating system and often the rendering engine. Increasingly frozen or reduced by browsers, but still the first thing most sites read.</td></tr>
<tr><td>Accept-Language</td><td>The languages you configured, in order of preference. Frequently a strong hint about where you are and where you are from, which are not always the same place.</td></tr>
<tr><td>Accept-Encoding</td><td>Which compression formats you support. Dull on its own, mildly distinguishing in combination.</td></tr>
<tr><td>Referer</td><td>The page you came from, if the site that linked you allows it to be sent.</td></tr>
<tr><td>Sec-CH-UA family</td><td>Client hints: a newer, more granular replacement for the user agent that sites must explicitly request.</td></tr>
</tbody></table></div>
<p>You can read your own with the <a href="/headers">HTTP headers viewer</a>, which shows them exactly as our server received them.</p>

<h2>What does JavaScript add?</h2>
<p>A great deal more. Screen dimensions and colour depth. Time zone, which often contradicts a VPN exit and gives the game away. Installed fonts, inferred by measuring text. The number of CPU cores and a rough memory figure. Touch support. How your graphics hardware renders a test image, which varies enough between GPU and driver combinations to be useful on its own.</p>
<p>No single one identifies you. Together they frequently do, and that is the point of fingerprinting: not to learn your name, but to recognise the same visitor across sessions without storing anything on your machine.</p>

<h2>How unique is a fingerprint, really?</h2>
<p>It depends heavily on how ordinary your setup is. A current iPhone running Safari with default settings looks like an enormous number of other current iPhones, which is a genuine privacy advantage. A Linux desktop with an unusual screen size, a niche font set and three extensions installed may well be unique among everyone who visits a given site.</p>
<p>There is an uncomfortable twist here. Many anti-fingerprinting extensions make you more identifiable rather than less, because a browser reporting implausible or contradictory values stands out sharply against the crowd. Blending in beats hiding.</p>

<h2>What does a VPN actually hide?</h2>
<p>Your IP address, and the contents of your traffic from anyone on the local network. That is the list.</p>
<p>It does not change your user agent, your language preferences, your screen size, your fonts or your time zone. A connection claiming to originate in Frankfurt while the browser reports Asia/Kolkata and prefers Hindi is a contradiction that any site bothering to look will notice. Worse, your browser may leak the real address directly through WebRTC regardless of the tunnel, which is a specific enough problem to deserve <a href="/learn/webrtc-leak-explained">its own explanation</a> and <a href="/webrtc">its own test</a>.</p>

<h2>What can you reasonably do?</h2>
<ul>
<li><strong>Use a mainstream browser with defaults.</strong> Safari and Firefox both ship meaningful fingerprinting resistance now, and looking like everyone else is the strongest position available.</li>
<li><strong>Keep extensions few.</strong> Each one is a potential signal, and the combination is more distinguishing than any single addition.</li>
<li><strong>Match your time zone to your VPN exit</strong> if you are using one seriously. The mismatch is one of the easiest tells to spot.</li>
<li><strong>Use the browser's private window for genuinely separate sessions,</strong> remembering it isolates storage, not your fingerprint.</li>
<li><strong>Accept the tradeoff.</strong> Total resistance breaks a lot of the web. Most people want to be unremarkable rather than invisible.</li>
</ul>

<h2>Seeing your own</h2>
<p>The <a href="/browser">browser info</a> page shows what your browser exposes to any site you visit: user agent, screen, language, time zone and the rest, with nothing stored. Pair it with the <a href="/headers">HTTP headers viewer</a> for the pre-JavaScript layer, and the <a href="/webrtc">WebRTC leak test</a> if you are behind a VPN and want to know whether it is holding.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://coveryourtracks.eff.org/" rel="noopener">EFF: Cover Your Tracks (fingerprinting test)</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/User-Agent" rel="noopener">MDN: User-Agent header</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Client_hints" rel="noopener">MDN: HTTP Client Hints</a></li></ul>
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
<p>Our guide to <a href="/learn/my-ip">my IP results</a> goes through every field on the ipcomet result in more depth. In short:</p>
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

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8805" rel="noopener">RFC 8805: A Format for Self-Published IP Geolocation Feeds (IETF)</a></li><li><a href="https://check.torproject.org/torbulkexitlist" rel="noopener">Tor Project: bulk exit node list</a></li></ul>
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

<h2>Does your IP address change with location?</h2>
<p>Yes, usually. Your public IP address belongs to the network you are connected to, not to your device, so moving from home Wi-Fi to mobile data or to a café network gives you a different address and often a different estimated location. Staying on the same network while you travel, for example through a VPN, keeps the address and the location of that network.</p>

<h2>How accurate is IP geolocation?</h2>
<p>The country is usually right, the region is often right and the city is only sometimes right. The street or house is never something an IP address can tell. To see how much tools disagree, open the <a href="/">what is my IP address</a> page and the <a href="/lookup">IP lookup</a> and compare what they say.</p>

<h2>Can you fix it?</h2>
<p>Not directly, because the location is held by each data provider, not by you. If a website relies on it wrongly, you can contact your internet provider, who controls the registration of its address blocks, or contact the website. Some location data providers accept correction requests. Switching network, for example from mobile data to Wi-Fi, or reconnecting can also give you a different address with a different estimate.</p>

<h2>Why it matters, and why it is also reassuring</h2>
<p>A wrong location can show you the wrong language or prices, block a service limited to a region, or trigger a security warning. It also means websites cannot find your home from your IP address. Read <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by IP address</a> for what an IP address does reveal.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8805" rel="noopener">RFC 8805: A Format for Self-Published IP Geolocation Feeds (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space (IETF)</a></li></ul>
`,
  "what-is-bufferbloat": `
<p><strong>Bufferbloat</strong> is the extra delay that builds up when your router or modem holds too much data in a queue while the line is busy. Your speed can look fine and your idle ping can be low, yet a video call freezes the moment someone in the house starts a big download. The quickest way to see it is a <a href="/speed-test">speed test that measures latency under load</a>, which times round trips while the line is full and grades the rise.</p>

<h2>What causes bufferbloat?</h2>
<p>Bufferbloat happens when a device on the path has a large buffer and no rule for keeping it short. When more data arrives than the connection can send, the extra packets wait in that buffer. A bigger buffer avoids dropped packets, but every packet behind the queue now waits too, including the small ones from a game or a call that only needed a few milliseconds.</p>
<p>The queue almost always forms at the slowest point between you and the internet. On most home connections that is the upload side of the modem or router, because upload is usually much slower than download. That is why a cloud backup or a video upload often hurts calls more than a download does.</p>

<h2>How do you test for bufferbloat?</h2>
<p>Measure your latency with nothing running, then measure it again while the connection is saturated, and compare the two. Our <a href="/speed-test">speed test</a> does both automatically: it times 20 round trips on an idle line, then keeps timing round trips every quarter of a second while it downloads and uploads at full speed.</p>
<ol>
<li>Use a wired connection if you can, so Wi-Fi does not add its own delay to the result.</li>
<li>Pause other downloads, streams and backups on the network.</li>
<li>Run the test and look at three numbers: idle latency, latency while downloading and latency while uploading.</li>
<li>Read the bufferbloat grade. It is based on the larger of the two rises.</li>
</ol>
<p>A plain <a href="/ping">ping test</a> cannot show bufferbloat on its own, because it measures an idle line. The problem only appears when something fills the connection.</p>

<h2>What does the bufferbloat grade mean?</h2>
<p>The grade is the increase in latency under load, on the scale used by the Waveform bufferbloat test, which itself is a version of the old DSLReports rubric. It grades the rise only, not your speed and not your idle ping.</p>
<div class="tw"><table><tbody>
<tr><th>Grade</th><th>Latency increase under load</th><th>What you will notice</th></tr>
<tr><td>A+</td><td>Under 5 ms</td><td>Nothing. Calls and games stay smooth while the line is busy.</td></tr>
<tr><td>A</td><td>Under 30 ms</td><td>Nothing in normal use.</td></tr>
<tr><td>B</td><td>Under 60 ms</td><td>Occasional lag in fast games during big transfers.</td></tr>
<tr><td>C</td><td>Under 200 ms</td><td>Noticeable delay on calls and in games while someone downloads or uploads.</td></tr>
<tr><td>D</td><td>Under 400 ms</td><td>Calls stutter and games become hard to play during transfers.</td></tr>
<tr><td>F</td><td>400 ms or more</td><td>Real-time use breaks down whenever the line is busy.</td></tr>
</tbody></table></div>
<p>A result can differ between download and upload. On a typical cable or DSL line the upload grade is worse, and on a well-tuned fiber line both stay at A or A+.</p>

<h2>How do you fix bufferbloat?</h2>
<p>The fix is a router that manages its queue, a feature usually called Smart Queue Management (SQM). Instead of letting the buffer fill, SQM keeps queues short and gives each flow of traffic its own turn, so a call is not stuck behind a download. The two common algorithms are FQ-CoDel, described in RFC 8290, and CAKE, which is built into Linux and OpenWrt.</p>
<ol>
<li>Look for SQM in your router. Depending on the brand it may be called SQM, Smart Queue, Adaptive QoS or bandwidth control. Turn it on.</li>
<li>Set the speeds slightly below your real line speed. SQM only works when the router, not the modem, is the bottleneck. Run a speed test, then enter about 90% of the measured download and upload. Test again and adjust.</li>
<li>Retest. A working setup usually moves the grade to A or A+, at the cost of a few percent of peak speed.</li>
<li>If your router has no SQM, consider one that supports it, or a router that can run OpenWrt. Some providers also manage queues on their side, so it is worth asking yours.</li>
</ol>
<p>Older QoS features that only prioritize by device or by app help less, because the queue still fills. Buying a faster plan reduces how often you hit the limit, but the delay comes back the moment anything fills the new, bigger line.</p>

<h2>Bufferbloat or something else?</h2>
<p>High latency that stays high on an idle line is not bufferbloat. It usually means distance to the server, a weak Wi-Fi signal or a congested route. Our guides on <a href="/learn/what-is-ping">what ping is</a> and <a href="/learn/how-to-lower-ping">how to lower ping</a> cover those cases. If the latency only jumps when the line is full, it is bufferbloat, and SQM is the fix.</p>

<h2>Frequently asked questions</h2>
<h3>Is bufferbloat bad for gaming?</h3>
<p>Yes, but only while the line is busy. With a C grade or worse, a game feels fine until someone starts a download or a console update, then your ping jumps by tens or hundreds of milliseconds. Fixing it with SQM keeps gaming ping close to idle even during transfers.</p>
<h3>Does a faster internet plan fix bufferbloat?</h3>
<p>Not by itself. A faster plan fills up less often, but when it does fill, the same oversized buffer causes the same delay. The fix is queue management on the router.</p>
<h3>Can Wi-Fi cause bufferbloat?</h3>
<p>Yes. If your Wi-Fi is slower than your internet line, the queue forms in the Wi-Fi access point instead of the modem. Testing once on a cable and once on Wi-Fi shows which one is responsible.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8290" rel="noopener">RFC 8290: The Flow Queue CoDel Packet Scheduler and Active Queue Management Algorithm (IETF)</a></li><li><a href="https://www.waveform.com/tools/bufferbloat" rel="noopener">Waveform: Bufferbloat test and grading scale</a></li></ul>
`,
  "what-is-a-good-internet-speed": `
<p>A <strong>good internet speed</strong> for most homes in 2026 is at least 100 Mbps download and 20 Mbps upload, which is the minimum the US Federal Communications Commission now uses to define broadband. One person who browses and streams can manage with far less, while a family that streams 4K, games and backs up to the cloud will be happier at 300 Mbps or more. To see where you stand, run a <a href="/speed-test">speed test</a> and compare it with the tables below.</p>

<h2>What is a good download speed?</h2>
<p>Download speed decides how fast pages, videos and files arrive. It matters most for streaming and large downloads, and it adds up across everyone in the house using the connection at the same time.</p>
<div class="tw"><table><tbody>
<tr><th>Download speed</th><th>Good for</th></tr>
<tr><td>Under 25 Mbps</td><td>One person browsing and streaming HD. Struggles with several users.</td></tr>
<tr><td>25 to 100 Mbps</td><td>A small household with a couple of HD or 4K streams.</td></tr>
<tr><td>100 to 300 Mbps</td><td>Most homes: several 4K streams, gaming and video calls at once.</td></tr>
<tr><td>300 Mbps to 1 Gbps</td><td>Large households, heavy downloading, frequent large game updates.</td></tr>
<tr><td>Over 1 Gbps</td><td>Power users and home servers. Few devices can use this much alone.</td></tr>
</tbody></table></div>
<p>These bands are a rule of thumb built from the needs of each activity below. The quickest way to size your own plan is to add up what runs at the same time in your busiest hour, then leave some headroom.</p>

<h2>What is a good upload speed?</h2>
<p>Upload speed is how fast you send data: your side of a video call, photo and cloud backups, livestreams and large email attachments. Many plans, especially cable, have far less upload than download. The FCC broadband minimum is 20 Mbps upload. Around 20 to 50 Mbps is comfortable for a household that works from home, and creators who upload video or back up large files benefit from 100 Mbps or more, which fiber plans often provide.</p>

<h2>How much speed do common activities need?</h2>
<div class="tw"><table><tbody>
<tr><th>Activity</th><th>Speed needed</th><th>Source</th></tr>
<tr><td>Netflix in HD (720p)</td><td>3 Mbps download</td><td>Netflix</td></tr>
<tr><td>Netflix in Full HD (1080p)</td><td>5 Mbps download</td><td>Netflix</td></tr>
<tr><td>Netflix in 4K Ultra HD</td><td>15 Mbps download</td><td>Netflix</td></tr>
<tr><td>Zoom group call in 1080p</td><td>3.8 Mbps upload, 3.0 Mbps download</td><td>Zoom</td></tr>
<tr><td>Online gaming</td><td>Little bandwidth, but low and steady ping</td><td>See below</td></tr>
</tbody></table></div>
<p>Each figure is for one stream or one call. A home with two 4K streams and a 1080p call running together needs roughly 15 + 15 + 3 = 33 Mbps of download at that moment, plus room for everything else.</p>

<h2>Is 100 Mbps fast?</h2>
<p>Yes, for most people. 100 Mbps meets the FCC broadband benchmark for download and handles several 4K streams, calls and gaming at once. It starts to feel tight in a large household where many people stream and download together, or when big game updates arrive while others are online.</p>

<h2>Is 300 Mbps fast?</h2>
<p>Yes. 300 Mbps is more than most households use at any single moment. On paper it carries about twenty 4K Netflix streams at 15 Mbps each. Its real benefit is that large downloads finish quickly and nobody notices when someone else is busy. Whether you get the full 300 often depends on your Wi-Fi more than your plan.</p>

<h2>Is 1 Gbps fast?</h2>
<p>Very. 1 Gbps download paired with 500 Mbps upload is the FCC's long-term goal for broadband, not today's minimum. Most single devices cannot use a full gigabit over Wi-Fi, so you mainly see the benefit with wired computers, many simultaneous users or very large downloads.</p>

<h2>What is a good speed for gaming?</h2>
<p>Gaming needs surprisingly little bandwidth. What matters is a low, steady ping. Aim for a ping under about 50 ms to the game server, jitter under 15 ms, and a connection whose latency does not jump when someone else uses the line. That last part is called <a href="/learn/what-is-bufferbloat">bufferbloat</a>, and it causes more lag in busy homes than a slow plan does. For downloading the games themselves, a faster plan saves time on updates that can run to tens of gigabytes.</p>

<h2>Download vs upload speed: what is the difference?</h2>
<p>Download is data coming to you, and upload is data you send. Streaming and browsing are almost all download. Calls are both, and backups, livestreams and sending large files are almost all upload. If calls break up while streaming works fine, upload is the likely limit.</p>

<h2>Mbps vs MBps</h2>
<p>Internet speeds are quoted in megabits per second (Mbps, small b). File sizes and download managers usually show megabytes per second (MB/s, capital B). One byte is eight bits, so a 100 Mbps connection downloads at about 12.5 MB/s at best.</p>

<h2>How to check your internet speed properly</h2>
<ol>
<li>Run the <a href="/speed-test">speed test</a> on a computer connected by cable, to measure the line rather than the Wi-Fi.</li>
<li>Pause other downloads, streams and backups first.</li>
<li>Test at different times of day. A result that drops every evening points to congestion at your provider.</li>
<li>Repeat on Wi-Fi in the rooms you actually use. A big gap between cable and Wi-Fi means the router or its position is the limit.</li>
</ol>
<p>Different speed tests use different servers, so results can disagree by 10% or more. If your results are well below what you pay for, our guide to <a href="/learn/why-is-my-internet-so-slow">why your internet is slow</a> goes through the causes in order.</p>

<h2>Frequently asked questions</h2>
<h3>Is 50 Mbps good?</h3>
<p>For one or two people, yes. 50 Mbps handles a couple of 4K streams or several HD streams with calls at the same time. It falls short of the FCC's 100 Mbps broadband benchmark, so a larger household will notice it during busy hours.</p>
<h3>Why is my speed lower than my plan?</h3>
<p>Plans are sold as a maximum, and Wi-Fi, older devices, other users on the network and evening congestion all lower what you see. A wired test is the fairest comparison with your plan.</p>
<h3>Does a good speed mean low ping?</h3>
<p>No. Speed and ping are separate. A gigabit line can still lag if its latency is high or rises under load, so check both in the speed test results.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://docs.fcc.gov/public/attachments/FCC-24-27A1.pdf" rel="noopener">FCC 24-27: 2024 Section 706 Report, 100/20 Mbps benchmark and 1 Gbps/500 Mbps long-term goal</a></li><li><a href="https://help.netflix.com/en/node/306" rel="noopener">Netflix Help Center: Internet connection speed recommendations</a></li><li><a href="https://support.zoom.com/hc/en/article?id=zm_kb&amp;sysparm_article=KB0060748" rel="noopener">Zoom Support: bandwidth requirements</a></li></ul>
`,
  "why-is-my-internet-so-slow": `
<p>When <strong>your internet is slow</strong>, the cause is usually one of a few things: weak Wi-Fi, too many devices using the line at once, a busy evening at your provider, a router that lets queues build up, or something on your own device such as a VPN or a background update. The fastest way to find which one is to test in a set order, starting with a <a href="/speed-test">speed test</a> on a wired connection.</p>

<h2>Step 1: Test wired, then on Wi-Fi</h2>
<p>Plug a computer into the router with a cable and run the speed test. Then run it again on Wi-Fi in the room where things feel slow. This one comparison splits almost every problem in two.</p>
<ul>
<li>If wired is fast and Wi-Fi is slow, the problem is inside your home: the router, its position or interference. Go to causes 1 to 3.</li>
<li>If both are slow, the problem is the line, the router itself or your provider. Go to causes 4 to 7.</li>
<li>If speeds look fine but things still feel slow, look at latency and DNS. Go to causes 8 to 10.</li>
</ul>

<h2>1. Weak Wi-Fi signal</h2>
<p>Wi-Fi speed falls quickly with distance, walls and floors. A router in a cupboard, behind a TV or at one end of the house leaves other rooms with a fraction of the real speed. Move the router to a central, open spot, raised off the floor. For a large home, a mesh system works better than a single router with a range extender, because extenders often halve the speed they repeat.</p>

<h2>2. The wrong Wi-Fi band</h2>
<p>The 2.4 GHz band reaches further but is slower and crowded. The 5 GHz band, and 6 GHz on newer routers, is much faster at shorter range. If your device sits near the router and still connects at 2.4 GHz, connect it to the 5 GHz network or give the bands separate names so you can choose.</p>

<h2>3. Interference and crowded channels</h2>
<p>In flats and apartments, many neighbouring networks compete for the same channels, and some household devices interfere on 2.4 GHz. Let the router pick a channel automatically after a restart, or choose a less crowded one in its settings. You can reach those settings through your <a href="/learn/find-router-ip-address">router's IP address</a>.</p>

<h2>4. Too many devices at once</h2>
<p>Every stream, call, game download and backup shares the same connection. A single 4K stream needs about 15 Mbps, and a console update can take everything that is left. Check what else is running when the internet feels slow, and schedule large updates and backups overnight. Our guide to <a href="/learn/what-is-a-good-internet-speed">what a good internet speed is</a> helps you check whether your plan fits your household.</p>

<h2>5. Lag when the line is busy (bufferbloat)</h2>
<p>If browsing and calls fall apart only when someone else is downloading or uploading, the router is probably letting a queue build up. This is called <a href="/learn/what-is-bufferbloat">bufferbloat</a>. Our speed test measures latency during the download and upload and gives a grade. A C or worse is fixed by turning on Smart Queue Management (SQM) in the router, not by buying a faster plan.</p>

<h2>6. An old router or modem that needs a restart</h2>
<p>Routers run for months without a reboot and can slow down, drop connections or start <a href="/learn/what-is-packet-loss">losing packets</a>. Restart the modem and router: unplug both, wait 30 seconds, plug the modem in first, then the router. If problems return often, or the router is several years old and lacks Wi-Fi 6, a newer one is likely to help more than a faster plan. Also check that its firmware is up to date.</p>

<h2>7. Congestion or throttling at your provider</h2>
<p>If a wired test is fast in the morning and slow every evening, your provider's network is likely congested at peak time. Some plans also slow down after a data cap. Record wired speed test results at different times of day for a few days, then contact your provider with them. The guide to <a href="/learn/what-is-my-isp">finding your ISP</a> helps if you are not sure who runs your line.</p>

<h2>8. A VPN or proxy</h2>
<p>A VPN sends all your traffic through its server, which adds distance and can cap your speed. Run the speed test with the VPN off and on. A large difference means the VPN server is the bottleneck, so try a closer server or a different protocol. Our guide to <a href="/learn/is-my-vpn-working">checking that a VPN works</a> shows how to confirm it is still protecting you after the change.</p>

<h2>9. Slow DNS</h2>
<p>If pages take a moment to start loading but then load quickly, DNS may be the delay. Every new website name has to be looked up first, and a slow resolver adds that wait to each one. Switching to a fast public resolver often helps. See <a href="/learn/fix-slow-dns-lookup">how to fix a slow DNS lookup</a>.</p>

<h2>10. Your own device</h2>
<p>An old laptop, a phone in power-saving mode, a browser with dozens of tabs or a background cloud sync can all make the internet feel slow when the line is fine. Test another device in the same spot. If only one device is slow, the problem is that device: update it, close background apps, and check for a long-running download or update.</p>

<h2>When to contact your provider</h2>
<p>Call your provider when a wired speed test is well below your plan at several times of day, after you have restarted the modem and router. Give them the results with dates and times. A wired result is the evidence they cannot blame on your Wi-Fi.</p>

<h2>Frequently asked questions</h2>
<h3>Why is my internet slow all of a sudden?</h3>
<p>A sudden drop usually comes from something that just changed: a large update or backup starting on one device, a router that needs a restart, an outage or works in your area, or a new device crowding the network. Restart the router, check what is downloading, and run a wired speed test.</p>
<h3>Why is my internet slow at night?</h3>
<p>Evening is the busiest time on most residential networks, so a provider with too little capacity slows down then. If wired tests are consistently slower in the evening, report it to your provider with the results.</p>
<h3>Why is my Wi-Fi slow but wired is fine?</h3>
<p>The line is fine, so the limit is the wireless link: distance, walls, the 2.4 GHz band, interference or an older router. Move closer, switch to 5 GHz, or add a mesh system.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://help.netflix.com/en/node/306" rel="noopener">Netflix Help Center: Internet connection speed recommendations</a></li></ul>
`,
  "what-is-packet-loss": `
<p><strong>Packet loss</strong> is the share of data packets that leave your device and never reach the other end, or never make it back. A little of it makes video calls sound robotic and games skip or rubber-band, while web pages and downloads just slow down. To check for it, run a <a href="/ping">ping test</a> for a quick look, then a longer ping from the command line for an exact percentage, and test your router and the internet separately to see where the loss starts.</p>

<h2>What is packet loss?</h2>
<p>Packet loss is data that goes missing in transit. Everything you send online is cut into small packets, and each one travels on its own through your Wi-Fi or cable, your router, your provider and several other networks. If any link on the way is faulty or too full, some packets are dropped. Loss is counted as a percentage: send 100 packets, get 98 back, and you have 2% packet loss.</p>
<p>How much you notice depends on the traffic. Web pages and downloads travel over connections that detect missing data and send it again, which is how TCP works, so loss shows up as slowness and pauses. Calls and most online games use UDP, which never resends anything. A lost packet in a call is a gap in the audio, and in a game it is a missed update about where everyone is.</p>

<h2>How much packet loss is acceptable?</h2>
<p>On a healthy wired connection, a long ping test should lose nothing or close to it. For calls, Microsoft publishes concrete targets for Teams, and they make a useful yardstick for any voice or video app.</p>
<div class="tw"><table><tbody>
<tr><th>Part of the path</th><th>Packet loss</th><th>Burst loss</th></tr>
<tr><td>Your device to Microsoft's network, including Wi-Fi and your provider</td><td>Under 1% in any 15 seconds</td><td>Under 10% in any 200 ms</td></tr>
<tr><td>The edge of your network to Microsoft's network (the provider's part alone)</td><td>Under 0.1% in any 15 seconds</td><td>Under 1% in any 200 ms</td></tr>
</tbody></table></div>
<p>The gap between the two rows matters. Most of the allowance is left for your own Wi-Fi and home network, and the provider's part of the trip is expected to be almost loss-free. In practice, treat 0% as normal, an occasional single lost packet as harmless, and any loss you can repeat on a wired connection as a fault worth tracking down.</p>

<h2>How to test for packet loss</h2>
<p>Start with a quick test in the browser, then use your computer's own ping command for an exact number. Testing two targets, your router and a server on the internet, tells you whether the loss is inside your home or beyond it.</p>

<h3>Quick check in the browser</h3>
<p>Our <a href="/ping">ping test</a> sends 25 checks to the nearest Cloudflare data center. The first two warm up the connection and are not counted. Any of the remaining 23 that gets no answer within 3 seconds counts as lost, so each lost check adds about 4%. The test also reports your worst time and your jitter.</p>
<p>A web page cannot send raw ping packets, so these checks travel over the browser's normal web connection, which resends lost data on its own. Light packet loss therefore tends to show up as a slow check, with a high worst time and high jitter, more often than as a lost one. If your worst time is far above your average, run the longer test below.</p>

<h3>Ping from the command line</h3>
<p>The ping command built into every computer sends ICMP echo requests and counts the replies. Its defaults are no good for measuring loss: Windows sends only 4 pings, and Mac and Linux keep going until you stop them. Send 100 instead, so that a 1% loss has a chance to show up.</p>
<ul>
<li>Windows (Command Prompt or PowerShell): <code>ping -n 100 1.1.1.1</code></li>
<li>Mac and Linux (Terminal): <code>ping -c 100 1.1.1.1</code></li>
</ul>
<p>When it finishes, read the summary. Windows lists Sent, Received and Lost with a percentage. A Mac prints a line such as "100 packets transmitted, 100 packets received, 0.0% packet loss", and Linux a very similar one. The address 1.1.1.1 is Cloudflare's public DNS resolver, which answers pings, so it makes a convenient target.</p>

<h3>Test your router, then the internet</h3>
<p>Run the same 100-ping test twice: once to your router and once to 1.1.1.1. Your router is your <a href="/learn/what-is-my-default-gateway">default gateway</a>, and that guide shows how to find its address on any device.</p>
<ul>
<li>Loss to the router means the problem is inside your home: Wi-Fi, a cable or the router itself.</li>
<li>A clean result to the router with loss to 1.1.1.1 points past your home: the modem, the line or your provider.</li>
<li>No loss to either, while calls still break up, suggests loss that comes and goes, or jitter and <a href="/learn/what-is-bufferbloat">bufferbloat</a>. Repeat the tests at the time the problem happens.</li>
</ul>

<h3>Find where the loss starts</h3>
<p>To see which hop drops packets, use a tool that pings every router on the path. On Windows, run <code>pathping 1.1.1.1</code>. It lists the route first, then sends 100 queries to each hop and gathers statistics for a minute or more, depending on how many hops there are. On Mac and Linux, install mtr with your package manager and run <code>mtr -rw -c 100 1.1.1.1</code>, which sends 100 rounds of probes, one per second, and prints a report.</p>
<p>Reading the result comes down to one rule: only loss that carries on to the final hop is real. Many routers answer pings addressed to themselves at low priority, so they can show loss while forwarding your traffic perfectly well. Microsoft's pathping documentation and the mtr manual both describe this. If hop 4 shows 30% and every hop after it shows 0%, ignore hop 4. If loss starts at one hop and every later hop, including the destination, shows about the same, the problem is at that hop or on the link just before it. In pathping, loss on the link lines (marked with a vertical bar) points to a congested link, and loss at a router's own address suggests that router is overloaded.</p>
<p>Where the loss starts tells you who can fix it. On a home connection, hop 1 is normally your own router, so loss that starts there is yours. Loss that starts in the next few hops usually belongs to your provider, whose name often appears in the hop hostnames. Loss far along the route is on a network neither of you controls. Our guide to <a href="/learn/what-is-my-isp">finding your ISP</a> helps you match the names.</p>

<h2>What causes packet loss?</h2>
<ul>
<li>Weak or crowded Wi-Fi. Distance, walls and interference cost a wireless link far more retries and dropped packets than a cable. The 2.4 GHz band is shared with many household devices, and Microsoft notes that 5 GHz is better suited to real-time media.</li>
<li>A damaged cable or a loose connector. A bent, crushed or old Ethernet cable, or a worn port, can drop packets while the connection still looks fine.</li>
<li>A congested link. When more data arrives than a link can carry, its queue fills and the router drops what does not fit. At home this happens when someone fills the upload or download. On the provider's side it tends to show up in the busy evening hours.</li>
<li>An overloaded or failing router. Old or overheating routers and firmware bugs can drop packets under load.</li>
<li>A fault on the line or in the modem. Problems with the cable, DSL or fiber line cause loss that a restart does not fix.</li>
<li>A VPN. It reroutes everything through its own server, adding hops, and Microsoft notes that some VPNs do not support UDP at all.</li>
</ul>

<h2>How to fix packet loss</h2>
<p>Work from your own device outward, and retest after each step so you know what helped.</p>
<ol>
<li>Plug in a cable. If the loss disappears on a wired connection, the problem is Wi-Fi: move closer to the router, switch to the 5 GHz band or change the channel. Our guide to <a href="/learn/why-is-my-internet-so-slow">why your internet is slow</a> covers Wi-Fi fixes in more detail.</li>
<li>Swap the Ethernet cable and try a different port on the router.</li>
<li>Restart the modem and router, and update the router's firmware.</li>
<li>Check whether the loss only happens while the line is busy. If it appears when someone downloads or uploads, the router's queue is overflowing. Pause big transfers during calls, or turn on Smart Queue Management as described in the <a href="/learn/what-is-bufferbloat">bufferbloat guide</a>.</li>
<li>Turn off your VPN and test again.</li>
<li>Update your network adapter's driver, or test another device in the same spot to rule out your own computer.</li>
<li>If the loss starts at your provider's hops, contact them. Send the evidence: a clean ping to your router, a lossy ping to the internet and a pathping or mtr report, each with the date and time.</li>
</ol>

<h2>Packet loss, latency and jitter</h2>
<p>These three numbers describe different problems, and a connection can fail one while passing the others. Latency, or <a href="/learn/what-is-ping">ping</a>, is how long a round trip takes. <a href="/learn/what-is-jitter">Jitter</a> is how much that time changes from one packet to the next; our tests report it as the average change between consecutive round trips. Packet loss is the share of packets that never come back. Calls and fast games need all three to be low, and our guide on <a href="/learn/how-to-lower-ping">how to lower ping</a> covers the latency side.</p>

<h2>Frequently asked questions</h2>
<h3>Is 1% packet loss bad?</h3>
<p>For calls it is right at the limit. Microsoft's target for Teams is under 1% in any 15 seconds over the whole path, Wi-Fi included. A steady 1% on a wired connection means something is wrong and is worth fixing.</p>
<h3>Why does traceroute show packet loss at only one hop?</h3>
<p>That router gives low priority to pings sent to itself, which does not affect the traffic it forwards. Loss only matters when it continues through every later hop to the destination.</p>
<h3>Can my internet provider cause packet loss?</h3>
<p>Yes. If pings to your router are clean, pings to the internet lose packets, and pathping or mtr shows the loss starting at your provider's first hops and carrying on to the end, the fault is on their side. Report it with those results.</p>
<h3>Does a faster internet plan fix packet loss?</h3>
<p>Only when the loss comes from filling your line. Loss from Wi-Fi, a bad cable, a failing router or a fault on the line stays the same on a faster plan.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ping" rel="noopener">Microsoft Learn: ping command reference</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/pathping" rel="noopener">Microsoft Learn: pathping command reference</a></li><li><a href="https://learn.microsoft.com/en-us/training/modules/plan-optimize-network-performance-for-teams-phone-system/2-understand-teams-network-requirements" rel="noopener">Microsoft Learn: Understand Teams network requirements (loss, jitter and latency targets)</a></li><li><a href="https://learn.microsoft.com/en-us/microsoftteams/prepare-network" rel="noopener">Microsoft Learn: Prepare your organization's network for Teams (Wi-Fi and VPN guidance)</a></li><li><a href="https://man7.org/linux/man-pages/man8/ping.8.html" rel="noopener">ping(8) Linux manual page</a></li><li><a href="https://man.freebsd.org/cgi/man.cgi?query=ping&amp;sektion=8" rel="noopener">ping(8) FreeBSD manual page</a></li><li><a href="https://manpages.debian.org/bookworm/mtr-tiny/mtr.8.en.html" rel="noopener">mtr(8) manual page</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc9293" rel="noopener">RFC 9293: Transmission Control Protocol (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8085" rel="noopener">RFC 8085: UDP Usage Guidelines (IETF)</a></li><li><a href="https://developers.cloudflare.com/1.1.1.1/" rel="noopener">Cloudflare Docs: 1.1.1.1 public DNS resolver</a></li></ul>
`,
  "common-ports-list": `
<p>A <strong>port number</strong> tells a computer which program should receive a piece of network traffic. The IP address gets data to the right device, and the port gets it to the right service on that device, such as a web server on port 443 or SSH on port 22. The list below covers the ports you are most likely to meet, with the names they are registered under at IANA, the body that assigns them. To see whether a port is reachable on your own connection, use our <a href="/port">port checker</a>.</p>

<h2>What is a port number?</h2>
<p>A port is a number from 0 to 65535 that is part of every TCP and UDP connection. A server program listens on a fixed port so that clients know where to find it, and your device picks a temporary port for its own end of each connection. TCP and UDP each have their own set of numbers, so a service can be registered for TCP, for UDP or for both.</p>

<h2>The three port ranges</h2>
<p>RFC 6335 splits the 65,536 port numbers into three ranges, and IANA only hands out numbers in the first two.</p>
<div class="tw"><table><tbody>
<tr><th>Range</th><th>Name</th><th>Assigned by IANA?</th></tr>
<tr><td>0 to 1023</td><td>System ports, also called well-known ports</td><td>Yes</td></tr>
<tr><td>1024 to 49151</td><td>User ports, also called registered ports</td><td>Yes</td></tr>
<tr><td>49152 to 65535</td><td>Dynamic, private or ephemeral ports</td><td>Never</td></tr>
</tbody></table></div>
<p>Because dynamic ports are never assigned, any program can use them for short-lived connections. Most of the services people search for sit in the well-known range.</p>

<h2>Common ports list</h2>
<p>Each entry is the service name and protocol from the IANA registry, with a note on what you will usually find using it.</p>
<div class="tw"><table><tbody>
<tr><th>Port</th><th>Protocol</th><th>Service</th><th>Used for</th></tr>
<tr><td>20, 21</td><td>TCP</td><td>FTP data, FTP control</td><td>File transfer</td></tr>
<tr><td>22</td><td>TCP</td><td>SSH</td><td>Secure remote login, SFTP and Git over SSH</td></tr>
<tr><td>23</td><td>TCP</td><td>Telnet</td><td>Old remote login</td></tr>
<tr><td>25</td><td>TCP</td><td>SMTP</td><td>Mail between mail servers</td></tr>
<tr><td>53</td><td>UDP and TCP</td><td>DNS</td><td>Turning names into IP addresses</td></tr>
<tr><td>67, 68</td><td>UDP</td><td>DHCP server, DHCP client</td><td>Handing out IP addresses on a network</td></tr>
<tr><td>69</td><td>UDP</td><td>TFTP</td><td>Simple file transfer, network booting</td></tr>
<tr><td>80</td><td>TCP</td><td>HTTP</td><td>Unencrypted websites</td></tr>
<tr><td>110</td><td>TCP</td><td>POP3</td><td>Downloading email</td></tr>
<tr><td>123</td><td>UDP</td><td>NTP</td><td>Clock synchronization</td></tr>
<tr><td>137 to 139</td><td>UDP and TCP</td><td>NetBIOS</td><td>Older Windows file and name services</td></tr>
<tr><td>143</td><td>TCP</td><td>IMAP</td><td>Reading email on the server</td></tr>
<tr><td>161, 162</td><td>UDP</td><td>SNMP, SNMP traps</td><td>Monitoring network equipment</td></tr>
<tr><td>389</td><td>TCP and UDP</td><td>LDAP</td><td>Directory services</td></tr>
<tr><td>443</td><td>TCP and UDP</td><td>HTTPS</td><td>Encrypted websites and most web APIs</td></tr>
<tr><td>445</td><td>TCP</td><td>Microsoft-DS (SMB)</td><td>Windows file and printer sharing</td></tr>
<tr><td>465</td><td>TCP</td><td>Submissions</td><td>Sending email over TLS</td></tr>
<tr><td>500</td><td>UDP</td><td>ISAKMP (IKE)</td><td>Setting up IPsec VPNs</td></tr>
<tr><td>514</td><td>UDP</td><td>Syslog</td><td>Sending logs to a log server</td></tr>
<tr><td>587</td><td>TCP</td><td>Submission</td><td>Sending email from a mail app</td></tr>
<tr><td>636</td><td>TCP</td><td>LDAPS</td><td>LDAP over TLS</td></tr>
<tr><td>853</td><td>TCP and UDP</td><td>DNS over TLS, DTLS or QUIC</td><td>Encrypted DNS</td></tr>
<tr><td>993</td><td>TCP</td><td>IMAPS</td><td>IMAP over TLS</td></tr>
<tr><td>995</td><td>TCP</td><td>POP3S</td><td>POP3 over TLS</td></tr>
<tr><td>1194</td><td>UDP and TCP</td><td>OpenVPN</td><td>OpenVPN tunnels</td></tr>
<tr><td>1433</td><td>TCP</td><td>Microsoft SQL Server</td><td>Database</td></tr>
<tr><td>1723</td><td>TCP</td><td>PPTP</td><td>Old VPN protocol</td></tr>
<tr><td>1812, 1813</td><td>UDP</td><td>RADIUS, RADIUS accounting</td><td>Network login for Wi-Fi and VPNs</td></tr>
<tr><td>3306</td><td>TCP</td><td>MySQL</td><td>Database</td></tr>
<tr><td>3389</td><td>TCP and UDP</td><td>MS WBT Server (RDP)</td><td>Windows Remote Desktop</td></tr>
<tr><td>3478</td><td>UDP and TCP</td><td>STUN, TURN</td><td>Helping calls and games get through NAT</td></tr>
<tr><td>4500</td><td>UDP</td><td>IPsec NAT traversal</td><td>IPsec VPNs behind a router</td></tr>
<tr><td>5060, 5061</td><td>UDP and TCP</td><td>SIP, SIP over TLS</td><td>Internet phone calls</td></tr>
<tr><td>5353</td><td>UDP</td><td>Multicast DNS</td><td>Finding printers and devices on the local network</td></tr>
<tr><td>5432</td><td>TCP</td><td>PostgreSQL</td><td>Database</td></tr>
<tr><td>5900</td><td>TCP</td><td>RFB (VNC)</td><td>Remote screen sharing</td></tr>
<tr><td>6379</td><td>TCP</td><td>Redis</td><td>In-memory database and cache</td></tr>
<tr><td>8080</td><td>TCP</td><td>HTTP alternate</td><td>Second web server, development servers, proxies</td></tr>
<tr><td>9100</td><td>TCP</td><td>Printer PDL data stream</td><td>Sending print jobs straight to a printer</td></tr>
<tr><td>27017</td><td>TCP</td><td>MongoDB</td><td>Database</td></tr>
<tr><td>32400</td><td>TCP</td><td>Plex</td><td>Plex Media Server</td></tr>
</tbody></table></div>
<p>A registration only says what a port is reserved for. Any program can be set to listen on any port, so traffic on port 443 is very likely HTTPS but not guaranteed to be.</p>

<h2>The most searched ports</h2>

<h3>Port 443</h3>
<p>Port 443 is HTTPS, the encrypted web. HTTP's own standard, RFC 9110, makes 443 the default port for https addresses, which is why you never have to type it. It is registered for both TCP and UDP. Blocking it breaks most websites and apps.</p>

<h3>Port 80</h3>
<p>Port 80 is plain HTTP, the default for http addresses in RFC 9110. Many sites answer on port 80 only to send you on to the HTTPS version on 443.</p>

<h3>Port 22</h3>
<p>Port 22 is SSH, used to log in to servers and routers securely, copy files with SFTP or SCP, and push code to Git hosts. A server that exposes it to the internet should allow key-based logins only.</p>

<h3>Port 53</h3>
<p>Port 53 is DNS, registered for both UDP and TCP. Encrypted DNS over TLS has its own port, 853. Our <a href="/learn/what-is-a-dns-server">DNS server guide</a> explains what happens when your device asks a resolver for an address.</p>

<h3>Port 3389</h3>
<p>Port 3389 is Windows Remote Desktop. Microsoft's documentation confirms that Remote Desktop listens on 3389 by default and shows how to change it. CISA lists exposed RDP among the weaknesses used in ransomware attacks, where attackers log in with weak or stolen passwords, and recommends multi-factor authentication.</p>

<h3>Port 8080</h3>
<p>Port 8080 is registered as an alternate HTTP port. It is a common choice for a second web server on the same machine, a development server or a web proxy, since port 80 is often already taken.</p>

<h2>Which ports are risky to open?</h2>
<p>Every port you forward on your router lets the whole internet knock on that service. A few deserve extra care.</p>
<ul>
<li>Remote Desktop (3389). CISA warns that attackers break in through RDP with weak or compromised credentials. Put it behind a VPN or use multi-factor authentication.</li>
<li>SMB file sharing (139 and 445). CISA notes that the old SMBv1 version sends everything in clear text, and recommends a newer SMB version and carrying SMB over an encrypted VPN.</li>
<li>Databases (1433, 3306, 5432, 6379, 27017). These are meant for your own apps to reach. Keep them on the local network or behind a VPN.</li>
<li>Telnet (23) and plain FTP (21). Use SSH and SFTP instead, which encrypt the session.</li>
</ul>
<p>Our guide to <a href="/learn/what-is-port-forwarding">port forwarding</a> covers opening a port safely when you do need one.</p>

<h2>TCP ports vs UDP ports</h2>
<p>TCP sets up a connection with a handshake before any data moves, so you can test a TCP port by trying to connect. UDP just sends packets, with no handshake and no resending, which suits DNS lookups, calls and games. Because nothing answers a probe, an open UDP port is hard to confirm from outside, and that is why our port checker tests TCP.</p>

<h2>How to check which ports are open</h2>
<p>Use the <a href="/port">port checker</a> to test whether a port on your public IP address can be reached from the internet. To see what is listening on your own computer, run <code>netstat -an</code> on Windows or <code>lsof -i -P</code> on a Mac. Our guide on <a href="/learn/how-to-check-if-a-port-is-open">how to check if a port is open</a> walks through each method and what the results mean.</p>

<h2>Frequently asked questions</h2>
<h3>How many ports are there?</h3>
<p>There are 65,536 port numbers, from 0 to 65535, for each of TCP and UDP. Numbers 0 to 1023 are well-known ports, 1024 to 49151 are registered ports, and 49152 to 65535 are dynamic ports that IANA never assigns.</p>
<h3>What port does HTTPS use?</h3>
<p>Port 443. Plain HTTP uses port 80.</p>
<h3>What port does email use?</h3>
<p>Mail servers talk to each other on port 25. Mail apps send through 465 (TLS from the start) or 587, and read mail through IMAP on 993 or POP3 on 995. RFC 8314 recommends the TLS-from-the-start ports over upgrading a plain connection.</p>
<h3>Is port 8080 the same as port 80?</h3>
<p>Both carry HTTP, but they are separate ports. A server on 8080 has to be addressed with the port in the URL, for example <code>http://example.com:8080</code>.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" rel="noopener">IANA Service Name and Transport Protocol Port Number Registry</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6335" rel="noopener">RFC 6335: IANA procedures for port numbers, including the three ranges (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc9110" rel="noopener">RFC 9110: HTTP Semantics, default ports 80 and 443 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc2131" rel="noopener">RFC 2131: Dynamic Host Configuration Protocol, ports 67 and 68 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8314" rel="noopener">RFC 8314: Use of TLS for email submission and access (IETF)</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remotepc/change-listening-port" rel="noopener">Microsoft Learn: Change the Remote Desktop listening port</a></li><li><a href="https://www.cisa.gov/stopransomware/misconfigurations-and-weaknesses-known-be-used-ransomware-campaigns" rel="noopener">CISA: Misconfigurations and weaknesses known to be used in ransomware campaigns</a></li></ul>
`,
  "what-is-cgnat": `
<p><strong>CGNAT</strong>, or carrier-grade NAT, means your internet provider shares one public IPv4 address between many customers. Browsing, streaming and email work as normal, but anything that needs the internet to reach you, such as port forwarding, hosting a game server or remote access to a camera, usually fails. The quickest check is to compare the WAN address in your router with the public IP shown on our <a href="/">IP checker</a>. If they differ, you are probably behind CGNAT.</p>

<h2>What is CGNAT?</h2>
<p>CGNAT is a second layer of address sharing, run by your provider. At home, your router already uses <a href="/learn/what-is-nat">NAT</a> to put every device behind one address. With CGNAT, that address is not public either: the provider's equipment shares one public IPv4 address among several subscribers, which is how RFC 6888 defines a carrier-grade NAT. Providers do this because they do not have a public IPv4 address for every customer.</p>
<p>Outgoing connections are fine, because the provider's NAT remembers who started each one and sends the replies back. Incoming connections are the problem. When a packet arrives at the shared public address unasked, the provider has no way to know which of its customers it is for, so it is dropped.</p>

<h2>What is 100.64.0.0/10?</h2>
<p>100.64.0.0/10, the range from 100.64.0.0 to 100.127.255.255 (the /10 is <a href="/learn/cidr-subnet-mask-explained">CIDR notation</a>), is the address block set aside for CGNAT. RFC 6598 calls it Shared Address Space and reserves it for providers to number the link between their CGNAT equipment and your router. It is separate from the private ranges in RFC 1918, and packets using it must not cross from one provider's network to another. If your router's WAN address starts with 100.64 through 100.127, you are behind CGNAT.</p>

<h2>How to tell if you are behind CGNAT</h2>
<ol>
<li>Open your router's admin page and find its WAN or Internet IP address. Our guide to <a href="/learn/find-router-ip-address">finding your router's IP address</a> shows how to get in.</li>
<li>Open the <a href="/">ipcomet home page</a> and note your public IPv4 address.</li>
<li>Compare the two using the table below.</li>
</ol>
<div class="tw"><table><tbody>
<tr><th>Router WAN address</th><th>What it means</th></tr>
<tr><td>Same as your public IP</td><td>No CGNAT. You have your own public IPv4 address.</td></tr>
<tr><td>Between 100.64.0.0 and 100.127.255.255</td><td>CGNAT. This is the shared address range from RFC 6598.</td></tr>
<tr><td>Private: 10.x.x.x, 172.16.x.x to 172.31.x.x, or 192.168.x.x</td><td>Double NAT. Either another router of yours sits in front, or your provider runs CGNAT with private addresses.</td></tr>
<tr><td>A different public address</td><td>Usually CGNAT or a provider proxy. Ask your provider.</td></tr>
</tbody></table></div>
<p>A traceroute gives a second opinion. Run <code>tracert 1.1.1.1</code> on Windows or <code>traceroute 1.1.1.1</code> on a Mac. If one of the first hops after your router has an address between 100.64 and 100.127, your traffic passes through the provider's CGNAT.</p>

<h2>What does CGNAT break?</h2>
<p>RFC 7021 reports tests of common applications behind CGNAT. Web browsing, email, video streaming and video calls kept working. The problems clustered around anything that needs an incoming connection:</p>
<ul>
<li>Servers inside the home, such as an FTP server, could not be reached.</li>
<li>Peer-to-peer apps that wait for incoming connections failed. BitTorrent could download but not seed.</li>
<li>Peer-to-peer gaming failed in some setups, including two players behind the same CGNAT address trying to connect to each other.</li>
<li>IP-based location and abuse tracking get harder, because many customers share one address.</li>
</ul>
<p>That last point affects you too. If someone else on your shared address gets it blocked by a website or listed for spam, you can see CAPTCHAs or blocks you did nothing to earn. Our <a href="/reputation">IP reputation check</a> shows whether your current address is on common blocklists.</p>

<h2>CGNAT vs double NAT</h2>
<p>Double NAT is two routers in your own home, for example your provider's modem-router with your own router plugged in behind it. You can fix it yourself by putting the first device into bridge mode or forwarding the port on both. CGNAT happens inside the provider's network, so no setting on your side removes it. The <a href="/learn/what-is-port-forwarding">port forwarding guide</a> covers the double NAT fix.</p>

<h2>How to get around CGNAT</h2>
<ol>
<li>Ask your provider for a public IPv4 address. Some offer it on request or as an add-on, and it removes CGNAT for your connection.</li>
<li>Use IPv6 if your provider offers it. IPv6 has enough addresses for every device, so incoming connections over IPv6 do not go through NAT, though your router's firewall still has to allow them.</li>
<li>Use a tunnel. Services such as Cloudflare Tunnel run a small program on your machine that connects out to their network, so your service is reachable without a publicly routable IP address or an open inbound port.</li>
<li>Use a VPN provider that offers port forwarding. Incoming traffic then arrives at the VPN's public address and comes down the tunnel to you.</li>
</ol>
<p>The standard for CGNAT equipment, RFC 6888, also requires support for a protocol that lets subscribers request their own mappings, normally the Port Control Protocol. Whether your provider turns it on is another matter, so ask.</p>

<h2>Frequently asked questions</h2>
<h3>Is CGNAT bad?</h3>
<p>For browsing, streaming and calls it is usually unnoticeable. It is a problem if you host anything at home, need port forwarding for a game or camera, or share an address that gets blocked.</p>
<h3>Does CGNAT slow down my internet?</h3>
<p>Not much for everyday use. In the RFC 7021 tests, single video streams played with somewhat longer buffering, and some large transfers ran slower in one setup. Raw speed mostly depends on your plan and Wi-Fi.</p>
<h3>Is 100.64.x.x a private IP address?</h3>
<p>Not in the RFC 1918 sense. It is Shared Address Space reserved for providers, and like private addresses it is not reachable from the public internet.</p>
<h3>Why does my IP address show a different city?</h3>
<p>Behind CGNAT, the public address belongs to the provider's equipment, which may sit in another city. Our guide on <a href="/learn/why-is-my-ip-location-wrong">why your IP location is wrong</a> explains the other causes.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6888" rel="noopener">RFC 6888: Common Requirements for Carrier-Grade NATs (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc7021" rel="noopener">RFC 7021: Assessing the Impact of Carrier-Grade NAT on Network Applications (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li><li><a href="https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/" rel="noopener">Cloudflare Docs: Cloudflare Tunnel</a></li></ul>
`,
  "what-is-a-169-254-ip-address": `
<p>A <strong>169.254 IP address</strong> means your device asked the network for an address, got no answer, and gave itself one. Windows calls this APIPA (Automatic Private IP Addressing), and the standard name is an IPv4 link-local address. While you have one, you can reach other devices on the same cable or Wi-Fi at best, but not the internet. The usual fix is to restart the router and renew the address, covered step by step below.</p>

<h2>What is APIPA?</h2>
<p>APIPA is what a device does when it is set to get its address automatically and the DHCP server, normally your router, does not reply. The rules come from RFC 3927. The device picks an address at random between 169.254.1.0 and 169.254.254.255, checks with an ARP probe that no other device on the network already uses it, and keeps it until a proper address arrives. The first and last 256 addresses of 169.254.0.0/16 are reserved and never chosen.</p>
<p>Routers must not forward packets to or from these addresses, so a 169.254 address only works on the local link. There is no gateway and no route to the internet, which is why the connection icon shows a warning even though Wi-Fi appears connected.</p>

<h2>Why did I get a 169.254 address?</h2>
<p>Something stopped the DHCP exchange between your device and the router. Common causes:</p>
<ul>
<li>The router is off, still starting up or has frozen.</li>
<li>The Wi-Fi link is weak or dropped while the device was asking for an address.</li>
<li>The Ethernet cable or port is faulty.</li>
<li>DHCP is turned off in the router, or its pool of addresses is used up because too many devices are connected.</li>
<li>Firewall or VPN software on the device is blocking the request.</li>
<li>The network adapter's driver is out of date or misbehaving.</li>
</ul>

<h2>How to check your IP address</h2>
<ul>
<li>Windows: open Command Prompt and run <code>ipconfig /all</code>. Look at the IPv4 address of the adapter you use. Microsoft notes that ipconfig shows whether a setting came from DHCP or from APIPA.</li>
<li>Mac: open System Settings, select Network, pick your connection, click Details and then TCP/IP. macOS may also say the connection has a self-assigned IP address.</li>
<li>iPhone and Android: open the Wi-Fi settings and tap the network you are on to see its IP address.</li>
</ul>
<p>If the address starts with 169.254 and no router address is listed, DHCP has failed. A working setup shows a private address such as 192.168.1.20 and a <a href="/learn/what-is-my-default-gateway">default gateway</a>.</p>

<h2>How to fix a 169.254 IP address</h2>
<ol>
<li>Restart the router and modem. Unplug them, wait 30 seconds, plug the modem in first and then the router, and give them a couple of minutes.</li>
<li>Renew the address. On Windows, run <code>ipconfig /release</code> and then <code>ipconfig /renew</code>. On a Mac, go to System Settings, Network, your connection, Details, TCP/IP, and click Renew DHCP Lease.</li>
<li>Reconnect. Forget the Wi-Fi network and join it again, or try another cable and router port.</li>
<li>Turn off VPN and firewall software for a moment and renew again. If that works, add an exception.</li>
<li>Check the router's DHCP settings. Make sure DHCP is on and the address pool is larger than the number of devices you own.</li>
<li>Update or reinstall the network adapter's driver, or reset the network settings on the device.</li>
<li>If only one device fails while others work, the problem is that device. If every device gets a 169.254 address, it is the router.</li>
</ol>

<h2>When a 169.254 address is normal</h2>
<p>Link-local addresses are useful when no DHCP server exists. Two computers joined directly by a cable can talk to each other with 169.254 addresses, and some printers and network gadgets use one during setup.</p>
<p>Cloud servers use one special address in the range on purpose. On Amazon EC2, the instance metadata service lives at 169.254.169.254, and AWS documents it as a link-local address that is valid only from inside the instance.</p>

<h2>What about IPv6 fe80 addresses?</h2>
<p><a href="/learn/what-is-ipv6">IPv6</a> has its own link-local range, fe80::/10, and every IPv6 interface is required to have one, per RFC 4291. Seeing an fe80 address next to a working IPv4 address is normal and is not a fault. Like 169.254, routers never forward it.</p>

<h2>Frequently asked questions</h2>
<h3>Is 169.254 a private IP address?</h3>
<p>It is not one of the private ranges in RFC 1918 (10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16, written in <a href="/learn/cidr-subnet-mask-explained">CIDR notation</a>). It is a separate link-local range, and it is even more limited, because it never leaves the local network segment. Our guide to <a href="/learn/public-vs-private-ip-address">public and private IP addresses</a> covers the difference.</p>
<h3>Can a 169.254 address reach the internet?</h3>
<p>No. Routers are required to drop traffic to and from link-local addresses, so you need a real address from DHCP or a manual setting.</p>
<h3>What is 169.254.169.254?</h3>
<p>It is the address cloud platforms such as Amazon EC2 use for their instance metadata service. It is reachable only from inside the cloud server.</p>
<h3>Will my device fix itself?</h3>
<p>Often, yes. A device with a link-local address keeps using DHCP as normal, and once a routable address works it must use that one for new connections, according to RFC 3927.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc3927" rel="noopener">RFC 3927: Dynamic Configuration of IPv4 Link-Local Addresses (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc4291" rel="noopener">RFC 4291: IP Version 6 Addressing Architecture, link-local addresses (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li><li><a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig" rel="noopener">Microsoft Learn: ipconfig command reference</a></li><li><a href="https://support.apple.com/guide/mac-help/mchlp1545/mac" rel="noopener">Apple Support: Renew the DHCP lease on Mac</a></li><li><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html" rel="noopener">AWS Documentation: Access instance metadata for an EC2 instance</a></li></ul>
`,
  "what-is-jitter": `
<p><strong>Jitter</strong> is how much your ping changes from one packet to the next, measured in milliseconds. A connection that answers in 20, 21 and 22 ms has low jitter; one that jumps between 20 and 90 ms has high jitter, even if the average looks fine. High jitter makes calls break up and games stutter. Our <a href="/ping">ping test</a> measures it in a few seconds.</p>

<h2>What is jitter?</h2>
<p>Jitter is variation in the delay of packets as they arrive. Data leaves your device as an even stream, but congestion, queues and radio interference on the way can bunch some packets up and hold others back. Network standards call this packet delay variation. RFC 3393 avoids the word jitter because different groups use it in different ways, and that is worth remembering when two tools give you different numbers.</p>

<h2>How is jitter measured?</h2>
<p>There is more than one formula, so results from different tests are not directly comparable.</p>
<ul>
<li>Our <a href="/ping">ping test</a> and <a href="/speed-test">speed test</a> take the average change between consecutive round trips. Pings of 20, 30 and 25 ms change by 10 and 5 ms, so the jitter is 7.5 ms.</li>
<li>Voice and video apps that use RTP follow RFC 3550, which defines interarrival jitter as a smoothed running average: each new difference moves the estimate one sixteenth of the way toward it.</li>
<li>The ping command on a Mac or Linux prints a standard deviation (stddev) at the end, which is another way of describing the spread.</li>
</ul>

<h2>What is a good jitter?</h2>
<p>Lower is better, and for calls Microsoft publishes concrete limits for Teams that work as a yardstick for any voice or video app.</p>
<div class="tw"><table><tbody>
<tr><th>Jitter</th><th>What it means</th></tr>
<tr><td>Under 15 ms</td><td>Meets Microsoft's Teams target even for the provider's part of the path alone. Good for calls and games.</td></tr>
<tr><td>15 to 30 ms</td><td>Within Teams' end-to-end target from your device, Wi-Fi included. Usually fine.</td></tr>
<tr><td>Over 30 ms</td><td>Above Teams' target. Our ping test marks the connection as unstable, and calls may break up.</td></tr>
</tbody></table></div>
<p>Microsoft's targets apply to any 15-second interval, so a short burst of high jitter in the middle of a call counts. For fast online games, steady matters as much as low: a constant 50 ms often feels better than a ping that swings between 20 and 80.</p>

<h2>Why does jitter make calls and games stutter?</h2>
<p>Call apps hold incoming audio in a jitter buffer, which Cisco's documentation calls a playout delay buffer, and play it out at a steady pace. A packet that arrives after its turn has passed is thrown away, and you hear a dropout. Most buffers adapt, growing when jitter rises, but a bigger buffer adds delay, so high jitter costs you either gaps or lag. Games have no buffer to hide behind. A late update shows up as stutter or players jumping around.</p>

<h2>How to test your jitter</h2>
<ol>
<li>Run our <a href="/ping">ping test</a>. It sends 25 checks to the nearest Cloudflare data center and reports average ping, best, worst, jitter and packet loss.</li>
<li>Run the <a href="/speed-test">speed test</a> to see jitter alongside download, upload and latency under load.</li>
<li>For a longer sample, run <code>ping -c 100 1.1.1.1</code> on Mac or Linux and read the stddev, or <code>ping -n 100 1.1.1.1</code> on Windows and compare the minimum and maximum.</li>
<li>Test once on a cable and once on Wi-Fi, and repeat at the time of day your calls break up.</li>
</ol>

<h2>What causes jitter?</h2>
<ul>
<li>Wi-Fi. Devices take turns on the air and retry after interference, so the delay varies from packet to packet. Microsoft points out that the 2.4 GHz band is crowded with household devices and that 5 GHz suits real-time media better.</li>
<li>A busy connection. When an upload or download fills the line, queues in the router grow and shrink, and every packet waits a different amount of time. This is <a href="/learn/what-is-bufferbloat">bufferbloat</a>, and it shows up as jitter during transfers.</li>
<li>Congestion at your provider, often in the evening.</li>
<li>VPNs, which add a longer and more variable path.</li>
<li>Weak mobile signal on 4G or 5G.</li>
</ul>

<h2>How to reduce jitter</h2>
<ol>
<li>Use an Ethernet cable for calls and gaming. If you must use Wi-Fi, connect to the 5 GHz band and sit closer to the router.</li>
<li>Pause large uploads, cloud backups and game updates during calls.</li>
<li>Turn on Smart Queue Management (SQM) or QoS in your router if it has it. Microsoft also recommends QoS or WMM on Wi-Fi so voice and video traffic gets priority.</li>
<li>Turn off the VPN for calls, or use split tunneling so call traffic goes direct.</li>
<li>Restart the router and update its firmware.</li>
<li>If jitter is high on a cable at quiet times, contact your provider with your ping test results.</li>
</ol>

<h2>Jitter vs latency vs packet loss</h2>
<p>Latency, or <a href="/learn/what-is-ping">ping</a>, is how long one round trip takes. Jitter is how much that time varies. <a href="/learn/what-is-packet-loss">Packet loss</a> is the share of packets that never arrive. They often come together, because the same full queue or weak Wi-Fi causes all three, but a connection can have low latency and still suffer from jitter.</p>

<h2>Frequently asked questions</h2>
<h3>Is 5 ms jitter good?</h3>
<p>Yes. It is well under Microsoft's 15 ms and 30 ms targets, and you will not notice it on calls or in games.</p>
<h3>Is jitter the same as ping?</h3>
<p>No. Ping is the delay of a round trip. Jitter is how much that delay changes between packets.</p>
<h3>Does jitter affect download speed?</h3>
<p>Not directly. Downloads measure how much data arrives per second, and buffering hides timing changes. Jitter matters for real-time traffic such as calls, live streams and games.</p>
<h3>Can a VPN reduce jitter?</h3>
<p>Rarely. A VPN adds distance and another server to the path. It can only help when your provider's normal route is badly congested and the VPN's route avoids it.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc3393" rel="noopener">RFC 3393: IP Packet Delay Variation Metric (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc3550" rel="noopener">RFC 3550: RTP, interarrival jitter in section 6.4.1 (IETF)</a></li><li><a href="https://www.cisco.com/c/en/us/support/docs/voice/voice-quality/18902-jitter-packet-voice.html" rel="noopener">Cisco: Understanding jitter in packet voice networks</a></li><li><a href="https://learn.microsoft.com/en-us/training/modules/plan-optimize-network-performance-for-teams-phone-system/2-understand-teams-network-requirements" rel="noopener">Microsoft Learn: Understand Teams network requirements (jitter targets)</a></li><li><a href="https://learn.microsoft.com/en-us/microsoftteams/prepare-network" rel="noopener">Microsoft Learn: Prepare your organization's network for Teams (Wi-Fi, QoS and VPN guidance)</a></li></ul>
`,
  "what-is-nat": `
<p><strong>NAT</strong>, or network address translation, lets many devices share one public IP address. Your router keeps a table of which device started each connection, swaps the device's private address for the public one on the way out, and swaps it back when the reply arrives. That is why every phone and laptop in your home shows the same address on our <a href="/">IP checker</a>, even though each has its own address on your network.</p>

<h2>How does NAT work?</h2>
<p>NAT rewrites the addresses in each packet as it passes through the router. When your laptop at 192.168.1.20 opens a connection from port 51000, the router replaces that pair with its own public address and a port it chooses, and writes the pairing down. When the website answers on that public port, the router looks up the pairing and forwards the reply to the laptop. RFC 3022 calls this Network Address Port Translation (NAPT), and it is what nearly every home router does.</p>
<div class="tw"><table><tbody>
<tr><th>Step</th><th>Source address seen</th></tr>
<tr><td>Laptop sends a request</td><td>192.168.1.20 port 51000 (private)</td></tr>
<tr><td>Router forwards it to the internet</td><td>Your public IP, port chosen by the router</td></tr>
<tr><td>Website replies</td><td>To your public IP and that port</td></tr>
<tr><td>Router hands the reply back</td><td>To 192.168.1.20 port 51000</td></tr>
</tbody></table></div>

<h2>Why does NAT exist?</h2>
<p>IPv4 has only 32-bit addresses, about 4.3 billion in total, which is far fewer than the devices now online. NAT lets a home or office use addresses from the private ranges set aside in RFC 1918 (10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16), which anyone can reuse, and present a single public address to the internet. Our guide to <a href="/learn/public-vs-private-ip-address">public and private IP addresses</a> covers those ranges in detail.</p>

<h2>Types of NAT</h2>
<ul>
<li>Basic NAT maps private addresses to a pool of public ones, one to one. RFC 3022 describes it, but it needs as many public addresses as active devices, so homes rarely use it.</li>
<li>NAPT, often called PAT or NAT overload, maps many private addresses to one public address by also translating port numbers. This is the NAT in your router.</li>
<li>Static NAT, or <a href="/learn/what-is-port-forwarding">port forwarding</a>, is a fixed rule that sends traffic arriving on a public port to one device inside.</li>
<li><a href="/learn/what-is-cgnat">Carrier-grade NAT (CGNAT)</a> is NAT run by your provider, which shares one public address between many customers. It uses the 100.64.0.0/10 range from RFC 6598 between the provider and your router.</li>
<li>Double NAT is two layers of NAT in your own home, for example your own router plugged in behind the provider's router.</li>
</ul>

<h2>Why does NAT block incoming connections?</h2>
<p>A router only has a mapping for connections that a device inside started. A packet that arrives unasked matches no entry, so the router does not know which device it is for and drops it. RFC 3022 notes that sessions in the other direction are allowed only through static mappings. That is why hosting a game server, a camera or remote desktop at home needs port forwarding, and why it fails entirely behind CGNAT.</p>
<p>Calls, games and video apps get around this with NAT traversal: each side asks a public STUN server (Session Traversal Utilities for NAT, port 3478 in the <a href="/learn/common-ports-list">port registry</a>) which public address and port it appears to have, then they try to reach each other directly.</p>

<h2>Is NAT a firewall?</h2>
<p>No, although it acts a little like one. NAT was designed to save addresses, and the fact that it drops unsolicited traffic is a side effect. A port you forward is open to the whole internet, and NAT does nothing to inspect the traffic that is allowed through. Keep the firewall on your router and devices switched on.</p>

<h2>Does IPv6 need NAT?</h2>
<p>Usually not. IPv6 addresses are 128 bits long, enough for every device to have its own public address, so a home router hands out real IPv6 addresses and uses its firewall to decide what may come in. Read <a href="/learn/what-is-ipv6">what IPv6 is</a> for how those addresses work.</p>

<h2>How to tell whether you are behind NAT</h2>
<ol>
<li>Find your device's own address: run <code>ipconfig</code> on Windows or look in the Wi-Fi details on a phone or Mac.</li>
<li>Compare it with the public address on our <a href="/">IP checker</a>.</li>
<li>If your device shows a private address such as 192.168.x.x or 10.x.x.x and the checker shows something else, your router is doing NAT. That is normal.</li>
<li>To see whether your provider adds a second layer, compare your router's WAN address with the public address, as the <a href="/learn/what-is-cgnat">CGNAT guide</a> explains.</li>
</ol>

<h2>Frequently asked questions</h2>
<h3>What is NAT in simple terms?</h3>
<p>It is the job your router does so that all your devices can share one internet address. It changes the address on outgoing traffic to its own, remembers who asked, and passes the replies back to the right device.</p>
<h3>What is the difference between NAT and PAT?</h3>
<p>PAT, port address translation, is the common form of NAT that also changes port numbers so many devices can share one public address. RFC 3022 calls it NAPT. When people say NAT about a home router, they almost always mean PAT.</p>
<h3>What is double NAT and is it a problem?</h3>
<p>Double NAT is two routers each doing NAT, one behind the other. Browsing works, but port forwarding and some games break unless you forward ports on both routers or put the first one into bridge mode.</p>
<h3>Does NAT hide my IP address?</h3>
<p>It hides your device's private address, but websites still see your public address. To change what sites see, read <a href="/learn/how-to-hide-your-ip-address">how to hide your IP address</a>.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc3022" rel="noopener">RFC 3022: Traditional IP Network Address Translator (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598: Shared Address Space for CGN (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc791" rel="noopener">RFC 791: Internet Protocol, 32-bit addresses (IETF)</a></li><li><a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" rel="noopener">IANA port registry (STUN on 3478)</a></li></ul>
`,
  "what-is-ipv6": `
<p><strong>IPv6</strong> is the newer version of the Internet Protocol. Its addresses are 128 bits long and written as groups of hexadecimal digits, such as <code>2001:db8:85a3::8a2e:370:7334</code>, which gives enough addresses for every device to have its own. Most networks now run IPv6 alongside the older IPv4. Our <a href="/">IP checker</a> shows your IPv6 address on the line under your main IP if your connection has one.</p>

<h2>Why was IPv6 created?</h2>
<p>IPv4 addresses are 32 bits, which allows about 4.3 billion of them, and that is not enough for every phone, computer and device online. IPv4 networks cope by sharing addresses through <a href="/learn/what-is-nat">NAT</a> and <a href="/learn/what-is-cgnat">carrier-grade NAT</a>. IPv6 uses 128-bit addresses, as defined in RFC 4291, so the address space is 2 to the power 128: large enough that address shortage is no longer the limit. The protocol itself is specified in RFC 8200.</p>

<h2>What does an IPv6 address look like?</h2>
<p>An IPv6 address is eight groups of four hexadecimal digits separated by colons. RFC 5952 sets the rules for writing it short:</p>
<ul>
<li>Leading zeros in each group are dropped, so <code>0db8</code> becomes <code>db8</code>.</li>
<li>The longest run of all-zero groups is replaced once by <code>::</code>, but never a single zero group.</li>
<li>Letters are written in lowercase.</li>
</ul>
<div class="tw"><table><tbody>
<tr><th>Full form</th><th>Short form</th></tr>
<tr><td class="mono">2001:0db8:0000:0000:0000:0000:0002:0001</td><td class="mono">2001:db8::2:1</td></tr>
<tr><td class="mono">0000:0000:0000:0000:0000:0000:0000:0001</td><td class="mono">::1</td></tr>
</tbody></table></div>
<p>The first part of an address (usually the first 64 bits) is the network prefix your provider gives you, and the rest identifies the device. Prefixes are written in CIDR notation, such as <code>2001:db8::/32</code>; our <a href="/subnet">subnet calculator</a> works them out.</p>

<h2>Types of IPv6 addresses</h2>
<div class="tw"><table><tbody>
<tr><th>Type</th><th>Looks like</th><th>Used for</th></tr>
<tr><td>Global unicast</td><td>Your public address, from your provider's prefix</td><td>Talking to the internet</td></tr>
<tr><td>Link-local</td><td>fe80::/10</td><td>The local network only; every interface has one</td></tr>
<tr><td>Loopback</td><td>::1</td><td>The device talking to itself, like 127.0.0.1</td></tr>
<tr><td>Multicast</td><td>ff00::/8</td><td>Sending to a group of devices at once</td></tr>
</tbody></table></div>
<p>RFC 4291 requires every interface to have a link-local address and says routers must not forward packets with link-local source or destination addresses. Seeing an fe80 address next to a working connection is normal, as our guide to <a href="/learn/what-is-a-169-254-ip-address">169.254 and link-local addresses</a> explains.</p>

<h2>Why does my device have several IPv6 addresses?</h2>
<p>A typical phone or laptop has a link-local address, a stable global address and one or more temporary addresses. Temporary addresses are a privacy feature defined in RFC 8981: the device generates a random address and switches to a new one over time, so websites cannot follow it by a fixed address. RFC 8981 sets the default preferred lifetime of a temporary address at one day.</p>

<h2>IPv6 and NAT</h2>
<p>IPv6 normally works without NAT. Each device gets a public address, and your router's firewall decides which incoming connections are allowed. That makes hosting and peer-to-peer connections simpler, and it means port forwarding is replaced by firewall rules. Keep the router firewall on.</p>

<h2>How to check if you have IPv6</h2>
<ol>
<li>Open the <a href="/">ipcomet home page</a>. If the IPv6 line shows an address, your connection supports IPv6; "Not detected" means it does not.</li>
<li>On Windows, run <code>ipconfig</code> and look for an IPv6 address that does not start with fe80. On a Mac or Linux, run <code>ifconfig</code> or <code>ip -6 addr</code>.</li>
<li>If you use a VPN, check that your real IPv6 address does not show up, using our guide to <a href="/learn/is-my-vpn-working">testing a VPN</a>.</li>
</ol>
<p>For how the two versions compare side by side, read <a href="/learn/ipv4-vs-ipv6">IPv4 vs IPv6</a>.</p>

<h2>Frequently asked questions</h2>
<h3>Is IPv6 better than IPv4?</h3>
<p>It solves the address shortage and removes the need for NAT, which simplifies many things. Speed depends on the network path more than the protocol version, so most people will not notice a difference in everyday browsing.</p>
<h3>Should I turn off IPv6?</h3>
<p>Usually not. Modern systems prefer IPv6 when it works and fall back to IPv4 when it does not. Turning it off can break some services and rarely fixes anything. If a VPN leaks your IPv6 address, use a VPN that handles IPv6 instead.</p>
<h3>Can websites see my IPv6 address?</h3>
<p>Yes, when you connect over IPv6 that address is what the website sees, just as with IPv4. Temporary addresses limit how long one address follows you.</p>
<h3>What is my IPv6 address?</h3>
<p>Our <a href="/">IP checker</a> shows it under your main address. Your device may also list a link-local fe80 address, which is local only and not what websites see.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8200" rel="noopener">RFC 8200: Internet Protocol, Version 6 (IPv6) Specification (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc4291" rel="noopener">RFC 4291: IP Version 6 Addressing Architecture (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc5952" rel="noopener">RFC 5952: A Recommendation for IPv6 Address Text Representation (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8981" rel="noopener">RFC 8981: Temporary Address Extensions for IPv6 (IETF)</a></li></ul>
`,
  "what-is-my-ip-address": `
<p><strong>Your IP address</strong> is the public number your internet connection uses when it talks to websites and apps. It is assigned by your internet provider, every site you visit sees it, and you can <a href="/">check what your IP address is</a> at the top of the ipcomet home page in about a second.</p>
<p>The short answer gets more interesting once you notice that most people have more than one address. Your router has a public one, your phone or laptop has a private one inside your home network, and many connections now have an IPv6 address as well as an IPv4 one. This guide explains which of them counts as "my IP", why different tools can disagree, and how to check each one.</p>

<h2>Which IP address is "my IP"?</h2>
<p>When people ask "what is my IP address", they almost always mean the public address that websites see. The other addresses matter for setting up a home network or fixing a problem, but they never leave your local network.</p>
<div class="tw"><table><tbody>
<tr><th>Address</th><th>Example</th><th>Who sees it</th><th>Where to find it</th></tr>
<tr><td>Public IPv4</td><td class="mono">203.0.113.42</td><td>Every website and app you use</td><td>The big number on the <a href="/">ipcomet home page</a></td></tr>
<tr><td>Public IPv6</td><td class="mono">2001:db8:4f2a::1c</td><td>Websites you reach over IPv6</td><td>The IPv6 line under it on the same page</td></tr>
<tr><td>Private (local) IPv4</td><td class="mono">192.168.1.23</td><td>Only devices on your home or office network</td><td>Your device's network settings</td></tr>
<tr><td>Link-local IPv6</td><td class="mono">fe80::1c</td><td>Only the local network segment</td><td>Your device's network settings</td></tr>
</tbody></table></div>
<p>The example addresses in this guide come from ranges set aside for documentation (<a href="https://www.rfc-editor.org/rfc/rfc5737" rel="noopener">RFC 5737</a> for IPv4 and <a href="https://www.rfc-editor.org/rfc/rfc3849" rel="noopener">RFC 3849</a> for IPv6), so they do not belong to anyone. For a deeper look at the split between the first and third rows, read <a href="/learn/public-vs-private-ip-address">public vs private IP addresses</a>.</p>

<h2>What is my public IP address?</h2>
<p>Your public IP address is the one your internet provider gives to your connection. At home it belongs to your router, and every phone, laptop and TV behind that router shares it. The router keeps track of which device asked for what, a job called <a href="/learn/what-is-nat">network address translation (NAT)</a>, so a website only ever sees the router's public address.</p>
<p>On mobile data the public address belongs to your provider's network rather than your phone alone, and it usually changes when you move between Wi-Fi and mobile data. That is why your IP on a phone can look completely different from the one on your home computer, even when both are in the same room.</p>
<p>Some providers go one step further and share one public IPv4 address between many customers. If your router's own WAN address falls between 100.64.0.0 and 100.127.255.255, the 100.64.0.0/10 block that <a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598</a> reserves for carrier-grade NAT, the address websites see is not yours alone. Our guide to <a href="/learn/what-is-cgnat">CGNAT</a> shows how to tell and what it breaks.</p>

<h2>What is my IPv4 address?</h2>
<p>Your IPv4 address is the familiar four numbers separated by dots, each between 0 and 255. IPv4 addresses are 32 bits long, as defined in <a href="https://www.rfc-editor.org/rfc/rfc791" rel="noopener">RFC 791</a>, the original Internet Protocol specification from 1981, which allows about 4.3 billion addresses in total. That limit is the reason home networks share one public address and why providers use carrier-grade NAT.</p>
<p>ipcomet shows your public IPv4 address as the main number, even when your browser happened to connect over IPv6. IPv4 is still the address most people are asked for by games, remote-access tools and support teams. Your IPv6 address appears on the line below it.</p>

<h2>What is my IPv6 address?</h2>
<p>Your IPv6 address is the longer one written in groups of letters and numbers separated by colons. IPv6 addresses are 128 bits long under <a href="https://www.rfc-editor.org/rfc/rfc8200" rel="noopener">RFC 8200</a>, enough for every device to have its own public address without sharing. If the IPv6 line on the home page says it was not detected, your provider or network does not offer IPv6 yet, which is still common and nothing to fix.</p>
<p>Two things make IPv6 addresses look unstable:</p>
<ul>
<li><strong>Temporary addresses.</strong> Most phones and computers create random temporary IPv6 addresses for outgoing connections and replace them over time, so sites cannot follow one address for long. <a href="https://www.rfc-editor.org/rfc/rfc8981" rel="noopener">RFC 8981</a> sets a default of one day before a new one is preferred and two days before the old one stops working.</li>
<li><strong>IPv6 is tried first.</strong> When a site supports both versions, browsers and operating systems usually prefer IPv6 and fall back to IPv4 if it is slow. <a href="https://www.rfc-editor.org/rfc/rfc8305" rel="noopener">RFC 8305</a>, the "Happy Eyeballs" method, assumes this preference and recommends waiting about 250 milliseconds before trying the other version.</li>
</ul>
<p>So a site that shows only one address may show your IPv6 address on one visit and your IPv4 address on another. Our guide to <a href="/learn/what-is-ipv6">IPv6</a> covers the address format and types in detail.</p>

<h2>What is my private IP address?</h2>
<p>Your private IP address identifies your device inside your own network, and websites never see it. <a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918</a> reserves three blocks for this use: 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255 and 192.168.0.0 to 192.168.255.255. Most home routers hand out addresses that start with 192.168 or 10.</p>
<p>You need the private address when you set up port forwarding, connect to a printer or reach another computer at home. The quickest ways to see it:</p>
<ul>
<li>Windows: open Command Prompt and run <code>ipconfig</code>, then read the IPv4 Address line.</li>
<li>Mac: run <code>ipconfig getifaddr en0</code> in Terminal for Wi-Fi.</li>
<li>Linux: run <code>ip addr</code> and look at the <code>inet</code> line of your active connection.</li>
</ul>
<p>Phones show it under the details of the Wi-Fi network you are connected to. Our guide on <a href="/learn/how-to-find-your-ip-address">how to find your IP address</a> has the steps for every device, and <a href="/learn/find-router-ip-address">finding your router's IP address</a> covers the gateway address.</p>

<h2>Why do different sites show a different IP address?</h2>
<p>Two IP checkers can both be right and still disagree. The usual reasons, in the order we would check them:</p>
<div class="tw"><table><tbody>
<tr><th>What you see</th><th>Likely reason</th><th>What to do</th></tr>
<tr><td>One site shows IPv4, another shows IPv6</td><td>Your connection has both, and each site connected over a different one</td><td>Compare the IPv4 and IPv6 lines on the <a href="/">home page</a></td></tr>
<tr><td>The address changed since yesterday</td><td>Your provider assigns a dynamic address, or your IPv6 temporary address rotated</td><td>Read <a href="/learn/why-does-my-ip-address-change">why your IP address changes</a></td></tr>
<tr><td>A VPN's address on one site, your real one on another</td><td>The VPN is off in one browser, or a browser extension proxies only some tabs</td><td>Run a <a href="/webrtc">WebRTC leak test</a> and see <a href="/learn/is-my-vpn-working">is my VPN working</a></td></tr>
<tr><td>Phone and laptop show different addresses</td><td>One is on mobile data and the other on Wi-Fi</td><td>Switch both to the same network and check again</td></tr>
<tr><td>Your router's WAN address differs from the website's answer</td><td>Your provider uses carrier-grade NAT</td><td>Read <a href="/learn/what-is-cgnat">what CGNAT is</a></td></tr>
</tbody></table></div>
<p>The location next to your address can also look wrong, because it comes from a database of address blocks rather than GPS. Our guide to <a href="/learn/why-is-my-ip-location-wrong">why your IP location is wrong</a> explains why it often points to your provider's nearest hub.</p>

<h2>How do I check my IP address from a terminal?</h2>
<p>Request the ipcomet home page with curl over HTTPS and it replies with your public address as a single line of text:</p>
<pre><code>curl https://ipcomet.com</code></pre>
<p>We ran this on 30 October 2026 and got back the address and nothing else. Add <code>-4</code> or <code>-6</code> after <code>curl</code> to ask for a specific version. Include <code>https://</code>: a plain <code>http://</code> request is redirected, and curl prints the redirect page unless you add <code>-L</code>. For scripts, <code>https://ipcomet.com/api/ip</code> always returns plain text. The <a href="/developers">free IP API page</a> lists every endpoint, and our guide to <a href="/learn/get-public-ip-address-command-line">getting your public IP from the command line</a> covers CMD, PowerShell and Terminal.</p>

<h2>Is it a problem that websites can see my IP address?</h2>
<p>For most people, no. Your public address shows roughly where your provider connects you, often your city or region, and which provider you use. It does not show your name, your street address or your browsing history. Only your provider can match an address to a customer account, and it normally does so only for legal requests.</p>
<p>If you want to keep your address from the sites you visit, a VPN or a proxy replaces it with theirs. Read <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address</a> for the limits, and <a href="/learn/how-to-hide-your-ip-address">how to hide your IP address</a> for the options.</p>

<h2>Frequently asked questions</h2>
<h3>Is my IP address the same as my Wi-Fi address?</h3>
<p>Not quite. Your device has a private address on your Wi-Fi network, such as 192.168.1.23, and the router has the public address websites see. "My IP" usually means the public one.</p>
<h3>Do all devices in my house have the same IP address?</h3>
<p>They share one public IPv4 address through the router, so websites see the same address for all of them. Each device still has its own private address, and over IPv6 each device usually has its own public address too.</p>
<h3>Can two people have the same IP address?</h3>
<p>Yes. Everyone on the same home network shares one public IPv4 address, and providers that use carrier-grade NAT share one address between many customers at the same time.</p>
<h3>What is my IP address on my phone?</h3>
<p>Open the <a href="/">ipcomet home page</a> in your phone's browser. On Wi-Fi you will see your router's public address, and on mobile data you will see your carrier's.</p>
<h3>Does my IP address change?</h3>
<p>Most home and mobile connections get dynamic addresses that can change after a router restart, a reconnect or a set lease time. IPv6 temporary addresses also rotate on their own. A fixed address is usually a paid option from your provider.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc791" rel="noopener">RFC 791: Internet Protocol (IETF, 1981)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8200" rel="noopener">RFC 8200: Internet Protocol, Version 6 (IPv6) Specification (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1918" rel="noopener">RFC 1918: Address Allocation for Private Internets (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc6598" rel="noopener">RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8981" rel="noopener">RFC 8981: Temporary Address Extensions for Stateless Address Autoconfiguration in IPv6 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8305" rel="noopener">RFC 8305: Happy Eyeballs Version 2 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc5737" rel="noopener">RFC 5737: IPv4 Address Blocks Reserved for Documentation (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc3849" rel="noopener">RFC 3849: IPv6 Address Prefix Reserved for Documentation (IETF)</a></li></ul>
`,
  "my-ip": `
<p><strong>My IP</strong> is the quickest way to see what your internet connection tells every website you visit. That includes your public IP address, the area it appears to come from, the provider and network that own it, and how your browser connected. Open the <a href="/">ipcomet IP checker</a> and you get all of it on one page. This guide goes through each line of that result, what it means, where it comes from and how far you can trust it.</p>
<p>If you only want to know which of your addresses is "the" IP address, start with <a href="/learn/what-is-my-ip-address">what is my IP address</a>. This page is about everything that comes with it.</p>

<h2>What does a "my IP" result show?</h2>
<p>The ipcomet home page groups your result into four parts. Every value is worked out from the request your browser just made, and nothing is stored.</p>
<div class="tw"><table><tbody>
<tr><th>Group</th><th>Fields</th><th>How reliable</th></tr>
<tr><td>Address</td><td>IPv4, IPv6, IP version</td><td>Exact: this is the address our server saw</td></tr>
<tr><td>Location</td><td>City, country, postal code, timezone, coordinates</td><td>Approximate: country is usually right, city often is not</td></tr>
<tr><td>Network</td><td>ISP, ASN, network type, hostname</td><td>ISP and ASN are reliable; network type is a best guess</td></tr>
<tr><td>Connection</td><td>Protocol, encryption, edge location, latency to edge</td><td>Exact for this one request</td></tr>
</tbody></table></div>

<h2>My IP address: the IPv4 and IPv6 lines</h2>
<p>The big number at the top is your public IPv4 address, such as <code>203.0.113.42</code>, and the line below it shows your IPv6 address if your connection has one. "IP version" says which of the two your browser used to reach us. Both are exact: they are the addresses the request arrived from, not a lookup.</p>
<p>If you see an address you do not recognise, the usual reasons are a VPN or proxy, mobile data instead of Wi-Fi, or a provider that shares one address between customers. <a href="/learn/what-is-my-ip-address">What is my IP address</a> explains each case.</p>

<h2>My IP location: city, postal code and coordinates</h2>
<p>The location is an estimate. It does not come from GPS or your device. It comes from geolocation databases that map blocks of IP addresses to places, and ipcomet reads it from Cloudflare's own geolocation data for the address you connected from. That is why the result page says the location "often points to your ISP's nearest hub instead of your home".</p>
<ul>
<li><strong>Country</strong> is usually right, because address blocks are registered to organisations in a specific country.</li>
<li><strong>City and region</strong> are often the city where your provider routes traffic, which can be a neighbouring town or, on mobile data, a city hundreds of kilometres away.</li>
<li><strong>Postal code and coordinates</strong> describe a point for the whole area. They are not your house, and two neighbours on the same provider can see the same coordinates.</li>
</ul>
<p>Networks can publish where their addresses are used in a "geofeed", a format defined in <a href="https://www.rfc-editor.org/rfc/rfc8805" rel="noopener">RFC 8805</a>, and database providers can use it to correct their data. If your location is wrong, our guide to <a href="/learn/why-is-my-ip-location-wrong">why your IP location is wrong</a> explains how to report it. To check any other address, use the <a href="/lookup">IP lookup</a>.</p>

<h2>Timezone</h2>
<p>The timezone is shown as a name from the <a href="https://www.iana.org/time-zones" rel="noopener">IANA Time Zone Database</a>, such as <code>Asia/Kolkata</code> or <code>Europe/Berlin</code>. That database records the history of local time, including offsets and daylight saving rules, for representative locations worldwide. Websites use it to show times in your local zone. It is derived from the estimated location, so it is right whenever the country and region are.</p>

<h2>My ISP and ASN</h2>
<p>The ISP line names the organisation that holds the block your address belongs to. For a home connection that is your internet provider. For a VPN, a company network or a cloud server it is the operator of that network, which is why a VPN user often sees a hosting company here.</p>
<p>The ASN is that network's autonomous system number. <a href="https://www.rfc-editor.org/rfc/rfc1930" rel="noopener">RFC 1930</a> defines an autonomous system as a connected group of IP prefixes run by one or more network operators under a single routing policy. <a href="https://www.iana.org/numbers" rel="noopener">IANA</a> hands out pools of addresses and AS numbers to the five regional internet registries (AFRINIC, APNIC, ARIN, LACNIC and RIPE NCC), which assign them to networks in their regions. One ASN can cover millions of customers, so it identifies your provider, not you. The <a href="/asn-lookup">ASN lookup</a> shows who holds any AS number and which prefixes it announces, and <a href="/learn/what-is-my-isp">what is my ISP</a> covers the provider side in more detail.</p>

<h2>Network type</h2>
<p>Network type is ipcomet's best guess at what kind of network owns the address: a residential or mobile provider, a hosting company or data center, or a VPN service. It is based on who owns the address block and on hints in its hostname, so treat it as a strong clue rather than proof.</p>
<p>Some sites score visitors by the kind of network their address comes from, so this line can explain why a VPN triggers extra checks. The <a href="/reputation">IP reputation check</a> goes further and tests whether your address is a known Tor exit or appears on public blocklists, and <a href="/learn/is-my-vpn-working">is my VPN working</a> shows how to use these signals to test a VPN.</p>

<h2>Hostname</h2>
<p>The hostname is the reverse DNS name of your address, also called a PTR record. Your provider sets it, and it often contains clues such as a city code, the word "dynamic" or part of your address. Many home connections have none, so an empty hostname is normal. Our guide to <a href="/learn/what-is-reverse-dns">reverse DNS</a> explains why mail servers check it, and the <a href="/reverse-dns">reverse DNS tool</a> looks up the hostname for any address.</p>

<h2>Connection: protocol, encryption, edge location and latency</h2>
<p>These four lines describe how your browser reached ipcomet, not your IP address itself.</p>
<ul>
<li><strong>Protocol</strong> is the HTTP version your browser used, usually HTTP/2 (<a href="https://www.rfc-editor.org/rfc/rfc9113" rel="noopener">RFC 9113</a>) or HTTP/3 (<a href="https://www.rfc-editor.org/rfc/rfc9114" rel="noopener">RFC 9114</a>). HTTP/3 runs over QUIC, which recovers lost data per stream, so one lost packet does not hold up every other request the way it can with HTTP/2 over TCP.</li>
<li><strong>Encryption</strong> shows the TLS version and cipher, such as TLS 1.3, the current version defined in <a href="https://www.rfc-editor.org/rfc/rfc8446" rel="noopener">RFC 8446</a>.</li>
<li><strong>Edge location</strong> is the Cloudflare data center that answered. Cloudflare <a href="https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/" rel="noopener">names data centers</a> after the IATA code of a nearby major airport, so <code>FRA</code> is Frankfurt and <code>MRS</code> is Marseille.</li>
<li><strong>Latency to edge</strong> is the round-trip time between you and that data center, in milliseconds.</li>
</ul>
<p>The edge is not always the nearest one. Cloudflare announces the same addresses from many data centers, and your provider's routing and peering decide which one receives your request. In a test from India on 30 October 2026 our request was answered by MRS, Marseille, at 131 to 174 milliseconds, a data center in France. If your latency looks high, the <a href="/ping">ping test</a> measures it properly over many samples, and <a href="/learn/what-is-ping">what is ping</a> explains what counts as good.</p>

<h2>What my IP does not reveal</h2>
<p>Your IP result does not show your name, your street address, your email or what you browse. A website sees the same public address for everyone behind your router. Only your provider can link an address to a customer account, and it normally does so only when the law requires it.</p>
<p>What websites can add on top of your IP is everything your browser sends with each request. <a href="/learn/what-your-browser-reveals">What your browser reveals</a> covers that side, and <a href="/learn/can-someone-track-you-by-ip-address">can someone track you by your IP address</a> covers the realistic risks.</p>

<h2>Frequently asked questions</h2>
<h3>Why does my IP show a different city?</h3>
<p>The city comes from a database of address blocks, and it often names the city where your provider connects you to the internet. On mobile data that can be far away. The address itself is still correct.</p>
<h3>Is my IP location my real location?</h3>
<p>No. It is an estimate for the area your address belongs to. The postal code and coordinates are a point for that area, not your home.</p>
<h3>What does the AS number on my IP mean?</h3>
<p>It identifies the network that owns your address, usually your internet provider. Millions of customers can share one AS number.</p>
<h3>Why is my hostname empty?</h3>
<p>Your provider has not set a reverse DNS name for your address. That is common on home connections and does not affect browsing.</p>
<h3>Does ipcomet keep a record of my IP?</h3>
<p>No. The result is worked out for your request and shown back to you, and ipcomet's own code does not store or log the addresses it sees. The <a href="/privacy">privacy policy</a> and the <a href="/about">About page</a> list where each piece of data comes from.</p>

<h2>Sources and further reading</h2>
<ul><li><a href="https://www.rfc-editor.org/rfc/rfc8805" rel="noopener">RFC 8805: A Format for Self-Published IP Geolocation Feeds (IETF)</a></li><li><a href="https://www.iana.org/time-zones" rel="noopener">IANA: Time Zone Database</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1930" rel="noopener">RFC 1930: Guidelines for creation, selection, and registration of an Autonomous System (IETF)</a></li><li><a href="https://www.iana.org/numbers" rel="noopener">IANA: Number Resources</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc9113" rel="noopener">RFC 9113: HTTP/2 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc9114" rel="noopener">RFC 9114: HTTP/3 (IETF)</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc8446" rel="noopener">RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3 (IETF)</a></li><li><a href="https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/" rel="noopener">Cloudflare: traffic not being sent to the geographically closest data center</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc5737" rel="noopener">RFC 5737: IPv4 Address Blocks Reserved for Documentation (IETF)</a></li></ul>
`,
};
