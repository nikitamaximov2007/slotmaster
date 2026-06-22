'use client';

import { useMemo, useState } from 'react';
import type { Win } from '@/types';
import { WinCard } from './WinCard';

type AmountFilter = 'all' | '50' | '100' | '200';

const amountToNumber = (a: string) => Number(a.replace(/[^\d]/g, '')) || 0;

const amountLabels: Record<AmountFilter, string> = {
  all: 'Любая сумма',
  '50': 'от 50 000 ₽',
  '100': 'от 100 000 ₽',
  '200': 'от 200 000 ₽',
};

export function WinsExplorer({ wins }: { wins: Win[] }) {
  const providers = useMemo(() => ['Все провайдеры', ...Array.from(new Set(wins.map((w) => w.provider)))], [wins]);
  const casinos = useMemo(() => ['Все казино', ...Array.from(new Set(wins.map((w) => w.casinoName)))], [wins]);
  const [provider, setProvider] = useState('Все провайдеры');
  const [casino, setCasino] = useState('Все казино');
  const [amount, setAmount] = useState<AmountFilter>('all');
  const [sort, setSort] = useState<'recent' | 'amount'>('recent');

  const list = useMemo(() => {
    const minAmount = amount === 'all' ? 0 : Number(amount) * 1000;
    let l = wins.filter((w) => {
      const matchesProvider = provider === 'Все провайдеры' || w.provider === provider;
      const matchesCasino = casino === 'Все казино' || w.casinoName === casino;
      const matchesAmount = amountToNumber(w.amount) >= minAmount;
      return matchesProvider && matchesCasino && matchesAmount;
    });
    if (sort === 'amount') l = [...l].sort((a, b) => amountToNumber(b.amount) - amountToNumber(a.amount));
    return l;
  }, [wins, provider, casino, amount, sort]);

  return (
    <div>
      <div className="grid gap-3 rounded-card border border-edge bg-surface/70 p-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          Провайдер
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="mt-1 h-10 w-full rounded-lg border border-edge bg-background px-3 text-sm normal-case tracking-normal text-primary outline-none focus:border-edge-active"
          >
            {providers.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          Сумма
          <select
            value={amount}
            onChange={(e) => setAmount(e.target.value as AmountFilter)}
            className="mt-1 h-10 w-full rounded-lg border border-edge bg-background px-3 text-sm normal-case tracking-normal text-primary outline-none focus:border-edge-active"
          >
            {(Object.keys(amountLabels) as AmountFilter[]).map((key) => (
              <option key={key} value={key}>{amountLabels[key]}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          Казино
          <select
            value={casino}
            onChange={(e) => setCasino(e.target.value)}
            className="mt-1 h-10 w-full rounded-lg border border-edge bg-background px-3 text-sm normal-case tracking-normal text-primary outline-none focus:border-edge-active"
          >
            {casinos.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          Сортировка
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'recent' | 'amount')}
            className="mt-1 h-10 w-full rounded-lg border border-edge bg-background px-3 text-sm normal-case tracking-normal text-primary outline-none focus:border-edge-active"
          >
            <option value="recent">Сначала свежие</option>
            <option value="amount">По сумме</option>
          </select>
        </label>
      </div>

      {list.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((w) => (
            <WinCard key={w.id} win={w} variant="card" />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-card border border-edge bg-surface p-6 text-sm text-secondary">
          По выбранным фильтрам заносов нет.
        </p>
      )}
    </div>
  );
}
