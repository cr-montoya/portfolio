import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-md border border-border bg-surface p-6 transition-colors hover:border-accent-cyan/60 hover:shadow-glow-cyan ${className}`}
    >
      {children}
    </div>
  )
}
