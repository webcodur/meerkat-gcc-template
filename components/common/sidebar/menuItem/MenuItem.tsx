'use client';

import { IoChevronDown } from 'react-icons/io5';
import type { MenuItem as MenuItemType } from '@/types/sidebar';
import SubMenuItem from './SubMenuItem';
import { memo } from 'react';
import { usePathname } from 'next/navigation';

/**
 * MenuItem 컴포넌트의 Props 인터페이스
 * @property {MenuItemType} item - 메뉴 아이템 데이터
 * @property {boolean} isExpanded - 서브메뉴 확장 여부
 * @property {() => void} onToggle - 서브메뉴 토글 핸들러
 */
interface MenuItemProps {
    item: MenuItemType;
    isExpanded: boolean;
    onToggle: () => void;
}

/**
 * 사이드바의 메뉴 아이템을 렌더링하는 컴포넌트
 * 
 * @description
 * - 메인 메뉴 아이템과 해당 서브메뉴들을 렌더링
 * - 메탈릭 하이테크 UI 스타일 가이드를 따르는 디자인
 * - 활성화 상태에 따른 시각적 피드백 제공
 * - 서브메뉴 확장/축소 기능 지원
 */
function MenuItem({ item, isExpanded, onToggle }: MenuItemProps) {
    const pathname = usePathname();
    
    // 현재 경로에서 locale 부분을 제외한 실제 경로 추출 (/ko/path -> /path)
    const actualPath = pathname.replace(/^\/[^/]+/, '');
    
    // 현재 경로가 메뉴 경로로 시작하는지 확인
    const isActive = item.path ? actualPath.startsWith(item.path) : false;

    return (
        <li>
            {/* 메인 메뉴 버튼 */}
            <button
                onClick={onToggle}
                className={`
                    w-full flex items-center justify-between p-2 rounded-lg
                    border-transparent
                    hover:bg-base-300/70
                `}
            >
                {/* 메인 타이틀 */}
                <span className={isActive ? 'font-medium' : ''}>
                    {item.title}
                </span>

                {/* 확장/축소 안내 아이콘 */}
                {item.subMenus && (
                    <div 
                        className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                        }`}
                    >
                        <IoChevronDown />
                    </div>
                )}
            </button>
            
            {/* 서브메뉴 영역 */}
            <div 
                className={`
                    overflow-hidden 
                    ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <ul className="mt-2 ms-1 space-y-2">
                    {item.subMenus?.map((subMenu) => (
                        <SubMenuItem
                            key={subMenu.path}
                            item={subMenu}
                        />
                    ))}
                </ul>
            </div>
        </li>
    );
}

// 불필요한 리렌더링 방지를 위한 메모이제이션
export default memo(MenuItem); 