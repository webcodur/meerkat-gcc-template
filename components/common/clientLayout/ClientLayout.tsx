'use client';

import { useAtom } from 'jotai';
import { langAtom, themeAtom, dirAtom } from '@/atoms';
import { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import Sidebar from '../sidebar/Sidebar';
import SettingsButton from './SettingsButton';
import SidebarToggle from '@/components/common/clientLayout/SidebarToggle';
import MainContent from './MainContent';
import LanguageButton from './LanguageButton';
import MetallicPatternBrushed from '@/components/ui/pattern/MetallicPatternBrushed';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [lang] = useAtom(langAtom);
    const [theme] = useAtom(themeAtom);
    const [dir] = useAtom(dirAtom);
    const [messages, setMessages] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    // HTML 속성 설정
    useEffect(() => {
        setIsMounted(true);
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', lang);
    }, [theme, dir, lang]);

    // 언어 파일 로드
    useEffect(() => {
        const loadMessages = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/locales/${lang}.json`);
                if (!response.ok) throw new Error('Failed to load messages');
                const newMessages = await response.json();
                setMessages(newMessages);
            } catch (error) {
                console.error(`Failed to load messages for locale ${lang}:`, error);
                setMessages({});
            } finally {
                setIsLoading(false);
            }
        };

        loadMessages();
    }, [lang]);

    if (!isMounted) return null;
    if (isLoading) return <div>Loading...</div>;

    return (
        <NextIntlClientProvider messages={messages} locale={lang}>
            {/* FIXED CONTENTS */}
            <SidebarToggle />
            <LanguageButton />
            <SettingsButton />

            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none">
                <MetallicPatternBrushed className="w-full h-full bg-opacity-80" />
            </div>

            {/* RELATIVE CONTENTS */}
            <div className="flex min-h-screen relative">
                <Sidebar />
                <div className="flex-1 bg-opacity-50">
                    <MainContent>{children}</MainContent>
                </div>
            </div>
        </NextIntlClientProvider>
    );
}