import type { LocaleData } from "./types";

/**
 * French. Interface strings are keyed by the English text (see types.ts). Placeholders such as {n} must stay
 * exactly as written. The guides are not translated yet, so strings that point to them say "(EN)".
 */
export const fr: LocaleData = {
  ui: {
    "8.8.8.8 or example.com": "8.8.8.8 ou example.com",
    "(redirects to {url})": "(redirige vers {url})",
    "© {year} ipcomet. Served from the Cloudflare network, close to you.": "© {year} ipcomet. Servi par le réseau Cloudflare, au plus près de vous.",
    ASN: "ASN",
    About: "À propos",
    "About and methodology": "À propos et méthodologie",
    "About {name}": "À propos de {name}",
    "Accepted formats: {formats}. Your proxy details are used for this one check and are never stored or logged.":
      "Formats acceptés : {formats}. Les informations de votre proxy servent uniquement à ce test et ne sont jamais stockées ni journalisées.",
    "Add your credentials and check again.": "Ajoutez vos identifiants et relancez le test.",
    "All articles →": "Tous les guides (EN) →",
    "All languages": "Toutes les langues",
    "All records": "Tous les enregistrements",
    "All tools": "Tous les outils",
    Architecture: "Architecture",
    "Auto-detect": "Détection automatique",
    Average: "Moyenne",
    Best: "Meilleur",
    "Blocklist checks are not available for this address.": "La vérification des listes de blocage n’est pas disponible pour cette adresse.",
    "Blocklist checks cover IPv4 only.": "La vérification des listes de blocage ne couvre que l’IPv4.",
    Blocklists: "Listes de blocage",
    Broadcast: "Adresse de diffusion",
    Browser: "Navigateur",
    "Built and maintained by {name}.": "Conçu et maintenu par {name}.",
    "Count visits with Google Analytics? It uses cookies. Declining changes nothing else on the site.": "Compter les visites avec Google Analytics ? Cela utilise des cookies. Refuser ne change rien d’autre sur le site.",
    Accept: "Accepter",
    Decline: "Refuser",
    "Analytics choices": "Choix d’analyse",
    "Analytics consent": "Consentement à l’analyse",
    CIDR: "CIDR",
    "CIDR block": "Bloc CIDR",
    "CPU threads": "Threads du processeur",
    Calculate: "Calculer",
    "Check IP": "Vérifier l’IP",
    "Check my IP": "Voir mon IP",
    "Check port": "Tester le port",
    "Check proxy": "Tester le proxy",
    "Check the host and port, and that the proxy is online and reachable from the internet.": "Vérifiez l’hôte et le port, et que le proxy est en ligne et joignable depuis Internet.",
    "Check the host and port, and that the proxy is online.": "Vérifiez l’hôte et le port, et que le proxy est en ligne.",
    "Check the host and port. Some providers use a different port for SOCKS5 than for HTTP, and some only accept allow-listed IP addresses.":
      "Vérifiez l’hôte et le port. Certains fournisseurs utilisent un port différent pour SOCKS5 et pour HTTP, et certains n’acceptent que des adresses IP autorisées.",
    "Check whether it looks like a VPN, proxy, Tor exit or data center, and whether it is on spam and abuse blocklists.":
      "Vérifiez si elle ressemble à un VPN, un proxy, un nœud de sortie Tor ou un centre de données, et si elle figure sur des listes de blocage anti-spam et anti-abus.",
    "Checked {ip} in {ms} ms.": "{ip} testée en {ms} ms.",
    "Checking blocklists and network type…": "Vérification des listes de blocage et du type de réseau…",
    "Checking {ip} from Cloudflare's network. You can only test your own IP, and a service must be running and allowed through your firewall and router for a port to show as open.":
      "Test de {ip} depuis le réseau de Cloudflare. Vous ne pouvez tester que votre propre IP, et un service doit être actif et autorisé par votre pare-feu et votre routeur pour qu’un port apparaisse comme ouvert.",
    "Checking…": "Vérification…",
    "Checking… {i} of {total}": "Vérification… {i} sur {total}",
    City: "Ville",
    Clean: "Propre",
    "Color depth": "Profondeur des couleurs",
    "Connect to proxy": "Connexion au proxy",
    "Connecting through your proxy. This usually takes 5 to 15 seconds…": "Connexion via votre proxy. Cela prend généralement de 5 à 15 secondes…",
    "Connecting…": "Connexion…",
    Connection: "Connexion",
    "Cookies enabled": "Cookies activés",
    Coordinates: "Coordonnées",
    Copied: "Copié",
    Copy: "Copier",
    "Copy IP": "Copier l’IP",
    "Could not check": "Vérification impossible",
    "Could not connect to the proxy.": "Connexion au proxy impossible.",
    "Could not open a connection to the proxy.": "Impossible d’ouvrir une connexion vers le proxy.",
    "Could not reach the proxy.": "Proxy injoignable.",
    "Could not resolve that domain right now.": "Impossible de résoudre ce domaine pour le moment.",
    "Could not resolve the proxy hostname right now. Please try again.": "Impossible de résoudre le nom d’hôte du proxy pour le moment. Veuillez réessayer.",
    Country: "Pays",
    "Credentials sent": "Identifiants envoyés",
    "Cross-site requests are not allowed.": "Les requêtes inter-sites ne sont pas autorisées.",
    DNSSEC: "DNSSEC",
    "DNS resolver unavailable. Please try again.": "Résolveur DNS indisponible. Veuillez réessayer.",
    "Dark mode": "Mode sombre",
    Details: "Détails",
    "Device model": "Modèle de l’appareil",
    Display: "Affichage",
    "Do Not Track": "Do Not Track",
    Domain: "Domaine",
    "Domain or IP": "Domaine ou IP",
    Done: "Terminé",
    Download: "Téléchargement",
    "Download sample": "Échantillon téléchargé",
    "Download speed": "Débit descendant",
    "Edge location": "Emplacement du serveur edge",
    Encryption: "Chiffrement",
    "English guide · {n} min read": "Guide en anglais · {n} min de lecture",
    "Enter a port between 1 and 65535.": "Saisissez un port compris entre 1 et 65535.",
    "Enter a proxy, such as host:port or user:password@host:port.": "Saisissez un proxy, par exemple host:port ou user:password@host:port.",
    "Enter a valid IPv4 or IPv6 address.": "Saisissez une adresse IPv4 ou IPv6 valide.",
    "Enter a valid domain name or IP address.": "Saisissez un nom de domaine ou une adresse IP valide.",
    "Enter a valid domain or IP address.": "Saisissez un domaine ou une adresse IP valide.",
    "Enter a valid proxy hostname or IP address.": "Saisissez un nom d’hôte ou une adresse IP de proxy valide.",
    "Enter a website name for the target, not an IP address.": "Saisissez un nom de site pour la cible, pas une adresse IP.",
    "Enter an IP address or domain.": "Saisissez une adresse IP ou un domaine.",
    "Enter an IP address, e.g. 8.8.8.8": "Saisissez une adresse IP, par ex. 8.8.8.8",
    "Enter an IP address, for example 8.8.8.8. For a domain name, use the DNS lookup instead.":
      "Saisissez une adresse IP, par exemple 8.8.8.8. Pour un nom de domaine, utilisez plutôt la recherche DNS.",
    "Enter an IPv4 or IPv6 address, optionally followed by /prefix (for example 192.168.1.0/24).":
      "Saisissez une adresse IPv4 ou IPv6, éventuellement suivie de /préfixe (par exemple 192.168.1.0/24).",
    "Enter one proxy at a time, without spaces.": "Saisissez un seul proxy à la fois, sans espaces.",
    Error: "Erreur",
    "Everything you need to inspect, test and troubleshoot a connection, with no sign-up.": "Tout ce qu’il faut pour inspecter, tester et dépanner une connexion, sans inscription.",
    "Excellent. This is great for online gaming and video calls.": "Excellent. Idéal pour les jeux en ligne et les appels vidéo.",
    "Exit IP": "IP de sortie",
    "Exit IP and reputation": "IP de sortie et réputation",
    "Exit IPs seen": "IP de sortie observées",
    Expires: "Expire le",
    "Fair. Fine for browsing and calls, and you may notice lag in fast games.": "Moyen. Suffisant pour naviguer et téléphoner, mais vous pouvez ressentir du lag dans les jeux rapides.",
    "Fast, private network tools. Find your IP address, look up DNS and WHOIS records, test your speed and more.":
      "Des outils réseau rapides et respectueux de la vie privée. Trouvez votre adresse IP, consultez les enregistrements DNS et WHOIS, testez votre débit et plus encore.",
    "First address": "Première adresse",
    "First host": "Premier hôte",
    "Free network tools": "Outils réseau gratuits",
    "Frequently asked questions": "Questions fréquentes",
    "Gathering WebRTC candidates…": "Collecte des candidats WebRTC…",
    "Good. Fine for gaming, calls and everything else.": "Bon. Convient pour les jeux, les appels et tout le reste.",
    "HTTP alt": "HTTP alt.",
    Handle: "Identifiant (handle)",
    "Headers marked “added by proxy” come from the network in between, not from your browser. Websites can read all of the others.":
      "Les en-têtes marqués « ajouté par un proxy » viennent du réseau intermédiaire, pas de votre navigateur. Les sites web peuvent lire tous les autres.",
    Hide: "Masquer",
    "High. You will notice lag. Try a wired connection, move closer to your router or restart it.":
      "Élevé. Vous remarquerez du lag. Essayez une connexion filaire, rapprochez-vous de votre routeur ou redémarrez-le.",
    Home: "Accueil",
    Hostname: "Nom d’hôte",
    "Hosting or data center network": "Réseau d’hébergement ou de centre de données",
    "If your provider uses IP allow-listing instead of a username and password, requests from our servers are not on your list, so this tool cannot test it.":
      "Si votre fournisseur utilise une liste d’adresses IP autorisées plutôt qu’un nom d’utilisateur et un mot de passe, les requêtes de nos serveurs ne figurent pas sur votre liste : cet outil ne peut donc pas le tester.",
    "IP address": "Adresse IP",
    "IP address or domain": "Adresse IP ou domaine",
    "IP version": "Version IP",
    "IP websites see": "IP vue par les sites web",
    "IPv6 example": "Exemple IPv6",
    ISP: "FAI",
    "Is your IP flagged?": "Votre IP est-elle signalée ?",
    "It may be the other protocol type, or it may be ignoring our servers.": "Il s’agit peut-être de l’autre type de protocole, ou le proxy ignore nos serveurs.",
    "It may be the other protocol type, or it may not accept connections from our servers.":
      "Il s’agit peut-être de l’autre type de protocole, ou le proxy n’accepte pas les connexions de nos serveurs.",
    Jitter: "Gigue",
    "Known VPN or proxy network": "Réseau VPN ou proxy connu",
    Language: "Langue",
    "Last address": "Dernière adresse",
    "Last changed": "Dernière modification",
    "Last host": "Dernier hôte",
    Latency: "Latence",
    "Latency to edge": "Latence vers le serveur edge",
    Learn: "Guides (EN)",
    "Learn about IP addresses": "Tout savoir sur les adresses IP (guides en anglais)",
    "Leave credentials out of the target address.": "N’incluez pas d’identifiants dans l’adresse cible.",
    "Leave empty to check your own IP": "Laissez vide pour vérifier votre propre IP",
    "Likely a residential or mobile ISP": "Probablement un FAI résidentiel ou mobile",
    Listed: "Listée",
    "Listed on {n} of {total} blocklists checked. This can affect email delivery and some websites.":
      "Listée sur {n} des {total} listes de blocage vérifiées. Cela peut gêner la remise des e-mails et l’accès à certains sites.",
    "Listed on {n} of {total}: {names}": "Listée sur {n} des {total} listes vérifiées : {names}",
    "DroneBL (botnets and open proxies)": "DroneBL (botnets et proxys ouverts)",
    "{n} GB": "{n} Go",
    Signed: "Signé",
    Unsigned: "Non signé",
    "Check for typos and for any required format in the username.": "Vérifiez qu’il n’y a pas de faute de frappe et que le nom d’utilisateur respecte le format éventuellement requis.",
    "It may block this destination, or only accept allow-listed IP addresses.": "Il bloque peut-être cette destination, ou n’accepte que des adresses IP autorisées.",
    "Loading…": "Chargement…",
    "Local addresses": "Adresses locales",
    "Locale and system": "Langue et système",
    Location: "Localisation",
    "Location data is temporarily unavailable for this address. Please try again in a moment.":
      "Les données de localisation sont temporairement indisponibles pour cette adresse. Réessayez dans un instant.",
    "Location is approximate. It comes from your IP address, not GPS, and often points to your ISP's nearest hub instead of your home.":
      "La localisation est approximative. Elle provient de votre adresse IP, pas du GPS, et pointe souvent vers le point d’accès le plus proche de votre FAI plutôt que vers votre domicile.",
    "Look up": "Rechercher",
    "Look up hostname": "Trouver le nom d’hôte",
    "My IP": "Mon IP",
    "Looking up PTR record…": "Recherche de l’enregistrement PTR…",
    "Looking up…": "Recherche…",
    Lookup: "Rechercher",
    "Measured from Cloudflare's network near you{edge}, not from your device, and from one 1 MB sample, so use the numbers to compare proxies with each other. Tests run over encrypted HTTPS tunnels, so the transparent, anonymous and elite labels, which depend on HTTP headers, do not apply.":
      "Mesuré depuis le réseau de Cloudflare près de chez vous{edge}, et non depuis votre appareil, à partir d’un seul échantillon de 1 Mo : utilisez ces chiffres pour comparer des proxys entre eux. Les tests passent par des tunnels HTTPS chiffrés ; les niveaux « transparent », « anonyme » et « élite », qui dépendent des en-têtes HTTP, ne s’appliquent donc pas.",
    "Measured from your device to the nearest Cloudflare data center{colo}. It shows the quality of your own connection, not the route to a particular game server.":
      "Mesuré depuis votre appareil jusqu’au centre de données Cloudflare le plus proche{colo}. Cela reflète la qualité de votre propre connexion, pas le trajet vers un serveur de jeu en particulier.",
    "Measuring latency…": "Mesure de la latence…",
    Memory: "Mémoire",
    Mobile: "Mobile",
    "More tools": "Autres outils",
    Nameservers: "Serveurs de noms",
    Network: "Réseau",
    "Network address": "Adresse réseau",
    "Network type": "Type de réseau",
    No: "Non",
    "No PTR record found for {q}. The owner has not set a reverse name, which is common for home connections.":
      "Aucun enregistrement PTR trouvé pour {q}. Le propriétaire n’a pas défini de nom inverse, ce qui est courant pour les connexions domestiques.",
    "No VPN or hosting signs found. Residential proxies and some VPNs cannot be detected from public data.":
      "Aucun signe de VPN ni d’hébergeur. Les proxys résidentiels et certains VPN ne peuvent pas être détectés à partir de données publiques.",
    "No ads. Analytics only if you accept.": "Pas de publicité. Analyses uniquement si vous acceptez.",
    "No answer": "Pas de réponse",
    "No credentials needed": "Aucun identifiant requis",
    "No registration record found for that IP.": "Aucun enregistrement trouvé pour cette IP.",
    "No registration record found. The domain may not be registered, or its registry doesn't support RDAP.":
      "Aucun enregistrement trouvé. Le domaine n’est peut-être pas enregistré, ou son registre ne prend pas en charge RDAP.",
    "No replies. Check your connection and try again.": "Aucune réponse. Vérifiez votre connexion et réessayez.",
    "No {type} records.": "Aucun enregistrement {type}.",
    None: "Aucun",
    "None (hidden by browser)": "Aucune (masquée par le navigateur)",
    "None of the checks got an answer, so your connection may be offline.": "Aucun des tests n’a reçu de réponse : votre connexion est peut-être hors ligne.",
    "Not detected": "Non détectée",
    "Not enough data came back to measure speed.": "Pas assez de données reçues pour mesurer le débit.",
    "Not found": "Introuvable",
    "Not listed on any of the {total} blocklists that answered.": "Absente des {total} listes de blocage qui ont répondu.",
    "Not listed on any of {total} checked": "Absente des {total} listes vérifiées",
    "Not measured": "Non mesuré",
    "Not sure what that means? Read {link}.": "Vous ne savez pas ce que cela signifie ? Lisez {link}.",
    "Not working": "Ne fonctionne pas",
    Off: "Désactivé",
    On: "Activé",
    Online: "En ligne",
    "Only https:// targets can be tested.": "Seules les cibles en https:// peuvent être testées.",
    "Only the standard HTTPS port (443) can be tested.": "Seul le port HTTPS standard (443) peut être testé.",
    "Open menu": "Ouvrir le menu",
    "Operating system": "Système d’exploitation",
    Organization: "Organisation",
    "PTR query": "Requête PTR",
    "Packet loss": "Perte de paquets",
    "Page not found": "Page introuvable",
    "Page not found.": "Page introuvable.",
    Parent: "Parent",
    "Password (optional)": "Mot de passe (facultatif)",
    "Pixel ratio": "Ratio de pixels",
    "Port 25 can't be tested from Cloudflare Workers.": "Le port 25 ne peut pas être testé depuis Cloudflare Workers.",
    "Port checks only work from a public IP address, so they are unavailable on a local network.":
      "Le test de port ne fonctionne que depuis une adresse IP publique ; il est donc indisponible sur un réseau local.",
    "Port number": "Numéro de port",
    "Port {port} is closed": "Le port {port} est fermé",
    "Port {port} is open": "Le port {port} est ouvert",
    "Port {port}: no response": "Port {port} : pas de réponse",
    "Port, e.g. 443": "Port, par ex. 443",
    "Postal code": "Code postal",
    "Prefix length must be between 0 and 128.": "La longueur du préfixe doit être comprise entre 0 et 128.",
    "Prefix length must be between 0 and 32.": "La longueur du préfixe doit être comprise entre 0 et 32.",
    "Press start to measure": "Appuyez sur Démarrer pour mesurer",
    Primary: "Principale",
    Privacy: "Confidentialité",
    Protocol: "Protocole",
    Proxy: "Proxy",
    "Proxy address": "Adresse du proxy",
    "Proxy handshake": "Négociation avec le proxy",
    "Proxy password": "Mot de passe du proxy",
    "Proxy type": "Type de proxy",
    "Proxy username": "Nom d’utilisateur du proxy",
    "Public IP via WebRTC": "IP publique via WebRTC",
    "Querying DNS…": "Interrogation du DNS…",
    Range: "Plage",
    "Ready when you are": "Prêt quand vous l’êtes",
    "Record type": "Type d’enregistrement",
    Registered: "Enregistré le",
    Registrar: "Bureau d’enregistrement",
    "Related guides": "Guides associés (EN)",
    "Resolved from": "Résolu depuis",
    Resolver: "Résolveur",
    "Resolver returned {rcode}.": "Le résolveur a renvoyé {rcode}.",
    "Results for {name} via {resolver} DNS": "Résultats pour {name} via le DNS {resolver}",
    "Results reflect the path to the nearest Cloudflare data center{colo}, which is typically faster than a trip to a far-away server. The test runs for about 15 seconds and moves as much data as your connection can carry, so on a fast line it can use several hundred megabytes.":
      "Les résultats reflètent le trajet jusqu’au centre de données Cloudflare le plus proche{colo}, généralement plus rapide qu’un trajet vers un serveur éloigné. Le test dure environ 15 secondes et transfère autant de données que votre connexion peut en supporter ; sur une ligne rapide, il peut consommer plusieurs centaines de mégaoctets.",
    Rotation: "Rotation",
    "Rotating: {ips} different IPs in {n} requests": "Rotation : {ips} IP différentes en {n} requêtes",
    "Run again": "Relancer",
    "Run test": "Lancer le test",
    "Run the reputation check": "Lancer la vérification de réputation",
    SOCKS5: "SOCKS5",
    "Same exit IP in all {n} requests (static or sticky)": "Même IP de sortie pour les {n} requêtes (statique ou persistante)",
    Screen: "Écran",
    Search: "Rechercher",
    "Searching registry…": "Recherche dans le registre…",
    "Short, plain-English guides on how the internet identifies you and what you can do about it.":
      "Des guides courts et clairs, en anglais, sur la manière dont Internet vous identifie et ce que vous pouvez y faire.",
    Show: "Afficher",
    "Sign-in": "Authentification",
    Sitemap: "Plan du site",
    "Some requests failed: {errors}": "Certaines requêtes ont échoué : {errors}",
    "Something accepted the connection.": "Quelque chose a accepté la connexion.",
    "Something went wrong on our side. Please try again.": "Un problème est survenu de notre côté. Veuillez réessayer.",
    "Start ping test": "Lancer le test de ping",
    "Start test": "Démarrer le test",
    Status: "Statut",
    "Subnet mask": "Masque de sous-réseau",
    "Success rate": "Taux de réussite",
    TTL: "TTL",
    "Test a website through it, e.g. https://example.com (optional)": "Tester un site web via ce proxy, par ex. https://example.com (facultatif)",
    "Test again": "Refaire le test",
    "Test for WebRTC leaks": "Tester les fuites WebRTC",
    "Testing download…": "Test du téléchargement…",
    "Testing upload…": "Test de l’envoi…",
    "That doesn't look like a valid IP address or domain.": "Cela ne ressemble pas à une adresse IP ou à un domaine valide.",
    "That IPv6 address is not valid. Use the format [address]:port.": "Cette adresse IPv6 n’est pas valide. Utilisez le format [adresse]:port.",
    "That is a private or reserved address.": "Il s’agit d’une adresse privée ou réservée.",
    "That is a private or reserved address. Only proxies reachable from the public internet can be tested.":
      "Il s’agit d’une adresse privée ou réservée. Seuls les proxys joignables depuis Internet peuvent être testés.",
    "That is a private or reserved address, so it has no public location.": "Il s’agit d’une adresse privée ou réservée : elle n’a pas de localisation publique.",
    "That is a private or reserved address, so it has no public reputation.": "Il s’agit d’une adresse privée ou réservée : elle n’a pas de réputation publique.",
    "That page doesn't exist. Try one of the tools below.": "Cette page n’existe pas. Essayez l’un des outils ci-dessous.",
    "That request is too large.": "Cette requête est trop volumineuse.",
    "That target address is not a valid URL.": "Cette adresse cible n’est pas une URL valide.",
    "That target address is too long.": "Cette adresse cible est trop longue.",
    "The SOCKS5 proxy sent an invalid reply.": "Le proxy SOCKS5 a envoyé une réponse invalide.",
    "The connection closed before the full answer arrived.": "La connexion s’est fermée avant l’arrivée de la réponse complète.",
    "The connection dropped while talking to the proxy.": "La connexion a été interrompue pendant l’échange avec le proxy.",
    "The connection timed out. A firewall is probably silently dropping traffic, or the host is unreachable.":
      "La connexion a expiré. Un pare-feu ignore probablement le trafic, ou l’hôte est injoignable.",
    "The connection was refused. Nothing is listening, or a firewall rejected it.": "La connexion a été refusée. Aucun service n’écoute, ou un pare-feu l’a rejetée.",
    "The destination closed the connection without answering.": "La destination a fermé la connexion sans répondre.",
    "The destination did not answer with valid HTTP.": "La destination n’a pas répondu en HTTP valide.",
    "The network owner or hostname matches a VPN or proxy provider.": "Le propriétaire du réseau ou le nom d’hôte correspond à un fournisseur de VPN ou de proxy.",
    "The only public IPs WebRTC exposed match the ones websites already see. No leak.":
      "Les seules IP publiques exposées par WebRTC correspondent à celles que les sites voient déjà. Aucune fuite.",
    "The proxy asked for an authentication method this tool does not support.": "Le proxy demande une méthode d’authentification que cet outil ne prend pas en charge.",
    "The proxy connected but did not answer in time.": "Le proxy s’est connecté mais n’a pas répondu à temps.",
    "The proxy did not accept username and password authentication.": "Le proxy n’a pas accepté l’authentification par nom d’utilisateur et mot de passe.",
    "The proxy may be intercepting HTTPS traffic, or it may be blocking this destination.": "Le proxy intercepte peut-être le trafic HTTPS, ou bloque cette destination.",
    "The proxy may be overloaded or its upstream may be down.": "Le proxy est peut-être surchargé, ou son amont est en panne.",
    "The proxy opened a tunnel but the test request timed out.": "Le proxy a ouvert un tunnel, mais la requête de test a expiré.",
    "The proxy refused the connection (HTTP 403).": "Le proxy a refusé la connexion (HTTP 403).",
    "The proxy rejected the username and password (HTTP 407).": "Le proxy a rejeté le nom d’utilisateur et le mot de passe (HTTP 407).",
    "The proxy rejected the username and password.": "Le proxy a rejeté le nom d’utilisateur et le mot de passe.",
    "The proxy sent unexpected data after opening the tunnel.": "Le proxy a envoyé des données inattendues après l’ouverture du tunnel.",
    "The registry did not respond. Please try again.": "Le registre n’a pas répondu. Veuillez réessayer.",
    "The registry took too long to respond. Please try again.": "Le registre a mis trop de temps à répondre. Veuillez réessayer.",
    "The resolver took too long to answer.": "Le résolveur a mis trop de temps à répondre.",
    "The server answered, but not like an HTTP proxy. If this is a SOCKS5 proxy, choose SOCKS5.":
      "Le serveur a répondu, mais pas comme un proxy HTTP. S’il s’agit d’un proxy SOCKS5, choisissez SOCKS5.",
    "The server closed the connection without answering. It may not be an HTTP proxy, or it may not accept connections from our servers.":
      "Le serveur a fermé la connexion sans répondre. Ce n’est peut-être pas un proxy HTTP, ou il n’accepte pas les connexions de nos serveurs.",
    "The server did not answer like a SOCKS5 proxy. If this is an HTTP proxy, choose HTTP.":
      "Le serveur n’a pas répondu comme un proxy SOCKS5. S’il s’agit d’un proxy HTTP, choisissez HTTP.",
    "The server did not answer like an HTTP or SOCKS5 proxy.": "Le serveur n’a pas répondu comme un proxy HTTP ou SOCKS5.",
    "The server sent an oversized response header.": "Le serveur a envoyé un en-tête de réponse trop volumineux.",
    "The target did not answer in time through this proxy.": "La cible n’a pas répondu à temps via ce proxy.",
    "The test couldn't complete. Your browser or network may be blocking WebRTC probes.":
      "Le test n’a pas pu aboutir. Votre navigateur ou votre réseau bloque peut-être les sondes WebRTC.",
    "The test was interrupted. Check your connection and try again.": "Le test a été interrompu. Vérifiez votre connexion et réessayez.",
    "The tunnel opened, but the secure (TLS) connection through it failed.": "Le tunnel s’est ouvert, mais la connexion sécurisée (TLS) à travers lui a échoué.",
    "The username and password must each be 255 bytes or fewer.": "Le nom d’utilisateur et le mot de passe ne doivent pas dépasser 255 octets chacun.",
    "These are indicators, not proof. Spamhaus lists are not queried because Spamhaus blocks public DNS resolvers.":
      "Ce sont des indicateurs, pas des preuves. Les listes Spamhaus ne sont pas interrogées, car Spamhaus bloque les résolveurs DNS publics.",
    "This address belongs to a server network. VPNs, proxies and bots usually appear this way, while home users rarely do.":
      "Cette adresse appartient à un réseau de serveurs. Les VPN, les proxys et les robots apparaissent généralement ainsi, rarement les particuliers.",
    "This browser doesn't support WebRTC, so it can't leak anything this way.": "Ce navigateur ne prend pas en charge WebRTC : il ne peut donc rien divulguer de cette façon.",
    "This domain does not exist (NXDOMAIN).": "Ce domaine n’existe pas (NXDOMAIN).",
    "This page was translated with AI and may contain mistakes. The English version is the reference.":
      "Cette page a été traduite avec l’aide de l’IA et peut contenir des erreurs. La version anglaise fait foi.",
    "This proxy requires a username and password (HTTP 407).": "Ce proxy exige un nom d’utilisateur et un mot de passe (HTTP 407).",
    "This proxy requires a username and password.": "Ce proxy exige un nom d’utilisateur et un mot de passe.",
    "Time to first byte": "Délai avant le premier octet",
    "Timed out connecting to the proxy.": "Délai dépassé lors de la connexion au proxy.",
    Timezone: "Fuseau horaire",
    Timing: "Délais",
    "Too many checks in a row. Please wait a minute and try again.": "Trop de tests d’affilée. Patientez une minute puis réessayez.",
    "Too many requests. Please wait a minute and try again.": "Trop de requêtes. Patientez une minute puis réessayez.",
    Tools: "Outils",
    "Tor exit example": "Exemple de nœud Tor",
    "Tor exit node": "Nœud de sortie Tor",
    "Total addresses": "Nombre total d’adresses",
    "Touch points": "Points tactiles",
    Type: "Type",
    Unknown: "Inconnu",
    "Unexpected error while talking to the proxy.": "Erreur inattendue lors de l’échange avec le proxy.",
    "Unstable: {n} of {total} requests succeeded": "Instable : {n} requêtes sur {total} ont réussi",
    Upload: "Envoi",
    "Usable hosts": "Hôtes utilisables",
    "Use host:port, user:password@host:port, or host:port:user:password. If the password contains a colon, use the separate password field.":
      "Utilisez host:port, user:password@host:port ou host:port:user:password. Si le mot de passe contient deux-points, utilisez le champ de mot de passe séparé.",
    "User agent": "User-agent",
    "Username (optional)": "Nom d’utilisateur (facultatif)",
    "Username and password accepted": "Nom d’utilisateur et mot de passe acceptés",
    Viewport: "Fenêtre d’affichage",
    "WebRTC didn't expose any public IP address. You're not leaking through it.": "WebRTC n’a exposé aucune adresse IP publique. Vous ne fuyez pas par ce biais.",
    "WebRTC exposed {ips}, which is different from the IP websites see ({ip}). If you're using a VPN, this could be a leak of your real address.":
      "WebRTC a exposé {ips}, différente de l’IP que voient les sites web ({ip}). Si vous utilisez un VPN, il peut s’agir d’une fuite de votre vraie adresse.",
    "Website test": "Test d’un site web",
    "Website to test through the proxy": "Site web à tester via le proxy",
    "What is my IP address?": "Quelle est mon adresse IP ?",
    "Whole request": "Requête complète",
    "Wildcard mask": "Masque générique",
    "Working": "Fonctionne",
    "Working…": "Traitement…",
    Worst: "Pire",
    Yes: "Oui",
    "Your ping is unstable. Packet loss or jitter like this causes stutter in calls and games. Try a wired connection and restart your router.":
      "Votre ping est instable. Une perte de paquets ou une gigue de ce niveau provoque des saccades dans les appels et les jeux. Essayez une connexion filaire et redémarrez votre routeur.",
    "added by proxy": "ajouté par un proxy",
    "example.com or 8.8.8.8": "example.com ou 8.8.8.8",
    "host:port or user:password@host:port": "host:port ou user:password@host:port",
    "ms avg": "ms moy.",
    "n/a": "n. d.",
    "proxy errors 407, 403 and 502: causes and fixes": "erreurs de proxy 407, 403 et 502 : causes et solutions (en anglais)",
    "{host} answered HTTP {status} in {ms} ms.": "{host} a répondu HTTP {status} en {ms} ms.",
    "{host} answered HTTP {status} through this proxy in {ms} ms. That usually means the site is blocking or limiting this proxy.":
      "{host} a répondu HTTP {status} via ce proxy en {ms} ms. Cela signifie généralement que le site bloque ou limite ce proxy.",
    "{host} answered HTTP {status}{redirect} in {ms} ms. The proxy can reach this site.": "{host} a répondu HTTP {status}{redirect} en {ms} ms. Le proxy peut atteindre ce site.",
    "{mb} MB in {ms} ms": "{mb} Mo en {ms} ms",
    "{mb} MB in {ms} ms (stopped early)": "{mb} Mo en {ms} ms (arrêté avant la fin)",
  },

  tools: {
    ip: {
      name: "Mon IP",
      desc: "Votre adresse IP publique, votre localisation et votre FAI",
      title: "Quelle est mon adresse IP ? Voir mon IP publique",
      description: "Découvrez votre adresse IP publique, votre localisation, votre FAI et les détails de votre connexion. Gratuit et rapide, sans publicité ni inscription.",
      h1: "Quelle est mon adresse IP ?",
      lead: "Votre adresse IP publique, votre localisation approximative et votre FAI, affichés instantanément.",
      about: "",
      faq: [],
    },
    lookup: {
      name: "Recherche IP",
      desc: "Localisation, FAI et ASN de n’importe quelle IP ou domaine",
      title: "Recherche d’adresse IP : localisation, FAI et propriétaire",
      description: "Outil gratuit de recherche IP. Saisissez une adresse IP ou un domaine pour voir sa localisation, son FAI, son ASN et son nom d’hôte. IPv4 et IPv6.",
      h1: "Recherche d’adresse IP",
      lead: "Trouvez la localisation, le FAI et le réseau de n’importe quelle adresse IP ou de n’importe quel domaine.",
      about:
        "Une recherche d’adresse IP vous indique où se trouve, en apparence, un serveur ou une connexion sur Internet et qui exploite le réseau correspondant. Utilisez-la pour savoir où un site est hébergé, examiner un trafic suspect dans vos journaux, vérifier qu’un VPN fonctionne ou identifier le fournisseur d’une adresse. Les résultats comprennent la ville, la région, le pays, le fuseau horaire, le FAI, l’organisation et le numéro de système autonome (ASN), ainsi que le nom d’hôte lorsqu’un enregistrement DNS inverse existe.",
      faq: [
        {
          q: "Comment trouver l’adresse IP d’un site web ?",
          a: "Saisissez le nom de domaine, par exemple example.com, dans le champ ci-dessus et cliquez sur Rechercher. L’outil résout le nom en son adresse IP actuelle, puis indique où se trouve ce serveur, qui exploite le réseau et son nom d’hôte.",
        },
        {
          q: "Quelle est la précision d’une recherche d’adresse IP ?",
          a: "Le pays est presque toujours juste, la ville l’est la plupart du temps, et tout ce qui est plus précis relève de l’estimation. Le FAI et l’ASN proviennent de registres de routage publics et sont fiables. Une recherche ne peut pas révéler une adresse postale ni l’identité d’une personne.",
        },
        {
          q: "Puis-je rechercher un nom de domaine plutôt qu’une IP ?",
          a: "Oui. Saisissez un domaine comme example.com : l’outil le résout d’abord en son adresse IP actuelle, puis affiche la localisation, le réseau et le nom d’hôte du serveur correspondant. Les sites derrière un CDN afficheront le réseau du CDN plutôt que celui du serveur d’origine.",
        },
      ],
    },
    dns: {
      name: "Recherche DNS",
      desc: "Enregistrements A, AAAA, MX, TXT, NS, CNAME, SOA et CAA",
      title: "Recherche DNS : vérifiez les enregistrements d’un domaine",
      description: "Recherche DNS gratuite : enregistrements A, AAAA, MX, TXT, NS, CNAME, SOA et CAA via Cloudflare ou Google DNS, ou recherche DNS inverse.",
      h1: "Recherche DNS",
      lead: "Interrogez les enregistrements DNS en direct d’un domaine, ou résolvez à l’envers une adresse IP.",
      about:
        "Le système de noms de domaine (DNS) transforme des noms comme example.com en adresses IP utilisées par les ordinateurs. Cet outil interroge le DNS en direct via HTTPS avec Cloudflare 1.1.1.1 ou Google 8.8.8.8 : vous voyez donc des réponses à jour, et non un ancien cache local. Il sert à vérifier la configuration d’une messagerie (MX, SPF et DKIM dans les enregistrements TXT), à confirmer un déménagement de site, à déboguer un CNAME ou à vérifier qu’un nouvel enregistrement est publié.",
      faq: [
        {
          q: "Comment faire une recherche DNS inverse ?",
          a: "Saisissez une adresse IP au lieu d’un nom de domaine. L’outil construit le nom in-addr.arpa (IPv4) ou ip6.arpa (IPv6) correspondant et renvoie l’enregistrement PTR, c’est-à-dire le nom d’hôte que le propriétaire a attribué à cette adresse, s’il y en a un. Les serveurs de messagerie s’appuient sur le DNS inverse pour vérifier les expéditeurs.",
        },
        {
          q: "Quels types d’enregistrements DNS puis-je consulter ?",
          a: "Vous pouvez consulter les enregistrements A et AAAA pour les adresses IP, MX pour les serveurs de messagerie, TXT pour SPF, DKIM et les chaînes de vérification, NS pour les serveurs de noms, CNAME pour les alias, SOA pour les détails de la zone et CAA pour les règles des autorités de certification. Saisissez une adresse IP au lieu d’un domaine pour lancer une recherche inverse (PTR).",
        },
        {
          q: "Pourquoi mes modifications DNS n’apparaissent-elles pas encore ?",
          a: "Les résolveurs mettent les réponses en cache pendant la durée de vie (TTL) de l’enregistrement : une modification peut donc mettre de quelques minutes à quelques heures pour apparaître partout. Passez du résolveur Cloudflare à celui de Google pour comparer ce que chacun renvoie. S’ils ne sont pas d’accord, la modification est encore en cours de propagation.",
        },
      ],
    },
    "reverse-dns": {
      name: "DNS inverse",
      desc: "Trouvez le nom d’hôte associé à une adresse IP",
      title: "Recherche DNS inverse : nom d’hôte d’une adresse IP",
      description: "Recherche DNS inverse gratuite : trouvez l’enregistrement PTR et le nom d’hôte d’une adresse IPv4 ou IPv6, utile pour vérifier un serveur de messagerie.",
      h1: "Recherche DNS inverse",
      lead: "Trouvez le nom d’hôte (enregistrement PTR) associé à n’importe quelle adresse IPv4 ou IPv6.",
      about:
        "Une recherche DNS inverse trouve le nom d’hôte attribué à une adresse IP grâce à son enregistrement PTR. C’est un moyen rapide de savoir qui exploite un serveur (un hébergeur, un serveur de messagerie ou un fournisseur d’accès), de vérifier qu’un serveur de messagerie est bien configuré ou de comprendre une adresse inconnue dans vos journaux. Saisissez une adresse IPv4 ou IPv6 : la recherche renvoie l’enregistrement PTR issu du DNS en direct.",
      faq: [
        {
          q: "Qu’est-ce qu’une recherche DNS inverse ?",
          a: "Une recherche DNS normale transforme un nom en adresse IP. Une recherche inverse fait l’inverse : elle demande quel nom d’hôte le propriétaire d’une adresse IP lui a attribué, stocké dans un enregistrement PTR. Beaucoup d’adresses n’en ont pas, surtout les connexions domestiques.",
        },
        {
          q: "Pourquoi le DNS inverse compte-t-il pour les e-mails ?",
          a: "Les serveurs de messagerie vérifient souvent que l’IP de l’expéditeur possède un enregistrement PTR correspondant au nom qu’il annonce. Un enregistrement absent ou générique est une cause fréquente de messages légitimes classés en spam ; les propriétaires de serveurs de messagerie le configurent donc auprès de leur hébergeur.",
        },
      ],
    },
    reputation: {
      name: "Réputation IP",
      desc: "Détection VPN, proxy, Tor et listes de blocage",
      title: "Détecteur de VPN : réputation IP, proxy et liste noire",
      description: "Détecteur de VPN gratuit : vérifiez si une IP est un VPN, un proxy, un nœud Tor ou un centre de données, et si elle figure sur des listes anti-spam.",
      h1: "Détecteur de VPN et test de réputation IP",
      lead: "Vérifiez si une adresse IP ressemble à un VPN, un proxy, un nœud de sortie Tor ou un centre de données, et si elle figure sur des listes anti-spam et anti-abus.",
      about:
        "Une vérification de réputation IP montre comment le reste d’Internet risque de traiter une adresse. Nous combinons plusieurs signaux : la liste officielle des nœuds de sortie du projet Tor, le type de réseau propriétaire de l’adresse (FAI résidentiel, opérateur mobile, hébergeur ou fournisseur de VPN), les indices du nom DNS inverse et cinq listes de blocage publiques anti-spam et anti-abus. Elle permet de savoir si un VPN est détectable, pourquoi un site vous affiche sans cesse des captchas ou pourquoi vos e-mails sont rejetés. Les résultats sont des indicateurs, pas des preuves.",
      faq: [
        {
          q: "Comment savoir si mon VPN fonctionne ?",
          a: "Comparez votre adresse, votre localisation et votre réseau avec le VPN désactivé puis activé : tout doit changer. Lancez ensuite le test de fuite WebRTC et vérifiez que la ligne IPv6 de la page d’accueil est vide ou appartient au VPN. Enfin, utilisez ce détecteur : l’adresse d’un VPN qui fonctionne apparaît généralement comme un réseau d’hébergement ou de VPN, pas comme votre fournisseur d’accès.",
        },
        {
          q: "Pouvez-vous savoir si j’utilise un VPN ou un proxy ?",
          a: "En partie seulement. Nous vérifions si l’adresse figure sur la liste officielle des nœuds de sortie Tor, si le propriétaire de son réseau est un fournisseur de VPN connu ou un hébergeur, et si son nom d’hôte ressemble à celui d’un VPN. La plupart des VPN utilisent des réseaux de centres de données, faciles à repérer. Les proxys résidentiels et certains VPN privés ressemblent à des connexions domestiques ordinaires et ne peuvent pas être détectés à partir de données publiques.",
        },
        {
          q: "Que signifie le fait que mon IP soit sur une liste de blocage ?",
          a: "Une liste de blocage est une liste publique d’adresses vues en train d’envoyer du spam ou du trafic abusif. Y figurer peut faire rejeter vos e-mails par les serveurs de messagerie et amener certains sites à vous soumettre un défi ou à vous bloquer. Cela arrive souvent aux adresses partagées, comme celle d’un serveur VPN ou d’un réseau mobile, à cause d’autres utilisateurs. La plupart des listes proposent un formulaire de retrait, et les entrées expirent d’elles-mêmes au bout d’un moment.",
        },
        {
          q: "Pourquoi les listes Spamhaus sont-elles absentes ?",
          a: "Spamhaus refuse les requêtes qui arrivent par de grands résolveurs DNS publics : un test effectué ainsi ne peut donc pas donner de réponse fiable. Nous n’affichons que les listes qui répondent correctement, et nous marquons comme indisponible toute liste qui ne répond pas, au lieu de deviner.",
        },
      ],
    },
    "proxy-checker": {
      name: "Testeur de proxy",
      desc: "Testez des proxys HTTP et SOCKS5 : débit, localisation, rotation",
      title: "Testeur de proxy : testez vos proxys HTTP et SOCKS5",
      description: "Testeur de proxy gratuit. Testez un proxy HTTP ou SOCKS5 : débit, IP de sortie, localisation, rotation et listes de blocage, avec identifiant et mot de passe.",
      h1: "Testeur de proxy",
      lead: "Testez n’importe quel proxy HTTP, HTTPS ou SOCKS5. Voyez s’il fonctionne, d’où il sort, sa rapidité et si son IP change.",
      about:
        "Un testeur de proxy vérifie si un serveur proxy fonctionne et ce qu’il donne à voir aux sites web avec lesquels vous l’utilisez. Saisissez un proxy HTTP, HTTPS ou SOCKS5, avec un nom d’utilisateur et un mot de passe s’il en exige, et cet outil se connecte par son intermédiaire, affiche l’adresse IP de sortie et sa localisation, mesure sa rapidité de réponse et de téléchargement, vérifie si l’IP de sortie change d’une requête à l’autre et recherche l’adresse dans les listes de blocage anti-spam et la liste des nœuds de sortie Tor. Vous pouvez aussi tester si le proxy peut atteindre un site qui vous intéresse. Rien de ce que vous saisissez n’est conservé.",
      faq: [
        {
          q: "Comment vérifier si un proxy fonctionne ?",
          a: "Saisissez-le sous la forme host:port, ajoutez le nom d’utilisateur et le mot de passe s’il en faut, puis cliquez sur Tester le proxy. Si l’outil affiche une IP de sortie, une localisation et des requêtes réussies, le proxy fonctionne. En cas d’échec, le message en donne la raison : identifiants incorrects (HTTP 407), connexion refusée, délai dépassé ou serveur qui n’est pas un proxy. Vous pouvez aussi tester depuis un terminal avec cURL : curl -x http://user:password@host:port https://www.cloudflare.com/cdn-cgi/trace",
        },
        {
          q: "Les proxys SOCKS5 sont-ils pris en charge, en plus des proxys HTTP et HTTPS ?",
          a: "Oui. L’outil prend en charge les proxys HTTP et HTTPS qui utilisent la méthode CONNECT, ainsi que SOCKS5 avec ou sans nom d’utilisateur et mot de passe. Laissez le type sur détection automatique : il essaie d’abord HTTP, puis SOCKS5. SOCKS4 et les proxys qui exigent un certificat client ne sont pas pris en charge.",
        },
        {
          q: "Le testeur de proxy fonctionne-t-il avec les proxys Decodo ?",
          a: "Oui, tant que le proxy utilise un hôte, un port, un nom d’utilisateur et un mot de passe. Decodo (anciennement Smartproxy) et la plupart des autres fournisseurs les affichent dans leur tableau de bord. Collez-les : le testeur indique l’IP de sortie, sa localisation et le débit. Si vous n’utilisez que la liste d’adresses IP autorisées, lisez la question suivante.",
        },
        {
          q: "Puis-je tester un proxy qui utilise une liste blanche d’adresses IP ?",
          a: "Non. Le test part de nos serveurs : une liste d’autorisation qui ne contient que votre propre adresse IP le refusera. Utilisez plutôt, pour le test, le point d’accès par nom d’utilisateur et mot de passe de votre fournisseur, s’il en propose un.",
        },
        {
          q: "Mes identifiants de proxy sont-ils stockés ou journalisés ?",
          a: "Non. L’adresse du proxy et l’éventuel nom d’utilisateur et mot de passe sont envoyés à notre serveur en HTTPS, utilisés pour ce seul test, puis supprimés. Nous ne les stockons pas et ne les écrivons pas dans des journaux. Votre fournisseur de proxy verra notre connexion, comme n’importe quelle autre requête qu’il traite.",
        },
        {
          q: "Pourquoi le débit est-il différent de celui que j’obtiens sur mon ordinateur ?",
          a: "Le test part d’un centre de données Cloudflare près de chez vous, pas de votre appareil, et télécharge un petit échantillon de 1 Mo sur une seule connexion. Servez-vous-en pour comparer des proxys entre eux et repérer les plus lents. Pour connaître le débit réel, testez depuis la machine qui utilisera le proxy.",
        },
        {
          q: "Comment savoir si un proxy fait de la rotation ?",
          a: "Le testeur envoie trois requêtes sur des connexions distinctes et indique l’IP de sortie de chacune. Des adresses différentes signifient un proxy à rotation. La même adresse signifie un proxy persistant ou statique. Une session persistante sur une passerelle à rotation garde volontairement la même IP pendant plusieurs minutes : ce résultat est donc normal.",
        },
      ],
    },
    whois: {
      name: "WHOIS",
      desc: "Informations d’enregistrement d’un domaine ou d’une IP",
      title: "Recherche WHOIS : enregistrement d’un domaine ou d’une IP",
      description: "Trouvez le registrar, les dates de création et d’expiration et les serveurs de noms d’un domaine, ou le propriétaire d’une plage IP. WHOIS rapide via RDAP.",
      h1: "Recherche WHOIS",
      lead: "Registrar, dates et serveurs de noms d’un domaine, ou propriétaire du réseau d’une adresse IP.",
      about:
        "Les données WHOIS indiquent qui a enregistré un domaine, quel bureau d’enregistrement le gère, quand il a été créé et quand il expire, ainsi que ses serveurs de noms et ses codes de statut. Pour les adresses IP, elles indiquent le bloc réseau, l’organisation propriétaire et le registre régional. C’est pratique pour vérifier si un domaine est disponible, enquêter sur un site suspect ou trouver le bon contact pour signaler un abus.",
      faq: [
        {
          q: "Quelle est la différence entre WHOIS et RDAP ?",
          a: "RDAP est le remplaçant moderne de l’ancien protocole WHOIS. Il renvoie des données structurées via HTTPS et constitue désormais la norme officielle pour les registres et les bureaux d’enregistrement. Cet outil utilise RDAP : les résultats sont donc cohérents, même si les coordonnées personnelles sont généralement masquées pour des raisons de confidentialité.",
        },
        {
          q: "Pourquoi le propriétaire d’un domaine est-il masqué ?",
          a: "Depuis l’entrée en vigueur des règles de protection des données comme le RGPD, la plupart des bureaux d’enregistrement masquent le nom, l’e-mail et l’adresse du titulaire dans les données publiques. Vous pouvez toujours voir le bureau d’enregistrement, les dates d’enregistrement et d’expiration, les codes de statut et les serveurs de noms.",
        },
      ],
    },
    headers: {
      name: "En-têtes HTTP",
      desc: "Les en-têtes que votre navigateur envoie aux sites",
      title: "Afficheur d’en-têtes HTTP : vos en-têtes de requête",
      description: "Affichez tous les en-têtes de requête HTTP envoyés par votre navigateur, dont le user-agent, la langue et l’encodage, et ceux ajoutés par des proxys.",
      h1: "Afficheur d’en-têtes HTTP",
      lead: "Voici les en-têtes de requête que votre navigateur a envoyés à cette page.",
      about:
        "Chaque fois que votre navigateur charge une page, il envoie un ensemble d’en-têtes HTTP qui le décrivent. Cette page affiche exactement ce qui est parvenu à notre serveur, c’est-à-dire ce que verrait n’importe quel site que vous visitez. Les en-têtes marqués comme ajoutés par un proxy viennent du réseau situé entre vous et le serveur, comme un CDN, et non de votre navigateur.",
      faq: [
        {
          q: "Que sont les en-têtes de requête HTTP ?",
          a: "Les en-têtes sont de petites informations que votre navigateur envoie avec chaque requête, comme la langue que vous préférez, les types de contenu qu’il accepte et le navigateur que vous utilisez. Les serveurs s’en servent pour fournir la bonne version d’une page.",
        },
        {
          q: "Quels en-têtes peuvent m’identifier ?",
          a: "Les en-têtes User-Agent et Accept-Language sont les plus révélateurs, car, avec votre adresse IP, ils peuvent aider à construire une empreinte. Les navigateurs aux paramètres de confidentialité stricts réduisent ou uniformisent ces valeurs.",
        },
      ],
    },
    browser: {
      name: "Infos navigateur",
      desc: "User-agent, écran, langue et plus",
      title: "Quel est mon user-agent ? Infos navigateur et appareil",
      description: "Trouvez votre user-agent, navigateur, système, taille d’écran, langue et fuseau horaire. Voyez ce que chaque site peut lire sur vous.",
      h1: "Quel est mon user-agent ?",
      lead: "Ce que chaque site web peut apprendre de votre navigateur et de votre appareil sans rien vous demander.",
      about:
        "Votre navigateur en dit plus que la plupart des gens ne l’imaginent. Cette page liste les informations que JavaScript peut lire sans aucune demande d’autorisation : user-agent, plateforme, taille de l’écran et de la fenêtre, densité de pixels, langues préférées, fuseau horaire et indications matérielles. Rien de ce qui figure sur cette page n’est envoyé ailleurs : tout est lu localement dans votre navigateur.",
      faq: [
        {
          q: "Qu’est-ce qu’un user-agent ?",
          a: "Un user-agent est une ligne de texte que votre navigateur envoie à chaque site pour indiquer le navigateur, la version et le système d’exploitation que vous utilisez. Les sites s’en servent pour fournir la bonne version d’une page. Vous pouvez voir le vôtre en haut de cette page et le copier en un clic.",
        },
        {
          q: "Puis-je modifier mon user-agent ?",
          a: "Oui. Les outils de développement des navigateurs et certaines extensions permettent de le remplacer pour des tests. Le modifier ne masque pas votre adresse IP, et les sites peuvent souvent reconnaître votre vrai navigateur grâce à d’autres signaux.",
        },
        {
          q: "Que peuvent apprendre les sites web de mon navigateur ?",
          a: "Sans rien demander, un site peut lire votre navigateur et votre système d’exploitation, la taille de votre écran, votre langue, votre fuseau horaire et souvent le nombre de threads de votre processeur et votre mémoire. Combinées, ces informations peuvent rendre votre navigateur étonnamment unique : c’est ce qu’on appelle le fingerprinting (empreinte numérique).",
        },
        {
          q: "Comment réduire ce que mon navigateur révèle ?",
          a: "Utilisez un navigateur doté d’une protection contre le fingerprinting, comme Firefox avec la protection renforcée contre le pistage, Brave ou Safari. Gardez-le à jour, évitez les extensions inhabituelles qui rendent votre configuration plus unique, et envisagez un VPN si vous voulez aussi masquer votre adresse IP.",
        },
      ],
    },
    port: {
      name: "Testeur de port",
      desc: "Vérifiez si un port est ouvert sur votre IP",
      title: "Testeur de port : vérifiez les ports ouverts de votre IP",
      description: "Testeur de ports gratuit : vérifiez si un port est ouvert sur votre IP publique (redirection de ports, serveurs de jeu, Plex, SSH, bureau à distance).",
      h1: "Testeur de ports ouverts",
      lead: "Vérifiez si un port TCP est joignable sur votre IP publique. Pratique pour la redirection de ports et les serveurs de jeu.",
      about:
        "Un testeur de port vérifie si un port TCP de votre adresse IP publique accepte les connexions venant d’Internet. Utilisez-le après avoir configuré la redirection de ports pour un serveur de jeu, Plex, une caméra de sécurité, SSH ou le bureau à distance. Le test part du réseau de Cloudflare et vise uniquement votre propre IP : il reflète donc ce que le monde extérieur voit réellement.",
      faq: [
        {
          q: "Comment vérifier si un port est ouvert ?",
          a: "Saisissez le numéro de port ci-dessus et cliquez sur Tester le port. Le test se connecte à votre adresse IP publique depuis Internet et indique ouvert, fermé ou pas de réponse. Pour tester depuis votre propre ordinateur, utilisez netstat ou Test-NetConnection sous Windows, ou ss et nc sous macOS et Linux.",
        },
        {
          q: "Pourquoi mon port apparaît-il fermé alors que mon serveur fonctionne ?",
          a: "Trois causes sont fréquentes : le service n’écoute pas sur ce port, le pare-feu de votre ordinateur le bloque, ou votre routeur ne redirige pas le port vers votre appareil. Vérifiez aussi que votre fournisseur n’utilise pas de NAT de niveau opérateur (CGNAT), qui empêche totalement les connexions entrantes.",
        },
        {
          q: "Est-il sûr d’ouvrir un port ?",
          a: "Ouvrir un port expose tout ce qui écoute derrière lui à l’ensemble d’Internet. Ne redirigez que les ports de logiciels que vous tenez à jour, utilisez une authentification forte et fermez les ports dont vous n’avez plus besoin. Préférez un VPN ou un tunnel pour accéder à distance à des services privés.",
        },
      ],
    },
    speed: {
      name: "Test de débit",
      desc: "Latence, débit descendant et montant",
      title: "Test de débit Internet : téléchargement, envoi et ping",
      description: "Testez votre débit Internet en 20 secondes environ : téléchargement, envoi, latence et gigue mesurés vers le centre de données Cloudflare le plus proche.",
      h1: "Test de débit Internet",
      lead: "Mesurez la latence, le débit descendant et montant entre votre appareil et le serveur Cloudflare le plus proche.",
      about:
        "Ce test de débit mesure ce qui compte au quotidien. La latence est le délai d’un aller-retour, la gigue indique de combien ce délai varie, et le téléchargement et l’envoi correspondent au débit soutenu en mégabits par seconde. Comme le point de test est le centre de données Cloudflare le plus proche, le résultat reflète la qualité de votre propre connexion plutôt que celle d’un serveur lointain.",
      faq: [
        {
          q: "Comment fonctionne ce test de débit ?",
          a: "Votre navigateur mesure le temps d’aller-retour jusqu’au centre de données Cloudflare le plus proche, télécharge des données sur plusieurs connexions parallèles pendant huit secondes, puis en envoie pendant six secondes. Les débits sont exprimés en mégabits par seconde, l’unité de votre abonnement Internet.",
        },
        {
          q: "Pourquoi mon débit est-il inférieur à celui de mon abonnement ?",
          a: "Le signal Wi-Fi, les autres appareils du réseau, un vieux routeur, la congestion aux heures de pointe et la distance jusqu’au serveur de test diminuent tous les résultats. Pour un chiffre plus fiable, utilisez une connexion filaire et mettez en pause les autres téléchargements pendant le test.",
        },
      ],
    },
    ping: {
      name: "Test de ping",
      desc: "Vérifiez votre latence et votre gigue",
      title: "Test de ping : vérifiez votre latence et votre gigue",
      description: "Test de ping en ligne gratuit. Mesurez votre latence, votre gigue et votre perte de paquets vers le serveur Cloudflare le plus proche en 10 secondes environ.",
      h1: "Test de ping",
      lead: "Mesurez votre latence, votre gigue et votre perte de paquets vers le serveur Cloudflare le plus proche en dix secondes environ.",
      about:
        "Le ping est le temps, en millisecondes, qu’un tout petit message met pour aller de votre appareil à un serveur et revenir. C’est le chiffre qui décide si un jeu paraît instantané ou saccadé et si un appel vidéo se met à bégayer. Ce test envoie 25 vérifications rapides au centre de données Cloudflare le plus proche et indique votre ping moyen, meilleur et pire, votre gigue (de combien il varie) et toute perte de paquets. Comme le serveur de test est proche de vous, le résultat reflète l’état de votre propre connexion : Wi-Fi, routeur et fournisseur d’accès.",
      faq: [
        {
          q: "Qu’est-ce qu’un bon ping ?",
          a: "Moins de 30 ms environ est excellent, de 30 à 60 ms convient à presque tout, y compris aux jeux en ligne, de 60 à 100 ms suffit pour naviguer et passer des appels vidéo, et au-dessus de 150 ms vous commencerez à ressentir du lag dans les jeux rapides. Plus c’est bas, mieux c’est, et un ping stable compte autant qu’un ping faible.",
        },
        {
          q: "Que signifient la gigue et la perte de paquets ?",
          a: "La gigue est la variation de votre ping d’une vérification à l’autre. La perte de paquets est la part des vérifications qui n’ont jamais reçu de réponse. Une gigue élevée ou la moindre perte provoque des saccades dans les appels et les jeux, même quand le ping moyen paraît correct.",
        },
        {
          q: "Ce test de ping mesure-t-il la vitesse vers un serveur de jeu ?",
          a: "Non. Il mesure l’aller-retour entre votre appareil et le centre de données Cloudflare le plus proche, ce qui reflète la qualité de votre propre connexion. Votre ping vers un serveur de jeu précis dépend aussi de la distance et du trajet jusqu’à ce serveur.",
        },
      ],
    },
    webrtc: {
      name: "Test de fuite WebRTC",
      desc: "Votre navigateur révèle-t-il votre vraie IP ?",
      title: "Test de fuite WebRTC : votre VPN fuit-il votre IP ?",
      description: "Testez si votre navigateur expose votre vraie adresse IP via WebRTC, même connecté à un VPN ou à un proxy.",
      h1: "Test de fuite WebRTC",
      lead: "Les navigateurs peuvent révéler votre vraie IP via WebRTC, même derrière un VPN. Lancez le test pour voir ce qui est exposé.",
      about:
        "Un test de fuite WebRTC vérifie si votre navigateur expose une adresse IP différente de celle que les sites voient normalement. Il est surtout utile si vous utilisez un VPN ou un proxy, car une fuite signifie que votre vraie adresse IP est visible malgré le tunnel. Le test interroge un serveur STUN public pour obtenir votre IP, comme le ferait un site d’appel vidéo, puis compare la réponse avec votre connexion.",
      faq: [
        {
          q: "Qu’est-ce qu’une fuite WebRTC ?",
          a: "WebRTC permet aux navigateurs de se connecter directement pour les appels vidéo et le partage de fichiers, et pour cela il demande votre IP publique à un serveur STUN. Certains navigateurs renvoient ainsi votre vraie IP même lorsqu’un VPN est actif, ce qui expose votre véritable localisation.",
        },
        {
          q: "Comment corriger une fuite WebRTC ?",
          a: "Utilisez un VPN qui bloque les fuites WebRTC, désactivez WebRTC dans votre navigateur (Firefox permet de définir media.peerconnection.enabled sur false) ou installez une extension réputée qui restreint WebRTC. Relancez ensuite ce test pour confirmer que la fuite a disparu.",
        },
      ],
    },
    subnet: {
      name: "Calculateur de sous-réseau",
      desc: "Plages CIDR, masques et nombre d’hôtes",
      title: "Calculateur de sous-réseau : CIDR et masque de sous-réseau",
      description: "Calculateur de sous-réseau gratuit IPv4 et IPv6 : adresse réseau, broadcast, plage d’hôtes et nombre d’hôtes utilisables à partir d’une IP et d’un CIDR.",
      h1: "Calculateur de sous-réseau",
      lead: "Calculez les plages réseau, les masques et les hôtes utilisables de n’importe quel bloc CIDR IPv4 ou IPv6.",
      about:
        "Un calculateur de sous-réseau transforme un bloc CIDR en chiffres utiles pour configurer un réseau : adresses réseau et de diffusion, premier et dernier hôte utilisable, masques de sous-réseau et générique, et nombre d’hôtes possibles. Il prend en charge IPv4 et IPv6 et s’exécute entièrement dans votre navigateur : rien de ce que vous saisissez ne quitte votre appareil.",
      faq: [
        {
          q: "Est-ce un calculateur CIDR ?",
          a: "Oui. Saisissez n’importe quelle adresse IPv4 ou IPv6 avec une longueur de préfixe, par exemple 10.0.0.0/20 : il renvoie l’adresse réseau, l’adresse de diffusion, le masque de sous-réseau, le masque générique, le premier et le dernier hôte utilisable ainsi que le nombre d’hôtes. Il fait aussi office de calculateur de masque de sous-réseau et de plage d’adresses IP.",
        },
        {
          q: "Comment calculer un masque de sous-réseau ?",
          a: "Écrivez la longueur du préfixe sous forme d’autant de bits à 1, suivis de bits à 0 pour arriver à 32, puis convertissez chaque groupe de 8 bits en décimal. Pour /26, cela donne 11111111.11111111.11111111.11000000, soit 255.255.255.192. Ce calculateur le fait pour vous et donne aussi la plage d’hôtes.",
        },
        {
          q: "Combien d’hôtes compte un réseau /24 ?",
          a: "Un réseau /24 compte 256 adresses, dont 254 sont utilisables par des appareils. Une adresse sert d’identifiant du réseau et une autre d’adresse de diffusion. Le masque de sous-réseau est 255.255.255.0.",
        },
        {
          q: "Que signifie la notation CIDR ?",
          a: "La notation CIDR écrit un réseau sous la forme d’une adresse suivie d’une barre oblique et d’un nombre, comme 192.168.1.0/24. Le nombre indique combien de bits de poids fort identifient le réseau ; les bits restants identifient les hôtes. Plus le nombre est grand, plus le réseau est petit.",
        },
      ],
    },
  },

  home: {
    faq: [
      {
        q: "Quelle est mon adresse IP ?",
        a: "Votre adresse IP est le numéro public affiché en haut de cette page. Elle identifie votre connexion Internet auprès de chaque site et service que vous visitez. Sur un réseau domestique ou mobile, elle a été attribuée par votre fournisseur d’accès, et toutes les personnes connectées par ce biais la partagent.",
      },
      {
        q: "Comment trouver mon adresse IP ?",
        a: "Ouvrez cette page : votre adresse IP publique s’affiche instantanément, avec votre localisation approximative et votre FAI. Pour trouver l’adresse IP privée que votre appareil utilise à l’intérieur de votre réseau domestique, consultez les paramètres réseau, ou exécutez ipconfig sous Windows ou ifconfig sous macOS et Linux.",
      },
      {
        q: "Pourquoi la localisation est-elle fausse ou décalée de quelques kilomètres ?",
        a: "La géolocalisation IP est une estimation construite à partir des registres des fournisseurs et de données de routage, pas du GPS. Elle est généralement juste au niveau du pays et souvent de la ville, mais elle pointe fréquemment vers le point d’accès le plus proche de votre FAI plutôt que vers votre domicile. Un VPN ou un réseau mobile peut décaler encore plus le résultat.",
      },
      {
        q: "Quelle est la différence entre IPv4 et IPv6 ?",
        a: "Les adresses IPv4 ressemblent à 203.0.113.7 et il n’en existe qu’environ 4,3 milliards. Les adresses IPv6 ressemblent à 2001:db8::1 et ce format offre un nombre pratiquement illimité d’adresses. La plupart des connexions peuvent utiliser les deux. Cette page affiche celle que votre navigateur a utilisée, et vérifie aussi l’autre.",
      },
      {
        q: "Est-il sans danger de partager mon adresse IP ?",
        a: "Partager son adresse IP présente en général peu de risques. Seule, elle révèle votre localisation approximative et votre FAI, pas votre nom ni votre adresse postale. Elle permet toutefois d’envoyer du trafic vers votre connexion : évitez donc de la publier si vous hébergez des serveurs ou jouez à des jeux où les joueurs s’attaquent entre eux, et utilisez un VPN si vous voulez la masquer.",
      },
      {
        q: "ipcomet enregistre-t-il mon adresse IP ?",
        a: "Non. Notre code n’enregistre, ne journalise et ne vend pas votre adresse IP, et il n’y a aucune publicité. La page lit votre IP dans la requête, vous l’affiche puis l’oublie. Si vous acceptez la bannière d’analyse facultative, Google Analytics compte les visites à l’aide de cookies et note les pages que vous consultez, mais pas les adresses que vous recherchez ; si vous refusez, rien n’est déposé. Consultez la page de confidentialité pour tous les détails.",
      },
    ],
  },

  about: {
    title: "À propos d’ipcomet : comment fonctionnent nos outils",
    description: "Comment fonctionne chaque outil d’ipcomet, d’où viennent ses données et sa précision. Gratuit, sans publicité ; analyses seulement si vous acceptez.",
    h1: "À propos d’ipcomet",
    lead: "ipcomet est un ensemble gratuit d’outils réseau et de guides en langage simple. Il fonctionne sur Cloudflare Workers, et son propre code ne garde aucune trace de ses utilisateurs.",
    sources: [
      ["Votre IP et votre connexion", "Lues dans la requête elle-même par le réseau de Cloudflare : votre adresse IP, une localisation approximative et le propriétaire du réseau d’après les données de géolocalisation de Cloudflare, le centre de données Cloudflare le plus proche, les versions de HTTP et de TLS et le temps d’aller-retour. Vos adresses IPv4 et IPv6 sont aussi confirmées par ipify."],
      ["Recherche IP", "Données de localisation et de réseau d’ipwho.is, avec ipapi.is et geojs.io en secours, plus une recherche DNS inverse en direct pour le nom d’hôte. Les résultats sont mis en cache jusqu’à un jour."],
      ["Recherche DNS et DNS inverse", "DNS en direct via HTTPS depuis Cloudflare 1.1.1.1 ou Google 8.8.8.8, selon votre choix. ipcomet ne met pas les réponses en cache."],
      ["WHOIS", "RDAP, le successeur moderne de WHOIS, via rdap.org, qui transmet chaque requête au registre qui détient l’enregistrement."],
      ["Réputation IP", "La liste publiée des nœuds de sortie du projet Tor, le type de réseau propriétaire de l’adresse (FAI résidentiel, opérateur mobile, hébergeur ou fournisseur de VPN), les indices de son nom DNS inverse et cinq listes de blocage publiques : SpamCop, DroneBL, Passive Spam Block List, s5h.net et UCEPROTECT Level 1."],
      ["Testeur de proxy", "Notre serveur se connecte au proxy que vous saisissez depuis le réseau de Cloudflare et ouvre des tunnels HTTPS à travers lui vers les points de test de Cloudflare (www.cloudflare.com et speed.cloudflare.com). Il lit l’IP de sortie, les temps de réponse et un téléchargement de 1 Mo, puis recherche l’IP de sortie comme le font la Recherche IP et la Réputation IP. Si vous ajoutez un site à tester, il demande cette seule page via votre proxy et ne renvoie que le code d’état."],
      ["Test de débit et ping", "La latence est mesurée entre votre navigateur et le centre de données Cloudflare le plus proche. Le téléchargement et l’envoi se font directement entre votre navigateur et les serveurs de test de vitesse de Cloudflare (speed.cloudflare.com), sur six connexions parallèles. La première seconde et demie est ignorée et les échantillons les plus lents et les plus rapides sont écartés, de sorte que le chiffre reflète votre débit stable. Les résultats montrent la qualité de votre propre connexion, pas le trajet vers un serveur de jeu ou de streaming particulier."],
      ["Testeur de port", "Une tentative de connexion TCP depuis le réseau de Cloudflare vers l’adresse IP depuis laquelle vous visitez le site. Elle ne peut pas viser l’adresse de quelqu’un d’autre."],
      ["Test de fuite WebRTC", "Votre navigateur demande son adresse publique à stun.cloudflare.com, comme le ferait un site d’appel vidéo, et la page compare la réponse avec votre connexion."],
      ["En-têtes HTTP", "Les en-têtes que votre navigateur a envoyés à cette page, exactement tels que notre serveur les a reçus."],
      ["Infos navigateur et calculateur de sous-réseau", "Calculés dans votre navigateur. Rien de ce que vous voyez ou saisissez sur ces pages ne nous est envoyé."],
    ],
    body: `<h2>À quoi sert ipcomet</h2>
<p>La plupart des visiteurs cherchent une seule réponse : <a href="/fr/">quelle est mon adresse IP</a>. Les autres outils répondent aux questions qui viennent ensuite, comme <a href="/fr/lookup">où se trouve une adresse IP</a>, <a href="/fr/dns">que disent les enregistrements DNS d’un domaine</a>, <a href="/fr/whois">qui a enregistré un domaine</a>, <a href="/fr/speed">quel est le débit d’une connexion</a> et <a href="/fr/port">si un port est ouvert</a>.</p>
<h2>D’où viennent les données</h2>
<p>Chaque résultat du site provient de l’une des sources ci-dessous, et les pages précisent lorsqu’un résultat n’est qu’une estimation.</p>
{{sources}}
<h2>Quelle est la précision des résultats ?</h2>
<p>La géolocalisation IP est approximative. Elle repose sur des enregistrements réseau et des mesures, pas sur le GPS : elle est donc généralement juste au niveau du pays, souvent au niveau de la région, et seulement parfois au niveau de la ville. Elle pointe fréquemment vers le point d’accès le plus proche de votre fournisseur plutôt que vers votre domicile, et les connexions mobiles, par satellite ou via VPN peuvent apparaître à des centaines de kilomètres.</p>
<p>La détection des VPN, des proxys et de Tor repose sur des indices. Tor est vérifié d’après la liste officielle des nœuds de sortie, mais un VPN ou un proxy ne peut qu’être déduit du propriétaire de l’adresse, de son nom DNS inverse et de sa présence sur des listes de blocage. Les proxys résidentiels ressemblent à des connexions domestiques ordinaires et ne peuvent pas être détectés ainsi. Considérez la <a href="/fr/reputation">vérification de réputation</a> comme un indicateur, pas comme une preuve.</p>
<h2>Les guides</h2>
<p>Les <a href="/learn" hreflang="en" lang="en">guides</a> sont pour l’instant rédigés en anglais seulement. Chacun répond à une question précise et indique la date de sa dernière mise à jour. Nous ne publierons de traductions qu’après relecture par une personne qui parle la langue.</p>
<h2>Confidentialité</h2>
<p>Il n’y a aucune publicité, et notre code n’enregistre ni ne journalise l’adresse IP des visiteurs. Les seuls cookies viennent de Google Analytics, facultatif, qui ne se charge que si vous l’acceptez dans la bannière. La <a href="/fr/privacy">page de confidentialité</a> explique ce choix et liste tous les services tiers que contacte un outil.</p>`,
  },

  privacy: {
    title: "Politique de confidentialité",
    description: "ipcomet ne stocke pas votre IP, n’affiche aucune publicité et n’utilise Google Analytics que si vous acceptez. Voici ce qu’il advient de vos données.",
    h1: "Confidentialité",
    lead: "En bref : nous vous montrons vos propres informations, puis nous les oublions.",
    body: `<h2>Ce que nous faisons de votre adresse IP</h2>
<p>Votre adresse IP est lue dans la requête entrante afin de pouvoir vous être renvoyée. Notre code ne l’écrit ni dans une base de données, ni dans un journal, ni dans aucun stockage, et elle n’est jamais vendue ni partagée à des fins publicitaires.</p>
<h2>Cookies et analyses</h2>
<p>Par défaut, nous ne déposons aucun cookie et ne stockons rien dans votre navigateur, sauf, une fois que vous avez répondu à la bannière, une note de votre choix. Si vous cliquez sur <strong>Accepter</strong>, nous chargeons Google Analytics (de Google LLC) pour compter les visites. Il dépose des cookies, nommés <code>_ga</code> et <code>_ga_</code> suivis d’un identifiant, pour distinguer les visites, et il envoie à Google la page consultée, le type de navigateur et d’appareil, votre localisation approximative et la façon dont vous êtes arrivé. Nous retirons d’abord tout ce qui suit le point d’interrogation dans l’adresse de la page, de sorte que les adresses que vous recherchez ne sont pas envoyées, et nous désactivons les signaux Google et la personnalisation des annonces. Google Analytics 4 ne stocke pas les adresses IP, et les données sont conservées 14 mois.</p>
<p>Si vous cliquez sur <strong>Refuser</strong>, ou si votre navigateur envoie un signal Global Privacy Control, Google Analytics n’est jamais chargé et rien n’est envoyé à Google. Vous pouvez changer d’avis à tout moment avec le lien « Choix d’analyse » en bas de chaque page. Nous n’utilisons jamais de scripts publicitaires.</p>
<h2>Hébergement</h2>
<p>Ce site fonctionne sur Cloudflare Workers. Cloudflare traite chaque requête en tant qu’hébergeur et la gère selon sa propre politique de confidentialité. Nous utilisons aussi la limitation de débit de Cloudflare pour empêcher les abus des outils les plus lourds ; elle n’utilise l’adresse de votre connexion que pour compter les requêtes récentes.</p>
<h2>Services tiers</h2>
<ul>
<li><strong>ipify.</strong> Pour afficher vos adresses IPv4 et IPv6, votre navigateur interroge api4.ipify.org et api6.ipify.org. Ces services voient votre adresse, comme n’importe quel site que vous visitez.</li>
<li><strong>ipwho.is, ipapi.is et geojs.io.</strong> Lorsque vous recherchez une adresse IP autre que la vôtre, notre serveur envoie cette adresse à ipwho.is pour obtenir des données de localisation, puis se rabat sur ipapi.is, puis geojs.io, s’il est indisponible. Les résultats sont mis en cache pendant un jour.</li>
<li><strong>Cloudflare DNS et Google DNS.</strong> Les noms de domaine que vous interrogez dans les outils DNS et de recherche sont envoyés au résolveur que vous choisissez.</li>
<li><strong>RDAP.</strong> Les domaines et adresses IP que vous saisissez dans l’outil WHOIS sont envoyés à rdap.org, un redirecteur public, qui transmet la requête au registre détenant l’enregistrement.</li>
<li><strong>Listes de blocage et liste des nœuds de sortie Tor.</strong> L’outil de réputation IP vérifie l’adresse que vous lui donnez (ou la vôtre, si vous laissez le champ vide) auprès de cinq listes de blocage DNS publiques : SpamCop, DroneBL, Passive Spam Block List, s5h.net et UCEPROTECT. Il télécharge aussi la liste publique des nœuds de sortie du projet Tor.</li>
<li><strong>STUN.</strong> Le test WebRTC demande à stun.cloudflare.com votre adresse publique depuis votre navigateur, comme le ferait un site d’appel vidéo.</li>
<li><strong>Serveurs de vitesse Cloudflare.</strong> Les tests de débit et de ping envoient et reçoivent leurs données directement entre votre navigateur et speed.cloudflare.com, les serveurs de test de vitesse de Cloudflare. Ils voient votre adresse IP, comme n’importe quel site que vous visitez, et les requêtes ne transportent aucun cookie. S’ils sont inaccessibles, les tests basculent sur notre propre serveur.</li>
<li><strong>Google Analytics (seulement si vous acceptez).</strong> Après votre clic sur Accepter dans la bannière, votre navigateur charge Google Analytics depuis googletagmanager.com et envoie les données de visite à google-analytics.com, comme décrit plus haut sous Cookies et analyses. Google peut les traiter sur des serveurs situés hors de votre pays. Si vous refusez, rien de tout cela n’a lieu.</li>
</ul>
<h2>Testeur de proxy</h2>
<p>Lorsque vous testez un proxy, l’adresse que vous saisissez et l’éventuel nom d’utilisateur et mot de passe sont envoyés en HTTPS à notre serveur, utilisés pour ce seul test, puis supprimés. Ils ne sont ni stockés ni écrits dans des journaux. Notre serveur se connecte à votre proxy depuis le réseau de Cloudflare et envoie des requêtes à travers lui vers les points de test de Cloudflare (www.cloudflare.com et speed.cloudflare.com) et, si vous en saisissez un, vers le site que vous avez choisi. Votre fournisseur de proxy voit donc ces requêtes arriver de Cloudflare, pas de vous. L’adresse IP de sortie révélée par le proxy est ensuite recherchée avec les mêmes services que ceux décrits ci-dessus.</p>
<h2>Testeur de port</h2>
<p>Le testeur de port se connecte uniquement à l’adresse IP depuis laquelle vous visitez le site. Il ne peut pas être dirigé vers l’adresse de quelqu’un d’autre.</p>
<h2>Modifications</h2>
<p>Si cette politique change, la nouvelle version apparaîtra ici. La version anglaise fait foi.</p>`,
  },
};
