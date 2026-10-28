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

// No Credly badge exists until the exam is passed, so there is no image or verify link.
export interface UpcomingCertification extends CertificationBase {
  status: 'upcoming'
  examDate: string
}

export type Certification = EarnedCertification | UpcomingCertification
