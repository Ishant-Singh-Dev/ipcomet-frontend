import type { LocaleData } from "./types";

/**
 * German (formal "Sie"). Interface strings are keyed by the English text (see types.ts). Placeholders such as {n}
 * must stay exactly as written. The guides are not translated yet, so strings that point to them say "(EN)".
 */
export const de: LocaleData = {
  ui: {
    "8.8.8.8 or example.com": "8.8.8.8 oder example.com",
    "(redirects to {url})": "(leitet weiter zu {url})",
    "© {year} ipcomet. Served from the Cloudflare network, close to you.": "© {year} ipcomet. Ausgeliefert über das Cloudflare-Netzwerk, ganz in Ihrer Nähe.",
    ASN: "ASN",
    About: "Über uns",
    "About and methodology": "Über uns und Methodik",
    "Contact": "Kontakt",
    "About {name}": "Über: {name}",
    "Accepted formats: {formats}. Your proxy details are used for this one check and are never stored or logged.":
      "Akzeptierte Formate: {formats}. Ihre Proxy-Daten werden nur für diese eine Prüfung verwendet und niemals gespeichert oder protokolliert.",
    "Add your credentials and check again.": "Geben Sie Ihre Zugangsdaten an und prüfen Sie erneut.",
    "All articles →": "Alle Ratgeber (EN) →",
    "All languages": "Alle Sprachen",
    "All records": "Alle Einträge",
    "All tools": "Alle Tools",
    Architecture: "Architektur",
    "Auto-detect": "Automatisch erkennen",
    Average: "Durchschnitt",
    Best: "Bester Wert",
    "Blocklist checks are not available for this address.": "Die Blocklisten-Prüfung ist für diese Adresse nicht verfügbar.",
    "Blocklist checks cover IPv4 only.": "Die Blocklisten-Prüfung deckt nur IPv4 ab.",
    Blocklists: "Blocklisten",
    Broadcast: "Broadcast-Adresse",
    Browser: "Browser",
    "Built and maintained by {name}.": "Entwickelt und betreut von {name}.",
    "Count visits with Google Analytics? It uses cookies. Declining changes nothing else on the site.": "Besuche mit Google Analytics zählen? Dabei werden Cookies verwendet. Ablehnen ändert nichts weiter an der Website.",
    Accept: "Akzeptieren",
    Decline: "Ablehnen",
    "Analytics choices": "Analyse-Einstellungen",
    "Analytics consent": "Einwilligung zur Analyse",
    CIDR: "CIDR",
    "CIDR block": "CIDR-Block",
    "CPU threads": "CPU-Threads",
    Calculate: "Berechnen",
    "Check IP": "IP prüfen",
    "Check my IP": "Meine IP anzeigen",
    "Check port": "Port prüfen",
    "Check proxy": "Proxy prüfen",
    "Check the host and port, and that the proxy is online and reachable from the internet.": "Prüfen Sie Host und Port und ob der Proxy online und aus dem Internet erreichbar ist.",
    "Check the host and port, and that the proxy is online.": "Prüfen Sie Host und Port und ob der Proxy online ist.",
    "Check the host and port. Some providers use a different port for SOCKS5 than for HTTP, and some only accept allow-listed IP addresses.":
      "Prüfen Sie Host und Port. Manche Anbieter verwenden für SOCKS5 einen anderen Port als für HTTP, und manche akzeptieren nur freigegebene IP-Adressen.",
    "Check whether it looks like a VPN, proxy, Tor exit or data center, and whether it is on spam and abuse blocklists.":
      "Prüfen Sie, ob sie wie ein VPN, ein Proxy, ein Tor-Ausgangsknoten oder ein Rechenzentrum aussieht und ob sie auf Spam- und Missbrauchs-Blocklisten steht.",
    "Checked {ip} in {ms} ms.": "{ip} in {ms} ms geprüft.",
    "Checking blocklists and network type…": "Blocklisten und Netzwerktyp werden geprüft …",
    "Checking {ip} from Cloudflare's network. You can only test your own IP, and a service must be running and allowed through your firewall and router for a port to show as open.":
      "{ip} wird aus dem Cloudflare-Netzwerk geprüft. Sie können nur Ihre eigene IP testen, und damit ein Port als offen erscheint, muss ein Dienst laufen und von Firewall und Router durchgelassen werden.",
    "Checking…": "Prüfung läuft …",
    "Checking… {i} of {total}": "Prüfung läuft … {i} von {total}",
    City: "Stadt",
    Clean: "Sauber",
    "Color depth": "Farbtiefe",
    "Connect to proxy": "Verbindung zum Proxy",
    "Connecting through your proxy. This usually takes 5 to 15 seconds…": "Verbindung über Ihren Proxy wird aufgebaut. Das dauert meist 5 bis 15 Sekunden …",
    "Connecting…": "Verbindung wird aufgebaut …",
    Connection: "Verbindung",
    "Cookies enabled": "Cookies aktiviert",
    Coordinates: "Koordinaten",
    Copied: "Kopiert",
    Copy: "Kopieren",
    "Copy IP": "IP kopieren",
    "Could not check": "Nicht prüfbar",
    "Could not connect to the proxy.": "Verbindung zum Proxy nicht möglich.",
    "Could not open a connection to the proxy.": "Es konnte keine Verbindung zum Proxy geöffnet werden.",
    "Could not reach the proxy.": "Proxy nicht erreichbar.",
    "Could not resolve that domain right now.": "Diese Domain konnte gerade nicht aufgelöst werden.",
    "Could not resolve the proxy hostname right now. Please try again.": "Der Hostname des Proxys konnte gerade nicht aufgelöst werden. Bitte versuchen Sie es erneut.",
    Country: "Land",
    "Credentials sent": "Zugangsdaten gesendet",
    "Cross-site requests are not allowed.": "Websiteübergreifende Anfragen sind nicht erlaubt.",
    DNSSEC: "DNSSEC",
    "DNS resolver unavailable. Please try again.": "DNS-Resolver nicht verfügbar. Bitte versuchen Sie es erneut.",
    "Dark mode": "Dunkelmodus",
    Details: "Details",
    "Device model": "Gerätemodell",
    Display: "Anzeige",
    "Do Not Track": "Do Not Track",
    Domain: "Domain",
    "Domain or IP": "Domain oder IP",
    Done: "Fertig",
    Download: "Download",
    "Download sample": "Download-Stichprobe",
    "Download speed": "Download-Tempo",
    "Edge location": "Edge-Standort",
    Encryption: "Verschlüsselung",
    "English guide · {n} min read": "Englischer Ratgeber · {n} Min. Lesezeit",
    "Enter a port between 1 and 65535.": "Geben Sie einen Port zwischen 1 und 65535 ein.",
    "Enter a proxy, such as host:port or user:password@host:port.": "Geben Sie einen Proxy ein, etwa host:port oder user:password@host:port.",
    "Enter a valid IPv4 or IPv6 address.": "Geben Sie eine gültige IPv4- oder IPv6-Adresse ein.",
    "Enter a valid domain name or IP address.": "Geben Sie einen gültigen Domainnamen oder eine gültige IP-Adresse ein.",
    "Enter a valid domain or IP address.": "Geben Sie eine gültige Domain oder IP-Adresse ein.",
    "Enter a valid proxy hostname or IP address.": "Geben Sie einen gültigen Proxy-Hostnamen oder eine gültige IP-Adresse ein.",
    "Enter a website name for the target, not an IP address.": "Geben Sie als Ziel den Namen einer Website ein, keine IP-Adresse.",
    "Enter an IP address or domain.": "Geben Sie eine IP-Adresse oder Domain ein.",
    "Enter an IP address, e.g. 8.8.8.8": "Geben Sie eine IP-Adresse ein, z. B. 8.8.8.8",
    "Enter an IP address, for example 8.8.8.8. For a domain name, use the DNS lookup instead.":
      "Geben Sie eine IP-Adresse ein, zum Beispiel 8.8.8.8. Für einen Domainnamen nutzen Sie stattdessen die DNS-Abfrage.",
    "Enter an IPv4 or IPv6 address, optionally followed by /prefix (for example 192.168.1.0/24).":
      "Geben Sie eine IPv4- oder IPv6-Adresse ein, optional gefolgt von /Präfix (zum Beispiel 192.168.1.0/24).",
    "Enter one proxy at a time, without spaces.": "Geben Sie jeweils nur einen Proxy ein, ohne Leerzeichen.",
    Error: "Fehler",
    "Everything you need to inspect, test and troubleshoot a connection, with no sign-up.": "Alles, was Sie brauchen, um eine Verbindung zu untersuchen, zu testen und Fehler zu finden, ohne Anmeldung.",
    "Excellent. This is great for online gaming and video calls.": "Ausgezeichnet. Bestens für Online-Spiele und Videoanrufe.",
    "Exit IP": "Ausgangs-IP",
    "Exit IP and reputation": "Ausgangs-IP und Reputation",
    "Exit IPs seen": "Gesehene Ausgangs-IPs",
    Expires: "Läuft ab am",
    "Fair. Fine for browsing and calls, and you may notice lag in fast games.": "Ordentlich. Reicht zum Surfen und Telefonieren, in schnellen Spielen kann es aber ruckeln.",
    "Fast, private network tools. Find your IP address, look up DNS and WHOIS records, test your speed and more.":
      "Schnelle, private Netzwerk-Tools. Finden Sie Ihre IP-Adresse, fragen Sie DNS- und WHOIS-Einträge ab, testen Sie Ihr Tempo und mehr.",
    "First address": "Erste Adresse",
    "First host": "Erster Host",
    "Free network tools": "Kostenlose Netzwerk-Tools",
    "Frequently asked questions": "Häufige Fragen",
    "Gathering WebRTC candidates…": "WebRTC-Kandidaten werden gesammelt …",
    "Good. Fine for gaming, calls and everything else.": "Gut. Passt für Spiele, Anrufe und alles andere.",
    "HTTP alt": "HTTP alt.",
    Handle: "Kennung (Handle)",
    "Headers marked “added by proxy” come from the network in between, not from your browser. Websites can read all of the others.":
      "Als „von Proxy ergänzt“ markierte Header stammen vom Netzwerk dazwischen, nicht von Ihrem Browser. Websites können alle anderen auslesen.",
    Hide: "Verbergen",
    "High. You will notice lag. Try a wired connection, move closer to your router or restart it.":
      "Hoch. Sie werden Verzögerungen bemerken. Versuchen Sie eine Kabelverbindung, gehen Sie näher an den Router oder starten Sie ihn neu.",
    Home: "Startseite",
    Hostname: "Hostname",
    "Hosting or data center network": "Hosting- oder Rechenzentrumsnetz",
    "If your provider uses IP allow-listing instead of a username and password, requests from our servers are not on your list, so this tool cannot test it.":
      "Wenn Ihr Anbieter statt Benutzername und Passwort eine Liste freigegebener IP-Adressen nutzt, stehen Anfragen unserer Server nicht auf Ihrer Liste, daher kann dieses Tool ihn nicht testen.",
    "IP address": "IP-Adresse",
    "IP address or domain": "IP-Adresse oder Domain",
    "IP version": "IP-Version",
    "IP websites see": "IP, die Websites sehen",
    "IPv6 example": "IPv6-Beispiel",
    ISP: "Provider",
    "Is your IP flagged?": "Ist Ihre IP markiert?",
    "It may be the other protocol type, or it may be ignoring our servers.": "Es könnte der andere Protokolltyp sein, oder der Proxy ignoriert unsere Server.",
    "It may be the other protocol type, or it may not accept connections from our servers.":
      "Es könnte der andere Protokolltyp sein, oder der Proxy nimmt keine Verbindungen von unseren Servern an.",
    Jitter: "Jitter",
    "Known VPN or proxy network": "Bekanntes VPN- oder Proxy-Netz",
    Language: "Sprache",
    "Last address": "Letzte Adresse",
    "Last changed": "Zuletzt geändert",
    "Last host": "Letzter Host",
    Latency: "Latenz",
    "Latency to edge": "Latenz zum Edge-Server",
    Learn: "Ratgeber (EN)",
    "Learn about IP addresses": "Alles über IP-Adressen (Ratgeber auf Englisch)",
    "Leave credentials out of the target address.": "Lassen Sie Zugangsdaten in der Zieladresse weg.",
    "Leave empty to check your own IP": "Leer lassen, um Ihre eigene IP zu prüfen",
    "Likely a residential or mobile ISP": "Wahrscheinlich ein privater oder mobiler Provider",
    Listed: "Gelistet",
    "Listed on {n} of {total} blocklists checked. This can affect email delivery and some websites.":
      "Auf {n} von {total} geprüften Blocklisten gelistet. Das kann die Zustellung von E-Mails und den Zugriff auf manche Websites beeinträchtigen.",
    "Listed on {n} of {total}: {names}": "Auf {n} von {total} Listen gelistet: {names}",
    "Loading…": "Wird geladen …",
    "Local addresses": "Lokale Adressen",
    "Locale and system": "Sprache und System",
    Location: "Standort",
    "Location data is temporarily unavailable for this address. Please try again in a moment.":
      "Standortdaten sind für diese Adresse vorübergehend nicht verfügbar. Bitte versuchen Sie es gleich noch einmal.",
    "Location is approximate. It comes from your IP address, not GPS, and often points to your ISP's nearest hub instead of your home.":
      "Der Standort ist nur eine Näherung. Er stammt aus Ihrer IP-Adresse, nicht aus GPS, und zeigt oft auf den nächsten Knoten Ihres Providers statt auf Ihr Zuhause.",
    "Look up": "Abfragen",
    "Look up hostname": "Hostnamen suchen",
    "My IP": "Meine IP",
    "Looking up PTR record…": "PTR-Eintrag wird gesucht …",
    "Looking up…": "Abfrage läuft …",
    Lookup: "Abfragen",
    "Measured from Cloudflare's network near you{edge}, not from your device, and from one 1 MB sample, so use the numbers to compare proxies with each other. Tests run over encrypted HTTPS tunnels, so the transparent, anonymous and elite labels, which depend on HTTP headers, do not apply.":
      "Gemessen aus dem Cloudflare-Netzwerk in Ihrer Nähe{edge}, nicht von Ihrem Gerät aus, und anhand einer einzigen 1-MB-Stichprobe; nutzen Sie die Werte, um Proxys miteinander zu vergleichen. Die Tests laufen über verschlüsselte HTTPS-Tunnel, daher gelten die Einstufungen „transparent“, „anonym“ und „Elite“, die von HTTP-Headern abhängen, hier nicht.",
    "Measured from your device to the nearest Cloudflare data center{colo}. It shows the quality of your own connection, not the route to a particular game server.":
      "Gemessen von Ihrem Gerät bis zum nächsten Cloudflare-Rechenzentrum{colo}. Das zeigt die Qualität Ihrer eigenen Verbindung, nicht den Weg zu einem bestimmten Spieleserver.",
    "Measuring latency…": "Latenz wird gemessen …",
    Memory: "Arbeitsspeicher",
    Mobile: "Mobil",
    "More tools": "Weitere Tools",
    Nameservers: "Nameserver",
    Network: "Netzwerk",
    "Network address": "Netzadresse",
    "Network type": "Netzwerktyp",
    No: "Nein",
    "No PTR record found for {q}. The owner has not set a reverse name, which is common for home connections.":
      "Für {q} wurde kein PTR-Eintrag gefunden. Der Inhaber hat keinen Reverse-Namen gesetzt, was bei Heimanschlüssen üblich ist.",
    "No VPN or hosting signs found. Residential proxies and some VPNs cannot be detected from public data.":
      "Keine Hinweise auf VPN oder Hosting gefunden. Private Proxys und manche VPNs lassen sich anhand öffentlicher Daten nicht erkennen.",
    "No ads. Analytics only if you accept.": "Keine Werbung. Analyse nur mit Ihrer Zustimmung.",
    "No answer": "Keine Antwort",
    "No credentials needed": "Keine Zugangsdaten nötig",
    "No registration record found for that IP.": "Für diese IP wurde kein Registrierungseintrag gefunden.",
    "No registration record found. The domain may not be registered, or its registry doesn't support RDAP.":
      "Kein Registrierungseintrag gefunden. Die Domain ist möglicherweise nicht registriert, oder ihre Registrierungsstelle unterstützt RDAP nicht.",
    "No replies. Check your connection and try again.": "Keine Antworten. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
    "No {type} records.": "Keine {type}-Einträge.",
    None: "Keine",
    "None (hidden by browser)": "Keine (vom Browser verborgen)",
    "None of the checks got an answer, so your connection may be offline.": "Keine der Prüfungen wurde beantwortet, Ihre Verbindung ist möglicherweise offline.",
    "Not detected": "Nicht erkannt",
    "Not enough data came back to measure speed.": "Es kamen nicht genug Daten zurück, um das Tempo zu messen.",
    "Not found": "Nicht gefunden",
    "Not listed on any of the {total} blocklists that answered.": "Auf keiner der {total} antwortenden Blocklisten gelistet.",
    "Not listed on any of {total} checked": "Auf keiner der {total} geprüften Listen gelistet",
    "Not measured": "Nicht gemessen",
    "Not sure what that means? Read {link}.": "Nicht sicher, was das bedeutet? Lesen Sie {link}.",
    "Not working": "Funktioniert nicht",
    Off: "Aus",
    On: "Ein",
    Online: "Online",
    "Only https:// targets can be tested.": "Nur Ziele mit https:// können getestet werden.",
    "Only the standard HTTPS port (443) can be tested.": "Nur der Standard-HTTPS-Port (443) kann getestet werden.",
    "Open menu": "Menü öffnen",
    "Operating system": "Betriebssystem",
    Organization: "Organisation",
    "PTR query": "PTR-Abfrage",
    "Packet loss": "Paketverlust",
    "Page not found": "Seite nicht gefunden",
    "Page not found.": "Seite nicht gefunden.",
    Parent: "Übergeordnet",
    "Password (optional)": "Passwort (optional)",
    "Pixel ratio": "Pixelverhältnis",
    "Port 25 can't be tested from Cloudflare Workers.": "Port 25 kann von Cloudflare Workers aus nicht getestet werden.",
    "Port checks only work from a public IP address, so they are unavailable on a local network.":
      "Port-Prüfungen funktionieren nur von einer öffentlichen IP-Adresse aus und sind daher in einem lokalen Netzwerk nicht verfügbar.",
    "Port number": "Portnummer",
    "Port {port} is closed": "Port {port} ist geschlossen",
    "Port {port} is open": "Port {port} ist offen",
    "Port {port}: no response": "Port {port}: keine Antwort",
    "Port, e.g. 443": "Port, z. B. 443",
    "Postal code": "Postleitzahl",
    "Prefix length must be between 0 and 128.": "Die Präfixlänge muss zwischen 0 und 128 liegen.",
    "Prefix length must be between 0 and 32.": "Die Präfixlänge muss zwischen 0 und 32 liegen.",
    "Press start to measure": "Zum Messen auf Start drücken",
    Primary: "Hauptnavigation",
    Privacy: "Datenschutz",
    Protocol: "Protokoll",
    Proxy: "Proxy",
    "Proxy address": "Proxy-Adresse",
    "Proxy handshake": "Handshake mit dem Proxy",
    "Proxy password": "Proxy-Passwort",
    "Proxy type": "Proxy-Typ",
    "Proxy username": "Proxy-Benutzername",
    "Public IP via WebRTC": "Öffentliche IP über WebRTC",
    "Querying DNS…": "DNS wird abgefragt …",
    Range: "Bereich",
    "Ready when you are": "Bereit, wenn Sie es sind",
    "Record type": "Eintragstyp",
    Registered: "Registriert am",
    Registrar: "Registrar",
    "Related guides": "Passende Ratgeber (EN)",
    "Resolved from": "Aufgelöst aus",
    Resolver: "Resolver",
    "Resolver returned {rcode}.": "Der Resolver lieferte {rcode}.",
    "Results for {name} via {resolver} DNS": "Ergebnisse für {name} über {resolver}-DNS",
    "Test steps": "Testschritte",
    "Idle latency": "Latenz im Leerlauf",
    "Latency while downloading": "Latenz beim Download",
    "Latency while uploading": "Latenz beim Upload",
    "Steady speed, Mbps": "Stabiles Tempo, Mbit/s",
    "Round trip, nothing else running": "Umlaufzeit, sonst läuft nichts",
    "How much the delay varies": "Wie stark die Verzögerung schwankt",
    "Loaded round trip": "Umlaufzeit unter Last",
    "Bufferbloat grade": "Bufferbloat-Note",
    "How much your latency rises when the line is busy. It decides whether calls and games stay smooth while someone else is downloading.": "Wie stark Ihre Latenz steigt, wenn die Leitung ausgelastet ist. Davon hängt ab, ob Anrufe und Spiele flüssig bleiben, während jemand anderes etwas herunterlädt.",
    "What this connection can handle": "Was diese Verbindung schafft",
    "4K streaming": "4K-Streaming",
    "HD video calls": "HD-Videoanrufe",
    "Online gaming": "Online-Gaming",
    "Uploading large files": "Große Dateien hochladen",
    "Peak {n} Mbps": "Spitze {n} Mbit/s",
    "Latency rose by {ms} ms under load.": "Die Latenz stieg unter Last um {ms} ms.",
    "Calls and games should stay smooth even while the line is busy.": "Anrufe und Spiele sollten auch bei ausgelasteter Leitung flüssig bleiben.",
    "You may notice lag in calls and games while someone else is downloading or uploading.": "Sie bemerken eventuell Verzögerungen in Anrufen und Spielen, während jemand anderes lädt oder hochlädt.",
    "Calls and games are likely to stutter whenever the line is busy. Smart queue management (SQM) on your router usually fixes this.": "Anrufe und Spiele ruckeln wahrscheinlich, sobald die Leitung ausgelastet ist. Smart Queue Management (SQM) auf Ihrem Router behebt das meist.",
    "Great": "Sehr gut",
    "Works": "Geht",
    "Struggles": "Schwierig",
    "This test moved {mb} MB in {s} seconds.": "Dieser Test hat {mb} MB in {s} Sekunden übertragen.",
    "Results reflect the path to the nearest Cloudflare data center{colo}, which is typically faster than a trip to a far-away server. Each direction runs until the speed settles (5 to 15 seconds), so on a fast line the test can use several hundred megabytes.": "Die Ergebnisse spiegeln den Weg zum nächsten Cloudflare-Rechenzentrum{colo} wider, der meist schneller ist als der zu einem weit entfernten Server. Jede Richtung läuft, bis sich das Tempo stabilisiert (5 bis 15 Sekunden), daher kann der Test auf einer schnellen Leitung mehrere hundert Megabyte verbrauchen.",
    Rotation: "Rotation",
    "Rotating: {ips} different IPs in {n} requests": "Mit Rotation: {ips} verschiedene IPs bei {n} Anfragen",
    "Run again": "Erneut ausführen",
    "Run test": "Test starten",
    "Run the reputation check": "Reputation prüfen",
    SOCKS5: "SOCKS5",
    "Same exit IP in all {n} requests (static or sticky)": "Dieselbe Ausgangs-IP bei allen {n} Anfragen (statisch oder dauerhaft)",
    Screen: "Bildschirm",
    Search: "Suchen",
    "Searching registry…": "Register wird durchsucht …",
    "Short, plain-English guides on how the internet identifies you and what you can do about it.":
      "Kurze, verständliche Ratgeber (auf Englisch) dazu, wie das Internet Sie erkennt und was Sie dagegen tun können.",
    Show: "Anzeigen",
    "Sign-in": "Anmeldung",
    Sitemap: "Sitemap",
    "Some requests failed: {errors}": "Einige Anfragen sind fehlgeschlagen: {errors}",
    "Something accepted the connection.": "Etwas hat die Verbindung angenommen.",
    "Something went wrong on our side. Please try again.": "Auf unserer Seite ist etwas schiefgelaufen. Bitte versuchen Sie es erneut.",
    "Start ping test": "Ping-Test starten",
    "Start test": "Test starten",
    Status: "Status",
    "Subnet mask": "Subnetzmaske",
    "Success rate": "Erfolgsquote",
    TTL: "TTL",
    "Test a website through it, e.g. https://example.com (optional)": "Eine Website darüber testen, z. B. https://example.com (optional)",
    "Test again": "Erneut testen",
    "Test for WebRTC leaks": "Auf WebRTC-Lecks testen",
    "Testing download…": "Download wird getestet …",
    "Testing upload…": "Upload wird getestet …",
    "That doesn't look like a valid IP address or domain.": "Das sieht nicht nach einer gültigen IP-Adresse oder Domain aus.",
    "That IPv6 address is not valid. Use the format [address]:port.": "Diese IPv6-Adresse ist ungültig. Verwenden Sie das Format [Adresse]:Port.",
    "That is a private or reserved address.": "Das ist eine private oder reservierte Adresse.",
    "That is a private or reserved address. Only proxies reachable from the public internet can be tested.":
      "Das ist eine private oder reservierte Adresse. Getestet werden können nur Proxys, die aus dem öffentlichen Internet erreichbar sind.",
    "That is a private or reserved address, so it has no public location.": "Das ist eine private oder reservierte Adresse, sie hat daher keinen öffentlichen Standort.",
    "That is a private or reserved address, so it has no public reputation.": "Das ist eine private oder reservierte Adresse, sie hat daher keine öffentliche Reputation.",
    "That page doesn't exist. Try one of the tools below.": "Diese Seite gibt es nicht. Probieren Sie eines der Tools unten.",
    "That request is too large.": "Diese Anfrage ist zu groß.",
    "That target address is not a valid URL.": "Diese Zieladresse ist keine gültige URL.",
    "That target address is too long.": "Diese Zieladresse ist zu lang.",
    "The SOCKS5 proxy sent an invalid reply.": "Der SOCKS5-Proxy hat eine ungültige Antwort gesendet.",
    "The connection closed before the full answer arrived.": "Die Verbindung wurde geschlossen, bevor die vollständige Antwort eintraf.",
    "The connection dropped while talking to the proxy.": "Die Verbindung brach bei der Kommunikation mit dem Proxy ab.",
    "The connection timed out. A firewall is probably silently dropping traffic, or the host is unreachable.":
      "Zeitüberschreitung bei der Verbindung. Vermutlich verwirft eine Firewall den Datenverkehr stillschweigend, oder der Host ist nicht erreichbar.",
    "The connection was refused. Nothing is listening, or a firewall rejected it.": "Die Verbindung wurde abgelehnt. Es lauscht nichts, oder eine Firewall hat sie abgewiesen.",
    "The destination closed the connection without answering.": "Das Ziel hat die Verbindung ohne Antwort geschlossen.",
    "The destination did not answer with valid HTTP.": "Das Ziel hat nicht mit gültigem HTTP geantwortet.",
    "The network owner or hostname matches a VPN or proxy provider.": "Der Netzbetreiber oder der Hostname passt zu einem VPN- oder Proxy-Anbieter.",
    "The only public IPs WebRTC exposed match the ones websites already see. No leak.":
      "Die einzigen von WebRTC preisgegebenen öffentlichen IPs entsprechen denen, die Websites ohnehin sehen. Kein Leck.",
    "The proxy asked for an authentication method this tool does not support.": "Der Proxy verlangt eine Authentifizierungsmethode, die dieses Tool nicht unterstützt.",
    "The proxy connected but did not answer in time.": "Der Proxy hat die Verbindung angenommen, aber nicht rechtzeitig geantwortet.",
    "The proxy did not accept username and password authentication.": "Der Proxy hat die Anmeldung mit Benutzername und Passwort nicht akzeptiert.",
    "The proxy may be intercepting HTTPS traffic, or it may be blocking this destination.": "Der Proxy fängt möglicherweise HTTPS-Verkehr ab oder blockiert dieses Ziel.",
    "The proxy may be overloaded or its upstream may be down.": "Der Proxy ist möglicherweise überlastet, oder seine Upstream-Verbindung ist ausgefallen.",
    "The proxy opened a tunnel but the test request timed out.": "Der Proxy hat einen Tunnel geöffnet, aber die Testanfrage lief in eine Zeitüberschreitung.",
    "The proxy refused the connection (HTTP 403).": "Der Proxy hat die Verbindung abgelehnt (HTTP 403).",
    "The proxy rejected the username and password (HTTP 407).": "Der Proxy hat Benutzername und Passwort abgelehnt (HTTP 407).",
    "The proxy rejected the username and password.": "Der Proxy hat Benutzername und Passwort abgelehnt.",
    "The proxy sent unexpected data after opening the tunnel.": "Der Proxy hat nach dem Öffnen des Tunnels unerwartete Daten gesendet.",
    "The registry did not respond. Please try again.": "Die Registrierungsstelle hat nicht geantwortet. Bitte versuchen Sie es erneut.",
    "The registry took too long to respond. Please try again.": "Die Registrierungsstelle hat zu lange für die Antwort gebraucht. Bitte versuchen Sie es erneut.",
    "The resolver took too long to answer.": "Der Resolver hat zu lange für die Antwort gebraucht.",
    "The server answered, but not like an HTTP proxy. If this is a SOCKS5 proxy, choose SOCKS5.":
      "Der Server hat geantwortet, aber nicht wie ein HTTP-Proxy. Handelt es sich um einen SOCKS5-Proxy, wählen Sie SOCKS5.",
    "The server closed the connection without answering. It may not be an HTTP proxy, or it may not accept connections from our servers.":
      "Der Server hat die Verbindung ohne Antwort geschlossen. Möglicherweise ist es kein HTTP-Proxy, oder er nimmt keine Verbindungen von unseren Servern an.",
    "The server did not answer like a SOCKS5 proxy. If this is an HTTP proxy, choose HTTP.":
      "Der Server hat nicht wie ein SOCKS5-Proxy geantwortet. Handelt es sich um einen HTTP-Proxy, wählen Sie HTTP.",
    "The server did not answer like an HTTP or SOCKS5 proxy.": "Der Server hat nicht wie ein HTTP- oder SOCKS5-Proxy geantwortet.",
    "The server sent an oversized response header.": "Der Server hat einen übergroßen Antwort-Header gesendet.",
    "The target did not answer in time through this proxy.": "Das Ziel hat über diesen Proxy nicht rechtzeitig geantwortet.",
    "The test couldn't complete. Your browser or network may be blocking WebRTC probes.":
      "Der Test konnte nicht abgeschlossen werden. Ihr Browser oder Ihr Netzwerk blockiert möglicherweise WebRTC-Abfragen.",
    "The test was interrupted. Check your connection and try again.": "Der Test wurde unterbrochen. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
    "The tunnel opened, but the secure (TLS) connection through it failed.": "Der Tunnel wurde geöffnet, aber die sichere (TLS-)Verbindung durch ihn ist fehlgeschlagen.",
    "The username and password must each be 255 bytes or fewer.": "Benutzername und Passwort dürfen jeweils höchstens 255 Bytes lang sein.",
    "These are indicators, not proof. Spamhaus lists are not queried because Spamhaus blocks public DNS resolvers.":
      "Das sind Indikatoren, keine Beweise. Spamhaus-Listen werden nicht abgefragt, weil Spamhaus öffentliche DNS-Resolver blockiert.",
    "This address belongs to a server network. VPNs, proxies and bots usually appear this way, while home users rarely do.":
      "Diese Adresse gehört zu einem Servernetz. VPNs, Proxys und Bots erscheinen meist so, Privatanwender selten.",
    "This browser doesn't support WebRTC, so it can't leak anything this way.": "Dieser Browser unterstützt WebRTC nicht und kann auf diesem Weg daher nichts preisgeben.",
    "This domain does not exist (NXDOMAIN).": "Diese Domain existiert nicht (NXDOMAIN).",
    "This page was translated with AI and may contain mistakes. The English version is the reference.":
      "Diese Seite wurde mit KI-Unterstützung übersetzt und kann Fehler enthalten. Maßgeblich ist die englische Version.",
    "This proxy requires a username and password (HTTP 407).": "Dieser Proxy verlangt Benutzername und Passwort (HTTP 407).",
    "This proxy requires a username and password.": "Dieser Proxy verlangt Benutzername und Passwort.",
    "Time to first byte": "Zeit bis zum ersten Byte",
    "Timed out connecting to the proxy.": "Zeitüberschreitung beim Verbinden mit dem Proxy.",
    Timezone: "Zeitzone",
    Timing: "Zeitmessung",
    "Too many checks in a row. Please wait a minute and try again.": "Zu viele Prüfungen hintereinander. Bitte warten Sie eine Minute und versuchen Sie es erneut.",
    "Too many requests. Please wait a minute and try again.": "Zu viele Anfragen. Bitte warten Sie eine Minute und versuchen Sie es erneut.",
    Tools: "Tools",
    "Tor exit example": "Tor-Ausgangsknoten (Beispiel)",
    "Tor exit node": "Tor-Ausgangsknoten",
    "Total addresses": "Adressen insgesamt",
    "Touch points": "Berührungspunkte",
    Type: "Typ",
    Unknown: "Unbekannt",
    "Unexpected error while talking to the proxy.": "Unerwarteter Fehler bei der Kommunikation mit dem Proxy.",
    "Unstable: {n} of {total} requests succeeded": "Instabil: {n} von {total} Anfragen waren erfolgreich",
    Upload: "Upload",
    "Usable hosts": "Nutzbare Hosts",
    "Use host:port, user:password@host:port, or host:port:user:password. If the password contains a colon, use the separate password field.":
      "Verwenden Sie host:port, user:password@host:port oder host:port:user:password. Enthält das Passwort einen Doppelpunkt, nutzen Sie das separate Passwortfeld.",
    "User agent": "User-Agent",
    "Username (optional)": "Benutzername (optional)",
    "Username and password accepted": "Benutzername und Passwort akzeptiert",
    Viewport: "Darstellungsbereich",
    "WebRTC didn't expose any public IP address. You're not leaking through it.": "WebRTC hat keine öffentliche IP-Adresse preisgegeben. Über diesen Weg gibt es kein Leck.",
    "WebRTC exposed {ips}, which is different from the IP websites see ({ip}). If you're using a VPN, this could be a leak of your real address.":
      "WebRTC hat {ips} preisgegeben, was sich von der IP unterscheidet, die Websites sehen ({ip}). Wenn Sie ein VPN nutzen, könnte das ein Leck Ihrer echten Adresse sein.",
    "Website test": "Website-Test",
    "Website to test through the proxy": "Website, die über den Proxy getestet werden soll",
    "What is my IP address?": "Wie lautet meine IP-Adresse?",
    "Whole request": "Gesamte Anfrage",
    "Wildcard mask": "Wildcard-Maske",
    Working: "Funktioniert",
    "Working…": "Wird bearbeitet …",
    Worst: "Schlechtester Wert",
    Yes: "Ja",
    "Your ping is unstable. Packet loss or jitter like this causes stutter in calls and games. Try a wired connection and restart your router.":
      "Ihr Ping ist instabil. Paketverlust oder Jitter in diesem Ausmaß verursacht Ruckeln bei Anrufen und Spielen. Versuchen Sie eine Kabelverbindung und starten Sie Ihren Router neu.",
    "added by proxy": "von Proxy ergänzt",
    "example.com or 8.8.8.8": "example.com oder 8.8.8.8",
    "host:port or user:password@host:port": "host:port oder user:password@host:port",
    "ms avg": "ms Ø",
    "n/a": "k. A.",
    "proxy errors 407, 403 and 502: causes and fixes": "Proxy-Fehler 407, 403 und 502: Ursachen und Lösungen (auf Englisch)",
    "{host} answered HTTP {status} in {ms} ms.": "{host} antwortete mit HTTP {status} in {ms} ms.",
    "{host} answered HTTP {status} through this proxy in {ms} ms. That usually means the site is blocking or limiting this proxy.":
      "{host} antwortete über diesen Proxy mit HTTP {status} in {ms} ms. Das bedeutet meist, dass die Website diesen Proxy blockiert oder drosselt.",
    "{host} answered HTTP {status}{redirect} in {ms} ms. The proxy can reach this site.": "{host} antwortete mit HTTP {status}{redirect} in {ms} ms. Der Proxy kann diese Website erreichen.",
    "{mb} MB in {ms} ms": "{mb} MB in {ms} ms",
    "{mb} MB in {ms} ms (stopped early)": "{mb} MB in {ms} ms (vorzeitig beendet)",
    "DroneBL (botnets and open proxies)": "DroneBL (Botnetze und offene Proxys)",
    "{n} GB": "{n} GB",
    Signed: "Signiert",
    Unsigned: "Nicht signiert",
    "Check for typos and for any required format in the username.": "Prüfen Sie auf Tippfehler und darauf, ob der Benutzername ein vorgeschriebenes Format haben muss.",
    "It may block this destination, or only accept allow-listed IP addresses.": "Er blockiert möglicherweise dieses Ziel oder akzeptiert nur freigegebene IP-Adressen.",
  },

  tools: {
    ip: {
      name: "Meine IP",
      desc: "Ihre öffentliche IP-Adresse, Standort und Provider",
      title: "Was ist meine IP? Öffentliche IP-Adresse herausfinden",
      description: "Was ist meine IP? Finden Sie Ihre öffentliche IP-Adresse sofort heraus und prüfen Sie Standort, Provider und Verbindung. Kostenlos, ohne Werbung.",
      h1: "Wie lautet meine IP-Adresse?",
      lead: "Ihre öffentliche IP-Adresse, Ihr ungefährer Standort und Ihr Provider, sofort angezeigt.",
      about: "",
      faq: [],
    },
    lookup: {
      name: "IP-Abfrage",
      desc: "Standort, Provider und ASN jeder IP oder Domain",
      title: "IP-Abfrage: Standort, Provider und Inhaber jeder IP",
      description: "Kostenloses IP-Lookup: IP-Adresse oder Domain eingeben und Standort, Provider, ASN und Hostname sehen. Unterstützt IPv4 und IPv6.",
      h1: "IP-Adressen-Abfrage",
      lead: "Finden Sie Standort, Provider und Netzwerk jeder IP-Adresse oder Domain.",
      about:
        "Eine IP-Abfrage zeigt Ihnen, wo ein Server oder eine Verbindung im Internet zu liegen scheint und wer das Netzwerk dahinter betreibt. Nutzen Sie sie, um zu prüfen, wo eine Website gehostet wird, verdächtigen Datenverkehr in Ihren Logs zu untersuchen, zu bestätigen, dass ein VPN funktioniert, oder herauszufinden, welchem Anbieter eine Adresse gehört. Die Ergebnisse enthalten Stadt, Region, Land, Zeitzone, Provider, Organisation und die Nummer des autonomen Systems (ASN) sowie den Hostnamen, wenn ein Reverse-DNS-Eintrag existiert.",
      faq: [
        {
          q: "Wie finde ich die IP-Adresse einer Website?",
          a: "Geben Sie den Domainnamen, etwa example.com, in das Feld oben ein und klicken Sie auf Abfragen. Das Tool löst den Namen in die aktuelle IP-Adresse auf und zeigt dann, wo dieser Server steht, wer das Netzwerk betreibt und wie der Hostname lautet.",
        },
        {
          q: "Wie genau ist eine IP-Abfrage?",
          a: "Das Land stimmt fast immer, die Stadt meistens, und alles Genauere ist eine grobe Schätzung. Provider und ASN stammen aus öffentlichen Routing-Registern und sind zuverlässig. Eine Abfrage kann weder eine Wohnadresse noch die Identität einer Person offenlegen.",
        },
        {
          q: "Kann ich auch einen Domainnamen statt einer IP abfragen?",
          a: "Ja. Geben Sie eine Domain wie example.com ein, das Tool löst sie zunächst in die aktuelle IP-Adresse auf und zeigt dann Standort, Netzwerk und Hostnamen des dahinterliegenden Servers. Websites hinter einem CDN zeigen das Netzwerk des CDN statt das des Ursprungsservers.",
        },
      ],
    },
    dns: {
      name: "DNS-Abfrage",
      desc: "A-, AAAA-, MX-, TXT-, NS-, CNAME-, SOA- und CAA-Einträge",
      title: "DNS-Abfrage: DNS-Einträge jeder Domain prüfen",
      description: "Kostenlose DNS-Abfrage: A-, AAAA-, MX-, TXT-, NS-, CNAME-, SOA- und CAA-Einträge über Cloudflare oder Google DNS, auch als Reverse-DNS.",
      h1: "DNS-Abfrage",
      lead: "Fragen Sie die aktuellen DNS-Einträge einer Domain ab oder lösen Sie eine IP-Adresse rückwärts auf.",
      about:
        "Das Domain Name System (DNS) übersetzt Namen wie example.com in die IP-Adressen, die Computer verwenden. Dieses Tool fragt das DNS live per HTTPS über Cloudflare 1.1.1.1 oder Google 8.8.8.8 ab, sodass Sie aktuelle Antworten sehen statt eines veralteten lokalen Caches. Es hilft bei der Prüfung der E-Mail-Einrichtung (MX, SPF und DKIM in TXT-Einträgen), beim Bestätigen eines Website-Umzugs, beim Debuggen eines CNAME oder beim Kontrollieren, ob ein neuer Eintrag veröffentlicht wurde.",
      faq: [
        {
          q: "Wie mache ich eine Reverse-DNS-Abfrage?",
          a: "Geben Sie statt eines Domainnamens eine IP-Adresse ein. Das Tool bildet den passenden in-addr.arpa- (IPv4) oder ip6.arpa-Namen (IPv6) und liefert den PTR-Eintrag, also den Hostnamen, den der Inhaber dieser Adresse zugewiesen hat, falls es einen gibt. Mailserver nutzen Reverse-DNS, um Absender zu prüfen.",
        },
        {
          q: "Welche DNS-Eintragstypen kann ich prüfen?",
          a: "Sie können A- und AAAA-Einträge für IP-Adressen prüfen, MX für Mailserver, TXT für SPF, DKIM und Verifizierungszeichenfolgen, NS für Nameserver, CNAME für Aliase, SOA für Zonendetails und CAA für Regeln der Zertifizierungsstellen. Geben Sie statt einer Domain eine IP-Adresse ein, um eine Reverse-Abfrage (PTR) auszuführen.",
        },
        {
          q: "Warum erscheinen meine DNS-Änderungen noch nicht?",
          a: "Resolver speichern Antworten für die TTL des Eintrags zwischen, daher kann eine Änderung Minuten bis Stunden brauchen, bis sie überall sichtbar ist. Wechseln Sie zwischen den Resolvern von Cloudflare und Google, um zu vergleichen, was jeder gerade liefert. Weichen sie voneinander ab, wird die Änderung noch verteilt.",
        },
      ],
    },
    "reverse-dns": {
      name: "Reverse-DNS",
      desc: "Hostnamen einer IP-Adresse finden",
      title: "Reverse-DNS-Abfrage: Hostname einer IP-Adresse finden",
      description: "Kostenlose Reverse-DNS-Abfrage: PTR-Eintrag und Hostname einer IPv4- oder IPv6-Adresse finden, nützlich zur Prüfung von Mailservern.",
      h1: "Reverse-DNS-Abfrage",
      lead: "Finden Sie den Hostnamen (PTR-Eintrag) zu jeder IPv4- oder IPv6-Adresse.",
      about:
        "Eine Reverse-DNS-Abfrage findet über den PTR-Eintrag den Hostnamen, der einer IP-Adresse zugewiesen wurde. So sehen Sie schnell, wer einen Server betreibt (ein Hoster, ein Mailserver oder ein Internetanbieter), können bestätigen, dass ein Mailserver richtig eingerichtet ist, oder eine unbekannte Adresse in Ihren Logs einordnen. Geben Sie eine IPv4- oder IPv6-Adresse ein, und die Abfrage liefert den PTR-Eintrag aus dem Live-DNS.",
      faq: [
        {
          q: "Was ist eine Reverse-DNS-Abfrage?",
          a: "Eine normale DNS-Abfrage macht aus einem Namen eine IP-Adresse. Eine Reverse-Abfrage macht das Gegenteil: Sie fragt, welchen Hostnamen der Inhaber einer IP-Adresse ihr zugewiesen hat, gespeichert in einem PTR-Eintrag. Viele Adressen haben keinen, besonders Heimanschlüsse.",
        },
        {
          q: "Warum ist Reverse-DNS für E-Mail wichtig?",
          a: "Mailserver prüfen oft, ob die IP des Absenders einen PTR-Eintrag hat, der zu dem Namen passt, den er angibt. Ein fehlender oder generischer Eintrag ist ein häufiger Grund, warum legitime E-Mails im Spam landen, daher richten Mailserver-Betreiber ihn bei ihrem Hoster ein.",
        },
      ],
    },
    reputation: {
      name: "IP-Reputation",
      desc: "VPN-, Proxy-, Tor- und Blocklisten-Erkennung",
      title: "VPN-Check: IP-Reputation, Proxy- und Blacklist-Test",
      description: "Kostenloser VPN-Check: Prüfen Sie, ob eine IP ein VPN, Proxy, Tor-Knoten oder Rechenzentrum ist und auf Spam-Blocklisten steht.",
      h1: "VPN-Check und IP-Reputationstest",
      lead: "Prüfen Sie, ob eine IP-Adresse wie ein VPN, ein Proxy, ein Tor-Ausgangsknoten oder ein Rechenzentrum aussieht und ob sie auf Spam- und Missbrauchs-Blocklisten steht.",
      about:
        "Eine IP-Reputationsprüfung zeigt, wie der Rest des Internets eine Adresse voraussichtlich behandelt. Wir kombinieren mehrere Signale: die offizielle Ausgangsknotenliste des Tor-Projekts, den Typ des Netzwerks, dem die Adresse gehört (privater Provider, Mobilfunkanbieter, Hoster oder VPN-Anbieter), Hinweise im Reverse-DNS-Namen und fünf öffentliche Spam- und Missbrauchs-Blocklisten. So finden Sie heraus, ob ein VPN erkennbar ist, warum eine Website Ihnen ständig Captchas zeigt oder warum Ihre E-Mails abgelehnt werden. Die Ergebnisse sind Indikatoren, keine Beweise.",
      faq: [
        {
          q: "Woher weiß ich, ob mein VPN funktioniert?",
          a: "Vergleichen Sie Adresse, Standort und Netzwerk bei ausgeschaltetem und eingeschaltetem VPN: Alles sollte sich ändern. Führen Sie dann den WebRTC-Leak-Test aus und prüfen Sie, ob die IPv6-Zeile auf der Startseite leer ist oder zum VPN gehört. Nutzen Sie schließlich diesen Check: Die Adresse eines funktionierenden VPN erscheint meist als Hosting- oder VPN-Netz, nicht als Ihr Internetanbieter.",
        },
        {
          q: "Kann man erkennen, ob ich ein VPN oder einen Proxy nutze?",
          a: "Nur teilweise. Wir prüfen, ob die Adresse auf der offiziellen Tor-Ausgangsliste steht, ob ihr Netzbetreiber ein bekannter VPN-Anbieter oder ein Hoster ist und ob ihr Hostname nach einem VPN aussieht. Die meisten VPNs laufen in Rechenzentrumsnetzen, die leicht zu erkennen sind. Private Proxys und manche private VPNs sehen aus wie gewöhnliche Heimanschlüsse und lassen sich anhand öffentlicher Daten nicht erkennen.",
        },
        {
          q: "Was bedeutet es, wenn meine IP auf einer Blockliste steht?",
          a: "Eine Blockliste ist eine öffentliche Liste von Adressen, die beim Versand von Spam oder missbräuchlichem Datenverkehr aufgefallen sind. Ein Eintrag kann dazu führen, dass Mailserver Ihre E-Mails ablehnen und manche Websites Sie prüfen oder sperren. Das passiert oft bei geteilten Adressen, etwa von VPN-Servern oder Mobilfunknetzen, wegen anderer Nutzer. Die meisten Listen haben ein Formular zur Löschung, und Einträge verfallen nach einiger Zeit von selbst.",
        },
        {
          q: "Warum fehlen die Spamhaus-Listen?",
          a: "Spamhaus lehnt Abfragen ab, die über große öffentliche DNS-Resolver eintreffen, daher kann eine so durchgeführte Prüfung keine verlässliche Antwort liefern. Wir zeigen nur Listen, die korrekt antworten, und markieren jede Liste, die nicht antwortet, als nicht verfügbar, statt zu raten.",
        },
      ],
    },
    "proxy-checker": {
      name: "Proxy-Checker",
      desc: "HTTP- und SOCKS5-Proxys testen: Tempo, Standort, Rotation",
      title: "Proxy-Checker: HTTP- und SOCKS5-Proxys online testen",
      description: "Kostenloser Proxy-Checker: HTTP- oder SOCKS5-Proxy auf Tempo, Ausgangs-IP, Standort, Rotation und Blocklisten testen, mit Benutzername und Passwort.",
      h1: "Proxy-Checker",
      lead: "Testen Sie jeden HTTP-, HTTPS- oder SOCKS5-Proxy. Sehen Sie, ob er funktioniert, wo er ausgeht, wie schnell er ist und ob sich seine IP ändert.",
      about:
        "Ein Proxy-Checker prüft, ob ein Proxyserver funktioniert und wie er für die Websites aussieht, mit denen Sie ihn nutzen. Geben Sie einen HTTP-, HTTPS- oder SOCKS5-Proxy ein, bei Bedarf mit Benutzername und Passwort, und dieses Tool verbindet sich darüber, zeigt die Ausgangs-IP-Adresse und ihren Standort, misst, wie schnell er antwortet und lädt, prüft, ob sich die Ausgangs-IP zwischen Anfragen ändert, und schlägt die Adresse in Spam-Blocklisten und in der Liste der Tor-Ausgangsknoten nach. Sie können auch testen, ob der Proxy eine bestimmte Website erreicht. Nichts, was Sie eingeben, wird gespeichert.",
      faq: [
        {
          q: "Wie prüfe ich, ob ein Proxy funktioniert?",
          a: "Geben Sie ihn als host:port ein, ergänzen Sie bei Bedarf Benutzername und Passwort und klicken Sie auf Proxy prüfen. Zeigt das Tool eine Ausgangs-IP, einen Standort und erfolgreiche Anfragen, funktioniert der Proxy. Schlägt es fehl, nennt die Meldung den Grund: falsche Zugangsdaten (HTTP 407), abgelehnte Verbindung, Zeitüberschreitung oder ein Server, der gar kein Proxy ist. Sie können auch im Terminal mit cURL testen: curl -x http://user:password@host:port https://www.cloudflare.com/cdn-cgi/trace",
        },
        {
          q: "Wird neben HTTP- und HTTPS-Proxys auch SOCKS5 unterstützt?",
          a: "Ja. Unterstützt werden HTTP- und HTTPS-Proxys mit der CONNECT-Methode sowie SOCKS5 mit oder ohne Benutzername und Passwort. Lassen Sie den Typ auf automatischer Erkennung, dann wird zuerst HTTP und danach SOCKS5 versucht. SOCKS4 und Proxys, die ein Client-Zertifikat verlangen, werden nicht unterstützt.",
        },
        {
          q: "Funktioniert der Proxy-Checker mit Decodo-Proxys?",
          a: "Ja, solange der Proxy Host, Port sowie Benutzername und Passwort nutzt. Decodo (früher Smartproxy) und die meisten anderen Anbieter zeigen diese Daten im Dashboard an. Fügen Sie sie ein, und der Checker zeigt die Ausgangs-IP, ihren Standort und das Tempo. Wenn Sie nur eine Freigabeliste für IP-Adressen nutzen, lesen Sie die nächste Frage.",
        },
        {
          q: "Kann ich einen Proxy testen, der eine IP-Whitelist nutzt?",
          a: "Nein. Der Test verbindet sich von unseren Servern aus, daher lehnt eine Freigabeliste, die nur Ihre eigene IP-Adresse enthält, ihn ab. Nutzen Sie für den Test stattdessen den Zugang Ihres Anbieters mit Benutzername und Passwort, falls er einen anbietet.",
        },
        {
          q: "Werden meine Proxy-Zugangsdaten gespeichert oder protokolliert?",
          a: "Nein. Die Proxy-Adresse und gegebenenfalls Benutzername und Passwort werden per HTTPS an unseren Server gesendet, für diese eine Prüfung verwendet und anschließend verworfen. Wir speichern sie nicht und schreiben sie nicht in Logs. Ihr Proxy-Anbieter sieht unsere Verbindung wie jede andere Anfrage, die er bearbeitet.",
        },
        {
          q: "Warum weicht das Tempo von dem auf meinem eigenen Rechner ab?",
          a: "Der Test läuft von einem Cloudflare-Rechenzentrum in Ihrer Nähe aus, nicht von Ihrem Gerät, und lädt eine kleine 1-MB-Stichprobe über eine Verbindung. Nutzen Sie ihn, um Proxys miteinander zu vergleichen und langsame zu erkennen. Für das tatsächliche Tempo testen Sie von dem Rechner aus, der den Proxy nutzen wird.",
        },
        {
          q: "Woran erkenne ich, ob ein Proxy rotiert?",
          a: "Der Checker sendet drei Anfragen über getrennte Verbindungen und listet die Ausgangs-IP jeder einzelnen auf. Verschiedene Adressen bedeuten einen rotierenden Proxy. Dieselbe Adresse bedeutet einen dauerhaften oder statischen Proxy. Eine dauerhafte Sitzung an einem rotierenden Gateway behält absichtlich mehrere Minuten dieselbe IP, dieses Ergebnis ist also zu erwarten.",
        },
      ],
    },
    whois: {
      name: "WHOIS",
      desc: "Registrierungsdaten von Domain oder IP",
      title: "WHOIS-Abfrage: Registrierungsdaten von Domain oder IP",
      description: "Registrar, Erstellungs- und Ablaufdatum und Nameserver einer Domain oder den Inhaber eines IP-Bereichs finden. Schnelles WHOIS über RDAP.",
      h1: "WHOIS-Abfrage",
      lead: "Registrar, Daten und Nameserver einer Domain oder Netzinhaber einer IP-Adresse.",
      about:
        "WHOIS-Daten zeigen, wer eine Domain registriert hat, welcher Registrar sie verwaltet, wann sie erstellt wurde und wann sie abläuft, dazu ihre Nameserver und Statuskennzeichen. Bei IP-Adressen zeigen sie den Netzblock, die besitzende Organisation und das regionale Register. Das ist praktisch, um zu prüfen, ob eine Domain frei ist, eine verdächtige Website zu recherchieren oder den richtigen Ansprechpartner für Missbrauchsmeldungen zu finden.",
      faq: [
        {
          q: "Was ist der Unterschied zwischen WHOIS und RDAP?",
          a: "RDAP ist der moderne Nachfolger des alten WHOIS-Protokolls. Es liefert strukturierte Daten über HTTPS und ist inzwischen der offizielle Standard für Registries und Registrare. Dieses Tool nutzt RDAP, daher sind die Ergebnisse einheitlich, auch wenn persönliche Kontaktdaten meist aus Datenschutzgründen geschwärzt sind.",
        },
        {
          q: "Warum ist der Inhaber einer Domain verborgen?",
          a: "Seit Datenschutzregeln wie die DSGVO gelten, schwärzen die meisten Registrare Name, E-Mail und Adresse des Inhabers in öffentlichen Daten. Sie sehen weiterhin den Registrar, Registrierungs- und Ablaufdatum, Statuscodes und Nameserver.",
        },
      ],
    },
    headers: {
      name: "HTTP-Header",
      desc: "Die Header, die Ihr Browser an Websites sendet",
      title: "HTTP-Header-Anzeige: Ihre Request-Header",
      description: "Alle HTTP-Request-Header Ihres Browsers anzeigen, darunter User-Agent, Sprache und Kodierung, sowie die von Proxys ergänzten.",
      h1: "HTTP-Header-Anzeige",
      lead: "Das sind die Request-Header, die Ihr Browser an diese Seite gesendet hat.",
      about:
        "Jedes Mal, wenn Ihr Browser eine Seite lädt, sendet er eine Reihe von HTTP-Headern, die ihn beschreiben. Diese Seite zeigt genau das, was bei unserem Server angekommen ist, also das, was jede Website sieht, die Sie besuchen. Als von einem Proxy ergänzt markierte Header stammen aus dem Netzwerk zwischen Ihnen und dem Server, etwa von einem CDN, und nicht von Ihrem Browser.",
      faq: [
        {
          q: "Was sind HTTP-Request-Header?",
          a: "Header sind kleine Informationen, die Ihr Browser mit jeder Anfrage sendet, etwa die bevorzugte Sprache, die akzeptierten Inhaltstypen und welchen Browser Sie nutzen. Server verwenden sie, um die passende Version einer Seite auszuliefern.",
        },
        {
          q: "Welche Header können mich identifizieren?",
          a: "User-Agent und Accept-Language sind am aufschlussreichsten, denn zusammen mit Ihrer IP-Adresse können sie helfen, einen Fingerabdruck zu bilden. Browser mit strengen Datenschutzeinstellungen verringern oder vereinheitlichen diese Werte.",
        },
      ],
    },
    browser: {
      name: "Browser-Info",
      desc: "User-Agent, Bildschirm, Sprache und mehr",
      title: "Was ist mein User-Agent? Browser- und Geräteinfo",
      description: "User-Agent, Browser, Betriebssystem, Bildschirmgröße, Sprache und Zeitzone anzeigen. Sehen Sie, was jede Website über Sie auslesen kann.",
      h1: "Was ist mein User-Agent?",
      lead: "Was jede Website über Ihren Browser und Ihr Gerät erfahren kann, ohne zu fragen.",
      about:
        "Ihr Browser verrät mehr, als die meisten erwarten. Diese Seite listet die Angaben auf, die JavaScript ohne jede Berechtigungsabfrage auslesen kann, darunter User-Agent, Plattform, Bildschirm- und Fenstergröße, Pixeldichte, bevorzugte Sprachen, Zeitzone und Hardware-Hinweise. Nichts von dem, was auf dieser Seite steht, wird irgendwohin gesendet: Alles wird lokal in Ihrem Browser gelesen.",
      faq: [
        {
          q: "Was ist ein User-Agent?",
          a: "Ein User-Agent ist eine Textzeile, die Ihr Browser an jede Website sendet, um anzugeben, welchen Browser, welche Version und welches Betriebssystem Sie nutzen. Websites verwenden sie, um die richtige Version einer Seite auszuliefern. Ihren eigenen sehen Sie oben auf dieser Seite und können ihn mit einem Klick kopieren.",
        },
        {
          q: "Kann ich meinen User-Agent ändern?",
          a: "Ja. Die Entwicklertools des Browsers und manche Erweiterungen können ihn zu Testzwecken überschreiben. Das verbirgt Ihre IP-Adresse nicht, und Websites erkennen Ihren echten Browser oft trotzdem an anderen Signalen.",
        },
        {
          q: "Was können Websites über meinen Browser erfahren?",
          a: "Ohne zu fragen, kann eine Website Ihren Browser und Ihr Betriebssystem, die Bildschirmgröße, die Sprache, die Zeitzone und oft auch die Anzahl der Prozessor-Threads und den Arbeitsspeicher auslesen. Zusammengenommen können diese Angaben Ihren Browser erstaunlich einzigartig machen, das nennt man Fingerprinting.",
        },
        {
          q: "Wie verringere ich, was mein Browser preisgibt?",
          a: "Nutzen Sie einen Browser mit Schutz vor Fingerprinting, etwa Firefox mit strengem Tracking-Schutz, Brave oder Safari. Halten Sie ihn aktuell, vermeiden Sie ungewöhnliche Erweiterungen, die Ihre Konfiguration noch einzigartiger machen, und erwägen Sie ein VPN, wenn Sie auch Ihre IP-Adresse verbergen möchten.",
        },
      ],
    },
    port: {
      name: "Port-Checker",
      desc: "Prüfen, ob ein Port auf Ihrer IP offen ist",
      title: "Port-Checker: Offene Ports Ihrer IP prüfen",
      description: "Kostenloser Port-Checker: Prüfen Sie, ob ein Port auf Ihrer öffentlichen IP offen ist (Portweiterleitung, Spieleserver, Plex, SSH, Remotedesktop).",
      h1: "Offene Ports prüfen",
      lead: "Prüfen Sie, ob ein TCP-Port auf Ihrer öffentlichen IP erreichbar ist. Praktisch für Portweiterleitung und Spieleserver.",
      about:
        "Ein Port-Checker testet, ob ein TCP-Port Ihrer öffentlichen IP-Adresse Verbindungen aus dem Internet annimmt. Nutzen Sie ihn, nachdem Sie die Portweiterleitung für einen Spieleserver, Plex, eine Überwachungskamera, SSH oder den Remotedesktop eingerichtet haben. Der Test läuft aus dem Cloudflare-Netzwerk und nur gegen Ihre eigene IP, zeigt also, was die Außenwelt tatsächlich sieht.",
      faq: [
        {
          q: "Wie prüfe ich, ob ein Port offen ist?",
          a: "Geben Sie oben die Portnummer ein und klicken Sie auf Port prüfen. Der Test verbindet sich aus dem Internet mit Ihrer öffentlichen IP-Adresse und meldet offen, geschlossen oder keine Antwort. Um vom eigenen Rechner aus zu prüfen, nutzen Sie unter Windows netstat oder Test-NetConnection, unter macOS und Linux ss und nc.",
        },
        {
          q: "Warum zeigt mein Port „geschlossen“, obwohl mein Server läuft?",
          a: "Meist blockiert eines von drei Dingen: Der Dienst lauscht nicht auf diesem Port, die Firewall Ihres Rechners blockiert ihn, oder Ihr Router leitet den Port nicht an Ihr Gerät weiter. Prüfen Sie außerdem, ob Ihr Anbieter Carrier-Grade NAT (CGNAT) einsetzt, das eingehende Verbindungen komplett verhindert.",
        },
        {
          q: "Ist es sicher, einen Port zu öffnen?",
          a: "Ein geöffneter Port macht alles, was dahinter lauscht, für das gesamte Internet erreichbar. Leiten Sie nur Ports für Software weiter, die Sie aktuell halten, nutzen Sie starke Authentifizierung und schließen Sie Ports, die Sie nicht mehr brauchen. Für den Fernzugriff auf private Dienste sind ein VPN oder ein Tunnel besser.",
        },
      ],
    },
    speed: {
      name: "Speedtest",
      desc: "Latenz, Download- und Upload-Tempo",
      title: "Internet-Speedtest: Download, Upload und Ping",
      description: "Kostenloser Speedtest: Download, Upload, Ping, Jitter und Latenz unter Last mit Bufferbloat-Note, gemessen zum nächsten Cloudflare-Rechenzentrum.",
      h1: "Internet-Speedtest",
      lead: "Messen Sie Download, Upload, Latenz im Leerlauf und unter Last (Bufferbloat) zwischen Ihrem Gerät und dem nächsten Cloudflare-Server.",
      about:
        "Dieser Speedtest misst, was im Alltag zählt. Die Latenz ist die Verzögerung einer einzelnen Hin- und Rückreise, der Jitter gibt an, wie stark diese Verzögerung schwankt, und Download und Upload sind der dauerhafte Durchsatz in Megabit pro Sekunde. Weil der Testpunkt das nächstgelegene Cloudflare-Rechenzentrum ist, spiegelt das Ergebnis die Qualität Ihrer eigenen Verbindung wider und nicht die eines weit entfernten Servers.",
      faq: [
        {
          q: "Wie funktioniert dieser Speedtest?",
          a: "Ihr Browser misst zuerst 20 Umlaufzeiten zum nächsten Cloudflare-Rechenzentrum, solange die Leitung frei ist. Dann lädt er über sechs parallele Übertragungen herunter und sendet anschließend Zufallsdaten auf dieselbe Weise hoch. Jede Richtung läuft, bis sich das Tempo stabilisiert hat, zwischen 5 und 15 Sekunden, und dabei wird alle Viertelsekunde eine Umlaufzeit gemessen, um die Latenz unter Last zu erfassen. Die ersten 1,5 Sekunden jeder Übertragung werden ignoriert und die langsamsten 20 % sowie die schnellsten 5 % der Messwerte verworfen, damit ein Hänger oder ein kurzer Spitzenwert das Ergebnis nicht verzerrt. Die Werte werden in Megabit pro Sekunde angegeben, der Einheit Ihres Tarifs.",
        },
        {
          q: "Warum ist mein Tempo niedriger als in meinem Tarif?",
          a: "WLAN-Signal, andere Geräte im Netz, ein alter Router, Überlastung zu Stoßzeiten und die Entfernung zum Testserver senken die Ergebnisse. Für den genauesten Wert nutzen Sie eine Kabelverbindung und pausieren während des Tests andere Downloads.",
        },
        {
          q: "Was ist Bufferbloat und was bedeutet die Note?",
          a: "Bufferbloat ist die zusätzliche Verzögerung, die entsteht, wenn ein Router oder Modem bei voller Leitung zu viele Daten zwischenspeichert. Eine Verbindung kann schnell sein und trotzdem in Anrufen und Spielen ruckeln, sobald jemand anderes etwas herunterlädt. Die Note vergleicht die Latenz beim Download oder Upload mit der Latenz im Leerlauf: ein Anstieg unter 5 ms ist A+, unter 30 ms A, unter 60 ms B, unter 200 ms C, unter 400 ms D und alles darüber F. Ein Router mit Smart Queue Management (SQM), etwa fq_codel oder CAKE, bringt den Wert meist auf A.",
        },
        {
          q: "Warum weicht mein Ergebnis von Ookla Speedtest oder fast.com ab?",
          a: "Jeder Test misst den Weg zu seinen eigenen Servern. Ookla wählt meist einen Server im oder nahe dem Netz Ihres Anbieters, fast.com nutzt die Videoserver von Netflix und dieser Test das nächste Cloudflare-Rechenzentrum. Die drei nehmen also unterschiedliche Wege und können um 10 % oder mehr abweichen. Sie behandeln außerdem Anlaufphase und Ausreißer unterschiedlich. Alle drei auszuführen und den niedrigsten stabilen Wert zu nehmen, ist eine faire Einschätzung Ihrer Leitung.",
        },
      ],
    },
    ping: {
      name: "Ping-Test",
      desc: "Latenz und Jitter prüfen",
      title: "Ping-Test und Latenztest: Latenz und Jitter prüfen",
      description: "Kostenloser Ping-Test und Latenztest. Messen Sie Latenz, Jitter und Paketverlust zum nächsten Cloudflare-Server in etwa 10 Sekunden.",
      h1: "Ping-Test",
      lead: "Messen Sie Latenz, Jitter und Paketverlust zum nächsten Cloudflare-Server in etwa zehn Sekunden.",
      about:
        "Der Ping ist die Zeit in Millisekunden, die eine winzige Nachricht von Ihrem Gerät zu einem Server und zurück braucht. Er entscheidet, ob sich ein Spiel flüssig oder verzögert anfühlt und ob ein Videoanruf stockt. Dieser Test sendet 25 schnelle Prüfungen an das nächste Cloudflare-Rechenzentrum und zeigt Ihren durchschnittlichen, besten und schlechtesten Wert, Ihren Jitter (wie stark er schwankt) und jeden Paketverlust. Da der Testserver in Ihrer Nähe steht, zeigt das Ergebnis den Zustand Ihrer eigenen Verbindung: WLAN, Router und Anbieter.",
      faq: [
        {
          q: "Was ist ein guter Ping?",
          a: "Unter etwa 30 ms ist ausgezeichnet, 30 bis 60 ms sind für fast alles gut, auch für Online-Spiele, 60 bis 100 ms reichen zum Surfen und für Videoanrufe, und über 150 ms bemerken Sie Verzögerungen in schnellen Spielen. Niedriger ist besser, und ein stabiler Ping ist so wichtig wie ein niedriger.",
        },
        {
          q: "Was bedeuten Jitter und Paketverlust?",
          a: "Jitter ist, wie stark Ihr Ping von einer Prüfung zur nächsten schwankt. Paketverlust ist der Anteil der Prüfungen, die nie eine Antwort bekamen. Hoher Jitter oder jeder Verlust verursacht Ruckeln bei Anrufen und Spielen, selbst wenn der durchschnittliche Ping gut aussieht.",
        },
        {
          q: "Misst dieser Ping-Test das Tempo zu einem Spieleserver?",
          a: "Nein. Er misst die Umlaufzeit von Ihrem Gerät zum nächsten Cloudflare-Rechenzentrum, was die Qualität Ihrer eigenen Verbindung zeigt. Ihr Ping zu einem bestimmten Spieleserver hängt zusätzlich von Entfernung und Route zu diesem Server ab.",
        },
      ],
    },
    webrtc: {
      name: "WebRTC-Leak-Test",
      desc: "Verrät Ihr Browser Ihre echte IP?",
      title: "WebRTC-Leak-Test: Verrät Ihr VPN Ihre IP?",
      description: "Prüfen Sie, ob Ihr Browser über WebRTC Ihre echte IP-Adresse preisgibt, auch mit VPN oder Proxy.",
      h1: "WebRTC-Leak-Test",
      lead: "Browser können über WebRTC Ihre echte IP verraten, selbst hinter einem VPN. Führen Sie den Test aus, um zu sehen, was preisgegeben wird.",
      about:
        "Ein WebRTC-Leak-Test prüft, ob Ihr Browser eine IP-Adresse preisgibt, die sich von der unterscheidet, die Websites normalerweise sehen. Er ist besonders nützlich, wenn Sie ein VPN oder einen Proxy nutzen, denn ein Leck bedeutet, dass Ihre echte IP-Adresse trotz Tunnel sichtbar ist. Der Test fragt einen öffentlichen STUN-Server nach Ihrer IP, so wie es eine Videoanruf-Website täte, und vergleicht die Antwort mit Ihrer Verbindung.",
      faq: [
        {
          q: "Was ist ein WebRTC-Leck?",
          a: "WebRTC lässt Browser sich direkt verbinden, etwa für Videoanrufe und Dateifreigabe, und fragt dafür einen STUN-Server nach Ihrer öffentlichen IP. Manche Browser liefern so Ihre echte IP auch bei aktivem VPN zurück und verraten damit Ihren tatsächlichen Standort.",
        },
        {
          q: "Wie behebe ich ein WebRTC-Leck?",
          a: "Nutzen Sie ein VPN, das WebRTC-Lecks blockiert, deaktivieren Sie WebRTC in Ihrem Browser (in Firefox können Sie media.peerconnection.enabled auf false setzen) oder installieren Sie eine vertrauenswürdige Erweiterung, die WebRTC einschränkt. Führen Sie danach diesen Test erneut aus, um zu bestätigen, dass das Leck behoben ist.",
        },
      ],
    },
    subnet: {
      name: "Subnetz-Rechner",
      desc: "CIDR-Bereiche, Masken und Host-Anzahl",
      title: "Subnetz-Rechner: CIDR und Subnetzmaske berechnen",
      description: "Kostenloser Subnetz-Rechner für IPv4 und IPv6: Netzadresse, Broadcast, Host-Bereich und nutzbare Hosts aus IP und CIDR berechnen.",
      h1: "Subnetz-Rechner",
      lead: "Berechnen Sie Netzbereiche, Masken und nutzbare Hosts für jeden IPv4- oder IPv6-CIDR-Block.",
      about:
        "Ein Subnetz-Rechner macht aus einem CIDR-Block die Zahlen, die Sie zum Konfigurieren eines Netzwerks brauchen: Netz- und Broadcast-Adresse, ersten und letzten nutzbaren Host, Subnetz- und Wildcard-Maske und wie viele Hosts hineinpassen. Er unterstützt IPv4 und IPv6 und läuft vollständig in Ihrem Browser, sodass nichts, was Sie eingeben, Ihr Gerät verlässt.",
      faq: [
        {
          q: "Ist das ein CIDR-Rechner?",
          a: "Ja. Geben Sie eine beliebige IPv4- oder IPv6-Adresse mit Präfixlänge ein, etwa 10.0.0.0/20, und er liefert Netzadresse, Broadcast-Adresse, Subnetzmaske, Wildcard-Maske, ersten und letzten nutzbaren Host und die Host-Anzahl. Er funktioniert auch als Subnetzmasken-Rechner und als IP-Bereichs-Rechner.",
        },
        {
          q: "Wie berechne ich eine Subnetzmaske?",
          a: "Schreiben Sie die Präfixlänge als entsprechend viele 1-Bits, gefolgt von 0-Bits bis 32, und wandeln Sie jede 8-Bit-Gruppe ins Dezimalsystem um. Für /26 ergibt das 11111111.11111111.11111111.11000000, also 255.255.255.192. Dieser Rechner erledigt das für Sie und liefert außerdem den Host-Bereich.",
        },
        {
          q: "Wie viele Hosts hat ein /24-Netz?",
          a: "Ein /24-Netz hat 256 Adressen, von denen 254 für Geräte nutzbar sind. Eine Adresse ist die Netzkennung und eine die Broadcast-Adresse. Die Subnetzmaske lautet 255.255.255.0.",
        },
        {
          q: "Was bedeutet die CIDR-Schreibweise?",
          a: "Die CIDR-Schreibweise gibt ein Netz als Adresse, einen Schrägstrich und eine Zahl an, etwa 192.168.1.0/24. Die Zahl gibt an, wie viele führende Bits das Netz kennzeichnen, die übrigen Bits kennzeichnen Hosts. Eine größere Zahl bedeutet ein kleineres Netz.",
        },
      ],
    },
  },

  home: {
    faq: [
      {
        q: "Was ist meine IP-Adresse?",
        a: "Ihre IP-Adresse, wonach viele auch als „meine IP herausfinden“ oder „IP-Adresse prüfen“ suchen, ist die öffentliche Nummer oben auf dieser Seite. Sie identifiziert Ihren Internetanschluss gegenüber jeder Website und jedem Dienst, den Sie besuchen. Bei einem Heim- oder Mobilfunkanschluss wurde sie von Ihrem Internetanbieter vergeben, und alle, die über diesen Anschluss surfen, teilen sie.",
      },
      {
        q: "Wie finde ich meine IP-Adresse?",
        a: "Öffnen Sie diese Seite, und Ihre öffentliche IP-Adresse erscheint sofort, zusammen mit Ihrem ungefähren Standort und Ihrem Provider. Die private IP-Adresse, die Ihr Gerät in Ihrem Heimnetz nutzt, finden Sie in den Netzwerkeinstellungen oder mit ipconfig unter Windows bzw. ifconfig unter macOS und Linux.",
      },
      {
        q: "Warum ist der Standort falsch oder einige Kilometer daneben?",
        a: "Die IP-Geolokalisierung ist eine Schätzung auf Basis von Provider-Registern und Routingdaten, nicht von GPS. Meist stimmt das Land und oft die Stadt, doch häufig zeigt sie auf den nächsten Knoten Ihres Providers statt auf Ihr Zuhause. Ein VPN oder ein Mobilfunknetz kann das Ergebnis noch weiter verschieben.",
      },
      {
        q: "Was ist der Unterschied zwischen IPv4 und IPv6?",
        a: "IPv4-Adressen sehen aus wie 203.0.113.7, und es gibt nur etwa 4,3 Milliarden davon. IPv6-Adressen sehen aus wie 2001:db8::1, und das Format bietet praktisch unbegrenzt viele. Die meisten Anschlüsse können beides nutzen. Diese Seite zeigt die, die Ihr Browser verwendet hat, und prüft auch die andere.",
      },
      {
        q: "Ist es sicher, meine IP-Adresse weiterzugeben?",
        a: "Die Weitergabe Ihrer IP-Adresse ist in der Regel risikoarm. Für sich genommen verrät sie Ihren ungefähren Standort und Ihren Provider, nicht Ihren Namen oder Ihre Wohnadresse. Sie ermöglicht aber, Datenverkehr an Ihren Anschluss zu senden. Veröffentlichen Sie sie daher nicht, wenn Sie Server betreiben oder Spiele spielen, in denen sich Spieler gegenseitig angreifen, und nutzen Sie ein VPN, wenn Sie sie verbergen möchten.",
      },
      {
        q: "Speichert ipcomet meine IP-Adresse?",
        a: "Nein. Unser Code speichert, protokolliert oder verkauft Ihre IP-Adresse nicht, und es gibt keine Werbung. Die Seite liest Ihre IP aus der Anfrage, zeigt sie Ihnen an und vergisst sie. Wenn Sie das optionale Analyse-Banner annehmen, zählt Google Analytics Besuche mithilfe von Cookies und erfasst die Seiten, die Sie aufrufen, aber nicht die Adressen, die Sie nachschlagen; lehnen Sie ab, wird nichts gesetzt. Alle Details finden Sie auf der Datenschutzseite.",
      },
    ],
  },

  about: {
    title: "Über ipcomet: So funktionieren unsere Tools",
    description: "Wie jedes ipcomet-Netzwerk-Tool funktioniert, woher die Daten stammen und wie genau sie sind. Kostenlos, ohne Werbung; Analyse nur mit Ihrer Zustimmung.",
    h1: "Über ipcomet",
    lead: "ipcomet ist eine kostenlose Sammlung von Netzwerk-Tools und leicht verständlichen Ratgebern. Es läuft auf Cloudflare Workers, und der eigene Code der Website führt keine Aufzeichnung darüber, wer es nutzt.",
    sources: [
      ["Ihre IP und Verbindung", "Vom Cloudflare-Netzwerk direkt aus der Anfrage gelesen: Ihre IP-Adresse, ein ungefährer Standort und der Netzbetreiber aus Cloudflares eigenen Geolokalisierungsdaten, das nächste Cloudflare-Rechenzentrum, die HTTP- und TLS-Versionen und die Umlaufzeit. Ihre IPv4- und IPv6-Adressen bestätigt zusätzlich ipify."],
      ["IP-Abfrage", "Standort- und Netzwerkdaten von ipwho.is, mit ipapi.is und geojs.io als Ausweichquellen, dazu eine Live-Reverse-DNS-Abfrage für den Hostnamen. Die Ergebnisse werden bis zu einen Tag zwischengespeichert."],
      ["DNS-Abfrage und Reverse-DNS", "Live-DNS über HTTPS von Cloudflare 1.1.1.1 oder Google 8.8.8.8, je nach Ihrer Wahl. ipcomet speichert die Antworten nicht zwischen."],
      ["WHOIS", "RDAP, der moderne Nachfolger von WHOIS, über rdap.org, das jede Abfrage an das Register weiterleitet, das den Eintrag führt."],
      ["IP-Reputation", "Die veröffentlichte Ausgangsknotenliste des Tor-Projekts, der Typ des Netzwerks, dem die Adresse gehört (privater Provider, Mobilfunkanbieter, Hoster oder VPN-Anbieter), Hinweise im Reverse-DNS-Namen und fünf öffentliche Blocklisten: SpamCop, DroneBL, Passive Spam Block List, s5h.net und UCEPROTECT Level 1."],
      ["Proxy-Checker", "Unser Server verbindet sich aus dem Cloudflare-Netzwerk mit dem eingegebenen Proxy und öffnet darüber HTTPS-Tunnel zu Cloudflares eigenen Testendpunkten (www.cloudflare.com und speed.cloudflare.com). Er liest die Ausgangs-IP, die Antwortzeiten und einen 1-MB-Download und schlägt die Ausgangs-IP dann genauso nach wie IP-Abfrage und IP-Reputation. Wenn Sie eine Website zum Testen angeben, ruft er genau diese eine Seite über Ihren Proxy auf und meldet nur den Statuscode."],
      ["Speedtest und Ping", "Die Latenz wird zwischen Ihrem Browser und dem nächsten Cloudflare-Rechenzentrum gemessen. Download und Upload laufen direkt zwischen Ihrem Browser und den Speedtest-Servern von Cloudflare (speed.cloudflare.com) über sechs parallele Verbindungen. Die ersten 1,5 Sekunden werden ignoriert und die langsamsten und schnellsten Messwerte verworfen, sodass die Zahl Ihre stabile Geschwindigkeit widerspiegelt. Die Ergebnisse zeigen die Qualität Ihrer eigenen Verbindung, nicht den Weg zu einem bestimmten Spiele- oder Streaming-Server."],
      ["Port-Checker", "Ein TCP-Verbindungsversuch aus dem Cloudflare-Netzwerk zu der IP-Adresse, von der aus Sie die Seite besuchen. Er lässt sich nicht auf die Adresse einer anderen Person richten."],
      ["WebRTC-Leak-Test", "Ihr Browser fragt stun.cloudflare.com nach seiner öffentlichen Adresse, so wie es eine Videoanruf-Website täte, und die Seite vergleicht die Antwort mit Ihrer Verbindung."],
      ["HTTP-Header", "Die Header, die Ihr Browser an diese Seite gesendet hat, genau so, wie unser Server sie erhalten hat."],
      ["Browser-Info und Subnetz-Rechner", "In Ihrem Browser berechnet. Nichts, was Sie auf diesen Seiten sehen oder eingeben, wird an uns gesendet."],
    ],
    body: `<h2>Wofür es gedacht ist</h2>
<p>Die meisten kommen mit einer einzigen Frage: <a href="/de/">Wie lautet meine IP-Adresse</a>. Die anderen Tools beantworten die nächsten Fragen, etwa <a href="/de/lookup">wo eine IP-Adresse liegt</a>, <a href="/de/dns">was die DNS-Einträge einer Domain sagen</a>, <a href="/de/whois">wer eine Domain registriert hat</a>, <a href="/de/speed">wie schnell eine Verbindung ist</a> und <a href="/de/port">ob ein Port offen ist</a>.</p>
<h2>Woher die Daten stammen</h2>
<p>Jedes Ergebnis auf der Website stammt aus einer der unten genannten Quellen, und die Seiten weisen darauf hin, wenn ein Ergebnis nur eine Schätzung ist.</p>
{{sources}}
<h2>Wie genau sind die Ergebnisse?</h2>
<p>Die IP-Geolokalisierung ist ungefähr. Sie beruht auf Netzwerkregistrierungen und Messungen, nicht auf GPS, und stimmt daher meist beim Land, oft bei der Region und nur manchmal bei der Stadt. Sie zeigt häufig auf den nächsten Knoten Ihres Anbieters statt auf Ihr Zuhause, und Mobilfunk-, Satelliten- und VPN-Verbindungen können hunderte Kilometer entfernt erscheinen.</p>
<p>Die Erkennung von VPN, Proxy und Tor beruht auf Indizien. Tor wird anhand der offiziellen Ausgangsliste geprüft, ein VPN oder Proxy lässt sich dagegen nur daraus ableiten, wem die Adresse gehört, wie ihr Reverse-DNS-Name lautet und ob sie auf Blocklisten steht. Private Proxys sehen aus wie gewöhnliche Heimanschlüsse und lassen sich so nicht erkennen. Betrachten Sie die <a href="/de/reputation">Reputationsprüfung</a> als Indikator, nicht als Beweis.</p>
<h2>Die Ratgeber</h2>
<p>Die <a href="/learn" hreflang="en" lang="en">Ratgeber</a> gibt es vorerst nur auf Englisch. Jeder beantwortet eine konkrete Frage und zeigt das Datum der letzten Aktualisierung. Übersetzungen veröffentlichen wir erst, nachdem eine Person, die die Sprache spricht, sie geprüft hat.</p>
<h2>Wie können Sie uns erreichen?</h2>
<p>Schreiben Sie an <a href="mailto:hello@ipcomet.com">hello@ipcomet.com</a>. Korrekturen an einem Ratgeber, eine Übersetzung, die falsch klingt, ein Werkzeug mit einem seltsamen Ergebnis oder Fragen zur Funktionsweise sind willkommen. Korrekturen an den übersetzten Seiten helfen besonders, da sie mit Hilfe von KI entstanden sind.</p>
<h2>Datenschutz</h2>
<p>Es gibt keine Werbung, und unser Code speichert oder protokolliert keine IP-Adressen von Besuchern. Die einzigen Cookies stammen von dem optionalen Google Analytics, das nur geladen wird, wenn Sie es im Banner akzeptieren. Die <a href="/de/privacy">Datenschutzseite</a> erklärt diese Wahl und listet jeden Drittdienst auf, den ein Tool kontaktiert.</p>`,
  },

  privacy: {
    title: "Datenschutzerklärung",
    description: "ipcomet speichert Ihre IP nicht, zeigt keine Werbung und nutzt Google Analytics nur, wenn Sie zustimmen. So wird mit Ihren Daten umgegangen.",
    h1: "Datenschutz",
    lead: "Kurz gesagt: Wir zeigen Ihnen Ihre eigenen Informationen und vergessen sie wieder.",
    body: `<h2>Was wir mit Ihrer IP-Adresse tun</h2>
<p>Ihre IP-Adresse wird aus der eingehenden Anfrage gelesen, damit sie Ihnen angezeigt werden kann. Unser Code schreibt sie in keine Datenbank, kein Log und keinen sonstigen Speicher, und sie wird weder verkauft noch für Werbung weitergegeben.</p>
<h2>Cookies und Analyse</h2>
<p>Standardmäßig setzen wir keine Cookies und speichern nichts in Ihrem Browser, außer, nachdem Sie das Banner beantwortet haben, einen Vermerk Ihrer Wahl. Wenn Sie auf <strong>Akzeptieren</strong> klicken, laden wir Google Analytics (von Google LLC), um Besuche zu zählen. Es setzt Cookies namens <code>_ga</code> und <code>_ga_</code> mit einer Kennung, um Besuche zu unterscheiden, und sendet Google die aufgerufene Seite, Browser- und Gerätetyp, Ihren ungefähren Standort und wie Sie auf die Seite gekommen sind. Vorher schneiden wir alles nach dem Fragezeichen aus der Seitenadresse ab, sodass nachgeschlagene Adressen nicht gesendet werden, und wir schalten Google-Signale und Anzeigenpersonalisierung ab. Google Analytics 4 speichert keine IP-Adressen, und die Daten werden 14 Monate aufbewahrt.</p>
<p>Wenn Sie auf <strong>Ablehnen</strong> klicken oder Ihr Browser ein Global-Privacy-Control-Signal sendet, wird Google Analytics nie geladen und nichts an Google gesendet. Sie können Ihre Wahl jederzeit über den Link „Analyse-Einstellungen“ am Ende jeder Seite ändern. Wir verwenden niemals Werbe-Skripte.</p>
<h2>Hosting</h2>
<p>Diese Website läuft auf Cloudflare Workers. Cloudflare verarbeitet jede Anfrage als unser Hosting-Anbieter und behandelt sie nach eigener Datenschutzerklärung. Außerdem nutzen wir die Ratenbegrenzung von Cloudflare, um Missbrauch der aufwendigeren Tools zu verhindern. Sie verwendet die Adresse Ihrer Verbindung nur, um die jüngsten Anfragen zu zählen.</p>
<h2>Drittdienste</h2>
<ul>
<li><strong>ipify.</strong> Um Ihre IPv4- und IPv6-Adresse anzuzeigen, fragt Ihr Browser api4.ipify.org und api6.ipify.org ab. Diese Dienste sehen Ihre Adresse, wie jede Website, die Sie besuchen.</li>
<li><strong>ipwho.is, ipapi.is und geojs.io.</strong> Wenn Sie eine andere IP-Adresse als Ihre eigene abfragen, sendet unser Server diese Adresse an ipwho.is, um Standortdaten zu erhalten, und weicht auf ipapi.is und dann geojs.io aus, falls der Dienst nicht verfügbar ist. Die Ergebnisse werden einen Tag lang zwischengespeichert.</li>
<li><strong>Cloudflare DNS und Google DNS.</strong> Domainnamen, die Sie in den DNS- und Abfrage-Tools abfragen, werden an den von Ihnen gewählten Resolver gesendet.</li>
<li><strong>RDAP.</strong> Domains und IP-Adressen, die Sie im WHOIS-Tool eingeben, werden an rdap.org gesendet, eine öffentliche Weiterleitung, die die Abfrage an das Register weitergibt, das den Eintrag führt.</li>
<li><strong>Blocklisten und Tor-Ausgangsliste.</strong> Das IP-Reputations-Tool prüft die angegebene Adresse (oder Ihre eigene, wenn Sie das Feld leer lassen) gegen fünf öffentliche DNS-Blocklisten: SpamCop, DroneBL, Passive Spam Block List, s5h.net und UCEPROTECT. Außerdem lädt es die öffentliche Liste der Tor-Ausgangsknoten herunter.</li>
<li><strong>STUN.</strong> Der WebRTC-Test fragt von Ihrem Browser aus bei stun.cloudflare.com Ihre öffentliche Adresse ab, so wie es eine Videoanruf-Website täte.</li>
<li><strong>Cloudflare-Speedtest-Server.</strong> Speedtest und Ping-Test senden und empfangen ihre Testdaten direkt zwischen Ihrem Browser und speed.cloudflare.com, den Speedtest-Servern von Cloudflare. Diese sehen Ihre IP-Adresse, wie jede Website, die Sie besuchen, und die Anfragen enthalten keine Cookies. Sind sie nicht erreichbar, weichen die Tests auf unseren eigenen Server aus.</li>
<li><strong>Google Analytics (nur wenn Sie zustimmen).</strong> Nachdem Sie im Banner auf Akzeptieren geklickt haben, lädt Ihr Browser Google Analytics von googletagmanager.com und sendet Besuchsdaten an google-analytics.com, wie oben unter Cookies und Analyse beschrieben. Google kann sie auf Servern außerhalb Ihres Landes verarbeiten. Wenn Sie ablehnen, geschieht nichts davon.</li>
</ul>
<h2>Proxy-Checker</h2>
<p>Wenn Sie einen Proxy testen, werden die eingegebene Adresse und gegebenenfalls Benutzername und Passwort per HTTPS an unseren Server gesendet, für diese eine Prüfung verwendet und anschließend verworfen. Sie werden weder gespeichert noch in Logs geschrieben. Unser Server verbindet sich aus dem Cloudflare-Netzwerk mit Ihrem Proxy und stellt darüber Anfragen an Cloudflares Testendpunkte (www.cloudflare.com und speed.cloudflare.com) und, falls Sie eine angeben, an die von Ihnen gewählte Website. Ihr Proxy-Anbieter sieht diese Anfragen daher von Cloudflare kommen, nicht von Ihnen. Die vom Proxy offenbarte Ausgangs-IP-Adresse wird anschließend mit denselben oben beschriebenen Diensten nachgeschlagen.</p>
<h2>Port-Checker</h2>
<p>Der Port-Checker verbindet sich nur mit der IP-Adresse, von der aus Sie die Seite besuchen. Er lässt sich nicht auf die Adresse einer anderen Person richten.</p>
<h2>Fragen zu dieser Erklärung</h2>
<p>Bei Fragen zu dieser Erklärung oder zu den Daten, die diese Website verarbeitet, schreiben Sie an <a href="mailto:hello@ipcomet.com">hello@ipcomet.com</a>.</p>
<h2>Änderungen</h2>
<p>Wenn sich diese Erklärung ändert, erscheint die neue Fassung hier. Maßgeblich ist die englische Version.</p>`,
  },
};
