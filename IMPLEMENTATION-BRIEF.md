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
- The GitHub Actions workflow is prepared. Account connection, repository creation
  or verification, Pages configuration, and the first live check remain pending.

See README.md and docs/DEPLOYMENT.md for current commands and maintenance.
The full original brief and dated review history are preserved locally under
contexts/review-history/ and excluded from Git and generated output.
