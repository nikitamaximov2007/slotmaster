'use client';

import type { Bonus } from '@/types';
import { BonusCard } from './BonusCard';

export function BonusExplorer({ bonuses }: { bonuses: Bonus[] }) {
  const list = [...bonuses].sort((a, b) => a.priority - b.priority);

  return (
    <div>
      {list.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <BonusCard key={b.id} bonus={b} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-card border border-edge bg-surface p-6 text-sm text-secondary">
          В этой категории пока нет предложений.
        </p>
      )}
    </div>
  );
}
