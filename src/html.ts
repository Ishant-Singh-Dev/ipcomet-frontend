const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escapes text for use in HTML. Lives apart from the Worker helpers so the UI layer never depends on them. */
export const esc = (value: unknown): string =>
  String(value ?? "").replace(/[&<>"']/g, (c) => ESCAPES[c] ?? c);
