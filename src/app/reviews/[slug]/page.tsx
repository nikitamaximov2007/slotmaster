import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, ShieldCheck, Zap, Headphones, Gamepad2 } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CasinoLogo } from '@/components/CasinoLogo';
import { AffiliateButton } from '@/components/AffiliateButton';
import { ReviewSidebar } from '@/components/ReviewSidebar';
import { TableOfContents } from '@/components/TableOfContents';
import { ProsCons } from '@/components/ProsCons';
import { ContentSections } from '@/components/ContentSections';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CasinoCard } from '@/components/CasinoCard';
import { JsonLd } from '@/components/JsonLd';
import { casinos, getCasinoBySlug, relatedCasinos } from '@/data/casinos';
import { generatedImages } from '@/data/images';
import type { FaqItem } from '@/types';
import { SITE } from '@/lib/site';

type Params = { slug: string };
type PageProps = { params: Promise<Params> };

export function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) return {};
  const title = casino.seoTitle ?? `Обзор казино ${casino.name} 2026`;
  const description = casino.seoDescription ?? casino.intro;
  return {
    title,
    description,
    alternates: { canonical: casino.reviewUrl },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${SITE.url}${casino.reviewUrl}`,
      images: [casino.slug === 'dragon-money' ? generatedImages.dragonReview : '/assets/slotmaster/hero-dragon.png'],
    },
  };
}

// Generate unique, data-driven FAQ for template reviews (not boilerplate).
function buildFaq(name: string, bonus: string, details: string, payout: string | undefined, tags: string[]): FaqItem[] {
  return [
    {
      question: `Какой приветственный бонус в ${name}?`,
      answer: `${name} предлагает ${bonus} ${details}. Правила акции открываются на сайте казино перед активацией.`,
    },
    {
      question: `Как быстро ${name} выводит выигрыш?`,
      answer: payout
        ? `Ориентир по выводу: ${payout}. Реальные сроки зависят от метода, лимитов и статуса профиля.`
        : `Сроки вывода зависят от выбранного метода, лимитов и статуса профиля.`,
    },
    {
      question: `Чем выделяется ${name}?`,
      answer: tags.length
        ? `Среди особенностей по нашей оценке: ${tags.join(', ').toLowerCase()}.`
        : `${name}, сбалансированный проект без ярко выраженного перекоса. Подробности, в разделах обзора выше.`,
    },
  ];
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) notFound();

  const full = Boolean(casino.hasFullReview && casino.reviewSections?.length);
  const related = relatedCasinos(casino.slug, 4);
  const faq = casino.faq ?? buildFaq(casino.name, casino.bonusTitle, casino.bonusDetails, casino.payoutValue, casino.tags);
  const reviewHeroImage = casino.slug === 'dragon-money' ? generatedImages.dragonReview : '/assets/slotmaster/hero-dragon.png';

  const tocItems = [
    ...(casino.specs?.length ? [{ id: 'specs', label: 'Характеристики' }] : []),
    ...(casino.scores?.length ? [{ id: 'scores', label: 'Оценки по критериям' }] : []),
    { id: 'pros-cons', label: 'Плюсы и минусы' },
    ...(casino.reviewSections ?? []).map((s) => ({ id: s.id, label: s.heading })),
    ...(casino.popularSlots?.length ? [{ id: 'slots', label: 'Популярные слоты' }] : []),
    { id: 'faq', label: 'Частые вопросы' },
  ];

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Organization', name: `${casino.name} Casino` },
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: `${SITE.name}.ru` },
    datePublished: '2026-06-18',
    reviewRating: { '@type': 'Rating', ratingValue: casino.rating.toFixed(1), bestRating: '10', worstRating: '1' },
    reviewBody: casino.intro,
  };

  return (
    <div className="container-site pb-16">
      <JsonLd data={reviewSchema} />
      <Breadcrumbs items={[{ label: 'Обзоры', href: '/reviews' }, { label: casino.name }]} />

      {/* Identity hero */}
      <section className="relative isolate mt-2 min-w-0 overflow-hidden rounded-[22px] border border-white/10 bg-surface px-5 py-8 shadow-[0_28px_86px_-58px_rgba(245,196,81,0.42)] sm:px-8 lg:px-10 lg:py-10">
        <Image
          src={reviewHeroImage}
          alt={`Фоновая иллюстрация к обзору ${casino.name}`}
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover opacity-100 saturate-[1.18]"
          style={{ objectPosition: casino.slug === 'dragon-money' ? 'right center' : 'center' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,15,0.96)_0%,rgba(5,7,15,0.78)_34%,rgba(5,7,15,0.24)_64%,rgba(5,7,15,0.02)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.16),transparent_34%),linear-gradient(180deg,rgba(5,7,15,0)_0%,rgba(5,7,15,0.32)_100%)]" />

        <div className="relative z-10 min-w-0 max-w-[760px] py-8 lg:py-12">
          <div className="flex min-w-0 items-center gap-4">
            <CasinoLogo name={casino.name} gradient={casino.logoGradient} slug={casino.slug} imageSrc={casino.logoImage} size="xl" markOnly />
            <div className="min-w-0">
              {casino.isFeatured && (
                <span className="mb-1.5 inline-block rounded-full bg-gradient-to-b from-[#ffd479] to-gold px-3 py-1 text-xs font-bold text-[#3a2a00]">
                  Выбор редакции · №1
                </span>
              )}
              <h1 className="break-words text-[1.8rem] font-extrabold tracking-tight text-primary sm:text-[2.6rem]">
                Обзор {casino.name}
              </h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-secondary">
                <BadgeCheck size={15} className="text-green" /> Независимый обзор редакции SlotMaster
              </p>
            </div>
          </div>

          <div className="mt-5 flex min-w-0 flex-col items-start gap-2 rounded-card border border-white/10 bg-background/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:flex-row sm:items-center sm:gap-4">
            <span className="font-display text-4xl font-bold text-primary">
              {casino.rating.toFixed(1)}
              <span className="text-lg text-muted">/10</span>
            </span>
            <div>
              <p className="text-sm font-semibold text-primary">Оценка SlotMaster</p>
              <p className="text-sm text-secondary">
                Бонус: <span className="font-semibold text-gold">{casino.bonusTitle}</span> {casino.bonusDetails}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <AffiliateButton href={casino.affiliateUrl} variant="gold" size="md" ariaLabel={`Получить бонус ${casino.name}`}>
              Получить бонус
            </AffiliateButton>
            <Link
              href="#pros-cons"
              className="inline-flex h-11 items-center rounded-lg border border-white/12 bg-background/45 px-5 text-sm font-semibold text-primary backdrop-blur-md transition hover:border-edge-strong"
            >
              Читать обзор
            </Link>
          </div>
        </div>

        {full && (
          <div className="relative z-10 mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex min-w-0 items-center gap-3 rounded-card border border-white/10 bg-background/55 p-3 backdrop-blur-md">
              <Zap size={18} className="text-green" />
              <div><p className="text-sm font-bold text-primary">{casino.payoutValue ?? '-'}</p><p className="text-xs text-muted">Срок вывода</p></div>
            </div>
            <div className="flex min-w-0 items-center gap-3 rounded-card border border-white/10 bg-background/55 p-3 backdrop-blur-md">
              <Gamepad2 size={18} className="text-blue-bright" />
              <div><p className="text-sm font-bold text-primary">8000+ игр</p><p className="text-xs text-muted">в каталоге</p></div>
            </div>
            <div className="flex min-w-0 items-center gap-3 rounded-card border border-white/10 bg-background/55 p-3 backdrop-blur-md">
              <ShieldCheck size={18} className="text-gold" />
              <div><p className="text-sm font-bold text-primary">SSL</p><p className="text-xs text-muted">защита данных</p></div>
            </div>
            <div className="flex min-w-0 items-center gap-3 rounded-card border border-white/10 bg-background/55 p-3 backdrop-blur-md">
              <Headphones size={18} className="text-purple" />
              <div><p className="text-sm font-bold text-primary">24/7</p><p className="text-xs text-muted">поддержка</p></div>
            </div>
          </div>
        )}
      </section>

      {/* Layout */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <article>
          {/* TOC mobile */}
          {full && (
            <div className="mb-6 lg:hidden">
              <TableOfContents items={tocItems} />
            </div>
          )}

          {/* Intro (template reviews) */}
          {!full && (
            <div className="prose-article">
              <p className="text-[1.02rem]">{casino.intro}</p>
            </div>
          )}

          {/* Specs */}
          {casino.specs?.length ? (
            <section aria-labelledby="specs" className="mb-8">
              <h2 id="specs" className="mb-3 text-xl font-bold text-primary">Характеристики</h2>
              <table className="w-full overflow-hidden rounded-card border border-edge text-sm">
                <tbody>
                  {casino.specs.map((s) => (
                    <tr key={s.label} className="border-b border-edge last:border-0">
                      <td className="w-1/2 bg-white/[0.015] px-4 py-3 text-muted">{s.label}</td>
                      <td className="px-4 py-3 font-medium text-primary">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ) : null}

          {/* Scores */}
          {casino.scores?.length ? (
            <section aria-labelledby="scores" className="mb-8">
              <h2 id="scores" className="mb-4 text-xl font-bold text-primary">Оценки по критериям</h2>
              <div className="space-y-3.5">
                {casino.scores.map((sc) => (
                  <div key={sc.label}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-secondary">{sc.label}</span>
                      <span className="font-display font-bold text-gold">{sc.value.toFixed(1)}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue to-blue-bright" style={{ width: `${sc.value * 10}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Pros & cons */}
          <section aria-labelledby="pros-cons" className="mb-8 scroll-mt-24">
            <h2 id="pros-cons" className="mb-4 text-xl font-bold text-primary">Преимущества и недостатки</h2>
            <ProsCons pros={casino.pros} cons={casino.cons} />
          </section>

          {/* Detailed sections */}
          {casino.reviewSections?.length ? (
            <div className="mb-8">
              <ContentSections sections={casino.reviewSections} />
            </div>
          ) : (
            <section className="mb-8 rounded-card border border-edge bg-surface p-5">
              <h2 className="text-lg font-bold text-primary">Итог обзора</h2>
              <p className="mt-2 text-sm text-secondary">
                {casino.name} получает оценку {casino.rating.toFixed(1)} из 10 по нашей методике.
                Сильная сторона проекта: {casino.pros[0].toLowerCase()}. Сравнить казино с лидером рейтинга можно в{' '}
                <Link href="/reviews/dragon-money" className="text-blue-bright underline">обзоре Dragon Money</Link>.
              </p>
            </section>
          )}

          {/* Popular slots */}
          {casino.popularSlots?.length ? (
            <section aria-labelledby="slots" className="mb-8">
              <h2 id="slots" className="mb-4 text-xl font-bold text-primary">Популярные слоты</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {casino.popularSlots.map((s) => (
                  <div key={s.name} className="overflow-hidden rounded-card border border-edge bg-surface">
                    <div className="relative aspect-[4/3]">
                      <Image src={s.image} alt={`Обложка слота ${s.name}`} fill sizes="(max-width:640px) 50vw, 25vw" className="object-cover" />
                    </div>
                    <div className="p-2.5">
                      <p className="truncate text-sm font-semibold text-primary">{s.name}</p>
                      <p className="truncate text-xs text-muted">{s.provider}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* FAQ */}
          <section aria-labelledby="faq" className="mb-8 scroll-mt-24">
            <h2 id="faq" className="mb-4 text-xl font-bold text-primary">Частые вопросы о {casino.name}</h2>
            <FAQAccordion items={faq} />
            <JsonLd
              data={{
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faq.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              }}
            />
          </section>

          {/* Related */}
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-bold text-primary">Похожие казино</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {related.map((c) => {
                const rank = [...casinos].sort((a, b) => b.rating - a.rating).findIndex((x) => x.slug === c.slug) + 1;
                return <CasinoCard key={c.slug} casino={c} rank={rank} />;
              })}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="review-sidebar space-y-5 lg:space-y-6">
          {full && (
            <div className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </div>
          )}
          <ReviewSidebar casino={casino} />
        </aside>
      </div>
    </div>
  );
}
