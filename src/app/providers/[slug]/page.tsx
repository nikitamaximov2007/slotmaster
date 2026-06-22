import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CasinoLogo } from '@/components/CasinoLogo';
import { CasinoRankingTable } from '@/components/CasinoRankingTable';
import { providers, getProviderBySlug } from '@/data/providers';
import { topCasinos } from '@/data/casinos';
import { SITE } from '@/lib/site';

type Params = { slug: string };
type PageProps = { params: Promise<Params> };

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getProviderBySlug(slug);
  if (!p) return {};
  const title = `${p.name}, слоты провайдера и где играть`;
  const description = `Обзор провайдера ${p.name}: популярные слоты, особенности игр и казино, где они доступны.`;
  return {
    title,
    description,
    alternates: { canonical: `/providers/${p.slug}` },
    openGraph: { title: `${p.name} | SlotMaster`, description, url: `${SITE.url}/providers/${p.slug}` },
  };
}

export default async function ProviderPage({ params }: PageProps) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  const relatedCasinos = topCasinos(5);

  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Провайдеры', href: '/providers' }, { label: provider.name }]} />

      <section className="flex flex-col gap-4 py-2 sm:flex-row sm:items-center">
        <CasinoLogo name={provider.name} gradient={provider.logoGradient} slug={provider.slug} size="xl" markOnly />
        <div>
          <h1 className="text-[1.7rem] font-extrabold tracking-tight text-primary sm:text-[2.1rem]">{provider.name}</h1>
          <p className="text-sm text-muted">{provider.gamesCount}</p>
        </div>
      </section>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="prose-article">
            <h2 className="text-xl font-bold">О провайдере</h2>
            <p>{provider.description}</p>
          </div>

          <section className="mt-6">
            <h2 className="mb-3 text-xl font-bold text-primary">Популярные слоты</h2>
            <div className="flex flex-wrap gap-2">
              {provider.popularSlots.map((s) => (
                <span key={s} className="rounded-lg border border-edge bg-surface px-3 py-2 text-sm text-secondary">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-xl font-bold text-primary">Где играть в слоты {provider.name}</h2>
            <CasinoRankingTable casinos={relatedCasinos} />
          </section>
        </div>

        <aside className="space-y-4">
          <div className="rounded-card border border-edge bg-surface p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Другие провайдеры</h2>
            <ul className="mt-3 space-y-1.5">
              {providers
                .filter((p) => p.slug !== provider.slug)
                .map((p) => (
                  <li key={p.slug}>
                    <Link href={`/providers/${p.slug}`} className="text-sm text-secondary transition hover:text-blue-bright">
                      {p.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
