'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { themeAtom, langAtom, settingsOpenAtom, dirAtom } from '@/atoms';
import { useLocale } from 'next-intl';

export default function SettingModal() {
    const currentLocale = useLocale();
    const [theme, setTheme] = useAtom(themeAtom);
    const [lang, setLang] = useAtom(langAtom);
    const [isOpen, setIsOpen] = useAtom(settingsOpenAtom);
    const [, setDir] = useAtom(dirAtom);

    // 설정 창 닫기
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscKey);
        return () => window.removeEventListener('keydown', handleEscKey);
    }, [isOpen, setIsOpen]);

    // 언어 변경
    const handleLanguageChange = (newLang: 'ko' | 'en' | 'ar') => {
        if (currentLocale === newLang) return;
        
        setLang(newLang);
        setDir(newLang === 'ar' ? 'rtl' : 'ltr');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-96 rounded-lg bg-base-100 p-6 shadow-xl">
                {/* 설정 창 닫기 */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute end-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-base-200 text-gray-500 transition-colors hover:bg-base-300 hover:text-gray-700"
                    aria-label="설정 창 닫기"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* 설정 창 제목 */}
                <h2 className="mb-6 text-2xl font-bold">Settings</h2>

                {/* 설정 창 내용 */}
                <div className="space-y-6">
                    <div className="space-y-2">

                        {/* 테마 선택 */}
                        <label className="text-sm font-medium">Theme</label>
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
                            className="select select-bordered w-full"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>

                    <div className="space-y-2">

                        {/* 언어 선택 */}
                        <label className="text-sm font-medium">Language</label>
                        <select
                            value={lang}
                            onChange={(e) => handleLanguageChange(e.target.value as 'ko' | 'en' | 'ar')}
                            className="select select-bordered w-full"
                        >
                            <option value="ko">한국어</option>
                            <option value="en">English</option>
                            <option value="ar">العربية</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
} 