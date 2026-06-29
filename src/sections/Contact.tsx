import { contactLinks } from '@/data/contact'
import { useTranslation } from '@/i18n'
import { Button, Card, SectionTitle, SectionWrapper, TerminalLine } from '@/components/ui'

export function Contact() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionTitle label={t.contact.title} />
          <p className="mt-4 font-mono text-sm text-accent-cyan">{t.contact.eyebrow}</p>
          <p className="mt-5 text-sm leading-7 text-text-muted sm:text-base">
            {t.contact.description}
          </p>
          <p className="mt-4 font-mono text-sm text-text-primary">{t.contact.availability}</p>

          <div className="mt-8">
            <Button href="mailto:cristianmontoyar27@gmail.com">{t.contact.cta}</Button>
          </div>
        </div>

        <Card className="bg-surface/80">
          <div className="mb-6 space-y-2">
            <TerminalLine text={t.contact.labels.open} />
            <p className="font-mono text-sm text-text-muted">{t.nav.brand}</p>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                className="group flex min-h-24 items-center gap-4 rounded-md border border-border bg-surface-muted p-4 transition-colors hover:border-accent-cyan"
                href={link.href}
                key={link.id}
                rel={link.external ? 'noreferrer' : undefined}
                target={link.external ? '_blank' : undefined}
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-border-strong font-mono text-sm text-accent-green group-hover:border-accent-cyan">
                  {link.symbol}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-sm text-text-primary">
                    {t.contact.links[link.labelKey]}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-text-muted">
                    {t.contact.linkDescriptions[link.descriptionKey]}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Card>
      </div>

      <footer className="mt-16 border-t border-border pt-6">
        <p className="text-center font-mono text-xs text-text-muted">{t.contact.footer}</p>
      </footer>
    </SectionWrapper>
  )
}
