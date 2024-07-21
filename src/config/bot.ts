import { Bot as TelegramBot, session } from 'grammy';
import type { Composer, NextFunction } from 'grammy';
import type { I18n } from '@grammyjs/i18n';

import type { Bot, Middleware } from '../types/telegram.js';
import type { Database } from '../types/database.js';
import type { DefaultContext, PlayerContext } from '../types/context.js';
import { warShutdown } from '../middlewares/war-shutdown.js';
import { privateChat } from '../middlewares/private-chat.js';
import { playerContext } from '../middlewares/player.js';
import { defaultContext } from '../middlewares/default-context.js';
import { resolvePath } from '../helpers/resolve-path.js';
import { startController } from '../controllers/start.js';
import { profileController } from '../controllers/profiles.js';
import { classController } from '../controllers/class.js';
import { initLocaleEngine } from './locale-engine.js';

function attach(
  bot: Bot,
  middleware:
    | Composer<DefaultContext>
    | Composer<PlayerContext>
    | ((ctx: DefaultContext | PlayerContext, next: NextFunction) => Promise<void> | void),
) {
  bot.use(middleware as unknown as Middleware);
}

function setupBot(bot: Bot, i18n: I18n) {
  bot.use(session());
  bot.use(i18n.middleware());
  // eslint-disable-next-line github/no-then
  bot.catch(console.error);
}

function attachListeners(bot: Bot, db: Database) {
  attach(bot, defaultContext(db));
  attach(bot, privateChat);
  attach(bot, startController);
  attach(bot, classController);
  attach(bot, playerContext);
  attach(bot, profileController);
  attach(bot, warShutdown);
}

export async function startBot(database: Database): Promise<Bot> {
  const localesPath = resolvePath(import.meta.url, '../locales');
  const i18n = initLocaleEngine(localesPath);

  const bot = new TelegramBot<DefaultContext>(process.env.TOKEN);

  setupBot(bot, i18n);
  attachListeners(bot, database);

  return new Promise(resolve => bot.start({ onStart: () => resolve(bot) }));
}
