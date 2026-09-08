# Harshil Modh · Portfolio

An editorial software engineering portfolio built with React 18, Vite, Framer Motion, and Lucide icons. The design uses oversized condensed typography, pure white surfaces, crisp black type, a lime accent, full-width project features, and a restrained skills index. Includes a pure white default with a persistent dark theme, project details, experience, education, filterable skills, a downloadable resume, and contact links.

## Development

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production site is generated in `dist/`. It can be deployed with the existing static hosting setup or the production Docker image.

## Updating content

- Edit `src/constants/data.js` for projects, experience, education, skills, and profile links.
- Replace `public/Harshil-Modh-Resume.pdf` to update the downloadable resume.
- Edit `src/index.css` for design tokens, responsive layouts, and theme styles.
- Keep the canonical and social URLs in `index.html` aligned with the deployed domain.

Project demo and source links are optional. Only add a link when the actual destination is known. The contact form creates a draft through the visitor’s email application; it does not send email or require a backend. The draft remains in the form after submission.

Content was refreshed from the two supplied software engineering resumes. Shared facts use the resume values: GenAI Consulting from January 2026, Grownited from June 2023 to June 2024, and Stevens GPA 3.9/4.0. Existing additional projects and community experience remain available in expandable sections. CoMP Ledger has a contact action because no project-specific repository was provided.

The project visuals are typographic covers describing each project, not screenshots of application data. Public CareConnect links use the verified care-connect-five-alpha.vercel.app deployment. Motion respects the visitor’s reduced-motion setting.

Featured projects appear immediately after a shorter introduction, followed by Experience and Skills. The skills section uses brand silhouettes from the installed Simple Icons, Font Awesome, and Tabler icon sets. Skills that describe concepts rather than brands keep their text labels.

Featured projects are visible together in a responsive gallery, with direct links to details, source, and live apps. The hero retains a short scroll transition and a direct project link; experience and skills stay in normal page flow. The downloadable resume PDF is supplied locally and is excluded from the requested code-only GitHub push.
