import { useTranslation } from '@/i18n'
import { Card, SectionTitle, SectionWrapper } from '@/components/ui'

const ARC_R = 88
const ARC_CX = 100
const ARC_CY = 100
const ARC_LEN = Math.PI * ARC_R

export function Judo() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="judo">
      <SectionTitle label={t.judo.title} number="04" />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* SVG arc + stats column */}
        <div>
          <div className="flex flex-col items-center gap-6">
            <div className="relative" style={{ width: 200, height: 200 }}>
              {/* pulse ring */}
              <svg
                aria-hidden="true"
                className="absolute inset-0"
                fill="none"
                height={200}
                viewBox="0 0 200 200"
                width={200}
              >
                <circle
                  className="animate-pulse-ring"
                  cx={ARC_CX}
                  cy={ARC_CY}
                  fill="none"
                  r={ARC_R + 12}
                  stroke="rgba(52,226,154,0.12)"
                  strokeWidth={1}
                />
              </svg>
              {/* arc */}
              <svg aria-hidden="true" fill="none" height={200} viewBox="0 0 200 200" width={200}>
                {/* track */}
                <circle
                  cx={ARC_CX}
                  cy={ARC_CY}
                  r={ARC_R}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth={2}
                />
                {/* animated arc */}
                <circle
                  className="animate-draw-arc"
                  cx={ARC_CX}
                  cy={ARC_CY}
                  r={ARC_R}
                  stroke="#34e29a"
                  strokeDasharray={`${ARC_LEN * 0.75} ${ARC_LEN}`}
                  strokeDashoffset={ARC_LEN * 0.75}
                  strokeLinecap="round"
                  strokeWidth={2}
                  style={{ transformOrigin: '100px 100px', transform: 'rotate(-90deg)' }}
                />
              </svg>
              {/* center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-[13px] text-text-subtle">{t.judo.beltsTitle}</span>
                <span className="mt-1 font-sans text-base font-semibold text-text-primary">
                  {t.judo.beltJudo}
                </span>
                <span className="font-mono text-xs text-text-dim">{t.judo.beltBjj}</span>
              </div>
            </div>

            <p className="font-mono text-[11px] tracking-[0.14em] text-text-dim">
              {t.judo.caption}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {t.judo.stats.map((stat) => (
              <div
                className="rounded-xl border border-border bg-surface px-4 py-4 text-center"
                key={stat.k}
              >
                <p className="font-mono text-lg font-bold text-accent-green">{stat.v}</p>
                <p className="mt-1 font-mono text-[11px] text-text-subtle">{stat.k}</p>
              </div>
            ))}
          </div>
        </div>

        {/* text column */}
        <div>
          <p className="mb-2 font-mono text-sm text-accent-green">{t.judo.kicker}</p>
          <p className="mb-4 text-[15px] leading-7 text-text-muted">{t.judo.intro}</p>
          <p className="mb-8 text-[15px] leading-7 text-text-muted">{t.judo.intro2}</p>

          <p className="mb-4 font-mono text-sm text-text-subtle">{t.judo.principlesTitle}</p>
          <div className="space-y-3">
            {t.judo.principles.map((p) => (
              <Card className="p-4" key={p.jp}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <p className="font-mono text-[13px] font-bold text-accent-green">{p.jp}</p>
                    <p className="font-mono text-[11px] text-text-dim">{p.kanji}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-text-secondary">
                      {p.term}
                    </p>
                    <p className="mt-1 text-[13px] leading-6 text-text-muted">{p.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
