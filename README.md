# Muhammad Zeeshan Ameer — Portfolio

A responsive portfolio for a full-stack engineer, built with React, Vite, Tailwind CSS and Framer Motion. It includes a persistent light/dark theme toggle.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Project structure

- `src/components/` contains the page sections and navigation.
- `src/data/projects.js` keeps featured project details and verified links together.
- `src/index.css` defines the emerald and champagne visual system and responsive layouts.
- `public/mza-resume.pdf` is the resume linked from the page.

The project artwork is typographic because the repository does not include project screenshots. Add real project images to `public/` and reference them in the project data when they are available.

## Deployment

This is a static Vite site. Use `npm run build` as the build command and `dist/` as the output directory on Vercel or Netlify.
