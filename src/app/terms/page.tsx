import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { ContentSections } from '@/components/ContentSections';

export const metadata: Metadata = {
  title: 'Правила сайта',
  description: 'Правила использования сайта SlotMaster: характер информации, ограничение ответственности и возраст 18+.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Правила сайта' }]} />
      <PageHeader title="Правила сайта" intro="Используя SlotMaster, вы соглашаетесь с условиями ниже." />
      <div className="mt-6 max-w-3xl">
        <ContentSections
          sections={[
            { id: 'info', heading: 'Редакционный формат', paragraphs: ['Материалы сайта помогают сравнить казино и не являются призывом к участию в азартных играх. Финальные правила акции и платежей размещаются на стороне казино.'] },
            { id: 'age', heading: 'Возрастное ограничение', paragraphs: ['Контент предназначен только для лиц старше 18 лет. Участие в азартных играх несовершеннолетними запрещено.'] },
            { id: 'liability', heading: 'Ограничение ответственности', paragraphs: ['Мы не несём ответственности за решения, принятые на основе материалов сайта, и за действия сторонних операторов. Ключевые условия всегда проверяйте на официальных сайтах казино.'] },
            { id: 'links', heading: 'Внешние ссылки', paragraphs: ['Сайт содержит ссылки на сторонние ресурсы, в том числе партнёрские. Мы не контролируем их содержимое и условия.'] },
            { id: 'changes', heading: 'Изменения правил', paragraphs: ['Мы можем обновлять правила. Актуальная версия всегда доступна на этой странице.'] },
          ]}
        />
      </div>
    </div>
  );
}
