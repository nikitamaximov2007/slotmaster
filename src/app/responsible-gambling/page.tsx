import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { ContentSections } from '@/components/ContentSections';
import { ResponsibleGamblingNotice } from '@/components/ResponsibleGamblingNotice';

export const metadata: Metadata = {
  title: 'Ответственная игра',
  description: 'Ответственная игра: признаки потери контроля, инструменты самоограничения и где получить помощь. 18+.',
  alternates: { canonical: '/responsible-gambling' },
};

export default function ResponsibleGamblingPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Ответственная игра' }]} />
      <PageHeader title="Ответственная игра" intro="Азартные игры остаются развлечением с риском потери средств, а не способом заработка. Здесь собраны принципы безопасной игры и инструменты самоконтроля." />

      <div className="mt-6 max-w-3xl">
        <ResponsibleGamblingNotice />
        <div className="mt-6">
          <ContentSections
            sections={[
              { id: 'principles', heading: 'Принципы безопасной игры', list: { items: ['Играйте только на средства, потерю которых можете себе позволить.', 'Никогда не пытайтесь отыграться после проигрыша.', 'Устанавливайте лимиты на депозит и время игры.', 'Не играйте в состоянии стресса или под воздействием алкоголя.', 'Воспринимайте игру как развлечение, а не источник дохода.'] } },
              { id: 'signs', heading: 'Признаки потери контроля', list: { items: ['Вы играете на деньги, которые нужны на другие цели.', 'Вы скрываете игру от близких.', 'Вы увеличиваете ставки, чтобы вернуть проигранное.', 'Игра вызывает тревогу, а не удовольствие.'] } },
              { id: 'tools', heading: 'Инструменты самоограничения', paragraphs: ['Большинство легальных казино предлагают лимиты на депозит и ставки, тайм-ауты и самоисключение. Используйте их, если чувствуете, что теряете контроль.'] },
              { id: 'help', heading: 'Где получить помощь', paragraphs: ['Если игра перестала быть развлечением, обратитесь к специалисту или на линию психологической помощи. Поддержка и своевременная пауза, основа безопасной игры.'] },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
