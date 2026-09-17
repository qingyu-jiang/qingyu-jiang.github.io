# Current implementation decisions

The website uses Beautiful Jekyll 6.0.1 in this project folder. The latest supplied
**Website_v3.docx** governs the current content and layout revision, superseding
v2 and the original brief where specified. Preserve the responsive portrait layout and
accessible navigation. The settled typography uses self-hosted Source Serif 4
(500) and Source Sans 3 (400/500/600 plus regular italic), with one shared style
per text role.
Page titles use 32/28 px at 1.25 line height; section headings 24/22 px at 1.35;
subsections, body, and header position/university 17 px; citations, education/teaching
institutions and navigation 15 px.
Body line height is 1.7. Teaching starts visibly with Instructor; its page title
is visually hidden. WHEAT Lab and Contact page headings use the shared section
style (24/22 px), while keeping their semantic h1 level. See docs/MAINTENANCE.md for the
complete shared scale.

- Identity: Qingyu Jiang, Assistant Professor, University of Idaho. The supplied
  biography uses the fuller description “Assistant Professor of Psychology.”
- GitHub account: `qingyu-jiang`; public repository: `qingyu-jiang.github.io`.
  The public website is https://qingyu-jiang.github.io/.
- Five-page navigation: Home · Research · Teaching · WHEAT Lab · Contact.
- Home uses the opening third-person biography beside the portrait, icon-and-text
  profile links, and stacked, left-aligned education. Appointments and academic
  training form two paragraphs with the approved wording. The WHEAT name is plain text.
  The three former research paragraphs are removed from Home. Education uses
  “PhD in Child, Youth, and Family Studies, 2023” and “BA in Psychology, 2016.”
- Research starts with the exact overview wording supplied in v3, split before
  “Her research connects three complementary areas,” then three text-only research
  areas. The caregiver section also breaks before “She explores how these
  resources relate.” The first area opens “She examines.” Image placeholders
  and the extra Scholar link are removed. Preserve all five verified full-author
  publication citations and DOI links. Current Projects has two plain paragraphs
  without bullets. The Research page heading remains visually hidden.
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
- Missing external profile destinations are marked pending only in local preview
  and omitted from production until verified URLs are supplied. Research is
  intentionally text-only, with no image placeholders.
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
