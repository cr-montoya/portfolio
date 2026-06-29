import type { Translations } from './types'

export const en = {
  nav: {
    brand: '~/cristian',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    certifications: 'Certs',
    contact: 'Contact',
    languageToggle: 'Select language',
  },
  hero: {
    eyebrow: "hi, i'm",
    title: 'Cristian Montoya',
    subtitle: 'Senior AWS DevOps Engineer',
    description:
      'Designing, automating, and securing production cloud environments on AWS — Terraform, CI/CD, and DevSecOps for 4+ years.',
    terminal: {
      whoamiCommand: 'whoami',
      whoamiResult: 'cristian-montoya — senior devops engineer',
      planCommand: 'terraform plan',
      planResult: '4+ years experience · production-ready',
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
    title: 'About',
    eyebrow: 'production cloud, built with intent',
    body: [
      'I am a Senior AWS DevOps Engineer based in Medellín, Colombia, with 4+ years designing, automating, securing, and operating resilient production cloud environments.',
      'My work centers on infrastructure as code, CI/CD, containerized workloads, cloud networking, observability, backup, and disaster recovery practices.',
      'I have led AWS infrastructure initiatives from architecture and Terraform implementation to delivery automation, while supporting SOC2/HIPAA compliance and stronger security controls.',
    ],
    focusTitle: 'focus areas',
    focus: {
      aws: 'AWS cloud infrastructure',
      iac: 'Terraform & IaC',
      cicd: 'CI/CD automation',
      security: 'Security & compliance',
      observability: 'Observability',
    },
    current: {
      label: 'currently',
      value: 'AWS DevOps Engineer Professional certified',
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
  skills: {
    title: 'Skills',
    description:
      'Practical tooling across cloud infrastructure, delivery automation, observability, and security controls.',
    categories: {
      cloud: 'Cloud',
      iac: 'Infrastructure as Code',
      cicd: 'CI/CD',
      languages: 'Languages',
      observability: 'Observability',
      security: 'Security',
    },
    levels: {
      expert: 'Expert',
      advanced: 'Advanced',
      familiar: 'Familiar',
    },
    items: {
      aws: 'AWS',
      ec2: 'EC2',
      lambda: 'Lambda',
      s3: 'S3',
      terraform: 'Terraform',
      cdk: 'AWS CDK',
      cloudformation: 'CloudFormation',
      sam: 'AWS SAM',
      githubActions: 'GitHub Actions',
      codepipeline: 'CodePipeline',
      codebuild: 'CodeBuild',
      codedeploy: 'CodeDeploy',
      python: 'Python',
      typescript: 'TypeScript',
      bash: 'Bash',
      cloudwatch: 'CloudWatch',
      xray: 'X-Ray',
      grafana: 'Grafana',
      iam: 'IAM',
      guardduty: 'GuardDuty',
      securityHub: 'Security Hub',
      awsConfig: 'AWS Config',
    },
  },
  projects: {
    title: 'Projects',
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
        'Security automation and guardrails for AWS accounts, focused on IAM remediation, baseline controls, and operational hardening.',
      wc2026Title: 'World Cup 2026 Prediction Simulator',
      wc2026Description:
        'TypeScript analytics simulator for tournament predictions using Poisson modeling, Monte Carlo simulation, and AI-assisted insights.',
      devopsPracticeTitle: 'AWS DevOps Pro Practice',
      devopsPracticeDescription:
        'Practice repository for AWS DevOps Professional patterns with Python, SAM/CDK, CI/CD workflows, and observability examples.',
    },
  },
  experience: {
    title: 'Experience',
    description:
      'A focused timeline of production cloud ownership, DevOps automation, security controls, and delivery improvements.',
    labels: {
      current: 'current',
      present: 'present',
      stack: 'stack',
    },
    highlights: {
      soc2: 'SOC2 Type I/II',
      hipaa: 'HIPAA compliant infra',
      delivery: '80% faster deployments',
      ai: 'AI-enabled workflows',
    },
    roles: {
      techLead: 'DevOps and Security Tech Lead',
      devopsSecurityEngineer: 'DevOps and Security Engineer',
    },
    accomplishments: {
      multiCloudLeadership: 'Lead the operation and evolution of multi-cloud environments.',
      awsOwnership:
        'Own end-to-end AWS infrastructure initiatives from architecture and Terraform implementation to CI/CD integration.',
      complianceSecurity:
        'Helped the company achieve SOC2 Type I last year and SOC2 Type II this year while keeping production infrastructure HIPAA compliant.',
      cicdOptimization:
        'Designed CI/CD systems with blue-green production deployments, reducing release risk and keeping customer-facing platforms online.',
      devopsPracticeBuilt:
        'Built the DevOps practice from near zero: pipelines, standards, production operations, and infrastructure ownership across the company.',
      teamLeadership:
        'Led and mentored engineers from entry-level foundations into capable infrastructure and delivery contributors.',
      productionOwnership:
        'Owned initiatives end to end, from requirement discovery and architecture to implementation, deployment, and production operation.',
      aiWorkflowAdoption:
        'Integrated AI-assisted engineering workflows into daily delivery, including harness-driven execution and spec-driven development.',
      automationTransformation:
        'Turned semi-manual delivery into an automated DevOps ecosystem, building pipelines across products and environments.',
      selfHostedMigration:
        'Migrated delivery and source-control workflows toward self-hosted platforms such as GitLab and internal tooling.',
      terraformConsolidation:
        'Consolidated fragmented infrastructure code into reusable Terraform repositories and helped establish secure cloud foundations.',
      deploymentReduction:
        'Built early delivery foundations with Linux, Docker, CircleCI, and GitLab CI, reducing deployment times by more than 80%.',
    },
  },
  certifications: {
    title: 'Certifications',
    description: 'Cloud and engineering credentials that support the work.',
  },
  contact: {
    title: 'Contact',
    description: 'Reach out for cloud, DevOps, and platform engineering opportunities.',
    cta: 'Start a conversation',
  },
  common: {
    currentLanguage: 'Current language',
    switchToEnglish: 'Switch to English',
    switchToSpanish: 'Switch to Spanish',
  },
} satisfies Translations
