'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CatchAllNotFound() {
    const t = useTranslations('Error');
    const params = useParams();
    const locale = params.locale as string;

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8">
                {/* 메탈릭 카드 컨테이너 */}
                <div
                    className="bg-gradient-to-br from-gray-300 via-white to-gray-200 
                      p-8 rounded-xl border-3 border-white
                      shadow-[0_0_25px_8px_rgba(255,255,255,0.8)]
                      relative overflow-hidden"
                >
                    {/* 내부 글로우 효과 */}
                    <div className="absolute inset-0 bg-white/10 shadow-inner"></div>

                    {/* 콘텐츠 */}
                    <div className="relative space-y-6 text-center">
                        {/* 404 숫자 */}
                        <h1
                            className="text-8xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-slate-700 to-slate-900
                         filter drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
                        >
                            404
                        </h1>

                        {/* 메시지 */}
                        <h2 className="text-2xl font-semibold text-gray-700">
                            {t('pageNotFound')}
                        </h2>
                        <p className="text-gray-600">{t('pageNotFoundDesc')}</p>

                        {/* 홈으로 돌아가기 버튼 */}
                        <div>
                            <Link
                                href={`/${locale}`}
                                className="inline-flex items-center px-6 py-3 mt-4
                         bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700
                         text-white rounded-lg
                         border border-blue-300/50
                         shadow-[0_0_15px_rgba(59,130,246,0.2)]
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                         transition-all duration-300"
                            >
                                {t('backToHome')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
