'use client';

import { useAtom } from 'jotai';
import { sidebarOpenAtom } from '@/atoms';
import { HiMenuAlt2 } from 'react-icons/hi';

export default function SidebarToggle() {
    const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);

    const buttonClasses = [
        'fixed top-2 left-2 z-50 p-1.5 bg-gray-50/90 backdrop-blur-sm rounded-lg hover:bg-gray-100/90 transition-all duration-200 shadow-sm hover:shadow',
        isOpen ? 'opacity-100' : 'opacity-75 hover:opacity-100'
    ].join(' ');

    const iconClasses = [
        'h-5 w-5 text-gray-700 transition-transform duration-200',
        isOpen ? 'rotate-180' : ''
    ].join(' ');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button
            onClick={handleToggle}
            className={buttonClasses}
            aria-label="사이드바 토글"
            type="button"
        >
            <HiMenuAlt2 className={iconClasses} />
        </button>
    );
}
