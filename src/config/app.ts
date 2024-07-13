import type { Bot } from '../types/telegram.js';
import type { Database } from '../types/database.js';
import { startJobs } from '../jobs/index.js';
import { validateEnv } from '../helpers/validate-env.js';
import { loadEnv } from '../helpers/load-env.js';
import { connectToDb } from './database.js';
import { startBot } from './bot.js';

export async function startApp() {
  try {
    loadEnv('../../.env');
    validateEnv(['TOKEN', 'DB_CONNECTION_STRING']);
  } catch (error) {
    console.error('Error occurred while loading environment:', error);
    process.exit(1);
  }

  let database: Database;
  try {
    database = await connectToDb();
  } catch (error) {
    console.error('Error occurred while connecting to the database:', error);
    process.exit(2);
  }

  let bot: Bot;
  try {
    bot = await startBot(database);
  } catch (error) {
    console.error('Error occurred while starting the bot:', error);
    process.exit(3);
  }

  startJobs(bot, database);
}
