import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Scale, ListChecks, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { ResponsibleGamblingNotice } from '@/components/ResponsibleGamblingNotice';
import { TrustFeature } from '@/components/TrustFeature';
import { generatedImages } from '@/data/images';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'О проекте SlotMaster, методика и редакционные принципы',
  description:
    'О независимом проекте SlotMaster: миссия, редакционные принципы, методика рейтинга, критерии оценки и процесс проверки информации. ответственная игра.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'О проекте SlotMaster | Методика и принципы',
    description: 'Как мы оцениваем казино: методика рейтинга, критерии и редакционные принципы SlotMaster.',
    url: `${SITE.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'О нас' }]} />
      <PageHeader
        eyebrow="Кто мы"
        title="О проекте SlotMaster"
        intro="SlotMaster, независимый проект об онлайн-казино. Мы не принадлежим операторам и помогаем игрокам принимать осознанные решения. Ключевые условия казино всегда проверяйте на их официальных сайтах."
      />

      <div className="relative mt-6 min-h-[220px] overflow-hidden rounded-card border border-edge bg-surface sm:min-h-[280px]">
        <Image
          src={generatedImages.pages.about}
          alt="О проекте SlotMaster"
          fill
          sizes="(max-width: 768px) 100vw, 1180px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/25 to-transparent" />
      </div>

      <div className="prose-article mt-8 max-w-3xl">
        <h2>Миссия</h2>
        <p>
          Рынок онлайн-казино переполнен рекламой, где каждый проект называет себя лучшим. Наша задача, давать
          структурированную и прозрачную информацию: объяснять, как работают бонусы и выплаты, на что смотреть при
          выборе казино и какие риски несёт азартная игра.
        </p>

        <h2>Редакционные принципы</h2>
        <ul>
          <li>Мы разделяем проверенные факты и данные, требующие проверки, и помечаем последние.</li>
          <li>Мы не публикуем выдуманные лицензии, отзывы и счётчики игроков.</li>
          <li>Позицию в рейтинге нельзя купить, она определяется методикой.</li>
          <li>Мы отделяем редакционные оценки от рекламных обещаний и проверяем ключевые условия.</li>
          <li>Мы не обещаем выигрышей и не публикуем «рабочих схем».</li>
        </ul>

        <h2>Методика рейтинга</h2>
        <p>
          Каждое казино оценивается по единому набору критериев. Ниже, группы критериев и их ориентировочный вес.
          Это позволяет сравнивать проекты между собой по одинаковым правилам.
        </p>
      </div>

      <div className="mt-5 grid max-w-3xl grid-cols-2 gap-2.5 lg:grid-cols-4">
        <TrustFeature icon={Target} title="Выплаты" text="Скорость и стабильность" />
        <TrustFeature icon={Scale} title="Бонусы" text="Размер и прозрачность" />
        <TrustFeature icon={ListChecks} title="Игры" text="Ассортимент и провайдеры" />
        <TrustFeature icon={ShieldCheck} title="Надёжность" text="Поддержка и репутация" />
      </div>

      <div className="prose-article mt-8 max-w-3xl">
        <h2>Как мы проверяем информацию</h2>
        <p>
          Мы собираем данные из открытых источников и официальных сайтов операторов, сверяем условия бонусов и
          платёжные методы. Ключевые условия рекомендуем проверять на сайтах казино перед регистрацией: акции
          меняются. Мы не утверждаем, что тестировали казино на реальные деньги, если такое тестирование не
          проводилось.
        </p>

        <h2>Контакты</h2>
        <p>
          Вопросы, уточнения и предложения по сотрудничеству направляйте на{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> или через{' '}
          <Link href="/contacts">форму обратной связи</Link>.
        </p>
      </div>

      <div className="mt-8 max-w-3xl space-y-4">
        <ResponsibleGamblingNotice />
      </div>
    </div>
  );
}
