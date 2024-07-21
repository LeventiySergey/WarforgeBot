import { Composer } from 'grammy';
import type { I18n } from '@grammyjs/i18n';

import type { PlayerContext } from '../types/context.js';

export function profilesController(i18n: I18n) {
  const controller = new Composer<PlayerContext>();

  const heroButton = i18n.t('en', 'buttons.main.hero');

  controller.chatType('private').hears([heroButton], async ctx => {
    const p = ctx.dbEntities.player;

    await ctx.text('profile', {
      emoji: ctx.i18n.t(`emojis.${p.classType}.${p.emoji}`),
      name: p?.name,
      gold: p?.gold,
      state: ctx.i18n.t(`states.${p.classType}.${p.state}`),
    });
  });

  return controller;
}
