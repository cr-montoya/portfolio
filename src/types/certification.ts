interface CertificationBase {
  id: string
  name: string
  issuer: string
}

export interface EarnedCertification extends CertificationBase {
  status: 'earned'
  badgeImageUrl: string
  verifyUrl: string
  issuedDate: string
  expiresDate?: string
}

// Not earned yet: shows the public badge artwork dimmed, with no verify link.
export interface UpcomingCertification extends CertificationBase {
  status: 'upcoming'
  badgeImageUrl: string
  examDate: string
}

export type Certification = EarnedCertification | UpcomingCertification
