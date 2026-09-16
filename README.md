# Qingyu Jiang’s academic website

A personal academic website built with Beautiful Jekyll.

## What to edit

| Update | File |
| --- | --- |
| Home biography and education | [index.md](index.md) |
| Research descriptions, publications, and projects | [research.md](research.md) |
| Teaching roles and courses | [teaching.md](teaching.md) |
| Lab introduction and application instructions | [wheat-lab.md](wheat-lab.md) |
| Contact-page wording | [contact.md](contact.md) |
| Name, position, university, email, address, and profile URLs | [_config.yml](_config.yml) |

The shared settings update the header and contact details. If your position or
university changes, also update the written Home biography and any page
`share-description` that mentions it.

## Make changes on GitHub

1. Open the [website repository](https://github.com/qingyu-jiang/qingyu-jiang.github.io)
   and select the **main** branch.
2. Open the file from the table above and click the **pencil / Edit** button.
3. Edit the text and review your changes. Use a blank line to separate paragraphs;
   links use `[link text](https://example.com)`.
4. Click **Commit changes…**, write a short description such as “Update teaching
   courses,” choose to commit directly to **main**, and confirm.

Preserve the settings between `---` at the top of each page, existing HTML tags,
and template expressions such as `{{ ... }}` and `{% ... %}`. In `_config.yml`,
keep the indentation and quotation marks. Edit source files, not `_site/`.

GitHub’s **Preview** is a Markdown preview; use the local preview below to inspect
the website’s fonts, layout, and navigation.
[GitHub’s file-editing guide](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).

## Preview your changes locally

Open Terminal in the local project folder. Commit any existing local edits first,
then download the changes saved on GitHub:

```sh
git pull --ff-only
PORT=4001 ./scripts/preview
```

If the pull fails, reconcile the local and GitHub changes before continuing.
Open [the local preview](http://127.0.0.1:4001/) and check desktop and phone widths.
Stop the server with **Control-C**; restart it after changing `_config.yml`.
This preview is available only on your computer.

For first-time setup, run `./scripts/bootstrap` before starting the preview.
[Local setup and build checks](docs/LOCAL-PREVIEW.md) explain the full process.

## Publish when ready

For the first launch, complete [the publishing setup](docs/DEPLOYMENT.md#launch-only-when-requested).
After launch, each update is still published manually:

1. Save and review the latest changes on **main**.
2. Open **Actions → Academic website → Run workflow** in the repository.
3. Select **main**, check **Publish the approved website to GitHub Pages**, and
   click **Run workflow**.
4. Wait for the build and deployment to succeed, then check
   [the live website](https://qingyu-jiang.github.io/).

Leaving the publish checkbox unchecked runs build checks only. Committing changes
alone does not update the live site.
[GitHub’s manual-workflow guide](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow).

## Further maintenance

See [design and portrait maintenance](docs/MAINTENANCE.md) for font/layout changes
or replacing the photograph, and [deployment instructions](docs/DEPLOYMENT.md)
for launch, rollback, and unpublishing. Keep source documents and private review
material out of the published website.
