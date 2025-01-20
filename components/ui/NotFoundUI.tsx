import { useTranslations } from 'next-intl';
import MetallicCard from '@/components/ui/MetallicCard';
import MetallicButton from '@/components/ui/MetallicButton';

interface NotFoundUIProps {
  locale: string;
}

export default function NotFoundUI({ locale }: NotFoundUIProps) {
  const t = useTranslations() as unknown as (key: string) => string;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <MetallicCard className="mx-auto">
        <div className="space-y-6 text-center px-8 py-6">
          {/* 404 */}
          <h1
            className="text-8xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-slate-700 to-slate-900
                            filter drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
          >
            404
          </h1>

          {/* 페이지를 찾을 수 없습니다 */}
          <h2 className="text-2xl font-semibold text-gray-700">{t('에러_404_페이지없음')}</h2>

          {/* 요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다. */}
          <p className="text-gray-600">{t('에러_404_페이지없음설명')}</p>

          {/* 홈으로 돌아가기 */}
          <div>
            <MetallicButton href={`/${locale}`}>{t('에러_404_홈으로가기')}</MetallicButton>
          </div>
        </div>
      </MetallicCard>
    </div>
  );
}
