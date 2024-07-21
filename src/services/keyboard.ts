import { Keyboard } from 'grammy';

import type { DefaultContext } from '../types/context.js';

export function createKeyboards(ctx: DefaultContext) {
  const keyboard = (keys: string[][]) => ({
    reply_markup: new Keyboard(keys.map(row => row.map(label => ctx.t(label)))).resized(),
  });

  return {
    chooseClass: keyboard([['buttons-class-gnomes', 'buttons-class-knights']]),
    mainMenu: keyboard([['buttons-main-hero']]),
  };
}
