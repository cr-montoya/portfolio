import { useTranslation } from '@/i18n'
import { EmailIcon, GitHubIcon, LinkedInIcon, SectionTitle, SectionWrapper } from '@/components/ui'

const contactRows = [
  {
    label: 'email',
    href: 'mailto:cristianmontoyar27@gmail.com',
    display: 'cristianmontoyar27@gmail.com',
    Icon: EmailIcon,
    external: false,
  },
  {
    label: 'github',
    href: 'https://github.com/cr-montoya',
    display: 'github.com/cr-montoya',
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: 'linkedin',
    href: 'https://linkedin.com/in/cristian-montoya-devops',
    display: 'linkedin.com/in/cristian-montoya-devops',
    Icon: LinkedInIcon,
    external: true,
  },
]

export function Contact() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="contact">
      <SectionTitle label={t.contact.title} number="07" />

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <h2 className="font-sans text-[clamp(1.6rem,4vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.01em] text-text-primary">
            {t.contact.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-text-muted">{t.contact.body}</p>
        </div>

        <div className="space-y-3">
          {contactRows.map((row) => (
            <a
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-[2px] hover:border-[rgba(52,226,154,0.4)]"
              href={row.href}
              key={row.label}
              rel={row.external ? 'noopener noreferrer' : undefined}
              target={row.external ? '_blank' : undefined}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-accent-green group-hover:border-accent-green/60">
                <row.Icon className="size-4.5" />
              </span>
              <span className="min-w-0 truncate font-mono text-sm text-text-muted group-hover:text-text-primary">
                {row.display}
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-16 border-t border-border pt-6">
        <p className="text-center font-mono text-xs text-text-dim">{t.contact.footer}</p>
      </footer>
    </SectionWrapper>
  )
}
