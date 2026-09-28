# Muhammad Zeeshan Ameer — Portfolio

A responsive MERN Stack Developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. It includes a persistent light/dark theme toggle, featured project data, experience, skills, and a downloadable resume.

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
- `src/data/projects.js` contains the featured project details and verified repository links.
- `src/index.css` defines the emerald and champagne color system, rem typography tokens, and responsive layouts.
- `public/mza-resume.pdf` is the resume linked from the page.

Project artwork uses restrained typography because the repository does not include project screenshots. Replace it with real project images when they are available.

## Deployment

This is a static Vite site. Use `npm run build` as the build command and `dist/` as the output directory on Vercel or Netlify.
