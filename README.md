# cr-montoya/portfolio

Personal portfolio landing page — DevOps & Cloud Engineer.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v4
- Bilingual EN/ES
- Cloudflare Pages

## Development

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build
pnpm preview
pnpm type-check
pnpm lint
pnpm test
```

## Architecture

```
App  <-  Sections  <-  Components  <-  Primitives
              ↑              ↑
           data/           i18n/
```

See [CLAUDE.md](./CLAUDE.md) for full harness rules, conventions, and workflow.

## Workflow

- Trunk-based development: short branches → `main`.
- Every PR references a GitHub Issue spec (`Closes #N`).
- Every merge to `main` triggers a GitHub Release via semantic-release.
- Cloudflare Pages deploys automatically on merge.

## Deployment

Cloudflare Pages is connected to GitHub and deploys automatically.

| Setting            | Value                    |
| ------------------ | ------------------------ |
| Production branch  | `main`                   |
| Build command      | `pnpm build`             |
| Build output       | `dist`                   |
| Preview deployment | Pull requests / branches |

Deployment metadata lives in `public/` and is copied into `dist` by Vite:

- `robots.txt`
- `sitemap.xml`
- `_headers`
- `_redirects`

## Releases

Releases are created automatically from [conventional commits](https://www.conventionalcommits.org/):

| Commit prefix     | Release type |
| ----------------- | ------------ |
| `feat:`           | Minor        |
| `fix:`            | Patch        |
| `BREAKING CHANGE` | Major        |

## Links

- [Live site](https://romanops.dev)
- [GitHub Issues — specs and roadmap](https://github.com/cr-montoya/portfolio/issues)
- [Releases](https://github.com/cr-montoya/portfolio/releases)
