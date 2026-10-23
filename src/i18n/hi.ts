import type { LocaleData } from "./types";

/**
 * Hindi ("आप"). Interface strings are keyed by the English text (see types.ts). Placeholders such as {n} must stay
 * exactly as written. Common technical terms (IP, DNS, VPN, ISP, ASN) stay in English, as on most Hindi tech sites.
 * The guides are not translated yet, so strings that point to them say "(EN)".
 */
export const hi: LocaleData = {
  ui: {
    "8.8.8.8 or example.com": "8.8.8.8 या example.com",
    "(redirects to {url})": "({url} पर रीडायरेक्ट)",
    "© {year} ipcomet. Served from the Cloudflare network, close to you.": "© {year} ipcomet. Cloudflare नेटवर्क से, आपके नज़दीक से परोसा गया।",
    ASN: "ASN",
    About: "हमारे बारे में",
    "About and methodology": "हमारे बारे में और कार्यप्रणाली",
    "Contact": "संपर्क",
    "About {name}": "{name} के बारे में",
    "Accepted formats: {formats}. Your proxy details are used for this one check and are never stored or logged.":
      "स्वीकार्य फ़ॉर्मैट: {formats}। आपके प्रॉक्सी की जानकारी केवल इसी जाँच के लिए इस्तेमाल होती है और कभी सहेजी या लॉग नहीं की जाती।",
    "Add your credentials and check again.": "अपने क्रेडेंशियल जोड़ें और फिर से जाँचें।",
    "All articles →": "सभी गाइड (EN) →",
    "All languages": "सभी भाषाएँ",
    "All records": "सभी रिकॉर्ड",
    "All tools": "सभी टूल",
    Architecture: "आर्किटेक्चर",
    "Auto-detect": "अपने आप पहचानें",
    Average: "औसत",
    Best: "सबसे अच्छा",
    "Blocklist checks are not available for this address.": "इस पते के लिए ब्लॉकलिस्ट जाँच उपलब्ध नहीं है।",
    "Blocklist checks cover IPv4 only.": "ब्लॉकलिस्ट जाँच केवल IPv4 के लिए है।",
    Blocklists: "ब्लॉकलिस्ट",
    Broadcast: "ब्रॉडकास्ट",
    Browser: "ब्राउज़र",
    "Built and maintained by {name}.": "{name} द्वारा बनाया और संभाला गया।",
    "Count visits with Google Analytics? It uses cookies. Declining changes nothing else on the site.": "Google Analytics से विज़िट गिनें? यह कुकीज़ इस्तेमाल करता है। मना करने से साइट में और कुछ नहीं बदलता।",
    Accept: "स्वीकार करें",
    Decline: "अस्वीकार करें",
    "Analytics choices": "एनालिटिक्स विकल्प",
    "Analytics consent": "एनालिटिक्स की सहमति",
    CIDR: "CIDR",
    "CIDR block": "CIDR ब्लॉक",
    "CPU threads": "CPU थ्रेड",
    Calculate: "गणना करें",
    "Check IP": "IP जाँचें",
    "Check my IP": "मेरा IP देखें",
    "Check port": "पोर्ट जाँचें",
    "Check proxy": "प्रॉक्सी जाँचें",
    "Check the host and port, and that the proxy is online and reachable from the internet.": "होस्ट और पोर्ट जाँचें, और यह भी कि प्रॉक्सी ऑनलाइन है और इंटरनेट से पहुँच योग्य है।",
    "Check the host and port, and that the proxy is online.": "होस्ट और पोर्ट जाँचें, और यह भी कि प्रॉक्सी ऑनलाइन है।",
    "Check the host and port. Some providers use a different port for SOCKS5 than for HTTP, and some only accept allow-listed IP addresses.":
      "होस्ट और पोर्ट जाँचें। कुछ प्रदाता SOCKS5 के लिए HTTP से अलग पोर्ट इस्तेमाल करते हैं, और कुछ केवल अनुमत IP पते स्वीकार करते हैं।",
    "Check whether it looks like a VPN, proxy, Tor exit or data center, and whether it is on spam and abuse blocklists.":
      "जाँचें कि यह VPN, प्रॉक्सी, Tor एग्ज़िट या डेटा सेंटर जैसा दिखता है या नहीं, और क्या यह स्पैम और दुरुपयोग की ब्लॉकलिस्ट में है।",
    "Checked {ip} in {ms} ms.": "{ip} को {ms} ms में जाँचा गया।",
    "Checking blocklists and network type…": "ब्लॉकलिस्ट और नेटवर्क का प्रकार जाँचा जा रहा है…",
    "Checking {ip} from Cloudflare's network. You can only test your own IP, and a service must be running and allowed through your firewall and router for a port to show as open.":
      "Cloudflare के नेटवर्क से {ip} जाँचा जा रहा है। आप केवल अपना IP जाँच सकते हैं, और पोर्ट के खुला दिखने के लिए कोई सेवा चल रही होनी चाहिए और आपके फ़ायरवॉल व राउटर से अनुमत होनी चाहिए।",
    "Checking…": "जाँच हो रही है…",
    "Checking… {i} of {total}": "जाँच हो रही है… {i} / {total}",
    City: "शहर",
    Clean: "साफ़",
    "Color depth": "रंग गहराई",
    "Connect to proxy": "प्रॉक्सी से कनेक्शन",
    "Connecting through your proxy. This usually takes 5 to 15 seconds…": "आपके प्रॉक्सी से कनेक्ट हो रहा है। इसमें आमतौर पर 5 से 15 सेकंड लगते हैं…",
    "Connecting…": "कनेक्ट हो रहा है…",
    Connection: "कनेक्शन",
    "Cookies enabled": "कुकीज़ चालू",
    Coordinates: "निर्देशांक",
    Copied: "कॉपी हो गया",
    Copy: "कॉपी करें",
    "Copy IP": "IP कॉपी करें",
    "Could not check": "जाँच नहीं हो सकी",
    "Could not connect to the proxy.": "प्रॉक्सी से कनेक्ट नहीं हो सका।",
    "Could not open a connection to the proxy.": "प्रॉक्सी से कनेक्शन नहीं खुल सका।",
    "Could not reach the proxy.": "प्रॉक्सी तक पहुँचा नहीं जा सका।",
    "Could not resolve that domain right now.": "अभी उस डोमेन को रिज़ॉल्व नहीं किया जा सका।",
    "Could not resolve the proxy hostname right now. Please try again.": "अभी प्रॉक्सी का होस्टनेम रिज़ॉल्व नहीं हो सका। कृपया फिर से कोशिश करें।",
    Country: "देश",
    "Credentials sent": "क्रेडेंशियल भेजे गए",
    "Cross-site requests are not allowed.": "क्रॉस-साइट अनुरोधों की अनुमति नहीं है।",
    DNSSEC: "DNSSEC",
    "DNS resolver unavailable. Please try again.": "DNS रिज़ॉल्वर उपलब्ध नहीं है। कृपया फिर से कोशिश करें।",
    "Dark mode": "डार्क मोड",
    Details: "विवरण",
    "Device model": "डिवाइस मॉडल",
    Display: "डिस्प्ले",
    "Do Not Track": "Do Not Track",
    Domain: "डोमेन",
    "Domain or IP": "डोमेन या IP",
    Done: "पूरा हुआ",
    Download: "डाउनलोड",
    "Download sample": "डाउनलोड नमूना",
    "Download speed": "डाउनलोड स्पीड",
    "Edge location": "एज लोकेशन",
    Encryption: "एन्क्रिप्शन",
    "English guide · {n} min read": "अंग्रेज़ी गाइड · {n} मिनट पढ़ना",
    "Enter a port between 1 and 65535.": "1 से 65535 के बीच कोई पोर्ट दर्ज करें।",
    "Enter a proxy, such as host:port or user:password@host:port.": "कोई प्रॉक्सी दर्ज करें, जैसे host:port या user:password@host:port।",
    "Enter a valid IPv4 or IPv6 address.": "मान्य IPv4 या IPv6 पता दर्ज करें।",
    "Enter a valid domain name or IP address.": "मान्य डोमेन नाम या IP पता दर्ज करें।",
    "Enter a valid domain or IP address.": "मान्य डोमेन या IP पता दर्ज करें।",
    "Enter a valid proxy hostname or IP address.": "मान्य प्रॉक्सी होस्टनेम या IP पता दर्ज करें।",
    "Enter a website name for the target, not an IP address.": "लक्ष्य के लिए किसी वेबसाइट का नाम दर्ज करें, IP पता नहीं।",
    "Enter an IP address or domain.": "कोई IP पता या डोमेन दर्ज करें।",
    "Enter an IP address, e.g. 8.8.8.8": "कोई IP पता दर्ज करें, जैसे 8.8.8.8",
    "Enter an IP address, for example 8.8.8.8. For a domain name, use the DNS lookup instead.":
      "कोई IP पता दर्ज करें, जैसे 8.8.8.8। डोमेन नाम के लिए इसकी जगह DNS लुकअप इस्तेमाल करें।",
    "Enter an IPv4 or IPv6 address, optionally followed by /prefix (for example 192.168.1.0/24).":
      "IPv4 या IPv6 पता दर्ज करें, चाहें तो उसके बाद /प्रीफ़िक्स भी (जैसे 192.168.1.0/24)।",
    "Enter one proxy at a time, without spaces.": "एक बार में एक ही प्रॉक्सी दर्ज करें, बिना स्पेस के।",
    Error: "त्रुटि",
    "Everything you need to inspect, test and troubleshoot a connection, with no sign-up.": "कनेक्शन को जाँचने, परखने और उसकी समस्या ढूँढने के लिए ज़रूरी सब कुछ, बिना साइन-अप के।",
    "Excellent. This is great for online gaming and video calls.": "बहुत बढ़िया। ऑनलाइन गेमिंग और वीडियो कॉल के लिए शानदार।",
    "Exit IP": "एग्ज़िट IP",
    "Exit IP and reputation": "एग्ज़िट IP और प्रतिष्ठा",
    "Exit IPs seen": "दिखे एग्ज़िट IP",
    Expires: "समाप्ति तिथि",
    "Fair. Fine for browsing and calls, and you may notice lag in fast games.": "ठीक-ठाक। ब्राउज़िंग और कॉल के लिए ठीक है, तेज़ गेम में लैग महसूस हो सकता है।",
    "Fast, private network tools. Find your IP address, look up DNS and WHOIS records, test your speed and more.":
      "तेज़ और निजी नेटवर्क टूल। अपना IP पता खोजें, DNS और WHOIS रिकॉर्ड देखें, अपनी स्पीड जाँचें और बहुत कुछ।",
    "First address": "पहला पता",
    "First host": "पहला होस्ट",
    "Free network tools": "मुफ़्त नेटवर्क टूल",
    "Frequently asked questions": "अक्सर पूछे जाने वाले सवाल",
    "Gathering WebRTC candidates…": "WebRTC कैंडिडेट इकट्ठा हो रहे हैं…",
    "Good. Fine for gaming, calls and everything else.": "अच्छा। गेमिंग, कॉल और बाकी सब कुछ के लिए ठीक।",
    "HTTP alt": "HTTP वैकल्पिक",
    Handle: "हैंडल",
    "Headers marked “added by proxy” come from the network in between, not from your browser. Websites can read all of the others.":
      "“प्रॉक्सी द्वारा जोड़ा गया” चिह्नित हेडर बीच के नेटवर्क से आते हैं, आपके ब्राउज़र से नहीं। वेबसाइटें बाकी सभी पढ़ सकती हैं।",
    Hide: "छिपाएँ",
    "High. You will notice lag. Try a wired connection, move closer to your router or restart it.":
      "ज़्यादा। आपको लैग महसूस होगा। वायर्ड कनेक्शन आज़माएँ, राउटर के पास जाएँ या उसे रीस्टार्ट करें।",
    Home: "होम",
    Hostname: "होस्टनेम",
    "Hosting or data center network": "होस्टिंग या डेटा सेंटर नेटवर्क",
    "If your provider uses IP allow-listing instead of a username and password, requests from our servers are not on your list, so this tool cannot test it.":
      "अगर आपका प्रदाता यूज़रनेम और पासवर्ड की जगह IP अनुमति-सूची इस्तेमाल करता है, तो हमारे सर्वरों के अनुरोध आपकी सूची में नहीं होते, इसलिए यह टूल उसे नहीं जाँच सकता।",
    "IP address": "IP पता",
    "IP address or domain": "IP पता या डोमेन",
    "IP version": "IP संस्करण",
    "IP websites see": "वेबसाइटों को दिखने वाला IP",
    "IPv6 example": "IPv6 उदाहरण",
    ISP: "ISP",
    "Is your IP flagged?": "क्या आपका IP फ़्लैग हुआ है?",
    "It may be the other protocol type, or it may be ignoring our servers.": "हो सकता है यह दूसरे प्रोटोकॉल का हो, या यह हमारे सर्वरों को अनदेखा कर रहा हो।",
    "It may be the other protocol type, or it may not accept connections from our servers.":
      "हो सकता है यह दूसरे प्रोटोकॉल का हो, या यह हमारे सर्वरों से कनेक्शन स्वीकार न करता हो।",
    Jitter: "जिटर",
    "Known VPN or proxy network": "जाना-पहचाना VPN या प्रॉक्सी नेटवर्क",
    Language: "भाषा",
    "Last address": "आखिरी पता",
    "Last changed": "आखिरी बदलाव",
    "Last host": "आखिरी होस्ट",
    Latency: "लेटेंसी",
    "Latency to edge": "एज तक लेटेंसी",
    Learn: "गाइड (EN)",
    "Learn about IP addresses": "IP पतों के बारे में जानें (अंग्रेज़ी गाइड)",
    "Leave credentials out of the target address.": "लक्ष्य पते में क्रेडेंशियल न डालें।",
    "Leave empty to check your own IP": "अपना IP जाँचने के लिए खाली छोड़ें",
    "Likely a residential or mobile ISP": "संभवतः घरेलू या मोबाइल ISP",
    Listed: "सूची में",
    "Listed on {n} of {total} blocklists checked. This can affect email delivery and some websites.":
      "जाँची गई {total} ब्लॉकलिस्ट में से {n} में दर्ज है। इससे ईमेल डिलीवरी और कुछ वेबसाइटों पर असर पड़ सकता है।",
    "Listed on {n} of {total}: {names}": "{total} में से {n} सूचियों में दर्ज: {names}",
    "Loading…": "लोड हो रहा है…",
    "Local addresses": "लोकल पते",
    "Locale and system": "भाषा और सिस्टम",
    Location: "लोकेशन",
    "Location data is temporarily unavailable for this address. Please try again in a moment.":
      "इस पते के लिए लोकेशन डेटा अभी अस्थायी रूप से उपलब्ध नहीं है। कृपया थोड़ी देर में फिर कोशिश करें।",
    "Location is approximate. It comes from your IP address, not GPS, and often points to your ISP's nearest hub instead of your home.":
      "लोकेशन अनुमानित है। यह आपके IP पते से आती है, GPS से नहीं, और अक्सर आपके घर की जगह आपके ISP के सबसे नज़दीकी केंद्र की ओर इशारा करती है।",
    "Look up": "खोजें",
    "Look up hostname": "होस्टनेम खोजें",
    "My IP": "मेरा IP",
    "Looking up PTR record…": "PTR रिकॉर्ड खोजा जा रहा है…",
    "Looking up…": "खोजा जा रहा है…",
    Lookup: "खोजें",
    "Measured from Cloudflare's network near you{edge}, not from your device, and from one 1 MB sample, so use the numbers to compare proxies with each other. Tests run over encrypted HTTPS tunnels, so the transparent, anonymous and elite labels, which depend on HTTP headers, do not apply.":
      "आपके पास के Cloudflare नेटवर्क से मापा गया{edge}, आपके डिवाइस से नहीं, और केवल 1 MB के एक नमूने से, इसलिए इन आँकड़ों का इस्तेमाल प्रॉक्सी की आपस में तुलना के लिए करें। टेस्ट एन्क्रिप्टेड HTTPS टनल से चलते हैं, इसलिए HTTP हेडर पर निर्भर पारदर्शी, गुमनाम और एलीट लेबल लागू नहीं होते।",
    "Measured from your device to the nearest Cloudflare data center{colo}. It shows the quality of your own connection, not the route to a particular game server.":
      "आपके डिवाइस से सबसे नज़दीकी Cloudflare डेटा सेंटर तक मापा गया{colo}। यह आपके अपने कनेक्शन की गुणवत्ता दिखाता है, किसी खास गेम सर्वर तक का रास्ता नहीं।",
    "Measuring latency…": "लेटेंसी मापी जा रही है…",
    Memory: "मेमोरी",
    Mobile: "मोबाइल",
    "More tools": "और टूल",
    Nameservers: "नेमसर्वर",
    Network: "नेटवर्क",
    "Network address": "नेटवर्क पता",
    "Network type": "नेटवर्क का प्रकार",
    No: "नहीं",
    "No PTR record found for {q}. The owner has not set a reverse name, which is common for home connections.":
      "{q} के लिए कोई PTR रिकॉर्ड नहीं मिला। मालिक ने रिवर्स नाम सेट नहीं किया है, जो घरेलू कनेक्शन में आम बात है।",
    "No VPN or hosting signs found. Residential proxies and some VPNs cannot be detected from public data.":
      "VPN या होस्टिंग के कोई संकेत नहीं मिले। घरेलू प्रॉक्सी और कुछ VPN को सार्वजनिक डेटा से पहचाना नहीं जा सकता।",
    "No ads. Analytics only if you accept.": "कोई विज्ञापन नहीं। एनालिटिक्स केवल आपकी सहमति से।",
    "No answer": "कोई जवाब नहीं",
    "No credentials needed": "क्रेडेंशियल की ज़रूरत नहीं",
    "No registration record found for that IP.": "उस IP के लिए कोई पंजीकरण रिकॉर्ड नहीं मिला।",
    "No registration record found. The domain may not be registered, or its registry doesn't support RDAP.":
      "कोई पंजीकरण रिकॉर्ड नहीं मिला। हो सकता है डोमेन पंजीकृत न हो, या उसकी रजिस्ट्री RDAP का समर्थन न करती हो।",
    "No replies. Check your connection and try again.": "कोई जवाब नहीं आया। अपना कनेक्शन जाँचें और फिर कोशिश करें।",
    "No {type} records.": "कोई {type} रिकॉर्ड नहीं।",
    None: "कोई नहीं",
    "None (hidden by browser)": "कोई नहीं (ब्राउज़र ने छिपाया)",
    "None of the checks got an answer, so your connection may be offline.": "किसी भी जाँच को जवाब नहीं मिला, इसलिए हो सकता है आपका कनेक्शन ऑफ़लाइन हो।",
    "Not detected": "पता नहीं चला",
    "Not enough data came back to measure speed.": "स्पीड मापने के लिए पर्याप्त डेटा वापस नहीं आया।",
    "Not found": "नहीं मिला",
    "Not listed on any of the {total} blocklists that answered.": "जवाब देने वाली {total} ब्लॉकलिस्ट में से किसी में दर्ज नहीं है।",
    "Not listed on any of {total} checked": "जाँची गई {total} सूचियों में से किसी में दर्ज नहीं",
    "Not measured": "मापा नहीं गया",
    "Not sure what that means? Read {link}.": "समझ नहीं आया कि इसका क्या मतलब है? पढ़ें: {link}।",
    "Not working": "काम नहीं कर रहा",
    Off: "बंद",
    On: "चालू",
    Online: "ऑनलाइन",
    "Only https:// targets can be tested.": "केवल https:// लक्ष्यों की जाँच हो सकती है।",
    "Only the standard HTTPS port (443) can be tested.": "केवल मानक HTTPS पोर्ट (443) की जाँच हो सकती है।",
    "Open menu": "मेन्यू खोलें",
    "Operating system": "ऑपरेटिंग सिस्टम",
    Organization: "संगठन",
    "PTR query": "PTR क्वेरी",
    "Packet loss": "पैकेट लॉस",
    "Page not found": "पेज नहीं मिला",
    "Page not found.": "पेज नहीं मिला।",
    Parent: "पैरेंट",
    "Password (optional)": "पासवर्ड (वैकल्पिक)",
    "Pixel ratio": "पिक्सल अनुपात",
    "Port 25 can't be tested from Cloudflare Workers.": "पोर्ट 25 की जाँच Cloudflare Workers से नहीं हो सकती।",
    "Port checks only work from a public IP address, so they are unavailable on a local network.":
      "पोर्ट जाँच केवल सार्वजनिक IP पते से काम करती है, इसलिए लोकल नेटवर्क पर यह उपलब्ध नहीं है।",
    "Port number": "पोर्ट नंबर",
    "Port {port} is closed": "पोर्ट {port} बंद है",
    "Port {port} is open": "पोर्ट {port} खुला है",
    "Port {port}: no response": "पोर्ट {port}: कोई जवाब नहीं",
    "Port, e.g. 443": "पोर्ट, जैसे 443",
    "Postal code": "पिन कोड",
    "Prefix length must be between 0 and 128.": "प्रीफ़िक्स की लंबाई 0 से 128 के बीच होनी चाहिए।",
    "Prefix length must be between 0 and 32.": "प्रीफ़िक्स की लंबाई 0 से 32 के बीच होनी चाहिए।",
    "Press start to measure": "मापने के लिए स्टार्ट दबाएँ",
    Primary: "मुख्य",
    Privacy: "गोपनीयता",
    Protocol: "प्रोटोकॉल",
    Proxy: "प्रॉक्सी",
    "Proxy address": "प्रॉक्सी का पता",
    "Proxy handshake": "प्रॉक्सी हैंडशेक",
    "Proxy password": "प्रॉक्सी पासवर्ड",
    "Proxy type": "प्रॉक्सी का प्रकार",
    "Proxy username": "प्रॉक्सी यूज़रनेम",
    "Public IP via WebRTC": "WebRTC से सार्वजनिक IP",
    "Querying DNS…": "DNS से पूछा जा रहा है…",
    Range: "रेंज",
    "Ready when you are": "आप जब चाहें, हम तैयार हैं",
    "Record type": "रिकॉर्ड का प्रकार",
    Registered: "पंजीकरण तिथि",
    Registrar: "रजिस्ट्रार",
    "Related guides": "संबंधित गाइड (EN)",
    "Resolved from": "यहाँ से रिज़ॉल्व हुआ",
    Resolver: "रिज़ॉल्वर",
    "Resolver returned {rcode}.": "रिज़ॉल्वर ने {rcode} लौटाया।",
    "Results for {name} via {resolver} DNS": "{resolver} DNS से {name} के नतीजे",
    "Warm-up": "शुरुआत",
    "Warm-up, not counted": "शुरुआत, गिनी नहीं गई",
    "Speed over time. Run the test to draw it.": "समय के साथ स्पीड। ग्राफ़ बनाने के लिए टेस्ट शुरू करें।",
    "Download averaged {d} Mbps and upload {u} Mbps.": "औसत डाउनलोड {d} Mbps और अपलोड {u} Mbps।",
    "Test steps": "टेस्ट के चरण",
    "Idle latency": "खाली लाइन पर लेटेंसी",
    "Latency while downloading": "डाउनलोड के दौरान लेटेंसी",
    "Latency while uploading": "अपलोड के दौरान लेटेंसी",
    "Steady speed, Mbps": "स्थिर स्पीड, Mbps",
    "Round trip, nothing else running": "राउंड ट्रिप, और कुछ नहीं चल रहा",
    "How much the delay varies": "देरी कितनी बदलती है",
    "Loaded round trip": "लोड के दौरान राउंड ट्रिप",
    "Bufferbloat grade": "बफ़रब्लोट ग्रेड",
    "How much your latency rises when the line is busy. It decides whether calls and games stay smooth while someone else is downloading.": "लाइन व्यस्त होने पर आपकी लेटेंसी कितनी बढ़ती है। इसी से तय होता है कि कोई और डाउनलोड कर रहा हो तब भी कॉल और गेम सुचारू चलेंगे या नहीं।",
    "What this connection can handle": "यह कनेक्शन क्या संभाल सकता है",
    "4K streaming": "4K स्ट्रीमिंग",
    "HD video calls": "HD वीडियो कॉल",
    "Online gaming": "ऑनलाइन गेमिंग",
    "Uploading large files": "बड़ी फ़ाइलें अपलोड करना",
    "Peak {n} Mbps": "अधिकतम {n} Mbps",
    "Latency rose by {ms} ms under load.": "लोड के दौरान लेटेंसी {ms} ms बढ़ी।",
    "Calls and games should stay smooth even while the line is busy.": "लाइन व्यस्त होने पर भी कॉल और गेम सुचारू चलने चाहिए।",
    "You may notice lag in calls and games while someone else is downloading or uploading.": "जब कोई और डाउनलोड या अपलोड कर रहा हो, तब कॉल और गेम में रुकावट महसूस हो सकती है।",
    "Calls and games are likely to stutter whenever the line is busy. Smart queue management (SQM) on your router usually fixes this.": "लाइन व्यस्त होते ही कॉल और गेम अटक सकते हैं। राउटर पर स्मार्ट क्यू मैनेजमेंट (SQM) से यह आमतौर पर ठीक हो जाता है।",
    "Great": "बहुत अच्छा",
    "Works": "चल जाएगा",
    "Struggles": "मुश्किल",
    "This test moved {mb} MB in {s} seconds.": "इस टेस्ट ने {s} सेकंड में {mb} MB डेटा भेजा और पाया।",
    "Results reflect the path to the nearest Cloudflare data center{colo}, which is typically faster than a trip to a far-away server. Each direction runs until the speed settles (5 to 15 seconds), so on a fast line the test can use several hundred megabytes.": "नतीजे सबसे नज़दीकी Cloudflare डेटा सेंटर{colo} तक के रास्ते को दिखाते हैं, जो आमतौर पर किसी दूर के सर्वर से तेज़ होता है। हर दिशा तब तक चलती है जब तक स्पीड स्थिर न हो जाए (5 से 15 सेकंड), इसलिए तेज़ लाइन पर टेस्ट कई सौ मेगाबाइट इस्तेमाल कर सकता है।",
    Rotation: "रोटेशन",
    "Rotating: {ips} different IPs in {n} requests": "रोटेशन चालू: {n} अनुरोधों में {ips} अलग-अलग IP",
    "Run again": "फिर चलाएँ",
    "Run test": "टेस्ट चलाएँ",
    "Run the reputation check": "प्रतिष्ठा जाँच चलाएँ",
    SOCKS5: "SOCKS5",
    "Same exit IP in all {n} requests (static or sticky)": "सभी {n} अनुरोधों में वही एग्ज़िट IP (स्थिर या स्टिकी)",
    Screen: "स्क्रीन",
    Search: "खोजें",
    "Searching registry…": "रजिस्ट्री में खोजा जा रहा है…",
    "Short, plain-English guides on how the internet identifies you and what you can do about it.":
      "छोटे और सरल गाइड (अंग्रेज़ी में) कि इंटरनेट आपको कैसे पहचानता है और आप इस बारे में क्या कर सकते हैं।",
    Show: "दिखाएँ",
    "Sign-in": "साइन-इन",
    Sitemap: "साइटमैप",
    "Some requests failed: {errors}": "कुछ अनुरोध विफल रहे: {errors}",
    "Something accepted the connection.": "किसी ने कनेक्शन स्वीकार किया।",
    "Something went wrong on our side. Please try again.": "हमारी ओर से कुछ गड़बड़ हुई। कृपया फिर से कोशिश करें।",
    "Start ping test": "पिंग टेस्ट शुरू करें",
    "Start test": "टेस्ट शुरू करें",
    Status: "स्थिति",
    "Subnet mask": "सबनेट मास्क",
    "Success rate": "सफलता दर",
    TTL: "TTL",
    "Test a website through it, e.g. https://example.com (optional)": "इसके ज़रिए किसी वेबसाइट को जाँचें, जैसे https://example.com (वैकल्पिक)",
    "Test again": "फिर से टेस्ट करें",
    "Test for WebRTC leaks": "WebRTC लीक जाँचें",
    "Testing download…": "डाउनलोड परखा जा रहा है…",
    "Testing upload…": "अपलोड परखा जा रहा है…",
    "That doesn't look like a valid IP address or domain.": "यह मान्य IP पता या डोमेन जैसा नहीं दिखता।",
    "That IPv6 address is not valid. Use the format [address]:port.": "यह IPv6 पता मान्य नहीं है। [पता]:पोर्ट फ़ॉर्मैट इस्तेमाल करें।",
    "That is a private or reserved address.": "यह एक निजी या आरक्षित पता है।",
    "That is a private or reserved address. Only proxies reachable from the public internet can be tested.":
      "यह एक निजी या आरक्षित पता है। केवल सार्वजनिक इंटरनेट से पहुँच योग्य प्रॉक्सी की जाँच हो सकती है।",
    "That is a private or reserved address, so it has no public location.": "यह एक निजी या आरक्षित पता है, इसलिए इसकी कोई सार्वजनिक लोकेशन नहीं है।",
    "That is a private or reserved address, so it has no public reputation.": "यह एक निजी या आरक्षित पता है, इसलिए इसकी कोई सार्वजनिक प्रतिष्ठा नहीं है।",
    "That page doesn't exist. Try one of the tools below.": "यह पेज मौजूद नहीं है। नीचे दिए किसी टूल को आज़माएँ।",
    "That request is too large.": "यह अनुरोध बहुत बड़ा है।",
    "That target address is not a valid URL.": "यह लक्ष्य पता मान्य URL नहीं है।",
    "That target address is too long.": "यह लक्ष्य पता बहुत लंबा है।",
    "The SOCKS5 proxy sent an invalid reply.": "SOCKS5 प्रॉक्सी ने अमान्य जवाब भेजा।",
    "The connection closed before the full answer arrived.": "पूरा जवाब आने से पहले कनेक्शन बंद हो गया।",
    "The connection dropped while talking to the proxy.": "प्रॉक्सी से बात करते समय कनेक्शन टूट गया।",
    "The connection timed out. A firewall is probably silently dropping traffic, or the host is unreachable.":
      "कनेक्शन का समय समाप्त हो गया। संभवतः कोई फ़ायरवॉल चुपचाप ट्रैफ़िक गिरा रहा है, या होस्ट तक पहुँचा नहीं जा सकता।",
    "The connection was refused. Nothing is listening, or a firewall rejected it.": "कनेक्शन अस्वीकार हो गया। कुछ भी सुन नहीं रहा, या किसी फ़ायरवॉल ने उसे रोक दिया।",
    "The destination closed the connection without answering.": "गंतव्य ने बिना जवाब दिए कनेक्शन बंद कर दिया।",
    "The destination did not answer with valid HTTP.": "गंतव्य ने मान्य HTTP में जवाब नहीं दिया।",
    "The network owner or hostname matches a VPN or proxy provider.": "नेटवर्क का मालिक या होस्टनेम किसी VPN या प्रॉक्सी प्रदाता से मेल खाता है।",
    "The only public IPs WebRTC exposed match the ones websites already see. No leak.":
      "WebRTC ने जो सार्वजनिक IP उजागर किए, वे वही हैं जो वेबसाइटें पहले से देखती हैं। कोई लीक नहीं।",
    "The proxy asked for an authentication method this tool does not support.": "प्रॉक्सी ने ऐसी प्रमाणीकरण विधि माँगी जिसका यह टूल समर्थन नहीं करता।",
    "The proxy connected but did not answer in time.": "प्रॉक्सी से कनेक्ट हुआ, लेकिन उसने समय पर जवाब नहीं दिया।",
    "The proxy did not accept username and password authentication.": "प्रॉक्सी ने यूज़रनेम और पासवर्ड प्रमाणीकरण स्वीकार नहीं किया।",
    "The proxy may be intercepting HTTPS traffic, or it may be blocking this destination.": "हो सकता है प्रॉक्सी HTTPS ट्रैफ़िक बीच में रोक रहा हो, या इस गंतव्य को ब्लॉक कर रहा हो।",
    "The proxy may be overloaded or its upstream may be down.": "हो सकता है प्रॉक्सी पर ज़्यादा लोड हो, या उसका अपस्ट्रीम बंद हो।",
    "The proxy opened a tunnel but the test request timed out.": "प्रॉक्सी ने टनल खोली, लेकिन टेस्ट अनुरोध का समय समाप्त हो गया।",
    "The proxy refused the connection (HTTP 403).": "प्रॉक्सी ने कनेक्शन अस्वीकार कर दिया (HTTP 403)।",
    "The proxy rejected the username and password (HTTP 407).": "प्रॉक्सी ने यूज़रनेम और पासवर्ड अस्वीकार कर दिया (HTTP 407)।",
    "The proxy rejected the username and password.": "प्रॉक्सी ने यूज़रनेम और पासवर्ड अस्वीकार कर दिया।",
    "The proxy sent unexpected data after opening the tunnel.": "टनल खोलने के बाद प्रॉक्सी ने अप्रत्याशित डेटा भेजा।",
    "The registry did not respond. Please try again.": "रजिस्ट्री ने जवाब नहीं दिया। कृपया फिर से कोशिश करें।",
    "The registry took too long to respond. Please try again.": "रजिस्ट्री को जवाब देने में बहुत देर लगी। कृपया फिर से कोशिश करें।",
    "The resolver took too long to answer.": "रिज़ॉल्वर को जवाब देने में बहुत देर लगी।",
    "The server answered, but not like an HTTP proxy. If this is a SOCKS5 proxy, choose SOCKS5.":
      "सर्वर ने जवाब दिया, लेकिन HTTP प्रॉक्सी की तरह नहीं। अगर यह SOCKS5 प्रॉक्सी है, तो SOCKS5 चुनें।",
    "The server closed the connection without answering. It may not be an HTTP proxy, or it may not accept connections from our servers.":
      "सर्वर ने बिना जवाब दिए कनेक्शन बंद कर दिया। हो सकता है यह HTTP प्रॉक्सी न हो, या यह हमारे सर्वरों से कनेक्शन स्वीकार न करता हो।",
    "The server did not answer like a SOCKS5 proxy. If this is an HTTP proxy, choose HTTP.":
      "सर्वर ने SOCKS5 प्रॉक्सी की तरह जवाब नहीं दिया। अगर यह HTTP प्रॉक्सी है, तो HTTP चुनें।",
    "The server did not answer like an HTTP or SOCKS5 proxy.": "सर्वर ने HTTP या SOCKS5 प्रॉक्सी की तरह जवाब नहीं दिया।",
    "The server sent an oversized response header.": "सर्वर ने बहुत बड़ा रिस्पॉन्स हेडर भेजा।",
    "The target did not answer in time through this proxy.": "इस प्रॉक्सी से लक्ष्य ने समय पर जवाब नहीं दिया।",
    "The test couldn't complete. Your browser or network may be blocking WebRTC probes.":
      "टेस्ट पूरा नहीं हो सका। हो सकता है आपका ब्राउज़र या नेटवर्क WebRTC जाँच को रोक रहा हो।",
    "The test was interrupted. Check your connection and try again.": "टेस्ट बीच में रुक गया। अपना कनेक्शन जाँचें और फिर कोशिश करें।",
    "The tunnel opened, but the secure (TLS) connection through it failed.": "टनल खुली, लेकिन उसके ज़रिए सुरक्षित (TLS) कनेक्शन विफल हो गया।",
    "The username and password must each be 255 bytes or fewer.": "यूज़रनेम और पासवर्ड हर एक 255 बाइट या उससे कम का होना चाहिए।",
    "These are indicators, not proof. Spamhaus lists are not queried because Spamhaus blocks public DNS resolvers.":
      "ये संकेतक हैं, सबूत नहीं। Spamhaus की सूचियाँ नहीं पूछी जातीं क्योंकि Spamhaus सार्वजनिक DNS रिज़ॉल्वर को ब्लॉक करता है।",
    "This address belongs to a server network. VPNs, proxies and bots usually appear this way, while home users rarely do.":
      "यह पता किसी सर्वर नेटवर्क का है। VPN, प्रॉक्सी और बॉट आमतौर पर ऐसे ही दिखते हैं, जबकि घरेलू उपयोगकर्ता शायद ही कभी।",
    "This browser doesn't support WebRTC, so it can't leak anything this way.": "यह ब्राउज़र WebRTC का समर्थन नहीं करता, इसलिए इस रास्ते से कुछ लीक नहीं कर सकता।",
    "This domain does not exist (NXDOMAIN).": "यह डोमेन मौजूद नहीं है (NXDOMAIN)।",
    "This page was translated with AI and may contain mistakes. The English version is the reference.":
      "यह पेज AI की मदद से अनुवादित है और इसमें गलतियाँ हो सकती हैं। अंग्रेज़ी संस्करण ही आधार है।",
    "This proxy requires a username and password (HTTP 407).": "इस प्रॉक्सी के लिए यूज़रनेम और पासवर्ड ज़रूरी है (HTTP 407)।",
    "This proxy requires a username and password.": "इस प्रॉक्सी के लिए यूज़रनेम और पासवर्ड ज़रूरी है।",
    "Time to first byte": "पहले बाइट तक का समय",
    "Timed out connecting to the proxy.": "प्रॉक्सी से कनेक्ट करते समय समय समाप्त हो गया।",
    Timezone: "टाइमज़ोन",
    Timing: "समय",
    "Too many checks in a row. Please wait a minute and try again.": "लगातार बहुत ज़्यादा जाँचें हो गईं। कृपया एक मिनट रुककर फिर कोशिश करें।",
    "Too many requests. Please wait a minute and try again.": "बहुत ज़्यादा अनुरोध। कृपया एक मिनट रुककर फिर कोशिश करें।",
    Tools: "टूल",
    "Tor exit example": "Tor एग्ज़िट का उदाहरण",
    "Tor exit node": "Tor एग्ज़िट नोड",
    "Total addresses": "कुल पते",
    "Touch points": "टच पॉइंट",
    Type: "प्रकार",
    Unknown: "अज्ञात",
    "Unexpected error while talking to the proxy.": "प्रॉक्सी से बात करते समय अप्रत्याशित त्रुटि।",
    "Unstable: {n} of {total} requests succeeded": "अस्थिर: {total} में से {n} अनुरोध सफल रहे",
    Upload: "अपलोड",
    "Usable hosts": "उपयोग योग्य होस्ट",
    "Use host:port, user:password@host:port, or host:port:user:password. If the password contains a colon, use the separate password field.":
      "host:port, user:password@host:port या host:port:user:password इस्तेमाल करें। अगर पासवर्ड में कोलन है, तो अलग पासवर्ड फ़ील्ड इस्तेमाल करें।",
    "User agent": "यूज़र एजेंट",
    "Username (optional)": "यूज़रनेम (वैकल्पिक)",
    "Username and password accepted": "यूज़रनेम और पासवर्ड स्वीकार हुए",
    Viewport: "व्यूपोर्ट",
    "WebRTC didn't expose any public IP address. You're not leaking through it.": "WebRTC ने कोई सार्वजनिक IP पता उजागर नहीं किया। इस रास्ते से कोई लीक नहीं है।",
    "WebRTC exposed {ips}, which is different from the IP websites see ({ip}). If you're using a VPN, this could be a leak of your real address.":
      "WebRTC ने {ips} उजागर किया, जो वेबसाइटों को दिखने वाले IP ({ip}) से अलग है। अगर आप VPN इस्तेमाल कर रहे हैं, तो यह आपके असली पते का लीक हो सकता है।",
    "Website test": "वेबसाइट टेस्ट",
    "Website to test through the proxy": "प्रॉक्सी से जाँचने के लिए वेबसाइट",
    "What is my IP address?": "मेरा IP पता क्या है?",
    "Whole request": "पूरा अनुरोध",
    "Wildcard mask": "वाइल्डकार्ड मास्क",
    Working: "काम कर रहा है",
    "Working…": "प्रोसेस हो रहा है…",
    Worst: "सबसे खराब",
    Yes: "हाँ",
    "Your ping is unstable. Packet loss or jitter like this causes stutter in calls and games. Try a wired connection and restart your router.":
      "आपका पिंग अस्थिर है। इतना पैकेट लॉस या जिटर कॉल और गेम में अटकने की वजह बनता है। वायर्ड कनेक्शन आज़माएँ और अपना राउटर रीस्टार्ट करें।",
    "added by proxy": "प्रॉक्सी द्वारा जोड़ा गया",
    "example.com or 8.8.8.8": "example.com या 8.8.8.8",
    "host:port or user:password@host:port": "host:port या user:password@host:port",
    "ms avg": "ms औसत",
    "n/a": "लागू नहीं",
    "proxy errors 407, 403 and 502: causes and fixes": "प्रॉक्सी त्रुटियाँ 407, 403 और 502: कारण और समाधान (अंग्रेज़ी में)",
    "{host} answered HTTP {status} in {ms} ms.": "{host} ने {ms} ms में HTTP {status} से जवाब दिया।",
    "{host} answered HTTP {status} through this proxy in {ms} ms. That usually means the site is blocking or limiting this proxy.":
      "{host} ने इस प्रॉक्सी से {ms} ms में HTTP {status} से जवाब दिया। इसका आमतौर पर मतलब है कि साइट इस प्रॉक्सी को ब्लॉक या सीमित कर रही है।",
    "{host} answered HTTP {status}{redirect} in {ms} ms. The proxy can reach this site.": "{host} ने {ms} ms में HTTP {status}{redirect} से जवाब दिया। प्रॉक्सी इस साइट तक पहुँच सकता है।",
    "{mb} MB in {ms} ms": "{ms} ms में {mb} MB",
    "{mb} MB in {ms} ms (stopped early)": "{ms} ms में {mb} MB (बीच में रुका)",
    "DroneBL (botnets and open proxies)": "DroneBL (बॉटनेट और खुले प्रॉक्सी)",
    "{n} GB": "{n} GB",
    Signed: "हस्ताक्षरित",
    Unsigned: "अहस्ताक्षरित",
    "Check for typos and for any required format in the username.": "टाइपिंग की गलतियाँ जाँचें और यह भी कि यूज़रनेम के लिए कोई ज़रूरी फ़ॉर्मैट तो नहीं है।",
    "It may block this destination, or only accept allow-listed IP addresses.": "हो सकता है यह इस गंतव्य को ब्लॉक करता हो, या केवल अनुमत IP पते स्वीकार करता हो।",
  },

  tools: {
    ip: {
      name: "मेरा IP",
      desc: "आपका सार्वजनिक IP पता, लोकेशन और ISP",
      title: "मेरा IP पता क्या है? अपना सार्वजनिक IP देखें",
      description: "अपना सार्वजनिक IP पता, लोकेशन, ISP और कनेक्शन का विवरण तुरंत देखें। मुफ़्त और तेज़, बिना विज्ञापन और साइन-अप के।",
      h1: "मेरा IP पता क्या है?",
      lead: "आपका सार्वजनिक IP पता, अनुमानित लोकेशन और ISP, तुरंत।",
      about: "",
      faq: [],
    },
    lookup: {
      name: "IP लुकअप",
      desc: "किसी भी IP या डोमेन की लोकेशन, ISP और ASN",
      title: "IP लुकअप: किसी भी IP की लोकेशन, ISP और मालिक",
      description: "मुफ़्त IP लुकअप टूल। कोई IP या डोमेन डालें और उसकी लोकेशन, ISP, ASN और होस्टनेम देखें। IPv4 और IPv6 समर्थित।",
      h1: "IP पता लुकअप",
      lead: "किसी भी IP पते या डोमेन की लोकेशन, ISP और नेटवर्क पता करें।",
      about:
        "IP पता लुकअप बताता है कि इंटरनेट पर कोई सर्वर या कनेक्शन कहाँ दिखता है और उसके पीछे का नेटवर्क कौन चलाता है। इसका इस्तेमाल यह जानने के लिए करें कि कोई वेबसाइट कहाँ होस्ट है, अपने लॉग में संदिग्ध ट्रैफ़िक की जाँच करें, पक्का करें कि VPN काम कर रहा है, या यह पता करें कि कोई पता किस प्रदाता का है। नतीजों में शहर, क्षेत्र, देश, टाइमज़ोन, ISP, संगठन और ऑटोनोमस सिस्टम नंबर (ASN) शामिल हैं, और रिवर्स DNS रिकॉर्ड होने पर होस्टनेम भी।",
      faq: [
        {
          q: "किसी वेबसाइट का IP पता कैसे ढूँढें?",
          a: "ऊपर के बॉक्स में डोमेन नाम, जैसे example.com, लिखें और खोजें दबाएँ। टूल नाम को उसके मौजूदा IP पते में बदलता है और फिर दिखाता है कि वह सर्वर कहाँ है, नेटवर्क कौन चलाता है और उसका होस्टनेम क्या है।",
        },
        {
          q: "IP पता लुकअप कितना सटीक होता है?",
          a: "देश लगभग हमेशा सही होता है, शहर ज़्यादातर सही होता है, और इससे बारीक कुछ भी मोटा अनुमान है। ISP और ASN सार्वजनिक रूटिंग रजिस्ट्री से आते हैं और भरोसेमंद हैं। लुकअप किसी का घर का पता या किसी व्यक्ति की पहचान नहीं बता सकता।",
        },
        {
          q: "क्या मैं IP की जगह डोमेन नाम खोज सकता हूँ?",
          a: "हाँ। example.com जैसा डोमेन दर्ज करें; टूल पहले उसे उसके मौजूदा IP पते में बदलता है, फिर उसके पीछे के सर्वर की लोकेशन, नेटवर्क और होस्टनेम दिखाता है। CDN पर चल रही साइटें ओरिजिन सर्वर की जगह CDN का नेटवर्क दिखाएँगी।",
        },
      ],
    },
    dns: {
      name: "DNS लुकअप",
      desc: "A, AAAA, MX, TXT, NS, CNAME, SOA और CAA रिकॉर्ड",
      title: "DNS लुकअप: किसी भी डोमेन के DNS रिकॉर्ड जाँचें",
      description: "मुफ़्त DNS लुकअप: Cloudflare या Google DNS से A, AAAA, MX, TXT, NS, CNAME, SOA और CAA रिकॉर्ड देखें, या रिवर्स DNS लुकअप करें।",
      h1: "DNS लुकअप",
      lead: "किसी भी डोमेन के लाइव DNS रिकॉर्ड देखें, या किसी IP पते को उल्टी दिशा में रिज़ॉल्व करें।",
      about:
        "डोमेन नेम सिस्टम (DNS) example.com जैसे नामों को उन IP पतों में बदलता है जिन्हें कंप्यूटर इस्तेमाल करते हैं। यह टूल Cloudflare 1.1.1.1 या Google 8.8.8.8 के ज़रिए HTTPS पर लाइव DNS से पूछता है, इसलिए आपको पुराने लोकल कैश की जगह ताज़ा जवाब दिखते हैं। यह ईमेल सेटअप (TXT रिकॉर्ड में MX, SPF और DKIM) जाँचने, साइट का स्थानांतरण पक्का करने, CNAME की गड़बड़ी ढूँढने या यह देखने में काम आता है कि कोई नया रिकॉर्ड प्रकाशित हुआ या नहीं।",
      faq: [
        {
          q: "रिवर्स DNS लुकअप कैसे करें?",
          a: "डोमेन नाम की जगह IP पता दर्ज करें। टूल उससे मेल खाता in-addr.arpa (IPv4) या ip6.arpa (IPv6) नाम बनाता है और PTR रिकॉर्ड लौटाता है, यानी वह होस्टनेम जो मालिक ने उस पते को दिया है, अगर कोई है। मेल सर्वर भेजने वालों को जाँचने के लिए रिवर्स DNS पर निर्भर रहते हैं।",
        },
        {
          q: "मैं कौन-से DNS रिकॉर्ड प्रकार जाँच सकता हूँ?",
          a: "आप IP पतों के लिए A और AAAA, मेल सर्वर के लिए MX, SPF, DKIM और सत्यापन स्ट्रिंग के लिए TXT, नेमसर्वर के लिए NS, उपनामों के लिए CNAME, ज़ोन विवरण के लिए SOA और प्रमाणपत्र प्राधिकरण नियमों के लिए CAA रिकॉर्ड जाँच सकते हैं। रिवर्स (PTR) लुकअप के लिए डोमेन की जगह IP पता दर्ज करें।",
        },
        {
          q: "मेरे DNS बदलाव अभी तक क्यों नहीं दिख रहे?",
          a: "रिज़ॉल्वर रिकॉर्ड के TTL तक जवाब कैश करते हैं, इसलिए बदलाव को हर जगह दिखने में मिनट या घंटे लग सकते हैं। हर रिज़ॉल्वर अभी क्या लौटाता है, यह तुलना करने के लिए Cloudflare और Google रिज़ॉल्वर के बीच बदलें। अगर वे अलग-अलग जवाब दें, तो बदलाव अभी फैल रहा है।",
        },
      ],
    },
    "reverse-dns": {
      name: "रिवर्स DNS",
      desc: "किसी भी IP का होस्टनेम पता करें",
      title: "रिवर्स DNS लुकअप: किसी IP का होस्टनेम खोजें",
      description: "मुफ़्त रिवर्स DNS लुकअप: किसी IPv4 या IPv6 पते का PTR रिकॉर्ड और होस्टनेम पता करें, मेल सर्वर जाँचने में उपयोगी।",
      h1: "रिवर्स DNS लुकअप",
      lead: "किसी भी IPv4 या IPv6 पते का होस्टनेम (PTR रिकॉर्ड) पता करें।",
      about:
        "रिवर्स DNS लुकअप PTR रिकॉर्ड के ज़रिए वह होस्टनेम ढूँढता है जो किसी IP पते को दिया गया है। इससे जल्दी पता चलता है कि कोई सर्वर कौन चलाता है (होस्टिंग कंपनी, मेल सर्वर या घरेलू प्रदाता), मेल सर्वर ठीक से कॉन्फ़िगर है या नहीं, या अपने लॉग में कोई अनजान पता समझ में आता है। IPv4 या IPv6 पता दर्ज करें और लुकअप लाइव DNS से PTR रिकॉर्ड लौटाता है।",
      faq: [
        {
          q: "रिवर्स DNS लुकअप क्या है?",
          a: "सामान्य DNS लुकअप किसी नाम को IP पते में बदलता है। रिवर्स लुकअप उल्टा करता है: यह पूछता है कि किसी IP पते के मालिक ने उसे कौन-सा होस्टनेम दिया है, जो PTR रिकॉर्ड में रखा जाता है। कई पतों का कोई रिकॉर्ड नहीं होता, खासकर घरेलू कनेक्शनों का।",
        },
        {
          q: "ईमेल के लिए रिवर्स DNS क्यों मायने रखता है?",
          a: "मेल सर्वर अक्सर जाँचते हैं कि भेजने वाले IP का PTR रिकॉर्ड उस नाम से मेल खाता है जो वह बताता है। रिकॉर्ड न होना या सामान्य होना वैध ईमेल के स्पैम में जाने की आम वजह है, इसलिए मेल सर्वर के मालिक इसे अपने होस्टिंग प्रदाता से सेट करवाते हैं।",
        },
      ],
    },
    reputation: {
      name: "IP प्रतिष्ठा",
      desc: "VPN, प्रॉक्सी, Tor और ब्लॉकलिस्ट की पहचान",
      title: "VPN चेकर: IP प्रतिष्ठा, प्रॉक्सी और ब्लैकलिस्ट जाँच",
      description: "मुफ़्त VPN चेकर: जाँचें कि कोई IP VPN, प्रॉक्सी, Tor नोड या डेटा सेंटर है या नहीं, और स्पैम ब्लॉकलिस्ट में है या नहीं।",
      h1: "VPN चेकर और IP प्रतिष्ठा जाँच",
      lead: "जाँचें कि कोई IP पता VPN, प्रॉक्सी, Tor एग्ज़िट या डेटा सेंटर जैसा दिखता है या नहीं, और क्या वह स्पैम व दुरुपयोग की ब्लॉकलिस्ट में है।",
      about:
        "IP प्रतिष्ठा जाँच दिखाती है कि बाकी इंटरनेट किसी पते के साथ कैसा बर्ताव करेगा। हम कई संकेतों को मिलाते हैं: Tor प्रोजेक्ट की आधिकारिक एग्ज़िट सूची, पते का मालिक नेटवर्क किस प्रकार का है (घरेलू ISP, मोबाइल ऑपरेटर, होस्टिंग कंपनी या VPN प्रदाता), रिवर्स DNS नाम में मिले संकेत, और स्पैम व दुरुपयोग की पाँच सार्वजनिक ब्लॉकलिस्ट। इससे पता चलता है कि कोई VPN पहचाना जा सकता है या नहीं, कोई वेबसाइट आपको बार-बार कैप्चा क्यों दिखाती है, या आपकी मेल क्यों लौट रही है। नतीजे संकेतक हैं, सबूत नहीं।",
      faq: [
        {
          q: "मुझे कैसे पता चले कि मेरा VPN काम कर रहा है?",
          a: "VPN बंद और चालू करके अपना पता, लोकेशन और नेटवर्क की तुलना करें। सब कुछ बदलना चाहिए। फिर WebRTC लीक टेस्ट चलाएँ और देखें कि होम पेज की IPv6 पंक्ति खाली है या VPN की है। अंत में इस चेकर का इस्तेमाल करें: काम करते VPN का पता आमतौर पर होस्टिंग या VPN नेटवर्क के रूप में दिखता है, आपके घरेलू प्रदाता के रूप में नहीं।",
        },
        {
          q: "क्या पता चल सकता है कि मैं VPN या प्रॉक्सी इस्तेमाल कर रहा हूँ?",
          a: "केवल आंशिक रूप से। हम जाँचते हैं कि पता आधिकारिक Tor एग्ज़िट सूची में है या नहीं, उसके नेटवर्क का मालिक कोई जाना-माना VPN प्रदाता या होस्टिंग कंपनी है या नहीं, और उसका होस्टनेम VPN जैसा लगता है या नहीं। ज़्यादातर VPN डेटा सेंटर नेटवर्क पर चलते हैं, जिन्हें पहचानना आसान है। घरेलू प्रॉक्सी और कुछ निजी VPN सामान्य घरेलू कनेक्शन जैसे दिखते हैं और सार्वजनिक डेटा से पहचाने नहीं जा सकते।",
        },
        {
          q: "मेरे IP का ब्लॉकलिस्ट में होने का क्या मतलब है?",
          a: "ब्लॉकलिस्ट उन पतों की सार्वजनिक सूची है जिन्हें स्पैम या दुरुपयोगी ट्रैफ़िक भेजते देखा गया है। इसमें होने पर मेल सर्वर आपकी ईमेल लौटा सकते हैं और कुछ वेबसाइटें आपसे अतिरिक्त जाँच करवा सकती हैं या ब्लॉक कर सकती हैं। ऐसा अक्सर साझा पतों के साथ होता है, जैसे VPN सर्वर या मोबाइल नेटवर्क, दूसरे उपयोगकर्ताओं की वजह से। ज़्यादातर सूचियों में हटाने का फ़ॉर्म होता है, और एंट्री कुछ समय बाद अपने-आप खत्म हो जाती हैं।",
        },
        {
          q: "Spamhaus की सूचियाँ क्यों नहीं दिखतीं?",
          a: "Spamhaus बड़े सार्वजनिक DNS रिज़ॉल्वर से आने वाली क्वेरी ठुकरा देता है, इसलिए इस तरह की जाँच भरोसेमंद जवाब नहीं दे सकती। हम केवल वही सूचियाँ दिखाते हैं जो सही जवाब देती हैं, और जो सूची जवाब नहीं देती उसे अंदाज़ा लगाने की जगह अनुपलब्ध चिह्नित करते हैं।",
        },
      ],
    },
    "proxy-checker": {
      name: "प्रॉक्सी चेकर",
      desc: "HTTP और SOCKS5 प्रॉक्सी जाँचें: स्पीड, लोकेशन, रोटेशन",
      title: "प्रॉक्सी चेकर: HTTP और SOCKS5 प्रॉक्सी ऑनलाइन जाँचें",
      description: "मुफ़्त प्रॉक्सी चेकर। HTTP या SOCKS5 प्रॉक्सी की स्पीड, एग्ज़िट IP, लोकेशन, रोटेशन और ब्लॉकलिस्ट जाँचें, यूज़रनेम-पासवर्ड के साथ।",
      h1: "प्रॉक्सी चेकर",
      lead: "कोई भी HTTP, HTTPS या SOCKS5 प्रॉक्सी जाँचें। देखें कि वह काम करता है या नहीं, कहाँ से निकलता है, कितना तेज़ है और उसका IP बदलता है या नहीं।",
      about:
        "प्रॉक्सी चेकर जाँचता है कि कोई प्रॉक्सी सर्वर काम करता है या नहीं और जिन वेबसाइटों के साथ आप उसे इस्तेमाल करते हैं, उन्हें वह कैसा दिखता है। HTTP, HTTPS या SOCKS5 प्रॉक्सी दर्ज करें, ज़रूरत हो तो यूज़रनेम और पासवर्ड के साथ, और यह टूल उसके ज़रिए कनेक्ट होता है, एग्ज़िट IP पता और उसकी लोकेशन दिखाता है, जवाब और डाउनलोड की रफ़्तार मापता है, जाँचता है कि अनुरोधों के बीच एग्ज़िट IP बदलता है या नहीं, और उस पते को स्पैम ब्लॉकलिस्ट व Tor एग्ज़िट सूची में खोजता है। आप यह भी जाँच सकते हैं कि प्रॉक्सी आपकी पसंद की किसी वेबसाइट तक पहुँच पाता है या नहीं। आप जो भी दर्ज करते हैं, वह सहेजा नहीं जाता।",
      faq: [
        {
          q: "मैं कैसे जाँचूँ कि प्रॉक्सी काम कर रहा है?",
          a: "उसे host:port के रूप में दर्ज करें, ज़रूरत हो तो यूज़रनेम और पासवर्ड जोड़ें, और प्रॉक्सी जाँचें दबाएँ। अगर टूल एग्ज़िट IP, लोकेशन और सफल अनुरोध दिखाता है, तो प्रॉक्सी काम करता है। विफल होने पर संदेश कारण बताता है: गलत क्रेडेंशियल (HTTP 407), अस्वीकृत कनेक्शन, टाइमआउट, या ऐसा सर्वर जो प्रॉक्सी है ही नहीं। आप टर्मिनल से cURL के ज़रिए भी जाँच सकते हैं: curl -x http://user:password@host:port https://www.cloudflare.com/cdn-cgi/trace",
        },
        {
          q: "क्या HTTP और HTTPS प्रॉक्सी के अलावा SOCKS5 भी समर्थित है?",
          a: "हाँ। यह CONNECT विधि इस्तेमाल करने वाले HTTP और HTTPS प्रॉक्सी, और यूज़रनेम-पासवर्ड के साथ या उसके बिना SOCKS5 का समर्थन करता है। प्रकार को ऑटो-डिटेक्ट पर रखें तो यह पहले HTTP, फिर SOCKS5 आज़माता है। SOCKS4 और क्लाइंट सर्टिफ़िकेट माँगने वाले प्रॉक्सी समर्थित नहीं हैं।",
        },
        {
          q: "क्या प्रॉक्सी चेकर Decodo प्रॉक्सी के साथ काम करता है?",
          a: "हाँ, बशर्ते प्रॉक्सी होस्ट, पोर्ट और यूज़रनेम-पासवर्ड इस्तेमाल करता हो। Decodo (पहले Smartproxy) और ज़्यादातर अन्य प्रदाता ये अपने डैशबोर्ड में दिखाते हैं। इन्हें पेस्ट करें और चेकर एग्ज़िट IP, उसकी लोकेशन और स्पीड दिखाएगा। अगर आप केवल IP अनुमति-सूची इस्तेमाल करते हैं, तो अगला सवाल पढ़ें।",
        },
        {
          q: "क्या मैं ऐसा प्रॉक्सी जाँच सकता हूँ जो IP व्हाइटलिस्ट इस्तेमाल करता है?",
          a: "नहीं। जाँच हमारे सर्वरों से कनेक्ट होती है, इसलिए केवल आपके अपने IP पते वाली अनुमति-सूची उसे अस्वीकार कर देगी। अगर आपका प्रदाता यूज़रनेम-पासवर्ड वाला एंडपॉइंट देता है, तो जाँच के लिए उसे इस्तेमाल करें।",
        },
        {
          q: "क्या मेरे प्रॉक्सी क्रेडेंशियल सहेजे या लॉग किए जाते हैं?",
          a: "नहीं। प्रॉक्सी का पता और कोई भी यूज़रनेम-पासवर्ड HTTPS पर हमारे सर्वर को भेजे जाते हैं, इसी एक जाँच के लिए इस्तेमाल होते हैं और फिर हटा दिए जाते हैं। हम उन्हें सहेजते नहीं और लॉग में नहीं लिखते। आपका प्रॉक्सी प्रदाता हमारा कनेक्शन देखेगा, जैसे वह किसी भी दूसरे अनुरोध को देखता है।",
        },
        {
          q: "स्पीड मेरे अपने कंप्यूटर पर मिलने वाली स्पीड से अलग क्यों है?",
          a: "जाँच आपके पास के Cloudflare डेटा सेंटर से चलती है, आपके डिवाइस से नहीं, और एक कनेक्शन पर 1 MB का छोटा नमूना डाउनलोड करती है। इसका इस्तेमाल प्रॉक्सी की आपस में तुलना करने और धीमे प्रॉक्सी पहचानने के लिए करें। असल में मिलने वाली स्पीड जानने के लिए उसी मशीन से जाँचें जो प्रॉक्सी इस्तेमाल करेगी।",
        },
        {
          q: "मैं कैसे पहचानूँ कि प्रॉक्सी रोटेट हो रहा है?",
          a: "चेकर अलग-अलग कनेक्शन पर तीन अनुरोध भेजता है और हर एक का एग्ज़िट IP सूचीबद्ध करता है। अलग-अलग पते का मतलब है रोटेटिंग प्रॉक्सी। एक ही पते का मतलब है स्टिकी या स्थिर प्रॉक्सी। रोटेटिंग गेटवे पर स्टिकी सेशन जानबूझकर कई मिनट तक एक ही IP रखता है, इसलिए वह नतीजा अपेक्षित है।",
        },
      ],
    },
    whois: {
      name: "WHOIS",
      desc: "डोमेन और IP के पंजीकरण का विवरण",
      title: "WHOIS लुकअप: डोमेन या IP का पंजीकरण विवरण",
      description: "किसी डोमेन का रजिस्ट्रार, बनने और समाप्त होने की तिथि और नेमसर्वर, या किसी IP रेंज का मालिक पता करें। RDAP से तेज़ WHOIS।",
      h1: "WHOIS लुकअप",
      lead: "किसी डोमेन का रजिस्ट्रार, तिथियाँ और नेमसर्वर, या किसी IP पते के नेटवर्क का मालिक।",
      about:
        "WHOIS डेटा बताता है कि किसी डोमेन को किसने पंजीकृत किया, कौन-सा रजिस्ट्रार उसे संभालता है, वह कब बना और कब समाप्त होगा, साथ ही उसके नेमसर्वर और स्थिति फ़्लैग। IP पतों के लिए यह नेटवर्क ब्लॉक, मालिक संगठन और क्षेत्रीय रजिस्ट्री दिखाता है। यह जाँचने में काम आता है कि कोई डोमेन उपलब्ध है या नहीं, किसी संदिग्ध साइट की पड़ताल करने में, या दुरुपयोग की शिकायत के लिए सही संपर्क ढूँढने में।",
      faq: [
        {
          q: "WHOIS और RDAP में क्या अंतर है?",
          a: "RDAP पुराने WHOIS प्रोटोकॉल का आधुनिक विकल्प है। यह HTTPS पर संरचित डेटा लौटाता है और अब रजिस्ट्री व रजिस्ट्रारों के लिए आधिकारिक मानक है। यह टूल RDAP इस्तेमाल करता है, इसलिए नतीजे एकसमान होते हैं, हालाँकि निजी संपर्क विवरण आमतौर पर गोपनीयता के लिए छिपे होते हैं।",
        },
        {
          q: "डोमेन का मालिक छिपा हुआ क्यों है?",
          a: "GDPR जैसे डेटा गोपनीयता नियम लागू होने के बाद ज़्यादातर रजिस्ट्रार सार्वजनिक रिकॉर्ड से पंजीकर्ता का नाम, ईमेल और पता छिपा देते हैं। फिर भी आप रजिस्ट्रार, पंजीकरण और समाप्ति तिथियाँ, स्थिति कोड और नेमसर्वर देख सकते हैं।",
        },
      ],
    },
    headers: {
      name: "HTTP हेडर",
      desc: "आपका ब्राउज़र वेबसाइटों को कौन-से हेडर भेजता है",
      title: "HTTP हेडर व्यूअर: आपके रिक्वेस्ट हेडर",
      description: "आपके ब्राउज़र के भेजे सभी HTTP रिक्वेस्ट हेडर देखें, जैसे यूज़र एजेंट, भाषा और एन्कोडिंग, और जो प्रॉक्सी ने जोड़े हों।",
      h1: "HTTP हेडर व्यूअर",
      lead: "ये वे रिक्वेस्ट हेडर हैं जो आपके ब्राउज़र ने इस पेज को भेजे।",
      about:
        "जब भी आपका ब्राउज़र कोई पेज लोड करता है, वह खुद को बताने वाले HTTP हेडर का एक सेट भेजता है। यह पेज ठीक वही दिखाता है जो हमारे सर्वर तक पहुँचा, यानी वही जो आपकी विज़िट की किसी भी वेबसाइट को दिखता। प्रॉक्सी द्वारा जोड़े गए चिह्नित हेडर आपके और सर्वर के बीच के नेटवर्क से आते हैं, जैसे CDN, आपके ब्राउज़र से नहीं।",
      faq: [
        {
          q: "HTTP रिक्वेस्ट हेडर क्या होते हैं?",
          a: "हेडर छोटी-छोटी जानकारियाँ हैं जो आपका ब्राउज़र हर अनुरोध के साथ भेजता है, जैसे आपकी पसंदीदा भाषा, वह किन कंटेंट प्रकारों को स्वीकार करता है और आप कौन-सा ब्राउज़र इस्तेमाल करते हैं। सर्वर इनका इस्तेमाल पेज का सही संस्करण देने के लिए करते हैं।",
        },
        {
          q: "कौन-से हेडर मेरी पहचान उजागर कर सकते हैं?",
          a: "User-Agent और Accept-Language हेडर सबसे ज़्यादा बताने वाले हैं, क्योंकि आपके IP पते के साथ मिलकर वे फ़िंगरप्रिंट बनाने में मदद कर सकते हैं। मज़बूत गोपनीयता सेटिंग वाले ब्राउज़र इन मानों को घटाते या एकसमान कर देते हैं।",
        },
      ],
    },
    browser: {
      name: "ब्राउज़र जानकारी",
      desc: "यूज़र एजेंट, स्क्रीन, भाषा और बहुत कुछ",
      title: "मेरा यूज़र एजेंट क्या है? ब्राउज़र और डिवाइस जानकारी",
      description: "अपना यूज़र एजेंट, ब्राउज़र, सिस्टम, स्क्रीन साइज़, भाषा और टाइमज़ोन देखें। जानें कि कोई भी वेबसाइट आपके बारे में क्या पढ़ सकती है।",
      h1: "मेरा यूज़र एजेंट क्या है?",
      lead: "कोई भी वेबसाइट बिना पूछे आपके ब्राउज़र और डिवाइस के बारे में क्या जान सकती है।",
      about:
        "आपका ब्राउज़र उससे ज़्यादा बताता है जितना ज़्यादातर लोग सोचते हैं। यह पेज वे जानकारियाँ सूचीबद्ध करता है जिन्हें JavaScript बिना किसी अनुमति-अनुरोध के पढ़ सकता है, जैसे यूज़र एजेंट, प्लेटफ़ॉर्म, स्क्रीन और व्यूपोर्ट का आकार, पिक्सल घनत्व, पसंदीदा भाषाएँ, टाइमज़ोन और हार्डवेयर संकेत। इस पेज पर दिखी कोई भी चीज़ कहीं भेजी नहीं जाती: सब कुछ आपके ब्राउज़र में ही स्थानीय रूप से पढ़ा जाता है।",
      faq: [
        {
          q: "यूज़र एजेंट क्या है?",
          a: "यूज़र एजेंट टेक्स्ट की एक पंक्ति है जो आपका ब्राउज़र हर वेबसाइट को भेजता है, यह बताने के लिए कि आप कौन-सा ब्राउज़र, संस्करण और ऑपरेटिंग सिस्टम इस्तेमाल करते हैं। साइटें इसका इस्तेमाल पेज का सही संस्करण देने के लिए करती हैं। आप अपना यूज़र एजेंट इस पेज के ऊपर देख सकते हैं और एक क्लिक में कॉपी कर सकते हैं।",
        },
        {
          q: "क्या मैं अपना यूज़र एजेंट बदल सकता हूँ?",
          a: "हाँ। ब्राउज़र के डेवलपर टूल और कुछ एक्सटेंशन परीक्षण के लिए उसे बदल सकते हैं। इसे बदलने से आपका IP पता नहीं छिपता, और साइटें अक्सर दूसरे संकेतों से आपका असली ब्राउज़र पहचान सकती हैं।",
        },
        {
          q: "वेबसाइटें मेरे ब्राउज़र से क्या जान सकती हैं?",
          a: "बिना पूछे, कोई साइट आपका ब्राउज़र और ऑपरेटिंग सिस्टम, स्क्रीन का आकार, भाषा, टाइमज़ोन और अक्सर आपके प्रोसेसर के थ्रेड और मेमोरी भी पढ़ सकती है। मिलाकर ये जानकारियाँ आपके ब्राउज़र को हैरान करने वाले ढंग से अनोखा बना सकती हैं, जिसे फ़िंगरप्रिंटिंग कहते हैं।",
        },
        {
          q: "मैं अपना ब्राउज़र कितना बताता है, यह कैसे कम करूँ?",
          a: "फ़िंगरप्रिंटिंग सुरक्षा वाला ब्राउज़र इस्तेमाल करें, जैसे सख़्त ट्रैकिंग सुरक्षा वाला Firefox, Brave या Safari। उसे अपडेट रखें, ऐसे असामान्य एक्सटेंशन से बचें जो आपके सेटअप को और अनोखा बनाते हैं, और अगर आप अपना IP पता भी छिपाना चाहते हैं तो VPN पर विचार करें।",
        },
      ],
    },
    port: {
      name: "पोर्ट चेकर",
      desc: "जाँचें कि आपके IP पर कोई पोर्ट खुला है या नहीं",
      title: "पोर्ट चेकर: अपने IP के खुले पोर्ट जाँचें",
      description: "मुफ़्त पोर्ट चेकर: जाँचें कि आपके सार्वजनिक IP पर कोई पोर्ट खुला है या नहीं (पोर्ट फ़ॉरवर्डिंग, गेम सर्वर, Plex, SSH, रिमोट डेस्कटॉप)।",
      h1: "खुले पोर्ट चेकर",
      lead: "जाँचें कि आपके सार्वजनिक IP पर कोई TCP पोर्ट पहुँच योग्य है या नहीं। पोर्ट फ़ॉरवर्डिंग और गेम सर्वर के लिए उपयोगी।",
      about:
        "पोर्ट चेकर जाँचता है कि आपके सार्वजनिक IP पते का कोई TCP पोर्ट इंटरनेट से आने वाले कनेक्शन स्वीकार करता है या नहीं। गेम सर्वर, Plex, सुरक्षा कैमरा, SSH या रिमोट डेस्कटॉप के लिए पोर्ट फ़ॉरवर्डिंग सेट करने के बाद इसका इस्तेमाल करें। जाँच Cloudflare के नेटवर्क से चलती है और केवल आपके अपने IP पर होती है, इसलिए यह वही दिखाती है जो बाहर की दुनिया को असल में दिखता है।",
      faq: [
        {
          q: "मैं कैसे जाँचूँ कि कोई पोर्ट खुला है?",
          a: "ऊपर पोर्ट नंबर दर्ज करें और पोर्ट जाँचें दबाएँ। जाँच इंटरनेट से आपके सार्वजनिक IP पते से कनेक्ट होती है और खुला, बंद या कोई जवाब नहीं बताती है। अपने कंप्यूटर से जाँचने के लिए Windows पर netstat या Test-NetConnection, और macOS व Linux पर ss और nc इस्तेमाल करें।",
        },
        {
          q: "मेरा सर्वर चल रहा है, फिर भी पोर्ट बंद क्यों दिखता है?",
          a: "आमतौर पर तीन में से कोई चीज़ रोकती है: सेवा उस पोर्ट पर सुन नहीं रही, आपके कंप्यूटर का फ़ायरवॉल उसे ब्लॉक करता है, या आपका राउटर पोर्ट को आपके डिवाइस तक फ़ॉरवर्ड नहीं कर रहा। यह भी देखें कि आपका प्रदाता कैरियर-ग्रेड NAT (CGNAT) तो इस्तेमाल नहीं करता, जो इनबाउंड कनेक्शन को पूरी तरह रोक देता है।",
        },
        {
          q: "क्या पोर्ट खोलना सुरक्षित है?",
          a: "पोर्ट खोलने पर उसके पीछे जो भी सुन रहा है, वह पूरे इंटरनेट के सामने आ जाता है। केवल उन सॉफ़्टवेयर के पोर्ट फ़ॉरवर्ड करें जिन्हें आप अपडेट रखते हैं, मज़बूत प्रमाणीकरण इस्तेमाल करें और जिन पोर्ट की अब ज़रूरत नहीं उन्हें बंद करें। निजी सेवाओं तक दूर से पहुँचने के लिए VPN या टनल बेहतर है।",
        },
      ],
    },
    speed: {
      name: "स्पीड टेस्ट",
      desc: "लेटेंसी, डाउनलोड और अपलोड स्पीड",
      title: "इंटरनेट स्पीड टेस्ट: डाउनलोड, अपलोड और पिंग",
      description: "मुफ़्त इंटरनेट स्पीड टेस्ट: डाउनलोड, अपलोड, पिंग, जिटर और लोड के दौरान लेटेंसी, बफ़रब्लोट ग्रेड के साथ, सबसे नज़दीकी Cloudflare डेटा सेंटर तक मापा गया।",
      h1: "इंटरनेट स्पीड टेस्ट",
      lead: "अपने डिवाइस और सबसे नज़दीकी Cloudflare सर्वर के बीच डाउनलोड, अपलोड, खाली लाइन पर और लोड के दौरान लेटेंसी (बफ़रब्लोट) मापें।",
      about:
        "यह स्पीड टेस्ट वह मापता है जो रोज़मर्रा के इस्तेमाल में मायने रखता है। लेटेंसी एक आने-जाने की देरी है, जिटर यह बताता है कि वह देरी कितनी बदलती है, और डाउनलोड व अपलोड मेगाबिट प्रति सेकंड में टिकाऊ थ्रूपुट हैं। चूँकि टेस्ट एंडपॉइंट सबसे नज़दीकी Cloudflare डेटा सेंटर है, नतीजा किसी दूर के सर्वर की नहीं, आपके अपने कनेक्शन की गुणवत्ता दिखाता है।",
      faq: [
        {
          q: "यह स्पीड टेस्ट कैसे काम करता है?",
          a: "आपका ब्राउज़र पहले लाइन खाली रहते हुए सबसे नज़दीकी Cloudflare डेटा सेंटर तक 20 राउंड ट्रिप मापता है। फिर वह छह समानांतर ट्रांसफ़र से डाउनलोड करता है और उसके बाद उसी तरह रैंडम डेटा अपलोड करता है। हर दिशा तब तक चलती है जब तक स्पीड स्थिर न हो जाए, 5 से 15 सेकंड तक, और लोड के दौरान लेटेंसी जानने के लिए हर चौथाई सेकंड एक राउंड ट्रिप मापी जाती है। हर ट्रांसफ़र के पहले 1.5 सेकंड छोड़ दिए जाते हैं, और सबसे धीमे 20% और सबसे तेज़ 5% नमूने हटा दिए जाते हैं, ताकि कोई एक रुकावट या उछाल नतीजा न बिगाड़े। स्पीड मेगाबिट प्रति सेकंड में दिखाई जाती है, वही इकाई जो आपके इंटरनेट प्लान में होती है।",
        },
        {
          q: "मेरी स्पीड मेरे प्लान से कम क्यों है?",
          a: "Wi-Fi सिग्नल, नेटवर्क पर दूसरे डिवाइस, पुराना राउटर, पीक घंटों की भीड़ और टेस्ट सर्वर तक की दूरी, सब नतीजे घटाते हैं। सबसे सटीक संख्या के लिए वायर्ड कनेक्शन इस्तेमाल करें और टेस्ट चलने के दौरान बाकी डाउनलोड रोक दें।",
        },
        {
          q: "बफ़रब्लोट क्या है, और ग्रेड का क्या मतलब है?",
          a: "बफ़रब्लोट वह अतिरिक्त देरी है जो तब आती है जब लाइन व्यस्त होने पर राउटर या मॉडम बहुत ज़्यादा डेटा कतार में रोक लेता है। कनेक्शन तेज़ होकर भी तब कॉल और गेम में अटक सकता है जब कोई और डाउनलोड कर रहा हो। ग्रेड डाउनलोड या अपलोड के दौरान की लेटेंसी की तुलना खाली लाइन की लेटेंसी से करता है: 5 ms से कम बढ़त A+, 30 ms से कम A, 60 ms से कम B, 200 ms से कम C, 400 ms से कम D, और इससे ज़्यादा F। स्मार्ट क्यू मैनेजमेंट (SQM), जैसे fq_codel या CAKE, वाला राउटर आमतौर पर इसे A तक ले आता है।",
        },
        {
          q: "मेरा नतीजा Ookla Speedtest या fast.com से अलग क्यों है?",
          a: "हर टेस्ट अपने सर्वर तक का रास्ता मापता है। Ookla आमतौर पर आपके प्रोवाइडर के नेटवर्क के अंदर या पास का सर्वर चुनता है, fast.com Netflix के वीडियो सर्वर इस्तेमाल करता है और यह टेस्ट सबसे नज़दीकी Cloudflare डेटा सेंटर, इसलिए तीनों अलग रास्ते लेते हैं और 10% या उससे ज़्यादा अलग हो सकते हैं। वे शुरुआती रैंप-अप और असामान्य नमूनों को भी अलग ढंग से संभालते हैं। तीनों चलाकर सबसे कम स्थिर आँकड़ा लेना आपकी लाइन को परखने का एक उचित तरीका है।",
        },
      ],
    },
    ping: {
      name: "पिंग टेस्ट",
      desc: "अपनी लेटेंसी और जिटर जाँचें",
      title: "पिंग टेस्ट: ऑनलाइन लेटेंसी और जिटर जाँचें",
      description: "मुफ़्त ऑनलाइन पिंग टेस्ट। लगभग 10 सेकंड में सबसे नज़दीकी Cloudflare सर्वर तक अपनी लेटेंसी, जिटर और पैकेट लॉस मापें।",
      h1: "पिंग टेस्ट",
      lead: "लगभग दस सेकंड में सबसे नज़दीकी Cloudflare सर्वर तक अपनी लेटेंसी, जिटर और पैकेट लॉस मापें।",
      about:
        "पिंग वह समय है, मिलीसेकंड में, जो एक नन्हा संदेश आपके डिवाइस से किसी सर्वर तक जाकर लौटने में लेता है। यही संख्या तय करती है कि गेम तुरंत चलता लगेगा या अटकता, और वीडियो कॉल हकलाएगी या नहीं। यह टेस्ट सबसे नज़दीकी Cloudflare डेटा सेंटर को 25 तेज़ जाँचें भेजता है और आपका औसत, सबसे अच्छा और सबसे खराब पिंग, आपका जिटर (वह कितना बदलता है) और कोई भी पैकेट लॉस बताता है। चूँकि टेस्ट सर्वर आपके पास है, नतीजा आपके अपने कनेक्शन की सेहत दिखाता है: Wi-Fi, राउटर और प्रदाता।",
      faq: [
        {
          q: "अच्छा पिंग क्या होता है?",
          a: "लगभग 30 ms से कम बहुत बढ़िया है, 30 से 60 ms ऑनलाइन गेम समेत लगभग हर काम के लिए अच्छा है, 60 से 100 ms ब्राउज़िंग और वीडियो कॉल के लिए ठीक है, और 150 ms से ऊपर तेज़ गेम में आपको लैग महसूस होने लगेगा। जितना कम, उतना बेहतर, और स्थिर पिंग उतना ही मायने रखता है जितना कम पिंग।",
        },
        {
          q: "जिटर और पैकेट लॉस का क्या मतलब है?",
          a: "जिटर यह है कि आपका पिंग एक जाँच से अगली जाँच तक कितना बदलता है। पैकेट लॉस उन जाँचों का हिस्सा है जिन्हें कभी जवाब नहीं मिला। ज़्यादा जिटर या किसी भी तरह का नुकसान कॉल और गेम में अटकाव पैदा करता है, भले औसत पिंग ठीक दिखे।",
        },
        {
          q: "क्या यह पिंग टेस्ट किसी गेम सर्वर तक की स्पीड मापता है?",
          a: "नहीं। यह आपके डिवाइस से सबसे नज़दीकी Cloudflare डेटा सेंटर तक का राउंड-ट्रिप मापता है, जो आपके अपने कनेक्शन की गुणवत्ता दिखाता है। किसी खास गेम सर्वर तक आपका पिंग उस सर्वर की दूरी और रास्ते पर भी निर्भर करता है।",
        },
      ],
    },
    webrtc: {
      name: "WebRTC लीक टेस्ट",
      desc: "क्या आपका ब्राउज़र आपका असली IP लीक करता है?",
      title: "WebRTC लीक टेस्ट: क्या आपका VPN IP लीक कर रहा है?",
      description: "जाँचें कि VPN या प्रॉक्सी के साथ भी आपका ब्राउज़र WebRTC से आपका असली IP पता उजागर करता है या नहीं।",
      h1: "WebRTC लीक टेस्ट",
      lead: "ब्राउज़र VPN के पीछे भी WebRTC से आपका असली IP उजागर कर सकते हैं। टेस्ट चलाकर देखें कि क्या उजागर हो रहा है।",
      about:
        "WebRTC लीक टेस्ट जाँचता है कि आपका ब्राउज़र ऐसा IP पता तो उजागर नहीं कर रहा जो उससे अलग है जो वेबसाइटें सामान्यतः देखती हैं। अगर आप VPN या प्रॉक्सी इस्तेमाल करते हैं तो यह सबसे ज़्यादा काम का है, क्योंकि लीक का मतलब है कि टनल के बावजूद आपका असली IP पता दिख रहा है। टेस्ट किसी सार्वजनिक STUN सर्वर से आपका IP उसी तरह पूछता है जैसे कोई वीडियो-कॉल साइट पूछती, और जवाब की तुलना आपके कनेक्शन से करता है।",
      faq: [
        {
          q: "WebRTC लीक क्या है?",
          a: "WebRTC ब्राउज़रों को वीडियो कॉल और फ़ाइल साझा करने के लिए सीधे जुड़ने देता है, और इसके लिए वह किसी STUN सर्वर से आपका सार्वजनिक IP पूछता है। कुछ ब्राउज़र VPN चालू होने पर भी इस तरह आपका असली IP लौटा देते हैं, जिससे आपकी सच्ची लोकेशन उजागर हो जाती है।",
        },
        {
          q: "WebRTC लीक कैसे ठीक करूँ?",
          a: "ऐसा VPN इस्तेमाल करें जो WebRTC लीक रोकता हो, अपने ब्राउज़र में WebRTC बंद करें (Firefox में media.peerconnection.enabled को false किया जा सकता है), या कोई भरोसेमंद एक्सटेंशन लगाएँ जो WebRTC को सीमित करे। फिर यह पक्का करने के लिए कि लीक चला गया, यह टेस्ट दोबारा चलाएँ।",
        },
      ],
    },
    subnet: {
      name: "सबनेट कैलकुलेटर",
      desc: "CIDR रेंज, मास्क और होस्ट की संख्या",
      title: "सबनेट कैलकुलेटर: CIDR और सबनेट मास्क",
      description: "IPv4 और IPv6 के लिए मुफ़्त सबनेट कैलकुलेटर: IP और CIDR से नेटवर्क पता, ब्रॉडकास्ट, होस्ट रेंज और उपयोग योग्य होस्ट निकालें।",
      h1: "सबनेट कैलकुलेटर",
      lead: "किसी भी IPv4 या IPv6 CIDR ब्लॉक के नेटवर्क रेंज, मास्क और उपयोग योग्य होस्ट निकालें।",
      about:
        "सबनेट कैलकुलेटर CIDR ब्लॉक को वे संख्याएँ बना देता है जो नेटवर्क कॉन्फ़िगर करने के लिए चाहिए: नेटवर्क और ब्रॉडकास्ट पते, पहला और आखिरी उपयोग योग्य होस्ट, सबनेट और वाइल्डकार्ड मास्क, और कितने होस्ट समा सकते हैं। यह IPv4 और IPv6 दोनों का समर्थन करता है और पूरी तरह आपके ब्राउज़र में चलता है, इसलिए आप जो भी टाइप करते हैं वह आपके डिवाइस से बाहर नहीं जाता।",
      faq: [
        {
          q: "क्या यह CIDR कैलकुलेटर है?",
          a: "हाँ। प्रीफ़िक्स लंबाई के साथ कोई भी IPv4 या IPv6 पता दर्ज करें, जैसे 10.0.0.0/20, और यह नेटवर्क पता, ब्रॉडकास्ट पता, सबनेट मास्क, वाइल्डकार्ड मास्क, पहला और आखिरी उपयोग योग्य होस्ट और होस्ट की संख्या लौटाता है। यह सबनेट मास्क कैलकुलेटर और IP रेंज कैलकुलेटर की तरह भी काम करता है।",
        },
        {
          q: "सबनेट मास्क कैसे निकालें?",
          a: "प्रीफ़िक्स लंबाई को उतने 1 बिट लिखें, फिर 32 पूरे करने तक 0 बिट, और हर 8 बिट के समूह को दशमलव में बदलें। /26 के लिए यह 11111111.11111111.11111111.11000000 है, यानी 255.255.255.192। यह कैलकुलेटर यह आपके लिए कर देता है और होस्ट रेंज भी देता है।",
        },
        {
          q: "/24 नेटवर्क में कितने होस्ट होते हैं?",
          a: "/24 नेटवर्क में 256 पते होते हैं, जिनमें से 254 डिवाइस के लिए उपयोग योग्य हैं। एक पता नेटवर्क ID है और एक ब्रॉडकास्ट पता। सबनेट मास्क 255.255.255.0 है।",
        },
        {
          q: "CIDR नोटेशन का क्या मतलब है?",
          a: "CIDR नोटेशन किसी नेटवर्क को एक पते, उसके बाद स्लैश और एक संख्या के रूप में लिखता है, जैसे 192.168.1.0/24। संख्या बताती है कि कितने शुरुआती बिट नेटवर्क की पहचान करते हैं, और बाकी बिट होस्ट की। बड़ी संख्या का मतलब छोटा नेटवर्क।",
        },
      ],
    },
  },

  home: {
    faq: [
      {
        q: "मेरा IP पता क्या है?",
        a: "आपका IP पता वह सार्वजनिक नंबर है जो इस पेज के ऊपर दिखता है। यह आपके इंटरनेट कनेक्शन को आपकी विज़िट की हर वेबसाइट और सेवा के सामने पहचानता है। घरेलू या मोबाइल नेटवर्क पर इसे आपके इंटरनेट प्रदाता ने दिया है, और उस कनेक्शन पर सभी लोग इसे साझा करते हैं।",
      },
      {
        q: "मैं अपना IP पता कैसे ढूँढूँ?",
        a: "इस पेज को खोलें और आपका सार्वजनिक IP पता आपकी अनुमानित लोकेशन और ISP के साथ तुरंत दिख जाता है। आपका डिवाइस घर के नेटवर्क के भीतर जो निजी IP पता इस्तेमाल करता है, उसे नेटवर्क सेटिंग में देखें, या Windows पर ipconfig अथवा macOS और Linux पर ifconfig चलाएँ।",
      },
      {
        q: "लोकेशन गलत या कुछ किलोमीटर दूर क्यों दिखती है?",
        a: "IP जियोलोकेशन प्रदाताओं के रिकॉर्ड और रूटिंग डेटा से बना अनुमान है, GPS से नहीं। यह आमतौर पर देश तक और अक्सर शहर तक सही रहता है, पर अक्सर आपके घर की जगह आपके ISP के सबसे नज़दीकी केंद्र की ओर इशारा करता है। VPN या मोबाइल नेटवर्क नतीजे को और दूर खिसका सकता है।",
      },
      {
        q: "IPv4 और IPv6 में क्या अंतर है?",
        a: "IPv4 पते 203.0.113.7 जैसे दिखते हैं और ऐसे केवल लगभग 4.3 अरब हैं। IPv6 पते 2001:db8::1 जैसे दिखते हैं और यह प्रारूप व्यावहारिक रूप से असीमित पते देता है। ज़्यादातर कनेक्शन दोनों इस्तेमाल कर सकते हैं। यह पेज वह दिखाता है जो आपके ब्राउज़र ने इस्तेमाल किया, और दूसरे को भी जाँचता है।",
      },
      {
        q: "क्या अपना IP पता साझा करना सुरक्षित है?",
        a: "अपना IP पता साझा करना आमतौर पर कम जोखिम वाला है। अकेले यह आपकी अनुमानित लोकेशन और ISP बताता है, आपका नाम या घर का पता नहीं। हाँ, इससे कोई आपके कनेक्शन पर ट्रैफ़िक भेज सकता है, इसलिए अगर आप सर्वर चलाते हैं या ऐसे गेम खेलते हैं जहाँ खिलाड़ी एक-दूसरे पर हमला करते हैं तो इसे सार्वजनिक रूप से न डालें, और छिपाना हो तो VPN इस्तेमाल करें।",
      },
      {
        q: "क्या ipcomet मेरा IP पता सहेजता है?",
        a: "नहीं। हमारा कोड आपका IP पता सहेजता, लॉग करता या बेचता नहीं है, और कोई विज्ञापन नहीं है। पेज आपका IP अनुरोध से पढ़ता है, आपको दिखाता है और भूल जाता है। अगर आप वैकल्पिक एनालिटिक्स बैनर स्वीकार करते हैं, तो Google Analytics कुकीज़ से विज़िट गिनता है और आपके देखे पेज दर्ज करता है, पर आपके खोजे पते नहीं; मना करने पर कुछ भी सेट नहीं होता। पूरी जानकारी के लिए गोपनीयता पेज देखें।",
      },
    ],
  },

  about: {
    title: "ipcomet के बारे में: हमारे टूल कैसे काम करते हैं",
    description: "ipcomet का हर नेटवर्क टूल कैसे काम करता है, उसका डेटा कहाँ से आता है और वह कितना सटीक है। मुफ़्त, बिना विज्ञापन; एनालिटिक्स केवल आपकी सहमति से।",
    h1: "ipcomet के बारे में",
    lead: "ipcomet नेटवर्क टूल और सरल भाषा के गाइड का मुफ़्त संग्रह है। यह Cloudflare Workers पर चलता है, और साइट का अपना कोड कोई रिकॉर्ड नहीं रखता कि इसे कौन इस्तेमाल करता है।",
    sources: [
      ["आपका IP और कनेक्शन", "Cloudflare के नेटवर्क द्वारा अनुरोध से ही पढ़ा गया: आपका IP पता, Cloudflare के अपने जियोलोकेशन डेटा से अनुमानित लोकेशन और नेटवर्क का मालिक, सबसे नज़दीकी Cloudflare डेटा सेंटर, HTTP और TLS संस्करण और राउंड-ट्रिप समय। आपके IPv4 और IPv6 पतों की पुष्टि ipify भी करता है।"],
      ["IP लुकअप", "ipwho.is से लोकेशन और नेटवर्क डेटा, ipapi.is और geojs.io बैकअप के रूप में, और होस्टनेम के लिए लाइव रिवर्स DNS लुकअप। नतीजे एक दिन तक कैश रहते हैं।"],
      ["DNS लुकअप और रिवर्स DNS", "आपकी चुनी Cloudflare 1.1.1.1 या Google 8.8.8.8 से HTTPS पर लाइव DNS। ipcomet जवाबों को कैश नहीं करता।"],
      ["WHOIS", "RDAP, WHOIS का आधुनिक विकल्प, rdap.org के ज़रिए, जो हर क्वेरी उस रजिस्ट्री को भेजता है जिसके पास रिकॉर्ड है।"],
      ["IP प्रतिष्ठा", "Tor प्रोजेक्ट की प्रकाशित एग्ज़िट सूची, पते का मालिक नेटवर्क किस प्रकार का है (घरेलू ISP, मोबाइल ऑपरेटर, होस्टिंग कंपनी या VPN प्रदाता), उसके रिवर्स DNS नाम के संकेत, और पाँच सार्वजनिक ब्लॉकलिस्ट: SpamCop, DroneBL, Passive Spam Block List, s5h.net और UCEPROTECT Level 1।"],
      ["प्रॉक्सी चेकर", "हमारा सर्वर Cloudflare के नेटवर्क से आपके दर्ज किए प्रॉक्सी से कनेक्ट होता है और उसके ज़रिए Cloudflare के अपने टेस्ट एंडपॉइंट (www.cloudflare.com और speed.cloudflare.com) तक HTTPS टनल खोलता है। वह एग्ज़िट IP, जवाब के समय और 1 MB का डाउनलोड पढ़ता है, फिर एग्ज़िट IP को उसी तरह खोजता है जैसे IP लुकअप और IP प्रतिष्ठा। अगर आप जाँचने के लिए कोई वेबसाइट जोड़ते हैं, तो वह आपके प्रॉक्सी से केवल वही एक पेज माँगता है और सिर्फ़ स्टेटस कोड बताता है।"],
      ["स्पीड टेस्ट और पिंग", "लेटेंसी आपके ब्राउज़र और सबसे नज़दीकी Cloudflare डेटा सेंटर के बीच मापी जाती है। डाउनलोड और अपलोड सीधे आपके ब्राउज़र और Cloudflare के अपने स्पीड-टेस्ट सर्वरों (speed.cloudflare.com) के बीच छह समानांतर कनेक्शनों पर चलते हैं। पहले 1.5 सेकंड को अनदेखा किया जाता है और सबसे धीमे व सबसे तेज़ नमूने हटा दिए जाते हैं, इसलिए संख्या आपकी स्थिर स्पीड दिखाती है। नतीजे आपके अपने कनेक्शन की गुणवत्ता दिखाते हैं, किसी खास गेम या स्ट्रीमिंग सर्वर तक का रास्ता नहीं।"],
      ["पोर्ट चेकर", "Cloudflare के नेटवर्क से उस IP पते तक TCP कनेक्शन की कोशिश जिससे आप साइट देख रहे हैं। इसे किसी और के पते पर नहीं लगाया जा सकता।"],
      ["WebRTC लीक टेस्ट", "आपका ब्राउज़र stun.cloudflare.com से अपना सार्वजनिक पता पूछता है, जैसे कोई वीडियो-कॉल साइट पूछती, और पेज जवाब की तुलना आपके कनेक्शन से करता है।"],
      ["HTTP हेडर", "आपके ब्राउज़र ने इस पेज को जो हेडर भेजे, ठीक वैसे जैसे हमारे सर्वर को मिले।"],
      ["ब्राउज़र जानकारी और सबनेट कैलकुलेटर", "आपके ब्राउज़र में ही निकाले जाते हैं। इन पेजों पर आप जो देखते या टाइप करते हैं, उनमें से कुछ भी हमें नहीं भेजा जाता।"],
    ],
    body: `<h2>यह किस काम का है</h2>
<p>ज़्यादातर लोग एक ही जवाब के लिए आते हैं: <a href="/hi/">मेरा IP पता क्या है</a>। बाकी टूल अगले सवालों के जवाब देते हैं, जैसे <a href="/hi/lookup">कोई IP पता कहाँ है</a>, <a href="/hi/dns">किसी डोमेन के DNS रिकॉर्ड क्या कहते हैं</a>, <a href="/hi/whois">किसी डोमेन को किसने पंजीकृत किया</a>, <a href="/hi/speed-test">कनेक्शन कितना तेज़ है</a> और <a href="/hi/port">कोई पोर्ट खुला है या नहीं</a>।</p>
<h2>डेटा कहाँ से आता है</h2>
<p>साइट का हर नतीजा नीचे दिए स्रोतों में से किसी एक से आता है, और जहाँ कोई नतीजा केवल अनुमान है वहाँ पेज यह बताते हैं।</p>
{{sources}}
<h2>नतीजे कितने सटीक हैं?</h2>
<p>IP जियोलोकेशन अनुमानित है। यह नेटवर्क पंजीकरण और मापों से बनता है, GPS से नहीं, इसलिए आमतौर पर देश सही होता है, अक्सर क्षेत्र, और शहर केवल कभी-कभी। यह अक्सर आपके घर की जगह आपके प्रदाता के सबसे नज़दीकी केंद्र की ओर इशारा करता है, और मोबाइल, सैटेलाइट और VPN कनेक्शन सैकड़ों किलोमीटर दूर दिख सकते हैं।</p>
<p>VPN, प्रॉक्सी और Tor की पहचान संकेतों पर आधारित है। Tor को आधिकारिक एग्ज़िट सूची से जाँचा जाता है, लेकिन VPN या प्रॉक्सी का अनुमान केवल इससे लगाया जा सकता है कि पते का मालिक कौन है, उसका रिवर्स DNS नाम क्या है और वह ब्लॉकलिस्ट में है या नहीं। घरेलू प्रॉक्सी सामान्य घरेलू कनेक्शन जैसे दिखते हैं और इस तरह पहचाने नहीं जा सकते। <a href="/hi/reputation">प्रतिष्ठा जाँच</a> को संकेतक मानें, सबूत नहीं।</p>
<h2>गाइड</h2>
<p><a href="/learn" hreflang="en" lang="en">गाइड</a> अभी केवल अंग्रेज़ी में हैं। हर गाइड एक ख़ास सवाल का जवाब देता है और अपनी आखिरी अपडेट की तारीख़ दिखाता है। अनुवाद हम तभी प्रकाशित करेंगे जब कोई व्यक्ति जो यह भाषा बोलता है उन्हें जाँच ले।</p>
<h2>संपर्क कैसे करें?</h2>
<p><a href="mailto:hello@ipcomet.com">hello@ipcomet.com</a> पर लिखें। किसी गाइड में सुधार, कोई अनुवाद जो सही न लगे, किसी टूल का अजीब नतीजा, या काम करने के तरीके से जुड़ा सवाल — सभी का स्वागत है। अनुवादित पेजों के सुधार खास तौर पर उपयोगी हैं, क्योंकि वे AI की मदद से लिखे गए हैं।</p>
<h2>गोपनीयता</h2>
<p>कोई विज्ञापन नहीं है, और हमारा कोड आने वालों के IP पते सहेजता या लॉग नहीं करता। एकमात्र कुकीज़ वैकल्पिक Google Analytics की हैं, जो केवल तभी लोड होता है जब आप बैनर में उसे स्वीकार करें। <a href="/hi/privacy">गोपनीयता पेज</a> इस विकल्प को समझाता है और हर उस तीसरे पक्ष की सेवा को सूचीबद्ध करता है जिससे कोई टूल संपर्क करता है।</p>`,
  },

  privacy: {
    title: "गोपनीयता नीति",
    description: "ipcomet आपका IP पता सहेजता नहीं, विज्ञापन नहीं दिखाता और Google Analytics तभी इस्तेमाल करता है जब आप सहमत हों। जानें कि आपके डेटा का क्या होता है।",
    h1: "गोपनीयता",
    lead: "संक्षेप में: हम आपको आपकी अपनी जानकारी दिखाते हैं और फिर भूल जाते हैं।",
    body: `<h2>हम आपके IP पते का क्या करते हैं</h2>
<p>आपका IP पता आने वाले अनुरोध से पढ़ा जाता है ताकि आपको वापस दिखाया जा सके। हमारा कोड उसे किसी डेटाबेस, लॉग या किसी भंडारण में नहीं लिखता, और उसे कभी बेचा नहीं जाता या विज्ञापन के लिए साझा नहीं किया जाता।</p>
<h2>कुकीज़ और एनालिटिक्स</h2>
<p>डिफ़ॉल्ट रूप से हम कोई कुकी सेट नहीं करते और आपके ब्राउज़र में कुछ भी नहीं सहेजते, सिवाय इसके कि बैनर का जवाब देने के बाद आपके चुनाव का एक नोट रखा जाता है। अगर आप <strong>स्वीकार करें</strong> पर क्लिक करते हैं, तो हम विज़िट गिनने के लिए Google Analytics (Google LLC का) लोड करते हैं। यह विज़िट को अलग पहचानने के लिए <code>_ga</code> और <code>_ga_</code> के बाद एक पहचान वाली कुकीज़ सेट करता है, और Google को आपका देखा हुआ पेज, ब्राउज़र और डिवाइस का प्रकार, आपकी अनुमानित लोकेशन और आप कैसे पहुँचे, यह भेजता है। हम पहले पेज के पते में प्रश्नचिह्न के बाद की हर चीज़ हटा देते हैं, इसलिए आपके खोजे पते नहीं भेजे जाते, और हम Google सिग्नल व विज्ञापन निजीकरण बंद रखते हैं। Google Analytics 4 IP पते स्टोर नहीं करता, और डेटा 14 महीने रखा जाता है।</p>
<p>अगर आप <strong>अस्वीकार करें</strong> पर क्लिक करते हैं, या आपका ब्राउज़र Global Privacy Control संकेत भेजता है, तो Google Analytics कभी लोड नहीं होता और Google को कुछ नहीं भेजा जाता। आप कभी भी हर पेज के नीचे “एनालिटिक्स विकल्प” लिंक से अपना चुनाव बदल सकते हैं। हम विज्ञापन स्क्रिप्ट कभी इस्तेमाल नहीं करते।</p>
<h2>होस्टिंग</h2>
<p>यह साइट Cloudflare Workers पर चलती है। Cloudflare हमारे होस्टिंग प्रदाता के रूप में हर अनुरोध को प्रोसेस करता है और उसे अपनी गोपनीयता नीति के तहत संभालता है। हम भारी टूल के दुरुपयोग को रोकने के लिए Cloudflare की रेट लिमिटिंग भी इस्तेमाल करते हैं, जो आपके कनेक्शन के पते का इस्तेमाल केवल हाल के अनुरोध गिनने के लिए करती है।</p>
<h2>तीसरे पक्ष की सेवाएँ</h2>
<ul>
<li><strong>ipify.</strong> आपके IPv4 और IPv6 पते दिखाने के लिए आपका ब्राउज़र api4.ipify.org और api6.ipify.org से पूछता है। वे सेवाएँ आपका पता देखती हैं, जैसे आपकी विज़िट की कोई भी वेबसाइट।</li>
<li><strong>ipwho.is, ipapi.is और geojs.io.</strong> जब आप अपने IP के अलावा कोई IP पता खोजते हैं, तो हमारा सर्वर लोकेशन डेटा के लिए वह पता ipwho.is को भेजता है, और उपलब्ध न होने पर ipapi.is और फिर geojs.io पर जाता है। नतीजे एक दिन तक कैश रहते हैं।</li>
<li><strong>Cloudflare DNS और Google DNS.</strong> DNS और लुकअप टूल में आप जो डोमेन नाम पूछते हैं, वे आपके चुने रिज़ॉल्वर को भेजे जाते हैं।</li>
<li><strong>RDAP.</strong> WHOIS टूल में आप जो डोमेन और IP पते दर्ज करते हैं, वे rdap.org को भेजे जाते हैं, जो एक सार्वजनिक रीडायरेक्टर है और क्वेरी को उस रजिस्ट्री तक पहुँचाता है जिसके पास रिकॉर्ड है।</li>
<li><strong>ब्लॉकलिस्ट और Tor एग्ज़िट सूची.</strong> IP प्रतिष्ठा टूल आपके दिए पते (या खाली छोड़ने पर आपके अपने) को पाँच सार्वजनिक DNS ब्लॉकलिस्ट से जाँचता है: SpamCop, DroneBL, Passive Spam Block List, s5h.net और UCEPROTECT। यह Tor प्रोजेक्ट की एग्ज़िट नोड की सार्वजनिक सूची भी डाउनलोड करता है।</li>
<li><strong>STUN.</strong> WebRTC टेस्ट आपके ब्राउज़र से stun.cloudflare.com से आपका सार्वजनिक पता पूछता है, जैसे कोई वीडियो-कॉल साइट पूछती।</li>
<li><strong>Cloudflare के स्पीड सर्वर।</strong> स्पीड और पिंग टेस्ट अपना टेस्ट डेटा सीधे आपके ब्राउज़र और speed.cloudflare.com, यानी Cloudflare के अपने स्पीड-टेस्ट सर्वरों, के बीच भेजते और पाते हैं। वे आपका IP पता देखते हैं, जैसे आपकी विज़िट की कोई भी वेबसाइट, और अनुरोधों में कोई कुकी नहीं होती। अगर वे उपलब्ध न हों, तो टेस्ट हमारे अपने सर्वर पर लौट आते हैं।</li>
<li><strong>Google Analytics (केवल सहमति पर)।</strong> बैनर में स्वीकार करें पर क्लिक करने के बाद, आपका ब्राउज़र googletagmanager.com से Google Analytics लोड करता है और विज़िट का डेटा google-analytics.com को भेजता है, जैसा ऊपर कुकीज़ और एनालिटिक्स में बताया गया है। Google इसे आपके देश के बाहर के सर्वरों पर प्रोसेस कर सकता है। अगर आप अस्वीकार करते हैं, तो इनमें से कुछ नहीं होता।</li>
</ul>
<h2>प्रॉक्सी चेकर</h2>
<p>जब आप कोई प्रॉक्सी जाँचते हैं, तो आपका दर्ज किया पता और कोई भी यूज़रनेम-पासवर्ड HTTPS पर हमारे सर्वर को भेजे जाते हैं, उसी एक जाँच के लिए इस्तेमाल होते हैं और फिर हटा दिए जाते हैं। उन्हें सहेजा नहीं जाता और लॉग में नहीं लिखा जाता। हमारा सर्वर Cloudflare के नेटवर्क से आपके प्रॉक्सी से कनेक्ट होता है और उसके ज़रिए Cloudflare के टेस्ट एंडपॉइंट (www.cloudflare.com और speed.cloudflare.com) तथा, अगर आप कोई दर्ज करें, तो आपकी चुनी वेबसाइट को अनुरोध भेजता है। इसलिए आपका प्रॉक्सी प्रदाता वे अनुरोध Cloudflare से आते देखता है, आपसे नहीं। प्रॉक्सी जो एग्ज़िट IP पता बताता है, उसे फिर ऊपर बताई उन्हीं सेवाओं से खोजा जाता है।</p>
<h2>पोर्ट चेकर</h2>
<p>पोर्ट चेकर केवल उस IP पते से कनेक्ट होता है जिससे आप साइट देख रहे हैं। इसे किसी और के पते पर नहीं लगाया जा सकता।</p>
<h2>इस नीति से जुड़े सवाल</h2>
<p>इस नीति या इस साइट द्वारा संभाले जाने वाले डेटा से जुड़े किसी भी सवाल के लिए <a href="mailto:hello@ipcomet.com">hello@ipcomet.com</a> पर लिखें।</p>
<h2>बदलाव</h2>
<p>अगर यह नीति बदलती है, तो नया संस्करण यहीं दिखेगा। अंग्रेज़ी संस्करण ही आधार है।</p>`,
  },
};
