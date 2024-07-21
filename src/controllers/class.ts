import { Composer, InputFile } from 'grammy';
import type { I18n } from '@grammyjs/i18n';

import type { DefaultContext } from '../types/context.js';
import { createPlayer, getPlayer } from '../services/player.js';
import { resolvePath } from '../helpers/resolve-path.js';
import { getRandomInt } from '../helpers/randomInteger.js';

export function classController(i18n: I18n) {
  const controller = new Composer<DefaultContext>();

  const gnomeButton = i18n.t('en', 'buttons.class.gnomes');
  const knightButton = i18n.t('en', 'buttons.class.knights');

  controller.chatType('private').hears([gnomeButton, knightButton], async ctx => {
    const player = await getPlayer({ db: ctx.db, userId: ctx.from.id });
    if (player) {
      return;
    }

    const classType = ctx.message.text === gnomeButton ? 'gnome' : 'knight';
    const emoji = classType === 'gnome' ? getRandomInt(1, 3) : getRandomInt(4, 6);

    await createPlayer({
      db: ctx.db,
      data: {
        userId: ctx.from.id,
        name: ctx.from.username ?? 'Unnamed',
        emoji,
        gold: 0,
        classType,
        state: 'normal',
      },
    });

    await ctx.replyWithPhoto(
      new InputFile(resolvePath(import.meta.url, `../../assets/intro/${classType}.webp`)),
      {
        caption: ctx.i18n.t(`new.intro.${classType}`),
        ...ctx.keyboards.mainMenu,
      },
    );
  });

  return controller;
}
