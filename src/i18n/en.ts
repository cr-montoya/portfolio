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
    body: 'DevOps and cloud engineering portfolio focused on automation, reliability, and practical delivery.',
  },
  skills: {
    title: 'Skills',
    description: 'Cloud, infrastructure as code, CI/CD, observability, and automation.',
  },
  projects: {
    title: 'Projects',
    description:
      'Selected work across cloud infrastructure, delivery systems, and developer tooling.',
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
