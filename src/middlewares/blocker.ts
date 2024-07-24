import type { NextFunction } from 'grammy';

import type { PlayerContext } from '../types/context.js';

function isInWar() {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  return (
    (currentMinute === 59 && (currentHour === 23 || currentHour === 9 || currentHour === 16)) ||
    ((currentMinute === 0 || currentMinute === 1) &&
      (currentHour === 0 || currentHour === 24 || currentHour === 10 || currentHour === 17))
  );
}

export async function warBlocker(ctx: PlayerContext, next: NextFunction) {
  const { player } = ctx.dbEntities;

  if (isInWar()) {
    await ctx.text(`system-wait-war-${player.classType}`);
    return;
  }

  await next();
}

export async function stateBlocker(ctx: PlayerContext, next: NextFunction) {
  const { player } = ctx.dbEntities;

  if (player.state === 'quest') {
    await ctx.text('system-wait-stamina');
    return;
  }

  await next();
}

export async function staminaBlocker(ctx: PlayerContext, next: NextFunction) {
  const { player } = ctx.dbEntities;

  if (player.stamina === 0) {
    await ctx.text('system-wait-stamina');
    return;
  }

  await next();
}
