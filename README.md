# Raj Dange — Portfolio

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## What's here right now

This is a working scaffold with real structure and placeholder content:

- Hero, Projects, Tech Stack, Experience, Certifications, Contact — all sections built and responsive.
- 3 project case-study pages at `/projects/[slug]`, structured with the full section set
  (business problem, architecture, trade-offs, etc.) — most bodies are marked `TODO` and
  need real content. Edit these in `data/projects.ts`.
- Certification badges and verify links are placeholders — edit `data/certifications.ts`
  once you have the real badge images and Credly/Microsoft Learn/Databricks links.
- Your photo is not in yet — see "Adding your photo" below.
- Project thumbnails are placeholders — see "Adding project images" below.

## Prerequisites

- Install [Node.js](https://nodejs.org) (LTS version). This gives you `node` and `npm`.
- Install [VS Code](https://code.visualstudio.com) if you don't have it.
  Recommended extensions: "ES7+ React/Redux snippets", "Tailwind CSS IntelliSense".

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site auto-refreshes as you edit files.

## Project structure

```
app/
  layout.tsx          root layout, fonts, sidebar
  page.tsx             home page (assembles all sections)
  projects/[slug]/     dynamic case-study page template
  globals.css
components/             one file per section (Hero, ProjectsSection, etc.)
data/                   edit these to change real content
  projects.ts           3 projects, each with full case-study sections
  experience.ts          LKQ GCC + Johnson Controls roles and bullets
  certifications.ts      cert list — add badge images + verify links here
  techstack.ts            tech stack grouped by category
public/images/           put your photo and project screenshots here
```

## Adding your photo

1. Put your headshot at `public/images/profile.jpg`
2. In `components/Hero.tsx`, replace the placeholder `<div>` with:
   ```tsx
   <Image src="/images/profile.jpg" alt="Raj Dange" fill className="object-cover" />
   ```
   (the `Image` import is already at the top of the file)

## Adding project images

1. Put each screenshot in `public/images/projects/` (filenames already referenced
   in `data/projects.ts`, e.g. `erp-migration-thumb.png`)
2. In `components/ProjectsSection.tsx`, replace the placeholder thumbnail `<div>`
   with a Next.js `<Image>` pointing at `project.thumbnail`

## Adding certification badges

1. Put badge images in `public/images/certs/`
2. Update `badgeImage` and `verifyUrl` for each entry in `data/certifications.ts`
3. In `components/CertificationsSection.tsx`, replace the placeholder badge `<div>`
   with an `<Image src={cert.badgeImage} .../>`

## Deploying

### Push to GitHub

```bash
git init
git remote add origin https://github.com/RajDange/Raj_Portfolio.git
git add .
git commit -m "initial portfolio scaffold"
git branch -M main
git push -u origin main
```

If `git remote add origin` fails because the remote already exists, use
`git remote set-url origin https://github.com/RajDange/Raj_Portfolio.git` instead.

### Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click "Add New Project" → select `Raj_Portfolio`.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.
4. Every future push to `main` auto-redeploys.

## Troubleshooting

- **`npm install` fails** — make sure Node.js LTS is installed (`node -v` should print
  a version starting with 18 or 20).
- **Port 3000 already in use** — run `npm run dev -- -p 3001` to use a different port.
- **Tailwind styles not applying** — stop the dev server and restart it (`Ctrl+C`, then
  `npm run dev` again); Tailwind sometimes needs a fresh start after config changes.
