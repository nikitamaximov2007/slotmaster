import { Star } from 'lucide-react';

export function RatingBadge({
  rating,
  showStars = false,
  size = 'md',
}: {
  rating: number;
  showStars?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const tone =
    rating >= 9.4 ? 'text-green' : rating >= 8.8 ? 'text-blue-bright' : 'text-gold';
  const box =
    size === 'lg'
      ? 'text-2xl px-3 py-1'
      : size === 'sm'
        ? 'text-sm px-2 py-0.5'
        : 'text-base px-2.5 py-1';

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`inline-flex items-center rounded-md border border-edge bg-surface-elevated font-display font-bold ${tone} ${box}`}
      >
        {rating.toFixed(1)}
      </span>
      {showStars && (
        <span className="flex gap-0.5 text-gold" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.round(rating / 2) ? 'fill-gold' : 'opacity-25'}
            />
          ))}
        </span>
      )}
    </span>
  );
}
