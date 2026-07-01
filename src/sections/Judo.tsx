import { useTranslation } from '@/i18n'
import { SectionTitle, SectionWrapper } from '@/components/ui'

const ARC_PATH = 'M 120 250 Q 470 -25 800 250'
const ARC_LEN = 1150

export function Judo() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="judo">
      <SectionTitle label={t.judo.title} number="05" />

      <h2 className="mb-6 font-mono text-[clamp(1.4rem,4vw,2.1rem)] font-semibold leading-tight tracking-[-0.01em] text-text-primary">
        {t.judo.kicker}
      </h2>

      {/* Arc SVG panel */}
      <div className="relative mb-7 overflow-hidden rounded-[14px] border border-border bg-[#060708]">
        <svg aria-hidden="true" className="block w-full" fill="none" viewBox="0 0 920 300">
          {/* horizontal grid lines */}
          <g stroke="rgba(255,255,255,.05)" strokeWidth={1}>
            <line x1={0} x2={920} y1={255} y2={255} />
            <line x1={0} x2={920} y1={200} y2={200} />
            <line x1={0} x2={920} y1={145} y2={145} />
          </g>

          {/* arc */}
          <path
            d={ARC_PATH}
            stroke="rgba(232,70,61,.32)"
            strokeDasharray={ARC_LEN}
            strokeDashoffset={ARC_LEN}
            strokeWidth={2}
            style={{ animation: 'draw-arc 2.8s cubic-bezier(.4,0,.2,1) forwards' }}
          />

          {/* start — kuzushi */}
          <circle cx={120} cy={250} fill="#e8463d" r={6} />
          <text
            fill="#5a635f"
            fontFamily="'JetBrains Mono',monospace"
            fontSize={12}
            textAnchor="middle"
            x={120}
            y={278}
          >
            kuzushi
          </text>

          {/* apex — seiryoku zen'yō */}
          <circle cx={470} cy={58} fill="#dff3e9" r={4} />
          <text
            fill="#7f8a85"
            fontFamily="'JetBrains Mono',monospace"
            fontSize={11}
            textAnchor="middle"
            x={470}
            y={44}
          >
            {'seiryoku zen’yō'}
          </text>

          {/* end — ukemi (double pulse ring) */}
          <circle
            cx={800}
            cy={250}
            fill="none"
            r={9}
            stroke="#e8463d"
            strokeWidth={2}
            style={{
              transformBox: 'fill-box',
              transformOrigin: 'center',
              animation: 'pulse-ring 2.8s ease-out infinite',
            }}
          />
          <circle
            cx={800}
            cy={250}
            fill="none"
            r={9}
            stroke="#e8463d"
            strokeWidth={2}
            style={{
              transformBox: 'fill-box',
              transformOrigin: 'center',
              animation: 'pulse-ring 2.8s ease-out infinite',
              animationDelay: '1.4s',
            }}
          />
          <text
            fill="#5a635f"
            fontFamily="'JetBrains Mono',monospace"
            fontSize={12}
            textAnchor="middle"
            x={800}
            y={278}
          >
            kake
          </text>

          {/* travelling dot along arc */}
          <circle
            fill="#ff5a4d"
            r={7}
            style={{ filter: 'drop-shadow(0 0 8px rgba(232,70,61,.8))' }}
          >
            <animateMotion dur="2.8s" path={ARC_PATH} repeatCount="indefinite" />
          </circle>
        </svg>

        <div
          aria-hidden="true"
          className="absolute left-5 top-4 font-mono text-[11.5px] tracking-[0.1em] text-text-faint"
        >
          {t.judo.caption}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-9 lg:grid-cols-2 lg:items-start">
        {/* Left: intro paragraphs + belts + stats */}
        <div className="flex flex-col gap-3.5 text-[16.5px] leading-7 text-text-muted">
          <p>{t.judo.intro}</p>
          <p>{t.judo.intro2}</p>

          <div className="mt-2 flex flex-col gap-2.5">
            <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-faint">
              {t.judo.beltsTitle}
            </div>
            <div className="flex items-center gap-3">
              <div
                className="h-[15px] w-[118px] shrink-0 rounded-[3px]"
                style={{
                  background: '#3f7ad6',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.12)',
                }}
              />
              <span className="font-mono text-[13px] text-[#cfd4d1]">Judo · {t.judo.beltJudo}</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="h-[15px] w-[118px] shrink-0 rounded-[3px]"
                style={{ background: '#e9ecee', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.25)' }}
              />
              <span className="font-mono text-[13px] text-[#cfd4d1]">BJJ · {t.judo.beltBjj}</span>
            </div>
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            {t.judo.stats.map((stat) => (
              <div className="rounded-[9px] border border-border px-3.5 py-3" key={stat.k}>
                <div className="font-mono text-[15px] font-bold text-accent-red">{stat.v}</div>
                <div className="mt-0.5 font-mono text-[11px] text-text-subtle">{stat.k}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: principles */}
        <div>
          <div className="mb-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-text-faint">
            {t.judo.principlesTitle}
          </div>
          <div className="flex flex-col gap-2.5">
            {t.judo.principles.map((p) => (
              <div
                className="rounded-[10px] border border-border bg-surface px-4 py-[15px] transition-all duration-200 hover:border-[rgba(232,70,61,.35)]"
                key={p.jp}
              >
                <div className="flex items-baseline justify-between gap-2.5">
                  <span className="font-mono text-[14px] font-semibold text-accent-red">
                    {p.jp}
                  </span>
                  <span className="text-[16px] text-[#39423f]">{p.kanji}</span>
                </div>
                <div className="mb-2 mt-0.5 font-mono text-[11px] italic text-text-dim">
                  {p.term}
                </div>
                <div className="text-[14px] text-text-muted">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
