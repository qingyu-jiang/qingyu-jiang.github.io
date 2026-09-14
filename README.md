# Qingyu Jiang’s academic website

Beautiful Jekyll 6.0.1 with a custom academic layout. The four pages and selected
portrait are ready locally; GitHub account connection and the first deployment
remain to be completed. Intended public URL: https://qingyu-jiang.github.io.

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

| File | Page or purpose |
| --- | --- |
| `index.md` | Home: introduction and education |
| `research.md` | Research themes, selected publications, and WHEAT Lab at the bottom |
| `teaching.md` | Selected courses, mentoring, and service |
| `contact.md` | Contact introduction and shared contact details |
| `_config.yml` | Identity, affiliation, email, profile links, navigation, portrait, and CV settings |

Edit paragraphs in Markdown while preserving front matter and permalinks. Keep
**WHEAT Lab only at the bottom of Research**. Citation titles link to DOI records;
authors, journals, dates, and publication status should be verified when updated.

## Portrait and CV

The chosen `photo.png` is used as `assets/img/portrait.jpg`: 750 × 937 pixels,
127 KB, with the original framing preserved. The original remains at the
project root, ignored by Git and excluded from the site. The temporary portrait
comparison has been removed. Encoding details are in
[portrait metadata](docs/portrait-optimization.json).

The header displays **CV** and **[Coming soon]**, without a download link. To add a
CV later, put the approved file at `assets/files/cv.pdf`, remove its specific
exclusion in `_config.yml`, set `academic.cv_enabled: true`, and update the build
verification checks for the newly approved public file.

## Publishing and maintenance

[Deployment instructions](docs/DEPLOYMENT.md) cover account connection, repository
setup, GitHub Pages, verification, and rollback. The workflow builds pull requests;
changes on `main` also deploy once Pages is configured. Local setup does not publish.

The original documents and earlier review records remain private under `contexts/`.
The detailed local source mapping remains at `docs/FACT-CHECK.md`, ignored by Git.
Only the selected web portrait and approved site content belong in public output.

Keep the Beautiful Jekyll credit and [MIT license](LICENSE). Review theme and
dependency upgrades separately from content edits; see [upstream provenance](docs/UPSTREAM.md).
