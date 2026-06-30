import { projects } from '@/data/projects'
import { useTranslation } from '@/i18n'
import { Badge, Button, Card, SectionTitle, SectionWrapper } from '@/components/ui'

export function Projects() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="projects">
      <SectionTitle label={t.projects.title} number="02" />

      <p className="mt-2 mb-10 text-[15px] leading-7 text-text-muted">{t.projects.description}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            className={`flex flex-col ${project.featured ? 'border-accent-green/40' : ''}`}
            key={project.id}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs text-text-dim">{project.nameWithOwner}</p>
              {project.featured ? (
                <Badge variant="accent">{t.projects.labels.featured}</Badge>
              ) : null}
            </div>

            <div className="flex flex-1 flex-col">
              <h3 className="font-sans text-lg font-semibold text-text-primary">
                {t.projects.items[project.titleKey]}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-7 text-text-muted">
                {t.projects.items[project.descriptionKey]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">
                  {t.projects.labels.language}: {project.primaryLanguage}
                </Badge>
                {project.topics.map((topic) => (
                  <Badge key={topic}>{topic}</Badge>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={project.repositoryUrl} variant="secondary">
                  {t.projects.labels.repository}
                </Button>
                {project.demoUrl ? (
                  <Button href={project.demoUrl} variant="primary">
                    {t.projects.labels.demo}
                  </Button>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
