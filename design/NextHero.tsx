import React, { useEffect, useRef } from 'react';
import { HOME_COPY } from '../constants';

export default function NextHero() {
  const ref = useRef<HTMLElement>(null);

  // The title stays pinned while the first panel rises over it. Once the panel
  // is well past the top, hide the title: a phone that paints the panel late
  // during a fast scroll would otherwise flash it through.
  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    let frame = 0, last = '';
    const update = () => {
      frame = 0;
      const first = hero.nextElementSibling;
      const next = first && first.getBoundingClientRect().top < -200 ? 'true' : 'false';
      if (next !== last) { hero.dataset.covered = next; last = next; }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" ref={ref} className="next-hero">
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
