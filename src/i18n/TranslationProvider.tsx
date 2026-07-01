import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { defaultLocale, isLocale, localeStorageKey } from './locales'
import { TranslationContext } from './TranslationContext'
import { translations } from './translations'
import type { Locale } from '@/types/locale'
import type { TranslationContextValue } from './types'

export interface TranslationProviderProps {
  children: ReactNode
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale

  const storedLocale = window.localStorage.getItem(localeStorageKey)
  return isLocale(storedLocale) ? storedLocale : defaultLocale
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(localeStorageKey, locale)
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<TranslationContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((currentLocale) => (currentLocale === 'en' ? 'es' : 'en')),
      t: translations[locale],
    }),
    [locale],
  )

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}
