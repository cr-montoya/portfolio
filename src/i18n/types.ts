import type { Locale } from '@/types/locale'

export interface Translations {
  nav: {
    brand: string
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    certifications: string
    contact: string
    languageToggle: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    terminal: {
      whoamiCommand: string
      whoamiResult: string
      planCommand: string
      planResult: string
    }
    actions: {
      projects: string
      contact: string
    }
    social: {
      github: string
      linkedin: string
      email: string
    }
    scrollIndicator: string
  }
  about: {
    title: string
    eyebrow: string
    body: string[]
    focusTitle: string
    focus: {
      aws: string
      iac: string
      cicd: string
      security: string
      observability: string
    }
    current: {
      label: string
      value: string
    }
    visual: {
      roleLabel: string
      roleValue: string
      locationLabel: string
      locationValue: string
      stackLabel: string
      stackValue: string
    }
  }
  skills: {
    title: string
    description: string
    categories: {
      cloud: string
      iac: string
      cicd: string
      languages: string
      observability: string
      security: string
    }
    levels: {
      expert: string
      advanced: string
      familiar: string
    }
    items: {
      aws: string
      ec2: string
      lambda: string
      s3: string
      terraform: string
      cdk: string
      cloudformation: string
      sam: string
      githubActions: string
      codepipeline: string
      codebuild: string
      codedeploy: string
      python: string
      typescript: string
      bash: string
      cloudwatch: string
      xray: string
      grafana: string
      iam: string
      guardduty: string
      securityHub: string
      awsConfig: string
    }
  }
  projects: {
    title: string
    description: string
  }
  experience: {
    title: string
    description: string
  }
  certifications: {
    title: string
    description: string
  }
  contact: {
    title: string
    description: string
    cta: string
  }
  common: {
    currentLanguage: string
    switchToEnglish: string
    switchToSpanish: string
  }
}

export interface TranslationContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: Translations
}
