# Beautiful Jekyll provenance

This website starts from the official
[daattali/beautiful-jekyll repository](https://github.com/daattali/beautiful-jekyll).

- Starting commit: `d1eb82a5ecac7b0970fcc8885857f2d9da9ad75b`
- Commit date: **25 May 2026**
- Theme version: **6.0.1**
- [Exact upstream revision](https://github.com/daattali/beautiful-jekyll/tree/d1eb82a5ecac7b0970fcc8885857f2d9da9ad75b)
- License: the original [MIT license](../LICENSE), including Dean Attali's notice

The local implementation retains upstream source history and useful metadata
includes. It adds a standalone `_layouts/academic.html`, academic header/footer
and content includes, local academic styling, and real Markdown pages. It does
not inherit the blog navigation or load its associated scripts. The upstream
sample posts, demo pages, and unused sample assets are removed or excluded from
the generated website. The source license and linked footer credit remain.

The Gemfile pins Jekyll 3.10.0 and only the dependencies needed locally;
`Gemfile.lock` records transitive versions. A separate Beautiful Jekyll theme gem
or remote-theme setting is unnecessary because the source is already present.
The GitHub workflow uses the same locked dependencies to build and verify output.
It is disabled during private review and accepts manual runs only. A future
GitHub Pages deployment requires a deliberate `publish: true` run on `main` after
Qingyu requests launch and publishing has been restored. See [deployment settings](DEPLOYMENT.md).

## Reviewing future upstream changes

1. Commit the current reviewed website, then create a separate maintenance
   branch. Confirm remotes with `git remote -v` so the personal repository and
   Beautiful Jekyll upstream are not confused.
2. Fetch the official upstream source and compare its changes from the recorded
   starting revision. Fetching source is separate from merging it.
3. Select needed fixes deliberately. Review metadata includes, local layout and
   styling, license notices, and dependency changes. Resolve conflicts around
   the academic design; do not restore demo identity, blog content, or deployment
   automation as part of a theme update.
4. Run `./scripts/bootstrap` and `./scripts/build`, then review the actual pages,
   keyboard navigation, phone layout, and the absence of a public CV before merging.
5. Record the reviewed upstream revision and any dependency changes here. Use
   `git revert <commit>` if the update needs to be undone.
