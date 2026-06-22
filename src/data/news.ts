import type { NewsItem } from '@/types';
import { generatedImages } from './images';

// Homepage "Новости" block. Links point to existing blog articles so there are
// no dead routes; replace with dedicated news posts when the news feed launches.
export const news: NewsItem[] = [
  {
    id: 'n1',
    title: 'Новый провайдер в каталоге: на что смотреть в слотах 2026',
    image: generatedImages.news.updates,
    category: 'Слоты',
    date: '18 июня 2026',
    href: '/blog/luchshie-sloty-2026',
  },
  {
    id: 'n2',
    title: 'Турниры: разбираем правила и призовые фонды акций',
    image: generatedImages.news.tournament,
    category: 'Акции',
    date: '16 июня 2026',
    href: '/blog/turniry-v-onlajn-kazino',
  },
  {
    id: 'n3',
    title: 'Гид по выводу средств: как ускорить выплату',
    image: generatedImages.news.newSlots,
    category: 'Выплаты',
    date: '14 июня 2026',
    href: '/blog/kak-vyvesti-dengi-iz-kazino',
  },
];
