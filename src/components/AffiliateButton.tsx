import { ExternalLink } from 'lucide-react';
import { affiliateLinkProps } from '@/lib/affiliate';

type Variant = 'blue' | 'gold' | 'ghost';
type Size = 'sm' | 'md';

const variants: Record<Variant, string> = {
  blue: 'bg-gradient-to-b from-purple to-blue text-white hover:brightness-110 shadow-[0_12px_26px_rgba(168,85,247,0.26)]',
  gold: 'bg-gradient-to-b from-[#ffe59b] via-gold to-[#c9941e] text-[#2b1b00] font-bold hover:brightness-105 shadow-[0_12px_26px_rgba(245,196,81,0.32)]',
  ghost: 'border border-edge bg-white/[0.04] text-primary hover:border-edge-active hover:bg-white/[0.07]',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
};

// Outbound partner CTA, always carries rel="nofollow sponsored noopener noreferrer".
export function AffiliateButton({
  href,
  children,
  variant = 'blue',
  size = 'md',
  block = false,
  showIcon = false,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  showIcon?: boolean;
  ariaLabel?: string;
}) {
  return (
    <a
      {...affiliateLinkProps(href)}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ${variants[variant]} ${sizes[size]} ${block ? 'w-full' : ''}`}
    >
      {children}
      {showIcon && <ExternalLink size={15} aria-hidden="true" />}
    </a>
  );
}
