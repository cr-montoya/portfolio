import { certifications } from '@/data/certifications'
import { useTranslation } from '@/i18n'
import { Card, SectionTitle, SectionWrapper } from '@/components/ui'

export function Certifications() {
  const { t } = useTranslation()

  const isActive = (cert: (typeof certifications)[number]) => {
    if (!cert.expiresDate) return true
    return new Date(cert.expiresDate) > new Date()
  }

  const formatStatus = (cert: (typeof certifications)[number]) => {
    const date = new Date(cert.expiresDate ?? cert.issuedDate).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
    })
    const label = cert.expiresDate
      ? t.certifications.labels.expires
      : t.certifications.labels.issued
    return `${label} ${date}`
  }

  return (
    <SectionWrapper id="certifications">
      <SectionTitle label={t.certifications.title} number="04" />

      <p className="mt-2 mb-10 text-[15px] leading-7 text-text-muted">
        {t.certifications.description}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <a
            className="group block"
            href={cert.verifyUrl}
            key={cert.id}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Card className="flex h-full flex-col items-center gap-4 text-center">
              <div className="relative">
                <img
                  alt={`${cert.name} ${t.certifications.labels.badgeAlt}`}
                  className="size-24 object-contain transition-transform duration-300 group-hover:scale-105"
                  height={96}
                  loading="lazy"
                  src={cert.badgeImageUrl}
                  width={96}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="font-mono text-[13px] leading-5 text-text-primary">{cert.name}</h3>
                <p className="text-xs text-text-muted">{cert.issuer}</p>
                <div className="mt-auto flex items-center justify-center gap-2">
                  <span
                    className={`inline-block size-1.5 rounded-full ${isActive(cert) ? 'bg-accent-green' : 'bg-text-dim'}`}
                  />
                  <p className="font-mono text-[11px] text-text-subtle">{formatStatus(cert)}</p>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </SectionWrapper>
  )
}
