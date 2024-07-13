import type { Bot } from '../types/telegram.js';
import type { Database } from '../types/database.js';
import { startBattleJob } from './battle.js';

export function startJobs(bot: Bot, database: Database) {
  startBattleJob(bot, database);
}
