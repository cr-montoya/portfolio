import { LanguageToggle } from '@/components/LanguageToggle'
import { Navbar } from '@/components/Navbar'
import { localeOptions, useTranslation } from '@/i18n'
import { About } from '@/sections/About'
import { Certifications } from '@/sections/Certifications'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'
import type { Locale } from '@/types/locale'

export default function App() {
  const { locale, setLocale, t } = useTranslation()

  const getOptionAriaLabel = (optionLocale: Locale) =>
    optionLocale === 'en' ? t.common.switchToEnglish : t.common.switchToSpanish

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#contact', label: t.nav.contact },
  ] as const

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar
        brandLabel={t.nav.brand}
        languageToggle={
          <LanguageToggle
            ariaLabel={t.nav.languageToggle}
            getOptionAriaLabel={getOptionAriaLabel}
            locale={locale}
            onLocaleChange={setLocale}
            options={localeOptions}
          />
        }
        links={navLinks}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
      </main>
    </div>
  )
}
