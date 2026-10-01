import React, { useEffect, useRef } from 'react';
import './hero-backdrop.css';

// The original hero micrograph as a fixed backdrop behind the whole page, in
// the Light theme only. It
// never moves: the title scrolls away with the hero as usual, the reading
// surface slides over the image, and Contact lifts off the footer to show it
// again. It is switched off while the content fully covers the viewport, so a
// slow repaint during a fast scroll shows the page color, not the bright image.
export default function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer) return;
    let frame = 0, last = '';
    const update = () => {
      frame = 0;
      const first = document.getElementById('home')?.nextElementSibling;
      const contact = document.getElementById('contact');
      const firstTop = first ? first.getBoundingClientRect().top : 0;
      const contactBottom = contact ? contact.getBoundingClientRect().bottom : Infinity;
      // Visible while the hero is still uncovered, and again shortly before
      // Contact starts to lift off the footer.
      const next = firstTop > 0 || contactBottom < window.innerHeight + 240 ? 'true' : 'false';
      if (next !== last) { layer.dataset.visible = next; last = next; }
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
    <div className="hero-backdrop" ref={ref} aria-hidden="true" data-visible="true">
      <img src="assets/hero-micrograph/light.webp" alt="" decoding="async" fetchPriority="high" />
    </div>
  );
}
