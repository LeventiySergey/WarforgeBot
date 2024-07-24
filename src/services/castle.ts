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

type StateGroupResult = {
  _id: {
    classType: Player['classType'];
    state: Player['state'];
  };
  gold: number;
  count: number;
  attack: number;
  defence: number;
};

export async function performBattle(args: PerformBattleArgs) {
  const results = await args.db.player
    .aggregate<StateGroupResult>([
      {
        $group: {
          _id: {
            classType: '$classType',
            state: '$state',
          },
          gold: { $sum: '$gold' },
          count: { $sum: 1 },
          attack: { $sum: 1 },
          defence: { $sum: 1 },
        },
      },
    ])
    .toArray();

  const result = {
    knight: {
      attack: { count: 0, gold: 0 },
      defense: { count: 0, gold: 0 },
      normal: { count: 0, gold: 0 },
    },
    gnome: {
      attack: { count: 0, gold: 0 },
      defense: { count: 0, gold: 0 },
      normal: { count: 0, gold: 0 },
    },
  };

  for (const group of results) {
    if (
      group._id.state !== 'defense' &&
      group._id.state !== 'attack' &&
      group._id.state !== 'normal'
    ) {
      continue;
    }

    const value =
      group._id.state === 'defense'
        ? group.defence
        : group._id.state === 'attack'
          ? group.attack
          : group.count;

    result[group._id.classType][group._id.state] = {
      count: value,
      gold: group.gold,
    };
  }

  // TODO: Transfer gold

  await args.db.player.updateMany(
    { state: { $ne: 'normal' } }, //
    { $set: { state: 'normal' } },
  );

  return result;
}
