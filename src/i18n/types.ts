import type { Locale } from '@/types/locale'

export interface Translations {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    certifications: string
    contact: string
    languageToggle: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    ctaProjects: string
    ctaContact: string
  }
  about: {
    title: string
    body: string
  }
  skills: {
    title: string
    description: string
  }
  projects: {
    title: string
    description: string
  }
  experience: {
    title: string
    description: string
  }
  certifications: {
    title: string
    description: string
  }
  contact: {
    title: string
    description: string
    cta: string
  }
  common: {
    currentLanguage: string
    switchToEnglish: string
    switchToSpanish: string
  }
}

export interface TranslationContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: Translations
}
