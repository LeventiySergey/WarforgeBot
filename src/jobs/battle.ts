import type { Bot } from '../types/telegram.js';
import type { Database } from '../types/database.js';
import { startJob } from '../services/jobs.js';
import { performBattle } from '../services/castle.js';

export function startBattleJob(bot: Bot, db: Database) {
  startJob({
    minutes: [0],
    hours: [0, 10, 17],
    callback: async () => {
      const stats = await performBattle({ db });
      // TODO:
      console.log(stats);
    },
  });
}
