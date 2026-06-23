import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, ShieldCheck, Trophy } from 'lucide-react';

const benefits = [
  { icon: ShieldCheck, label: 'Проверенные площадки' },
  { icon: BadgeCheck, label: 'Честные бонусы' },
  { icon: Trophy, label: 'Dragon Money в топе' },
];

export function Hero() {
  return (
    <section className="relative isolate pt-5">
      <div className="relative isolate min-h-[560px] overflow-hidden bg-[radial-gradient(circle_at_76%_42%,rgba(91,124,255,0.2),transparent_34%),radial-gradient(circle_at_88%_76%,rgba(245,196,81,0.13),transparent_28%),linear-gradient(135deg,#050814_0%,#070b18_48%,#100d18_100%)] sm:min-h-[460px] lg:min-h-[410px]">
        <div
          className="pointer-events-none absolute -right-[22%] bottom-0 z-[1] h-[86%] w-[130%] opacity-48 sm:-right-[14%] sm:h-[108%] sm:w-[88%] sm:opacity-76 lg:-right-[8%] lg:h-[116%] lg:w-[72%] lg:opacity-100"
          style={{
            WebkitMaskImage:
              'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 10%, rgba(0,0,0,0.58) 24%, #000 42%, #000 100%)',
            maskImage:
              'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 10%, rgba(0,0,0,0.58) 24%, #000 42%, #000 100%)',
          }}
        >
          <Image
            src="/assets/slotmaster/hero-slot-premium.png"
            alt="Промо-ассет SlotMaster"
            fill
            priority
            sizes="(max-width: 640px) 120vw, (max-width: 1024px) 88vw, 72vw"
            className="scale-[1.035] object-cover brightness-[1.28] contrast-[1.08] saturate-[1.22]"
            style={{ objectPosition: 'right center' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-[30%] z-[2] w-[40%] bg-[linear-gradient(90deg,rgba(3,7,17,0.96),rgba(3,7,17,0.36),transparent)] blur-[22px] sm:left-[34%] sm:w-[34%]" />
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(3,7,17,0.98)_0%,rgba(3,7,17,0.91)_32%,rgba(3,7,17,0.46)_52%,rgba(3,7,17,0.1)_74%,rgba(3,7,17,0.015)_100%),radial-gradient(circle_at_70%_45%,rgba(54,119,255,0.2),transparent_36%)]" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_12%_20%,rgba(168,85,247,0.1),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0)_42%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-b from-transparent to-background" />

        <div className="container-site relative z-[3] flex min-h-[560px] items-center py-9 sm:min-h-[460px] lg:min-h-[410px] lg:py-10">
          <div className="w-full min-w-0 max-w-[680px]">
            <h1 className="max-w-[20rem] font-display text-[2rem] font-bold leading-[1.08] tracking-normal text-primary sm:max-w-[560px] sm:text-[2.75rem] sm:leading-[1.03] lg:max-w-[680px] lg:text-[2.85rem]">
              SlotMaster выбирает казино, где игра выглядит честно.
            </h1>

            <p className="mt-5 max-w-[520px] text-base leading-7 text-secondary sm:text-lg">
              Рейтинги, бонусы и обзоры казино в одном месте. Выбирайте площадку быстрее и играйте осознанно.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/casino/top"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-b from-[#ffe59b] via-gold to-[#c9941e] px-6 text-sm font-bold text-[#2b1b00] shadow-[0_14px_32px_rgba(245,196,81,0.3)] transition hover:brightness-105"
              >
                Смотреть топ казино
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/reviews/dragon-money"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-primary transition hover:border-purple/50 hover:bg-white/[0.07]"
              >
                Обзор Dragon Money
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {benefits.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 text-xs font-semibold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <Icon size={15} className="text-gold" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
