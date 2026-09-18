// Original sculptural geometry inspired by the supplied dendrite renderings.
// Deliberately distinct compositions, not a reconstruction of the specimen.
export type FieldPoint = { x: number; y: number; z: number; material: number; light: number };
export type FieldGeometry = { points: FieldPoint[]; edges: number[] };

export function organicFieldGeometry(variant: number): FieldGeometry {
  const points: FieldPoint[] = [], edges: number[] = [];
  let seed = variant ? 71327 : 29173;
  const random = () => {
    seed = Math.imul(seed ^ seed >>> 15, 1 | seed);
    seed ^= seed + Math.imul(seed ^ seed >>> 7, 61 | seed);
    return ((seed ^ seed >>> 14) >>> 0) / 4294967296;
  };
  const phase = variant * 2.14;
  const axis = (y: number) => ({
    x: variant ? .38 * Math.sin(y * .54 + 1) - y * .035 : .48 * Math.sin(y * .46) + y * .028,
    z: .12 * Math.cos(y * .73 + phase),
  });
  const caliber = (y: number) => (variant ? .48 : .57)
    + .075 * Math.sin(y * 1.6 + phase) + .055 * Math.cos(y * 2.7 - phase);
  type Position = { x: number; y: number; z: number };
  const surface = (rows: number, columns: number, sample: (t: number, angle: number) => Position, material: number, wire = false) => {
    const base = points.length;
    for (let row = 0; row <= rows; row++) for (let column = 0; column < columns; column++) {
      const t = Math.max(0, Math.min(1, (row + (random() - .5) * .85) / rows));
      const a = (column + (row % 2) * .5 + (random() - .5) * .7) / columns * Math.PI * 2;
      const p = sample(t, a);
      points.push({ ...p, material, light: .5 + random() * .5 });
      // Sparse triangles suggest the source mesh without a rigid grid texture.
      if (wire && row > 0 && row % 2 === 0 && column % 3 === 0) {
        const i = base + row * columns + column;
        edges.push(i, i - columns, i, base + (row - 1) * columns + (column + 1) % columns);
      }
    }
  };

  // Continue beyond both screen edges even at maximum scroll parallax.
  // Keep the original sample spacing instead of stretching a shorter shaft.
  surface(298, 42, (t, a) => {
    const y = -9 + t * 21, c = axis(y);
    const r = caliber(y) * (1 + .025 * Math.sin(a * 3 + y * 4));
    return { x: c.x + r * Math.cos(a), y, z: c.z + r * Math.sin(a) * .88 };
  }, 0, true);

  // Each side has its own sparse, uneven constellation of long-necked and
  // compact spines. The different attachment angles reveal depth as it turns.
  const spines = variant
    ? [[-5.3, 2.9, .75, -.3], [-3.6, .25, 1.35, .48], [-.65, 3.2, 1.6, -.65], [.8, 5.8, .62, .2], [3.4, 2.7, 1.1, .55], [5.5, .6, .8, -.3]]
    : [[-4.6, .05, 1.30, -.45], [-2.1, 2.8, .70, .28], [-.9, .35, 1.8, -.75], [2.3, 3.3, 1.15, .35], [4.25, -.35, .95, -.25]];
  for (const [y0, a, length, lean] of spines) {
    const c = axis(y0), base = caliber(y0) * .82;
    const radialX = Math.cos(a), radialZ = Math.sin(a);
    surface(32, 20, (t, theta) => {
      const reach = base + length * t;
      const head = (.19 + .045 * length) * Math.exp(-Math.pow((t - .79) / .19, 2));
      const foot = .20 * Math.exp(-t * 13);
      const end = Math.sqrt(Math.max(.0002, Math.min(1, (1 - t) / .13)));
      const r = (.047 + head + foot) * end * (1 + .10 * Math.sin(theta * 3 + y0));
      return {
        x: c.x + reach * radialX - Math.sin(theta) * r * radialZ,
        y: y0 + lean * t + .12 * Math.sin(t * Math.PI) + Math.cos(theta) * r,
        z: c.z + reach * radialZ + Math.sin(theta) * r * radialX,
      };
    }, 0, true);
  }

  // Unequal mitochondrial compartments replace the copied continuous green fill.
  // Porous surface and winding internal strands make the volume readable.
  const compartments = variant ? [[-6.8, -2.7], [-1.9, 1.1], [2.25, 6.7]] : [[-6.8, -.75], [-.25, 3.45], [4.25, 11.7]];
  for (let part = 0; part < compartments.length; part++) {
    const [start, end] = compartments[part];
    const center = (y: number) => {
      const c = axis(y);
      return { x: c.x + .10 * Math.sin(y * 1.5 + phase), z: c.z + .08 * Math.cos(y * 1.8) };
    };
    const radius = (y: number) => {
      const t = (y - start) / (end - start);
      const cap = Math.pow(Math.max(.001, Math.sin(Math.PI * t)), .25);
      return caliber(y) * (.61 + .09 * Math.sin(y * 3.1 + phase)) * cap;
    };
    surface(Math.ceil((end - start) * 28), 26, (t, a) => {
      const y = start + t * (end - start), c = center(y), r = radius(y);
      return { x: c.x + r * Math.cos(a), y, z: c.z + r * Math.sin(a) * .83 };
    }, 1);
    const folds = Math.ceil((end - start) * 12);
    for (let fold = 0; fold < folds; fold++) {
      const y0 = start + (end - start) * (.04 + random() * .88);
      const span = .12 + random() * .34;
      const a0 = random() * Math.PI * 2;
      const turnSpan = 1.3 + random() * 2.4;
      const reach = .30 + random() * .40;
      surface(16, 6, (t, a) => {
        const y = Math.min(end - .01, y0 + span * t), c = center(y);
        const turn = a0 + t * turnSpan;
        const r = radius(y) * reach * (.78 + .22 * Math.sin(t * Math.PI));
        const tube = .018 + .012 * Math.sin(t * Math.PI);
        return {
          x: c.x + r * Math.cos(turn) + tube * Math.cos(a),
          y: y + tube * Math.sin(a),
          z: c.z + r * Math.sin(turn) + tube * Math.sin(a) * .65,
        };
      }, 2);
    }
  }
  return { points, edges };
}
