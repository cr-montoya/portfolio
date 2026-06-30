import { heroActions, heroSocialLinks } from '@/data/hero'
import { useTranslation } from '@/i18n'
import { Button, Card, TerminalLine } from '@/components/ui'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden px-6 py-20"
      id="top"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <Card className="mb-10 max-w-xl">
          <div className="space-y-2">
            <TerminalLine text={t.hero.terminal.whoamiCommand} />
            <p className="font-mono text-sm text-text-primary">{t.hero.terminal.whoamiResult}</p>
            <TerminalLine text={t.hero.terminal.planCommand} />
            <p className="font-mono text-sm font-semibold text-accent-green">
              {t.hero.terminal.planResult}
            </p>
          </div>
        </Card>

        <p className="mb-3 font-mono text-sm tracking-[0.12em] text-text-muted">{t.hero.eyebrow}</p>
        <h1 className="font-sans text-[clamp(2.6rem,8vw,5.2rem)] font-bold leading-[1.04] tracking-[-0.02em] text-text-primary">
          {t.hero.title}
        </h1>
        <p className="mt-4 font-mono text-base text-accent-green">{t.hero.subtitle}</p>
        <p className="mt-5 max-w-xl text-[15px] leading-7 text-text-muted">{t.hero.description}</p>

        <div className="mt-9 flex flex-wrap gap-3">
          {heroActions.map((action) => (
            <Button href={action.href} key={action.id} variant={action.variant}>
              {t.hero.actions[action.labelKey]}
            </Button>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-5">
          {heroSocialLinks.map((link) => (
            <a
              aria-label={t.hero.social[link.labelKey]}
              className="font-mono text-sm text-text-subtle transition-colors hover:text-accent-green"
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
        className="absolute bottom-8 left-1/2 hidden size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent-green hover:text-accent-green md:flex"
        href="#about"
      >
        <span aria-hidden="true" className="font-mono text-lg leading-none">
          ↓
        </span>
      </a>
    </section>
  )
}
