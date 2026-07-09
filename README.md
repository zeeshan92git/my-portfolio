# Muhammad Zeeshan Ameer — Portfolio

Built with React + Vite + Tailwind CSS + Framer Motion.

## Design concept

A terminal / git-log motif, since that's the world you actually live in as a
developer: the hero is a fake terminal window with a typewriter line, section
headers are styled like file paths (`~/about.tsx`, `~/stack.json`), and
projects are laid out like git log entries (commit hash, `feat:` message,
tech tags as `+ added` lines).

## Run it locally

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Before you deploy — things to fill in

- `src/components/Contact.jsx` — replace the `#` placeholder hrefs for
  LinkedIn and GitHub with your real profile URLs.
- `public/resume.pdf` — add your resume PDF here (the Hero "download resume"
  button links to `/resume.pdf`). Create a `public/` folder if it doesn't
  exist yet.
- `src/components/Projects.jsx` — the `live` and `source` fields for each
  project are placeholder `#` links; point them at your actual deployments
  and GitHub repos.
- Deliberately left out: a public phone number in the contact section, to
  avoid spam calls. Add one back only if you want it public.

## Deploying

This is a static Vite build, so it deploys to Vercel/Netlify the same way
your current site does: connect the repo, framework preset "Vite", build
command `npm run build`, output directory `dist`.
