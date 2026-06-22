'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import type { Casino } from '@/types';
import { CasinoCard } from './CasinoCard';

type Ranked = Casino & { _rank: number };

export function ReviewsExplorer({ casinos, tags }: { casinos: Casino[]; tags: string[] }) {
  const ranked: Ranked[] = useMemo(
    () => casinos.map((c, i) => ({ ...c, _rank: i + 1 })),
    [casinos],
  );
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState<string>('Все');
  const [visible, setVisible] = useState(12);

  const filtered = useMemo(() => {
    return ranked.filter((c) => {
      const matchesQuery = c.name.toLowerCase().includes(query.trim().toLowerCase());
      const matchesTag = tag === 'Все' || c.tags.includes(tag as Casino['tags'][number]);
      return matchesQuery && matchesTag;
    });
  }, [ranked, query, tag]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(12);
            }}
            placeholder="Поиск по названию казино"
            aria-label="Поиск по названию казино"
            className="h-11 w-full rounded-lg border border-edge bg-surface pl-9 pr-3 text-sm text-primary outline-none transition focus:border-edge-active"
          />
        </div>
        <div className="scroll-rail flex gap-2 overflow-x-auto">
          {['Все', ...tags].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTag(t);
                setVisible(12);
              }}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                tag === t ? 'border-edge-active bg-blue/15 text-primary' : 'border-edge text-muted hover:text-primary'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {shown.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {shown.map((c) => (
            <CasinoCard key={c.slug} casino={c} rank={c._rank} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-card border border-edge bg-surface p-6 text-sm text-secondary">
          Ничего не найдено. Измените запрос или сбросьте фильтр.
        </p>
      )}

      {visible < filtered.length && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + 8)}
            className="h-11 rounded-lg border border-edge bg-surface px-6 text-sm font-semibold text-primary transition hover:border-edge-active"
          >
            Показать ещё
          </button>
        </div>
      )}
    </div>
  );
}
