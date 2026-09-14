import React, { useEffect, useRef } from 'react';

import { mitochondrialGeometry } from './mitochondrialGeometry';

const mitochondria = [0, 1].map(variant => {
  const geometry = mitochondrialGeometry(variant);
  const membraneVertices = new Set(geometry.faces.flat());
  // Exclude unused vertices inside perforations when sampling the mesh as dots.
  const points = geometry.points.filter((point, index) => !point.fold || membraneVertices.has(index));
  // Stable sampling avoids visible rows from a regular every-third stride.
  return points.filter((_, index) => ((Math.imul(index + 1, 2654435761) >>> 0) % 100) < 34);
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
    let pointer = { x: -1000, y: -1000 };
    let visible = !document.hidden;
    let frozenKey = '';
    // Reuse coordinate storage; no particle objects or sorting during animation.
    const batches = Array.from({ length: 12 }, () => new Float32Array(Math.max(...mitochondria.map(points => points.length)) * 3));
    const counts = new Uint32Array(12);
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
      if (now - previous < 15) return;
      const dt = Math.min(now - previous, 50); previous = now;
      const frozen = reduced.matches;
      const isDark = darkRef.current || document.documentElement.getAttribute('data-darkreader-scheme') === 'dark';
      // Branch geometry stays fully extended; only punctum brightness reacts.
      const growth = 1;
      const key = `${width}:${height}:${pointer.x}:${pointer.y}:${isDark}`;
      if (frozen && frozenKey === key) return;
      frozenKey = frozen ? key : '';
      if (!frozen) time += dt * .00012;
      const interactive = !frozen && !reduced.matches;
      ctx.clearRect(0, 0, width, height);
      canvas.dataset.growth = growth.toFixed(4);
      const mobile = width < 760;
      // Dendritic shafts descend from above, with short necks and rounded spine
      // heads. Red puncta echo the original fluorescence image, not live data.
      const roots = mobile ? [.08, .92] : [.012, .138, .862, .988];
      const dendritePosition = (branch: number, t: number) => {
        const root = roots[branch], sign = root < .5 ? 1 : -1;
        const length = Math.max(0, height - 110) * (branch % 2 === 0 ? 1 : .86);
        return {
          x: width * root + Math.sin(t * 5 + branch) * (mobile ? 14 : Math.min(12, width * .007)) + sign * t * (mobile ? 2 : 0),
          y: 90 + t * length,
        };
      };
      const dendriteXAt = (branch: number, y: number) => {
        const length = Math.max(1, height - 110) * (branch % 2 === 0 ? 1 : .86);
        return dendritePosition(branch, Math.max(0, Math.min(1, (y - 90) / length))).x;
      };
      roots.forEach((_, branch) => {
        const position = (t: number) => dendritePosition(branch, t);
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
          const restingGlow = .2 + twinkle * .8;
          const illumination = restingGlow + response * (1 - restingGlow);
          const radius = spine % 3 === 0 ? 12 : 8;
          const glow = ctx.createRadialGradient(redX, headY, 0, redX, headY, radius);
          glow.addColorStop(0, `rgba(235,55,55,${illumination})`);
          glow.addColorStop(.22, `rgba(247,40,48,${illumination * .9})`);
          glow.addColorStop(.55, `rgba(217,16,40,${illumination * .55})`);
          glow.addColorStop(1, 'rgba(189,4,24,0)');
          ctx.fillStyle = glow; ctx.beginPath();
          ctx.ellipse(redX, headY, radius, radius * .75, spine * .8, 0, Math.PI * 2); ctx.fill();
        }
      });
      for (let side = 0; side < 2; side++) {
        const centerY = height * .52;
        const firstBranch = side * 2;
        const laneMidpoint = (y: number) =>
          (dendriteXAt(firstBranch, y) + dendriteXAt(firstBranch + 1, y)) / 2;
        // Desktop placement follows each pair of actual dendritic shafts.
        // Mobile has only one shaft per side, so retain its edge composition.
        let size = mobile ? 95 : Math.min(width * .135, 215);
        if (!mobile) {
          const gaps = [.2, .35, .5, .65, .8].map(fraction =>
            dendriteXAt(firstBranch + 1, height * fraction) - dendriteXAt(firstBranch, height * fraction));
          size = Math.min(size, Math.max(24, (Math.min(...gaps) - 24) / 1.4));
        }
        const centerX = mobile ? (side === 0 ? -24 : width + 24) : laneMidpoint(centerY);
        // Rotation is time-driven only; pointer movement affects local dots.
        const angle = time * (2 / 3) * (side === 0 ? 1 : -.8) + side * 1.8;
        const laneTilt = mobile ? (side === 0 ? -.25 : .3)
          : -Math.atan2(laneMidpoint(centerY + 60) - laneMidpoint(centerY - 60), 120);
        const tilt = laneTilt;
        const cos = Math.cos(angle), sin = Math.sin(angle);
        const geometry = mitochondria[side];
        const tiltCos = Math.cos(tilt), tiltSin = Math.sin(tilt);
        counts.fill(0);
        // The gap depends on screen height, not on individual particles.
        const lane = new Float32Array(height + 1);
        if (!mobile) for (let y = 0; y <= height; y++) lane[y] = laneMidpoint(y);
        for (let index = 0; index < geometry.length; index += mobile ? 2 : 1) {
          const point = geometry[index];
          const x = point.x * cos + point.z * sin;
          const z = point.z * cos - point.x * sin;
          const perspective = 3.8 / (3.8 - z);
          let py = centerY + (point.y * tiltCos + x * tiltSin) * size * perspective;
          if (py < -20 || py > height + 20) continue;
          let px = (mobile ? centerX : lane[Math.max(0, Math.min(height, Math.round(py)))])
            + x * tiltCos * size * perspective;
          let influence = 0;
          const dx = px - pointer.x, dy = py - pointer.y;
          if (interactive && Math.abs(dx) < 150 && Math.abs(dy) < 150) {
            const squared = dx * dx + dy * dy;
            if (squared > 0 && squared < 22500) {
              const distance = Math.sqrt(squared);
              influence = 1 - distance / 150;
              px += dx / distance * influence * 18;
              py += dy / distance * influence * 18;
            }
          }
          const depth = Math.max(0, Math.min(1, (z + .6) / 1.2));
          const level = Math.min(5, Math.floor((depth + influence * .4) * 6));
          const bucket = (point.fold ? 6 : 0) + level;
          const offset = counts[bucket] * 3;
          const batch = batches[bucket];
          batch[offset] = px; batch[offset + 1] = py;
          // Slightly larger dots compensate for the lower surface sampling.
          batch[offset + 2] = ((point.fold ? .60 : .48) + depth * .40 + influence * .65) * 1.5;
          counts[bucket]++;
        }
        // Twelve fills replace thousands of per-particle state changes/fills.
        for (let bucket = 0; bucket < batches.length; bucket++) {
          const fold = bucket >= 6, level = bucket % 6;
          const pigment = fold ? (isDark ? '248,192,91' : '140,113,67')
            : (isDark ? '74,224,206' : '27,119,118');
          ctx.fillStyle = `rgba(${pigment},${(fold ? .24 : .18) + (level + .5) / 6 * .48})`;
          ctx.beginPath();
          const batch = batches[bucket];
          for (let i = 0; i < counts[bucket] * 3; i += 3) {
            const x = batch[i], y = batch[i + 1], radius = batch[i + 2];
            ctx.moveTo(x + radius, y);
            ctx.arc(x, y, radius, 0, Math.PI * 2);
          }
          ctx.fill();
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
