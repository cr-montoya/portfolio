import type { Translations } from './types'

export const es = {
  nav: {
    brand: '~/cristian',
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    experience: 'Experiencia',
    certifications: 'Certs',
    contact: 'Contacto',
    languageToggle: 'Seleccionar idioma',
  },
  hero: {
    eyebrow: 'hola, soy',
    title: 'Cristian Montoya',
    subtitle: 'Ingeniero Senior AWS DevOps',
    description:
      'Diseño, automatizo y aseguro entornos cloud productivos en AWS — Terraform, CI/CD y DevSecOps por más de 4 años.',
    terminal: {
      whoamiCommand: 'whoami',
      whoamiResult: 'cristian-montoya — ingeniero devops senior',
      planCommand: 'terraform plan',
      planResult: '4+ años de experiencia · listo para producción',
    },
    actions: {
      projects: 'ver proyectos',
      contact: 'hablemos',
    },
    social: {
      github: 'Perfil de GitHub',
      linkedin: 'Perfil de LinkedIn',
      email: 'Enviar email a Cristian Montoya',
    },
    scrollIndicator: 'Ir a la sección sobre mí',
  },
  about: {
    title: 'Sobre mí',
    eyebrow: 'cloud productivo, construido con intención',
    body: [
      'Soy Ingeniero Senior AWS DevOps en Medellín, Colombia, con más de 4 años diseñando, automatizando, asegurando y operando entornos cloud productivos y resilientes.',
      'Mi trabajo se enfoca en infraestructura como código, CI/CD, cargas contenerizadas, redes cloud, observabilidad, backups y prácticas de recuperación ante desastres.',
      'He liderado iniciativas de infraestructura AWS desde arquitectura e implementación con Terraform hasta automatización de entrega, apoyando cumplimiento SOC2/HIPAA y controles de seguridad más sólidos.',
    ],
    focusTitle: 'áreas de enfoque',
    focus: {
      aws: 'Infraestructura AWS',
      iac: 'Terraform e IaC',
      cicd: 'Automatización CI/CD',
      security: 'Seguridad y compliance',
      observability: 'Observabilidad',
    },
    current: {
      label: 'actualmente',
      value: 'AWS DevOps Engineer Professional certificado',
    },
    visual: {
      roleLabel: 'rol',
      roleValue: 'DevOps & Security Tech Lead',
      locationLabel: 'ubicación',
      locationValue: 'Medellín, Colombia',
      stackLabel: 'stack',
      stackValue: 'AWS · Terraform · CI/CD · Seguridad',
    },
  },
  skills: {
    title: 'Habilidades',
    description:
      'Herramientas prácticas para infraestructura cloud, automatización de entrega, observabilidad y controles de seguridad.',
    categories: {
      cloud: 'Cloud',
      iac: 'Infraestructura como Código',
      cicd: 'CI/CD',
      languages: 'Lenguajes',
      observability: 'Observabilidad',
      security: 'Seguridad',
    },
    levels: {
      expert: 'Experto',
      advanced: 'Avanzado',
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
    title: 'Proyectos',
    description:
      'Trabajo seleccionado en infraestructura cloud, sistemas de entrega y herramientas para desarrolladores.',
    labels: {
      featured: 'destacado',
      repository: 'repositorio',
      demo: 'demo',
      language: 'lenguaje',
    },
    items: {
      awsSecurityTitle: 'AWS Account Security Toolkit',
      awsSecurityDescription:
        'Automatización de seguridad y guardrails para cuentas AWS, enfocada en remediación IAM, controles base y hardening operativo.',
      wc2026Title: 'Simulador de Predicciones Mundial 2026',
      wc2026Description:
        'Simulador analítico en TypeScript para predicciones de torneo usando modelo Poisson, Monte Carlo e insights asistidos por IA.',
      devopsPracticeTitle: 'AWS DevOps Pro Practice',
      devopsPracticeDescription:
        'Repositorio de práctica para patrones AWS DevOps Professional con Python, SAM/CDK, flujos CI/CD y ejemplos de observabilidad.',
    },
  },
  experience: {
    title: 'Experiencia',
    description:
      'Una línea de tiempo enfocada en operación cloud productiva, automatización DevOps, controles de seguridad y mejoras de entrega.',
    labels: {
      current: 'actual',
      present: 'presente',
      stack: 'stack',
    },
    highlights: {
      soc2: 'SOC2 Type I/II',
      hipaa: 'Infra HIPAA compliant',
      delivery: 'Deployments 80% más rápidos',
      ai: 'Flujos con AI',
    },
    roles: {
      techLead: 'DevOps and Security Tech Lead',
      devopsSecurityEngineer: 'DevOps and Security Engineer',
    },
    accomplishments: {
      multiCloudLeadership: 'Lidero la operación y evolución de entornos multi-cloud.',
      awsOwnership:
        'Soy responsable de iniciativas AWS end-to-end, desde arquitectura e implementación con Terraform hasta integración CI/CD.',
      complianceSecurity:
        'Apoyé la obtención de SOC2 Type I el año pasado y SOC2 Type II este año, manteniendo infraestructura productiva HIPAA compliant.',
      cicdOptimization:
        'Diseñé sistemas CI/CD con despliegues blue-green en producción, reduciendo riesgo de release y manteniendo plataformas online.',
      devopsPracticeBuilt:
        'Construí la práctica DevOps casi desde cero: pipelines, estándares, operación productiva y ownership de infraestructura en la compañía.',
      teamLeadership:
        'Lideré y formé ingenieros desde bases entry-level hasta perfiles capaces en infraestructura y delivery.',
      productionOwnership:
        'Lideré iniciativas end to end, desde levantamiento de requerimientos y arquitectura hasta implementación, despliegue y operación en producción.',
      aiWorkflowAdoption:
        'Integré flujos de ingeniería asistidos por AI en el día a día, incluyendo ejecución guiada por harness y spec-driven development.',
      automationTransformation:
        'Convertí delivery semi-manual en un ecosistema DevOps automatizado, construyendo pipelines para productos y entornos.',
      selfHostedMigration:
        'Migré flujos de delivery y control de código hacia plataformas self-hosted como GitLab y tooling interno.',
      terraformConsolidation:
        'Consolidé infraestructura fragmentada en repositorios Terraform reutilizables y ayudé a establecer bases cloud seguras.',
      deploymentReduction:
        'Construí bases iniciales de delivery con Linux, Docker, CircleCI y GitLab CI, reduciendo tiempos de despliegue en más de 80%.',
    },
  },
  certifications: {
    title: 'Certificaciones',
    description: 'Credenciales cloud y de ingeniería que respaldan el trabajo.',
    labels: {
      expires: 'Vence',
      issued: 'Emitido',
      badgeAlt: 'insignia',
    },
  },
  contact: {
    title: 'Contacto',
    description:
      'Abierto a conversaciones sobre DevOps senior, platform engineering, seguridad cloud y automatización de infraestructura.',
    cta: 'Iniciar conversación',
    eyebrow: 'listo para construir cloud productivo',
    availability: 'Basado en Medellín, Colombia · disponible para colaboración remota',
    labels: {
      open: 'abrir',
    },
    links: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    linkDescriptions: {
      email: 'Envía un mensaje directo a Cristian.',
      linkedin: 'Conecta desde el perfil profesional.',
      github: 'Revisa repositorios públicos y trabajo técnico.',
    },
    footer:
      '© 2026 Cristian Montoya. Construido con React, TypeScript, Tailwind y Cloudflare Pages.',
  },
  common: {
    currentLanguage: 'Idioma actual',
    switchToEnglish: 'Cambiar a inglés',
    switchToSpanish: 'Cambiar a español',
  },
} satisfies Translations
