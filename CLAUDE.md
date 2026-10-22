# konkr.io website

Jekyll site for the Konkr browser strategy game, hosted on Netlify. The game itself is built in a separate repo; this repo is the blog/landing page plus the hosted game builds.

## Running locally

```
bundle exec jekyll serve   # http://localhost:4000
```

Setup notes (Arch/CachyOS, Ruby 3.4):
- bundler is a separate package: `sudo pacman -S ruby-bundler`
- gems install into `vendor/bundle` (gitignored), set via `bundle config set --local path vendor/bundle`
- `erb` is in the Gemfile because Arch splits it out of the Ruby stdlib
- Sass `@import` deprecation warnings during build are expected and harmless

## Release pipeline (generated files, don't hand-edit)

A GitHub Action in the game repo pushes "auto-publish dev build (branch X)" commits here. Each one updates:
- `_site/releases/<version>/` or `_site/releases/<branch>/`: the built game (`latest`, `dev`, and `test-*` branches live here too)
- `_includes/game.html`: game entry page, pointing `<base href>` at the current release; used by `_layouts/game.html` for the home page
- `pages/_changelog.md`: gets the new release's changelog entry prepended
- `generated.txt`: timestamp of the last publish

`_site/` is gitignored except `_site/releases/`; `keep_files: releases` in `_config.yml` stops Jekyll from wiping it on build. Releases are big (~250 MB), so old versions get pruned by hand now and then.

Hand edits to `_includes/game.html` (e.g. the `display: none` on `#news-box`) get overwritten by the next auto-publish. Persistent changes belong in the game repo's template.

## Content

- `_posts/`: blog posts. A post prefixed `HIDDEN_` doesn't match Jekyll's date-filename pattern, so it isn't published; that prefix is how drafts are kept. To publish, rename to `YYYY-MM-DD-slug.md` and make sure the front matter `date:` matches.
- Excerpts are split with `<!-- excerpt-end -->`. The home page (`pages/index.html`) shows the newest post's excerpt in the game's news box.
- `pages/`: about, how-to-play, news, changelog, privacy, level-stats, inspector, legacy.
- `_redirects` (copied into the site via `include` in `_config.yml`): the `/v2/dev/*` redirect, and rewrites that serve the game page at every path without a file (the game's deep links like `/levels/<id>`, on the home page, releases and dev builds).
- `netlify.toml`: a CSP `frame-ancestors` allowlist for portals that embed the game (itch, Kongregate, Newgrounds, ...). Add new embedding sites there.
