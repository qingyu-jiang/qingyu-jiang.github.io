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

The current content revision follows the supplied **Website_v2.docx**. Its detailed
page copy replaces the earlier first-person introduction, teaching summaries, and
Research-only lab note. Navigation is **Home · Research · Teaching · WHEAT Lab ·
Contact**. The original document is private source material, not a website asset.

| File | Page or purpose |
| --- | --- |
| `index.md` | Four-paragraph biography, profile icons/links, and stacked education |
| `research.md` | Three research areas, five selected publications with full author lists, and two current AI projects |
| `teaching.md` | Eleven course entries grouped by Instructor, Co-Instructor, Graduate Teaching Assistant, and Guest Lecturer |
| `wheat-lab.md` | Lab introduction, recruitment information, and application instructions |
| `contact.md` | Email, office, and mailing address |
| `_config.yml` | Identity, affiliation, email, profile links, navigation, and portrait |

Edit paragraphs in Markdown while preserving front matter and permalinks. Research
begins with the three areas; its page heading is available to assistive technology
without repeating a visible introduction. WHEAT Lab has its own page and appears
in the Home biography and navigation. Keep each publication’s complete author
list and verify metadata when updating citations. The two AI entries are current
projects, not published papers.

Keep missing profile destinations and research imagery clearly marked until
approved links and images are available. Do not invent profile URLs or present a
placeholder as a research result. The latest document governs content where it
differs from the original brief; retain previously verified publication corrections.

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
| Section heading | 26 / 24 | 500 |
| Subsection heading | 17 / 17 | 600 |
| Body and course entries | 17 / 17 | 400 |
| Citations and institutions | 15 / 15 | 400, with semantic italics |
| Navigation and profile links | 15 / 15 | 500 |

Page-title line height is 1.25, section-heading line height 1.35, and body text
1.7. Long paragraphs have a responsive reading measure; headings, navigation,
and citations keep their own available width. Home and Research retain their
intentionally hidden page titles. The font binaries and licenses are committed
under `assets/fonts/`; provenance is recorded in `docs/font-assets.json`.

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
