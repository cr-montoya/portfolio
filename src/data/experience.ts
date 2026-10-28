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
      'bamPlatform',
      'bamCapacity',
      'complianceSecurity',
      'productionOwnership',
      'teamLeadership',
      'costReduction',
      'aiWorkflowAdoption',
    ],
    technologies: [
      'AWS',
      'Terraform',
      'CI/CD',
      'SOC 2 Type I/II',
      'ISO 27001',
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
      end: '2025',
    },
    accomplishmentsKeys: [
      'automationTransformation',
      'cloudFormationMigration',
      'selfHostedMigration',
      'terraformConsolidation',
      'deploymentReduction',
      'availabilityImprovement',
    ],
    technologies: ['Linux', 'Docker', 'CircleCI', 'GitLab CI', 'Terraform', 'AWS'],
    current: false,
  },
]
