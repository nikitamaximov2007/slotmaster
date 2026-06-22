import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Logo({ withTagline = true }: { withTagline?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name}, на главную`}>
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-gold/35 bg-gradient-to-br from-[#ffe59b] via-gold to-purple shadow-[0_12px_28px_rgba(245,196,81,0.22),inset_0_1px_0_rgba(255,255,255,0.36)]">
        <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.36),transparent_42%)]" />
        <svg viewBox="0 0 28 28" width="22" height="22" fill="none" className="relative" aria-hidden="true">
          <path
            d="M19.4 7.5c-1.1-.8-2.8-1.3-5-1.3-3.8 0-6.4 1.5-6.4 4.1 0 2.2 1.8 3.1 5.5 3.6 2.5.3 3.5.7 3.5 1.7 0 1.1-1.2 1.7-3.4 1.7-2.1 0-4-.6-5.5-1.7l-2 3.2c1.7 1.4 4.3 2.2 7.3 2.2 4.2 0 7.1-1.7 7.1-4.5 0-2.3-1.8-3.3-5.8-3.8-2.4-.3-3.2-.7-3.2-1.6 0-.9 1-1.5 2.9-1.5 1.8 0 3.1.4 4.3 1.2l.7-3.3Z"
            fill="white"
          />
          <path d="M21.8 6.9 18.4 21h3.3l3.4-14.1h-3.3Z" fill="#2b1b00" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[1.2rem] font-bold text-primary">
          Slot<span className="text-gold">Master</span>
        </span>
        {withTagline && (
          <span className="hidden text-[0.66rem] text-muted sm:block">{SITE.tagline}</span>
        )}
      </span>
    </Link>
  );
}
