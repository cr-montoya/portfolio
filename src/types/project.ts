import type { Translations } from '@/i18n/types'

export interface Project {
  id: 'aws-account-security-toolkit' | 'wc2026-prediction-simulator' | 'aws-devops-pro-practice'
  nameWithOwner: string
  repositoryUrl: string
  demoUrl?: string
  primaryLanguage: string
  topics: readonly string[]
  featured: boolean
  titleKey: keyof Translations['projects']['items']
  descriptionKey: keyof Translations['projects']['items']
}
