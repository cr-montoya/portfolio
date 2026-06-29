# cr-montoya/portfolio

Personal portfolio landing page — DevOps & Cloud Engineer.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v4
- Bilingual EN/ES
- Cloudflare Pages

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
npm run preview
npm run type-check
npm run lint
npm test
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

## Releases

Releases are created automatically from [conventional commits](https://www.conventionalcommits.org/):

| Commit prefix | Release type |
|---|---|
| `feat:` | Minor |
| `fix:` | Patch |
| `BREAKING CHANGE` | Major |

## Links

- [Live site](https://portfolio.pages.dev) *(pending custom domain)*
- [GitHub Issues — specs and roadmap](https://github.com/cr-montoya/portfolio/issues)
- [Releases](https://github.com/cr-montoya/portfolio/releases)
