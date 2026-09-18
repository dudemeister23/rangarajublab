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

## Enclosing dendritic mesh, September 17, 2026

First local review version based on the two PNGs supplied by Fabian:
`design/references/2026-09-17/Microns dendrite mesh.png` and
`design/references/2026-09-17/Microns dendrite mito mesh.png`.
The message screenshot supplies context for combining spines and mitochondria;
it does not authorize publication. The source PNGs remain outside public assets
and are not included in the website bundle.

The separate thin dendrites on each side are replaced by one translucent,
triangulated shaft with irregular neck lengths and enlarged spine heads.
Existing teal envelope and gold crista particles now sit inside the shaft.
The shaft varies in caliber, and the mitochondrial projection follows its
center and local width. Pointer displacement is bounded by the shaft silhouette.
The vertical composition preserves the existing side gutters and typography.
The wireframe stays stationary; mitochondrial particles retain slow independent
rotation, local pointer response, and the red spine puncta retain their twinkle.
Mobile spines are shortened and moved outward to keep the text clear.

`design/dendriteGeometry.ts` creates original illustrative geometry from these
visual references. No original 3D mesh, experimental dimensions, or hidden
surfaces can be recovered from the PNGs. The new wireframe is not a traced
reconstruction. Spine/shaft joins use overlapping surfaces, not watertight
topology. Axial and transverse display scales adapt separately to the viewport;
the composition is not a quantitative anatomical scale model.

Static rear/front membrane layers are rasterized only on resize or theme
changes. Particle batching remains in place. Reduced motion freezes rotation
and idle twinkle while retaining proximity brightness feedback.

Validation: production build and whitespace checks pass. A TypeScript check of
the application sources passes using a temporary config excluding the nested
`.claude` worktrees and build output; the unrestricted repository check stalled
and was stopped. Browser review covered desktop Dark and Light, scrolling,
390px mobile, pointer response, and zero recorded console errors. Two successive
screenshots of the illustration were byte-identical under reduced-motion
emulation; the emulation and viewport overrides were restored afterward.
Changes remain local, uncommitted and unpublished, pending visual review.

## Reference-derived point cloud, corrected direction, September 17

Fabian rejected the first combination of the old site geometry with approximate
spines and asked to treat the supplied images as primary. He explicitly selected
recreating their shapes interactively. This supersedes the preceding local pass.

The active renderer now uses projected point coordinates sampled directly from
the paired PNGs. `scripts/sample_dendrite_reference.py` preserves the grayscale
dendrite contours from the mesh-only image and obtains mitochondrial placement,
including the small separate fragments, from the green segmentation in the
combined image. It writes 32,226 mesh samples and 15,128 mitochondrial samples
into `design/assets/dendrite-reference.bin` (284,124 bytes before compression).
The original PNGs are retained as provenance but are not deployed as assets.
The sampled derivative is included in the local website build.

The original image plane is rotated into the established side margins and
mirrored on the right. Scaling is uniform, so the supplied proportions and spine
spacing remain intact. Gray dendrites and green mitochondria replace the old
teal/gold procedural mitochondria and red puncta. The superseded helper is
preserved in `docs/design-history/2026-09-17/` and is not imported or bundled.

Pointer proximity gently displaces the sampled points. Outside that influence,
coordinates return to the reference projection. There is no idle rotation or
invented depth: the PNGs provide a single projected view, not a 3D reconstruction.
True anatomical rotation would require the underlying mesh data. Reduced motion
renders a static view. Mobile uses a narrow edge crop to protect the copy.

Build, scoped application TypeScript, and whitespace checks passed. Browser
review covered desktop Dark/Light, mobile at 390px without document overflow,
and visible pointer displacement. This remains a local, unpublished review.

## Slow rotation and scroll parallax, September 17

At Fabian's request, the reference-derived forms now turn gently in the image
plane, through approximately +/-3.15 degrees on a 90-second cycle, mirrored on
the two sides. Dendrite and mitochondrial points share the same rigid transform,
preserving their alignment. This is a rotational sway of the supplied projection,
not a reconstructed 3D axial spin.

Vertical position now follows page scroll progress: the illustration travels
upward by 38% of the viewport height across a full downward page scroll and
retraces its position when scrolling upward. Current document height is read
live, including expanded content. Rotation remains independent of scroll.
Reduced motion disables rotation, parallax, and pointer displacement. Background
animation remains paused while the tab is hidden.

Production build, scoped application TypeScript, and whitespace checks passed.
Browser verification observed about 68px of background travel for 2448px of page
scroll and return travel on upward scrolling. Rotation advanced independently;
reduced-motion emulation reported zero rotation and zero parallax. The preview
remains local and unpublished.

## Asymmetric sculptural interpretation, September 17

Fabian clarified that the references should be a starting point for a creative,
less repetitive composition and specifically rejected the mirrored left/right
appearance. The active renderer now uses two original, deterministic 3D forms
from `design/organicFieldGeometry.ts`. The earlier image-derived renderer is
preserved in `docs/design-history/2026-09-17/reference-projection-ScientificField.tsx.txt`.
The source PNGs and sampled binary remain preserved but are not imported by the
active renderer or included in the current production build.

The left structure is broader, more curved, and has five unevenly placed spines;
the right has its own narrower profile, six different spine attachments, lower
placement, and smaller transverse scale. Each has a distinct set of unequal
mitochondrial compartments with translucent green surface particles and locally
winding internal folds. Sparse mesh edges and depth-shaded particles retain the
source renderings' visual character without copying their silhouettes. These
are artistic 3D models, not recovered specimen geometry or quantitative anatomy.
Spine joins are overlapping illustrative surfaces rather than watertight meshes.

The two structures rotate independently around their long axes, approximately
one revolution per 7.5 and 9.5 minutes in opposite directions, with small distinct
tilts. Their full-page scroll travel is 38% and 27% of viewport height. These
changes supersede the mirrored 2D sway. Pointer interaction, reduced-motion
handling, hidden-tab suspension, and narrow-screen text protection remain.

Verification: finite coordinates and valid edge indices for both forms (32,512
and 34,764 particles); production build, scoped TypeScript, and whitespace checks;
desktop Dark/Light, scrolling, mobile layout at 390px without horizontal document
overflow, and no recorded browser errors. Changes remain local and unpublished.

## Smooth scroll following and visible rotation, September 17

Removed the 22ms render gate, which skipped alternate frames on a 60Hz display.
The illustration now renders on each animation frame. Scroll following uses a
75ms exponential response, independent of frame rate, to absorb discrete wheel
steps and ease reversals before settling at the target position. Pointer easing
is also time-based. Existing asymmetric scroll travel distances remain intact.

Axial rotation increased to 0.065 and 0.053 radians/second, approximately 97 and
119 seconds per revolution. Browser timing measured 0.06485 radians/second on
the left. Downward and upward scroll checks reached their expected offsets; one
upward check was within 0.02px of its target while settling. Temporary canvas
instrumentation measured 6.70ms average draw work before and 7.46ms afterward
at a 1348x1224 viewport. These are local draw timings, not total frame timings or
a guaranteed device frame rate. Instrumentation was removed after measurement.

Production build, scoped TypeScript, and whitespace checks pass. The revision
remains local and unpublished.

## Continuous lower shaft and elongated lower-left mitochondrion, September 17

Fabian identified a short, blob-like lower-left mitochondrion and a dendrite
that faded to an exposed end near the bottom of the page. The lower-left
compartment now extends from axial position 4.25 to 11.7 instead of 5.25,
retaining local radius changes and newly sampled internal folds throughout.
Both dendritic shafts extend from -9 to 12 with the previous sampling density.
The axial opacity fade was removed, so the shafts continue through the viewport
boundary without thinning into darkness. Existing rotation and scroll easing
are unchanged.

Verified the Contact/footer view at maximum page scroll in the browser: the
lower-left mitochondrion is elongated and both shafts continue below the screen.
A numerical coverage check passed for 1,440 combinations of desktop/mobile
viewport, rotation time, and top/bottom scroll position; shaft endpoints stayed
outside the visible vertical range. Geometry remained finite with valid edges.
Production build, scoped TypeScript, and whitespace checks pass. Local only.

## Rotation reduced by 55%, September 17

At Fabian's request, both axial rotation rates are now 45% of their previous
values: left 0.02925 radians/second and right 0.02385 radians/second. Scroll easing,
parallax, geometry, and pointer interaction are unchanged. Local only.

Publication of the final sculptural implementation and 55% rotation reduction
was authorized by Fabian on September 17, 2026. Source images, the superseded
sampled binary, sampling utility, and intermediate renderer snapshots are retained
locally as working references; the published implementation uses only
`ScientificField.tsx` and `organicFieldGeometry.ts`.
