'use client';

import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom } from '@/atoms';
import { HiMenuAlt2, HiMenuAlt3 } from 'react-icons/hi';

export default function SidebarToggle() {
    const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarOpenAtom);
    const [dir] = useAtom(dirAtom);
    const isRTL = dir === 'rtl';

    const buttonClasses = [
        'p-1.5 bg-gray-50/90 backdrop-blur-sm hover:bg-gray-100/90 transition-all duration-200 shadow-sm hover:shadow w-[70px] h-[70px]',
    ].join(' ');

    const iconClasses = [
        'h-6 w-6 text-gray-700 transition-transform duration-200 absolute',
        'top-[40%] -translate-y-1/2',
        isRTL ? 'end-[40%] translate-x-1/2' : 'start-[40%] -translate-x-1/2',
        isSidebarOpen ? 'rotate-180' : '',
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
                        : 'polygon(0 0, 0% 100%, 100% 0)'
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
