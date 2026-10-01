/// <reference types="vite/client" />
export type DesignVersion = 'classic' | 'next';
export type Theme = 'light' | 'dark';

// The public site has one design. Classic stays in the repository as a
// historical reference: set this to 'classic' and deploy to revert.
export const DEFAULT_DESIGN: DesignVersion = 'next';
export const THEMES: Theme[] = ['light', 'dark'];

// Only local development honors ?design=classic, so visitors get no choice.
export function resolveDesign(search: string): DesignVersion {
  const requested = new URLSearchParams(search).get('design');
  return import.meta.env.DEV && (requested === 'next' || requested === 'classic') ? requested : DEFAULT_DESIGN;
}

// Light is the default; index.html resolves the same value before first paint.
export function resolveTheme(search: string): Theme {
  const requested = new URLSearchParams(search).get('theme');
  return THEMES.includes(requested as Theme) ? requested as Theme : 'light';
}
