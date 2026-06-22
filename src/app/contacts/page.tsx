import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Send, RefreshCw, Handshake } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import { generatedImages } from '@/data/images';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Контакты, связаться с редакцией SlotMaster',
  description:
    'Свяжитесь с редакцией SlotMaster: общие вопросы, партнёрское сотрудничество и исправление информации. Форма обратной связи и e-mail.',
  alternates: { canonical: '/contacts' },
  openGraph: {
    title: 'Контакты SlotMaster',
    description: 'Форма обратной связи и контактные данные редакции.',
    url: `${SITE.url}/contacts`,
  },
};

export default function ContactsPage() {
  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'Контакты' }]} />
      <PageHeader
        eyebrow="Обратная связь"
        title="Контакты"
        intro="Напишите нам по вопросам сотрудничества, исправления информации или общим темам. Мы отвечаем по будням в течение рабочего дня."
      />

      <div className="relative mt-6 min-h-[220px] overflow-hidden rounded-card border border-edge bg-surface sm:min-h-[280px]">
        <Image
          src={generatedImages.pages.contacts}
          alt="Контакты редакции SlotMaster"
          fill
          sizes="(max-width: 768px) 100vw, 1180px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/25 to-transparent" />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-card border border-edge bg-surface p-6">
          <ContactForm />
        </div>

        <aside className="space-y-4">
          <div className="rounded-card border border-edge bg-surface p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Прямые контакты</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue/15 text-blue-bright"><Mail size={16} /></span>
                <div><p className="text-sm font-semibold text-primary">E-mail</p><a href={`mailto:${SITE.email}`} className="text-sm text-secondary hover:text-blue-bright">{SITE.email}</a></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue/15 text-blue-bright"><Send size={16} /></span>
                <div><p className="text-sm font-semibold text-primary">Telegram</p><a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-blue-bright">@slotmaster</a></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue/15 text-blue-bright"><Handshake size={16} /></span>
                <div><p className="text-sm font-semibold text-primary">Сотрудничество</p><span className="text-sm text-secondary">Тема «Партнёрское сотрудничество»</span></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue/15 text-blue-bright"><RefreshCw size={16} /></span>
                <div><p className="text-sm font-semibold text-primary">Исправить данные</p><span className="text-sm text-secondary">Сообщите о неточности в обзоре</span></div>
              </li>
            </ul>
          </div>

          <div className="rounded-card border border-edge bg-surface p-5">
            <h2 className="text-sm font-semibold text-primary">Политика ответа</h2>
            <p className="mt-2 text-sm text-secondary">
              Мы рассматриваем обращения по будням и стараемся ответить в течение одного рабочего дня. Обращения,
              нарушающие правила или содержащие спам, остаются без ответа.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
