import type { NextFunction } from 'grammy';

import type { DefaultContext } from '../types/context.js';

export async function privateChat(ctx: DefaultContext, next: NextFunction) {
  if (ctx.chat?.type === 'private') {
    await next();
  }
}
