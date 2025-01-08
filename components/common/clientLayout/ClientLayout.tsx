'use client';

import { useAtom } from 'jotai';
import { langAtom, themeAtom, dirAtom, isPageChangedAtom } from '@/atoms';
import { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { usePathname, useSearchParams } from 'next/navigation';

import Sidebar from '@/components/common/sidebar/Sidebar';
import SettingsButton from '@/components/common/clientLayout/fixedContents/SettingsButton';
import SidebarToggle from '@/components/common/clientLayout/fixedContents/SidebarToggle';
import MainContent from '@/components/common/clientLayout/MainContent';
import LanguageButton from '@/components/common/clientLayout/fixedContents/LanguageButton';
import Breadcrumb from '@/components/common/clientLayout/Breadcrumb';
import LoadingUI from '@/components/ui/LoadingUI';
import { fi, md, fo } from '@/data/constants/animation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {

    /* ============================ HOOKS ============================ */
    
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [lang] = useAtom(langAtom);
    const [theme] = useAtom(themeAtom);
    const [dir] = useAtom(dirAtom);
    const [, setIsPageChanged] = useAtom(isPageChangedAtom);

    const [messages, setMessages] = useState<Record<string, string>>({});
    const [isMounted, setIsMounted] = useState(false);
    const [isMinLoadingComplete, setIsMinLoadingComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);

    /* ============================ EFFECT ============================ */

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
            try {
                const response = await fetch(`/locales/${lang}.json`);
                if (!response.ok) throw new Error('Failed to load messages');
                const newMessages = await response.json();
                setMessages(newMessages);
            } catch (error) {
                console.error(`Failed to load messages for locale ${lang}:`, error);
                setMessages({});
            }
        };
        loadMessages();
    }, [lang]);

    // 페이지 로딩 상태 업데이트
    useEffect(() => {
        setIsPageChanged(true);
        Promise.resolve().then(() => {
            setIsPageChanged(false);
            console.log('페이지 로딩이 완료되었습니다.');
        });
    }, [pathname, searchParams, setIsPageChanged]);

    // 최소 로딩 (웹서비스 로딩 애니메이션) 완료 및 컨텐츠 표시
    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setIsMinLoadingComplete(true);
            // 최소 로딩 완료 후 컨텐츠를 서서히 표시
            const showTimer = setTimeout(() => {
                setShowContent(true);
            }, 100);
            return () => clearTimeout(showTimer);
        }, fi + md + fo);
        return () => clearTimeout(timer);
    }, []);

    /* ============================ TSX ============================ */

    // 초기 마운트 전에는 아무것도 렌더링하지 않음
    if (!isMounted) return null;

    // 최소 로딩 완료 전에는 로딩 UI 표시
    if (!isMinLoadingComplete || Object.keys(messages).length === 0) {
        return <LoadingUI />;
    }

    // 최소 로딩 완료 후 컨텐츠 표시
    return (
        <NextIntlClientProvider messages={messages} locale={lang}>
            <div className={`transition-opacity duration-500 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                {/* FIXED CONTENTS */}
                <SidebarToggle />
                <LanguageButton />
                <SettingsButton />

                {/* RELATIVE CONTENTS */}
                <div className="flex min-h-screen relative">
                    <Sidebar />
                    <div className="flex-1 bg-opacity-50 bg-gray-300">
                        <Breadcrumb />
                        <MainContent>{children}</MainContent>
                    </div>
                </div>
            </div>
        </NextIntlClientProvider>
    );
}
