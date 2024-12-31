import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/config';
import ClientLayout from '@/components/common/clientLayout/ClientLayout';
import JotaiProviders from '@/components/common/clientLayout/Providers';

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!locales.includes(locale as Locale)) notFound();

    let messages;
    try {
        messages = (await import(`@/public/locales/${locale}.json`)).default;
    } catch {
        notFound();
    }

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <JotaiProviders>
                <ClientLayout>{children}</ClientLayout>
            </JotaiProviders>
        </NextIntlClientProvider>
    );
}
