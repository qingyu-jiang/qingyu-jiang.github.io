# Current implementation decisions

The website uses Beautiful Jekyll 6.0.1 in this project folder. The latest supplied
**Website_v3.docx** governs the current content and layout revision, superseding
v2 and the original brief where specified. Preserve the responsive portrait layout and
accessible navigation. The settled typography uses self-hosted Source Sans 3
throughout, with genuine 400/500/600 weights, regular italic, normal letter
spacing, and one shared style per text role.
The name uses 38/32 px, weight 600, and 1.25 line height. Displayed page titles
and major section headings share 24/22 px, weight 600, and 1.35 line height;
there is no larger page-title tier. Subsections use 17 px, weight 600, and
1.40 line height.
Body, education, and header position/university use 17 px at weight 400;
citations, teaching institutions, and footer details use 15 px at weight 400; navigation and
profile links use 15 px at weight 500. Body line height is 1.50.
Prose paragraph gaps are 12 px; major-section gaps are 28 px desktop / 24 px
at the existing 600 px phone breakpoint; section headings have a 12 px gap before
content. Shared spacing rules prevent paragraph margins from increasing section
gaps. Teaching starts visibly with Instructor; its page title is visually
hidden. WHEAT Lab, Contact, and the 404 page use the shared major-section style
for their visible h1 headings, matching Instructor. See docs/MAINTENANCE.md for
the complete shared scale.

- Identity: Qingyu Jiang, Assistant Professor, University of Idaho. The supplied
  biography uses the fuller description “Assistant Professor of Psychology.”
- GitHub account: `qingyu-jiang`; public repository: `qingyu-jiang.github.io`.
  The public website is https://qingyu-jiang.github.io/.
- Five-page navigation: Home · Research · Teaching · WHEAT Lab · Contact.
- Home uses the opening third-person biography beside the portrait, icon-and-text
  profile links, and stacked, left-aligned education. Appointments and academic
  training form two paragraphs with the approved wording. The WHEAT name is plain text.
  The three former research paragraphs are removed from Home. Each education entry
  is one line on desktop and wraps naturally on smaller screens:
  “Ph.D. in Child, Youth, and Family Studies, University of Nebraska-Lincoln, 2023”
  and “B.A. in Psychology, Michigan State University, 2016.”
- Research combines the overview into one paragraph. Its three text-only research
  areas begin “Dr. Jiang examines,” “Dr. Jiang studies,” and “Dr. Jiang investigates.”
  The caregiver description is one paragraph; the AI description uses the latest
  user-supplied wording about generative AI support and its implications.
  Publications follow the supplied `papers.docx` structure: authors, year, title,
  journal details, plain DOI text, and a linked “[PDF]” label. The PDF labels use
  the existing DOI publisher destinations; no separate PDF URLs were supplied.
  Preserve all five verified full-author lists and final publication metadata.
  Current Projects has two plain paragraphs without bullets. The Research page
  heading remains visually hidden; no image placeholders or extra Scholar link.
- Teaching contains eleven course entries grouped by the four supplied roles,
  with institution names and no course dates. The new list replaces the former
  mentoring and service summaries.
- WHEAT Lab remains a dedicated page. Center the italic coming-soon sentence.
  Accept undergraduate assistants and welcome graduate/postdoctoral inquiries;
  do not imply a specific postdoctoral opening. Application email and research-area
  phrases are plain text; the standalone email is removed.
- Contact displays `qjiang [at] uidaho [dot] edu` as plain text derived from the
  shared email setting, plus the supplied office and mailing address. Keep the
  Home Email item linked to Contact, not a mailto destination.
- Text-only pages share a 720 px maximum content column for headings, prose,
  citations, and the centered Lab notice. Home retains a wider portrait/biography
  layout with a 220 px desktop portrait and stacks at 720 px and below; phone profile links use
  two deliberate columns.
- Content sections use whitespace instead of dividing lines. Keep the navigation
  divider and the footer boundary. Typography sizes and weights remain shared.
- All supplied professional profile URLs are configured in `_config.yml`.
  Research is intentionally text-only, with no image placeholders.
- The selected root `photo.png` supplies the full-resolution optimized
  `assets/img/portrait.jpg`. Alternative-photo comparison is complete and its
  tooling has been removed. The portrait URL uses an image-specific SHA-256 prefix
  in `academic.portrait_version`, checked by the build verifier.
- The website’s CV control and placeholder are removed. No CV PDF is public or
  linked. References to applicants sending their CV remain in lab instructions.
- The repository, source files, and Git history are public. GitHub Pages publishes
  the website through GitHub Actions with HTTPS enforced and the `github-pages`
  environment restricted to `main`.
- Use the local preview at http://127.0.0.1:4001 while editing. Local previews add
  a notice and noindex metadata. Production builds use the public URL and
  indexable metadata; building locally does not publish.
- The personal repository remains connected as `origin`; `upstream` retains the
  theme source. The enabled Academic website workflow accepts manual runs only,
  with `publish` defaulting to `false`. Pushing commits makes source changes
  public on GitHub but does not update the website. Publish reviewed updates
  with an explicit manual run from `main` using `publish: true`.

See README.md and docs/DEPLOYMENT.md for current commands and maintenance.
The original brief and dated review history are preserved locally under
contexts/review-history/ and excluded from Git and generated output. Source
documents are review material and must never appear in the public artifact.
