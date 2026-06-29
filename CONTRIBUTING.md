# Contributing

This is a personal portfolio repository, but focused improvements are welcome.

## Workflow

1. Open or reference a GitHub Issue spec before changing feature behavior.
2. Create a short-lived branch from `main`.
3. Use `pnpm` for all local commands.
4. Keep changes scoped to one Issue or chore.
5. Open a pull request to `main`.

## Local Checks

Run these before opening a pull request:

```bash
pnpm lint
pnpm type-check
pnpm test
pnpm build
```

## Commit Style

Use conventional commits:

```txt
feat(scope): add new behavior
fix(scope): correct broken behavior
chore(scope): update tooling or docs
```
