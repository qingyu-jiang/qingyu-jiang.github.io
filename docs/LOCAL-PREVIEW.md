# Local website preview

From the website project folder in Terminal:

```sh
./scripts/bootstrap
./scripts/preview
```

Open <http://127.0.0.1:4000>. Edit the Markdown pages and refresh the browser;
Jekyll rebuilds changed files automatically. Restart the preview after editing
`_config.yml` or `_config.local.yml`. Press **Control-C** in Terminal to stop the server.

To use a different port:

```sh
PORT=4001 ./scripts/preview
```

To check the complete site without leaving a server running:

```sh
./scripts/build
```

The preview loads `_config.yml` and `_config.local.yml`; the latter adds a local
notice and `noindex` metadata. `build` defaults to `JEKYLL_ENV=production` and loads
only `_config.yml`. Stop the preview before a production build, or isolate output:

```sh
./scripts/build --destination /tmp/qingyu-production
./scripts/verify-build /tmp/qingyu-production
```

The generated site is in `_site/` by default. It is disposable; edit source files rather
than generated HTML. The preview binds to this computer's loopback interface.
Nothing in these commands enables GitHub Pages or publishes the website.

## Ruby and dependency setup

The tested environment is Ruby **3.3.8**, Bundler **2.5.22**, and Jekyll
**3.10.0**. The Gemfile deliberately uses the Jekyll version listed by
[GitHub Pages](https://pages.github.com/versions/), along with the small set of
plugins used by this site. `Gemfile.lock` fixes the exact transitive versions.
The vendored Beautiful Jekyll source does not need a separate theme gem.

On an Apple Silicon Mac without a suitable Ruby, `bootstrap` downloads
[Homebrew's portable Ruby 3.3.8](https://github.com/Homebrew/homebrew-portable-ruby/releases/tag/3.3.8)
into `.runtime/`. It checks the archive against the checksum in
[Homebrew 4.4.32's official metadata](https://github.com/Homebrew/brew/blob/4.4.32/Library/Homebrew/vendor/portable-ruby-arm64-darwin).
This does not install Homebrew, replace macOS Ruby, or edit your shell setup.
Apple Command Line Tools are needed for native gem compilation; check with
`xcrun --show-sdk-path`, or install them using `xcode-select --install`.

On another Mac or Linux computer, install Ruby 3.3.8 with a Ruby version manager
such as rbenv, chruby, or asdf, then run the same bootstrap command. A compatible
Ruby 3.x version at least 3.3 on PATH can also be used, but 3.3.8 is the reviewed
runtime. See the [official Jekyll installation guide](https://jekyllrb.com/docs/installation/)
for platform prerequisites. On Windows, use WSL with the Linux instructions.

Dependencies are installed only inside `.runtime/`, `.bundle/`, and
`vendor/bundle/`. These folders are ignored by Git and excluded from the built
website. Downloads require an internet connection only during bootstrap.
The prepared build and preview commands use the local locked bundle.

Commit `Gemfile`, `Gemfile.lock`, `.ruby-version`, and the scripts. Do not commit
the runtime or installed gems. After relocating the folder, rerun bootstrap
if an installed native extension is unavailable; the portable Ruby itself
supports relocation. Dependencies should be updated deliberately, followed by
`./scripts/build` and another visual review.
