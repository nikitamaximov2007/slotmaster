import Image from 'next/image';
import Link from 'next/link';
import type { Win } from '@/types';
import { SlotImage } from './SlotImage';

// Live-wins feed. Row variant (homepage) + card variant (wins page).
export function WinCard({ win, variant = 'row' }: { win: Win; variant?: 'row' | 'card' }) {
  if (variant === 'card') {
    return (
      <article className="overflow-hidden rounded-lg border border-edge bg-surface shadow-card transition hover:-translate-y-0.5 hover:border-edge-strong">
        <div className="relative aspect-video overflow-hidden bg-[#070b16]">
          <SlotImage
            src={win.slotImage}
            name={win.slot}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/86 via-surface/16 to-transparent" />
          <span className="absolute right-2 top-2 rounded-md bg-background/80 px-2 py-1 font-display text-sm font-bold text-green">
            {win.amount}
          </span>
        </div>
        <div className="p-3">
          <p className="truncate text-sm font-bold text-primary">{win.slot}</p>
          <p className="truncate text-xs text-muted">{win.provider} · {win.casinoName}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-muted">
            <span>{win.player}</span>
            <span>{win.date}</span>
          </div>
          <Link href={`/slots/${win.slotSlug}`} className="mt-3 inline-flex text-xs font-bold text-blue-bright hover:text-blue">
            Смотреть слот
          </Link>
        </div>
      </article>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-white/[0.03]">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-edge">
        <Image src={win.slotImage} alt={`Обложка слота ${win.slot}`} fill sizes="56px" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-primary">{win.slot}</p>
        <p className="truncate text-xs text-muted">{win.player} · {win.casinoName}</p>
      </div>
      <div className="shrink-0 text-right">
        <p className="font-display text-sm font-bold text-green">{win.amount}</p>
        <p className="text-[0.7rem] text-muted">{win.date}</p>
      </div>
    </div>
  );
}
