'use client';
import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom } from '@/atoms';
import { HiMenuAlt2, HiMenuAlt3 } from 'react-icons/hi';

export default function SidebarToggle() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarOpenAtom);
  const [dir] = useAtom(dirAtom);
  const isRTL = dir === 'rtl';

  const buttonClasses = [
    'fixed top-0',
    isRTL ? 'right-0' : 'left-0',
    'w-[80px] h-[80px]',
    'cursor-pointer',
    'hover:bg-base-300/80',
    isSidebarOpen ? 'bg-base-300/90' : 'bg-base-300/50',
    'bg-[url("/images/metalicBackground4.png")]',
    'bg-cover bg-center',
    'z-[100]',
  ].join(' ');

  const iconClasses = [
    'h-8 w-8',
    'text-black',
    'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]',
    'absolute top-[30%]',
    isRTL ? 'right-[30%] translate-x-1/2' : 'left-[30%] -translate-x-1/2',
    '-translate-y-1/2 transition-all duration-300',
    isSidebarOpen ? 'rotate-180 opacity-100' : 'opacity-80',
  ].join(' ');

  return (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className={buttonClasses}
      aria-label="사이드바 토글"
      type="button"
      style={{
        clipPath: isRTL ? 'polygon(100% 0, 100% 100%, 0 0)' : 'polygon(0 0, 100% 0, 0 100%)',
      }}
    >
      {isRTL ? <HiMenuAlt3 className={iconClasses} /> : <HiMenuAlt2 className={iconClasses} />}
    </button>
  );
}
