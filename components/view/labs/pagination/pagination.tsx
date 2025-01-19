'use client';
import React, { memo } from 'react';
import { useTranslations } from 'next-intl';
import {
  PaginatedTableDark,
  PaginatedTableLight,
} from '@/components/ui/paginatedTable/PaginatedTable';

// 테이블 컴포넌트를 메모이제이션
const MemoizedDarkTable = memo(PaginatedTableDark);
const MemoizedLightTable = memo(PaginatedTableLight);

const PaginationPage = () => {
  const t = useTranslations() as unknown as (key: string) => string;

  return (
    <div className="space-y-8 pt-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">{t('테마_다크모드')}</h2>
        <div className="bg-gray-900 rounded-xl p-4">
          <MemoizedDarkTable />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{t('테마_라이트모드')}</h2>
        <div className="bg-gray-300 rounded-xl p-4">
          <MemoizedLightTable />
        </div>
      </div>
    </div>
  );
};

export default memo(PaginationPage);
