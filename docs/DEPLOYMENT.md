# Private review and future GitHub Pages launch

Account: **qingyu-jiang**. Repository: **qingyu-jiang.github.io**.
Future site: https://qingyu-jiang.github.io.

## Current status

The repository is **private** and Pages is **unpublished**. No active Pages
configuration is returned by GitHub. The earlier publishing settings were saved
locally before this change. The **Academic website** workflow is disabled on GitHub. Its source now accepts
manual runs only, with `publish` defaulting to `false`. Commits and pushes do not
trigger deployment. Keep this setup until Qingyu explicitly asks to publish.

The site files and Git history remain available locally and in the private
repository. `origin` points to https://github.com/qingyu-jiang/qingyu-jiang.github.io;
`upstream` retains the Beautiful Jekyll source. The default branch remains `main`.

The project-local GitHub CLI is `.runtime/github-cli/gh`; its configuration is in
`.runtime/github-config/`. These remain ignored and excluded. Git identity and the
credential helper are configured only for this repository. After moving the
project or signing out, reconnect authentication as `qingyu-jiang` before pushing.

## Continue reviewing privately

From this project folder:

```sh
PORT=4001 ./scripts/preview
```

Open <http://127.0.0.1:4001> on this computer. The server binds only to loopback;
this address is not a shareable website link. Keep editing the Markdown pages,
configuration, and assets, and review desktop and phone layouts locally. The
local notice and `noindex` metadata identify a draft; privacy comes from keeping
Pages offline and the repository private.

Build and verify in a separate directory while the preview is running:

```sh
./scripts/build --destination /tmp/qingyu-production
./scripts/verify-build /tmp/qingyu-production
```

Commit and push reviewed changes to preserve them in the private repository.
Original documents, raw photos, private review records, installed dependencies,
and generated output must remain ignored. These commands do not publish.

## Launch only when requested

1. Obtain Qingyu’s explicit request to publish, finish the local review, and verify
   the production build. Confirm the active GitHub account is `qingyu-jiang`.
2. Choose whether to make the repository public or retain private source on an
   eligible GitHub Pages plan. For a personal account, Pages supports public
   repositories on GitHub Free and private repositories on GitHub Pro. Private
   source does not make this user site private once Pages publishes it.
   [GitHub Pages availability](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
3. Check **Settings → Pages → Build and deployment** and restore publishing with
   **GitHub Actions** as the source. If the Pages configuration is absent, recreate
   it; the corresponding API creation uses `build_type: workflow`. Restore HTTPS
   enforcement and confirm the `github-pages` environment allows deployments only
   from `main`. The checked-in workflow is already supplied;
   do not add a second template. [Pages setup and settings](https://docs.github.com/en/rest/pages/pages).
4. Enable **Actions → Academic website**. Manually run it from `main` with the
   **Publish the approved website to GitHub Pages** checkbox selected
   (`publish: true`). Leaving it unchecked only builds and verifies. The workflow
   remains manual after launch; a push alone never publishes.
   [Workflow controls](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows).
5. Wait for both build and deployment to succeed, then verify the live site.

The workflow retains Ruby 3.3.8/Bundler 2.5.22 and locked dependencies. Its build
job always builds and checks output when manually run. Artifact upload and the
deployment job require both Boolean `inputs.publish == true` and the `main` ref.
The production guard rejects unexpected output, preview metadata, incorrect
domains, or an accidentally exposed CV.

## Verify a launch or later publication

Open Home, Research, Teaching, and Contact at desktop and phone sizes. Check
navigation, portrait, DOI/profile/email links, and the custom 404 page. Confirm
**CV [Coming soon]** remains non-clickable, with no PDF available, and WHEAT Lab
appears only at the bottom of Research.

Confirm canonical URLs, sharing image, `sitemap.xml`, and `robots.txt` use the
public HTTPS domain. Live pages must omit the local notice and noindex metadata
(except the 404 page). Check sharing previews after the domain is live.

For later edits, build, verify, and review locally before committing and pushing.
Publish only with an explicit manual `publish: true` run on `main`. To undo a
committed change, use `git revert <commit>` and push the new commit; publishing
that revert is a separate deliberate action.

## Return to private review later

Disable the Academic website workflow, cancel active or queued deployment runs,
and use **Settings → Pages → Unpublish site**. Make the repository private if its
source must also be hidden. Verify that Pages is offline, the workflow remains
disabled, and logged-out requests cannot load the site or repository.
[Unpublishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).

For this private-review change, the Pages deletion API rejected deactivation of
this repository. Changing the repository to private unpublished the site; a
subsequent authenticated Pages lookup returned 404 while the private repository
remained accessible. Do not assume the deletion endpoint will work for this user
site, or that a future visibility change has completed unpublishing without
checking the actual site and Pages settings.
