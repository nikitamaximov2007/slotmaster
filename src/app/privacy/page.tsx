import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { ContentSections } from '@/components/ContentSections';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности SlotMaster: какие данные мы собираем, как используем и как защищаем.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Политика конфиденциальности' }]} />
      <PageHeader title="Политика конфиденциальности" intro="Мы уважаем вашу приватность и собираем минимум данных. Этот документ объясняет, что и зачем мы обрабатываем." />
      <div className="mt-6 max-w-3xl">
        <ContentSections
          sections={[
            { id: 'data', heading: 'Какие данные мы собираем', paragraphs: ['Мы собираем обезличенные данные веб-аналитики для улучшения контента, а также e-mail, если вы добровольно подписались на рассылку или отправили форму обратной связи.'] },
            { id: 'use', heading: 'Как мы используем данные', paragraphs: ['Данные используются для работы сайта, ответа на обращения и улучшения материалов. Мы не продаём персональные данные третьим лицам.'] },
            { id: 'cookies', heading: 'Cookies', paragraphs: ['Необходимые cookie обеспечивают работу сайта. Аналитические cookie подключаются только после вашего согласия в баннере. Подробнее на странице «Cookies».'] },
            { id: 'rights', heading: 'Ваши права', paragraphs: ['Вы можете запросить удаление своих данных или отписаться от рассылки в любой момент, написав на контактный e-mail.'] },
            { id: 'contacts', heading: 'Контакты', paragraphs: ['По вопросам обработки персональных данных используйте форму обратной связи или контактный e-mail, указанный в разделе «Контакты».'] },
          ]}
        />
      </div>
    </div>
  );
}
