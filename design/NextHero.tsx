import React, { useState } from 'react';
import { HERO_BACKGROUND, HOME_COPY } from '../constants';

export default function NextHero() {
  const [position, setPosition] = useState(50);
  return (
    <section id="home" className="next-hero">
      <img className="next-hero-image" src={HERO_BACKGROUND} alt="Neural network" style={{ transform: `translateX(-${position / 6}%)` }} />
      <div className="next-hero-shade" />
      <div className="next-hero-copy">
        <p className="next-eyebrow">The Rangaraju Lab / Neuroenergetics</p>
        <h1><span>{HOME_COPY.lead}</span>{' '}{HOME_COPY.subject}<br />{' '}<em>{HOME_COPY.discipline}</em></h1>
        <p className="next-intro">{HOME_COPY.description}</p>
        <div className="next-actions">
          {HOME_COPY.actions.map(action => <a key={action.href} href={action.href}>{action.label}<span aria-hidden="true"> ↗</span></a>)}
        </div>
      </div>
      <label className="next-image-control">Explore the image
        <input aria-label="Pan neural network image" type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} />
      </label>
    </section>
  );
}
