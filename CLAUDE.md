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

A GitHub Action in the game repo (`publish.yml`) pushes commits here titled `release v2.37.5`, `latest build (master)`, `test build (test-x)` or `preview of PR #N (branch)`. The title is also the Discord deploy notification; `deploy-cloudflare.yml` posts `release v…` ones as a card and pings the user in the `DISCORD_PING_USER_ID` repo variable. Each one updates:
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
- `_redirects` (copied into the site via `include` in `_config.yml`): the `/v2/dev/*` redirect, and rewrites that serve the game page at the game's deep links (konkr2 `src/services/appRoutes.ts`: `/levels/<id>`, `/conquest`, ...) on releases and dev builds. A new game route needs its two rules here; the home page's deep links get the root `index.html` from the fallback. Cloudflare rewrites even where a file exists, so no catch-all rules except the Netlify-only ones at the end
- `_headers` (copied like `_redirects`): a CSP `frame-ancestors` allowlist for portals that embed the game (itch, Kongregate, Newgrounds, ...), and `Service-Worker-Allowed`. Add new embedding sites there.

## Hosting

Netlify serves konkr.io. During the move to Cloudflare (konkr_design `plans/cloudflare-hosting.md`), every push to `master` also deploys the site to a Cloudflare Worker with static assets (`wrangler.jsonc`, `.github/workflows/deploy-cloudflare.yml`), which drops the Netlify-only rules from `_redirects`.
