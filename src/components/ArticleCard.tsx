import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import type { Article } from '@/types';

export function ArticleCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  return (
    <article className="group min-w-0 flex flex-col overflow-hidden rounded-card border border-edge bg-surface transition hover:border-edge-active hover:shadow-card">
      <Link href={`/blog/${article.slug}`} className="relative block min-w-0 aspect-[16/9] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 940px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
        />
        <span className="absolute left-2.5 top-2.5 rounded-full border border-edge bg-background/75 px-2.5 py-1 text-[0.68rem] font-semibold text-secondary backdrop-blur-sm">
          {article.category}
        </span>
      </Link>
      <div className="min-w-0 flex flex-1 flex-col p-4">
        <h3 className="text-[1.02rem] font-bold leading-snug text-primary">
          <Link href={`/blog/${article.slug}`} className="break-words transition hover:text-blue-bright">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 min-w-0 flex-1 break-words text-sm text-muted">{article.excerpt}</p>
        <div className="mt-3 flex min-w-0 flex-wrap items-center gap-2 text-xs text-muted">
          <span>{article.date}</span>
          <span className="h-0.5 w-0.5 rounded-full bg-muted" />
          <span className="flex items-center gap-1">
            <Clock size={12} /> {article.readingMinutes} мин
          </span>
        </div>
      </div>
    </article>
  );
}
