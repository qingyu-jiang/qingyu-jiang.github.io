# Qingyu Jiang’s academic website

Beautiful Jekyll 6.0.1 with a custom academic layout.
Future website: https://qingyu-jiang.github.io.
Private source: https://github.com/qingyu-jiang/qingyu-jiang.github.io.

**Private review:** the repository is private, GitHub Pages is unpublished, and the
Academic website workflow is disabled. Continue reviewing locally. Commits and
pushes do not publish the website; launch requires Qingyu’s explicit request.

## Preview and build

```sh
./scripts/bootstrap
PORT=4001 ./scripts/preview
```

Open <http://127.0.0.1:4001>. Stop with **Control-C**. Local previews include a small
notice and `noindex` metadata through `_config.local.yml`. Restart after changing
configuration. [Local setup](docs/LOCAL-PREVIEW.md) covers the pinned runtime.

To build and check the publishable version:

```sh
./scripts/build
./scripts/verify-build
```

Production builds use `_config.yml`, omit the preview notice, and use the public
site URL. Do not run the preview and production build against `_site/` at the same
time; stop the preview first or supply a different `--destination` for the build.

## Content

The current content revision follows **Website_v3.docx**, building on the earlier
v2 copy and the approved shared typography. Home now contains the biography,
profile links, and education; the supplied research overview appears on Research.
Navigation is **Home · Research · Teaching · WHEAT Lab · Contact**. Source Word
documents are private review material, not website assets.

| File | Page or purpose |
| --- | --- |
| `index.md` | Biography and portrait, profile icons/links, and stacked education |
| `research.md` | Research overview, three text-only areas, five full-author publications, and two plain-text AI projects |
| `teaching.md` | Eleven course entries grouped by Instructor, Co-Instructor, Graduate Teaching Assistant, and Guest Lecturer |
| `wheat-lab.md` | Lab introduction, recruitment information, and application instructions |
| `contact.md` | Email shown as [at]/[dot] text, office, and mailing address |
| `_config.yml` | Identity, affiliation, email, profile links, navigation, and portrait |

Edit paragraphs in Markdown while preserving front matter and permalinks. Research
begins with the supplied overview, followed by three text-only areas; do not
restore image placeholders. Keep each publication’s complete author list and
verified metadata. Current Projects uses two separate paragraphs without bullets.
The Home Google Scholar profile remains; Research has no extra Scholar link.

WHEAT Lab accepts undergraduate assistants and welcomes graduate/postdoctoral
inquiries, without implying a specific postdoctoral opening.
Its coming-soon sentence is centered; application instructions and the research
areas reference are plain text. The standalone lab email is removed. Contact
uses `academic-email.html obfuscated=true` to display [at]/[dot] text from the
shared `academic.email` setting. Home’s Email item leads to Contact, so contact
details have one consistent destination.

Keep missing ResearchGate and LinkedIn destinations clearly marked until supplied;
do not invent profile URLs. V3 supersedes earlier content choices where specified.
Preserve the settled typography. Separate content sections with whitespace, keeping
the navigation rule and the footer boundary.

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
portrait/biography layout, with a 220 px desktop portrait and two-column phone
profile links. Home, Research, and Teaching retain visually hidden page titles.
WHEAT Lab and Contact use the shared section-heading style for their visible page
headings, while retaining semantic h1 elements.
The font binaries and licenses are committed under `assets/fonts/`; provenance
is recorded in `docs/font-assets.json`.

## Portrait and CV

The chosen `photo.png` is used as `assets/img/portrait.jpg`: 1122 × 1402 pixels,
424 KB, preserving the full supplied resolution and original framing. The high-quality
JPEG uses no additional sharpening. Its display URL changes with each build so
browsers fetch the updated photo. The original remains at the project root, ignored
by Git and excluded from the site. The temporary portrait comparison has been
removed. Encoding details are in [portrait metadata](docs/portrait-optimization.json).

Website_v2.docx removes the website’s CV control and placeholder. No CV PDF is
public or linked. The lab’s request that applicants email **their CV** remains part
of its application instructions. Adding Qingyu’s CV in the future requires an
explicit content decision and corresponding changes to the output allowlist and
build checks; placing a PDF in the folder alone must not expose it.

## Publishing and maintenance

[Deployment instructions](docs/DEPLOYMENT.md) cover the current private setup and
deliberate launch procedure. The disabled workflow accepts manual runs only. When
re-enabled, it builds and verifies by default; uploading and deploying require
`publish: true` on `main` after GitHub Pages has been restored. Local setup does not
publish. Keep publishing disabled until Qingyu asks to launch.

The original documents and earlier review records remain private under `contexts/`.
The detailed local source mapping remains at `docs/FACT-CHECK.md`, ignored by Git.
Only the selected web portrait and approved site content belong in public output.

Keep the Beautiful Jekyll credit and [MIT license](LICENSE). Review theme and
dependency upgrades separately from content edits; see [upstream provenance](docs/UPSTREAM.md).
