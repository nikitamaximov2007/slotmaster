'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_MAIN } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${
        scrolled ? 'border-gold/20 bg-background/88' : 'border-transparent bg-background/62'
      }`}
    >
      <div className="container-site flex h-[72px] items-center gap-5">
        <Logo />

        <nav className="ml-2 hidden items-center gap-1 lg:flex" aria-label="Основное меню">
          {NAV_MAIN.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-[0.9rem] font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-full after:bg-gold after:transition-opacity ${
                isActive(item.href)
                  ? 'text-primary after:opacity-100'
                  : 'text-secondary after:opacity-0 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <Link
            href="/reviews"
            aria-label="Поиск по обзорам"
            className="grid h-10 w-10 place-items-center rounded-lg border border-edge bg-white/[0.04] text-secondary transition hover:border-gold/40 hover:text-primary"
          >
            <Search size={18} />
          </Link>
          <Link
            href="/casino/top"
            className="hidden h-10 items-center rounded-full bg-gradient-to-b from-[#ffe59b] via-gold to-[#c9941e] px-4 text-sm font-bold text-[#2b1b00] shadow-[0_10px_24px_rgba(245,196,81,0.28)] transition hover:brightness-105 sm:inline-flex"
          >
            Смотреть топ
          </Link>
          <button
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-edge bg-white/[0.04] text-primary lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-edge bg-background-secondary/95 lg:hidden">
          <nav className="container-site flex flex-col py-3" aria-label="Мобильное меню">
            {NAV_MAIN.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-[0.95rem] font-medium ${
                  isActive(item.href) ? 'bg-gold/12 text-primary' : 'text-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 px-1">
              <Link
                href="/casino/top"
                className="flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-b from-[#ffe59b] via-gold to-[#c9941e] text-sm font-bold text-[#2b1b00]"
              >
                Смотреть топ
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
