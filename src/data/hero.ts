import type { HeroAction, HeroSocialLink } from '@/types/hero'

export const heroActions = [
  {
    id: 'projects',
    href: '#projects',
    labelKey: 'projects',
    variant: 'primary',
  },
  {
    id: 'contact',
    href: '#contact',
    labelKey: 'contact',
    variant: 'secondary',
  },
] as const satisfies readonly HeroAction[]

export const heroSocialLinks = [
  {
    id: 'github',
    href: 'https://github.com/cr-montoya',
    labelKey: 'github',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/cristian-montoya',
    labelKey: 'linkedin',
  },
  {
    id: 'email',
    href: 'mailto:cristianmontoyar27@gmail.com',
    labelKey: 'email',
  },
] as const satisfies readonly HeroSocialLink[]
