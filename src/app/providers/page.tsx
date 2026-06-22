import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { CasinoLogo } from '@/components/CasinoLogo';
import { providers } from '@/data/providers';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Провайдеры слотов, каталог студий и игр',
  description:
    'Каталог провайдеров слотов: Pragmatic Play, NetEnt, Play’n GO, Hacksaw Gaming и другие. Популярные игры и краткое описание студий.',
  alternates: { canonical: '/providers' },
  openGraph: {
    title: 'Провайдеры слотов, каталог | SlotMaster',
    description: 'Студии-разработчики слотов и их популярные игры.',
    url: `${SITE.url}/providers`,
  },
};

export default function ProvidersPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Провайдеры' }]} />
      <PageHeader
        eyebrow={`${providers.length} студий`}
        title="Провайдеры слотов"
        intro="Студии-разработчики определяют, как выглядят и работают игры в казино. Здесь собраны популярные провайдеры с краткими описаниями и их известными слотами."
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {providers.map((p) => (
          <article key={p.slug} className="flex flex-col rounded-card border border-edge bg-surface p-5 transition hover:border-edge-active">
            <div className="flex items-center gap-3">
              <CasinoLogo name={p.name} gradient={p.logoGradient} slug={p.slug} size="md" markOnly />
              <div>
                <h2 className="font-bold text-primary">{p.name}</h2>
                <p className="text-xs text-muted">{p.gamesCount}</p>
              </div>
            </div>
            <p className="mt-3 flex-1 text-sm text-secondary line-clamp-3">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.popularSlots.slice(0, 3).map((s) => (
                <span key={s} className="rounded-full border border-edge bg-background/40 px-2.5 py-1 text-xs text-secondary">
                  {s}
                </span>
              ))}
            </div>
            <Link
              href={`/providers/${p.slug}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-bright transition hover:gap-2.5"
            >
              Подробнее <ArrowRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
