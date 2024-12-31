'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { themeAtom, settingsOpenAtom } from '@/atoms';
import { useTranslations } from 'next-intl';

export default function SettingModal() {
    const t = useTranslations();
    const [theme, setTheme] = useAtom(themeAtom);
    const [isOpen, setIsOpen] = useAtom(settingsOpenAtom);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscKey);
        return () => window.removeEventListener('keydown', handleEscKey);
    }, [isOpen, setIsOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-96 rounded-lg bg-base-100 p-6 shadow-xl">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute end-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-base-200 text-gray-500 transition-colors hover:bg-base-300 hover:text-gray-700"
                    aria-label={t('setting')}
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

                <h2 className="mb-6 text-2xl font-bold">{t('Settings')}</h2>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">{t('theme')}</label>
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
                            className="select select-bordered w-full"
                        >
                            <option value="light">{t('theme_light')}</option>
                            <option value="dark">{t('theme_dark')}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
} 