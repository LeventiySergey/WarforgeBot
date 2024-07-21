import { Keyboard, type NextFunction } from 'grammy';

import type { Database } from '../types/database.js';
import type { DefaultContext } from '../types/context.js';
import { createReplyWithTextFunc } from '../services/context.js';

export function defaultContext(db: Database) {
  return async (ctx: DefaultContext, next: NextFunction) => {
    ctx.text = createReplyWithTextFunc(ctx);
    ctx.label = ctx.t;
    ctx.db = db;
    ctx.keyboards = {
      chooseClass: {
        reply_markup: new Keyboard([
          [ctx.t('buttons.class.gnomes'), ctx.t('buttons.class.knights')],
        ]).resized(),
      },
      mainMenu: {
        reply_markup: new Keyboard([[ctx.t('buttons.main.hero')]]).resized(),
      },
    };

    await next();
  };
}
