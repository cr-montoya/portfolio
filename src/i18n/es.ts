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
    body: 'Portafolio de DevOps e ingeniería cloud enfocado en automatización, confiabilidad y entrega práctica.',
  },
  skills: {
    title: 'Habilidades',
    description: 'Cloud, infraestructura como código, CI/CD, observabilidad y automatización.',
  },
  projects: {
    title: 'Proyectos',
    description:
      'Trabajo seleccionado en infraestructura cloud, sistemas de entrega y herramientas para desarrolladores.',
  },
  experience: {
    title: 'Experiencia',
    description: 'Trayectoria profesional en DevOps, plataformas cloud y operación de sistemas.',
  },
  certifications: {
    title: 'Certificaciones',
    description: 'Credenciales cloud y de ingeniería que respaldan el trabajo.',
  },
  contact: {
    title: 'Contacto',
    description: 'Hablemos sobre oportunidades en cloud, DevOps e ingeniería de plataformas.',
    cta: 'Iniciar conversación',
  },
  common: {
    currentLanguage: 'Idioma actual',
    switchToEnglish: 'Cambiar a inglés',
    switchToSpanish: 'Cambiar a español',
  },
} satisfies Translations
