import { slotsFor } from '@/data/slots';
import { SlotCard } from './SlotCard';
import { SectionHeading } from './SectionHeading';

export function PopularSlots({ compact = false }: { compact?: boolean }) {
  const slots = slotsFor('dragon-money', compact ? 4 : 8);

  return (
    <section id="slots">
      <SectionHeading
        as="h2"
        eyebrow="Каталог игр"
        title="Популярные слоты"
        description="Подборка игр, которые чаще всего ищут вместе с Dragon Money. Все изображения загружаются локально."
      />
      <div className={`grid gap-3 ${compact ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'}`}>
        {slots.map((slot, index) => (
          <SlotCard key={slot.slug} slot={slot} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}
