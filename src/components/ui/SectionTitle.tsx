export interface SectionTitleProps {
  number: string
  label: string
}

export function SectionTitle({ number, label }: SectionTitleProps) {
  return (
    <div className="mb-4 font-mono text-[13px] tracking-[0.16em]">
      <span className="text-accent-green">{number}</span>
      <span className="text-[#3a423f]"> / </span>
      <span className="text-text-subtle">{label}</span>
    </div>
  )
}
