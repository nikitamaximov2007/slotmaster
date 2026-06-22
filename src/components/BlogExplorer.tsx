'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import type { Article, ArticleCategory } from '@/types';
import { ArticleCard } from './ArticleCard';

export function BlogExplorer({ articles, categories }: { articles: Article[]; categories: ArticleCategory[] }) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<'Все' | ArticleCategory>('Все');
  const [visible, setVisible] = useState(9);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      const matchesCat = cat === 'Все' || a.category === cat;
      return matchesQuery && matchesCat;
    });
  }, [articles, query, cat]);

  const shown = filtered.slice(0, visible);

  return (
    <div className="min-w-0">
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(9);
            }}
            placeholder="Поиск по статьям"
            aria-label="Поиск по статьям"
            className="h-11 w-full rounded-lg border border-edge bg-surface pl-9 pr-3 text-sm text-primary outline-none transition focus:border-edge-active"
          />
        </div>
        <div className="scroll-rail flex max-w-full min-w-0 gap-2 overflow-x-auto">
          {(['Все', ...categories] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCat(c as 'Все' | ArticleCategory);
                setVisible(9);
              }}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                cat === c ? 'border-edge-active bg-blue/15 text-primary' : 'border-edge text-muted hover:text-primary'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {shown.length > 0 ? (
        <div className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-card border border-edge bg-surface p-6 text-sm text-secondary">
          Ничего не найдено. Измените запрос или категорию.
        </p>
      )}

      {visible < filtered.length && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + 6)}
            className="h-11 rounded-lg border border-edge bg-surface px-6 text-sm font-semibold text-primary transition hover:border-edge-active"
          >
            Показать ещё
          </button>
        </div>
      )}
    </div>
  );
}
