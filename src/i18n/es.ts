import type { Translations } from './types'

export const es = {
  nav: {
    brand: '~/cristian',
    about: 'sobre mí',
    projects: 'proyectos',
    experience: 'experiencia',
    judo: 'judo',
    certifications: 'certs',
    writing: 'notas',
    contact: 'contacto',
    languageToggle: 'Seleccionar idioma',
  },
  hero: {
    eyebrow: 'hola, soy',
    title: 'Cristian Montoya',
    subtitle: 'Ingeniero Senior AWS DevOps',
    description:
      'Diseño, automatizo y aseguro nube en producción sobre AWS — Terraform, CI/CD y DevSecOps desde hace 4+ años.',
    terminal: {
      whoamiCommand: 'whoami',
      whoamiResult: 'cristian-montoya — ingeniero devops & seguridad senior',
      focusCommand: 'cat enfoque.txt',
      focusResult: 'aws · terraform · ci/cd · devsecops',
      uptimeCommand: 'uptime',
      uptimeResult: '4+ años · listo para producción',
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
    title: 'sobre mí',
    eyebrow: 'cloud productivo, construido con intención',
    kicker: 'nube en producción, construida con intención',
    body: [
      'Soy Ingeniero Senior AWS DevOps en Medellín, Colombia, con 4+ años diseñando, automatizando, asegurando y operando entornos cloud productivos y resilientes.',
      'Mi trabajo se centra en infraestructura como código, CI/CD, cargas contenerizadas, redes cloud, observabilidad, backup y recuperación ante desastres.',
      'He liderado iniciativas AWS desde arquitectura e implementación con Terraform hasta automatización de entrega, apoyando cumplimiento SOC2/HIPAA y controles de seguridad más sólidos.',
    ],
    focusTitle: 'áreas de enfoque',
    focus: {
      aws: 'Infraestructura cloud AWS',
      iac: 'Terraform & IaC',
      cicd: 'Automatización CI/CD',
      security: 'Seguridad & compliance',
      observability: 'Observabilidad',
    },
    current: {
      label: 'actualmente',
      value: 'AWS DevOps Engineer · certificado Professional',
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
    title: 'proyectos',
    description:
      'Trabajo seleccionado en infraestructura cloud, sistemas de entrega y herramientas para developers.',
    labels: {
      featured: 'destacado',
      repository: 'repositorio',
      demo: 'demo',
      language: 'lenguaje',
    },
    items: {
      awsSecurityTitle: 'AWS Account Security Toolkit',
      awsSecurityDescription:
        'Automatización y guardrails de seguridad para cuentas AWS — remediación IAM, controles base y hardening operativo.',
      wc2026Title: 'Simulador de Predicciones Mundial 2026',
      wc2026Description:
        'Simulador analítico en TypeScript con modelado Poisson, simulación Monte Carlo e insights asistidos por IA.',
      devopsPracticeTitle: 'AWS DevOps Pro Practice',
      devopsPracticeDescription:
        'Patrones de referencia para AWS DevOps Professional — Python, SAM/CDK, workflows CI/CD y observabilidad.',
    },
  },
  experience: {
    title: 'experiencia',
    description:
      'Una línea de tiempo enfocada en ownership cloud en producción, automatización, seguridad y entrega.',
    labels: {
      current: 'actual',
      present: 'presente',
      stack: 'stack',
    },
    stats: [
      { v: 'SOC2', k: 'Type I / II' },
      { v: 'HIPAA', k: 'infra conforme' },
      { v: '80%', k: 'deploys más rápidos' },
      { v: 'IA', k: 'workflows habilitados' },
    ],
    roles: {
      techLead: 'DevOps & Security Tech Lead',
      devopsSecurityEngineer: 'DevOps & Security Engineer',
    },
    accomplishments: {
      multiCloudLeadership: 'Lidero la operación y evolución de entornos multi-cloud.',
      awsOwnership:
        'Soy responsable de iniciativas AWS end-to-end, desde arquitectura e implementación con Terraform hasta integración CI/CD.',
      complianceSecurity:
        'Impulsé SOC2 Type I y luego Type II, manteniendo la infraestructura de producción HIPAA compliant.',
      cicdOptimization:
        'Diseñé CI/CD con despliegues blue-green en producción, reduciendo riesgo de release y manteniendo plataformas online.',
      devopsPracticeBuilt:
        'Construí la práctica DevOps casi desde cero: pipelines, estándares, operación en producción y ownership de infraestructura.',
      teamLeadership:
        'Lideré y formé ingenieros desde fundamentos hasta perfiles capaces en infraestructura y delivery.',
      productionOwnership:
        'Lideré iniciativas end to end — desde levantamiento de requerimientos y arquitectura hasta despliegue y operación.',
      aiWorkflowAdoption:
        'Integré ingeniería asistida por IA en la entrega diaria: ejecución harness-driven y spec-driven development.',
      automationTransformation:
        'Convertí delivery semi-manual en un ecosistema DevOps automatizado para productos y entornos.',
      selfHostedMigration:
        'Migré flujos de delivery y control de código hacia plataformas self-hosted como GitLab.',
      terraformConsolidation:
        'Consolidé infraestructura fragmentada en repositorios Terraform reutilizables y bases cloud seguras.',
      deploymentReduction:
        'Construí bases de delivery con Linux, Docker, CircleCI y GitLab CI, reduciendo tiempos de despliegue en 80%.',
    },
  },
  certifications: {
    title: 'certificaciones',
    description: 'Credenciales cloud y de ingeniería que respaldan el trabajo.',
    labels: {
      expires: 'Vence',
      issued: 'Emitido',
      badgeAlt: 'insignia',
      active: 'activo',
      retired: 'retirado',
    },
  },
  judo: {
    title: 'judo',
    kicker: 'la disciplina detrás de la ingeniería',
    caption: '// la trayectoria de una proyección — y de un deploy',
    intro:
      'Nueve años en el tatami — judo y jiu-jitsu brasileño. Cinturón azul en judo, múltiple medallista nacional por Antioquia y competidor a nivel universitario.',
    intro2:
      'No es una página deportiva — es de donde vienen mis instintos de ingeniería: calma bajo presión, timing preciso y mejora incansable.',
    beltsTitle: 'cinturones',
    beltJudo: 'Cinturón azul',
    beltBjj: 'Cinturón blanco',
    principlesTitle: 'principios que llevo a producción',
    principles: [
      {
        jp: 'Kuzushi',
        kanji: '崩し',
        term: 'romper el equilibrio',
        desc: 'Encontrar los puntos de desequilibrio de un sistema antes de que fallen.',
      },
      {
        jp: "Seiryoku Zen'yō",
        kanji: '精力善用',
        term: 'máxima eficiencia',
        desc: 'Automatizar para máximo efecto con mínimo esfuerzo.',
      },
      {
        jp: 'Randori',
        kanji: '乱取り',
        term: 'práctica libre',
        desc: 'Mantener la calma y adaptarse bajo presión en producción.',
      },
      {
        jp: 'Ukemi',
        kanji: '受け身',
        term: 'el arte de caer',
        desc: 'Diseñar para fallar seguro — resiliencia, backups, recuperación.',
      },
      {
        jp: 'Kaizen',
        kanji: '改善',
        term: 'mejora continua',
        desc: 'Iterar sin descanso — las mejoras pequeñas se acumulan.',
      },
    ],
    stats: [
      { v: '9a', k: 'en el tatami' },
      { v: 'Múltiple', k: 'medallas nacionales' },
      { v: 'Antioquia', k: 'selección' },
      { v: 'Uni', k: 'competidor' },
    ],
  },
  writing: {
    title: 'notas',
    description: 'Notas sobre cloud, automatización y la disciplina detrás — muy pronto.',
    articles: [
      { date: 'pronto', title: 'Construir una práctica DevOps desde cero', tag: 'devops' },
      { date: 'pronto', title: 'SOC2 Type II sin frenar la entrega', tag: 'seguridad' },
      {
        date: 'pronto',
        title: 'Kuzushi para sistemas: encontrar la falla antes de que te encuentre',
        tag: 'fiabilidad',
      },
    ],
  },
  contact: {
    title: 'contacto',
    heading: 'Construyamos algo sólido.',
    body: 'Abierto a roles senior de DevOps / Cloud / Platform y a problemas interesantes de infraestructura.',
    footer: '© 2026 cristian montoya · construido con intención',
    links: {
      email: 'cristian.montoya@example.com',
      github: 'github.com/cr-montoya',
      linkedin: 'linkedin.com/in/cr-montoya',
    },
  },
  common: {
    currentLanguage: 'Idioma actual',
    switchToEnglish: 'Cambiar a inglés',
    switchToSpanish: 'Cambiar a español',
  },
} satisfies Translations
