import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { hi } from "./hi";
import { pt } from "./pt";
import type { Locale, LocaleData, LocaleMeta } from "./types";

export type { Faq, Locale, LocaleData, LocaleMeta, ToolStrings } from "./types";

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { code: "en", prefix: "", htmlLang: "en", hreflang: "en", ogLocale: "en_US", native: "English" },
  fr: { code: "fr", prefix: "/fr", htmlLang: "fr", hreflang: "fr", ogLocale: "fr_FR", native: "Français" },
  es: { code: "es", prefix: "/es", htmlLang: "es", hreflang: "es", ogLocale: "es_ES", native: "Español" },
  pt: { code: "pt", prefix: "/pt", htmlLang: "pt-BR", hreflang: "pt-BR", ogLocale: "pt_BR", native: "Português (Brasil)" },
  de: { code: "de", prefix: "/de", htmlLang: "de", hreflang: "de", ogLocale: "de_DE", native: "Deutsch" },
  hi: { code: "hi", prefix: "/hi", htmlLang: "hi", hreflang: "hi", ogLocale: "hi_IN", native: "हिन्दी" },
};

/**
 * Translations that exist. A language only appears on the site (pages, switcher, hreflang, sitemap)
 * once it is registered here, so a half-finished language can never leak out.
 */
export const LOCALE_DATA: Partial<Record<Locale, LocaleData>> = { fr, es, pt, de, hi };

/** English first, then every registered language. */
export const activeLocales = (): Locale[] => ["en", ...(Object.keys(LOCALE_DATA) as Locale[])];

export const NON_ENGLISH_PREFIXES = (Object.keys(LOCALE_META) as Locale[]).filter((l) => l !== "en");

/** "/fr/lookup" -> { locale: "fr", path: "/lookup" }. Unprefixed paths are English. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  for (const l of NON_ENGLISH_PREFIXES) {
    const prefix = LOCALE_META[l].prefix;
    if ((pathname === prefix || pathname.startsWith(prefix + "/")) && LOCALE_DATA[l]) {
      return { locale: l, path: pathname.slice(prefix.length) || "/" };
    }
  }
  return { locale: "en", path: pathname };
}

/** The public URL path of an English path in a given language. The home page of a language ends in a slash. */
export const localizedPath = (locale: Locale, path: string): string =>
  locale === "en" ? path : LOCALE_META[locale].prefix + (path === "/" ? "/" : path);

/**
 * Looks up an interface string. English text is the key, so call sites stay readable and a missing
 * translation simply shows the English original. {name} placeholders are filled in from `vars`.
 */
export function t(locale: Locale, text: string, vars?: Record<string, string | number>): string {
  const translated = locale === "en" ? text : (LOCALE_DATA[locale]?.ui[text] ?? text);
  return vars ? translated.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? "")) : translated;
}
