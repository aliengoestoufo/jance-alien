# Planet Alien

A small personal site with four pages — Home, Log, Favourites, and About
Me. Log is a click-to-maximize gallery of shows/movies (split-panel
lightbox with hover-reveal arrows); Favourites is a gallery of favorite
characters (stacked card lightbox with a gradient border matching each
one's colors). Retro alien/UFO, terminal-log look: green signal text,
amber status accents, a canvas starfield, a CSS radar sweep, and subtle
CRT scanlines.

## File structure

```
planet-alien-site/
├── index.html          Home page
├── log.html             Log page — shows/movies gallery + lightbox
├── favorites.html        Favourites page — character gallery + lightbox
├── about.html            About Me page
├── css/
│   └── style.css          All styling, shared by every page
├── js/
│   ├── main.js             Nav highlighting, starfield, terminal typewriter — runs on every page
│   └── lightbox.js         Gallery popup viewer — shared by log.html and favorites.html
└── README.md
```

Nothing depends on a build tool — it's plain HTML/CSS/JS, so you can open
`index.html` directly in a browser to preview it, or use a simple local
server (e.g. `python3 -m http.server` from inside this folder) so the
`fetch`-free relative paths behave exactly like they will once hosted.

## Customizing it

- **Your name/bio** — edit the paragraph in `about.html`.
- **Log gallery** — each poster is one `<div class="gallery-item">` block
  in `log.html`, with `data-title`, `data-rating`, and `data-log`
  attributes. Swap the `src` for your own images (upload them into an
  `/images` folder in this project and point `src="images/yourfile.jpg"`
  at them).
- **Favourites gallery** — same idea in `favorites.html`, but each item
  also carries `data-color-1` and `data-color-2` (hex codes) that set the
  gradient border and glow in the lightbox to match that entry.
- Both galleries automatically pick up however many `.gallery-item`
  blocks you have — add or remove as many as you like.
- **Colors** — all colors are CSS variables at the top of `css/style.css`
  (`:root { ... }`), so you can retheme the whole site by changing a
  handful of hex values there.
- **Terminal message** — the lines the header "types out" live in the
  `lines` array near the top of `startTypewriter()` in `js/main.js`.

## Putting it on GitHub

1. Create a new repository on GitHub (public, so Pages can serve it for
   free — e.g. name it `planet-alien` or `yourusername.github.io` if you
   want it at the root of your GitHub Pages domain).
2. From inside this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings → Pages**, set **Source** to
   "Deploy from a branch," pick the `main` branch and `/ (root)` folder,
   then save.
4. After a minute or two, your site will be live at
   `https://YOUR-USERNAME.github.io/YOUR-REPO/` (or just
   `https://YOUR-USERNAME.github.io/` if you named the repo that way).

No further configuration is needed — everything's relative paths, so it
works the same locally and once deployed.
