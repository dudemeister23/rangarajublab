import React, { useEffect, useRef, useState } from 'react';

type Point = { x: number; y: number; z: number; fold: boolean };

// Stylized mitochondrial envelope and folded inner membrane, not measured data.
function mitochondrialGeometry(): Point[] {
  const points: Point[] = [];
  for (let row = 0; row <= 62; row++) {
    const v = Math.PI * row / 62;
    for (let column = 0; column < 48; column++) {
      const u = 2 * Math.PI * column / 48;
      points.push({ x: Math.sin(v) * Math.cos(u) * .64, y: Math.cos(v) * 1.7, z: Math.sin(v) * Math.sin(u) * .64, fold: false });
    }
  }
  for (let fold = 0; fold < 12; fold++) {
    const y = -1.35 + fold * .245;
    const radius = .57 * Math.sqrt(1 - (y / 1.7) ** 2);
    for (let i = 0; i < 35; i++) {
      const u = i / 34 * Math.PI * 2;
      for (let j = 0; j < 9; j++) {
        const depth = j / 8;
        points.push({ x: Math.cos(u) * radius * (.25 + .75 * depth), y: y + Math.sin(u * 2 + fold * .4) * .11 + depth * .055, z: Math.sin(u) * radius, fold: true });
      }
    }
  }
  return points;
}

const geometry = mitochondrialGeometry();

export default function ScientificField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const rotation = useRef(0);
  const pausedRef = useRef(paused);
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, time = 0, previous = 0;
    let pointer = { x: -1000, y: -1000 }, eased = { x: 0, y: 0 };
    let visible = !document.hidden;
    let frozenKey = '';
    let scrollPhase = 0;
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (event: PointerEvent) => { pointer = { x: event.clientX, y: event.clientY }; };
    const leave = () => { pointer = { x: -1000, y: -1000 }; };
    const onMotion = () => setPaused(reduced.matches);
    const draw = (now: number) => {
      if (!visible) return;
      frame = requestAnimationFrame(draw);
      if (now - previous < 30) return;
      const dt = Math.min(now - previous, 50); previous = now;
      const frozen = pausedRef.current;
      const key = `${width}:${height}:${rotation.current}`;
      if (frozen && frozenKey === key) return;
      frozenKey = frozen ? key : '';
      if (!frozen) time += dt * .00012;
      const interactive = !frozen && !reduced.matches;
      if (!frozen) eased.x += ((interactive && pointer.x >= 0 ? pointer.x / width - .5 : 0) - eased.x) * .07;
      if (!frozen) eased.y += ((interactive && pointer.y >= 0 ? pointer.y / height - .5 : 0) - eased.y) * .07;
      ctx.clearRect(0, 0, width, height);
      const mobile = width < 760;
      const size = mobile ? 95 : Math.min(width * .135, 215);
      const offset = mobile ? 0 : width * .075;
      if (interactive) scrollPhase = window.scrollY * .00015;
      const scroll = scrollPhase;
      for (let side = 0; side < 2; side++) {
        const centerX = side === 0 ? offset : width - offset;
        const centerY = height * (side === 0 ? .48 : .57);
        const angle = time * (side === 0 ? 1 : -.8) + rotation.current + eased.x * .75 + scroll + side * 1.8;
        const tilt = (side === 0 ? -.25 : .3) + eased.y * .15;
        const cos = Math.cos(angle), sin = Math.sin(angle);
        const plotted = geometry.filter((_, index) => !mobile || index % 3 === 0).map(point => {
          const x = point.x * cos + point.z * sin;
          const z = point.z * cos - point.x * sin;
          const perspective = 3.8 / (3.8 - z);
          let px = centerX + (x * Math.cos(tilt) - point.y * Math.sin(tilt)) * size * perspective;
          let py = centerY + (point.y * Math.cos(tilt) + x * Math.sin(tilt)) * size * perspective;
          const dx = px - pointer.x, dy = py - pointer.y;
          const distance = Math.hypot(dx, dy);
          const influence = interactive ? Math.max(0, 1 - distance / 150) : 0;
          if (distance > 0) { px += dx / distance * influence * 24; py += dy / distance * influence * 24; }
          return { px, py, z, fold: point.fold, influence };
        }).sort((a, b) => a.z - b.z);
        for (const point of plotted) {
          const depth = (point.z + .7) / 1.4;
          ctx.fillStyle = point.fold ? `rgba(248,192,91,${.18 + depth * .55 + point.influence * .25})` : `rgba(74,224,206,${.12 + depth * .55 + point.influence * .3})`;
          ctx.beginPath(); ctx.arc(point.px, point.py, (point.fold ? .9 : .7) + depth * .5 + point.influence, 0, Math.PI * 2); ctx.fill();
        }
      }
    };
    const visibility = () => {
      visible = !document.hidden;
      cancelAnimationFrame(frame);
      if (visible) { previous = performance.now(); frame = requestAnimationFrame(draw); }
    };
    resize(); frame = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', visibility);
    reduced.addEventListener('change', onMotion);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', visibility); reduced.removeEventListener('change', onMotion);
    };
  }, []);

  return <>
    <div className="scientific-field" aria-hidden="true"><canvas ref={canvasRef} /></div>
    <div className="field-controls" aria-label="Scientific background controls">
      <span>Mitochondrial architecture<small>Illustrative geometry</small></span>
      <button onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? 'Resume motion' : 'Pause motion'}</button>
      <button onClick={() => { rotation.current += Math.PI / 4; }}>Rotate forms</button>
    </div>
  </>;
}
