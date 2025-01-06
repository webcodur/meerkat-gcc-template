'use client';

import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom } from '@/atoms';
import { HiMenuAlt2, HiMenuAlt3 } from 'react-icons/hi';

export default function SidebarToggle() {
    const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarOpenAtom);
    const [dir] = useAtom(dirAtom);
    const isRTL = dir === 'rtl';

    const buttonClasses = [
        'p-1.5 relative',
        'transition-all duration-300 cursor-pointer',
        'w-[80px] h-[80px]',
        isSidebarOpen ? 'bg-base-300/90' : 'bg-base-300/10',
    ].join(' ');

    const iconClasses = [
        'h-8 w-8 text-gray-700 transition-all duration-300 absolute',
        'drop-shadow-[0_0_8px_rgba(255,255,255,1)]',
        'top-[30%] -translate-y-1/2',
        isRTL ? 'end-[30%] translate-x-1/2' : 'start-[30%] -translate-x-1/2',
        isSidebarOpen ? 'rotate-180 opacity-100' : 'opacity-50',
    ].join(' ');

    const handleToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`fixed top-0 ${isRTL ? 'inset-inline-end' : 'inset-inline-start'} z-50`}>
            <button
                onClick={handleToggle}
                className={buttonClasses}
                aria-label="사이드바 토글"
                type="button"
                style={{
                    clipPath: isRTL 
                        ? 'polygon(100% 0, 100% 100%, 0 0)' 
                        : 'polygon(0 0, 100% 0, 0 100%)'
                }}
            >
                {isRTL ? (
                    <HiMenuAlt3 className={iconClasses} />
                ) : (
                    <HiMenuAlt2 className={iconClasses} />
                )}
            </button>
        </div>
    );
}
