import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 transition-all duration-250 hover:border-[rgba(232,70,61,0.4)] hover:translate-y-[-3px] ${className}`}
    >
      {children}
    </div>
  )
}
