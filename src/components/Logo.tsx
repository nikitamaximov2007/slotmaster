import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Logo({ withTagline = true }: { withTagline?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name}, на главную`}>
      <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-lg shadow-[0_12px_28px_rgba(245,196,81,0.16)] ring-1 ring-white/[0.14]">
        <Image
          src="/assets/logos/slotmaster-logo.png"
          alt=""
          fill
          sizes="40px"
          className="scale-[1.28] object-cover"
          aria-hidden="true"
        />
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),inset_0_0_0_3px_rgba(5,7,15,0.56)]" />
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
