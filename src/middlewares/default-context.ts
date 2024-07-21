import type { NextFunction } from 'grammy';

import type { Database } from '../types/database.js';
import type { DefaultContext } from '../types/context.js';
import { createKeyboards } from '../services/keyboard.js';
import { createReplyWithTextFunc } from '../services/context.js';

export function defaultContext(db: Database) {
  return async (ctx: DefaultContext, next: NextFunction) => {
    ctx.text = createReplyWithTextFunc(ctx);
    ctx.keyboards = createKeyboards(ctx);

    ctx.db = db;

    await next();
  };
}
