import type { Translations } from '@/i18n/types'

export interface AboutFocusArea {
  id: 'aws' | 'iac' | 'cicd' | 'security' | 'observability' | 'aidlc'
  labelKey: keyof Translations['about']['focus']
}
