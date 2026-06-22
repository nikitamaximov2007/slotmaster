import type { Casino } from '@/types';
import { CasinoLogo } from './CasinoLogo';
import { AffiliateButton } from './AffiliateButton';

// Static CTA card. Sticky behavior belongs to the whole review sidebar column.
export function ReviewSidebar({ casino }: { casino: Casino }) {
  return (
    <section
      aria-label={`Бонус ${casino.name}`}
      className="rounded-card border border-edge-active/60 bg-gradient-to-b from-blue/10 to-surface p-5 text-center"
    >
      <div className="mx-auto mb-3 w-fit">
        <CasinoLogo name={casino.name} gradient={casino.logoGradient} slug={casino.slug} imageSrc={casino.logoImage} size="lg" layout="stack" />
      </div>
      <p className="font-display text-3xl font-bold text-primary">
        {casino.rating.toFixed(1)}
        <span className="text-lg text-muted">/10</span>
      </p>
      <p className="mt-1 text-xs text-muted">Оценка редакции</p>

      <div className="my-4 rounded-lg border border-edge bg-background/40 p-3">
        <p className="font-display text-lg font-bold text-gold">{casino.bonusTitle}</p>
        <p className="text-sm text-blue-bright">{casino.bonusDetails}</p>
      </div>

      <AffiliateButton href={casino.affiliateUrl} block variant="gold" size="md" ariaLabel={`Получить бонус ${casino.name}`}>
        Получить бонус
      </AffiliateButton>

      <p className="mt-3 text-[0.7rem] text-muted">
        18+ · Партнёрская ссылка · Играйте ответственно
      </p>
    </section>
  );
}
