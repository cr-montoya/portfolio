import type { Translations } from '@/i18n/types'

export type SkillCategory = 'cloud' | 'iac' | 'cicd' | 'languages' | 'observability' | 'security'

export type SkillLevel = 'expert' | 'advanced' | 'familiar'

export interface Skill {
  id: string
  category: SkillCategory
  nameKey: keyof Translations['skills']['items']
  symbol: string
  level: SkillLevel
}

export interface SkillCategoryGroup {
  id: SkillCategory
  labelKey: keyof Translations['skills']['categories']
}
