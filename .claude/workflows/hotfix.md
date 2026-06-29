# Workflow: Hotfix

Emergency fix workflow for production issues. Shorter process, same safety guarantees.

## Trigger

Production is broken. Cloudflare Pages shows an error. A critical visual bug is reported.

## Rules that still apply

- No direct push to `main`. Everything goes through a PR (branch protection enforces this).
- CI must pass before merge.
- `commit` skill required.
- Human approval required.

## Steps

### 1. Create hotfix branch

```bash
git checkout main && git pull
git checkout -b fix/<short-description>
```

### 2. Create a GitHub Issue (retroactive is fine)

```bash
gh issue create --repo cr-montoya/portfolio \
  --title "[HOTFIX] <description>" \
  --label "bug" \
  --body "## Problem\n<what is broken>\n\n## Fix\n<what was changed>"
```

Note the Issue number for the PR body.

### 3. Fix — ponytail still active

Check the ladder. A hotfix is the highest-risk moment to over-engineer.
Root cause fix only. No opportunistic refactoring.

```bash
npm run type-check
npm run build        # must pass before opening PR
```

### 4. Commit

Invoke skill: `commit`

```
fix(<scope>): <description>
```

### 5. Push and open PR

```bash
git push -u origin fix/<description>
gh pr create --title "fix(<scope>): <description>" \
  --body "Closes #<N>\n\n## Problem\n<what broke>\n\n## Fix\n<what changed>\n\n## Verified\n- [ ] npm run build passes\n- [ ] Cloudflare preview reviewed"
```

### 6. After merge

- Semantic-release creates a patch release automatically (`fix:` commit → patch bump).
- Cloudflare Pages deploys.
- Close the Issue if not auto-closed.

## If production needs an immediate rollback

Before the fix is ready, roll back via Cloudflare Pages dashboard:
Deployments → previous successful deployment → Rollback.
