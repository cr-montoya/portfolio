import type { Locale } from '@/types/locale'

export interface Translations {
  nav: {
    brand: string
    about: string
    projects: string
    experience: string
    judo: string
    certifications: string
    writing: string
    contact: string
    languageToggle: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    // Text wrapped in [[ ]] renders as a red brand-accent highlight (parsed in Hero). Keep the markers when translating.
    description: string
    terminal: {
      whoamiCommand: string
      whoamiResult: string
      focusCommand: string
      focusResult: string
      uptimeCommand: string
      uptimeResult: string
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
    kicker: string
    body: string[]
    focusTitle: string
    focus: {
      aws: string
      iac: string
      cicd: string
      security: string
      observability: string
      aidlc: string
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
  projects: {
    title: string
    description: string
    labels: {
      featured: string
      repository: string
      demo: string
      language: string
    }
    items: {
      awsSecurityTitle: string
      awsSecurityDescription: string
      wc2026Title: string
      wc2026Description: string
      devopsPracticeTitle: string
      devopsPracticeDescription: string
    }
  }
  experience: {
    title: string
    description: string
    labels: {
      current: string
      present: string
      stack: string
    }
    stats: Array<{ v: string; k: string }>
    roles: {
      techLead: string
      devopsSecurityEngineer: string
    }
    accomplishments: {
      multiCloudLeadership: string
      awsOwnership: string
      complianceSecurity: string
      cicdOptimization: string
      devopsPracticeBuilt: string
      teamLeadership: string
      productionOwnership: string
      aiWorkflowAdoption: string
      automationTransformation: string
      selfHostedMigration: string
      terraformConsolidation: string
      deploymentReduction: string
    }
  }
  certifications: {
    title: string
    description: string
    labels: {
      expires: string
      issued: string
      badgeAlt: string
      active: string
      retired: string
    }
  }
  judo: {
    title: string
    kicker: string
    caption: string
    intro: string
    intro2: string
    intro3: string
    beltsTitle: string
    beltJudo: string
    muayThai: string
    principlesTitle: string
    principles: Array<{
      jp: string
      kanji: string
      term: string
      desc: string
    }>
  }
  writing: {
    title: string
    description: string
    articles: Array<{
      date: string
      title: string
      tag: string
    }>
  }
  contact: {
    title: string
    heading: string
    body: string
    footer: string
    links: {
      email: string
      github: string
      linkedin: string
    }
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
