import type { ButtonVariant } from '@/components/ui'
import type { Translations } from '@/i18n/types'

export interface HeroAction {
  id: 'projects' | 'contact'
  href: '#projects' | '#contact'
  labelKey: keyof Translations['hero']['actions']
  variant: ButtonVariant
}

export interface HeroSocialLink {
  id: 'github' | 'linkedin' | 'email'
  href: string
  labelKey: keyof Translations['hero']['social']
}
