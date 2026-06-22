import type { Provider } from '@/types';

export const providers: Provider[] = [
  {
    slug: 'pragmatic-play',
    name: 'Pragmatic Play',
    logoGradient: 'bg-gradient-to-br from-[#f97316] to-[#ef4444]',
    gamesCount: '300+ слотов',
    description:
      'Один из самых популярных провайдеров слотов и live-игр. Известен сериями Sweet Bonanza, Gates of Olympus и The Dog House с механикой покупки бонуса и высокой волатильностью.',
    popularSlots: ['Sweet Bonanza', 'Gates of Olympus', 'The Dog House', 'Big Bass Bonanza'],
    verificationStatus: 'verified',
  },
  {
    slug: 'netent',
    name: 'NetEnt',
    logoGradient: 'bg-gradient-to-br from-[#22c55e] to-[#0ea5e9]',
    gamesCount: '200+ слотов',
    description:
      'Скандинавская студия с акцентом на качество графики и узнаваемые хиты. Слоты NetEnt часто отличаются понятной механикой и стабильным RTP.',
    popularSlots: ['Starburst', 'Gonzo’s Quest', 'Dead or Alive 2', 'Divine Fortune'],
    verificationStatus: 'verified',
  },
  {
    slug: 'playn-go',
    name: "Play'n GO",
    logoGradient: 'bg-gradient-to-br from-[#8b5cf6] to-[#2563eb]',
    gamesCount: '250+ слотов',
    description:
      'Студия, подарившая индустрии культовый Book of Dead. Делает упор на тематические слоты с проработанными бонусными раундами.',
    popularSlots: ['Book of Dead', 'Reactoonz', 'Rich Wilde', 'Moon Princess'],
    verificationStatus: 'verified',
  },
  {
    slug: 'hacksaw-gaming',
    name: 'Hacksaw Gaming',
    logoGradient: 'bg-gradient-to-br from-[#f43f5e] to-[#8b5cf6]',
    gamesCount: '120+ игр',
    description:
      'Молодая студия, популярная благодаря высоковолатильным слотам и краш-механикам. Часто экспериментирует с форматами игр.',
    popularSlots: ['Wanted Dead or a Wild', 'Chaos Crew', 'RIP City', 'Hand of Anubis'],
    verificationStatus: 'verified',
  },
  {
    slug: 'nolimit-city',
    name: 'Nolimit City',
    logoGradient: 'bg-gradient-to-br from-[#1e293b] to-[#ef4444]',
    gamesCount: '90+ слотов',
    description:
      'Студия для опытных игроков: экстремальная волатильность, нестандартные механики и высокий потенциальный множитель. Требует аккуратного управления банкроллом.',
    popularSlots: ['San Quentin', 'Mental', 'Fire in the Hole', 'Tombstone'],
    verificationStatus: 'verified',
  },
  {
    slug: 'evolution',
    name: 'Evolution',
    logoGradient: 'bg-gradient-to-br from-[#0ea5e9] to-[#1e40af]',
    gamesCount: 'Live-студии',
    description:
      'Лидер рынка live-казино: рулетка, блэкджек, баккара и игровые шоу с живыми ведущими. Стандарт для раздела «живых» игр.',
    popularSlots: ['Crazy Time', 'Lightning Roulette', 'Monopoly Live', 'Blackjack'],
    verificationStatus: 'verified',
  },
];

export const getProviderBySlug = (slug: string) => providers.find((p) => p.slug === slug);
