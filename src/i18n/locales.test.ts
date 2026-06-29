import { describe, expect, it } from 'vitest'
import { defaultLocale, isLocale, localeOptions } from './locales'
import { translations } from './translations'

describe('i18n locale contract', () => {
  it('accepts only supported locales', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('es')).toBe(true)
    expect(isLocale('fr')).toBe(false)
    expect(isLocale(null)).toBe(false)
  })

  it('has translations for every locale option', () => {
    expect(defaultLocale).toBe('en')

    for (const option of localeOptions) {
      expect(translations[option.code].nav.languageToggle).toBeTruthy()
    }
  })
})
