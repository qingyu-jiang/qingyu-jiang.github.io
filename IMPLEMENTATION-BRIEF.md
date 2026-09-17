# Current implementation decisions

The website uses Beautiful Jekyll 6.0.1 in this project folder. The latest supplied
**Website_v3.docx** and subsequent approved user edits govern the current content
and layout revision, superseding v2 and the original brief where specified.
Preserve the responsive portrait layout and accessible navigation. The settled
typography uses self-hosted Source Sans 3
throughout, with genuine 400/500/600 weights, regular italic, normal letter
spacing, and one shared style per text role.
The site identity name uses 38/32 px, weight 600, and 1.25 line height. Page
titles and major section headings use the shared `--type-section: 1.25rem`:
20 px at every viewport, weight 600, and 1.35 line height. This includes
Education, all Research areas, WHEAT Lab, Join the Lab!, Contact, and the 404
page. All four Teaching role headings remain semantic `h2` elements and share
the `h3` subsection style through `h3, .teaching-role > h2`, matching the Lab
application headings: 17 px, weight 600, and 1.40 line height. Other subsections
use this same scale. Preserve the existing heading color, spacing, and natural wrapping.
No page-content heading is larger than 20 px; there is no larger page-title tier.
Body, education and course entries, and header position/university use 17 px
at weight 400. Publication entries, current-project titles, and footer details
use 15 px at weight 400; navigation and profile links use 15 px at weight 500. Body line height is 1.50. Inline teaching
universities inherit their heading or course size. University names are upright
in the three teaching role headings and all four Guest Lecturer course entries.
Prose paragraph gaps are 12 px; major-section gaps are 28 px desktop / 24 px
at the existing 600 px phone breakpoint; section headings have a 12 px gap before
content. Shared spacing rules prevent paragraph margins from increasing section
gaps. Teaching starts visibly with Instructor; its page title is visually
hidden. WHEAT Lab, Contact, and the 404 page use the shared 20 px major-section
style for their visible h1 headings. See docs/MAINTENANCE.md for the complete
shared scale.

- Identity: Qingyu Jiang, with “Assistant Professor, University of Idaho” on one
  shared header line where space permits, wrapping naturally on narrow phones.
  The affiliation uses 17 px regular Source Sans 3, 1.50 line height, and its
  original muted color. The supplied biography uses the fuller description
  “Assistant Professor of Psychology.”
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
- Research has one shortened overview paragraph, omitting the sentence listing
  three complementary areas while preserving the remaining introduction. Its
  three text-only research areas begin “Dr. Jiang examines,” “Dr. Jiang studies,”
  and “Dr. Jiang investigates.”
  The caregiver description is one paragraph; the AI description uses the latest
  user-supplied wording about generative AI support and its implications.
  Publications follow the supplied `papers.docx` structure: authors, year, title,
  journal details, a clickable DOI, and a linked “[PDF]” label. All publication
  entries share Source Sans 3, 15 px, weight 400, 1.50 line height, and muted
  `#596562` text with the two current-project titles. The publication values are
  restored from stylesheet revision `0c2776b`, superseding the 17 px treatment.
  Journal/volume italics remain intentional; project titles use normal citation
  styling. Keep `.citation-details` and `.project-title` in one shared rule.
  PDF links keep their existing DOI publisher destinations; no separate PDF URLs
  were supplied. PDF links omit underlines, with visible keyboard
  focus retained. Preserve approved author order and citation wording; the supplied
  mindful-parenting and infant-neurodevelopment entries omit the article numbers.
  Current Projects has two plain paragraphs without bullets. “Selected
  Publications” and “Current Projects” retain the shared subsection-heading
  style and approved tighter spacing. The Research page heading remains
  visually hidden; no image placeholders or extra Scholar link.
  The PDF label alone is semibold so the link is identifiable without relying on color;
  citation text remains regular.
- Teaching contains twelve course entries grouped by four roles, with no course
  dates. Positive Psychology (PSYC 3600) follows Developmental Psychology
  (PSYC 3050). Instructor, Co-Instructor, and Graduate Teaching Assistant headings
  combine the role and university with a comma. Role labels retain weight 600;
  each comma and university share `.role-university`, using upright regular
  weight 400 and inheriting the heading size and color. All four role headings,
  including Guest Lecturer, use the shared 17 px subsection style. All course
  lists have zero extra margin between entries, with normal 17 px regular text
  at 1.50 line height. The heading-to-content gap remains 12 px and role blocks
  retain 28 px desktop / 24 px phone separation. Guest Lecturer entries place
  the university after each course name, also separated by a comma; these
  university names are upright. The course list replaces the former mentoring
  and service summaries.
- WHEAT Lab remains a dedicated page. Center its full h1 heading within the
  existing 720 px reading column, retaining the shared 20 px heading style. Keep
  the italic coming-soon sentence centered; body text and other headings remain
  left-aligned.
  Accept undergraduate assistants and welcome graduate/postdoctoral inquiries;
  do not imply a specific postdoctoral opening. Application email and research-area
  phrases are plain text; the standalone email is removed.
- Contact begins “Let’s Get in Touch!” and groups the name, office, department,
  university, street address, and city/postal line in one paragraph with line
  breaks. The city directly follows the street without an extra paragraph gap.
  A separate email group follows with its existing 28 px desktop / 24 px phone
  gap, displaying
  `qjiang [at] uidaho [dot] edu` as plain text. All identity, address, and email
  values come from shared settings. Keep Home Email linked to Contact, not mailto.
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
