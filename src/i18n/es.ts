import type { LocaleData } from "./types";

/**
 * Spanish (neutral, "tú"). Interface strings are keyed by the English text (see types.ts). Placeholders such as {n}
 * must stay exactly as written. The guides are not translated yet, so strings that point to them say "(EN)".
 */
export const es: LocaleData = {
  ui: {
    "8.8.8.8 or example.com": "8.8.8.8 o example.com",
    "(redirects to {url})": "(redirige a {url})",
    "© {year} ipcomet. Served from the Cloudflare network, close to you.": "© {year} ipcomet. Servido desde la red de Cloudflare, cerca de ti.",
    ASN: "ASN",
    About: "Acerca de",
    "About and methodology": "Acerca de y metodología",
    "Contact": "Contacto",
    "About {name}": "Acerca de {name}",
    "Accepted formats: {formats}. Your proxy details are used for this one check and are never stored or logged.":
      "Formatos aceptados: {formats}. Los datos de tu proxy se usan solo para esta comprobación y nunca se almacenan ni se registran.",
    "Add your credentials and check again.": "Añade tus credenciales y vuelve a comprobar.",
    "All articles →": "Todas las guías (EN) →",
    "All languages": "Todos los idiomas",
    "All records": "Todos los registros",
    "All tools": "Todas las herramientas",
    Architecture: "Arquitectura",
    "Auto-detect": "Detección automática",
    Average: "Media",
    Best: "Mejor",
    "Blocklist checks are not available for this address.": "La comprobación de listas de bloqueo no está disponible para esta dirección.",
    "Blocklist checks cover IPv4 only.": "La comprobación de listas de bloqueo solo cubre IPv4.",
    Blocklists: "Listas de bloqueo",
    Broadcast: "Dirección de difusión",
    Browser: "Navegador",
    "Built and maintained by {name}.": "Creado y mantenido por {name}.",
    "Count visits with Google Analytics? It uses cookies. Declining changes nothing else on the site.": "¿Contar las visitas con Google Analytics? Usa cookies. Rechazar no cambia nada más en el sitio.",
    Accept: "Aceptar",
    Decline: "Rechazar",
    "Analytics choices": "Opciones de analítica",
    "Analytics consent": "Consentimiento de analítica",
    CIDR: "CIDR",
    "CIDR block": "Bloque CIDR",
    "CPU threads": "Hilos de la CPU",
    Calculate: "Calcular",
    "Check IP": "Comprobar IP",
    "Check my IP": "Ver mi IP",
    "Check port": "Comprobar puerto",
    "Check proxy": "Comprobar proxy",
    "Check the host and port, and that the proxy is online and reachable from the internet.": "Revisa el host y el puerto, y que el proxy esté en línea y sea accesible desde internet.",
    "Check the host and port, and that the proxy is online.": "Revisa el host y el puerto, y que el proxy esté en línea.",
    "Check the host and port. Some providers use a different port for SOCKS5 than for HTTP, and some only accept allow-listed IP addresses.":
      "Revisa el host y el puerto. Algunos proveedores usan un puerto distinto para SOCKS5 que para HTTP, y otros solo aceptan direcciones IP autorizadas.",
    "Check whether it looks like a VPN, proxy, Tor exit or data center, and whether it is on spam and abuse blocklists.":
      "Comprueba si parece una VPN, un proxy, un nodo de salida de Tor o un centro de datos, y si figura en listas de bloqueo de spam y abuso.",
    "Checked {ip} in {ms} ms.": "{ip} comprobada en {ms} ms.",
    "Checking blocklists and network type…": "Comprobando listas de bloqueo y tipo de red…",
    "Checking {ip} from Cloudflare's network. You can only test your own IP, and a service must be running and allowed through your firewall and router for a port to show as open.":
      "Comprobando {ip} desde la red de Cloudflare. Solo puedes probar tu propia IP, y para que un puerto aparezca como abierto debe haber un servicio activo y permitido por tu cortafuegos y tu router.",
    "Checking…": "Comprobando…",
    "Checking… {i} of {total}": "Comprobando… {i} de {total}",
    City: "Ciudad",
    Clean: "Limpia",
    "Color depth": "Profundidad de color",
    "Connect to proxy": "Conexión al proxy",
    "Connecting through your proxy. This usually takes 5 to 15 seconds…": "Conectando a través de tu proxy. Suele tardar de 5 a 15 segundos…",
    "Connecting…": "Conectando…",
    Connection: "Conexión",
    "Cookies enabled": "Cookies activadas",
    Coordinates: "Coordenadas",
    Copied: "Copiado",
    Copy: "Copiar",
    "Copy IP": "Copiar IP",
    "Could not check": "No se pudo comprobar",
    "Could not connect to the proxy.": "No se pudo conectar con el proxy.",
    "Could not open a connection to the proxy.": "No se pudo abrir una conexión con el proxy.",
    "Could not reach the proxy.": "No se pudo alcanzar el proxy.",
    "Could not resolve that domain right now.": "No se pudo resolver ese dominio en este momento.",
    "Could not resolve the proxy hostname right now. Please try again.": "No se pudo resolver el nombre de host del proxy en este momento. Inténtalo de nuevo.",
    Country: "País",
    "Credentials sent": "Credenciales enviadas",
    "Cross-site requests are not allowed.": "No se permiten solicitudes entre sitios.",
    DNSSEC: "DNSSEC",
    "DNS resolver unavailable. Please try again.": "Resolvedor DNS no disponible. Inténtalo de nuevo.",
    "Dark mode": "Modo oscuro",
    Details: "Detalles",
    "Device model": "Modelo del dispositivo",
    Display: "Visualización",
    "Do Not Track": "No rastrear (Do Not Track)",
    Domain: "Dominio",
    "Domain or IP": "Dominio o IP",
    Done: "Listo",
    Download: "Descarga",
    "Download sample": "Muestra descargada",
    "Download speed": "Velocidad de descarga",
    "Edge location": "Ubicación del servidor edge",
    Encryption: "Cifrado",
    "English guide · {n} min read": "Guía en inglés · {n} min de lectura",
    "Enter a port between 1 and 65535.": "Introduce un puerto entre 1 y 65535.",
    "Enter a proxy, such as host:port or user:password@host:port.": "Introduce un proxy, como host:port o user:password@host:port.",
    "Enter a valid IPv4 or IPv6 address.": "Introduce una dirección IPv4 o IPv6 válida.",
    "Enter a valid domain name or IP address.": "Introduce un nombre de dominio o una dirección IP válida.",
    "Enter a valid domain or IP address.": "Introduce un dominio o una dirección IP válida.",
    "Enter a valid proxy hostname or IP address.": "Introduce un nombre de host o una dirección IP de proxy válida.",
    "Enter a website name for the target, not an IP address.": "Introduce el nombre de un sitio web como destino, no una dirección IP.",
    "Enter an IP address or domain.": "Introduce una dirección IP o un dominio.",
    "Enter an IP address, e.g. 8.8.8.8": "Introduce una dirección IP, p. ej. 8.8.8.8",
    "Enter an IP address, for example 8.8.8.8. For a domain name, use the DNS lookup instead.":
      "Introduce una dirección IP, por ejemplo 8.8.8.8. Para un nombre de dominio, usa la consulta DNS.",
    "Enter an IPv4 or IPv6 address, optionally followed by /prefix (for example 192.168.1.0/24).":
      "Introduce una dirección IPv4 o IPv6, opcionalmente seguida de /prefijo (por ejemplo 192.168.1.0/24).",
    "Enter one proxy at a time, without spaces.": "Introduce un solo proxy cada vez, sin espacios.",
    Error: "Error",
    "Everything you need to inspect, test and troubleshoot a connection, with no sign-up.": "Todo lo que necesitas para inspeccionar, probar y diagnosticar una conexión, sin registrarte.",
    "Excellent. This is great for online gaming and video calls.": "Excelente. Ideal para juegos en línea y videollamadas.",
    "Exit IP": "IP de salida",
    "Exit IP and reputation": "IP de salida y reputación",
    "Exit IPs seen": "IP de salida detectadas",
    Expires: "Caduca",
    "Fair. Fine for browsing and calls, and you may notice lag in fast games.": "Aceptable. Sirve para navegar y llamar, pero puedes notar lag en juegos rápidos.",
    "Fast, private network tools. Find your IP address, look up DNS and WHOIS records, test your speed and more.":
      "Herramientas de red rápidas y privadas. Encuentra tu dirección IP, consulta registros DNS y WHOIS, prueba tu velocidad y más.",
    "First address": "Primera dirección",
    "First host": "Primer host",
    "Free network tools": "Herramientas de red gratuitas",
    "Frequently asked questions": "Preguntas frecuentes",
    "Gathering WebRTC candidates…": "Recopilando candidatos WebRTC…",
    "Good. Fine for gaming, calls and everything else.": "Buena. Sirve para jugar, llamar y todo lo demás.",
    "HTTP alt": "HTTP alt.",
    Handle: "Identificador (handle)",
    "Headers marked “added by proxy” come from the network in between, not from your browser. Websites can read all of the others.":
      "Las cabeceras marcadas como «añadido por un proxy» proceden de la red intermedia, no de tu navegador. Los sitios web pueden leer todas las demás.",
    Hide: "Ocultar",
    "High. You will notice lag. Try a wired connection, move closer to your router or restart it.":
      "Alta. Notarás lag. Prueba con una conexión por cable, acércate al router o reinícialo.",
    Home: "Inicio",
    Hostname: "Nombre de host",
    "Hosting or data center network": "Red de alojamiento o centro de datos",
    "If your provider uses IP allow-listing instead of a username and password, requests from our servers are not on your list, so this tool cannot test it.":
      "Si tu proveedor usa una lista de IP autorizadas en lugar de usuario y contraseña, las solicitudes de nuestros servidores no están en tu lista, así que esta herramienta no puede probarlo.",
    "IP address": "Dirección IP",
    "IP address or domain": "Dirección IP o dominio",
    "IP version": "Versión de IP",
    "IP websites see": "IP que ven los sitios web",
    "IPv6 example": "Ejemplo IPv6",
    ISP: "ISP",
    "Is your IP flagged?": "¿Tu IP está marcada?",
    "It may be the other protocol type, or it may be ignoring our servers.": "Puede que sea el otro tipo de protocolo, o que esté ignorando nuestros servidores.",
    "It may be the other protocol type, or it may not accept connections from our servers.":
      "Puede que sea el otro tipo de protocolo, o que no acepte conexiones de nuestros servidores.",
    Jitter: "Jitter",
    "Known VPN or proxy network": "Red de VPN o proxy conocida",
    Language: "Idioma",
    "Last address": "Última dirección",
    "Last changed": "Último cambio",
    "Last host": "Último host",
    Latency: "Latencia",
    "Latency to edge": "Latencia al servidor edge",
    Learn: "Guías (EN)",
    "Learn about IP addresses": "Aprende sobre las direcciones IP (guías en inglés)",
    "Leave credentials out of the target address.": "No incluyas credenciales en la dirección de destino.",
    "Leave empty to check your own IP": "Déjalo vacío para comprobar tu propia IP",
    "Likely a residential or mobile ISP": "Probablemente un ISP residencial o móvil",
    Listed: "En lista",
    "Listed on {n} of {total} blocklists checked. This can affect email delivery and some websites.":
      "Figura en {n} de las {total} listas de bloqueo comprobadas. Esto puede afectar a la entrega de correo y a algunos sitios web.",
    "Listed on {n} of {total}: {names}": "Figura en {n} de {total} listas: {names}",
    "Loading…": "Cargando…",
    "Local addresses": "Direcciones locales",
    "Locale and system": "Idioma y sistema",
    Location: "Ubicación",
    "Location data is temporarily unavailable for this address. Please try again in a moment.":
      "Los datos de ubicación no están disponibles temporalmente para esta dirección. Inténtalo de nuevo en un momento.",
    "Location is approximate. It comes from your IP address, not GPS, and often points to your ISP's nearest hub instead of your home.":
      "La ubicación es aproximada. Procede de tu dirección IP, no del GPS, y a menudo apunta al nodo más cercano de tu ISP en lugar de a tu casa.",
    "Look up": "Consultar",
    "Look up hostname": "Buscar nombre de host",
    "My IP": "Mi IP",
    "Looking up PTR record…": "Buscando el registro PTR…",
    "Looking up…": "Consultando…",
    Lookup: "Consultar",
    "Measured from Cloudflare's network near you{edge}, not from your device, and from one 1 MB sample, so use the numbers to compare proxies with each other. Tests run over encrypted HTTPS tunnels, so the transparent, anonymous and elite labels, which depend on HTTP headers, do not apply.":
      "Medido desde la red de Cloudflare cercana a ti{edge}, no desde tu dispositivo, y a partir de una única muestra de 1 MB, así que usa las cifras para comparar proxies entre sí. Las pruebas se hacen por túneles HTTPS cifrados, por lo que las etiquetas transparente, anónimo y élite, que dependen de las cabeceras HTTP, no se aplican.",
    "Measured from your device to the nearest Cloudflare data center{colo}. It shows the quality of your own connection, not the route to a particular game server.":
      "Medido desde tu dispositivo hasta el centro de datos de Cloudflare más cercano{colo}. Refleja la calidad de tu propia conexión, no la ruta hasta un servidor de juego concreto.",
    "Measuring latency…": "Midiendo la latencia…",
    Memory: "Memoria",
    Mobile: "Móvil",
    "More tools": "Más herramientas",
    Nameservers: "Servidores de nombres",
    Network: "Red",
    "Network address": "Dirección de red",
    "Network type": "Tipo de red",
    No: "No",
    "No PTR record found for {q}. The owner has not set a reverse name, which is common for home connections.":
      "No se encontró ningún registro PTR para {q}. El propietario no ha definido un nombre inverso, algo habitual en las conexiones domésticas.",
    "No VPN or hosting signs found. Residential proxies and some VPNs cannot be detected from public data.":
      "No se detectan señales de VPN ni de alojamiento. Los proxies residenciales y algunas VPN no se pueden detectar con datos públicos.",
    "No ads. Analytics only if you accept.": "Sin anuncios. Analítica solo si lo aceptas.",
    "No answer": "Sin respuesta",
    "No credentials needed": "No hacen falta credenciales",
    "No registration record found for that IP.": "No se encontró ningún registro para esa IP.",
    "No registration record found. The domain may not be registered, or its registry doesn't support RDAP.":
      "No se encontró ningún registro. Puede que el dominio no esté registrado o que su registro no admita RDAP.",
    "No replies. Check your connection and try again.": "Sin respuesta. Revisa tu conexión e inténtalo de nuevo.",
    "No {type} records.": "No hay registros {type}.",
    None: "Ninguno",
    "None (hidden by browser)": "Ninguna (oculta por el navegador)",
    "None of the checks got an answer, so your connection may be offline.": "Ninguna comprobación recibió respuesta, así que es posible que tu conexión esté desconectada.",
    "Not detected": "No detectada",
    "Not enough data came back to measure speed.": "No llegaron datos suficientes para medir la velocidad.",
    "Not found": "No encontrada",
    "Not listed on any of the {total} blocklists that answered.": "No figura en ninguna de las {total} listas de bloqueo que respondieron.",
    "Not listed on any of {total} checked": "No figura en ninguna de las {total} listas comprobadas",
    "Not measured": "No medido",
    "Not sure what that means? Read {link}.": "¿No sabes qué significa? Lee {link}.",
    "Not working": "No funciona",
    Off: "Desactivado",
    On: "Activado",
    Online: "En línea",
    "Only https:// targets can be tested.": "Solo se pueden probar destinos https://.",
    "Only the standard HTTPS port (443) can be tested.": "Solo se puede probar el puerto HTTPS estándar (443).",
    "Open menu": "Abrir menú",
    "Operating system": "Sistema operativo",
    Organization: "Organización",
    "PTR query": "Consulta PTR",
    "Packet loss": "Pérdida de paquetes",
    "Page not found": "Página no encontrada",
    "Page not found.": "Página no encontrada.",
    Parent: "Superior",
    "Password (optional)": "Contraseña (opcional)",
    "Pixel ratio": "Relación de píxeles",
    "Port 25 can't be tested from Cloudflare Workers.": "El puerto 25 no se puede probar desde Cloudflare Workers.",
    "Port checks only work from a public IP address, so they are unavailable on a local network.":
      "La comprobación de puertos solo funciona desde una dirección IP pública, así que no está disponible en una red local.",
    "Port number": "Número de puerto",
    "Port {port} is closed": "El puerto {port} está cerrado",
    "Port {port} is open": "El puerto {port} está abierto",
    "Port {port}: no response": "Puerto {port}: sin respuesta",
    "Port, e.g. 443": "Puerto, p. ej. 443",
    "Postal code": "Código postal",
    "Prefix length must be between 0 and 128.": "La longitud del prefijo debe estar entre 0 y 128.",
    "Prefix length must be between 0 and 32.": "La longitud del prefijo debe estar entre 0 y 32.",
    "Press start to measure": "Pulsa Iniciar para medir",
    Primary: "Principal",
    Privacy: "Privacidad",
    Protocol: "Protocolo",
    Proxy: "Proxy",
    "Proxy address": "Dirección del proxy",
    "Proxy handshake": "Negociación con el proxy",
    "Proxy password": "Contraseña del proxy",
    "Proxy type": "Tipo de proxy",
    "Proxy username": "Usuario del proxy",
    "Public IP via WebRTC": "IP pública vía WebRTC",
    "Querying DNS…": "Consultando el DNS…",
    Range: "Rango",
    "Ready when you are": "Listo cuando tú lo estés",
    "Record type": "Tipo de registro",
    Registered: "Registrado",
    Registrar: "Registrador",
    "Related guides": "Guías relacionadas (EN)",
    "Resolved from": "Resuelto desde",
    Resolver: "Resolvedor",
    "Resolver returned {rcode}.": "El resolvedor devolvió {rcode}.",
    "Results for {name} via {resolver} DNS": "Resultados de {name} mediante el DNS de {resolver}",
    "Results reflect the path to the nearest Cloudflare data center{colo}, which is typically faster than a trip to a far-away server. The test runs for about 15 seconds and moves as much data as your connection can carry, so on a fast line it can use several hundred megabytes.":
      "Los resultados reflejan el camino hasta el centro de datos de Cloudflare más cercano{colo}, normalmente más rápido que ir a un servidor lejano. La prueba dura unos 15 segundos y mueve todos los datos que tu conexión pueda transportar, así que en una línea rápida puede usar varios cientos de megabytes.",
    Rotation: "Rotación",
    "Rotating: {ips} different IPs in {n} requests": "Con rotación: {ips} IP distintas en {n} solicitudes",
    "Run again": "Repetir",
    "Run test": "Iniciar prueba",
    "Run the reputation check": "Comprobar la reputación",
    SOCKS5: "SOCKS5",
    "Same exit IP in all {n} requests (static or sticky)": "La misma IP de salida en las {n} solicitudes (estática o persistente)",
    Screen: "Pantalla",
    Search: "Buscar",
    "Searching registry…": "Buscando en el registro…",
    "Short, plain-English guides on how the internet identifies you and what you can do about it.":
      "Guías breves y claras, en inglés, sobre cómo te identifica internet y qué puedes hacer al respecto.",
    Show: "Mostrar",
    "Sign-in": "Autenticación",
    Sitemap: "Mapa del sitio",
    "Some requests failed: {errors}": "Algunas solicitudes fallaron: {errors}",
    "Something accepted the connection.": "Algo aceptó la conexión.",
    "Something went wrong on our side. Please try again.": "Algo ha fallado por nuestra parte. Inténtalo de nuevo.",
    "Start ping test": "Iniciar prueba de ping",
    "Start test": "Iniciar prueba",
    Status: "Estado",
    "Subnet mask": "Máscara de subred",
    "Success rate": "Tasa de éxito",
    TTL: "TTL",
    "Test a website through it, e.g. https://example.com (optional)": "Probar un sitio web a través de él, p. ej. https://example.com (opcional)",
    "Test again": "Repetir la prueba",
    "Test for WebRTC leaks": "Probar fugas de WebRTC",
    "Testing download…": "Probando la descarga…",
    "Testing upload…": "Probando la subida…",
    "That doesn't look like a valid IP address or domain.": "Eso no parece una dirección IP ni un dominio válidos.",
    "That IPv6 address is not valid. Use the format [address]:port.": "Esa dirección IPv6 no es válida. Usa el formato [dirección]:puerto.",
    "That is a private or reserved address.": "Es una dirección privada o reservada.",
    "That is a private or reserved address. Only proxies reachable from the public internet can be tested.":
      "Es una dirección privada o reservada. Solo se pueden probar proxies accesibles desde internet.",
    "That is a private or reserved address, so it has no public location.": "Es una dirección privada o reservada, por lo que no tiene ubicación pública.",
    "That is a private or reserved address, so it has no public reputation.": "Es una dirección privada o reservada, por lo que no tiene reputación pública.",
    "That page doesn't exist. Try one of the tools below.": "Esa página no existe. Prueba una de las herramientas de abajo.",
    "That request is too large.": "Esa solicitud es demasiado grande.",
    "That target address is not a valid URL.": "Esa dirección de destino no es una URL válida.",
    "That target address is too long.": "Esa dirección de destino es demasiado larga.",
    "The SOCKS5 proxy sent an invalid reply.": "El proxy SOCKS5 envió una respuesta no válida.",
    "The connection closed before the full answer arrived.": "La conexión se cerró antes de recibir la respuesta completa.",
    "The connection dropped while talking to the proxy.": "La conexión se interrumpió mientras se comunicaba con el proxy.",
    "The connection timed out. A firewall is probably silently dropping traffic, or the host is unreachable.":
      "La conexión agotó el tiempo de espera. Probablemente un cortafuegos esté descartando el tráfico en silencio, o el host no es accesible.",
    "The connection was refused. Nothing is listening, or a firewall rejected it.": "Se rechazó la conexión. No hay nada escuchando, o un cortafuegos la rechazó.",
    "The destination closed the connection without answering.": "El destino cerró la conexión sin responder.",
    "The destination did not answer with valid HTTP.": "El destino no respondió con HTTP válido.",
    "The network owner or hostname matches a VPN or proxy provider.": "El propietario de la red o el nombre de host coincide con un proveedor de VPN o proxy.",
    "The only public IPs WebRTC exposed match the ones websites already see. No leak.":
      "Las únicas IP públicas que expuso WebRTC coinciden con las que ya ven los sitios web. No hay fuga.",
    "The proxy asked for an authentication method this tool does not support.": "El proxy pidió un método de autenticación que esta herramienta no admite.",
    "The proxy connected but did not answer in time.": "El proxy se conectó pero no respondió a tiempo.",
    "The proxy did not accept username and password authentication.": "El proxy no aceptó la autenticación por usuario y contraseña.",
    "The proxy may be intercepting HTTPS traffic, or it may be blocking this destination.": "Puede que el proxy esté interceptando el tráfico HTTPS o bloqueando este destino.",
    "The proxy may be overloaded or its upstream may be down.": "Puede que el proxy esté sobrecargado o que su conexión ascendente esté caída.",
    "The proxy opened a tunnel but the test request timed out.": "El proxy abrió un túnel, pero la solicitud de prueba agotó el tiempo de espera.",
    "The proxy refused the connection (HTTP 403).": "El proxy rechazó la conexión (HTTP 403).",
    "The proxy rejected the username and password (HTTP 407).": "El proxy rechazó el usuario y la contraseña (HTTP 407).",
    "The proxy rejected the username and password.": "El proxy rechazó el usuario y la contraseña.",
    "The proxy sent unexpected data after opening the tunnel.": "El proxy envió datos inesperados después de abrir el túnel.",
    "The registry did not respond. Please try again.": "El registro no respondió. Inténtalo de nuevo.",
    "The registry took too long to respond. Please try again.": "El registro tardó demasiado en responder. Inténtalo de nuevo.",
    "The resolver took too long to answer.": "El resolvedor tardó demasiado en responder.",
    "The server answered, but not like an HTTP proxy. If this is a SOCKS5 proxy, choose SOCKS5.":
      "El servidor respondió, pero no como un proxy HTTP. Si es un proxy SOCKS5, elige SOCKS5.",
    "The server closed the connection without answering. It may not be an HTTP proxy, or it may not accept connections from our servers.":
      "El servidor cerró la conexión sin responder. Puede que no sea un proxy HTTP, o que no acepte conexiones de nuestros servidores.",
    "The server did not answer like a SOCKS5 proxy. If this is an HTTP proxy, choose HTTP.":
      "El servidor no respondió como un proxy SOCKS5. Si es un proxy HTTP, elige HTTP.",
    "The server did not answer like an HTTP or SOCKS5 proxy.": "El servidor no respondió como un proxy HTTP ni SOCKS5.",
    "The server sent an oversized response header.": "El servidor envió una cabecera de respuesta demasiado grande.",
    "The target did not answer in time through this proxy.": "El destino no respondió a tiempo a través de este proxy.",
    "The test couldn't complete. Your browser or network may be blocking WebRTC probes.":
      "No se pudo completar la prueba. Puede que tu navegador o tu red estén bloqueando las sondas WebRTC.",
    "The test was interrupted. Check your connection and try again.": "La prueba se interrumpió. Revisa tu conexión e inténtalo de nuevo.",
    "The tunnel opened, but the secure (TLS) connection through it failed.": "El túnel se abrió, pero falló la conexión segura (TLS) a través de él.",
    "The username and password must each be 255 bytes or fewer.": "El usuario y la contraseña no pueden superar los 255 bytes cada uno.",
    "These are indicators, not proof. Spamhaus lists are not queried because Spamhaus blocks public DNS resolvers.":
      "Son indicadores, no pruebas. No se consultan las listas de Spamhaus porque Spamhaus bloquea los resolvedores DNS públicos.",
    "This address belongs to a server network. VPNs, proxies and bots usually appear this way, while home users rarely do.":
      "Esta dirección pertenece a una red de servidores. Las VPN, los proxies y los bots suelen aparecer así; los usuarios domésticos, rara vez.",
    "This browser doesn't support WebRTC, so it can't leak anything this way.": "Este navegador no admite WebRTC, así que no puede filtrar nada por esta vía.",
    "This domain does not exist (NXDOMAIN).": "Este dominio no existe (NXDOMAIN).",
    "This page was translated with AI and may contain mistakes. The English version is the reference.":
      "Esta página se ha traducido con ayuda de IA y puede contener errores. La versión en inglés es la de referencia.",
    "This proxy requires a username and password (HTTP 407).": "Este proxy requiere usuario y contraseña (HTTP 407).",
    "This proxy requires a username and password.": "Este proxy requiere usuario y contraseña.",
    "Time to first byte": "Tiempo hasta el primer byte",
    "Timed out connecting to the proxy.": "Se agotó el tiempo al conectar con el proxy.",
    Timezone: "Zona horaria",
    Timing: "Tiempos",
    "Too many checks in a row. Please wait a minute and try again.": "Demasiadas comprobaciones seguidas. Espera un minuto e inténtalo de nuevo.",
    "Too many requests. Please wait a minute and try again.": "Demasiadas solicitudes. Espera un minuto e inténtalo de nuevo.",
    Tools: "Herramientas",
    "Tor exit example": "Ejemplo de salida de Tor",
    "Tor exit node": "Nodo de salida de Tor",
    "Total addresses": "Total de direcciones",
    "Touch points": "Puntos táctiles",
    Type: "Tipo",
    Unknown: "Desconocido",
    "Unexpected error while talking to the proxy.": "Error inesperado al comunicarse con el proxy.",
    "Unstable: {n} of {total} requests succeeded": "Inestable: {n} de {total} solicitudes tuvieron éxito",
    Upload: "Subida",
    "Usable hosts": "Hosts utilizables",
    "Use host:port, user:password@host:port, or host:port:user:password. If the password contains a colon, use the separate password field.":
      "Usa host:port, user:password@host:port o host:port:user:password. Si la contraseña contiene dos puntos, usa el campo de contraseña aparte.",
    "User agent": "User-Agent",
    "Username (optional)": "Usuario (opcional)",
    "Username and password accepted": "Usuario y contraseña aceptados",
    Viewport: "Ventana de visualización",
    "WebRTC didn't expose any public IP address. You're not leaking through it.": "WebRTC no expuso ninguna dirección IP pública. No hay fuga por esta vía.",
    "WebRTC exposed {ips}, which is different from the IP websites see ({ip}). If you're using a VPN, this could be a leak of your real address.":
      "WebRTC expuso {ips}, distinta de la IP que ven los sitios web ({ip}). Si usas una VPN, podría tratarse de una fuga de tu dirección real.",
    "Website test": "Prueba de un sitio web",
    "Website to test through the proxy": "Sitio web que probar a través del proxy",
    "What is my IP address?": "¿Cuál es mi dirección IP?",
    "Whole request": "Solicitud completa",
    "Wildcard mask": "Máscara comodín",
    Working: "Funciona",
    "Working…": "Procesando…",
    Worst: "Peor",
    Yes: "Sí",
    "Your ping is unstable. Packet loss or jitter like this causes stutter in calls and games. Try a wired connection and restart your router.":
      "Tu ping es inestable. Una pérdida de paquetes o un jitter así provoca tirones en llamadas y juegos. Prueba con una conexión por cable y reinicia el router.",
    "added by proxy": "añadido por un proxy",
    "example.com or 8.8.8.8": "example.com o 8.8.8.8",
    "host:port or user:password@host:port": "host:port o user:password@host:port",
    "ms avg": "ms de media",
    "n/a": "n. d.",
    "proxy errors 407, 403 and 502: causes and fixes": "errores de proxy 407, 403 y 502: causas y soluciones (en inglés)",
    "{host} answered HTTP {status} in {ms} ms.": "{host} respondió HTTP {status} en {ms} ms.",
    "{host} answered HTTP {status} through this proxy in {ms} ms. That usually means the site is blocking or limiting this proxy.":
      "{host} respondió HTTP {status} a través de este proxy en {ms} ms. Normalmente significa que el sitio bloquea o limita este proxy.",
    "{host} answered HTTP {status}{redirect} in {ms} ms. The proxy can reach this site.": "{host} respondió HTTP {status}{redirect} en {ms} ms. El proxy puede acceder a este sitio.",
    "{mb} MB in {ms} ms": "{mb} MB en {ms} ms",
    "{mb} MB in {ms} ms (stopped early)": "{mb} MB en {ms} ms (detenido antes de terminar)",
    "DroneBL (botnets and open proxies)": "DroneBL (botnets y proxies abiertos)",
    "{n} GB": "{n} GB",
    Signed: "Firmado",
    Unsigned: "Sin firmar",
    "Check for typos and for any required format in the username.": "Comprueba que no haya errores de escritura y que el usuario tenga el formato exigido, si lo hay.",
    "It may block this destination, or only accept allow-listed IP addresses.": "Puede que bloquee este destino o que solo acepte direcciones IP autorizadas.",
  },

  tools: {
    ip: {
      name: "Mi IP",
      desc: "Tu dirección IP pública, ubicación e ISP",
      title: "¿Cuál es mi IP? Consulta tu dirección IP pública",
      description: "Consulta al instante tu dirección IP pública, tu ubicación, tu ISP y los detalles de tu conexión. Gratis y rápido, sin anuncios ni registro.",
      h1: "¿Cuál es mi dirección IP?",
      lead: "Tu dirección IP pública, tu ubicación aproximada y tu ISP, al instante.",
      about: "",
      faq: [],
    },
    lookup: {
      name: "Consulta de IP",
      desc: "Ubicación, ISP y ASN de cualquier IP o dominio",
      title: "Consulta de IP: ubicación, ISP y propietario de una IP",
      description: "Herramienta gratuita para consultar una IP. Introduce una IP o un dominio y ve su ubicación, ISP, ASN y nombre de host. Compatible con IPv4 e IPv6.",
      h1: "Consulta de dirección IP",
      lead: "Encuentra la ubicación, el ISP y la red de cualquier dirección IP o dominio.",
      about:
        "Una consulta de dirección IP te dice dónde parece estar un servidor o una conexión en internet y quién gestiona la red que hay detrás. Úsala para saber dónde está alojado un sitio web, investigar tráfico sospechoso en tus registros, comprobar que una VPN funciona o averiguar qué proveedor es dueño de una dirección. Los resultados incluyen ciudad, región, país, zona horaria, ISP, organización y número de sistema autónomo (ASN), además del nombre de host cuando existe un registro DNS inverso.",
      faq: [
        {
          q: "¿Cómo busco la dirección IP de un sitio web?",
          a: "Escribe el nombre de dominio, como example.com, en el cuadro de arriba y pulsa Consultar. La herramienta resuelve el nombre a su dirección IP actual y luego muestra dónde está ese servidor, quién gestiona la red y su nombre de host.",
        },
        {
          q: "¿Qué precisión tiene una consulta de dirección IP?",
          a: "El país casi siempre es correcto, la ciudad lo es la mayoría de las veces, y cualquier detalle más fino es una estimación aproximada. El ISP y el ASN proceden de registros de enrutamiento públicos y son fiables. Una consulta no puede revelar una dirección postal ni la identidad de una persona.",
        },
        {
          q: "¿Puedo consultar un nombre de dominio en lugar de una IP?",
          a: "Sí. Introduce un dominio como example.com y la herramienta lo resuelve primero a su dirección IP actual y después muestra la ubicación, la red y el nombre de host del servidor que hay detrás. Los sitios que usan una CDN mostrarán la red de la CDN y no la del servidor de origen.",
        },
      ],
    },
    dns: {
      name: "Consulta DNS",
      desc: "Registros A, AAAA, MX, TXT, NS, CNAME, SOA y CAA",
      title: "Consulta DNS: comprueba los registros de cualquier dominio",
      description: "Consulta DNS gratuita: registros A, AAAA, MX, TXT, NS, CNAME, SOA y CAA con Cloudflare o Google DNS, o consulta DNS inversa.",
      h1: "Consulta DNS",
      lead: "Consulta los registros DNS en vivo de cualquier dominio, o resuelve una dirección IP a la inversa.",
      about:
        "El Sistema de Nombres de Dominio (DNS) convierte nombres como example.com en las direcciones IP que usan los equipos. Esta herramienta consulta el DNS en vivo mediante HTTPS con Cloudflare 1.1.1.1 o Google 8.8.8.8, así que ves respuestas actuales y no una caché local antigua. Sirve para revisar la configuración del correo (MX, SPF y DKIM en registros TXT), confirmar el traslado de un sitio, depurar un CNAME o verificar que se ha publicado un registro nuevo.",
      faq: [
        {
          q: "¿Cómo hago una consulta DNS inversa?",
          a: "Introduce una dirección IP en lugar de un nombre de dominio. La herramienta construye el nombre in-addr.arpa (IPv4) o ip6.arpa (IPv6) correspondiente y devuelve el registro PTR, que es el nombre de host que el propietario ha asignado a esa dirección, si lo hay. Los servidores de correo usan el DNS inverso para comprobar a los remitentes.",
        },
        {
          q: "¿Qué tipos de registros DNS puedo consultar?",
          a: "Puedes consultar registros A y AAAA para direcciones IP, MX para servidores de correo, TXT para SPF, DKIM y cadenas de verificación, NS para servidores de nombres, CNAME para alias, SOA para los detalles de la zona y CAA para las reglas de las autoridades de certificación. Introduce una dirección IP en lugar de un dominio para hacer una consulta inversa (PTR).",
        },
        {
          q: "¿Por qué mis cambios de DNS todavía no se ven?",
          a: "Los resolvedores guardan las respuestas en caché durante el TTL del registro, así que un cambio puede tardar de minutos a horas en verse en todas partes. Alterna entre los resolvedores de Cloudflare y de Google para comparar lo que devuelve cada uno. Si no coinciden, el cambio aún se está propagando.",
        },
      ],
    },
    "reverse-dns": {
      name: "DNS inverso",
      desc: "Encuentra el nombre de host de cualquier IP",
      title: "Consulta DNS inversa: nombre de host de una IP",
      description: "Consulta DNS inversa gratuita: encuentra el registro PTR y el nombre de host de una IPv4 o IPv6, útil para revisar un servidor de correo.",
      h1: "Consulta DNS inversa",
      lead: "Encuentra el nombre de host (registro PTR) de cualquier dirección IPv4 o IPv6.",
      about:
        "Una consulta DNS inversa encuentra el nombre de host asignado a una dirección IP mediante su registro PTR. Es una forma rápida de saber quién gestiona un servidor (una empresa de alojamiento, un servidor de correo o un proveedor de internet), de confirmar que un servidor de correo está bien configurado o de entender una dirección desconocida en tus registros. Introduce una dirección IPv4 o IPv6 y la consulta devuelve el registro PTR del DNS en vivo.",
      faq: [
        {
          q: "¿Qué es una consulta DNS inversa?",
          a: "Una consulta DNS normal convierte un nombre en una dirección IP. Una consulta inversa hace lo contrario: pregunta qué nombre de host ha asignado el propietario de una dirección IP a esa dirección, guardado en un registro PTR. Muchas direcciones no tienen ninguno, sobre todo las conexiones domésticas.",
        },
        {
          q: "¿Por qué importa el DNS inverso para el correo electrónico?",
          a: "Los servidores de correo suelen comprobar que la IP del remitente tenga un registro PTR que coincida con el nombre que anuncia. La falta de un registro, o uno genérico, es una causa habitual de que correos legítimos acaben en spam, por eso los responsables de servidores de correo lo configuran con su proveedor de alojamiento.",
        },
      ],
    },
    reputation: {
      name: "Reputación de IP",
      desc: "Detección de VPN, proxy, Tor y listas de bloqueo",
      title: "Detector de VPN: reputación de IP, proxy y listas negras",
      description: "Detector de VPN gratuito: comprueba si una IP es una VPN, un proxy, un nodo Tor o un centro de datos, y si figura en listas de spam.",
      h1: "Detector de VPN y prueba de reputación de IP",
      lead: "Comprueba si una dirección IP parece una VPN, un proxy, un nodo de salida de Tor o un centro de datos, y si figura en listas de bloqueo de spam y abuso.",
      about:
        "Una comprobación de reputación de IP muestra cómo es probable que trate el resto de internet a una dirección. Combinamos varias señales: la lista oficial de nodos de salida del proyecto Tor, el tipo de red propietaria de la dirección (ISP doméstico, operador móvil, empresa de alojamiento o proveedor de VPN), pistas en el nombre DNS inverso y cinco listas de bloqueo públicas de spam y abuso. Te ayuda a saber si una VPN es detectable, por qué un sitio web te muestra captchas una y otra vez o por qué rechazan tu correo. Los resultados son indicadores, no pruebas.",
      faq: [
        {
          q: "¿Cómo sé si mi VPN funciona?",
          a: "Compara tu dirección, tu ubicación y tu red con la VPN apagada y encendida: todo debería cambiar. Después ejecuta la prueba de fugas de WebRTC y comprueba que la línea IPv6 de la página de inicio esté vacía o pertenezca a la VPN. Por último, usa este comprobador: la dirección de una VPN que funciona suele aparecer como una red de alojamiento o de VPN, no como tu proveedor de internet.",
        },
        {
          q: "¿Pueden saber si uso una VPN o un proxy?",
          a: "Solo en parte. Comprobamos si la dirección está en la lista oficial de nodos de salida de Tor, si el propietario de su red es un proveedor de VPN conocido o una empresa de alojamiento, y si su nombre de host parece de una VPN. La mayoría de las VPN funcionan en redes de centros de datos, que son fáciles de detectar. Los proxies residenciales y algunas VPN privadas parecen conexiones domésticas normales y no se pueden detectar con datos públicos.",
        },
        {
          q: "¿Qué significa que mi IP figure en una lista de bloqueo?",
          a: "Una lista de bloqueo es una lista pública de direcciones que se han visto enviando spam o tráfico abusivo. Figurar en ella puede hacer que los servidores de correo rechacen tus mensajes y que algunos sitios web te planteen verificaciones o te bloqueen. Suele pasar con direcciones compartidas, como la de un servidor VPN o una red móvil, por culpa de otros usuarios. La mayoría de las listas tienen un formulario de retirada, y las entradas caducan solas con el tiempo.",
        },
        {
          q: "¿Por qué faltan las listas de Spamhaus?",
          a: "Spamhaus rechaza las consultas que llegan a través de grandes resolvedores DNS públicos, así que una comprobación hecha de esa forma no puede dar una respuesta fiable. Solo mostramos las listas que responden correctamente, y marcamos como no disponible cualquier lista que no responda, en lugar de adivinar.",
        },
      ],
    },
    "proxy-checker": {
      name: "Comprobador de proxy",
      desc: "Prueba proxies HTTP y SOCKS5: velocidad, ubicación, rotación",
      title: "Comprobador de proxy: prueba proxies HTTP y SOCKS5 online",
      description: "Comprobador de proxy gratuito. Prueba un proxy HTTP o SOCKS5: velocidad, IP de salida, ubicación, rotación y listas de bloqueo, con usuario y contraseña.",
      h1: "Comprobador de proxy",
      lead: "Prueba cualquier proxy HTTP, HTTPS o SOCKS5. Comprueba si funciona, por dónde sale, qué tan rápido es y si su IP cambia.",
      about:
        "Un comprobador de proxy verifica si un servidor proxy funciona y cómo lo ven los sitios web con los que lo usas. Introduce un proxy HTTP, HTTPS o SOCKS5, con usuario y contraseña si los necesita, y esta herramienta se conecta a través de él, muestra la dirección IP de salida y dónde está, mide qué tan rápido responde y descarga, comprueba si la IP de salida cambia entre solicitudes y busca la dirección en listas de bloqueo de spam y en la lista de nodos de salida de Tor. También puedes probar si el proxy llega a un sitio web que te interese. Nada de lo que introduces se almacena.",
      faq: [
        {
          q: "¿Cómo compruebo si un proxy funciona?",
          a: "Introdúcelo como host:port, añade el usuario y la contraseña si los necesita y pulsa Comprobar proxy. Si la herramienta muestra una IP de salida, una ubicación y solicitudes correctas, el proxy funciona. Si falla, el mensaje explica por qué: credenciales incorrectas (HTTP 407), conexión rechazada, tiempo de espera agotado o un servidor que no es un proxy. También puedes probar desde un terminal con cURL: curl -x http://user:password@host:port https://www.cloudflare.com/cdn-cgi/trace",
        },
        {
          q: "¿Admite SOCKS5 además de proxies HTTP y HTTPS?",
          a: "Sí. Admite proxies HTTP y HTTPS que usan el método CONNECT, y SOCKS5 con o sin usuario y contraseña. Deja el tipo en detección automática y probará primero HTTP y después SOCKS5. No se admiten SOCKS4 ni los proxies que exigen un certificado de cliente.",
        },
        {
          q: "¿Funciona el comprobador con proxies de Decodo?",
          a: "Sí, siempre que el proxy use un host, un puerto y un usuario con contraseña. Decodo (antes Smartproxy) y la mayoría de los demás proveedores los muestran en su panel. Pégalos y el comprobador muestra la IP de salida, su ubicación y la velocidad. Si solo usas una lista de IP autorizadas, lee la siguiente pregunta.",
        },
        {
          q: "¿Puedo probar un proxy que usa una lista blanca de IP?",
          a: "No. La prueba se conecta desde nuestros servidores, así que una lista de autorizadas que solo contenga tu propia IP la rechazará. Usa para la prueba el punto de acceso con usuario y contraseña de tu proveedor, si ofrece uno.",
        },
        {
          q: "¿Se almacenan o se registran mis credenciales del proxy?",
          a: "No. La dirección del proxy y el usuario y la contraseña, si los hay, se envían a nuestro servidor por HTTPS, se usan para esta única comprobación y luego se descartan. No los almacenamos ni los escribimos en registros. Tu proveedor de proxy verá nuestra conexión, como cualquier otra solicitud que gestiona.",
        },
        {
          q: "¿Por qué la velocidad es distinta de la que obtengo en mi propio equipo?",
          a: "La prueba se hace desde un centro de datos de Cloudflare cercano a ti, no desde tu dispositivo, y descarga una pequeña muestra de 1 MB por una sola conexión. Úsala para comparar proxies entre sí y detectar los lentos. Para saber la velocidad real que tendrás, prueba desde el equipo que usará el proxy.",
        },
        {
          q: "¿Cómo sé si un proxy rota la IP?",
          a: "El comprobador hace tres solicitudes por conexiones distintas y muestra la IP de salida de cada una. Direcciones distintas indican un proxy con rotación. La misma dirección indica un proxy persistente o estático. Una sesión persistente en una pasarela con rotación mantiene una IP a propósito durante varios minutos, así que ese resultado es normal.",
        },
      ],
    },
    whois: {
      name: "WHOIS",
      desc: "Datos de registro de dominios e IP",
      title: "Consulta WHOIS: datos de registro de un dominio o IP",
      description: "Encuentra el registrador, las fechas de creación y caducidad y los servidores de nombres de un dominio, o el dueño de un rango de IP. WHOIS vía RDAP.",
      h1: "Consulta WHOIS",
      lead: "Registrador, fechas y servidores de nombres de un dominio, o propietario de la red de una dirección IP.",
      about:
        "Los datos WHOIS muestran quién registró un dominio, qué registrador lo gestiona, cuándo se creó y cuándo caduca, además de sus servidores de nombres y sus códigos de estado. Para las direcciones IP muestran el bloque de red, la organización propietaria y el registro regional. Es útil para comprobar si un dominio está disponible, investigar un sitio sospechoso o encontrar el contacto adecuado para denunciar un abuso.",
      faq: [
        {
          q: "¿Cuál es la diferencia entre WHOIS y RDAP?",
          a: "RDAP es el sustituto moderno del antiguo protocolo WHOIS. Devuelve datos estructurados por HTTPS y es ya el estándar oficial para registros y registradores. Esta herramienta usa RDAP, así que los resultados son coherentes, aunque los datos de contacto personales suelen estar ocultos por privacidad.",
        },
        {
          q: "¿Por qué está oculto el propietario de un dominio?",
          a: "Desde que entraron en vigor normas de protección de datos como el RGPD, la mayoría de los registradores ocultan el nombre, el correo y la dirección del titular en los registros públicos. Aun así puedes ver el registrador, las fechas de registro y caducidad, los códigos de estado y los servidores de nombres.",
        },
      ],
    },
    headers: {
      name: "Cabeceras HTTP",
      desc: "Las cabeceras que tu navegador envía a los sitios",
      title: "Visor de cabeceras HTTP: tus cabeceras de solicitud",
      description: "Mira todas las cabeceras de solicitud HTTP que envía tu navegador, como el user-agent, el idioma y la codificación, y las que añaden los proxies.",
      h1: "Visor de cabeceras HTTP",
      lead: "Estas son las cabeceras de solicitud que tu navegador envió a esta página.",
      about:
        "Cada vez que tu navegador carga una página, envía un conjunto de cabeceras HTTP que lo describen. Esta página muestra exactamente lo que llegó a nuestro servidor, que es lo que vería cualquier sitio web que visites. Las cabeceras marcadas como añadidas por un proxy proceden de la red entre tú y el servidor, como una CDN, y no de tu navegador.",
      faq: [
        {
          q: "¿Qué son las cabeceras de solicitud HTTP?",
          a: "Las cabeceras son pequeños datos que tu navegador envía con cada solicitud, como el idioma que prefieres, los tipos de contenido que acepta y el navegador que usas. Los servidores las usan para entregar la versión correcta de una página.",
        },
        {
          q: "¿Qué cabeceras pueden identificarme?",
          a: "Las cabeceras User-Agent y Accept-Language son las más reveladoras, porque junto con tu dirección IP pueden ayudar a construir una huella digital. Los navegadores con ajustes de privacidad estrictos reducen o uniformizan esos valores.",
        },
      ],
    },
    browser: {
      name: "Info del navegador",
      desc: "User-agent, pantalla, idioma y más",
      title: "¿Cuál es mi user-agent? Info del navegador y del dispositivo",
      description: "Descubre tu user-agent, navegador, sistema, tamaño de pantalla, idioma y zona horaria. Mira qué puede leer de ti cualquier sitio web.",
      h1: "¿Cuál es mi user-agent?",
      lead: "Lo que cualquier sitio web puede saber de tu navegador y tu dispositivo sin preguntarte.",
      about:
        "Tu navegador revela más de lo que la mayoría de la gente espera. Esta página lista los datos que JavaScript puede leer sin pedir ningún permiso, como tu user-agent, la plataforma, el tamaño de la pantalla y de la ventana, la densidad de píxeles, los idiomas preferidos, la zona horaria y datos del hardware. Nada de lo que aparece en esta página se envía a ningún sitio: todo se lee en local, en tu navegador.",
      faq: [
        {
          q: "¿Qué es un user-agent?",
          a: "Un user-agent es una línea de texto que tu navegador envía a cada sitio web para indicar qué navegador, versión y sistema operativo usas. Los sitios lo usan para servir la versión correcta de una página. Puedes ver el tuyo en la parte superior de esta página y copiarlo con un clic.",
        },
        {
          q: "¿Puedo cambiar mi user-agent?",
          a: "Sí. Las herramientas para desarrolladores del navegador y algunas extensiones pueden sustituirlo para hacer pruebas. Cambiarlo no oculta tu dirección IP, y los sitios a menudo pueden reconocer tu navegador real por otras señales.",
        },
        {
          q: "¿Qué pueden saber los sitios web de mi navegador?",
          a: "Sin preguntar, un sitio puede leer tu navegador y sistema operativo, el tamaño de pantalla, el idioma, la zona horaria y, a menudo, el número de hilos del procesador y la memoria. En conjunto, estos datos pueden hacer que tu navegador sea sorprendentemente único, algo que se conoce como fingerprinting (huella digital).",
        },
        {
          q: "¿Cómo reduzco lo que revela mi navegador?",
          a: "Usa un navegador con protección contra el fingerprinting, como Firefox con la protección estricta contra el rastreo, Brave o Safari. Mantenlo actualizado, evita extensiones poco comunes que hagan tu configuración más única y plantéate una VPN si además quieres ocultar tu dirección IP.",
        },
      ],
    },
    port: {
      name: "Comprobador de puertos",
      desc: "Comprueba si un puerto está abierto en tu IP",
      title: "Comprobador de puertos: puertos abiertos de tu IP",
      description: "Comprobador de puertos gratuito: mira si un puerto está abierto en tu IP pública (redirección de puertos, juegos, Plex, SSH, escritorio remoto).",
      h1: "Comprobador de puertos abiertos",
      lead: "Comprueba si un puerto TCP es accesible en tu IP pública. Útil para la redirección de puertos y los servidores de juegos.",
      about:
        "Un comprobador de puertos verifica si un puerto TCP de tu dirección IP pública acepta conexiones desde internet. Úsalo después de configurar la redirección de puertos para un servidor de juegos, Plex, una cámara de seguridad, SSH o el escritorio remoto. La prueba se hace desde la red de Cloudflare y solo contra tu propia IP, así que refleja lo que realmente ve el exterior.",
      faq: [
        {
          q: "¿Cómo compruebo si un puerto está abierto?",
          a: "Introduce el número de puerto arriba y pulsa Comprobar puerto. La prueba se conecta a tu dirección IP pública desde internet y te dice si está abierto, cerrado o sin respuesta. Para comprobarlo desde tu propio equipo, usa netstat o Test-NetConnection en Windows, o ss y nc en macOS y Linux.",
        },
        {
          q: "¿Por qué mi puerto aparece cerrado aunque mi servidor está en marcha?",
          a: "Normalmente lo bloquea una de tres cosas: el servicio no escucha en ese puerto, el cortafuegos de tu equipo lo bloquea o tu router no redirige el puerto a tu dispositivo. Comprueba también que tu proveedor no use NAT de grado operador (CGNAT), que impide por completo las conexiones entrantes.",
        },
        {
          q: "¿Es seguro abrir un puerto?",
          a: "Abrir un puerto expone a todo internet lo que escucha detrás. Redirige solo puertos de software que mantengas actualizado, usa una autenticación robusta y cierra los puertos que ya no necesites. Para acceder de forma remota a servicios privados, prefiere una VPN o un túnel.",
        },
      ],
    },
    speed: {
      name: "Test de velocidad",
      desc: "Latencia, velocidad de descarga y de subida",
      title: "Test de velocidad de internet: descarga, subida y ping",
      description: "Prueba tu velocidad de internet en unos 20 segundos: descarga, subida, latencia y jitter medidos contra el centro de datos de Cloudflare más cercano.",
      h1: "Test de velocidad de internet",
      lead: "Mide la latencia y la velocidad de descarga y de subida entre tu dispositivo y el servidor de Cloudflare más cercano.",
      about:
        "Este test de velocidad mide lo que importa en el uso diario. La latencia es el retraso de un viaje de ida y vuelta, el jitter es cuánto varía ese retraso, y la descarga y la subida son el rendimiento sostenido en megabits por segundo. Como el punto de prueba es el centro de datos de Cloudflare más cercano, el resultado refleja la calidad de tu propia conexión y no la de un servidor lejano.",
      faq: [
        {
          q: "¿Cómo funciona este test de velocidad?",
          a: "Tu navegador mide el tiempo de ida y vuelta hasta el centro de datos de Cloudflare más cercano, descarga datos por varias conexiones en paralelo durante ocho segundos y después sube datos durante seis segundos. Las velocidades se indican en megabits por segundo, la misma unidad que usa tu plan de internet.",
        },
        {
          q: "¿Por qué mi velocidad es menor que la de mi plan?",
          a: "La señal wifi, otros dispositivos de la red, un router antiguo, la congestión en horas punta y la distancia al servidor de prueba reducen los resultados. Para obtener la cifra más exacta, usa una conexión por cable y pausa otras descargas mientras dura la prueba.",
        },
      ],
    },
    ping: {
      name: "Test de ping",
      desc: "Comprueba tu latencia y tu jitter",
      title: "Test de ping: comprueba tu latencia y tu jitter online",
      description: "Test de ping online gratuito. Mide tu latencia, jitter y pérdida de paquetes hasta el servidor de Cloudflare más cercano en unos 10 segundos.",
      h1: "Test de ping",
      lead: "Mide tu latencia, jitter y pérdida de paquetes hasta el servidor de Cloudflare más cercano en unos diez segundos.",
      about:
        "El ping es el tiempo, en milisegundos, que tarda un mensaje diminuto en ir de tu dispositivo a un servidor y volver. Es la cifra que decide si un juego se siente instantáneo o con lag y si una videollamada se entrecorta. Esta prueba envía 25 comprobaciones rápidas al centro de datos de Cloudflare más cercano y muestra tu ping medio, mejor y peor, tu jitter (cuánto varía) y cualquier pérdida de paquetes. Como el servidor de prueba está cerca de ti, el resultado refleja la salud de tu propia conexión: wifi, router y proveedor.",
      faq: [
        {
          q: "¿Qué es un buen ping?",
          a: "Menos de unos 30 ms es excelente, de 30 a 60 ms es bueno para casi todo, incluidos los juegos en línea, de 60 a 100 ms basta para navegar y hacer videollamadas, y por encima de 150 ms empezarás a notar lag en juegos rápidos. Cuanto más bajo, mejor, y un ping estable importa tanto como uno bajo.",
        },
        {
          q: "¿Qué significan el jitter y la pérdida de paquetes?",
          a: "El jitter es cuánto varía tu ping de una comprobación a la siguiente. La pérdida de paquetes es el porcentaje de comprobaciones que nunca recibieron respuesta. Un jitter alto o cualquier pérdida provoca tirones en llamadas y juegos aunque el ping medio parezca correcto.",
        },
        {
          q: "¿Este test de ping mide la velocidad hasta un servidor de juego?",
          a: "No. Mide el viaje de ida y vuelta desde tu dispositivo hasta el centro de datos de Cloudflare más cercano, lo que muestra la calidad de tu propia conexión. Tu ping a un servidor de juego concreto depende además de la distancia y la ruta hasta ese servidor.",
        },
      ],
    },
    webrtc: {
      name: "Test de fugas WebRTC",
      desc: "¿Tu navegador filtra tu IP real?",
      title: "Test de fugas WebRTC: ¿tu VPN filtra tu IP?",
      description: "Comprueba si tu navegador expone tu dirección IP real a través de WebRTC, incluso con una VPN o un proxy.",
      h1: "Test de fugas WebRTC",
      lead: "Los navegadores pueden revelar tu IP real mediante WebRTC, incluso detrás de una VPN. Ejecuta la prueba para ver qué se expone.",
      about:
        "Un test de fugas WebRTC comprueba si tu navegador expone una dirección IP distinta de la que los sitios web ven normalmente. Es especialmente útil si usas una VPN o un proxy, porque una fuga significa que tu dirección IP real es visible a pesar del túnel. La prueba pide tu IP a un servidor STUN público igual que lo haría un sitio de videollamadas y compara la respuesta con tu conexión.",
      faq: [
        {
          q: "¿Qué es una fuga de WebRTC?",
          a: "WebRTC permite que los navegadores se conecten directamente para videollamadas y para compartir archivos, y para ello pide tu IP pública a un servidor STUN. Algunos navegadores devuelven así tu IP real incluso con una VPN activa, lo que expone tu ubicación verdadera.",
        },
        {
          q: "¿Cómo soluciono una fuga de WebRTC?",
          a: "Usa una VPN que bloquee las fugas de WebRTC, desactiva WebRTC en tu navegador (Firefox permite poner media.peerconnection.enabled en false) o instala una extensión fiable que restrinja WebRTC. Después ejecuta esta prueba de nuevo para confirmar que la fuga ha desaparecido.",
        },
      ],
    },
    subnet: {
      name: "Calculadora de subredes",
      desc: "Rangos CIDR, máscaras y número de hosts",
      title: "Calculadora de subredes: CIDR y máscara de subred",
      description: "Calculadora de subredes gratuita para IPv4 e IPv6: dirección de red, difusión, rango de hosts y hosts utilizables a partir de una IP y un CIDR.",
      h1: "Calculadora de subredes",
      lead: "Calcula rangos de red, máscaras y hosts utilizables de cualquier bloque CIDR IPv4 o IPv6.",
      about:
        "Una calculadora de subredes convierte un bloque CIDR en los números que necesitas para configurar una red: las direcciones de red y de difusión, el primer y el último host utilizable, las máscaras de subred y comodín y cuántos hosts caben. Admite IPv4 e IPv6 y funciona por completo en tu navegador, así que nada de lo que escribes sale de tu dispositivo.",
      faq: [
        {
          q: "¿Es una calculadora CIDR?",
          a: "Sí. Introduce cualquier dirección IPv4 o IPv6 con una longitud de prefijo, como 10.0.0.0/20, y devuelve la dirección de red, la dirección de difusión, la máscara de subred, la máscara comodín, el primer y el último host utilizable y el número de hosts. También sirve como calculadora de máscara de subred y de rango de IP.",
        },
        {
          q: "¿Cómo calculo una máscara de subred?",
          a: "Escribe la longitud del prefijo como esa cantidad de bits en 1 seguidos de bits en 0 hasta completar 32, y convierte cada grupo de 8 bits a decimal. Para /26 son 11111111.11111111.11111111.11000000, es decir, 255.255.255.192. Esta calculadora lo hace por ti y además da el rango de hosts.",
        },
        {
          q: "¿Cuántos hosts hay en una red /24?",
          a: "Una red /24 tiene 256 direcciones, de las cuales 254 se pueden usar para dispositivos. Una dirección es el identificador de la red y otra es la dirección de difusión. La máscara de subred es 255.255.255.0.",
        },
        {
          q: "¿Qué significa la notación CIDR?",
          a: "La notación CIDR escribe una red como una dirección seguida de una barra y un número, como 192.168.1.0/24. El número indica cuántos bits iniciales identifican la red, y los bits restantes identifican los hosts. Un número mayor significa una red más pequeña.",
        },
      ],
    },
  },

  home: {
    faq: [
      {
        q: "¿Cuál es mi dirección IP?",
        a: "Tu dirección IP es el número público que aparece en la parte superior de esta página. Identifica tu conexión a internet ante todos los sitios y servicios que visitas. Si usas una red doméstica o móvil, te la asignó tu proveedor de internet y la comparten todos los que usan esa conexión.",
      },
      {
        q: "¿Cómo encuentro mi dirección IP?",
        a: "Abre esta página y tu dirección IP pública aparece al instante, junto con tu ubicación aproximada y tu ISP. Para encontrar la dirección IP privada que usa tu dispositivo dentro de tu red doméstica, mira los ajustes de red o ejecuta ipconfig en Windows o ifconfig en macOS y Linux.",
      },
      {
        q: "¿Por qué la ubicación es incorrecta o está a varios kilómetros?",
        a: "La geolocalización por IP es una estimación basada en registros de proveedores y datos de enrutamiento, no en el GPS. Suele acertar el país y a menudo la ciudad, pero con frecuencia apunta al nodo más cercano de tu ISP en lugar de a tu casa. Una VPN o una red móvil pueden desplazar aún más el resultado.",
      },
      {
        q: "¿Cuál es la diferencia entre IPv4 e IPv6?",
        a: "Las direcciones IPv4 se parecen a 203.0.113.7 y solo hay unos 4300 millones. Las direcciones IPv6 se parecen a 2001:db8::1 y el formato ofrece una cantidad prácticamente ilimitada. La mayoría de las conexiones pueden usar ambas. Esta página muestra la que usó tu navegador y comprueba también la otra.",
      },
      {
        q: "¿Es seguro compartir mi dirección IP?",
        a: "Compartir tu dirección IP suele tener poco riesgo. Por sí sola revela tu ubicación aproximada y tu ISP, no tu nombre ni tu dirección postal. Sí permite que alguien envíe tráfico a tu conexión, así que evita publicarla si alojas servidores o juegas a juegos donde los jugadores se atacan entre sí, y usa una VPN si quieres ocultarla.",
      },
      {
        q: "¿ipcomet almacena mi dirección IP?",
        a: "No. Nuestro código no guarda, registra ni vende tu dirección IP, y no hay anuncios. La página lee tu IP de la solicitud, te la muestra y la olvida. Si aceptas el aviso de analítica opcional, Google Analytics cuenta las visitas con cookies y registra las páginas que ves, pero no las direcciones que consultas; si lo rechazas, no se establece nada. Consulta la página de privacidad para ver todos los detalles.",
      },
    ],
  },

  about: {
    title: "Acerca de ipcomet: cómo funcionan nuestras herramientas",
    description: "Cómo funciona cada herramienta de red de ipcomet, de dónde salen sus datos y qué precisión tiene. Gratis, sin anuncios; analítica solo si aceptas.",
    h1: "Acerca de ipcomet",
    lead: "ipcomet es un conjunto gratuito de herramientas de red y guías en lenguaje sencillo. Funciona en Cloudflare Workers, y el propio código del sitio no guarda ningún registro de quién lo usa.",
    sources: [
      ["Tu IP y tu conexión", "Se leen de la propia solicitud por la red de Cloudflare: tu dirección IP, una ubicación aproximada y el propietario de la red según los datos de geolocalización de Cloudflare, el centro de datos de Cloudflare más cercano, las versiones de HTTP y TLS y el tiempo de ida y vuelta. Tus direcciones IPv4 e IPv6 también las confirma ipify."],
      ["Consulta de IP", "Datos de ubicación y de red de ipwho.is, con ipapi.is y geojs.io como respaldo, más una consulta DNS inversa en vivo para el nombre de host. Los resultados se guardan en caché hasta un día."],
      ["Consulta DNS y DNS inverso", "DNS en vivo por HTTPS desde Cloudflare 1.1.1.1 o Google 8.8.8.8, el que elijas. ipcomet no guarda las respuestas en caché."],
      ["WHOIS", "RDAP, el sustituto moderno de WHOIS, a través de rdap.org, que reenvía cada consulta al registro que guarda los datos."],
      ["Reputación de IP", "La lista publicada de nodos de salida del proyecto Tor, el tipo de red propietaria de la dirección (ISP doméstico, operador móvil, empresa de alojamiento o proveedor de VPN), pistas en su nombre DNS inverso y cinco listas de bloqueo públicas: SpamCop, DroneBL, Passive Spam Block List, s5h.net y UCEPROTECT Level 1."],
      ["Comprobador de proxy", "Nuestro servidor se conecta al proxy que introduces desde la red de Cloudflare y abre túneles HTTPS a través de él hasta los puntos de prueba de Cloudflare (www.cloudflare.com y speed.cloudflare.com). Lee la IP de salida, los tiempos de respuesta y una descarga de 1 MB, y luego busca la IP de salida igual que la Consulta de IP y la Reputación de IP. Si añades un sitio web para probar, solicita esa única página a través de tu proxy y devuelve solo el código de estado."],
      ["Test de velocidad y ping", "La latencia se mide entre tu navegador y el centro de datos de Cloudflare más cercano. La descarga y la subida van directamente entre tu navegador y los servidores de pruebas de velocidad de Cloudflare (speed.cloudflare.com), con seis conexiones en paralelo. El primer segundo y medio se ignora y se descartan las muestras más lentas y más rápidas, así que la cifra refleja tu velocidad estable. Los resultados muestran la calidad de tu propia conexión, no la ruta hasta un servidor de juegos o de streaming concreto."],
      ["Comprobador de puertos", "Un intento de conexión TCP desde la red de Cloudflare a la dirección IP desde la que visitas el sitio. No se puede dirigir a la dirección de otra persona."],
      ["Test de fugas WebRTC", "Tu navegador pide su dirección pública a stun.cloudflare.com, como lo haría un sitio de videollamadas, y la página compara la respuesta con tu conexión."],
      ["Cabeceras HTTP", "Las cabeceras que tu navegador envió a esta página, exactamente como las recibió nuestro servidor."],
      ["Info del navegador y calculadora de subredes", "Se calculan en tu navegador. Nada de lo que ves o escribes en estas páginas se nos envía."],
    ],
    body: `<h2>Para qué sirve</h2>
<p>La mayoría de las personas llegan buscando una sola respuesta: <a href="/es/">cuál es mi dirección IP</a>. Las demás herramientas cubren las siguientes preguntas que surgen, como <a href="/es/lookup">dónde está una dirección IP</a>, <a href="/es/dns">qué dicen los registros DNS de un dominio</a>, <a href="/es/whois">quién registró un dominio</a>, <a href="/es/speed">qué tan rápida es una conexión</a> y <a href="/es/port">si un puerto está abierto</a>.</p>
<h2>De dónde salen los datos</h2>
<p>Cada resultado del sitio proviene de una de las fuentes de abajo, y las páginas lo indican cuando un resultado es solo una estimación.</p>
{{sources}}
<h2>¿Qué precisión tienen los resultados?</h2>
<p>La geolocalización por IP es aproximada. Se construye a partir de registros de red y mediciones, no del GPS, así que normalmente acierta el país, a menudo la región y solo a veces la ciudad. Suele apuntar al nodo más cercano de tu proveedor y no a tu casa, y las conexiones móviles, por satélite y con VPN pueden aparecer a cientos de kilómetros.</p>
<p>La detección de VPN, proxy y Tor es heurística. Tor se comprueba con la lista oficial de nodos de salida, pero una VPN o un proxy solo se pueden deducir por quién es el propietario de la dirección, su nombre DNS inverso y su presencia en listas de bloqueo. Los proxies residenciales parecen conexiones domésticas normales y no se pueden detectar así. Trata la <a href="/es/reputation">comprobación de reputación</a> como un indicador, no como una prueba.</p>
<h2>Las guías</h2>
<p>Las <a href="/learn" hreflang="en" lang="en">guías</a> están por ahora solo en inglés. Cada una responde a una pregunta concreta y muestra la fecha de su última actualización. Solo publicaremos traducciones después de que las revise una persona que hable el idioma.</p>
<h2>¿Cómo ponerse en contacto?</h2>
<p>Escríbenos a <a href="mailto:hello@ipcomet.com">hello@ipcomet.com</a>. Son bienvenidas las correcciones de una guía, una traducción que suene mal, una herramienta que dé un resultado extraño o cualquier duda sobre su funcionamiento. Las correcciones de las páginas traducidas resultan especialmente útiles, porque se redactaron con ayuda de IA.</p>
<h2>Privacidad</h2>
<p>No hay anuncios, y nuestro código no almacena ni registra las direcciones IP de los visitantes. Las únicas cookies vienen de Google Analytics, que es opcional y solo se carga si lo aceptas en el aviso. La <a href="/es/privacy">página de privacidad</a> explica esa elección y enumera todos los servicios de terceros con los que contacta cada herramienta.</p>`,
  },

  privacy: {
    title: "Política de privacidad",
    description: "ipcomet no almacena tu IP, no muestra anuncios y solo usa Google Analytics si lo aceptas. Esto es lo que ocurre con tus datos.",
    h1: "Privacidad",
    lead: "En resumen: te mostramos tu propia información y la olvidamos.",
    body: `<h2>Qué hacemos con tu dirección IP</h2>
<p>Tu dirección IP se lee de la solicitud entrante para poder mostrártela. Nuestro código no la escribe en una base de datos, en un registro ni en ningún almacenamiento, y nunca se vende ni se comparte con fines publicitarios.</p>
<h2>Cookies y analítica</h2>
<p>De forma predeterminada no establecemos cookies y no guardamos nada en tu navegador, salvo, cuando respondes al aviso, una nota con tu elección. Si pulsas <strong>Aceptar</strong>, cargamos Google Analytics (de Google LLC) para contar las visitas. Establece cookies, llamadas <code>_ga</code> y <code>_ga_</code> seguidas de un identificador, para distinguir unas visitas de otras, y envía a Google la página que viste, el tipo de navegador y de dispositivo, tu ubicación aproximada y cómo llegaste. Antes quitamos de la dirección de la página todo lo que sigue al signo de interrogación, así que las direcciones que consultas no se envían, y desactivamos las señales de Google y la personalización de anuncios. Google Analytics 4 no almacena direcciones IP y los datos se conservan 14 meses.</p>
<p>Si pulsas <strong>Rechazar</strong>, o tu navegador envía una señal Global Privacy Control, Google Analytics nunca se carga y no se envía nada a Google. Puedes cambiar tu elección en cualquier momento con el enlace «Opciones de analítica» al final de cada página. Nunca usamos scripts de publicidad.</p>
<h2>Alojamiento</h2>
<p>Este sitio funciona en Cloudflare Workers. Cloudflare procesa cada solicitud como nuestro proveedor de alojamiento y la gestiona según su propia política de privacidad. También usamos la limitación de velocidad de Cloudflare para frenar el abuso de las herramientas más pesadas, que utiliza la dirección de tu conexión solo para contar las solicitudes recientes.</p>
<h2>Servicios de terceros</h2>
<ul>
<li><strong>ipify.</strong> Para mostrar tus direcciones IPv4 e IPv6, tu navegador consulta api4.ipify.org y api6.ipify.org. Esos servicios ven tu dirección, como cualquier sitio web que visitas.</li>
<li><strong>ipwho.is, ipapi.is y geojs.io.</strong> Cuando consultas una dirección IP que no es la tuya, nuestro servidor envía esa dirección a ipwho.is para obtener datos de ubicación y recurre a ipapi.is y después a geojs.io si no está disponible. Los resultados se guardan en caché durante un día.</li>
<li><strong>Cloudflare DNS y Google DNS.</strong> Los nombres de dominio que consultas en las herramientas de DNS y de consulta se envían al resolvedor que elijas.</li>
<li><strong>RDAP.</strong> Los dominios y las direcciones IP que introduces en la herramienta WHOIS se envían a rdap.org, un redirector público, que reenvía la consulta al registro que guarda los datos.</li>
<li><strong>Listas de bloqueo y lista de nodos de salida de Tor.</strong> La herramienta de reputación de IP comprueba la dirección que le das (o la tuya, si lo dejas vacío) en cinco listas de bloqueo DNS públicas: SpamCop, DroneBL, Passive Spam Block List, s5h.net y UCEPROTECT. También descarga la lista pública de nodos de salida del proyecto Tor.</li>
<li><strong>STUN.</strong> La prueba de WebRTC pide a stun.cloudflare.com tu dirección pública desde tu navegador, igual que lo haría un sitio de videollamadas.</li>
<li><strong>Servidores de velocidad de Cloudflare.</strong> Las pruebas de velocidad y de ping envían y reciben sus datos directamente entre tu navegador y speed.cloudflare.com, los servidores de pruebas de velocidad de Cloudflare. Ven tu dirección IP, como cualquier sitio web que visitas, y las peticiones no llevan cookies. Si no se puede acceder a ellos, las pruebas recurren a nuestro propio servidor.</li>
<li><strong>Google Analytics (solo si aceptas).</strong> Después de pulsar Aceptar en el aviso, tu navegador carga Google Analytics desde googletagmanager.com y envía los datos de visita a google-analytics.com, como se describe arriba en Cookies y analítica. Google puede procesarlos en servidores fuera de tu país. Si lo rechazas, nada de esto ocurre.</li>
</ul>
<h2>Comprobador de proxy</h2>
<p>Cuando pruebas un proxy, la dirección que introduces y el usuario y la contraseña, si los hay, se envían por HTTPS a nuestro servidor, se usan para esa única comprobación y luego se descartan. No se almacenan ni se escriben en registros. Nuestro servidor se conecta a tu proxy desde la red de Cloudflare y hace solicitudes a través de él a los puntos de prueba de Cloudflare (www.cloudflare.com y speed.cloudflare.com) y, si introduces uno, al sitio web que elijas. Por eso tu proveedor de proxy ve esas solicitudes llegar desde Cloudflare, no desde ti. La dirección IP de salida que revela el proxy se consulta después con los mismos servicios descritos arriba.</p>
<h2>Comprobador de puertos</h2>
<p>El comprobador de puertos solo se conecta a la dirección IP desde la que visitas el sitio. No se puede dirigir a la dirección de otra persona.</p>
<h2>Cambios</h2>
<p>Si esta política cambia, la nueva versión aparecerá aquí. La versión en inglés es la de referencia.</p>`,
  },
};
