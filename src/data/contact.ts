import type { ContactLink } from '@/types/contact'

export const contactLinks: readonly ContactLink[] = [
  {
    id: 'email',
    href: 'mailto:cristianmontoyar27@gmail.com',
    labelKey: 'email',
    descriptionKey: 'email',
    symbol: '@',
    external: false,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/cristian-montoya-devops/',
    labelKey: 'linkedin',
    descriptionKey: 'linkedin',
    symbol: 'in',
    external: true,
  },
  {
    id: 'github',
    href: 'https://github.com/cr-montoya',
    labelKey: 'github',
    descriptionKey: 'github',
    symbol: 'gh',
    external: true,
  },
]
