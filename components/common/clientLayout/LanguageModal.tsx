'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { langAtom, dirAtom, modalAtom } from '@/atoms';
import { useLocale, useTranslations } from 'next-intl';
import MetallicModal from '@/components/ui/MetallicModal';

export default function LanguageModal() {
    const t = useTranslations();
    const currentLocale = useLocale();
    const [lang, setLang] = useAtom(langAtom);
    const [, setDir] = useAtom(dirAtom);
    const [modal, setModal] = useAtom(modalAtom);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && modal === 'language') {
                setModal(null);
            }
        };

        window.addEventListener('keydown', handleEscKey);
        return () => window.removeEventListener('keydown', handleEscKey);
    }, [modal, setModal]);

    const handleLanguageChange = (newLang: 'ko' | 'en' | 'ar') => {
        if (currentLocale === newLang) return;
        setLang(newLang);
        setDir(newLang === 'ar' ? 'rtl' : 'ltr');
    };

    return (
        <MetallicModal
            isOpen={modal === 'language'}
            onClose={() => setModal(null)}
            title={t('language')}
        >
            <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                    {[
                        { code: 'ko', label: '한국어' },
                        { code: 'en', label: 'English' },
                        { code: 'ar', label: 'العربية' }
                    ].map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code as 'ko' | 'en' | 'ar')}
                            className={`group relative w-full translate-z-0 rounded-lg border transition-all duration-300 ${
                                lang === language.code
                                    ? 'border-blue-300/50 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 p-4 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                                    : 'border-white/50 bg-gradient-to-br from-gray-200 via-white to-gray-100 p-4 text-gray-700 hover:border-white/80'
                            }`}
                            style={{ willChange: 'transform' }}
                        >
                            <span className="relative block text-start font-medium">
                                {language.label}
                            </span>
                            <div className={`absolute inset-0 rounded-lg ${
                                lang === language.code
                                    ? 'bg-blue-400/5'
                                    : 'bg-white/5'
                            }`} />
                        </button>
                    ))}
                </div>
            </div>
        </MetallicModal>
    );
} 