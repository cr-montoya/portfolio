import type { ReactNode } from 'react'

export interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      className={`scroll-mt-[84px] border-t border-border-section px-6 py-16 ${className}`}
      id={id}
    >
      <div className="mx-auto max-w-[920px]">{children}</div>
    </section>
  )
}
