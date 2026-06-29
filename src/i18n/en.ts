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
    description: 'Professional background in DevOps, cloud platforms, and systems operations.',
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
