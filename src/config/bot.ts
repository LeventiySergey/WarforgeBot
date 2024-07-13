import { Bot as TelegramBot, session } from 'grammy';
import type { I18n } from '@grammyjs/i18n/dist/source/i18n.js';

import type { Bot } from '../types/telegram.js';
import type { Database } from '../types/database.js';
import type { DefaultContext } from '../types/context.js';
import { createReplyWithTextFunc } from '../services/context.js';
import { playerContext } from '../middlewares/player.js';
import { resolvePath } from '../helpers/resolve-path.js';
import { startController } from '../controllers/start.js';
import { dynamicClassController } from '../controllers/class.js';
import { initLocaleEngine } from './locale-engine.js';

function setupDefaultContext(bot: Bot, database: Database) {
  bot.use(async (ctx, next) => {
    ctx.text = createReplyWithTextFunc(ctx);
    ctx.db = database;
    await next();
  });
}

function setupMiddlewares(bot: Bot, i18n: I18n) {
  bot.use(session());
  bot.use(i18n.middleware());
  // eslint-disable-next-line github/no-then
  bot.catch(console.error);
}

function setupControllers(bot: Bot, i18n: I18n) {
  bot.use(startController);
  bot.use(dynamicClassController(i18n));
  bot.use(playerContext);
}

export async function startBot(database: Database): Promise<Bot> {
  const localesPath = resolvePath(import.meta.url, '../locales');
  const i18n = initLocaleEngine(localesPath);

  const bot = new TelegramBot<DefaultContext>(process.env.TOKEN);

  setupDefaultContext(bot, database);
  setupMiddlewares(bot, i18n);
  setupControllers(bot, i18n);

  return new Promise(resolve => bot.start({ onStart: () => resolve(bot) }));
}
