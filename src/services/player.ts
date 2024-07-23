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

export type UpdatePlayerGoldArgs = {
  db: Database;
  userId: number;
  gold: number;
  set?: boolean;
};

export async function updatePlayerGold(args: UpdatePlayerGoldArgs) {
  const { db, userId, gold, set } = args;

  return db.player.updateOne(
    { userId },
    set //
      ? { $set: { gold } }
      : { $inc: { gold } },
  );
}

export type UpdatePlayerStateArgs = {
  db: Database;
  userId: number;
  state: Player['state'];
};

export async function updatePlayerState(args: UpdatePlayerStateArgs) {
  const { db, userId, state } = args;

  return db.player.updateOne({ userId }, { $set: { state } });
}
