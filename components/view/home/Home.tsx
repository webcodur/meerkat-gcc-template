'use client';

import { DateDisplay } from '@/components/ui/dateDisplay/DateDisplay';
import { useLocale } from 'next-intl';

const Home = () => {
  const currentLocale = useLocale();

  return (
    <div className="relative">
      {/* display 를 둘러싼 컨테이너 */}
      <div className="flex flex-col w-full h-[720px] p-[100px] items-center justify-center">
        <DateDisplay date={new Date()} />
        <div className="mt-4 text-lg">Current Language: {currentLocale}</div>
      </div>
    </div>
  );
};
export default Home;
