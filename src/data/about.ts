import type { AboutFocusArea } from '@/types/about'

export const aboutFocusAreas = [
  { id: 'aws', labelKey: 'aws' },
  { id: 'iac', labelKey: 'iac' },
  { id: 'cicd', labelKey: 'cicd' },
  { id: 'security', labelKey: 'security' },
  { id: 'observability', labelKey: 'observability' },
  { id: 'aidlc', labelKey: 'aidlc' },
] as const satisfies readonly AboutFocusArea[]
