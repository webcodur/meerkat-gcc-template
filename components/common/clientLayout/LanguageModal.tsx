'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { langAtom, dirAtom } from '@/atoms';
import { useLocale, useTranslations } from 'next-intl';

export default function LanguageModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const t = useTranslations();
    const currentLocale = useLocale();
    const [lang, setLang] = useAtom(langAtom);
    const [, setDir] = useAtom(dirAtom);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscKey);
        return () => window.removeEventListener('keydown', handleEscKey);
    }, [isOpen, onClose]);

    const handleLanguageChange = (newLang: 'ko' | 'en' | 'ar') => {
        if (currentLocale === newLang) return;
        setLang(newLang);
        setDir(newLang === 'ar' ? 'rtl' : 'ltr');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-80 rounded-lg bg-base-100 p-6 shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute end-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-base-200 text-gray-500 transition-colors hover:bg-base-300 hover:text-gray-700"
                    aria-label={t('close')}
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

                <h2 className="mb-6 text-2xl font-bold">{t('language')}</h2>

                <div className="space-y-4">
                    {[
                        { code: 'ko', label: '한국어' },
                        { code: 'en', label: 'English' },
                        { code: 'ar', label: 'العربية' }
                    ].map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code as 'ko' | 'en' | 'ar')}
                            className={`w-full rounded-lg p-3 text-start transition-colors ${
                                lang === language.code
                                    ? 'bg-primary text-primary-content'
                                    : 'bg-base-200 hover:bg-base-300'
                            }`}
                        >
                            {language.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
} 