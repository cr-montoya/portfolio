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
      'Soy Ingeniero Senior AWS DevOps en Medellín, Colombia, con más de 4 años diseñando soluciones en AWS de punta a punta, desde el requerimiento y la arquitectura hasta el despliegue en producción y su operación diaria.',
      'Lidero DevOps y seguridad en Alternova, donde construí la práctica desde cero con Terraform, AWS CDK y CI/CD, diseñé una plataforma bancaria y lidero SOC 2, ISO 27001 e HIPAA.',
      'Además construyo proyectos con Amazon Bedrock y arquitecturas agénticas sobre MCP, guiados por Spec Driven Development y AIDLC.',
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
      ghostStockTitle: 'GhostStock',
      ghostStockDescription:
        'Inventario por foto en AWS. La Converse API de Amazon Bedrock responde con una única herramienta forzada y un esquema estricto sin campos de precio, cantidad ni SKU, así el modelo no puede inventar datos. Serverless con CDK v2, React 19 y gates de Playwright, con specs escritas en Kiro y hecho en un día.',
      atlasTitle: 'Atlas',
      atlasDescription:
        'App personal de finanzas y rendimiento deportivo, local first, con arquitectura agéntica. Agentes headless corren desde una cola de trabajos de IA con herramientas acotadas por tipo de trabajo, los datos de Garmin y Polar llegan por MCP y cada efecto secundario se verifica después de cada ejecución. Privada por diseño con transcripción de voz local, cubierta por 550 pruebas y con una demo de datos ficticios que corre en tres comandos.',
      appNutriTitle: 'AppNutri',
      appNutriDescription:
        'SaaS multi-tenant en fase inicial para profesionales de nutrición, con aislamiento de tenants en dos capas mediante el contexto de tenant de Prisma y row-level security de Postgres. El CI corre Semgrep, Gitleaks y OWASP ZAP, y genera un SBOM CycloneDX.',
      awsSecurityTitle: 'AWS Account Security Toolkit',
      awsSecurityDescription:
        'Automatización y guardrails de seguridad para cuentas AWS con remediación IAM, controles base y hardening operativo.',
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
      { v: 'SOC 2', k: 'Type I / II' },
      { v: 'HIPAA', k: 'infra conforme' },
      { v: '95%', k: 'deploys más rápidos' },
      { v: 'IA', k: 'workflows habilitados' },
    ],
    roles: {
      techLead: 'DevOps & Security Tech Lead',
      devopsSecurityEngineer: 'DevOps & Security Engineer',
    },
    accomplishments: {
      bamPlatform:
        'Diseñé la plataforma de corresponsales bancarios de Bam, Banco Agromercantil, con más de 700 agentes sobre ALB, Auto Scaling Multi-AZ, SQS con DLQ y Aurora Global, con DR warm standby multirregión y failover automatizado vía Lambda.',
      bamCapacity:
        'Reduje la capacidad pico web de Bam de 7 a 2 instancias con pruebas de carga y Performance Insights.',
      scmMigration:
        'Ejecuté con automatización e IA una migración SCM dimensionada para un equipo de 4, consolidando miles de repositorios con código, artefactos de build e imágenes Docker de 21 sistemas de origen de Spirent en 2 sistemas de Keysight, unos 100 TB estimados.',
      cloudFormationMigration:
        'Migré una aplicación de cuatro ambientes de CloudFormation monolítico a Terraform con AWS DMS, en una ventana de una hora y sin rollback.',
      multiCloudLeadership: 'Lidero la operación y evolución de entornos multi-cloud.',
      awsOwnership:
        'Soy responsable de iniciativas AWS end-to-end, desde arquitectura e implementación con Terraform hasta integración CI/CD.',
      complianceSecurity:
        'Lidero SOC 2 Type I y Type II e ISO 27001 en toda la organización, y el cumplimiento HIPAA de cuatro proyectos de salud.',
      cicdOptimization:
        'Diseñé CI/CD con despliegues blue-green en producción, reduciendo riesgo de release y manteniendo plataformas online.',
      devopsPracticeBuilt:
        'Construí la práctica DevOps desde cero con Terraform, AWS CDK, CI/CD, estándares de ingeniería y operación en producción.',
      teamLeadership:
        'Lideré y formé ingenieros desde fundamentos hasta perfiles capaces en infraestructura y delivery.',
      productionOwnership:
        'Lideré iniciativas de punta a punta, desde el levantamiento de requerimientos y la arquitectura hasta el despliegue y la operación en producción.',
      aiWorkflowAdoption:
        'Integré ingeniería asistida por IA en la entrega diaria con arquitecturas agénticas sobre MCP, Spec Driven Development y AIDLC.',
      automationTransformation:
        'Convertí delivery semi-manual en un ecosistema DevOps automatizado para productos y entornos.',
      selfHostedMigration:
        'Desplegué y administré una plataforma self-hosted con GitLab y runners para cientos de repositorios y unos 120 usuarios, más gestión de proyectos, analítica, secretos y monitoreo.',
      terraformConsolidation:
        'Consolidé infraestructura fragmentada en repositorios Terraform reutilizables y bases cloud seguras.',
      deploymentReduction:
        'Implementé las bases de delivery con Linux, Docker, CircleCI y GitLab CI, reduciendo los despliegues de 40 a 2 minutos, cerca de un 95 % más rápido.',
      availabilityImprovement:
        'Elevé la disponibilidad de producción de caídas en cada despliegue a 99,9 %, medida con UptimeRobot.',
      costReduction: 'Reduje los costos de infraestructura en 40 %.',
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
      upcoming: 'Próximamente ·',
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
