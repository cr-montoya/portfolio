import type { Locale, LocaleOption } from '@/types/locale'

export const defaultLocale: Locale = 'en'

export const localeStorageKey = 'portfolio.locale'

export const localeOptions = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'es', label: 'Español', shortLabel: 'ES' },
] as const satisfies readonly LocaleOption[]

export function isLocale(value: string | null): value is Locale {
  return localeOptions.some((option) => option.code === value)
}
