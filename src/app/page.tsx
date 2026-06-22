import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { RankingShowcase } from '@/components/RankingShowcase';
import { DragonPromo } from '@/components/DragonPromo';
import { BonusCard } from '@/components/BonusCard';
import { WinCard } from '@/components/WinCard';
import { NewsCard } from '@/components/NewsCard';
import { JsonLd } from '@/components/JsonLd';
import { topCasinos, featuredCasino } from '@/data/casinos';
import { bonuses } from '@/data/bonuses';
import { wins } from '@/data/wins';
import { news } from '@/data/news';
import { SITE } from '@/lib/site';

export default function HomePage() {
  const top = topCasinos(10);
  const featured = featuredCasino();
  const homeBonuses = bonuses.slice(0, 3);
  const homeWins = wins.slice(0, 5);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ТОП-10 онлайн-казино',
    itemListElement: top.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: `${SITE.url}${c.reviewUrl}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <Hero />

      {/* TOP-10 hierarchical showcase */}
      <section className="container-site pt-12">
        <SectionHeading
          eyebrow="Рейтинг месяца"
          title="ТОП-10 казино"
          description="Места распределяются по совокупной оценке: бонусы, выплаты, ассортимент игр и поддержка."
          moreHref="/casino/top"
          moreLabel="Смотреть все"
        />
        <RankingShowcase casinos={top} />
      </section>

      {/* Bottom grid: bonuses (38) / wins (32) / news (30) */}
      <section className="container-site pt-12">
        <div className="grid gap-5 lg:grid-cols-[38fr_32fr_30fr]">
          {/* Bonuses */}
          <div className="premium-panel rounded-lg p-5">
            <SectionHeading as="h2" title="Актуальные бонусы" moreHref="/bonuses" moreLabel="Смотреть все" />
            <div className="grid gap-3">
              {homeBonuses[0] && <BonusCard bonus={homeBonuses[0]} showRulesLink={false} />}
              <div className="grid gap-3 sm:grid-cols-2">
                {homeBonuses.slice(1).map((b) => (
                  <BonusCard key={b.id} bonus={b} showRulesLink={false} />
                ))}
              </div>
            </div>
            <p className="mt-3 text-[0.7rem] leading-snug text-muted">
              Перед активацией бонуса ознакомьтесь с правилами акции на сайте казино.
            </p>
          </div>

          {/* Wins */}
          <div className="premium-panel rounded-lg p-5">
            <SectionHeading as="h2" title="Последние заносы" moreHref="/wins" moreLabel="Смотреть все" />
            <div className="flex flex-col gap-1">
              {homeWins.map((w) => (
                <WinCard key={w.id} win={w} />
              ))}
            </div>
            <p className="mt-3 text-[0.7rem] text-muted">
              Результаты отдельных игроков не гарантируют повторения.
            </p>
          </div>

          {/* News */}
          <div className="premium-panel rounded-lg p-5">
            <SectionHeading as="h2" title="Новости" moreHref="/blog" moreLabel="Смотреть все" />
            <div className="flex flex-col gap-2">
              {news.map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dragon Money promo banners */}
      <section className="container-site pt-12">
        <DragonPromo casino={featured} />
      </section>

      {/* SEO intro */}
      <section className="container-site pt-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Рейтинг онлайн-казино 2026 от SlotMaster</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary">
            Собираем казино с быстрой кассой, понятными бонусами и живым каталогом игр. Один рейтинг вместо десятка
            вкладок: сравниваете площадки и выбираете за минуту.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-secondary">
            В{' '}
            <Link href="/blog" className="text-blue-bright underline">
              блоге
            </Link>{' '}
            разбираем выводы, бонусы и слоты без обещаний лёгких денег. Игра остаётся развлечением с риском, держите
            это в голове.
          </p>
        </div>
      </section>
    </>
  );
}
