import React from 'react';
import { designHref, DesignVersion } from './version';

export default function PreviewSwitch({ version }: { version: DesignVersion }) {
  const explicit = new URLSearchParams(window.location.search).get('design');
  if (explicit !== 'next' && explicit !== 'classic') return null;
  return (
    <aside className="design-switch" aria-label="Website design preview">
      <span>Design preview</span>
      <a href={designHref(window.location.href, 'classic')} onClick={event => { event.currentTarget.href = designHref(window.location.href, 'classic'); }} aria-current={version === 'classic' ? 'page' : undefined}>Current</a>
      <a href={designHref(window.location.href, 'next')} onClick={event => { event.currentTarget.href = designHref(window.location.href, 'next'); }} aria-current={version === 'next' ? 'page' : undefined}>New</a>
    </aside>
  );
}
