import type { Casino, RankingCategory } from '@/types';

// Ranking category definitions used by /casino and /casino/[category].
// Dragon Money stays near the top because of its overall score, but every
// list is generated from the same dataset so positions stay consistent.
export const rankingCategories: RankingCategory[] = [
  {
    slug: 'top',
    title: 'ТОП казино',
    h1: 'ТОП онлайн-казино 2026 года',
    description:
      'Общий рейтинг казино по совокупной оценке: бонусы, скорость выплат, ассортимент игр и удобство.',
    seoTitle: 'ТОП онлайн-казино 2026, общий рейтинг | SlotMaster',
    seoDescription:
      'Общий ТОП онлайн-казино 2026 года по оценке редакции SlotMaster: бонусы, выплаты, игры.',
    filter: () => true,
    sort: (a, b) => b.rating - a.rating,
  },
  {
    slug: 'fast-payouts',
    title: 'Быстрые выплаты',
    h1: 'Казино с быстрыми выплатами',
    description:
      'Подборка казино, которые делают акцент на быстром выводе средств. Перед игрой проверяйте реальные сроки на официальном сайте.',
    seoTitle: 'Казино с быстрыми выплатами 2026 | SlotMaster',
    seoDescription:
      'Рейтинг казино с быстрым выводом средств: СБП, криптовалюта, карты.',
    filter: (c) => c.tags.includes('Быстрые выплаты') || c.rating >= 9.0,
    sort: (a, b) => b.rating - a.rating,
  },
  {
    slug: 'best-bonuses',
    title: 'Лучшие бонусы',
    h1: 'Казино с лучшими бонусами',
    description:
      'Казино с сильными офферами на баланс. Dragon Money стоит первым благодаря предложению до +1000 ₽.',
    seoTitle: 'Казино с лучшими бонусами 2026 | SlotMaster',
    seoDescription:
      'Рейтинг казино с крупными бонусами на баланс.',
    filter: (c) => c.tags.includes('Лучший бонус') || c.rating >= 8.8,
    sort: (a, b) => b.rating - a.rating,
  },
  {
    slug: 'new',
    title: 'Новые казино',
    h1: 'Новые онлайн-казино 2026',
    description:
      'Свежие проекты, которые недавно появились на рынке. Новые казино интереснее по условиям, но репутацию ещё нарабатывают, будьте внимательны.',
    seoTitle: 'Новые онлайн-казино 2026 | SlotMaster',
    seoDescription:
      'Подборка новых онлайн-казино 2026 года: бонусы, особенности, оценка SlotMaster.',
    filter: (c) => c.tags.includes('Новинка'),
    sort: (a, b) => b.rating - a.rating,
  },
  {
    slug: 'crypto',
    title: 'Крипто-казино',
    h1: 'Казино с криптовалютой',
    description:
      'Казино, которые поддерживают пополнение и вывод в криптовалюте. Крипто-платежи обычно быстрее, но требуют аккуратной работы с кошельками.',
    seoTitle: 'Крипто-казино 2026, приём криптовалют | SlotMaster',
    seoDescription:
      'Рейтинг казино с поддержкой криптовалют (BTC, USDT и др.).',
    filter: (c) => c.tags.includes('Криптовалюта'),
    sort: (a, b) => b.rating - a.rating,
  },
];

export const getRankingCategory = (slug: string) =>
  rankingCategories.find((r) => r.slug === slug);

export const rankedCasinos = (category: RankingCategory, all: Casino[]) =>
  all.filter(category.filter).sort(category.sort);
