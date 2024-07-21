import { I18n } from '@grammyjs/i18n';

import type { DefaultContext } from '../types/context.js';

export function initLocaleEngine(path: string, defaultLocale = 'en') {
  const i18n = new I18n<DefaultContext>({
    directory: path,
    defaultLocale,
    useSession: true,
  });
  return i18n;
}
