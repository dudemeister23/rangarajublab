import React, { useEffect, useRef } from 'react';

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
  // A warped continuous folded surface replaces the repeated horizontal discs.
  // This is a visual approximation of a labyrinth, not an ultrastructural model.
  const step = .042;
  for (let x = -.58; x <= .58; x += step) {
    for (let y = -1.56; y <= 1.56; y += step) {
      for (let z = -.58; z <= .58; z += step) {
        if ((x * x + z * z) / (.58 * .58) + y * y / (1.56 * 1.56) > 1) continue;
        const u = x * 7.2 + .7 * Math.sin(y * 2.8 + z * 3);
        const v = y * 5.4 + .6 * Math.sin(z * 5 + x * 3);
        const w = z * 7.8 + .55 * Math.cos(y * 3.2 - x * 4);
        const membrane = Math.sin(u) * Math.cos(v) + Math.sin(v) * Math.cos(w) + Math.sin(w) * Math.cos(u);
        if (Math.abs(membrane - .12 * Math.sin(y * 4)) < .16) {
          points.push({
            x: x + .006 * Math.sin(y * 37 + z * 51),
            y: y + .006 * Math.sin(z * 43 + x * 47),
            z: z + .006 * Math.sin(x * 41 + y * 53),
            fold: true,
          });
        }
      }
    }
  }
  return points;
}

const geometry = mitochondrialGeometry();
// Connect nearby membrane samples in 3D, preserving the voids between folds.
const membraneEdges: [number, number][] = [];
const buckets = new Map<string, number[]>();
geometry.forEach((point, index) => {
  if (!point.fold) return;
  const cell = [point.x, point.y, point.z].map(value => Math.floor(value / .075));
  const neighbors: { index: number; distance: number }[] = [];
  for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
    for (const other of buckets.get(`${cell[0] + dx},${cell[1] + dy},${cell[2] + dz}`) || []) {
      const p = geometry[other];
      const distance = Math.hypot(point.x - p.x, point.y - p.y, point.z - p.z);
      if (distance < .076) neighbors.push({ index: other, distance });
    }
  }
  neighbors.sort((a, b) => a.distance - b.distance).slice(0, 3).forEach(other => membraneEdges.push([index, other.index]));
  const key = cell.join(',');
  buckets.set(key, [...(buckets.get(key) || []), index]);
});

export default function ScientificField({ dark }: { dark: boolean }) {
  const darkRef = useRef(dark);
  useEffect(() => { darkRef.current = dark; }, [dark]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (event: PointerEvent) => { pointer = { x: event.clientX, y: event.clientY }; };
    const leave = () => { pointer = { x: -1000, y: -1000 }; };
    const onMotion = () => { frozenKey = ''; };
    const draw = (now: number) => {
      if (!visible) return;
      frame = requestAnimationFrame(draw);
      if (now - previous < 30) return;
      const dt = Math.min(now - previous, 50); previous = now;
      const frozen = reduced.matches;
      const isDark = darkRef.current;
      // Branch geometry stays fully extended; only punctum brightness reacts.
      const growth = 1;
      const key = `${width}:${height}:${pointer.x}:${pointer.y}:${isDark}`;
      if (frozen && frozenKey === key) return;
      frozenKey = frozen ? key : '';
      if (!frozen) time += dt * .00012;
      const interactive = !frozen && !reduced.matches;
      if (!frozen) eased.x += ((interactive && pointer.x >= 0 ? pointer.x / width - .5 : 0) - eased.x) * .07;
      if (!frozen) eased.y += ((interactive && pointer.y >= 0 ? pointer.y / height - .5 : 0) - eased.y) * .07;
      ctx.clearRect(0, 0, width, height);
      canvas.dataset.growth = growth.toFixed(4);
      const mobile = width < 760;
      const size = mobile ? 95 : Math.min(width * .135, 215);
      const offset = mobile ? 0 : width * .075;
      // Dendritic shafts descend from above, with short necks and rounded spine
      // heads. Red puncta echo the original fluorescence image, not live data.
      const roots = mobile ? [.08, .92] : [.06, .20, .80, .94];
      roots.forEach((root, branch) => {
        const sign = root < .5 ? 1 : -1;
        const length = Math.max(0, height - 110) * (branch % 2 === 0 ? 1 : .86);
        const position = (t: number) => ({
          x: width * root + Math.sin(t * 5 + branch) * (mobile ? 14 : 30) + sign * t * (mobile ? 2 : -35),
          y: 90 + t * length,
        });
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.beginPath();
        for (let sample = 0; sample <= 90; sample++) {
          const t = sample / 90 * growth, p = position(t);
          if (sample === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = 'rgba(30,159,156,.18)'; ctx.lineWidth = mobile ? 8 : 13; ctx.stroke();
        ctx.strokeStyle = 'rgba(26,126,118,.55)'; ctx.lineWidth = 1.5; ctx.stroke();
        for (let spine = 1; spine < 19; spine++) {
          const t = spine / 19;
          const p = position(t), direction = spine % 2 === 0 ? 1 : -1;
          const neck = (mobile ? 10 : 17) + Math.sin(spine * 4 + branch) * 6;
          const headX = p.x + direction * neck, headY = p.y - 7 - Math.sin(spine) * 5;
          ctx.beginPath(); ctx.moveTo(p.x, p.y);
          ctx.quadraticCurveTo(p.x + direction * neck * .5, p.y + 3, headX, headY);
          ctx.strokeStyle = 'rgba(23,128,116,.65)'; ctx.lineWidth = 2; ctx.stroke();
          ctx.beginPath(); ctx.ellipse(headX, headY, 4.5, 3, direction * .5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(33,139,123,.72)'; ctx.fill();
          const redX = spine % 3 === 0 ? p.x + 3 : headX;
          const distance = Math.hypot(redX - pointer.x, headY - pointer.y);
          const response = Math.max(0, 1 - distance / 120);
          // Slow, staggered brightness cycles keep the resting field alive.
          // Reduced motion retains a steady glow and proximity feedback.
          const twinkle = frozen ? .5 : .5 + .5 * Math.sin(time * (5.2 + (spine % 4) * .35) + spine * 2.399 + branch * 1.7);
          const restingGlow = .2 + twinkle * .22;
          const radius = spine % 3 === 0 ? 12 : 8;
          const glow = ctx.createRadialGradient(redX, headY, 0, redX, headY, radius);
          glow.addColorStop(0, `rgba(235,55,55,${restingGlow + response * (1 - restingGlow)})`);
          glow.addColorStop(.22, `rgba(247,40,48,${restingGlow * .65 + response * .62})`);
          glow.addColorStop(.55, `rgba(217,16,40,${restingGlow * .25 + response * .45})`);
          glow.addColorStop(1, 'rgba(189,4,24,0)');
          ctx.fillStyle = glow; ctx.beginPath();
          ctx.ellipse(redX, headY, radius, radius * .75, spine * .8, 0, Math.PI * 2); ctx.fill();
        }
      });
      for (let side = 0; side < 2; side++) {
        const centerX = side === 0 ? offset : width - offset;
        const centerY = height * (side === 0 ? .48 : .57);
        const angle = time * (side === 0 ? 1 : -.8) + eased.x * .75 + side * 1.8;
        const tilt = (side === 0 ? -.25 : .3) + eased.y * .15;
        const cos = Math.cos(angle), sin = Math.sin(angle);
        const plotted = geometry.map((point, index) => {
          const x = point.x * cos + point.z * sin;
          const z = point.z * cos - point.x * sin;
          const perspective = 3.8 / (3.8 - z);
          let px = centerX + (x * Math.cos(tilt) - point.y * Math.sin(tilt)) * size * perspective;
          let py = centerY + (point.y * Math.cos(tilt) + x * Math.sin(tilt)) * size * perspective;
          const dx = px - pointer.x, dy = py - pointer.y;
          const distance = Math.hypot(dx, dy);
          const influence = interactive ? Math.max(0, 1 - distance / 150) : 0;
          if (distance > 0) { px += dx / distance * influence * 24; py += dy / distance * influence * 24; }
          return { px, py, z, fold: point.fold, influence, index };
        });
        ctx.beginPath();
        for (let edge = 0; edge < membraneEdges.length; edge += mobile ? 3 : 1) {
          const [a, b] = membraneEdges[edge];
          ctx.moveTo(plotted[a].px, plotted[a].py); ctx.lineTo(plotted[b].px, plotted[b].py);
        }
        ctx.strokeStyle = isDark ? 'rgba(231,175,82,.42)' : 'rgba(139,117,74,.35)'; ctx.lineWidth = .7; ctx.stroke();
        plotted.sort((a, b) => a.z - b.z);
        for (const point of plotted) {
          if (mobile && point.index % 3 !== 0) continue;
          const depth = (point.z + .7) / 1.4;
          ctx.fillStyle = point.fold ? `rgba(${isDark ? '248,192,91' : '140,113,67'},${.18 + depth * .55 + point.influence * .25})` : `rgba(${isDark ? '74,224,206' : '27,119,118'},${.12 + depth * .55 + point.influence * .3})`;
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

  return <div className="scientific-field" aria-hidden="true"><canvas ref={canvasRef} /></div>;
}
