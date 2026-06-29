import { useEffect, useState } from 'react'
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

export function Navbar({ links, brandLabel, languageToggle }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        isScrolled
          ? 'border-border bg-background/85 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a className="font-mono text-sm font-semibold text-accent-green" href="#hero">
          {brandLabel}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              className="font-mono text-xs text-text-muted transition-colors hover:text-accent-cyan"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {languageToggle}
      </nav>
    </header>
  )
}
