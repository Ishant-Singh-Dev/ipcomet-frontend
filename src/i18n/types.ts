export type Locale = "en" | "fr" | "es" | "pt" | "de" | "hi";

export interface Faq {
  q: string;
  a: string;
}

export interface LocaleMeta {
  code: Locale;
  /** URL path prefix. English lives at the root, so its prefix is empty. */
  prefix: string;
  /** Value for <html lang>. */
  htmlLang: string;
  /** Value for hreflang annotations (ISO 639-1, with a region only where it matters). */
  hreflang: string;
  ogLocale: string;
  /** The language's own name, shown in the language switcher. */
  native: string;
}

/** Everything a tool page needs that differs by language. */
export interface ToolStrings {
  name: string;
  desc: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  about: string;
  faq: Faq[];
}

/** A translated standalone page (About, Privacy). `body` is trusted HTML for the .prose block. */
export interface DocPage {
  title: string;
  description: string;
  h1: string;
  lead: string;
  body: string;
}

export interface LocaleData {
  /**
   * Interface strings, keyed by the English text itself. Anything missing falls back to English,
   * so a gap shows up as English text instead of breaking the page.
   * Placeholders look like {n} and are filled in by t().
   */
  ui: Record<string, string>;
  /** One entry per tool id (see src/tools.ts). */
  tools: Record<string, ToolStrings>;
  /** The home page's title, description and intro come from the `ip` tool entry; only its FAQ lives here. */
  home: { faq: Faq[] };
  /** `body` contains the placeholder {{sources}}, replaced by a table built from `sources`. */
  about: DocPage & { sources: Array<[string, string]> };
  privacy: DocPage;
}
