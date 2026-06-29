import { certifications } from '@/data/certifications'
import { useTranslation } from '@/i18n'
import { Card, SectionTitle, SectionWrapper } from '@/components/ui'

export function Certifications() {
  const { t } = useTranslation()

  const formatStatus = (cert: (typeof certifications)[number]) => {
    const date = new Date(cert.expiresDate ?? cert.issuedDate).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    const label = cert.expiresDate
      ? t.certifications.labels.expires
      : t.certifications.labels.issued
    return `${label} ${date}`
  }

  return (
    <SectionWrapper id="certifications">
      <div className="mb-10 max-w-2xl">
        <SectionTitle label={t.certifications.title} />
        <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
          {t.certifications.description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <a href={cert.verifyUrl} key={cert.id} rel="noopener noreferrer" target="_blank">
            <Card className="flex h-full flex-col items-center gap-4 text-center">
              <img
                alt={`${cert.name} ${t.certifications.labels.badgeAlt}`}
                className="size-28 object-contain"
                height={112}
                loading="lazy"
                src={cert.badgeImageUrl}
                width={112}
              />
              <div>
                <h3 className="font-mono text-base text-text-primary">{cert.name}</h3>
                <p className="mt-2 text-xs text-text-muted">{cert.issuer}</p>
                <p className="mt-3 font-mono text-xs text-accent-cyan">{formatStatus(cert)}</p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </SectionWrapper>
  )
}
