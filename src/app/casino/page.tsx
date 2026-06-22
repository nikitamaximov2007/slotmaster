import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { CategoryTabs } from '@/components/CategoryTabs';
import { CasinoRankingTable } from '@/components/CasinoRankingTable';
import { FAQAccordion } from '@/components/FAQAccordion';
import { TrustFeature } from '@/components/TrustFeature';
import { casinos } from '@/data/casinos';
import { rankingCategories } from '@/data/rankings';
import { BadgeCheck, Zap, Gift, ShieldCheck } from 'lucide-react';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Рейтинг онлайн-казино 2026, ТОП по выплатам и бонусам',
  description:
    'Рейтинг онлайн-казино 2026 года по единой методике SlotMaster: выплаты, бонусы, игры и поддержка. Категории: быстрые выплаты, лучшие бонусы, новые и крипто-казино.',
  alternates: { canonical: '/casino' },
  openGraph: {
    title: 'Рейтинг онлайн-казино 2026 | SlotMaster',
    description: 'Рейтинг казино по выплатам, бонусам и надёжности.',
    url: `${SITE.url}/casino`,
  },
};

const tabs = [
  { slug: 'all', title: 'Все', href: '/casino' },
  ...rankingCategories.map((c) => ({ slug: c.slug, title: c.title, href: `/casino/${c.slug}` })),
];

const rankingFaq = [
  {
    question: 'Как формируется рейтинг казино?',
    answer:
      'Оценка складывается из пяти групп критериев: выплаты, бонусы, ассортимент игр, поддержка и надёжность. Ключевые условия мы рекомендуем проверять на официальных сайтах операторов.',
  },
  {
    question: 'Включает ли рейтинг коммерческие предложения?',
    answer:
      'Да, страница может содержать партнёрские ссылки, и мы можем получать комиссию. Это не влияет на позиции, они определяются методикой.',
  },
  {
    question: 'Почему Dragon Money наверху рейтинга?',
    answer:
      'По нашей оценке Dragon Money получает высший балл за счёт совокупности факторов. Ключевые условия проверяйте на официальном сайте оператора.',
  },
];

export default function CasinoHubPage() {
  const ranked = [...casinos].sort((a, b) => b.rating - a.rating);

  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Рейтинги' }]} />
      <PageHeader
        eyebrow="Рейтинг 2026"
        title="Рейтинг онлайн-казино 2026"
        intro="Мы оцениваем казино по единой методике: скорость и стабильность выплат, условия бонусов, ассортимент игр, поддержка и удобство. Выбирайте категорию под свою задачу."
      />

      <div className="mt-6">
        <CategoryTabs tabs={tabs} activeHref="/casino" />
      </div>

      <div className="mt-6">
        <CasinoRankingTable casinos={ranked} />
      </div>

      {/* Methodology */}
      <div className="mt-10 rounded-card border border-edge bg-surface p-6">
        <h2 className="text-lg font-bold text-primary">Как мы составляем рейтинг</h2>
        <p className="mt-2 text-sm text-secondary">
          Итоговая оценка складывается из пяти групп критериев. Вес каждой группы, ориентировочный и приведён для
          прозрачности методики.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          <TrustFeature icon={Zap} title="Выплаты" text="Скорость, лимиты, стабильность" />
          <TrustFeature icon={Gift} title="Бонусы" text="Размер и прозрачность" />
          <TrustFeature icon={BadgeCheck} title="Игры" text="Ассортимент и провайдеры" />
          <TrustFeature icon={ShieldCheck} title="Надёжность" text="Поддержка и репутация" />
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-primary">Частые вопросы о рейтинге</h2>
        <FAQAccordion items={rankingFaq} />
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link href="/reviews" className="text-blue-bright underline">Все обзоры казино</Link>
        <Link href="/bonuses" className="text-blue-bright underline">Бонусы казино</Link>
        <Link href="/blog/kazino-s-bystrymi-vyplatami" className="text-blue-bright underline">Казино с быстрыми выплатами</Link>
      </div>
    </div>
  );
}
