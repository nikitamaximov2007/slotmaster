import Image from 'next/image';
import {
  Flame,
  Sparkles,
  Waves,
  Orbit,
  Dices,
  Cherry,
  Clover,
  PartyPopper,
  Ghost,
  Anchor,
  Sun,
  Zap,
  RotateCw,
  Crown,
  Gem,
  Gamepad2,
  Play,
  Swords,
  Building2,
  Spade,
  type LucideIcon,
} from 'lucide-react';

// Per-brand mark. If a real logo file is supplied (logoImage) it is used;
// otherwise each casino gets its own thematic icon on its brand gradient.
const brandIcon: Record<string, LucideIcon> = {
  'dragon-money': Flame,
  aurora: Sparkles,
  volna: Waves,
  cosmo: Orbit,
  r7: Dices,
  '1xslots': Cherry,
  'play-fortuna': Clover,
  'joy-casino': PartyPopper,
  booi: Ghost,
  admiral: Anchor,
  'sol-casino': Sun,
  riobet: Zap,
  jvspin: RotateCw,
  champion: Crown,
  gama: Gem,
  // providers
  'pragmatic-play': Gamepad2,
  netent: Sparkles,
  'playn-go': Play,
  'hacksaw-gaming': Swords,
  'nolimit-city': Building2,
  evolution: Spade,
};

type Size = 'sm' | 'md' | 'lg' | 'xl';

const glyphBox: Record<Size, string> = {
  sm: 'h-8 w-8 rounded-lg',
  md: 'h-10 w-10 rounded-xl',
  lg: 'h-12 w-12 rounded-xl',
  xl: 'h-16 w-16 rounded-2xl',
};

const glyphIcon: Record<Size, number> = { sm: 16, md: 19, lg: 23, xl: 31 };

const nameSize: Record<Size, string> = {
  sm: 'text-[0.82rem]',
  md: 'text-[0.95rem]',
  lg: 'text-lg',
  xl: 'text-2xl',
};

const imgPx: Record<Size, number> = { sm: 32, md: 40, lg: 48, xl: 64 };

function Glyph({
  gradient,
  size,
  slug,
  imageSrc,
  name,
}: {
  gradient: string;
  size: Size;
  slug?: string;
  imageSrc?: string;
  name: string;
}) {
  if (imageSrc) {
    return (
      <span className={`relative block shrink-0 overflow-hidden bg-[#0b1020] ring-1 ring-white/10 ${glyphBox[size]}`}>
        <Image src={imageSrc} alt={`Логотип ${name}`} fill sizes={`${imgPx[size]}px`} className="object-contain p-1.5" />
      </span>
    );
  }
  const Icon = (slug && brandIcon[slug]) || Sparkles;
  return (
    <span
      className={`relative grid shrink-0 place-items-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] ${gradient} ${glyphBox[size]}`}
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.32),transparent_55%)]" />
      <Icon size={glyphIcon[size]} strokeWidth={2.2} className="relative" />
    </span>
  );
}

export function CasinoLogo({
  name,
  gradient,
  slug,
  imageSrc,
  size = 'md',
  layout = 'inline',
  markOnly = false,
}: {
  name: string;
  gradient: string;
  slug?: string;
  imageSrc?: string;
  size?: Size;
  layout?: 'inline' | 'stack';
  markOnly?: boolean;
}) {
  const glyph = <Glyph gradient={gradient} size={size} slug={slug} imageSrc={imageSrc} name={name} />;

  if (markOnly) return glyph;

  if (layout === 'stack') {
    return (
      <span className="flex flex-col items-center gap-2 text-center">
        {glyph}
        <span className={`font-display font-bold leading-tight tracking-tight text-primary ${nameSize[size]}`}>
          {name}
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      {glyph}
      <span className={`font-display font-bold leading-none tracking-tight text-primary ${nameSize[size]}`}>
        {name}
      </span>
    </span>
  );
}
