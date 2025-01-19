import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: [
    // 다음 경로들을 제외한 모든 경로에 미들웨어 적용
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
