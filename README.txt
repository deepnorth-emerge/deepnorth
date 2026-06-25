# Deep North — stripped redesign · source files

Drop each file into the matching folder in `~/Projects/deepnorth/src/`,
replacing what's there. The folder layout in this zip already mirrors `src/`.

    styles/global.css        →  src/styles/global.css      (the whole look lives here)
    components/Nav.astro      →  src/components/Nav.astro
    components/Footer.astro   →  src/components/Footer.astro
    pages/index.astro         →  src/pages/index.astro      (the bare door)
    pages/speaking.astro      →  src/pages/speaking.astro
    pages/about.astro         →  src/pages/about.astro
    pages/contact.astro       →  src/pages/contact.astro
    pages/the-work.astro      →  src/pages/the-work.astro   (light — has placeholders to fill)

## Left untouched on purpose

- src/layouts/BaseLayout.astro  — your existing one keeps working. It imports
  global.css and renders Nav + Footer, so these new files slot straight in.
- src/pages/perspective-engine.astro — the interactive tool is unchanged; it
  inherits the new frame automatically.
- src/components/Hero.astro and HomeCards.astro — no longer used by the home
  page. Leave them or delete them; nothing references them now.

## One thing to check

The old colour (#2A7F6F) and the Source Serif / Inter web fonts came in through
the OLD global.css. This new global.css drops both. If any fonts still load,
open src/layouts/BaseLayout.astro and remove any leftover Google Fonts <link>
in the <head> — but there probably isn't one; the fonts were loaded via CSS.

## Deploy

    cd ~/Projects/deepnorth
    npm run dev          # check it locally first

When it looks right:

    git add .
    git commit -m "Stripped redesign — monochrome, monospace"
    git push

Netlify rebuilds automatically. The old site stays live if a build fails.
