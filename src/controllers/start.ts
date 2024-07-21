import { Composer } from 'grammy';

import type { DefaultContext } from '../types/context.js';
import { getPlayer } from '../services/player.js';

export const startController = new Composer<DefaultContext>();

startController.chatType('private').command('start', async ctx => {
  const player = await getPlayer({ db: ctx.db, userId: ctx.from.id });
  if (player) {
    await ctx.text('start', { name: player.name }, ctx.keyboards.mainMenu);
  } else {
    await ctx.text('new-start', {}, ctx.keyboards.chooseClass);
  }
});
