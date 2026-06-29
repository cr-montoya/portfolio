import { aboutFocusAreas } from '@/data/about'
import { useTranslation } from '@/i18n'
import { Badge, Card, SectionTitle, SectionWrapper, TerminalLine } from '@/components/ui'

export function About() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <SectionTitle label={t.about.title} />
          <p className="mt-4 font-mono text-sm text-accent-cyan">{t.about.eyebrow}</p>

          <div className="mt-6 space-y-4 text-sm leading-7 text-text-muted sm:text-base">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-3 font-mono text-sm text-text-primary">{t.about.focusTitle}</p>
            <div className="flex flex-wrap gap-3">
              {aboutFocusAreas.map((focusArea) => (
                <Badge key={focusArea.id} variant="outline">
                  {t.about.focus[focusArea.labelKey]}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-surface/80">
          <div className="mb-6 flex items-center justify-between gap-4">
            <Badge variant="accent">{t.about.current.label}</Badge>
            <span className="font-mono text-xs text-text-muted">{t.nav.brand}</span>
          </div>

          <div className="space-y-4">
            <TerminalLine text={t.about.visual.roleLabel} />
            <p className="font-mono text-sm text-text-primary">{t.about.visual.roleValue}</p>
            <TerminalLine text={t.about.visual.locationLabel} />
            <p className="font-mono text-sm text-text-primary">{t.about.visual.locationValue}</p>
            <TerminalLine text={t.about.visual.stackLabel} />
            <p className="font-mono text-sm text-text-primary">{t.about.visual.stackValue}</p>
          </div>

          <div className="mt-8 rounded-md border border-accent-green/30 bg-accent-green/10 p-4">
            <p className="font-mono text-sm font-semibold text-accent-green">
              {t.about.current.value}
            </p>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  )
}
