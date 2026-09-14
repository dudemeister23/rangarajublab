# Mitochondrial side illustration

Updated September 14, 2026. Local visual revision, not yet published.

## Reference evidence

Primary reference: Shah et al., *Mitochondria structurally remodel near synapses
to fuel the sustained energy demands of plasticity*, bioRxiv preprint,
[PMC version 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC12407993/).
The website links version 2; that publisher page was not retrievable during this
review. Morphology decisions here are based on the accessible version 1,
particularly the reconstructed meshes in Figures 3 and 4 and their captions.

The paper distinguishes long dendritic mitochondria with tubular and network
cristae from short axonal mitochondria with stacked lamellar cristae. Figure 3
shows irregular, locally widened and constricted mitochondrial segments, and
Figure 4 describes increased branching and connectivity with homeostatic scaling.
The sampled reconstructions are local regions, not complete organelles.

Additional primary sources located:

- [Perkins et al., neuronal electron tomography, 1997](https://pubmed.ncbi.nlm.nih.gov/9245766/): narrow tubular crista junctions and tubular cristae that can merge into lamellar compartments.
- [Wang et al., Communications Biology, 2024](https://www.nature.com/articles/s42003-024-06045-4): 3D segmentation and reconstruction of murine hippocampal mitochondria, cristae, and intracristal spaces; publicly linked annotated volume data.
- [EMPIAR-11542](https://www.ebi.ac.uk/empiar/EMPIAR-11542/): cryo-electron tomography of isolated C. elegans mitochondria and released crista membranes. Located as an actual public scan archive, but not used as a neuronal specimen or embedded asset.

## Actual mesh availability

The public [Shah et al. repository](https://github.com/Rangaraju-Lab/Shah-et-al-2025)
contains reconstruction scripts and a mesh-analysis notebook referencing
`Demo Images and Meshes/control 4/OMM_remeshed.stl`, `IBM_remeshed.stl`, and
`IMM.stl`. Its mesh README refers to an Edmond dataset, but the public main tree
contains no STL meshes, and no Rangaraju dataset was returned by Edmond's public
search API during this review. This is a retrieval limitation, not proof that
the data do not exist. No raw scan or author mesh has been downloaded or reused.

## Implementation and limits

`design/mitochondrialGeometry.ts` creates two deterministic, original illustrative
variants. An elongated curved envelope has local changes of caliber. Sparse
outer and inner boundary contours reveal irregular tubular paths, local necks,
and perforated membrane patches. Triangulated surfaces are depth-sorted and
shaded during rotation, replacing the old gyroid point cloud. Cursor movement
can tilt the complete form but no longer pushes individual membrane vertices
apart. Dendritic spines and their twinkle remain unchanged.

These are qualitative visual references, not traced contours, segmented scans,
quantitative scale models, or a before/after representation of experimental
conditions. Tubules and sheets overlap visually; their junctions are not a
watertight anatomical mesh. Rounded ends, transparency, color, rotation, and
relative dimensions are artistic choices. The double-envelope separation is
exaggerated for legibility. No molecular-resolution claim is made.

For a later direct-data version, the lab's matched OMM/IBM/IMM meshes with their
original transforms and reuse terms would allow simplification and conversion
into a small browser asset without inventing missing surfaces.

## Verification

Production build and whitespace checks pass. Browser review covered desktop
Light and Dark, 390-pixel mobile layout, and the reduced-motion media preference.
Mobile forms were moved farther into the margins to protect the text column.
The final desktop preview reported no browser console errors. Geometry checks
confirmed finite coordinates, valid face/contour indices, and bounded extents
before the final mesh-resolution reduction. The script adds approximately 0.73
kB to the compressed application bundle compared with the prior published build.
The full TypeScript check again exceeded 30 seconds and was stopped without a
result; the successful Vite build does not replace that check.

## Point-cloud treatment restored after visual review

The user preferred the earlier dynamic particles to the filled surfaces. The
renderer now draws depth-shaded teal envelope and gold crista points from the
same revised geometry, with slow rotation, pointer tilt, and reversible local
particle displacement. No solid faces or contour lines are drawn. Reduced
motion disables rotation and particle displacement. Mobile sampling is reduced
and the forms stay in the outer margins. This supersedes the surface-rendering
and rigid-pointer behavior described above; anatomical limitations still apply.

## Denser particles

Surface sampling was increased to approximately twice as many particles: the
envelope uses 96 by 48 samples, tubules use eight radial samples with more
longitudinal samples, and the perforated patches use an 18 by 9 grid. Particle
size, opacity, geometry proportions, and motion remain unchanged.

## Alignment between dendrites

On desktop, each mitochondrial center now follows the midpoint between its two
actual dendritic shafts, with its tilt following the local midpoint slope. Both
centers share the same vertical position. Size is limited by the available gap
so the rotating forms fit between the shafts. The mobile layout retains one
dendrite per side and the existing edge placement. Build and desktop visual
verification passed.

## Threefold vertical extension

At the user's request, each cloud's projected vertical span is now three times
its prior length, while preserving width and particle styling. Desktop clouds
follow the dendrite-pair midpoint along their full length so the longer forms
remain between the curved shafts. Verified in the hero preview; build passed.

## Repeated units instead of stretching

The threefold projection stretch was removed following the user's correction.
Each side now repeats the original unit three times at axial offsets of -3.6,
0, and 3.6, preserving its local fold proportions and particle spacing. The
long composition still follows the gap between the dendritic shafts.

The New hero also restores the Current hero's bold Inter typography, gold Brain
and teal Energetics colors, heading drop-shadow-md, and semibold subtitle with
drop-shadow. The New composition retains its stacked heading and light/dark
background-aware base text color. Production build and desktop/mobile visual
checks passed. Changes remain local pending publication.

## Single continuous body, final correction

The repeated complete units were replaced by one envelope spanning -5.4 to 5.4,
with caps only at its two outer ends. New tubular paths, necks, and perforated
folds populate that entire length at the original local scale and approximately
the original spacing. No axial projection stretch or repeated-unit seams remain.
This supersedes both prior extension approaches. Build and hero visual checks
passed; typography remains as approved in the preceding revision.

## Visible side gutters during scrolling

For desktop/tablet widths above 760px, the scrolling content and footer now use
70% of the viewport, leaving 15% side gutters. Both dendrite pairs moved outward
into those gutters, and their lateral sway was reduced so the mitochondrial
lanes remain outside the content surface. The mitochondria still derive their
position and size from each pair. The narrow mobile composition is unchanged.
Verified visibility beside the scrolled Research section; build passed.

## Particle interaction performance

Stable sampling retains 34% of surface vertices. Particle radii increase by
1.5x and base opacity by 0.06 to preserve visible coverage. Rendering now uses
12 brightness/material batches per side, reusable typed coordinate buffers,
no per-frame particle objects or depth sorting, viewport culling, early pointer
radius rejection, and a screen-row lookup for the dendritic lane. Mobile skips
alternate samples before projection. The frame throttle now permits roughly
60 Hz instead of the prior 30 Hz when the device has sufficient capacity.

Temporary local instrumentation averaged canvas draw work over ten rendered
frames. At approximately 1347 by 1223 pixels in the in-app browser, the old
renderer measured 268.11 ms; the optimized renderer measured 8.42 ms and 8.24 ms
after a pointer pass through the cloud. These are local draw timings, not total
browser frame times or a device-wide guarantee. Instrumentation was removed
after measurement. The pointer displacement, rotation, reduced-motion handling,
and the anatomical geometry are retained.

## Independent slower rotation

Rotation angle now depends only on elapsed animation time, at two-thirds of the
previous angular speed on each side. Pointer-driven global angle and tilt were
removed; local particle displacement remains. Dendritic twinkle timing and
reduced-motion behavior are unchanged. Build and browser rendering checks pass.

Publication of the final implementation was authorized on September 14, 2026.
Earlier local/pending notes above describe intermediate review states.
