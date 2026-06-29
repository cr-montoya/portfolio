# PR

## Type

- [ ] `feat/<issue-number>-<description>` — new section or feature
- [ ] `fix/<description>` — bug fix
- [ ] `chore/<description>` — tooling, CI, config
- [ ] `docs/<description>` — documentation only

## Spec Issue

- Closes #
- Spec status: pending / active / in_review / completed
- All FR-XXX requirements satisfied or deferred: [ ] yes / [ ] no (explain below)

## Summary

<!-- What changes in this PR and why. If it closes a spec Issue, describe the key implementation decisions. -->

## Scope

-

## Out of scope

<!-- What was explicitly NOT touched to keep this PR small. -->

-

## Acceptance criteria (from Issue)

<!-- Copy or summarize from the Issue. Mark each as done or deferred. -->

- [ ]
- [ ]

## Cloudflare Pages preview

- Preview URL:
- Routes reviewed:
  - [ ] `/` (home)
  - [ ] Mobile layout
  - [ ] EN/ES language toggle
  - [ ] Other:
- [ ] Not applicable (no UI change)

## Gates

- [ ] Design: passed / not applicable
- [ ] QA: passed
- [ ] Code Quality: passed / not applicable
- [ ] Reviewer: passed
- [ ] Security: passed / not applicable

## Verification

- [ ] `npm run type-check` — pass
- [ ] `npm test` — pass / skipped (reason: )
- [ ] `npm run build` — pass
- [ ] `npm run lint` — pass

## Harness

- [ ] No section imports another section
- [ ] No hardcoded user-facing strings in JSX (all via `useTranslation()`)
- [ ] No data literals in section files (all from `src/data/`)
- [ ] No primitive imports from `src/data/` or `src/i18n/`
- [ ] Not applicable

## Ponytail

- [ ] Checked ladder (YAGNI → reuse → stdlib → native → installed dep → one line)
- [ ] No unrequested abstractions added
- [ ] Not applicable

## Security

- [ ] No secrets or API keys in the diff
- [ ] No `VITE_*` variables used for secrets
- [ ] CSP reviewed if `_headers` or Cloudflare config changed
- [ ] Not applicable

## Release

This PR will trigger a release on merge if it contains `feat:` or `fix:` commits.

Expected version bump: major / minor / patch / none

## Risks and rollback

Risks:
-

Rollback:

- [ ] Revert this PR
- [ ] Cloudflare Pages rollback to previous deployment
- [ ] Other:

## Checklist before merge

- [ ] Branch is up to date with `main`
- [ ] PR targets `main`
- [ ] Commits follow Conventional Commits (`type(scope): description`)
- [ ] PR is small and reviewable — single Issue scope
- [ ] Template complete (mark non-applicable items explicitly)
- [ ] `main` remains deployable after merge
- [ ] Human owner approval received
