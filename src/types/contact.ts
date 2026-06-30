export interface ContactLink {
  id: 'email' | 'linkedin' | 'github'
  href: string
  labelKey: 'email' | 'linkedin' | 'github'
  symbol: string
  external: boolean
}
