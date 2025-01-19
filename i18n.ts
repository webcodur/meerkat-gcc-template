import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './config';

export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: (await import(`./public/locales/${defaultLocale}.json`)).default,
  };
});

export const dynamic = 'force-dynamic';
