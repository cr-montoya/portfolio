import { skillCategories, skills } from '@/data/skills'
import { useTranslation } from '@/i18n'
import { Badge, Card, SectionTitle, SectionWrapper } from '@/components/ui'

export function Skills() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="skills">
      <div className="mb-10 max-w-2xl">
        <SectionTitle label={t.skills.title} number="—" />
        <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
          {t.skills.description}
        </p>
      </div>

      <div className="space-y-10">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category.id)

          return (
            <section key={category.id}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-green" />
                <h3 className="font-mono text-sm text-text-primary">
                  {t.skills.categories[category.labelKey]}
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {categorySkills.map((skill) => (
                  <Card className="group p-4" key={skill.id}>
                    <div className="flex items-center gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border-strong bg-surface-muted font-mono text-xs text-accent-cyan transition-colors group-hover:border-accent-cyan">
                        {skill.symbol}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-mono text-sm text-text-primary">
                          {t.skills.items[skill.nameKey]}
                        </p>
                        <Badge className="mt-2" variant="default">
                          {t.skills.levels[skill.level]}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
