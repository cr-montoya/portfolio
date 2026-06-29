import { heroActions, heroSocialLinks } from '@/data/hero'
import { useTranslation } from '@/i18n'
import { Button, Card, SectionWrapper, TerminalLine } from '@/components/ui'

export function Hero() {
  const { t } = useTranslation()

  return (
    <SectionWrapper
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-12 sm:py-16"
      id="hero"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(139_148_158_/_0.14)_1px,transparent_0)] bg-[length:28px_28px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-3xl">
        <Card className="mb-8 max-w-2xl bg-surface/90">
          <div className="space-y-2">
            <TerminalLine text={t.hero.terminal.whoamiCommand} />
            <p className="font-mono text-sm text-text-primary">{t.hero.terminal.whoamiResult}</p>
            <TerminalLine text={t.hero.terminal.planCommand} />
            <p className="font-mono text-sm font-semibold text-terminal-green">
              {t.hero.terminal.planResult}
            </p>
          </div>
        </Card>

        <p className="mb-2 font-mono text-sm text-text-muted">{t.hero.eyebrow}</p>
        <h1 className="font-mono text-4xl leading-tight text-text-primary sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-3 font-mono text-lg text-accent-cyan">{t.hero.subtitle}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
          {t.hero.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {heroActions.map((action) => (
            <Button href={action.href} key={action.id} variant={action.variant}>
              {t.hero.actions[action.labelKey]}
            </Button>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {heroSocialLinks.map((link) => (
            <a
              aria-label={t.hero.social[link.labelKey]}
              className="font-mono text-sm text-text-muted transition-colors hover:text-accent-cyan"
              href={link.href}
              key={link.id}
              rel="noreferrer"
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            >
              {link.id}
            </a>
          ))}
        </div>
      </div>

      <a
        aria-label={t.hero.scrollIndicator}
        className="absolute bottom-6 left-1/2 hidden size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent-cyan hover:text-accent-cyan md:flex"
        href="#about"
      >
        <span aria-hidden="true" className="font-mono text-lg leading-none">
          v
        </span>
      </a>
    </SectionWrapper>
  )
}
