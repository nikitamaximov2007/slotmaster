import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { WinsExplorer } from '@/components/WinsExplorer';
import { ResponsibleGamblingNotice } from '@/components/ResponsibleGamblingNotice';
import { wins } from '@/data/wins';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Заносы в казино, крупные выигрыши в слотах',
  description:
    'Лента крупных выигрышей в слотах: слот, провайдер, казино и сумма. Результаты игроков не гарантируют похожего исхода.',
  alternates: { canonical: '/wins' },
  openGraph: {
    title: 'Заносы в казино, крупные выигрыши | SlotMaster',
    description: 'Лента заносов в слотах.',
    url: `${SITE.url}/wins`,
  },
};

export default function WinsPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Заносы' }]} />
      <PageHeader
        eyebrow="Лента заносов"
        title="Заносы в слотах"
        intro="Галерея крупных выигрышей с обложками слотов, провайдерами, казино и суммами. Используйте фильтры по провайдеру, сумме и казино."
      />

      <div className="mt-5">
        <ResponsibleGamblingNotice />
      </div>

      <div className="mt-6">
        <WinsExplorer wins={wins} />
      </div>

      <p className="mt-8 rounded-card border border-edge bg-surface p-4 text-sm text-secondary">
        Результаты отдельных игроков не гарантируют повторения. Слоты работают на генераторе случайных чисел, а казино имеет математическое преимущество.
      </p>
    </div>
  );
}
