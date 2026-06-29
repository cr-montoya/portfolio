import type { Project } from '@/types/project'

export const projects: readonly Project[] = [
  {
    id: 'aws-account-security-toolkit',
    nameWithOwner: 'cr-montoya/aws-account-security-toolkit',
    repositoryUrl: 'https://github.com/cr-montoya/aws-account-security-toolkit',
    primaryLanguage: 'Python',
    topics: ['AWS', 'Security', 'IAM', 'Automation'],
    featured: true,
    titleKey: 'awsSecurityTitle',
    descriptionKey: 'awsSecurityDescription',
  },
  {
    id: 'wc2026-prediction-simulator',
    nameWithOwner: 'cr-montoya/wc2026-prediction-simulator',
    repositoryUrl: 'https://github.com/cr-montoya/wc2026-prediction-simulator',
    demoUrl: 'https://predicciones-mundial.pages.dev',
    primaryLanguage: 'TypeScript',
    topics: ['Analytics', 'AI', 'Monte Carlo', 'ISR'],
    featured: false,
    titleKey: 'wc2026Title',
    descriptionKey: 'wc2026Description',
  },
  {
    id: 'aws-devops-pro-practice',
    nameWithOwner: 'cr-montoya/aws-devops-pro-practice',
    repositoryUrl: 'https://github.com/cr-montoya/aws-devops-pro-practice',
    primaryLanguage: 'Python',
    topics: ['AWS', 'SAM', 'CDK', 'CI/CD'],
    featured: false,
    titleKey: 'devopsPracticeTitle',
    descriptionKey: 'devopsPracticeDescription',
  },
]
