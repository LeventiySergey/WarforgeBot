import { Composer, Keyboard } from 'grammy';

import type { DefaultContext } from '../types/context.js';
import { getPlayer } from '../services/player.js';

export const startController = new Composer<DefaultContext>();

startController.chatType('private').command('start', async ctx => {
  const player = await getPlayer({ db: ctx.db, userId: ctx.from.id });
  if (player) {
    await ctx.text('start', { name: player.name });
  } else {
    await ctx.text(
      'new.start',
      {},
      {
        reply_markup: new Keyboard([
          [ctx.i18n.t('buttons.class.gnomes'), ctx.i18n.t('buttons.class.knights')],
        ]).resized(),
      },
    );
  }
});
