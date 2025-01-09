'use client';

import { useParams } from 'next/navigation';
import NotFoundUI from '@/components/ui/NotFoundUI';

export default function CatchAllNotFound() {
  const params = useParams();
  const locale = params.locale as string;

  return <NotFoundUI locale={locale} />;
}
