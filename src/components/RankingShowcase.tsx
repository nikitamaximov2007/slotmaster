import Link from 'next/link';
import Image from 'next/image';
import { Star, Crown, Check } from 'lucide-react';
import type { Casino } from '@/types';
import { CasinoLogo } from './CasinoLogo';
import { AffiliateButton } from './AffiliateButton';

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className={i < Math.round(rating / 2) ? 'fill-gold' : 'opacity-25'} />
      ))}
    </span>
  );
}

function BenefitPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold text-secondary backdrop-blur-md">
      <Check size={12} className="text-gold" />
      {label}
    </span>
  );
}

/* ---------- Featured: Dragon Money ---------- */
function FeaturedCard({ casino }: { casino: Casino }) {
  const benefits = [
    casino.payoutValue ? `Выплаты ${casino.payoutValue}` : casino.pros[0],
    'Сильный оффер',
    'Удобные платежи',
    'Большой каталог игр',
    'Поддержка 24/7',
  ].filter(Boolean);

  return (
    <article className="group relative min-h-[470px] overflow-hidden rounded-lg border border-gold/45 bg-[#070913] shadow-[0_0_0_1px_rgba(245,196,81,0.22),0_28px_76px_-32px_rgba(245,196,81,0.5)] lg:col-span-7 lg:row-span-2">
      <Image
        src="/assets/dm-assets/dm-money-pile.jpg"
        alt="Промо Dragon Money"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 720px"
        className="scale-[1.015] object-cover opacity-95 transition duration-700 group-hover:scale-[1.045]"
        style={{ objectPosition: '62% center' }}
      />
      <div className="pointer-events-none absolute -right-14 top-8 h-80 w-80 rounded-full bg-gold/28 blur-3xl" />
      <div className="pointer-events-none absolute right-14 bottom-10 h-56 w-64 rounded-full bg-purple/24 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,15,0.98)_0%,rgba(5,7,15,0.9)_36%,rgba(5,7,15,0.45)_66%,rgba(5,7,15,0.12)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,transparent_32%,rgba(0,0,0,0.34)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative z-10 flex h-full min-h-[470px] flex-col p-5 sm:p-7 lg:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-[#ffd479] to-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-[#3a2a00]">
            <Crown size={13} /> {casino.bonusBadge ?? 'Лучшее предложение'}
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full border border-gold/30 bg-gold/12 font-display text-xs font-bold text-gold">
            1
          </span>
        </div>

        <div className="mt-5">
          {casino.logoImage ? (
            <CasinoLogo
              name={casino.name}
              gradient={casino.logoGradient}
              slug={casino.slug}
              imageSrc={casino.logoImage}
              size="lg"
              markOnly
            />
          ) : (
            <p className="font-display text-2xl font-bold text-primary">{casino.name}</p>
          )}
          <p className="mt-3 font-display text-[1.7rem] font-bold leading-none text-primary">{casino.name}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Stars rating={casino.rating} />
            <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-sm font-bold text-gold">
              {casino.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="mt-7 max-w-full">
          <p className="whitespace-nowrap font-display text-[2.72rem] font-extrabold leading-none text-gold sm:text-[3.75rem] lg:text-[3.9rem]">{casino.bonusTitle}</p>
          <p className="mt-2 text-base font-bold text-primary sm:text-lg">{casino.bonusDetails}</p>
        </div>

        <div className="mt-5 flex max-w-[520px] flex-wrap gap-2">
          {benefits.map((benefit) => (
            <BenefitPill key={benefit} label={benefit} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          <AffiliateButton href={casino.affiliateUrl} variant="gold" size="md" ariaLabel={`Получить бонус ${casino.name}`}>
            Получить бонус
          </AffiliateButton>
          <Link
            href={casino.reviewUrl}
            className="inline-flex h-11 items-center rounded-full border border-white/12 bg-white/[0.05] px-5 text-sm font-semibold text-primary transition hover:border-gold/40 hover:bg-white/[0.08]"
          >
            Обзор
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Medium: Volna / Cosmo ---------- */
function MediumCard({ casino, rank }: { casino: Casino; rank: number }) {
  const benefits = casino.pros.slice(0, 2);

  return (
    <article className="group relative min-h-[226px] overflow-hidden rounded-lg border border-edge bg-[#0b1020] transition hover:-translate-y-0.5 hover:border-edge-strong hover:shadow-[0_20px_54px_-34px_rgba(168,85,247,0.72)] lg:col-span-5">
      <span className={`pointer-events-none absolute -right-24 top-4 h-12 w-[72%] rotate-[-12deg] rounded-full ${casino.logoGradient} opacity-60 blur-2xl transition group-hover:opacity-70`} />
      <span className={`pointer-events-none absolute -right-16 bottom-8 h-10 w-[62%] rotate-[10deg] rounded-full ${casino.logoGradient} opacity-45 blur-2xl transition group-hover:opacity-55`} />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%,rgba(0,0,0,0.28))]" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <CasinoLogo name={casino.name} gradient={casino.logoGradient} slug={casino.slug} imageSrc={casino.logoImage} size="sm" />
          <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-background/70 font-display text-xs font-bold text-primary">{rank}</span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Stars rating={casino.rating} />
          <span className="text-xs font-bold text-gold">{casino.rating.toFixed(1)}</span>
        </div>
        <div className="mt-3">
          <span className="font-display text-3xl font-extrabold text-gold">{casino.bonusTitle}</span>
          <span className="ml-1.5 text-xs font-semibold text-blue-bright">{casino.bonusDetails}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {benefits.map((benefit) => (
            <BenefitPill key={benefit} label={benefit} />
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-4">
          <AffiliateButton href={casino.affiliateUrl} size="sm" variant="blue" ariaLabel={`Получить бонус ${casino.name}`}>
            Получить бонус
          </AffiliateButton>
          <Link href={casino.reviewUrl} className="text-xs font-semibold text-secondary transition hover:text-blue-bright">
            Обзор
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Compact: ranks 4..10 ---------- */
function CompactCard({ casino, rank }: { casino: Casino; rank: number }) {
  return (
    <article className="relative flex min-h-[238px] flex-col overflow-hidden rounded-lg border border-edge bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.016)),#0b1020] px-3 pb-3 pt-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition duration-200 hover:-translate-y-1 hover:border-edge-strong hover:shadow-[0_18px_42px_-32px_rgba(168,85,247,0.72)]">
      <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
      <span className="absolute left-2 top-2 grid h-5 w-5 place-items-center rounded-full border border-edge bg-background font-display text-[0.66rem] font-bold text-muted">
        {rank}
      </span>
      <Link href={casino.reviewUrl} className="mx-auto" aria-label={`Обзор ${casino.name}`}>
        <CasinoLogo name={casino.name} gradient={casino.logoGradient} slug={casino.slug} imageSrc={casino.logoImage} size="sm" layout="stack" />
      </Link>
      <div className="mt-2 flex items-center justify-center gap-1">
        <Stars rating={casino.rating} />
        <span className="text-[0.7rem] font-bold text-gold">{casino.rating.toFixed(1)}</span>
      </div>
      <p className="mt-1.5 font-display text-base font-bold text-gold">{casino.bonusTitle}</p>
      <p className="text-[0.64rem] font-semibold text-blue-bright">{casino.bonusDetails}</p>
      <div className="mt-auto pt-3">
        <AffiliateButton href={casino.affiliateUrl} size="sm" block variant="blue" ariaLabel={`Играть в ${casino.name}`}>
          Играть
        </AffiliateButton>
        <Link
          href={casino.reviewUrl}
          className="mt-1.5 block text-[0.68rem] font-semibold text-muted transition hover:text-blue-bright"
        >
          Обзор
        </Link>
      </div>
    </article>
  );
}

export function RankingShowcase({ casinos }: { casinos: Casino[] }) {
  const featured = casinos[0];
  const medium = casinos.slice(1, 3);
  const compact = casinos.slice(3, 10);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2">
        {featured && <FeaturedCard casino={featured} />}
        {medium.map((c, i) => (
          <MediumCard key={c.slug} casino={c} rank={i + 2} />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {compact.map((c, i) => (
          <CompactCard key={c.slug} casino={c} rank={i + 4} />
        ))}
      </div>
    </div>
  );
}
