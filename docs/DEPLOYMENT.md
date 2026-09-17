# GitHub Pages publishing

Account: **qingyu-jiang**. Public repository: **qingyu-jiang.github.io**.
Website: <https://qingyu-jiang.github.io/>.

## Deployment configuration

The repository, source files, and Git history are public. GitHub Pages uses
**GitHub Actions** as its publishing source, with HTTPS enforced and the
`github-pages` environment restricted to `main`.

The **Academic website** workflow is enabled and accepts manual runs only.
Its `publish` input defaults to `false`. Committing or pushing changes does not
update the live website; publishing requires a deliberate run from `main` with
**Publish the approved website to GitHub Pages** selected.

`origin` points to https://github.com/qingyu-jiang/qingyu-jiang.github.io;
`upstream` retains the Beautiful Jekyll source. The default branch is `main`.
The project-local GitHub CLI is `.runtime/github-cli/gh`, with configuration in
`.runtime/github-config/`. These directories remain ignored and excluded. Git
identity and the credential helper are configured only for this repository.
After moving the project or signing out, reconnect authentication as
`qingyu-jiang` before pushing.

## Review changes locally

From this project folder:

```sh
PORT=4001 ./scripts/preview
```

Open <http://127.0.0.1:4001/> on this computer. The server binds only to loopback;
this address is not a shareable website link. Review desktop and phone layouts
before publishing. Local previews include a notice and `noindex` metadata;
production builds omit them. A `noindex` directive is not access control.

Build and verify in a separate directory while the preview is running:

```sh
./scripts/build --destination /tmp/qingyu-production
./scripts/verify-build /tmp/qingyu-production
```

Commit and push reviewed source changes. Because the repository is public,
pushed changes can be read on GitHub before they are deployed. Original
documents, raw photos, private review records, installed dependencies, and
generated output must remain ignored and excluded from the repository.

## Publish an update

1. Save and review the latest changes on `main`.
2. Open **Actions → Academic website → Run workflow**.
3. Select `main` and check **Publish the approved website to GitHub Pages**
   (`publish: true`). Leaving it unchecked only builds and verifies.
4. Run the workflow, wait for both build and deployment to succeed, then check
   <https://qingyu-jiang.github.io/> using the checklist below.

The workflow uses Ruby 3.3.8, Bundler 2.5.22, and locked dependencies. Its build
job always builds and checks output. Artifact upload and deployment require both
Boolean `inputs.publish == true` and the `main` ref. The production guard rejects
unexpected output, preview metadata, incorrect domains, incomplete profile
links, and an accidentally exposed CV.
[GitHub's manual-workflow guide](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow).

<a id="launch-only-when-requested"></a>

## Publishing setup

These settings are already configured for this repository. If publishing is
removed or the project moves, use these steps to restore it:

1. Confirm the account and repository. GitHub Free supports Pages from a public
   repository; a personal account needs GitHub Pro to use a private repository.
   A private source repository can still publish a public website.
   [GitHub Pages availability](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
   If the Pages configuration is absent, recreate it; the API uses
   `build_type: workflow`. Use the checked-in workflow rather than adding a
   second template. Enable HTTPS enforcement and restrict the `github-pages`
   deployment environment to `main`.
   [Pages setup and settings](https://docs.github.com/en/rest/pages/pages).
3. Enable **Actions → Academic website**, then follow **Publish an update**.
   Keep publishing manual; a push alone should not deploy.
   [Workflow controls](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows).

## Verify a publication

Open Home, Research, Teaching, WHEAT Lab, and Contact at desktop and phone sizes.
Check navigation, the full-resolution portrait, Home profile links (Email leads
to Contact), all five publications’ plain DOI text and PDF-link destinations,
and the custom 404 page. Full DOI URLs remain visible but are not clickable;
PDF links have no underline but retain visible keyboard focus; their existing
DOI publisher destinations are unchanged. Contact starts with “Let’s Get in
Touch!”, followed by one identity/address paragraph with six lines in this
order: name, department, university, office, street, and city/postal line. The city
follows the street with a line break and no extra paragraph gap. The shared
email remains plain [at]/[dot] text below, retaining its 28 px desktop / 24 px
phone group gap. Verify all twelve teaching entries, including Positive
Psychology immediately after Developmental Psychology, and the inline universities
in role headings and guest courses. University names are upright in the
Instructor, Co-Instructor, and Graduate Teaching Assistant headings and all four
Guest Lecturer course entries. In the three role/university headings, the comma
and university use regular weight 400 while each role label stays 600, with
size and color inherited. Check that all four role headings, including Guest
Lecturer, match the Lab application headings at 17 px, weight 600, and 1.40 line
height. All twelve course entries use normal 17 px regular text at 1.50 line
height with no extra margin between items. Heading-to-list gaps are 8 px;
role blocks retain 28 px desktop / 24 px phone separation. Check
approved publication wording and author order. Citations and the two current-project
titles share Source Sans 3, 15 px, weight 400, muted `#596562` text, and 1.50
line height; journal/volume italics and shared subsection-heading styles remain
intact. Page titles and major section headings use Source Sans 3, 20 px, weight
600, and 1.35 line height on desktop and phone, with natural wrapping and the
existing heading color and spacing. This covers Education, all Research areas,
WHEAT Lab, Join the Lab!, Contact, and the 404 page. All Teaching role headings
use the 17 px subsection style described above; regular-weight university
suffixes are intentional. No page-content heading should exceed 20 px; subsection headings
remain 17 px and the separate site identity name remains 38/32 px. Home education
entries have a 6 px gap. Research retains the approved text-only layout and
three research areas, with the supplied “Her research connects three complementary
areas...” sentence immediately before “Her goal is to use this evidence to inform...”.
The first Research area has a 32 px desktop / 28 px phone gap above its heading;
both “Selected Publications” headings and “Current Projects” have 20 px gaps
above them at every screen width. The full WHEAT Lab h1 and the coming-soon notice are
centered within the existing 720 px reading column; Lab body text and other
headings remain left-aligned. Both Lab application headings have an 8 px gap
before their following paragraphs. The Lab welcomes graduate and postdoctoral
inquiries without advertising a specific postdoctoral opening.

Confirm there is no CV control or placeholder and no exposed or linked CV PDF.
The request for applicants to email their CV is intentional. Faculty Page,
Google Scholar, ResearchGate, and LinkedIn use the supplied profile URLs in
`_config.yml`. The explicit 15-file production allowlist is maintained in
`scripts/verify-build`; source documents and private reviews must never appear
in the artifact.

Confirm canonical URLs, the sharing image, `sitemap.xml`, and `robots.txt` use
the public HTTPS domain. Live pages must omit the local notice and `noindex`
metadata (except the 404 page). Check sharing previews when relevant metadata
changes.

To undo a committed change, use `git revert <commit>` and push the new commit.
Publishing that revert requires a separate manual run.

## Unpublish the website

Disable the **Academic website** workflow, cancel active or queued deployment
runs, and use **Settings → Pages → ⋯ → Unpublish site**. Verify that the live
site is unavailable and the workflow remains disabled. Unpublishing Pages does
not hide the public source repository or its history. If source access also
needs to be restricted, change the repository to private separately and verify
logged-out access. Previous public copies cannot be recalled.
[Unpublishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).

Continue using the local preview while the site is unpublished. Restoring Pages
from a private repository requires an eligible plan; with GitHub Free, return
the repository to public before following **Publishing setup**.
