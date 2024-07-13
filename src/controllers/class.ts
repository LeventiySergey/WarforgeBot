import { Composer, InputFile } from 'grammy';
import type { I18n } from '@grammyjs/i18n';

import type { DefaultContext } from '../types/context.js';
import { createPlayer, getPlayer } from '../services/player.js';
import { resolvePath } from '../helpers/resolve-path.js';

export function dynamicClassController(i18n: I18n) {
  const classController = new Composer<DefaultContext>();

  const gnomeButton = i18n.t('en', 'buttons.class.gnomes');
  const knightButton = i18n.t('en', 'buttons.class.knights');

  classController.chatType('private').hears([gnomeButton, knightButton], async ctx => {
    const player = await getPlayer({ db: ctx.db, userId: ctx.from.id });
    if (player) {
      return;
    }

    const classType = ctx.message.text === gnomeButton ? 'gnome' : 'knight';

    await createPlayer({
      db: ctx.db,
      data: {
        userId: ctx.from.id,
        name: ctx.from.username ?? 'Unnamed',
        emoji: 0,
        gold: 0,
        classType,
      },
    });

    await ctx.replyWithPhoto(
      new InputFile(resolvePath(import.meta.url, `../../assets/intro/${classType}.webp`)),
      {
        caption: ctx.i18n.t(`new.intro.${classType}`),
        reply_markup: { remove_keyboard: true },
      },
    );
  });

  return classController;
}
