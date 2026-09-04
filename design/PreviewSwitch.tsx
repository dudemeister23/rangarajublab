import React from 'react';
import { designHref, DesignVersion } from './version';

export default function PreviewSwitch({ version }: { version: DesignVersion }) {
  return (
    <aside className="design-switch" aria-label="Website design preview">
      <span>Design preview</span>
      <a href={designHref(window.location.href, 'classic')} onClick={event => { event.currentTarget.href = designHref(window.location.href, 'classic'); }} aria-current={version === 'classic' ? 'page' : undefined}>Current</a>
      <a href={designHref(window.location.href, 'next')} onClick={event => { event.currentTarget.href = designHref(window.location.href, 'next'); }} aria-current={version === 'next' ? 'page' : undefined}>New</a>
    </aside>
  );
}
