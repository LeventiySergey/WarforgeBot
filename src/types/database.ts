import type { Collection } from 'mongodb';

export type Player = {
  userId: number;
  name: string;
  emoji: number;
  gold: number;
  classType: 'gnome' | 'knight';
};

export type Database = {
  player: Collection<Player>;
};
