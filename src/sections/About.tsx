import { aboutFocusAreas } from '@/data/about'
import { useTranslation } from '@/i18n'
import { Badge, Card, SectionTitle, SectionWrapper, TerminalLine } from '@/components/ui'

export function About() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="about">
      <SectionTitle label={t.about.title} number="01" />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="mb-6 font-mono text-sm text-accent-red">{t.about.kicker}</p>

          <div className="space-y-4 text-[15px] leading-7 text-text-muted">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-3 font-mono text-sm text-text-subtle">{t.about.focusTitle}</p>
            <div className="flex flex-wrap gap-2">
              {aboutFocusAreas.map((focusArea) => (
                <Badge key={focusArea.id}>{t.about.focus[focusArea.labelKey]}</Badge>
              ))}
            </div>
          </div>
        </div>

        <Card>
          <div className="mb-6 flex items-center justify-between gap-4">
            <Badge variant="accent">{t.about.current.label}</Badge>
            <span className="font-mono text-xs text-text-dim">{t.nav.brand}</span>
          </div>

          <div className="space-y-4">
            <TerminalLine text={t.about.visual.roleLabel} />
            <p className="font-mono text-sm text-text-primary">{t.about.visual.roleValue}</p>
            <TerminalLine text={t.about.visual.locationLabel} />
            <p className="font-mono text-sm text-text-primary">{t.about.visual.locationValue}</p>
            <TerminalLine text={t.about.visual.stackLabel} />
            <p className="font-mono text-sm text-text-primary">{t.about.visual.stackValue}</p>
          </div>

          <div className="mt-8 rounded-lg border border-accent-red/25 bg-accent-red/8 p-4">
            <p className="font-mono text-sm font-semibold text-accent-red">
              {t.about.current.value}
            </p>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  )
}
