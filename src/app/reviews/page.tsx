import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { ReviewsExplorer } from '@/components/ReviewsExplorer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { casinos } from '@/data/casinos';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Обзоры онлайн-казино 2026, честные и подробные',
  description:
    'Каталог обзоров онлайн-казино 2026 года: бонусы, выплаты, поддержка и оценка редакции SlotMaster. Поиск и фильтры по типам казино.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Обзоры онлайн-казино 2026 | SlotMaster',
    description: 'Каталог честных обзоров казино с поиском и фильтрами.',
    url: `${SITE.url}/reviews`,
  },
};

const reviewsFaq = [
  {
    question: 'Как устроены обзоры на SlotMaster?',
    answer:
      'Каждый обзор разбит на разделы: бонусы, выплаты, игры, поддержка, безопасность и итог. Ключевые условия мы рекомендуем проверять на официальном сайте казино.',
  },
  {
    question: 'Можно ли доверять оценкам?',
    answer:
      'Оценки строятся по единой методике: выплаты, бонусы, ассортимент игр, поддержка и удобство. Перед регистрацией смотрите ключевые условия на сайте казино.',
  },
];

export default function ReviewsPage() {
  const sorted = [...casinos].sort((a, b) => b.rating - a.rating);
  const tags = Array.from(new Set(casinos.flatMap((c) => c.tags)));

  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Обзоры' }]} />
      <PageHeader
        eyebrow={`${casinos.length} казино`}
        title="Обзоры онлайн-казино"
        intro="Подробные обзоры казино по единой структуре: бонусы, скорость выплат, ассортимент игр, поддержка и безопасность. Используйте поиск и фильтры, чтобы найти подходящий проект."
      />

      <div className="mt-6">
        <ReviewsExplorer casinos={sorted} tags={tags} />
      </div>

      <div className="mt-10 mx-auto max-w-3xl">
        <h2 className="text-xl font-bold text-primary">Как мы пишем обзоры</h2>
        <p className="mt-3 text-sm leading-relaxed text-secondary">
          Мы придерживаемся единого шаблона: смотрим на условия бонусов и отыгрыш, доступные методы пополнения и
          вывода, ассортимент слотов и live-игр, качество поддержки и прозрачность правил. Это позволяет сравнивать
          казино между собой. Начать удобно с лидера рейтинга -{' '}
          <Link href="/reviews/dragon-money" className="text-blue-bright underline">
            обзора Dragon Money
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-primary">Частые вопросы</h2>
        <FAQAccordion items={reviewsFaq} />
      </div>
    </div>
  );
}
