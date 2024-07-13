import type { Bot as TelegramBot } from 'grammy';

import type { DefaultContext } from './context.js';

export type Bot = TelegramBot<DefaultContext>;
