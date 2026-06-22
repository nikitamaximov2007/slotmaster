import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SectionHeading({
  title,
  eyebrow,
  description,
  moreHref,
  moreLabel = 'Смотреть всё',
  as = 'h2',
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  moreHref?: string;
  moreLabel?: string;
  as?: 'h2' | 'h3';
}) {
  const Tag = as;
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        {eyebrow && (
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-blue-bright">
            {eyebrow}
          </span>
        )}
        <Tag className="text-xl font-bold tracking-tight text-primary sm:text-2xl">{title}</Tag>
        {description && <p className="mt-1.5 max-w-2xl text-sm text-secondary">{description}</p>}
      </div>
      {moreHref && (
        <Link
          href={moreHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-bright transition hover:gap-2.5"
        >
          {moreLabel}
          <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}
