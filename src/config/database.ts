import { MongoClient } from 'mongodb';

import type { Castle, Database, Player } from '../types/database.js';
import { ensureCastles } from '../services/castle.js';

export async function connectToDb() {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);
  await client.connect();
  const mongoDb = client.db();

  const player = mongoDb.collection<Player>('Player');
  const castle = mongoDb.collection<Castle>('Castle');
  const database: Database = { player, castle };

  await ensureInitialized(database);

  return database;
}

async function ensureInitialized(db: Database) {
  await ensureCastles(db);
}
