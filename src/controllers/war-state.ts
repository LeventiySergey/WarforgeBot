import { Composer } from 'grammy';
import type { ChatTypeContext } from 'grammy';
import { hears } from '@grammyjs/i18n';

import type { PlayerContext } from '../types/context.js';
import { updatePlayerState } from '../services/player.js';

export const warStateController = new Composer<PlayerContext>();

async function handleStateChange(
  ctx: ChatTypeContext<PlayerContext, 'private'>,
  state: 'attack' | 'defense',
) {
  const { player } = ctx.dbEntities;

  await updatePlayerState({ db: ctx.db, userId: ctx.from.id, state });
  await ctx.text(`system-state-${player.classType}-${state}`);
}

warStateController
  .chatType('private')
  .filter(hears('buttons-main-attack'), ctx => handleStateChange(ctx, 'attack'));

warStateController
  .chatType('private')
  .filter(hears('buttons-main-defense'), ctx => handleStateChange(ctx, 'defense'));
