import type { NextFunction } from 'grammy';

import type { Database } from '../types/database.js';
import type { DefaultContext } from '../types/context.js';
import { createReplyWithTextFunc } from '../services/context.js';

export function defaultContext(db: Database) {
  return async (ctx: DefaultContext, next: NextFunction) => {
    ctx.text = createReplyWithTextFunc(ctx);
    ctx.label = ctx.i18n.t;
    ctx.db = db;

    await next();
  };
}
