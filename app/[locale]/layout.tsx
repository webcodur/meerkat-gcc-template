import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/config';
import ClientLayout from '@/components/common/clientLayout/ClientLayout';
import JotaiProviders from '@/components/common/clientLayout/Providers';

/**
 * 다국어 지원을 위한 레이아웃 컴포넌트
 * [locale] 동적 라우트를 처리하고 해당 언어의 번역을 로드합니다.
 */
export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Next.js 13.4+ 버전에서는 동적 라우트의 params가 Promise를 반환합니다.
    // 따라서 params 사용 전에 반드시 await로 해결해야 합니다.
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    
    // 설정된 유효한 locale인지 확인
    // 유효하지 않은 경우 404 페이지로 리다이렉트
    if (!locales.includes(locale as Locale)) notFound();

    // 해당 locale의 번역 파일을 동적으로 불러옵니다.
    // public/locales 디렉토리에서 JSON 파일을 가져옵니다.
    let messages;
    try {
        messages = (await import(`@/public/locales/${locale}.json`)).default;
    } catch {
        // 번역 파일이 없는 경우 404 페이지로 리다이렉트
        notFound();
    }

    // NextIntlClientProvider로 하위 컴포넌트에 locale과 번역 데이터를 제공
    // JotaiProviders로 전역 상태 관리 제공
    // ClientLayout으로 공통 레이아웃 구성
    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <JotaiProviders>
                <ClientLayout>{children}</ClientLayout>
            </JotaiProviders>
        </NextIntlClientProvider>
    );
}
