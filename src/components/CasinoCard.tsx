import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Casino } from '@/types';
import { CasinoLogo } from './CasinoLogo';
import { AffiliateButton } from './AffiliateButton';

// Compact ТОП-10 card. Equal height (flex column, button pinned to bottom).
export function CasinoCard({ casino, rank }: { casino: Casino; rank: number }) {
  const isTop = rank === 1;
  const badge = casino.bonusBadge ?? casino.tags[0];

  return (
    <article
      className={`relative flex h-full min-h-[250px] flex-col rounded-lg border bg-surface px-3.5 pb-3.5 pt-9 text-center shadow-card transition duration-200 hover:-translate-y-1 hover:bg-surface-hover ${
        isTop ? 'border-gold/45 glow-gold' : 'border-edge hover:border-edge-strong hover:glow-blue'
      }`}
    >
      {/* rank chip */}
      <span
        className={`absolute left-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full font-display text-[0.72rem] font-bold ${
          isTop ? 'bg-gradient-to-b from-[#ffd479] to-gold text-[#3a2a00]' : 'border border-edge bg-background text-muted'
        }`}
      >
        {rank}
      </span>

      {badge && (
        <span
          className={`absolute right-2.5 top-2.5 rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide ${
            isTop ? 'bg-gold/15 text-gold' : 'bg-purple/15 text-gold'
          }`}
        >
          {badge}
        </span>
      )}

      <Link href={casino.reviewUrl} className="mx-auto" aria-label={`Обзор ${casino.name}`}>
        <CasinoLogo name={casino.name} gradient={casino.logoGradient} slug={casino.slug} imageSrc={casino.logoImage} size="sm" layout="stack" />
      </Link>

      <div className="mt-2 flex items-center justify-center gap-1.5">
        <span className="flex gap-0.5 text-gold" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} className={i < Math.round(casino.rating / 2) ? 'fill-gold' : 'opacity-25'} />
          ))}
        </span>
        <span className="text-xs font-bold text-gold">{casino.rating.toFixed(1)}</span>
      </div>

      <p className="mt-2 text-[0.78rem] font-semibold leading-tight text-secondary">
        <span className="text-gold">{casino.bonusTitle}</span>
      </p>
      <p className="mt-0.5 text-[0.68rem] font-semibold text-blue-bright">{casino.bonusDetails}</p>

      <div className="mt-auto pt-3">
        <AffiliateButton href={casino.affiliateUrl} size="sm" block variant={isTop ? 'gold' : 'blue'} ariaLabel={`Играть в ${casino.name}`}>
          Играть
        </AffiliateButton>
        <Link
          href={casino.reviewUrl}
          className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-full border border-edge bg-background/35 text-xs font-semibold text-secondary transition hover:border-edge-active hover:text-primary"
        >
          Обзор
        </Link>
      </div>
    </article>
  );
}
