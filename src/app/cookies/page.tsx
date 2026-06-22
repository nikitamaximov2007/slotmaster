import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { ContentSections } from '@/components/ContentSections';

export const metadata: Metadata = {
  title: 'Политика использования cookies',
  description: 'Какие cookie использует SlotMaster: необходимые и аналитические. Управление согласием.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Cookies' }]} />
      <PageHeader title="Политика использования cookies" intro="Мы используем cookie минимально и не включаем необязательные категории без вашего согласия." />
      <div className="mt-6 max-w-3xl">
        <ContentSections
          sections={[
            { id: 'necessary', heading: 'Необходимые cookie', paragraphs: ['Обеспечивают базовую работу сайта: навигацию, сохранение выбора в баннере согласия. Их нельзя отключить через баннер, так как без них сайт работает некорректно.'] },
            { id: 'analytics', heading: 'Аналитические cookie', paragraphs: ['Помогают понять, какие материалы полезны, и улучшать контент. Подключаются только после вашего явного согласия. По умолчанию они выключены.'] },
            { id: 'manage', heading: 'Управление согласием', paragraphs: ['При первом визите вы выбираете «Только необходимые» или «Принять все». Выбор сохраняется в вашем браузере. Чтобы изменить его, очистите данные сайта в браузере.'] },
          ]}
        />
      </div>
    </div>
  );
}
