'use client';

import { useAtom } from 'jotai';
import { langAtom, themeAtom, dirAtom } from '@/atoms';
import { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import SettingModal from './SettingModal';
import LanguageModal from './LanguageModal';
import Sidebar from './Sidebar';
import Settings from './Settings';
import SidebarToggle from './SidebarToggle';
import MainContent from './MainContent';
import { IoLanguage } from 'react-icons/io5';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [lang] = useAtom(langAtom);
    const [theme] = useAtom(themeAtom);
    const [dir] = useAtom(dirAtom);
    const [messages, setMessages] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

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
            <div className="min-h-screen bg-base-100">
                <SidebarToggle />
                <Sidebar />
                <div className="absolute top-3 end-16 z-20">
                    <button
                        onClick={() => setIsLanguageModalOpen(true)}
                        className="w-10 h-10 rounded-full relative bg-gradient-to-br from-gray-300 via-white to-gray-200 shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.7)] transition-all duration-300 border-2 border-white"
                        aria-label="Change Language"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <IoLanguage className="w-6 h-6 text-gray-700 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]" />
                        </div>
                    </button>
                </div>
                <Settings />
                <MainContent>
                    {children}
                </MainContent>
                <SettingModal />
                <LanguageModal 
                    isOpen={isLanguageModalOpen}
                    onClose={() => setIsLanguageModalOpen(false)}
                />
            </div>
        </NextIntlClientProvider>
    );
} 