import { LanguageToggle } from '@/components/LanguageToggle'
import { localeOptions, useTranslation } from '@/i18n'
import type { Locale } from '@/types/locale'

export default function App() {
  const { locale, setLocale, t } = useTranslation()

  const getOptionAriaLabel = (optionLocale: Locale) =>
    optionLocale === 'en' ? t.common.switchToEnglish : t.common.switchToSpanish

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <header className="mx-auto flex max-w-6xl justify-end px-6 py-6">
        <LanguageToggle
          ariaLabel={t.nav.languageToggle}
          getOptionAriaLabel={getOptionAriaLabel}
          locale={locale}
          onLocaleChange={setLocale}
          options={localeOptions}
        />
      </header>
    </div>
  )
}
