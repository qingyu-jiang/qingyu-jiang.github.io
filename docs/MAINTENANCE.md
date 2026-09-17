# Design and asset maintenance

For routine content edits, start with the [README](../README.md). This reference
covers shared styles, the portrait, and changes to the site's public files.

## Shared typography

The site uses locally hosted **Source Sans 3** for every text role, with genuine
400/500/600 weights and a separate italic font for intentional journal italics
and the Lab coming-soon notice. No external font service is required at page load.

Typography and spacing are centralized in the shared variables and styles in
`assets/css/academic.css`; use the shared text roles instead of page-specific
font or spacing overrides. Letter spacing is normal. Desktop / phone sizes in pixels:

| Role | Size | Weight |
| --- | --- | --- |
| Name | 38 / 32 | 600 |
| Page title and major section heading | 20 / 20 | 600 |
| Smaller subsection heading | 17 / 17 | 600 |
| Body, education, and course entries | 17 / 17 | 400 |
| Publication entries and current-project titles | 15 / 15 | 400 |
| Header position and university | 17 / 17 | 400 |
| Supporting details, including the footer | 15 / 15 | 400 |
| Navigation and profile links | 15 / 15 | 500 |

The shared header joins position and university with a comma: “Assistant Professor,
University of Idaho”. It uses 17 px regular text, 1.50 line height, and the original
muted text color. Keep it on one line when space permits and let it wrap naturally
on narrow phones; do not insert a forced line break.

Page titles and major section headings use the shared `--type-section: 1.25rem`
(20 px) at every width, with 600 weight, 1.35 line height, the existing heading
color and spacing, and natural wrapping. This role covers Education, all Research
areas, WHEAT Lab, Join the Lab!, Contact, and the 404 page. All four Teaching
role headings remain semantic `h2` elements but share the `h3` subsection style
through `h3, .teaching-role > h2`: 17 px, weight 600, and 1.40 line height,
matching the Lab application headings. No page-content heading is larger than
20 px. Other smaller subsection headings also use 17 px; the separate site
identity name retains its 38/32 px scale.

Name line height is 1.25; page titles and major section headings use 1.35,
smaller subsection headings 1.40, and body text 1.50. These are unitless values.
Prose paragraphs have a 12 px gap. Major sections have a 28 px visible gap on
desktop and 24 px at the existing 600 px phone breakpoint. A section heading
has a 12 px gap before its content. Paragraph margins must not add extra space
to section gaps; use the shared flow rules instead of stacking margins and
padding on adjacent elements.

Text-only pages share one responsive content column, capped at 720 px, for
headings, prose, publications, and the centered Lab notice. Home keeps its wider
portrait/biography layout, with a 220 px desktop portrait. It stacks at 720 px
and below; phone profile links use two columns. Home, Research, and Teaching
retain visually hidden page titles. WHEAT Lab, Contact, and the 404 page use the
shared 20 px major-section style for their visible h1 headings. There is no
larger page-title tier.
The full WHEAT Lab h1 is centered within the existing 720 px reading column,
alongside the already centered coming-soon notice. Lab body text and other
headings remain left-aligned.
The two font binaries and shared license are committed under `assets/fonts/`;
provenance is recorded in `docs/font-assets.json`. The retained regular and italic
WOFF2 files total 57,256 bytes.

Research publications and the two current-project titles share Source Sans 3,
15 px, weight 400, 1.50 line height, and muted `#596562` text. These publication
values were restored from `assets/css/academic.css` at commit `0c2776b`; they
supersede the subsequent 17 px body-text treatment. Keep `.citation-details` and
`.project-title` in one shared style. The project titles use normal citation
text, without journal italics or link styling. “Selected Publications” and
“Current Projects” retain the shared subsection-heading style and tighter
spacing. Each citation is one paragraph:
authors and year, article title, italic journal and volume, issue/pages where
supplied, a clickable DOI, then “[PDF]”. Both links retain the existing DOI
publisher destination; these are not direct PDF download URLs. PDF anchors use
`publication-pdf` to remove their underline while retaining a visible keyboard
focus indicator. The PDF label alone uses the shared 600 weight as a non-color
link cue; citation text remains regular. Keep this styling scoped to PDF links.
Preserve the approved author order and citation wording, including the two
user-supplied entries that omit article numbers.

Instructor, Co-Instructor, and Graduate Teaching Assistant headings combine the
role and university with a comma. Keep each role label at weight 600; wrap the
comma and university together in `.role-university` at regular weight 400 and
`font-style: normal`, inheriting the heading size and color. All four role
headings, including Guest Lecturer, use the same 17 px subsection style described
above. Every `.course-list` has no extra margin between items, retaining normal
17 px regular text and 1.50 line height. Keep the 12 px heading-to-content gap
and 28 px desktop / 24 px phone separation between role blocks. All four Guest
Lecturer entries also use upright university names, keeping each course and its
university together at the normal 17 px course size. Entries may wrap naturally
on smaller screens; publication journal italics remain unchanged.

Contact begins “Let’s Get in Touch!” in the shared major-section style. Its
address is one paragraph with line breaks between the name, office, department,
university, street address, and city/postal line. There is no extra paragraph
gap between the street and city. The separate email group retains its approved
28 px desktop / 24 px phone gap. Identity and address values remain in the shared
settings; the email stays obfuscated as plain text.


## Shared layout files

- [academic.html](../_layouts/academic.html) supplies the common page layout.
- [academic.css](../assets/css/academic.css) controls all five pages' typography,
  widths, spacing, and responsive layout.
- [academic-header.html](../_includes/academic-header.html) supplies the identity
  and navigation; [academic.js](../assets/js/academic.js) controls the phone menu.
- [academic-profiles.html](../_includes/academic-profiles.html) renders professional
  links from `academic.profiles` in [_config.yml](../_config.yml). Empty URLs
  appear as placeholders in local preview and are omitted from the public site.

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
