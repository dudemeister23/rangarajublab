import React, { useEffect, useRef } from 'react';
import { organicFieldGeometry } from './organicFieldGeometry';

const forms = [organicFieldGeometry(0), organicFieldGeometry(1)];

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
    let width = 0, height = 0, frame = 0, previous = 0, elapsed = 0;
    let pointer = { x: -1000, y: -1000 };
    let response = 0, targetResponse = 0, smoothProgress = 0;
    let visible = !document.hidden, lastKey = '';
    const maximum = Math.max(...forms.map(form => form.points.length));
    const batches = Array.from({ length: 18 }, () => new Float32Array(maximum * 6));
    const projected = forms.map(form => new Float32Array(form.points.length * 3));
    const counts = new Uint32Array(18);
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      smoothProgress = Math.max(0, Math.min(1, window.scrollY / Math.max(1, document.documentElement.scrollHeight - height)));
      lastKey = '';
    };
    const move = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY }; targetResponse = 1;
    };
    const leave = () => { targetResponse = 0; };
    const onMotion = () => { lastKey = ''; };
    const draw = (now: number) => {
      if (!visible) return;
      frame = requestAnimationFrame(draw);
      // Render on every display frame; a 22ms gate skipped alternate 60Hz frames.
      const dt = Math.max(0, Math.min(now - previous, 100)); previous = now;
      response += (targetResponse - response) * (1 - Math.exp(-dt / 110));
      if (Math.abs(targetResponse - response) < .002) response = targetResponse;
      const frozen = reduced.matches;
      if (!frozen) elapsed += dt / 1000;
      const targetProgress = Math.max(0, Math.min(1, window.scrollY / Math.max(1, document.documentElement.scrollHeight - height)));
      // A short, frame-rate-independent response absorbs wheel/trackpad steps
      // while following reversals promptly and settling at the exact position.
      smoothProgress += (targetProgress - smoothProgress) * (1 - Math.exp(-dt / 75));
      if (Math.abs(targetProgress - smoothProgress) < .000002) smoothProgress = targetProgress;
      const progress = smoothProgress;
      const isDark = darkRef.current || document.documentElement.getAttribute('data-darkreader-scheme') === 'dark';
      const key = `${width}:${height}:${isDark}:${frozen ? 'static' : `${elapsed}:${progress}:${pointer.x}:${pointer.y}:${response}`}`;
      if (lastKey === key) return;
      lastKey = key;
      ctx.clearRect(0, 0, width, height);
      const mobile = width < 760;
      counts.fill(0);
      ctx.save();
      if (width < 1200) {
        const gutter = mobile ? .055 : .15;
        ctx.beginPath(); ctx.rect(0, 0, width * gutter, height);
        ctx.rect(width * (1 - gutter), 0, width * gutter, height); ctx.clip();
      }
      for (let side = 0; side < 2; side++) {
        const form = forms[side], projection = projected[side];
        const size = mobile ? 40 : Math.min(width * .067, 135) * (side ? .84 : 1);
        const origin = mobile ? (side ? width + 2 : -2) : width * (side ? .944 : .065);
        // Distinct real 3D forms turn at independent speeds and starting angles.
        const angle = side ? .63 - elapsed * .02385 : -.24 + elapsed * .02925;
        const cos = Math.cos(angle), sin = Math.sin(angle);
        const tilt = side ? -.075 + Math.sin(elapsed * .023) * .017 : .025 + Math.sin(elapsed * .019) * .012;
        const tiltCos = Math.cos(tilt), tiltSin = Math.sin(tilt);
        const parallax = frozen ? 0 : -progress * height * (side ? .27 : .38);
        const centerY = height * (side ? .63 : .47) + parallax;
        const axialScale = height * (side ? .095 : .105);
        if (!side) {
          canvas.dataset.rotation = angle.toFixed(5);
          canvas.dataset.parallax = parallax.toFixed(2);
          canvas.dataset.targetParallax = (frozen ? 0 : -targetProgress * height * .38).toFixed(2);
        }
        for (let index = 0; index < form.points.length; index++) {
          const point = form.points[index];
          const rx = point.x * cos + point.z * sin;
          const rz = point.z * cos - point.x * sin;
          const perspective = 6 / (6 - rz * .28);
          const localX = rx * size * perspective, localY = point.y * axialScale;
          let x = origin + localX * tiltCos - localY * tiltSin;
          let y = centerY + localY * tiltCos + localX * tiltSin;
          let influence = 0;
          if (!frozen && response > 0) {
            const dx = x - pointer.x, dy = y - pointer.y;
            if (Math.abs(dx) < 100 && Math.abs(dy) < 100) {
              const distance = Math.hypot(dx, dy);
              if (distance > 0 && distance < 100) {
                influence = (1 - distance / 100) ** 2 * response;
                x += dx / distance * influence * 10; y += dy / distance * influence * 10;
              }
            }
          }
          const depth = Math.max(0, Math.min(1, (rz + .8) / 1.6));
          projection[index * 3] = x; projection[index * 3 + 1] = y; projection[index * 3 + 2] = depth;
          if (x < -15 || x > width + 15 || y < -15 || y > height + 15 || (mobile && index % 2)) continue;
          const light = depth * .62 + point.light * .25 + influence * .2;
          if (light < .06) continue;
          const bucket = point.material * 6 + Math.min(5, Math.floor(light * 6));
          const offset = counts[bucket]++ * 3;
          batches[bucket][offset] = x; batches[bucket][offset + 1] = y;
          batches[bucket][offset + 2] = (point.material ? .72 : .56) + depth * .42 + influence * .28;
        }
        // A few faint triangles provide a structural scaffold between particles.
        for (let layer = 0; layer < 2; layer++) {
          ctx.beginPath();
          for (let edge = 0; edge < form.edges.length; edge += 2) {
            const a = form.edges[edge] * 3, b = form.edges[edge + 1] * 3;
            const depth = (projection[a + 2] + projection[b + 2]) / 2;
            if ((depth > .5 ? 1 : 0) !== layer || depth < .06) continue;
            ctx.moveTo(projection[a], projection[a + 1]); ctx.lineTo(projection[b], projection[b + 1]);
          }
          ctx.lineWidth = .5;
          ctx.strokeStyle = isDark ? `rgba(140,190,187,${layer ? .13 : .035})` : `rgba(38,95,100,${layer ? .16 : .055})`;
          ctx.stroke();
        }
      }
      for (let bucket = 0; bucket < 18; bucket++) {
        const material = Math.floor(bucket / 6), level = bucket % 6;
        const pigment = material === 0 ? (isDark ? '150,197,197' : '43,96,103')
          : material === 1 ? (isDark ? '117,218,142' : '33,121,80')
          : (isDark ? '198,244,154' : '77,133,59');
        const opacity = (material ? .14 : .08) + level * (material ? .125 : .086);
        ctx.fillStyle = `rgba(${pigment},${opacity})`;
        ctx.beginPath();
        const batch = batches[bucket];
        for (let i = 0; i < counts[bucket] * 3; i += 3) {
          const x = batch[i], y = batch[i + 1], r = batch[i + 2];
          ctx.moveTo(x + r, y); ctx.arc(x, y, r, 0, Math.PI * 2);
        }
        ctx.fill();
      }
      ctx.restore();
    };
    const visibility = () => {
      visible = !document.hidden; cancelAnimationFrame(frame);
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
