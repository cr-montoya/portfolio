import { useEffect, useRef, useState } from 'react'
import { heroActions, heroSocialLinks } from '@/data/hero'
import { useTranslation } from '@/i18n'
import { Button } from '@/components/ui'

interface TermLine {
  cmd: boolean
  text: string
}

function useTerminalTyper(segments: readonly TermLine[]) {
  const [lines, setLines] = useState<TermLine[]>([])
  const [done, setDone] = useState(false)
  const segsRef = useRef(segments)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLines([...segsRef.current])
      setDone(true)
      return
    }

    let si = 0
    let ci = 0
    setLines([])
    setDone(false)

    const timer = setInterval(() => {
      const segs = segsRef.current
      if (si >= segs.length) {
        clearInterval(timer)
        setDone(true)
        return
      }
      ci++
      setLines((prev) => {
        const next = [...prev]
        if (ci === 1) next.push({ cmd: segs[si].cmd, text: '' })
        const last = next.length - 1
        next[last] = { ...next[last], text: segs[si].text.slice(0, ci) }
        return next
      })
      if (ci >= segs[si].text.length) {
        si++
        ci = 0
      }
    }, 28)

    return () => clearInterval(timer)
  }, []) // segments array is stable (built from t which is stable on mount)

  return { lines, done }
}

export function Hero() {
  const { t } = useTranslation()

  const segments: TermLine[] = [
    { cmd: true, text: t.hero.terminal.whoamiCommand },
    { cmd: false, text: t.hero.terminal.whoamiResult },
    { cmd: true, text: t.hero.terminal.focusCommand },
    { cmd: false, text: t.hero.terminal.focusResult },
    { cmd: true, text: t.hero.terminal.uptimeCommand },
    { cmd: false, text: t.hero.terminal.uptimeResult },
  ]

  const { lines, done } = useTerminalTyper(segments)

  return (
    <section
      className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden px-6 py-20"
      id="top"
    >
      <div className="mx-auto w-full max-w-[920px]">
        {/* Terminal card */}
        <div className="mb-10 max-w-xl rounded-xl border border-border bg-surface p-5">
          <div className="mb-3 flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="space-y-1" aria-live="polite" aria-label="terminal output">
            {lines.map((line, i) => (
              <div className="flex gap-2 font-mono text-sm leading-6" key={i}>
                {line.cmd ? (
                  <>
                    <span aria-hidden="true" className="select-none text-accent-green">
                      ❯
                    </span>
                    <span className="text-text-primary">{line.text}</span>
                  </>
                ) : (
                  <span className="pl-5 text-text-muted">{line.text}</span>
                )}
                {i === lines.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`inline-block h-[1.1em] w-[2px] translate-y-[1px] bg-accent-green ${done ? 'animate-cursor-blink' : ''}`}
                  />
                )}
              </div>
            ))}
            {lines.length === 0 && (
              <div className="flex gap-2 font-mono text-sm leading-6">
                <span aria-hidden="true" className="select-none text-accent-green">
                  ❯
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block h-[1.1em] w-[2px] translate-y-[1px] bg-accent-green"
                />
              </div>
            )}
          </div>
        </div>

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
        <span aria-hidden="true" className="font-mono text-base leading-none">
          ↓
        </span>
      </a>
    </section>
  )
}
