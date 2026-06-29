export interface SectionTitleProps {
  prefix?: string
  label: string
  id?: string
}

export function SectionTitle({ prefix = '>', label, id }: SectionTitleProps) {
  return (
    <h2 className="font-mono text-2xl text-text-primary sm:text-3xl" id={id}>
      <span className="text-accent-green">{prefix}</span> {label}
    </h2>
  )
}
