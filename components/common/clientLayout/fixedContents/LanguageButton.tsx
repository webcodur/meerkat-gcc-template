import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { modalAtom } from '@/atoms';
import LanguageModal from '../LanguageModal';
import { HiLanguage } from 'react-icons/hi2';

export default function LanguageButton() {
    const t = useTranslations();
    const [, setModal] = useAtom(modalAtom);

    return (
        <>
            <button
                onClick={() => setModal('language')}
                className="fixed end-16 top-4 z-50 w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 via-white to-gray-200 shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.7)] border-2 border-white transition-all duration-300"
                aria-label={t('language')}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <HiLanguage className="h-6 w-6 text-gray-700 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]" />
                </div>
            </button>
            <LanguageModal />
        </>
    );
}
