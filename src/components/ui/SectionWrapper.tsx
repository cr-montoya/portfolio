import type { ReactNode } from 'react'

export interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section className={`px-6 py-section scroll-mt-24 ${className}`} id={id}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
