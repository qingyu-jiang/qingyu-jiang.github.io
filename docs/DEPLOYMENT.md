# GitHub Pages deployment

Target account: **qingyu-jiang**. Repository: **qingyu-jiang.github.io**.
Target site: https://qingyu-jiang.github.io. This folder retains the Beautiful
Jekyll upstream history; the original remote is named `upstream`.

## Current status

The site and deployment workflow are prepared locally. The unauthenticated GitHub
API confirms the account exists with no public repositories; the target repository
returns 404. This does not establish whether a private repository exists. No
personal remote has been connected and no site has been published. An authenticated
connection to the intended account is needed for those steps.

## Connect and publish

1. Authenticate GitHub as `qingyu-jiang` using the GitHub CLI or an available GitHub
   connection. Verify the active account, then check for an existing repository,
   including private repositories. Preserve any existing work.
2. If absent, create a public repository named `qingyu-jiang.github.io` without an
   initial README, license, or template commit. This local source already contains
   the theme history, license, and website. Use `main` as the default branch.
3. Review the files that Git will include. Original documents, raw photos, private
   review records, installed dependencies, and generated output are ignored. Add
   the personal repository as `origin`; retain `upstream` for theme maintenance.
4. Push the reviewed `main` branch. In **Settings → Pages → Build and deployment**,
   choose **GitHub Actions** as the source. The workflow is already supplied; do
   not add another template. Configure the `github-pages` environment to allow
   deployments from `main` only.
5. Run **Actions → Academic website → Run workflow → main** after Pages setup, or
   push a subsequent change. Verify both the build and deployment jobs succeed.
   The initial push can build successfully but fail to deploy if Pages has not yet
   been enabled; rerun after selecting GitHub Actions.

The workflow uses locked Ruby 3.3.8/Bundler 2.5.22 dependencies and uploads only
`_site/`. Pull requests build and verify without deploying; pushes or manual runs
on `main` deploy. The production guard rejects unexpected output files, preview
metadata, incorrect domains, or an accidentally exposed CV.

## Verify the first deployment

Open the live Home, Research, Teaching, and Contact pages at desktop and phone
sizes. Check navigation, portrait, DOI/profile/email links, and the custom 404 page.
Confirm **CV [Coming soon]** remains non-clickable, with no PDF available, and that
WHEAT Lab remains only at the end of Research.

Confirm the canonical URLs, sharing image, `sitemap.xml`, and `robots.txt` use the
public HTTPS domain. The live pages must omit the local notice and noindex metadata
(except the 404 page). Check actual sharing previews after the domain is live;
platform caches and cropping cannot be verified from a local build alone.

## Routine updates and rollback

Edit Markdown or `_config.yml` locally or with GitHub’s Edit button. Upload a
replacement portrait to `assets/img/portrait.jpg`, using a web-sized image; keep
`photo.png` as a private original. Before pushing, build and verify, then check
changed pages locally. Update the verification script if public files or the CV
policy deliberately change. A push to `main` publishes automatically.

Use `git revert <commit>` to restore a prior committed change through a new commit,
push it, and check the deployment. Review dependency or theme changes on a separate
branch; do not combine them with ordinary content edits.

References: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
and [publishing-source settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
