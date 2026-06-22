import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, CalendarDays } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContentSections } from '@/components/ContentSections';
import { TableOfContents } from '@/components/TableOfContents';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ArticleCard } from '@/components/ArticleCard';
import { CasinoRankingTable } from '@/components/CasinoRankingTable';
import { JsonLd } from '@/components/JsonLd';
import { articles, getArticleBySlug, relatedArticles } from '@/data/articles';
import { topCasinos } from '@/data/casinos';
import { SITE } from '@/lib/site';

type Params = { slug: string };
type PageProps = { params: Promise<Params> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return {};
  return {
    title: a.seoTitle,
    description: a.seoDescription,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: 'article',
      title: a.seoTitle,
      description: a.seoDescription,
      url: `${SITE.url}/blog/${a.slug}`,
      images: [a.image],
      publishedTime: a.date,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = relatedArticles(article.slug, 3);
  const relevantCasinos = topCasinos(3);
  const toc = (article.body ?? []).map((s) => ({ id: s.id, label: s.heading }));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    image: `${SITE.url}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: {
      '@type': 'Organization',
      name: `${SITE.name}.ru`,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/assets/slotmaster/hero.png` },
    },
    mainEntityOfPage: `${SITE.url}/blog/${article.slug}`,
  };

  return (
    <div className="container-site pb-16">
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[{ label: 'Блог', href: '/blog' }, { label: article.title }]} />

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <article>
          <header className="relative isolate min-w-0 overflow-hidden rounded-[22px] border border-white/10 bg-surface px-5 py-8 shadow-[0_28px_86px_-58px_rgba(168,85,247,0.45)] sm:px-8 lg:px-10 lg:py-10">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="pointer-events-none object-cover opacity-95 saturate-[1.16]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,15,0.96)_0%,rgba(5,7,15,0.78)_40%,rgba(5,7,15,0.24)_70%,rgba(5,7,15,0.04)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(168,85,247,0.16),transparent_34%),linear-gradient(180deg,rgba(5,7,15,0)_0%,rgba(5,7,15,0.34)_100%)]" />
            <div className="relative z-10 min-w-0 max-w-3xl py-4 lg:py-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-bright">{article.category}</span>
              <h1 className="mt-2 break-words text-[1.8rem] font-extrabold leading-tight tracking-tight text-primary sm:text-[2.3rem]">
                {article.h1}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5"><User size={14} /> {article.author}</span>
                <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readingMinutes} мин чтения</span>
              </div>
            </div>
          </header>

          {/* mobile TOC */}
          {toc.length > 1 && (
            <div className="mt-6 lg:hidden">
              <TableOfContents items={toc} />
            </div>
          )}

          <div className="mt-6">
            {article.body?.length ? <ContentSections sections={article.body} /> : null}
          </div>

          {article.faq?.length ? (
            <section aria-labelledby="faq" className="mt-8">
              <h2 id="faq" className="mb-4 text-xl font-bold text-primary">Частые вопросы</h2>
              <FAQAccordion items={article.faq} />
              <JsonLd
                data={{
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: article.faq.map((f) => ({
                    '@type': 'Question',
                    name: f.question,
                    acceptedAnswer: { '@type': 'Answer', text: f.answer },
                  })),
                }}
              />
            </section>
          ) : null}

          {/* Relevant casinos */}
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-primary">Где играть: топ казино</h2>
            <CasinoRankingTable casinos={relevantCasinos} />
          </section>

          {/* Related articles */}
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-primary">Похожие статьи</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-5">
          {toc.length > 1 && (
            <div className="hidden lg:block lg:sticky lg:top-[88px]">
              <TableOfContents items={toc} />
            </div>
          )}
          <div className="rounded-card border border-edge bg-surface p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Читайте также</h2>
            <ul className="mt-3 space-y-2">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} className="text-sm text-secondary transition hover:text-blue-bright">
                    {a.title}
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
