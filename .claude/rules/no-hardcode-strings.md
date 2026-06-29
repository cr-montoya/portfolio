# Rule: No Hardcoded User-Facing Strings in JSX

All text visible to the user must come from `useTranslation()`. No exceptions.

## What this covers

- Headings, paragraphs, labels, button text, tooltips, placeholder text.
- Alt text on images (use i18n key, not hardcoded string).
- ARIA labels that contain meaningful copy (not purely technical IDs).
- Section titles, badge labels, link text.

## What is allowed hardcoded

- `aria-labelledby` pointing to an element ID (not copy).
- `data-testid` attributes.
- CSS class names.
- Technical constants (`rel="noopener"`, `type="button"`).
- URL paths and href values.

## Violation

```tsx
// ❌ Never
<h1>Hello, I'm Cristian Montoya</h1>
<p>DevOps & Cloud Engineer</p>
<button>View Projects</button>
<img alt="Cristian Montoya profile photo" />
```

## Correct pattern

```tsx
// ✅ Always
const t = useTranslation()

<h1>{t.hero.greeting}</h1>
<p>{t.hero.role}</p>
<button>{t.hero.ctaProjects}</button>
<img alt={t.hero.photoAlt} />
```

## Adding a new string — required steps

1. Add the key to `src/i18n/types.ts` under the correct section.
2. Add the English value to `src/i18n/en.ts`.
3. Add the Spanish value to `src/i18n/es.ts`.
4. TypeScript fails if either locale file is missing the key — this is intentional.
5. Use the key in JSX.

Never use step 5 before steps 1–4 are done.

## Check

```bash
# Grep for JSX text that looks like real copy (not a variable)
grep -rn ">[A-Z][a-z]" src/sections/
grep -rn ">[A-Z][a-z]" src/components/
```
