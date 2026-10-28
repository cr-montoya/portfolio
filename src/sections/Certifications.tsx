import { certifications } from '@/data/certifications'
import { useTranslation } from '@/i18n'
import { Card, SectionTitle, SectionWrapper } from '@/components/ui'
import type { Certification, EarnedCertification } from '@/types/certification'

// Dates are stored as calendar dates; format in UTC so local offsets don't shift the month.
const formatMonth = (date: string) =>
  new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', timeZone: 'UTC' })

export function Certifications() {
  const { t } = useTranslation()

  const isActive = (cert: EarnedCertification) => {
    if (!cert.expiresDate) return true
    return new Date(cert.expiresDate) > new Date()
  }

  const formatStatus = (cert: Certification) => {
    if (cert.status === 'upcoming') {
      return `${t.certifications.labels.upcoming} ${formatMonth(cert.examDate)}`
    }
    const label = cert.expiresDate
      ? t.certifications.labels.expires
      : t.certifications.labels.issued
    return `${label} ${formatMonth(cert.expiresDate ?? cert.issuedDate)}`
  }

  const renderCard = (cert: Certification) => (
    <Card
      className={`flex h-full flex-col items-center gap-4 text-center ${cert.status === 'upcoming' ? 'border-dashed' : ''}`}
    >
      <div className="relative">
        {cert.status === 'earned' ? (
          <img
            alt={`${cert.name} ${t.certifications.labels.badgeAlt}`}
            className="size-24 object-contain transition-transform duration-300 group-hover:scale-105"
            height={96}
            loading="lazy"
            src={cert.badgeImageUrl}
            width={96}
          />
        ) : (
          <div
            aria-hidden="true"
            className="size-24 rounded-full border-2 border-dashed border-text-dim"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-mono text-[13px] leading-5 text-text-primary">{cert.name}</h3>
        <p className="text-xs text-text-muted">{cert.issuer}</p>
        <div className="mt-auto flex items-center justify-center gap-2">
          <span
            className={`inline-block size-1.5 rounded-full ${cert.status === 'earned' && isActive(cert) ? 'bg-accent-red' : 'bg-text-dim'}`}
          />
          <p className="font-mono text-[11px] text-text-subtle">{formatStatus(cert)}</p>
        </div>
      </div>
    </Card>
  )

  return (
    <SectionWrapper id="certifications">
      <SectionTitle label={t.certifications.title} number="04" />

      <p className="mt-2 mb-10 text-[15px] leading-7 text-text-muted">
        {t.certifications.description}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) =>
          cert.status === 'earned' ? (
            <a
              className="group block"
              href={cert.verifyUrl}
              key={cert.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              {renderCard(cert)}
            </a>
          ) : (
            <div key={cert.id}>{renderCard(cert)}</div>
          ),
        )}
      </div>
    </SectionWrapper>
  )
}
