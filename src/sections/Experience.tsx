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
            if (entry.isIntersecting) nextEntries.add(entry.target.id)
          }
          return nextEntries
        })
      },
      { threshold: 0.15 },
    )

    const elements = Array.from(entryRefs.current.values())
    for (const element of elements) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const formatPeriod = (start: string, end: string) =>
    end === 'present' ? `${start} · ${t.experience.labels.present}` : `${start} · ${end}`

  return (
    <SectionWrapper id="experience">
      <SectionTitle label={t.experience.title} number="03" />

      <p className="mt-2 mb-8 text-[15px] leading-7 text-text-muted">{t.experience.description}</p>

      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {t.experience.stats.map((stat) => (
          <div
            className="rounded-xl border border-border bg-surface px-4 py-5 text-center"
            key={stat.k}
          >
            <p className="font-mono text-xl font-bold text-accent-green">{stat.v}</p>
            <p className="mt-1 font-mono text-[11px] text-text-subtle">{stat.k}</p>
          </div>
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
                if (node) entryRefs.current.set(entry.id, node)
                else entryRefs.current.delete(entry.id)
              }}
            >
              <span
                className={`absolute -left-[1.85rem] top-6 size-3 rounded-full border ${
                  entry.current
                    ? 'border-accent-green bg-accent-green'
                    : 'border-border bg-background'
                } sm:-left-[2.35rem]`}
              />

              <Card className={entry.current ? 'border-accent-green/40' : ''}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-text-primary">
                      {t.experience.roles[entry.roleKey]}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-accent-green">{entry.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {entry.current ? (
                      <Badge variant="accent">{t.experience.labels.current}</Badge>
                    ) : null}
                    <Badge variant="outline">
                      {formatPeriod(entry.period.start, entry.period.end)}
                    </Badge>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {entry.accomplishmentsKeys.map((key) => (
                    <li className="flex gap-2 text-[14px] leading-6 text-text-muted" key={key}>
                      <span aria-hidden="true" className="mt-[2px] shrink-0 text-accent-green">
                        ›
                      </span>
                      {t.experience.accomplishments[key]}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="mb-2 font-mono text-xs text-text-dim">
                    {t.experience.labels.stack}
                  </p>
                  <p className="font-mono text-[13px] leading-6 text-text-muted">
                    {entry.technologies.join(' · ')}
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
