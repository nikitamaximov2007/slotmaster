import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Bonus } from '@/types';
import { CasinoLogo } from './CasinoLogo';
import { AffiliateButton } from './AffiliateButton';

export function BonusCard({ bonus, showRulesLink = true }: { bonus: Bonus; showRulesLink?: boolean }) {
  const isFeatured = Boolean(bonus.featured);

  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-lg border shadow-card transition hover:-translate-y-0.5 hover:border-edge-strong ${
        isFeatured
          ? 'border-gold/55 bg-[radial-gradient(circle_at_80%_0%,rgba(245,196,81,0.15),transparent_32%),linear-gradient(145deg,#12101c,#0b1020_62%)] shadow-[0_18px_44px_-26px_rgba(245,196,81,0.72)]'
          : 'border-edge bg-surface'
      }`}
    >
      {bonus.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-gold px-3 py-1 text-[0.66rem] font-black uppercase tracking-wide text-[#271900]">
          {bonus.badge}
        </span>
      )}

      <div className="relative aspect-[16/8] overflow-hidden">
        <Image
          src={bonus.cover}
          alt={`Бонус ${bonus.casinoName}`}
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        <div className="absolute bottom-2 left-3">
          <CasinoLogo
            name={bonus.casinoName}
            gradient={bonus.logoGradient}
            slug={bonus.casinoSlug}
            imageSrc={bonus.logoImage}
            size="sm"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className={`font-display font-black leading-none text-gold ${isFeatured ? 'text-3xl' : 'text-2xl'}`}>
          {bonus.amount}
        </p>
        <p className="mt-1 text-sm font-semibold text-blue-bright">{bonus.label}</p>

        <div className="mt-auto flex items-center gap-3 pt-5">
          <AffiliateButton
            href={bonus.affiliateUrl}
            variant={isFeatured ? 'gold' : 'blue'}
            block={!showRulesLink}
            ariaLabel={`Получить бонус ${bonus.casinoName}`}
          >
            Получить бонус
          </AffiliateButton>
          {showRulesLink && (
            <Link
              href={bonus.rulesUrl}
              className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-blue-bright transition hover:text-blue"
            >
              Правила акции
              <ArrowUpRight size={13} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
