import { Composer, type NextFunction } from 'grammy';

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

export const warShutdown = new Composer<PlayerContext>();

warShutdown.chatType('private').on('message', async (ctx: PlayerContext, next: NextFunction) => {
  if (isInWar()) {
    await ctx.text(`system.wait.${ctx.dbEntities.player.classType}`);
  } else {
    await next();
  }
});
