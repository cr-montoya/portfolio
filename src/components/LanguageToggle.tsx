import type { Locale, LocaleOption } from '@/types/locale'

export interface LanguageToggleProps {
  locale: Locale
  options: readonly LocaleOption[]
  ariaLabel: string
  getOptionAriaLabel: (locale: Locale) => string
  onLocaleChange: (locale: Locale) => void
}

export function LanguageToggle({
  locale,
  options,
  ariaLabel,
  getOptionAriaLabel,
  onLocaleChange,
}: LanguageToggleProps) {
  return (
    <div
      aria-label={ariaLabel}
      className="inline-flex rounded-full border border-border bg-surface p-1"
      role="group"
    >
      {options.map((option) => {
        const isActive = option.code === locale

        return (
          <button
            aria-label={getOptionAriaLabel(option.code)}
            aria-pressed={isActive}
            className={[
              'rounded-full px-3 py-1 font-mono text-sm transition-colors',
              isActive
                ? 'bg-accent-green text-background'
                : 'text-text-muted hover:bg-surface-hover hover:text-text-primary',
            ].join(' ')}
            key={option.code}
            onClick={() => onLocaleChange(option.code)}
            type="button"
          >
            {option.shortLabel}
          </button>
        )
      })}
    </div>
  )
}
