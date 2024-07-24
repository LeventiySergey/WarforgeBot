import type { NumericType, OnlyFieldsOfType } from 'mongodb';

import type { Database, Player } from '../types/database.js';

export type CreatePlayerArgs = {
  db: Database;
  data: Player;
};

export async function createPlayer(args: CreatePlayerArgs) {
  return args.db.player.insertOne(args.data);
}

export type GetPlayerArgs = {
  db: Database;
  userId: number;
};

export async function getPlayer(args: GetPlayerArgs) {
  return args.db.player.findOne({ userId: args.userId });
}

export type UpdatePlayerArgs = {
  db: Database;
  userId: number;
  increase?: OnlyFieldsOfType<Omit<Player, 'userId'>, NumericType | undefined>;
  set?: Partial<Omit<Player, 'userId'>>;
};

export async function updatePlayer(args: UpdatePlayerArgs) {
  const { db, userId, increase = {}, set = {} } = args;

  return db.player.updateOne(
    { userId },
    {
      $set: set,
      $inc: increase,
    },
  );
}

export async function getUpdatePlayer(args: UpdatePlayerArgs) {
  const { db, userId, increase = {}, set = {} } = args;

  const result = await db.player.findOneAndUpdate(
    { userId },
    {
      $set: set,
      $inc: increase,
    },
    { returnDocument: 'after' },
  );

  return result.value;
}
