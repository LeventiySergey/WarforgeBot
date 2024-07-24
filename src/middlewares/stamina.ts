import type { ChatTypeContext, NextFunction } from 'grammy';

import type { PlayerContext } from '../types/context.js';
import { getUpdatePlayer } from '../services/player.js';

const STAMINA_REGEN_DELAY = 1 * 60 * 60 * 1000;

export async function staminaUpdater(
  ctx: ChatTypeContext<PlayerContext, 'private'>,
  next: NextFunction,
) {
  const { player } = ctx.dbEntities;

  const timePassed = player.staminaUsedAt ? Date.now() - Number(new Date(player.staminaUsedAt)) : 0;

  let staminaRegenerated = Math.floor(timePassed / STAMINA_REGEN_DELAY);
  if (staminaRegenerated > player.maxStamina - player.stamina) {
    staminaRegenerated = player.maxStamina - player.stamina;
  }

  if (player.stamina < player.maxStamina && player.staminaUsedAt && staminaRegenerated) {
    const nextUseDate = new Date(
      Number(new Date(player.staminaUsedAt)) + STAMINA_REGEN_DELAY * staminaRegenerated,
    );

    const updatedPlayer = await getUpdatePlayer({
      db: ctx.db,
      userId: ctx.from.id,
      increase: staminaRegenerated > player.maxStamina ? {} : { stamina: staminaRegenerated },
      set: {
        staminaUsedAt:
          player.maxStamina === player.stamina + staminaRegenerated ? null : nextUseDate,
        ...(staminaRegenerated > player.maxStamina ? { stamina: player.maxStamina } : {}),
      },
    });

    if (updatedPlayer) {
      ctx.dbEntities.player = updatedPlayer;
    }
  }

  await next();
}
