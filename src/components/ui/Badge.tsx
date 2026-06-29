import type { ReactNode } from 'react'

export type BadgeVariant = 'default' | 'accent' | 'outline'

export interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'border-border bg-surface text-text-muted',
  accent: 'border-accent-green/50 bg-accent-green/10 text-accent-green',
  outline: 'border-border-strong bg-transparent text-text-primary',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs leading-none ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
