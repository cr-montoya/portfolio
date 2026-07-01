import type { Translations } from './types'

export const en = {
  nav: {
    brand: '~/cristian',
    about: 'about',
    projects: 'projects',
    experience: 'experience',
    judo: 'judo',
    certifications: 'certs',
    writing: 'writing',
    contact: 'contact',
    languageToggle: 'Select language',
  },
  hero: {
    eyebrow: "hi, i'm",
    title: 'Cristian Montoya',
    subtitle: 'Senior AWS DevOps Engineer',
    description:
      'Designing, automating, and securing production cloud on AWS with Terraform, CI/CD, and DevSecOps for [[4+ years]].',
    terminal: {
      whoamiCommand: 'whoami',
      whoamiResult: 'cristian-montoya · senior devops & security engineer',
      focusCommand: 'cat focus.txt',
      focusResult: 'aws · terraform · ci/cd · devsecops',
      uptimeCommand: 'uptime',
      uptimeResult: '4+ years · production-ready',
    },
    actions: {
      projects: 'view projects',
      contact: 'get in touch',
    },
    social: {
      github: 'GitHub profile',
      linkedin: 'LinkedIn profile',
      email: 'Email Cristian Montoya',
    },
    scrollIndicator: 'Scroll to about section',
  },
  about: {
    title: 'about',
    eyebrow: 'production cloud, built with intent',
    kicker: 'production cloud, built with intent',
    body: [
      "I'm a Senior AWS DevOps Engineer based in Medellín, Colombia, with 4+ years designing, automating, securing, and operating resilient production cloud environments.",
      'My work centers on infrastructure as code, CI/CD, containerized workloads, cloud networking, observability, backup, and disaster recovery.',
      "I've led AWS initiatives from architecture and Terraform implementation to delivery automation, while supporting SOC2/HIPAA compliance and stronger security controls.",
    ],
    focusTitle: 'focus areas',
    focus: {
      aws: 'AWS cloud infrastructure',
      iac: 'Terraform & IaC',
      cicd: 'CI/CD automation',
      security: 'Security & compliance',
      observability: 'Observability',
      aidlc: 'AIDLC',
    },
    current: {
      label: 'currently',
      value: 'AWS DevOps Engineer · Professional certified',
    },
    visual: {
      roleLabel: 'role',
      roleValue: 'DevOps & Security Tech Lead',
      locationLabel: 'location',
      locationValue: 'Medellín, Colombia',
      stackLabel: 'stack',
      stackValue: 'AWS · Terraform · CI/CD · Security',
    },
  },
  projects: {
    title: 'projects',
    description:
      'Selected work across cloud infrastructure, delivery systems, and developer tooling.',
    labels: {
      featured: 'featured',
      repository: 'repository',
      demo: 'demo',
      language: 'language',
    },
    items: {
      awsSecurityTitle: 'AWS Account Security Toolkit',
      awsSecurityDescription:
        'Security automation and guardrails for AWS accounts: IAM remediation, baseline controls, and operational hardening.',
      wc2026Title: 'World Cup 2026 Prediction Simulator',
      wc2026Description:
        'TypeScript analytics simulator using Poisson modeling, Monte Carlo simulation, and AI-assisted insights.',
      devopsPracticeTitle: 'AWS DevOps Pro Practice',
      devopsPracticeDescription:
        'Reference patterns for AWS DevOps Professional with Python, SAM/CDK, CI/CD workflows, and observability.',
    },
  },
  experience: {
    title: 'experience',
    description:
      'A focused timeline of production cloud ownership, automation, security, and delivery.',
    labels: {
      current: 'current',
      present: 'present',
      stack: 'stack',
    },
    stats: [
      { v: 'SOC2', k: 'Type I / II' },
      { v: 'HIPAA', k: 'compliant infra' },
      { v: '80%', k: 'faster deployments' },
      { v: 'AI', k: 'enabled workflows' },
    ],
    roles: {
      techLead: 'DevOps & Security Tech Lead',
      devopsSecurityEngineer: 'DevOps & Security Engineer',
    },
    accomplishments: {
      multiCloudLeadership: 'Lead the operation and evolution of multi-cloud environments.',
      awsOwnership:
        'Own end-to-end AWS infrastructure initiatives from architecture and Terraform implementation to CI/CD integration.',
      complianceSecurity:
        'Drove SOC2 Type I, then Type II, while keeping production infrastructure HIPAA compliant.',
      cicdOptimization:
        'Designed CI/CD with blue-green production deployments, reducing release risk and keeping platforms online.',
      devopsPracticeBuilt:
        'Built the DevOps practice from near zero: pipelines, standards, production operations, and infrastructure ownership.',
      teamLeadership:
        'Led and mentored engineers from foundations into capable infrastructure contributors.',
      productionOwnership:
        'Owned initiatives end to end: from requirement discovery and architecture to deployment and production operation.',
      aiWorkflowAdoption:
        'Integrated AI-assisted engineering into daily delivery: harness-driven execution and spec-driven development.',
      automationTransformation:
        'Turned semi-manual delivery into an automated DevOps ecosystem across products and environments.',
      selfHostedMigration:
        'Migrated delivery and source-control workflows toward self-hosted platforms such as GitLab.',
      terraformConsolidation:
        'Consolidated fragmented infrastructure into reusable Terraform repositories and secure cloud foundations.',
      deploymentReduction:
        'Built early delivery foundations with Linux, Docker, CircleCI, and GitLab CI, reducing deployment times by 80%.',
    },
  },
  certifications: {
    title: 'certifications',
    description: 'Cloud and engineering credentials that support the work.',
    labels: {
      expires: 'Expires',
      issued: 'Issued',
      badgeAlt: 'badge',
      active: 'active',
      retired: 'retired',
    },
  },
  judo: {
    title: 'judo',
    kicker: 'the discipline behind the engineering',
    caption: '// the trajectory of a throw, and a deployment',
    intro:
      'Nine years on the mat: judo and Brazilian jiu-jitsu. Blue belt in judo, multiple national medalist for Antioquia, and university-level competitor.',
    intro2:
      "This isn't a sports page. It's where my engineering instincts come from: calm under pressure, precise timing, and relentless improvement.",
    beltsTitle: 'belts',
    beltJudo: 'Blue belt',
    beltBjj: 'White belt',
    principlesTitle: 'principles I carry to production',
    principles: [
      {
        jp: 'Kuzushi',
        kanji: '崩し',
        term: 'breaking balance',
        desc: "Find a system's points of imbalance before they fail.",
      },
      {
        jp: "Seiryoku Zen'yō",
        kanji: '精力善用',
        term: 'maximum efficiency',
        desc: 'Automate for maximum effect with minimum effort.',
      },
      {
        jp: 'Seijaku',
        kanji: '静寂',
        term: 'calm in chaos',
        desc: 'Stay composed when systems are on fire. Clear action over reactive noise.',
      },
      {
        jp: 'Ukemi',
        kanji: '受け身',
        term: 'the art of falling',
        desc: 'Design to fail safely: resilience, backups, recovery.',
      },
      {
        jp: 'Kaizen',
        kanji: '改善',
        term: 'continuous improvement',
        desc: 'Iterate relentlessly. Small gains compound.',
      },
    ],
    stats: [
      { v: '9y', k: 'on the mat' },
      { v: '3+', k: 'national medals' },
      { v: 'Antioquia', k: 'state team' },
      { v: 'ASCUN', k: 'collegiate level' },
    ],
  },
  writing: {
    title: 'writing',
    description: 'Notes on cloud, automation, and the discipline behind it. Coming soon.',
    articles: [
      { date: 'soon', title: 'Building a DevOps practice from zero', tag: 'devops' },
      { date: 'soon', title: 'SOC2 Type II without slowing delivery', tag: 'security' },
      {
        date: 'soon',
        title: 'Kuzushi for systems: finding failure before it finds you',
        tag: 'reliability',
      },
    ],
  },
  contact: {
    title: 'contact',
    heading: "Let's build something solid.",
    body: 'Open to senior DevOps / Cloud / Platform roles and interesting infrastructure problems.',
    footer: '© 2026 cristian montoya · built with intent',
    links: {
      email: 'cristian.montoya@example.com',
      github: 'github.com/cr-montoya',
      linkedin: 'linkedin.com/in/cr-montoya',
    },
  },
  common: {
    currentLanguage: 'Current language',
    switchToEnglish: 'Switch to English',
    switchToSpanish: 'Switch to Spanish',
  },
} satisfies Translations
