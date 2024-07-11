import { MongoClient } from 'mongodb';

import type { Database, Player } from '../types/database.js';

export async function connectToDb() {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);
  await client.connect();
  const mongoDb = client.db();
  const player = mongoDb.collection<Player>('Player');
  const database: Database = { player };
  return database;
}
