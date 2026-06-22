import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { CategoryTabs } from '@/components/CategoryTabs';
import { CasinoRankingTable } from '@/components/CasinoRankingTable';
import { casinos } from '@/data/casinos';
import { rankingCategories, getRankingCategory, rankedCasinos } from '@/data/rankings';
import { SITE } from '@/lib/site';

type Params = { category: string };
type PageProps = { params: Promise<Params> };

export function generateStaticParams() {
  return rankingCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getRankingCategory(category);
  if (!cat) return {};
  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    alternates: { canonical: `/casino/${cat.slug}` },
    openGraph: { title: cat.seoTitle, description: cat.seoDescription, url: `${SITE.url}/casino/${cat.slug}` },
  };
}

const tabs = [
  { slug: 'all', title: 'Все', href: '/casino' },
  ...rankingCategories.map((c) => ({ slug: c.slug, title: c.title, href: `/casino/${c.slug}` })),
];

export default async function RankingCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = getRankingCategory(category);
  if (!cat) notFound();

  const list = rankedCasinos(cat, casinos);

  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Рейтинги', href: '/casino' }, { label: cat.title }]} />
      <PageHeader title={cat.h1} intro={cat.description} />

      <div className="mt-6">
        <CategoryTabs tabs={tabs} activeHref={`/casino/${cat.slug}`} />
      </div>

      <div className="mt-6">
        {list.length > 0 ? (
          <CasinoRankingTable casinos={list} />
        ) : (
          <p className="rounded-card border border-edge bg-surface p-6 text-sm text-secondary">
            В этой категории пока нет казино. Загляните в{' '}
            <Link href="/casino" className="text-blue-bright underline">
              общий рейтинг
            </Link>
            .
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link href="/casino" className="text-blue-bright underline">Общий рейтинг</Link>
        <Link href="/reviews" className="text-blue-bright underline">Все обзоры</Link>
        <Link href="/bonuses" className="text-blue-bright underline">Бонусы</Link>
      </div>
    </div>
  );
}
