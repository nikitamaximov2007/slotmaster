import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { JsonLd } from './JsonLd';
import { SITE } from '@/lib/site';

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: 'Главная', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE.url}${c.href === '/' ? '' : c.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-1.5 py-4 text-sm text-muted">
        {trail.map((c, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} className="text-muted/60" />}
            {c.href && i < trail.length - 1 ? (
              <Link href={c.href} className="transition hover:text-blue-bright">
                {c.label}
              </Link>
            ) : (
              <span className={i === trail.length - 1 ? 'text-secondary' : ''}>{c.label}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd data={schema} />
    </>
  );
}
