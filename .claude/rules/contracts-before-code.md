# Rule: Contracts Before Code

Never write implementation code for a section or component without a TypeScript contract defined first.

## What counts as a contract

1. **Type file** (`src/types/<entity>.ts`) — the data shape.
2. **Props interface** — in the component file itself, exported at the top.
3. **i18n keys** — added to `Translations` in `src/i18n/types.ts` before using them.

## Order of implementation

```
1. Define/update src/types/<entity>.ts
2. Add i18n keys to src/i18n/types.ts  ← TypeScript will fail until both en.ts and es.ts satisfy it
3. Add data to src/data/<entity>.ts
4. Add translations to src/i18n/en.ts and src/i18n/es.ts
5. Write the primitive (if new)
6. Write the component with its props interface at the top
7. Write the section
```

Never jump to step 5+ without completing steps 1-4.

## The contract links data to i18n

The tightest contract in this project is `titleKey: keyof Translations['projects']`.
This means adding a project to `src/data/projects.ts` with a `titleKey` that doesn't
exist in `Translations['projects']` fails at compile time — in the data file, before
the section or component is ever touched.

```ts
// src/types/project.ts
import type { Translations } from '@/i18n/types'

export interface Project {
  id: string
  titleKey: keyof Translations['projects'] // ← fails if key doesn't exist in i18n
  descriptionKey: keyof Translations['projects'] // ← same guarantee
}
```

## Violation pattern to avoid

```ts
// ❌ Writing the component first with ad-hoc props, then figuring out data/i18n
function ProjectCard({ title, desc }: { title: string; desc: string }) { ... }

// ✅ Define the contract in the Issue spec first, implement the type, then the component
export interface ProjectCardProps {
  title: string        // pre-translated by the parent Section
  description: string
  url: string
  language: string
  topics: string[]
  featured?: boolean
}
```

## In spec Issues

Every Issue for a section or component must include a **Contracts** section with the
TypeScript interfaces before it moves to `ready-to-implement`. This is checked by `spec-review`.
