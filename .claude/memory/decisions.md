# Architectural Decisions

Active decisions that shape every implementation choice. Updated when a decision changes.

---

## Stack

- **React 18 + Vite** over Next.js: portfolio is a static SPA, no SSR needed. Simpler build, faster dev.
- **Tailwind v4** over CSS modules: utility-first keeps components self-contained and avoids naming overhead.
- **npm** over pnpm/yarn: simplicity, no workspace overhead for a single-package repo.
- **Vitest** over Jest: native Vite integration, zero config.

## Deploy

- **Cloudflare Pages** over Vercel/Netlify: aligns with Cristian's DevOps profile, global CDN, generous free tier.
- **Semantic-release** for versioning: conventional commits → automatic GitHub Releases, no manual tagging.

## i18n

- **Custom `useTranslation` hook** over i18next: the translation set is static and small. i18next adds
  ~33KB for a problem solvable with a typed dictionary and React context.
  Revisit if dynamic loading or pluralization becomes needed.
- **Locale in `localStorage`**: persists across reloads without URL params or cookies.

## Design

- **Dark terminal aesthetic** confirmed. Design tokens defined in CLAUDE.md § Design.
- **JetBrains Mono** for headings/code, **Inter** for body. Both via Google Fonts (preloaded).

## Harness

- **No data fetching at runtime**: all project/skill/experience data is static TypeScript.
  GitHub API stats (stars, forks) are either hardcoded or omitted to keep the build static.
  Revisit only if a Cloudflare Worker is added for a contact form.
- **`titleKey: keyof Translations['section']`** pattern confirmed as the contract linking
  data to i18n. This is the intended approach for all sections that combine data + translations.

---

*Add new decisions here when made. Include date and the alternative considered.*
