'use client';

import { useAtom } from 'jotai';
import { langAtom, themeAtom, dirAtom, isPageChangedAtom, isFirstVisitAtom } from '@/atoms';
import { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { usePathname, useSearchParams } from 'next/navigation';

import Sidebar from '@/components/common/sidebar/Sidebar';
import SettingsButton from '@/components/common/clientLayout/fixedContents/SettingsButton';
import SidebarToggle from '@/components/common/clientLayout/fixedContents/SidebarToggle';
import MainContent from '@/components/common/clientLayout/MainContent';
import LanguageButton from '@/components/common/clientLayout/fixedContents/LanguageButton';
import LoadingUI from '@/components/ui/LoadingUI';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  /* ============================ 1. HOOKS ============================ */

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [lang] = useAtom(langAtom);
  const [theme] = useAtom(themeAtom);
  const [dir] = useAtom(dirAtom);
  const [, setIsPageChanged] = useAtom(isPageChangedAtom);
  const [isFirstVisit, setIsFirstVisit] = useAtom(isFirstVisitAtom);

  const [messages, setMessages] = useState<Record<string, string>>({});
  const [isMounted, setIsMounted] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  /* ============================ 2. EFFECT ============================ */

  // 2.1 초기 마운트 및 HTML 속성 설정
  useEffect(() => {
    setIsMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }, [theme, dir, lang]);

  // 2.2 언어팩 로딩시도 및 상태관리
  useEffect(() => {
    const loadMessages = async () => {
      try {
        // 2.2.1 언어팩 로딩 시도
        const response = await fetch(`/locales/${lang}.json`);
        if (!response.ok) throw new Error('Failed to load messages');
        const newMessages = await response.json();
        setMessages(newMessages);

        // 2.2.2 첫 방문 시 2초 후 로딩
        if (isFirstVisit) {
          setTimeout(() => {
            setIsFirstVisit(false);
            setIsLoadingComplete(true);
            setShowContent(true);
          }, 2000);
        }
        // 2.2.3 재방문 시 즉시 로딩
        else {
          setIsLoadingComplete(true);
          setShowContent(true);
        }
      } catch (error) {
        // 오류 화면 표시
        console.error(`언어팩 로딩 실패 (${lang}):`, error);
        document.body.innerHTML = `
          <div style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px;">
            <h1 style="color: #FF4444; font-size: 24px; margin-bottom: 16px;">
              치명적인 오류가 발생했습니다
            </h1>
            <p style="color: #666666; font-size: 16px;">
              언어팩을 불러오는데 실패했습니다. 페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
            </p>
          </div>
        `;
      }
    };
    loadMessages();
  }, [lang, isFirstVisit, setIsFirstVisit]);

  // 2.3 페이지 변경 감지
  useEffect(() => {
    setIsPageChanged(true);
    Promise.resolve().then(() => {
      setIsPageChanged(false);
    });
  }, [pathname, searchParams, setIsPageChanged]);

  /* ============================ RENDER ============================ */

  // 3.1 초기 마운트 전에는 아무것도 렌더링하지 않음
  if (!isMounted) return null;

  // 3.2 로딩 완료 전이거나 메시지가 없는 경우 로딩 UI 표시
  if (!isLoadingComplete || Object.keys(messages).length === 0) {
    return <LoadingUI />;
  }

  // 3.3 모든 준비가 완료된 후 컨텐츠 표시
  return (
    <NextIntlClientProvider messages={messages} locale={lang}>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* FIXED CONTENTS */}
        <SidebarToggle />
        <LanguageButton />
        <SettingsButton />

        {/* RELATIVE CONTENTS */}
        <div className="flex min-h-screen relative">
          <Sidebar />
          <div className="flex-1 bg-gray-300 relative">
            <MainContent>{children}</MainContent>
          </div>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
