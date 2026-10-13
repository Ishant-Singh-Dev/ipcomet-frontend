/**
 * Heuristic network classification from public data (ASN organization name and reverse DNS).
 * These are indicators, not proof: residential proxies and some VPNs cannot be detected this way.
 */
export type NetworkKind = "vpn" | "hosting" | "isp";

export interface NetworkClass {
  kind: NetworkKind;
  label: string;
  detail: string;
}

const VPN_PROVIDERS =
  /nordvpn|nord security|tefincom|expressvpn|express vpn|mullvad|proton ?(vpn|ag)|surfshark|cyberghost|private ?internet ?access|ipvanish|windscribe|tunnelbear|hide\.me|hidemyass|purevpn|vyprvpn|ivacy|torguard|airvpn|ovpn|perfect privacy|astrill|hotspot shield|pango|kape|zenmate|vpn/i;

const HOSTING =
  /\b(hosting|datacenter|data center|colocation|cloud|servers?|vps|dedicated|hoster)\b|amazon|aws\b|google (llc|cloud)|microsoft corporation|azure|digitalocean|linode|akamai connected|vultr|choopa|\bovh|hetzner|leaseweb|contabo|scaleway|oracle|alibaba|tencent|m247|datacamp|cdn77|quadranet|psychz|serverius|worldstream|netcup|ionos|rackspace|softlayer|ibm cloud|zenlayer|frantech|colocrossing|hostinger|namecheap|godaddy|cloudflare|fastly|packet host|equinix|upcloud|kamatera|interserver|clouvider|gthost|ztomy|cogent|hostwinds|dreamhost|bluehost/i;

const HOSTNAME_HINT = /(^|[.-])(vpn|proxy|tor-?exit|exit-?node|relay|vps|server|static\.[a-z0-9-]*(hetzner|ovh|your-server))([.-]|\d|$)/i;

export function classifyNetwork(org?: string, hostname?: string): NetworkClass {
  const name = org ?? "";
  if (VPN_PROVIDERS.test(name) || (hostname && /vpn|proxy/i.test(hostname) && HOSTNAME_HINT.test(hostname))) {
    return { kind: "vpn", label: "Known VPN or proxy network", detail: "The network owner or hostname matches a VPN or proxy provider." };
  }
  if (HOSTING.test(name) || (hostname && HOSTNAME_HINT.test(hostname))) {
    return {
      kind: "hosting",
      label: "Hosting or data center network",
      detail: "This address belongs to a server network. VPNs, proxies and bots usually appear this way, while home users rarely do.",
    };
  }
  return {
    kind: "isp",
    label: "Likely a residential or mobile ISP",
    detail: "No VPN or hosting signs found. Residential proxies and some VPNs cannot be detected from public data.",
  };
}
