import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Casino } from '@/types';
import { AffiliateButton } from './AffiliateButton';

// Two-image Dragon Money promo: large money-pile banner + cashback side card.
export function DragonPromo({ casino }: { casino: Casino }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.55fr_1.05fr]">
      {/* main banner */}
      <article className="relative min-h-[320px] overflow-hidden rounded-lg border border-gold/35 bg-[#090d18] shadow-[0_26px_74px_-36px_rgba(245,196,81,0.5)]">
        <Image
          src="/assets/dm-assets/dm-money-pile.jpg"
          alt="Dragon Money, лидер рейтинга"
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          className="scale-[1.02] object-cover transition duration-700 hover:scale-[1.045]"
          style={{ objectPosition: '58% center' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,15,0.98)_0%,rgba(5,7,15,0.92)_38%,rgba(5,7,15,0.48)_68%,rgba(5,7,15,0.14)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(245,196,81,0.18),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(168,85,247,0.18),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="relative flex min-h-[320px] max-w-md flex-col justify-center p-6 sm:p-8">
          <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
            Выбор редакции
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
            {casino.name}, лидер рейтинга 2026
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Самый сильный оффер подборки:{' '}
            <span className="font-bold text-gold">{casino.bonusTitle} {casino.bonusDetails}</span>. Быстрая касса,
            удобные платежи и плотный каталог игр.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <AffiliateButton href={casino.affiliateUrl} variant="gold" size="md" ariaLabel={`Получить бонус ${casino.name}`}>
              Получить бонус
            </AffiliateButton>
            <Link
              href={casino.reviewUrl}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-edge bg-white/[0.04] px-5 text-sm font-semibold text-primary transition hover:border-edge-strong hover:bg-white/[0.07]"
            >
              Читать обзор
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>

      {/* cashback side card */}
      <article className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-lg border border-purple/35 bg-[#120b18] shadow-[0_24px_70px_-42px_rgba(168,85,247,0.6)]">
        <Image
          src="/assets/dm-assets/dm-cashback.jpg"
          alt="Dragon Money, кэшбэк 10% каждое воскресенье"
          fill
          sizes="(max-width: 1024px) 100vw, 420px"
          className="object-cover"
          style={{ objectPosition: 'left center' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_62%,rgba(5,7,15,0.18)_100%)]" />
        <div className="absolute bottom-[17%] left-[6.5%] z-10">
          <AffiliateButton href={casino.affiliateUrl} variant="gold" size="sm" ariaLabel="Забрать кэшбэк Dragon Money">
            Забрать кэшбэк
          </AffiliateButton>
        </div>
      </article>
    </div>
  );
}
