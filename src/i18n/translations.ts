import { en } from './en'
import { es } from './es'
import type { Locale } from '@/types/locale'
import type { Translations } from './types'

export const translations = {
  en,
  es,
} satisfies Record<Locale, Translations>
