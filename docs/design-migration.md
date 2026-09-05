# Parallel design development

Initial implementation: September 4, 2026.

## Review

The existing site has substantive research, publication, people, and mentoring
content, plus research selection, media playback, and photo interactions.
Its large glass hero panel, dense desktop navigation, repeated rounded cards,
and long linear page make the information compete for attention.

Reference: https://openai.com/index/gpt-6-astra/
Observed patterns: immersive visual opening with user interaction, restrained
typography, keyboard-operable visual controls, and selectable content panels.
This is design inspiration, not a published interaction specification.

The first pass opens up the hero, lets visitors pan the existing image, reduces
navigation density, and supplies an accessible research tab interface. Other
sections remain shared and will be redesigned incrementally. No new scientific
claims or simulated scientific data were introduced.

## Review URLs

- `/`: current design, always, regardless of previous previews, with the Current / New selector visible.
- `/?design=next`: new design with a Current / New switch.
- `/?design=classic`: current design with the same switch for comparison.
- Unknown design values fall back to the configured default.

The switch preserves other query parameters and the current section anchor.
There is no cookie or local-storage preference that could change the ordinary
visitor experience. The new design is accessible through the public selector and marked
noindex; they are not authentication or a private staging environment.

## Content contract

Both designs run from one App and one deployment. Existing sections share their
components and constants. Hero copy lives in HOME_COPY and research introduction
copy in RESEARCH_COPY in constants.ts. Both research presentations use PROJECTS.
All photographs, publications, team records, and other existing data stay shared.

Edit shared content once. When replacing a section's presentation, first extract
any remaining embedded editorial content into a shared export. Do not copy data
into design-specific files. Design changes in design/next.css are scoped to the
new presentation; content changes are shared, styling changes need not be.

## Publication and final migration

Use the existing GitHub Pages workflow, which deploys main. Do not introduce a
second host, repository, CMS, or long-lived content branch. Both presentations
are delivered together by the existing build.

At final approval, change DEFAULT_DESIGN in design/version.ts to next and deploy.
The explicit classic URL remains available for rollback comparison. To restore
the old public default, change the setting back to classic and deploy.

## Validation

Run npm run build and npx tsc --noEmit. Check a plain URL after visiting the new
preview, both switch directions, section anchors, an invalid design parameter,
all research panels, arrow/Home/End tab keys, the image slider, and narrow-screen
navigation. Ensure shared content changes appear in both presentations.

Browser review of the first pass covered desktop and 390px mobile layouts.
Existing Tailwind CDN and third-party embeds remain part of the original site;
production CSS bundling and a full accessibility audit remain future work.


## Persistent scientific environment, September 4 refinement

The first visual pass was too conservative. The preview now uses a fixed canvas
with two illustrative mitochondrial envelopes and inner-membrane folds. The
forms stay at the viewport edges while the shared content scrolls through a
dark central column. Pointer proximity displaces the points locally; pointer
position and scrolling change orientation. Pause stops automatic and pointer
motion; Rotate forms provides a keyboard-accessible discrete adjustment.
Reduced-motion preference starts the field paused. Rendering stops while the
page is hidden, is capped near 30 fps, and uses fewer points on narrow screens.
The old image-pan slider was removed. The original public presentation and
shared content contract remain unchanged.

Validation: production build and TypeScript check; desktop and 390px mobile
inspection; fixed canvas position during scroll; pause/resume and rotate controls;
reduced-motion emulation; research tabs and version selection. The geometry is
stylized, not a reconstruction from microscopy or experimental data.

## Implicit interaction and descending spines

The next refinement adds a short initial downward growth reveal of dendritic
shafts and spine heads, with soft red fluorescence-like puncta inspired by the
original hero image. These are illustrative geometry and colors, not extracted
microscopy measurements. Pointer proximity extends nearby spine necks subtly.
Visible background controls, geometry labels, and interaction instructions were
removed at Fabian's request. Reduced motion is now read directly from the OS
preference and shows fully grown, static geometry. The design comparison switch
remains available on preview URLs. Desktop and mobile visual checks passed,
with no scene controls or horizontal overflow on the 390px view.

## Labyrinthine cristae refinement

Replaced the twelve evenly spaced disc-like folds with a continuous warped
implicit surface, clipped within the mitochondrial envelope. Nearby samples
connect in 3D to make the folded membrane readable and retain irregular voids.
This is a stylized labyrinth approximation, not a biological reconstruction or
claim that all cristae share this topology. Architectural reference consulted:
https://pmc.ncbi.nlm.nih.gov/articles/PMC2829299/ (electron tomography describes
lamellar and tubular cristae and narrow crista junctions). Desktop visual review,
390px overflow check, build, and TypeScript validation passed.

## Scroll-driven growth

Spine extension now uses the clamped scroll position divided by the current
scrollable document height. At the top growth is zero; at the bottom it is one.
Scrolling upward retraces the same growth curve. The full shafts extend nearly
to the viewport bottom. Elapsed time no longer affects growth. Reduced-motion
mode keeps automatic motion disabled but still updates growth directly with
scroll position. Live document height is recalculated to include expanded
sections. Browser checks verified 0.0000 at top, intermediate values in both
directions, 1.0000 at bottom, and 0.0000 on returning to top in reduced-motion
mode. No scene controls were added.


## Public selector

Fabian authorized displaying the design preview selector on the normal public
homepage. Both versions now show Current / New. DEFAULT_DESIGN remains classic,
so a plain URL always opens the current site. Choosing New only changes the URL
for that visitor; it does not change the public default.

## Rotation independent of scrolling

Removed scroll position from the mitochondrial angle calculation. Rotation now
uses only elapsed animation time and the existing pointer response. Spine growth
still follows page scroll progress. Build, TypeScript, and browser checks passed.

## Widescreen content and team contact fit

The preview's main content and footer now use 80% of available width, capped at
2400px rather than 1040px. Shared section containers and the team/alumni grids
can use that space. Preview-only team layout styles reserve a minimum 300px
for the detail panel, use three or four member columns as space permits, and
contain contact rows with reduced padding and wrapping email text. The PI email
and download row can wrap as well. Original-design styling remains unchanged.
Browser checks at 3840, 1920, 1280, and 390 CSS pixels confirmed no horizontal
page overflow; desktop contact rows and team grids remained within their boxes.

## Daylight reading direction

Fabian clarified that grant reviewers and prospective lab members are the core
readers; the space-inspired dark presentation was too dominant. The preview now
uses white content surfaces, a pale blue-gray background, dark blue-gray text,
and restrained teal accents. Membrane and spine geometry is muted to 42% canvas
opacity with darker, less luminous pigments. Trainee and contact sections were
adapted to light backgrounds, footer text remains readable over the background,
and team role/year labels are at least 14px. Existing scroll growth, independent
rotation, pointer response, rounded transitions, and visible version selector
remain. The original design stays the public default. Build, TypeScript, desktop
visual inspection, and 390px mobile overflow/readability checks passed.

## Stationary spines with proximity illumination

Removed scroll-driven spine extension and pointer-driven branch movement at
Fabian's request. Spines are fully grown at every scroll position. Only red
punctum brightness changes with cursor proximity; neck length, head size, and
branch position remain fixed. Brightness feedback also works with reduced
motion enabled, without introducing geometric motion. Mitochondrial behavior
is unchanged. Build, TypeScript, and browser checks passed; rendered growth was
1.0000 both at the top and after scrolling.

## Slow idle twinkle, September 5

Red puncta now have staggered sinusoidal brightness cycles of roughly 8 to 10
seconds, beneath the existing stronger proximity glow. Spines remain stationary
and fully extended. Reduced-motion mode uses steady idle brightness. Build,
TypeScript, and browser rendering checks passed.

## Light/dark choice with dark default

The New design now defaults to Dark. A bottom-left button switches to Light or
Dark in place, retaining the current section and component state. The selected
theme is recorded in the URL as theme=light or theme=dark, so refresh and version
comparison preserve an explicit choice. Plain new-design URLs default to Dark;
plain site URLs still default to Current. The Current design has no theme toggle.
Canvas membrane colors and opacity change with the theme without restarting its
animation. Static spines, idle twinkle, and proximity feedback remain intact.
Build, TypeScript, both toggle directions, refresh, and classic-default checks
passed.
