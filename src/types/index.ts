// Shared domain types for SlotMaster

export type VerificationStatus = 'verified';

export type CasinoTag =
  | 'Лучший выбор'
  | 'Быстрые выплаты'
  | 'Лучший бонус'
  | 'Криптовалюта'
  | 'Новинка'
  | 'Live-казино';

export type Casino = {
  slug: string;
  name: string;
  /** tailwind gradient classes for the lettermark background */
  logoGradient: string;
  /** optional path to a real logo file in /public/assets/casinos, when set it
   *  replaces the generated brand mark. Drop official SVG/PNG files here. */
  logoImage?: string;
  rating: number;
  bonusTitle: string;
  bonusDetails: string;
  bonusBadge?: string;
  affiliateUrl: string;
  reviewUrl: string;
  payoutLabel?: string;
  payoutValue?: string;
  tags: CasinoTag[];
  pros: string[];
  cons: string[];
  intro: string;
  /** per-criteria scores (0-10) */
  scores?: { label: string; value: number }[];
  specs?: { label: string; value: string; status?: VerificationStatus }[];
  verificationStatus: VerificationStatus;
  isFeatured?: boolean;
  /** full-length detailed sections, present only for flagship reviews */
  hasFullReview?: boolean;
  /** detailed prose sections rendered on the review page (flagship only) */
  reviewSections?: ArticleSection[];
  /** popular slots highlighted on the review page */
  popularSlots?: { name: string; image: string; provider: string }[];
  /** review-specific FAQ */
  faq?: FaqItem[];
  /** SEO + meta */
  seoTitle?: string;
  seoDescription?: string;
};

export type Bonus = {
  id: string;
  casinoSlug: string;
  casinoName: string;
  logoGradient: string;
  logoImage?: string;
  cover: string;
  amount: string;
  label: string;
  badge?: string;
  affiliateUrl: string;
  rulesUrl: string;
  priority: number;
  featured?: boolean;
};

export type Win = {
  id: string;
  slotSlug: string;
  player: string;
  slot: string;
  slotImage: string;
  provider: string;
  casinoName: string;
  casinoSlug: string;
  amount: string;
  date: string;
  verificationStatus: VerificationStatus;
};

export type Slot = {
  slug: string;
  name: string;
  provider: string;
  image: string;
  category: 'slot' | 'crash' | 'instant' | 'live';
  volatility?: string;
  rtp?: string;
  usedIn: Array<'home' | 'wins' | 'dragon-money' | 'blog'>;
  description?: string;
  casinoSlug?: string;
};

export type ArticleCategory =
  | 'Гайды'
  | 'Слоты'
  | 'Бонусы'
  | 'Безопасность'
  | 'Выплаты'
  | 'Ответственная игра';

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: { ordered?: boolean; items: string[] };
  note?: string;
};

export type Article = {
  slug: string;
  title: string;
  h1: string;
  excerpt: string;
  category: ArticleCategory;
  image: string;
  date: string;
  author: string;
  readingMinutes: number;
  seoTitle: string;
  seoDescription: string;
  /** full structured body, when absent the page renders an "in expansion" notice */
  body?: ArticleSection[];
  faq?: FaqItem[];
  relatedSlugs?: string[];
  /** flags drafts that need editorial expansion rather than padding with filler */
  status: 'published' | 'needs-expansion';
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

export type Provider = {
  slug: string;
  name: string;
  logoGradient: string;
  gamesCount: string;
  description: string;
  popularSlots: string[];
  verificationStatus: VerificationStatus;
};

export type NewsItem = {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  href: string;
};

export type RankingCategory = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  /** filter applied to the casino dataset */
  filter: (c: Casino) => boolean;
  sort: (a: Casino, b: Casino) => number;
};
