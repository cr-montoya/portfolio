# Workflow: Implement Issue

Full implementation workflow from a GitHub Issue spec to a merged PR.
Run this workflow whenever implementing any spec Issue.

## Trigger

User says: "implementa el issue #N", "trabaja en #N", "implement issue #N"

## Steps

### 0. Fetch and assess the Issue

```bash
gh issue view <N> --repo cr-montoya/portfolio
```

- Is the Issue in FR-XXX + Given/When/Then format? If not → update it first (see below).
- Is it assigned to the correct milestone? If not → fix it.
- Is `spec-review` needed? Run it if the Issue hasn't been reviewed yet.

### 1. Update Issue to spec-kit format (if needed)

If the Issue lacks FR-XXX requirements or Given/When/Then scenarios, update it:

```bash
gh issue edit <N> --repo cr-montoya/portfolio --body "<updated body>"
```

Use the format defined in CLAUDE.md § Issue spec format.

### 2. Run spec-review

Invoke skill: `spec-review` against the Issue.
If blockers → resolve them before continuing.

### 3. Create branch

```bash
git checkout main && git pull
git checkout -b feat/<N>-<short-description>
```

### 4. Pre-implementation agents (per gate matrix)

| If the Issue touches... | Run agent |
|-------------------------|-----------|
| UI, layout, visual copy | design |
| Cloudflare config, env vars, CSP | security |

### 5. Implement with task-runner

Invoke skill: `task-runner` for each task in the Issue.

Rules active during implementation:
- `.claude/rules/harness-layers.md` — check before and after every file edit
- `.claude/rules/contracts-before-code.md` — types first, then implementation
- `.claude/rules/no-hardcode-strings.md` — all text via useTranslation()
- `.claude/rules/ponytail-always.md` — check the ladder before writing code

### 6. Post-implementation agents (per gate matrix)

| Change type | Required agents |
|-------------|----------------|
| New section / visual change | design, qa, code-quality, reviewer |
| New component / design system | design, code-quality, reviewer |
| Data shape / i18n | code-quality, reviewer |
| CI/CD / infra | security, qa, reviewer |

### 7. Run spec-closeout

Invoke skill: `spec-closeout` against the Issue.
Checks: criteria satisfaction + harness-sync drift check.
If blockers → fix before continuing.

### 8. Run pr-prep

Invoke skill: `pr-prep` against the Issue and current diff.
Output: filled PR body ready to paste.

### 9. Commit

Invoke skill: `commit` for all staged changes.
Format: `feat(<scope>): <description>` — must include `Closes #N` context in the PR body (not the commit).

### 10. Push and open PR

```bash
git push -u origin feat/<N>-<description>
gh pr create --title "<type>(<scope>): <description>" --body "<pr-prep output>"
```

PR body must include `Closes #N`.

### 11. Wait

- CI must pass (lint + type-check + build + test).
- Review Cloudflare Pages preview for UI changes.
- Human approval required before merge.

### 12. After merge

Invoke skill: `release` to verify semantic-release ran and GitHub Release was created.

## Fast path (chore/docs only)

For `chore:` or `docs:` changes with no spec Issue:
- Skip steps 1–4 and 6–7.
- Still use `commit` skill and `pr-prep`.
- Still require CI pass and human approval.
