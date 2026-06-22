import Link from 'next/link';
import type { Slot } from '@/types';
import { SlotImage } from './SlotImage';

export function SlotCard({ slot, priority = false }: { slot: Slot; priority?: boolean }) {
  const href = slot.casinoSlug ? `/reviews/${slot.casinoSlug}` : '/casino/top';

  return (
    <article className="overflow-hidden rounded-card border border-edge bg-surface transition hover:-translate-y-0.5 hover:border-edge-strong">
      <div className="relative aspect-[16/10] overflow-hidden">
        <SlotImage src={slot.image} name={slot.name} priority={priority} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 to-transparent" />
        <span className="absolute left-2 top-2 rounded-md bg-background/80 px-2 py-1 text-[0.65rem] font-bold text-blue-bright">
          {slot.provider}
        </span>
      </div>
      <div className="p-3">
        <h3 className="truncate text-sm font-bold text-primary">{slot.name}</h3>
        <p className="mt-1 line-clamp-2 min-h-[2.25rem] text-xs leading-relaxed text-muted">{slot.description}</p>
        <Link href={href} className="mt-3 inline-flex text-xs font-bold text-blue-bright hover:text-blue">
          Где найти игру
        </Link>
      </div>
    </article>
  );
}
