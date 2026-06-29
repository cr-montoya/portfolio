export interface Certification {
  id: string
  name: string
  issuer: string
  badgeImageUrl: string
  verifyUrl: string
  issuedDate: string
  expiresDate?: string
}
