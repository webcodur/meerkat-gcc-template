import type { Metadata } from 'next';
import '@/app/globals.css';
import '@/assets/styles/fonts.css';
import { useLocale } from 'next-intl';

export const metadata: Metadata = {
    title: '주차 관제 시스템',
    description: '주차 관제 시스템 관리자 페이지',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = useLocale();
    
    return (
        <html data-theme="light" dir="ltr" lang={locale}>
            <body>{children}</body>
        </html>
    );
} 