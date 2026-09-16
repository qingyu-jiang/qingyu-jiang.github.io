# Current implementation decisions

The website uses Beautiful Jekyll 6.0.1 in this project folder. The latest supplied
**Website_v3.docx** governs the current content and layout revision, superseding
v2 and the original brief where specified. Preserve the responsive portrait layout and
accessible navigation. The settled typography uses self-hosted Source Serif 4
(500) and Source Sans 3 (400/500/600 plus regular italic), with one shared style
per text role.
Page titles use 32/28 px at 1.25 line height; section headings 26/24 px at 1.35;
subsections and body 17 px; citations, institutions and navigation 15 px.
Body line height is 1.7. Teaching starts visibly with Instructor; its page title
is visually hidden. WHEAT Lab and Contact page headings use the shared section
style (26/24 px), while keeping their semantic h1 level. See README.md for the
complete shared scale.

- Identity: Qingyu Jiang, Assistant Professor, University of Idaho. The supplied
  biography uses the fuller description “Assistant Professor of Psychology.”
- GitHub account: `qingyu-jiang`; private repository: `qingyu-jiang.github.io`.
- Five-page navigation: Home · Research · Teaching · WHEAT Lab · Contact.
- Home uses the opening third-person biography beside the portrait, icon-and-text
  profile links, and stacked, left-aligned education. The WHEAT name is plain text.
  The three former research paragraphs are removed from Home. Education uses
  “PhD in Child, Youth, and Family Studies, 2023” and “BA in Psychology, 2016.”
- Research starts with the exact overview supplied in v3, then three text-only
  research areas. The first area opens “She examines.” Image placeholders and
  the extra Scholar link are removed. Preserve all five verified full-author
  publication citations and DOI links. Current Projects has two plain paragraphs
  without bullets. The Research page heading remains visually hidden.
- Teaching contains eleven course entries grouped by the four supplied roles,
  with institution names and no course dates. The new list replaces the former
  mentoring and service summaries.
- WHEAT Lab remains a dedicated page. Center the italic coming-soon sentence.
  Use the shorter v3 recruitment sentence, without funded/one-year terms or the
  former specific-interest sentence. Application email and research-area phrases
  are plain text; the standalone email is removed.
- Contact displays `qjiang [at] uidaho [dot] edu` as plain text derived from the
  shared email setting, plus the supplied office and mailing address. Keep the
  Home Email link available.
- Content sections use whitespace instead of dividing lines. Keep the navigation
  divider and the footer boundary. Typography sizes and weights remain shared.
- Missing external profile destinations remain clearly marked pending supplied
  URLs. Research is intentionally text-only, with no image placeholders.
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
