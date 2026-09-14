# Current implementation decisions

The reviewed website uses Beautiful Jekyll 6.0.1 in this project folder, preserving
the agreed white background, charcoal text, Georgia headings, system body text,
and responsive portrait layout. Navigation is Home · Research · Teaching · Contact.

- Identity: Qingyu Jiang, Assistant Professor, University of Idaho.
- GitHub account: `qingyu-jiang`; private repository: `qingyu-jiang.github.io`.
- The four pages use the reviewed CV, research statement, university profile,
  and verified publication records. Maintain the supported roles and dates.
- WHEAT Lab appears only at the bottom of Research.
- The selected root `photo.png` supplies the optimized `assets/img/portrait.jpg`.
  The alternative-photo comparison is complete and its tooling has been removed.
- CV remains a non-clickable **CV** label with **[Coming soon]**. No PDF is public.
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
The full original brief and dated review history are preserved locally under
contexts/review-history/ and excluded from Git and generated output.
