import { useEffect, useRef, useState } from 'react'
import { experienceEntries } from '@/data/experience'
import { useTranslation } from '@/i18n'
import { Badge, Card, SectionTitle, SectionWrapper } from '@/components/ui'

export function Experience() {
  const { t } = useTranslation()
  const [visibleEntries, setVisibleEntries] = useState<ReadonlySet<string>>(() => new Set())
  const entryRefs = useRef(new Map<string, HTMLDivElement>())

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleEntries(new Set(experienceEntries.map((entry) => entry.id)))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleEntries((currentEntries) => {
          const nextEntries = new Set(currentEntries)

          for (const entry of entries) {
            if (entry.isIntersecting) {
              nextEntries.add(entry.target.id)
            }
          }

          return nextEntries
        })
      },
      { threshold: 0.2 },
    )

    const elements = Array.from(entryRefs.current.values())
    for (const element of elements) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const formatPeriod = (start: string, end: string) =>
    end === 'present' ? `${start} - ${t.experience.labels.present}` : `${start} - ${end}`

  return (
    <SectionWrapper id="experience">
      <div className="mb-10 max-w-2xl">
        <SectionTitle label={t.experience.title} />
        <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
          {t.experience.description}
        </p>
      </div>

      <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Object.values(t.experience.highlights).map((highlight) => (
          <Card className="p-4" key={highlight}>
            <p className="font-mono text-sm text-accent-green">{highlight}</p>
          </Card>
        ))}
      </div>

      <div className="relative space-y-8 border-l border-border pl-5 sm:pl-8">
        {experienceEntries.map((entry) => {
          const isVisible = visibleEntries.has(entry.id)

          return (
            <div
              className={`relative transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              id={entry.id}
              key={entry.id}
              ref={(node) => {
                if (node) {
                  entryRefs.current.set(entry.id, node)
                } else {
                  entryRefs.current.delete(entry.id)
                }
              }}
            >
              <span
                className={`absolute -left-[1.85rem] top-6 size-3 rounded-full border ${
                  entry.current
                    ? 'border-accent-green bg-accent-green shadow-glow-green'
                    : 'border-border-strong bg-background'
                } sm:-left-[2.35rem]`}
              />

              <Card className={`p-6 sm:p-8 ${entry.current ? 'border-accent-green/50' : ''}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-mono text-xl text-text-primary">
                      {t.experience.roles[entry.roleKey]}
                    </h3>
                    <p className="mt-2 font-mono text-sm text-accent-cyan">{entry.company}</p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-2 sm:justify-end">
                    {entry.current ? (
                      <Badge variant="accent">{t.experience.labels.current}</Badge>
                    ) : null}
                    <Badge variant="outline">
                      {formatPeriod(entry.period.start, entry.period.end)}
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {entry.accomplishmentsKeys.map((key) => (
                    <p className="text-sm leading-7 text-text-muted" key={key}>
                      {t.experience.accomplishments[key]}
                    </p>
                  ))}
                </div>

                <div className="mt-7 border-t border-border pt-5">
                  <p className="mb-3 font-mono text-xs text-text-muted">
                    {t.experience.labels.stack}
                  </p>
                  <p className="font-mono text-sm leading-7 text-text-primary">
                    {entry.technologies.join(' / ')}
                  </p>
                </div>
              </Card>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
