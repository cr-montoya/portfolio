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

// Hidden until there is published writing; set to true to restore the section and nav link.
const SHOW_WRITING = false

export default function App() {
  const { locale, setLocale, t } = useTranslation()

  const getOptionAriaLabel = (optionLocale: Locale) =>
    optionLocale === 'en' ? t.common.switchToEnglish : t.common.switchToSpanish

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#judo', label: t.nav.judo },
    ...(SHOW_WRITING ? [{ href: '#writing', label: t.nav.writing }] : []),
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

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
        <Experience />
        <Certifications />
        <Judo />
        {SHOW_WRITING && <Writing />}
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
