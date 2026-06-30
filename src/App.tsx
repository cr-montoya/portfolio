import { LanguageToggle } from '@/components/LanguageToggle'
import { Navbar } from '@/components/Navbar'
import { localeOptions, useTranslation } from '@/i18n'
import { About } from '@/sections/About'
import { Certifications } from '@/sections/Certifications'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Judo } from '@/sections/Judo'
import { Projects } from '@/sections/Projects'
import { Writing } from '@/sections/Writing'
import type { Locale } from '@/types/locale'

export default function App() {
  const { locale, setLocale, t } = useTranslation()

  const getOptionAriaLabel = (optionLocale: Locale) =>
    optionLocale === 'en' ? t.common.switchToEnglish : t.common.switchToSpanish

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#judo', label: t.nav.judo },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#writing', label: t.nav.writing },
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
        <Projects />
        <Experience />
        <Judo />
        <Certifications />
        <Writing />
        <Contact />
      </main>
    </div>
  )
}
