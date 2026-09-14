# Current implementation decisions

The reviewed website uses Beautiful Jekyll 6.0.1 in this project folder, preserving
the agreed white background, charcoal text, Georgia headings, system body text,
and responsive portrait layout. Navigation is Home · Research · Teaching · Contact.

- Identity: Qingyu Jiang, Assistant Professor of Psychology, University of Idaho.
- GitHub account: `qingyu-jiang`; intended user-site repository: `qingyu-jiang.github.io`.
- The four pages use the reviewed CV, research statement, university profile,
  and verified publication records. Maintain the supported roles and dates.
- WHEAT Lab appears only at the bottom of Research.
- The selected root `photo.png` supplies the optimized `assets/img/portrait.jpg`.
  The alternative-photo comparison is complete and its tooling has been removed.
- CV remains a non-clickable **CV** label with **[Coming soon]**. No PDF is public.
- Production builds are indexable; local previews add a notice and noindex metadata.
- The personal repository is connected as `origin`; `upstream` retains the theme
  source. GitHub Pages uses the prepared Actions workflow with HTTPS and permits
  deployments only from `main`. Check the live site after each deployment.

See README.md and docs/DEPLOYMENT.md for current commands and maintenance.
The full original brief and dated review history are preserved locally under
contexts/review-history/ and excluded from Git and generated output.
