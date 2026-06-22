import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BonusExplorer } from '@/components/BonusExplorer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ResponsibleGamblingNotice } from '@/components/ResponsibleGamblingNotice';
import { bonuses } from '@/data/bonuses';
import { generatedImages } from '@/data/images';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Бонусы казино 2026, офферы на баланс',
  description:
    'Актуальные бонусы онлайн-казино 2026: офферы на баланс, рейтинг предложений и партнерские ссылки SlotMaster.',
  alternates: { canonical: '/bonuses' },
  openGraph: {
    title: 'Бонусы казино 2026 | SlotMaster',
    description: 'Бонусы на баланс и партнерские офферы SlotMaster.',
    url: `${SITE.url}/bonuses`,
  },
};

const bonusFaq = [
  {
    question: 'Как активировать бонус?',
    answer:
      'Перейдите в казино по кнопке SlotMaster, откройте правила акции и выполните условия пополнения. Партнерская ссылка будет привязана к CTA.',
  },
  {
    question: 'Почему важно читать условия бонуса?',
    answer:
      'У акции могут быть лимиты, сроки и требования к ставкам. Правила показываются на сайте казино перед активацией.',
  },
  {
    question: 'Почему Dragon Money выше остальных?',
    answer:
      'Dragon Money получает первое место, потому что его оффер до +1000 ₽ на баланс сильнее остальных предложений в подборке.',
  },
];

export default function BonusesPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Бонусы' }]} />
      <section className="relative isolate mt-2 min-h-[330px] overflow-hidden rounded-[22px] border border-edge bg-surface px-5 py-10 shadow-[0_30px_90px_-62px_rgba(245,196,81,0.5)] sm:min-h-[380px] sm:px-8 lg:px-10 lg:py-14">
        <Image
          src={generatedImages.bonusesHero}
          alt="Актуальные бонусы казино SlotMaster"
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-right opacity-95 saturate-[1.1]"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,15,0.98)_0%,rgba(5,7,15,0.86)_42%,rgba(5,7,15,0.38)_72%,rgba(5,7,15,0.1)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,15,0.08)_0%,rgba(5,7,15,0.66)_100%)]" />
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Партнерские офферы</span>
          <h1 className="mt-5 text-[2.15rem] font-extrabold leading-tight tracking-tight text-primary sm:text-[3.15rem]">
            Бонусы казино 2026
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
            Подборка бонусов на баланс с прямыми переходами в казино. Dragon Money стоит первым: до +1000 ₽ на баланс.
          </p>
        </div>
      </section>

      <div className="mt-6">
        <BonusExplorer bonuses={bonuses} />
        <p className="mt-4 text-xs leading-snug text-muted">
          Перед активацией бонуса ознакомьтесь с правилами акции на сайте казино.
        </p>
      </div>

      {/* How to activate */}
      <div className="mt-10 rounded-card border border-edge bg-surface p-6">
        <h2 className="text-lg font-bold text-primary">Как получить бонус</h2>
        <ol className="mt-3 space-y-2.5">
          {[
            'Перейдите в казино по кнопке SlotMaster.',
            'Откройте правила акции на сайте казино.',
            'Пополните счёт на сумму, указанную в акции.',
            'После выполнения правил выводите выигрыш доступным методом.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-secondary">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-blue/15 font-display text-xs font-bold text-blue-bright">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6">
        <ResponsibleGamblingNotice />
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-primary">Частые вопросы о бонусах</h2>
        <FAQAccordion items={bonusFaq} />
      </div>
    </div>
  );
}
