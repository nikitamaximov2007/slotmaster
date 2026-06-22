import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd } from '@/components/JsonLd';
import { faqGroups, flattenFaq } from '@/data/faq';
import { generatedImages } from '@/data/images';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ, частые вопросы об онлайн-казино',
  description:
    'Ответы на частые вопросы об онлайн-казино: выбор казино, бонусы и отыгрыш, выплаты, безопасность, верификация, мобильная версия и ответственная игра.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ, вопросы об онлайн-казино | SlotMaster',
    description: 'Ответы по выбору казино, бонусам, выплатам и безопасности.',
    url: `${SITE.url}/faq`,
  },
};

export default function FaqPage() {
  const allItems = flattenFaq(faqGroups);

  return (
    <div className="container-site pb-16">
      <Breadcrumbs items={[{ label: 'FAQ' }]} />
      <section className="relative isolate mt-2 min-h-[390px] overflow-hidden rounded-[22px] border border-edge bg-surface px-5 py-10 shadow-[0_30px_90px_-62px_rgba(56,189,248,0.5)] sm:min-h-[430px] sm:px-8 lg:px-10 lg:py-14">
        <Image
          src={generatedImages.pages.faq}
          alt="FAQ SlotMaster: ответы на вопросы игроков"
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-[72%_34%] opacity-95 saturate-[1.12]"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,15,0.98)_0%,rgba(5,7,15,0.86)_42%,rgba(5,7,15,0.38)_72%,rgba(5,7,15,0.1)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,15,0.08)_0%,rgba(5,7,15,0.66)_100%)]" />
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Помощь игрокам</span>
          <h1 className="mt-5 max-w-4xl text-[2.15rem] font-extrabold leading-tight tracking-tight text-primary sm:text-[3.15rem]">
            Частые вопросы об онлайн-казино
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
            Собрали ответы по выбору казино, бонусам, выплатам, безопасности и ответственной игре. Не нашли ответ, напишите нам на странице контактов.
          </p>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: allItems.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      <div className="mt-8 space-y-10">
        {faqGroups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
            <h2 id={`${group.id}-title`} className="mb-4 text-xl font-bold text-primary">
              {group.title}
            </h2>
            <FAQAccordion items={group.items} />
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-card border border-edge bg-surface p-6 text-center">
        <h2 className="text-lg font-bold text-primary">Остались вопросы?</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-secondary">
          Напишите нам, отвечаем по будням. А пока загляните в блог с подробными гайдами.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <Link href="/contacts" className="inline-flex h-11 items-center rounded-lg bg-gradient-to-b from-blue-bright to-blue px-5 text-sm font-semibold text-white transition hover:brightness-110">
            Связаться
          </Link>
          <Link href="/blog" className="inline-flex h-11 items-center rounded-lg border border-edge bg-surface px-5 text-sm font-semibold text-primary transition hover:border-edge-active">
            Читать блог
          </Link>
        </div>
      </div>
    </div>
  );
}
