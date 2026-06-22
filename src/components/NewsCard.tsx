import Link from 'next/link';
import Image from 'next/image';
import type { NewsItem } from '@/types';

// Compact media card: thumbnail + category + title + date.
export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={item.href}
      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-edge hover:bg-white/[0.03]"
    >
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md border border-edge">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="80px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0">
        <span className="text-[0.62rem] font-semibold uppercase tracking-wide text-blue-bright">{item.category}</span>
        <p className="line-clamp-2 text-[0.84rem] font-semibold leading-snug text-primary transition group-hover:text-blue-bright">
          {item.title}
        </p>
        <p className="mt-1 text-xs text-muted">{item.date}</p>
      </div>
    </Link>
  );
}
