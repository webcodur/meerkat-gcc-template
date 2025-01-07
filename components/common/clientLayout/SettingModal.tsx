'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { themeAtom, modalAtom } from '@/atoms';
import { useTranslations } from 'next-intl';
import MetallicModal from '@/components/ui/MetallicModal';

export default function SettingModal() {
    const t = useTranslations();
    const [theme, setTheme] = useAtom(themeAtom);
    const [modal, setModal] = useAtom(modalAtom);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && modal === 'settings') {
                setModal(null);
            }
        };

        window.addEventListener('keydown', handleEscKey);
        return () => window.removeEventListener('keydown', handleEscKey);
    }, [modal, setModal]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTheme = e.target.value as 'light' | 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <MetallicModal
            isOpen={modal === 'settings'}
            onClose={() => setModal(null)}
            title={t('Settings')}
        >
            <div className="space-y-6 relative">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('theme')}</label>
                    <select
                        value={theme}
                        onChange={handleThemeChange}
                        className="select w-full bg-base-100 cursor-pointer relative z-30 pointer-events-auto"
                    >
                        <option value="light">{t('theme_light')}</option>
                        <option value="dark">{t('theme_dark')}</option>
                    </select>
                </div>
            </div>
        </MetallicModal>
    );
} 