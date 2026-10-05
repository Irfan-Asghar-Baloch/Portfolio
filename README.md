# Irfan Asghar — Engineering Portfolio

A responsive React + Vite portfolio with a charcoal and teal design, featured AI workflow, project filters, grouped expertise, experience and direct contact links.

## Local development

```bash
npm ci
npm run dev
```

## Build and verify

```bash
npm run lint
npm run build
npm run preview
```

Publish `dist` to the existing `gh-pages` branch. The public site uses that branch, not `main`. Relative paths support the GitHub Pages `/Portfolio/` URL.

## Content and customization

- `src/App.jsx`: profile, work, expertise, experience and contact details.
- `src/App.css`: responsive page layout.
- `src/index.css`: global styles and accessibility defaults.
- `src/assets/profile.png`: original portrait.
- Employer projects are high-level descriptions; ongoing AI work is labeled.
- The old PDF is retained in `public` but is not promoted in the redesign. Replace it with an updated CV before adding a download link.
- Contact uses email and LinkedIn links; copy email requires clipboard support. No message delivery service is needed.

## Validation

Production build and ESLint pass. Headless browser checks at 1440px and 390px confirm no horizontal overflow, working project filters, mobile menu navigation and no runtime errors. Desktop and mobile screenshots were reviewed.
