# Design and asset maintenance

For routine content edits, start with the [README](../README.md). This reference
covers shared styles, the portrait, and changes to the site's public files.

## Shared typography

The site uses locally hosted **Source Serif 4** at weight 500 for the name, page
and section headings, and **Source Sans 3** at 400/500/600 for body text,
navigation and subsections. A genuine Source Sans 3 italic font supplies journal
and institution italics. No external font service is required at page load.

All text roles are defined together in `assets/css/academic.css`; do not add
page-specific font sizes or weights. Desktop / phone sizes in pixels:

| Role | Size | Weight |
| --- | --- | --- |
| Name | 38 / 32 | 500 |
| Page title | 32 / 28 | 500 |
| Section heading | 24 / 22 | 500 |
| Subsection heading | 17 / 17 | 600 |
| Body and course entries | 17 / 17 | 400 |
| Header position and university | 17 / 17 | 400 |
| Citations and education/teaching institutions | 15 / 15 | 400, with semantic italics |
| Navigation and profile links | 15 / 15 | 500 |

Page-title line height is 1.25, section-heading line height 1.35, and body text
1.7. Text-only pages share one responsive content column, capped at 720 px, for
headings, prose, publications, and the centered Lab notice. Home keeps its wider
portrait/biography layout, with a 220 px desktop portrait. It stacks at 720 px
and below; phone profile links use two columns. Home, Research, and Teaching
retain visually hidden page titles.
WHEAT Lab and Contact use the shared section-heading style for their visible page
headings, while retaining semantic h1 elements.
The font binaries and licenses are committed under `assets/fonts/`; provenance
is recorded in `docs/font-assets.json`.


## Shared layout files

- [academic.html](../_layouts/academic.html) supplies the common page layout.
- [academic.css](../assets/css/academic.css) controls all five pages' typography,
  widths, spacing, and responsive layout.
- [academic-header.html](../_includes/academic-header.html) supplies the identity
  and navigation; [academic.js](../assets/js/academic.js) controls the phone menu.
- [academic-profiles.html](../_includes/academic-profiles.html) renders professional
  links from `academic.profiles` in [_config.yml](../_config.yml).

Keep one shared style per text role. Check all five pages at desktop, tablet,
and phone widths after changing shared styles. The current content and design
choices are recorded in [the implementation brief](../IMPLEMENTATION-BRIEF.md).

## Replace the portrait

The displayed image is [assets/img/portrait.jpg](../assets/img/portrait.jpg).
The current image is 1122 × 1402 pixels, approximately 424 KB, with the original
framing and no additional sharpening. Its source and encoding are recorded in
[portrait metadata](portrait-optimization.json).

1. Replace `assets/img/portrait.jpg` with the approved web-ready JPEG. Retain a
   sufficiently large original for sharp display; update the metadata record if
   replacing the source image.
2. Calculate the new file's SHA-256 hash from the project folder:

   ```sh
   shasum -a 256 assets/img/portrait.jpg
   ```

3. Set `academic.portrait_version` in `_config.yml` to the first **12 characters**
   of that hash. Update `academic.portrait_alt` if needed.
4. Restart the local preview and check the portrait on desktop and phone.
5. Build and verify in a separate directory:

   ```sh
   ./scripts/build --destination /tmp/qingyu-production
   ./scripts/verify-build /tmp/qingyu-production
   ```

The version keeps the image URL stable during text-only updates and changes it
when the image changes. Verification reports the required version if it is stale.
Keep the raw source photograph private and outside the generated site.

## Add files or change the site structure

The production output is limited to the files explicitly listed in
[scripts/verify-build](../scripts/verify-build). Adding a public page, image, or PDF
requires reviewing that list and the exclusions in `_config.yml` as well as the
content change. Run the build and verifier before publishing.

There is currently no public CV link or PDF. The Lab's request that applicants
email their own CV is separate. If adding a CV later, review the intended file,
link, configuration exclusions, and verifier together.

Source documents, original photos, and local review records remain ignored by
Git and excluded from generated output. Do not upload them as website assets.

Keep the Beautiful Jekyll credit and [MIT license](../LICENSE). Review dependency
and theme upgrades separately from content edits; see
[local setup](LOCAL-PREVIEW.md) and [upstream provenance](UPSTREAM.md).
