# Workflow: New Section

Specific sequence for adding a new portfolio section. More concrete than implement-issue
because sections always follow the same inside-out order.

## Trigger

User says: "agrega la sección X", "implementa la sección X", "add section X"

## Pre-condition

A spec Issue for this section must exist with contracts defined.
If not, go to `implement-issue` workflow step 1 first.

## Sequence (inside-out)

### Step 1 — Types (`src/types/`)

Define the data interface for this section's content (if it has data).

```ts
// src/types/skill.ts
export interface Skill {
  name: string
  icon: string
  level: 'expert' | 'advanced' | 'familiar'
  category: SkillCategory
}
export type SkillCategory = 'cloud' | 'iac' | 'cicd' | 'languages' | 'observability' | 'security'
```

Ponytail check: does `src/types/` already have a type that covers this? Reuse or extend it.

### Step 2 — i18n contract (`src/i18n/types.ts`)

Add the new section's keys to the `Translations` interface.

```ts
// src/i18n/types.ts
export interface Translations {
  // ...existing
  skills: {
    title: string
    categories: Record<SkillCategory, string>
    levels: Record<'expert' | 'advanced' | 'familiar', string>
  }
}
```

TypeScript now fails until `en.ts` and `es.ts` satisfy the new keys. Good.

### Step 3 — Translations (`src/i18n/en.ts` + `src/i18n/es.ts`)

Fill both locale files to satisfy the updated `Translations` type.
Both must be done in the same commit — never leave one locale ahead of the other.

### Step 4 — Data (`src/data/`)

Add the static content file.

```ts
// src/data/skills.ts
import type { Skill } from '@/types/skill'

export const skills: Skill[] = [...]
```

Ponytail check: is this data really needed? Can the section work with i18n strings alone?

### Step 5 — Primitives (`src/components/ui/`)

Add any new primitive needed by this section only. Check existing primitives first.
Ponytail check: does `Badge`, `Card`, `Button` already cover the need? Extend, don't duplicate.

### Step 6 — Component (`src/components/`)

Create the component with its props interface at the top of the file.
The component receives pre-translated strings — it does NOT call `useTranslation()`.

```ts
// Props interface at the top of the component file
export interface SkillBadgeProps {
  name: string // already translated by parent
  level: Skill['level']
  icon: string
}
```

### Step 7 — Section (`src/sections/`)

The section owns the i18n + data boundary. It:

1. Calls `useTranslation()`
2. Imports from `src/data/`
3. Maps data to component props, resolving i18n keys

```tsx
// src/sections/Skills.tsx
import { skills } from '@/data/skills'
import { useTranslation } from '@/i18n/useTranslation'
import { SkillBadge } from '@/components/SkillBadge'

export function Skills() {
  const t = useTranslation()
  return (
    <SectionWrapper id="skills">
      <SectionTitle prefix=">" label={t.skills.title} />
      {skills.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
      ))}
    </SectionWrapper>
  )
}
```

### Step 8 — Wire into App.tsx

Import and add the section to `src/App.tsx` in scroll order.
Add nav link in `Navbar` if applicable.

### Step 9 — Verify

```bash
npm run type-check   # must pass — catches missing i18n keys, wrong types
npm run build        # must pass
npm run dev          # visual check in browser
```

## Checklist

- [ ] Types defined in `src/types/`
- [ ] i18n keys in `Translations` interface
- [ ] Both `en.ts` and `es.ts` updated
- [ ] Data in `src/data/` (or none needed)
- [ ] New primitives checked against existing (ponytail)
- [ ] Component has exported props interface at top
- [ ] Section does NOT import another section
- [ ] Section resolves i18n before passing to component
- [ ] Wired into `App.tsx`
- [ ] `npm run type-check` passes
