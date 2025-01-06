/**
 * 사이드바의 서브 메뉴 아이템을 렌더링하는 컴포넌트
 * - 현재 경로에 따라 활성화 상태를 시각적으로 표시
 * - 아이콘이 있는 경우 해당 아이콘을 표시하고, 없는 경우 점(dot) 아이콘을 표시
 */
'use client';

import Link from 'next/link';
import type { SubMenuItem as SubMenuItemType } from '@/types/sidebar';
import { usePathname } from 'next/navigation';
import { BsDot } from 'react-icons/bs';

interface SubMenuItemProps {
    item: SubMenuItemType; // 서브 메뉴 아이템 정보 (제목, 경로, 아이콘 등)
}

export default function SubMenuItem({ item }: SubMenuItemProps) {
    const pathname = usePathname();
    // 현재 경로에서 언어 코드(첫 3글자)를 제거하여 실제 경로와 비교
    const pathWithoutLocale = pathname.slice(3)
    const isActive = pathWithoutLocale === item.path
    
    return (
        <li>
            <Link
                href={item.path}
                className={`
                    block p-2 rounded-lg
                    hover:bg-base-300/70
                    ${isActive ? 'font-medium' : ''}
                `}
            >
                <div className="flex items-center">
                    <BsDot className={`me-1 text-[2rem] ${isActive ? 'text-red-500' : 'text-gray-500'}`} />
                    {item.title}
                </div>
            </Link>
        </li>
    );
} 