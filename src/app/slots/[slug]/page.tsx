import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BadgeCheck, Gamepad2, ShieldCheck, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AffiliateButton } from '@/components/AffiliateButton';
import { JsonLd } from '@/components/JsonLd';
import { casinos, getCasinoBySlug } from '@/data/casinos';
import { getSlotBySlug, slots } from '@/data/slots';
import { SITE } from '@/lib/site';

type Params = { slug: string };
type PageProps = { params: Promise<Params> };

const categoryLabel: Record<string, string> = {
  slot: 'Видео-слот',
  crash: 'Crash-игра',
  instant: 'Мгновенная игра',
  live: 'Live-игра',
};

export function generateStaticParams() {
  return slots.map((slot) => ({ slug: slot.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slot = getSlotBySlug(slug);
  if (!slot) return {};

  return {
    title: `${slot.name}: обзор слота, провайдер и где играть | SlotMaster`,
    description: `Краткий обзор ${slot.name}: провайдер ${slot.provider}, формат игры, особенности и где открыть слот через Dragon Money.`,
    alternates: { canonical: `/slots/${slot.slug}` },
    openGraph: {
      type: 'article',
      title: `${slot.name}: обзор слота`,
      description: slot.description,
      url: `${SITE.url}/slots/${slot.slug}`,
      images: [slot.image],
    },
  };
}

export default async function SlotPage({ params }: PageProps) {
  const { slug } = await params;
  const slot = getSlotBySlug(slug);
  if (!slot) notFound();

  const dragonMoney = getCasinoBySlug('dragon-money') ?? casinos[0];
  const type = categoryLabel[slot.category] ?? 'Слот';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${slot.name}: обзор слота`,
    image: `${SITE.url}${slot.image}`,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: `${SITE.name}.ru` },
    mainEntityOfPage: `${SITE.url}/slots/${slot.slug}`,
  };

  return (
    <div className="container-site pb-16">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: 'Заносы', href: '/wins' }, { label: slot.name }]} />

      <section className="relative isolate overflow-hidden rounded-[22px] border border-white/10 bg-surface shadow-[0_28px_86px_-58px_rgba(245,196,81,0.4)]">
        <Image
          src={slot.image}
          alt={`Обложка слота ${slot.name}`}
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover opacity-80 saturate-[1.12]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,15,0.98)_0%,rgba(5,7,15,0.9)_42%,rgba(5,7,15,0.42)_72%,rgba(5,7,15,0.18)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,15,0.08)_0%,rgba(5,7,15,0.78)_100%)]" />

        <div className="relative z-10 max-w-3xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
          <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
            {type}
          </span>
          <h1 className="mt-3 text-[2rem] font-extrabold leading-tight text-primary sm:text-[3rem]">
            {slot.name}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary">
            {slot.description} Ниже коротко разбираем, чем слот выделяется, кому он может подойти и на что обратить внимание перед игрой.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            <div className="rounded-card border border-white/10 bg-background/55 p-3 backdrop-blur-md">
              <p className="text-xs text-muted">Провайдер</p>
              <p className="mt-1 font-bold text-primary">{slot.provider}</p>
            </div>
            <div className="rounded-card border border-white/10 bg-background/55 p-3 backdrop-blur-md">
              <p className="text-xs text-muted">Формат</p>
              <p className="mt-1 font-bold text-primary">{type}</p>
            </div>
            <div className="rounded-card border border-white/10 bg-background/55 p-3 backdrop-blur-md">
              <p className="text-xs text-muted">Волатильность</p>
              <p className="mt-1 font-bold text-primary">{slot.volatility ?? 'зависит от версии'}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <article className="prose-article">
          <section>
            <h2>Что это за слот</h2>
            <p>
              {slot.name} от {slot.provider} относится к формату {type.toLowerCase()}. Такие игры ценят за быстрый темп,
              понятную структуру раунда и простую проверку результата: игрок сразу видит ставку, исход и историю действий.
            </p>
            <p>
              Важно воспринимать слот как развлечение с риском, а не как способ заработка. Даже удачные заносы из ленты
              не гарантируют повторения: результат каждого раунда определяется механикой игры и случайностью.
            </p>
          </section>

          <section>
            <h2>На что смотреть перед запуском</h2>
            <ul>
              <li>проверьте лимиты ставки и доступный баланс;</li>
              <li>изучите правила бонусных функций внутри игры;</li>
              <li>не повышайте ставку после серии проигрышей;</li>
              <li>заранее поставьте лимит времени и бюджета.</li>
            </ul>
          </section>

          <section>
            <h2>Кому может подойти</h2>
            <p>
              {slot.name} лучше открывать тем, кто уже понимает базовую механику слотов и не ждёт гарантированного
              результата. Если вы только знакомитесь с игрой, начните с небольшой ставки или демо-режима, если он доступен.
            </p>
          </section>
        </article>

        <aside className="space-y-4">
          <div className="rounded-card border border-edge bg-surface p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Коротко</h2>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-secondary"><Gamepad2 size={16} className="text-blue-bright" /> {type}</p>
              <p className="flex items-center gap-2 text-secondary"><Sparkles size={16} className="text-gold" /> {slot.provider}</p>
              <p className="flex items-center gap-2 text-secondary"><ShieldCheck size={16} className="text-green" /> Играйте с лимитами</p>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-10 overflow-hidden rounded-[22px] border border-gold/30 bg-[radial-gradient(circle_at_78%_32%,rgba(245,196,81,0.28),transparent_28%),linear-gradient(135deg,#10131f_0%,#080a12_55%,#17101d_100%)] p-5 shadow-[0_24px_70px_-46px_rgba(245,196,81,0.55)] sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
              <BadgeCheck size={14} /> Рекомендация SlotMaster
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-primary">
              Где открыть {slot.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              Играть в {slot.name} можно на Dragon Money. Площадка стоит первой в рейтинге SlotMaster, а главный оффер
              сейчас: <span className="font-bold text-gold">{dragonMoney.bonusTitle}</span> {dragonMoney.bonusDetails}.
              Перед ставкой проверьте правила игры и условия бонуса на сайте казино.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <AffiliateButton href={dragonMoney.affiliateUrl} variant="gold" size="md" ariaLabel={`Играть в ${slot.name} на Dragon Money`}>
              Играть на Dragon Money
            </AffiliateButton>
            <Link
              href="/reviews/dragon-money"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/12 bg-white/[0.05] px-5 text-sm font-semibold text-primary transition hover:border-gold/35"
            >
              Обзор Dragon Money <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
