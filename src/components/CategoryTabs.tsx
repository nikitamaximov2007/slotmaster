import Link from 'next/link';

export type Tab = { slug: string; title: string; href: string };

export function CategoryTabs({ tabs, activeHref }: { tabs: Tab[]; activeHref: string }) {
  return (
    <div className="scroll-rail flex gap-2 overflow-x-auto rounded-full border border-edge bg-surface p-1.5">
      {tabs.map((t) => {
        const active = t.href === activeHref;
        return (
          <Link
            key={t.href}
            href={t.href}
            aria-current={active ? 'page' : undefined}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
              active
                ? 'bg-gradient-to-b from-[#ffe59b] via-gold to-[#c9941e] text-[#2b1b00] shadow-[0_8px_18px_rgba(245,196,81,0.28)]'
                : 'text-muted hover:text-primary'
            }`}
          >
            {t.title}
          </Link>
        );
      })}
    </div>
  );
}
