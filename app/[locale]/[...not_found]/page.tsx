'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import MetallicCard from '@/components/ui/MetallicCard';
import MetallicButton from '@/components/ui/MetallicButton';

export default function CatchAllNotFound() {
  const t = useTranslations('Error');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="h-full px-8 flex items-center justify-center">
      <MetallicCard>
        <div className="space-y-6 text-center">
          {/* 404 */}
          <h1
            className="text-8xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-slate-700 to-slate-900
                            filter drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
          >
            404
          </h1>

          {/* 페이지를 찾을 수 없습니다 */}
          <h2 className="text-2xl font-semibold text-gray-700">{t('pageNotFound')}</h2>

          {/* 요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다. */}
          <p className="text-gray-600">{t('pageNotFoundDesc')}</p>

          {/* 홈으로 돌아가기 */}
          <div>
            <MetallicButton href={`/${locale}`}>{t('backToHome')}</MetallicButton>
          </div>
        </div>
      </MetallicCard>
    </div>
  );
}
