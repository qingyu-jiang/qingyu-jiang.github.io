# Current implementation decisions

The website uses Beautiful Jekyll 6.0.1 in this project folder. The latest supplied
**Website_v2.docx** governs the current content and layout revision, superseding
the original brief where they differ. Preserve the responsive portrait layout and
accessible navigation. The settled typography uses self-hosted Source Serif 4 (500) and Source Sans 3
(400/500/600 plus regular italic), with one shared style per text role.
Page titles use 32/28 px at 1.25 line height; section headings 26/24 px at 1.35;
subsections and body 17 px; citations, institutions and navigation 15 px.
Body line height is 1.7. See README.md for the complete shared scale.

- Identity: Qingyu Jiang, Assistant Professor, University of Idaho. The supplied
  biography uses the fuller description “Assistant Professor of Psychology.”
- GitHub account: `qingyu-jiang`; private repository: `qingyu-jiang.github.io`.
- Five-page navigation: Home · Research · Teaching · WHEAT Lab · Contact.
- Home uses all four supplied third-person biography paragraphs, icon-and-text
  profile links, and vertically stacked, left-aligned education. Education uses
  “PhD in Child, Youth, and Family Studies, 2023” and “BA in Psychology, 2016.”
- Research begins with the three named research areas and includes five selected
  publications with full author lists, plus two current AI projects. Preserve
  publication metadata verified against publisher records. The generic visible
  Research introduction is removed; a visually hidden page heading remains.
- Teaching contains eleven course entries grouped by the four supplied roles,
  with institution names and no course dates. The new list replaces the former
  mentoring and service summaries.
- WHEAT Lab has a dedicated page with the supplied recruitment and application
  instructions. It also appears in Home and navigation; the earlier restriction
  to the bottom of Research no longer applies. The detailed recruitment copy
  takes precedence over shorthand in the document’s overview table.
- Contact includes the supplied email, office, and complete mailing address.
- Missing external profile destinations and research imagery must remain clearly
  marked pending approved choices; do not fabricate links or study figures.
- The selected root `photo.png` supplies the full-resolution optimized
  `assets/img/portrait.jpg`. Alternative-photo comparison is complete and its
  tooling has been removed.
- The website’s CV control and placeholder are removed. No CV PDF is public or
  linked. References to applicants sending their CV remain in lab instructions.
- Private review is the current mode: GitHub Pages is unpublished, the repository
  is private, and the Academic website workflow is disabled. Use the local preview
  at http://127.0.0.1:4001 while editing. Do not republish without Qingyu’s explicit
  request.
- Production builds retain the future public URL and indexable metadata; building
  locally does not publish. Local previews add a notice and noindex metadata.
- The personal repository remains connected as `origin`; `upstream` retains the
  theme source. The workflow has manual runs only, with publishing disabled by
  default. A future launch must restore Pages, HTTPS, and the `main` deployment
  environment, then deliberately enable and run the workflow with `publish: true`.

See README.md and docs/DEPLOYMENT.md for current commands and maintenance.
The original brief and dated review history are preserved locally under
contexts/review-history/ and excluded from Git and generated output. Source
documents are review material and must never appear in the public artifact.
