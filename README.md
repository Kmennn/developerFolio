# Virendra Mahajan — Portfolio (source)

Source for **https://kmennn.github.io/Virendra-Mahajan/**.

Built on the open-source [developerFolio](https://github.com/saadpasta/developerFolio)
template by Saad Pasta (MIT licence, see `LICENSE`).

## Edit content

Almost everything on the site lives in **`src/portfolio.js`**: intro, skills,
experience, projects, achievements, contact. Logos go in `src/assets/images/`.
The resume PDF is `public/Virendra_Mahajan_Resume.pdf`.

## Build

```bash
npm install --legacy-peer-deps
CI=false npm run build
```

Output goes to `build/`. `homepage` in `package.json` must stay
`https://kmennn.github.io/Virendra-Mahajan` or asset paths break.

## Deploy

The live site is served from the **`gh-pages` branch of
[Kmennn/Virendra-Mahajan](https://github.com/Kmennn/Virendra-Mahajan)**, not
from this repo. Copy `build/` over that branch and push.

**Do not delete old files when deploying.** Copy the new build on top. A browser
holding a cached `index.html` asks for older hashed files, and deleting them
gives that visitor a blank page.

## Notes

- `require("....svg")` returns a module in this build setup. Use
  `require("....svg").default` or the image renders as `[object Module]`.
- Components are imported directly, not with `lazy()`. A lazy chunk that fails
  to download (GitHub Pages has returned transient 503s) blanks the whole page.
