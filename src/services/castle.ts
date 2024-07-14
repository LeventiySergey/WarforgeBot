import type { Castle, Database, Player } from '../types/database.js';

export async function ensureCastles(db: Database) {
  await db.castle.findOneAndUpdate(
    { owner: 'gnome' },
    {
      $setOnInsert: {
        owner: 'gnome',
        health: 1000,
        glory: 100,
      },
    },
    { upsert: true },
  );

  await db.castle.findOneAndUpdate(
    { owner: 'knight' },
    {
      $setOnInsert: {
        owner: 'knight',
        health: 1000,
        glory: 100,
      },
    },
    { upsert: true },
  );
}

export type GetCastleArgs = {
  db: Database;
  owner: Castle['owner'];
};

export async function getCastle(args: GetCastleArgs) {
  return args.db.castle.findOne({ owner: args.owner });
}

export type UpdateСastleArgs = {
  db: Database;
  owner: Castle['owner'];
  health?: number;
  glory?: number;
};

export async function updateCastle(args: UpdateСastleArgs) {
  const { db, owner, health = 0, glory = 0 } = args;

  return db.castle.updateOne(
    { owner }, //
    { $inc: { health, glory } },
  );
}

export type PerformBattleArgs = { db: Database };

type StatEntry = {
  _id: {
    classType: Player['classType'];
    state: Player['state'];
  };
  count: number;
};

export async function performBattle(args: PerformBattleArgs) {
  const stats = await args.db.player
    .aggregate<StatEntry>([
      {
        $group: {
          _id: {
            classType: '$classType',
            state: '$state',
          },
          count: { $sum: 1 },
        },
      },
    ])
    .toArray();

  await args.db.player.updateMany(
    { state: { $ne: 'normal' } }, //
    { $set: { state: 'normal' } },
  );

  const result = {
    knight: {
      attack: 0,
      defence: 0,
    },
    gnome: {
      attack: 0,
      defence: 0,
    },
  };

  for (const entry of stats) {
    if (entry._id.state === 'normal') {
      continue;
    }
    result[entry._id.classType][entry._id.state] = entry.count;
  }

  return result;
}
