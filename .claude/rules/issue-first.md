# Rule: Issue First

No code change without a linked GitHub Issue. No exceptions for "small" changes.

## Before any implementation

1. Identify the Issue number.
2. Confirm the Issue has the FR-XXX + Given/When/Then format (or update it first).
3. Confirm `spec-review` has no blockers.
4. Create the branch: `feat/<issue-number>-<short-description>` or `fix/<description>`.

## Branch naming

```
feat/5-hero-section
feat/7-skills-section
fix/navbar-scroll-mobile
chore/ci-add-test-step
```

The Issue number in the branch name is non-optional for `feat/` branches.
It makes `git log` readable and `gh pr list` filterable by Issue.

## PR body

Every PR must include `Closes #N` in the body. GitHub auto-closes the Issue on merge.
Never open a PR without it.

## Why

Without an Issue, there is no spec. Without a spec, there are no acceptance criteria.
Without acceptance criteria, `spec-closeout` cannot verify anything.
The harness collapses into vibe coding.

## Allowed exceptions

- `chore:` commits (config, deps, CI fixes) that are self-evident and non-breaking
  may reference an existing Issue or omit it if truly standalone.
- Emergency hotfixes may proceed with a retroactive Issue, but one must be created.
