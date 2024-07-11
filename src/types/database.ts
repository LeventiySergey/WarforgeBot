import type { Collection } from 'mongodb';

export type Player = {
  userId: number;
  name: string;
  emoji: number;
  gold: number;
};

export type Database = {
  player: Collection<Player>;
};
