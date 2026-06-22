const generated = (fileName: string) => `/assets/generated/${fileName}`;

export const generatedImages = {
  heroMain: generated('hero-slotmaster-main.png'),
  heroMachine: generated('hero-slotmaster-machine.png'),
  dragonFeatured: generated('dm-featured-card-bg.png'),
  dragonCashback: generated('dm-cashback-card-bg.png'),
  dragonReview: generated('dm-review-hero.png'),
  bonusesHero: generated('bonuses-page-hero.png'),
  bonuses: {
    volna: generated('bonus-volna-bg.png'),
    cosmo: generated('bonus-cosmo-bg.png'),
    r7: generated('bonus-r7-bg.png'),
    '1xslots': generated('bonus-1xslots-bg.png'),
    'play-fortuna': generated('bonus-play-fortuna-bg.png'),
    joy: generated('bonus-joy-bg.png'),
    gama: generated('bonus-gama-bg.png'),
    booi: generated('bonus-booi-bg.png'),
    aurora: generated('bonus-aurora-bg.png'),
  },
  news: {
    updates: generated('news-casino-updates.png'),
    tournament: generated('news-casino-tournament.png'),
    newSlots: generated('news-new-slots.png'),
  },
  articles: {
    security: generated('article-security.png'),
    withdrawal: generated('article-withdrawal.png'),
    fastPayouts: generated('article-fast-payouts.png'),
    bonusesPromocodes: generated('article-bonuses-promocodes.png'),
    rtp: generated('article-rtp.png'),
    volatility: generated('article-volatility.png'),
    chooseSlot: generated('article-choose-slot.png'),
    beginnerMistakes: generated('article-beginner-mistakes.png'),
    mobileCasino: generated('article-mobile-casino.png'),
    tournaments: generated('article-tournaments.png'),
    responsibleGambling: generated('article-responsible-gambling.png'),
  },
  pages: {
    faq: generated('faq-hero.png'),
    about: generated('about-slotmaster.png'),
    contacts: generated('contacts-slotmaster.png'),
  },
};
