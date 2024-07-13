import type { NextFunction } from 'grammy';

import type { PlayerContext, DefaultContext } from '../types/context.js';
import { getPlayer } from '../services/player.js';

export async function playerContext(ctx: DefaultContext, next: NextFunction) {
  if (!ctx.from?.id) {
    // NOTE: This will drop all updates without ctx.from.id such as inline queries
    return;
  }

  const player = await getPlayer({
    db: ctx.db,
    userId: ctx.from.id,
  });

  if (!player) {
    console.error('Player not found', { userId: ctx.from.id });
    return;
  }

  (ctx as PlayerContext).dbEntities = { player };

  await next();
}
