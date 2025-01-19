'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SidebarLogo() {
  const t = useTranslations() as unknown as (key: string) => string;

  return (
    <Link
      href="/"
      className="flex items-center rounded-lg 
            justify-center align-center m-auto mt-[20px] mb-[10px]"
    >
      <h1 className="text-xl font-bold text-center p-2 text-gray-800">{t('사이드바제목')}</h1>
    </Link>
  );
}
