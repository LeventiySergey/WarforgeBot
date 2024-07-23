import { Composer } from 'grammy';
import { hears } from '@grammyjs/i18n';

import type { PlayerContext } from '../types/context.js';
import { updatePlayerGold } from '../services/player.js';
import { getRandomInt } from '../helpers/randomInteger.js';

export const questController = new Composer<PlayerContext>();

questController.chatType('private').filter(hears('buttons-main-quest'), async ctx => {
  const { player } = ctx.dbEntities;

  // TODO: stamina

  const result = getRandomInt(0, 1) === 0 ? 'positive' : 'negative';
  const story = getRandomInt(1, 10);
  const sign = result === 'positive' ? 1 : -1;
  let newGold = getRandomInt(1, 20);

  if (player.gold + newGold * sign < 0) {
    newGold = player.gold;
  }

  await updatePlayerGold({
    db: ctx.db,
    userId: ctx.from.id,
    gold: newGold * sign,
  });

  await ctx.text(`quest-${player.classType}-${result}-${story}`, { gold: newGold });
});
