import React from 'react';
import { HOME_COPY } from '../constants';

export default function NextHero() {
  return (
    <section id="home" className="next-hero">
      <div className="next-hero-copy">
        <p className="next-eyebrow">The Rangaraju Lab / Neuroenergetics</p>
        <h1 className="drop-shadow-md"><span>{HOME_COPY.lead}</span>{' '}<strong className="next-hero-subject">{HOME_COPY.subject}</strong><br />{' '}<em>{HOME_COPY.discipline}</em></h1>
        <p className="next-intro drop-shadow">{HOME_COPY.description}</p>
        <div className="next-actions">
          {HOME_COPY.actions.map(action => <a key={action.href} href={action.href}>{action.label}<span aria-hidden="true"> ↗</span></a>)}
        </div>
      </div>
    </section>
  );
}
