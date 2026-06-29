import type { Translations } from '@/i18n/types'

export interface ContactLink {
  id: 'email' | 'linkedin' | 'github'
  href: string
  labelKey: keyof Translations['contact']['links']
  descriptionKey: keyof Translations['contact']['linkDescriptions']
  symbol: string
  external: boolean
}
