'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SidebarLogo() {
  const t = useTranslations();

  return (
    <Link
      href="/"
      className="flex items-center rounded-lg 
            justify-center align-center m-auto mt-[20px] mb-[10px]"
    >
      <h1 className="text-xl font-bold text-center p-2 text-gray-800">{t('sidebar_title')}</h1>
    </Link>
  );
}
