import { Composer, InputFile } from 'grammy';
import { hears } from '@grammyjs/i18n';

import type { Player } from '../types/database.js';
import type { DefaultContext } from '../types/context.js';
import { createPlayer, getPlayer } from '../services/player.js';
import { resolvePath } from '../helpers/resolve-path.js';
import { getRandomInt } from '../helpers/randomInteger.js';

async function handleClassSelection(ctx: DefaultContext, classType: Player['classType']) {
  const player = await getPlayer({ db: ctx.db, userId: ctx.from!.id });
  if (player) {
    return;
  }

  const emoji = classType === 'gnome' ? getRandomInt(1, 3) : getRandomInt(4, 6);

  await createPlayer({
    db: ctx.db,
    data: {
      userId: ctx.from!.id,
      name: ctx.from!.username ?? 'Unnamed',
      emoji,
      gold: 0,
      classType,
      state: 'normal',
    },
  });

  await ctx.replyWithPhoto(
    new InputFile(resolvePath(import.meta.url, `../../assets/intro/${classType}.webp`)),
    {
      caption: ctx.t(`new.intro.${classType}`),
      ...ctx.keyboards.mainMenu,
    },
  );
}

export const classController = new Composer<DefaultContext>();

classController
  .chatType('private')
  .filter(hears('buttons.class.gnomes'), async ctx => handleClassSelection(ctx, 'gnome'));

classController
  .chatType('private')
  .filter(hears('buttons.class.knights'), async ctx => handleClassSelection(ctx, 'knight'));
