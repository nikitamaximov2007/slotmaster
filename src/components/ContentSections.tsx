import { Info } from 'lucide-react';
import type { ArticleSection } from '@/types';

// Renders structured prose sections (paragraphs, lists, notes) with heading
// anchors for the table of contents. Used by reviews and articles.
export function ContentSections({ sections, level = 2 }: { sections: ArticleSection[]; level?: 2 | 3 }) {
  const Heading = level === 2 ? 'h2' : 'h3';
  return (
    <div className="prose-article">
      {sections.map((s) => (
        <section key={s.id} aria-labelledby={s.id}>
          <Heading id={s.id} className={level === 2 ? 'text-2xl font-bold' : 'text-xl font-bold'}>
            {s.heading}
          </Heading>
          {s.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}

          {s.list && (
            s.list.ordered ? (
              <ol className="mb-4 list-decimal space-y-2 pl-5 text-secondary marker:font-semibold marker:text-blue-bright">
                {s.list.items.map((it, i) => (
                  <li key={i} className="pl-1">{it}</li>
                ))}
              </ol>
            ) : (
              <ul className="mb-4 space-y-2">
                {s.list.items.map((it, i) => (
                  <li key={i} className="relative pl-6 text-secondary">
                    <span className="absolute left-1 top-2.5 h-1.5 w-1.5 rounded-sm bg-blue-bright" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            )
          )}

          {s.note && (
            <div className="my-4 flex gap-3 rounded-card border border-edge bg-surface p-4">
              <Info size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-sm text-secondary">{s.note}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
