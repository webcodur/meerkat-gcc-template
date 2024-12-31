'use client';

import { useAtom } from 'jotai';
import { sidebarOpenAtom } from '@/atoms';
import { HiMenuAlt2 } from 'react-icons/hi';

export default function SidebarToggle() {
    const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);

    // 버튼 클래스 정의
    const buttonClasses = [
        'p-1.5 bg-gray-50/90 backdrop-blur-sm hover:bg-gray-100/90 transition-all duration-200 shadow-sm hover:shadow w-[60px] h-[60px]',
        isOpen ? 'opacity-100' : 'opacity-75 hover:opacity-100',
    ].join(' ');

    // 아이콘 클래스 정의
    const iconClasses = [
        'h-5 w-5 text-gray-700 transition-transform duration-200 absolute top-2 left-2',
        isOpen ? 'rotate-180' : '',
    ].join(' ');

    // 토글 함수 정의
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 z-50">
            <button
                onClick={handleToggle}
                className={buttonClasses}
                aria-label="사이드바 토글"
                type="button"
                style={{
                    clipPath: 'polygon(0 0, 0% 100%, 100% 0)'
                }}
            >
                <HiMenuAlt2 className={iconClasses} />
            </button>
        </div>
    );
}
