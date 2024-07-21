import { Composer } from 'grammy';
import { hears } from '@grammyjs/i18n';

import type { PlayerContext } from '../types/context.js';

export const profileController = new Composer<PlayerContext>();

profileController.chatType('private').filter(hears('buttons.main.hero'), async ctx => {
  const { player } = ctx.dbEntities;

  await ctx.text('profile', {
    emoji: ctx.i18n.t(`emojis.${player.classType}.${player.emoji}`),
    name: player.name,
    gold: player.gold,
    state: ctx.i18n.t(`states.${player.classType}.${player.state}`),
  });
});
