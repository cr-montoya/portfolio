import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

export interface NavbarLink {
  href: string
  label: string
}

export interface NavbarProps {
  links: readonly NavbarLink[]
  brandLabel: string
  languageToggle: ReactNode
}

const NOISE_CHARS = '01<>/{}[]#%&·=*+|$\\'

export function Navbar({ links, brandLabel, languageToggle }: NavbarProps) {
  const [noise, setNoise] = useState('')
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    let active = true
    const shuffle = () => {
      if (!active) return
      let s = ''
      for (let i = 0; i < 240; i++)
        s +=
          Math.random() < 0.56 ? ' ' : NOISE_CHARS[Math.floor(Math.random() * NOISE_CHARS.length)]
      setNoise(s)
      rafRef.current = window.setTimeout(shuffle, 150)
    }
    shuffle()
    return () => {
      active = false
      if (rafRef.current) clearTimeout(rafRef.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(0,0,0,0.74)] backdrop-blur-[11px]">
      <nav className="mx-auto flex h-[60px] max-w-[920px] items-center justify-between gap-4 px-6">
        <a
          className="font-mono text-[15px] font-bold tracking-[0.02em] text-accent-red no-underline"
          href="#top"
        >
          {brandLabel}
        </a>

        <div className="flex items-center gap-[22px]">
          <div className="hidden flex-wrap items-center justify-end gap-[18px] md:flex">
            {links.map((link) => (
              <a
                className="font-mono text-[12.5px] text-text-subtle no-underline transition-colors duration-200 hover:text-accent-green"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          {languageToggle}
        </div>
      </nav>

      <div
        className="overflow-hidden border-t border-[rgba(255,255,255,0.04)]"
        style={{ height: 16 }}
      >
        <div
          aria-hidden="true"
          className="whitespace-nowrap text-center font-mono text-[11px] leading-4 tracking-[3px] text-[rgba(52,226,154,0.16)]"
        >
          {noise}
        </div>
      </div>
    </header>
  )
}
