# Planet Alien

A small personal site with four pages — Home, Interests, About Me, and
Favorites (with a click-to-maximize image gallery). Retro alien/UFO,
terminal-log look: green signal text, amber status accents, a canvas
starfield, a CSS radar sweep, and subtle CRT scanlines.

## File structure

```
planet-alien-site/
├── index.html          Home page
├── interests.html       Interests page
├── about.html           About Me page
├── favorites.html        Favorites page (gallery + lightbox)
├── css/
│   └── style.css         All styling, shared by every page
├── js/
│   ├── main.js            Nav highlighting, starfield, terminal typewriter — runs on every page
│   └── lightbox.js        Gallery popup viewer — only used by favorites.html
└── README.md
```

Nothing depends on a build tool — it's plain HTML/CSS/JS, so you can open
`index.html` directly in a browser to preview it, or use a simple local
server (e.g. `python3 -m http.server` from inside this folder) so the
`fetch`-free relative paths behave exactly like they will once hosted.

## Customizing it

- **Your name/bio** — edit the paragraph in `about.html`.
- **Interests** — edit or duplicate the boxes in `interests.html`.
- **Favorites gallery** — each poster is one `<div class="gallery-item">`
  block in `favorites.html`. The gallery images right now are placeholders
  (generated at placehold.co) so nothing here infringes on anyone's poster
  art — swap the `src` for your own images (upload them into an `/images`
  folder in this project and point `src="images/yourfile.jpg"` at them),
  and update the `alt` and `data-title` attributes to match. The lightbox
  automatically picks up however many `.gallery-item` blocks you have —
  add or remove as many as you like.
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
