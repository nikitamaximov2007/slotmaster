// Central site configuration. Override NEXT_PUBLIC_SITE_URL when assigning a custom domain.
export const SITE = {
  name: 'SlotMaster',
  domain: 'slotmaster-premium-style.vercel.app',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://slotmaster-premium-style.vercel.app',
  tagline: 'Ваш гид в мире честных казино',
  description:
    'Независимые обзоры онлайн-казино, честные рейтинги и проверенные предложения. Гайды по выплатам, бонусам и безопасной игре.',
  email: 'info@slotmaster.ru',
  telegram: 'https://t.me/slotmaster',
  metrics: [
    { value: '200+', label: 'обзоров казино', status: 'verified' as const },
    { value: '40+', label: 'критериев оценки', status: 'verified' as const },
    { value: '2026', label: 'актуальные данные', status: 'verified' as const },
  ],
};

export const NAV_MAIN = [
  { label: 'Казино', href: '/casino' },
  { label: 'Бонусы', href: '/bonuses' },
  { label: 'Заносы', href: '/wins' },
  { label: 'Новости', href: '/blog' },
  { label: 'Обзоры', href: '/reviews' },
  { label: 'Провайдеры', href: '/providers' },
  { label: 'FAQ', href: '/faq' },
];

export const FOOTER_INFO = [
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contacts' },
  { label: 'Политика конфиденциальности', href: '/privacy' },
  { label: 'Правила сайта', href: '/terms' },
  { label: 'Карта сайта', href: '/sitemap.xml' },
];

export const FOOTER_HELP = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Как это работает', href: '/about' },
  { label: 'Ответственная игра', href: '/responsible-gambling' },
  { label: 'Cookies', href: '/cookies' },
];
