import type { LocaleData } from "./types";

/**
 * Brazilian Portuguese ("você"). Interface strings are keyed by the English text (see types.ts). Placeholders such
 * as {n} must stay exactly as written. The guides are not translated yet, so strings that point to them say "(EN)".
 */
export const pt: LocaleData = {
  ui: {
    "8.8.8.8 or example.com": "8.8.8.8 ou example.com",
    "(redirects to {url})": "(redireciona para {url})",
    "© {year} ipcomet. Served from the Cloudflare network, close to you.": "© {year} ipcomet. Servido pela rede da Cloudflare, perto de você.",
    ASN: "ASN",
    About: "Sobre",
    "About and methodology": "Sobre e metodologia",
    "Contact": "Contato",
    "About {name}": "Sobre: {name}",
    "Accepted formats: {formats}. Your proxy details are used for this one check and are never stored or logged.":
      "Formatos aceitos: {formats}. Os dados do seu proxy são usados só nesta verificação e nunca são armazenados nem registrados.",
    "Add your credentials and check again.": "Informe suas credenciais e verifique de novo.",
    "All articles →": "Todos os guias (EN) →",
    "All languages": "Todos os idiomas",
    "All records": "Todos os registros",
    "All tools": "Todas as ferramentas",
    Architecture: "Arquitetura",
    "Auto-detect": "Detecção automática",
    Average: "Média",
    Best: "Melhor",
    "Blocklist checks are not available for this address.": "A verificação de listas de bloqueio não está disponível para este endereço.",
    "Blocklist checks cover IPv4 only.": "A verificação de listas de bloqueio cobre apenas IPv4.",
    Blocklists: "Listas de bloqueio",
    Broadcast: "Endereço de broadcast",
    Browser: "Navegador",
    "Built and maintained by {name}.": "Criado e mantido por {name}.",
    "Count visits with Google Analytics? It uses cookies. Declining changes nothing else on the site.": "Contar as visitas com o Google Analytics? Ele usa cookies. Recusar não muda mais nada no site.",
    Accept: "Aceitar",
    Decline: "Recusar",
    "Analytics choices": "Escolhas de análise",
    "Analytics consent": "Consentimento de análise",
    CIDR: "CIDR",
    "CIDR block": "Bloco CIDR",
    "CPU threads": "Threads da CPU",
    Calculate: "Calcular",
    "Check IP": "Verificar IP",
    "Check my IP": "Ver meu IP",
    "Check port": "Verificar porta",
    "Check proxy": "Verificar proxy",
    "Check the host and port, and that the proxy is online and reachable from the internet.": "Confira o host e a porta, e se o proxy está online e acessível pela internet.",
    "Check the host and port, and that the proxy is online.": "Confira o host e a porta, e se o proxy está online.",
    "Check the host and port. Some providers use a different port for SOCKS5 than for HTTP, and some only accept allow-listed IP addresses.":
      "Confira o host e a porta. Alguns provedores usam uma porta diferente para SOCKS5 e para HTTP, e alguns só aceitam endereços IP autorizados.",
    "Check whether it looks like a VPN, proxy, Tor exit or data center, and whether it is on spam and abuse blocklists.":
      "Veja se parece uma VPN, um proxy, um nó de saída do Tor ou um data center, e se consta em listas de bloqueio de spam e abuso.",
    "Checked {ip} in {ms} ms.": "{ip} verificado em {ms} ms.",
    "Checking blocklists and network type…": "Verificando listas de bloqueio e tipo de rede…",
    "Checking {ip} from Cloudflare's network. You can only test your own IP, and a service must be running and allowed through your firewall and router for a port to show as open.":
      "Verificando {ip} a partir da rede da Cloudflare. Você só pode testar o seu próprio IP, e para uma porta aparecer como aberta é preciso haver um serviço em execução e liberado no seu firewall e no seu roteador.",
    "Checking…": "Verificando…",
    "Checking… {i} of {total}": "Verificando… {i} de {total}",
    City: "Cidade",
    Clean: "Limpo",
    "Color depth": "Profundidade de cor",
    "Connect to proxy": "Conexão com o proxy",
    "Connecting through your proxy. This usually takes 5 to 15 seconds…": "Conectando pelo seu proxy. Isso costuma levar de 5 a 15 segundos…",
    "Connecting…": "Conectando…",
    Connection: "Conexão",
    "Cookies enabled": "Cookies ativados",
    Coordinates: "Coordenadas",
    Copied: "Copiado",
    Copy: "Copiar",
    "Copy IP": "Copiar IP",
    "Could not check": "Não foi possível verificar",
    "Could not connect to the proxy.": "Não foi possível conectar ao proxy.",
    "Could not open a connection to the proxy.": "Não foi possível abrir uma conexão com o proxy.",
    "Could not reach the proxy.": "Não foi possível alcançar o proxy.",
    "Could not resolve that domain right now.": "Não foi possível resolver esse domínio agora.",
    "Could not resolve the proxy hostname right now. Please try again.": "Não foi possível resolver o nome do host do proxy agora. Tente novamente.",
    Country: "País",
    "Credentials sent": "Credenciais enviadas",
    "Cross-site requests are not allowed.": "Requisições entre sites não são permitidas.",
    DNSSEC: "DNSSEC",
    "DNS resolver unavailable. Please try again.": "Resolvedor DNS indisponível. Tente novamente.",
    "Dark mode": "Modo escuro",
    Details: "Detalhes",
    "Device model": "Modelo do dispositivo",
    Display: "Exibição",
    "Do Not Track": "Não rastrear (Do Not Track)",
    Domain: "Domínio",
    "Domain or IP": "Domínio ou IP",
    Done: "Concluído",
    Download: "Download",
    "Download sample": "Amostra baixada",
    "Download speed": "Velocidade de download",
    "Edge location": "Local do servidor edge",
    Encryption: "Criptografia",
    "English guide · {n} min read": "Guia em inglês · {n} min de leitura",
    "Enter a port between 1 and 65535.": "Informe uma porta entre 1 e 65535.",
    "Enter a proxy, such as host:port or user:password@host:port.": "Informe um proxy, como host:port ou user:password@host:port.",
    "Enter a valid IPv4 or IPv6 address.": "Informe um endereço IPv4 ou IPv6 válido.",
    "Enter a valid domain name or IP address.": "Informe um nome de domínio ou endereço IP válido.",
    "Enter a valid domain or IP address.": "Informe um domínio ou endereço IP válido.",
    "Enter a valid proxy hostname or IP address.": "Informe um nome de host ou endereço IP de proxy válido.",
    "Enter a website name for the target, not an IP address.": "Informe o nome de um site como destino, não um endereço IP.",
    "Enter an IP address or domain.": "Informe um endereço IP ou domínio.",
    "Enter an IP address, e.g. 8.8.8.8": "Informe um endereço IP, ex.: 8.8.8.8",
    "Enter an IP address, for example 8.8.8.8. For a domain name, use the DNS lookup instead.":
      "Informe um endereço IP, por exemplo 8.8.8.8. Para um nome de domínio, use a consulta DNS.",
    "Enter an IPv4 or IPv6 address, optionally followed by /prefix (for example 192.168.1.0/24).":
      "Informe um endereço IPv4 ou IPv6, opcionalmente seguido de /prefixo (por exemplo 192.168.1.0/24).",
    "Enter one proxy at a time, without spaces.": "Informe um proxy por vez, sem espaços.",
    Error: "Erro",
    "Everything you need to inspect, test and troubleshoot a connection, with no sign-up.": "Tudo o que você precisa para inspecionar, testar e diagnosticar uma conexão, sem cadastro.",
    "Excellent. This is great for online gaming and video calls.": "Excelente. Ótimo para jogos online e videochamadas.",
    "Exit IP": "IP de saída",
    "Exit IP and reputation": "IP de saída e reputação",
    "Exit IPs seen": "IPs de saída vistos",
    Expires: "Expira em",
    "Fair. Fine for browsing and calls, and you may notice lag in fast games.": "Razoável. Serve para navegar e fazer chamadas, mas você pode notar lag em jogos rápidos.",
    "Fast, private network tools. Find your IP address, look up DNS and WHOIS records, test your speed and more.":
      "Ferramentas de rede rápidas e privadas. Descubra seu endereço IP, consulte registros DNS e WHOIS, teste sua velocidade e muito mais.",
    "First address": "Primeiro endereço",
    "First host": "Primeiro host",
    "Free network tools": "Ferramentas de rede grátis",
    "Frequently asked questions": "Perguntas frequentes",
    "Gathering WebRTC candidates…": "Coletando candidatos WebRTC…",
    "Good. Fine for gaming, calls and everything else.": "Bom. Serve para jogos, chamadas e todo o resto.",
    "HTTP alt": "HTTP alt.",
    Handle: "Identificador (handle)",
    "Headers marked “added by proxy” come from the network in between, not from your browser. Websites can read all of the others.":
      "Os cabeçalhos marcados como “adicionado por proxy” vêm da rede intermediária, não do seu navegador. Os sites podem ler todos os outros.",
    Hide: "Ocultar",
    "High. You will notice lag. Try a wired connection, move closer to your router or restart it.":
      "Alto. Você vai notar lag. Tente uma conexão por cabo, chegue mais perto do roteador ou reinicie-o.",
    Home: "Início",
    Hostname: "Nome do host",
    "Hosting or data center network": "Rede de hospedagem ou data center",
    "If your provider uses IP allow-listing instead of a username and password, requests from our servers are not on your list, so this tool cannot test it.":
      "Se seu provedor usa uma lista de IPs autorizados em vez de usuário e senha, as requisições dos nossos servidores não estão na sua lista, então esta ferramenta não consegue testá-lo.",
    "IP address": "Endereço IP",
    "IP address or domain": "Endereço IP ou domínio",
    "IP version": "Versão do IP",
    "IP websites see": "IP que os sites veem",
    "IPv6 example": "Exemplo IPv6",
    ISP: "ISP",
    "Is your IP flagged?": "Seu IP está marcado?",
    "It may be the other protocol type, or it may be ignoring our servers.": "Pode ser o outro tipo de protocolo, ou ele pode estar ignorando nossos servidores.",
    "It may be the other protocol type, or it may not accept connections from our servers.":
      "Pode ser o outro tipo de protocolo, ou ele pode não aceitar conexões dos nossos servidores.",
    Jitter: "Jitter",
    "Known VPN or proxy network": "Rede de VPN ou proxy conhecida",
    Language: "Idioma",
    "Last address": "Último endereço",
    "Last changed": "Última alteração",
    "Last host": "Último host",
    Latency: "Latência",
    "Latency to edge": "Latência até o servidor edge",
    Learn: "Guias (EN)",
    "Learn about IP addresses": "Aprenda sobre endereços IP (guias em inglês)",
    "Leave credentials out of the target address.": "Não inclua credenciais no endereço de destino.",
    "Leave empty to check your own IP": "Deixe em branco para verificar o seu próprio IP",
    "Likely a residential or mobile ISP": "Provavelmente um ISP residencial ou móvel",
    Listed: "Listado",
    "Listed on {n} of {total} blocklists checked. This can affect email delivery and some websites.":
      "Consta em {n} das {total} listas de bloqueio verificadas. Isso pode afetar a entrega de e-mails e o acesso a alguns sites.",
    "Listed on {n} of {total}: {names}": "Consta em {n} de {total} listas: {names}",
    "Loading…": "Carregando…",
    "Local addresses": "Endereços locais",
    "Locale and system": "Idioma e sistema",
    Location: "Localização",
    "Location data is temporarily unavailable for this address. Please try again in a moment.":
      "Os dados de localização estão temporariamente indisponíveis para este endereço. Tente novamente em instantes.",
    "Location is approximate. It comes from your IP address, not GPS, and often points to your ISP's nearest hub instead of your home.":
      "A localização é aproximada. Ela vem do seu endereço IP, não do GPS, e muitas vezes aponta para o ponto mais próximo do seu ISP em vez da sua casa.",
    "Look up": "Consultar",
    "Look up hostname": "Buscar nome do host",
    "My IP": "Meu IP",
    "Looking up PTR record…": "Buscando o registro PTR…",
    "Looking up…": "Consultando…",
    Lookup: "Consultar",
    "Measured from Cloudflare's network near you{edge}, not from your device, and from one 1 MB sample, so use the numbers to compare proxies with each other. Tests run over encrypted HTTPS tunnels, so the transparent, anonymous and elite labels, which depend on HTTP headers, do not apply.":
      "Medido a partir da rede da Cloudflare perto de você{edge}, e não do seu dispositivo, com uma única amostra de 1 MB; use os números para comparar proxies entre si. Os testes passam por túneis HTTPS criptografados, então as classificações transparente, anônimo e elite, que dependem de cabeçalhos HTTP, não se aplicam.",
    "Measured from your device to the nearest Cloudflare data center{colo}. It shows the quality of your own connection, not the route to a particular game server.":
      "Medido do seu dispositivo até o data center da Cloudflare mais próximo{colo}. Mostra a qualidade da sua própria conexão, não o caminho até um servidor de jogo específico.",
    "Measuring latency…": "Medindo a latência…",
    Memory: "Memória",
    Mobile: "Celular",
    "More tools": "Mais ferramentas",
    Nameservers: "Servidores de nomes",
    Network: "Rede",
    "Network address": "Endereço de rede",
    "Network type": "Tipo de rede",
    No: "Não",
    "No PTR record found for {q}. The owner has not set a reverse name, which is common for home connections.":
      "Nenhum registro PTR encontrado para {q}. O dono não definiu um nome reverso, o que é comum em conexões residenciais.",
    "No VPN or hosting signs found. Residential proxies and some VPNs cannot be detected from public data.":
      "Nenhum sinal de VPN ou hospedagem encontrado. Proxies residenciais e algumas VPNs não podem ser detectados com dados públicos.",
    "No ads. Analytics only if you accept.": "Sem anúncios. Análises só se você aceitar.",
    "No answer": "Sem resposta",
    "No credentials needed": "Não precisa de credenciais",
    "No registration record found for that IP.": "Nenhum registro encontrado para esse IP.",
    "No registration record found. The domain may not be registered, or its registry doesn't support RDAP.":
      "Nenhum registro encontrado. O domínio pode não estar registrado, ou o registro dele não oferece suporte a RDAP.",
    "No replies. Check your connection and try again.": "Sem respostas. Verifique sua conexão e tente novamente.",
    "No {type} records.": "Nenhum registro {type}.",
    None: "Nenhum",
    "None (hidden by browser)": "Nenhum (oculto pelo navegador)",
    "None of the checks got an answer, so your connection may be offline.": "Nenhuma verificação recebeu resposta, então sua conexão pode estar offline.",
    "Not detected": "Não detectado",
    "Not enough data came back to measure speed.": "Não chegaram dados suficientes para medir a velocidade.",
    "Not found": "Não encontrada",
    "Not listed on any of the {total} blocklists that answered.": "Não consta em nenhuma das {total} listas de bloqueio que responderam.",
    "Not listed on any of {total} checked": "Não consta em nenhuma das {total} listas verificadas",
    "Not measured": "Não medido",
    "Not sure what that means? Read {link}.": "Não sabe o que isso significa? Leia {link}.",
    "Not working": "Não funciona",
    Off: "Desativado",
    On: "Ativado",
    Online: "Online",
    "Only https:// targets can be tested.": "Só é possível testar destinos https://.",
    "Only the standard HTTPS port (443) can be tested.": "Só é possível testar a porta HTTPS padrão (443).",
    "Open menu": "Abrir menu",
    "Operating system": "Sistema operacional",
    Organization: "Organização",
    "PTR query": "Consulta PTR",
    "Packet loss": "Perda de pacotes",
    "Page not found": "Página não encontrada",
    "Page not found.": "Página não encontrada.",
    Parent: "Superior",
    "Password (optional)": "Senha (opcional)",
    "Pixel ratio": "Proporção de pixels",
    "Port 25 can't be tested from Cloudflare Workers.": "A porta 25 não pode ser testada a partir do Cloudflare Workers.",
    "Port checks only work from a public IP address, so they are unavailable on a local network.":
      "A verificação de portas só funciona a partir de um endereço IP público, então não está disponível em uma rede local.",
    "Port number": "Número da porta",
    "Port {port} is closed": "A porta {port} está fechada",
    "Port {port} is open": "A porta {port} está aberta",
    "Port {port}: no response": "Porta {port}: sem resposta",
    "Port, e.g. 443": "Porta, ex.: 443",
    "Postal code": "CEP",
    "Prefix length must be between 0 and 128.": "O comprimento do prefixo deve estar entre 0 e 128.",
    "Prefix length must be between 0 and 32.": "O comprimento do prefixo deve estar entre 0 e 32.",
    "Press start to measure": "Clique em Iniciar para medir",
    Primary: "Principal",
    Privacy: "Privacidade",
    Protocol: "Protocolo",
    Proxy: "Proxy",
    "Proxy address": "Endereço do proxy",
    "Proxy handshake": "Negociação com o proxy",
    "Proxy password": "Senha do proxy",
    "Proxy type": "Tipo de proxy",
    "Proxy username": "Usuário do proxy",
    "Public IP via WebRTC": "IP público via WebRTC",
    "Querying DNS…": "Consultando o DNS…",
    Range: "Faixa",
    "Ready when you are": "Pronto quando você estiver",
    "Record type": "Tipo de registro",
    Registered: "Registrado em",
    Registrar: "Registrador",
    "Related guides": "Guias relacionados (EN)",
    "Resolved from": "Resolvido de",
    Resolver: "Resolvedor",
    "Resolver returned {rcode}.": "O resolvedor retornou {rcode}.",
    "Results for {name} via {resolver} DNS": "Resultados de {name} pelo DNS {resolver}",
    "Results reflect the path to the nearest Cloudflare data center{colo}, which is typically faster than a trip to a far-away server. The test runs for about 15 seconds and moves as much data as your connection can carry, so on a fast line it can use several hundred megabytes.":
      "Os resultados refletem o caminho até o data center da Cloudflare mais próximo{colo}, geralmente mais rápido do que ir até um servidor distante. O teste dura cerca de 15 segundos e transfere tantos dados quanto a sua conexão aguentar, então em uma linha rápida pode usar várias centenas de megabytes.",
    Rotation: "Rotação",
    "Rotating: {ips} different IPs in {n} requests": "Com rotação: {ips} IPs diferentes em {n} requisições",
    "Run again": "Executar de novo",
    "Run test": "Executar teste",
    "Run the reputation check": "Verificar a reputação",
    SOCKS5: "SOCKS5",
    "Same exit IP in all {n} requests (static or sticky)": "O mesmo IP de saída nas {n} requisições (estático ou fixo)",
    Screen: "Tela",
    Search: "Buscar",
    "Searching registry…": "Buscando no registro…",
    "Short, plain-English guides on how the internet identifies you and what you can do about it.":
      "Guias curtos e claros, em inglês, sobre como a internet identifica você e o que dá para fazer a respeito.",
    Show: "Mostrar",
    "Sign-in": "Autenticação",
    Sitemap: "Mapa do site",
    "Some requests failed: {errors}": "Algumas requisições falharam: {errors}",
    "Something accepted the connection.": "Algo aceitou a conexão.",
    "Something went wrong on our side. Please try again.": "Algo deu errado do nosso lado. Tente novamente.",
    "Start ping test": "Iniciar teste de ping",
    "Start test": "Iniciar teste",
    Status: "Status",
    "Subnet mask": "Máscara de sub-rede",
    "Success rate": "Taxa de sucesso",
    TTL: "TTL",
    "Test a website through it, e.g. https://example.com (optional)": "Testar um site por ele, ex.: https://example.com (opcional)",
    "Test again": "Testar de novo",
    "Test for WebRTC leaks": "Testar vazamentos de WebRTC",
    "Testing download…": "Testando o download…",
    "Testing upload…": "Testando o upload…",
    "That doesn't look like a valid IP address or domain.": "Isso não parece um endereço IP ou domínio válido.",
    "That IPv6 address is not valid. Use the format [address]:port.": "Esse endereço IPv6 não é válido. Use o formato [endereço]:porta.",
    "That is a private or reserved address.": "Esse é um endereço privado ou reservado.",
    "That is a private or reserved address. Only proxies reachable from the public internet can be tested.":
      "Esse é um endereço privado ou reservado. Só é possível testar proxies acessíveis pela internet.",
    "That is a private or reserved address, so it has no public location.": "Esse é um endereço privado ou reservado, então não tem localização pública.",
    "That is a private or reserved address, so it has no public reputation.": "Esse é um endereço privado ou reservado, então não tem reputação pública.",
    "That page doesn't exist. Try one of the tools below.": "Essa página não existe. Experimente uma das ferramentas abaixo.",
    "That request is too large.": "Essa requisição é grande demais.",
    "That target address is not a valid URL.": "Esse endereço de destino não é uma URL válida.",
    "That target address is too long.": "Esse endereço de destino é longo demais.",
    "The SOCKS5 proxy sent an invalid reply.": "O proxy SOCKS5 enviou uma resposta inválida.",
    "The connection closed before the full answer arrived.": "A conexão foi encerrada antes de chegar a resposta completa.",
    "The connection dropped while talking to the proxy.": "A conexão caiu durante a comunicação com o proxy.",
    "The connection timed out. A firewall is probably silently dropping traffic, or the host is unreachable.":
      "A conexão expirou. Provavelmente um firewall está descartando o tráfego em silêncio, ou o host está inacessível.",
    "The connection was refused. Nothing is listening, or a firewall rejected it.": "A conexão foi recusada. Nada está escutando, ou um firewall a rejeitou.",
    "The destination closed the connection without answering.": "O destino encerrou a conexão sem responder.",
    "The destination did not answer with valid HTTP.": "O destino não respondeu com HTTP válido.",
    "The network owner or hostname matches a VPN or proxy provider.": "O dono da rede ou o nome do host corresponde a um provedor de VPN ou proxy.",
    "The only public IPs WebRTC exposed match the ones websites already see. No leak.":
      "Os únicos IPs públicos expostos pelo WebRTC são os mesmos que os sites já veem. Sem vazamento.",
    "The proxy asked for an authentication method this tool does not support.": "O proxy pediu um método de autenticação que esta ferramenta não suporta.",
    "The proxy connected but did not answer in time.": "O proxy conectou, mas não respondeu a tempo.",
    "The proxy did not accept username and password authentication.": "O proxy não aceitou a autenticação por usuário e senha.",
    "The proxy may be intercepting HTTPS traffic, or it may be blocking this destination.": "O proxy pode estar interceptando o tráfego HTTPS ou bloqueando este destino.",
    "The proxy may be overloaded or its upstream may be down.": "O proxy pode estar sobrecarregado ou o link dele pode estar fora do ar.",
    "The proxy opened a tunnel but the test request timed out.": "O proxy abriu um túnel, mas a requisição de teste expirou.",
    "The proxy refused the connection (HTTP 403).": "O proxy recusou a conexão (HTTP 403).",
    "The proxy rejected the username and password (HTTP 407).": "O proxy rejeitou o usuário e a senha (HTTP 407).",
    "The proxy rejected the username and password.": "O proxy rejeitou o usuário e a senha.",
    "The proxy sent unexpected data after opening the tunnel.": "O proxy enviou dados inesperados depois de abrir o túnel.",
    "The registry did not respond. Please try again.": "O registro não respondeu. Tente novamente.",
    "The registry took too long to respond. Please try again.": "O registro demorou demais para responder. Tente novamente.",
    "The resolver took too long to answer.": "O resolvedor demorou demais para responder.",
    "The server answered, but not like an HTTP proxy. If this is a SOCKS5 proxy, choose SOCKS5.":
      "O servidor respondeu, mas não como um proxy HTTP. Se for um proxy SOCKS5, escolha SOCKS5.",
    "The server closed the connection without answering. It may not be an HTTP proxy, or it may not accept connections from our servers.":
      "O servidor encerrou a conexão sem responder. Pode não ser um proxy HTTP, ou pode não aceitar conexões dos nossos servidores.",
    "The server did not answer like a SOCKS5 proxy. If this is an HTTP proxy, choose HTTP.":
      "O servidor não respondeu como um proxy SOCKS5. Se for um proxy HTTP, escolha HTTP.",
    "The server did not answer like an HTTP or SOCKS5 proxy.": "O servidor não respondeu como um proxy HTTP ou SOCKS5.",
    "The server sent an oversized response header.": "O servidor enviou um cabeçalho de resposta grande demais.",
    "The target did not answer in time through this proxy.": "O destino não respondeu a tempo por este proxy.",
    "The test couldn't complete. Your browser or network may be blocking WebRTC probes.":
      "Não foi possível concluir o teste. Seu navegador ou sua rede pode estar bloqueando as sondas WebRTC.",
    "The test was interrupted. Check your connection and try again.": "O teste foi interrompido. Verifique sua conexão e tente novamente.",
    "The tunnel opened, but the secure (TLS) connection through it failed.": "O túnel abriu, mas a conexão segura (TLS) por ele falhou.",
    "The username and password must each be 255 bytes or fewer.": "O usuário e a senha não podem ultrapassar 255 bytes cada.",
    "These are indicators, not proof. Spamhaus lists are not queried because Spamhaus blocks public DNS resolvers.":
      "São indicadores, não provas. As listas da Spamhaus não são consultadas porque a Spamhaus bloqueia resolvedores DNS públicos.",
    "This address belongs to a server network. VPNs, proxies and bots usually appear this way, while home users rarely do.":
      "Este endereço pertence a uma rede de servidores. VPNs, proxies e bots costumam aparecer assim; usuários residenciais, raramente.",
    "This browser doesn't support WebRTC, so it can't leak anything this way.": "Este navegador não suporta WebRTC, então não pode vazar nada por essa via.",
    "This domain does not exist (NXDOMAIN).": "Este domínio não existe (NXDOMAIN).",
    "This page was translated with AI and may contain mistakes. The English version is the reference.":
      "Esta página foi traduzida com ajuda de IA e pode conter erros. A versão em inglês é a de referência.",
    "This proxy requires a username and password (HTTP 407).": "Este proxy exige usuário e senha (HTTP 407).",
    "This proxy requires a username and password.": "Este proxy exige usuário e senha.",
    "Time to first byte": "Tempo até o primeiro byte",
    "Timed out connecting to the proxy.": "Tempo esgotado ao conectar ao proxy.",
    Timezone: "Fuso horário",
    Timing: "Tempos",
    "Too many checks in a row. Please wait a minute and try again.": "Verificações demais seguidas. Aguarde um minuto e tente novamente.",
    "Too many requests. Please wait a minute and try again.": "Requisições demais. Aguarde um minuto e tente novamente.",
    Tools: "Ferramentas",
    "Tor exit example": "Exemplo de saída do Tor",
    "Tor exit node": "Nó de saída do Tor",
    "Total addresses": "Total de endereços",
    "Touch points": "Pontos de toque",
    Type: "Tipo",
    Unknown: "Desconhecido",
    "Unexpected error while talking to the proxy.": "Erro inesperado na comunicação com o proxy.",
    "Unstable: {n} of {total} requests succeeded": "Instável: {n} de {total} requisições tiveram sucesso",
    Upload: "Upload",
    "Usable hosts": "Hosts utilizáveis",
    "Use host:port, user:password@host:port, or host:port:user:password. If the password contains a colon, use the separate password field.":
      "Use host:port, user:password@host:port ou host:port:user:password. Se a senha tiver dois-pontos, use o campo de senha separado.",
    "User agent": "User-Agent",
    "Username (optional)": "Usuário (opcional)",
    "Username and password accepted": "Usuário e senha aceitos",
    Viewport: "Janela de visualização",
    "WebRTC didn't expose any public IP address. You're not leaking through it.": "O WebRTC não expôs nenhum endereço IP público. Não há vazamento por ele.",
    "WebRTC exposed {ips}, which is different from the IP websites see ({ip}). If you're using a VPN, this could be a leak of your real address.":
      "O WebRTC expôs {ips}, diferente do IP que os sites veem ({ip}). Se você usa uma VPN, isso pode ser um vazamento do seu endereço real.",
    "Website test": "Teste de um site",
    "Website to test through the proxy": "Site para testar pelo proxy",
    "What is my IP address?": "Qual é o meu endereço IP?",
    "Whole request": "Requisição completa",
    "Wildcard mask": "Máscara curinga",
    Working: "Funcionando",
    "Working…": "Processando…",
    Worst: "Pior",
    Yes: "Sim",
    "Your ping is unstable. Packet loss or jitter like this causes stutter in calls and games. Try a wired connection and restart your router.":
      "Seu ping está instável. Perda de pacotes ou jitter assim causam travadas em chamadas e jogos. Tente uma conexão por cabo e reinicie o roteador.",
    "added by proxy": "adicionado por proxy",
    "example.com or 8.8.8.8": "example.com ou 8.8.8.8",
    "host:port or user:password@host:port": "host:port ou user:password@host:port",
    "ms avg": "ms em média",
    "n/a": "n/d",
    "proxy errors 407, 403 and 502: causes and fixes": "erros de proxy 407, 403 e 502: causas e soluções (em inglês)",
    "{host} answered HTTP {status} in {ms} ms.": "{host} respondeu HTTP {status} em {ms} ms.",
    "{host} answered HTTP {status} through this proxy in {ms} ms. That usually means the site is blocking or limiting this proxy.":
      "{host} respondeu HTTP {status} por este proxy em {ms} ms. Isso geralmente significa que o site está bloqueando ou limitando este proxy.",
    "{host} answered HTTP {status}{redirect} in {ms} ms. The proxy can reach this site.": "{host} respondeu HTTP {status}{redirect} em {ms} ms. O proxy consegue acessar este site.",
    "{mb} MB in {ms} ms": "{mb} MB em {ms} ms",
    "{mb} MB in {ms} ms (stopped early)": "{mb} MB em {ms} ms (interrompido antes do fim)",
    "DroneBL (botnets and open proxies)": "DroneBL (botnets e proxies abertos)",
    "{n} GB": "{n} GB",
    Signed: "Assinado",
    Unsigned: "Não assinado",
    "Check for typos and for any required format in the username.": "Confira se não há erros de digitação e se o usuário segue o formato exigido, se houver.",
    "It may block this destination, or only accept allow-listed IP addresses.": "Ele pode bloquear este destino ou aceitar só endereços IP autorizados.",
  },

  tools: {
    ip: {
      name: "Meu IP",
      desc: "Seu endereço IP público, localização e ISP",
      title: "Qual é o meu IP? Veja seu endereço IP público",
      description: "Veja na hora seu endereço IP público, sua localização, seu ISP e os detalhes da conexão. Grátis e rápido, sem anúncios nem cadastro.",
      h1: "Qual é o meu endereço IP?",
      lead: "Seu endereço IP público, sua localização aproximada e seu ISP, na hora.",
      about: "",
      faq: [],
    },
    lookup: {
      name: "Consulta de IP",
      desc: "Localização, ISP e ASN de qualquer IP ou domínio",
      title: "Consulta de IP: localização, ISP e dono de qualquer IP",
      description: "Ferramenta grátis de consulta de IP. Informe um IP ou domínio e veja localização, ISP, ASN e nome do host. Compatível com IPv4 e IPv6.",
      h1: "Consulta de endereço IP",
      lead: "Descubra a localização, o ISP e a rede de qualquer endereço IP ou domínio.",
      about:
        "Uma consulta de endereço IP mostra onde um servidor ou uma conexão aparenta estar na internet e quem administra a rede por trás dele. Use para saber onde um site está hospedado, investigar tráfego suspeito nos seus logs, confirmar que uma VPN está funcionando ou descobrir qual provedor é dono de um endereço. Os resultados incluem cidade, região, país, fuso horário, ISP, organização e número de sistema autônomo (ASN), além do nome do host quando existe um registro DNS reverso.",
      faq: [
        {
          q: "Como descubro o endereço IP de um site?",
          a: "Digite o nome de domínio, como example.com, na caixa acima e clique em Consultar. A ferramenta resolve o nome para o endereço IP atual e mostra onde fica esse servidor, quem administra a rede e o nome do host.",
        },
        {
          q: "Qual é a precisão de uma consulta de endereço IP?",
          a: "O país quase sempre está certo, a cidade está certa na maioria das vezes, e qualquer detalhe mais fino é um palpite aproximado. O ISP e o ASN vêm de registros de roteamento públicos e são confiáveis. Uma consulta não revela endereço residencial nem a identidade de uma pessoa.",
        },
        {
          q: "Posso consultar um nome de domínio em vez de um IP?",
          a: "Sim. Informe um domínio como example.com e a ferramenta o resolve primeiro para o endereço IP atual, depois mostra a localização, a rede e o nome do host do servidor por trás dele. Sites que usam CDN mostrarão a rede da CDN, não a do servidor de origem.",
        },
      ],
    },
    dns: {
      name: "Consulta DNS",
      desc: "Registros A, AAAA, MX, TXT, NS, CNAME, SOA e CAA",
      title: "Consulta DNS: veja os registros de qualquer domínio",
      description: "Consulta DNS grátis: registros A, AAAA, MX, TXT, NS, CNAME, SOA e CAA com Cloudflare ou Google DNS, ou consulta DNS reversa.",
      h1: "Consulta DNS",
      lead: "Consulte os registros DNS ao vivo de qualquer domínio, ou resolva um endereço IP no sentido inverso.",
      about:
        "O Sistema de Nomes de Domínio (DNS) transforma nomes como example.com nos endereços IP que os computadores usam. Esta ferramenta consulta o DNS ao vivo por HTTPS usando Cloudflare 1.1.1.1 ou Google 8.8.8.8, então você vê respostas atuais, e não um cache local desatualizado. É útil para conferir a configuração de e-mail (MX, SPF e DKIM em registros TXT), confirmar a mudança de um site, depurar um CNAME ou verificar se um novo registro foi publicado.",
      faq: [
        {
          q: "Como faço uma consulta DNS reversa?",
          a: "Informe um endereço IP em vez de um nome de domínio. A ferramenta monta o nome in-addr.arpa (IPv4) ou ip6.arpa (IPv6) correspondente e retorna o registro PTR, que é o nome de host que o dono atribuiu àquele endereço, se houver. Servidores de e-mail usam o DNS reverso para verificar remetentes.",
        },
        {
          q: "Que tipos de registro DNS posso consultar?",
          a: "Você pode consultar registros A e AAAA para endereços IP, MX para servidores de e-mail, TXT para SPF, DKIM e textos de verificação, NS para servidores de nomes, CNAME para apelidos, SOA para detalhes da zona e CAA para regras de autoridades certificadoras. Informe um endereço IP em vez de um domínio para fazer uma consulta reversa (PTR).",
        },
        {
          q: "Por que minhas alterações de DNS ainda não aparecem?",
          a: "Os resolvedores guardam as respostas em cache pelo TTL do registro, então uma alteração pode levar de minutos a horas para aparecer em todo lugar. Alterne entre os resolvedores da Cloudflare e do Google para comparar o que cada um retorna. Se divergirem, a alteração ainda está se propagando.",
        },
      ],
    },
    "reverse-dns": {
      name: "DNS reverso",
      desc: "Descubra o nome do host de qualquer IP",
      title: "Consulta DNS reversa: nome do host de um IP",
      description: "Consulta DNS reversa grátis: descubra o registro PTR e o nome do host de um IPv4 ou IPv6, útil para conferir um servidor de e-mail.",
      h1: "Consulta DNS reversa",
      lead: "Descubra o nome do host (registro PTR) de qualquer endereço IPv4 ou IPv6.",
      about:
        "Uma consulta DNS reversa encontra o nome de host atribuído a um endereço IP por meio do registro PTR. É uma forma rápida de saber quem administra um servidor (uma empresa de hospedagem, um servidor de e-mail ou um provedor residencial), de confirmar que um servidor de e-mail está bem configurado ou de entender um endereço desconhecido nos seus logs. Informe um endereço IPv4 ou IPv6 e a consulta retorna o registro PTR do DNS ao vivo.",
      faq: [
        {
          q: "O que é uma consulta DNS reversa?",
          a: "Uma consulta DNS normal transforma um nome em endereço IP. Uma consulta reversa faz o contrário: pergunta qual nome de host o dono de um endereço IP atribuiu a ele, guardado em um registro PTR. Muitos endereços não têm nenhum, principalmente conexões residenciais.",
        },
        {
          q: "Por que o DNS reverso importa para e-mail?",
          a: "Servidores de e-mail costumam verificar se o IP do remetente tem um registro PTR que corresponde ao nome que ele anuncia. A falta de registro, ou um registro genérico, é uma causa comum de e-mails legítimos irem para o spam, por isso quem administra servidores de e-mail o configura com a empresa de hospedagem.",
        },
      ],
    },
    reputation: {
      name: "Reputação de IP",
      desc: "Detecção de VPN, proxy, Tor e listas de bloqueio",
      title: "Detector de VPN: reputação de IP, proxy e lista negra",
      description: "Detector de VPN grátis: veja se um IP é VPN, proxy, nó Tor ou data center, e se está em listas de bloqueio de spam e abuso.",
      h1: "Detector de VPN e teste de reputação de IP",
      lead: "Veja se um endereço IP parece uma VPN, um proxy, um nó de saída do Tor ou um data center, e se consta em listas de bloqueio de spam e abuso.",
      about:
        "Uma verificação de reputação de IP mostra como o resto da internet tende a tratar um endereço. Combinamos vários sinais: a lista oficial de nós de saída do projeto Tor, o tipo de rede dona do endereço (ISP residencial, operadora móvel, empresa de hospedagem ou provedor de VPN), pistas no nome DNS reverso e cinco listas de bloqueio públicas de spam e abuso. Ela ajuda a descobrir se uma VPN é detectável, por que um site fica mostrando captchas para você ou por que seus e-mails estão sendo rejeitados. Os resultados são indicadores, não provas.",
      faq: [
        {
          q: "Como sei se minha VPN está funcionando?",
          a: "Compare seu endereço, sua localização e sua rede com a VPN desligada e ligada: tudo deve mudar. Depois execute o teste de vazamento WebRTC e confira se a linha IPv6 da página inicial está vazia ou pertence à VPN. Por fim, use este verificador: o endereço de uma VPN funcionando costuma aparecer como rede de hospedagem ou de VPN, não como seu provedor de internet.",
        },
        {
          q: "Dá para saber se estou usando uma VPN ou um proxy?",
          a: "Só em parte. Verificamos se o endereço está na lista oficial de nós de saída do Tor, se o dono da rede é um provedor de VPN conhecido ou uma empresa de hospedagem, e se o nome do host parece de uma VPN. A maioria das VPNs roda em redes de data center, fáceis de identificar. Proxies residenciais e algumas VPNs privadas parecem conexões residenciais comuns e não podem ser detectados com dados públicos.",
        },
        {
          q: "O que significa meu IP estar em uma lista de bloqueio?",
          a: "Uma lista de bloqueio é uma lista pública de endereços que já foram vistos enviando spam ou tráfego abusivo. Estar nela pode fazer servidores de e-mail rejeitarem suas mensagens e alguns sites pedirem verificações ou bloquearem você. Isso costuma acontecer com endereços compartilhados, como o de um servidor de VPN ou de uma rede móvel, por causa de outros usuários. A maioria das listas tem um formulário de remoção, e as entradas expiram sozinhas depois de um tempo.",
        },
        {
          q: "Por que as listas da Spamhaus não aparecem?",
          a: "A Spamhaus recusa consultas que chegam por grandes resolvedores DNS públicos, então uma verificação feita assim não pode dar uma resposta confiável. Mostramos apenas as listas que respondem corretamente e marcamos como indisponível qualquer lista que não responda, em vez de adivinhar.",
        },
      ],
    },
    "proxy-checker": {
      name: "Verificador de proxy",
      desc: "Teste proxies HTTP e SOCKS5: velocidade, localização, rotação",
      title: "Verificador de proxy: teste proxies HTTP e SOCKS5 online",
      description: "Verificador de proxy grátis. Teste um proxy HTTP ou SOCKS5: velocidade, IP de saída, localização, rotação e listas de bloqueio, com usuário e senha.",
      h1: "Verificador de proxy",
      lead: "Teste qualquer proxy HTTP, HTTPS ou SOCKS5. Veja se funciona, por onde sai, qual a velocidade e se o IP muda.",
      about:
        "Um verificador de proxy testa se um servidor proxy funciona e como ele aparece para os sites com os quais você o usa. Informe um proxy HTTP, HTTPS ou SOCKS5, com usuário e senha se ele exigir, e esta ferramenta se conecta por ele, mostra o endereço IP de saída e onde fica, mede a rapidez de resposta e de download, verifica se o IP de saída muda entre as requisições e consulta o endereço em listas de bloqueio de spam e na lista de nós de saída do Tor. Você também pode testar se o proxy alcança um site do seu interesse. Nada do que você informa é armazenado.",
      faq: [
        {
          q: "Como verifico se um proxy está funcionando?",
          a: "Informe-o como host:port, acrescente usuário e senha se ele exigir e clique em Verificar proxy. Se a ferramenta mostrar um IP de saída, uma localização e requisições bem-sucedidas, o proxy funciona. Se falhar, a mensagem diz o motivo: credenciais incorretas (HTTP 407), conexão recusada, tempo esgotado ou um servidor que não é um proxy. Você também pode testar pelo terminal com cURL: curl -x http://user:password@host:port https://www.cloudflare.com/cdn-cgi/trace",
        },
        {
          q: "Há suporte a SOCKS5 além de proxies HTTP e HTTPS?",
          a: "Sim. A ferramenta suporta proxies HTTP e HTTPS que usam o método CONNECT, e SOCKS5 com ou sem usuário e senha. Deixe o tipo em detecção automática e ela tenta primeiro HTTP, depois SOCKS5. SOCKS4 e proxies que exigem certificado de cliente não são suportados.",
        },
        {
          q: "O verificador funciona com proxies da Decodo?",
          a: "Sim, desde que o proxy use host, porta, usuário e senha. A Decodo (antiga Smartproxy) e a maioria dos outros provedores mostram esses dados no painel. Cole-os e o verificador mostra o IP de saída, a localização e a velocidade. Se você só usa lista de IPs autorizados, leia a próxima pergunta.",
        },
        {
          q: "Posso testar um proxy que usa lista de IPs autorizados?",
          a: "Não. O teste parte dos nossos servidores, então uma lista de autorização que contém apenas o seu próprio IP vai recusá-lo. Use no teste o endpoint com usuário e senha do seu provedor, se ele oferecer um.",
        },
        {
          q: "Minhas credenciais do proxy são armazenadas ou registradas?",
          a: "Não. O endereço do proxy e o eventual usuário e senha são enviados ao nosso servidor por HTTPS, usados nesta única verificação e depois descartados. Não os armazenamos nem os gravamos em logs. Seu provedor de proxy verá a nossa conexão, como qualquer outra requisição que ele atende.",
        },
        {
          q: "Por que a velocidade é diferente da que tenho no meu computador?",
          a: "O teste parte de um data center da Cloudflare perto de você, não do seu dispositivo, e baixa uma pequena amostra de 1 MB em uma única conexão. Use para comparar proxies entre si e identificar os lentos. Para saber a velocidade real, teste a partir da máquina que vai usar o proxy.",
        },
        {
          q: "Como sei se um proxy faz rotação de IP?",
          a: "O verificador faz três requisições em conexões separadas e lista o IP de saída de cada uma. Endereços diferentes indicam um proxy com rotação. O mesmo endereço indica um proxy fixo ou estático. Uma sessão fixa em um gateway com rotação mantém um IP de propósito por vários minutos, então esse resultado é esperado.",
        },
      ],
    },
    whois: {
      name: "WHOIS",
      desc: "Dados de registro de domínio e IP",
      title: "Consulta WHOIS: registro de um domínio ou IP",
      description: "Descubra o registrador, as datas de criação e expiração e os servidores de nomes de um domínio, ou o dono de uma faixa de IP. WHOIS rápido via RDAP.",
      h1: "Consulta WHOIS",
      lead: "Registrador, datas e servidores de nomes de um domínio, ou o dono da rede de um endereço IP.",
      about:
        "Os dados WHOIS mostram quem registrou um domínio, qual registrador o administra, quando foi criado e quando expira, além dos servidores de nomes e dos códigos de status. Para endereços IP, mostram o bloco de rede, a organização dona e o registro regional. É útil para ver se um domínio está disponível, pesquisar um site suspeito ou achar o contato certo para denunciar abuso.",
      faq: [
        {
          q: "Qual é a diferença entre WHOIS e RDAP?",
          a: "O RDAP é o substituto moderno do antigo protocolo WHOIS. Ele retorna dados estruturados por HTTPS e agora é o padrão oficial para registros e registradores. Esta ferramenta usa RDAP, então os resultados são consistentes, embora os dados de contato pessoais costumem ser ocultados por privacidade.",
        },
        {
          q: "Por que o dono de um domínio fica oculto?",
          a: "Desde que regras de proteção de dados como a LGPD e o GDPR entraram em vigor, a maioria dos registradores oculta nome, e-mail e endereço do titular nos registros públicos. Você ainda pode ver o registrador, as datas de registro e expiração, os códigos de status e os servidores de nomes.",
        },
      ],
    },
    headers: {
      name: "Cabeçalhos HTTP",
      desc: "Os cabeçalhos que seu navegador envia aos sites",
      title: "Visualizador de cabeçalhos HTTP: sua requisição",
      description: "Veja todos os cabeçalhos de requisição HTTP que seu navegador envia, incluindo user-agent, idioma e codificação, e os adicionados por proxies.",
      h1: "Visualizador de cabeçalhos HTTP",
      lead: "Estes são os cabeçalhos de requisição que seu navegador enviou para esta página.",
      about:
        "Toda vez que seu navegador carrega uma página, ele envia um conjunto de cabeçalhos HTTP que o descrevem. Esta página mostra exatamente o que chegou ao nosso servidor, que é o que qualquer site que você visita veria. Os cabeçalhos marcados como adicionados por proxy vêm da rede entre você e o servidor, como uma CDN, e não do seu navegador.",
      faq: [
        {
          q: "O que são cabeçalhos de requisição HTTP?",
          a: "Cabeçalhos são pequenas informações que seu navegador envia a cada requisição, como o idioma de preferência, os tipos de conteúdo que aceita e qual navegador você usa. Os servidores os usam para entregar a versão certa de uma página.",
        },
        {
          q: "Quais cabeçalhos podem me identificar?",
          a: "Os cabeçalhos User-Agent e Accept-Language são os mais reveladores, porque, junto com o seu endereço IP, podem ajudar a montar uma impressão digital. Navegadores com configurações de privacidade fortes reduzem ou padronizam esses valores.",
        },
      ],
    },
    browser: {
      name: "Info do navegador",
      desc: "User-agent, tela, idioma e mais",
      title: "Qual é o meu user-agent? Info do navegador e dispositivo",
      description: "Descubra seu user-agent, navegador, sistema, tamanho de tela, idioma e fuso horário. Veja o que qualquer site pode ler sobre você.",
      h1: "Qual é o meu user-agent?",
      lead: "O que qualquer site pode descobrir sobre seu navegador e seu dispositivo sem perguntar.",
      about:
        "Seu navegador revela mais do que a maioria das pessoas imagina. Esta página lista os dados que o JavaScript consegue ler sem nenhum pedido de permissão, incluindo user-agent, plataforma, tamanho da tela e da janela, densidade de pixels, idiomas preferidos, fuso horário e informações de hardware. Nada do que aparece nesta página é enviado a lugar nenhum: tudo é lido localmente no seu navegador.",
      faq: [
        {
          q: "O que é um user-agent?",
          a: "Um user-agent é uma linha de texto que seu navegador envia a todo site para informar qual navegador, versão e sistema operacional você usa. Os sites o usam para entregar a versão certa de uma página. Você vê o seu no topo desta página e pode copiá-lo com um clique.",
        },
        {
          q: "Posso mudar meu user-agent?",
          a: "Sim. As ferramentas de desenvolvedor do navegador e algumas extensões podem substituí-lo para testes. Mudá-lo não esconde seu endereço IP, e os sites muitas vezes ainda conseguem reconhecer seu navegador real por outros sinais.",
        },
        {
          q: "O que os sites podem descobrir pelo meu navegador?",
          a: "Sem perguntar, um site pode ler seu navegador e sistema operacional, tamanho da tela, idioma, fuso horário e, muitas vezes, o número de threads do processador e a memória. Combinados, esses dados podem tornar seu navegador surpreendentemente único, o que se chama fingerprinting (impressão digital).",
        },
        {
          q: "Como reduzir o que meu navegador revela?",
          a: "Use um navegador com proteção contra fingerprinting, como o Firefox com proteção rigorosa contra rastreamento, o Brave ou o Safari. Mantenha-o atualizado, evite extensões incomuns que tornam sua configuração mais única e considere uma VPN se também quiser esconder seu endereço IP.",
        },
      ],
    },
    port: {
      name: "Verificador de portas",
      desc: "Veja se uma porta está aberta no seu IP",
      title: "Verificador de portas: portas abertas do seu IP",
      description: "Verificador de portas grátis: veja se uma porta está aberta no seu IP público (redirecionamento de portas, jogos, Plex, SSH, área de trabalho remota).",
      h1: "Verificador de portas abertas",
      lead: "Veja se uma porta TCP está acessível no seu IP público. Útil para redirecionamento de portas e servidores de jogos.",
      about:
        "Um verificador de portas testa se uma porta TCP do seu endereço IP público aceita conexões vindas da internet. Use depois de configurar o redirecionamento de portas para um servidor de jogos, Plex, uma câmera de segurança, SSH ou área de trabalho remota. O teste parte da rede da Cloudflare e atinge apenas o seu próprio IP, então reflete o que o mundo externo realmente enxerga.",
      faq: [
        {
          q: "Como verifico se uma porta está aberta?",
          a: "Informe o número da porta acima e clique em Verificar porta. O teste se conecta ao seu endereço IP público pela internet e informa aberta, fechada ou sem resposta. Para verificar a partir do seu próprio computador, use netstat ou Test-NetConnection no Windows, ou ss e nc no macOS e no Linux.",
        },
        {
          q: "Por que minha porta aparece como fechada se meu servidor está rodando?",
          a: "Em geral há três causas: o serviço não está escutando naquela porta, o firewall do computador a bloqueia ou o roteador não está redirecionando a porta para o seu dispositivo. Confira também se o seu provedor não usa CGNAT (NAT de nível de operadora), que impede totalmente conexões de entrada.",
        },
        {
          q: "É seguro abrir uma porta?",
          a: "Abrir uma porta expõe para toda a internet o que estiver escutando atrás dela. Redirecione apenas portas de softwares que você mantém atualizados, use autenticação forte e feche as portas de que não precisa mais. Prefira uma VPN ou um túnel para acessar serviços privados remotamente.",
        },
      ],
    },
    speed: {
      name: "Teste de velocidade",
      desc: "Latência, velocidade de download e upload",
      title: "Teste de velocidade da internet: download, upload e ping",
      description: "Teste a velocidade da sua internet em cerca de 20 segundos: download, upload, latência e jitter medidos até o data center da Cloudflare mais próximo.",
      h1: "Teste de velocidade da internet",
      lead: "Meça a latência e a velocidade de download e upload entre seu dispositivo e o servidor da Cloudflare mais próximo.",
      about:
        "Este teste de velocidade mede o que importa no dia a dia. Latência é o atraso de uma ida e volta, jitter é o quanto esse atraso varia, e download e upload são a taxa sustentada em megabits por segundo. Como o ponto de teste é o data center da Cloudflare mais próximo, o resultado reflete a qualidade da sua própria conexão, e não a de um servidor distante.",
      faq: [
        {
          q: "Como funciona este teste de velocidade?",
          a: "Seu navegador mede o tempo de ida e volta até o data center da Cloudflare mais próximo, baixa dados por várias conexões paralelas durante oito segundos e depois envia dados por seis segundos. As velocidades são mostradas em megabits por segundo, a mesma unidade do seu plano de internet.",
        },
        {
          q: "Por que minha velocidade é menor que a do meu plano?",
          a: "Sinal de Wi-Fi, outros dispositivos na rede, um roteador antigo, congestionamento em horários de pico e a distância até o servidor de teste reduzem os resultados. Para o número mais preciso, use uma conexão por cabo e pause outros downloads enquanto o teste roda.",
        },
      ],
    },
    ping: {
      name: "Teste de ping",
      desc: "Verifique sua latência e jitter",
      title: "Teste de ping: verifique sua latência e jitter online",
      description: "Teste de ping online grátis. Meça sua latência, jitter e perda de pacotes até o servidor da Cloudflare mais próximo em cerca de 10 segundos.",
      h1: "Teste de ping",
      lead: "Meça sua latência, jitter e perda de pacotes até o servidor da Cloudflare mais próximo em cerca de dez segundos.",
      about:
        "Ping é o tempo, em milissegundos, que uma mensagem minúscula leva para ir do seu dispositivo até um servidor e voltar. É o número que decide se um jogo parece instantâneo ou travado e se uma videochamada engasga. Este teste envia 25 verificações rápidas ao data center da Cloudflare mais próximo e mostra seu ping médio, melhor e pior, seu jitter (o quanto varia) e qualquer perda de pacotes. Como o servidor de teste fica perto de você, o resultado mostra a saúde da sua própria conexão: Wi-Fi, roteador e provedor.",
      faq: [
        {
          q: "O que é um bom ping?",
          a: "Abaixo de cerca de 30 ms é excelente, de 30 a 60 ms é bom para quase tudo, inclusive jogos online, de 60 a 100 ms serve para navegar e fazer videochamadas, e acima de 150 ms você começa a notar lag em jogos rápidos. Quanto menor, melhor, e um ping estável importa tanto quanto um ping baixo.",
        },
        {
          q: "O que significam jitter e perda de pacotes?",
          a: "Jitter é o quanto o seu ping varia de uma verificação para a seguinte. Perda de pacotes é a parte das verificações que nunca recebeu resposta. Jitter alto ou qualquer perda causa travadas em chamadas e jogos mesmo quando o ping médio parece bom.",
        },
        {
          q: "Este teste de ping mede a velocidade até um servidor de jogo?",
          a: "Não. Ele mede a ida e volta do seu dispositivo até o data center da Cloudflare mais próximo, o que mostra a qualidade da sua própria conexão. O seu ping até um servidor de jogo específico também depende da distância e da rota até esse servidor.",
        },
      ],
    },
    webrtc: {
      name: "Teste de vazamento WebRTC",
      desc: "Seu navegador vaza seu IP real?",
      title: "Teste de vazamento WebRTC: sua VPN vaza seu IP?",
      description: "Teste se seu navegador expõe seu endereço IP real pelo WebRTC, mesmo com VPN ou proxy ativos.",
      h1: "Teste de vazamento WebRTC",
      lead: "Os navegadores podem revelar seu IP real pelo WebRTC, mesmo atrás de uma VPN. Execute o teste para ver o que está exposto.",
      about:
        "Um teste de vazamento WebRTC verifica se seu navegador expõe um endereço IP diferente do que os sites normalmente veem. É mais útil se você usa VPN ou proxy, porque um vazamento significa que seu endereço IP real fica visível apesar do túnel. O teste pede seu IP a um servidor STUN público, como faria um site de videochamadas, e compara a resposta com a sua conexão.",
      faq: [
        {
          q: "O que é um vazamento de WebRTC?",
          a: "O WebRTC permite que navegadores se conectem diretamente para videochamadas e compartilhamento de arquivos, e para isso pede seu IP público a um servidor STUN. Alguns navegadores devolvem assim seu IP real mesmo com uma VPN ativa, o que expõe sua localização verdadeira.",
        },
        {
          q: "Como corrijo um vazamento de WebRTC?",
          a: "Use uma VPN que bloqueie vazamentos de WebRTC, desative o WebRTC no navegador (no Firefox é possível definir media.peerconnection.enabled como false) ou instale uma extensão confiável que restrinja o WebRTC. Depois execute este teste de novo para confirmar que o vazamento acabou.",
        },
      ],
    },
    subnet: {
      name: "Calculadora de sub-rede",
      desc: "Faixas CIDR, máscaras e quantidade de hosts",
      title: "Calculadora de sub-rede: CIDR e máscara de sub-rede",
      description: "Calculadora de sub-rede grátis para IPv4 e IPv6: endereço de rede, broadcast, faixa de hosts e hosts utilizáveis a partir de um IP e um CIDR.",
      h1: "Calculadora de sub-rede",
      lead: "Calcule faixas de rede, máscaras e hosts utilizáveis de qualquer bloco CIDR IPv4 ou IPv6.",
      about:
        "Uma calculadora de sub-rede transforma um bloco CIDR nos números de que você precisa para configurar uma rede: os endereços de rede e de broadcast, o primeiro e o último host utilizável, as máscaras de sub-rede e curinga e quantos hosts cabem. Ela suporta IPv4 e IPv6 e roda inteiramente no seu navegador, então nada do que você digita sai do seu dispositivo.",
      faq: [
        {
          q: "Isto é uma calculadora CIDR?",
          a: "Sim. Informe qualquer endereço IPv4 ou IPv6 com um comprimento de prefixo, como 10.0.0.0/20, e ela retorna o endereço de rede, o endereço de broadcast, a máscara de sub-rede, a máscara curinga, o primeiro e o último host utilizável e o número de hosts. Também funciona como calculadora de máscara de sub-rede e de faixa de IPs.",
        },
        {
          q: "Como calculo uma máscara de sub-rede?",
          a: "Escreva o comprimento do prefixo como essa quantidade de bits 1 seguidos de bits 0 até completar 32, e converta cada grupo de 8 bits para decimal. Para /26, fica 11111111.11111111.11111111.11000000, ou seja, 255.255.255.192. Esta calculadora faz isso por você e ainda mostra a faixa de hosts.",
        },
        {
          q: "Quantos hosts há em uma rede /24?",
          a: "Uma rede /24 tem 256 endereços, dos quais 254 podem ser usados por dispositivos. Um endereço é o identificador da rede e outro é o endereço de broadcast. A máscara de sub-rede é 255.255.255.0.",
        },
        {
          q: "O que significa a notação CIDR?",
          a: "A notação CIDR escreve uma rede como um endereço seguido de uma barra e um número, como 192.168.1.0/24. O número indica quantos bits iniciais identificam a rede, e os bits restantes identificam os hosts. Um número maior significa uma rede menor.",
        },
      ],
    },
  },

  home: {
    faq: [
      {
        q: "Qual é o meu endereço IP?",
        a: "Seu endereço IP é o número público exibido no topo desta página. Ele identifica sua conexão de internet para todos os sites e serviços que você visita. Em uma rede residencial ou móvel, ele foi atribuído pelo seu provedor de internet, e todos que usam essa conexão o compartilham.",
      },
      {
        q: "Como descubro meu endereço IP?",
        a: "Abra esta página e seu endereço IP público aparece na hora, junto com sua localização aproximada e seu ISP. Para descobrir o endereço IP privado que seu dispositivo usa dentro da rede de casa, veja as configurações de rede ou execute ipconfig no Windows ou ifconfig no macOS e no Linux.",
      },
      {
        q: "Por que a localização está errada ou a alguns quilômetros de distância?",
        a: "A geolocalização por IP é uma estimativa feita com registros de provedores e dados de roteamento, não com GPS. Geralmente acerta o país e muitas vezes a cidade, mas com frequência aponta para o ponto mais próximo do seu ISP em vez da sua casa. Uma VPN ou uma rede móvel pode deslocar ainda mais o resultado.",
      },
      {
        q: "Qual é a diferença entre IPv4 e IPv6?",
        a: "Os endereços IPv4 são parecidos com 203.0.113.7 e existem apenas cerca de 4,3 bilhões deles. Os endereços IPv6 são parecidos com 2001:db8::1 e o formato oferece uma quantidade praticamente ilimitada. A maioria das conexões pode usar os dois. Esta página mostra o que seu navegador usou e verifica o outro também.",
      },
      {
        q: "É seguro compartilhar meu endereço IP?",
        a: "Compartilhar seu endereço IP em geral traz pouco risco. Sozinho, ele revela sua localização aproximada e seu ISP, não seu nome nem seu endereço residencial. Ele permite que alguém envie tráfego para a sua conexão, então evite divulgá-lo se você hospeda servidores ou joga jogos em que jogadores atacam uns aos outros, e use uma VPN se quiser escondê-lo.",
      },
      {
        q: "O ipcomet armazena meu endereço IP?",
        a: "Não. Nosso código não salva, registra nem vende seu endereço IP, e não há anúncios. A página lê seu IP da requisição, mostra para você e esquece. Se você aceitar o aviso de análise opcional, o Google Analytics conta as visitas com cookies e registra as páginas que você vê, mas não os endereços que você consulta; se recusar, nada é definido. Veja a página de privacidade para os detalhes completos.",
      },
    ],
  },

  about: {
    title: "Sobre o ipcomet: como funcionam nossas ferramentas",
    description: "Como cada ferramenta de rede do ipcomet funciona, de onde vêm os dados e qual a precisão. Grátis, sem anúncios; análises só se você aceitar.",
    h1: "Sobre o ipcomet",
    lead: "O ipcomet é um conjunto grátis de ferramentas de rede e guias em linguagem simples. Roda no Cloudflare Workers, e o próprio código do site não guarda nenhum registro de quem o usa.",
    sources: [
      ["Seu IP e sua conexão", "Lidos da própria requisição pela rede da Cloudflare: seu endereço IP, uma localização aproximada e o dono da rede segundo os dados de geolocalização da Cloudflare, o data center da Cloudflare mais próximo, as versões de HTTP e TLS e o tempo de ida e volta. Seus endereços IPv4 e IPv6 também são confirmados pelo ipify."],
      ["Consulta de IP", "Dados de localização e de rede do ipwho.is, com ipapi.is e geojs.io como reserva, mais uma consulta DNS reversa ao vivo para o nome do host. Os resultados ficam em cache por até um dia."],
      ["Consulta DNS e DNS reverso", "DNS ao vivo por HTTPS pela Cloudflare 1.1.1.1 ou pelo Google 8.8.8.8, o que você escolher. O ipcomet não guarda as respostas em cache."],
      ["WHOIS", "RDAP, o substituto moderno do WHOIS, pelo rdap.org, que encaminha cada consulta ao registro que guarda os dados."],
      ["Reputação de IP", "A lista publicada de nós de saída do projeto Tor, o tipo de rede dona do endereço (ISP residencial, operadora móvel, empresa de hospedagem ou provedor de VPN), pistas no nome DNS reverso e cinco listas de bloqueio públicas: SpamCop, DroneBL, Passive Spam Block List, s5h.net e UCEPROTECT Level 1."],
      ["Verificador de proxy", "Nosso servidor se conecta ao proxy que você informa a partir da rede da Cloudflare e abre túneis HTTPS por ele até os pontos de teste da própria Cloudflare (www.cloudflare.com e speed.cloudflare.com). Ele lê o IP de saída, os tempos de resposta e um download de 1 MB, e depois consulta o IP de saída da mesma forma que a Consulta de IP e a Reputação de IP. Se você adicionar um site para testar, ele solicita essa única página pelo seu proxy e informa apenas o código de status."],
      ["Teste de velocidade e ping", "A latência é medida entre seu navegador e o data center da Cloudflare mais próximo. O download e o upload acontecem diretamente entre seu navegador e os servidores de teste de velocidade da Cloudflare (speed.cloudflare.com), em seis conexões paralelas. O primeiro 1,5 segundo é ignorado e as amostras mais lentas e mais rápidas são descartadas, então o número reflete a sua velocidade estável. Os resultados mostram a qualidade da sua própria conexão, não o caminho até um servidor de jogo ou de streaming específico."],
      ["Verificador de portas", "Uma tentativa de conexão TCP da rede da Cloudflare para o endereço IP a partir do qual você visita o site. Ela não pode ser apontada para o endereço de outra pessoa."],
      ["Teste de vazamento WebRTC", "Seu navegador pede seu endereço público ao stun.cloudflare.com, como faria um site de videochamadas, e a página compara a resposta com a sua conexão."],
      ["Cabeçalhos HTTP", "Os cabeçalhos que seu navegador enviou a esta página, exatamente como nosso servidor os recebeu."],
      ["Info do navegador e calculadora de sub-rede", "Calculados no seu navegador. Nada do que você vê ou digita nessas páginas é enviado para nós."],
    ],
    body: `<h2>Para que serve</h2>
<p>A maioria das pessoas chega querendo uma única resposta: <a href="/pt/">qual é o meu endereço IP</a>. As outras ferramentas cobrem as perguntas seguintes, como <a href="/pt/lookup">onde fica um endereço IP</a>, <a href="/pt/dns">o que dizem os registros DNS de um domínio</a>, <a href="/pt/whois">quem registrou um domínio</a>, <a href="/pt/speed">qual a velocidade de uma conexão</a> e <a href="/pt/port">se uma porta está aberta</a>.</p>
<h2>De onde vêm os dados</h2>
<p>Cada resultado do site vem de uma das fontes abaixo, e as páginas informam quando um resultado é apenas uma estimativa.</p>
{{sources}}
<h2>Qual a precisão dos resultados?</h2>
<p>A geolocalização por IP é aproximada. Ela é construída a partir de registros de rede e medições, não do GPS, então geralmente acerta o país, muitas vezes a região e só às vezes a cidade. Com frequência aponta para o ponto mais próximo do seu provedor em vez da sua casa, e conexões móveis, por satélite e por VPN podem aparecer a centenas de quilômetros.</p>
<p>A detecção de VPN, proxy e Tor é heurística. O Tor é verificado pela lista oficial de nós de saída, mas uma VPN ou um proxy só podem ser deduzidos a partir de quem é o dono do endereço, do nome DNS reverso e da presença em listas de bloqueio. Proxies residenciais parecem conexões residenciais comuns e não podem ser detectados assim. Trate a <a href="/pt/reputation">verificação de reputação</a> como um indicador, não como prova.</p>
<h2>Os guias</h2>
<p>Os <a href="/learn" hreflang="en" lang="en">guias</a> estão, por enquanto, apenas em inglês. Cada um responde a uma pergunta específica e mostra a data da última atualização. Só publicaremos traduções depois que uma pessoa que fale o idioma as revisar.</p>
<h2>Como entrar em contato?</h2>
<p>Escreva para <a href="mailto:hello@ipcomet.com">hello@ipcomet.com</a>. São bem-vindas correções em um guia, uma tradução que soe errada, uma ferramenta com resultado estranho ou dúvidas sobre o funcionamento. Correções nas páginas traduzidas são especialmente úteis, porque foram redigidas com ajuda de IA.</p>
<h2>Privacidade</h2>
<p>Não há anúncios, e nosso código não armazena nem registra os endereços IP dos visitantes. Os únicos cookies vêm do Google Analytics, que é opcional e só carrega se você aceitar no aviso. A <a href="/pt/privacy">página de privacidade</a> explica essa escolha e lista todos os serviços de terceiros que cada ferramenta contata.</p>`,
  },

  privacy: {
    title: "Política de privacidade",
    description: "O ipcomet não armazena seu IP, não exibe anúncios e só usa o Google Analytics se você aceitar. Veja o que acontece com seus dados.",
    h1: "Privacidade",
    lead: "Resumindo: mostramos a você as suas próprias informações e as esquecemos.",
    body: `<h2>O que fazemos com seu endereço IP</h2>
<p>Seu endereço IP é lido da requisição recebida para poder ser mostrado a você. Nosso código não o grava em banco de dados, em log nem em nenhum armazenamento, e ele nunca é vendido nem compartilhado para publicidade.</p>
<h2>Cookies e análises</h2>
<p>Por padrão, não definimos cookies e não guardamos nada no seu navegador, exceto, depois que você responde ao aviso, uma nota com a sua escolha. Se você clicar em <strong>Aceitar</strong>, carregamos o Google Analytics (da Google LLC) para contar as visitas. Ele define cookies, chamados <code>_ga</code> e <code>_ga_</code> seguidos de um identificador, para distinguir uma visita da outra, e envia ao Google a página que você viu, o tipo de navegador e de dispositivo, sua localização aproximada e como você chegou. Antes, cortamos do endereço da página tudo o que vem depois do ponto de interrogação, então os endereços que você consulta não são enviados, e desativamos os sinais do Google e a personalização de anúncios. O Google Analytics 4 não armazena endereços IP, e os dados são mantidos por 14 meses.</p>
<p>Se você clicar em <strong>Recusar</strong>, ou se o seu navegador enviar um sinal Global Privacy Control, o Google Analytics nunca é carregado e nada é enviado ao Google. Você pode mudar a escolha a qualquer momento no link “Escolhas de análise”, no fim de cada página. Nunca usamos scripts de publicidade.</p>
<h2>Hospedagem</h2>
<p>Este site roda no Cloudflare Workers. A Cloudflare processa cada requisição como nossa provedora de hospedagem e a trata conforme a própria política de privacidade. Também usamos o limite de requisições da Cloudflare para impedir abusos das ferramentas mais pesadas, que usa o endereço da sua conexão apenas para contar as requisições recentes.</p>
<h2>Serviços de terceiros</h2>
<ul>
<li><strong>ipify.</strong> Para mostrar seus endereços IPv4 e IPv6, seu navegador consulta api4.ipify.org e api6.ipify.org. Esses serviços veem seu endereço, como qualquer site que você visita.</li>
<li><strong>ipwho.is, ipapi.is e geojs.io.</strong> Quando você consulta um endereço IP que não é o seu, nosso servidor envia esse endereço ao ipwho.is para obter dados de localização e recorre ao ipapi.is e depois ao geojs.io se ele estiver indisponível. Os resultados ficam em cache por um dia.</li>
<li><strong>Cloudflare DNS e Google DNS.</strong> Os nomes de domínio que você consulta nas ferramentas de DNS e de consulta são enviados ao resolvedor que você escolher.</li>
<li><strong>RDAP.</strong> Os domínios e endereços IP que você informa na ferramenta WHOIS são enviados ao rdap.org, um redirecionador público, que encaminha a consulta ao registro que guarda os dados.</li>
<li><strong>Listas de bloqueio e lista de nós de saída do Tor.</strong> A ferramenta de reputação de IP verifica o endereço que você informa (ou o seu, se deixar em branco) em cinco listas de bloqueio DNS públicas: SpamCop, DroneBL, Passive Spam Block List, s5h.net e UCEPROTECT. Ela também baixa a lista pública de nós de saída do projeto Tor.</li>
<li><strong>STUN.</strong> O teste de WebRTC pede ao stun.cloudflare.com seu endereço público a partir do seu navegador, como faria um site de videochamadas.</li>
<li><strong>Servidores de velocidade da Cloudflare.</strong> Os testes de velocidade e de ping enviam e recebem seus dados diretamente entre seu navegador e speed.cloudflare.com, os servidores de teste de velocidade da Cloudflare. Eles veem seu endereço IP, como qualquer site que você visita, e as requisições não levam cookies. Se não for possível acessá-los, os testes recorrem ao nosso próprio servidor.</li>
<li><strong>Google Analytics (só se você aceitar).</strong> Depois que você clica em Aceitar no aviso, seu navegador carrega o Google Analytics de googletagmanager.com e envia os dados de visita para google-analytics.com, como descrito acima em Cookies e análises. O Google pode processá-los em servidores fora do seu país. Se você recusar, nada disso acontece.</li>
</ul>
<h2>Verificador de proxy</h2>
<p>Quando você testa um proxy, o endereço que informa e o eventual usuário e senha são enviados por HTTPS ao nosso servidor, usados nessa única verificação e depois descartados. Não são armazenados nem gravados em logs. Nosso servidor se conecta ao seu proxy a partir da rede da Cloudflare e faz requisições por ele aos pontos de teste da Cloudflare (www.cloudflare.com e speed.cloudflare.com) e, se você informar um, ao site que escolheu. Por isso seu provedor de proxy vê essas requisições vindas da Cloudflare, não de você. O endereço IP de saída revelado pelo proxy é então consultado com os mesmos serviços descritos acima.</p>
<h2>Verificador de portas</h2>
<p>O verificador de portas só se conecta ao endereço IP a partir do qual você visita o site. Ele não pode ser apontado para o endereço de outra pessoa.</p>
<h2>Alterações</h2>
<p>Se esta política mudar, a nova versão aparecerá aqui. A versão em inglês é a de referência.</p>`,
  },
};
