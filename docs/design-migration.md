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

- `/`: current design, always, regardless of previous previews.
- `/?design=next`: new design with a Current / New switch.
- `/?design=classic`: current design with the same switch for comparison.
- Unknown design values fall back to the configured default.

The switch preserves other query parameters and the current section anchor.
There is no cookie or local-storage preference that could change the ordinary
visitor experience. Preview links are unlisted, publicly accessible, and marked
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
