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
    <section className="container-site pt-5">
      <div className="relative isolate min-h-[540px] overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_76%_42%,rgba(91,124,255,0.2),transparent_34%),radial-gradient(circle_at_88%_76%,rgba(245,196,81,0.13),transparent_28%),linear-gradient(135deg,#050814_0%,#070b18_48%,#100d18_100%)] shadow-[0_28px_86px_-58px_rgba(245,196,81,0.44)] sm:min-h-[440px] lg:min-h-[380px]">
        <div
          className="pointer-events-none absolute -right-[22%] bottom-0 z-[1] h-[86%] w-[130%] opacity-35 sm:-right-[14%] sm:h-[108%] sm:w-[88%] sm:opacity-58 lg:-right-[8%] lg:h-[116%] lg:w-[72%] lg:opacity-92"
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
            className="scale-[1.035] object-cover"
            style={{ objectPosition: 'right center' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-[30%] z-[2] w-[40%] bg-[linear-gradient(90deg,rgba(3,7,17,0.96),rgba(3,7,17,0.36),transparent)] blur-[22px] sm:left-[34%] sm:w-[34%]" />
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(3,7,17,0.98)_0%,rgba(3,7,17,0.93)_32%,rgba(3,7,17,0.58)_52%,rgba(3,7,17,0.2)_74%,rgba(3,7,17,0.08)_100%),radial-gradient(circle_at_70%_45%,rgba(54,119,255,0.18),transparent_36%)]" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_12%_20%,rgba(168,85,247,0.1),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0)_42%)]" />

        <div className="relative z-[3] flex min-h-[540px] items-center px-5 py-9 sm:min-h-[440px] sm:px-8 lg:min-h-[380px] lg:px-10 lg:py-7">
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
