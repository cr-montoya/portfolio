# Established Patterns

Patterns confirmed in the codebase. Updated as new patterns are established or old ones revised.

---

## Section pattern

Every section follows this exact structure:

```tsx
// src/sections/<Name>.tsx

import { <data> } from '@/data/<file>'
import { useTranslation } from '@/i18n/useTranslation'
import { <Component> } from '@/components/<Component>'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function <Name>() {
  const t = useTranslation()

  return (
    <SectionWrapper id="<kebab-name>">
      <SectionTitle prefix=">" label={t.<section>.title} />
      {/* compose components here */}
    </SectionWrapper>
  )
}
```

## Component pattern

Props interface exported at the top of the file. Component receives pre-translated strings.

```tsx
// src/components/<Name>.tsx

export interface <Name>Props {
  // all string props are pre-translated by the parent Section
}

export function <Name>(props: <Name>Props) {
  // no useTranslation() here
}
```

## Data + i18n key linking pattern

```ts
// src/types/<entity>.ts
import type { Translations } from '@/i18n/types'

export interface <Entity> {
  titleKey: keyof Translations['<section>']
}

// src/sections/<Section>.tsx
const t = useTranslation()
<Component title={t.<section>[item.titleKey]} />
```

## Scroll targeting

All sections receive an `id` matching the nav link href:
- `#hero`, `#about`, `#skills`, `#projects`, `#experience`, `#certifications`, `#contact`

## Ponytail mark pattern

Deliberate simplifications are marked inline:

```tsx
{/* ponytail: <reason>, upgrade when <condition> */}
```

---

*Add new patterns as they emerge from the first implemented sections.*
