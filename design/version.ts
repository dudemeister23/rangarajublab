export type DesignVersion = 'classic' | 'next';

// Change only at final migration. Plain URLs never inherit a preview preference.
export const DEFAULT_DESIGN: DesignVersion = 'classic';

export function resolveDesign(search: string): DesignVersion {
  const requested = new URLSearchParams(search).get('design');
  return requested === 'next' || requested === 'classic' ? requested : DEFAULT_DESIGN;
}

export function designHref(href: string, design: DesignVersion): string {
  const url = new URL(href);
  url.searchParams.set('design', design);
  return `${url.pathname}${url.search}${url.hash}`;
}
