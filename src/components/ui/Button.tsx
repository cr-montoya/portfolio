import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  icon?: ReactNode
  href?: string
  className?: string
  onClick?: () => void
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'border-accent-red bg-accent-red text-background hover:bg-accent-red-bright hover:shadow-glow-red',
  secondary:
    'border-border bg-transparent text-text-primary hover:border-accent-red hover:text-accent-red',
}

export function Button({
  children,
  variant = 'primary',
  icon,
  href,
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex h-11 items-center justify-center gap-2 rounded-md border px-5 font-mono text-sm transition-colors ${buttonVariants[variant]} ${className}`
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {content}
    </button>
  )
}
