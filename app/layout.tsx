import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/common/ClientLayout';
import JotaiProviders from '@/components/common/Providers';

export const metadata: Metadata = {
    title: '주차 관제 시스템',
    description: '주차 관제 시스템 관리자 페이지',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" data-theme="light">
            <body>
                <JotaiProviders>
                    <ClientLayout>{children}</ClientLayout>
                </JotaiProviders>
            </body>
        </html>
    );
}