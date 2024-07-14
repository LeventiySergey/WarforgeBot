import type { Api, Context, SessionFlavor } from 'grammy';
import type { I18nContextFlavor, TemplateData } from '@grammyjs/i18n';

import type { Database, Player } from './database.js';

type CustomBase<C extends Context> = {
  text: (
    text: string,
    templateData?: TemplateData,
    extra?: Parameters<Api['sendMessage']>[2],
  ) => ReturnType<C['reply']>;
  label: (resourceKey: string, templateData?: Readonly<TemplateData>) => string;
  db: Database;
  inWar: boolean;
};

type BaseContext = Context & I18nContextFlavor & SessionFlavor<Record<string, never>>;

type ExtendedContext = BaseContext & CustomBase<BaseContext>;

export type DefaultContext = ExtendedContext;

export type PlayerContext = DefaultContext & {
  dbEntities: {
    player: Player;
  };
};
