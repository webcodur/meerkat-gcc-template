export const locales = ['ko', 'en', 'ar'] as const;
export const defaultLocale = 'ko' as const;
export type Locale = (typeof locales)[number]; 