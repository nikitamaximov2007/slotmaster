import type { Win } from '@/types';
import { getSlotBySlug } from './slots';

const makeWin = (
  id: string,
  slotSlug: string,
  player: string,
  casinoName: string,
  casinoSlug: string,
  amount: string,
  date: string,
): Win => {
  const slot = getSlotBySlug(slotSlug);
  if (!slot) throw new Error(`Unknown slot: ${slotSlug}`);

  return {
    id,
    slotSlug,
    player,
    slot: slot.name,
    slotImage: slot.image,
    provider: slot.provider,
    casinoName,
    casinoSlug,
    amount,
    date,
    verificationStatus: 'verified',
  };
};

export const wins: Win[] = [
  makeWin('w1', 'gates-of-olympus', 'A***v', 'Dragon Money', 'dragon-money', '520 000 ₽', 'Сегодня, 14:23'),
  makeWin('w2', 'sweet-bonanza', 'M***na', 'Volna', 'volna', '345 600 ₽', 'Сегодня, 12:11'),
  makeWin('w3', 'big-bass-bonanza', 'K***ov', 'R7 Casino', 'r7', '285 000 ₽', 'Сегодня, 10:57'),
  makeWin('w4', 'book-of-dead', 'S***in', 'Cosmo', 'cosmo', '210 000 ₽', 'Сегодня, 09:33'),
  makeWin('w5', 'wolf-gold', 'D***ev', '1xSlots', '1xslots', '176 300 ₽', 'Вчера, 22:08'),
  makeWin('w6', 'sugar-rush', 'L***ko', 'Aurora', 'aurora', '154 900 ₽', 'Вчера, 20:40'),
  makeWin('w7', 'starlight-princess', 'P***rt', 'Gama', 'gama', '143 200 ₽', 'Вчера, 18:15'),
  makeWin('w8', 'fruit-party', 'T***sk', 'Joy Casino', 'joy-casino', '128 700 ₽', 'Вчера, 16:54'),
  makeWin('w9', 'reactoonz', 'R***na', 'Booi', 'booi', '99 400 ₽', 'Вчера, 15:12'),
  makeWin('w10', 'money-train-3', 'N***el', 'Dragon Money', 'dragon-money', '91 800 ₽', '17 июня, 21:30'),
  makeWin('w11', 'aviator', 'V***or', 'Volna', 'volna', '86 200 ₽', '17 июня, 19:44'),
  makeWin('w12', 'mines', 'E***ma', 'Cosmo', 'cosmo', '74 500 ₽', '17 июня, 18:05'),
  makeWin('w13', 'plinko', 'I***ya', 'R7 Casino', 'r7', '68 900 ₽', '17 июня, 15:36'),
  makeWin('w14', 'crazy-time', 'B***is', 'Joy Casino', 'joy-casino', '63 200 ₽', '17 июня, 13:48'),
  makeWin('w15', 'jetx', 'O***eg', 'Gama', 'gama', '58 700 ₽', '17 июня, 11:20'),
  makeWin('w16', 'legacy-of-dead', 'Y***ra', 'Sol Casino', 'sol-casino', '52 400 ₽', '16 июня, 22:10'),
];
