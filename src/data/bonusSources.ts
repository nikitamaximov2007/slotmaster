// Registry of bonus sources. Each casino maps to where its bonus terms come
// from and when they were last reviewed by the editorial team.
//
// IMPORTANT: the amounts in bonuses.ts are editorial values prepared by the
// SlotMaster team. To lock them as partner-verified, replace `sourceUrl` with
// the official partner URL and update `lastChecked` after each review.
// Until a partner feed is connected, "Условия" links point to the on-site review.

export type BonusSource = {
  sourceName: string;
  sourceUrl: string;
  lastChecked: string; // ISO date of the last editorial review
};

export const bonusSources: Record<string, BonusSource> = {
  'dragon-money': { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/dragon-money', lastChecked: '2026-06-18' },
  aurora: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/aurora', lastChecked: '2026-06-18' },
  volna: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/volna', lastChecked: '2026-06-18' },
  cosmo: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/cosmo', lastChecked: '2026-06-18' },
  r7: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/r7', lastChecked: '2026-06-18' },
  '1xslots': { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/1xslots', lastChecked: '2026-06-18' },
  'play-fortuna': { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/play-fortuna', lastChecked: '2026-06-18' },
  'joy-casino': { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/joy-casino', lastChecked: '2026-06-18' },
  booi: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/booi', lastChecked: '2026-06-18' },
  admiral: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/admiral', lastChecked: '2026-06-18' },
  'sol-casino': { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/sol-casino', lastChecked: '2026-06-18' },
  riobet: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/riobet', lastChecked: '2026-06-18' },
  jvspin: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/jvspin', lastChecked: '2026-06-18' },
  champion: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/champion', lastChecked: '2026-06-18' },
  gama: { sourceName: 'Обзор SlotMaster', sourceUrl: '/reviews/gama', lastChecked: '2026-06-18' },
};

export const getBonusSource = (slug: string): BonusSource | undefined => bonusSources[slug];
