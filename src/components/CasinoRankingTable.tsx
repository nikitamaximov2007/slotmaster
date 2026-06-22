import Link from 'next/link';
import { Zap } from 'lucide-react';
import type { Casino } from '@/types';
import { CasinoLogo } from './CasinoLogo';
import { RatingBadge } from './RatingBadge';
import { AffiliateButton } from './AffiliateButton';

function Row({ casino, rank }: { casino: Casino; rank: number }) {
  const isTop = rank === 1;
  return (
    <div
      className={`grid grid-cols-[34px_1fr_auto] items-center gap-x-4 gap-y-3 rounded-card border p-4 transition md:grid-cols-[44px_1.6fr_1.3fr_auto_auto] ${
        isTop
          ? 'border-gold/40 bg-gradient-to-r from-gold/[0.07] to-transparent'
          : 'border-edge bg-surface hover:border-edge-strong'
      }`}
    >
      <span className={`text-center font-display text-lg font-bold ${isTop ? 'text-gold' : 'text-muted'}`}>
        {rank}
      </span>

      <div className="min-w-0">
        <Link href={casino.reviewUrl} className="transition hover:opacity-90">
          <CasinoLogo name={casino.name} gradient={casino.logoGradient} slug={casino.slug} imageSrc={casino.logoImage} size="md" />
        </Link>
        {casino.tags.length > 0 && (
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {casino.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full border border-edge bg-background/50 px-2 py-0.5 text-[0.66rem] font-medium text-secondary"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-2 md:col-span-1">
        <p className="text-sm font-semibold text-gold">{casino.bonusTitle}</p>
        <p className="text-xs text-blue-bright">{casino.bonusDetails}</p>
        {casino.payoutValue && (
          <p className="mt-1 flex items-center gap-1 text-xs text-secondary">
            <Zap size={12} className="text-green" /> Выплаты: {casino.payoutValue}
          </p>
        )}
      </div>

      <div className="text-center">
        <RatingBadge rating={casino.rating} />
      </div>

      <div className="col-span-3 flex gap-2 md:col-span-1 md:flex-col md:items-stretch">
        <AffiliateButton
          href={casino.affiliateUrl}
          size="sm"
          variant={isTop ? 'gold' : 'blue'}
          ariaLabel={`Играть в ${casino.name}`}
        >
          Играть
        </AffiliateButton>
        <Link
          href={casino.reviewUrl}
          className="inline-flex h-10 items-center justify-center rounded-lg border border-edge px-4 text-sm font-semibold text-primary transition hover:border-edge-strong"
        >
          Обзор
        </Link>
      </div>
    </div>
  );
}

export function CasinoRankingTable({ casinos }: { casinos: Casino[] }) {
  return (
    <div className="flex flex-col gap-3">
      {casinos.map((c, i) => (
        <Row key={c.slug} casino={c} rank={i + 1} />
      ))}
    </div>
  );
}
