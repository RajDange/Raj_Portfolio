# Raj Dange — Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
Deployed on Vercel, with Vercel Analytics enabled.

## What's on the site

- **Home page** — Hero, Projects, Tech Stack, Experience, Certifications, Contact.
- **Project case studies** at `/projects/[slug]`, generated from `data/projects.ts`.
- **Initiatives** — a project can attach another project as a highlighted initiative
  (for example, DQEngine on the ERP migration card). See "Editing content" below.

## Run it locally

Requires Node.js 18 or 20 (LTS).

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site refreshes as you edit files.

Other scripts: `npm run build` (production build), `npm start` (serve the build), `npm run lint`.

## Project structure

```
app/
  layout.tsx            root layout, fonts, sidebar, site metadata (SEO / Open Graph)
  page.tsx              home page (assembles all sections)
  projects/[slug]/      case-study page template
  globals.css
components/             one file per section (Hero, ProjectsSection, Sidebar, ...)
data/                   all editable content
  projects.ts           projects and their case-study sections
  experience.ts         roles and bullets
  certifications.ts     certification list, badge images, verify links
  techstack.ts          tech stack grouped by category
public/
  images/               profile photo, logo, project thumbnails, certification badges
  RAJ_NETAJI_DANGE_Resume.pdf
```

## Editing content

- **Projects** — edit `data/projects.ts`. Optional fields on a project:
  - `metric` — highlighted result shown on the card.
  - `code` (on a section) — renders a code block in that section.
  - `initiative: { label, slug }` — adds an amber "My initiative" button on the
    project's card and page, linking to another project.
  - `hidden: true` — hides the project from the home grid; its page stays reachable.
  - `partOf: { title, slug }` — shows a back-link to a parent project on the page.
- **Experience / Tech stack** — edit `data/experience.ts` and `data/techstack.ts`.
- **Certifications** — add the badge image to `public/images/certs/`, then add an entry in
  `data/certifications.ts`. Set `verifyUrl` to link the card to the verification page;
  cards with an empty `verifyUrl` are not clickable.
- **Photo and thumbnails** — replace the files in `public/images/` and keep the
  paths referenced in the data files and `components/Hero.tsx`.

## Social sharing (Open Graph)

Link previews are configured in `app/layout.tsx` (`openGraph` and `twitter`).
The preview image is `/images/Logo_Image.png`; change it there to use a different
image (1200×630 works best for large previews, and then set `twitter.card` to
`summary_large_image`). On Vercel the site URL is picked up automatically from
`VERCEL_PROJECT_PRODUCTION_URL`; locally it falls back to `http://localhost:3000`.

## Deploying

The site is deployed from the GitHub repo `RajDange/Raj_Portfolio` on Vercel.
Every push to `main` triggers a redeploy; Vercel auto-detects Next.js, so no extra
configuration is needed.

## Troubleshooting

- **`npm install` fails** — check `node -v` prints 18 or 20.
- **Port 3000 in use** — run `npm run dev -- -p 3001`.
- **Tailwind styles not applying** — restart the dev server after config changes.
