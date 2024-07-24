import type { Collection } from 'mongodb';

export type Player = {
  userId: number;
  name: string;
  emoji: number;
  gold: number;
  classType: 'gnome' | 'knight';
  state: 'normal' | 'attack' | 'defense' | 'quest';
  maxStamina: number;
  stamina: number;
  staminaUsedAt: Date | null;
};

export type Castle = {
  owner: Player['classType'];
  health: number;
  glory: number;
};

export type Database = {
  player: Collection<Player>;
  castle: Collection<Castle>;
};
