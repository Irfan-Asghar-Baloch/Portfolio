# Irfan Asghar — Portfolio

React + Vite portfolio updated for Full-Stack AI Engineering, with a .NET backend foundation.

## Run locally

```bash
npm ci
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Publish the contents of `dist` using your existing hosting provider. Relative asset paths support the existing GitHub Pages `/Portfolio/` path. Tailwind is compiled locally; no styling CDN is required.

## Update notes

- Updated hero, biography, services, footer and page metadata for .NET, Python, React, LLMs and AI agents.
- Updated experience to 2+ years and added both MaxRemind roles without inventing employment dates.
- Added an experience section and current EHR demo agent and LLM support API work. Ongoing projects are explicitly identified.
- Replaced unverified case-study outcome figures and compliance claims with concrete contributions.
- Kept the existing visual style, portraits and contact/social details.
- Corrected the EmailJS import to the installed SDK. Existing EmailJS settings are retained; live message delivery requires your service to remain configured and was not tested.
- Retained the old resume as “Previous Resume”; replace `public/resume.pdf` with your updated CV before publishing.
- Removed editor caches from the deliverable.

## Validation

`npm run build` and `npm run lint` pass. Browser visual testing could not run because a browser executable was unavailable in this environment. The contact form was not submitted during verification.
