import type { Translations } from '@/i18n/types'

export interface ExperiencePeriod {
  start: string
  end: string | 'present'
}

export interface ExperienceEntry {
  id: 'alternova-tech-lead' | 'alternova-devops-security-engineer'
  company: string
  roleKey: keyof Translations['experience']['roles']
  period: ExperiencePeriod
  accomplishmentsKeys: readonly (keyof Translations['experience']['accomplishments'])[]
  technologies: readonly string[]
  current: boolean
}
