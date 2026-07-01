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
      'Diseño, automatizo y aseguro nube en producción sobre AWS con Terraform, CI/CD y DevSecOps desde hace [[4+ años]].',
    terminal: {
      whoamiCommand: 'whoami',
      whoamiResult: 'cristian-montoya · ingeniero devops & seguridad senior',
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
      aidlc: 'AIDLC',
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
        'Automatización y guardrails de seguridad para cuentas AWS: remediación IAM, controles base y hardening operativo.',
      wc2026Title: 'Simulador de Predicciones Mundial 2026',
      wc2026Description:
        'Simulador analítico en TypeScript con modelado Poisson, simulación Monte Carlo e insights asistidos por IA.',
      devopsPracticeTitle: 'AWS DevOps Pro Practice',
      devopsPracticeDescription:
        'Patrones de referencia para AWS DevOps Professional con Python, SAM/CDK, workflows CI/CD y observabilidad.',
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
        'Lideré iniciativas end to end: desde levantamiento de requerimientos y arquitectura hasta despliegue y operación.',
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
    caption: '// la trayectoria de una proyección, y de un deploy',
    intro:
      'Mi historia en los deportes de combate empezó hace nueve años, y comenzó en el Muay Thai. Conocido como el arte de las ocho extremidades, me atrapó por su filosofía, basada en la disciplina, el respeto y el autocontrol que exige, premiando la paciencia y la precisión por encima de la agresividad. Me mantuve invicto sobre el ring con un récord de 6-0.',
    intro2:
      'Una lesión terminó alejándome de las artes de golpeo y me llevó al tatami de judo, y ese giro se convirtió en un camino propio. En judo obtuve mi cinturón azul, competí a nivel universitario y fui varias veces medallista en torneos nacionales representando a Antioquia.',
    intro3:
      'Nada de esto es solo una página deportiva. Es donde se forjaron mis instintos de ingeniería, desde leer un sistema antes de que falle hasta actuar con timing deliberado y mejorar sin descanso, porque las mejoras pequeñas y constantes son las que se acumulan en fuerza real.',
    beltsTitle: 'disciplinas',
    disciplineJudo: 'Judo',
    beltJudo: 'Cinturón azul',
    disciplineMuayThai: 'Muay Thai',
    muayThai: '6-0 en peleas',
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
        jp: 'Seijaku',
        kanji: '静寂',
        term: 'calma en el caos',
        desc: 'Mantener la compostura cuando los sistemas están bajo presión. Acción serena frente al ruido reactivo.',
      },
      {
        jp: 'Ukemi',
        kanji: '受け身',
        term: 'el arte de caer',
        desc: 'Diseñar para fallar seguro: resiliencia, backups, recuperación.',
      },
      {
        jp: 'Kaizen',
        kanji: '改善',
        term: 'mejora continua',
        desc: 'Iterar sin descanso. Las mejoras pequeñas se acumulan.',
      },
    ],
  },
  writing: {
    title: 'notas',
    description: 'Notas sobre cloud, automatización y la disciplina detrás. Muy pronto.',
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
