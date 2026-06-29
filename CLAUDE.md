# CLAUDE.md — Portfolio

## What it is

Personal portfolio landing page for Cristian Montoya, DevOps & Cloud Engineer.
React + Vite + TypeScript + Tailwind v4. Bilingual EN/ES. Dark terminal/tech aesthetic.
Deployed to Cloudflare Pages. Every merge to `main` creates a versioned GitHub Release.

## Stack

- React 18 + Vite + TypeScript (strict mode).
- Tailwind CSS v4.
- `i18next` or custom `useTranslation` hook for EN/ES toggle.
- Vitest for unit tests.
- `main` deploys to Cloudflare Pages automatically.
- PRs generate Cloudflare Pages preview deployments.

## Layer harness

Dependencies flow in one direction only. No layer may import from a layer above it.

```
App  <-  Sections  <-  Components  <-  Primitives
              ↑              ↑
           data/           i18n/
        (static TS)     (typed dicts)
```

### Primitive contract (`src/components/ui/`)

- Accepts only props. No imports from `data/`, `i18n/`, sections, or App.
- No fetch, no side effects, no global state.
- Fully typed props interface in the same file.
- Examples: `Button`, `Badge`, `Card`, `SectionTitle`, `TerminalLine`.

### Component contract (`src/components/`)

- Composes primitives. Accepts only props.
- May use React hooks for local UI state (e.g. hover, animation).
- No imports from `data/` or `i18n/`.
- Examples: `Navbar`, `ProjectCard`, `SkillGrid`, `TimelineEntry`.

### Section contract (`src/sections/`)

- Imports from `data/` and `i18n/` to compose components.
- No section imports another section.
- Each section is a self-contained, scroll-targeted block.
- Examples: `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Certifications`, `Contact`.

### Data contract (`src/data/`)

- Pure static TypeScript objects. No imports from components, sections, or i18n.
- All exported types live in `src/types/`.
- Examples: `projects.ts`, `skills.ts`, `experience.ts`, `certifications.ts`.

### i18n contract (`src/i18n/`)

- Typed translation dictionaries for `en` and `es`.
- Both implement the same `Translations` interface — missing keys are a type error.
- Locale stored in `localStorage` via context. No imports from components or data.

## Available agents

Invoke with `Agent({ subagent_type: ... })` or let Claude orchestrate:

- **design**: reviews visual direction, responsive behavior, dark theme consistency, component hierarchy, and visual copy.
- **developer**: implements React components following specs and harness contracts.
- **qa**: validates build, type-check, Lighthouse scores, a11y, and responsive behavior.
- **code-quality**: reviews TypeScript patterns, Tailwind usage, simplicity, and duplication.
- **reviewer**: audits layer contracts, harness violations, and spec-to-implementation consistency.
- **security**: audits env vars, CSP headers for Cloudflare Pages, and client-side secret exposure.

## Spec Driven Development

Every section, feature, or relevant fix must have a GitHub Issue spec before implementation.

### Issue spec format

Every spec Issue follows this structure (adapted from [spec-kit](https://github.com/github/spec-kit)):

```markdown
## Objective
[What this change accomplishes and why it matters.]

## Scope
- [Included behavior]

## Out of scope
- [Explicitly excluded behavior]

## User Scenarios

### Scenario 1 — [Title] (P1)
**Given** [initial state], **When** [user action], **Then** [expected outcome].
**Independent test**: [how to verify this alone]

### Scenario 2 — [Title] (P2)
...

## Functional Requirements
- **FR-001**: System MUST [specific verifiable behavior]
- **FR-002**: [...]

## Contracts (if applicable)
[TypeScript interfaces for data shapes, props, or i18n keys]

## Acceptance Criteria
- [ ] [Observable outcome tied to FR or scenario]

## Gates
- Design: pending / passed / not_applicable
- QA: pending / passed
- Code Quality: pending / passed
- Reviewer: pending / passed
- Security: pending / not_applicable
```

**Labels**: `spec`, plus `section` / `harness` / `design-system` / `i18n` as applicable.
**Milestone**: assigned to the correct milestone.

### Definition of Ready

A spec Issue is ready for implementation when:

- Objective and scope are clear.
- Acceptance criteria are verifiable.
- Data and component contracts are defined if the section has data.
- Labels and milestone are set.
- `spec-review` skill reports no blockers.

### Definition of Done

A spec Issue may be closed when:

- All acceptance criteria are checked off.
- The implementation respects the contracts or documents deviations in the Issue.
- Applicable gates are approved.
- PR links the Issue (`Closes #N`).
- `main` is still deployable after merge.

### Gate matrix

| Change type | Required gates |
| --- | --- |
| New section / visual change | Design, QA, Code Quality, Reviewer |
| New component / design system | Design, Code Quality, Reviewer |
| Data shape / i18n structure | Code Quality, Reviewer |
| CI/CD / Cloudflare / infra | Security, QA, Reviewer |
| Docs / issue specs only | Reviewer optional |
| Bug fix | QA, Code Quality, Reviewer |

## Available skills

- `.claude/skills/ponytail.md`: enforce minimal code — YAGNI → reuse → stdlib → native → one line. **Always active** for Developer. See skill for intensity levels (lite / full / ultra).
- `.claude/skills/spec-review.md`: review a GitHub Issue spec for readiness before implementation.
- `.claude/skills/task-runner.md`: implement a scoped task from an approved spec Issue.
- `.claude/skills/spec-closeout.md`: verify acceptance criteria and check spec/implementation drift before opening a PR.
- `.claude/skills/pr-prep.md`: prepare the PR body from the Issue, diff, and gates.
- `.claude/skills/commit.md`: create a conventional commit.
- `.claude/skills/release.md`: document and verify the release after merge to main.

Recommended flow:

1. Identify the spec Issue and confirm it is ready (or run `spec-review`).
2. Run applicable pre-implementation agents: Design for UI/visual, Security for infra/env vars.
3. Use `task-runner` to implement a scoped task with Developer. Ponytail is always active.
4. Run post-implementation agents: QA, Code Quality, Reviewer, Design re-check if applicable.
5. Run `spec-closeout` to verify acceptance criteria and check for spec/implementation drift.
6. Run `pr-prep` before opening the PR.
7. Use `commit` skill for all commits.
8. Open PR toward `main` using `.github/pull_request_template.md`. PR must reference `Closes #N`.
9. Review Cloudflare Pages preview.
10. Wait for human approval.
11. Merge to `main`. Semantic-release creates a GitHub Release automatically.

## Commit convention

All commits must follow Conventional Commits:

```
<type>(<scope>): <description>
```

- Message in English.
- Single line. No body, no footer, no `Co-Authored-By`.
- Types: `feat`, `fix`, `chore`, `refactor`, `test`, `docs`, `style`, `perf`.
- Scope: affected layer or section (e.g. `hero`, `navbar`, `i18n`, `ci`, `design-system`). Omit only if truly cross-cutting.
- Imperative mood, present tense, max 72 chars total.

```
feat(hero): add animated terminal greeting with cursor blink
fix(navbar): correct scroll detection threshold on mobile
chore(ci): add type-check step to CI workflow
style(skills): adjust badge spacing on small screens
```

## Release workflow

Every merge to `main` triggers `semantic-release`:

- `feat:` commits → **minor** version bump (1.0.0 → 1.1.0).
- `fix:` commits → **patch** version bump (1.0.0 → 1.0.1).
- `BREAKING CHANGE` footer → **major** bump (1.0.0 → 2.0.0).
- `chore:`, `docs:`, `style:` → no release.

Each release creates a GitHub Release with auto-generated changelog.
`package.json` version is bumped and committed back to `main` automatically.

## Trunk-based development

- `main` is the trunk. It must always be deployable.
- Branches are short-lived: `feat/<issue-number>-<description>` or `fix/<description>`.
- No long-lived feature branches. No `develop` or `staging` branches.
- Branches are deleted after merge.
- Direct pushes to `main` are blocked (branch protection). Everything goes through PRs.
- One spec Issue per PR. Do not mix multiple Issues in one PR.
- PRs must be small and reviewable. Split large Issues into multiple vertical PRs.

## Conventions

- Implement from the inside out: Primitives → Components → Sections → App.
- All section content comes from `i18n/` — no hardcoded strings in JSX.
- All section data comes from `data/` — no data literals in component files.
- No `any` in TypeScript.
- No CSS modules or styled-components — Tailwind only.
- No `npm` or `yarn` — use `npm` (this project uses npm).
- Secrets never go in the client bundle. No `VITE_*` prefixed secrets.

## Design

Terminal / broadcast aesthetic: dark backgrounds, accent greens and cyans, monospace for
headings and labels, large scannable text. The visitor should immediately understand who
Cristian is and what he builds — no generic template look.

Design tokens:
- Background: `#0a0e1a` (deep navy)
- Surface: `#111827`
- Accent green: `#00ff9d`
- Accent cyan: `#00d4ff`
- Text primary: `#f0f6fc`
- Text muted: `#8b949e`
- Font heading/code: JetBrains Mono
- Font body: Inter

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run type-check
npm run lint
npm test
```

## Git flow

1. Pull latest `main`.
2. Create branch: `feat/<issue-number>-<short-description>` or `fix/<description>`.
3. Run `spec-review` on the target Issue if not done.
4. Run applicable pre-implementation agents.
5. Implement with `task-runner`.
6. Run post-implementation agents.
7. Run `spec-closeout`.
8. Run `pr-prep`.
9. Use `commit` skill for all commits.
10. Push branch and open PR to `main`. Include `Closes #N` in the PR body.
11. CI must pass (lint, type-check, build).
12. Review Cloudflare Pages preview.
13. Wait for human approval.
14. Merge. Semantic-release runs. Cloudflare Pages deploys.
15. Delete branch.

If `main` breaks after merge: revert the PR or use Cloudflare Pages rollback.

## Pre-merge checklist

1. Design approved if UI or visual copy changed.
2. `npm run type-check` passes.
3. `npm test` passes.
4. `npm run build` passes.
5. QA approved.
6. Code Quality with no blockers.
7. Reviewer with no blockers.
8. Security with no criticals if infra/env vars changed.
9. Cloudflare Pages preview reviewed for UI changes.
10. PR references `Closes #N` for the spec Issue.
