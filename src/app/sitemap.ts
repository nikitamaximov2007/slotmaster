import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { casinos } from '@/data/casinos';
import { rankingCategories } from '@/data/rankings';
import { providers } from '@/data/providers';
import { articles } from '@/data/articles';
import { slots } from '@/data/slots';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${SITE.url}${path}`;

  const staticRoutes = [
    '/',
    '/casino',
    '/reviews',
    '/bonuses',
    '/wins',
    '/providers',
    '/blog',
    '/faq',
    '/about',
    '/contacts',
    '/privacy',
    '/terms',
    '/responsible-gambling',
    '/cookies',
  ].map((path) => ({
    url: url(path),
    lastModified: now,
    changeFrequency: (path === '/' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));

  const casinoCats = rankingCategories.map((c) => ({
    url: url(`/casino/${c.slug}`),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const reviews = casinos.map((c) => ({
    url: url(c.reviewUrl),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: c.isFeatured ? 0.9 : 0.6,
  }));

  const providerPages = providers.map((p) => ({
    url: url(`/providers/${p.slug}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const blogPages = articles.map((a) => ({
    url: url(`/blog/${a.slug}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: a.status === 'published' ? 0.7 : 0.5,
  }));

  const slotPages = slots.map((slot) => ({
    url: url(`/slots/${slot.slug}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.55,
  }));

  return [...staticRoutes, ...casinoCats, ...reviews, ...providerPages, ...blogPages, ...slotPages];
}
