import type { ExperienceEntry } from '@/types/experience'

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: 'alternova-tech-lead',
    company: 'Alternova Inc',
    roleKey: 'techLead',
    period: {
      start: '2025',
      end: 'present',
    },
    accomplishmentsKeys: [
      'devopsPracticeBuilt',
      'complianceSecurity',
      'productionOwnership',
      'teamLeadership',
      'aiWorkflowAdoption',
    ],
    technologies: [
      'AWS',
      'Terraform',
      'CI/CD',
      'SOC2 Type I/II',
      'HIPAA',
      'Blue-Green Deployments',
      'AI Workflows',
    ],
    current: true,
  },
  {
    id: 'alternova-devops-security-engineer',
    company: 'Alternova Inc',
    roleKey: 'devopsSecurityEngineer',
    period: {
      start: '2022',
      end: '2024',
    },
    accomplishmentsKeys: [
      'automationTransformation',
      'selfHostedMigration',
      'terraformConsolidation',
      'deploymentReduction',
    ],
    technologies: ['Linux', 'Docker', 'CircleCI', 'GitLab CI', 'Terraform', 'AWS'],
    current: false,
  },
]
