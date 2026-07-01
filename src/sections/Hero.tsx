import { useEffect, useRef, useState } from 'react'
import { heroActions, heroSocialLinks } from '@/data/hero'
import { useTranslation } from '@/i18n'
import { Button, EmailIcon, GitHubIcon, LinkedInIcon } from '@/components/ui'

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
} as const

interface TermLine {
  cmd: boolean
  text: string
}

function useTerminalTyper(segs: readonly TermLine[]) {
  // Capture segs once at mount — animation runs once, no need to restart on re-render
  const segsRef = useRef(segs)

  const [state, setState] = useState<{ lines: TermLine[]; done: boolean }>({
    lines: [],
    done: false,
  })

  useEffect(() => {
    const segments = segsRef.current

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setState({ lines: [...segments], done: true })
      return
    }

    // Local mutable buffer — avoids closure staleness with functional updaters
    const buf: TermLine[] = []
    let si = 0
    let ci = 0

    const timer = setInterval(() => {
      if (si >= segments.length) {
        clearInterval(timer)
        setState({ lines: [...buf], done: true })
        return
      }
      if (ci === 0) buf.push({ cmd: segments[si].cmd, text: '' })
      ci++
      buf[buf.length - 1] = { ...buf[buf.length - 1], text: segments[si].text.slice(0, ci) }
      setState({ lines: [...buf], done: false })
      if (ci >= segments[si].text.length) {
        si++
        ci = 0
      }
    }, 28)

    return () => clearInterval(timer)
  }, []) // intentional: animation runs once on mount

  return state
}

// Renders a string with [[...]] segments emphasized in the red brand accent.
function renderHighlighted(text: string) {
  return text.split(/\[\[(.+?)\]\]/).map((part, i) =>
    i % 2 === 1 ? (
      <span className="text-accent-red" key={i}>
        {part}
      </span>
    ) : (
      part
    ),
  )
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
        <p className="mb-3 font-mono text-sm tracking-[0.12em] text-text-muted">{t.hero.eyebrow}</p>
        <h1 className="font-sans text-[clamp(2.6rem,8vw,5.2rem)] font-bold leading-[1.04] tracking-[-0.02em] text-text-primary">
          {t.hero.title}
        </h1>
        <p className="mt-4 font-mono text-base text-accent-red">{t.hero.subtitle}</p>
        <p className="mt-5 max-w-xl text-[15px] leading-7 text-text-muted">
          {renderHighlighted(t.hero.description)}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          {heroActions.map((action) => (
            <Button href={action.href} key={action.id} variant={action.variant}>
              {t.hero.actions[action.labelKey]}
            </Button>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-4">
          {heroSocialLinks.map((link) => {
            const Icon = SOCIAL_ICONS[link.id]
            return (
              <a
                aria-label={t.hero.social[link.labelKey]}
                className="text-text-subtle transition-colors hover:text-accent-green"
                href={link.href}
                key={link.id}
                rel="noreferrer"
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              >
                <Icon className="size-5" />
              </a>
            )
          })}
        </div>

        {/* Terminal card — below the hero copy */}
        <div className="relative mt-10 max-w-xl overflow-hidden rounded-xl border border-border bg-surface shadow-[0_0_60px_-24px_rgba(52,226,154,0.5)]">
          {/* green terminal glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-green/[0.10] via-transparent to-transparent"
          />
          <div className="relative">
            {/* title bar */}
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-[#febc2e]" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-text-faint">cristian@cloud ~ %</span>
            </div>

            {/* output */}
            <div aria-label="terminal output" aria-live="polite" className="space-y-0.5 px-4 py-4">
              {lines.map((line, i) => (
                <div className="flex font-mono text-sm leading-6" key={i}>
                  {line.cmd ? (
                    <>
                      <span aria-hidden="true" className="select-none pr-2 text-accent-green">
                        $
                      </span>
                      <span className="text-accent-green">{line.text}</span>
                    </>
                  ) : (
                    <span className="pl-5 text-text-primary">{line.text}</span>
                  )}
                  {/* cursor on the actively-typing line */}
                  {!done && i === lines.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="ml-px inline-block h-[1.1em] w-[2px] translate-y-[1px] bg-accent-green"
                    />
                  )}
                </div>
              ))}

              {/* idle prompt after animation completes */}
              <div className="flex font-mono text-sm leading-6">
                <span aria-hidden="true" className="select-none pr-2 text-accent-green">
                  $
                </span>
                {done && (
                  <span
                    aria-hidden="true"
                    className="inline-block h-[1.1em] w-[2px] translate-y-[1px] bg-accent-green animate-cursor-blink"
                  />
                )}
              </div>
            </div>
          </div>
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
