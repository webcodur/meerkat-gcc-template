import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './config';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'never'  // URL에 locale prefix를 사용하지 않음
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']};
