# Rule: Harness Layer Boundaries

Enforced on every file edit. Check BEFORE writing and AFTER writing.

## Allowed imports per layer

| Layer                             | May import from                                                |
| --------------------------------- | -------------------------------------------------------------- |
| `src/components/ui/` (Primitives) | React, external libs, `src/types/` only                        |
| `src/components/` (Components)    | Primitives, React, external libs, `src/types/` only            |
| `src/sections/` (Sections)        | Components, Primitives, `src/data/`, `src/i18n/`, `src/types/` |
| `src/data/`                       | `src/types/` only                                              |
| `src/i18n/`                       | `src/types/` only                                              |
| `src/App.tsx`                     | Sections, Components, `src/i18n/`, `src/types/`                |

## Violations — stop immediately if found

```ts
// ❌ Primitive importing from data
// src/components/ui/Badge.tsx
import { skills } from '@/data/skills'

// ❌ Component importing from i18n
// src/components/ProjectCard.tsx
import { useTranslation } from '@/i18n/useTranslation'

// ❌ Section importing another section
// src/sections/Hero.tsx
import { About } from '@/sections/About'

// ❌ Data importing from components
// src/data/projects.ts
import { ProjectCard } from '@/components/ProjectCard'

// ❌ Hardcoded user-facing string in JSX (belongs in i18n)
// src/sections/Hero.tsx
<h1>Hello, I'm Cristian</h1>
```

## Correct patterns

```ts
// ✅ Section owns the i18n + data boundary
// src/sections/Projects.tsx
import { projects } from '@/data/projects'
import { useTranslation } from '@/i18n/useTranslation'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  const t = useTranslation()
  return projects.map(p => (
    <ProjectCard
      title={t.projects[p.titleKey]}   // translated here, not in component
      description={t.projects[p.descriptionKey]}
      {...p}
    />
  ))
}

// ✅ Component accepts only props — already translated
// src/components/ProjectCard.tsx
export function ProjectCard({ title, description, url }: ProjectCardProps) {
  return <Card>...</Card>
}
```

## Check command

After editing, mentally verify or grep:

```bash
# Check for cross-layer imports in a file
grep -n "from '@/data" src/components/ProjectCard.tsx
grep -n "from '@/sections" src/sections/Hero.tsx
```
