import { useTranslation } from '@/i18n'
import { SectionTitle, SectionWrapper } from '@/components/ui'

export function Writing() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="writing">
      <SectionTitle label={t.writing.title} number="06" />

      <p className="mt-2 mb-8 text-[15px] leading-7 text-text-muted">{t.writing.description}</p>

      <ul className="space-y-0 divide-y divide-border">
        {t.writing.articles.map((article) => (
          <li className="flex items-baseline justify-between gap-4 py-5" key={article.title}>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-text-dim">{article.date}</span>
              <span className="text-[15px] text-text-primary">{article.title}</span>
            </div>
            <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-subtle">
              {article.tag}
            </span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
