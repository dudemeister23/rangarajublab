// Original illustrative geometry informed by neuronal electron tomography.
// Sources, scope, and simplifications: docs/mitochondrial-illustration.md.
export type MitoPoint = { x: number; y: number; z: number; fold: boolean };
export type MitoFace = [number, number, number];
export type MitoGeometry = { points: MitoPoint[]; faces: MitoFace[]; envelope: [number, number][] };

export function mitochondrialGeometry(variant = 0): MitoGeometry {
  const points: MitoPoint[] = [], faces: MitoFace[] = [], envelope: [number, number][] = [];
  const phase = variant * 1.7;
  // An elongated segment with local swellings, constrictions, and a curved axis.
  // Ends are rounded for the illustration, not tomographic section boundaries.
  const center = (y: number) => ({ x: .10 * Math.sin(y * 2.2 + phase), z: .065 * Math.sin(y * 2.8 - phase) });
  const radius = (y: number) => {
    const cap = Math.sqrt(Math.max(.001, 1 - Math.pow(Math.abs(y) / 5.4, 8)));
    return cap * (.39 + .07 * Math.sin(y * 4.1 + phase) + .035 * Math.cos(y * 7.3 - phase));
  };
  const add = (x: number, y: number, z: number, fold = true) => {
    const axialY = y;
    const c = center(axialY);
    points.push({ x: x + c.x, y: axialY, z: z + c.z, fold });
    return points.length - 1;
  };
  // Sparse double-envelope contours preserve interior visibility.
  for (const inset of [0, .026]) {
    const base = points.length, rows = 288, columns = 48;
    for (let row = 0; row <= rows; row++) {
      const y = -5.4 + 10.8 * row / rows, r = Math.max(.003, radius(y) - inset);
      for (let col = 0; col < columns; col++) {
        const a = col / columns * Math.PI * 2;
        const ripple = 1 + .025 * Math.sin(a * 3 + y * 5 + phase);
        const index = add(r * Math.cos(a) * ripple, y, r * Math.sin(a) * .86 * ripple, false);
        if (row % 4 === 0) envelope.push([index, base + row * columns + (col + 1) % columns]);
        if (row && col % 4 === 0) envelope.push([index - columns, index]);
      }
    }
  }
  // Tubular crista paths have true surfaces, with narrowed junctions where they
  // reach the inner boundary. Their visible union suggests branching networks.
  const tube = (path: (t: number) => { x: number; y: number; z: number }, width: number, steps = 12) => {
    const base = points.length, sides = 8;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps, p = path(t), a = path(Math.max(0,t-.001)), b = path(Math.min(1,t+.001));
      const tangent = [b.x-a.x,b.y-a.y,b.z-a.z];
      const length = Math.hypot(...tangent) || 1;
      const [tx,ty,tz] = tangent.map(v=>v/length);
      const reference = Math.abs(ty) > .9 ? [1,0,0] : [0,1,0];
      let nx = ty*reference[2]-tz*reference[1], ny = tz*reference[0]-tx*reference[2], nz = tx*reference[1]-ty*reference[0];
      const nl = Math.hypot(nx,ny,nz); nx/=nl; ny/=nl; nz/=nl;
      const bx=ty*nz-tz*ny, by=tz*nx-tx*nz, bz=tx*ny-ty*nx;
      const r = width * (.7 + .3*Math.sin(Math.PI*t)) * (1+.12*Math.sin(t*13+phase));
      for(let j=0;j<sides;j++) {
        const angle=j/sides*Math.PI*2, c=Math.cos(angle), s=Math.sin(angle);
        add(p.x+r*(nx*c+bx*s),p.y+r*(ny*c+by*s),p.z+r*(nz*c+bz*s));
        if(i) {
          const k=base+i*sides+j, next=base+i*sides+(j+1)%sides;
          faces.push([k,next,k-sides],[next,next-sides,k-sides]);
        }
      }
    }
  };
  // Populate the extended body at the original fold scale and spacing.
  // Only the two ends of the complete envelope are capped.
  // Short, winding paths and local cross-connections avoid longitudinal rails.
  for(let lane=0;lane<160;lane++) {
    const a=lane*2.399+phase;
    const y0=-5.03+lane*.0633;
    const span=.18+.25*(.5+.5*Math.sin(lane*7.1));
    tube(t=>{
      const y=y0+span*t, r=radius(y)*(.30+.32*(.5+.5*Math.sin(lane*3.7+t*4)));
      const turn=a+t*(1.4+.8*Math.sin(lane*2.1));
      return {x:r*Math.cos(turn),y,z:r*Math.sin(turn)*.86};
    },.018+.009*(.5+.5*Math.sin(lane)),18);
  }
  for(let branch=0;branch<80;branch++) {
    const y0=-5.03+branch*.1278, a=branch*2.399+phase;
    tube(t=>{
      const y=y0+.045*Math.sin(Math.PI*t), r=radius(y);
      const reach=.42+.50*t;
      return {x:r*reach*Math.cos(a+.55*(1-t)),y,z:r*reach*Math.sin(a+.55*(1-t))*.86};
    },.022,12);
  }
  // Irregular fenestrated lamellar patches merge visually into the tubules.
  // Holes remain open, rather than filling the matrix with solid stacked disks.
  for(let patch=0;patch<80;patch++) {
    const y0=-5.03+patch*.127+.025*Math.sin(patch*4), angle=patch*2.399+phase;
    const base=points.length, nu=18, nv=9;
    for(let i=0;i<=nu;i++) for(let j=0;j<=nv;j++) {
      const u=(i/nu-.5)*2, v=(j/nv-.5)*2;
      const y=y0+.10*u+.085*Math.sin(u*3+patch)*Math.cos(v*2+patch);
      const r=radius(y)*(.60+.17*Math.sin(patch*1.3)**2), x=u*r, z=v*r*.58*Math.sqrt(Math.max(.06,1-u*u));
      add(x*Math.cos(angle)-z*Math.sin(angle),y,x*Math.sin(angle)+z*Math.cos(angle));
    }
    for(let i=0;i<nu;i++) for(let j=0;j<nv;j++) {
      const u=(i+.5)/nu*2-1,v=(j+.5)/nv*2-1;
      const holeA=Math.pow((u-.28*Math.sin(patch+1))/.22,2)+Math.pow((v-.25)/.32,2)<1;
      const holeB=patch%3!==0 && Math.pow((u+.4)/.17,2)+Math.pow((v+.28)/.28,2)<1;
      if(holeA||holeB) continue;
      const k=base+i*(nv+1)+j;
      faces.push([k,k+nv+1,k+1],[k+1,k+nv+1,k+nv+2]);
    }
  }
  return { points, faces, envelope };
}
