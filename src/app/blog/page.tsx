import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { BlogExplorer } from '@/components/BlogExplorer';
import { articles, featuredArticle, articleCategories } from '@/data/articles';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Блог о казино и слотах 2026, гайды и разборы',
  description:
    'Блог SlotMaster: как вывести деньги, казино с быстрыми выплатами, лучшие слоты 2026, RTP и волатильность, бонусы и ответственная игра. Полезные гайды без обещаний выигрыша.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Блог о казино и слотах 2026 | SlotMaster',
    description: 'Гайды по выплатам, бонусам, слотам и безопасной игре.',
    url: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  const featured = featuredArticle();
  const rest = articles.filter((a) => a.slug !== featured.slug);
  const popular = rest.slice(0, 5);

  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Блог' }]} />
      <PageHeader
        eyebrow={`${articles.length} материалов`}
        title="Блог о казино и слотах"
        intro="Честные гайды без обещаний лёгких денег. Разбираем выводы, бонусы, RTP, волатильность и безопасную игру, то, что действительно полезно игрокам."
      />

      {/* Featured */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group relative mt-6 block min-h-[300px] overflow-hidden rounded-card border border-edge bg-surface transition hover:border-edge-active sm:min-h-[330px]"
      >
        <Image
          src={featured.image}
          alt={featured.title}
          fill
          priority
          sizes="100vw"
          className="pointer-events-none scale-[1.02] object-cover object-[58%_center] opacity-100 brightness-[1.14] saturate-[1.18] transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(11,16,32,0.97)_0%,rgba(11,16,32,0.9)_32%,rgba(11,16,32,0.66)_50%,rgba(11,16,32,0.28)_72%,rgba(11,16,32,0.04)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_50%,rgba(45,109,178,0.14)_0%,rgba(45,109,178,0.04)_28%,transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,15,0.02)_0%,rgba(5,7,15,0.36)_100%)]" />
        <div className="relative z-10 flex min-h-[300px] max-w-2xl flex-col justify-center p-6 sm:min-h-[330px] sm:p-8">
          <span className="mb-3 w-fit rounded-full bg-blue/20 px-3 py-1 text-xs font-bold text-blue-bright backdrop-blur-md">
            Рекомендуем
          </span>
          <h2 className="text-xl font-bold leading-snug text-primary sm:text-3xl">{featured.h1}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-secondary">{featured.excerpt}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted">
            <span>{featured.category}</span>
            <span className="h-0.5 w-0.5 rounded-full bg-muted" />
            <span>{featured.date}</span>
            <span className="h-0.5 w-0.5 rounded-full bg-muted" />
            <span className="flex items-center gap-1"><Clock size={12} /> {featured.readingMinutes} мин</span>
          </div>
        </div>
      </Link>

      <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <BlogExplorer articles={rest} categories={articleCategories} />

        <aside className="min-w-0 space-y-5">
          <div className="rounded-card border border-edge bg-surface p-5 lg:sticky lg:top-[88px]">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Популярное</h2>
            <ul className="space-y-3">
              {popular.map((a, i) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} className="group flex gap-3">
                    <span className="font-display text-lg font-bold text-blue-bright/70">{i + 1}</span>
                    <div>
                      <p className="text-sm font-semibold leading-snug text-primary transition group-hover:text-blue-bright">
                        {a.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">{a.category} · {a.readingMinutes} мин</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* SEO text */}
      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-bold text-primary">Полезные материалы об онлайн-казино</h2>
        <p className="mt-3 text-sm leading-relaxed text-secondary">
          В блоге SlotMaster мы разбираем практические темы: как вывести выигрыш, как читать правила бонусов, что
          такое RTP и волатильность, как выбирать слоты и играть ответственно. Материалы рассчитаны на новичков и
          опытных игроков и объясняют не только возможности, но и риски.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-secondary">
          Мы не публикуем «рабочих схем» и не обещаем гарантированного выигрыша, азартные игры всегда связаны с
          риском потери средств. Перед регистрацией в любом казино проверяйте ключевые условия на официальном сайте и
          сверяйтесь с нашим{' '}
          <Link href="/casino" className="text-blue-bright underline">рейтингом</Link>.
        </p>
      </section>
    </div>
  );
}
